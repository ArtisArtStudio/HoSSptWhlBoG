import {confetti_effect, playticksound, onResetClicked} from './main.js';
var finishedSpin = false;
window.onload = async () => {
    getOS();
    /* let elem = document.getElementById('scratcher-box');
    let ht = window.getComputedStyle(elem, null).getPropertyValue("top"); */
    /* let mql = window.matchMedia("(max-height: 321px)");
    alert(mql.matches);
    alert(window.innerHeight); */
    // alert(window.innerWidth);
    // alert(window.innerHeight);


    var a = new Image();
    /* if (userOS ="iOS" && userOSver<13) {
        a.src = './images/spinthewheel-overlay.png';
    } else {  */
        a.src = './images/spinthewheel-overlay.png';
        
    //}
    var b = new Image();
    b.src = './images/rect1.jpg';
    const container = document.querySelector('.wheel-wrapper');
    const btn = document.getElementById("resetbutton");
    const props = {
        itemw: 7,
        radius: 0.9,
        pointerAngle: 0,
        itemLabelRadius: 0.6,
        itemLabelRadiusMax: 0.9,
        itemLabelRotation: 0,
        itemLabelFont: 'alegreya sc',
        itemLabelAlign: "center",
        itemLabelColors: ['#000'],
        itemLabelBaselineOffset: 0,
        itemBackgroundColors: ['#7FB1ED','#ffc0cb'],
        rotationSpeed: 10,
        rotationResistance: 0,
        lineWidth: 2,
        lineColor: "white",
        overlayImage: a,
        items: [
        {
          label: 'Boy',
        },
        {
          label: 'Girl',
        },
        {
          label: 'Twin Boys',
        },
        {
          label: 'Girl',
        },
        {
          label: 'Boy',
        },
        {
          label: 'Twin Girls',
        },
        {
          label: 'Boy',
        },
        {
            image: b,
            imageScale: 1,
            label: 'Boy & Girl Twins',
        },
      ],
      itemLabelRadiusMax: 0.3,
    };
  
    
    await loadImages(a);
    const wheel = new Wheel(container, props);
    wheel.isInteractive = true;
    document.querySelector('.wheel-wrapper').style.visibility = 'visible';

    var functionFinished = function() {
        if (finishedSpin) {
          finishedSpin=false;
          return;
        }
        confetti_effect();
        finishedSpin = true;
        document.getElementById("resetbutton").value = "Try Again";

    };
    var playtick = function() {
        //if (wheel.isSpinning===1) {
        playticksound();
        //}
    };
    wheel.onRest = functionFinished;
    //wheel.onSpin = playtick;
    wheel.onCurrentIndexChange= playtick;

    document.addEventListener(
        "visibilitychange",
         function(evt) {
            //alert(document.visibilityState);
          if (document.visibilityState != "visible") {
            wheel.isSpinning=0;
            finishedSpin=true;
            wheel.spinTo(1);
            onResetClicked();
            }
        },
        false,
      );
    window.addEventListener('click', (e) => {
  
      // Listen for click event on spin button:
      if (e.target === btn) {
        if (finishedSpin) {
          wheel.isSpinning=0;
          wheel.spinTo(1);
          onResetClicked();
          document.getElementById("scratcher-box").focus();
          return;
        }
        if (wheel.isSpinning) {
          return;
        }
        
        //const winningItemIndex = fetchWinningItemIndexFromApi();
        const duration = 13000;
        const spinDirection = 1;
        const revolutions = 8;
        //playticksound();
        document.getElementById("scratcher-box").focus();
        wheel.spinToItem(props.itemw, duration, true, revolutions, spinDirection, easeOutCubic);

      }
  

  
    });  
   
  };
//   function fetchWinningItemIndexFromApi() {
//     // Simulate a call to the back-end
//     return 0;
//   }

  async function loadImages(images) {
  const promises=[];

    if (images instanceof HTMLImageElement) promises.push(images.decode());
  try {
    await Promise.all(promises);
  } catch (error) {
    throw new Error('An image could not be loaded');
  }
}

var userOS;    // will either be iOS, Android or unknown
var userOSver; // this is a string, use Number(userOSver) to convert

function getOS( )
{
  var ua = navigator.userAgent;
  var uaindex;

  // determine OS
  if ( ua.match(/iPad/) || ua.match(/iPod/) || ua.match(/iPhone/) )
  {
    userOS = 'iOS';
    uaindex = ua.indexOf( 'OS ' );
  }
  else if ( ua.match(/Android/) )
  {
    userOS = 'Android';
    uaindex = ua.indexOf( 'Android ' );
  }
  else
  {
    userOS = 'unknown';
  }

  // determine version
  if ( userOS === 'iOS'  &&  uaindex > -1 )
  {
    userOSver = ua.substring(uaindex + 3, uaindex+3+2);
  }
  else if ( userOS === 'Android'  &&  uaindex > -1 )
  {
    userOSver = ua.substring( uaindex + 8, uaindex + 8 + 3 );
  }
  else
  {
    userOSver = 'unknown';
  }
}

var N = Object.defineProperty;
var y = Object.getOwnPropertySymbols;
var j = Object.prototype.hasOwnProperty,
    H = Object.prototype.propertyIsEnumerable;
var R = Math.pow,
    M = (i, e, t) => e in i ? N(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    L = (i, e) => {
        for (var t in e || (e = {})) j.call(e, t) && M(i, t, e[t]);
        if (y)
            for (var t of y(e)) H.call(e, t) && M(i, t, e[t]);
        return i
    };

function x(i = 0, e = 0, t = 14) {
    return Y(Math.random() * (e - i) + i);
}

function m(i = 0) {
    return i * Math.PI / 180
}

function I(i, e, t) {
    return e < t ? e <= i && i < t : e <= i || i < t
}

function E(i, e, t, s) {
    s.save(), s.font = `1px ${e}`;
    let n = s.measureText(i).width;
    return s.restore(), t / n
}

function W(i = {
    x: 0,
    y: 0
}, e, t, s) {
    return R(i.x - e, 2) + R(i.y - t, 2) <= R(s, 2)
}

function v(i = {
    x: 0,
    y: 0
}, e = {}, t = 1) {
    let s = e.getBoundingClientRect();
    return {
        x: (i.x - s.left) * t,
        y: (i.y - s.top) * t
    }
}

function A(i, e, t, s) {
    let n = i - t,
        r = e - s,
        a = Math.atan2(-r, -n);
    return a *= 180 / Math.PI, a < 0 && (a += 360), a
}

function X(i = 0, e = 0) {
    let t = i + e,
        s;
    return t > 0 ? s = t % 360 : s = 360 + t % 360, s === 360 && (s = 0), s
}

function P(i = 0, e = 0) {
    let t = 180 - e;
    return 180 - X(i, t)
}

function T(i = 0, e = 0, t = 1) {
    let s = (i % 360 + e) % 360;
    return s = Y(s), s = (t === 1 ? 360 - s : 360 + s) % 360, s *= t, i + s
}

function b(i) {
    return typeof i == "object" && !Array.isArray(i) && i !== null
}

function u(i) {
    return typeof i == "number" && !Number.isNaN(i)
}

function l({
    val: i,
    isValid: e,
    errorMessage: t,
    defaultValue: s,
    action: n = null
}) {
    if (e) return n ? n() : i;
    if (i === void 0) return s;
    throw new Error(t)
}

function Y(i = 0) {
    return Math.floor((i * 1000000) / 1000000);
}

function k(i) {
    return Math.sin(i * Math.PI / 2)
}

function z(i = {}, e = {}) {
    if (window.ResizeObserver) {
        let t = new ResizeObserver(() => {
            e({
                redraw: !0
            })
        });
        return t.observe(i), {
            stop: () => {
                t.unobserve(i), t.disconnect()
            }
        }
    }
    return window.addEventListener("resize", e), {
        stop: () => {
            window.removeEventListener("resize", e)
        }
    }
}
var p = Object.freeze({
        left: "left",
        right: "right",
        center: "center"
    }),
    o = Object.freeze({
        wheel: {
            borderColor: "#000",
            borderWidth: 1,
            debug: !1,
            image: null,
            isInteractive: !0,
            isSpinning: !0,
            itemw: 1,
            itemBackgroundColors: ["#fff"],
            itemLabelAlign: p.right,
            itemLabelBaselineOffset: 0,
            itemLabelColors: ["#000"],
            itemLabelFont: "sans-serif",
            itemLabelFontSizeMax: 22,
            itemLabelRadius: .85,
            itemLabelRadiusMax: .2,
            itemLabelRotation: 0,
            itemLabelStrokeColor: "#fff",
            itemLabelStrokeWidth: 0,
            items: [],
            lineColor: "#000",
            lineWidth: 1,
            pixelRatio: 0,
            radius: .95,
            rotation: 0,
            rotationResistance: -35,
            rotationSpeedMax: 300,
            offset: {
                x: 0,
                y: 0
            },
            onCurrentIndexChange: null,
            onRest: null,
            onSpin: null,
            overlayImage: null,
            pointerAngle: 0
        },
        item: {
            backgroundColor: null,
            image: null,
            imageOpacity: 1,
            imageRadius: .5,
            imageRotation: 0,
            imageScale: 1,
            label: "",
            labelColor: null,
            value: null,
            weight: 1
        }
    }),
    f = Object.freeze({
        pointerLineColor: "#ff00ff",
        labelBoundingBoxColor: "#ff00ff",
        labelRadiusColor: "#00ff00",
        dragPointHue: 300
    });

function V(i = {}) {
    $(i), i._handler_onResize = z(i._canvasContainer, ({
        redraw: t = !0
    }) => {
        i.resize(), t && i.draw(performance.now())
    });

    let e = () => {
        if ((userOS === 'iOS' && Number( userOSver.charAt(0) ) >= 14 ) || userOS === 'Android') {
        i._mediaQueryList = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), i._mediaQueryList.addEventListener("change", i._handler_onDevicePixelRatioChange, {
            once: !0
        })
    }
    };
    i._handler_onDevicePixelRatioChange = () => {
        i.resize(), e()
    }, e()
}

function F(i = {}) {
    let e = i.canvas;
    "PointerEvent" in window ? (e.removeEventListener("pointerdown", i._handler_onPointerDown), e.removeEventListener("pointermove", i._handler_onPointerMoveRefreshCursor)) : (e.removeEventListener("touchstart", i._handler_onTouchStart), e.removeEventListener("mousedown", i._handler_onMouseDown), e.removeEventListener("mousemove", i._handler_onMouseMoveRefreshCursor)), i._handler_onResize.stop(), i._mediaQueryList.removeEventListener("change", i._handler_onDevicePixelRatioChange)
}

function $(i = {}) {
    let e = i.canvas;
    i._handler_onPointerMoveRefreshCursor = (t = {}) => {
        let s = {
            x: t.clientX,
            y: t.clientY
        };
        i._isCursorOverWheel = i.wheelHitTest(s), i.refreshCursor()
    }, i._handler_onMouseMoveRefreshCursor = (t = {}) => {
        let s = {
            x: t.clientX,
            y: t.clientY
        };
        i._isCursorOverWheel = i.wheelHitTest(s), i.refreshCursor()
    }, i._handler_onPointerDown = (t = {}) => {
        let s = {
            x: t.clientX,
            y: t.clientY
        };
        if (!i.isInteractive || !i.wheelHitTest(s)) return;
        t.preventDefault(), i.dragStart(s), e.setPointerCapture(t.pointerId), e.addEventListener("pointermove", n), e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r), e.addEventListener("pointerout", r);

        function n(a = {}) {
            a.preventDefault(), i.dragMove({
                x: a.clientX,
                y: a.clientY
            })
        }

        function r(a = {}) {
            a.preventDefault(), e.releasePointerCapture(a.pointerId), e.removeEventListener("pointermove", n), e.removeEventListener("pointerup", r), e.removeEventListener("pointercancel", r), e.removeEventListener("pointerout", r), i.dragEnd()
        }
    }, i._handler_onMouseDown = (t = {}) => {
        let s = {
            x: t.clientX,
            y: t.clientY
        };
        if (!i.isInteractive || !i.wheelHitTest(s)) return;
        i.dragStart(s), document.addEventListener("mousemove", n), document.addEventListener("mouseup", r);

        function n(a = {}) {
            a.preventDefault(), i.dragMove({
                x: a.clientX,
                y: a.clientY
            })
        }

        function r(a = {}) {
            a.preventDefault(), document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r), i.dragEnd()
        }
    }, i._handler_onTouchStart = (t = {}) => {
        let s = {
            x: t.targetTouches[0].clientX,
            y: t.targetTouches[0].clientY
        };
        if (!i.isInteractive || !i.wheelHitTest(s)) return;
        t.preventDefault(), i.dragStart(s), e.addEventListener("touchmove", n), e.addEventListener("touchend", r), e.addEventListener("touchcancel", r);

        function n(a = {}) {
            a.preventDefault(), i.dragMove({
                x: a.targetTouches[0].clientX,
                y: a.targetTouches[0].clientY
            })
        }

        function r(a = {}) {
            a.preventDefault(), e.removeEventListener("touchmove", n), e.removeEventListener("touchend", r), e.removeEventListener("touchcancel", r), i.dragEnd()
        }
    }, "PointerEvent" in window ? (e.addEventListener("pointerdown", i._handler_onPointerDown), e.addEventListener("pointermove", i._handler_onPointerMoveRefreshCursor)) : (e.addEventListener("touchstart", i._handler_onTouchStart), e.addEventListener("mousedown", i._handler_onMouseDown), e.addEventListener("mousemove", i._handler_onMouseMoveRefreshCursor))
}
var S = class {
    constructor(e, t = {}) {
        if (!b(e)) throw new Error("wheel must be an instance of Wheel");
        if (!b(t) && t !== null) throw new Error("props must be an Object or null");
        this._wheel = e;
        for (let s of Object.keys(o.item)) this["_" + s] = o.item[s];
        t ? this.init(t) : this.init(o.item)
    }
    init(e = {}) {
        this.backgroundColor = e.backgroundColor, this.image = e.image, this.imageOpacity = e.imageOpacity, this.imageRadius = e.imageRadius, this.imageRotation = e.imageRotation, this.imageScale = e.imageScale, this.label = e.label, this.labelColor = e.labelColor, this.value = e.value, this.weight = e.weight
    }
    get backgroundColor() {
        return this._backgroundColor
    }
    set backgroundColor(e) {
        typeof e == "string" ? this._backgroundColor = e : this._backgroundColor = o.item.backgroundColor, this._wheel.refresh()
    }
    get image() {
        return this._image
    }
    set image(e) {
        e instanceof HTMLImageElement ? this._image = e : this._image = o.item.image, this._wheel.refresh()
    }
    get imageOpacity() {
        return this._imageOpacity
    }
    set imageOpacity(e) {
        typeof e == "number" ? this._imageOpacity = e : this._imageOpacity = o.item.imageOpacity, this._wheel.refresh()
    }
    get imageRadius() {
        return this._imageRadius
    }
    set imageRadius(e) {
        typeof e == "number" ? this._imageRadius = e : this._imageRadius = o.item.imageRadius, this._wheel.refresh()
    }
    get imageRotation() {
        return this._imageRotation
    }
    set imageRotation(e) {
        typeof e == "number" ? this._imageRotation = e : this._imageRotation = o.item.imageRotation, this._wheel.refresh()
    }
    get imageScale() {
        return this._imageScale
    }
    set imageScale(e) {
        typeof e == "number" ? this._imageScale = e : this._imageScale = o.item.imageScale, this._wheel.refresh()
    }
    get label() {
        return this._label
    }
    set label(e) {
        typeof e == "string" ? this._label = e : this._label = o.item.label, this._wheel.refresh()
    }
    get labelColor() {
        return this._labelColor
    }
    set labelColor(e) {
        typeof e == "string" ? this._labelColor = e : this._labelColor = o.item.labelColor, this._wheel.refresh()
    }
    get value() {
        return this._value
    }
    set value(e) {
        e !== void 0 ? this._value = e : this._value = o.item.value
    }
    get weight() {
        return this._weight
    }
    set weight(e) {
        typeof e == "number" ? this._weight = e : this._weight = o.item.weight
    }
    getIndex() {
        let e = this._wheel.items.findIndex(t => t === this);
        if (e === -1) throw new Error("Item not found in parent Wheel");
        return e
    }
    getCenterAngle() {
        let e = this._wheel.getItemAngles()[this.getIndex()];
        return e.start + (e.end - e.start) / 2
    }
    getStartAngle() {
        return this._wheel.getItemAngles()[this.getIndex()].start
    }
    getEndAngle() {
        return this._wheel.getItemAngles()[this.getIndex()].end
    }
    getRandomAngle() {
        return x(this.getStartAngle(), this.getEndAngle())
    }
};
var ease = function easeInOutCirc(t){
    const scaledTime = t * 2;
    const scaledTime1 = scaledTime - 2;

    if( scaledTime < 1 ) {
    return -0.5 * ( Math.sqrt( 1 - scaledTime * scaledTime ) - 1 );
    }
    return 0.5 * ( Math.sqrt( 1 - scaledTime1 * scaledTime1 ) + 1 );
};
var easeOut = function easeOutCirc( t ) {

    const t1 = t - 1;
    return Math.sqrt( 1 - t1 * t1 );
  
  }

var easeOutCubic = function easeoutcubic(x) {  
    return 1 - Math.pow(1 - x, 3);
  }
var Wheel = class {
    constructor(e, t = {}) {
        if (!(e instanceof Element)) throw new Error("container must be an instance of Element");
        if (!b(t) && t !== null) throw new Error("props must be an Object or null");
        this._frameRequestId = null, this._rotationSpeed = 0, this._rotationDirection = 1, this._spinToTimeEnd = null, this._lastSpinFrameTime = null, this._isCursorOverWheel = !1, this.add(e);
        for (let s of Object.keys(o.wheel)) this["_" + s] = o.wheel[s];
        t ? this.init(t) : this.init(o.wheel)
    }
    init(e = {}) {
        this._isInitialising = !0, this.borderColor = e.borderColor, this.borderWidth = e.borderWidth, this.debug = e.debug, this.image = e.image, this.isInteractive = e.isInteractive, this.itemBackgroundColors = e.itemBackgroundColors, this.itemLabelAlign = e.itemLabelAlign, this.itemLabelBaselineOffset = e.itemLabelBaselineOffset, this.itemLabelColors = e.itemLabelColors, this.itemLabelFont = e.itemLabelFont, this.itemLabelFontSizeMax = e.itemLabelFontSizeMax, this.itemLabelRadius = e.itemLabelRadius, this.itemLabelRadiusMax = e.itemLabelRadiusMax, this.itemLabelRotation = e.itemLabelRotation, this.itemLabelStrokeColor = e.itemLabelStrokeColor, this.itemLabelStrokeWidth = e.itemLabelStrokeWidth, this.items = e.items, this.lineColor = e.lineColor, this.lineWidth = e.lineWidth, this.pixelRatio = e.pixelRatio, this.rotationSpeedMax = e.rotationSpeedMax, this.radius = e.radius, this.rotation = e.rotation, this.rotationResistance = e.rotationResistance, this.offset = e.offset, this.onCurrentIndexChange = e.onCurrentIndexChange, this.onRest = e.onRest, this.onSpin = e.onSpin, this.overlayImage = e.overlayImage, this.itemw = e.itemw, this.pointerAngle = e.pointerAngle
    }
    add(e) {
        this._canvasContainer = e, this.canvas = document.createElement("canvas"), this._context = this.canvas.getContext("2d"), this._canvasContainer.append(this.canvas), V(this), this._isInitialising === !1 && this.resize()
    }
    remove() {
        this.canvas !== null && (this._frameRequestId !== null && window.cancelAnimationFrame(this._frameRequestId), F(this), this._canvasContainer.removeChild(this.canvas), this._canvasContainer = null, this.canvas = null, this._context = null)
    }
    resize() {
        if (this.canvas === null) return;
        this.canvas.style.width = this._canvasContainer.clientWidth + "px", this.canvas.style.height = this._canvasContainer.clientHeight + "px";
        let [e, t] = [this._canvasContainer.clientWidth * this.getActualPixelRatio(), this._canvasContainer.clientHeight * this.getActualPixelRatio()];
        this.canvas.width = e, this.canvas.height = t;
        let s = Math.min(e, t),
            n = {
                w: s - s * this._offset.x,
                h: s - s * this._offset.y
            },
            r = Math.min(e / n.w, t / n.h);
        this._size = Math.max(n.w * r, n.h * r), this._center = {
            x: e / 2 + e * this._offset.x,
            y: t / 2 + t * this._offset.y
        }, this._actualRadius = this._size / 2 * this.radius, this._itemLabelFontSize = this.itemLabelFontSizeMax * (this._size / 500), this._labelMaxWidth = this._actualRadius * (this.itemLabelRadius - this.itemLabelRadiusMax), this.itemLabelAlign === "center" && (this._labelMaxWidth *= 2);
        for (let a of this._items){ 
            if (a.label == "Boy & Girl Twins") {
                a.fontSize = Math.min(this._itemLabelFontSize, E(a.label, this.itemLabelFont, this._labelMaxWidth+50, this._context));    
            } else {
                a.fontSize = Math.min(this._itemLabelFontSize+15, E(a.label, this.itemLabelFont, this._labelMaxWidth, this._context));        
            }
        }
        this.refresh()
    }
    draw(e = 0) {
        if (this._frameRequestId = null, this._context === null || this.canvas === null) return;
        let t = this._context;
        t.clearRect(0, 0, this.canvas.width, this.canvas.height), this.animateRotation(e);
        let s = this.getItemAngles(this._rotation),
            n = this.getScaledNumber(this._borderWidth);
        t.textBaseline = "middle", t.textAlign = this.itemLabelAlign, t.font = this._itemLabelFontSize + "px " + this.itemLabelFont, t.save();
        for (let [r, a] of s.entries()) {
            let d = this._items[r],
                h = new Path2D;
            h.moveTo(this._center.x, this._center.y), h.arc(this._center.x, this._center.y, this._actualRadius - n / 2, m(a.start + -90), m(a.end + -90)), d.path = h
        }
        this.drawItemBackgrounds(t, s), this.drawItemImages(t, s), this.drawItemLines(t, s), this.drawItemLabels(t, s), this.drawBorder(t), this.drawImage(t, this._image, !1), this.drawImage(t, this._overlayImage, !0), this.drawDebugPointerLine(t), this._isInitialising = !1
    }
    drawItemBackgrounds(e, t = []) {
        var s;
        for (let [n, r] of t.entries()) {
            let a = this._items[n];
            e.fillStyle = (s = a.backgroundColor) != null ? s : this._itemBackgroundColors[n % this._itemBackgroundColors.length]; 
            e.fill(a.path)
        }
    }
    drawItemImages(e, t = []) {
        //console.log(t);

        for (let [s, n] of t.entries()) {
            let r = this._items[s];
            if (r.image === null) continue;
            e.save(), e.clip(r.path);
            let a = n.start + (n.end - n.start) / 2;
            e.translate(this._center.x + Math.cos(m(a + -90)) * (this._actualRadius * r.imageRadius), this._center.y + Math.sin(m(a + -90)) * (this._actualRadius * r.imageRadius)), e.rotate(m(a + r.imageRotation)), e.globalAlpha = r.imageOpacity;
            let d = this._size / 500 * r.image.width * r.imageScale,
                h = this._size / 500 * r.image.height * r.imageScale,
                C = -d / 2,
                _ = -h / 2;
            e.drawImage(r.image, C, _, d, h), e.restore()
        }
    }
    drawImage(e, t, s = !1) {
        if (t === null) return;
        e.translate(this._center.x, this._center.y), s || e.rotate(m(this._rotation));
        let n = s ? this._size : this._size * this.radius,
            r = -(n / 2);
        e.drawImage(t, r, r, n, n), e.resetTransform()
    }
    drawDebugPointerLine(e) {
        !this.debug || (e.translate(this._center.x, this._center.y), e.rotate(m(this._pointerAngle + -90)), e.beginPath(), e.moveTo(0, 0), e.lineTo(this._actualRadius * 2, 0), e.strokeStyle = f.pointerLineColor, e.lineWidth = this.getScaledNumber(2), e.stroke(), e.resetTransform())
    }
    drawBorder(e) {
        if (this._borderWidth <= 0) return;
        let t = this.getScaledNumber(this._borderWidth),
            s = this._borderColor || "transparent";
        if (e.beginPath(), e.strokeStyle = s, e.lineWidth = t, e.arc(this._center.x, this._center.y, this._actualRadius - t / 2, 0, 2 * Math.PI), e.stroke(), this.debug) {
            let n = this.getScaledNumber(1);
            e.beginPath(), e.strokeStyle = e.strokeStyle = f.labelRadiusColor, e.lineWidth = n, e.arc(this._center.x, this._center.y, this._actualRadius * this.itemLabelRadius, 0, 2 * Math.PI), e.stroke(), e.beginPath(), e.strokeStyle = e.strokeStyle = f.labelRadiusColor, e.lineWidth = n, e.arc(this._center.x, this._center.y, this._actualRadius * this.itemLabelRadiusMax, 0, 2 * Math.PI), e.stroke()
        }
    }
    drawItemLines(e, t = []) {
        if (this._lineWidth <= 0) return;
        let s = this.getScaledNumber(this._lineWidth),
            n = this.getScaledNumber(this._borderWidth);
        e.translate(this._center.x, this._center.y);
        for (let r of t) e.rotate(m(r.start + -90)), e.beginPath(), e.moveTo(0, 0), e.lineTo(this._actualRadius - n, 0), e.strokeStyle = this.lineColor, e.lineWidth = s, e.stroke(), e.rotate(-m(r.start + -90));
        e.resetTransform()
    }
    drawItemLabels(e, t = []) {
        let s = this._itemLabelFontSize * -this.itemLabelBaselineOffset,
            n = this.getScaledNumber(1),
            r = this.getScaledNumber(this._itemLabelStrokeWidth * 2);
        for (let [a, d] of t.entries()) {
            let h = this._items[a],
                C = h.labelColor || this._itemLabelColors[a % this._itemLabelColors.length] || "transparent";
            e.font = h.fontSize + "px " + this.itemLabelFont;
            if (h.label.trim() === "" || C === "transparent") continue;
            e.save(), e.clip(h.path);
            let _ = d.start + (d.end - d.start) / 2;
            if (e.translate(this._center.x + Math.cos(m(_ + -90)) * (this._actualRadius * this.itemLabelRadius), this._center.y + Math.sin(m(_ + -90)) * (this._actualRadius * this.itemLabelRadius)), e.rotate(m(_ + -90)), e.rotate(m(this.itemLabelRotation)), this.debug) {
                e.save();
                let c = 0;
                this.itemLabelAlign === "left" ? c = this._labelMaxWidth : this.itemLabelAlign === "center" && (c = this._labelMaxWidth / 2), e.beginPath(), e.moveTo(c, 0), e.lineTo(-this._labelMaxWidth + c, 0), e.strokeStyle = f.labelBoundingBoxColor, e.lineWidth = n, e.stroke(), e.strokeRect(c, -this._itemLabelFontSize / 2, -this._labelMaxWidth, this._itemLabelFontSize), e.restore()
            }
            if (this._itemLabelStrokeWidth > 0 && (e.lineWidth = r, e.strokeStyle = this._itemLabelStrokeColor, e.lineJoin = "round", 
                e.strokeText(h.label, 0, s)), e.fillStyle = C, e.fillText(h.label, 0, s), this.debug) {
                let c = this.getScaledNumber(2);
                e.beginPath(), e.arc(0, 0, c, 0, 2 * Math.PI), e.fillStyle = f.labelRadiusColor, e.fill()
            }
            e.restore()
        }
    }
    drawDebugDragPoints(e) {
        var r;
        if (!this.debug || !((r = this._dragEvents) != null && r.length)) return;
        let t = [...this._dragEvents].reverse(),
            s = this.getScaledNumber(.5),
            n = this.getScaledNumber(4);
        for (let [a, d] of t.entries()) {
            let h = a / this._dragEvents.length * 100;
            e.beginPath(), e.arc(d.x, d.y, n, 0, 2 * Math.PI), e.fillStyle = `hsl(${f.dragPointHue},100%,${h}%)`, e.strokeStyle = "#000", e.lineWidth = s, e.fill(), e.stroke()
        }
    }
    animateRotation(e = 0) {
        if (this._spinToTimeEnd !== null) {
            if (e >= this._spinToTimeEnd) {
                this.rotation = this._spinToEndRotation, this._spinToTimeEnd = null, this.raiseEvent_onRest();
                return
            }
            let t = this._spinToTimeEnd - this._spinToTimeStart,
                s = (e - this._spinToTimeStart) / t;
            s = s < 0 ? 0 : s;
            let n = this._spinToEndRotation - this._spinToStartRotation;
            this.rotation = this._spinToStartRotation + n * this._spinToEasingFunction(s), this.refresh();
            return
        }
        if (this._lastSpinFrameTime !== null) {
            let t = e - this._lastSpinFrameTime;
            t > 0 && (this.rotation += t / 1e3 * this._rotationSpeed % 360, this._rotationSpeed = this.getRotationSpeedPlusDrag(t), this._rotationSpeed === 0 ? (this.raiseEvent_onRest(), this._lastSpinFrameTime = null) : this._lastSpinFrameTime = e), this.refresh();
            return
        }
    }
    getRotationSpeedPlusDrag(e = 0) {
        let t = this._rotationSpeed + this.rotationResistance * (e / 1e3) * this._rotationDirection;
        return this._rotationDirection === 1 && t < 0 || this._rotationDirection === -1 && t >= 0 ? 0 : t
    }
    spin(e = 0) {
        if (!u(e)) throw new Error("rotationSpeed must be a number");
        this._dragEvents = [], this.beginSpin(e, "spin")
    }
    spinTo(e = 0, t = 0, s = null) {
        if (!u(e)) throw new Error("Error: rotation must be a number");
        if (!u(t)) throw new Error("Error: duration must be a number");
        this.stop(), this._dragEvents = [], this.animate(e, t, s), this.raiseEvent_onSpin({
            method: "spinto",
            targetRotation: e,
            duration: t
        })
    }
    spinToItem(e = 0, t = 0, s = !0, n = 1, r = 1, a = null) {
        //alert("draw");
        this.isSpinning=1;
        this.stop(), this._dragEvents = [];
        var d = s ? this.items[e].getCenterAngle() : this.items[e].getRandomAngle();
        var h = T(this.rotation, d - this._pointerAngle, r);
        h = Y(h + (n * 360 * r));
        //console.log(h);
        this.animate(Y(h), t, a);
        this.raiseEvent_onSpin({
            method: "spintoitem",
            targetItemIndex: e,
            targetRotation: h,
            duration: t
        });
    }
    animate(e, t, s) {
        this._spinToStartRotation = this.rotation, this._spinToEndRotation = e, this._spinToTimeStart = performance.now(), this._spinToTimeEnd = this._spinToTimeStart + t, this._spinToEasingFunction = s || k, this.refresh()
    }
    stop() {
        this._spinToTimeEnd = null, this._rotationSpeed = 0, this._lastSpinFrameTime = null
    }
    getScaledNumber(e) {
        return e / 500 * this._size
    }
    getActualPixelRatio() {
        return this._pixelRatio !== 0 ? this._pixelRatio : window.devicePixelRatio
    }
    wheelHitTest(e = {
        x: 0,
        y: 0
    }) {
        if (this.canvas === null) return !1;
        let t = v(e, this.canvas, this.getActualPixelRatio());
        return W(t, this._center.x, this._center.y, this._actualRadius)
    }
    refreshCursor() {
        if (this.canvas !== null) {
            if (this.isInteractive) {
                if (this.isDragging) {
                    this.canvas.style.cursor = "grabbing";
                    return
                }
                if (this._isCursorOverWheel) {
                    this.canvas.style.cursor = "grab";
                    return
                }
            }
            this.canvas.style.cursor = ""
        }
    }
    getAngleFromCenter(e = {
        x: 0,
        y: 0
    }) {
        return (A(this._center.x, this._center.y, e.x, e.y) + 90) % 360
    }
    getCurrentIndex() {
        return this._currentIndex
    }
    refreshCurrentIndex(e = []) {
        this._items.length === 0 && (this._currentIndex = -1);
        for (let [t, s] of e.entries())
            if (!!I(this._pointerAngle, s.start % 360, s.end % 360)) {
                if (this._currentIndex === t) break;
                this._currentIndex = t, this._isInitialising || this.raiseEvent_onCurrentIndexChange();
                break
            }
    }
    getItemAngles(e = 0) {
        let t = 0;
        for (let d of this.items) t += d.weight;

        var s = 360 / t,
            n, r = e,
            a = [];
        r=Number((r+0.000001).toFixed(6));
        //console.log(r);
        for (let d of this._items) {
            n = d.weight * s; 
            a.push({
            start: r,
            end: r + n
        });
        r = r+n;
        r=Number((r+0.000001).toFixed(6));
        //console.log(r);
        }
        return this._items.length > 1 && (a[a.length - 1].end = a[0].start + Number((360+0.000001).toFixed(6))), a
    }
    refresh() {
        this._frameRequestId === null && (this._frameRequestId = window.requestAnimationFrame(e => this.draw(e)))
    }
    limitSpeed(e = 0, t = 0) {
        let s = Math.min(e, t);
        return Math.max(s, -t)
    }
    beginSpin(e = 0, t = "") {
        this.stop(), this._rotationSpeed = this.limitSpeed(e, this._rotationSpeedMax), this._lastSpinFrameTime = performance.now(), this._rotationDirection = this._rotationSpeed >= 0 ? 1 : -1, this._rotationSpeed !== 0 && this.raiseEvent_onSpin({
            method: t,
            rotationSpeed: this._rotationSpeed,
            rotationResistance: this._rotationResistance
        }), this.refresh()
    }
    refreshAriaLabel() {
        if (this.canvas === null) return;
        this.canvas.setAttribute("role", "img");
        let e = this.items.length >= 2 ? ` The wheel has ${this.items.length} slices.` : "";
        this.canvas.setAttribute("aria-label", "An image of a spinning prize wheel." + e)
    }
    get borderColor() {
        return this._borderColor
    }
    set borderColor(e) {
        this._borderColor = l({
            val: e,
            isValid: typeof e == "string",
            errorMessage: "Wheel.borderColor must be a string",
            defaultValue: o.wheel.borderColor
        }), this.refresh()
    }
    get borderWidth() {
        return this._borderWidth
    }
    set borderWidth(e) {
        this._borderWidth = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.borderWidth must be a number",
            defaultValue: o.wheel.borderWidth
        }), this.refresh()
    }
    get debug() {
        return this._debug
    }
    set debug(e) {
        this._debug = l({
            val: e,
            isValid: typeof e == "boolean",
            errorMessage: "Wheel.debug must be a boolean",
            defaultValue: o.wheel.debug
        }), this.refresh()
    }
    get image() {
        return this._image
    }
    set image(e) {
        this._image = l({
            val: e,
            isValid: e instanceof HTMLImageElement || e === null,
            errorMessage: "Wheel.image must be a HTMLImageElement or null",
            defaultValue: o.wheel.image
        }), this.refresh()
    }
    get isInteractive() {
        return this._isInteractive
    }
    set isInteractive(e) {
        this._isInteractive = l({
            val: e,
            isValid: typeof e == "boolean",
            errorMessage: "Wheel.isInteractive must be a boolean",
            defaultValue: o.wheel.isInteractive
        }), this.refreshCursor()
    }
    get itemBackgroundColors() {
        return this._itemBackgroundColors
    }
    set itemBackgroundColors(e) {
        this._itemBackgroundColors = l({
            val: e,
            isValid: Array.isArray(e),
            errorMessage: "Wheel.itemBackgroundColors must be an array",
            defaultValue: o.wheel.itemBackgroundColors
        }), this.refresh()
    }
    get itemLabelAlign() {
        return this._itemLabelAlign
    }
    set itemLabelAlign(e) {
        this._itemLabelAlign = l({
            val: e,
            isValid: typeof e == "string" && (e === p.left || e === p.right || e === p.center),
            errorMessage: "Wheel.itemLabelAlign must be one of Constants.AlignText",
            defaultValue: o.wheel.itemLabelAlign
        }), this.resize()
    }
    get itemLabelBaselineOffset() {
        return this._itemLabelBaselineOffset
    }
    set itemLabelBaselineOffset(e) {
        this._itemLabelBaselineOffset = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.itemLabelBaselineOffset must be a number",
            defaultValue: o.wheel.itemLabelBaselineOffset
        }), this.resize()
    }
    get itemLabelColors() {
        return this._itemLabelColors
    }
    set itemLabelColors(e) {
        this._itemLabelColors = l({
            val: e,
            isValid: Array.isArray(e),
            errorMessage: "Wheel.itemLabelColors must be an array",
            defaultValue: o.wheel.itemLabelColors
        }), this.refresh()
    }
    get itemLabelFont() {
        return this._itemLabelFont
    }
    set itemLabelFont(e) {
        this._itemLabelFont = l({
            val: e,
            isValid: typeof e == "string",
            errorMessage: "Wheel.itemLabelFont must be a string",
            defaultValue: o.wheel.itemLabelFont
        }), this.resize()
    }
    get itemLabelFontSizeMax() {
        return this._itemLabelFontSizeMax
    }
    set itemLabelFontSizeMax(e) {
        this._itemLabelFontSizeMax = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.itemLabelFontSizeMax must be a number",
            defaultValue: o.wheel.itemLabelFontSizeMax
        }), this.resize()
    }
    get itemLabelRadius() {
        return this._itemLabelRadius
    }
    set itemLabelRadius(e) {
        this._itemLabelRadius = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.itemLabelRadius must be a number",
            defaultValue: o.wheel.itemLabelRadius
        }), this.resize()
    }
    get itemLabelRadiusMax() {
        return this._itemLabelRadiusMax
    }
    set itemLabelRadiusMax(e) {
        this._itemLabelRadiusMax = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.itemLabelRadiusMax must be a number",
            defaultValue: o.wheel.itemLabelRadiusMax
        }), this.resize()
    }
    get itemLabelRotation() {
        return this._itemLabelRotation
    }
    set itemLabelRotation(e) {
        this._itemLabelRotation = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.itemLabelRotation must be a number",
            defaultValue: o.wheel.itemLabelRotation
        }), this.refresh()
    }
    get itemLabelStrokeColor() {
        return this._itemLabelStrokeColor
    }
    set itemLabelStrokeColor(e) {
        this._itemLabelStrokeColor = l({
            val: e,
            isValid: typeof e == "string",
            errorMessage: "Wheel.itemLabelStrokeColor must be a string",
            defaultValue: o.wheel.itemLabelStrokeColor
        }), this.refresh()
    }
    get itemLabelStrokeWidth() {
        return this._itemLabelStrokeWidth
    }
    set itemLabelStrokeWidth(e) {
        this._itemLabelStrokeWidth = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.itemLabelStrokeWidth must be a number",
            defaultValue: o.wheel.itemLabelStrokeWidth
        }), this.refresh()
    }
    get items() {
        return this._items
    }
    set items(e) {
        this._items = l({
            val: e,
            isValid: Array.isArray(e),
            errorMessage: "Wheel.items must be an array of Items",
            defaultValue: o.wheel.items,
            action: () => {
                let t = [];
                for (let s of e) t.push(new S(this, {
                    backgroundColor: s.backgroundColor,
                    image: s.image,
                    imageRadius: s.imageRadius,
                    imageRotation: s.imageRotation,
                    imageScale: s.imageScale,
                    label: s.label,
                    labelColor: s.labelColor,
                    value: s.value,
                    weight: s.weight
                }));
                return t
            }
        }), this.refreshAriaLabel(), this.refreshCurrentIndex(this.getItemAngles(this._rotation)), this.resize()
    }
    get lineColor() {
        return this._lineColor
    }
    set lineColor(e) {
        this._lineColor = l({
            val: e,
            isValid: typeof e == "string",
            errorMessage: "Wheel.lineColor must be a string",
            defaultValue: o.wheel.lineColor
        }), this.refresh()
    }
    get lineWidth() {
        return this._lineWidth
    }
    set lineWidth(e) {
        this._lineWidth = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.lineWidth must be a number",
            defaultValue: o.wheel.lineWidth
        }), this.refresh()
    }
    get offset() {
        return this._offset
    }
    set offset(e) {
        this._offset = l({
            val: e,
            isValid: b(e),
            errorMessage: "Wheel.offset must be an object",
            defaultValue: o.wheel.offset
        }), this.resize()
    }
    get onCurrentIndexChange() {
        return this._onCurrentIndexChange
    }
    set onCurrentIndexChange(e) {
        this._onCurrentIndexChange = l({
            val: e,
            isValid: typeof e == "function" || e === null,
            errorMessage: "Wheel.onCurrentIndexChange must be a function or null",
            defaultValue: o.wheel.onCurrentIndexChange
        })
    }
    get onRest() {
        return this._onRest
    }
    set onRest(e) {
        this._onRest = l({
            val: e,
            isValid: typeof e == "function" || e === null,
            errorMessage: "Wheel.onRest must be a function or null",
            defaultValue: o.wheel.onRest
        })
    }
    get onSpin() {
        return this._onSpin
    }
    set onSpin(e) {
        this._onSpin = l({
            val: e,
            isValid: typeof e == "function" || e === null,
            errorMessage: "Wheel.onSpin must be a function or null",
            defaultValue: o.wheel.onSpin
        })
    }
    get overlayImage() {
        return this._overlayImage
    }
    set overlayImage(e) {
        this._overlayImage = l({
            val: e,
            isValid: e instanceof HTMLImageElement || e === null,
            errorMessage: "Wheel.overlayImage must be a HTMLImageElement or null",
            defaultValue: o.wheel.overlayImage
        }), this.refresh()
    }
    get pixelRatio() {
        return this._pixelRatio
    }
    set pixelRatio(e) {
        this._pixelRatio = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.pixelRatio must be a number",
            defaultValue: o.wheel.pixelRatio
        }), this._dragEvents = [], this.resize()
    }
    get pointerAngle() {
        return this._pointerAngle
    }
    set pointerAngle(e) {
        this._pointerAngle = l({
            val: e,
            isValid: u(e) && e >= 0,
            errorMessage: "Wheel.pointerAngle must be a number between 0 and 360",
            defaultValue: o.wheel.pointerAngle,
            action: () => e % 360
        }), this.debug && this.refresh()
    }
    get radius() {
        return this._radius
    }
    set radius(e) {
        this._radius = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.radius must be a number",
            defaultValue: o.wheel.radius
        }), this.resize()
    }
    get rotation() {
        return this._rotation
    }
    set rotation(e) {
        this._rotation = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.rotation must be a number",
            defaultValue: o.wheel.rotation
        }), this.refreshCurrentIndex(this.getItemAngles(this._rotation)), this.refresh()
    }
    get rotationResistance() {
        return this._rotationResistance
    }
    set rotationResistance(e) {
        this._rotationResistance = l({
            val: e,
            isValid: u(e),
            errorMessage: "Wheel.rotationResistance must be a number",
            defaultValue: o.wheel.rotationResistance
        })
    }
    get rotationSpeed() {
        return this._rotationSpeed
    }
    get rotationSpeedMax() {
        return this._rotationSpeedMax
    }
    set rotationSpeedMax(e) {
        this._rotationSpeedMax = l({
            val: e,
            isValid: u(e) && e >= 0,
            errorMessage: "Wheel.rotationSpeedMax must be a number >= 0",
            defaultValue: o.wheel.rotationSpeedMax
        })
    }
    dragStart(e = {
        x: 0,
        y: 0
    }) {
        if (this.canvas === null || this.isSpinning==1) return;
        let t = v(e, this.canvas, this.getActualPixelRatio());
        this.isDragging = !0, this.stop(), this._dragEvents = [{
            distance: 0,
            x: t.x,
            y: t.y,
            now: performance.now()
        }], this.refreshCursor()
    }
    dragMove(e = {
        x: 0,
        y: 0
    }) {
        if (this.canvas === null || this.isSpinning==1) return;
        let t = v(e, this.canvas, this.getActualPixelRatio()),
            s = this.getAngleFromCenter(t),
            n = this._dragEvents[0],
            r = this.getAngleFromCenter(n),
            a = P(r, s);
        this._dragEvents.unshift({
            distance: a,
            x: t.x,
            y: t.y,
            now: performance.now()
        }), this.debug && this._dragEvents.length >= 40 && this._dragEvents.pop(), this.rotation += a
    }
    dragEnd() {
        this.isDragging = !1;
        let e = 0,
            t = performance.now();
        for (let [s, n] of this._dragEvents.entries()) {
            if (!this.isDragEventTooOld(t, n)) {
                e += n.distance;
                continue
            }
            this._dragEvents.length = s, this.debug && this.refresh();
            break
        }
        
        this.refreshCursor(), e > 90 && this.spinToItem(this.itemw,13000,true,8,1,easeOutCubic);// && this.beginSpin(e * (1e3 / 250), "interact")
    }
    isDragEventTooOld(e = 0, t = {}) {
        return e - t.now > 250
    }
    raiseEvent_onCurrentIndexChange(e = {}) {
        var t;
        (t = this.onCurrentIndexChange) == null || t.call(this, L({
            type: "currentIndexChange",
            currentIndex: this._currentIndex
        }, e))
    }
    raiseEvent_onRest(e = {}) {
        var t;
        (t = this.onRest) == null || t.call(this, L({
            type: "rest",
            currentIndex: this._currentIndex,
            rotation: this._rotation
        }, e))
    }
    raiseEvent_onSpin(e = {}) {
        var t;
        (t = this.onSpin) == null || t.call(this, L({
            type: "spin"
        }, e))
    }
};