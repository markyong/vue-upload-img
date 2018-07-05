<template>
  <div class="home">
    <upload></upload>
    <ImgUrl></ImgUrl>
  </div>
</template>
<script>
  import Upload from './Upload.vue'
  import ImgUrl from './ImgUrl.vue'
  export default{
    name:'Home',
    components:{
      Upload,
      ImgUrl
    }
  }
</script>
<style scoped>
  .home{
    width: 77%;
    margin: 0 auto;
  }
</style>
