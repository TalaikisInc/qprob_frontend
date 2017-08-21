<template>
<ul class="pagination">
  <li v-for="p in pages"><a :href="'/page/' + p + '/'">{{ p }}</a></li>
</ul>
</template>

<script>
import vars from '../variables.js'

export default {
  name: 'paginator',
  data () {
    return {
      baseUrl: vars.baseUrl
    }
  },
  props: {
    pages: {
      type: Number,
      required: true
    }
  }
}
</script>

<style></style>