"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[5188],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return t?o.createElement(k,l(l({ref:n},d),{},{components:t})):o.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7170:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),l=["components"],c={id:"icons",title:"Icons"},i=void 0,p={unversionedId:"advanced/icons",id:"version-5.2/advanced/icons",title:"Icons",description:"Item Icon",source:"@site/versioned_docs/version-5.2/advanced/icons.md",sourceDirName:"advanced",slug:"/advanced/icons",permalink:"/react-native-dropdown-picker-website/docs/advanced/icons",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/versioned_docs/version-5.2/advanced/icons.md",tags:[],version:"5.2",frontMatter:{id:"icons",title:"Icons"},sidebar:"version-5.2/someSidebar",previous:{title:"Placeholder",permalink:"/react-native-dropdown-picker-website/docs/advanced/placeholder"},next:{title:"Loading",permalink:"/react-native-dropdown-picker-website/docs/advanced/loading"}},d=[{value:"Item Icon",id:"item-icon",children:[],level:2},{value:"Props",id:"props",children:[{value:"<code>showArrowIcon</code>",id:"showarrowicon",children:[],level:3},{value:"<code>showTickIcon</code>",id:"showtickicon",children:[],level:3},{value:"<code>ArrowUpIconComponent</code>",id:"arrowupiconcomponent",children:[],level:3},{value:"<code>ArrowDownIconComponent</code>",id:"arrowdowniconcomponent",children:[],level:3},{value:"<code>TickIconComponent</code>",id:"tickiconcomponent",children:[],level:3},{value:"<code>CloseIconComponent</code>",id:"closeiconcomponent",children:[],level:3}],level:2},{value:"Styling",id:"styling",children:[{value:"<code>arrowIconStyle</code>",id:"arrowiconstyle",children:[],level:3},{value:"<code>tickIconStyle</code>",id:"tickiconstyle",children:[],level:3},{value:"<code>closeIconStyle</code>",id:"closeiconstyle",children:[],level:3},{value:"<code>iconContainerStyle</code>",id:"iconcontainerstyle",children:[],level:3},{value:"<code>arrowIconContainerStyle</code>",id:"arrowiconcontainerstyle",children:[],level:3},{value:"<code>tickIconContainerStyle</code>",id:"tickiconcontainerstyle",children:[],level:3},{value:"<code>closeIconContainerStyle</code>",id:"closeiconcontainerstyle",children:[],level:3}],level:2}],s={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"item-icon"},"Item Icon"),(0,a.kt)("p",null,"Each item can have an icon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n  label: 'Item',\n  value: 'item',\n  icon: () => <Image source={require('./assets/icon.png')} style={styles.iconStyle} />\n}\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"showarrowicon"},(0,a.kt)("inlineCode",{parentName:"h3"},"showArrowIcon")),(0,a.kt)("p",null,"Specifies if the arrow icons should be visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"showArrowIcon={true}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"true")))),(0,a.kt)("h3",{id:"showtickicon"},(0,a.kt)("inlineCode",{parentName:"h3"},"showTickIcon")),(0,a.kt)("p",null,"Specifies if the tick icon should be visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"showTickIcon={true}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"true")))),(0,a.kt)("h3",{id:"arrowupiconcomponent"},(0,a.kt)("inlineCode",{parentName:"h3"},"ArrowUpIconComponent")),(0,a.kt)("p",null,"Changes the arrow-up icon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"ArrowUpIconComponent={({style}) => <MyArrowUpIcon style={style} />}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"function")))),(0,a.kt)("h3",{id:"arrowdowniconcomponent"},(0,a.kt)("inlineCode",{parentName:"h3"},"ArrowDownIconComponent")),(0,a.kt)("p",null,"Changes the arrow-down icon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"ArrowDownIconComponent={({style}) => <MyArrowDownIcon style={style} />}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"function")))),(0,a.kt)("h3",{id:"tickiconcomponent"},(0,a.kt)("inlineCode",{parentName:"h3"},"TickIconComponent")),(0,a.kt)("p",null,"Changes the tick icon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"TickIconComponent={({style}) => <MyTickIcon style={style} />}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"function")))),(0,a.kt)("h3",{id:"closeiconcomponent"},(0,a.kt)("inlineCode",{parentName:"h3"},"CloseIconComponent")),(0,a.kt)("p",null,"Changes the close icon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"CloseIconComponent={({style}) => <MyCloseIcon style={style} />}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"function")))),(0,a.kt)("h2",{id:"styling"},"Styling"),(0,a.kt)("h3",{id:"arrowiconstyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"arrowIconStyle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"arrowIconStyle={{\n  width: 20,\n  height: 20\n}}\n")),(0,a.kt)("h3",{id:"tickiconstyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"tickIconStyle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"tickIconStyle={{\n  width: 20,\n  height: 20\n}}\n")),(0,a.kt)("h3",{id:"closeiconstyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"closeIconStyle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"closeIconStyle={{\n  width: 30,\n  height: 30\n}}\n")),(0,a.kt)("h3",{id:"iconcontainerstyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"iconContainerStyle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"iconContainerStyle={{\n  marginRight: 10\n}}\n")),(0,a.kt)("h3",{id:"arrowiconcontainerstyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"arrowIconContainerStyle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"iconContainerStyle={{\n  marginRight: 10\n}}\n")),(0,a.kt)("h3",{id:"tickiconcontainerstyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"tickIconContainerStyle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"iconContainerStyle={{\n  marginRight: 10\n}}\n")),(0,a.kt)("h3",{id:"closeiconcontainerstyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"closeIconContainerStyle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"iconContainerStyle={{\n  marginRight: 10\n}}\n")))}u.isMDXComponent=!0}}]);