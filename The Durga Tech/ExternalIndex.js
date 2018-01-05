var vel=10;
var t=100;
var k=0;
var control=0;
var arr=["#C9C940","#78DB5F","#73E8C1","#73A9E8","#EC99F9"];
function draw(){
	for(var i=0;i<=70;i++)
		document.write("<hr/>")
}
function move(){
	var b=document.getElementsByTagName("body")[0].style;
	if(k<arr.length){
		if(control==0){
		b.backgroundColor=arr[k];
		control+=1;
		}
	    else{
			if(control<=8)
				control++;
			else{
			control=0;
			k++;
			}
		}
		
	}
	else
		k=0;
	
	var p1=document.getElementById("heading3a").style;
	var p2=document.getElementById("Contact").style;
	var p3=document.getElementById("heading3b").style;
	var p4=document.getElementById("Car").style;
	var p5=document.getElementById("heading3c").style;
	var p6=document.getElementById("About").style;
	p2.left=t+"%";
		p4.left=(t+25)+"%";
			p6.left=(t+60)+"%";
			p1.left=t+"%";
		p3.left=(t+30)+"%";
			p5.left=(t+60)+"%";
	t-=vel;
	if(t<=10){
		vel=0;
		p1.color="black";
		p3.color="black";
		p5.color="black";
	}	
}
draw();
setInterval("move()",250);