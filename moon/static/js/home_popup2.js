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

//首页弹窗
$(document).ready(function() {
	var isDiaplay = parseInt($.cookie("_uhdp"));
	var w = $(window).width();
	$(window).resize(function() {
		w = $(window).width();
	})
	if (isDiaplay != 1 && w > 1000) {
		var $containter = $('<div id="dialogContainer" class="dialog_container"><div id="dialogBox" class="dialog_box"><a href="javascript:" id="dialogClose" class="dialog_close"><img src="https://web.archive.org/web/20181012111026/http://www.imoonfm.com/wp-content/uploads/2015/08/2015083101472466.png" /></a><a href="https://web.archive.org/web/20181012111026/http://www.imoonfm.com"><img src="https://web.archive.org/web/20181012111026/http://www.imoonfm.com/wp-content/uploads/2015/09/201509211407248.png" width="800" height="533" /></a></div></div>');
		$('body').append($containter);
		var $clsbtn = $('#dialogClose');
		$clsbtn.click(function() {
			$containter.fadeOut();
		})
		$.cookie("_uhdp", 1);
	}
});

}
/*
     FILE ARCHIVED ON 11:10:26 Oct 12, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:33:03 Feb 18, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.78
  captures_list: 682.655
  exclusion.robots: 0.798
  RedisCDXSource: 5.035
  PetaboxLoader3.resolve: 104.33 (2)
  esindex: 0.064
  CDXLines.iter: 29.509 (3)
  LoadShardBlock: 642.396 (3)
  PetaboxLoader3.datanode: 203.707 (5)
  load_resource: 264.744 (2)
*/