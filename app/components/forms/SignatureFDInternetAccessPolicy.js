var React = require("react");

var Handbook = React.createClass({
  render: function() {
    return (
        <form>
        <div>
          <img className="page" src="assets/images/SignatureFDInternetAccessPolicy_1.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="assets/images/SignatureFDInternetAccessPolicy_2.jpeg" alt="" />
        </div>

        <div className="input-field">
          <input name="Date" type="date"
            className="date absolute"
            style={{
              top: "60.2%",
              left: "53%",
              width: "35.3%",
              height: "2%"}} />
                   <input id="name" name="FirstName"
            className="absolute" type="text"
            style={{
              top: "66.6%",
              left: "11.8%",
              width: "77%",
              height: "2%"}}
            value={this.props.appState.FirstName.trim()} 
            onChange={this.props.handleChange} 
            />
          <img className="page" src="assets/images/SignatureFDInternetAccessPolicy_3.jpeg" alt="" />
        </div>
      </form>
    );
  }
});

module.exports = Handbook;