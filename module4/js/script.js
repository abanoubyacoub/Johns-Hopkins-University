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

/*lecture 43 */

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


/******************************/
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

function makeMultiplier(multiplier){ 
	/* we make function * itself by var next row (multiplier) */
	var myFunc = function (y) {
		return multiplier * y;
	};
	return myFunc; /* imoortatnt to value */
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// passing function as arguments

function doOperationOn (a, operation) {
	return operation(a);
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);

result = doOperationOn(100, doubleAll);
console.log(result);


/******************************/
// 47&48
// copy by reference vs by value 
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
b = 5;
console.log("after b update: ");
console.log("a: " + a);
console.log("b: " + b);



var a = {x: 7};
var b = a;
console.log(a);
console.log(b);
b.x = 5;
console.log("after b.x update: ");
console.log(a);
console.log(b);









