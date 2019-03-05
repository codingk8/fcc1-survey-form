/* Made with code and care in Paris by Codingk8 - 2019 - Twitter: @codingk8 

Project made for the freeCodeCamp curriculum, "Responsive Web Design" Certification
Project #2 - Survey form */


/* Makes the "back to top" arrow appear after scroll and disappear when back up => */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    document.getElementById("btticon").style.display = "block";
  } else if (document.body.scrollBottom > 125 || document.documentElement.scrollBottom > 125) {
    document.getElementById("btticon").style.display = "none";
  } else {
    document.getElementById("btticon").style.display = "none";
  }
}

/* jQuery Bounce effect on the "back to top" arrow => */

$(document).ready(function(){
    $( "#btticon" ).on("mouseenter", function() {
        $(this).effect( "bounce", { times: 3 }, "slow" );
    })
})

/* End of js file :-) */