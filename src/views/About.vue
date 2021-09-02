<template>
    <div>
        <h3>About Task tracker</h3>
        <p>Version 1.0 by <span>prodev</span></p>
        <a href="https://prodev-portfolio.netlify.app">Visit website ❤</a>
        <router-link to="/">Go back</router-link>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    h1{
        color: #ff0000;
    }
    p>span{
        color: #ff0000;
    }
    a{
        display: block;
    }
</style>