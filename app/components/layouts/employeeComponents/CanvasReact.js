/**
 * Created by ryanrodwell on 7/10/17.
 */
var React = require("react");

var PulseFitness = require('../forms/PulseFitnessAgreement');

var CanvasReact = React.createClass({
    render: function(){
        return (
            <canvas id="canvas"></canvas>
        );
    }

});

module.exports = CanvasReact;