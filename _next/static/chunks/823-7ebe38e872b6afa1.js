"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{49646:function(e,s,n){var t=n(85893),r=n(82826),l=n(71577),a=n(58492),i=n(11163),c=n(41664);s.Z=function(e){var s=e.routes,n=(0,i.useRouter)();return(0,t.jsxs)("div",{className:"p-2",children:[(0,t.jsx)(l.Z,{className:"inline-block mr-2",icon:(0,t.jsx)(r.Z,{}),shape:"circle",onClick:function(){return n.back()}}),(0,t.jsx)(a.Z,{className:"inline-block",separator:">",children:s.map((function(e,s){return e.path?(0,t.jsx)(a.Z.Item,{children:(0,t.jsx)(c.default,{href:e.path,passHref:!0,children:(0,t.jsxs)("a",{children:[e.icon&&(0,t.jsx)(e.icon,{}),(0,t.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(s)):(0,t.jsxs)(a.Z.Item,{children:[e.icon&&(0,t.jsx)(e.icon,{}),(0,t.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(s))}))})]})}},29399:function(e,s,n){n.d(s,{Z:function(){return c}});var t=n(85893),r=n(53856),l=n(74622);function a(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function i(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(s){a(e,s,n[s])}))}return e}function c(e){return(0,t.jsx)(r.Z,{components:{p:function(e){return(0,t.jsx)("p",i({},e,{className:"w-full whitespace-pre-wrap"}))},ol:function(e){return(0,t.jsx)("ol",i({},e,{className:"list-decimal list-outside font-light pl-5"}))},ul:function(e){return(0,t.jsx)("ul",i({},e,{className:"list-disc list-outside font-light pl-5"}))},h1:function(e){return(0,t.jsx)(l.Z.Title,{level:1,children:e.children})},h2:function(e){return(0,t.jsx)(l.Z.Title,{level:2,children:e.children})},h3:function(e){return(0,t.jsx)(l.Z.Title,{level:3,children:e.children})},h4:function(e){return(0,t.jsx)(l.Z.Title,{level:4,children:e.children})},h5:function(e){return(0,t.jsx)(l.Z.Title,{level:5,children:e.children})},blockquote:function(e){return(0,t.jsx)("blockquote",i({},e,{className:"border-l-2 border-blue-400 bg-blue-100 px-3 my-1"}))},code:function(e){return(0,t.jsx)(l.Z.Paragraph,i({code:!0},e,{copyable:!0}))},a:function(e){return(0,t.jsx)(l.Z.Link,{copyable:!0,children:e.children})},img:function(e){var s=e.alt,n=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(s),r={style:{}};return n&&(n[3]&&(r.style.width=n[3]),n[4]&&(r.style.height=n[4]),n[6]&&(r.className=n[6])),(0,t.jsx)("img",i({},e,r))}},children:e.children})}},44937:function(e,s,n){n.d(s,{G:function(){return V}});var t=n(85893),r=n(67294),l=n(11163),a=n(73403),i=n(87057),c=n(16664),o=n(78860),d=n(60532),m=n(71577),u=n(38792),h=n(86926),x=n.n(h),p=n(41125),f=n.n(p),j=x()(f()),v=n(41664),b=n(5152),g=n(96486),N=(0,b.default)((function(){return Promise.all([n.e(885),n.e(80),n.e(915),n.e(507),n.e(802),n.e(174),n.e(255),n.e(66)]).then(n.bind(n,52255)).then((function(e){return e.Menu}))}),{loadableGenerated:{webpack:function(){return[52255]},modules:["../components/NavBar.tsx -> antd"]},ssr:!1}),Z=function(e){var s=(0,l.useRouter)(),n=function(e){var s=j.theme.screens[e],n=(0,r.useState)(!1),t=n[0],l=n[1],a=(0,r.useCallback)((function(e){e.matches?l(!0):l(!1)}),[]);return(0,r.useEffect)((function(){var e=window.matchMedia("(min-width: ".concat(s,")"));return e.addEventListener("change",a),e.matches&&l(!0),function(){return e.removeEventListener("change",a)}}),[]),t}("md"),h=(0,r.useState)(!1),x=h[0],p=h[1],f=(0,r.useState)(s.pathname),b=f[0],Z=f[1];(0,r.useEffect)((function(){var e=s.pathname,n=(0,g.compact)(e.split("/"));if(n.length>=2){var t=1==(n=(0,g.filter)(n,(function(e){return!e.includes("[")}))).length?"/"+n[0]:"/"+n[0]+"/"+n[1];Z(t)}else Z(e)}),[s.pathname]);var w=[{label:"Home",icon:a.Z,path:"/"},{label:"Extensions",icon:i.Z,children:[{label:"Groups",path:"/extensions/groups",icon:i.Z},{label:"All",path:"/extensions",icon:c.Z},{label:"Help",path:"/extensions/help",icon:o.Z}]}];return(0,t.jsx)("div",{className:"shadow bg-white sticky top-0 z-30",children:(0,t.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,t.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,t.jsx)(v.default,{href:"/",passHref:!0,children:(0,t.jsx)("span",{className:"my-auto p-0 m-0 text-blue-400 text-lg font-black cursor-pointer",children:"TEDUSOFT"})}),(0,t.jsx)("div",{className:"md:hidden ml-auto",children:(0,t.jsx)(m.Z,{onClick:function(){return p(!x)},className:"p-3",children:(0,t.jsx)(d.Z,{})})})]}),(0,t.jsx)(N,{className:"w-full",selectedKeys:[b],mode:n?"horizontal":"inline",hidden:!n&&!x,onClick:function(){return p(!1)},children:w.map((function(e){return e.children?(0,t.jsx)(u.Z.SubMenu,{icon:e.icon&&(0,t.jsx)(e.icon,{}),title:e.label,children:(0,t.jsx)(u.Z.ItemGroup,{title:e.label,children:e.children.map((function(e){return(0,t.jsx)(u.Z.Item,{icon:e.icon&&(0,t.jsx)(e.icon,{}),children:(0,t.jsx)(v.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})},"route-".concat(e.label)):(0,t.jsx)(u.Z.Item,{icon:e.icon&&(0,t.jsx)(e.icon,{}),children:(0,t.jsx)(v.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})]})})},w=n(13448),y=n(8145),k=n(79531),E=n(87547),O=n(88641),P=n(27496),T=n(39101);function S(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function I(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(s){S(e,s,n[s])}))}return e}var C={labelCol:{span:24},wrapperCol:{span:24}},_={required:"This field is required!",types:{email:"This is not a valid email!"}},M=function(e){return function(s){T.ZP.send("default_service","template_n5698qg",{from_name:s.name,from_email:s.email,message:s.message},"user_Z0tDIaK634ZfJUrLfrywg").then((function(){w.Z.success({message:"Message sent! You will receive a response soon!"}),e.current.resetFields()}),(function(e){w.Z.error({message:"Your message was not sent"})}))}},D=function(e){var s=(0,r.useRef)();return(0,t.jsx)("div",{className:"overflow-hidden",children:(0,t.jsxs)(y.Z,I({ref:s},C,{onFinish:M(s),name:"nest-messages",validateMessages:_,children:[(0,t.jsx)(y.Z.Item,{name:"name",rules:[{required:!0}],children:(0,t.jsx)(k.Z,{placeholder:"Name",prefix:(0,t.jsx)(E.Z,{})})}),(0,t.jsx)(y.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,t.jsx)(k.Z,{placeholder:"Email",prefix:(0,t.jsx)(O.Z,{})})}),(0,t.jsx)(y.Z.Item,{name:"message",rules:[{required:!0}],children:(0,t.jsx)(k.Z.TextArea,{placeholder:"Message"})}),(0,t.jsx)(y.Z.Item,{wrapperCol:I({},C.wrapperCol,{offset:0}),children:(0,t.jsx)(m.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,t.jsx)(P.Z,{}),children:"Submit"})})]}))})},L=n(38545),q=n(99121),G=function(e){return(0,t.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,t.jsxs)("div",{className:"text-center font-black",children:[(0,t.jsx)(L.Z,{className:"mr-3"}),"CONTACT"]}),(0,t.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,t.jsx)("div",{className:"w-full md:w-1/2",children:(0,t.jsx)(D,{})}),(0,t.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,t.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,t.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,t.jsx)(q.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,t.jsx)(q.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,t.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})},H=n(53308),A=n(75162);function V(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Z,{}),(0,t.jsxs)("div",{className:"container mx-auto",children:[e,(0,t.jsx)(H.Z,{children:(0,t.jsx)(m.Z,{size:"large",icon:(0,t.jsx)(A.Z,{}),shape:"circle",type:"primary"})})]}),(0,t.jsx)(G,{})]})}},20823:function(e,s,n){n.r(s),n.d(s,{__N_SSG:function(){return j}});var t=n(85893),r=n(37802),l=n(74622),a=n(14670),i=n(54907),c=n(20550),o=n(44937),d=n(29399),m=n(41664),u=n(49646),h=n(9008),x=n(73403),p=function(e){var s=e.extension,n=e.platforms,c=e.group,o=e.showSideNavigation,p=void 0===o||o;return(0,t.jsxs)("div",{className:"m-3 mt-0",children:[(0,t.jsxs)(h.default,{children:[(0,t.jsx)("title",{children:s.name}),(0,t.jsx)("meta",{name:"description",content:s.description})]}),(0,t.jsx)(u.Z,{routes:[{title:"Home",icon:x.Z,path:"/"},{title:"Extensions",path:"/extensions"},{title:s.name}]}),(0,t.jsxs)("div",{className:p&&"md:grid md:grid-cols-5",children:[p&&(0,t.jsx)("div",{className:"hidden md:block md:col-start-1 md:col-span-1",children:(0,t.jsxs)(r.Z,{className:"mt-6 pt-6",children:[(0,t.jsx)(r.Z.Link,{href:"#overview",title:"Overview"}),s.events.length>0&&(0,t.jsx)(r.Z.Link,{href:"#events",title:"Events"}),s.methods.length>0&&(0,t.jsx)(r.Z.Link,{href:"#methods",title:"Methods"}),s.properties.length>0&&(0,t.jsx)(r.Z.Link,{href:"#properties",title:"Properties"})]})}),(0,t.jsxs)("div",{className:p&&"md:col-start-2 md:col-span-4",children:[(0,t.jsxs)("div",{id:"overview",children:[(0,t.jsx)(l.Z.Title,{level:1,underline:!0,className:"m-0 p-0",children:s.name}),(0,t.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,t.jsx)(a.Z,{type:"info",className:"my-1",showIcon:!0,message:(0,t.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,t.jsx)("span",{className:"mr-1",children:"It is supported for:"}),n?n.map((function(e){return(0,t.jsx)(m.default,{href:e.url,children:(0,t.jsx)("a",{className:"mx-1",children:e.name})},"p-".concat(e.name))})):"Selected platforms"]})}),c&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Z,{type:"info",showIcon:!0,message:(0,t.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,t.jsx)("span",{className:"mr-1",children:"It is part of "}),(0,t.jsx)(m.default,{href:"/extensions/groups/".concat(s.group),children:(0,t.jsx)("a",{className:"mx-1",children:c.title})})]})}),(0,t.jsx)(a.Z,{type:"info",showIcon:!0,message:(0,t.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,t.jsxs)("span",{className:"mr-1",children:["To get this extension, please go to:"," "]}),(0,t.jsx)(m.default,{href:"/extensions/groups/".concat(s.group),children:(0,t.jsx)("a",{className:"mx-1",children:c.title})})]})})]})]}),(0,t.jsxs)("p",{className:"my-2 font-semibold",children:["Posted on ",s.date]}),(0,t.jsx)(d.Z,{children:s.description})]}),(0,t.jsxs)(i.Z,{defaultActiveKey:["Events","Methods","Properties"],children:[s.events.length>0&&(0,t.jsx)(i.Z.Panel,{header:"Events",id:"events",children:s.events.map((function(e,s){return(0,t.jsxs)("div",{className:"mb-10",children:[(0,t.jsx)(l.Z.Title,{level:3,className:"border-b-2 border-gray-200",children:e.name}),(0,t.jsx)(d.Z,{children:e.description}),e.defValue&&(0,t.jsxs)("p",{className:"font-semibold",children:["Default value: ",e.defValue]}),e.params&&(0,t.jsx)(f,{block:e})]},"b-".concat(e.name,"-").concat(s))}))},"Events"),s.methods.length>0&&(0,t.jsx)(i.Z.Panel,{header:"Methods",id:"methods",children:s.methods.map((function(e,s){return(0,t.jsxs)("div",{className:"mb-10",children:[(0,t.jsx)(l.Z.Title,{level:3,className:"border-b-2 border-gray-200",children:e.name}),(0,t.jsx)(d.Z,{children:e.description}),e.defValue&&(0,t.jsxs)("p",{className:"font-semibold",children:["Default value: ",e.defValue]}),e.params&&(0,t.jsx)(f,{block:e})]},"b-".concat(e.name,"-").concat(s))}))},"Methods"),s.properties.length>0&&(0,t.jsx)(i.Z.Panel,{header:"Properties",id:"properties",children:s.properties.map((function(e,s){return(0,t.jsxs)("div",{className:"mb-10",children:[(0,t.jsx)(l.Z.Title,{level:3,className:"border-b-2 border-gray-200",children:e.name}),(0,t.jsx)(d.Z,{children:e.description}),e.defValue&&(0,t.jsxs)("p",{className:"font-semibold",children:["Default value: ",e.defValue]}),e.params&&(0,t.jsx)(f,{block:e})]},"b-".concat(e.name,"-").concat(s))}))},"Properties")]})]})]})]})},f=function(e){var s=e.block;return(0,t.jsx)("div",{className:"rounded shadow overflow-hidden inline-block",children:(0,t.jsxs)("table",{className:"table-auto",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"text-white bg-blue-600 divide-x-2 divide-white divide-opacity-30",children:[(0,t.jsx)("th",{className:"p-2",children:"Name"}),(0,t.jsx)("th",{className:"p-2",children:"Type(s)"}),(0,t.jsx)("th",{className:"p-2",children:"Def. value"})]})}),(0,t.jsx)("tbody",{children:s.params.map((function(e,n){return(0,t.jsxs)("tr",{className:"divide-x-2 divide-black divide-opacity-10",children:[(0,t.jsx)("td",{className:"p-2 text-center",children:e.name}),(0,t.jsx)("td",{className:"p-2 text-center",children:e.type.split(",").map((function(n,r){return(0,t.jsx)(c.Z,{children:n},"tag-".concat(s.name,"-").concat(e.name,"-").concat(r))}))}),(0,t.jsx)("td",{className:"p-2 text-center",children:e.default?e.default:"-"})]},"p-".concat(s.name,"-").concat(n))}))})]})})};p.getLayout=o.G;var j=!0;s.default=p},41125:function(e){e.exports={purge:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],media:!1,theme:{extend:{}},variants:{extend:{}},plugins:[]}}}]);