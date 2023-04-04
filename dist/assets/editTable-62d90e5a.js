import{p as E}from"./index-9022a62a.js";import{g as S}from"./article-fb5aa3ba.js";import{Y as F}from"./index-f4078901.js";import{d as I,r as D,k as O,o as a,m as _,w as t,a as k,i as s,K as P,e as r,f as l,v as c,L as Q,t as o,c as p,Q as $,P as h,X as A,_ as R}from"./index-fb28f3df.js";const Y={class:"section-container"},K={key:1},X={key:1},j=I({name:"EditTable"}),q=I({...j,setup(G){const v=D([]),f=D(!0),L=O({page:1,limit:10}),y=n=>({published:"success",draft:"info",deleted:"danger"})[n],B=async()=>{f.value=!0;const{data:n}=await S(L),b=n.items;v.value=b.map(m=>({...m,edit:!1,originalTitle:m.title})),f.value=!1},x=n=>{n.title=n.originalTitle,n.edit=!1,A({message:"The title has been restored to the original value",type:"warning"})},C=n=>{n.edit=!1,n.originalTitle=n.title,A({message:"The title has been edited",type:"success"})};return B(),(n,b)=>{const m=s("el-divider"),d=s("el-table-column"),T=s("svg-icon"),V=s("el-tag"),w=s("el-input"),z=s("el-button"),g=s("vxe-button"),U=s("el-table"),u=s("vxe-column"),M=s("vxe-table"),N=P("loading");return a(),_(k(F),{title:"可编辑表格"},{body:t(()=>[r("div",Y,[l(m,{"content-position":"left"},{default:t(()=>[c("Element Plus Table")]),_:1}),Q((a(),_(U,{data:v.value,border:"",fit:"","highlight-current-row":"",style:{width:"100%"}},{default:t(()=>[l(d,{align:"center",label:"ID",width:"65"},{default:t(({row:e})=>[r("span",null,o(e.id),1)]),_:1}),l(d,{width:"180px",align:"center",label:"Date"},{default:t(({row:e})=>[r("span",null,o(k(E)(e.timestamp,"{y}-{m}-{d} {h}:{i}")),1)]),_:1}),l(d,{width:"110px",align:"center",label:"Author"},{default:t(({row:e})=>[r("span",null,o(e.author),1)]),_:1}),l(d,{width:"100px",label:"Importance"},{default:t(({row:e})=>[(a(!0),p(h,null,$(e.importance,i=>(a(),_(T,{key:i,"icon-class":"star",class:"icon-star"}))),128))]),_:1}),l(d,{align:"center",label:"Readings",width:"95"},{default:t(({row:e})=>[r("span",null,o(e.pageviews),1)]),_:1}),l(d,{"class-name":"status-col",label:"Status",width:"110"},{default:t(({row:e})=>[l(V,{type:y(e.status)},{default:t(()=>[c(o(e.status),1)]),_:2},1032,["type"])]),_:1}),l(d,{"min-width":"300px",label:"Title"},{default:t(({row:e})=>[e.edit?(a(),p(h,{key:0},[l(w,{modelValue:e.title,"onUpdate:modelValue":i=>e.title=i,class:"edit-input",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),l(z,{class:"cancel-btn",size:"small",type:"warning",onClick:i=>x(e)},{default:t(()=>[c(" cancel ")]),_:2},1032,["onClick"])],64)):(a(),p("span",K,o(e.title),1))]),_:1}),l(d,{align:"center",label:"Actions",width:"120"},{default:t(({row:e})=>[e.edit?(a(),_(g,{key:0,size:"mini",status:"success",icon:"el-icon-circle-check-outline",onClick:i=>C(e)},{default:t(()=>[c("Ok")]),_:2},1032,["onClick"])):(a(),_(g,{key:1,size:"mini",status:"primary",icon:"el-icon-circle-check-outline",onClick:i=>e.edit=!e.edit},{default:t(()=>[c("Edit")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])),[[N,f.value]]),l(m,{"content-position":"left"},{default:t(()=>[c("Vxe Table")]),_:1}),l(M,{round:"",border:"",data:v.value,loading:f.value,style:{width:"100%"}},{default:t(()=>[l(u,{align:"center",field:"id",title:"ID",width:"65"}),l(u,{align:"center",field:"timestamp",title:"Date",width:"180px"},{default:t(({row:e})=>[r("span",null,o(k(E)(e.timestamp,"{y}-{m}-{d} {h}:{i}")),1)]),_:1}),l(u,{align:"center",field:"author",title:"Author",width:"110px"}),l(u,{width:"100px",title:"Importance"},{default:t(({row:e})=>[(a(!0),p(h,null,$(e.importance,i=>(a(),_(T,{key:i,"icon-class":"star",class:"icon-star"}))),128))]),_:1}),l(u,{align:"center",title:"Readings",width:"95"},{default:t(({row:e})=>[r("span",null,o(e.pageviews),1)]),_:1}),l(u,{"class-name":"status-col",label:"Status",width:"110"},{default:t(({row:e})=>[l(V,{type:y(e.status)},{default:t(()=>[c(o(e.status),1)]),_:2},1032,["type"])]),_:1}),l(u,{"min-width":"300px",title:"Title"},{default:t(({row:e})=>[e.edit?(a(),p(h,{key:0},[l(w,{modelValue:e.title,"onUpdate:modelValue":i=>e.title=i,class:"edit-input",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),l(z,{class:"cancel-btn",size:"small",type:"warning",onClick:i=>x(e)},{default:t(()=>[c(" cancel ")]),_:2},1032,["onClick"])],64)):(a(),p("span",X,o(e.title),1))]),_:1}),l(u,{align:"center",title:"Actions",width:"120"},{default:t(({row:e})=>[e.edit?(a(),_(g,{key:0,size:"mini",status:"success",icon:"el-icon-circle-check-outline",onClick:i=>C(e)},{default:t(()=>[c("Ok")]),_:2},1032,["onClick"])):(a(),_(g,{key:1,size:"mini",status:"primary",icon:"el-icon-circle-check-outline",onClick:i=>e.edit=!e.edit},{default:t(()=>[c("Edit")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data","loading"])])]),_:1})}}});const ee=R(q,[["__scopeId","data-v-adbae146"]]);export{ee as default};
