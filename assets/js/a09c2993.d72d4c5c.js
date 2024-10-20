"use strict";(self.webpackChunkdocs_item_predicate_parser=self.webpackChunkdocs_item_predicate_parser||[]).push([[899],{9233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(4848),o=n(8453);const s={sidebar_position:1,slug:"/"},a="Introduction",r={id:"introduction",title:"Introduction",description:"Since I tried to go into as much detail on the reasons, working-principles as well as the syntax itself, this documentation might seem a bit long-wided at first glance; feel free to skip over passages and focus on what's of interest to you specifically; but make sure to not miss out on any crucial syntax-details, as to allow for it's expressivity to fully unfold. There are multiple examples for each predicate, operator and logical junction on their respective pages.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs-item-predicate-parser/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"documentationSidebar",next:{title:"Commands",permalink:"/docs-item-predicate-parser/commands"}},c={},l=[];function d(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Since I tried to go into as much detail on the reasons, working-principles as well as the syntax itself, this documentation might seem a bit long-wided at first glance; feel free to skip over passages and focus on what's of interest to ",(0,i.jsx)(t.em,{children:"you"})," specifically; but make sure to not miss out on any crucial syntax-details, as to allow for it's expressivity to fully unfold. There are multiple examples for each predicate, operator and logical junction on their respective pages."]})}),"\n",(0,i.jsxs)(t.p,{children:["The main motivation to realize this idea of mine was to express ",(0,i.jsx)(t.em,{children:"non-critical"})," matching patterns, called ",(0,i.jsx)(t.em,{children:"predicates"}),", without the use of any cryptic internal names, all while abstaining from complex and technical syntax. Many widely used frameworks still operate on numeric item- and sub-ids, only allow for pre-defined or manually configurable groups, and cannot account for more nuanced criteria like enchantments, potion-effects, durability, displayname, lore, music-disc types, trim-patterns, etc.; but why? I couldn't stand these severe limitations, so I'm trying to put forth a completely new way of expressing item-predicates."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["As hinted at above, I do ",(0,i.jsx)(t.strong,{children:"not"})," advise to employ this API whenever matches are absolutely critical, e.g. comparing items in quests or shops. The reason is simple: while expressions achieve full precision and execute deterministically, the simple fact that they operate on data as retrieved from a mojang language-file and parse user-input by selecting the shortest match containing all syllables, it is ",(0,i.jsx)(t.strong,{children:"impossible"})," to guarantee constant behavior when up- or downgrading the server's minecraft version; unintentional alterations are thereby unavoidable."]})}),"\n",(0,i.jsxs)(t.p,{children:["This project is ",(0,i.jsx)(t.strong,{children:"not"})," meant as a library to be shaded and possibly even relocated into your own project, but rather intended as an API provided at runtime by depending on the corresponding plugin, for several reasons: version-specific language-files have to be downloaded from mojang's index, which should just be done once, as to not cause needless traffic; predicates may only operate above a certain version, e.g. music-instrument matching, and are loaded conditionally; all uses of predicates shall feel and behave equally accross the whole server - especially realtime result rendering, completion, expansion and error-messaging."]}),"\n",(0,i.jsxs)(t.p,{children:["By adhering to the above advice, the API-consumer not only allows for a central point of configuration and comparison decision, but also delegates the responsibility of version-specific implementation-details; simply think of this API as a function which takes in a string representing the predicate-expression, throws if malformed, and otherwise returns a function which returns ",(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})," based on it's input ",(0,i.jsx)(t.code,{children:"ItemStack"})," - a clean and simple abstraction."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);