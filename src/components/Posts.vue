<script>
import axios from 'axios'
import vars from '../variables'

export default {
  data () {
    return {
      posts: this.posts,
      baseUrl: 'https://qprob.com/',
      pageTitle: vars.siteTitle
    }
  },
  methods: {
    fetchData (page) {
      axios.get('https://api.qprob.com/v2.0/posts/' + page).then(response => {
        this.posts = response.data
      }).catch(e => {
        console.log(e)
      })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style></style>