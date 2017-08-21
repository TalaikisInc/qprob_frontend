<template>
    <footer id="footer">
        <div class="footer-menu">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li><a :href="baseUrl+keyword+'/categories/'">Authors</a></li>
                    <li><a :href="baseUrl+keyword+'/tags/'">Tags</a></li>
                    <li><a :href="baseUrl+keyword+'/sentiment/'">Sentiment</a></li>
                </ul> 
            </div>
        </div>
        <div class="footer-widgets">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="widget widget-menu-3">
                            <h2>Categories</h2> 
                            <ul>
                                <li v-for="cat in categories"><a :href="baseUrl+'source/'+cat.slug+'/'">{{ cat.title }} [{{ cat.post_count }}]</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="widget widget-menu-4">
                            <h2>Tags</h2> 
                            <ul>
                                <li v-for="tag in tags"><a :href="baseUrl+'tag/'+tag.slug+'/'">{{ tag.title }} [{{ tag.post_count }}]</a></li>
                                <li><a :href="baseUrl+keyword+'tags/'"><strong>All post tags</strong></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom text-center">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="footer-logo">
                        <a :href="baseUrl"><img class="img-responsive" :src="imgBaseUrl + logo" :alt="logoAlt"></a>
                    </div>
                    <p><a :href="'https://twitter.com/' + twHandle"><i class="fa fa-twitter"></i></a> 
                    <a :href="'https://www.facebook.com/' + fbHandle"><i class="fa fa-facebook"></i></a></p>
                    <p>World news summarized.</p>
                    <address>
                        <p>&copy; 2017 <a :href="baseUrl">{{ siteName }}</a> | 
                        Developed by <a href="https://talaikis.com">Talaikis Inc.</a> | 
                        Runs on <a href="https://github.com/xenu256/QProb">QProb</a> v3.0</p>
                    </address>					
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import axios from 'axios'
import vars from '../variables.js'

export default {
  name: 'footer',
  data () {
    return {
      tags: this.tags,
      categories: this.categories,
      baseUrl: vars.baseUrl,
      logoAlt: vars.logoAlt,
      logo: vars.logo,
      keyword: vars.keyword,
      imgBaseUrl: vars.imgBaseUrl,
      twHandle: vars.twHandle,
      fbHandle: vars.fbHandle
    }
  },
  methods: {
    fetchTags () {
      axios.get('/top_tags/').then(response => {
        this.tags = response.data
      }).catch(e => {
        console.log(e)
      })
    },
    fetchCats () {
      axios.get('https://api.qprob.com/v2.0/top_cats/').then(response => {
        this.categories = response.data
      }).catch(e => {
        console.log(e)
      })
    }
  },
  mounted () {
    this.fetchTags()
    this.fetchCats()
  }
}
</script>

<style></style>