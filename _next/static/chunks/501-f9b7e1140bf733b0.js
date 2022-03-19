"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{49501:function(e,s,t){t.d(s,{d:function(){return L}});var n=t(85893),a=t(67294),r=t(11163),l=t(73403),i=t(87057),c=t(69015),o=t(60532),u=t(71577),d=t(38792),m=t(79531),h=t(19562),x=t(62986),f=t(86926),p=t.n(f),j=t(41125),g=t.n(j),y=p()(g()),b=t(41664),v=t(5152),w=t(96486),Z=t(92764),N=t(74221),k=(0,v.default)((function(){return Promise.all([t.e(885),t.e(80),t.e(334),t.e(717),t.e(66),t.e(216),t.e(303),t.e(812),t.e(670)]).then(t.bind(t,32812)).then((function(e){return e.Menu}))}),{loadableGenerated:{webpack:function(){return[32812]},modules:["../components/general/navbar.tsx -> antd"]},ssr:!1}),S=function(e){var s=(0,a.useContext)(Z.O).searchBar,t=(0,r.useRouter)(),f=function(e){var s=y.theme.screens[e],t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useCallback)((function(e){e.matches?r(!0):r(!1)}),[]);return(0,a.useEffect)((function(){var e=window.matchMedia("(min-width: ".concat(s,")"));return e.addEventListener("change",l),e.matches&&r(!0),function(){return e.removeEventListener("change",l)}}),[l,s]),n}("md"),p=(0,a.useState)(!1),j=p[0],g=p[1],v=(0,a.useState)([]),S=v[0],C=v[1],E=(0,a.useState)(!1),O=E[0],I=E[1],_=(0,a.useState)(t.pathname),z=_[0],M=_[1],P=null;s&&(P=new N.Z(s.searchBarData,{keys:s.searchKeys}));var T=(0,a.useCallback)((function(e){if(e&&!(e.replaceAll(/\s/g,"").length<=0)){var s=P.search(e),t=[];if(s.length>0){var n=!0,a=!1,r=void 0;try{for(var l,i=s[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var c=l.value;t.push(c.item)}}catch(o){a=!0,r=o}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}C(t)}else C([]);I(!0)}}),[P]);(0,a.useEffect)((function(){var e=t.pathname,s=(0,w.compact)(e.split("/"));if(s.length>=2){var n=1==(s=(0,w.filter)(s,(function(e){return!e.includes("[")}))).length?"/"+s[0]:"/"+s[0]+"/"+s[1];M(n)}else M(e);I(!1)}),[t.pathname]);var B=[{label:"Home",icon:l.Z,path:"/"},{label:"Extensions",icon:i.Z,path:"/extensions"},{label:"Docs",icon:c.Z,path:"/docs"}];return(0,n.jsx)("div",{className:"shadow bg-white sticky top-0 md:h-16 py-4 md:py-0 lg:px-10",style:{zIndex:1e3},children:(0,n.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row h-full",children:[(0,n.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,n.jsx)(b.default,{href:"/",passHref:!0,children:(0,n.jsx)("span",{className:"my-auto p-0 m-0 text-blue-400 text-lg font-black cursor-pointer",children:"TEDUSOFT"})}),(0,n.jsx)("div",{className:"md:hidden ml-auto",children:(0,n.jsx)(u.Z,{onClick:function(){return g(!j)},className:"p-3",children:(0,n.jsx)(o.Z,{})})})]}),(0,n.jsx)("div",{className:"w-full h-full",children:(0,n.jsx)(k,{className:"h-full",selectedKeys:[z],mode:f?"horizontal":"inline",hidden:!f&&!j,onClick:function(){return g(!1)},children:B.map((function(e){return e.children?(0,n.jsx)(d.Z.SubMenu,{icon:e.icon&&(0,n.jsx)(e.icon,{}),title:e.label,children:(0,n.jsx)(d.Z.ItemGroup,{title:e.label,children:e.children.map((function(e){return(0,n.jsx)(d.Z.Item,{icon:e.icon&&(0,n.jsx)(e.icon,{}),children:(0,n.jsx)(b.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})},"route-".concat(e.label)):(0,n.jsx)(d.Z.Item,{icon:e.icon&&(0,n.jsx)(e.icon,{}),style:{border:0,display:"flex",alignItems:"center"},children:(0,n.jsx)(b.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})}),s&&s.showSearchBar&&(0,n.jsxs)("div",{className:"my-auto mx-3 md:w-80 lg:w-96 z-50",children:[(0,n.jsx)(m.Z.Search,{placeholder:s.placeholder||"Search",onSearch:T}),(0,n.jsx)(h.Z,{visible:O,onCancel:function(){I(!1)},okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},title:"Results",children:S&&S.length>0?s.searchBarResult(S):(0,n.jsx)(x.Z,{description:"No results found."})})]})]})})},C=t(13448),E=t(8145),O=t(87547),I=t(88641),_=t(27496),z=t(39101);function M(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function P(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(s){M(e,s,t[s])}))}return e}var T={labelCol:{span:24},wrapperCol:{span:24}},B={required:"This field is required!",types:{email:"This is not a valid email!"}},D=function(e){return function(s){z.ZP.send("default_service","template_n5698qg",{from_name:s.name,from_email:s.email,message:s.message},"user_Z0tDIaK634ZfJUrLfrywg").then((function(){C.Z.success({message:"Message sent! You will receive a response soon!"}),e.current.resetFields()}),(function(e){C.Z.error({message:"Your message was not sent"})}))}},q=function(e){var s=(0,a.useRef)();return(0,n.jsx)("div",{className:"overflow-hidden",children:(0,n.jsxs)(E.Z,P({ref:s},T,{onFinish:D(s),name:"nest-messages",validateMessages:B,children:[(0,n.jsx)(E.Z.Item,{name:"name",rules:[{required:!0}],children:(0,n.jsx)(m.Z,{placeholder:"Name",prefix:(0,n.jsx)(O.Z,{})})}),(0,n.jsx)(E.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,n.jsx)(m.Z,{placeholder:"Email",prefix:(0,n.jsx)(I.Z,{})})}),(0,n.jsx)(E.Z.Item,{name:"message",rules:[{required:!0}],children:(0,n.jsx)(m.Z.TextArea,{placeholder:"Message"})}),(0,n.jsx)(E.Z.Item,{wrapperCol:P({},T.wrapperCol,{offset:0}),children:(0,n.jsx)(u.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,n.jsx)(_.Z,{}),children:"Submit"})})]}))})},A=t(38545),H=t(28548),F=t(99121),R=function(e){return(0,n.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5 relative block z-50",children:[(0,n.jsxs)("div",{className:"text-center font-black",children:[(0,n.jsx)(A.Z,{className:"mr-3"}),(0,n.jsx)("h1",{className:"text-center font-black",children:"CONTACT"})]}),(0,n.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,n.jsx)("div",{className:"w-full md:w-1/2",children:(0,n.jsx)(q,{})}),(0,n.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,n.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,n.jsx)("p",{className:"text-justify",children:"Here my contact information... You can find me on social media"}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,n.jsx)(F.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,n.jsx)(F.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactMe"'})]}),(0,n.jsxs)("div",{className:"ml-auto inline-block pb-5",children:[(0,n.jsxs)("p",{className:"text-gray-800",children:[(0,n.jsx)(H.Z,{})," +51 922 193 513"]}),(0,n.jsxs)("a",{className:"text-gray-900",target:'mailto:salazar6cristopher@gmail.com?subject="ContactMe"',children:[(0,n.jsx)(I.Z,{})," salazar6cristopher@gmail.com"]})]})]})]}),(0,n.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})},G=t(53308),K=t(75162),L=function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(S,{}),(0,n.jsxs)("div",{children:[e,(0,n.jsx)(G.Z,{children:(0,n.jsx)(u.Z,{size:"large",icon:(0,n.jsx)(K.Z,{}),shape:"circle",type:"primary"})})]}),(0,n.jsx)(R,{})]})}},41125:function(e){e.exports={content:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],media:!1,theme:{extend:{}},variants:{extend:{}},plugins:[]}}}]);