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

/*--*/
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
// string = string + " world"; /*same previos line but += as short cut*/
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
	console.log ("x=4 is equal to y=4");
}

var x = 4, y = 4;
if (x == y) { /* x=y that mean order thy y will take x value  x==y that mean compare */
	console.log ("x=4 is equal to y=4");
}
x = "4";/* x=4 is srting becoz betwin "" or '' revision java type befor y = 4 as number*/
if (x == y) {
	console.log("x='4' is equal to y=4")
}


/* strick equality */
if (x === y) { /* Equality of power */
  console.log("strict: x='4' is equal to y=4")/*bcoz '4' is string 4 is just number*/ 
}
else {
	console.log("strict: x='4' is NOT equal to y=4")
}








