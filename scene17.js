(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"scene17_atlas_", frames: [[0,482,854,480],[0,964,854,480],[856,482,854,480],[1710,0,854,480],[1712,482,854,480],[1712,1446,854,480],[2568,1446,854,480],[0,1928,854,480],[2566,0,854,480],[2568,482,854,480],[856,964,854,480],[0,1446,854,480],[856,1446,854,480],[0,0,1708,480],[1712,964,854,480],[2568,964,854,480],[856,1928,854,480]]}
];


// symbols:



(lib.annasmall = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.annasmallshadow = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.billysmall = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.billysmallshadow = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.exitingorphanage1 = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.exitingorphanage2 = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.exitingorphanage3 = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.exitingorphanage4 = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.joey = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.joeyshadow = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mindy = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mindyshadow = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.orphanageoutsidebg = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.orphanageoutsidefg = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.textbox = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.torin = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.torinfilter = function() {
	this.spriteSheet = ss["scene17_atlas_"];
	this.gotoAndStop(16);
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


(lib.slam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.exitingorphanage2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.slam, new cjs.Rectangle(0,0,854,480), null);


(lib.RPGText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.txt = new cjs.Text("CLICK", "20px 'Arial'", "#333333");
	this.txt.name = "txt";
	this.txt.lineHeight = 24;
	this.txt.lineWidth = 345;
	this.txt.parent = this;
	this.txt.setTransform(266,21.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// box
	this.instance = new lib.textbox();
	this.instance.parent = this;
	this.instance.setTransform(0,-323);

	this.instance_1 = new lib.textbox();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-169,0,1.22,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RPGText, new cjs.Rectangle(-169,-323,1042.2,803), null);


(lib.orphanageoutsidefg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.orphanageoutsidefg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.orphanageoutsidefg_1, new cjs.Rectangle(0,0,1708,480), null);


(lib.fadeblock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhEZAmQMAAAhMfMCIzAAAMAAABMfg");
	this.shape.setTransform(437.8,244.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fadeblock, new cjs.Rectangle(0,0,875.6,489.6), null);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.exitingorphanage3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(0,0,854,480), null);


(lib.door = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.exitingorphanage1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.door, new cjs.Rectangle(0,0,888,499.1), null);


(lib.TORINfilter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.torinfilter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TORINfilter, new cjs.Rectangle(0,0,854,480), null);


(lib.TORINexit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.torin();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TORINexit, new cjs.Rectangle(0,0,854,480), null);


(lib.MINDYfilter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mindyshadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MINDYfilter, new cjs.Rectangle(0,0,854,480), null);


(lib.MINDYentex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mindy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MINDYentex, new cjs.Rectangle(0,0,854,480), null);


(lib.JOEYfilter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.joeyshadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.JOEYfilter, new cjs.Rectangle(0,0,854,480), null);


(lib.JOEYentex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.joey();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.JOEYentex, new cjs.Rectangle(0,0,854,480), null);


(lib.BILLYfilter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.billysmallshadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BILLYfilter, new cjs.Rectangle(0,0,854,480), null);


(lib.BILLYexit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.billysmall();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BILLYexit, new cjs.Rectangle(0,0,854,480), null);


(lib.ANNAfilter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.annasmallshadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ANNAfilter, new cjs.Rectangle(0,0,854,480), null);


(lib.ANNAentex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.annasmall();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ANNAentex, new cjs.Rectangle(0,0,854,480), null);


(lib.TORIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fadeIn:1,fadeOut:32,enter:33,exit:49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(15).call(this.frame_32).wait(16).call(this.frame_48).wait(16).call(this.frame_64).wait(1));

	// filter
	this.filter = new lib.TORINfilter();
	this.filter.name = "filter";
	this.filter.parent = this;
	this.filter.setTransform(411,207,1,1,0,0,0,427,240);
	this.filter.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.filter).wait(1).to({alpha:0},16).wait(1).to({alpha:0.602},14).to({_off:true},1).wait(32));

	// base
	this.instance = new lib.torin();
	this.instance.parent = this;
	this.instance.setTransform(-16,-33);

	this.TorinExit = new lib.TORINexit();
	this.TorinExit.name = "TorinExit";
	this.TorinExit.parent = this;
	this.TorinExit.setTransform(411,207,1,1,0,0,0,427,240);
	this.TorinExit.alpha = 0;
	this.TorinExit._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.TorinExit}]},33).to({state:[{t:this.TorinExit}]},15).to({state:[{t:this.TorinExit}]},1).to({state:[{t:this.TorinExit}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.TorinExit).wait(33).to({_off:false},0).to({alpha:1},15).wait(1).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-33,854,480);


(lib.MINDY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fadeIn":1,"fadeOut":30,"enter":31,"exit":47});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.stop();
	}
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(15).call(this.frame_30).wait(16).call(this.frame_46).wait(16).call(this.frame_62).wait(1));

	// filter
	this.instance = new lib.MINDYfilter();
	this.instance.parent = this;
	this.instance.setTransform(427,240,1,1,0,0,0,427,240);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.602},0).to({alpha:0},14).wait(1).to({alpha:0.602},14).to({_off:true},1).wait(32));

	// base
	this.instance_1 = new lib.MINDYentex();
	this.instance_1.parent = this;
	this.instance_1.setTransform(427,240,1,1,0,0,0,427,240);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},0).wait(30).to({alpha:0},0).to({alpha:1},15).wait(1).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,854,480);


(lib.JOEY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fadeIn":1,"fadeOut":30,"enter":31,"exit":47});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.stop();
	}
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(15).call(this.frame_30).wait(16).call(this.frame_46).wait(16).call(this.frame_62).wait(1));

	// filter
	this.instance = new lib.JOEYfilter();
	this.instance.parent = this;
	this.instance.setTransform(427,240,1,1,0,0,0,427,240);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.602},0).to({alpha:0},14).wait(1).to({alpha:0.602},14).to({_off:true},1).wait(32));

	// base
	this.instance_1 = new lib.JOEYentex();
	this.instance_1.parent = this;
	this.instance_1.setTransform(427,240,1,1,0,0,0,427,240);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},0).wait(30).to({alpha:0},0).to({alpha:1},15).wait(1).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,854,480);


(lib.BILLY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fadeIn":1,"fadeOut":32,"enter":33,"exit":49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(15).call(this.frame_32).wait(16).call(this.frame_48).wait(16).call(this.frame_64).wait(1));

	// filter
	this.instance = new lib.BILLYfilter();
	this.instance.parent = this;
	this.instance.setTransform(427,240,1,1,0,0,0,427,240);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.602},0).to({alpha:0},16).wait(1).to({alpha:0.602},14).to({_off:true},1).wait(32));

	// base
	this.instance_1 = new lib.BILLYexit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(427,240,1,1,0,0,0,427,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({alpha:0},0).to({alpha:1},15).wait(1).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,854,480);


(lib.ANNA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fadeIn":1,"fadeOut":30,"enter":31,"exit":47});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.stop();
	}
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(15).call(this.frame_30).wait(16).call(this.frame_46).wait(16).call(this.frame_62).wait(1));

	// filter
	this.instance = new lib.ANNAfilter();
	this.instance.parent = this;
	this.instance.setTransform(427,240,1,1,0,0,0,427,240);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.602},0).to({alpha:0},14).wait(1).to({alpha:0.602},14).to({_off:true},1).wait(32));

	// base
	this.instance_1 = new lib.ANNAentex();
	this.instance_1.parent = this;
	this.instance_1.setTransform(427,240,1,1,0,0,0,427,240);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},0).wait(30).to({alpha:0},0).to({alpha:1},15).wait(1).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,854,480);


// stage content:
(lib.scene17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("playgroundnoises");
	}
	this.frame_143 = function() {
		playSound("doorslam");
	}
	this.frame_337 = function() {
		this.stop();
		
		
		//var bgmusic = createjs.Sound.play("bgsound", {loop:10});
		//bgmusic.volume = 0.7;
		
		//nested/multidimensional array (an array within an array)
		var textBlocks = [
				["Billy", 	        "Well look if it ain't Turd-in!"],
		["Joey Enter", 	    "Pffft...That's a good one cuz it sounds like his real name Torin. Hehehe"],
		["Billy In 1", 	    "I know right! I was up all night thinking up that one. Heh"],
		["Torin In 1", 	    "Outta my way Billy"],
		["Billy In 1", 	    "Huh...what are YOU gonna do?"],
		["Torin In 1", 	    "*Brushes Past Billy and Joey*"],
		["Joey Exit", 	    " "],
		["Anna Enter",         "No one's ever gonna adopt a moody kid like you"],
		["Mindy Enter",        "Hey, leave Torin alone!"],
		["Billy In", 	    "Oh shut your trap Mindy"],
		["Torin In", 	    "Listen...I don't care. Who needs parents anyway? Adults are booooring. They only tell you what to do and give you chores. I'm gonna do what I want to do!"],
		["Torin Exit", 	    "That brat. He thinks he's sooooo tough"],
		["Mindy Exit", 	    " "],
		["Anna Exit", 	    " "],
									];
		
		//using constants because Speaker will always be in the first index. Text will be 2nd
		const SPEAKER = 0;
		const TEXT = 1;
		//defining variables that will be used within my text functions
		var currentTextBlockIndex = 0; //starting the index off at 0
		var currentTextBlockString;
		var currentTextBlock;
		
		//this.addEventListener(MouseEvent.CLICK, startText)??
		addEventListener("click", nextTextBlock);
		
		/*
		function startText() {
			removeEventListener("click", startText);
			currentTextBlock = textBlocks[currentTextBlockIndex][TEXT];
			console.log("clicky?")
			//characterIcon.gotoAndStop(textBlocks[currentTextBlockIndex][SPEAKER]);
			addEventListener("click", nextTextBlock);
			return currentTextBlock
			//this code is only run through at the beginning
		}
		*/		
		//this.rpgText.txt.text = startText();
		
		//function updateText() {
		//	this.rpgText.txt.text = startText();
		//		//removeEventListener(MouseEvent.CLICK, updateText);
		//	}
		//this.rpgText.txt.text = startText();
		//need to put this in a function that only goes from a button press
		//does not just happen automatically
		var root = this;
				
		function nextTextBlock() {	
			console.log("nextTextBlock() was called");
			
			
		 if(textBlocks[currentTextBlockIndex][SPEAKER] == "Foster Dad In"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.foster.gotoAndPlay("fadeIn");
		root.torin.gotoAndPlay("fadeOut");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Torin In"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.torin.gotoAndPlay("fadeIn");
		//root.foster.gotoAndPlay("fadeOut");
		root.billy.gotoAndStop("fadeOut");
		//root.joey.gotoAndPlay("fadeOut");
		root.anna.gotoAndStop("fadeOut");
		root.mindy.gotoAndStop("fadeOut");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Billy In"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.billy.gotoAndPlay("fadeIn");
			
		root.torin.gotoAndStop("fadeOut");
		//root.joey.gotoAndPlay("fadeOut");
		root.mindy.gotoAndStop("fadeOut");
		root.anna.gotoAndStop("fadeOut");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Torin In 1"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.torin.gotoAndPlay("fadeIn");
		//root.foster.gotoAndPlay("fadeOut");
		root.billy.gotoAndStop("fadeOut");
		root.joey.gotoAndStop("fadeOut");
		//root.anna.gotoAndPlay("fadeOut");
		//root.mindy.gotoAndPlay("fadeOut");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Billy In 1"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.billy.gotoAndPlay("fadeIn");
			
		root.torin.gotoAndStop("fadeOut");
		root.joey.gotoAndStop("fadeOut");
		//root.mindy.gotoAndPlay("fadeOut");
		//root.anna.gotoAndPlay("fadeOut");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Joey In"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.joey.gotoAndPlay("fadeIn");
			
		root.billy.gotoAndStop("fadeOut");
		root.torin.gotoAndStop("fadeOut");
		root.mindy.gotoAndPlay("fadeOut");
		root.anna.gotoAndPlay("fadeOut");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Mindy In"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.mindy.gotoAndPlay("fadeIn");
			
		root.billy.gotoAndStop("fadeOut");
		root.torin.gotoAndStop("fadeOut");
		//root.joey.gotoAndPlay("fadeOut");
		root.anna.gotoAndStop("fadeOut");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Anna In"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.anna.gotoAndPlay("fadeIn");
			
		root.billy.gotoAndStop("fadeOut");
		root.torin.gotoAndStop("fadeOut");
		//root.joey.gotoAndPlay("fadeOut");
		root.mindy.gotoAndStop("fadeOut");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Joey Enter"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.joey.gotoAndPlay("enter");
		root.billy.gotoAndStop("fadeOut");
		//root.torin.gotoAndPlay("fadeOut");
		//root.mindy.gotoAndPlay("fadeOut");
		//root.anna.gotoAndPlay("fadeOut");
			
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Mindy Enter"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.mindy.gotoAndPlay("enter");
		root.billy.gotoAndStop("fadeOut");
		root.torin.gotoAndStop("fadeOut");
		//root.joey.gotoAndPlay("fadeOut");
		root.anna.gotoAndStop("fadeOut");
			
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Anna Enter"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.anna.gotoAndPlay("enter");
		root.billy.gotoAndStop("fadeOut");
		root.torin.gotoAndStop("fadeOut");
		//root.joey.gotoAndPlay("fadeOut");
		//root.mindy.gotoAndPlay("fadeOut");
			
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Torin Exit"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.torin.gotoAndPlay("exit");
		root.billy.gotoAndPlay("fadeIn");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Joey Exit"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.joey.gotoAndPlay("exit");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Mindy Exit"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.mindy.gotoAndPlay("exit");
		
		}
		}
		if(textBlocks[currentTextBlockIndex][SPEAKER] == "Anna Exit"){   
			console.log("fading() was called");
			setTimeout(stopit,0);
		
		function stopit(){
		root.anna.gotoAndPlay("exit");
		
		}
		}
			
			currentTextBlock = textBlocks[currentTextBlockIndex][TEXT]; // set the text
			//create timer to print text letter by letter
			var idx = 0;
			var string = "";
			var timerFunctionReference = setInterval(letterByLetter ,50);
		
			
			function letterByLetter() {
				string += currentTextBlock[idx++];
				var typewriter = createjs.Sound.play("typewritersound");
				typewriter.on("complete", this.handleComplete, this);
				typewriter.volume = 1;
				if(string.length > 0) removeEventListener("click", nextTextBlock);
				if(idx >= currentTextBlock.length){ clearInterval(timerFunctionReference);
				addEventListener("click", nextTextBlock);}
				console.log(string);
				updateText(string);
			}
			console.log(currentTextBlock)
			currentTextBlockIndex++; //increases the index by 1
			if(currentTextBlockIndex >= textBlocks.length){ 
				currentTextBlockIndex = 0; 
					}	
			//addEventListener("click", nextTextBlock);
			if(string.length == currentTextBlock.length) addEventListener("click", nextTextBlock);
			return currentTextBlock;
				}
		console.log(currentTextBlockIndex);
		
				
		rt = this.rpgText;
		function updateText(msg){
			rt.txt.text = msg;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(143).call(this.frame_143).wait(194).call(this.frame_337).wait(1));

	// scene fade
	this.instance = new lib.fadeblock();
	this.instance.parent = this;
	this.instance.setTransform(416.2,235.2,1,1,0,0,0,437.8,244.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({alpha:0},13).wait(284).to({alpha:1},12).to({alpha:0},11).wait(12));

	// torinlayer
	this.torin = new lib.TORIN();
	this.torin.name = "torin";
	this.torin.parent = this;
	this.torin.setTransform(123.5,236,1,1,0,0,0,110,202.5);
	this.torin.alpha = 0;
	this.torin._off = true;

	this.timeline.addTween(cjs.Tween.get(this.torin).wait(325).to({_off:false},0).to({alpha:1},11).wait(2));

	// billylayer
	this.instance_1 = new lib.BILLY();
	this.instance_1.parent = this;
	this.instance_1.setTransform(452,257.1,1,1,0,0,0,427,240);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.billy = new lib.BILLY();
	this.billy.name = "billy";
	this.billy.parent = this;
	this.billy.setTransform(452,257.1,1,1,0,0,0,427,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},325).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.billy}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(325).to({_off:false},0).to({alpha:1},11).to({_off:true},1).wait(1));

	// boxlayer
	this.rpgText = new lib.RPGText();
	this.rpgText.name = "rpgText";
	this.rpgText.parent = this;
	this.rpgText.setTransform(350.1,398.1,1,1,0,0,0,350,75);
	this.rpgText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rpgText).wait(315).to({_off:false},0).wait(23));

	// annalayer
	this.anna = new lib.ANNA();
	this.anna.name = "anna";
	this.anna.parent = this;
	this.anna.setTransform(297,265.5,1,1,0,0,0,427,240);
	this.anna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.anna).wait(337).to({_off:false},0).wait(1));

	// mindylayer
	this.mindy = new lib.MINDY();
	this.mindy.name = "mindy";
	this.mindy.parent = this;
	this.mindy.setTransform(535.2,263.2,0.892,0.892,0,0,0,427.2,240.1);
	this.mindy._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mindy).wait(337).to({_off:false},0).wait(1));

	// joeylayer
	this.joey = new lib.JOEY();
	this.joey.name = "joey";
	this.joey.parent = this;
	this.joey.setTransform(317.9,262.2,0.861,0.861,0,0,0,426.8,240.1);
	this.joey._off = true;

	this.timeline.addTween(cjs.Tween.get(this.joey).wait(337).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_2 = new lib.orphanageoutsidefg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-854,-156);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(315).to({_off:false},0).wait(23));

	// bg
	this.instance_3 = new lib.orphanageoutsidebg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-156);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(315).to({_off:false},0).wait(23));

	// transitions
	this.instance_4 = new lib.door();
	this.instance_4.parent = this;
	this.instance_4.setTransform(427,249.6,1,1,0,0,0,444,249.6);
	this.instance_4._off = true;

	this.instance_5 = new lib.slam();
	this.instance_5.parent = this;
	this.instance_5.setTransform(415,230.1,1.047,1.047,0,0,0,427,240);
	this.instance_5._off = true;

	this.instance_6 = new lib.eyes();
	this.instance_6.parent = this;
	this.instance_6.setTransform(453,240.1,1.066,1.066,0,0,0,426.9,240);
	this.instance_6._off = true;

	this.instance_7 = new lib.exitingorphanage4();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},96).to({state:[{t:this.instance_4}]},47).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},41).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},59).to({state:[{t:this.instance_7}]},1).to({state:[]},91).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(96).to({_off:false},0).to({y:231.6},47).to({_off:true},1).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).to({regX:426.8,regY:239.8,scaleX:1.06,scaleY:1.06,y:229.9},41).to({_off:true},1).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(186).to({_off:false},0).to({x:403},59).to({_off:true},1).wait(92));

	// fg
	this.instance_8 = new lib.orphanageoutsidefg_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(8,240,1,1,0,0,0,854,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:0},95).wait(243));

	// bg1
	this.instance_9 = new lib.orphanageoutsidebg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(338));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-419,230.4,1708,489.6);
// library properties:
lib.properties = {
	id: '4152B7DF1D449A45940510BAD34B3D7B',
	width: 854,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/scene17_atlas_.png", id:"scene17_atlas_"},
		{src:"sounds/bgsound.mp3", id:"bgsound"},
		{src:"sounds/doorslam.mp3", id:"doorslam"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/playgroundnoises.mp3", id:"playgroundnoises"},
		{src:"sounds/typewritersound.mp3", id:"typewritersound"}
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
an.compositions['4152B7DF1D449A45940510BAD34B3D7B'] = {
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