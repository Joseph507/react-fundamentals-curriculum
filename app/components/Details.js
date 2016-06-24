var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('../components/Loading');
var utils = require('../helpers/utils');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35,
    cursor:'pointer'
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  },
  descriptionContainer: {
  fontSize: 34,
  fontWeight: 100,
  maxWidth: 400,
  margin: '0 auto',
  textAlign: 'center',
}
}

function DayItem (props) {
  console.log(props);
  var date = getDate(props.dt);
  var icon = props.weather[0].icon;
  return (
    <div style={styles.dayContainer} onClick={props.onClickDetails}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
      <div style={styles.descriptionContainer}>
        <p>{props.city}</p>
        <p>{props.weather[0].description}</p>
        <p>min temp: {convertTemp(props.temp.min)} degrees</p>
        <p>max temp: {convertTemp(props.temp.max)} degrees</p>
        <p>humidity: {props.humidity}</p>
      </div>
    </div>
  )
}

var Details = React.createClass({

  render: function() {
    return DayItem(this.props.city)
  }

});

// Details.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   city: PropTypes.string.isRequired,
//   forecast: PropTypes.object.isRequired,
//   onClickDetails: PropTypes.func.isRequired
// }
module.exports = Details;
