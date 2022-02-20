var menuItem =document.getElementsByTagName("li");
var status =document.getElementById("title");
// menuItem[0].innerHTML = "Hello world ";
// menuItem[1].innerHTML = "عزيز وغالي ";
// menuItem[2].innerHTML = "عزيز وغالي ";
// menuItem[3].innerHTML = "عزيز وغالي ";
// menuItem[4].innerHTML = "عزيز وغالي ";

/*to replace typing 4 line to one line */

// for (var x = 0; x < menuItem.length; x++) {
// 	menuItem[x].innerHTML = "Hello world";
// }

for (var x = 0; x < menuItem.length; x++) {
	menuItem[x].addEventListener("click", showItem);
}

function showItem(){
	alert("اهلا بيك ")
	status="hello World"
}

