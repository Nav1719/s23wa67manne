var express = require('express');
var router = express.Router();

let x;
let y;
let x1;
let y1;

router.get('/', function(req, res, next) {
   
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.floor(Math.random()*10);
  x1=Math.floor(Math.random()*10);
  y1=Math.floor(Math.random()*10)
let coshValue=Math.acosh(x);
let logValue=Math.log1p(y);
let tanValue=Math.tan(x1);
let sqrtValue=Math.sqrt(y1);
  res.send('Math.acosh() applied to '+x+' is ' +coshValue+"<br>" +'Math.log1p() applied to '+y+' is '+logValue+"<br>"+'Math.tan()  applied to '+x1+' is'+tanValue+"<br>"+'Math.sqrt() applied to '+y1+' is '+sqrtValue); 
}
else{

   x = req.query.x;
  let coshValue=Math.acosh(x);
let logValue=Math.log1p(y);
let tanValue=Math.tan(x1);
let sqrtValue=Math.sqrt(y1);
  res.send('Math.acosh() applied to '+x+' is ' +coshValue+"<br>" +'Math.log1p() applied to '+y+' is '+logValue+"<br>"+'Math.tan()  applied to '+x1+' is'+tanValue+"<br>"+'Math.sqrt() applied to '+y1+' is '+sqrtValue); 
}
});

module.exports = router;