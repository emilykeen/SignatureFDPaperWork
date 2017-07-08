var React = require("react");

var helpers = require("../../utils/helpers");

var Admin = React.createClass({

  getInitialState: function() {
    return {
      "EmailAddress": "",
      "Password": ""
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();
  },

  render: function() {
    return (
      <div class="container">
        <table class="highlight">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>START DATE</th>
              <th>%</th>
              <th>DOCUMENTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="center-align">
                <a class="btn-floating btn-small waves-effect waves-light light-blue centered">
                  <i class="material-icons">add</i>
                </a>
              </td>
              <td>
                <input placeholder="Name" id="name" type="text" class="validate" />
              </td>
              <td>
                <input placeholder="First.Last@SignatureFD.com" id="email" type="email" class="validate" />
              </td>
              <td>
                <input id="startDate" type="date" class="validate" />
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a class="btn-flat waves-effect waves-blue">
                  <i class="fa fa-minus-square" aria-hidden="true"></i>
                </a>
              </td>
              <td>Alvin</td>
              <td>Alvin@SignatureFD.com</td>
              <td>9/7/2017</td>
              <td>71</td>
              <td>
                <a class="btn-flat btn-small waves-effect waves-blue">
                  <i class="fa fa-download fa-3x" aria-hidden="true"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a class="btn-flat btn-small waves-effect waves-blue">
                  <i class="fa fa-minus-square" aria-hidden="true"></i>
                </a>
              </td>
              <td>Alan</td>
              <td>Alan@SignatureFD.com</td>
              <td>2/29/2013</td>
              <td>16</td>
              <td>
                <a class="btn-flat btn-small waves-effect waves-blue">
                  <i class="fa fa-download fa-3x" aria-hidden="true"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a class="btn-flat btn-small waves-effect waves-blue">
                  <i class="fa fa-minus-square" aria-hidden="true"></i>
                </a>
              </td>
              <td>Jonathan</td>
              <td>Jonathan@SignatureFD.com</td>
              <td>11/7/1973</td>
              <td>100</td>
              <td>
                <a class="btn-flat btn-small waves-effect waves-blue">
                  <i class="fa fa-download fa-3x" aria-hidden="true"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Admin;