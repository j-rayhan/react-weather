var React = require('react');
var ContactForm = require('ContactForm');
var Contact = React.createClass({
  render: function(){
    return (
      <div>
        <h2 className="text-center home-title">Contact With Me</h2>
        <ContactForm />
      </div>
    );
  }
});

module.exports = Contact;
