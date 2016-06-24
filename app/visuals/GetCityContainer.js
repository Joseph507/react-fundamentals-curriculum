var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  contextTypes:{
      router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function () {
    var city = this.state.city;
    this.context.router.push({
              pathname: '/forecast/'+city
    });
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetCityContainer;
