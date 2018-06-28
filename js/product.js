window.onload=function(){
	// 下拉开始
	let youxiao=document.querySelectorAll("li")[1]
	console.log(youxiao)
	let xiahua=document.getElementsByClassName("drop-down")[0]
	console.log(xiahua)
	youxiao.onmouseenter=function(){
		xiahua.style.height="100px"
		xiahua.style.boxShadow="0 1px 5px 0px	rgba(0, 0, 0, 0.5)";
	}
	youxiao.onmouseleave=function(){
		xiahua.style.height="0"
	}
	


	// 顶部TAB
	let  wh=innerHeight;
	let daohang=document.querySelector(".navbarT")
	let fanhui=document.querySelector(".fanhui")
	console.log(fanhui)
    // 滚动条的事件 
	window.onscroll=function(){
		let st=document.body.scrollTop||document.documentElement.scrollTop;
		if(st>0){
			daohang.style.top="0";
			daohang.style.height="62px"
			daohang.style.borderBottom="1px solid #dadada";
			fanhui.style.bottom="30px";
		}

		else{
			daohang.style.top="75px";
			fanhui.style.bottom="-80px";
			daohang.style.height="0px"


		}
			fanhui.onclick=function(){
			animate(document.body,{scrollTop:0})
			animate(document.documentElement,{scrollTop:0})
		}
		
		}



// 点击查看详情


let details=document.querySelectorAll(".details")[0]
console.log(details)
let detailstu=document.querySelectorAll(".detailstu")[0]
console.log(detailstu)
let guanbi=document.querySelectorAll(".false a")[0]
   details.onclick=function(){
   	detailstu.style.display="block"
   }
   guanbi.onclick=function(){
   	detailstu.style.display="none"
   }

   let details1=document.querySelectorAll(".details")[1]
let detailstu1=document.querySelectorAll(".detailstu")[1]
let guanbi1=document.querySelectorAll(".false a")[1]
   details1.onclick=function(){
   	detailstu1.style.display="block"
   }
   guanbi1.onclick=function(){
   	detailstu1.style.display="none"
   }

    let details2=document.querySelectorAll(".details")[2]
let detailstu2=document.querySelectorAll(".detailstu")[2]
let guanbi2=document.querySelectorAll(".false a")[2]
   details2.onclick=function(){
   	detailstu2.style.display="block"
   }
   guanbi2.onclick=function(){
   	detailstu2.style.display="none"
   }


 let details3=document.querySelectorAll(".details")[3]
let detailstu3=document.querySelectorAll(".detailstu")[3]
let guanbi3=document.querySelectorAll(".false a")[3]
   details3.onclick=function(){
   	detailstu3.style.display="block"
   }
   guanbi3.onclick=function(){
   	detailstu3.style.display="none"
   }

    let details4=document.querySelectorAll(".details")[4]
let detailstu4=document.querySelectorAll(".detailstu")[4]
let guanbi4=document.querySelectorAll(".false a")[4]
   details4.onclick=function(){
   	detailstu4.style.display="block"
   }
   guanbi4.onclick=function(){
   	detailstu4.style.display="none"
   }

    let details5=document.querySelectorAll(".details")[5]
let detailstu5=document.querySelectorAll(".detailstu")[5]
let guanbi5=document.querySelectorAll(".false a")[5]
   details5.onclick=function(){
   	detailstu5.style.display="block"
   }
   guanbi5.onclick=function(){
   	detailstu5.style.display="none"
   }

    let details6=document.querySelectorAll(".details")[6]
let detailstu6=document.querySelectorAll(".detailstu")[6]
let guanbi6=document.querySelectorAll(".false a")[6]
   details6.onclick=function(){
   	detailstu6.style.display="block"
   }
   guanbi6.onclick=function(){
   	detailstu6.style.display="none"
   }

    let details7=document.querySelectorAll(".details")[7]
let detailstu7=document.querySelectorAll(".detailstu")[7]
let guanbi7=document.querySelectorAll(".false a")[7]
   details7.onclick=function(){
   	detailstu7.style.display="block"
   }
   guanbi7.onclick=function(){
   	detailstu7.style.display="none"
   }
    let details8=document.querySelectorAll(".details")[8]
let detailstu8=document.querySelectorAll(".detailstu")[8]
let guanbi8=document.querySelectorAll(".false a")[8]
   details8.onclick=function(){
   	detailstu8.style.display="block"
   }
   guanbi8.onclick=function(){
   	detailstu8.style.display="none"
   }
     let details9=document.querySelectorAll(".details")[9]
let detailstu9=document.querySelectorAll(".detailstu")[9]
let guanbi9=document.querySelectorAll(".false a")[9]
   details9.onclick=function(){
   	detailstu9.style.display="block"
   }
   guanbi9.onclick=function(){
   	detailstu9.style.display="none"
   }
}