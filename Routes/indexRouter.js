const express = require('express');
const router = express.Router();
const tokenMiddleware = require('./middleware'); 

router.get('/', tokenMiddleware, (req, res) => {
  res.status(200).json({
    message:'Welcome to the homepage!'
  });
});

module.exports = router;
