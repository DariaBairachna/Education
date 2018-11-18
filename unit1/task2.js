var x = 5.8568895;
var whole = Math.floor(x);
var decimal = Math.round(x * 10) / 10;
var decimalFix = +x.toFixed(1);
var hundredth = Math.round(x * 100) / 100;
var exp = x.toExponential(1);

alert(whole);
alert(decimal);
alert(decimalFix);
alert(hundredth);
alert(exp);