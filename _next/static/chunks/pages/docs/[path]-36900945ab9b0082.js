(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[422],{20550:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var c=t(85623),r=t(83963),l=t(97345),o=t(67294),i=t(94184),s=t.n(i),a=t(98423),u=t(97937),f=t(59844),p=function(e,n){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&n.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)n.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(t[c[r]]=e[c[r]])}return t},d=function(e){var n,t=e.prefixCls,l=e.className,i=e.checked,a=e.onChange,u=e.onClick,d=p(e,["prefixCls","className","checked","onChange","onClick"]),h=(0,o.useContext(f.E_).getPrefixCls)("tag",t),b=s()(h,(n={},(0,c.Z)(n,"".concat(h,"-checkable"),!0),(0,c.Z)(n,"".concat(h,"-checkable-checked"),i),n),l);return o.createElement("span",(0,r.Z)({},d,{className:b,onClick:function(e){null===a||void 0===a||a(!i),null===u||void 0===u||u(e)}}))},h=t(98787),b=t(97202),m=function(e,n){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&n.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)n.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(t[c[r]]=e[c[r]])}return t},x=new RegExp("^(".concat(h.Y.join("|"),")(-inverse)?$")),j=new RegExp("^(".concat(h.E.join("|"),")$")),v=function(e,n){var t,i=e.prefixCls,p=e.className,d=e.style,h=e.children,v=e.icon,y=e.color,g=e.onClose,Z=e.closeIcon,O=e.closable,k=void 0!==O&&O,N=m(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=o.useContext(f.E_),C=w.getPrefixCls,E=w.direction,P=o.useState(!0),_=(0,l.Z)(P,2),T=_[0],S=_[1];o.useEffect((function(){"visible"in N&&S(N.visible)}),[N.visible]);var I=function(){return!!y&&(x.test(y)||j.test(y))},R=(0,r.Z)({backgroundColor:y&&!I()?y:void 0},d),$=I(),q=C("tag",i),X=s()(q,(t={},(0,c.Z)(t,"".concat(q,"-").concat(y),$),(0,c.Z)(t,"".concat(q,"-has-color"),y&&!$),(0,c.Z)(t,"".concat(q,"-hidden"),!T),(0,c.Z)(t,"".concat(q,"-rtl"),"rtl"===E),t),p),D=function(e){e.stopPropagation(),null===g||void 0===g||g(e),e.defaultPrevented||"visible"in N||S(!1)},F="onClick"in N||h&&"a"===h.type,H=(0,a.Z)(N,["visible"]),L=v||null,Y=L?o.createElement(o.Fragment,null,L,o.createElement("span",null,h)):h,z=o.createElement("span",(0,r.Z)({},H,{ref:n,className:X,style:R}),Y,k?Z?o.createElement("span",{className:"".concat(q,"-close-icon"),onClick:D},Z):o.createElement(u.Z,{className:"".concat(q,"-close-icon"),onClick:D}):null);return F?o.createElement(b.Z,null,z):z},y=o.forwardRef(v);y.displayName="Tag",y.CheckableTag=d;var g=y},56569:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/[path]",function(){return t(88217)}])},23076:function(e,n,t){"use strict";var c=t(85893),r=t(82826),l=t(71577),o=t(58492),i=t(11163),s=t(41664);n.Z=function(e){var n=e.routes,t=(0,i.useRouter)();return(0,c.jsxs)("div",{className:"p-2",children:[(0,c.jsx)(l.Z,{className:"inline-block mr-2",icon:(0,c.jsx)(r.Z,{}),shape:"circle",onClick:function(){return t.back()}}),(0,c.jsx)(o.Z,{className:"inline",separator:">",children:n.map((function(e,n){return e.path?(0,c.jsx)(o.Z.Item,{children:(0,c.jsx)(s.default,{href:e.path,passHref:!0,children:(0,c.jsxs)("a",{children:[e.icon&&(0,c.jsx)(e.icon,{}),(0,c.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(n)):(0,c.jsxs)(o.Z.Item,{children:[e.icon&&(0,c.jsx)(e.icon,{}),(0,c.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(n))}))})]})}},74589:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var c=t(85893),r=t(53856),l=t(74622);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},c=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),c.forEach((function(n){o(e,n,t[n])}))}return e}function s(e){return(0,c.jsx)(r.Z,{components:{p:function(e){return(0,c.jsx)("p",i({},e,{className:"w-full whitespace-pre-wrap"}))},ol:function(e){return(0,c.jsx)("ol",i({},e,{className:"list-decimal list-outside pl-5"}))},ul:function(e){return(0,c.jsx)("ul",i({},e,{className:"list-disc list-outside pl-5"}))},h1:function(e){return(0,c.jsx)(l.Z.Title,{level:1,children:e.children})},h2:function(e){return(0,c.jsx)(l.Z.Title,{level:2,children:e.children})},h3:function(e){return(0,c.jsx)(l.Z.Title,{level:3,children:e.children})},h4:function(e){return(0,c.jsx)(l.Z.Title,{level:4,children:e.children})},h5:function(e){return(0,c.jsx)(l.Z.Title,{level:5,children:e.children})},blockquote:function(e){return(0,c.jsx)("blockquote",i({},e,{className:"border-l-2 border-blue-400 bg-blue-100 px-3 my-1"}))},code:function(e){return(0,c.jsx)(l.Z.Paragraph,i({code:!0},e,{copyable:!0}))},a:function(e){return(0,c.jsx)(l.Z.Link,i({},e,{copyable:!0,children:e.children}))},img:function(e){var n=e.alt,t=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(n),r={style:{}};return t&&(t[3]&&(r.style.width=t[3]),t[4]&&(r.style.height=t[4]),t[6]&&(r.className=t[6])),(0,c.jsx)("img",i({},e,r))}},children:e.children})}}},function(e){e.O(0,[774,662,789,80,856,650,501,217,888,179],(function(){return n=56569,e(e.s=n);var n}));var n=e.O();_N_E=n}]);