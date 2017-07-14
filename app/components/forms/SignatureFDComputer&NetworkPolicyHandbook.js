var React = require("react");

var Handbook = React.createClass({
  render: function() {
    return (
      <form>
      <div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_1.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_2.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_3.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_4.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_5.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_6.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_7.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_8.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_9.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_10.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_11.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_12.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_13.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_14.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_15.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_16.jpeg" alt="" />
        </div>
        <div>
        <div className="input-field">
          <input id="name" name="FirstName"
            className="absolute" type="text"
            style={{
              top: "79.5%",
              left: "11.8%",
              width: "76%",
              height: "2%"}}
            value={this.props.appState.FirstName.trim()} 
            onChange={this.props.handleChange} 
            />
             <input id="Signature" name="Signature"
            className="absolute" type="text"
            style={{
              top: "85%",
              left: "11.5%",
              width: "40%",
              height: "2%"}}
            value={this.props.appState.Signature} 
            onChange={this.props.handleChange} 
            />
            <input name="Date" type="date"
            className="date absolute"
            style={{
              top: "85%",
              left: "57.8%",
              width: "30.3%",
              height: "2%"}} />
          <img className="page" src="/assets/images/SignatureFDComputer&NetworkPolicyHandbook_17.jpeg" alt="" />
        </div>
      </div>
      </div>
      </form>
    );
  }
});

module.exports = Handbook;