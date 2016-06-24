var React = require('react');
var PropTypes = React.PropTypes;
var helpers = require('../helpers/weatherHelpers');
var Results = require('../components/Results');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      forecastData: {}
    };
  },
  contextTypes:{
      router: React.PropTypes.object.isRequired
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest: function (city) {
    helpers.getForcast(city)
      .then(function (forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      }.bind(this));
  },
  handleDetails: function (data) {
    var city = this.props.routeParams.city;
    this.context.router.push({
              pathname: '/details/'+city, 
              state: {
                city: data
              }
          });
  },
  render: function() {
    return (
      <Results
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        onClickDetails={this.handleDetails}
        forecast={this.state.forecastData}>
      </Results>
    );
  }

});

module.exports = ForecastContainer;
