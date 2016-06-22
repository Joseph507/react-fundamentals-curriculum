var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var Router = ReactRouter.Router;
var Route  = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var browserHistory = ReactRouter.hashHistory;

var Main = require('../visuals/Main');
var Home = require('../visuals/HomeContainer');
var Forecast = require('../visuals/ForecastContainer');

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:city' component={Forecast} />
  </Route>
  </Router>
);
module.exports = routes;
