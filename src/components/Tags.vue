<template>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      tags: this.tags
    }
  },
  methods: {
    fetchData () {
      axios.get('https://api.qprob.com/v2.0/filled_tags/3/').then(response => {
        this.tags = response.data
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