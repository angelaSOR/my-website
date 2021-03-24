04
//dom code
document.addEventListener('DOMContentLoaded', function() {
  // create a var for the button
  var button = document.getElementById("buttonID");

   //add click listener to define action when clicked
  button.addEventListener('click', function(){
    event.preventDefault()
    // extract text from contact form
    var name = document.getElementById("nameID").value;
    var email = document.getElementById("emailID").value;
    // create var to reference the message paragraph
    var messageBox = document.getElementById("messageID");
    var nameText = document.getElementById("nameID");
    var emailText = document.getElementById("emailID");


    // if content not null then display 'submitted' message
    //var name = document.forms["form"]["nameID"].value;
    //if (x == "") {
      //alert("Name must be filled out");
      //return false;
    //}

 if (name == null || name == '' ||email == null || email == ''){
  messageBox.innerText = 'ERROR! Missing contact information';
  messageBox.style.color = 'red';

 }
 // else - error message
  else {
    messageBox.innerText = 'SUBMITTED';
    messageBox.style.color = '#008000';
    setTimeout(
      function(){ 
     
      location.reload();
      
    }, 1500);
  }
 
  });
  
});