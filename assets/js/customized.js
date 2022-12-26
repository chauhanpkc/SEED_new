$(document).ready(function () {
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
       $('.min-max').keyup(function () {
           var len = maxLength - $(this).val().length;
           $('.GFG').text(len);
       });
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
       $('.min-max').keyup(function () {
           var len = maxLength - $(this).val().length;
           $('.GFG').text(len);
       });
    });
});    