<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="bgCan">
      <up-up></up-up>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import UpUp from './components/UpUp.vue'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {
      Navbar,
      UpUp
    }
  }
</script>

<style>
  @import "./style/base.css";

  body {
    background: linear-gradient(to bottom, #ACCFC5, #E5C586);
  }

  #app {
    position: relative;
    height: 100%;
  }

  ul, li {
    list-style: none;
  }

  .container {
    /*background: #fff;*/
    margin-top: 37px;
  }
  .bgCan{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -7;
  }
</style>
