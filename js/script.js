function main(){
    $(".menu-button-text").click(function() {
        $(".menu-container").css("display","flex");
      });
 
 $('.content').load('strona-glowna.html .content');
     
    };
    window.onload=function(){
        main();
    };
