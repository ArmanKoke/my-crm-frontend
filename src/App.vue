<template>
  <div id="app">
    <Header/>
    <Body msg="Oh welcome officer!"/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Body from './components/Body.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Body,
      Footer,
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
