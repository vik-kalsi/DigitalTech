//Mobile Menu
let menuButtonSmall = $("#menuButtonSmall");
let menuButtonMedium = $("#menuButtonMedium");
let mobileMenu = $("#mobileMenu");

menuButtonSmall.click(function (){
    mobileMenu.toggle();
})

menuButtonMedium.click(function (){
    mobileMenu.toggle();
})

window.addEventListener("resize", function() {
    if (window.innerWidth > 1024 ) {
        mobileMenu.hide();
    }
  })




//Scroll to Sections
$("#HowItWorksBtn").click(function(){
    $('html, body').scrollTop($("#HowItWorksSection").offset().top);
});

$("#AdvantagesBtn").click(function(){
    $('html, body').scrollTop($("#AdvantagesSection").offset().top);
});

$("#FAQBtn").click(function(){
    $('html, body').scrollTop($("#FAQSection").offset().top);
});



$("#HowItWorksMenuBtn").click(function(){
    $('html, body').scrollTop($("#HowItWorksSection").offset().top);
    mobileMenu.hide();
});

$("#AdvantagesMenuBtn").click(function(){
    $('html, body').scrollTop($("#AdvantagesSection").offset().top);
    mobileMenu.hide();
});

$("#FAQMenuBtn").click(function(){
    $('html, body').scrollTop($("#FAQSection").offset().top);
    mobileMenu.hide();
});



//FAQ Section
$("#ExpandToggle1").click(function(){
    $("#FAQAnswer1").toggle();
  });

  $("#ExpandToggle2").click(function(){
    $("#FAQAnswer2").toggle();
  });

  $("#ExpandToggle3").click(function(){
    $("#FAQAnswer3").toggle();
  });

  $("#ExpandToggle4").click(function(){
    $("#FAQAnswer4").toggle();
  });

  $("#ExpandToggle5").click(function(){
    $("#FAQAnswer5").toggle();
  });