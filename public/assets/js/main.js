$(document).ready(function () {

    $("#login_form").on("submit", function (event) {

        event.preventDefault();
        $("#loading_modal").modal("show");

        var form = $(this);
        var url = "http://localhost:8001/login"

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (data) {

                setTimeout(function () {
                    $("#loading_message").text("Authentication Successful");
                    location.replace('/home')
                }, 2000);
            },
            error: function (data) {
                $("#loading_modal").modal("hide");
                $("#message").text("Wrong username or password");
                $("#info_modal").modal("show");
            }
        });


    });


});
