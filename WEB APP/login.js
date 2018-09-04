function login(){

var fireemail=document.getElementById('email_field').value;
var firepwd=document.getElementById('password_field').value;

firebase.auth().signInWithEmailAndPassword(fireemail, firepwd).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert(errorMessage);
  // ...


});
var user = firebase.auth().currentUser;

if (user) {
  document.location.href="dashboard.html";
} else {
  // No user is signed in.
}

}
