<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>index</title>
</head>
<body>
<h3>我是index.jsp</h3>
<img src = "timg.jpg" width = "1200px" id = "img" style = "display:none;"/>

<canvas id="myCanvas" style="border:1px solid #000000;">
</canvas>
<script language="javascript">
ar c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("img");
ctx.drawImage(img,1000,500);
</script>
</body>
</html>