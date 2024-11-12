
 const welcomePopup= document.querySelector(".welcome-popup");

 const close1=document.querySelector(".close1");
 const confirm=document.querySelector(".confirm");
 
 window.addEventListener('load',function(){
 
 showPopup();
 showPopup2();
 
 })
 
 function showPopup(){
	 const timeLimit = 13 //seconds;
	 let i=0;
	 const timer= setInterval(function(){
		 i++;
		 if(i == timeLimit){
			clearInterval(timer); 
			loginPopup.classList.add("show");
		 }
		 console.log(i)
	 },1000);
 }
 
 function showPopup2(){
	 const timeLimit = 1 //seconds;
	 let i=0;
	 const timer= setInterval(function(){
		 i++;
		 if(i == timeLimit){
			clearInterval(timer); 
			welcomePopup.classList.add("show");
		 }
		 console.log(i)
	 },1000);
 }
 
 
close1.addEventListener('click',function(){
	welcomePopup.classList.remove("show");
})
 

close.addEventListener('click',function(){
	loginPopup.classList.remove("show");
})
 

confirm.addEventListener('click',function(){
	welcomePopup.classList.remove("show");
})

function update(){

       var country=document.getElementById("country");
var value= country.options[country.selectedIndex].value;
document.getElementById("span4").innerHTML=value;
}



















