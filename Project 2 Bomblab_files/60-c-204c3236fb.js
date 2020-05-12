(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[60],{"5Shj":function(e,t,r){"use strict"
var n=r("Ff2n")
var o=r("1OyB")
var i=r("vuIU")
var a=r("md7G")
var _=r("foSv")
var d=r("Ji7U")
var s=r("q1tI")
var l=r.n(s)
var c=r("17x9")
var p=r.n(c)
var v=r("u9uf")
var g=r("J2CL")
var h=r("nAyT")
var f=r("oXx0")
var u=r("bZJi")
var m=r("AdN2")
var b=function(e){var t=e.typography,r=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:r.small}}
r.d(t,"a",(function(){return T}))
var y,x,w,k,j,O
var E={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var T=(y=Object(h["a"])("7.0.0",null,"Use Tooltip from ui-tooltip instead."),x=Object(f["a"])(),w=Object(g["themeable"])(b,E),y(k=x(k=w(k=(O=j=function(e){Object(d["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(_["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.tip,o=e.variant,i=e.on,a=e.placement,_=e.mountNode,d=e.positionTarget,s=e.constrain,c=Object(n["a"])(e,["children","tip","variant","on","placement","mountNode","positionTarget","constrain"])
return l.a.createElement(u["a"],Object.assign({},c,{renderTip:r,on:i,color:"inverse"===o?"primary":"primary-inverse",placement:a,mountNode:_,positionTarget:d,constrain:s}),t)}}])
t.displayName="Tooltip"
return t}(s["Component"]),j.propTypes={children:p.a.oneOfType([p.a.node,p.a.func]).isRequired,tip:p.a.node.isRequired,as:p.a.elementType,on:p.a.oneOfType([p.a.oneOf(["click","hover","focus"]),p.a.arrayOf(p.a.oneOf(["click","hover","focus"]))]),variant:p.a.oneOf(["default","inverse"]),placement:v["a"].placement,mountNode:v["a"].mountNode,positionTarget:p.a.oneOfType([m["a"],p.a.func]),constrain:v["a"].constrain},j.defaultProps={on:void 0,variant:"inverse",placement:"top",mountNode:null,positionTarget:void 0,constrain:"window"},O))||k)||k)||k)},AXvA:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r("HMVb")
function o(e,t){var r=Object.keys(e)
if(1!==r.length)throw new Error("Expected exactly one key in query object.")
var o=r[0]
var a=["minHeight","maxHeight","minWidth","maxWidth"]
if(-1===a.indexOf(o))throw new Error("Invalid key `".concat(o,"` in query object. Valid keys should consist of one of the following: ")+"".concat(a.join(", ")," (case sensitive)"))
var _=e[o]
if("string"!==typeof _&&"number"!==typeof _)throw new Error("The value of the query object must be a string or number.")
if(!_)throw new Error("No value supplied for query object")
return"(".concat(i(o.toLowerCase()),": ").concat(Object(n["a"])(_,t),"px)")}function i(e){return e.slice(0,3)+"-"+e.slice(3)}},H4Sz:function(e,t,r){"use strict"
var n=r("An8g")
var o=r("ouhR")
var i=r.n(o)
var a=r("q1tI")
var _=r.n(a)
r("17x9")
var d=r("i8i4")
var s=r.n(d)
var l=r("P4VU")
r("MWZS")
var c=r("mykf")
var p=r("etQE")
var v=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var g=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var h=Object(n["a"])("div",{})
class f extends _.a.Component{constructor(e){super(e)
this.getMaxIFrameWidth=()=>{if(this.state.tools){let e=0
for(let t=0;t<this.state.tools.length;t++){const r=this.state.tools[t]
const n=this["tool_iframe_".concat(r.definition_id)].offsetWidth
n>e&&(e=n)}return e}return null}
this.handleAlertFocus=e=>{const t={iframeStyle:{border:"2px solid #008EE2",width:"".concat(this.getMaxIFrameWidth()-4,"px")}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="")
this.setState(t)}
this.handleAlertBlur=e=>{const t={iframeStyle:{border:"none",width:"100%"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="screenreader-only":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="screenreader-only")
this.setState(t)}
this.state={tools:[],beforeExternalContentAlertClass:"screenreader-only",afterExternalContentAlertClass:"screenreader-only",iframeStyle:{}}}componentWillMount(){this.getTools()}componentDidMount(){if(this.state.tools)for(let e=0;e<this.state.tools.length;e++){const t=this.state.tools[e]
this["tool_iframe_".concat(t.definition_id)].setAttribute("allow",Object(c["a"])())}}async getTools(){const e=encodeURI("".concat(this.getDefinitionsUrl(),"?placements[]=").concat(this.props.placement))
try{const t=Object(p["f"])(e)||fetch(e,p["e"])
const r=await Object(p["b"])(t)
r.forEach(e=>e.launch=this.getLaunch(e))
this.setState({tools:r})}catch(e){i.a.flashError(l["a"].t("Error retrieving assignment external tools"))}}getDefinitionsUrl(){return"/api/v1/courses/".concat(this.props.courseId,"/lti_apps/launch_definitions")}getLaunch(e){const t=e.placements[this.props.placement].url
let r="?borderless=true&url=".concat(encodeURIComponent(t),"&placement=").concat(this.props.placement)
this.props.assignmentId&&(r+="&assignment_id=".concat(this.props.assignmentId))
const n="/courses/".concat(this.props.courseId,"/external_tools/retrieve")
return n+r}renderTool(e){const t={}
i.a.extend(t,this.state.iframeStyle)
if(e.placements[this.props.placement].launch_height){t.height=e.placements[this.props.placement].launch_height
t.minHeight="unset"}e.placements[this.props.placement].launch_width&&(t.width=e.placements[this.props.placement].launch_width)
return _.a.createElement("iframe",{src:e.launch,className:"tool_launch",style:t,key:e.definition_id,title:l["a"].t("External Tool %{tool_id}",{tool_id:e.definition_id}),ref:t=>{this["tool_iframe_".concat(e.definition_id)]=t},"data-lti-launch":"true"})}renderToolsContainer(){const e="before_external_content_info_alert ".concat(this.state.beforeExternalContentAlertClass)
const t="after_external_content_info_alert ".concat(this.state.afterExternalContentAlertClass)
return Object(n["a"])("div",{style:{display:"about:blank"===this.state.toolLaunchUrl?"none":"block"}},void 0,Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,v,l["a"].t("The following content is partner provided"))),this.state.tools.map(e=>this.renderTool(e)),Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,g,l["a"].t("The preceding content is partner provided"))))}render(){if(0===this.state.tools.length)return h
return Object(n["a"])("div",{},void 0,Object(n["a"])("div",{className:"border border-trbl border-round"},void 0,this.renderToolsContainer()))}}f.defaultProps={assignmentId:void 0}
const u=function(e,t,r,o){const i=Object(n["a"])(f,{placement:t,courseId:r,assignmentId:o})
s.a.render(i,e)}
const m={configTools:f,attach:u}
t["a"]=m},P4VU:function(e,t,r){"use strict"
var n=r("pQTu")
var o=r("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"error_retrieving_assignment_external_tools_9102d343":"خطأ أثناء استعادة الأدوات الخارجية للمهمة","error_retrieving_similarity_detection_tools_d6d4f9e9":"خطأ أثناء استعادة أدوات اكتشاف التشابه","external_tool_tool_id_6028b3b1":"أداة خارجية %{tool_id}","the_following_content_is_partner_provided_ed1da756":"المحتوى التالي تم إدخاله بواسطة شريك","the_preceding_content_is_partner_provided_d753928c":"المحتوى السابق تم إدخاله بواسطة شريك"},"cy":{"error_retrieving_assignment_external_tools_9102d343":"Gwall wrth adfer adnoddau allanol aseiniad","error_retrieving_similarity_detection_tools_d6d4f9e9":"Gwall wrth adfer adnoddau adnabod tebygrwydd","external_tool_tool_id_6028b3b1":"Adnodd Allanol %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Mae’r cynnwys canlynol yn cael ei ddarparu gan bartner","the_preceding_content_is_partner_provided_d753928c":"Mae’r cynnwys blaenorol yn cael ei ddarparu gan bartner"},"da":{"error_retrieving_assignment_external_tools_9102d343":"Fejl ved hentning af opgavens eksterne værktøjer","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","external_tool_tool_id_6028b3b1":"Eksternt værktøj %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"da-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Fejl ved hentning af opgavens eksterne værktøjer","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","external_tool_tool_id_6028b3b1":"Eksternt værktøj %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"de":{"error_retrieving_assignment_external_tools_9102d343":"Fehler beim Abrufen aufgabenexterner-Tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fehler beim Abrufen der Similarity-Detection-Tools","external_tool_tool_id_6028b3b1":"Externes Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Der folgende Content stammt von einem Partner.","the_preceding_content_is_partner_provided_d753928c":"Der vorhergehende Content stammt von einem Partner."},"en-AU":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-AU-x-unimelb":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-CA":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB-x-lbs":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving task external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB-x-ukhe":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"es":{"error_retrieving_assignment_external_tools_9102d343":"Error al recuperar las herramientas externas de la tarea","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error al consultar las herramientas de detección de similitud","external_tool_tool_id_6028b3b1":"Herramienta Externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"El siguiente contenido está proporcionado por un socio","the_preceding_content_is_partner_provided_d753928c":"El contenido anterior está proporcionado por un socio"},"fa":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"خطا در بازیابی ابزارهای تشخیص شباهت","the_following_content_is_partner_provided_ed1da756":"محتوای زیر توسط شریک فراهم شده است","the_preceding_content_is_partner_provided_d753928c":"محتوای پیشین توسط شریک ارائه شده است"},"fi":{"error_retrieving_assignment_external_tools_9102d343":"Virhe noudettaessa tehtävän ulkoisia työkaluja","error_retrieving_similarity_detection_tools_d6d4f9e9":"Virhe noudettaessa samanlaisuuden havaintotyökaluja","external_tool_tool_id_6028b3b1":"Ulkoinen työkalu %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Seuraava sisältö on kumppanin toimittajaa","the_preceding_content_is_partner_provided_d753928c":"edeltävä sisältö on kumppanin toimittamaa"},"fr":{"error_retrieving_assignment_external_tools_9102d343":"Outils externes de récupération d\'erreur des travaux","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similitude.","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par un partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu qui précède était fourni par un partenaire"},"fr-CA":{"error_retrieving_assignment_external_tools_9102d343":"Erreur lors de la récupération des outils externes des tâches","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similarité","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par le partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu précédent est fourni par le partenaire"},"he":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"תקלה בהעלאת כלי זיהוי העתקות"},"ht":{"error_retrieving_assignment_external_tools_9102d343":"Erè pandan rekiperasyon zouti ekstèn sesyon an","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erè pandan rekiperasyon zouti deteksyon resanblans yo","external_tool_tool_id_6028b3b1":"Zouti Ekstèn %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Kontni annapre a se yon asosye ki bay li","the_preceding_content_is_partner_provided_d753928c":"Kontni anvan an se yon asosye ki bay li"},"is":{"error_retrieving_assignment_external_tools_9102d343":"Villa við að ná í ytri tól verkefnis","error_retrieving_similarity_detection_tools_d6d4f9e9":"Villa við endurheimt líkindagreiningartóla","external_tool_tool_id_6028b3b1":"Ytra tól %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Eftirfarandi efni er gefið upp af samstarfsaðila","the_preceding_content_is_partner_provided_d753928c":"Framangreint efni er gefið upp af samstarfsaðila"},"it":{"error_retrieving_assignment_external_tools_9102d343":"Errore recupero strumenti esterni compito","error_retrieving_similarity_detection_tools_d6d4f9e9":"Errore durante il recupero degli strumenti di rilevamento similarità","external_tool_tool_id_6028b3b1":"Strumento esterno %{tool_id}","the_following_content_is_partner_provided_ed1da756":"I contenuti seguenti sono forniti dal partner","the_preceding_content_is_partner_provided_d753928c":"I contenuti precedenti sono forniti dal partner"},"ja":{"error_retrieving_assignment_external_tools_9102d343":"課題外部ツールの取得中にエラーが発生しました","error_retrieving_similarity_detection_tools_d6d4f9e9":"類似性検知ツールの取得中にエラーが発生しました","external_tool_tool_id_6028b3b1":"外部ツール%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下のコンテンツはパートナーが提供しています","the_preceding_content_is_partner_provided_d753928c":"上記のコンテンツはパートナーが提供しています"},"mi":{"error_retrieving_assignment_external_tools_9102d343":"Hapa ki te tiki i ngā whakataunga taputapu o waho","error_retrieving_similarity_detection_tools_d6d4f9e9":"I hapa i te wā e tiki ana taputapu rapunga ritenga.","external_tool_tool_id_6028b3b1":"Taputapu o waho %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Ko ngā kōrero e whai ake nei he hoa mahi","the_preceding_content_is_partner_provided_d753928c":"Ko te tuhinga o mua he hoa mahi"},"nb":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nb-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nl":{"error_retrieving_assignment_external_tools_9102d343":"Fout bij het ophalen van externe tools voor opdrachten","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fout bij het ophalen van tools voor vergelijkbaarheidsdetectie","external_tool_tool_id_6028b3b1":"Externe tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"De volgende inhoud is door een partner geleverd","the_preceding_content_is_partner_provided_d753928c":"De voorgaande inhoud is door een partner geleverd"},"nn":{"error_retrieving_assignment_external_tools_9102d343":"Det oppstod ein feil under henting av oppgåve frå eksternt verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Det oppstod ein feil ved framhenting av verktøy for likskapskontroll","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgande innhald er lagt til av partnar","the_preceding_content_is_partner_provided_d753928c":"Det føregåande innhaldet er lagt til av partnar"},"pl":{"error_retrieving_assignment_external_tools_9102d343":"Błąd pobierania zewnętrznych narzędzi do zadań","error_retrieving_similarity_detection_tools_d6d4f9e9":"Błąd pobierania narzędzi do wykrywania podobieństw","external_tool_tool_id_6028b3b1":"Narzędzie zewnętrzne %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Następującą zawartość dostarcza partner","the_preceding_content_is_partner_provided_d753928c":"Poprzednią zawartość dostarcza partner"},"pt":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas de atribuição","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta Externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"O parceiro fornece o seguinte conteúdo","the_preceding_content_is_partner_provided_d753928c":"O conteúdo anterior é parceiro fornecido"},"pt-BR":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas da tarefa","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar as ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"O seguinte conteúdo é fornecido por parceiro","the_preceding_content_is_partner_provided_d753928c":"O conteúdo precedente é fornecido por parceiro"},"ru":{"error_retrieving_assignment_external_tools_9102d343":"Ошибка при получении внешних инструментов задания","error_retrieving_similarity_detection_tools_d6d4f9e9":"Ошибка при считывании инструментов обнаружения сходства","external_tool_tool_id_6028b3b1":"Внешний инструмент %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Последующий контент предоставляется партнером","the_preceding_content_is_partner_provided_d753928c":"Предыдущий контент предоставляется партнером"},"sl":{"error_retrieving_assignment_external_tools_9102d343":"Napaka pri pridobivanju zunanjih orodij za nalogo","error_retrieving_similarity_detection_tools_d6d4f9e9":"Napaka pri pridobivanju orodij za zaznavanje ujemanja","external_tool_tool_id_6028b3b1":"Zunanje orodje %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Naslednjo vsebino zagotavljajo partnerji.","the_preceding_content_is_partner_provided_d753928c":"Predhodno vsebino zagotavljajo partnerji."},"sv":{"error_retrieving_assignment_external_tools_9102d343":"Det gick inte att hämta externa verktyg för uppgiften","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av verktyg för likhetsidentifiering","external_tool_tool_id_6028b3b1":"Externt verktyg %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Följande innehåll har tillhandahållits av partner","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet har tillhandahållits av partner"},"sv-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Det gick inte att hämta externa verktyg för uppgiften","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av verktyg för likhetsidentifiering","external_tool_tool_id_6028b3b1":"Externt verktyg %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Följande innehåll har tillhandahållits av partner","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet har tillhandahållits av partner"},"uk":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Помилка отримання параметрів виявлення схожості","the_following_content_is_partner_provided_ed1da756":"Наступний контент наданий партнером","the_preceding_content_is_partner_provided_d753928c":"Попередній контент наданий партнером"},"zh-Hans":{"error_retrieving_assignment_external_tools_9102d343":"提取作业外部工具时出错","error_retrieving_similarity_detection_tools_d6d4f9e9":"检索相似性检测工具时发生错误","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下内容由合作伙伴提供","the_preceding_content_is_partner_provided_d753928c":"以上内容由合作伙伴提供"},"zh-Hant":{"error_retrieving_assignment_external_tools_9102d343":"檢索作業外部工具時出錯","error_retrieving_similarity_detection_tools_d6d4f9e9":"檢索相似性檢測工具錯誤","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下內容由合作夥伴提供","the_preceding_content_is_partner_provided_d753928c":"上述內容由合作夥伴提供"}}'))
r("jQeR")
r("0sPK")
t["a"]=n["default"].scoped("moderated_grading")},bZJi:function(e,t,r){"use strict"
var n=r("Ff2n")
var o=r("VTBJ")
var i=r("1OyB")
var a=r("vuIU")
var _=r("md7G")
var d=r("foSv")
var s=r("Ji7U")
var l=r("q1tI")
var c=r.n(l)
var p=r("17x9")
var v=r.n(p)
var g=r("nAyT")
var h=r("KgFQ")
var f=r("jtGx")
var u=r("sQ3t")
var m=r("E+IV")
var b=r("UCAh")
var y=r("BTe1")
var x=r("J2CL")
var w=r("oXx0")
var k=r("jsCG")
var j=r("AdN2")
var O=function(e){var t=e.typography,r=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:r.small}}
r.d(t,"a",(function(){return z}))
var E,T,C,F,S,N
var A={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var z=(E=Object(g["a"])("8.0.0",{tip:"renderTip",variant:"color"}),T=Object(w["a"])(),C=Object(x["themeable"])(O,A),E(F=T(F=C(F=(N=S=function(e){Object(s["a"])(t,e)
function t(){var e
var r
Object(i["a"])(this,t)
for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a]
r=Object(_["a"])(this,(e=Object(d["a"])(t)).call.apply(e,[this].concat(o)))
r._id=Object(y["a"])("Tooltip")
r.state={hasFocus:false}
r.handleFocus=function(e){r.setState({hasFocus:true})}
r.handleBlur=function(e){r.setState({hasFocus:false})}
return r}Object(a["a"])(t,[{key:"renderTrigger",value:function(){var e=this.props,r=e.children,n=e.as
var i=this.state.hasFocus
var a={"aria-describedby":this._id}
if(n){var _=Object(h["a"])(t,this.props)
var d=Object(f["a"])(this.props,t.propTypes)
return c.a.createElement(_,Object.assign({},d,a),r)}return"function"===typeof r?r({focused:i,getTriggerProps:function(e){return Object(o["a"])({},a,{},e)}}):Object(u["a"])(this.props.children,a)}},{key:"render",value:function(){var e=this
var t=this.props,r=t.renderTip,o=t.isShowingContent,i=t.defaultIsShowingContent,a=t.on,_=t.placement,d=t.mountNode,s=t.constrain,l=t.offsetX,p=t.offsetY,v=t.positionTarget,g=t.onShowContent,h=t.onHideContent,u=t.tip,b=(t.variant,Object(n["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var y=this.props.variant
y=y?"default"===y?"primary-inverse":"primary":this.props.color
return c.a.createElement(k["a"],Object.assign({},Object(f["b"])(b),{isShowingContent:o,defaultIsShowingContent:i,on:a,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:_,color:"primary"===y?"primary-inverse":"primary",mountNode:d,constrain:s,shadow:"none",offsetX:l,offsetY:p,positionTarget:v,renderTrigger:function(){return e.renderTrigger()},onShowContent:g,onHideContent:h,onFocus:this.handleFocus,onBlur:this.handleBlur}),c.a.createElement("span",{id:this._id,className:A.root,role:"tooltip"},r?Object(m["a"])(r):u))}}])
t.displayName="Tooltip"
return t}(l["Component"]),S.propTypes={children:v.a.oneOfType([v.a.node,v.a.func]).isRequired,renderTip:v.a.oneOfType([v.a.node,v.a.func]),isShowingContent:v.a.bool,defaultIsShowingContent:v.a.bool,as:v.a.elementType,on:v.a.oneOfType([v.a.oneOf(["click","hover","focus"]),v.a.arrayOf(v.a.oneOf(["click","hover","focus"]))]),color:v.a.oneOf(["primary","primary-inverse"]),placement:b["a"].placement,mountNode:b["a"].mountNode,constrain:b["a"].constrain,offsetX:v.a.oneOfType([v.a.string,v.a.number]),offsetY:v.a.oneOfType([v.a.string,v.a.number]),positionTarget:v.a.oneOfType([j["a"],v.a.func]),onShowContent:v.a.func,onHideContent:v.a.func,tip:v.a.node,variant:v.a.oneOf(["default","inverse"])},S.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},N))||F)||F)||F)},mykf:function(e,t,r){"use strict"
const n=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=n},u9uf:function(e,t,r){"use strict"
r.d(t,"a",(function(){return _}))
var n=r("17x9")
var o=r.n(n)
var i=r("AdN2")
var a=r("AXvA")
var _={validQuery:function(e,t,r){try{Object(a["a"])(e[t])}catch(e){return new Error("Invalid query prop supplied to `".concat(r,"`. ").concat(e.message))}},placement:o.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:o.a.oneOfType([i["a"],o.a.func]),constrain:o.a.oneOfType([i["a"],o.a.func,o.a.oneOf(["window","scroll-parent","parent","none"])])}}}])

//# sourceMappingURL=60-c-204c3236fb.js.map