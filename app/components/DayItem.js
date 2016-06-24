var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
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
  }
}

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div style={styles.dayContainer} onClick={props.onClickDetails}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  )
}


module.exports = DayItem;
