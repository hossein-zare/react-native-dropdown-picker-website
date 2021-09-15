(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[9610],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2645:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),c=(n(7294),n(3905)),o={id:"item-schema",title:"Item Schema"},i={unversionedId:"item-schema",id:"item-schema",isDocsHomePage:!1,title:"Item Schema",description:"Default schema",source:"@site/docs/item-schema.md",sourceDirName:".",slug:"/item-schema",permalink:"/react-native-dropdown-picker-website/docs/next/item-schema",editUrl:"https://github.com/hossein-zare/react-native-dropdown-picker-website/edit/main/docs/item-schema.md",version:"current",frontMatter:{id:"item-schema",title:"Item Schema"},sidebar:"someSidebar",previous:{title:"Usage",permalink:"/react-native-dropdown-picker-website/docs/next/usage"},next:{title:"Placeholder",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/placeholder"}},l=[{value:"Default schema",id:"default-schema",children:[]},{value:"Customize the schema",id:"customize-the-schema",children:[]}],s={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"default-schema"},"Default schema"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"schema={{\n  label: 'label', // required\n  value: 'value', // required\n  icon: 'icon',\n  parent: 'parent',\n  selectable: 'selectable',\n  disabled: 'disabled'\n}}\n")),(0,c.kt)("h2",{id:"customize-the-schema"},"Customize the schema"),(0,c.kt)("p",null,"You can customize the item keys, therefore you won't need modification."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const remoteItems = [\n  {id: 1, title: 'Item 1', val: 'item-1'},\n  {id: 2, title: 'Item 2', val: 'item-2'},\n];\n\n<DropDownPicker\n  schema={{\n    label: 'title',\n    value: 'val'\n  }}\n  ...\n/>\n")))}u.isMDXComponent=!0}}]);