/* search bar */

 	$(document).ready(function(){
 
 	var active = $(".active")
 	var search = $(".search-box")
       
       active.click(function(){
            search.toggle(); return false;
        });
            
			$(document).click(function() {
            	search.hide();
        });
        
            search.click(function(e) {
            e.stopPropagation();
		});     

});
    
/* resize menu */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
