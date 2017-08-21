//获取画布并且载入图片
function loadImg() {
	var c = document.getElementById("myCanvas");
	//getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。 
	var ctx = c.getContext("2d");
	//var img = document.getElementById("timg");
	var img = new Image();
	img.src = "../images/timg.jpg";
	//drawImage(img,x,y,width,height)方法画图
	ctx.drawImage(img,0,0,1000,300);
}
//鼠标移动至Canvas区域显示坐标
function cnvs_getCoordinates(e){
	x=e.clientX;
	y=e.clientY;
	document.getElementById("xy").innerHTML="Coordinates: (" + x + "," + y + ")";
}
//鼠标移动至Canvas区域外不显示坐标
function cnvs_clearCoordinates(){
	document.getElementById("xy").innerHTML="";
}
//绘制遮罩层
// function coverImg() {
// 	//alert("我是voer")
// 	var c = document.getElementById("myCanvas");
// 	var cover = c.getContext("2d");
// 	cover.fillStyle = "rgba(255,255,255,0.5)";
// 	cover.fillRect (0,0, t.imgWidth, t.imgHeight);
// 	cover.clearRect(t.sx, t.sy, t.sHeight, t.sWidth);
// 	//cover.fileRect(0,0,1000,300);
// }