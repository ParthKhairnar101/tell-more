import mysql.connector as c
con=c.connect(host="localhost",use="root",passwd="root",database="world")
if con.is_connected():
    print("Succesfully connected...")
else:
    print("Connectivity Error")
