import json 
import os
import sys
import pymysql 
from dotenv import load_dotenv 
#TODO: figure out pymysql connection and .env

class Database:
    def __init__(self):
        # load environment variables
        load_dotenv()

        #connect
        self.mysql_db = pymysql.connect(
            host=os.getenv('DB_HOST'),
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            autocommit=True
        )

        # create cursor and select database
        self.mysql_cursor = self.mysql_db.cursor()
        self.mysql_cursor.execute("USE mydb")
    


