!function (t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var a = i[n] = {exports: {}, id: n, loaded: !1};
        return t[n].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
    }

    var i = {};
    return e.m = t, e.c = i, e.p = "", e(0)
}([function (t, e, i) {
    t.exports = i(1)
}, function (t, e, i) {
    var n, a;
    n = i(2), window.tkmh = a = window.tkmh || {}, a.windowScrollTweenObj = {value: 0}, a.windowScrollTween = null, a.windowScrollTo = function (t, e, i, n, o) {
        return null == i && (i = 1), null == n && (n = null), null == o && (o = null), new Promise(function (s) {
            var r;
            return t === e ? void s() : (null != (r = a.windowScrollTween) && r.kill(), a.windowScrollTweenObj = {value: window.scrollY}, a.windowScrollTween = TweenMax.to(a.windowScrollTweenObj, i, {
                value: e,
                overwrite: !0,
                ease: Expo.easeOut,
                onStart: function () {
                    if ($.isFunction(n)) return n()
                },
                onUpdate: function () {
                    return window.scrollTo(0, a.windowScrollTweenObj.value)
                },
                onComplete: function () {
                    return $.isFunction(o) && o(), s()
                }
            }))
        })
    }, a.PerlinNoise = new function () {
        var t, e, i, n;
        t = function (t) {
            return t * t * t * (t * (6 * t - 15) + 10)
        }, i = function (t, e, i) {
            return e + t * (i - e)
        }, e = function (t, e, i, n) {
            var a, o, s;
            return a = 15 & t, o = a < 8 ? e : i, s = a < 4 ? i : 12 === a || 14 === a ? e : n, (0 === (1 & a) ? o : -o) + (0 === (2 & a) ? s : -s)
        }, n = function (t) {
            return (1 + t) / 2
        }, this.noise = function (a, o, s) {
            var r, h, u, l, c, d, m, f, p, b, g, v, x, w, y;
            for (null == o && (o = 0), null == s && (s = 0), g = new Array(512), v = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], b = 0; b < 256;) g[256 + b] = g[b] = v[b], b++;
            return m = 255 & Math.floor(a), f = 255 & Math.floor(o), p = 255 & Math.floor(s), a -= Math.floor(a), o -= Math.floor(o), s -= Math.floor(s), x = t(a), w = t(o), y = t(s), r = g[m] + f, h = g[r] + p, u = g[r + 1] + p, l = g[m + 1] + f, c = g[l] + p, d = g[l + 1] + p, n(i(y, i(w, i(x, e(g[h], a, o, s), e(g[c], a - 1, o, s)), i(x, e(g[u], a, o - 1, s), e(g[d], a - 1, o - 1, s))), i(w, i(x, e(g[h + 1], a, o, s - 1), e(g[c + 1], a - 1, o, s - 1)), i(x, e(g[u + 1], a, o - 1, s - 1), e(g[d + 1], a - 1, o - 1, s - 1)))))
        }
    }, $(function () {
        return new n
    })
}, function (t, e, i) {
    var n, a, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    window.utils = i(3), a = i(17), n = function () {
        function t() {
            this.pause = o(this.pause, this), this.start = o(this.start, this), this.update = o(this.update, this), this.startContents = o(this.startContents, this), this.setLoadedContents = o(this.setLoadedContents, this), this.windowScrollHandler = o(this.windowScrollHandler, this), this.orientationChangeHandler = o(this.orientationChangeHandler, this), this.windowResizeHandler = o(this.windowResizeHandler, this), this.$window = $(window), this.$html = $("html"), this.$body = $("body"), this.$wrapper = $("#wrapper"), this.$contentsInner = $("#" + n), this.$globalHeader = $("#globalHeader"), this.$globalNav = $("#globalNav"), this.$mainVisual = $("#mainVisual"), this.requestAnimationFrameId = null, $("#btnMenu a").on("click", function (t) {
                return function (e) {
                    return t.$body.toggleClass("menuOpened"), !1
                }
            }(this)), this.$mainVisual.find(".btnScroll").on("click", function (t) {
                return function (e) {
                    var i;
                    return i = t.$mainVisual.height() - t.$globalHeader.height(), tkmh.windowScrollTo(t.$window.scrollTop(), i, .6, t.pause, t.start), !1
                }
            }(this)), this.$wrapper.find(".btnScrollTop").on("click", function (t) {
                return function (e) {
                    return tkmh.windowScrollTo(t.$window.scrollTop(), 0, .6, t.pause, t.start), !1
                }
            }(this)), this.initAsyncTransition(), this.$window.on({
                scroll: this.windowScrollHandler,
                resize: this.windowResizeHandler,
                orientationchange: this.orientationChangeHandler,
                popstate: function (t) {
                    return function (e) {
                        if (t.isInited) return "" !== t.lastUrl ? (t.registerHistory("", !0), t.showContents(t.lastUrl, location.pathname)) : void 0
                    }
                }(this)
            }), this.mainVisual = new a, tkmh.animateToTtl = function (t) {
                return function (e) {
                    t.mainVisual.isWebGLSupported && t.mainVisual.animateToTtl(e)
                }
            }(this), tkmh.animateFromTtl = function (t) {
                return function () {
                    var e;
                    t.mainVisual.isWebGLSupported && null != (e = t.mainVisual) && e.animateFromTtl()
                }
            }(this), this.mainVisual.init(function (t) {
                return function () {
                    var e;
                    return t.mainVisual.isWebGLSupported && (t.$window.on({
                        mousemove: t.mainVisual.windowMouseMoveHandler,
                        devicemotion: t.mainVisual.deviceMotionHandler
                    }).trigger("resize").trigger("orientationchange"), t.start()), e = $("#loading").addClass("loaded").on(utils.transitionend(), function (i) {
                        var n;
                        return e.remove(), n = location.pathname, t.registerHistory(n), t.showContents("", n, !0)
                    })
                }
            }(this)), tkmh.searchByKeyword = function (t) {
                return function (e, i) {
                    t.loadPage("/" + e + "/" + i, null, !0)
                }
            }(this), tkmh.back = function (t) {
                return function (e) {
                    var i, n;
                    n = t.registerHistory("", !0), i = n.length > 0 && n[n.length - 1] || e, history.pushState({
                        url: i,
                        lastUrl: t.lastUrl
                    }, "", i), t.showContents(t.lastUrl, i)
                }
            }(this), this.$window.trigger("resize"), this.$window.trigger("orientationchange"), this.$window.trigger("scroll")
        }

        var e, i, n, s, r;
        return e = 20, s = 600, n = "contentsInner", r = "> .inner", i = "contentsContainer", t.prototype.registerHistory = function (t, e) {
            var i;
            return null == e && (e = !1), "undefined" != typeof sessionStorage && null !== sessionStorage && (i = this.getHistory(), e ? i.pop() : i[i.length - 1] !== t && i.push(t), sessionStorage.setItem("history", i.join(",")), i)
        }, t.prototype.getHistory = function () {
            var t, e;
            return "undefined" != typeof sessionStorage && null !== sessionStorage && (t = [], e = sessionStorage.getItem("history"), e && (t = e.split(",")), t)
        }, t.prototype.resize = function () {
            var t, e;
            this.mainVisualHeight = this.$window.height(), t = this.$window.width(), this.headerHeight = this.$globalHeader.height(), this.$wrapper.css({
                width: "",
                height: this.mainVisualHeight
            }), null != (e = this.mainVisual) && e.resize(t, this.mainVisualHeight)
        }, t.prototype.windowResizeHandler = function (t) {
            utils.isDesktop && this.resize()
        }, t.prototype.orientationChangeHandler = function (t) {
            (utils.isTablet || utils.isMobile) && (utils.isiOS ? this.resize() : setTimeout(function (t) {
                return function () {
                    return t.resize()
                }
            }(this), 300))
        }, t.prototype.windowScrollHandler = function (t) {
            this.scrollTop = this.$window.scrollTop(), this.scrollTop >= this.mainVisualHeight - this.headerHeight - 1 ? this.$body.addClass("scrolled") : this.$body.removeClass("scrolled")
        }, t.prototype.initAsyncTransition = function () {
            var t, e;
            this.lastUrl = "", this.bodyClass = "", this.isInited = !1, this.isAnimating = !1, this.$syncItems = null, this.$insertContents = null, this.currentContents = null, this.$currentContentsContainer = this.$contentsInner, this.syncMetaSelectors = ["title", 'meta[name="keywords"]', 'meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:url"]', 'meta[property="og:description"]', 'meta[property="og:image"]', 'meta[property="og:type"]'], this.syncStyleSelectors = ['link[rel="stylesheet"]:not([href="/assets/css/common.css"])'], t = ['[src*="livereload"]', '[src*="localhost"]', '[src="/assets/js/common.js"]', '[src="/assets/js/lib.js"]', '[type="text/template"]', ".nosync"], this.syncScriptSelectors = ["script:not(" + t.join(",") + ")"], this.$syncStyles = $(this.syncStyleSelectors.join(",")), this.$syncMetas = $(this.syncMetaSelectors.join(",")), this.$syncScripts = $(this.syncScriptSelectors.join(",")), this.getInsertContents(this.$body, !1), e = this, this.$body.on("click", 'a[href="#"],a.notransition', function (t) {
                return !1
            }).on("click", 'a:not([target],[href^="#"],[href="#"],a.notransition)', function (t) {
                return e.loadPage($(this).attr("href")), !1
            }), this.checkUA()
        }, t.prototype.checkUA = function () {
            var t;
            if (t = this, utils.md = new MobileDetect(navigator.userAgent), null !== utils.md.tablet() ? (this.$html.addClass("tablet"), utils.isTablet = !0) : null !== utils.md.mobile() ? (this.$html.addClass("mobile"), utils.isMobile = !0) : (this.$html.addClass("desktop"), utils.isDesktop = !0), !utils.isDesktop) return this.$globalNav.find("li a").on("click", function (e) {
                var i, n;
                return t.$body.removeClass("menuOpened"), i = $(this).attr("href"), n = new Promise(function (e) {
                    return t.$globalNav.one(utils.transitionend(), function (t) {
                        if ("globalNav" === t.target.id) return e()
                    })
                }), t.loadPage(i, n), !1
            })
        }, t.prototype.getInsertContents = function (t, e, i) {
            var a;
            null == e && (e = !0), null == i && (i = !1), a = [].concat(this.syncMetaSelectors, this.syncStyleSelectors, this.syncScriptSelectors, this.syncLinks).join(","), a = a.replace(/,$/, ""), e ? this.$syncItems = t.filter(a) : this.$syncItems = $(a).clone(), i ? this.$insertContents = t.find("#" + n + " " + r).children() : this.$insertContents = t.find("#" + n).children()
        }, t.prototype.loadPage = function (t, e, i) {
            var n;
            null == e && (e = null), null == i && (i = !1), this.isAnimating || (t = this.removeHostsFromUrl(t), n = location.pathname, (t !== n || i) && (history.pushState({
                url: t,
                lastUrl: this.lastUrl
            }, "", t), this.registerHistory(t), this.showContents(n, t, !1, e)))
        }, t.prototype.ajaxPageLoad = function (t, e) {
            return null == e && (e = !1), new Promise(function (i) {
                return function (n) {
                    return axios.get(t).then(function (t) {
                        var a, o;
                        return 200 === t.status ? (o = t.data, i.bodyClass = o.match(/<body[^<>'"]*class="(.*)"/)[1], a = $(o.replace(/([.\s\S　]*)<html([^>]*)>([.\s\S　]*)<\/html>/, "$3")), i.getInsertContents(a, !0, e)) : log("ajax error", t.statusText), n()
                    }).catch(function (t) {
                        return log("ajax error", t), n()
                    })
                }
            }(this))
        }, t.prototype.setLoadedContents = function () {
            var t;
            return t = this, new Promise(function (t) {
                return function (e) {
                    var i, n, a, o, s, r, h;
                    return h = 0, r = 0, t.$body.attr("class", t.bodyClass), s = function (i) {
                        null == i && (i = null), 0 !== h && ++r !== h || (t.$syncScripts.remove(), t.$syncScripts = $(t.syncScriptSelectors.join(",")), t.$syncStyles.remove(), t.$syncStyles = $(t.syncStyleSelectors.join(",")), t.$window.trigger("resize").trigger("scroll"), e())
                    }, $.each(t.syncMetaSelectors, function (e) {
                        var i, n;
                        n = t.syncMetaSelectors[e], i = t.$syncMetas.filter(n), i.attr("content") ? i.attr("content", t.$syncItems.filter(n).attr("content")) : i.text(t.$syncItems.filter(n).text())
                    }), n = $('link[rel="stylesheet"]').last(), o = null, $.each(t.syncStyleSelectors, function (e) {
                        var i;
                        i = t.syncStyleSelectors[e], o = t.$syncItems.filter(i), o.each(function (t) {
                            var e, i;
                            i = o.eq(t), e = $("<link>").insertAfter(n).one("load", function (t) {
                                return s()
                            }).attr({rel: "stylesheet", type: "text/css", href: i.attr("href"), media: i.attr("media")})
                        }), h += o.length
                    }), i = $("script").last(), a = null, $.each(t.syncScriptSelectors, function (e) {
                        var n;
                        n = t.syncScriptSelectors[e], a = t.$syncItems.filter(n), a.each(function (t) {
                            var e, n, o;
                            n = a.eq(t), o = n.attr("src"), e = $("<script>").insertAfter(i).attr("type", "text/javascript"), null != o ? e.one("load", function (t) {
                                s()
                            }).attr("src", o) : (e.html(n.html()), setTimeout(function () {
                                return s()
                            }, 400))
                        }), h += a.length
                    }), t.$currentContentsContainer.children().remove(), t.$currentContentsContainer.html(t.$insertContents)
                }
            }(this))
        }, t.prototype.removeHostsFromUrl = function (t) {
            var e;
            return t.indexOf(location.host) >= 0 ? (e = new RegExp(location.protocol + "//" + location.host), t.replace(e, "")) : t
        }, t.prototype.showContents = function (t, e, n, a) {
            var o, s, h, u, l, c, d;
            if (null == n && (n = !1), null == a && (a = null), e = this.removeHostsFromUrl(e), !this.isAnimating && t !== e) return this.$currentContentsContainer = this.$contentsInner, this.lastUrl = e, this.isAnimating = !0, u = this.getPathArr(t), l = this.getPathArr(e), o = u[0], s = l[0], n ? (this.isInited = !0, void this.startContents(!0)) : ("" === s && this.$body.addClass("hiding"), h = !1, d = 0, o === s && (h = !0, this.$currentContentsContainer = this.$contentsInner.find(r), d = this.$window.height() - this.$globalHeader.height(), this.$contentsInner.css("height", this.$contentsInner.outerHeight())), this.$currentContentsContainer.addClass(i), c = [this.ajaxPageLoad(this.lastUrl, h), this.fadeOutContents(d)], a && c.push(a), Promise.all(c).then(function (t) {
                return function () {
                    return t.setLoadedContents()
                }
            }(this)).then(function (t) {
                return function () {
                    return "function" == typeof ga && ga("send", "pageview", e), t.startContents()
                }
            }(this)), void 0)
        }, t.prototype.startContents = function (t) {
            var e;
            return null == t && (t = !1), this.$body.addClass("show").removeClass("hide"), e = function (t) {
                return function (e) {
                    null == e && (e = null), t.currentContents = tkmh.currentContents, t.currentContents.init(), t.$contentsInner.css("height", ""), t.$body.removeClass("hiding"), t.currentContents.start(), t.isAnimating = !1
                }
            }(this), t ? void e() : void TweenMax.to(this.$currentContentsContainer, .2, {
                opacity: 1,
                delay: .2,
                ease: Linear.easeNone,
                onComplete: function (t) {
                    return function () {
                        t.$currentContentsContainer.removeClass(i), e()
                    }
                }(this)
            })
        }, t.prototype.fadeOutContents = function (t) {
            return new Promise(function (e) {
                return function (i) {
                    return e.$body.addClass("hide").removeClass("show"), tkmh.windowScrollTo(e.$window.scrollTop(), t, .6, e.pause, e.start).then(function () {
                        return TweenMax.to(e.$currentContentsContainer, .2, {
                            opacity: 0,
                            ease: Linear.easeNone,
                            onComplete: function () {
                                e.currentContents && e.currentContents.reset(), i()
                            }
                        })
                    })
                }
            }(this))
        }, t.prototype.getPathArr = function (t) {
            var e;
            return e = t.split("/"), e.splice(0, 1), 1 !== e.length && "" === e[e.length - 1] && e.pop(), e
        }, t.prototype.update = function () {
            this.mainVisual.draw(), this.requestAnimationFrameId = requestAnimationFrame(this.update)
        }, t.prototype.start = function () {
            this.isUpdating || (this.isUpdating = !0, this.update())
        }, t.prototype.pause = function () {
            cancelAnimationFrame(this.requestAnimationFrameId), this.isUpdating = !1
        }, t
    }(), t.exports = n
}, function (t, e, i) {
    t.exports = {
        preloadImg: i(4),
        transitionend: i(5),
        map: i(6),
        capitalize: i(7),
        isFirefox: i(8),
        isIE11: i(9),
        isEdge: i(10),
        isiPad: i(11),
        isiPhone: i(12),
        isAndroid: i(13)
    }, i(14), i(15), i(16)
}, function (t, e) {
    t.exports = function (t) {
        return new Promise(function (e) {
            var i;
            return i = new Image, i.addEventListener("load", function (t) {
                return i.removeEventListener("load", arguments.callee), e()
            }), i.src = t
        })
    }
}, function (t, e) {
    t.exports = function (t) {
        return null == t && (t = ""), t ? "transitionend." + t + " webkitTransitionEnd." + t + " mozTransitionEnd." + t + " oTransitionEnd." + t : "transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd"
    }
}, function (t, e) {
    t.exports = function (t, e, i, n, a, o) {
        var s;
        if (null == o && (o = !0), o === !0) {
            if (t < e) return n;
            if (t > i) return a
        }
        return s = (a - n) / (i - e), (t - e) * s + n
    }
}, function (t, e) {
    t.exports = function (t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
}, function (t, e) {
    t.exports = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1
}, function (t, e) {
    t.exports = navigator.userAgent.toLowerCase().indexOf("rv:11.0") !== -1
}, function (t, e) {
    t.exports = navigator.userAgent.toLowerCase().indexOf("edge") !== -1
}, function (t, e) {
    t.exports = navigator.userAgent.toLowerCase().indexOf("ipad") !== -1
}, function (t, e) {
    t.exports = navigator.userAgent.toLowerCase().indexOf("iphone") !== -1
}, function (t, e) {
    t.exports = navigator.userAgent.toLowerCase().indexOf("android") !== -1
}, function (t, e) {
    window.log = function () {
        return null != window.console ? null != window.console.log.bind ? window.console.log.bind(window.console) : window.console.log : window.alert
    }()
}, function (t, e) {
    window.requestAnimationFrame = function (t) {
        return function () {
            return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                return setTimeout(t, 1e3 / 30)
            }
        }
    }(this)()
}, function (t, e) {
    window.cancelAnimationFrame = function (t) {
        return function () {
            return window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (t) {
                return clearTimeout(t)
            }
        }
    }(this)()
}, function (t, e, i) {
    var n, a, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    a = i(18), n = function () {
        function t() {
            this.deviceMotionHandler = o(this.deviceMotionHandler, this), this.windowMouseMoveHandler = o(this.windowMouseMoveHandler, this), this.resize2 = o(this.resize2, this), this.resize = o(this.resize, this), this.resizeMainMesh = o(this.resizeMainMesh, this), this.draw2 = o(this.draw2, this), this.draw = o(this.draw, this), this.$container = $("#mainVisual"), this.$canvas = this.$container.find("canvas"), this.width = 100, this.height = 100, this.isWebGLSupported = !1, this.sensorAxisDir = -1, (utils.isiPhone || utils.isiPad) && (this.sensorAxisDir = 1)
        }

        var e, n, s;
        return e = 20, n = 100, s = {
            about: "/assets/img/headerTtlAbout.png",
            blog: "/assets/img/headerTtlBlog.png",
            bookmarks: "/assets/img/headerTtlBookmarks.png",
            works: "/assets/img/headerTtlWorks.png"
        }, t.prototype.init = function (t) {
            return Detector.webgl ? this.initWebGL(t) : (log("not supported"), "function" == typeof t ? t() : void 0)
        }, t.prototype.initWebGL = function (t) {
            var i;
            this.isWebGLSupported = !0, this.renderer = new THREE.WebGLRenderer({
                canvas: this.$canvas.get(0),
                alpha: !0,
                antialias: !0
            }), i = Math.min(window.devicePixelRatio || 1, 2), this.renderer.setPixelRatio(i), this.bufferScene = new THREE.Scene, this.bufferCamera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1e3), this.bufferCamera.position.set(0, 0, e), this.bufferScene.add(this.bufferCamera), this.bufferCameraDefaultPos = this.bufferCamera.position.clone(), this.bufferCameraMatrix = new THREE.Matrix4, this.takumiObject3D = new a, this.takumiObject3D.setTtlScale(this.width, this.height), this.bufferScene.add(this.takumiObject3D), this.initSimpleVersion(), Promise.all([this.initTtlImg("about"), this.initTtlImg("blog"), this.initTtlImg("bookmarks"), this.initTtlImg("works")]).then(function () {
                return "function" == typeof t ? t() : void 0
            })
        }, t.prototype.initTtlImg = function (t) {
            return new Promise(function (e) {
                return function (i) {
                    var n, a;
                    return a = s[t], n = $("<img>").one("load", function (a) {
                        var o, s, r, h, u, l, c, d, m, f;
                        for (u = n.get(0), s = document.createElement("canvas"), r = s.getContext("2d"), s.width = u.width, s.height = u.height, r.drawImage(u, 0, 0, u.width, u.height), l = r.getImageData(0, 0, u.width, u.height), m = [], h = d = 0, f = l.data.length - 1; d < f; h = d += 4) o = l.data[h + 3], c = h / 4, o > 0 && m.push({
                            x: c % u.width - .5 * u.width,
                            y: .5 * u.height - Math.floor(c / u.width)
                        });
                        return e.takumiObject3D.addAttributeFromImgData(t, m), i()
                    }).attr("src", a)
                }
            }(this))
        }, t.prototype.animateToTtl = function (t) {
            if (this.clearToggleAnimationTimer(), this.takumiObject3D.animateToTtl(t), null != this.mainMesh) return TweenMax.to(this.mainMesh.material.uniforms.noiseCoefficient, 1, {
                overwrite: !0,
                value: 10,
                ease: Expo.easeOut,
                delay: 1
            })
        }, t.prototype.animateFromTtl = function () {
            if (this.setToggleAnimationTimer(), this.takumiObject3D.animateFromTtl(), null != this.mainMesh) return TweenMax.to(this.mainMesh.material.uniforms.noiseCoefficient, 2, {
                overwrite: !0,
                value: 0,
                ease: Expo.easeOut
            })
        }, t.prototype.setToggleAnimationTimer = function () {
            return this.toggleAnimationTimerId = setInterval(function (t) {
                return function () {
                    return t.takumiObject3D.toggleAnimation()
                }
            }(this), 1e4)
        }, t.prototype.clearToggleAnimationTimer = function () {
            return clearTimeout(this.toggleAnimationTimerId)
        }, t.prototype.initFullVersion = function () {
            return this.buffer = new THREE.WebGLRenderTarget(this.width, this.height, {
                magFilter: THREE.NearestFilter,
                minFilter: THREE.NearestFilter,
                wrapS: THREE.ClampToEdgeWrapping,
                wrapT: THREE.ClampToEdgeWrapping,
                format: THREE.RGBAFormat,
                stencilBuffer: !1,
                generateMipmaps: !1,
                shareDepthFrom: null
            }), this.scene = new THREE.Scene, this.camera = new THREE.OrthographicCamera(-this.textureWidth / 2, this.textureWidth / 2, this.textureHeight / 2, -this.textureHeight / 2, -10, 10), this.camera.target = new THREE.Vector3(0, 0, 0), this.camera.position.z = 10, this.mainMesh = new THREE.Mesh(new THREE.PlaneGeometry(n, n), new THREE.RawShaderMaterial({
                vertexShader: i(22),
                fragmentShader: i(23),
                transparent: !0,
                uniforms: {
                    time: {type: "1f", value: 0},
                    noiseCoefficient: {type: "1f", value: 1},
                    resolution: {type: "2f"},
                    texture: {type: "t"}
                }
            })), this.mainMesh.material.uniforms.texture.value = this.buffer.texture, this.mainMesh.material.uniforms.resolution.value = new THREE.Vector2(this.width, this.height), this.resizeMainMesh(), this.scene.add(this.mainMesh), this.noiseCoefficient = 0, this.mainMesh.material.uniforms.noiseCoefficient.value = this.noiseCoefficient
        }, t.prototype.initSimpleVersion = function () {
            return this.draw = this.draw2, this.resize = this.resize2
        }, t.prototype.draw = function () {
            this.takumiObject3D.update(), this.mainMesh.material.uniforms.time.value += .001, this.renderer.render(this.bufferScene, this.bufferCamera, this.buffer), this.renderer.render(this.scene, this.camera)
        }, t.prototype.draw2 = function () {
            return this.takumiObject3D.update(), this.renderer.render(this.bufferScene, this.bufferCamera)
        }, t.prototype.resizeMainMesh = function () {
            this.mainMesh.scale.set(this.width / n, this.height / n, 1)
        }, t.prototype.resize = function (t, e) {
            this.width = t, this.height = e, this.$container.css({
                width: "",
                height: this.height
            }), this.bufferCamera.aspect = this.width / this.height, this.bufferCamera.updateProjectionMatrix(), this.buffer.setSize(this.width, this.height), this.takumiObject3D.setTtlScale(this.width, this.height), this.resizeMainMesh(), this.mainMesh.material.uniforms.resolution.value.x = this.width, this.mainMesh.material.uniforms.resolution.value.y = this.height, this.camera.left = -this.width / 2, this.camera.right = this.width / 2, this.camera.top = this.height / 2, this.camera.bottom = -this.height / 2, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height)
        }, t.prototype.resize2 = function (t, e) {
            this.width = t, this.height = e, log("resize!!!", this.width, this.height), this.$container.css({
                width: "",
                height: this.height
            }), this.bufferCamera.aspect = this.width / this.height, this.bufferCamera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height), this.takumiObject3D.setTtlScale(this.width, this.height)
        }, t.prototype.windowMouseMoveHandler = function (t) {
            var e, i;
            e = utils.map(t.pageX / this.width, 0, 1, -1, 1), i = utils.map(t.pageY / this.height, 0, 1, -1, 1), this.setBufferCameraPos(e, i), this.isMoved = !0
        }, t.prototype.deviceMotionHandler = function (t) {
            var e, i;
            e = t.originalEvent.accelerationIncludingGravity.x / 4, i = t.originalEvent.accelerationIncludingGravity.y / 4, this.setBufferCameraPos(e * this.sensorAxisDir, i * this.sensorAxisDir)
        }, t.prototype.setBufferCameraPos = function (t, e) {
            var i;
            i = this.bufferCameraDefaultPos.clone(), this.bufferCameraMatrix.identity(), this.bufferCameraMatrix.makeRotationX(e * Math.PI / 6), i.applyMatrix4(this.bufferCameraMatrix), this.bufferCameraMatrix.makeRotationY(t * Math.PI / 6), i.applyMatrix4(this.bufferCameraMatrix), TweenMax.to(this.bufferCamera.position, 3, {
                overwrite: !0,
                x: i.x,
                y: i.y,
                z: i.z,
                ease: Expo.easeOut,
                onUpdate: function (t) {
                    return function () {
                        return t.bufferCamera.lookAt(new THREE.Vector3)
                    }
                }(this)
            })
        }, t
    }(), t.exports = n
}, function (t, e, i) {
    var n, a, o = function (t, e) {
        function i() {
            this.constructor = t
        }

        for (var n in e) s.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
    }, s = {}.hasOwnProperty;
    n = i(19), a = function (t) {
        function e() {
            e.__super__.constructor.call(this), this.geometry = new n(.4), this.material = new THREE.RawShaderMaterial({
                vertexShader: i(20),
                fragmentShader: i(21),
                transparent: !0,
                uniforms: {
                    time: {type: "1f", value: 0},
                    ttlScale: {type: "1f", value: 1},
                    animationParam1: {type: "1f", value: 0},
                    animationParam2: {type: "1f", value: 0},
                    animationParam3: {type: "1f", value: 0},
                    animationParam4: {type: "1f", value: 0},
                    animationParam5: {type: "1f", value: 0},
                    animationParam6: {type: "1f", value: 0},
                    animationParamTtlAbout: {type: "1f", value: 0},
                    animationParamTtlBlog: {type: "1f", value: 0},
                    animationParamTtlBookmarks: {type: "1f", value: 0},
                    animationParamTtlWorks: {type: "1f", value: 0}
                }
            }), this.takumiMesh = new THREE.Mesh(this.geometry, this.material), this.animationNoArr = [], this.currentAnimationNo = this.getNextAnimationNo(), this.material.uniforms["animationParam" + this.currentAnimationNo].value = 1, this.add(this.takumiMesh)
        }

        var a, s;
        return o(e, t), a = 6, s = ["about", "blog", "bookmarks", "works"], e.prototype.setTtlScale = function (t, e) {
            var i;
            i = t / e > 1 ? t / 2e4 : e / 2e4, this.material.uniforms.ttlScale.value = i
        }, e.prototype.update = function () {
            this.material.uniforms.time.value += .001
        }, e.prototype.backToAnimation1 = function () {
            this.animate(this.currentAnimationNo, 0), this.animate(1, 1), this.currentAnimationNo = 1
        }, e.prototype.animateTo = function (t) {
            this.currentAnimationNo = t, this.animate(1, 0), this.animate(this.currentAnimationNo, 1)
        }, e.prototype.animateToTtl = function (t) {
            var e, i, n, o, r, h, u;
            for (e = i = 1, h = a; 1 <= h ? i <= h : i >= h; e = 1 <= h ? ++i : --i) this.animate(e, 0, 2);
            for (n = 0, o = s.length; n < o; n++) u = s[n], r = u === t ? 1 : 0, this.animate("Ttl" + utils.capitalize(u), r, 2)
        }, e.prototype.animateFromTtl = function () {
            var t, e, i;
            for (this.animate(this.currentAnimationNo, 1, 2), t = 0, e = s.length; t < e; t++) i = s[t], this.animate("Ttl" + utils.capitalize(i), 0, 2)
        }, e.prototype.toggleAnimation = function () {
            return 1 === this.currentAnimationNo ? this.animateTo(this.getNextAnimationNo()) : void this.backToAnimation1()
        }, e.prototype.getNextAnimationNo = function () {
            return 0 === this.animationNoArr.length && (this.animationNoArr = _.chain(_.range(2, a + 1)).shuffle().value()), this.animationNoArr.shift()
        }, e.prototype.animate = function (t, e, i) {
            return null == i && (i = 3), t = t.toString(), TweenMax.to(this.material.uniforms["animationParam" + t], i, {
                overwrite: !0,
                value: e,
                ease: Linear.easeNone
            })
        }, e.prototype.addAttributeFromImgData = function (t, e) {
            return this.geometry.addAttributeFromImgData(t, e)
        }, e
    }(THREE.Object3D), t.exports = a
}, function (t, e, i) {
    var n, a, o = function (t, e) {
        function i() {
            this.constructor = t
        }

        for (var n in e) s.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
    }, s = {}.hasOwnProperty;
    a = i(3), n = function (t) {
        function e(t) {
            var n, a, o, s, r, h, u, l, c, d, m, f, p, b, g, v, x, w, y, H, W, C, _, T, A, R, $, M, P, k, S, V, z, E, I;
            for (this.cubeWidth = null != t ? t : 1, e.__super__.constructor.call(this), this.cubeWidthHalf = this.cubeWidth / 2, this.takumiWidth = 17 * this.cubeWidth, this.takumiHeight = 22 * this.cubeWidth, this.takumiDepth = i * this.cubeWidth, this.takumiWidthHalf = this.takumiWidth / 2, this.takumiHeightHalf = this.takumiHeight / 2, this.takumiDepthHalf = this.takumiDepth / 2, this.vertices = [], this.vertexIndices = [], this.cubeCenters = [], this.cubeRandoms = [], this.triangleRandoms = [], this.triangleCenters = [], this.noiseValues = [], V = s = 0; s < 7; V = ++s) for (a = h = 0; h < 3; a = ++h) for (n = l = 0, H = i; 0 <= H ? l < H : l > H; n = 0 <= H ? ++l : --l) this.addCubeVertices(V * this.cubeWidth - this.takumiWidthHalf + this.cubeWidthHalf, a * -this.cubeWidth + this.takumiHeightHalf - this.cubeWidthHalf, n * -this.cubeWidth + this.takumiDepthHalf - this.cubeWidthHalf);
            for (V = d = 0; d < 3; V = ++d) for (a = f = 0; f < 14; a = ++f) for (n = b = 0, W = i; 0 <= W ? b < W : b > W; n = 0 <= W ? ++b : --b) this.addCubeVertices(V * this.cubeWidth - this.takumiWidthHalf + this.cubeWidthHalf + 2 * this.cubeWidth, a * -this.cubeWidth + this.takumiHeightHalf - this.cubeWidthHalf - 4 * this.cubeWidth, n * -this.cubeWidth + this.takumiDepthHalf - this.cubeWidthHalf);
            for (V = v = 0; v < 7; V = ++v) for (a = w = 0; w < 3; a = ++w) for (n = y = 0, C = i; 0 <= C ? y < C : y > C; n = 0 <= C ? ++y : --y) this.addCubeVertices(V * this.cubeWidth - this.takumiWidthHalf + this.cubeWidthHalf, a * -this.cubeWidth + this.takumiHeightHalf - this.cubeWidthHalf - 19 * this.cubeWidth, n * -this.cubeWidth + this.takumiDepthHalf - this.cubeWidthHalf);
            for (V = M = 0; M < 9; V = ++M) for (a = P = 0; P < 3; a = ++P) for (n = k = 0, _ = i; 0 <= _ ? k < _ : k > _; n = 0 <= _ ? ++k : --k) this.addCubeVertices(V * this.cubeWidth - this.takumiWidthHalf + this.cubeWidthHalf + 8 * this.cubeWidth, a * -this.cubeWidth + this.takumiHeightHalf - this.cubeWidthHalf, n * -this.cubeWidth + this.takumiDepthHalf - this.cubeWidthHalf);
            for (V = S = 0; S < 3; V = ++S) for (a = z = 0; z < 3; a = ++z) for (n = E = 0, T = i; 0 <= T ? E < T : E > T; n = 0 <= T ? ++E : --E) this.addCubeVertices(V * this.cubeWidth - this.takumiWidthHalf + this.cubeWidthHalf + 10 * this.cubeWidth, a * -this.cubeWidth + this.takumiHeightHalf - this.cubeWidthHalf - 4 * this.cubeWidth, n * -this.cubeWidth + this.takumiDepthHalf - this.cubeWidthHalf);
            for (V = I = 0; I < 7; V = ++I) for (a = o = 0; o < 3; a = ++o) for (n = r = 0, A = i; 0 <= A ? r < A : r > A; n = 0 <= A ? ++r : --r) this.addCubeVertices(V * this.cubeWidth - this.takumiWidthHalf + this.cubeWidthHalf + 10 * this.cubeWidth, a * -this.cubeWidth + this.takumiHeightHalf - this.cubeWidthHalf - 8 * this.cubeWidth, n * -this.cubeWidth + this.takumiDepthHalf - this.cubeWidthHalf);
            for (V = u = 0; u < 3; V = ++u) for (a = c = 0; c < 6; a = ++c) for (n = m = 0, R = i; 0 <= R ? m < R : m > R; n = 0 <= R ? ++m : --m) this.addCubeVertices(V * this.cubeWidth - this.takumiWidthHalf + this.cubeWidthHalf + 14 * this.cubeWidth, a * -this.cubeWidth + this.takumiHeightHalf - this.cubeWidthHalf - 12 * this.cubeWidth, n * -this.cubeWidth + this.takumiDepthHalf - this.cubeWidthHalf);
            for (V = p = 0; p < 9; V = ++p) for (a = g = 0; g < 3; a = ++g) for (n = x = 0, $ = i; 0 <= $ ? x < $ : x > $; n = 0 <= $ ? ++x : --x) this.addCubeVertices(V * this.cubeWidth - this.takumiWidthHalf + this.cubeWidthHalf + 8 * this.cubeWidth, a * -this.cubeWidth + this.takumiHeightHalf - this.cubeWidthHalf - 19 * this.cubeWidth, n * -this.cubeWidth + this.takumiDepthHalf - this.cubeWidthHalf);
            this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(this.vertices), 3)), this.addAttribute("vertexIndex", new THREE.BufferAttribute(new Uint16Array(this.vertexIndices), 1)), this.addAttribute("cubeCenter", new THREE.BufferAttribute(new Float32Array(this.cubeCenters), 3)), this.addAttribute("cubeRandom", new THREE.BufferAttribute(new Float32Array(this.cubeRandoms), 3)), this.addAttribute("triangleCenter", new THREE.BufferAttribute(new Float32Array(this.triangleCenters), 3)), this.addAttribute("triangleRandom", new THREE.BufferAttribute(new Float32Array(this.triangleRandoms), 3)), this.addAttribute("noiseValue", new THREE.BufferAttribute(new Float32Array(this.noiseValues), 1)), this.computeVertexNormals(), delete this.vertices, delete this.cubeCenters, delete this.vertexIndices, delete this.cubeRandoms, delete this.triangleRandoms, delete this.noiseValues
        }

        var i;
        return o(e, t), i = 4, e.prototype.addAttributeFromImgData = function (t, e) {
            var i, n, a, o, s, r, h;
            for (r = this.attributes.vertexIndex.count / 3, r > e.length && (e = e.concat(e)), e = _.sample(e, r), i = [], a = 0, s = e.length; a < s; a++) for (h = e[a], n = o = 0; o < 3; n = ++o) i.push(h.x), i.push(h.y);
            this.addAttribute(t + "Pos", new THREE.BufferAttribute(new Float32Array(i), 2)), i = null
        }, e.prototype.addCubeVertices = function (t, e, i) {
            var n, a, o, s, r, h, u, l;
            for (null == t && (t = 0), null == e && (e = 0), null == i && (i = 0), o = new THREE.BufferGeometry, this.cubeWidthHalf = this.cubeWidth / 2, a = [-this.cubeWidthHalf + t, -this.cubeWidthHalf + e, this.cubeWidthHalf + i, this.cubeWidthHalf + t, -this.cubeWidthHalf + e, this.cubeWidthHalf + i, this.cubeWidthHalf + t, this.cubeWidthHalf + e, this.cubeWidthHalf + i, this.cubeWidthHalf + t, this.cubeWidthHalf + e, this.cubeWidthHalf + i, -this.cubeWidthHalf + t, this.cubeWidthHalf + e, this.cubeWidthHalf + i, -this.cubeWidthHalf + t, -this.cubeWidthHalf + e, this.cubeWidthHalf + i, -this.cubeWidthHalf + t, this.cubeWidthHalf + e, -this.cubeWidthHalf + i, this.cubeWidthHalf + t, this.cubeWidthHalf + e, -this.cubeWidthHalf + i, this.cubeWidthHalf + t, -this.cubeWidthHalf + e, -this.cubeWidthHalf + i, this.cubeWidthHalf + t, -this.cubeWidthHalf + e, -this.cubeWidthHalf + i, -this.cubeWidthHalf + t, -this.cubeWidthHalf + e, -this.cubeWidthHalf + i, -this.cubeWidthHalf + t, this.cubeWidthHalf + e, -this.cubeWidthHalf + i, -this.cubeWidthHalf + t, this.cubeWidthHalf + e, this.cubeWidthHalf + i, this.cubeWidthHalf + t, this.cubeWidthHalf + e, this.cubeWidthHalf + i, this.cubeWidthHalf + t, this.cubeWidthHalf + e, -this.cubeWidthHalf + i, this.cubeWidthHalf + t, this.cubeWidthHalf + e, -this.cubeWidthHalf + i, -this.cubeWidthHalf + t, this.cubeWidthHalf + e, -this.cubeWidthHalf + i, -this.cubeWidthHalf + t, this.cubeWidthHalf + e, this.cubeWidthHalf + i, -this.cubeWidthHalf + t, -this.cubeWidthHalf + e, -this.cubeWidthHalf + i, this.cubeWidthHalf + t, -this.cubeWidthHalf + e, -this.cubeWidthHalf + i, this.cubeWidthHalf + t, -this.cubeWidthHalf + e, this.cubeWidthHalf + i, this.cubeWidthHalf + t, -this.cubeWidthHalf + e, this.cubeWidthHalf + i, -this.cubeWidthHalf + t, -this.cubeWidthHalf + e, this.cubeWidthHalf + i, -this.cubeWidthHalf + t, -this.cubeWidthHalf + e, -this.cubeWidthHalf + i, -this.cubeWidthHalf + t, -this.cubeWidthHalf + e, -this.cubeWidthHalf + i, -this.cubeWidthHalf + t, -this.cubeWidthHalf + e, this.cubeWidthHalf + i, -this.cubeWidthHalf + t, this.cubeWidthHalf + e, this.cubeWidthHalf + i, -this.cubeWidthHalf + t, this.cubeWidthHalf + e, this.cubeWidthHalf + i, -this.cubeWidthHalf + t, this.cubeWidthHalf + e, -this.cubeWidthHalf + i, -this.cubeWidthHalf + t, -this.cubeWidthHalf + e, -this.cubeWidthHalf + i, this.cubeWidthHalf + t, -this.cubeWidthHalf + e, -this.cubeWidthHalf + i, this.cubeWidthHalf + t, this.cubeWidthHalf + e, -this.cubeWidthHalf + i, this.cubeWidthHalf + t, -this.cubeWidthHalf + e, this.cubeWidthHalf + i, this.cubeWidthHalf + t, this.cubeWidthHalf + e, this.cubeWidthHalf + i, this.cubeWidthHalf + t, -this.cubeWidthHalf + e, this.cubeWidthHalf + i, this.cubeWidthHalf + t, this.cubeWidthHalf + e, -this.cubeWidthHalf + i], n = [this.getRandomValue(), this.getRandomValue(), this.getRandomValue()], s = r = 0; r < 36; s = ++r) this.vertexIndices.push(this.vertexIndices.length), this.cubeRandoms.push(n[0]), this.cubeRandoms.push(n[1]), this.cubeRandoms.push(n[2]), this.cubeCenters.push(t), this.cubeCenters.push(e), this.cubeCenters.push(i), l = new THREE.Vector3(a[3 * s], a[3 * s + 1], a[3 * s + 2]), l.normalize(), this.noiseValues.push(tkmh.PerlinNoise.noise(l.x, l.y, l.z)), s % 3 === 0 && (u = [Math.random(), Math.random(), Math.random()], h = [(a[3 * s] + a[3 * s + 3] + a[3 * s + 6]) / 3, (a[3 * s + 1] + a[3 * s + 1 + 3] + a[3 * s + 1 + 6]) / 3, (a[3 * s + 2] + a[3 * s + 2 + 3] + a[3 * s + 2 + 6]) / 3]),
                this.triangleRandoms.push(this.getRandomValue2(u[0], .01)), this.triangleRandoms.push(this.getRandomValue2(u[1], .01)), this.triangleRandoms.push(this.getRandomValue2(u[2], .01)), this.triangleCenters.push(h[0]), this.triangleCenters.push(h[1]), this.triangleCenters.push(h[2]);
            return Array.prototype.push.apply(this.vertices, a)
        }, e.prototype.getRandomValue = function () {
            return a.map(Math.random(), 0, 1, -1, 1)
        }, e.prototype.getRandomValue2 = function (t, e) {
            return a.map(t - Math.random() * e, 0, 1, -1, 1)
        }, e
    }(THREE.BufferGeometry), t.exports = n
}, function (t, e) {
    t.exports = "#define GLSLIFY 1\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float time;\nuniform float ttlScale;\nuniform float animationParam1;\nuniform float animationParam2;\nuniform float animationParam3;\nuniform float animationParam4;\nuniform float animationParam5;\nuniform float animationParam6;\nuniform float animationParamTtlAbout;\nuniform float animationParamTtlBlog;\nuniform float animationParamTtlBookmarks;\nuniform float animationParamTtlWorks;\n\nattribute vec3 position;\nattribute vec3 cubeCenter;\nattribute vec3 cubeRandom;\nattribute vec3 triangleRandom;\nattribute vec3 triangleCenter;\nattribute vec3 normal;\nattribute float noiseValue;\nattribute float vertexIndex;\n\nattribute vec2 aboutPos;\nattribute vec2 blogPos;\nattribute vec2 bookmarksPos;\nattribute vec2 worksPos;\n\nvarying vec4 vColor;\n\nfloat PI_1_0 = 3.1415926535897932384626433832795;\n\n\nfloat map_2_1(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\n  if(clamp == true) {\n    if(value < inputMin) return outputMin;\n    if(value > inputMax) return outputMax;\n  }\n\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\n  return ((value - inputMin) * p) + outputMin;\n}\n\n\nvec3 hsv2rgb_3_2(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n\nvec3 rotateVec3_4_3(vec3 p, float angle, vec3 axis){\n  vec3 a = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float r = 1.0 - c;\n  mat3 m = mat3(\n    a.x * a.x * r + c,\n    a.y * a.x * r + a.z * s,\n    a.z * a.x * r - a.y * s,\n    a.x * a.y * r - a.z * s,\n    a.y * a.y * r + c,\n    a.z * a.y * r + a.x * s,\n    a.x * a.z * r + a.y * s,\n    a.y * a.z * r - a.x * s,\n    a.z * a.z * r + c\n  );\n  return m * p;\n}\n\n\nfloat exponentialInOut_5_4(float t) {\n  return t == 0.0 || t == 1.0\n    ? t\n    : t < 0.5\n      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)\n      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;\n}\n\n\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_6_5(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_6_5(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_6_6(vec3 x) {\n  return mod289_6_5(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_6_7(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_6_5(i); // Avoid truncation effects in permutation\n  vec3 p = permute_6_6( permute_6_6( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\n\n\nfloat getRad(float scale, float offset) {\n  return map_2_1(mod(time * scale + offset, PI_1_0 * 2.0), 0.0, PI_1_0 * 2.0, -PI_1_0, PI_1_0, true);\n}\n\nfloat getAnimationParam(float animationParam, float randomValue) {\n  float p = clamp(-map_2_1(randomValue, -1.0, 1.0, 0.0, 0.6, true) + animationParam * 1.5, 0.0, 1.0);\n  p = exponentialInOut_5_4(p);\n  return p;\n}\n\nvoid setTtlAnimation(float animationParam, vec2 ttlPos, inout vec3 pos) {\n  float p = getAnimationParam(animationParam, triangleRandom.x);\n  if(p > 0.0) {\n    pos = pos - triangleCenter * p;\n    pos *= (1.0 - 0.01 * p * cubeRandom.x);\n    float scale = 1.0 + (ttlScale * 20.0 * p - 1.0) * p;\n    pos *= scale;\n    float rad1 = getRad(40.0, noiseValue * 10.0);\n    float rad2 = getRad(40.0, noiseValue * 10.0);\n    pos = rotateVec3_4_3(pos, p * rad1, vec3(1.0, 0, 0));\n    pos = rotateVec3_4_3(pos, p * rad2, vec3(0, 1.0, 0));\n    pos.x *= 1.0 - p * 0.6;\n    pos.z *= 1.0 - p * 0.6;\n    vec3 n = rotateVec3_4_3(normal, p * rad1, vec3(1.0, 0, 0));\n    n = rotateVec3_4_3(n, p * rad2, vec3(0, 1.0, 0));\n    pos += (p * vec3(ttlPos * ttlScale, 0.0));\n    float noise = snoise_6_7(pos.xy / 300.0 / scale);\n    pos += p * vec3(\n      sin((time + noise) * 100.0) * 0.2 * scale,\n      cos((time + noise) * 60.0) * 0.2 * scale,\n      0\n    );\n  }\n}\n\nvoid main() {\n  vec3 pos = position;\n  vec3 n = normal;\n  float rad1, rad2;\n\n  // animation1\n  float p = exponentialInOut_5_4(animationParam1);\n  if(p > 0.0) {\n    rad1 = getRad(3.0, 0.0);\n    rad2 = getRad(5.0, 0.0);\n    pos = rotateVec3_4_3(pos, p * rad1, vec3(1.0, 0, 0));\n    pos = rotateVec3_4_3(pos, p * rad2, vec3(0, 1.0, 0));\n    n = rotateVec3_4_3(n, p * rad1, vec3(1.0, 0, 0));\n    n = rotateVec3_4_3(n, p * rad2, vec3(0, 1.0, 0));\n    pos += (p * sin(getRad(200.0, noiseValue * 200.0)) * noiseValue * 0.06 * normalize(pos));\n  }\n\n  // animation2\n  p = getAnimationParam(animationParam2, cubeRandom.x);\n  if(p > 0.0) {\n    pos = pos - cubeCenter * p;\n    pos *= (1.0 + p);\n    rad1 = PI_1_0 * 2.0 * sin(getRad(1.0, cubeRandom.x));\n    rad2 = PI_1_0 * 2.0 * sin(getRad(1.0, cubeRandom.y));\n    pos = rotateVec3_4_3(pos, p * rad1, vec3(1.0, 0, 0));\n    pos = rotateVec3_4_3(pos, p * rad2, vec3(0, 1.0, 0));\n    n = rotateVec3_4_3(n, p * rad1, vec3(1.0, 0, 0));\n    n = rotateVec3_4_3(n, p * rad2, vec3(0, 1.0, 0));\n    vec3 cubeCenterTo = cubeRandom * 20.0;\n    pos += (p * cubeCenterTo);\n    pos = rotateVec3_4_3(pos, p * getRad(1.0, 0.0), vec3(0.3, 1.0, 0.2));\n    pos += (p * sin(getRad(160.0, noiseValue * 160.0)) * noiseValue * 0.3 * normalize(cubeCenterTo - pos));\n  }\n\n\n  // animation3\n  p = getAnimationParam(animationParam3, triangleRandom.x);\n  if(p > 0.0) {\n    pos = pos - triangleCenter * p;\n    rad1 = getRad(40.0, triangleRandom.x);\n    rad2 = getRad(40.0, triangleRandom.y);\n    pos = rotateVec3_4_3(pos, p * rad1, vec3(1.0, 0, 0));\n    pos = rotateVec3_4_3(pos, p * rad2, vec3(0, 1.0, 0));\n    n = rotateVec3_4_3(n, p * rad1, vec3(1.0, 0, 0));\n    n = rotateVec3_4_3(n, p * rad2, vec3(0, 1.0, 0));\n    float radius = 30.0 * map_2_1(triangleRandom.y, -1.0, 1.0, 0.0, 1.0, true);\n    float anim2CircleRad = getRad(6.0, triangleRandom.x * 6.0);\n    pos += vec3(\n      p * radius * cos(anim2CircleRad),\n      p * 2.0 * sin(getRad(4.0, triangleRandom.y) * 10.0),\n      p * radius * sin(anim2CircleRad)\n    );\n    pos = rotateVec3_4_3(pos, p * getRad(4.0, 0.0), vec3(0.3, 1.0, sin(time)));\n    n = rotateVec3_4_3(n, p * getRad(4.0, 0.0), vec3(0.3, 1.0, sin(time)));\n  }\n\n\n  // animation4\n  p = getAnimationParam(animationParam4, triangleRandom.x);\n  if(p > 0.0) {\n    pos = pos - triangleCenter * p;\n    if(mod(vertexIndex, 3.0) > 0.0) {\n      pos.z += (p * (4.0 * triangleRandom.z * sin(triangleRandom.z * 100.0)));\n      pos = rotateVec3_4_3(pos, p * getRad(10.0, triangleRandom.x * 10.0), vec3(1.0, 0, 0));\n      pos = rotateVec3_4_3(pos, p * getRad(10.0, triangleRandom.y * 10.0), vec3(0, 1.0, 0));\n      pos += (p * sin(getRad(60.0, noiseValue * 60.0)) * noiseValue * 6.0 * normalize(pos));\n    }\n  }\n\n  // animation5\n  p = getAnimationParam(animationParam5, triangleRandom.x);\n  if(p > 0.0) {\n    pos = pos - (pos - normalize(pos) * 3.0) * p;\n    rad1 = getRad(10.0, triangleRandom.x * 10.0);\n    rad2 = getRad(10.0, triangleRandom.y * 10.0);\n    pos = rotateVec3_4_3(pos, p * rad1, vec3(1.0, 0, 0));\n    pos = rotateVec3_4_3(pos, p * rad2, vec3(0, 1.0, 0));\n    n = rotateVec3_4_3(n, p * rad1, vec3(1.0, 0, 0));\n    n = rotateVec3_4_3(n, p * rad2, vec3(0, 1.0, 0));\n    pos += (p * sin(getRad(10.0, triangleRandom.z * 10.0)) * 3.0 * normalize(pos));\n  }\n\n\n  // animation6\n  p = getAnimationParam(animationParam6, triangleRandom.x);\n  if(p > 0.0) {\n    pos = pos - triangleCenter * p;\n    rad1 = getRad(30.0, triangleRandom.x * 10.0);\n    rad2 = getRad(30.0, triangleRandom.y * 10.0);\n    pos = rotateVec3_4_3(pos, p * rad1, vec3(1.0, 0, 0));\n    pos = rotateVec3_4_3(pos, p * rad2, vec3(0, 1.0, 0));\n    float triangleIndex = floor(vertexIndex / 3.0);\n    float cubeIndex = mod(mod(triangleIndex, 41.0), 3.0);\n    float size = 2.0 + cubeIndex * 2.0;\n    float t = mod(time * 10.0 + triangleRandom.z * 10.0, 4.0);\n    pos.x += (map_2_1(t, 0.0, 1.0, -1.0, 1.0, true) * size * p - size * p);\n    pos.y += (map_2_1(t, 1.0, 2.0, -1.0, 1.0, true) * size * p - size * p);\n    pos.x -= map_2_1(t, 2.0, 3.0, -1.0, 1.0, true) * size * p;\n    pos.y -= map_2_1(t, 3.0, 4.0, -1.0, 1.0, true) * size * p;\n    pos.z -= size * p;\n    pos = rotateVec3_4_3(pos, p * PI_1_0 * mod(triangleIndex, 2.0), vec3(1.0, 0, 0));\n    pos = rotateVec3_4_3(pos, p * PI_1_0 / 2.0 * mod(triangleIndex, 3.0), vec3(0, 1.0, 0));\n    pos = rotateVec3_4_3(pos, p * PI_1_0 / 2.0 * mod(triangleIndex, 4.0), vec3(0, 0, 1.00));\n    pos = rotateVec3_4_3(pos, p * time * 2.0 * (cubeIndex + 1.0), vec3(1.0, 0, 0));\n    pos = rotateVec3_4_3(pos, p * time * 2.0 * (cubeIndex + 1.0), vec3(0, 1.0, 0));\n  }\n\n  // title\n  setTtlAnimation(animationParamTtlAbout, aboutPos, pos);\n  setTtlAnimation(animationParamTtlBlog, blogPos, pos);\n  setTtlAnimation(animationParamTtlBookmarks, bookmarksPos, pos);\n  setTtlAnimation(animationParamTtlWorks, worksPos, pos);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n\n  float len = length(pos);\n  vColor = vec4(hsv2rgb_3_2(vec3(\n    map_2_1(sin(getRad(2.0, noiseValue * 0.6 + len * (animationParam5 * 0.2 + animationParam6 * 0.2))), -1.0, 1.0, 0.0, 1.0, true),\n    map_2_1(cos(getRad(3.0, noiseValue * 2.0 + len * (animationParam2 * 2.0 + animationParam3 * 3.0))), -1.0, 1.0, 0.3, 0.5, true),\n    map_2_1(cos(getRad(1.0, noiseValue * 0.3)), -1.0, 1.0, 1.6, 2.0, true) + animationParam4 * 0.2\n  )), 1.0);\n\n  // light\n  float diffuse  = clamp(dot(n, normalize(vec3(1.0, 1.0, 1.0))) , 0.5, 1.0);\n  vColor *= vec4(vec3(diffuse), 1.0);\n}\n"
}, function (t, e) {
    t.exports = "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec4 vColor;\n\nvoid main(){\n  gl_FragColor = vColor;\n}\n"
}, function (t, e) {
    t.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
}, function (t, e) {
    t.exports = "precision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D texture;\nuniform float noiseCoefficient;\nuniform float time;\nuniform vec2 resolution;\n\nvarying vec2 vUv;\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_1_0(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_1_1(vec3 x) {\n  return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_1_2(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_1_0(i); // Avoid truncation effects in permutation\n  vec3 p = permute_1_1( permute_1_1( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\n\nvoid main(){\n  float noise = snoise_1_2(gl_FragCoord.xy / resolution.y / 50.0);\n  vec2 texCoord = vec2(\n    vUv.x + (sin((time + noise) * 100.0) * 2.0 / resolution.x) * noiseCoefficient,\n    vUv.y + (cos((time + noise) * 60.0) * 2.0 / resolution.y) * noiseCoefficient\n  );\n  gl_FragColor = texture2D(texture, texCoord);\n}\n"
}]);