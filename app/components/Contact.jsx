var React = require('react');
var ContactForm = require('ContactForm');
var Contact = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="text-center home-title">Contact With Me</h1>
        <ContactForm />
      </div>
    );
  }
});

module.exports = Contact;
