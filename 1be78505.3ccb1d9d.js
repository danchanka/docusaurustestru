(window.webpackJsonp=window.webpackJsonp||[]).push([[41,349],{418:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(421),i=t(22),r=t(25),o=t(427),s=t(3),u=t(7),m=t(422),d=t(423),b=t(442),h=t(446),f=t(447),p=t(445),v=t(424),E=t(428),O=t(449),j=function(e){return c.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),c.a.createElement("g",{fill:"#7a7a7a"},c.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),c.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=t(448),C=t(111),g=t.n(C);var N=function e(a,t){return"link"===a.type?Object(d.isSamePath)(a.href,t):"category"===a.type&&a.items.some((function(a){return e(a,t)}))};function _(e){var a,t,l,i=e.item,r=e.onItemClick,o=e.collapsible,d=e.activePath,b=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=i.items,f=i.label,p=N(i,d),v=(t=p,l=Object(n.useRef)(t),Object(n.useEffect)((function(){l.current=t}),[t]),l.current),E=Object(n.useState)((function(){return!!o&&(!p&&i.collapsed)})),O=E[0],j=E[1],k=Object(n.useRef)(null),C=Object(n.useState)(void 0),_=C[0],y=C[1],I=function(e){var a;void 0===e&&(e=!0),y(e?(null===(a=k.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){p&&!v&&O&&j(!1)}),[p,v,O]);var w=Object(n.useCallback)((function(e){e.preventDefault(),_||I(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[_]);return 0===h.length?null:c.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":O}),key:f},c.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(a={"menu__link--sublist":o,"menu__link--active":o&&p},a[g.a.menuLinkText]=!o,a)),onClick:o?w:void 0,href:o?"#!":void 0},b),f),c.a.createElement("ul",{className:"menu__list",ref:k,style:{height:_},onTransitionEnd:function(){O||I(!1)}},h.map((function(e){return c.a.createElement(S,{tabIndex:O?"-1":"0",key:e.label,item:e,onItemClick:r,collapsible:o,activePath:d})}))))}function y(e){var a=e.item,t=e.onItemClick,n=e.activePath,l=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=a.href,r=a.label,o=N(a,n);return c.a.createElement("li",{className:"menu__list-item",key:r},c.a.createElement(v.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:i},Object(E.a)(i)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),r))}function S(e){switch(e.item.type){case"category":return c.a.createElement(_,e);case"link":default:return c.a.createElement(y,e)}}var I=function(e){var a,t,l=e.path,i=e.sidebar,r=e.sidebarCollapsible,o=void 0===r||r,s=e.onCollapse,u=e.isHidden,v=Object(n.useState)(!1),E=v[0],C=v[1],N=Object(d.useThemeConfig)(),_=N.navbar.hideOnScroll,y=N.hideableSidebar,I=Object(b.a)().isAnnouncementBarClosed,w=Object(p.a)().scrollY;Object(h.a)(E);var M=Object(f.a)();return Object(n.useEffect)((function(){M===f.b.desktop&&C(!1)}),[M]),c.a.createElement("div",{className:Object(m.a)(g.a.sidebar,(a={},a[g.a.sidebarWithHideableNavbar]=_,a[g.a.sidebarHidden]=u,a))},_&&c.a.createElement(O.a,{tabIndex:-1,className:g.a.sidebarLogo}),c.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",g.a.menu,(t={"menu--show":E},t[g.a.menuWithAnnouncementBar]=!I&&0===w,t))},c.a.createElement("button",{"aria-label":E?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){C(!E)}},E?c.a.createElement("span",{className:Object(m.a)(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):c.a.createElement(k.a,{className:g.a.sidebarMenuIcon,height:24,width:24})),c.a.createElement("ul",{className:"menu__list"},i.map((function(e){return c.a.createElement(S,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),C(!1)},collapsible:o,activePath:l})})))),y&&c.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",g.a.collapseSidebarButton),onClick:s},c.a.createElement(j,{className:g.a.collapseSidebarButtonIcon})))},w=t(430),M=t(438),P=t(431),x=t(112),T=t.n(x);function H(e){var a,t,r,s,u=e.currentDocRoute,b=e.versionMetadata,h=e.children,f=Object(i.default)(),p=f.siteConfig,v=f.isClient,E=b.pluginId,O=b.permalinkToSidebar,k=b.docsSidebars,C=b.version,g=O[u.path],N=k[g],_=Object(n.useState)(!1),y=_[0],S=_[1],M=Object(n.useState)(!1),P=M[0],x=M[1],H=Object(n.useCallback)((function(){P&&x(!1),S(!y)}),[P]);return c.a.createElement(o.a,{key:v,searchMetadatas:{version:C,tag:Object(d.docVersionSearchTag)(E,C)}},c.a.createElement("div",{className:T.a.docPage},N&&c.a.createElement("div",{className:Object(m.a)(T.a.docSidebarContainer,(a={},a[T.a.docSidebarContainerHidden]=y,a)),onTransitionEnd:function(e){e.currentTarget.classList.contains(T.a.docSidebarContainer)&&y&&x(!0)},role:"complementary"},c.a.createElement(I,{key:g,sidebar:N,path:u.path,sidebarCollapsible:null===(t=null===(r=p.themeConfig)||void 0===r?void 0:r.sidebarCollapsible)||void 0===t||t,onCollapse:H,isHidden:P}),P&&c.a.createElement("div",{className:T.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:H,onClick:H},c.a.createElement(j,null))),c.a.createElement("main",{className:T.a.docMainContainer},c.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",T.a.docItemWrapper,(s={},s[T.a.docItemWrapperEnhanced]=y,s))},c.a.createElement(l.a,{components:w.a},h)))))}a.default=function(e){var a=e.route.routes,t=e.versionMetadata,n=e.location,l=a.find((function(e){return Object(P.matchPath)(n.pathname,e)}));return l?c.a.createElement(H,{currentDocRoute:l,versionMetadata:t},Object(r.a)(a)):c.a.createElement(M.default,e)}},430:function(e,a,t){"use strict";var n=t(3),c=t(0),l=t.n(c),i=t(424),r=t(434),o=t(7),s=t(422),u=t(423),m=(t(58),t(59)),d=t.n(m),b=function(e){return function(a){var t,n=a.id,c=Object(o.a)(a,["id"]),i=Object(u.useThemeConfig)().navbar.hideOnScroll;return n?l.a.createElement(e,c,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(t={},t[d.a.enhancedAnchor]=!i,t)),id:n}),c.children,l.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):l.a.createElement(e,c)}},h=t(60),f=t.n(h),p={code:function(e){var a=e.children;return"string"==typeof a?a.includes("\n")?l.a.createElement(r.a,e):l.a.createElement("code",e):a},a:function(e){return l.a.createElement(i.a,e)},pre:function(e){return l.a.createElement("div",Object(n.a)({className:f.a.mdxCodeBlock},e))},h1:b("h1"),h2:b("h2"),h3:b("h3"),h4:b("h4"),h5:b("h5"),h6:b("h6")};a.a=p},438:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(427);a.default=function(){return c.a.createElement(l.a,{title:"Page Not Found"},c.a.createElement("main",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6 col--offset-3"},c.a.createElement("h1",{className:"hero__title"},"Page Not Found"),c.a.createElement("p",null,"We could not find what you were looking for."),c.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);