$(document).ready(main);
var contador =1;
function main(){
    $('.barra_menu').click(function(){
       //$('nav').toggle();
        if(contador==1){
            $('nav').animate({
                left:'0'
            });
            contador=0;
        } else {
            $('nav').animate({
                left:'-100%'
            });
            contador=1;
        }
        
    });
};
/*este archivo js lo he creado siguiendo un video de FalconMaster,
 con el conocimiento de java iri en mi curso anterior entiendo el funcionanmiento del mismo 
 independientemente de que algunos comandos son nuevos */