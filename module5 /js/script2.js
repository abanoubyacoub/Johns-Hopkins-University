// DOM manipulation
document.getElementById('title');
console.log(document.getElementById('title'));

console.log(document instanceof HTMLDocument);
// DOM manipulation lecture 53 part 2 

// function sayHello () {
// 	// console.log(
// 	// 	document.getElementById("name").value
// 	// 	);
// 	var name = 
// 	document.getElementById("name").value;
// 	var message = "<h2>hello " + name + "!</h2>";  /** h2 just text **/ 

// 	document.getElementById("content").textContent = message;
// }

function sayHello () {
	// console.log(
	// 	document.getElementById("name").value
	// 	);
	var name = 
	document.getElementById("name").value;
	var message = "<h2>hello " + name + "!</h2>";  /** h2 not text now bcoz innerHTML **/ 

	document
	.getElementById("content")
	.innerHTML = message;

/********/

	if (name === "abanoub") {
		var title = 
		// document.getElementById("title")
		document
		.querySelector("#title")
		.textContent;
	title += "& I LOVE YOU ";

		document
		.querySelector("h1")  /*or .querySelector("#title")*/
		.textContent = title
	title += " & Lovin It!";
	}
}














