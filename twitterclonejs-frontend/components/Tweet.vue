<template>
  <div class = "tweet-container">
    <img src = "" class = "circular" alt = "">
    <div>
      <div>
        <strong class = "name">{{ author-name }}</strong>
        <p class = "username">{{ author-handle }}</p>
      </div>
      <div>
        <p class = "tweet-content">
          {{ tweet-content }}
        </p>
      </div>
      <ul class = "">
        <li><a href = ""><i class = "fa fa-heart-o"></i> 0 </a></li>
      </ul>
    </div>
  </div><!--end tweet-container-->
</template>

<script>

export default {
  props: ['author-name', 'author-handle', 'tweet-content']
}

</script>

<style>

</style>
