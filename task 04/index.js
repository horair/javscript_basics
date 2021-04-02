var a = prompt("Please enter first number:");
var b = prompt("Please enter second number:");
var c = prompt("Please enter desired operation:" , "e.g + , - , / , * " );
switch (c) {
    case "+":
        var sum = parseInt(a) + parseInt(b);
        alert("Answer is " + sum);
        break;
    case "-":
    var sub = parseInt(a) - parseInt(b);
    alert("Answer is " + sub);
    break;
    case "/":
    var div = parseInt(a) / parseInt(b);
    alert("Answer is " + div);
    break;
    case "*":
    var mul = parseInt(a) * parseInt(b);
    alert("Answer is " + mul);
    break;        
    default:
        break;
}
