"use strict";(self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[]).push([[960],{6960:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var o=a(4108),l=a(9096),n=a(7764),c=a(7192),s=a(7464),i=a(2500);const u=e=>((0,o.ED)("data-v-425590cf"),e=e(),(0,o.ii)(),e),r={class:"Product"},p={href:"#none",class:"Visual"},v=["src","alt"],d={action:"",class:"Form"},f={class:"Price"},g={id:"quantity-list",class:"QtField"},y=u((()=>(0,o.QD)("label",{for:"quantitySelect"},"Quantity:",-1))),h=(0,o.IL)('<option value="1" selected data-v-425590cf>1</option><option value="2" data-v-425590cf>2</option><option value="3" data-v-425590cf>3</option><option value="4" data-v-425590cf>4</option><option value="5" data-v-425590cf>5</option>',5),b=[h];var m={__name:"perchSubpage",setup(e){const t=(0,c.o3)(),a=(0,s.KX)(),u=(0,s.MJ)(),h=(0,i.IL)(1),m=(0,o.S6)((()=>t.getters.userlogin.id||t.getters.userlogin)),Q=(0,o.S6)((()=>t.getters.getbabyproduct)),D=(0,i.IL)(u.params.item);async function w(){const e={price:Q.value[D.value].price,src:Q.value[D.value].src,Quantity:h.value,title:Q.value[D.value].title,mode:"add",id:new Date+100*Math.random().toFixed(2)},o=new Headers;o.append("Content-Type","application/json");const l=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/cart",{method:"POST",headers:o,body:JSON.stringify(e)}).catch((e=>console.log(e)));if(void 0!==l){const e=await l.json();console.log(e),t.commit("setbaguni",e),a.go(-1)}else alert("서버가 닫혀있어 기능사용이 어렵습니다.")}async function S(){const e=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:m.value})}).catch((e=>console.log(e)));if(void 0!==e){const t=await e.json();console.log(t)}}return console.log(D.value),console.log(Q.value,"베이비"),S(),(e,t)=>((0,o.Wz)(),(0,o.An)("section",r,[(0,o.QD)("a",p,[(0,o.QD)("img",{src:Q.value[D.value].src,alt:Q.value[D.value].title},null,8,v)]),(0,o.QD)("form",d,[(0,o.QD)("h3",null,"제품명 : "+(0,l.WA)(Q.value[D.value].title),1),(0,o.QD)("span",f," 가격 "+(0,l.WA)(Q.value[D.value].price),1),(0,o.QD)("fieldset",g,[y,(0,o.wt)((0,o.QD)("select",{size:"1",id:"quantitySelect",name:"amount","onUpdate:modelValue":t[0]||(t[0]=e=>h.value=e),value:"1"},b,512),[[n.Ip,h.value]])]),(0,o.QD)("div",null,[(0,o.QD)("button",{class:"Button",onClick:(0,n.Y7)(w,["prevent"])},"장바구니")])])]))}},Q=a(4100);const D=(0,Q.c)(m,[["__scopeId","data-v-425590cf"]]);var w=D}}]);
//# sourceMappingURL=960.d49df00c.js.map