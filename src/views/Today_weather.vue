<template>
  <div class="location">
    <div class="twrap">
      <div class="titlewrap">
        <h2 class="city">{{ nowweather.name }}</h2>
      </div>
      <div class="maint">
        
        <p>{{month}}월 {{ day }}일 {{ weather2 }}</p>
          <p style="font-size: 3em;">{{ nowtemp }}&#8451;</p>
          <p style="font-size: 2em; font-weight: bold;">{{ weather1 }}</p>
        
      </div>

    </div>
  </div>  
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex';
const store = useStore()
const nowweather = computed(()=>{
  return store.getters.getmylocation
})
const weather1 = computed(()=>{
  return store.getters.getmyweather
})
const weather2 =  computed(()=>{
  return store.getters.getmylocation.description
})
const nowtemp = computed(()=>{
  return (store.getters.getmylocation.main.temp - 273.15).toFixed(1)
})
const date = new Date()
const month = date.getMonth()+1
const day = date.getDate()
// const whereRu = ref('서울')
// const temp = ref('맑음')
const imgs = ref('')
// const city = 'Seoul'
// const lang = 'kr'
let nowlat = store.getters.getlat
let nowlon = store.getters.getlon
// const initialLat = 36.5683
// const initialLon = 126.9778
// function onGeoOk(position) {
//   const lat = position.coords.latitude;
//    store.commit('setlat',lat.toFixed(4))
//    const lon = position.coords.longitude;
//    store.commit('setlon',lon.toFixed(4))
// }
// function errorGeo(){
//   alert('GEO 사용 설정을 해야합니다.')
// }
// navigator.geolocation.getCurrentPosition(onGeoOk,errorGeo)
// setTimeout(()=>{
//   weather()
// },300)

// const weather = async () => {
//       //위치부터 찾아야함
    
//       var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       };
//       // fetch("https://api.openweathermap.org/data/2.5/weather?lat=36.5683&lon=126.9778&lang=kr&appid=b6936804ece7929668756f2462b592cc", requestOptions)
//       //   .then(response => response.text())
//       //   .then(result => console.log(result))
//       //   .catch(error => console.log('error', error));
//      const mydata = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${nowlat}&lon=${nowlon}&lang=kr&appid=${API_key}`, requestOptions)
//      const result = await mydata.text()
//      const parsedata = JSON.parse(result)
//      console.log(parsedata)
//      nowweather.value = parsedata
//      weather1.value = parsedata?.weather[0]?.main
//      store.commit('setmyweather',parsedata?.weather[0]?.main)
//      store.commit('setmylocation',parsedata?.name)
//      weather2.value = parsedata?.weather[0]?.description
//      nowtemp.value = (parsedata?.main?.temp - 273.15).toFixed(1)
//   }
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${initialLat}&lon=${initialLon}&appid=${API_key}&lang=kr`
//   const getdata = await fetch(url)
//   const result = await getdata
//   console.log(result)


// weather()


</script>

<style scoped>

.location {
  background-color: #e7af4779;
  height: 100vh;
 
}
.twrap{
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  flex-direction: column;
  height: 40vh;
}
.city{
  font-size: 3em;
}
.maint{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:5px
}
</style>
