function register(){
	document.getElementById("maindiv").style.display="none"
	document.getElementById("form").style.display="block"
	document.getElementById("login").style.display="none"
	document.getElementById("Flogin").style.display="none"
	document.getElementById("Slogin").style.display="none"
}
function home(){
	document.getElementById("maindiv").style.display="block"
	document.getElementById("form").style.display="none"
	document.getElementById("login").style.display="none"
}
function login(){
	document.getElementById("maindiv").style.display="none"
	document.getElementById("login").style.display="block"
	document.getElementById("Flogin").style.display="none"
	document.getElementById("Slogin").style.display="none"
}
function Flogin(){
	document.getElementById("maindiv").style.display="none"
	document.getElementById("Flogin").style.display="block"
	document.getElementById("Slogin").style.display="none"
}
function Slogin(){
	document.getElementById("maindiv").style.display="none"
	document.getElementById("Slogin").style.display="block"
}
function about(){
	document.getElementById("maindiv").style.display="none"
	document.getElementById("form").style.display="none"
	document.getElementById("login").style.display="none"
	document.getElementById("Flogin").style.display="none"
	document.getElementById("Slogin").style.display="none"
	document.getElementById("about").style.display="block"
}
function map(){
	document.getElementById("maindiv").style.display="none"
	document.getElementById("form").style.display="none"
	document.getElementById("login").style.display="none"
	document.getElementById("Flogin").style.display="none"
	document.getElementById("Slogin").style.display="none"
	document.getElementById("about").style.display="none"
	document.getElementById("map").style.display="block"
}
let img_a=["luffy.gif","anime img.jpg","luffy2.gif","Dragon ball super.png"]
let i=0
function next(){
	i++
	if(i==4)
		i=0
	document.getElementById("im1").src=img_a[i]
}
function prev(){
	i--
	if(i==-1)
		i=3
	document.getElementById("im1").src=img_a[i]
}
auto_slider()
function auto_slider(){
	
	if(i==4)
		i=0
	document.getElementById("im1").src=img_a[i]
	i++
	setTimeout(auto_slider,7000)
}