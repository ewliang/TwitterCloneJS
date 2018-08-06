module.exports = {
  //Get Tweet
  getTweet: function(req, res) {
    res.status(200).json({
      message: "Welcome to the backend!"
    });
  }
}
