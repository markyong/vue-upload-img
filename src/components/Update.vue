<template>
  <div>
    <ul>
      <li v-for="item in updateData">{{item}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'UpDate',
    data(){
      return {
        updateData:[
          '2018-7-11 <=======> 新增拖拽功能 👈',
          '2018-7-8 <=======> 适配移动端 📱',
          '2018-7-6 <=======> 新增背景动画 🌷',
          '2018-7-5 <=======> 图床初始化 😐',
          ''
        ]
      }
    }
  }
</script>
<style scoped>
  div{
    width: 77%;
    margin: 0 auto;
    color: #5e6d82;
  }
  div ul{
  }
  ul li {
    cursor: pointer;
    border-bottom: 1px dashed #999;
    border-left: 4px solid #bbb;
    padding: 27px 10px 17px 17px;
    position: relative;
  }
  ul li::before{
    content:'';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #999;
    position: absolute;
    top: 33px;
    left: -5px;
  }
  ul li:hover{
    border-bottom: 1px dashed #32B3FF;
  }
  ul li:hover::before{
    background: #32B3FF;
  }
  ul li:last-child{
    border-bottom: none;
    height: 27px;
    padding: 0;
  }
  ul li:last-child::before{
    width: 0;
    height: 0;
  }
</style>
