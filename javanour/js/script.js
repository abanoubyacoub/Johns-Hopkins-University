var menuItem =document.getElementsByTagName("li");
var upstatus =document.getElementById("uptitle");
var btn =document.getElementById("btn");
var myMenu = document.getElementById("menu");
var counter = 1;

// menuItem[0].innerHTML = "Hello world ";
// menuItem[1].innerHTML = "عزيز وغالي ";
// menuItem[2].innerHTML = "عزيز وغالي ";
// menuItem[3].innerHTML = "عزيز وغالي ";
// menuItem[4].innerHTML = "عزيز وغالي ";

/* to replace typing 4 line to one line */

// for (var x = 0; x < menuItem.length; x++) {
// 	menuItem[x].innerHTML = "Hello world";
// }

for (var x = 0; x < menuItem.length; x++) {
	menuItem[x].addEventListener("click", showItem);
};

function showItem(){
	// upstatus.innerHTML = "hello World"
	alert(" تسلم ايديك ")
	upstatus.innerHTML = this.innerHTML;
    this.classlist.add("selected");
};


btn.addEventListener("click", newItem);

function newItem (){
// upstatus.innerHTML = "Hello world"
// menuItem[0].innerHTML = "java"
alert("متضغطش اوي كده")
btn.innerHTML = "اضغط كمان عاوز اتوب"
// myMenu.innerHTML = "new row"
 myMenu.innerHTML += "<li> new line "+counter+"</li>" /*one dis befor close " onle can make dis*/
 counter++
};
