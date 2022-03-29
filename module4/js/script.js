var message = "in global";
console.log("global: message = " + message);

var a = function () {
	var message = "inside a";
	console.log("a: message = " + message);

	b();
}
	function b () {
	console.log("b: message = " + message);
}

a ();

// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
/* 2 unit */

var x;   /*undefined*/
/*x=5*/
console.log(x);

if (x == undefined) {
	console.log("x is undefined");
}

x = 5;
if (x == undefined) {
	console.log("x is undefined");
}
else {
	console.log("x has been defind");
}


/*string concatination*/
var string = "hello";
string +=" world";
// string = string + " world";   /*same previos line but += as short cut*/
console.log(string + "!");


/*reqular math operators : +, -, *, / */
console.log((5 + 4) / 3);
console.log(undefined / 5);
console.log(10 / 5);

function test1 (a) {
	console.log( a / 5);
}
test1();

function test1 (a) {
	console.log( a / 5);
}
test1(20);


/* Equality */
var x = 4, y = 5;
if (x == y) {
	console.log ("x=4 is equal to y=5");
}

var x = 4, y = 4;
if (x == y) { /* x=y that mean order thy y will take x value  x==y that mean compare */
	console.log ("x=4 is equal to y=4");
}


x = "4"; /* x=4 is srting becoz betwin "" or '' revision java type befor y = 4 as number*/
if (x == y) {
	console.log("x='4' is equal to y=4")
}

/* strick equality  === */
if (x === y) { /* Equality of power */
  console.log("strict: x='4' is equal to y=4")/*bcoz '4' is string 4 is just number*/ 
}
else {
	console.log("strict: x='4' is NOT equal to y=4")
}

/**************lecture 43 **************/

/* if statment ("all false") */

if ( false || null || /* || mean */
	 undefined || "" || 0 || NaN) {
	console.log ("this line wonot ever execute");
}
else {
	console.log ("ALL false");
} /* to test in console if is it true or false by "Boolean(...);*/

/* if statment ("all false") */
if (true && "hello" && 1 && -1 && "false"){
	console.log("all true");
}

/* best practice for {} style */
/* curly brace on the same or next line */
/* it just style? */
function a ()
{
	return /* { in next line like we but ; that mean nothing */
	{
		name: "abanoub"
	};
}
function b () {
	return {
		name: "abanoub"
	};
}

console.log(a());
console.log(b());
console.log(b);


// for loop 
var sum = 0;
for (var i = 0; i < 10; i++/* or i = i + 1*/){
	console.log(i);
	sum = sum + i;
}
console.log("sum of 0 through 9 is:" + sum);

/**/
// for loop 
var sum = 0;
for (var i = 0; i < 10; i++/* or i = i + 1*/){
	console.log(i);
	console.log(sum = sum + i);
}
console.log("sum of 0 through 9 is: " + sum);

/******************* lecture 44************************/

// default values
function orderchickenwith(sideDish) { 

	// if (sideDish === undefined) { /* too long code there anther way look */
	// 	sideDish = "basta";
	// }
	sideDish = sideDish || "basta"; /* || thats mean or */
	/* to test in console

	 true || false
	 true

	 "" || true 
	 true

	 "hello" || ""
	 "hello"

	 "" || "hello"
   'hello'
	 */

	console.log("chicken with + sideDish");/* pls look where u but sentag""*/

	console.log("chicken with " + sideDish); 
}
orderchickenwith("noodles");

orderchickenwith();


// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // //
/*3 unit */

// object creation
var company = new Object();
company.name = "facebook";
company.favColor = "blue"

company.ceo = new Object();
company.ceo.fristName = "mark"
company.ceo.lastName = "kris";

company.hr = new Object();
company.hr.name = "jac";

console.log(company);
console.log("company ceo name is : "+company.ceo.fristName );

console.log(company["name"]);/* . only using with function or variable  */

company.$stock = 110;
var stockPropName = "stock of company";
company[stockPropName] =110;
console.log("stock price is : " + company[stockPropName]);


// 45

// better way : object literal
var facebook = {
	name: "facebook",
	ceo: {
		fristName: "mark",
		favColor: "blue"
	},
	// $stock: 110 
	"stock of company":110
};

console.log(facebook);
console.log(facebook.ceo.fristName)

/***************************************************/
// 46
// functions are first-class data types
function multiply(x, y) {
	return x * y ;
}
// console.log(multiply(5, 3));
multiply.version = "v.1.0.0";
console.log(multiply);
console.log(multiply.version);

// faunction factory

// function makeMultiplier(multiplier){ 
// 	/* we make function * itself by var next row (multiplier) */
// 	var myFunc = function (y) {
// 		return multiplier * y;
// 	};
// 	return myFunc; /* imoortatnt to value */
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// // passing function as arguments

// function doOperationOn (a, operation) {
// 	return operation(a);
// }
// var result = doOperationOn(5, multiplyBy3);
// console.log(result);

// result = doOperationOn(100, doubleAll);
// console.log(result);


/******************************/
// 47 dual 
// copy by reference vs by value 
/* passing by value */
var a = 7; /* passing by value */
var b = a;
console.log("a: " + a);
console.log("b: " + b);
b = 5;
console.log("after b update: ");
console.log("a: " + a);
console.log("b: " + b);


/* passing by reference */
var a = {x:7}; /* passing by reference */
var b = a;
console.log(a);
console.log(b);
b.x = 5; /* we update object both var (copy memory location ) */
console.log("after b.x update: ");
console.log(a);
console.log(b);


// pass by referance vs by value 
/* passing by value into function  */
function changePrimitive(primValue) {
	console.log("in changePrimitive...");
	console.log("before");
	console.log(primValue);

	primValue = 5;
	console.log("after");
	console.log(primValue);
}

var value = 7;
changePrimitive(value); /*here only primValue = value*/
console.log("after changePrimitive, orig  value : ")
console.log(value);



/* passing by reference into function */
/* pass by object + reference*/
function changeObject(objValue) {
	console.log("in changeObject...");
	console.log("before");
	console.log(objValue);

	objValue.x = 5;
	console.log("after");
	console.log(objValue);
}

 value = {x: 7 };
changeObject(value); /* here only objValue = value */
console.log("after changeObject, orig  value : ")
console.log(value);

/***************************************************/
// lecture 48
/* one more way to great object in java script proto  */

function test () {
	console.log("hello world!")
  console.log(this);
  this.myName = "yacoub";
}
test();
console.log(window.myName);


// function construction
/*
'C  '       capital litter // mean function construction only not reqular
'new'       to return object bcoz not allaowed return direct 
'prototype' to creat one time fun
*/ 

function Circle (radius){
	// console.log(this);
	this.radius = radius;
	/* we can not return any thig */

	// this.getArea = /* no need this if we have prototype*/
	// function (){
	// 	return Math.PI * Math.pow(this.radius, 2);
	};

/* prototype make function making for one time only no need to repeated again */
	/* take care this shouldnot butted inside function */
	Circle.prototype.getArea = 
	function() {
		return Math.PI * Math.pow(this.radius, 2);
	};


var myCircle = new Circle (30);  /*new Object ( ) "by using (new) */
console.log(myCircle.getArea());


var myCircle = new Circle (10); /* new Object ( ) "by using (new) */
console.log(myCircle.getArea());


var myCircle = new Circle (15); /* new Object ( ) "by using (new) */
console.log(myCircle);

/***************************************************/
// lecture 49
/* one more way to great object in java script literals and this */
// shuld use var self = this if we have func inside function

var literalCircle = { // new object ()
  radius: 10,

getArea: function () {
	console.log(this);
	return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());

/***************************************************/
/***************************************************/

var literalCircle = { // new object ()
  radius: 10,

getArea: function () {
	var self = this; /* we use this if we have sceond var inside after get erea */
	console.log(this);


	var increaseRadius = function () {
		// this.radius = 20; /* if we use this no change will happend thats why we need use self*/
	  self.radius = 20; /* related by var self = this */
	};
   increaseRadius();
   console.log(this.radius);


	return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());

/***************************************************/
/***************************************************/
// lecture 50 Arrays
// long hand array creation
var array = new Array ();
array[0] = "abanoub";
array[1] = "yacoub";
array[2] = 2;
array[3] = function(name){
	console.log("hello" + name);
};
array[4] = {course: "HTML, css & JS"};
console.log(array);
console.log(array[1]);
array[3] ( );
array[3](" kadies");
array[3](array[0]);
console.log(array[4].course);
console.log(array[4])
/***************************************************/
// short hand array creation
var names = [
"abanoub",
"kadies" ,
{ name: "yacoub"}
];
console.log(names)

for (var i = 0; i < names.length; i++){
	console.log("hello" + names [i]);
};

/*********/
names[100] = "Jim";
for (var i = 0; i < names.length; i++){
	console.log("hello" + names [i]);
};
/***************************************************/
// second lec of 50 
var names3 = [
"abanoub",
"kadies" ,
"yacoub"
];
var myObj = {
	name: "father",
	course: "HTML/CSS/JS",
	platform: "JHON"
};
/* for loop to passing some object inside array */
for (var prop in myObj){ /* prop = every properties*/
console.log(prop + ":" + myObj[prop]);
};
             /*******************************/

names3.greeting = "welcome"; /* in case will be one of array serial */

for (var name in names3){ 
console.log("hi" + ":" + names3[name]);
};
/***************************************************/
/***************************************************/
// lecture 51 closures
function makeMultiplier (multiplier2){ /* var multiplier2 =2 */

	function b(){
		console.log("multiplier2 is " + multiplier2)
	};
	b();
	
	return (
		function (x){
			return multiplier2 * x
		}
		);
};
var doubleAll2 = makeMultiplier (2);
console.log(doubleAll2(10));

/***************************************************/
/***************************************************/
// lecture 52 fake namespaces
var name2 = "yacoub";
function sayHello () {
	console.log("Hello " + name2 );
};
/**/
var yacoubGreeter = {};
yacoubGreeter.name2 = "yacoub";
yacoubGreeter.sayHello = function () {
	console.log("Hello " + yacoubGreeter.name2);
};
/**/
// var yacoubGreeter = {};
// yacoubGreeter.name2 = "yacoub";
// var greeting = "hello ";
// yacoubGreeter.sayHello = function () {
// 	console.log(greeting + yacoubGreeter.name2);
// }
/***************************************************/
//  immediately invoked function Expression by (...())
//  IIFEs
(function (window) {
	var yacoubGreeter = {};
  yacoubGreeter.name2 = "yacoub";
  var greeting = "hello ";
  yacoubGreeter.sayHello = function () {
	console.log(greeting + yacoubGreeter.name2);
}
window.yacoubGreeter = yacoubGreeter;

})(window);















