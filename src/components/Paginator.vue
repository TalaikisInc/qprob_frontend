<template>
<ul class="pagination">
  <li v-for="p in 250"><a :href="baseUrl+'page/'+p+'/'">{{ p }}</a></li>
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
  }
}
</script>

<style></style>