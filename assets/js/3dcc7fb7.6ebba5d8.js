"use strict";(self.webpackChunkdocs_item_predicate_parser=self.webpackChunkdocs_item_predicate_parser||[]).push([[638],{3397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(4848),r=n(8453);const s={sidebar_position:6},a="Deterioration Predicate",d={id:"expression-syntax/deterioration-predicate",title:"Deterioration Predicate",description:"The deterioration predicate matches against the remaining durability of an item and takes two arguments: the minimum used-up durability in percent, and the maximum used-up durability in percent. Without any arguments, this predicate results in all items which can experience deterioration, like tools, etc.",source:"@site/docs/expression-syntax/deterioration-predicate.md",sourceDirName:"expression-syntax",slug:"/expression-syntax/deterioration-predicate",permalink:"/expression-syntax/deterioration-predicate",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"documentationSidebar",previous:{title:"Amount Predicate",permalink:"/expression-syntax/amount-predicate"},next:{title:"Enchantment Predicate",permalink:"/expression-syntax/enchantment-predicate"}},o={},c=[{value:"Examples",id:"examples",level:2}];function l(e){const t={admonition:"admonition",br:"br",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"deterioration-predicate",children:"Deterioration Predicate"})}),"\n",(0,i.jsx)(t.p,{children:"The deterioration predicate matches against the remaining durability of an item and takes two arguments: the minimum used-up durability in percent, and the maximum used-up durability in percent. Without any arguments, this predicate results in all items which can experience deterioration, like tools, etc."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"This predicate matches on how much the item has been used, not how much use is left; these two are easy to confuse."})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Language"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Identifier"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"en_us"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"deterioration"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"en_gb"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"deterioration"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"de_de"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Abnutzung"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"de_at"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Abnutzung"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"de_ch"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Abnutzung"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.p,{children:["Input: deterioration",(0,i.jsx)(t.br,{}),"\n","Result: All items which can experience deterioration"]}),"\n",(0,i.jsxs)(t.p,{children:["Input: deterioration 0",(0,i.jsx)(t.br,{}),"\n","Result: Only completely unused items"]}),"\n",(0,i.jsxs)(t.p,{children:["Input: deterioration 30",(0,i.jsx)(t.br,{}),"\n","Result: All items which have been at least 30% worn down"]}),"\n",(0,i.jsxs)(t.p,{children:["Input: deterioration * 30",(0,i.jsx)(t.br,{}),"\n","Result: All items which have been at most 30% worn down"]}),"\n",(0,i.jsxs)(t.p,{children:["Input: deterioration 20 50",(0,i.jsx)(t.br,{}),"\n","Result: All items which have been worn down between 20% and 50%"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);