<template>
  <div class="uploadContainer">
    <div class="showImg">
      <span class="initText" v-if="showInit">请选择要上传的图片</span>
      <img :src="item.src" alt="" v-for="(item,index) in imgList" :key="index" >
    </div>
    <div class="upLoad">
      <div class="imgName">
        <span v-for="(item,index) in imgList" :key="index">{{item.name}}</span>
      </div>
      <input type="file" id="upLoadImg" @change="loadImg($event)" style="display: none">
      <span class="btn">
        <button @click="deleteImg" v-show="!showInit">删除</button>
        <button v-show="!showInit" @click="uploadImg">上传</button>
        <button @click="select">选择</button>
      </span>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  export default {
    name:'Upload',
    data(){
      return {
        imgList:[],
        showInit:true
      }
    },
    methods:{
      select(){
        document.getElementById('upLoadImg').click();
      },
      loadImg(e){
        const self = this;
        if(!e.target.files[0]) return;
        self.imgList.pop();
        if(e.target.files[0].type.indexOf('image') === -1){
          alert('请上传图片');
          return;
        }
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          file.src = this.result;
          self.imgList.push(file);
          self.showInit = false;
        }
      },
      deleteImg(){
        this.imgList.pop();
        this.showInit = true;
      },
      uploadImg(){
        axios.post('http://localhost:3000/uploadImg',{src:this.imgList[0].src,name:this.imgList[0].name}).then((response) => {
          alert('上传成功');
          this.$root.Bus.$emit('sendUrl',response.data);
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  }
</script>
<style scoped>
  .uploadContainer{
    width: 100%;
  }
  .showImg{
    height: 297px;
    border: 1px dashed #dddee1;
    margin-bottom: 7px;
    padding: 25px;
    border-radius: 3px;
    width:100%;
  }
  .showImg:hover{
    border: 1px dashed #0D98FF;
  }
  .showImg img{
    max-height: 247px;
    max-width: 100%;
    box-shadow: 2px 2px 10px #000;
  }
  .showImg .initText{
    font-size: 27px;
    width: 100%;
    height: 100%;
    display: inline-block;
    text-align: center;
    line-height: 247px;
    color: #aaa;
  }
  .upLoad {
    width: 100%;
    height: 47px;
    border: 1px solid #ccc;
    position: relative;
  }
  .upLoad:hover{
    border: 1px dashed #0D98FF;
  }
  .upLoad .btn{
    position: absolute;
    top: -1px;
    right: -1px;
  }
  .upLoad button{
    width: 97px;
    height: 47px;
    background: #0D98FF;
    border: 0 none;
    outline-style: none;
    cursor: pointer;
    font: 400 15px/47px 'microsoft yahei';
    color: #fff;
    float: left;
  }
  .upLoad button:hover{
    background: #32B3FF;
  }
  .upLoad button:first-child{
    background: #909399;
  }
  .upLoad button:first-child:hover{
    background: #A7A8A6;
  }
  .upLoad .imgName{
    height: 47px;
    line-height: 47px;
    padding: 0 10px;
    color: #3c3c3c;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    .uploadContainer{
      margin-bottom: 47px;
    }
    .showImg {
      height: 177px;
      padding: 17px;
    }
    .showImg img{
      max-height: 140px;
    }
    .showImg .initText{
      font-size: 17px;
      line-height: 143px;
    }
    .upLoad .btn{
      top: 46px;
    }
    .upLoad .btn button{
      width: 77px;
    }
  }
</style>
