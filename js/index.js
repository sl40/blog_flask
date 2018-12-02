!function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {exports: {}, id: i, loaded: !1};
        return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    t.exports = n(1)
}, function (t, e, n) {
    var i;
    i = n(2), $(function () {
        return new i
    })
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e) s.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, s = {}.hasOwnProperty;
    i = n(3), r = function (t) {
        function e() {
            e.__super__.constructor.call(this, "index")
        }

        return o(e, t), e.prototype.start = function () {
            tkmh.animateFromTtl()
        }, e
    }(i), t.exports = r
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    r = n(4), i = function () {
        function t(t) {
            this.id = null != t ? t : "", this.resizeSearchPanel = o(this.resizeSearchPanel, this), tkmh.currentContents = this
        }

        return t.prototype.reset = function () {
        }, t.prototype.start = function () {
        }, t.prototype.init = function () {
            this.$window = $(window), this.$body = $("body"), this.$contents = $("#contents"), this.$contentsInner = $("#contentsInner"), this.$mainVisual = $("#mainVisual"), this.$globalHeader = $("#globalHeader")
        }, t.prototype.initThumbs = function () {
            this.initImgs(".articles .thumb img")
        }, t.prototype.initImgs = function (t) {
            this.$contentsInner.find(t).each(function (t, e) {
                return utils.preloadImg(e.src).then(function () {
                    return $(e).one(utils.transitionend(), function (t) {
                        return t.stopPropagation(), !1
                    }).addClass("loaded")
                })
            })
        }, t.prototype.initThumbsInteraction = function (t, e, n) {
            var i;
            null == e && (e = 10), null == n && (n = 10), utils.isDesktop && (i = this, this.thumbs = [], this.$contentsInner.find(t).each(function (t, o) {
                var s;
                return s = new r($(this), e, n), i.thumbs.push(s), s.init()
            }))
        }, t.prototype.disposeThumbsInteraction = function () {
            var t, e, n, i;
            if (utils.isDesktop) for (n = this.thumbs, t = 0, e = n.length; t < e; t++) i = n[t], i.dispose()
        }, t.prototype.initBtnBack = function (t) {
            this.$btnBack = this.$searchPanel.find(".btnBack").on("click", function (e) {
                return function (e) {
                    return tkmh.back("/" + t + "/"), !1
                }
            }(this))
        }, t.prototype.resetBtnBack = function () {
            this.$btnBack.off("click")
        }, t.prototype.initSearchPanel = function (t) {
            var e, n;
            this.$searchPanel = $("#searchPanel"), this.$categories = this.$searchPanel.find(".categories"), this.$tags = this.$searchPanel.find(".tags"), this.$monthlyArchives = this.$searchPanel.find(".monthlyArchives"), this.$keyword = this.$searchPanel.find(".keyword"), e = this.$keyword.find("input"), this.$keyword.find(".btnSubmit").on("click", function (n) {
                return function (n) {
                    return tkmh.searchByKeyword(t, "?s=" + e.val()), !1
                }
            }(this)), n = function (t) {
                return function (t, e, n) {
                    return null == n && (n = !0), n ? (t.toggleClass("closed"), e.toggleClass("closed")) : (t.addClass("closed"), e.addClass("closed"))
                }
            }(this), this.$btnCategories = this.$searchPanel.find(".btnCategories").on("click", function (t) {
                return function (e) {
                    return n(t.$btnCategories, t.$categories), n(t.$btnTags, t.$tags, !1), n(t.$btnMonthlyArchives, t.$monthlyArchives, !1), n(t.$btnKeyword, t.$keyword, !1), !1
                }
            }(this)), this.$btnTags = this.$searchPanel.find(".btnTags").on("click", function (t) {
                return function (e) {
                    return n(t.$btnCategories, t.$categories, !1), n(t.$btnTags, t.$tags), n(t.$btnMonthlyArchives, t.$monthlyArchives, !1), n(t.$btnKeyword, t.$keyword, !1), !1
                }
            }(this)), this.$btnMonthlyArchives = this.$searchPanel.find(".btnMonthlyArchives").on("click", function (t) {
                return function (e) {
                    return n(t.$btnCategories, t.$categories, !1), n(t.$btnTags, t.$tags, !1), n(t.$btnMonthlyArchives, t.$monthlyArchives), n(t.$btnKeyword, t.$keyword, !1), !1
                }
            }(this)), this.$btnKeyword = this.$searchPanel.find(".btnKeyword").on("click", function (t) {
                return function (e) {
                    return n(t.$btnCategories, t.$categories, !1), n(t.$btnTags, t.$tags, !1), n(t.$btnMonthlyArchives, t.$monthlyArchives, !1), n(t.$btnKeyword, t.$keyword), !1
                }
            }(this))
        }, t.prototype.resizeSearchPanel = function () {
            this.$categories.css("height", this.$categories.find("ul").outerHeight()), this.$tags.css("height", this.$tags.find("ul").outerHeight()), this.$monthlyArchives.css("height", this.$monthlyArchives.find("ul").outerHeight()), this.$keyword.css("height", this.$keyword.find("form").outerHeight())
        }, t.prototype.resetSearchPanel = function () {
            this.$btnCategories.off("click"), this.$btnTags.off("click"), this.$btnMonthlyArchives.off("click"), this.$btnKeyword.off("click")
        }, t
    }(), t.exports = i
}, function (t, e, n) {
    var i, r = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    i = function () {
        function t(t, e, n) {
            this.$container = t, this.widthSegments = null != e ? e : 20, this.heightSegments = null != n ? n : 10, this.resize = r(this.resize, this), this.draw = r(this.draw, this), this.isWebGLSupported = !1
        }

        var e;
        return e = 100, t.prototype.init = function (t) {
            Detector.webgl ? this.initWebGL(t) : (log("not supported"), "function" == typeof t && t())
        }, t.prototype.initWebGL = function (t) {
            var i, r, o, s, a, h, u, c;
            for (this.isWebGLSupported = !0, this.width = this.$container.outerWidth(), this.height = this.$container.outerHeight(), this.renderer = new THREE.WebGLRenderer({
                alpha: !0,
                antialias: !0
            }), this.$container.get(0).appendChild(this.renderer.domElement), u = Math.min(window.devicePixelRatio || 1, 2), this.renderer.setPixelRatio(u), this.scene = new THREE.Scene, this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1e3), this.camera.position.set(0, 0, 1), this.scene.add(this.camera), h = (this.widthSegments + 1) * (this.heightSegments + 1), a = [], r = s = 0, c = h; 0 <= c ? s < c : s > c; r = 0 <= c ? ++s : --s) a.push(utils.map(Math.random(), 0, 1, -1, 1, !0));
            this.geometry = new THREE.PlaneBufferGeometry(e, e, this.widthSegments, this.heightSegments), this.geometry.addAttribute("vertexIndex", new THREE.BufferAttribute(new Uint16Array(_.range(h)), 1)), this.geometry.addAttribute("noiseValue", new THREE.BufferAttribute(new Float32Array(a), 1)), a = null, this.material = new THREE.RawShaderMaterial({
                vertexShader: n(5),
                fragmentShader: n(6),
                transparent: !0,
                side: THREE.DoubleSide,
                uniforms: {animationParam: {type: "1f", value: 0}, texture: {type: "t"}}
            }), this.mesh = new THREE.Mesh(this.geometry, this.material), this.scene.add(this.mesh), i = this.$container.find("img"), o = i.attr("src"), this.material.uniforms.texture.value = (new THREE.TextureLoader).load(o, function (t) {
                return function (e) {
                    return t.resize(), t.draw(), i.remove(), i = null, t.$container.find(".detail").remove()
                }
            }(this)), this.$container.on({
                mouseover: function (t) {
                    return function () {
                        return TweenMax.to(t.material.uniforms.animationParam, 1.4, {
                            value: 1,
                            ease: Linear.easeNone,
                            overwrite: !0,
                            onUpdate: function () {
                                return t.draw()
                            }
                        })
                    }
                }(this), mouseout: function (t) {
                    return function () {
                        return TweenMax.to(t.material.uniforms.animationParam, 1.4, {
                            value: 0,
                            ease: Linear.easeNone,
                            overwrite: !0,
                            onUpdate: function () {
                                return t.draw()
                            }
                        })
                    }
                }(this)
            })
        }, t.prototype.draw = function () {
            this.renderer.render(this.scene, this.camera)
        }, t.prototype.resizeMesh = function () {
            this.mesh.scale.set(this.width / e, this.height / e, 1)
        }, t.prototype.dispose = function () {
            this.$container.off("mouseover"), this.$container.off("mouseout"), this.geometry.dispose(), this.material.uniforms.texture.value.dispose(), this.material.dispose(), this.scene.remove(this.mesh), this.scene.remove(this.camera), this.renderer.dispose()
        }, t.prototype.resize = function () {
            var t;
            this.width = this.$container.outerWidth(), this.height = this.$container.outerHeight(), this.camera.aspect = this.width / this.height, this.camera.updateProjectionMatrix(), t = -(this.height / 2) / Math.tan(this.camera.fov * Math.PI / 180 / 2), this.camera.position.set(0, 0, -t), this.resizeMesh(), this.renderer.setSize(this.width, this.height)
        }, t
    }(), t.exports = i
}, function (t, e) {
    t.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nattribute float vertexIndex;\nattribute float noiseValue;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float animationParam;\n\nvarying vec2 vUv;\n\nfloat map_1_0(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\n  if(clamp == true) {\n    if(value < inputMin) return outputMin;\n    if(value > inputMax) return outputMax;\n  }\n\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\n  return ((value - inputMin) * p) + outputMin;\n}\n\n\nfloat exponentialInOut_2_1(float t) {\n  return t == 0.0 || t == 1.0\n    ? t\n    : t < 0.5\n      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)\n      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;\n}\n\n\n\n\nfloat getAnimationParam(float animationParam, float randomValue) {\n  float p = clamp(-map_1_0(randomValue, -1.0, 1.0, 0.0, 0.5, true) + animationParam * 1.6, 0.0, 1.0);\n  p = exponentialInOut_2_1(p);\n  return p;\n}\n\nvoid main() {\n  vUv = uv;\n  vec3 pos = position;\n  float p = getAnimationParam(animationParam, noiseValue);\n  pos.y += p * -120.0;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n"
}, function (t, e) {
    t.exports = "precision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D texture;\nvarying vec2 vUv;\n\nvoid main(){\n  gl_FragColor = texture2D(texture, vUv);\n}\n"
}]);