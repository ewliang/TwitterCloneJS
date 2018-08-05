<template>
  <div class = "tweet-container">
    <img src = "" class = "" alt = "">
    <div>
      <textarea placeholder = "What's happening?" rows = "5" maxlength = "280"></textarea>
      <div class = "">
        <input type = "submit" value = "Tweet">
      </div>
    </div>
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
      if(this.tweet.length > 280 || this.tweet.length == 0 || this.tweet == null) {
        console.log('Invalid Tweet')
      } else {
        console.log('Valid Tweet')
      }
    }
  }
}

</script>

<style>

</style>
