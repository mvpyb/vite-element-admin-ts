import{e7 as y,d as L,r as k,z as x,o as P,m as C,w as m,a as E,i as j,f as B,v as F,e as h,_ as J}from"./index.219f8d4a.js";import{Y as S}from"./index.269c5f72.js";var U={exports:{}};(function(I,v){(function(f,A){I.exports=A()})(y,function(){function f(e){var p=[];return e.AMapUI&&p.push(A(e.AMapUI)),e.Loca&&p.push(g(e.Loca)),Promise.all(p)}function A(e){return new Promise(function(p,i){var t=[];if(e.plugins)for(var u=0;u<e.plugins.length;u+=1)n.AMapUI.plugins.indexOf(e.plugins[u])==-1&&t.push(e.plugins[u]);if(o.AMapUI===a.failed)i("\u524D\u6B21\u8BF7\u6C42 AMapUI \u5931\u8D25");else if(o.AMapUI===a.notload){o.AMapUI=a.loading,n.AMapUI.version=e.version||n.AMapUI.version,u=n.AMapUI.version;var l=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/ui/"+u+"/main.js",d.onerror=function(s){o.AMapUI=a.failed,i("\u8BF7\u6C42 AMapUI \u5931\u8D25")},d.onload=function(){if(o.AMapUI=a.loaded,t.length)window.AMapUI.loadUI(t,function(){for(var s=0,c=t.length;s<c;s++){var M=t[s].split("/").slice(-1)[0];window.AMapUI[M]=arguments[s]}for(p();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()});else for(p();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()},l.appendChild(d)}else o.AMapUI===a.loaded?e.version&&e.version!==n.AMapUI.version?i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):t.length?window.AMapUI.loadUI(t,function(){for(var s=0,c=t.length;s<c;s++){var M=t[s].split("/").slice(-1)[0];window.AMapUI[M]=arguments[s]}p()}):p():e.version&&e.version!==n.AMapUI.version?i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):r.AMapUI.push(function(s){s?i(s):t.length?window.AMapUI.loadUI(t,function(){for(var c=0,M=t.length;c<M;c++){var _=t[c].split("/").slice(-1)[0];window.AMapUI[_]=arguments[c]}p()}):p()})})}function g(e){return new Promise(function(p,i){if(o.Loca===a.failed)i("\u524D\u6B21\u8BF7\u6C42 Loca \u5931\u8D25");else if(o.Loca===a.notload){o.Loca=a.loading,n.Loca.version=e.version||n.Loca.version;var t=n.Loca.version,u=n.AMap.version.startsWith("2"),l=t.startsWith("2");if(u&&!l||!u&&l)i("JSAPI \u4E0E Loca \u7248\u672C\u4E0D\u5BF9\u5E94\uFF01\uFF01");else{u=n.key,l=document.body||document.head;var d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/loca?v="+t+"&key="+u,d.onerror=function(s){o.Loca=a.failed,i("\u8BF7\u6C42 AMapUI \u5931\u8D25")},d.onload=function(){for(o.Loca=a.loaded,p();r.Loca.length;)r.Loca.splice(0,1)[0]()},l.appendChild(d)}}else o.Loca===a.loaded?e.version&&e.version!==n.Loca.version?i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):p():e.version&&e.version!==n.Loca.version?i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):r.Loca.push(function(s){s?i(s):i()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(a||(a={}));var n={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},o={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},r={AMap:[],AMapUI:[],Loca:[]},w=[],b=function(e){typeof e=="function"&&(o.AMap===a.loaded?e(window.AMap):w.push(e))};return{load:function(e){return new Promise(function(p,i){if(o.AMap==a.failed)i("");else if(o.AMap==a.notload){var t=e.key,u=e.version,l=e.plugins;t?(window.AMap&&location.host!=="lbs.amap.com"&&i("\u7981\u6B62\u591A\u79CDAPI\u52A0\u8F7D\u65B9\u5F0F\u6DF7\u7528"),n.key=t,n.AMap.version=u||n.AMap.version,n.AMap.plugins=l||n.AMap.plugins,o.AMap=a.loading,u=document.body||document.head,window.___onAPILoaded=function(s){if(delete window.___onAPILoaded,s)o.AMap=a.failed,i(s);else for(o.AMap=a.loaded,f(e).then(function(){p(window.AMap)}).catch(i);w.length;)w.splice(0,1)[0]()},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+n.AMap.version+"&key="+t+"&plugin="+n.AMap.plugins.join(","),l.onerror=function(s){o.AMap=a.failed,i(s)},u.appendChild(l)):i("\u8BF7\u586B\u5199key")}else if(o.AMap==a.loaded)if(e.key&&e.key!==n.key)i("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(e.version&&e.version!==n.AMap.version)i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{if(t=[],e.plugins)for(u=0;u<e.plugins.length;u+=1)n.AMap.plugins.indexOf(e.plugins[u])==-1&&t.push(e.plugins[u]);t.length?window.AMap.plugin(t,function(){f(e).then(function(){p(window.AMap)}).catch(i)}):f(e).then(function(){p(window.AMap)}).catch(i)}else if(e.key&&e.key!==n.key)i("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(e.version&&e.version!==n.AMap.version)i("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{var d=[];if(e.plugins)for(u=0;u<e.plugins.length;u+=1)n.AMap.plugins.indexOf(e.plugins[u])==-1&&d.push(e.plugins[u]);b(function(){d.length?window.AMap.plugin(d,function(){f(e).then(function(){p(window.AMap)}).catch(i)}):f(e).then(function(){p(window.AMap)}).catch(i)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,n={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},o={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},r={AMap:[],AMapUI:[],Loca:[]}}}})})(U);const D=U.exports,N={class:"section-container"},O=L({__name:"gaode",setup(I){const v=k(),A={key:"5dc1bd09758a3d8eaafa4a8e5800e29c",version:"2.0",plugins:["AMap.MarkerCluster"],AMapUI:{version:"1.1",plugins:[]},Loca:{version:"2.0.0"}},g=async(n,o)=>{const r=new o.Marker({position:new o.LngLat(116.39,39.9),title:"\u5317\u4EAC"});n.add(r)},a=async(n,o)=>{const r=new o.Marker({position:new o.LngLat(116.39,39.9),offset:new o.Pixel(-10,-10),icon:"//vdata.amap.com/icons/b18/1/2.png",title:"\u5317\u4EAC"});n.add(r)};return x(()=>{D.load(A).then(async n=>{const o=new n.Map(v.value,{zoom:12,center:[116.397428,39.90923],pitch:0,viewMode:"3D"});await g(o,n),await a(o,n)}).catch(n=>{console.log(n)})}),(n,o)=>{const r=j("el-link");return P(),C(E(S),{title:"\u9AD8\u5FB7\u5730\u56FE"},{head:m(()=>[B(r,{type:"primary",href:"https://lbs.amap.com/api/jsapi-v2/guide/overlays/vector-overlay",target:"_blank",underline:!1},{default:m(()=>[F("\u9AD8\u5FB7\u5F00\u653E\u5E73\u53F0")]),_:1})]),body:m(()=>[h("div",N,[h("div",{id:"container",ref_key:"container",ref:v},null,512)])]),_:1})}}});const W=J(O,[["__scopeId","data-v-36a503e2"]]);export{W as default};
