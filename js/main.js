{
  /* <reference types="../@types/jquery" />; */
}
let x = $(".home-nav").innerWidth();
// console.log(x);
$("#openBtn").click(function () {
  if ($(".home-nav").innerWidth() == 0) {
    $(".home-nav").animate({ width: "250px" }, 50),
      $("#openBtn").animate({ left: "250px" }, 50);
  } else {
    $(".home-nav").animate({ width: "0px" }, 50),
      $("#openBtn").animate({ left: "0px" }, 50);
  }
});

$("#closeBtn").click(function () {
  $(".home-nav").animate({ width: "0px" }, 50),
    $("#openBtn").animate({ left: "0px" }, 50);
});


//  section transition 
$(".home-nav li a").click(function(){
    
  let sectionId= $(this).attr("href");
  
  let positionOfSection = $(sectionId).offset().top;
  
  $("html , body").animate({scrollTop:positionOfSection},2000);
  
})

// !=================================== Slide Div Function  ============================================>


$('#slidDiv .toggle').click(function(){
  $('.inner').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
  console.log($('.inner').not($(this).next()));
});


// !=================================== Counter section function  ============================================>


window.onload = function() {
   
  countDownToDate("10 october 2024 10:00:00");
}

function countDownToDate(date) {

  let futureDate = new Date(date);
  futureDate = (futureDate.getTime()/1000);
  // console.log(futureDate);
  let now = new Date();
  now = (now.getTime()/1000);
  // console.log(now);

  timeDifference = (futureDate- now);
      
 let days = Math.floor( timeDifference / (24*60*60));
 let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
 let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
 let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${ mins } m`);
  $('.seconds').html(`${ secs} s`)


  setInterval(function() { 
     countDownToDate(date); 
    }, 1000);
}

// let date1 = new Date();
// let date2 = new Date("1 Jan  2024 9:56:00");
// date1 = (date1.getTime()/1000);
// date2 = (date2.getTime()/1000);

//  defrence = date1 - date2 ;

// let Days = Math.floor(defrence /(24*60*60))
// console.log(Days);


// !=================================== contact textarea condition  ============================================>


let maxLengthCharacter = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let numberOfRemaining = maxLengthCharacter - length;
  if(numberOfRemaining<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(numberOfRemaining);
        }
});