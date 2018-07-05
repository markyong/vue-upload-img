<template>
  <div class="tabs">
    <ul>
      <li :class="{active:isActive===index}" v-for="(item,index) in tabs" :key="index" @click="selectTab(index)">{{item}}</li>
    </ul>
    <div class="tabsData">
      <div v-show="index===isActive" v-for="(item,index) in tabsData" :key="index">{{item}}</div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'ImgUrl',
    data(){
      return {
        tabs:['URL','HTML','Markdown'],
        tabsData:['还没有上传图片...','还没有上传图片...','还没有上传图片...'],
        isActive:0
      }
    },
    methods:{
      selectTab(index){
        this.isActive = index;
      },
      formatUrl(val){
        let tabsArr = [
          val.url,
          `<img src= "${val.url}">`,
          `![](${val.url})`
        ];
        this.tabsData = tabsArr;
      }
    },
    mounted(){
      let self = this;
      this.$root.Bus.$on('sendUrl',function(data){
        self.formatUrl(data);
      });
    }
  }
</script>
<style scoped>
  .tabs{
    width: 100%;
    margin-top: 17px;
  }
  .tabs ul {
    height: 47px;
    border-bottom: 2px solid #999;
    font-family: Arial;
    color: #222;
  }
  .tabs li{
    height: 47px;
    line-height: 47px;
    float: left;
    margin: 0 17px;
    cursor: pointer;
  }
  .tabs li:first-child{
    margin-left: 0;
  }
  .tabs li:hover{
    color: #0D98FF;
  }
  .active{
    border-bottom: 2px solid #0D98FF;
    color: #0D98FF;
  }
  .tabsData{
    width: 100%;
    margin-top: 7px;
    border: 1px solid #999;
    padding: 10px 7px;
    color: #5e6d82;
  }
  .tabsData div{
    height: 25px;
    line-height: 25px;
  }
</style>
