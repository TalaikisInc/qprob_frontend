<template>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Categories',
  data () {
    return {
      categories: this.categories
    }
  },
  methods: {
    fetchData () {
      axios.get('/cats/0/').then(response => {
        this.categories = response.data
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