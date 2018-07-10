<template>
  <transition name="message">
    <p v-if="messageShow" :class="type">{{message}}</p>
  </transition>
</template>
<script>
  export default{
    name:'Message',
    data(){
      return {
        messageShow:false,
        message:'',
        type:''
      }
    },
    mounted(){
      this.$root.Bus.$on('message',(data) =>{
        this.message = data.text;
        this.type = data.type;
        this.touch();
      });
    },
    methods:{
      touch(){
        this.messageShow = true;
        setTimeout(()=>{
          this.messageShow = false;
        },2700);
      }
    }
  }
</script>
<style scoped>
  p{
    width: 270px;
    height: 40px;
    background: red;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    border-radius: 4px;
    position: absolute;
    top:27px;
    left: 50%;
    z-index: 777;
    margin-left: -135px;
  }
  .message-enter-active,.message-leave-active{
    transition: all 0.7s ease;
  }
  .message-enter,.message-leave-to{
    transform: translateY(-47px);
    opacity: 0;
  }
  .success{
    background: #f0f9eb;
    color: #67c23a;
    border:1px solid #e1f3d8;
  }
  .warning{
    background: #fdf6ec;
    color: #e6a23c;
    border:1px solid #faecd8;
  }
</style>
