<template>
  <div class="fullwrap">
    <div class="scoreboard">
        <div class="time"> <p> {{ controltime }} 초</p></div> <div class="count">횟수 {{countnum}}/50</div>
    </div>
    <div class="wrapboxc">
        <img src="../assets//치카치카왼쪽.png" alt="" v-if="mysrc" class="mypic">
        <img src="../assets//치카치카오른쪽.png" alt="" v-else  class="mypic">
        <div class="arrowbox">
            <img src="../assets/왼쪽화살표.png" alt="" @click="leftright('left')">
            <img src="../assets/오른쪽화살표.png" alt="" @click="leftright('right')">
        </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
const mysrc= ref(true)
let mode = ref(0)
let timer=null
let controltime =ref(20)
const countnum = ref(0)
function mytime(){
    if(controltime.value == 20){
        timer = setInterval(()=>{
            controltime.value--
        },1000)
    }
}
const watchtimer = computed(()=>{
    if(controltime.value == 0 ){
        clearInterval(timer)
    }
    clearInterval(timer)
    return alert('게임시간 종료')
})
const leftright = (position)=>{
    if(countnum.value==0){
        mytime()
    }else if(countnum.value>=50 || controltime.value <= 0 ){
        clearInterval(timer)
        alert('게임시간 종료')
    }
    if(position == 'left'&& mode.value==0){
        mode.value = 1
        mysrc.value = !mysrc.value
        console.log(countnum.value) 
        countnum.value++
    }else{
         mysrc.value = !mysrc.value
        mode.value = 0
     }
}



</script>

<style scoped>
.fullwrap{
    height: calc(100vh - 160px);
}
.wrapboxc{
    display: flex;
    flex-direction: column;
    height: 70vh;
    justify-content: space-between;
 
}
.arrowbox{
    display: flex;
    width:100px;
    justify-content: space-evenly;
    height: 100px;
    margin: auto;
    gap:10px

}
.mypic{
    max-width: 400px;
    object-fit: contain;
    margin: auto;
}
.arrowbox img{
    width: 100%;
    cursor: pointer;
}
.scoreboard{
    display: flex;
    justify-content: space-between;
    background-color: black;
    color:white;
    padding:0 10px ;
    margin-bottom: 10px;
}
 
</style>