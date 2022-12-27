$("#register").click(function () {
    var reg_email = $("#email");
    if (reg_email.val() === "") {
        document.getElementById("email_message").innerHTML = "Email can not be empty";
        document.getElementById("email_message").style.display = "block";
    }
    else {
        document.getElementById("email_message").innerHTML = "";
    }
    var reg_name = $("#name");
    if (reg_name.val() === "") {
        document.getElementById("name_message").innerHTML = "Name can not be empty";
        document.getElementById("name_message").style.display = "block";
    }
    else {
        document.getElementById("name_message").innerHTML = "";
    }
    var reg_fname = $("#fname");
    if (reg_fname.val() === "") {
        document.getElementById("fname_message").innerHTML = "Father Name can not be empty";
        document.getElementById("fname_message").style.display = "block";
    }
    else {
        document.getElementById("fname_message").innerHTML = "";
    }
    var reg_passport = $("#passport");
    if (reg_passport.val() === "") {
        document.getElementById("passport_message").innerHTML = "Passport photo can not be empty";
        document.getElementById("passport_message").style.display = "block";
    }
    else {
        document.getElementById("passport_message").innerHTML = "";
    }
});
