var today = new Date();
var div = document.querySelector(".today");
var month = today.getMonth();
const monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(monthlist[month]);
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(daylist[day]);
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var date =today.getDate();
console.log(monthlist[month],",",daylist[day],",",hour,":" ,minute, ":",second);
// h.textContent = `${ date + " " + daylist[day] + "  " + monthlist[month] + "  " + hour + ":" + minute + ":" + second}`

var h = document.createElement("h2");
setInterval(function(){
    var today = new Date();
    // var ht = document.getElementsByTagName("h2");
    h.textContent = `${ date + " " + daylist[day] + "  " + monthlist[month] + "  " + today.getHours()  + ":" +  today.getMinutes() + ":" + today.getSeconds()}`
    console.log(h)
    div.appendChild(h)
    // console.log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
},1000)