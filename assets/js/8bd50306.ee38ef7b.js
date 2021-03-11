(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{265:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return a})),o.d(e,"metadata",(function(){return r})),o.d(e,"toc",(function(){return l})),o.d(e,"default",(function(){return i}));var s=o(3),n=o(7),c=(o(0),o(423)),u=o(57),a={title:"How-to: GROUP CONCAT"},r={unversionedId:"How-to_GROUP_CONCAT",id:"How-to_GROUP_CONCAT",isDocsHomePage:!1,title:"How-to: GROUP CONCAT",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/docs/How-to_GROUP_CONCAT.md",slug:"/How-to_GROUP_CONCAT",permalink:"/docusaurustestru/docs/How-to_GROUP_CONCAT",editUrl:"https://github.com/danchanka/docusaurustestru/edit/master/docs/How-to_GROUP_CONCAT.md",version:"current",sidebar:"docs",previous:{title:"How-to: GROUP LAST",permalink:"/docusaurustestru/docs/How-to_GROUP_LAST"},next:{title:"How-to: PARTITION",permalink:"/docusaurustestru/docs/How-to_PARTITION"}},l=[],d={toc:l};function i(t){var e=t.components,o=Object(n.a)(t,["components"]);return Object(c.b)("wrapper",Object(s.a)({},d,o,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(c.b)("h6",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(c.b)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0442\u0435\u0433\u0430\u043c \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430\u043c\u0438."),Object(c.b)(u.CodeSample,{url:"https://ru-documentation.lsfusion.org/sample?file=UseCaseConcat&block=sample1",mdxType:"CodeSample"}),Object(c.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u044d\u0433\u043e\u0432 \u043a\u043d\u0438\u0433\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e \u0432 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."),Object(c.b)("h6",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(c.b)(u.CodeSample,{url:"https://ru-documentation.lsfusion.org/sample?file=UseCaseConcat&block=solution1",mdxType:"CodeSample"}),Object(c.b)("p",null,"\u0416\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0442\u0440\u043e\u044f\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",Object(c.b)("strong",{parentName:"p"},"GROUP CONCAT"),', \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430 \u0438\u0445 \u043d\u0430 \u0444\u043e\u0440\u043c\u0443. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u043e "\u043f\u0435\u0441\u0441\u0438\u043c\u0438\u0441\u0442\u0438\u0447\u043d\u043e\u043c\u0443" \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044e \u0438 \u0432\u044b\u0434\u0430\u0435\u0442 \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u0442\u0430\u043a\u0438\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c.'),Object(c.b)("h5",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(c.b)("h6",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(c.b)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c \u0438 \u0430\u0432\u0442\u043e\u0440\u0430\u043c."),Object(c.b)(u.CodeSample,{url:"https://ru-documentation.lsfusion.org/sample?file=UseCaseConcat&block=sample2",mdxType:"CodeSample"}),Object(c.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0435\u0445 \u0430\u0432\u0442\u043e\u0440\u043e\u0432 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043a\u043d\u0438\u0433."),Object(c.b)("h6",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(c.b)(u.CodeSample,{url:"https://ru-documentation.lsfusion.org/sample?file=UseCaseConcat&block=solution2",mdxType:"CodeSample"}))}i.isMDXComponent=!0}}]);