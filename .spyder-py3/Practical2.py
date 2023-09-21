# -*- coding: utf-8 -*-
"""
Created on Tue Apr  5 09:11:41 2022

@author: ADMIN
"""

stk=[]
top=-1

def line():
    print("~"*100)

def isEmpty():
    global stk
    if stk==[]:
        print("Stack is empty")
    else:
        None
        
def push():
    global stk
    global top
    empno=int(input("Enter the employee number to push:"))
    ename=input("Enter the employee name to push:")
    stk.append([empno,ename])
    top=len(stk)-1
    
def pop():
    global stk
    global top
    if top==-1:
        isEmpty()
    else:
        ele=stk.pop()
        top=top-1
        print("Popped element is",ele)

def peek():
    global stk
    global top
    print(stk[top])
    
def display():
    global stk
    global top
    if top==-1:
        isEmpty()
    else:
        top=len(stk)-1
        print(stk[top],"<-top")
        for i in range(top-1,-1,-1):
            print(stk[i])
    
def main():
    while True:
        line()
        print("1.Push")
        print("2.Pop")
        print("3.Peek")
        print("4.Display")
        print("5.Exit")
        ch=int(input("Enter your choice:"))
        if ch==1:
            push()
        elif ch==2:
            pop()
        elif ch==3:
            peek()
        elif ch==4:
            display()
        elif ch==5:
            break
        else:
            print("Invalid choice")
            break
main()