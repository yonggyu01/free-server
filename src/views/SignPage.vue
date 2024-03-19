    <template>
      <div class="sign">
      

        <legend :class="{'xx' : !hiding}" style="text-align: center; font-size: 2.5em; margin: 40px 0 20px">회원가입</legend>
        <table :class="{'hiding': hiding }">
            <caption > 회원가입</caption>
          <thead>
            <tr>
                <th> * 는 필수 입력항목입니다</th>
            </tr>
        </thead>
            <tbody>
            
            <tr>
                
                <th><label for="user_name">* 이름</label> <!--for안에는 id값 넣어주면됨 -->
                </th>
                <td><input type="text" id ="user_name" placeholder="이름" v-model="username" ref="myname"></td>
            </tr>
            <tr>
                <th><label for="user_id">* 아이디</label> </th>
                <td><input type="text" id ="user_id" placeholder="아이디" name="user_id" ref="myid" maxlength="12" minlength="4" v-model="yourid">
                    
                  <br><span style="font-size:0.7em">4~12글자 입력 가능</span>
                    <span class="idresultbox" style="margin-left: 10px;"></span> </td>
            </tr>
            <tr>
                <th><label for="user_pass">비밀번호</label> </th>
                <td><input type="password" id ="user_pass" placeholder="비밀번호" name="user_pass" ref="passw" v-model="yourpass"></td>
            </tr>
            <tr>
                <th><label for="user_passcheck">비밀번호 확인</label> </th>
                <td><input type="password" id ="user_passcheck" placeholder="비밀번호 확인" ref="passcheck" v-model="passcheckme"></td>
            </tr>
        
          </tbody>
        </table>
        <div class="wrapbox">  
          <button id="joinbtn" class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black bg-slate-200 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"  @click.prevent="signupbtn" v-show="hiding"> 회원가입하기 </button>
     
    

 
          <button id="joinbtn1" class="inline-block rounded border border-current px-8 py-3 bg-slate-200 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-pink" type="submit" v-show="!hiding" @click.prevent="signmypage"> 회원가입하기 </button>
          <button id="joinbtn2" class="inline-block rounded border border-current px-8 bg-slate-200 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500" @click.prevent="signupbtn" v-show="!hiding"> 돌아가기 </button>    
        </div>
        <div class="buttonwraping">
            <!-- <button type="button" id="naversign" @click="req">네이버</button> -->
            <button type="button" id="kakaosign" class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"  @click="kakao">카카오톡</button>
            <button type="button"  id="naversign" class="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"  v-show="guest" @click="guestgo">게스트로 진행</button>
            <form action="" ref="myform" > 
                  </form>
        </div>


      </div>
    </template>

    <script setup>
    import {ref,onBeforeMount, onMounted, computed} from 'vue'
    import { useStore } from 'vuex';
    import { useRoute,useRouter } from 'vue-router';
    const store = useStore()
    let redirect_uri = `${location.href}`
    const guest = computed(()=>{
      return store.getters.getguest
    }) 
   console.log(store, '스토어')
    function setguest(){
      store.commit('setguest', true )
    }
    const myform = ref(null)
    const myid=ref(null)
    const passw =ref(null)
    const myname = ref(null)
    const passcheck = ref(null)
    const myaccess = ref('')
    const router = useRouter()
    const yourid = ref('')
    const route = useRoute()
    let kakaowin = ref('')
    const yourpass =ref('')
    const passcheckme =ref('')
    const username = ref('')
          const hiding =ref(true)
    const signupbtn=(e)=>{
        hiding.value=!hiding.value
    }
  
    async function signmypage(e){
    // 태그   myid   myname passcheck  passw  focus() 용도임
    const mydata = [myid,myname,passcheck,passw]
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "newaccount": true,
      "id": yourid.value,
      "password":yourpass.value,
      // "email": "none",
      "name": username.value,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      mode:'cors',
      body: raw
    };
    console.log(yourid.value.length)
    if(yourid.value.length<4||yourid.value.length>12){
      alert('아이디는 4~12글자 입력해줘')
      console.log(myid.value)
      return false;
    }
    if(yourpass.value.length<4||yourpass.value.length>8){
      alert('비밀번호는 4~8글자 이상 입력해줘')
      passw.value=focus
      return false;
    }
    if(yourpass.value != passcheckme.value){
      return alert('비밀번호가 틀렸습니다.')
    }else{
    try{
      const mydate =  await fetch("/account", requestOptions)
      const result = await mydate.json()
      console.log(result)
      alert('가입성공 로그인해주세요')

    }catch{err=> {
      setguest()
      alert('서버가 닫혀있어 게스트 계정으로 진행합니다. 대부분의 기능 사용이 불가능합니다.')
  
  }}
    // const mydate =  await fetch("http://localhost:3000/account", requestOptions)
 
      // .then(result =>  store.commit('setsigndata', result))
      // .catch(error => console.log('error', error));
    }
  mydata.forEach((item,idx) => {
      console.log(item)
    if(!item.value.value){
      item.value.focus()
      return alert(`${item.value.placeholder}에 내용이 없습니다.`)
    }
    });
    signupbtn()
    }
    onBeforeMount(() => {
    })
      onMounted(()=>{
      if(route.query.state&&route.query.state=='kakaoreturn'){
        opener.kakaoreturn(route.query.code)
    window.close()
    }else if(route.query.state=='naverreturn'){
      opener.childrenplay(route.query.code)
      window.close()
    }else if(route.query.state=='navertoken'){
      opener.navertoken(route.query.code)
      window.close()
    }
      })
      function guestgo(){
        store.commit('setfirstlogin', 1) 
        store.commit('setuserloginnow', true)
      store.commit('setguest', true )
 
      router.replace('/loginsuc')
      }
      // 카카오 인증
      const kakao =async()=>{
          const url ='https://kauth.kakao.com/oauth/authorize'
          const client_id =process.env.VUE_APP_Kakao_client
            // console.log(location.href)
          
            if(location.href.match(/#none/gm)){
                location.href=location.href.replace(/\/#none/gm,'')
          }
          const state = 'kakaoreturn'
          const response_type = 'code'
          const nonce = 'myfirstid'
          let option = 'resizable=yes'
            const scope = 'profile_nickname'
            let fullurl = url +`?response_type=${encodeURI(response_type)}&client_id=${encodeURI(client_id)}&redirect_uri=${encodeURI(redirect_uri)}&scope=${encodeURI(scope)}&state=${encodeURI(state)}`
      
            kakaowin.value= window.open(fullurl, '', option)
            // console.log(kakaowin.value.location.href.match(/(?<==).+[^#\none]/gm))
            if(store.getters.getfirstlogin != 0){
                setTimeout(() => {
                        kakaoreq(kakaowin.value.location.href.match(/(?<==).+[^#\none]/gm))
                        kakaowin.value.close()
                }, 300);   
            }
            // store.commit('setfirstlogin', 1)
          }
          // 카카오 토큰발급
        const kakaoreq= async (value)=>{
          const url ='https://kauth.kakao.com/oauth/token'
          const client_id =process.env.VUE_APP_Kakao_client
          const client_secret = process.env.VUE_APP_Kakao_secret
          const grant_type = 'authorization_code'
          const nonce = 'myfirstid'
          const scope = 'profile_nickname, account_email'
          const code =value  
          let form_data = new FormData()
          form_data.append('client_id',client_id)
          form_data.append('redirect_uri',redirect_uri)
          form_data.append('client_secret',client_secret)
          form_data.append('grant_type',grant_type)
          form_data.append('code',code)
          form_data.append('nonce',nonce)
          form_data.append('scope',scope)
          //application/x-www-form-urlencoded;charset=utf-8 타입으로 자료를 보내려면 
          // POST 방식 Data encoding 을 해야하며  해당 encoding을 해주는 기능임  new URLSearchParams()
          let url_form_data = new URLSearchParams(form_data)
        try{
        const response = await fetch(url,{
          method : 'POST',
          headers:{'Content-type':'application/x-www-form-urlencoded;charset=utf-8'},
          body:url_form_data
        })
        const result = await response.text()
        let mydata =JSON.parse(result)
        store.commit('setkakaoauth',mydata.access_token)
        console.log(JSON.parse(result))
        console.log(store.getters.getkakaoauth)
        } 
        catch(error){
          setguest()
      alert('회원가입 서버가 닫혀있어 게스트 계정으로 진행합니다. 대부분의 기능 사용이 불가능합니다.')

        }
      }
      // 카카오 코드발급받은것 저장
      window.kakaoreturn = (value)=>{
         console.log(value)
          store.commit('setmykakaocode',value) 
          kakaoreq(value)
        }
        // 네이버 코드요청
        const req = async () => {
      const url = 'https://nid.naver.com/oauth2.0/authorize'
      const response_type = 'code'
      const client_id = process.env.VUE_APP_Naver_id
    //   const redirect_uri = 'http://localhost:8080/naver'
      const state = encodeURI('naverreturn')
      let fullurl = url + `?response_type=${encodeURI(response_type)}&client_id=${encodeURI(client_id)}&redirect_uri=${encodeURI(redirect_uri)}&state=${encodeURI(state)}`
      console.log(myform)
      let option = 'resizable=yes'
      window.open(fullurl, myform, option)
      // myform.value = fulltoken
      // myform.action = fullurl
      // window.location = fullurl
      // await fetch(fullurl).then((data)=>{ data.text()}).then((result)=>{
      // var newWIndow = window.open("","_blank")
      //   newWIndow.document.write(result)
      //   console.log(result)
      // })
      // }).catch(error => console.log('error', error))
    }

    //네이버 코드 받아 토큰 요청
    window.childrenplay = async (value) => {
      //네이버는 인증토큰 받을때도  cors를 막아놔서 브라우저에 직접 입력해서 받아와야함 ㅠ
  //   if(store.getters.getmycode.length >0){
    console.log(value , '네이버 코드')
    store.commit('setmynavercode', value)
    navertoken(value)
  // const authorization_code = value

  // const grant_type = 'authorization_code'
  // const mystate = encodeURI('navertoken')
  // const tokenurl = 'https://nid.naver.com/oauth2.0/token'
  // const fulltoken = tokenurl + `?grant_type=${grant_type}&client_id=${client_id}&client_secret=${store.getters.getclient_secret}&code=${authorization_code}&state=${mystate}`
  // window.open(fulltoken, myform, "popup=true");
  // myform.value.method = 'POST'
  // myform.value.action=fulltoken 
  // myform.value.client_id = client_id
  // myform.value.grant_type=grant_type
  // myform.value.state=mystate
  // myform.value.client_secret = store.getters.getclient_secret
  // myform.value.code=authorization_code
  // myform.value.target = 'myform';
  // myform.value.submit()
  // }
  //  try{
  // const response = await fetch(fulltoken)
  // const result = await response.text()
  // console.log(result)
  //  } catch{
  //  }
 
}
function navertoken(value){
  // 노드서버에서 로그인시키기
  const authorization_code = value
  const client_id = process.env.VUE_APP_Naver_id
  const grant_type = 'authorization_code'
  const mystate = encodeURI('navertoken')
  const tokenurl = 'https://nid.naver.com/oauth2.0/token'
  const fulltoken = tokenurl + `?grant_type=${grant_type}&client_id=${client_id}&client_secret=${store.getters.getclient_secret}&code=${authorization_code}&state=${mystate}`
  window.open(fulltoken, '', "popup=true");
}
    

    </script>

    <style scoped>
    .hiding{
        height: 0;
        display: block;
        overflow: hidden;
    }
    .wrapbox{
        display: flex;
        padding: 10px;
        justify-content: space-evenly;

    }
    button{
      cursor: pointer;
    }
    table,tr,td,th{
        border-spacing: 0;
    }   
    caption{
        font-size: 2.5em;
        text-align: center;
        margin-bottom: 1.5em;
        padding-top: 1em;
    }
    fieldset table tbody tr{

    width: 100vw;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    background-color : white

    }
    thead> tr> th{
    text-align: start;
    padding-left: 1.6em;
    padding-bottom: 1em;
    background-color : white
    }

    tbody{
    
    width: 100vw;
    }
    fieldset table tbody th {
    border-collapse: collapse;
    border-bottom: 1px solid rgba(0, 0, 0, 0.174);
    width: 35vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box  ;
    }
    fieldset table tbody td:not(.lastone){
        border-collapse: collapse;
        border-bottom: 1px solid rgba(0, 0, 0, 0.174);
        display: flex;
        gap: 10px;
        width: calc(100vw - 35vw);
        height: 70px;
        box-sizing: border-box  ;
        align-items: center;
    }

    tbody input{
        font-size: 15px;
        width: 40vw;
        border:none;
        background-color: antiquewhite;
        padding: 10px;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
    }
    #joinbtn,#joinbtn1,#joinbtn2,#backbtn,#naversign,#kakaosign{
        height: 50px;
        width: 40vw;
        margin-right: 5px;
        border: 0 none;
        border-top-left-radius: 20px;
        border-top-right-radius:20px ;
        border-bottom-right-radius:20px ;
        border-bottom-left-radius: 20px;
    }
    #naversign{
      background-color: rgb(92, 174, 10);
    }
    #kakaosign{
      background-color: yellow;
    }
    #id_check{
        width: 100px;
        box-sizing: border-box;
    }
    .joinpage{
        margin-bottom: 50px;
    }
    .buttonwraping{
        display: flex;
        flex-direction: column;
        gap:15px;
        width: 100vw;
        align-items: center;
    }


    </style>
