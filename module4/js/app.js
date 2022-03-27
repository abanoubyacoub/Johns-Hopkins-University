/***************************************************/
/***************************************************/
// lecture 52 fake namespaces
sayHello();
sayHi();
/**/
yacoubGreeter.sayHello();
ibrahimGreeter.sayHi();
/***************************************************/

function a() {
	console.log("hello jhon");
}
a();

/* same */

var a = (function (){
	console.log("hello hopkins")
});
a ();

/* same */
//  immediately invoked function Expression by (...())
//  IIFEs
(function (){
	console.log("hello universty")
})() ; /* () last (fun) invoked function direct */

(function (name){
	console.log("hello universty " + name)
})() ;

(function (name){
	console.log("hello universty " + name)
})("USA") ;
/*********/
