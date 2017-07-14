var React = require("react");

var Handbook = React.createClass({
    render: function () {
        return (
            <form>
            <div>
            <div className="input-field">
          <input id="name" name="FirstName"
            className="absolute" type="text"
            style={{
              top: "14.2%",
              left: "21%",
              width: "70.3%",
              height: "2%"}}
            value={this.props.appState.FirstName} 
            onChange={this.props.handleChange} 
            />
          <input id="socialSecurity" name="SocailSecurityNumber"
            className="absolute" type="text"
            style={{
              top: "16.73%",
              left: "24.8%",
              width: "25.3%",
              height: "2%"}}
            value={this.props.appState.SocailSecurityNumber} 
            onChange={this.props.handleChange} 
            />
               <input id="MaritalStatus" name="MaritalStatus"
            className="absolute" type="text"
            style={{
              top: "16.73%",
              left: "68%",
              width: "25.3%",
              height: "2%"}}
            value={this.props.appState.MaritalStatus} 
            onChange={this.props.handleChange} 
            />
         <textarea id="PrimaryBeneficiary" name="PrimaryBeneficiary"
            className="absolute" type="text"
            style={{
              top: "28.73%",
              left: "11.5%",
              width: "77%",
              height: "8%"}}
            value={this.props.appState.PrimaryBeneficiary} 
            onChange={this.props.handleChange} 
            />
                 <textarea id="ContingentBenficiary" name="ContingentBenficiary"
            className="absolute" type="text"
            style={{
              top: "41.73%",
              left: "11.5%",
              width: "77%",
              height: "8%"}}
            value={this.props.appState.ContingentBenficiary} 
            onChange={this.props.handleChange} 
             />
            <input name="Date" type="date"
            className="date absolute"
            style={{
              top: "81%",
              left: "8%",
              width: "39%",
              height: "2%"}} />
                   <input id="name" name="FirstName"
            className="absolute" type="text"
            style={{
              top: "81%",
              left: "53%",
              width: "39%",
              height: "2%"}}
            value={this.props.appState.FirstName} 
            onChange={this.props.handleChange} 
           
            />
                    <img className="page" src="/assets/images/401kBeneficiaryDesignationForm_1.jpeg" alt=""/>
                </div>
                <div>
                    <img className="page" src="/assets/images/401kBeneficiaryDesignationForm_2.jpeg" alt=""/>
                </div>
                <div>
                    <img className="page" src="/assets/images/401kBeneficiaryDesignationForm_3.jpeg" alt=""/>
                </div>

            </div>
            </form>
        );
    }
});

module.exports = Handbook;