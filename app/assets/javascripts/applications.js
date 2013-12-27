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

    $("#python-info").hide(); 

   
    $('#python-header').click(function(){

        $("#r-info").hide();

        $("#python-info").show(); 


    });
});

$(document).ready(function() {

  $('#r-header').click(function(){

        $("#python-info").hide();

        $("#r-info").show(); 

  });
});

$(document).ready(function() {
    $("#r-header").click(function(event){
        $('html, body').animate({scrollTop: '+=350px'}, 800);
    });
});

$(document).ready(function() {
    $("#python-header").click(function(event){
        $('html, body').animate({scrollTop: '+=270px'}, 800);
    });
});


$(document).ready(function() {
    $(document).on("click","#r-class", function() {
        if ($('select[name="applicant_courses[r_class_payment]"]').is(':enabled')){
            $('select[name="applicant_courses[r_class_payment]"]').prop('disabled',true);
            $('.r-select').append($('<option>', { 
                value: 0,
                text: "-" 
            }));
            $(".r-select").val(0);
            var value = $(".python-select").val();
            $("#total-tuition h3").text('$'+value);
        }
        else{
            $('select[name="applicant_courses[r_class_payment]"]').prop('disabled',false);
            $(".r-select option[value=0]").remove();
            $(".r-select").val("1100");
            var value = parseInt($(".r-select").val()) + parseInt($(".python-select").val());
            $("#total-tuition h3").text('$'+value);
        }  
    });
});

$(document).ready(function() {
    $(document).on("click","#python-class", function() {
        if ($('select[name="applicant_courses[python_class_payment]"]').is(':enabled')){
            $('select[name="applicant_courses[python_class_payment]"]').prop('disabled',true);
            $('.python-select').append($('<option>', { 
                value: 0,
                text: "-" 
            }));
            $(".python-select").val(0);
            var value = $(".r-select").val();
            $("#total-tuition h3").text('$'+value);
        }
        else{
            $('select[name="applicant_courses[python_class_payment]"]').prop('disabled',false);
            $(".python-select option[value=0]").remove();
            $(".python-select").val("550");
            var value = parseInt($(".r-select").val()) + parseInt($(".python-select").val());
            $("#total-tuition h3").text('$'+value);
        }  
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
      $(".python-select").val(550);
      if ($('select[name="applicant_courses[r_class_payment]"]').is(':disabled')){
            $('select[name="applicant_courses[r_class_payment]"]').prop('disabled',false);
            $(".r-select option[value=0]").remove();
            var value = parseInt($(".r-select").val()) + parseInt($(".python-select").val());
            $("#total-tuition h3").text('$'+value);
        }else if($('select[name="applicant_courses[python_class_payment]"]').is(':disabled')){
            $('select[name="applicant_courses[python_class_payment]"]').prop('disabled',false);
            $(".python-select option[value=0]").remove();
            var value = parseInt($(".r-select").val()) + parseInt($(".python-select").val());
            $("#total-tuition h3").text('$'+value);
        }
        else {
            var value = parseInt($(".r-select").val()) + parseInt($(".python-select").val());
            $("#total-tuition h3").text('$'+value);
        }
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








