(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{22347:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return i(39981)}])},39981:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ee}});var n=i(85893),r=i(5152),l={site_url:"https://www.tedusoft.com",display_url:"https://www.tedusoft.com",backend:{name:"github",repo:"ccriiistopher/tedusoft-src",branch:"main",base_url:"https://auth.tedusoft.com",auth_endpoint:"auth"},media_folder:"public/img",public_folder:"img",collections:[{name:"posts",label:"Posts",folder:"content/posts/",extension:"json",create:!0,slug:"{{title}}",path:"{{extension_path}}/{{year}}-{{month}}-{{day}}/{{slug}}",preview_path:"labs/{{extension_path}}/{{title}}",sortable_fields:["extension_path","title","date","commit_date"],summary:"[{{extension_path | upper}}] {{title}} added on {{date | date('DD-MM-YYYY')}}",label_singular:"Post",view_groups:[{label:"Path",field:"extension_path"}],fields:[{label:"Title",name:"title",widget:"string"},{label:"Extension Path",name:"extension_path",widget:"relation",collection:"extensions",value_field:"path",search_fields:["extension_name"]},{label:"Title Color",name:"title_color",widget:"color",default:"#212121",required:!1},{label:"Title shadow color",name:"title_shadow",widget:"color",required:!1},{label:"Header Background",name:"header_background",widget:"image",required:!1},{label:"Header Background opacity",name:"header_b_opacity",widget:"string",default:"1.0",required:!1},{label:"Header Colors",name:"header_colors",widget:"list",field:{label:"Color",name:"gradient_color",widget:"color"},required:!1},{label:"Description",name:"description",widget:"markdown"},{label:"Short Description",name:"short_description",widget:"text",required:!1},{label:"Publisher",name:"publisher",widget:"string",default:"admin"},{label:"Date",name:"date",widget:"datetime"},{label:"Steps title",name:"steps_title",widget:"string",default:"Steps"},{label:"Steps",name:"steps",widget:"list",collapsed:!0,fields:[{label:"Title",name:"step_title",widget:"string"},{label:"Description",name:"step_description",widget:"markdown"},{label:"Images",name:"step_images",widget:"list",field:{label:"New Image",name:"step_image",widget:"image"}}]}]},{name:"docs",label:"Docs",folder:"content/docs",extension:"json",create:!0,identifier_field:"path",editor:{preview:!0},preview_path:"docs/{{path}}",summary:"{{name}}",sortable_fields:["name","group"],fields:[{label:"Name",name:"name",widget:"string",required:!0},{label:"Path",name:"path",widget:"string",comment:"Used to name the file, must not contain any space.",pattern:["[a-zA-Z0-9-]+$","Must contain only word digits and none space."]},{label:"Creation Date",name:"date",widget:"datetime"},{label:"Group",name:"group",widget:"relation",collection:"extensions",value_field:"path",search_fields:["title"],display_fields:["title"],required:!1},{label:"Description",name:"description",widget:"markdown"},{label:"Event Blocks",name:"events",widget:"extension-list",meta:void 0,required:!1,index_file:void 0},{label:"Method Blocks",name:"methods",widget:"extension-list",meta:void 0,required:!1,index_file:void 0},{label:"Property Blocks",name:"properties",widget:"extension-list",meta:void 0,required:!1,index_file:void 0}]},{label:"Editor General",name:"editor_general",files:[{file:"content/platforms.json",name:"platforms",label:"Platforms",fields:[{name:"platform_list",widget:"list",fields:[{name:"name",label:"Name",widget:"string"},{name:"url",label:"URL",widget:"string",required:!1,default:"https://"},{name:"text_color",label:"Text Color",widget:"color"},{name:"background_color",label:"Background Color",widget:"color"}]}]},{file:"content/banners.json",name:"banners",label:"Banners",fields:[{name:"list",widget:"list",label:"List",fields:[{name:"banner_title",widget:"string",label:"Title"},{name:"banner_body",label:"Body",widget:"markdown"},{name:"image",label:"Image",widget:"image",required:!1},{name:"text_color",label:"Text Color",widget:"color"},{name:"background_color",label:"Background Color",widget:"color"},{name:"url",label:"Url",widget:"string",required:!1},{name:"mobile",label:"For android",widget:"boolean"}]}]},{file:"content/ads.json",name:"ads",label:"Ads",fields:[{name:"list",widget:"list",label:"List",fields:[{name:"title",widget:"string",label:"Title"},{name:"body",label:"Body",widget:"markdown"},{name:"image",label:"Image",widget:"image",required:!1},{name:"text_color",label:"Text Color",widget:"color"},{name:"background_color",label:"Background Color",widget:"color"},{name:"url",label:"Url",widget:"string",required:!1},{name:"mobile",label:"For android",widget:"boolean"}]}]},{file:"content/faq.json",name:"faq",label:"FAQ",fields:[{name:"list",widget:"list",label:"List",fields:[{name:"title",widget:"string",label:"Title"},{name:"body",label:"Body",widget:"markdown"}]}]}]},{label:"Extensions Groups",name:"extensions",folder:"content/extension-groups",extension:"json",create:!0,identifier_field:"path",fields:[{name:"title",label:"Title",widget:"string",required:!0},{name:"path",label:"Path",widget:"string",required:!0},{name:"description",label:"Description",widget:"markdown",required:!0},{label:"Short Description",name:"short_description",widget:"text",required:!1},{label:"Platforms",name:"platforms",widget:"relation",multiple:!0,collection:"editor_general",display_fields:["platform_list.*.name"],value_field:"platform_list.*.name",search_fields:["platform_list.*"],required:!1},{name:"media",label:"Media",widget:"list",field:{name:"file",label:"File",widget:"file"},required:!1},{name:"price",label:"Price",widget:"string",required:!1},{name:"paypal_link",label:"Paypal Link",widget:"string",required:!1},{name:"download_link",label:"Download Link",widget:"string",required:!1},{label:"Parent",name:"parent",widget:"relation",collection:"extensions",value_field:"path",search_fields:["title"],display_fields:["title"],required:!1},{label:"Tag Color",name:"tag_color",widget:"color",required:!1,default:"green"},{label:"Icon",name:"icon",widget:"image",required:!1}]}]},a=i(74622),o=i(11382),s=i(67294),d=i(35369),c=i(71577),u=i(63922),p=i(19562),m=i(71230),f=i(15746),h=i(79531),g=i(12461),b=i(26713),w=i(8145),x=i(62986),y=i(11728),v=i(52848);function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return!t||"object"!==P(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=k(e);if(t){var r=k(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return Z(this,i)}}var C=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(a,e);var t,i,r,l=N(a);function a(){return j(this,a),l.apply(this,arguments)}return t=a,(i=[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"render",value:function(){var e=this;return this.props.items&&0!=this.props.items.size?(0,n.jsx)(y.Z,{children:function(t){var i=t.height,r=t.width;return(0,n.jsx)(v.S_,{height:i,itemCount:e.props.items.size,itemSize:e.props.itemHeightProvider,ref:e.props.listRef,width:r,children:e.props.row})}}):(0,n.jsx)(x.Z,{})}}])&&_(t.prototype,i),r&&_(t,r),a}(s.Component),R=i(64789),E=i(48689),O=i(86548),I=i(60219);function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){T(e,t,i[t])}))}return e}function H(e,t){return!t||"object"!==M(t)&&"function"!==typeof t?q(e):t}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=D(e);if(t){var r=D(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return H(this,i)}}var z=function(e){return function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(x,t);var i,r,l,o=L(x);function x(t){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,x),(i=o.call(this,t)).listRef=(0,s.createRef)(),i.rowHeights=(0,s.createRef)(),i.valuesFormRef=(0,s.createRef)(),i.editorIndex=-1,i.rowHeights.current={},i.getRowHeight=i.getRowHeight.bind(q(i)),i.setRowHeight=i.setRowHeight.bind(q(i)),i.toggleEditor=i.toggleEditor.bind(q(i)),i.toggleMdEditor=i.toggleMdEditor.bind(q(i)),i.addValue=i.addValue.bind(q(i)),i.removeValue=i.removeValue.bind(q(i)),i.getValueAt=i.getValueAt.bind(q(i)),i.Row=i.Row.bind(q(i)),i.saveParams=i.saveParams.bind(q(i)),i.state={editorVisible:!1,mdEditorVisible:!1},i.MDEditor=e.getWidget("markdown").control,i.props.value||i.props.onChange((0,d.aV)()),i}return i=x,(r=[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"getRowHeight",value:function(e){return(this.rowHeights.current&&this.rowHeights.current[e])+16||82}},{key:"setRowHeight",value:function(e,t){this.rowHeights.current=A({},this.rowHeights.current,T({},e,t)),this.listRef.current.resetAfterIndex(0===e?0:e-1)}},{key:"getValueAt",value:function(e){return this.props.value.get(e)||this.props.onChange(this.props.value.push((0,d.D5)())),this.props.value.get(e)}},{key:"addValue",value:function(e,t,i){var n=this.getValueAt(e).set(t,i),r=this.props.value.set(e,n);return this.props.onChange(r),n}},{key:"removeValue",value:function(e,t){if(t){var i=this.getValueAt(e).delete(t),n=this.props.value.set(e,i);return this.props.onChange(n),i}var r=this.props.value.delete(e);this.props.onChange(r)}},{key:"toggleMdEditor",value:function(){this.setState({mdEditorVisible:!this.state.mdEditorVisible})}},{key:"toggleEditor",value:function(){this.setState({editorVisible:!this.state.editorVisible})}},{key:"saveParams",value:function(e){var t=(0,d.aV)(this.getValueAt(this.editorIndex).get("params"));if(!(t.filter((function(t){return t.get("name")===e.name})).size>0)){var i=(0,d.D5)();e.name&&(i=i.set("name",e.name)),e.type&&(i=i.set("type",e.type)),e.default&&(i=i.set("default",e.default)),this.addValue(this.editorIndex,"params",t.push(i).asImmutable()),this.valuesFormRef.current.resetFields()}}},{key:"render",value:function(){var e=this;return(0,n.jsxs)("div",{className:"my-3 w-full",children:[(0,n.jsxs)(c.Z,{type:"primary",shape:"round",className:"w-full",onClick:this.toggleEditor,children:["Open Editor",this.props.value&&(0,n.jsx)(u.Z,{count:this.props.value.size})]}),(0,n.jsx)(p.Z,{title:"Editor",bodyStyle:{height:"calc(100vh - 110px)"},style:{height:"100vh",minWidth:"100vw",margin:0,top:0,left:0},visible:this.state.editorVisible,onCancel:this.toggleEditor,footer:(0,n.jsxs)(m.Z,{gutter:[16,16],children:[(0,n.jsx)(f.Z,{span:4,offset:12,children:(0,n.jsx)(c.Z,{onClick:function(){return e.getValueAt(e.props.value.size)},type:"primary",icon:(0,n.jsx)(R.Z,{}),children:"Add New"})}),(0,n.jsx)(f.Z,{span:8,children:(0,n.jsx)(h.Z.Search,{allowClear:!0,placeholder:"Search block...",onSearch:function(t){var i=-1;e.props.value.forEach((function(e,n){e.get("name")&&e.get("name").toLowerCase()===t.toLowerCase()&&(i=n)})),-1!=i?e.listRef.current.scrollToItem(i,"center"):g.ZP.info("Item not found.")}})})]}),children:(0,n.jsx)("div",{className:"h-full",children:(0,n.jsx)(C,{items:this.props.value,itemHeightProvider:this.getRowHeight,listRef:this.listRef,row:this.Row})})}),(0,n.jsx)(p.Z,{bodyStyle:{height:"calc(100vh - 110px)"},style:{height:"100vh",minWidth:"100vw",margin:0,top:0,left:0},title:"Description",visible:this.state.mdEditorVisible,onCancel:this.toggleMdEditor,footer:(0,n.jsx)(c.Z,{onClick:this.toggleMdEditor,children:"Close"}),children:this.props.value&&this.editorIndex>=0&&(0,n.jsxs)(m.Z,{gutter:[0,16],children:[(0,n.jsx)(f.Z,{span:12,children:(0,n.jsx)(this.MDEditor,A({},this.props,{value:this.getValueAt(this.editorIndex).get("description"),onChange:function(t){return e.addValue(e.editorIndex,"description",t)}}))}),(0,n.jsxs)(f.Z,{span:12,children:[(0,n.jsx)(c.Z,{className:"m-3",hidden:void 0!==this.getValueAt(this.editorIndex).get("params"),onClick:function(){e.addValue(e.editorIndex,"params",(0,d.aV)().asImmutable())},children:"Init Params"}),(0,n.jsxs)(b.Z,{direction:"vertical",className:"px-3",hidden:void 0===this.getValueAt(this.editorIndex).get("params"),children:[(0,n.jsx)(a.Z.Title,{level:5,children:"Values"}),(0,n.jsxs)(w.Z,{layout:"inline",ref:this.valuesFormRef,onFinish:this.saveParams,children:[(0,n.jsx)(w.Z.Item,{name:"name",rules:[{required:!0}],className:"pt-3",children:(0,n.jsx)(h.Z,{placeholder:"Name"})}),(0,n.jsx)(w.Z.Item,{name:"type",children:(0,n.jsx)(h.Z,{placeholder:"Type(s)"})}),(0,n.jsx)(w.Z.Item,{name:"default",children:(0,n.jsx)(h.Z,{placeholder:"Default Value"})}),(0,n.jsx)(w.Z.Item,{children:(0,n.jsx)(c.Z,{icon:(0,n.jsx)(R.Z,{}),type:"primary",className:"w-full",shape:"round",htmlType:"submit",children:"Add"})})]}),this.getValueAt(this.editorIndex).get("params")&&(0,n.jsx)("div",{className:"max-h-96 overflow-y-scroll",children:(0,n.jsxs)("table",{className:"table-auto rounded overflow-hidden shadow",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"bg-blue-400",children:[(0,n.jsx)("th",{className:"p-2",children:"Name"}),(0,n.jsx)("th",{className:"p-2",children:"Types"}),(0,n.jsx)("th",{className:"p-2",children:"Default Value"}),(0,n.jsx)("th",{className:"p-2"})]})}),(0,n.jsx)("tbody",{children:this.getValueAt(this.editorIndex).get("params").map((function(t,i){return(0,n.jsxs)("tr",{className:"divide-x divide-gray-100",children:[(0,n.jsx)("td",{className:"p-2",children:t.get("name")}),(0,n.jsx)("td",{className:"p-2",children:t.get("type","Not defined.")}),(0,n.jsx)("td",{className:"p-2",children:t.get("default","Not defined.")}),(0,n.jsx)("td",{className:"p-2",onClick:function(){var t=e.getValueAt(e.editorIndex).get("params");1===t.size?e.removeValue(e.editorIndex,"params"):(t=t.remove(i),e.addValue(e.editorIndex,"params",t))},children:(0,n.jsx)(E.Z,{})})]},"row-".concat(i))}))})]})})]})]})]})})]})}},{key:"Row",value:function(e){var t=e.index,i=e.style,r=this,l=(0,s.useRef)(),a=(0,s.useState)(this.getValueAt(t)),o=a[0],d=a[1];return(0,s.useEffect)((function(){l.current&&r.setRowHeight(t,l.current.clientHeight)}),[l]),(0,n.jsx)("div",{style:i,children:(0,n.jsxs)("div",{ref:l,className:"rounded border-2 border-gray-200 px-6 py-3",children:[(0,n.jsxs)(m.Z,{align:"middle",className:"text-gray-800 cursor-pointer",children:[(0,n.jsx)(f.Z,{span:18,children:(0,n.jsxs)(b.Z,{direction:"horizontal",children:[(0,n.jsx)("span",{className:"text-gray-900 rounded bg-gray-200 p-2",children:t+1}),(0,n.jsx)("span",{className:"font-bold text-xl",children:o.get("name")})]})}),(0,n.jsx)(f.Z,{span:4,children:(0,n.jsxs)(b.Z,{direction:"horizontal",children:[(0,n.jsx)(c.Z,{onClick:function(){r.editorIndex=t,r.toggleMdEditor()},icon:(0,n.jsx)(O.Z,{}),children:"View Description"}),(0,n.jsx)(c.Z,{icon:(0,n.jsx)(E.Z,{}),onClick:function(){r.removeValue(t)}})]})})]}),(0,n.jsx)(b.Z,{direction:"vertical",className:"py-2",children:(0,n.jsxs)(w.Z,{layout:"inline",initialValues:{name:o.get("name"),defValue:o.get("defValue")},onFinish:function(e){e.name&&d(r.addValue(t,"name",e.name)),e.defValue&&d(r.addValue(t,"defValue",e.defValue))},children:[(0,n.jsx)(w.Z.Item,{name:"name",children:(0,n.jsx)(h.Z,{placeholder:"Name"})}),(0,n.jsx)(w.Z.Item,{name:"defValue",children:(0,n.jsx)(h.Z,{placeholder:"Default Value"})}),(0,n.jsx)(w.Z.Item,{children:(0,n.jsx)(c.Z,{icon:(0,n.jsx)(I.Z,{}),type:"primary",htmlType:"submit"})})]})})]})})}}])&&S(i.prototype,r),l&&S(i,l),x}(s.Component)},F=i(8419),U=i.n(F),G=i(88217),W=i(30381),Y=i.n(W);var J=function(e){var t,i=e.entry,r={name:(t=i.toJS().data).name||null,path:t.path||null,description:t.description||null,date:Y()(t.date).format("LLL"),events:t.events||[],methods:t.methods||[],properties:t.properties||[],shortDescription:t.short_description||"",group:t.group||null};return(0,n.jsx)(U(),{stylesheet:'\n      body{\n        font-family: "Outfit", sans-serif !important;\n      }      \n    ',children:(0,n.jsx)(G.default,{extension:r,showSideNavigation:!1})})},X=i(50777);var Q=function(e){var t,i=e.entry,r={title:(t=i.toJS().data).title||null,path:t.path||null,description:t.description||null,platforms:t.platforms||[],media:t.media||null,price:t.price||null,paypalLink:t.paypal_link||null,downloadLink:t.download_link||null,parent:t.parent||null,tagColor:t.tag_color||"#1890ff",icon:t.icon||null,shortDescription:t.short_description||null};return(0,n.jsx)(U(),{stylesheet:'\n        body{\n          font-family: "Outfit", sans-serif !important;\n        }      \n      ',children:(0,n.jsx)(X.default,{group:r,showSideNavigation:!1,preview:!0})})},$=(0,r.default)((function(){return Promise.all([i.e(263),i.e(764)]).then(i.t.bind(i,17490,23)).then((function(e){e.registerPreviewStyle("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"),e.registerPreviewStyle("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"),e.registerPreviewStyle("https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css"),e.registerWidget("extension-list",z(e)),e.registerPreviewTemplate("docs",J),e.registerPreviewTemplate("extensions",Q),e.init({config:l})}))}),{loadableGenerated:{webpack:function(){return[17490]},modules:["admin.tsx -> netlify-cms-app"]},ssr:!1,loading:function(){return(0,n.jsxs)("div",{className:"mt-5 block text-center h-screen w-full flex flex-col justify-center items-center",children:[(0,n.jsx)(a.Z.Text,{className:"font-weight-bold block mb-2 text-xl",children:"Going to admin panel..."}),(0,n.jsx)(o.Z,{spinning:!0,size:"large"})]})}});var K=function(){return(0,n.jsx)($,{})};$.displayName="CMSComponent",K.displayName="AdminPage";var ee=K}},function(e){e.O(0,[774,662,885,789,80,856,334,511,650,66,303,818,64,501,777,217,888,179],(function(){return t=22347,e(e.s=t);var t}));var t=e.O();_N_E=t}]);