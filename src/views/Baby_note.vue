<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';
const store = useStore()
const router =useRouter()
const imgsrc = /https.+[$jpg]/i
const par = /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi
const hangul = /[ㄱ-ㅣ가-힣].+/gm
const hangulno = /[^ ㄱ-ㅣ가-힣]/gm
var client = new dsteem.Client('https://api.steemit.com')
let textme = ref(null)
var mapdata = async (mytag='momscafe', num, post='created') => {
    const mydata = await client.database.getDiscussions(post, { tag: mytag, limit: num }).catch(err => {console.log('서버데이터 접속불가')})
    const result = await mydata
    textme.value = result
    console.log(result)
    store.commit('setbabynote',result)
    console.log(store.getters.getbabynote, '스토어에서 가져옴')
}
mapdata('momscafe', 15, 'created')
const selecttext= (num)=>{
    router.push({ name: 'babydetail', params: { pagenum: num }})
}
const tagval =ref('')
const tagtr =ref('')
function newlist(e){
    if(tagval.value && tagtr.value){
        textme.value=null
        mapdata(tagval.value, 15, tagtr.value)
    }else{

    }
}
</script>
<template>
    <div>
        <div class="selectbox">
            <select name="hashtag" id="hashtag" v-model="tagval">
                <option value="" disabled title="해시태그">해시태그</option>
                <option value="momscafe">맘카페</option>
                <option value="kr">한국</option>
                <option value="kr-dev">개발자</option>
                <option value="avle">일상글</option>
            </select>
            <select name="listselect" id="listselect" v-model="tagtr">
                <option value="" disabled title="글선택">글선택</option>
                <option value="trending">대세글</option>
                <option value="created">최신글</option>
            </select>
            <button @click="newlist"> 목록변경 </button>
        </div>
        <div class="babybox">
            <!--  -->
            <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div class="max-w-lg transition cursor-pointer hover:scale-105 p-4 shadow-md bg-slate-200 rounded text-gray-800" v-for="(x, idx) in textme" :key="x?.post_id" @click="selecttext(idx)">
		<div class="flex justify-between pb-4 border-bottom">
			<div class="flex items-center">
                <span class="author "> <img :src="`https://steemitimages.com/u/${x?.author}/avatar/small`" alt="" class="userlogo" > <span class="ml-2"> 작성자 {{ x?.author }}</span></span>
			</div>
			<a >See All</a>
		</div>
		<div class="space-y-4">
			<div class="space-y-2">
                <img :src="x.body.match(imgsrc)" alt="" class="mainimg block  object-cover object-center w-full rounded-md h-72 bg-gray-500" v-if="x.body.match(par)"><span class=" block object-cover object-center w-full flex items-center justify-center rounded-md h-72 bg-gray-500" v-else> 이미지 없습니다. </span> 
				<div class="flex items-center text-xs">
				</div>
			</div>
			<div class="space-y-2">
				<a rel="noopener noreferrer" href="#" class="block">
					<h3 class="text-xl font-semibold text-cyan-600 truncate">{{ x?.title }}</h3>
				</a>
				<p class="leading-snug text-gray-600 line-clamp-3">{{  x?.body?.replace(hangulno,'') }}</p>
			</div>
		</div>
	</div>
        </section>          

    
    </div>
    </div>
  
</template>
<style scoped>
.babybox {
    max-width: calc(100vw - 80px);
    margin: 20px auto 0;
    box-sizing: border-box;
    overflow-x: hidden;
    grid-template-columns: repeat(auto-fit, minmax(900px, 1fr));

}
.nullimg{
    min-width: 120px;
    max-width: 120px;
    height: 100px;
    background-color: goldenrod;
}
.userlogo{
    width: 30px;
    border-radius:50% ;
}
.mainimg{

    object-fit: cover;
}
.textbox {
    /* width: 95%; */
display: flex;
border: 1px solid rgb(248, 152, 74);
    overflow: hidden;
    margin-bottom: 20px;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    box-sizing: border-box;
}
.textbox:hover{
    box-shadow: 1px 1px 5px red;
    box-sizing: border-box;
}
.textlinewrap {
    display: flex;
    flex-direction: column;
    gap : 10px;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
}
.textlinewrap h2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 5px;
}
.textlinewrap p {
    width: 62vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.author{
    font-size: 0.8em;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}
.selectbox{
    display: flex;
    width: 80vw;
    margin: 0 auto;
    padding: 10px 0 0 0 ; 
    justify-content: flex-end;
    gap:5px
}
.selectbox select{
    font-size:1.1em;
}
.selectbox button{
    font-size:1.1em
}
@media (min-width: 340px) {
  .babybox {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}
</style>