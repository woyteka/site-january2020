function main(){
    

      $(".exit-button").mouseover(function() {
        $(".exit-one").css("background-color","#d74814");
        $(".exit-two").css("background-color","#d74814");
      });

      $(".exit-button").mouseout(function() {
        $(".exit-one").css("background-color","#f37446");
        $(".exit-two").css("background-color","#f37446");
      });
     

 
 $('.content').load('strona-glowna.html .content');

/*  action button menu */

/*  strona-glowna */

 $('.sg').click(function(){
  $(".menu-container").addClass("slider-menu-backwards");
  $('.content').load('strona-glowna.html .content');
   
   
 });


 /*  info */
     
 $('.info').click(function(){
  $(".menu-container").addClass("slider-menu-backwards");
  $('.content').load('info.html .content');
   
   
 });


  /*  portfolio */
     
  $('.portfolio').click(function(){
    $(".menu-container").addClass("slider-menu-backwards");
    $('.content').load('portfolio.html .content');
     
     
   });

    /*  kontakt */
     
  $('.kontakt').click(function(){
    $(".menu-container").addClass("slider-menu-backwards");
    $('.content').load('kontakt.html .content');
     
     
   });




    };
    window.onload=function(){
      
      $(".menu-button-text").click(function() {
        
        $(".menu-container").removeClass("slider-menu-backwards");
        $(".menu-container").addClass("slider-menu-play");
        $(".sg").addClass("sg-anim");
        $(".info").addClass("info-anim");
        $(".portfolio").addClass("portfolio-anim");
        $(".kontakt").addClass("kontakt-anim");
        $(".exit-one").addClass("exit-one-anim");
        $(".exit-two").addClass("exit-two-anim");
      })



      $(".exit-button").click(function() {
        
        $(".sg").removeClass("sg-anim");
        $(".info").removeClass("info-anim");
        $(".portfolio").removeClass("portfolio-anim");
        $(".kontakt").removeClass("kontakt-anim");
        $(".menu-container").addClass("slider-menu-backwards");
        $(".menu-container").removeClass("slider-menu-play");
        $(".exit-one").removeClass("exit-one-anim");
        $(".exit-two").removeClass("exit-two-anim");
        
      })

        main();
    };
