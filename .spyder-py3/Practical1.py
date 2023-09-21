# -*- coding: utf-8 -*-
"""
Created on Tue Apr  5 09:51:04 2022

@author: ADMIN
"""

s=[]
top=None

def isEmpty(stk):
    if stk==[]:
        return True
    else:
        return False

def push(stk,x):
    stk.append(x)
    top=len(stk)-1
    
def pop(stk):
    if isEmpty(stk):
        return "Underflow"
    else:
        ele=stk.pop()
        if len(stk)==0:
            top=None
        else:
            top=len(stk)-1
        return ele

def display(stk):
    if isEmpty(stk):
        print("Stack is empty")
    else:
        top=len(stk)-1
        print(stk[top],"<-Top")
        for i in range(top-1,-1,-1):
            print(stk[i])
            
def peek(stk):
    if isEmpty(stk):
        return "Underflow"
    else:
        top=len(stk)-1
        return stk[top]

def main():
    while True:
        print("Stack Implementation")
        print("1.Push")
        print("2.Pop")
        print("3.Peek")
        print("4.Display")
        print("5.Exit")
        ch=int(input("Enter your choice:"))
        if ch==1:
            z=int(input("Enter value to be pushed:"))
            push(s,z)
        elif ch==2:
            q=pop(s)
            if q=="Underflow":
                print("Stack is empty")
            else:
                print("Popped element:",q)
        elif ch==3:
            q=peek(s)
            if q=="Underflow":
                print("Stack is empty")
            else:
                print("Top element:",q)
        elif ch==4:
            display(s)
        elif ch==5:
            break
        else:
            print("Invalid choice")
main()