var courses = [];
for (let index = 1 ; index < 6; index++){
     var a = prompt("Please enter your course name:");
     courses.push(a);
}
for (let i = 0; i < 5; i++) {
    alert("Your course number " + i + " is " + courses[i]);
}