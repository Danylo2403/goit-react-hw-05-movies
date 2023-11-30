"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[528],{786:function(n,e,r){r.d(e,{s:function(){return v}});r(791);var t,o,i,a,s,d=r(689),c=r(168),p=r(867),l=r(87),u=p.ZP.div(t||(t=(0,c.Z)(["\n  text-align: center;\n  border: 2px solid #e1e1e1;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s ease-in-out;\n  background-color: #e6dada;\n  &:hover {\n    transform: translateY(-4px);\n    background-color: #ddd6f3;\n  }\n"]))),x=p.ZP.img(o||(o=(0,c.Z)(["\n  width: 100%;\n  height: 320px;\n  object-fit: cover;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n"]))),f=p.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold; \n  padding: 15px;\n  height: 79px;\n  color: #333;\n"]))),h=(0,p.ZP)(l.rU)(a||(a=(0,c.Z)(["\n  height: 100%;\n  color: #333;\n  background-color: #ddd6f3;\n  text-decoration: none;\n  padding: 10px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  &:hover {\n    text-decoration: underline;\n    background-color: #e6dada;\n  }\n"]))),g=r(184),m=function(n){var e=n.id,r=n.title,t=n.poster,o=(0,d.TH)();return(0,g.jsx)(h,{to:"/movies/".concat(e),state:{from:o},children:(0,g.jsxs)(u,{children:[(0,g.jsx)(x,{src:t?"http://image.tmdb.org/t/p/w500/".concat(t):"https://www.kevingage.com/assets/clapboard.png",alt:r}),(0,g.jsx)(f,{children:(0,g.jsx)("p",{children:r})})]})})},b=p.ZP.div(s||(s=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  grid-row-gap: 32px;\n"]))),v=function(n){var e=n.movies;return(0,g.jsx)(b,{children:e.map((function(n){var e=n.id,r=n.title,t=n.poster_path;return(0,g.jsx)(m,{id:e,title:r,poster:t},e)}))})}},528:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,o,i,a,s=r(861),d=r(439),c=r(757),p=r.n(c),l=r(791),u=r(87),x=r(732),f=r(168),h=r(867),g=r(692),m=h.ZP.form(t||(t=(0,f.Z)(["\n  margin: 0 auto 20px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #f5f5f5; \n  border-radius: 10px; \n  overflow: hidden;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); \n"]))),b=h.ZP.input(o||(o=(0,f.Z)(["\n  flex: 1; \n  font: inherit;\n  font-size: 18px; \n  border: none;\n  outline: none;\n  padding: 12px; \n  background-color: transparent;\n  color: #333333; \n  &::placeholder {\n    color: #666666; \n  }\n"]))),v=h.ZP.button(i||(i=(0,f.Z)(["\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.8; \n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  background-color: #4a90e2; \n  border-radius: 0 10px 10px 0; \n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),Z=(0,h.ZP)(g.wnI)(a||(a=(0,f.Z)(["\n  width: 24px;\n  height: 24px; \n  fill: #ffffff; \n"]))),w=r(184),j=function(n){var e=n.query,r=(0,u.lr)(),t=(0,d.Z)(r,2),o=t[0],i=t[1];return(0,w.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.search.value.trim();if(!e)return alert("Enter movie, please");o.set("query",e),i(o)},children:[(0,w.jsx)(v,{type:"submit",children:(0,w.jsx)(Z,{})}),(0,w.jsx)(b,{name:"search",type:"text",autoFocus:!0,placeholder:"Search movies",defaultValue:e})]})},k=r(786),y=r(315),P=function(){var n,e=(0,l.useState)(null),r=(0,d.Z)(e,2),t=r[0],o=r[1],i=(0,l.useState)(!1),a=(0,d.Z)(i,2),c=a[0],f=a[1],h=(0,u.lr)(),g=null!==(n=(0,d.Z)(h,1)[0].get("query"))&&void 0!==n?n:"";return(0,l.useEffect)((function(){var n=function(){var n=(0,s.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.prev=1,n.next=4,(0,x.LI)(g);case 4:e=n.sent,o(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),alert(n.t0.message);case 11:return n.prev=11,f(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();""!==g&&n()}),[g]),(0,w.jsxs)("section",{children:[(0,w.jsx)(j,{query:g}),t&&(0,w.jsx)(k.s,{movies:t}),c&&(0,w.jsx)(y.a,{})]})}}}]);
//# sourceMappingURL=528.37c6545c.chunk.js.map