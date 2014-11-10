$(document).ready(function(){
    $("div").fadeIn("slow");
    $("div").fadeTo("fast",0.8);
    $("img").fadeTo("fast",0.8);
    $("p").fadeTo("fast",0.8);
    $("#cuadro").mouseenter(function() {
        $("#cuadro").fadeTo("fast",1);
        });
    $("#cuadro").mouseleave(function(){
        $("#cuadro").fadeTo("fast",0.5)
        
        })
    $("#cuadro2").mouseenter(function() {
    $("#cuadro2").fadeTo("fast",1);
        });
    $("#cuadro2").mouseleave(function(){
        $("#cuadro2").fadeTo("fast",0.5)
        
        })
    $("#cuadro3").mouseenter(function() {
    $("#cuadro3").fadeTo("fast",1);
        });
    $("#cuadro3").mouseleave(function(){
        $("#cuadro3").fadeTo("fast",0.5)
        
        })
    $("#cuadro4").mouseenter(function() {
    $("#cuadro4").fadeTo("fast",1);
        });
    $("#cuadro4").mouseleave(function(){
        $("#cuadro4").fadeTo("fast",0.5)
        
        })
    $("#cuadro5").mouseenter(function() {
    $("#cuadro5").fadeTo("fast",1);
        });
    $("#cuadro5").mouseleave(function(){
        $("#cuadro5").fadeTo("fast",0.5)
        
        })
    $("#cuadro6").mouseenter(function() {
    $("#cuadro6").fadeTo("fast",1);
        });
    $("#cuadro6").mouseleave(function(){
        $("#cuadro6").fadeTo("fast",0.5)
        
        })
    $("#cuadro7").mouseenter(function() {
    $("#cuadro7").fadeTo("fast",1);
        });
    $("#cuadro7").mouseleave(function(){
        $("#cuadro7").fadeTo("fast",0.5)
        
        })

    $("img").mouseenter(function() {
    $("img").fadeTo("fast",1);
        });
    $("img").mouseleave(function(){
        $("img").fadeTo("fast",0.5)
        
        })

   $('#name').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('#name').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
  $("#name").click(function(){
window.open("https://www.facebook.com/alf.uchiha.note.kira")
  });
 $('#cuadro').mouseenter(function() {
    $("#cuadro").addClass('one');

    });
     $("#cuadro").mouseleave(function(){
        $("#cuadro").toggleClass("one")
        
        })
 $('#cuadro2').mouseenter(function() {
    $("#cuadro2").addClass('one');

    });
     $("#cuadro2").mouseleave(function(){
        $("#cuadro2").toggleClass("one")
        
        })
 $('#cuadro3').mouseenter(function() {
    $("#cuadro3").addClass('one');

    });
     $("#cuadro3").mouseleave(function(){
        $("#cuadro3").toggleClass("one")
        
        })
 $('#cuadro4').mouseenter(function() {
    $("#cuadro4").addClass('one');

    });
     $("#cuadro4").mouseleave(function(){
        $("#cuadro4").toggleClass("one")
        
        })
 $('#cuadro5').mouseenter(function() {
    $("#cuadro5").addClass('one');

    });
     $("#cuadro5").mouseleave(function(){
        $("#cuadro5").toggleClass("one")
        
        })
 $('#cuadro6').mouseenter(function() {
    $("#cuadro6").addClass('one');

    });
     $("#cuadro6").mouseleave(function(){
        $("#cuadro6").toggleClass("one")
        
        })
 $('.cuadro7').mouseenter(function() {
    $(".cuadro7").addClass('one');

    });
     $(".cuadro7").mouseleave(function(){
        $(".cuadro7").toggleClass("one")
        
        })

      $('.bodytwo').mouseenter(function() {
       $(this).animate({
           height: '+=70px'
       });
   });
   $('.bodytwo').mouseleave(function() {
       $(this).animate({
           height: '-=100px'
       }); 
   });


    });
