var React = require('react');
var Nav = require('Nav');
var Main = React.createClass({
  render: function (){
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 samll-centered"></div>
          {this.props.children}

        </div>
      </div>
    );
  }
});

module.exports = Main;
