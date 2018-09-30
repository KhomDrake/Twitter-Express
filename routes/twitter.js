let express = require('express');
let router = express.Router();
let twit = require('twit');

router.post('/', function(req, res, next) {
  
  let Twitter = new twit({
    consumer_key:         req.body.consumer_key,
    consumer_secret:      req.body.consumer_secret,
    access_token:         req.body.access_token,
    access_token_secret: req.body.access_token_secret 
  });

  Twitter.post('statuses/update', {status : req.body.texto }, (err, data, response) => {
    if(err)
     {
        console.log(err);
     }
  });
  res.render('twit', req.body);
});

module.exports = router;
