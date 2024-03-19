<template>
  <div class="kakao">
    <h1>카카오 로그인</h1>
  </div>
</template>

<script setup>
import {onBeforeMount} from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
onBeforeMount(() => {
      console.log(route.query.code)
      opener.kakaoreturn(route.query.code)
      setTimeout(()=>{window.close()},200)
  
})



</script>

<style>

</style>