$(document).ready(function() {
 // put your code here


 // When a colored panel is clicked, all panels vanish
 // $(".theButton").click(function() {
 //   $(".theButton").siblings().hide()
 //  });



 // When a colored panel is clicked, just that panel disappears
 // $(".theButton").click(function() {
 //   $(this).hide()
 //  });



 // When a panel is clicked, all siblings fade to 10% opacity
 // $(".container").click(function() {
 //  $(this).siblings().fadeTo("slow", .2);
 // })

 // When reset is clicked, all panels revert to full opacity
 // $(".superButton").click(function() {
 //  $(".container").siblings().fadeTo("slow", 1);
 // })


 // When the mouse hovers over a panel, that panel turns black
 // $(".theButton").mouseover(function() {
 //  $(this).addClass("black");
 // });

 // When the mouse moves away, the panel reverts back to its previous colour
 // $(".theButton").mouseout(function() {
 //  $(this).removeClass("black");
 // });

  
 $(".theButton").click(function() {
var panelColor = $(this).css("background-color")
   $(".superButton").css("background-color", panelColor);
 })


 $(".theButton").click(function(){
    var col = $(this).css('background-color');
  $('.superButton').text( col);

   });


});
