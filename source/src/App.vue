<template>
  <div id="app">
    <Header/>
    <Banner/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'

export default {
  name: 'app',
  components: {
    Banner,
    Header,
    Footer,
    Content
  }
}
</script>

<style>
</style>