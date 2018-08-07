var Tweet = require('../models/Tweet');

module.exports = {
  getTweets: function(req, res) {
    Tweet.find({}, (err, data) => {
      if(err) {
        res.status(404).json({
          message: err
        });
      } else {
        if(data == null) {
          res.status(400).json({
            message: "No tweets were found."
          });
        } else {
          res.status(200).json(data);
        }
      }
    });
  },

  getTweetsByUserID: function(req, res) {
    Tweet.find({}, (err, data) => {
      if(err) {
        res.status(404).json({
          message: err
        });
      } else {
        if(data == null) {
          res.status(400).json({
            message: "No tweets were found."
          });
        } else {
          res.status(200).json(data);
        }
      }
    });
  },

  createTweet: function(req, res) {
    var newTweetData = new Tweet({

    });
  },

  deleteTweet: function(req, res) {
    Tweet.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
      if(err) {
        console.error(err);
        res.status(404).json({
          message: err
        });
      } else {
        if(data == null) {
          res.status(204).json({
            message: "Failed to delete the requested tweet. The tweet was not found."
          });
        } else {
          res.status(200).json(data);
        }
      }
    });
  }
}
