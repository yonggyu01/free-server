<template>
  <div class="ful">
    <div class="wrapbox">
        <h2>
        {{mydata.result}}
            </h2>
       <button class="btn" @click="generateContent(nowlocation,weather1)">다른 제안듣기</button>
    </div>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import { useStore } from 'vuex';
const store = useStore()
const mydata = ref('')
const nowlocation = computed(()=>{
  return store.getters.getmylocation.name
})
const weather1 = computed(()=>{
  return store.getters.getmyweather
})

console.log(weather1.value,nowlocation.value)
generateContent(nowlocation.value,weather1.value)


async function generateContent(location, weather) {
        const raw = {
            text: `input: {\"weather\":\"${weather} \",\"type\":\"sentence\",\"location\":\"${location}\"}`
        }
    try {
        const response = await fetch('/today', {
            method: 'POST'
            ,
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(raw),
        });
        const result = await response.text();

        const newtext = JSON.parse(result)
    mydata.value = newtext

       

    } catch (error) {
        alert('서버가 닫혀있어 기능사용이 어렵습니다 관리자에게 문의하세요')
        console.error(error);
    }
}

</script>

<style scoped>
.wrapbox{
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap : 50px;
    background-color: #e7af4779;
}
.ful{
    background-color: #e7af4779;
}
.btn{
    position: absolute;
    bottom: 20vh;
    width: 150px;
    height: 50px;
    font-size: 1.2em;
}
</style>