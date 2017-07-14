var React = require("react");

var Handbook = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/FormW4_1.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/FormW4_2.jpeg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Handbook;