import mysql.connector as ms
con=ms.connect(host="localhost",user="root",passwd="root",database="extras")
mycursor=con.cursor()
#mycursor.execute("CREATE table Employees(empid int(6) PRIMARY KEY,name varchar(30),age int(2),salary int(9),designation varchar(20));")
#con.commit()
#print("Table Created")
#while(True):
#    empid=int(input("Enter employee id:"))
#    name=input("Enter name:")
#    age=int(input("Enter age:"))
#    salary=int(input("Enter salary:"))
#    desgn=input("Enter designation:")
#    mycursor.execute("insert into Employees values({},'{}',{},{},'{}');".format(empid,name,age,salary,desgn))
#    con.commit()
#    choice=input("Do you wish to continue?If no,press 'n'")
#    if(choice=='n' or choice=='N'):
#        break
query="select * from Employees"
mycursor.execute(query)
data=mycursor.fetchall()
for row in data:
    print(row)
