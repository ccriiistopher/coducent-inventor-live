"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[157],{23076:function(e,n,s){var t=s(85893),r=s(82826),a=s(71577),l=s(58492),c=s(11163),i=s(41664);n.Z=function(e){var n=e.routes,s=(0,c.useRouter)();return(0,t.jsxs)("div",{className:"p-2",children:[(0,t.jsx)(a.Z,{className:"inline-block mr-2",icon:(0,t.jsx)(r.Z,{}),shape:"circle",onClick:function(){return s.back()}}),(0,t.jsx)(l.Z,{className:"inline",separator:">",children:n.map((function(e,n){return e.path?(0,t.jsx)(l.Z.Item,{children:(0,t.jsx)(i.default,{href:e.path,passHref:!0,children:(0,t.jsxs)("a",{children:[e.icon&&(0,t.jsx)(e.icon,{}),(0,t.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(n)):(0,t.jsxs)(l.Z.Item,{children:[e.icon&&(0,t.jsx)(e.icon,{}),(0,t.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(n))}))})]})}},49501:function(e,n,s){s.d(n,{G:function(){return L}});var t=s(85893),r=s(67294),a=s(11163),l=s(73403),c=s(87057),i=s(69015),o=s(45605),u=s(60532),d=s(71577),h=s(38792),m=s(79531),x=s(19562),f=s(62986),p=s(86926),j=s.n(p),v=s(41125),b=s.n(v),g=j()(b()),y=s(41664),Z=s(5152),w=s(96486),N=s(92764),k=s(74221),S=(0,Z.default)((function(){return Promise.all([s.e(885),s.e(80),s.e(334),s.e(650),s.e(303),s.e(255),s.e(66)]).then(s.bind(s,52255)).then((function(e){return e.Menu}))}),{loadableGenerated:{webpack:function(){return[52255]},modules:["../components/general/navbar.tsx -> antd"]},ssr:!1}),C=function(e){var n=(0,r.useContext)(N.O).searchBar,s=(0,a.useRouter)(),p=function(e){var n=g.theme.screens[e],s=(0,r.useState)(!1),t=s[0],a=s[1],l=(0,r.useCallback)((function(e){e.matches?a(!0):a(!1)}),[]);return(0,r.useEffect)((function(){var e=window.matchMedia("(min-width: ".concat(n,")"));return e.addEventListener("change",l),e.matches&&a(!0),function(){return e.removeEventListener("change",l)}}),[]),t}("md"),j=(0,r.useState)(!1),v=j[0],b=j[1],Z=(0,r.useState)([]),C=Z[0],E=Z[1],I=(0,r.useState)(!1),O=I[0],_=I[1],P=(0,r.useState)(s.pathname),T=P[0],z=P[1],M=null;n&&(M=new k.Z(n.searchBarData,{keys:n.searchKeys}));var B=(0,r.useCallback)((function(e){if(e&&!(e.replaceAll(/\s/g,"").length<=0)){var n=M.search(e),s=[];if(n.length>0){var t=!0,r=!1,a=void 0;try{for(var l,c=n[Symbol.iterator]();!(t=(l=c.next()).done);t=!0){var i=l.value;s.push(i.item)}}catch(o){r=!0,a=o}finally{try{t||null==c.return||c.return()}finally{if(r)throw a}}E(s)}else E([]);_(!0)}}),[M,n]);(0,r.useEffect)((function(){var e=s.pathname,n=(0,w.compact)(e.split("/"));if(n.length>=2){var t=1==(n=(0,w.filter)(n,(function(e){return!e.includes("[")}))).length?"/"+n[0]:"/"+n[0]+"/"+n[1];z(t)}else z(e);_(!1)}),[s.pathname]);var D=[{label:"Home",icon:l.Z,path:"/"},{label:"Extensions",icon:c.Z,path:"/extensions"},{label:"Docs",icon:i.Z,path:"/docs"},{label:"Help",icon:o.Z,path:"/help"}];return(0,t.jsx)("div",{className:"shadow bg-white sticky top-0 z-30",children:(0,t.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,t.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,t.jsx)(y.default,{href:"/",passHref:!0,children:(0,t.jsx)("span",{className:"my-auto p-0 m-0 text-blue-400 text-lg font-black cursor-pointer",children:"TEDUSOFT"})}),(0,t.jsx)("div",{className:"md:hidden ml-auto",children:(0,t.jsx)(d.Z,{onClick:function(){return b(!v)},className:"p-3",children:(0,t.jsx)(u.Z,{})})})]}),(0,t.jsx)("div",{className:"w-full z-50",children:(0,t.jsx)(S,{selectedKeys:[T],mode:p?"horizontal":"inline",hidden:!p&&!v,onClick:function(){return b(!1)},children:D.map((function(e){return e.children?(0,t.jsx)(h.Z.SubMenu,{icon:e.icon&&(0,t.jsx)(e.icon,{}),title:e.label,children:(0,t.jsx)(h.Z.ItemGroup,{title:e.label,children:e.children.map((function(e){return(0,t.jsx)(h.Z.Item,{icon:e.icon&&(0,t.jsx)(e.icon,{}),children:(0,t.jsx)(y.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})},"route-".concat(e.label)):(0,t.jsx)(h.Z.Item,{icon:e.icon&&(0,t.jsx)(e.icon,{}),children:(0,t.jsx)(y.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})}),n&&n.showSearchBar&&(0,t.jsxs)("div",{className:"my-2 mx-3 md:w-80 lg:w-96 z-50",children:[(0,t.jsx)(m.Z.Search,{placeholder:n.placeholder||"Search",onSearch:B}),(0,t.jsx)(x.Z,{visible:O,onCancel:function(){_(!1)},okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},title:"Results",children:C&&C.length>0?n.searchBarResult(C):(0,t.jsx)(f.Z,{description:"No results found."})})]})]})})},E=s(13448),I=s(8145),O=s(87547),_=s(88641),P=s(27496),T=s(39101);function z(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function M(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){z(e,n,s[n])}))}return e}var B={labelCol:{span:24},wrapperCol:{span:24}},D={required:"This field is required!",types:{email:"This is not a valid email!"}},H=function(e){return function(n){T.ZP.send("default_service","template_n5698qg",{from_name:n.name,from_email:n.email,message:n.message},"user_Z0tDIaK634ZfJUrLfrywg").then((function(){E.Z.success({message:"Message sent! You will receive a response soon!"}),e.current.resetFields()}),(function(e){E.Z.error({message:"Your message was not sent"})}))}},q=function(e){var n=(0,r.useRef)();return(0,t.jsx)("div",{className:"overflow-hidden",children:(0,t.jsxs)(I.Z,M({ref:n},B,{onFinish:H(n),name:"nest-messages",validateMessages:D,children:[(0,t.jsx)(I.Z.Item,{name:"name",rules:[{required:!0}],children:(0,t.jsx)(m.Z,{placeholder:"Name",prefix:(0,t.jsx)(O.Z,{})})}),(0,t.jsx)(I.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,t.jsx)(m.Z,{placeholder:"Email",prefix:(0,t.jsx)(_.Z,{})})}),(0,t.jsx)(I.Z.Item,{name:"message",rules:[{required:!0}],children:(0,t.jsx)(m.Z.TextArea,{placeholder:"Message"})}),(0,t.jsx)(I.Z.Item,{wrapperCol:M({},B.wrapperCol,{offset:0}),children:(0,t.jsx)(d.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,t.jsx)(P.Z,{}),children:"Submit"})})]}))})},A=s(38545),R=s(99121),F=function(e){return(0,t.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,t.jsxs)("div",{className:"text-center font-black",children:[(0,t.jsx)(A.Z,{className:"mr-3"}),(0,t.jsx)("h1",{className:"text-center font-black",children:"CONTACT"})]}),(0,t.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,t.jsx)("div",{className:"w-full md:w-1/2",children:(0,t.jsx)(q,{})}),(0,t.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,t.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,t.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,t.jsx)(R.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,t.jsx)(R.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,t.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})},G=s(53308),K=s(75162);function L(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{}),(0,t.jsxs)("div",{className:"container mx-auto",children:[e,(0,t.jsx)(G.Z,{children:(0,t.jsx)(d.Z,{size:"large",icon:(0,t.jsx)(K.Z,{}),shape:"circle",type:"primary"})})]}),(0,t.jsx)(F,{})]})}},41125:function(e){e.exports={content:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],media:!1,theme:{extend:{}},variants:{extend:{}},plugins:[]}}}]);