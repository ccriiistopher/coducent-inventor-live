(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{6175:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(2809),r=n(4026),s=n(5968),l=n(5893);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return(0,l.jsx)(r.Z,{components:{p:function(e){return(0,l.jsx)("p",o(o({},e),{},{className:"w-full"}))},ol:function(e){return(0,l.jsx)("ol",o(o({},e),{},{className:"list-decimal list-outside font-light pl-5"}))},ul:function(e){return(0,l.jsx)("ul",o(o({},e),{},{className:"list-disc list-outside font-light pl-5"}))},h1:function(e){return(0,l.jsx)(s.Z.Title,{level:1,children:e.children})},h2:function(e){return(0,l.jsx)(s.Z.Title,{level:2,children:e.children})},h3:function(e){return(0,l.jsx)(s.Z.Title,{level:3,children:e.children})},h4:function(e){return(0,l.jsx)(s.Z.Title,{level:4,children:e.children})},h5:function(e){return(0,l.jsx)(s.Z.Title,{level:5,children:e.children})},blockquote:function(e){return(0,l.jsx)("blockquote",o(o({},e),{},{className:"border-l-2 border-blue-400 bg-blue-100 p-3"}))},code:function(e){return(0,l.jsx)(s.Z.Paragraph,o(o({code:!0},e),{},{copyable:!0}))},a:function(e){return(0,l.jsx)(s.Z.Link,{copyable:!0,children:e.children})},img:function(e){var t=e.alt,n=/^(\[((\d+[%px]*)?-?(\d+[%px]*)?)?\])?(\["(.*)"\])?.*$/g.exec(t),i={style:{}};return n&&(n[3]&&(i.style.width=n[3]),n[4]&&(i.style.height=n[4]),n[6]&&(i.className=n[6])),(0,l.jsx)("img",o(o({},e),i))}},children:e.children})}},1144:function(e,t,n){"use strict";n.d(t,{G:function(){return M}});var i=n(8216),r=n(5997),s=n(4695),l=n(3444),a=n(268),o=n(2953),c=n(7294),d=n(1163),u=n(1664),p=n(9271),h=n(6371),m=n(2762),f=n(1577),x=n(5893);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,o.Z)(e);if(t){var r=(0,o.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,a.Z)(this,n)}}var b=function(e){(0,l.Z)(n,e);var t=g(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).state={open:!1},r.onResize=r.onResize.bind((0,s.Z)(r)),r.closeMenu=r.closeMenu.bind((0,s.Z)(r)),r.openMenu=r.openMenu.bind((0,s.Z)(r)),r.toggleMenu=r.toggleMenu.bind((0,s.Z)(r)),r.isMenuOpen=r.isMenuOpen.bind((0,s.Z)(r)),r.items=[{label:"Home",icon:p.Z,path:"/"},{label:"Extensions",icon:h.Z,path:"/extensions"}],r}return(0,r.Z)(n,[{key:"openMenu",value:function(){this.setState({open:!0}),document.querySelectorAll("div[data-area]").forEach((function(e){return e.classList.remove("hidden")}))}},{key:"closeMenu",value:function(){this.setState({open:!1}),document.querySelectorAll("div[data-area]").forEach((function(e){return e.classList.add("hidden")}))}},{key:"toggleMenu",value:function(){this.isMenuOpen()?this.closeMenu():this.openMenu()}},{key:"isMenuOpen",value:function(){return this.state.open}},{key:"onResize",value:function(e){this.state.open&&this.closeMenu()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this;return(0,x.jsx)("div",{className:"shadow bg-white sticky top-0 z-30",children:(0,x.jsxs)("div",{className:"text-gray-600 container mx-auto flex flex-col md:flex-row",children:[(0,x.jsxs)("div",{className:"flex md:flex-none flex-row px-4 py-2",children:[(0,x.jsx)("span",{className:"my-auto p-0 m-0 flex-grow text-blue-400 text-lg font-black",children:"TEDUSOFT"}),(0,x.jsx)("div",{className:"md:hidden",children:(0,x.jsx)(f.Z,{onClick:function(){return e.toggleMenu()},className:"p-3",children:(0,x.jsx)(m.Z,{})})})]}),(0,x.jsx)("div",{className:"flex flex-col md:flex-row md:flex-grow gap-4 hidden md:block","data-area":!0,children:(0,x.jsx)("div",{className:this.isMenuOpen()?"flex flex-col divide-y":"flex flex-row divide-x",children:this.items.map((function(t){return(0,x.jsx)(u.default,{href:t.path,passHref:!0,children:(0,x.jsxs)("button",{onMouseUp:function(){return e.toggleMenu()},className:"px-4 py-3 text-left font-semibold ".concat(t.path===e.props.router.pathname||e.props.router.pathname.split("/")[1]===t.path.replace("/","")?"bg-blue-400 text-white":"text-gray-500"),children:[(0,x.jsx)(t.icon,{})," ",t.label]})},t.path)}))})}),(0,x.jsx)("div",{className:"flex flex-col md:flex-row gap-4 hidden md:block","data-area":!0})]})})}}]),n}(c.Component),j=(0,d.withRouter)(b),v=n(2809),w=n(2867),y=n(5019),Z=n(9366),N=n(4302),_=n(9148);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={labelCol:{span:24},wrapperCol:{span:24}},R={required:"This field is required!",types:{email:"This is not a valid email!"}},E=function(e){return(0,x.jsx)("div",{className:"overflow-hidden",children:(0,x.jsxs)(w.Z,k(k({},P),{},{name:"nest-messages",validateMessages:R,children:[(0,x.jsx)(w.Z.Item,{name:"name",rules:[{required:!0}],children:(0,x.jsx)(y.Z,{placeholder:"Name",prefix:(0,x.jsx)(Z.Z,{})})}),(0,x.jsx)(w.Z.Item,{name:"email",rules:[{type:"email"}],children:(0,x.jsx)(y.Z,{placeholder:"Email",prefix:(0,x.jsx)(N.Z,{})})}),(0,x.jsx)(w.Z.Item,{name:"message",rules:[{required:!0}],children:(0,x.jsx)(y.Z.TextArea,{placeholder:"Message"})}),(0,x.jsx)(w.Z.Item,{wrapperCol:k(k({},P.wrapperCol),{},{offset:0}),children:(0,x.jsx)(f.Z,{htmlType:"submit",type:"primary",className:"w-full",icon:(0,x.jsx)(_.Z,{}),children:"Submit"})})]}))})},V=n(5491),C=n(9121),S=function(e){return(0,x.jsxs)("div",{id:"footer",className:"bg-gray-200 text-gray-900 text-white flex flex-col justify-items-center items-center pt-5 px-5",children:[(0,x.jsxs)("div",{className:"text-center font-black",children:[(0,x.jsx)(V.Z,{className:"mr-3"}),"CONTACT"]}),(0,x.jsxs)("div",{className:"w-full m-2 md:w-3/4 lg:3/5 rounded bg-gray-100 shadow px-5 pt-5 flex flex-col md:flex-row",children:[(0,x.jsx)("div",{className:"w-full md:w-1/2",children:(0,x.jsx)(E,{})}),(0,x.jsxs)("div",{className:"w-full md:w-1/2 px-5",children:[(0,x.jsx)("p",{className:"text-xl font-bold text-center",children:"SEND A MESSAGE"}),(0,x.jsx)("p",{className:"text-justify",children:"If you need our service, write to us and we will contact you."}),(0,x.jsx)("hr",{}),(0,x.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-x-2 my-3",children:[(0,x.jsx)(C.QZ,{url:"https://telegram.me/ccriistopher",target:"_blank"}),(0,x.jsx)(C.QZ,{url:'mailto:salazar6cristopher@gmail.com?subject="ContactUs"'})]})]})]}),(0,x.jsx)("div",{className:"text-center py-3",children:"Cristopher Salazar 2021"})]})};function M(e){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j,{}),(0,x.jsx)("div",{className:"container mx-auto",children:e}),(0,x.jsx)(S,{})]})}},3071:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var i=n(5152),r={site_url:"https://www.tedusoft.com",display_url:"https://www.tedusoft.com",backend:{name:"github",repo:"ccriiistopher/tedusoft-src",branch:"main",base_url:"https://auth.tedusoft.com",auth_endpoint:"auth"},media_folder:"public/img",public_folder:"img",collections:[{name:"posts",label:"Posts",folder:"content/posts/",extension:"json",create:!0,slug:"{{title}}",path:"{{extension_path}}/{{year}}-{{month}}-{{day}}/{{slug}}",preview_path:"labs/{{extension_path}}/{{title}}",sortable_fields:["extension_path","title","date","commit_date"],summary:"[{{extension_path | upper}}] {{title}} added on {{date | date('DD-MM-YYYY')}}",label_singular:"Post",view_groups:[{label:"Path",field:"extension_path"}],fields:[{label:"Title",name:"title",widget:"string"},{label:"Extension Path",name:"extension_path",widget:"relation",collection:"extensions",value_field:"path",search_fields:["extension_name"]},{label:"Title Color",name:"title_color",widget:"color",default:"#212121",required:!1},{label:"Title shadow color",name:"title_shadow",widget:"color",required:!1},{label:"Header Background",name:"header_background",widget:"image",required:!1},{label:"Header Background opacity",name:"header_b_opacity",widget:"string",default:"1.0",required:!1},{label:"Header Colors",name:"header_colors",widget:"list",field:{label:"Color",name:"gradient_color",widget:"color"},required:!1},{label:"Description",name:"description",widget:"markdown"},{label:"Short Description",name:"short_description",widget:"text",required:!1},{label:"Publisher",name:"publisher",widget:"string",default:"admin"},{label:"Date",name:"date",widget:"datetime"},{label:"Steps title",name:"steps_title",widget:"string",default:"Steps"},{label:"Steps",name:"steps",widget:"list",collapsed:!0,fields:[{label:"Title",name:"step_title",widget:"string"},{label:"Description",name:"step_description",widget:"markdown"},{label:"Images",name:"step_images",widget:"list",field:{label:"New Image",name:"step_image",widget:"image"}}]}]},{name:"extensions",label:"Extensions",folder:"content/extensions",extension:"json",create:!0,identifier_field:"path",editor:{preview:!0},fields:[{label:"Name",name:"name",widget:"string",required:!0},{label:"Path",name:"path",widget:"string",comment:"Used to name the file, must not contain any space.",pattern:["[a-zA-Z0-9-]+$","Must contain only word digits and none space."]},{label:"Creation Date",name:"date",widget:"datetime"},{label:"Short Description",name:"short_description",widget:"text"},{label:"Settings",name:"settings",widget:"object",fields:[{label:"Is main?",name:"main",widget:"boolean",default:!0},{label:"Parent",name:"parent",widget:"relation",collection:"extensions",value_field:"path",search_fields:["name"],display_fields:["name"],required:!1},{label:"Children",name:"children",widget:"relation",collection:"extensions",value_field:"path",search_fields:["name"],display_fields:["name"],required:!1,multiple:!0}]},{label:"Platforms",name:"platforms",widget:"relation",multiple:!0,collection:"editor_general",display_fields:["platform_list.*.name"],value_field:"platform_list.*.name",search_fields:["platform_list.*"],required:!1},{label:"Description",name:"description",widget:"markdown"},{label:"Thumbnails",name:"thumbnail",widget:"list",required:!1,field:{widget:"image",name:"image"}},{label:"Event Blocks",name:"events",widget:"extension-list",meta:void 0,required:!1,index_file:void 0},{label:"Methos Blocks",name:"methods",widget:"extension-list",meta:void 0,required:!1,index_file:void 0},{label:"Property Blocks",name:"properties",widget:"extension-list",meta:void 0,required:!1,index_file:void 0}]},{label:"Editor General",name:"editor_general",files:[{file:"content/platforms.json",name:"platforms",label:"Platforms",fields:[{name:"platform_list",widget:"list",fields:[{name:"name",label:"Name",widget:"string"},{name:"url",label:"URL",widget:"string",required:!1,default:"https://"},{name:"text_color",label:"Text Color",widget:"color"},{name:"background_color",label:"Background Color",widget:"color"}]}]},{file:"content/banners.json",name:"banners",label:"Banners",fields:[{name:"list",widget:"list",label:"List",fields:[{name:"banner_title",widget:"string",label:"Title"},{name:"banner_body",label:"Body",widget:"markdown"},{name:"image",label:"Image",widget:"image"},{name:"text_color",label:"Text Color",widget:"color"},{name:"background_color",label:"Background Color",widget:"color"}]}]}]}]},s=n(5968),l=n(1382),a=n(8216),o=n(5997),c=n(4695),d=n(3444),u=n(268),p=n(2953),h=n(2809),m=n(7294),f=n(5369),x=n(1577),g=n(9166),b=n(7764),j=n(1230),v=n(5746),w=n(5019),y=n(8086),Z=n(9650),N=n(2867),_=n(4277),O=n(1728),k=n(173),P=n(5893);function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,p.Z)(e);if(t){var r=(0,p.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,u.Z)(this,n)}}var E=function(e){(0,d.Z)(n,e);var t=R(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"render",value:function(){var e=this;return this.props.items&&0!=this.props.items.size?(0,P.jsx)(O.Z,{children:function(t){var n=t.height,i=t.width;return(0,P.jsx)(k.S_,{height:n,itemCount:e.props.items.size,itemSize:e.props.itemHeightProvider,ref:e.props.listRef,width:i,children:e.props.row})}}):(0,P.jsx)(_.Z,{})}}]),n}(m.Component),V=n(1977),C=n(3171),S=n(8212),M=n(2104);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,p.Z)(e);if(t){var r=(0,p.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,u.Z)(this,n)}}var q=function(e){return function(t){(0,d.Z)(i,t);var n=T(i);function i(t){var r;return(0,a.Z)(this,i),r=n.call(this,t),(0,h.Z)((0,c.Z)(r),"MDEditor",void 0),(0,h.Z)((0,c.Z)(r),"listRef",void 0),(0,h.Z)((0,c.Z)(r),"rowHeights",void 0),(0,h.Z)((0,c.Z)(r),"valuesFormRef",void 0),(0,h.Z)((0,c.Z)(r),"editorIndex",void 0),(0,h.Z)((0,c.Z)(r),"state",void 0),r.listRef=(0,m.createRef)(),r.rowHeights=(0,m.createRef)(),r.valuesFormRef=(0,m.createRef)(),r.editorIndex=-1,r.rowHeights.current={},r.getRowHeight=r.getRowHeight.bind((0,c.Z)(r)),r.setRowHeight=r.setRowHeight.bind((0,c.Z)(r)),r.toggleEditor=r.toggleEditor.bind((0,c.Z)(r)),r.toggleMdEditor=r.toggleMdEditor.bind((0,c.Z)(r)),r.addValue=r.addValue.bind((0,c.Z)(r)),r.removeValue=r.removeValue.bind((0,c.Z)(r)),r.getValueAt=r.getValueAt.bind((0,c.Z)(r)),r.Row=r.Row.bind((0,c.Z)(r)),r.state={editorVisible:!1,mdEditorVisible:!1},r.MDEditor=e.getWidget("markdown").control,r.props.value||r.props.onChange((0,f.aV)()),r}return(0,o.Z)(i,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"getRowHeight",value:function(e){return(this.rowHeights.current&&this.rowHeights.current[e])+16||82}},{key:"setRowHeight",value:function(e,t){this.rowHeights.current=I(I({},this.rowHeights.current),{},(0,h.Z)({},e,t)),this.listRef.current.resetAfterIndex(0===e?0:e-1)}},{key:"getValueAt",value:function(e){return this.props.value.get(e)||this.props.onChange(this.props.value.push((0,f.D5)())),this.props.value.get(e)}},{key:"addValue",value:function(e,t,n){var i=this.getValueAt(e).set(t,n),r=this.props.value.set(e,i);return this.props.onChange(r),i}},{key:"removeValue",value:function(e,t){if(t){var n=this.getValueAt(e).delete(t),i=this.props.value.set(e,n);return this.props.onChange(i),n}var r=this.props.value.delete(e);this.props.onChange(r)}},{key:"toggleMdEditor",value:function(){this.setState({mdEditorVisible:!this.state.mdEditorVisible})}},{key:"toggleEditor",value:function(){this.setState({editorVisible:!this.state.editorVisible})}},{key:"render",value:function(){var e=this;return(0,P.jsxs)("div",{className:"my-3 w-full",children:[(0,P.jsxs)(x.Z,{type:"primary",shape:"round",className:"w-full",onClick:this.toggleEditor,children:["Open Editor",this.props.value&&(0,P.jsx)(g.Z,{count:this.props.value.size})]}),(0,P.jsx)(b.Z,{title:"Editor",bodyStyle:{height:"calc(100vh - 110px)"},style:{height:"100vh",minWidth:"100vw",margin:0,top:0,left:0},visible:this.state.editorVisible,onCancel:this.toggleEditor,footer:(0,P.jsxs)(j.Z,{gutter:[16,16],children:[(0,P.jsx)(v.Z,{span:4,offset:12,children:(0,P.jsx)(x.Z,{onClick:function(){return e.getValueAt(e.props.value.size)},type:"primary",icon:(0,P.jsx)(V.Z,{}),children:"Add New"})}),(0,P.jsx)(v.Z,{span:8,children:(0,P.jsx)(w.Z.Search,{allowClear:!0,placeholder:"Search block...",onSearch:function(t){var n=-1;e.props.value.forEach((function(e,i){e.get("name")&&e.get("name").toLowerCase()===t.toLowerCase()&&(n=i)})),-1!=n?e.listRef.current.scrollToItem(n,"center"):y.ZP.info("Item not found.")}})})]}),children:(0,P.jsx)("div",{className:"h-full",children:(0,P.jsx)(E,{items:this.props.value,itemHeightProvider:this.getRowHeight,listRef:this.listRef,row:this.Row})})}),(0,P.jsx)(b.Z,{bodyStyle:{height:"calc(100vh - 110px)"},style:{height:"100vh",minWidth:"100vw",margin:0,top:0,left:0},title:"Description",visible:this.state.mdEditorVisible,onCancel:this.toggleMdEditor,footer:(0,P.jsx)(x.Z,{onClick:this.toggleMdEditor,children:"Close"}),children:this.props.value&&this.editorIndex>=0&&(0,P.jsxs)(j.Z,{gutter:[0,16],children:[(0,P.jsx)(v.Z,{span:12,children:(0,P.jsx)(this.MDEditor,I(I({},this.props),{},{value:this.getValueAt(this.editorIndex).get("description"),onChange:function(t){return e.addValue(e.editorIndex,"description",t)}}))}),(0,P.jsx)(v.Z,{span:12,children:(0,P.jsxs)(Z.Z,{direction:"vertical",className:"px-3",children:[(0,P.jsx)(s.Z.Title,{level:5,children:"Values"}),(0,P.jsxs)(N.Z,{layout:"inline",ref:this.valuesFormRef,onFinish:function(t){var n=e.getValueAt(e.editorIndex).get("params")||(0,f.aV)(),i=(0,f.D5)();t.name&&(i=i.set("name",t.name)),t.types&&(i=i.set("type",t.types)),t.default&&(i=i.set("default",t.default)),n=n.push(i),e.addValue(e.editorIndex,"params",n),e.valuesFormRef.current.resetFields()},children:[(0,P.jsx)(N.Z.Item,{name:"name",rules:[{required:!0}],className:"pt-3",children:(0,P.jsx)(w.Z,{placeholder:"Name"})}),(0,P.jsx)(N.Z.Item,{name:"type",children:(0,P.jsx)(w.Z,{placeholder:"Type(s)"})}),(0,P.jsx)(N.Z.Item,{name:"default",children:(0,P.jsx)(w.Z,{placeholder:"Default Value"})}),(0,P.jsx)(N.Z.Item,{children:(0,P.jsx)(x.Z,{icon:(0,P.jsx)(V.Z,{}),type:"primary",htmlType:"submit",className:"w-full",shape:"round",children:"Add"})})]}),this.getValueAt(this.editorIndex).get("params")&&(0,P.jsx)("div",{className:"max-h-96 overflow-y-scroll",children:(0,P.jsxs)("table",{className:"table-auto rounded overflow-hidden shadow",children:[(0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{className:"text-white bg-blue-400",children:[(0,P.jsx)("th",{className:"p-2",children:"Name"}),(0,P.jsx)("th",{className:"p-2",children:"Types"}),(0,P.jsx)("th",{className:"p-2",children:"Default Value"}),(0,P.jsx)("th",{className:"p-2"})]})}),(0,P.jsx)("tbody",{children:this.getValueAt(this.editorIndex).get("params").map((function(t,n){return(0,P.jsxs)("tr",{className:"divide-x divide-gray-100",children:[(0,P.jsx)("td",{className:"p-2",children:t.get("name")}),(0,P.jsx)("td",{className:"p-2",children:t.get("type","Not defined.")}),(0,P.jsx)("td",{className:"p-2",children:t.get("default","Not defined.")}),(0,P.jsx)("td",{className:"p-2",onClick:function(){var t=e.getValueAt(e.editorIndex).get("params");1===t.size?e.removeValue(e.editorIndex,"params"):(t=t.remove(n),e.addValue(e.editorIndex,"params",t))},children:(0,P.jsx)(C.Z,{})})]},"row-".concat(n))}))})]})})]})})]})})]})}},{key:"Row",value:function(e){var t=this,n=e.index,i=e.style,r=(0,m.useRef)(),s=(0,m.useState)(this.getValueAt(n)),l=s[0],a=s[1];return(0,m.useEffect)((function(){r.current&&t.setRowHeight(n,r.current.clientHeight)}),[r]),(0,P.jsx)("div",{style:i,children:(0,P.jsxs)("div",{ref:r,className:"rounded border-2 border-gray-200 px-6 py-3",children:[(0,P.jsxs)(j.Z,{align:"middle",className:"text-gray-800 cursor-pointer",children:[(0,P.jsx)(v.Z,{span:18,children:(0,P.jsxs)(Z.Z,{direction:"horizontal",children:[(0,P.jsx)("span",{className:"text-gray-900 rounded bg-gray-200 p-2",children:n+1}),(0,P.jsx)("span",{className:"font-bold text-xl",children:l.get("name")})]})}),(0,P.jsx)(v.Z,{span:4,children:(0,P.jsxs)(Z.Z,{direction:"horizontal",children:[(0,P.jsx)(x.Z,{onClick:function(){t.editorIndex=n,t.toggleMdEditor()},icon:(0,P.jsx)(S.Z,{}),children:"View Description"}),(0,P.jsx)(x.Z,{icon:(0,P.jsx)(C.Z,{}),onClick:function(){t.removeValue(n)}})]})})]}),(0,P.jsx)(Z.Z,{direction:"vertical",className:"py-2",children:(0,P.jsxs)(N.Z,{layout:"inline",initialValues:{name:l.get("name"),defValue:l.get("defValue")},onFinish:function(e){e.name&&a(t.addValue(n,"name",e.name)),e.defValue&&a(t.addValue(n,"defValue",e.defValue))},children:[(0,P.jsx)(N.Z.Item,{name:"name",children:(0,P.jsx)(w.Z,{placeholder:"Name"})}),(0,P.jsx)(N.Z.Item,{name:"defValue",children:(0,P.jsx)(w.Z,{placeholder:"Default Value"})}),(0,P.jsx)(N.Z.Item,{children:(0,P.jsx)(x.Z,{icon:(0,P.jsx)(M.Z,{}),type:"primary",htmlType:"submit"})})]})})]})})}}]),i}(m.Component)},A=n(8419),H=n.n(A),z=n(9627),B=n(381),L=n.n(B);var F=function(e){var t,n=e.entry,i={name:(t=n.toJS().data).name,path:t.path,description:t.description,thumbnail:t.thumbnail||[],date:L()(t.date).format("LLL"),platforms:t.platforms||["Kodular","AppInventor"],events:t.events||[],methods:t.methods||[],properties:t.properties||[],shortDescription:t.short_description||""};return(0,P.jsx)(H(),{stylesheet:'\n        body{\n          font-family: "Raleway", sans-serif !important;\n        }      \n      ',children:(0,P.jsx)(z.default,{extension:i})})},U=(0,i.default)((function(){return Promise.all([n.e(263),n.e(764)]).then(n.t.bind(n,7490,23)).then((function(e){e.registerPreviewStyle("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"),e.registerPreviewStyle("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;500;700&display=swap"),e.registerPreviewStyle("https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css"),e.registerWidget("extension-list",q(e)),e.registerPreviewTemplate("extensions",F),e.init({config:r})}))}),{ssr:!1,loading:function(){return(0,P.jsxs)("div",{className:"mt-5 block text-center h-screen w-full flex flex-col justify-center items-center",children:[(0,P.jsx)(s.Z.Text,{className:"font-weight-bold block mb-2 text-xl",children:"Going to admin panel..."}),(0,P.jsx)(l.Z,{spinning:!0,size:"large"})]})},loadableGenerated:{webpack:function(){return[7490]},modules:["admin.tsx -> netlify-cms-app"]}});var G=function(){return(0,P.jsx)(U,{})};U.displayName="CMSComponent",G.displayName="AdminPage";var W=G},9627:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var i=n(5968),r=n(1474),s=n(1144),l=n(6175),a=n(1664),o=n(5893),c=function(e){var t=e.extension,n=e.platforms;return(0,o.jsxs)("div",{className:"m-3",children:[(0,o.jsx)(i.Z.Title,{level:1,underline:!0,className:"m-0 p-0",children:t.name}),(0,o.jsx)(r.Z,{type:"info",showIcon:!0,message:(0,o.jsxs)("div",{className:"container flex flex-row flex-wrap",children:[(0,o.jsx)("span",{className:"mr-1",children:"It is supported for:"}),n?n.map((function(e){return(0,o.jsx)(a.default,{href:e.url,children:(0,o.jsx)("a",{className:"mx-1",children:e.name})},"p-".concat(e.name))})):t.platforms.join(", ")]})}),(0,o.jsxs)("p",{className:"my-2 font-semibold",children:["Poseted on ",t.date]}),(0,o.jsx)(l.Z,{children:t.description})]})};c.getLayout=s.G;var d=!0;t.default=c},2347:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(3071)}])}},function(e){e.O(0,[774,885,536,26,737,888,179],(function(){return t=2347,e(e.s=t);var t}));var t=e.O();_N_E=t}]);