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
