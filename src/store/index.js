import { Store, createStore, useStore } from 'vuex'
import { useRouter} from 'vue-router'
const router =useRouter()
export default createStore({
  state: {
    userid : '',
    userloginnow: false,
    // 개발중에는 임시로 true로 해두자
    nowpagename:'현재페이지',
    putsidebtn:true,
    levels:'빡대가리 모드',
    userloading:false,
    parts:[{input: `{\"level\":1,\"type\":\"sentence\"}`}],
    naverhtml :``,
    test : '',
    mycode:'',
    ttfalse : false,
    nowloading : false,
    secret : '9AhFkSWq3P',
    mykakaocode:'',
    mynavercode:'',
    dicemenu:true,
    babynote:null,
    kakaoauth:'',
    naverauth:'',
    babyproduct:[
      {
          title : '기본기저귀',
          price : '50,000원',
          src : 'https://cdn.oasis.co.kr:48581/product/81083/thumb/00f5c952-4c2f-48bb-b7a3-a0becbd78106.jpg'
      },
      {
          title : '특대형 기저귀',
          price : '50,000원',
          src : 'https://digitalchosun.dizzo.com/site/data/img_dir/2020/06/26/2020062680175_0.jpg'
      },
      {
          title : '킨도 기저귀',
          price : '250,000원',
          src : 'https://kindoh.co.kr/web/product/big/202010/54666d1871db1ac61548fdf42bd120ae.jpg'
      },
      {
          title : '하기스 기저귀',
          price : '500,000원',
          src : 'https://i.namu.wiki/i/0YFc2p2YQTYw9s0a7vN7NaKEEOAKbgOm1eVSxexH4RsWKhcFg-OT7xCxo3Np6iMpIPApp35HbD15BtRyteokUw.webp'
      },
      {
          title : '액상분유',
          price : '30,000원',
          src : 'https://cdn.kmpnews.co.kr/news/photo/202007/39752_34857_1742.jpg'
      },
      {
          title : '앱솔루트',
          price : '130,000원',
          src : 'https://review1004.com/wp-content/uploads/2022/09/Monosnap-%E1%84%8F%E1%85%AE%E1%84%91%E1%85%A1%E1%86%BC-_-%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%89%E1%85%A9%E1%86%AF%E1%84%85%E1%85%AE%E1%84%90%E1%85%B3-%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8-2FL-%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B2-2%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8-2022-09-26-12-03-21.jpg'
      },
      {
          title : '쪽족이',
          price : '250,000원',
          src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4bt8Npf88dA5cssmXUXHcOiX0bVEf25eUfqt-TStnCx3c3kOhXoZwU8UcOPBDDxqYMU&usqp=CAU'
      },
      {
          title : '아기옷',
          price : '50,000원',
          src : 'https://m.ppoya.co.kr/web/product/big/202308/659cdc5ab4570dbde53da6e4cb84ea1c.jpg'
      },
      {
          title : '특대형 기저귀',
          price : '50,000원',
          src : 'https://digitalchosun.dizzo.com/site/data/img_dir/2020/06/26/2020062680175_0.jpg'
      },
      {
          title : '킨도 기저귀',
          price : '250,000원',
          src : 'https://kindoh.co.kr/web/product/big/202010/54666d1871db1ac61548fdf42bd120ae.jpg'
      },
      {
          title : '하기스 기저귀',
          price : '500,000원',
          src : 'https://i.namu.wiki/i/0YFc2p2YQTYw9s0a7vN7NaKEEOAKbgOm1eVSxexH4RsWKhcFg-OT7xCxo3Np6iMpIPApp35HbD15BtRyteokUw.webp'
      },
      {
          title : '액상분유',
          price : '350,000원',
          src : 'https://cdn.kmpnews.co.kr/news/photo/202007/39752_34857_1742.jpg'
      },
      {
          title : '앱솔루트',
          price : '130,000원',
          src : 'https://review1004.com/wp-content/uploads/2022/09/Monosnap-%E1%84%8F%E1%85%AE%E1%84%91%E1%85%A1%E1%86%BC-_-%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%89%E1%85%A9%E1%86%AF%E1%84%85%E1%85%AE%E1%84%90%E1%85%B3-%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8-2FL-%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B2-2%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8-2022-09-26-12-03-21.jpg'
      },
      {
          title : '쪽족이',
          price : '250,000원',
          src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4bt8Npf88dA5cssmXUXHcOiX0bVEf25eUfqt-TStnCx3c3kOhXoZwU8UcOPBDDxqYMU&usqp=CAU'
      },
      {
          title : '아기옷',
          price : '50,000원',
          src : 'https://m.ppoya.co.kr/web/product/big/202308/659cdc5ab4570dbde53da6e4cb84ea1c.jpg'
      },
  ],
    firstlogin:0,
    weather : {
      lat : '',
      lon : '',
      myweather : '',
      mylocation : ''
    },
    yourposition : {
      top : false,
      left : false,
      right:false,
      buttom:false,
      back : false,
      front:false
    },
    signdata : null,
    shoppingcart:[],
    baguni:[],
    userpoint : 0,
    guest: false,
    todo:[],
    todotf:false,

  },
  getters: {
    userlogin(state){
      return state.userid
    },
    nowpage(state){
      return state.nowpagename
    },
    getsidebtnstate(state){
      return state.putsidebtn
    },
    getlevels(state){
      return state.levels
      },
      getnaverloginpage(state){
        // console.log( state.naverhtml)
        return state.naverhtml
      },
      gettest(state){
        return state.test
      },
      getmycode(state){
        return state.mycode
      },
      getttfalse(state){
        return state.ttfalse
      },
      getnowloading(state){
        return state.nowloading
      },
      getclient_secret(state){
        return state.secret
      },
      getmykakaocode(state){
        return state.mykakaocode
      },
      getdicemenu(state){
        return state.dicemenu
      },
      getbabynote(state){
        return state.babynote
      },
      getkakaoauth(state){
        return state.kakaoauth
      },
      getnaverauth(state){
        return state.naverauth
      },
      getbabyproduct(state){
        return state.babyproduct
      },
      getfirstlogin(state){
        return state.firstlogin
      },
      getlat(state){
      return  state.weather.lat
      },
      getlon(state){
        return state.weather.lon
      },
      getfront(state){
        return state.yourposition.front
      },
      gettop(state){
        return state.yourposition.top
      },
      getleft(state){
        return state.yourposition.left
      },
      getright(state){
        return state.yourposition.right
      },
      getbuttom(state){
        return state.yourposition.buttom
      },
      getback(state){
        return state.yourposition.back
      },
      getsigndata(state){
        return state.signdata
      },
      getmyweather(state){
        return state.weather.myweather
      },
      getmylocation(state){
        return state.weather.mylocation
      },
      getbaguni(state){
        return state.baguni
      },
      getmynavercode(state){
        return state.mynavercode
      },
      getuserpoint(state){
        return state.userpoint
      },
      getguest(state){
        return state.guest
      },
      gettodo(state){
        return state.todo
      },
      getuserloginnow(state){
        return state.userloginnow
      },
      gettodotf(state){
      return state.todotf
      }

  },
  mutations: {
    setttfalse(state,value){
      return state.ttfalse = value
    },
    signup(state,value){
      return state.userid = value
    },
    setuserloginnow(state,value){
      return state.userloginnow = value
    },
    setnowpage(state,pagename){
      return state.nowpagename = pagename
    },
    sidebtnput(state,value){
      return state.putsidebtn = value
    },
    setlevel(state,value){
      return state.levels = value
    },
    fnSetLoading(state,value){
      return state.userloading = value
    },// 제미니 실행해야함
    setpart(state,value){
      switch (value) {
        case 0: 
        return  state.parts[0] = state.parts.push({text: "input: {level\":5,\"type\":\"word\"}"})
        case 1: 
        return state.parts[0] = {text: "input: {\"level\":1,\"type\":\"sentence\"}"}  
        case 2: 
        return state.parts.push( {text: "input: {\"level\":2,\"type\":\"sentence\"}"})
        case 3: 
        return state.parts.push({text: "input: {\"level\":3,\"type\":\"sentence\"}"})
        case 4: 
        return state.parts.push({text: "input: {\"level\":4,\"type\":\"sentence\"}"})
        case 5: 
        return  state.parts.push({text: "input: {\"level\":5,\"type\":\"sentence\"}"})
        case 'word': 
        return state.parts.push({text: "input: {level\":5,\"type\":\"word\"}"})
      }
    },
    naverloginpage(state,html){
      return state.naverhtml = html
    },
    settest(state,value){
      return state.test= value
    },
    setmycode(state,value){
      return state.mycode = value
    },
    setnowloading(state,val){
      return state.nowloading = val
    },
    setmykakaocode(state,value){
      return state.mykakaocode = value
    },
    setdicemenu(state,value){
      return state.dicemenu = value
    },
    setbabynote(state,value){
      return state.babynote = value
    },
    setkakaoauth(state,value){
      return state.kakaoauth = value
    },
    setnaverauth(state,value){
      return state.naverauth = value
    },
    setfirstlogin(state,value){
      return state.firstlogin =value
    },
    setlon(state,value){
      return state.weather.lon = value
    },
    setlat(state,value){
      return state.weather.lat = value
    },
    setfront(state,value){
      return state.yourposition.front = value
    },
    setbuttom(state,value){
      return state.yourposition.buttom = value
    },
    setleft(state,value){
      return state.yourposition.left = value
    },
    setright(state,value){
      return state.yourposition.right = value
    },
    setsigndata(state,value){
      return state.signdata = value
    },
    setmyweather(state,value){
      return state.weather.myweather = value
    },
    setmylocation(state,value){
      return state.weather.mylocation = value
    },
    setbaguni(state,value){
      return state.baguni.push(value)
    },
    fetchbaguni(state,value){
      return state.baguni = value
    },
    delbaguni(state,value){
      return state.baguni = state.baguni.filter((item,idx)=>{return item.id != value})
    },
    setmynavercode(state,value){
      return state.mynavercode = value
    },
    setuserpoint(state,value){
      return state.userpoint += value
    },
    setguest(state,boolean){
      return state.guest = boolean
    },
    settodo(state,text){
      return state.todo= [...state.todo, text]
    },
    fetchtodo(state,object){
      return state.todo = object
    },
    deltodo(state,id){
    return state.todo = state.todo.filter((item)=>{return item.id != id})
    },
    uptodo(state,id){
    return state.todo = state.todo.map((item)=>{
      if(item.id == id){
          const date = new Date()
          return item = {...item, done : !item.done, create :(date.getMonth()+1) + '월' + (date.getDate()+'일')+ (date.getHours()+'시') }
      }else{
        return item
      }})
    },
    settodotf(state,boolean){
      return state.todotf = boolean
    }
  },
  actions: {
     //dispatch로 실행해야함
      geminigo({ commit }, payload) {
        commit('fnSetLoading', true) 
        generateContent()
      },
      async generateContent( aaa) {
        try {
      const response = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/generate_easy', {
          method: 'POST'
          ,
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({text: "input: {\"level\":2,\"type\":\"sentence\"}"}),
      });
      const result = await response.text();
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = `<p>${result}</p>`;
      resultText.push(result)
      console.log(resultText)
    } catch (error) {
      console.error(error);
    }
  },
  async fetchnaver(payload,value){
      payload.commit()
    // const url = '/oauth2.0/token'
    // const redirect_uri = 'http://localhost:8080/neweng/naver'
    // const response_type = 'code'
    // let fullurl = url +`?response_type=${response_type}&client_id=${client_id}&redirect_uri=${encodeURI(redirect_uri)}&state=${mystate}`
 //
    // const url = 'https://nid.naver.com/oauth2.0/token'
    // const client_id = 'QJ5hHy5NLVcKEmQDp7OS'
    // const client_secret = '9AhFkSWq3P'
    // const authorization_code = value
    // const grant_type = 'authorization_code'
    // const mystate = encodeURI('Random_state')
    // const formdata=new FormData()
    // formdata.append( 'grant_type' , grant_type )
    // formdata.append( 'client_id' , client_id )
    // formdata.append( 'client_secret' , client_secret )
    // formdata.append( 'code' , authorization_code )
    // formdata.append( 'state' , mystate )
    // formdata.append( 'expires_in' , 360000 )
    //

    // await fetch(url,{
    //    method : 'POST',
    //    headers : {
    //     'Access-Control-Allow-Origin' : '*'
    //    },
    //    body : formdata,
    //  }).then((data)=>{console.log(data)
    //     payload.commit('naverloginpage',result)

    //   })//
    //    
      
    // .catch(error => console.log('error', error)) 
  
    // .then((result)=>{console.log(result) }).catch(error => console.log('error', error));
    },
    testaction(one){
      one.commit('settest','성공')
    }

},
  modules: {
  
}})
