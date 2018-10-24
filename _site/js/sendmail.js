$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=first]').val(),
            'email'             : $('input[name=email]').val(),
            'email'             : $('input[name=subject]').val(),
            'message'           : $('input[name=message]').val()
        };

        var urlToPost = "https://polar-brushlands-58444.herokuapp.com/sendMail/" + 
        formData.email + "/" + "contact@scalamill.com" + "/" + formData.subject + "/";

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : urlToPost,
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
