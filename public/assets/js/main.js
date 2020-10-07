
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
  let creds = {};

  //encrypt data
  Promise.all([hash(username), hash(password)]).then((values) => {
    creds = {
      "username": values[0],
      "password": values[1]
    }
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(creds),
    })
      .then(response => {
        if (response.status != 200) {
          throw new Error(response.statusText);
        }
        else {
          setTimeout(function () {
            $("#loading_message").text("Authentication Successful");
            location.replace("/home");
          }, 1500);
        }
      })
      .catch((error) => {
        $("#loading_modal").modal("hide");
        $("#message").text("Wrong username or password");
        $("#info_modal").modal("show");
      });
  });
});

$("#logout_button").on("click", function (event) {
  $("#logout_modal").modal("show");
  setTimeout(function () {
    location.replace("/");
  }, 2000);
});


