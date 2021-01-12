const dbRef = firebase.database().ref();
const websiteRef = dbRef.child('website');
websiteRef.on("child_added", function(snapshot, prevChildKey) {
var newPost = snapshot.val();
});

function contactFunction() {
  alert ("You have submitted your contact information, you will have a repsonse within 1-7 business days.")

var first = document.getElementById("firstname").value;
var last = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var phoneNumber = document.getElementById("phoneNumber").value;
var Comments = document.getElementById("Comments").value;
var Site_Design = document.getElementById("Site_Design").checked;
var Links = document.getElementById("Links").checked;
var Ease_of_use = document.getElementById("Ease_of_use").checked;
var Images = document.getElementById("Images").checked;
var Source_code = document.getElementById("Source_code").checked;
var How_did_you_get_to_our_site = document.querySelector('input[name="howtosite"]:checked').value;
var Rating = document.getElementById("Rating").value;
websiteRef.push().set({
 first: first,
 last: last,
 email: email,
 phoneNumber: phoneNumber,
 Comments: Comments,
 Site_Design: Site_Design,
 Links: Links,
 Ease_of_use: Ease_of_use, 
 Images: Images, 
 Source_code: Source_code,
 How_did_you_get_to_our_site: How_did_you_get_to_our_site,
 Rating: Rating
});
}

