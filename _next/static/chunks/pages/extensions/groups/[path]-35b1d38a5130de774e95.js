(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{64681:function(e,t,s){"use strict";var n=s(6700),r=s(71577),i=s(41638),l=s(11163),c=s(41664),a=s(85893);t.Z=function(e){var t=e.routes,s=(0,l.useRouter)();return(0,a.jsxs)("div",{className:"p-2",children:[(0,a.jsx)(r.Z,{className:"inline-block mr-2",icon:(0,a.jsx)(n.Z,{}),shape:"circle",onClick:function(){return s.back()}}),(0,a.jsx)(i.Z,{className:"inline-block",separator:">",children:t.map((function(e,t){return e.path?(0,a.jsx)(i.Z.Item,{children:(0,a.jsx)(c.default,{href:e.path,passHref:!0,children:(0,a.jsxs)("a",{children:[e.icon&&(0,a.jsx)(e.icon,{}),(0,a.jsx)("span",{className:"mx-1",children:e.title})]})})},"p-".concat(t)):(0,a.jsxs)(i.Z.Item,{children:[e.icon&&(0,a.jsx)(e.icon,{}),(0,a.jsx)("span",{className:"mx-1",children:e.title})]},"p-".concat(t))}))})]})}},26175:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(92809),r=s(94026),i=s(15968),l=s(85893);function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e){return(0,l.jsx)(r.Z,{components:{p:function(e){return(0,l.jsx)("p",a(a({},e),{},{className:"w-full whitespace-pre-wrap"}))},ol:function(e){return(0,l.jsx)("ol",a(a({},e),{},{className:"list-decimal list-outside font-light pl-5"}))},ul:function(e){return(0,l.jsx)("ul",a(a({},e),{},{className:"list-disc list-outside font-light pl-5"}))},h1:function(e){return(0,l.jsx)(i.Z.Title,{level:1,children:e.children})},h2:function(e){return(0,l.jsx)(i.Z.Title,{level:2,children:e.children})},h3:function(e){return(0,l.jsx)(i.Z.Title,{level:3,children:e.children})},h4:function(e){return(0,l.jsx)(i.Z.Title,{level:4,children:e.children})},h5:function(e){return(0,l.jsx)(i.Z.Title,{level:5,children:e.children})},blockquote:function(e){return(0,l.jsx)("blockquote",a(a({},e),{},{className:"border-l-2 border-blue-400 bg-blue-100 px-3 my-1"}))},code:function(e){return(0,l.jsx)(i.Z.Paragraph,a(a({code:!0},e),{},{copyable:!0}))},a:function(e){return(0,l.jsx)(i.Z.Link,{copyable:!0,children:e.children})},img:function(e){var t=e.alt,s=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(t),n={style:{}};return s&&(s[3]&&(n.style.width=s[3]),s[4]&&(n.style.height=s[4]),s[6]&&(n.className=s[6])),(0,l.jsx)("img",a(a({},e),n))}},children:e.children})}},44212:function(e,t,s){"use strict";var n=s(65525),r=s(71577),i=s(98453),l=s(60331),c=s(41664),a=s(19671),o=s(85893);t.Z=function(e){var t=e.data,s=e.pagination,d=void 0!==s&&s,u=e.group,x=e.groups;return(0,o.jsx)(n.ZP,{itemLayout:"horizontal",size:"small",pagination:d&&{onChange:function(e){},pageSize:10},dataSource:t,header:(0,o.jsxs)("div",{children:["Total: ",t.length," extension(s)"]}),bordered:!0,renderItem:function(e){var t=u||(e.group&&x[e.group]?x[e.group][0]:null);return(0,o.jsx)(n.ZP.Item,{className:"rounded bg-white relative",actions:[!u&&(0,o.jsx)(c.default,{href:"/extensions/groups/".concat(e.group),children:(0,o.jsx)(r.Z,{icon:(0,o.jsx)(a.Z,{})})})],children:(0,o.jsx)(n.ZP.Item.Meta,{avatar:t?t.icon?(0,o.jsx)(i.C,{src:t.icon}):(0,o.jsx)(i.C,{style:{backgroundColor:t.tagColor},children:t.title[0]}):(0,o.jsx)(i.C,{children:e.name[0]}),title:(0,o.jsx)(c.default,{href:"/extensions/".concat(e.path),children:(0,o.jsx)("a",{children:e.name})}),description:(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:e.date}),!u&&t&&(0,o.jsxs)("p",{children:["From group:"," ",(0,o.jsx)(l.Z,{color:"blue",children:(0,o.jsx)(c.default,{href:"/extensions/groups/".concat(t.path),children:(0,o.jsx)("a",{children:t.title})})})]})]})})},e.name)}})}},81199:function(e,t,s){"use strict";s.d(t,{G:function(){return q}});var n=s(67294),r=s(11163),i=s(59271),l=s(36371),c=s(34707),a=s(40847),o=s(42762),d=s(71577),u=s(62306),x=s(86926),h=s.n(x),p=s(40926),m=s.n(p),f=h()(m()),j=s(41664),g=s(85893),Z=function(e){var t=(0,r.useRouter)(),s=function(e){var t=f.theme.screens[e],s=(0,n.useState)(!1),r=s[0],i=s[1],l=(0,n.useCallback)((function(e){e.matches?i(!0):i(!1)}),[]);return(0,n.useEffect)((function(){var e=window.matchMedia("(min-width: ".concat(t,")"));return e.addEventListener("change",l),e.matches&&i(!0),function(){return e.removeEventListener("change",l)}}),[]),r}("md"),x=(0,n.useState)(!1),h=x[0],p=x[1],m=(0,n.useState)(t.pathname),Z=m[0],v=m[1];(0,n.useEffect)((function(){return v(t.pathname)}),[t.pathname]);var b=[{label:"Home",icon:i.Z,path:"/"},{label:"Extensions",icon:l.Z,children:[{label:"Groups",path:"/extensions/groups",icon:l.Z},{label:"All",path:"/extensions",icon:c.Z},{label:"Help",path:"/extensions/help",icon:a.Z}]}];return(0,g.jsx)("div",{className:"shadow bg-white sticky top-0 z-30",children:(0,g.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,g.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,g.jsx)(j.default,{href:"/",passHref:!0,children:(0,g.jsx)("span",{className:"my-auto p-0 m-0 text-blue-400 text-lg font-black cursor-pointer",children:"TEDUSOFT"})}),(0,g.jsx)("div",{className:"md:hidden ml-auto",children:(0,g.jsx)(d.Z,{onClick:function(){return p(!h)},className:"p-3",children:(0,g.jsx)(o.Z,{})})})]}),(0,g.jsx)(u.Z,{selectedKeys:[Z],mode:s?"horizontal":"inline",hidden:!s&&!h,children:b.map((function(e){return e.children?(0,g.jsx)(u.Z.SubMenu,{icon:e.icon&&(0,g.jsx)(e.icon,{}),title:e.label,children:(0,g.jsx)(u.Z.ItemGroup,{title:e.label,children:e.children.map((function(e){return(0,g.jsx)(u.Z.Item,{icon:e.icon&&(0,g.jsx)(e.icon,{}),children:(0,g.jsx)(j.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})},"route-".concat(e.label)):(0,g.jsx)(u.Z.Item,{icon:e.icon&&(0,g.jsx)(e.icon,{}),children:(0,g.jsx)(j.default,{passHref:!0,href:e.path,children:e.label})},e.path)}))})]})})},v=s(92809),b=s(38648),w=s(22867),y=s(55019),N=s(89366),O=s(64302),P=s(29148),k=s(55365);function E(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function C(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?E(Object(s),!0).forEach((function(t){(0,v.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var I={labelCol:{span:24},wrapperCol:{span:24}},_={required:"This field is required!",types:{email:"This is not a valid email!"}},S=function(e){return function(t){k.ZP.send("default_service","template_n5698qg",{from_name:t.name,from_email:t.email,message:t.message},"user_Z0tDIaK634ZfJUrLfrywg").then((function(){b.Z.success({message:"Message sent! You will receive a response soon!"}),e.current.resetFields()}),(function(e){b.Z.error({message:"Your message was not sent"})}))}},T=function(e){var t=(0,n.useRef)();return(0,g.jsx)("div",{className:"overflow-hidden",children:(0,g.jsxs)(w.Z,C(C({ref:t},I),{},{onFinish:S(t),name:"nest-messages",validateMessages:_,children:[(0,g.jsx)(w.Z.Item,{name:"name",rules:[{required:!0}],children:(0,g.jsx)(y.Z,{placeholder:"Name",prefix:(0,g.jsx)(N.Z,{})})}),(0,g.jsx)(w.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,g.jsx)(y.Z,{placeholder:"Email",prefix:(0,g.jsx)(O.Z,{})})}),(0,g.jsx)(w.Z.Item,{name:"message",rules:[{required:!0}],children:(0,g.jsx)(y.Z.TextArea,{placeholder:"Message"})}),(0,g.jsx)(w.Z.Item,{wrapperCol:C(C({},I.wrapperCol),{},{offset:0}),children:(0,g.jsx)(d.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,g.jsx)(P.Z,{}),children:"Submit"})})]}))})},D=s(75491),z=s(99121),G=function(e){return(0,g.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,g.jsxs)("div",{className:"text-center font-black",children:[(0,g.jsx)(D.Z,{className:"mr-3"}),"CONTACT"]}),(0,g.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,g.jsx)("div",{className:"w-full md:w-1/2",children:(0,g.jsx)(T,{})}),(0,g.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,g.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,g.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,g.jsx)("hr",{}),(0,g.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,g.jsx)(z.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,g.jsx)(z.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,g.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})},L=s(54075),M=s(56630);function q(e){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z,{}),(0,g.jsxs)("div",{className:"container mx-auto",children:[e,(0,g.jsx)(L.Z,{children:(0,g.jsx)(d.Z,{size:"large",icon:(0,g.jsx)(M.Z,{}),shape:"circle",type:"primary"})})]}),(0,g.jsx)(G,{})]})}},16750:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return N}});var n=s(91473),r=s(15968),i=s(1474),l=s(27279),c=s(65525),a=s(60331),o=s(69713),d=s(81199),u=s(64681),x=(s(67294),s(41664)),h=s(9008),p=s(59271),m=s(36371),f=s(42764),j=s(40847),g=s(26175),Z=s(53944),v=s(44212),b=s(71511),w=s(85893),y=function(e){var t=e.group,s=e.groupChildren,d=e.platforms,y=e.parent;return(0,w.jsxs)("div",{className:"container mx-auto md:pl-0 pb-4",children:[(0,w.jsx)(h.default,{children:(0,w.jsx)("title",{children:"".concat(t.title," - Group")})}),(0,w.jsx)(u.Z,{routes:[{title:"Home",path:"/",icon:p.Z},{title:"Extensions"},{title:"Groups",icon:m.Z,path:"/extensions/groups"},{title:"..."}]}),(0,w.jsxs)("div",{className:"md:grid md:grid-cols-5",children:[(0,w.jsx)("div",{className:"hidden md:block md:col-start-1 md:col-span-1",children:(0,w.jsxs)(n.Z,{className:"mt-6 pt-6",children:[(0,w.jsx)(n.Z.Link,{href:"#overview",title:"Overview"}),(0,w.jsx)(n.Z.Link,{href:"#comments",title:"Comments"})]})}),(0,w.jsxs)("div",{className:"md:col-start-2 md:col-span-4",children:[(0,w.jsxs)("div",{id:"overview",children:[(0,w.jsx)(r.Z.Title,{level:1,underline:!0,className:"m-0 p-0",children:t.title}),(0,w.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,w.jsx)(i.Z,{type:"info",className:"my-1",showIcon:!0,message:(0,w.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,w.jsx)("span",{className:"mr-1",children:"It is supported for:"}),d?d.map((function(e){return(0,w.jsx)(x.default,{href:e.url,children:(0,w.jsx)("a",{className:"mx-1",children:e.name})},"p-".concat(e.name))})):"Selected platforms"]})}),y&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i.Z,{type:"info",showIcon:!0,message:(0,w.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,w.jsx)("span",{className:"mr-1",children:"It is part of "}),(0,w.jsx)(x.default,{href:"/extensions/groups/".concat(y.path),children:(0,w.jsx)("a",{className:"mx-1",children:y.title})})]})}),(0,w.jsx)(i.Z,{type:"info",showIcon:!0,message:(0,w.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,w.jsxs)("span",{className:"mr-1",children:["To get this extension group, please go to:"," "]}),(0,w.jsx)(x.default,{href:"/extensions/groups/".concat(y.path),children:(0,w.jsx)("a",{className:"mx-1",children:y.title})})]})})]})]}),(0,w.jsx)(g.Z,{children:t.description})]}),(0,w.jsxs)(l.Z,{defaultActiveKey:["extensions","groups"],bordered:!1,children:[s.extensions&&(0,w.jsx)(l.Z.Panel,{header:"Extensions",id:"extensions",children:(0,w.jsx)(v.Z,{data:s.extensions,pagination:!0,group:t})},"extensions"),s.groups&&(0,w.jsx)(l.Z.Panel,{header:"Extension Groups",id:"groups",children:(0,w.jsx)(c.ZP,{itemLayout:"vertical",size:"small",dataSource:s.groups,bordered:!0,renderItem:function(e){return(0,w.jsxs)(c.ZP.Item,{className:"rounded bg-white relative",actions:[(0,w.jsxs)(a.Z,{color:e.tagColor,children:[(0,w.jsx)(f.Z,{})," ",e.price?e.price:"FREE",(0,w.jsx)(o.Z,{title:"If this group of extensions is free, it will be obtained when you buy ".concat(t.title),children:(0,w.jsx)(j.Z,{})})]},"item-price")],children:[(0,w.jsx)(c.ZP.Item.Meta,{avatar:e.icon?(0,w.jsx)(b.Z,{src:e.icon}):(0,w.jsx)(b.Z,{style:{backgroundColor:e.tagColor},children:e.title[0]}),title:(0,w.jsx)("a",{href:e.path,children:e.title}),description:e.description}),(0,w.jsx)(x.default,{href:"/extensions/groups/".concat(e.path),children:(0,w.jsx)("a",{className:"w-full h-full top-0 left-0 absolute"})})]},e.path)}})},"groups")]}),(0,w.jsx)("div",{}),(0,w.jsx)("div",{id:"comments",children:(0,w.jsx)(Z.ZP.DiscussionEmbed,{shortname:"tedusoft",config:{url:"https://www.tedusoft.com/extensions/groups/".concat(t.path),identifier:"#".concat(t.path),title:"".concat(t.title)}})})]})]})]})};y.getLayout=d.G;var N=!0;t.default=y},40926:function(e){e.exports={purge:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],darkMode:!1,theme:{extend:{}},variants:{extend:{}},plugins:[]}},6199:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extensions/groups/[path]",function(){return s(16750)}])}},function(e){e.O(0,[662,866,425,992,429,844,87,607,774,888,179],(function(){return t=6199,e(e.s=t);var t}));var t=e.O();_N_E=t}]);