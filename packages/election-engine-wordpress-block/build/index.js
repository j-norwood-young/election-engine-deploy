(()=>{"use strict";var e,t={96:()=>{const e=window.wp.blocks,t=window.React,l=(window.wp.i18n,window.wp.blockEditor);window.wp.data;const i=JSON.parse('{"UU":"tenlayer/election-engine"}');(0,e.registerBlockType)(i.UU,{edit:function({attributes:e,setAttributes:i}){const n=(0,l.useBlockProps)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("p",{...n},(0,t.createElement)("div",{id:"ElectionsEngineEditBlock",class:"election-engine-block-editor",onClick:function(){jQuery(document).trigger("election-engine-edit-block-click",[n,e,i])}},(0,t.createElement)("h1",null,"Click to Edit your Elections Block"),(0,t.createElement)("div",{className:"pills"},e.visualisation&&(0,t.createElement)("div",{className:"pill"},e.visualisation),e.selected_year&&(0,t.createElement)("div",{className:"pill"},e.selected_year),e.selected_election&&(0,t.createElement)("div",{className:"pill"},e.selected_election),e.selected_region&&(0,t.createElement)("div",{className:"pill"},e.selected_region),e.selected_fields&&(0,t.createElement)("div",{className:"pill"},e.selected_fields)))))},save:function({attributes:e}){const i=`${election_engine_admin.site_url}/election-engine/embed/?visualisation=${e.visualisation}&selected_year=${e.selected_year}&selected_election=${e.selected_election}&selected_region=${e.selected_region}&selected_fields=${e.selected_fields}`,n=l.useBlockProps.save();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{...n,"data-visualisation":e.visualisation||"","data-selected_year":e.selected_year||"","data-selected_election":e.selected_election||"","data-selected_region":e.selected_region||"","data-selected_fields":e.selected_fields||""},(0,t.createElement)("div",{class:"election-engine-inline","data-inline":i})))}})}},l={};function i(e){var n=l[e];if(void 0!==n)return n.exports;var s=l[e]={exports:{}};return t[e](s,s.exports,i),s.exports}i.m=t,e=[],i.O=(t,l,n,s)=>{if(!l){var c=1/0;for(d=0;d<e.length;d++){for(var[l,n,s]=e[d],a=!0,r=0;r<l.length;r++)(!1&s||c>=s)&&Object.keys(i.O).every((e=>i.O[e](l[r])))?l.splice(r--,1):(a=!1,s<c&&(c=s));if(a){e.splice(d--,1);var o=n();void 0!==o&&(t=o)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[l,n,s]},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};i.O.j=t=>0===e[t];var t=(t,l)=>{var n,s,[c,a,r]=l,o=0;if(c.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(r)var d=r(i)}for(t&&t(l);o<c.length;o++)s=c[o],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},l=globalThis.webpackChunk_election_engine_wordpress_block=globalThis.webpackChunk_election_engine_wordpress_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=i.O(void 0,[350],(()=>i(96)));n=i.O(n)})();