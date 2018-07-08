<template>
  <nav>
    <button @click="showNav">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <transition name="nav">
      <ul v-show="navToggle" :class="{navActive:isNavActive}">
        <li :class="{active:isActive===index}" v-for="(item,index) in navbarList" :key="index" @click="select(item,index)">{{item.name}}</li>
      </ul>
    </transition>
  </nav>
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
        isActive:0,
        navToggle:false,
        isNavActive:false
      }
    },
    methods:{
      select(item,index){
        this.$router.push({path:item.path});
        this.isActive = index;
      },
      showNav(){
        this.navToggle = !this.navToggle;
        this.isNavActive = !this.isNavActive;
        console.log(this.navToggle);
      }
    }
  }
</script>
<style scoped>
  nav{
    width: 100%;
    height: 47px;
    background: rgba(0,0,0,0.4);

  }
  nav button {
    border: 0 none;
    outline-style: none;
    background: transparent;
    cursor: pointer;
    display: none;
    height: 47px;
    margin-left: 14px;
  }
  nav button span{
    display: block;
    width: 22px;
    height: 2px;
    background: #555;
    border-radius: 1px;
    margin-bottom: 4px;
  }
  nav ul {
    width: 100%;
    height: 47px;
    padding-left: 177px;
    font-size: 15px;
    display: block !important;
    z-index: 77777;
  }
  nav ul li {
    height: 47px;
    line-height: 47px;
    float: left;
    padding: 0 20px;
    cursor: pointer;
    margin: 0 10px;
  }
  nav ul li:hover{
    background: rgba(0,0,0,0.4);
    color: #fff;
  }
  .active {
    background: rgba(0,0,0,0.4);
    color: #fff;
  }
  @media (max-width: 768px){
    nav button{
      display: block;
    }
    nav ul {
      padding-left: 0px;
      height: auto;
      background: rgba(0,0,0,0.4);
      display: none !important;
      width: 100%;
      margin: 0 auto;
      position: relative;
    }
    nav ul li{
      width: 77%;
      float: none;
      padding: 0;
      margin: 0;
      margin-left: 17px;
      padding-left: 7px;
      height: 47px;
    }
    nav ul li:hover{
      background: none;
      border-bottom: 2px solid rgba(0,0,0,0.4);
    }
    .navActive{
      display: block !important;
    }
    .active{
      background: none;
    }
    .nav-enter-active,.nav-leave-active{
      transition: opacity 0.7s ease;
    }
    .nav-enter,.nav-leave-to{
      opacity: 0;
    }
  }
</style>
