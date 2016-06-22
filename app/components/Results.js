var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('../components/Loading');

var Results = React.createClass({

  render: function() {
    if (this.props.isLoading === true)
    {
      return (
        <Loading />
      )
    }else {
      return (
        <div>Results</div>
      );
    }
  }

});

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
module.exports = Results;
