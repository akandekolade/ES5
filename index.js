/**
var kolade = 'death';
alert (kolade);;
var message;
message="Hi there";
console.log(message);
alert(message);

//if, else,else if
var num= 25;
if(num>26) {alert("Number is greater than 26 ")};
else if (num<25){alert("Number is less than 25")};

else {alert("Number is 25 ")};

//do while
 var num =0;
 do {num++; console.log("Number: ",num)}
 while(num<10);

 //while
 var num= 0;
 while(num<5 ) {num++; console.log("Num is ",num);if(num<3){alert("number is less than 3 ")}};
 /*for(var i=0; i<10; i++) 
 {alert(i)}
//for in
var person ={
    name:"kolade",
    age: 15,
    address:"dalute"};
for(item in person){
    alert(item);}
for(item in window){console.log(item);}

//labelled Statement 
 var num= 0
for(var i = 0;i < 10; i++ )  
{if(i === 5) {continue;}
num++;}
console.log(num); 

var num=0
  outerlabel: for(var i=0; i<10; i++){
      for(var ii=0; ii<10; ii++)
      {if(i==5 && ii==5){continue outerlabel;}
          num++;}      }
  alert(num);

  //switch
var i=10
switch(i){
    case 10:
    alert("10");
    break;
    case 20:
    alert("20");
     break;
    default:
    alert("Nothing found")
} 

//function basic

function total (one, two ) {
return one + two;
}
 var result = total(1, 2);
alert(result);

 function namecheck(name) {
     if(name== "kolade") 
     return "Hi kolade";
     else{ return "i dont know  what is goin on "}
    
 }
 var result= namecheck("kolae")
  alert(result)

//functon arguments
function sayHi(){
return arguments[0];
} 
alert(sayHi("kolade"))

 function sayHi(name, something, opinion) {
return arguments[0] + arguments[1] + arguments[2]
 }
 alert(sayHi("kolade ", "is a stupid boy " , "right? " ))

function shopping (item1,item2){
if (arguments.length>=2){
    alert("you are getting a 20% discount" )}
     else if( arguments.length<=1){
    alert("you are not getting any thing")
}}
shopping("milk", "elubo")*/
    
 
 // Primitive and Reference Types Execution Context and Scope

//  var color = "blue";
// function colorUpdate() {
//     var color2 = "red"
//      var color="purple"
//    return color
// }
// console.log(colorUpdate());

//   javascript Array

//  var colours = ["red","green","gold"]
//  console.log(colours.length =100)
// console.log(Array.isArray(colours))
// alert(colours[0])

//  Array conversion methods

//  var colour = ["red", "yellow", "blue"]
//  console.log(colour.join(" - "))

// var colour = ["red", "yellow", "blue"]
//  console.log(colour.toString())

// array stack method
//  var colour=[];
//   allColours=colour.push("red" ,"green","purple")
//   colour.push("black")
//  var RemovedItem=colour.pop() 
//  console.log(colour, "Removed item :", RemovedItem)

// array queue method
//  var colour=[];
//  colour.unshift("red","green","black")
//  colour.unshift("white", "gray")
//  var removedItem= colour.shift()
//  console.log(colour, "removed item: ", removedItem)

// array reordering method
// var values= [1,2,3,4,5]
// values.reverse()
// console.log(values)

//  var values = [0,10,50,100,150]
//  function compare(val1, val2)
//  {
//      return val2 - val1
//  }
//  console.log(values.sort(compare))
// function compare(val1, val2){
//     if(val1>val2){
//         return -1
//     } else if( val1<val2){ 
//         return 1
//     } else{ 
//         return 0
//     }
    
//     }
//     var values=["apple","banana","fig","egusi","cranberry"]
//     console.log(values.sort(compare))
    
//array manipulation methods
// var colour =["red", "blue", "green"]
//  var allcolours= colour.concat(['black', "purple"])
//   console.log("ORG: ", colour, allcolours )

//   var colour =["red", "blue", "green",'black', "purple"]
//    var colour2= colour.slice(1,4 )
//    console.log(colour2)

//    var colour =["red", "blue", "green",'black', "purple"]
//    var deletedItem=colour.splice( 1,4, "what", "kilokanmi"  )
//    console.log("colours: ", colour, "deleted: ", deletedItem)

// array location methods
// var colour =["red", "blue", "green",'black', "purple"]
// alert(colour.indexOf("purple", 3))

// array iterative methods
// var numbers = [1,2,3,4,5,4,3,2,1]
// var everyitem= numbers.every(function(item,index,Array) {
//     return item > 2
// })
// console.log(everyitem)

// var numbers = [1,2,3,4,5,4,3,2,1]
// var someNumbers=numbers.some(function(item, array, index){
//     return item >2
// })
// console.log(someNumbers)

// var numbers = [1,2,3,4,5,4,3,2,1]
// var filternumber=numbers.filter(function(item, array, index){
//     return item >2
// })
// console.log(filternumber)

// var numbers = [1,2,3,4,5,4,3,2,1]
// numbers.forEach(function(item, array, index){
//     console.log(item)
// })

// var numbers = [1,2,3,4,5,4,3,2,1]
// var mapresult= numbers.map(function(item, array, index){
//    return "num "+ item
// })
// console.log(mapresult)

// array reduce method
// var num=[1,2,3,4,5]
// var sum=num.reduce(function(prevvalue,currentvalue,index,array)
// {
//     return prevvalue+currentvalue
// })
// console.log(sum)

//date type
// var date= new Date();
// console.log(date);

// var date=new Date(Date.parse("may 2004"))
// console.log(date)

//reguler expression
// var reg=/^\d{3}/
// console.log(reg.test("123hello"))

// function type
// function total(num1, num2) {
//     return num1 + num2
// } 
// console.log(total)

// var total=new Function("num1", "num2", "return num1 + num2")
// console.log(total(1,2))

// function declaration vs function expression
// function callingafunction(myfunc, myarg){
//     return myfunc(myarg)
// }
// function addhundred(num){
//     return num + 100
// }
// var result = callingafunction(addhundred, 1000)
// console.log(result)

//functions arguement object
// function factorial(num) {
//     if (num<1){
//         return 1
//     }else{ //return num * factorial(num-1)};
// return num * arguments.callee(num - 1)
// }} 
// console.log(factorial(5))

// function outside(){
//     inside()
// }
// function inside(){
    // console.log(inside.caller)
// alert(arguments.callee.caller)}
// displays the source code of outer
//  console.log(outside)

// function this object
// window.colour= "red"
// var object={colour: "blue"}
//  function sayColour(){
//      console.log(this.colour)
//  }
//  sayColour()
//  object.sayColour= sayColour
//  object.sayColour()

// function methods
// function sum(num1, num2) {
//     return num1 + num2
// }
// function callingsum(num1, num2){
//     return sum.call(this, num1, num2)
// }
// console.log(callingsum(111,111))

// window.colour="red"
//  var obj={colour: "blue"}
//  function saycolour(){
//       alert(this.colour)
//  }
//  var objsaycolour= saycolour.bind(obj)
//  objsaycolour()

// primitive reference type
// var mystring= "hello world"
// var mysubstring = mystring.substring(4)
// console.log(mysubstring)

//var num= 10 //new Number(10)
//console.log(num.toFixed(2))

// STRING MANIPULATION METHODS

// var strval="hello"
// var result=strval.concat(" world!")
// console.log(result)

// string location method
// var strval= "Hello world"
// alert(strval.indexOf("o", 6))
// alert(strval.lastIndexOf("o", 6));
// var strval= "     Hello world.        "
// console.log(strval.trim())
// var strval= "Hello world."
// console.log(strval.toUpperCase())
// console.log(strval.toLowerCase())

// string pattern matching

// var text="cat, bat, mat,sat"
// var pattern=/.at/
// var matches=text.match(pattern)
// alert(matches.index)
// alert(matches[0])

// var text="cat, bat, mat,sat"
// var pattern=/at/
// var matches=text.search(pattern)
// alert(matches)

// var text="cat, bat, mat,sat"
// var result=text.replace("at", "omb")
// alert(result)
// var text="cat, bat, mat,sat"
// var result=text.replace(/(.at)/g, "word($1)")
// alert(result)

// var colourtext="red,blue,green,white"
// var colour2=colourtext.split(" , ")
// console.log(colour2)

//OBJECT ORIENTED JAVASCRIPT-objects
//factory pattern
// function createname(name, age, job){
//     var obj=new Object()
//     obj.name=name,
//     obj.age=age,
//     obj.job=job,
//     obj.sayname= function(){
//         alert(this.name)
    
//     }
//     return obj
// }
//  var person1= createname("kolade", 16, "student")
//  var person2= createname("tolu", 23, "jobless")
//  console.log(person1, person2)

//constructor pattern
// function Person(name, age, job){
//     this.name=name,
//     this.age=age,
//     this.job=job,
//     this.sayname= function(){
//         alert(this.name)
//     }
// }
//  var person1= new Person("kolade", 16, "student")
//  var person2= new Person("tolu", 23, "jobless")
//  console.log(person1, person2)

// prototype pattern
// function Person(){
//     //
// }
// Person.prototype.name= "kolade";
// Person.prototype.age= 30,
// Person.prototype.sayname= function()
// {
//     alert(this.name);
// } ;
// var person1= new Person
// person1.sayname()
// var person2= new Person
// person1.sayname()

// alert(Person.prototype.isPrototypeOf(person1))
// alert(Person.prototype.isPrototypeOf(person2))

//method2
// function Person(){
//     //
// }
// Person.prototype={
//     constructor: Person,
//     name: "kolade",
//     age: 30,
//     sayname: function(){
//         alert(this.name)
//     }
// }
// var person1= new Person
// person1.sayname()
// var person2= new Person
// person1.sayname()

// alert(Person.prototype.isPrototypeOf(person1))
// alert(Person.prototype.isPrototypeOf(person2))
// var keys= Object.keys(Person.prototype)
// console.log(keys)

// Combination of constructor and prototype pattern
// function Person(name,age,job){
//     this.name= name;
//     this.age=age;
//     this.job=job;
//     this.friends=["pam", "cam"]
// }
// Person.prototype= {
//     constructor: Person,
//     sayname : function(){
//         alert(this.name);
//     }
// }
// var person1=new Person("kolade", 16, "student")
// person1.friends.push("ram")
// var person2=new Person("tolu", 23, "jobless")
//  console.log(person1, person2)

//OBJECT ORIENTED JAVASCRIPT-functions
// recurssion
// function factorial(num){
//     if (num<=1)
//     {return 1}
//     else{
//       return num * factorial(num -1)
//     }
// }
// alert(factorial(5))

// function closures
// function eat(){
//     var fruit="apple";
//      function watch(){
//     console.log(fruit)
//      }
//      return watch;
// }
// var favfruit= eat()
// favfruit();

//objects closures
// var name="The window "
// var object={
//     name: "The object",
//     getName: function()
//     {
//         return function(){
//             return this.name
//         } 
//     }
// }
// alert(object.getName()())

// creating block scope using IIFE
// (function sayColour(){
//    var colour="red";
//    alert(colour)
// })();

// WINDOW OBJECT METHOD
// prompt
// var result= prompt("what is your name")
// if(result!==null) 
// { alert("welcome " + result) }

//set timeout and set interval
//  setTimeout(function(){
//      alert("hello world")
//  }, 3000)

// setInterval(function(){
//     alert("hello world", )
// }, 1000)

var saySomething =prompt ("What is your name?")

if (saySomething!==null) {
    alert("Welcome to the cold room experience "+ saySomething)
} {
    break;
}
 else if(saySomething.length!==0) {
     alert("Error, try again")
    
}
