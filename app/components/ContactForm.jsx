var React = require('react');
var ErrorModal = require('ErrorModal');

var ContactForm = React.createClass({
  getInitialState: function (){
    return{errorMessage:undefined, successMessage: undefined};
  },
  componentDidMount: function(){
    var str = window.location.hash;
    var encodedLocation = encodeURIComponent(str);
    var res = encodedLocation.match(/success?/g);
    var res2 = encodedLocation.match(/error?/g);
    console.log("..........",encodedLocation.match(/success?/g));
    if (res && res.length > 0) {
      if (res[0] === "success") {
        //console.log("Success");
        this.setState({
              successMessage: "Your message has been sent!"
            });
        window.location.hash = '#/contact';
      }
    }
    if (res2 && res2.length > 0) {
      if (res2[0] === "error") {
        //console.log("error");
        this.setState({
              errorMessage: "Your message not sent!"
            });
        window.location.hash = '#/contact';
      }
    }

  },
  render: function(){
     var {errorMessage, successMessage} = this.state;
    function errorModel(){
      if (typeof errorMessage === 'string') {
        return(
          <ErrorModal title="Error" message={errorMessage}/>
        )
      }
    }
    function successModel(){
      console.log(errorMessage, successMessage);
      if (typeof successMessage === 'string') {
        console.log("test", successMessage);
        return(
          <ErrorModal title="Success" message={successMessage}/>
        )
      }
    }
    return (
      <div>
        <form method="POST" action="/contact" >
          <label>
            Full Name :
            <div className="input-group">
              <input ref="full_name" name="name" className="input-group-field" id="exampleNumberInput1" type="text" placeholder="Write your Full Name" required />
            </div>
            <span className="form-error" data-form-error-for="exampleNumberInput1">Name is required.</span>
          </label>

          <label>
            E-mail :
            <div className="input-group">
              <span className="input-group-label">@</span>
              <input ref="email" name="email" className="input-group-field" id="exampleNumberInput2" type="email" placeholder="example@gmail.com" required />
            </div>
            <span className="form-error" data-form-error-for="exampleNumberInput2">Email is required.</span>
          </label>

          <label>
            Message :
            <div className="input-group">
              <textarea ref="message" name="message" className="input-group-field" rows='3' id="exampleNumberInput3" type="text" placeholder="Write your message" required />
            </div>
            <span className="form-error" data-form-error-for="exampleNumberInput3">Message is required.</span>
          </label>
          <button className="button expanded" type="submit" value="Submit">Submit</button>
        </form>
        {errorModel()}
        {successModel()}
      </div>
    );
  }
});

module.exports = ContactForm;
