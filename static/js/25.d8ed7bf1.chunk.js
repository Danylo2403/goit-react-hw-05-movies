"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[25],{705:function(n,t,e){e.d(t,{a:function(){return u}});var r=e(643),a=e(184),u=function(){return(0,a.jsx)(r.BR,{fill:"#e15b64",height:"80",width:"80"})}},25:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,u,c=e(861),o=e(439),i=e(757),s=e.n(i),p=e(791),f=e(689),h=e(972),d=e(168),x=e(867),l=x.ZP.li(r||(r=(0,d.Z)(["\n  max-width: 650px;\n  margin-bottom: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  border-radius: 20px; \n  background-color: #283142; \n  box-shadow: 10px 10px 20px #79797985, -10px -10px 20px #79797985; \n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),v=x.ZP.p(a||(a=(0,d.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  color: #c5c5c5de; \n"]))),m=x.ZP.p(u||(u=(0,d.Z)(["\n  font-size: 16px;\n  line-height: 1.6;\n  color: #c1b7b7ed; \n"]))),w=e(184),b=function(n){var t=n.author,e=n.text;return(0,w.jsxs)(l,{children:[(0,w.jsxs)(v,{children:["Author: ",t]}),(0,w.jsx)(m,{children:e})]})},g=e(705);function Z(){var n=(0,p.useState)(!1),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)([]),u=(0,o.Z)(a,2),i=u[0],d=u[1],x=(0,f.UO)().movieId;return(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.prev=1,n.next=4,(0,h.Bt)(x);case 4:t=n.sent,d(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0);case 11:return n.prev=11,r(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[x]),(0,w.jsxs)("ul",{children:[e&&(0,w.jsx)(g.a,{}),i.length>0?i.map((function(n){var t=n.id,e=n.author_details,r=n.content;return(0,w.jsx)(b,{author:e.username,text:r},t)})):(0,w.jsx)("b",{children:"There are no reviews."})]})}},972:function(n,t,e){e.d(t,{Bt:function(){return f},LI:function(){return h},Sg:function(){return s},wL:function(){return p},wr:function(){return i}});var r=e(861),a=e(757),u=e.n(a),c=e(294),o="872f23c49a56ec5128e3a5a14e53af5e";c.Z.defaults.baseURL="https://api.themoviedb.org";var i=function(){var n=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/trending/movie/day?api_key=".concat(o)).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/movie/".concat(t,"?api_key=").concat(o)).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/movie/".concat(t,"/credits?api_key=").concat(o)).then((function(n){return n.data.cast}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/movie/".concat(t,"/reviews?api_key=").concat(o)).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/search/movie?query=".concat(t,"&api_key=").concat(o)).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=25.d8ed7bf1.chunk.js.map