function main(){
    $(".menu-button-text").click(function() {
        alert( "tutaj będzie menu" );
      });
 
 $('.content').load('strona-glowna.html .content');
     
    };
    window.onload=function(){
        main();
    };
