const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');

//Get All tweet
router.get('/', tweetController.getTweets);
router.get('/:userID', tweetController.getTweetsByUserID);
router.post('/', tweetController.createTweet);
router.delete('/:tweetID', tweetController.deleteTweet);

module.exports = router;
