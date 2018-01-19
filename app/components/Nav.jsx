var React = require('react');
var {Link, IndexLink } = require('react-router');

var Nav = React.createClass({
    render: function(){
        return(
            <div>
                From Nav
                <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight:'bold'}}>Home</IndexLink>
                <Link to='/about'  activeClassName="active" activeStyle={{fontWeight:'bold'}}>about</Link>
                <Link to='/contact' activeClassName="active" activeStyle={{fontWeight:'bold'}}>contact</Link>
            </div>
        );
    }
});

module.exports = Nav;
