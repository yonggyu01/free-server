<template>
    <div class="mainsite">
  
      <div class="mybox"> 
        <a href="#none">
        <span class="material-symbols-outlined">
        event_note
        </span><h2 v-if="ttfalse">일정관리</h2><h2 v-else>Todo_List</h2>
      </a>
      </div>
      <div class="mybox"> 
        <a href="#none">
        <span class="material-symbols-outlined">
        newspaper
        </span><h2 v-if="ttfalse">공지사항</h2><h2 v-else>Notice</h2>
        </a>
      </div>
      <div class="mybox"> 
        <a href="#none">
        <span class="material-symbols-outlined">
        menu_book
      </span><h2 v-if="ttfalse">미니게임</h2><h2 v-else>Mini game</h2>
        </a>
      </div>
      <div class="mybox"> 
        <a href="#none" @click="this.$router.push('/gemini')">
        <span class="material-symbols-outlined">
  dictionary
  </span><h2 v-if="ttfalse">제미니 단어장</h2><h2 v-else>Dictionary</h2>
        </a>
      </div>
      <div class="mybox"> 
        <a href="#none">
        <span class="material-symbols-outlined">
  video_camera_front
  </span><h2 v-if="ttfalse">유튜브에서 공부하기</h2><h2 v-else>Study Youtube</h2>
        </a>
      </div>
      <div class="mybox"> 
        <a href="#none" @click="this.$router.push('/level')">
        <span class="material-symbols-outlined">
  manufacturing
  </span><h2 v-if="ttfalse">난이도 변경</h2><h2 v-else>Difficulty change</h2>
        </a>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'Mainview',
    props:{ttfalse:Boolean},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
.mainsite h1{
  margin: 0;
}
.mainsite{
  background-color: #ededed;
  height: calc(100vh - 140px);
  width: 100vw;
  gap:1vw;
  padding:10px 10px;
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 5px;
  grid-template-areas:
                        "a b"
                        "c d"
                        "e f"
    ;
}
.mybox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 1px 3px black;
  margin:5px auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.mybox span{
  font-size: 4em;
  margin-bottom: 5px;
}


h1{
  padding-top: 30px;
}
.hide{
display: none;
}
</style>
