import{d as N,r,B as O,i as n,o as t,c as v,e as x,f as a,w as e,v as l,m as s,P as w,Q as T,t as D,_ as C,a as $,p as E,g as F}from"./index.d69e1802.js";import{Y as P}from"./index.9873ddc8.js";const U={class:"app-container"},L={class:"filter-container"},Y=N({name:"FixedThead"}),Q=Object.assign(Y,{setup(i){const m=["apple","banana"],d=r([{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}]),c=r(1),B=r(["apple","banana","orange"]),b=r(m),u=r(m);return O(b,g=>{u.value=B.value.filter(p=>g.indexOf(p)>=0),c.value=c.value+1}),(g,p)=>{const f=n("el-checkbox"),V=n("el-checkbox-group"),h=n("el-divider"),k=n("el-table-column"),o=n("el-table"),y=n("vxe-column"),S=n("vxe-table");return t(),v("div",U,[x("div",L,[a(V,{modelValue:b.value,"onUpdate:modelValue":p[0]||(p[0]=_=>b.value=_)},{default:e(()=>[a(f,{label:"apple"},{default:e(()=>[l(" apple ")]),_:1}),a(f,{label:"banana"},{default:e(()=>[l(" banana ")]),_:1}),a(f,{label:"orange"},{default:e(()=>[l(" orange ")]),_:1})]),_:1},8,["modelValue"])]),a(h,{"content-position":"left"},{default:e(()=>[l("Element Plus Table")]),_:1}),(t(),s(o,{key:c.value,data:d.value,border:"",fit:"","highlight-current-row":"",style:{width:"100%"}},{default:e(()=>[a(k,{prop:"name",label:"fruitName",width:"180"}),(t(!0),v(w,null,T(u.value,_=>(t(),s(k,{key:_,label:_},{default:e(j=>[l(D(j.row[_]),1)]),_:2},1032,["label"]))),128))]),_:1},8,["data"])),a(h,{"content-position":"left"},{default:e(()=>[l("Vxe Table")]),_:1}),(t(),s(S,{key:c.value,round:"",border:"",data:d.value},{default:e(()=>[a(y,{field:"name",title:"fruitName",width:"180"}),(t(!0),v(w,null,T(u.value,_=>(t(),s(y,{key:_,field:_,title:_},null,8,["field","title"]))),128))]),_:1},8,["data"]))])}}}),q={class:"app-container"},z={class:"filter-container"},A=N({name:"UnfixedThead"}),G=Object.assign(A,{setup(i){const m=r([{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}]),d=r(1),c=r(["apple","banana"]);return O(c,()=>{d.value=d.value+1}),(B,b)=>{const u=n("el-checkbox"),g=n("el-checkbox-group"),p=n("el-divider"),f=n("el-table-column"),V=n("el-table"),h=n("vxe-column"),k=n("vxe-table");return t(),v("div",q,[x("div",z,[a(g,{modelValue:c.value,"onUpdate:modelValue":b[0]||(b[0]=o=>c.value=o)},{default:e(()=>[a(u,{label:"apple"},{default:e(()=>[l(" apple ")]),_:1}),a(u,{label:"banana"},{default:e(()=>[l(" banana ")]),_:1}),a(u,{label:"orange"},{default:e(()=>[l(" orange ")]),_:1})]),_:1},8,["modelValue"])]),a(p,{"content-position":"left"},{default:e(()=>[l("Element Plus Table")]),_:1}),(t(),s(V,{key:d.value,data:m.value,border:"",fit:"","highlight-current-row":"",style:{width:"100%"}},{default:e(()=>[a(f,{prop:"name",label:"fruitName",width:"180"}),(t(!0),v(w,null,T(c.value,o=>(t(),s(f,{key:o,label:o},{default:e(y=>[l(D(y.row[o]),1)]),_:2},1032,["label"]))),128))]),_:1},8,["data"])),a(p,{"content-position":"left"},{default:e(()=>[l("Vxe Table")]),_:1}),(t(),s(k,{key:d.value,round:"",border:"",data:m.value},{default:e(()=>[a(h,{field:"name",title:"fruitName",width:"180"}),(t(!0),v(w,null,T(c.value,o=>(t(),s(h,{key:o,field:o,title:o},null,8,["field","title"]))),128))]),_:1},8,["data"]))])}}});const I=i=>(E("data-v-53c98d1c"),i=i(),F(),i),H={class:"section-container"},J=I(()=>x("div",{style:{margin:"0 0 5px 20px"}},"\u56FA\u5B9A\u8868\u5934, \u6309\u7167\u8868\u5934\u987A\u5E8F\u6392\u5E8F",-1)),K=I(()=>x("div",{style:{margin:"30px 0 5px 20px"}},"\u4E0D\u56FA\u5B9A\u8868\u5934, \u6309\u7167\u70B9\u51FB\u987A\u5E8F\u6392\u5E8F",-1)),M=N({name:"DynamicTable"}),R=Object.assign(M,{setup(i){return(m,d)=>(t(),s($(P),{title:"\u52A8\u6001\u8868\u683C"},{body:e(()=>[x("div",H,[J,a($(Q)),K,a($(G))])]),_:1}))}}),Z=C(R,[["__scopeId","data-v-53c98d1c"]]);export{Z as default};