# -*- coding: utf-8 -*-
"""
Created on Mon Apr  4 19:57:37 2022

@author: ADMIN
"""

stack=[]
top=-1
def push(ele):
    global top
    top=top+1
    stack[top]=ele
    
def pop():
    global top
    ele=stack[top]
    top=top-1
    return ele
        
def isPalindrome(string):
    global stack
    length=len(string)
    
    stack=["0"]*(length+1)
    
    mid=length//2
    i=0
    while i<mid:
        push(string[i])
        i=i+1
        
    if length%2!=0:
        i=i+1
        
    while i<length:
        ele=pop()
        
        if ele!=string[i]:
            return False
        i=i+1
        return True


str=input("Enter string to check:")
if isPalindrome(str):
    print("Yes,the string is palindrome")
else:
    print("No,the string is not a palindrome")