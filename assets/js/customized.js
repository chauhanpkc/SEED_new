$(document).ready(function () {
   // ========Email validation===========
    $(".email").on('change keyup',function () {    
        var inputvalues = $(this).val();    
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(inputvalues)){    
            $(".email_msg").text("Invalid E-mail ID"); 
        return regex.test(inputvalues);    
        }    
        }); 
      //   =======Mobile Number Validation=========
      $(".m_number").on('change keyup',function () {    
         var mobilevalues = $(this).val();    
         var regex = /^[6-9]{1}[0-9]{9}$/; 
         if(!regex.test(mobilevalues)){    
             $(".m_number_msg").text("Invalid Mobile number"); 
         return regex.test(mobilevalues);    
         }    
         });
      //   =======Aadhar card validation========
      $(".aadhar").on('change keyup',function () {    
         var aadharvalues = $(this).val();    
         var regex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/; 
         if(!regex.test(aadharvalues)){    
             $(".aadhar_msg").text("Invalid Aadhar Card number"); 
         return regex.test(aadharvalues);    
         }    
         console.log('');
         });
         // ==========IFSC Code Validation======
         $(".ifsc").on('change keyup',function () {    
            var ifscvalues = $(this).val();    
            var regex = /^[A-Z]{4}[0-9]{7}$/; 
            if(!regex.test(ifscvalues)){    
                $(".ifsc_msg").text("Invalid IFSC Code"); 
            return regex.test(ifscvalues);    
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
    var minLength = 1;
    var maxLength = 50;
    $(".min-max-occupation").on("keydown keyup change", function () {
       var value = $(this).val();
       if (value.length < minLength)
          $(".min-max-occupation-message").text("Minimum " + minLength + " character required.");
       else if (value.length > maxLength)
          $(".min-max-occupation-message").text("Maximum " + maxLength + " character allowed.");
       else
          $(".min-max-occupation-message").text("");
    });
    
});    