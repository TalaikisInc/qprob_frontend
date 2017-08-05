<template>
<div>
  <header-component></header-component>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-sm-8">
          <div class="tr-content">
            <div class="tr-ad">
              <a href="#"><img class="img-responsive" src="static/images/advertise/1.jpg" alt="Image"></a>
          </div>

          <div class="tr-section bg-transparent">
            <div class="section-title">
              <h1><span><a href="#"><!-- Section title --></a></span></h1>
            </div>
            <div class="row" v-for="chunk in chunkPosts">
              <div class="col-md-6 medium-post" v-for="post in chunk">
                <div class="tr-post">
                  <div class="entry-header">
                    <div class="entry-thumbnail" v-if="post.image">
                      <a :href="$data.baseUrl+$data.keyword+'/'+post.category_id.Slug+'/'">
                      <img class="img-responsive" :src="$data.imgBaseUrl + post.image" :alt="post.title"></a>
                    </div>
                  </div>
                  <div class="post-content">
                    <div class="author">
                      <a :href="$data.baseUrl+$data.keyword+'/'+post.category_id.Slug+'/'">
                      <img class="img-responsive img-circle" v-if="post.category_id.Thumbnail" :src="$data.imgBaseUrl+post.category_id.Thumbnail" :alt="post.category_id.Title"></a>
                    </div>
                    <div class="entry-meta">
                      <ul>
                        <li>By <a :href="$data.baseUrl+$data.keyword+'/'+post.category_id.Slug+'/'">{{ post.category_id.Title }}</a></li>
                        <li>{{ post.date | formatDate }}</li>
                      </ul>
                    </div>
                    <h2 class="entry-title">
                    <a :href="$data.baseUrl+post.slug+'/'">{{ post.title }}</a>
                    </h2><br /><div v-if="post.sentiment">[{{ post.sentiment }}]</div>
                    <p c-if="post.summary">{{ post.summary }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-4 tr-sidebar tr-sticky">
        <div class="theiaStickySidebar">
          <div class="tr-section tr-widget tr-ad ad-before">
            <a href="#"><img class="img-responsive" src="static/images/advertise/2.jpg" alt="Image"></a>
          </div>
          <div class="tr-section tr-widget tr-ad ad-before">
            <a href="#"><img class="img-responsive" src="static/images/advertise/2.jpg" alt="Image"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
<footer-component></footer-component>
</div>
</template>

<script>
import axios from 'axios'
import vars from './variables.js'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import chunk from './chunk'

export default {
  name: 'app',
  data () {
    return {
      posts: this.posts,
      baseUrl: vars.baseUrl,
      keyword: vars.keyword,
      imgBaseUrl: vars.imgBaseUrl,
      pageTitle: vars.siteTitle
    }
  },
  methods: {
    fetchData () {
      axios.get('https://api.qprob.com/v2.0/posts/0/').then(response => {
        this.posts = response.data
        console.log(this.posts)
      }).catch(e => {
        console.log(e)
      })
    }
  },
  components: {
    'header-component': Header,
    'footer-component': Footer
  },
  computed: {
    chunkPosts () {
      return chunk(this.posts, 2)
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style>
</style>
