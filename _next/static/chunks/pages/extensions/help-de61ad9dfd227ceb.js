(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[566],{54805:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extensions/help",function(){return s(67369)}])},49646:function(e,n,s){"use strict";var t=s(85893),r=s(82826),a=s(71577),i=s(58492),l=s(11163),c=s(41664);n.Z=function(e){var n=e.routes,s=(0,l.useRouter)();return(0,t.jsxs)("div",{className:"p-2",children:[(0,t.jsx)(a.Z,{className:"inline-block mr-2",icon:(0,t.jsx)(r.Z,{}),shape:"circle",onClick:function(){return s.back()}}),(0,t.jsx)(i.Z,{className:"inline-block",separator:">",children:n.map((function(e,n){return e.path?(0,t.jsx)(i.Z.Item,{children:(0,t.jsx)(c.default,{href:e.path,passHref:!0,children:(0,t.jsxs)("a",{children:[e.icon&&(0,t.jsx)(e.icon,{}),(0,t.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(n)):(0,t.jsxs)(i.Z.Item,{children:[e.icon&&(0,t.jsx)(e.icon,{}),(0,t.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(n))}))})]})}},44937:function(e,n,s){"use strict";s.d(n,{G:function(){return z}});var t=s(85893),r=s(67294),a=s(11163),i=s(73403),l=s(87057),c=s(16664),o=s(78860),u=s(60532),d=s(71577),x=s(38792),m=s(86926),h=s.n(m),p=s(41125),f=s.n(p),j=h()(f()),b=s(41664),g=(0,s(5152).default)((function(){return Promise.all([s.e(885),s.e(80),s.e(507),s.e(650),s.e(174),s.e(255),s.e(66),s.e(550)]).then(s.bind(s,52255)).then((function(e){return e.Menu}))}),{loadableGenerated:{webpack:function(){return[52255]},modules:["../components/NavBar.tsx -> antd"]},ssr:!1}),v=function(e){var n=(0,a.useRouter)(),s=function(e){var n=j.theme.screens[e],s=(0,r.useState)(!1),t=s[0],a=s[1],i=(0,r.useCallback)((function(e){e.matches?a(!0):a(!1)}),[]);return(0,r.useEffect)((function(){var e=window.matchMedia("(min-width: ".concat(n,")"));return e.addEventListener("change",i),e.matches&&a(!0),function(){return e.removeEventListener("change",i)}}),[]),t}("md"),m=(0,r.useState)(!1),h=m[0],p=m[1],f=(0,r.useState)(n.pathname),v=f[0],Z=f[1];(0,r.useEffect)((function(){return Z(n.pathname)}),[n.pathname]);var w=[{label:"Home",icon:i.Z,path:"/"},{label:"Extensions",icon:l.Z,children:[{label:"Groups",path:"/extensions/groups",icon:l.Z},{label:"All",path:"/extensions",icon:c.Z},{label:"Help",path:"/extensions/help",icon:o.Z}]}];return(0,t.jsx)("div",{className:"shadow bg-white sticky top-0 z-30",children:(0,t.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,t.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,t.jsx)(b.default,{href:"/",passHref:!0,children:(0,t.jsx)("span",{className:"my-auto p-0 m-0 text-blue-400 text-lg font-black cursor-pointer",children:"TEDUSOFT"})}),(0,t.jsx)("div",{className:"md:hidden ml-auto",children:(0,t.jsx)(d.Z,{onClick:function(){return p(!h)},className:"p-3",children:(0,t.jsx)(u.Z,{})})})]}),(0,t.jsx)(g,{className:"w-full",selectedKeys:[v],mode:s?"horizontal":"inline",hidden:!s&&!h,children:w.map((function(e){return e.children?(0,t.jsx)(x.Z.SubMenu,{icon:e.icon&&(0,t.jsx)(e.icon,{}),title:e.label,children:(0,t.jsx)(x.Z.ItemGroup,{title:e.label,children:e.children.map((function(e){return(0,t.jsx)(x.Z.Item,{icon:e.icon&&(0,t.jsx)(e.icon,{}),children:(0,t.jsx)(b.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})},"route-".concat(e.label)):(0,t.jsx)(x.Z.Item,{icon:e.icon&&(0,t.jsx)(e.icon,{}),children:(0,t.jsx)(b.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})]})})},Z=s(13448),w=s(8145),N=s(79531),y=s(87547),E=s(88641),_=s(27496),k=s(39101);function C(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function O(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){C(e,n,s[n])}))}return e}var S={labelCol:{span:24},wrapperCol:{span:24}},I={required:"This field is required!",types:{email:"This is not a valid email!"}},T=function(e){return function(n){k.ZP.send("default_service","template_n5698qg",{from_name:n.name,from_email:n.email,message:n.message},"user_Z0tDIaK634ZfJUrLfrywg").then((function(){Z.Z.success({message:"Message sent! You will receive a response soon!"}),e.current.resetFields()}),(function(e){Z.Z.error({message:"Your message was not sent"})}))}},H=function(e){var n=(0,r.useRef)();return(0,t.jsx)("div",{className:"overflow-hidden",children:(0,t.jsxs)(w.Z,O({ref:n},S,{onFinish:T(n),name:"nest-messages",validateMessages:I,children:[(0,t.jsx)(w.Z.Item,{name:"name",rules:[{required:!0}],children:(0,t.jsx)(N.Z,{placeholder:"Name",prefix:(0,t.jsx)(y.Z,{})})}),(0,t.jsx)(w.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,t.jsx)(N.Z,{placeholder:"Email",prefix:(0,t.jsx)(E.Z,{})})}),(0,t.jsx)(w.Z.Item,{name:"message",rules:[{required:!0}],children:(0,t.jsx)(N.Z.TextArea,{placeholder:"Message"})}),(0,t.jsx)(w.Z.Item,{wrapperCol:O({},S.wrapperCol,{offset:0}),children:(0,t.jsx)(d.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,t.jsx)(_.Z,{}),children:"Submit"})})]}))})},M=s(38545),P=s(99121),G=function(e){return(0,t.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,t.jsxs)("div",{className:"text-center font-black",children:[(0,t.jsx)(M.Z,{className:"mr-3"}),"CONTACT"]}),(0,t.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,t.jsx)("div",{className:"w-full md:w-1/2",children:(0,t.jsx)(H,{})}),(0,t.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,t.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,t.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,t.jsx)(P.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,t.jsx)(P.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,t.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})},F=s(53308),q=s(75162);function z(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v,{}),(0,t.jsxs)("div",{className:"container mx-auto",children:[e,(0,t.jsx)(F.Z,{children:(0,t.jsx)(d.Z,{size:"large",icon:(0,t.jsx)(q.Z,{}),shape:"circle",type:"primary"})})]}),(0,t.jsx)(G,{})]})}},67369:function(e,n,s){"use strict";s.r(n);var t=s(85893),r=s(74622),a=s(44937),i=(s(67294),s(41664)),l=s(49646),c=s(73403),o=function(){return(0,t.jsxs)("div",{className:"container mx-auto md:pl-0 pb-4",children:[(0,t.jsx)(l.Z,{routes:[{title:"Home",icon:c.Z,path:"/"},{title:"Extensions/Help"}]}),(0,t.jsx)(r.Z.Title,{level:1,underline:!0,className:"mx-3",children:"Help"}),(0,t.jsxs)("div",{className:"px-4",children:[(0,t.jsxs)("p",{className:"pre-wrap",children:["For detailed information on purchasing the extensions, go to:"," ",(0,t.jsx)(i.default,{href:"/extensions/groups",children:(0,t.jsx)("a",{children:"Extensions Groups"})})]}),(0,t.jsxs)("p",{className:"pre-wrap",children:["For detailed documentation on each extension go to:"," ",(0,t.jsx)(i.default,{href:"/extensions/",children:(0,t.jsx)("a",{children:"Extensions"})})]})]})]})};o.getLayout=a.G,n.default=o},41125:function(e){"use strict";e.exports={purge:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],darkMode:!1,theme:{extend:{}},variants:{extend:{}},plugins:[]}}},function(e){e.O(0,[774,662,245,80,888,179],(function(){return n=54805,e(e.s=n);var n}));var n=e.O();_N_E=n}]);