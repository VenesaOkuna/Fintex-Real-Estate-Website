var names = document.getElementById("name");
var email = document.getElementById("email");
var number = document.getElementById("number");
var dates = document.getElementById("dates")

function formInput(){
if(names.value == ''){
    alert("Please enter your name")
}else{
    document.getElementById("textx").innerHTML=(`Thank you ${names.value} for reaching out to us. We will contact you on the ${dates.value} for your tour on the house`);
}
}
function checkDate() {
    var selectedText = document.getElementById("dates").value;
    var selectedDate = new Date(selectedText);
    var now = new Date();
    if (selectedDate < now) {
     alert("Cannot enter current or past dates");
    }
  }