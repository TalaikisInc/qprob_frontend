<template>
<div>
    <header-component></header-component>
        <div class="error-page text-center">
            <div class="tr-section tr-section-padding">
                <div class="error-page-content">
                    <div class="logo text-center">
                        <a class="navbar-brand" :href="baseUrl"><img class="img-responsive" v-bind:src="baseUrl+logoUrl" v-bind:alt="logoAlt"></a>
                    </div>
                    <div class="not-found">
                        <h1>404</h1>
                        <p>Page Not Found</p>
                        <a :href="baseUrl">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    <footer-component></footer-component>
</div>
</template>

<script>
import vars from '../variables.js'

export default {
  name: 'error',
  data () {
    return {
      baseUrl: vars.baseUrl,
      logoUrl: vars.logoUrl,
      logoAlt: vars.logoAlt
    }
  }
}
</script>

<style>
</style>