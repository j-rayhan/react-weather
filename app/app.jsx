var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Contact = require('Contact');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='about' component={About}/>
      <Route path='contact' component={Contact}/>
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
