(function(t){function e(e){for(var s,a,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={app:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/save-xuanxiu/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"3b9f":function(t){t.exports=JSON.parse('{"chapter1":{"title":"第一章","isActive":true,"pages":{"1":{"html":"2022年2月17日\\n今年是内娱选秀终止的第一个年头，出于缅怀的心情，你打开了你去年zqsg追过的选秀节目开始回忆往昔。","options":{"a":"我是谁？","b":"我在哪？","c":"我要干什么？","d":"开始摆烂"},"answer":{"a":"2","b":"2","c":"2","d":"2"}},"2":{"html":"咱们就是说，编不下去了...","options":{"a":"我是谁？","b":"我在哪？","c":"我要干什么？","d":"开始摆烂"},"answer":{"a":"2","b":"2","c":"2","d":"2"}}}},"chapter2":{"title":"第二章","isActive":false,"pages":{"1":{"html":"2022年2月17日\\n今年是内娱选秀终止的第一个年头，出于缅怀的心情，你打开了你去年zqsg追过的选秀节目开始回忆往昔。","options":{"a":"我是谁？","b":"我在哪？","c":"我要干什么？","d":"开始摆烂"},"answer":{"a":"2","b":"2","c":"3","d":"4"}}}}}')},"4dca":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Quiz",{staticClass:"mb-auto mt-5"}),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"small"},[t._v(" 如有疑问/提议/抓Bug请发送邮件至：mxhcpstories@yahoo.com"),n("br"),t._v(" 欢迎合作，一起开发！"),n("br"),n("a",{staticStyle:{color:"steelblue","text-decoration":"underline"},attrs:{href:"https://github.com/yingH95"}},[t._v(" @github.com/yingH95 ")])])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["pre"===t.quizStatus?n("div",[n("div",{staticClass:"mb-4"},[n("h3",{staticStyle:{color:"darkslategrey"}},[t._v("穿越回2021")]),n("div",{staticClass:"p-2 board"},[n("transition",{attrs:{name:"fade",appear:""}},[n("h1",{staticClass:"font-weight-bold",staticStyle:{color:"white"}},[t._v("拯救选秀")])])],1),n("br"),n("p",[t._v("制作：Alpaca、大喵")])]),n("div",{staticClass:"button6 enabled",on:{click:function(e){return t.selectMode()}}},[t._v("进入游戏")])]):t._e(),"selectMode"===t.quizStatus?n("div",[n("div",[n("transition",{attrs:{name:"fade",appear:""}},[n("h4",{staticClass:"font-italic",staticStyle:{color:"steelblue"}},[t._v("2021年，对于内娱追星人来说是难忘的一年...")])]),n("br"),n("transition",{attrs:{name:"fade",appear:""}},[n("h5",[t._v("如果有一个机会让你回到2021年的初春，你要怎么做才能拯救选秀？")])])],1),t._l(t.chapters,(function(e,s){return n("div",{key:s},[e["isActive"]?n("div",{staticClass:"button6 mt-4 enabled",on:{click:function(e){return t.startQuiz("chapter1")}}},[t._v(" 开启"+t._s(e["title"])+" ")]):t._e(),e["isActive"]?t._e():n("div",{staticClass:"button6 mt-4 disabled"},[t._v(" 开启"+t._s(e["title"])+" ")])])}))],2):t._e(),"during"===t.quizStatus?n("div",{staticClass:"question-text m-2"},[n("transition",{attrs:{name:"fade",appear:""}},[n("p",{staticClass:"m-2",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(this.story)}})]),t._l(t.options,(function(e,s){return n("div",{key:s},[n("div",{staticClass:"button6 options m-1",on:{click:function(e){return t.chooseAns(s)}}},[n("strong",{staticStyle:{color:"darkslategray"}},[t._v(t._s(s)+" "+t._s(e))])])])}))],2):t._e(),"post"===t.quizStatus?n("div",{staticClass:"question-text m-2"},[n("h3",[t._v("恭喜你获得了")]),n("h2",[t._v(t._s(t.score)+"分")]),n("p",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.scoreMsg))]),n("div",{staticClass:"button6 return m-1",on:{click:t.resetPage}},[t._v("再玩一次")])]):t._e()])},o=[],c=n("3b9f"),u={name:"Quiz",data:function(){return{chapters:[],page:null,language:"chinese",timerMode:20,currentChapter:0,currentPage:0,score:0,quizStatus:"pre",countdown:5,countdownInterval:null,loaded:!1,isSelectMode:!1}},mounted:function(){this.resetPage(),this.loaded=!0},computed:{story:function(){return this.page["html"]},options:function(){return this.page["options"]},answer:function(){return this.page["answer"]},scoreMsg:function(){return 100===this.score?"能读到这段话的人就是Insider！":this.score>70?"Insider预备役\n是谁我不说":this.score>40?"啊这...\n要想成为Insider还要更努力！":"这个level不太行\n罚你去listen十遍INTO1首专"}},methods:{selectMode:function(){this.quizStatus="selectMode",this.isSelectMode=!0,this.chapters=c},startQuiz:function(t){this.currentChapter=t,this.currentPage="1",this.page=this.chapters[t]["pages"][this.currentPage],this.quizStatus="during"},nextQuestion:function(t){this.currentPage=this.answer[t],this.page=this.chapters[this.currentChapter]["pages"][this.currentPage]},chooseAns:function(t){this.nextQuestion(t)},resetPage:function(){this.language="chinese",this.timerMode=20,this.page="",this.quizStatus="pre",this.score=0,this.currentPage=0},sendAnalytics:function(){this.$ga.event({eventCategory:"CompleteQuiz",eventAction:"completed "+this.language,eventLabel:this.score})}}},l=u,p=(n("8b9f"),n("2877")),d=Object(p["a"])(l,a,o,!1,null,"278a2b03",null),h=d.exports,f={name:"app",components:{Quiz:h}},v=f,g=(n("034f"),Object(p["a"])(v,i,r,!1,null,null,null)),b=g.exports,m=(n("4989"),n("ab8b"),n("4dca"),n("0284")),_=n.n(m);s["a"].config.productionTip=!1,s["a"].use(_.a,{id:"UA-150354610-3",autoTracking:{screenview:!0},trackEvent:!0}),new s["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){},"8b9f":function(t,e,n){"use strict";n("dc68")},dc68:function(t,e,n){}});
//# sourceMappingURL=app.7a1ef350.js.map