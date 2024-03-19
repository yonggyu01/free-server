<template>


    <div :class="{'mainsite':true,'cube-wrapper':!dice,'backwhite':dice, 'front' : front, 'buttom' : buttom, 'left' : left, 'right' : right}">
      <div :class="{'mybox transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500':true , 'cube-front' : !dice}"> 
        <router-link to="/weather">
        <span class="material-symbols-outlined">
        event_note
        </span><h2 v-if="ttfalse">오늘의 산책 날씨</h2><h2 v-else>Today_weather</h2>
      </router-link>
      </div>
      <div :class="{'mybox transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500':true , 'cube-back' : !dice}"> 
        <router-link to="/baby">
        <span class="material-symbols-outlined">
        newspaper
        </span><h2 v-if="ttfalse">육아수첩</h2><h2 v-else>Baby_Note</h2>
        </router-link>
      </div>
      <div  :class="{'mybox transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500':true , 'cube-left' : !dice}"> 
        <router-link to="/wherego">
        <span class="material-symbols-outlined">
        menu_book
      </span><h2 v-if="ttfalse">이번주에 어디가?</h2><h2 v-else>go where?</h2>
        </router-link>
      </div>
      <div  :class="{'mybox transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500':true , 'cube-right' : !dice}"> 
        <router-link to='/gemini'>
        <span class="material-symbols-outlined">
  dictionary
  </span><h2 v-if="ttfalse">오늘의 퀴즈</h2><h2 v-else>Today Quiz </h2>
        </router-link>
      </div>
      <div  :class="{'mybox transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500':true , 'cube-top' : !dice}"> 
        <router-link to="/youtube">
        <span class="material-symbols-outlined">
  video_camera_front
  </span><h2 v-if="ttfalse">육아정보 유튜브</h2><h2 v-else>Baby Tube</h2>
        </router-link>
      </div>
      <div  :class="{'mybox transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 ':true , 'cube-bottom' : !dice}"> 
        <router-link to="/perchasebaby">
        <span class="material-symbols-outlined">
          shopping_bag
  </span><h2 v-if="ttfalse">쇼핑하기</h2><h2 v-else>shopping</h2>
        </router-link>
      </div>
    </div>


</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref,reactive} from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()
     const front = computed(()=> store.getters.getfront)
        const top=computed(()=>store.getters.gettop)
        const left=computed(()=>store.getters.getleft)
        const right=computed(()=>store.getters.getright)
        const buttom=computed(()=>store.getters.getbuttom)
        let nowlat = ''
        let nowlon = ''
        const back=store.getters.getback
    const dice = computed(()=>{
      return store.getters.getdicemenu
    })
    const ttfalse = computed(()=>{
      return store.getters.getttfalse
    })
    const direction1 = reactive({
            front,top,left,right,buttom,back
        })

  function onGeoOk(position) {
  const lat = position.coords.latitude;
  nowlat =position.coords.latitude;
   store.commit('setlat',lat.toFixed(4))
   const lon = position.coords.longitude;
   nowlon=position.coords.longitude;
   store.commit('setlon',lon.toFixed(4))
   setTimeout(()=>{
  weather()
},300)
}
function errorGeo(){
  alert('GEO 사용 설정을 해야합니다.')
}
navigator.geolocation.getCurrentPosition(onGeoOk,errorGeo)
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

    // 화면 로딩시 할일들


    const weather = async () => {
      const API_key = process.env.VUE_APP_Openweather
      //위치부터 찾아야함
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      // fetch("https://api.openweathermap.org/data/2.5/weather?lat=36.5683&lon=126.9778&lang=kr&appid=b6936804ece7929668756f2462b592cc", requestOptions)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));
     const mydata = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${nowlat}&lon=${nowlon}&lang=kr&appid=${API_key}`, requestOptions).catch(err=> alert('데이터 송신불량'))
     const result = await mydata.text()
     const parsedata = JSON.parse(result)
     console.log(parsedata)
    //  nowweather.value = parsedata
    //  weather1.value = parsedata?.weather[0]?.main
     store.commit('setmyweather',parsedata?.weather[0]?.main)
     store.commit('setmylocation',parsedata)
    //  weather2.value = parsedata?.weather[0]?.description
    //  nowtemp.value = (parsedata?.main?.temp - 273.15).toFixed(1)
  }

    if(store.getters.getnowloading==false){
      let nowloading = document.createElement('div')
    let nowloadtext = document.createElement('img')
    nowloading.className='hidethree'
    nowloading.style.backgroundColor='white'
    nowloading.style.width = '100vw'
    nowloading.style.transition= 'all 0.5s'
    nowloading.style.height = '100vh'
    nowloading.style.opacity = 1
    nowloading.style.position = 'absolute'
    nowloading.style.display = 'flex'
    nowloading.style.justifyContent='center'
    nowloading.style.alignItems='center'
    nowloading.style.zIndex = 10
    nowloading.style.top = 0;
    nowloadtext.setAttribute('src',require ('../assets/img/ari_logo.png'))
    nowloadtext.style.width = '30%'
    nowloadtext.style.height = '30%'
    nowloadtext.style.backgroundColor = 'white'
    nowloadtext.style.display = 'flex'
    nowloadtext.style.justifyContent='center'
    nowloadtext.style.alignItems='center'
    nowloading.append(nowloadtext)
    document.body.prepend(nowloading)
    onMounted(()=>{
      let nowloading =document.querySelector('.hidethree')
    
    setTimeout(function(){

      nowloading.style.opacity = 0
    }, 500)
    setTimeout(function(){

      nowloading.style.display='none'
    }, 1000)
   
    })


    onBeforeUnmount(()=>{
      let nowloading =document.querySelector('.hidethree')
    nowloading.remove()
    store.commit('setnowloading',true)
    })
  }
    return{ttfalse,store,dice,rotatebtn,direction1,front,right,left,buttom,weather,onGeoOk,errorGeo,nowlat,nowlon

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.arrowleft{
  position: absolute;
  left : 30vw
}
.myboxs{
  position: relative;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
.mainsite h1{
  margin: 0;
}
.backwhite{
  background-color: #ededed;
}
.mainsite{
  
  height: calc(100vh - 70px);
  width: 100vw;
  gap:1vw;
  padding:70px 10px 15px;
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 5px;
  grid-template-areas:
                        "a b"
                        "c d"
                        "e f"
    ;
    transition: 0.8s linear;
}
.mybox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 1px 3px black;
  margin:5px auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.mybox span{
  font-size: 4em;
  margin-bottom: 5px;
}


h1{
  padding-top: 30px;
}
.hide{
display: none;
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
    transform: perspective(2700px) rotateX(-90deg) rotateY(-45deg) scale3d(.4, .4, 0.4)
    matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 );
    
}
.cube-wrapper.front{
    transform: perspective(2700px) rotateX(105deg) rotateY(-45deg) scale3d(.4, .4, 0.4)
    /* matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 ); */

}
.cube-wrapper.left{
    transform: perspective(2700px) rotateX(-20deg) rotateY(240deg) scale3d(.5, .5, 0.5)
    /* matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 ); */

}
.cube-wrapper.right{
    transform: perspective(2700px) rotateX(-10deg) rotateY(130deg) scale3d(.4, .4, 0.4)
    /* matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 ); */

}
.cube-wrapper.buttom{
    transform: perspective(2700px) rotateX(-170deg) rotateY(-15deg) scale3d(.5, .5, 0.5)
    /* matrix3d( 
        cos(var(--applyAngle)), 0, sin(var(--applyAngle) * -1), 0, 
        0, 1, 0, 0, 
        sin(var(--applyAngle)), 0, cos(var(--applyAngle)), 0, 
        0, 0, 0, 1 ); */

}
.cube-wrapper.back{
    transform: perspective(2700px) rotateX(0deg) rotateY(135deg) 
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
    transform: translate3d(0, 0, 400px);
}
.cube-back {
    transform: rotateY(180deg) translate3d(0, 0, 400px);
}
.cube-top {
    transform: rotateX(90deg) translate3d(0, 0, 400px);
}
.cube-bottom {
    transform: rotateX(-90deg) translate3d(0, 0, 400px);
}
.cube-left {
    transform: rotateY(-90deg) translate3d(0, 0, 400px);
}
.cube-right {
    transform: rotateY(90deg) translate3d(0, 0, 400px);
}
</style>
