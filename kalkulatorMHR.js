function kobieta()
{
	var a = document.getElementById("wiek").value;
	a = parseFloat(a);
	var b = document.getElementById("waga").value;
	b = parseFloat(b);
	var c = 0;
	c = 210-0.5*a-0.022*b;
	document.getElementById("wynik").innerHTML = "Twoje maksymalne tętno wynosi: " + c + "[uderzenia/minutę]";
}

function mezczyzna()
{
	var a = document.getElementById("wiek").value;
	a = parseFloat(a);
	var b = document.getElementById("waga").value;
	b = parseFloat(b);
	var c = 0;
	c = 210-0.5*a-0.022*(b+4);
	document.getElementById("wynik").innerHTML = "Twoje maksymalne tętno wynosi: " + c + "[uderzenia/minutę]";
}

function strefa()
{
	var a = document.getElementById("MHR").value;
	a = parseFloat(a);
	
	var b = 0;
	b = Math.round(0.5*a);
	var c = 0;
	c = Math.round(0.6*a);
	var d = 0;
	d = Math.round(0.7*a);
	var e = 0;
	e = Math.round(0.8*a);
	var f = 0;
	f = Math.round(0.9*a);
	
	document.getElementById("strefa1").innerHTML = "Przynależność do strefy I: " + b + "-" + c + " " + "[uderzenia/minutę]";
	document.getElementById("strefa2").innerHTML = "Przynależność do strefy II: " + c + "-" + d + " " + "[uderzenia/minutę]";
	document.getElementById("strefa3").innerHTML = "Przynależność do strefy III: " + d + "-" + e + " " + "[uderzenia/minutę]";
	document.getElementById("strefa4").innerHTML = "Przynależność do strefy IV: " + e + "-" + f + " " + "[uderzenia/minutę]";
	document.getElementById("strefa5").innerHTML = "Przynależność do strefy V: powyżej" + f + " " + "[uderzenia/minutę]";
}