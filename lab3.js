/** Created by Junghwan Yang on 1/25/2017. ...*/

//dependencies
let express = require('express');
let app = express();

//get 3 parameters; method, x, y to calculate
app.get('/lab3', function(req, res) {
  let url = req.protocol + '://' + req.get('host') + req.originalUrl;
  let method = req.param('method');
  let x =  parseFloat(req.param('x'));
  let y =  parseFloat(req.param('y'));
  let result;
  let output;
  //depending on values and method, save different outputs
  switch(method) {
    case('add'):
      method = '+';
      result = x+y
      break;
    case('subtract'):
      method = '-';
      result = x-y
      break;
    case('multiply'):
      method = '*';
      result = x*y
      break;
    case('divide'):
      method = '/';
      result = x/y
      break;
    default:
      method = 'wrong';
      result = 'You need to input corrent methods.';
      break;
  } 
  if(method != 'wrong' && isNaN(result)) {
    output = 'You need to input corrent values.' + '\n';
  } else if(method == 'wrong') {
    output = result;
  } else {
    output = x +" " + method+ " " +y + " = " + result +'\n'
  }

  //show the url and output
  res.write('Url: ' + url + '\n' + 
    'Output: ' + output);
  res.end();
});

//start the server on port 3000
app.listen(3000, function() {
  console.log('Connected, 3000 port');
});