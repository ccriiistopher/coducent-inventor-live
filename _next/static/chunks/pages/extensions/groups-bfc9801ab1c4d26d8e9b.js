(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[230],{64681:function(e,s,t){"use strict";var n=t(6700),r=t(71577),i=t(41638),a=t(11163),c=t(41664),l=t(85893);s.Z=function(e){var s=e.routes,t=(0,a.useRouter)();return(0,l.jsxs)("div",{className:"p-2",children:[(0,l.jsx)(r.Z,{className:"inline-block mr-2",icon:(0,l.jsx)(n.Z,{}),shape:"circle",onClick:function(){return t.back()}}),(0,l.jsx)(i.Z,{className:"inline-block",separator:">",children:s.map((function(e,s){return e.path?(0,l.jsx)(i.Z.Item,{children:(0,l.jsx)(c.default,{href:e.path,passHref:!0,children:(0,l.jsxs)("a",{children:[e.icon&&(0,l.jsx)(e.icon,{}),(0,l.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(s)):(0,l.jsxs)(i.Z.Item,{children:[e.icon&&(0,l.jsx)(e.icon,{}),(0,l.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(s))}))})]})}},81199:function(e,s,t){"use strict";t.d(s,{G:function(){return D}});var n=t(67294),r=t(11163),i=t(59271),a=t(36371),c=t(34707),l=t(40847),o=t(42762),u=t(71577),d=t(62306),x=t(86926),h=t.n(x),p=t(40926),m=t.n(p),f=h()(m()),j=t(41664),Z=t(85893),g=function(e){var s=(0,r.useRouter)(),t=function(e){var s=f.theme.screens[e],t=(0,n.useState)(!1),r=t[0],i=t[1],a=(0,n.useCallback)((function(e){e.matches?i(!0):i(!1)}),[]);return(0,n.useEffect)((function(){var e=window.matchMedia("(min-width: ".concat(s,")"));return e.addEventListener("change",a),e.matches&&i(!0),function(){return e.removeEventListener("change",a)}}),[]),r}("md"),x=(0,n.useState)(!1),h=x[0],p=x[1],m=(0,n.useState)(s.pathname),g=m[0],v=m[1];(0,n.useEffect)((function(){return v(s.pathname)}),[s.pathname]);var b=[{label:"Home",icon:i.Z,path:"/"},{label:"Extensions",icon:a.Z,children:[{label:"Groups",path:"/extensions/groups",icon:a.Z},{label:"All",path:"/extensions",icon:c.Z},{label:"Help",path:"/extensions/help",icon:l.Z}]}];return(0,Z.jsx)("div",{className:"shadow bg-white sticky top-0 z-30",children:(0,Z.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,Z.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,Z.jsx)(j.default,{href:"/",passHref:!0,children:(0,Z.jsx)("span",{className:"my-auto p-0 m-0 text-blue-400 text-lg font-black cursor-pointer",children:"TEDUSOFT"})}),(0,Z.jsx)("div",{className:"md:hidden ml-auto",children:(0,Z.jsx)(u.Z,{onClick:function(){return p(!h)},className:"p-3",children:(0,Z.jsx)(o.Z,{})})})]}),(0,Z.jsx)(d.Z,{selectedKeys:[g],mode:t?"horizontal":"inline",hidden:!t&&!h,children:b.map((function(e){return e.children?(0,Z.jsx)(d.Z.SubMenu,{icon:e.icon&&(0,Z.jsx)(e.icon,{}),title:e.label,children:(0,Z.jsx)(d.Z.ItemGroup,{title:e.label,children:e.children.map((function(e){return(0,Z.jsx)(d.Z.Item,{icon:e.icon&&(0,Z.jsx)(e.icon,{}),children:(0,Z.jsx)(j.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})},"route-".concat(e.label)):(0,Z.jsx)(d.Z.Item,{icon:e.icon&&(0,Z.jsx)(e.icon,{}),children:(0,Z.jsx)(j.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})]})})},v=t(92809),b=t(38648),w=t(22867),y=t(32787),N=t(89366),E=t(64302),O=t(29148),_=t(55365);function C(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?C(Object(t),!0).forEach((function(s){(0,v.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var I={labelCol:{span:24},wrapperCol:{span:24}},S={required:"This field is required!",types:{email:"This is not a valid email!"}},P=function(e){return function(s){_.ZP.send("default_service","template_n5698qg",{from_name:s.name,from_email:s.email,message:s.message},"user_Z0tDIaK634ZfJUrLfrywg").then((function(){b.Z.success({message:"Message sent! You will receive a response soon!"}),e.current.resetFields()}),(function(e){b.Z.error({message:"Your message was not sent"})}))}},T=function(e){var s=(0,n.useRef)();return(0,Z.jsx)("div",{className:"overflow-hidden",children:(0,Z.jsxs)(w.Z,k(k({ref:s},I),{},{onFinish:P(s),name:"nest-messages",validateMessages:S,children:[(0,Z.jsx)(w.Z.Item,{name:"name",rules:[{required:!0}],children:(0,Z.jsx)(y.Z,{placeholder:"Name",prefix:(0,Z.jsx)(N.Z,{})})}),(0,Z.jsx)(w.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,Z.jsx)(y.Z,{placeholder:"Email",prefix:(0,Z.jsx)(E.Z,{})})}),(0,Z.jsx)(w.Z.Item,{name:"message",rules:[{required:!0}],children:(0,Z.jsx)(y.Z.TextArea,{placeholder:"Message"})}),(0,Z.jsx)(w.Z.Item,{wrapperCol:k(k({},I.wrapperCol),{},{offset:0}),children:(0,Z.jsx)(u.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,Z.jsx)(O.Z,{}),children:"Submit"})})]}))})},z=t(75491),G=t(99121),H=function(e){return(0,Z.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,Z.jsxs)("div",{className:"text-center font-black",children:[(0,Z.jsx)(z.Z,{className:"mr-3"}),"CONTACT"]}),(0,Z.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,Z.jsx)("div",{className:"w-full md:w-1/2",children:(0,Z.jsx)(T,{})}),(0,Z.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,Z.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,Z.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,Z.jsx)("hr",{}),(0,Z.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,Z.jsx)(G.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,Z.jsx)(G.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,Z.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})},M=t(54075),L=t(56630);function D(e){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(g,{}),(0,Z.jsxs)("div",{className:"container mx-auto",children:[e,(0,Z.jsx)(M.Z,{children:(0,Z.jsx)(u.Z,{size:"large",icon:(0,Z.jsx)(L.Z,{}),shape:"circle",type:"primary"})})]}),(0,Z.jsx)(H,{})]})}},517:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return O},default:function(){return _}});var n=t(15968),r=t(65525),i=t(60331),a=t(69713),c=t(71577),l=t(81199),o=t(67294),u=t(41664),d=t(9008),x=t(64681),h=t(1413),p={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"}}]},name:"shopping-cart",theme:"outlined"},m=t(30076),f=function(e,s){return o.createElement(m.Z,(0,h.Z)((0,h.Z)({},e),{},{ref:s,icon:p}))};f.displayName="ShoppingCartOutlined";var j=o.forwardRef(f),Z=t(59271),g=t(36371),v=t(42764),b=t(40847),w=t(19671),y=t(71511),N=t(85893),E=function(e){var s=e.groups,t=e.indexedGroups;return(0,N.jsxs)("div",{className:"container mx-auto md:pl-0 pb-4",children:[(0,N.jsxs)(d.default,{children:[(0,N.jsx)("title",{children:"Extensions"}),(0,N.jsx)("meta",{name:"description",content:"Extension List from tedusoft"})]}),(0,N.jsx)(x.Z,{routes:[{title:"Home",path:"/",icon:Z.Z},{title:"Extensions"},{title:"Groups",icon:g.Z}]}),(0,N.jsx)(n.Z.Title,{level:1,underline:!0,className:"mx-3",children:"Extension Groups"}),(0,N.jsx)("div",{className:"px-4",children:(0,N.jsx)(r.ZP,{itemLayout:"vertical",size:"small",dataSource:s,header:(0,N.jsxs)("div",{children:["Total: ",s.length," group(s)"]}),bordered:!0,renderItem:function(e){var s=e.parent?t[e.parent][0]:null;return(0,N.jsxs)(r.ZP.Item,{className:"rounded bg-white relative",actions:[(0,N.jsxs)("div",{children:[(0,N.jsxs)(i.Z,{color:e.tagColor,children:[(0,N.jsx)(v.Z,{})," ",e.price?e.price:"FREE",s&&(0,N.jsx)(a.Z,{title:"If this group of extensions is free, it will be obtained when you buy ".concat(s.title),children:(0,N.jsx)(b.Z,{})})]}),(0,N.jsx)(c.Z,{shape:"circle",about:"Get it",icon:e.price?(0,N.jsx)(j,{}):(0,N.jsx)(w.Z,{})})]},"item-actions")],children:[(0,N.jsx)(r.ZP.Item.Meta,{avatar:e.icon?(0,N.jsx)(y.Z,{src:e.icon}):(0,N.jsx)(y.Z,{style:{backgroundColor:e.tagColor},children:e.title[0]}),title:(0,N.jsx)(u.default,{href:"/extensions/groups/".concat(e.path),children:(0,N.jsx)("a",{children:e.title})}),description:(0,N.jsxs)("div",{children:[s&&(0,N.jsxs)("p",{children:["It is part of:"," ",(0,N.jsx)(i.Z,{color:"blue",children:(0,N.jsx)(u.default,{href:"/extensions/groups/".concat(s.path),children:(0,N.jsx)("a",{className:"z-30",children:s.title})})})]}),(0,N.jsx)("p",{children:e.description})]})}),(0,N.jsx)("div",{className:"w-2 h-full top-0 left-0 absolute",style:{backgroundColor:e.tagColor}})]},e.path)}})})]})};E.getLayout=l.G;var O=!0,_=E},40926:function(e){e.exports={purge:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],darkMode:!1,theme:{extend:{}},variants:{extend:{}},plugins:[]}},94088:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extensions/groups",function(){return t(517)}])},9008:function(e,s,t){e.exports=t(70639)}},function(e){e.O(0,[662,767,425,429,87,774,888,179],(function(){return s=94088,e(e.s=s);var s}));var s=e.O();_N_E=s}]);