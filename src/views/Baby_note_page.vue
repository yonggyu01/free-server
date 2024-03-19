<template>
    <div class="h-full">
        <div class="wrapbox h-full">
            <h1 class="text-3xl font-bold sm:text-4xl text-center">{{ mypost?.title }}</h1>
            <div class="username flex items-center">
                <img :src="`https://steemitimages.com/u/${mypost?.author}/avatar/small`" alt="" class="userlogo">
                <h5 class="text-gray">작성자 {{ mypost?.author }}</h5>
            </div>
            <br>
            <div v-for=" (x, idx ) of mypost?.body?.split('\n')" :key="'my' + idx" class="m-auto">
                <img v-if="x.match(/!.*\)/gm)" :src="x.match(imgsrc)[0]" class="lg:w-3/4 m-auto object-cover mb-4 ">
                <p v-else class="text-lg text-center py-2 mb-2"> {{ x.replace(imgsrc, '').replace(/!.*\)/gm,'')  }} </p>
            </div>
            <br>
            <!-- <div class="flexbox">

                <img :src="mypost?.body?.match(imgsrc)" alt="" class="img1" v-if="mypost?.body?.match(par)">
            </div> -->

        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
const route = useRoute()
const router = useRouter()
const store = useStore()
const pagenum = route.params.pagenum
console.log(route.params.pagenum)
const mypost = store.getters.getbabynote[pagenum]
const hangul = /[ㄱ-ㅣ가-힣].+/gm
const imgsrc = /https.+[$jpg]/i

const par = /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi
onBeforeMount(() => {
    if (!pagenum) {
        router.push('/baby')
    }
})
onUnmounted(() => {

})
</script>

<style>
.flexbox{
    display: flex;
    justify-content: center ;
    height: 60%;
}
.img1 {

    width: 70vw;
}
.username{
    display: flex;
    align-items: center;
    gap:5px;
}
.username img{
    width: 50px;
    border-radius: 50%;


}
.wrapbox{
    width: 80vw;
    /* height: 100vh; */
    margin: 0 auto 0px;
    border-left: 1px solid goldenrod;
    border-right: 1px solid goldenrod;
    padding-left: 5px;
    padding-top: 5px;
    /* padding-bottom: 30px; */
    box-sizing: border-box;

}
.wrapbox h1{
    margin: 10px 0 0 0;
}
</style>