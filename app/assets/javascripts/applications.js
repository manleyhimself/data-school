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

    });

});

$(document).ready(function() {


    $('#python-header').click(function(){
        
        $("#python-info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === "python-info")) $('#' + value.id).hide();


         })

    });

});

$(document).ready(function() {


    $('#D3-begin-mar-header').click(function(){
        
        $("#D3-begin-mar-info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === "D3-begin-mar-info")) $('#' + value.id).hide();


         })

    });

});

$(document).ready(function() {


    $('#r-inter-header').click(function(){
        
        $("#r-inter-info").show(); 

         $('.curriculum').each(function(index,value) { 
    
             if (!(value.id === "r-inter-info")) $('#' + value.id).hide();


         })

    });

});



$(document).ready(function() {
    $("#r-header").click(function(event){
        $('html, body').animate({scrollTop: '+=400px'}, 800);
    });
});

$(document).ready(function() {
    $("#python-header").click(function(event){
        $('html, body').animate({scrollTop: '+=270px'}, 800);
    });
});

$(document).ready(function() {
    $("#r-inter-header").click(function(event){
        $('html, body').animate({scrollTop: '+=200px'}, 800);
    });
});

$(document).ready(function() {
    $(document).on("click","#r-class-check", function() {
        if ($('.r-select').is(':enabled')){
            $('.r-select').prop('disabled',true);
            $('.r-select').append($('<option>', { 
                value: 0,
                text: "-" 
            }));
            $(".r-select").val(0);
            var value = 0;
            for (var i = 0; i < $('.select-form').length; i++) {
                value += $("#"+($('.select-form')[i].id)).val() << 0;
            }
            $("#total-tuition h3").text('$'+value);
        }
        else{
            $('.r-select').prop('disabled',false);
            $(".r-select option[value=0]").remove();
            var value = 0;
            for (var i = 0; i < $('.select-form').length; i++) {
                value += $("#"+($('.select-form')[i].id)).val() << 0;
            }
            $("#total-tuition h3").text('$'+value);
        }  
    });
});

// $(document).ready(function() {
//     $(document).on("click","#python-class-check", function() {
//         if ($('.python-select').is(':enabled')){
//             $('.python-select').prop('disabled',true);
//             $('.python-select').append($('<option>', { 
//                 value: 0,
//                 text: "-" 
//             }));
//             $(".python-select").val(0);
//             var value = 0;
//             for (var i = 0; i < $('.select-form').length; i++) {
//                 value += $("#"+($('.select-form')[i].id)).val() << 0;
//             }
//             $("#total-tuition h3").text('$'+value);
//         }
//         else{
//             $('.python-select').prop('disabled',false);
//             $(".python-select option[value=0]").remove();
//             $(".python-select").val("850");
//            var value = 0;
//             for (var i = 0; i < $('.select-form').length; i++) {
//                 value += $("#"+($('.select-form')[i].id)).val() << 0;
//             }
//             $("#total-tuition h3").text('$'+value);
//         }  
//     });
// });
$(document).ready(function() {
    $(document).on("click","#r-int-class-check", function() {
        if ($('.r-int-select').is(':enabled')){
            $('.r-int-select').prop('disabled',true);
            $('.r-int-select').append($('<option>', { 
                value: 0,
                text: "-" 
            }));
            $(".r-int-select").val(0);
            var value = 0;
            for (var i = 0; i < $('.select-form').length; i++) {
                value += $("#"+($('.select-form')[i].id)).val() << 0;
            }
            $("#total-tuition h3").text('$'+value);
        }
        else{
            $('.r-int-select').prop('disabled',false);
            $(".r-int-select option[value=0]").remove();
            $(".r-int-select").val("1100");
           var value = 0;
            for (var i = 0; i < $('.select-form').length; i++) {
                value += $("#"+($('.select-form')[i].id)).val() << 0;
            }
            $("#total-tuition h3").text('$'+value);
        }  
    });
});
$(document).ready(function() {
    $(document).on("click","#r-begin-mar-check", function() {
        if ($('#r-begin-mar-select').is(':enabled')){
            $('#r-begin-mar-select').prop('disabled',true);
            $('#r-begin-mar-select').append($('<option>', { 
                value: 0,
                text: "-" 
            }));
            $("#r-begin-mar-select").val(0);
            var value = 0;
            for (var i = 0; i < $('.select-form').length; i++) {
                value += $("#"+($('.select-form')[i].id)).val() << 0;
            }
            $("#total-tuition h3").text('$'+value);
        }
        else{
            $('#r-begin-mar-select').prop('disabled',false);
            $("#r-begin-mar-select option[value=0]").remove();
            $("#r-begin-mar-select").val("1100");
           var value = 0;
            for (var i = 0; i < $('.select-form').length; i++) {
                value += $("#"+($('.select-form')[i].id)).val() << 0;
            }
            $("#total-tuition h3").text('$'+value);
        }  
    });
});
$(document).ready(function() {
    $(document).on("click","#D3-begin-mar-check", function() {
        if ($('#D3-begin-mar-select').is(':enabled')){
            $('#D3-begin-mar-select').prop('disabled',true);
            $('#D3-begin-mar-select').append($('<option>', { 
                value: 0,
                text: "-" 
            }));
            $("#D3-begin-mar-select").val(0);
            var value = 0;
            for (var i = 0; i < $('.select-form').length; i++) {
                value += $("#"+($('.select-form')[i].id)).val() << 0;
            }
            $("#total-tuition h3").text('$'+value);
        }
        else{
            $('#D3-begin-mar-select').prop('disabled',false);
            $("#D3-begin-mar-select option[value=0]").remove();
            $("#D3-begin-mar-select").val("1100");
           var value = 0;
            for (var i = 0; i < $('.select-form').length; i++) {
                value += $("#"+($('.select-form')[i].id)).val() << 0;
            }
            $("#total-tuition h3").text('$'+value);
        }  
    });
});


// _____________________________

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
                    return !($("#python-class-check").is(':checked'));
                }
            },
            "course_id[python-class]": {
                required: function(element) {
                    return !($("#r-class").is(':checked'));
                }
            }
        },
        messages: {
            "course_id[r-class]": {
                required: "Please choose one class to attend."
            },
            "course_id[python-class]": {
                  required: "Please choose one class to attend."
            }
        }
    });

    // programmatically check any element using the `.valid()` method.
    $('#applicant_phone_number').on('blur', function () {
        $('input[name="applicant[phone_number]"]').valid();
    });
    $('#applicant_name').on('blur', function () {
        $('input[name="applicant[name]"]').valid();
    });
    $('#applicant_email').on('blur', function () {
        $('input[name="applicant[email]"]').valid();
    });
    $('#r-class').on('click', function () {
        $('input[name="course_id[r-class]"]').valid();
        $('input[name="course_id[python-class]"]').valid();

    });
        $('#python-class-check').on('click', function () {
            $('input[name="course_id[r-class]"]').valid();
            $('input[name="course_id[python-class]"]').valid();
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
      $(".r-select").val(1100);
      $(".python-select").val(850);
      //instead of if statement, iterate through everything in .select-form array setting disable to false on each adn removing the 0 value, must set same class for each checkbox
      if ($('.r-select').is(':disabled')){
            $('.r-select').prop('disabled',false);
            $(".r-select option[value=0]").remove();
            var value = parseInt($(".r-select").val()) + parseInt($(".python-select").val());
            $("#total-tuition h3").text('$'+value);
        }else if($('.python-select').is(':disabled')){
            $('.python-select').prop('disabled',false);
            $(".python-select option[value=0]").remove();
            var value = parseInt($(".r-select").val()) + parseInt($(".python-select").val());
            $("#total-tuition h3").text('$'+value);
        }
        else {
            var value = parseInt($(".r-select").val()) + parseInt($(".python-select").val());
            $("#total-tuition h3").text('$'+value);
        }
        $('.form_button').addClass('button_disabled').attr('disabled', true);
        $("#form-instruct").show(); 
    });
  });
});

$(document).ready(function() {
    var selects = $('.select-form');
    $(document).on('change', selects, function() {
    var value = 0;
    selects.each(function(){ value += +this.value; });
        $("#total-tuition h3").text('$'+value);
    }).trigger('change');
});












