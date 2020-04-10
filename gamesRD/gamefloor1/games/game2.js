(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];

    // library properties:
    lib.properties = {
        width: 550,
        height: 400,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: []
    };



    lib.ssMetadata = [];



    lib.updateListCache = function (cacheList) {
        for (var i = 0; i < cacheList.length; i++) {
            if (cacheList[i].cacheCanvas)
                cacheList[i].updateCache();
        }
    };

    lib.addElementsToCache = function (textInst, cacheList) {
        var cur = textInst;
        while (cur != exportRoot) {
            if (cacheList.indexOf(cur) != -1)
                break;
            cur = cur.parent;
        }
        if (cur != exportRoot) { //we have found an element in the list		
            var cur2 = textInst;
            var index = cacheList.indexOf(cur);
            while (cur2 != cur) { //insert all it's children just before it		
                cacheList.splice(index, 0, cur2);
                cur2 = cur2.parent;
                index++;
            }
        } else { //append element and it's parents in the array		
            cur = textInst;
            while (cur != exportRoot) {
                cacheList.push(cur);
                cur = cur.parent;
            }
        }
    };

    lib.gfontAvailable = function (family, totalGoogleCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

        loadedGoogleCount++;
        if (loadedGoogleCount == totalGoogleCount) {
            lib.updateListCache(gFontsUpdateCacheList);
        }
    };

    lib.tfontAvailable = function (family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

        loadedTypekitCount++;
        if (loadedTypekitCount == totalTypekitCount) {
            lib.updateListCache(tFontsUpdateCacheList);
        }
    };
    // symbols:



    (lib.corr_b = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#33FF99").s().p("AovFEYAAAAAGAAAMABYAFAAAHAAAIAAYAEAAAEABAFgBYAEAAAFAAAFAAYAUgCAYAAAagEYAOgCAOgCAPgCYAPgBAOgEAQgDYAQgDAQgEARgEYAQgDARgGARgEYAjgKAjgMAkgOYAkgNAkgQAkgRYAigSAkgTAjgUYAjgUAigWAhgWYAhgXAggYAdgYYAegWAcgaAagYYANgNAMgMAMgNYALgMAMgMAKgMYALgNAKgLAJgMYAJgMAJgLAIgLYAQgUANgVALgRYACgEADgEACgEYADgEACgEACgDYAEgHADgGACgFYAGgKADgFAAAAIAAAAYAAAAgGAAgMgBYgFAAgHAAgIAAYgEAAgEgBgFABYgEAAgFAAgFAAYgUACgYAAgaAEYgOACgOACgPACYgPABgOAEgQADYgQADgQAEgRAEYgQADgRAGgRAEYgjAKgjAMgkAOYgkANgkAQgkARYgiASgkATgjAUYgjAUgiAWghAWYghAXggAYgdAYYgeAWgcAagaAYYgNANgMAMgMANYgLAMgMAMgKAMYgLANgKALgJAMYgJAMgJALgIALYgQAUgNAVgLARYgCAEgDAEgCAEYgDAEgCAEgCADYgEAHgDAGgCAFYgGAKgDAFAAAAIAAAA");
        this.shape.setTransform(-56, -32.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-112, -65.1, 112.1, 65.3);


    (lib.corr_a = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AohizYAAAAAEAEAGAJYADAEAEAFAEAGYACADADADACADYADADADADADAEYAMANAPARARAQYAJAIAJAJAKAKYAKAJALAIALAKYALAJAMAJAMAJYANAIANAIANAJYAaASAdASAeAQYAeARAgAPAgAOYAhAOAiANAiALYAiALAhAKAiAIYAjAJAiAGAiAFYAiAFAhACAgACYARAAAPABAPAAYAQAAAPAAAOgBYAPgBANAAAOgCYANgBANgCAMgCYAYgCAWgFASgDYAEgBAEgBAEgBYAEgBAEgBAEgBYAHgCAGgCAFgCYAKgCAFgCAAAAIAAAAYAAAAgEgEgGgJYgDgEgEgFgEgGYgCgDgDgDgCgDYgDgDgDgDgDgEYgMgNgPgRgRgQYgJgIgJgJgKgKYgKgJgLgIgLgKYgLgJgMgJgMgJYgNgIgNgIgNgJYgagSgdgSgegQYgegRgggPgggOYghgOgigNgigLYgigLghgKgigIYgjgJgigGgigFYgigFghgCgggCYgRAAgPgBgPAAYgQAAgPAAgOABYgPABgNAAgOACYgNABgNACgMACYgYACgWAFgSADYgEABgEABgEABYgEABgEABgEABYgHACgGACgFACYgKACgFACAAAAIAAAA");
        this.shape.setTransform(-54.6, -18);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-109.2, -39.6, 109.3, 43.2);


    (lib.box2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#6699CC").s().p("A3aXcMAAAgu2IACAAMAu0AAAMAAAAu2g");
        this.shape.setTransform(-150, -150);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#6666FF").s().p("AkXUTMAAAgu2IIvGRMAAAAu2g");
        this.shape_1.setTransform(-328, -170);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#6699FF").s().p("AzADIIgCAAIoxmPII0AAMAmDAAAIIwGPg");
        this.shape_2.setTransform(-178, -320);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-356, -340, 356, 340.1);


    (lib.s1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // box2
        this.instance = new lib.box2();
        this.instance.parent = this;
        this.instance.setTransform(-178, -170.1, 1, 1, 0, 0, 0, -178, -170.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-356, -340, 356, 340.1);


    (lib.Tween5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.text = new cjs.Text("B", "96px 'Times'", "#FF9933");
        this.text.textAlign = "center";
        this.text.lineHeight = 98;
        this.text.lineWidth = 100;
        this.text.parent = this;
        this.text.setTransform(10, -41);

        this.instance = new lib.s1();
        this.instance.parent = this;
        this.instance.setTransform(0, 0.1, 0.372, 0.372, 0, 0, 0, -177.9, -169.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }, {
                t: this.text
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-66.1, -63.2, 132.3, 126.4);


    (lib.Tween4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.text = new cjs.Text("A", "96px 'Times'", "#FFFF00");
        this.text.textAlign = "center";
        this.text.lineHeight = 98;
        this.text.lineWidth = 100;
        this.text.parent = this;
        this.text.setTransform(10, -37.5);

        this.instance = new lib.s1();
        this.instance.parent = this;
        this.instance.setTransform(0, 0.1, 0.372, 0.372, 0, 0, 0, -177.9, -169.8);
        this.instance.filters = [new cjs.ColorFilter(0.43, 0.43, 0.43, 1, 58.14, 145.35, 145.35, 0)];
        this.instance.cache(-358, -342, 360, 344);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }, {
                t: this.text
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-66.1, -63.2, 132.3, 126.4);


    (lib.Tween2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.text = new cjs.Text("B", "96px 'Times'", "#33FF99");
        this.text.textAlign = "center";
        this.text.lineHeight = 98;
        this.text.lineWidth = 100;
        this.text.parent = this;
        this.text.setTransform(9.5, -37.5);

        this.instance = new lib.s1();
        this.instance.parent = this;
        this.instance.setTransform(0, 0.1, 0.372, 0.372, 0, 0, 0, -177.9, -169.8);
        this.instance.filters = [new cjs.ColorFilter(0.43, 0.43, 0.43, 1, 87.21, 58.14, 116.28, 0)];
        this.instance.cache(-358, -342, 360, 344);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }, {
                t: this.text
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-66.1, -63.2, 132.3, 126.4);


    (lib.Tween1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.text = new cjs.Text("A", "96px 'Times'", "#FF3399");
        this.text.textAlign = "center";
        this.text.lineHeight = 98;
        this.text.lineWidth = 100;
        this.text.parent = this;
        this.text.setTransform(9.5, -41);

        this.instance = new lib.s1();
        this.instance.parent = this;
        this.instance.setTransform(0, 0.1, 0.372, 0.372, 0, 0, 0, -177.9, -169.8);
        this.instance.filters = [new cjs.ColorFilter(0.43, 0.43, 0.43, 1, 116.28, 145.35, 29.07, 0)];
        this.instance.cache(-358, -342, 360, 344);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }, {
                t: this.text
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-66.1, -63.2, 132.3, 126.4);


    (lib.b2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            /* Stop at This Frame
            The  timeline will stop/pause at the frame where you insert this code.
            Can also be used to stop/pause the timeline of movieclips.
            */

            this.stop();
        }
        this.frame_7 = function () {
            /* Stop at This Frame
            The  timeline will stop/pause at the frame where you insert this code.
            Can also be used to stop/pause the timeline of movieclips.
            */

            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

        // Layer 1
        this.instance = new lib.Tween5("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-66.1, -63.2, 1, 1, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: -0.2,
            scaleX: 1.13,
            scaleY: 1.13,
            x: -65.8,
            y: -62.8
        }, 7).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            x: -66.1,
            y: -63.1
        }, 7).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-132.2, -126.3, 132.3, 126.4);


    (lib.b1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            /* Stop at This Frame
            The  timeline will stop/pause at the frame where you insert this code.
            Can also be used to stop/pause the timeline of movieclips.
            */

            this.stop();
        }
        this.frame_7 = function () {
            /* Stop at This Frame
            The  timeline will stop/pause at the frame where you insert this code.
            Can also be used to stop/pause the timeline of movieclips.
            */

            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

        // Layer 1
        this.instance = new lib.Tween2("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-66.1, -63.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: -0.1,
            regY: -0.1,
            scaleX: 1.13,
            scaleY: 1.13,
            y: -63.2
        }, 7).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            y: -63.1
        }, 7).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-132.2, -126.3, 132.3, 126.4);


    (lib.a2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            /* Stop at This Frame
            The  timeline will stop/pause at the frame where you insert this code.
            Can also be used to stop/pause the timeline of movieclips.
            */

            this.stop();
        }
        this.frame_7 = function () {
            /* Stop at This Frame
            The  timeline will stop/pause at the frame where you insert this code.
            Can also be used to stop/pause the timeline of movieclips.
            */

            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

        // Layer 1
        this.instance = new lib.Tween4("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-66.1, -63.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1.13,
            scaleY: 1.13,
            x: -66
        }, 7).to({
            scaleX: 1,
            scaleY: 1,
            x: -66.1
        }, 7).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-132.2, -126.3, 132.3, 126.4);


    (lib.a1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            /* Stop at This Frame
            The  timeline will stop/pause at the frame where you insert this code.
            Can also be used to stop/pause the timeline of movieclips.
            */

            this.stop();
        }
        this.frame_7 = function () {
            /* Stop at This Frame
            The  timeline will stop/pause at the frame where you insert this code.
            Can also be used to stop/pause the timeline of movieclips.
            */

            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

        // Layer 1
        this.instance = new lib.Tween1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-66.1, -63.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: -0.1,
            regY: -0.1,
            scaleX: 1.13,
            scaleY: 1.13,
            y: -63.2
        }, 7).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            y: -63.1
        }, 7).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-132.2, -126.3, 132.3, 126.4);


    // stage content:



    (lib.test2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            //frame1
            this.me = this;
            console.log("frame init");
            this.mc_a1.addEventListener("click", fl_MouseClickHandler_1);

            function fl_MouseClickHandler_1(event) {
                helper.clickMc(event, "a1", )
            }
            this.mc_a2.addEventListener("click", fl_MouseClickHandler_2);

            function fl_MouseClickHandler_2(event) {
                helper.clickMc(event, "a2")
            }
            this.mc_b1.addEventListener("click", fl_MouseClickHandler_3);

            function fl_MouseClickHandler_3(event) {
                helper.clickMc(event, "b1")
            }
            this.mc_b2.addEventListener("click", fl_MouseClickHandler_4);

            function fl_MouseClickHandler_4(event) {
                helper.clickMc(event, "b2")
            }
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 4
        this.mc_b1 = new lib.b1();
        this.mc_b1.parent = this;
        this.mc_b1.setTransform(164.4, 289.5, 1, 1, 0, 0, 0, -66.2, -63.2);

        this.mc_b2 = new lib.b2();
        this.mc_b2.parent = this;
        this.mc_b2.setTransform(405.9, 127.1, 1, 1, 0, 0, 0, -66.2, -63.2);

        this.mc_a2 = new lib.a2();
        this.mc_a2.parent = this;
        this.mc_a2.setTransform(405.9, 289.5, 1, 1, 0, 0, 0, -66.2, -63.2);

        this.mc_a1 = new lib.a1();
        this.mc_a1.parent = this;
        this.mc_a1.setTransform(164.4, 127.1, 1, 1, 0, 0, 0, -66.2, -63.2);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#6699FF").s().p("AANCtIAAgHQAWgDAGgHQAHgHAAgcIAAhkQAAgXgJgOQgIgPgWAAQgRAAgTAOQgSANAAAEIAAB5QAAAcAGAHQAHAHAVADIAAAHIhtAAIAAgHQAUgCAGgIQAGgHABgcIAAjtQAAgOgEgGQgDgHgPAAIgFABIgGAAIAAgIIAbgIIAXgHIAXgHIABABIAACZQAPgSANgIQATgPAaAAQAoAAAPAiQAIASAAAbIAABlQAAAbAGAIQAHAIASACIAAAHg");
        this.shape.setTransform(340.7, 31.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#6699FF").s().p("AhEBZQgegfAAg0QAAgyAhglQAhglAwAAQAfAAAWAQQAXAQAAATQAAAIgGAHQgGAHgMAAQgIAAgHgGQgHgGgDgLIgDgMQgDgNgIgGQgIgFgNAAQgbAAgTAZQgUAZAAApQAAAkAWAdQAVAeAjAAQAaAAAUgRQALgJAPgVIAHAEQgPAegPARQgeAhgnAAQgmAAgegeg");
        this.shape_1.setTransform(316.5, 37.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#6699FF").s().p("AgfB7QgGgOABgZIAAiVIgcAAIgCgBIgBgCIACgEIAHgHIAZgXIAhguIAEAAIABAEIAAA9IAyAAIAAASIgzAAIAACOQAAASADAKQAGARARAAQAKAAAGgEIAPgNIAGAFIgFAIQgNARgOAHQgPAHgNAAQgbAAgLgag");
        this.shape_2.setTransform(298.7, 34.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#6699FF").s().p("AhWBpQgQgQAAgXQAAgkAlgYQAWgNBDgaIAAgVQAAgZgGgKQgIgRgZAAQgMAAgLAHQgMAGAAAMIABAKIACAJQgBAOgIAGQgGADgHAAQgLAAgHgHQgFgIAAgJQgBgRAWgTQAWgTApAAQAvAAARAfQAJARAAAhIAABiIACAUQADAKAKAAIAKgCIANgJIAAANQgIAKgJAGQgOAKgOAAQgSAAgHgLQgIgLAAgPQgUAQgLAIQgWANgVAAQgWAAgPgOgAgVAAQgkAVAAAcQAAAXAOAKQAKAHAMAAQAQAAANgJQAPgJABgOIAAhNQgbAJgSALg");
        this.shape_3.setTransform(280.9, 37.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#6699FF").s().p("ABKCoIAAgJQAfgDAIgIQAHgJAAggIAAjjIiAEgIgIAAIiAkUIAADJQAAAqAMANQAJAIAbADIAAAJIh4AAIAAgJQAggDAJgLQAJgMAAgoIAAjNQAAgcgJgIQgJgIgfgCIAAgJIBlAAIBzD8IBzj8IBlAAIAAAJQgdACgIAIQgIAJAAAbIAADhQAAAcAIAIQAIAHAdADIAAAJg");
        this.shape_4.setTransform(245.7, 32.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }, {
                t: this.mc_a1
            }, {
                t: this.mc_a2
            }, {
                t: this.mc_b2
            }, {
                t: this.mc_b1
            }]
        }).wait(1));

        // mc_corr_a
        this.mc_corr_a = new lib.corr_a();
        this.mc_corr_a.parent = this;
        this.mc_corr_a.setTransform(285.2, 208.3, 1, 1, 0, 0, 0, -54.6, -18.1);
        this.mc_corr_a.visible = false;

        this.timeline.addTween(cjs.Tween.get(this.mc_corr_a).wait(1));

        // mc_corr_b
        this.mc_corr_b = new lib.corr_b();
        this.mc_corr_b.parent = this;
        this.mc_corr_b.setTransform(283, 207.5, 1, 1, 0, 0, 0, -56, -32.5);
        this.mc_corr_b.visible = false;

        this.timeline.addTween(cjs.Tween.get(this.mc_corr_b).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(373.3, 208.9, 373.8, 343.8);

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;