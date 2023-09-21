# -*- coding: utf-8 -*-
"""
Created on Tue Apr  5 11:35:44 2022

@author: ADMIN
"""

import mysql.connector as ms
db=ms.connect(host="localhost",user="root",passwd="root",database="school")
c=db.cursor()
def ins():
    try:
        while True:
            m=int(input("Enter roll no.:"))
            sname=input("Enter name:")
            marks=float(input("Enter marks:"))
            gr=input("Enter grade:")
            c.execute("insert into student values({},'{}',{},'{}')".format(m,sname,marks,gr))
            db.commit()
            ch=input("Want more records? Press (N/n) to stop entry:")
            if ch in "nN":
                break
    except Exception as a:
        print("Error",a)
        
def up():
    try:
        m=int(input("Enter rollno to update:"))
        marks=float(input("Enter new marks:"))
        gr=input("Enter Grade:")
        c.execute("update student set marks={},grade='{}' where roll_no={}".format(marks,gr,m))
        db.commit()
    except Exception as a:
        print("Error",a)

def de():
    try:
        m=int(input("Enter roll no. to delete:"))
        c.execute("delete from student where roll_no={}".format(m))
        db.commit()
    except Exception as a:
        print("Error",a)
        
def view():
    try:
        c.execute("select * from student;")
    except Exception as a:
        print("Error",a)

while True:
    print("MENU\n1. Insert Record\n2. Update Record\n3. Delete Record\n4. Display Record\n5. Exit")
    ch=int(input("Enter your choice<1-5>:"))
    if ch==1:
        ins()
    elif ch==2:
        up()
    elif ch==3:
        de()
    elif ch==4:
        view()
    elif ch==5:
        break
    else:
        print("Wrong option selected")
        