//$("#"+($('.checker')[0].id)).is(':checked');
//$("#"+($('.select-form')[0].id)).is(':disabled');
//$('.curriculum')[1].id.slice(0,-5);


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

    $('.curriculum').each(function(index,value) { 
    
         $('#' + value.id).hide();


    })

});
$(document).ready(function() {


    $('.class-header').click(function(){

        var prefixString=["" + $(this)[0].id].join("").slice(0,-6);

        $(this).addClass("green-select");

        $("#"+prefixString+"info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === prefixString+"info")) $('#' + value.id).hide();

         })
         $('.header-div').each(function(index,value) { 
    
             if (!(value.id === prefixString+"header-div")) $('#' + value.id).hide();

         })
        $('html, body').animate({
            scrollTop: $("#"+prefixString+"header").offset().top
        }, 0);

    });

});

$(document).ready(function() {
    $(".hide-curriculum").click(function(event){
      $('.curriculum').each(function(index,value) { 
    
            $('#' + value.id).hide();


        })
      $('.header-div').each(function(index,value) { 
  
            $('#' + value.id).show();

       })
    
      var prefixString=["" + $(this).parent().parent()[0].id].join("").slice(0,-4);
      $("#"+prefixString+"header").removeClass("green-select");
      $('html, body').animate({
            scrollTop: $("#"+prefixString+"header").offset().top
        }, 0);
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
    $(document).on('change', function() {
    var checkArray = $('.checker');
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






