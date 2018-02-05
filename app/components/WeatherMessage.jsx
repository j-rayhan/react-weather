var React = require('react');
var WeatherMessage = React.createClass({
  render: function(){
    var {temp, location} = this.props;
    return (
      <div  className="text-center">
        <h3>It's it {temp}°F in {location}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
