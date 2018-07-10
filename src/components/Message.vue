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
        },1700);
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
    border-radius: 4px;
    position: absolute;
    top:27px;
    left: 50%;
    margin-left: -135px;
  }
  .message-enter-active{
    transition: all 0.7s ease;
  }
  .message-leave-active{
    transition: all .7s ease;
  }
  .message-enter,.message-leave-to{
    transform: translateY(-47px);
    opacity: 0;
  }
  .success{
    background: #F0F9EA;
    color:#38C546;
    border:1px solid #DFF4D6;
  }
  .warning{
    background: #FFF6EA;
    color: #F59D37;
    border:1px solid #FEECD5;
  }
</style>
