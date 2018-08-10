<template>
  <div class = "container-fluid">
    <div class = "">
      <div class = "sidebar">

      </div><!--end sidebar-->
      <main>
        <TweetInput></TweetInput>
        <Tweet></Tweet>
      </main>
    </div>
  </div><!--end container-fluid-->
</template>

<script>
import ProfileOverviewPublic from '~/components/ProfileOverview-Public.vue'
import TweetInput from '~/components/TweetInput.vue'
import Tweet from '~/components/Tweet.vue'

export default {
  components: {
    TweetInput, Tweet
  },
  async asyncData () {

  }
}
</script>

<style>
</style>
