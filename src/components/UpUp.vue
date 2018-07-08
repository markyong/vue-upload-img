<template>
    <canvas id="upa"></canvas>
</template>
<script>
  export default{
    name:'UpUp',
    data(){
      return {
        can:null,
        ctx:null,
        x:0,
        y:0,
        num:0,
        cirList:[]
      }
    },
    mounted(){
      const self = this;
      this.init();
      this.drawCircle();
      window.onresize = function(){
        self.x = self.can.width = document.body.offsetWidth;
        self.y = self.can.height = document.body.offsetHeight;
      }
    },
    methods:{
      init(){
        this.can = document.getElementById('upa');
        this.x = this.can.width = document.body.clientWidth;
        this.y = this.can.height = document.body.clientHeight;
        this.num = Math.floor(this.x * ((Math.random() * 0.3) + 0.4));
        this.ctx = this.can.getContext('2d');
        for(let i = 0; i < this.num; i++){
          this.cirList.push(this.createCircle());
        }
      },
      createCircle(){
        return {
          x:Math.random()*this.x,
          y:Math.random()*100+this.y,
          alpha:Math.random()*0.7,
          radius:Math.random()*3.4,
          speed:Math.random()
        }
      },
      drawCircle(){
        this.ctx.clearRect(0,0,this.x,this.y);
        this.cirList.forEach((item,index)=>{
          if(item.alpha <= 0) {
            this.cirList[index] = this.createCircle();
          }
          item.alpha -= 0.001;
          this.ctx.beginPath();
          this.ctx.arc(item.x,item.y-=item.speed,item.radius,0,2*Math.PI);
          this.ctx.fillStyle = `rgba(255,255,255,${item.alpha})`
          this.ctx.fill();
        })
        requestAnimationFrame(this.drawCircle)
      }
    }
  }
</script>
<style scoped>
  canvas{
    display: block;
  }
</style>
