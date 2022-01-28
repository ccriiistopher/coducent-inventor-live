(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[422],{56569:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/[path]",function(){return t(88217)}])},23076:function(e,n,t){"use strict";var r=t(85893),s=t(82826),c=t(71577),a=t(58492),i=t(11163),l=t(41664);n.Z=function(e){var n=e.routes,t=(0,i.useRouter)();return(0,r.jsxs)("div",{className:"p-2",children:[(0,r.jsx)(c.Z,{className:"inline-block mr-2",icon:(0,r.jsx)(s.Z,{}),shape:"circle",onClick:function(){return t.back()}}),(0,r.jsx)(a.Z,{className:"inline",separator:">",children:n.map((function(e,n){return e.path?(0,r.jsx)(a.Z.Item,{children:(0,r.jsx)(l.default,{href:e.path,passHref:!0,children:(0,r.jsxs)("a",{children:[e.icon&&(0,r.jsx)(e.icon,{}),(0,r.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(n)):(0,r.jsxs)(a.Z.Item,{children:[e.icon&&(0,r.jsx)(e.icon,{}),(0,r.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(n))}))})]})}},74589:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(85893),s=t(53856),c=t(74622);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function l(e){return(0,r.jsx)(s.Z,{components:{p:function(e){return(0,r.jsx)("p",i({},e,{className:"w-full whitespace-pre-wrap"}))},ol:function(e){return(0,r.jsx)("ol",i({},e,{className:"list-decimal list-outside pl-5"}))},ul:function(e){return(0,r.jsx)("ul",i({},e,{className:"list-disc list-outside pl-5"}))},h1:function(e){return(0,r.jsx)("h1",i({},e,{children:e.children}))},h2:function(e){return(0,r.jsx)("h2",i({},e,{children:e.children}))},h3:function(e){return(0,r.jsx)("h3",i({},e,{children:e.children}))},h4:function(e){return(0,r.jsx)("h4",i({},e,{children:e.children}))},h5:function(e){return(0,r.jsx)("h5",i({},e,{children:e.children}))},blockquote:function(e){return(0,r.jsx)("blockquote",i({},e,{className:"border-l-2 border-blue-400 bg-blue-100 px-3 my-1"}))},code:function(e){return(0,r.jsx)(c.Z.Paragraph,i({code:!0},e,{copyable:!0}))},a:function(e){return(0,r.jsx)(c.Z.Link,i({},e,{copyable:!0,children:e.children}))},img:function(e){var n=e.alt,t=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(n),s={style:{}};return t&&(t[3]&&(s.style.width=t[3]),t[4]&&(s.style.height=t[4]),t[6]&&(s.className=t[6])),(0,r.jsx)("img",i({},e,s))}},children:e.children})}},88217:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return w}});var r=t(85893),s=t(95507),c=t(37802),a=t(74622),i=t(14670),l=t(54907),o=t(20550),d=t(49501),h=t(74589),u=t(41664),m=t(23076),x=t(9008),p=t(73403),f=t(69015),j=t(67294),v=t(92764);function b(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(e){var n=e.extension,t=e.platforms,o=e.group,d=e.showSideNavigation,g=void 0===d||d;return(0,(0,j.useContext)(v.O).setSearchBar)({showSearchBar:!0,searchBarData:b(n.properties).concat(b(n.events),b(n.methods)),searchBarResult:function(e){return(0,r.jsx)(s.ZP,{pagination:{pageSize:10},dataSource:e,renderItem:function(e,n){return(0,r.jsx)(N,{block:e},"b-r-".concat(n))}})},searchKeys:["name"],placeholder:"Search Block"}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x.default,{children:[(0,r.jsx)("title",{children:"".concat(n.name," - Documentation")}),(0,r.jsx)("meta",{name:"description",content:n.description})]}),(0,r.jsx)("div",{className:"md:fixed md:bg-gray-50 md:w-full lg:w-auto z-50",children:(0,r.jsx)(m.Z,{routes:[{title:"Home",icon:p.Z,path:"/"},{title:"Docs",path:"/docs",icon:f.Z},{title:"..."}]})}),(0,r.jsxs)("div",{className:"container mx-auto py-3 px-4 md:px-10 lg:px-10 ".concat(g?"md:grid md:grid-cols-7 lg:grid lg:grid-cols-5":void 0),children:[g&&(0,r.jsx)("div",{className:"hidden md:block md:col-start-1 md:col-span-2 lg:col-start-1 lg:col-span-1 md:fixed md:top-32 z-0",children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(c.Z.Link,{href:"#overview",title:"Overview"}),n.events.length>0&&(0,r.jsx)(c.Z.Link,{href:"#events",title:"Events"}),n.methods.length>0&&(0,r.jsx)(c.Z.Link,{href:"#methods",title:"Methods"}),n.properties.length>0&&(0,r.jsx)(c.Z.Link,{href:"#properties",title:"Properties"})]})}),(0,r.jsxs)("div",{className:g?"md:col-start-3 md:col-span-5 lg:col-start-2 lg:col-span-4 md:pt-10":void 0,children:[(0,r.jsxs)("div",{id:"overview",children:[(0,r.jsx)(a.Z.Title,{level:1,underline:!0,className:"m-0 p-0",children:n.name}),(0,r.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,r.jsx)(i.Z,{type:"info",className:"my-1",showIcon:!0,message:(0,r.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,r.jsx)("span",{className:"mr-1",children:"It is supported for:"}),t?t.map((function(e){return(0,r.jsx)(u.default,{href:e.url,children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"mx-1",children:e.name})},"p-".concat(e.name))})):"Selected platforms"]})}),o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{type:"info",showIcon:!0,message:(0,r.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,r.jsx)("span",{className:"mr-1",children:"It is part of "}),(0,r.jsx)(u.default,{href:"/extensions/".concat(n.group),children:(0,r.jsx)("a",{className:"mx-1",children:o.title})})]})}),(0,r.jsx)(i.Z,{type:"info",showIcon:!0,message:(0,r.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,r.jsxs)("span",{className:"mr-1",children:["To get this extension, please go to:"," "]}),(0,r.jsx)(u.default,{href:"/extensions/".concat(n.group),children:(0,r.jsx)("a",{className:"mx-1",children:o.title})})]})})]})]}),(0,r.jsxs)("p",{className:"my-2 font-semibold",children:["Posted on ",n.date]}),(0,r.jsx)(h.Z,{children:n.description})]}),(0,r.jsxs)(l.Z,{defaultActiveKey:["Events","Methods","Properties"],children:[n.events.length>0&&(0,r.jsx)(l.Z.Panel,{header:(0,r.jsx)("h2",{className:"inline",children:"Events"}),id:"events",children:n.events.map((function(e,n){return(0,r.jsx)(N,{block:e},"b-e-".concat(e.name,"-").concat(n))}))},"Events"),n.methods.length>0&&(0,r.jsx)(l.Z.Panel,{header:(0,r.jsx)("h2",{className:"inline",children:"Methods"}),id:"methods",children:n.methods.map((function(e,n){return(0,r.jsx)(N,{block:e},"b-m-".concat(e.name,"-").concat(n))}))},"Methods"),n.properties.length>0&&(0,r.jsx)(l.Z.Panel,{header:(0,r.jsx)("h2",{className:"inline",children:"Properties"}),id:"properties",children:n.properties.map((function(e,n){return(0,r.jsx)(N,{block:e},"b-p-".concat(e.name,"-").concat(n))}))},"Properties")]})]})]})]})},N=function(e){var n=e.block;return(0,r.jsxs)("div",{className:"mb-10",children:[(0,r.jsx)(a.Z.Title,{level:3,className:"border-b-2 border-gray-200",children:n.name}),(0,r.jsx)(h.Z,{children:n.description}),n.defValue&&(0,r.jsxs)("p",{className:"font-semibold",children:["Default value: ",n.defValue]}),n.params&&(0,r.jsx)(y,{block:n})]})},y=function(e){var n=e.block;return(0,r.jsx)("div",{className:"rounded shadow overflow-hidden inline-block",children:(0,r.jsxs)("table",{className:"table-auto",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"text-white bg-blue-600 divide-x-2 divide-white divide-opacity-30",children:[(0,r.jsx)("th",{className:"p-2",children:"Name"}),(0,r.jsx)("th",{className:"p-2",children:"Type(s)"}),(0,r.jsx)("th",{className:"p-2",children:"Def. value"})]})}),(0,r.jsx)("tbody",{children:n.params.map((function(e,t){return(0,r.jsxs)("tr",{className:"divide-x-2 divide-black divide-opacity-10",children:[(0,r.jsx)("td",{className:"p-2 text-center",children:e.name}),(0,r.jsx)("td",{className:"p-2 text-center",children:e.type.split(",").map((function(t,s){return(0,r.jsx)(o.Z,{children:t},"tag-".concat(n.name,"-").concat(e.name,"-").concat(s))}))}),(0,r.jsx)("td",{className:"p-2 text-center",children:e.default?e.default:"-"})]},"p-".concat(n.name,"-").concat(t))}))})]})})};g.getLayout=d.d;var w=!0;n.default=g}},function(e){e.O(0,[774,662,789,80,334,856,650,501,888,179],(function(){return n=56569,e(e.s=n);var n}));var n=e.O();_N_E=n}]);