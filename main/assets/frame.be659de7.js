import{S as a}from"./StorageLib.376a94da.js";import{S as e,a as l}from"./index.20a368fe.js";import{C as n}from"./CommonLib.4a00898f.js";import{d as t,h as s,i as u,j as o,k as r,p as c,l as i,r as m,o as d,e as f,m as v,F as p,n as h,t as g,w as k,q as _}from"./vendor.5ca2ec29.js";import"./SearchOutlined.febea6fd.js";import"./DownOutlined.35a54faf.js";var C=t({name:"frame",setup(){const{proxy:e}=r();let l=s("format");const t=u({lang:{select:"en",value:[{key:"zh_CN",value:"简体中文"},{key:"en",value:"English"}]}});return o((()=>{const a=n();e.$i18n.locale=a,t.lang.select=a})),{curData:t,curMenu:l,handleLang:function(l){e.$i18n.locale=l,a.set("language",l)},handleRoute:function(a){l.value=a,e.$router.push({name:a})}}}});const $=k();c("data-v-f3258a82");const j={id:"main_area"},O={class:"main_left"},M={class:"left_area"},R={class:"lang"},y={class:"left_menu reform_ul"},q={class:"main_right"};i();const w=$(((a,n,t,s,u,o)=>{const r=l,c=e,i=m("router-view");return d(),f("div",j,[v("div",O,[v("div",M,[v("div",R,[v(c,{style:{width:"100px"},"default-value":a.curData.lang.select,onChange:a.handleLang},{default:$((()=>[(d(!0),f(p,null,h(a.curData.lang.value,(a=>(d(),f(r,{value:a.key},{default:$((()=>[_(g(a.value),1)])),_:2},1032,["value"])))),256))])),_:1},8,["default-value","onChange"])]),v("div",y,[v("ul",null,[v("li",{class:{liOn:"format"===a.curMenu},onClick:n[1]||(n[1]=e=>a.handleRoute("format"))},g(a.$t("menu.format")),3),v("li",{class:{liOn:"timestamp"===a.curMenu},onClick:n[2]||(n[2]=e=>a.handleRoute("timestamp"))},g(a.$t("menu.timestamp")),3),v("li",{class:{liOn:"compare"===a.curMenu},onClick:n[3]||(n[3]=e=>a.handleRoute("compare"))},g(a.$t("menu.compare")),3),v("li",{class:{liOn:"request"===a.curMenu},onClick:n[4]||(n[4]=e=>a.handleRoute("request"))},g(a.$t("menu.request")),3),v("li",{class:{liOn:"socket"===a.curMenu},onClick:n[5]||(n[5]=e=>a.handleRoute("socket"))},g(a.$t("menu.socket")),3)])])])]),v("div",q,[v(i)])])}));C.render=w,C.__scopeId="data-v-f3258a82";export default C;
