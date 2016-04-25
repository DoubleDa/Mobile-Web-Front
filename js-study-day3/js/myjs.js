/**
*JavaScript函数
*
*/
<!--函数声明-->
function myFun(a,b) {
	return a*b;
}

<!--函数表达式（ 匿名函数 (函数没有名称)）-->
var x=function (a,b) {
	return a*b;
}

var c=x(3,4);

<!--Function() 构造函数-->
<!--通过内置的 JavaScript 函数构造器（Function()）定义-->
<!--在 JavaScript 中，需要避免使用 new 关键字-->
var myFun=new Function("a","b","return a*b");
var x=myFun(3,4);

<!--不使用构造函数-->
var myFun=function (a,b) {
	return a*b;
}

<!--函数提升（Hoisting）-->
<!--提升（Hoisting）是 JavaScript 默认将当前作用域提升到前面去的的行为。提升（Hoisting）应用在变量的声明与函数的声明。因此，函数可以在声明之前调用-->
testFun(6);
function testFun(a) {
	return a*a;
}

<!--自调用函数-->
(function () {
	var x="Hello World!";
})();

<!--函数可作为一个值使用-->
function myFunValue(a,b) {
	return a*b;
}

var x=myFunValue(2,3);
var y=myFunValue(2,3)*2+6;

<!--函数是对象-->
function myFunObj(a,b) {
	return arguments.length;
}

var txt=myFunObj.toString();