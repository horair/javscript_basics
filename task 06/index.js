var crs1 = prompt("please enter your course1 numbers:");
var crs2 = prompt("please enter your course2 numbers:");
var crs3 = prompt("please enter your course3 numbers:");
var crs4 = prompt("please enter your course4 numbers:");
var crs5 = prompt("please enter your course5 numbers:");
var sum = parseInt(crs1) + parseInt(crs2) + parseInt(crs3) + parseInt(crs4) + parseInt(crs5)
console.log(sum);
var tMarks = 500;
var percent = sum * 100 / tMarks;
console.log(percent);
if (percent >= 90) {
    alert("Your percentage is " + percent + "% and your Grade is A+" );
} else if (percent >= 75) {
    alert("Your percentage is " + percent + "% and your Grade is A" );
} else if (percent >= 60) {
    alert("Your percentage is " + percent + "% and your Grade is B" );
} else if (percent >= 45) {
    alert("Your percentage is " + percent + "% and your Grade is C" );
} else if (percent >= 30) {
    alert("Your percentage is " + percent + "% and your Grade is D" );
} else if (percent <= 29) {
    alert("Your percentage is " + percent + "% and your Grade is F" );
}
