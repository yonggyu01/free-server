<template >
  <Navimunu  v-on:pass="newpass" v-show="loginnow"> </Navimunu>
  <sidebar :class="{'sideon' : !this.$store.getters.getsidebtnstate}"></sidebar>
  <router-view class="mainvue" />
  
  <FootCompo v-show="loginnow"></FootCompo>
     

</template>
<script>
  import Navimunu from './components/Navimenu.vue'
  import FootCompo from './components/FootCompo.vue'
  import sidebar from './components/sidebarmenu.vue'

  export default {
  name: 'indexPage',
  components: {
    Navimunu,FootCompo,sidebar},
  methods:{
    newpass(value){
      this.ttfalse = value
    },
    sidebaropen(value){
      console.log('동작하나?')
      
      this.usemorebtn = value
      console.log(this.usemorebtn,'usemoer버튼임')
    }

  },
  data(){
     return{
      ttfalse : true,
      usemorebtn : false
  
     } 
    },
    computed:{
      loginnow(){
       return this.$store.state.userloginnow
      }
    }
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* overflow: hidden; */
  box-sizing: border-box;

}
*{margin: 0;
padding: 0;
}
ul,li{
  list-style: none;
}
.xx{
  position: absolute;
  margin: -1px;
  top:-999999px;
}
a{
  text-decoration: none;
  color:inherit
}
.sideon{
  left:0
}
.mainvue{
  padding-top: 60px;
  padding-bottom: 60px;
  box-sizing: border-box;
}
h1,h2,h3,h4,h5,a,p,span{
 font-family: "Noto Sans KR", sans-serif;;
}
</style>
