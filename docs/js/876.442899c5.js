"use strict";(self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[]).push([[876],{3876:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(4108),o=n(9096),l=n(7764),s=n(2500),i=n(7192);n(8);const c=e=>((0,a.ED)("data-v-7a007b1b"),e=e(),(0,a.ii)(),e),d={class:"my_point_wrap"},u={class:"my_point_header"},r=c((()=>(0,a.QD)("div",{class:"my_point_logo"},null,-1))),p={class:"text_wrap"},y={key:0},v={key:1},h={class:"my_point_slide"},b={class:"my_point_status"},f={class:"flex"},k=["onClick"],m=["onClick"],g=["onClick"],C=["onClick"];var D={__name:"Mypoint",setup(e){const t=(0,s.IL)("");let n=2;const c=(0,s.IL)([]),D=(0,i.o3)(),W=(0,a.S6)((()=>D.getters.userlogin.id||D.getters.userlogin));console.log(W,"투두");(new Date).getDate(),D.getters.userlogin;const _=(0,a.S6)((()=>D.getters.getttfalse));async function w(e){if(n++,7==c.value.length)return alert("최대갯수입니다");const a={userid:W.value,id:"mydata"+n,text:t.value,done:!1,mode:"add"},o=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/todo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),l=await o.json();c.value=l,t.value=""}async function A(){const e=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/todo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:W.value})}).catch((e=>alert("서버가 닫혀있습니다 관리자에게 문의바랍니다.")));if(void 0!==e){const t=await e.json();c.value=t}}async function z(e){const t=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/todo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,mode:"del",userid:W.value})}).catch((e=>alert("서버가 닫혀있습니다 관리자에게 문의바랍니다.")));if(void 0!==t){const e=await t.json();c.value=e}}async function Q(e){const t=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/todo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,mode:"update",userid:W.value})}).catch((e=>alert("서버가 닫혀있습니다 관리자에게 문의바랍니다.")));if(void 0!==t){const e=await t.json();c.value=e}}return A(),(e,n)=>((0,a.Wz)(),(0,a.An)("div",d,[(0,a.QD)("div",u,[r,(0,a.QD)("div",p,[_.value?((0,a.Wz)(),(0,a.An)("h2",y,(0,o.WA)(W.value)+" 님의 할일목록",1)):((0,a.Wz)(),(0,a.An)("h2",v,(0,o.WA)(W.value)+" To-Do list",1))])]),(0,a.QD)("div",h,[(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.wt)((0,a.QD)("input",{type:"text",class:"textinput","onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,512),[[l.Og,t.value]]),(0,a.mY)(),_.value?((0,a.Wz)(),(0,a.An)("button",{key:0,onClick:n[1]||(n[1]=e=>w())},"추가")):((0,a.Wz)(),(0,a.An)("button",{key:1,onClick:w},"add"))])])]),(0,a.QD)("div",b,[(0,a.QD)("ul",null,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(c.value,((e,t)=>((0,a.Wz)(),(0,a.An)("li",{key:e.id+t},[(0,a.QD)("p",{class:(0,o.WN)({eclipse:!0,donetext:e.done})},(0,o.WA)(e.text),3),(0,a.QD)("span",f,[_.value?((0,a.Wz)(),(0,a.An)("button",{key:0,class:"comp",onClick:t=>Q(e.id)},"완료",8,k)):((0,a.Wz)(),(0,a.An)("button",{key:1,class:"comp",onClick:t=>Q(e.id)},"done",8,m)),_.value?((0,a.Wz)(),(0,a.An)("button",{key:2,class:"del",onClick:t=>z(e.id)},"삭제",8,g)):((0,a.Wz)(),(0,a.An)("button",{key:3,class:"del",onClick:n=>z(e.id,t)},"del",8,C))])])))),128))])])]))}},W=n(4100);const _=(0,W.c)(D,[["__scopeId","data-v-7a007b1b"]]);var w=_}}]);
//# sourceMappingURL=876.442899c5.js.map