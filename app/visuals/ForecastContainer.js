var React = require('react');
var PropTypes = React.PropTypes;
var helpers = require('../helpers/weatherHelpers');
var Results = require('../components/Results');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true
    };
  },
  componentDidMount: function() {
    var city = this.props.routeParams.city;
    helpers.getWeatherInfo(city).then(function () {

      this.setState({
        isLoading: false
      });

    }.bind(this));

  },
  render: function() {
    return (
      <Results isLoading={this.state.isLoading}>
      </Results>
    );
  }

});

module.exports = ForecastContainer;
