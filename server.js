var express = require('express');
var bodyParser = require('body-parser');

//get mail body
var mailer = require('./app/server/mailer');


//create our app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000 ;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://'+req.hostname + req.url);
  }else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server Start on port'+ PORT);
})


app.post('/contact', (req, res) => {
  const { email = '', name = '', message = '' } = req.body

  mailer({ email, name, text: message })
  .then(() => {
    console.log(`Sent the message "${message}" from <${name}> ${email}.`);
    res.redirect('/#success');
  })
  .catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('/#error');
  })
});
