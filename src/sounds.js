~function(w){
	console.log(w.jSound);
	//Dom Ready
	if (!document.body){
		var func = arguments.callee;
		setTimeout(function(){func(w);},50);
		return false;
	}
	if (!w.jSound)return;
	function repeatStr(str,count){
		var tempstr = '';
		for (var i=count; i-- ; ){
			tempstr += str;
		}
		return tempstr;
	}
	w.jSound.sounds = {
		tips1:'UklGRvAJAABXQVZFZm10IBAAAAABAAIAQB8AAIA+AAACAAgAZGF0YcwJAACAgICAgICBgX9/enp7e4mJkJCAgG5udHSGhoyMgoJ7e39/hISAgHt7gYGKioWFdnZxcX5+j4+Pj39/cXFzc4ODjY2Ghnl5eHiAgIWFhISAgH19fX1/f4CAgYGEhIUAgQB7AHp6fn6Dg4aGg4N+fnx8fn5/f4GBg4OBgX5+f3+BgYGBgIB/f39/f3+BgYKCgICAgICAgIB/f39/gICCgoKCgYF+fn19f3+BgYKCgoKAgH9/fn6AgIGBgYF/f39/gYGCgoGBfn5+foCAgICAgIGBgoKBgYCAfX18fH9/hISFhYKCfX18fH5+gICBgYKCg4OBgX5+fX1+foCAgICBgYKCgYF/f35+fn5+fn9/goKEhIKCf399fX19fn6AgIKChISDg39/fX19fX9/gYGCgoODgoKAgH19fX1/f4CAgoKCgoKCgIB+fn19fn6BgYKCgoKBgYCAf39+fn5+gICBgYKCgoKAgH9/fn5/f4CAgYGBgYGBgIB/f39/f3+AgIGBgYGBgYCAf39/f39/gICBgYGBgYGAgICAf39/f4CAgYGAgICAgYGAgH9/f3+AgICAgICAgIGBgIB/f39/gICAgICAgICBgYGBf39/f4CAgYGBgYCAgICAgH9/f3+AgICAgYGAgICAgICAgH9/f3+AgIGBgICAgICAgIB/f39/gICAgIGBgYGAgICAf39/f4CAgICBgYGBgIB/f39/f3+AgICAgYGBgYGBgIB/f39/gICAgIGBgYGAgICAf39/f4CAgICAgIGBgYGAgH9/f3+AgICAgYGBgYCAgIB/f39/gICAgICAgICAgICAgIB/f4'
				+ repeatStr('CAgI',532)
				+ 'CAgYGAgHt7fHyKipCQfn5paW5uh4eZmY6OdXVvb4GBjY2CgnNzd3eIiI2Nfn5zc39/jY2Hh3d3eHiEhIeHfn55eYCAhYWAgHp6fn6EhIODfn5/f4ODgoJ+fn9/goKBgX19fn6CgoGBfHx+foSEgoJ9fX9/hYWCgnx8fn6FhYKCe3t9fYWFg4N6enx8hYWEhHt7fHyFhYaGfHx7e4SEhYV8fHp6g4OFhX5+enqCgoWFf398fIGBhISAgHx8gICDg4CAfX2AgIODgIB9fX9/goKBgX5+gICCgoGBfn5/f4GBgIB/f39/gYGAgH9/gICBgYCAf3+AgIKCgIB/f4CAgYGAgH5+gICCgoCAfn5/f4KCgYF+fn9/goKBgX5+f3+BgYGBf38='
	};
}(window);