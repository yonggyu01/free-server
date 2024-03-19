<script>
import {ref,relative,computed} from 'vue'
export default {
    setup(){
        let perspectiv = ref(10)
        const positongo =(num)=>{
            perspectiv.value = num
        }
        let first = computed(()=>{
            switch (perspectiv.value){
                case 10 : 
                    return {'transform' :  `perspective(${perspectiv.value}px) rotateX(360deg) rotateY(360deg) translate3d(0px, 10px, 78px)`}
                


                case 80 : 
                return { 'transform' : `perspective(429px) rotateX(364deg) rotateY(354deg) translate3d(0px, 42pxnpm, 1248px)` };
                
                case 500 : 
                return { 'transform' : `perspective(${perspectiv.value}px) rotateX(370deg) rotateY(375deg) translate3d(0px, 10px,1250px)` };
                break;
                case 3500 : 
                return { 'transform' : `perspective(${perspectiv.value}px) rotateX(360deg) rotateY(360deg) translate3d(0px, 10px, 6000px)` }
                break;

            }



           s
        })
        return{
            perspectiv,positongo,first
        }
    },
   
}
</script>
<template>
 <div class="backblack">
        <div class="btnslide">
            <ul>
                <li> <a href="#none" @click="positongo(10)"> 초기값</a></li>
                <li> <a href="#none" @click="positongo(80)"> 구매 1</a></li>
                <li> <a href="#none" @click="positongo(500)"> 구매 2</a></li>
                <li> <a href="#none" @click="positongo(3500)"> 구매 3</a></li>
            </ul> 
        </div>
        <div class="overwrapbox">
             <div class="cube-wrapper" :style="first">
             <div class="cube-front">
                <img src="../assets/img/books.png" alt="" @click="positongo(500)">
                <div>
                    <h1> 영어공부 한방에 책  </h1>
                    <p> 가격  :  5,000,000 원</p>
                    <button type="button">구매하기</button>
                </div>
            </div>
             <div class="cube-front-door" @click="positongo(3500)">
                <img src="../assets/img/books.png" alt="" @click="positongo(3500)">
                <div>
                    <h1> 재산탕진의 책 </h1>
                    <p> 가격  :  555,000,000 원</p>
                    <button type="button">구매하기</button>
                </div>
            </div>
             <div class="cube-front1">
                
               <div>
                <h1>
                    여기는 상품을 구매가 가능한 페이지입니다
                </h1>
                <br>
                <h3>아래 버튼을 누르면 구매가능한 상품으로 이동합니다</h3>
                <button type="button" @click="positongo(500)">구매하기</button>

               </div>
            
            </div>
             <div class="cube-frontfull"></div>
             <div class="cube-back"></div>
             <div class="cube-top"></div>
             <div class="cube-bottom"></div>
             <div class="cube-left">
                <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 100 100'>
                    <rect fill='#f29e03' width='100' height='100'/>
                <rect x='0' y='0' width='72' height='72' fill='#ffa61d'/></svg></div>
             <div class="cube-right"></div>
              </div>
                
         </div>
         
    </div>
</template>
<style scoped>
ul,li{
    list-style: none;
}
.btnslide {
    position: absolute; 
    top : 10vh;
    z-index: 5;
}
.btnslide ul{
    display:flex;
    gap: 20px
}
.backblack{
    background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
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
    transform: perspective(10px) rotateX(360deg) rotateY(360deg) translate3d(0px, 10px, 78px);
    position: relative;
    transition: 1s;
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
    transform: translate3d(0, 49px,-966px) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4);
    display: flex;
}
.cube-front>div{
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    justify-content: left;
}
.cube-front img{
    width: 70%;
   
}
.cube-front-door {
    transform: translate3d(0, 49px,-5344px) matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 10);
    display:flex;
    align-items: center;
    justify-content: center;
}
.cube-front-door img{
width: 100%;

}
.cube-front1 {
	/* background-color:white; */
 
    transform:translate3d(0px, 26px, -70px) matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 11);
}
.cube-front1>div{
    background-color: wheat;
}
.cube-front1 button{
    margin-top: 20px;
    font-size: 3em;
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
    background-color : rgb(255, 255, 255);
    transform: rotateX(89deg) translate3d(0, 0, 120px) matrix(-1, 0, 0, 20, 0, 0);
}
.cube-bottom {
 	background-color: rgb(102, 101, 16);
    transform: rotateX(-88deg) translate3d(0, 0, 120px) matrix(-1, 0, 0, 20, 0, 0);
}
.cube-left {
    background-color:white;
    transform: rotateY(-89deg) translate3d(0, 0, 150px) matrix(-12, 0, 0, 1, 0, 0);

}
.cube-right {
    background-color:white;
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
        
</style>