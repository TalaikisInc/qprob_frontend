<template>
    <footer id="footer">
        <div class="footer-menu">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li><a :href="$data.baseUrl">Home</a></li>
                    <li><a :href="$data.baseUrl+$data.keyword+'/categories/'">Authors</a></li>
                    <li><a :href="$data.baseUrl+$data.keyword+'/tags/'">Tags</a></li>
                    <li><a href="/">Add source</a></li>
                    <li><a href="/">Contact Us</a></li>
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
                                <li v-for="cat in $data.categories"><a :href="$data.baseUrl+'source/'+cat.slug+'/'">{{ cat.title }} [{{ cat.post_count }}]</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="widget widget-menu-4">
                            <h2>Tags</h2> 
                            <ul>
                                <li v-for="tag in $data.tags"><a :href="$data.baseUrl+'tag/'+tag.slug+'/'">{{ tag.title }} [{{ tag.post_count }}]</a></li>
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
                        <a href="index.html"><img class="img-responsive" src="static/images/footer-logo.png" :alt="$data.logoAlt"></a>
                    </div>
                    <p>World news summarized.</p>
                    <address>
                        <p>&copy; 2017 <a :href="$data.baseUrl">{{ $data.siteName }}</a></p>
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
      logoUrl: vars.logoUrl,
      keyword: vars.keyword,
      pageTitle: vars.siteTitle
    }
  },
  methods: {
    fetchTags () {
      axios.get('https://api.qprob.com/v2.0/top_tags/').then(response => {
        this.tags = response.data
        console.log(this.posts)
      }).catch(e => {
        console.log(e)
      })
    },
    fetchCats () {
      axios.get('https://api.qprob.com/v2.0/top_cats/').then(response => {
        this.categories = response.data.slice(1, 22)
        console.log(this.posts)
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