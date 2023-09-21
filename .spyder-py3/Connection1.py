import mysql.connector as ab
con=ab.connect(host="localhost",user="root",passwd="root",database="extras")
if con.is_connected():
    print("successful")
else:
    print("not connected")
mycursor=con.cursor()
mycursor.execute("select * from customers")
for j in mycursor:
    print(j)
result=mycursor.fetchone()
for i in result:
    print(i)
