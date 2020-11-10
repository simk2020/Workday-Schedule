const text = document.querySelector ("text")
var past;
var present;
var future;
var timeArray = ["9am","10am","11am","12pm", "1pm","2pm","3pm", "4pm", "5pm"];

var saveBtn = document.querySelector(".SaveBtn")
$(document).ready(function(){
    var time = moment().format('LLLL');
    console.log(moment().format('LLLL'));
$("#currentDay").text(time); //this is appending the text area of the 
});

$(document).ready(function(){
$('.saveBtn').on ('click',function (){
var textAreaContent = $(this).siblings('textarea').val();
console.log (textAreaContent);
});
});



for (var i=0; i>timeArray.length[i]; i++);
console.log (timeArray);
console.log (localStorage);


// localStorage.setItem("storeMyevent","timeArray[i]");
// localStorage.getItem("storeMyevent");
// // color coding based on past present and future 
// if (time > time array [i])
// $(future).attr
// if (time < timeArray[i])
// $(past).attr
// else // time === time array [i]
// $(present).attr

// saving the text in the timeslots
var saveText = function saveText (event) {
    
}
// making sure its saved in local storage.
// once refresh, the text entered doesnt change.

// localStorage.setItem("text")
