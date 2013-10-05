/*!
 * jSound 0.0.1 preview
 * @author TooBug <i@toobug.net>
 * @license MIT
 */

(function(w){

	'use strict';

	var jSound = {};

	var elem;

	var init = function(){

		elem = document.createElement('audio');
		if (!elem.canPlayType){
			elem = document.createElement('bgsound');
		}
		document.body.appendChild(elem);
	};
	
	/**
	 * 播放音效
	 * @param {String} src 要播放的音频文件URL
	 * @param {Object} ops 播放设置
	 * @param {Boolean} ops.loop 是否循环播放
	 * @param {Number} ops.volume 音量大小，取值为0-100
	 * @return {undefined}
	 */
	jSound.play = function(src,ops){
		var options;

		// 如果只传了ops，没有传src
		if (typeof src === 'object'){
			options = src;
		}else{
			options = ops || {};
			options.src = src;
		}
		if (options.loop){
			elem.loop = elem.canPlayType?true:-1;
		}else{
			elem.loop = elem.canPlayType?false:1;
		}
		if (options.volume !== undefined){
			elem.volume = elem.canPlayType?options.volume/100:-(options.volume-100)*(options.volume-100);
		}
		elem.src=options.src;
		if (elem.canPlayType){
			elem.play();
		}
	};

	/**
	 * 停止播放音效
	 * @return {undefined}
	 */
	jSound.stop = function(){
		if (elem.canPlayType){
			elem.pause();
		}else{
			elem.src='';
		}
	};

	/**
	 * 播放内置音效
	 * @param  {String} toneName 音效名字
	 * @return {undefined}
	 */
	jSound.playTone = function(toneName){
		elem.src='data:audio/wav;base64,'+this.sounds[toneName];
		if (elem.canPlayType){
			elem.play();
		}
	};

	//detect DOM Ready Event
	if (window.addEventListener){
		jSound.domReady = function(readyFunc){
			document.addEventListener('DOMContentLoaded',readyFunc,false);
		};
	}else if (window.attachEvent){
		jSound.domReady = function(readyFunc){
			document.attachEvent('onreadystatechange',function(){
				if (document.readyState === 'complete'){
					readyFunc();
				}
			});
		};
	}

	jSound.domReady(function(){
		init();
	});

	w.jSound = jSound;

})(window);