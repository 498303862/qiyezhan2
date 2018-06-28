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
		  // 轮播图开始
	 
	let banner=document.querySelector("section")
	let lis=document.querySelectorAll(".box li");
	console.log(lis);
	let lid=document.querySelectorAll(".dotsbox li");
	console.log(lid);



	let index=0;
	let t=setInterval(move,3000);
	lis[0].style.zIndex=10;
	// lid[0].className="dosts";

	// 移入
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	// 正着轮播
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		lis.forEach(function(meiyige){
			meiyige.style.zIndex=5;
		})
		
		lid.forEach(function(meiyige){
			meiyige.className="";
		})
		lis[index].style.zIndex=10;
		lid[index].className="dosts"
	}
	// 倒着轮播
	function move1(){
		index--;
		if(index<0){
			index=lis.length-1;
		}
		lis.forEach(function(meiyige){
			meiyige.style.zIndex=5;
		})
		
		lid.forEach(function(meiyige){
			meiyige.className="";
		})
		lis[index].style.zIndex=10;
		lid[index].className="dosts"
	}

	// 点击轮播点
	for(let i=0;i<lid.length;i++){
		lid[i].onclick=function(){
			lis.forEach(function(meiyige){
				meiyige.style.zIndex=5;
			})
			lid.forEach(function(meiyige){
				meiyige.className="";
			})
			lis[i].style.zIndex=10;
			lid[i].className="dosts";
			index=i;
		}
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
   // 点击图
   let tubox=document.querySelectorAll(".tubox")[0]
   console.log(tubox)
   let tp=tubox.querySelectorAll(".tu")
   console.log(tp)
   let dbox=document.querySelectorAll(".circularbox")[0]
   console.log(dbox)
   let dxd=dbox.querySelectorAll(".circular")
   console.log(dxd)
   tp[0].style.display="block"
   for(let i=0;i<dxd.length;i++){
	  	dxd[i].onclick=function(){
	  		for(let j=0;j<dxd.length;j++){
	  			tp[j].style.display="none"
	  			// dxd[j].className=""
	  			 dxd[j].style.border="1px solid #bfbfbf";

	  		}
	  		tp[i].style.display="block"
	  		// dxd[i].className="hots"
	  		dxd[i].style.border="3px solid #bfbfbf";

	  	}
	  }
	let tubox1=document.querySelectorAll(".tubox")[1]
   console.log(tubox1)
   let tp1=tubox1.querySelectorAll(".tu")
   console.log(tp1)
   let dbox1=document.querySelectorAll(".circularbox")[1]
   console.log(dbox1)
   let dxd1=dbox1.querySelectorAll(".circular")
   console.log(dxd1)
   tp1[0].style.display="block"
   for(let i=0;i<dxd1.length;i++){
	  	dxd1[i].onclick=function(){
	  		for(let j=0;j<dxd1.length;j++){
	  			tp1[j].style.display="none"
	  			// dxd[j].className=""
	  			 dxd1[j].style.border="1px solid #bfbfbf";

	  		}
	  		tp1[i].style.display="block"
	  		// dxd[i].className="hots"
	  		dxd1[i].style.border="3px solid #bfbfbf";

	  	}
	  }

	  let tubox2=document.querySelectorAll(".tubox")[2]
   console.log(tubox2)
   let tp2=tubox2.querySelectorAll(".tu")
   console.log(tp2)
   let dbox2=document.querySelectorAll(".circularbox")[2]
   console.log(dbox2)
   let dxd2=dbox2.querySelectorAll(".circular")
   console.log(dxd2)
   tp2[0].style.display="block"
   for(let i=0;i<dxd2.length;i++){
	  	dxd2[i].onclick=function(){
	  		for(let j=0;j<dxd2.length;j++){
	  			tp2[j].style.display="none"
	  			// dxd[j].className=""
	  			 dxd2[j].style.border="1px solid #bfbfbf";

	  		}
	  		tp2[i].style.display="block"
	  		// dxd[i].className="hots"
	  		dxd2[i].style.border="3px solid #bfbfbf";

	  	}
	  }

   let tubox3=document.querySelectorAll(".tubox")[3]
   console.log(tubox3)
   let tp3=tubox3.querySelectorAll(".tu")
   console.log(tp3)
   let dbox3=document.querySelectorAll(".circularbox")[3]
   console.log(dbox3)
   let dxd3=dbox3.querySelectorAll(".circular")
   console.log(dxd3)
   tp3[0].style.display="block"
   for(let i=0;i<dxd3.length;i++){
	  	dxd3[i].onclick=function(){
	  		for(let j=0;j<dxd3.length;j++){
	  			tp3[j].style.display="none"
	  			// dxd[j].className=""
	  			 dxd3[j].style.border="1px solid #bfbfbf";

	  		}
	  		tp3[i].style.display="block"
	  		// dxd[i].className="hots"
	  		dxd3[i].style.border="3px solid #bfbfbf";

	  	}
	  }

	let tubox4=document.querySelectorAll(".tubox")[4]
   let tp4=tubox4.querySelectorAll(".tu")
   let dbox4=document.querySelectorAll(".circularbox")[4]
   let dxd4=dbox4.querySelectorAll(".circular")
   tp4[0].style.display="block"
   for(let i=0;i<dxd4.length;i++){
	  	dxd4[i].onclick=function(){
	  		for(let j=0;j<dxd4.length;j++){
	  			tp4[j].style.display="none"
	  			// dxd[j].className=""
	  			 dxd4[j].style.border="1px solid #bfbfbf";

	  		}
	  		tp4[i].style.display="block"
	  		// dxd[i].className="hots"
	  		dxd4[i].style.border="3px solid #bfbfbf";

	  	}
	  }

	  let tubox5=document.querySelectorAll(".tubox")[5]
   let tp5=tubox5.querySelectorAll(".tu")
   let dbox5=document.querySelectorAll(".circularbox")[5]
   let dxd5=dbox5.querySelectorAll(".circular")
   tp5[0].style.display="block"
   for(let i=0;i<dxd5.length;i++){
	  	dxd5[i].onclick=function(){
	  		for(let j=0;j<dxd5.length;j++){
	  			tp5[j].style.display="none"
	  			// dxd[j].className=""
	  			 dxd5[j].style.border="1px solid #bfbfbf";

	  		}
	  		tp5[i].style.display="block"
	  		// dxd[i].className="hots"
	  		dxd5[i].style.border="3px solid #bfbfbf";

	  	}
	  }

let tubox6=document.querySelectorAll(".tubox")[6]
   let tp6=tubox6.querySelectorAll(".tu")
   let dbox6=document.querySelectorAll(".circularbox")[6]
   let dxd6=dbox6.querySelectorAll(".circular")
   tp6[0].style.display="block"
   for(let i=0;i<dxd6.length;i++){
	  	dxd6[i].onclick=function(){
	  		for(let j=0;j<dxd6.length;j++){
	  			tp6[j].style.display="none"
	  			// dxd[j].className=""
	  			 dxd6[j].style.border="1px solid #bfbfbf";

	  		}
	  		tp6[i].style.display="block"
	  		// dxd[i].className="hots"
	  		dxd6[i].style.border="3px solid #bfbfbf";

	  	}
	  }

	  let tubox7=document.querySelectorAll(".tubox")[7]
   let tp7=tubox7.querySelectorAll(".tu")
   let dbox7=document.querySelectorAll(".circularbox")[7]
   let dxd7=dbox7.querySelectorAll(".circular")
   tp7[0].style.display="block"
   for(let i=0;i<dxd4.length;i++){
	  	dxd7[i].onclick=function(){
	  		for(let j=0;j<dxd7.length;j++){
	  			tp7[j].style.display="none"
	  			// dxd[j].className=""
	  			 dxd7[j].style.border="1px solid #bfbfbf";

	  		}
	  		tp7[i].style.display="block"
	  		// dxd[i].className="hots"
	  		dxd7[i].style.border="3px solid #bfbfbf";

	  	}
	  }


let tubox8=document.querySelectorAll(".tubox")[8]
   let tp8=tubox8.querySelectorAll(".tu")
   let dbox8=document.querySelectorAll(".circularbox")[8]
   let dxd8=dbox8.querySelectorAll(".circular")
   tp8[0].style.display="block"
   for(let i=0;i<dxd8.length;i++){
	  	dxd8[i].onclick=function(){
	  		for(let j=0;j<dxd8.length;j++){
	  			tp8[j].style.display="none"
	  			// dxd[j].className=""
	  			 dxd8[j].style.border="1px solid #bfbfbf";

	  		}
	  		tp8[i].style.display="block"
	  		// dxd[i].className="hots"
	  		dxd8[i].style.border="3px solid #bfbfbf";

	  	}
	  }


let tubox9=document.querySelectorAll(".tubox")[9]
   let tp9=tubox9.querySelectorAll(".tu")
   let dbox9=document.querySelectorAll(".circularbox")[9]
   let dxd9=dbox9.querySelectorAll(".circular")
   tp9[0].style.display="block"
   for(let i=0;i<dxd9.length;i++){
	  	dxd9[i].onclick=function(){
	  		for(let j=0;j<dxd9.length;j++){
	  			tp9[j].style.display="none"
	  			// dxd[j].className=""
	  			 dxd9[j].style.border="1px solid #bfbfbf";

	  		}
	  		tp9[i].style.display="block"
	  		// dxd[i].className="hots"
	  		dxd9[i].style.border="3px solid #bfbfbf";

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