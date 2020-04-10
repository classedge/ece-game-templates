/* Copyright ABCya.com, LLC 
 Thu, 13 Jul 2017 20:22:18 GMT */
function getUrlParams() {
    var a = {};
    return window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (b, c, d) {
        a[c] = d
    }), a
}

function getRandom(a, b) {
    return Math.floor(Math.random() * (1 + b - a) + a)
}

function numberWithCommas(a) {
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function str_pad_left(a, b, c) {
    return (new Array(c + 1).join(b) + a).slice(-c)
}

function shuffleArray(a) {
    for (var b = a.length - 1; b > 0; b--) {
        var c = Math.floor(Math.random() * (b + 1)),
            d = a[b];
        a[b] = a[c], a[c] = d
    }
    return a
}

function hexToRgb(a) {
    var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    return b ? {
        red: parseInt(b[1], 16),
        green: parseInt(b[2], 16),
        blue: parseInt(b[3], 16)
    } : null
}

function pxValue(a) {
    return a + "px"
}! function (a) {
    function b() {
        game.settings = this.settings = abcya.GameSettings, game.isSuperConnect = !1, game.superCountBy = 1, this.commonAudioPath = abcya.GameConstants.COMMON_AUDIO_ASSETS_PATH, this.commonImagePath = abcya.GameConstants.COMMON_IMAGE_ASSETS_PATH, this.localAudioPath = abcya.GameConstants.AUDIO_ASSETS_PATH, this.localImagePath = abcya.GameConstants.IMAGE_ASSETS_PATH, this.localDataPath = abcya.GameConstants.DATA_ASSETS_PATH, this.preload = new createjs.LoadQueue, this.preload.setMaxConnections(4), this.preload.installPlugin(createjs.Sound), createjs.Sound.alternateExtensions = ["mp3"]
    }
    a.abcya = a.abcya || {}, b.prototype = {}, b.prototype.preload = null, b.prototype.ondownloadcompleted = null, b.prototype.preloadUpdater = null, b.prototype.spritesheet = null, b.prototype.startPreload = function () {
        this.preload.addEventListener("complete", this.handlePreloadComplete.bind(this)), this.preload.addEventListener("progress", this.handlePreloadProgress.bind(this));
        var a = this.commonImagePath,
            b = [{
                id: "preload-assets",
                src: "preload-assets.json"
            }];
        this.preload.loadManifest(b, !1, a), a = abcya.GameConstants.DATA_ASSETS_PATH, b = [{
            id: "gameData",
            src: game.settings.dataFileName + ".json"
        }], this.preload.loadManifest(b, !1, a), this.preload.load()
    }, b.prototype.handlePreloadProgress = function (a) {}, b.prototype.handlePreloadComplete = function (a) {
        this.preload.removeAllEventListeners(), this.ondownloadcompleted()
    }, b.prototype.startDownload = function () {
        this.preload.addEventListener("complete", this.handleDownloadComplete.bind(this)), this.preload.addEventListener("progress", this.handleDownloadProgress.bind(this));
        var a = abcya.GameConstants.IMAGE_ASSETS_PATH;
        game.assets.getGameDataProp("isSuper") === !0 && (game.isSuperConnect = !0), game.assets.getGameDataProp("isAlphabet") === !0 && (game.isAlphabet = !0);
        var b;
        b = game.assets.getGameDataProp("countby") ? parseInt(game.assets.getGameDataProp("countby")) : 1;
        var c = [{
            id: "gameAssetsData",
            src: game.settings.spriteSheetName + ".json"
        }, {
            id: "gameAssetsSheet",
            src: game.settings.spriteSheetName + ".png"
        }];
        abcya.GameSettings.loadFinalSeparate === !0;
        for (var d = abcya.GameSettings.puzzleCount, e = 0; e < d; e++) c.push({
            id: "puzzleFinal" + (e + 1),
            src: "final_images/Puzzle" + (e + 1) + "Final.png"
        });
        this.preload.loadManifest(c, !1, a), a = abcya.GameConstants.COMMON_AUDIO_ASSETS_PATH + "games/connect_the_dots/", c = [{
            id: "pop1Sound",
            src: "pop_01b.ogg",
            data: 4
        }, {
            id: "click",
            src: "click.ogg",
            data: 1
        }, {
            id: "pop2Sound",
            src: "pop_02b.ogg",
            data: 2
        }, {
            id: "pop3Sound",
            src: "pop_06a.ogg",
            data: 2
        }, {
            id: "whistleSound",
            src: "slide_whistle_up_05.ogg",
            data: 1
        }, {
            id: "dialogSound",
            src: "show_dialog_sound.ogg",
            data: 1
        }, {
            id: "incorrectSound",
            src: "incorrect.ogg",
            data: 2
        }, {
            id: "starSound1",
            src: "1_star.ogg",
            data: 1
        }, {
            id: "starSound2",
            src: "2_star.ogg",
            data: 1
        }, {
            id: "starSound3",
            src: "3_star.ogg",
            data: 1
        }, {
            id: "starburst",
            src: "final_burst.ogg",
            data: 1
        }, {
            id: "picIntro1",
            src: "guess_what_the_dots_will_be.ogg",
            data: 1
        }, {
            id: "picIntro2",
            src: "guess_what_the_picture_will_be.ogg",
            data: 1
        }, {
            id: "picIntro3",
            src: "what_do_you_think_its_going_to_be.ogg",
            data: 1
        }, {
            id: "makeAPicture",
            src: "connect_the_dots_to_make_a_picture.ogg",
            data: 1
        }, {
            id: "tooManyMistakes",
            src: "you_made_too_many_mistakes.ogg",
            data: 1
        }], this.preload.loadManifest(c, !1, a), c = [], a = this.commonAudioPath + "numbers/";
        var f = parseInt(game.assets.getGameDataProp("minNum")) - 1,
            g = game.assets.getGameDataProp("maxNum");
        if (game.isSuperConnect && (f = 2, g = 10), game.isAlphabet) {
            var h = "abcdefghijklmnopqrstuvwxyz".split("");
            c = [], a = "";
            for (var e = 0; e < 26; e++) {
                var i = h[e];
                c.push({
                    id: "Sound" + (e + 1),
                    src: this.commonAudioPath + "letters/" + i + "Letter.ogg",
                    data: 1
                })
            }
            this.preload.loadManifest(c, !1, a)
        } else {
            var b = parseInt(game.assets.getGameDataProp("countby"));
            b || (b = 1);
            for (var e = f; e <= g; e++)
                if ((e + 1) % b || 1 === b) {
                    var j = "Sound" + e,
                        k = j + ".ogg";
                    c.push({
                        id: j,
                        src: k,
                        data: 1
                    })
                }
            this.preload.loadManifest(c, !1, a)
        }
        if (c = [], a = abcya.GameConstants.COMMON_AUDIO_ASSETS_PATH + "games/connect_the_dots/titles/", game.isSuperConnect || game.isAlphabet);
        else {
            var l = "";
            l = b > 1 ? "skip_count_" + game.assets.getGameDataProp("countby") : "count_by_ones", c = [{
                id: "titleSound",
                src: l + ".ogg"
            }];
            var m = game.assets.getGameDataProp("maxNum");
            c.push({
                id: "countToSound",
                src: "count_to_" + m + ".ogg"
            })
        }
        if (this.preload.loadManifest(c, !1, a), !game.isAlphabet) {
            c = [], a = abcya.GameConstants.COMMON_AUDIO_ASSETS_PATH + "games/connect_the_dots/picture_names/";
            for (var n = [], o = null, p = game.assets.getGameDataProp("puzzles").length, e = 0; e < p; e++) o = game.assets.getGameDataProp("puzzles")[e].soundFile, n.indexOf(o) < 0 && c.push({
                id: o,
                src: o + ".ogg"
            }), n.push(o);
            this.preload.loadManifest(c, !1, a)
        }
        this.preload.load()
    }, b.prototype.handleDownloadProgress = function (a) {
        this.preloadUpdater && this.preloadUpdater.setProgress(a.progress)
    }, b.prototype.handleDownloadComplete = function (a) {
        this.preload.removeAllEventListeners(), this.spritesheet = new createjs.SpriteSheet(this.getAsset("gameAssetsData")), this.ondownloadcompleted(), this.ondownloadcompleted = null, this.preloadUpdater = null
    }, b.prototype.setDownloadCompleted = function (a) {
        this.ondownloadcompleted = a
    }, b.prototype.setPreloadViewUpdate = function (a) {
        this.preloadUpdater = a
    }, b.prototype.getAsset = function (a) {
        return this.preload.getResult(a)
    }, b.prototype.getGameDataProp = function (a) {
        return this.getAsset("gameData")[a]
    }, b.prototype.makeCenteredSprite = function (a) {
        var b = new createjs.Sprite(game.assets.spritesheet, a);
        return b.regX = b.getBounds().width / 2, b.regY = b.getBounds().height / 2, b
    }, a.abcya.AssetsManager = b
}(window),
function () {
    window.abcya = window.abcya || {};
    var a = {
        RUN_MODE: "Production",
        FPS: 60,
        DO_ORIENTATION_BLOCK: !0,
        EXIT_URL: "../../../",
        FORCE_NORMAL_RATIO: !0,
        GAME_ORIENTATION: "Landscape",
        GAME_FONTS: ["print_boldregular", "vagrounded_btregular"],
        USES_STORAGE: !1,
        STORAGE_PREFIX: "starter_game",
        STORAGE_TYPE: "local"
    };
    window.abcya.GameConfig = a
}(),
function (a) {
    function b() {
        this.platformData = null, this.canvas = null, this.gameWrapper = null, this.stage = null, this.screen_width = null, this.screen_height = null, this.isWidescreen = null, this.hasFocus = !0, this.isMobile = !1, this.deviceType = null, this.tranformTypePrefix = "", this.preloader = null, this.sceneManager = null, this.assets = null, this.orientation = null, this.orientationDimensions = null, this.isMuted = !1, this.isPaused = !1, this.force43 = !1, this.curCSSLeft = null, this.curCSSTop = null, this.curCSSScale = null, this.initialize()
    }
    a.abcya = a.abcya || {};
    var c = b.prototype = {};
    c.initialize = function () {
        this.platformData = abcyaWindow.abcya.platformData, this.orientation = abcya.GameConfig.GAME_ORIENTATION, this.isMobile = this.platformData.isMobile, this.force43 = this.platformData.force43, this.tranformTypePrefix = this.platformData.tranformTypePrefix, this.deviceType = this.platformData.deviceType, this.canvas = document.getElementById("gameCanvas"), this.gameWrapper = document.getElementById("gameWrapper"), this.stage = new createjs.Stage(this.canvas), this.orientation === abcya.GameConstants.PORTRAIT ? this.orientationDimensions = {
            normal: {
                width: abcya.GameConstants.ORIENTATION_DIMS[1],
                height: abcya.GameConstants.ORIENTATION_DIMS[0]
            },
            widescreen: {
                width: abcya.GameConstants.ORIENTATION_DIMS[2],
                height: abcya.GameConstants.ORIENTATION_DIMS[0]
            }
        } : this.orientationDimensions = {
            normal: {
                width: abcya.GameConstants.ORIENTATION_DIMS[0],
                height: abcya.GameConstants.ORIENTATION_DIMS[1]
            },
            widescreen: {
                width: abcya.GameConstants.ORIENTATION_DIMS[0],
                height: abcya.GameConstants.ORIENTATION_DIMS[2]
            }
        }, this.stage.width = this.orientationDimensions.normal.width, this.stage.height = this.orientationDimensions.normal.height, this.platformData.allowsTouch === !0 && createjs.Touch.isSupported() && createjs.Touch.enable(this.stage), this.platformData.allowsMouseover === !0 && this.stage.enableMouseOver(), this.platformData.pauseEvent && a.parent.addEventListener(this.platformData.pauseEvent, this.handleViewFocusEvent.bind(this), !1), createjs.Ticker.timingMode = createjs.Ticker.RAF, createjs.Ticker.maxDelta = 50, createjs.Ticker.setFPS(abcya.GameConfig.FPS)
    }, c.setGameRatio = function () {
        if (this.force43 === !0) return void this.force4x3();
        var b = a.innerWidth,
            c = a.innerHeight,
            d = Math.max(b, c),
            e = Math.min(b, c),
            f = d / e,
            g = this.isWidescreen;
        f < 1.4 ? (this.isWidescreen = !1, this.stage.canvas.width = this.orientationDimensions.normal.width, this.stage.canvas.height = this.orientationDimensions.normal.height) : (this.isWidescreen = !0, this.stage.canvas.width = this.orientationDimensions.widescreen.width, this.stage.canvas.height = this.orientationDimensions.widescreen.height), this.screen_width = this.canvas.width, this.screen_height = this.canvas.height, this.updateBgImage(), game && g != this.isWidescreen && this.layoutScreens()
    }, c.force4x3 = function () {
        var a = this.isWidescreen;
        this.isWidescreen = !1, this.stage.canvas.width = this.orientationDimensions.normal.width, this.stage.canvas.height = this.orientationDimensions.normal.height, this.screen_width = this.canvas.width, this.screen_height = this.canvas.height, this.updateBgImage(), game && a != this.isWidescreen && this.layoutScreens()
    }, c.updateBgImage = function () {
        if (!abcya.GameConfig.HAS_BG_IMG) {
            var a = this.isWidescreen ? "BlankBackground_16x9.png" : "BlankBackground_4x3.png";
            document.getElementById("bg").src = abcya.GameConstants.COMMON_IMAGE_ASSETS_PATH + this.orientation + a
        }
    }, c.resizeGame = function () {
        a.top.scrollTo(0, 0), this.setGameRatio();
        var b, c = a.innerWidth,
            d = a.innerHeight,
            e = this.screen_width / this.screen_height,
            f = a.innerWidth,
            g = a.innerHeight,
            h = f / g,
            i = 0,
            j = 0;
        h > e ? (f = g * e, b = f / this.screen_width) : (g = f / e, b = g / this.screen_height), this.platformData.maxViewScale > 0 && b > this.platformData.maxViewScale ? (b = 1, j = (d - game.screen_height) / 2, i = (c - game.screen_width) / 2) : (j = (d - g) / 2, i = (c - f) / 2), this.curCSSLeft = i, this.curCSSTop = j, this.curCSSScale = b, this.gameWrapper.style.left = pxValue(i), this.gameWrapper.style.top = pxValue(j), this.canvas.style.left = pxValue(i), this.canvas.style.top = pxValue(j);
        var k = document.getElementById("bg");
        k.setAttribute("style", this.tranformTypePrefix + "transform:scale(" + b + ")"), this.canvas.setAttribute("style", this.tranformTypePrefix + "transform:scale(" + b + ")"), this.sceneManager && this.sceneManager.gameResized && this.sceneManager.gameResized()
    }, c.focusCheck = function (a) {
        "pagehide" == a.type || "blur" == a.type || 1 == document.hidden || 1 == document.webkitHidden ? game.hasFocus = !1 : game.hasFocus = !0, game.isPaused || game.sceneManager && game.sceneManager.forcePauseState && game.sceneManager.forcePauseState(!game.hasFocus)
    }, c.handleViewFocusEvent = function (a) {
        this.setPaused(a.detail.paused)
    }, c.setPaused = function (a) {
        this.isPaused = a, game.sceneManager && game.sceneManager.forcePauseState && game.sceneManager.forcePauseState(this.isPaused)
    }, c.initGame = function () {
        a.onresize = this.resizeGame.bind(this), this.resizeGame(), document.addEventListener("visibilitychange", this.focusCheck, !1), document.addEventListener("webkitvisibilitychange", this.focusCheck, !1), document.addEventListener("pagehide", this.focusCheck, !1), document.addEventListener("pageshow", this.focusCheck, !1), this.assets = new abcya.AssetsManager, game.assets = this.assets, this.assets.setDownloadCompleted(this.handlePreloadComplete.bind(this)), this.assets.startPreload()
    }, c.handlePreloadComplete = function () {
        this.preloader = new abcya.PreloadScreen, this.preloader.on("PRELOAD_CLICK", this.startGame, this), this.stage.addChild(this.preloader), this.stage.update(), this.assets.setDownloadCompleted(this.gameAssetsReady.bind(this)), this.assets.setPreloadViewUpdate(this.preloader), this.assets.startDownload(), this.gameWrapper.style.visibility = "visible"
    }, c.gameAssetsReady = function () {
        this.preloader.addClick(), abcya.GameConfig.DELAYED_SOUND_QUEUE && abcya.GameConfig.DELAYED_SOUND_QUEUE.length > 0 && this.assets.startDelayedDownload()
    }, c.startGame = function (a) {
        this.stage.removeChild(this.preloader), this.preloader = null, this.sceneManager = new abcya.SceneManager
    }, c.playSound = function (a, b, c) {
        var d = null;
        if (b || (b = 0), b === !0 && (b = -1), c || (c = 0), !game.isMuted) {
            var e = (new createjs.PlayPropsConfig).set({
                interrupt: createjs.Sound.INTERRUPT_ANY,
                loop: b,
                delay: c
            });
            d = createjs.Sound.play(a, e)
        }
        return d
    }, c.layoutScreens = function () {
        this.preloader ? this.preloader.layoutRatio() : this.sceneManager && this.sceneManager.layoutScreens()
    }, a.abcya.GameMain = b
}(window),
function () {
    window.abcya = window.abcya || {};
    var a = {
        dataFileName: "dot-data",
        spriteSheetName: "game-assets",
        puzzleID: "-level116",
        puzzleCount: 2,
        loadFinalSeparate: !0
    };
    window.abcya.GameSettings = a
}(),
function () {
    window.abcya = window.abcya || {};
    var a = {
            GS_PRELOAD: 0,
            GS_RUNSCENE: 1,
            GS_INTRO: 3,
            GS_GAME: 10
        },
        b = {
            GE_SHOW_INTRO: "show_intro",
            GE_SHOW_GAME: "show_game"
        };
    window.abcya.GameStates = a, window.abcya.GameStateEvents = b
}(),
function (a) {
    function b() {
        this.initialize()
    }
    a.abcya = a.abcya || {}, b.prototype = {}, b.prototype.currentScene = null, b.prototype.currentStateFunction = null, b.prototype.gameBg = null, b.prototype.buttonBar = null, b.prototype.initialize = function () {
        game.puzzleAttempts = [], game.isUpperCase = !0;
        game.isWidescreen ? "mainBgWide" : "mainBg";
        this.gameBg = new abcya.ShapeBackground(game.screen_width, game.screen_height, game.assets.getGameDataProp("introBgColor")), game.stage.addChild(this.gameBg), createjs.Ticker.on("tick", this.gameLoop, this), this.changeState(abcya.GameStates.GS_INTRO)
    }, b.prototype.changeState = function (a) {
        switch (a) {
            case abcya.GameStates.GS_RUNSCENE:
                this.currentStateFunction = this.gameStateRunScene;
                break;
            case abcya.GameStates.GS_INTRO:
                this.currentStateFunction = this.gameStateShowIntro;
                break;
            case abcya.GameStates.GS_GAME:
                this.currentStateFunction = this.gameStateShowGame
        }
    }, b.prototype.gameStateRunScene = function (a) {
        this.currentScene.tick && game.hasFocus && this.currentScene.tick(a)
    }, b.prototype.gameStateShowIntro = function (a) {
        var b = new abcya.IntroScreen;
        b.on(abcya.GameStateEvents.GE_SHOW_GAME, this.onStateEvent, this, !1, {
            state: abcya.GameStates.GS_GAME
        }), game.stage.addChild(b), this.currentScene && game.stage.removeChild(this.currentScene), this.currentScene = b, this.changeState(abcya.GameStates.GS_RUNSCENE)
    }, b.prototype.gameStateShowGame = function (a) {
        var b = new abcya.ConnectScreen;
        b.on(abcya.GameStateEvents.GE_SHOW_INTRO, this.onStateEvent, this, !1, {
            state: abcya.GameStates.GS_INTRO
        }), game.stage.addChild(b), this.currentScene && game.stage.removeChild(this.currentScene), this.currentScene = b, this.changeState(abcya.GameStates.GS_RUNSCENE)
    }, b.prototype.onStateEvent = function (a, b) {
        this.changeState(b.state)
    }, b.prototype.gameLoop = function (a) {
        null != this.currentStateFunction && this.currentStateFunction(a), game.stage.update()
    }, b.prototype.layoutScreens = function () {
        if (this.currentScene && this.currentScene) {
            if (this.gameBg instanceof abcya.ShapeBackground) {
                var a = game.isWidescreen ? game.orientationDimensions.widescreen.height : game.orientationDimensions.normal.height;
                this.gameBg.updateSize(game.orientationDimensions.normal.width, a)
            } else if (this.gameBg instanceof createjs.Bitmap) {
                var b = game.isWidescreen ? "mainBgWide" : "mainBg";
                this.gameBg.image = game.assets.getAsset(b)
            }
            this.currentScene.layoutRatio && this.currentScene.layoutRatio()
        }
    }, a.abcya.SceneManager = b
}(window);
var resizeDimensions = function (a, b, c, d) {
    var e = 1;
    return (a > c || b > d) && (e = Math.min(c / a, d / b)), {
        width: a * e,
        height: b * e,
        scale: e
    }
};
! function (a) {
    function b(a, b, c) {
        this.curColor = c, this.curWidth = a, this.curHeight = b, this.Shape_constructor(), this.setup()
    }
    a.abcya = a.abcya || {};
    var c = b.prototype = createjs.extend(b, createjs.Shape);
    c.curColor = null, c.curWidth = null, c.curHeight = null, c.fillCommand = null, c.sizeCommand = null, c.setup = function () {
        this.fillCommand = this.graphics.beginFill(this.curColor).command, this.sizeCommand = this.graphics.drawRect(0, 0, this.curWidth, this.curHeight), this.cache(0, 0, this.curWidth, this.curHeight)
    }, c.updateSize = function (a, b) {
        this.curWidth = a, this.curHeight = b, this.graphics.clear(), this.graphics.beginFill(this.curColor).drawRect(0, 0, a, b), this.cache(0, 0, a, b)
    }, c.resizeShape = function (a, b) {
        this.curWidth = a, this.curHeight = b, this.graphics.clear(), this.fillCommand = this.graphics.beginFill(this.curColor).command, this.sizeCommand = this.graphics.drawRect(0, 0, this.curWidth, this.curHeight), this.cache(0, 0, this.curWidth, this.curHeight)
    }, c.changeColor = function (a) {
        this.curColor = a, this.graphics.clear(), this.graphics.beginFill(this.curColor).drawRect(0, 0, this.curWidth, this.curHeight), this.cache(0, 0, this.curWidth, this.curHeight)
    }, a.abcya.ShapeBackground = createjs.promote(b, "Shape")
}(window),
function (a) {
    function b() {
        this.initialize()
    }
    a.abcya = a.abcya || {}, b.prototype = new createjs.Sprite, b.prototype.Sprite_initialize = b.prototype.initialize, b.prototype.vX = null, b.prototype.vY = null, b.prototype.vS = null, b.prototype.vA = null, b.prototype.initialize = function () {
        this.Sprite_initialize(game.assets.spritesheet, "star_on")
    }, b.prototype.reset = function (a, b, c) {
        this.x = a, this.y = b, this.alpha = 1, this.scaleX = this.scaleY = getRandom(4, 10) / 10;
        var d = 1,
            e = 2 * Math.PI * Math.random(),
            f = 30 * (Math.random() - .5) * d;
        this.vX = Math.cos(e) * f, this.vY = Math.sin(e) * f, this.vS = .2 * (Math.random() - .5), this.scaleX = this.scaleY = getRandom(4, 10) / 10, this.gotoAndPlay(c)
    }, b.prototype.tick = function (a) {
        this.vY += .5, this.vX *= .98, this.x += this.vX, this.y += this.vY
    }, a.abcya.SomeParticle = b
}(window),
function (a) {
    function b() {
        this.initialize()
    }
    a.abcya = a.abcya || {}, b.prototype = {}, b.prototype.soundQueue = null, b.prototype.currentSound = null, b.prototype.completeListener = null, b.prototype.initialize = function () {
        this.soundQueue = [], this.currentSound = null
    }, b.prototype.playNumberAudio = function (a) {
        a <= 100 && (this.soundQueue.push("Sound" + a), this.playPart())
    }, b.prototype.playPart = function () {
        if (this.soundQueue.length > 0) {
            var a = this.soundQueue.shift();
            this.currentSound = createjs.Sound.play(a), this.completeListener = this.currentSound.on("complete", this.playPart, this)
        } else this.currentSound = null
    }, a.abcya.SoundStringPlayer = b
}(window),
function () {
    window.abcya = window.abcya || {};
    var a = function (a, b, c) {
        this.pool = [];
        for (var d = b; --d > -1;) this.pool[d] = new a(c)
    };
    a.prototype.getSprite = function () {
        if (this.pool.length > 0) return this.pool.pop();
        throw new Error("You ran out of sprites!")
    }, a.prototype.returnSprite = function (a) {
        this.pool.push(a)
    }, window.abcya.SpritePool = a
}(),
function (a) {
    function b(a, b, c, d, e, f, g) {
        this.initialize(a, b, c, d, e, f, g)
    }
    a.abcya = a.abcya || {}, b.prototype = new createjs.Container, b.prototype.Container_initialize = b.prototype.initialize, b.prototype.parentRef = null, b.prototype.bg = null, b.prototype.lblNum = null, b.prototype.displayNum = null, b.prototype.thej = null, b.prototype.initialize = function (a, b, c, d, e, f, g) {
        if (this.Container_initialize(), this.parentRef = a, d || (d = "Dot"), this.bg = new createjs.Sprite(game.assets.spritesheet, d), c) {
            var h = new createjs.ColorFilter(0, 0, 0, 1, c.red, c.green, c.blue, 0);
            this.bg.filters = [h], this.bg.cache(0, 0, this.bg.getBounds().width, this.bg.getBounds().height)
        }
        this.addChild(this.bg), e || (e = 18), f || (f = "#727272"), g || (g = 1);
        var i = b * g;
        if (this.displayNum = i, i > 99 && (e -= 6), i = i < 0 ? " " : i.toString(), this.lbl = new createjs.Container, game.isAlphabet) {
            var j = "abcdefghijklmnopqrstuvwxyz";
            i = game.isUpperCase ? j.charAt(b - 1).toUpperCase() : j.charAt(b - 1).toLowerCase(), "j" === i && (this.thej = new createjs.Sprite(game.assets.spritesheet, "thej"), i = " ", this.thej.x = 11, this.thej.y = 6, this.addChild(this.thej))
        }
        this.lblNum = new createjs.Text(i, e + "pt vagrounded_btregular", f), this.lblNum.textAlign = "center", this.lblNum.textBaseline = "center", this.lblNum.x = 0, this.lblNum.y = 3, this.lbl.addChild(this.lblNum), this.addChild(this.lbl), this.lbl.x = this.bg.getBounds().width / 2, this.lbl.y = this.bg.getBounds().height / 2 + this.lbl.getBounds().height / 4;
        var k = new createjs.Shape,
            l = k.graphics;
        l.beginFill("#cccccc"), l.drawRect(-15, -15, this.getBounds().width + 30, this.getBounds().height + 30), this.hitArea = k, this.regX = this.getBounds().width / 2, this.regY = this.getBounds().height / 2
    }, b.prototype.pulse = function () {
        createjs.Tween.get(this, {
            override: !0
        }).to({
            scaleX: 1.4,
            scaleY: 1.4
        }, 120, createjs.Ease.quadIn).call(this.unpulse, null, this)
    }, b.prototype.pulseIn = function (a) {
        this.alpha = 0, this.scaleX = this.scaleY = 1.4, createjs.Tween.get(this, {
            override: !0
        }).wait(a).call(this.popIn, null, this)
    }, b.prototype.popIn = function (a) {
        createjs.Sound.play("pop1Sound"), createjs.Tween.get(this, {
            override: !0
        }).to({
            alpha: 1,
            scaleX: 1.6,
            scaleY: 1.6
        }, 240, createjs.Ease.quadIn).call(this.unpulse, null, this)
    }, b.prototype.unpulse = function () {
        createjs.Tween.get(this, {
            override: !0
        }).to({
            scaleX: 1,
            scaleY: 1
        }, 120, createjs.Ease.quadOut)
    }, b.prototype.fadeAway = function () {
        createjs.Tween.get(this, {
            override: !0
        }).to({
            alpha: 0
        }, 220, createjs.Ease.quadOut).call(this.destroy, null, this)
    }, b.prototype.destroy = function () {
        this.parentRef.killDot(this)
    }, a.abcya.Dot = b
}(window),
function (a) {
    function b() {
        this.initialize()
    }
    a.abcya = a.abcya || {}, b.prototype = new createjs.Container, b.prototype.Container_initialize = b.prototype.initialize, b.prototype.bg = null, b.prototype.stars = null, b.prototype.lblScore = null, b.prototype.currentScore = null, b.prototype.currentDisplayStar = null, b.prototype.maxDisplayStar = null, b.prototype.starPool = null, b.prototype.starParticles = null, b.prototype.initialize = function () {
        this.Container_initialize(), this.bg = new createjs.Sprite(game.assets.spritesheet, "results_bg"), this.addChild(this.bg), this.starPool = new abcya.SpritePool(abcya.SomeParticle, 50, this), this.starParticles = [];
        var a = [{
            x: 30,
            y: 40
        }, {
            x: 80,
            y: 20
        }, {
            x: 130,
            y: 40
        }];
        this.stars = [];
        for (var b, c = 0; c < 3; c++) b = new createjs.Sprite(game.assets.spritesheet, "star_off"), this.stars.push(b), this.addChild(b), b.x = a[c].x, b.y = a[c].y;
        this.lblScore = new createjs.Text("95%", "48pt vagrounded_btregular", "#727272"), this.lblScore.textAlign = "center", this.lblScore.verticalAlign = "center", this.lblScore.x = this.bg.getBounds().width / 2, this.lblScore.y = this.bg.getBounds().height / 2 - this.lblScore.getMeasuredHeight() / 2 + 10, this.addChild(this.lblScore), this.regX = this.getBounds().width / 2, this.regY = this.getBounds().height / 2
    }, b.prototype.createStarParticles = function (a, b) {
        for (var c = 50, d = null, e = 0; e < c; e++) d = this.starPool.getSprite(), d.reset(a, b, getRandom(1, "star_on")), this.addChild(d), this.starParticles.push(d)
    }, b.prototype.resetStarParticle = function (a) {
        this.removeChild(this.starParticles[a]), this.starPool.returnSprite(this.starParticles[a]), this.starParticles.splice(a, 1)
    }, b.prototype.destroyAllStars = function () {
        for (var a = this.starParticles.length - 1, b = null, c = a; c >= 0; c--) b = this.starParticles[c], this.resetStarParticle(c)
    }, b.prototype.showResults = function (a) {
        this.resetStars(), this.scaleX = this.scaleY = 0, this.lblScore.text = a + "%", this.currentScore = a, a >= 100 ? this.maxDisplayStar = 3 : a >= 90 ? this.maxDisplayStar = 2 : a >= 80 ? this.maxDisplayStar = 1 : this.maxDisplayStar = 0, this.currentDisplayStar = 0, this.lblScore.scaleX = this.lblScore.scaleY = 0, this.alpha = 0, createjs.Sound.play("pop3Sound"), createjs.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 1400, createjs.Ease.elasticOut).call(this.startStarShow, null, this), createjs.Tween.get(this).to({
            alpha: 1
        }, 120), createjs.Tween.get(this).wait(400).call(this.showScoreLabel, null, this)
    }, b.prototype.showScoreLabel = function (a) {
        createjs.Sound.play("pop3Sound"), createjs.Tween.get(this.lblScore).to({
            scaleX: 1,
            scaleY: 1
        }, 400, createjs.Ease.elasticOut)
    }, b.prototype.startStarShow = function (a) {
        this.maxDisplayStar > 0 ? this.showCurrentStar(null) : (createjs.Sound.play("tooManyMistakes"), this.finishedDisplay())
    }, b.prototype.showCurrentStar = function (a) {
        this.stars[this.currentDisplayStar].gotoAndPlay("star_on"), createjs.Sound.play("starSound" + (this.currentDisplayStar + 1)), this.currentDisplayStar++, this.currentDisplayStar < this.maxDisplayStar ? createjs.Tween.get(this).wait(300).call(this.showCurrentStar, null, this) : this.finishedDisplay()
    }, b.prototype.finishedDisplay = function () {
        3 === this.maxDisplayStar ? createjs.Tween.get(this).wait(450).call(this.showStarBurst, null, this) : this.dispatchEvent(new createjs.Event("RESULTS_DISPLAYED"))
    }, b.prototype.showStarBurst = function (a) {
        createjs.Sound.play("starburst"), this.createStarParticles(this.lblScore.x, this.lblScore.y), this.dispatchEvent(new createjs.Event("RESULTS_DISPLAYED"))
    }, b.prototype.resetStars = function () {
        for (var a = this.stars.length, b = 0; b < a; b++) this.stars[b].gotoAndPlay("star_off")
    }, b.prototype.hide = function () {
        createjs.Tween.get(this).to({
            scaleX: 0,
            scaleY: 0
        }, 400, createjs.Ease.elasticOut), createjs.Tween.get(this).to({
            alpha: 0
        }, 200), this.destroyAllStars()
    }, b.prototype.tick = function (a) {
        for (var b = this.starParticles.length - 1, c = null, d = b; d >= 0; d--) c = this.starParticles[d], c.y > game.screen_height + 100 ? this.resetStarParticle(d) : c.tick(a)
    }, a.abcya.ResultsDisplay = b
}(window),
function (a) {
    function b() {
        this.initialize()
    }
    a.abcya = a.abcya || {}, b.prototype = new createjs.Container, b.prototype.Container_initialize = b.prototype.initialize, b.prototype.selectionButtons = null, b.prototype.selectionDisplay = null, b.prototype.currentSelection = null, b.prototype.initialize = function () {
        this.Container_initialize(), b.prototype.selectionButtons = [], this.selectionDisplay = new createjs.Shape, this.selectionDisplay.graphics.beginFill("white").drawCircle(0, 0, 34), this.selectionDisplay.alpha = 0, this.addChild(this.selectionDisplay);
        for (var a, c = 2, d = 9, e = 0, f = "#ff0000", g = 0; g < d; g++) e = g + c, a = new abcya.Dot(this, e, hexToRgb(f), "IntroDot", 28, "#ffffff"), this.addChild(a), a.x = 75 * g, a.y = 3, a.on("mousedown", this.clickDot, this), this.selectionButtons.push(a)
    }, b.prototype.clickDot = function (a) {
        this.selectionDisplay.x = a.target.x, this.selectionDisplay.y = a.target.y - 12, this.selectionDisplay.alpha = 0, createjs.Tween.get(this.selectionDisplay, {
            override: !0
        }).to({
            alpha: 1
        }, 200);
        var b = new createjs.Event("SET_SKIP_BY");
        b.skipnum = a.target.displayNum, this.dispatchEvent(b)
    }, a.abcya.SkipBySelector = b
}(window),
function (a) {
    function b() {
        this.initialize()
    }
    a.abcya = a.abcya || {}, b.prototype = new createjs.Container, b.prototype.Container_initialize = b.prototype.initialize, b.prototype.bg = null, b.prototype.typeLabel = null, b.prototype.lbl = null, b.prototype.isUpper = !0, b.prototype.initialize = function () {
        this.Container_initialize(), this.bg = new createjs.Sprite(game.assets.spritesheet, "CaseButton"), this.typeLabel = new createjs.Sprite(game.assets.spritesheet, "lblUC"), this.typeLabel.x = this.bg.getBounds().width / 2 - this.typeLabel.getBounds().width / 2, this.typeLabel.y = this.bg.getBounds().height / 2 - this.typeLabel.getBounds().height / 2, this.lbl = new createjs.Sprite(game.assets.spritesheet, "CaseLabel"), this.lbl.x = this.bg.getBounds().width / 2 - this.lbl.getBounds().width / 2, this.lbl.y = this.bg.getBounds().height + 10, this.addChild(this.bg, this.typeLabel, this.lbl), this.on("mousedown", this.handleClick, this)
    }, b.prototype.handleClick = function (a) {
        game.isUpperCase = !game.isUpperCase, game.isUpperCase ? this.typeLabel.gotoAndPlay("lblUC") : this.typeLabel.gotoAndPlay("lblLC"), this.typeLabel.x = this.bg.getBounds().width / 2 - this.typeLabel.getBounds().width / 2
    }, a.abcya.ToggleCaseButton = b
}(window),
function (a) {
    function b() {
        this.initialize()
    }
    a.abcya = a.abcya || {}, b.prototype = new createjs.Container, b.prototype.Container_initialize = b.prototype.initialize, b.prototype.puzzleCount = null, b.prototype.paths = null, b.prototype.drawContainer = null, b.prototype.drawingShape = null, b.prototype.dots = null, b.prototype.finalPicture = null, b.prototype.finalPicIsSprite = !0, b.prototype.tmpSizerImage = null, b.prototype.dotSizePadding = 20, b.prototype.currentPuzzle = null, b.prototype.nextDotIndex = null, b.prototype.hintWrongCount = 0, b.prototype.puzzleWrongCount = 0, b.prototype.correctStreakCount = 0, b.prototype.correctCount = 0, b.prototype.btnNextPuzzle = null, b.prototype.drawSpaceWidth = null, b.prototype.drawSpaceHeight = null, b.prototype.curPicWidth = null, b.prototype.curPicHeight = null, b.prototype.isNextPuzzle = !1, b.prototype.missArea = null, b.prototype.hintHand = null, b.prototype.resultsDisplay = null, b.prototype.showingResults = !1, b.prototype.currentScore = null, b.prototype.soundStringPlayer = null, b.prototype.initialize = function () {
        this.Container_initialize(), this.currentPuzzle = 0, game.isAlphabet && (getRandom(1, 100) > 50 ? this.currentPuzzle = 0 : this.currentPuzzle = 1), this.missArea = new createjs.Container;
        var a = new createjs.Shape,
            b = a.graphics;
        b.beginFill("#cccccc"), b.drawRect(0, 0, game.screen_width, game.screen_height), this.missArea.hitArea = a, this.missArea.on("mousedown", this.clickMiss, this), this.addChild(this.missArea), this.puzzleCount = game.assets.getGameDataProp("puzzles").length, game.isAlphabet && (this.puzzleCount = 1), this.drawContainer = new createjs.Container, this.drawContainer.x = 0, this.drawContainer.y = 0, this.drawingShape = new createjs.Shape, this.drawingShape.cache(0, 0, game.screen_width, abcya.GameConstants.ORIENTATION_DIMS[1]), this.drawContainer.addChild(this.drawingShape), abcya.GameSettings.loadFinalSeparate === !0 ? (this.finalPicIsSprite = !1, this.finalPicture = new createjs.Bitmap(game.assets.getAsset("puzzleFinal" + (this.currentPuzzle + 1)))) : (this.finalPicIsSprite = !0, this.finalPicture = new createjs.Sprite(game.assets.spritesheet, "BtnNextPuzzle")), this.addChild(this.drawContainer), this.btnNextPuzzle = new createjs.Sprite(game.assets.spritesheet, "BtnNextPuzzle"), this.btnNextPuzzle.x = game.screen_width - this.btnNextPuzzle.getBounds().width, this.btnNextPuzzle.on("mousedown", this.onNextPuzzleClick, this), this.btnNextPuzzle.alpha = 0, this.addChild(this.btnNextPuzzle), this.isNextPuzzle = game.assets.getGameDataProp("shownext") !== !1, "" === game.assets.getGameDataProp("nextPuzzle") && (this.isNextPuzzle = !1), this.tmpSizerImage = new createjs.Bitmap(game.assets.getAsset("puzzleFinal" + (this.currentPuzzle + 1))), this.resultsDisplay = new abcya.ResultsDisplay, this.resultsDisplay.on("RESULTS_DISPLAYED", this.resultsFinished, this), this.resultsDisplay.alpha = 0, this.resultsDisplay.x = 860, game.isAlphabet && !game.isWidescreen && (this.resultsDisplay.x = 900), this.resultsDisplay.y = 110, this.addChild(this.resultsDisplay), this.hintHand = new createjs.Sprite(game.assets.spritesheet, "Hand_Pointer"), this.hintHand.alpha = 0, this.drawContainer.addChild(this.hintHand), this.layoutRatio(), this.loadPuzzle()
    }, b.prototype.loadPuzzle = function () {
        this.paths = game.assets.getGameDataProp("puzzles")[this.currentPuzzle].linepaths;
        var a = game.assets.getGameDataProp("puzzles")[this.currentPuzzle].minNum;
        a || (a = game.assets.getGameDataProp("minNum"));
        var b = game.assets.getGameDataProp("puzzles")[this.currentPuzzle].countby;
        b || (b = game.assets.getGameDataProp("countby"), b || (b = game.superCountBy)), game.isSuperConnect && (a = 20 * this.currentPuzzle + 1), this.dots = [];
        for (var c, d = this.paths.length, e = 0, f = 1500 / d, g = 0; g < d; g++) {
            c = new abcya.Dot(this, a + g, null, null, null, null, b);
            var h = this.getPathPoints(this.paths[g]),
                i = h.length;
            c.x = h[i - 2], c.y = h[i - 1], c.on("mousedown", this.dotClick, this), this.dots.push(c), c.pulseIn(e), e += f
        }
        game.isSuperConnect || createjs.Tween.get(this).wait(1500).call(this.playBeginSound, null, this);
        for (var j = this.dots.length - 1; j >= 0; j--) this.drawContainer.addChild(this.dots[j]);
        this.sizeAndPosition(), this.nextDotIndex = 1;
        var k = game.assets.getGameDataProp("puzzles")[this.currentPuzzle].bgColor;
        game.sceneManager.gameBg.changeColor(k), this.hintWrongCount = 0, this.puzzleWrongCount = 0, this.correctCount = 0, this.correctStreakCount = 0, createjs.Tween.get(this).wait(e + 300).call(this.showNextDotHint, null, this)
    }, b.prototype.playBeginSound = function (a) {
        createjs.Sound.play("countToSound")
    }, b.prototype.sizeAndPosition = function () {
        this.tmpSizerImage.image = game.assets.getAsset("puzzleFinal" + (this.currentPuzzle + 1));
        var a = game.deviceType === abcya.GameConstants.IPHONE ? 2 * this.dotSizePadding : this.dotSizePadding,
            b = resizeDimensions(this.tmpSizerImage.image.width, this.tmpSizerImage.image.height, this.drawSpaceWidth - 50, this.drawSpaceHeight - a);
        this.drawContainer.x = this.drawSpaceWidth / 2 * b.scale - b.width / 2 * b.scale, this.drawContainer.y = this.drawSpaceHeight / 2 * b.scale - b.height / 2 * b.scale + this.dotSizePadding / 2, this.drawContainer.scaleX = this.drawContainer.scaleY = b.scale
    }, b.prototype.dotClick = function (a) {
        var b = this.dots.indexOf(a.currentTarget);
        if (b == this.nextDotIndex) {
            if (this.dots[this.nextDotIndex].pulse(), game.isSuperConnect ? createjs.Sound.play("pop2Sound") : createjs.Sound.play("Sound" + a.currentTarget.displayNum), this.drawLine(this.paths[this.nextDotIndex - 1]), this.nextDotIndex++, this.hintWrongCount = 0, this.correctCount++, this.correctStreakCount++, this.nextDotIndex >= this.paths.length ? (this.drawStarterLine(), createjs.Tween.get(this).wait(330).call(this.finishedPuzzle, null, this)) : this.nextDotIndex < this.paths.length - 1 && this.drawContainer.addChild(this.dots[this.nextDotIndex]),
                this.hideDotHint(), Math.floor(this.dots.length / 2) === this.nextDotIndex) {
                var c = getRandom(1, 3);
                createjs.Sound.play("picIntro" + c)
            }
        } else createjs.Sound.play("incorrectSound"), this.hintWrongCount++, this.puzzleWrongCount++, this.correctStreakCount = 0, this.hintWrongCount > 2 && this.showNextDotHint()
    }, b.prototype.clickMiss = function (a) {
        this.hintWrongCount++, this.correctStreakCount = 0, this.hintWrongCount > 2 && this.showNextDotHint()
    }, b.prototype.onNextPuzzleClick = function (a) {
        if (this.showingResults) {
            return a.remove(), this.resultsDisplay.hide(), createjs.Tween.get(this.finalPicture).to({
                alpha: 0
            }, 480, createjs.Ease.quadOut).call(this.nextScene, null, this, !0), void createjs.Tween.get(this.btnNextPuzzle).to({
                alpha: 0
            }, 280, createjs.Ease.quadOut).call(this.nextScene, null, this, !0)
        }
    }, b.prototype.nextScene = function () {
        var a = new createjs.Event(abcya.GameStateEvents.GE_SHOW_INTRO);
        this.dispatchEvent(a)
    }, b.prototype.showNextDotHint = function () {
        this.dots[this.nextDotIndex].pulse();
        var a = this.dots[this.nextDotIndex];
        this.hintHand.x = a.x - 12, this.hintHand.y = a.y - 12, this.hintHand.scaleX = this.hintHand.scaleY = .8, this.hintHand.alpha = 1, this.drawContainer.addChild(this.hintHand), createjs.Tween.get(this.hintHand, {
            loop: !0
        }).to({
            scaleX: .4,
            scaleY: .4
        }, 800, createjs.Ease.quadOut).wait(800).to({
            scaleX: .8,
            scaleY: .8
        }, 800, createjs.Ease.quadIn).wait(120), createjs.Sound.play("pop1Sound")
    }, b.prototype.hideDotHint = function () {
        createjs.Tween.get(this.hintHand, {
            override: !0
        }).to({
            alpha: 0
        }, 300, createjs.Ease.quadOut)
    }, b.prototype.finishedPuzzle = function () {
        createjs.Sound.play("whistleSound"), this.finalPicture.scaleX = this.finalPicture.scaleY = 1, this.finalPicture.x = this.finalPicture.y = 0, this.drawContainer.addChild(this.finalPicture), this.finalPicIsSprite ? this.finalPicture.gotoAndPlay("Puzzle" + (this.currentPuzzle + 1) + "Final") : this.finalPicture.image = game.assets.getAsset("puzzleFinal" + (this.currentPuzzle + 1)), this.finalPicture.alpha = 0, createjs.Tween.get(this.finalPicture).to({
            alpha: 1
        }, 180, createjs.Ease.quadOut).call(this.playFinalImageSound, null, this), this.drawContainer.addChild(this.finalPicture), this.drawingShape.graphics.clear(), this.drawingShape.cache(0, 0, game.screen_width, abcya.GameConstants.ORIENTATION_DIMS[1]);
        var a = this.dots.length,
            b = this.puzzleWrongCount,
            c = a - b;
        c = c <= 0 ? 0 : Math.round(c / a * 100), this.currentScore = c;
        for (var d = 0; d < this.dots.length; d++) this.dots[d].fadeAway()
    }, b.prototype.playFinalImageSound = function (a) {
        var b = game.assets.getGameDataProp("puzzles")[this.currentPuzzle].soundFile;
        createjs.Sound.play(b), createjs.Tween.get(this).wait(1e3).call(this.displayResult, null, this)
    }, b.prototype.displayResult = function (a) {
        this.resultsDisplay.showResults(this.currentScore), this.showingResults = !0
    }, b.prototype.resultsFinished = function (a) {
        this.btnNextPuzzle.alpha = 0, createjs.Tween.get(this.btnNextPuzzle).to({
            alpha: 1
        }, 180, createjs.Ease.quadOut)
    }, b.prototype.drawStarterLine = function (a) {
        this.drawLine(this.paths[this.paths.length - 1])
    }, b.prototype.drawLine = function (a) {
        this.drawingShape.graphics.ss(2).s("rgba(255,255,255,254)").p(a).es(), this.drawingShape.updateCache("source-overlay")
    }, b.prototype.getPathPoints = function (a) {
        for (var b = [1, 2, 3, 4, 5], c = [2, 2, 4, 6, 0], d = 0, e = a.length, f = [], g = 0, h = 0, i = createjs.Graphics.BASE_64; d < e;) {
            var j = a.charAt(d),
                k = i[j],
                l = k >> 3,
                m = b[l];
            if (!m || 3 & k) throw "bad path data (@" + d + "): " + j;
            var n = c[l];
            l || (g = h = 0), f.length = 0, d++;
            for (var o = (k >> 2 & 1) + 2, p = 0; p < n; p++) {
                var q = i[a.charAt(d)],
                    r = q >> 5 ? -1 : 1;
                q = (31 & q) << 6 | i[a.charAt(d + 1)], 3 == o && (q = q << 6 | i[a.charAt(d + 2)]), q = r * q / 10, p % 2 ? g = q += g : h = q += h, f[p] = q, d += o
            }
        }
        return f
    }, b.prototype.killDot = function (a) {
        this.drawContainer.removeChild(a);
        var b = this.dots.indexOf(a);
        this.dots.splice(b, 1)
    }, b.prototype.tick = function (a) {
        this.showingResults && this.resultsDisplay.tick(a)
    }, b.prototype.layoutRatio = function () {
        this.btnNextPuzzle.y = game.screen_height - 160, this.drawSpaceWidth = game.screen_width - this.btnNextPuzzle.getBounds().width - 36;
        var a = game.isWidescreen ? 60 : 20;
        this.dotSizePadding = game.isWidescreen ? 40 : 20, this.drawSpaceHeight = game.screen_height - a, this.sizeAndPosition()
    }, a.abcya.ConnectScreen = b
}(window),
function (a) {
    function b() {
        this.Container_constructor(), this.setup()
    }
    a.abcya = a.abcya || {};
    b.prototype = createjs.extend(b, createjs.Container);
    b.prototype.setup = function () {
        this.title = null, this.lblSubtitle = null, this.lineContainer = null, this.firstDot = null, this.connectLine = null, this.lastDot = null, this.isSuper = !1, this.isAlphabet = !1, this.skipBySelector = null, this.caseSelector = null, createjs.Tween.removeAllTweens();
        var a = game.assets.getGameDataProp("minNum"),
            b = game.assets.getGameDataProp("maxNum");
        this.title = new createjs.Sprite(game.assets.spritesheet, "Title"), this.title.y = 100, this.title.x = game.screen_width / 2 - this.title.getBounds().width / 2, this.addChild(this.title), this.isAlphabet = game.assets.getGameDataProp("isAlphabet"), this.isAlphabet === !0 && (this.caseSelector = new abcya.ToggleCaseButton, this.addChild(this.caseSelector), this.caseSelector.x = game.screen_width / 2 - this.caseSelector.getBounds().width / 2);
        var c = a;
        game.assets.getGameDataProp("isSuper") === !0 && (c = -1);
        var d = game.assets.getGameDataProp("introDotColor"),
            e = hexToRgb(d);
        if (this.firstDot = new abcya.Dot(this, c, e, "IntroDot", 28, "#ffffff"), this.firstDot.x = this.title.x + 25, this.firstDot.y = 300, c = b, game.assets.getGameDataProp("isSuper") === !0 && (this.isSuper = !0, game.isSuperConnect = !0, c = -1, this.makeSkipSelector()), this.lastDot = new abcya.Dot(this, c, e, "IntroDot", 28, "#ffffff"), this.lastDot.x = this.title.x + this.title.getBounds().width - 75, this.lastDot.y = 300, this.connectLine = new createjs.Shape, this.connectLine.graphics.setStrokeStyle(4), this.connectLine.graphics.beginStroke(d), this.connectLine.graphics.moveTo(this.firstDot.x, this.lastDot.y - 10), this.connectLine.graphics.lineTo(this.lastDot.x, this.lastDot.y - 10), this.connectLine.graphics.endStroke(), this.btnGo = new createjs.Sprite(game.assets.spritesheet, "BtnIntroGo"), this.btnGo.x = game.screen_width / 2 - this.btnGo.getBounds().width / 2, this.btnGo.on("mousedown", this.onGoClick, this), game.assets.getGameDataProp("subtitle")) {
            var f = "#fff";
            game.assets.getGameDataProp("introSubtitleColor") && (f = game.assets.getGameDataProp("introSubtitleColor")), this.lblSubtitle = new createjs.Text(game.assets.getGameDataProp("subtitle"), "26pt vagrounded_btregular", f), this.lblSubtitle.textBaseline = "center", this.lblSubtitle.textAlign = "center", this.lblSubtitle.x = game.screen_width / 2, this.addChild(this.lblSubtitle)
        } else if (game.assets.getGameDataProp("countby")) {
            var g = "Skip count by " + game.assets.getGameDataProp("countby") + "s";
            this.lblSubtitle = new createjs.Text(g, "26pt vagrounded_btregular", "#fff"), this.lblSubtitle.textBaseline = "center", this.lblSubtitle.textAlign = "center", this.lblSubtitle.x = game.screen_width / 2, this.addChild(this.lblSubtitle)
        }
        this.lineContainer = new createjs.Container, this.lineContainer.addChild(this.connectLine, this.firstDot, this.lastDot), this.addChild(this.btnGo, this.lineContainer), this.layoutRatio(), this.doIntroAnimations()
    }, b.prototype.makeSkipSelector = function () {
        this.skipBySelector = new abcya.SkipBySelector, this.skipBySelector.on("SET_SKIP_BY", this.setSkipBy, this), this.skipBySelector.x = 200, this.skipBySelector.y = 300, this.addChild(this.skipBySelector)
    }, b.prototype.setSkipBy = function (a) {
        game.superCountBy = a.skipnum, createjs.Sound.play("Sound" + a.skipnum)
    }, b.prototype.doIntroAnimations = function () {
        this.connectLine.alpha = 0, this.lastDot.alpha = 0, createjs.Sound.play("pop1Sound"), this.firstDot.scaleX = this.firstDot.scaleY = 1.4, createjs.Tween.get(this.firstDot, {
            override: !0
        }).to({
            alpha: 1,
            scaleX: 1,
            scaleY: 1
        }, 120, createjs.Ease.quadIn).call(this.firstDotDone, null, this)
    }, b.prototype.firstDotDone = function (a) {
        createjs.Tween.get(this.connectLine, {
            override: !0
        }).to({
            alpha: 1
        }, 20).call(this.showLastDot, null, this)
    }, b.prototype.showLastDot = function (a) {
        createjs.Sound.play("pop1Sound"), this.lastDot.scaleX = this.lastDot.scaleY = 1.4, createjs.Tween.get(this.lastDot, {
            override: !0
        }).to({
            alpha: 1,
            scaleX: 1,
            scaleY: 1
        }, 120, createjs.Ease.quadIn).call(this.introAnimationFinished, null, this)
    }, b.prototype.introAnimationFinished = function (a) {
        this.isAlphabet || createjs.Sound.play("makeAPicture").on("complete", this.playTitle, this)
    }, b.prototype.playTitle = function (a) {
        game.isSuperConnect || createjs.Sound.play("titleSound")
    }, b.prototype.onGoClick = function (a) {
        createjs.Tween.removeAllTweens(), createjs.Sound.stop();
        var b = new createjs.Event(abcya.GameStateEvents.GE_SHOW_GAME);
        this.dispatchEvent(b)
    }, b.prototype.layoutRatio = function () {
        this.btnGo.y = game.screen_height - this.btnGo.getBounds().height - 60, this.lblSubtitle && (this.lblSubtitle.y = this.btnGo.y - 30), this.title.y = 30, game.isWidescreen ? (this.lineContainer.y = -90, this.skipBySelector && (this.skipBySelector.y = 310), this.caseSelector && (this.caseSelector.y = 240)) : (this.lineContainer.y = -60, this.skipBySelector && (this.skipBySelector.y = 380), this.caseSelector && (this.caseSelector.y = 380))
    }, a.abcya.IntroScreen = createjs.promote(b, "Container")
}(window);