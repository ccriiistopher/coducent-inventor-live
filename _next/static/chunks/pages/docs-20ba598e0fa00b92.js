(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{85060:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(1413),a=n(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"},o=n(42135),i=function(e,t){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};i.displayName="CloudDownloadOutlined";var s=a.forwardRef(i)},81643:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=function(e){return e?"function"===typeof e?e():e:null}},24093:function(e,t,n){"use strict";n.d(t,{C:function(){return S}});var r=n(83963),a=n(85623),c=n(38442),o=n(97345),i=n(67294),s=n(94184),l=n.n(s),u=n(4084),f=n(42550),d=n(59844),p=n(21687),m=n(24308),h=n(25378),v=i.createContext("default"),g=function(e){var t=e.children,n=e.size;return i.createElement(v.Consumer,null,(function(e){return i.createElement(v.Provider,{value:n||e},t)}))},x=v,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},Z=function(e,t){var n,s,v=i.useContext(x),g=i.useState(1),Z=(0,o.Z)(g,2),E=Z[0],j=Z[1],C=i.useState(!1),b=(0,o.Z)(C,2),N=b[0],w=b[1],O=i.useState(!0),S=(0,o.Z)(O,2),P=S[0],_=S[1],z=i.useRef(),k=i.useRef(),D=(0,f.sQ)(t,z),R=i.useContext(d.E_).getPrefixCls,H=function(){if(k.current&&z.current){var t=k.current.offsetWidth,n=z.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&j(n-2*a<t?(n-2*a)/t:1)}}};i.useEffect((function(){w(!0)}),[]),i.useEffect((function(){_(!0),j(1)}),[e.src]),i.useEffect((function(){H()}),[e.gap]);var T=e.prefixCls,B=e.shape,I=e.size,L=e.src,M=e.srcSet,G=e.icon,W=e.className,X=e.alt,A=e.draggable,F=e.children,V=y(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),K="default"===I?v:I,Q=(0,h.Z)(),q=i.useMemo((function(){if("object"!==(0,c.Z)(K))return{};var e=m.c4.find((function(e){return Q[e]})),t=K[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:G?t/2:18}:{}}),[Q,K]);(0,p.Z)(!("string"===typeof G&&G.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(G,"` at https://ant.design/components/icon"));var J,U=R("avatar",T),Y=l()((n={},(0,a.Z)(n,"".concat(U,"-lg"),"large"===K),(0,a.Z)(n,"".concat(U,"-sm"),"small"===K),n)),$=i.isValidElement(L),ee=l()(U,Y,(s={},(0,a.Z)(s,"".concat(U,"-").concat(B),!!B),(0,a.Z)(s,"".concat(U,"-image"),$||L&&P),(0,a.Z)(s,"".concat(U,"-icon"),!!G),s),W),te="number"===typeof K?{width:K,height:K,lineHeight:"".concat(K,"px"),fontSize:G?K/2:18}:{};if("string"===typeof L&&P)J=i.createElement("img",{src:L,draggable:A,srcSet:M,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&_(!1)},alt:X});else if($)J=L;else if(G)J=G;else if(N||1!==E){var ne="scale(".concat(E,") translateX(-50%)"),re={msTransform:ne,WebkitTransform:ne,transform:ne},ae="number"===typeof K?{lineHeight:"".concat(K,"px")}:{};J=i.createElement(u.default,{onResize:H},i.createElement("span",{className:"".concat(U,"-string"),ref:function(e){k.current=e},style:(0,r.Z)((0,r.Z)({},ae),re)},F))}else J=i.createElement("span",{className:"".concat(U,"-string"),style:{opacity:0},ref:function(e){k.current=e}},F);return delete V.onError,delete V.gap,i.createElement("span",(0,r.Z)({},V,{style:(0,r.Z)((0,r.Z)((0,r.Z)({},te),q),V.style),className:ee,ref:D}),J)},E=i.forwardRef(Z);E.displayName="Avatar",E.defaultProps={shape:"circle",size:"default"};var j=E,C=n(50344),b=n(96159),N=n(55241),w=function(e){var t=i.useContext(d.E_),n=t.getPrefixCls,r=t.direction,c=e.prefixCls,o=e.className,s=void 0===o?"":o,u=e.maxCount,f=e.maxStyle,p=e.size,m=n("avatar-group",c),h=l()(m,(0,a.Z)({},"".concat(m,"-rtl"),"rtl"===r),s),v=e.children,x=e.maxPopoverPlacement,y=void 0===x?"top":x,Z=(0,C.Z)(v).map((function(e,t){return(0,b.Tm)(e,{key:"avatar-key-".concat(t)})})),E=Z.length;if(u&&u<E){var w=Z.slice(0,u),O=Z.slice(u,E);return w.push(i.createElement(N.Z,{key:"avatar-popover-key",content:O,trigger:"hover",placement:y,overlayClassName:"".concat(m,"-popover")},i.createElement(j,{style:f},"+".concat(E-u)))),i.createElement(g,{size:p},i.createElement("div",{className:h,style:e.style},w))}return i.createElement(g,{size:p},i.createElement("div",{className:h,style:e.style},Z))},O=j;O.Group=w;var S=O},55241:function(e,t,n){"use strict";var r=n(83963),a=n(67294),c=n(56266),o=n(59844),i=n(81643),s=n(33603),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},u=a.forwardRef((function(e,t){var n=e.prefixCls,u=e.title,f=e.content,d=l(e,["prefixCls","title","content"]),p=a.useContext(o.E_).getPrefixCls,m=p("popover",n),h=p();return a.createElement(c.Z,(0,r.Z)({},d,{prefixCls:m,ref:t,overlay:function(e){return a.createElement(a.Fragment,null,u&&a.createElement("div",{className:"".concat(e,"-title")},(0,i.Z)(u)),a.createElement("div",{className:"".concat(e,"-inner-content")},(0,i.Z)(f)))}(m),transitionName:(0,s.m)(h,"zoom-big",d.transitionName)}))}));u.displayName="Popover",u.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}},t.Z=u},28147:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return n(49378)}])},56026:function(e,t,n){"use strict";var r=n(85893),a=n(95507),c=n(71577),o=n(24093),i=n(20550),s=n(41664),l=n(85060);t.Z=function(e){var t=e.data,n=e.pagination,u=void 0!==n&&n,f=e.group,d=e.groups;return(0,r.jsx)(a.ZP,{itemLayout:"horizontal",size:"small",pagination:u&&{onChange:function(e){},pageSize:10},dataSource:t,header:(0,r.jsxs)("div",{children:["Total: ",t.length," extension(s)"]}),bordered:!0,renderItem:function(e){var t=f||(e.group&&d[e.group]?d[e.group][0]:null);return(0,r.jsx)(a.ZP.Item,{className:"rounded bg-white relative",actions:[!f&&(0,r.jsx)(s.default,{href:"/extensions/".concat(e.group),children:(0,r.jsx)(c.Z,{icon:(0,r.jsx)(l.Z,{})})})],children:(0,r.jsx)(a.ZP.Item.Meta,{avatar:t?t.icon?(0,r.jsx)(o.C,{src:t.icon}):(0,r.jsx)(o.C,{style:{backgroundColor:t.tagColor},children:t.title[0]}):(0,r.jsx)(o.C,{children:e.name[0]}),title:(0,r.jsx)(s.default,{href:"/docs/".concat(e.path),children:(0,r.jsx)("a",{children:e.name})}),description:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:e.date}),!f&&t&&(0,r.jsxs)("p",{children:["From group:"," ",(0,r.jsx)(i.Z,{color:"blue",children:(0,r.jsx)(s.default,{href:"/extensions/".concat(t.path),children:(0,r.jsx)("a",{children:t.title})})})]})]})})},e.name)}})}},49378:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m}});var r=n(85893),a=n(74622),c=n(49501),o=n(67294),i=n(56026),s=n(9008),l=n(23076),u=n(73403),f=n(69015),d=n(92764),p=function(e){var t=e.extensions,n=e.groups;return(0,(0,o.useContext)(d.O).setSearchBar)({showSearchBar:!0,searchBarData:t,searchBarResult:function(e){return(0,r.jsx)(i.Z,{data:e,pagination:!0,groups:n})},searchKeys:["name"],placeholder:"Search Documentation"}),(0,r.jsxs)("div",{className:"container mx-auto md:pl-0 pb-4",children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Extensions Documentation"}),(0,r.jsx)("meta",{name:"description",content:"Extension List from tedusoft"})]}),(0,r.jsx)(l.Z,{routes:[{title:"Home",icon:u.Z,path:"/"},{title:"Docs",icon:f.Z}]}),(0,r.jsx)(a.Z.Title,{level:1,underline:!0,className:"mx-3",children:"Extensions Documentation"}),(0,r.jsx)("div",{className:"px-4",children:(0,r.jsx)(i.Z,{data:t,pagination:!0,groups:n})})]})};p.getLayout=c.G;var m=!0;t.default=p}},function(e){e.O(0,[774,662,789,80,334,157,888,179],(function(){return t=28147,e(e.s=t);var t}));var t=e.O();_N_E=t}]);