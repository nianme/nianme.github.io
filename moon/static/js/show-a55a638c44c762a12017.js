var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

STK.register("kit.extra.language",function(a){window.$LANG||(window.$LANG={});return function(b,c){var d=a.core.util.language(b,$LANG);d=d.replace(/\\}/ig,"}");if(c){d=a.templet(d,c)}return d}});if(typeof scope==="undefined"){scope={}}scope.loginKit=function(){if(window.scope){var c=window.scope.current_user_weibo||window.scope.current_user_sina;if(c){return{uid:c,isLogin:!!c}}}if(window.$CONFIG){var c=window.$CONFIG.current_user_weibo||window.$CONFIG.current_user_sina||window.$CONFIG.uid||window.$CONFIG.$uid;if(c){return{uid:c,isLogin:!!c}}}var b=document.cookie+";";var f=["SUP","=([^;]*)?;"].join("");var a=["(\\?|&)","uid","=([^&]*)(&|$)"].join("");var e=b.match(new RegExp(f,"i"));e=(e)?e[1]||"":"";e=unescape(e);var c=e.match(new RegExp(a));c=(c)?c[2]||"":"";var d=scope["$oid"];return{uid:c,isLogin:!!c,isAdmin:c&&d&&(c==d)}};scope.$isLogin=function(){return scope.loginKit().isLogin};scope.$isAdmin=function(){return scope.loginKit().isAdmin};STK.register("core.obj.parseParam",function(a){return function(d,c,b){var e,f={};c=c||{};for(e in d){f[e]=d[e];if(c[e]!=null){if(b){if(d.hasOwnProperty[e]){f[e]=c[e]}}else{f[e]=c[e]}}}return f}});STK.register("common.widget.log",function(b){var a={app_sharebutton:1,app_followbutton:2,app_livestream:4,app_listweibo:5,app_weiboshow:6,app_commentbox:7};return function(i){var e=b.core.obj.parseParam({vsrc:"app_weiboshow",refer:"",step:1},i);var g=scope.refer||scope.$refer||e.refer,f=scope.loginKit().uid||"",h=(scope.appkey||$CONFIG.$appkey||$CONFIG.appkey||0),c=a[e.vsrc]||"";var j="//web.archive.org/web/20190131013338/http://rs.sinajs.cn/r.gif?uid="+f+"&appid="+h+"&refer="+g+"&cat="+c+"&step="+e.step+"&rnd="+(+new Date());var d=new Image();d.src=j;d=null}});STK.register("common.widget.login",function(b){var a={vsrc:"app_weiboshow",appsrc:"",showlogo:0,callback:function(){}};if(typeof App==="undefined"){App={}}return function(f){f=b.parseParam(a,f);if(!f.appsrc){f.appsrc=scope?(scope.appsrc?scope.appsrc:(scope.$appsrc?scope.$appsrc:"")):""}var e={};App.loginBackUrlCallBack=function(j){b.custEvent.fire(e,"login",j);f.step=2;b.common.widget.log(f)};var i=function(){g();c();h();d()};var g=function(){};var c=function(){};var h=function(){b.custEvent.define(e,"login")};var d=function(){b.custEvent.add(e,"login",function(j){f.callback(j)})};e.showLogin=function(){var m="&"+b.jsonToQuery(f);var l=navigator.userAgent.indexOf("360 Aphone Browser")>=0;var n=/micromessenger\/(\d+\.\d+\.\d+)/i.test(navigator.userAgent);if(l||n){location.href="https://web.archive.org/web/20190131013338/http://service.weibo.com/reg/loginindex.php?regbackurl=http%3A%2F%2Fweibo.com&backurl="+encodeURIComponent(location.href)+m+"&rnd="+(+new Date().valueOf());return}var k="https://web.archive.org/web/20190131013338/http://service.weibo.com/reg/loginindex.php?regbackurl=http%3A%2F%2Fweibo.com&backurl=http%3A%2F%2F"+location.host+"%2Fstaticjs%2FloginProxy.html"+m+"&rnd="+(+new Date().valueOf());if(/weibo.com/.test(location.host)){k=k.replace(/\/widget/,"")}var j=window.open(k,"miniblog_login",["toolbar=1,status=0,resizable=1,width=620,height=540,left=",(screen.width-620)/2,",top=",(screen.height-450)/2].join(""));j.focus();b.common.widget.log(f)};i();return e}});STK.register("module.layer",function(b){var c=function(e){var d={};if(e.style.display=="none"){e.style.visibility="hidden";e.style.display="";d.w=e.offsetWidth;d.h=e.offsetHeight;e.style.display="none";e.style.visibility="visible"}else{d.w=e.offsetWidth;d.h=e.offsetHeight}return d};var a=function(g,f){f=f||"topleft";var e=null;if(g.style.display=="none"){g.style.visibility="hidden";g.style.display="";e=b.core.dom.position(g);g.style.display="none";g.style.visibility="visible"}else{e=b.core.dom.position(g)}if(f!=="topleft"){var d=c(g);if(f==="topright"){e.l=e.l+d.w}else{if(f==="bottomleft"){e.t=e.t+d.h}else{if(f==="bottomright"){e.l=e.l+d.w;e.t=e.t+d.h}}}}return e};return function(h){var k=b.core.dom.builder(h);var g=k.list.outer[0],e=k.list.inner[0];var j=b.core.dom.uniqueID(g);var i={};var d=b.core.evt.custEvent.define(i,"show");b.core.evt.custEvent.define(d,"hide");var f=null;i.show=function(){g.style.display="";b.core.evt.custEvent.fire(d,"show");return i};i.hide=function(){g.style.display="none";b.custEvent.fire(d,"hide");return i};i.getPosition=function(l){return a(g,l)};i.getSize=function(l){if(l||!f){f=c.apply(i,[g])}return f};i.html=function(l){if(l!==undefined){e.innerHTML=l}return e.innerHTML};i.text=function(l){if(text!==undefined){e.innerHTML=b.core.str.encodeHTML(l)}return b.core.str.decodeHTML(e.innerHTML)};i.appendChild=function(l){e.appendChild(l);return i};i.getUniqueID=function(){return j};i.getOuter=function(){return g};i.getInner=function(){return e};i.getParentNode=function(){return g.parentNode};i.getDomList=function(){return k.list};i.getDomListByKey=function(l){return k.list[l]};i.getDom=function(m,l){if(!k.list[m]){return false}return k.list[m][l||0]};i.getCascadeDom=function(m,l){if(!k.list[m]){return false}return b.core.dom.cascadeNode(k.list[m][l||0])};return i}});STK.register("ui.tipPrototype",function(a){var b=10003;return function(d){var e,i,h,g,c;var f='<div node-type="outer" class="WB_widgets W_layer" style="position: absolute; display:none;" ><div node-type="inner" class="bg"></div></div>';e=a.parseParam({direct:"up",showCallback:a.core.func.empty,hideCallback:a.core.func.empty},d);i=a.module.layer(f,e);h=i.getOuter();g=i.getInner();i.setTipWH=function(){c=this.getSize(true);this.tipWidth=c.w;this.tipHeight=c.h;return this};i.setTipWH();i.setContent=function(j){if(typeof j=="string"){g.innerHTML=j}else{g.appendChild(j)}this.setTipWH();return this};i.setLayerXY=function(p){if(!p){throw"ui.tipPrototype need pNode as first parameter to set tip position"}var q=STK.core.dom.position(p);var l=q.l;var o=p.offsetWidth;var k=p.offsetHeight;var n=Math.min(Math.max((l+(o-this.tipWidth)/2),a.scrollPos().left),(a.scrollPos().left+STK.winSize().width)-this.tipWidth);var m=q.t;if(e.direct==="down"){m+=k}var j=[";"];j.push("z-index:",(b++),";");j.push("width:",this.tipWidth,"px;");j.push("height:",this.tipHeight,"px;");j.push("top:",m,"px;");j.push("left:",n,"px;");h.style.cssText+=j.join("")};i.aniShow=function(){var k=this.getOuter();k.style.height="0px";k.style.display="";var j=a.core.ani.tween(k,{end:e.showCallback,duration:250,animationType:"easeoutcubic"});if(e.direct==="down"){j.play({height:this.tipHeight},{staticStyle:"overflow:hidden;position:absolute;"})}else{var l=(parseInt(k.style.top,10)-this.tipHeight);j.play({height:this.tipHeight,top:Math.max(l,a.scrollPos().top)},{staticStyle:"overflow:hidden;position:absolute;"})}};i.anihide=function(){var k=this.getOuter();var m=this;var j=a.core.ani.tween(k,{end:function(){k.style.display="none";k.style.height=m.tipHeight+"px";e.hideCallback()},duration:300,animationType:"easeoutcubic"});if(e.direct==="down"){j.play({height:0},{staticStyle:"overflow:hidden;position:absolute;"})}else{var l=(parseInt(k.style.top,10)+this.tipHeight);j.play({height:0,top:l},{staticStyle:"overflow:hidden;position:absolute;"})}};document.body.appendChild(h);i.destroy=function(){document.body.removeChild(h);i=null};return i}});STK.register("ui.tipAlert",function(a){var b=a.core.util.easyTemplate;return function(c){c=a.parseParam({direct:"up",className:"WB_widgets W_layer",showCallback:a.core.func.empty,hideCallback:a.core.func.empty,template:'<#et temp data><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td><div node-type="msgDiv" class="content layer_mini_info"><p class="clearfix alt_text"><span class="tip_icon WB_tipS_${data.type}"></span>${data.msg}&nbsp; &nbsp; &nbsp; </p></div></td></tr></tbody></table></#et>',type:"ok",msg:""},c);var g=a.ui.tipPrototype(c);var h=g.getInner();var e=g.getOuter();e.className=c.className;h.className="bg";var f=c.template;var i=a.builder(b(f,{type:c.type,msg:c.msg}).toString());g.setContent(i.box);var d=g.destroy;g.destroy=function(){d();g=null};return g}});STK.register("common.widget.reg",function(c){var a=c.kit.extra.language;var b=c.ui.tipAlert({className:"WB_tips_top",showCallback:function(){var d=b.getOuter();d.style.height="";d=null},template:'<#et temp data><div class="tips_inner"><span class="WB_tipS_warn"></span><span class="WB_icon_txt">'+a("#L{您的帐号尚未开通微博，}")+'<a href="https://web.archive.org/web/20190131013338/http://weibo.com/signup/full_info.php?appsrc=6cm7D0&backurl='+encodeURIComponent(document.URL)+'&showlogo=0&vsrc=weiboshow&from=zw" target="_blank">'+a("#L{立即开通}")+"</a></span></#et>"});return function(d){if(!c.isNode(d)){throw"[common.widget.reg] need node as first parameter"}b.setLayerXY(d);b.aniShow();return b}});STK.register("common.widget.addFollow",function(e){var d=e.kit.extra.language;var c=e.core.json.queryToJson;var b=function(){},a={uid:scope.loginKit().uid,url:"",fuid:"",appsrc:"",vsrc:"app_weiboshow",success:b,fail:b,btnTemp:""};var h;var f=function(i){if(i.fuid===i.uid){h.parentNode.innerHTML=d('<span class="WB_btnC"><span><em class="WB_btnicn_ok"></em><em>#L{你自己}</em></span></span>');return"yourself"}if(!i.url){i.url="/widget/weiboshow/aj_attention.php";if(/weibo.com/.test(location.host)){i.url="/weiboshow/aj_attention.php"}}var j=i.btnTemp||'<span class="WB_btnC"><span><em class="WB_btnicn_ok"></em><em>#L{已关注}</em></span></span>';e.ajax({method:"post",url:i.url,args:{wsrc:$CONFIG.wsrc||"app_weibo_show",uid:i.uid,fuid:i.fuid},onComplete:function(l){switch(l.code){case"A00006":break;case"A10007":break;case -1:e.common.widget.reg(h);break;case -2:var k=e.common.widget.login();e.custEvent.add(k,"login",function(){i.uid=scope.loginKit().uid;f(i)});k.showLogin();break;case -3:break}if((l.code=="A00006"||l.code=="A10007")&&h){h.parentNode.innerHTML=d(j)}typeof i.success==="function"&&i.success(l)},onFail:function(k){typeof i.fail==="function"&&i.fail(k)}})};var g=function(k){var j=k.getAttribute("action-data");if(!j){return}var i=c(j);i.uid&&window.open("https://web.archive.org/web/20190131013338/http://www.weibo.com/u/"+i.uid+"?refer_flag=2725420000_weiboxiu")};return function(n,m){if(!n){throw"[common.widget.addFollow] need node as parameter";return}h=n;var j=function(){if(parent!=self&&parent!=parent.parent){return}if(!scope.$isLogin()){var p=e.common.widget.login();e.custEvent.add(p,"login",function(){m.uid=scope.loginKit().uid;g(n)});p.showLogin();return}g(n)};var l={};var o=function(){m=e.parseParam(a,m);if(!m.fuid){m.fuid=n.getAttribute("uid")}i()};var i=function(){e.addEvent(n,"click",j)};var k=function(){e.removeEvent(n,"click",j)};l.destroy=k;o();return l}});STK.register("comp.widget.show.error",function(g){var f=g.addEvent,e=g.E("showTXA"),b=g.E("showTX"),a=g.E("showBtn");var d=g.kit.extra.language,c;return function(){var j={};if(!e){return j}var k=function(){a.style.display="none";b.style.display="block"};var h=function(){var m=g.E("txContent").value;var l="/widget/weiboshow/aj_addmblog.php";if(/weibo.com/.test(location.host)){l="/weiboshow/aj_addmblog.php"}g.ajax({url:l,args:{appkey:$CONFIG.$appsrc,content:encodeURIComponent(m)},method:"post",onComplete:function(o){var p=o.code;switch(p){case"A00006":g.E("showTX").innerHTML=d("#L{提醒成功，辛苦了}");break;case"M01155":alert(d("#L{你刚才好像提醒一次了}"));break;case"M00005":var n=g.common.widget.login();n.showLogin();break;case"M00004":alert(d("#L{参数错误}"));break;case"M00006":alert(d("#L{你未开通微博。}"));break;case"M18003":alert(d("#L{提醒失败}"));break;default:alert(d("#L{提醒失败}"));break}}})};f(e,"click",k);f(g.E("txBtn"),"click",h);var i=function(){g.removeEvent(e,"click",k);g.removeEvent(g.E("txBtn"),"click",h)};j.destroy=i;return j}});STK.register("comp.widget.show.scroll",function(f){var a,e;var b=location.search;var g=f.E("weibo_list_con"),l=f.E("weibo_list"),m=f.E("fans_list_con");var s=f.core,k=s.evt.addEvent,d=s.evt.getEvent,r=s.evt.fireEvent,o=s.evt.stopEvent,c=s.arr.foreach;var i=function(){};var p=null,j=0;var n=/speed=(\d+)/.test(b)?RegExp.$1:0;var q=n||5;var h="down";e={autoScroll:function(u,v){var v=v||q;var t=l.offsetHeight-g.clientHeight;clearInterval(this._timer);this._timer=setInterval(function(){if(!e.isOutRange){return}if(e.lock){return}var w=g.scrollTop;w=u=="down"?Math.min(w+2,t):Math.max(w-2,0);g.scrollTop=w;if(w==0||w==t){e.stop(this._timer)}},v)},start:function(u,v){e.lock=true;var v=v||q;h=u;var t=l.offsetHeight-g.clientHeight;clearInterval(this._timer);this._timer=setInterval(function(){var w=g.scrollTop;w=u==="down"?Math.min(w+2,t):Math.max(w-2,0);g.scrollTop=w;if(w==0||w==t){e.stop()}},v)},lock:false,isOutRange:true,scroll:function(v){clearTimeout(this.ctimer);if(e.isOutRange){return}var u=g.scrollTop;var t=l.offsetHeight-g.clientHeight;u=(v.wheelDelta<=0||v.detail>0)?Math.min(u+20,t):Math.max(u-20,0);g.scrollTop=u;if(u==0||u==t){i();return}o(v);this.ctimer=setTimeout(function(){i()},500)},stop:function(t){clearInterval(t||this._timer);e.lock=false;i()}};a=function(){if(!f.E("weibo_con")||f.E("weibo_con").style.display=="none"){return}g.style.position="relative";g.scrollTop=0;j=l.offsetTop;p=f.sizzle(".weiboShow_mainFeed_list",g);(function(){var u=f.E("weibo_upbtn");if(!u){return}u=u.getElementsByTagName("em")[0];var x=f.E("weibo_downbtn").getElementsByTagName("em")[0];function v(){var z=g.scrollTop;var y=parseInt(g.style.height);u.style.display=(z==0?"none":"");x.style.display=(z+y==l.offsetHeight?"none":"")}var w=null;i=function(){clearTimeout(w);setTimeout(v,200)}})();i();if(p.length==0){return}(function(){var u=null;f.addEvent(g,"mouseover",function(){clearTimeout(u);e.isOutRange=false;e.stop()});f.addEvent(g,"mouseout",function(v){clearTimeout(u);u=setTimeout(function(){e.isOutRange=true;e.start(h)},50)})})();try{window.addEventListener("DOMMouseScroll",function(u){e.scroll(u||event)},false)}catch(t){document.onmousewheel=function(u){e.scroll(u||event)}}(function(){if(n==0){return}var u=l.offsetHeight-g.clientHeight;g.scrollTop=0;e.autoScroll("down",+n);setTimeout(function(){i()},+n)})();c(["up","down"],function(u,w){k(f.E("weibo_"+u+"btn"),"mouseover",function(){e.stop()});k(f.E("weibo_"+u+"btn"),"mouseout",function(){e.start(u)});k(f.E("weibo_"+u+"btn"),"click",function(){e.start(u,5);setTimeout(function(){e.stop()},500)})})};return function(){return{init_scroll:a,autoScroll:e}}});STK.register("comp.widget.show.style",function(h){var i=h.core,f=i.evt.addEvent,j=i.evt.getEvent,b=i.str.trim,o=i.evt.reomveEvent,n=i.dom.sizzle,k=i.arr.foreach,m=i.evt.fireEvent,c=i.evt.stopEvent;var a=h.E("weibo_list_con"),g=h.E("weibo_list"),d=h.E("fans_list_con");var l=location.search;var e;(function(){var q=false;e=function(t){var s=document.createElement("style");s.type="text/css";if(h.IE){s.styleSheet.cssText=t}else{var u=document.createDocumentFragment();u.appendChild(document.createTextNode(t));s.appendChild(u)}function r(){document.getElementsByTagName("head")[0].appendChild(s)}r()}})();var p=function(){var s=/colors=([A-Fa-f\d,]+)/.test(l)?RegExp.$1:"";if(s){s=s.split(",");var F="";if(s[0]){F+=".weiboShow .weiboShow_topborder, .weiboShow .weiboShow_title {background:#"+s[0]+";}\n"}if(s[1]){F+=".weiboShow .weiboShow_wrap { background:#"+s[1]+" }\n"}if(s[2]){F+=".weiboShow { color:#"+s[2]+";}\n .weiboShow .weiboShow_developerDetail_namedir {color:#"+s[2]+" }\n"}if(s[3]){F+=".weiboShow a,\n .weiboShow .WB_linkA a,\n.weiboShow .WB_linkA, \n.weiboShow .WB_linkB a,\n.weiboShow .WB_linkB {color:#"+s[3]+" }"}if(s[4]){F+=".weiboShow .weiboShow_mainFeed_list:hover, .weiboShow .weiboShow_mainFeed_list_focus{background:#"+s[4]+" ;}"}e(F)}var G=/noborder=(\d+)/.test(l)?RegExp.$1:1;if(G==0){h.E("pl_weibo_show").className="WB_widgets weiboShow weiboShow_noborder"}try{var x={};x.fansRow=/fansRow=(\d+)/.test(l)?RegExp.$1:2;x.isTitle=h.E("weibo_title")?1:0;x.isFans=d?1:0;x.isWeibo=h.E("weibo_con")?1:0;x.height=parseInt(h.E("pl_weibo_show").style.height,10);x.width=h.E("pl_weibo_show").offsetWidth}catch(A){}var D=x.height-30;if(x.isTitle==1){D-=30}if(h.E("weibo_head")){D-=86}if(D<0){return}if(x.isFans){var B=n("li",d);var H=0;if(B.length==0){H=d.offsetHeight}else{var v=d.getElementsByTagName("ul")[0];var E=x.width;var u=Math.floor((E-11)/66);if(u==0){u=1}var C="0 "+((E-16-u*66)/2)+"px";try{v.style.padding=C}catch(A){var z=h.core.dom.cssText(v.style.cssText);z.push("padding",C);v.style.cssText=z.getCss()}var q=Math.ceil(B.length/u);x.fansRow=Math.min(x.fansRow,q,(((D-30)/84)>>0)||1);H=x.fansRow*84;if(H>0){H-=12}H+=30;if(H>=D){H=D}d.style.height=parseInt(H-3)+"px"}D-=H}if(x.isWeibo){if(D<32){h.E("weibo_con").style.display="none";return}try{var t=null;var y=function(){var w=g.offsetHeight;t&&clearInterval(t);if(w>0){var r;if(h.sizzle(".weiboShow_main_errorBox").length){r=(D-20>w?D-20:w)+"px";g.style.height=r}else{r=(D-20>w?w:D-6)+"px"}a.style.height=r}else{t=setInterval(y,500)}};y()}catch(A){}}};return p});STK.register("common.listener",function(b){var c={};var a={};a.define=function(e,f){if(c[e]!=null){throw"common.listener.define: 频道已被占用"}c[e]=f;var d={};d.register=function(h,g){if(c[e]==null){throw"common.listener.define: 频道未定义"}b.listener.register(e,h,g)};d.fire=function(g,h){if(c[e]==null){throw"commonlistener.define: 频道未定义"}b.listener.fire(e,g,h)};d.remove=function(h,g){b.listener.remove(e,h,g)};d.cache=function(g){return b.listener.cache(e,g)};return d};return a});STK.register("common.channel.page",function(b){var a=["resize"];return b.common.listener.define("common.channel.page",a)});STK.register("comp.widget.show.resize",function(a){return function(){var b={page:{width:document.body.clientWidth,height:document.body.clientHeight}};b=a.jsonToQuery(b.page);a.common.channel.page.fire("resize",b)}});STK.register("common.xdomain",function(b){var d=window,c=document,a=0;return function(h,g){var f={};if(!(typeof g==="function")){g=function(){}}var e=function(){var i="";if(d.postMessage){if(d.addEventListener){d.addEventListener("message",function(j){g.call(d,j.data)},false)}else{if(d.attachEvent){d.attachEvent("onmessage",function(j){g.call(d,j.data)})}else{throw"[common.xDomain] addEventListener error"}}return function(j){h.postMessage(j,"*")}}else{setInterval(function(){if(d.name!==i){i=d.name;g.call(d,i)}},50);return function(j){h.name=(+new Date)+(a++)+"^"+c.domain+"&"+escape(j)}}};return e()}});STK.register("comp.widget.show.xdomain",function(b){var a=0;return function(e){var d={setSize:b.common.xdomain(e)};var f=function(){e=e||parent;var g={page:{width:document.body.clientWidth,height:document.body.clientHeight}};g=b.jsonToQuery(g.page);setInterval(function(){if(a<4){d.setSize(g)}a++},200)};d.resize=function(h){if(a<4){setTimeout(function(){d.resize(h)},200);return}var g=h||{page:{width:document.body.clientWidth,height:document.body.clientHeight}};g=b.jsonToQuery(g);d.setSize(g)};var c=function(){};d.destroy=c;f();return d}});STK.register("core.dom.isNode",function(a){return function(b){return(b!=undefined)&&Boolean(b.nodeName)&&Boolean(b.nodeType)}});STK.register("core.arr.isArray",function(a){return function(b){return Object.prototype.toString.call(b)==="[object Array]"}});STK.register("core.evt.custEvent",function(c){var a="__custEventKey__",d=1,e={},b=function(h,g){var f=(typeof h=="number")?h:h[a];return(f&&e[f])&&{obj:(typeof g=="string"?e[f][g]:e[f]),key:f}};return{define:function(k,h){if(k&&h){var g=(typeof k=="number")?k:k[a]||(k[a]=d++),j=e[g]||(e[g]={});h=[].concat(h);for(var f=0;f<h.length;f++){j[h[f]]||(j[h[f]]=[])}return g}},undefine:function(j,h){if(j){var g=(typeof j=="number")?j:j[a];if(g&&e[g]){if(h){h=[].concat(h);for(var f=0;f<h.length;f++){if(h[f] in e[g]){delete e[g][h[f]]}}}else{delete e[g]}}}},add:function(j,g,f,h){if(j&&typeof g=="string"&&f){var i=b(j,g);if(!i||!i.obj){throw"custEvent ("+g+") is undefined !"}i.obj.push({fn:f,data:h});return i.key}},once:function(j,g,f,h){if(j&&typeof g=="string"&&f){var i=b(j,g);if(!i||!i.obj){throw"custEvent ("+g+") is undefined !"}i.obj.push({fn:f,data:h,once:true});return i.key}},remove:function(l,j,h){if(l){var k=b(l,j),m,f;if(k&&(m=k.obj)){if(c.core.arr.isArray(m)){if(h){var g=0;while(m[g]){if(m[g].fn===h){break}g++}m.splice(g,1)}else{m.splice(0,m.length)}}else{for(var g in m){m[g]=[]}}return k.key}}},fire:function(g,n,l){if(g&&typeof n=="string"){var f=b(g,n),k;if(f&&(k=f.obj)){if(!c.core.arr.isArray(l)){l=l!=undefined?[l]:[]}for(var h=k.length-1;h>-1&&k[h];h--){var o=k[h].fn;var m=k[h].once;if(o&&o.apply){try{o.apply(g,[{type:n,data:k[h].data}].concat(l));if(m){k.splice(h,1)}}catch(j){c.log("[error][custEvent]"+j.message)}}}return f.key}}},destroy:function(){e={};d=1}}});STK.register("core.util.browser",function(h){var a=navigator.userAgent.toLowerCase();var k=window.external||"";var c,d,f,l,g;var b=function(e){var m=0;return parseFloat(e.replace(/\./g,function(){return(m++==1)?"":"."}))};try{if((/windows|win32/i).test(a)){g="windows"}else{if((/macintosh/i).test(a)){g="macintosh"}else{if((/rhino/i).test(a)){g="rhino"}}}if((d=a.match(/applewebkit\/([^\s]*)/))&&d[1]){c="webkit";l=b(d[1])}else{if((d=a.match(/presto\/([\d.]*)/))&&d[1]){c="presto";l=b(d[1])}else{if(d=a.match(/msie\s([^;]*)/)){c="trident";l=1;if((d=a.match(/trident\/([\d.]*)/))&&d[1]){l=b(d[1])}}else{if(/gecko/.test(a)){c="gecko";l=1;if((d=a.match(/rv:([\d.]*)/))&&d[1]){l=b(d[1])}}}}}if(/world/.test(a)){f="world"}else{if(/360se/.test(a)){f="360"}else{if((/maxthon/.test(a))||typeof k.max_version=="number"){f="maxthon"}else{if(/tencenttraveler\s([\d.]*)/.test(a)){f="tt"}else{if(/se\s([\d.]*)/.test(a)){f="sogou"}}}}}}catch(j){}var i={OS:g,CORE:c,Version:l,EXTRA:(f?f:false),IE:/msie/.test(a),OPERA:/opera/.test(a),MOZ:/gecko/.test(a)&&!/(compatible|webkit)/.test(a),IE5:/msie 5 /.test(a),IE55:/msie 5.5/.test(a),IE6:/msie 6/.test(a),IE7:/msie 7/.test(a),IE8:/msie 8/.test(a),IE9:/msie 9/.test(a),SAFARI:!/chrome\/([\d.]*)/.test(a)&&/\/([\d.]*) safari/.test(a),CHROME:/chrome\/([\d.]*)/.test(a),IPAD:/\(ipad/i.test(a),IPHONE:/\(iphone/i.test(a),ITOUCH:/\(itouch/i.test(a),MOBILE:/mobile/i.test(a)};return i});STK.register("core.evt.getEvent",function(a){return function(){if(a.IE){return window.event}else{if(window.event){return window.event}var c=arguments.callee.caller;var b;var d=0;while(c!=null&&d<40){b=c.arguments[0];if(b&&(b.constructor==Event||b.constructor==MouseEvent||b.constructor==KeyboardEvent)){return b}d++;c=c.caller}return b}}});STK.register("core.evt.fixEvent",function(a){return function(b){b=b||a.core.evt.getEvent();if(!b.target){b.target=b.srcElement;b.pageX=b.x;b.pageY=b.y}if(typeof b.layerX=="undefined"){b.layerX=b.offsetX}if(typeof b.layerY=="undefined"){b.layerY=b.offsetY}return b}});STK.register("core.util.scrollPos",function(a){return function(d){d=d||document;var b=d.documentElement;var c=d.body;return{top:Math.max(window.pageYOffset||0,b.scrollTop,c.scrollTop),left:Math.max(window.pageXOffset||0,b.scrollLeft,c.scrollLeft)}}});STK.register("kit.util.drag",function(c){var a=function(d){d.cancelBubble=true;return false};var b=function(e,d){e.clientX=d.clientX;e.clientY=d.clientY;e.pageX=d.clientX+c.core.util.scrollPos()["left"];e.pageY=d.clientY+c.core.util.scrollPos()["top"];e.offsetX=d.offsetX||d.layerX;e.offsetY=d.offsetY||d.layerY;e.target=d.target||d.srcElement;return e};return function(e,m){if(!c.core.dom.isNode(e)){throw"core.util.drag need Element as first parameter"}var l=c.core.obj.parseParam({actRect:[],actObj:{}},m);var i={};var j=c.core.evt.custEvent.define(l.actObj,"dragStart");var f=c.core.evt.custEvent.define(l.actObj,"dragEnd");var g=c.core.evt.custEvent.define(l.actObj,"draging");var k=function(o){var n=b({},o);document.body.onselectstart=function(){return false};c.core.evt.addEvent(document,"mousemove",h);c.core.evt.addEvent(document,"mouseup",d);c.core.evt.addEvent(document,"click",a,true);if(!c.IE){o.preventDefault();o.stopPropagation()}c.core.evt.custEvent.fire(j,"dragStart",n);return false};var h=function(o){var n=b({},o);o.cancelBubble=true;c.core.evt.custEvent.fire(j,"draging",n)};var d=function(o){var n=b({},o);document.body.onselectstart=function(){return true};c.core.evt.removeEvent(document,"mousemove",h);c.core.evt.removeEvent(document,"mouseup",d);c.core.evt.removeEvent(document,"click",a,true);c.core.evt.custEvent.fire(j,"dragEnd",n)};c.core.evt.addEvent(e,"mousedown",k);i.destroy=function(){c.core.evt.removeEvent(e,"mousedown",k);l=null};i.getActObj=function(){return l.actObj};return i}});STK.register("common.widget.dragScroll",function(d){var c={},b=d.core.evt.addEvent,a=d.core.evt.custEvent;return function(m){var D,B,s,j,g,C,x,w,p,k,q=false;var h={contentOuter:null,contentInner:null,dragOuter:null,dragInner:null,dragInnerMinHeight:null};h=d.parseParam(h,m);var v=function(E){var E=E||window.event;var H=E.target||E.srcElement;C=d.core.dom.position(s);var F=(E.clientY-C.t),G;if(H==j){return}G=parseInt(((F)*B.offsetHeight)/s.offsetHeight,10);if((G)>=Math.abs(D.offsetHeight-B.offsetHeight)){G=B.offsetHeight-D.offsetHeight}if(F<0){return}if(F+j.offsetHeight>s.offsetHeight){F=s.offsetHeight-j.offsetHeight}if((G)>=Math.abs(D.offsetHeight-B.offsetHeight)){G=B.offsetHeight-D.offsetHeight}j.style.top=F+"px";B.style.marginTop=(-1*G)+"px"};var n=function(E){d.core.evt.stopEvent(E);var G=(E.wheelDelta/120)||E.detail/-3,F;if(Math.abs(G)>1){return}if(G>0&&B.offsetTop>=0){F=0;return}else{if(G<0&&(B.offsetTop)<=(D.offsetHeight-B.offsetHeight)){F=0;return}}F=G*40;if(G>0&&Math.abs(B.offsetTop)<F){F=G*Math.abs(B.offsetTop)}if(G<0&&Math.abs((B.offsetTop)-(D.offsetHeight-B.offsetHeight))<Math.abs(F)){F=G*Math.abs((B.offsetTop)-(D.offsetHeight-B.offsetHeight))}y(F,G)};var y=function(G,F){var E,H;E=(B.offsetTop+G);B.style.marginTop=E+"px";H=Math.round((E*s.offsetHeight)/B.offsetHeight);j.style.top=(-1*H)+"px";if(B.offsetTop>=0){j.style.top="0px"}else{if((B.offsetTop)<=(D.offsetHeight-B.offsetHeight)){j.style.top=(s.offsetHeight-j.offsetHeight)+"px"}}};var o={dragStart:function(F,E){w=E.offsetY},draging:function(I,H){var F,E,G;var J=d.core.util.scrollPos();E=(H.clientY-w-x.t+J.top);if(E<0){B.style.marginTop="0px";return}if(E+j.offsetHeight>s.offsetHeight){B.style.marginTop=(D.offsetHeight-B.offsetHeight)+"px";return}G=parseInt(((E)*B.offsetHeight)/s.offsetHeight,10);if((G)>=Math.abs(D.offsetHeight-B.offsetHeight)){return}j.style.top=E+"px";B.style.marginTop=(-1*G)+"px"},dragEnd:function(F,E){},dragMove:function(F){var E;E=(B.offsetTop+F-g.t);B.style.marginTop=E+"px"}};var i=function(E){if(document.attachEvent){D.attachEvent("onmousewheel",n)}if(document.addEventListener){D.addEventListener("mousewheel",n,false);D.addEventListener("DOMMouseScroll",n,false)}};var e=function(E){if(document.attachEvent){D.detachEvent("onmousewheel",n)}if(document.addEventListener){D.removeEventListener("mousewheel",n,false);D.removeEventListener("DOMMouseScroll",n,false)}};var A=function(){e();a.remove(drag.getActObj(),"dragStart",o.dragStart);a.remove(drag.getActObj(),"draging",o.draging)};var z=function(){if(q){B.style.height=D.offsetHeight+"px";B.style.minHeight="";B.style.overflowY="scroll";s.style.display="none";j.style.display="none";A();return}if(B.offsetHeight<=D.offsetHeight){B.style.marginTop="0px";j.style.height="0px";s.style.display="none";A();return}var E;s.style.display="block";g=d.core.dom.position(D);p=parseInt((D.offsetHeight*s.offsetHeight/B.offsetHeight),10);j.style.height=p+"px";E=-1*(h.contentInner.offsetTop*h.dragOuter.offsetHeight)/h.contentInner.offsetHeight;h.dragInner.style.top=E+"px";C=d.core.dom.position(s);if((B.offsetTop)<=(D.offsetHeight-B.offsetHeight)){B.style.marginTop=(D.offsetHeight-B.offsetHeight)+"px";j.style.top=(s.offsetHeight-j.offsetHeight)+"px"}e();i()};var r=function(){if(h.contentOuter==null||h.contentInner==null||h.dragOuter==null||h.dragInner==null){throw"node is node defined"}};var f=function(){D=h.contentOuter;B=h.contentInner;s=h.dragOuter;j=h.dragInner};var l=function(){drag=d.kit.util.drag(j);i();b(s,"click",v);a.add(drag.getActObj(),"dragStart",o.dragStart);a.add(drag.getActObj(),"draging",o.draging)};var u=function(){var E=d.core.util.browser;q=E.MOBILE;if(q){B.style.height=D.offsetHeight+"px";B.style.minHeight="";B.style.overflowY="scroll";s.style.display="none";j.style.display="none";A();return}if(B.offsetHeight<=D.offsetHeight){j.style.height="0px";s.style.display="none";A();return}s.style.display="block";B.style.marginTop="0px";j.style.top="0px";g=d.core.dom.position(D);C=d.core.dom.position(s);x=d.core.dom.position(j);p=Math.round((D.offsetHeight*s.offsetHeight/B.offsetHeight));if(h.dragInnerMinHeight){p=(p>h.dragInnerMinHeight)?p:h.dragInnerMinHeight}j.style.height=p+"px";k=j.offsetTop};var t=function(){r();f();l();u()};t();c.elmMove=y;c.init=u;c.destroy=A;c.reset=z;return c}});if(typeof App==="undefined"){App={}}if(typeof scope==="undefined"){scope=$CONFIG}STK.register("comp.widget.show.init",function(h){var v=h.core,n=v.evt.addEvent,e=v.evt.getEvent,q=v.str.trim,f=v.evt.reomveEvent,c=v.dom.sizzle,k=v.io.ajax,d=v.arr.foreach,u=v.evt.fireEvent,s=v.evt.stopEvent,m=h.kit.extra.language;var t=h.comp.widget.show.scroll();var a=t.init_scroll,g=t.autoScroll;var b=location.search;var i=h.E("weibo_list_con"),o=h.E("weibo_list"),p=h.E("fans_list_con");var j='<cite class="WB_follow_status"><cite class="WB_follow_status_inner"><cite class="WB_follow_box"><u class="WB_icon_followed"></u>#L{已关注} </cite></cite></cite>';var l=h.core.util.URL(document.location.href);var r;return function(z,w){var A={};var E;var x=function(){var H=new Image();var G="//web.archive.org/web/20190131013338/http://rs.sinajs.cn/tmp.gif?";G+="id=show&action=pv";G+="&uid="+($CONFIG.$uid||0);G+="&url="+encodeURIComponent(document.referrer);G+="&r="+(new Date()).valueOf();H.src=G};var y=function(){var G=h.pageSize();G.page.height=h.core.dom.getSize(z).height;var H=G.page;r.resize(H)};var F=function(){h.comp.widget.show.style();B();x();if(h.E("scrollCon")){E=h.common.widget.dragScroll({contentOuter:h.E("weibo_list_con"),contentInner:h.E("weibo_list"),dragOuter:h.E("scrollCon"),dragInner:h.E("scrollBar"),dragInnerMinHeight:20})}else{a()}if(scope.$isBD){r=h.comp.widget.show.xdomain(window.parent||window.self);C();y()}};var B=function(){var H=h.E("followBtn");var G={uid:scope.$uid};if(l.getParam("followbtn")==1){G.btnTemp=j}H&&h.common.widget.addFollow(H,G);h.comp.widget.show.error()};var C=function(){h.common.channel.page.register("resize",r.setSize)};var D=function(){d(["up","down"],function(G,H){removeEvent(h.E("weibo_"+G+"btn"),"mouseover",function(){g.start(G)});removeEvent(h.E("weibo_"+G+"btn"),"mouseout",function(){g.stop()})})};F();A.destroy=D;return A}});STK.pageletM.register("pl.widget.show",function(d){try{var c={};var b=d.E("pl_weibo_show");var a=d.comp.widget.show.init(b,c);return a}catch(f){}});STK.pageletM.start();

}
/*
     FILE ARCHIVED ON 01:33:38 Jan 31, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:31:02 Feb 18, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 84.476 (3)
  exclusion.robots.policy: 0.409
  captures_list: 115.903
  esindex: 0.014
  PetaboxLoader3.resolve: 45.751 (2)
  RedisCDXSource: 4.723
  PetaboxLoader3.datanode: 1924.044 (5)
  CDXLines.iter: 22.475 (3)
  load_resource: 1898.592 (2)
  exclusion.robots: 0.425
*/