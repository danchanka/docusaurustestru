(window.webpackJsonp=window.webpackJsonp||[]).push([[39,349],{420:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(423),i=t(16),o=t(27),r=t(430),s=t(3),d=t(425),m=t(424),b=t(445),u=t(449),h=t(450),p=t(448),E=t(427),f=t(433),O=t(451);var v=e=>c.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),c.a.createElement("g",{fill:"#7a7a7a"},c.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),c.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),j=t(453),g=t(426),k=t(111),N=t.n(k);const C=(e,a)=>"link"===e.type?Object(m.isSamePath)(e.href,a):"category"===e.type&&e.items.some((e=>C(e,a)));function _({item:e,onItemClick:a,collapsible:t,activePath:l,...i}){const{items:o,label:r}=e,m=C(e,l),b=function(e){const a=Object(n.useRef)(e);return Object(n.useEffect)((()=>{a.current=e}),[e]),a.current}(m),[u,h]=Object(n.useState)((()=>!!t&&(!m&&e.collapsed))),p=Object(n.useRef)(null),[E,f]=Object(n.useState)(void 0),O=(e=!0)=>{var a;f(e?`${null===(a=p.current)||void 0===a?void 0:a.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{m&&!b&&u&&h(!1)}),[m,b,u]);const v=Object(n.useCallback)((e=>{e.preventDefault(),E||O(),setTimeout((()=>h((e=>!e))),100)}),[E]);return 0===o.length?null:c.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":u}),key:r},c.a.createElement("a",Object(s.a)({className:Object(d.a)("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&m,[N.a.menuLinkText]:!t}),onClick:t?v:void 0,href:t?"#!":void 0},i),r),c.a.createElement("ul",{className:"menu__list",ref:p,style:{height:E},onTransitionEnd:()=>{u||O(!1)}},o.map((e=>c.a.createElement(y,{tabIndex:u?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:t,activePath:l})))))}function T({item:e,onItemClick:a,activePath:t,collapsible:n,...l}){const{href:i,label:o}=e,r=C(e,t);return c.a.createElement("li",{className:"menu__list-item",key:o},c.a.createElement(E.a,Object(s.a)({className:Object(d.a)("menu__link",{"menu__link--active":r,[N.a.menuLinkExternal]:!Object(f.a)(i)}),to:i},Object(f.a)(i)&&{isNavLink:!0,exact:!0,onClick:a},l),o))}function y(e){switch(e.item.type){case"category":return c.a.createElement(_,e);case"link":default:return c.a.createElement(T,e)}}var I=function({path:e,sidebar:a,sidebarCollapsible:t=!0,onCollapse:l,isHidden:i}){const[o,r]=Object(n.useState)(!1),{navbar:{hideOnScroll:s},hideableSidebar:E}=Object(m.useThemeConfig)(),{isAnnouncementBarClosed:f}=Object(b.a)(),{scrollY:k}=Object(p.a)();Object(u.a)(o);const C=Object(h.a)();return Object(n.useEffect)((()=>{C===h.b.desktop&&r(!1)}),[C]),c.a.createElement("div",{className:Object(d.a)(N.a.sidebar,{[N.a.sidebarWithHideableNavbar]:s,[N.a.sidebarHidden]:i})},s&&c.a.createElement(O.a,{tabIndex:-1,className:N.a.sidebarLogo}),c.a.createElement("div",{className:Object(d.a)("menu","menu--responsive","thin-scrollbar",N.a.menu,{"menu--show":o,[N.a.menuWithAnnouncementBar]:!f&&0===k})},c.a.createElement("button",{"aria-label":o?Object(g.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(g.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{r(!o)}},o?c.a.createElement("span",{className:Object(d.a)(N.a.sidebarMenuIcon,N.a.sidebarMenuCloseIcon)},"\xd7"):c.a.createElement(j.a,{className:N.a.sidebarMenuIcon,height:24,width:24})),c.a.createElement("ul",{className:"menu__list"},a.map((a=>c.a.createElement(y,{key:a.label,item:a,onItemClick:e=>{e.target.blur(),r(!1)},collapsible:t,activePath:e}))))),E&&c.a.createElement("button",{type:"button",title:Object(g.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(g.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(d.a)("button button--secondary button--outline",N.a.collapseSidebarButton),onClick:l},c.a.createElement(v,{className:N.a.collapseSidebarButtonIcon})))},S=t(432),w=t(441),x=t(23),A=t(112),L=t.n(A);function B({currentDocRoute:e,versionMetadata:a,children:t}){var o,s;const{siteConfig:b,isClient:u}=Object(i.default)(),{pluginId:h,permalinkToSidebar:p,docsSidebars:E,version:f}=a,O=p[e.path],j=E[O],[k,N]=Object(n.useState)(!1),[C,_]=Object(n.useState)(!1),T=Object(n.useCallback)((()=>{C&&_(!1),N(!k)}),[C]);return c.a.createElement(r.a,{key:u,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:f,tag:Object(m.docVersionSearchTag)(h,f)}},c.a.createElement("div",{className:L.a.docPage},j&&c.a.createElement("div",{className:Object(d.a)(L.a.docSidebarContainer,{[L.a.docSidebarContainerHidden]:k}),onTransitionEnd:e=>{e.currentTarget.classList.contains(L.a.docSidebarContainer)&&k&&_(!0)},role:"complementary"},c.a.createElement(I,{key:O,sidebar:j,path:e.path,sidebarCollapsible:null===(o=null===(s=b.themeConfig)||void 0===s?void 0:s.sidebarCollapsible)||void 0===o||o,onCollapse:T,isHidden:C}),C&&c.a.createElement("div",{className:L.a.collapsedDocSidebar,title:Object(g.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(g.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},c.a.createElement(v,{className:L.a.expandSidebarButtonIcon}))),c.a.createElement("main",{className:Object(d.a)(L.a.docMainContainer,{[L.a.docMainContainerEnhanced]:k})},c.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",L.a.docItemWrapper,{[L.a.docItemWrapperEnhanced]:k})},c.a.createElement(l.a,{components:S.a},t)))))}a.default=function(e){const{route:{routes:a},versionMetadata:t,location:n}=e,l=a.find((e=>Object(x.matchPath)(n.pathname,e)));return l?c.a.createElement(B,{currentDocRoute:l,versionMetadata:t},Object(o.a)(a)):c.a.createElement(w.default,e)}},432:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(427),i=t(437),o=t(425),r=t(426),s=t(424),d=(t(59),t(60)),m=t.n(d);var b=e=>function({id:a,...t}){const{navbar:{hideOnScroll:n}}=Object(s.useThemeConfig)();return a?c.a.createElement(e,t,c.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(o.a)("anchor",{[m.a.enhancedAnchor]:!n}),id:a}),t.children,c.a.createElement("a",{className:"hash-link",href:`#${a}`,title:Object(r.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):c.a.createElement(e,t)};const u={code:e=>{const{children:a}=e;return"string"==typeof a?a.includes("\n")?c.a.createElement(i.a,e):c.a.createElement("code",e):a},a:e=>c.a.createElement(l.a,e),pre:e=>{const{children:a}=e;return c.a.createElement(i.a,null==a?void 0:a.props)},h1:b("h1"),h2:b("h2"),h3:b("h3"),h4:b("h4"),h5:b("h5"),h6:b("h6")};a.a=u},441:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(430),i=t(426);a.default=function(){return c.a.createElement(l.a,{title:"Page Not Found"},c.a.createElement("main",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6 col--offset-3"},c.a.createElement("h1",{className:"hero__title"},c.a.createElement(i.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),c.a.createElement("p",null,c.a.createElement(i.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),c.a.createElement("p",null,c.a.createElement(i.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);