<template>
  <div class = "container-fluid">
    <div>
      <div class = "sidebar">
      </div><!--end sidebar-->
      <main>
        <div v-for = "(tweet, index) in userTweets" v-bind:key = "index">
          <TweetComponent v-bind:tweet = tweet.tweet v-bind:author = tweet.author></TweetComponent>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TweetComponent from '~/components/Tweet.vue'

export default {
  async asyncData ({ params }) {
    let userTweets = await axios.get('http://localhost:4000/tweets/${params.username}')
    return {
      userTweets: userTweets.data
    }
  }
}
</script>

<style scoped>

</style>
