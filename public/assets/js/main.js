
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
  Promise.all([hash(username), hash(password)]).then((values) => {
    sessionStorage.removeItem("MM_HSH");
    sessionStorage.setItem("MM_HSH", JSON.stringify(values));
  });

  var HSH = JSON.parse(sessionStorage.getItem("MM_HSH"));
  var creds = {
    "username": HSH[0],
    "password": HSH[1]
  }

  fetch('http://localhost:8001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(creds),
  })
    .then(response => {
      console.log(response.status)
      if (response.status != 200) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      setTimeout(function () {
        $("#loading_message").text("Authentication Successful");
        location.replace("/home");
      }, 200000);
      console.log('Success:', data);
    })
    .catch((error) => {
      $("#loading_modal").modal("hide");
      $("#message").text("Wrong username or password");
      $("#info_modal").modal("show");
      console.error('Something went wrong:', error);
    });
});