<template>
  <div class="naverlogin"  ref="loginnaver">

    <h1>네이버 로그인페이지입니다.</h1>
  </div>
  <!-- <p>{{ getdata }}</p> -->
</template>

<script setup>
import {computed, ref ,onMounted,onBeforeMount} from 'vue'
import { useRoute,useRouter } from 'vue-router';
import {useStore} from 'vuex'
  
    const route =useRoute()
    const router =useRouter()


    const store = useStore()
    const loginnaver =ref(null)

    onBeforeMount(() => {
      console.log("Before Mount");
      console.log(route.query.code)
      const savemycode = ()=>{
          store.commit('setmycode',)
      }
      const goetcode=()=>{
               opener.childrenplay()
               setTimeout(()=>{
                window.close()},500)

        }
      
      opener.call(route.query.code)
      goetcode()
      
      
    });



    
   



</script>
