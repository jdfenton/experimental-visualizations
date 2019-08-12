!(function(t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = {i: r, l: !1, exports: {}});
    return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: r});
    }),
    (e.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(t, '__esModule', {value: !0});
    }),
    (e.t = function(t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, 'default', {enumerable: !0, value: t}),
        2 & n && 'string' != typeof t)
      )
        for (var i in t)
          e.d(
            r,
            i,
            function(n) {
              return t[n];
            }.bind(null, i)
          );
      return r;
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, 'a', n), n;
    }),
    (e.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = '/'),
    e((e.s = 24));
})([
  function(t, n, e) {
    'use strict';
    var r = function(t, n, e) {
      (t.prototype = n.prototype = e), (e.constructor = t);
    };
    function i(t, n) {
      var e = Object.create(t.prototype);
      for (var r in n) e[r] = n[r];
      return e;
    }
    function u() {}
    var o = '\\s*([+-]?\\d+)\\s*',
      a = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
      f = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
      c = /^#([0-9a-f]{3})$/,
      s = /^#([0-9a-f]{6})$/,
      l = new RegExp('^rgb\\(' + [o, o, o] + '\\)$'),
      h = new RegExp('^rgb\\(' + [f, f, f] + '\\)$'),
      d = new RegExp('^rgba\\(' + [o, o, o, a] + '\\)$'),
      p = new RegExp('^rgba\\(' + [f, f, f, a] + '\\)$'),
      _ = new RegExp('^hsl\\(' + [a, f, f] + '\\)$'),
      v = new RegExp('^hsla\\(' + [a, f, f, a] + '\\)$'),
      b = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
    function g(t) {
      var n;
      return (
        (t = (t + '').trim().toLowerCase()),
        (n = c.exec(t))
          ? new C(
              (((n = parseInt(n[1], 16)) >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (240 & n),
              ((15 & n) << 4) | (15 & n),
              1
            )
          : (n = s.exec(t))
          ? y(parseInt(n[1], 16))
          : (n = l.exec(t))
          ? new C(n[1], n[2], n[3], 1)
          : (n = h.exec(t))
          ? new C((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
          : (n = d.exec(t))
          ? m(n[1], n[2], n[3], n[4])
          : (n = p.exec(t))
          ? m((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
          : (n = _.exec(t))
          ? R(n[1], n[2] / 100, n[3] / 100, 1)
          : (n = v.exec(t))
          ? R(n[1], n[2] / 100, n[3] / 100, n[4])
          : b.hasOwnProperty(t)
          ? y(b[t])
          : 'transparent' === t
          ? new C(NaN, NaN, NaN, 0)
          : null
      );
    }
    function y(t) {
      return new C((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function m(t, n, e, r) {
      return r <= 0 && (t = n = e = NaN), new C(t, n, e, r);
    }
    function x(t) {
      return (
        t instanceof u || (t = g(t)),
        t ? new C((t = t.rgb()).r, t.g, t.b, t.opacity) : new C()
      );
    }
    function w(t, n, e, r) {
      return 1 === arguments.length ? x(t) : new C(t, n, e, null == r ? 1 : r);
    }
    function C(t, n, e, r) {
      (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
    }
    function M(t) {
      return (
        ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? '0' : '') +
        t.toString(16)
      );
    }
    function R(t, n, e, r) {
      return (
        r <= 0
          ? (t = n = e = NaN)
          : e <= 0 || e >= 1
          ? (t = n = NaN)
          : n <= 0 && (t = NaN),
        new T(t, n, e, r)
      );
    }
    function E(t, n, e, r) {
      return 1 === arguments.length
        ? (function(t) {
            if (t instanceof T) return new T(t.h, t.s, t.l, t.opacity);
            if ((t instanceof u || (t = g(t)), !t)) return new T();
            if (t instanceof T) return t;
            var n = (t = t.rgb()).r / 255,
              e = t.g / 255,
              r = t.b / 255,
              i = Math.min(n, e, r),
              o = Math.max(n, e, r),
              a = NaN,
              f = o - i,
              c = (o + i) / 2;
            return (
              f
                ? ((a =
                    n === o
                      ? (e - r) / f + 6 * (e < r)
                      : e === o
                      ? (r - n) / f + 2
                      : (n - e) / f + 4),
                  (f /= c < 0.5 ? o + i : 2 - o - i),
                  (a *= 60))
                : (f = c > 0 && c < 1 ? 0 : a),
              new T(a, f, c, t.opacity)
            );
          })(t)
        : new T(t, n, e, null == r ? 1 : r);
    }
    function T(t, n, e, r) {
      (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
    }
    function N(t, n, e) {
      return (
        255 *
        (t < 60
          ? n + ((e - n) * t) / 60
          : t < 180
          ? e
          : t < 240
          ? n + ((e - n) * (240 - t)) / 60
          : n)
      );
    }
    r(u, g, {
      displayable: function() {
        return this.rgb().displayable();
      },
      hex: function() {
        return this.rgb().hex();
      },
      toString: function() {
        return this.rgb() + '';
      },
    }),
      r(
        C,
        w,
        i(u, {
          brighter: function(t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new C(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker: function(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new C(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb: function() {
            return this;
          },
          displayable: function() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: function() {
            return '#' + M(this.r) + M(this.g) + M(this.b);
          },
          toString: function() {
            var t = this.opacity;
            return (
              (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                ? 'rgb('
                : 'rgba(') +
              Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
              ', ' +
              Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
              ', ' +
              Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
              (1 === t ? ')' : ', ' + t + ')')
            );
          },
        })
      ),
      r(
        T,
        E,
        i(u, {
          brighter: function(t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new T(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new T(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function() {
            var t = (this.h % 360) + 360 * (this.h < 0),
              n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              e = this.l,
              r = e + (e < 0.5 ? e : 1 - e) * n,
              i = 2 * e - r;
            return new C(
              N(t >= 240 ? t - 240 : t + 120, i, r),
              N(t, i, r),
              N(t < 120 ? t + 240 : t - 120, i, r),
              this.opacity
            );
          },
          displayable: function() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
        })
      );
    var A = Math.PI / 180,
      O = 180 / Math.PI,
      U = 0.96422,
      S = 1,
      k = 0.82521,
      Y = 4 / 29,
      D = 6 / 29,
      I = 3 * D * D,
      j = D * D * D;
    function L(t) {
      if (t instanceof B) return new B(t.l, t.a, t.b, t.opacity);
      if (t instanceof G) return Z(t);
      t instanceof C || (t = x(t));
      var n,
        e,
        r = H(t.r),
        i = H(t.g),
        u = H(t.b),
        o = z((0.2225045 * r + 0.7168786 * i + 0.0606169 * u) / S);
      return (
        r === i && i === u
          ? (n = e = o)
          : ((n = z((0.4360747 * r + 0.3850649 * i + 0.1430804 * u) / U)),
            (e = z((0.0139322 * r + 0.0971045 * i + 0.7141733 * u) / k))),
        new B(116 * o - 16, 500 * (n - o), 200 * (o - e), t.opacity)
      );
    }
    function P(t, n, e, r) {
      return 1 === arguments.length ? L(t) : new B(t, n, e, null == r ? 1 : r);
    }
    function B(t, n, e, r) {
      (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
    }
    function z(t) {
      return t > j ? Math.pow(t, 1 / 3) : t / I + Y;
    }
    function F(t) {
      return t > D ? t * t * t : I * (t - Y);
    }
    function q(t) {
      return (
        255 *
        (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
      );
    }
    function H(t) {
      return (t /= 255) <= 0.04045
        ? t / 12.92
        : Math.pow((t + 0.055) / 1.055, 2.4);
    }
    function $(t) {
      if (t instanceof G) return new G(t.h, t.c, t.l, t.opacity);
      if ((t instanceof B || (t = L(t)), 0 === t.a && 0 === t.b))
        return new G(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
      var n = Math.atan2(t.b, t.a) * O;
      return new G(
        n < 0 ? n + 360 : n,
        Math.sqrt(t.a * t.a + t.b * t.b),
        t.l,
        t.opacity
      );
    }
    function W(t, n, e, r) {
      return 1 === arguments.length ? $(t) : new G(t, n, e, null == r ? 1 : r);
    }
    function G(t, n, e, r) {
      (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
    }
    function Z(t) {
      if (isNaN(t.h)) return new B(t.l, 0, 0, t.opacity);
      var n = t.h * A;
      return new B(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }
    r(
      B,
      P,
      i(u, {
        brighter: function(t) {
          return new B(
            this.l + 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          );
        },
        darker: function(t) {
          return new B(
            this.l - 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          );
        },
        rgb: function() {
          var t = (this.l + 16) / 116,
            n = isNaN(this.a) ? t : t + this.a / 500,
            e = isNaN(this.b) ? t : t - this.b / 200;
          return new C(
            q(
              3.1338561 * (n = U * F(n)) -
                1.6168667 * (t = S * F(t)) -
                0.4906146 * (e = k * F(e))
            ),
            q(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
            q(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
            this.opacity
          );
        },
      })
    ),
      r(
        G,
        W,
        i(u, {
          brighter: function(t) {
            return new G(
              this.h,
              this.c,
              this.l + 18 * (null == t ? 1 : t),
              this.opacity
            );
          },
          darker: function(t) {
            return new G(
              this.h,
              this.c,
              this.l - 18 * (null == t ? 1 : t),
              this.opacity
            );
          },
          rgb: function() {
            return Z(this).rgb();
          },
        })
      );
    var V = -0.14861,
      X = 1.78277,
      K = -0.29227,
      Q = -0.90649,
      J = 1.97294,
      tt = J * Q,
      nt = J * X,
      et = X * K - Q * V;
    function rt(t, n, e, r) {
      return 1 === arguments.length
        ? (function(t) {
            if (t instanceof it) return new it(t.h, t.s, t.l, t.opacity);
            t instanceof C || (t = x(t));
            var n = t.r / 255,
              e = t.g / 255,
              r = t.b / 255,
              i = (et * r + tt * n - nt * e) / (et + tt - nt),
              u = r - i,
              o = (J * (e - i) - K * u) / Q,
              a = Math.sqrt(o * o + u * u) / (J * i * (1 - i)),
              f = a ? Math.atan2(o, u) * O - 120 : NaN;
            return new it(f < 0 ? f + 360 : f, a, i, t.opacity);
          })(t)
        : new it(t, n, e, null == r ? 1 : r);
    }
    function it(t, n, e, r) {
      (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
    }
    r(
      it,
      rt,
      i(u, {
        brighter: function(t) {
          return (
            (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
            new it(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker: function(t) {
          return (
            (t = null == t ? 0.7 : Math.pow(0.7, t)),
            new it(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb: function() {
          var t = isNaN(this.h) ? 0 : (this.h + 120) * A,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            r = Math.cos(t),
            i = Math.sin(t);
          return new C(
            255 * (n + e * (V * r + X * i)),
            255 * (n + e * (K * r + Q * i)),
            255 * (n + e * (J * r)),
            this.opacity
          );
        },
      })
    ),
      e.d(n, 'a', function() {
        return g;
      }),
      e.d(n, 'f', function() {
        return w;
      }),
      e.d(n, 'd', function() {
        return E;
      }),
      e.d(n, 'e', function() {
        return P;
      }),
      e.d(n, 'c', function() {
        return W;
      }),
      e.d(n, 'b', function() {
        return rt;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = 'http://www.w3.org/1999/xhtml',
      i = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: r,
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      },
      u = function(t) {
        var n = (t += ''),
          e = n.indexOf(':');
        return (
          e >= 0 && 'xmlns' !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
          i.hasOwnProperty(n) ? {space: i[n], local: t} : t
        );
      };
    var o = function(t) {
      var n = u(t);
      return (n.local
        ? function(t) {
            return function() {
              return this.ownerDocument.createElementNS(t.space, t.local);
            };
          }
        : function(t) {
            return function() {
              var n = this.ownerDocument,
                e = this.namespaceURI;
              return e === r && n.documentElement.namespaceURI === r
                ? n.createElement(t)
                : n.createElementNS(e, t);
            };
          })(n);
    };
    function a() {}
    var f = function(t) {
      return null == t
        ? a
        : function() {
            return this.querySelector(t);
          };
    };
    function c() {
      return [];
    }
    var s = function(t) {
        return null == t
          ? c
          : function() {
              return this.querySelectorAll(t);
            };
      },
      l = function(t) {
        return function() {
          return this.matches(t);
        };
      },
      h = function(t) {
        return new Array(t.length);
      };
    function d(t, n) {
      (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = n);
    }
    d.prototype = {
      constructor: d,
      appendChild: function(t) {
        return this._parent.insertBefore(t, this._next);
      },
      insertBefore: function(t, n) {
        return this._parent.insertBefore(t, n);
      },
      querySelector: function(t) {
        return this._parent.querySelector(t);
      },
      querySelectorAll: function(t) {
        return this._parent.querySelectorAll(t);
      },
    };
    var p = '$';
    function _(t, n, e, r, i, u) {
      for (var o, a = 0, f = n.length, c = u.length; a < c; ++a)
        (o = n[a])
          ? ((o.__data__ = u[a]), (r[a] = o))
          : (e[a] = new d(t, u[a]));
      for (; a < f; ++a) (o = n[a]) && (i[a] = o);
    }
    function v(t, n, e, r, i, u, o) {
      var a,
        f,
        c,
        s = {},
        l = n.length,
        h = u.length,
        _ = new Array(l);
      for (a = 0; a < l; ++a)
        (f = n[a]) &&
          ((_[a] = c = p + o.call(f, f.__data__, a, n)),
          c in s ? (i[a] = f) : (s[c] = f));
      for (a = 0; a < h; ++a)
        (f = s[(c = p + o.call(t, u[a], a, u))])
          ? ((r[a] = f), (f.__data__ = u[a]), (s[c] = null))
          : (e[a] = new d(t, u[a]));
      for (a = 0; a < l; ++a) (f = n[a]) && s[_[a]] === f && (i[a] = f);
    }
    function b(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }
    function g(t) {
      return function() {
        this.removeAttribute(t);
      };
    }
    function y(t) {
      return function() {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function m(t, n) {
      return function() {
        this.setAttribute(t, n);
      };
    }
    function x(t, n) {
      return function() {
        this.setAttributeNS(t.space, t.local, n);
      };
    }
    function w(t, n) {
      return function() {
        var e = n.apply(this, arguments);
        null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
      };
    }
    function C(t, n) {
      return function() {
        var e = n.apply(this, arguments);
        null == e
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, e);
      };
    }
    var M = function(t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    };
    function R(t) {
      return function() {
        this.style.removeProperty(t);
      };
    }
    function E(t, n, e) {
      return function() {
        this.style.setProperty(t, n, e);
      };
    }
    function T(t, n, e) {
      return function() {
        var r = n.apply(this, arguments);
        null == r
          ? this.style.removeProperty(t)
          : this.style.setProperty(t, r, e);
      };
    }
    function N(t, n) {
      return (
        t.style.getPropertyValue(n) ||
        M(t)
          .getComputedStyle(t, null)
          .getPropertyValue(n)
      );
    }
    function A(t) {
      return function() {
        delete this[t];
      };
    }
    function O(t, n) {
      return function() {
        this[t] = n;
      };
    }
    function U(t, n) {
      return function() {
        var e = n.apply(this, arguments);
        null == e ? delete this[t] : (this[t] = e);
      };
    }
    function S(t) {
      return t.trim().split(/^|\s+/);
    }
    function k(t) {
      return t.classList || new Y(t);
    }
    function Y(t) {
      (this._node = t), (this._names = S(t.getAttribute('class') || ''));
    }
    function D(t, n) {
      for (var e = k(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
    }
    function I(t, n) {
      for (var e = k(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
    }
    function j(t) {
      return function() {
        D(this, t);
      };
    }
    function L(t) {
      return function() {
        I(this, t);
      };
    }
    function P(t, n) {
      return function() {
        (n.apply(this, arguments) ? D : I)(this, t);
      };
    }
    Y.prototype = {
      add: function(t) {
        this._names.indexOf(t) < 0 &&
          (this._names.push(t),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      remove: function(t) {
        var n = this._names.indexOf(t);
        n >= 0 &&
          (this._names.splice(n, 1),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      contains: function(t) {
        return this._names.indexOf(t) >= 0;
      },
    };
    function B() {
      this.textContent = '';
    }
    function z(t) {
      return function() {
        this.textContent = t;
      };
    }
    function F(t) {
      return function() {
        var n = t.apply(this, arguments);
        this.textContent = null == n ? '' : n;
      };
    }
    function q() {
      this.innerHTML = '';
    }
    function H(t) {
      return function() {
        this.innerHTML = t;
      };
    }
    function $(t) {
      return function() {
        var n = t.apply(this, arguments);
        this.innerHTML = null == n ? '' : n;
      };
    }
    function W() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function G() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function Z() {
      return null;
    }
    function V() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    function X() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }
    function K() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }
    var Q = {},
      J = null;
    'undefined' != typeof document &&
      ('onmouseenter' in document.documentElement ||
        (Q = {mouseenter: 'mouseover', mouseleave: 'mouseout'}));
    function tt(t, n, e) {
      return (
        (t = nt(t, n, e)),
        function(n) {
          var e = n.relatedTarget;
          (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
            t.call(this, n);
        }
      );
    }
    function nt(t, n, e) {
      return function(r) {
        var i = J;
        J = r;
        try {
          t.call(this, this.__data__, n, e);
        } finally {
          J = i;
        }
      };
    }
    function et(t) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function(t) {
          var n = '',
            e = t.indexOf('.');
          return (
            e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
            {type: t, name: n}
          );
        });
    }
    function rt(t) {
      return function() {
        var n = this.__on;
        if (n) {
          for (var e, r = 0, i = -1, u = n.length; r < u; ++r)
            (e = n[r]),
              (t.type && e.type !== t.type) || e.name !== t.name
                ? (n[++i] = e)
                : this.removeEventListener(e.type, e.listener, e.capture);
          ++i ? (n.length = i) : delete this.__on;
        }
      };
    }
    function it(t, n, e) {
      var r = Q.hasOwnProperty(t.type) ? tt : nt;
      return function(i, u, o) {
        var a,
          f = this.__on,
          c = r(n, u, o);
        if (f)
          for (var s = 0, l = f.length; s < l; ++s)
            if ((a = f[s]).type === t.type && a.name === t.name)
              return (
                this.removeEventListener(a.type, a.listener, a.capture),
                this.addEventListener(
                  a.type,
                  (a.listener = c),
                  (a.capture = e)
                ),
                void (a.value = n)
              );
        this.addEventListener(t.type, c, e),
          (a = {type: t.type, name: t.name, value: n, listener: c, capture: e}),
          f ? f.push(a) : (this.__on = [a]);
      };
    }
    function ut(t, n, e, r) {
      var i = J;
      (t.sourceEvent = J), (J = t);
      try {
        return n.apply(e, r);
      } finally {
        J = i;
      }
    }
    function ot(t, n, e) {
      var r = M(t),
        i = r.CustomEvent;
      'function' == typeof i
        ? (i = new i(n, e))
        : ((i = r.document.createEvent('Event')),
          e
            ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
            : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i);
    }
    var at = [null];
    function ft(t, n) {
      (this._groups = t), (this._parents = n);
    }
    function ct() {
      return new ft([[document.documentElement]], at);
    }
    ft.prototype = ct.prototype = {
      constructor: ft,
      select: function(t) {
        'function' != typeof t && (t = f(t));
        for (
          var n = this._groups, e = n.length, r = new Array(e), i = 0;
          i < e;
          ++i
        )
          for (
            var u, o, a = n[i], c = a.length, s = (r[i] = new Array(c)), l = 0;
            l < c;
            ++l
          )
            (u = a[l]) &&
              (o = t.call(u, u.__data__, l, a)) &&
              ('__data__' in u && (o.__data__ = u.__data__), (s[l] = o));
        return new ft(r, this._parents);
      },
      selectAll: function(t) {
        'function' != typeof t && (t = s(t));
        for (
          var n = this._groups, e = n.length, r = [], i = [], u = 0;
          u < e;
          ++u
        )
          for (var o, a = n[u], f = a.length, c = 0; c < f; ++c)
            (o = a[c]) && (r.push(t.call(o, o.__data__, c, a)), i.push(o));
        return new ft(r, i);
      },
      filter: function(t) {
        'function' != typeof t && (t = l(t));
        for (
          var n = this._groups, e = n.length, r = new Array(e), i = 0;
          i < e;
          ++i
        )
          for (
            var u, o = n[i], a = o.length, f = (r[i] = []), c = 0;
            c < a;
            ++c
          )
            (u = o[c]) && t.call(u, u.__data__, c, o) && f.push(u);
        return new ft(r, this._parents);
      },
      data: function(t, n) {
        if (!t)
          return (
            (p = new Array(this.size())),
            (s = -1),
            this.each(function(t) {
              p[++s] = t;
            }),
            p
          );
        var e,
          r = n ? v : _,
          i = this._parents,
          u = this._groups;
        'function' != typeof t &&
          ((e = t),
          (t = function() {
            return e;
          }));
        for (
          var o = u.length,
            a = new Array(o),
            f = new Array(o),
            c = new Array(o),
            s = 0;
          s < o;
          ++s
        ) {
          var l = i[s],
            h = u[s],
            d = h.length,
            p = t.call(l, l && l.__data__, s, i),
            b = p.length,
            g = (f[s] = new Array(b)),
            y = (a[s] = new Array(b));
          r(l, h, g, y, (c[s] = new Array(d)), p, n);
          for (var m, x, w = 0, C = 0; w < b; ++w)
            if ((m = g[w])) {
              for (w >= C && (C = w + 1); !(x = y[C]) && ++C < b; );
              m._next = x || null;
            }
        }
        return ((a = new ft(a, i))._enter = f), (a._exit = c), a;
      },
      enter: function() {
        return new ft(this._enter || this._groups.map(h), this._parents);
      },
      exit: function() {
        return new ft(this._exit || this._groups.map(h), this._parents);
      },
      join: function(t, n, e) {
        var r = this.enter(),
          i = this,
          u = this.exit();
        return (
          (r = 'function' == typeof t ? t(r) : r.append(t + '')),
          null != n && (i = n(i)),
          null == e ? u.remove() : e(u),
          r && i ? r.merge(i).order() : i
        );
      },
      merge: function(t) {
        for (
          var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            u = Math.min(r, i),
            o = new Array(r),
            a = 0;
          a < u;
          ++a
        )
          for (
            var f,
              c = n[a],
              s = e[a],
              l = c.length,
              h = (o[a] = new Array(l)),
              d = 0;
            d < l;
            ++d
          )
            (f = c[d] || s[d]) && (h[d] = f);
        for (; a < r; ++a) o[a] = n[a];
        return new ft(o, this._parents);
      },
      order: function() {
        for (var t = this._groups, n = -1, e = t.length; ++n < e; )
          for (var r, i = t[n], u = i.length - 1, o = i[u]; --u >= 0; )
            (r = i[u]) &&
              (o &&
                4 ^ r.compareDocumentPosition(o) &&
                o.parentNode.insertBefore(r, o),
              (o = r));
        return this;
      },
      sort: function(t) {
        function n(n, e) {
          return n && e ? t(n.__data__, e.__data__) : !n - !e;
        }
        t || (t = b);
        for (
          var e = this._groups, r = e.length, i = new Array(r), u = 0;
          u < r;
          ++u
        ) {
          for (
            var o, a = e[u], f = a.length, c = (i[u] = new Array(f)), s = 0;
            s < f;
            ++s
          )
            (o = a[s]) && (c[s] = o);
          c.sort(n);
        }
        return new ft(i, this._parents).order();
      },
      call: function() {
        var t = arguments[0];
        return (arguments[0] = this), t.apply(null, arguments), this;
      },
      nodes: function() {
        var t = new Array(this.size()),
          n = -1;
        return (
          this.each(function() {
            t[++n] = this;
          }),
          t
        );
      },
      node: function() {
        for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
          for (var r = t[n], i = 0, u = r.length; i < u; ++i) {
            var o = r[i];
            if (o) return o;
          }
        return null;
      },
      size: function() {
        var t = 0;
        return (
          this.each(function() {
            ++t;
          }),
          t
        );
      },
      empty: function() {
        return !this.node();
      },
      each: function(t) {
        for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
          for (var i, u = n[e], o = 0, a = u.length; o < a; ++o)
            (i = u[o]) && t.call(i, i.__data__, o, u);
        return this;
      },
      attr: function(t, n) {
        var e = u(t);
        if (arguments.length < 2) {
          var r = this.node();
          return e.local
            ? r.getAttributeNS(e.space, e.local)
            : r.getAttribute(e);
        }
        return this.each(
          (null == n
            ? e.local
              ? y
              : g
            : 'function' == typeof n
            ? e.local
              ? C
              : w
            : e.local
            ? x
            : m)(e, n)
        );
      },
      style: function(t, n, e) {
        return arguments.length > 1
          ? this.each(
              (null == n ? R : 'function' == typeof n ? T : E)(
                t,
                n,
                null == e ? '' : e
              )
            )
          : N(this.node(), t);
      },
      property: function(t, n) {
        return arguments.length > 1
          ? this.each((null == n ? A : 'function' == typeof n ? U : O)(t, n))
          : this.node()[t];
      },
      classed: function(t, n) {
        var e = S(t + '');
        if (arguments.length < 2) {
          for (var r = k(this.node()), i = -1, u = e.length; ++i < u; )
            if (!r.contains(e[i])) return !1;
          return !0;
        }
        return this.each(('function' == typeof n ? P : n ? j : L)(e, n));
      },
      text: function(t) {
        return arguments.length
          ? this.each(null == t ? B : ('function' == typeof t ? F : z)(t))
          : this.node().textContent;
      },
      html: function(t) {
        return arguments.length
          ? this.each(null == t ? q : ('function' == typeof t ? $ : H)(t))
          : this.node().innerHTML;
      },
      raise: function() {
        return this.each(W);
      },
      lower: function() {
        return this.each(G);
      },
      append: function(t) {
        var n = 'function' == typeof t ? t : o(t);
        return this.select(function() {
          return this.appendChild(n.apply(this, arguments));
        });
      },
      insert: function(t, n) {
        var e = 'function' == typeof t ? t : o(t),
          r = null == n ? Z : 'function' == typeof n ? n : f(n);
        return this.select(function() {
          return this.insertBefore(
            e.apply(this, arguments),
            r.apply(this, arguments) || null
          );
        });
      },
      remove: function() {
        return this.each(V);
      },
      clone: function(t) {
        return this.select(t ? K : X);
      },
      datum: function(t) {
        return arguments.length
          ? this.property('__data__', t)
          : this.node().__data__;
      },
      on: function(t, n, e) {
        var r,
          i,
          u = et(t + ''),
          o = u.length;
        if (!(arguments.length < 2)) {
          for (a = n ? it : rt, null == e && (e = !1), r = 0; r < o; ++r)
            this.each(a(u[r], n, e));
          return this;
        }
        var a = this.node().__on;
        if (a)
          for (var f, c = 0, s = a.length; c < s; ++c)
            for (r = 0, f = a[c]; r < o; ++r)
              if ((i = u[r]).type === f.type && i.name === f.name)
                return f.value;
      },
      dispatch: function(t, n) {
        return this.each(
          ('function' == typeof n
            ? function(t, n) {
                return function() {
                  return ot(this, t, n.apply(this, arguments));
                };
              }
            : function(t, n) {
                return function() {
                  return ot(this, t, n);
                };
              })(t, n)
        );
      },
    };
    var st = ct,
      lt = function(t) {
        return 'string' == typeof t
          ? new ft([[document.querySelector(t)]], [document.documentElement])
          : new ft([[t]], at);
      },
      ht = function(t) {
        return lt(o(t).call(document.documentElement));
      },
      dt = 0;
    function pt() {
      return new _t();
    }
    function _t() {
      this._ = '@' + (++dt).toString(36);
    }
    _t.prototype = pt.prototype = {
      constructor: _t,
      get: function(t) {
        for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
        return t[n];
      },
      set: function(t, n) {
        return (t[this._] = n);
      },
      remove: function(t) {
        return this._ in t && delete t[this._];
      },
      toString: function() {
        return this._;
      },
    };
    var vt = function() {
        for (var t, n = J; (t = n.sourceEvent); ) n = t;
        return n;
      },
      bt = function(t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
          var r = e.createSVGPoint();
          return (
            (r.x = n.clientX),
            (r.y = n.clientY),
            [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
          );
        }
        var i = t.getBoundingClientRect();
        return [
          n.clientX - i.left - t.clientLeft,
          n.clientY - i.top - t.clientTop,
        ];
      },
      gt = function(t) {
        var n = vt();
        return n.changedTouches && (n = n.changedTouches[0]), bt(t, n);
      },
      yt = function(t) {
        return 'string' == typeof t
          ? new ft([document.querySelectorAll(t)], [document.documentElement])
          : new ft([null == t ? [] : t], at);
      },
      mt = function(t, n, e) {
        arguments.length < 3 && ((e = n), (n = vt().changedTouches));
        for (var r, i = 0, u = n ? n.length : 0; i < u; ++i)
          if ((r = n[i]).identifier === e) return bt(t, r);
        return null;
      },
      xt = function(t, n) {
        null == n && (n = vt().touches);
        for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e)
          i[e] = bt(t, n[e]);
        return i;
      };
    e.d(n, 'create', function() {
      return ht;
    }),
      e.d(n, 'creator', function() {
        return o;
      }),
      e.d(n, 'local', function() {
        return pt;
      }),
      e.d(n, 'matcher', function() {
        return l;
      }),
      e.d(n, 'mouse', function() {
        return gt;
      }),
      e.d(n, 'namespace', function() {
        return u;
      }),
      e.d(n, 'namespaces', function() {
        return i;
      }),
      e.d(n, 'clientPoint', function() {
        return bt;
      }),
      e.d(n, 'select', function() {
        return lt;
      }),
      e.d(n, 'selectAll', function() {
        return yt;
      }),
      e.d(n, 'selection', function() {
        return st;
      }),
      e.d(n, 'selector', function() {
        return f;
      }),
      e.d(n, 'selectorAll', function() {
        return s;
      }),
      e.d(n, 'style', function() {
        return N;
      }),
      e.d(n, 'touch', function() {
        return mt;
      }),
      e.d(n, 'touches', function() {
        return xt;
      }),
      e.d(n, 'window', function() {
        return M;
      }),
      e.d(n, 'event', function() {
        return J;
      }),
      e.d(n, 'customEvent', function() {
        return ut;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = e(0);
    function i(t, n, e, r, i) {
      var u = t * t,
        o = u * t;
      return (
        ((1 - 3 * t + 3 * u - o) * n +
          (4 - 6 * u + 3 * o) * e +
          (1 + 3 * t + 3 * u - 3 * o) * r +
          o * i) /
        6
      );
    }
    var u = function(t) {
        var n = t.length - 1;
        return function(e) {
          var r =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            u = t[r],
            o = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * u - o,
            f = r < n - 1 ? t[r + 2] : 2 * o - u;
          return i((e - r / n) * n, a, u, o, f);
        };
      },
      o = function(t) {
        var n = t.length;
        return function(e) {
          var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
            u = t[(r + n - 1) % n],
            o = t[r % n],
            a = t[(r + 1) % n],
            f = t[(r + 2) % n];
          return i((e - r / n) * n, u, o, a, f);
        };
      },
      a = function(t) {
        return function() {
          return t;
        };
      };
    function f(t, n) {
      return function(e) {
        return t + e * n;
      };
    }
    function c(t, n) {
      var e = n - t;
      return e
        ? f(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
        : a(isNaN(t) ? n : t);
    }
    function s(t) {
      return 1 == (t = +t)
        ? l
        : function(n, e) {
            return e - n
              ? (function(t, n, e) {
                  return (
                    (t = Math.pow(t, e)),
                    (n = Math.pow(n, e) - t),
                    (e = 1 / e),
                    function(r) {
                      return Math.pow(t + r * n, e);
                    }
                  );
                })(n, e, t)
              : a(isNaN(n) ? e : n);
          };
    }
    function l(t, n) {
      var e = n - t;
      return e ? f(t, e) : a(isNaN(t) ? n : t);
    }
    var h = (function t(n) {
      var e = s(n);
      function i(t, n) {
        var i = e((t = Object(r.f)(t)).r, (n = Object(r.f)(n)).r),
          u = e(t.g, n.g),
          o = e(t.b, n.b),
          a = l(t.opacity, n.opacity);
        return function(n) {
          return (
            (t.r = i(n)), (t.g = u(n)), (t.b = o(n)), (t.opacity = a(n)), t + ''
          );
        };
      }
      return (i.gamma = t), i;
    })(1);
    function d(t) {
      return function(n) {
        var e,
          i,
          u = n.length,
          o = new Array(u),
          a = new Array(u),
          f = new Array(u);
        for (e = 0; e < u; ++e)
          (i = Object(r.f)(n[e])),
            (o[e] = i.r || 0),
            (a[e] = i.g || 0),
            (f[e] = i.b || 0);
        return (
          (o = t(o)),
          (a = t(a)),
          (f = t(f)),
          (i.opacity = 1),
          function(t) {
            return (i.r = o(t)), (i.g = a(t)), (i.b = f(t)), i + '';
          }
        );
      };
    }
    var p = d(u),
      _ = d(o),
      v = function(t, n) {
        var e,
          r = n ? n.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          u = new Array(i),
          o = new Array(r);
        for (e = 0; e < i; ++e) u[e] = T(t[e], n[e]);
        for (; e < r; ++e) o[e] = n[e];
        return function(t) {
          for (e = 0; e < i; ++e) o[e] = u[e](t);
          return o;
        };
      },
      b = function(t, n) {
        var e = new Date();
        return (
          (n -= t = +t),
          function(r) {
            return e.setTime(t + n * r), e;
          }
        );
      },
      g = function(t, n) {
        return (
          (n -= t = +t),
          function(e) {
            return t + n * e;
          }
        );
      },
      y = function(t, n) {
        var e,
          r = {},
          i = {};
        for (e in ((null !== t && 'object' == typeof t) || (t = {}),
        (null !== n && 'object' == typeof n) || (n = {}),
        n))
          e in t ? (r[e] = T(t[e], n[e])) : (i[e] = n[e]);
        return function(t) {
          for (e in r) i[e] = r[e](t);
          return i;
        };
      },
      m = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      x = new RegExp(m.source, 'g');
    var w,
      C,
      M,
      R,
      E = function(t, n) {
        var e,
          r,
          i,
          u = (m.lastIndex = x.lastIndex = 0),
          o = -1,
          a = [],
          f = [];
        for (t += '', n += ''; (e = m.exec(t)) && (r = x.exec(n)); )
          (i = r.index) > u &&
            ((i = n.slice(u, i)), a[o] ? (a[o] += i) : (a[++o] = i)),
            (e = e[0]) === (r = r[0])
              ? a[o]
                ? (a[o] += r)
                : (a[++o] = r)
              : ((a[++o] = null), f.push({i: o, x: g(e, r)})),
            (u = x.lastIndex);
        return (
          u < n.length && ((i = n.slice(u)), a[o] ? (a[o] += i) : (a[++o] = i)),
          a.length < 2
            ? f[0]
              ? (function(t) {
                  return function(n) {
                    return t(n) + '';
                  };
                })(f[0].x)
              : (function(t) {
                  return function() {
                    return t;
                  };
                })(n)
            : ((n = f.length),
              function(t) {
                for (var e, r = 0; r < n; ++r) a[(e = f[r]).i] = e.x(t);
                return a.join('');
              })
        );
      },
      T = function(t, n) {
        var e,
          i = typeof n;
        return null == n || 'boolean' === i
          ? a(n)
          : ('number' === i
              ? g
              : 'string' === i
              ? (e = Object(r.a)(n))
                ? ((n = e), h)
                : E
              : n instanceof r.a
              ? h
              : n instanceof Date
              ? b
              : Array.isArray(n)
              ? v
              : ('function' != typeof n.valueOf &&
                  'function' != typeof n.toString) ||
                isNaN(n)
              ? y
              : g)(t, n);
      },
      N = function(t) {
        var n = t.length;
        return function(e) {
          return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
        };
      },
      A = function(t, n) {
        var e = c(+t, +n);
        return function(t) {
          var n = e(t);
          return n - 360 * Math.floor(n / 360);
        };
      },
      O = function(t, n) {
        return (
          (n -= t = +t),
          function(e) {
            return Math.round(t + n * e);
          }
        );
      },
      U = 180 / Math.PI,
      S = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1,
      },
      k = function(t, n, e, r, i, u) {
        var o, a, f;
        return (
          (o = Math.sqrt(t * t + n * n)) && ((t /= o), (n /= o)),
          (f = t * e + n * r) && ((e -= t * f), (r -= n * f)),
          (a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (f /= a)),
          t * r < n * e && ((t = -t), (n = -n), (f = -f), (o = -o)),
          {
            translateX: i,
            translateY: u,
            rotate: Math.atan2(n, t) * U,
            skewX: Math.atan(f) * U,
            scaleX: o,
            scaleY: a,
          }
        );
      };
    function Y(t, n, e, r) {
      function i(t) {
        return t.length ? t.pop() + ' ' : '';
      }
      return function(u, o) {
        var a = [],
          f = [];
        return (
          (u = t(u)),
          (o = t(o)),
          (function(t, r, i, u, o, a) {
            if (t !== i || r !== u) {
              var f = o.push('translate(', null, n, null, e);
              a.push({i: f - 4, x: g(t, i)}, {i: f - 2, x: g(r, u)});
            } else (i || u) && o.push('translate(' + i + n + u + e);
          })(u.translateX, u.translateY, o.translateX, o.translateY, a, f),
          (function(t, n, e, u) {
            t !== n
              ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                u.push({i: e.push(i(e) + 'rotate(', null, r) - 2, x: g(t, n)}))
              : n && e.push(i(e) + 'rotate(' + n + r);
          })(u.rotate, o.rotate, a, f),
          (function(t, n, e, u) {
            t !== n
              ? u.push({i: e.push(i(e) + 'skewX(', null, r) - 2, x: g(t, n)})
              : n && e.push(i(e) + 'skewX(' + n + r);
          })(u.skewX, o.skewX, a, f),
          (function(t, n, e, r, u, o) {
            if (t !== e || n !== r) {
              var a = u.push(i(u) + 'scale(', null, ',', null, ')');
              o.push({i: a - 4, x: g(t, e)}, {i: a - 2, x: g(n, r)});
            } else
              (1 === e && 1 === r) ||
                u.push(i(u) + 'scale(' + e + ',' + r + ')');
          })(u.scaleX, u.scaleY, o.scaleX, o.scaleY, a, f),
          (u = o = null),
          function(t) {
            for (var n, e = -1, r = f.length; ++e < r; )
              a[(n = f[e]).i] = n.x(t);
            return a.join('');
          }
        );
      };
    }
    var D = Y(
        function(t) {
          return 'none' === t
            ? S
            : (w ||
                ((w = document.createElement('DIV')),
                (C = document.documentElement),
                (M = document.defaultView)),
              (w.style.transform = t),
              (t = M.getComputedStyle(C.appendChild(w), null).getPropertyValue(
                'transform'
              )),
              C.removeChild(w),
              (t = t.slice(7, -1).split(',')),
              k(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
        },
        'px, ',
        'px)',
        'deg)'
      ),
      I = Y(
        function(t) {
          return null == t
            ? S
            : (R ||
                (R = document.createElementNS(
                  'http://www.w3.org/2000/svg',
                  'g'
                )),
              R.setAttribute('transform', t),
              (t = R.transform.baseVal.consolidate())
                ? ((t = t.matrix), k(t.a, t.b, t.c, t.d, t.e, t.f))
                : S);
        },
        ', ',
        ')',
        ')'
      ),
      j = Math.SQRT2;
    function L(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2;
    }
    var P = function(t, n) {
      var e,
        r,
        i = t[0],
        u = t[1],
        o = t[2],
        a = n[0],
        f = n[1],
        c = n[2],
        s = a - i,
        l = f - u,
        h = s * s + l * l;
      if (h < 1e-12)
        (r = Math.log(c / o) / j),
          (e = function(t) {
            return [i + t * s, u + t * l, o * Math.exp(j * t * r)];
          });
      else {
        var d = Math.sqrt(h),
          p = (c * c - o * o + 4 * h) / (2 * o * 2 * d),
          _ = (c * c - o * o - 4 * h) / (2 * c * 2 * d),
          v = Math.log(Math.sqrt(p * p + 1) - p),
          b = Math.log(Math.sqrt(_ * _ + 1) - _);
        (r = (b - v) / j),
          (e = function(t) {
            var n,
              e = t * r,
              a = L(v),
              f =
                (o / (2 * d)) *
                (a * ((n = j * e + v), ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                  (function(t) {
                    return ((t = Math.exp(t)) - 1 / t) / 2;
                  })(v));
            return [i + f * s, u + f * l, (o * a) / L(j * e + v)];
          });
      }
      return (e.duration = 1e3 * r), e;
    };
    function B(t) {
      return function(n, e) {
        var i = t((n = Object(r.d)(n)).h, (e = Object(r.d)(e)).h),
          u = l(n.s, e.s),
          o = l(n.l, e.l),
          a = l(n.opacity, e.opacity);
        return function(t) {
          return (
            (n.h = i(t)), (n.s = u(t)), (n.l = o(t)), (n.opacity = a(t)), n + ''
          );
        };
      };
    }
    var z = B(c),
      F = B(l);
    function q(t, n) {
      var e = l((t = Object(r.e)(t)).l, (n = Object(r.e)(n)).l),
        i = l(t.a, n.a),
        u = l(t.b, n.b),
        o = l(t.opacity, n.opacity);
      return function(n) {
        return (
          (t.l = e(n)), (t.a = i(n)), (t.b = u(n)), (t.opacity = o(n)), t + ''
        );
      };
    }
    function H(t) {
      return function(n, e) {
        var i = t((n = Object(r.c)(n)).h, (e = Object(r.c)(e)).h),
          u = l(n.c, e.c),
          o = l(n.l, e.l),
          a = l(n.opacity, e.opacity);
        return function(t) {
          return (
            (n.h = i(t)), (n.c = u(t)), (n.l = o(t)), (n.opacity = a(t)), n + ''
          );
        };
      };
    }
    var $ = H(c),
      W = H(l);
    function G(t) {
      return (function n(e) {
        function i(n, i) {
          var u = t((n = Object(r.b)(n)).h, (i = Object(r.b)(i)).h),
            o = l(n.s, i.s),
            a = l(n.l, i.l),
            f = l(n.opacity, i.opacity);
          return function(t) {
            return (
              (n.h = u(t)),
              (n.s = o(t)),
              (n.l = a(Math.pow(t, e))),
              (n.opacity = f(t)),
              n + ''
            );
          };
        }
        return (e = +e), (i.gamma = n), i;
      })(1);
    }
    var Z = G(c),
      V = G(l);
    function X(t, n) {
      for (
        var e = 0, r = n.length - 1, i = n[0], u = new Array(r < 0 ? 0 : r);
        e < r;

      )
        u[e] = t(i, (i = n[++e]));
      return function(t) {
        var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
        return u[n](t - n);
      };
    }
    var K = function(t, n) {
      for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
      return e;
    };
    e.d(n, 'interpolate', function() {
      return T;
    }),
      e.d(n, 'interpolateArray', function() {
        return v;
      }),
      e.d(n, 'interpolateBasis', function() {
        return u;
      }),
      e.d(n, 'interpolateBasisClosed', function() {
        return o;
      }),
      e.d(n, 'interpolateDate', function() {
        return b;
      }),
      e.d(n, 'interpolateDiscrete', function() {
        return N;
      }),
      e.d(n, 'interpolateHue', function() {
        return A;
      }),
      e.d(n, 'interpolateNumber', function() {
        return g;
      }),
      e.d(n, 'interpolateObject', function() {
        return y;
      }),
      e.d(n, 'interpolateRound', function() {
        return O;
      }),
      e.d(n, 'interpolateString', function() {
        return E;
      }),
      e.d(n, 'interpolateTransformCss', function() {
        return D;
      }),
      e.d(n, 'interpolateTransformSvg', function() {
        return I;
      }),
      e.d(n, 'interpolateZoom', function() {
        return P;
      }),
      e.d(n, 'interpolateRgb', function() {
        return h;
      }),
      e.d(n, 'interpolateRgbBasis', function() {
        return p;
      }),
      e.d(n, 'interpolateRgbBasisClosed', function() {
        return _;
      }),
      e.d(n, 'interpolateHsl', function() {
        return z;
      }),
      e.d(n, 'interpolateHslLong', function() {
        return F;
      }),
      e.d(n, 'interpolateLab', function() {
        return q;
      }),
      e.d(n, 'interpolateHcl', function() {
        return $;
      }),
      e.d(n, 'interpolateHclLong', function() {
        return W;
      }),
      e.d(n, 'interpolateCubehelix', function() {
        return Z;
      }),
      e.d(n, 'interpolateCubehelixLong', function() {
        return V;
      }),
      e.d(n, 'piecewise', function() {
        return X;
      }),
      e.d(n, 'quantize', function() {
        return K;
      });
  },
  function(t, n, e) {
    'use strict';
    e.d(n, 'b', function() {
      return r;
    }),
      e.d(n, 'f', function() {
        return i;
      }),
      e.d(n, 'd', function() {
        return u;
      }),
      e.d(n, 'c', function() {
        return o;
      }),
      e.d(n, 'g', function() {
        return a;
      }),
      e.d(n, 'a', function() {
        return f;
      }),
      e.d(n, 'e', function() {
        return c;
      });
    const r = 'ERROR',
      i = 'PLEASE RESIZE',
      u = 'LOADING DATA',
      o = 'Something went wrong:',
      a =
        'This visualization deserves more space! Please make your box bigger.',
      f = '...please be patient...',
      c =
        'M0 50.6532C0 42.1596 2.52489 35.7895 7.57468 31.5427C12.6245 26.8712 19.7783 24.7479 28.6155 24.7479C34.0861 24.7479 38.715 25.5972 42.5024 27.2959C45.8689 28.9946 47.973 31.118 47.973 34.5154C47.973 36.2141 47.5522 37.4882 46.7105 38.7622C45.8689 40.0362 45.0273 41.3103 44.6064 41.3103C42.9232 40.4609 41.2399 40.0362 39.1358 39.1869C37.0318 38.7622 34.5069 38.3375 31.5612 38.3375C21.0408 38.3375 15.991 43.8583 15.991 54.8999V93.9702H0.841631C0 94.3949 0 50.6532 0 50.6532ZM100.154 74.0104H74.4844C67.3305 74.0104 62.2807 72.7364 58.4934 70.613C54.706 68.0649 53.0228 64.2428 53.0228 59.1467C53.0228 55.3246 53.8644 51.0778 55.5477 46.8311C57.2309 42.5843 59.335 38.3375 62.2807 34.0907C65.2264 29.844 68.1721 26.0219 71.9595 21.7751C75.7468 17.953 79.5341 14.5556 83.3215 11.5829C87.1088 8.61012 91.317 6.48674 95.1043 4.36335C98.8917 2.66464 102.679 1.81529 105.625 1.81529C108.57 1.81529 111.095 2.23996 112.779 2.66464C114.462 3.514 115.303 3.93867 115.724 3.93867V59.9961H119.932C125.403 59.9961 127.928 62.1194 127.928 66.7909C127.928 68.4896 127.507 70.1883 127.086 71.4623C126.665 72.7364 126.245 73.5857 125.824 74.0104H115.724V94.3949H100.575L100.154 74.0104ZM100.154 59.9961V17.5283C97.2084 19.227 93.8419 21.3504 90.0545 24.3232C86.2672 27.2959 82.9007 30.6933 79.955 34.0907C77.0092 37.4882 74.0635 41.3103 71.9595 45.1324C69.8554 48.9544 69.0137 51.9272 69.0137 54.8999C69.0137 57.0233 69.8554 58.722 71.5386 59.1467C73.2219 59.5714 75.326 59.9961 77.8509 59.9961H100.154ZM134.535 81.0045C135.793 80.1562 137.892 78.8839 140.41 76.7634L149.222 70.4018C152.58 67.8571 155.517 65.7366 158.874 63.192C162.231 60.6473 164.749 58.5268 166.848 56.4062C171.883 51.7411 176.08 47.5 178.598 43.2589C181.535 39.0179 182.794 34.7768 182.794 29.6875C182.794 27.567 182.375 25.4464 181.535 23.75C180.696 21.6295 179.437 19.933 178.178 18.6607C176.5 16.9643 174.821 16.1161 172.303 14.8438C169.785 13.9955 166.848 13.5714 163.49 13.5714C160.133 13.5714 157.196 13.9955 154.678 14.8438C152.16 15.692 150.062 16.9643 148.383 18.2366C146.704 19.5089 145.445 20.7812 144.606 22.4777C143.767 23.75 142.928 25.0223 142.508 25.8705C141.669 25.8705 140.829 25.4464 139.99 25.0223C139.151 24.5982 138.311 24.1741 137.472 23.3259C136.633 22.4777 135.793 21.6295 135.374 20.7812C134.954 19.933 134.535 18.6607 134.535 17.8125C134.535 16.5402 134.954 15.2679 135.374 13.9955C135.793 12.7232 136.633 11.875 137.052 10.6027C137.472 10.1786 138.311 8.90625 139.57 7.63393C140.829 6.36161 142.508 5.08929 145.026 4.24107C147.124 2.96875 150.062 2.12054 153.419 1.27232C156.776 0.424107 160.553 0 165.169 0C170.624 0 175.66 0.848214 179.857 2.12054C184.053 3.81696 187.83 5.51339 190.768 8.05804C193.705 10.6027 195.804 13.5714 197.482 17.3884C199.161 20.7813 199.58 24.5982 199.58 28.8393C199.58 31.808 199.161 34.7768 198.321 37.7455C197.482 40.7143 196.643 42.8348 195.384 45.3795C194.125 47.9241 192.866 49.6205 191.607 51.7411C189.928 53.8616 188.669 55.558 186.991 57.2545C185.312 58.9509 183.214 61.0714 180.696 63.192C178.178 65.7366 175.241 67.8571 172.303 70.4018C169.366 72.9464 166.848 75.067 164.33 76.7634C161.812 78.8839 159.714 80.1562 158.455 81.0045H200V95H134.535V81.0045Z';
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = function(t, n) {
        if (
          (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
            'e'
          )) < 0
        )
          return null;
        var e,
          r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
      },
      i = function(t) {
        return (t = r(Math.abs(t))) ? t[1] : NaN;
      },
      u = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function o(t) {
      return new a(t);
    }
    function a(t) {
      if (!(n = u.exec(t))) throw new Error('invalid format: ' + t);
      var n;
      (this.fill = n[1] || ' '),
        (this.align = n[2] || '>'),
        (this.sign = n[3] || '-'),
        (this.symbol = n[4] || ''),
        (this.zero = !!n[5]),
        (this.width = n[6] && +n[6]),
        (this.comma = !!n[7]),
        (this.precision = n[8] && +n[8].slice(1)),
        (this.trim = !!n[9]),
        (this.type = n[10] || '');
    }
    (o.prototype = a.prototype),
      (a.prototype.toString = function() {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? '0' : '') +
          (null == this.width ? '' : Math.max(1, 0 | this.width)) +
          (this.comma ? ',' : '') +
          (null == this.precision
            ? ''
            : '.' + Math.max(0, 0 | this.precision)) +
          (this.trim ? '~' : '') +
          this.type
        );
      });
    var f,
      c,
      s,
      l,
      h = function(t) {
        t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
          switch (t[r]) {
            case '.':
              i = n = r;
              break;
            case '0':
              0 === i && (i = r), (n = r);
              break;
            default:
              if (i > 0) {
                if (!+t[r]) break t;
                i = 0;
              }
          }
        return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
      },
      d = function(t, n) {
        var e = r(t, n);
        if (!e) return t + '';
        var i = e[0],
          u = e[1];
        return u < 0
          ? '0.' + new Array(-u).join('0') + i
          : i.length > u + 1
          ? i.slice(0, u + 1) + '.' + i.slice(u + 1)
          : i + new Array(u - i.length + 2).join('0');
      },
      p = {
        '%': function(t, n) {
          return (100 * t).toFixed(n);
        },
        b: function(t) {
          return Math.round(t).toString(2);
        },
        c: function(t) {
          return t + '';
        },
        d: function(t) {
          return Math.round(t).toString(10);
        },
        e: function(t, n) {
          return t.toExponential(n);
        },
        f: function(t, n) {
          return t.toFixed(n);
        },
        g: function(t, n) {
          return t.toPrecision(n);
        },
        o: function(t) {
          return Math.round(t).toString(8);
        },
        p: function(t, n) {
          return d(100 * t, n);
        },
        r: d,
        s: function(t, n) {
          var e = r(t, n);
          if (!e) return t + '';
          var i = e[0],
            u = e[1],
            o = u - (f = 3 * Math.max(-8, Math.min(8, Math.floor(u / 3)))) + 1,
            a = i.length;
          return o === a
            ? i
            : o > a
            ? i + new Array(o - a + 1).join('0')
            : o > 0
            ? i.slice(0, o) + '.' + i.slice(o)
            : '0.' +
              new Array(1 - o).join('0') +
              r(t, Math.max(0, n + o - 1))[0];
        },
        X: function(t) {
          return Math.round(t)
            .toString(16)
            .toUpperCase();
        },
        x: function(t) {
          return Math.round(t).toString(16);
        },
      },
      _ = function(t) {
        return t;
      },
      v = [
        'y',
        'z',
        'a',
        'f',
        'p',
        'n',
        'µ',
        'm',
        '',
        'k',
        'M',
        'G',
        'T',
        'P',
        'E',
        'Z',
        'Y',
      ],
      b = function(t) {
        var n,
          e,
          r =
            t.grouping && t.thousands
              ? ((n = t.grouping),
                (e = t.thousands),
                function(t, r) {
                  for (
                    var i = t.length, u = [], o = 0, a = n[0], f = 0;
                    i > 0 &&
                    a > 0 &&
                    (f + a + 1 > r && (a = Math.max(1, r - f)),
                    u.push(t.substring((i -= a), i + a)),
                    !((f += a + 1) > r));

                  )
                    a = n[(o = (o + 1) % n.length)];
                  return u.reverse().join(e);
                })
              : _,
          u = t.currency,
          a = t.decimal,
          c = t.numerals
            ? (function(t) {
                return function(n) {
                  return n.replace(/[0-9]/g, function(n) {
                    return t[+n];
                  });
                };
              })(t.numerals)
            : _,
          s = t.percent || '%';
        function l(t) {
          var n = (t = o(t)).fill,
            e = t.align,
            i = t.sign,
            l = t.symbol,
            d = t.zero,
            _ = t.width,
            b = t.comma,
            g = t.precision,
            y = t.trim,
            m = t.type;
          'n' === m
            ? ((b = !0), (m = 'g'))
            : p[m] || (null == g && (g = 12), (y = !0), (m = 'g')),
            (d || ('0' === n && '=' === e)) && ((d = !0), (n = '0'), (e = '='));
          var x =
              '$' === l
                ? u[0]
                : '#' === l && /[boxX]/.test(m)
                ? '0' + m.toLowerCase()
                : '',
            w = '$' === l ? u[1] : /[%p]/.test(m) ? s : '',
            C = p[m],
            M = /[defgprs%]/.test(m);
          function R(t) {
            var u,
              o,
              s,
              l = x,
              p = w;
            if ('c' === m) (p = C(t) + p), (t = '');
            else {
              var R = (t = +t) < 0;
              if (
                ((t = C(Math.abs(t), g)),
                y && (t = h(t)),
                R && 0 == +t && (R = !1),
                (l =
                  (R
                    ? '(' === i
                      ? i
                      : '-'
                    : '-' === i || '(' === i
                    ? ''
                    : i) + l),
                (p =
                  ('s' === m ? v[8 + f / 3] : '') +
                  p +
                  (R && '(' === i ? ')' : '')),
                M)
              )
                for (u = -1, o = t.length; ++u < o; )
                  if (48 > (s = t.charCodeAt(u)) || s > 57) {
                    (p = (46 === s ? a + t.slice(u + 1) : t.slice(u)) + p),
                      (t = t.slice(0, u));
                    break;
                  }
            }
            b && !d && (t = r(t, 1 / 0));
            var E = l.length + t.length + p.length,
              T = E < _ ? new Array(_ - E + 1).join(n) : '';
            switch (
              (b &&
                d &&
                ((t = r(T + t, T.length ? _ - p.length : 1 / 0)), (T = '')),
              e)
            ) {
              case '<':
                t = l + t + p + T;
                break;
              case '=':
                t = l + T + t + p;
                break;
              case '^':
                t = T.slice(0, (E = T.length >> 1)) + l + t + p + T.slice(E);
                break;
              default:
                t = T + l + t + p;
            }
            return c(t);
          }
          return (
            (g =
              null == g
                ? 6
                : /[gprs]/.test(m)
                ? Math.max(1, Math.min(21, g))
                : Math.max(0, Math.min(20, g))),
            (R.toString = function() {
              return t + '';
            }),
            R
          );
        }
        return {
          format: l,
          formatPrefix: function(t, n) {
            var e = l((((t = o(t)).type = 'f'), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(i(n) / 3))),
              u = Math.pow(10, -r),
              a = v[8 + r / 3];
            return function(t) {
              return e(u * t) + a;
            };
          },
        };
      };
    function g(t) {
      return (c = b(t)), (s = c.format), (l = c.formatPrefix), c;
    }
    g({decimal: '.', thousands: ',', grouping: [3], currency: ['$', '']});
    var y = function(t) {
        return Math.max(0, -i(Math.abs(t)));
      },
      m = function(t, n) {
        return Math.max(
          0,
          3 * Math.max(-8, Math.min(8, Math.floor(i(n) / 3))) - i(Math.abs(t))
        );
      },
      x = function(t, n) {
        return (
          (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, i(n) - i(t)) + 1
        );
      };
    e.d(n, 'formatDefaultLocale', function() {
      return g;
    }),
      e.d(n, 'format', function() {
        return s;
      }),
      e.d(n, 'formatPrefix', function() {
        return l;
      }),
      e.d(n, 'formatLocale', function() {
        return b;
      }),
      e.d(n, 'formatSpecifier', function() {
        return o;
      }),
      e.d(n, 'precisionFixed', function() {
        return y;
      }),
      e.d(n, 'precisionPrefix', function() {
        return m;
      }),
      e.d(n, 'precisionRound', function() {
        return x;
      });
  },
  function(t, n, e) {
    'use strict';
    var r = e(3);
    const i = {
      getMaxDimensions(t) {
        const n = {},
          e = document.getElementById(t);
        return (
          (n.w = e.offsetWidth),
          (n.h = e.offsetHeight),
          n.w >= n.h ? (n.max = n.h) : (n.max = n.w),
          n.w >= n.h
            ? (n.direction = 'horizontal')
            : (n.direction = 'vertical'),
          n
        );
      },
      renderErrorMessage(t, n, e) {
        const i = t
          .append('div')
          .attr('id', 'error')
          .append('div')
          .attr('class', 'row');
        i
          .append('svg')
          .attr('width', '40')
          .attr('height', '19')
          .attr('viewbox', '0 0 40 19')
          .attr('fill', 'none')
          .append('path')
          .attr('transform', 'scale(0.2)')
          .attr('d', r.e)
          .attr('fill', '#ABAF2C'),
          i
            .append('h2')
            .attr('id', 'title')
            .text(n),
          i
            .append('p')
            .attr('id', 'message')
            .text(e),
          console.log(`### ${n} : ${e} ###`);
      },
      getScreenCoords: (t, n, e) => ({
        x: e.e + t * e.a + n * e.c,
        y: e.f + t * e.b + n * e.d,
      }),
      getScreenCoordsCanvas: (t, n, e) => ({
        x: e.x + t * e.s,
        y: e.y + n * e.s,
      }),
      loadImage: async t =>
        new Promise((n, e) => {
          const r = new Image();
          r.addEventListener('load', () => n(r)),
            r.addEventListener('error', t => e(t)),
            (r.src = t);
        }),
    };
    n.a = i;
  },
  function(t, n, e) {
    'use strict';
    var r =
      (this && this.__assign) ||
      function() {
        return (r =
          Object.assign ||
          function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
              for (var i in (n = arguments[e]))
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            return t;
          }).apply(this, arguments);
      };
    Object.defineProperty(n, '__esModule', {value: !0});
    /*!
  Copyright 2018 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
    var i = e(11),
      u = e(7);
    !(function(t) {
      for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
    })(e(7)),
      (n.getWidth = function() {
        return document.body.clientWidth;
      }),
      (n.getHeight = function() {
        return document.documentElement.clientHeight;
      }),
      (n.getComponentId = function() {
        var t = i(window.location.href, !0).query;
        if (t.dscId) return t.dscId;
        throw new Error(
          'dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new'
        );
      }),
      (n.parseImage = function(t) {
        var n = t.split('  '),
          e = n[0],
          r = n[1];
        return {altText: n[2], originalUrl: e, proxiedUrl: r};
      });
    var o = function(t) {
        return (
          t.type === u.ConfigDataElementType.DIMENSION ||
          t.type === u.ConfigDataElementType.METRIC
        );
      },
      a = function(t) {
        return t === u.ConfigDataElementType.DIMENSION ? -1 : 1;
      },
      f = function(t) {
        var n = [];
        t.config.data.forEach(function(t) {
          t.elements.forEach(function(t) {
            n.push(t);
          });
        });
        var e,
          r = n.filter(o),
          i = ((e = function(t, n) {
            return a(t.type) - a(n.type);
          }),
          r
            .map(function(t, n) {
              return {item: t, index: n};
            })
            .sort(function(t, n) {
              return e(t.item, n.item) || t.index - n.index;
            })
            .map(function(t) {
              return t.item;
            })),
          u = [];
        return (
          i.forEach(function(t) {
            t.value.forEach(function() {
              return u.push(t.id);
            });
          }),
          u
        );
      },
      c = function(t) {
        var n,
          e = f(t),
          r = (((n = {})[u.TableType.DEFAULT] = []), n);
        return (
          t.dataResponse.tables.forEach(function(t) {
            var n = t.rows.map(
              (function(t) {
                return function(n) {
                  var e,
                    r,
                    i = {};
                  return (
                    ((e = n),
                    (r = t),
                    e.length < r.length
                      ? e.map(function(t, n) {
                          return [t, r[n]];
                        })
                      : r.map(function(t, n) {
                          return [e[n], t];
                        })).forEach(function(t) {
                      var n = t[0],
                        e = t[1];
                      void 0 === i[e] && (i[e] = []), i[e].push(n);
                    }, {}),
                    i
                  );
                };
              })(e)
            );
            r[t.id] = n;
          }),
          r
        );
      },
      s = function(t) {
        var e,
          i = n.fieldsByConfigId(t),
          o = f(t),
          a = {},
          c = o.map(function(t) {
            void 0 === a[t] ? (a[t] = 0) : a[t]++;
            var n = a[t],
              e = i[t][n];
            return r({}, e, {configId: t});
          }),
          s = (((e = {})[u.TableType.DEFAULT] = {headers: [], rows: []}), e);
        return (
          t.dataResponse.tables.forEach(function(t) {
            s[t.id] = {headers: c, rows: t.rows};
          }),
          s
        );
      };
    n.fieldsByConfigId = function(t) {
      var n = (function(t) {
          return t.fields.reduce(function(t, n) {
            return (t[n.id] = n), t;
          }, {});
        })(t),
        e = {};
      return (
        t.config.data.forEach(function(t) {
          t.elements.forEach(function(t) {
            e[t.id] = t.value.map(function(t) {
              return n[t];
            });
          });
        }),
        e
      );
    };
    var l = function(t) {
        var n = {};
        return (
          (t.config.style || []).forEach(function(t) {
            t.elements.forEach(function(t) {
              if (void 0 !== n[t.id])
                throw new Error(
                  "styleIds must be unique. Your styleId: '" +
                    t.id +
                    "' is used more than once."
                );
              n[t.id] = {value: t.value, defaultValue: t.defaultValue};
            });
          }, {}),
          n
        );
      },
      h = function(t) {
        return t.config.themeStyle;
      },
      d = function(t) {
        switch (t) {
          case u.DSInteractionType.FILTER:
            return u.InteractionType.FILTER;
        }
      },
      p = function(t) {
        var n = t.config.interactions;
        return void 0 === n
          ? {}
          : n.reduce(function(t, n) {
              var e = n.supportedActions.map(d),
                r = {type: d(n.value.type), data: n.value.data};
              return (t[n.id] = {value: r, supportedActions: e}), t;
            }, {});
      };
    (n.tableTransform = function(t) {
      return {
        tables: s(t),
        fields: n.fieldsByConfigId(t),
        style: l(t),
        theme: h(t),
        interactions: p(t),
      };
    }),
      (n.objectTransform = function(t) {
        return {
          tables: c(t),
          fields: n.fieldsByConfigId(t),
          style: l(t),
          theme: h(t),
          interactions: p(t),
        };
      }),
      (n.subscribeToData = function(t, e) {
        if (
          e.transform === n.tableTransform ||
          e.transform === n.objectTransform
        ) {
          var r = function(n) {
            n.data.type === u.MessageType.RENDER
              ? t(e.transform(n.data))
              : console.error(
                  'MessageType: ' +
                    n.data.type +
                    ' is not supported by this version of the library.'
                );
          };
          window.addEventListener('message', r);
          var i = {
            componentId: n.getComponentId(),
            type: u.ToDSMessageType.VIZ_READY,
          };
          return (
            window.parent.postMessage(i, '*'),
            function() {
              return window.removeEventListener('message', r);
            }
          );
        }
        throw new Error('Only the built in transform functions are supported.');
      }),
      (n.sendInteraction = function(t, e, r) {
        var i = n.getComponentId(),
          o = {
            type: u.ToDSMessageType.INTERACTION,
            id: t,
            data: r,
            componentId: i,
          };
        window.parent.postMessage(o, '*');
      }),
      (n.clearInteraction = function(t, e) {
        n.sendInteraction(t, e, void 0);
      });
  },
  function(t, n, e) {
    'use strict';
    Object.defineProperty(n, '__esModule', {value: !0}),
      (function(t) {
        (t.METRIC = 'METRIC'), (t.DIMENSION = 'DIMENSION');
      })(n.ConceptType || (n.ConceptType = {})),
      (function(t) {
        t.RENDER = 'RENDER';
      })(n.MessageType || (n.MessageType = {})),
      (function(t) {
        (t.YEAR = 'YEAR'),
          (t.YEAR_QUARTER = 'YEAR_QUARTER'),
          (t.YEAR_MONTH = 'YEAR_MONTH'),
          (t.YEAR_WEEK = 'YEAR_WEEK'),
          (t.YEAR_MONTH_DAY = 'YEAR_MONTH_DAY'),
          (t.YEAR_MONTH_DAY_HOUR = 'YEAR_MONTH_DAY_HOUR'),
          (t.QUARTER = 'QUARTER'),
          (t.MONTH = 'MONTH'),
          (t.WEEK = 'WEEK'),
          (t.MONTH_DAY = 'MONTH_DAY'),
          (t.DAY_OF_WEEK = 'DAY_OF_WEEK'),
          (t.DAY = 'DAY'),
          (t.HOUR = 'HOUR'),
          (t.MINUTE = 'MINUTE'),
          (t.DURATION = 'DURATION'),
          (t.COUNTRY = 'COUNTRY'),
          (t.COUNTRY_CODE = 'COUNTRY_CODE'),
          (t.CONTINENT = 'CONTINENT'),
          (t.CONTINENT_CODE = 'CONTINENT_CODE'),
          (t.SUB_CONTINENT = 'SUB_CONTINENT'),
          (t.SUB_CONTINENT_CODE = 'SUB_CONTINENT_CODE'),
          (t.REGION = 'REGION'),
          (t.REGION_CODE = 'REGION_CODE'),
          (t.CITY = 'CITY'),
          (t.CITY_CODE = 'CITY_CODE'),
          (t.METRO_CODE = 'METRO_CODE'),
          (t.LATITUDE_LONGITUDE = 'LATITUDE_LONGITUDE'),
          (t.NUMBER = 'NUMBER'),
          (t.PERCENT = 'PERCENT'),
          (t.TEXT = 'TEXT'),
          (t.BOOLEAN = 'BOOLEAN'),
          (t.URL = 'URL'),
          (t.IMAGE = 'IMAGE'),
          (t.CURRENCY_AED = 'CURRENCY_AED'),
          (t.CURRENCY_ALL = 'CURRENCY_ALL'),
          (t.CURRENCY_ARS = 'CURRENCY_ARS'),
          (t.CURRENCY_AUD = 'CURRENCY_AUD'),
          (t.CURRENCY_BDT = 'CURRENCY_BDT'),
          (t.CURRENCY_BGN = 'CURRENCY_BGN'),
          (t.CURRENCY_BOB = 'CURRENCY_BOB'),
          (t.CURRENCY_BRL = 'CURRENCY_BRL'),
          (t.CURRENCY_CAD = 'CURRENCY_CAD'),
          (t.CURRENCY_CDF = 'CURRENCY_CDF'),
          (t.CURRENCY_CHF = 'CURRENCY_CHF'),
          (t.CURRENCY_CLP = 'CURRENCY_CLP'),
          (t.CURRENCY_CNY = 'CURRENCY_CNY'),
          (t.CURRENCY_COP = 'CURRENCY_COP'),
          (t.CURRENCY_CRC = 'CURRENCY_CRC'),
          (t.CURRENCY_CZK = 'CURRENCY_CZK'),
          (t.CURRENCY_DKK = 'CURRENCY_DKK'),
          (t.CURRENCY_DOP = 'CURRENCY_DOP'),
          (t.CURRENCY_EGP = 'CURRENCY_EGP'),
          (t.CURRENCY_ETB = 'CURRENCY_ETB'),
          (t.CURRENCY_EUR = 'CURRENCY_EUR'),
          (t.CURRENCY_GBP = 'CURRENCY_GBP'),
          (t.CURRENCY_HKD = 'CURRENCY_HKD'),
          (t.CURRENCY_HRK = 'CURRENCY_HRK'),
          (t.CURRENCY_HUF = 'CURRENCY_HUF'),
          (t.CURRENCY_IDR = 'CURRENCY_IDR'),
          (t.CURRENCY_ILS = 'CURRENCY_ILS'),
          (t.CURRENCY_INR = 'CURRENCY_INR'),
          (t.CURRENCY_IRR = 'CURRENCY_IRR'),
          (t.CURRENCY_ISK = 'CURRENCY_ISK'),
          (t.CURRENCY_JMD = 'CURRENCY_JMD'),
          (t.CURRENCY_JPY = 'CURRENCY_JPY'),
          (t.CURRENCY_KRW = 'CURRENCY_KRW'),
          (t.CURRENCY_LKR = 'CURRENCY_LKR'),
          (t.CURRENCY_LTL = 'CURRENCY_LTL'),
          (t.CURRENCY_MNT = 'CURRENCY_MNT'),
          (t.CURRENCY_MVR = 'CURRENCY_MVR'),
          (t.CURRENCY_MXN = 'CURRENCY_MXN'),
          (t.CURRENCY_MYR = 'CURRENCY_MYR'),
          (t.CURRENCY_NOK = 'CURRENCY_NOK'),
          (t.CURRENCY_NZD = 'CURRENCY_NZD'),
          (t.CURRENCY_PAB = 'CURRENCY_PAB'),
          (t.CURRENCY_PEN = 'CURRENCY_PEN'),
          (t.CURRENCY_PHP = 'CURRENCY_PHP'),
          (t.CURRENCY_PKR = 'CURRENCY_PKR'),
          (t.CURRENCY_PLN = 'CURRENCY_PLN'),
          (t.CURRENCY_RON = 'CURRENCY_RON'),
          (t.CURRENCY_RSD = 'CURRENCY_RSD'),
          (t.CURRENCY_RUB = 'CURRENCY_RUB'),
          (t.CURRENCY_SAR = 'CURRENCY_SAR'),
          (t.CURRENCY_SEK = 'CURRENCY_SEK'),
          (t.CURRENCY_SGD = 'CURRENCY_SGD'),
          (t.CURRENCY_THB = 'CURRENCY_THB'),
          (t.CURRENCY_TRY = 'CURRENCY_TRY'),
          (t.CURRENCY_TWD = 'CURRENCY_TWD'),
          (t.CURRENCY_TZS = 'CURRENCY_TZS'),
          (t.CURRENCY_UAH = 'CURRENCY_UAH'),
          (t.CURRENCY_USD = 'CURRENCY_USD'),
          (t.CURRENCY_UYU = 'CURRENCY_UYU'),
          (t.CURRENCY_VEF = 'CURRENCY_VEF'),
          (t.CURRENCY_VND = 'CURRENCY_VND'),
          (t.CURRENCY_YER = 'CURRENCY_YER'),
          (t.CURRENCY_ZAR = 'CURRENCY_ZAR');
      })(n.FieldType || (n.FieldType = {})),
      (function(t) {
        (t.DEFAULT = 'DEFAULT'),
          (t.COMPARISON = 'COMPARISON'),
          (t.SUMMARY = 'SUMMARY');
      })(n.TableType || (n.TableType = {})),
      (function(t) {
        (t.METRIC = 'METRIC'),
          (t.DIMENSION = 'DIMENSION'),
          (t.SORT = 'SORT'),
          (t.MAX_RESULTS = 'MAX_RESULTS');
      })(n.ConfigDataElementType || (n.ConfigDataElementType = {})),
      (function(t) {
        (t.TEXTINPUT = 'TEXTINPUT'),
          (t.SELECT_SINGLE = 'SELECT_SINGLE'),
          (t.CHECKBOX = 'CHECKBOX'),
          (t.FONT_COLOR = 'FONT_COLOR'),
          (t.FONT_SIZE = 'FONT_SIZE'),
          (t.FONT_FAMILY = 'FONT_FAMILY'),
          (t.FILL_COLOR = 'FILL_COLOR'),
          (t.BORDER_COLOR = 'BORDER_COLOR'),
          (t.AXIS_COLOR = 'AXIS_COLOR'),
          (t.GRID_COLOR = 'GRID_COLOR'),
          (t.OPACITY = 'OPACITY'),
          (t.LINE_WEIGHT = 'LINE_WEIGHT'),
          (t.LINE_STYLE = 'LINE_STYLE'),
          (t.BORDER_RADIUS = 'BORDER_RADIUS'),
          (t.INTERVAL = 'INTERVAL'),
          (t.SELECT_RADIO = 'SELECT_RADIO');
      })(n.ConfigStyleElementType || (n.ConfigStyleElementType = {})),
      (function(t) {
        t.FILTER = 'FILTER';
      })(n.DSInteractionType || (n.DSInteractionType = {})),
      (function(t) {
        (t.VIZ_READY = 'vizReady'), (t.INTERACTION = 'vizAction');
      })(n.ToDSMessageType || (n.ToDSMessageType = {})),
      (function(t) {
        t.FILTER = 'FILTER';
      })(n.InteractionType || (n.InteractionType = {}));
  },
  function(t, n) {
    var e;
    e = (function() {
      return this;
    })();
    try {
      e = e || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (e = window);
    }
    t.exports = e;
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = function(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      },
      i = function(t) {
        var n;
        return (
          1 === t.length &&
            ((n = t),
            (t = function(t, e) {
              return r(n(t), e);
            })),
          {
            left: function(n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var u = (r + i) >>> 1;
                t(n[u], e) < 0 ? (r = u + 1) : (i = u);
              }
              return r;
            },
            right: function(n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var u = (r + i) >>> 1;
                t(n[u], e) > 0 ? (i = u) : (r = u + 1);
              }
              return r;
            },
          }
        );
      };
    var u = i(r),
      o = u.right,
      a = u.left,
      f = o;
    function c(t, n) {
      let e = 0;
      if (void 0 === n) for (const n of t) null != n && n >= n && ++e;
      else {
        let r = -1;
        for (let i of t) null != (i = n(i, ++r, t)) && i >= i && ++e;
      }
      return e;
    }
    function s(t) {
      return 0 | t.length;
    }
    function l(t) {
      return !(t > 0);
    }
    function h(t) {
      return 'object' != typeof t || 'length' in t ? t : Array.from(t);
    }
    function d(...t) {
      const n =
          'function' == typeof t[t.length - 1] &&
          (function(t) {
            return n => t(...n);
          })(t.pop()),
        e = (t = t.map(h)).map(s),
        r = t.length - 1,
        i = new Array(r + 1).fill(0),
        u = [];
      if (r < 0 || e.some(l)) return u;
      for (;;) {
        u.push(i.map((n, e) => t[e][n]));
        let o = r;
        for (; ++i[o] === e[o]; ) {
          if (0 === o) return n ? u.map(n) : u;
          i[o--] = 0;
        }
      }
    }
    var p = function(t, n) {
      return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    };
    function _(t, n) {
      let e,
        r = 0,
        i = 0,
        u = 0;
      if (void 0 === n)
        for (let n of t)
          null != n &&
            (n = +n) >= n &&
            (u += (e = n - i) * (n - (i += e / ++r)));
      else {
        let o = -1;
        for (let a of t)
          null != (a = n(a, ++o, t)) &&
            (a = +a) >= a &&
            (u += (e = a - i) * (a - (i += e / ++r)));
      }
      if (r > 1) return u / (r - 1);
    }
    function v(t, n) {
      const e = _(t, n);
      return e ? Math.sqrt(e) : e;
    }
    var b = function(t, n) {
        let e, r;
        if (void 0 === n)
          for (const n of t)
            null != n &&
              (void 0 === e
                ? n >= n && (e = r = n)
                : (e > n && (e = n), r < n && (r = n)));
        else {
          let i = -1;
          for (let u of t)
            null != (u = n(u, ++i, t)) &&
              (void 0 === e
                ? u >= u && (e = r = u)
                : (e > u && (e = u), r < u && (r = u)));
        }
        return [e, r];
      },
      g = function(t) {
        return t;
      };
    function y(t, ...n) {
      return C(t, g, g, n);
    }
    function m(t, ...n) {
      return C(t, Array.from, g, n);
    }
    function x(t, n, ...e) {
      return C(t, g, n, e);
    }
    function w(t, n, ...e) {
      return C(t, Array.from, n, e);
    }
    function C(t, n, e, r) {
      return (function t(i, u) {
        if (u >= r.length) return e(i);
        const o = new Map(),
          a = r[u++];
        let f = -1;
        for (const t of i) {
          const n = a(t, ++f, i),
            e = o.get(n);
          e ? e.push(t) : o.set(n, [t]);
        }
        for (const [n, e] of o) o.set(n, t(e, u));
        return n(o);
      })(t, 0);
    }
    var M = Array.prototype,
      R = M.slice,
      E = M.map,
      T = function(t) {
        return function() {
          return t;
        };
      },
      N = function(t, n, e) {
        (t = +t),
          (n = +n),
          (e =
            (i = arguments.length) < 2
              ? ((n = t), (t = 0), 1)
              : i < 3
              ? 1
              : +e);
        for (
          var r = -1,
            i = 0 | Math.max(0, Math.ceil((n - t) / e)),
            u = new Array(i);
          ++r < i;

        )
          u[r] = t + r * e;
        return u;
      },
      A = Math.sqrt(50),
      O = Math.sqrt(10),
      U = Math.sqrt(2),
      S = function(t, n, e) {
        var r,
          i,
          u,
          o,
          a = -1;
        if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t];
        if (
          ((r = n < t) && ((i = t), (t = n), (n = i)),
          0 === (o = k(t, n, e)) || !isFinite(o))
        )
          return [];
        if (o > 0)
          for (
            t = Math.ceil(t / o),
              n = Math.floor(n / o),
              u = new Array((i = Math.ceil(n - t + 1)));
            ++a < i;

          )
            u[a] = (t + a) * o;
        else
          for (
            t = Math.floor(t * o),
              n = Math.ceil(n * o),
              u = new Array((i = Math.ceil(t - n + 1)));
            ++a < i;

          )
            u[a] = (t - a) / o;
        return r && u.reverse(), u;
      };
    function k(t, n, e) {
      var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        u = r / Math.pow(10, i);
      return i >= 0
        ? (u >= A ? 10 : u >= O ? 5 : u >= U ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (u >= A ? 10 : u >= O ? 5 : u >= U ? 2 : 1);
    }
    function Y(t, n, e) {
      var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        u = r / i;
      return (
        u >= A ? (i *= 10) : u >= O ? (i *= 5) : u >= U && (i *= 2),
        n < t ? -i : i
      );
    }
    var D = function(t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
      },
      I = function() {
        var t = g,
          n = b,
          e = D;
        function r(r) {
          Array.isArray(r) || (r = Array.from(r));
          var i,
            u,
            o = r.length,
            a = new Array(o);
          for (i = 0; i < o; ++i) a[i] = t(r[i], i, r);
          var c = n(a),
            s = c[0],
            l = c[1],
            h = e(a, s, l);
          Array.isArray(h) ||
            ((h = Y(s, l, h)), (h = N(Math.ceil(s / h) * h, l, h)));
          for (var d = h.length; h[0] <= s; ) h.shift(), --d;
          for (; h[d - 1] > l; ) h.pop(), --d;
          var p,
            _ = new Array(d + 1);
          for (i = 0; i <= d; ++i)
            ((p = _[i] = []).x0 = i > 0 ? h[i - 1] : s),
              (p.x1 = i < d ? h[i] : l);
          for (i = 0; i < o; ++i)
            s <= (u = a[i]) && u <= l && _[f(h, u, 0, d)].push(r[i]);
          return _;
        }
        return (
          (r.value = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : T(n)), r)
              : t;
          }),
          (r.domain = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : T([t[0], t[1]])), r)
              : n;
          }),
          (r.thresholds = function(t) {
            return arguments.length
              ? ((e =
                  'function' == typeof t
                    ? t
                    : Array.isArray(t)
                    ? T(R.call(t))
                    : T(t)),
                r)
              : e;
          }),
          r
        );
      },
      j = function(t) {
        return null === t ? NaN : +t;
      };
    function L(t, n, e = j) {
      if ((r = t.length)) {
        if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
        if (n >= 1) return +e(t[r - 1], r - 1, t);
        var r,
          i = (r - 1) * n,
          u = Math.floor(i),
          o = +e(t[u], u, t);
        return o + (+e(t[u + 1], u + 1, t) - o) * (i - u);
      }
    }
    var P = function(t, n, e) {
        return (
          (t = E.call(t, j).sort(r)),
          Math.ceil(
            (e - n) /
              (2 * (L(t, 0.75) - L(t, 0.25)) * Math.pow(t.length, -1 / 3))
          )
        );
      },
      B = function(t, n, e) {
        return Math.ceil((e - n) / (3.5 * v(t) * Math.pow(t.length, -1 / 3)));
      };
    function z(t, n) {
      let e;
      if (void 0 === n)
        for (const n of t)
          null != n && (e < n || (void 0 === e && n >= n)) && (e = n);
      else {
        let r = -1;
        for (let i of t)
          null != (i = n(i, ++r, t)) &&
            (e < i || (void 0 === e && i >= i)) &&
            (e = i);
      }
      return e;
    }
    function F(t, n) {
      let e,
        r = -1,
        i = -1;
      if (void 0 === n)
        for (const n of t)
          ++i,
            null != n &&
              (e < n || (void 0 === e && n >= n)) &&
              ((e = n), (r = i));
      else
        for (let u of t)
          null != (u = n(u, ++i, t)) &&
            (e < u || (void 0 === e && u >= u)) &&
            ((e = u), (r = i));
      return r;
    }
    function q(t, n) {
      let e = 0,
        r = 0;
      if (void 0 === n)
        for (let n of t) null != n && (n = +n) >= n && (++e, (r += n));
      else {
        let i = -1;
        for (let u of t)
          null != (u = n(u, ++i, t)) && (u = +u) >= u && (++e, (r += u));
      }
      if (e) return r / e;
    }
    function H(t, n, e = 0, i = t.length - 1, u = r) {
      for (; i > e; ) {
        if (i - e > 600) {
          const r = i - e + 1,
            o = n - e + 1,
            a = Math.log(r),
            f = 0.5 * Math.exp((2 * a) / 3),
            c =
              0.5 * Math.sqrt((a * f * (r - f)) / r) * (o - r / 2 < 0 ? -1 : 1);
          H(
            t,
            n,
            Math.max(e, Math.floor(n - (o * f) / r + c)),
            Math.min(i, Math.floor(n + ((r - o) * f) / r + c)),
            u
          );
        }
        const r = t[n];
        let o = e,
          a = i;
        for ($(t, e, n), u(t[i], r) > 0 && $(t, e, i); o < a; ) {
          for ($(t, o, a), ++o, --a; u(t[o], r) < 0; ) ++o;
          for (; u(t[a], r) > 0; ) --a;
        }
        0 === u(t[e], r) ? $(t, e, a) : $(t, ++a, i),
          a <= n && (e = a + 1),
          n <= a && (i = a - 1);
      }
      return t;
    }
    function $(t, n, e) {
      const r = t[n];
      (t[n] = t[e]), (t[e] = r);
    }
    var W = function(t, n) {
      if (
        !(t = Float64Array.from(
          (function*(t, n) {
            if (void 0 === n)
              for (let n of t) null != n && (n = +n) >= n && (yield n);
            else {
              let e = -1;
              for (let r of t)
                null != (r = n(r, ++e, t)) && (r = +r) >= r && (yield r);
            }
          })(t, n)
        )).length
      )
        return;
      const e = t.length,
        r = e >> 1;
      return H(t, r - 1, 0), 0 == (1 & e) && H(t, r, r), L(t, 0.5);
    };
    function G(t) {
      return Array.from(
        (function*(t) {
          for (const n of t) yield* n;
        })(t)
      );
    }
    function Z(t, n) {
      let e;
      if (void 0 === n)
        for (const n of t)
          null != n && (e > n || (void 0 === e && n >= n)) && (e = n);
      else {
        let r = -1;
        for (let i of t)
          null != (i = n(i, ++r, t)) &&
            (e > i || (void 0 === e && i >= i)) &&
            (e = i);
      }
      return e;
    }
    function V(t, n) {
      let e,
        r = -1,
        i = -1;
      if (void 0 === n)
        for (const n of t)
          ++i,
            null != n &&
              (e > n || (void 0 === e && n >= n)) &&
              ((e = n), (r = i));
      else
        for (let u of t)
          null != (u = n(u, ++i, t)) &&
            (e > u || (void 0 === e && u >= u)) &&
            ((e = u), (r = i));
      return r;
    }
    function X(
      t,
      n = function(t, n) {
        return [t, n];
      }
    ) {
      const e = [];
      let r,
        i = !1;
      for (const u of t) i && e.push(n(r, u)), (r = u), (i = !0);
      return e;
    }
    var K = function(t, n) {
      return Array.from(n, n => t[n]);
    };
    function Q(t, n = r) {
      let e,
        i = !1;
      if (1 === n.length) {
        let u;
        for (const o of t) {
          const t = n(o);
          (i ? r(t, u) < 0 : 0 === r(t, t)) && ((e = o), (u = t), (i = !0));
        }
      } else
        for (const r of t)
          (i ? n(r, e) < 0 : 0 === n(r, r)) && ((e = r), (i = !0));
      return e;
    }
    function J(t, n = r) {
      let e,
        i = -1,
        u = -1;
      if (1 === n.length)
        for (const o of t) {
          ++u;
          const t = n(o);
          (i < 0 ? 0 === r(t, t) : r(t, e) < 0) && ((e = t), (i = u));
        }
      else
        for (const r of t)
          ++u, (i < 0 ? 0 === n(r, r) : n(r, e) < 0) && ((e = r), (i = u));
      return i;
    }
    function tt(t, n) {
      const e = J(t, n);
      return e < 0 ? void 0 : e;
    }
    function nt(t, n = 0, e = t.length) {
      for (var r, i, u = e - (n = +n); u; )
        (i = (Math.random() * u--) | 0),
          (r = t[u + n]),
          (t[u + n] = t[i + n]),
          (t[i + n] = r);
      return t;
    }
    function et(t, n) {
      let e = 0;
      if (void 0 === n) for (let n of t) (n = +n) && (e += n);
      else {
        let r = -1;
        for (let i of t) (i = +n(i, ++r, t)) && (e += i);
      }
      return e;
    }
    var rt = function(t) {
      if (!(i = t.length)) return [];
      for (var n = -1, e = Z(t, it), r = new Array(e); ++n < e; )
        for (var i, u = -1, o = (r[n] = new Array(i)); ++u < i; )
          o[u] = t[u][n];
      return r;
    };
    function it(t) {
      return t.length;
    }
    var ut = function() {
      return rt(arguments);
    };
    e.d(n, 'bisect', function() {
      return f;
    }),
      e.d(n, 'bisectRight', function() {
        return o;
      }),
      e.d(n, 'bisectLeft', function() {
        return a;
      }),
      e.d(n, 'ascending', function() {
        return r;
      }),
      e.d(n, 'bisector', function() {
        return i;
      }),
      e.d(n, 'count', function() {
        return c;
      }),
      e.d(n, 'cross', function() {
        return d;
      }),
      e.d(n, 'descending', function() {
        return p;
      }),
      e.d(n, 'deviation', function() {
        return v;
      }),
      e.d(n, 'extent', function() {
        return b;
      }),
      e.d(n, 'group', function() {
        return y;
      }),
      e.d(n, 'groups', function() {
        return m;
      }),
      e.d(n, 'rollup', function() {
        return x;
      }),
      e.d(n, 'rollups', function() {
        return w;
      }),
      e.d(n, 'bin', function() {
        return I;
      }),
      e.d(n, 'histogram', function() {
        return I;
      }),
      e.d(n, 'thresholdFreedmanDiaconis', function() {
        return P;
      }),
      e.d(n, 'thresholdScott', function() {
        return B;
      }),
      e.d(n, 'thresholdSturges', function() {
        return D;
      }),
      e.d(n, 'max', function() {
        return z;
      }),
      e.d(n, 'maxIndex', function() {
        return F;
      }),
      e.d(n, 'mean', function() {
        return q;
      }),
      e.d(n, 'median', function() {
        return W;
      }),
      e.d(n, 'merge', function() {
        return G;
      }),
      e.d(n, 'min', function() {
        return Z;
      }),
      e.d(n, 'minIndex', function() {
        return V;
      }),
      e.d(n, 'pairs', function() {
        return X;
      }),
      e.d(n, 'permute', function() {
        return K;
      }),
      e.d(n, 'quantile', function() {
        return L;
      }),
      e.d(n, 'quickselect', function() {
        return H;
      }),
      e.d(n, 'range', function() {
        return N;
      }),
      e.d(n, 'least', function() {
        return Q;
      }),
      e.d(n, 'leastIndex', function() {
        return J;
      }),
      e.d(n, 'scan', function() {
        return tt;
      }),
      e.d(n, 'shuffle', function() {
        return nt;
      }),
      e.d(n, 'sum', function() {
        return et;
      }),
      e.d(n, 'ticks', function() {
        return S;
      }),
      e.d(n, 'tickIncrement', function() {
        return k;
      }),
      e.d(n, 'tickStep', function() {
        return Y;
      }),
      e.d(n, 'transpose', function() {
        return rt;
      }),
      e.d(n, 'variance', function() {
        return _;
      }),
      e.d(n, 'zip', function() {
        return ut;
      });
  },
  function(t, n, e) {
    'use strict';
    function r(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.blob();
    }
    e.r(n);
    var i = function(t, n) {
      return fetch(t, n).then(r);
    };
    function u(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.arrayBuffer();
    }
    var o = function(t, n) {
        return fetch(t, n).then(u);
      },
      a = {},
      f = {},
      c = 34,
      s = 10,
      l = 13;
    function h(t) {
      return new Function(
        'd',
        'return {' +
          t
            .map(function(t, n) {
              return JSON.stringify(t) + ': d[' + n + ']';
            })
            .join(',') +
          '}'
      );
    }
    function d(t) {
      var n = Object.create(null),
        e = [];
      return (
        t.forEach(function(t) {
          for (var r in t) r in n || e.push((n[r] = r));
        }),
        e
      );
    }
    function p(t, n) {
      var e = t + '',
        r = e.length;
      return r < n ? new Array(n - r + 1).join(0) + e : e;
    }
    function _(t) {
      var n,
        e = t.getUTCHours(),
        r = t.getUTCMinutes(),
        i = t.getUTCSeconds(),
        u = t.getUTCMilliseconds();
      return isNaN(t)
        ? 'Invalid Date'
        : ((n = t.getUTCFullYear()) < 0
            ? '-' + p(-n, 6)
            : n > 9999
            ? '+' + p(n, 6)
            : p(n, 4)) +
            '-' +
            p(t.getUTCMonth() + 1, 2) +
            '-' +
            p(t.getUTCDate(), 2) +
            (u
              ? 'T' +
                p(e, 2) +
                ':' +
                p(r, 2) +
                ':' +
                p(i, 2) +
                '.' +
                p(u, 3) +
                'Z'
              : i
              ? 'T' + p(e, 2) + ':' + p(r, 2) + ':' + p(i, 2) + 'Z'
              : r || e
              ? 'T' + p(e, 2) + ':' + p(r, 2) + 'Z'
              : '');
    }
    var v = function(t) {
        var n = new RegExp('["' + t + '\n\r]'),
          e = t.charCodeAt(0);
        function r(t, n) {
          var r,
            i = [],
            u = t.length,
            o = 0,
            h = 0,
            d = u <= 0,
            p = !1;
          function _() {
            if (d) return f;
            if (p) return (p = !1), a;
            var n,
              r,
              i = o;
            if (t.charCodeAt(i) === c) {
              for (
                ;
                (o++ < u && t.charCodeAt(o) !== c) || t.charCodeAt(++o) === c;

              );
              return (
                (n = o) >= u
                  ? (d = !0)
                  : (r = t.charCodeAt(o++)) === s
                  ? (p = !0)
                  : r === l && ((p = !0), t.charCodeAt(o) === s && ++o),
                t.slice(i + 1, n - 1).replace(/""/g, '"')
              );
            }
            for (; o < u; ) {
              if ((r = t.charCodeAt((n = o++))) === s) p = !0;
              else if (r === l) (p = !0), t.charCodeAt(o) === s && ++o;
              else if (r !== e) continue;
              return t.slice(i, n);
            }
            return (d = !0), t.slice(i, u);
          }
          for (
            t.charCodeAt(u - 1) === s && --u, t.charCodeAt(u - 1) === l && --u;
            (r = _()) !== f;

          ) {
            for (var v = []; r !== a && r !== f; ) v.push(r), (r = _());
            (n && null == (v = n(v, h++))) || i.push(v);
          }
          return i;
        }
        function i(n, e) {
          return n.map(function(n) {
            return e
              .map(function(t) {
                return o(n[t]);
              })
              .join(t);
          });
        }
        function u(n) {
          return n.map(o).join(t);
        }
        function o(t) {
          return null == t
            ? ''
            : t instanceof Date
            ? _(t)
            : n.test((t += ''))
            ? '"' + t.replace(/"/g, '""') + '"'
            : t;
        }
        return {
          parse: function(t, n) {
            var e,
              i,
              u = r(t, function(t, r) {
                if (e) return e(t, r - 1);
                (i = t),
                  (e = n
                    ? (function(t, n) {
                        var e = h(t);
                        return function(r, i) {
                          return n(e(r), i, t);
                        };
                      })(t, n)
                    : h(t));
              });
            return (u.columns = i || []), u;
          },
          parseRows: r,
          format: function(n, e) {
            return (
              null == e && (e = d(n)),
              [e.map(o).join(t)].concat(i(n, e)).join('\n')
            );
          },
          formatBody: function(t, n) {
            return null == n && (n = d(t)), i(t, n).join('\n');
          },
          formatRows: function(t) {
            return t.map(u).join('\n');
          },
        };
      },
      b = v(','),
      g = b.parse,
      y = (b.parseRows, b.format, b.formatBody, b.formatRows, v('\t')),
      m = y.parse;
    y.parseRows, y.format, y.formatBody, y.formatRows;
    function x(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.text();
    }
    var w = function(t, n) {
      return fetch(t, n).then(x);
    };
    function C(t) {
      return function(n, e, r) {
        return (
          2 === arguments.length &&
            'function' == typeof e &&
            ((r = e), (e = void 0)),
          w(n, e).then(function(n) {
            return t(n, r);
          })
        );
      };
    }
    function M(t, n, e, r) {
      3 === arguments.length &&
        'function' == typeof e &&
        ((r = e), (e = void 0));
      var i = v(t);
      return w(n, e).then(function(t) {
        return i.parse(t, r);
      });
    }
    var R = C(g),
      E = C(m),
      T = function(t, n) {
        return new Promise(function(e, r) {
          var i = new Image();
          for (var u in n) i[u] = n[u];
          (i.onerror = r),
            (i.onload = function() {
              e(i);
            }),
            (i.src = t);
        });
      };
    function N(t) {
      if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
      return t.json();
    }
    var A = function(t, n) {
      return fetch(t, n).then(N);
    };
    function O(t) {
      return function(n, e) {
        return w(n, e).then(function(n) {
          return new DOMParser().parseFromString(n, t);
        });
      };
    }
    var U = O('application/xml'),
      S = O('text/html'),
      k = O('image/svg+xml');
    e.d(n, 'blob', function() {
      return i;
    }),
      e.d(n, 'buffer', function() {
        return o;
      }),
      e.d(n, 'dsv', function() {
        return M;
      }),
      e.d(n, 'csv', function() {
        return R;
      }),
      e.d(n, 'tsv', function() {
        return E;
      }),
      e.d(n, 'image', function() {
        return T;
      }),
      e.d(n, 'json', function() {
        return A;
      }),
      e.d(n, 'text', function() {
        return w;
      }),
      e.d(n, 'xml', function() {
        return U;
      }),
      e.d(n, 'html', function() {
        return S;
      }),
      e.d(n, 'svg', function() {
        return k;
      });
  },
  function(t, n, e) {
    'use strict';
    (function(n) {
      var r = e(12),
        i = e(13),
        u = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        o = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
        a = new RegExp(
          '^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'
        );
      function f(t) {
        return (t || '').toString().replace(a, '');
      }
      var c = [
          ['#', 'hash'],
          ['?', 'query'],
          function(t) {
            return t.replace('\\', '/');
          },
          ['/', 'pathname'],
          ['@', 'auth', 1],
          [NaN, 'host', void 0, 1, 1],
          [/:(\d+)$/, 'port', void 0, 1],
          [NaN, 'hostname', void 0, 1, 1],
        ],
        s = {hash: 1, query: 1};
      function l(t) {
        var e,
          r =
            ('undefined' != typeof window
              ? window
              : void 0 !== n
              ? n
              : 'undefined' != typeof self
              ? self
              : {}
            ).location || {},
          i = {},
          o = typeof (t = t || r);
        if ('blob:' === t.protocol) i = new d(unescape(t.pathname), {});
        else if ('string' === o) for (e in ((i = new d(t, {})), s)) delete i[e];
        else if ('object' === o) {
          for (e in t) e in s || (i[e] = t[e]);
          void 0 === i.slashes && (i.slashes = u.test(t.href));
        }
        return i;
      }
      function h(t) {
        t = f(t);
        var n = o.exec(t);
        return {
          protocol: n[1] ? n[1].toLowerCase() : '',
          slashes: !!n[2],
          rest: n[3],
        };
      }
      function d(t, n, e) {
        if (((t = f(t)), !(this instanceof d))) return new d(t, n, e);
        var u,
          o,
          a,
          s,
          p,
          _,
          v = c.slice(),
          b = typeof n,
          g = this,
          y = 0;
        for (
          'object' !== b && 'string' !== b && ((e = n), (n = null)),
            e && 'function' != typeof e && (e = i.parse),
            n = l(n),
            u = !(o = h(t || '')).protocol && !o.slashes,
            g.slashes = o.slashes || (u && n.slashes),
            g.protocol = o.protocol || n.protocol || '',
            t = o.rest,
            o.slashes || (v[3] = [/(.*)/, 'pathname']);
          y < v.length;
          y++
        )
          'function' != typeof (s = v[y])
            ? ((a = s[0]),
              (_ = s[1]),
              a != a
                ? (g[_] = t)
                : 'string' == typeof a
                ? ~(p = t.indexOf(a)) &&
                  ('number' == typeof s[2]
                    ? ((g[_] = t.slice(0, p)), (t = t.slice(p + s[2])))
                    : ((g[_] = t.slice(p)), (t = t.slice(0, p))))
                : (p = a.exec(t)) && ((g[_] = p[1]), (t = t.slice(0, p.index))),
              (g[_] = g[_] || (u && s[3] && n[_]) || ''),
              s[4] && (g[_] = g[_].toLowerCase()))
            : (t = s(t));
        e && (g.query = e(g.query)),
          u &&
            n.slashes &&
            '/' !== g.pathname.charAt(0) &&
            ('' !== g.pathname || '' !== n.pathname) &&
            (g.pathname = (function(t, n) {
              if ('' === t) return n;
              for (
                var e = (n || '/')
                    .split('/')
                    .slice(0, -1)
                    .concat(t.split('/')),
                  r = e.length,
                  i = e[r - 1],
                  u = !1,
                  o = 0;
                r--;

              )
                '.' === e[r]
                  ? e.splice(r, 1)
                  : '..' === e[r]
                  ? (e.splice(r, 1), o++)
                  : o && (0 === r && (u = !0), e.splice(r, 1), o--);
              return (
                u && e.unshift(''),
                ('.' !== i && '..' !== i) || e.push(''),
                e.join('/')
              );
            })(g.pathname, n.pathname)),
          r(g.port, g.protocol) || ((g.host = g.hostname), (g.port = '')),
          (g.username = g.password = ''),
          g.auth &&
            ((s = g.auth.split(':')),
            (g.username = s[0] || ''),
            (g.password = s[1] || '')),
          (g.origin =
            g.protocol && g.host && 'file:' !== g.protocol
              ? g.protocol + '//' + g.host
              : 'null'),
          (g.href = g.toString());
      }
      (d.prototype = {
        set: function(t, n, e) {
          var u = this;
          switch (t) {
            case 'query':
              'string' == typeof n && n.length && (n = (e || i.parse)(n)),
                (u[t] = n);
              break;
            case 'port':
              (u[t] = n),
                r(n, u.protocol)
                  ? n && (u.host = u.hostname + ':' + n)
                  : ((u.host = u.hostname), (u[t] = ''));
              break;
            case 'hostname':
              (u[t] = n), u.port && (n += ':' + u.port), (u.host = n);
              break;
            case 'host':
              (u[t] = n),
                /:\d+$/.test(n)
                  ? ((n = n.split(':')),
                    (u.port = n.pop()),
                    (u.hostname = n.join(':')))
                  : ((u.hostname = n), (u.port = ''));
              break;
            case 'protocol':
              (u.protocol = n.toLowerCase()), (u.slashes = !e);
              break;
            case 'pathname':
            case 'hash':
              if (n) {
                var o = 'pathname' === t ? '/' : '#';
                u[t] = n.charAt(0) !== o ? o + n : n;
              } else u[t] = n;
              break;
            default:
              u[t] = n;
          }
          for (var a = 0; a < c.length; a++) {
            var f = c[a];
            f[4] && (u[f[1]] = u[f[1]].toLowerCase());
          }
          return (
            (u.origin =
              u.protocol && u.host && 'file:' !== u.protocol
                ? u.protocol + '//' + u.host
                : 'null'),
            (u.href = u.toString()),
            u
          );
        },
        toString: function(t) {
          (t && 'function' == typeof t) || (t = i.stringify);
          var n,
            e = this,
            r = e.protocol;
          r && ':' !== r.charAt(r.length - 1) && (r += ':');
          var u = r + (e.slashes ? '//' : '');
          return (
            e.username &&
              ((u += e.username),
              e.password && (u += ':' + e.password),
              (u += '@')),
            (u += e.host + e.pathname),
            (n = 'object' == typeof e.query ? t(e.query) : e.query) &&
              (u += '?' !== n.charAt(0) ? '?' + n : n),
            e.hash && (u += e.hash),
            u
          );
        },
      }),
        (d.extractProtocol = h),
        (d.location = l),
        (d.trimLeft = f),
        (d.qs = i),
        (t.exports = d);
    }.call(this, e(8)));
  },
  function(t, n, e) {
    'use strict';
    t.exports = function(t, n) {
      if (((n = n.split(':')[0]), !(t = +t))) return !1;
      switch (n) {
        case 'http':
        case 'ws':
          return 80 !== t;
        case 'https':
        case 'wss':
          return 443 !== t;
        case 'ftp':
          return 21 !== t;
        case 'gopher':
          return 70 !== t;
        case 'file':
          return !1;
      }
      return 0 !== t;
    };
  },
  function(t, n, e) {
    'use strict';
    var r,
      i = Object.prototype.hasOwnProperty;
    function u(t) {
      try {
        return decodeURIComponent(t.replace(/\+/g, ' '));
      } catch (t) {
        return null;
      }
    }
    (n.stringify = function(t, n) {
      n = n || '';
      var e,
        u,
        o = [];
      for (u in ('string' != typeof n && (n = '?'), t))
        if (i.call(t, u)) {
          if (
            ((e = t[u]) || (null !== e && e !== r && !isNaN(e)) || (e = ''),
            (u = encodeURIComponent(u)),
            (e = encodeURIComponent(e)),
            null === u || null === e)
          )
            continue;
          o.push(u + '=' + e);
        }
      return o.length ? n + o.join('&') : '';
    }),
      (n.parse = function(t) {
        for (var n, e = /([^=?&]+)=?([^&]*)/g, r = {}; (n = e.exec(t)); ) {
          var i = u(n[1]),
            o = u(n[2]);
          null === i || null === o || i in r || (r[i] = o);
        }
        return r;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = Math.PI,
      i = 2 * r,
      u = i - 1e-6;
    function o() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '');
    }
    function a() {
      return new o();
    }
    o.prototype = a.prototype = {
      constructor: o,
      moveTo: function(t, n) {
        this._ +=
          'M' + (this._x0 = this._x1 = +t) + ',' + (this._y0 = this._y1 = +n);
      },
      closePath: function() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
      },
      lineTo: function(t, n) {
        this._ += 'L' + (this._x1 = +t) + ',' + (this._y1 = +n);
      },
      quadraticCurveTo: function(t, n, e, r) {
        this._ +=
          'Q' + +t + ',' + +n + ',' + (this._x1 = +e) + ',' + (this._y1 = +r);
      },
      bezierCurveTo: function(t, n, e, r, i, u) {
        this._ +=
          'C' +
          +t +
          ',' +
          +n +
          ',' +
          +e +
          ',' +
          +r +
          ',' +
          (this._x1 = +i) +
          ',' +
          (this._y1 = +u);
      },
      arcTo: function(t, n, e, i, u) {
        (t = +t), (n = +n), (e = +e), (i = +i), (u = +u);
        var o = this._x1,
          a = this._y1,
          f = e - t,
          c = i - n,
          s = o - t,
          l = a - n,
          h = s * s + l * l;
        if (u < 0) throw new Error('negative radius: ' + u);
        if (null === this._x1)
          this._ += 'M' + (this._x1 = t) + ',' + (this._y1 = n);
        else if (h > 1e-6)
          if (Math.abs(l * f - c * s) > 1e-6 && u) {
            var d = e - o,
              p = i - a,
              _ = f * f + c * c,
              v = d * d + p * p,
              b = Math.sqrt(_),
              g = Math.sqrt(h),
              y = u * Math.tan((r - Math.acos((_ + h - v) / (2 * b * g))) / 2),
              m = y / g,
              x = y / b;
            Math.abs(m - 1) > 1e-6 &&
              (this._ += 'L' + (t + m * s) + ',' + (n + m * l)),
              (this._ +=
                'A' +
                u +
                ',' +
                u +
                ',0,0,' +
                +(l * d > s * p) +
                ',' +
                (this._x1 = t + x * f) +
                ',' +
                (this._y1 = n + x * c));
          } else this._ += 'L' + (this._x1 = t) + ',' + (this._y1 = n);
        else;
      },
      arc: function(t, n, e, o, a, f) {
        (t = +t), (n = +n);
        var c = (e = +e) * Math.cos(o),
          s = e * Math.sin(o),
          l = t + c,
          h = n + s,
          d = 1 ^ f,
          p = f ? o - a : a - o;
        if (e < 0) throw new Error('negative radius: ' + e);
        null === this._x1
          ? (this._ += 'M' + l + ',' + h)
          : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) &&
            (this._ += 'L' + l + ',' + h),
          e &&
            (p < 0 && (p = (p % i) + i),
            p > u
              ? (this._ +=
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,1,' +
                  d +
                  ',' +
                  (t - c) +
                  ',' +
                  (n - s) +
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,1,' +
                  d +
                  ',' +
                  (this._x1 = l) +
                  ',' +
                  (this._y1 = h))
              : p > 1e-6 &&
                (this._ +=
                  'A' +
                  e +
                  ',' +
                  e +
                  ',0,' +
                  +(p >= r) +
                  ',' +
                  d +
                  ',' +
                  (this._x1 = t + e * Math.cos(a)) +
                  ',' +
                  (this._y1 = n + e * Math.sin(a))));
      },
      rect: function(t, n, e, r) {
        this._ +=
          'M' +
          (this._x0 = this._x1 = +t) +
          ',' +
          (this._y0 = this._y1 = +n) +
          'h' +
          +e +
          'v' +
          +r +
          'h' +
          -e +
          'Z';
      },
      toString: function() {
        return this._;
      },
    };
    var f = a,
      c = function(t) {
        return function() {
          return t;
        };
      },
      s = Math.abs,
      l = Math.atan2,
      h = Math.cos,
      d = Math.max,
      p = Math.min,
      _ = Math.sin,
      v = Math.sqrt,
      b = 1e-12,
      g = Math.PI,
      y = g / 2,
      m = 2 * g;
    function x(t) {
      return t >= 1 ? y : t <= -1 ? -y : Math.asin(t);
    }
    function w(t) {
      return t.innerRadius;
    }
    function C(t) {
      return t.outerRadius;
    }
    function M(t) {
      return t.startAngle;
    }
    function R(t) {
      return t.endAngle;
    }
    function E(t) {
      return t && t.padAngle;
    }
    function T(t, n, e, r, i, u, o) {
      var a = t - e,
        f = n - r,
        c = (o ? u : -u) / v(a * a + f * f),
        s = c * f,
        l = -c * a,
        h = t + s,
        p = n + l,
        _ = e + s,
        b = r + l,
        g = (h + _) / 2,
        y = (p + b) / 2,
        m = _ - h,
        x = b - p,
        w = m * m + x * x,
        C = i - u,
        M = h * b - _ * p,
        R = (x < 0 ? -1 : 1) * v(d(0, C * C * w - M * M)),
        E = (M * x - m * R) / w,
        T = (-M * m - x * R) / w,
        N = (M * x + m * R) / w,
        A = (-M * m + x * R) / w,
        O = E - g,
        U = T - y,
        S = N - g,
        k = A - y;
      return (
        O * O + U * U > S * S + k * k && ((E = N), (T = A)),
        {
          cx: E,
          cy: T,
          x01: -s,
          y01: -l,
          x11: E * (i / C - 1),
          y11: T * (i / C - 1),
        }
      );
    }
    var N = function() {
      var t = w,
        n = C,
        e = c(0),
        r = null,
        i = M,
        u = R,
        o = E,
        a = null;
      function d() {
        var c,
          d,
          w,
          C = +t.apply(this, arguments),
          M = +n.apply(this, arguments),
          R = i.apply(this, arguments) - y,
          E = u.apply(this, arguments) - y,
          N = s(E - R),
          A = E > R;
        if ((a || (a = c = f()), M < C && ((d = M), (M = C), (C = d)), M > b))
          if (N > m - b)
            a.moveTo(M * h(R), M * _(R)),
              a.arc(0, 0, M, R, E, !A),
              C > b && (a.moveTo(C * h(E), C * _(E)), a.arc(0, 0, C, E, R, A));
          else {
            var O,
              U,
              S = R,
              k = E,
              Y = R,
              D = E,
              I = N,
              j = N,
              L = o.apply(this, arguments) / 2,
              P = L > b && (r ? +r.apply(this, arguments) : v(C * C + M * M)),
              B = p(s(M - C) / 2, +e.apply(this, arguments)),
              z = B,
              F = B;
            if (P > b) {
              var q = x((P / C) * _(L)),
                H = x((P / M) * _(L));
              (I -= 2 * q) > b
                ? ((Y += q *= A ? 1 : -1), (D -= q))
                : ((I = 0), (Y = D = (R + E) / 2)),
                (j -= 2 * H) > b
                  ? ((S += H *= A ? 1 : -1), (k -= H))
                  : ((j = 0), (S = k = (R + E) / 2));
            }
            var $ = M * h(S),
              W = M * _(S),
              G = C * h(D),
              Z = C * _(D);
            if (B > b) {
              var V,
                X = M * h(k),
                K = M * _(k),
                Q = C * h(Y),
                J = C * _(Y);
              if (
                N < g &&
                (V = (function(t, n, e, r, i, u, o, a) {
                  var f = e - t,
                    c = r - n,
                    s = o - i,
                    l = a - u,
                    h = l * f - s * c;
                  if (!(h * h < b))
                    return [
                      t + (h = (s * (n - u) - l * (t - i)) / h) * f,
                      n + h * c,
                    ];
                })($, W, Q, J, X, K, G, Z))
              ) {
                var tt = $ - V[0],
                  nt = W - V[1],
                  et = X - V[0],
                  rt = K - V[1],
                  it =
                    1 /
                    _(
                      ((w =
                        (tt * et + nt * rt) /
                        (v(tt * tt + nt * nt) * v(et * et + rt * rt))) > 1
                        ? 0
                        : w < -1
                        ? g
                        : Math.acos(w)) / 2
                    ),
                  ut = v(V[0] * V[0] + V[1] * V[1]);
                (z = p(B, (C - ut) / (it - 1))),
                  (F = p(B, (M - ut) / (it + 1)));
              }
            }
            j > b
              ? F > b
                ? ((O = T(Q, J, $, W, M, F, A)),
                  (U = T(X, K, G, Z, M, F, A)),
                  a.moveTo(O.cx + O.x01, O.cy + O.y01),
                  F < B
                    ? a.arc(O.cx, O.cy, F, l(O.y01, O.x01), l(U.y01, U.x01), !A)
                    : (a.arc(
                        O.cx,
                        O.cy,
                        F,
                        l(O.y01, O.x01),
                        l(O.y11, O.x11),
                        !A
                      ),
                      a.arc(
                        0,
                        0,
                        M,
                        l(O.cy + O.y11, O.cx + O.x11),
                        l(U.cy + U.y11, U.cx + U.x11),
                        !A
                      ),
                      a.arc(
                        U.cx,
                        U.cy,
                        F,
                        l(U.y11, U.x11),
                        l(U.y01, U.x01),
                        !A
                      )))
                : (a.moveTo($, W), a.arc(0, 0, M, S, k, !A))
              : a.moveTo($, W),
              C > b && I > b
                ? z > b
                  ? ((O = T(G, Z, X, K, C, -z, A)),
                    (U = T($, W, Q, J, C, -z, A)),
                    a.lineTo(O.cx + O.x01, O.cy + O.y01),
                    z < B
                      ? a.arc(
                          O.cx,
                          O.cy,
                          z,
                          l(O.y01, O.x01),
                          l(U.y01, U.x01),
                          !A
                        )
                      : (a.arc(
                          O.cx,
                          O.cy,
                          z,
                          l(O.y01, O.x01),
                          l(O.y11, O.x11),
                          !A
                        ),
                        a.arc(
                          0,
                          0,
                          C,
                          l(O.cy + O.y11, O.cx + O.x11),
                          l(U.cy + U.y11, U.cx + U.x11),
                          A
                        ),
                        a.arc(
                          U.cx,
                          U.cy,
                          z,
                          l(U.y11, U.x11),
                          l(U.y01, U.x01),
                          !A
                        )))
                  : a.arc(0, 0, C, D, Y, A)
                : a.lineTo(G, Z);
          }
        else a.moveTo(0, 0);
        if ((a.closePath(), c)) return (a = null), c + '' || null;
      }
      return (
        (d.centroid = function() {
          var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
            r =
              (+i.apply(this, arguments) + +u.apply(this, arguments)) / 2 -
              g / 2;
          return [h(r) * e, _(r) * e];
        }),
        (d.innerRadius = function(n) {
          return arguments.length
            ? ((t = 'function' == typeof n ? n : c(+n)), d)
            : t;
        }),
        (d.outerRadius = function(t) {
          return arguments.length
            ? ((n = 'function' == typeof t ? t : c(+t)), d)
            : n;
        }),
        (d.cornerRadius = function(t) {
          return arguments.length
            ? ((e = 'function' == typeof t ? t : c(+t)), d)
            : e;
        }),
        (d.padRadius = function(t) {
          return arguments.length
            ? ((r = null == t ? null : 'function' == typeof t ? t : c(+t)), d)
            : r;
        }),
        (d.startAngle = function(t) {
          return arguments.length
            ? ((i = 'function' == typeof t ? t : c(+t)), d)
            : i;
        }),
        (d.endAngle = function(t) {
          return arguments.length
            ? ((u = 'function' == typeof t ? t : c(+t)), d)
            : u;
        }),
        (d.padAngle = function(t) {
          return arguments.length
            ? ((o = 'function' == typeof t ? t : c(+t)), d)
            : o;
        }),
        (d.context = function(t) {
          return arguments.length ? ((a = null == t ? null : t), d) : a;
        }),
        d
      );
    };
    function A(t) {
      this._context = t;
    }
    A.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, n);
        }
      },
    };
    var O = function(t) {
      return new A(t);
    };
    function U(t) {
      return t[0];
    }
    function S(t) {
      return t[1];
    }
    var k = function() {
        var t = U,
          n = S,
          e = c(!0),
          r = null,
          i = O,
          u = null;
        function o(o) {
          var a,
            c,
            s,
            l = o.length,
            h = !1;
          for (null == r && (u = i((s = f()))), a = 0; a <= l; ++a)
            !(a < l && e((c = o[a]), a, o)) === h &&
              ((h = !h) ? u.lineStart() : u.lineEnd()),
              h && u.point(+t(c, a, o), +n(c, a, o));
          if (s) return (u = null), s + '' || null;
        }
        return (
          (o.x = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : c(+n)), o)
              : t;
          }),
          (o.y = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : c(+t)), o)
              : n;
          }),
          (o.defined = function(t) {
            return arguments.length
              ? ((e = 'function' == typeof t ? t : c(!!t)), o)
              : e;
          }),
          (o.curve = function(t) {
            return arguments.length ? ((i = t), null != r && (u = i(r)), o) : i;
          }),
          (o.context = function(t) {
            return arguments.length
              ? (null == t ? (r = u = null) : (u = i((r = t))), o)
              : r;
          }),
          o
        );
      },
      Y = function() {
        var t = U,
          n = null,
          e = c(0),
          r = S,
          i = c(!0),
          u = null,
          o = O,
          a = null;
        function s(c) {
          var s,
            l,
            h,
            d,
            p,
            _ = c.length,
            v = !1,
            b = new Array(_),
            g = new Array(_);
          for (null == u && (a = o((p = f()))), s = 0; s <= _; ++s) {
            if (!(s < _ && i((d = c[s]), s, c)) === v)
              if ((v = !v)) (l = s), a.areaStart(), a.lineStart();
              else {
                for (a.lineEnd(), a.lineStart(), h = s - 1; h >= l; --h)
                  a.point(b[h], g[h]);
                a.lineEnd(), a.areaEnd();
              }
            v &&
              ((b[s] = +t(d, s, c)),
              (g[s] = +e(d, s, c)),
              a.point(n ? +n(d, s, c) : b[s], r ? +r(d, s, c) : g[s]));
          }
          if (p) return (a = null), p + '' || null;
        }
        function l() {
          return k()
            .defined(i)
            .curve(o)
            .context(u);
        }
        return (
          (s.x = function(e) {
            return arguments.length
              ? ((t = 'function' == typeof e ? e : c(+e)), (n = null), s)
              : t;
          }),
          (s.x0 = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : c(+n)), s)
              : t;
          }),
          (s.x1 = function(t) {
            return arguments.length
              ? ((n = null == t ? null : 'function' == typeof t ? t : c(+t)), s)
              : n;
          }),
          (s.y = function(t) {
            return arguments.length
              ? ((e = 'function' == typeof t ? t : c(+t)), (r = null), s)
              : e;
          }),
          (s.y0 = function(t) {
            return arguments.length
              ? ((e = 'function' == typeof t ? t : c(+t)), s)
              : e;
          }),
          (s.y1 = function(t) {
            return arguments.length
              ? ((r = null == t ? null : 'function' == typeof t ? t : c(+t)), s)
              : r;
          }),
          (s.lineX0 = s.lineY0 = function() {
            return l()
              .x(t)
              .y(e);
          }),
          (s.lineY1 = function() {
            return l()
              .x(t)
              .y(r);
          }),
          (s.lineX1 = function() {
            return l()
              .x(n)
              .y(e);
          }),
          (s.defined = function(t) {
            return arguments.length
              ? ((i = 'function' == typeof t ? t : c(!!t)), s)
              : i;
          }),
          (s.curve = function(t) {
            return arguments.length ? ((o = t), null != u && (a = o(u)), s) : o;
          }),
          (s.context = function(t) {
            return arguments.length
              ? (null == t ? (u = a = null) : (a = o((u = t))), s)
              : u;
          }),
          s
        );
      },
      D = function(t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      },
      I = function(t) {
        return t;
      },
      j = function() {
        var t = I,
          n = D,
          e = null,
          r = c(0),
          i = c(m),
          u = c(0);
        function o(o) {
          var a,
            f,
            c,
            s,
            l,
            h = o.length,
            d = 0,
            p = new Array(h),
            _ = new Array(h),
            v = +r.apply(this, arguments),
            b = Math.min(m, Math.max(-m, i.apply(this, arguments) - v)),
            g = Math.min(Math.abs(b) / h, u.apply(this, arguments)),
            y = g * (b < 0 ? -1 : 1);
          for (a = 0; a < h; ++a)
            (l = _[(p[a] = a)] = +t(o[a], a, o)) > 0 && (d += l);
          for (
            null != n
              ? p.sort(function(t, e) {
                  return n(_[t], _[e]);
                })
              : null != e &&
                p.sort(function(t, n) {
                  return e(o[t], o[n]);
                }),
              a = 0,
              c = d ? (b - h * y) / d : 0;
            a < h;
            ++a, v = s
          )
            (f = p[a]),
              (s = v + ((l = _[f]) > 0 ? l * c : 0) + y),
              (_[f] = {
                data: o[f],
                index: a,
                value: l,
                startAngle: v,
                endAngle: s,
                padAngle: g,
              });
          return _;
        }
        return (
          (o.value = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : c(+n)), o)
              : t;
          }),
          (o.sortValues = function(t) {
            return arguments.length ? ((n = t), (e = null), o) : n;
          }),
          (o.sort = function(t) {
            return arguments.length ? ((e = t), (n = null), o) : e;
          }),
          (o.startAngle = function(t) {
            return arguments.length
              ? ((r = 'function' == typeof t ? t : c(+t)), o)
              : r;
          }),
          (o.endAngle = function(t) {
            return arguments.length
              ? ((i = 'function' == typeof t ? t : c(+t)), o)
              : i;
          }),
          (o.padAngle = function(t) {
            return arguments.length
              ? ((u = 'function' == typeof t ? t : c(+t)), o)
              : u;
          }),
          o
        );
      },
      L = B(O);
    function P(t) {
      this._curve = t;
    }
    function B(t) {
      function n(n) {
        return new P(t(n));
      }
      return (n._curve = t), n;
    }
    function z(t) {
      var n = t.curve;
      return (
        (t.angle = t.x),
        delete t.x,
        (t.radius = t.y),
        delete t.y,
        (t.curve = function(t) {
          return arguments.length ? n(B(t)) : n()._curve;
        }),
        t
      );
    }
    P.prototype = {
      areaStart: function() {
        this._curve.areaStart();
      },
      areaEnd: function() {
        this._curve.areaEnd();
      },
      lineStart: function() {
        this._curve.lineStart();
      },
      lineEnd: function() {
        this._curve.lineEnd();
      },
      point: function(t, n) {
        this._curve.point(n * Math.sin(t), n * -Math.cos(t));
      },
    };
    var F = function() {
        return z(k().curve(L));
      },
      q = function() {
        var t = Y().curve(L),
          n = t.curve,
          e = t.lineX0,
          r = t.lineX1,
          i = t.lineY0,
          u = t.lineY1;
        return (
          (t.angle = t.x),
          delete t.x,
          (t.startAngle = t.x0),
          delete t.x0,
          (t.endAngle = t.x1),
          delete t.x1,
          (t.radius = t.y),
          delete t.y,
          (t.innerRadius = t.y0),
          delete t.y0,
          (t.outerRadius = t.y1),
          delete t.y1,
          (t.lineStartAngle = function() {
            return z(e());
          }),
          delete t.lineX0,
          (t.lineEndAngle = function() {
            return z(r());
          }),
          delete t.lineX1,
          (t.lineInnerRadius = function() {
            return z(i());
          }),
          delete t.lineY0,
          (t.lineOuterRadius = function() {
            return z(u());
          }),
          delete t.lineY1,
          (t.curve = function(t) {
            return arguments.length ? n(B(t)) : n()._curve;
          }),
          t
        );
      },
      H = function(t, n) {
        return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
      },
      $ = Array.prototype.slice;
    function W(t) {
      return t.source;
    }
    function G(t) {
      return t.target;
    }
    function Z(t) {
      var n = W,
        e = G,
        r = U,
        i = S,
        u = null;
      function o() {
        var o,
          a = $.call(arguments),
          c = n.apply(this, a),
          s = e.apply(this, a);
        if (
          (u || (u = o = f()),
          t(
            u,
            +r.apply(this, ((a[0] = c), a)),
            +i.apply(this, a),
            +r.apply(this, ((a[0] = s), a)),
            +i.apply(this, a)
          ),
          o)
        )
          return (u = null), o + '' || null;
      }
      return (
        (o.source = function(t) {
          return arguments.length ? ((n = t), o) : n;
        }),
        (o.target = function(t) {
          return arguments.length ? ((e = t), o) : e;
        }),
        (o.x = function(t) {
          return arguments.length
            ? ((r = 'function' == typeof t ? t : c(+t)), o)
            : r;
        }),
        (o.y = function(t) {
          return arguments.length
            ? ((i = 'function' == typeof t ? t : c(+t)), o)
            : i;
        }),
        (o.context = function(t) {
          return arguments.length ? ((u = null == t ? null : t), o) : u;
        }),
        o
      );
    }
    function V(t, n, e, r, i) {
      t.moveTo(n, e), t.bezierCurveTo((n = (n + r) / 2), e, n, i, r, i);
    }
    function X(t, n, e, r, i) {
      t.moveTo(n, e), t.bezierCurveTo(n, (e = (e + i) / 2), r, e, r, i);
    }
    function K(t, n, e, r, i) {
      var u = H(n, e),
        o = H(n, (e = (e + i) / 2)),
        a = H(r, e),
        f = H(r, i);
      t.moveTo(u[0], u[1]), t.bezierCurveTo(o[0], o[1], a[0], a[1], f[0], f[1]);
    }
    function Q() {
      return Z(V);
    }
    function J() {
      return Z(X);
    }
    function tt() {
      var t = Z(K);
      return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
    }
    var nt = {
        draw: function(t, n) {
          var e = Math.sqrt(n / g);
          t.moveTo(e, 0), t.arc(0, 0, e, 0, m);
        },
      },
      et = {
        draw: function(t, n) {
          var e = Math.sqrt(n / 5) / 2;
          t.moveTo(-3 * e, -e),
            t.lineTo(-e, -e),
            t.lineTo(-e, -3 * e),
            t.lineTo(e, -3 * e),
            t.lineTo(e, -e),
            t.lineTo(3 * e, -e),
            t.lineTo(3 * e, e),
            t.lineTo(e, e),
            t.lineTo(e, 3 * e),
            t.lineTo(-e, 3 * e),
            t.lineTo(-e, e),
            t.lineTo(-3 * e, e),
            t.closePath();
        },
      },
      rt = Math.sqrt(1 / 3),
      it = 2 * rt,
      ut = {
        draw: function(t, n) {
          var e = Math.sqrt(n / it),
            r = e * rt;
          t.moveTo(0, -e),
            t.lineTo(r, 0),
            t.lineTo(0, e),
            t.lineTo(-r, 0),
            t.closePath();
        },
      },
      ot = Math.sin(g / 10) / Math.sin((7 * g) / 10),
      at = Math.sin(m / 10) * ot,
      ft = -Math.cos(m / 10) * ot,
      ct = {
        draw: function(t, n) {
          var e = Math.sqrt(0.8908130915292852 * n),
            r = at * e,
            i = ft * e;
          t.moveTo(0, -e), t.lineTo(r, i);
          for (var u = 1; u < 5; ++u) {
            var o = (m * u) / 5,
              a = Math.cos(o),
              f = Math.sin(o);
            t.lineTo(f * e, -a * e), t.lineTo(a * r - f * i, f * r + a * i);
          }
          t.closePath();
        },
      },
      st = {
        draw: function(t, n) {
          var e = Math.sqrt(n),
            r = -e / 2;
          t.rect(r, r, e, e);
        },
      },
      lt = Math.sqrt(3),
      ht = {
        draw: function(t, n) {
          var e = -Math.sqrt(n / (3 * lt));
          t.moveTo(0, 2 * e),
            t.lineTo(-lt * e, -e),
            t.lineTo(lt * e, -e),
            t.closePath();
        },
      },
      dt = Math.sqrt(3) / 2,
      pt = 1 / Math.sqrt(12),
      _t = 3 * (pt / 2 + 1),
      vt = {
        draw: function(t, n) {
          var e = Math.sqrt(n / _t),
            r = e / 2,
            i = e * pt,
            u = r,
            o = e * pt + e,
            a = -u,
            f = o;
          t.moveTo(r, i),
            t.lineTo(u, o),
            t.lineTo(a, f),
            t.lineTo(-0.5 * r - dt * i, dt * r + -0.5 * i),
            t.lineTo(-0.5 * u - dt * o, dt * u + -0.5 * o),
            t.lineTo(-0.5 * a - dt * f, dt * a + -0.5 * f),
            t.lineTo(-0.5 * r + dt * i, -0.5 * i - dt * r),
            t.lineTo(-0.5 * u + dt * o, -0.5 * o - dt * u),
            t.lineTo(-0.5 * a + dt * f, -0.5 * f - dt * a),
            t.closePath();
        },
      },
      bt = [nt, et, ut, st, ct, ht, vt],
      gt = function() {
        var t = c(nt),
          n = c(64),
          e = null;
        function r() {
          var r;
          if (
            (e || (e = r = f()),
            t.apply(this, arguments).draw(e, +n.apply(this, arguments)),
            r)
          )
            return (e = null), r + '' || null;
        }
        return (
          (r.type = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : c(n)), r)
              : t;
          }),
          (r.size = function(t) {
            return arguments.length
              ? ((n = 'function' == typeof t ? t : c(+t)), r)
              : n;
          }),
          (r.context = function(t) {
            return arguments.length ? ((e = null == t ? null : t), r) : e;
          }),
          r
        );
      },
      yt = function() {};
    function mt(t, n, e) {
      t._context.bezierCurveTo(
        (2 * t._x0 + t._x1) / 3,
        (2 * t._y0 + t._y1) / 3,
        (t._x0 + 2 * t._x1) / 3,
        (t._y0 + 2 * t._y1) / 3,
        (t._x0 + 4 * t._x1 + n) / 6,
        (t._y0 + 4 * t._y1 + e) / 6
      );
    }
    function xt(t) {
      this._context = t;
    }
    xt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 3:
            mt(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._context.lineTo(
                (5 * this._x0 + this._x1) / 6,
                (5 * this._y0 + this._y1) / 6
              );
          default:
            mt(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    var wt = function(t) {
      return new xt(t);
    };
    function Ct(t) {
      this._context = t;
    }
    Ct.prototype = {
      areaStart: yt,
      areaEnd: yt,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo(
              (this._x2 + 2 * this._x3) / 3,
              (this._y2 + 2 * this._y3) / 3
            ),
              this._context.lineTo(
                (this._x3 + 2 * this._x2) / 3,
                (this._y3 + 2 * this._y2) / 3
              ),
              this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2),
              this.point(this._x3, this._y3),
              this.point(this._x4, this._y4);
        }
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x2 = t), (this._y2 = n);
            break;
          case 1:
            (this._point = 2), (this._x3 = t), (this._y3 = n);
            break;
          case 2:
            (this._point = 3),
              (this._x4 = t),
              (this._y4 = n),
              this._context.moveTo(
                (this._x0 + 4 * this._x1 + t) / 6,
                (this._y0 + 4 * this._y1 + n) / 6
              );
            break;
          default:
            mt(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    var Mt = function(t) {
      return new Ct(t);
    };
    function Rt(t) {
      this._context = t;
    }
    Rt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + t) / 6,
              r = (this._y0 + 4 * this._y1 + n) / 6;
            this._line
              ? this._context.lineTo(e, r)
              : this._context.moveTo(e, r);
            break;
          case 3:
            this._point = 4;
          default:
            mt(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    var Et = function(t) {
      return new Rt(t);
    };
    function Tt(t, n) {
      (this._basis = new xt(t)), (this._beta = n);
    }
    Tt.prototype = {
      lineStart: function() {
        (this._x = []), (this._y = []), this._basis.lineStart();
      },
      lineEnd: function() {
        var t = this._x,
          n = this._y,
          e = t.length - 1;
        if (e > 0)
          for (
            var r, i = t[0], u = n[0], o = t[e] - i, a = n[e] - u, f = -1;
            ++f <= e;

          )
            (r = f / e),
              this._basis.point(
                this._beta * t[f] + (1 - this._beta) * (i + r * o),
                this._beta * n[f] + (1 - this._beta) * (u + r * a)
              );
        (this._x = this._y = null), this._basis.lineEnd();
      },
      point: function(t, n) {
        this._x.push(+t), this._y.push(+n);
      },
    };
    var Nt = (function t(n) {
      function e(t) {
        return 1 === n ? new xt(t) : new Tt(t, n);
      }
      return (
        (e.beta = function(n) {
          return t(+n);
        }),
        e
      );
    })(0.85);
    function At(t, n, e) {
      t._context.bezierCurveTo(
        t._x1 + t._k * (t._x2 - t._x0),
        t._y1 + t._k * (t._y2 - t._y0),
        t._x2 + t._k * (t._x1 - n),
        t._y2 + t._k * (t._y1 - e),
        t._x2,
        t._y2
      );
    }
    function Ot(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    Ot.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            At(this, this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            (this._point = 2), (this._x1 = t), (this._y1 = n);
            break;
          case 2:
            this._point = 3;
          default:
            At(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Ut = (function t(n) {
      function e(t) {
        return new Ot(t, n);
      }
      return (
        (e.tension = function(n) {
          return t(+n);
        }),
        e
      );
    })(0);
    function St(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    St.prototype = {
      areaStart: yt,
      areaEnd: yt,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = n);
            break;
          default:
            At(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var kt = (function t(n) {
      function e(t) {
        return new St(t, n);
      }
      return (
        (e.tension = function(n) {
          return t(+n);
        }),
        e
      );
    })(0);
    function Yt(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    Yt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            At(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Dt = (function t(n) {
      function e(t) {
        return new Yt(t, n);
      }
      return (
        (e.tension = function(n) {
          return t(+n);
        }),
        e
      );
    })(0);
    function It(t, n, e) {
      var r = t._x1,
        i = t._y1,
        u = t._x2,
        o = t._y2;
      if (t._l01_a > b) {
        var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          f = 3 * t._l01_a * (t._l01_a + t._l12_a);
        (r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / f),
          (i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / f);
      }
      if (t._l23_a > b) {
        var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          s = 3 * t._l23_a * (t._l23_a + t._l12_a);
        (u = (u * c + t._x1 * t._l23_2a - n * t._l12_2a) / s),
          (o = (o * c + t._y1 * t._l23_2a - e * t._l12_2a) / s);
      }
      t._context.bezierCurveTo(r, i, u, o, t._x2, t._y2);
    }
    function jt(t, n) {
      (this._context = t), (this._alpha = n);
    }
    jt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            It(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Lt = (function t(n) {
      function e(t) {
        return n ? new jt(t, n) : new Ot(t, 0);
      }
      return (
        (e.alpha = function(n) {
          return t(+n);
        }),
        e
      );
    })(0.5);
    function Pt(t, n) {
      (this._context = t), (this._alpha = n);
    }
    Pt.prototype = {
      areaStart: yt,
      areaEnd: yt,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function(t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = n);
            break;
          default:
            It(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Bt = (function t(n) {
      function e(t) {
        return n ? new Pt(t, n) : new St(t, 0);
      }
      return (
        (e.alpha = function(n) {
          return t(+n);
        }),
        e
      );
    })(0.5);
    function zt(t, n) {
      (this._context = t), (this._alpha = n);
    }
    zt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            It(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    var Ft = (function t(n) {
      function e(t) {
        return n ? new zt(t, n) : new Yt(t, 0);
      }
      return (
        (e.alpha = function(n) {
          return t(+n);
        }),
        e
      );
    })(0.5);
    function qt(t) {
      this._context = t;
    }
    qt.prototype = {
      areaStart: yt,
      areaEnd: yt,
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        this._point && this._context.closePath();
      },
      point: function(t, n) {
        (t = +t),
          (n = +n),
          this._point
            ? this._context.lineTo(t, n)
            : ((this._point = 1), this._context.moveTo(t, n));
      },
    };
    var Ht = function(t) {
      return new qt(t);
    };
    function $t(t) {
      return t < 0 ? -1 : 1;
    }
    function Wt(t, n, e) {
      var r = t._x1 - t._x0,
        i = n - t._x1,
        u = (t._y1 - t._y0) / (r || (i < 0 && -0)),
        o = (e - t._y1) / (i || (r < 0 && -0)),
        a = (u * i + o * r) / (r + i);
      return (
        ($t(u) + $t(o)) *
          Math.min(Math.abs(u), Math.abs(o), 0.5 * Math.abs(a)) || 0
      );
    }
    function Gt(t, n) {
      var e = t._x1 - t._x0;
      return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
    }
    function Zt(t, n, e) {
      var r = t._x0,
        i = t._y0,
        u = t._x1,
        o = t._y1,
        a = (u - r) / 3;
      t._context.bezierCurveTo(r + a, i + a * n, u - a, o - a * e, u, o);
    }
    function Vt(t) {
      this._context = t;
    }
    function Xt(t) {
      this._context = new Kt(t);
    }
    function Kt(t) {
      this._context = t;
    }
    function Qt(t) {
      return new Vt(t);
    }
    function Jt(t) {
      return new Xt(t);
    }
    function tn(t) {
      this._context = t;
    }
    function nn(t) {
      var n,
        e,
        r = t.length - 1,
        i = new Array(r),
        u = new Array(r),
        o = new Array(r);
      for (i[0] = 0, u[0] = 2, o[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)
        (i[n] = 1), (u[n] = 4), (o[n] = 4 * t[n] + 2 * t[n + 1]);
      for (
        i[r - 1] = 2, u[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], n = 1;
        n < r;
        ++n
      )
        (e = i[n] / u[n - 1]), (u[n] -= e), (o[n] -= e * o[n - 1]);
      for (i[r - 1] = o[r - 1] / u[r - 1], n = r - 2; n >= 0; --n)
        i[n] = (o[n] - i[n + 1]) / u[n];
      for (u[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
        u[n] = 2 * t[n + 1] - i[n + 1];
      return [i, u];
    }
    (Vt.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            Zt(this, this._t0, Gt(this, this._t0));
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, n) {
        var e = NaN;
        if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), Zt(this, Gt(this, (e = Wt(this, t, n))), e);
              break;
            default:
              Zt(this, this._t0, (e = Wt(this, t, n)));
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n),
            (this._t0 = e);
        }
      },
    }),
      ((Xt.prototype = Object.create(Vt.prototype)).point = function(t, n) {
        Vt.prototype.point.call(this, n, t);
      }),
      (Kt.prototype = {
        moveTo: function(t, n) {
          this._context.moveTo(n, t);
        },
        closePath: function() {
          this._context.closePath();
        },
        lineTo: function(t, n) {
          this._context.lineTo(n, t);
        },
        bezierCurveTo: function(t, n, e, r, i, u) {
          this._context.bezierCurveTo(n, t, r, e, u, i);
        },
      }),
      (tn.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x = []), (this._y = []);
        },
        lineEnd: function() {
          var t = this._x,
            n = this._y,
            e = t.length;
          if (e)
            if (
              (this._line
                ? this._context.lineTo(t[0], n[0])
                : this._context.moveTo(t[0], n[0]),
              2 === e)
            )
              this._context.lineTo(t[1], n[1]);
            else
              for (var r = nn(t), i = nn(n), u = 0, o = 1; o < e; ++u, ++o)
                this._context.bezierCurveTo(
                  r[0][u],
                  i[0][u],
                  r[1][u],
                  i[1][u],
                  t[o],
                  n[o]
                );
          (this._line || (0 !== this._line && 1 === e)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null);
        },
        point: function(t, n) {
          this._x.push(+t), this._y.push(+n);
        },
      });
    var en = function(t) {
      return new tn(t);
    };
    function rn(t, n) {
      (this._context = t), (this._t = n);
    }
    rn.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x = this._y = NaN), (this._point = 0);
      },
      lineEnd: function() {
        0 < this._t &&
          this._t < 1 &&
          2 === this._point &&
          this._context.lineTo(this._x, this._y),
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
          this._line >= 0 &&
            ((this._t = 1 - this._t), (this._line = 1 - this._line));
      },
      point: function(t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0)
              this._context.lineTo(this._x, n), this._context.lineTo(t, n);
            else {
              var e = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, n);
            }
        }
        (this._x = t), (this._y = n);
      },
    };
    var un = function(t) {
      return new rn(t, 0.5);
    };
    function on(t) {
      return new rn(t, 0);
    }
    function an(t) {
      return new rn(t, 1);
    }
    var fn = function(t, n) {
        if ((i = t.length) > 1)
          for (var e, r, i, u = 1, o = t[n[0]], a = o.length; u < i; ++u)
            for (r = o, o = t[n[u]], e = 0; e < a; ++e)
              o[e][1] += o[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
      },
      cn = function(t) {
        for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
        return e;
      };
    function sn(t, n) {
      return t[n];
    }
    var ln = function() {
        var t = c([]),
          n = cn,
          e = fn,
          r = sn;
        function i(i) {
          var u,
            o,
            a = t.apply(this, arguments),
            f = i.length,
            c = a.length,
            s = new Array(c);
          for (u = 0; u < c; ++u) {
            for (var l, h = a[u], d = (s[u] = new Array(f)), p = 0; p < f; ++p)
              (d[p] = l = [0, +r(i[p], h, p, i)]), (l.data = i[p]);
            d.key = h;
          }
          for (u = 0, o = n(s); u < c; ++u) s[o[u]].index = u;
          return e(s, o), s;
        }
        return (
          (i.keys = function(n) {
            return arguments.length
              ? ((t = 'function' == typeof n ? n : c($.call(n))), i)
              : t;
          }),
          (i.value = function(t) {
            return arguments.length
              ? ((r = 'function' == typeof t ? t : c(+t)), i)
              : r;
          }),
          (i.order = function(t) {
            return arguments.length
              ? ((n =
                  null == t ? cn : 'function' == typeof t ? t : c($.call(t))),
                i)
              : n;
          }),
          (i.offset = function(t) {
            return arguments.length ? ((e = null == t ? fn : t), i) : e;
          }),
          i
        );
      },
      hn = function(t, n) {
        if ((r = t.length) > 0) {
          for (var e, r, i, u = 0, o = t[0].length; u < o; ++u) {
            for (i = e = 0; e < r; ++e) i += t[e][u][1] || 0;
            if (i) for (e = 0; e < r; ++e) t[e][u][1] /= i;
          }
          fn(t, n);
        }
      },
      dn = function(t, n) {
        if ((a = t.length) > 0)
          for (var e, r, i, u, o, a, f = 0, c = t[n[0]].length; f < c; ++f)
            for (u = o = 0, e = 0; e < a; ++e)
              (i = (r = t[n[e]][f])[1] - r[0]) >= 0
                ? ((r[0] = u), (r[1] = u += i))
                : i < 0
                ? ((r[1] = o), (r[0] = o += i))
                : (r[0] = u);
      },
      pn = function(t, n) {
        if ((e = t.length) > 0) {
          for (var e, r = 0, i = t[n[0]], u = i.length; r < u; ++r) {
            for (var o = 0, a = 0; o < e; ++o) a += t[o][r][1] || 0;
            i[r][1] += i[r][0] = -a / 2;
          }
          fn(t, n);
        }
      },
      _n = function(t, n) {
        if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
          for (var e, r, i, u = 0, o = 1; o < r; ++o) {
            for (var a = 0, f = 0, c = 0; a < i; ++a) {
              for (
                var s = t[n[a]],
                  l = s[o][1] || 0,
                  h = (l - (s[o - 1][1] || 0)) / 2,
                  d = 0;
                d < a;
                ++d
              ) {
                var p = t[n[d]];
                h += (p[o][1] || 0) - (p[o - 1][1] || 0);
              }
              (f += l), (c += h * l);
            }
            (e[o - 1][1] += e[o - 1][0] = u), f && (u -= c / f);
          }
          (e[o - 1][1] += e[o - 1][0] = u), fn(t, n);
        }
      },
      vn = function(t) {
        var n = t.map(bn);
        return cn(t).sort(function(t, e) {
          return n[t] - n[e];
        });
      };
    function bn(t) {
      for (var n, e = -1, r = 0, i = t.length, u = -1 / 0; ++e < i; )
        (n = +t[e][1]) > u && ((u = n), (r = e));
      return r;
    }
    var gn = function(t) {
      var n = t.map(yn);
      return cn(t).sort(function(t, e) {
        return n[t] - n[e];
      });
    };
    function yn(t) {
      for (var n, e = 0, r = -1, i = t.length; ++r < i; )
        (n = +t[r][1]) && (e += n);
      return e;
    }
    var mn = function(t) {
        return gn(t).reverse();
      },
      xn = function(t) {
        var n,
          e,
          r = t.length,
          i = t.map(yn),
          u = vn(t),
          o = 0,
          a = 0,
          f = [],
          c = [];
        for (n = 0; n < r; ++n)
          (e = u[n]),
            o < a ? ((o += i[e]), f.push(e)) : ((a += i[e]), c.push(e));
        return c.reverse().concat(f);
      },
      wn = function(t) {
        return cn(t).reverse();
      };
    e.d(n, 'arc', function() {
      return N;
    }),
      e.d(n, 'area', function() {
        return Y;
      }),
      e.d(n, 'line', function() {
        return k;
      }),
      e.d(n, 'pie', function() {
        return j;
      }),
      e.d(n, 'areaRadial', function() {
        return q;
      }),
      e.d(n, 'radialArea', function() {
        return q;
      }),
      e.d(n, 'lineRadial', function() {
        return F;
      }),
      e.d(n, 'radialLine', function() {
        return F;
      }),
      e.d(n, 'pointRadial', function() {
        return H;
      }),
      e.d(n, 'linkHorizontal', function() {
        return Q;
      }),
      e.d(n, 'linkVertical', function() {
        return J;
      }),
      e.d(n, 'linkRadial', function() {
        return tt;
      }),
      e.d(n, 'symbol', function() {
        return gt;
      }),
      e.d(n, 'symbols', function() {
        return bt;
      }),
      e.d(n, 'symbolCircle', function() {
        return nt;
      }),
      e.d(n, 'symbolCross', function() {
        return et;
      }),
      e.d(n, 'symbolDiamond', function() {
        return ut;
      }),
      e.d(n, 'symbolSquare', function() {
        return st;
      }),
      e.d(n, 'symbolStar', function() {
        return ct;
      }),
      e.d(n, 'symbolTriangle', function() {
        return ht;
      }),
      e.d(n, 'symbolWye', function() {
        return vt;
      }),
      e.d(n, 'curveBasisClosed', function() {
        return Mt;
      }),
      e.d(n, 'curveBasisOpen', function() {
        return Et;
      }),
      e.d(n, 'curveBasis', function() {
        return wt;
      }),
      e.d(n, 'curveBundle', function() {
        return Nt;
      }),
      e.d(n, 'curveCardinalClosed', function() {
        return kt;
      }),
      e.d(n, 'curveCardinalOpen', function() {
        return Dt;
      }),
      e.d(n, 'curveCardinal', function() {
        return Ut;
      }),
      e.d(n, 'curveCatmullRomClosed', function() {
        return Bt;
      }),
      e.d(n, 'curveCatmullRomOpen', function() {
        return Ft;
      }),
      e.d(n, 'curveCatmullRom', function() {
        return Lt;
      }),
      e.d(n, 'curveLinearClosed', function() {
        return Ht;
      }),
      e.d(n, 'curveLinear', function() {
        return O;
      }),
      e.d(n, 'curveMonotoneX', function() {
        return Qt;
      }),
      e.d(n, 'curveMonotoneY', function() {
        return Jt;
      }),
      e.d(n, 'curveNatural', function() {
        return en;
      }),
      e.d(n, 'curveStep', function() {
        return un;
      }),
      e.d(n, 'curveStepAfter', function() {
        return an;
      }),
      e.d(n, 'curveStepBefore', function() {
        return on;
      }),
      e.d(n, 'stack', function() {
        return ln;
      }),
      e.d(n, 'stackOffsetExpand', function() {
        return hn;
      }),
      e.d(n, 'stackOffsetDiverging', function() {
        return dn;
      }),
      e.d(n, 'stackOffsetNone', function() {
        return fn;
      }),
      e.d(n, 'stackOffsetSilhouette', function() {
        return pn;
      }),
      e.d(n, 'stackOffsetWiggle', function() {
        return _n;
      }),
      e.d(n, 'stackOrderAppearance', function() {
        return vn;
      }),
      e.d(n, 'stackOrderAscending', function() {
        return gn;
      }),
      e.d(n, 'stackOrderDescending', function() {
        return mn;
      }),
      e.d(n, 'stackOrderInsideOut', function() {
        return xn;
      }),
      e.d(n, 'stackOrderNone', function() {
        return cn;
      }),
      e.d(n, 'stackOrderReverse', function() {
        return wn;
      });
  },
  function(t, n, e) {
    (function(t, r) {
      var i;
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ (function() {
        var u,
          o = 200,
          a = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
          f = 'Expected a function',
          c = '__lodash_hash_undefined__',
          s = 500,
          l = '__lodash_placeholder__',
          h = 1,
          d = 2,
          p = 4,
          _ = 1,
          v = 2,
          b = 1,
          g = 2,
          y = 4,
          m = 8,
          x = 16,
          w = 32,
          C = 64,
          M = 128,
          R = 256,
          E = 512,
          T = 30,
          N = '...',
          A = 800,
          O = 16,
          U = 1,
          S = 2,
          k = 1 / 0,
          Y = 9007199254740991,
          D = 17976931348623157e292,
          I = NaN,
          j = 4294967295,
          L = j - 1,
          P = j >>> 1,
          B = [
            ['ary', M],
            ['bind', b],
            ['bindKey', g],
            ['curry', m],
            ['curryRight', x],
            ['flip', E],
            ['partial', w],
            ['partialRight', C],
            ['rearg', R],
          ],
          z = '[object Arguments]',
          F = '[object Array]',
          q = '[object AsyncFunction]',
          H = '[object Boolean]',
          $ = '[object Date]',
          W = '[object DOMException]',
          G = '[object Error]',
          Z = '[object Function]',
          V = '[object GeneratorFunction]',
          X = '[object Map]',
          K = '[object Number]',
          Q = '[object Null]',
          J = '[object Object]',
          tt = '[object Proxy]',
          nt = '[object RegExp]',
          et = '[object Set]',
          rt = '[object String]',
          it = '[object Symbol]',
          ut = '[object Undefined]',
          ot = '[object WeakMap]',
          at = '[object WeakSet]',
          ft = '[object ArrayBuffer]',
          ct = '[object DataView]',
          st = '[object Float32Array]',
          lt = '[object Float64Array]',
          ht = '[object Int8Array]',
          dt = '[object Int16Array]',
          pt = '[object Int32Array]',
          _t = '[object Uint8Array]',
          vt = '[object Uint8ClampedArray]',
          bt = '[object Uint16Array]',
          gt = '[object Uint32Array]',
          yt = /\b__p \+= '';/g,
          mt = /\b(__p \+=) '' \+/g,
          xt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          wt = /&(?:amp|lt|gt|quot|#39);/g,
          Ct = /[&<>"']/g,
          Mt = RegExp(wt.source),
          Rt = RegExp(Ct.source),
          Et = /<%-([\s\S]+?)%>/g,
          Tt = /<%([\s\S]+?)%>/g,
          Nt = /<%=([\s\S]+?)%>/g,
          At = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          Ot = /^\w*$/,
          Ut = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          St = /[\\^$.*+?()[\]{}|]/g,
          kt = RegExp(St.source),
          Yt = /^\s+|\s+$/g,
          Dt = /^\s+/,
          It = /\s+$/,
          jt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          Lt = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Pt = /,? & /,
          Bt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          zt = /\\(\\)?/g,
          Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          qt = /\w*$/,
          Ht = /^[-+]0x[0-9a-f]+$/i,
          $t = /^0b[01]+$/i,
          Wt = /^\[object .+?Constructor\]$/,
          Gt = /^0o[0-7]+$/i,
          Zt = /^(?:0|[1-9]\d*)$/,
          Vt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          Xt = /($^)/,
          Kt = /['\n\r\u2028\u2029\\]/g,
          Qt = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
          Jt =
            '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          tn = '[\\ud800-\\udfff]',
          nn = '[' + Jt + ']',
          en = '[' + Qt + ']',
          rn = '\\d+',
          un = '[\\u2700-\\u27bf]',
          on = '[a-z\\xdf-\\xf6\\xf8-\\xff]',
          an =
            '[^\\ud800-\\udfff' +
            Jt +
            rn +
            '\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]',
          fn = '\\ud83c[\\udffb-\\udfff]',
          cn = '[^\\ud800-\\udfff]',
          sn = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          ln = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          hn = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
          dn = '(?:' + on + '|' + an + ')',
          pn = '(?:' + hn + '|' + an + ')',
          _n = '(?:' + en + '|' + fn + ')' + '?',
          vn =
            '[\\ufe0e\\ufe0f]?' +
            _n +
            ('(?:\\u200d(?:' +
              [cn, sn, ln].join('|') +
              ')[\\ufe0e\\ufe0f]?' +
              _n +
              ')*'),
          bn = '(?:' + [un, sn, ln].join('|') + ')' + vn,
          gn = '(?:' + [cn + en + '?', en, sn, ln, tn].join('|') + ')',
          yn = RegExp("['’]", 'g'),
          mn = RegExp(en, 'g'),
          xn = RegExp(fn + '(?=' + fn + ')|' + gn + vn, 'g'),
          wn = RegExp(
            [
              hn +
                '?' +
                on +
                "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
                [nn, hn, '$'].join('|') +
                ')',
              pn +
                "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                [nn, hn + dn, '$'].join('|') +
                ')',
              hn + '?' + dn + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
              hn + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
              '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
              '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
              rn,
              bn,
            ].join('|'),
            'g'
          ),
          Cn = RegExp('[\\u200d\\ud800-\\udfff' + Qt + '\\ufe0e\\ufe0f]'),
          Mn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          Rn = [
            'Array',
            'Buffer',
            'DataView',
            'Date',
            'Error',
            'Float32Array',
            'Float64Array',
            'Function',
            'Int8Array',
            'Int16Array',
            'Int32Array',
            'Map',
            'Math',
            'Object',
            'Promise',
            'RegExp',
            'Set',
            'String',
            'Symbol',
            'TypeError',
            'Uint8Array',
            'Uint8ClampedArray',
            'Uint16Array',
            'Uint32Array',
            'WeakMap',
            '_',
            'clearTimeout',
            'isFinite',
            'parseInt',
            'setTimeout',
          ],
          En = -1,
          Tn = {};
        (Tn[st] = Tn[lt] = Tn[ht] = Tn[dt] = Tn[pt] = Tn[_t] = Tn[vt] = Tn[
          bt
        ] = Tn[gt] = !0),
          (Tn[z] = Tn[F] = Tn[ft] = Tn[H] = Tn[ct] = Tn[$] = Tn[G] = Tn[Z] = Tn[
            X
          ] = Tn[K] = Tn[J] = Tn[nt] = Tn[et] = Tn[rt] = Tn[ot] = !1);
        var Nn = {};
        (Nn[z] = Nn[F] = Nn[ft] = Nn[ct] = Nn[H] = Nn[$] = Nn[st] = Nn[lt] = Nn[
          ht
        ] = Nn[dt] = Nn[pt] = Nn[X] = Nn[K] = Nn[J] = Nn[nt] = Nn[et] = Nn[
          rt
        ] = Nn[it] = Nn[_t] = Nn[vt] = Nn[bt] = Nn[gt] = !0),
          (Nn[G] = Nn[Z] = Nn[ot] = !1);
        var An = {
            '\\': '\\',
            "'": "'",
            '\n': 'n',
            '\r': 'r',
            '\u2028': 'u2028',
            '\u2029': 'u2029',
          },
          On = parseFloat,
          Un = parseInt,
          Sn = 'object' == typeof t && t && t.Object === Object && t,
          kn =
            'object' == typeof self && self && self.Object === Object && self,
          Yn = Sn || kn || Function('return this')(),
          Dn = n && !n.nodeType && n,
          In = Dn && 'object' == typeof r && r && !r.nodeType && r,
          jn = In && In.exports === Dn,
          Ln = jn && Sn.process,
          Pn = (function() {
            try {
              var t = In && In.require && In.require('util').types;
              return t || (Ln && Ln.binding && Ln.binding('util'));
            } catch (t) {}
          })(),
          Bn = Pn && Pn.isArrayBuffer,
          zn = Pn && Pn.isDate,
          Fn = Pn && Pn.isMap,
          qn = Pn && Pn.isRegExp,
          Hn = Pn && Pn.isSet,
          $n = Pn && Pn.isTypedArray;
        function Wn(t, n, e) {
          switch (e.length) {
            case 0:
              return t.call(n);
            case 1:
              return t.call(n, e[0]);
            case 2:
              return t.call(n, e[0], e[1]);
            case 3:
              return t.call(n, e[0], e[1], e[2]);
          }
          return t.apply(n, e);
        }
        function Gn(t, n, e, r) {
          for (var i = -1, u = null == t ? 0 : t.length; ++i < u; ) {
            var o = t[i];
            n(r, o, e(o), t);
          }
          return r;
        }
        function Zn(t, n) {
          for (
            var e = -1, r = null == t ? 0 : t.length;
            ++e < r && !1 !== n(t[e], e, t);

          );
          return t;
        }
        function Vn(t, n) {
          for (var e = null == t ? 0 : t.length; e-- && !1 !== n(t[e], e, t); );
          return t;
        }
        function Xn(t, n) {
          for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
            if (!n(t[e], e, t)) return !1;
          return !0;
        }
        function Kn(t, n) {
          for (
            var e = -1, r = null == t ? 0 : t.length, i = 0, u = [];
            ++e < r;

          ) {
            var o = t[e];
            n(o, e, t) && (u[i++] = o);
          }
          return u;
        }
        function Qn(t, n) {
          return !!(null == t ? 0 : t.length) && fe(t, n, 0) > -1;
        }
        function Jn(t, n, e) {
          for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
            if (e(n, t[r])) return !0;
          return !1;
        }
        function te(t, n) {
          for (
            var e = -1, r = null == t ? 0 : t.length, i = Array(r);
            ++e < r;

          )
            i[e] = n(t[e], e, t);
          return i;
        }
        function ne(t, n) {
          for (var e = -1, r = n.length, i = t.length; ++e < r; )
            t[i + e] = n[e];
          return t;
        }
        function ee(t, n, e, r) {
          var i = -1,
            u = null == t ? 0 : t.length;
          for (r && u && (e = t[++i]); ++i < u; ) e = n(e, t[i], i, t);
          return e;
        }
        function re(t, n, e, r) {
          var i = null == t ? 0 : t.length;
          for (r && i && (e = t[--i]); i--; ) e = n(e, t[i], i, t);
          return e;
        }
        function ie(t, n) {
          for (var e = -1, r = null == t ? 0 : t.length; ++e < r; )
            if (n(t[e], e, t)) return !0;
          return !1;
        }
        var ue = he('length');
        function oe(t, n, e) {
          var r;
          return (
            e(t, function(t, e, i) {
              if (n(t, e, i)) return (r = e), !1;
            }),
            r
          );
        }
        function ae(t, n, e, r) {
          for (var i = t.length, u = e + (r ? 1 : -1); r ? u-- : ++u < i; )
            if (n(t[u], u, t)) return u;
          return -1;
        }
        function fe(t, n, e) {
          return n == n
            ? (function(t, n, e) {
                var r = e - 1,
                  i = t.length;
                for (; ++r < i; ) if (t[r] === n) return r;
                return -1;
              })(t, n, e)
            : ae(t, se, e);
        }
        function ce(t, n, e, r) {
          for (var i = e - 1, u = t.length; ++i < u; ) if (r(t[i], n)) return i;
          return -1;
        }
        function se(t) {
          return t != t;
        }
        function le(t, n) {
          var e = null == t ? 0 : t.length;
          return e ? _e(t, n) / e : I;
        }
        function he(t) {
          return function(n) {
            return null == n ? u : n[t];
          };
        }
        function de(t) {
          return function(n) {
            return null == t ? u : t[n];
          };
        }
        function pe(t, n, e, r, i) {
          return (
            i(t, function(t, i, u) {
              e = r ? ((r = !1), t) : n(e, t, i, u);
            }),
            e
          );
        }
        function _e(t, n) {
          for (var e, r = -1, i = t.length; ++r < i; ) {
            var o = n(t[r]);
            o !== u && (e = e === u ? o : e + o);
          }
          return e;
        }
        function ve(t, n) {
          for (var e = -1, r = Array(t); ++e < t; ) r[e] = n(e);
          return r;
        }
        function be(t) {
          return function(n) {
            return t(n);
          };
        }
        function ge(t, n) {
          return te(n, function(n) {
            return t[n];
          });
        }
        function ye(t, n) {
          return t.has(n);
        }
        function me(t, n) {
          for (var e = -1, r = t.length; ++e < r && fe(n, t[e], 0) > -1; );
          return e;
        }
        function xe(t, n) {
          for (var e = t.length; e-- && fe(n, t[e], 0) > -1; );
          return e;
        }
        var we = de({
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ã: 'A',
            Ä: 'A',
            Å: 'A',
            à: 'a',
            á: 'a',
            â: 'a',
            ã: 'a',
            ä: 'a',
            å: 'a',
            Ç: 'C',
            ç: 'c',
            Ð: 'D',
            ð: 'd',
            È: 'E',
            É: 'E',
            Ê: 'E',
            Ë: 'E',
            è: 'e',
            é: 'e',
            ê: 'e',
            ë: 'e',
            Ì: 'I',
            Í: 'I',
            Î: 'I',
            Ï: 'I',
            ì: 'i',
            í: 'i',
            î: 'i',
            ï: 'i',
            Ñ: 'N',
            ñ: 'n',
            Ò: 'O',
            Ó: 'O',
            Ô: 'O',
            Õ: 'O',
            Ö: 'O',
            Ø: 'O',
            ò: 'o',
            ó: 'o',
            ô: 'o',
            õ: 'o',
            ö: 'o',
            ø: 'o',
            Ù: 'U',
            Ú: 'U',
            Û: 'U',
            Ü: 'U',
            ù: 'u',
            ú: 'u',
            û: 'u',
            ü: 'u',
            Ý: 'Y',
            ý: 'y',
            ÿ: 'y',
            Æ: 'Ae',
            æ: 'ae',
            Þ: 'Th',
            þ: 'th',
            ß: 'ss',
            Ā: 'A',
            Ă: 'A',
            Ą: 'A',
            ā: 'a',
            ă: 'a',
            ą: 'a',
            Ć: 'C',
            Ĉ: 'C',
            Ċ: 'C',
            Č: 'C',
            ć: 'c',
            ĉ: 'c',
            ċ: 'c',
            č: 'c',
            Ď: 'D',
            Đ: 'D',
            ď: 'd',
            đ: 'd',
            Ē: 'E',
            Ĕ: 'E',
            Ė: 'E',
            Ę: 'E',
            Ě: 'E',
            ē: 'e',
            ĕ: 'e',
            ė: 'e',
            ę: 'e',
            ě: 'e',
            Ĝ: 'G',
            Ğ: 'G',
            Ġ: 'G',
            Ģ: 'G',
            ĝ: 'g',
            ğ: 'g',
            ġ: 'g',
            ģ: 'g',
            Ĥ: 'H',
            Ħ: 'H',
            ĥ: 'h',
            ħ: 'h',
            Ĩ: 'I',
            Ī: 'I',
            Ĭ: 'I',
            Į: 'I',
            İ: 'I',
            ĩ: 'i',
            ī: 'i',
            ĭ: 'i',
            į: 'i',
            ı: 'i',
            Ĵ: 'J',
            ĵ: 'j',
            Ķ: 'K',
            ķ: 'k',
            ĸ: 'k',
            Ĺ: 'L',
            Ļ: 'L',
            Ľ: 'L',
            Ŀ: 'L',
            Ł: 'L',
            ĺ: 'l',
            ļ: 'l',
            ľ: 'l',
            ŀ: 'l',
            ł: 'l',
            Ń: 'N',
            Ņ: 'N',
            Ň: 'N',
            Ŋ: 'N',
            ń: 'n',
            ņ: 'n',
            ň: 'n',
            ŋ: 'n',
            Ō: 'O',
            Ŏ: 'O',
            Ő: 'O',
            ō: 'o',
            ŏ: 'o',
            ő: 'o',
            Ŕ: 'R',
            Ŗ: 'R',
            Ř: 'R',
            ŕ: 'r',
            ŗ: 'r',
            ř: 'r',
            Ś: 'S',
            Ŝ: 'S',
            Ş: 'S',
            Š: 'S',
            ś: 's',
            ŝ: 's',
            ş: 's',
            š: 's',
            Ţ: 'T',
            Ť: 'T',
            Ŧ: 'T',
            ţ: 't',
            ť: 't',
            ŧ: 't',
            Ũ: 'U',
            Ū: 'U',
            Ŭ: 'U',
            Ů: 'U',
            Ű: 'U',
            Ų: 'U',
            ũ: 'u',
            ū: 'u',
            ŭ: 'u',
            ů: 'u',
            ű: 'u',
            ų: 'u',
            Ŵ: 'W',
            ŵ: 'w',
            Ŷ: 'Y',
            ŷ: 'y',
            Ÿ: 'Y',
            Ź: 'Z',
            Ż: 'Z',
            Ž: 'Z',
            ź: 'z',
            ż: 'z',
            ž: 'z',
            Ĳ: 'IJ',
            ĳ: 'ij',
            Œ: 'Oe',
            œ: 'oe',
            ŉ: "'n",
            ſ: 's',
          }),
          Ce = de({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
          });
        function Me(t) {
          return '\\' + An[t];
        }
        function Re(t) {
          return Cn.test(t);
        }
        function Ee(t) {
          var n = -1,
            e = Array(t.size);
          return (
            t.forEach(function(t, r) {
              e[++n] = [r, t];
            }),
            e
          );
        }
        function Te(t, n) {
          return function(e) {
            return t(n(e));
          };
        }
        function Ne(t, n) {
          for (var e = -1, r = t.length, i = 0, u = []; ++e < r; ) {
            var o = t[e];
            (o !== n && o !== l) || ((t[e] = l), (u[i++] = e));
          }
          return u;
        }
        function Ae(t) {
          var n = -1,
            e = Array(t.size);
          return (
            t.forEach(function(t) {
              e[++n] = t;
            }),
            e
          );
        }
        function Oe(t) {
          var n = -1,
            e = Array(t.size);
          return (
            t.forEach(function(t) {
              e[++n] = [t, t];
            }),
            e
          );
        }
        function Ue(t) {
          return Re(t)
            ? (function(t) {
                var n = (xn.lastIndex = 0);
                for (; xn.test(t); ) ++n;
                return n;
              })(t)
            : ue(t);
        }
        function Se(t) {
          return Re(t)
            ? (function(t) {
                return t.match(xn) || [];
              })(t)
            : (function(t) {
                return t.split('');
              })(t);
        }
        var ke = de({
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&#39;': "'",
        });
        var Ye = (function t(n) {
          var e,
            r = (n =
              null == n ? Yn : Ye.defaults(Yn.Object(), n, Ye.pick(Yn, Rn)))
              .Array,
            i = n.Date,
            Qt = n.Error,
            Jt = n.Function,
            tn = n.Math,
            nn = n.Object,
            en = n.RegExp,
            rn = n.String,
            un = n.TypeError,
            on = r.prototype,
            an = Jt.prototype,
            fn = nn.prototype,
            cn = n['__core-js_shared__'],
            sn = an.toString,
            ln = fn.hasOwnProperty,
            hn = 0,
            dn = (e = /[^.]+$/.exec((cn && cn.keys && cn.keys.IE_PROTO) || ''))
              ? 'Symbol(src)_1.' + e
              : '',
            pn = fn.toString,
            _n = sn.call(nn),
            vn = Yn._,
            bn = en(
              '^' +
                sn
                  .call(ln)
                  .replace(St, '\\$&')
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    '$1.*?'
                  ) +
                '$'
            ),
            gn = jn ? n.Buffer : u,
            xn = n.Symbol,
            Cn = n.Uint8Array,
            An = gn ? gn.allocUnsafe : u,
            Sn = Te(nn.getPrototypeOf, nn),
            kn = nn.create,
            Dn = fn.propertyIsEnumerable,
            In = on.splice,
            Ln = xn ? xn.isConcatSpreadable : u,
            Pn = xn ? xn.iterator : u,
            ue = xn ? xn.toStringTag : u,
            de = (function() {
              try {
                var t = Lu(nn, 'defineProperty');
                return t({}, '', {}), t;
              } catch (t) {}
            })(),
            De = n.clearTimeout !== Yn.clearTimeout && n.clearTimeout,
            Ie = i && i.now !== Yn.Date.now && i.now,
            je = n.setTimeout !== Yn.setTimeout && n.setTimeout,
            Le = tn.ceil,
            Pe = tn.floor,
            Be = nn.getOwnPropertySymbols,
            ze = gn ? gn.isBuffer : u,
            Fe = n.isFinite,
            qe = on.join,
            He = Te(nn.keys, nn),
            $e = tn.max,
            We = tn.min,
            Ge = i.now,
            Ze = n.parseInt,
            Ve = tn.random,
            Xe = on.reverse,
            Ke = Lu(n, 'DataView'),
            Qe = Lu(n, 'Map'),
            Je = Lu(n, 'Promise'),
            tr = Lu(n, 'Set'),
            nr = Lu(n, 'WeakMap'),
            er = Lu(nn, 'create'),
            rr = nr && new nr(),
            ir = {},
            ur = so(Ke),
            or = so(Qe),
            ar = so(Je),
            fr = so(tr),
            cr = so(nr),
            sr = xn ? xn.prototype : u,
            lr = sr ? sr.valueOf : u,
            hr = sr ? sr.toString : u;
          function dr(t) {
            if (Na(t) && !ba(t) && !(t instanceof br)) {
              if (t instanceof vr) return t;
              if (ln.call(t, '__wrapped__')) return lo(t);
            }
            return new vr(t);
          }
          var pr = (function() {
            function t() {}
            return function(n) {
              if (!Ta(n)) return {};
              if (kn) return kn(n);
              t.prototype = n;
              var e = new t();
              return (t.prototype = u), e;
            };
          })();
          function _r() {}
          function vr(t, n) {
            (this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__chain__ = !!n),
              (this.__index__ = 0),
              (this.__values__ = u);
          }
          function br(t) {
            (this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = j),
              (this.__views__ = []);
          }
          function gr(t) {
            var n = -1,
              e = null == t ? 0 : t.length;
            for (this.clear(); ++n < e; ) {
              var r = t[n];
              this.set(r[0], r[1]);
            }
          }
          function yr(t) {
            var n = -1,
              e = null == t ? 0 : t.length;
            for (this.clear(); ++n < e; ) {
              var r = t[n];
              this.set(r[0], r[1]);
            }
          }
          function mr(t) {
            var n = -1,
              e = null == t ? 0 : t.length;
            for (this.clear(); ++n < e; ) {
              var r = t[n];
              this.set(r[0], r[1]);
            }
          }
          function xr(t) {
            var n = -1,
              e = null == t ? 0 : t.length;
            for (this.__data__ = new mr(); ++n < e; ) this.add(t[n]);
          }
          function wr(t) {
            var n = (this.__data__ = new yr(t));
            this.size = n.size;
          }
          function Cr(t, n) {
            var e = ba(t),
              r = !e && va(t),
              i = !e && !r && xa(t),
              u = !e && !r && !i && Ia(t),
              o = e || r || i || u,
              a = o ? ve(t.length, rn) : [],
              f = a.length;
            for (var c in t)
              (!n && !ln.call(t, c)) ||
                (o &&
                  ('length' == c ||
                    (i && ('offset' == c || 'parent' == c)) ||
                    (u &&
                      ('buffer' == c ||
                        'byteLength' == c ||
                        'byteOffset' == c)) ||
                    $u(c, f))) ||
                a.push(c);
            return a;
          }
          function Mr(t) {
            var n = t.length;
            return n ? t[xi(0, n - 1)] : u;
          }
          function Rr(t, n) {
            return ao(eu(t), Yr(n, 0, t.length));
          }
          function Er(t) {
            return ao(eu(t));
          }
          function Tr(t, n, e) {
            ((e === u || da(t[n], e)) && (e !== u || n in t)) || Sr(t, n, e);
          }
          function Nr(t, n, e) {
            var r = t[n];
            (ln.call(t, n) && da(r, e) && (e !== u || n in t)) || Sr(t, n, e);
          }
          function Ar(t, n) {
            for (var e = t.length; e--; ) if (da(t[e][0], n)) return e;
            return -1;
          }
          function Or(t, n, e, r) {
            return (
              Pr(t, function(t, i, u) {
                n(r, t, e(t), u);
              }),
              r
            );
          }
          function Ur(t, n) {
            return t && ru(n, uf(n), t);
          }
          function Sr(t, n, e) {
            '__proto__' == n && de
              ? de(t, n, {
                  configurable: !0,
                  enumerable: !0,
                  value: e,
                  writable: !0,
                })
              : (t[n] = e);
          }
          function kr(t, n) {
            for (var e = -1, i = n.length, o = r(i), a = null == t; ++e < i; )
              o[e] = a ? u : Ja(t, n[e]);
            return o;
          }
          function Yr(t, n, e) {
            return (
              t == t &&
                (e !== u && (t = t <= e ? t : e),
                n !== u && (t = t >= n ? t : n)),
              t
            );
          }
          function Dr(t, n, e, r, i, o) {
            var a,
              f = n & h,
              c = n & d,
              s = n & p;
            if ((e && (a = i ? e(t, r, i, o) : e(t)), a !== u)) return a;
            if (!Ta(t)) return t;
            var l = ba(t);
            if (l) {
              if (
                ((a = (function(t) {
                  var n = t.length,
                    e = new t.constructor(n);
                  return (
                    n &&
                      'string' == typeof t[0] &&
                      ln.call(t, 'index') &&
                      ((e.index = t.index), (e.input = t.input)),
                    e
                  );
                })(t)),
                !f)
              )
                return eu(t, a);
            } else {
              var _ = zu(t),
                v = _ == Z || _ == V;
              if (xa(t)) return Xi(t, f);
              if (_ == J || _ == z || (v && !i)) {
                if (((a = c || v ? {} : qu(t)), !f))
                  return c
                    ? (function(t, n) {
                        return ru(t, Bu(t), n);
                      })(
                        t,
                        (function(t, n) {
                          return t && ru(n, of(n), t);
                        })(a, t)
                      )
                    : (function(t, n) {
                        return ru(t, Pu(t), n);
                      })(t, Ur(a, t));
              } else {
                if (!Nn[_]) return i ? t : {};
                a = (function(t, n, e) {
                  var r,
                    i = t.constructor;
                  switch (n) {
                    case ft:
                      return Ki(t);
                    case H:
                    case $:
                      return new i(+t);
                    case ct:
                      return (function(t, n) {
                        var e = n ? Ki(t.buffer) : t.buffer;
                        return new t.constructor(e, t.byteOffset, t.byteLength);
                      })(t, e);
                    case st:
                    case lt:
                    case ht:
                    case dt:
                    case pt:
                    case _t:
                    case vt:
                    case bt:
                    case gt:
                      return Qi(t, e);
                    case X:
                      return new i();
                    case K:
                    case rt:
                      return new i(t);
                    case nt:
                      return (function(t) {
                        var n = new t.constructor(t.source, qt.exec(t));
                        return (n.lastIndex = t.lastIndex), n;
                      })(t);
                    case et:
                      return new i();
                    case it:
                      return (r = t), lr ? nn(lr.call(r)) : {};
                  }
                })(t, _, f);
              }
            }
            o || (o = new wr());
            var b = o.get(t);
            if (b) return b;
            o.set(t, a),
              ka(t)
                ? t.forEach(function(r) {
                    a.add(Dr(r, n, e, r, t, o));
                  })
                : Aa(t) &&
                  t.forEach(function(r, i) {
                    a.set(i, Dr(r, n, e, i, t, o));
                  });
            var g = l ? u : (s ? (c ? Uu : Ou) : c ? of : uf)(t);
            return (
              Zn(g || t, function(r, i) {
                g && (r = t[(i = r)]), Nr(a, i, Dr(r, n, e, i, t, o));
              }),
              a
            );
          }
          function Ir(t, n, e) {
            var r = e.length;
            if (null == t) return !r;
            for (t = nn(t); r--; ) {
              var i = e[r],
                o = n[i],
                a = t[i];
              if ((a === u && !(i in t)) || !o(a)) return !1;
            }
            return !0;
          }
          function jr(t, n, e) {
            if ('function' != typeof t) throw new un(f);
            return ro(function() {
              t.apply(u, e);
            }, n);
          }
          function Lr(t, n, e, r) {
            var i = -1,
              u = Qn,
              a = !0,
              f = t.length,
              c = [],
              s = n.length;
            if (!f) return c;
            e && (n = te(n, be(e))),
              r
                ? ((u = Jn), (a = !1))
                : n.length >= o && ((u = ye), (a = !1), (n = new xr(n)));
            t: for (; ++i < f; ) {
              var l = t[i],
                h = null == e ? l : e(l);
              if (((l = r || 0 !== l ? l : 0), a && h == h)) {
                for (var d = s; d--; ) if (n[d] === h) continue t;
                c.push(l);
              } else u(n, h, r) || c.push(l);
            }
            return c;
          }
          (dr.templateSettings = {
            escape: Et,
            evaluate: Tt,
            interpolate: Nt,
            variable: '',
            imports: {_: dr},
          }),
            (dr.prototype = _r.prototype),
            (dr.prototype.constructor = dr),
            (vr.prototype = pr(_r.prototype)),
            (vr.prototype.constructor = vr),
            (br.prototype = pr(_r.prototype)),
            (br.prototype.constructor = br),
            (gr.prototype.clear = function() {
              (this.__data__ = er ? er(null) : {}), (this.size = 0);
            }),
            (gr.prototype.delete = function(t) {
              var n = this.has(t) && delete this.__data__[t];
              return (this.size -= n ? 1 : 0), n;
            }),
            (gr.prototype.get = function(t) {
              var n = this.__data__;
              if (er) {
                var e = n[t];
                return e === c ? u : e;
              }
              return ln.call(n, t) ? n[t] : u;
            }),
            (gr.prototype.has = function(t) {
              var n = this.__data__;
              return er ? n[t] !== u : ln.call(n, t);
            }),
            (gr.prototype.set = function(t, n) {
              var e = this.__data__;
              return (
                (this.size += this.has(t) ? 0 : 1),
                (e[t] = er && n === u ? c : n),
                this
              );
            }),
            (yr.prototype.clear = function() {
              (this.__data__ = []), (this.size = 0);
            }),
            (yr.prototype.delete = function(t) {
              var n = this.__data__,
                e = Ar(n, t);
              return !(
                e < 0 ||
                (e == n.length - 1 ? n.pop() : In.call(n, e, 1), --this.size, 0)
              );
            }),
            (yr.prototype.get = function(t) {
              var n = this.__data__,
                e = Ar(n, t);
              return e < 0 ? u : n[e][1];
            }),
            (yr.prototype.has = function(t) {
              return Ar(this.__data__, t) > -1;
            }),
            (yr.prototype.set = function(t, n) {
              var e = this.__data__,
                r = Ar(e, t);
              return (
                r < 0 ? (++this.size, e.push([t, n])) : (e[r][1] = n), this
              );
            }),
            (mr.prototype.clear = function() {
              (this.size = 0),
                (this.__data__ = {
                  hash: new gr(),
                  map: new (Qe || yr)(),
                  string: new gr(),
                });
            }),
            (mr.prototype.delete = function(t) {
              var n = Iu(this, t).delete(t);
              return (this.size -= n ? 1 : 0), n;
            }),
            (mr.prototype.get = function(t) {
              return Iu(this, t).get(t);
            }),
            (mr.prototype.has = function(t) {
              return Iu(this, t).has(t);
            }),
            (mr.prototype.set = function(t, n) {
              var e = Iu(this, t),
                r = e.size;
              return e.set(t, n), (this.size += e.size == r ? 0 : 1), this;
            }),
            (xr.prototype.add = xr.prototype.push = function(t) {
              return this.__data__.set(t, c), this;
            }),
            (xr.prototype.has = function(t) {
              return this.__data__.has(t);
            }),
            (wr.prototype.clear = function() {
              (this.__data__ = new yr()), (this.size = 0);
            }),
            (wr.prototype.delete = function(t) {
              var n = this.__data__,
                e = n.delete(t);
              return (this.size = n.size), e;
            }),
            (wr.prototype.get = function(t) {
              return this.__data__.get(t);
            }),
            (wr.prototype.has = function(t) {
              return this.__data__.has(t);
            }),
            (wr.prototype.set = function(t, n) {
              var e = this.__data__;
              if (e instanceof yr) {
                var r = e.__data__;
                if (!Qe || r.length < o - 1)
                  return r.push([t, n]), (this.size = ++e.size), this;
                e = this.__data__ = new mr(r);
              }
              return e.set(t, n), (this.size = e.size), this;
            });
          var Pr = ou(Gr),
            Br = ou(Zr, !0);
          function zr(t, n) {
            var e = !0;
            return (
              Pr(t, function(t, r, i) {
                return (e = !!n(t, r, i));
              }),
              e
            );
          }
          function Fr(t, n, e) {
            for (var r = -1, i = t.length; ++r < i; ) {
              var o = t[r],
                a = n(o);
              if (null != a && (f === u ? a == a && !Da(a) : e(a, f)))
                var f = a,
                  c = o;
            }
            return c;
          }
          function qr(t, n) {
            var e = [];
            return (
              Pr(t, function(t, r, i) {
                n(t, r, i) && e.push(t);
              }),
              e
            );
          }
          function Hr(t, n, e, r, i) {
            var u = -1,
              o = t.length;
            for (e || (e = Hu), i || (i = []); ++u < o; ) {
              var a = t[u];
              n > 0 && e(a)
                ? n > 1
                  ? Hr(a, n - 1, e, r, i)
                  : ne(i, a)
                : r || (i[i.length] = a);
            }
            return i;
          }
          var $r = au(),
            Wr = au(!0);
          function Gr(t, n) {
            return t && $r(t, n, uf);
          }
          function Zr(t, n) {
            return t && Wr(t, n, uf);
          }
          function Vr(t, n) {
            return Kn(n, function(n) {
              return Ma(t[n]);
            });
          }
          function Xr(t, n) {
            for (var e = 0, r = (n = Wi(n, t)).length; null != t && e < r; )
              t = t[co(n[e++])];
            return e && e == r ? t : u;
          }
          function Kr(t, n, e) {
            var r = n(t);
            return ba(t) ? r : ne(r, e(t));
          }
          function Qr(t) {
            return null == t
              ? t === u
                ? ut
                : Q
              : ue && ue in nn(t)
              ? (function(t) {
                  var n = ln.call(t, ue),
                    e = t[ue];
                  try {
                    t[ue] = u;
                    var r = !0;
                  } catch (t) {}
                  var i = pn.call(t);
                  return r && (n ? (t[ue] = e) : delete t[ue]), i;
                })(t)
              : (function(t) {
                  return pn.call(t);
                })(t);
          }
          function Jr(t, n) {
            return t > n;
          }
          function ti(t, n) {
            return null != t && ln.call(t, n);
          }
          function ni(t, n) {
            return null != t && n in nn(t);
          }
          function ei(t, n, e) {
            for (
              var i = e ? Jn : Qn,
                o = t[0].length,
                a = t.length,
                f = a,
                c = r(a),
                s = 1 / 0,
                l = [];
              f--;

            ) {
              var h = t[f];
              f && n && (h = te(h, be(n))),
                (s = We(h.length, s)),
                (c[f] =
                  !e && (n || (o >= 120 && h.length >= 120))
                    ? new xr(f && h)
                    : u);
            }
            h = t[0];
            var d = -1,
              p = c[0];
            t: for (; ++d < o && l.length < s; ) {
              var _ = h[d],
                v = n ? n(_) : _;
              if (((_ = e || 0 !== _ ? _ : 0), !(p ? ye(p, v) : i(l, v, e)))) {
                for (f = a; --f; ) {
                  var b = c[f];
                  if (!(b ? ye(b, v) : i(t[f], v, e))) continue t;
                }
                p && p.push(v), l.push(_);
              }
            }
            return l;
          }
          function ri(t, n, e) {
            var r = null == (t = to(t, (n = Wi(n, t)))) ? t : t[co(Co(n))];
            return null == r ? u : Wn(r, t, e);
          }
          function ii(t) {
            return Na(t) && Qr(t) == z;
          }
          function ui(t, n, e, r, i) {
            return (
              t === n ||
              (null == t || null == n || (!Na(t) && !Na(n))
                ? t != t && n != n
                : (function(t, n, e, r, i, o) {
                    var a = ba(t),
                      f = ba(n),
                      c = a ? F : zu(t),
                      s = f ? F : zu(n),
                      l = (c = c == z ? J : c) == J,
                      h = (s = s == z ? J : s) == J,
                      d = c == s;
                    if (d && xa(t)) {
                      if (!xa(n)) return !1;
                      (a = !0), (l = !1);
                    }
                    if (d && !l)
                      return (
                        o || (o = new wr()),
                        a || Ia(t)
                          ? Nu(t, n, e, r, i, o)
                          : (function(t, n, e, r, i, u, o) {
                              switch (e) {
                                case ct:
                                  if (
                                    t.byteLength != n.byteLength ||
                                    t.byteOffset != n.byteOffset
                                  )
                                    return !1;
                                  (t = t.buffer), (n = n.buffer);
                                case ft:
                                  return !(
                                    t.byteLength != n.byteLength ||
                                    !u(new Cn(t), new Cn(n))
                                  );
                                case H:
                                case $:
                                case K:
                                  return da(+t, +n);
                                case G:
                                  return (
                                    t.name == n.name && t.message == n.message
                                  );
                                case nt:
                                case rt:
                                  return t == n + '';
                                case X:
                                  var a = Ee;
                                case et:
                                  var f = r & _;
                                  if ((a || (a = Ae), t.size != n.size && !f))
                                    return !1;
                                  var c = o.get(t);
                                  if (c) return c == n;
                                  (r |= v), o.set(t, n);
                                  var s = Nu(a(t), a(n), r, i, u, o);
                                  return o.delete(t), s;
                                case it:
                                  if (lr) return lr.call(t) == lr.call(n);
                              }
                              return !1;
                            })(t, n, c, e, r, i, o)
                      );
                    if (!(e & _)) {
                      var p = l && ln.call(t, '__wrapped__'),
                        b = h && ln.call(n, '__wrapped__');
                      if (p || b) {
                        var g = p ? t.value() : t,
                          y = b ? n.value() : n;
                        return o || (o = new wr()), i(g, y, e, r, o);
                      }
                    }
                    return (
                      !!d &&
                      (o || (o = new wr()),
                      (function(t, n, e, r, i, o) {
                        var a = e & _,
                          f = Ou(t),
                          c = f.length,
                          s = Ou(n).length;
                        if (c != s && !a) return !1;
                        for (var l = c; l--; ) {
                          var h = f[l];
                          if (!(a ? h in n : ln.call(n, h))) return !1;
                        }
                        var d = o.get(t);
                        if (d && o.get(n)) return d == n;
                        var p = !0;
                        o.set(t, n), o.set(n, t);
                        for (var v = a; ++l < c; ) {
                          h = f[l];
                          var b = t[h],
                            g = n[h];
                          if (r)
                            var y = a
                              ? r(g, b, h, n, t, o)
                              : r(b, g, h, t, n, o);
                          if (!(y === u ? b === g || i(b, g, e, r, o) : y)) {
                            p = !1;
                            break;
                          }
                          v || (v = 'constructor' == h);
                        }
                        if (p && !v) {
                          var m = t.constructor,
                            x = n.constructor;
                          m != x &&
                            'constructor' in t &&
                            'constructor' in n &&
                            !(
                              'function' == typeof m &&
                              m instanceof m &&
                              'function' == typeof x &&
                              x instanceof x
                            ) &&
                            (p = !1);
                        }
                        return o.delete(t), o.delete(n), p;
                      })(t, n, e, r, i, o))
                    );
                  })(t, n, e, r, ui, i))
            );
          }
          function oi(t, n, e, r) {
            var i = e.length,
              o = i,
              a = !r;
            if (null == t) return !o;
            for (t = nn(t); i--; ) {
              var f = e[i];
              if (a && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1;
            }
            for (; ++i < o; ) {
              var c = (f = e[i])[0],
                s = t[c],
                l = f[1];
              if (a && f[2]) {
                if (s === u && !(c in t)) return !1;
              } else {
                var h = new wr();
                if (r) var d = r(s, l, c, t, n, h);
                if (!(d === u ? ui(l, s, _ | v, r, h) : d)) return !1;
              }
            }
            return !0;
          }
          function ai(t) {
            return (
              !(!Ta(t) || ((n = t), dn && dn in n)) &&
              (Ma(t) ? bn : Wt).test(so(t))
            );
            var n;
          }
          function fi(t) {
            return 'function' == typeof t
              ? t
              : null == t
              ? Uf
              : 'object' == typeof t
              ? ba(t)
                ? pi(t[0], t[1])
                : di(t)
              : Bf(t);
          }
          function ci(t) {
            if (!Xu(t)) return He(t);
            var n = [];
            for (var e in nn(t))
              ln.call(t, e) && 'constructor' != e && n.push(e);
            return n;
          }
          function si(t) {
            if (!Ta(t))
              return (function(t) {
                var n = [];
                if (null != t) for (var e in nn(t)) n.push(e);
                return n;
              })(t);
            var n = Xu(t),
              e = [];
            for (var r in t)
              ('constructor' != r || (!n && ln.call(t, r))) && e.push(r);
            return e;
          }
          function li(t, n) {
            return t < n;
          }
          function hi(t, n) {
            var e = -1,
              i = ya(t) ? r(t.length) : [];
            return (
              Pr(t, function(t, r, u) {
                i[++e] = n(t, r, u);
              }),
              i
            );
          }
          function di(t) {
            var n = ju(t);
            return 1 == n.length && n[0][2]
              ? Qu(n[0][0], n[0][1])
              : function(e) {
                  return e === t || oi(e, t, n);
                };
          }
          function pi(t, n) {
            return Gu(t) && Ku(n)
              ? Qu(co(t), n)
              : function(e) {
                  var r = Ja(e, t);
                  return r === u && r === n ? tf(e, t) : ui(n, r, _ | v);
                };
          }
          function _i(t, n, e, r, i) {
            t !== n &&
              $r(
                n,
                function(o, a) {
                  if ((i || (i = new wr()), Ta(o)))
                    !(function(t, n, e, r, i, o, a) {
                      var f = no(t, e),
                        c = no(n, e),
                        s = a.get(c);
                      if (s) Tr(t, e, s);
                      else {
                        var l = o ? o(f, c, e + '', t, n, a) : u,
                          h = l === u;
                        if (h) {
                          var d = ba(c),
                            p = !d && xa(c),
                            _ = !d && !p && Ia(c);
                          (l = c),
                            d || p || _
                              ? ba(f)
                                ? (l = f)
                                : ma(f)
                                ? (l = eu(f))
                                : p
                                ? ((h = !1), (l = Xi(c, !0)))
                                : _
                                ? ((h = !1), (l = Qi(c, !0)))
                                : (l = [])
                              : Ua(c) || va(c)
                              ? ((l = f),
                                va(f)
                                  ? (l = Ha(f))
                                  : (Ta(f) && !Ma(f)) || (l = qu(c)))
                              : (h = !1);
                        }
                        h && (a.set(c, l), i(l, c, r, o, a), a.delete(c)),
                          Tr(t, e, l);
                      }
                    })(t, n, a, e, _i, r, i);
                  else {
                    var f = r ? r(no(t, a), o, a + '', t, n, i) : u;
                    f === u && (f = o), Tr(t, a, f);
                  }
                },
                of
              );
          }
          function vi(t, n) {
            var e = t.length;
            if (e) return $u((n += n < 0 ? e : 0), e) ? t[n] : u;
          }
          function bi(t, n, e) {
            var r = -1;
            return (
              (n = te(n.length ? n : [Uf], be(Du()))),
              (function(t, n) {
                var e = t.length;
                for (t.sort(n); e--; ) t[e] = t[e].value;
                return t;
              })(
                hi(t, function(t, e, i) {
                  return {
                    criteria: te(n, function(n) {
                      return n(t);
                    }),
                    index: ++r,
                    value: t,
                  };
                }),
                function(t, n) {
                  return (function(t, n, e) {
                    for (
                      var r = -1,
                        i = t.criteria,
                        u = n.criteria,
                        o = i.length,
                        a = e.length;
                      ++r < o;

                    ) {
                      var f = Ji(i[r], u[r]);
                      if (f) {
                        if (r >= a) return f;
                        var c = e[r];
                        return f * ('desc' == c ? -1 : 1);
                      }
                    }
                    return t.index - n.index;
                  })(t, n, e);
                }
              )
            );
          }
          function gi(t, n, e) {
            for (var r = -1, i = n.length, u = {}; ++r < i; ) {
              var o = n[r],
                a = Xr(t, o);
              e(a, o) && Ei(u, Wi(o, t), a);
            }
            return u;
          }
          function yi(t, n, e, r) {
            var i = r ? ce : fe,
              u = -1,
              o = n.length,
              a = t;
            for (t === n && (n = eu(n)), e && (a = te(t, be(e))); ++u < o; )
              for (
                var f = 0, c = n[u], s = e ? e(c) : c;
                (f = i(a, s, f, r)) > -1;

              )
                a !== t && In.call(a, f, 1), In.call(t, f, 1);
            return t;
          }
          function mi(t, n) {
            for (var e = t ? n.length : 0, r = e - 1; e--; ) {
              var i = n[e];
              if (e == r || i !== u) {
                var u = i;
                $u(i) ? In.call(t, i, 1) : Li(t, i);
              }
            }
            return t;
          }
          function xi(t, n) {
            return t + Pe(Ve() * (n - t + 1));
          }
          function wi(t, n) {
            var e = '';
            if (!t || n < 1 || n > Y) return e;
            do {
              n % 2 && (e += t), (n = Pe(n / 2)) && (t += t);
            } while (n);
            return e;
          }
          function Ci(t, n) {
            return io(Ju(t, n, Uf), t + '');
          }
          function Mi(t) {
            return Mr(pf(t));
          }
          function Ri(t, n) {
            var e = pf(t);
            return ao(e, Yr(n, 0, e.length));
          }
          function Ei(t, n, e, r) {
            if (!Ta(t)) return t;
            for (
              var i = -1, o = (n = Wi(n, t)).length, a = o - 1, f = t;
              null != f && ++i < o;

            ) {
              var c = co(n[i]),
                s = e;
              if (i != a) {
                var l = f[c];
                (s = r ? r(l, c, f) : u) === u &&
                  (s = Ta(l) ? l : $u(n[i + 1]) ? [] : {});
              }
              Nr(f, c, s), (f = f[c]);
            }
            return t;
          }
          var Ti = rr
              ? function(t, n) {
                  return rr.set(t, n), t;
                }
              : Uf,
            Ni = de
              ? function(t, n) {
                  return de(t, 'toString', {
                    configurable: !0,
                    enumerable: !1,
                    value: Nf(n),
                    writable: !0,
                  });
                }
              : Uf;
          function Ai(t) {
            return ao(pf(t));
          }
          function Oi(t, n, e) {
            var i = -1,
              u = t.length;
            n < 0 && (n = -n > u ? 0 : u + n),
              (e = e > u ? u : e) < 0 && (e += u),
              (u = n > e ? 0 : (e - n) >>> 0),
              (n >>>= 0);
            for (var o = r(u); ++i < u; ) o[i] = t[i + n];
            return o;
          }
          function Ui(t, n) {
            var e;
            return (
              Pr(t, function(t, r, i) {
                return !(e = n(t, r, i));
              }),
              !!e
            );
          }
          function Si(t, n, e) {
            var r = 0,
              i = null == t ? r : t.length;
            if ('number' == typeof n && n == n && i <= P) {
              for (; r < i; ) {
                var u = (r + i) >>> 1,
                  o = t[u];
                null !== o && !Da(o) && (e ? o <= n : o < n)
                  ? (r = u + 1)
                  : (i = u);
              }
              return i;
            }
            return ki(t, n, Uf, e);
          }
          function ki(t, n, e, r) {
            n = e(n);
            for (
              var i = 0,
                o = null == t ? 0 : t.length,
                a = n != n,
                f = null === n,
                c = Da(n),
                s = n === u;
              i < o;

            ) {
              var l = Pe((i + o) / 2),
                h = e(t[l]),
                d = h !== u,
                p = null === h,
                _ = h == h,
                v = Da(h);
              if (a) var b = r || _;
              else
                b = s
                  ? _ && (r || d)
                  : f
                  ? _ && d && (r || !p)
                  : c
                  ? _ && d && !p && (r || !v)
                  : !p && !v && (r ? h <= n : h < n);
              b ? (i = l + 1) : (o = l);
            }
            return We(o, L);
          }
          function Yi(t, n) {
            for (var e = -1, r = t.length, i = 0, u = []; ++e < r; ) {
              var o = t[e],
                a = n ? n(o) : o;
              if (!e || !da(a, f)) {
                var f = a;
                u[i++] = 0 === o ? 0 : o;
              }
            }
            return u;
          }
          function Di(t) {
            return 'number' == typeof t ? t : Da(t) ? I : +t;
          }
          function Ii(t) {
            if ('string' == typeof t) return t;
            if (ba(t)) return te(t, Ii) + '';
            if (Da(t)) return hr ? hr.call(t) : '';
            var n = t + '';
            return '0' == n && 1 / t == -k ? '-0' : n;
          }
          function ji(t, n, e) {
            var r = -1,
              i = Qn,
              u = t.length,
              a = !0,
              f = [],
              c = f;
            if (e) (a = !1), (i = Jn);
            else if (u >= o) {
              var s = n ? null : wu(t);
              if (s) return Ae(s);
              (a = !1), (i = ye), (c = new xr());
            } else c = n ? [] : f;
            t: for (; ++r < u; ) {
              var l = t[r],
                h = n ? n(l) : l;
              if (((l = e || 0 !== l ? l : 0), a && h == h)) {
                for (var d = c.length; d--; ) if (c[d] === h) continue t;
                n && c.push(h), f.push(l);
              } else i(c, h, e) || (c !== f && c.push(h), f.push(l));
            }
            return f;
          }
          function Li(t, n) {
            return null == (t = to(t, (n = Wi(n, t)))) || delete t[co(Co(n))];
          }
          function Pi(t, n, e, r) {
            return Ei(t, n, e(Xr(t, n)), r);
          }
          function Bi(t, n, e, r) {
            for (
              var i = t.length, u = r ? i : -1;
              (r ? u-- : ++u < i) && n(t[u], u, t);

            );
            return e
              ? Oi(t, r ? 0 : u, r ? u + 1 : i)
              : Oi(t, r ? u + 1 : 0, r ? i : u);
          }
          function zi(t, n) {
            var e = t;
            return (
              e instanceof br && (e = e.value()),
              ee(
                n,
                function(t, n) {
                  return n.func.apply(n.thisArg, ne([t], n.args));
                },
                e
              )
            );
          }
          function Fi(t, n, e) {
            var i = t.length;
            if (i < 2) return i ? ji(t[0]) : [];
            for (var u = -1, o = r(i); ++u < i; )
              for (var a = t[u], f = -1; ++f < i; )
                f != u && (o[u] = Lr(o[u] || a, t[f], n, e));
            return ji(Hr(o, 1), n, e);
          }
          function qi(t, n, e) {
            for (var r = -1, i = t.length, o = n.length, a = {}; ++r < i; ) {
              var f = r < o ? n[r] : u;
              e(a, t[r], f);
            }
            return a;
          }
          function Hi(t) {
            return ma(t) ? t : [];
          }
          function $i(t) {
            return 'function' == typeof t ? t : Uf;
          }
          function Wi(t, n) {
            return ba(t) ? t : Gu(t, n) ? [t] : fo($a(t));
          }
          var Gi = Ci;
          function Zi(t, n, e) {
            var r = t.length;
            return (e = e === u ? r : e), !n && e >= r ? t : Oi(t, n, e);
          }
          var Vi =
            De ||
            function(t) {
              return Yn.clearTimeout(t);
            };
          function Xi(t, n) {
            if (n) return t.slice();
            var e = t.length,
              r = An ? An(e) : new t.constructor(e);
            return t.copy(r), r;
          }
          function Ki(t) {
            var n = new t.constructor(t.byteLength);
            return new Cn(n).set(new Cn(t)), n;
          }
          function Qi(t, n) {
            var e = n ? Ki(t.buffer) : t.buffer;
            return new t.constructor(e, t.byteOffset, t.length);
          }
          function Ji(t, n) {
            if (t !== n) {
              var e = t !== u,
                r = null === t,
                i = t == t,
                o = Da(t),
                a = n !== u,
                f = null === n,
                c = n == n,
                s = Da(n);
              if (
                (!f && !s && !o && t > n) ||
                (o && a && c && !f && !s) ||
                (r && a && c) ||
                (!e && c) ||
                !i
              )
                return 1;
              if (
                (!r && !o && !s && t < n) ||
                (s && e && i && !r && !o) ||
                (f && e && i) ||
                (!a && i) ||
                !c
              )
                return -1;
            }
            return 0;
          }
          function tu(t, n, e, i) {
            for (
              var u = -1,
                o = t.length,
                a = e.length,
                f = -1,
                c = n.length,
                s = $e(o - a, 0),
                l = r(c + s),
                h = !i;
              ++f < c;

            )
              l[f] = n[f];
            for (; ++u < a; ) (h || u < o) && (l[e[u]] = t[u]);
            for (; s--; ) l[f++] = t[u++];
            return l;
          }
          function nu(t, n, e, i) {
            for (
              var u = -1,
                o = t.length,
                a = -1,
                f = e.length,
                c = -1,
                s = n.length,
                l = $e(o - f, 0),
                h = r(l + s),
                d = !i;
              ++u < l;

            )
              h[u] = t[u];
            for (var p = u; ++c < s; ) h[p + c] = n[c];
            for (; ++a < f; ) (d || u < o) && (h[p + e[a]] = t[u++]);
            return h;
          }
          function eu(t, n) {
            var e = -1,
              i = t.length;
            for (n || (n = r(i)); ++e < i; ) n[e] = t[e];
            return n;
          }
          function ru(t, n, e, r) {
            var i = !e;
            e || (e = {});
            for (var o = -1, a = n.length; ++o < a; ) {
              var f = n[o],
                c = r ? r(e[f], t[f], f, e, t) : u;
              c === u && (c = t[f]), i ? Sr(e, f, c) : Nr(e, f, c);
            }
            return e;
          }
          function iu(t, n) {
            return function(e, r) {
              var i = ba(e) ? Gn : Or,
                u = n ? n() : {};
              return i(e, t, Du(r, 2), u);
            };
          }
          function uu(t) {
            return Ci(function(n, e) {
              var r = -1,
                i = e.length,
                o = i > 1 ? e[i - 1] : u,
                a = i > 2 ? e[2] : u;
              for (
                o = t.length > 3 && 'function' == typeof o ? (i--, o) : u,
                  a && Wu(e[0], e[1], a) && ((o = i < 3 ? u : o), (i = 1)),
                  n = nn(n);
                ++r < i;

              ) {
                var f = e[r];
                f && t(n, f, r, o);
              }
              return n;
            });
          }
          function ou(t, n) {
            return function(e, r) {
              if (null == e) return e;
              if (!ya(e)) return t(e, r);
              for (
                var i = e.length, u = n ? i : -1, o = nn(e);
                (n ? u-- : ++u < i) && !1 !== r(o[u], u, o);

              );
              return e;
            };
          }
          function au(t) {
            return function(n, e, r) {
              for (var i = -1, u = nn(n), o = r(n), a = o.length; a--; ) {
                var f = o[t ? a : ++i];
                if (!1 === e(u[f], f, u)) break;
              }
              return n;
            };
          }
          function fu(t) {
            return function(n) {
              var e = Re((n = $a(n))) ? Se(n) : u,
                r = e ? e[0] : n.charAt(0),
                i = e ? Zi(e, 1).join('') : n.slice(1);
              return r[t]() + i;
            };
          }
          function cu(t) {
            return function(n) {
              return ee(Rf(bf(n).replace(yn, '')), t, '');
            };
          }
          function su(t) {
            return function() {
              var n = arguments;
              switch (n.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(n[0]);
                case 2:
                  return new t(n[0], n[1]);
                case 3:
                  return new t(n[0], n[1], n[2]);
                case 4:
                  return new t(n[0], n[1], n[2], n[3]);
                case 5:
                  return new t(n[0], n[1], n[2], n[3], n[4]);
                case 6:
                  return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                case 7:
                  return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
              }
              var e = pr(t.prototype),
                r = t.apply(e, n);
              return Ta(r) ? r : e;
            };
          }
          function lu(t) {
            return function(n, e, r) {
              var i = nn(n);
              if (!ya(n)) {
                var o = Du(e, 3);
                (n = uf(n)),
                  (e = function(t) {
                    return o(i[t], t, i);
                  });
              }
              var a = t(n, e, r);
              return a > -1 ? i[o ? n[a] : a] : u;
            };
          }
          function hu(t) {
            return Au(function(n) {
              var e = n.length,
                r = e,
                i = vr.prototype.thru;
              for (t && n.reverse(); r--; ) {
                var o = n[r];
                if ('function' != typeof o) throw new un(f);
                if (i && !a && 'wrapper' == ku(o)) var a = new vr([], !0);
              }
              for (r = a ? r : e; ++r < e; ) {
                var c = ku((o = n[r])),
                  s = 'wrapper' == c ? Su(o) : u;
                a =
                  s &&
                  Zu(s[0]) &&
                  s[1] == (M | m | w | R) &&
                  !s[4].length &&
                  1 == s[9]
                    ? a[ku(s[0])].apply(a, s[3])
                    : 1 == o.length && Zu(o)
                    ? a[c]()
                    : a.thru(o);
              }
              return function() {
                var t = arguments,
                  r = t[0];
                if (a && 1 == t.length && ba(r)) return a.plant(r).value();
                for (var i = 0, u = e ? n[i].apply(this, t) : r; ++i < e; )
                  u = n[i].call(this, u);
                return u;
              };
            });
          }
          function du(t, n, e, i, o, a, f, c, s, l) {
            var h = n & M,
              d = n & b,
              p = n & g,
              _ = n & (m | x),
              v = n & E,
              y = p ? u : su(t);
            return function b() {
              for (var g = arguments.length, m = r(g), x = g; x--; )
                m[x] = arguments[x];
              if (_)
                var w = Yu(b),
                  C = (function(t, n) {
                    for (var e = t.length, r = 0; e--; ) t[e] === n && ++r;
                    return r;
                  })(m, w);
              if (
                (i && (m = tu(m, i, o, _)),
                a && (m = nu(m, a, f, _)),
                (g -= C),
                _ && g < l)
              ) {
                var M = Ne(m, w);
                return mu(t, n, du, b.placeholder, e, m, M, c, s, l - g);
              }
              var R = d ? e : this,
                E = p ? R[t] : t;
              return (
                (g = m.length),
                c
                  ? (m = (function(t, n) {
                      for (
                        var e = t.length, r = We(n.length, e), i = eu(t);
                        r--;

                      ) {
                        var o = n[r];
                        t[r] = $u(o, e) ? i[o] : u;
                      }
                      return t;
                    })(m, c))
                  : v && g > 1 && m.reverse(),
                h && s < g && (m.length = s),
                this && this !== Yn && this instanceof b && (E = y || su(E)),
                E.apply(R, m)
              );
            };
          }
          function pu(t, n) {
            return function(e, r) {
              return (function(t, n, e, r) {
                return (
                  Gr(t, function(t, i, u) {
                    n(r, e(t), i, u);
                  }),
                  r
                );
              })(e, t, n(r), {});
            };
          }
          function _u(t, n) {
            return function(e, r) {
              var i;
              if (e === u && r === u) return n;
              if ((e !== u && (i = e), r !== u)) {
                if (i === u) return r;
                'string' == typeof e || 'string' == typeof r
                  ? ((e = Ii(e)), (r = Ii(r)))
                  : ((e = Di(e)), (r = Di(r))),
                  (i = t(e, r));
              }
              return i;
            };
          }
          function vu(t) {
            return Au(function(n) {
              return (
                (n = te(n, be(Du()))),
                Ci(function(e) {
                  var r = this;
                  return t(n, function(t) {
                    return Wn(t, r, e);
                  });
                })
              );
            });
          }
          function bu(t, n) {
            var e = (n = n === u ? ' ' : Ii(n)).length;
            if (e < 2) return e ? wi(n, t) : n;
            var r = wi(n, Le(t / Ue(n)));
            return Re(n) ? Zi(Se(r), 0, t).join('') : r.slice(0, t);
          }
          function gu(t) {
            return function(n, e, i) {
              return (
                i && 'number' != typeof i && Wu(n, e, i) && (e = i = u),
                (n = Ba(n)),
                e === u ? ((e = n), (n = 0)) : (e = Ba(e)),
                (function(t, n, e, i) {
                  for (
                    var u = -1, o = $e(Le((n - t) / (e || 1)), 0), a = r(o);
                    o--;

                  )
                    (a[i ? o : ++u] = t), (t += e);
                  return a;
                })(n, e, (i = i === u ? (n < e ? 1 : -1) : Ba(i)), t)
              );
            };
          }
          function yu(t) {
            return function(n, e) {
              return (
                ('string' == typeof n && 'string' == typeof e) ||
                  ((n = qa(n)), (e = qa(e))),
                t(n, e)
              );
            };
          }
          function mu(t, n, e, r, i, o, a, f, c, s) {
            var l = n & m;
            (n |= l ? w : C), (n &= ~(l ? C : w)) & y || (n &= ~(b | g));
            var h = [
                t,
                n,
                i,
                l ? o : u,
                l ? a : u,
                l ? u : o,
                l ? u : a,
                f,
                c,
                s,
              ],
              d = e.apply(u, h);
            return Zu(t) && eo(d, h), (d.placeholder = r), uo(d, t, n);
          }
          function xu(t) {
            var n = tn[t];
            return function(t, e) {
              if (
                ((t = qa(t)), (e = null == e ? 0 : We(za(e), 292)) && Fe(t))
              ) {
                var r = ($a(t) + 'e').split('e');
                return +(
                  (r = ($a(n(r[0] + 'e' + (+r[1] + e))) + 'e').split('e'))[0] +
                  'e' +
                  (+r[1] - e)
                );
              }
              return n(t);
            };
          }
          var wu =
            tr && 1 / Ae(new tr([, -0]))[1] == k
              ? function(t) {
                  return new tr(t);
                }
              : If;
          function Cu(t) {
            return function(n) {
              var e = zu(n);
              return e == X
                ? Ee(n)
                : e == et
                ? Oe(n)
                : (function(t, n) {
                    return te(n, function(n) {
                      return [n, t[n]];
                    });
                  })(n, t(n));
            };
          }
          function Mu(t, n, e, i, o, a, c, s) {
            var h = n & g;
            if (!h && 'function' != typeof t) throw new un(f);
            var d = i ? i.length : 0;
            if (
              (d || ((n &= ~(w | C)), (i = o = u)),
              (c = c === u ? c : $e(za(c), 0)),
              (s = s === u ? s : za(s)),
              (d -= o ? o.length : 0),
              n & C)
            ) {
              var p = i,
                _ = o;
              i = o = u;
            }
            var v = h ? u : Su(t),
              E = [t, n, e, i, o, p, _, a, c, s];
            if (
              (v &&
                (function(t, n) {
                  var e = t[1],
                    r = n[1],
                    i = e | r,
                    u = i < (b | g | M),
                    o =
                      (r == M && e == m) ||
                      (r == M && e == R && t[7].length <= n[8]) ||
                      (r == (M | R) && n[7].length <= n[8] && e == m);
                  if (!u && !o) return t;
                  r & b && ((t[2] = n[2]), (i |= e & b ? 0 : y));
                  var a = n[3];
                  if (a) {
                    var f = t[3];
                    (t[3] = f ? tu(f, a, n[4]) : a),
                      (t[4] = f ? Ne(t[3], l) : n[4]);
                  }
                  (a = n[5]) &&
                    ((f = t[5]),
                    (t[5] = f ? nu(f, a, n[6]) : a),
                    (t[6] = f ? Ne(t[5], l) : n[6])),
                    (a = n[7]) && (t[7] = a),
                    r & M && (t[8] = null == t[8] ? n[8] : We(t[8], n[8])),
                    null == t[9] && (t[9] = n[9]),
                    (t[0] = n[0]),
                    (t[1] = i);
                })(E, v),
              (t = E[0]),
              (n = E[1]),
              (e = E[2]),
              (i = E[3]),
              (o = E[4]),
              !(s = E[9] = E[9] === u ? (h ? 0 : t.length) : $e(E[9] - d, 0)) &&
                n & (m | x) &&
                (n &= ~(m | x)),
              n && n != b)
            )
              T =
                n == m || n == x
                  ? (function(t, n, e) {
                      var i = su(t);
                      return function o() {
                        for (
                          var a = arguments.length, f = r(a), c = a, s = Yu(o);
                          c--;

                        )
                          f[c] = arguments[c];
                        var l =
                          a < 3 && f[0] !== s && f[a - 1] !== s ? [] : Ne(f, s);
                        return (a -= l.length) < e
                          ? mu(t, n, du, o.placeholder, u, f, l, u, u, e - a)
                          : Wn(
                              this && this !== Yn && this instanceof o ? i : t,
                              this,
                              f
                            );
                      };
                    })(t, n, s)
                  : (n != w && n != (b | w)) || o.length
                  ? du.apply(u, E)
                  : (function(t, n, e, i) {
                      var u = n & b,
                        o = su(t);
                      return function n() {
                        for (
                          var a = -1,
                            f = arguments.length,
                            c = -1,
                            s = i.length,
                            l = r(s + f),
                            h =
                              this && this !== Yn && this instanceof n ? o : t;
                          ++c < s;

                        )
                          l[c] = i[c];
                        for (; f--; ) l[c++] = arguments[++a];
                        return Wn(h, u ? e : this, l);
                      };
                    })(t, n, e, i);
            else
              var T = (function(t, n, e) {
                var r = n & b,
                  i = su(t);
                return function n() {
                  return (this && this !== Yn && this instanceof n
                    ? i
                    : t
                  ).apply(r ? e : this, arguments);
                };
              })(t, n, e);
            return uo((v ? Ti : eo)(T, E), t, n);
          }
          function Ru(t, n, e, r) {
            return t === u || (da(t, fn[e]) && !ln.call(r, e)) ? n : t;
          }
          function Eu(t, n, e, r, i, o) {
            return (
              Ta(t) && Ta(n) && (o.set(n, t), _i(t, n, u, Eu, o), o.delete(n)),
              t
            );
          }
          function Tu(t) {
            return Ua(t) ? u : t;
          }
          function Nu(t, n, e, r, i, o) {
            var a = e & _,
              f = t.length,
              c = n.length;
            if (f != c && !(a && c > f)) return !1;
            var s = o.get(t);
            if (s && o.get(n)) return s == n;
            var l = -1,
              h = !0,
              d = e & v ? new xr() : u;
            for (o.set(t, n), o.set(n, t); ++l < f; ) {
              var p = t[l],
                b = n[l];
              if (r) var g = a ? r(b, p, l, n, t, o) : r(p, b, l, t, n, o);
              if (g !== u) {
                if (g) continue;
                h = !1;
                break;
              }
              if (d) {
                if (
                  !ie(n, function(t, n) {
                    if (!ye(d, n) && (p === t || i(p, t, e, r, o)))
                      return d.push(n);
                  })
                ) {
                  h = !1;
                  break;
                }
              } else if (p !== b && !i(p, b, e, r, o)) {
                h = !1;
                break;
              }
            }
            return o.delete(t), o.delete(n), h;
          }
          function Au(t) {
            return io(Ju(t, u, go), t + '');
          }
          function Ou(t) {
            return Kr(t, uf, Pu);
          }
          function Uu(t) {
            return Kr(t, of, Bu);
          }
          var Su = rr
            ? function(t) {
                return rr.get(t);
              }
            : If;
          function ku(t) {
            for (
              var n = t.name + '', e = ir[n], r = ln.call(ir, n) ? e.length : 0;
              r--;

            ) {
              var i = e[r],
                u = i.func;
              if (null == u || u == t) return i.name;
            }
            return n;
          }
          function Yu(t) {
            return (ln.call(dr, 'placeholder') ? dr : t).placeholder;
          }
          function Du() {
            var t = dr.iteratee || Sf;
            return (
              (t = t === Sf ? fi : t),
              arguments.length ? t(arguments[0], arguments[1]) : t
            );
          }
          function Iu(t, n) {
            var e,
              r,
              i = t.__data__;
            return ('string' == (r = typeof (e = n)) ||
            'number' == r ||
            'symbol' == r ||
            'boolean' == r
            ? '__proto__' !== e
            : null === e)
              ? i['string' == typeof n ? 'string' : 'hash']
              : i.map;
          }
          function ju(t) {
            for (var n = uf(t), e = n.length; e--; ) {
              var r = n[e],
                i = t[r];
              n[e] = [r, i, Ku(i)];
            }
            return n;
          }
          function Lu(t, n) {
            var e = (function(t, n) {
              return null == t ? u : t[n];
            })(t, n);
            return ai(e) ? e : u;
          }
          var Pu = Be
              ? function(t) {
                  return null == t
                    ? []
                    : ((t = nn(t)),
                      Kn(Be(t), function(n) {
                        return Dn.call(t, n);
                      }));
                }
              : qf,
            Bu = Be
              ? function(t) {
                  for (var n = []; t; ) ne(n, Pu(t)), (t = Sn(t));
                  return n;
                }
              : qf,
            zu = Qr;
          function Fu(t, n, e) {
            for (var r = -1, i = (n = Wi(n, t)).length, u = !1; ++r < i; ) {
              var o = co(n[r]);
              if (!(u = null != t && e(t, o))) break;
              t = t[o];
            }
            return u || ++r != i
              ? u
              : !!(i = null == t ? 0 : t.length) &&
                  Ea(i) &&
                  $u(o, i) &&
                  (ba(t) || va(t));
          }
          function qu(t) {
            return 'function' != typeof t.constructor || Xu(t) ? {} : pr(Sn(t));
          }
          function Hu(t) {
            return ba(t) || va(t) || !!(Ln && t && t[Ln]);
          }
          function $u(t, n) {
            var e = typeof t;
            return (
              !!(n = null == n ? Y : n) &&
              ('number' == e || ('symbol' != e && Zt.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < n
            );
          }
          function Wu(t, n, e) {
            if (!Ta(e)) return !1;
            var r = typeof n;
            return (
              !!('number' == r
                ? ya(e) && $u(n, e.length)
                : 'string' == r && n in e) && da(e[n], t)
            );
          }
          function Gu(t, n) {
            if (ba(t)) return !1;
            var e = typeof t;
            return (
              !(
                'number' != e &&
                'symbol' != e &&
                'boolean' != e &&
                null != t &&
                !Da(t)
              ) ||
              Ot.test(t) ||
              !At.test(t) ||
              (null != n && t in nn(n))
            );
          }
          function Zu(t) {
            var n = ku(t),
              e = dr[n];
            if ('function' != typeof e || !(n in br.prototype)) return !1;
            if (t === e) return !0;
            var r = Su(e);
            return !!r && t === r[0];
          }
          ((Ke && zu(new Ke(new ArrayBuffer(1))) != ct) ||
            (Qe && zu(new Qe()) != X) ||
            (Je && '[object Promise]' != zu(Je.resolve())) ||
            (tr && zu(new tr()) != et) ||
            (nr && zu(new nr()) != ot)) &&
            (zu = function(t) {
              var n = Qr(t),
                e = n == J ? t.constructor : u,
                r = e ? so(e) : '';
              if (r)
                switch (r) {
                  case ur:
                    return ct;
                  case or:
                    return X;
                  case ar:
                    return '[object Promise]';
                  case fr:
                    return et;
                  case cr:
                    return ot;
                }
              return n;
            });
          var Vu = cn ? Ma : Hf;
          function Xu(t) {
            var n = t && t.constructor;
            return t === (('function' == typeof n && n.prototype) || fn);
          }
          function Ku(t) {
            return t == t && !Ta(t);
          }
          function Qu(t, n) {
            return function(e) {
              return null != e && e[t] === n && (n !== u || t in nn(e));
            };
          }
          function Ju(t, n, e) {
            return (
              (n = $e(n === u ? t.length - 1 : n, 0)),
              function() {
                for (
                  var i = arguments, u = -1, o = $e(i.length - n, 0), a = r(o);
                  ++u < o;

                )
                  a[u] = i[n + u];
                u = -1;
                for (var f = r(n + 1); ++u < n; ) f[u] = i[u];
                return (f[n] = e(a)), Wn(t, this, f);
              }
            );
          }
          function to(t, n) {
            return n.length < 2 ? t : Xr(t, Oi(n, 0, -1));
          }
          function no(t, n) {
            if (
              ('constructor' !== n || 'function' != typeof t[n]) &&
              '__proto__' != n
            )
              return t[n];
          }
          var eo = oo(Ti),
            ro =
              je ||
              function(t, n) {
                return Yn.setTimeout(t, n);
              },
            io = oo(Ni);
          function uo(t, n, e) {
            var r = n + '';
            return io(
              t,
              (function(t, n) {
                var e = n.length;
                if (!e) return t;
                var r = e - 1;
                return (
                  (n[r] = (e > 1 ? '& ' : '') + n[r]),
                  (n = n.join(e > 2 ? ', ' : ' ')),
                  t.replace(jt, '{\n/* [wrapped with ' + n + '] */\n')
                );
              })(
                r,
                (function(t, n) {
                  return (
                    Zn(B, function(e) {
                      var r = '_.' + e[0];
                      n & e[1] && !Qn(t, r) && t.push(r);
                    }),
                    t.sort()
                  );
                })(
                  (function(t) {
                    var n = t.match(Lt);
                    return n ? n[1].split(Pt) : [];
                  })(r),
                  e
                )
              )
            );
          }
          function oo(t) {
            var n = 0,
              e = 0;
            return function() {
              var r = Ge(),
                i = O - (r - e);
              if (((e = r), i > 0)) {
                if (++n >= A) return arguments[0];
              } else n = 0;
              return t.apply(u, arguments);
            };
          }
          function ao(t, n) {
            var e = -1,
              r = t.length,
              i = r - 1;
            for (n = n === u ? r : n; ++e < n; ) {
              var o = xi(e, i),
                a = t[o];
              (t[o] = t[e]), (t[e] = a);
            }
            return (t.length = n), t;
          }
          var fo = (function(t) {
            var n = aa(t, function(t) {
                return e.size === s && e.clear(), t;
              }),
              e = n.cache;
            return n;
          })(function(t) {
            var n = [];
            return (
              46 === t.charCodeAt(0) && n.push(''),
              t.replace(Ut, function(t, e, r, i) {
                n.push(r ? i.replace(zt, '$1') : e || t);
              }),
              n
            );
          });
          function co(t) {
            if ('string' == typeof t || Da(t)) return t;
            var n = t + '';
            return '0' == n && 1 / t == -k ? '-0' : n;
          }
          function so(t) {
            if (null != t) {
              try {
                return sn.call(t);
              } catch (t) {}
              try {
                return t + '';
              } catch (t) {}
            }
            return '';
          }
          function lo(t) {
            if (t instanceof br) return t.clone();
            var n = new vr(t.__wrapped__, t.__chain__);
            return (
              (n.__actions__ = eu(t.__actions__)),
              (n.__index__ = t.__index__),
              (n.__values__ = t.__values__),
              n
            );
          }
          var ho = Ci(function(t, n) {
              return ma(t) ? Lr(t, Hr(n, 1, ma, !0)) : [];
            }),
            po = Ci(function(t, n) {
              var e = Co(n);
              return (
                ma(e) && (e = u), ma(t) ? Lr(t, Hr(n, 1, ma, !0), Du(e, 2)) : []
              );
            }),
            _o = Ci(function(t, n) {
              var e = Co(n);
              return (
                ma(e) && (e = u), ma(t) ? Lr(t, Hr(n, 1, ma, !0), u, e) : []
              );
            });
          function vo(t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = null == e ? 0 : za(e);
            return i < 0 && (i = $e(r + i, 0)), ae(t, Du(n, 3), i);
          }
          function bo(t, n, e) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = r - 1;
            return (
              e !== u &&
                ((i = za(e)), (i = e < 0 ? $e(r + i, 0) : We(i, r - 1))),
              ae(t, Du(n, 3), i, !0)
            );
          }
          function go(t) {
            return null != t && t.length ? Hr(t, 1) : [];
          }
          function yo(t) {
            return t && t.length ? t[0] : u;
          }
          var mo = Ci(function(t) {
              var n = te(t, Hi);
              return n.length && n[0] === t[0] ? ei(n) : [];
            }),
            xo = Ci(function(t) {
              var n = Co(t),
                e = te(t, Hi);
              return (
                n === Co(e) ? (n = u) : e.pop(),
                e.length && e[0] === t[0] ? ei(e, Du(n, 2)) : []
              );
            }),
            wo = Ci(function(t) {
              var n = Co(t),
                e = te(t, Hi);
              return (
                (n = 'function' == typeof n ? n : u) && e.pop(),
                e.length && e[0] === t[0] ? ei(e, u, n) : []
              );
            });
          function Co(t) {
            var n = null == t ? 0 : t.length;
            return n ? t[n - 1] : u;
          }
          var Mo = Ci(Ro);
          function Ro(t, n) {
            return t && t.length && n && n.length ? yi(t, n) : t;
          }
          var Eo = Au(function(t, n) {
            var e = null == t ? 0 : t.length,
              r = kr(t, n);
            return (
              mi(
                t,
                te(n, function(t) {
                  return $u(t, e) ? +t : t;
                }).sort(Ji)
              ),
              r
            );
          });
          function To(t) {
            return null == t ? t : Xe.call(t);
          }
          var No = Ci(function(t) {
              return ji(Hr(t, 1, ma, !0));
            }),
            Ao = Ci(function(t) {
              var n = Co(t);
              return ma(n) && (n = u), ji(Hr(t, 1, ma, !0), Du(n, 2));
            }),
            Oo = Ci(function(t) {
              var n = Co(t);
              return (
                (n = 'function' == typeof n ? n : u), ji(Hr(t, 1, ma, !0), u, n)
              );
            });
          function Uo(t) {
            if (!t || !t.length) return [];
            var n = 0;
            return (
              (t = Kn(t, function(t) {
                if (ma(t)) return (n = $e(t.length, n)), !0;
              })),
              ve(n, function(n) {
                return te(t, he(n));
              })
            );
          }
          function So(t, n) {
            if (!t || !t.length) return [];
            var e = Uo(t);
            return null == n
              ? e
              : te(e, function(t) {
                  return Wn(n, u, t);
                });
          }
          var ko = Ci(function(t, n) {
              return ma(t) ? Lr(t, n) : [];
            }),
            Yo = Ci(function(t) {
              return Fi(Kn(t, ma));
            }),
            Do = Ci(function(t) {
              var n = Co(t);
              return ma(n) && (n = u), Fi(Kn(t, ma), Du(n, 2));
            }),
            Io = Ci(function(t) {
              var n = Co(t);
              return (n = 'function' == typeof n ? n : u), Fi(Kn(t, ma), u, n);
            }),
            jo = Ci(Uo);
          var Lo = Ci(function(t) {
            var n = t.length,
              e = n > 1 ? t[n - 1] : u;
            return (e = 'function' == typeof e ? (t.pop(), e) : u), So(t, e);
          });
          function Po(t) {
            var n = dr(t);
            return (n.__chain__ = !0), n;
          }
          function Bo(t, n) {
            return n(t);
          }
          var zo = Au(function(t) {
            var n = t.length,
              e = n ? t[0] : 0,
              r = this.__wrapped__,
              i = function(n) {
                return kr(n, t);
              };
            return !(n > 1 || this.__actions__.length) &&
              r instanceof br &&
              $u(e)
              ? ((r = r.slice(e, +e + (n ? 1 : 0))).__actions__.push({
                  func: Bo,
                  args: [i],
                  thisArg: u,
                }),
                new vr(r, this.__chain__).thru(function(t) {
                  return n && !t.length && t.push(u), t;
                }))
              : this.thru(i);
          });
          var Fo = iu(function(t, n, e) {
            ln.call(t, e) ? ++t[e] : Sr(t, e, 1);
          });
          var qo = lu(vo),
            Ho = lu(bo);
          function $o(t, n) {
            return (ba(t) ? Zn : Pr)(t, Du(n, 3));
          }
          function Wo(t, n) {
            return (ba(t) ? Vn : Br)(t, Du(n, 3));
          }
          var Go = iu(function(t, n, e) {
            ln.call(t, e) ? t[e].push(n) : Sr(t, e, [n]);
          });
          var Zo = Ci(function(t, n, e) {
              var i = -1,
                u = 'function' == typeof n,
                o = ya(t) ? r(t.length) : [];
              return (
                Pr(t, function(t) {
                  o[++i] = u ? Wn(n, t, e) : ri(t, n, e);
                }),
                o
              );
            }),
            Vo = iu(function(t, n, e) {
              Sr(t, e, n);
            });
          function Xo(t, n) {
            return (ba(t) ? te : hi)(t, Du(n, 3));
          }
          var Ko = iu(
            function(t, n, e) {
              t[e ? 0 : 1].push(n);
            },
            function() {
              return [[], []];
            }
          );
          var Qo = Ci(function(t, n) {
              if (null == t) return [];
              var e = n.length;
              return (
                e > 1 && Wu(t, n[0], n[1])
                  ? (n = [])
                  : e > 2 && Wu(n[0], n[1], n[2]) && (n = [n[0]]),
                bi(t, Hr(n, 1), [])
              );
            }),
            Jo =
              Ie ||
              function() {
                return Yn.Date.now();
              };
          function ta(t, n, e) {
            return (
              (n = e ? u : n),
              (n = t && null == n ? t.length : n),
              Mu(t, M, u, u, u, u, n)
            );
          }
          function na(t, n) {
            var e;
            if ('function' != typeof n) throw new un(f);
            return (
              (t = za(t)),
              function() {
                return (
                  --t > 0 && (e = n.apply(this, arguments)),
                  t <= 1 && (n = u),
                  e
                );
              }
            );
          }
          var ea = Ci(function(t, n, e) {
              var r = b;
              if (e.length) {
                var i = Ne(e, Yu(ea));
                r |= w;
              }
              return Mu(t, r, n, e, i);
            }),
            ra = Ci(function(t, n, e) {
              var r = b | g;
              if (e.length) {
                var i = Ne(e, Yu(ra));
                r |= w;
              }
              return Mu(n, r, t, e, i);
            });
          function ia(t, n, e) {
            var r,
              i,
              o,
              a,
              c,
              s,
              l = 0,
              h = !1,
              d = !1,
              p = !0;
            if ('function' != typeof t) throw new un(f);
            function _(n) {
              var e = r,
                o = i;
              return (r = i = u), (l = n), (a = t.apply(o, e));
            }
            function v(t) {
              var e = t - s;
              return s === u || e >= n || e < 0 || (d && t - l >= o);
            }
            function b() {
              var t = Jo();
              if (v(t)) return g(t);
              c = ro(
                b,
                (function(t) {
                  var e = n - (t - s);
                  return d ? We(e, o - (t - l)) : e;
                })(t)
              );
            }
            function g(t) {
              return (c = u), p && r ? _(t) : ((r = i = u), a);
            }
            function y() {
              var t = Jo(),
                e = v(t);
              if (((r = arguments), (i = this), (s = t), e)) {
                if (c === u)
                  return (function(t) {
                    return (l = t), (c = ro(b, n)), h ? _(t) : a;
                  })(s);
                if (d) return Vi(c), (c = ro(b, n)), _(s);
              }
              return c === u && (c = ro(b, n)), a;
            }
            return (
              (n = qa(n) || 0),
              Ta(e) &&
                ((h = !!e.leading),
                (o = (d = 'maxWait' in e) ? $e(qa(e.maxWait) || 0, n) : o),
                (p = 'trailing' in e ? !!e.trailing : p)),
              (y.cancel = function() {
                c !== u && Vi(c), (l = 0), (r = s = i = c = u);
              }),
              (y.flush = function() {
                return c === u ? a : g(Jo());
              }),
              y
            );
          }
          var ua = Ci(function(t, n) {
              return jr(t, 1, n);
            }),
            oa = Ci(function(t, n, e) {
              return jr(t, qa(n) || 0, e);
            });
          function aa(t, n) {
            if ('function' != typeof t || (null != n && 'function' != typeof n))
              throw new un(f);
            var e = function() {
              var r = arguments,
                i = n ? n.apply(this, r) : r[0],
                u = e.cache;
              if (u.has(i)) return u.get(i);
              var o = t.apply(this, r);
              return (e.cache = u.set(i, o) || u), o;
            };
            return (e.cache = new (aa.Cache || mr)()), e;
          }
          function fa(t) {
            if ('function' != typeof t) throw new un(f);
            return function() {
              var n = arguments;
              switch (n.length) {
                case 0:
                  return !t.call(this);
                case 1:
                  return !t.call(this, n[0]);
                case 2:
                  return !t.call(this, n[0], n[1]);
                case 3:
                  return !t.call(this, n[0], n[1], n[2]);
              }
              return !t.apply(this, n);
            };
          }
          aa.Cache = mr;
          var ca = Gi(function(t, n) {
              var e = (n =
                1 == n.length && ba(n[0])
                  ? te(n[0], be(Du()))
                  : te(Hr(n, 1), be(Du()))).length;
              return Ci(function(r) {
                for (var i = -1, u = We(r.length, e); ++i < u; )
                  r[i] = n[i].call(this, r[i]);
                return Wn(t, this, r);
              });
            }),
            sa = Ci(function(t, n) {
              var e = Ne(n, Yu(sa));
              return Mu(t, w, u, n, e);
            }),
            la = Ci(function(t, n) {
              var e = Ne(n, Yu(la));
              return Mu(t, C, u, n, e);
            }),
            ha = Au(function(t, n) {
              return Mu(t, R, u, u, u, n);
            });
          function da(t, n) {
            return t === n || (t != t && n != n);
          }
          var pa = yu(Jr),
            _a = yu(function(t, n) {
              return t >= n;
            }),
            va = ii(
              (function() {
                return arguments;
              })()
            )
              ? ii
              : function(t) {
                  return Na(t) && ln.call(t, 'callee') && !Dn.call(t, 'callee');
                },
            ba = r.isArray,
            ga = Bn
              ? be(Bn)
              : function(t) {
                  return Na(t) && Qr(t) == ft;
                };
          function ya(t) {
            return null != t && Ea(t.length) && !Ma(t);
          }
          function ma(t) {
            return Na(t) && ya(t);
          }
          var xa = ze || Hf,
            wa = zn
              ? be(zn)
              : function(t) {
                  return Na(t) && Qr(t) == $;
                };
          function Ca(t) {
            if (!Na(t)) return !1;
            var n = Qr(t);
            return (
              n == G ||
              n == W ||
              ('string' == typeof t.message &&
                'string' == typeof t.name &&
                !Ua(t))
            );
          }
          function Ma(t) {
            if (!Ta(t)) return !1;
            var n = Qr(t);
            return n == Z || n == V || n == q || n == tt;
          }
          function Ra(t) {
            return 'number' == typeof t && t == za(t);
          }
          function Ea(t) {
            return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= Y;
          }
          function Ta(t) {
            var n = typeof t;
            return null != t && ('object' == n || 'function' == n);
          }
          function Na(t) {
            return null != t && 'object' == typeof t;
          }
          var Aa = Fn
            ? be(Fn)
            : function(t) {
                return Na(t) && zu(t) == X;
              };
          function Oa(t) {
            return 'number' == typeof t || (Na(t) && Qr(t) == K);
          }
          function Ua(t) {
            if (!Na(t) || Qr(t) != J) return !1;
            var n = Sn(t);
            if (null === n) return !0;
            var e = ln.call(n, 'constructor') && n.constructor;
            return 'function' == typeof e && e instanceof e && sn.call(e) == _n;
          }
          var Sa = qn
            ? be(qn)
            : function(t) {
                return Na(t) && Qr(t) == nt;
              };
          var ka = Hn
            ? be(Hn)
            : function(t) {
                return Na(t) && zu(t) == et;
              };
          function Ya(t) {
            return 'string' == typeof t || (!ba(t) && Na(t) && Qr(t) == rt);
          }
          function Da(t) {
            return 'symbol' == typeof t || (Na(t) && Qr(t) == it);
          }
          var Ia = $n
            ? be($n)
            : function(t) {
                return Na(t) && Ea(t.length) && !!Tn[Qr(t)];
              };
          var ja = yu(li),
            La = yu(function(t, n) {
              return t <= n;
            });
          function Pa(t) {
            if (!t) return [];
            if (ya(t)) return Ya(t) ? Se(t) : eu(t);
            if (Pn && t[Pn])
              return (function(t) {
                for (var n, e = []; !(n = t.next()).done; ) e.push(n.value);
                return e;
              })(t[Pn]());
            var n = zu(t);
            return (n == X ? Ee : n == et ? Ae : pf)(t);
          }
          function Ba(t) {
            return t
              ? (t = qa(t)) === k || t === -k
                ? (t < 0 ? -1 : 1) * D
                : t == t
                ? t
                : 0
              : 0 === t
              ? t
              : 0;
          }
          function za(t) {
            var n = Ba(t),
              e = n % 1;
            return n == n ? (e ? n - e : n) : 0;
          }
          function Fa(t) {
            return t ? Yr(za(t), 0, j) : 0;
          }
          function qa(t) {
            if ('number' == typeof t) return t;
            if (Da(t)) return I;
            if (Ta(t)) {
              var n = 'function' == typeof t.valueOf ? t.valueOf() : t;
              t = Ta(n) ? n + '' : n;
            }
            if ('string' != typeof t) return 0 === t ? t : +t;
            t = t.replace(Yt, '');
            var e = $t.test(t);
            return e || Gt.test(t)
              ? Un(t.slice(2), e ? 2 : 8)
              : Ht.test(t)
              ? I
              : +t;
          }
          function Ha(t) {
            return ru(t, of(t));
          }
          function $a(t) {
            return null == t ? '' : Ii(t);
          }
          var Wa = uu(function(t, n) {
              if (Xu(n) || ya(n)) ru(n, uf(n), t);
              else for (var e in n) ln.call(n, e) && Nr(t, e, n[e]);
            }),
            Ga = uu(function(t, n) {
              ru(n, of(n), t);
            }),
            Za = uu(function(t, n, e, r) {
              ru(n, of(n), t, r);
            }),
            Va = uu(function(t, n, e, r) {
              ru(n, uf(n), t, r);
            }),
            Xa = Au(kr);
          var Ka = Ci(function(t, n) {
              t = nn(t);
              var e = -1,
                r = n.length,
                i = r > 2 ? n[2] : u;
              for (i && Wu(n[0], n[1], i) && (r = 1); ++e < r; )
                for (var o = n[e], a = of(o), f = -1, c = a.length; ++f < c; ) {
                  var s = a[f],
                    l = t[s];
                  (l === u || (da(l, fn[s]) && !ln.call(t, s))) &&
                    (t[s] = o[s]);
                }
              return t;
            }),
            Qa = Ci(function(t) {
              return t.push(u, Eu), Wn(ff, u, t);
            });
          function Ja(t, n, e) {
            var r = null == t ? u : Xr(t, n);
            return r === u ? e : r;
          }
          function tf(t, n) {
            return null != t && Fu(t, n, ni);
          }
          var nf = pu(function(t, n, e) {
              null != n && 'function' != typeof n.toString && (n = pn.call(n)),
                (t[n] = e);
            }, Nf(Uf)),
            ef = pu(function(t, n, e) {
              null != n && 'function' != typeof n.toString && (n = pn.call(n)),
                ln.call(t, n) ? t[n].push(e) : (t[n] = [e]);
            }, Du),
            rf = Ci(ri);
          function uf(t) {
            return ya(t) ? Cr(t) : ci(t);
          }
          function of(t) {
            return ya(t) ? Cr(t, !0) : si(t);
          }
          var af = uu(function(t, n, e) {
              _i(t, n, e);
            }),
            ff = uu(function(t, n, e, r) {
              _i(t, n, e, r);
            }),
            cf = Au(function(t, n) {
              var e = {};
              if (null == t) return e;
              var r = !1;
              (n = te(n, function(n) {
                return (n = Wi(n, t)), r || (r = n.length > 1), n;
              })),
                ru(t, Uu(t), e),
                r && (e = Dr(e, h | d | p, Tu));
              for (var i = n.length; i--; ) Li(e, n[i]);
              return e;
            });
          var sf = Au(function(t, n) {
            return null == t
              ? {}
              : (function(t, n) {
                  return gi(t, n, function(n, e) {
                    return tf(t, e);
                  });
                })(t, n);
          });
          function lf(t, n) {
            if (null == t) return {};
            var e = te(Uu(t), function(t) {
              return [t];
            });
            return (
              (n = Du(n)),
              gi(t, e, function(t, e) {
                return n(t, e[0]);
              })
            );
          }
          var hf = Cu(uf),
            df = Cu(of);
          function pf(t) {
            return null == t ? [] : ge(t, uf(t));
          }
          var _f = cu(function(t, n, e) {
            return (n = n.toLowerCase()), t + (e ? vf(n) : n);
          });
          function vf(t) {
            return Mf($a(t).toLowerCase());
          }
          function bf(t) {
            return (t = $a(t)) && t.replace(Vt, we).replace(mn, '');
          }
          var gf = cu(function(t, n, e) {
              return t + (e ? '-' : '') + n.toLowerCase();
            }),
            yf = cu(function(t, n, e) {
              return t + (e ? ' ' : '') + n.toLowerCase();
            }),
            mf = fu('toLowerCase');
          var xf = cu(function(t, n, e) {
            return t + (e ? '_' : '') + n.toLowerCase();
          });
          var wf = cu(function(t, n, e) {
            return t + (e ? ' ' : '') + Mf(n);
          });
          var Cf = cu(function(t, n, e) {
              return t + (e ? ' ' : '') + n.toUpperCase();
            }),
            Mf = fu('toUpperCase');
          function Rf(t, n, e) {
            return (
              (t = $a(t)),
              (n = e ? u : n) === u
                ? (function(t) {
                    return Mn.test(t);
                  })(t)
                  ? (function(t) {
                      return t.match(wn) || [];
                    })(t)
                  : (function(t) {
                      return t.match(Bt) || [];
                    })(t)
                : t.match(n) || []
            );
          }
          var Ef = Ci(function(t, n) {
              try {
                return Wn(t, u, n);
              } catch (t) {
                return Ca(t) ? t : new Qt(t);
              }
            }),
            Tf = Au(function(t, n) {
              return (
                Zn(n, function(n) {
                  (n = co(n)), Sr(t, n, ea(t[n], t));
                }),
                t
              );
            });
          function Nf(t) {
            return function() {
              return t;
            };
          }
          var Af = hu(),
            Of = hu(!0);
          function Uf(t) {
            return t;
          }
          function Sf(t) {
            return fi('function' == typeof t ? t : Dr(t, h));
          }
          var kf = Ci(function(t, n) {
              return function(e) {
                return ri(e, t, n);
              };
            }),
            Yf = Ci(function(t, n) {
              return function(e) {
                return ri(t, e, n);
              };
            });
          function Df(t, n, e) {
            var r = uf(n),
              i = Vr(n, r);
            null != e ||
              (Ta(n) && (i.length || !r.length)) ||
              ((e = n), (n = t), (t = this), (i = Vr(n, uf(n))));
            var u = !(Ta(e) && 'chain' in e && !e.chain),
              o = Ma(t);
            return (
              Zn(i, function(e) {
                var r = n[e];
                (t[e] = r),
                  o &&
                    (t.prototype[e] = function() {
                      var n = this.__chain__;
                      if (u || n) {
                        var e = t(this.__wrapped__),
                          i = (e.__actions__ = eu(this.__actions__));
                        return (
                          i.push({func: r, args: arguments, thisArg: t}),
                          (e.__chain__ = n),
                          e
                        );
                      }
                      return r.apply(t, ne([this.value()], arguments));
                    });
              }),
              t
            );
          }
          function If() {}
          var jf = vu(te),
            Lf = vu(Xn),
            Pf = vu(ie);
          function Bf(t) {
            return Gu(t)
              ? he(co(t))
              : (function(t) {
                  return function(n) {
                    return Xr(n, t);
                  };
                })(t);
          }
          var zf = gu(),
            Ff = gu(!0);
          function qf() {
            return [];
          }
          function Hf() {
            return !1;
          }
          var $f = _u(function(t, n) {
              return t + n;
            }, 0),
            Wf = xu('ceil'),
            Gf = _u(function(t, n) {
              return t / n;
            }, 1),
            Zf = xu('floor');
          var Vf,
            Xf = _u(function(t, n) {
              return t * n;
            }, 1),
            Kf = xu('round'),
            Qf = _u(function(t, n) {
              return t - n;
            }, 0);
          return (
            (dr.after = function(t, n) {
              if ('function' != typeof n) throw new un(f);
              return (
                (t = za(t)),
                function() {
                  if (--t < 1) return n.apply(this, arguments);
                }
              );
            }),
            (dr.ary = ta),
            (dr.assign = Wa),
            (dr.assignIn = Ga),
            (dr.assignInWith = Za),
            (dr.assignWith = Va),
            (dr.at = Xa),
            (dr.before = na),
            (dr.bind = ea),
            (dr.bindAll = Tf),
            (dr.bindKey = ra),
            (dr.castArray = function() {
              if (!arguments.length) return [];
              var t = arguments[0];
              return ba(t) ? t : [t];
            }),
            (dr.chain = Po),
            (dr.chunk = function(t, n, e) {
              n = (e ? Wu(t, n, e) : n === u) ? 1 : $e(za(n), 0);
              var i = null == t ? 0 : t.length;
              if (!i || n < 1) return [];
              for (var o = 0, a = 0, f = r(Le(i / n)); o < i; )
                f[a++] = Oi(t, o, (o += n));
              return f;
            }),
            (dr.compact = function(t) {
              for (
                var n = -1, e = null == t ? 0 : t.length, r = 0, i = [];
                ++n < e;

              ) {
                var u = t[n];
                u && (i[r++] = u);
              }
              return i;
            }),
            (dr.concat = function() {
              var t = arguments.length;
              if (!t) return [];
              for (var n = r(t - 1), e = arguments[0], i = t; i--; )
                n[i - 1] = arguments[i];
              return ne(ba(e) ? eu(e) : [e], Hr(n, 1));
            }),
            (dr.cond = function(t) {
              var n = null == t ? 0 : t.length,
                e = Du();
              return (
                (t = n
                  ? te(t, function(t) {
                      if ('function' != typeof t[1]) throw new un(f);
                      return [e(t[0]), t[1]];
                    })
                  : []),
                Ci(function(e) {
                  for (var r = -1; ++r < n; ) {
                    var i = t[r];
                    if (Wn(i[0], this, e)) return Wn(i[1], this, e);
                  }
                })
              );
            }),
            (dr.conforms = function(t) {
              return (function(t) {
                var n = uf(t);
                return function(e) {
                  return Ir(e, t, n);
                };
              })(Dr(t, h));
            }),
            (dr.constant = Nf),
            (dr.countBy = Fo),
            (dr.create = function(t, n) {
              var e = pr(t);
              return null == n ? e : Ur(e, n);
            }),
            (dr.curry = function t(n, e, r) {
              var i = Mu(n, m, u, u, u, u, u, (e = r ? u : e));
              return (i.placeholder = t.placeholder), i;
            }),
            (dr.curryRight = function t(n, e, r) {
              var i = Mu(n, x, u, u, u, u, u, (e = r ? u : e));
              return (i.placeholder = t.placeholder), i;
            }),
            (dr.debounce = ia),
            (dr.defaults = Ka),
            (dr.defaultsDeep = Qa),
            (dr.defer = ua),
            (dr.delay = oa),
            (dr.difference = ho),
            (dr.differenceBy = po),
            (dr.differenceWith = _o),
            (dr.drop = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              return r
                ? Oi(t, (n = e || n === u ? 1 : za(n)) < 0 ? 0 : n, r)
                : [];
            }),
            (dr.dropRight = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              return r
                ? Oi(t, 0, (n = r - (n = e || n === u ? 1 : za(n))) < 0 ? 0 : n)
                : [];
            }),
            (dr.dropRightWhile = function(t, n) {
              return t && t.length ? Bi(t, Du(n, 3), !0, !0) : [];
            }),
            (dr.dropWhile = function(t, n) {
              return t && t.length ? Bi(t, Du(n, 3), !0) : [];
            }),
            (dr.fill = function(t, n, e, r) {
              var i = null == t ? 0 : t.length;
              return i
                ? (e &&
                    'number' != typeof e &&
                    Wu(t, n, e) &&
                    ((e = 0), (r = i)),
                  (function(t, n, e, r) {
                    var i = t.length;
                    for (
                      (e = za(e)) < 0 && (e = -e > i ? 0 : i + e),
                        (r = r === u || r > i ? i : za(r)) < 0 && (r += i),
                        r = e > r ? 0 : Fa(r);
                      e < r;

                    )
                      t[e++] = n;
                    return t;
                  })(t, n, e, r))
                : [];
            }),
            (dr.filter = function(t, n) {
              return (ba(t) ? Kn : qr)(t, Du(n, 3));
            }),
            (dr.flatMap = function(t, n) {
              return Hr(Xo(t, n), 1);
            }),
            (dr.flatMapDeep = function(t, n) {
              return Hr(Xo(t, n), k);
            }),
            (dr.flatMapDepth = function(t, n, e) {
              return (e = e === u ? 1 : za(e)), Hr(Xo(t, n), e);
            }),
            (dr.flatten = go),
            (dr.flattenDeep = function(t) {
              return null != t && t.length ? Hr(t, k) : [];
            }),
            (dr.flattenDepth = function(t, n) {
              return null != t && t.length
                ? Hr(t, (n = n === u ? 1 : za(n)))
                : [];
            }),
            (dr.flip = function(t) {
              return Mu(t, E);
            }),
            (dr.flow = Af),
            (dr.flowRight = Of),
            (dr.fromPairs = function(t) {
              for (
                var n = -1, e = null == t ? 0 : t.length, r = {};
                ++n < e;

              ) {
                var i = t[n];
                r[i[0]] = i[1];
              }
              return r;
            }),
            (dr.functions = function(t) {
              return null == t ? [] : Vr(t, uf(t));
            }),
            (dr.functionsIn = function(t) {
              return null == t ? [] : Vr(t, of(t));
            }),
            (dr.groupBy = Go),
            (dr.initial = function(t) {
              return null != t && t.length ? Oi(t, 0, -1) : [];
            }),
            (dr.intersection = mo),
            (dr.intersectionBy = xo),
            (dr.intersectionWith = wo),
            (dr.invert = nf),
            (dr.invertBy = ef),
            (dr.invokeMap = Zo),
            (dr.iteratee = Sf),
            (dr.keyBy = Vo),
            (dr.keys = uf),
            (dr.keysIn = of),
            (dr.map = Xo),
            (dr.mapKeys = function(t, n) {
              var e = {};
              return (
                (n = Du(n, 3)),
                Gr(t, function(t, r, i) {
                  Sr(e, n(t, r, i), t);
                }),
                e
              );
            }),
            (dr.mapValues = function(t, n) {
              var e = {};
              return (
                (n = Du(n, 3)),
                Gr(t, function(t, r, i) {
                  Sr(e, r, n(t, r, i));
                }),
                e
              );
            }),
            (dr.matches = function(t) {
              return di(Dr(t, h));
            }),
            (dr.matchesProperty = function(t, n) {
              return pi(t, Dr(n, h));
            }),
            (dr.memoize = aa),
            (dr.merge = af),
            (dr.mergeWith = ff),
            (dr.method = kf),
            (dr.methodOf = Yf),
            (dr.mixin = Df),
            (dr.negate = fa),
            (dr.nthArg = function(t) {
              return (
                (t = za(t)),
                Ci(function(n) {
                  return vi(n, t);
                })
              );
            }),
            (dr.omit = cf),
            (dr.omitBy = function(t, n) {
              return lf(t, fa(Du(n)));
            }),
            (dr.once = function(t) {
              return na(2, t);
            }),
            (dr.orderBy = function(t, n, e, r) {
              return null == t
                ? []
                : (ba(n) || (n = null == n ? [] : [n]),
                  ba((e = r ? u : e)) || (e = null == e ? [] : [e]),
                  bi(t, n, e));
            }),
            (dr.over = jf),
            (dr.overArgs = ca),
            (dr.overEvery = Lf),
            (dr.overSome = Pf),
            (dr.partial = sa),
            (dr.partialRight = la),
            (dr.partition = Ko),
            (dr.pick = sf),
            (dr.pickBy = lf),
            (dr.property = Bf),
            (dr.propertyOf = function(t) {
              return function(n) {
                return null == t ? u : Xr(t, n);
              };
            }),
            (dr.pull = Mo),
            (dr.pullAll = Ro),
            (dr.pullAllBy = function(t, n, e) {
              return t && t.length && n && n.length ? yi(t, n, Du(e, 2)) : t;
            }),
            (dr.pullAllWith = function(t, n, e) {
              return t && t.length && n && n.length ? yi(t, n, u, e) : t;
            }),
            (dr.pullAt = Eo),
            (dr.range = zf),
            (dr.rangeRight = Ff),
            (dr.rearg = ha),
            (dr.reject = function(t, n) {
              return (ba(t) ? Kn : qr)(t, fa(Du(n, 3)));
            }),
            (dr.remove = function(t, n) {
              var e = [];
              if (!t || !t.length) return e;
              var r = -1,
                i = [],
                u = t.length;
              for (n = Du(n, 3); ++r < u; ) {
                var o = t[r];
                n(o, r, t) && (e.push(o), i.push(r));
              }
              return mi(t, i), e;
            }),
            (dr.rest = function(t, n) {
              if ('function' != typeof t) throw new un(f);
              return Ci(t, (n = n === u ? n : za(n)));
            }),
            (dr.reverse = To),
            (dr.sampleSize = function(t, n, e) {
              return (
                (n = (e ? Wu(t, n, e) : n === u) ? 1 : za(n)),
                (ba(t) ? Rr : Ri)(t, n)
              );
            }),
            (dr.set = function(t, n, e) {
              return null == t ? t : Ei(t, n, e);
            }),
            (dr.setWith = function(t, n, e, r) {
              return (
                (r = 'function' == typeof r ? r : u),
                null == t ? t : Ei(t, n, e, r)
              );
            }),
            (dr.shuffle = function(t) {
              return (ba(t) ? Er : Ai)(t);
            }),
            (dr.slice = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              return r
                ? (e && 'number' != typeof e && Wu(t, n, e)
                    ? ((n = 0), (e = r))
                    : ((n = null == n ? 0 : za(n)), (e = e === u ? r : za(e))),
                  Oi(t, n, e))
                : [];
            }),
            (dr.sortBy = Qo),
            (dr.sortedUniq = function(t) {
              return t && t.length ? Yi(t) : [];
            }),
            (dr.sortedUniqBy = function(t, n) {
              return t && t.length ? Yi(t, Du(n, 2)) : [];
            }),
            (dr.split = function(t, n, e) {
              return (
                e && 'number' != typeof e && Wu(t, n, e) && (n = e = u),
                (e = e === u ? j : e >>> 0)
                  ? (t = $a(t)) &&
                    ('string' == typeof n || (null != n && !Sa(n))) &&
                    !(n = Ii(n)) &&
                    Re(t)
                    ? Zi(Se(t), 0, e)
                    : t.split(n, e)
                  : []
              );
            }),
            (dr.spread = function(t, n) {
              if ('function' != typeof t) throw new un(f);
              return (
                (n = null == n ? 0 : $e(za(n), 0)),
                Ci(function(e) {
                  var r = e[n],
                    i = Zi(e, 0, n);
                  return r && ne(i, r), Wn(t, this, i);
                })
              );
            }),
            (dr.tail = function(t) {
              var n = null == t ? 0 : t.length;
              return n ? Oi(t, 1, n) : [];
            }),
            (dr.take = function(t, n, e) {
              return t && t.length
                ? Oi(t, 0, (n = e || n === u ? 1 : za(n)) < 0 ? 0 : n)
                : [];
            }),
            (dr.takeRight = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              return r
                ? Oi(t, (n = r - (n = e || n === u ? 1 : za(n))) < 0 ? 0 : n, r)
                : [];
            }),
            (dr.takeRightWhile = function(t, n) {
              return t && t.length ? Bi(t, Du(n, 3), !1, !0) : [];
            }),
            (dr.takeWhile = function(t, n) {
              return t && t.length ? Bi(t, Du(n, 3)) : [];
            }),
            (dr.tap = function(t, n) {
              return n(t), t;
            }),
            (dr.throttle = function(t, n, e) {
              var r = !0,
                i = !0;
              if ('function' != typeof t) throw new un(f);
              return (
                Ta(e) &&
                  ((r = 'leading' in e ? !!e.leading : r),
                  (i = 'trailing' in e ? !!e.trailing : i)),
                ia(t, n, {leading: r, maxWait: n, trailing: i})
              );
            }),
            (dr.thru = Bo),
            (dr.toArray = Pa),
            (dr.toPairs = hf),
            (dr.toPairsIn = df),
            (dr.toPath = function(t) {
              return ba(t) ? te(t, co) : Da(t) ? [t] : eu(fo($a(t)));
            }),
            (dr.toPlainObject = Ha),
            (dr.transform = function(t, n, e) {
              var r = ba(t),
                i = r || xa(t) || Ia(t);
              if (((n = Du(n, 4)), null == e)) {
                var u = t && t.constructor;
                e = i ? (r ? new u() : []) : Ta(t) && Ma(u) ? pr(Sn(t)) : {};
              }
              return (
                (i ? Zn : Gr)(t, function(t, r, i) {
                  return n(e, t, r, i);
                }),
                e
              );
            }),
            (dr.unary = function(t) {
              return ta(t, 1);
            }),
            (dr.union = No),
            (dr.unionBy = Ao),
            (dr.unionWith = Oo),
            (dr.uniq = function(t) {
              return t && t.length ? ji(t) : [];
            }),
            (dr.uniqBy = function(t, n) {
              return t && t.length ? ji(t, Du(n, 2)) : [];
            }),
            (dr.uniqWith = function(t, n) {
              return (
                (n = 'function' == typeof n ? n : u),
                t && t.length ? ji(t, u, n) : []
              );
            }),
            (dr.unset = function(t, n) {
              return null == t || Li(t, n);
            }),
            (dr.unzip = Uo),
            (dr.unzipWith = So),
            (dr.update = function(t, n, e) {
              return null == t ? t : Pi(t, n, $i(e));
            }),
            (dr.updateWith = function(t, n, e, r) {
              return (
                (r = 'function' == typeof r ? r : u),
                null == t ? t : Pi(t, n, $i(e), r)
              );
            }),
            (dr.values = pf),
            (dr.valuesIn = function(t) {
              return null == t ? [] : ge(t, of(t));
            }),
            (dr.without = ko),
            (dr.words = Rf),
            (dr.wrap = function(t, n) {
              return sa($i(n), t);
            }),
            (dr.xor = Yo),
            (dr.xorBy = Do),
            (dr.xorWith = Io),
            (dr.zip = jo),
            (dr.zipObject = function(t, n) {
              return qi(t || [], n || [], Nr);
            }),
            (dr.zipObjectDeep = function(t, n) {
              return qi(t || [], n || [], Ei);
            }),
            (dr.zipWith = Lo),
            (dr.entries = hf),
            (dr.entriesIn = df),
            (dr.extend = Ga),
            (dr.extendWith = Za),
            Df(dr, dr),
            (dr.add = $f),
            (dr.attempt = Ef),
            (dr.camelCase = _f),
            (dr.capitalize = vf),
            (dr.ceil = Wf),
            (dr.clamp = function(t, n, e) {
              return (
                e === u && ((e = n), (n = u)),
                e !== u && (e = (e = qa(e)) == e ? e : 0),
                n !== u && (n = (n = qa(n)) == n ? n : 0),
                Yr(qa(t), n, e)
              );
            }),
            (dr.clone = function(t) {
              return Dr(t, p);
            }),
            (dr.cloneDeep = function(t) {
              return Dr(t, h | p);
            }),
            (dr.cloneDeepWith = function(t, n) {
              return Dr(t, h | p, (n = 'function' == typeof n ? n : u));
            }),
            (dr.cloneWith = function(t, n) {
              return Dr(t, p, (n = 'function' == typeof n ? n : u));
            }),
            (dr.conformsTo = function(t, n) {
              return null == n || Ir(t, n, uf(n));
            }),
            (dr.deburr = bf),
            (dr.defaultTo = function(t, n) {
              return null == t || t != t ? n : t;
            }),
            (dr.divide = Gf),
            (dr.endsWith = function(t, n, e) {
              (t = $a(t)), (n = Ii(n));
              var r = t.length,
                i = (e = e === u ? r : Yr(za(e), 0, r));
              return (e -= n.length) >= 0 && t.slice(e, i) == n;
            }),
            (dr.eq = da),
            (dr.escape = function(t) {
              return (t = $a(t)) && Rt.test(t) ? t.replace(Ct, Ce) : t;
            }),
            (dr.escapeRegExp = function(t) {
              return (t = $a(t)) && kt.test(t) ? t.replace(St, '\\$&') : t;
            }),
            (dr.every = function(t, n, e) {
              var r = ba(t) ? Xn : zr;
              return e && Wu(t, n, e) && (n = u), r(t, Du(n, 3));
            }),
            (dr.find = qo),
            (dr.findIndex = vo),
            (dr.findKey = function(t, n) {
              return oe(t, Du(n, 3), Gr);
            }),
            (dr.findLast = Ho),
            (dr.findLastIndex = bo),
            (dr.findLastKey = function(t, n) {
              return oe(t, Du(n, 3), Zr);
            }),
            (dr.floor = Zf),
            (dr.forEach = $o),
            (dr.forEachRight = Wo),
            (dr.forIn = function(t, n) {
              return null == t ? t : $r(t, Du(n, 3), of);
            }),
            (dr.forInRight = function(t, n) {
              return null == t ? t : Wr(t, Du(n, 3), of);
            }),
            (dr.forOwn = function(t, n) {
              return t && Gr(t, Du(n, 3));
            }),
            (dr.forOwnRight = function(t, n) {
              return t && Zr(t, Du(n, 3));
            }),
            (dr.get = Ja),
            (dr.gt = pa),
            (dr.gte = _a),
            (dr.has = function(t, n) {
              return null != t && Fu(t, n, ti);
            }),
            (dr.hasIn = tf),
            (dr.head = yo),
            (dr.identity = Uf),
            (dr.includes = function(t, n, e, r) {
              (t = ya(t) ? t : pf(t)), (e = e && !r ? za(e) : 0);
              var i = t.length;
              return (
                e < 0 && (e = $e(i + e, 0)),
                Ya(t) ? e <= i && t.indexOf(n, e) > -1 : !!i && fe(t, n, e) > -1
              );
            }),
            (dr.indexOf = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              if (!r) return -1;
              var i = null == e ? 0 : za(e);
              return i < 0 && (i = $e(r + i, 0)), fe(t, n, i);
            }),
            (dr.inRange = function(t, n, e) {
              return (
                (n = Ba(n)),
                e === u ? ((e = n), (n = 0)) : (e = Ba(e)),
                (function(t, n, e) {
                  return t >= We(n, e) && t < $e(n, e);
                })((t = qa(t)), n, e)
              );
            }),
            (dr.invoke = rf),
            (dr.isArguments = va),
            (dr.isArray = ba),
            (dr.isArrayBuffer = ga),
            (dr.isArrayLike = ya),
            (dr.isArrayLikeObject = ma),
            (dr.isBoolean = function(t) {
              return !0 === t || !1 === t || (Na(t) && Qr(t) == H);
            }),
            (dr.isBuffer = xa),
            (dr.isDate = wa),
            (dr.isElement = function(t) {
              return Na(t) && 1 === t.nodeType && !Ua(t);
            }),
            (dr.isEmpty = function(t) {
              if (null == t) return !0;
              if (
                ya(t) &&
                (ba(t) ||
                  'string' == typeof t ||
                  'function' == typeof t.splice ||
                  xa(t) ||
                  Ia(t) ||
                  va(t))
              )
                return !t.length;
              var n = zu(t);
              if (n == X || n == et) return !t.size;
              if (Xu(t)) return !ci(t).length;
              for (var e in t) if (ln.call(t, e)) return !1;
              return !0;
            }),
            (dr.isEqual = function(t, n) {
              return ui(t, n);
            }),
            (dr.isEqualWith = function(t, n, e) {
              var r = (e = 'function' == typeof e ? e : u) ? e(t, n) : u;
              return r === u ? ui(t, n, u, e) : !!r;
            }),
            (dr.isError = Ca),
            (dr.isFinite = function(t) {
              return 'number' == typeof t && Fe(t);
            }),
            (dr.isFunction = Ma),
            (dr.isInteger = Ra),
            (dr.isLength = Ea),
            (dr.isMap = Aa),
            (dr.isMatch = function(t, n) {
              return t === n || oi(t, n, ju(n));
            }),
            (dr.isMatchWith = function(t, n, e) {
              return (e = 'function' == typeof e ? e : u), oi(t, n, ju(n), e);
            }),
            (dr.isNaN = function(t) {
              return Oa(t) && t != +t;
            }),
            (dr.isNative = function(t) {
              if (Vu(t)) throw new Qt(a);
              return ai(t);
            }),
            (dr.isNil = function(t) {
              return null == t;
            }),
            (dr.isNull = function(t) {
              return null === t;
            }),
            (dr.isNumber = Oa),
            (dr.isObject = Ta),
            (dr.isObjectLike = Na),
            (dr.isPlainObject = Ua),
            (dr.isRegExp = Sa),
            (dr.isSafeInteger = function(t) {
              return Ra(t) && t >= -Y && t <= Y;
            }),
            (dr.isSet = ka),
            (dr.isString = Ya),
            (dr.isSymbol = Da),
            (dr.isTypedArray = Ia),
            (dr.isUndefined = function(t) {
              return t === u;
            }),
            (dr.isWeakMap = function(t) {
              return Na(t) && zu(t) == ot;
            }),
            (dr.isWeakSet = function(t) {
              return Na(t) && Qr(t) == at;
            }),
            (dr.join = function(t, n) {
              return null == t ? '' : qe.call(t, n);
            }),
            (dr.kebabCase = gf),
            (dr.last = Co),
            (dr.lastIndexOf = function(t, n, e) {
              var r = null == t ? 0 : t.length;
              if (!r) return -1;
              var i = r;
              return (
                e !== u && (i = (i = za(e)) < 0 ? $e(r + i, 0) : We(i, r - 1)),
                n == n
                  ? (function(t, n, e) {
                      for (var r = e + 1; r--; ) if (t[r] === n) return r;
                      return r;
                    })(t, n, i)
                  : ae(t, se, i, !0)
              );
            }),
            (dr.lowerCase = yf),
            (dr.lowerFirst = mf),
            (dr.lt = ja),
            (dr.lte = La),
            (dr.max = function(t) {
              return t && t.length ? Fr(t, Uf, Jr) : u;
            }),
            (dr.maxBy = function(t, n) {
              return t && t.length ? Fr(t, Du(n, 2), Jr) : u;
            }),
            (dr.mean = function(t) {
              return le(t, Uf);
            }),
            (dr.meanBy = function(t, n) {
              return le(t, Du(n, 2));
            }),
            (dr.min = function(t) {
              return t && t.length ? Fr(t, Uf, li) : u;
            }),
            (dr.minBy = function(t, n) {
              return t && t.length ? Fr(t, Du(n, 2), li) : u;
            }),
            (dr.stubArray = qf),
            (dr.stubFalse = Hf),
            (dr.stubObject = function() {
              return {};
            }),
            (dr.stubString = function() {
              return '';
            }),
            (dr.stubTrue = function() {
              return !0;
            }),
            (dr.multiply = Xf),
            (dr.nth = function(t, n) {
              return t && t.length ? vi(t, za(n)) : u;
            }),
            (dr.noConflict = function() {
              return Yn._ === this && (Yn._ = vn), this;
            }),
            (dr.noop = If),
            (dr.now = Jo),
            (dr.pad = function(t, n, e) {
              t = $a(t);
              var r = (n = za(n)) ? Ue(t) : 0;
              if (!n || r >= n) return t;
              var i = (n - r) / 2;
              return bu(Pe(i), e) + t + bu(Le(i), e);
            }),
            (dr.padEnd = function(t, n, e) {
              t = $a(t);
              var r = (n = za(n)) ? Ue(t) : 0;
              return n && r < n ? t + bu(n - r, e) : t;
            }),
            (dr.padStart = function(t, n, e) {
              t = $a(t);
              var r = (n = za(n)) ? Ue(t) : 0;
              return n && r < n ? bu(n - r, e) + t : t;
            }),
            (dr.parseInt = function(t, n, e) {
              return (
                e || null == n ? (n = 0) : n && (n = +n),
                Ze($a(t).replace(Dt, ''), n || 0)
              );
            }),
            (dr.random = function(t, n, e) {
              if (
                (e && 'boolean' != typeof e && Wu(t, n, e) && (n = e = u),
                e === u &&
                  ('boolean' == typeof n
                    ? ((e = n), (n = u))
                    : 'boolean' == typeof t && ((e = t), (t = u))),
                t === u && n === u
                  ? ((t = 0), (n = 1))
                  : ((t = Ba(t)), n === u ? ((n = t), (t = 0)) : (n = Ba(n))),
                t > n)
              ) {
                var r = t;
                (t = n), (n = r);
              }
              if (e || t % 1 || n % 1) {
                var i = Ve();
                return We(
                  t + i * (n - t + On('1e-' + ((i + '').length - 1))),
                  n
                );
              }
              return xi(t, n);
            }),
            (dr.reduce = function(t, n, e) {
              var r = ba(t) ? ee : pe,
                i = arguments.length < 3;
              return r(t, Du(n, 4), e, i, Pr);
            }),
            (dr.reduceRight = function(t, n, e) {
              var r = ba(t) ? re : pe,
                i = arguments.length < 3;
              return r(t, Du(n, 4), e, i, Br);
            }),
            (dr.repeat = function(t, n, e) {
              return (
                (n = (e ? Wu(t, n, e) : n === u) ? 1 : za(n)), wi($a(t), n)
              );
            }),
            (dr.replace = function() {
              var t = arguments,
                n = $a(t[0]);
              return t.length < 3 ? n : n.replace(t[1], t[2]);
            }),
            (dr.result = function(t, n, e) {
              var r = -1,
                i = (n = Wi(n, t)).length;
              for (i || ((i = 1), (t = u)); ++r < i; ) {
                var o = null == t ? u : t[co(n[r])];
                o === u && ((r = i), (o = e)), (t = Ma(o) ? o.call(t) : o);
              }
              return t;
            }),
            (dr.round = Kf),
            (dr.runInContext = t),
            (dr.sample = function(t) {
              return (ba(t) ? Mr : Mi)(t);
            }),
            (dr.size = function(t) {
              if (null == t) return 0;
              if (ya(t)) return Ya(t) ? Ue(t) : t.length;
              var n = zu(t);
              return n == X || n == et ? t.size : ci(t).length;
            }),
            (dr.snakeCase = xf),
            (dr.some = function(t, n, e) {
              var r = ba(t) ? ie : Ui;
              return e && Wu(t, n, e) && (n = u), r(t, Du(n, 3));
            }),
            (dr.sortedIndex = function(t, n) {
              return Si(t, n);
            }),
            (dr.sortedIndexBy = function(t, n, e) {
              return ki(t, n, Du(e, 2));
            }),
            (dr.sortedIndexOf = function(t, n) {
              var e = null == t ? 0 : t.length;
              if (e) {
                var r = Si(t, n);
                if (r < e && da(t[r], n)) return r;
              }
              return -1;
            }),
            (dr.sortedLastIndex = function(t, n) {
              return Si(t, n, !0);
            }),
            (dr.sortedLastIndexBy = function(t, n, e) {
              return ki(t, n, Du(e, 2), !0);
            }),
            (dr.sortedLastIndexOf = function(t, n) {
              if (null != t && t.length) {
                var e = Si(t, n, !0) - 1;
                if (da(t[e], n)) return e;
              }
              return -1;
            }),
            (dr.startCase = wf),
            (dr.startsWith = function(t, n, e) {
              return (
                (t = $a(t)),
                (e = null == e ? 0 : Yr(za(e), 0, t.length)),
                (n = Ii(n)),
                t.slice(e, e + n.length) == n
              );
            }),
            (dr.subtract = Qf),
            (dr.sum = function(t) {
              return t && t.length ? _e(t, Uf) : 0;
            }),
            (dr.sumBy = function(t, n) {
              return t && t.length ? _e(t, Du(n, 2)) : 0;
            }),
            (dr.template = function(t, n, e) {
              var r = dr.templateSettings;
              e && Wu(t, n, e) && (n = u), (t = $a(t)), (n = Za({}, n, r, Ru));
              var i,
                o,
                a = Za({}, n.imports, r.imports, Ru),
                f = uf(a),
                c = ge(a, f),
                s = 0,
                l = n.interpolate || Xt,
                h = "__p += '",
                d = en(
                  (n.escape || Xt).source +
                    '|' +
                    l.source +
                    '|' +
                    (l === Nt ? Ft : Xt).source +
                    '|' +
                    (n.evaluate || Xt).source +
                    '|$',
                  'g'
                ),
                p =
                  '//# sourceURL=' +
                  (ln.call(n, 'sourceURL')
                    ? (n.sourceURL + '').replace(/[\r\n]/g, ' ')
                    : 'lodash.templateSources[' + ++En + ']') +
                  '\n';
              t.replace(d, function(n, e, r, u, a, f) {
                return (
                  r || (r = u),
                  (h += t.slice(s, f).replace(Kt, Me)),
                  e && ((i = !0), (h += "' +\n__e(" + e + ") +\n'")),
                  a && ((o = !0), (h += "';\n" + a + ";\n__p += '")),
                  r &&
                    (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                  (s = f + n.length),
                  n
                );
              }),
                (h += "';\n");
              var _ = ln.call(n, 'variable') && n.variable;
              _ || (h = 'with (obj) {\n' + h + '\n}\n'),
                (h = (o ? h.replace(yt, '') : h)
                  .replace(mt, '$1')
                  .replace(xt, '$1;')),
                (h =
                  'function(' +
                  (_ || 'obj') +
                  ') {\n' +
                  (_ ? '' : 'obj || (obj = {});\n') +
                  "var __t, __p = ''" +
                  (i ? ', __e = _.escape' : '') +
                  (o
                    ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                    : ';\n') +
                  h +
                  'return __p\n}');
              var v = Ef(function() {
                return Jt(f, p + 'return ' + h).apply(u, c);
              });
              if (((v.source = h), Ca(v))) throw v;
              return v;
            }),
            (dr.times = function(t, n) {
              if ((t = za(t)) < 1 || t > Y) return [];
              var e = j,
                r = We(t, j);
              (n = Du(n)), (t -= j);
              for (var i = ve(r, n); ++e < t; ) n(e);
              return i;
            }),
            (dr.toFinite = Ba),
            (dr.toInteger = za),
            (dr.toLength = Fa),
            (dr.toLower = function(t) {
              return $a(t).toLowerCase();
            }),
            (dr.toNumber = qa),
            (dr.toSafeInteger = function(t) {
              return t ? Yr(za(t), -Y, Y) : 0 === t ? t : 0;
            }),
            (dr.toString = $a),
            (dr.toUpper = function(t) {
              return $a(t).toUpperCase();
            }),
            (dr.trim = function(t, n, e) {
              if ((t = $a(t)) && (e || n === u)) return t.replace(Yt, '');
              if (!t || !(n = Ii(n))) return t;
              var r = Se(t),
                i = Se(n);
              return Zi(r, me(r, i), xe(r, i) + 1).join('');
            }),
            (dr.trimEnd = function(t, n, e) {
              if ((t = $a(t)) && (e || n === u)) return t.replace(It, '');
              if (!t || !(n = Ii(n))) return t;
              var r = Se(t);
              return Zi(r, 0, xe(r, Se(n)) + 1).join('');
            }),
            (dr.trimStart = function(t, n, e) {
              if ((t = $a(t)) && (e || n === u)) return t.replace(Dt, '');
              if (!t || !(n = Ii(n))) return t;
              var r = Se(t);
              return Zi(r, me(r, Se(n))).join('');
            }),
            (dr.truncate = function(t, n) {
              var e = T,
                r = N;
              if (Ta(n)) {
                var i = 'separator' in n ? n.separator : i;
                (e = 'length' in n ? za(n.length) : e),
                  (r = 'omission' in n ? Ii(n.omission) : r);
              }
              var o = (t = $a(t)).length;
              if (Re(t)) {
                var a = Se(t);
                o = a.length;
              }
              if (e >= o) return t;
              var f = e - Ue(r);
              if (f < 1) return r;
              var c = a ? Zi(a, 0, f).join('') : t.slice(0, f);
              if (i === u) return c + r;
              if ((a && (f += c.length - f), Sa(i))) {
                if (t.slice(f).search(i)) {
                  var s,
                    l = c;
                  for (
                    i.global || (i = en(i.source, $a(qt.exec(i)) + 'g')),
                      i.lastIndex = 0;
                    (s = i.exec(l));

                  )
                    var h = s.index;
                  c = c.slice(0, h === u ? f : h);
                }
              } else if (t.indexOf(Ii(i), f) != f) {
                var d = c.lastIndexOf(i);
                d > -1 && (c = c.slice(0, d));
              }
              return c + r;
            }),
            (dr.unescape = function(t) {
              return (t = $a(t)) && Mt.test(t) ? t.replace(wt, ke) : t;
            }),
            (dr.uniqueId = function(t) {
              var n = ++hn;
              return $a(t) + n;
            }),
            (dr.upperCase = Cf),
            (dr.upperFirst = Mf),
            (dr.each = $o),
            (dr.eachRight = Wo),
            (dr.first = yo),
            Df(
              dr,
              ((Vf = {}),
              Gr(dr, function(t, n) {
                ln.call(dr.prototype, n) || (Vf[n] = t);
              }),
              Vf),
              {chain: !1}
            ),
            (dr.VERSION = '4.17.15'),
            Zn(
              [
                'bind',
                'bindKey',
                'curry',
                'curryRight',
                'partial',
                'partialRight',
              ],
              function(t) {
                dr[t].placeholder = dr;
              }
            ),
            Zn(['drop', 'take'], function(t, n) {
              (br.prototype[t] = function(e) {
                e = e === u ? 1 : $e(za(e), 0);
                var r = this.__filtered__ && !n ? new br(this) : this.clone();
                return (
                  r.__filtered__
                    ? (r.__takeCount__ = We(e, r.__takeCount__))
                    : r.__views__.push({
                        size: We(e, j),
                        type: t + (r.__dir__ < 0 ? 'Right' : ''),
                      }),
                  r
                );
              }),
                (br.prototype[t + 'Right'] = function(n) {
                  return this.reverse()
                    [t](n)
                    .reverse();
                });
            }),
            Zn(['filter', 'map', 'takeWhile'], function(t, n) {
              var e = n + 1,
                r = e == U || 3 == e;
              br.prototype[t] = function(t) {
                var n = this.clone();
                return (
                  n.__iteratees__.push({iteratee: Du(t, 3), type: e}),
                  (n.__filtered__ = n.__filtered__ || r),
                  n
                );
              };
            }),
            Zn(['head', 'last'], function(t, n) {
              var e = 'take' + (n ? 'Right' : '');
              br.prototype[t] = function() {
                return this[e](1).value()[0];
              };
            }),
            Zn(['initial', 'tail'], function(t, n) {
              var e = 'drop' + (n ? '' : 'Right');
              br.prototype[t] = function() {
                return this.__filtered__ ? new br(this) : this[e](1);
              };
            }),
            (br.prototype.compact = function() {
              return this.filter(Uf);
            }),
            (br.prototype.find = function(t) {
              return this.filter(t).head();
            }),
            (br.prototype.findLast = function(t) {
              return this.reverse().find(t);
            }),
            (br.prototype.invokeMap = Ci(function(t, n) {
              return 'function' == typeof t
                ? new br(this)
                : this.map(function(e) {
                    return ri(e, t, n);
                  });
            })),
            (br.prototype.reject = function(t) {
              return this.filter(fa(Du(t)));
            }),
            (br.prototype.slice = function(t, n) {
              t = za(t);
              var e = this;
              return e.__filtered__ && (t > 0 || n < 0)
                ? new br(e)
                : (t < 0 ? (e = e.takeRight(-t)) : t && (e = e.drop(t)),
                  n !== u &&
                    (e = (n = za(n)) < 0 ? e.dropRight(-n) : e.take(n - t)),
                  e);
            }),
            (br.prototype.takeRightWhile = function(t) {
              return this.reverse()
                .takeWhile(t)
                .reverse();
            }),
            (br.prototype.toArray = function() {
              return this.take(j);
            }),
            Gr(br.prototype, function(t, n) {
              var e = /^(?:filter|find|map|reject)|While$/.test(n),
                r = /^(?:head|last)$/.test(n),
                i = dr[r ? 'take' + ('last' == n ? 'Right' : '') : n],
                o = r || /^find/.test(n);
              i &&
                (dr.prototype[n] = function() {
                  var n = this.__wrapped__,
                    a = r ? [1] : arguments,
                    f = n instanceof br,
                    c = a[0],
                    s = f || ba(n),
                    l = function(t) {
                      var n = i.apply(dr, ne([t], a));
                      return r && h ? n[0] : n;
                    };
                  s &&
                    e &&
                    'function' == typeof c &&
                    1 != c.length &&
                    (f = s = !1);
                  var h = this.__chain__,
                    d = !!this.__actions__.length,
                    p = o && !h,
                    _ = f && !d;
                  if (!o && s) {
                    n = _ ? n : new br(this);
                    var v = t.apply(n, a);
                    return (
                      v.__actions__.push({func: Bo, args: [l], thisArg: u}),
                      new vr(v, h)
                    );
                  }
                  return p && _
                    ? t.apply(this, a)
                    : ((v = this.thru(l)),
                      p ? (r ? v.value()[0] : v.value()) : v);
                });
            }),
            Zn(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(
              t
            ) {
              var n = on[t],
                e = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru',
                r = /^(?:pop|shift)$/.test(t);
              dr.prototype[t] = function() {
                var t = arguments;
                if (r && !this.__chain__) {
                  var i = this.value();
                  return n.apply(ba(i) ? i : [], t);
                }
                return this[e](function(e) {
                  return n.apply(ba(e) ? e : [], t);
                });
              };
            }),
            Gr(br.prototype, function(t, n) {
              var e = dr[n];
              if (e) {
                var r = e.name + '';
                ln.call(ir, r) || (ir[r] = []), ir[r].push({name: n, func: e});
              }
            }),
            (ir[du(u, g).name] = [{name: 'wrapper', func: u}]),
            (br.prototype.clone = function() {
              var t = new br(this.__wrapped__);
              return (
                (t.__actions__ = eu(this.__actions__)),
                (t.__dir__ = this.__dir__),
                (t.__filtered__ = this.__filtered__),
                (t.__iteratees__ = eu(this.__iteratees__)),
                (t.__takeCount__ = this.__takeCount__),
                (t.__views__ = eu(this.__views__)),
                t
              );
            }),
            (br.prototype.reverse = function() {
              if (this.__filtered__) {
                var t = new br(this);
                (t.__dir__ = -1), (t.__filtered__ = !0);
              } else (t = this.clone()).__dir__ *= -1;
              return t;
            }),
            (br.prototype.value = function() {
              var t = this.__wrapped__.value(),
                n = this.__dir__,
                e = ba(t),
                r = n < 0,
                i = e ? t.length : 0,
                u = (function(t, n, e) {
                  for (var r = -1, i = e.length; ++r < i; ) {
                    var u = e[r],
                      o = u.size;
                    switch (u.type) {
                      case 'drop':
                        t += o;
                        break;
                      case 'dropRight':
                        n -= o;
                        break;
                      case 'take':
                        n = We(n, t + o);
                        break;
                      case 'takeRight':
                        t = $e(t, n - o);
                    }
                  }
                  return {start: t, end: n};
                })(0, i, this.__views__),
                o = u.start,
                a = u.end,
                f = a - o,
                c = r ? a : o - 1,
                s = this.__iteratees__,
                l = s.length,
                h = 0,
                d = We(f, this.__takeCount__);
              if (!e || (!r && i == f && d == f))
                return zi(t, this.__actions__);
              var p = [];
              t: for (; f-- && h < d; ) {
                for (var _ = -1, v = t[(c += n)]; ++_ < l; ) {
                  var b = s[_],
                    g = b.iteratee,
                    y = b.type,
                    m = g(v);
                  if (y == S) v = m;
                  else if (!m) {
                    if (y == U) continue t;
                    break t;
                  }
                }
                p[h++] = v;
              }
              return p;
            }),
            (dr.prototype.at = zo),
            (dr.prototype.chain = function() {
              return Po(this);
            }),
            (dr.prototype.commit = function() {
              return new vr(this.value(), this.__chain__);
            }),
            (dr.prototype.next = function() {
              this.__values__ === u && (this.__values__ = Pa(this.value()));
              var t = this.__index__ >= this.__values__.length;
              return {
                done: t,
                value: t ? u : this.__values__[this.__index__++],
              };
            }),
            (dr.prototype.plant = function(t) {
              for (var n, e = this; e instanceof _r; ) {
                var r = lo(e);
                (r.__index__ = 0),
                  (r.__values__ = u),
                  n ? (i.__wrapped__ = r) : (n = r);
                var i = r;
                e = e.__wrapped__;
              }
              return (i.__wrapped__ = t), n;
            }),
            (dr.prototype.reverse = function() {
              var t = this.__wrapped__;
              if (t instanceof br) {
                var n = t;
                return (
                  this.__actions__.length && (n = new br(this)),
                  (n = n.reverse()).__actions__.push({
                    func: Bo,
                    args: [To],
                    thisArg: u,
                  }),
                  new vr(n, this.__chain__)
                );
              }
              return this.thru(To);
            }),
            (dr.prototype.toJSON = dr.prototype.valueOf = dr.prototype.value = function() {
              return zi(this.__wrapped__, this.__actions__);
            }),
            (dr.prototype.first = dr.prototype.head),
            Pn &&
              (dr.prototype[Pn] = function() {
                return this;
              }),
            dr
          );
        })();
        (Yn._ = Ye),
          (i = function() {
            return Ye;
          }.call(n, e, n, r)) === u || (r.exports = i);
      }.call(this));
    }.call(this, e(8), e(17)(t)));
  },
  function(t, n, e) {},
  function(t, n) {
    t.exports = function(t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function() {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function() {
              return t.l;
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function() {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  ,
  ,
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = function(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      },
      i = function(t) {
        var n;
        return (
          1 === t.length &&
            ((n = t),
            (t = function(t, e) {
              return r(n(t), e);
            })),
          {
            left: function(n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var u = (r + i) >>> 1;
                t(n[u], e) < 0 ? (r = u + 1) : (i = u);
              }
              return r;
            },
            right: function(n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var u = (r + i) >>> 1;
                t(n[u], e) > 0 ? (i = u) : (r = u + 1);
              }
              return r;
            },
          }
        );
      };
    var u = i(r),
      o = u.right,
      a = (u.left, o);
    var f = function(t) {
        return null === t ? NaN : +t;
      },
      c = Array.prototype,
      s = (c.slice,
      c.map,
      function(t, n, e) {
        (t = +t),
          (n = +n),
          (e =
            (i = arguments.length) < 2
              ? ((n = t), (t = 0), 1)
              : i < 3
              ? 1
              : +e);
        for (
          var r = -1,
            i = 0 | Math.max(0, Math.ceil((n - t) / e)),
            u = new Array(i);
          ++r < i;

        )
          u[r] = t + r * e;
        return u;
      }),
      l = Math.sqrt(50),
      h = Math.sqrt(10),
      d = Math.sqrt(2),
      p = function(t, n, e) {
        var r,
          i,
          u,
          o,
          a = -1;
        if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t];
        if (
          ((r = n < t) && ((i = t), (t = n), (n = i)),
          0 === (o = _(t, n, e)) || !isFinite(o))
        )
          return [];
        if (o > 0)
          for (
            t = Math.ceil(t / o),
              n = Math.floor(n / o),
              u = new Array((i = Math.ceil(n - t + 1)));
            ++a < i;

          )
            u[a] = (t + a) * o;
        else
          for (
            t = Math.floor(t * o),
              n = Math.ceil(n * o),
              u = new Array((i = Math.ceil(t - n + 1)));
            ++a < i;

          )
            u[a] = (t - a) / o;
        return r && u.reverse(), u;
      };
    function _(t, n, e) {
      var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        u = r / Math.pow(10, i);
      return i >= 0
        ? (u >= l ? 10 : u >= h ? 5 : u >= d ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (u >= l ? 10 : u >= h ? 5 : u >= d ? 2 : 1);
    }
    function v(t, n, e) {
      var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        u = r / i;
      return (
        u >= l ? (i *= 10) : u >= h ? (i *= 5) : u >= d && (i *= 2),
        n < t ? -i : i
      );
    }
    var b = function(t, n, e) {
      if ((null == e && (e = f), (r = t.length))) {
        if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
        if (n >= 1) return +e(t[r - 1], r - 1, t);
        var r,
          i = (r - 1) * n,
          u = Math.floor(i),
          o = +e(t[u], u, t);
        return o + (+e(t[u + 1], u + 1, t) - o) * (i - u);
      }
    };
    function g(t, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(n).domain(t);
      }
      return this;
    }
    function y(t, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.interpolator(t);
          break;
        default:
          this.interpolator(n).domain(t);
      }
      return this;
    }
    function m() {}
    function x(t, n) {
      var e = new m();
      if (t instanceof m)
        t.each(function(t, n) {
          e.set(n, t);
        });
      else if (Array.isArray(t)) {
        var r,
          i = -1,
          u = t.length;
        if (null == n) for (; ++i < u; ) e.set(i, t[i]);
        else for (; ++i < u; ) e.set(n((r = t[i]), i, t), r);
      } else if (t) for (var o in t) e.set(o, t[o]);
      return e;
    }
    m.prototype = x.prototype = {
      constructor: m,
      has: function(t) {
        return '$' + t in this;
      },
      get: function(t) {
        return this['$' + t];
      },
      set: function(t, n) {
        return (this['$' + t] = n), this;
      },
      remove: function(t) {
        var n = '$' + t;
        return n in this && delete this[n];
      },
      clear: function() {
        for (var t in this) '$' === t[0] && delete this[t];
      },
      keys: function() {
        var t = [];
        for (var n in this) '$' === n[0] && t.push(n.slice(1));
        return t;
      },
      values: function() {
        var t = [];
        for (var n in this) '$' === n[0] && t.push(this[n]);
        return t;
      },
      entries: function() {
        var t = [];
        for (var n in this)
          '$' === n[0] && t.push({key: n.slice(1), value: this[n]});
        return t;
      },
      size: function() {
        var t = 0;
        for (var n in this) '$' === n[0] && ++t;
        return t;
      },
      empty: function() {
        for (var t in this) if ('$' === t[0]) return !1;
        return !0;
      },
      each: function(t) {
        for (var n in this) '$' === n[0] && t(this[n], n.slice(1), this);
      },
    };
    var w = x;
    function C() {}
    var M = w.prototype;
    function R(t, n) {
      var e = new C();
      if (t instanceof C)
        t.each(function(t) {
          e.add(t);
        });
      else if (t) {
        var r = -1,
          i = t.length;
        if (null == n) for (; ++r < i; ) e.add(t[r]);
        else for (; ++r < i; ) e.add(n(t[r], r, t));
      }
      return e;
    }
    C.prototype = R.prototype = {
      constructor: C,
      has: M.has,
      add: function(t) {
        return (this['$' + (t += '')] = t), this;
      },
      remove: M.remove,
      clear: M.clear,
      values: M.keys,
      size: M.size,
      empty: M.empty,
      each: M.each,
    };
    var E = Array.prototype,
      T = E.map,
      N = E.slice,
      A = {name: 'implicit'};
    function O() {
      var t = w(),
        n = [],
        e = [],
        r = A;
      function i(i) {
        var u = i + '',
          o = t.get(u);
        if (!o) {
          if (r !== A) return r;
          t.set(u, (o = n.push(i)));
        }
        return e[(o - 1) % e.length];
      }
      return (
        (i.domain = function(e) {
          if (!arguments.length) return n.slice();
          (n = []), (t = w());
          for (var r, u, o = -1, a = e.length; ++o < a; )
            t.has((u = (r = e[o]) + '')) || t.set(u, n.push(r));
          return i;
        }),
        (i.range = function(t) {
          return arguments.length ? ((e = N.call(t)), i) : e.slice();
        }),
        (i.unknown = function(t) {
          return arguments.length ? ((r = t), i) : r;
        }),
        (i.copy = function() {
          return O(n, e).unknown(r);
        }),
        g.apply(i, arguments),
        i
      );
    }
    function U() {
      var t,
        n,
        e = O().unknown(void 0),
        r = e.domain,
        i = e.range,
        u = [0, 1],
        o = !1,
        a = 0,
        f = 0,
        c = 0.5;
      function l() {
        var e = r().length,
          l = u[1] < u[0],
          h = u[l - 0],
          d = u[1 - l];
        (t = (d - h) / Math.max(1, e - a + 2 * f)),
          o && (t = Math.floor(t)),
          (h += (d - h - t * (e - a)) * c),
          (n = t * (1 - a)),
          o && ((h = Math.round(h)), (n = Math.round(n)));
        var p = s(e).map(function(n) {
          return h + t * n;
        });
        return i(l ? p.reverse() : p);
      }
      return (
        delete e.unknown,
        (e.domain = function(t) {
          return arguments.length ? (r(t), l()) : r();
        }),
        (e.range = function(t) {
          return arguments.length ? ((u = [+t[0], +t[1]]), l()) : u.slice();
        }),
        (e.rangeRound = function(t) {
          return (u = [+t[0], +t[1]]), (o = !0), l();
        }),
        (e.bandwidth = function() {
          return n;
        }),
        (e.step = function() {
          return t;
        }),
        (e.round = function(t) {
          return arguments.length ? ((o = !!t), l()) : o;
        }),
        (e.padding = function(t) {
          return arguments.length ? ((a = Math.min(1, (f = +t))), l()) : a;
        }),
        (e.paddingInner = function(t) {
          return arguments.length ? ((a = Math.min(1, t)), l()) : a;
        }),
        (e.paddingOuter = function(t) {
          return arguments.length ? ((f = +t), l()) : f;
        }),
        (e.align = function(t) {
          return arguments.length
            ? ((c = Math.max(0, Math.min(1, t))), l())
            : c;
        }),
        (e.copy = function() {
          return U(r(), u)
            .round(o)
            .paddingInner(a)
            .paddingOuter(f)
            .align(c);
        }),
        g.apply(l(), arguments)
      );
    }
    function S() {
      return (function t(n) {
        var e = n.copy;
        return (
          (n.padding = n.paddingOuter),
          delete n.paddingInner,
          delete n.paddingOuter,
          (n.copy = function() {
            return t(e());
          }),
          n
        );
      })(U.apply(null, arguments).paddingInner(1));
    }
    var k = e(2),
      Y = function(t) {
        return function() {
          return t;
        };
      },
      D = function(t) {
        return +t;
      },
      I = [0, 1];
    function j(t) {
      return t;
    }
    function L(t, n) {
      return (n -= t = +t)
        ? function(e) {
            return (e - t) / n;
          }
        : Y(isNaN(n) ? NaN : 0.5);
    }
    function P(t) {
      var n,
        e = t[0],
        r = t[t.length - 1];
      return (
        e > r && ((n = e), (e = r), (r = n)),
        function(t) {
          return Math.max(e, Math.min(r, t));
        }
      );
    }
    function B(t, n, e) {
      var r = t[0],
        i = t[1],
        u = n[0],
        o = n[1];
      return (
        i < r ? ((r = L(i, r)), (u = e(o, u))) : ((r = L(r, i)), (u = e(u, o))),
        function(t) {
          return u(r(t));
        }
      );
    }
    function z(t, n, e) {
      var r = Math.min(t.length, n.length) - 1,
        i = new Array(r),
        u = new Array(r),
        o = -1;
      for (
        t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
        ++o < r;

      )
        (i[o] = L(t[o], t[o + 1])), (u[o] = e(n[o], n[o + 1]));
      return function(n) {
        var e = a(t, n, 1, r) - 1;
        return u[e](i[e](n));
      };
    }
    function F(t, n) {
      return n
        .domain(t.domain())
        .range(t.range())
        .interpolate(t.interpolate())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function q() {
      var t,
        n,
        e,
        r,
        i,
        u,
        o = I,
        a = I,
        f = k.interpolate,
        c = j;
      function s() {
        return (
          (r = Math.min(o.length, a.length) > 2 ? z : B), (i = u = null), l
        );
      }
      function l(n) {
        return isNaN((n = +n)) ? e : (i || (i = r(o.map(t), a, f)))(t(c(n)));
      }
      return (
        (l.invert = function(e) {
          return c(n((u || (u = r(a, o.map(t), k.interpolateNumber)))(e)));
        }),
        (l.domain = function(t) {
          return arguments.length
            ? ((o = T.call(t, D)), c === j || (c = P(o)), s())
            : o.slice();
        }),
        (l.range = function(t) {
          return arguments.length ? ((a = N.call(t)), s()) : a.slice();
        }),
        (l.rangeRound = function(t) {
          return (a = N.call(t)), (f = k.interpolateRound), s();
        }),
        (l.clamp = function(t) {
          return arguments.length ? ((c = t ? P(o) : j), l) : c !== j;
        }),
        (l.interpolate = function(t) {
          return arguments.length ? ((f = t), s()) : f;
        }),
        (l.unknown = function(t) {
          return arguments.length ? ((e = t), l) : e;
        }),
        function(e, r) {
          return (t = e), (n = r), s();
        }
      );
    }
    function H(t, n) {
      return q()(t, n);
    }
    var $ = e(4),
      W = function(t, n, e, r) {
        var i,
          u = v(t, n, e);
        switch ((r = Object($.formatSpecifier)(null == r ? ',f' : r)).type) {
          case 's':
            var o = Math.max(Math.abs(t), Math.abs(n));
            return (
              null != r.precision ||
                isNaN((i = Object($.precisionPrefix)(u, o))) ||
                (r.precision = i),
              Object($.formatPrefix)(r, o)
            );
          case '':
          case 'e':
          case 'g':
          case 'p':
          case 'r':
            null != r.precision ||
              isNaN(
                (i = Object($.precisionRound)(
                  u,
                  Math.max(Math.abs(t), Math.abs(n))
                ))
              ) ||
              (r.precision = i - ('e' === r.type));
            break;
          case 'f':
          case '%':
            null != r.precision ||
              isNaN((i = Object($.precisionFixed)(u))) ||
              (r.precision = i - 2 * ('%' === r.type));
        }
        return Object($.format)(r);
      };
    function G(t) {
      var n = t.domain;
      return (
        (t.ticks = function(t) {
          var e = n();
          return p(e[0], e[e.length - 1], null == t ? 10 : t);
        }),
        (t.tickFormat = function(t, e) {
          var r = n();
          return W(r[0], r[r.length - 1], null == t ? 10 : t, e);
        }),
        (t.nice = function(e) {
          null == e && (e = 10);
          var r,
            i = n(),
            u = 0,
            o = i.length - 1,
            a = i[u],
            f = i[o];
          return (
            f < a && ((r = a), (a = f), (f = r), (r = u), (u = o), (o = r)),
            (r = _(a, f, e)) > 0
              ? (r = _(
                  (a = Math.floor(a / r) * r),
                  (f = Math.ceil(f / r) * r),
                  e
                ))
              : r < 0 &&
                (r = _(
                  (a = Math.ceil(a * r) / r),
                  (f = Math.floor(f * r) / r),
                  e
                )),
            r > 0
              ? ((i[u] = Math.floor(a / r) * r),
                (i[o] = Math.ceil(f / r) * r),
                n(i))
              : r < 0 &&
                ((i[u] = Math.ceil(a * r) / r),
                (i[o] = Math.floor(f * r) / r),
                n(i)),
            t
          );
        }),
        t
      );
    }
    function Z() {
      var t = H(j, j);
      return (
        (t.copy = function() {
          return F(t, Z());
        }),
        g.apply(t, arguments),
        G(t)
      );
    }
    function V(t) {
      var n;
      function e(t) {
        return isNaN((t = +t)) ? n : t;
      }
      return (
        (e.invert = e),
        (e.domain = e.range = function(n) {
          return arguments.length ? ((t = T.call(n, D)), e) : t.slice();
        }),
        (e.unknown = function(t) {
          return arguments.length ? ((n = t), e) : n;
        }),
        (e.copy = function() {
          return V(t).unknown(n);
        }),
        (t = arguments.length ? T.call(t, D) : [0, 1]),
        G(e)
      );
    }
    var X = function(t, n) {
      var e,
        r = 0,
        i = (t = t.slice()).length - 1,
        u = t[r],
        o = t[i];
      return (
        o < u && ((e = r), (r = i), (i = e), (e = u), (u = o), (o = e)),
        (t[r] = n.floor(u)),
        (t[i] = n.ceil(o)),
        t
      );
    };
    function K(t) {
      return Math.log(t);
    }
    function Q(t) {
      return Math.exp(t);
    }
    function J(t) {
      return -Math.log(-t);
    }
    function tt(t) {
      return -Math.exp(-t);
    }
    function nt(t) {
      return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t;
    }
    function et(t) {
      return function(n) {
        return -t(-n);
      };
    }
    function rt(t) {
      var n,
        e,
        r = t(K, Q),
        i = r.domain,
        u = 10;
      function o() {
        return (
          (n = (function(t) {
            return t === Math.E
              ? Math.log
              : (10 === t && Math.log10) ||
                  (2 === t && Math.log2) ||
                  ((t = Math.log(t)),
                  function(n) {
                    return Math.log(n) / t;
                  });
          })(u)),
          (e = (function(t) {
            return 10 === t
              ? nt
              : t === Math.E
              ? Math.exp
              : function(n) {
                  return Math.pow(t, n);
                };
          })(u)),
          i()[0] < 0 ? ((n = et(n)), (e = et(e)), t(J, tt)) : t(K, Q),
          r
        );
      }
      return (
        (r.base = function(t) {
          return arguments.length ? ((u = +t), o()) : u;
        }),
        (r.domain = function(t) {
          return arguments.length ? (i(t), o()) : i();
        }),
        (r.ticks = function(t) {
          var r,
            o = i(),
            a = o[0],
            f = o[o.length - 1];
          (r = f < a) && ((h = a), (a = f), (f = h));
          var c,
            s,
            l,
            h = n(a),
            d = n(f),
            _ = null == t ? 10 : +t,
            v = [];
          if (!(u % 1) && d - h < _) {
            if (((h = Math.round(h) - 1), (d = Math.round(d) + 1), a > 0)) {
              for (; h < d; ++h)
                for (s = 1, c = e(h); s < u; ++s)
                  if (!((l = c * s) < a)) {
                    if (l > f) break;
                    v.push(l);
                  }
            } else
              for (; h < d; ++h)
                for (s = u - 1, c = e(h); s >= 1; --s)
                  if (!((l = c * s) < a)) {
                    if (l > f) break;
                    v.push(l);
                  }
          } else v = p(h, d, Math.min(d - h, _)).map(e);
          return r ? v.reverse() : v;
        }),
        (r.tickFormat = function(t, i) {
          if (
            (null == i && (i = 10 === u ? '.0e' : ','),
            'function' != typeof i && (i = Object($.format)(i)),
            t === 1 / 0)
          )
            return i;
          null == t && (t = 10);
          var o = Math.max(1, (u * t) / r.ticks().length);
          return function(t) {
            var r = t / e(Math.round(n(t)));
            return r * u < u - 0.5 && (r *= u), r <= o ? i(t) : '';
          };
        }),
        (r.nice = function() {
          return i(
            X(i(), {
              floor: function(t) {
                return e(Math.floor(n(t)));
              },
              ceil: function(t) {
                return e(Math.ceil(n(t)));
              },
            })
          );
        }),
        r
      );
    }
    function it() {
      var t = rt(q()).domain([1, 10]);
      return (
        (t.copy = function() {
          return F(t, it()).base(t.base());
        }),
        g.apply(t, arguments),
        t
      );
    }
    function ut(t) {
      return function(n) {
        return Math.sign(n) * Math.log1p(Math.abs(n / t));
      };
    }
    function ot(t) {
      return function(n) {
        return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
      };
    }
    function at(t) {
      var n = 1,
        e = t(ut(n), ot(n));
      return (
        (e.constant = function(e) {
          return arguments.length ? t(ut((n = +e)), ot(n)) : n;
        }),
        G(e)
      );
    }
    function ft() {
      var t = at(q());
      return (
        (t.copy = function() {
          return F(t, ft()).constant(t.constant());
        }),
        g.apply(t, arguments)
      );
    }
    function ct(t) {
      return function(n) {
        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
      };
    }
    function st(t) {
      return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
    }
    function lt(t) {
      return t < 0 ? -t * t : t * t;
    }
    function ht(t) {
      var n = t(j, j),
        e = 1;
      function r() {
        return 1 === e ? t(j, j) : 0.5 === e ? t(st, lt) : t(ct(e), ct(1 / e));
      }
      return (
        (n.exponent = function(t) {
          return arguments.length ? ((e = +t), r()) : e;
        }),
        G(n)
      );
    }
    function dt() {
      var t = ht(q());
      return (
        (t.copy = function() {
          return F(t, dt()).exponent(t.exponent());
        }),
        g.apply(t, arguments),
        t
      );
    }
    function pt() {
      return dt.apply(null, arguments).exponent(0.5);
    }
    function _t() {
      var t,
        n = [],
        e = [],
        i = [];
      function u() {
        var t = 0,
          r = Math.max(1, e.length);
        for (i = new Array(r - 1); ++t < r; ) i[t - 1] = b(n, t / r);
        return o;
      }
      function o(n) {
        return isNaN((n = +n)) ? t : e[a(i, n)];
      }
      return (
        (o.invertExtent = function(t) {
          var r = e.indexOf(t);
          return r < 0
            ? [NaN, NaN]
            : [r > 0 ? i[r - 1] : n[0], r < i.length ? i[r] : n[n.length - 1]];
        }),
        (o.domain = function(t) {
          if (!arguments.length) return n.slice();
          n = [];
          for (var e, i = 0, o = t.length; i < o; ++i)
            null == (e = t[i]) || isNaN((e = +e)) || n.push(e);
          return n.sort(r), u();
        }),
        (o.range = function(t) {
          return arguments.length ? ((e = N.call(t)), u()) : e.slice();
        }),
        (o.unknown = function(n) {
          return arguments.length ? ((t = n), o) : t;
        }),
        (o.quantiles = function() {
          return i.slice();
        }),
        (o.copy = function() {
          return _t()
            .domain(n)
            .range(e)
            .unknown(t);
        }),
        g.apply(o, arguments)
      );
    }
    function vt() {
      var t,
        n = 0,
        e = 1,
        r = 1,
        i = [0.5],
        u = [0, 1];
      function o(n) {
        return n <= n ? u[a(i, n, 0, r)] : t;
      }
      function f() {
        var t = -1;
        for (i = new Array(r); ++t < r; )
          i[t] = ((t + 1) * e - (t - r) * n) / (r + 1);
        return o;
      }
      return (
        (o.domain = function(t) {
          return arguments.length ? ((n = +t[0]), (e = +t[1]), f()) : [n, e];
        }),
        (o.range = function(t) {
          return arguments.length
            ? ((r = (u = N.call(t)).length - 1), f())
            : u.slice();
        }),
        (o.invertExtent = function(t) {
          var o = u.indexOf(t);
          return o < 0
            ? [NaN, NaN]
            : o < 1
            ? [n, i[0]]
            : o >= r
            ? [i[r - 1], e]
            : [i[o - 1], i[o]];
        }),
        (o.unknown = function(n) {
          return arguments.length ? ((t = n), o) : o;
        }),
        (o.thresholds = function() {
          return i.slice();
        }),
        (o.copy = function() {
          return vt()
            .domain([n, e])
            .range(u)
            .unknown(t);
        }),
        g.apply(G(o), arguments)
      );
    }
    function bt() {
      var t,
        n = [0.5],
        e = [0, 1],
        r = 1;
      function i(i) {
        return i <= i ? e[a(n, i, 0, r)] : t;
      }
      return (
        (i.domain = function(t) {
          return arguments.length
            ? ((n = N.call(t)), (r = Math.min(n.length, e.length - 1)), i)
            : n.slice();
        }),
        (i.range = function(t) {
          return arguments.length
            ? ((e = N.call(t)), (r = Math.min(n.length, e.length - 1)), i)
            : e.slice();
        }),
        (i.invertExtent = function(t) {
          var r = e.indexOf(t);
          return [n[r - 1], n[r]];
        }),
        (i.unknown = function(n) {
          return arguments.length ? ((t = n), i) : t;
        }),
        (i.copy = function() {
          return bt()
            .domain(n)
            .range(e)
            .unknown(t);
        }),
        g.apply(i, arguments)
      );
    }
    var gt = new Date(),
      yt = new Date();
    function mt(t, n, e, r) {
      function i(n) {
        return t((n = new Date(+n))), n;
      }
      return (
        (i.floor = i),
        (i.ceil = function(e) {
          return t((e = new Date(e - 1))), n(e, 1), t(e), e;
        }),
        (i.round = function(t) {
          var n = i(t),
            e = i.ceil(t);
          return t - n < e - t ? n : e;
        }),
        (i.offset = function(t, e) {
          return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
        }),
        (i.range = function(e, r, u) {
          var o,
            a = [];
          if (
            ((e = i.ceil(e)),
            (u = null == u ? 1 : Math.floor(u)),
            !(e < r && u > 0))
          )
            return a;
          do {
            a.push((o = new Date(+e))), n(e, u), t(e);
          } while (o < e && e < r);
          return a;
        }),
        (i.filter = function(e) {
          return mt(
            function(n) {
              if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
            },
            function(t, r) {
              if (t >= t)
                if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
            }
          );
        }),
        e &&
          ((i.count = function(n, r) {
            return (
              gt.setTime(+n),
              yt.setTime(+r),
              t(gt),
              t(yt),
              Math.floor(e(gt, yt))
            );
          }),
          (i.every = function(t) {
            return (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? i.filter(
                      r
                        ? function(n) {
                            return r(n) % t == 0;
                          }
                        : function(n) {
                            return i.count(0, n) % t == 0;
                          }
                    )
                  : i
                : null
            );
          })),
        i
      );
    }
    var xt = mt(
      function() {},
      function(t, n) {
        t.setTime(+t + n);
      },
      function(t, n) {
        return n - t;
      }
    );
    xt.every = function(t) {
      return (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? mt(
                function(n) {
                  n.setTime(Math.floor(n / t) * t);
                },
                function(n, e) {
                  n.setTime(+n + e * t);
                },
                function(n, e) {
                  return (e - n) / t;
                }
              )
            : xt
          : null
      );
    };
    var wt = xt,
      Ct = (xt.range, 6e4),
      Mt = 6048e5,
      Rt = mt(
        function(t) {
          t.setTime(t - t.getMilliseconds());
        },
        function(t, n) {
          t.setTime(+t + 1e3 * n);
        },
        function(t, n) {
          return (n - t) / 1e3;
        },
        function(t) {
          return t.getUTCSeconds();
        }
      ),
      Et = Rt,
      Tt = (Rt.range,
      mt(
        function(t) {
          t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
        },
        function(t, n) {
          t.setTime(+t + n * Ct);
        },
        function(t, n) {
          return (n - t) / Ct;
        },
        function(t) {
          return t.getMinutes();
        }
      )),
      Nt = Tt,
      At = (Tt.range,
      mt(
        function(t) {
          t.setTime(
            t - t.getMilliseconds() - 1e3 * t.getSeconds() - t.getMinutes() * Ct
          );
        },
        function(t, n) {
          t.setTime(+t + 36e5 * n);
        },
        function(t, n) {
          return (n - t) / 36e5;
        },
        function(t) {
          return t.getHours();
        }
      )),
      Ot = At,
      Ut = (At.range,
      mt(
        function(t) {
          t.setHours(0, 0, 0, 0);
        },
        function(t, n) {
          t.setDate(t.getDate() + n);
        },
        function(t, n) {
          return (
            (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ct) /
            864e5
          );
        },
        function(t) {
          return t.getDate() - 1;
        }
      )),
      St = Ut;
    Ut.range;
    function kt(t) {
      return mt(
        function(n) {
          n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
            n.setHours(0, 0, 0, 0);
        },
        function(t, n) {
          t.setDate(t.getDate() + 7 * n);
        },
        function(t, n) {
          return (
            (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ct) / Mt
          );
        }
      );
    }
    var Yt = kt(0),
      Dt = kt(1),
      It = kt(2),
      jt = kt(3),
      Lt = kt(4),
      Pt = kt(5),
      Bt = kt(6),
      zt = (Yt.range,
      Dt.range,
      It.range,
      jt.range,
      Lt.range,
      Pt.range,
      Bt.range,
      mt(
        function(t) {
          t.setDate(1), t.setHours(0, 0, 0, 0);
        },
        function(t, n) {
          t.setMonth(t.getMonth() + n);
        },
        function(t, n) {
          return (
            n.getMonth() -
            t.getMonth() +
            12 * (n.getFullYear() - t.getFullYear())
          );
        },
        function(t) {
          return t.getMonth();
        }
      )),
      Ft = zt,
      qt = (zt.range,
      mt(
        function(t) {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        function(t, n) {
          t.setFullYear(t.getFullYear() + n);
        },
        function(t, n) {
          return n.getFullYear() - t.getFullYear();
        },
        function(t) {
          return t.getFullYear();
        }
      ));
    qt.every = function(t) {
      return isFinite((t = Math.floor(t))) && t > 0
        ? mt(
            function(n) {
              n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                n.setMonth(0, 1),
                n.setHours(0, 0, 0, 0);
            },
            function(n, e) {
              n.setFullYear(n.getFullYear() + e * t);
            }
          )
        : null;
    };
    var Ht = qt,
      $t = (qt.range,
      mt(
        function(t) {
          t.setUTCSeconds(0, 0);
        },
        function(t, n) {
          t.setTime(+t + n * Ct);
        },
        function(t, n) {
          return (n - t) / Ct;
        },
        function(t) {
          return t.getUTCMinutes();
        }
      )),
      Wt = $t,
      Gt = ($t.range,
      mt(
        function(t) {
          t.setUTCMinutes(0, 0, 0);
        },
        function(t, n) {
          t.setTime(+t + 36e5 * n);
        },
        function(t, n) {
          return (n - t) / 36e5;
        },
        function(t) {
          return t.getUTCHours();
        }
      )),
      Zt = Gt,
      Vt = (Gt.range,
      mt(
        function(t) {
          t.setUTCHours(0, 0, 0, 0);
        },
        function(t, n) {
          t.setUTCDate(t.getUTCDate() + n);
        },
        function(t, n) {
          return (n - t) / 864e5;
        },
        function(t) {
          return t.getUTCDate() - 1;
        }
      )),
      Xt = Vt;
    Vt.range;
    function Kt(t) {
      return mt(
        function(n) {
          n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
            n.setUTCHours(0, 0, 0, 0);
        },
        function(t, n) {
          t.setUTCDate(t.getUTCDate() + 7 * n);
        },
        function(t, n) {
          return (n - t) / Mt;
        }
      );
    }
    var Qt = Kt(0),
      Jt = Kt(1),
      tn = Kt(2),
      nn = Kt(3),
      en = Kt(4),
      rn = Kt(5),
      un = Kt(6),
      on = (Qt.range,
      Jt.range,
      tn.range,
      nn.range,
      en.range,
      rn.range,
      un.range,
      mt(
        function(t) {
          t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
        },
        function(t, n) {
          t.setUTCMonth(t.getUTCMonth() + n);
        },
        function(t, n) {
          return (
            n.getUTCMonth() -
            t.getUTCMonth() +
            12 * (n.getUTCFullYear() - t.getUTCFullYear())
          );
        },
        function(t) {
          return t.getUTCMonth();
        }
      )),
      an = on,
      fn = (on.range,
      mt(
        function(t) {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        function(t, n) {
          t.setUTCFullYear(t.getUTCFullYear() + n);
        },
        function(t, n) {
          return n.getUTCFullYear() - t.getUTCFullYear();
        },
        function(t) {
          return t.getUTCFullYear();
        }
      ));
    fn.every = function(t) {
      return isFinite((t = Math.floor(t))) && t > 0
        ? mt(
            function(n) {
              n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                n.setUTCMonth(0, 1),
                n.setUTCHours(0, 0, 0, 0);
            },
            function(n, e) {
              n.setUTCFullYear(n.getUTCFullYear() + e * t);
            }
          )
        : null;
    };
    var cn = fn;
    fn.range;
    function sn(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return n.setFullYear(t.y), n;
      }
      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
    }
    function ln(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return n.setUTCFullYear(t.y), n;
      }
      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
    }
    function hn(t) {
      return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
    }
    var dn,
      pn,
      _n,
      vn,
      bn = {'-': '', _: ' ', 0: '0'},
      gn = /^\s*\d+/,
      yn = /^%/,
      mn = /[\\^$*+?|[\]().{}]/g;
    function xn(t, n, e) {
      var r = t < 0 ? '-' : '',
        i = (r ? -t : t) + '',
        u = i.length;
      return r + (u < e ? new Array(e - u + 1).join(n) + i : i);
    }
    function wn(t) {
      return t.replace(mn, '\\$&');
    }
    function Cn(t) {
      return new RegExp('^(?:' + t.map(wn).join('|') + ')', 'i');
    }
    function Mn(t) {
      for (var n = {}, e = -1, r = t.length; ++e < r; )
        n[t[e].toLowerCase()] = e;
      return n;
    }
    function Rn(t, n, e) {
      var r = gn.exec(n.slice(e, e + 1));
      return r ? ((t.w = +r[0]), e + r[0].length) : -1;
    }
    function En(t, n, e) {
      var r = gn.exec(n.slice(e, e + 1));
      return r ? ((t.u = +r[0]), e + r[0].length) : -1;
    }
    function Tn(t, n, e) {
      var r = gn.exec(n.slice(e, e + 2));
      return r ? ((t.U = +r[0]), e + r[0].length) : -1;
    }
    function Nn(t, n, e) {
      var r = gn.exec(n.slice(e, e + 2));
      return r ? ((t.V = +r[0]), e + r[0].length) : -1;
    }
    function An(t, n, e) {
      var r = gn.exec(n.slice(e, e + 2));
      return r ? ((t.W = +r[0]), e + r[0].length) : -1;
    }
    function On(t, n, e) {
      var r = gn.exec(n.slice(e, e + 4));
      return r ? ((t.y = +r[0]), e + r[0].length) : -1;
    }
    function Un(t, n, e) {
      var r = gn.exec(n.slice(e, e + 2));
      return r
        ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
        : -1;
    }
    function Sn(t, n, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
      return r
        ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length)
        : -1;
    }
    function kn(t, n, e) {
      var r = gn.exec(n.slice(e, e + 2));
      return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
    }
    function Yn(t, n, e) {
      var r = gn.exec(n.slice(e, e + 2));
      return r ? ((t.d = +r[0]), e + r[0].length) : -1;
    }
    function Dn(t, n, e) {
      var r = gn.exec(n.slice(e, e + 3));
      return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
    }
    function In(t, n, e) {
      var r = gn.exec(n.slice(e, e + 2));
      return r ? ((t.H = +r[0]), e + r[0].length) : -1;
    }
    function jn(t, n, e) {
      var r = gn.exec(n.slice(e, e + 2));
      return r ? ((t.M = +r[0]), e + r[0].length) : -1;
    }
    function Ln(t, n, e) {
      var r = gn.exec(n.slice(e, e + 2));
      return r ? ((t.S = +r[0]), e + r[0].length) : -1;
    }
    function Pn(t, n, e) {
      var r = gn.exec(n.slice(e, e + 3));
      return r ? ((t.L = +r[0]), e + r[0].length) : -1;
    }
    function Bn(t, n, e) {
      var r = gn.exec(n.slice(e, e + 6));
      return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
    }
    function zn(t, n, e) {
      var r = yn.exec(n.slice(e, e + 1));
      return r ? e + r[0].length : -1;
    }
    function Fn(t, n, e) {
      var r = gn.exec(n.slice(e));
      return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
    }
    function qn(t, n, e) {
      var r = gn.exec(n.slice(e));
      return r ? ((t.Q = 1e3 * +r[0]), e + r[0].length) : -1;
    }
    function Hn(t, n) {
      return xn(t.getDate(), n, 2);
    }
    function $n(t, n) {
      return xn(t.getHours(), n, 2);
    }
    function Wn(t, n) {
      return xn(t.getHours() % 12 || 12, n, 2);
    }
    function Gn(t, n) {
      return xn(1 + St.count(Ht(t), t), n, 3);
    }
    function Zn(t, n) {
      return xn(t.getMilliseconds(), n, 3);
    }
    function Vn(t, n) {
      return Zn(t, n) + '000';
    }
    function Xn(t, n) {
      return xn(t.getMonth() + 1, n, 2);
    }
    function Kn(t, n) {
      return xn(t.getMinutes(), n, 2);
    }
    function Qn(t, n) {
      return xn(t.getSeconds(), n, 2);
    }
    function Jn(t) {
      var n = t.getDay();
      return 0 === n ? 7 : n;
    }
    function te(t, n) {
      return xn(Yt.count(Ht(t), t), n, 2);
    }
    function ne(t, n) {
      var e = t.getDay();
      return (
        (t = e >= 4 || 0 === e ? Lt(t) : Lt.ceil(t)),
        xn(Lt.count(Ht(t), t) + (4 === Ht(t).getDay()), n, 2)
      );
    }
    function ee(t) {
      return t.getDay();
    }
    function re(t, n) {
      return xn(Dt.count(Ht(t), t), n, 2);
    }
    function ie(t, n) {
      return xn(t.getFullYear() % 100, n, 2);
    }
    function ue(t, n) {
      return xn(t.getFullYear() % 1e4, n, 4);
    }
    function oe(t) {
      var n = t.getTimezoneOffset();
      return (
        (n > 0 ? '-' : ((n *= -1), '+')) +
        xn((n / 60) | 0, '0', 2) +
        xn(n % 60, '0', 2)
      );
    }
    function ae(t, n) {
      return xn(t.getUTCDate(), n, 2);
    }
    function fe(t, n) {
      return xn(t.getUTCHours(), n, 2);
    }
    function ce(t, n) {
      return xn(t.getUTCHours() % 12 || 12, n, 2);
    }
    function se(t, n) {
      return xn(1 + Xt.count(cn(t), t), n, 3);
    }
    function le(t, n) {
      return xn(t.getUTCMilliseconds(), n, 3);
    }
    function he(t, n) {
      return le(t, n) + '000';
    }
    function de(t, n) {
      return xn(t.getUTCMonth() + 1, n, 2);
    }
    function pe(t, n) {
      return xn(t.getUTCMinutes(), n, 2);
    }
    function _e(t, n) {
      return xn(t.getUTCSeconds(), n, 2);
    }
    function ve(t) {
      var n = t.getUTCDay();
      return 0 === n ? 7 : n;
    }
    function be(t, n) {
      return xn(Qt.count(cn(t), t), n, 2);
    }
    function ge(t, n) {
      var e = t.getUTCDay();
      return (
        (t = e >= 4 || 0 === e ? en(t) : en.ceil(t)),
        xn(en.count(cn(t), t) + (4 === cn(t).getUTCDay()), n, 2)
      );
    }
    function ye(t) {
      return t.getUTCDay();
    }
    function me(t, n) {
      return xn(Jt.count(cn(t), t), n, 2);
    }
    function xe(t, n) {
      return xn(t.getUTCFullYear() % 100, n, 2);
    }
    function we(t, n) {
      return xn(t.getUTCFullYear() % 1e4, n, 4);
    }
    function Ce() {
      return '+0000';
    }
    function Me() {
      return '%';
    }
    function Re(t) {
      return +t;
    }
    function Ee(t) {
      return Math.floor(+t / 1e3);
    }
    (dn = (function(t) {
      var n = t.dateTime,
        e = t.date,
        r = t.time,
        i = t.periods,
        u = t.days,
        o = t.shortDays,
        a = t.months,
        f = t.shortMonths,
        c = Cn(i),
        s = Mn(i),
        l = Cn(u),
        h = Mn(u),
        d = Cn(o),
        p = Mn(o),
        _ = Cn(a),
        v = Mn(a),
        b = Cn(f),
        g = Mn(f),
        y = {
          a: function(t) {
            return o[t.getDay()];
          },
          A: function(t) {
            return u[t.getDay()];
          },
          b: function(t) {
            return f[t.getMonth()];
          },
          B: function(t) {
            return a[t.getMonth()];
          },
          c: null,
          d: Hn,
          e: Hn,
          f: Vn,
          H: $n,
          I: Wn,
          j: Gn,
          L: Zn,
          m: Xn,
          M: Kn,
          p: function(t) {
            return i[+(t.getHours() >= 12)];
          },
          Q: Re,
          s: Ee,
          S: Qn,
          u: Jn,
          U: te,
          V: ne,
          w: ee,
          W: re,
          x: null,
          X: null,
          y: ie,
          Y: ue,
          Z: oe,
          '%': Me,
        },
        m = {
          a: function(t) {
            return o[t.getUTCDay()];
          },
          A: function(t) {
            return u[t.getUTCDay()];
          },
          b: function(t) {
            return f[t.getUTCMonth()];
          },
          B: function(t) {
            return a[t.getUTCMonth()];
          },
          c: null,
          d: ae,
          e: ae,
          f: he,
          H: fe,
          I: ce,
          j: se,
          L: le,
          m: de,
          M: pe,
          p: function(t) {
            return i[+(t.getUTCHours() >= 12)];
          },
          Q: Re,
          s: Ee,
          S: _e,
          u: ve,
          U: be,
          V: ge,
          w: ye,
          W: me,
          x: null,
          X: null,
          y: xe,
          Y: we,
          Z: Ce,
          '%': Me,
        },
        x = {
          a: function(t, n, e) {
            var r = d.exec(n.slice(e));
            return r ? ((t.w = p[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          A: function(t, n, e) {
            var r = l.exec(n.slice(e));
            return r ? ((t.w = h[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          b: function(t, n, e) {
            var r = b.exec(n.slice(e));
            return r ? ((t.m = g[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          B: function(t, n, e) {
            var r = _.exec(n.slice(e));
            return r ? ((t.m = v[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          c: function(t, e, r) {
            return M(t, n, e, r);
          },
          d: Yn,
          e: Yn,
          f: Bn,
          H: In,
          I: In,
          j: Dn,
          L: Pn,
          m: kn,
          M: jn,
          p: function(t, n, e) {
            var r = c.exec(n.slice(e));
            return r ? ((t.p = s[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          Q: Fn,
          s: qn,
          S: Ln,
          u: En,
          U: Tn,
          V: Nn,
          w: Rn,
          W: An,
          x: function(t, n, r) {
            return M(t, e, n, r);
          },
          X: function(t, n, e) {
            return M(t, r, n, e);
          },
          y: Un,
          Y: On,
          Z: Sn,
          '%': zn,
        };
      function w(t, n) {
        return function(e) {
          var r,
            i,
            u,
            o = [],
            a = -1,
            f = 0,
            c = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++a < c; )
            37 === t.charCodeAt(a) &&
              (o.push(t.slice(f, a)),
              null != (i = bn[(r = t.charAt(++a))])
                ? (r = t.charAt(++a))
                : (i = 'e' === r ? ' ' : '0'),
              (u = n[r]) && (r = u(e, i)),
              o.push(r),
              (f = a + 1));
          return o.push(t.slice(f, a)), o.join('');
        };
      }
      function C(t, n) {
        return function(e) {
          var r,
            i,
            u = hn(1900);
          if (M(u, t, (e += ''), 0) != e.length) return null;
          if ('Q' in u) return new Date(u.Q);
          if (('p' in u && (u.H = (u.H % 12) + 12 * u.p), 'V' in u)) {
            if (u.V < 1 || u.V > 53) return null;
            'w' in u || (u.w = 1),
              'Z' in u
                ? ((i = (r = ln(hn(u.y))).getUTCDay()),
                  (r = i > 4 || 0 === i ? Jt.ceil(r) : Jt(r)),
                  (r = Xt.offset(r, 7 * (u.V - 1))),
                  (u.y = r.getUTCFullYear()),
                  (u.m = r.getUTCMonth()),
                  (u.d = r.getUTCDate() + ((u.w + 6) % 7)))
                : ((i = (r = n(hn(u.y))).getDay()),
                  (r = i > 4 || 0 === i ? Dt.ceil(r) : Dt(r)),
                  (r = St.offset(r, 7 * (u.V - 1))),
                  (u.y = r.getFullYear()),
                  (u.m = r.getMonth()),
                  (u.d = r.getDate() + ((u.w + 6) % 7)));
          } else
            ('W' in u || 'U' in u) &&
              ('w' in u || (u.w = 'u' in u ? u.u % 7 : 'W' in u ? 1 : 0),
              (i = 'Z' in u ? ln(hn(u.y)).getUTCDay() : n(hn(u.y)).getDay()),
              (u.m = 0),
              (u.d =
                'W' in u
                  ? ((u.w + 6) % 7) + 7 * u.W - ((i + 5) % 7)
                  : u.w + 7 * u.U - ((i + 6) % 7)));
          return 'Z' in u
            ? ((u.H += (u.Z / 100) | 0), (u.M += u.Z % 100), ln(u))
            : n(u);
        };
      }
      function M(t, n, e, r) {
        for (var i, u, o = 0, a = n.length, f = e.length; o < a; ) {
          if (r >= f) return -1;
          if (37 === (i = n.charCodeAt(o++))) {
            if (
              ((i = n.charAt(o++)),
              !(u = x[i in bn ? n.charAt(o++) : i]) || (r = u(t, e, r)) < 0)
            )
              return -1;
          } else if (i != e.charCodeAt(r++)) return -1;
        }
        return r;
      }
      return (
        (y.x = w(e, y)),
        (y.X = w(r, y)),
        (y.c = w(n, y)),
        (m.x = w(e, m)),
        (m.X = w(r, m)),
        (m.c = w(n, m)),
        {
          format: function(t) {
            var n = w((t += ''), y);
            return (
              (n.toString = function() {
                return t;
              }),
              n
            );
          },
          parse: function(t) {
            var n = C((t += ''), sn);
            return (
              (n.toString = function() {
                return t;
              }),
              n
            );
          },
          utcFormat: function(t) {
            var n = w((t += ''), m);
            return (
              (n.toString = function() {
                return t;
              }),
              n
            );
          },
          utcParse: function(t) {
            var n = C(t, ln);
            return (
              (n.toString = function() {
                return t;
              }),
              n
            );
          },
        }
      );
    })({
      dateTime: '%x, %X',
      date: '%-m/%-d/%Y',
      time: '%-I:%M:%S %p',
      periods: ['AM', 'PM'],
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      shortMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    })),
      (pn = dn.format),
      dn.parse,
      (_n = dn.utcFormat),
      (vn = dn.utcParse);
    Date.prototype.toISOString || _n('%Y-%m-%dT%H:%M:%S.%LZ');
    +new Date('2000-01-01T00:00:00.000Z') || vn('%Y-%m-%dT%H:%M:%S.%LZ');
    var Te = 1e3,
      Ne = 60 * Te,
      Ae = 60 * Ne,
      Oe = 24 * Ae,
      Ue = 7 * Oe,
      Se = 30 * Oe,
      ke = 365 * Oe;
    function Ye(t) {
      return new Date(t);
    }
    function De(t) {
      return t instanceof Date ? +t : +new Date(+t);
    }
    function Ie(t, n, e, r, u, o, a, f, c) {
      var s = H(j, j),
        l = s.invert,
        h = s.domain,
        d = c('.%L'),
        p = c(':%S'),
        _ = c('%I:%M'),
        b = c('%I %p'),
        g = c('%a %d'),
        y = c('%b %d'),
        m = c('%B'),
        x = c('%Y'),
        w = [
          [a, 1, Te],
          [a, 5, 5 * Te],
          [a, 15, 15 * Te],
          [a, 30, 30 * Te],
          [o, 1, Ne],
          [o, 5, 5 * Ne],
          [o, 15, 15 * Ne],
          [o, 30, 30 * Ne],
          [u, 1, Ae],
          [u, 3, 3 * Ae],
          [u, 6, 6 * Ae],
          [u, 12, 12 * Ae],
          [r, 1, Oe],
          [r, 2, 2 * Oe],
          [e, 1, Ue],
          [n, 1, Se],
          [n, 3, 3 * Se],
          [t, 1, ke],
        ];
      function C(i) {
        return (a(i) < i
          ? d
          : o(i) < i
          ? p
          : u(i) < i
          ? _
          : r(i) < i
          ? b
          : n(i) < i
          ? e(i) < i
            ? g
            : y
          : t(i) < i
          ? m
          : x)(i);
      }
      function M(n, e, r, u) {
        if ((null == n && (n = 10), 'number' == typeof n)) {
          var o = Math.abs(r - e) / n,
            a = i(function(t) {
              return t[2];
            }).right(w, o);
          a === w.length
            ? ((u = v(e / ke, r / ke, n)), (n = t))
            : a
            ? ((u = (a = w[o / w[a - 1][2] < w[a][2] / o ? a - 1 : a])[1]),
              (n = a[0]))
            : ((u = Math.max(v(e, r, n), 1)), (n = f));
        }
        return null == u ? n : n.every(u);
      }
      return (
        (s.invert = function(t) {
          return new Date(l(t));
        }),
        (s.domain = function(t) {
          return arguments.length ? h(T.call(t, De)) : h().map(Ye);
        }),
        (s.ticks = function(t, n) {
          var e,
            r = h(),
            i = r[0],
            u = r[r.length - 1],
            o = u < i;
          return (
            o && ((e = i), (i = u), (u = e)),
            (e = (e = M(t, i, u, n)) ? e.range(i, u + 1) : []),
            o ? e.reverse() : e
          );
        }),
        (s.tickFormat = function(t, n) {
          return null == n ? C : c(n);
        }),
        (s.nice = function(t, n) {
          var e = h();
          return (t = M(t, e[0], e[e.length - 1], n)) ? h(X(e, t)) : s;
        }),
        (s.copy = function() {
          return F(s, Ie(t, n, e, r, u, o, a, f, c));
        }),
        s
      );
    }
    var je = function() {
        return g.apply(
          Ie(Ht, Ft, Yt, St, Ot, Nt, Et, wt, pn).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      },
      Le = function() {
        return g.apply(
          Ie(cn, an, Qt, Xt, Zt, Wt, Et, wt, _n).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      };
    function Pe() {
      var t,
        n,
        e,
        r,
        i,
        u = 0,
        o = 1,
        a = j,
        f = !1;
      function c(n) {
        return isNaN((n = +n))
          ? i
          : a(
              0 === e
                ? 0.5
                : ((n = (r(n) - t) * e), f ? Math.max(0, Math.min(1, n)) : n)
            );
      }
      return (
        (c.domain = function(i) {
          return arguments.length
            ? ((t = r((u = +i[0]))),
              (n = r((o = +i[1]))),
              (e = t === n ? 0 : 1 / (n - t)),
              c)
            : [u, o];
        }),
        (c.clamp = function(t) {
          return arguments.length ? ((f = !!t), c) : f;
        }),
        (c.interpolator = function(t) {
          return arguments.length ? ((a = t), c) : a;
        }),
        (c.unknown = function(t) {
          return arguments.length ? ((i = t), c) : i;
        }),
        function(i) {
          return (
            (r = i), (t = i(u)), (n = i(o)), (e = t === n ? 0 : 1 / (n - t)), c
          );
        }
      );
    }
    function Be(t, n) {
      return n
        .domain(t.domain())
        .interpolator(t.interpolator())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function ze() {
      var t = G(Pe()(j));
      return (
        (t.copy = function() {
          return Be(t, ze());
        }),
        y.apply(t, arguments)
      );
    }
    function Fe() {
      var t = rt(Pe()).domain([1, 10]);
      return (
        (t.copy = function() {
          return Be(t, Fe()).base(t.base());
        }),
        y.apply(t, arguments)
      );
    }
    function qe() {
      var t = at(Pe());
      return (
        (t.copy = function() {
          return Be(t, qe()).constant(t.constant());
        }),
        y.apply(t, arguments)
      );
    }
    function He() {
      var t = ht(Pe());
      return (
        (t.copy = function() {
          return Be(t, He()).exponent(t.exponent());
        }),
        y.apply(t, arguments)
      );
    }
    function $e() {
      return He.apply(null, arguments).exponent(0.5);
    }
    function We() {
      var t = [],
        n = j;
      function e(e) {
        if (!isNaN((e = +e))) return n((a(t, e) - 1) / (t.length - 1));
      }
      return (
        (e.domain = function(n) {
          if (!arguments.length) return t.slice();
          t = [];
          for (var i, u = 0, o = n.length; u < o; ++u)
            null == (i = n[u]) || isNaN((i = +i)) || t.push(i);
          return t.sort(r), e;
        }),
        (e.interpolator = function(t) {
          return arguments.length ? ((n = t), e) : n;
        }),
        (e.copy = function() {
          return We(n).domain(t);
        }),
        y.apply(e, arguments)
      );
    }
    function Ge() {
      var t,
        n,
        e,
        r,
        i,
        u,
        o,
        a = 0,
        f = 0.5,
        c = 1,
        s = j,
        l = !1;
      function h(t) {
        return isNaN((t = +t))
          ? o
          : ((t = 0.5 + ((t = +u(t)) - n) * (t < n ? r : i)),
            s(l ? Math.max(0, Math.min(1, t)) : t));
      }
      return (
        (h.domain = function(o) {
          return arguments.length
            ? ((t = u((a = +o[0]))),
              (n = u((f = +o[1]))),
              (e = u((c = +o[2]))),
              (r = t === n ? 0 : 0.5 / (n - t)),
              (i = n === e ? 0 : 0.5 / (e - n)),
              h)
            : [a, f, c];
        }),
        (h.clamp = function(t) {
          return arguments.length ? ((l = !!t), h) : l;
        }),
        (h.interpolator = function(t) {
          return arguments.length ? ((s = t), h) : s;
        }),
        (h.unknown = function(t) {
          return arguments.length ? ((o = t), h) : o;
        }),
        function(o) {
          return (
            (u = o),
            (t = o(a)),
            (n = o(f)),
            (e = o(c)),
            (r = t === n ? 0 : 0.5 / (n - t)),
            (i = n === e ? 0 : 0.5 / (e - n)),
            h
          );
        }
      );
    }
    function Ze() {
      var t = G(Ge()(j));
      return (
        (t.copy = function() {
          return Be(t, Ze());
        }),
        y.apply(t, arguments)
      );
    }
    function Ve() {
      var t = rt(Ge()).domain([0.1, 1, 10]);
      return (
        (t.copy = function() {
          return Be(t, Ve()).base(t.base());
        }),
        y.apply(t, arguments)
      );
    }
    function Xe() {
      var t = at(Ge());
      return (
        (t.copy = function() {
          return Be(t, Xe()).constant(t.constant());
        }),
        y.apply(t, arguments)
      );
    }
    function Ke() {
      var t = ht(Ge());
      return (
        (t.copy = function() {
          return Be(t, Ke()).exponent(t.exponent());
        }),
        y.apply(t, arguments)
      );
    }
    function Qe() {
      return Ke.apply(null, arguments).exponent(0.5);
    }
    e.d(n, 'scaleBand', function() {
      return U;
    }),
      e.d(n, 'scalePoint', function() {
        return S;
      }),
      e.d(n, 'scaleIdentity', function() {
        return V;
      }),
      e.d(n, 'scaleLinear', function() {
        return Z;
      }),
      e.d(n, 'scaleLog', function() {
        return it;
      }),
      e.d(n, 'scaleSymlog', function() {
        return ft;
      }),
      e.d(n, 'scaleOrdinal', function() {
        return O;
      }),
      e.d(n, 'scaleImplicit', function() {
        return A;
      }),
      e.d(n, 'scalePow', function() {
        return dt;
      }),
      e.d(n, 'scaleSqrt', function() {
        return pt;
      }),
      e.d(n, 'scaleQuantile', function() {
        return _t;
      }),
      e.d(n, 'scaleQuantize', function() {
        return vt;
      }),
      e.d(n, 'scaleThreshold', function() {
        return bt;
      }),
      e.d(n, 'scaleTime', function() {
        return je;
      }),
      e.d(n, 'scaleUtc', function() {
        return Le;
      }),
      e.d(n, 'scaleSequential', function() {
        return ze;
      }),
      e.d(n, 'scaleSequentialLog', function() {
        return Fe;
      }),
      e.d(n, 'scaleSequentialPow', function() {
        return He;
      }),
      e.d(n, 'scaleSequentialSqrt', function() {
        return $e;
      }),
      e.d(n, 'scaleSequentialSymlog', function() {
        return qe;
      }),
      e.d(n, 'scaleSequentialQuantile', function() {
        return We;
      }),
      e.d(n, 'scaleDiverging', function() {
        return Ze;
      }),
      e.d(n, 'scaleDivergingLog', function() {
        return Ve;
      }),
      e.d(n, 'scaleDivergingPow', function() {
        return Ke;
      }),
      e.d(n, 'scaleDivergingSqrt', function() {
        return Qe;
      }),
      e.d(n, 'scaleDivergingSymlog', function() {
        return Xe;
      }),
      e.d(n, 'tickFormat', function() {
        return W;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = e(1),
      i = {value: function() {}};
    function u() {
      for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
        if (!(t = arguments[n] + '') || t in r)
          throw new Error('illegal type: ' + t);
        r[t] = [];
      }
      return new o(r);
    }
    function o(t) {
      this._ = t;
    }
    function a(t, n) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function(t) {
          var e = '',
            r = t.indexOf('.');
          if (
            (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
            t && !n.hasOwnProperty(t))
          )
            throw new Error('unknown type: ' + t);
          return {type: t, name: e};
        });
    }
    function f(t, n) {
      for (var e, r = 0, i = t.length; r < i; ++r)
        if ((e = t[r]).name === n) return e.value;
    }
    function c(t, n, e) {
      for (var r = 0, u = t.length; r < u; ++r)
        if (t[r].name === n) {
          (t[r] = i), (t = t.slice(0, r).concat(t.slice(r + 1)));
          break;
        }
      return null != e && t.push({name: n, value: e}), t;
    }
    o.prototype = u.prototype = {
      constructor: o,
      on: function(t, n) {
        var e,
          r = this._,
          i = a(t + '', r),
          u = -1,
          o = i.length;
        if (!(arguments.length < 2)) {
          if (null != n && 'function' != typeof n)
            throw new Error('invalid callback: ' + n);
          for (; ++u < o; )
            if ((e = (t = i[u]).type)) r[e] = c(r[e], t.name, n);
            else if (null == n) for (e in r) r[e] = c(r[e], t.name, null);
          return this;
        }
        for (; ++u < o; )
          if ((e = (t = i[u]).type) && (e = f(r[e], t.name))) return e;
      },
      copy: function() {
        var t = {},
          n = this._;
        for (var e in n) t[e] = n[e].slice();
        return new o(t);
      },
      call: function(t, n) {
        if ((e = arguments.length - 2) > 0)
          for (var e, r, i = new Array(e), u = 0; u < e; ++u)
            i[u] = arguments[u + 2];
        if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
        for (u = 0, e = (r = this._[t]).length; u < e; ++u)
          r[u].value.apply(n, i);
      },
      apply: function(t, n, e) {
        if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
        for (var r = this._[t], i = 0, u = r.length; i < u; ++i)
          r[i].value.apply(n, e);
      },
    };
    var s,
      l,
      h = u,
      d = 0,
      p = 0,
      _ = 0,
      v = 1e3,
      b = 0,
      g = 0,
      y = 0,
      m =
        'object' == typeof performance && performance.now ? performance : Date,
      x =
        'object' == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function(t) {
              setTimeout(t, 17);
            };
    function w() {
      return g || (x(C), (g = m.now() + y));
    }
    function C() {
      g = 0;
    }
    function M() {
      this._call = this._time = this._next = null;
    }
    function R(t, n, e) {
      var r = new M();
      return r.restart(t, n, e), r;
    }
    function E() {
      (g = (b = m.now()) + y), (d = p = 0);
      try {
        !(function() {
          w(), ++d;
          for (var t, n = s; n; )
            (t = g - n._time) >= 0 && n._call.call(null, t), (n = n._next);
          --d;
        })();
      } finally {
        (d = 0),
          (function() {
            var t,
              n,
              e = s,
              r = 1 / 0;
            for (; e; )
              e._call
                ? (r > e._time && (r = e._time), (t = e), (e = e._next))
                : ((n = e._next),
                  (e._next = null),
                  (e = t ? (t._next = n) : (s = n)));
            (l = t), N(r);
          })(),
          (g = 0);
      }
    }
    function T() {
      var t = m.now(),
        n = t - b;
      n > v && ((y -= n), (b = t));
    }
    function N(t) {
      d ||
        (p && (p = clearTimeout(p)),
        t - g > 24
          ? (t < 1 / 0 && (p = setTimeout(E, t - m.now() - y)),
            _ && (_ = clearInterval(_)))
          : (_ || ((b = m.now()), (_ = setInterval(T, v))), (d = 1), x(E)));
    }
    M.prototype = R.prototype = {
      constructor: M,
      restart: function(t, n, e) {
        if ('function' != typeof t)
          throw new TypeError('callback is not a function');
        (e = (null == e ? w() : +e) + (null == n ? 0 : +n)),
          this._next ||
            l === this ||
            (l ? (l._next = this) : (s = this), (l = this)),
          (this._call = t),
          (this._time = e),
          N();
      },
      stop: function() {
        this._call && ((this._call = null), (this._time = 1 / 0), N());
      },
    };
    var A = function(t, n, e) {
        var r = new M();
        return (
          (n = null == n ? 0 : +n),
          r.restart(
            function(e) {
              r.stop(), t(e + n);
            },
            n,
            e
          ),
          r
        );
      },
      O = h('start', 'end', 'cancel', 'interrupt'),
      U = [],
      S = 0,
      k = 1,
      Y = 2,
      D = 3,
      I = 4,
      j = 5,
      L = 6,
      P = function(t, n, e, r, i, u) {
        var o = t.__transition;
        if (o) {
          if (e in o) return;
        } else t.__transition = {};
        !(function(t, n, e) {
          var r,
            i = t.__transition;
          function u(f) {
            var c, s, l, h;
            if (e.state !== k) return a();
            for (c in i)
              if ((h = i[c]).name === e.name) {
                if (h.state === D) return A(u);
                h.state === I
                  ? ((h.state = L),
                    h.timer.stop(),
                    h.on.call('interrupt', t, t.__data__, h.index, h.group),
                    delete i[c])
                  : +c < n &&
                    ((h.state = L),
                    h.timer.stop(),
                    h.on.call('cancel', t, t.__data__, h.index, h.group),
                    delete i[c]);
              }
            if (
              (A(function() {
                e.state === D &&
                  ((e.state = I), e.timer.restart(o, e.delay, e.time), o(f));
              }),
              (e.state = Y),
              e.on.call('start', t, t.__data__, e.index, e.group),
              e.state === Y)
            ) {
              for (
                e.state = D, r = new Array((l = e.tween.length)), c = 0, s = -1;
                c < l;
                ++c
              )
                (h = e.tween[c].value.call(t, t.__data__, e.index, e.group)) &&
                  (r[++s] = h);
              r.length = s + 1;
            }
          }
          function o(n) {
            for (
              var i =
                  n < e.duration
                    ? e.ease.call(null, n / e.duration)
                    : (e.timer.restart(a), (e.state = j), 1),
                u = -1,
                o = r.length;
              ++u < o;

            )
              r[u].call(t, i);
            e.state === j &&
              (e.on.call('end', t, t.__data__, e.index, e.group), a());
          }
          function a() {
            for (var r in ((e.state = L), e.timer.stop(), delete i[n], i))
              return;
            delete t.__transition;
          }
          (i[n] = e),
            (e.timer = R(
              function(t) {
                (e.state = k),
                  e.timer.restart(u, e.delay, e.time),
                  e.delay <= t && u(t - e.delay);
              },
              0,
              e.time
            ));
        })(t, e, {
          name: n,
          index: r,
          group: i,
          on: O,
          tween: U,
          time: u.time,
          delay: u.delay,
          duration: u.duration,
          ease: u.ease,
          timer: null,
          state: S,
        });
      };
    function B(t, n) {
      var e = F(t, n);
      if (e.state > S) throw new Error('too late; already scheduled');
      return e;
    }
    function z(t, n) {
      var e = F(t, n);
      if (e.state > D) throw new Error('too late; already running');
      return e;
    }
    function F(t, n) {
      var e = t.__transition;
      if (!e || !(e = e[n])) throw new Error('transition not found');
      return e;
    }
    var q = function(t, n) {
        var e,
          r,
          i,
          u = t.__transition,
          o = !0;
        if (u) {
          for (i in ((n = null == n ? null : n + ''), u))
            (e = u[i]).name === n
              ? ((r = e.state > Y && e.state < j),
                (e.state = L),
                e.timer.stop(),
                e.on.call(
                  r ? 'interrupt' : 'cancel',
                  t,
                  t.__data__,
                  e.index,
                  e.group
                ),
                delete u[i])
              : (o = !1);
          o && delete t.__transition;
        }
      },
      H = e(2);
    function $(t, n) {
      var e, r;
      return function() {
        var i = z(this, t),
          u = i.tween;
        if (u !== e)
          for (var o = 0, a = (r = e = u).length; o < a; ++o)
            if (r[o].name === n) {
              (r = r.slice()).splice(o, 1);
              break;
            }
        i.tween = r;
      };
    }
    function W(t, n, e) {
      var r, i;
      if ('function' != typeof e) throw new Error();
      return function() {
        var u = z(this, t),
          o = u.tween;
        if (o !== r) {
          i = (r = o).slice();
          for (var a = {name: n, value: e}, f = 0, c = i.length; f < c; ++f)
            if (i[f].name === n) {
              i[f] = a;
              break;
            }
          f === c && i.push(a);
        }
        u.tween = i;
      };
    }
    function G(t, n, e) {
      var r = t._id;
      return (
        t.each(function() {
          var t = z(this, r);
          (t.value || (t.value = {}))[n] = e.apply(this, arguments);
        }),
        function(t) {
          return F(t, r).value[n];
        }
      );
    }
    var Z = e(0),
      V = function(t, n) {
        var e;
        return ('number' == typeof n
          ? H.interpolateNumber
          : n instanceof Z.a
          ? H.interpolateRgb
          : (e = Object(Z.a)(n))
          ? ((n = e), H.interpolateRgb)
          : H.interpolateString)(t, n);
      };
    function X(t, n) {
      var e, r;
      function i() {
        var i = n.apply(this, arguments);
        return (
          i !== r &&
            (e =
              (r = i) &&
              (function(t, n) {
                return function(e) {
                  this.setAttributeNS(t.space, t.local, n(e));
                };
              })(t, i)),
          e
        );
      }
      return (i._value = n), i;
    }
    function K(t, n) {
      var e, r;
      function i() {
        var i = n.apply(this, arguments);
        return (
          i !== r &&
            (e =
              (r = i) &&
              (function(t, n) {
                return function(e) {
                  this.setAttribute(t, n(e));
                };
              })(t, i)),
          e
        );
      }
      return (i._value = n), i;
    }
    function Q(t, n) {
      return function() {
        B(this, t).delay = +n.apply(this, arguments);
      };
    }
    function J(t, n) {
      return (
        (n = +n),
        function() {
          B(this, t).delay = n;
        }
      );
    }
    function tt(t, n) {
      return function() {
        z(this, t).duration = +n.apply(this, arguments);
      };
    }
    function nt(t, n) {
      return (
        (n = +n),
        function() {
          z(this, t).duration = n;
        }
      );
    }
    function et(t, n) {
      if ('function' != typeof n) throw new Error();
      return function() {
        z(this, t).ease = n;
      };
    }
    function rt(t, n, e) {
      var r,
        i,
        u = (function(t) {
          return (t + '')
            .trim()
            .split(/^|\s+/)
            .every(function(t) {
              var n = t.indexOf('.');
              return n >= 0 && (t = t.slice(0, n)), !t || 'start' === t;
            });
        })(n)
          ? B
          : z;
      return function() {
        var o = u(this, t),
          a = o.on;
        a !== r && (i = (r = a).copy()).on(n, e), (o.on = i);
      };
    }
    var it = r.selection.prototype.constructor;
    function ut(t) {
      return function() {
        this.style.removeProperty(t);
      };
    }
    function ot(t, n, e) {
      var r, i;
      function u() {
        var u = n.apply(this, arguments);
        return (
          u !== i &&
            (r =
              (i = u) &&
              (function(t, n, e) {
                return function(r) {
                  this.style.setProperty(t, n(r), e);
                };
              })(t, u, e)),
          r
        );
      }
      return (u._value = n), u;
    }
    var at = 0;
    function ft(t, n, e, r) {
      (this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
    }
    function ct(t) {
      return Object(r.selection)().transition(t);
    }
    function st() {
      return ++at;
    }
    var lt = r.selection.prototype;
    ft.prototype = ct.prototype = {
      constructor: ft,
      select: function(t) {
        var n = this._name,
          e = this._id;
        'function' != typeof t && (t = Object(r.selector)(t));
        for (
          var i = this._groups, u = i.length, o = new Array(u), a = 0;
          a < u;
          ++a
        )
          for (
            var f, c, s = i[a], l = s.length, h = (o[a] = new Array(l)), d = 0;
            d < l;
            ++d
          )
            (f = s[d]) &&
              (c = t.call(f, f.__data__, d, s)) &&
              ('__data__' in f && (c.__data__ = f.__data__),
              (h[d] = c),
              P(h[d], n, e, d, h, F(f, e)));
        return new ft(o, this._parents, n, e);
      },
      selectAll: function(t) {
        var n = this._name,
          e = this._id;
        'function' != typeof t && (t = Object(r.selectorAll)(t));
        for (
          var i = this._groups, u = i.length, o = [], a = [], f = 0;
          f < u;
          ++f
        )
          for (var c, s = i[f], l = s.length, h = 0; h < l; ++h)
            if ((c = s[h])) {
              for (
                var d,
                  p = t.call(c, c.__data__, h, s),
                  _ = F(c, e),
                  v = 0,
                  b = p.length;
                v < b;
                ++v
              )
                (d = p[v]) && P(d, n, e, v, p, _);
              o.push(p), a.push(c);
            }
        return new ft(o, a, n, e);
      },
      filter: function(t) {
        'function' != typeof t && (t = Object(r.matcher)(t));
        for (
          var n = this._groups, e = n.length, i = new Array(e), u = 0;
          u < e;
          ++u
        )
          for (
            var o, a = n[u], f = a.length, c = (i[u] = []), s = 0;
            s < f;
            ++s
          )
            (o = a[s]) && t.call(o, o.__data__, s, a) && c.push(o);
        return new ft(i, this._parents, this._name, this._id);
      },
      merge: function(t) {
        if (t._id !== this._id) throw new Error();
        for (
          var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            u = Math.min(r, i),
            o = new Array(r),
            a = 0;
          a < u;
          ++a
        )
          for (
            var f,
              c = n[a],
              s = e[a],
              l = c.length,
              h = (o[a] = new Array(l)),
              d = 0;
            d < l;
            ++d
          )
            (f = c[d] || s[d]) && (h[d] = f);
        for (; a < r; ++a) o[a] = n[a];
        return new ft(o, this._parents, this._name, this._id);
      },
      selection: function() {
        return new it(this._groups, this._parents);
      },
      transition: function() {
        for (
          var t = this._name,
            n = this._id,
            e = st(),
            r = this._groups,
            i = r.length,
            u = 0;
          u < i;
          ++u
        )
          for (var o, a = r[u], f = a.length, c = 0; c < f; ++c)
            if ((o = a[c])) {
              var s = F(o, n);
              P(o, t, e, c, a, {
                time: s.time + s.delay + s.duration,
                delay: 0,
                duration: s.duration,
                ease: s.ease,
              });
            }
        return new ft(r, this._parents, t, e);
      },
      call: lt.call,
      nodes: lt.nodes,
      node: lt.node,
      size: lt.size,
      empty: lt.empty,
      each: lt.each,
      on: function(t, n) {
        var e = this._id;
        return arguments.length < 2
          ? F(this.node(), e).on.on(t)
          : this.each(rt(e, t, n));
      },
      attr: function(t, n) {
        var e = Object(r.namespace)(t),
          i = 'transform' === e ? H.interpolateTransformSvg : V;
        return this.attrTween(
          t,
          'function' == typeof n
            ? (e.local
                ? function(t, n, e) {
                    var r, i, u;
                    return function() {
                      var o,
                        a,
                        f = e(this);
                      if (null != f)
                        return (o = this.getAttributeNS(t.space, t.local)) ===
                          (a = f + '')
                          ? null
                          : o === r && a === i
                          ? u
                          : ((i = a), (u = n((r = o), f)));
                      this.removeAttributeNS(t.space, t.local);
                    };
                  }
                : function(t, n, e) {
                    var r, i, u;
                    return function() {
                      var o,
                        a,
                        f = e(this);
                      if (null != f)
                        return (o = this.getAttribute(t)) === (a = f + '')
                          ? null
                          : o === r && a === i
                          ? u
                          : ((i = a), (u = n((r = o), f)));
                      this.removeAttribute(t);
                    };
                  })(e, i, G(this, 'attr.' + t, n))
            : null == n
            ? (e.local
                ? function(t) {
                    return function() {
                      this.removeAttributeNS(t.space, t.local);
                    };
                  }
                : function(t) {
                    return function() {
                      this.removeAttribute(t);
                    };
                  })(e)
            : (e.local
                ? function(t, n, e) {
                    var r,
                      i,
                      u = e + '';
                    return function() {
                      var o = this.getAttributeNS(t.space, t.local);
                      return o === u ? null : o === r ? i : (i = n((r = o), e));
                    };
                  }
                : function(t, n, e) {
                    var r,
                      i,
                      u = e + '';
                    return function() {
                      var o = this.getAttribute(t);
                      return o === u ? null : o === r ? i : (i = n((r = o), e));
                    };
                  })(e, i, n)
        );
      },
      attrTween: function(t, n) {
        var e = 'attr.' + t;
        if (arguments.length < 2) return (e = this.tween(e)) && e._value;
        if (null == n) return this.tween(e, null);
        if ('function' != typeof n) throw new Error();
        var i = Object(r.namespace)(t);
        return this.tween(e, (i.local ? X : K)(i, n));
      },
      style: function(t, n, e) {
        var i = 'transform' == (t += '') ? H.interpolateTransformCss : V;
        return null == n
          ? this.styleTween(
              t,
              (function(t, n) {
                var e, i, u;
                return function() {
                  var o = Object(r.style)(this, t),
                    a = (this.style.removeProperty(t),
                    Object(r.style)(this, t));
                  return o === a
                    ? null
                    : o === e && a === i
                    ? u
                    : (u = n((e = o), (i = a)));
                };
              })(t, i)
            ).on('end.style.' + t, ut(t))
          : 'function' == typeof n
          ? this.styleTween(
              t,
              (function(t, n, e) {
                var i, u, o;
                return function() {
                  var a = Object(r.style)(this, t),
                    f = e(this),
                    c = f + '';
                  return (
                    null == f &&
                      (this.style.removeProperty(t),
                      (c = f = Object(r.style)(this, t))),
                    a === c
                      ? null
                      : a === i && c === u
                      ? o
                      : ((u = c), (o = n((i = a), f)))
                  );
                };
              })(t, i, G(this, 'style.' + t, n))
            ).each(
              (function(t, n) {
                var e,
                  r,
                  i,
                  u,
                  o = 'style.' + n,
                  a = 'end.' + o;
                return function() {
                  var f = z(this, t),
                    c = f.on,
                    s = null == f.value[o] ? u || (u = ut(n)) : void 0;
                  (c === e && i === s) || (r = (e = c).copy()).on(a, (i = s)),
                    (f.on = r);
                };
              })(this._id, t)
            )
          : this.styleTween(
              t,
              (function(t, n, e) {
                var i,
                  u,
                  o = e + '';
                return function() {
                  var a = Object(r.style)(this, t);
                  return a === o ? null : a === i ? u : (u = n((i = a), e));
                };
              })(t, i, n),
              e
            ).on('end.style.' + t, null);
      },
      styleTween: function(t, n, e) {
        var r = 'style.' + (t += '');
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == n) return this.tween(r, null);
        if ('function' != typeof n) throw new Error();
        return this.tween(r, ot(t, n, null == e ? '' : e));
      },
      text: function(t) {
        return this.tween(
          'text',
          'function' == typeof t
            ? (function(t) {
                return function() {
                  var n = t(this);
                  this.textContent = null == n ? '' : n;
                };
              })(G(this, 'text', t))
            : (function(t) {
                return function() {
                  this.textContent = t;
                };
              })(null == t ? '' : t + '')
        );
      },
      remove: function() {
        return this.on(
          'end.remove',
          ((t = this._id),
          function() {
            var n = this.parentNode;
            for (var e in this.__transition) if (+e !== t) return;
            n && n.removeChild(this);
          })
        );
        var t;
      },
      tween: function(t, n) {
        var e = this._id;
        if (((t += ''), arguments.length < 2)) {
          for (
            var r, i = F(this.node(), e).tween, u = 0, o = i.length;
            u < o;
            ++u
          )
            if ((r = i[u]).name === t) return r.value;
          return null;
        }
        return this.each((null == n ? $ : W)(e, t, n));
      },
      delay: function(t) {
        var n = this._id;
        return arguments.length
          ? this.each(('function' == typeof t ? Q : J)(n, t))
          : F(this.node(), n).delay;
      },
      duration: function(t) {
        var n = this._id;
        return arguments.length
          ? this.each(('function' == typeof t ? tt : nt)(n, t))
          : F(this.node(), n).duration;
      },
      ease: function(t) {
        var n = this._id;
        return arguments.length ? this.each(et(n, t)) : F(this.node(), n).ease;
      },
      end: function() {
        var t,
          n,
          e = this,
          r = e._id,
          i = e.size();
        return new Promise(function(u, o) {
          var a = {value: o},
            f = {
              value: function() {
                0 == --i && u();
              },
            };
          e.each(function() {
            var e = z(this, r),
              i = e.on;
            i !== t &&
              ((n = (t = i).copy())._.cancel.push(a),
              n._.interrupt.push(a),
              n._.end.push(f)),
              (e.on = n);
          });
        });
      },
    };
    (function t(n) {
      function e(t) {
        return Math.pow(t, n);
      }
      return (n = +n), (e.exponent = t), e;
    })(3),
      (function t(n) {
        function e(t) {
          return 1 - Math.pow(1 - t, n);
        }
        return (n = +n), (e.exponent = t), e;
      })(3),
      (function t(n) {
        function e(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
        }
        return (n = +n), (e.exponent = t), e;
      })(3),
      Math.PI;
    (function t(n) {
      function e(t) {
        return t * t * ((n + 1) * t - n);
      }
      return (n = +n), (e.overshoot = t), e;
    })(1.70158),
      (function t(n) {
        function e(t) {
          return --t * t * ((n + 1) * t + n) + 1;
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158),
      (function t(n) {
        function e(t) {
          return (
            ((t *= 2) < 1
              ? t * t * ((n + 1) * t - n)
              : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
          );
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158);
    var ht = 2 * Math.PI,
      dt = ((function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ht);
        function i(t) {
          return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e);
        }
        return (
          (i.amplitude = function(n) {
            return t(n, e * ht);
          }),
          (i.period = function(e) {
            return t(n, e);
          }),
          i
        );
      })(1, 0.3),
      (function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ht);
        function i(t) {
          return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e);
        }
        return (
          (i.amplitude = function(n) {
            return t(n, e * ht);
          }),
          (i.period = function(e) {
            return t(n, e);
          }),
          i
        );
      })(1, 0.3),
      (function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ht);
        function i(t) {
          return (
            ((t = 2 * t - 1) < 0
              ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e)
              : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
          );
        }
        return (
          (i.amplitude = function(n) {
            return t(n, e * ht);
          }),
          (i.period = function(e) {
            return t(n, e);
          }),
          i
        );
      })(1, 0.3),
      {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        },
      });
    function pt(t, n) {
      for (var e; !(e = t.__transition) || !(e = e[n]); )
        if (!(t = t.parentNode)) return (dt.time = w()), dt;
      return e;
    }
    (r.selection.prototype.interrupt = function(t) {
      return this.each(function() {
        q(this, t);
      });
    }),
      (r.selection.prototype.transition = function(t) {
        var n, e;
        t instanceof ft
          ? ((n = t._id), (t = t._name))
          : ((n = st()),
            ((e = dt).time = w()),
            (t = null == t ? null : t + ''));
        for (var r = this._groups, i = r.length, u = 0; u < i; ++u)
          for (var o, a = r[u], f = a.length, c = 0; c < f; ++c)
            (o = a[c]) && P(o, t, n, c, a, e || pt(o, n));
        return new ft(r, this._parents, t, n);
      });
    var _t = [null],
      vt = function(t, n) {
        var e,
          r,
          i = t.__transition;
        if (i)
          for (r in ((n = null == n ? null : n + ''), i))
            if ((e = i[r]).state > k && e.name === n)
              return new ft([[t]], _t, n, +r);
        return null;
      };
    e.d(n, 'transition', function() {
      return ct;
    }),
      e.d(n, 'active', function() {
        return vt;
      }),
      e.d(n, 'interrupt', function() {
        return q;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = function(t) {
        for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
          e[r] = '#' + t.slice(6 * r, 6 * ++r);
        return e;
      },
      i = r('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),
      u = r('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
      o = r('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
      a = r(
        'a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'
      ),
      f = r('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2'),
      c = r('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
      s = r('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999'),
      l = r('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
      h = r(
        '8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'
      ),
      d = e(2),
      p = function(t) {
        return Object(d.interpolateRgbBasis)(t[t.length - 1]);
      },
      _ = new Array(3)
        .concat(
          'd8b365f5f5f55ab4ac',
          'a6611adfc27d80cdc1018571',
          'a6611adfc27df5f5f580cdc1018571',
          '8c510ad8b365f6e8c3c7eae55ab4ac01665e',
          '8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e',
          '8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e',
          '8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e',
          '5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30',
          '5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30'
        )
        .map(r),
      v = p(_),
      b = new Array(3)
        .concat(
          'af8dc3f7f7f77fbf7b',
          '7b3294c2a5cfa6dba0008837',
          '7b3294c2a5cff7f7f7a6dba0008837',
          '762a83af8dc3e7d4e8d9f0d37fbf7b1b7837',
          '762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837',
          '762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837',
          '762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837',
          '40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b',
          '40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b'
        )
        .map(r),
      g = p(b),
      y = new Array(3)
        .concat(
          'e9a3c9f7f7f7a1d76a',
          'd01c8bf1b6dab8e1864dac26',
          'd01c8bf1b6daf7f7f7b8e1864dac26',
          'c51b7de9a3c9fde0efe6f5d0a1d76a4d9221',
          'c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221',
          'c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221',
          'c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221',
          '8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419',
          '8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419'
        )
        .map(r),
      m = p(y),
      x = new Array(3)
        .concat(
          '998ec3f7f7f7f1a340',
          '5e3c99b2abd2fdb863e66101',
          '5e3c99b2abd2f7f7f7fdb863e66101',
          '542788998ec3d8daebfee0b6f1a340b35806',
          '542788998ec3d8daebf7f7f7fee0b6f1a340b35806',
          '5427888073acb2abd2d8daebfee0b6fdb863e08214b35806',
          '5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806',
          '2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08',
          '2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08'
        )
        .map(r),
      w = p(x),
      C = new Array(3)
        .concat(
          'ef8a62f7f7f767a9cf',
          'ca0020f4a58292c5de0571b0',
          'ca0020f4a582f7f7f792c5de0571b0',
          'b2182bef8a62fddbc7d1e5f067a9cf2166ac',
          'b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac',
          'b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac',
          'b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac',
          '67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061',
          '67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061'
        )
        .map(r),
      M = p(C),
      R = new Array(3)
        .concat(
          'ef8a62ffffff999999',
          'ca0020f4a582bababa404040',
          'ca0020f4a582ffffffbababa404040',
          'b2182bef8a62fddbc7e0e0e09999994d4d4d',
          'b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d',
          'b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d',
          'b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d',
          '67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a',
          '67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a'
        )
        .map(r),
      E = p(R),
      T = new Array(3)
        .concat(
          'fc8d59ffffbf91bfdb',
          'd7191cfdae61abd9e92c7bb6',
          'd7191cfdae61ffffbfabd9e92c7bb6',
          'd73027fc8d59fee090e0f3f891bfdb4575b4',
          'd73027fc8d59fee090ffffbfe0f3f891bfdb4575b4',
          'd73027f46d43fdae61fee090e0f3f8abd9e974add14575b4',
          'd73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4',
          'a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695',
          'a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695'
        )
        .map(r),
      N = p(T),
      A = new Array(3)
        .concat(
          'fc8d59ffffbf91cf60',
          'd7191cfdae61a6d96a1a9641',
          'd7191cfdae61ffffbfa6d96a1a9641',
          'd73027fc8d59fee08bd9ef8b91cf601a9850',
          'd73027fc8d59fee08bffffbfd9ef8b91cf601a9850',
          'd73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850',
          'd73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850',
          'a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837',
          'a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837'
        )
        .map(r),
      O = p(A),
      U = new Array(3)
        .concat(
          'fc8d59ffffbf99d594',
          'd7191cfdae61abdda42b83ba',
          'd7191cfdae61ffffbfabdda42b83ba',
          'd53e4ffc8d59fee08be6f59899d5943288bd',
          'd53e4ffc8d59fee08bffffbfe6f59899d5943288bd',
          'd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd',
          'd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd',
          '9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2',
          '9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2'
        )
        .map(r),
      S = p(U),
      k = new Array(3)
        .concat(
          'e5f5f999d8c92ca25f',
          'edf8fbb2e2e266c2a4238b45',
          'edf8fbb2e2e266c2a42ca25f006d2c',
          'edf8fbccece699d8c966c2a42ca25f006d2c',
          'edf8fbccece699d8c966c2a441ae76238b45005824',
          'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
          'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
        )
        .map(r),
      Y = p(k),
      D = new Array(3)
        .concat(
          'e0ecf49ebcda8856a7',
          'edf8fbb3cde38c96c688419d',
          'edf8fbb3cde38c96c68856a7810f7c',
          'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
          'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
          'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
          'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
        )
        .map(r),
      I = p(D),
      j = new Array(3)
        .concat(
          'e0f3dba8ddb543a2ca',
          'f0f9e8bae4bc7bccc42b8cbe',
          'f0f9e8bae4bc7bccc443a2ca0868ac',
          'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
          'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
          'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
          'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
        )
        .map(r),
      L = p(j),
      P = new Array(3)
        .concat(
          'fee8c8fdbb84e34a33',
          'fef0d9fdcc8afc8d59d7301f',
          'fef0d9fdcc8afc8d59e34a33b30000',
          'fef0d9fdd49efdbb84fc8d59e34a33b30000',
          'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
          'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
          'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
        )
        .map(r),
      B = p(P),
      z = new Array(3)
        .concat(
          'ece2f0a6bddb1c9099',
          'f6eff7bdc9e167a9cf02818a',
          'f6eff7bdc9e167a9cf1c9099016c59',
          'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
          'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
          'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
          'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
        )
        .map(r),
      F = p(z),
      q = new Array(3)
        .concat(
          'ece7f2a6bddb2b8cbe',
          'f1eef6bdc9e174a9cf0570b0',
          'f1eef6bdc9e174a9cf2b8cbe045a8d',
          'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
          'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
          'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
          'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
        )
        .map(r),
      H = p(q),
      $ = new Array(3)
        .concat(
          'e7e1efc994c7dd1c77',
          'f1eef6d7b5d8df65b0ce1256',
          'f1eef6d7b5d8df65b0dd1c77980043',
          'f1eef6d4b9dac994c7df65b0dd1c77980043',
          'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
          'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
          'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
        )
        .map(r),
      W = p($),
      G = new Array(3)
        .concat(
          'fde0ddfa9fb5c51b8a',
          'feebe2fbb4b9f768a1ae017e',
          'feebe2fbb4b9f768a1c51b8a7a0177',
          'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
          'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
          'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
          'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
        )
        .map(r),
      Z = p(G),
      V = new Array(3)
        .concat(
          'edf8b17fcdbb2c7fb8',
          'ffffcca1dab441b6c4225ea8',
          'ffffcca1dab441b6c42c7fb8253494',
          'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
          'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
          'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
          'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
        )
        .map(r),
      X = p(V),
      K = new Array(3)
        .concat(
          'f7fcb9addd8e31a354',
          'ffffccc2e69978c679238443',
          'ffffccc2e69978c67931a354006837',
          'ffffccd9f0a3addd8e78c67931a354006837',
          'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
          'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
          'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
        )
        .map(r),
      Q = p(K),
      J = new Array(3)
        .concat(
          'fff7bcfec44fd95f0e',
          'ffffd4fed98efe9929cc4c02',
          'ffffd4fed98efe9929d95f0e993404',
          'ffffd4fee391fec44ffe9929d95f0e993404',
          'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
          'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
          'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
        )
        .map(r),
      tt = p(J),
      nt = new Array(3)
        .concat(
          'ffeda0feb24cf03b20',
          'ffffb2fecc5cfd8d3ce31a1c',
          'ffffb2fecc5cfd8d3cf03b20bd0026',
          'ffffb2fed976feb24cfd8d3cf03b20bd0026',
          'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
          'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
          'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
        )
        .map(r),
      et = p(nt),
      rt = new Array(3)
        .concat(
          'deebf79ecae13182bd',
          'eff3ffbdd7e76baed62171b5',
          'eff3ffbdd7e76baed63182bd08519c',
          'eff3ffc6dbef9ecae16baed63182bd08519c',
          'eff3ffc6dbef9ecae16baed64292c62171b5084594',
          'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
          'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
        )
        .map(r),
      it = p(rt),
      ut = new Array(3)
        .concat(
          'e5f5e0a1d99b31a354',
          'edf8e9bae4b374c476238b45',
          'edf8e9bae4b374c47631a354006d2c',
          'edf8e9c7e9c0a1d99b74c47631a354006d2c',
          'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
          'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
          'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
        )
        .map(r),
      ot = p(ut),
      at = new Array(3)
        .concat(
          'f0f0f0bdbdbd636363',
          'f7f7f7cccccc969696525252',
          'f7f7f7cccccc969696636363252525',
          'f7f7f7d9d9d9bdbdbd969696636363252525',
          'f7f7f7d9d9d9bdbdbd969696737373525252252525',
          'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
          'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
        )
        .map(r),
      ft = p(at),
      ct = new Array(3)
        .concat(
          'efedf5bcbddc756bb1',
          'f2f0f7cbc9e29e9ac86a51a3',
          'f2f0f7cbc9e29e9ac8756bb154278f',
          'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
          'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
          'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
          'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
        )
        .map(r),
      st = p(ct),
      lt = new Array(3)
        .concat(
          'fee0d2fc9272de2d26',
          'fee5d9fcae91fb6a4acb181d',
          'fee5d9fcae91fb6a4ade2d26a50f15',
          'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
          'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
          'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
          'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
        )
        .map(r),
      ht = p(lt),
      dt = new Array(3)
        .concat(
          'fee6cefdae6be6550d',
          'feeddefdbe85fd8d3cd94701',
          'feeddefdbe85fd8d3ce6550da63603',
          'feeddefdd0a2fdae6bfd8d3ce6550da63603',
          'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
          'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
          'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
        )
        .map(r),
      pt = p(dt),
      _t = e(0),
      vt = Object(d.interpolateCubehelixLong)(
        Object(_t.b)(300, 0.5, 0),
        Object(_t.b)(-240, 0.5, 1)
      ),
      bt = Object(d.interpolateCubehelixLong)(
        Object(_t.b)(-100, 0.75, 0.35),
        Object(_t.b)(80, 1.5, 0.8)
      ),
      gt = Object(d.interpolateCubehelixLong)(
        Object(_t.b)(260, 0.75, 0.35),
        Object(_t.b)(80, 1.5, 0.8)
      ),
      yt = Object(_t.b)(),
      mt = function(t) {
        (t < 0 || t > 1) && (t -= Math.floor(t));
        var n = Math.abs(t - 0.5);
        return (
          (yt.h = 360 * t - 100),
          (yt.s = 1.5 - 1.5 * n),
          (yt.l = 0.8 - 0.9 * n),
          yt + ''
        );
      },
      xt = Object(_t.f)(),
      wt = Math.PI / 3,
      Ct = (2 * Math.PI) / 3,
      Mt = function(t) {
        var n;
        return (
          (t = (0.5 - t) * Math.PI),
          (xt.r = 255 * (n = Math.sin(t)) * n),
          (xt.g = 255 * (n = Math.sin(t + wt)) * n),
          (xt.b = 255 * (n = Math.sin(t + Ct)) * n),
          xt + ''
        );
      };
    function Rt(t) {
      var n = t.length;
      return function(e) {
        return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
      };
    }
    var Et = Rt(
        r(
          '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
        )
      ),
      Tt = Rt(
        r(
          '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
        )
      ),
      Nt = Rt(
        r(
          '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
        )
      ),
      At = Rt(
        r(
          '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
        )
      );
    e.d(n, 'schemeCategory10', function() {
      return i;
    }),
      e.d(n, 'schemeAccent', function() {
        return u;
      }),
      e.d(n, 'schemeDark2', function() {
        return o;
      }),
      e.d(n, 'schemePaired', function() {
        return a;
      }),
      e.d(n, 'schemePastel1', function() {
        return f;
      }),
      e.d(n, 'schemePastel2', function() {
        return c;
      }),
      e.d(n, 'schemeSet1', function() {
        return s;
      }),
      e.d(n, 'schemeSet2', function() {
        return l;
      }),
      e.d(n, 'schemeSet3', function() {
        return h;
      }),
      e.d(n, 'interpolateBrBG', function() {
        return v;
      }),
      e.d(n, 'schemeBrBG', function() {
        return _;
      }),
      e.d(n, 'interpolatePRGn', function() {
        return g;
      }),
      e.d(n, 'schemePRGn', function() {
        return b;
      }),
      e.d(n, 'interpolatePiYG', function() {
        return m;
      }),
      e.d(n, 'schemePiYG', function() {
        return y;
      }),
      e.d(n, 'interpolatePuOr', function() {
        return w;
      }),
      e.d(n, 'schemePuOr', function() {
        return x;
      }),
      e.d(n, 'interpolateRdBu', function() {
        return M;
      }),
      e.d(n, 'schemeRdBu', function() {
        return C;
      }),
      e.d(n, 'interpolateRdGy', function() {
        return E;
      }),
      e.d(n, 'schemeRdGy', function() {
        return R;
      }),
      e.d(n, 'interpolateRdYlBu', function() {
        return N;
      }),
      e.d(n, 'schemeRdYlBu', function() {
        return T;
      }),
      e.d(n, 'interpolateRdYlGn', function() {
        return O;
      }),
      e.d(n, 'schemeRdYlGn', function() {
        return A;
      }),
      e.d(n, 'interpolateSpectral', function() {
        return S;
      }),
      e.d(n, 'schemeSpectral', function() {
        return U;
      }),
      e.d(n, 'interpolateBuGn', function() {
        return Y;
      }),
      e.d(n, 'schemeBuGn', function() {
        return k;
      }),
      e.d(n, 'interpolateBuPu', function() {
        return I;
      }),
      e.d(n, 'schemeBuPu', function() {
        return D;
      }),
      e.d(n, 'interpolateGnBu', function() {
        return L;
      }),
      e.d(n, 'schemeGnBu', function() {
        return j;
      }),
      e.d(n, 'interpolateOrRd', function() {
        return B;
      }),
      e.d(n, 'schemeOrRd', function() {
        return P;
      }),
      e.d(n, 'interpolatePuBuGn', function() {
        return F;
      }),
      e.d(n, 'schemePuBuGn', function() {
        return z;
      }),
      e.d(n, 'interpolatePuBu', function() {
        return H;
      }),
      e.d(n, 'schemePuBu', function() {
        return q;
      }),
      e.d(n, 'interpolatePuRd', function() {
        return W;
      }),
      e.d(n, 'schemePuRd', function() {
        return $;
      }),
      e.d(n, 'interpolateRdPu', function() {
        return Z;
      }),
      e.d(n, 'schemeRdPu', function() {
        return G;
      }),
      e.d(n, 'interpolateYlGnBu', function() {
        return X;
      }),
      e.d(n, 'schemeYlGnBu', function() {
        return V;
      }),
      e.d(n, 'interpolateYlGn', function() {
        return Q;
      }),
      e.d(n, 'schemeYlGn', function() {
        return K;
      }),
      e.d(n, 'interpolateYlOrBr', function() {
        return tt;
      }),
      e.d(n, 'schemeYlOrBr', function() {
        return J;
      }),
      e.d(n, 'interpolateYlOrRd', function() {
        return et;
      }),
      e.d(n, 'schemeYlOrRd', function() {
        return nt;
      }),
      e.d(n, 'interpolateBlues', function() {
        return it;
      }),
      e.d(n, 'schemeBlues', function() {
        return rt;
      }),
      e.d(n, 'interpolateGreens', function() {
        return ot;
      }),
      e.d(n, 'schemeGreens', function() {
        return ut;
      }),
      e.d(n, 'interpolateGreys', function() {
        return ft;
      }),
      e.d(n, 'schemeGreys', function() {
        return at;
      }),
      e.d(n, 'interpolatePurples', function() {
        return st;
      }),
      e.d(n, 'schemePurples', function() {
        return ct;
      }),
      e.d(n, 'interpolateReds', function() {
        return ht;
      }),
      e.d(n, 'schemeReds', function() {
        return lt;
      }),
      e.d(n, 'interpolateOranges', function() {
        return pt;
      }),
      e.d(n, 'schemeOranges', function() {
        return dt;
      }),
      e.d(n, 'interpolateCubehelixDefault', function() {
        return vt;
      }),
      e.d(n, 'interpolateRainbow', function() {
        return mt;
      }),
      e.d(n, 'interpolateWarm', function() {
        return bt;
      }),
      e.d(n, 'interpolateCool', function() {
        return gt;
      }),
      e.d(n, 'interpolateSinebow', function() {
        return Mt;
      }),
      e.d(n, 'interpolateViridis', function() {
        return Et;
      }),
      e.d(n, 'interpolateMagma', function() {
        return Tt;
      }),
      e.d(n, 'interpolateInferno', function() {
        return Nt;
      }),
      e.d(n, 'interpolatePlasma', function() {
        return At;
      });
  },
  function(t, n, e) {
    'use strict';
    function r(t, n) {
      return t.parent === n.parent ? 1 : 2;
    }
    function i(t, n) {
      return t + n.x;
    }
    function u(t, n) {
      return Math.max(t, n.y);
    }
    e.r(n);
    var o = function() {
      var t = r,
        n = 1,
        e = 1,
        o = !1;
      function a(r) {
        var a,
          f = 0;
        r.eachAfter(function(n) {
          var e = n.children;
          e
            ? ((n.x = (function(t) {
                return t.reduce(i, 0) / t.length;
              })(e)),
              (n.y = (function(t) {
                return 1 + t.reduce(u, 0);
              })(e)))
            : ((n.x = a ? (f += t(n, a)) : 0), (n.y = 0), (a = n));
        });
        var c = (function(t) {
            for (var n; (n = t.children); ) t = n[0];
            return t;
          })(r),
          s = (function(t) {
            for (var n; (n = t.children); ) t = n[n.length - 1];
            return t;
          })(r),
          l = c.x - t(c, s) / 2,
          h = s.x + t(s, c) / 2;
        return r.eachAfter(
          o
            ? function(t) {
                (t.x = (t.x - r.x) * n), (t.y = (r.y - t.y) * e);
              }
            : function(t) {
                (t.x = ((t.x - l) / (h - l)) * n),
                  (t.y = (1 - (r.y ? t.y / r.y : 1)) * e);
              }
        );
      }
      return (
        (a.separation = function(n) {
          return arguments.length ? ((t = n), a) : t;
        }),
        (a.size = function(t) {
          return arguments.length
            ? ((o = !1), (n = +t[0]), (e = +t[1]), a)
            : o
            ? null
            : [n, e];
        }),
        (a.nodeSize = function(t) {
          return arguments.length
            ? ((o = !0), (n = +t[0]), (e = +t[1]), a)
            : o
            ? [n, e]
            : null;
        }),
        a
      );
    };
    function a(t) {
      var n = 0,
        e = t.children,
        r = e && e.length;
      if (r) for (; --r >= 0; ) n += e[r].value;
      else n = 1;
      t.value = n;
    }
    function f(t, n) {
      var e,
        r,
        i,
        u,
        o,
        a = new h(t),
        f = +t.value && (a.value = t.value),
        s = [a];
      for (null == n && (n = c); (e = s.pop()); )
        if ((f && (e.value = +e.data.value), (i = n(e.data)) && (o = i.length)))
          for (e.children = new Array(o), u = o - 1; u >= 0; --u)
            s.push((r = e.children[u] = new h(i[u]))),
              (r.parent = e),
              (r.depth = e.depth + 1);
      return a.eachBefore(l);
    }
    function c(t) {
      return t.children;
    }
    function s(t) {
      t.data = t.data.data;
    }
    function l(t) {
      var n = 0;
      do {
        t.height = n;
      } while ((t = t.parent) && t.height < ++n);
    }
    function h(t) {
      (this.data = t), (this.depth = this.height = 0), (this.parent = null);
    }
    h.prototype = f.prototype = {
      constructor: h,
      count: function() {
        return this.eachAfter(a);
      },
      each: function(t) {
        var n,
          e,
          r,
          i,
          u = this,
          o = [u];
        do {
          for (n = o.reverse(), o = []; (u = n.pop()); )
            if ((t(u), (e = u.children)))
              for (r = 0, i = e.length; r < i; ++r) o.push(e[r]);
        } while (o.length);
        return this;
      },
      eachAfter: function(t) {
        for (var n, e, r, i = this, u = [i], o = []; (i = u.pop()); )
          if ((o.push(i), (n = i.children)))
            for (e = 0, r = n.length; e < r; ++e) u.push(n[e]);
        for (; (i = o.pop()); ) t(i);
        return this;
      },
      eachBefore: function(t) {
        for (var n, e, r = this, i = [r]; (r = i.pop()); )
          if ((t(r), (n = r.children)))
            for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
        return this;
      },
      sum: function(t) {
        return this.eachAfter(function(n) {
          for (
            var e = +t(n.data) || 0, r = n.children, i = r && r.length;
            --i >= 0;

          )
            e += r[i].value;
          n.value = e;
        });
      },
      sort: function(t) {
        return this.eachBefore(function(n) {
          n.children && n.children.sort(t);
        });
      },
      path: function(t) {
        for (
          var n = this,
            e = (function(t, n) {
              if (t === n) return t;
              var e = t.ancestors(),
                r = n.ancestors(),
                i = null;
              for (t = e.pop(), n = r.pop(); t === n; )
                (i = t), (t = e.pop()), (n = r.pop());
              return i;
            })(n, t),
            r = [n];
          n !== e;

        )
          (n = n.parent), r.push(n);
        for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent);
        return r;
      },
      ancestors: function() {
        for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
        return n;
      },
      descendants: function() {
        var t = [];
        return (
          this.each(function(n) {
            t.push(n);
          }),
          t
        );
      },
      leaves: function() {
        var t = [];
        return (
          this.eachBefore(function(n) {
            n.children || t.push(n);
          }),
          t
        );
      },
      links: function() {
        var t = this,
          n = [];
        return (
          t.each(function(e) {
            e !== t && n.push({source: e.parent, target: e});
          }),
          n
        );
      },
      copy: function() {
        return f(this).eachBefore(s);
      },
    };
    var d = Array.prototype.slice;
    var p = function(t) {
      for (
        var n,
          e,
          r = 0,
          i = (t = (function(t) {
            for (var n, e, r = t.length; r; )
              (e = (Math.random() * r--) | 0),
                (n = t[r]),
                (t[r] = t[e]),
                (t[e] = n);
            return t;
          })(d.call(t))).length,
          u = [];
        r < i;

      )
        (n = t[r]), e && b(e, n) ? ++r : ((e = y((u = _(u, n)))), (r = 0));
      return e;
    };
    function _(t, n) {
      var e, r;
      if (g(n, t)) return [n];
      for (e = 0; e < t.length; ++e)
        if (v(n, t[e]) && g(m(t[e], n), t)) return [t[e], n];
      for (e = 0; e < t.length - 1; ++e)
        for (r = e + 1; r < t.length; ++r)
          if (
            v(m(t[e], t[r]), n) &&
            v(m(t[e], n), t[r]) &&
            v(m(t[r], n), t[e]) &&
            g(x(t[e], t[r], n), t)
          )
            return [t[e], t[r], n];
      throw new Error();
    }
    function v(t, n) {
      var e = t.r - n.r,
        r = n.x - t.x,
        i = n.y - t.y;
      return e < 0 || e * e < r * r + i * i;
    }
    function b(t, n) {
      var e = t.r - n.r + 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
      return e > 0 && e * e > r * r + i * i;
    }
    function g(t, n) {
      for (var e = 0; e < n.length; ++e) if (!b(t, n[e])) return !1;
      return !0;
    }
    function y(t) {
      switch (t.length) {
        case 1:
          return {x: (n = t[0]).x, y: n.y, r: n.r};
        case 2:
          return m(t[0], t[1]);
        case 3:
          return x(t[0], t[1], t[2]);
      }
      var n;
    }
    function m(t, n) {
      var e = t.x,
        r = t.y,
        i = t.r,
        u = n.x,
        o = n.y,
        a = n.r,
        f = u - e,
        c = o - r,
        s = a - i,
        l = Math.sqrt(f * f + c * c);
      return {
        x: (e + u + (f / l) * s) / 2,
        y: (r + o + (c / l) * s) / 2,
        r: (l + i + a) / 2,
      };
    }
    function x(t, n, e) {
      var r = t.x,
        i = t.y,
        u = t.r,
        o = n.x,
        a = n.y,
        f = n.r,
        c = e.x,
        s = e.y,
        l = e.r,
        h = r - o,
        d = r - c,
        p = i - a,
        _ = i - s,
        v = f - u,
        b = l - u,
        g = r * r + i * i - u * u,
        y = g - o * o - a * a + f * f,
        m = g - c * c - s * s + l * l,
        x = d * p - h * _,
        w = (p * m - _ * y) / (2 * x) - r,
        C = (_ * v - p * b) / x,
        M = (d * y - h * m) / (2 * x) - i,
        R = (h * b - d * v) / x,
        E = C * C + R * R - 1,
        T = 2 * (u + w * C + M * R),
        N = w * w + M * M - u * u,
        A = -(E ? (T + Math.sqrt(T * T - 4 * E * N)) / (2 * E) : N / T);
      return {x: r + w + C * A, y: i + M + R * A, r: A};
    }
    function w(t, n, e) {
      var r,
        i,
        u,
        o,
        a = t.x - n.x,
        f = t.y - n.y,
        c = a * a + f * f;
      c
        ? ((i = n.r + e.r),
          (i *= i),
          (o = t.r + e.r),
          i > (o *= o)
            ? ((r = (c + o - i) / (2 * c)),
              (u = Math.sqrt(Math.max(0, o / c - r * r))),
              (e.x = t.x - r * a - u * f),
              (e.y = t.y - r * f + u * a))
            : ((r = (c + i - o) / (2 * c)),
              (u = Math.sqrt(Math.max(0, i / c - r * r))),
              (e.x = n.x + r * a - u * f),
              (e.y = n.y + r * f + u * a)))
        : ((e.x = n.x + e.r), (e.y = n.y));
    }
    function C(t, n) {
      var e = t.r + n.r - 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
      return e > 0 && e * e > r * r + i * i;
    }
    function M(t) {
      var n = t._,
        e = t.next._,
        r = n.r + e.r,
        i = (n.x * e.r + e.x * n.r) / r,
        u = (n.y * e.r + e.y * n.r) / r;
      return i * i + u * u;
    }
    function R(t) {
      (this._ = t), (this.next = null), (this.previous = null);
    }
    function E(t) {
      if (!(i = t.length)) return 0;
      var n, e, r, i, u, o, a, f, c, s, l;
      if ((((n = t[0]).x = 0), (n.y = 0), !(i > 1))) return n.r;
      if (((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(i > 2)))
        return n.r + e.r;
      w(e, n, (r = t[2])),
        (n = new R(n)),
        (e = new R(e)),
        (r = new R(r)),
        (n.next = r.previous = e),
        (e.next = n.previous = r),
        (r.next = e.previous = n);
      t: for (a = 3; a < i; ++a) {
        w(n._, e._, (r = t[a])),
          (r = new R(r)),
          (f = e.next),
          (c = n.previous),
          (s = e._.r),
          (l = n._.r);
        do {
          if (s <= l) {
            if (C(f._, r._)) {
              (e = f), (n.next = e), (e.previous = n), --a;
              continue t;
            }
            (s += f._.r), (f = f.next);
          } else {
            if (C(c._, r._)) {
              ((n = c).next = e), (e.previous = n), --a;
              continue t;
            }
            (l += c._.r), (c = c.previous);
          }
        } while (f !== c.next);
        for (
          r.previous = n, r.next = e, n.next = e.previous = e = r, u = M(n);
          (r = r.next) !== e;

        )
          (o = M(r)) < u && ((n = r), (u = o));
        e = n.next;
      }
      for (n = [e._], r = e; (r = r.next) !== e; ) n.push(r._);
      for (r = p(n), a = 0; a < i; ++a) ((n = t[a]).x -= r.x), (n.y -= r.y);
      return r.r;
    }
    var T = function(t) {
      return E(t), t;
    };
    function N(t) {
      return null == t ? null : A(t);
    }
    function A(t) {
      if ('function' != typeof t) throw new Error();
      return t;
    }
    function O() {
      return 0;
    }
    var U = function(t) {
      return function() {
        return t;
      };
    };
    function S(t) {
      return Math.sqrt(t.value);
    }
    var k = function() {
      var t = null,
        n = 1,
        e = 1,
        r = O;
      function i(i) {
        return (
          (i.x = n / 2),
          (i.y = e / 2),
          t
            ? i
                .eachBefore(Y(t))
                .eachAfter(D(r, 0.5))
                .eachBefore(I(1))
            : i
                .eachBefore(Y(S))
                .eachAfter(D(O, 1))
                .eachAfter(D(r, i.r / Math.min(n, e)))
                .eachBefore(I(Math.min(n, e) / (2 * i.r))),
          i
        );
      }
      return (
        (i.radius = function(n) {
          return arguments.length ? ((t = N(n)), i) : t;
        }),
        (i.size = function(t) {
          return arguments.length ? ((n = +t[0]), (e = +t[1]), i) : [n, e];
        }),
        (i.padding = function(t) {
          return arguments.length
            ? ((r = 'function' == typeof t ? t : U(+t)), i)
            : r;
        }),
        i
      );
    };
    function Y(t) {
      return function(n) {
        n.children || (n.r = Math.max(0, +t(n) || 0));
      };
    }
    function D(t, n) {
      return function(e) {
        if ((r = e.children)) {
          var r,
            i,
            u,
            o = r.length,
            a = t(e) * n || 0;
          if (a) for (i = 0; i < o; ++i) r[i].r += a;
          if (((u = E(r)), a)) for (i = 0; i < o; ++i) r[i].r -= a;
          e.r = u + a;
        }
      };
    }
    function I(t) {
      return function(n) {
        var e = n.parent;
        (n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
      };
    }
    var j = function(t) {
        (t.x0 = Math.round(t.x0)),
          (t.y0 = Math.round(t.y0)),
          (t.x1 = Math.round(t.x1)),
          (t.y1 = Math.round(t.y1));
      },
      L = function(t, n, e, r, i) {
        for (
          var u,
            o = t.children,
            a = -1,
            f = o.length,
            c = t.value && (r - n) / t.value;
          ++a < f;

        )
          ((u = o[a]).y0 = e),
            (u.y1 = i),
            (u.x0 = n),
            (u.x1 = n += u.value * c);
      },
      P = function() {
        var t = 1,
          n = 1,
          e = 0,
          r = !1;
        function i(i) {
          var u = i.height + 1;
          return (
            (i.x0 = i.y0 = e),
            (i.x1 = t),
            (i.y1 = n / u),
            i.eachBefore(
              (function(t, n) {
                return function(r) {
                  r.children &&
                    L(
                      r,
                      r.x0,
                      (t * (r.depth + 1)) / n,
                      r.x1,
                      (t * (r.depth + 2)) / n
                    );
                  var i = r.x0,
                    u = r.y0,
                    o = r.x1 - e,
                    a = r.y1 - e;
                  o < i && (i = o = (i + o) / 2),
                    a < u && (u = a = (u + a) / 2),
                    (r.x0 = i),
                    (r.y0 = u),
                    (r.x1 = o),
                    (r.y1 = a);
                };
              })(n, u)
            ),
            r && i.eachBefore(j),
            i
          );
        }
        return (
          (i.round = function(t) {
            return arguments.length ? ((r = !!t), i) : r;
          }),
          (i.size = function(e) {
            return arguments.length ? ((t = +e[0]), (n = +e[1]), i) : [t, n];
          }),
          (i.padding = function(t) {
            return arguments.length ? ((e = +t), i) : e;
          }),
          i
        );
      },
      B = '$',
      z = {depth: -1},
      F = {};
    function q(t) {
      return t.id;
    }
    function H(t) {
      return t.parentId;
    }
    var $ = function() {
      var t = q,
        n = H;
      function e(e) {
        var r,
          i,
          u,
          o,
          a,
          f,
          c,
          s = e.length,
          d = new Array(s),
          p = {};
        for (i = 0; i < s; ++i)
          (r = e[i]),
            (a = d[i] = new h(r)),
            null != (f = t(r, i, e)) &&
              (f += '') &&
              (p[(c = B + (a.id = f))] = c in p ? F : a);
        for (i = 0; i < s; ++i)
          if (((a = d[i]), null != (f = n(e[i], i, e)) && (f += ''))) {
            if (!(o = p[B + f])) throw new Error('missing: ' + f);
            if (o === F) throw new Error('ambiguous: ' + f);
            o.children ? o.children.push(a) : (o.children = [a]),
              (a.parent = o);
          } else {
            if (u) throw new Error('multiple roots');
            u = a;
          }
        if (!u) throw new Error('no root');
        if (
          ((u.parent = z),
          u
            .eachBefore(function(t) {
              (t.depth = t.parent.depth + 1), --s;
            })
            .eachBefore(l),
          (u.parent = null),
          s > 0)
        )
          throw new Error('cycle');
        return u;
      }
      return (
        (e.id = function(n) {
          return arguments.length ? ((t = A(n)), e) : t;
        }),
        (e.parentId = function(t) {
          return arguments.length ? ((n = A(t)), e) : n;
        }),
        e
      );
    };
    function W(t, n) {
      return t.parent === n.parent ? 1 : 2;
    }
    function G(t) {
      var n = t.children;
      return n ? n[0] : t.t;
    }
    function Z(t) {
      var n = t.children;
      return n ? n[n.length - 1] : t.t;
    }
    function V(t, n, e) {
      var r = e / (n.i - t.i);
      (n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
    }
    function X(t, n, e) {
      return t.a.parent === n.parent ? t.a : e;
    }
    function K(t, n) {
      (this._ = t),
        (this.parent = null),
        (this.children = null),
        (this.A = null),
        (this.a = this),
        (this.z = 0),
        (this.m = 0),
        (this.c = 0),
        (this.s = 0),
        (this.t = null),
        (this.i = n);
    }
    K.prototype = Object.create(h.prototype);
    var Q = function() {
        var t = W,
          n = 1,
          e = 1,
          r = null;
        function i(i) {
          var f = (function(t) {
            for (var n, e, r, i, u, o = new K(t, 0), a = [o]; (n = a.pop()); )
              if ((r = n._.children))
                for (
                  n.children = new Array((u = r.length)), i = u - 1;
                  i >= 0;
                  --i
                )
                  a.push((e = n.children[i] = new K(r[i], i))), (e.parent = n);
            return ((o.parent = new K(null, 0)).children = [o]), o;
          })(i);
          if ((f.eachAfter(u), (f.parent.m = -f.z), f.eachBefore(o), r))
            i.eachBefore(a);
          else {
            var c = i,
              s = i,
              l = i;
            i.eachBefore(function(t) {
              t.x < c.x && (c = t),
                t.x > s.x && (s = t),
                t.depth > l.depth && (l = t);
            });
            var h = c === s ? 1 : t(c, s) / 2,
              d = h - c.x,
              p = n / (s.x + h + d),
              _ = e / (l.depth || 1);
            i.eachBefore(function(t) {
              (t.x = (t.x + d) * p), (t.y = t.depth * _);
            });
          }
          return i;
        }
        function u(n) {
          var e = n.children,
            r = n.parent.children,
            i = n.i ? r[n.i - 1] : null;
          if (e) {
            !(function(t) {
              for (
                var n, e = 0, r = 0, i = t.children, u = i.length;
                --u >= 0;

              )
                ((n = i[u]).z += e), (n.m += e), (e += n.s + (r += n.c));
            })(n);
            var u = (e[0].z + e[e.length - 1].z) / 2;
            i ? ((n.z = i.z + t(n._, i._)), (n.m = n.z - u)) : (n.z = u);
          } else i && (n.z = i.z + t(n._, i._));
          n.parent.A = (function(n, e, r) {
            if (e) {
              for (
                var i,
                  u = n,
                  o = n,
                  a = e,
                  f = u.parent.children[0],
                  c = u.m,
                  s = o.m,
                  l = a.m,
                  h = f.m;
                (a = Z(a)), (u = G(u)), a && u;

              )
                (f = G(f)),
                  ((o = Z(o)).a = n),
                  (i = a.z + l - u.z - c + t(a._, u._)) > 0 &&
                    (V(X(a, n, r), n, i), (c += i), (s += i)),
                  (l += a.m),
                  (c += u.m),
                  (h += f.m),
                  (s += o.m);
              a && !Z(o) && ((o.t = a), (o.m += l - s)),
                u && !G(f) && ((f.t = u), (f.m += c - h), (r = n));
            }
            return r;
          })(n, i, n.parent.A || r[0]);
        }
        function o(t) {
          (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
        }
        function a(t) {
          (t.x *= n), (t.y = t.depth * e);
        }
        return (
          (i.separation = function(n) {
            return arguments.length ? ((t = n), i) : t;
          }),
          (i.size = function(t) {
            return arguments.length
              ? ((r = !1), (n = +t[0]), (e = +t[1]), i)
              : r
              ? null
              : [n, e];
          }),
          (i.nodeSize = function(t) {
            return arguments.length
              ? ((r = !0), (n = +t[0]), (e = +t[1]), i)
              : r
              ? [n, e]
              : null;
          }),
          i
        );
      },
      J = function(t, n, e, r, i) {
        for (
          var u,
            o = t.children,
            a = -1,
            f = o.length,
            c = t.value && (i - e) / t.value;
          ++a < f;

        )
          ((u = o[a]).x0 = n),
            (u.x1 = r),
            (u.y0 = e),
            (u.y1 = e += u.value * c);
      },
      tt = (1 + Math.sqrt(5)) / 2;
    function nt(t, n, e, r, i, u) {
      for (
        var o,
          a,
          f,
          c,
          s,
          l,
          h,
          d,
          p,
          _,
          v,
          b = [],
          g = n.children,
          y = 0,
          m = 0,
          x = g.length,
          w = n.value;
        y < x;

      ) {
        (f = i - e), (c = u - r);
        do {
          s = g[m++].value;
        } while (!s && m < x);
        for (
          l = h = s,
            v = s * s * (_ = Math.max(c / f, f / c) / (w * t)),
            p = Math.max(h / v, v / l);
          m < x;
          ++m
        ) {
          if (
            ((s += a = g[m].value),
            a < l && (l = a),
            a > h && (h = a),
            (v = s * s * _),
            (d = Math.max(h / v, v / l)) > p)
          ) {
            s -= a;
            break;
          }
          p = d;
        }
        b.push((o = {value: s, dice: f < c, children: g.slice(y, m)})),
          o.dice
            ? L(o, e, r, i, w ? (r += (c * s) / w) : u)
            : J(o, e, r, w ? (e += (f * s) / w) : i, u),
          (w -= s),
          (y = m);
      }
      return b;
    }
    var et = (function t(n) {
        function e(t, e, r, i, u) {
          nt(n, t, e, r, i, u);
        }
        return (
          (e.ratio = function(n) {
            return t((n = +n) > 1 ? n : 1);
          }),
          e
        );
      })(tt),
      rt = function() {
        var t = et,
          n = !1,
          e = 1,
          r = 1,
          i = [0],
          u = O,
          o = O,
          a = O,
          f = O,
          c = O;
        function s(t) {
          return (
            (t.x0 = t.y0 = 0),
            (t.x1 = e),
            (t.y1 = r),
            t.eachBefore(l),
            (i = [0]),
            n && t.eachBefore(j),
            t
          );
        }
        function l(n) {
          var e = i[n.depth],
            r = n.x0 + e,
            s = n.y0 + e,
            l = n.x1 - e,
            h = n.y1 - e;
          l < r && (r = l = (r + l) / 2),
            h < s && (s = h = (s + h) / 2),
            (n.x0 = r),
            (n.y0 = s),
            (n.x1 = l),
            (n.y1 = h),
            n.children &&
              ((e = i[n.depth + 1] = u(n) / 2),
              (r += c(n) - e),
              (s += o(n) - e),
              (l -= a(n) - e) < r && (r = l = (r + l) / 2),
              (h -= f(n) - e) < s && (s = h = (s + h) / 2),
              t(n, r, s, l, h));
        }
        return (
          (s.round = function(t) {
            return arguments.length ? ((n = !!t), s) : n;
          }),
          (s.size = function(t) {
            return arguments.length ? ((e = +t[0]), (r = +t[1]), s) : [e, r];
          }),
          (s.tile = function(n) {
            return arguments.length ? ((t = A(n)), s) : t;
          }),
          (s.padding = function(t) {
            return arguments.length
              ? s.paddingInner(t).paddingOuter(t)
              : s.paddingInner();
          }),
          (s.paddingInner = function(t) {
            return arguments.length
              ? ((u = 'function' == typeof t ? t : U(+t)), s)
              : u;
          }),
          (s.paddingOuter = function(t) {
            return arguments.length
              ? s
                  .paddingTop(t)
                  .paddingRight(t)
                  .paddingBottom(t)
                  .paddingLeft(t)
              : s.paddingTop();
          }),
          (s.paddingTop = function(t) {
            return arguments.length
              ? ((o = 'function' == typeof t ? t : U(+t)), s)
              : o;
          }),
          (s.paddingRight = function(t) {
            return arguments.length
              ? ((a = 'function' == typeof t ? t : U(+t)), s)
              : a;
          }),
          (s.paddingBottom = function(t) {
            return arguments.length
              ? ((f = 'function' == typeof t ? t : U(+t)), s)
              : f;
          }),
          (s.paddingLeft = function(t) {
            return arguments.length
              ? ((c = 'function' == typeof t ? t : U(+t)), s)
              : c;
          }),
          s
        );
      },
      it = function(t, n, e, r, i) {
        var u,
          o,
          a = t.children,
          f = a.length,
          c = new Array(f + 1);
        for (c[0] = o = u = 0; u < f; ++u) c[u + 1] = o += a[u].value;
        !(function t(n, e, r, i, u, o, f) {
          if (n >= e - 1) {
            var s = a[n];
            return (s.x0 = i), (s.y0 = u), (s.x1 = o), void (s.y1 = f);
          }
          var l = c[n],
            h = r / 2 + l,
            d = n + 1,
            p = e - 1;
          for (; d < p; ) {
            var _ = (d + p) >>> 1;
            c[_] < h ? (d = _ + 1) : (p = _);
          }
          h - c[d - 1] < c[d] - h && n + 1 < d && --d;
          var v = c[d] - l,
            b = r - v;
          if (o - i > f - u) {
            var g = (i * b + o * v) / r;
            t(n, d, v, i, u, g, f), t(d, e, b, g, u, o, f);
          } else {
            var y = (u * b + f * v) / r;
            t(n, d, v, i, u, o, y), t(d, e, b, i, y, o, f);
          }
        })(0, f, t.value, n, e, r, i);
      },
      ut = function(t, n, e, r, i) {
        (1 & t.depth ? J : L)(t, n, e, r, i);
      },
      ot = (function t(n) {
        function e(t, e, r, i, u) {
          if ((o = t._squarify) && o.ratio === n)
            for (
              var o, a, f, c, s, l = -1, h = o.length, d = t.value;
              ++l < h;

            ) {
              for (
                f = (a = o[l]).children, c = a.value = 0, s = f.length;
                c < s;
                ++c
              )
                a.value += f[c].value;
              a.dice
                ? L(a, e, r, i, (r += ((u - r) * a.value) / d))
                : J(a, e, r, (e += ((i - e) * a.value) / d), u),
                (d -= a.value);
            }
          else (t._squarify = o = nt(n, t, e, r, i, u)), (o.ratio = n);
        }
        return (
          (e.ratio = function(n) {
            return t((n = +n) > 1 ? n : 1);
          }),
          e
        );
      })(tt);
    e.d(n, 'cluster', function() {
      return o;
    }),
      e.d(n, 'hierarchy', function() {
        return f;
      }),
      e.d(n, 'pack', function() {
        return k;
      }),
      e.d(n, 'packSiblings', function() {
        return T;
      }),
      e.d(n, 'packEnclose', function() {
        return p;
      }),
      e.d(n, 'partition', function() {
        return P;
      }),
      e.d(n, 'stratify', function() {
        return $;
      }),
      e.d(n, 'tree', function() {
        return Q;
      }),
      e.d(n, 'treemap', function() {
        return rt;
      }),
      e.d(n, 'treemapBinary', function() {
        return it;
      }),
      e.d(n, 'treemapDice', function() {
        return L;
      }),
      e.d(n, 'treemapSlice', function() {
        return J;
      }),
      e.d(n, 'treemapSliceDice', function() {
        return ut;
      }),
      e.d(n, 'treemapSquarify', function() {
        return et;
      }),
      e.d(n, 'treemapResquarify', function() {
        return ot;
      });
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var r = e(6),
      i = e(5),
      u = e(3);
    const o = Object.assign({}, e(9), e(1), e(23));
    function a() {
      this.totalMetric = o.sum(this.dataset, t => t[this.metricAccessor]);
      let t = [];
      this.dimensionsAccessor.forEach(n => {
        t.push(t => t[n]);
      });
      const n = o.rollup(
          this.dataset,
          t => o.sum(t, t => t[this.metricAccessor]),
          ...t
        ),
        e = [],
        r = ['root'];
      let i = 0,
        u = 0,
        a = [0];
      return (
        (function t(n) {
          i++;
          const o = Array.from(n);
          o.forEach((n, f) => {
            const c = {};
            u++,
              (c.id = u),
              (c.parentID = a[i - 1]),
              (c.parent = r[i - 1]),
              (c.key = n[0]),
              (c.level = i),
              n.forEach((e, o) => {
                1 == o &&
                  (e instanceof Map
                    ? ((r[i] = n[0]), (a[i] = u), t(e))
                    : (c.value = e));
              }),
              e.push(c),
              f == o.length - 1 && i--;
          });
        })(n),
        e.unshift({id: 0}),
        o
          .stratify()
          .id(t => t.id)
          .parentId(t => t.parentID)(e)
      );
    }
    const f = Object.assign({}, e(1));
    const c = Object.assign({}, e(9), e(1), e(4), e(21), e(2), e(14));
    function s() {
      const t = this,
        n = this.partitionData(this.treeData),
        e = [];
      let r = n;
      n.each(t => {
        (t.current = t),
          (t.angle = t.x1 - (t.x1 - t.x0) / 2),
          (t.radius = t.y1 - (t.y1 - t.y0) / 2);
      });
      const i = this.g
        .append('g')
        .attr('fill-opacity', 0.8)
        .selectAll('path')
        .data(n.descendants())
        .enter()
        .append('path')
        .attr('fill', t => {
          for (; t.depth > 1; ) t = t.parent;
          return t.depth ? this.colorScale(t.data.id) : 'none';
        })
        .attr('fill-opacity', t => (t.children ? 0.6 : 0.4))
        .attr('d', this.arc)
        .attr('data-test', t => t.data.id)
        .attr('id', (t, n) => `cp-${n}`)
        .on('mouseover', (n, r, i) => {
          !(function(n, r, i) {
            let u = n.angle,
              o = n.radius;
            e.length > 0 && ((u = n.newAngle), (o = n.newRadius));
            const a = c
                .select('#tooltip')
                .style('max-width', `${t.dimensions.boundedRadius}px`),
              f =
                0 == Math.round((100 * n.value) / n.parent.value)
                  ? '< 1%'
                  : c.format('.0%')(n.value / n.parent.value),
              s =
                0 == Math.round((100 * n.value) / t.totalMetric)
                  ? '< 1%'
                  : c.format('.0%')(n.value / t.totalMetric);
            let l = `${t.metricAccessor}: ${n.value} `;
            (l += `(${f}`), n.data.depth > 1 && (l += ` | ${s}`);
            (l += ')'),
              a
                .select('#title')
                .text(
                  `${t.dimensionsAccessor[n.depth - 1]}: ${n.data.data.key}`
                ),
              a.select('#count').text(l);
            const h = a.node().offsetWidth,
              d = a.node().offsetHeight,
              p =
                Math.cos(u + Math.PI / 2) * t.dimensions.tooltipRadius +
                t.dimensions.width / 2,
              _ =
                Math.sin(u + Math.PI / 2) * t.dimensions.tooltipRadius +
                t.dimensions.height / 2;
            a.style('opacity', 0.8).style(
              'transform',
              `translate(${p - t.horizontalOffset - h / 2}px, ${_ - d - 10}px)`
            );
            const v =
                Math.cos(u - Math.PI / 2) * o +
                t.dimensions.width / 2 -
                t.dimensions.width / 2,
              b =
                Math.sin(u - Math.PI / 2) * o +
                t.dimensions.height / 2 -
                t.dimensions.height / 2;
            t.g
              .append('circle')
              .attr('class', 'tooltip-dot')
              .attr('cx', v)
              .attr('cy', b)
              .attr('r', 3)
              .style('fill', 'black')
              .style('opacity', 0.7);
            const g = p - t.dimensions.width / 2,
              y = _ - t.dimensions.height / 2 - 10;
            t.wrapper
              .append('line')
              .attr('class', 'tooltip-line')
              .attr('x1', g)
              .attr('y1', y)
              .attr('x2', v)
              .attr('y2', b)
              .attr('stroke-width', 1)
              .attr('stroke', 'black')
              .style('opacity', 0.7);
          })(n);
        })
        .on('mouseout', l);
      i
        .filter(t => t.children)
        .style('cursor', 'pointer')
        .on('click', function(u) {
          const o = e.length,
            a = e[o - 1];
          let f;
          f = u.depth > 1 ? (u.bZoomed ? u : u.children ? u : u.parent) : u;
          f.bZoomed
            ? (delete f.bZoomed,
              (f = r = e.pop()),
              e.length || ((n.bHighlighted = !0), (f = r = n)))
            : ((f.bZoomed = !0), r && e.push(r), (r = f));
          n.each(t => {
            (t.target = {
              x0:
                2 *
                Math.max(0, Math.min(1, (t.x0 - f.x0) / (f.x1 - f.x0))) *
                Math.PI,
              x1:
                2 *
                Math.max(0, Math.min(1, (t.x1 - f.x0) / (f.x1 - f.x0))) *
                Math.PI,
              y0: Math.max(0, t.y0 - f.y0),
              y1: Math.max(0, t.y1 - f.y0),
            }),
              (t.newAngle = t.target.x1 - (t.target.x1 - t.target.x0) / 2),
              (t.newRadius = t.target.y1 - (t.target.y1 - t.target.y0) / 2);
          });
          t.g.transition().duration(750);
          i.transition()
            .tween('data', t => {
              const n = c.interpolate(t.current, t.target);
              return e => (t.current = n(e));
            })
            .attrTween('d', n => () => t.arc(n.current));
          let s = u.depth,
            l = u;
          e.length < o && ((s = a.depth), (l = a));
          t.buildLegend(l, s);
        }),
        this.buildLegend(n, 0);
    }
    function l() {
      c
        .select('#tooltip')
        .style('opacity', 0)
        .style('transform', 'translate(-10000px, -10000px)'),
        c.select('.tooltip-line').remove(),
        c.selectAll('.tooltip-dot').remove();
    }
    const h = Object.assign({}, e(9), e(1));
    var d = function(t, n) {
      if (
        (h.select('#legend').remove(),
        h.select('#breadcrumb').remove(),
        this.legend)
      ) {
        const e = 20,
          r = Math.floor((2 * this.dimensions.boundedRadius) / e);
        let i = t.children.length;
        i > r && (i = r);
        const u = i * e - this.dimensions.boundedRadius,
          o = this.wrapper
            .append('g')
            .attr('id', 'breadcrumb')
            .selectAll('g')
            .data(this.dimensionsAccessor.filter((t, e) => e <= n))
            .enter()
            .append('g')
            .attr('id', (t, n) => `breadcrumb-${n}`)
            .style(
              'transform',
              (t, r) =>
                `translate(${this.dimensions.boundedRadius + 50}px, ${r * e -
                  u -
                  (n + 1.5) * e}px)`
            ),
          a = this.getParentArray(t);
        o.append('text')
          .attr('class', 'breadcrumb-text')
          .attr('x', 21)
          .attr('y', 13)
          .attr('fill', this.fontColor)
          .attr('fill-opacity', this.fontOpacity)
          .text((t, n) => `${t}: ${a[n]}`);
        const f = this.wrapper
          .append('g')
          .attr('id', 'legend')
          .selectAll('g')
          .data(
            t.descendants().filter((t, e) => e < r && t.data.depth == n + 1)
          )
          .enter()
          .append('g')
          .attr('id', t => `legend-${t.data.id}`)
          .style(
            'transform',
            (t, n) =>
              `translate(${this.dimensions.boundedRadius + 50}px, ${n * e -
                u}px)`
          );
        f
          .append('rect')
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', 15)
          .attr('height', 15)
          .attr('fill', 0 == n ? t => this.colorScale(t.data.id) : 'black')
          .attr('fill-opacity', 0 == n ? 0.6 : 0.1),
          f
            .append('text')
            .attr('class', 'legend-text')
            .attr('x', 21)
            .attr('y', 13)
            .attr('fill', this.fontColor)
            .attr('fill-opacity', this.fontOpacity)
            .text(t => t.data.data.key);
      }
    };
    const p = Object.assign({}, e(9), e(1), e(10), e(20), e(2), e(22), e(14));
    class _ {
      constructor(t, n) {
        (this.DOMtarget = t),
          (this.dataset = n),
          (this.treeData = null),
          (this.colorScheme = 'interpolateRainbow'),
          (this.colorScale = null),
          (this.arc = null),
          (this.dimensionsAccessor = ['dimension']),
          (this.metricAccessor = 'COUNT'),
          (this.totalMetric = null),
          (this.fontColor = 'slateGrey'),
          (this.fontOpacity = 1),
          (this.legend = !0),
          (this.colorSchemeReversed = !1),
          (this.horizontalOffset = 0);
      }
      init() {
        if (
          ((this.dimensions = this.getDimensions(this.DOMtarget)),
          null === localStorage.getItem('d3_sunburst'))
        ) {
          const t = {};
          window.localStorage.setItem('d3_sunburst', JSON.stringify(t));
        }
        (this.treeData = this.prepareData()), this.initScales();
      }
      initScales() {
        let t;
        (t = this.colorSchemeReversed
          ? p
              .quantize(p[this.colorScheme], this.treeData.children.length + 1)
              .reverse()
          : p.quantize(p[this.colorScheme], this.treeData.children.length + 1)),
          (this.colorScale = p.scaleOrdinal().range(t)),
          (this.arc = p
            .arc()
            .startAngle(t => t.x0)
            .endAngle(t => t.x1)
            .padAngle(t => Math.min((t.x1 - t.x0) / 2, 0.005))
            .padRadius(this.dimensions.boundedRadius / 2)
            .innerRadius(t => t.y0)
            .outerRadius(t => t.y1 - 1));
      }
      draw() {
        this.init(), this.drawBase(), this.drawContent();
      }
    }
    Object.assign(_.prototype, {
      getDimensions: function(t) {
        const n = i.a.getMaxDimensions(t),
          e = {
            width: n.w,
            height: n.h,
            radius: n.max / 2,
            margin: {top: 15, right: 15, bottom: 15, left: 15},
          };
        return (
          1 == this.legend &&
            ((e.margin.right = e.width / 6),
            (this.horizontalOffset = e.margin.right - e.margin.left)),
          (e.boundedWidth = e.radius - e.margin.left / 2 - e.margin.right / 2),
          (e.boundedHeight = e.radius - e.margin.top - e.margin.bottom),
          (e.boundedRadius =
            e.boundedWidth > e.boundedHeight
              ? e.boundedHeight
              : e.boundedWidth),
          (e.tooltipRadius = 0.4 * e.boundedRadius),
          e
        );
      },
      prepareData: a,
      partitionData: function(t) {
        return o.partition().size([2 * Math.PI, this.dimensions.boundedRadius])(
          o
            .hierarchy(t)
            .sum(t => (t.children ? 0 : t.data.value))
            .sort((t, n) => n.value - t.value)
        );
      },
      getParentArray: function(t) {
        const n = [''];
        return (
          (function t(e) {
            e.parent &&
              (e.data.data.key && n.push(e.data.data.key), t(e.parent));
          })(t),
          n.reverse()
        );
      },
      drawBase: function() {
        (this.wrapper = f
          .select(`#${this.DOMtarget}`)
          .append('svg')
          .attr('width', this.dimensions.width)
          .attr('height', this.dimensions.height)
          .attr('x', 0)
          .attr('y', 0)
          .attr('class', 'wrapper')
          .attr('id', 'd3-root')
          .attr(
            'viewBox',
            `-${this.dimensions.width / 2 - this.horizontalOffset} -${this
              .dimensions.height / 2} ${this.dimensions.width} ${
              this.dimensions.height
            }`
          )),
          (this.g = this.wrapper.append('g'));
      },
      drawContent: s,
      hideToolTip: l,
      buildLegend: d,
    });
    e(16);
    var v = e(15);
    const b = Object.assign({}, e(10), e(1)),
      g = 'localhost',
      y = 450;
    function m(t) {
      x();
      const n = i.a.getMaxDimensions('body');
      if (n.max < y)
        return (
          M(u.f, u.g),
          console.log(`current ${n.max}`),
          void console.log(`required ${y}`)
        );
      const e = (function(t) {
        const n = t.tables.DEFAULT;
        if (
          (console.log(`Dataset contains ${n.length} records`), 0 == n.length)
        )
          return;
        const e = t.fields.dimension.concat(t.fields.metric),
          r = [];
        n.map(t => {
          const n = t.dimension.concat(t.metric),
            i = {};
          e.forEach((t, e) => {
            i[t.name] = n[e];
          }),
            r.push(i);
        });
        const i = {};
        return (
          (i.tables = r),
          (i.fields = e),
          (i.style = t.style),
          (i.theme = t.theme),
          (i.interactions = t.interactions),
          i
        );
      })(t);
      if (e) {
        !(function(t) {
          const n = t
            .append('div')
            .attr('id', 'tooltip')
            .attr('class', 'tooltip');
          n.append('span').attr('id', 'title'),
            n.append('span').attr('id', 'count');
        })(x());
        const n = new _('body', e.tables);
        (n.metricAccessor = t.fields.metric[0].name),
          (n.dimensionsAccessor = []),
          t.fields.dimension.forEach((t, e) => {
            n.dimensionsAccessor[e] = t.name;
          }),
          (n.colorScheme = t.style.arcColors.value),
          (n.colorSchemeReversed = t.style.colorSchemeReversed.value),
          (n.fontColor = t.style.fontColor.value.color),
          (n.fontOpacity = t.style.fontColor.value.opacity),
          (n.legend = t.style.isLegend.value),
          n.draw();
      } else M(u.d, u.a);
    }
    function x() {
      const t = b.select('body').attr('id', 'body');
      return (
        b
          .select('body')
          .selectAll('svg')
          .remove(),
        b.select('#error').remove(),
        b.select('#tooltip').remove(),
        t
      );
    }
    function w(t) {
      if (g) m(t);
      else
        try {
          m(t);
        } catch (t) {
          M(u.b, `${u.c} ${t}`);
        }
    }
    async function C() {
      if (window.location.hostname == g) {
        w(await b.json('./data/DS-data-documentation.json'));
      } else r.subscribeToData(w, {transform: r.objectTransform});
    }
    function M(t, n) {
      const e = x();
      i.a.renderErrorMessage(e, t, n);
    }
    C(), window.addEventListener('resize', v.debounce(C, 300));
  },
]);
