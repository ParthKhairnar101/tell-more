# -*- coding: utf-8 -*-
"""
Created on Tue Apr  5 10:18:08 2022

@author: ADMIN
"""

import pymysql as ms
def cdb():
    try:
        dn=input("Enter Database Name:")
        c.execute("create database {}".format(dn))
        c.execute("use {}".format(dn))
        print("Database created successfully")
    except Exception as a:
        print("Database error",a)
        
def ddb():
    try:
        dn=input("Enter Database Name to be deleted:")
        c.execute("drop database {}".format(dn))
        print("Database deleted successfully")
    except Exception as a:
        print("Database Drop Error",a)
        
def ct():
    try:
        c.execute('''create table students(rollno int(3),
                  stname varchar(20);''')
        print("Table created successfully")
    except Exception as a:
        print("Create Table Error",a)
        
def inst():
    try:
        while True:
            rno=int(input("Enter roll no.:"))
            name=input("Enter student name:")
            c.execute("use {}".format('school'))
            c.execute("insert into students value({},'{}');".format(rno,name))
            db.commit()
            choice=input("Do you want to add more record<y/n>:")
            if choice not in "yY":
                break
    except Exception as a:
        print("Tnsert Record Error",a)
        
def dt():
    try:
        c.execute("select * from students;")
        data=c.fetchall()
        for i in data:
            print(i)
    except Exception as a:
        print("Display Record Error",a)
        
db=ms.connect(host="localhost",user="root",passwd="root")
c=db.cursor()
while True:
    print("MENU\n1. Create Database\n2. Drop Database\n3. Create Table\n4. Insert Record\n5. Display Entire Data\n6. Exit")
    choice=int(input("Enter your choice<1-6>:"))
    if choice==1:
        cdb()
    elif choice==2:
        ddb()
    elif choice==3:
        ct()
    elif choice==4:
        inst()
    elif choice==5:
        dt()
    elif choice==6:
        break
    else:
        print("Wrong Choice")