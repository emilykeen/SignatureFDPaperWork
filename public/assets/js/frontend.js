$("#login-btn").on("click", function() {
  
  var userCredentials = {
    email: $("#email").val().trim(),
    password: $("#password").val().trim()
  };

  $.post("/login", userCredentials).done(function(data) {
    console.log("frontend post route: " + data);
    
    var headers = {
      "Authorization": "Bearer " + Cookies.get("authToken")
    };

    $.get("/", {headers: headers, user: userCredentials}).done(function(data) {
      console.log("frontend get route: " + data);
    });

    // $.ajax({
    //   url: "/",
    //   type: "GET",
    //   headers: {
    //     "Authorization": "Bearer " + Cookies.get("authToken")
    //   }
    // }).done(function(data) {
    //   console.log("protected data: " + data);
    // });
  });

  

});