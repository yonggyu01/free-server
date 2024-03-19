<template>
<div class="titlep">
    <h1> 아기용품 구매페이지 입니다.</h1>
    <div class="maindiv">
  
      <div id="gallery">
        <div class="myfig" v-for="(x,idx) in getbaby" :key="'baby'+idx">
      <router-link to="" @click.prevent="movepage(idx)">
      <img :src="x.src" alt="기저귀">
      <span>{{x.title}}  </span>
      <p>{{x.price}}</p>
    </router-link>
    </div>
  </div>
</div>
</div>

</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {computed, ref} from 'vue'
const store = useStore()
const router = useRouter()

function movepage(number){
  router.push({
    name:'perchSub',
    params:{
      item : number
    }
  })
}
const getbaby = computed(()=>{
  return store.getters.getbabyproduct})


</script>

<style scoped>
.titlep{
    overflow-x: hidden;
}
.titlep h1{
    text-align: center;
    
}

.maindiv {
  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;

}


#gallery {
  position: relative;
  left: calc(-1 * 0px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: calc(100vw - 40px);
  padding: 20px;
  perspective: 0;
  box-sizing: border-box;
}

#gallery .myfig {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  margin: 0px;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: auto;
  text-align: center;
  background-color: ghostwhite;
  background-image: url("https://images.unsplash.com/photo-1629968417850-3505f5180761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMzMjQ3ODJ8&ixlib=rb-4.0.3&q=80&w=500");
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;

  transform-origin: center 0.22rem;
  will-change: transform;
  break-inside: avoid;
  overflow: hidden;
  outline: 1px solid transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.myfig img {
  aspect-ratio: 1 /1;
  width: 100%;
  object-fit: cover;
  display: block;
  border-radius: 5px;
  margin-bottom: 10px;
  z-index: 1;
}
.myfig span {
  font-size: 14px;
  font-weight: 400;
  z-index: 1;
}

.myfig p {
  font-size: 17px;
}

.myfig > div {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

#info {
  position: relative;
  text-align: center;
  z-index: 1;
}
#info a {
  font-size: 1.1rem;
}

@media (min-width: 340px) {
  #gallery {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}
</style>