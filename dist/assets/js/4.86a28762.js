(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{239:function(t,e,r){},247:function(t,e,r){"use strict";r(239)},255:function(t,e,r){"use strict";r.r(e);var n={computed:{journal(){return this.$site.pages.filter(t=>t.path.startsWith("/journal/")&&!t.frontmatter.journal_index).sort((t,e)=>new Date(e.frontmatter.date)-new Date(t.frontmatter.date))}}},a=(r(247),r(14)),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"journal-list"},t._l(t.journal,(function(e){return r("div",{key:e.title,staticClass:"post"},[r("router-link",{staticClass:"title",attrs:{tag:"h2",to:e.path}},[t._v(t._s(e.frontmatter.title))]),t._v(" "),r("p",[t._v(t._s(e.frontmatter.excerpt))])],1)})),0)}),[],!1,null,"42e9e45e",null);e.default=s.exports}}]);