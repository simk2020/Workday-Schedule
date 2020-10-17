
var saveBtn = document.querySelector(".SaveBtn")
$(document).ready(function(){
    var time = moment().format('LLLL');
$("#currentDay").text(time);
});

$(document).ready(function(){
$('.saveBtn').on ('click',function (){
var textAreaContent = $(this).siblings('textarea').val();
console.log (textAreaContent);
});
});

// var timeArray = ["9am","10am","11am","Noon", "1pm","2pm","3pm", "4pm", "5pm"];
// for (var i=0; i>timeArray.length[i]; i++);
// console.log (timeArray);
// $("#timeblocks").append(timeArray);
// $(".container").append (timeArray);

var save = ("<button>");
$("#save").append("");

// $save.addEventListener("click", function(event) {
// event.preventDefault();


var text = localStorage.getItem(".maintext" );
console.log(localStorage);
console.log (text);
