<template>
    <div class="level">
        <h1 v-if="store.getters.getttfalse"> 난이도 선택하세요</h1><h1 v-else>Level select</h1>
        <div class="wraplevel">
            <div class="level1">
                <a href="#none" @click="mylevel(0)" >
                <img src="../assets/img/생선대가리.png" alt=""> <h2 v-if="store.getters.getttfalse">
                    빡대가리 
                </h2>  <h2 v-else> idiot </h2>
                </a>
            </div>
            <div class="level1">
                <a href="#none" @click="mylevel(1)" >
                <img src="../assets/img/duck.png" alt=""> <h2 v-if="store.getters.getttfalse">
                    새대가리
                </h2> <h2 v-else>chicken head</h2>
                </a>
            </div>
            <div class="level1">
                <a href="#none" @click="mylevel(2)" >
                <img src="../assets/img/myman.png" alt=""> <h2 v-if="store.getters.getttfalse">
                    아기
                </h2> <h2 v-else> baby</h2>
                </a>
            </div>
        </div>
          
    </div>
  </template>
  <script>

  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  export default {
    setup(){
        const store = useStore()
        const router = useRouter()
      
        const mylevel=(num)=>{
            switch (num){
                case 0 :
                store.commit('setlevel',"빡대가리 모드")
                router.push('/loginsuc')
            break
                case 1 :
                store.commit('setlevel',"새대가리 모드")
                router.push('/loginsuc')
            break
                case 2 :
                store.commit('setlevel',"아가 모드")
                router.push('/loginsuc')
            break
        }
     }

        return{
            mylevel,store

        }
    },


    
  }
  </script>
  
  <style scoped>
    .wraplevel{
        width: 100vw;
        display:grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
     

    }
    .level h1{
        text-align: center;
        margin: 20px 0;
    }
    .level1{
        display: flex;
        width: 20vw;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.604);
        margin: 10px auto;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 25px;
        padding: 10px;
        height: 25vh;
        position: relative;
    }
    .level1 h2{
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items:center;
        width: 20vw;
      
        /* text-align: center; */
    }
    .level1 a{
        display: flex;
        justify-content: center;
    }
    .level1 img{
  

display: flex;
justify-content: center;
        width: 15vw;
        max-width: 18vw;
        object-fit:cover;

        /* height: 20vh; */

    }
  
  </style>