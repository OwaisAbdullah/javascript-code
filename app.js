// chapter no #1 task 1 and 2 
alert("Error! Please enter a valid password");

// chapter no #1 task 3 
alert("Welcome to JS Land... \nHappy Coding!"); 

// chapter no #1 task 5
alert("Hello... I can run JS through my web browser's console");
console.log(alert);


// chapter no #2 task 1
var username

// chapter no #2 task 2
var myname = "Owais Abdullah"
alert(myname);

// chapter no #2 task 3
var message
message = "Hello World"
alert(message);

// chapter no #2 task 4
var stdname = "Owais"
var age = "20 years old"
var data = "Certified Mobile Application Development"
alert(stdname);
alert(age);
alert(data);

// chapter no #2 task 5
var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP"
alert(pizza);

// chapter no #2 task 6
var email = "owaissandh@gmail.com"
alert("My Email Address is" + " " + email);

// chapter no #2 task 7
var book = "A smarter way to learn JavaScript."
alert(book);

// chapter no #2 task 8
document.write("Yah! I can write HTML content through JavaScript");

// chapter no #2 task 9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design);


// chapter no #3 task 1
var age = "I am 20 years old"
alert(age);

// chapter no #3 task 2
"Skipping this Question "

// chapter no #3 task 3
var birthyear = 2000
document.write(birthyear + " " + "is my Birth Year.");

// chapter no #3 task 4
var visitorname = "Owais"
var producttitle = "Jeans Paints and Shirts"
var quantity = 2 
document.write(visitorname + " " + " ordered" + " " + quantity + " " + producttitle + " " + "on XYZ Clothing store.")


// chapter no #4 task 1
var variable1 , variable2 ,variable3

// chapter no #4 task 2

// chapter no #4 task 3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain Numbers, $sign ,_underscores. For example: $my_1stVariable")
document.write("<br>")
document.write("Variables must begin with a Letter, $sign or_underscores. For example: $name, _name or name")
document.write("<br>")
document.write("Variable names are case sensitive")
document.write("<br>")
document.write("Variable names should not be JS keywords")


// chapter no #5 task 1  and 2
var num1 = 8 , num2 = 4
var sum = num1 + num2
var sub = num1 - num2
var multi = num1 * num2
var divide = num1 / num2
document.write("The Sum of 8 + 4" + " = " + sum);
document.write("<br>");
document.write("The Subtraction of 8 - 4" + " = " + sub);
document.write("<br>");
document.write("The Multilplication of 8 * 4" + " = " + multi);
document.write("<br>");
document.write("The Division of 8 / 4" + " = " + divide);

// chapter no #5 task 3
var vlaue
var initialvalue = 3;
document.write("Initial Value is : " + initialvalue);
document.write("<br>");
var increment = initialvalue + 1 ;
document.write("Value after Increment is : " + increment);
document.write("<br>");
var add = increment + 6;
document.write("Value after Addition is : " + add);
document.write("<br>");
var decrement = add - 1;
document.write("Value after Decrement is : " + decrement);
document.write("<br>");
var reminder = decrement / 3;
document.write("Reminder is : " + reminder);

// chapter no #5 task 4
var ticketprice =  600 
var ticketqty = 5
document.write("The cost of "+ ticketqty +" Movie Ticket's price is " + ticketprice*ticketqty + "PKR");

// chapter no #5 task 5
var table = 5
document.write("Table of " + table);
document.write("<br>");
for (var i = 1; i <=10; i++) {
        document.write(table + "*" + i + " = " + table*i + "<br>");
}

// chapter no #5 task 6
// "Skipping this Question "

// chapter no #5 task 7
document.write("<h1>Shopping Cart</h1>");
var priceofitme1 = 1500
var qty1 = 3
var priceofitme2 = 1300
var qty2 = 2
var charges = 250 
var sumofall = priceofitme1*qty1 + priceofitme2*qty2 + charges
document.write("Price of Item-1 is: " + priceofitme1);
document.write("<br>");
document.write("Ordered quantity of item-1 is: " + qty1);
document.write("<br>");
document.write("Price of Item-2 is: " + priceofitme2);
document.write("<br>");
document.write("Ordered quantity of item-2 is: " + qty2);
document.write("<br>");
document.write("Delivery Charges is: " + charges);
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("Total cost of your Order is: " + sumofall);

// chapter no #5 task 8
var obtmarks = 440
var totalmarks = 550
var percentage = Math.floor(obtmarks *100 /totalmarks)
document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("Obtained Marks = " + obtmarks);
document.write("<br>");
document.write("Total Marks = " + totalmarks);
document.write("<br>");
document.write("Percentage = " + percentage + "%");

// chapter no #5 task 9
document.write("<h1>Currency in PKR</h1>");
document.write("<br>");
var currency = 10*104.80 + 25*28
document.write("Total Currency in PKR " + currency)

// chapter no #5 task 10
var calc = 5 * 10 /25
document.write("The Answer is: " + calc)

// chapter no #5 task 11
var currentyear = 2020
var birthyear1 = 2000
var age = 2020 - 2000
document.write("<h1>Age Calculator</h1>");
document.write("<br>");
document.write("Current Year is: " + currentyear);
document.write("<br>");
document.write("Birth Year is: " + birthyear1);
document.write("<br>");
document.write("Your Age is: " + age);

// chapter no #5 task 12
var radius = 14
var circumference = 2 * 3.142 * radius
var area = 3.142 * (radius*2)
document.write("<h1>The Geometrizer:</h1>");
document.write("<br>");
document.write("The Radius of a Circle is: " + radius)
document.write("<br>"); 
document.write("The circumference is: " + circumference)
document.write("<br>");
document.write("The Area is: " + area)

// chapter no #5 task 13
var snacks = "chips" 
var currentage = 20
var maxage = 65 
var snacksperday = 4
var need = (maxage - currentage) * snacksperday
document.write("<h1>The Lifetime Supply Calculator:</h1>");
document.write("<br>");
document.write("Favourite Snacks is " + snacks);
document.write("<br>");
document.write("Current Age " + currentage);
document.write("<br>");
document.write("Estimated Maximum Age " + maxage);
document.write("<br>");
document.write("Amount of Snacks per day " + snacksperday);
document.write("<br>");
document.write("You will need " + need + " to last you until the ripe old age of " + maxage);


// Chapter no #6 to #9 task 1
var a = 10 
document.write("Result");
document.write("<br>");
document.write("The Value of a is " + a)
document.write("<br>");
document.write("<br>");
document.write("*********************");
document.write("<br>");
document.write("<br>");
document.write("The value of ++a is: 11");
document.write("<br>");
document.write("The value of a is: 11");
document.write("<br>");
document.write("<br>");
document.write("The value of a++ is: 11")
document.write("<br>");
document.write("The value of a is: 12")
document.write("<br>");
document.write("<br>");
document.write("The value of --a is: 11")
document.write("<br>");
document.write("The value of a is: 11")
document.write("<br>");
document.write("<br>");
document.write("The value of a-- is: 11")
document.write("<br>");
document.write("The value of a is: 10")

// Chapter no #6 to #9 task 2
var a = 2 
var b = 1 
var result = 4
document.write("a is 1");
document.write("<br>");
document.write("b is 1");
document.write("<br>");
document.write("Result is " + result);

// Chapter no #6 to #9 task 3
var input = prompt("Write your name")

// Chapter no #6 to #9 task 4
// Question no 4 is not available in Assignment

// Chapter no #6 to #9 task 5
var usertable = prompt("Enter Table Number")
document.write("Table of " + usertable);
document.write("<br>");
document.write("<br>");
for (var j = 1; j <=10; j++){
    if(usertable ){        
        document.write(usertable + " * " + i + " = " + usertable*i + "<br>");
    }
    else{
        document.write( 5 + " * " + i + " = " + 5*i + "<br>");
    }    
}


// Chapter no #14 to #16 task 1 to 7
var  JSliteralnotation = []
var JSobjectnotation = []
var strarr = ["Owais"]
var numarr = [5]
var qualification = ["SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD"]
document.write("<h1>Qualification</h1>");
document.write("<br>");
for(var k = 0; k < qualification.length; k++){
    document.write(qualification + "<br>");
}

// Chapter no #14 to #16 task 8
var stdarr = ["Owais", "Abdul Qadeer", "Ehsan"]
var obtmarksarr = [430, 450, 390]
var totalmarksarr = [500]
var arrper = [obtmarksarr [0] * 100 / totalmarksarr]
var arrper1 = [obtmarksarr [1] * 100 / totalmarksarr]
var arrper2 = [obtmarksarr [2] * 100 / totalmarksarr]
document.write("score of "+ stdarr[0] + " is " + obtmarksarr[0] + " Percentage is " + arrper + "%")
document.write("<br>");
document.write("score of "+ stdarr[1] + " is " + obtmarksarr[1] + " Percentage is " + arrper1 + "%")
document.write("<br>");
document.write("score of "+ stdarr[2] + " is " + obtmarksarr[2] + " Percentage is " + arrper2 + "%")

