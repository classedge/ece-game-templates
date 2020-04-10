(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5.7,1,1).p("AkcgBIgmgpAEcArIAngj");
	this.shape.setTransform(2.4,-31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D236").s().p("AkjEkQh5h5AAirQAAiqB5h5QAPgPAQgNQBvhdCVAAQCrAAB5B5IAQARQBpB0AACeQAACrh5B5Qh5B5irAAQiqAAh5h5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-41.3,82.6,82.6);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDD2F").s().p("AkiBHQhNhNgehnQgLgogCgqQB6BEBbAPQBcAQC0AEQC0ADCchRQgTCbhuBmQhuBlirAAQiqAAh5h5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,-19.2,82.2,38.4);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AByAuQgOgPAAgUIAAgIQADgPALgMQAGgGAIgDQAGgEAIgBIAIAAQAMAAAKAFQAHADAGAGQAPAPAAAUQAAAUgPAPQgPAPgUAAQgVAAgPgPgAi4AYQgOgOgBgSIAAgCQAAgVAPgPQAOgNAUgBIABAAQAVAAAOAOQAPAPAAAVQAAAUgPAOQgOAPgVAAQgUAAgPgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-6.1,40,12.1);


(lib.Leg_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5.7,1,1).p("AgmBaIBMABIABi1");
	this.shape.setTransform(0,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-2.8,13.4,23.9);


(lib.leg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Leg_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.2,3.3,0.997,0.997,-34.8,0,0,3.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:9.1,scaleX:1,scaleY:1,rotation:-25.7,x:7.9,y:13},0).wait(1).to({rotation:-16.6,x:6.4},0).wait(1).to({rotation:-7.5,x:4.8,y:12.7},0).wait(1).to({rotation:1.7,x:3.4,y:12.2},0).wait(1).to({rotation:10.8,x:2,y:11.5},0).wait(1).to({rotation:19.9,x:0.7,y:10.6},0).wait(1).to({rotation:16,x:1.2,y:11},0).wait(1).to({rotation:12.2,x:1.8,y:11.4},0).wait(1).to({rotation:8.3,x:2.3,y:11.7},0).wait(1).to({rotation:4.4,x:2.9,y:12},0).wait(1).to({rotation:0.6,x:3.5,y:12.3},0).wait(1).to({rotation:-3.3,x:4.1,y:12.5},0).wait(1).to({rotation:-7.2,x:4.8,y:12.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.6,0.3,15.9,24.8);


(lib.leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Leg_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.2,3.2,0.997,0.997,25.1,0,0,3.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:9.1,scaleX:1,scaleY:1,rotation:15.8,x:1.2,y:11.1},0).wait(1).to({rotation:6.4,x:2.6,y:11.9},0).wait(1).to({rotation:-2.9,x:4,y:12.6},0).wait(1).to({rotation:-12.2,x:5.6,y:13},0).wait(1).to({rotation:-21.5,x:7.2,y:13.1},0).wait(1).to({rotation:-30.9,x:8.8,y:13},0).wait(1).to({rotation:-40.2,x:10.3,y:12.6},0).wait(1).to({rotation:-27.2,x:8.1,y:13.1},0).wait(1).to({rotation:-14.2,x:5.9,y:13},0).wait(1).to({rotation:-1.2,x:3.8,y:12.5},0).wait(1).to({rotation:11.8,x:1.8,y:11.4},0).wait(1).to({rotation:24.8,x:0.1,y:10},0).wait(1).to({rotation:37.8,x:-1.2,y:8.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,0.6,20.4,22.1);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-165.6,-26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-30.8},7).to({y:-26.3},7).wait(1));

	// bottom yellow
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-162.7,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-7.2},7).to({y:-2.7},7).wait(1));

	// top green
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-162.6,-24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-29.3},7).to({y:-24.8},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.9,-66.1,82.6,82.6);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bottom yellow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEDD2F").s().p("AkiBHQhNhNgehnQgLgogCgqQB6BEBbAPQBcAQC0AEQC0ADCchRQgTCbhuBmQhuBlirAAQiqAAh5h5g");
	this.shape.setTransform(-162.7,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// top green
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D236").s().p("AkjEkQh5h5AAirQAAiqB5h5QB5h5CqAAQCrAAB5B5QB5B5AACqQAACrh5B5Qh5B5irAAQiqAAh5h5g");
	this.shape_1.setTransform(-162.6,-24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_8
	this.instance = new lib.leg2();
	this.instance.parent = this;
	this.instance.setTransform(-158.5,20.1,1,1,0,0,0,0,9.8);

	this.instance_1 = new lib.leg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-195.3,12.8,1,1,0,0,0,0,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(-206.3,-66.1,85,102.7), null);


// stage content:
(lib.caterpillar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_10
	this.text4 = new cjs.Text("?", "51px 'Times'", "#6699FF");
	this.text4.name = "text4";
	this.text4.textAlign = "center";
	this.text4.lineHeight = 53;
	this.text4.lineWidth = 43;
	this.text4.parent = this;
	this.text4.setTransform(385.8,148.5);

	this.text3 = new cjs.Text("3", "51px 'Times'", "#6699FF");
	this.text3.name = "text3";
	this.text3.textAlign = "center";
	this.text3.lineHeight = 53;
	this.text3.lineWidth = 43;
	this.text3.parent = this;
	this.text3.setTransform(301,148.5);

	this.text2 = new cjs.Text("2", "51px 'Times'", "#6699FF");
	this.text2.name = "text2";
	this.text2.textAlign = "center";
	this.text2.lineHeight = 53;
	this.text2.lineWidth = 43;
	this.text2.parent = this;
	this.text2.setTransform(219.7,148.5);

	this.text1 = new cjs.Text("1", "51px 'Times'", "#6699FF");
	this.text1.name = "text1";
	this.text1.textAlign = "center";
	this.text1.lineHeight = 53;
	this.text1.lineWidth = 43;
	this.text1.parent = this;
	this.text1.setTransform(136.7,145.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1},{t:this.text2},{t:this.text3},{t:this.text4}]}).wait(1));

	// Layer_7
	this.instance = new lib.body();
	this.instance.parent = this;
	this.instance.setTransform(382.6,182.8,1,1,0,0,0,-162.7,-24.8);

	this.instance_1 = new lib.body();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300.9,181.4,1,1,0,0,0,-162.7,-24.8);

	this.instance_2 = new lib.body();
	this.instance_2.parent = this;
	this.instance_2.setTransform(218.8,180.5,1,1,0,0,0,-162.7,-24.8);

	this.instance_3 = new lib.body();
	this.instance_3.parent = this;
	this.instance_3.setTransform(137.1,178.3,1,1,0,0,0,-162.7,-24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// head
	this.instance_4 = new lib.head();
	this.instance_4.parent = this;
	this.instance_4.setTransform(55.8,176.5,1,1,0,0,0,-162.7,-24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(276,333,548.3,266.1);
// library properties:
lib.properties = {
	id: '3D6B0CF4FD284BC6ADC32370A33CEBDC',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3D6B0CF4FD284BC6ADC32370A33CEBDC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;