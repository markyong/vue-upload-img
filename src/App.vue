<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Navbar
    }
  }
</script>

<style>
  @import "./style/base.css";

  body {
    background: linear-gradient(to bottom, #ACCFC5, #E5C586);
  }

  #app {
  }

  ul, li {
    list-style: none;
  }

  .container {
    /*background: #fff;*/
    margin-top: 37px;
  }
</style>
