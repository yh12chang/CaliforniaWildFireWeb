from db import Database, json, pymysql

def get_aggregated_data(county_id):
    found = cursor.execute('SELECT * from aggregated_fire_data where county_id = ' + county_id)
    data = cursor.fetchone()
    print(data)
    col_names = [x[0] for x in cursor.description]

    data = []
    data.append(dict(zip(col_names, data)))

    found = cursor.execute('SELECT county_name from counties where county_id= ' + county_id)
    county_name = cursor.fetchone()
    
    update_js(json.dumps(data), county_name)
    
    update_js(json.dumps(data), county_name)

def update_js(query, county, copiedToTemp=False):
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