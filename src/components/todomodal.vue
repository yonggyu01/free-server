<template>
    <div  :class="{'mx-auto px-4 py-16 sm:px-6 lg:px-8 absolute w-screen h-screen z-50 bg-gray': true }">
      <div class="mx-auto max-w-lg bg-white rounded-lg">
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl pt-6">To-do 내용입력</h1>
   
        <form action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" @submit.prevent="">  
          <div>
            <label for="content" class="sr-only">To-do</label>
    
            <div class="relative">
              <input
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Title"
                v-model="todotitle"
              />
              <input
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Todo"
                v-model="todocontent"
              />
    
              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                        </span>
            </div>
          </div>
           
          <button
            type="submit"
            @click="add"
            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          > 
            Todo 추가하기
          </button>
        </form>
      </div>
    </div>
  </template>

<script setup>
import { computed, defineProps } from "vue";
import { useStore } from 'vuex';
import { ref } from 'vue';
const todocontent = ref('')
const todotitle = ref('')

const store = useStore()
const todoclick=computed(()=>{
    console.log(todoclick)
    return store.getters.gettodotf
})
const isguest = computed(()=>{
      return store.getters.getguest
    })
const userlogininfo = computed(()=>{ return store.getters.userlogin.id || store.getters.userlogin})
async function add(action){
  if(!todotitle.value || !todocontent.value){
   return alert('내용이 비어있습니다.')
  }else if(isguest.value){
    settodo()
  }else{
  const date = new Date()
      const mydata = {
          userid : userlogininfo.value,
          id:'todo' + Date.now(),
          title:todotitle.value,
          text : todocontent.value,
          done : false,
          mode : 'add',
          create :  (date.getMonth()+1) + '월' + (date.getDate()+'일')+ (date.getHours()+'시') 
      }
      // fetchdata.value.unshift(mydata)
      const fetcha = await fetch('/todo',{
      // const fetcha = await fetch('http://localhost:3000/todo',{
      method : 'POST',
      headers:{
          'Content-Type' : 'application/json'
      },
      body:JSON.stringify(mydata)
      })
      if(fetcha!==undefined){
      const result = await fetcha.json()
      console.log(result,'결과값 가져옴 서버')
      store.commit('fetchtodo',result)  
      store.commit('settodotf',false)
        }
      }

    }

function settodo(){
    const date = new Date()

    const content = {
        id : 'todo' + Date.now(),
        title : todotitle.value,
        text : todocontent.value,
        done : false,
        create : (date.getMonth()+1) + '월' + (date.getDate()+'일')+ (date.getHours()+'시') 
    }
    store.commit('settodo',content)
    store.commit('settodotf',false)
}

</script>

<style>

</style>