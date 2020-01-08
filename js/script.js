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



 $('.sg').click(function(){
  $(".menu-container").css("display","none");
   window.location.href='index.html';
   
 });
     





    };
    window.onload=function(){

      $(".menu-button-text").click(function() {
        $(".menu-container").removeClass("slider-menu-backwards");
        $(".menu-container").addClass("slider-menu-play");
      })



      $(".exit-button").click(function() {
        $(".menu-container").addClass("slider-menu-backwards");
        $(".menu-container").removeClass("slider-menu-play");
      })

        main();
    };
