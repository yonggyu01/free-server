<template>
  <div class="sidemenu">
    <div class="sidemenuheader">
      <h1>아이디 :{{ userlogininfo }}</h1>
      <h2 @click="back"> <span class="material-symbols-outlined"> chevron_left </span>
      </h2>
    </div>
    <hr>
    <div class="sidelist" @click="back">
      <p>포인트 : {{ userpoint }}</p>
      <br>
      <h4 class="logout"> <router-link @click="logout" to="/">로그아웃</router-link>  </h4>
    </div>
    <hr>
    <div>
      <div class="boxwrap">
        <div class="upbox">
            <a href="#none" id="upbtn" @click="upbtn">Up</a>
        </div>
        <div class="threebox">
            <a href="#none" id="leftbtn" @click="leftbtn">Left</a>
            <a href="#none" id="downbtn" @click="downbtn">Down</a>
            <a href="#none" id="rightbtn" @click="rightbtn">Right</a>
        </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const store1 = computed(() => {
  return store.getters.userlogin
})
const userpoint = computed(()=>{
  return store.getters.getuserpoint
})
const userlogininfo = computed(()=>{ return store.getters.userlogin.id || store.getters.userlogin})
const getlevel = computed(() => {
  return store.getters.getlevels
})
const back = () => {
  store.commit('sidebtnput', true)
  store.commit('setdicemenu', true)
}
function logout(){
  store.commit('userloginnow', false)
      store.commit('signup', '')
        store.commit('setuserloginnow', false)
}
function upbtn(){
  store.commit('setfront',!store.getters.getfront)
  setTimeout(()=>{
    store.commit('setfront',!store.getters.getfront)
  },1500)
}
function downbtn(){
  store.commit('setbuttom',!store.getters.getbuttom)
  setTimeout(()=>{
    store.commit('setbuttom',!store.getters.getbuttom)
  },1500)
}
function leftbtn(){
  store.commit('setleft',!store.getters.getleft)
  setTimeout(()=>{
    store.commit('setleft',!store.getters.getleft)
  },1500)
}
function rightbtn(){
  store.commit('setright',!store.getters.getright)
  setTimeout(()=>{
    store.commit('setright',!store.getters.getright)
  },1500)
}
</script>

<style scoped>
.sidemenu {
  display: flex;
  flex-direction: column;
  left: -300px;
  max-width: 100%;
  overflow: hidden;
  pointer-events: auto;
  top: 0;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  position: absolute;
  height: 100%;
  
  width: 256px;
  background-color: white;
  z-index: 1;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, .2), 0 0 0 0 rgba(0, 0, 0, .14), 0 0 0 0 rgba(0, 0, 0, .12);
  transition: all 0.5s;
}

.sidemenuheader h2 {
  font-size: 1em;
  margin-left: 10px;
}

.sidemenuheader h1 {
  font-size: 1em;
}

.sidemenuheader {
  display: flex;
  justify-content: space-between;
  padding: 20px 5px 0 ;
}

.sidelist h1 {
  margin-top: 20px;
  font-size: 1.2em;
}
.sidelist{
  padding-left: 5px;
}
.sideon {
  transform: translateX(300px);
}
.logout{
  padding-top:  30px;
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
</style>