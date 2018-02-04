$(document).ready(function(){
    
    
    /*For the sticky navegation*/
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    /*Scroll on buttons*/
   $('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);/*1000 milesegundos es un segundo, ire al top de section-plans con una velocidad de 1 segundo*/
       
   });
    
    $('.js--scroll-to-start').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
   });
    
    
    /*Navegation scroll*/
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /*Animation on scroll*/
  /*  
    $('.js--wp-1').wayponit(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn'); 
        
    }, {
        offset: '50%'
    });
    
    
    $('.js--wp-2').wayponit(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp'); 
        
    }, {
        offset: '50%'
    });
    
    
    $('.js--wp-3').wayponit(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn'); 
        
    }, {
        offset: '50%'
    });
    
    
    $('.js--wp-4').wayponit(function(direction) {
        $('.js--wp-1').addClass('animated pulse'); 
        
    }, {
        offset: '50%'
    });*/
    
    /* MOBILE NAVEGATION*/
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon =$('.js--nav-icon i')
        nav.slideToggle(1000);
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
});