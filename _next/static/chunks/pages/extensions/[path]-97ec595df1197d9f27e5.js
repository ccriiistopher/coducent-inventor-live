(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[967],{1474:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(3963),s=n(5623),o=n(7449),c=n(7294),i=n(4549),l=n(5873),a=n(7119),u=n(8628),d=n(1627),f=n(8819),p=n(8855),m=n(847),h=n(3061),x=n(444),v=n(4184),j=n.n(v),y=n(5632);var b=n(3493),g=n(8141),Z=n(5016),w=n(2500),N=function(e){(0,Z.Z)(n,e);var t=(0,w.Z)(n);function n(){var e;return(0,b.Z)(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,g.Z)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,r=e.children,s=this.state,o=s.error,i=s.info,l=i&&i.componentStack?i.componentStack:null,a="undefined"===typeof t?(o||"").toString():t,u="undefined"===typeof n?l:n;return o?c.createElement(P,{type:"error",message:a,description:c.createElement("pre",null,u)}):r}}]),n}(c.Component),O=n(6159),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n},k={success:f.Z,info:m.Z,error:h.Z,warning:p.Z},M={success:l.Z,info:u.Z,error:d.Z,warning:a.Z},C=function(e){var t,n=e.description,l=e.prefixCls,a=e.message,u=e.banner,d=e.className,f=void 0===d?"":d,p=e.style,m=e.onMouseEnter,h=e.onMouseLeave,v=e.onClick,b=e.afterClose,g=e.showIcon,Z=e.closable,w=e.closeText,N=e.action,C=E(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),P=c.useState(!1),S=(0,o.Z)(P,2),_=S[0],T=S[1],D=c.useRef(),R=c.useContext(y.E_),I=R.getPrefixCls,L=R.direction,z=I("alert",l),q=function(e){var t;T(!0),null===(t=C.onClose)||void 0===t||t.call(C,e)},A=!!w||Z,G=function(){var e=C.type;return void 0!==e?e:u?"warning":"info"}(),H=!(!u||void 0!==g)||g,U=j()(z,"".concat(z,"-").concat(G),(t={},(0,s.Z)(t,"".concat(z,"-with-description"),!!n),(0,s.Z)(t,"".concat(z,"-no-icon"),!H),(0,s.Z)(t,"".concat(z,"-banner"),!!u),(0,s.Z)(t,"".concat(z,"-rtl"),"rtl"===L),t),f),B=function(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}(C);return c.createElement(x.Z,{visible:!_,motionName:"".concat(z,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:b},(function(e){var t=e.className,o=e.style;return c.createElement("div",(0,r.Z)({ref:D,"data-show":!_,className:j()(U,t),style:(0,r.Z)((0,r.Z)({},p),o),onMouseEnter:m,onMouseLeave:h,onClick:v,role:"alert"},B),H?function(){var e=C.icon,t=(n?M:k)[G]||null;return e?(0,O.wm)(e,c.createElement("span",{className:"".concat(z,"-icon")},e),(function(){return{className:j()("".concat(z,"-icon"),(0,s.Z)({},e.props.className,e.props.className))}})):c.createElement(t,{className:"".concat(z,"-icon")})}():null,c.createElement("div",{className:"".concat(z,"-content")},c.createElement("div",{className:"".concat(z,"-message")},a),c.createElement("div",{className:"".concat(z,"-description")},n)),N?c.createElement("div",{className:"".concat(z,"-action")},N):null,A?c.createElement("button",{type:"button",onClick:q,className:"".concat(z,"-close-icon"),tabIndex:0},w?c.createElement("span",{className:"".concat(z,"-close-text")},w):c.createElement(i.Z,null)):null)}))};C.ErrorBoundary=N;var P=C},6175:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2809),s=n(4026),o=n(5968),c=n(5893);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return(0,c.jsx)(s.Z,{components:{p:function(e){return(0,c.jsx)("p",l(l({},e),{},{className:"w-full"}))},ol:function(e){return(0,c.jsx)("ol",l(l({},e),{},{className:"list-decimal list-outside font-light pl-5"}))},ul:function(e){return(0,c.jsx)("ul",l(l({},e),{},{className:"list-disc list-outside font-light pl-5"}))},h1:function(e){return(0,c.jsx)(o.Z.Title,{level:1,children:e.children})},h2:function(e){return(0,c.jsx)(o.Z.Title,{level:2,children:e.children})},h3:function(e){return(0,c.jsx)(o.Z.Title,{level:3,children:e.children})},h4:function(e){return(0,c.jsx)(o.Z.Title,{level:4,children:e.children})},h5:function(e){return(0,c.jsx)(o.Z.Title,{level:5,children:e.children})},blockquote:function(e){return(0,c.jsx)("blockquote",l(l({},e),{},{className:"border-l-2 border-blue-400 bg-blue-100 p-3"}))},code:function(e){return(0,c.jsx)(o.Z.Paragraph,l(l({code:!0},e),{},{copyable:!0}))},a:function(e){return(0,c.jsx)(o.Z.Link,{copyable:!0,children:e.children})},img:function(e){var t=e.alt,n=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(t),r={style:{}};return n&&(n[3]&&(r.style.width=n[3]),n[4]&&(r.style.height=n[4]),n[6]&&(r.className=n[6])),(0,c.jsx)("img",l(l({},e),r))}},children:e.children})}},1144:function(e,t,n){"use strict";n.d(t,{G:function(){return D}});var r=n(8216),s=n(5997),o=n(4695),c=n(3444),i=n(268),l=n(2953),a=n(7294),u=n(1163),d=n(1664),f=n(9271),p=n(6371),m=n(2762),h=n(1577),x=n(5893);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var s=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,i.Z)(this,n)}}var j=function(e){(0,c.Z)(n,e);var t=v(n);function n(e){var s;return(0,r.Z)(this,n),(s=t.call(this,e)).state={open:!1},s.onResize=s.onResize.bind((0,o.Z)(s)),s.closeMenu=s.closeMenu.bind((0,o.Z)(s)),s.openMenu=s.openMenu.bind((0,o.Z)(s)),s.toggleMenu=s.toggleMenu.bind((0,o.Z)(s)),s.isMenuOpen=s.isMenuOpen.bind((0,o.Z)(s)),s.items=[{label:"Home",icon:f.Z,path:"/"},{label:"Extensions",icon:p.Z,path:"/extensions"}],s}return(0,s.Z)(n,[{key:"openMenu",value:function(){this.setState({open:!0}),document.querySelectorAll("div[data-area]").forEach((function(e){return e.classList.remove("hidden")}))}},{key:"closeMenu",value:function(){this.setState({open:!1}),document.querySelectorAll("div[data-area]").forEach((function(e){return e.classList.add("hidden")}))}},{key:"toggleMenu",value:function(){this.isMenuOpen()?this.closeMenu():this.openMenu()}},{key:"isMenuOpen",value:function(){return this.state.open}},{key:"onResize",value:function(e){this.state.open&&this.closeMenu()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this;return(0,x.jsx)("div",{className:"shadow bg-white sticky top-0 z-30",children:(0,x.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,x.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,x.jsx)("span",{className:"my-auto p-0 m-0 flex-grow text-blue-400 text-lg font-black",children:"TEDUSOFT"}),(0,x.jsx)("div",{className:"md:hidden",children:(0,x.jsx)(h.Z,{onClick:function(){return e.toggleMenu()},className:"p-3",children:(0,x.jsx)(m.Z,{})})})]}),(0,x.jsx)("div",{className:"flex flex-col md:flex-row md:flex-grow gap-4 hidden md:block","data-area":!0,children:(0,x.jsx)("div",{className:this.isMenuOpen()?"flex flex-col divide-y":"flex flex-row divide-x",children:this.items.map((function(t){return(0,x.jsx)(d.default,{href:t.path,passHref:!0,children:(0,x.jsxs)("button",{onMouseUp:function(){return e.toggleMenu()},className:"px-4 py-3 text-left font-semibold ".concat(t.path===e.props.router.pathname||e.props.router.pathname.split("/")[1]===t.path.replace("/","")?"bg-blue-400 text-white":"text-gray-500"),children:[(0,x.jsx)(t.icon,{})," ",t.label]})},t.path)}))})}),(0,x.jsx)("div",{className:"flex flex-col md:flex-row gap-4 hidden md:block","data-area":!0})]})})}}]),n}(a.Component),y=(0,u.withRouter)(j),b=n(2809),g=n(2867),Z=n(5019),w=n(9366),N=n(4302),O=n(9148);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M={labelCol:{span:24},wrapperCol:{span:24}},C={required:"This field is required!",types:{email:"This is not a valid email!"}},P=function(e){return(0,x.jsx)("div",{className:"overflow-hidden",children:(0,x.jsxs)(g.Z,k(k({},M),{},{name:"nest-messages",validateMessages:C,children:[(0,x.jsx)(g.Z.Item,{name:"name",rules:[{required:!0}],children:(0,x.jsx)(Z.Z,{placeholder:"Name",prefix:(0,x.jsx)(w.Z,{})})}),(0,x.jsx)(g.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,x.jsx)(Z.Z,{placeholder:"Email",prefix:(0,x.jsx)(N.Z,{})})}),(0,x.jsx)(g.Z.Item,{name:"message",rules:[{required:!0}],children:(0,x.jsx)(Z.Z.TextArea,{placeholder:"Message"})}),(0,x.jsx)(g.Z.Item,{wrapperCol:k(k({},M.wrapperCol),{},{offset:0}),children:(0,x.jsx)(h.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,x.jsx)(O.Z,{}),children:"Submit"})})]}))})},S=n(5491),_=n(9121),T=function(e){return(0,x.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,x.jsxs)("div",{className:"text-center font-black",children:[(0,x.jsx)(S.Z,{className:"mr-3"}),"CONTACT"]}),(0,x.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,x.jsx)("div",{className:"w-full md:w-1/2",children:(0,x.jsx)(P,{})}),(0,x.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,x.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,x.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,x.jsx)("hr",{}),(0,x.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,x.jsx)(_.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,x.jsx)(_.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,x.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})};function D(e){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(y,{}),(0,x.jsx)("div",{className:"container mx-auto",children:e}),(0,x.jsx)(T,{})]})}},9627:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u}});var r=n(5968),s=n(1474),o=n(1144),c=n(6175),i=n(1664),l=n(5893),a=function(e){var t=e.extension,n=e.platforms;return(0,l.jsxs)("div",{className:"m-3",children:[(0,l.jsx)(r.Z.Title,{level:1,underline:!0,className:"m-0 p-0",children:t.name}),(0,l.jsx)(s.Z,{type:"info",showIcon:!0,message:(0,l.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,l.jsx)("span",{className:"mr-1",children:"It is supported for:"}),n?n.map((function(e){return(0,l.jsx)(i.default,{href:e.url,children:(0,l.jsx)("a",{className:"mx-1",children:e.name})},"p-".concat(e.name))})):t.platforms.join(", ")]})}),(0,l.jsxs)("p",{className:"my-2 font-semibold",children:["Poseted on ",t.date]}),(0,l.jsx)(c.Z,{children:t.description})]})};a.getLayout=o.G;var u=!0;t.default=a},6566:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extensions/[path]",function(){return n(9627)}])}},function(e){e.O(0,[536,26,774,888,179],(function(){return t=6566,e(e.s=t);var t}));var t=e.O();_N_E=t}]);