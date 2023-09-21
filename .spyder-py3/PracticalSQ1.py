# -*- coding: utf-8 -*-
"""
Created on Tue Apr  5 14:48:55 2022

@author: ADMIN
"""

student=[]
top=-1

def isEmpty():
    global student
    if student==[]:
        print("Stack is empty")
    else:
        None

def push(x):
    global student
    global top
    student.append(x)
    top=len(student)-1
    print(x," student pushed")

def pop(s):
    global top
    if top==-1:
        isEmpty()
    else:
        x=s.pop()
        top=len(s)-1
        print("Element popped:",x)
        
def display():
    global student
    global top
    if top==-1:
        isEmpty()
    else:
        top=len(student)-1
        print(student[top],"<-Top")
        for i in range(top-1,-1,-1):
            print(student[i])
    
while True:
    print("Press 1 to Push student")
    print("Press 2 to Pop student")
    print("Press 3 to Display students")
    print("Press 4 to Exit")
    ch=int(input("Enter your choice:"))
    if ch==1:
        b=int(input("Enter student id:"))
        a=input("Enter name of student:")
        push([b,a])
    elif ch==2:
        pop(student)
    elif ch==3:
        display()
    elif ch==4:
        break
    else:
        print("Invalid Choice")