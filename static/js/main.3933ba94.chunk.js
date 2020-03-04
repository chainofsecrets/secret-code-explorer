(this["webpackJsonpcode-explorer"]=this["webpackJsonpcode-explorer"]||[]).push([[0],{133:function(e,t,a){e.exports=a(290)},135:function(e,t,a){},140:function(e,t,a){},145:function(e,t){},153:function(e,t){},155:function(e,t){},202:function(e,t){},287:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);a(134),a(135);var n=a(0),c=a.n(n),l=a(129),r=a.n(l),o=a(13),s=a(20),m=(a(140),a(15));const i={borderColor:"rgba(255, 255, 255, 0.8)"},u={color:"#f0f0f0"};function d({endpoint:e}){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("hr",{style:i}),c.a.createElement("p",{style:u,className:"text-center font-weight-light"},"Connected to endpoint ",e," |"," ",c.a.createElement("a",{href:"https://github.com/confio/code-explorer",style:u},"Fork me on GitHub"))))}const E={nodeUrl:"https://lcd.demo-07.cosmwasm.com"};var h=function({position:e,contract:t}){const[a,n]=c.a.useState();return c.a.useEffect(()=>{const e=new m.CosmWasmClient(E.nodeUrl),a=[{key:"message.contract_address",value:t.address},{key:"message.action",value:"execute"}];e.searchTx({tags:a}).then(e=>n(e.length))},[t.address]),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},e),c.a.createElement("td",null,t.label),c.a.createElement("td",null,c.a.createElement(o.b,{to:`/contracts/${t.address}`},t.address)),c.a.createElement("td",null,t.creator),c.a.createElement("td",null,void 0===a?"Loading \u2026":a))},p=a(132);var f=function({checksum:e,source:t,builder:a}){if(!t||!a)return c.a.createElement("span",null,"Contract cannot be verified since ",c.a.createElement("code",null,"builder")," or ",c.a.createElement("code",null,"source")," is missing");const n=Object(p.quote)(["cosmwasm-verify",t,a,e]);return c.a.createElement("code",null,n)};var b=function(){const{codeId:e}=Object(s.f)(),t=parseInt(e||"0",10),[a,n]=c.a.useState(),[l,r]=c.a.useState([]);c.a.useEffect(()=>{const e=new m.CosmWasmClient(E.nodeUrl);e.getContracts(t).then(r),e.getCodeDetails(t).then(n)},[t]);const i=c.a.createElement("span",null,"Code #",t);return c.a.createElement("div",{className:"container mt-3"},c.a.createElement("div",{className:"row code-row code-row-first"},c.a.createElement("div",{className:"col"},c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(o.b,{to:"/"},"Home")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},i))))),c.a.createElement("div",{className:"row code-row"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",null,i),c.a.createElement("ul",{className:"list-group list-group-horizontal"},c.a.createElement("li",{className:"list-group-item"},"Type: Wasm"),c.a.createElement("li",{className:"list-group-item"},"Size: ",a?Math.round(a.data.length/1024)+" KiB":"Loading \u2026"))),c.a.createElement("div",{className:"col"},c.a.createElement("h2",null,"Verification"),c.a.createElement("p",null,"Code verfication allows you to verify that uploaded code was compiled from the source it claims."," ",c.a.createElement("a",{href:"https://github.com/confio/cosmwasm-verify"},"Tell me more!")),c.a.createElement("p",null,a?c.a.createElement(f,{checksum:a.checksum,source:a.source,builder:a.builder}):c.a.createElement("span",null,"Loading \u2026")))),c.a.createElement("div",{className:"row code-row code-row-last"},c.a.createElement("div",{className:"col"},c.a.createElement("h2",null,"Instances"),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Label"),c.a.createElement("th",{scope:"col"},"Contract"),c.a.createElement("th",{scope:"col"},"Creator"),c.a.createElement("th",{scope:"col"},"Executions"))),c.a.createElement("tbody",null,l.map((e,t)=>c.a.createElement(h,{position:t+1,contract:e,key:e.address})))))),c.a.createElement(d,{endpoint:E.nodeUrl}))},g=(a(287),a(288),a(6));function v(e,t){if(e.length<=t)return e;const a=Math.ceil((t-"\u2026".length)/2),n=Math.floor((t-"\u2026".length)/2);return e.slice(0,a)+"\u2026"+e.slice(-n)}function N(e){if(e.denom.startsWith("u")){const t=e.denom.slice(1).toUpperCase();return g.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}function w({data:e}){const[t,a]=c.a.useState();return c.a.useEffect(()=>{new m.CosmWasmClient(E.nodeUrl).getContracts(e.codeId).then(e=>{a({instantiations:e.length})})},[e.codeId]),c.a.createElement("div",{className:"p-2 flex-grow-1"},c.a.createElement(o.b,{to:`/codes/${e.codeId}`,className:"code-content"},c.a.createElement("div",{className:"id"},"#",e.codeId),c.a.createElement("div",{className:"details"},"Creator: ",e.creator,c.a.createElement("br",null),"Source: ",v(e.source,45)||"\u2013",c.a.createElement("br",null),"Builder: ",e.builder||"\u2013",c.a.createElement("br",null),"Checksum: ",e.checksum.slice(0,10),c.a.createElement("br",null),"Instances: ",t?t.instantiations:"Loading \u2026")))}function C(){const[e,t]=c.a.useState([]);return c.a.useEffect(()=>{new m.CosmWasmClient(E.nodeUrl).getCodes().then(e=>{const a=e.map(e=>({codeId:e.id,checksum:e.checksum,creator:e.creator,source:e.source||"",builder:e.builder||""})).reverse();t(a)})},[]),c.a.createElement("div",{className:"d-flex flex-wrap mb-3"},e.map(e=>c.a.createElement(w,{data:e,key:e.codeId})))}function y(){return c.a.createElement("div",{className:"container mt-3"},c.a.createElement(C,null),c.a.createElement(d,{endpoint:E.nodeUrl}))}a(289);function k({codeId:e}){return c.a.createElement(o.b,{to:`/codes/${e}`},"Code #",e)}function x({executions:e}){return c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Transaction ID"),c.a.createElement("th",{scope:"col"},"Sender"))),c.a.createElement("tbody",null,e.map((e,t)=>c.a.createElement("tr",{key:e.key},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",null,e.transactionId),c.a.createElement("td",null,e.msg.value.sender)))))}r.a.render(c.a.createElement(o.a,{basename:"/code-explorer"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/codes/:codeId",component:b}),c.a.createElement(s.a,{path:"/contracts/:contractAddress",component:function(){const{contractAddress:e}=Object(s.f)(),t=e||"",[a,n]=c.a.useState(),[l,r]=c.a.useState(),[i,u]=c.a.useState([]);c.a.useEffect(()=>{const e=new m.CosmWasmClient(E.nodeUrl);e.getContract(t).then(n),e.getAccount(t).then(r);const a=[{key:"message.contract_address",value:t},{key:"message.action",value:"execute"}];e.searchTx({tags:a}).then(e=>{const t=new Array;for(const a of e)for(const[e,n]of a.tx.value.msg.entries())m.types.isMsgExecuteContract(n)&&t.push({key:`${a.hash}_${e}`,msg:n,transactionId:a.hash});u(t)})},[t]);const h=c.a.createElement("span",{title:t},"Contract ",v(t,15));return c.a.createElement("div",{className:"container mt-3 contract-container"},c.a.createElement("div",{className:"row contract-row contract-row-first"},c.a.createElement("div",{className:"col"},c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(o.b,{to:"/"},"Home")),c.a.createElement("li",{className:"breadcrumb-item"},a?c.a.createElement(k,{codeId:a.codeId}):c.a.createElement("span",null,"Loading \u2026")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},h))))),c.a.createElement("div",{className:"row contract-row"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",null,h),c.a.createElement("ul",{className:"list-group list-group-horizontal"},c.a.createElement("li",{className:"list-group-item",title:"Bank tokens owned by this contract"},"Balance: ",0===(p=(null===l||void 0===l?void 0:l.balance)||[]).length?"\u2013":p.map(N).join(", ")))),c.a.createElement("div",{className:"col"},c.a.createElement("h2",null,"Init message"),c.a.createElement("pre",null,c.a.createElement("code",null,a?JSON.stringify(a.initMsg,null,2):"Loading \u2026")))),c.a.createElement("div",{className:"row contract-row contract-row-last"},c.a.createElement("div",{className:"col"},c.a.createElement("h2",null,"Executions"),0!==i.length?c.a.createElement(x,{executions:i}):c.a.createElement("p",null,"Contract was not yet executed"))),c.a.createElement(d,{endpoint:E.nodeUrl}));var p}}),c.a.createElement(s.a,{component:()=>c.a.createElement(y,null)}))),document.getElementById("root"))},87:function(e,t){}},[[133,1,2]]]);
//# sourceMappingURL=main.3933ba94.chunk.js.map