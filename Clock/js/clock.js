//--------------------绘制时钟------------
// JavaScript Document
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 500;
var R = 8;

window.onload = function(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;
	
	//绘制当前画布
	
	setInterval(
		function(){
			draw(context);
		},
		50
	);
	}
function draw(context){
	//清除画布
	context.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
	//获取系统当前时间
	var currentTime = new Date();
	var H = currentTime.getHours();
	var M = currentTime.getMinutes();
	var S = currentTime.getSeconds();
	//绘制一个数字 从beginX, beginY的位置开始，绘制 num
	drawDigit(0,0,parseInt(H/10),context);
	drawDigit(15*(R+1), 0,parseInt(H%10),context);
	drawDigit(30*(R+1), 0,10,context);	//绘制 :
	
	drawDigit(39*(R+1), 0,parseInt(M/10),context);	//绘制十位
	drawDigit(54*(R+1), 0,parseInt(M%10),context);	//绘制个位 
	drawDigit(69*(R+1), 0,10,context);	//绘制 :
	
	drawDigit(78*(R+1), 0,parseInt(S/10),context);	//绘制十位
	drawDigit(93*(R+1), 0,parseInt(S%10),context);	//绘制个位 
	}
function drawDigit(beginX,beginY,num,context){
	context.fillStyle = "red";
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j] == 1){
				//画圆
				context.beginPath();
				context.arc(beginX+2*(R+1)*j+(R+1),beginY+2*(R+1)*i+(R+1),R,0,2*Math.PI);
				context.closePath();
				context.fill();
				}
			}
		}
	}





// var WINDOW_WIDTH=1024;
// var WINDOW_HEIGHT=768;
// var RADIUS=8;
// window.onload=function(){
// 	//获取Canvas
// 	var canvas=document.getElementById("myCanvas");
// 	//获取画笔
// 	var ctx=canvas.getContext("2d");
// 	//设置画布的大小
// 	canvas.width=WINDOW_WIDTH;
// 	canvas.height=WINDOW_HEIGHT;

// 	render(ctx);
// }

// function render(context){
// 	//获取时分秒
// 	var hour=12;
// 	var minutes=36;
// 	var seconts=56;
// 	//一个数字一个数字的绘制
// 	renderDigit(0,0,parseInt(hour/10),context);
// }

// function renderDigit(beginX,beginY,num,context){
// 	//填充画笔颜色
// 	context.fillStyle="red";

// 	// 循环遍历digit数组
// 	for(var i=0;i<digit[num].length;i++){
// 		for(var j=0;j<digit[num][i].leng;i++){
// 			//绘制图形
// 			context.beginPath();
// 			//arc(圆心X，圆心Y，半径)
// 			context.arc(beginX+2*(RADIUS+1)*j+(RADIUS+1),
// 						beginY+2*(RADIUS+1)*i+(RADIUS+1),
// 						RADIUS,0,2*Math.PI);
// 			context.closePath();
// 			context.fill();

// 		}
// 	}
// }


