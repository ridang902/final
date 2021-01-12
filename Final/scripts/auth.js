function signup(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(user)   {
    // user signed up success
      if (user) {
      document.getElementById("user_div").style.display = "block";
document.getElementById("login_div").style.display = "none";
      var user = firebase.auth().currentUser;
      if(user != null){
        var email_id = user.email;
 	 document.getElementById("user_para").innerHTML = "New User Created : " + email_id;
  	alert ("Thank you for signing up to Dang University!")
      }
    }
 }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
    // ...  
});

const dbRef = firebase.database().ref();
const websiteRef = dbRef.child('website');
websiteRef.on("child_added", function(snapshot, prevChildKey) {
var newPost = snapshot.val();
});

var Email = document.getElementById("email_field").value;
var Password = document.getElementById("password_field").value;
websiteRef.push().set({
 Email: Email,
 Password: Password,
});
}


function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(user) {    // user signed in
      if (user) {
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      var user = firebase.auth().currentUser;
      if(user != null){
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;      }
    }
 }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
    // ...  
});
}

function logout(){
  firebase.auth().signOut();
  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "block";
}
