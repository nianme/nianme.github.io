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

$.module("Ttpod.core",function(){"use strict";function _isCrossDomain(e){var t=$.query.parseURL(e);return!(_mainRoot.host==t.host&&_mainRoot.port==t.port)}function _resolveAction(e){if(e=$.extend({domain:"",isProxy:_config.isProxy,protocol:"http:"},e),!("path"in e))return"";var t=e.isProxy&&""!=e.domain&&_mainRoot.host!=e.domain;return e=t?"/ajax/"+e.domain+e.path:e.protocol+"//"+e.domain+e.path}function _resoveActionObj(e){for(var t in e){var o=e[t];$.isPlainObject(o)&&!$.isEmptyObject(o)&&("path"in o?e[t]=_resolveAction(o):_resoveActionObj(o))}}var d=!1,_version="@VERSION@",_UID="",_mainRoot=$.query.parseURL(),_outTypes=/^(log|debug|info|warn|error)$/,_tmpls={},_actions={},_errorHandler={},_config=Ttpod.config||{},_options={logUrl:"https://web.archive.org/web/20190615080102/http://collect.log.ttpod.com/www/i.png",tmplPrefix:"tmpl-",isCacheTmpl:!1,dataType:"json",dataFormat:!0,domain:"dongting.com"},_isInitServerConfig=!1,_serverConfig={version:0};return{setOptions:function(e){$.extend(_options,e||{})},initServerConfig:function(e,t){var o=this;if(_serverConfig=$.extend(_serverConfig,e,this.store("serverConfig")),!$.isEmptyObject(t)){var r=t.success;t=$.extend({async:!1},t),t.success=function(e){o.setServerConfig(e.data),$.isFunction(r)&&r.apply(this,arguments)},Ttpod.core.getResult(t)}_isInitServerConfig=!0},getServerConfig:function(e){return _isInitServerConfig||this.initServerConfig(),e&&!$.isEmptyObject(_serverConfig)?_serverConfig[e]:_serverConfig},setServerConfig:function(e){_isInitServerConfig||this.initServerConfig(),$.extend(_serverConfig,e),this.store("serverConfig",_serverConfig)},setConfig:function(e){_config=e},isRelease:function(){return"release"==_config.mode},getURI:function(e,t,o){var r=t?_config.domain[t]:location.host,n=r?"http://"+r+e:e;return o===!0&&(o=_config.version),o&&(n=$.query.set("v",o,n)),n},getAction:function(e){for(var t=e.split("."),o=0,r=!0,n=_actions;o<t.length&&r;){var i=t[o];if(!n[i]){n="",r=!1;break}n=n[i],o++}return n},setAction:function(e){$.isPlainObject(e)&&!$.isEmptyObject(e)&&(_resoveActionObj(e),$.extend(_actions,e)),this.out("actions",_actions)},resolveAction:_resolveAction,template:function(e,t){if(!e)return"";if(t=t||{},0!=e.indexOf(_options.tmplPrefix))return $.template(e,t);var o=_tmpls[e];if(!$.isFunction(o)){var r=document.getElementById(e);r?o=$.template(e):this.ajax({url:Ttpod.core.getURI("/"+e.replace(/-/g,"/")+".html","",!0),cache:Ttpod.core.isRelease(),cacheKey:_options.isCacheTmpl?e:"",cacheVersion:_config.version,async:!1,dataType:"html",success:function(e){o=$.template(e)}})}return o?(_tmpls[e]=o,o(t)):(Ttpod.core.out("模板加载失败","error"),"")},getResult:function(e){$.isEmptyObject(e)||(e=$.extend({type:"GET",dataType:_options.dataType,cache:!0,format:e.type&&"GET"!=e.type?!1:_options.dataFormat,data:{}},e),this.ajax(e))},setResult:function(e){$.isEmptyObject(e)||(e=$.extend({type:"POST",dataType:_options.dataType,cache:!1,format:"GET"==e.type?!0:!1,data:{}},e),this.ajax(e))},ajax:function(e){if(!$.isEmptyObject(e)&&(e.url||e.action)){e.url||(e.url=this.getAction(e.action));var t,o=this,r=(e.url,""),n="",i=e.cacheKey&&o.isRelease()&&!e.requireToken;if(i){t=e.cacheVersion||o.getServerConfig("version");var s=o.getCacheResult(e.cacheKey,t);if($.exists(s))return $.isFunction(e.success)&&e.success(s,"cache"),void 0}if(e.requireToken){var c=Ttpod.user.getUserInfo();if($.isEmptyObject(c))return Ttpod.user.login();r=c.access_token,n=c.tuid}var a=e.success,u=e.error,l=e.data;/^http/i.test(e.url)&&_isCrossDomain(e.url)&&(e.url=e.url.replace(/[\#&]*$/,""),e.url+=-1==e.url.indexOf("?")&&-1==e.url.indexOf("#")?"?callback=?":"&callback=?"),e.requireToken&&(e.data.access_token=r,e.data.tuid=n),e.format&&("string"==typeof e.jsonpCallback&&(e.data.callback=e.jsonpCallback),e.url=$.formatByVal(e.url,e.data,!0),e.data=e.requireToken?{access_token:r,tuid:n}:{}),e.success=function(r,n,s){if(o.resolveResult(r))$.isPlainObject(r)&&(r.params=l),$.isFunction(a)&&a.apply(this,arguments),i&&o.setCacheResult(e.cacheKey,t,r),"html"!=e.dataType&&o.out(e.url,r);else{var c,n="service";r.errorThrown=n,$.isFunction(u)&&(c=u(s,n,r),0!=c&&0==r.code&&(c=!0)),!0!==c&&o.resolveError(r),o.out(e.url,r,"warn")}},e.error=function(t,r,n){var i,s={code:0,msg:"string"==typeof n?n:r,errorThrown:n};$.isFunction(u)&&(i=u(t,r,s)),!0!==i&&o.resolveError(s),o.out(e.url,"error")},$.ajax(e)}},resolveResult:function(a,b){if($.isEmptyObject(a)||!$.exists(a.code))return!0;if("string"==typeof a&&0==a.search(/^\{"code"/i)&&(a=eval("("+a+")")),a.code=parseInt(a.code),1==a.code)return!0;var c=_errorHandler[a.code];return a.msg=$.isPlainObject(c)&&!$.isEmptyObject(c.msg)?c.msg:a.msg||"服务器繁忙,请稍后再试！",!1},getErrorMsg:function(e,t){return t},setErrorHandler:function(e){$.extend(_errorHandler,e)},resolveError:function(e){var t=_errorHandler[e.code],o=$.isPlainObject(t)?t.handler:t;1!=e.code&&$.isFunction(o)&&o.call(this,e)},getCacheResult:function(e,t){var o=this.store(e);return $.exists(t)?!$.isEmptyObject(o)&&"version"in o&&"content"in o?0==t||o.version==t?o.content:null:null:o},setCacheResult:function(e,t,o){this.store(e,{version:t||0,content:o})},store:function(e,t,o){return"store"in $?(e=o&&"prefix"in o?(o.prefix?o.prefix+"_":"")+e:(_config.site+"_"+e).toUpperCase(),"undefined"==typeof t?$.store.get(e):null!=t?$.store.set(e,t):($.store.remove(e),void 0)):Ttpod.core.out("Ttpod.core.store","ReferenceError: $.store is not defined","error")},cookie:function(e,t,o){return"cookie"in $?(e=o&&"prefix"in o?(o.prefix?o.prefix+"_":"")+e:(_config.site+"_"+e).toUpperCase(),$.cookie(e,t,o)):Ttpod.core.out("Ttpod.core.cookie","ReferenceError: $.cookie is not defined","error")},out:function(){if(!this.isRelease()){var e=arguments,t=e.length,o=_outTypes.test(e[t-1]),r=o?e[t-1]:"debug",n="Ttpod-"+(t>1&&!o||t>2?e[0]:_config.site),i=t>1&&!o||t>2?e[1]:e[0];try{window.console&&(window.console.group(n),window.console[r](i),window.console.groupEnd())}catch(s){}"error"==r&&this.log({a:"error",data:i})}},getUID:function(){if(_UID=_UID||$.cookie("UID"),!_UID){var e=new Date().getTime();_UID=e+"."+Math.floor(1e4*Math.random(e));var t={expires:365};Ttpod.core.isRelease()&&(t.domain=_options.domain),$.cookie("UID",_UID,t)}return _UID},log:function(e,t){t=t||_options.logUrl,e=$.extend({},{project:_config.domain.main,version:_config.version,from:_config.from,uid:this.getUID(),t:new Date().getTime()},e),Ttpod.user&&$.isFunction(Ttpod.user.isLogin)&&Ttpod.user.isLogin()&&(e.tuid=Ttpod.user.getUserInfo("tuid"));for(var o in e)$.exists(e[o])&&"undefined"!=e[o]&&"null"!=e[o]||(e[o]="");new Image().src=t+(-1==t.indexOf("?")?"?":"&")+$.param(e)},time:function(e){!this.isRelease()&&window.console&&$.isFunction(console.time)&&console.time(e)},timeEnd:function(e){!this.isRelease()&&window.console&&$.isFunction(console.timeEnd)&&console.timeEnd(e)}}});$.module("Ttpod.user",function(){"use strict";function e(){var e,n;if(e=$.query.get("access_token"))return/^[0-9]{0,5}$/.test(e)?(d({code:e}),t()):u(function(){t()},e),g(),void 0;var c=location.search;c.indexOf("callback")>-1;var r=$.query.get("callback",location.search)||$.query.getHash("callback",location.hash);if(r){try{var i=JSON.parse(r);d(i)}catch(s){d({code:0})}return g(),t(),void 0}if(e=$.cookie(T)){var a=$.cookie(x);if(a)try{n=JSON.parse(a)}catch(s){}return n&&e!=n.access_token?u(function(){t()},e):(d({code:1,data:n}),t()),void 0}o("change"),t()}function t(){y=!0,o("ready",s())}function n(e,t){$(document).bind("TtpodUser:"+e,t)}function o(e,t){$(document).trigger("TtpodUser:"+e,t)}function c(){return i()?k.access_token:""}function r(e){var t={expires:b.isAuto?b.expires:0};Ttpod.core.isRelease()&&(t.domain=b.domain),$.cookie(T,e,t)}function i(){return!(!k||!k.access_token)}function s(e){return e&&k?k[e]:k}function a(e){k=e,$.cookie(x,null!=e?JSON.stringify(k):null,{expires:b.isAuto?b.expires:0}),o("change",k)}function u(e,t){Ttpod.core.getResult({type:"POST",url:_,data:l("show",null,t),success:function(t){d(t),$.isFunction(e)&&e(k)},error:function(t,n,o){d(o),$.isFunction(e)&&e(k)}})}function l(e,t,n){var o={method:e};return $.exists(t)&&(o.args=t),$.exists(n)||(n=c()),n&&(o.access_token=n),JSON.stringify(o)}function d(e){1!=e.code||$.isEmptyObject(e.data)?p():(r(e.data.access_token),a(e.data))}function f(e,t,n,o){$.isFunction(e)&&("service"==n&&(o.msg=h(o.code)),e(t,n,o))}function p(){r(null),a(null)}function g(){var e=$.query.setHash("callback",null,$.query.set("callback",null));try{history.replaceState(null,null,e)}catch(t){location.search&&(location.href=e)}}function h(e){return F[e]||"服务异常，请稍后访问"}var m=!1,y=!1,_=Ttpod.core.resolveAction({domain:"v2.ttus.ttpod.com",path:"/ttus/user",isProxy:!0}),k=null,v="USER_NAME",T="ACCESS_TOKEN",x="USER_INFO",O=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,S=/^[\w\u4e00-\u9fa5]{2,20}$/,F={30301:"您输入的账号或密码不正确",30302:"您输入的账号或密码不正确",30303:"服务器繁忙",30304:"用户名密码认证超过请求限制",30306:"缺少必要的参数",30307:"用户昵称已存在",30308:"用户名已经存在",30309:"用户昵称不规范",30310:"用户名必须是邮箱",30311:"用户密码不规范",30312:"用户名不存在"},b={expires:7,domain:"dongting.com",isAuto:!0,forceLogin:!1,info:!0},A="|change|ready|";return{init:function(t){if(!m){if(t&&"event"in t){for(var n in t.event)this.on(n,t.event[n]);delete t.event}$.extend(b,t),e(),m=!0}},ready:function(e){y?e(s()):$(document).one("TtpodUser:ready",e)},setOptions:function(e){$.extend(b,e)},on:function(e,t){-1!=A.indexOf("|"+e+"|")&&$.isFunction(t)&&n(e,t)},login:function(){Ttpod.core.out("login")},register:function(){Ttpod.core.out("register")},anyWhere:function(){Ttpod.core.out("anyWhere")},logout:function(e){p(),$.isFunction(e)?e.call(this):location.reload()},isLogin:i,getToken:c,getUserInfo:s,handleExpiredToken:function(){p()},openApiLogin:function(e){var t,n=$.os.desktop?"default":"mobile";switch(e){case"sina":t="https://web.archive.org/web/20190615080102/https://api.weibo.com/oauth2/authorize?scope=follow_app_official_microblog&client_id=3374293008&forcelogin="+b.forceLogin+"&display="+n+"&redirect_uri=";break;case"qq":t="https://web.archive.org/web/20190615080102/https://graph.qq.com/oauth2.0/authorize?scope=upload_pic,add_topic,get_user_info&client_id=100240447&response_type=code&display="+n+"&redirect_uri=";break;default:return}t+=encodeURIComponent("https://web.archive.org/web/20190615080102/http://ttus.ttpod.com/thirdlogin/"+e+"?url="+encodeURIComponent(location.href)),location.href=t},localLogin:function(e){var t=this;Ttpod.core.getResult({url:_,type:"POST",data:l("login",e.data,""),success:function(n){$.cookie(v,e.data.user_name,{expires:b.expires}),d(n),$.isFunction(e.success)&&e.success.apply(t,arguments)},error:function(t,n,o){f(e.error,t,n,o)}})},localRegister:function(e){var t=this;Ttpod.core.getResult({url:_,type:"POST",data:l("register",e.data,""),success:function(n){$.cookie(v,e.data.user_name,{expires:b.expires}),d(n),$.isFunction(e.success)&&e.success.apply(t,arguments)},error:function(t,n,o){f(e.error,t,n,o)}})},fetchUserInfo:function(e){u(e)},getLastLoginUserName:function(){return $.cookie(v)},checkName:function(e){var t=this,n=!1;return e=$.extend({async:!0},e),"user_name"in e.data&&!this.checkFormat("user_name",e.data.user_name)?(f(e.error,null,"service",{code:30310}),n):"nick_name"in e.data&&!this.checkFormat("nick_name",e.data.nick_name)?(f(e.error,null,"service",{code:30309}),n):(Ttpod.core.getResult({url:_,type:"POST",async:e.async,data:l("checkname",e.data,""),success:function(){$.isFunction(e.success)&&e.success.apply(t,arguments),n=!0},error:function(t,n,o){f(e.error,t,n,o)}}),n)},checkFormat:function(e,t){return"string"!=typeof t&&0==t.length?!1:"password"==e?t.length<=20&&t.length>=6:"user_name"==e?O.test(t):"nick_name"==e?S.test(t):void 0},alterUserInfo:function(e){var t=this;Ttpod.core.getResult({url:_,type:"POST",data:l("alter",e.data),success:function(){u(),$.isFunction(e.success)&&e.success.apply(t,arguments)},error:function(t,n,o){f(e.error,t,n,o)}})},alterPwd:function(e){var t=this;Ttpod.core.getResult({url:_,type:"POST",data:l("alter_pwd",e.data),success:function(){$.isFunction(e.success)&&e.success.apply(t,arguments)},error:function(t,n,o){f(e.error,t,n,o)}})},isImprove:function(){return this.isLogin()?!/^ttpod[0-9]{8,}$/gi.test(k.nick_name):!1}}});$.module(function(){function s(){l.delegate(".J-user-close","click",function(){n()}).delegate(".J-user-sina","click",function(){Ttpod.user.openApiLogin("sina")}).delegate(".J-user-qq","click",function(){Ttpod.user.openApiLogin("qq")}).delegate(".J-user-login","click",function(){u("login")}).delegate(".J-user-register","click",function(){u("register")}).delegate(".J-user-autolabel","mouseover",function(){$(".pro-user-safe",this).css("visibility","visible")}).delegate(".J-user-autolabel","mouseout",function(){$(".pro-user-safe",this).css("visibility","hidden")}).delegate(".J-user-isauto","click",function(){Ttpod.user.setOptions({isAuto:this.checked})}).delegate(".J-user-isagree","change",function(){this.checked?$(".J-user-registersubmit",l).removeClass("pro-user-btn-disabled"):$(".J-user-registersubmit",l).addClass("pro-user-btn-disabled")}).delegate(".J-user-loginsubmit","click",function(){$(this).hasClass("pro-user-btn-disabled")||i()}).delegate(".J-user-registersubmit","click",function(){$(this).hasClass("pro-user-btn-disabled")||a()})}function e(s){function e(){var s=Ttpod.user.checkFormat("user_name",a.val());return v2=Ttpod.user.checkFormat("password",i.val()),s&&t("user_name"),v2&&t("password"),s&&!v2?(i.focus(),void 0):!s&&v2?(a.focus(),void 0):(s&&v2&&n.trigger("click"),void 0)}if("register"==s){var r=$("input[name=nick_name]",l),a=$("input[name=user_name]",l),i=$("input[name=password]",l),u=$("input[name=comfirmPassword]",l);r.blur(function(){var s=$(this);this.value!=s.attr("data-old")&&(s.attr("data-old",this.value),Ttpod.user.checkName({async:!1,data:{nick_name:this.value},success:function(){t("nick_name")},error:function(s,e,r){o("nick_name",r.msg)}}))}),a.blur(function(){var s=$(this);this.value!=s.attr("data-old")&&(s.attr("data-old",this.value),Ttpod.user.checkName({async:!1,data:{user_name:this.value},success:function(){t("user_name")},error:function(s,e,r){o("user_name",r.msg)}}))}),i.blur(function(){Ttpod.user.checkFormat("password",this.value)?t("password"):o("password")}),u.blur(function(){i.val()==this.value&&this.value?t("comfirmPassword"):o("comfirmPassword")})}else{var a=$("input[name=user_name]",l),i=$("input[name=password]",l),n=$(".J-user-loginsubmit",l);a.blur(function(){Ttpod.user.checkFormat("user_name",this.value)?t("user_name"):o("user_name")}),i.blur(function(){Ttpod.user.checkFormat("password",this.value)?t("password"):o("password","密码由6-20位数字、字母或符号组成")}),a.keyup(function(s){13==s.keyCode&&e(s.keyCode)}),i.keyup(function(){13==event.keyCode&&e(event.keyCode)})}}function r(s){for(var e=!0,r=0;r<s.length;r++){var a=$('input[name="'+s[r]+'"]',l),i=$('.pro-user-field[data-field="'+s[r]+'"]',l);i.hasClass("pro-user-error")||a.trigger("blur"),e&&(e=!i.hasClass("pro-user-error"))}return e}function a(){var s=$.serializeForm(l),e=$(".J-user-registersubmit",l);r(["nick_name","user_name","password","comfirmPassword"])&&(e.val("注册中").addClass("pro-user-btn-disabled"),Ttpod.user.localRegister({data:{nick_name:s.nick_name,user_name:s.user_name,password:s.password},success:function(){location.reload()},error:function(s,r,a){return e.val("注册").removeClass("pro-user-btn-disabled"),30308==a.code&&o("user_name","用户名已经存在"),!0}}))}function i(){var s=$.serializeForm(l),e=$(".J-user-loginsubmit",l);r(["user_name","password"])&&(e.val("登录中").addClass("pro-user-btn-disabled"),Ttpod.user.localLogin({data:{user_name:s.user_name,password:s.password},success:function(){location.reload()},error:function(s,r,a){e.val("登录").removeClass("pro-user-btn-disabled"),o("user_name",a.msg),o("password"," ")}}))}function o(s,e){var r=$('.pro-user-field[data-field="'+s+'"]',l),a=r.find(".pro-user-tip");return r.addClass("pro-user-error"),a.text(e||a.attr("data-tip")||""),!1}function t(s,e){var r=$('.pro-user-field[data-field="'+s+'"]',l),a=r.find(".pro-user-tip");r.removeClass("pro-user-error"),a.text(e||a.attr("data-tip")||"")}function u(r){0==l.length&&(l=$(c.dialog),l.appendTo("body"),s()),p.lock(),l.html(c[r]).removeClass("pro-user-login pro-user-register").addClass("pro-user-"+r).show(),"login"==r&&l.find('input[name="user_name"]').val(Ttpod.user.getLastLoginUserName()),e(r)}function n(){p.unLock(),l.empty().hide()}var l=$("#uiLoginDialog"),d=$("#uiLoginMask"),c={login:'                <div class="user-login-form">                <h3 class="pro-user-header">登录<span class="pro-user-close J-user-close"></span></h3>                <div class="pro-user-content fix">                    <div class="pro-user-login-l">                        <div class="pro-user-field" data-field="user_name"><input class="pro-user-input" type="text" name="user_name" autocomplete="off" placeholder="请输入登录邮箱" /><div class="pro-user-tip"></div></div>                        <div class="pro-user-field" data-field="password"><input class="pro-user-input" type="password" name="password" placeholder="请输入密码" /><div class="pro-user-tip"></div></div>                        <label class="pro-user-checkbox J-user-autolabel"> <input class="J-user-isauto" type="checkbox" name="is_auto" />记住我的登录状态<div class="pro-user-safe">建议在公共电脑上取消保持登录选项。</div></label>                        <div class="pro-user-actions">                            <input class="pro-user-btn J-user-loginsubmit" type="button" value="登录" />                            &nbsp;&nbsp;<a href="https://web.archive.org/web/20190615080102/http://v2.ttus.ttpod.com/find_pwd/index.html" target="_blank" class="pro-user-forget">忘记密码?</a>                        </div>                    </div>                    <div class="pro-user-login-r">                        <div class="pro-user-show"></div>                        <div class="pro-user-regtip">还没有天天动听账号？<a class="J-user-register" href="javascript:;">立即注册</a></div>                        <div class="pro-user-third">合作账号登录</div>                        <div class="pro-user-bar"><a class="pro-user-qq J-user-qq" href="javascript:;">QQ登录</a><a class="pro-user-sina J-user-sina" href="javascript:;">新浪微博登录</a></div>                    </div>                </div>                </div>',register:'                <div class="user-login-register">                <h3 class="pro-user-header">注册<span class="pro-user-close J-user-close"></span></h3>                <div class="pro-user-content">                    <div class="pro-user-field" data-field="nick_name"><input class="pro-user-input" type="text" autocomplete="off" name="nick_name" placeholder="请输入昵称"  /><div class="pro-user-tip"  data-tip="昵称可以由2-20中英文、数字、“_”组成">昵称可以由2-20中英文、数字、“_”组成</div></div>                    <div class="pro-user-field" data-field="user_name"><input class="pro-user-input" type="text" autocomplete="off" name="user_name" placeholder="请输入登录邮箱" /><div class="pro-user-tip" data-tip="请输入你的常用邮箱，将作为登录帐号">请输入你的常用邮箱，将作为登录帐号</div></div>                    <div class="pro-user-field" data-field="password"><input class="pro-user-input" type="password" name="password" placeholder="请输入密码" /><div class="pro-user-tip" data-tip="请输入6-20位数字、字母或符号">请输入6-20位数字、字母或符号</div></div>                    <div class="pro-user-field" data-field="comfirmPassword"><input class="pro-user-input" type="password" name="comfirmPassword" placeholder="请确认密码" /><div class="pro-user-tip" data-tip="请再次确认密码">请再次确认密码</div></div>                    <label class="pro-user-checkbox"><input class="J-user-isagree" type="checkbox" checked name="is_agree" />我已经阅读并同意<a target="_blank" href="https://web.archive.org/web/20190615080102/http://www.ttpod.com/website/propotal">版权申明</a></label>                    <div class="pro-user-actions">                        <input class="pro-user-btn J-user-registersubmit" type="button" value="注册" />&nbsp;&nbsp;&nbsp;&nbsp;已有账号，请<a class="J-user-login" href="javascript:;">登录</a>                    </div>                </div>                <div class="pro-user-third">合作账号登录</div><div class="pro-user-bar"><a class="pro-user-qq J-user-qq" href="javascript:;">QQ登录</a><a class="pro-user-sina  J-user-sina" href="javascript:;">新浪微博登录</a></div>                </div>',dialog:'<div id="uiLoginDialog" class="pro-user"></div>',mask:'<div id="uiLoginMask" class="pro-user-mask"></div>'},p={lock:function(s){s=$.extend({opacity:.5},s),0==d.length&&(d=$(c.mask),d.appendTo("body")),$.isFunction(s.clickFn)&&d.bind("click",s.clickFn),d.css({opacity:s.opacity,display:"block"})},unLock:function(){d&&(d.hide(),d.unbind())}};Ttpod.user.ready(function(){$(".J-login").live("click",function(){Ttpod.user.login()}),$(".J-register").live("click",function(){Ttpod.user.register()}),$(".J-logout").live("click",function(){Ttpod.user.logout()})}),$.extend(Ttpod.user,{login:function(){u("login")},register:function(){u("register")},anyWhere:function(s){Ttpod.user.isLogin()?$.isFunction(s)&&s.call(this,this.getUserInfo()):u("login")}})});!function(a){var b=/\{([^}]+)\}/g;try{if(window.console&&window.console.log){var i,len,text,args;for(i=0,len=a.length;len>i;i++)args=[""],text=a[i],b.test(text)&&(text=text.replace(b,function(t,e){return args.push(e),"%c"})),eval('console.log("'+text+" "+args.join('","')+'")')}}catch(e){}}(["欢迎使用逍遥在线音乐电台 ，暴力破解者请自重！","如有购买意向请联系，非诚勿扰","联系QQ：962497381 留言也可-来自逍遥乐IT博客”命名）","https://web.archive.org/web/20190615080102/http://www.luoxiao123.com","{font-size:185px;font-family:courier new;width:123px; height:35px;background:url(http://music.luoxiao123.cn/styles/images/logo.png) no-repeat;} "]);

}
/*
     FILE ARCHIVED ON 08:01:02 Jun 15, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:18:01 Feb 18, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 227.195
  exclusion.robots: 0.182
  exclusion.robots.policy: 0.176
  RedisCDXSource: 53.901
  esindex: 0.011
  LoadShardBlock: 150.037 (3)
  PetaboxLoader3.datanode: 279.872 (4)
  CDXLines.iter: 20.815 (3)
  load_resource: 310.087
  PetaboxLoader3.resolve: 96.492
*/