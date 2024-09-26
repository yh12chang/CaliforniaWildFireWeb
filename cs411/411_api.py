from flask import Flask, request, Response, render_template
from flask.templating import Environment
from flask_cors import *
from db import Database, json, pymysql
import UI
# from write import get_aggregated_data

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})

# initialize DB here
db = Database()
cursor = db.mysql_cursor

@app.route('/users-form')
def users_form():
  return render_template('users.html')

@app.route('/fires-form')
def fires_form():
  return render_template('fires.html')

@app.route('/archive-form')
def archive_form():
    return render_template('archive.html')

@app.route('/admin-unit-form')
def admin_unit_form():
  return render_template('admin-unit.html')    

@app.route('/counties-form')
def counties_form():
    return render_template('counties.html')

@app.route('/advanced/wan')
def advanced_wan():
    results = cursor.execute("""SELECT county_name, CAST(sum(injuries) AS UNSIGNED) AS total_injuries, CAST(sum(fatalities) AS UNSIGNED) AS total_deaths
                                from counties C natural join fires F
                                WHERE F.active = false AND county_name NOT LIKE 'County%'
                                GROUP by county_id, fire_id
                                ORDER by total_deaths DESC, total_injuries DESC, county_name
                                LIMIT 15""")
                                
    data = cursor.fetchall()
    col_names = [x[0] for x in cursor.description]
    return render_template('admin-unit.html', columns_adv = tuple(col_names), data_adv = data)

@app.route('/advanced/josh')
def advanced_josh():
    results = cursor.execute("""SELECT temp.years as Years, COUNT(*) AS Num_occured, CAST(SUM(acres_burned) AS UNSIGNED) AS Acres, GROUP_CONCAT(DISTINCT county_id) AS All_counties
                                FROM (SELECT SUBSTRING(started_date,1,4) AS years, county_id, acres_burned
                                from fires) AS temp NATURAL JOIN counties
                                WHERE temp.years NOT LIKE "1969"
                                GROUP BY temp.years
                                ORDER BY temp.years
                                LIMIT 15""")
                                
    data = cursor.fetchall()
    col_names = [x[0] for x in cursor.description]
    return render_template('counties.html', columns_adv = tuple(col_names), data_adv = data)

@app.route('/advanced/john')
def advanced_john():
    cursor.execute("""SELECT admin_unit_name, count(CASE cal_fire_statement WHEN 'TRUE' THEN 1 ELSE NULL END) as num_cal_fires, count(fire_id) as num_fires
                                FROM fires f NATURAL JOIN admin_unit_resources r
                                GROUP BY r.admin_unit_name
                                HAVING num_cal_fires <> num_fires
                                ORDER BY 
                                num_fires DESC,
                                admin_unit_name
                                LIMIT 15 """)
    
    # json_data = []
    # data = cursor.fetchone()
    # while data:
    #     if data:
    #         col_names = [x[0] for x in cursor.description]
    #         json_data.append(dict(zip(col_names, data)))
    #     data = cursor.fetchone()
    # return Response(json.dumps(json_data), status=200)
    data = cursor.fetchall()
    col_names = [x[0] for x in cursor.description]
    return render_template('archive.html', columns_adv = tuple(col_names), data_adv = data)

@app.route('/advanced/alex')
def advanced_alex():
    results = cursor.execute("""SELECT admin_unit_name, GROUP_CONCAT(fire_name) AS fire_names, COUNT(fire_id) AS number_of_fires, CAST(sum(F.injuries) AS UNSIGNED) AS injuries, CAST(sum(F.fatalities) AS UNSIGNED) AS fatalities
                            FROM fires F NATURAL JOIN admin_unit_resources A
                            WHERE F.injuries <> 0
                            GROUP BY admin_unit_name
                            ORDER BY number_of_fires DESC """)

    data = cursor.fetchall()
    col_names = [x[0] for x in cursor.description]
    return render_template('users.html', columns_adv = tuple(col_names), data_adv = data)

@app.route('/fires', methods=['GET', 'PUT', 'POST', 'DELETE']) 
def fires(): 
    if request.method == 'GET':
        fire_id = request.args.get('fire_id')

        # check to see if fire exists
        found = ''
        if fire_id != '':
            found = cursor.execute('SELECT * from fires where fire_id = ' + "'" + fire_id + "'")
            if not found:
                notfound = 'No fires found in fires with fire_id ' + "'" + fire_id + "'"
                return render_template('fires.html', notfound = notfound)
        if found == '':
            return render_template('fires.html', getResult=fire_id)
        # return archie info 
        data = cursor.fetchone()
        data = list(map(str, data))
        col_names = [x[0] for x in cursor.description]

        return render_template('fires.html', columns = col_names, data=data)

    else:
        fire_info = json.loads(json.dumps(request.form))
        fire_id = fire_info['fire_id']
        found = ''
        if fire_info['_method'] == 'PUT':
            # check to see if fire exists

            if fire_info['fire_id'] == 'null' or not fire_info['fire_id']:
                message_update = 'Must have a fire_id to update fires.'
                return render_template('fires.html', message = message_update)
            if fire_id != '':
                found = cursor.execute('SELECT * from fires where fire_id = ' + "'" + fire_id + "'")
                if not found:
                    notfound = 'Can not update a fire with id = ' + "'" + fire_id + "'"
                    return render_template('fires.html', notfound = notfound)
            if found == '':
                return render_template('fires.html', getResult = fire_id)
            
            put_str = ''
            for key in fire_info:
                if key != 'fire_id' and key != '_method' and fire_info[key] != '':
                    if type(fire_info[key]) == int or type(fire_info[key]) == float:
                        put_str = ' ' + put_str + key + '=' + str(fire_info[key]) + ","
                    else:
                        put_str = ' ' + put_str + key + '=' + "'" + fire_info[key] + "',"

            # print(put_str)
            cursor.execute('UPDATE fires SET' + put_str[:-1] + ' WHERE fire_id = ' + "'" + fire_id + "'")
            cursor.execute('CALL AggregateFiresData()')
            found = cursor.execute('SELECT county_id from fires where fire_id = ' +  "'" + fire_id + "'")
            county_id = cursor.fetchone()
            get_aggregated_data(county_id[0])       
            message_update = 'Successfully updated fires.'  
            return render_template('fires.html', message = message_update)



        if fire_info['_method'] == 'POST':
            if any(key for key in fire_info if fire_info[key] == ''):
                message_insert = 'Error! Must have all required column names to insert.'
                return render_template('fires.html', message = message_insert)
            if fire_info['fire_id'] == 'null' or not fire_info['fire_id']:
                message_insert = 'Must have a fire_id to insert.'
                return render_template('users.html', message = message_insert)

            # create tuple of values and insert
            fire_info_array = []
            # this should do the same thing
            # for key in fire_info:
                # if key != '_method':
                    # fire_info_array.append(fire_info[key].encode('utf-8'))
            fire_info_array.append(fire_info['fire_id'].encode('utf-8'))
            fire_info_array.append(fire_info['fire_name'].encode('utf-8'))
            fire_info_array.append(fire_info['county_id'].encode('utf-8'))
            fire_info_array.append(fire_info['acres_burned'].encode('utf-8'))
            fire_info_array.append(fire_info['active'].encode('utf-8'))
            fire_info_array.append(fire_info['cal_fire_statement'].encode('utf-8'))
            fire_info_array.append(fire_info['condition_statement'].encode('utf-8'))
            fire_info_array.append(fire_info['control_statement'].encode('utf-8'))
            fire_info_array.append(fire_info['extinguished'].encode('utf-8'))
            fire_info_array.append(fire_info['fatalities'].encode('utf-8'))
            fire_info_array.append(fire_info['featured'].encode('utf-8'))
            fire_info_array.append(fire_info['fuel_type'].encode('utf-8'))
            fire_info_array.append(fire_info['injuries'].encode('utf-8'))
            fire_info_array.append(fire_info['latitude'].encode('utf-8'))
            fire_info_array.append(fire_info['location'].encode('utf-8'))
            fire_info_array.append(fire_info['longitude'].encode('utf-8'))
            fire_info_array.append(fire_info['major_incident'].encode('utf-8'))
            fire_info_array.append(fire_info['percent_contained'].encode('utf-8'))
            fire_info_array.append(fire_info['personnel_involved'].encode('utf-8'))
            fire_info_array.append(fire_info['search_description'].encode('utf-8'))
            fire_info_array.append(fire_info['search_keywords'].encode('utf-8'))
            fire_info_array.append(fire_info['started_date'].encode('utf-8'))
            fire_info_array.append(fire_info['status'].encode('utf-8'))
            fire_info_array.append(fire_info['structures_damaged'].encode('utf-8'))
            fire_info_array.append(fire_info['structures_destroyed'].encode('utf-8'))
            fire_info_array.append(fire_info['structures_evacuated'].encode('utf-8'))
            fire_info_array.append(fire_info['structures_threatened'].encode('utf-8'))
            values = tuple(fire_info_array)

            insert_query = ("""INSERT IGNORE INTO fires (fire_id, fire_name, county_id, acres_burned, active, cal_fire_statement, condition_statement, control_statement, extinguished, fatalities,
                        featured, fuel_type, injuries, latitude, location, longitude, major_incident, percent_contained, personnel_involved, search_description, search_keywords, started_date, status,
                        structures_damaged, structures_destroyed, structures_evacuated, structures_threatened)
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                        ON DUPLICATE KEY UPDATE
                            fire_name = VALUES(fire_name),
                            county_id = VALUES(county_id),
                            acres_burned = VALUES(acres_burned),
                            active = VALUES(active),
                            cal_fire_statement = VALUES(cal_fire_statement),
                            condition_statement = VALUES(condition_statement),
                            control_statement = VALUES(control_statement),
                            extinguished = VALUES(extinguished),
                            fatalities = VALUES(fatalities),
                            featured = VALUES(featured),
                            fuel_type = VALUES(fuel_type),
                            injuries = VALUES(injuries),
                            latitude = VALUES(latitude),
                            location = VALUES(location),
                            longitude = VALUES(longitude),
                            major_incident = VALUES(major_incident),
                            percent_contained = VALUES(percent_contained),
                            personnel_involved = VALUES(personnel_involved),
                            search_description = VALUES(search_description),
                            search_keywords = VALUES(search_keywords),
                            started_date = VALUES(started_date),
                            status = VALUES(status),
                            structures_damaged = VALUES(structures_damaged),
                            structures_destroyed = VALUES(structures_destroyed),
                            structures_evacuated = VALUES(structures_evacuated),
                            structures_threatened = VALUES(structures_threatened)
                        """)

            try:
                cursor.execute(insert_query, values)
            except pymysql.Error as err:
                return Response(json.dumps("MYSQL Error:" + err), 400)
            message_insert = 'Successfully added a fire to fires.'
            return render_template('fires.html', message = message_insert)

        if fire_info['_method'] == 'DELETE':
            if fire_id != '':
                cursor.execute('CALL AggregateFiresData()')
                found = cursor.execute('SELECT county_id from fires where fire_id = ' +  "'" + fire_id + "'")
                if not found:
                    notfound = 'Can not delete fire_id = ' + "'" + fire_id + "'" + 'becaise it does not exist in the fires table.'
                    return render_template('fires.html', notfound = notfound)
                county_id = cursor.fetchone()
                cursor.execute('DELETE from fires where fire_id=' + "'" + fire_id + "'")
                get_aggregated_data(county_id[0])
                message_delete = 'Successfully deleted fires from fire_id.'
                return render_template('fires.html', message = message_delete)
            return render_template('fires.html', message = fire_id)
    
@app.route('/users', methods=['GET', 'PUT', 'POST', 'DELETE']) 
def users():
    if request.method == 'GET':
        user_id = request.args.get('user_id')

        # check to see if fire exists
        found = ''
        if user_id != '':
            found = cursor.execute('SELECT * from users where user_id = ' + "'" + user_id + "'")
            if not found:
                notfound = 'No user found in users with user_id = ' + str(user_id)
                return render_template('users.html', notfound = notfound)
        if found == '':
            return render_template('users.html', getResult=user_id)
        # return archie info 
        data = cursor.fetchone()
        data = list(map(str, data))
        col_names = [x[0] for x in cursor.description]

        return render_template('users.html', columns=col_names, data=data)
    
    else:
        user_info = json.loads(json.dumps(request.form))
        user_id = user_info['user_id']
        found = ''
        if user_info['_method'] == 'PUT':
            # check to see if user info exists

            if user_info['user_id'] == 'null' or not user_info['user_id']:
                message_update = 'Must have a user_id to update users.'
                return render_template('users.html', message = message_update)
            if user_id != '':
                found = cursor.execute('SELECT * from users where user_id = ' + str(user_id))
                if not found:
                    notfound = 'Can not update a user with id = ' + str(user_id)
                    return render_template('users.html', notfound = notfound)
            if found == '':
                return render_template('users.html', getResult = user_id)
            
            put_str = ''
            for key in user_info:
                if key != 'user_id' and key != '_method' and user_info[key] != '':
                    if type(user_info[key]) == int or type(user_info[key]) == float:
                        put_str = ' ' + put_str + key + '=' + str(user_info[key]) + ","
                    else:
                        put_str = ' ' + put_str + key + '=' + "'" + user_info[key] + "',"

            cursor.execute('UPDATE users SET' + put_str[:-1] + ' WHERE user_id = ' + str(user_id))
            message_update = 'Successfully updated the users.'
            return render_template('users.html', message = message_update)

        if user_info['_method'] == 'POST':
            if any(key for key in user_info if user_info[key] == ''):
                message_insert = 'Error! Must have all required column names to insert.'
                return render_template('users.html', message = message_insert)
            if user_info['user_id'] == 'null' or not user_info['user_id']:
                message_insert = 'Must have a user_id to insert.'
                return render_template('users.html', message = message_insert)

            # create tuple of values and insert
            user_info_array = []
            user_info_array.append(user_info['username'].encode('utf-8'))
            user_info_array.append(user_info['password'].encode('utf-8'))
            user_info_array.append(user_info['fire_contribution_count'].encode('utf-8'))
            user_info_array.append(user_info['user_id'].encode('utf-8'))
            values = tuple(user_info_array)

            insert_query = ("""INSERT IGNORE INTO users (username, password, fire_contribution_count, user_id)
                        VALUES (%s, %s, %s, %s)
                        ON DUPLICATE KEY UPDATE
                            username = VALUES(username),
                            password = VALUES(password),
                            fire_contribution_count = VALUES(fire_contribution_count)
                        """)

            # print(values)

            try:
                cursor.execute(insert_query, values)
            except pymysql.Error as err:
                return Response(json.dumps("MYSQL Error:" + err), 400)
            message_insert = 'Successfully added a user to users.'
            return render_template('users.html', message = message_insert)

        if user_info['_method'] == 'DELETE':
            if user_id != '':
                found = cursor.execute('DELETE from users where user_id = ' + "'" + user_id + "'")
                if not found:
                    notfound = 'Can not delete user_id = ' + user_id + ' because it does not exist in the users'
                    return render_template('users.html', notfound = notfound)
            if found == '':
                return render_template('users.html', getResult=user_id)
            message_delete = 'Successfully deleted user from users.'
            return render_template('users.html', message = message_delete)

@app.route('/archive', methods=['GET', 'PUT', 'POST', 'DELETE']) 
def archive():
    if request.method == 'GET':
        fire_id = request.args.get('fire_id')

        # check to see if fire exists
        found = ''
        if fire_id != '':
            found = cursor.execute('SELECT * from archive where fire_id = ' + "'" + fire_id + "'")
            if not found:
                notfound = 'No fires found in archive with fire_id = ' + str(fire_id) + '.'
                return render_template('archive.html', notfound=notfound)
        if found == '':
            return render_template('archive.html', getResult=fire_id)

        # return archive info 
        data = cursor.fetchone()
        data = list(map(str, data))
        col_names = [x[0] for x in cursor.description]

        # json_data = []
        # json_data.append(dict(zip(col_names, data)))
        return render_template('archive.html', columns=col_names, data=data)
    else: 
        archive_info = json.loads(json.dumps(request.form))
        fire_id = archive_info['fire_id']
        found = ''

        if archive_info['_method'] == 'PUT':
            if archive_info['fire_id'] == 'null' or not archive_info['fire_id']:
                message_update = 'Must have a fire_id to update archives.'
                return render_template('archive.html', message = message_update)
            if fire_id != '':
                # check to see if fire exists
                found = cursor.execute('SELECT * from archive where fire_id = ' + "'" + fire_id + "'")
                if not found:
                    notfound = 'No fires found in archives with fire_id = ' + str(fire_id) +'.'
                    return render_template('archive.html', notfound=notfound)
            
            put_str = ''
            for key in archive_info:
                if key != 'fire_id' and key != '_method' and archive_info[key] != '':
                    if type(archive_info[key]) == int or type(archive_info[key]) == float:
                        put_str = ' ' + put_str + key + '=' + str(archive_info[key]) + ","
                    else:
                        put_str = ' ' + put_str + key + '=' + "'" + archive_info[key] + "',"

            cursor.execute('UPDATE archive SET' + put_str[:-1] + ' WHERE fire_id = ' + "'" + fire_id + "'")
            message_update = 'Successfully updated the archives.'
            return render_template('archive.html', message = message_update)

        if archive_info['_method'] == 'POST':
            
            if any(key for key in archive_info if archive_info[key] == ''):
                message_insert = 'Must have all required column names to insert.'
                return render_template('archive.html', message = message_insert)

            if archive_info['fire_id'] == 'null' or not archive_info['fire_id']:
                message_insert = 'Must have a archive_id to insert.'
                return render_template('archive.html', message = message_insert)

            # create tuple of values and insert
            archive_info_array = []
            archive_info_array.append(archive_info['fire_id'].encode('utf-8'))
            archive_info_array.append(archive_info['canonical_url'].encode('utf-8'))
            archive_info_array.append(archive_info['archive_year'])
            archive_info_array.append(archive_info['updated_date'].encode('utf-8'))
            archive_info_array.append(archive_info['last_updated_by'].encode('utf-8'))
            values = tuple(archive_info_array)

            insert_query = ("""INSERT IGNORE INTO archive (fire_id, canonical_url, archive_year, 
                                                        updated_date, last_updated_by)
                        VALUES (%s, %s, %s, %s, %s)
                        ON DUPLICATE KEY UPDATE
                            canonical_url = VALUES(canonical_url),
                            archive_year = VALUES(archive_year),
                            updated_date = VALUES(updated_date),
                            last_updated_by = VALUES(last_updated_by)
                        """)

            try:
                cursor.execute(insert_query, values)
            except pymysql.Error as err:
                return Response(json.dumps("MYSQL Error:" + err), 400)

            message_insert = 'Successfully added a fire to archives.'
            return render_template('archive.html', message = message_insert)

        if archive_info['_method'] == 'DELETE':

            if fire_id != '':
                found = cursor.execute('DELETE from archive where fire_id=' + "'" + fire_id + "'")
                if not found:
                    notfound = 'Can not delete fire_id = ' + str(fire_id) + ' because it does not exist in the archives.'
                    return render_template('archive.html', notfound = notfound)
            if found == '':
                return render_template('archive.html', getResult=fire_id)
            message_delete = 'Successfully deleted fire from archives'
            return render_template('archive.html', message = message_delete)
        
@app.route('/admin-unit-resources', methods=['GET', 'PUT', 'POST', 'DELETE']) 
def admin_unit_resources():
    if request.method == 'GET':
        fire_id = request.args.get('fire_id')

        # check to see if fire exists
        found = ''
        if fire_id != '':
            found = cursor.execute('SELECT * from admin_unit_resources where fire_id = ' + "'" + fire_id + "'")
            if not found:
                notfound = 'No user found in admin_unit_resources with fire_id ' +  "'" + fire_id + "'"
                return render_template('admin-unit.html', notfound = notfound)
        if found == '':
            return render_template('admin-unit.html', getResult = fire_id)

        # return archie info 
        data = cursor.fetchone()
        data = list(map(str, data))
        col_names = [x[0] for x in cursor.description]

        return render_template('admin-unit.html', columns = col_names, data=data)

    else:
        admin_info = json.loads(json.dumps(request.form))
        fire_id = admin_info['fire_id']
        found = ''
        if admin_info['_method'] == 'PUT':
            # check to see if admin exists

            if admin_info['fire_id'] == 'null' or not admin_info['fire_id']:
                message_update = 'Must have a fire_id to update admin unit.'
                return render_template('admin-unit.html', message = message_update)
            if fire_id != '':
                found = cursor.execute('SELECT * from admin_unit_resources where fire_id = ' + "'" + fire_id + "'")
                if not found:
                    notfound = 'No fires found in admin_unit_resources with fire_id ' + "'" + fire_id + "'"
                    return render_template('admin-unit.html', notfound = notfound)
            if found == '':
                return render_template('admin-unit.html', getResult = fire_id)
            
            put_str = ''

            for key in admin_info:
                if key != 'fire_id' and key != '_method' and admin_info[key] != '':
                    if type(admin_info[key]) == int or type(admin_info[key]) == float:
                        put_str = ' ' + put_str + key + '=' + str(admin_info[key]) + ","
                    else:
                        put_str = ' ' + put_str + key + '=' + "'" + admin_info[key] + "',"
            # if put_str == '':

            #     return Response(json.dumps('No information entered to be updated'), status=400)

            cursor.execute('UPDATE admin_unit_resources SET' + put_str[:-1] + ' where fire_id = ' + "'" + fire_id + "'")
            message_update = 'Successfully updated admin unit resources.'
            return render_template('admin-unit.html', message = message_update)

        elif admin_info['_method'] == 'POST':
            if any(key for key in admin_info if admin_info[key] == ''):
                message_insert = 'Error! Must have all required column names to insert.'
                return render_template('admin-unit.html', message = message_insert)
            if not admin_info['fire_id'] or admin_info['fire_id'] == 'null':
                message_insert = 'Must have a fire_id.'
                return render_template('admin-unit.html', message = message_insert)
            
            admin_info_array = []
            for key in admin_info:
                if key != '_method':
                    admin_info_array.append(admin_info[key].encode('utf-8'))
            values = tuple(admin_info_array)

            insert_query = ("""INSERT IGNORE INTO admin_unit_resources (fire_id, admin_unit_name, air_tankers, dozers, engines, helicopter, water_tenders)
                        VALUES (%s, %s, %s, %s, %s, %s, %s)
                        ON DUPLICATE KEY UPDATE
                            admin_unit_name = VALUES(admin_unit_name),
                            air_tankers = VALUES(air_tankers),
                            dozers = VALUES(dozers),
                            engines = VALUES(engines),
                            helicopter = VALUES(helicopter),
                            water_tenders = VALUES(water_tenders)
                        """)
            
            try:
                cursor.execute(insert_query, values)
            except pymysql.Error as err:
                return Response(json.dumps("MYSQL Error:" + str(err)), 400)
            message_insert = 'Successfully added to admin_unit_resources.'
            return render_template('admin-unit.html', message = message_insert)

            # TODO: add delete section for here and html
        if admin_info['_method'] == 'DELETE':
            if fire_id != '':
                found = cursor.execute('DELETE from admin_unit_resources where fire_id=' +
                           "'" + fire_id + "'")
                if not found:
                    notfound = 'Can not delete fire_id = ' + fire_id + ' because it does not exist in the admin unit resources.'
                    return render_template('admin-unit.html', notfound = notfound)
            if found == '':
                return render_template('admin-unit.html', getResult=fire_id)
            message_delete = 'Successfully deleted admin_unite_resources from fire_id.'
            return render_template('admin-unit.html', message = message_delete)

@app.route('/counties', methods=['GET', 'PUT', 'POST', 'DELETE']) 
def counties():
    if request.method == 'GET':
        county_id = request.args.get('county_id')
        
        # check to see if fire exists
        found = ''
        if county_id != '':
            found = cursor.execute('SELECT * from counties where county_id = ' + str(county_id))
            if not found:
                # return Response(json.dumps('No counties found in counties with county_id ' + str(county_id)), status = 201)
                notfound = 'No counties found in counties with county_id = ' + str(county_id) +'.'
                return render_template('counties.html', notfound=notfound)
        if found == '':
            # return render_template('counties.html', getResult='No counties found in counties with county_id ' + str(county_id))
            return render_template('counties.html', getResult=county_id)

        # return archie info 
        data = cursor.fetchone()
        data = list(map(str, data))
        col_names = [x[0] for x in cursor.description]

        # json_data = []
        return render_template('counties.html', columns=col_names, data=data)
    
    else:
        county_info = json.loads(json.dumps(request.form))
        county_id = county_info['county_id']
        found = ''
        if county_info['_method'] == 'PUT':
            
            if county_info['county_id'] == 'null' or not county_info['county_id']:
                message_update = 'Must have a county_id to update counties.'
                return render_template('counties.html', message = message_update)

            if county_id != '':
                found = cursor.execute('SELECT * from counties where county_id = ' + str(county_id))
                if not found:
                    # return Response(json.dumps('No counties found in counties with county_id ' + str(county_id)), status = 201)
                    notfound = 'No counties found in counties with county_id = ' + str(county_id) +'.'
                    return render_template('counties.html', notfound=notfound)
            if found == '':
                # return render_template('counties.html', getResult='No counties found in counties with county_id ' + str(county_id))
                return render_template('counties.html', getResult=county_id)


            put_str = ''
            for key in county_info:
                if key != 'county_id' and key != '_method' and county_info[key] != '':
                    if type(county_info[key]) == int or type(county_info[key]) == float:
                        put_str = ' ' + put_str + key + '=' + str(county_info[key])
                    else:
                        put_str = ' ' + put_str + key + '=' + "'" + county_info[key] + "'"

            cursor.execute('UPDATE counties SET' + put_str + ' WHERE county_id = ' + str(county_id))
            # return Response(json.dumps('Successfully updated counties'), status=200)
            message_update = 'Successfully updated the counties.'
            return render_template('counties.html', message = message_update)

        if county_info['_method'] == 'POST':
            
            if not all(key in county_info for key in ('county_id', 'county_name')):
                message_insert = 'Must have all required column names to insert.'
                return render_template('counties.html', message = message_insert)

            if county_info['county_id'] == 'null' or not county_info['county_id']:
                message_insert = 'Must have a county_id to insert.'
                return render_template('counties.html', message = message_insert)
                

            # create tuple of values and insert
            county_info_array = []
            county_info_array.append(county_info['county_id'].encode('utf-8'))
            county_info_array.append(county_info['county_name'].encode('utf-8'))
            values = tuple(county_info_array)

            insert_query = ("""INSERT IGNORE INTO counties (county_id, county_name)
                        VALUES (%s, %s)
                        ON DUPLICATE KEY UPDATE
                            county_name = VALUES(county_name)
                        """)

            try:
                cursor.execute(insert_query, values)
            except pymysql.Error as err:
                return Response(json.dumps("MYSQL Error:" + err), 400)

            message_insert = 'Successfully added a county to counties.'
            return render_template('counties.html', message = message_insert)

        if county_info['_method'] == 'DELETE':
            # cursor.execute('DELETE from counties where county_id=' + county_id)
            if county_id != '':
                found = cursor.execute('DELETE from counties where county_id=' + str(county_id))
                if not found:
                    notfound = 'Can not delete county_id = ' + str(county_id) + ' because it does not exist in the counties.'
                    return render_template('counties.html', notfound = notfound)
            if found == '':
                return render_template('counties.html', getResult=county_id)
            message_delete = 'Successfully deleted county from counties'
            return render_template('counties.html', message = message_delete)


@app.route('/')
def homepage():
    return render_template('homepage.html')

def get_aggregated_data(county_id):
    found = cursor.execute('SELECT * from aggregated_fire_data where county_id = ' + str(county_id))
    data = cursor.fetchone()
    col_names = [x[0] for x in cursor.description]

    data2 = []
    if data is None:
        data2.append(dict(zip(col_names, '')))
    else:
        data2.append(dict(zip(col_names, data)))

    found = cursor.execute('SELECT county_name from counties where county_id= ' + str(county_id))
    county_name = cursor.fetchone()
    
    update_js(json.dumps(data2), county_name[0])

def update_js(query, county, copiedToTemp=False):
    query = query.replace('"', "'")
    found = False
    if not copiedToTemp:
        with open('UI/mapdata.js', "r") as fin, open('UI/tempMapdata.js', 'w') as fout:
            for line in fin:
                if line.strip().startswith('name: ' + '"'+county+'"'):
                    found = True 
                if found and line.strip().startswith('description'):
                    fout.write(line[:line.index(':')+1] + ' "' +  query + '",\n')
                    found = False
                else:
                    fout.write(line)
        update_js(query, county, True)
    else:
        with open('UI/tempMapdata.js') as fin, open('UI/mapdata.js', 'w') as fout:
            for line in fin:
                fout.write(line)

# for county_id in range(60):
#     get_aggregated_data(str(county_id))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)