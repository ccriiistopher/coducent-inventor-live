"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[428],{49646:function(e,s,n){var t=n(85893),r=n(82826),a=n(71577),l=n(58492),i=n(11163),c=n(41664);s.Z=function(e){var s=e.routes,n=(0,i.useRouter)();return(0,t.jsxs)("div",{className:"p-2",children:[(0,t.jsx)(a.Z,{className:"inline-block mr-2",icon:(0,t.jsx)(r.Z,{}),shape:"circle",onClick:function(){return n.back()}}),(0,t.jsx)(l.Z,{className:"inline-block",separator:">",children:s.map((function(e,s){return e.path?(0,t.jsx)(l.Z.Item,{children:(0,t.jsx)(c.default,{href:e.path,passHref:!0,children:(0,t.jsxs)("a",{children:[e.icon&&(0,t.jsx)(e.icon,{}),(0,t.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(s)):(0,t.jsxs)(l.Z.Item,{children:[e.icon&&(0,t.jsx)(e.icon,{}),(0,t.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(s))}))})]})}},39346:function(e,s,n){var t=n(85893),r=n(95507),a=n(20550),l=n(56266),i=n(71577),c=(n(67294),n(41664)),o=n(39876),u=n(78860),d=n(59117),x=n(85060),h=n(71511);s.Z=function(e){var s=e.parentGroup,n=e.groups,m=e.indexedGroups;return(0,t.jsx)(r.ZP,{itemLayout:"vertical",size:"small",dataSource:n,header:(0,t.jsxs)("div",{children:["Total: ",n.length," group(s)"]}),bordered:!0,renderItem:function(e){var n=e.parent?m?m[e.parent][0]:s||null:null;return(0,t.jsxs)(r.ZP.Item,{className:"rounded bg-white relative",actions:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(a.Z,{color:e.tagColor,children:[(0,t.jsx)(o.Z,{})," ",e.price?e.price:"FREE",n&&(0,t.jsx)(l.Z,{title:"If this group of extensions is free, it will be obtained when you buy ".concat(n.title),children:(0,t.jsx)(u.Z,{})})]}),(0,t.jsx)(i.Z,{shape:"circle",about:"Get it",icon:e.price?(0,t.jsx)(d.Z,{}):(0,t.jsx)(x.Z,{})})]},"item-actions")],children:[(0,t.jsx)(r.ZP.Item.Meta,{avatar:e.icon?(0,t.jsx)(h.Z,{src:e.icon}):(0,t.jsx)(h.Z,{style:{backgroundColor:e.tagColor},children:e.title[0]}),title:(0,t.jsx)(c.default,{href:"/extensions/groups/".concat(e.path),children:(0,t.jsx)("a",{children:e.title})}),description:(0,t.jsxs)("div",{children:[n&&(0,t.jsxs)("p",{children:["It is part of:"," ",(0,t.jsx)(a.Z,{color:"blue",children:(0,t.jsx)(c.default,{href:"/extensions/groups/".concat(n.path),children:(0,t.jsx)("a",{className:"z-30",children:n.title})})})]}),(0,t.jsx)("p",{children:e.description})]})}),(0,t.jsx)("div",{className:"w-2 h-full top-0 left-0 absolute",style:{backgroundColor:e.tagColor}})]},e.path)}})}},44937:function(e,s,n){n.d(s,{G:function(){return A}});var t=n(85893),r=n(67294),a=n(11163),l=n(73403),i=n(87057),c=n(16664),o=n(78860),u=n(60532),d=n(71577),x=n(38792),h=n(86926),m=n.n(h),p=n(41125),f=n.n(p),j=m()(f()),Z=n(41664),b=(0,n(5152).default)((function(){return Promise.all([n.e(885),n.e(80),n.e(507),n.e(650),n.e(174),n.e(255),n.e(66),n.e(550)]).then(n.bind(n,52255)).then((function(e){return e.Menu}))}),{loadableGenerated:{webpack:function(){return[52255]},modules:["../components/NavBar.tsx -> antd"]},ssr:!1}),g=function(e){var s=(0,a.useRouter)(),n=function(e){var s=j.theme.screens[e],n=(0,r.useState)(!1),t=n[0],a=n[1],l=(0,r.useCallback)((function(e){e.matches?a(!0):a(!1)}),[]);return(0,r.useEffect)((function(){var e=window.matchMedia("(min-width: ".concat(s,")"));return e.addEventListener("change",l),e.matches&&a(!0),function(){return e.removeEventListener("change",l)}}),[]),t}("md"),h=(0,r.useState)(!1),m=h[0],p=h[1],f=(0,r.useState)(s.pathname),g=f[0],v=f[1];(0,r.useEffect)((function(){return v(s.pathname)}),[s.pathname]);var w=[{label:"Home",icon:l.Z,path:"/"},{label:"Extensions",icon:i.Z,children:[{label:"Groups",path:"/extensions/groups",icon:i.Z},{label:"All",path:"/extensions",icon:c.Z},{label:"Help",path:"/extensions/help",icon:o.Z}]}];return(0,t.jsx)("div",{className:"shadow bg-white sticky top-0 z-30",children:(0,t.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,t.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,t.jsx)(Z.default,{href:"/",passHref:!0,children:(0,t.jsx)("span",{className:"my-auto p-0 m-0 text-blue-400 text-lg font-black cursor-pointer",children:"TEDUSOFT"})}),(0,t.jsx)("div",{className:"md:hidden ml-auto",children:(0,t.jsx)(d.Z,{onClick:function(){return p(!m)},className:"p-3",children:(0,t.jsx)(u.Z,{})})})]}),(0,t.jsx)(b,{className:"w-full",selectedKeys:[g],mode:n?"horizontal":"inline",hidden:!n&&!m,children:w.map((function(e){return e.children?(0,t.jsx)(x.Z.SubMenu,{icon:e.icon&&(0,t.jsx)(e.icon,{}),title:e.label,children:(0,t.jsx)(x.Z.ItemGroup,{title:e.label,children:e.children.map((function(e){return(0,t.jsx)(x.Z.Item,{icon:e.icon&&(0,t.jsx)(e.icon,{}),children:(0,t.jsx)(Z.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})},"route-".concat(e.label)):(0,t.jsx)(x.Z.Item,{icon:e.icon&&(0,t.jsx)(e.icon,{}),children:(0,t.jsx)(Z.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})]})})},v=n(13448),w=n(8145),y=n(79531),N=n(87547),k=n(88641),C=n(27496),I=n(39101);function E(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function S(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(s){E(e,s,n[s])}))}return e}var O={labelCol:{span:24},wrapperCol:{span:24}},_={required:"This field is required!",types:{email:"This is not a valid email!"}},M=function(e){return function(s){I.ZP.send("default_service","template_n5698qg",{from_name:s.name,from_email:s.email,message:s.message},"user_Z0tDIaK634ZfJUrLfrywg").then((function(){v.Z.success({message:"Message sent! You will receive a response soon!"}),e.current.resetFields()}),(function(e){v.Z.error({message:"Your message was not sent"})}))}},P=function(e){var s=(0,r.useRef)();return(0,t.jsx)("div",{className:"overflow-hidden",children:(0,t.jsxs)(w.Z,S({ref:s},O,{onFinish:M(s),name:"nest-messages",validateMessages:_,children:[(0,t.jsx)(w.Z.Item,{name:"name",rules:[{required:!0}],children:(0,t.jsx)(y.Z,{placeholder:"Name",prefix:(0,t.jsx)(N.Z,{})})}),(0,t.jsx)(w.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,t.jsx)(y.Z,{placeholder:"Email",prefix:(0,t.jsx)(k.Z,{})})}),(0,t.jsx)(w.Z.Item,{name:"message",rules:[{required:!0}],children:(0,t.jsx)(y.Z.TextArea,{placeholder:"Message"})}),(0,t.jsx)(w.Z.Item,{wrapperCol:S({},O.wrapperCol,{offset:0}),children:(0,t.jsx)(d.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,t.jsx)(C.Z,{}),children:"Submit"})})]}))})},T=n(38545),G=n(99121),z=function(e){return(0,t.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,t.jsxs)("div",{className:"text-center font-black",children:[(0,t.jsx)(T.Z,{className:"mr-3"}),"CONTACT"]}),(0,t.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,t.jsx)("div",{className:"w-full md:w-1/2",children:(0,t.jsx)(P,{})}),(0,t.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,t.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,t.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,t.jsx)(G.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,t.jsx)(G.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,t.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})},H=n(53308),q=n(75162);function A(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{}),(0,t.jsxs)("div",{className:"container mx-auto",children:[e,(0,t.jsx)(H.Z,{children:(0,t.jsx)(d.Z,{size:"large",icon:(0,t.jsx)(q.Z,{}),shape:"circle",type:"primary"})})]}),(0,t.jsx)(z,{})]})}},41125:function(e){e.exports={purge:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],darkMode:!1,theme:{extend:{}},variants:{extend:{}},plugins:[]}}}]);