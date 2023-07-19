var a=prompt("Enter the number(max=10)");
document.write("given number is "+a+"<br>");
var b,sum=0;
while(a>0){
	b=a%10;
	sum=sum*10+b;
	a=parseInt(a/10);
}
document.write("Reverse of the number is"+" "+sum);