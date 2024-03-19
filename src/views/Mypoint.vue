
<script setup>
    import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Todomodal from '../components/todomodal.vue'
    
    const mytext = ref('')
    const mytitle = ref('')
    let num = 2
    // 서버에 추가삭제시 post로 create = true면 추가 false면 삭제로 하자
    const store = useStore()
    const fetchdata =computed(()=>{
      return store.getters.gettodo
    })
    const todotext = computed(()=>{
        return store.getters.gettodo
    })
    const userlogininfo = computed(()=>{ return store.getters.userlogin.id || store.getters.userlogin})
    onMounted(()=>{

    })
    const todoeditbtn = ref(null)
    const isguest = computed(()=>{
      
      return store.getters.getguest
    })
    const mydate = new Date().getDate()
        // console.log(userlogininfo.value)
    const tt = store.getters.userlogin
    const ttfalse = computed(()=>{return store.getters.getttfalse})
//     async function add(action){
//         num++
//         if(fetchdata.value.length==7){
//             return alert('최대갯수입니다')
//         }
//         const mydata = {
//             userid : userlogininfo.value,
//             id:'todo' + Date.now(),
//             title:todotitle.value,
//             text : todocontent.value,
//             done : false,
//             mode : 'add',
//             create :  (date.getMonth()+1) + '월' + (date.getDate()+'일')+ (date.getHours()+'시') 

//         }

//         // fetchdata.value.unshift(mydata)
    

// const fetcha = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/todo',{
//     // const fetcha = await fetch('http://localhost:3000/todo',{
//         method : 'POST',
//         headers:{
//             'Content-Type' : 'application/json'
//         },
//         body:JSON.stringify(mydata)
//     })
//     const result = await fetcha.json()
//     fetchdata.value = result 

//     mytext.value=''

//     }
    //시작시 보여줄 화면
    const inputmodal = computed(()=>{
        return store.getters.gettodotf
    })
    
    function popup(){

       store.commit('settodotf',!inputmodal.value)
       console.log(inputmodal.value)
    }

    async function firstpage(){
      console.log(isguest.value ,'게스트는 뭐지')
      if(isguest.value){

      }else{
        console.log( '서버로 todo요청')
        const fetcha = await fetch('/todo',{
        // const fetcha = await fetch('http://localhost:3000/todo',{
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            userid : userlogininfo.value
        })
     }).catch(err => alert('서버가 닫혀있습니다 관리자에게 문의바랍니다.'))
     if(fetcha!==undefined){
       const result = await fetcha.json()
      //  fetchdata.value = result 
       store.commit('fetchtodo',result)  
       console.log(result)
     }
 
      }

    }
    
   
      firstpage()




    async function deletec(id){
        if(isguest.value){
          store.commit('deltodo',id) 
        }else{
  // fetchdata.value= fetchdata.value.filter((item)=>{ return item.id+idx != value+idx })
  const fetcha = await fetch('/todo',{
            // const fetcha = await fetch('http://localhost:3000/todo',{
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            id : id,
            mode : 'del',
            userid : userlogininfo.value
        })
     }).catch(err => alert('서버가 닫혀있습니다 관리자에게 문의바랍니다.'))
     if(fetcha!==undefined){
         const result = await fetcha.json()
        //  fetchdata.value = result 
         store.commit('fetchtodo',result) 
     }
        }
      
    }
    async function comlist(id){
      const date = new Date()
      if(isguest.value){
          store.commit('uptodo',id) 
          console.log(store.getters.gettodo)
        }else{
          const fetcha = await fetch('/todo',{
        // const fetcha = await fetch('http://localhost:3000/todo',{
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            id : id,
            mode : 'update',
            userid : userlogininfo.value,
            create : (date.getMonth()+1) + '월' + (date.getDate()+'일')+ (date.getHours()+'시')

        })
     }).catch(err => alert('서버가 닫혀있습니다 관리자에게 문의바랍니다.'))
     if(fetcha!==undefined){
         const result = await fetcha.json()
        //  fetchdata.value = result 
         store.commit('fetchtodo',result) 
     }
        }

        
    }
    function editboxopen(id){
            document.querySelector(`#displaybox${id}`).classList.remove('hidden')
        setTimeout(()=>{
            document.querySelector(`#displaybox${id}`)?.classList.add('hidden')
        },2500)
        
    }
</script>
<template>
    <div class="my_point_wrap">
        <div>
  <!-- Page Container -->
  <div
    id="page-container"
    class="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-slate-100"
  >


    <!-- Page Content -->
    <main id="page-content" class="flex flex-auto flex-col pt-20 lg:pt-0 w-full">
      <!-- Kanban Board -->
      <div
        class="gap-6 overflow-x-auto px-4 py-6 lg:gap-8 lg:p-8"
      >
      <Todomodal v-if="inputmodal"/>
            <!-- Todo Heading -->
            <div class="mb-4 flex  gap-6 flex justify-center">
            <h2 class="font-semibold todotext" >Todo-list</h2>
            <div class="flex items-center gap-2 ">
              <!-- <button
                type="button"
                class="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-slate-300 text-slate-400 hover:border-slate-500 hover:text-slate-950 active:border-slate-400"
              >
                <svg
                  class="hi-mini hi-plus inline-block h-5 w-5 transition group-active:scale-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                  />
                </svg>
              </button> -->
              <button
               @click="popup"
                type="button"
                class="group  inline-flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-slate-300 text-slate-400 hover:border-slate-500 hover:text-slate-950 active:border-slate-400"
              >
                <svg
                  class="hi-mini hi-pencil-square inline-block h-12 w-12 transition group-active:scale-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"
                  />
                  <path
                    d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        <!-- Todo -->
        
        <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    
          <!-- END Todo Heading -->

          <!-- Todo List -->
          <div class="flex flex-col gap-4" v-for="(x, idx) of todotext" :key="x.id">
            <!-- Card 1 Container -->
          
            <div class="relative">
              <!-- Action -->
              <div class="absolute end-4 top-4">
                <!-- Dropdown Container -->
                <div ref="todoeditbtn" class="relative">    
                  <button 
                    :id='"card-dropdown-"+idx'
                    @click="editboxopen(idx)"
                    class="flex h-6 w-6 items-center justify-center text-slate-400 hover:text-slate-600 active:text-slate-400"
                  >
                    <svg
                      class="hi-mini hi-ellipsis-vertical inline-block h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                      />
                    </svg>
                  </button>

                  <!-- Dropdown -->
                  <div :id='"displaybox"+idx'
                    class="absolute end-0 z-10 mt-2 w-32 rounded-lg shadow-xl ltr:origin-top-right rtl:origin-top-left hidden"
                  >
                    <div
                      class="divide-y divide-slate-100 rounded-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                      <div class="flex flex-col gap-2 p-2">
                        <button
                          type="button"
                          @click="comlist(x.id)"
                          class="group inline-flex items-center gap-1 rounded-lg bg-slate-50 px-2.5 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-600"
                        >
                          <svg
                            class="hi-mini hi-pencil inline-block h-4 w-4 opacity-50 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"
                            />
                          </svg>
                          <span>Done</span>
                        </button>
                        <button
                          @click="deletec(x.id)"
                          type="button"
                          class="group inline-flex items-center gap-1 rounded-lg bg-slate-50 px-2.5 py-1 text-sm font-medium text-slate-600 hover:bg-rose-50 hover:text-rose-600"
                        >
                          <svg
                            class="hi-mini hi-trash inline-block h-4 w-4 opacity-50 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- END Dropdown -->
                </div>
                <!-- END Dropdown Container -->
              </div>
              <!-- END Action -->

              <div                
                class="group flex flex-col gap-3 rounded-xl bg-white p-4 text-sm transition hover:shadow-lg hover:shadow-slate-200"
              >
                <div class="-ms-1.5 flex grow flex-wrap gap-1 pe-6">
                  <span
                    class="rounded-xl bg-rose-50 px-1.5 py-px font-medium text-rose-600"
                    >new</span
                  >
                </div>
                <div>
                  <h3 :class="{'mb-1 font-bold text-2xl truncate ':true, 'line-through text-red-600' : x.done}">{{x.title}}</h3>
                  <p :class="{'line-clamp-3 text-slate-500 text-lg truncate ' : true, 'line-through text-red-600' : x.done}">
                    {{ x.text }}
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <div
                    class="inline-flex items-center gap-1.5 text-slate-500"
                  >
                    <svg
                      class="hi-mini hi-calendar-days inline-block h-5 w-5 text-slate-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{x.create}}</span>
                  </div>
                
                </div>
              </div>
     
            </div>
            <!-- END Card 1 Container -->

          </div>
          <!-- END Todo List -->
        </div>
        <!-- END Todo -->
  
      </div>
      <!-- END Kanban Board -->
    </main>
    <!-- END Page Content -->
  </div>
  <!-- END Page Container -->
</div>
   
    </div>
</template>
<style scoped>
ul,li{
    list-style: none;
}
.my_point_header{
    margin: 5vh auto;
    width: 80vw;
    height: 6vh;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #2c3e50; 
    color :  #E7AE47;
    border-top-left-radius: 25px;
    box-shadow: 0px 4px 12px #000000b5;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
}
.my_point_slide{
    width: 100vw;
    overflow: hidden;
}
.my_point_slide ul{
    /* height: 12vh; */
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
 
}
.my_point_slide li{
    
    height: 3em;
    background-color: #E7AE47;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    box-sizing: border-box;
}
.my_point_slide li a{
    background-color: white;
    border-radius: 50%;
    width: 2.5em;
    height:2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.my_point_status{
    background-color: #E7AE47;
    width: 80vw;
    /* height: 40vh; */
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    margin: 0 auto 3vh;
}
.my_point_status ul{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 45vh;
    align-items: center;
}
.my_point_status li{
    background-color: white;
    box-shadow: 0 1px 4px black;
    width: 65vw;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    padding: 0 5vw;
    align-items: center;
}
.comp{
font-size: 1em;
width: 3em;
height: 2em;
background:rgb(45, 212, 53);
border: none;
}
.del{
    width: 3em;
    font-size: 1em;
    background: red;
    height: 2em;
    border: none;
    color:white
}
.eclipse{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.flex{
    display: flex;
    gap : 5px

}
.donetext{
    text-decoration: line-through;
    color : red;
}
.todotext{
font-size: 50px;
margin-right: 50px;
}

</style>