var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var Router = ReactRouter.Router;
var Route  = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var browserHistory = ReactRouter.browserHistory;

var Main = require('../visuals/Main');

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
  </Route>
  </Router>
);
module.exports = routes;
