// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-v3.0
!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=74)}({2:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="localhost"===location.hostname||"www-"===location.host.substr(0,4)||"cat-"===location.host.substr(0,4)||"review-"===location.host.substr(0,7)||"webdev-"===location.host.substr(0,7)||"ia-petabox-"===location.host.substr(0,11)?console.log.bind(console):function(){}},74:function(e,t,n){"use strict";n.r(t);var a,o=n(2);a=function(e){Object(o.a)("<ia-wayback-search>: ".concat(e))},document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector('[data-id="ia-wayback-search"]');if(e){var t=function(e){window.archive_analytics&&window.archive_analytics.send_event_no_sampling("home","WaybackSearchForm-".concat(e),window.location.pathname)},n={performQuery:function(e){window.location="https://web.archive.org/web/*/".concat(e)}};e.innerHTML="<ia-wayback-search\n      baseHost=".concat(e.dataset.baseHost,'\n      waybackPagesArchived="').concat(e.dataset.waybackPagesArchived,'"\n    ></ia-wayback-search>');var o=e.querySelector("ia-wayback-search");o.queryHandler=n,o.addEventListener("waybackSearchSubmitted",(function(e){var n=e.detail;t("Submit"),a("waybackSearchSubmitted: ".concat(n.query))})),o.addEventListener("waybackMachineStatsLinkClicked",(function(){t("StatsLink"),a("waybackMachineStatsLinkClicked event")})),o.addEventListener("waybackMachineLogoLink",(function(){t("LogoLink"),a("waybackMachineLogoLink event")}))}}))}});
//# sourceMappingURL=ia-wayback-search.min.js.map
// @license-end
