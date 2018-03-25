document.getElementById("demo").innerHTML = Date();

document.write(5 + 6); //xóa hết ND có trk
window.alert(5 + 6);
console.log(5 + 6);			//F12
xài toán tử + để nối chuỗi 
; cuối câu
nếu dài quá thì xuống dòng sau dấu =
có thể đặt trong dấu'' ""
var x;
cmt // /**/
biến k đk bđ bằng số, k đk SD hyphens-
var person = "John Doe",
carName = "Volvo",
price = 200;
10 ** 2: 10 mũ 2
10 >>> 2: dịch phải k dấu
	!==	Strict unequal
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

nếu k gán gtri khởi tạo thì nó có kiểu là undefined
var person = "John Doe", carName = "Volvo", price = 200;


var carName = "Volvo";
var carName; // nó sẽ k mất gtrij cũ
var x = "5" + 2 + 3; // 523
var x = 2 + 3 + "5"; // 55

data types: numbers, strings, objects 
var length = 16;                               // chỉ có 1 kiểu Number for all 
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object


var x = 16 + "Volvo";// xem như string
var x có thể chứa chuỗi hay số: kiểu dl động

Mảng
var cars = ["Saab", "Volvo", "BMW"];
arr.length

typeof ""                  // Returns "string"
typeof 0                   // Returns "number"
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; 
// khi truy cập thì là person.age or objectName["propertyName"]

person = null;
typeof person; //Object

== là bằng
=== là bằng và có kiểu dl như nhau

The typeof operator can return one of these primitive types:

string
number
boolean
undefined

typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"

đối với phương thức truy câp thông qua toán tử .

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo").innerHTML = person.fullName(); 
// k có () thì ra nội dung hàm

k nên xài vì nó lm chậm
var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object

khai báo trong hàm mà k có var là biến global
var carName = "Volvo";

// code here can use window.carName in 1 object
có thể SD window.carName để truy cập 1 biến global
document.getElementById("demo").innerHTML = "I can display " + window.carName;


// code here can use window.carName

onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page

====================================STRING======================================
kiểu string có tt length
var x = "We are the so-called \"Vikings\" from the north.";
có thể xuống hàng bằng dấu + nhưng đừng SD \
var x = new String("John");             
var y = new String("John");

// (x == y) is false because x and y are different objects

method của string
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
var pos = str.indexOf("locate",15);
var pos = str.search("locate"); //  k có tham số thứ 2


slice(start, end)				var res = str.slice(-12, -6); 	var res = str.slice(7);// tới cuối
//nếu là số âm thì tính từ cuối trở lại
substring(start, end)
substr(start, length)

var n = str.replace("Microsoft", "W3Schools");
//n là 1 string, và chỉ thay vt đầu

//regular ex: k pb hoa thường
var n = str.replace(/MICROSOFT/i, "W3Schools");
//thay hết
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower

noi chuoi
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

str.charAt(0);            // returns H
str.charCodeAt(0);         // returns 72
function myFunction() {
    var str = "a,b,c,d,e,f";
    var arr = str.split(","); //cắt
    document.getElementById("demo").innerHTML = arr[0]; // như z ms truy cập safe
}

txt.split("");           // Split in characters
k dk truy câpj theo kiểu str[0]

số thực 64bit
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3
var x = 0.2 + 0.1;         // x will be 0.30000000000000004
chia nhan trừ nso tự động hiểu chuỗi là số
var x = 100 / "Apple";  // x will be NaN (Not a Number)
isNaN(x);               // returns true because x is Not a Number
typeof NaN;            // returns "number"
typeof Infinity;        // returns "number"
var x =  2 / 0;          // x will be Infinity

//chuyển sang hệ 2
myNumber.toString(2);   // returns 10000000
(123).toString(); // trả về 1 string

var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000
x.toPrecision(2);       // returns 9.7 => có 2 số 
tất cả method trên đều trả về string

var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123  		=> trả về 1 number
(100 + 23).valueOf();   // returns 123 from expression 100 + 23


====================chuyển thành số ============================
The Number() method
The parseInt() method
The parseFloat() method

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number("10 20");       // returns NaN 
Number("John");        // returns NaN
Number(new Date("2017-09-30"));    // returns 1506729600000


parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 

var x = Number.MAX_VALUE;

var x = new String("John");             
var y = new String("John");

// (x == y) hay x === y is false because x and y are different objects

Math.PI;            // returns 3.141592653589793
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.pow(8, 2);      // returns 64
Math.sqrt(64);      // returns 8
Math.abs(-4.7);     // returns 4.7
Math.ceil(4.4);     // returns 5
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.random();     // returns a random number

 return Math.floor(Math.random() * (max - min + 1) ) + min; // nnawmf trong khoang đó bao gồm cả max


============================================================================
 There are 4 ways of initiating a date:

new Date()
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)	(99, 5, 24, 11, 33, 30, 0); 1999

var d = new Date("2015-03-25"); // có thể bỏ 2 cái sau, phải ghi 03
var d = new Date("03/25/2015"); ghi - sẽ error
new Date("Mar 25 2015") cái này có thể swap MM and DD


method: có thêm các hàm setDate(date: int),....  someday.setFullYear(2100, 0, 14);
getDate()	Get the day as a number (1-31)
getDay()	Get the weekday as a number (0-6)
getFullYear()	Get the four digit year (yyyy)

 Date.parse() method to convert it to milliseconds.
 var msec = Date.parse("March 21, 2012");
 var d = new Date(msec);

so sánh:
if (someday > today)

===================================new Array(params...?: any)===============================
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
k cần thiết dùng new

var person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo").innerHTML = person["firstName"];
=> truy cập 1 cách khác thuoc tính

== PHUONG THUC ==
var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays
fruits.reverse();         // Reverses the order of the elements
sort 2 số ==========================================
    points.sort(function(a, b){return a - b}); // chứ k là nó sort theo thứ tự alpha
== tìm max
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
//1 casjsh cho = -Infinity while(len--)

//sort obj return a.year - b.year
 cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});


fruits.toString();  //Banana,Orange,Apple,Mango
fruits.join(" * "); // Banana * Orange * Apple * Mango
fruits.pop(); // trả về pt cuối
fruits.shift();            // Removes the first element "Banana" from fruits  trả về pt đầu
fruits.unshift("Lemon");    // Adds a new element "Lemon" at first, trả về 5
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"
delete fruits[0];           // Changes the first element in fruits to undefined
fruits.splice(2, 0, "Lemon", "Kiwi"); // thêm ở vt 2 0 pt bị xóa
var myChildren = myGirls.concat(myBoys);     // Concatenates (joins) myGirls and myBoys
var citrus = fruits.slice(1); // return arr k xóa arr gom pt ở vt 1 tới hết 
var citrus = fruits.slice(1, 3);

fruits.push("Lemon");                // adds a new element (Lemon) to fruits trả về số pt là 5
fruits[fruits.length] = "Lemon";     // adds a new element (Lemon) to fruits cách 2 mà nó có thể  tạo ra các hole ở giữa
=**********************************************************************=
=> mảng chỉ dk truy cập thông qua chỉ số person[2] = 46;  => sai person["firstName"] = "John";
Array.isArray(fruits);     // returns true; lỗi
fruits instanceof Array     // returns true
còn 1 cách nữa là viết hàm: 



text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";


kiểu boolean
var x = ""; // 0 null NaN undentify false còn lại true hết
Boolean(x);       // returns false


x == "5"	true
!==	not equal value or not equal type

2 < "12"	true	Try it »
2 < "John"	false	Try it »
2 > "John"	false

var i = 0;

for (;cars[i];) while (cars[i]) i++=> nếu mảng còn 

	duyệt thuộc tính của objects
var x;
for (x in person) {}

	cho phép gán labelname
labelname{
	break labelname; 
}


In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function{}
There are 3 types of objects:

Object
Date
Array
And 2 data types that cannot contain values:

null  => là kiểu obj
undefined

typeof * : toán tử là string
"John".constructor                // Returns function String()  {[native code]}
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

function isArray(myArray) {
    return myArray.constructor === Array;
}

convert dec2bin
document.getElementById("demo").innerHTML = dec2bin(-5);
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
}

convert string to number
trả về 1 string :  String(123) + "<br>" +(123).toString()
Number(" ")       // returns 0 ngoài ra ta có thể sd parseInt or parseFLoat

var y = "5";      // y is a string
var x = + y;      // x is a number

var y = "John";   // y is a string
var x = + y;      // x is a number (NaN)

từ date sang number
d = new Date();
Number(d)          // returns 1404568027739
The date method getTime() does the same.

d = new Date();
d.getTime()        // returns 1404568027739

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"

tự động chuyển sáng kiểu toString()
document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"

undefined, NaN, null, "" => chuyển sang booleanl là false hết

var n = str.search(/w3schools/i);  // k pb hoa thường 


===================================================
function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
        if(x == "") throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x > 10) throw "is too high";
        if(x < 5) throw "is too low";
    }
    catch(err) {
        message.innerHTML = "Error: " + err + ".";  //err.message hay err.name
    }
    finally {
        document.getElementById("demo").value = "";
    }
}

hàm eval();
Evaluate/Execute JavaScript code/expressions:

var x = 10;
var y = 20;
var a = eval("x * y") + "<br>";
var b = eval("2 + 2") + "<br>";
var c = eval("x + 17") + "<br>";

var res = a + b + c;

debugger;

=== nếu để var x; k thì khai báo ở cuối cx dk nhưng khi có gán thì k dk
var y = 7; // Initialize y

"use strict";
x = 3.14;       // This will cause an error because x is not declared ở phía dưới thôi
"use strict";
x = {p1:10, p2:20};      // This will cause an error
delete x;                // This will cause an error
xem thêm 


var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var x6 = /()/;         // new regexp object
var x7 = function(){}; // new function object

var x = "Hello";     // typeof x is a string
x = 5;               // changes typeof x to a number

== tự động convert
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false

//default nên so sánh
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }
}


var x = 0;
if (x = 0) // false nếu là số khác là true


sau switch (expression) {
	case 1:                               => là số
		// statements_1
		break;
	default:
		// statements_def
		break;
}

var x = "Hello \
World!";
sau if (true) {} else {} mà có dấu semicolon thì nó sẽ thục thi bất chấp đoạn code wor cuối nó

js tự động đóng ở cuối dòng
var
    power = 10;  nó sẽ hiểu

    if (typeof myObj !== "undefined" && myObj !== null)  có typeof nên ms ss như z
- sau vòng for thì i vẫn có giá trị

===========================cách SD ===============================
var obj;
obj = document.getElementById("demo");
obj.innerHTML = "Hello";

- tính len r bỏ vào for
- k load trang song song vs code js    defer="true"


===== EVENT ========================
onblur	onclick	onerror	onfocus
onkeydown	onkeypress	onkeyup	onmouseover
onload	onmouseup	onmousedown	onsubmit

json 
{
"employees":[
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}

//chuyển str thành obj json
var obj = JSON.parse(text);


===========================================================================================
vd form: k để trống la cách này hay SD required
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}


<form name="myForm" action="/action_page.php"
onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">


- kiểm tra tính hợp lệ của 1 số

==== Constraint Validation CSS Pseudo Selectors
Selector	Description
:disabled	Selects input elements with the "disabled" attribute specified
:invalid	Selects input elements with invalid values
:optional	Selects input elements with no "required" attribute specified
:required	Selects input elements with the "required" attribute specified
:valid

hay có thể SD các thuộc tính của thẻ unput trong html

if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }

document.getElementById("id1").validity.rangeOverflow

====================================OBJECT ==============================================
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

var x = person;
x.age = 10;           // This will change both x.age and person.age: 2 cái là 1


thêm thuộc tính mới : person.nationality = "English";
thêm hàm mới
person.name = function() {
    return this.firstName + " " + this.lastName;
};
xoa thuộc tính
delete person.age;   // or delete person["age"]; 

Note that this is not a variable. It is a keyword. You cannot change the value of this.

constructor 
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

thêm Person.prototype.nationality = "English";


============================================Hàm ===============================================
hàm k có tên 
var x = function (a, b) {return a * b};

var myFunction = function (a, b) {return a * b};
var x = myFunction(4, 3);

document.getElementById("demo").innerHTML = x(4, 3);
nếu x k co gì cả thì ns sẽ in ra : function (a, b) {return a * b} // y nhưu gọi myFunction.toString();
The Function() Constructor nhưng k cần thiết
phần khai báo có thể đặt ở cuối như biến
- cách để hàm nó tự gọi
(function () {
    document.getElementById("demo").innerHTML = "Hello! I called myself";
})();
- cách lấy ds tham số ; arguments[i] là gtri tại i
function myFunction(a, b) {
    return arguments.length; // trả về 2
}

==tham số ==
Các định nghĩa hàm JavaScript không chỉ định các kiểu dữ liệu cho các tham số.
nếu thiếu tham số => phần thiếu nhận gtrij undefined
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }    
    return x * y;
}

- truyền tham trị
tham chiếu là objects

- window.myFunction(); cách gọi khác
===========================================================================================

function myFunction() {
    return this; //[object Window]
}
myObject.fullName();          // Will return [object Object] (the owner object)


 This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

// This creates a new object
var x = new myFunction("John", "Doe");
x.firstName;                             // Will return "John"

gọi phương thức của lớp khác person, myObject là 1 oobj  khác k có method
person.fullName.call(myObject);  // Will return "Mary Doe"
person.fullName.call(myObject);  // Will return "Mary Doe"

======== nhận tham số như 1 mảng : apply => rất tiện
Math.max.apply(null,[1,2,3]); // Will also return 3
Math.max(1,2,3);  // Will return 3 => call thì nhận tham số riêng biệt


lớp lồng nhau
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function myFunction(){
    document.getElementById("demo").innerHTML = add();
}


biến mà khai báo k xài var -> global





=========================================DOM==================================================
coi các method, attributes
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
vs thẻ input có lấy dk .value

var x = document.querySelectorAll("p.intro");

//form 
function myFunction() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>" + document.forms.length;
    }

       document.getElementById("demo").innerHTML = text;
}

The following HTML objects (and object collections) are also accessible:

document.anchors
document.body
document.documentElement
document.embeds
document.forms
document.head
document.images
document.links
document.scripts
document.title

//document.write()  viết ra ghi đề all khi trang load xong
<input type="button" value="Hide text" onclick="document.getElementById('p1').style.visibility='hidden'">
<input type="button" value="Show text" onclick="document.getElementById('p1').style.visibility='visible'">
HƯ động


<h1 onclick="changeText(this)">Click on this text!

function changeText(id) { 
    id.innerHTML = "Ooops!";
}

///cách 2
document.getElementById("myBtn").onclick = displayDate;
<body onload="checkCookies()">
//
document.getElementById("myBtn").addEventListener("click", displayDate);
document.getElementById("myDIV").removeEventListener("mousemove", myFunction);

// add réize
window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = Math.random();
});


===========================================================================================

parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling


lấy ra ND title
var myTitle = document.getElementById("demo").firstChild.nodeValue;
var myTitle = document.getElementById("demo").childNodes[0].nodeValue;

///===============///
document.body - The body of the document
document.documentElement - The full document //alert(document.documentElement.innerHTML);


nodeName: //cùng tên vs tag, text
nodeValue // value
nodeType 

<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>


//trong thẻ script
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);
//chèn trk
var child = document.getElementById("p1");
element.insertBefore(para, child);

//xóa => ít SD
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);

parent.replaceChild(para,child);

//
addEventListener(event, function, useCapture);
useCapture là true là  capturing the outer most element's event is handled first and then the inner: ngược lại là bubling
===========================================================================================

An HTMLCollection is NOT an array!
cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.

var myCollection = document.getElementsByTagName("p");
var i;
for (i = 0; i < myCollection.length; i++) {
    myCollection[i].style.backgroundColor = "red";
}

///CSSA NodeList is a collection of document nodes.


var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = myNodelist.length;