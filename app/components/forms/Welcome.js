var React = require("react");

var Welcome = React.createClass({

  render: function() {
    return (
      <div className="container">
        <div className="row"></div>
        <div className="row">
          <div className="row center-align">
            <h5 className="center-align">Welcome the SignatureFD family, and congratulations on your new position.</h5>
            <p className="center-align"> This website will walk you through all the paperwork you will need to complete during the on boarding process.</p>
            <video className="responsive-video" controls>
              <source src="/assets/images/SignatureFD-CultureVideo_sm.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {/*<div className="container row">*/}
            {/*<a className="saveBTN waves-effect waves-brown btn white-text right" href="#/employee/handbook">CONTINUE</a>*/}
        {/*</div>*/}
      </div>
    );
  }
});

module.exports = Welcome;