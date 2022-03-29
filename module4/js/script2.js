/***************************************************/
/***************************************************/
// lecture 52 fake namespaces
var name2 = "Ibrahim";
function sayHi () {
	console.log("Hi " + name2); /* will be over write yacoub 
	to solve it make space */
}
/**/
// var ibrahimGreeter = {};
// ibrahimGreeter.name2 = "Ibrahim";
// var greeting = "hi";
// ibrahimGreeter.sayHi = function  () {
// 	console.log(greeting + ibrahimGreeter.name2); /* will be over write yacoub 
// 	to solve it make space */
// }
/***************************************************/
//  immediately invoked function Expression by (...())
//  IIFEs
 (function (window) {
 var ibrahimGreeter = {};
ibrahimGreeter.name2 = "Ibrahim";
var greeting = "hi";
ibrahimGreeter.sayHi = function  () {
	console.log(greeting + ibrahimGreeter.name2); /* will be over write yacoub 
	to solve it make space */
}	
window.ibrahimGreeter = ibrahimGreeter; 
})(window);