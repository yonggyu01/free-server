<template>
     <section class="Product">
  
	<div class="bg-gray-100 text-gray-900 w-screen h-screen">
		<div class="container grid grid-cols-12 mx-auto">
			<div class="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto" style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;">
				<div class="flex flex-col items-center  text-center">
         
          <img :src="getbaby[number].src" :alt="getbaby[number].title" class="w-full object-cover">

				</div>
			</div>
			<div class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300">
				<div class="pt-6 pb-4 space-y-2">
          <form action="" class="">
        <h3 class="text-3xl font-bold py-2 mb-3">제품명 : {{getbaby[number].title}}</h3>

        <span class="Price mb-2 "> 가격 {{getbaby[number].price}}</span>
        <fieldset id="quantity-list" class="QtField">
          <label for="quantitySelect">Quantity:</label>
          <select size="1" id="quantitySelect" name="amount" v-model="useramout" class="w-15 ml-3" value="1">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </fieldset>

        <div >
          <button class=" mt-4 px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800" @click.prevent="pushitem" >장바구니</button>
        </div>
      </form>
				
				</div>
		
			</div>
		</div>
	</div>

    </section>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import {computed, ref} from 'vue'
const store = useStore()
const router = useRouter()
const route = useRoute()
const useramout = ref(1)
const isguest = computed(()=>{
      return store.getters.getguest
    })
const userlogininfo = computed(()=>{ return store.getters.userlogin.id || store.getters.userlogin})
const getbaby = computed(()=>{
    return store.getters.getbabyproduct
})
const number = ref(route.params.item)
console.log(number.value)
console.log(getbaby.value, '베이비')
async function pushitem(){
console.log(  getbaby.value[number.value].price ,'얼만데?')
  const userdata = {
        // userid : userlogininfo.value,
        price : getbaby.value[number.value].price,
        src:getbaby.value[number.value].src,
        Quantity :useramout.value,
        title : getbaby.value[number.value].title,
        mode : 'add',
        id : new Date() + Math.random().toFixed(2)*100
        }
  if(isguest.value){
    store.commit('setbaguni',userdata)
    router.go(-1)
  }else{
      const headers = new Headers()
      headers.append('Content-Type','application/json')
      const fetcha = await fetch('/cart',{
      // const fetcha = await fetch('http://localhost:3000/cart',{
        method : 'POST',
        headers : headers,
        body : JSON.stringify(userdata)
      }).catch(err=>console.log(err))
        if(fetcha!==undefined){
          const resultd = await fetcha.json()
        console.log(resultd)
        store.commit('fetchbaguni',resultd)
        // console.log(store.getters.getcart)
        router.go(-1)
    }else{
      alert('서버가 닫혀있어 기능사용이 어렵습니다.')
    }
  }
}
async function fetchdata (){
  if(!isguest.value){
    const fetcha = await fetch('/cart',{
  // const fetcha = await fetch('http://localhost:3000/cart',{
    method:'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      userid : userlogininfo.value,
      
    })
  }).catch(err=>console.log(err))
  if(fetcha!==undefined){
    const result =await fetcha.json()
    store.commit('fetchbaguni',result)
    console.log(result)
  }
  // mycartdata.value=result
  }
}
  fetchdata()
</script>

<style scoped>
.Product{
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    
}
.Form{
    padding: 20px;
    background-color: #e7af4779;

}
  .Visual {
    width: 100%;
    }
      .Visual img{
        width: 100%;
        object-fit: fill;
      }

    fieldset {
      padding: 0;
      border: none;
    }

     input {
        appearance: none;
        background: none;
        border: none;
        inline-size: 100%;
        block-size: 100%;
      }
  .Visual {
    margin: 0;
    padding: 0;
  }
  .Form{
    width: 100%;
  }
  
</style>