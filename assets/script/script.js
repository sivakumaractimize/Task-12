$(document).ready(function() {
   
    // Function to change the main image
    function changeImage(imageUrl) {
        $('#mainImage').attr('src', imageUrl);

    
        
    // magnifier start    
    $('.parent').css({width:"100%"}); 

    $('#mainImage').parent().zoom({ 
        magnify: 4, 
        target: $('.contain').get(0) 
    }); 
    }

    $('#button1').click(function() {
       
        changeImage('./assets/images/property-06.jpg');
    });

    $('#button2').click(function() {
        changeImage('./assets/images/property-03.jpg');
    });

    $('#button3').click(function() {
        changeImage('./assets/images/property-04.jpg');
    });




    // light box

    



        // When the image is clicked
        $('#img1').click(function() {
        
            $('.lightbox-image').attr('src', $(this).attr('src'));
            $('.lightbox').fadeIn();
        });
        $('#img2').click(function() {
           
            $('.lightbox-image').attr('src', $(this).attr('src'));
               $('.lightbox').fadeIn();
        });
        $('#img3').click(function() {
          
            $('.lightbox-image').attr('src', $(this).attr('src'));
            // Display the lightbox
            $('.lightbox').fadeIn();
        });

        // Close lightbox  button is clicked
        $('.close-lightbox-btn').click(function() {
            $('.lightbox').fadeOut();
        });

       //type a head function







      



});

