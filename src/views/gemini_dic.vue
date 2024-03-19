<template>
    <div class="kakaotalk">
        <div class="kakaomain">
            <div class="kakaobg">
                <img src="../assets/img/kakaotalk1.png" alt="">
                <form action="" method="get" name="kakaologin" id="kakaologin">
                    <fieldset>
                        <!-- <legend class="xx">카카오로그인</legend> -->
                        <input type="text" placeholder="카카오계정 (이메일)" id="userId">
                        <input type="password" placeholder="비밀번호" id="userPass">
                        <button type="button" id="userloginbtn">로그인</button>
                        <div class="wrapbb"><input type="checkbox" id="checkb">
                            <!-- <p>잠금모드로 자동로그인</p> -->
                        </div>
                    </fieldset>
                </form>
            </div>
            <!-- 로그인 성공시 kakaobg를 디스플레이 none으로 변경하고 이 화면을 표시 -->
            <div class="loginsuccess">
                <div class="wrapbb1">
                    <div class="kakaoheader">
                        <h2>재미니 단어퀴즈</h2><img src="../assets/img/setting.png" alt="">
                    </div>
                    <div class="blankm"></div>
                    <div class="kakaomain2">
                        <div class="frontimg">
                            <h2 v-if="ttfalse">오늘의 퀴즈</h2>
                            <h2 v-else> Today Quiz</h2>
                            <img src="../assets/img/myman.png" alt="">
                        </div>
                        <div class="quiz">
                            <h5 v-if="ttfalse">정답을 맞춰보세요</h5><h5 v-else>Guess the correct answer</h5>
                            <span>Q :</span>
                            <h3 class="quiztext">{{kortext}}</h3>
                            <!-- <h3 class="quiztext" v-else>{{ engtext }}</h3> -->
                            <input type="text" v-model="mytext" @keydown="req" class="textinput">
                     
                        </div>

                    </div>
                    <div class="kakaofooter">
                    
                            <span class="hint" v-if="ttfalse" @click="hinta">힌트보기</span>
                            <span class="hint" v-else @click="hinta">Hint</span>
                     
                            <span class="push" v-if="ttfalse" @click="myre">정답보기</span>
                            <span class="push" v-else @click="myre">Submit</span>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const ttfalse = computed(()=>{
    return store.getters.getttfalse
})

const mytext = ref('')


// const inner = ref('')
//한국어 문제는 여기에
const kortext = ref('')
//영어 문제는 여기에

//힌트는 여기에 받기
const myhint = ref('')
//결과
function hinta(){
    alert(myhint.value)
}
const myresult =ref('')
function myre(){
    alert(myresult.value)
}
function req(value) {
    if (value.key == 'Enter' ) {
            if(myresult.value.replace(/\s/,'') ==mytext.value){
                alert('정답입니다')
                store.commit('setuserpoint',50)
            }else{
                alert('오답입니다.')
            }
    
    // if (value.key == 'Enter' && chatmode.value == 1) {
    //     newtext.value.push(mytext.value)
    //     mytext.value = ''
    //     setTimeout(function () {
    //         chatmode.value = 2
    //     }, 1000)
    // } else if (value.key == 'Enter' && chatmode.value == 0) {
    //     newtext.value.push(compute[0])
    //     generateContent().then(newtext.value.push(engtext)).catch(err=>{generateContent()})
    //     setTimeout(function () {
    //         chatmode.value = 1
    //     }, 1000)
    // } else if (value.key == 'Enter' && chatmode.value == 2) {
    //     generateContent().then(newtext.value.push(engtext))
    //     setTimeout(function () {
    //         mytext.value = ''
    //         chatmode.value = 0
    //     }, 1000)
    }
}

generateContent()

async function generateContent() {
    try {
        const response = await fetch('/generate_easy', {
            method: 'POST'
            ,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: "input: {\"quiz\":1,\"type\":\"sentence\"}" }),
        });
        if(response.ok){
            const result = await response.text();
            const newtext = JSON.parse(result)
            kortext.value = newtext.kor
            // engtext.value = newtext.eng
            myhint.value = newtext.hint
            myresult.value = newtext.result
            
        }

    } catch (error) {
        console.error(error);
        alert('서버가 닫혀있어 기능 사용이 어렵습니다. 관리자에게 연락바랍니다 010-2190-6008')
    }
}

const computermsg = computed(() => {
    return
})

</script>

<style scoped>
.kakaotalk {
    border-right: 1px solid black;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid black;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.411);

}

.kakaomain {
    background: #bbb8bb;
    padding: 5px;


}

.kakaobg {
    /* 카카오톡 로그인성공시 아래  */
    display: none;
}

.kakaobg img {
    width: 130px;
    overflow: hidden;
    height: 150px;
    object-fit: contain;
    margin-bottom: 30px;

}

#kakaologin fieldset input {
    font-size: 20px;
    padding: 0 10px;
    box-sizing: border-box;
}

#kakaologin fieldset input:focus {
    outline: none;
}

#kakaologin fieldset {
    border: 0 none;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.wrapbb {
    display: flex;
    gap: 5px;
}

.wrapbb1 {
    width: 100%;
    height: 100%;
}

/* 카카오톡 로그인 성공화면 */
.loginsuccess {
    /* display: none; */
    background: rgb(255, 255, 255);
    width: 100%;
    position: relative;
    height: 100%;
}

.kakaoheader img {
    width: 35px;
    object-fit: contain;
    vertical-align: middle;
}

.kakaoheader {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    height: 50px;
    align-items: center;
    position: absolute;
    top: 5px;
    background: white;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 1px 1px #00000040;
}

.textinput {
    /* display: flex;
    justify-content: center;
    margin: 0 auto; */
        width: 80%;
    font-size: 20px;
}

.blankm {
    margin-bottom: 50px;
    height: 1px;
}

.kakaomain2 {
    display: flex;
    flex-direction: column;
    width: 100%;
   align-items: center;
    overflow-x: hidden;
    height: calc(80vh - 60px);
}

.kakaomain2 img {
    width: 30vw;
    max-width: 150px;
    object-fit: contain;
    margin-right: 5px;
}




.frontimg{
    display: flex;
    background-color:rgba(255, 255, 0, 0.063);
    width: 100%;
    height: 25vh;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}
.frontimg h2{
    display: flex;
    justify-content: center;
    align-items: center;
}
.kakaomain2 h3 {
    margin-left: 10px;
}
.kakaofooter{
    display: flex;
    gap:10px;
    justify-content: center;
    padding-bottom: 10px;
}
.kakaofooter span{
    cursor: pointer;
    width: 100px;
    height: 30px;
    box-shadow: 1px 1px 3px black;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.quiztext{
    margin-bottom: 15px;
}
.hint{
    background-color: rgba(180, 180, 180, 0.705);
}
.push{
    background-color: #e7af47;
}
</style>
