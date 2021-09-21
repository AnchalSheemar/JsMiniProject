                                  JS Mini Project : Calculator


This project is totally based on HTML,CSS,JS. This is a basic calculator which we are using in our day to day life for basic calculations.

![image](https://user-images.githubusercontent.com/53333322/134143765-7a1ce8c1-787e-428f-8d8f-6c6483825f91.png)

Heading:

At the top I have added a heading named as calculator.

Input Field:

Below heading I have added a input field inside a div,which will show all the input that we will give.

Button:

I have added total 20 buttons in this calculator.out of 20, 12 buttons are representing the digits.and 8 buttons are for doing the operations. 
Also, I have added hover on the button. 


![image](https://user-images.githubusercontent.com/53333322/134144075-c2ce97f7-8603-456f-883e-2a5451dd7bd1.png)


![image](https://user-images.githubusercontent.com/53333322/134144301-3293b366-526e-45d0-9c79-0a8781a96fed.png)


function dis():

A function named as dis(val) that contains that we are providing through buttons.Using GetElementById we are geeting the value that we are providing through buttons. 

function solve():

Inside solve funtion we are getting value through getElementById.and than calling eval() predefined JavaScript function for calculation the values.and than Assign back to the document.getElementById().value.

function back():

back funtion(backspace) is for deleting that last value that we usually do in the calculators.here, I am using 
predefined javaScipt function slice (0,-1).

function clr():

I am using to clear all the data.
 





