function arith(oper){
	var a=parseInt(document.getElementById("firstno").value);
	var b=parseInt(document.getElementById("secondno").value);
	var res=0;
	if (oper.innerHTML =="Add"){
		res=a+b;
		document.getElementById("ans").value=res
	}
	if (oper.innerHTML =="Sub"){
		res=a-b;
		document.getElementById("ans").value=res
	}
	if (oper.innerHTML =="Mul"){
		res=a*b;
		document.getElementById("ans").value=res
	}
	if (oper.innerHTML =="Div"){
		res=a/b;
		document.getElementById("ans").value=res
	}

}