const { resolveInclude } = require('ejs');
const express = require('express');

const router = express.Router();


router.get('/', async (req, res, next) => {
    try{
      res.render('search');
  
    }catch(err){
      console.log({err})
  }
});

router.post('/', async (req, res, next) => {
    try{
      res.send("ok");
  
    }catch(err){
      console.log({err})
  }
});


module.exports = router;
