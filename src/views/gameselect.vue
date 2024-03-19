<template>
  <div class="myfelx">

    <router-link to="/chika" class="chicak" v-if="ttfalse"> 양치게임 </router-link>
    <router-link to="/chika" class="chicak" v-else> tooth brush </router-link>
    <router-link to='/mainGame' class="chicak" v-if="ttfalse"> 좀비사냥 </router-link>
    <router-link to='/mainGame' class="chicak" v-else> zombie </router-link>

  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore()
const router = useRouter()
    
const ttfalse = computed(()=>{
   return store.getters.getttfalse
})
</script>

<style scoped>

.myfelx{
    display: flex;
    flex-direction: column;
    gap:20px;
    position: relative;
    top:30vh;
    justify-content: center;
    align-items: center;
}
.chicak{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;
    height: 10vh;
    background-color:rgb(247 194 175 / 72%);
    box-shadow: 1px 1px 3px black;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    font-size: 2em;
}

</style>