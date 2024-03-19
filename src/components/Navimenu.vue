<template>
  <div class="Navimenu">
    <nav>
    <a href="#none" class="mylogo" @click="usermore">
      <span class="material-symbols-outlined">apps</span>
    </a>

    <h2>{{store.getters.nowpage}}</h2>
    <!-- <router-link to="/loginsuc"><span v-if="tfalse">메인화면</span><span v-else>Home</span></router-link> |
    <router-link to="/sign"><span v-if="tfalse">회원가입</span><span v-else>Sign</span></router-link> |
    <router-link to="/login"><span v-if="tfalse">로그인</span><span v-else>Login</span></router-link> | -->

    <a href="#none" @click="eng">
    <span class="material-symbols-outlined" v-if="store.getters.getttfalse">
language
<h4  class="engg">Eng </h4>
</span>   <span v-else class="material-symbols-outlined">
g_translate <span  class="korr">한글</span>
</span>  </a>
  </nav>
  </div>
</template>

<script>
import {ref} from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()
   const eng= ()=>{
   store.commit('setttfalse',!store.getters.getttfalse )
  }

    return{
      store,eng
    }
  },
  name: 'Navimenu',
  props: {
    msg: String
  },data(){
    return {
      tfalse : true,
      usermorebtn:true
    }
  }
,
  methods:{
    
    usermore(){
      this.usermorebtn=!this.usermorebtn
     
      this.$store.commit('sidebtnput',this.usermorebtn)
      this.$store.commit('setdicemenu',this.usermorebtn)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Navimenu{
  position: fixed;
  width: 100vw;
  min-width: 320px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.287) ;
  z-index: 1;
  top: 0

}
nav { 
  width: 100%;
  height: 60px;
  
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 5vw;
box-sizing: border-box;

/* margin: 0 auto; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}
.engg,.korr{
  margin: -1px;
  display: block;
  position: absolute;
  top:-99999999px
}
.mylogo{
  background: white;
  color:black;
  width: 1.5em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  text-decoration: none;}

nav a.router-link-exact-active {
  color: white;
}


.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
nav span:not(.material-symbols-outlined ),nav a{
  font-size:0.9em;
  width: 6em;
  min-width: 4em;
}
</style>