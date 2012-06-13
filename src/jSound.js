~function(w){
	if (!w.jSound){
		w.jSound = {};
	}
	var init = function(){
		if(w.jSound.init)return;
		var elem = document.createElement('audio'),src;
		if (!elem.canPlayType){
			elem = document.createElement('bgsound');
		}
		document.body.appendChild(elem);
		w.jSound.play = function(ops){
			var options;
			if (typeof ops === 'string'){
				options = {
					src : ops
				}
			}else{
				options = ops;
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
		w.jSound.stop = function(){
			if (elem.canPlayType){
				elem.pause();
			}else{
				elem.src='';
			}
		};
		w.jSound.playTone = function(toneName){
			elem.src='data:audio/wav;base64,'+this.sounds[toneName];
			if (elem.canPlayType){
				elem.play();
			}
		};
		w.jSound.init = 1;
	};

	//detect DOM Ready Event
	if (window.addEventListener){
		w.jSound.domReady = function(readyFunc){
			document.addEventListener('DOMContentLoaded',readyFunc,false);
		}
	}else if (window.attachEvent){
		w.jSound.domReady = function(readyFunc){
			document.attachEvent('onreadystatechange',function(){
				if (document.readyState === 'complete'){
					readyFunc();
				}
			});
		}
	}

	w.jSound.domReady(function(){
		init(w);
	});

}(window);