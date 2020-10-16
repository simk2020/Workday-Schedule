
var saveBtn = document.querySelector(".SaveBtn")
$(document).ready(function(){
    var time = moment().format('LLLL');
$("#currentDay").text(time);
});

var newDiv = $("<div>")

var timeArray = ["9am","10am","11am","Noon", "1pm","2pm","3pm", "4pm", "5pm"];
for (var i=0; i>timeArray.length[i]; i++);
console.log (timeArray);
$("#timeblocks").append(timeArray);
$(".container").append (timeArray);


// var save = document.querySelector("#saveBtn")
// ("SaveBtn").textContent = ""
// unction Save  

// saveBtn.addEventListener("click", function(event) {
//   event.preventDefault();

// save.addEventListener("click", function(event) {
//     event.preventDefault();
//     textArea.save = localStorage;
//     elements.forEach(function(element) {
//       element.textContent = "";
//     });
//   })
//     var text = document.querySelector("").value;
//       localStorage.setItem("text",save );

var table = document.querySelector (".table")
