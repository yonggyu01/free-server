"use strict";(self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[]).push([[392],{4392:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});t(2168),t(5104),t(8312);var l=t(4108),s=t(7764),o=t(2500);const r=e=>((0,l.ED)("data-v-08da7607"),e=e(),(0,l.ii)(),e),n={class:"myfull"},c={class:"inputflexbox"},i={class:"w-full space-y-1 text-gray-800"},d=r((()=>(0,l.QD)("label",{for:"Search",class:"hidden"},"Search",-1))),u={class:"relative"},p=r((()=>(0,l.QD)("span",{class:"absolute inset-y-0 left-0 flex items-center pl-2"},[(0,l.QD)("button",{type:"button",title:"search",class:"p-1 focus:outline-none focus:ring"},[(0,l.QD)("svg",{fill:"currentColor",viewBox:"0 0 512 512",class:"w-4 h-4 text-gray-800"},[(0,l.QD)("path",{d:"M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"})])])],-1))),v={class:"max-w-screen-xl p-5 mx-auto bg-gray-100 text-gray-800 pt-8",style:{background:"#e7af4779"}},g={class:"grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2"},y=["src"];var b={__name:"youtube",setup(e){const a=(0,o.IL)([]),t=(0,o.IL)("육아정보"),r=(0,o.IL)(9),b=(0,o.IL)([]),f="AIzaSyBTie4zHatrhyduBs7NWN6MYOg1op_BRhs";async function h(e,t){let l=new URL("https://www.googleapis.com/youtube/v3/search"),s={key:f,q:e,part:"snippet",type:"video",maxResults:t,fields:"items(id, snippet(title))",videoEmbeddable:!0};l.search=new URLSearchParams(s).toString();const o=new Headers;o.append("Content-type","application/json");const r=await fetch(l).catch((e=>console.log("데이터 회신불가"))),n=await r.json(),{items:c}=n;a.value=c,console.log(a.value)}return(0,l.u2)((()=>{h("육아정보","9")})),(e,o)=>((0,l.Wz)(),(0,l.An)("div",n,[(0,l.QD)("div",c,[(0,l.QD)("form",null,[(0,l.QD)("fieldset",i,[d,(0,l.QD)("div",u,[p,(0,l.wt)((0,l.QD)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),type:"search",name:"Search",placeholder:"Search...",class:"w-32 py-2 pl-10 text-sm border-gray-800 rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-cyan-600"},null,512),[[s.Og,t.value]]),(0,l.QD)("button",{onClick:o[1]||(o[1]=(0,s.Y7)((e=>h(t.value,r.value)),["prevent"])),class:"ml-4 px-2 py-1 border rounded-md border-gray-800"},"변경")])])])]),(0,l.QD)("div",null,[(0,l.QD)("div",v,[(0,l.QD)("div",null,[(0,l.QD)("div",g,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.value,((e,a)=>((0,l.Wz)(),(0,l.An)("div",{key:"video1"+a,class:"group bg-slate-100 aspect-[4/3] relative overflow-hidden rounded-2xl bg-black/25 transition hover:ring-4 hover:ring-indigo-500/50 active:opacity-75 active:ring-indigo-500/25"},[(0,l.QD)("iframe",{ref_for:!0,ref_key:"videos",ref:b,class:"object-cover aspect-[4/3]",style:{width:"100%"},src:`https://www.youtube.com/embed/${e.id.videoId}?enablejsapi=1&autoplay=0&mute=1&controls=1&loop=1&playlist=${e.id.videoId}`,frameborder:"0"},null,8,y)])))),128))])])])])]))}},f=t(4100);const h=(0,f.c)(b,[["__scopeId","data-v-08da7607"]]);var m=h}}]);
//# sourceMappingURL=392.b1061d58.js.map