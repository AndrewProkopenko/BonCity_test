
  ;(function(){
    let trendingCarousel = document.querySelector('#popular-carousel');
    console.log (window.innerWidth );
    function resizeHandler() { 
        if(window.innerWidth < 992 ) { 
            trendingCarousel.classList.add('owl-carousel');
           
           
                $("#popular-carousel").owlCarousel({        
                    autoplay: true, 
                    autoplayTimeout: 4000,
                    autoplaySpeed: 2000,
                    autoplayHoverPause: true,
                    loop: true,
                    items: 1,
                    margin: 0,
                    responsive: { 
                      
                        600: { 
                            items: 2,
                            margin: 15,
                        },
                        900: { 
                            items: 3,
                            margin: 15,
                        }
                        
                    }
                });
             
        } else { 
            trendingCarousel.classList.remove('owl-carousel');
        }
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('load', resizeHandler);
})();


;(function() {
   
    
    let output = document.getElementById("output");
    let buttonCheck = document.getElementById("btn-check"); 
    
    buttonCheck.addEventListener('click', countCash)

    function countCash() { 
        let input = document.getElementById("input").value;
        input = parseInt(input);
        let outputValue = input / 100;
        if ( isFinite(input) && input >= 0 ) { output.innerText =  `${outputValue}` ; }    
        else { 
            output.innerText =  (" :( ") ;
            
        }

       
    }

})();
  