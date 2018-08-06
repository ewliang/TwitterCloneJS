<template>
  <div class = "tweet-container">
    <img src = "" class = "circular" alt = "ProfilePicture">
    <form class = "">
      <textarea class = "row tweet-textarea" placeholder = "What's happening?" rows = "5"></textarea>
      <div class = "row">
        <input type = "submit" class = "btn btn-primary" value = "Tweet">
      </div>
    </form>
  </div><!--end tweet-container-->
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      tweet: ''
    }
  },
  methods: {
    createTweet () {
      if(this.tweet.length > 280 || this.tweet.length == 0) {
        console.log('Invalid Tweet')
      } else {
        console.log('Valid Tweet')
      }
    }
  }
}

</script>

<style scoped>
.tweet-container {
  width: 100%;
  max-width: 100%;
}

.tweet-textarea {
  border: 1px solid #ABE6F8;
  border-radius: 5px;
}

.tweet-textarea:focus {
  border: 2px solid #ABE6F8;
}
</style>
