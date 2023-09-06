let roll=parseInt(prompt("Roll Number"))
let name=prompt("Name")

let m=parseInt(prompt("Enter the maths mark"))
let p=parseInt(prompt("Enter the physics mark"))
let c=parseInt(prompt("Enter the chemistry mark"))

var mpc=m+p+c
var avr=mpc/3

document.write("Roll no : "+roll+"<br>")
document.write("Name : "+name +"<br>")

if(avr<=100){
if(avr>=90){
	document.write("Disniction")
}

else if(avr>=80){
	document.write("First class")
}

else if(avr>=60){
	document.write("second class")
}

else if(avr>=50){
	document.write("Average")
}

else{
	document.write("Fail")

}
}
else{
	document.write("pls enter the Marks in out of 100")
}


