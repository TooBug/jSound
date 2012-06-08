~function(w){
	if(w.jSound)return;
	~function(){
		//Dom Ready
		if (!document.body){
			setTimeout(arguments.callee,50);
			return false;
		}
		var elem = document.createElement('audio'),src;
		if (!elem.canPlayType){
			elem = document.createElement('bgsound');
		}
		document.body.appendChild(elem);
		w.jSound={
			play:function(ops){
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
					//console.log(options.volume);
					elem.volume = elem.canPlayType?options.volume/100:-(options.volume-100)*(options.volume-100);
				}
				elem.src=options.src;
				if (elem.canPlayType){
					elem.play();
				}
			},
			stop:function(){
				if (elem.canPlayType){
					elem.pause();
				}else{
					elem.src='';
				}
			},
			playTone:function(toneName){
				elem.src='data:audio/wav;base64,'+this.sounds[toneName];
				if (elem.canPlayType){
					elem.play();
				}
			}
		}
	}();
}(window);