
$(document).ready(function(){
    dateTime();
    getTemperature();
    setInterval(function(){ 
        quotes(); }, 30000);
});
function dateTime(){
    
var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
currentdate = new Date() ;
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear();
var hour = currentdate.getHours();
var min = (currentdate.getMinutes() < 10? '0' : '') + currentdate.getMinutes();
var seconds = currentdate.getSeconds();
var str="";
str="<p class='dateTime'>"+n+", "+datetime+"</p>";
str=str+'<hr class="line">';
str=str+"<h1>"+hour+":"+min+"</h1>";

$(".Date").append(str);
}

function getTemperature(){
    var str='';
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/find?q=New%20York&units=metric&appid=5aa446b4141bf14828005a39c50e8c49',
       
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        data:{
            format:"json"
        },
        success:function(response){
            console.log(response);
           var temperature = response.list[0].main.temp;
           var minTemperature = response.list[0].main.temp_min;
           var maxTemperature = response.list[0].main.temp_max;
           var verdict = response.list[0].weather[0].description;
          str=str+"<div><p>It's: <span class='mainTemperature'> "+temperature+"</span> &#8451;</div>";
          str=str+"<div><p>Min/Max: <span class='otherTemperature'> "+minTemperature+"</span> &#8451; /<span class='otherTemperature'>"+maxTemperature+" &#8451;</span></div>";
          str=str+"<div><p class='Verdict'> "+verdict+"</div>";
          $(".temperature").append(str);
          
        }
});

}

function quotes(){
    $(".Quote").empty();
    var str ='';
    var quotesArray =[
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "To give anything less than your best is to sacrifice the gift",
        "Don't ignore your own potential",
        "In the middle of difficulty, lies opportunity",
        "Stay patient and trust your journey.",
        "Your speed doesn't matter, forward is forward.",
        "Invest in yourself.",
        "Count your blessings, not your problems",
        "Your only limit is you.",
        "Tough situations build strong people"
    ];
    var randomNumber = Math.floor(Math.random() * 10);
    str=str+'<i>"'+quotesArray[randomNumber]+'"</i>';
    $(".Quote").append(str);
    
}