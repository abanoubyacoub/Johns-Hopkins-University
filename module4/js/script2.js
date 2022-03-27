/***************************************************/
/***************************************************/
// lecture 52 fake namespaces
var name2 = "Ibrahim";
function sayHi () {
	console.log("Hi " + name2); /* will be over write yacoub 
	to solve it make space */
}
/**/
var ibrahimGreeter = {};
ibrahimGreeter.name2 = "Ibrahim";
ibrahimGreeter.sayHi = function  () {
	console.log("Hi " + ibrahimGreeter.name2); /* will be over write yacoub 
	to solve it make space */
}
/***************************************************/