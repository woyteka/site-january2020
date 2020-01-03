function main(){
    $(".menu-button-text").click(function() {
        $(".menu-container").css("display","flex");
      });

      $(".exit-button").mouseover(function() {
        $(".exit-one").css("background-color","#d74814");
        $(".exit-two").css("background-color","#d74814");
      });

      $(".exit-button").mouseout(function() {
        $(".exit-one").css("background-color","#f37446");
        $(".exit-two").css("background-color","#f37446");
      });
      $(".exit-button").click(function() {
        $(".menu-container").css("display","none");
      });


 
 $('.content').load('strona-glowna.html .content');
     





    };
    window.onload=function(){
        main();
    };
