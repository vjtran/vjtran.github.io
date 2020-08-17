// JavaScript

// checks to see if the page is ready for the code 
$(document).ready(function() { 
// Lesson Loader button redirects to lessons page
    $('#button').click(function() {
        window.location.href="lessons.html";
    });
    
// Get and set user name and comments after clicking comment button 
    $('#submit').click(function() { 
        //here the value is stored in variable. 
        var x = $('input:text').val(); 
        var y = $('#comment').val();
        $("#user-name").html(x);
        $("#msg").html(y);
        
        // show default user img icon
        $('#show').show();
    });
    
// Recipe, Lesson, and Comments Tabs
    $('.tabs nav a').on('click', function() {
    show_content($(this).index());
    });
  
    show_content(0);

    function show_content(index) {
    // Make the content visible
    $('.tabs .content.visible').removeClass('visible');
    $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');

    // Set the tab to selected
    $('.tabs nav a.selected').removeClass('selected');
    $('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
    } 
});  

// Serving Size Tabs
$(document).ready(function() {
  $('.serving div.serving-size a').on('click', function() {
    show_content($(this).index());
  });
  
  show_content(0);

  function show_content(index) {
    // Make the content visible
    $('.serving .ingredients-content.visible').removeClass('visible');
    $('.serving .ingredients-content:nth-of-type(' + (index + 1) + ')').addClass('visible');

    // Set the tab to selected
    $('.serving div.serving-size a.selected').removeClass('selected');
    $('.serving div.serving-size a:nth-of-type(' + (index + 1) + ')').addClass('selected');
  }
});

// Conversion Calculation 
function teaConverter(valNum) {
    document.getElementById("ttsp").innerHTML=valNum*3;
    document.getElementById("tg").innerHTML=valNum*2;
}   // tea / lavender conversion

function sugarConverter(valNum) {
    var num = valNum/3
    var n = num.toFixed(2)
    document.getElementById("stbsp").innerHTML= n;
    document.getElementById("sg").innerHTML=valNum*4;
}   // sugar conversion

function liquidConverter(valNum) {
    document.getElementById("ml").innerHTML=valNum*250;
    document.getElementById("ltbsp").innerHTML=valNum*16;
}   // liquid conversion