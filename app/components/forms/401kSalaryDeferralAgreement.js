var React = require("react");

var Handbook = React.createClass({

  componentDidMount: function() {
    this.props.updateCurrentForm("401kSalaryDeferralAgreement");
  },

  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/401kSalaryDeferralAgreement_1.jpeg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Handbook;