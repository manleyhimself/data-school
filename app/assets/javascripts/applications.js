//$("#"+($('.checker')[0].id)).is(':checked');
//$("#"+($('.select-form')[0].id)).is(':disabled');


$(document).ready(function() {

    $("#viv-bio").show(); 

    $("#scott-bio").hide(); 

    $("#man-bio").hide(); 

   
    $('#viv-image').click(function(){

        $("#scott-bio").hide();

        $("#man-bio").hide(); 

        $("#viv-bio").show(); 


    });
});

$(document).ready(function() {

   
    $('#scott-image').click(function(){

        $("#viv-bio").hide(); 

        $("#man-bio").hide(); 

        $("#scott-bio").show(); 

    });
});

$(document).ready(function() {

   
    $('#man-image').click(function(){

        $("#viv-bio").hide(); 

        $("#scott-bio").hide(); 

        $("#man-bio").show(); 


    });
});

$(document).ready(function() {

    $("#r-info").show(); 

    $('.curriculum').each(function(index,value) { 
    
        if (!(value.id === "r-info")) $('#' + value.id).hide();


    })

});

$(document).ready(function() {


    $('#r-header').click(function(){

        $("#r-info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === "r-info")) $('#' + value.id).hide();


         })
        $('html, body').animate({
            scrollTop: $("#r-info").offset().top
        }, 2000);

    });

});

// $(document).ready(function() {


//     $('#python-header').click(function(){
        
//         $("#python-info").show(); 

//          $('.curriculum').each(function(index,value) { 
    
//              if (!(value.id === "python-info")) $('#' + value.id).hide();


//          })

//     });

// });

$(document).ready(function() {


    $('#D3-begin-mar-header').click(function(){
        
        $("#D3-begin-mar-info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === "D3-begin-mar-info")) $('#' + value.id).hide();


         })
          $('html, body').animate({
            scrollTop: $("#D3-begin-mar-info").offset().top
        }, 2000);
    });

});

$(document).ready(function() {


    $('#Hadoop-begin-apr-header').click(function(){
        
        $("#Hadoop-begin-apr-info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === "Hadoop-begin-apr-info")) $('#' + value.id).hide();


         })
          $('html, body').animate({
            scrollTop: $("#Hadoop-begin-apr-info").offset().top
        }, 2000);

    });

});

$(document).ready(function() {


    $('#r-inter-may-header').click(function(){
        
        $("#r-inter-may-info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === "r-inter-may-info")) $('#' + value.id).hide();


         })
        $('html, body').animate({
            scrollTop: $("#r-inter-may-info").offset().top
        }, 2000);

    });

});
$(document).ready(function() {


    $('#Kaggle-adv-apr-header').click(function(){
        
        $("#Kaggle-adv-apr-info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === "Kaggle-adv-apr-info")) $('#' + value.id).hide();


         })
          $('html, body').animate({
            scrollTop: $("#Kaggle-adv-apr-info").offset().top
        }, 2000);
    });

});
$(document).ready(function() {


    $('#processing-begin-june-header').click(function(){
        
        $("#processing-begin-june-info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === "processing-begin-june-info")) $('#' + value.id).hide();


         })
          $('html, body').animate({
            scrollTop: $("#processing-begin-june-info").offset().top
        }, 2000);
    });

});
$(document).ready(function() {


    $('#Tableau-begin-may-header').click(function(){
        
        $("#Tableau-begin-may-info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === "Tableau-begin-may-info")) $('#' + value.id).hide();


         })

          $('html, body').animate({
            scrollTop: $("#Tableau-begin-may-info").offset().top
        }, 2000);

    });

});
$(document).ready(function() {
    $("#form-button-div").click(function(event){
        if ($('.form_button').is(':disabled')) $('html, body').animate({scrollTop: '+=270px'}, 800);
    });
});



$(document).ready(function () {

    $('.app_course_form').validate({
        rules: {
            "applicant[email]": {
                required: true,
                email: true
            },
            "applicant[name]": {
                required: true,
                minlength: 3
            },
            "applicant[phone_number]": {
                required: true,
                phoneUS: true
            },
            "course_id[r-class]": {
                required: function(element) {
                    var checkArray = $('.checker');
                    checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
                      return ($("#"+checkBox.id).is(':checked'));
                    });
                    return !(checkArray.length > 0)
                }
            },
            "course_id[r-begin-mar]": {
                required: function(element) {
                    var checkArray = $('.checker');
                    checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
                      return ($("#"+checkBox.id).is(':checked'));
                    });
                    return !(checkArray.length > 0)
                }
            },
            "course_id[D3-begin-mar-class]": {
                required: function(element) {
                    var checkArray = $('.checker');
                    checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
                      return ($("#"+checkBox.id).is(':checked'));
                    });
                    return !(checkArray.length > 0)
                }
            },
            "course_id[Hadoop-begin-apr]": {
                required: function(element) {
                    var checkArray = $('.checker');
                    checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
                      return ($("#"+checkBox.id).is(':checked'));
                    });
                    return !(checkArray.length > 0)
                }
            },
            "course_id[Kaggle-adv-apr]": {
                required: function(element) {
                    var checkArray = $('.checker');
                    checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
                      return ($("#"+checkBox.id).is(':checked'));
                    });
                    return !(checkArray.length > 0)
                }
            },
            "course_id[Tableau-begin-may]": {
                required: function(element) {
                    var checkArray = $('.checker');
                    checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
                      return ($("#"+checkBox.id).is(':checked'));
                    });
                    return !(checkArray.length > 0)
                }
            },
            "course_id[r-inter-may-class]": {
                required: function(element) {
                    var checkArray = $('.checker');
                    checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
                      return ($("#"+checkBox.id).is(':checked'));
                    });
                    return !(checkArray.length > 0)
                }
            },
            "course_id[r-inter-june-class]": {
                required: function(element) {
                    var checkArray = $('.checker');
                    checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
                      return ($("#"+checkBox.id).is(':checked'));
                    });
                    return !(checkArray.length > 0)
                }
            },
            "course_id[processing-begin-june-class]": {
                required: function(element) {
                    var checkArray = $('.checker');
                    checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
                      return ($("#"+checkBox.id).is(':checked'));
                    });
                    return !(checkArray.length > 0)
                }
            }
        },
        messages: {
            "course_id[r-class]": {
                required: "Please choose one class to attend."
            },
            "course_id[r-begin-mar]": {
                  required: "Please choose one class to attend."
            },
             "course_id[D3-begin-mar-class]": {
                  required: "Please choose one class to attend."
            },
             "course_id[Hadoop-begin-apr]": {
                  required: "Please choose one class to attend."
            },
             "course_id[Kaggle-adv-apr]": {
                  required: "Please choose one class to attend."
            },
             "course_id[Tableau-begin-may]": {
                  required: "Please choose one class to attend."
            },
             "course_id[r-inter-may-class]": {
                  required: "Please choose one class to attend."
            },
             "course_id[r-inter-june-class]": {
                  required: "Please choose one class to attend."
            },
             "course_id[processing-begin-june-class]": {
                  required: "Please choose one class to attend."
            }
        }
    });

    // programmatically check any element using the `.valid()` method.
    $('#applicant_phone_number').on('blur', function () {
        $('#applicant_phone_number').valid();
    });
    $('#applicant_name').on('blur', function () {
        $('#applicant_name').valid();
    });
    $('#applicant_email').on('blur', function () {
        $('input[name="applicant[email]"]').valid();
    });
   
    $('.checker').on('click', function(){
       
          $('.checker').each(function(index,value) { 
                $("#"+value.id).valid();

         })
    });
    
        $('.app_course_form').bind('change keyup', function() {
        if($(this).validate().checkForm()) {
            $('.form_button').removeClass('button_disabled').attr('disabled', false);
            $("#form-instruct").hide(); 
        } else {
            $('.form_button').addClass('button_disabled').attr('disabled', true);
            $("#form-instruct").show(); 
        }
    });
});



$(document).ready(function() {
    $(".stripe-button-el").hide();

    $('.form_button').click(function(){

        $(".stripe-button-el").trigger('click'); 

  });
});

$(document).ready(function() {
    $(".form_button").click(function(){

    var $form = $($(".app_form").last());

    var valuesToSubmit = $($form).serialize();

    $.post($($form).attr('action'), valuesToSubmit);

    var $form = $($(".app_course_form").last());

    var valuesToSubmit = $($form).serialize();

    $.post($($form).attr('action'), valuesToSubmit).done(function(){

      $( '.app_form' ).each(function(){
            this.reset();
        });
      $( '.app_course_form' ).each(function(){
            this.reset();
        });
        $('.form_button').addClass('button_disabled').attr('disabled', true);
        $("#form-instruct").show(); 
    });
  });
});


$(document).ready(function() {
    var checkArray = $('.checker');
    $(document).on('change', checkArray, function() {
      checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
       return ($("#"+checkBox.id).is(':checked'));
      });
    var total = 0;
    for (var i = 0; i < checkArray.length; i++) {
        total += $("#"+checkArray[i].id).val() << 0;
    }
        $("#total-tuition h3").text('$'+total);
    }).trigger('change');
});


$(document).ready(function() {
    $('.checker').on('click', function() {
    var checkArray = $('.checker');
        checkArray = jQuery.grep(checkArray, function( checkBox, index ) {
          return ($("#"+checkBox.id).is(':checked'));
      });
    var total = 0;
    for (var i = 0; i < checkArray.length; i++) {
        total += $("#"+checkArray[i].id).val() << 0;
    }
        $("#total-tuition h3").text('$'+total);
  })
});






