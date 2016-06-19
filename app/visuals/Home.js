var React = require('react');
require('../styles/main.scss');

var styles = {
  title: {
    fontSize:'45px',
    color:'white',
    fontWeight:'100'
  }
};


var Home = React.createClass({

  render: function() {
    return (
        <div className="home col-sm-12">
          <h1 style={styles.title}>Enter a City and State</h1>
            <form>
                <div className="form-group">
                    <input className='form-control'
                        placeholder='Panama, Santiago' type='text'/>
                </div>
                <div className="form-group col-sm-12">
                    <button className="btn btn-block btn-success" type="submit">
                        Get Weather
                    </button>
                </div>
            </form>
        </div>
    );
  }

});

module.exports = Home;
