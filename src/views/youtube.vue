<template>
<div class="myfull"> 
  <div class="inputflexbox">
    <form>
    <fieldset class="w-full space-y-1 text-gray-800">
		<label for="Search" class="hidden">Search</label>
		<div class="relative">
			<span class="absolute inset-y-0 left-0 flex items-center pl-2">
				<button type="button" title="search" class="p-1 focus:outline-none focus:ring">
					<svg fill="currentColor" viewBox="0 0 512 512" class="w-4 h-4 text-gray-800">
						<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
					</svg>
				</button>
			</span>
			<input v-model="selectlist" type="search" name="Search" placeholder="Search..." class="w-32 py-2 pl-10 text-sm border-gray-800 rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-cyan-600">
      <!-- <input v-model="number" type="number" name="number" class="w-12 py-2 ml-4 pl-2 text-sm rounded-md border-gray-800 focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-cyan-600"> -->
      <button @click.prevent="getYoutubeDatas(selectlist,number)" class="ml-4 px-2 py-1 border rounded-md border-gray-800">변경</button>
		</div>
	</fieldset>
</form>
   
   
  </div>
  <div >
	<div class="max-w-screen-xl p-5 mx-auto bg-gray-100 text-gray-800 pt-8" style="background: #e7af4779;">
		<div >
      <!--  -->

         <div class="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2 ">
            <div
              v-for="(t,idx ) in playlist" :key="'video1'+idx"
              class="group bg-slate-100 aspect-[4/3] relative overflow-hidden rounded-2xl bg-black/25 transition hover:ring-4 hover:ring-indigo-500/50 active:opacity-75 active:ring-indigo-500/25"
            >
           

            <iframe  ref="videos" class="object-cover aspect-[4/3]" style='width:100%' :src="`https://www.youtube.com/embed/${t.id.videoId}?enablejsapi=1&autoplay=0&mute=1&controls=1&loop=1&playlist=${t.id.videoId}`" frameborder="0"></iframe>

    
          </div>
          
          </div>



      
<!--  -->

		</div>
	</div>
  
  </div>
</div>
</template>
<script setup>
import { onMounted,ref } from "vue"
const playlist = ref([])
const selectlist=ref('육아정보')
const number = ref(9)
const videos =ref([])
const key = process.env.VUE_APP_Youtube
onMounted(()=>{
  getYoutubeDatas('육아정보','9')
})

async function getYoutubeDatas(value, num){
  let url = new URL('https://www.googleapis.com/youtube/v3/search');
  let params = {   key: key,
        q: value,
        part: "snippet",
        type: "video",
        maxResults: num,
        fields: "items(id, snippet(title))",
        videoEmbeddable: true};
  url.search = new URLSearchParams(params).toString();
  const headers = new Headers()
    headers.append("Content-type" , "application/json")
    const youtubedata = await fetch(url).catch(err=> console.log('데이터 회신불가'))
    const result = await youtubedata.json()
    const {items} = result
    playlist.value  = items
    console.log(playlist.value )
}
</script>
<style scoped>
details{
  margin: auto;
}
summary{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 400px;
}
.myfull{
  background-color: #e7af4779;
  /* height: calc(100vh - 160px); */
  padding-left: 10px;
  padding-right: 10px;
}
.slide_video{
  width: 400px;
  height: 315px;
  
}
.slidebox{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr) );
  gap: 20px;
}
.inputflexbox{
  display: flex;
  gap:10px;
  margin: 10px 0; 
  justify-content: center;
}
</style>