var button = document.getElementsByTagName('button')[0];
var button2 = document.getElementsByTagName('button')[1];
button.addEventListener('click', function(){
    console.log('button clicked');
    console.warn('button clicked');
    var cont1 = document.querySelector('.cont1');
    cont1.innerHTML = '<h1>Hello World</h1>';
});
button2.addEventListener('click', function(){
    console.log('button2 clicked');
    var fontsize = String(parseInt(Math.random()*100));
    console.log(fontsize);
    document.getElementsByTagName('p')[0].style.fontSize = fontsize+"px" ;
    document.getElementsByTagName('p')[0].innerHTML = "change css properties size ="+fontsize;
    console.error("Dont do it in production");
    
    
    
});


// Datatypes 

var a = 10;   // globle variable
let b = 20;   // block scope/ local variable
// var b = "10";
var u;  // undefined data type
var c = {        // object data type like dictionary in python
    name: "John",
    age: 30
};
var dates = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

var  d = new Date();

// console.log(document.location);   // returns the location of the page





//   -------------------------------   Clock ---------------------------------

const myInterval = setInterval(myTimer, 500);

function myTimer() {
  const date = new Date();

  document.getElementsByTagName('p')[2].innerHTML = date;
//   document.getElementsByTagName('p')[2].innerHTML = date.toLocaleTimeString();
day = date.getDay();
dat = date.getDate();
month = date.getMonth();
year = date.getFullYear();
timezone = date.getTimezoneOffset();
time = date.toLocaleTimeString();

  document.getElementsByTagName('p')[1].innerHTML = "Today is "+dates[day]+" date : "+dat+"-"+month+"-"+year+" & timeone is "+timezone +" & time is "+time;

}

//   ---------------------------------  Typing  ---------------------------------

var effectp = document.getElementsByClassName('effectp');
var text = setInterval(addtext, 100);

// var txt = document.getElementById("texteffect").innerHTML;
var txt = document.getElementById("texteffectmain").innerHTML;

txt = txt + "       ";

var i = 0;

console.log(txt);

// function addtext(){
    // var p =  document.getElementById("texteffectchild");
    // var p = document.getElementsByTagName('p')[1];
    var p  =  document.getElementsByClassName('xcvb')[0];
 
 
//     if(i>txt.length-1){
//         clearInterval(text);
//         text = setInterval(addtext, 200);
//         i=0;
//         p.innerHTML = txt[0];
//     }
//     else{
//         p.innerHTML += txt[i];
//     }
//     i++;
// }




//  ----------------------------------------------------------------------------------------------------


//   Event Listener

button23.addEventListener("hover",function(){
    console.log("hover");
})
