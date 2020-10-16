
var saveBtn = document.querySelector(".SaveBtn")
$(document).ready(function(){
    var time = moment().format('LLLL');
$("#currentDay").text(time);
});

var tableArray = [
    {
        time: ["9am","10am","11am","Noon", "1pm","2pm","3pm", "4pm", "5pm"],
    },
    {
        text : "",
    },
    { 
        saveBtn : "",
    }];

for (var i=0; i>tableArray.length[i]; i++);
console.log (tableArray);
$("#timeblocks").append(tableArray);
$(".container").append (tableArray);

var save = ("<button>");
$("#save").append("");


$(".saveBtn").addEventListener("click", function(event) {
event.preventDefault();
textArea.save = localStorage;
console.log (textArea.save)
});
