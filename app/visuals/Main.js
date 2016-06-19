var React = require('react');

styles = {
  navbar:{
    display:'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    background:'rgba(252, 90, 44, 0.89)',
    color:'#fff',
    padding:'5px'
  },
  navtitle:{
    margin:0
  }

}


var Main = React.createClass({

  render: function() {
    return (
      <div className='main'>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">Some Clever Title</span>
            </div>
            <div className='collapse navbar-collapse'>
              <form className="navbar-form navbar-right" role="search">
                    <div className="form-group" style={{marginRigth: '5px'}}>
                        <input type="text" className="form-control" placeholder="Panama, Santiago" />
                    </div>
                    <button type="submit" className="btn btn-default btn-success">Get Weather</button>
              </form>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Main;
