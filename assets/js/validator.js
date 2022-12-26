$("#register_form").bootstrapValidator({
    fields: {
        email: {
            validators: {
                notEmpty: {
                    message: 'Please enter title of the Project'
                }
            }
        }
        
    }
});
