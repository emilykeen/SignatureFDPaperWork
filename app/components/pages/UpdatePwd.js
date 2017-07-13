var React = require("react");

var helpers = require("../../utils/helpers");

var UpdatePwd = React.createClass({

  getInitialState: function() {
    return {
      "EmailAddress": "",
      "Password": "",
      "ConfirmPassword": ""
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    window.location = "#/employee/welcome";
      location.reload();
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
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="passwordNew" type="password" className="validate" />
                  <label htmlFor="password">Create New Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="passwordNewConfirm" type="password" className="validate" />
                  <label htmlFor="password">Confirm New Password</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container row">
          <a className="saveBTN waves-effect waves-brown btn white-text right" onClick={this.handleSubmit}>CONTINUE</a>
        </div>
      </div>
    );
  }
});

module.exports = UpdatePwd;