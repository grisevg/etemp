(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"edate_atlas_", frames: [[1282,894,288,288],[0,898,288,288],[1160,1184,288,288],[1572,894,288,288],[870,898,288,288],[290,898,288,288],[580,898,288,288],[0,0,1280,896],[1282,719,675,173],[1282,0,690,717]]}
];


// symbols:



(lib.AedcdMy_0 = function() {
	this.initialize(ss["edate_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AedcdMy_1 = function() {
	this.initialize(ss["edate_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.AedcdMy_2 = function() {
	this.initialize(ss["edate_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.AedcdMy_3 = function() {
	this.initialize(ss["edate_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.AedcdMy_4 = function() {
	this.initialize(ss["edate_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.AedcdMy_5 = function() {
	this.initialize(ss["edate_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.AedcdMy_6 = function() {
	this.initialize(ss["edate_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["edate_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["edate_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.roadhog = function() {
	this.initialize(ss["edate_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
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


(lib.soldier_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.AedcdMy_0();
	this.instance.parent = this;

	this.instance_1 = new lib.AedcdMy_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.AedcdMy_2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.AedcdMy_3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.AedcdMy_4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.AedcdMy_5();
	this.instance_5.parent = this;

	this.instance_6 = new lib.AedcdMy_6();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Logo_and_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo_and_text
	this.sd = new cjs.Text("Eugene", "72px 'Times New Roman'");
	this.sd.name = "sd";
	this.sd.lineHeight = 82;
	this.sd.parent = this;
	this.sd.setTransform(513.9,489.85);
	this.sd.shadow = new cjs.Shadow("rgba(51,0,255,1)",0,0,4);

	this.text = new cjs.Text("TO AN e-DATE by", "46px 'Stencil'", "#003366");
	this.text.lineHeight = 57;
	this.text.lineWidth = 379;
	this.text.parent = this;
	this.text.setTransform(429,431.3);
	this.text.shadow = new cjs.Shadow("rgba(0,204,0,1)",3,3,4);

	this.text_1 = new cjs.Text("You are e-invited", "46px 'Stencil'", "#003366");
	this.text_1.lineHeight = 57;
	this.text_1.parent = this;
	this.text_1.setTransform(413.6,362.75);
	this.text_1.shadow = new cjs.Shadow("rgba(0,204,0,1)",3,3,4);

	this.text_2 = new cjs.Text("hey fellow fragger ", "46px 'Stencil'", "#003366");
	this.text_2.lineHeight = 57;
	this.text_2.parent = this;
	this.text_2.setTransform(352.05,220.5);
	this.text_2.shadow = new cjs.Shadow("rgba(0,204,0,1)",3,3,4);

	this.sd_1 = new cjs.Text("Beck", "72px 'Times New Roman'");
	this.sd_1.name = "sd_1";
	this.sd_1.lineHeight = 82;
	this.sd_1.parent = this;
	this.sd_1.setTransform(540.9,279.05);
	this.sd_1.shadow = new cjs.Shadow("rgba(51,0,255,1)",0,0,4);

	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(293,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.sd_1},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.sd}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Logo_and_text, null, null);


(lib.Scene_1_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BG
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_BG, null, null);


(lib.soldier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.soldier_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(144,144,1,1,0,0,0,144,144);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,288);


(lib.Scene_1_anims = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// anims
	this.instance = new lib.roadhog();
	this.instance.parent = this;
	this.instance.setTransform(810,260,0.7362,0.7362);

	this.instance_1 = new lib.soldier();
	this.instance_1.parent = this;
	this.instance_1.setTransform(185.95,551.3,1,1,0,0,0,144,144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_anims, null, null);


// stage content:
(lib.edate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.sd = this.Logo_and_text.sd;
		this.sd = this.Logo_and_text.sd;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Logo_and_text_obj_
	this.Logo_and_text = new lib.Scene_1_Logo_and_text();
	this.Logo_and_text.name = "Logo_and_text";
	this.Logo_and_text.parent = this;
	this.Logo_and_text.setTransform(630.5,294.8,1,1,0,0,0,630.5,294.8);
	this.Logo_and_text.depth = 0;
	this.Logo_and_text.isAttachedToCamera = 0
	this.Logo_and_text.isAttachedToMask = 0
	this.Logo_and_text.layerDepth = 0
	this.Logo_and_text.layerIndex = 0
	this.Logo_and_text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Logo_and_text).wait(1));

	// anims_obj_
	this.anims = new lib.Scene_1_anims();
	this.anims.name = "anims";
	this.anims.parent = this;
	this.anims.setTransform(680,524,1,1,0,0,0,680,524);
	this.anims.depth = 0;
	this.anims.isAttachedToCamera = 0
	this.anims.isAttachedToMask = 0
	this.anims.layerDepth = 0
	this.anims.layerIndex = 1
	this.anims.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.anims).wait(1));

	// BG_obj_
	this.BG = new lib.Scene_1_BG();
	this.BG.name = "BG";
	this.BG.parent = this;
	this.BG.setTransform(641,448,1,1,0,0,0,641,448);
	this.BG.depth = 0;
	this.BG.isAttachedToCamera = 0
	this.BG.isAttachedToMask = 0
	this.BG.layerDepth = 0
	this.BG.layerIndex = 2
	this.BG.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BG).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(641,359,677,537);
// library properties:
lib.properties = {
	id: 'FBD0FB21FDD98F4A8CF07E47B492B107',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/edate_atlas_.png", id:"edate_atlas_"}
	],
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
an.compositions['FBD0FB21FDD98F4A8CF07E47B492B107'] = {
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;