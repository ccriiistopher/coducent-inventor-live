(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{28147:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return s(49378)}])},56026:function(e,n,s){"use strict";var t=s(85893),r=s(95507),a=s(71577),i=s(24093),c=s(20550),l=s(41664),o=s(85060);n.Z=function(e){var n=e.data,s=e.pagination,u=void 0!==s&&s,d=e.group,x=e.groups;return(0,t.jsx)(r.ZP,{itemLayout:"horizontal",size:"small",pagination:u&&{onChange:function(e){},pageSize:10},dataSource:n,header:(0,t.jsxs)("div",{children:["Total: ",n.length," extension(s)"]}),bordered:!0,renderItem:function(e){var n=d||(e.group&&x[e.group]?x[e.group][0]:null);return(0,t.jsx)(r.ZP.Item,{className:"rounded bg-white relative",actions:[!d&&(0,t.jsx)(l.default,{href:"/extensions/".concat(e.group),children:(0,t.jsx)(a.Z,{icon:(0,t.jsx)(o.Z,{})})})],children:(0,t.jsx)(r.ZP.Item.Meta,{avatar:n?n.icon?(0,t.jsx)(i.C,{src:n.icon}):(0,t.jsx)(i.C,{style:{backgroundColor:n.tagColor},children:n.title[0]}):(0,t.jsx)(i.C,{children:e.name[0]}),title:(0,t.jsx)(l.default,{href:"/docs/".concat(e.path),children:(0,t.jsx)("a",{children:e.name})}),description:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:e.date}),!d&&n&&(0,t.jsxs)("p",{children:["From group:"," ",(0,t.jsx)(c.Z,{color:"blue",children:(0,t.jsx)(l.default,{href:"/extensions/".concat(n.path),children:(0,t.jsx)("a",{children:n.title})})})]})]})})},e.name)}})}},23076:function(e,n,s){"use strict";var t=s(85893),r=s(82826),a=s(71577),i=s(58492),c=s(11163),l=s(41664);n.Z=function(e){var n=e.routes,s=(0,c.useRouter)();return(0,t.jsxs)("div",{className:"p-2",children:[(0,t.jsx)(a.Z,{className:"inline-block mr-2",icon:(0,t.jsx)(r.Z,{}),shape:"circle",onClick:function(){return s.back()}}),(0,t.jsx)(i.Z,{className:"inline-block",separator:">",children:n.map((function(e,n){return e.path?(0,t.jsx)(i.Z.Item,{children:(0,t.jsx)(l.default,{href:e.path,passHref:!0,children:(0,t.jsxs)("a",{children:[e.icon&&(0,t.jsx)(e.icon,{}),(0,t.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(n)):(0,t.jsxs)(i.Z.Item,{children:[e.icon&&(0,t.jsx)(e.icon,{}),(0,t.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(n))}))})]})}},22371:function(e,n,s){"use strict";s.d(n,{G:function(){return A}});var t=s(85893),r=s(67294),a=s(11163),i=s(73403),c=s(87057),l=s(69015),o=s(45605),u=s(60532),d=s(71577),x=s(38792),m=s(86926),h=s.n(m),f=s(41125),p=s.n(f),j=h()(p()),g=s(41664),v=s(5152),b=s(96486),Z=s(4298),w=(0,v.default)((function(){return Promise.all([s.e(885),s.e(80),s.e(915),s.e(507),s.e(802),s.e(174),s.e(255),s.e(66)]).then(s.bind(s,52255)).then((function(e){return e.Menu}))}),{loadableGenerated:{webpack:function(){return[52255]},modules:["../components/general/navbar.tsx -> antd"]},ssr:!1}),N=function(e){var n=(0,a.useRouter)(),s=function(e){var n=j.theme.screens[e],s=(0,r.useState)(!1),t=s[0],a=s[1],i=(0,r.useCallback)((function(e){e.matches?a(!0):a(!1)}),[]);return(0,r.useEffect)((function(){var e=window.matchMedia("(min-width: ".concat(n,")"));return e.addEventListener("change",i),e.matches&&a(!0),function(){return e.removeEventListener("change",i)}}),[]),t}("md"),m=(0,r.useState)(!1),h=m[0],f=m[1],p=(0,r.useState)(n.pathname),v=p[0],N=p[1];(0,r.useEffect)((function(){var e=n.pathname,s=(0,b.compact)(e.split("/"));if(s.length>=2){var t=1==(s=(0,b.filter)(s,(function(e){return!e.includes("[")}))).length?"/"+s[0]:"/"+s[0]+"/"+s[1];N(t)}else N(e)}),[n.pathname]);var y=[{label:"Home",icon:i.Z,path:"/"},{label:"Extensions",icon:c.Z,path:"/extensions"},{label:"Docs",icon:l.Z,path:"/docs"},{label:"Help",icon:o.Z,path:"/help"}];return(0,t.jsxs)("div",{className:"shadow bg-white sticky top-0 z-30",children:[(0,t.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,t.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,t.jsx)(g.default,{href:"/",passHref:!0,children:(0,t.jsx)("span",{className:"my-auto p-0 m-0 text-blue-400 text-lg font-black cursor-pointer",children:"TEDUSOFT"})}),(0,t.jsx)("div",{className:"md:hidden ml-auto",children:(0,t.jsx)(d.Z,{onClick:function(){return f(!h)},className:"p-3",children:(0,t.jsx)(u.Z,{})})})]}),(0,t.jsx)(w,{className:"w-full",selectedKeys:[v],mode:s?"horizontal":"inline",hidden:!s&&!h,onClick:function(){return f(!1)},children:y.map((function(e){return e.children?(0,t.jsx)(x.Z.SubMenu,{icon:e.icon&&(0,t.jsx)(e.icon,{}),title:e.label,children:(0,t.jsx)(x.Z.ItemGroup,{title:e.label,children:e.children.map((function(e){return(0,t.jsx)(x.Z.Item,{icon:e.icon&&(0,t.jsx)(e.icon,{}),children:(0,t.jsx)(g.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})},"route-".concat(e.label)):(0,t.jsx)(x.Z.Item,{icon:e.icon&&(0,t.jsx)(e.icon,{}),children:(0,t.jsx)(g.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})]}),(0,t.jsx)(Z.default,{async:!0,strategy:"beforeInteractive",src:"https://cse.google.com/cse.js?cx=bf28d1266fc21fd70"}),(0,t.jsx)("div",{className:"gcse-searchbox-only"})]})},y=s(13448),_=s(8145),C=s(79531),E=s(87547),k=s(88641),S=s(27496),I=s(39101);function O(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function T(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){O(e,n,s[n])}))}return e}var P={labelCol:{span:24},wrapperCol:{span:24}},z={required:"This field is required!",types:{email:"This is not a valid email!"}},M=function(e){return function(n){I.ZP.send("default_service","template_n5698qg",{from_name:n.name,from_email:n.email,message:n.message},"user_Z0tDIaK634ZfJUrLfrywg").then((function(){y.Z.success({message:"Message sent! You will receive a response soon!"}),e.current.resetFields()}),(function(e){y.Z.error({message:"Your message was not sent"})}))}},H=function(e){var n=(0,r.useRef)();return(0,t.jsx)("div",{className:"overflow-hidden",children:(0,t.jsxs)(_.Z,T({ref:n},P,{onFinish:M(n),name:"nest-messages",validateMessages:z,children:[(0,t.jsx)(_.Z.Item,{name:"name",rules:[{required:!0}],children:(0,t.jsx)(C.Z,{placeholder:"Name",prefix:(0,t.jsx)(E.Z,{})})}),(0,t.jsx)(_.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,t.jsx)(C.Z,{placeholder:"Email",prefix:(0,t.jsx)(k.Z,{})})}),(0,t.jsx)(_.Z.Item,{name:"message",rules:[{required:!0}],children:(0,t.jsx)(C.Z.TextArea,{placeholder:"Message"})}),(0,t.jsx)(_.Z.Item,{wrapperCol:T({},P.wrapperCol,{offset:0}),children:(0,t.jsx)(d.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,t.jsx)(S.Z,{}),children:"Submit"})})]}))})},D=s(38545),G=s(99121),L=function(e){return(0,t.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,t.jsxs)("div",{className:"text-center font-black",children:[(0,t.jsx)(D.Z,{className:"mr-3"}),"CONTACT"]}),(0,t.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,t.jsx)("div",{className:"w-full md:w-1/2",children:(0,t.jsx)(H,{})}),(0,t.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,t.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,t.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,t.jsx)(G.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,t.jsx)(G.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,t.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})},q=s(53308),F=s(75162);function A(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N,{}),(0,t.jsxs)("div",{className:"container mx-auto",children:[e,(0,t.jsx)(q.Z,{children:(0,t.jsx)(d.Z,{size:"large",icon:(0,t.jsx)(F.Z,{}),shape:"circle",type:"primary"})})]}),(0,t.jsx)(L,{})]})}},49378:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return x}});var t=s(85893),r=s(74622),a=s(22371),i=(s(67294),s(56026)),c=s(9008),l=s(23076),o=s(73403),u=s(69015),d=function(e){var n=e.extensions,s=e.groups;return(0,t.jsxs)("div",{className:"container mx-auto md:pl-0 pb-4",children:[(0,t.jsxs)(c.default,{children:[(0,t.jsx)("title",{children:"Extensions"}),(0,t.jsx)("meta",{name:"description",content:"Extension List from tedusoft"})]}),(0,t.jsx)(l.Z,{routes:[{title:"Home",icon:o.Z,path:"/"},{title:"Docs",icon:u.Z}]}),(0,t.jsx)(r.Z.Title,{level:1,underline:!0,className:"mx-3",children:"Extensions"}),(0,t.jsx)("div",{className:"px-4",children:(0,t.jsx)(i.Z,{data:n,pagination:!0,groups:s})})]})};d.getLayout=a.G;var x=!0;n.default=d},41125:function(e){"use strict";e.exports={purge:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],media:!1,theme:{extend:{}},variants:{extend:{}},plugins:[]}}},function(e){e.O(0,[774,662,387,80,507,248,888,179],(function(){return n=28147,e(e.s=n);var n}));var n=e.O();_N_E=n}]);