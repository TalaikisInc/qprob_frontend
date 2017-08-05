<template>
<div class="error-page text-center">
    <div class="tr-section tr-section-padding">
        <div class="error-page-content">
            <div class="logo text-center">
                <a class="navbar-brand" href="index.html"><img class="img-responsive" v-bind:src="vars.logoUrl" v-bind:alt="cars.logoAlt"></a>
            </div>
            <div class="not-found">
                <h1>404</h1>
                <p>Page Not Found</p>
                <a href="index.html" class="btn btn-primary">Back to Home</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
</style>