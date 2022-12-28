// $("#register").click(function () {
//     var reg_email = $("#email");
//     if (reg_email.val() === "") {
//         document.getElementById("email_message").innerHTML = "Email can not be empty";
//         document.getElementById("email_message").style.display = "block";
//     }
//     else {
//         document.getElementById("email_message").innerHTML = "";
//     }
//     var reg_name = $("#name");
//     if (reg_name.val() === "") {
//         document.getElementById("name_message").innerHTML = "Name can not be empty";
//         document.getElementById("name_message").style.display = "block";
//     }
//     else {
//         document.getElementById("name_message").innerHTML = "";
//     }
//     var reg_fname = $("#fname");
//     if (reg_fname.val() === "") {
//         document.getElementById("fname_message").innerHTML = "Father Name can not be empty";
//         document.getElementById("fname_message").style.display = "block";
//     }
//     else {
//         document.getElementById("fname_message").innerHTML = "";
//     }
//     var reg_passport = $("#passport");
//     if (reg_passport.val() === "") {
//         document.getElementById("passport_message").innerHTML = "Passport photo can not be empty";
//         document.getElementById("passport_message").style.display = "block";
//     }
//     else {
//         document.getElementById("passport_message").innerHTML = "";
//     }
// });
// $(function() {   
//     var minLength = 10;
//     var maxLength = 10;
//     $("#m_number").on("keydown keyup change", function(){
//       var value = $(this).val();
//       if (value.length < minLength)
//           $(".m_numbr_msg").text("Please enter Valid Mobile Number.");
//       else if (value.length > maxLength)
//           $(".m_numbr_msg").text("Enter 10 Digit Mobile Number");
//       else
//           $(".m_numbr_msg").text("");
//     });
//   });

$(document).ready(function () {
    // ========Email validation===========
     $(".email").on('change keyup',function () {    
         var inputvalues = $(this).val();    
         var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         if(!regex.test(inputvalues))    
             $(".email_msg").text("Invalid E-mail ID"); 
         else $(".email_msg").text("");  
             
         }); 
       //   =======Mobile Number Validation=========
       $(".m_number").on('change keyup',function () {    
          var mobilevalues = $(this).val();    
          var regex = /^[6-9]{1}[0-9]{9}$/; 
          if(!regex.test(mobilevalues))    
              $(".m_number_msg").text("Invalid Mobile number"); 
          else
          $(".m_number_msg").text("");
          });
       //   =======Aadhar card validation========
       $(".aadhar").on('change keyup',function () {    
          var aadharvalues = $(this).val();    
          var regex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/; 
          if(!regex.test(aadharvalues))    
              $(".aadhar_msg").text("Invalid Aadhar Card number"); 
          else
          $(".aadhar_msg").text("");    
              
          console.log('');
          });
          // ==========IFSC Code Validation======
          $(".ifsc").on('change keyup',function () {    
             var ifscvalues = $(this).val();    
             var regex = /^[A-Z]{4}[0-9]{7}$/; 
             if(!regex.test(ifscvalues))   
                 $(".ifsc_msg").text("Invalid IFSC Code"); 
             else 
             $(".ifsc_msg").text("");   
                 
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
     var min_Length = 2;
     var max_Length = 6;
     $(".min-max-AnnualIncome").on("keydown keyup change", function () {
        var value = $(this).val();
        if (value.length < min_Length)
           $(".min-max-AnnualIncome-msg").text("Minimum " + min_Length + " digit required.");
        else if (value.length > max_Length)
           $(".min-max-AnnualIncome-msg").text("Maximum " + max_Length + " digit allowed.");
        else
           $(".min-max-AnnualIncome-msg").text("");
     });
    //  =============Bank Account Number=============
    var min__Length = 8;
    var max__Length = 11;
    $(".min-max-BankAccount").on("keydown keyup change", function () {
       var value = $(this).val();
       if (value.length < min__Length)
          $(".min-max-BankAccount-msg").text("Minimum " + min__Length + " digit required.");
       else if (value.length > max__Length)
          $(".min-max-BankAccount-msg").text("Maximum " + max__Length + " digit allowed.");
       else
          $(".min-max-BankAccount-msg").text("");
    });
 });    
//   =======Passport Size Photo=========
  var passport_s = "";
    $('#passport_size').on('change', function () {
    passport_s = $("#passport_size").val();
    console.log(passport_s);
    var upld = passport_s.split('.').pop();
    if (upld == 'jpg') {
        // alert("File uploaded is pdf")
     } else {
        alert("Only .Jpg Image are allowed")
        }
    if (this.files[0].size > 204800) {
        alert("Please upload .jpg Image file less than 200KB ....");
        $(this).val('');
    }

});
// =============Cast Certificate========
  var myFile = "";
    $('#cast_cer').on('change', function () {
    myFile = $("#cast_cer").val();
    console.log(myFile);
    var upld = myFile.split('.').pop();
    if (upld == 'pdf') {
        // alert("File uploaded is pdf")
     } else {
        alert("Only PDF are allowed")
        }
    if (this.files[0].size > 204800) {
        alert("Please upload pdf file less than 200KB ....");
        $(this).val('');
    }

});
// ================Bank first page/ Cheque Validation==========
var bank_passbook = "";
    $('#bank_first').on('change', function () {
    bank_passbook = $("#bank_first").val();
    console.log(bank_passbook);
    var upld = bank_passbook.split('.').pop();
    if (upld == 'pdf') {
        // alert("File uploaded is pdf")
     } else {
        alert("Only PDF are allowed")
        }
    if (this.files[0].size > 204800) {
        alert("Please upload pdf file less than 200KB ....");
        $(this).val('');
    }

});
