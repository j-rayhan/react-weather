var React = require('react');
var {Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var locationName = this.refs.location.value;
    alert(locationName);
    if (locationName.length > 0) {
      this.refs.location.value = '';
    //  this.props.onSearch(locationName);
    }
  },
    render: function(){
        return(
          <div className="top-bar" id="example-menu">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">React Weather App</li>
                <li>
                  <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight:'bold'}}>Home</IndexLink>

                </li>
                <li>
                  <Link to='/about'  activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>

                </li>
                <li>
                  <Link to='/example' activeClassName="active" activeStyle={{fontWeight:'bold'}}>Example</Link>

                </li>
                <li>
                  <Link to='/contact' activeClassName="active" activeStyle={{fontWeight:'bold'}}>Contact</Link>

                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <form onSubmit={this.onSearch}>
                <ul className="menu">
                  <li><input type="search" ref="location" placeholder="Search Weather by city"/></li>
                  <li><button type="submit" className="button">Get Weather</button></li>
                </ul>
              </form>
            </div>
          </div>
        );
    }
});


module.exports = Nav;
