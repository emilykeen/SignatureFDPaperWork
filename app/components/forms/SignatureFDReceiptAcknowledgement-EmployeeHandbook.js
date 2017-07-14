var React = require("react");

var Handbook = React.createClass({
  render: function() {
    return (
        <form>
        <div className="input-field">
          <input id="Signature" name="Signature"
            className="absolute" type="text"
            style={{
              top: "26.1%",
              left: "51%",
              width: "28.5%",
              height: "2%"}}
            value={this.props.appState.Signature} 
            onChange={this.props.handleChange} 
            />
             <input id="name" name="FirstName"
            className="absolute" type="text"
            style={{
              top: "29.2%",
              left: "53.9%",
              width: "25%",
              height: "2%"}}
            value={this.props.appState.FirstName} 
            onChange={this.props.handleChange} 
            />
            <input name="Date" type="date"
            className="date absolute"
            style={{
              top: "32.4%",
              left: "48%",
              width: "31.5%",
              height: "2%"}} />

          <img className="page" src="/assets/images/SignatureFDReceiptAcknowledgement-EmployeeHandbook_1.jpeg" alt="" />
        </div>
        </form>
    );
  }
});

module.exports = Handbook;