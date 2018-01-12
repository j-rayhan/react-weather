var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Rayhan',
  location: 'Dhaka'
};

var objTwo = {
  age: 25,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>REact Weathere app</h1>, document.getElementById('app')
);
