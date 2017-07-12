var React = require("react");
var InlineCss = require('react-inline-css');

var PulseFitness = React.createClass({

  render: function() {
    return (
        <InlineCss stylesheet={`
            #date {
              margin-top: 13.3%;
              margin-left: 49%;
              width: 20%;
              height: 2%;
            }

            #name {
              margin-top: 28.2%;
              margin-left: 52.8%;
              width: 30%;
              height: 2%;
            }

        `}>
          <form>
              <div className="input-field">
              <input id="date" name="Date" type="date"
                className="date absolute"
                style={{
                  top: "13.3%",
                  left: "49%",
                  width: "20%",
                  height: "2%"}} />
              <img className="page" src="assets/images/PulseFitnessAgreement_1.jpeg" alt="" />
            </div>
            <div>
              <img className="page" src="assets/images/PulseFitnessAgreement_2.jpeg" alt="" />
            </div>
            <div className="input-field">
              <input id="name" name="FirstName"
                className="absolute" type="text"
                style={{
                  top: "28.2%",
                  left: "52.8%",
                  width: "30%",
                  height: "2%"}}
                value={this.props.appState.FirstName.trim()}
                onChange={this.props.handleChange}
                />
              <input id="employer"  name="Employer"
                className="absolute" type="text"
                style={{
                  top: "32.95%",
                  left: "55%",
                  width: "28%",
                  height: "2%"}}
                value={this.props.appState.Employer.trim()}
                onChange={this.props.handleChange}
                />
              <input id="suiteAddress" name="SuiteAddress"
                className="absolute" type="text"
                style={{
                  top: "36%",
                  left: "57%",
                  width: "25%",
                  height: "2%"}}
                value={this.props.appState.SuiteAddress.trim()}
                onChange={this.props.handleChange}
                />
              <input id="officePhone" name="OfficePhone"
                className="absolute" type="text"
                style={{
                  top: "13.5%",
                  left: "50%",
                  width: "20%",
                  height: "2%"}}
                value={this.props.appState.OfficePhone.trim()}
                onChange={this.props.handleChange}
                />
              <input id="gender" name="Gender"
                className="absolute" type="text"
                style={{
                  top: "41.4%",
                  left: "78.2%",
                  width: "4.7%",
                  height: "2%"}}
                value={this.props.appState.Gender.trim()}
                onChange={this.props.handleChange}
                />
              <input id="email"  name="EmailAddress"
                className="absolute" type="text"
                style={{
                  top: "13.5%",
                  left: "50%",
                  width: "20%",
                  height: "2%"}}
                value={this.props.appState.EmailAddress.trim()}
                onChange={this.props.handleChange}
                />
              <input type="date" name="Date"
                className="date absolute"
                style={{
                  top: "13.5%",
                  left: "50%",
                  width: "20%",
                  height: "2%"}}
                value={this.props.appState.Date.trim()}
                onChange={this.props.handleChange}
                />
              <input id="emergencyContact" name="EmergencyContact"
                className="absolute" type="text"
                style={{
                  top: "13.5%",
                  left: "50%",
                  width: "20%",
                  height: "2%"}}
                value={this.props.appState.EmergencyContact}
                onChange={this.props.handleChange}
                />
              <input id="emergencyContactRelationship&Phone" name="EmergencyContactRelationshipAndContact"
                className="absolute" type="text"
                style={{
                  top: "13.5%",
                  left: "50%",
                  width: "20%",
                  height: "2%"}}
                value={this.props.appState.EmergencyContactRelationshipAndContact}
                onChange={this.props.handleChange}
                />
              <img className="page" src="assets/images/PulseFitnessAgreement_3.jpeg" alt="" />
            </div>
            <div>
              <img className="page" src="assets/images/PulseFitnessAgreement_4.jpeg" alt="" />
            </div>
          </form>
        </InlineCss>

    );
  }
});

module.exports = PulseFitness;