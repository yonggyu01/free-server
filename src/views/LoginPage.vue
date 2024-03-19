<template>
  <div class="login">
    <div class="page" reg="page" v-html="mypage"></div>
    <form action="/" on-submit.prevnt="">
      <input type="text" id="user_loginID" class="text-center" placeholder="아이디 입력" v-model="userid" @enter.stop="noenter">
      <input type="password" name="pass" id="user_loginPass" v-model="userpass" class="text-center" placeholder="비밀번호 입력"
        @enter.stop="noenter">
      <input type="button" value="로그인" id="loginbtn" class="transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500" @click="gonext">
    </form>
    <div id="naver_id_login">
      <span @click="logoutkakao"></span>
      <a href="#none" id="myfetch" @click='loginnaver(mynaveraccess)' class="transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500">네이버로그인</a>
      <a href="#none" id="myfetch2" @click="loginkakao(myaccess)" class="transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500">카카오로그인</a>
      <form action="" ref="myform" id="myaccount">
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
const myform = ref(null)
const route = useRoute()

let mypage = ref('')
const userid = ref('')
const userpass = ref('')
const store = useStore()
if(store.getters.getfirstlogin==0){
  Kakao.init(process.env.VUE_APP_Kakao);
}
const mynaveraccess = ref('')
const myaccess = ref('')
const router = useRouter()
const gonext = async () => {
  if (userid.value == 0) {
    alert('아이디를 입력하세요')
  }
  else {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "newaccount": false,
      "id": userid.value,
      "password": userpass.value
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      body: raw
    };
    // if(store.getters.getsigndata.id==userid.value){
      const my = await fetch('/account/', requestOptions).catch(err=>{alert('서버가 닫혀있습니다 관리자에게 문의하세요')})
      // const my = await fetch('http://localhost:3000/account', requestOptions)
    
    const result = await my.json()
    if (result.result) {
      console.log(result.result)
     alert(result.result)
    } else if( result.name){
      console.log(result)
      store.commit('setuserloginnow', true)
      store.commit('signup', result)
      router.replace('/loginsuc')
      console.log(store.userloginnow)
      store.commit('setfirstlogin', 1)
      // if(store.getters.getsigndata.id==userid.value){
      // }
    }
    //   else{

    //   store.commit('signup', userid)
    //   store.commit('userloginnow', true)
    //   router.replace('/loginsuc')
  }
}
window.call = function (value) {
  console.log(value)
  store.commit('setmycode', value)
}

async function loginnaver() {
  const access_token = store.getters.getkakaoauth
  if (!access_token) { alert('네이버 회원가입부터 진행하세요') }else{
    store.commit('setfirstlogin', 1)
  } 
}
const logoutkakao = async () => {
  const url = 'https://kapi.kakao.com/v1/user/logout'
  const myheaders = new Headers()
  myheaders.append("Authorization", `Bearer ${store.getters.getkakaoauth}`);
  const option = {
    myheaders,
    method: 'POST',
  }
  const logoutdata = await fetch(url, option)
  const result = await logoutdata.json()
  console.log(result)
}
let switchkakao = computed(()=>{return store.getters.getfirstlogin == 0 ? true : false }) 
const loginkakao = async () => {
  // 이게 로그인기능이었네 앞에껀 회원가입이고  이게 로그인기능임
  //  const loginurl = 'https://kapi.kakao.com/v2/user/me'
  const access_token = store.getters.getkakaoauth
  //  const Authorization =  `Bearer ${access_token}`
  //  let login_data = new FormData()
  //  login_data.append('Authorization',Authorization)
  //  let login_form_data = new URLSearchParams(login_data)
  //  const userinfo = await fetch(loginurl,{
  //   method : 'POST',
  //   headers:{'Content-type'	:'application/x-www-form-urlencoded;charset=utf-8'},
  //   body:login_form_data
  //  })
  //  const f_result = await userinfo
  //  console.log(f_result)
  if (!access_token) { alert('카카오 회원가입부터 진행하세요') } else {
    
    if(!Kakao.isInitialized()){
      Kakao.isInitialized()
    };
    Kakao.Auth.setAccessToken(access_token);
    Kakao.API.request({
      url: '/v2/user/me',
      data: {
        property_keys: ['kakao_account.name', 'kakao_account.email', 'profile_nickname', 'kakao_account.profile_nickname','email'],
      }
      // cors 막아놔서 sdk로 진행 ㅠ
    })
      .then(function (response) {
        console.log(response)
        store.commit('signup', response.id)
        store.commit('userloginnow', true)
       // 카카오로그인시 회원가입 자동으로 진행
       
      var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
       var raw = JSON.stringify({
        "newaccount": switchkakao.value,
        "id": response.id ,
        "password":'카카오로그인',
        "kakao": true,
        "name": response.id
        });
        console.log(switchkakao)
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          mode:'cors',
          body: raw
        };
      const mydate = fetch("/account", requestOptions).catch(err => alert('로그인 서버가 닫혀있습니다, 관리자에게 문의하세요 010-2190-6008'))
  // const mydate =  fetch("http://localhost:3000/account", requestOptions)
      store.commit('setfirstlogin', 1) 
      router.replace('/loginsuc')
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

//   onMounted(()=>{
//     function open_Window_post(){
//   	var url = "/authorize";
//       let app = document.querySelector('#app')  
//     let option = 'resizable=yes';
//   const response_type = 'code'
//   const client_id = 'QJ5hHy5NLVcKEmQDp7OS'
//   const redirect_uri = encodeURI('http://localhost:8080/neweng/naver')
//   const state = 'Random_state'
//       let myForm = document.createElement('form')
//       myForm.id='newform'
//       // myForm.setAttribute='newform'
//       myForm.action = url;
//       myForm.method = "post";
//       app.append(myForm)
//       myForm.client_id = client_id
//       myForm.redirect_uri = redirect_uri
//       myForm.state = state
//       myForm.response_type = response_type
//       // myForm.body = client_id;

//       let mymy = window.open(url, "newform", option);
//       myForm.target = mymy;
//       console.log(myForm)
//       myForm.submit();
//   }
//   open_Window_post()
//  })
/*
let mymy = document.querySelector('#myfetch')
let mydata = ''
const fetchnaver=async ()=>{
const formdata=new FormData()
const url = 'https://cors-anywhere.herokuapp.com/https://nid.naver.com/oauth2.0/authorize'
const response_type = 'code'
const client_id = 'QJ5hHy5NLVcKEmQDp7OS'
const redirect_uri = 'http://localhost:8080/neweng/naver'
const state = 'Random_state'

formdata.append( 'url' , url )
formdata.append( 'response_type' , response_type )
formdata.append( 'client_id' , client_id )
formdata.append( 'redirect_uri' , redirect_uri )
formdata.append( 'state' , state )
await fetch(url,{
method : 'POST',
headers:{
'Access-Control-Allow-Origin' : '*'
},
body : formdata,
redirect: 'follow'
}).then((data)=>{ data.text()
.then((result)=>{
store.commit('naverloginpage',result)
 

window.open('/naverlogin')
console.log(result)
})
})

const setdata = async ()=>{
const data = await mydata
return console.log(data)
}
setdata()
.then((result)=>{console.log(result) }).catch(error => console.log('error', error));
 
mymy.addEventListener('click',fetchnaver)
}





*/
const noenter = (e) => {
  console.log(e)
  if (e.key == 'Enter') {

  }
}

</script>

<style scoped>
.login>p {
  margin-bottom: 15px;
}

.login input {
  margin-bottom: 10px;
  width: 85vw;
  height: 30px;
  font-size: 18px;
  padding-left: 5px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-sizing: border-box;
}

#loginbtn {
  color: white;
  background-color: rgb(67, 67, 67);
  width: 85vw;
  font-size: 20px;
  /* border: 1px solid white; */

  box-sizing: border-box;
  cursor: pointer;
}

#naver_id_login {
  display: flex;
  justify-content: space-evenly;
  width: 85vw;

}

#myfetch {
  color: white;
  box-shadow: 1px 1px 3px #00000038;
  background-color: rgb(106, 219, 61);
  width: 40vw;
  font-size: 20px;
  text-align: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-sizing: border-box;
}

#myfetch2 {
  color: rgb(11, 11, 11);
  background-color: rgb(219, 205, 61);
  width: 40vw;
  box-shadow: 1px 1px 3px #00000038;

  font-size: 20px;
  text-align: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-sizing: border-box;
}</style>
