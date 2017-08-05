<template>

<router-view></router-view>

<!-- <posts-component></posts-component> -->
</template>

<script>
import vars from './variables.js'
import Posts from './components/Posts.vue'
import routes from './routes.js'
import Error404 from './components//Error404.vue'

export default {
  name: 'app',
  data () {
    return {
      baseUrl: vars.baseUrl,
      keyword: vars.keyword,
      imgBaseUrl: vars.imgBaseUrl,
      pageTitle: vars.siteTitle,
      currentRoute: window.location.pathname
    }
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Error404
    }
  },
  components: {
    'posts-component': Posts
  }
}
</script>

<style>
</style>
