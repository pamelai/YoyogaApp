var d=document, c=console.log, menu, ac, selec=null, plugin, body, mobile= 600;

ac=d.querySelector('nav>p');
menu=d.querySelector('#botones');
body=d.querySelector('body')

ac.onclick=function(){
   
    if(selec==null){
        
        selec=this;
        menu.style.height='calc(100vh - 100px)';
        ac.style.backgroundPosition='0 -36px';
        
    }else if(selec==this){

        menu.style.height='0';
        ac.style.backgroundPosition='0 0';
        selec=null;
    }
}

if(body.offsetWidth<1024){
    
    menu.onclick=function(){
        menu.style.height='0';
        ac.style.backgroundPosition='0 0';
        selec=null;
    }
}

$(document).ready(function(){
    $('.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 1160,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 1367,
              settings: {
                slidesToShow: 3,
                autoplaySpeed: 2000
              }
            }
            
        ]
  });
});

plugin = skrollr.init({
            forceHeight: false,
            render: function(data) {
                console.log(data.curTop);
            }
        });

$(window).resize(function(){
    
    redimensionar();
});

redimensionar();
function redimensionar(){
    var anchoVentana=$(window).width();
    
    if(anchoVentana<=mobile-17||screen.width<=mobile){
        
            skrollr.init().destroy();
    }else{
        var plugin=skrollr.init({
            forceHeight: false,
            render: function(data) {
                console.log(data.curTop);
            }
        });
    }
}