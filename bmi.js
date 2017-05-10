var q1
var q2
var w
var h
var bmi
var measure

function calc() {
	q1 = document.getElementById("height").value;
	q2 = document.getElementById("weight").value;
    w = parseInt(q1);
    h = parseInt(q2);
    bmi = w/(h*h);
    document.getElementById("bmi").innerHTML = "Your bmi is "+bmi;
    if (bmi > 0 && bmi <= 18.5) {
		document.getElementById("measure").innerHTML = "Underweight"
		document.getElementById("Normal").style.display = "block"
	}
	else if (bmi > 18.5 && bmi <= 24.9) {
		document.getElementById("measure").innerHTML = "Normal"
		document.getElementById("Normal").style.display = "block"
	}
	else if (bmi > 25 && bmi <= 29.9) {
		document.getElementById("measure").innerHTML = "Overweight"
		document.getElementById("Normal").style.display = "block"
	}
	else if ( bmi >= 30 ) {
		document.getElementById("measure").innerHTML = "Obese"
		document.getElementById("Normal").style.display = "block"
	}
	else {
		document.getElementById("measure").innerHTML = "Not possible"		
		document.getElementById("Normal").style.display = "block"
	}
}

function measure(){
	if ( 0 < bmi < 18.5) {
		document.getElementById("measure").innerHTML = "Underweight"
	}
	else if (18.5 < bmi < 24.9) {
		document.getElementById("measure").innerHTML = "Normal"
	}
	else if (25 < bmi < 29.9) {
		document.getElementById("measure").innerHTML = "Overweight"
	}
	else if ( bmi >= 30 ) {
		document.getElementById("measure").innerHTML = "Obese"
	}
	else {
		document.getElementById("measure").innerHTML = "Not possible"		
	}

}

document.getElementById("calc").addEventListener("click", calc);