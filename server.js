let express = require('express');
let app = express();
app.get('/lab3', function(req, res) {
  let url = req.protocol + '://' + req.get('host') + req.originalUrl;
  let method = req.param('method');
  let x =  parseFloat(req.param('x'));
  let y =  parseFloat(req.param('y'));
  let result;
  let output;
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
      result = 'You need to put corrent input methods.';
      break;
  } 
  if(isNaN(result)) {
    output = 'You need to put corrent inputs.' + '\n';
  } else {
    output = x +" " + method+ " " +y + " = " + result +'\n'
  }
  res.write('Url: ' + url + '\n' + 
    'Output: ' + output);
  res.end();
});
app.listen(3000, function() {
  console.log('Connected, 3000 port');
});