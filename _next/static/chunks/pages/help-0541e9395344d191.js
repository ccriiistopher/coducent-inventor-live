(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{54907:function(e,n,t){"use strict";t.d(n,{Z:function(){return H}});var r=t(83963),a=t(85623),c=t(67294),i=t(4942),l=t(74902),o=t(15671),s=t(43144),d=t(32531),u=t(3289),p=t(71002),f=t(94184),h=t.n(f),v=t(96774),m=t.n(v),x=t(50344),y=t(87462),b=t(93481),Z=t(97685),N=c.forwardRef((function(e,n){var t,r=e.prefixCls,a=e.forceRender,l=e.className,o=e.style,s=e.children,d=e.isActive,u=e.role,p=c.useState(d||a),f=(0,Z.Z)(p,2),v=f[0],m=f[1];return c.useEffect((function(){(a||d)&&m(!0)}),[a,d]),v?c.createElement("div",{ref:n,className:h()("".concat(r,"-content"),(t={},(0,i.Z)(t,"".concat(r,"-content-active"),d),(0,i.Z)(t,"".concat(r,"-content-inactive"),!d),t),l),style:o,role:u},c.createElement("div",{className:"".concat(r,"-content-box")},s)):null}));N.displayName="PanelContent";var C=N,j=function(e){(0,d.Z)(t,e);var n=(0,u.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).handleItemClick=function(){var n=e.props,t=n.onItemClick,r=n.panelKey;"function"===typeof t&&t(r)},e.handleKeyPress=function(n){"Enter"!==n.key&&13!==n.keyCode&&13!==n.which||e.handleItemClick()},e}return(0,s.Z)(t,[{key:"shouldComponentUpdate",value:function(e){return!m()(this.props,e)}},{key:"render",value:function(){var e,n,t=this,r=this.props,a=r.className,l=r.id,o=r.style,s=r.prefixCls,d=r.header,u=r.headerClass,p=r.children,f=r.isActive,v=r.showArrow,m=r.destroyInactivePanel,x=r.accordion,Z=r.forceRender,N=r.openMotion,j=r.expandIcon,g=r.extra,k=r.collapsible,w="disabled"===k,P=h()("".concat(s,"-header"),(e={},(0,i.Z)(e,u,u),(0,i.Z)(e,"".concat(s,"-header-collapsible-only"),"header"===k),e)),I=h()((n={},(0,i.Z)(n,"".concat(s,"-item"),!0),(0,i.Z)(n,"".concat(s,"-item-active"),f),(0,i.Z)(n,"".concat(s,"-item-disabled"),w),n),a),E=c.createElement("i",{className:"arrow"});v&&"function"===typeof j&&(E=j(this.props));var K=null!==g&&void 0!==g&&"boolean"!==typeof g;return c.createElement("div",{className:I,style:o,id:l},c.createElement("div",{className:P,onClick:function(){return"header"!==k&&t.handleItemClick()},role:x?"tab":"button",tabIndex:w?-1:0,"aria-expanded":f,onKeyPress:this.handleKeyPress},v&&E,"header"===k?c.createElement("span",{onClick:this.handleItemClick,className:"".concat(s,"-header-text")},d):d,K&&c.createElement("div",{className:"".concat(s,"-extra")},g)),c.createElement(b.Z,(0,y.Z)({visible:f,leavedClassName:"".concat(s,"-content-hidden")},N,{forceRender:Z,removeOnLeave:m}),(function(e,n){var t=e.className,r=e.style;return c.createElement(C,{ref:n,prefixCls:s,className:t,style:r,isActive:f,forceRender:Z,role:x?"tabpanel":null},p)})))}}]),t}(c.Component);j.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var g=j;function k(e){var n=e;if(!Array.isArray(n)){var t=(0,p.Z)(n);n="number"===t||"string"===t?[n]:[]}return n.map((function(e){return String(e)}))}var w=function(e){(0,d.Z)(t,e);var n=(0,u.Z)(t);function t(e){var r;(0,o.Z)(this,t),(r=n.call(this,e)).onClickItem=function(e){var n=r.state.activeKey;if(r.props.accordion)n=n[0]===e?[]:[e];else{var t=(n=(0,l.Z)(n)).indexOf(e);t>-1?n.splice(t,1):n.push(e)}r.setActiveKey(n)},r.getNewChild=function(e,n){if(!e)return null;var t=r.state.activeKey,a=r.props,i=a.prefixCls,l=a.openMotion,o=a.accordion,s=a.destroyInactivePanel,d=a.expandIcon,u=a.collapsible,p=e.key||String(n),f=e.props,h=f.header,v=f.headerClass,m=f.destroyInactivePanel,x=f.collapsible,y=null!==x&&void 0!==x?x:u,b={key:p,panelKey:p,header:h,headerClass:v,isActive:o?t[0]===p:t.indexOf(p)>-1,prefixCls:i,destroyInactivePanel:null!==m&&void 0!==m?m:s,openMotion:l,accordion:o,children:e.props.children,onItemClick:"disabled"===y?null:r.onClickItem,expandIcon:d,collapsible:y};return"string"===typeof e.type?e:c.cloneElement(e,b)},r.getItems=function(){var e=r.props.children;return(0,x.Z)(e).map(r.getNewChild)},r.setActiveKey=function(e){"activeKey"in r.props||r.setState({activeKey:e}),r.props.onChange(r.props.accordion?e[0]:e)};var a=e.activeKey,i=e.defaultActiveKey;return"activeKey"in e&&(i=a),r.state={activeKey:k(i)},r}return(0,s.Z)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!m()(this.props,e)||!m()(this.state,n)}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,r=n.className,a=n.style,l=n.accordion,o=h()((e={},(0,i.Z)(e,t,!0),(0,i.Z)(e,r,!!r),e));return c.createElement("div",{className:o,style:a,role:l?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var n={};return"activeKey"in e&&(n.activeKey=k(e.activeKey)),n}}]),t}(c.Component);w.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},w.Panel=g;var P=w,I=(w.Panel,t(18073)),E=t(98423),K=t(59844),A=t(21687),_=function(e){(0,A.Z)(!("disabled"in e),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var n=c.useContext(K.E_).getPrefixCls,t=e.prefixCls,i=e.className,l=void 0===i?"":i,o=e.showArrow,s=void 0===o||o,d=n("collapse",t),u=h()((0,a.Z)({},"".concat(d,"-no-arrow"),!s),l);return c.createElement(P.Panel,(0,r.Z)({},e,{prefixCls:d,className:u}))},O=t(33603),S=t(96159),R=function(e){var n,t=c.useContext(K.E_),i=t.getPrefixCls,l=t.direction,o=e.prefixCls,s=e.className,d=void 0===s?"":s,u=e.bordered,p=void 0===u||u,f=e.ghost,v=i("collapse",o),m=function(){var n=e.expandIconPosition;return void 0!==n?n:"rtl"===l?"right":"left"}(),y=h()((n={},(0,a.Z)(n,"".concat(v,"-borderless"),!p),(0,a.Z)(n,"".concat(v,"-icon-position-").concat(m),!0),(0,a.Z)(n,"".concat(v,"-rtl"),"rtl"===l),(0,a.Z)(n,"".concat(v,"-ghost"),!!f),n),d),b=(0,r.Z)((0,r.Z)({},O.Z),{motionAppear:!1,leavedClassName:"".concat(v,"-content-hidden")});return c.createElement(P,(0,r.Z)({openMotion:b},e,{expandIcon:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expandIcon,r=t?t(n):c.createElement(I.Z,{rotate:n.isActive?90:void 0});return(0,S.Tm)(r,(function(){return{className:h()(r.props.className,"".concat(v,"-arrow"))}}))},prefixCls:v,className:y}),function(){var n=e.children;return(0,x.Z)(n).map((function(e,n){var t;if(null===(t=e.props)||void 0===t?void 0:t.disabled){var a=e.key||String(n),c=e.props,i=c.disabled,l=c.collapsible,o=(0,r.Z)((0,r.Z)({},(0,E.Z)(e.props,["disabled"])),{key:a,collapsible:null!==l&&void 0!==l?l:i?"disabled":void 0});return(0,S.Tm)(e,o)}return e}))}())};R.Panel=_;var H=R},44156:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/help",function(){return t(54712)}])},23076:function(e,n,t){"use strict";var r=t(85893),a=t(82826),c=t(71577),i=t(58492),l=t(11163),o=t(41664);n.Z=function(e){var n=e.routes,t=(0,l.useRouter)();return(0,r.jsxs)("div",{className:"p-2",children:[(0,r.jsx)(c.Z,{className:"inline-block mr-2",icon:(0,r.jsx)(a.Z,{}),shape:"circle",onClick:function(){return t.back()}}),(0,r.jsx)(i.Z,{className:"inline",separator:">",children:n.map((function(e,n){return e.path?(0,r.jsx)(i.Z.Item,{children:(0,r.jsx)(o.default,{href:e.path,passHref:!0,children:(0,r.jsxs)("a",{children:[e.icon&&(0,r.jsx)(e.icon,{}),(0,r.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(n)):(0,r.jsxs)(i.Z.Item,{children:[e.icon&&(0,r.jsx)(e.icon,{}),(0,r.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(n))}))})]})}},74589:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(85893),a=t(53856),c=t(74622);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}function o(e){return(0,r.jsx)(a.Z,{components:{p:function(e){return(0,r.jsx)("p",l({},e,{className:"w-full whitespace-pre-wrap"}))},ol:function(e){return(0,r.jsx)("ol",l({},e,{className:"list-decimal list-outside pl-5"}))},ul:function(e){return(0,r.jsx)("ul",l({},e,{className:"list-disc list-outside pl-5"}))},h1:function(e){return(0,r.jsx)("h1",l({className:"text-4xl font-semibold"},e,{children:e.children}))},h2:function(e){return(0,r.jsx)("h2",l({className:"text-3xl font-semibold"},e,{children:e.children}))},h3:function(e){return(0,r.jsx)("h3",l({className:"text-2xl font-semibold"},e,{children:e.children}))},h4:function(e){return(0,r.jsx)("h4",l({className:"text-xl font-bold"},e,{children:e.children}))},h5:function(e){return(0,r.jsx)("h5",l({className:"text-lg font-bold"},e,{children:e.children}))},h6:function(e){return(0,r.jsx)("h6",l({className:"text-lg font-semibold"},e,{children:e.children}))},blockquote:function(e){return(0,r.jsx)("blockquote",l({},e,{className:"border-l-4 rounded border-blue-400 p-4 shadow-lg w-full grid justify-center font-light"}))},code:function(e){return(0,r.jsx)(c.Z.Paragraph,l({code:!0},e))},a:function(e){return(0,r.jsx)(c.Z.Link,l({},e,{copyable:!0,children:e.children}))},img:function(e){var n=e.alt,t=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(n),a={style:{}};return t&&(t[3]&&(a.style.width=t[3]),t[4]&&(a.style.height=t[4]),t[6]&&(a.className=t[6])),(0,r.jsx)("img",l({},e,a))}},children:e.children})}},54712:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return p}});var r=t(85893),a=t(74622),c=t(54907),i=t(49501),l=(t(67294),t(23076)),o=t(73403),s=t(74589),d=t(9008),u=function(e){var n=e.faqs;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.default,{children:(0,r.jsx)("title",{children:"Help"})}),(0,r.jsx)(l.Z,{routes:[{title:"Home",icon:o.Z,path:"/"},{title:"Help"}]}),(0,r.jsxs)("div",{className:"container mx-auto py-3 px-4 md:px-10 lg:px-10",children:[(0,r.jsx)(a.Z.Title,{level:1,underline:!0,children:"Help"}),n&&(0,r.jsx)(c.Z,{defaultActiveKey:n.map((function(e,n){return n})),children:n.map((function(e,n){return(0,r.jsx)(c.Z.Panel,{header:e.title,children:(0,r.jsx)(s.Z,{children:e.body})},n)}))})]})]})};u.getLayout=i.d;var p=!0;n.default=u}},function(e){e.O(0,[774,662,364,80,856,501,888,179],(function(){return n=44156,e(e.s=n);var n}));var n=e.O();_N_E=n}]);