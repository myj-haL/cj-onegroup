"use strict";(self.webpackChunkcj_one_group=self.webpackChunkcj_one_group||[]).push([[781],{1733:(e,n,a)=>{a.r(n),a.d(n,{default:()=>L});var t=a(2516);const i={container:"Branch_container__7o0+5",visual_banner:"Branch_visual_banner__NnMXP",inner_textBox:"Branch_inner_textBox__hYFU-",scroll_to:"Branch_scroll_to__QVPTS",section_list:"Branch_section_list__wfVOw",brunch_list:"Branch_brunch_list__Bb9uY",items:"Branch_items__8bEe3",right:"Branch_right__CEzmy",left:"Branch_left__RmxPA",category:"Branch_category__wcoN8",link:"Branch_link__Lb2NW",no_link:"Branch_no_link__WPslc",address:"Branch_address__xW8nx",call:"Branch_call__tWvXL",intro:"Branch_intro__KAEMv",contact_form:"Branch_contact_form__rMubW",category_tabs:"Branch_category_tabs__3tgcY",active:"Branch_active__V7Dwk",franchise_select:"Branch_franchise_select__8rAcz",form:"Branch_form__QHoik",submit_btn:"Branch_submit_btn__eRnE9",form_wrap:"Branch_form_wrap__kSWJw",top:"Branch_top__ufZkM"},s=a.p+"static/media/branch-visual-banner.60e967ee0f40dfd16b36.png";var c=a(4117);const r=a.p+"static/media/branch-img-1.0d5d8e1a2f90436f770a.png",o=a.p+"static/media/branch-img-2.3f41419313d5c07d0a48.png",d=a.p+"static/media/branch-img-3.b93e981df074839ec9a3.png",l=a.p+"static/media/branch-img-4.e7f330d6fe9bbf2c4f9a.png",u=a.p+"static/media/branch-img-5.e024b89d6c06ef9516cc.png";const E=function(){const{t:e}=(0,c.Bd)();return[{id:0,area:e("HEADER_MENU_2_SUB_1"),category:e("BRANCH_MARKET_1_SUB_TITLE"),address:"ADRESS : 35-36 Greek St, London W1D 5DL",call:"02072870526",explain:e("BRANCH_MARKET_1_TEXT"),img:r,link:"https://chungdam.co.uk/"},{id:1,area:e("HEADER_MENU_2_SUB_2"),category:e("BRANCH_MARKET_2_SUB_TITLE"),address:"ADRESS : 15 Frith St, London W1D 4RE",call:"02036683504",explain:e("BRANCH_MARKET_2_TEXT"),img:o},{id:2,area:e("HEADER_MENU_2_SUB_3"),category:e("BRANCH_MARKET_3_SUB_TITLE"),address:"ADRESS : 110 Shaftesbury Ave, London W1D 5EH",call:"02074398393",explain:e("BRANCH_MARKET_3_TEXT"),img:d,link:"https://shibuyasoho.com/"},{id:3,area:e("HEADER_MENU_2_SUB_4"),category:e("BRANCH_MARKET_4_SUB_TITLE"),address:"ADRESS : 26 Romilly St, London W1D 5AJ",call:"02072871585",explain:e("BRANCH_MARKET_4_TEXT"),img:l,link:"https://hongdaepocha.com/"},{id:4,area:e("HEADER_MENU_2_SUB_5"),category:e("BRANCH_MARKET_5_SUB_TITLE"),address:"ADRESS : 45 Haven Grn, London W5 2NX",call:"-",explain:e("BRANCH_MARKET_5_TEXT"),img:u}]};var _=a(5043);const h={_origin:"https://api.emailjs.com"},R=(e,n,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!n)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class A{constructor(e){this.status=e.status,this.text=e.responseText}}const m=function(e,n){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((t,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",(e=>{let{target:n}=e;const a=new A(n);200===a.status||"OK"===a.text?t(a):i(a)})),s.addEventListener("error",(e=>{let{target:n}=e;i(new A(n))})),s.open("POST",h._origin+e,!0),Object.keys(a).forEach((e=>{s.setRequestHeader(e,a[e])})),s.send(n)}))},v=(e,n,a,t)=>{const i=t||h._userID;R(i,e,n);const s={lib_version:"3.2.0",user_id:i,service_id:e,template_id:n,template_params:a};return m("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})};var p=a(3216);const f="MailSendPopup_container__myD-9",b="MailSendPopup_fade_in__YXuSn",x="MailSendPopup_fade_out__0FQpZ",I="MailSendPopup_inner__1cWsr",S="MailSendPopup_loader__4sVHG",T="MailSendPopup_close__U6ILx";const g=a.p+"static/media/icon-popup-close.4b6597ac421aff95d76d8c471ad391db.svg";var j={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function N(e){if("number"===typeof e)return{value:e,unit:"px"};var n,a=(e.match(/^[0-9.]*/)||"").toString();n=a.includes(".")?parseFloat(a):parseInt(a,10);var t=(e.match(/[^0-9]*$/)||"").toString();return j[t]?{value:n,unit:t}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}function H(e){var n=N(e);return"".concat(n.value).concat(n.unit)}var B=function(){return B=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var i in n=arguments[a])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},B.apply(this,arguments)},P=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]])}return a},C=function(e,n,a){var t="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return t;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,c="\n    @keyframes ".concat(t," {\n      ").concat(n,"\n    }\n  ");return s&&s.insertRule(c,0),t}("MoonLoader","100% {transform: rotate(360deg)}","moon");const y=function(e){var n=e.loading,a=void 0===n||n,t=e.color,i=void 0===t?"#000000":t,s=e.speedMultiplier,c=void 0===s?1:s,r=e.cssOverride,o=void 0===r?{}:r,d=e.size,l=void 0===d?60:d,u=P(e,["loading","color","speedMultiplier","cssOverride","size"]),E=N(l),h=E.value,R=E.unit,A=Math.round(h/7),m=B({display:"inherit",position:"relative",width:"".concat("".concat(h+2*A).concat(R)),height:"".concat("".concat(h+2*A).concat(R)),animation:"".concat(C," ").concat(.6/c,"s 0s infinite linear"),animationFillMode:"forwards"},o),v=function(e){return{width:H(e),height:H(e),borderRadius:"100%"}},p=B(B({},v(A)),{backgroundColor:"".concat(i),opacity:"0.8",position:"absolute",top:"".concat("".concat(h/2-A/2).concat(R)),animation:"".concat(C," ").concat(.6/c,"s 0s infinite linear"),animationFillMode:"forwards"}),f=B(B({},v(h)),{border:"".concat(A,"px solid ").concat(i),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return a?_.createElement("span",B({style:m},u),_.createElement("span",{style:p}),_.createElement("span",{style:f})):null};var O=a(579);const M=function(e){let{type:n,onClose:a}=e;const[t,i]=(0,_.useState)(!0),s=(0,_.useCallback)((()=>{i(!1),setTimeout((()=>{a&&a()}),100)}),[a]);return(0,_.useEffect)((()=>{if("success"===n){const e=setTimeout(s,3e3);return()=>clearTimeout(e)}}),[n,s]),(0,O.jsx)("div",{className:`${f} ${t?b:x}`,children:(0,O.jsxs)("div",{className:I,children:[(0,O.jsx)("button",{className:T,type:"button",onClick:s,children:(0,O.jsx)("img",{alt:"close icon",src:g})}),(0,O.jsx)("h3",{children:"error"===n?"Incorrect input":"loading"===n?"Loading...":"The inquiry has been completed."}),"error"===n?(0,O.jsx)("img",{alt:"error icon",src:"data:image/png;base64,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"}):"loading"===n?(0,O.jsx)(y,{color:"#36d7b7",loading:!0,size:80,"aria-label":"Loading Spinner","data-testid":"loader",className:S}):(0,O.jsx)("img",{alt:"success icon",src:"data:image/png;base64,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"})]})})};const L=function(){const{t:e}=(0,c.Bd)(),n=E(),a=(0,_.useRef)([]),r=(0,_.useRef)(),[o,d]=(0,_.useState)(null),[l,u]=(0,_.useState)(0),h=(0,p.zy)();(0,_.useEffect)((()=>{"#contact_section"===h.hash&&r.current&&setTimeout((()=>{r.current.scrollIntoView({behavior:"smooth"})}),100)}),[h]);const[R,A]=(0,_.useState)({NODE_ENV:"production",PUBLIC_URL:"/cj-onegroup",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SUPPORT_EMAIL_1),[m,f]=(0,_.useState)(e("HEADER_MENU_2_SUB_2")),[b,x]=(0,_.useState)(""),[I,S]=(0,_.useState)(""),[T,g]=(0,_.useState)(""),j=[{id:0,name:e("HEADER_MENU_2_SUB_1")},{id:1,name:e("HEADER_MENU_2_SUB_2")},{id:2,name:e("HEADER_MENU_2_SUB_3")},{id:3,name:e("HEADER_MENU_2_SUB_4")},{id:4,name:e("HEADER_MENU_2_SUB_5")}],N=[{id:0,name:e("BRANCH_CONTACT_TABS_1")},{id:1,name:e("BRANCH_CONTACT_TABS_2")}];return(0,O.jsx)(t.A,{children:(0,O.jsxs)("div",{className:i.container,children:[(0,O.jsxs)("div",{className:i.visual_banner,children:[(0,O.jsx)("img",{alt:"visual img",src:s}),(0,O.jsxs)("div",{className:i.inner_textBox,children:[(0,O.jsxs)("div",{className:i.top,children:[(0,O.jsx)("h3",{className:i.title,children:e("BRANCH_BANNER_TITLE")}),(0,O.jsx)("p",{children:e("BRANCH_BANNER_SUB_TITLE")})]}),(0,O.jsx)("button",{type:"button",onClick:()=>{r.current.scrollIntoView({behavior:"smooth"})},className:i.scroll_to,children:e("BRANCH_BANNER_SCROLL_BTN")})]}),(0,O.jsx)("ul",{className:i.section_list,children:j.map(((e,n)=>(0,O.jsx)("li",{onClick:()=>(e=>{a.current[e].scrollIntoView({behavior:"smooth"})})(n),className:0===n?i.active:"",children:e.name},e.id)))})]}),(0,O.jsx)("div",{className:i.brunch_list,children:n.map(((n,t)=>(0,O.jsxs)("div",{className:i.items,ref:e=>a.current[t]=e,children:[(0,O.jsxs)("div",{className:i.left,children:[(0,O.jsxs)("div",{className:i.names,children:[(0,O.jsx)("h3",{children:n.area}),(0,O.jsx)("p",{className:i.category,children:n.category})]}),(0,O.jsxs)("div",{className:i.contents,children:[(0,O.jsx)("a",{href:n.link,target:"_blank",className:`${i.link} ${!n.link&&i.no_link}`,rel:"noreferrer",children:e("BRANCH_GO_TO_WEB")}),(0,O.jsx)("p",{className:i.address,children:n.address}),(0,O.jsxs)("p",{className:i.call,children:["TEL : ",n.call]}),(0,O.jsx)("p",{className:i.intro,children:n.explain})]})]}),(0,O.jsx)("div",{className:i.right,children:n.img&&(0,O.jsx)("img",{alt:"market img",src:n.img})})]},n.id)))}),(0,O.jsx)("div",{className:i.contact_form,ref:r,id:"contact_section",children:(0,O.jsxs)("form",{onSubmit:e=>{e.preventDefault();const n={to_email:R,from_name:b,from_email:I,message:T,subject:1===l?"":`[${m}]`};b&&I&&T?(d("loading"),v({NODE_ENV:"production",PUBLIC_URL:"/cj-onegroup",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAIL_SERVICE_ID,"template_30s3vqj",n,{NODE_ENV:"production",PUBLIC_URL:"/cj-onegroup",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_USER_ID).then((e=>{console.log("Email sent successfully",e),d("success")}),(e=>{console.error("Error sending email",e),d("error")}))):alert("\ubaa8\ub4e0 \ud544\ub4dc\ub97c \ucc44\uc6cc\uc8fc\uc138\uc694.")},children:[(0,O.jsx)("h3",{className:i.title,children:e("BRANCH_CONTACT_US_TITLE")}),(0,O.jsx)("p",{children:e("BRANCH_CONTACT_US_SUB_TITLE")}),(0,O.jsxs)("div",{className:i.form_wrap,children:[(0,O.jsx)("div",{className:i.category_tabs,children:N.map(((e,n)=>(0,O.jsx)("button",{type:"button",onClick:()=>(e=>{u(e)})(n),className:`${i.tab_item} ${l===n?i.active:""}`,children:e.name},e.id)))}),0===l&&(0,O.jsxs)("select",{name:"email",value:R,onChange:e=>{A(e.target.value);const n=e.target.options[e.target.selectedIndex].text;f(n)},id:"",className:i.franchise_select,children:[(0,O.jsx)("option",{value:{NODE_ENV:"production",PUBLIC_URL:"/cj-onegroup",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SUPPORT_EMAIL_1,checked:!0,children:e("HEADER_MENU_2_SUB_2")}),(0,O.jsx)("option",{value:{NODE_ENV:"production",PUBLIC_URL:"/cj-onegroup",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SUPPORT_EMAIL_2,children:e("HEADER_MENU_2_SUB_5")})]}),(0,O.jsxs)("div",{className:i.form,children:[(0,O.jsx)("input",{type:"text",name:"name",value:b,id:"",onChange:e=>x(e.target.value),placeholder:"Name"}),(0,O.jsx)("input",{type:"text",name:"email",value:I,onChange:e=>S(e.target.value),id:"",placeholder:"E-mail"}),(0,O.jsx)("textarea",{name:"message",value:T,id:"",onChange:e=>g(e.target.value),placeholder:"Message"})]})]}),(0,O.jsx)("button",{type:"submit",className:i.submit_btn,children:e("BRANCH_CONTACT_SUBMIT")})]})}),o&&(0,O.jsx)(M,{type:o,onClose:()=>d(null)})]})})}}}]);
//# sourceMappingURL=781.b723aad8.chunk.js.map