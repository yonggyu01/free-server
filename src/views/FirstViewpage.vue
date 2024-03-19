<template>
    <div class="fullwrap">
   
        <div class="firstlogoWrap">
            <div class="mymanwrap">
                <img src="../assets/img/myman.png" alt="" class="myman" @click="hide" :style="znum">   
                <p v-show="hidep==0"><a href="#none" @click="hide" class="flex flex-row">Click me</a></p> 
            </div>
       
     
        <!-- <div class="custom-shape-divider-top-1705295770">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg> 
        </div>-->
        </div>

        <div class="wraproundbox" :style="{transform : transy}">
            <div class="roundbox"></div>
            <div class="roundbox2" ></div>
        </div>
        <div class="loginbtn" :style="signupcom" >
            <h1><a href="#none" @click="slideupdown">Welcome</a></h1>
            <p> 육아정보 페이지에 오신걸 환영합니다. </p>
            <form action="server.js" method="post" name="signlog" id="signlog" >
                <fieldset >
                    <legend class="xx"> 회원가입 및 로그인 </legend>
                    <div class="wrapflexbod" >
                        <button type="button" class="transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500" @click="gogo('sign')">Sign up</button>
                        <button type="button" class="transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"  @click="gogo('login')">Login</button>
                        <button type="button" class="transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 "  @click="gogo('guest')">Guest</button>
                    </div>
                    <div class="signpage" >
                        <div class="signpageback"><a href="#none" @click="hide">Back</a></div>
                        <section id="joinpage" class="joinpage" :style="joinpageview">
                            <signbtn></signbtn>    
                  

                </section>
                <loginbtn v-show="logingo == 1" :style="loginopacity"> </loginbtn>
                      
                    </div>
                </fieldset>
            </form>
        </div>
    </div>

</template>
<script>
import signbtn from '../views/SignPage.vue'
import loginbtn from '../views/LoginPage.vue'

export default {

    components:{
        signbtn,loginbtn
    },
    data(){
        return{
           signgo : 1,
           logingo : 0,
           slidemenu:0,
           hidep:0,
           transy: {
            transform: 'translateY(15px)'
           },
           signup:0,
           signupcom:'',
           joinpageview:{
               transform: `translateY(300px)`,
           },
           znum:'z-index:1',
           loginopacity:'opacity:0'
        }
    },
    methods:{
        gogo(value){
            this.znum='z-index:0'
            if(value=='sign'){
                this.signup = 1
                this.signgo=2
                this.logingo =0 
                this.loginopacity = 'opacity:0'
                console.log(this.signup)
                this.signupcom='top:-10vh'
                this.joinpageview.transform= `translateY(40px)`
                this.transy.transform= `translateY(-800px)`
            }else if(value=='login'){
                this.logingo =1
                this.signgo=1
                this.signupcom='top:45vh'
                this.transy.transform=`translateY(-600px)`
                this.joinpageview.transform= ` translateY(1200px)`
                setTimeout(() => {
                    this.loginopacity = 'opacity:1'
                }, 1000);
            }else{
                this.$store.commit('setfirstlogin', 1) 
                this.$store.commit('setuserloginnow', true)
                this.$store.commit('setguest', true )
                  this.$router.replace('/loginsuc')
              alert('서버가 닫혀있어 게스트 계정으로 진행합니다. 대부분의 기능 사용이 불가능합니다.')
            }
            
        },
        slideupdown(){
            this.slidemenu++
            this.signgo=0
            this.slidemenu%2==1?  this.signupcom = 'top:76vh' :this.signupcom ='top:88vh;'  
            this.slidemenu%2==1?  this.transy.transform = `translateY(-650px)` : this.transy.transform= `translateY(-800px)`
            // console.log(event.target.parentElement.parentElement)
        },
        hide(){
            this.transy.transform= `translateY(-600px)`
            this.hidep=1
            this.signupcom='top:70vh'
            this.joinpageview.transform= `translateY(1200px)`
            this.logingo = 0
            this.loginopacity = 'opacity:0'

        }

    },
    computed:{
  
    },
    
}
</script>
<style scoped>
.login{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30vh;
    left: 5vw;
    opacity: 0;
    transition: all 0.5s;
}
.wraproundbox{
    position: absolute;
    height: 100vh;
    width: 100vw;
    top:0;
    transition: all 1s;
    transform: translateY(0px);
}
.roundbox{
    display: flex;
    width: 30vh;
    height: 30vh;
    background-color: #E7AE47;
    border-radius: 50%;
    position: absolute;
    top:-100px;
    right:-50px
}
.roundbox2{
    display: flex;
    width: 50vh;
    height: 50vh;
    background-color: #E7AE47;
    border-radius: 50%;
    position: absolute;
    bottom:-50px;
    left:-200px
}
.loginbtn{
    position: absolute;
    top: 110vh;
    z-index: 1;
    background: #E7AE47;
    width: 100vw;
    height: 200vh;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    transition: all 1s;
}
.loginbtn > h1{
    color:#3c3c3c;
    margin-left: 20px;
    font-size:3em ;
    padding-top: 20px;
 
}
.loginbtn p{
    padding-left : 20px;
    margin-bottom: 50px;
}
.wrapflexbod{
    position: absolute;
    z-index: 2;
    left : 5vw;
    top: 18vh;
    display: flex;
    gap:15px
}
.wrapflexbod button:not(:first-child){
    border: none;
    border-top-left-radius: calc(2em/2);
    border-bottom-left-radius: calc(2em/2);
    border-top-right-radius:calc(2em/2) ;
    border-bottom-right-radius: calc(2em/2);
    width: 4em;
    background-color: rgb(255, 255, 255);
    font-size:2em ; 
    box-shadow:0px 1px 4px #00000066;
    cursor: pointer;
}   
.wrapflexbod button:not(:nth-child(2)){
    border: none;
    background-color: #3c3c3c;
    width: 4em;
    color:white;
    border-top-left-radius: calc(2em/2);
    border-bottom-left-radius: calc(2em/2);
    border-top-right-radius:calc(2em/2) ;
    border-bottom-right-radius: calc(2em/2);
    font-size:2em ;
    box-shadow:0px 1px 4px #00000066;
    cursor: pointer;
}
.wrapflexbod button:last-child{
    border: none;
    background-color: #c6c6c6;
    width: 4em;
    color:rgb(79, 78, 78);
    border-top-left-radius: calc(2em/2);
    border-bottom-left-radius: calc(2em/2);
    border-top-right-radius:calc(2em/2) ;
    border-bottom-right-radius: calc(2em/2);
    font-size:2em ;
    box-shadow:0px 1px 4px #00000066;
    cursor: pointer;
}
#signlog fieldset{
    border: none;

}

.firstlogoWrap{
    height: 50vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mymanwrap{
    padding-top: 200px;
    /* position: absolute; */
    /* top:30vh; */
    /* left:35vw; */
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.myman{
    width: 10em;
    z-index:1;
}
/* .custom-shape-divider-top-1705295770 svg {
    position: relative;
    display: block;
    width: calc(169% + 1.3px);
    height: 600px;
    transform: rotateY(180deg);
}
.custom-shape-divider-top-1705295770 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    transform: matrix();
}
.custom-shape-divider-top-1705295770 .shape-fill {
    fill: #E7AE47;
} */
.fullwrap{
 height: 100vh;
 width: 100vw;
 /* background-color: #3c3c3c; */
 position: relative;
 overflow: hidden;
}
table,tr,td,th{
    border-spacing: 0;
}

a{
    text-decoration: none;
    color:inherit;
}
fieldset{
    border: 0 none;
}
.joinpage{
    width: 100vw;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.174);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 150vh;
    box-sizing: border-box;
    background-color: white;
    transition: all 1s;
}
.signpageback{
    position: absolute;
    right: 3vw;
    top: 20vh;
}
</style>
