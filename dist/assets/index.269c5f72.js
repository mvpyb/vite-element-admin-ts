import{d as a,r as n,_ as i,o as r,c as d,e as s,t as l,F as t}from"./index.219f8d4a.js";const c=a({name:"YuLayout",props:{title:{type:String,default:""},subtitle:{type:String,default:""}},setup(){return{wrapperRef:n()}}});const p={ref:"wrapperRef",class:"yu-layout"},_={class:"header"},u={class:"header-tt ellipsis"},f=["innerHTML"],y={class:"body"},v={class:"footer"};function h(e,$,b,L,g,S){return r(),d("div",p,[s("div",_,[s("div",u,l(e.title),1),s("div",{class:"header-desc ellipsis-col ellipsis-col2",innerHTML:e.subtitle},null,8,f),t(e.$slots,"head",{},void 0,!0)]),s("div",y,[t(e.$slots,"body",{},void 0,!0)]),s("div",v,[t(e.$slots,"foot",{},void 0,!0)])],512)}const o=i(c,[["render",h],["__scopeId","data-v-0e54bdf5"]]),m=Object.assign(o,{install(e){e.component(o.name,o)}}),w=m;export{w as Y};
