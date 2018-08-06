const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');

//Get All tweet
router.get('/', tweetController.gettweet);

module.exports = router;
