(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{448:function(t,r,e){var n=e(141),i=e(134),o=e(449),s=e(453);t.exports=function(t,r){if(null==t)return{};var e=n(s(t),(function(t){return[t]}));return r=i(r),o(t,e,(function(t,e){return r(t,e[0])}))}},449:function(t,r,e){var n=e(69),i=e(450),o=e(64);t.exports=function(t,r,e){for(var s=-1,u=r.length,p={};++s<u;){var c=r[s],a=n(t,c);e(a,c)&&i(p,o(c,t),a)}return p}},450:function(t,r,e){var n=e(451),i=e(64),o=e(67),s=e(41),u=e(28);t.exports=function(t,r,e,p){if(!s(t))return t;for(var c=-1,a=(r=i(r,t)).length,f=a-1,v=t;null!=v&&++c<a;){var l=u(r[c]),h=e;if("__proto__"===l||"constructor"===l||"prototype"===l)return t;if(c!=f){var d=v[l];void 0===(h=p?p(d,l,v):void 0)&&(h=s(d)?d:o(r[c+1])?[]:{})}n(v,l,h),v=v[l]}return t}},451:function(t,r,e){var n=e(452),i=e(66),o=Object.prototype.hasOwnProperty;t.exports=function(t,r,e){var s=t[r];o.call(t,r)&&i(s,e)&&(void 0!==e||r in t)||n(t,r,e)}},452:function(t,r,e){var n=e(142);t.exports=function(t,r,e){"__proto__"==r&&n?n(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}},453:function(t,r,e){var n=e(135),i=e(454),o=e(456);t.exports=function(t){return n(t,o,i)}},454:function(t,r,e){var n=e(65),i=e(455),o=e(136),s=e(137),u=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)n(r,o(t)),t=i(t);return r}:s;t.exports=u},455:function(t,r,e){var n=e(140)(Object.getPrototypeOf,Object);t.exports=n},456:function(t,r,e){var n=e(138),i=e(457),o=e(68);t.exports=function(t){return o(t)?n(t,!0):i(t)}},457:function(t,r,e){var n=e(41),i=e(139),o=e(458),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var r=i(t),e=[];for(var u in t)("constructor"!=u||!r&&s.call(t,u))&&e.push(u);return e}},458:function(t,r){t.exports=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}},474:function(t,r,e){"use strict";e.r(r);var n=e(42),i=e.n(n),o=e(448),s=e.n(o),u={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties(){return s()(this.$props,i.a)},commentProps(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},p=e(1),c=Object(p.a)(u,(function(){var t=this._self._c;return"vssue"===this.$service.comment.service?t("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?t("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null);r.default=c.exports}}]);