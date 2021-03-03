(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{355:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(421)),c=n(56),i={title:"How-to: INTERNAL"},s={unversionedId:"How-to_INTERNAL",id:"How-to_INTERNAL",isDocsHomePage:!1,title:"How-to: INTERNAL",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/docs\\How-to_INTERNAL.md",slug:"/How-to_INTERNAL",permalink:"/docusaurustestru/docs/How-to_INTERNAL",editUrl:"https://github.com/danchanka/docusaurustestru/edit/master/docs/How-to_INTERNAL.md",version:"current",sidebar:"docs",previous:{title:"How-to: FORMULA",permalink:"/docusaurustestru/docs/How-to_FORMULA"},next:{title:"How-to: Use Cases",permalink:"/docusaurustestru/docs/How-to_Use_Cases"}},l=[{value:"GetIP.java",id:"getipjava",children:[]},{value:"CalculateGCD.java",id:"calculategcdjava",children:[]},{value:"CalculateGCDObject.java",id:"calculategcdobjectjava",children:[]},{value:"Beep.java",id:"beepjava",children:[]},{value:"ClientBeep.java",id:"clientbeepjava",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(a.b)("h6",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b\u0434\u0430\u0441\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u0438 IP-\u0430\u0434\u0440\u0435\u0441\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),Object(a.b)("h6",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInternal&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"\u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",Object(a.b)("a",{parentName:"p",href:"/docusaurustestru/docs/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80_INTERNAL"},"INTERNAL"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u043b\u0430\u0441\u0441\u0430\xa0",Object(a.b)("strong",{parentName:"p"},"GetIP")," (\u0435\u0441\u043b\u0438 \u0443 \u043a\u043b\u0430\u0441\u0441\u0430 \u0435\u0441\u0442\u044c package, \u0442\u043e \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0441\u0430 \u043d\u0443\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c package) \u0438 \u0432\u044b\u0437\u043e\u0432\u0435\u0442 \u0443 \u043d\u0435\u0433\u043e \u043c\u0435\u0442\u043e\u0434 ",Object(a.b)("strong",{parentName:"p"},"executeInternal"),". \u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u044d\u0442\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 :"),Object(a.b)("h3",{id:"getipjava"},"GetIP.java"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.net.InetAddress;\nimport java.net.UnknownHostException;\nimport java.sql.SQLException;\n\npublic class GetIP extends InternalAction {\n\n    public GetIP(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        try {\n            findProperty("ip").change(InetAddress.getLocalHost().toString(), context);\n        } catch (UnknownHostException | ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),Object(a.b)("p",null,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(a.b)("strong",{parentName:"p"},"InetAddress")," \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(a.b)("strong",{parentName:"p"},"ip"),", \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u0432 \u0442\u043e\u043c \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u0435, \u0447\u0442\u043e \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432 \u043d\u0435\u0433\u043e \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043c\u0435\u0442\u043e\u0434\u0430 ",Object(a.b)("strong",{parentName:"p"},"change")," \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."),Object(a.b)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043a\u0436\u0435 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 :"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInternal&block=solution1fusion",mdxType:"CodeSample"}),Object(a.b)("p",null,"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0441\u0430\u043c\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043d\u0443\u0436\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044f \u0442\u0443\u0434\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u0434, \u0430 \u0437\u0430\u0442\u0435\u043c \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442 \u0435\u0433\u043e \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430 ",Object(a.b)("a",{parentName:"p",href:"https://janino-compiler.github.io/janino/"},"Janino"),". \u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0430 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u0431\u043e\u0440\u043a\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0448\u0430\u0433 \u0441 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0435\u0439 Java \u043a\u043e\u0434\u0430. \u041e\u0434\u043d\u0430\u043a\u043e, \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0438\u043c\u0435\u0435\u0442 \u0440\u044f\u0434 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0441\u0430\u043c\u044b\u0445 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445."),Object(a.b)("h5",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h6",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0438\u0439 \u043e\u0431\u0449\u0438\u0439 \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0434\u0432\u0443\u0445 \u0446\u0435\u043b\u044b\u0445 \u0447\u0438\u0441\u0435\u043b."),Object(a.b)("h6",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInternal&block=solution2",mdxType:"CodeSample"}),Object(a.b)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0430 \u0432\u0445\u043e\u0434 2 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0442\u0438\u043f\u0430 ",Object(a.b)("strong",{parentName:"p"},"INTEGER"),". \u042d\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(a.b)("strong",{parentName:"p"},"CalculateGCD"),". \u0412\u043e\u0442 \u0435\u0433\u043e \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 :"),Object(a.b)("h3",{id:"calculategcdjava"},"CalculateGCD.java"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.classes.ValueClass;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.math.BigInteger;\nimport java.sql.SQLException;\n\npublic class CalculateGCD extends InternalAction {\n\n    public CalculateGCD(ScriptingLogicsModule LM, ValueClass... classes) {\n        super(LM, classes);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        BigInteger b1 = BigInteger.valueOf((Integer)getParam(0, context));\n        BigInteger b2 = BigInteger.valueOf((Integer)getParam(1, context));\n        BigInteger gcd = b1.gcd(b2);\n        try {\n            findProperty("gcd[]").change(gcd.intValue(), context);\n        } catch (ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),Object(a.b)("p",null,"\u0427\u0442\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043c\u0435\u0442\u043e\u0434 ",Object(a.b)("strong",{parentName:"p"},"getParam"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u0435\u0440\u0432\u044b\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f 0-based \u0438\u043d\u0434\u0435\u043a\u0441 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. \u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(a.b)("strong",{parentName:"p"},"Object"),", \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u044f\u0432\u043d\u043e\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043a \u0442\u0438\u043f\u0443."),Object(a.b)("h5",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h6",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0438\u0439 \u043e\u0431\u0449\u0438\u0439 \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0434\u0432\u0443\u0445 \u0446\u0435\u043b\u044b\u0445 \u0447\u0438\u0441\u0435\u043b, \u043d\u043e \u043e\u043d\u0438 \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430."),Object(a.b)("h6",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInternal&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u0430 \u0437\u0430\u0442\u0435\u043c \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441 \u043e\u0434\u043d\u0438\u043c \u0432\u0445\u043e\u0434\u043e\u043c. \u0414\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u044d\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c :"),Object(a.b)("h3",{id:"calculategcdobjectjava"},"CalculateGCDObject.java"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.data.value.DataObject;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.classes.ValueClass;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.math.BigInteger;\nimport java.sql.SQLException;\n\npublic class CalculateGCDObject extends InternalAction {\n\n    public CalculateGCDObject(ScriptingLogicsModule LM, ValueClass... classes) {\n        super(LM, classes);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        try {\n            DataObject calculation = (DataObject)getParamValue(0, context);\n            BigInteger a = BigInteger.valueOf((Integer)findProperty("a").read(context, calculation));\n            BigInteger b = BigInteger.valueOf((Integer)findProperty("b").read(context, calculation));\n            BigInteger gcd = a.gcd(b);\n            findProperty("gcd[Calculation]").change(gcd.intValue(), context, calculation);\n        } catch (ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),Object(a.b)("p",null,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",Object(a.b)("strong",{parentName:"p"},"calculation")," \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 ",Object(a.b)("strong",{parentName:"p"},"getParamValue"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(a.b)("strong",{parentName:"p"},"DataObject"),". \u0412 \u043d\u0435\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0438 \u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0441. \u0418\u043c\u0435\u043d\u043d\u043e \u043e\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043f\u0443\u0442\u0435\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0435\u0433\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c \u0432 \u043c\u0435\u0442\u043e\u0434\u044b ",Object(a.b)("strong",{parentName:"p"},"read")," \u0438 ",Object(a.b)("strong",{parentName:"p"},"change"),". \u0415\u0441\u043b\u0438 \u0431\u044b \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u043b\u043e \u043d\u0430 \u0432\u0445\u043e\u0434 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0442\u043e \u0438\u0445 \u0432\u0441\u0435\u0445 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0431\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438."),Object(a.b)("p",null,"\u0412 \u043c\u0435\u0442\u043e\u0434\u0435 ",Object(a.b)("strong",{parentName:"p"},"findProperty")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u043d\u043e\u0435 \u043a\u0430\u043d\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u043c\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 ",Object(a.b)("strong",{parentName:"p"},"gcd")," \u0432 \u043c\u043e\u0434\u0443\u043b\u0435. \u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u043c\u044f, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0434\u0430\u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043e \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430."),Object(a.b)("h5",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-4"},"\u041f\u0440\u0438\u043c\u0435\u0440 4"),Object(a.b)("h6",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u0435 \u0431\u0443\u0434\u0435\u0442 5 \u0440\u0430\u0437 \u0432\u044b\u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0437\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u0441\u0438\u0433\u043d\u0430\u043b."),Object(a.b)("h6",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInternal&block=solution4",mdxType:"CodeSample"}),Object(a.b)("p",null,"Java \u043a\u043e\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",Object(a.b)("strong",{parentName:"p"},"INTERNAL"),", \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0441\u0438\u0433\u043d\u0430\u043b \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432 \u043a\u043e\u0434\u0435 \u043a\u043b\u0430\u0441\u0441\u0430, \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u043c\u043e\u0433\u043e \u043e\u0442 ",Object(a.b)("strong",{parentName:"p"},"InternalAction"),". \u0414\u043b\u044f \u044d\u0442\u043e\u0439 \u0446\u0435\u043b\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u0435\u0442\u043e\u0434 ",Object(a.b)("strong",{parentName:"p"},"requestUserInteraction"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441, \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u043c\u044b\u0439 \u043e\u0442 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(a.b)("strong",{parentName:"p"},"ClientAction"),"."),Object(a.b)("h3",{id:"beepjava"},"Beep.java"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.sql.SQLException;\n\npublic class Beep extends InternalAction {\n\n    public Beep(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        String result = (String) context.requestUserInteraction(new ClientBeep(5));\n        System.out.println(result);\n    }\n}\n")),Object(a.b)("p",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 \u043d\u0430 \u0432\u044b\u0437\u043e\u0432\u0435 \u044d\u0442\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430, \u0437\u0430\u0442\u0435\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0441\u0442 ",Object(a.b)("strong",{parentName:"p"},"ClientBeep")," (\u0438 \u0432\u0441\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0438\u043c \u043a\u043b\u0430\u0441\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0435\u0442\u0443 \u0432 JRE) \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0441\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u0438\u0440\u0443\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 (\u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043e\u0434\u043d\u0438\u043c \u0447\u0438\u0441\u043b\u043e\u043c 5) \u0438 \u0432\u044b\u0437\u043e\u0432\u0435\u0442 \u0443 \u043d\u0435\u0433\u043e \u043c\u0435\u0442\u043e\u0434 ",Object(a.b)("strong",{parentName:"p"},"dispatch"),". \u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(a.b)("strong",{parentName:"p"},"ClientBeep")," :"),Object(a.b)("h3",{id:"clientbeepjava"},"ClientBeep.java"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'import lsfusion.interop.action.ClientAction;\nimport lsfusion.interop.action.ClientActionDispatcher;\n\nimport java.awt.*;\nimport java.io.IOException;\n\npublic class ClientBeep implements ClientAction {\n    \n    int times;\n\n    public ClientBeep(int times) {\n        this.times = times;\n    }\n\n    @Override\n    public Object dispatch(ClientActionDispatcher dispatcher) throws IOException {\n        for (int i = 0; i < times; i++) {\n            try {\n                Thread.sleep(1000);\n                Toolkit.getDefaultToolkit().beep();\n            } catch (InterruptedException ignored) {\n            }\n        }\n        return "succeed";\n    }\n}\n')),Object(a.b)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0435\u0440\u043d\u0435\u0442 \u043c\u0435\u0442\u043e\u0434 ",Object(a.b)("strong",{parentName:"p"},"dispatch"),", \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432 \u0432\u0438\u0434\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u0430\xa0",Object(a.b)("strong",{parentName:"p"},"requestUserInteraction"),". \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0443\u044e \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 ",Object(a.b)("em",{parentName:"p"},"succeed"),". \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435."),Object(a.b)("p",null,"\u0422\u0430\u043a \u043a\u0430\u043a java \u043a\u043e\u0434 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u0442\u043e \u044d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0434\u0435\u0441\u043a\u0442\u043e\u043f-\u043a\u043b\u0438\u0435\u043d\u0442\u0435."))}b.isMDXComponent=!0}}]);