"use strict";(self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[]).push([[776],{9776:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var o=a(4108),l=a(9096),c=a(7764),n=a(7192),s=a(7464),i=a(2500);const u=e=>((0,o.ED)("data-v-745083c0"),e=e(),(0,o.ii)(),e),r={class:"Product"},d={class:"bg-gray-100 text-gray-900 w-screen h-screen"},v={class:"container grid grid-cols-12 mx-auto"},p={class:"flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto",style:{"background-image":"url('https://source.unsplash.com/random/640x480')","background-position":"center center","background-blend-mode":"multiply","background-size":"cover"}},g={class:"flex flex-col items-center text-center"},b=["src","alt"],m={class:"flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300"},f={class:"pt-6 pb-4 space-y-2"},y={action:"",class:""},h={class:"text-3xl font-bold py-2 mb-3"},Q={class:"Price mb-2"},D={id:"quantity-list",class:"QtField"},x=u((()=>(0,o.QD)("label",{for:"quantitySelect"},"Quantity:",-1))),w=(0,o.IL)('<option value="1" selected data-v-745083c0>1</option><option value="2" data-v-745083c0>2</option><option value="3" data-v-745083c0>3</option><option value="4" data-v-745083c0>4</option><option value="5" data-v-745083c0>5</option>',5),S=[w];var k={__name:"perchSubpage",setup(e){const t=(0,n.o3)(),a=(0,s.KX)(),u=(0,s.MJ)(),w=(0,i.IL)(1),k=(0,o.S6)((()=>t.getters.getguest)),j=(0,o.S6)((()=>t.getters.userlogin.id||t.getters.userlogin)),C=(0,o.S6)((()=>t.getters.getbabyproduct)),I=(0,i.IL)(u.params.item);async function O(){console.log(C.value[I.value].price,"얼만데?");const e={price:C.value[I.value].price,src:C.value[I.value].src,Quantity:w.value,title:C.value[I.value].title,mode:"add",id:new Date+100*Math.random().toFixed(2)};if(k.value)t.commit("setbaguni",e),a.go(-1);else{const o=new Headers;o.append("Content-Type","application/json");const l=await fetch("/cart",{method:"POST",headers:o,body:JSON.stringify(e)}).catch((e=>console.log(e)));if(void 0!==l){const e=await l.json();console.log(e),t.commit("fetchbaguni",e),a.go(-1)}else alert("서버가 닫혀있어 기능사용이 어렵습니다.")}}async function P(){if(!k.value){const e=await fetch("/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:j.value})}).catch((e=>console.log(e)));if(void 0!==e){const a=await e.json();t.commit("fetchbaguni",a),console.log(a)}}}return console.log(I.value),console.log(C.value,"베이비"),P(),(e,t)=>((0,o.Wz)(),(0,o.An)("section",r,[(0,o.QD)("div",d,[(0,o.QD)("div",v,[(0,o.QD)("div",p,[(0,o.QD)("div",g,[(0,o.QD)("img",{src:C.value[I.value].src,alt:C.value[I.value].title,class:"w-full object-cover"},null,8,b)])]),(0,o.QD)("div",m,[(0,o.QD)("div",f,[(0,o.QD)("form",y,[(0,o.QD)("h3",h,"제품명 : "+(0,l.WA)(C.value[I.value].title),1),(0,o.QD)("span",Q," 가격 "+(0,l.WA)(C.value[I.value].price),1),(0,o.QD)("fieldset",D,[x,(0,o.wt)((0,o.QD)("select",{size:"1",id:"quantitySelect",name:"amount","onUpdate:modelValue":t[0]||(t[0]=e=>w.value=e),class:"w-15 ml-3",value:"1"},S,512),[[c.Ip,w.value]])]),(0,o.QD)("div",null,[(0,o.QD)("button",{class:"mt-4 px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800",onClick:(0,c.Y7)(O,["prevent"])},"장바구니")])])])])])])]))}},j=a(4100);const C=(0,j.c)(k,[["__scopeId","data-v-745083c0"]]);var I=C}}]);
//# sourceMappingURL=776.0966d9aa.js.map