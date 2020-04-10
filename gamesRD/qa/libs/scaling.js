function doScaling()
{
	var winHeight =  window.innerHeight;
	var winWidth = window.innerWidth;	
	 var offset= 0,containerTop = 0,containerLeft =0,RESIZE_RATIO = winWidth/winHeight,containerView = $('#wrapper'),containerViewParent = $('#wrapper_parent'),parentWidth= 0,parentHeight=0,ASPECT_RATIO = containerView.width()/containerView.height(), containerScale;
	 
	containerScale = 1;
	containerView.css({'-webkit-transform':'scale('+containerScale+')','-moz-transform':'scale('+containerScale+')','-ms-transform':'scale('+containerScale+')','-o-transform':'scale('+containerScale+')'});
	containerViewParent.css({width: '0px'});
	containerViewParent.css({height: '0px'});
	containerViewParent.css({top: '0px'});
	containerViewParent.css({left: '0px'});

	var widthDiff=(containerView.width()-winWidth)/winWidth*100;
	var heightDiff=((containerView.height())-winHeight)/winHeight*100;

	if(widthDiff > heightDiff){
		containerScale = winWidth/containerView.width();
	} else {
		containerScale =  winHeight/(containerView.height());
	}	
	
	if(!scaleupRequired) { if(containerScale > 1) { containerScale = 1; }}
		
	containerView.css({'-webkit-transform':'scale('+containerScale+')','-moz-transform':'scale('+containerScale+')','-ms-transform':'scale('+containerScale+')','-o-transform':'scale('+containerScale+')'});
	parentWidth = containerView.width() * containerScale;
	parentHeight = (containerView.height()) * containerScale;
	containerViewParent.css({height: parentHeight+'px'});
	containerViewParent.css({width: parentWidth+'px'});
	containerViewParent.css({top: ((winHeight-parentHeight)/2)+'px'});
	containerViewParent.css({left: ((winWidth-parentWidth)/2)+'px'});
	window.scrollTo(0,0);
}