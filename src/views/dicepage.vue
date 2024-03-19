<template>
    <a href="#none" @click="movemroll" style="position: fixed;top:0;left:10px;z-index: 50    ;">이동버qgqgqg튼</a>
  <div :class="rotateclass" ref="mroll">
    <div class="cube-front">
        <!-- <dicepagemenu class="dicecenter"></dicepagemenu> -->
    </div>
    <div class="cube-back"></div>
    <div class="cube-top"></div>
    <div class="cube-bottom"></div>
    <div class="cube-left">
        <h1>여기에 구매페이지 구성하려고요</h1>
        <p>페이지로 채워지면 나름 기발할듯??</p>
        <div style="width:700px;height: 300px;overflow: hidden;">
        <ul style="display: flex;gap:10px; width: 3000px;">
            <li v-for="item in xrc" :key="item.id" ref="movingli">
                <img :src="item.img" alt="" class="myimg">
            </li>
        </ul>
        </div>
        <a href="#none" @click="movingleft_side">사진 옆으로 미는 버튼임</a>
    </div>
    <div class="cube-right"></div>

</div>
<div class="navifixed">
    <button @click="rotatebtn('front')">정면보기</button>
    <button @click="rotatebtn('top')">윗면보기</button>
    <button @click="rotatebtn('buttom')">아래보기</button>
    <button @click="rotatebtn('left')">왼쪽보기</button>
    <button @click="rotatebtn('right')">오른쪽보기</button>
    <button @click="rotatebtn('back')">뒷면</button>
</div>
</template>

<script>
import {ref,reactive, computed} from 'vue'
// import dicepagemenu from './dicemenupage.vue'
export default {
    setup(){
        const mroll = ref(null)
        const movingli = ref([])
        const front=false
        const top=false
        const left=false
        const right=false
        const buttom=false
        const back=false
        const xrc = [{
  img : require('../assets/img/baby/KakaoTalk_20240124_162556118_01.jpg'),
  title : '간다11'
}
,
{img :  require('../assets/img/baby/KakaoTalk_20240124_162556118_02.jpg'),
  title : '간다22'
}
,
{img :  require('../assets/img/baby/KakaoTalk_20240124_162556118_03.jpg'),
  title : '간다33'
}
,
{img :  require('../assets/img/baby/KakaoTalk_20240124_162556118_04.jpg'),
  title : '간다44'
}
,
{img :  require('../assets/img/baby/KakaoTalk_20240124_162556118_05.jpg'),
  title : '간다55'
}
,
{img :  require('../assets/img/baby/KakaoTalk_20240124_162556118_06.jpg'),
  title : '간다66'
}
,
{img :  require('../assets/img/baby/KakaoTalk_20240124_162556118_07.jpg'),
  title : '간다77'
}
,
{img :  require('../assets/img/baby/KakaoTalk_20240124_162556118_08.jpg'),
  title : '간다77'
}
,
{img :  require('../assets/img/baby/KakaoTalk_20240124_162556118_09.jpg'),
  title : '간다77'
}
,
{img :  require('../assets/img/baby/KakaoTalk_20240124_162556118_10.jpg'),
  title : '간다77'
}
,
{img :  require('../assets/img/baby/KakaoTalk_20240124_162556118_11.jpg'),
  title : '간다77'
}
]
        const direction1 = reactive({
            front,top,left,right,buttom,back
        })
        const rotateclass=computed(()=>{
            return {'cube-wrapper':true ,'front' : direction1.front ,'top' :direction1.top, 'left':direction1.left,'right':direction1.right, 'back':direction1.back, 'buttom' :direction1.buttom }
        })
        let removeclass=['front','top','left','right','buttom','back']    
   const rotatebtn =(direction)=>{
    console.log(direction)
    for(let x = 0 ; x < removeclass.length ; x++){
        if(direction == removeclass[x]){
            direction1[direction] = !direction1[direction]

        }else{
           direction1[ removeclass[x]] = false
    
        }
    }
    }
    let linum =0
    const movingleft_side=()=>{
        console.log(movingli)
        movingli.value[linum%xrc.length].scrollIntoView({behavior : 'smooth',
        block:'nearest',
        inline : 'start'

        })
        linum++
    }
     const movemroll = ()=>{
        mroll.value?.scrollIntoView({behavior : 'smooth',
        // block:'end',
        inline : 'center'

        })
     }      
    return {
        direction1,rotatebtn,rotateclass,xrc,movingli,movingleft_side,mroll,movemroll
    }
},
// components:{
//     dicepagemenu
// }

}
</script>

<style scoped>
ul,li{
    list-style: none;
}
.dicecenter{
    transform: translate(50% ,10%);
}
.navifixed{
    position: absolute;
    top:80px;
    left:50%;
    transform: translateX(-30%);

}

.cube-wrapper {
    --R: calc(pi * 2 / 360); /* pi is 3.141592653589793 */
    --angle: 45;
    --applyAngle: calc(var(--angle) * var(--R));
    width: 800px;
    height: 800px;
   
    transform-style: preserve-3d;
    transform: perspective(2700px) rotateX(-30deg) rotateY(45deg) scale3d(.3, .3, 0.3);
    position: relative;
    left: calc(50vw - 400px);
    top: calc(50vh - 400px);
    transition: 0.8s linear;
}
/* .cube-wrapper:hover{
    transform: perspective(700px) rotateX(-30deg) rotateY(45deg) matrix3d(
    		1, 0, 0, 0, 
        	0, cos(var(--applyAngle)), sin(var(--applyAngle)), 0,
        	0, sin(var(--applyAngle) * -1), cos(var(--applyAngle)), 0,
        	0, 0, 0, 1   
    	);
} */

.cube-wrapper.top {
    transform: perspective(3200px) rotateX(-90deg) rotateY(-45deg) 
    matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 );
    
}
.cube-wrapper.front{
    transform: perspective(3200px) rotateX(0deg) rotateY(-45deg) 
    matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 );

}
.cube-wrapper.left{
    transform: perspective(3200px) rotateX(0deg) rotateY(45deg) 
    matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 );

}
.cube-wrapper.right{
    transform: perspective(3200px) rotateX(0deg) rotateY(-45deg) 
    matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 );

}
.cube-wrapper.buttom{
    transform: perspective(3200px) rotateX(0deg) rotateY(-45deg) 
    matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 );

}
.cube-wrapper.back{
    transform: perspective(3200px) rotateX(0deg) rotateY(135deg) 
    matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 );

}
.cube-wrapper > div {
	position: absolute;
    width: 800px;
    height: 800px;
    text-align: center;
    background-size: cover;
   	font-weight: bold;
    font-size: 20px;
    border:1px solid black;
}
.cube-front {
	background-image: url('../assets/img/baby/KakaoTalk_20240124_162556118_01.jpg');
    transform: translate3d(0, 0, 400px);
}
.cube-back {
    background-image: url('../assets/img/baby/KakaoTalk_20240124_162556118_02.jpg');
    transform: rotateY(180deg) translate3d(0, 0, 400px);
}
.cube-top {
    background-image: url('../assets/img/baby/KakaoTalk_20240124_162556118_03.jpg');
    transform: rotateX(90deg) translate3d(0, 0, 400px);
}
.cube-bottom {
    background-image: url('../assets/img/baby/KakaoTalk_20240124_162556118_04.jpg');
    transform: rotateX(-90deg) translate3d(0, 0, 400px);
}
.cube-left {
    background-color:white;
    transform: rotateY(-90deg) translate3d(0, 0, 400px);
}
.cube-right {
    background-image: url('../assets/img/baby/KakaoTalk_20240124_162556118_06.jpg');
    transform: rotateY(90deg) translate3d(0, 0, 400px);
}
.leftbtn{
    position: absolute;
    top :0;
    font-size: 50px ;
    transform:none;
    transform-style:flat
}
.myimg{
    object-fit: cover;width: 30vw; height: 100%;object-position: 50%    ;
}

</style>