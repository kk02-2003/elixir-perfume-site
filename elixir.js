
//progressbar


$(window).scroll(function(){
	var scroll=$(window).scrollTop();
	var dh=$(document).height();
	var wh =$(window).height();
	var scrollPercent=(scroll/ (dh-wh))*100;
	$("#progressbar").css("width",scrollPercent + "%");
})

//carousel

 $(function(){
	 $(".carousel2").each(function(){
		 $(this).carousel({
			 interval:false
		 });
	 });
 });
 
 $(function(){
	 $(".carousel3").each(function(){
		 $(this).carousel({
			 interval:false
		 });
	 });
 });
 
 
 // login and bag popups
const loginPopup= document.querySelector(".login-popup");
const bagPopup= document.querySelector(".bag-popup");

const close=document.querySelector(".close");
const close2=document.querySelector(".close2");
const btn1=document.querySelector("#btn");

function login(){
	loginPopup.classList.add("show");
}

function bag(){
	bagPopup.classList.add("show");
}

close.addEventListener('click',function(){
	loginPopup.classList.remove("show");
})
close2.addEventListener('click',function(){
	bagPopup.classList.remove("show");
})
 

// //validation
// function validate(){
//   var text=document.getElementById("email").value;
//   var text2=document.getElementById("pwd").value;
//   var regx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
//   if(regx.test(text)&&passw.test(text2)){
// 	  loginPopup.classList.remove("show");
// 	  //loginPopup.style.display="none";
// }
//   else{
//     window.alert("INVALID INPUT");
//   }
  
// }


//validation
function validate(){
	var text=document.getElementById("email").value;
	var text2=document.getElementById("pwd").value;
	
	// Remove validation checks for email and password
	
	// Close the popup
	loginPopup.classList.remove("show");
	// Optionally, you can display a confirmation message
	alert("You are signed up!");
  }
  














 
$(document).ready(function(){
    $("h1").click(function(){

        $(".select").toggle();
    }) 
	
})

    $("form").submit(function(e){
		e.preventDefault();
    }) 

function newsletter(){
	document.getElementById("news").innerHTML="Your first email newsletter will arrive shortly. Subscribe to receive news from ELIXIR";
	document.getElementById("news2").innerHTML="HAVE A GOOD DAY!";
}

function feedback(){
	document.getElementById("feedback").innerHTML="Feedback recorded. Thank you. We will work harder. ";
	document.getElementById("feed2").innerHTML="HAVE A GOOD DAY!";
}


function flip1(){
		var active=document.getElementById("chanelbtn");
		document.getElementById("chanel_products").style.display="flex";
		document.getElementById("lv_products").style.display="none";
		active.className += " button_active";
		document.getElementById("dior_products").style.display="none";
		document.getElementById("diorbtn").className-=" button_active";
		document.getElementById("louisbtn").className-=" button_active";
}

function flip2(){
		var active=document.getElementById("louisbtn");
		document.getElementById("chanel_products").style.display="none";
		document.getElementById("lv_products").style.display="flex";
		active.className += " button_active";
		document.getElementById("dior_products").style.display="none";
		document.getElementById("chanelbtn").className-=" button_active";
		document.getElementById("diorbtn").className-=" button_active";
}

function flip3(){
		var active=document.getElementById("diorbtn");
		document.getElementById("chanel_products").style.display="none";
		document.getElementById("lv_products").style.display="none";
		document.getElementById("dior_products").style.display="flex";
		active.className += " button_active";
		document.getElementById("chanelbtn").className-=" button_active";
		document.getElementById("louisbtn").className-=" button_active";
}


 
$(document).ready(function(){
$('.grid button').click(function(){

        let filter = $(this).attr('class');
        if(filter =='fullview'){
			$('.mens_products .brand div').css({"width":"33%"});
			$('.mens_products #vid').css("display","block");
			$(".grid .fullview i").addClass('active');
			$(".grid .gridview i").removeClass('active');
			
        }
		if(filter =='gridview'){
            $('.mens_products .brand div').css({"width":"19%"});
			$('.mens_products #vid').css("display","none");
			$(".grid .fullview i").removeClass('active');
			$(".grid .gridview i").addClass('active');
        }
	   
    });	
})


var a=0;
$(document).ready(function(){
	$(".mens_products div div p button").on("click",function(){
		var parent_id=$(this).parent().parent().clone();
		$(".bag_products .brand").append(parent_id); 
		$(".checkout button").css("visibility","visible");
		bagPopup.classList.add("show");
		var spans =document.querySelectorAll(".bag_products .price");
		for (var i=0;i<spans.length;i++){
			var b=spans.length;
			var c=spans[i].textContent;
			a=a+ parseInt(c,10),
			//a= a+ spans;
			console.log(a);
			console.log(b);
		}
		document.getElementById("total_price").textContent=a;
		a=0;
		
	});
	
	$(".products1 .product1 button").on("click",function(){
		var parent_id=$(this).parent().clone();
		$(".bag_products .brand").append(parent_id); 
		$(".checkout button").css("visibility","visible");
		bagPopup.classList.add("show");
		
				var spans =document.querySelectorAll(".bag_products .price");
		for (var i=0;i<spans.length;i++){
			var b=spans.length;
			var c=spans[i].textContent;
			a=a+ parseInt(c,10),
			//a= a+ spans;
			console.log(a);
			console.log(b);
		}
		document.getElementById("total_price").textContent=a;
		a=0;
	});
	
	$(".brand_products div div p button").on("click",function(){
		var parent_id=$(this).parent().parent().clone();
		$(".bag_products .brand").append(parent_id); 
		$(".checkout button").css("visibility","visible");
		bagPopup.classList.add("show");
				var spans =document.querySelectorAll(".bag_products .price");
		for (var i=0;i<spans.length;i++){
			var b=spans.length;
			var c=spans[i].textContent;
			a=a+ parseInt(c,10),
			//a= a+ spans;
			console.log(a);
			console.log(b);
		}
		document.getElementById("total_price").textContent=a;
		a=0;
	});
});

function checkout(){
	window.location.href="gateway.html";
}

function order(){
	window.alert("YOUR ORDER HAS BEEN PLACED");
	window.location.href="menscologne.html";
}



