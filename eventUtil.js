//能力检测
var eventUtil={
	addHanders:function(ele,type,handers){
		if(ele.addEventListener){
        	ele.addEventListener(type,handers,false);
		}else if(ele.attachEvent){
			ele.attachEvent('on'+type,handers);
		}else{
            ele['on'+type]=handers;
		}

	}
	removeHanders:function(ele,type,handers){
		if(ele.removeEventListener){
        	ele.removeEventListener(type,handers,false);
		}else if(ele.detachEvent){
			ele.detachEvent('on'+type,handers);
		}else{
            ele['on'+type]=null;
		}

	}
}
