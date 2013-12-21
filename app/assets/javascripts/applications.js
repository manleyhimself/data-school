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

