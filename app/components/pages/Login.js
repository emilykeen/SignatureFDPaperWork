var React = require("react");

var helpers = require("../../utils/helpers");

var Login = React.createClass({

  getInitialState: function() {
    return {
      "EmailAddress": "",
      "Password": ""
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var employeeCredentials = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };

    helpers.authenticateUser(employeeCredentials).then(function(res) {
      if (res === "employee") {
        // console.log("validate emp token");
        // helpers.validateEmpAccessToken().then(function(res) {
        //   console.log(res);
        // });
        window.location = "#/update/password";
      } else if (res === "admin") {
        console.log("validate admin token");
        // helpers.validateAdminAuthToken
        window.location = "#/admin"
      } else {
        console.log(res);
      }
    });

  },

  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="First.Last@SignatureFD.com" type="email"
                  id="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Password" type="password"
                  id="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container row">
          <a className="saveBTN waves-effect waves-brown btn white-text right" id="login-btn"
          onClick={this.handleSubmit}>CONTINUE</a>
        </div>
      </div>
    );
  }
});

module.exports = Login;