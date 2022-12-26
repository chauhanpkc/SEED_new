$(document).ready(function () {
    $(".email").change(function () {    
        var inputvalues = $(this).val();    
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
        if(!regex.test(inputvalues)){    
            $(".email_msg").text("Invalid E-mail ID");
            $(".email_msg").color("Invalid E-mail ID");    
        return regex.test(inputvalues);    
        }    
        }); 
    var minLength = 1;
    var maxLength = 50;
    $(".min-max-name").on("keydown keyup change", function () {
       var value = $(this).val();
       if (value.length < minLength)
          $(".min-max-name-message").text("Minimum " + minLength + " character required.");
       else if (value.length > maxLength)
          $(".min-max-name-message").text("Maximum " + maxLength + " character allowed.");
       else
          $(".min-max-name-message").text("");
    });
    var minLength = 1;
    var maxLength = 50;
    $(".min-max-fname").on("keydown keyup change", function () {
       var value = $(this).val();
       if (value.length < minLength)
          $(".min-max-fname-message").text("Minimum " + minLength + " character required.");
       else if (value.length > maxLength)
          $(".min-max-fname-message").text("Maximum " + maxLength + " character allowed.");
       else
          $(".min-max-fname-message").text("");
    });
});    