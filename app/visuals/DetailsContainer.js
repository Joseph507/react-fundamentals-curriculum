var React = require('react');
var PropTypes = React.PropTypes;
var Details = require('../components/Details');

var DetailsContainer = React.createClass({

  render: function() {
    return (
      <Details city={this.props.location.state.city}/>
    );
  }

});

module.exports = DetailsContainer;
