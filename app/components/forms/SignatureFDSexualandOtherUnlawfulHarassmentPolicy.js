var React = require("react");

var Handbook = React.createClass({
  render: function() {
    return (
      <form>
      <div>
        <div>
          <img className="page" src="/assets/images/SignatureFDSexualandOtherUnlawfulHarassmentPolicy_1.jpeg" alt="" />
        </div>
        <div>
          <div className="input-field">
          <input id="Signature" name="Signature"
            className="absolute" type="text"
            style={{
              top: "53.1%",
              left: "11.5%",
              width: "40%",
              height: "2%"}}
            value={this.props.appState.Signature} 
            onChange={this.props.handleChange} 
            />
          <input name="Date" type="date"
            className="date absolute"
            style={{
              top: "53%",
              left: "53%",
              width: "35.3%",
              height: "2%"}} />
                   <input id="name" name="FirstName"
            className="absolute" type="text"
            style={{
              top: "62.6%",
              left: "11.9%",
              width: "76%",
              height: "2%"}}
            value={this.props.appState.FirstName} 
            onChange={this.props.handleChange} 
            />
          <img className="page" src="/assets/images/SignatureFDSexualandOtherUnlawfulHarassmentPolicy_2.jpeg" alt="" />
        </div>
      </div>
      </div>
      </form>
    );
  }
});

module.exports = Handbook;