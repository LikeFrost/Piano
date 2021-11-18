var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,c=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,l=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))a.call(t,n)&&c(e,n,t[n]);return e},s=(e,o)=>t(e,n(o)),i=(e,t)=>{var n={};for(var c in e)r.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&o)for(var c of o(e))t.indexOf(c)<0&&a.call(e,c)&&(n[c]=e[c]);return n};import{a as p,b as d,r as u,c as y,d as m,R as f,e as C,S as g,f as h,g as k,l as F,h as b,i as E,q as w,j as _,k as v,m as x,n as P,o as I,p as S,s as O}from"./vendor.js";const A=undefined;(function e(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const H={default:{}};l(l({},H.default||{}),H[globalThis.__app_mode__||"build"]||{});const N={},j={default:p.create(N)};function M(e){if(e){if(j[e])return j;j[e]=p.create(N)}return j}d.forEach(["delete","get","head","options"],(function e(t){})),d.forEach(["post","put","patch"],(function e(t){}));const B=u.exports.createContext(null),R=({value:e={},children:t})=>{const[n,o]=u.exports.useState(e),r=(e={})=>{o(l(l({},n),e))};return u.exports.createElement(B.Provider,{value:[n,r]},t)},$=()=>{const e=undefined;return u.exports.useContext(B)};function L(e){const t=undefined;return t=>{const[n,o]=$(),r=e;return u.exports.createElement(r,s(l({},t),{auth:n,setAuth:o}))}}const q=(e,t)=>`${e.toString()}\n\nThis is located at:${t}`,z={display:"flex",flexDirection:"column",alignItems:"center",margin:"100px 0",color:"#ed3131"},T=({componentStack:e,error:t})=>u.exports.createElement("div",{style:z,title:q(t,e)},u.exports.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"843",width:"60",height:"60"},u.exports.createElement("path",{d:"M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512s229.23 512 512 512c117.41 0 228.826-39.669 318.768-111.313 10.79-8.595 12.569-24.308 3.975-35.097-8.594-10.789-24.308-12.568-35.097-3.974C718.47 938.277 618.002 974.049 512 974.049 256.818 974.049 49.951 767.182 49.951 512S256.818 49.951 512 49.951 974.049 256.818 974.049 512c0 87.493-24.334 171.337-69.578 243.96-7.294 11.708-3.716 27.112 7.992 34.405 11.707 7.294 27.11 3.716 34.405-7.991C997.014 701.88 1024 608.898 1024 512z","p-id":"844",fill:"#cdcdcd"}),u.exports.createElement("path",{d:"M337.17 499.512c34.485 0 62.44-27.955 62.44-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438z m374.635 0c34.484 0 62.439-27.955 62.439-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438zM352.788 704.785c43.377-34.702 100.364-55.425 171.7-55.425 71.336 0 128.322 20.723 171.7 55.425 26.513 21.21 42.695 42.786 50.444 58.284 6.168 12.337 1.168 27.34-11.17 33.508-12.337 6.169-27.34 1.168-33.508-11.17-0.918-1.834-3.462-6.024-7.788-11.793-7.564-10.084-17.239-20.269-29.183-29.824-34.671-27.737-80.71-44.478-140.495-44.478-59.786 0-105.824 16.74-140.496 44.478-11.944 9.555-21.619 19.74-29.182 29.824-4.327 5.769-6.87 9.959-7.788 11.794-6.169 12.337-21.171 17.338-33.509 11.17-12.337-6.17-17.338-21.172-11.169-33.509 7.75-15.498 23.931-37.074 50.444-58.284z","p-id":"845",fill:"#cdcdcd"})),u.exports.createElement("h3",null,"Oops! Something went wrong."));class K extends u.exports.Component{constructor(e){super(e),this.state={error:null,info:{componentStack:""}}}componentDidCatch(e,t){const{onError:n}=this.props;if("function"==typeof n)try{n.call(this,e,t.componentStack)}catch(o){}this.setState({error:e,info:t})}render(){const{children:e,Fallback:t}=this.props,{error:n,info:o}=this.state;return null!==n&&"function"==typeof t?u.exports.createElement(t,{componentStack:o&&o.componentStack,error:n}):e||null}}K.defaultProps={Fallback:T},y({useEffect:u.exports.useEffect});var D="";const W=({appConfig:e})=>{if(e.request){const{request:t={}}=e;if("[object Array]"===Object.prototype.toString.call(t))t.forEach((e=>{const t=e.instanceName?e.instanceName:"default";if(t){const n=undefined;G(e,M(t)[t])}}));else{const e=undefined;G(t,M().default)}}};function G(e,t){const n=e,{interceptors:o={}}=n,r=i(n,["interceptors"]);Object.keys(r).forEach((e=>{t.defaults[e]=r[e]})),o.request&&t.interceptors.request.use(o.request.onConfig||function(e){return e},o.request.onError||function(e){return Promise.reject(e)}),o.response&&t.interceptors.response.use(o.response.onConfig||function(e){return e},o.response.onError||function(e){return Promise.reject(e)})}function Y(e){W({appConfig:e})}const Z=({addProvider:e,appConfig:t})=>{t.app&&t.app.addProvider&&e(t.app.addProvider)},J=undefined,Q=undefined,V=undefined,U=undefined,X=undefined,ee=undefined;var te="_container_1e3f1_1",ne="_white_1e3f1_8",oe="_txt_1e3f1_17",re="_black_1e3f1_27",ae="_tag_1e3f1_49",ce="_display_1e3f1_58",le,se;const ie=m({keys:{state:{keys:[{type:"white",name:"c2",tag:"do",color:"#99CC33",key:"1"},{type:"black",name:"cs2",key:"!",color:"#99CC99"},{type:"white",name:"d2",tag:"re",color:"#99CC33",key:"2"},{type:"black",name:"ds2",key:"@",color:"#99CC99"},{type:"white",name:"e2",tag:"mi",color:"#99CC33",key:"3"},{type:"white",name:"f2",tag:"fa",color:"#99CC33",key:"4"},{type:"black",name:"fs2",key:"$",color:"#99CC99"},{type:"white",name:"g2",tag:"so",color:"#99CC33",key:"5"},{type:"black",name:"gs2",key:"%",color:"#99CC99"},{type:"white",name:"a2",tag:"la",color:"#99CC33",key:"6"},{type:"black",name:"as2",key:"^",color:"#99CC99"},{type:"white",name:"b2",tag:"si",color:"#99CC33  ",key:"7"},{type:"white",name:"c3",tag:"do",color:"#FFCCCC",key:"8"},{type:"black",name:"cs3",key:"*",color:"#FF9999"},{type:"white",name:"d3",tag:"re",color:"#FFCCCC",key:"9"},{type:"black",name:"ds3",key:"(",color:"#FF9999"},{type:"white",name:"e3",tag:"mi",color:"#FFCCCC",key:"0"},{type:"white",name:"f3",tag:"fa",color:"#FFCCCC",key:"q"},{type:"black",name:"fs3",key:"Q",color:"#FF9999"},{type:"white",name:"g3",tag:"so",color:"#FFCCCC",key:"w"},{type:"black",name:"gs3",key:"W",color:"#FF9999"},{type:"white",name:"a3",tag:"la",color:"#FFCCCC",key:"e"},{type:"black",name:"as3",key:"E",color:"#FF9999"},{type:"white",name:"b3",tag:"si",color:"#FFCCCC",key:"r"},{type:"white",name:"c4",tag:"do",color:"#FFFF99",key:"t"},{type:"black",name:"cs4",key:"T",color:"#FFCC00"},{type:"white",name:"d4",tag:"re",color:"#FFFF99",key:"y"},{type:"black",name:"ds4",key:"Y",color:"#FFCC00"},{type:"white",name:"e4",tag:"mi",color:"#FFFF99",key:"u"},{type:"white",name:"f4",tag:"fa",color:"#FFFF99",key:"i"},{type:"black",name:"fs4",key:"I",color:"#FFCC00"},{type:"white",name:"g4",tag:"so",color:"#FFFF99",key:"o"},{type:"black",name:"gs4",key:"O",color:"#FFCC00"},{type:"white",name:"a4",tag:"la",color:"#FFFF99",key:"p"},{type:"black",name:"as4",key:"P",color:"#FFCC00"},{type:"white",name:"b4",tag:"si",color:"#FFFF99",key:"a"},{type:"white",name:"c5",tag:"do",color:"#CCCCFF",key:"s"},{type:"black",name:"cs5",key:"S",color:"#9999CC"},{type:"white",name:"d5",tag:"re",color:"#CCCCFF",key:"d"},{type:"black",name:"ds5",key:"D",color:"#9999CC"},{type:"white",name:"e5",tag:"mi",color:"#CCCCFF",key:"f"},{type:"white",name:"f5",tag:"fa",color:"#CCCCFF",key:"g"},{type:"black",name:"fs5",key:"G",color:"#9999CC"},{type:"white",name:"g5",tag:"so",color:"#CCCCFF",key:"h"},{type:"black",name:"gs5",key:"H",color:"#9999CC"},{type:"white",name:"a5",tag:"la",color:"#CCCCFF",key:"j"},{type:"black",name:"as5",key:"J",color:"#9999CC"},{type:"white",name:"b5",tag:"si",color:"#CCCCFF",key:"k"},{type:"white",name:"c6",tag:"do",color:"#CCFFFF",key:"l"},{type:"black",name:"cs6",key:"L",color:"#99CCFF"},{type:"white",name:"d6",tag:"re",color:"#CCFFFF",key:"z"},{type:"black",name:"ds6",key:"Z",color:"#99CCFF"},{type:"white",name:"e6",tag:"mi",color:"#CCFFFF",key:"x"},{type:"white",name:"f6",tag:"fa",color:"#CCFFFF",key:"c"},{type:"black",name:"fs6",key:"C",color:"#99CCFF"},{type:"white",name:"g6",tag:"so",color:"#CCFFFF",key:"v"},{type:"black",name:"gs6",key:"V",color:"#99CCFF"},{type:"white",name:"a6",tag:"la",color:"#CCFFFF",key:"b"},{type:"black",name:"as6",key:"B",color:"#99CCFF"},{type:"white",name:"b6",tag:"si",color:"#CCFFFF",key:"n"},{type:"white",name:"-",tag:"-",color:"#CCCCCC",key:"m"}]}},keyHistory:{state:{keyHistory:[]},reducers:{setKeyHistory(e,t){e.keyHistory=t}}}});function pe(){const[e]=ie.useModel("keys"),{keys:t}=e,[n,o]=ie.useModel("keyHistory"),{keyHistory:r}=n,{setKeyHistory:a}=o,c=(e,t)=>{const n=document.getElementById("music");n.src=`./music/${e}.wav.mp3`,n.play(),s(),a([...r,t]);const o=`id${t}`,c=document.getElementById(o),l=setInterval((()=>{if(c.style.height=`${c.offsetHeight+10}px`,c.offsetHeight>=150){clearInterval(l);const e=setInterval((()=>{c.style.height=c.offsetHeight-2+"px",c.offsetHeight<=5&&(c.style.height="5+px",clearInterval(e))}))}}),20)},l=(e,t)=>{if(0===window.event.buttons)return;const n=document.getElementById("music");n.src=`./music/${e}.wav.mp3`,n.play(),s(),a([...r,t]);const o=`id${t}`,c=document.getElementById(o),l=setInterval((()=>{if(c.style.height=`${c.offsetHeight+10}px`,c.offsetHeight>=150){clearInterval(l);const e=setInterval((()=>{c.style.height=c.offsetHeight-2+"px",c.offsetHeight<=5&&clearInterval(e)}))}}),20)};u.exports.useEffect((()=>{addEventListener("keydown",(e=>{const t=document.getElementById(e.key);e.ctrlKey?t.style.backgroundColor="rgb(95, 95, 95)":t.style.backgroundColor="gainsboro",t.click()})),addEventListener("keyup",(e=>{const t=document.getElementById(e.key);e.shiftKey?t.style=re:t.style=ne}))}),[]);const s=()=>{const e=document.createElement("img");e.setAttribute("src","./img/note.svg");const t=50*Math.random()+20;e.setAttribute("width",t);const n=Math.random();e.setAttribute("opacity",n);const{offsetWidth:o}=document.body,{offsetHeight:r}=document.body,a=200*Math.random()+.6*o,c=200*Math.random()+.5*r;e.setAttribute("style",`position:absolute; left:${a}px; top:${c}px;`),document.body.append(e),i(e)},i=e=>{let t=0;const n=setInterval((()=>{e.offsetTop-t>=0?(e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-t*Math.random()+"px",t+=.05):(document.body.removeChild(e),clearInterval(n))}),10)};return f.createElement("div",null,f.createElement("div",{className:te},t.map((e=>f.createElement("div",{className:"white"===e.type?ne:re,onClick:c.bind(this,e.name,e.key),onMouseOverCapture:l.bind(this,e.name,e.key),id:e.key,key:e.key},f.createElement("div",{className:oe},e.key,f.createElement("br",null),f.createElement("div",{className:ae,style:{backgroundColor:e.color}},e.tag)),f.createElement("audio",{src:`./music/${e.name}.wav.mp3`,id:"music"}," "))))))}const de=undefined,ue=undefined,ye=undefined;var me={left:"_left_1r23z_1",currentKey:"_currentKey_1r23z_6",current:"_current_1r23z_6"};function fe(){const[e,t]=ie.useModel("keyHistory"),{keyHistory:n}=e,{setKeyHistory:o}=t,r=()=>{let e=0;const t=n;o([]);const r=setInterval((()=>{const n=document.getElementById(t[e]);e<t.length?(/\d|[a-z]/.test(t[e])?(n.style.backgroundColor="gainsboro",setTimeout((()=>{n.style=me.white}),200)):(n.style.backgroundColor="rgb(95, 95, 95)",setTimeout((()=>{n.style=me.black}),200)),n.click(),e++):clearInterval(r)}),400)},a=()=>{o([])};return f.createElement("div",{className:me.left},f.createElement("div",{className:me.currentKey,id:"currentKey"},n[n.length-1]),f.createElement("div",{className:me.current},n.length<20?n:n.slice(n.length-20)),f.createElement("button",{className:me.play,onClick:r},"\u64ad\u653e\u5f53\u524d\u97f3\u4e50"),f.createElement("button",{className:me.delete,onClick:a},"\u6e05\u7a7a\u5f53\u524d\u97f3\u4e50"))}const Ce=undefined,ge=undefined;var he={right:"_right_1h4ta_1",input:"_input_1h4ta_6"};function ke(){const[e,t]=ie.useModel("keyHistory"),{setKeyHistory:n}=t,o=()=>{let e=0;const t=document.getElementById("input").value;n([]);const o=setInterval((()=>{const n=document.getElementById(t[e]);e<t.length?(/\d|[a-z]/.test(t[e])?(n.style.backgroundColor="gainsboro",setTimeout((()=>{n.style=he.white}),200)):(n.style.backgroundColor="rgb(95, 95, 95)",setTimeout((()=>{n.style=he.black}),200)),n.click(),e++):clearInterval(o)}),300)};return f.createElement("div",{className:he.right},f.createElement("div",{className:he.input},f.createElement("input",{id:"input",placeholder:"\u8bf7\u5c06\u8981\u64ad\u653e\u7684\u97f3\u4e50\u7c98\u8d34\u5230\u6b64\u5904"})),f.createElement("button",{onClick:o},"\u64ad\u653e\u8f93\u5165\u7684\u97f3\u4e50"))}const Fe=undefined,be=undefined,Ee=undefined;var we="_musicWave_ngoqc_1",_e="_block_ngoqc_9",ve="_waveBlock_ngoqc_16";function xe(){const[e]=ie.useModel("keys"),{keys:t}=e;return f.createElement("div",{className:we},t.map((e=>f.createElement("div",{className:_e,key:e.key},f.createElement("div",{className:ve,id:`id${e.key}`,style:{backgroundColor:e.color}}," ")))))}const{Cell:Pe}=C,Ie=undefined,Se=undefined,Oe=[{path:"/",children:[{path:"/",component:()=>u.exports.createElement(C,{gap:20},u.exports.createElement(Pe,{colSpan:12}," ",u.exports.createElement(pe,null)," "),u.exports.createElement(Pe,{colSpan:3}," ",u.exports.createElement(fe,null)," "),u.exports.createElement(Pe,{colSpan:3}," ",u.exports.createElement(ke,null)," "),u.exports.createElement(Pe,{colSpan:12},u.exports.createElement(xe,null)," "))}]}];function Ae(e,t){return(t||[]).reduce(((e,t)=>{const n=t(e);return e.pageConfig&&(n.pageConfig=e.pageConfig),e.getInitialProps&&(n.getInitialProps=e.getInitialProps),n}),e)}function He(e,t){t&&["pageConfig","getInitialProps"].forEach((n=>{Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))}function Ne(e,t,n,o){const{__LAZY__:r,dynamicImport:a,__LOADABLE__:c}=e||{};return c?F(a,{resolveComponent:e=>{const o=e.default;return He(o,n),Ae(o,t)},fallback:o}):r?u.exports.lazy((()=>a().then((e=>{if(t&&t.length){const o=e.default;return He(o,n),s(l({},e),{default:Ae(o,t)})}return e})))):(He(e,n),Ae(e,t))}function je(e,t){return e.map((e=>{const n=e,{children:o,component:r,routeWrappers:a,wrappers:c}=n,s=i(n,["children","component","routeWrappers","wrappers"]);let p=o?[]:a;c&&c.length&&(p=p.concat(c));const d=l({},s);return r&&(d.component=Ne(r,p,e,t)),o&&(d.children=je(o,t)),d}))}function Me(e){const t=e,{type:n,children:o}=t,r=i(t,["type","children"]);let a=o;if(!a&&e.routes){const t=je(e.routes,e.fallback);a=u.exports.createElement(Be,{routes:t,fallback:e.fallback})}return"static"===n?u.exports.createElement(b,l({},r),a):u.exports.createElement(E,l({},r),a)}function Be({routes:e,fallback:t}){return u.exports.createElement(g,null,e.map(((e,n)=>{const{children:o}=e;if(o){const o=e,{component:r,children:a}=o,c=i(o,["component","children"]),p=u.exports.createElement(Be,{routes:a,fallback:t}),d=e=>r?u.exports.createElement(r,l({},e),p):p;return u.exports.createElement(k,s(l({key:n},c),{render:d}))}if(e.redirect){const t=e,{redirect:o}=t,r=i(t,["redirect"]);return u.exports.createElement(h,l({key:n,from:e.path,to:o},r))}{const o=e,{component:r}=o,a=i(o,["component"]);if(r){const e=window.__ICE_SSR_ENABLED__?e=>u.exports.createElement(r,l({},e)):e=>u.exports.createElement(u.exports.Suspense,{fallback:t||u.exports.createElement("div",null,"loading")},u.exports.createElement(r,l({},e)));return u.exports.createElement(k,s(l({key:n},a),{render:e}))}return console.error("[Router] component is required when config routes"),null}})))}function Re(...e){if(0===e.length)return"";const t=[],n=e.filter((e=>""!==e));return n.forEach(((e,o)=>{if("string"!=typeof e)throw new Error(`Path must be a string. Received ${e}`);let r=e;o>0&&(r=r.replace(/^[/]+/,"")),r=o<n.length-1?r.replace(/[/]+$/,""):r.replace(/[/]+$/,"/"),t.push(r)})),t.join("/")}function $e(e,t){return e.map((e=>{if(e.path){const n=Re(t||"",e.path);e.path="/"===n?"/":n.replace(/\/$/,"")}if(e.children)e.children=$e(e.children,e.path);else if(e.component){const t=e.component;t.pageConfig=Object.assign({},t.pageConfig,{componentName:t.name})}return e}))}function Le(){const e=undefined;return e=>{const{pageConfig:t}=e,{title:n,scrollToTop:o}=t||{},r=undefined;return t=>{const[r,a]=u.exports.useState(window.__ICE_PAGE_PROPS__);return u.exports.useEffect((()=>{n&&(document.title=n),o&&window.scrollTo(0,0),window.__ICE_PAGE_PROPS__?window.__ICE_PAGE_PROPS__=null:e.getInitialProps&&(async()=>{const{href:t,origin:n,pathname:o,search:r}=window.location,c=undefined,l=undefined,s=undefined,i={pathname:o,path:t.replace(n,""),query:w.parse(r),ssrError:window.__ICE_SSR_ERROR__},p=await e.getInitialProps(i);a(p)})()}),[]),u.exports.createElement(e,l({},Object.assign({},t,r)))}}}const qe=({setRenderApp:e,appConfig:t,modifyRoutes:n,wrapperPageComponent:o,modifyRoutesComponent:r,buildConfig:a,context:c,applyRuntimeAPI:p})=>{const{router:d={},app:y={}}=t,{ErrorBoundaryFallback:m,onErrorBoundaryHandler:f}=y,{parseSearchParams:C=!0}=y,g=undefined;o((e=>{const t=undefined;return t=>{const n=C&&p("getSearchParams");return u.exports.createElement(e,l({},Object.assign({},t,{searchParams:n})))}})),n((()=>$e(d.routes||Oe,""))),r((()=>Be));const h=e=>{const{pageConfig:t={}}=e,n=undefined;return n=>t.errorBoundary?u.exports.createElement(K,{Fallback:m,onError:f},u.exports.createElement(e,l({},n))):u.exports.createElement(e,l({},n))},k=undefined;o(Le()),o(h),d.modifyRoutes&&n(d.modifyRoutes);const F=a&&a.router&&a.router.lazy,b=undefined;e(((e,t,n={})=>()=>{let o=l(s(l({},d),{lazy:F}),n);o.history||(o.history=p("createHistory",{type:d.type,basename:d.basename}));const r=o,{fallback:a}=r,c=i(r,["fallback"]);return u.exports.createElement(Me,l({},c),t?u.exports.createElement(t,{routes:je(e,a),fallback:a}):null)}))};var ze=({addProvider:e,appConfig:t,context:{initialData:n={},createElement:o}})=>{const r=({children:e})=>{const r=t.store||{};let a={};return n.initialStates?a=n.initialStates:r.initialStates&&(a=r.initialStates),o(ie.Provider,{initialStates:a,children:e})};ie&&Object.prototype.hasOwnProperty.call(ie,"Provider")&&e(r)};const Te=e=>t=>{const{pageConfig:n={}}=t,o=undefined;return L((o=>{const r=o,{auth:a,setAuth:c}=r,s=i(r,["auth","setAuth"]),p=n.auth;if(p&&!Array.isArray(p))throw new Error("pageConfig.auth must be an array");const d=undefined;return!Array.isArray(p)||!p.length||Object.keys(a).filter((e=>!!p.includes(e)&&a[e])).length?u.exports.createElement(t,l({},s)):e.NoAuthFallback?"function"==typeof e.NoAuthFallback?u.exports.createElement(e.NoAuthFallback,null):e.NoAuthFallback:null}))};var Ke=({context:e,appConfig:t,addProvider:n,wrapperPageComponent:o})=>{const r=undefined,a=(e&&e.initialData?e.initialData:{}).auth||{},c=t.auth||{},l=undefined;n((({children:e})=>u.exports.createElement(R,{value:a},e))),o(Te(c))};function De(e){e.loadModule(Z),e.loadModule(qe),e.loadModule(ze),e.loadModule(Ke)}const We={icestarkType:"es"},Ge=_({loadRuntimeModules:De,createElement:u.exports.createElement,runtimeAPI:{createHistory:v,getSearchParams:x}});function Ye(e){Y(e),P&&P(e),I({appConfig:e,buildConfig:We,ErrorBoundary:K,appLifecycle:{createBaseApp:Ge,initAppLifeCycles:S,emitLifeCycles:O}})}const Ze=undefined;Ye({app:{rootId:"ice-container"}});
