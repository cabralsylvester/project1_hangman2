category = {
  soccer: "chelsea",
  dogBreed: "bulldog" ,
  tarrantino: "pulp fiction",
  mammal: "elephant",
  shoes: "jordans"
}

//errything
alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

alpha = alphabet.split("");

attemptsTried = 0;
tries = 5;
letterSelected = [];

var words = new Array("CHELSEA", "BULLDOG", "PULPFICTION", "ELEPHANT", "JORDANS");
var random = Math.floor((Math.random()*(words.length-1)));

// end errything


//Alphabet Loop
  for( var i = 0; i < alpha.length; i++) {
    $(".buttons").append("<button>"+alpha[i]+"<button>")
  }

  $("button").on('click', letter)
  function letter() {
    letterSelected = this.innerHTML;
    $(this).hide();
    $("#wrongAnswer").append(letterSelected + " ");
    gameOptions();
  }

  function gameOptions() {
      tries--;

      if (tries == 0) {
        answerKey();
      }
    }

hangMe = prompt("Type a 3-Letter Word").toUpperCase();

function answerKey() {
    $('.answer').html('<p>'+ hangMe +'</p>').text();
    alert(hangMe + " is the Answer!! Check Your Answer")
}


//
// $("main .letter1").on("click", function() {
//   $(".letter1").hide();
//   $("#wrongAnswer").append(" A");
//   console.log("You clicked letter A");
// })
//
// $("main .letter2").on("click", function() {
//   $(".letter2").hide();
//   $("#wrongAnswer").append(" B");
//   console.log("You clicked letter B");
// })
//
//
// $("main .letter3").on("click", function() {
//   $(".letter3").hide();
//   $("#wrongAnswer").append(" C");
//   console.log("You clicked letter C");
// })
//
// $("main .letter4").on("click", function() {
//   $(".letter4").hide();
//   $("#wrongAnswer").append(" D");
//   console.log("You clicked letter D");
// })
//
// $("main .letter5").on("click", function() {
//   $(".letter5").hide();
//   $("#wrongAnswer").append(" E");
//   console.log("You clicked letter E");
// })
//
// $("main .letter6").on("click", function() {
//   $(".letter6").hide();
//   $("#wrongAnswer").append(" F");
//   console.log("You clicked letter F");
// })
//
// $("main .letter7").on("click", function() {
//   $(".letter7").hide();
//   $("#wrongAnswer").append(" G");
//   console.log("You clicked letter G");
// })
//
// $("main .letter8").on("click", function() {
//   $(".letter8").hide();
//   $("#wrongAnswer").append(" H");
//   console.log("You clicked letter H");
// })
//
// $("main .letter9").on("click", function() {
//   $(".letter9").hide();
//   $("#wrongAnswer").append(" I");
//   console.log("You clicked letter I");
// })
//
// $("main .letter10").on("click", function() {
//   $(".letter10").hide();
//   $("#wrongAnswer").append(" J");
//   console.log("You clicked letter J");
// })
//
// $("main .letter11").on("click", function() {
//   $(".letter11").hide();
//   $("#wrongAnswer").append(" K");
//   console.log("You clicked letter K");
// })
//
// $("main .letter12").on("click", function() {
//   $(".letter12").hide();
//   $("#wrongAnswer").append(" L");
//   console.log("You clicked letter L");
// })
//
// $("main .letter13").on("click", function() {
//   $(".letter13").hide();
//   $("#wrongAnswer").append(" M");
//   console.log("You clicked letter M");
// })
//
// $("main .letter14").on("click", function() {
//   $(".letter14").hide();
//   $("#wrongAnswer").append(" N");
//   console.log("You clicked letter N");
// })
//
// $("main .letter15").on("click", function() {
//   $(".letter15").hide();
//   $("#wrongAnswer").append(" O");
//   console.log("You clicked letter O");
// })
//
// $("main .letter16").on("click", function() {
//   $(".letter16").hide();
//   $("#wrongAnswer").append(" P");
//   console.log("You clicked letter P");
// })
//
// $("main .letter17").on("click", function() {
//   $(".letter17").hide();
//   $("#wrongAnswer").append(" Q");
//   console.log("You clicked letter Q");
// })
//
// $("main .letter18").on("click", function() {
//   $(".letter18").hide();
//   $("#wrongAnswer").append(" R");
//   console.log("You clicked letter R");
// })
//
// $("main .letter19").on("click", function() {
//   $(".letter19").hide();
//   $("#wrongAnswer").append(" S");
//   console.log("You clicked letter S");
// })
//
// $("main .letter20").on("click", function() {
//   $(".letter20").hide();
//   $("#wrongAnswer").append(" T");
//   console.log("You clicked letter T");
// })
//
// $("main .letter21").on("click", function() {
//   $(".letter21").hide();
//   $("#wrongAnswer").append(" U");
//   console.log("You clicked letter U");
// })
//
// $("main .letter22").on("click", function() {
//   $(".letter22").hide();
//   $("#wrongAnswer").append(" V");
//   console.log("You clicked letter V");
// })
//
// $("main .letter23").on("click", function() {
//   $(".letter23").hide();
//   $("#wrongAnswer").append(" W");
//   console.log("You clicked letter W");
// })
//
// $("main .letter24").on("click", function() {
//   $(".letter24").hide();
//   $("#wrongAnswer").append(" X");
//   console.log("You clicked letter X");
// })
//
// $("main .letter25").on("click", function() {
//   $(".letter25").hide();
//   $("#wrongAnswer").append(" Y");
//   console.log("You clicked letter Y");
// })
//
// $("main .letter26").on("click", function() {
//   $(".letter26").hide();
//   $("#wrongAnswer").append(" Z");
//   console.log("You clicked letter Z");
// })
