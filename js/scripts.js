$(document).ready(function() {

  var lionButton = $("button#animal1")
  var elephantButton = $("button#animal2")
  var giraffeButton = $("button#animal3")

  lionButton.click(function(event) {
    $('#lion').show();
  event.preventDefault();


    elephantButton.click(function(event) {
      $('#elephant').show();
  event.preventDefault();


      giraffeButton.click(function(event) {
        $('#giraffe').show();



  event.preventDefault();
      })

    });
  });
});




// $("button") .show(".animal1");
// $("#animal1").show();
// $("#animal2").show();
// $("#animal3").show();

// if
// $ ("button")
//
// // ("button.animal1") {
  //   // $("#lion").show()
  // }
  // else if ("button.animal2" === true) {
    //
    //   $("#elephant").show();
    // }
    // else if ("button.animal3" === true) {
      //   $("girrafe").show();
      //   }
