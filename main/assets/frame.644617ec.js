import{C as _,g as h,S as C}from"./LangLib.0b7683e5.js";import{_ as L,S as k}from"./index.54544655.js";import{d as S,h as $,i as y,j as O,k as j,l as g,m as a,n as v,w as f,p as l,t as o,u as w,q as B,s as D,r as I,o as c,F as M,v as R,e as b,x as q}from"./vendor.1e75f2db.js";import{_ as N}from"./index.7fa67c48.js";import"./SearchOutlined.154242a4.js";import"./DownOutlined.77a6b8ac.js";var E="./assets/logo.c3932446.png";const F=S({name:"frame",setup(){const e=w();function t(n){return h(e.getters.curLang,n)}const d=$().proxy;let u=y("format");const i=O({lang:{select:"en",value:[{key:"zh_CN",value:"\u7B80\u4F53\u4E2D\u6587"},{key:"en",value:"English"}]}});j(()=>{const n=_();r(n),i.lang.select=n});function p(n){r(n),C.set("language",n)}function r(n){e.commit("setLang",{lang:n})}function m(n){u.value=n,d.$router.push({name:n})}return{curData:i,curMenu:u,handleLang:p,handleRoute:m,getLang:t}}}),V=e=>(B("data-v-0a9f8337"),e=e(),D(),e),z={id:"main_area"},T={class:"main_left"},A={class:"left_area"},G=V(()=>a("div",{class:"logo"},[a("img",{src:E,title:"DouBao \u8C46\u5305"}),a("span",null,"v1.1.4")],-1)),H={class:"lang"},J={class:"left_menu reform_ul"},K={class:"main_right"};function P(e,t,d,u,i,p){const r=k,m=L,n=I("router-view");return c(),g("div",z,[a("div",T,[a("div",A,[G,a("div",H,[v(m,{style:{width:"100px"},"default-value":e.curData.lang.select,onChange:e.handleLang},{default:f(()=>[(c(!0),g(M,null,R(e.curData.lang.value,s=>(c(),b(r,{value:s.key},{default:f(()=>[q(o(s.value),1)]),_:2},1032,["value"]))),256))]),_:1},8,["default-value","onChange"])]),a("div",J,[a("ul",null,[a("li",{class:l({liOn:e.curMenu==="format"}),onClick:t[0]||(t[0]=s=>e.handleRoute("format"))},o(e.getLang("menu.format")),3),a("li",{class:l({liOn:e.curMenu==="timestamp"}),onClick:t[1]||(t[1]=s=>e.handleRoute("timestamp"))},o(e.getLang("menu.timestamp")),3),a("li",{class:l({liOn:e.curMenu==="compare"}),onClick:t[2]||(t[2]=s=>e.handleRoute("compare"))},o(e.getLang("menu.compare")),3),a("li",{class:l({liOn:e.curMenu==="request"}),onClick:t[3]||(t[3]=s=>e.handleRoute("request"))},o(e.getLang("menu.request")),3),a("li",{class:l({liOn:e.curMenu==="socket"}),onClick:t[4]||(t[4]=s=>e.handleRoute("socket"))},o(e.getLang("menu.socket")),3)])])])]),a("div",K,[v(n)])])}var x=N(F,[["render",P],["__scopeId","data-v-0a9f8337"]]);export{x as default};
