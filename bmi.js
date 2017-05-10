var q1
var q2
var w
var h
var bmi
var measure

function clac(){
	q1 = prompt("Enter your weight","Kilograms");
	q2 = prompt("Enter your height","Meters");
    w = parseInt(q1);
    h = parseInt(q2);
    bmi = w/(h*2);
    document.getElementByID("output").innerHTML = bmi;
    document.getElementByID("bmi").innerHTML = "Your bmi is" bmi;
}

function measure(){
	if ( 0 < bmi < 18.5) {
		document.getElementByID("measure").innerHTML = "Underweight"
	}
	else if (18.5 < bmi < 24.9) {
		document.getElementByID("measure").innerHTML = "Normal"
	}
	else if (25 < bmi < 29.9) {
		document.getElementByID("measure").innerHTML = "Overweight"
	}
	else if ( bmi >= 30 ) {
		document.getElementByID("measure").innerHTML = "Obese"
	}
	else {
		document.getElementByID("measure").innerHTML = "Not possible"		
	}

}