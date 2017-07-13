var React = require("react");

var indexLayout = React.createClass({
  render: function() {
    return (
      <div>
        <div className="content">
        <header style={{paddingLeft: "0px"}}>
          <div className="navbar-fixed">
            <nav className="nav-extended  FDbrownLight white-text" role="navigation">
              <div className="container">
                <div className="nav-wrapper">
                  <a href="#" className="brand-logo"><img src="assets/images/logo-white.png" /></a>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <main style={{paddingLeft: "0px"}}>
          {this.props.children}
        </main>

        </div>
        <footer className="page-footer FDbrownLight white-text" style={{paddingLeft: "0px"}}>
          <div className="container">
            <div className="row">
              <div className="col l5 s12">
                <img src="assets/images/logo-white.png" />
                <p>
                  HEADQUARTERS<br />
                  1230 Peachtree Street, NE<br />
                  Suite 1800<br />
                  Atlanta, GA 30309<br />
                  <a href="http://www.signaturefd.com/wp-content/uploads/2016/09/SigFD-Parking-Directions-and-Map.pdf">Directions</a>
                </p>
                <p>
                  NORTH CAROLINA OFFICE<br />
                  4601 Park Road<br />
                  Suite 450<br />
                  Charlotte, NC 28209 <br />
                </p>
                <p>
                  Tel: (404) 253-7600<br />
                  Fax: (404) 253-7601
                </p>
              </div>
              <div className="valign-wrapper col l6 offset-l1 s12">
                <div className="valign-wrapper">
                  <h5 className="white-text valign-wrapper">Financial Design for Life</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright FDbrownDark white-text">
            <div className="container">
              <p>©2016 SignatureFD. All rights reserved. &nbsp;<span style={{color: "#ffffff"}}>&nbsp;
                <a href="http://www.signaturefd.com/definitions">Definitions</a> |
                <a href="http://www.signaturefd.com/privacy"> Privacy</a> |
                <a href="http://www.signaturefd.com/disclosure-information"> Disclosure</a>&nbsp;&nbsp;&nbsp;</span>
                <a target="_blank" href="https://twitter.com/SignatureFD">&nbsp;&nbsp;&nbsp;<i className="fa fa-fw fa-twitter fa-lg" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.facebook.com/SignatureFD/">&nbsp;<i className="fa fa-fw fa-facebook fa-lg" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.linkedin.com/company/signaturefd">&nbsp;<i className="fa fa-fw fa-linkedin fa-lg" aria-hidden="true"></i></a>
                <a target="_blank" href="http://www.signaturefd.com/feed/rss/">&nbsp;<i className="fa fa-fw fa-rss fa-lg" aria-hidden="true"></i></a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});

module.exports = indexLayout;
