(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{22347:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return i(39981)}])},39981:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ne}});var n=i(85893),r=i(5152),l={site_url:"https://www.tedusoft.com",display_url:"https://www.tedusoft.com",backend:{name:"github",repo:"ccriiistopher/tedusoft-src",branch:"main",base_url:"https://auth.tedusoft.com",auth_endpoint:"auth"},media_folder:"public/img",public_folder:"img",collections:[{name:"posts",label:"Posts",folder:"content/posts/",extension:"json",create:!0,slug:"{{title}}",path:"{{extension_path}}/{{year}}-{{month}}-{{day}}/{{slug}}",preview_path:"labs/{{extension_path}}/{{title}}",sortable_fields:["extension_path","title","date","commit_date"],summary:"[{{extension_path | upper}}] {{title}} added on {{date | date('DD-MM-YYYY')}}",label_singular:"Post",view_groups:[{label:"Path",field:"extension_path"}],fields:[{label:"Title",name:"title",widget:"string"},{label:"Extension Path",name:"extension_path",widget:"relation",collection:"extensions",value_field:"path",search_fields:["extension_name"]},{label:"Title Color",name:"title_color",widget:"color",default:"#212121",required:!1},{label:"Title shadow color",name:"title_shadow",widget:"color",required:!1},{label:"Header Background",name:"header_background",widget:"image",required:!1},{label:"Header Background opacity",name:"header_b_opacity",widget:"string",default:"1.0",required:!1},{label:"Header Colors",name:"header_colors",widget:"list",field:{label:"Color",name:"gradient_color",widget:"color"},required:!1},{label:"Description",name:"description",widget:"markdown"},{label:"Short Description",name:"short_description",widget:"text",required:!1},{label:"Publisher",name:"publisher",widget:"string",default:"admin"},{label:"Date",name:"date",widget:"datetime"},{label:"Steps title",name:"steps_title",widget:"string",default:"Steps"},{label:"Steps",name:"steps",widget:"list",collapsed:!0,fields:[{label:"Title",name:"step_title",widget:"string"},{label:"Description",name:"step_description",widget:"markdown"},{label:"Images",name:"step_images",widget:"list",field:{label:"New Image",name:"step_image",widget:"image"}}]}]},{name:"docs",label:"Docs",folder:"content/docs",extension:"json",create:!0,identifier_field:"path",editor:{preview:!0},preview_path:"docs/{{path}}",summary:"{{name}}",sortable_fields:["name","group"],fields:[{label:"Name",name:"name",widget:"string",required:!0},{label:"Path",name:"path",widget:"string",comment:"Used to name the file, must not contain any space.",pattern:["[a-zA-Z0-9-]+$","Must contain only word digits and none space."]},{label:"Creation Date",name:"date",widget:"datetime"},{label:"Group",name:"group",widget:"relation",collection:"extensions",value_field:"path",search_fields:["title"],display_fields:["title"],required:!1},{label:"Description",name:"description",widget:"markdown"},{label:"Event Blocks",name:"events",widget:"extension-list",meta:void 0,required:!1,index_file:void 0},{label:"Method Blocks",name:"methods",widget:"extension-list",meta:void 0,required:!1,index_file:void 0},{label:"Property Blocks",name:"properties",widget:"extension-list",meta:void 0,required:!1,index_file:void 0}]},{label:"Editor General",name:"editor_general",files:[{file:"content/platforms.json",name:"platforms",label:"Platforms",fields:[{name:"platform_list",widget:"list",fields:[{name:"name",label:"Name",widget:"string"},{name:"url",label:"URL",widget:"string",required:!1,default:"https://"},{name:"text_color",label:"Text Color",widget:"color"},{name:"background_color",label:"Background Color",widget:"color"}]}]},{file:"content/banners.json",name:"banners",label:"Banners",fields:[{name:"list",widget:"list",label:"List",fields:[{name:"banner_title",widget:"string",label:"Title"},{name:"banner_body",label:"Body",widget:"markdown"},{name:"image",label:"Image",widget:"image",required:!1},{name:"text_color",label:"Text Color",widget:"color"},{name:"background_color",label:"Background Color",widget:"color"},{name:"url",label:"Url",widget:"string",required:!1},{name:"mobile",label:"For android",widget:"boolean"}]}]},{file:"content/ads.json",name:"ads",label:"Ads",fields:[{name:"list",widget:"list",label:"List",fields:[{name:"title",widget:"string",label:"Title"},{name:"body",label:"Body",widget:"markdown"},{name:"image",label:"Image",widget:"image",required:!1},{name:"text_color",label:"Text Color",widget:"color"},{name:"background_color",label:"Background Color",widget:"color"},{name:"url",label:"Url",widget:"string",required:!1},{name:"mobile",label:"For android",widget:"boolean"}]}]},{file:"content/faq.json",name:"faq",label:"FAQ",fields:[{name:"list",widget:"list",label:"List",fields:[{name:"title",widget:"string",label:"Title"},{name:"body",label:"Body",widget:"markdown"}]}]}]},{label:"Extensions Groups",name:"extensions",folder:"content/extension-groups",extension:"json",create:!0,identifier_field:"path",fields:[{name:"title",label:"Title",widget:"string",required:!0},{name:"path",label:"Path",widget:"string",required:!0},{name:"description",label:"Description",widget:"markdown",required:!0},{label:"Short Description",name:"short_description",widget:"text",required:!1},{label:"Platforms",name:"platforms",widget:"relation",multiple:!0,collection:"editor_general",display_fields:["platform_list.*.name"],value_field:"platform_list.*.name",search_fields:["platform_list.*"],required:!1},{name:"media",label:"Media",widget:"list",field:{name:"file",label:"File",widget:"file"},required:!1},{name:"price",label:"Price",widget:"string",required:!1},{name:"paypal_link",label:"Paypal Link",widget:"string",required:!1},{name:"download_link",label:"Download Link",widget:"string",required:!1},{label:"Parent",name:"parent",widget:"relation",collection:"extensions",value_field:"path",search_fields:["title"],display_fields:["title"],required:!1},{label:"Tag Color",name:"tag_color",widget:"color",required:!1,default:"green"},{label:"Icon",name:"icon",widget:"image",required:!1}]}]},a=i(74622),o=i(11382),s=i(28520),d=i.n(s),c=i(67294),u=i(35369),p=i(71577),f=i(63922),m=i(19562),h=i(71230),g=i(15746),b=i(79531),w=i(12461),x=i(26713),v=i(8145),y=i(62986),j=i(11728),_=i(52848);function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=V(e);if(t){var r=V(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return P(this,i)}}var E=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(a,e);var t,i,r,l=R(a);function a(){return k(this,a),l.apply(this,arguments)}return t=a,(i=[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"render",value:function(){var e=this;return this.props.items&&0!=this.props.items.size?(0,n.jsx)(j.Z,{children:function(t){var i=t.height,r=t.width;return(0,n.jsx)(_.S_,{height:i,itemCount:e.props.items.size,itemSize:e.props.itemHeightProvider,ref:e.props.listRef,width:r,children:e.props.row})}}):(0,n.jsx)(y.Z,{})}}])&&Z(t.prototype,i),r&&Z(t,r),a}(c.Component),O=i(64789),q=i(48689),S=i(86548),I=i(60219);function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t,i,n,r,l,a){try{var o=e[l](a),s=o.value}catch(d){return void i(d)}o.done?t(s):Promise.resolve(s).then(n,r)}function H(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){A(e,t,i[t])}))}return e}function L(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?T(e):t}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=B(e);if(t){var r=B(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return L(this,i)}}var G=function(e){return function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(s,t);var i,r,l,o=U(s);function s(t){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(i=o.call(this,t)).listRef=(0,c.createRef)(),i.rowHeights=(0,c.createRef)(),i.valuesFormRef=(0,c.createRef)(),i.editorIndex=-1,i.rowHeights.current={},i.getRowHeight=i.getRowHeight.bind(T(i)),i.setRowHeight=i.setRowHeight.bind(T(i)),i.toggleEditor=i.toggleEditor.bind(T(i)),i.toggleMdEditor=i.toggleMdEditor.bind(T(i)),i.addValue=i.addValue.bind(T(i)),i.removeValue=i.removeValue.bind(T(i)),i.getValueAt=i.getValueAt.bind(T(i)),i.Row=i.Row.bind(T(i)),i.saveParams=i.saveParams.bind(T(i)),i.state={editorVisible:!1,mdEditorVisible:!1},i.MDEditor=e.getWidget("markdown").control,i.props.value||i.props.onChange((0,u.aV)()),i}return i=s,(r=[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"getRowHeight",value:function(e){return(this.rowHeights.current&&this.rowHeights.current[e])+16||82}},{key:"setRowHeight",value:function(e,t){this.rowHeights.current=M({},this.rowHeights.current,A({},e,t)),this.listRef.current.resetAfterIndex(0===e?0:e-1)}},{key:"getValueAt",value:function(e){return this.props.value.get(e)||this.props.onChange(this.props.value.push((0,u.D5)())),this.props.value.get(e)}},{key:"addValue",value:function(e,t,i){var n=this.getValueAt(e).set(t,i),r=this.props.value.set(e,n);return this.props.onChange(r),n}},{key:"removeValue",value:function(e,t){if(t){var i=this.getValueAt(e).delete(t),n=this.props.value.set(e,i);return this.props.onChange(n),i}var r=this.props.value.delete(e);this.props.onChange(r)}},{key:"toggleMdEditor",value:function(){this.setState({mdEditorVisible:!this.state.mdEditorVisible})}},{key:"toggleEditor",value:function(){this.setState({editorVisible:!this.state.editorVisible})}},{key:"saveParams",value:function(e){var t=this.getValueAt(this.editorIndex).get("params")||(0,u.aV)();if(!(t.filter((function(t){return t.get("name")===e.name})).size>0)){var i=(0,u.D5)();e.name&&(i=i.set("name",e.name)),e.type&&(i=i.set("type",e.type)),e.default&&(i=i.set("default",e.default)),this.addValue(this.editorIndex,"params",t.push(i))}}},{key:"render",value:function(){var e,t=this;return(0,n.jsxs)("div",{className:"my-3 w-full",children:[(0,n.jsxs)(p.Z,{type:"primary",shape:"round",className:"w-full",onClick:this.toggleEditor,children:["Open Editor",this.props.value&&(0,n.jsx)(f.Z,{count:this.props.value.size})]}),(0,n.jsx)(m.Z,{title:"Editor",bodyStyle:{height:"calc(100vh - 110px)"},style:{height:"100vh",minWidth:"100vw",margin:0,top:0,left:0},visible:this.state.editorVisible,onCancel:this.toggleEditor,footer:(0,n.jsxs)(h.Z,{gutter:[16,16],children:[(0,n.jsx)(g.Z,{span:4,offset:12,children:(0,n.jsx)(p.Z,{onClick:function(){return t.getValueAt(t.props.value.size)},type:"primary",icon:(0,n.jsx)(O.Z,{}),children:"Add New"})}),(0,n.jsx)(g.Z,{span:8,children:(0,n.jsx)(b.Z.Search,{allowClear:!0,placeholder:"Search block...",onSearch:function(e){var i=-1;t.props.value.forEach((function(t,n){t.get("name")&&t.get("name").toLowerCase()===e.toLowerCase()&&(i=n)})),-1!=i?t.listRef.current.scrollToItem(i,"center"):w.ZP.info("Item not found.")}})})]}),children:(0,n.jsx)("div",{className:"h-full",children:(0,n.jsx)(E,{items:this.props.value,itemHeightProvider:this.getRowHeight,listRef:this.listRef,row:this.Row})})}),(0,n.jsx)(m.Z,{bodyStyle:{height:"calc(100vh - 110px)"},style:{height:"100vh",minWidth:"100vw",margin:0,top:0,left:0},title:"Description",visible:this.state.mdEditorVisible,onCancel:this.toggleMdEditor,footer:(0,n.jsx)(p.Z,{onClick:this.toggleMdEditor,children:"Close"}),children:this.props.value&&this.editorIndex>=0&&(0,n.jsxs)(h.Z,{gutter:[0,16],children:[(0,n.jsx)(g.Z,{span:12,children:(0,n.jsx)(this.MDEditor,M({},this.props,{value:this.getValueAt(this.editorIndex).get("description"),onChange:function(e){return t.addValue(t.editorIndex,"description",e)}}))}),(0,n.jsx)(g.Z,{span:12,children:(0,n.jsxs)(x.Z,{direction:"vertical",className:"px-3",children:[(0,n.jsx)(a.Z.Title,{level:5,children:"Values"}),(0,n.jsxs)(v.Z,{layout:"inline",ref:this.valuesFormRef,children:[(0,n.jsx)(v.Z.Item,{name:"name",rules:[{required:!0}],className:"pt-3",children:(0,n.jsx)(b.Z,{placeholder:"Name"})}),(0,n.jsx)(v.Z.Item,{name:"type",children:(0,n.jsx)(b.Z,{placeholder:"Type(s)"})}),(0,n.jsx)(v.Z.Item,{name:"default",children:(0,n.jsx)(b.Z,{placeholder:"Default Value"})}),(0,n.jsx)(v.Z.Item,{children:(0,n.jsx)(p.Z,{icon:(0,n.jsx)(O.Z,{}),type:"primary",className:"w-full",shape:"round",onClick:(e=d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.valuesFormRef.current.validateFields();case 2:e.sent&&this.saveParams(this.valuesFormRef.current.getFieldsValue());case 4:case"end":return e.stop()}}),e,this)})).bind(this),function(){var t=this,i=arguments;return new Promise((function(n,r){var l=e.apply(t,i);function a(e){D(l,n,r,a,o,"next",e)}function o(e){D(l,n,r,a,o,"throw",e)}a(void 0)}))}).bind(this),children:"Add"})})]}),this.getValueAt(this.editorIndex).get("params")&&(0,n.jsx)("div",{className:"max-h-96 overflow-y-scroll",children:(0,n.jsxs)("table",{className:"table-auto rounded overflow-hidden shadow",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"text-white bg-blue-400",children:[(0,n.jsx)("th",{className:"p-2",children:"Name"}),(0,n.jsx)("th",{className:"p-2",children:"Types"}),(0,n.jsx)("th",{className:"p-2",children:"Default Value"}),(0,n.jsx)("th",{className:"p-2"})]})}),(0,n.jsx)("tbody",{children:this.getValueAt(this.editorIndex).get("params").map((function(e,i){return(0,n.jsxs)("tr",{className:"divide-x divide-gray-100",children:[(0,n.jsx)("td",{className:"p-2",children:e.get("name")}),(0,n.jsx)("td",{className:"p-2",children:e.get("type","Not defined.")}),(0,n.jsx)("td",{className:"p-2",children:e.get("default","Not defined.")}),(0,n.jsx)("td",{className:"p-2",onClick:function(){var e=t.getValueAt(t.editorIndex).get("params");1===e.size?t.removeValue(t.editorIndex,"params"):(e=e.remove(i),t.addValue(t.editorIndex,"params",e))},children:(0,n.jsx)(q.Z,{})})]},"row-".concat(i))}))})]})})]})})]})})]})}},{key:"Row",value:function(e){var t=e.index,i=e.style,r=this,l=(0,c.useRef)(),a=(0,c.useState)(this.getValueAt(t)),o=a[0],s=a[1];return(0,c.useEffect)((function(){l.current&&r.setRowHeight(t,l.current.clientHeight)}),[l]),(0,n.jsx)("div",{style:i,children:(0,n.jsxs)("div",{ref:l,className:"rounded border-2 border-gray-200 px-6 py-3",children:[(0,n.jsxs)(h.Z,{align:"middle",className:"text-gray-800 cursor-pointer",children:[(0,n.jsx)(g.Z,{span:18,children:(0,n.jsxs)(x.Z,{direction:"horizontal",children:[(0,n.jsx)("span",{className:"text-gray-900 rounded bg-gray-200 p-2",children:t+1}),(0,n.jsx)("span",{className:"font-bold text-xl",children:o.get("name")})]})}),(0,n.jsx)(g.Z,{span:4,children:(0,n.jsxs)(x.Z,{direction:"horizontal",children:[(0,n.jsx)(p.Z,{onClick:function(){r.editorIndex=t,r.toggleMdEditor()},icon:(0,n.jsx)(S.Z,{}),children:"View Description"}),(0,n.jsx)(p.Z,{icon:(0,n.jsx)(q.Z,{}),onClick:function(){r.removeValue(t)}})]})})]}),(0,n.jsx)(x.Z,{direction:"vertical",className:"py-2",children:(0,n.jsxs)(v.Z,{layout:"inline",initialValues:{name:o.get("name"),defValue:o.get("defValue")},onFinish:function(e){e.name&&s(r.addValue(t,"name",e.name)),e.defValue&&s(r.addValue(t,"defValue",e.defValue))},children:[(0,n.jsx)(v.Z.Item,{name:"name",children:(0,n.jsx)(b.Z,{placeholder:"Name"})}),(0,n.jsx)(v.Z.Item,{name:"defValue",children:(0,n.jsx)(b.Z,{placeholder:"Default Value"})}),(0,n.jsx)(v.Z.Item,{children:(0,n.jsx)(p.Z,{icon:(0,n.jsx)(I.Z,{}),type:"primary",htmlType:"submit"})})]})})]})})}}])&&H(i.prototype,r),l&&H(i,l),s}(c.Component)},W=i(8419),Y=i.n(W),J=i(88217),X=i(30381),Q=i.n(X);var $=function(e){var t,i=e.entry,r={name:(t=i.toJS().data).name||null,path:t.path||null,description:t.description||null,date:Q()(t.date).format("LLL"),events:t.events||[],methods:t.methods||[],properties:t.properties||[],shortDescription:t.short_description||"",group:t.group||null};return(0,n.jsx)(Y(),{stylesheet:'\n      body{\n        font-family: "Outfit", sans-serif !important;\n      }      \n    ',children:(0,n.jsx)(J.default,{extension:r,showSideNavigation:!1})})},K=i(50777);var ee=function(e){var t,i=e.entry,r={title:(t=i.toJS().data).title||null,path:t.path||null,description:t.description||null,platforms:t.platforms||[],media:t.media||null,price:t.price||null,paypalLink:t.paypal_link||null,downloadLink:t.download_link||null,parent:t.parent||null,tagColor:t.tag_color||"#1890ff",icon:t.icon||null,shortDescription:t.short_description||null};return(0,n.jsx)(Y(),{stylesheet:'\n        body{\n          font-family: "Outfit", sans-serif !important;\n        }      \n      ',children:(0,n.jsx)(K.default,{group:r,showSideNavigation:!1,preview:!0})})},te=(0,r.default)((function(){return Promise.all([i.e(263),i.e(764)]).then(i.t.bind(i,17490,23)).then((function(e){e.registerPreviewStyle("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"),e.registerPreviewStyle("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"),e.registerPreviewStyle("https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css"),e.registerWidget("extension-list",G(e)),e.registerPreviewTemplate("docs",$),e.registerPreviewTemplate("extensions",ee),e.init({config:l})}))}),{loadableGenerated:{webpack:function(){return[17490]},modules:["admin.tsx -> netlify-cms-app"]},ssr:!1,loading:function(){return(0,n.jsxs)("div",{className:"mt-5 block text-center h-screen w-full flex flex-col justify-center items-center",children:[(0,n.jsx)(a.Z.Text,{className:"font-weight-bold block mb-2 text-xl",children:"Going to admin panel..."}),(0,n.jsx)(o.Z,{spinning:!0,size:"large"})]})}});var ie=function(){return(0,n.jsx)(te,{})};te.displayName="CMSComponent",ie.displayName="AdminPage";var ne=ie}},function(e){e.O(0,[774,662,885,789,80,856,334,511,650,66,303,818,64,501,777,217,888,179],(function(){return t=22347,e(e.s=t);var t}));var t=e.O();_N_E=t}]);