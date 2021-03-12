(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{419:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(427),s=a(426);var l=function(e){const{metadata:t}=e;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(s.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(s.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(s.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(16),c=a(429),d=a(424);function m({siteTitle:e,versionLabel:t}){return r.a.createElement(s.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:r.a.createElement("strong",null,t)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u({siteTitle:e,versionLabel:t}){return r.a.createElement(s.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:r.a.createElement("strong",null,t)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v({versionLabel:e,to:t,onClick:a}){return r.a.createElement(s.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:e,latestVersionLink:r.a.createElement("strong",null,r.a.createElement(i.a,{to:t,onClick:a},r.a.createElement(s.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var b=function(){const{siteConfig:{title:e}}=Object(o.default)(),{pluginId:t}=Object(c.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=Object(d.useDocsPreferredVersion)(t),n=Object(c.useActiveVersion)(t),{latestDocSuggestion:i,latestVersionSuggestion:s}=Object(c.useDocVersionSuggestions)(t);if(!s)return r.a.createElement(r.a.Fragment,null);const l=null!=i?i:(b=s).docs.find((e=>e.id===b.mainDocId));var b;return r.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},r.a.createElement("div",null,"current"===n.name?r.a.createElement(m,{siteTitle:e,versionLabel:n.label}):r.a.createElement(u,{siteTitle:e,versionLabel:n.label})),r.a.createElement("div",{className:"margin-top--md"},r.a.createElement(v,{versionLabel:s.label,to:l.path,onClick:()=>a(s.name)})))},p=a(434),f=a(103),g=a.n(f);function h({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return r.a.createElement(s.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:r.a.createElement("time",{dateTime:new Date(1e3*e).toISOString(),className:g.a.lastUpdatedDate},t)}}," on {date}")}function E({lastUpdatedBy:e}){return r.a.createElement(s.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:r.a.createElement("strong",null,e)}}," by {user}")}function w({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,r.a.createElement(s.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?r.a.createElement(h,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?r.a.createElement(E,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)))}var O=a(439),y=a(440),L=a(425),N=a(104),U=a.n(N);t.default=function(e){const{content:t}=e,{metadata:a,frontMatter:{image:n,keywords:i,hide_title:s,hide_table_of_contents:o}}=t,{description:d,title:m,editUrl:u,lastUpdatedAt:v,formattedLastUpdatedAt:f,lastUpdatedBy:g}=a,{pluginId:h}=Object(c.useActivePlugin)({failfast:!0}),E=Object(c.useVersions)(h),N=Object(c.useActiveVersion)(h),k=E.length>1;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{title:m,description:d,keywords:i,image:n}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(L.a)("col",{[U.a.docItemCol]:!o})},r.a.createElement(b,null),r.a.createElement("div",{className:U.a.docItemContainer},r.a.createElement("article",null,k&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",N.label)),!s&&r.a.createElement("header",null,r.a.createElement("h1",{className:U.a.docTitle},m)),r.a.createElement("div",{className:"markdown"},r.a.createElement(t,null))),(u||v||g)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},u&&r.a.createElement(y.a,{editUrl:u})),(v||g)&&r.a.createElement(w,{lastUpdatedAt:v,formattedLastUpdatedAt:f,lastUpdatedBy:g}))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(l,{metadata:a})))),!o&&t.toc&&r.a.createElement("div",{className:"col col--3"},r.a.createElement(O.a,{toc:t.toc}))))}},427:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),s=a(433),l=a(8);const o=Object(n.createContext)({collectLink:()=>{}});var c=a(428),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:m,href:u,activeClassName:v,isActive:b,"data-noBrokenLinkCheck":p,autoAddBaseUrl:f=!0}=e,g=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(c.b)(),E=Object(n.useContext)(o),w=m||u,O=Object(s.a)(w),y=null==w?void 0:w.replace("pathname://",""),L=void 0!==y?(N=y,f&&(e=>e.startsWith("/"))(N)?h(N):N):void 0;var N;const U=Object(n.useRef)(!1),k=a?i.e:i.c,_=l.a.canUseIntersectionObserver;let j;Object(n.useEffect)((()=>(!_&&O&&window.docusaurus.prefetch(L),()=>{_&&j&&j.disconnect()})),[L,_,O]);const A=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,T=!L||!O||A;return L&&O&&!A&&!p&&E.collectLink(L),T?r.a.createElement("a",Object.assign({href:L},w&&!O&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(k,Object.assign({},g,{onMouseEnter:()=>{U.current||(window.docusaurus.preload(L),U.current=!0)},innerRef:e=>{var t,a;_&&e&&O&&(t=e,a=()=>{window.docusaurus.prefetch(L)},j=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),a())}))})),j.observe(t))},to:L||""},a&&{isActive:b,activeClassName:v}))}},428:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(16),r=a(433);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const s=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+s:s}(t,e,a,n)}}function s(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},433:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},434:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),i=a(24),s=a(428),l=a(424);function o({title:e,description:t,keywords:a,image:n}){const o=Object(l.useTitleFormatter)(e),c=Object(s.a)(n,{absolute:!0});return r.a.createElement(i.a,null,e&&r.a.createElement("title",null,o),e&&r.a.createElement("meta",{property:"og:title",content:o}),t&&r.a.createElement("meta",{name:"description",content:t}),t&&r.a.createElement("meta",{property:"og:description",content:t}),a&&r.a.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),n&&r.a.createElement("meta",{property:"og:image",content:c}),n&&r.a.createElement("meta",{name:"twitter:image",content:c}),n&&r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},439:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(425);var s=function(e,t,a){const[r,i]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,s=!1;const l=document.getElementsByClassName(e);for(;a<l.length&&!s;){const e=l[a],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===c&&(r&&r.classList.remove(t),e.classList.add(t),i(e),s=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},l=a(62),o=a.n(l);const c="table-of-contents__link";function d({toc:e,isChild:t}){return e.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:`#${e.id}`,className:c,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(d,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return s(c,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(i.a)(o.a.tableOfContents,"thin-scrollbar")},r.a.createElement(d,{toc:e}))}},440:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),i=a(426),s=a(3),l=a(425),o=a(63),c=a.n(o);var d=({className:e,...t})=>r.a.createElement("svg",Object(s.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(l.a)(c.a.iconEdit,e),"aria-label":"Edit page"},t),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function m({editUrl:e}){return r.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(d,null),r.a.createElement(i.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);