// DOM manipulation
/*document.getElementById('title');*/
console.log(document.getElementById('title'));

console.log(document instanceof HTMLDocument); /*instance of = status*/

// lec 53/2

document.addEventListener("DOMContentLoaded",
	function (event) {


function sayHello (event) {
	// console.log(this);
	/* or */
	// this.textContent = "Said it!"; /* once u  click inside box */
	// 	document.getElementById("name").value
	// 	);
	var name = 
	document.getElementById("name").value;
	var message = "<h2>hello " + name + "!</h2>";  /** h2 not text now bcoz innerHTML **/ 

	document
	.getElementById("content") /*relatead by div in html page */
	.innerHTML = message;


	if (name === "abanoub") {
		var title = 
		// document.getElementById("title")
		document
		.querySelector("#title") /* css title */
		.textContent;
	title += "& I LOVE YOU ";

		document
		.querySelector("h1")  /*or .querySelector("#title")*/
		.textContent = title
	title += " & Lovin It!";
	}
}

 // lec 54
 /* unobstrusive event binding */
 // document.querySelector("button")
 // addEventListener("click" , sayHello);

/* or */
 document.querySelector("button")
 .onclick = sayHello;
// 55 mozurilla 
document.querySelector("body")
.addEventListener("mousemove",
	function (event) {
		if (event.shiftkey === true ) {
	    console.log("x: " + event.clintX);
		console.log("Y: "+ event.clintY);
		}
	}
	);
});











