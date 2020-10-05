$(document).ready(function () {
  //hashing function
  function hash(str) {
    return crypto.subtle
      .digest("SHA-512", new TextEncoder("utf-8").encode(str))
      .then((buf) => {
        return Array.prototype.map
          .call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2))
          .join("");
      });
  }

  $("#login_form").on("submit", function (event) {
    event.preventDefault();
    $("#loading_modal").modal("show");

    let username = $(this).find("#username").val();
    let password = $(this).find("#password").val();

    //encrypt data
    hash(username).then((data) => {
      console.log(data);
      let hashed_username = data;
    });
    hash(password).then((data) => {
      console.log(data);
      let hashed_password = data;
    });
    let creds = {
      username: hashed_username,
      password: hashed_password,
    };

    console.log(JSON.stringify(creds));

    var form = $(this);
    var url = "http://localhost:8001/login";

    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(),
      success: function (data) {
        setTimeout(function () {
          $("#loading_message").text("Authentication Successful");
          location.replace("/home");
        }, 2000);
      },
      error: function (data) {
        $("#loading_modal").modal("hide");
        $("#message").text("Wrong username or password");
        $("#info_modal").modal("show");
      },
    });
  });
});
