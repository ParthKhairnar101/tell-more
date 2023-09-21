import mysql.connector as ms
con=ms.connect(host='localhost',user='root',passwd='root',database='extras')
cursor=con.cursor()
query="select * from transaction where amount>={} and amount<={};".format(1000,5000)
cursor.execute(query)
data=cursor.fetchall()
for row in data:
    print(row)
