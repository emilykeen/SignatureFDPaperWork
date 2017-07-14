var React = require("react");

var Fitness = React.createClass({

  render: function() {
    return (
      <form id="aForm">
        <div className="input-field">
          <input name="Date" type="date"
            className="date absolute"
            style={{
              top: "13.3%",
              left: "49%",
              width: "20%",
              height: "2%"}} />
          <img className="page" src="/assets/images/PulseFitnessAgreement_1.jpeg" alt="" />

        </div>
        <div>
          <img className="page" src="/assets/images/PulseFitnessAgreement_2.jpeg" alt="" />
        </div>
        <div className="input-field">
        <input id="Signature" name="Signature"
            className="absolute" type="text"
            style={{
              top: "22.8%",
              left: "52%",
              width: "31.3%",
              height: "2%"}}
            value={this.props.appState.Signature} 
            onChange={this.props.handleChange} 
            />
          <input id="fname" name="FirstName"
            className="absolute" type="text"
            style={{
              top: "28.2%",
              left: "52.8%",
              width: "15%",
              height: "2%"}}
            value={this.props.appState.FirstName} 
            onChange={this.props.handleChange} 
            />
            <input id="lname" name="LastName"
            className="absolute" type="text"
            style={{
              top: "28.2%",
              left: "67.8%",
              width: "15%",
              height: "2%"}}
            value={this.props.appState.LastName} 
            onChange={this.props.handleChange} 
            />
          <input id="employer"  name="Employer"
            className="absolute" type="text"
            style={{
              top: "32.95%",
              left: "55%",
              width: "28%",
              height: "2%"}}
            value={this.props.appState.Employer}
            onChange={this.props.handleChange} 
            />
          <input id="suiteAddress" name="SuiteAddress"
            className="absolute" type="text"
            style={{
              top: "35.8%",
              left: "57%",
              width: "26%",
              height: "2%"}}
            value={this.props.appState.SuiteAddress}
            onChange={this.props.handleChange} 
            />
          <input id="officePhone" name="OfficePhone"
            className="absolute" type="text"
            style={{
              top: "38.4%",
              left: "65.5%",
              width: "17.5%",
              height: "2%"}}
            value={this.props.appState.OfficePhone}
            onChange={this.props.handleChange} 
            />
          <input id="GymAccessCard" name="GymAccessCard"
            className="absolute" type="text"
            style={{
              top: "41.4%",
              left: "78.2%",
              width: "4.7%",
              height: "2%"}}
            value={this.props.appState.GymAccessCard}
            onChange={this.props.handleChange} 
            />
            <input id="gender" name="Gender"
            className="absolute" type="text"
            style={{
              top: "44.3%",
              left: "75.2%",
              width: "8%",
              height: "2%"}}
            value={this.props.appState.Gender}
            onChange={this.props.handleChange} 
            />
          <input id="email"  name="EmailAddress"
            className="absolute" type="text"
            style={{
              top: "47%",
              left: "57%",
              width: "26%",
              height: "2%"}}
            value={this.props.appState.EmailAddress}
            onChange={this.props.handleChange} 
            />
          <input type="date" name="Date"
            className="date absolute"
            style={{
              top: "50%",
              left: "54.7%",
              width: "28.5%",
              height: "2%"}}
            value={this.props.appState.Date}
            onChange={this.props.handleChange} 
            />
          <input id="emergencyContact" name="EmergencyContact"
            className="absolute" type="text"
            style={{
              top: "54.2%",
              left: "40%",
              width: "43%",
              height: "2%"}}
            value={this.props.appState.EmergencyContact}
            onChange={this.props.handleChange} 
            />
          <input id="emergencyContactRelationship&Phone" name="EmergencyContactRelationshipAndContact"
            className="absolute" type="text"
            style={{
              top: "57.5%",
              left: "33%",
              width: "50%",
              height: "2%"}}
            value={this.props.appState.EmergencyContactRelationshipAndContact}
            onChange={this.props.handleChange} 
            />
          <img className="page" src="/assets/images/PulseFitnessAgreement_3.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/PulseFitnessAgreement_4.jpeg" alt="" />
        </div>
      </form>
    );
  }
});

module.exports = Fitness;