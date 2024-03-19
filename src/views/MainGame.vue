<template>
    <div class="backblack">
        <div class="overwrapbox">
             <div class="cube-wrapper" :style="cubewrapper">
             <div class="cube-front"><img src="../assets/img/zombie1.png" alt=""></div>
             <!-- <div class="cube-front-door"><img src="img/door.png" alt=""></div> -->
             <div class="cube-front1"><img src="../assets/img/zombie1.png" alt=""></div>
             <div class="cube-frontfull"></div>
             <!-- <div class="cube-back" :style="gunaa"><img src="../assets/img/gun.png" alt=""></div> -->
             <div class="cube-top"></div>
             <div class="cube-bottom"></div>
             <div class="cube-left"></div>
             <div class="cube-right"></div>
              </div>
                
         </div>
         <div class="boxwrap">
        <div class="upbox">
            <a href="#none" id="upbtn" @mousedown="upbtn">Up</a>
            <!-- <a href="#none" id="turnbtn">TURN</a> -->
        </div>
        <div class="threebox">
            <a href="#none" id="leftbtn" @mousedown="left">Left</a>
            <a href="#none" id="downbtn" @mousedown="downbtn">Down</a>
            <a href="#none" id="rightbtn" @mousedown="right">Right</a>
        </div>
    </div>
    </div>
</template>
<script>



export default {
  methods:{
    upbtn(){
        if(this.stage==0 &&  this.moving <1100 ){
            this.moving+=50
            console.log(this.gunaa, this.eta)
        }else if(this.stage==0 && this.moving == 1100){
            this.stage=1
            let quiz = prompt('2월 14일은 무슨날입니까?')
            console.log(quiz)
            if(quiz == '발렌타인데이'){
                this.quiz = true
                this.$store.commit('setuserpoint',50)
            }else{
                alert('당신은 솔로이군요? Game Over')
                this.$router.push('gameselect')
            }

        }else if(this.stage==1 && this.moving <2600 && this.quiz==true ){
            this.moving+=100
        }else if(this.moving ==2600){
            prompt('아직 미완성이다.')
        }
    },
    downbtn(){
        this.moving-=50
    },
    left(){
        if(this.moving<6700){
                if(this.leftright<70){
        this.leftright+=7}}
    },
    right(){
        if(this.moving<6700){
                if(this.leftright> -60){
        this.leftright-=7
                }}
    }
  },
  data(){
    return{
        leftright : 0,
        moving : 0,
        stage : 0,
        quiz : false

    }
  },
  computed:{
    cubewrapper (){
       return `transform: perspective(700px) rotateX(360deg) rotateY(360deg) translate3d(${this.leftright}px, 0px, ${this.moving}px);transform-origin: 50% 50% ${-this.moving}px`
  },

  }
}
</script>
<style scoped>
.backblack{
    background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            box-sizing: border-box;
}
.overwrapbox{
    --R: calc(pi * 2 / 360); /* pi is 3.141592653589793 */
    --angle: 90;
}
.cube-wrapper {
    --applyAngle: calc(var(--angle) * var(--R));
    width: 100vw;
    height: 100vh;
    transform-style: preserve-3d;
    transform-origin: 50% 50% 0px;
    transform: perspective(700px) rotateX(360deg) rotateY(360deg) translate3d(0px, 0px, 0px);
    position: relative;
    transition: 0.3s;
/*     
    left: calc(50%);
    top: calc(50%); */
}
.cube-wrapper > div {
	position: absolute;
    width: 100vw;
    height: 100vh;
    text-align: center;
    /* line-height: 100px; */
   	font-weight: bold;
    font-size: 20px;

}
.cube-frontfull {
	background-color:white;
 
    transform: translate3d(0, 49px,-5666px) matrix3d(150, 0, 0, 0, 0, 155, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4);
}
.cube-front {
    transform: translate3d(0, 49px,-1666px) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4);
}
.cube-front-door {
    transform: translate3d(0, 49px,-1666px) matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 7);
    display:flex;
    align-items: center;
    justify-content: center;
}
.cube-front-door img{
width: 100%;

}
.cube-front1 {
	/* background-color:white; */
 
    transform: translate3d(90px, 49px,-4666px) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4);
}
/* iframe{
    width: 100vw;
    height: 100vh;
} */
.cube-back {
   
    transition: 1 all;
    /* background-image:url(img/gun.png); */
    background-repeat: no-repeat;
    transform: rotateY(180deg) translate3d(-60px, 67px, -500px)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3)
}
.cube-back img{
    width: 300px;
    transform: rotateX(-45deg);
    object-fit: cover;

}
.cube-top {
    background-color : rgb(121, 121, 121);
    transform: rotateX(89deg) translate3d(0, 0, 120px) matrix(-1, 0, 0, 20, 0, 0);
}
.cube-bottom {
 	background-color: rgb(102, 16, 16);
    transform: rotateX(-88deg) translate3d(0, 0, 120px) matrix(-1, 0, 0, 20, 0, 0);
}
.cube-left {
    /* background-image: url(../assets/img/Untitled-1.png); */
     --s: 30px; /* control the size */
  
  --c:#333 20% 30%;
  background:
    linear-gradient(90deg,#0000 20%,var(--c),#0000 0),
    repeating-linear-gradient(0deg,var(--c),#D3643B 0 70%);
  background-size: var(--s) var(--s);
    transform: rotateY(-89deg) translate3d(0, 0, 150px) matrix(-12, 0, 0, 1, 0, 0);

}
.cube-right {
    /* //background-image: url(../assets/img/Untitled-1.png); */
     --s: 30px; /* control the size */
  
  --c:#333 20% 30%;
  background:
    linear-gradient(90deg,#0000 20%,var(--c),#0000 0),
    repeating-linear-gradient(0deg,var(--c),#D3643B 0 70%);
  background-size: var(--s) var(--s);
    transform: rotateY(89deg) translate3d(0, 0, 150px) matrix(-12, 0, 0, 1, 0, 0);;
}
 

.overwrapbox{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.modalbox{
    display: flex;
    flex-direction: row;
    position: absolute;
    top :50%;
    left:calc(50%)
}
a{
            text-decoration: none;
            color:black
        }
        .boxwrap{
    display: flex;
    flex-direction: column;
    width: 300px;
    /* height: 220px; */
    position: absolute;
    bottom: calc(25vh - 80px);
    left : -40px;
    align-items: center;
    gap: 5px;   
    box-sizing: border-box;
}

.threebox{display: flex; gap : 10px; box-sizing: border-box;} 
.boxwrap a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3em;
    border: 1px solid black;
    height: 3em;
    background-color: bisque;
 
    
}
.upbox{
    display: flex;
}
#turnbtn{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    left : 65px;
}

</style>
