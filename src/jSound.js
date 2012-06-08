~function(w){
	if(w.jSound)return;
	~function(){
		//Dom Ready
		if (!document.body){
			setTimeout(arguments.callee,50);
			return false;
		}
		console.log('init');
		var elem = document.createElement('audio'),src;
		if (!elem.canPlayType){
			elem = document.createElement('bgsound');
		}
		document.body.appendChild(elem);
		w.jSound={
			play:function(soundSrc){
				src=soundSrc;
				elem.src='';
				elem.src=src;
				if (elem.canPlayType){
					elem.play();
				}
			}
		}
	}();
}(window);