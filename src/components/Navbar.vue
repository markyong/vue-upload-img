<template>
  <div class="navbar">
    <ul>
      <li :class="{active:isActive===index}" v-for="(item,index) in navbarList" :key="index" @click="select(item,index)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'Navbar',
    data(){
      return {
        navbarList:[
          {path:'home',name:'首页'},
          {path:'about',name:'关于'},
          {path:'update',name:'更新'}
        ],
        isActive:0
      }
    },
    methods:{
      select(item,index){
        this.$router.push({path:item.path});
        this.isActive = index;
      }
    }
  }
</script>
<style scoped>
  .navbar{
    width: 100%;
    height: 47px;
    background: rgba(0,0,0,0.4);
  }
  .navbar ul {
    width: 100%;
    height: 47px;
    padding-left: 177px;
    font-size: 15px;
  }
  .navbar ul li {
    height: 47px;
    line-height: 47px;
    float: left;
    padding: 0 20px;
    cursor: pointer;
    margin: 0 10px;
  }
  .navbar ul li:hover{
    background: rgba(0,0,0,0.4);
    color: #fff;
  }
  .active {
    background: rgba(0,0,0,0.4);
    color: #fff;
  }
</style>
