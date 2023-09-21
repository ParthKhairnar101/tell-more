# -*- coding: utf-8 -*-
"""
Created on Fri Feb 18 20:00:51 2022

@author: ADMIN
"""

import mysql.connector as ms
db=ms.connect(host="localhost",user="root",passwd="root",database='extras')
cn=db.cursor()

def insert_rec():
    try:
        while True:
            rn=int(input("Enter roll number:"))
            sname=input("Enter name:")
            marks=float(input("Enter marks:"))
            gr=input("Enter grade:")
            cn.execute("insert into students values({},'{}',{},'{}')".format(rn,sname,marks,gr))
            db.commit()
            ch=input("Want more records? Press (N/n) to stop entry:")
            if ch in 'Nn':
                break
    except Exception as e:
        print("Error", e)

def update_rec():
    try:
        rn=int(input("Enter rollno to update:"))
        marks=float(input("Enter new marks:"))
        gr=input("Enter Grade:")
        cn.execute("update students set marks={},grade='{}' where rno={}".format(marks,gr,rn))
        db.commit()
    except Exception as e:
        print("Error",e)

def delete_rec():
    try:
        rn=int(input("Enter rollno to delete:"))
        cn.execute("delete from students where rno={}".format(rn))
        db.commit()
    except Exception as e:
        print("Error",e)

def view_rec():
    try:
        cn.execute("select * from students")
    except Exception as e:
        print("Error",e)

while True:
    print("MENU\n1. Insert Record\n2. Update Record \n3. Delete Record\n4. Display Record \n5. Exit")
    ch=int(input("Enter your choice<1-4>="))
    if ch==1:
        insert_rec()
    elif ch==2:
        update_rec()
    elif ch==3:
        delete_rec()
    elif ch==4:
        view_rec()
    elif ch==5:
        break
    else:
        print("Wrong option selected")