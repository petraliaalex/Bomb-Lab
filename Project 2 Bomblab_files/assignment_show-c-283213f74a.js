(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[265],{"0jNN":function(e,t,n){"use strict"
var r=Object.prototype.hasOwnProperty
var i=Array.isArray
var o=function(){var e=[]
for(var t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase())
return e}()
var a=function(e){while(e.length>1){var t=e.pop()
var n=t.obj[t.prop]
if(i(n)){var r=[]
for(var o=0;o<n.length;++o)"undefined"!==typeof n[o]&&r.push(n[o])
t.obj[t.prop]=r}}}
var s=function(e,t){var n=t&&t.plainObjects?Object.create(null):{}
for(var r=0;r<e.length;++r)"undefined"!==typeof e[r]&&(n[r]=e[r])
return n}
var l=function e(t,n,o){if(!n)return t
if("object"!==typeof n){if(i(t))t.push(n)
else{if(!t||"object"!==typeof t)return[t,n];(o&&(o.plainObjects||o.allowPrototypes)||!r.call(Object.prototype,n))&&(t[n]=true)}return t}if(!t||"object"!==typeof t)return[t].concat(n)
var a=t
i(t)&&!i(n)&&(a=s(t,o))
if(i(t)&&i(n)){n.forEach((function(n,i){if(r.call(t,i)){var a=t[i]
a&&"object"===typeof a&&n&&"object"===typeof n?t[i]=e(a,n,o):t.push(n)}else t[i]=n}))
return t}return Object.keys(n).reduce((function(t,i){var a=n[i]
r.call(t,i)?t[i]=e(t[i],a,o):t[i]=a
return t}),a)}
var c=function(e,t){return Object.keys(t).reduce((function(e,n){e[n]=t[n]
return e}),e)}
var u=function(e,t,n){var r=e.replace(/\+/g," ")
if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(r)}catch(e){return r}}
var d=function(e,t,n){if(0===e.length)return e
var r=e
"symbol"===typeof e?r=Symbol.prototype.toString.call(e):"string"!==typeof e&&(r=String(e))
if("iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}))
var i=""
for(var a=0;a<r.length;++a){var s=r.charCodeAt(a)
if(45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122){i+=r.charAt(a)
continue}if(s<128){i+=o[s]
continue}if(s<2048){i+=o[192|s>>6]+o[128|63&s]
continue}if(s<55296||s>=57344){i+=o[224|s>>12]+o[128|s>>6&63]+o[128|63&s]
continue}a+=1
s=65536+((1023&s)<<10|1023&r.charCodeAt(a))
i+=o[240|s>>18]+o[128|s>>12&63]+o[128|s>>6&63]+o[128|63&s]}return i}
var f=function(e){var t=[{obj:{o:e},prop:"o"}]
var n=[]
for(var r=0;r<t.length;++r){var i=t[r]
var o=i.obj[i.prop]
var s=Object.keys(o)
for(var l=0;l<s.length;++l){var c=s[l]
var u=o[c]
if("object"===typeof u&&null!==u&&-1===n.indexOf(u)){t.push({obj:o,prop:c})
n.push(u)}}}a(t)
return e}
var p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}
var h=function(e){if(!e||"object"!==typeof e)return false
return!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}
var m=function(e,t){return[].concat(e,t)}
e.exports={arrayToObject:s,assign:c,combine:m,compact:f,decode:u,encode:d,isBuffer:h,isRegExp:p,merge:l}},B1vq:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
n("s/PJ")
i.a.fn.scrollToVisible=function(e){const t={}
const n=i()(e)
if(0===n.length)return
let r=n.offset(),o=n.outerWidth(),a=n.outerHeight(),s=r.top,l=s+a,c=r.left,u=c+o,d="html,body"==this.selector?i.a.windowScrollTop():this.scrollTop(),f=this.scrollLeft(),p=this.outerHeight(),h=this.outerWidth()
if("html,body"!=this.selector){let e=i()("body").offset()
this.each((function(){try{e=i()(this).offset()
return false}catch(e){}}))
s-=e.top
l-=e.top
c-=e.left
u-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){p=i()(window).height()
i()("#wizard_box:visible").length>0&&(p-=i()("#wizard_box:visible").height())
h=i()(window).width()
s-=d
c-=f
l-=d
u-=f}s<0||p<a&&l>p?t.scrollTop=s+d:l>p&&(t.scrollTop=l+d-p+20)
c<0?t.scrollLeft=c+f:u>h&&(t.scrollLeft=u+f-h+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},KuFa:function(e,t,n){"use strict"
n.r(t)
var r=n("An8g")
var i=n("u7Gu")
var o=n("EcmN")
var a=n("ouhR")
var s=n.n(a)
n("q1tI")
var l=n("i8i4")
var c=n.n(l)
var u=n("x1Tw")
var d=n("Qyje")
var f=n.n(d)
var p=n("Et5h")
var h=n("7FZx")
var m=n("FIFq")
var g=n.n(m)
var v=function(e,t){return function(){return e.apply(t,arguments)}},_=function(e,t){for(var n in t)b.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},b={}.hasOwnProperty
var y=function(e){_(t,e)
function t(){this.toggleSpeedgraderLink=v(this.toggleSpeedgraderLink,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:published",this.toggleSpeedgraderLink)}
t.prototype.toggleSpeedgraderLink=function(){return this.model.get("published")?this.$el.removeClass("hidden"):this.$el.addClass("hidden")}
return t}(g.a.View)
var w=n("goGJ")
var k=n("oMlh")
var O=n("GXQz")
n("Z+Ib")
var j=n("y8OA")
var x=n("H4Sz")
var E=n("mKSb")
var S=n("i+HM")
var N=n("ppA4")
var C=n("6V2X")
const D=new j["default"]
D.init({itemType:"assignment",page:"show"})
function A(e){if("0"!==e){u["default"].put("/api/v1/courses/".concat(ENV.COURSE_ID,"/gradebook_settings"),f.a.stringify({gradebook_settings:{filter_rows_by:{student_group_id:e}}}))
ENV.selected_student_group_id=e
T()
I()}}function I(){const e=ENV.SETTINGS.filter_speed_grader_by_student_group&&!ENV.selected_student_group_id
const t=document.getElementById("speed_grader_link_mount_point")
t&&c.a.render(Object(r["a"])(S["a"],{disabled:e,href:ENV.speed_grader_url,disabledTip:o["a"].t("Must select a student group first")}),t)}function T(){const e=document.getElementById("student_group_filter_mount_point")
e&&c.a.render(Object(r["a"])(E["a"],{categories:ENV.group_categories,label:o["a"].t("Select Group to Grade"),onChange:A,value:ENV.selected_student_group_id}),e)}const z=Promise.all([n.e(3),n.e(52),n.e(627)]).then(n.bind(null,"/j35"))
s()(()=>{const e=s()("#assignment_publish_button")
if(e.length>0){const t=new p["a"]({id:e.attr("data-id"),unpublishable:!e.hasClass("disabled"),published:e.hasClass("published")})
t.doNotParse()
new y({model:t,el:"#assignment-speedgrader-link"}).render()
const n=new h["a"]({model:t,el:e})
n.render()
n.on("publish",()=>s()("#moderated_grading_button").show())
n.on("unpublish",()=>s()("#moderated_grading_button").hide())}z.then(()=>{s()("#sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Assignment",assetID:ENV.ASSIGNMENT_ID,location:window.location})})
return Object(w["a"])()})
s()(()=>s()("#content").on("click","#mark-as-done-checkbox",(function(){return k["a"].toggle(this)})))
function R(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
e&&e.preventDefault()
c.a.render(Object(r["a"])(N["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentShare:{content_type:"assignment",content_id:ENV.ASSIGNMENT_ID},onDismiss:()=>{R(null,false)
s()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}function V(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
e&&e.preventDefault()
c.a.render(Object(r["a"])(C["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentSelection:{assignments:[ENV.ASSIGNMENT_ID]},onDismiss:()=>{V(null,false)
s()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}s()(()=>{s()(".direct-share-send-to-menu-item").click(R)
s()(".direct-share-copy-to-menu-item").click(V)})
s()(()=>{if(ENV.speed_grader_url){ENV.SETTINGS.filter_speed_grader_by_student_group&&T()
I()}})
s()(()=>{s()(".upload_submissions_link").click(e=>{e.preventDefault()
s()("#re_upload_submissions_form").slideToggle()})
s()(".download_submissions_link").click((function(e){e.preventDefault()
i["a"].downloadSubmissions(s()(this).attr("href"))
s()(".upload_submissions_link").slideDown()}))
s()("#re_upload_submissions_form").submit((function(e){const t=s()(this).getFormData()
if(t.submissions_zip){if(!t.submissions_zip.match(/\.zip$/)){e.preventDefault()
e.stopPropagation()
s()(this).formErrors({submissions_zip:o["a"].t("Please upload files as a .zip")})}}else{e.preventDefault()
e.stopPropagation()}}))
s()("#edit_assignment_form").bind("assignment_updated",(e,t)=>{t.assignment&&t.assignment.peer_reviews?s()(".assignment_peer_reviews_link").slideDown():s()(".assignment_peer_reviews_link").slideUp()})})
s()(()=>{const e=document.getElementById("crs-graphs")
const t=document.getElementById("not_right_side")
O["default"].init(e,t)
document.getElementById("assignment_external_tools")&&x["a"].attach(document.getElementById("assignment_external_tools"),"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.ASSIGNMENT_ID,10))})},QSc6:function(e,t,n){"use strict"
var r=n("0jNN")
var i=n("sxOR")
var o=Object.prototype.hasOwnProperty
var a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}}
var s=Array.isArray
var l=Array.prototype.push
var c=function(e,t){l.apply(e,s(t)?t:[t])}
var u=Date.prototype.toISOString
var d=i["default"]
var f={addQueryPrefix:false,allowDots:false,charset:"utf-8",charsetSentinel:false,delimiter:"&",encode:true,encoder:r.encode,encodeValuesOnly:false,format:d,formatter:i.formatters[d],indices:false,serializeDate:function(e){return u.call(e)},skipNulls:false,strictNullHandling:false}
var p=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e}
var h=function e(t,n,i,o,a,l,u,d,h,m,g,v,_){var b=t
"function"===typeof u?b=u(n,b):b instanceof Date?b=m(b):"comma"===i&&s(b)&&(b=b.join(","))
if(null===b){if(o)return l&&!v?l(n,f.encoder,_,"key"):n
b=""}if(p(b)||r.isBuffer(b)){if(l){var y=v?n:l(n,f.encoder,_,"key")
return[g(y)+"="+g(l(b,f.encoder,_,"value"))]}return[g(n)+"="+g(String(b))]}var w=[]
if("undefined"===typeof b)return w
var k
if(s(u))k=u
else{var O=Object.keys(b)
k=d?O.sort(d):O}for(var j=0;j<k.length;++j){var x=k[j]
if(a&&null===b[x])continue
s(b)?c(w,e(b[x],"function"===typeof i?i(n,x):n,i,o,a,l,u,d,h,m,g,v,_)):c(w,e(b[x],n+(h?"."+x:"["+x+"]"),i,o,a,l,u,d,h,m,g,v,_))}return w}
var m=function(e){if(!e)return f
if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var t=e.charset||f.charset
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var n=i["default"]
if("undefined"!==typeof e.format){if(!o.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.")
n=e.format}var r=i.formatters[n]
var a=f.filter;("function"===typeof e.filter||s(e.filter))&&(a=e.filter)
return{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?f.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:f.encode,encoder:"function"===typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:a,formatter:r,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}}
e.exports=function(e,t){var n=e
var r=m(t)
var i
var o
if("function"===typeof r.filter){o=r.filter
n=o("",n)}else if(s(r.filter)){o=r.filter
i=o}var l=[]
if("object"!==typeof n||null===n)return""
var u
u=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices"
var d=a[u]
i||(i=Object.keys(n))
r.sort&&i.sort(r.sort)
for(var f=0;f<i.length;++f){var p=i[f]
if(r.skipNulls&&null===n[p])continue
c(l,h(n[p],p,d,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.formatter,r.encodeValuesOnly,r.charset))}var g=l.join(r.delimiter)
var v=true===r.addQueryPrefix?"?":""
r.charsetSentinel&&("iso-8859-1"===r.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&")
return g.length>0?v+g:""}},Qyje:function(e,t,n){"use strict"
var r=n("QSc6")
var i=n("nmq7")
var o=n("sxOR")
e.exports={formats:o,parse:i,stringify:r}},eAd9:function(e,t,n){(function(t){var n=false
var r
var i
function o(){if("undefined"!==typeof r)return r
var e=document.documentElement
var t=document.createElement("div")
t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;")
e.appendChild(t)
r=t.offsetWidth-t.clientWidth
e.removeChild(t)
return r}function a(){return document.documentElement.scrollHeight>window.innerHeight}function s(e){if("undefined"===typeof document||n)return
var t=document.documentElement
i=window.pageYOffset
a()?t.style.width="calc(100% - "+o()+"px)":t.style.width="100%"
t.style.position="fixed"
t.style.top=-i+"px"
t.style.overflow="hidden"
n=true}function l(){if("undefined"===typeof document||!n)return
var e=document.documentElement
e.style.width=""
e.style.position=""
e.style.top=""
e.style.overflow=""
window.scroll(0,i)
n=false}function c(){if(n){l()
return}s()}var u={on:s,off:l,toggle:c}
"undefined"!==typeof e.exports?e.exports=u:t.noScroll=u})(this)},goGJ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("ouhR")
var i=n.n(r)
n("rEd+")
function o(){return i()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const e=i()(this).data("tooltipSelector")
try{const t=document.querySelector(e)
return i()(t).html()}catch(e){}}})}},"i+HM":function(e,t,n){"use strict"
var r=n("An8g")
var i=n("VTBJ")
var o=n("q1tI")
var a=n.n(o)
n("17x9")
var s=n("5Shj")
var l=n("EcmN")
function c(e){return a.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),l["a"].t("SpeedGrader™"))}function u(e){const t=e.className?"icon-speed-grader ".concat(e.className):"icon-speed-grader"
let n={className:t,href:e.href}
e.disabled&&(n=Object(i["a"])({},n,{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(r["a"])(s["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,c(n)):c(n)}t["a"]=u},mKSb:function(e,t,n){"use strict"
var r=n("An8g")
n("17x9")
var i=n("sTNg")
var o=n("EcmN")
n("q1tI")
function a(e){return Object(r["a"])("option",{value:e.id},e.id,e.name)}function s(e){return Object(r["a"])("optgroup",{label:e.name},"group_category_".concat(e.id),e.groups.map(e=>a(e)))}function l(e){return Object(r["a"])(i["FormField"],{id:"student-group-filter",label:e.label},void 0,Object(r["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(r["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",o["a"].t("Select One")),e.categories.map(e=>s(e))))}t["a"]=l},nmq7:function(e,t,n){"use strict"
var r=n("0jNN")
var i=Object.prototype.hasOwnProperty
var o=Array.isArray
var a={allowDots:false,allowPrototypes:false,arrayLimit:20,charset:"utf-8",charsetSentinel:false,comma:false,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:false,interpretNumericEntities:false,parameterLimit:1e3,parseArrays:true,plainObjects:false,strictNullHandling:false}
var s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))}
var l="utf8=%26%2310003%3B"
var c="utf8=%E2%9C%93"
var u=function(e,t){var n={}
var u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e
var d=Infinity===t.parameterLimit?void 0:t.parameterLimit
var f=u.split(t.delimiter,d)
var p=-1
var h
var m=t.charset
if(t.charsetSentinel)for(h=0;h<f.length;++h)if(0===f[h].indexOf("utf8=")){f[h]===c?m="utf-8":f[h]===l&&(m="iso-8859-1")
p=h
h=f.length}for(h=0;h<f.length;++h){if(h===p)continue
var g=f[h]
var v=g.indexOf("]=")
var _=-1===v?g.indexOf("="):v+1
var b,y
if(-1===_){b=t.decoder(g,a.decoder,m,"key")
y=t.strictNullHandling?null:""}else{b=t.decoder(g.slice(0,_),a.decoder,m,"key")
y=t.decoder(g.slice(_+1),a.decoder,m,"value")}y&&t.interpretNumericEntities&&"iso-8859-1"===m&&(y=s(y))
y&&"string"===typeof y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(","))
g.indexOf("[]=")>-1&&(y=o(y)?[y]:y)
i.call(n,b)?n[b]=r.combine(n[b],y):n[b]=y}return n}
var d=function(e,t,n){var r=t
for(var i=e.length-1;i>=0;--i){var o
var a=e[i]
if("[]"===a&&n.parseArrays)o=[].concat(r)
else{o=n.plainObjects?Object.create(null):{}
var s="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a
var l=parseInt(s,10)
if(n.parseArrays||""!==s)if(!isNaN(l)&&a!==s&&String(l)===s&&l>=0&&n.parseArrays&&l<=n.arrayLimit){o=[]
o[l]=r}else o[s]=r
else o={0:r}}r=o}return r}
var f=function(e,t,n){if(!e)return
var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e
var o=/(\[[^[\]]*])/
var a=/(\[[^[\]]*])/g
var s=n.depth>0&&o.exec(r)
var l=s?r.slice(0,s.index):r
var c=[]
if(l){if(!n.plainObjects&&i.call(Object.prototype,l)&&!n.allowPrototypes)return
c.push(l)}var u=0
while(n.depth>0&&null!==(s=a.exec(r))&&u<n.depth){u+=1
if(!n.plainObjects&&i.call(Object.prototype,s[1].slice(1,-1))&&!n.allowPrototypes)return
c.push(s[1])}s&&c.push("["+r.slice(s.index)+"]")
return d(c,t,n)}
var p=function(e){if(!e)return a
if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined")
var t="undefined"===typeof e.charset?a.charset:e.charset
return{allowDots:"undefined"===typeof e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:a.comma,decoder:"function"===typeof e.decoder?e.decoder:a.decoder,delimiter:"string"===typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"===typeof e.depth||false===e.depth?+e.depth:a.depth,ignoreQueryPrefix:true===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:false!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}
e.exports=function(e,t){var n=p(t)
if(""===e||null===e||"undefined"===typeof e)return n.plainObjects?Object.create(null):{}
var i="string"===typeof e?u(e,n):e
var o=n.plainObjects?Object.create(null):{}
var a=Object.keys(i)
for(var s=0;s<a.length;++s){var l=a[s]
var c=f(l,i[l],n)
o=r.merge(o,c,n)}return r.compact(o)}},oMlh:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
n("jYyc")
t["a"]={toggle(e){const t=i()(e).data.bind(i()(e))
return i.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
i()(e).toggleClass("btn-success")
i()("i",e).toggleClass("icon-empty icon-complete")
i()(".mark-done-labels span",e).toggleClass("visible")})}}},p6Wi:function(e,t,n){"use strict"
var r=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var o=r["default"].scoped("instructure_misc_plugins")
var a=n("ouhR")
var s=n.n(a)
var l=n("5Ky4")
var c=n("JD5e")
n("jYyc")
n("YGE8")
n("B1vq")
n("s/PJ")
s.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(s.a.raw(n))}
s.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
s.a.fn.scrollbarWidth=function(){const e=s()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const r=t.innerWidth()
e.remove()
return n-r}
s.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
s.a.fn.undim=function(e){return this.animate({opacity:1},e)}
s.a.fn.confirmDelete=function(e){e=s.a.extend({},s.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let r=true
e.noMessage=e.noMessage||e.no_message
const i=function(){if(!r){e.cancelled&&s.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const r=e.prepareData?e.prepareData.call(t,n):{}
r.authenticity_token=Object(c["a"])()
s.a.ajaxJSON(e.url,"DELETE",r,n=>{e.success.call(t,n)},(n,r,i,o)=>{e.error&&s.a.isFunction(e.error)?e.error.call(t,n,r,i,o):s.a.ajaxJSON.unhandledXHRs.push(r)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!s.a.skipConfirmations){if(e.dialog){r=false
const t="object"===typeof e.dialog?e.dialog:{}
const a=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=s()(e.message).dialog(s.a.extend({},{modal:true,close:i,buttons:[{text:o.t("#buttons.cancel","Cancel"),click(){s()(this).dialog("close")}},{text:o.t("#buttons.delete","Delete"),class:a,click(){r=true
s()(this).dialog("close")}}]},t))
return}r=confirm(e.message)}i()}
s.a.fn.confirmDelete.defaults={get message(){return o.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
s.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let r=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(r="#"+e.substring(5))}this.bind("document_fragment_change",e)
const i=this
let o=false
for(t=0;t<s.a._checkFragments.fragmentList.length;t++){const e=s.a._checkFragments.fragmentList[t]
e.doc[0]==i[0]&&(o=true)}o||s.a._checkFragments.fragmentList.push({doc:i,fragment:""})
s()(window).bind("hashchange",s.a._checkFragments)
setTimeout(()=>{r&&r.length>0?i.triggerHandler("document_fragment_change",r):i&&i[0]&&i[0].location&&i[0].location.hash.length>0&&i.triggerHandler("document_fragment_change",i[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
s.a._checkFragments=function(){const e=s.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const r=n.doc
if(r[0].location.hash!=n.fragment){r.triggerHandler("document_fragment_change",r[0].location.hash)
n.fragment=r[0].location.hash
s.a._checkFragments.fragmentList[t]=n}}}
s.a._checkFragments.fragmentList=[]
s.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
s.a.fn.showIf=function(e){if(s.a.isFunction(e))return this.each((function(t){s()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
s.a.fn.disableIf=function(e){s.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
s.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}s()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const r=this.width()
const i=this.height()
const o=(e.container||this).zIndex()
t=s()(document.createElement("div"))
t.css({width:r+6,height:i+6,top:n.top-3,left:n.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){s()(this).stop().fadeOut("fast",(function(){s()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
s()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){s()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){s()(this).remove()}))
e&&e.scroll&&s()("html,body").scrollToVisible(t)}
s.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
s.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
s.a.fn.fillWindowWithMe=function(e){const t=s.a.extend({minHeight:400},e),n=s()(this),r=s()("#wrapper"),i=s()("#main"),o=s()("#not_right_side"),a=s()(window),l=s()(this).add(t.alsoResize)
function c(){l.height(0)
const e=a.height()-(r.offset().top+r.outerHeight())+(i.height()-o.height()),c=Math.max(400,e)
l.height(c)
s.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
a.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
s.a.fn.autoGrowInput=function(e){e=s.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||s()(this).width(),n="",r=s()(this),i=s()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:r.css("fontSize"),fontFamily:r.css("fontFamily"),fontWeight:r.css("fontWeight"),letterSpacing:r.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(()=>{if(n===(n=r.val()))return
i.text(n)
const o=i.width(),a=o+e.comfortZone>=t?o+e.comfortZone:t,s=r.width(),l=a<s&&a>=t||a>t&&a<e.maxWidth
l&&r.width(a)})}
i.insertAfter(r)
s()(this).bind("keyup keydown blur update change",o)}))
return this}
s.a},sxOR:function(e,t,n){"use strict"
var r=String.prototype.replace
var i=/%20/g
var o=n("0jNN")
var a={RFC1738:"RFC1738",RFC3986:"RFC3986"}
e.exports=o.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return r.call(e,i,"+")},RFC3986:function(e){return String(e)}}},a)},ysUD:function(e,t,n){"use strict"
var r=n("VTBJ")
var i=n("rePB")
var o=n("1OyB")
var a=n("vuIU")
var s=n("md7G")
var l=n("foSv")
var c=n("Ji7U")
var u=n("q1tI")
var d=n.n(u)
var f=n("17x9")
var p=n.n(f)
var h=n("TSYQ")
var m=n.n(h)
var g=n("eAd9")
var v=n.n(g)
var _=n("J2CL")
var b=n("sQ3t")
var y=n("jtGx")
function w(e){var t=e.colors,n=e.borders,r=e.stacking
return{zIndex:r.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:t.borderBrand,borderRadius:n.radiusMedium,borderWidth:n.widthSmall}}w.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return S}))
var k,O,j,x
var E={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var S=(k=Object(_["themeable"])(w,E),k(O=(x=j=function(e){Object(c["a"])(t,e)
function t(){var e
var n
Object(o["a"])(this,t)
for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a]
n=Object(s["a"])(this,(e=Object(l["a"])(t)).call.apply(e,[this].concat(i)))
n.handleElementRef=function(e){n.props.elementRef(e)}
n.contentRef=function(e){n._content=e}
return n}Object(a["a"])(t,[{key:"componentDidMount",value:function(){this.props.fullscreen&&v.a.on()}},{key:"componentWillUnmount",value:function(){this.props.fullscreen&&v.a.off()}},{key:"render",value:function(){var e
var n=Object(b["a"])(this.props.children,{ref:this.contentRef})
var o=m()((e={},Object(i["a"])(e,E.root,true),Object(i["a"])(e,E[this.props.placement],true),Object(i["a"])(e,E.fullscreen,this.props.fullscreen),e))
var a=Object(r["a"])({},Object(y["a"])(this.props,t.propTypes),{className:o,ref:this.handleElementRef})
if("function"===typeof this.props.onClick){a.onClick=this.props.onClick
a.tabIndex=-1}return d.a.createElement("span",a,n)}}])
t.displayName="Mask"
return t}(u["Component"]),j.propTypes={onDismiss:p.a.func,placement:p.a.oneOf(["top","center","bottom","stretch"]),fullscreen:p.a.bool,children:p.a.node,onClick:p.a.func,elementRef:p.a.func},j.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0,elementRef:function(e){}},x))||O)}}])

//# sourceMappingURL=assignment_show-c-283213f74a.js.map