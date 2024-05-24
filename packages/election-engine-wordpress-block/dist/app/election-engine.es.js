var ur = Object.defineProperty;
var vr = (t, e, a) => e in t ? ur(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var ia = (t, e, a) => (vr(t, typeof e != "symbol" ? e + "" : e, a), a);
function ie() {
}
const Sa = (t) => t;
function Ti(t) {
  return t();
}
function xa() {
  return /* @__PURE__ */ Object.create(null);
}
function Pe(t) {
  t.forEach(Ti);
}
function aa(t) {
  return typeof t == "function";
}
function Ne(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function br(t) {
  return Object.keys(t).length === 0;
}
function Za(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const Pi = typeof window < "u";
let Mi = Pi ? () => window.performance.now() : () => Date.now(), Ta = Pi ? (t) => requestAnimationFrame(t) : ie;
const it = /* @__PURE__ */ new Set();
function Fi(t) {
  it.forEach((e) => {
    e.c(t) || (it.delete(e), e.f());
  }), it.size !== 0 && Ta(Fi);
}
function Di(t) {
  let e;
  return it.size === 0 && Ta(Fi), {
    promise: new Promise((a) => {
      it.add(e = { c: t, f: a });
    }),
    abort() {
      it.delete(e);
    }
  };
}
function m(t, e) {
  t.appendChild(e);
}
function wi(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Nr(t) {
  const e = I("style");
  return e.textContent = "/* empty */", Ar(wi(t), e), e.sheet;
}
function Ar(t, e) {
  return m(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function R(t, e, a) {
  t.insertBefore(e, a || null);
}
function O(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _e(t, e) {
  for (let a = 0; a < t.length; a += 1)
    t[a] && t[a].d(e);
}
function I(t) {
  return document.createElement(t);
}
function L(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function B(t) {
  return document.createTextNode(t);
}
function F() {
  return B(" ");
}
function Me() {
  return B("");
}
function te(t, e, a, n) {
  return t.addEventListener(e, a, n), () => t.removeEventListener(e, a, n);
}
function d(t, e, a) {
  a == null ? t.removeAttribute(e) : t.getAttribute(e) !== a && t.setAttribute(e, a);
}
function hr(t) {
  return Array.from(t.childNodes);
}
function X(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function ae(t, e, a, n) {
  a == null ? t.style.removeProperty(e) : t.style.setProperty(e, a, "");
}
let Mt;
function mr() {
  if (Mt === void 0) {
    Mt = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Mt = !0;
    }
  }
  return Mt;
}
function Er(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const n = I("iframe");
  n.setAttribute(
    "style",
    "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
  ), n.setAttribute("aria-hidden", "true"), n.tabIndex = -1;
  const i = mr();
  let r;
  return i ? (n.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", r = te(
    window,
    "message",
    /** @param {MessageEvent} event */
    (l) => {
      l.source === n.contentWindow && e();
    }
  )) : (n.src = "about:blank", n.onload = () => {
    r = te(n.contentWindow, "resize", e), e();
  }), m(t, n), () => {
    (i || r && n.contentWindow) && r(), O(n);
  };
}
function H(t, e, a) {
  t.classList.toggle(e, !!a);
}
function gr(t, e, { bubbles: a = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: a, cancelable: n });
}
const Ut = /* @__PURE__ */ new Map();
let Yt = 0;
function Cr(t) {
  let e = 5381, a = t.length;
  for (; a--; )
    e = (e << 5) - e ^ t.charCodeAt(a);
  return e >>> 0;
}
function Ir(t, e) {
  const a = { stylesheet: Nr(e), rules: {} };
  return Ut.set(t, a), a;
}
function Li(t, e, a, n, i, r, l, o = 0) {
  const s = 16.666 / n;
  let p = `{
`;
  for (let b = 0; b <= 1; b += s) {
    const v = e + (a - e) * r(b);
    p += b * 100 + `%{${l(v, 1 - v)}}
`;
  }
  const _ = p + `100% {${l(a, 1 - a)}}
}`, f = `__svelte_${Cr(_)}_${o}`, c = wi(t), { stylesheet: y, rules: u } = Ut.get(c) || Ir(c, t);
  u[f] || (u[f] = !0, y.insertRule(`@keyframes ${f} ${_}`, y.cssRules.length));
  const N = t.style.animation || "";
  return t.style.animation = `${N ? `${N}, ` : ""}${f} ${n}ms linear ${i}ms 1 both`, Yt += 1, f;
}
function fa(t, e) {
  const a = (t.style.animation || "").split(", "), n = a.filter(
    e ? (r) => r.indexOf(e) < 0 : (r) => r.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), i = a.length - n.length;
  i && (t.style.animation = n.join(", "), Yt -= i, Yt || Or());
}
function Or() {
  Ta(() => {
    Yt || (Ut.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && O(e);
    }), Ut.clear());
  });
}
let mt;
function ht(t) {
  mt = t;
}
function Rr() {
  if (!mt)
    throw new Error("Function called outside component initialization");
  return mt;
}
function dt(t) {
  Rr().$$.on_mount.push(t);
}
function Sr(t, e) {
  const a = t.$$.callbacks[e.type];
  a && a.slice().forEach((n) => n.call(this, e));
}
const et = [], Le = [];
let rt = [];
const ca = [], Tr = /* @__PURE__ */ Promise.resolve();
let da = !1;
function Pr() {
  da || (da = !0, Tr.then(ki));
}
function Ge(t) {
  rt.push(t);
}
function Ve(t) {
  ca.push(t);
}
const ra = /* @__PURE__ */ new Set();
let $e = 0;
function ki() {
  if ($e !== 0)
    return;
  const t = mt;
  do {
    try {
      for (; $e < et.length; ) {
        const e = et[$e];
        $e++, ht(e), Mr(e.$$);
      }
    } catch (e) {
      throw et.length = 0, $e = 0, e;
    }
    for (ht(null), et.length = 0, $e = 0; Le.length; )
      Le.pop()();
    for (let e = 0; e < rt.length; e += 1) {
      const a = rt[e];
      ra.has(a) || (ra.add(a), a());
    }
    rt.length = 0;
  } while (et.length);
  for (; ca.length; )
    ca.pop()();
  da = !1, ra.clear(), ht(t);
}
function Mr(t) {
  if (t.fragment !== null) {
    t.update(), Pe(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ge);
  }
}
function Fr(t) {
  const e = [], a = [];
  rt.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : a.push(n)), a.forEach((n) => n()), rt = e;
}
let yt;
function Gi() {
  return yt || (yt = Promise.resolve(), yt.then(() => {
    yt = null;
  })), yt;
}
function Bt(t, e, a) {
  t.dispatchEvent(gr(`${e ? "intro" : "outro"}${a}`));
}
const Ht = /* @__PURE__ */ new Set();
let He;
function Ie() {
  He = {
    r: 0,
    c: [],
    p: He
    // parent group
  };
}
function Oe() {
  He.r || Pe(He.c), He = He.p;
}
function k(t, e) {
  t && t.i && (Ht.delete(t), t.i(e));
}
function K(t, e, a, n) {
  if (t && t.o) {
    if (Ht.has(t))
      return;
    Ht.add(t), He.c.push(() => {
      Ht.delete(t), n && (a && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
const Hi = { duration: 0 };
function Dr(t, e, a) {
  const n = { direction: "in" };
  let i = e(t, a, n), r = !1, l, o, s = 0;
  function p() {
    l && fa(t, l);
  }
  function _() {
    const {
      delay: c = 0,
      duration: y = 300,
      easing: u = Sa,
      tick: N = ie,
      css: b
    } = i || Hi;
    b && (l = Li(t, 0, 1, y, c, u, b, s++)), N(0, 1);
    const v = Mi() + c, E = v + y;
    o && o.abort(), r = !0, Ge(() => Bt(t, !0, "start")), o = Di((A) => {
      if (r) {
        if (A >= E)
          return N(1, 0), Bt(t, !0, "end"), p(), r = !1;
        if (A >= v) {
          const h = u((A - v) / y);
          N(h, 1 - h);
        }
      }
      return r;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, fa(t), aa(i) ? (i = i(n), Gi().then(_)) : _());
    },
    invalidate() {
      f = !1;
    },
    end() {
      r && (p(), r = !1);
    }
  };
}
function wr(t, e, a) {
  const n = { direction: "out" };
  let i = e(t, a, n), r = !0, l;
  const o = He;
  o.r += 1;
  let s;
  function p() {
    const {
      delay: _ = 0,
      duration: f = 300,
      easing: c = Sa,
      tick: y = ie,
      css: u
    } = i || Hi;
    u && (l = Li(t, 1, 0, f, _, c, u));
    const N = Mi() + _, b = N + f;
    Ge(() => Bt(t, !1, "start")), "inert" in t && (s = /** @type {HTMLElement} */
    t.inert, t.inert = !0), Di((v) => {
      if (r) {
        if (v >= b)
          return y(0, 1), Bt(t, !1, "end"), --o.r || Pe(o.c), !1;
        if (v >= N) {
          const E = c((v - N) / f);
          y(1 - E, E);
        }
      }
      return r;
    });
  }
  return aa(i) ? Gi().then(() => {
    i = i(n), p();
  }) : p(), {
    end(_) {
      _ && "inert" in t && (t.inert = s), _ && i.tick && i.tick(1, 0), r && (l && fa(t, l), r = !1);
    }
  };
}
function j(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Ue(t, e, a) {
  const n = t.$$.props[e];
  n !== void 0 && (t.$$.bound[n] = a, a(t.$$.ctx[n]));
}
function Re(t) {
  t && t.c();
}
function Ae(t, e, a) {
  const { fragment: n, after_update: i } = t.$$;
  n && n.m(e, a), Ge(() => {
    const r = t.$$.on_mount.map(Ti).filter(aa);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : Pe(r), t.$$.on_mount = [];
  }), i.forEach(Ge);
}
function he(t, e) {
  const a = t.$$;
  a.fragment !== null && (Fr(a.after_update), Pe(a.on_destroy), a.fragment && a.fragment.d(e), a.on_destroy = a.fragment = null, a.ctx = []);
}
function Lr(t, e) {
  t.$$.dirty[0] === -1 && (et.push(t), Pr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function me(t, e, a, n, i, r, l = null, o = [-1]) {
  const s = mt;
  ht(t);
  const p = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: ie,
    not_equal: i,
    bound: xa(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: xa(),
    dirty: o,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  l && l(p.root);
  let _ = !1;
  if (p.ctx = a ? a(t, e.props || {}, (f, c, ...y) => {
    const u = y.length ? y[0] : c;
    return p.ctx && i(p.ctx[f], p.ctx[f] = u) && (!p.skip_bound && p.bound[f] && p.bound[f](u), _ && Lr(t, f)), c;
  }) : [], p.update(), _ = !0, Pe(p.before_update), p.fragment = n ? n(p.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = hr(e.target);
      p.fragment && p.fragment.l(f), f.forEach(O);
    } else
      p.fragment && p.fragment.c();
    e.intro && k(t.$$.fragment), Ae(t, e.target, e.anchor), ki();
  }
  ht(s);
}
class Ee {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ia(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ia(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    he(this, 1), this.$destroy = ie;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, a) {
    if (!aa(a))
      return ie;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(a), () => {
      const i = n.indexOf(a);
      i !== -1 && n.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !br(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const kr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(kr);
const Gr = 146, Hr = "22 Apr 2009 National Election", Vr = 23181997, Ur = 239237, Yr = 743609, Br = 17919966, xr = 17680729, Zr = 19734, Wr = 19734, zr = [
  {
    party_id: 7,
    party_name: "AFRICAN NATIONAL CONGRESS",
    party_abbreviation: "ANC",
    votes: 11650748,
    vote_perc: 65.89517887,
    ballot_type: "National",
    independent: !1,
    seats: 264
  },
  {
    party_id: 52,
    party_name: "DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE",
    party_abbreviation: "DA",
    votes: 2945829,
    vote_perc: 16.66124174,
    ballot_type: "National",
    independent: !1,
    seats: 67
  },
  {
    party_id: 499,
    party_name: "CONGRESS  OF THE PEOPLE",
    party_abbreviation: "COPE",
    votes: 1311027,
    vote_perc: 7.415005343,
    ballot_type: "National",
    independent: !1,
    seats: 30
  },
  {
    party_id: 3,
    party_name: "INKATHA FREEDOM PARTY",
    party_abbreviation: "IFP",
    votes: 804260,
    vote_perc: 4.54879434,
    ballot_type: "National",
    independent: !1,
    seats: 18
  },
  {
    party_id: 249,
    party_name: "INDEPENDENT DEMOCRATS",
    party_abbreviation: "ID",
    votes: 162915,
    vote_perc: 0.921426939,
    ballot_type: "National",
    independent: !1,
    seats: 4
  },
  {
    party_id: 6,
    party_name: "UNITED DEMOCRATIC MOVEMENT",
    party_abbreviation: "UDM",
    votes: 149680,
    vote_perc: 0.846571428,
    ballot_type: "National",
    independent: !1,
    seats: 4
  },
  {
    party_id: 4,
    party_name: "VRYHEIDSFRONT PLUS",
    party_abbreviation: "VF Plus",
    votes: 146796,
    vote_perc: 0.830259884,
    ballot_type: "National",
    independent: !1,
    seats: 4
  },
  {
    party_id: 18,
    party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
    party_abbreviation: "ACDP",
    votes: 142658,
    vote_perc: 0.806855871,
    ballot_type: "National",
    independent: !1,
    seats: 3
  },
  {
    party_id: 2,
    party_name: "UNITED CHRISTIAN DEMOCRATIC PARTY",
    party_abbreviation: "UCDP",
    votes: 66086,
    vote_perc: 0.373774181,
    ballot_type: "National",
    independent: !1,
    seats: 2
  },
  {
    party_id: 8,
    party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
    party_abbreviation: "PAC",
    votes: 48530,
    vote_perc: 0.274479633,
    ballot_type: "National",
    independent: !1,
    seats: 1
  },
  {
    party_id: 31,
    party_name: "MINORITY FRONT",
    party_abbreviation: "MF",
    votes: 43474,
    vote_perc: 0.245883527,
    ballot_type: "National",
    independent: !1,
    seats: 1
  },
  {
    party_id: 17,
    party_name: "AZANIAN PEOPLE'S ORGANISATION",
    party_abbreviation: "AZAPO",
    votes: 38245,
    vote_perc: 0.216308954,
    ballot_type: "National",
    independent: !1,
    seats: 1
  },
  {
    party_id: 450,
    party_name: "AFRICAN PEOPLE'S CONVENTION",
    party_abbreviation: "APC",
    votes: 35867,
    vote_perc: 0.202859283,
    ballot_type: "National",
    independent: !1,
    seats: 1
  },
  {
    party_id: 479,
    party_name: "MOVEMENT DEMOCRATIC PARTY",
    party_abbreviation: "MDP",
    votes: 29747,
    vote_perc: 0.168245325,
    ballot_type: "National",
    independent: !1,
    seats: 0
  },
  {
    party_id: 447,
    party_name: "AL JAMA-AH",
    party_abbreviation: "NO_ABBR",
    votes: 25947,
    vote_perc: 0.146752999,
    ballot_type: "National",
    independent: !1,
    seats: 0
  }
], Kr = [
  {
    province_id: 1,
    province_name: "Eastern Cape",
    registered_voters: 3056559,
    spoilt_votes: 34455,
    special_votes: 96499,
    percent_voter_turnout: 76.69,
    total_votes_cast: 2344098,
    total_valid_votes: 2309643,
    vd_count: 4483,
    vd_captured: 4483,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 1609926,
        vote_perc: 69.704538753,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 307437,
        vote_perc: 13.311018196,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE",
        party_abbreviation: "DA",
        votes: 230187,
        vote_perc: 9.966345448,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 91227,
        vote_perc: 3.949831208,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 13750,
        vote_perc: 0.595330101,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 11925,
        vote_perc: 0.51631356,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 249,
        party_name: "INDEPENDENT DEMOCRATS",
        party_abbreviation: "ID",
        votes: 10502,
        vote_perc: 0.454702307,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 6029,
        vote_perc: 0.261036013,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF Plus",
        votes: 5490,
        vote_perc: 0.237699073,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 4614,
        vote_perc: 0.199771133,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 479,
        party_name: "MOVEMENT DEMOCRATIC PARTY",
        party_abbreviation: "MDP",
        votes: 2748,
        vote_perc: 0.118979427,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 2,
    province_name: "Free State",
    registered_voters: 1388588,
    spoilt_votes: 17269,
    special_votes: 65095,
    percent_voter_turnout: 76.99,
    total_votes_cast: 1069127,
    total_valid_votes: 1051858,
    vd_count: 1264,
    vd_captured: 1264,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 756287,
        vote_perc: 71.900104387,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE",
        party_abbreviation: "DA",
        votes: 127259,
        vote_perc: 12.098496185,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 116852,
        vote_perc: 11.109104081,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF Plus",
        votes: 16929,
        vote_perc: 1.609437776,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 7410,
        vote_perc: 0.704467713,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 3927,
        vote_perc: 0.373339367,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 3408,
        vote_perc: 0.323998106,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 2,
        party_name: "UNITED CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "UCDP",
        votes: 3095,
        vote_perc: 0.294241238,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 3091,
        vote_perc: 0.293860958,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 3003,
        vote_perc: 0.28549481,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 2260,
        vote_perc: 0.214857899,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 479,
        party_name: "MOVEMENT DEMOCRATIC PARTY",
        party_abbreviation: "MDP",
        votes: 1797,
        vote_perc: 0.170840551,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 249,
        party_name: "INDEPENDENT DEMOCRATS",
        party_abbreviation: "ID",
        votes: 1786,
        vote_perc: 0.169794782,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 3,
    province_name: "Gauteng",
    registered_voters: 5555159,
    spoilt_votes: 46086,
    special_votes: 195941,
    percent_voter_turnout: 79.06,
    total_votes_cast: 4391699,
    total_valid_votes: 4345613,
    vd_count: 2296,
    vd_captured: 2296,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 2814277,
        vote_perc: 64.761335167,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE",
        party_abbreviation: "DA",
        votes: 924211,
        vote_perc: 21.267678461,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 337931,
        vote_perc: 7.776371251,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 64166,
        vote_perc: 1.476569589,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF Plus",
        votes: 59803,
        vote_perc: 1.376169484,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 38738,
        vote_perc: 0.891427746,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 249,
        party_name: "INDEPENDENT DEMOCRATS",
        party_abbreviation: "ID",
        votes: 25023,
        vote_perc: 0.575822099,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 17335,
        vote_perc: 0.398908048,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 12671,
        vote_perc: 0.291581418,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 9037,
        vote_perc: 0.207956852,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 2,
        party_name: "UNITED CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "UCDP",
        votes: 8322,
        vote_perc: 0.191503477,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 6461,
        vote_perc: 0.148678679,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 447,
        party_name: "AL JAMA-AH",
        party_abbreviation: "NO_ABBR",
        votes: 6392,
        vote_perc: 0.147090871,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 479,
        party_name: "MOVEMENT DEMOCRATIC PARTY",
        party_abbreviation: "MDP",
        votes: 5777,
        vote_perc: 0.132938667,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 4,
    province_name: "KwaZulu-Natal",
    registered_voters: 4475217,
    spoilt_votes: 47092,
    special_votes: 53335,
    percent_voter_turnout: 79.87,
    total_votes_cast: 3574326,
    total_valid_votes: 3527234,
    vd_count: 4187,
    vd_captured: 4187,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 2256248,
        vote_perc: 63.966496127,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 723940,
        vote_perc: 20.524297509,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE",
        party_abbreviation: "DA",
        votes: 364518,
        vote_perc: 10.334386661,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 54611,
        vote_perc: 1.548266999,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 31,
        party_name: "MINORITY FRONT",
        party_abbreviation: "MF",
        votes: 38944,
        vote_perc: 1.104094597,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 20851,
        vote_perc: 0.591143088,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 479,
        party_name: "MOVEMENT DEMOCRATIC PARTY",
        party_abbreviation: "MDP",
        votes: 7917,
        vote_perc: 0.224453495,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 7529,
        vote_perc: 0.213453375,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 249,
        party_name: "INDEPENDENT DEMOCRATS",
        party_abbreviation: "ID",
        votes: 7086,
        vote_perc: 0.200893958,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF Plus",
        votes: 6600,
        vote_perc: 0.187115456,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 6322,
        vote_perc: 0.179233927,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 447,
        party_name: "AL JAMA-AH",
        party_abbreviation: "NO_ABBR",
        votes: 6261,
        vote_perc: 0.177504526,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 284,
        party_name: "NATIONAL DEMOCRATIC CONVENTION",
        party_abbreviation: "NADECO",
        votes: 4385,
        vote_perc: 0.124318375,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 4199,
        vote_perc: 0.119045121,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 5,
    province_name: "Mpumalanga",
    registered_voters: 1696705,
    spoilt_votes: 20583,
    special_votes: 91759,
    percent_voter_turnout: 80.38,
    total_votes_cast: 1363836,
    total_valid_votes: 1343253,
    vd_count: 1377,
    vd_captured: 1377,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 1152698,
        vote_perc: 85.813915919,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE",
        party_abbreviation: "DA",
        votes: 102039,
        vote_perc: 7.596409612,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 38802,
        vote_perc: 2.888659098,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF Plus",
        votes: 11151,
        vote_perc: 0.8301489,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 7286,
        vote_perc: 0.542414571,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 6880,
        vote_perc: 0.512189439,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 4421,
        vote_perc: 0.329126382,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 3509,
        vote_perc: 0.261231503,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 3159,
        vote_perc: 0.235175354,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 479,
        party_name: "MOVEMENT DEMOCRATIC PARTY",
        party_abbreviation: "MDP",
        votes: 2915,
        vote_perc: 0.217010496,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 2698,
        vote_perc: 0.200855684,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 249,
        party_name: "INDEPENDENT DEMOCRATS",
        party_abbreviation: "ID",
        votes: 1619,
        vote_perc: 0.1205283,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 6,
    province_name: "Northern Cape",
    registered_voters: 554900,
    spoilt_votes: 6988,
    special_votes: 28065,
    percent_voter_turnout: 75.96,
    total_votes_cast: 421490,
    total_valid_votes: 414502,
    vd_count: 626,
    vd_captured: 626,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 253264,
        vote_perc: 61.100790829,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 66082,
        vote_perc: 15.942504499,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE",
        party_abbreviation: "DA",
        votes: 54215,
        vote_perc: 13.079550883,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 249,
        party_name: "INDEPENDENT DEMOCRATS",
        party_abbreviation: "ID",
        votes: 19584,
        vote_perc: 4.724705792,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF Plus",
        votes: 4957,
        vote_perc: 1.195892903,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 2,
        party_name: "UNITED CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "UCDP",
        votes: 4559,
        vote_perc: 1.099874066,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 4088,
        vote_perc: 0.986243733,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 1759,
        vote_perc: 0.424364659,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 1244,
        vote_perc: 0.300119179,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 479,
        party_name: "MOVEMENT DEMOCRATIC PARTY",
        party_abbreviation: "MDP",
        votes: 727,
        vote_perc: 0.175391192,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 614,
        vote_perc: 0.148129563,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 611,
        vote_perc: 0.147405803,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 503,
        vote_perc: 0.12135044,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 451,
        party_name: "CHRISTIAN DEMOCRATIC ALLIANCE",
        party_abbreviation: "CDA",
        votes: 426,
        vote_perc: 0.102773931,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 7,
    province_name: "Limpopo",
    registered_voters: 2256073,
    spoilt_votes: 22956,
    special_votes: 74008,
    percent_voter_turnout: 69.62,
    total_votes_cast: 1570592,
    total_valid_votes: 1547636,
    vd_count: 2456,
    vd_captured: 2456,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 1319659,
        vote_perc: 85.269339819,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 111651,
        vote_perc: 7.214293283,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE",
        party_abbreviation: "DA",
        votes: 57418,
        vote_perc: 3.710045515,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 9853,
        vote_perc: 0.636648411,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF Plus",
        votes: 8374,
        vote_perc: 0.541083304,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 7352,
        vote_perc: 0.475047104,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 5697,
        vote_perc: 0.368109814,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 5109,
        vote_perc: 0.330116384,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 4754,
        vote_perc: 0.307178174,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 458,
        party_name: "NEW VISION PARTY",
        party_abbreviation: "NVP",
        votes: 4313,
        vote_perc: 0.278683101,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 479,
        party_name: "MOVEMENT DEMOCRATIC PARTY",
        party_abbreviation: "MDP",
        votes: 2260,
        vote_perc: 0.14602917,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 287,
        party_name: "UNITED INDEPENDENT FRONT",
        party_abbreviation: "UIF",
        votes: 1597,
        vote_perc: 0.103189639,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 8,
    province_name: "North West",
    registered_voters: 1564357,
    spoilt_votes: 22290,
    special_votes: 85139,
    percent_voter_turnout: 72.6,
    total_votes_cast: 1135701,
    total_valid_votes: 1113411,
    vd_count: 1503,
    vd_captured: 1503,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 822166,
        vote_perc: 73.842094249,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE",
        party_abbreviation: "DA",
        votes: 96850,
        vote_perc: 8.698494985,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 93898,
        vote_perc: 8.43336378,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 2,
        party_name: "UNITED CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "UCDP",
        votes: 43855,
        vote_perc: 3.938797084,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF Plus",
        votes: 15986,
        vote_perc: 1.435768104,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 8239,
        vote_perc: 0.739978319,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 5768,
        vote_perc: 0.518047693,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 249,
        party_name: "INDEPENDENT DEMOCRATS",
        party_abbreviation: "ID",
        votes: 4891,
        vote_perc: 0.439280733,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 479,
        party_name: "MOVEMENT DEMOCRATIC PARTY",
        party_abbreviation: "MDP",
        votes: 4405,
        vote_perc: 0.395631083,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 3742,
        vote_perc: 0.336084339,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 2797,
        vote_perc: 0.25121002,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 2727,
        vote_perc: 0.244923034,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 1674,
        vote_perc: 0.150348793,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 9,
    province_name: "Western Cape",
    registered_voters: 2634439,
    spoilt_votes: 21518,
    special_votes: 53768,
    percent_voter_turnout: 77.78,
    total_votes_cast: 2049097,
    total_valid_votes: 2027579,
    vd_count: 1542,
    vd_captured: 1542,
    party_ballot_results: [
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE",
        party_abbreviation: "DA",
        votes: 989132,
        vote_perc: 48.783894487,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 666223,
        vote_perc: 32.858053866,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 183763,
        vote_perc: 9.063173371,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 249,
        party_name: "INDEPENDENT DEMOCRATS",
        party_abbreviation: "ID",
        votes: 91001,
        vote_perc: 4.488160511,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 32849,
        vote_perc: 1.6201095,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF Plus",
        votes: 17506,
        vote_perc: 0.863394225,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 15642,
        vote_perc: 0.771461926,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 447,
        party_name: "AL JAMA-AH",
        party_abbreviation: "NO_ABBR",
        votes: 9808,
        vote_perc: 0.483729611,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 4877,
        vote_perc: 0.240533168,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 451,
        party_name: "CHRISTIAN DEMOCRATIC ALLIANCE",
        party_abbreviation: "CDA",
        votes: 3590,
        vote_perc: 0.177058452,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  }
], qr = {
  event_id: Gr,
  event_name: Hr,
  registered_voters: Vr,
  spoilt_votes: Ur,
  special_votes: Yr,
  total_votes_cast: Br,
  total_valid_votes: xr,
  vd_count: Zr,
  vd_captured: Wr,
  party_ballot_results: zr,
  provincial_results: Kr
}, jr = 291, Jr = "2014 National Election", Qr = 25388082, Xr = 252274, $r = 324909, el = 18654771, tl = 18402497, al = 22263, nl = 22263, il = [
  {
    party_id: 7,
    party_name: "AFRICAN NATIONAL CONGRESS",
    party_abbreviation: "ANC",
    votes: 11436921,
    vote_perc: 62.148745358,
    ballot_type: "National",
    independent: !1,
    seats: 249
  },
  {
    party_id: 52,
    party_name: "DEMOCRATIC ALLIANCE",
    party_abbreviation: "DA",
    votes: 4091584,
    vote_perc: 22.233852286,
    ballot_type: "National",
    independent: !1,
    seats: 89
  },
  {
    party_id: 945,
    party_name: "ECONOMIC FREEDOM FIGHTERS",
    party_abbreviation: "EFF",
    votes: 1169259,
    vote_perc: 6.353806225,
    ballot_type: "National",
    independent: !1,
    seats: 25
  },
  {
    party_id: 3,
    party_name: "INKATHA FREEDOM PARTY",
    party_abbreviation: "IFP",
    votes: 441854,
    vote_perc: 2.401054596,
    ballot_type: "National",
    independent: !1,
    seats: 10
  },
  {
    party_id: 591,
    party_name: "NATIONAL FREEDOM PARTY",
    party_abbreviation: "NFP",
    votes: 288742,
    vote_perc: 1.569037071,
    ballot_type: "National",
    independent: !1,
    seats: 6
  },
  {
    party_id: 6,
    party_name: "UNITED DEMOCRATIC MOVEMENT",
    party_abbreviation: "UDM",
    votes: 184636,
    vote_perc: 1.003320365,
    ballot_type: "National",
    independent: !1,
    seats: 4
  },
  {
    party_id: 4,
    party_name: "VRYHEIDSFRONT PLUS",
    party_abbreviation: "VF PLUS",
    votes: 165715,
    vote_perc: 0.900502796,
    ballot_type: "National",
    independent: !1,
    seats: 4
  },
  {
    party_id: 499,
    party_name: "CONGRESS  OF THE PEOPLE",
    party_abbreviation: "COPE",
    votes: 123235,
    vote_perc: 0.669664557,
    ballot_type: "National",
    independent: !1,
    seats: 3
  },
  {
    party_id: 18,
    party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
    party_abbreviation: "ACDP",
    votes: 104039,
    vote_perc: 0.565352626,
    ballot_type: "National",
    independent: !1,
    seats: 3
  },
  {
    party_id: 330,
    party_name: "AFRICAN INDEPENDENT CONGRESS",
    party_abbreviation: "AIC",
    votes: 97642,
    vote_perc: 0.530591039,
    ballot_type: "National",
    independent: !1,
    seats: 3
  },
  {
    party_id: 938,
    party_name: "AGANG SOUTH AFRICA",
    party_abbreviation: "AGANG SA",
    votes: 52350,
    vote_perc: 0.284472265,
    ballot_type: "National",
    independent: !1,
    seats: 2
  },
  {
    party_id: 8,
    party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
    party_abbreviation: "PAC",
    votes: 37784,
    vote_perc: 0.205319963,
    ballot_type: "National",
    independent: !1,
    seats: 1
  },
  {
    party_id: 450,
    party_name: "AFRICAN PEOPLE'S CONVENTION",
    party_abbreviation: "APC",
    votes: 30676,
    vote_perc: 0.16669477,
    ballot_type: "National",
    independent: !1,
    seats: 1
  },
  {
    party_id: 447,
    party_name: "AL JAMA-AH",
    party_abbreviation: "NO_ABBR",
    votes: 25976,
    vote_perc: 0.141154757,
    ballot_type: "National",
    independent: !1,
    seats: 0
  },
  {
    party_id: 31,
    party_name: "MINORITY FRONT",
    party_abbreviation: "MF",
    votes: 22589,
    vote_perc: 0.122749646,
    ballot_type: "National",
    independent: !1,
    seats: 0
  },
  {
    party_id: 2,
    party_name: "UNITED CHRISTIAN DEMOCRATIC PARTY",
    party_abbreviation: "UCDP",
    votes: 21744,
    vote_perc: 0.118157878,
    ballot_type: "National",
    independent: !1,
    seats: 0
  },
  {
    party_id: 17,
    party_name: "AZANIAN PEOPLE'S ORGANISATION",
    party_abbreviation: "AZAPO",
    votes: 20421,
    vote_perc: 0.110968636,
    ballot_type: "National",
    independent: !1,
    seats: 0
  }
], rl = [
  {
    province_id: 1,
    province_name: "Eastern Cape",
    registered_voters: 3240059,
    spoilt_votes: 35058,
    special_votes: 48497,
    percent_voter_turnout: 4.49,
    total_votes_cast: 2278555,
    total_valid_votes: 2243497,
    vd_count: 4615,
    vd_captured: 4615,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 1587338,
        vote_perc: 70.752847006,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 356050,
        vote_perc: 15.870313176,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 118645,
        vote_perc: 5.28839575,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 84783,
        vote_perc: 3.779055644,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 26580,
        vote_perc: 1.184757546,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 17514,
        vote_perc: 0.78065627,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 9649,
        vote_perc: 0.430087493,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 8771,
        vote_perc: 0.390952161,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 8016,
        vote_perc: 0.357299341,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 4538,
        vote_perc: 0.202273504,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 965,
        party_name: "KINGDOM GOVERNANCE MOVEMENT",
        party_abbreviation: "KGM",
        votes: 3576,
        vote_perc: 0.159394017,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 591,
        party_name: "NATIONAL FREEDOM PARTY",
        party_abbreviation: "NFP",
        votes: 3559,
        vote_perc: 0.158636272,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 2501,
        vote_perc: 0.111477751,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 2323,
        vote_perc: 0.103543709,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 2,
    province_name: "Free State",
    registered_voters: 1449488,
    spoilt_votes: 16690,
    special_votes: 28722,
    percent_voter_turnout: 2.07,
    total_votes_cast: 1051027,
    total_valid_votes: 1034337,
    vd_count: 1523,
    vd_captured: 1523,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 721126,
        vote_perc: 69.718670027,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 167972,
        vote_perc: 16.23958149,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 81559,
        vote_perc: 7.885147684,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 19837,
        vote_perc: 1.917846891,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 14613,
        vote_perc: 1.412789062,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 7972,
        vote_perc: 0.770735263,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 5128,
        vote_perc: 0.495776522,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 2380,
        vote_perc: 0.230099088,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 2093,
        vote_perc: 0.202351845,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 2058,
        vote_perc: 0.198968035,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 1989,
        vote_perc: 0.192297095,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 1405,
        vote_perc: 0.135835806,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 1177,
        vote_perc: 0.1137927,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 591,
        party_name: "NATIONAL FREEDOM PARTY",
        party_abbreviation: "NFP",
        votes: 1039,
        vote_perc: 0.10045082,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 3,
    province_name: "Gauteng",
    registered_voters: 6063739,
    spoilt_votes: 46762,
    special_votes: 48614,
    percent_voter_turnout: 9.14,
    total_votes_cast: 4638981,
    total_valid_votes: 4592219,
    vd_count: 2647,
    vd_captured: 2647,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 2522012,
        vote_perc: 54.919244923,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 1309862,
        vote_perc: 28.523509005,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 471074,
        vote_perc: 10.258090914,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 58122,
        vote_perc: 1.265662635,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 37785,
        vote_perc: 0.822804836,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 30761,
        vote_perc: 0.669850458,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 25541,
        vote_perc: 0.556179921,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 23203,
        vote_perc: 0.505267715,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 22404,
        vote_perc: 0.487868719,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 591,
        party_name: "NATIONAL FREEDOM PARTY",
        party_abbreviation: "NFP",
        votes: 22403,
        vote_perc: 0.487846943,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 19943,
        vote_perc: 0.434278069,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 11077,
        vote_perc: 0.241212364,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 447,
        party_name: "AL JAMA-AH",
        party_abbreviation: "NO_ABBR",
        votes: 7509,
        vote_perc: 0.163515721,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 5844,
        vote_perc: 0.127258739,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 5277,
        vote_perc: 0.114911767,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 4,
    province_name: "KwaZulu-Natal",
    registered_voters: 5117131,
    spoilt_votes: 60938,
    special_votes: 54598,
    percent_voter_turnout: 7.75,
    total_votes_cast: 3935771,
    total_valid_votes: 3874833,
    vd_count: 4746,
    vd_captured: 4746,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 2530827,
        vote_perc: 65.314479359,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 517461,
        vote_perc: 13.35440779,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 393949,
        vote_perc: 10.166863965,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 591,
        party_name: "NATIONAL FREEDOM PARTY",
        party_abbreviation: "NFP",
        votes: 249118,
        vote_perc: 6.429128688,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 76384,
        vote_perc: 1.971284956,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 19309,
        vote_perc: 0.49831825,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 31,
        party_name: "MINORITY FRONT",
        party_abbreviation: "MF",
        votes: 18924,
        vote_perc: 0.488382338,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 15406,
        vote_perc: 0.397591328,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 9687,
        vote_perc: 0.249997871,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 7232,
        vote_perc: 0.186640302,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 5553,
        vote_perc: 0.143309402,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 4390,
        vote_perc: 0.113295205,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 447,
        party_name: "AL JAMA-AH",
        party_abbreviation: "NO_ABBR",
        votes: 4288,
        vote_perc: 0.110662834,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 5,
    province_name: "Mpumalanga",
    registered_voters: 1860834,
    spoilt_votes: 22862,
    special_votes: 41277,
    percent_voter_turnout: 2.77,
    total_votes_cast: 1408269,
    total_valid_votes: 1385407,
    vd_count: 1678,
    vd_captured: 1678,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 1091642,
        vote_perc: 78.795761823,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 139158,
        vote_perc: 10.044557303,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 85203,
        vote_perc: 6.150033889,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 651,
        party_name: "BUSHBUCKRIDGE RESIDENTS ASSOCIATION",
        party_abbreviation: "BRA",
        votes: 12208,
        vote_perc: 0.881185096,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 11707,
        vote_perc: 0.845022437,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 591,
        party_name: "NATIONAL FREEDOM PARTY",
        party_abbreviation: "NFP",
        votes: 9312,
        vote_perc: 0.672149051,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 7072,
        vote_perc: 0.510463712,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 5173,
        vote_perc: 0.373392079,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 4269,
        vote_perc: 0.308140496,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 4143,
        vote_perc: 0.299045696,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 3931,
        vote_perc: 0.283743333,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 2640,
        vote_perc: 0.190557721,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 1995,
        vote_perc: 0.144001005,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 1738,
        vote_perc: 0.125450499,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 6,
    province_name: "Northern Cape",
    registered_voters: 601080,
    spoilt_votes: 7649,
    special_votes: 22785,
    percent_voter_turnout: 0.87,
    total_votes_cast: 443714,
    total_valid_votes: 436065,
    vd_count: 694,
    vd_captured: 694,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 278540,
        vote_perc: 63.875798333,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 101882,
        vote_perc: 23.363948035,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 22083,
        vote_perc: 5.06415328,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 14452,
        vote_perc: 3.314184812,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 5761,
        vote_perc: 1.321133317,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 3805,
        vote_perc: 0.872576336,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 2436,
        vote_perc: 0.558632314,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 2,
        party_name: "UNITED CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "UCDP",
        votes: 1461,
        vote_perc: 0.335041794,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 936,
        vote_perc: 0.214646899,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 681,
        vote_perc: 0.156169378,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 957,
        party_name: "PATRIOTIC ALLIANCE",
        party_abbreviation: "PA",
        votes: 591,
        vote_perc: 0.135530254,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 478,
        vote_perc: 0.109616686,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 451,
        vote_perc: 0.103424948,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 450,
        vote_perc: 0.103195625,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 7,
    province_name: "Limpopo",
    registered_voters: 2438280,
    spoilt_votes: 20817,
    special_votes: 26418,
    percent_voter_turnout: 3.04,
    total_votes_cast: 1543986,
    total_valid_votes: 1523169,
    vd_count: 3065,
    vd_captured: 3065,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 1202905,
        vote_perc: 78.973836784,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 156488,
        vote_perc: 10.273843546,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 100562,
        vote_perc: 6.602156425,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 12478,
        vote_perc: 0.819213101,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 10269,
        vote_perc: 0.674186515,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 6611,
        vote_perc: 0.434029317,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 6306,
        vote_perc: 0.414005275,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 4841,
        vote_perc: 0.31782422,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 4340,
        vote_perc: 0.284932269,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 4044,
        vote_perc: 0.265499101,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 3949,
        vote_perc: 0.259262104,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 3692,
        vote_perc: 0.242389387,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 8,
    province_name: "North West",
    registered_voters: 1669349,
    spoilt_votes: 21095,
    special_votes: 25982,
    percent_voter_turnout: 2.26,
    total_votes_cast: 1147786,
    total_valid_votes: 1126691,
    vd_count: 1716,
    vd_captured: 1716,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 763804,
        vote_perc: 67.791790296,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 141902,
        vote_perc: 12.594580058,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 141150,
        vote_perc: 12.527835937,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 18120,
        vote_perc: 1.608249289,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 10845,
        vote_perc: 0.962553176,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 2,
        party_name: "UNITED CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "UCDP",
        votes: 10109,
        vote_perc: 0.897229143,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 8540,
        vote_perc: 0.757971795,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 8421,
        vote_perc: 0.747409893,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 5311,
        vote_perc: 0.471380352,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 4690,
        vote_perc: 0.416263199,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 3321,
        vote_perc: 0.294756948,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 1708,
        vote_perc: 0.151594359,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 591,
        party_name: "NATIONAL FREEDOM PARTY",
        party_abbreviation: "NFP",
        votes: 1519,
        vote_perc: 0.134819573,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 1326,
        vote_perc: 0.117689766,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 1297,
        vote_perc: 0.115115857,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 9,
    province_name: "Western Cape",
    registered_voters: 2941333,
    spoilt_votes: 20089,
    special_votes: 28016,
    percent_voter_turnout: 4.31,
    total_votes_cast: 2188236,
    total_valid_votes: 2168147,
    vd_count: 1578,
    vd_captured: 1578,
    party_ballot_results: [
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 1241424,
        vote_perc: 57.257372309,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 737219,
        vote_perc: 34.002260917,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 50280,
        vote_perc: 2.319030951,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 25318,
        vote_perc: 1.167725251,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 23243,
        vote_perc: 1.072021408,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 13833,
        vote_perc: 0.638010246,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 13052,
        vote_perc: 0.601988703,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 447,
        party_name: "AL JAMA-AH",
        party_abbreviation: "NO_ABBR",
        votes: 11376,
        vote_perc: 0.524687671,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 45,
        party_name: "INDEPENDENT CIVIC ORGANISATION OF SOUTH AFRICA",
        party_abbreviation: "ICOSA",
        votes: 11124,
        vote_perc: 0.513064843,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 9927,
        vote_perc: 0.457856409,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 957,
        party_name: "PATRIOTIC ALLIANCE",
        party_abbreviation: "PA",
        votes: 7996,
        vote_perc: 0.368794182,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 6987,
        vote_perc: 0.322256747,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 3963,
        vote_perc: 0.182782809,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 613,
        party_name: "UBUNTU PARTY",
        party_abbreviation: "UBUNTU",
        votes: 2211,
        vote_perc: 0.10197648,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 99,
    province_name: "Out of Country",
    registered_voters: 6789,
    spoilt_votes: 314,
    special_votes: 0,
    percent_voter_turnout: 0.04,
    total_votes_cast: 18446,
    total_valid_votes: 18132,
    vd_count: 1,
    vd_captured: 1,
    party_ballot_results: [
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 15311,
        vote_perc: 84.441870726,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 1508,
        vote_perc: 8.316787999,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 328,
        vote_perc: 1.808956541,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 255,
        vote_perc: 1.406353408,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 198,
        vote_perc: 1.091992058,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 184,
        vote_perc: 1.014780499,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 128,
        vote_perc: 0.70593426,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 52,
        vote_perc: 0.286785793,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 46,
        vote_perc: 0.253695125,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  }
], ll = {
  event_id: jr,
  event_name: Jr,
  registered_voters: Qr,
  spoilt_votes: Xr,
  special_votes: $r,
  total_votes_cast: el,
  total_valid_votes: tl,
  vd_count: al,
  vd_captured: nl,
  party_ballot_results: il,
  provincial_results: rl
}, ol = 699, sl = "2019 NATIONAL ELECTION", pl = 26756649, _l = 235472, fl = 570673, cl = 17672851, dl = 17437379, yl = 22925, ul = 22924, vl = [
  {
    party_id: 7,
    party_name: "AFRICAN NATIONAL CONGRESS",
    party_abbreviation: "ANC",
    votes: 10026475,
    vote_perc: 57.499897204,
    ballot_type: "National",
    independent: !1,
    seats: 230
  },
  {
    party_id: 52,
    party_name: "DEMOCRATIC ALLIANCE",
    party_abbreviation: "DA",
    votes: 3622531,
    vote_perc: 20.774515482,
    ballot_type: "National",
    independent: !1,
    seats: 84
  },
  {
    party_id: 945,
    party_name: "ECONOMIC FREEDOM FIGHTERS",
    party_abbreviation: "EFF",
    votes: 1882480,
    vote_perc: 10.795659141,
    ballot_type: "National",
    independent: !1,
    seats: 44
  },
  {
    party_id: 3,
    party_name: "INKATHA FREEDOM PARTY",
    party_abbreviation: "IFP",
    votes: 588839,
    vote_perc: 3.376877913,
    ballot_type: "National",
    independent: !1,
    seats: 14
  },
  {
    party_id: 4,
    party_name: "VRYHEIDSFRONT PLUS",
    party_abbreviation: "VF PLUS",
    votes: 414864,
    vote_perc: 2.379164896,
    ballot_type: "National",
    independent: !1,
    seats: 10
  },
  {
    party_id: 18,
    party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
    party_abbreviation: "ACDP",
    votes: 146262,
    vote_perc: 0.838784315,
    ballot_type: "National",
    independent: !1,
    seats: 4
  },
  {
    party_id: 6,
    party_name: "UNITED DEMOCRATIC MOVEMENT",
    party_abbreviation: "UDM",
    votes: 78030,
    vote_perc: 0.447486976,
    ballot_type: "National",
    independent: !1,
    seats: 2
  },
  {
    party_id: 1318,
    party_name: "AFRICAN TRANSFORMATION MOVEMENT",
    party_abbreviation: "ATM",
    votes: 76830,
    vote_perc: 0.440605208,
    ballot_type: "National",
    independent: !1,
    seats: 2
  },
  {
    party_id: 1368,
    party_name: "GOOD",
    party_abbreviation: "GOOD",
    votes: 70408,
    vote_perc: 0.403776279,
    ballot_type: "National",
    independent: !1,
    seats: 2
  },
  {
    party_id: 591,
    party_name: "NATIONAL FREEDOM PARTY",
    party_abbreviation: "NFP",
    votes: 61220,
    vote_perc: 0.351084873,
    ballot_type: "National",
    independent: !1,
    seats: 2
  },
  {
    party_id: 330,
    party_name: "AFRICAN INDEPENDENT CONGRESS",
    party_abbreviation: "AIC",
    votes: 48107,
    vote_perc: 0.275884352,
    ballot_type: "National",
    independent: !1,
    seats: 2
  },
  {
    party_id: 499,
    party_name: "CONGRESS  OF THE PEOPLE",
    party_abbreviation: "COPE",
    votes: 47461,
    vote_perc: 0.272179666,
    ballot_type: "National",
    independent: !1,
    seats: 2
  },
  {
    party_id: 8,
    party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
    party_abbreviation: "PAC",
    votes: 32677,
    vote_perc: 0.187396282,
    ballot_type: "National",
    independent: !1,
    seats: 1
  },
  {
    party_id: 447,
    party_name: "AL JAMA-AH",
    party_abbreviation: "ALJAMA",
    votes: 31468,
    vote_perc: 0.180462901,
    ballot_type: "National",
    independent: !1,
    seats: 1
  },
  {
    party_id: 1274,
    party_name: "AFRICAN SECURITY CONGRESS",
    party_abbreviation: "ASC",
    votes: 26262,
    vote_perc: 0.150607497,
    ballot_type: "National",
    independent: !1,
    seats: 0
  },
  {
    party_id: 1331,
    party_name: "SOCIALIST REVOLUTIONARY WORKERS PARTY",
    party_abbreviation: "SRWP",
    votes: 24439,
    vote_perc: 0.140152944,
    ballot_type: "National",
    independent: !1,
    seats: 0
  },
  {
    party_id: 1146,
    party_name: "BLACK FIRST LAND FIRST",
    party_abbreviation: "BLF",
    votes: 19796,
    vote_perc: 0.113526236,
    ballot_type: "National",
    independent: !1,
    seats: 0
  },
  {
    party_id: 450,
    party_name: "AFRICAN PEOPLE'S CONVENTION",
    party_abbreviation: "APC",
    votes: 19593,
    vote_perc: 0.11236207,
    ballot_type: "National",
    independent: !1,
    seats: 0
  },
  {
    party_id: 1357,
    party_name: "AFRIKAN ALLIANCE OF SOCIAL DEMOCRATS",
    party_abbreviation: "AASD",
    votes: 18834,
    vote_perc: 0.108009352,
    ballot_type: "National",
    independent: !1,
    seats: 0
  }
], bl = [
  {
    province_id: 1,
    province_name: "Eastern Cape",
    registered_voters: 3363161,
    spoilt_votes: 32291,
    special_votes: 86329,
    percent_voter_turnout: 3.85,
    total_votes_cast: 2052818,
    total_valid_votes: 2020527,
    vd_count: 4791,
    vd_captured: 4790,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 1399455,
        vote_perc: 69.261880688,
        ballot_type: "National",
        independent: !1,
        seats: 18
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 303309,
        vote_perc: 15.011380694,
        ballot_type: "National",
        independent: !1,
        seats: 4
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 155899,
        vote_perc: 7.715759304,
        ballot_type: "National",
        independent: !1,
        seats: 2
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 46258,
        vote_perc: 2.289402715,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 1318,
        party_name: "AFRICAN TRANSFORMATION MOVEMENT",
        party_abbreviation: "ATM",
        votes: 27935,
        vote_perc: 1.382560094,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 17699,
        vote_perc: 0.875959589,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 9947,
        vote_perc: 0.492297307,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 8134,
        vote_perc: 0.402568241,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 7844,
        vote_perc: 0.38821555,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 4902,
        vote_perc: 0.242609973,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1333,
        party_name: "ALLIANCE FOR TRANSFORMATION FOR ALL",
        party_abbreviation: "ATA",
        votes: 4577,
        vote_perc: 0.22652506,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1331,
        party_name: "SOCIALIST REVOLUTIONARY WORKERS PARTY",
        party_abbreviation: "SRWP",
        votes: 4448,
        vote_perc: 0.220140587,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1368,
        party_name: "GOOD",
        party_abbreviation: "GOOD",
        votes: 4445,
        vote_perc: 0.219992111,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1274,
        party_name: "AFRICAN SECURITY CONGRESS",
        party_abbreviation: "ASC",
        votes: 4427,
        vote_perc: 0.219101254,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1357,
        party_name: "AFRIKAN ALLIANCE OF SOCIAL DEMOCRATS",
        party_abbreviation: "AASD",
        votes: 3229,
        vote_perc: 0.159809792,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 2,
    province_name: "Free State",
    registered_voters: 1462508,
    spoilt_votes: 12337,
    special_votes: 50812,
    percent_voter_turnout: 1.72,
    total_votes_cast: 919549,
    total_valid_votes: 907212,
    vd_count: 1529,
    vd_captured: 1529,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 570980,
        vote_perc: 62.93788001,
        ballot_type: "National",
        independent: !1,
        seats: 8
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 154686,
        vote_perc: 17.050700388,
        ballot_type: "National",
        independent: !1,
        seats: 2
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 105228,
        vote_perc: 11.599052923,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 33660,
        vote_perc: 3.710268383,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1318,
        party_name: "AFRICAN TRANSFORMATION MOVEMENT",
        party_abbreviation: "ATM",
        votes: 6100,
        vote_perc: 0.672389695,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 4214,
        vote_perc: 0.464500029,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 3790,
        vote_perc: 0.417763433,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 3387,
        vote_perc: 0.373341622,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 957,
        party_name: "PATRIOTIC ALLIANCE",
        party_abbreviation: "PA",
        votes: 3383,
        vote_perc: 0.372900711,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1292,
        party_name: "AFRICAN DEMOCRATIC CHANGE",
        party_abbreviation: "ADEC",
        votes: 3136,
        vote_perc: 0.34567444,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1357,
        party_name: "AFRIKAN ALLIANCE OF SOCIAL DEMOCRATS",
        party_abbreviation: "AASD",
        votes: 2404,
        vote_perc: 0.264987677,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1331,
        party_name: "SOCIALIST REVOLUTIONARY WORKERS PARTY",
        party_abbreviation: "SRWP",
        votes: 1366,
        vote_perc: 0.150571201,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 1359,
        vote_perc: 0.149799606,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1370,
        party_name: "AFRICAN CONTENT MOVEMENT",
        party_abbreviation: "ACM",
        votes: 1308,
        vote_perc: 0.144177987,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 1196,
        vote_perc: 0.131832471,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1274,
        party_name: "AFRICAN SECURITY CONGRESS",
        party_abbreviation: "ASC",
        votes: 1158,
        vote_perc: 0.127643814,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 1036,
        vote_perc: 0.11419602,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 1004,
        vote_perc: 0.11066873,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 3,
    province_name: "Gauteng",
    registered_voters: 6381220,
    spoilt_votes: 42883,
    special_votes: 95853,
    percent_voter_turnout: 8.58,
    total_votes_cast: 4580285,
    total_valid_votes: 4537402,
    vd_count: 2771,
    vd_captured: 2771,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 2413979,
        vote_perc: 53.20178816,
        ballot_type: "National",
        independent: !1,
        seats: 26
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 1112990,
        vote_perc: 24.529235012,
        ballot_type: "National",
        independent: !1,
        seats: 12
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 613704,
        vote_perc: 13.525449145,
        ballot_type: "National",
        independent: !1,
        seats: 7
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 175152,
        vote_perc: 3.860182545,
        ballot_type: "National",
        independent: !1,
        seats: 2
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 45840,
        vote_perc: 1.010269753,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 36249,
        vote_perc: 0.798893287,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 13160,
        vote_perc: 0.290033812,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 12358,
        vote_perc: 0.272358499,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 10842,
        vote_perc: 0.238947309,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1368,
        party_name: "GOOD",
        party_abbreviation: "GOOD",
        votes: 9983,
        vote_perc: 0.220015771,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1318,
        party_name: "AFRICAN TRANSFORMATION MOVEMENT",
        party_abbreviation: "ATM",
        votes: 9948,
        vote_perc: 0.219244405,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 9715,
        vote_perc: 0.214109307,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1379,
        party_name: "CAPITALIST PARTY OF SOUTH AFRICA",
        party_abbreviation: "ZACP",
        votes: 7515,
        vote_perc: 0.165623412,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 447,
        party_name: "AL JAMA-AH",
        party_abbreviation: "ALJAMA",
        votes: 7064,
        vote_perc: 0.155683803,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1146,
        party_name: "BLACK FIRST LAND FIRST",
        party_abbreviation: "BLF",
        votes: 7009,
        vote_perc: 0.154471656,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1331,
        party_name: "SOCIALIST REVOLUTIONARY WORKERS PARTY",
        party_abbreviation: "SRWP",
        votes: 5903,
        vote_perc: 0.130096474,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 4,
    province_name: "KwaZulu-Natal",
    registered_voters: 5524666,
    spoilt_votes: 63408,
    special_votes: 78033,
    percent_voter_turnout: 6.96,
    total_votes_cast: 3715985,
    total_valid_votes: 3652577,
    vd_count: 4885,
    vd_captured: 4885,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 2026069,
        vote_perc: 55.469576685,
        ballot_type: "National",
        independent: !1,
        seats: 24
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 532563,
        vote_perc: 14.58047291,
        ballot_type: "National",
        independent: !1,
        seats: 6
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 520169,
        vote_perc: 14.241150837,
        ballot_type: "National",
        independent: !1,
        seats: 6
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 363832,
        vote_perc: 9.960967284,
        ballot_type: "National",
        independent: !1,
        seats: 4
      },
      {
        party_id: 591,
        party_name: "NATIONAL FREEDOM PARTY",
        party_abbreviation: "NFP",
        votes: 52431,
        vote_perc: 1.435452285,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 17524,
        vote_perc: 0.479770858,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 16460,
        vote_perc: 0.450640739,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1318,
        party_name: "AFRICAN TRANSFORMATION MOVEMENT",
        party_abbreviation: "ATM",
        votes: 16109,
        vote_perc: 0.441031086,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 10118,
        vote_perc: 0.277009903,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 31,
        party_name: "MINORITY FRONT",
        party_abbreviation: "MF",
        votes: 9792,
        vote_perc: 0.268084697,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1274,
        party_name: "AFRICAN SECURITY CONGRESS",
        party_abbreviation: "ASC",
        votes: 8493,
        vote_perc: 0.232520765,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1146,
        party_name: "BLACK FIRST LAND FIRST",
        party_abbreviation: "BLF",
        votes: 7998,
        vote_perc: 0.21896869,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1036,
        party_name: "DEMOCRATIC LIBERAL CONGRESS",
        party_abbreviation: "DLC",
        votes: 7181,
        vote_perc: 0.19660092,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 447,
        party_name: "AL JAMA-AH",
        party_abbreviation: "ALJAMA",
        votes: 5731,
        vote_perc: 0.156902921,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 5101,
        vote_perc: 0.139654825,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1357,
        party_name: "AFRIKAN ALLIANCE OF SOCIAL DEMOCRATS",
        party_abbreviation: "AASD",
        votes: 5099,
        vote_perc: 0.139600069,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1331,
        party_name: "SOCIALIST REVOLUTIONARY WORKERS PARTY",
        party_abbreviation: "SRWP",
        votes: 4173,
        vote_perc: 0.114248105,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 3677,
        vote_perc: 0.100668651,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 5,
    province_name: "Mpumalanga",
    registered_voters: 1951776,
    spoilt_votes: 18929,
    special_votes: 56466,
    percent_voter_turnout: 2.42,
    total_votes_cast: 1290908,
    total_valid_votes: 1271979,
    vd_count: 1772,
    vd_captured: 1772,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 918756,
        vote_perc: 72.230437767,
        ballot_type: "National",
        independent: !1,
        seats: 12
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 146426,
        vote_perc: 11.511668039,
        ballot_type: "National",
        independent: !1,
        seats: 2
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 116050,
        vote_perc: 9.123578298,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 33842,
        vote_perc: 2.660578516,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 651,
        party_name: "BETTER RESIDENTS ASSOCIATION",
        party_abbreviation: "BRA",
        votes: 6971,
        vote_perc: 0.548043639,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 6375,
        vote_perc: 0.50118752,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1318,
        party_name: "AFRICAN TRANSFORMATION MOVEMENT",
        party_abbreviation: "ATM",
        votes: 5982,
        vote_perc: 0.470290783,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 3,
        party_name: "INKATHA FREEDOM PARTY",
        party_abbreviation: "IFP",
        votes: 5786,
        vote_perc: 0.454881724,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 3945,
        vote_perc: 0.31014663,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 3358,
        vote_perc: 0.263998069,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1378,
        party_name: "SOUTH AFRICAN NATIONAL CONGRESS OF TRADITIONAL AUTHORITIES",
        party_abbreviation: "SANCOTA",
        votes: 2336,
        vote_perc: 0.183650831,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1274,
        party_name: "AFRICAN SECURITY CONGRESS",
        party_abbreviation: "ASC",
        votes: 2207,
        vote_perc: 0.173509154,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 1947,
        vote_perc: 0.153068565,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1331,
        party_name: "SOCIALIST REVOLUTIONARY WORKERS PARTY",
        party_abbreviation: "SRWP",
        votes: 1797,
        vote_perc: 0.141275917,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1357,
        party_name: "AFRIKAN ALLIANCE OF SOCIAL DEMOCRATS",
        party_abbreviation: "AASD",
        votes: 1591,
        vote_perc: 0.125080681,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 1516,
        vote_perc: 0.119184358,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 591,
        party_name: "NATIONAL FREEDOM PARTY",
        party_abbreviation: "NFP",
        votes: 1499,
        vote_perc: 0.117847858,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 6,
    province_name: "Northern Cape",
    registered_voters: 626471,
    spoilt_votes: 6406,
    special_votes: 44497,
    percent_voter_turnout: 0.78,
    total_votes_cast: 417248,
    total_valid_votes: 410842,
    vd_count: 707,
    vd_captured: 707,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 239221,
        vote_perc: 58.227006976,
        ballot_type: "National",
        independent: !1,
        seats: 3
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 99977,
        vote_perc: 24.334659066,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 39879,
        vote_perc: 9.706651219,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 13522,
        vote_perc: 3.291289596,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 3413,
        vote_perc: 0.830732983,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 3143,
        vote_perc: 0.765014288,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1368,
        party_name: "GOOD",
        party_abbreviation: "GOOD",
        votes: 3088,
        vote_perc: 0.751627146,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 1597,
        vote_perc: 0.388713909,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1318,
        party_name: "AFRICAN TRANSFORMATION MOVEMENT",
        party_abbreviation: "ATM",
        votes: 612,
        vote_perc: 0.148962375,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 586,
        vote_perc: 0.142633908,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1274,
        party_name: "AFRICAN SECURITY CONGRESS",
        party_abbreviation: "ASC",
        votes: 574,
        vote_perc: 0.139713077,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1331,
        party_name: "SOCIALIST REVOLUTIONARY WORKERS PARTY",
        party_abbreviation: "SRWP",
        votes: 527,
        vote_perc: 0.128273156,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1357,
        party_name: "AFRIKAN ALLIANCE OF SOCIAL DEMOCRATS",
        party_abbreviation: "AASD",
        votes: 464,
        vote_perc: 0.112938794,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 417,
        vote_perc: 0.101498873,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 7,
    province_name: "Limpopo",
    registered_voters: 2608460,
    spoilt_votes: 20269,
    special_votes: 67274,
    percent_voter_turnout: 2.87,
    total_votes_cast: 1530837,
    total_valid_votes: 1510568,
    vd_count: 3157,
    vd_captured: 3157,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 1163091,
        vote_perc: 76.996930956,
        ballot_type: "National",
        independent: !1,
        seats: 15
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 198439,
        vote_perc: 13.136714137,
        ballot_type: "National",
        independent: !1,
        seats: 3
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 81066,
        vote_perc: 5.36659058,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 24042,
        vote_perc: 1.591586741,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 5241,
        vote_perc: 0.346955582,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 450,
        party_name: "AFRICAN PEOPLE'S CONVENTION",
        party_abbreviation: "APC",
        votes: 4403,
        vote_perc: 0.291479761,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 3999,
        vote_perc: 0.264734855,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 3233,
        vote_perc: 0.214025453,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 3134,
        vote_perc: 0.207471627,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1318,
        party_name: "AFRICAN TRANSFORMATION MOVEMENT",
        party_abbreviation: "ATM",
        votes: 2839,
        vote_perc: 0.187942549,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 17,
        party_name: "AZANIAN PEOPLE'S ORGANISATION",
        party_abbreviation: "AZAPO",
        votes: 2215,
        vote_perc: 0.146633584,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 603,
        party_name: "SOUTH AFRICAN MAINTANANCE AND ESTATE BENEFICIARIES ASSOCIATI",
        party_abbreviation: "SAMEBA",
        votes: 1809,
        vote_perc: 0.119756277,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1274,
        party_name: "AFRICAN SECURITY CONGRESS",
        party_abbreviation: "ASC",
        votes: 1745,
        vote_perc: 0.11551946,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 1607,
        vote_perc: 0.106383824,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1357,
        party_name: "AFRIKAN ALLIANCE OF SOCIAL DEMOCRATS",
        party_abbreviation: "AASD",
        votes: 1592,
        vote_perc: 0.10539082,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 8,
    province_name: "North West",
    registered_voters: 1702728,
    spoilt_votes: 18030,
    special_votes: 44474,
    percent_voter_turnout: 1.9,
    total_votes_cast: 1012250,
    total_valid_votes: 994220,
    vd_count: 1733,
    vd_captured: 1733,
    party_ballot_results: [
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 633223,
        vote_perc: 63.690430689,
        ballot_type: "National",
        independent: !1,
        seats: 9
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 169880,
        vote_perc: 17.086761481,
        ballot_type: "National",
        independent: !1,
        seats: 2
      },
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 112417,
        vote_perc: 11.307054777,
        ballot_type: "National",
        independent: !1,
        seats: 2
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 40225,
        vote_perc: 4.045885217,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 4084,
        vote_perc: 0.410774275,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 4076,
        vote_perc: 0.409969624,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 3420,
        vote_perc: 0.343988252,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1016,
        party_name: "FORUM 4 SERVICE DELIVERY",
        party_abbreviation: "F4SD",
        votes: 2868,
        vote_perc: 0.288467341,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 2809,
        vote_perc: 0.282533041,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1318,
        party_name: "AFRICAN TRANSFORMATION MOVEMENT",
        party_abbreviation: "ATM",
        votes: 2535,
        vote_perc: 0.254973748,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1274,
        party_name: "AFRICAN SECURITY CONGRESS",
        party_abbreviation: "ASC",
        votes: 1831,
        vote_perc: 0.184164471,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1331,
        party_name: "SOCIALIST REVOLUTIONARY WORKERS PARTY",
        party_abbreviation: "SRWP",
        votes: 1736,
        vote_perc: 0.174609241,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 938,
        party_name: "AGANG SOUTH AFRICA",
        party_abbreviation: "AGANG SA",
        votes: 1418,
        vote_perc: 0.142624369,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1357,
        party_name: "AFRIKAN ALLIANCE OF SOCIAL DEMOCRATS",
        party_abbreviation: "AASD",
        votes: 1270,
        vote_perc: 0.127738328,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1368,
        party_name: "GOOD",
        party_abbreviation: "GOOD",
        votes: 1094,
        vote_perc: 0.110036008,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 1007,
        vote_perc: 0.10128543,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 9,
    province_name: "Western Cape",
    registered_voters: 3128567,
    spoilt_votes: 20892,
    special_votes: 46935,
    percent_voter_turnout: 4,
    total_votes_cast: 2133062,
    total_valid_votes: 2112170,
    vd_count: 1579,
    vd_captured: 1579,
    party_ballot_results: [
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 1107065,
        vote_perc: 52.413631479,
        ballot_type: "National",
        independent: !1,
        seats: 13
      },
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 659548,
        vote_perc: 31.226085022,
        ballot_type: "National",
        independent: !1,
        seats: 7
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 88428,
        vote_perc: 4.186594829,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 59354,
        vote_perc: 2.810095778,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 59147,
        vote_perc: 2.800295431,
        ballot_type: "National",
        independent: !1,
        seats: 1
      },
      {
        party_id: 1368,
        party_name: "GOOD",
        party_abbreviation: "GOOD",
        votes: 47283,
        vote_perc: 2.238598219,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 447,
        party_name: "AL JAMA-AH",
        party_abbreviation: "ALJAMA",
        votes: 15866,
        vote_perc: 0.751170597,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 9726,
        vote_perc: 0.460474299,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 45,
        party_name: "INDEPENDENT CIVIC ORGANISATION OF SOUTH AFRICA",
        party_abbreviation: "ICOSA",
        votes: 9033,
        vote_perc: 0.42766444,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 7650,
        vote_perc: 0.362186756,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1333,
        party_name: "ALLIANCE FOR TRANSFORMATION FOR ALL",
        party_abbreviation: "ATA",
        votes: 5378,
        vote_perc: 0.254619657,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1352,
        party_name: "LAND PARTY",
        party_abbreviation: "LAND",
        votes: 5348,
        vote_perc: 0.253199316,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1318,
        party_name: "AFRICAN TRANSFORMATION MOVEMENT",
        party_abbreviation: "ATM",
        votes: 4761,
        vote_perc: 0.225407993,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 4183,
        vote_perc: 0.198042771,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1379,
        party_name: "CAPITALIST PARTY OF SOUTH AFRICA",
        party_abbreviation: "ZACP",
        votes: 3822,
        vote_perc: 0.180951344,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1331,
        party_name: "SOCIALIST REVOLUTIONARY WORKERS PARTY",
        party_abbreviation: "SRWP",
        votes: 3201,
        vote_perc: 0.151550301,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 330,
        party_name: "AFRICAN INDEPENDENT CONGRESS",
        party_abbreviation: "AIC",
        votes: 3133,
        vote_perc: 0.148330864,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 591,
        party_name: "NATIONAL FREEDOM PARTY",
        party_abbreviation: "NFP",
        votes: 2245,
        vote_perc: 0.106288793,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  },
  {
    province_id: 99,
    province_name: "Out of Country",
    registered_voters: 7092,
    spoilt_votes: 27,
    special_votes: 0,
    percent_voter_turnout: 0.04,
    total_votes_cast: 19909,
    total_valid_votes: 19882,
    vd_count: 1,
    vd_captured: 1,
    party_ballot_results: [
      {
        party_id: 52,
        party_name: "DEMOCRATIC ALLIANCE",
        party_abbreviation: "DA",
        votes: 14802,
        vote_perc: 74.449250578,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 7,
        party_name: "AFRICAN NATIONAL CONGRESS",
        party_abbreviation: "ANC",
        votes: 2153,
        vote_perc: 10.828890454,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 4,
        party_name: "VRYHEIDSFRONT PLUS",
        party_abbreviation: "VF PLUS",
        votes: 908,
        vote_perc: 4.566944975,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 945,
        party_name: "ECONOMIC FREEDOM FIGHTERS",
        party_abbreviation: "EFF",
        votes: 765,
        vote_perc: 3.847701438,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 18,
        party_name: "AFRICAN CHRISTIAN DEMOCRATIC PARTY",
        party_abbreviation: "ACDP",
        votes: 338,
        vote_perc: 1.700030178,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1379,
        party_name: "CAPITALIST PARTY OF SOUTH AFRICA",
        party_abbreviation: "ZACP",
        votes: 232,
        vote_perc: 1.166884619,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 499,
        party_name: "CONGRESS  OF THE PEOPLE",
        party_abbreviation: "COPE",
        votes: 182,
        vote_perc: 0.915400865,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 6,
        party_name: "UNITED DEMOCRATIC MOVEMENT",
        party_abbreviation: "UDM",
        votes: 118,
        vote_perc: 0.59350166,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1368,
        party_name: "GOOD",
        party_abbreviation: "GOOD",
        votes: 110,
        vote_perc: 0.553264259,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 917,
        party_name: "FRONT NASIONAAL/FRONT NATIONAL",
        party_abbreviation: "FN",
        votes: 47,
        vote_perc: 0.236394729,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 469,
        party_name: "WOMEN FORWARD",
        party_abbreviation: "WF",
        votes: 34,
        vote_perc: 0.171008953,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 8,
        party_name: "PAN AFRICANIST CONGRESS OF AZANIA",
        party_abbreviation: "PAC",
        votes: 33,
        vote_perc: 0.165979278,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 447,
        party_name: "AL JAMA-AH",
        party_abbreviation: "ALJAMA",
        votes: 30,
        vote_perc: 0.150890252,
        ballot_type: "National",
        independent: !1,
        seats: 0
      },
      {
        party_id: 1331,
        party_name: "SOCIALIST REVOLUTIONARY WORKERS PARTY",
        party_abbreviation: "SRWP",
        votes: 22,
        vote_perc: 0.110652852,
        ballot_type: "National",
        independent: !1,
        seats: 0
      }
    ]
  }
], Nl = {
  event_id: ol,
  event_name: sl,
  registered_voters: pl,
  spoilt_votes: _l,
  special_votes: fl,
  total_votes_cast: cl,
  total_valid_votes: dl,
  vd_count: yl,
  vd_captured: ul,
  party_ballot_results: vl,
  provincial_results: bl
}, la = "https://iec-api.revengine.dailymaverick.co.za";
async function pt({ year: t = 2024, election: e = "National Assembly", region: a = "National" }) {
  let n = `${la}/national/${t}`;
  return e === "National Assembly" ? t === 2009 ? qr : t === 2014 ? ll : t === 2019 ? Nl : await Wa(n) : (a === "National" ? n = `${la}/provincial/${t}` : n = `${la}/provincial/${t}/${a}`, await Wa(n));
}
async function Wa(t) {
  const e = await fetch(t);
  if (!e.ok)
    throw new Error(`Failed to load data from ${t}`);
  try {
    return await e.json();
  } catch {
    throw new Error(`Failed to parse data from ${t}`);
  }
}
function Vt(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Al(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Vi(t) {
  let e, a, n;
  t.length !== 2 ? (e = Vt, a = (o, s) => Vt(t(o), s), n = (o, s) => t(o) - s) : (e = t === Vt || t === Al ? t : hl, a = t, n = t);
  function i(o, s, p = 0, _ = o.length) {
    if (p < _) {
      if (e(s, s) !== 0)
        return _;
      do {
        const f = p + _ >>> 1;
        a(o[f], s) < 0 ? p = f + 1 : _ = f;
      } while (p < _);
    }
    return p;
  }
  function r(o, s, p = 0, _ = o.length) {
    if (p < _) {
      if (e(s, s) !== 0)
        return _;
      do {
        const f = p + _ >>> 1;
        a(o[f], s) <= 0 ? p = f + 1 : _ = f;
      } while (p < _);
    }
    return p;
  }
  function l(o, s, p = 0, _ = o.length) {
    const f = i(o, s, p, _ - 1);
    return f > p && n(o[f - 1], s) > -n(o[f], s) ? f - 1 : f;
  }
  return { left: i, center: l, right: r };
}
function hl() {
  return 0;
}
function ml(t) {
  return t === null ? NaN : +t;
}
const El = Vi(Vt), gl = El.right;
Vi(ml).center;
function Cl(t, e) {
  let a, n;
  if (e === void 0)
    for (const i of t)
      i != null && (a === void 0 ? i >= i && (a = n = i) : (a > i && (a = i), n < i && (n = i)));
  else {
    let i = -1;
    for (let r of t)
      (r = e(r, ++i, t)) != null && (a === void 0 ? r >= r && (a = n = r) : (a > r && (a = r), n < r && (n = r)));
  }
  return [a, n];
}
class _t {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(e) {
    const a = this._partials;
    let n = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const r = a[i], l = e + r, o = Math.abs(e) < Math.abs(r) ? e - (l - r) : r - (l - e);
      o && (a[n++] = o), e = l;
    }
    return a[n] = e, this._n = n + 1, this;
  }
  valueOf() {
    const e = this._partials;
    let a = this._n, n, i, r, l = 0;
    if (a > 0) {
      for (l = e[--a]; a > 0 && (n = l, i = e[--a], l = n + i, r = i - (l - n), !r); )
        ;
      a > 0 && (r < 0 && e[a - 1] < 0 || r > 0 && e[a - 1] > 0) && (i = r * 2, n = l + i, i == n - l && (l = n));
    }
    return l;
  }
}
const Il = Math.sqrt(50), Ol = Math.sqrt(10), Rl = Math.sqrt(2);
function xt(t, e, a) {
  const n = (e - t) / Math.max(0, a), i = Math.floor(Math.log10(n)), r = n / Math.pow(10, i), l = r >= Il ? 10 : r >= Ol ? 5 : r >= Rl ? 2 : 1;
  let o, s, p;
  return i < 0 ? (p = Math.pow(10, -i) / l, o = Math.round(t * p), s = Math.round(e * p), o / p < t && ++o, s / p > e && --s, p = -p) : (p = Math.pow(10, i) * l, o = Math.round(t / p), s = Math.round(e / p), o * p < t && ++o, s * p > e && --s), s < o && 0.5 <= a && a < 2 ? xt(t, e, a * 2) : [o, s, p];
}
function Sl(t, e, a) {
  if (e = +e, t = +t, a = +a, !(a > 0))
    return [];
  if (t === e)
    return [t];
  const n = e < t, [i, r, l] = n ? xt(e, t, a) : xt(t, e, a);
  if (!(r >= i))
    return [];
  const o = r - i + 1, s = new Array(o);
  if (n)
    if (l < 0)
      for (let p = 0; p < o; ++p)
        s[p] = (r - p) / -l;
    else
      for (let p = 0; p < o; ++p)
        s[p] = (r - p) * l;
  else if (l < 0)
    for (let p = 0; p < o; ++p)
      s[p] = (i + p) / -l;
  else
    for (let p = 0; p < o; ++p)
      s[p] = (i + p) * l;
  return s;
}
function ya(t, e, a) {
  return e = +e, t = +t, a = +a, xt(t, e, a)[2];
}
function Tl(t, e, a) {
  e = +e, t = +t, a = +a;
  const n = e < t, i = n ? ya(e, t, a) : ya(t, e, a);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function* Pl(t) {
  for (const e of t)
    yield* e;
}
function Ml(t) {
  return Array.from(Pl(t));
}
var lt = 1e-6, Pa = Math.PI, Fl = Pa * 2, Dl = 180 / Pa, wl = Pa / 180, ot = Math.abs, Ll = Math.cos, kl = Math.sin, Ma = Math.sqrt;
function Ce() {
}
function Zt(t, e) {
  t && Ka.hasOwnProperty(t.type) && Ka[t.type](t, e);
}
var za = {
  Feature: function(t, e) {
    Zt(t.geometry, e);
  },
  FeatureCollection: function(t, e) {
    for (var a = t.features, n = -1, i = a.length; ++n < i; )
      Zt(a[n].geometry, e);
  }
}, Ka = {
  Sphere: function(t, e) {
    e.sphere();
  },
  Point: function(t, e) {
    t = t.coordinates, e.point(t[0], t[1], t[2]);
  },
  MultiPoint: function(t, e) {
    for (var a = t.coordinates, n = -1, i = a.length; ++n < i; )
      t = a[n], e.point(t[0], t[1], t[2]);
  },
  LineString: function(t, e) {
    ua(t.coordinates, e, 0);
  },
  MultiLineString: function(t, e) {
    for (var a = t.coordinates, n = -1, i = a.length; ++n < i; )
      ua(a[n], e, 0);
  },
  Polygon: function(t, e) {
    qa(t.coordinates, e);
  },
  MultiPolygon: function(t, e) {
    for (var a = t.coordinates, n = -1, i = a.length; ++n < i; )
      qa(a[n], e);
  },
  GeometryCollection: function(t, e) {
    for (var a = t.geometries, n = -1, i = a.length; ++n < i; )
      Zt(a[n], e);
  }
};
function ua(t, e, a) {
  var n = -1, i = t.length - a, r;
  for (e.lineStart(); ++n < i; )
    r = t[n], e.point(r[0], r[1], r[2]);
  e.lineEnd();
}
function qa(t, e) {
  var a = -1, n = t.length;
  for (e.polygonStart(); ++a < n; )
    ua(t[a], e, 1);
  e.polygonEnd();
}
function tt(t, e) {
  t && za.hasOwnProperty(t.type) ? za[t.type](t, e) : Zt(t, e);
}
function Gl() {
  var t = [], e;
  return {
    point: function(a, n, i) {
      e.push([a, n, i]);
    },
    lineStart: function() {
      t.push(e = []);
    },
    lineEnd: Ce,
    rejoin: function() {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function() {
      var a = t;
      return t = [], e = null, a;
    }
  };
}
function Hl(t, e) {
  return ot(t[0] - e[0]) < lt && ot(t[1] - e[1]) < lt;
}
function Ft(t, e, a, n) {
  this.x = t, this.z = e, this.o = a, this.e = n, this.v = !1, this.n = this.p = null;
}
function Vl(t, e, a, n, i) {
  var r = [], l = [], o, s;
  if (t.forEach(function(u) {
    if (!((N = u.length - 1) <= 0)) {
      var N, b = u[0], v = u[N], E;
      if (Hl(b, v)) {
        if (!b[2] && !v[2]) {
          for (i.lineStart(), o = 0; o < N; ++o)
            i.point((b = u[o])[0], b[1]);
          i.lineEnd();
          return;
        }
        v[0] += 2 * lt;
      }
      r.push(E = new Ft(b, u, null, !0)), l.push(E.o = new Ft(b, null, E, !1)), r.push(E = new Ft(v, u, null, !1)), l.push(E.o = new Ft(v, null, E, !0));
    }
  }), !!r.length) {
    for (l.sort(e), ja(r), ja(l), o = 0, s = l.length; o < s; ++o)
      l[o].e = a = !a;
    for (var p = r[0], _, f; ; ) {
      for (var c = p, y = !0; c.v; )
        if ((c = c.n) === p)
          return;
      _ = c.z, i.lineStart();
      do {
        if (c.v = c.o.v = !0, c.e) {
          if (y)
            for (o = 0, s = _.length; o < s; ++o)
              i.point((f = _[o])[0], f[1]);
          else
            n(c.x, c.n.x, 1, i);
          c = c.n;
        } else {
          if (y)
            for (_ = c.p.z, o = _.length - 1; o >= 0; --o)
              i.point((f = _[o])[0], f[1]);
          else
            n(c.x, c.p.x, -1, i);
          c = c.p;
        }
        c = c.o, _ = c.z, y = !y;
      } while (!c.v);
      i.lineEnd();
    }
  }
}
function ja(t) {
  if (e = t.length) {
    for (var e, a = 0, n = t[0], i; ++a < e; )
      n.n = i = t[a], i.p = n, n = i;
    n.n = i = t[0], i.p = n;
  }
}
function Ul(t, e, a, n, i, r) {
  var l = t[0], o = t[1], s = e[0], p = e[1], _ = 0, f = 1, c = s - l, y = p - o, u;
  if (u = a - l, !(!c && u > 0)) {
    if (u /= c, c < 0) {
      if (u < _)
        return;
      u < f && (f = u);
    } else if (c > 0) {
      if (u > f)
        return;
      u > _ && (_ = u);
    }
    if (u = i - l, !(!c && u < 0)) {
      if (u /= c, c < 0) {
        if (u > f)
          return;
        u > _ && (_ = u);
      } else if (c > 0) {
        if (u < _)
          return;
        u < f && (f = u);
      }
      if (u = n - o, !(!y && u > 0)) {
        if (u /= y, y < 0) {
          if (u < _)
            return;
          u < f && (f = u);
        } else if (y > 0) {
          if (u > f)
            return;
          u > _ && (_ = u);
        }
        if (u = r - o, !(!y && u < 0)) {
          if (u /= y, y < 0) {
            if (u > f)
              return;
            u > _ && (_ = u);
          } else if (y > 0) {
            if (u < _)
              return;
            u < f && (f = u);
          }
          return _ > 0 && (t[0] = l + _ * c, t[1] = o + _ * y), f < 1 && (e[0] = l + f * c, e[1] = o + f * y), !0;
        }
      }
    }
  }
}
var ut = 1e9, Dt = -ut;
function Yl(t, e, a, n) {
  function i(p, _) {
    return t <= p && p <= a && e <= _ && _ <= n;
  }
  function r(p, _, f, c) {
    var y = 0, u = 0;
    if (p == null || (y = l(p, f)) !== (u = l(_, f)) || s(p, _) < 0 ^ f > 0)
      do
        c.point(y === 0 || y === 3 ? t : a, y > 1 ? n : e);
      while ((y = (y + f + 4) % 4) !== u);
    else
      c.point(_[0], _[1]);
  }
  function l(p, _) {
    return ot(p[0] - t) < lt ? _ > 0 ? 0 : 3 : ot(p[0] - a) < lt ? _ > 0 ? 2 : 1 : ot(p[1] - e) < lt ? _ > 0 ? 1 : 0 : _ > 0 ? 3 : 2;
  }
  function o(p, _) {
    return s(p.x, _.x);
  }
  function s(p, _) {
    var f = l(p, 1), c = l(_, 1);
    return f !== c ? f - c : f === 0 ? _[1] - p[1] : f === 1 ? p[0] - _[0] : f === 2 ? p[1] - _[1] : _[0] - p[0];
  }
  return function(p) {
    var _ = p, f = Gl(), c, y, u, N, b, v, E, A, h, g, P, U = {
      point: G,
      lineStart: S,
      lineEnd: z,
      polygonStart: W,
      polygonEnd: M
    };
    function G(w, V) {
      i(w, V) && _.point(w, V);
    }
    function x() {
      for (var w = 0, V = 0, J = y.length; V < J; ++V)
        for (var ne = y[V], $ = 1, be = ne.length, le = ne[0], T, se, re = le[0], Q = le[1]; $ < be; ++$)
          T = re, se = Q, le = ne[$], re = le[0], Q = le[1], se <= n ? Q > n && (re - T) * (n - se) > (Q - se) * (t - T) && ++w : Q <= n && (re - T) * (n - se) < (Q - se) * (t - T) && --w;
      return w;
    }
    function W() {
      _ = f, c = [], y = [], P = !0;
    }
    function M() {
      var w = x(), V = P && w, J = (c = Ml(c)).length;
      (V || J) && (p.polygonStart(), V && (p.lineStart(), r(null, null, 1, p), p.lineEnd()), J && Vl(c, o, w, r, p), p.polygonEnd()), _ = p, c = y = u = null;
    }
    function S() {
      U.point = q, y && y.push(u = []), g = !0, h = !1, E = A = NaN;
    }
    function z() {
      c && (q(N, b), v && h && f.rejoin(), c.push(f.result())), U.point = G, h && _.lineEnd();
    }
    function q(w, V) {
      var J = i(w, V);
      if (y && u.push([w, V]), g)
        N = w, b = V, v = J, g = !1, J && (_.lineStart(), _.point(w, V));
      else if (J && h)
        _.point(w, V);
      else {
        var ne = [E = Math.max(Dt, Math.min(ut, E)), A = Math.max(Dt, Math.min(ut, A))], $ = [w = Math.max(Dt, Math.min(ut, w)), V = Math.max(Dt, Math.min(ut, V))];
        Ul(ne, $, t, e, a, n) ? (h || (_.lineStart(), _.point(ne[0], ne[1])), _.point($[0], $[1]), J || _.lineEnd(), P = !1) : J && (_.lineStart(), _.point(w, V), P = !1);
      }
      E = w, A = V, h = J;
    }
    return U;
  };
}
const va = (t) => t;
var oa = new _t(), ba = new _t(), Ui, Yi, Na, Aa, ke = {
  point: Ce,
  lineStart: Ce,
  lineEnd: Ce,
  polygonStart: function() {
    ke.lineStart = Bl, ke.lineEnd = Zl;
  },
  polygonEnd: function() {
    ke.lineStart = ke.lineEnd = ke.point = Ce, oa.add(ot(ba)), ba = new _t();
  },
  result: function() {
    var t = oa / 2;
    return oa = new _t(), t;
  }
};
function Bl() {
  ke.point = xl;
}
function xl(t, e) {
  ke.point = Bi, Ui = Na = t, Yi = Aa = e;
}
function Bi(t, e) {
  ba.add(Aa * t - Na * e), Na = t, Aa = e;
}
function Zl() {
  Bi(Ui, Yi);
}
var ft = 1 / 0, Wt = ft, Et = -ft, zt = Et, Kt = {
  point: Wl,
  lineStart: Ce,
  lineEnd: Ce,
  polygonStart: Ce,
  polygonEnd: Ce,
  result: function() {
    var t = [[ft, Wt], [Et, zt]];
    return Et = zt = -(Wt = ft = 1 / 0), t;
  }
};
function Wl(t, e) {
  t < ft && (ft = t), t > Et && (Et = t), e < Wt && (Wt = e), e > zt && (zt = e);
}
var ha = 0, ma = 0, vt = 0, qt = 0, jt = 0, at = 0, Ea = 0, ga = 0, bt = 0, xi, Zi, Fe, De, ge = {
  point: ze,
  lineStart: Ja,
  lineEnd: Qa,
  polygonStart: function() {
    ge.lineStart = ql, ge.lineEnd = jl;
  },
  polygonEnd: function() {
    ge.point = ze, ge.lineStart = Ja, ge.lineEnd = Qa;
  },
  result: function() {
    var t = bt ? [Ea / bt, ga / bt] : at ? [qt / at, jt / at] : vt ? [ha / vt, ma / vt] : [NaN, NaN];
    return ha = ma = vt = qt = jt = at = Ea = ga = bt = 0, t;
  }
};
function ze(t, e) {
  ha += t, ma += e, ++vt;
}
function Ja() {
  ge.point = zl;
}
function zl(t, e) {
  ge.point = Kl, ze(Fe = t, De = e);
}
function Kl(t, e) {
  var a = t - Fe, n = e - De, i = Ma(a * a + n * n);
  qt += i * (Fe + t) / 2, jt += i * (De + e) / 2, at += i, ze(Fe = t, De = e);
}
function Qa() {
  ge.point = ze;
}
function ql() {
  ge.point = Jl;
}
function jl() {
  Wi(xi, Zi);
}
function Jl(t, e) {
  ge.point = Wi, ze(xi = Fe = t, Zi = De = e);
}
function Wi(t, e) {
  var a = t - Fe, n = e - De, i = Ma(a * a + n * n);
  qt += i * (Fe + t) / 2, jt += i * (De + e) / 2, at += i, i = De * t - Fe * e, Ea += i * (Fe + t), ga += i * (De + e), bt += i * 3, ze(Fe = t, De = e);
}
function zi(t) {
  this._context = t;
}
zi.prototype = {
  _radius: 4.5,
  pointRadius: function(t) {
    return this._radius = t, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(t, e) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(t, e), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(t, e);
        break;
      }
      default: {
        this._context.moveTo(t + this._radius, e), this._context.arc(t, e, this._radius, 0, Fl);
        break;
      }
    }
  },
  result: Ce
};
var Ca = new _t(), sa, Ki, qi, Nt, At, gt = {
  point: Ce,
  lineStart: function() {
    gt.point = Ql;
  },
  lineEnd: function() {
    sa && ji(Ki, qi), gt.point = Ce;
  },
  polygonStart: function() {
    sa = !0;
  },
  polygonEnd: function() {
    sa = null;
  },
  result: function() {
    var t = +Ca;
    return Ca = new _t(), t;
  }
};
function Ql(t, e) {
  gt.point = ji, Ki = Nt = t, qi = At = e;
}
function ji(t, e) {
  Nt -= t, At -= e, Ca.add(Ma(Nt * Nt + At * At)), Nt = t, At = e;
}
let Xa, Jt, $a, en;
class tn {
  constructor(e) {
    this._append = e == null ? Ji : Xl(e), this._radius = 4.5, this._ = "";
  }
  pointRadius(e) {
    return this._radius = +e, this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    this._line === 0 && (this._ += "Z"), this._point = NaN;
  }
  point(e, a) {
    switch (this._point) {
      case 0: {
        this._append`M${e},${a}`, this._point = 1;
        break;
      }
      case 1: {
        this._append`L${e},${a}`;
        break;
      }
      default: {
        if (this._append`M${e},${a}`, this._radius !== $a || this._append !== Jt) {
          const n = this._radius, i = this._;
          this._ = "", this._append`m0,${n}a${n},${n} 0 1,1 0,${-2 * n}a${n},${n} 0 1,1 0,${2 * n}z`, $a = n, Jt = this._append, en = this._, this._ = i;
        }
        this._ += en;
        break;
      }
    }
  }
  result() {
    const e = this._;
    return this._ = "", e.length ? e : null;
  }
}
function Ji(t) {
  let e = 1;
  this._ += t[0];
  for (const a = t.length; e < a; ++e)
    this._ += arguments[e] + t[e];
}
function Xl(t) {
  const e = Math.floor(t);
  if (!(e >= 0))
    throw new RangeError(`invalid digits: ${t}`);
  if (e > 15)
    return Ji;
  if (e !== Xa) {
    const a = 10 ** e;
    Xa = e, Jt = function(i) {
      let r = 1;
      this._ += i[0];
      for (const l = i.length; r < l; ++r)
        this._ += Math.round(arguments[r] * a) / a + i[r];
    };
  }
  return Jt;
}
function Qi(t, e) {
  let a = 3, n = 4.5, i, r;
  function l(o) {
    return o && (typeof n == "function" && r.pointRadius(+n.apply(this, arguments)), tt(o, i(r))), r.result();
  }
  return l.area = function(o) {
    return tt(o, i(ke)), ke.result();
  }, l.measure = function(o) {
    return tt(o, i(gt)), gt.result();
  }, l.bounds = function(o) {
    return tt(o, i(Kt)), Kt.result();
  }, l.centroid = function(o) {
    return tt(o, i(ge)), ge.result();
  }, l.projection = function(o) {
    return arguments.length ? (i = o == null ? (t = null, va) : (t = o).stream, l) : t;
  }, l.context = function(o) {
    return arguments.length ? (r = o == null ? (e = null, new tn(a)) : new zi(e = o), typeof n != "function" && r.pointRadius(n), l) : e;
  }, l.pointRadius = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : (r.pointRadius(+o), +o), l) : n;
  }, l.digits = function(o) {
    if (!arguments.length)
      return a;
    if (o == null)
      a = null;
    else {
      const s = Math.floor(o);
      if (!(s >= 0))
        throw new RangeError(`invalid digits: ${o}`);
      a = s;
    }
    return e === null && (r = new tn(a)), l;
  }, l.projection(t).digits(a).context(e);
}
function $l(t) {
  return function(e) {
    var a = new Ia();
    for (var n in t)
      a[n] = t[n];
    return a.stream = e, a;
  };
}
function Ia() {
}
Ia.prototype = {
  constructor: Ia,
  point: function(t, e) {
    this.stream.point(t, e);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Fa(t, e, a) {
  var n = t.clipExtent && t.clipExtent();
  return t.scale(150).translate([0, 0]), n != null && t.clipExtent(null), tt(a, t.stream(Kt)), e(Kt.result()), n != null && t.clipExtent(n), t;
}
function Xi(t, e, a) {
  return Fa(t, function(n) {
    var i = e[1][0] - e[0][0], r = e[1][1] - e[0][1], l = Math.min(i / (n[1][0] - n[0][0]), r / (n[1][1] - n[0][1])), o = +e[0][0] + (i - l * (n[1][0] + n[0][0])) / 2, s = +e[0][1] + (r - l * (n[1][1] + n[0][1])) / 2;
    t.scale(150 * l).translate([o, s]);
  }, a);
}
function eo(t, e, a) {
  return Xi(t, [[0, 0], e], a);
}
function to(t, e, a) {
  return Fa(t, function(n) {
    var i = +e, r = i / (n[1][0] - n[0][0]), l = (i - r * (n[1][0] + n[0][0])) / 2, o = -r * n[0][1];
    t.scale(150 * r).translate([l, o]);
  }, a);
}
function ao(t, e, a) {
  return Fa(t, function(n) {
    var i = +e, r = i / (n[1][1] - n[0][1]), l = -r * n[0][0], o = (i - r * (n[1][1] + n[0][1])) / 2;
    t.scale(150 * r).translate([l, o]);
  }, a);
}
function $i() {
  var t = 1, e = 0, a = 0, n = 1, i = 1, r = 0, l, o, s = null, p, _, f, c = 1, y = 1, u = $l({
    point: function(h, g) {
      var P = A([h, g]);
      this.stream.point(P[0], P[1]);
    }
  }), N = va, b, v;
  function E() {
    return c = t * n, y = t * i, b = v = null, A;
  }
  function A(h) {
    var g = h[0] * c, P = h[1] * y;
    if (r) {
      var U = P * l - g * o;
      g = g * l + P * o, P = U;
    }
    return [g + e, P + a];
  }
  return A.invert = function(h) {
    var g = h[0] - e, P = h[1] - a;
    if (r) {
      var U = P * l + g * o;
      g = g * l - P * o, P = U;
    }
    return [g / c, P / y];
  }, A.stream = function(h) {
    return b && v === h ? b : b = u(N(v = h));
  }, A.postclip = function(h) {
    return arguments.length ? (N = h, s = p = _ = f = null, E()) : N;
  }, A.clipExtent = function(h) {
    return arguments.length ? (N = h == null ? (s = p = _ = f = null, va) : Yl(s = +h[0][0], p = +h[0][1], _ = +h[1][0], f = +h[1][1]), E()) : s == null ? null : [[s, p], [_, f]];
  }, A.scale = function(h) {
    return arguments.length ? (t = +h, E()) : t;
  }, A.translate = function(h) {
    return arguments.length ? (e = +h[0], a = +h[1], E()) : [e, a];
  }, A.angle = function(h) {
    return arguments.length ? (r = h % 360 * wl, o = kl(r), l = Ll(r), E()) : r * Dl;
  }, A.reflectX = function(h) {
    return arguments.length ? (n = h ? -1 : 1, E()) : n < 0;
  }, A.reflectY = function(h) {
    return arguments.length ? (i = h ? -1 : 1, E()) : i < 0;
  }, A.fitExtent = function(h, g) {
    return Xi(A, h, g);
  }, A.fitSize = function(h, g) {
    return eo(A, h, g);
  }, A.fitWidth = function(h, g) {
    return to(A, h, g);
  }, A.fitHeight = function(h, g) {
    return ao(A, h, g);
  }, A;
}
const no = [
  { region: "Eastern Cape", seat: 25 },
  { region: "Free State", seat: 11 },
  { region: "Gauteng", seat: 48 },
  { region: "KwaZulu-Natal", seat: 41 },
  { region: "Limpopo", seat: 19 },
  { region: "Mpumalanga", seat: 15 },
  { region: "North West", seat: 13 },
  { region: "Northern Cape", seat: 5 },
  { region: "Western Cape", seat: 23 }
];
function io(t) {
  let e, a;
  return {
    c() {
      e = L("svg"), a = L("path"), d(a, "d", "M98.2999 1.49498L99.0134 1.10378L98.7818 0.681228H98.2999V1.49498ZM168.932 138.244C168.932 140.641 170.875 142.584 173.272 142.584C175.669 142.584 177.612 140.641 177.612 138.244C177.612 135.847 175.669 133.904 173.272 133.904C170.875 133.904 168.932 135.847 168.932 138.244ZM0.236328 2.30873H98.2999V0.681228H0.236328V2.30873ZM97.5863 1.88618L172.558 138.635L173.986 137.853L99.0134 1.10378L97.5863 1.88618Z"), d(a, "fill", "black"), d(e, "width", "160"), d(e, "height", "120"), d(e, "viewBox", "0 0 178 143"), d(e, "fill", "none"), d(e, "xmlns", "http://www.w3.org/2000/svg"), d(e, "class", "svelte-bu5kp");
    },
    m(n, i) {
      R(n, e, i), m(e, a);
    },
    p: ie,
    i: ie,
    o: ie,
    d(n) {
      n && O(e);
    }
  };
}
class ro extends Ee {
  constructor(e) {
    super(), me(this, e, null, io, Ne, {});
  }
}
const er = {
  ACTIONSA: "#06B616",
  ANC: "#FFCA0B",
  BOSA: "#EA8484",
  DA: "#145FA2",
  EFF: "#EB2A2D",
  "VF PLUS": "#25BDC8",
  GOOD: "#F36A14",
  IFP: "#FFF000",
  MK: "#A044AC",
  PA: "#774A17",
  RISE: "#000000",
  UDM: "#12F783"
}, an = [
  "#15616D",
  "#FCE3B0",
  "#B38FB7",
  "#C0ECCD"
];
let tr = [];
for (const [t, e] of Object.entries(er))
  tr.push({ party: t, color: e });
function Ke(t, e) {
  const a = tr.find((i) => t === i.party);
  return a ? a.color : an[e % an.length];
}
function nn(t, e, a) {
  const n = t.slice();
  return n[16] = e[a], n;
}
function rn(t) {
  let e, a = (
    /*hexagon_data*/
    t[4].province_id + ""
  ), n;
  return {
    c() {
      e = I("div"), n = B(a), d(e, "class", "electionengine-pr-head svelte-1v5o3vc"), H(
        e,
        "gauteng-heading",
        /*isGauteng*/
        t[7]
      );
    },
    m(i, r) {
      R(i, e, r), m(e, n);
    },
    p(i, r) {
      r & /*hexagon_data*/
      16 && a !== (a = /*hexagon_data*/
      i[4].province_id + "") && X(n, a), r & /*isGauteng*/
      128 && H(
        e,
        "gauteng-heading",
        /*isGauteng*/
        i[7]
      );
    },
    d(i) {
      i && O(e);
    }
  };
}
function ln(t) {
  let e, a;
  return e = new ro({}), {
    c() {
      Re(e.$$.fragment);
    },
    m(n, i) {
      Ae(e, n, i), a = !0;
    },
    i(n) {
      a || (k(e.$$.fragment, n), a = !0);
    },
    o(n) {
      K(e.$$.fragment, n), a = !1;
    },
    d(n) {
      he(e, n);
    }
  };
}
function on(t) {
  let e, a, n, i, r, l, o, s;
  function p(..._) {
    return (
      /*mouseover_handler*/
      t[13](
        /*seat*/
        t[16],
        ..._
      )
    );
  }
  return {
    c() {
      e = L("g"), a = L("svg"), n = L("g"), i = L("polygon"), d(i, "points", "5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"), d(n, "transform", "translate(1, 1)"), d(n, "fill", r = /*seat*/
      t[16].color), d(n, "fill-rule", "nonzero"), d(n, "stroke", "#444444"), d(a, "width", "12px"), d(a, "height", "13px"), d(a, "viewBox", "0 0 15 17"), d(a, "role", "img"), d(e, "transform", l = `
                  translate(` + /*offset*/
      (t[2] && /*seat*/
      t[16].row % 2 ? (
        /*seat*/
        t[16].col * 11 + 5
      ) : (
        /*seat*/
        t[16].col * 11
      )) + " " + /*offset*/
      (t[2] ? (
        /*seat*/
        t[16].row * 9
      ) : (
        /*seat*/
        t[16].row * 11
      )) + `)
              `);
    },
    m(_, f) {
      R(_, e, f), m(e, a), m(a, n), m(n, i), o || (s = [
        te(a, "mouseover", p),
        te(
          a,
          "focus",
          /*focus_handler*/
          t[12]
        )
      ], o = !0);
    },
    p(_, f) {
      t = _, f & /*seatsData*/
      32 && r !== (r = /*seat*/
      t[16].color) && d(n, "fill", r), f & /*offset, seatsData*/
      36 && l !== (l = `
                  translate(` + /*offset*/
      (t[2] && /*seat*/
      t[16].row % 2 ? (
        /*seat*/
        t[16].col * 11 + 5
      ) : (
        /*seat*/
        t[16].col * 11
      )) + " " + /*offset*/
      (t[2] ? (
        /*seat*/
        t[16].row * 9
      ) : (
        /*seat*/
        t[16].row * 11
      )) + `)
              `) && d(e, "transform", l);
    },
    d(_) {
      _ && O(e), o = !1, Pe(s);
    }
  };
}
function lo(t) {
  let e, a, n, i, r = (
    /*hexagon_data*/
    t[4].province_id + ""
  ), l, o, s, p, _, f, c, y = (
    /*hexagon_data*/
    (t[4].province_id === "Gauteng" || /*hexagon_data*/
    t[4].province_id === "KwaZulu-Natal") && rn(t)
  ), u = (
    /*isGauteng*/
    t[7] && !/*grid*/
    t[3] && ln()
  ), N = j(
    /*seatsData*/
    t[5]
  ), b = [];
  for (let v = 0; v < N.length; v += 1)
    b[v] = on(nn(t, N, v));
  return {
    c() {
      y && y.c(), e = F(), u && u.c(), a = F(), n = L("svg"), i = L("text"), l = B(r), o = L("svg");
      for (let v = 0; v < b.length; v += 1)
        b[v].c();
      d(i, "dx", "15"), d(i, "dy", "-4"), d(i, "base", ""), d(i, "class", "svelte-1v5o3vc"), d(o, "viewBox", s = "0 0 " + 12 * /*cols*/
      t[1] + " " + 12 * /*rows*/
      t[6]), d(n, "viewBox", p = "0 0 " + 12 * /*cols*/
      t[1] + " " + 12 * /*rows*/
      t[6]), d(n, "class", "electionengine-seatwrapper svelte-1v5o3vc"), d(n, "width", "140"), d(n, "height", "100"), d(n, "role", "img"), H(
        n,
        "gauteng",
        /*isGauteng*/
        t[7]
      );
    },
    m(v, E) {
      y && y.m(v, E), R(v, e, E), u && u.m(v, E), R(v, a, E), R(v, n, E), m(n, i), m(i, l), m(n, o);
      for (let A = 0; A < b.length; A += 1)
        b[A] && b[A].m(o, null);
      _ = !0, f || (c = te(
        n,
        "mouseleave",
        /*mouseleave_handler*/
        t[14]
      ), f = !0);
    },
    p(v, [E]) {
      if (/*hexagon_data*/
      v[4].province_id === "Gauteng" || /*hexagon_data*/
      v[4].province_id === "KwaZulu-Natal" ? y ? y.p(v, E) : (y = rn(v), y.c(), y.m(e.parentNode, e)) : y && (y.d(1), y = null), /*isGauteng*/
      v[7] && !/*grid*/
      v[3] ? u ? E & /*isGauteng, grid*/
      136 && k(u, 1) : (u = ln(), u.c(), k(u, 1), u.m(a.parentNode, a)) : u && (Ie(), K(u, 1, 1, () => {
        u = null;
      }), Oe()), (!_ || E & /*hexagon_data*/
      16) && r !== (r = /*hexagon_data*/
      v[4].province_id + "") && X(l, r), E & /*offset, seatsData, tooltipData*/
      37) {
        N = j(
          /*seatsData*/
          v[5]
        );
        let A;
        for (A = 0; A < N.length; A += 1) {
          const h = nn(v, N, A);
          b[A] ? b[A].p(h, E) : (b[A] = on(h), b[A].c(), b[A].m(o, null));
        }
        for (; A < b.length; A += 1)
          b[A].d(1);
        b.length = N.length;
      }
      (!_ || E & /*cols, rows*/
      66 && s !== (s = "0 0 " + 12 * /*cols*/
      v[1] + " " + 12 * /*rows*/
      v[6])) && d(o, "viewBox", s), (!_ || E & /*cols, rows*/
      66 && p !== (p = "0 0 " + 12 * /*cols*/
      v[1] + " " + 12 * /*rows*/
      v[6])) && d(n, "viewBox", p), (!_ || E & /*isGauteng*/
      128) && H(
        n,
        "gauteng",
        /*isGauteng*/
        v[7]
      );
    },
    i(v) {
      _ || (k(u), _ = !0);
    },
    o(v) {
      K(u), _ = !1;
    },
    d(v) {
      v && (O(e), O(a), O(n)), y && y.d(v), u && u.d(v), _e(b, v), f = !1, c();
    }
  };
}
function oo(t, e, a) {
  let n, i, r, { seats: l = [] } = e, { total_seats: o = 0 } = e, { cols: s = 8 } = e, { offset: p = !0 } = e, { grid: _ } = e, { hexagon_data: f } = e, { tooltipData: c } = e, y = [], u = 0;
  function N() {
    return Math.ceil(o / s);
  }
  function b(A) {
    Sr.call(this, t, A);
  }
  const v = (A, h) => {
    a(0, c = { ...A }), a(0, c.x = h.x, c), a(0, c.y = h.y, c);
  }, E = () => a(0, c = null);
  return t.$$set = (A) => {
    "seats" in A && a(8, l = A.seats), "total_seats" in A && a(9, o = A.total_seats), "cols" in A && a(1, s = A.cols), "offset" in A && a(2, p = A.offset), "grid" in A && a(3, _ = A.grid), "hexagon_data" in A && a(4, f = A.hexagon_data), "tooltipData" in A && a(0, c = A.tooltipData);
  }, t.$$.update = () => {
    t.$$.dirty & /*hexagon_data*/
    16 && a(7, n = f.province_id === "Gauteng"), t.$$.dirty & /*total_seats, cols, seats*/
    770 && a(11, i = () => {
      let A = [];
      for (let g = 0; g < o; g++) {
        const P = {
          i: g,
          party: {},
          color: "#FFFFFF",
          row: Math.floor(g / s),
          col: g % s
        };
        A.push(P);
      }
      let h = 0;
      for (let g of l)
        for (let P = 0; P < g.seats; P++)
          A[h].party = g, A[h].color = Ke(g.party_abbreviation, h), A[h].total_seats = o, h++;
      return A;
    }), t.$$.dirty & /*calculateSeats*/
    2048 && a(10, r = () => {
      a(6, u = N()), a(5, y = i());
    }), t.$$.dirty & /*init*/
    1024 && r();
  }, [
    c,
    s,
    p,
    _,
    f,
    y,
    u,
    n,
    l,
    o,
    r,
    i,
    b,
    v,
    E
  ];
}
class so extends Ee {
  constructor(e) {
    super(), me(this, e, oo, lo, Ne, {
      seats: 8,
      total_seats: 9,
      cols: 1,
      offset: 2,
      grid: 3,
      hexagon_data: 4,
      tooltipData: 0
    });
  }
}
function po(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function _o(t, { delay: e = 0, duration: a = 400, easing: n = Sa } = {}) {
  const i = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (r) => `opacity: ${r * i}`
  };
}
function fo(t, { delay: e = 0, duration: a = 400, easing: n = po, x: i = 0, y: r = 0, opacity: l = 0 } = {}) {
  const o = getComputedStyle(t), s = +o.opacity, p = o.transform === "none" ? "" : o.transform, _ = s * (1 - l), [f, c] = Za(i), [y, u] = Za(r);
  return {
    delay: e,
    duration: a,
    easing: n,
    css: (N, b) => `
			transform: ${p} translate(${(1 - N) * f}${c}, ${(1 - N) * y}${u});
			opacity: ${s - _ * b}`
  };
}
function sn(t) {
  return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function co(t) {
  let e, a, n, i, r, l, o = (
    /*tooltipData*/
    t[0].party.party_name + ""
  ), s, p, _, f, c, y, u, N, b, v, E, A = Math.round(
    /*tooltipData*/
    t[0].party.vote_perc
  ) + "", h, g, P, U, G, x, W, M = (
    /*tooltipData*/
    t[0].party.seats + ""
  ), S, z, q = (
    /*tooltipData*/
    t[0].total_seats + ""
  ), w, V, J, ne, $, be, le = sn(
    /*tooltipData*/
    t[0].party.votes
  ) + "", T, se, re, Q, oe, Ye, Be;
  return Ge(
    /*onwindowresize*/
    t[8]
  ), {
    c() {
      e = I("div"), a = I("div"), n = I("div"), i = I("div"), i.textContent = "Party:", r = F(), l = I("div"), s = B(o), p = F(), _ = I("div"), f = I("div"), f.textContent = "Percentage of Seats Won in Limpopo", c = F(), y = I("div"), u = I("div"), N = I("div"), b = I("div"), v = F(), E = I("span"), h = B(A), g = B("%"), P = F(), U = I("div"), G = I("div"), G.textContent = "Total Number of Seats Won in Limpopo", x = F(), W = I("div"), S = B(M), z = B(" / "), w = B(q), V = F(), J = I("div"), ne = I("div"), ne.textContent = "Total Votes", $ = F(), be = I("div"), T = B(le), d(i, "class", "electionengine-tooltip-thead svelte-z0ulgt"), d(l, "class", "electionengine-tooltip-tdata svelte-z0ulgt"), d(n, "class", "electionengine-tooltip-section svelte-z0ulgt"), d(f, "class", "electionengine-tooltip-thead svelte-z0ulgt"), d(b, "class", "electionengine-tooltip-inner svelte-z0ulgt"), ae(
        b,
        "width",
        /*tooltipData*/
        t[0].party.vote_perc + "%"
      ), ae(
        b,
        "background",
        /*tooltipData*/
        t[0].color
      ), d(N, "class", "electionengine-tooltip-outer svelte-z0ulgt"), d(u, "class", "electionengine-tooltip-range svelte-z0ulgt"), d(y, "class", "electionengine-tooltip-range-wrapper electionengine-tooltip-tdata svelte-z0ulgt"), d(_, "class", "electionengine-tooltip-section svelte-z0ulgt"), d(G, "class", "electionengine-tooltip-thead svelte-z0ulgt"), d(W, "class", "electionengine-tooltip-tdata svelte-z0ulgt"), d(U, "class", "electionengine-tooltip-section svelte-z0ulgt"), d(ne, "class", "electionengine-tooltip-thead svelte-z0ulgt"), d(be, "class", "electionengine-tooltip-tdata svelte-z0ulgt"), d(J, "class", "electionengine-tooltip-section svelte-z0ulgt"), d(a, "class", "electionengine-tooltip-container svelte-z0ulgt"), d(e, "class", "electionengine-tooltip-wrapper svelte-z0ulgt"), ae(
        e,
        "border-left-color",
        /*tooltipData*/
        t[0].color
      ), ae(
        e,
        "top",
        /*yPosition*/
        t[5] + "px"
      ), ae(
        e,
        "left",
        /*xPosition*/
        t[6] + "px"
      ), Ge(() => (
        /*div16_elementresize_handler*/
        t[9].call(e)
      ));
    },
    m(ee, pe) {
      R(ee, e, pe), m(e, a), m(a, n), m(n, i), m(n, r), m(n, l), m(l, s), m(a, p), m(a, _), m(_, f), m(_, c), m(_, y), m(y, u), m(u, N), m(N, b), m(y, v), m(y, E), m(E, h), m(E, g), m(a, P), m(a, U), m(U, G), m(U, x), m(U, W), m(W, S), m(W, z), m(W, w), m(a, V), m(a, J), m(J, ne), m(J, $), m(J, be), m(be, T), se = Er(
        e,
        /*div16_elementresize_handler*/
        t[9].bind(e)
      ), oe = !0, Ye || (Be = te(
        window,
        "resize",
        /*onwindowresize*/
        t[8]
      ), Ye = !0);
    },
    p(ee, [pe]) {
      (!oe || pe & /*tooltipData*/
      1) && o !== (o = /*tooltipData*/
      ee[0].party.party_name + "") && X(s, o), (!oe || pe & /*tooltipData*/
      1) && ae(
        b,
        "width",
        /*tooltipData*/
        ee[0].party.vote_perc + "%"
      ), (!oe || pe & /*tooltipData*/
      1) && ae(
        b,
        "background",
        /*tooltipData*/
        ee[0].color
      ), (!oe || pe & /*tooltipData*/
      1) && A !== (A = Math.round(
        /*tooltipData*/
        ee[0].party.vote_perc
      ) + "") && X(h, A), (!oe || pe & /*tooltipData*/
      1) && M !== (M = /*tooltipData*/
      ee[0].party.seats + "") && X(S, M), (!oe || pe & /*tooltipData*/
      1) && q !== (q = /*tooltipData*/
      ee[0].total_seats + "") && X(w, q), (!oe || pe & /*tooltipData*/
      1) && le !== (le = sn(
        /*tooltipData*/
        ee[0].party.votes
      ) + "") && X(T, le), (!oe || pe & /*tooltipData*/
      1) && ae(
        e,
        "border-left-color",
        /*tooltipData*/
        ee[0].color
      ), (!oe || pe & /*yPosition*/
      32) && ae(
        e,
        "top",
        /*yPosition*/
        ee[5] + "px"
      ), (!oe || pe & /*xPosition*/
      64) && ae(
        e,
        "left",
        /*xPosition*/
        ee[6] + "px"
      );
    },
    i(ee) {
      oe || (ee && Ge(() => {
        oe && (Q && Q.end(1), re = Dr(e, fo, { y: 10, duration: 200, delay: 200 }), re.start());
      }), oe = !0);
    },
    o(ee) {
      re && re.invalidate(), ee && (Q = wr(e, _o, {})), oe = !1;
    },
    d(ee) {
      ee && O(e), se(), ee && Q && Q.end(), Ye = !1, Be();
    }
  };
}
function yo(t, e, a) {
  let n, i, { tooltipData: r } = e, { grid: l } = e, o, s, p, _;
  const f = l ? 5 : 65, c = l ? 45 : 95;
  function y() {
    a(3, p = window.innerWidth), a(4, _ = window.innerHeight);
  }
  function u() {
    o = this.clientWidth, s = this.clientHeight, a(1, o), a(2, s);
  }
  return t.$$set = (N) => {
    "tooltipData" in N && a(0, r = N.tooltipData), "grid" in N && a(7, l = N.grid);
  }, t.$$.update = () => {
    t.$$.dirty & /*tooltipData, tooltipWidth, width*/
    11 && a(6, n = r.x + o + f > p ? r.x - o - f : r.x + f), t.$$.dirty & /*tooltipData, tooltipHeight, height*/
    21 && a(5, i = r.y + s + c > _ ? r.y - s - c : r.y - c);
  }, [
    r,
    o,
    s,
    p,
    _,
    i,
    n,
    l,
    y,
    u
  ];
}
class uo extends Ee {
  constructor(e) {
    super(), me(this, e, yo, co, Ne, { tooltipData: 0, grid: 7 });
  }
}
function pn(t, e, a) {
  const n = t.slice();
  return n[9] = e[a], n;
}
function _n(t) {
  let e, a, n, i, r;
  function l(s) {
    t[7](s);
  }
  let o = {
    seats: (
      /*hexagon_data*/
      t[9].province_result
    ),
    total_seats: (
      /*hexagon_data*/
      t[9].province_total_seats
    ),
    hexagon_data: (
      /*hexagon_data*/
      t[9]
    ),
    grid: (
      /*grid*/
      t[0]
    )
  };
  return (
    /*tooltipData*/
    t[1] !== void 0 && (o.tooltipData = /*tooltipData*/
    t[1]), a = new so({ props: o }), Le.push(() => Ue(a, "tooltipData", l)), {
      c() {
        e = I("div"), Re(a.$$.fragment), i = F(), d(e, "class", "electionengine-block svelte-1pqi3kv"), ae(
          e,
          "left",
          /*hexagon_data*/
          t[9].x - /*hexagon_data*/
          t[9].width / 2 + "px"
        ), ae(
          e,
          "top",
          /*hexagon_data*/
          t[9].y - /*hexagon_data*/
          t[9].height / 2 + "px"
        ), H(
          e,
          "electionengine-grid-aligncenter",
          /*grid*/
          t[0]
        );
      },
      m(s, p) {
        R(s, e, p), Ae(a, e, null), m(e, i), r = !0;
      },
      p(s, p) {
        const _ = {};
        p & /*cartogram_data*/
        4 && (_.seats = /*hexagon_data*/
        s[9].province_result), p & /*cartogram_data*/
        4 && (_.total_seats = /*hexagon_data*/
        s[9].province_total_seats), p & /*cartogram_data*/
        4 && (_.hexagon_data = /*hexagon_data*/
        s[9]), p & /*grid*/
        1 && (_.grid = /*grid*/
        s[0]), !n && p & /*tooltipData*/
        2 && (n = !0, _.tooltipData = /*tooltipData*/
        s[1], Ve(() => n = !1)), a.$set(_), (!r || p & /*cartogram_data*/
        4) && ae(
          e,
          "left",
          /*hexagon_data*/
          s[9].x - /*hexagon_data*/
          s[9].width / 2 + "px"
        ), (!r || p & /*cartogram_data*/
        4) && ae(
          e,
          "top",
          /*hexagon_data*/
          s[9].y - /*hexagon_data*/
          s[9].height / 2 + "px"
        ), (!r || p & /*grid*/
        1) && H(
          e,
          "electionengine-grid-aligncenter",
          /*grid*/
          s[0]
        );
      },
      i(s) {
        r || (k(a.$$.fragment, s), r = !0);
      },
      o(s) {
        K(a.$$.fragment, s), r = !1;
      },
      d(s) {
        s && O(e), he(a);
      }
    }
  );
}
function fn(t) {
  let e, a, n;
  function i(l) {
    t[8](l);
  }
  let r = { grid: (
    /*grid*/
    t[0]
  ) };
  return (
    /*tooltipData*/
    t[1] !== void 0 && (r.tooltipData = /*tooltipData*/
    t[1]), e = new uo({ props: r }), Le.push(() => Ue(e, "tooltipData", i)), {
      c() {
        Re(e.$$.fragment);
      },
      m(l, o) {
        Ae(e, l, o), n = !0;
      },
      p(l, o) {
        const s = {};
        o & /*grid*/
        1 && (s.grid = /*grid*/
        l[0]), !a && o & /*tooltipData*/
        2 && (a = !0, s.tooltipData = /*tooltipData*/
        l[1], Ve(() => a = !1)), e.$set(s);
      },
      i(l) {
        n || (k(e.$$.fragment, l), n = !0);
      },
      o(l) {
        K(e.$$.fragment, l), n = !1;
      },
      d(l) {
        he(e, l);
      }
    }
  );
}
function vo(t) {
  let e, a, n, i, r = j(
    /*cartogram_data*/
    t[2]
  ), l = [];
  for (let p = 0; p < r.length; p += 1)
    l[p] = _n(pn(t, r, p));
  const o = (p) => K(l[p], 1, 1, () => {
    l[p] = null;
  });
  let s = (
    /*tooltipData*/
    t[1] && fn(t)
  );
  return {
    c() {
      e = I("div");
      for (let p = 0; p < l.length; p += 1)
        l[p].c();
      a = F(), s && s.c(), n = Me(), d(e, "id", "electionengine-cartogram"), d(e, "class", "svelte-1pqi3kv"), H(
        e,
        "electionengine-mb-grid",
        /*grid*/
        t[0]
      );
    },
    m(p, _) {
      R(p, e, _);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(e, null);
      R(p, a, _), s && s.m(p, _), R(p, n, _), i = !0;
    },
    p(p, [_]) {
      if (_ & /*cartogram_data, grid, tooltipData*/
      7) {
        r = j(
          /*cartogram_data*/
          p[2]
        );
        let f;
        for (f = 0; f < r.length; f += 1) {
          const c = pn(p, r, f);
          l[f] ? (l[f].p(c, _), k(l[f], 1)) : (l[f] = _n(c), l[f].c(), k(l[f], 1), l[f].m(e, null));
        }
        for (Ie(), f = r.length; f < l.length; f += 1)
          o(f);
        Oe();
      }
      (!i || _ & /*grid*/
      1) && H(
        e,
        "electionengine-mb-grid",
        /*grid*/
        p[0]
      ), /*tooltipData*/
      p[1] ? s ? (s.p(p, _), _ & /*tooltipData*/
      2 && k(s, 1)) : (s = fn(p), s.c(), k(s, 1), s.m(n.parentNode, n)) : s && (Ie(), K(s, 1, 1, () => {
        s = null;
      }), Oe());
    },
    i(p) {
      if (!i) {
        for (let _ = 0; _ < r.length; _ += 1)
          k(l[_]);
        k(s), i = !0;
      }
    },
    o(p) {
      l = l.filter(Boolean);
      for (let _ = 0; _ < l.length; _ += 1)
        K(l[_]);
      K(s), i = !1;
    },
    d(p) {
      p && (O(e), O(a), O(n)), _e(l, p), s && s.d(p);
    }
  };
}
function bo(t, e, a) {
  let n, { path: i } = e, { provinces: r } = e, { grid: l } = e, { data: o } = e, s, p = {};
  function _(c) {
    s = c, a(1, s);
  }
  function f(c) {
    s = c, a(1, s);
  }
  return t.$$set = (c) => {
    "path" in c && a(3, i = c.path), "provinces" in c && a(4, r = c.provinces), "grid" in c && a(0, l = c.grid), "data" in c && a(5, o = c.data);
  }, t.$$.update = () => {
    t.$$.dirty & /*provinces, path, data*/
    56 && a(6, n = () => {
      a(2, p = r.map((c) => {
        const y = i.centroid(c), u = no.filter((h) => c.properties.PROVINCE === h.region)[0], N = o.filter((h) => c.properties.PROVINCE === h.province_name)[0].party_ballot_results.filter((h) => h.seats > 0), b = c.properties.PROVINCE, v = u.seat;
        return {
          province_id: b,
          province_total_seats: v,
          coords: y,
          region_seat: u,
          province_result: N,
          height: 50,
          width: 50,
          x: y[0],
          y: y[1]
        };
      }));
    }), t.$$.dirty & /*init*/
    64 && n();
  }, [
    l,
    s,
    p,
    i,
    r,
    o,
    n,
    _,
    f
  ];
}
class No extends Ee {
  constructor(e) {
    super(), me(this, e, bo, vo, Ne, { path: 3, provinces: 4, grid: 0, data: 5 });
  }
}
function cn(t, e, a) {
  const n = t.slice();
  return n[8] = e[a], n;
}
function dn(t) {
  let e, a, n, i, r, l = !/*grid*/
  t[3] && yn(t);
  function o(p) {
    t[7](p);
  }
  let s = {
    provinces: (
      /*provinces*/
      t[1]
    ),
    path: (
      /*path*/
      t[2]
    ),
    grid: (
      /*grid*/
      t[3]
    )
  };
  return (
    /*data*/
    t[0] !== void 0 && (s.data = /*data*/
    t[0]), n = new No({ props: s }), Le.push(() => Ue(n, "data", o)), {
      c() {
        e = I("div"), l && l.c(), a = F(), Re(n.$$.fragment), d(e, "class", "electionengine-svg-wrapper svelte-rkcw18");
      },
      m(p, _) {
        R(p, e, _), l && l.m(e, null), m(e, a), Ae(n, e, null), r = !0;
      },
      p(p, _) {
        /*grid*/
        p[3] ? l && (l.d(1), l = null) : l ? l.p(p, _) : (l = yn(p), l.c(), l.m(e, a));
        const f = {};
        _ & /*provinces*/
        2 && (f.provinces = /*provinces*/
        p[1]), _ & /*path*/
        4 && (f.path = /*path*/
        p[2]), _ & /*grid*/
        8 && (f.grid = /*grid*/
        p[3]), !i && _ & /*data*/
        1 && (i = !0, f.data = /*data*/
        p[0], Ve(() => i = !1)), n.$set(f);
      },
      i(p) {
        r || (k(n.$$.fragment, p), r = !0);
      },
      o(p) {
        K(n.$$.fragment, p), r = !1;
      },
      d(p) {
        p && O(e), l && l.d(), he(n);
      }
    }
  );
}
function yn(t) {
  let e, a, n = j(
    /*provinces*/
    t[1]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = un(cn(t, n, r));
  return {
    c() {
      e = L("svg"), a = L("g");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      d(a, "id", "saMap"), d(e, "class", "electionengine-map-svg svelte-rkcw18"), d(e, "width", ar), d(e, "height", nr);
    },
    m(r, l) {
      R(r, e, l), m(e, a);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(a, null);
    },
    p(r, l) {
      if (l & /*path, provinces*/
      6) {
        n = j(
          /*provinces*/
          r[1]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const s = cn(r, n, o);
          i[o] ? i[o].p(s, l) : (i[o] = un(s), i[o].c(), i[o].m(a, null));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && O(e), _e(i, r);
    }
  };
}
function un(t) {
  let e, a;
  return {
    c() {
      e = L("path"), d(e, "d", a = /*path*/
      t[2](
        /*province*/
        t[8]
      )), d(e, "fill", "#ECECEC"), d(e, "stroke", "white"), d(e, "stroke-width", "0.94");
    },
    m(n, i) {
      R(n, e, i);
    },
    p(n, i) {
      i & /*path, provinces*/
      6 && a !== (a = /*path*/
      n[2](
        /*province*/
        n[8]
      )) && d(e, "d", a);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Ao(t) {
  let e, a, n = (
    /*provinces*/
    t[1] && dn(t)
  );
  return {
    c() {
      n && n.c(), e = Me();
    },
    m(i, r) {
      n && n.m(i, r), R(i, e, r), a = !0;
    },
    p(i, [r]) {
      /*provinces*/
      i[1] ? n ? (n.p(i, r), r & /*provinces*/
      2 && k(n, 1)) : (n = dn(i), n.c(), k(n, 1), n.m(e.parentNode, e)) : n && (Ie(), K(n, 1, 1, () => {
        n = null;
      }), Oe());
    },
    i(i) {
      a || (k(n), a = !0);
    },
    o(i) {
      K(n), a = !1;
    },
    d(i) {
      i && O(e), n && n.d(i);
    }
  };
}
let ar = 600, nr = 600;
async function ho() {
  return (await fetch("https://iec-api.revengine.dailymaverick.co.za/maps/sa-province.smallest.min.json")).json();
}
function mo(t, e, a) {
  let n, i, r, { data: l } = e, { innerWidth: o } = e, s, p;
  dt(async () => {
    a(5, p = await ho()), a(1, s = p.features);
  });
  function _(f) {
    l = f, a(0, l);
  }
  return t.$$set = (f) => {
    "data" in f && a(0, l = f.data), "innerWidth" in f && a(4, o = f.innerWidth);
  }, t.$$.update = () => {
    t.$$.dirty & /*innerWidth*/
    16 && a(3, n = o < 630), t.$$.dirty & /*geo_data*/
    32 && a(6, i = $i().reflectY(!0).fitExtent([[20, 20], [ar, nr]], p)), t.$$.dirty & /*projection*/
    64 && a(2, r = Qi(i));
  }, [
    l,
    s,
    r,
    n,
    o,
    p,
    i,
    _
  ];
}
class Eo extends Ee {
  constructor(e) {
    super(), me(this, e, mo, Ao, Ne, { data: 0, innerWidth: 4 });
  }
}
function vn(t, e, a) {
  const n = t.slice();
  return n[4] = e[a], n;
}
function bn(t) {
  let e, a, n, i, r, l, o, s = (
    /*seat*/
    t[4].name + ""
  ), p, _, f = (
    /*seat*/
    t[4].seats + ""
  ), c, y, u;
  return {
    c() {
      e = I("div"), a = L("svg"), n = L("g"), i = L("polygon"), l = F(), o = I("div"), p = B(s), _ = B(" ["), c = B(f), y = B("]"), u = F(), d(i, "points", "5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"), d(n, "transform", "translate(1, 1)"), d(n, "fill", r = /*seat*/
      t[4].color), d(n, "fill-rule", "nonzero"), d(n, "stroke", "#444444"), d(a, "width", "12px"), d(a, "height", "13px"), d(o, "class", "electionengine-legend-partyname svelte-1kpvmh3"), d(e, "class", "party-wrapper svelte-1kpvmh3");
    },
    m(N, b) {
      R(N, e, b), m(e, a), m(a, n), m(n, i), m(e, l), m(e, o), m(o, p), m(o, _), m(o, c), m(o, y), m(e, u);
    },
    p(N, b) {
      b & /*sortedPartySeats*/
      1 && r !== (r = /*seat*/
      N[4].color) && d(n, "fill", r), b & /*sortedPartySeats*/
      1 && s !== (s = /*seat*/
      N[4].name + "") && X(p, s), b & /*sortedPartySeats*/
      1 && f !== (f = /*seat*/
      N[4].seats + "") && X(c, f);
    },
    d(N) {
      N && O(e);
    }
  };
}
function go(t) {
  let e, a, n, i, r = j(
    /*sortedPartySeats*/
    t[0]
  ), l = [];
  for (let o = 0; o < r.length; o += 1)
    l[o] = bn(vn(t, r, o));
  return {
    c() {
      e = I("div"), a = I("div"), a.textContent = "Legend: Party Colors", n = F(), i = I("div");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      d(a, "class", "electionengine-legend-heading svelte-1kpvmh3"), d(i, "class", "legend svelte-1kpvmh3"), d(e, "class", "legend-wrapper svelte-1kpvmh3");
    },
    m(o, s) {
      R(o, e, s), m(e, a), m(e, n), m(e, i);
      for (let p = 0; p < l.length; p += 1)
        l[p] && l[p].m(i, null);
    },
    p(o, [s]) {
      if (s & /*sortedPartySeats*/
      1) {
        r = j(
          /*sortedPartySeats*/
          o[0]
        );
        let p;
        for (p = 0; p < r.length; p += 1) {
          const _ = vn(o, r, p);
          l[p] ? l[p].p(_, s) : (l[p] = bn(_), l[p].c(), l[p].m(i, null));
        }
        for (; p < l.length; p += 1)
          l[p].d(1);
        l.length = r.length;
      }
    },
    i: ie,
    o: ie,
    d(o) {
      o && O(e), _e(l, o);
    }
  };
}
function Co(t) {
  const e = {};
  return t.forEach((a) => {
    a.party_ballot_results.forEach((n) => {
      e[n.party_abbreviation] ? e[n.party_abbreviation] += n.seats : e[n.party_abbreviation] = n.seats;
    });
  }), e;
}
function Io(t, e, a) {
  let n, { data: i } = e, r;
  for (const [l, o] of Object.entries(er))
    ;
  return t.$$set = (l) => {
    "data" in l && a(1, i = l.data);
  }, t.$$.update = () => {
    t.$$.dirty & /*data, sortedPartySeats*/
    3 && a(2, n = () => {
      const l = Co(i);
      return a(0, r = Object.keys(l).sort((o, s) => l[s] - l[o]).map((o, s) => ({
        name: o,
        seats: l[o],
        color: Ke(o, s)
      })).filter((o) => o.seats > 0)), r;
    }), t.$$.dirty & /*init*/
    4 && n();
  }, [r, i, n];
}
class Oo extends Ee {
  constructor(e) {
    super(), me(this, e, Io, go, Ne, { data: 1 });
  }
}
function Nn(t) {
  let e, a, n;
  function i(l) {
    t[2](l);
  }
  let r = {};
  return (
    /*data*/
    t[0] !== void 0 && (r.data = /*data*/
    t[0]), e = new Oo({ props: r }), Le.push(() => Ue(e, "data", i)), {
      c() {
        Re(e.$$.fragment);
      },
      m(l, o) {
        Ae(e, l, o), n = !0;
      },
      p(l, o) {
        const s = {};
        !a && o & /*data*/
        1 && (a = !0, s.data = /*data*/
        l[0], Ve(() => a = !1)), e.$set(s);
      },
      i(l) {
        n || (k(e.$$.fragment, l), n = !0);
      },
      o(l) {
        K(e.$$.fragment, l), n = !1;
      },
      d(l) {
        he(e, l);
      }
    }
  );
}
function An(t) {
  let e, a, n;
  function i(l) {
    t[3](l);
  }
  let r = { innerWidth: (
    /*innerWidth*/
    t[1]
  ) };
  return (
    /*data*/
    t[0] !== void 0 && (r.data = /*data*/
    t[0]), e = new Eo({ props: r }), Le.push(() => Ue(e, "data", i)), {
      c() {
        Re(e.$$.fragment);
      },
      m(l, o) {
        Ae(e, l, o), n = !0;
      },
      p(l, o) {
        const s = {};
        o & /*innerWidth*/
        2 && (s.innerWidth = /*innerWidth*/
        l[1]), !a && o & /*data*/
        1 && (a = !0, s.data = /*data*/
        l[0], Ve(() => a = !1)), e.$set(s);
      },
      i(l) {
        n || (k(e.$$.fragment, l), n = !0);
      },
      o(l) {
        K(e.$$.fragment, l), n = !1;
      },
      d(l) {
        he(e, l);
      }
    }
  );
}
function Ro(t) {
  let e, a, n, i, r, l = (
    /*data*/
    t[0] && Nn(t)
  ), o = (
    /*data*/
    t[0] && An(t)
  );
  return {
    c() {
      l && l.c(), e = F(), a = I("p"), a.textContent = `200 Regional Seats, divided between the regions* based on registered population, prior to the elections. The regions
  are contested by parties and independent candidates.`, n = F(), o && o.c(), i = Me(), d(a, "class", "svelte-1oxvhsg");
    },
    m(s, p) {
      l && l.m(s, p), R(s, e, p), R(s, a, p), R(s, n, p), o && o.m(s, p), R(s, i, p), r = !0;
    },
    p(s, [p]) {
      /*data*/
      s[0] ? l ? (l.p(s, p), p & /*data*/
      1 && k(l, 1)) : (l = Nn(s), l.c(), k(l, 1), l.m(e.parentNode, e)) : l && (Ie(), K(l, 1, 1, () => {
        l = null;
      }), Oe()), /*data*/
      s[0] ? o ? (o.p(s, p), p & /*data*/
      1 && k(o, 1)) : (o = An(s), o.c(), k(o, 1), o.m(i.parentNode, i)) : o && (Ie(), K(o, 1, 1, () => {
        o = null;
      }), Oe());
    },
    i(s) {
      r || (k(l), k(o), r = !0);
    },
    o(s) {
      K(l), K(o), r = !1;
    },
    d(s) {
      s && (O(e), O(a), O(n), O(i)), l && l.d(s), o && o.d(s);
    }
  };
}
function So(t, e, a) {
  let { data: n } = e, { innerWidth: i } = e;
  function r(o) {
    n = o, a(0, n);
  }
  function l(o) {
    n = o, a(0, n);
  }
  return t.$$set = (o) => {
    "data" in o && a(0, n = o.data), "innerWidth" in o && a(1, i = o.innerWidth);
  }, [n, i, r, l];
}
class To extends Ee {
  constructor(e) {
    super(), me(this, e, So, Ro, Ne, { data: 0, innerWidth: 1 });
  }
}
function Po(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function Da(t, e, a) {
  t.prototype = e.prototype = a, a.constructor = t;
}
function ir(t, e) {
  var a = Object.create(t.prototype);
  for (var n in e)
    a[n] = e[n];
  return a;
}
function St() {
}
var Ct = 0.7, Qt = 1 / Ct, st = "\\s*([+-]?\\d+)\\s*", It = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", we = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Mo = /^#([0-9a-f]{3,8})$/, Fo = new RegExp(`^rgb\\(${st},${st},${st}\\)$`), Do = new RegExp(`^rgb\\(${we},${we},${we}\\)$`), wo = new RegExp(`^rgba\\(${st},${st},${st},${It}\\)$`), Lo = new RegExp(`^rgba\\(${we},${we},${we},${It}\\)$`), ko = new RegExp(`^hsl\\(${It},${we},${we}\\)$`), Go = new RegExp(`^hsla\\(${It},${we},${we},${It}\\)$`), hn = {
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
  yellowgreen: 10145074
};
Da(St, Ot, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: mn,
  // Deprecated! Use color.formatHex.
  formatHex: mn,
  formatHex8: Ho,
  formatHsl: Vo,
  formatRgb: En,
  toString: En
});
function mn() {
  return this.rgb().formatHex();
}
function Ho() {
  return this.rgb().formatHex8();
}
function Vo() {
  return rr(this).formatHsl();
}
function En() {
  return this.rgb().formatRgb();
}
function Ot(t) {
  var e, a;
  return t = (t + "").trim().toLowerCase(), (e = Mo.exec(t)) ? (a = e[1].length, e = parseInt(e[1], 16), a === 6 ? gn(e) : a === 3 ? new ve(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : a === 8 ? wt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : a === 4 ? wt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Fo.exec(t)) ? new ve(e[1], e[2], e[3], 1) : (e = Do.exec(t)) ? new ve(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = wo.exec(t)) ? wt(e[1], e[2], e[3], e[4]) : (e = Lo.exec(t)) ? wt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ko.exec(t)) ? On(e[1], e[2] / 100, e[3] / 100, 1) : (e = Go.exec(t)) ? On(e[1], e[2] / 100, e[3] / 100, e[4]) : hn.hasOwnProperty(t) ? gn(hn[t]) : t === "transparent" ? new ve(NaN, NaN, NaN, 0) : null;
}
function gn(t) {
  return new ve(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function wt(t, e, a, n) {
  return n <= 0 && (t = e = a = NaN), new ve(t, e, a, n);
}
function Uo(t) {
  return t instanceof St || (t = Ot(t)), t ? (t = t.rgb(), new ve(t.r, t.g, t.b, t.opacity)) : new ve();
}
function Rt(t, e, a, n) {
  return arguments.length === 1 ? Uo(t) : new ve(t, e, a, n ?? 1);
}
function ve(t, e, a, n) {
  this.r = +t, this.g = +e, this.b = +a, this.opacity = +n;
}
Da(ve, Rt, ir(St, {
  brighter(t) {
    return t = t == null ? Qt : Math.pow(Qt, t), new ve(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ct : Math.pow(Ct, t), new ve(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ve(Ze(this.r), Ze(this.g), Ze(this.b), Xt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Cn,
  // Deprecated! Use color.formatHex.
  formatHex: Cn,
  formatHex8: Yo,
  formatRgb: In,
  toString: In
}));
function Cn() {
  return `#${xe(this.r)}${xe(this.g)}${xe(this.b)}`;
}
function Yo() {
  return `#${xe(this.r)}${xe(this.g)}${xe(this.b)}${xe((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function In() {
  const t = Xt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ze(this.r)}, ${Ze(this.g)}, ${Ze(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Xt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ze(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function xe(t) {
  return t = Ze(t), (t < 16 ? "0" : "") + t.toString(16);
}
function On(t, e, a, n) {
  return n <= 0 ? t = e = a = NaN : a <= 0 || a >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Te(t, e, a, n);
}
function rr(t) {
  if (t instanceof Te)
    return new Te(t.h, t.s, t.l, t.opacity);
  if (t instanceof St || (t = Ot(t)), !t)
    return new Te();
  if (t instanceof Te)
    return t;
  t = t.rgb();
  var e = t.r / 255, a = t.g / 255, n = t.b / 255, i = Math.min(e, a, n), r = Math.max(e, a, n), l = NaN, o = r - i, s = (r + i) / 2;
  return o ? (e === r ? l = (a - n) / o + (a < n) * 6 : a === r ? l = (n - e) / o + 2 : l = (e - a) / o + 4, o /= s < 0.5 ? r + i : 2 - r - i, l *= 60) : o = s > 0 && s < 1 ? 0 : l, new Te(l, o, s, t.opacity);
}
function lr(t, e, a, n) {
  return arguments.length === 1 ? rr(t) : new Te(t, e, a, n ?? 1);
}
function Te(t, e, a, n) {
  this.h = +t, this.s = +e, this.l = +a, this.opacity = +n;
}
Da(Te, lr, ir(St, {
  brighter(t) {
    return t = t == null ? Qt : Math.pow(Qt, t), new Te(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ct : Math.pow(Ct, t), new Te(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, a = this.l, n = a + (a < 0.5 ? a : 1 - a) * e, i = 2 * a - n;
    return new ve(
      pa(t >= 240 ? t - 240 : t + 120, i, n),
      pa(t, i, n),
      pa(t < 120 ? t + 240 : t - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Te(Rn(this.h), Lt(this.s), Lt(this.l), Xt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Xt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Rn(this.h)}, ${Lt(this.s) * 100}%, ${Lt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Rn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Lt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function pa(t, e, a) {
  return (t < 60 ? e + (a - e) * t / 60 : t < 180 ? a : t < 240 ? e + (a - e) * (240 - t) / 60 : e) * 255;
}
const wa = (t) => () => t;
function Bo(t, e) {
  return function(a) {
    return t + a * e;
  };
}
function xo(t, e, a) {
  return t = Math.pow(t, a), e = Math.pow(e, a) - t, a = 1 / a, function(n) {
    return Math.pow(t + n * e, a);
  };
}
function Zo(t) {
  return (t = +t) == 1 ? or : function(e, a) {
    return a - e ? xo(e, a, t) : wa(isNaN(e) ? a : e);
  };
}
function or(t, e) {
  var a = e - t;
  return a ? Bo(t, a) : wa(isNaN(t) ? e : t);
}
const Sn = function t(e) {
  var a = Zo(e);
  function n(i, r) {
    var l = a((i = Rt(i)).r, (r = Rt(r)).r), o = a(i.g, r.g), s = a(i.b, r.b), p = or(i.opacity, r.opacity);
    return function(_) {
      return i.r = l(_), i.g = o(_), i.b = s(_), i.opacity = p(_), i + "";
    };
  }
  return n.gamma = t, n;
}(1);
function Wo(t, e) {
  e || (e = []);
  var a = t ? Math.min(e.length, t.length) : 0, n = e.slice(), i;
  return function(r) {
    for (i = 0; i < a; ++i)
      n[i] = t[i] * (1 - r) + e[i] * r;
    return n;
  };
}
function zo(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ko(t, e) {
  var a = e ? e.length : 0, n = t ? Math.min(a, t.length) : 0, i = new Array(n), r = new Array(a), l;
  for (l = 0; l < n; ++l)
    i[l] = La(t[l], e[l]);
  for (; l < a; ++l)
    r[l] = e[l];
  return function(o) {
    for (l = 0; l < n; ++l)
      r[l] = i[l](o);
    return r;
  };
}
function qo(t, e) {
  var a = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(n) {
    return a.setTime(t * (1 - n) + e * n), a;
  };
}
function $t(t, e) {
  return t = +t, e = +e, function(a) {
    return t * (1 - a) + e * a;
  };
}
function jo(t, e) {
  var a = {}, n = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? a[i] = La(t[i], e[i]) : n[i] = e[i];
  return function(r) {
    for (i in a)
      n[i] = a[i](r);
    return n;
  };
}
var Oa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, _a = new RegExp(Oa.source, "g");
function Jo(t) {
  return function() {
    return t;
  };
}
function Qo(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Xo(t, e) {
  var a = Oa.lastIndex = _a.lastIndex = 0, n, i, r, l = -1, o = [], s = [];
  for (t = t + "", e = e + ""; (n = Oa.exec(t)) && (i = _a.exec(e)); )
    (r = i.index) > a && (r = e.slice(a, r), o[l] ? o[l] += r : o[++l] = r), (n = n[0]) === (i = i[0]) ? o[l] ? o[l] += i : o[++l] = i : (o[++l] = null, s.push({ i: l, x: $t(n, i) })), a = _a.lastIndex;
  return a < e.length && (r = e.slice(a), o[l] ? o[l] += r : o[++l] = r), o.length < 2 ? s[0] ? Qo(s[0].x) : Jo(e) : (e = s.length, function(p) {
    for (var _ = 0, f; _ < e; ++_)
      o[(f = s[_]).i] = f.x(p);
    return o.join("");
  });
}
function La(t, e) {
  var a = typeof e, n;
  return e == null || a === "boolean" ? wa(e) : (a === "number" ? $t : a === "string" ? (n = Ot(e)) ? (e = n, Sn) : Xo : e instanceof Ot ? Sn : e instanceof Date ? qo : zo(e) ? Wo : Array.isArray(e) ? Ko : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? jo : $t)(t, e);
}
function $o(t, e) {
  return t = +t, e = +e, function(a) {
    return Math.round(t * (1 - a) + e * a);
  };
}
function es(t) {
  return function() {
    return t;
  };
}
function ts(t) {
  return +t;
}
var Tn = [0, 1];
function nt(t) {
  return t;
}
function Ra(t, e) {
  return (e -= t = +t) ? function(a) {
    return (a - t) / e;
  } : es(isNaN(e) ? NaN : 0.5);
}
function as(t, e) {
  var a;
  return t > e && (a = t, t = e, e = a), function(n) {
    return Math.max(t, Math.min(e, n));
  };
}
function ns(t, e, a) {
  var n = t[0], i = t[1], r = e[0], l = e[1];
  return i < n ? (n = Ra(i, n), r = a(l, r)) : (n = Ra(n, i), r = a(r, l)), function(o) {
    return r(n(o));
  };
}
function is(t, e, a) {
  var n = Math.min(t.length, e.length) - 1, i = new Array(n), r = new Array(n), l = -1;
  for (t[n] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++l < n; )
    i[l] = Ra(t[l], t[l + 1]), r[l] = a(e[l], e[l + 1]);
  return function(o) {
    var s = gl(t, o, 1, n) - 1;
    return r[s](i[s](o));
  };
}
function rs(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ls() {
  var t = Tn, e = Tn, a = La, n, i, r, l = nt, o, s, p;
  function _() {
    var c = Math.min(t.length, e.length);
    return l !== nt && (l = as(t[0], t[c - 1])), o = c > 2 ? is : ns, s = p = null, f;
  }
  function f(c) {
    return c == null || isNaN(c = +c) ? r : (s || (s = o(t.map(n), e, a)))(n(l(c)));
  }
  return f.invert = function(c) {
    return l(i((p || (p = o(e, t.map(n), $t)))(c)));
  }, f.domain = function(c) {
    return arguments.length ? (t = Array.from(c, ts), _()) : t.slice();
  }, f.range = function(c) {
    return arguments.length ? (e = Array.from(c), _()) : e.slice();
  }, f.rangeRound = function(c) {
    return e = Array.from(c), a = $o, _();
  }, f.clamp = function(c) {
    return arguments.length ? (l = c ? !0 : nt, _()) : l !== nt;
  }, f.interpolate = function(c) {
    return arguments.length ? (a = c, _()) : a;
  }, f.unknown = function(c) {
    return arguments.length ? (r = c, f) : r;
  }, function(c, y) {
    return n = c, i = y, _();
  };
}
function os() {
  return ls()(nt, nt);
}
function ss(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function ea(t, e) {
  if ((a = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var a, n = t.slice(0, a);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +t.slice(a + 1)
  ];
}
function ct(t) {
  return t = ea(Math.abs(t)), t ? t[1] : NaN;
}
function ps(t, e) {
  return function(a, n) {
    for (var i = a.length, r = [], l = 0, o = t[0], s = 0; i > 0 && o > 0 && (s + o + 1 > n && (o = Math.max(1, n - s)), r.push(a.substring(i -= o, i + o)), !((s += o + 1) > n)); )
      o = t[l = (l + 1) % t.length];
    return r.reverse().join(e);
  };
}
function _s(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(a) {
      return t[+a];
    });
  };
}
var fs = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ta(t) {
  if (!(e = fs.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new ka({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
ta.prototype = ka.prototype;
function ka(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ka.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function cs(t) {
  e:
    for (var e = t.length, a = 1, n = -1, i; a < e; ++a)
      switch (t[a]) {
        case ".":
          n = i = a;
          break;
        case "0":
          n === 0 && (n = a), i = a;
          break;
        default:
          if (!+t[a])
            break e;
          n > 0 && (n = 0);
          break;
      }
  return n > 0 ? t.slice(0, n) + t.slice(i + 1) : t;
}
var sr;
function ds(t, e) {
  var a = ea(t, e);
  if (!a)
    return t + "";
  var n = a[0], i = a[1], r = i - (sr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, l = n.length;
  return r === l ? n : r > l ? n + new Array(r - l + 1).join("0") : r > 0 ? n.slice(0, r) + "." + n.slice(r) : "0." + new Array(1 - r).join("0") + ea(t, Math.max(0, e + r - 1))[0];
}
function Pn(t, e) {
  var a = ea(t, e);
  if (!a)
    return t + "";
  var n = a[0], i = a[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Mn = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: ss,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Pn(t * 100, e),
  r: Pn,
  s: ds,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Fn(t) {
  return t;
}
var Dn = Array.prototype.map, wn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ys(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Fn : ps(Dn.call(t.grouping, Number), t.thousands + ""), a = t.currency === void 0 ? "" : t.currency[0] + "", n = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", r = t.numerals === void 0 ? Fn : _s(Dn.call(t.numerals, String)), l = t.percent === void 0 ? "%" : t.percent + "", o = t.minus === void 0 ? "−" : t.minus + "", s = t.nan === void 0 ? "NaN" : t.nan + "";
  function p(f) {
    f = ta(f);
    var c = f.fill, y = f.align, u = f.sign, N = f.symbol, b = f.zero, v = f.width, E = f.comma, A = f.precision, h = f.trim, g = f.type;
    g === "n" ? (E = !0, g = "g") : Mn[g] || (A === void 0 && (A = 12), h = !0, g = "g"), (b || c === "0" && y === "=") && (b = !0, c = "0", y = "=");
    var P = N === "$" ? a : N === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "", U = N === "$" ? n : /[%p]/.test(g) ? l : "", G = Mn[g], x = /[defgprs%]/.test(g);
    A = A === void 0 ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function W(M) {
      var S = P, z = U, q, w, V;
      if (g === "c")
        z = G(M) + z, M = "";
      else {
        M = +M;
        var J = M < 0 || 1 / M < 0;
        if (M = isNaN(M) ? s : G(Math.abs(M), A), h && (M = cs(M)), J && +M == 0 && u !== "+" && (J = !1), S = (J ? u === "(" ? u : o : u === "-" || u === "(" ? "" : u) + S, z = (g === "s" ? wn[8 + sr / 3] : "") + z + (J && u === "(" ? ")" : ""), x) {
          for (q = -1, w = M.length; ++q < w; )
            if (V = M.charCodeAt(q), 48 > V || V > 57) {
              z = (V === 46 ? i + M.slice(q + 1) : M.slice(q)) + z, M = M.slice(0, q);
              break;
            }
        }
      }
      E && !b && (M = e(M, 1 / 0));
      var ne = S.length + M.length + z.length, $ = ne < v ? new Array(v - ne + 1).join(c) : "";
      switch (E && b && (M = e($ + M, $.length ? v - z.length : 1 / 0), $ = ""), y) {
        case "<":
          M = S + M + z + $;
          break;
        case "=":
          M = S + $ + M + z;
          break;
        case "^":
          M = $.slice(0, ne = $.length >> 1) + S + M + z + $.slice(ne);
          break;
        default:
          M = $ + S + M + z;
          break;
      }
      return r(M);
    }
    return W.toString = function() {
      return f + "";
    }, W;
  }
  function _(f, c) {
    var y = p((f = ta(f), f.type = "f", f)), u = Math.max(-8, Math.min(8, Math.floor(ct(c) / 3))) * 3, N = Math.pow(10, -u), b = wn[8 + u / 3];
    return function(v) {
      return y(N * v) + b;
    };
  }
  return {
    format: p,
    formatPrefix: _
  };
}
var kt, pr, _r;
us({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function us(t) {
  return kt = ys(t), pr = kt.format, _r = kt.formatPrefix, kt;
}
function vs(t) {
  return Math.max(0, -ct(Math.abs(t)));
}
function bs(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ct(e) / 3))) * 3 - ct(Math.abs(t)));
}
function Ns(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ct(e) - ct(t)) + 1;
}
function As(t, e, a, n) {
  var i = Tl(t, e, a), r;
  switch (n = ta(n ?? ",f"), n.type) {
    case "s": {
      var l = Math.max(Math.abs(t), Math.abs(e));
      return n.precision == null && !isNaN(r = bs(i, l)) && (n.precision = r), _r(n, l);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(r = Ns(i, Math.max(Math.abs(t), Math.abs(e)))) && (n.precision = r - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(r = vs(i)) && (n.precision = r - (n.type === "%") * 2);
      break;
    }
  }
  return pr(n);
}
function hs(t) {
  var e = t.domain;
  return t.ticks = function(a) {
    var n = e();
    return Sl(n[0], n[n.length - 1], a ?? 10);
  }, t.tickFormat = function(a, n) {
    var i = e();
    return As(i[0], i[i.length - 1], a ?? 10, n);
  }, t.nice = function(a) {
    a == null && (a = 10);
    var n = e(), i = 0, r = n.length - 1, l = n[i], o = n[r], s, p, _ = 10;
    for (o < l && (p = l, l = o, o = p, p = i, i = r, r = p); _-- > 0; ) {
      if (p = ya(l, o, a), p === s)
        return n[i] = l, n[r] = o, e(n);
      if (p > 0)
        l = Math.floor(l / p) * p, o = Math.ceil(o / p) * p;
      else if (p < 0)
        l = Math.ceil(l * p) / p, o = Math.floor(o * p) / p;
      else
        break;
      s = p;
    }
    return t;
  }, t;
}
function fr() {
  var t = os();
  return t.copy = function() {
    return rs(t, fr());
  }, Po.apply(t, arguments), hs(t);
}
const ms = [
  { region: "Eastern Cape", endpoint: "ec" },
  { region: "Free State", endpoint: "fs" },
  { region: "Gauteng", endpoint: "gp" },
  { region: "KwaZulu-Natal", endpoint: "kzn" },
  { region: "Limpopo", endpoint: "lp" },
  { region: "Mpumalanga", endpoint: "mp" },
  { region: "North West", endpoint: "nw" },
  { region: "Northern Cape", endpoint: "nc" },
  { region: "Western Cape", endpoint: "wc" }
];
function Ln(t, e, a) {
  const n = t.slice();
  return n[18] = e[a], n[20] = a, n;
}
function kn(t, e, a) {
  const n = t.slice();
  return n[21] = e[a], n;
}
function Gn(t) {
  let e, a = (
    /*province*/
    t[21] + ""
  ), n, i, r, l;
  function o() {
    return (
      /*click_handler*/
      t[12](
        /*province*/
        t[21]
      )
    );
  }
  return {
    c() {
      e = I("button"), n = B(a), i = F(), d(e, "class", "electionengine-year-button svelte-14fji6k"), H(
        e,
        "selected",
        /*selected_region*/
        t[0] === /*province*/
        t[21]
      );
    },
    m(s, p) {
      R(s, e, p), m(e, n), m(e, i), r || (l = te(e, "click", o), r = !0);
    },
    p(s, p) {
      t = s, p & /*provinces*/
      2 && a !== (a = /*province*/
      t[21] + "") && X(n, a), p & /*selected_region, provinces*/
      3 && H(
        e,
        "selected",
        /*selected_region*/
        t[0] === /*province*/
        t[21]
      );
    },
    d(s) {
      s && O(e), r = !1, l();
    }
  };
}
function Es(t) {
  let e;
  return {
    c() {
      e = I("p"), e.textContent = "checking out";
    },
    m(a, n) {
      R(a, e, n);
    },
    p: ie,
    d(a) {
      a && O(e);
    }
  };
}
function gs(t) {
  let e, a, n, i = j(
    /*provinces_array*/
    t[2]
  ), r = [];
  for (let l = 0; l < i.length; l += 1)
    r[l] = Hn(Ln(t, i, l));
  return {
    c() {
      e = I("div"), a = L("svg"), n = L("g");
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      d(n, "id", "saMap"), d(a, "class", "electionengine-map-svg"), d(a, "width", cr), d(a, "height", dr), d(e, "class", "electionengine-svg-wrapper");
    },
    m(l, o) {
      R(l, e, o), m(e, a), m(a, n);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(n, null);
    },
    p(l, o) {
      if (o & /*provinces_array, path, colorFill*/
      28) {
        i = j(
          /*provinces_array*/
          l[2]
        );
        let s;
        for (s = 0; s < i.length; s += 1) {
          const p = Ln(l, i, s);
          r[s] ? r[s].p(p, o) : (r[s] = Hn(p), r[s].c(), r[s].m(n, null));
        }
        for (; s < r.length; s += 1)
          r[s].d(1);
        r.length = i.length;
      }
    },
    d(l) {
      l && O(e), _e(r, l);
    }
  };
}
function Hn(t) {
  let e, a, n, i;
  return {
    c() {
      e = L("path"), d(e, "data-perc", a = /*municipality*/
      t[18].properties.highest_party_result.vote_perc), d(e, "d", n = /*path*/
      t[3](
        /*municipality*/
        t[18]
      )), d(e, "fill", i = /*colorFill*/
      t[4](
        /*municipality*/
        t[18],
        /*index*/
        t[20]
      )), d(e, "stroke", "white"), d(e, "stroke-width", "0.94");
    },
    m(r, l) {
      R(r, e, l);
    },
    p(r, l) {
      l & /*provinces_array*/
      4 && a !== (a = /*municipality*/
      r[18].properties.highest_party_result.vote_perc) && d(e, "data-perc", a), l & /*path, provinces_array*/
      12 && n !== (n = /*path*/
      r[3](
        /*municipality*/
        r[18]
      )) && d(e, "d", n), l & /*colorFill, provinces_array*/
      20 && i !== (i = /*colorFill*/
      r[4](
        /*municipality*/
        r[18],
        /*index*/
        r[20]
      )) && d(e, "fill", i);
    },
    d(r) {
      r && O(e);
    }
  };
}
function Cs(t) {
  let e, a, n, i = j(
    /*provinces*/
    t[1]
  ), r = [];
  for (let p = 0; p < i.length; p += 1)
    r[p] = Gn(kn(t, i, p));
  function l(p, _) {
    return (
      /*provinces_array*/
      p[2] ? gs : Es
    );
  }
  let o = l(t), s = o(t);
  return {
    c() {
      e = I("div");
      for (let p = 0; p < r.length; p += 1)
        r[p].c();
      a = F(), s.c(), n = Me(), d(e, "class", "electionengine-button-wrapper");
    },
    m(p, _) {
      R(p, e, _);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      R(p, a, _), s.m(p, _), R(p, n, _);
    },
    p(p, [_]) {
      if (_ & /*selected_region, provinces, setData*/
      35) {
        i = j(
          /*provinces*/
          p[1]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const c = kn(p, i, f);
          r[f] ? r[f].p(c, _) : (r[f] = Gn(c), r[f].c(), r[f].m(e, null));
        }
        for (; f < r.length; f += 1)
          r[f].d(1);
        r.length = i.length;
      }
      o === (o = l(p)) && s ? s.p(p, _) : (s.d(1), s = o(p), s && (s.c(), s.m(n.parentNode, n)));
    },
    i: ie,
    o: ie,
    d(p) {
      p && (O(e), O(a), O(n)), _e(r, p), s.d(p);
    }
  };
}
let Is = "Provincial Legislature";
const Vn = "https://iec-api.revengine.dailymaverick.co.za";
let cr = 600, dr = 600;
async function Un(t) {
  return (await fetch(t)).json();
}
function Os(t, e, a) {
  let n, i, r, l, { selected_year: o = 2024 } = e, { selected_region: s = "Eastern Cape" } = e, { provinces: p } = e, { data: _ } = e, f = "ec", c = `${Vn}/maps/${o}/sa-munic-${f}.geojson.min.json`, y, u, N, b, v = [];
  dt(async () => {
    a(0, s = "Eastern Cape"), a(8, y = await Un(c)), u = y.features, a(6, _ = await E(o, s)), b = (g) => {
      const P = [];
      for (let G in g) {
        const x = {
          municipal_code: g[G].municipality_name.split(" ")[0]
        }, W = g[G].party_ballot_results.reduce((M, S) => S.vote_perc > M.vote_perc ? S : M, g[G].party_ballot_results[0]);
        console.log(W), P.push(Object.assign(W, x));
      }
      return a(9, v = P), u.map((G) => {
        const x = P.find((W) => W.municipal_code === G.properties.MUNI_CODE);
        return x && (G.properties.highest_party_result = x), G;
      });
    }, a(2, N = b(_));
  });
  async function E(g, P) {
    if (P !== "National")
      return (await pt({
        year: g,
        election: Is,
        region: P
      })).municipal_results;
  }
  async function A(g) {
    a(0, s = g), a(6, _ = await E(o, g)), f = ms.filter((P) => P.region === g)[0].endpoint, c = `${Vn}/maps/${o}/sa-munic-${f}.geojson.min.json`, a(8, y = await Un(c)), u = y.features, a(2, N = b(_));
  }
  const h = (g) => A(g);
  return t.$$set = (g) => {
    "selected_year" in g && a(7, o = g.selected_year), "selected_region" in g && a(0, s = g.selected_region), "provinces" in g && a(1, p = g.provinces), "data" in g && a(6, _ = g.data);
  }, t.$$.update = () => {
    t.$$.dirty & /*highParty*/
    512 && a(11, n = fr().domain(Cl(v, (g) => g.vote_perc)).range([40, 100])), t.$$.dirty & /*color_scale*/
    2048 && a(4, i = (g, P) => {
      const U = Ke(g.properties.highest_party_result.party_abbreviation, P);
      let { r: G, g: x, b: W } = Rt(lr(U));
      const M = n(g.properties.highest_party_result.vote_perc) / 100;
      return Rt(G, x, W, M);
    }), t.$$.dirty & /*geo_data*/
    256 && a(10, r = $i().reflectY(!0).fitExtent([[20, 20], [cr, dr]], y)), t.$$.dirty & /*projection*/
    1024 && a(3, l = Qi(r));
  }, [
    s,
    p,
    N,
    l,
    i,
    A,
    _,
    o,
    y,
    v,
    r,
    n,
    h
  ];
}
class Rs extends Ee {
  constructor(e) {
    super(), me(this, e, Os, Cs, Ne, {
      selected_year: 7,
      selected_region: 0,
      provinces: 1,
      data: 6
    });
  }
}
const qe = [
  2009,
  2014,
  2019,
  2024
], We = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northern Cape",
  "Western Cape",
  "Out of Country"
];
function Yn(t, e, a) {
  const n = t.slice();
  return n[18] = e[a], n;
}
function Bn(t) {
  let e, a, n, i, r, l, o, s, p = j(qe), _ = [];
  for (let f = 0; f < p.length; f += 1)
    _[f] = xn(Yn(t, p, f));
  return {
    c() {
      e = I("div"), a = I("button"), a.textContent = "National Assembly", n = F(), i = I("button"), i.textContent = "Provincial Legislature", r = F(), l = I("div");
      for (let f = 0; f < _.length; f += 1)
        _[f].c();
      d(a, "class", "svelte-1j8fxw"), H(
        a,
        "selected",
        /*selected_election*/
        t[1] === "National Assembly"
      ), d(i, "class", "svelte-1j8fxw"), H(
        i,
        "selected",
        /*selected_election*/
        t[1] === "Provincial Legislature"
      ), d(e, "class", "electionengine-selectbutton-wrapper svelte-1j8fxw"), d(l, "class", "electionengine-selectbutton-wrapper svelte-1j8fxw");
    },
    m(f, c) {
      R(f, e, c), m(e, a), m(e, n), m(e, i), R(f, r, c), R(f, l, c);
      for (let y = 0; y < _.length; y += 1)
        _[y] && _[y].m(l, null);
      o || (s = [
        te(
          a,
          "click",
          /*click_handler*/
          t[11]
        ),
        te(
          i,
          "click",
          /*click_handler_1*/
          t[12]
        )
      ], o = !0);
    },
    p(f, c) {
      if (c & /*selected_election*/
      2 && H(
        a,
        "selected",
        /*selected_election*/
        f[1] === "National Assembly"
      ), c & /*selected_election*/
      2 && H(
        i,
        "selected",
        /*selected_election*/
        f[1] === "Provincial Legislature"
      ), c & /*selected_year, setYear*/
      257) {
        p = j(qe);
        let y;
        for (y = 0; y < p.length; y += 1) {
          const u = Yn(f, p, y);
          _[y] ? _[y].p(u, c) : (_[y] = xn(u), _[y].c(), _[y].m(l, null));
        }
        for (; y < _.length; y += 1)
          _[y].d(1);
        _.length = p.length;
      }
    },
    d(f) {
      f && (O(e), O(r), O(l)), _e(_, f), o = !1, Pe(s);
    }
  };
}
function xn(t) {
  let e, a, n;
  function i() {
    return (
      /*click_handler_2*/
      t[13](
        /*year*/
        t[18]
      )
    );
  }
  return {
    c() {
      e = I("button"), e.textContent = `${/*year*/
      t[18]}`, d(e, "class", "svelte-1j8fxw"), H(
        e,
        "selected",
        /*selected_year*/
        t[0] === /*year*/
        t[18]
      );
    },
    m(r, l) {
      R(r, e, l), a || (n = te(e, "click", i), a = !0);
    },
    p(r, l) {
      t = r, l & /*selected_year*/
      1 && H(
        e,
        "selected",
        /*selected_year*/
        t[0] === /*year*/
        t[18]
      );
    },
    d(r) {
      r && O(e), a = !1, n();
    }
  };
}
function Ss(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "...Loading";
    },
    m(a, n) {
      R(a, e, n);
    },
    p: ie,
    i: ie,
    o: ie,
    d(a) {
      a && O(e);
    }
  };
}
function Ts(t) {
  let e, a, n, i;
  const r = [Ms, Ps], l = [];
  function o(s, p) {
    return (
      /*selected_election*/
      s[1] === "National Assembly" ? 0 : (
        /*selected_election*/
        s[1] === "Provincial Legislature" ? 1 : -1
      )
    );
  }
  return ~(e = o(t)) && (a = l[e] = r[e](t)), {
    c() {
      a && a.c(), n = Me();
    },
    m(s, p) {
      ~e && l[e].m(s, p), R(s, n, p), i = !0;
    },
    p(s, p) {
      let _ = e;
      e = o(s), e === _ ? ~e && l[e].p(s, p) : (a && (Ie(), K(l[_], 1, 1, () => {
        l[_] = null;
      }), Oe()), ~e ? (a = l[e], a ? a.p(s, p) : (a = l[e] = r[e](s), a.c()), k(a, 1), a.m(n.parentNode, n)) : a = null);
    },
    i(s) {
      i || (k(a), i = !0);
    },
    o(s) {
      K(a), i = !1;
    },
    d(s) {
      s && O(n), ~e && l[e].d(s);
    }
  };
}
function Ps(t) {
  let e, a, n, i;
  function r(s) {
    t[14](s);
  }
  function l(s) {
    t[15](s);
  }
  let o = {
    selected_year: (
      /*selected_year*/
      t[0]
    ),
    data: (
      /*data*/
      t[6]
    )
  };
  return (
    /*selected_region*/
    t[2] !== void 0 && (o.selected_region = /*selected_region*/
    t[2]), /*provinces*/
    t[4] !== void 0 && (o.provinces = /*provinces*/
    t[4]), e = new Rs({ props: o }), Le.push(() => Ue(e, "selected_region", r)), Le.push(() => Ue(e, "provinces", l)), {
      c() {
        Re(e.$$.fragment);
      },
      m(s, p) {
        Ae(e, s, p), i = !0;
      },
      p(s, p) {
        const _ = {};
        p & /*selected_year*/
        1 && (_.selected_year = /*selected_year*/
        s[0]), p & /*data*/
        64 && (_.data = /*data*/
        s[6]), !a && p & /*selected_region*/
        4 && (a = !0, _.selected_region = /*selected_region*/
        s[2], Ve(() => a = !1)), !n && p & /*provinces*/
        16 && (n = !0, _.provinces = /*provinces*/
        s[4], Ve(() => n = !1)), e.$set(_);
      },
      i(s) {
        i || (k(e.$$.fragment, s), i = !0);
      },
      o(s) {
        K(e.$$.fragment, s), i = !1;
      },
      d(s) {
        he(e, s);
      }
    }
  );
}
function Ms(t) {
  let e, a, n = (
    /*data*/
    t[6] && Zn(t)
  );
  return {
    c() {
      n && n.c(), e = Me();
    },
    m(i, r) {
      n && n.m(i, r), R(i, e, r), a = !0;
    },
    p(i, r) {
      /*data*/
      i[6] ? n ? (n.p(i, r), r & /*data*/
      64 && k(n, 1)) : (n = Zn(i), n.c(), k(n, 1), n.m(e.parentNode, e)) : n && (Ie(), K(n, 1, 1, () => {
        n = null;
      }), Oe());
    },
    i(i) {
      a || (k(n), a = !0);
    },
    o(i) {
      K(n), a = !1;
    },
    d(i) {
      i && O(e), n && n.d(i);
    }
  };
}
function Zn(t) {
  let e, a;
  return e = new To({
    props: {
      data: (
        /*data*/
        t[6]
      ),
      innerWidth: (
        /*innerWidth*/
        t[7]
      )
    }
  }), {
    c() {
      Re(e.$$.fragment);
    },
    m(n, i) {
      Ae(e, n, i), a = !0;
    },
    p(n, i) {
      const r = {};
      i & /*data*/
      64 && (r.data = /*data*/
      n[6]), i & /*innerWidth*/
      128 && (r.innerWidth = /*innerWidth*/
      n[7]), e.$set(r);
    },
    i(n) {
      a || (k(e.$$.fragment, n), a = !0);
    },
    o(n) {
      K(e.$$.fragment, n), a = !1;
    },
    d(n) {
      he(e, n);
    }
  };
}
function Fs(t) {
  let e, a, n, i, r, l, o;
  Ge(
    /*onwindowresize*/
    t[10]
  );
  let s = (
    /*show_buttons*/
    t[3] && Bn(t)
  );
  const p = [Ts, Ss], _ = [];
  function f(c, y) {
    return (
      /*loading*/
      c[5] ? 0 : 1
    );
  }
  return n = f(t), i = _[n] = p[n](t), {
    c() {
      e = I("div"), s && s.c(), a = F(), i.c(), d(e, "class", "electionengine-mapsection");
    },
    m(c, y) {
      R(c, e, y), s && s.m(e, null), m(e, a), _[n].m(e, null), r = !0, l || (o = te(
        window,
        "resize",
        /*onwindowresize*/
        t[10]
      ), l = !0);
    },
    p(c, [y]) {
      /*show_buttons*/
      c[3] ? s ? s.p(c, y) : (s = Bn(c), s.c(), s.m(e, a)) : s && (s.d(1), s = null);
      let u = n;
      n = f(c), n === u ? _[n].p(c, y) : (Ie(), K(_[u], 1, 1, () => {
        _[u] = null;
      }), Oe(), i = _[n], i ? i.p(c, y) : (i = _[n] = p[n](c), i.c()), k(i, 1), i.m(e, null));
    },
    i(c) {
      r || (k(i), r = !0);
    },
    o(c) {
      K(i), r = !1;
    },
    d(c) {
      c && O(e), s && s.d(), _[n].d(), l = !1, o();
    }
  };
}
function Ds(t, e, a) {
  let { selected_year: n = 2019 } = e, { selected_election: i = "National Assembly" } = e, { selected_region: r = "National" } = e, { show_buttons: l = !1 } = e, o = We, s = !1, p;
  dt(async () => {
    a(6, p = await c(n)), a(5, s = !0);
  });
  async function _(h) {
    h !== n && (a(0, n = h), a(6, p = await c(n)));
  }
  async function f(h) {
    h !== i && (a(1, i = h), h === "Provincial Legislature" ? a(4, o = We.filter((g) => !["National", "Out of Country"].includes(g))) : a(4, o = We), a(6, p = await c(n)));
  }
  async function c(h) {
    if (i === "National Assembly")
      return (await pt({ year: h, selected_region: r })).provincial_results;
    if (r !== "National")
      return (await pt({
        year: h,
        election: i,
        region: r
      })).municipal_results;
  }
  let y = 0;
  function u() {
    a(7, y = window.innerWidth);
  }
  const N = () => f("National Assembly"), b = () => f("Provincial Legislature"), v = (h) => _(h);
  function E(h) {
    r = h, a(2, r);
  }
  function A(h) {
    o = h, a(4, o);
  }
  return t.$$set = (h) => {
    "selected_year" in h && a(0, n = h.selected_year), "selected_election" in h && a(1, i = h.selected_election), "selected_region" in h && a(2, r = h.selected_region), "show_buttons" in h && a(3, l = h.show_buttons);
  }, [
    n,
    i,
    r,
    l,
    o,
    s,
    p,
    y,
    _,
    f,
    u,
    N,
    b,
    v,
    E,
    A
  ];
}
let ws = class extends Ee {
  constructor(e) {
    super(), me(this, e, Ds, Fs, Ne, {
      selected_year: 0,
      selected_election: 1,
      selected_region: 2,
      show_buttons: 3
    });
  }
};
function Wn(t, e, a) {
  const n = t.slice();
  return n[17] = e[a], n[19] = a, n;
}
function zn(t, e, a) {
  const n = t.slice();
  return n[20] = e[a], n;
}
function Kn(t, e, a) {
  const n = t.slice();
  return n[23] = e[a], n;
}
function qn(t) {
  let e, a, n, i, r, l, o, s, p, _, f, c = j(qe), y = [];
  for (let v = 0; v < c.length; v += 1)
    y[v] = jn(Kn(t, c, v));
  let u = (
    /*selected_election*/
    t[1] === "National Assembly" && Jn(t)
  ), N = j(
    /*provinces*/
    t[5]
  ), b = [];
  for (let v = 0; v < N.length; v += 1)
    b[v] = Qn(zn(t, N, v));
  return {
    c() {
      e = I("div"), a = I("button"), a.textContent = "National Assembly", n = F(), i = I("button"), i.textContent = "Provincial Legislature", r = F(), l = I("div");
      for (let v = 0; v < y.length; v += 1)
        y[v].c();
      o = F(), s = I("div"), u && u.c(), p = F();
      for (let v = 0; v < b.length; v += 1)
        b[v].c();
      d(a, "class", "electionengine-year-button svelte-1sauxxc"), H(
        a,
        "active",
        /*selected_election*/
        t[1] === "National Assembly"
      ), d(i, "class", "electionengine-year-button svelte-1sauxxc"), H(
        i,
        "active",
        /*selected_election*/
        t[1] === "Provincial Legislature"
      ), d(e, "class", "electionengine-years-buttons"), d(l, "class", "electionengine-years-buttons"), d(s, "class", "electionengine-years-buttons");
    },
    m(v, E) {
      R(v, e, E), m(e, a), m(e, n), m(e, i), R(v, r, E), R(v, l, E);
      for (let A = 0; A < y.length; A += 1)
        y[A] && y[A].m(l, null);
      R(v, o, E), R(v, s, E), u && u.m(s, null), m(s, p);
      for (let A = 0; A < b.length; A += 1)
        b[A] && b[A].m(s, null);
      _ || (f = [
        te(
          a,
          "click",
          /*click_handler*/
          t[10]
        ),
        te(
          i,
          "click",
          /*click_handler_1*/
          t[11]
        )
      ], _ = !0);
    },
    p(v, E) {
      if (E & /*selected_election*/
      2 && H(
        a,
        "active",
        /*selected_election*/
        v[1] === "National Assembly"
      ), E & /*selected_election*/
      2 && H(
        i,
        "active",
        /*selected_election*/
        v[1] === "Provincial Legislature"
      ), E & /*selected_year, setYear*/
      129) {
        c = j(qe);
        let A;
        for (A = 0; A < c.length; A += 1) {
          const h = Kn(v, c, A);
          y[A] ? y[A].p(h, E) : (y[A] = jn(h), y[A].c(), y[A].m(l, null));
        }
        for (; A < y.length; A += 1)
          y[A].d(1);
        y.length = c.length;
      }
      if (/*selected_election*/
      v[1] === "National Assembly" ? u ? u.p(v, E) : (u = Jn(v), u.c(), u.m(s, p)) : u && (u.d(1), u = null), E & /*selected_region, provinces, setRegion*/
      292) {
        N = j(
          /*provinces*/
          v[5]
        );
        let A;
        for (A = 0; A < N.length; A += 1) {
          const h = zn(v, N, A);
          b[A] ? b[A].p(h, E) : (b[A] = Qn(h), b[A].c(), b[A].m(s, null));
        }
        for (; A < b.length; A += 1)
          b[A].d(1);
        b.length = N.length;
      }
    },
    d(v) {
      v && (O(e), O(r), O(l), O(o), O(s)), _e(y, v), u && u.d(), _e(b, v), _ = !1, Pe(f);
    }
  };
}
function jn(t) {
  let e, a, n;
  function i() {
    return (
      /*click_handler_2*/
      t[12](
        /*year*/
        t[23]
      )
    );
  }
  return {
    c() {
      e = I("button"), e.textContent = `${/*year*/
      t[23]} `, d(e, "class", "electionengine-year-button svelte-1sauxxc"), H(
        e,
        "active",
        /*selected_year*/
        t[0] === /*year*/
        t[23]
      );
    },
    m(r, l) {
      R(r, e, l), a || (n = te(e, "click", i), a = !0);
    },
    p(r, l) {
      t = r, l & /*selected_year*/
      1 && H(
        e,
        "active",
        /*selected_year*/
        t[0] === /*year*/
        t[23]
      );
    },
    d(r) {
      r && O(e), a = !1, n();
    }
  };
}
function Jn(t) {
  let e, a, n;
  return {
    c() {
      e = I("button"), e.textContent = "National", d(e, "class", "electionengine-year-button svelte-1sauxxc"), H(
        e,
        "active",
        /*selected_region*/
        t[2] === "National"
      );
    },
    m(i, r) {
      R(i, e, r), a || (n = te(
        e,
        "click",
        /*click_handler_3*/
        t[13]
      ), a = !0);
    },
    p(i, r) {
      r & /*selected_region*/
      4 && H(
        e,
        "active",
        /*selected_region*/
        i[2] === "National"
      );
    },
    d(i) {
      i && O(e), a = !1, n();
    }
  };
}
function Qn(t) {
  let e, a = (
    /*province*/
    t[20] + ""
  ), n, i, r, l;
  function o() {
    return (
      /*click_handler_4*/
      t[14](
        /*province*/
        t[20]
      )
    );
  }
  return {
    c() {
      e = I("button"), n = B(a), i = F(), d(e, "class", "electionengine-year-button svelte-1sauxxc"), H(
        e,
        "active",
        /*selected_region*/
        t[2] === /*province*/
        t[20]
      );
    },
    m(s, p) {
      R(s, e, p), m(e, n), m(e, i), r || (l = te(e, "click", o), r = !0);
    },
    p(s, p) {
      t = s, p & /*provinces*/
      32 && a !== (a = /*province*/
      t[20] + "") && X(n, a), p & /*selected_region, provinces*/
      36 && H(
        e,
        "active",
        /*selected_region*/
        t[2] === /*province*/
        t[20]
      );
    },
    d(s) {
      s && O(e), r = !1, l();
    }
  };
}
function Xn(t) {
  let e, a, n, i, r, l, o, s;
  return {
    c() {
      e = I("div"), a = B(`Results for
            `), n = B(
        /*selected_year*/
        t[0]
      ), i = F(), r = B(
        /*selected_election*/
        t[1]
      ), l = F(), o = B(
        /*selected_region*/
        t[2]
      ), s = B(" General Election"), d(e, "class", "electionengine-title svelte-1sauxxc");
    },
    m(p, _) {
      R(p, e, _), m(e, a), m(e, n), m(e, i), m(e, r), m(e, l), m(e, o), m(e, s);
    },
    p(p, _) {
      _ & /*selected_year*/
      1 && X(
        n,
        /*selected_year*/
        p[0]
      ), _ & /*selected_election*/
      2 && X(
        r,
        /*selected_election*/
        p[1]
      ), _ & /*selected_region*/
      4 && X(
        o,
        /*selected_region*/
        p[2]
      );
    },
    d(p) {
      p && O(e);
    }
  };
}
function $n(t) {
  let e;
  return {
    c() {
      e = I("th"), e.textContent = "Seats", d(e, "class", "electionengine-seats-column svelte-1sauxxc");
    },
    m(a, n) {
      R(a, e, n);
    },
    d(a) {
      a && O(e);
    }
  };
}
function ei(t) {
  let e;
  return {
    c() {
      e = I("th"), e.textContent = "Change", d(e, "class", "electionengine-change-column svelte-1sauxxc");
    },
    m(a, n) {
      R(a, e, n);
    },
    d(a) {
      a && O(e);
    }
  };
}
function ti(t) {
  let e, a = j(
    /*data*/
    t[6].party_ballot_results
  ), n = [];
  for (let i = 0; i < a.length; i += 1)
    n[i] = ii(Wn(t, a, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Me();
    },
    m(i, r) {
      for (let l = 0; l < n.length; l += 1)
        n[l] && n[l].m(i, r);
      R(i, e, r);
    },
    p(i, r) {
      if (r & /*data, selected_year, Intl, selected_region*/
      69) {
        a = j(
          /*data*/
          i[6].party_ballot_results
        );
        let l;
        for (l = 0; l < a.length; l += 1) {
          const o = Wn(i, a, l);
          n[l] ? n[l].p(o, r) : (n[l] = ii(o), n[l].c(), n[l].m(e.parentNode, e));
        }
        for (; l < n.length; l += 1)
          n[l].d(1);
        n.length = a.length;
      }
    },
    d(i) {
      i && O(e), _e(n, i);
    }
  };
}
function ai(t) {
  let e, a = (
    /*row*/
    t[17].seats + ""
  ), n;
  return {
    c() {
      e = I("td"), n = B(a), d(e, "class", "electionengine-seats-column svelte-1sauxxc");
    },
    m(i, r) {
      R(i, e, r), m(e, n);
    },
    p(i, r) {
      r & /*data*/
      64 && a !== (a = /*row*/
      i[17].seats + "") && X(n, a);
    },
    d(i) {
      i && O(e);
    }
  };
}
function ni(t) {
  let e;
  function a(r, l) {
    return (
      /*row*/
      r[17].change > 0 ? Hs : (
        /*row*/
        r[17].change === 0 ? Gs : (
          /*row*/
          r[17].change < 0 ? ks : Ls
        )
      )
    );
  }
  let n = a(t), i = n(t);
  return {
    c() {
      e = I("td"), i.c(), d(e, "class", "electionengine-change-column svelte-1sauxxc");
    },
    m(r, l) {
      R(r, e, l), i.m(e, null);
    },
    p(r, l) {
      n === (n = a(r)) && i ? i.p(r, l) : (i.d(1), i = n(r), i && (i.c(), i.m(e, null)));
    },
    d(r) {
      r && O(e), i.d();
    }
  };
}
function Ls(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "N/A", d(e, "class", "electionengine-label electionengine-change-na svelte-1sauxxc");
    },
    m(a, n) {
      R(a, e, n);
    },
    p: ie,
    d(a) {
      a && O(e);
    }
  };
}
function ks(t) {
  let e, a = (
    /*row*/
    t[17].change + ""
  ), n, i;
  return {
    c() {
      e = I("div"), n = B(a), i = B("%"), d(e, "class", "electionengine-label electionengine-change-down svelte-1sauxxc");
    },
    m(r, l) {
      R(r, e, l), m(e, n), m(e, i);
    },
    p(r, l) {
      l & /*data*/
      64 && a !== (a = /*row*/
      r[17].change + "") && X(n, a);
    },
    d(r) {
      r && O(e);
    }
  };
}
function Gs(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "0%", d(e, "class", "electionengine-label electionengine-change-nochange svelte-1sauxxc");
    },
    m(a, n) {
      R(a, e, n);
    },
    p: ie,
    d(a) {
      a && O(e);
    }
  };
}
function Hs(t) {
  let e, a, n = (
    /*row*/
    t[17].change + ""
  ), i, r;
  return {
    c() {
      e = I("div"), a = B("+"), i = B(n), r = B("%"), d(e, "class", "electionengine-label electionengine-change-up svelte-1sauxxc");
    },
    m(l, o) {
      R(l, e, o), m(e, a), m(e, i), m(e, r);
    },
    p(l, o) {
      o & /*data*/
      64 && n !== (n = /*row*/
      l[17].change + "") && X(i, n);
    },
    d(l) {
      l && O(e);
    }
  };
}
function ii(t) {
  let e, a, n = (
    /*row*/
    t[17].party_name + ""
  ), i, r, l, o, s = Intl.NumberFormat("en-US").format(
    /*row*/
    t[17].votes
  ) + "", p, _, f, c = `6px ${Ke(
    /*row*/
    t[17].party_abbreviation,
    /*i*/
    t[19]
  )}
                            solid`, y = (
    /*selected_region*/
    t[2] !== "Out of Country" && ai(t)
  ), u = (
    /*selected_year*/
    t[0] > 2009 && ni(t)
  );
  return {
    c() {
      e = I("tr"), a = I("td"), i = B(n), r = F(), y && y.c(), l = F(), o = I("td"), p = B(s), _ = F(), u && u.c(), f = F(), d(a, "class", "electionengine-party-column svelte-1sauxxc"), d(o, "class", "electionengine-votes-column svelte-1sauxxc"), ae(e, "border-left", c), ae(
        e,
        "background-color",
        /*i*/
        t[19] % 2 ? "#f1f1f1" : "#FFFFFF"
      );
    },
    m(N, b) {
      R(N, e, b), m(e, a), m(a, i), m(e, r), y && y.m(e, null), m(e, l), m(e, o), m(o, p), m(e, _), u && u.m(e, null), m(e, f);
    },
    p(N, b) {
      b & /*data*/
      64 && n !== (n = /*row*/
      N[17].party_name + "") && X(i, n), /*selected_region*/
      N[2] !== "Out of Country" ? y ? y.p(N, b) : (y = ai(N), y.c(), y.m(e, l)) : y && (y.d(1), y = null), b & /*data*/
      64 && s !== (s = Intl.NumberFormat("en-US").format(
        /*row*/
        N[17].votes
      ) + "") && X(p, s), /*selected_year*/
      N[0] > 2009 ? u ? u.p(N, b) : (u = ni(N), u.c(), u.m(e, f)) : u && (u.d(1), u = null), b & /*data*/
      64 && c !== (c = `6px ${Ke(
        /*row*/
        N[17].party_abbreviation,
        /*i*/
        N[19]
      )}
                            solid`) && ae(e, "border-left", c);
    },
    d(N) {
      N && O(e), y && y.d(), u && u.d();
    }
  };
}
function Vs(t) {
  let e, a, n, i, r, l, o, s, p, _, f, c, y, u, N = (
    /*show_buttons*/
    t[3] && qn(t)
  ), b = (
    /*show_title*/
    t[4] && Xn(t)
  ), v = (
    /*selected_region*/
    t[2] !== "Out of Country" && $n()
  ), E = (
    /*selected_year*/
    t[0] > 2009 && ei()
  ), A = (
    /*data*/
    t[6] && ti(t)
  );
  return {
    c() {
      e = I("div"), N && N.c(), a = F(), b && b.c(), n = F(), i = I("div"), r = I("table"), l = I("thead"), o = I("tr"), s = I("th"), s.textContent = "Party", p = F(), v && v.c(), _ = F(), f = I("th"), f.textContent = "Votes", c = F(), E && E.c(), y = F(), u = I("tbody"), A && A.c(), d(s, "class", "electionengine-party-column svelte-1sauxxc"), d(f, "class", "electionengine-votes-column svelte-1sauxxc"), ae(o, "border-left", "6px #ccc solid"), d(l, "class", "svelte-1sauxxc"), d(r, "class", "electionengine-table svelte-1sauxxc"), d(i, "class", "electionengine-table-container svelte-1sauxxc");
    },
    m(h, g) {
      R(h, e, g), N && N.m(e, null), m(e, a), b && b.m(e, null), m(e, n), m(e, i), m(i, r), m(r, l), m(l, o), m(o, s), m(o, p), v && v.m(o, null), m(o, _), m(o, f), m(o, c), E && E.m(o, null), m(r, y), m(r, u), A && A.m(u, null);
    },
    p(h, [g]) {
      /*show_buttons*/
      h[3] ? N ? N.p(h, g) : (N = qn(h), N.c(), N.m(e, a)) : N && (N.d(1), N = null), /*show_title*/
      h[4] ? b ? b.p(h, g) : (b = Xn(h), b.c(), b.m(e, n)) : b && (b.d(1), b = null), /*selected_region*/
      h[2] !== "Out of Country" ? v || (v = $n(), v.c(), v.m(o, _)) : v && (v.d(1), v = null), /*selected_year*/
      h[0] > 2009 ? E || (E = ei(), E.c(), E.m(o, null)) : E && (E.d(1), E = null), /*data*/
      h[6] ? A ? A.p(h, g) : (A = ti(h), A.c(), A.m(u, null)) : A && (A.d(1), A = null);
    },
    i: ie,
    o: ie,
    d(h) {
      h && O(e), N && N.d(), b && b.d(), v && v.d(), E && E.d(), A && A.d();
    }
  };
}
function Us(t, e, a) {
  let { selected_year: n = 2019 } = e, { selected_election: i = "National Assembly" } = e, { selected_region: r = "National" } = e, { show_buttons: l = !1 } = e, { show_title: o = !0 } = e, s = We, p;
  dt(async () => {
    a(6, p = await u(n));
  });
  async function _(h) {
    h !== n && (a(0, n = h), a(6, p = await u(n)));
  }
  async function f(h) {
    h !== r && (a(2, r = h), a(6, p = await u(n)));
  }
  async function c(h) {
    h !== i && (a(1, i = h), h === "Provincial Legislature" ? a(5, s = We.filter((g) => !["National", "Out of Country"].includes(g))) : a(5, s = We), a(6, p = await u(n)));
  }
  async function y(h) {
    if (i === "National Assembly") {
      const g = await pt({
        year: h,
        election: i,
        region: r
      });
      return r !== "National" ? g.provincial_results.find((U) => U.province_name === r) : g;
    } else
      return ["National", "Out of Country"].includes(r) ? { party_ballot_results: [] } : (await pt({
        year: h,
        election: i,
        region: "National"
      })).provincial_results.find((P) => P.province_name === r);
  }
  async function u(h) {
    const g = await y(h);
    if (h > qe[0]) {
      const P = await y(h - 5);
      for (let U of g.party_ballot_results) {
        const G = P.party_ballot_results.find((x) => x.party_id === U.party_id);
        G ? U.change = Math.round((U.vote_perc - G.vote_perc) * 10) / 10 : U.change = null;
      }
    }
    return g;
  }
  const N = () => c("National Assembly"), b = () => c("Provincial Legislature"), v = (h) => _(h), E = () => f("National"), A = (h) => f(h);
  return t.$$set = (h) => {
    "selected_year" in h && a(0, n = h.selected_year), "selected_election" in h && a(1, i = h.selected_election), "selected_region" in h && a(2, r = h.selected_region), "show_buttons" in h && a(3, l = h.show_buttons), "show_title" in h && a(4, o = h.show_title);
  }, [
    n,
    i,
    r,
    l,
    o,
    s,
    p,
    _,
    f,
    c,
    N,
    b,
    v,
    E,
    A
  ];
}
let Ys = class extends Ee {
  constructor(e) {
    super(), me(this, e, Us, Vs, Ne, {
      selected_year: 0,
      selected_election: 1,
      selected_region: 2,
      show_buttons: 3,
      show_title: 4
    });
  }
};
var yr = {}, na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
var Bs = function() {
  function t() {
    this.root = null;
  }
  return t.prototype.insertSuccessor = function(e, a) {
    var n;
    if (e) {
      if (a.prev = e, a.next = e.next, e.next && (e.next.prev = a), e.next = a, e.right) {
        for (e = e.right; e.left; )
          e = e.left;
        e.left = a;
      } else
        e.right = a;
      n = e;
    } else
      this.root ? (e = this.first(this.root), a.prev = null, a.next = e, e.prev = a, e.left = a, n = e) : (a.prev = a.next = null, this.root = a, n = null);
    a.left = a.right = null, a.parent = n, a.red = !0;
    var i, r;
    for (e = a; n && n.red; )
      i = n.parent, n === i.left ? (r = i.right, r && r.red ? (n.red = r.red = !1, i.red = !0, e = i) : (e === n.right && (this.rotateLeft(n), e = n, n = e.parent), n.red = !1, i.red = !0, this.rotateRight(i))) : (r = i.left, r && r.red ? (n.red = r.red = !1, i.red = !0, e = i) : (e === n.left && (this.rotateRight(n), e = n, n = e.parent), n.red = !1, i.red = !0, this.rotateLeft(i))), n = e.parent;
    this.root.red = !1;
  }, t.prototype.removeNode = function(e) {
    e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e.next = e.prev = null;
    var a = e.parent, n = e.left, i = e.right, r = null;
    n ? i ? r = this.first(i) : r = n : r = i, a ? a.left === e ? a.left = r : a.right = r : this.root = r;
    var l;
    if (n && i ? (l = r.red, r.red = e.red, r.left = n, n.parent = r, r !== i ? (a = r.parent, r.parent = e.parent, e = r.right, a.left = e, r.right = i, i.parent = r) : (r.parent = a, a = r, e = r.right)) : (l = e.red, e = r), e && (e.parent = a), !l) {
      if (e && e.red) {
        e.red = !1;
        return;
      }
      var o;
      do {
        if (e === this.root)
          break;
        if (e === a.left) {
          if (o = a.right, o.red && (o.red = !1, a.red = !0, this.rotateLeft(a), o = a.right), o.left && o.left.red || o.right && o.right.red) {
            (!o.right || !o.right.red) && (o.left.red = !1, o.red = !0, this.rotateRight(o), o = a.right), o.red = a.red, a.red = o.right.red = !1, this.rotateLeft(a), e = this.root;
            break;
          }
        } else if (o = a.left, o.red && (o.red = !1, a.red = !0, this.rotateRight(a), o = a.left), o.left && o.left.red || o.right && o.right.red) {
          (!o.left || !o.left.red) && (o.right.red = !1, o.red = !0, this.rotateLeft(o), o = a.left), o.red = a.red, a.red = o.left.red = !1, this.rotateRight(a), e = this.root;
          break;
        }
        o.red = !0, e = a, a = a.parent;
      } while (!e.red);
      e && (e.red = !1);
    }
  }, t.prototype.rotateLeft = function(e) {
    var a = e, n = e.right, i = a.parent;
    i ? i.left === a ? i.left = n : i.right = n : this.root = n, n.parent = i, a.parent = n, a.right = n.left, a.right && (a.right.parent = a), n.left = a;
  }, t.prototype.rotateRight = function(e) {
    var a = e, n = e.left, i = a.parent;
    i ? i.left === a ? i.left = n : i.right = n : this.root = n, n.parent = i, a.parent = n, a.left = n.right, a.left && (a.left.parent = a), n.right = a;
  }, t.prototype.first = function(e) {
    for (; e.left; )
      e = e.left;
    return e;
  }, t.prototype.last = function(e) {
    for (; e.right; )
      e = e.right;
    return e;
  }, t;
}();
na.RBTree = Bs;
var xs = /* @__PURE__ */ function() {
  function t() {
  }
  return t;
}();
na.RBTreeNode = xs;
var Ga = {};
Object.defineProperty(Ga, "__esModule", { value: !0 });
var Zs = /* @__PURE__ */ function() {
  function t(e, a) {
    this.x = e, this.y = a;
  }
  return t;
}();
Ga.Vertex = Zs;
var Ha = {};
Object.defineProperty(Ha, "__esModule", { value: !0 });
var Ws = /* @__PURE__ */ function() {
  function t(e, a) {
    this.lSite = e, this.rSite = a, this.va = this.vb = null;
  }
  return t;
}();
Ha.Edge = Ws;
var Va = {};
Object.defineProperty(Va, "__esModule", { value: !0 });
var zs = function() {
  function t(e) {
    this.site = e, this.halfedges = [], this.closeMe = !1;
  }
  return t.prototype.init = function(e) {
    return this.site = e, this.halfedges = [], this.closeMe = !1, this;
  }, t.prototype.prepareHalfedges = function() {
    for (var e = this.halfedges, a = e.length, n; a--; )
      n = e[a].edge, (!n.vb || !n.va) && e.splice(a, 1);
    return e.sort(function(i, r) {
      return r.angle - i.angle;
    }), e.length;
  }, t.prototype.getNeighborIds = function() {
    for (var e = [], a = this.halfedges.length, n; a--; )
      n = this.halfedges[a].edge, n.lSite !== null && n.lSite.id != this.site.id ? e.push(n.lSite.id) : n.rSite !== null && n.rSite.id != this.site.id && e.push(n.rSite.id);
    return e;
  }, t.prototype.getBbox = function() {
    for (var e = this.halfedges, a = e.length, n = 1 / 0, i = 1 / 0, r = -1 / 0, l = -1 / 0, o, s, p; a--; )
      o = e[a].getStartpoint(), s = o.x, p = o.y, s < n && (n = s), p < i && (i = p), s > r && (r = s), p > l && (l = p);
    return {
      x: n,
      y: i,
      width: r - n,
      height: l - i
    };
  }, t.prototype.pointIntersection = function(e, a) {
    for (var n = this.halfedges, i = n.length, r, l, o, s; i--; ) {
      if (r = n[i], l = r.getStartpoint(), o = r.getEndpoint(), s = (a - l.y) * (o.x - l.x) - (e - l.x) * (o.y - l.y), !s)
        return 0;
      if (s > 0)
        return -1;
    }
    return 1;
  }, t;
}();
Va.Cell = zs;
var Ua = {};
Object.defineProperty(Ua, "__esModule", { value: !0 });
var Ks = /* @__PURE__ */ function() {
  function t(e) {
    this.site = e;
  }
  return t;
}();
Ua.Diagram = Ks;
var Ya = {};
Object.defineProperty(Ya, "__esModule", { value: !0 });
var qs = function() {
  function t(e, a, n) {
    if (this.site = a, this.edge = e, n)
      this.angle = Math.atan2(n.y - a.y, n.x - a.x);
    else {
      var i = e.va, r = e.vb;
      this.angle = e.lSite === a ? Math.atan2(r.x - i.x, i.y - r.y) : Math.atan2(i.x - r.x, r.y - i.y);
    }
  }
  return t.prototype.getStartpoint = function() {
    return this.edge.lSite === this.site ? this.edge.va : this.edge.vb;
  }, t.prototype.getEndpoint = function() {
    return this.edge.lSite === this.site ? this.edge.vb : this.edge.va;
  }, t;
}();
Ya.Halfedge = qs;
Object.defineProperty(yr, "__esModule", { value: !0 });
var Gt = na, js = Ga, ri = Ha, Js = Va, li = Ua, Qs = Ya, Xs = function() {
  function t() {
    this.vertices = null, this.edges = null, this.cells = null, this.toRecycle = null, this.beachsectionJunkyard = [], this.circleEventJunkyard = [], this.vertexJunkyard = [], this.edgeJunkyard = [], this.cellJunkyard = [];
  }
  return t.prototype.compute = function(e, a) {
    var n = /* @__PURE__ */ new Date();
    this.reset(), this.toRecycle && (this.vertexJunkyard = this.vertexJunkyard.concat(this.toRecycle.vertices), this.edgeJunkyard = this.edgeJunkyard.concat(this.toRecycle.edges), this.cellJunkyard = this.cellJunkyard.concat(this.toRecycle.cells), this.toRecycle = null);
    var i = e.slice(0);
    i.sort(function(y, u) {
      var N = u.y - y.y;
      return N || u.x - y.x;
    });
    for (var r = i.pop(), l = 0, o, s, p = this.cells, _; ; )
      if (_ = this.firstCircleEvent, r && (!_ || r.y < _.y || r.y === _.y && r.x < _.x))
        (r.x !== o || r.y !== s) && (p[l] = this.createCell(r), r.id = l++, this.addBeachsection(r), s = r.y, o = r.x), r = i.pop();
      else if (_)
        this.removeBeachsection(_.arc);
      else
        break;
    this.clipEdges(a), this.closeCells(a);
    var f = /* @__PURE__ */ new Date(), c = new li.Diagram();
    return c.cells = this.cells, c.edges = this.edges, c.vertices = this.vertices, c.execTime = f.getTime() - n.getTime(), this.reset(), c;
  }, t.prototype.sqrt = function(e) {
    return Math.sqrt(e);
  }, t.prototype.abs = function(e) {
    return Math.abs(e);
  }, t.prototype.eps = function() {
    return 1e-9;
  }, t.prototype.inveps = function() {
    return 1 / this.eps();
  }, t.prototype.equalWithEpsilon = function(e, a) {
    return this.abs(e - a) < this.eps();
  }, t.prototype.greaterThanWithEpsilon = function(e, a) {
    return e - a > this.eps();
  }, t.prototype.greaterThanOrEqualWithEpsilon = function(e, a) {
    return a - e < this.eps();
  }, t.prototype.lessThanWithEpsilon = function(e, a) {
    return a - e > this.eps();
  }, t.prototype.lessThanOrEqualWithEpsilon = function(e, a) {
    return e - a < this.eps();
  }, t.prototype.quantizeSites = function(e) {
    for (var a = this.eps(), n = e.length, i; n--; )
      i = e[n], i.x = Math.floor(i.x / a) * a, i.y = Math.floor(i.y / a) * a;
  }, t.prototype.recycle = function(e) {
    if (e)
      if (e instanceof li.Diagram)
        this.toRecycle = e;
      else
        throw "Voronoi.recycleDiagram() > Need a Diagram object.";
  }, t.prototype.reset = function() {
    if (this.beachline || (this.beachline = new Gt.RBTree()), this.beachline.root)
      for (var e = this.beachline.first(this.beachline.root); e; )
        this.beachsectionJunkyard.push(e), e = e.next;
    this.beachline.root = null, this.circleEvents || (this.circleEvents = new Gt.RBTree()), this.circleEvents.root = this.firstCircleEvent = null, this.vertices = [], this.edges = [], this.cells = [];
  }, t.prototype.createCell = function(e) {
    var a = this.cellJunkyard.pop();
    return a ? (a.init(e), a.init(e)) : new Js.Cell(e);
  }, t.prototype.createHalfedge = function(e, a, n) {
    return new Qs.Halfedge(e, a, n);
  }, t.prototype.createVertex = function(e, a) {
    var n = this.vertexJunkyard.pop();
    return n ? (n.x = e, n.y = a) : n = new js.Vertex(e, a), this.vertices.push(n), n;
  }, t.prototype.createEdge = function(e, a, n, i) {
    n === void 0 && (n = null), i === void 0 && (i = null);
    var r = this.edgeJunkyard.pop();
    return r ? (r.lSite = e, r.rSite = a, r.va = r.vb = null) : r = new ri.Edge(e, a), this.edges.push(r), n && this.setEdgeStartpoint(r, e, a, n), i && this.setEdgeEndpoint(r, e, a, i), this.cells[e.id].halfedges.push(this.createHalfedge(r, e, a)), this.cells[a.id].halfedges.push(this.createHalfedge(r, a, e)), r;
  }, t.prototype.createBorderEdge = function(e, a, n) {
    var i = this.edgeJunkyard.pop();
    return i ? (i.lSite = e, i.rSite = null) : i = new ri.Edge(e, null), i.va = a, i.vb = n, this.edges.push(i), i;
  }, t.prototype.setEdgeStartpoint = function(e, a, n, i) {
    !e.va && !e.vb ? (e.va = i, e.lSite = a, e.rSite = n) : e.lSite === n ? e.vb = i : e.va = i;
  }, t.prototype.setEdgeEndpoint = function(e, a, n, i) {
    this.setEdgeStartpoint(e, n, a, i);
  }, t.prototype.createBeachsection = function(e) {
    var a = this.beachsectionJunkyard.pop();
    return a || (a = new Gt.RBTreeNode()), a.site = e, a;
  }, t.prototype.leftBreakPoint = function(e, a) {
    var n = e.site, i = n.x, r = n.y, l = r - a;
    if (!l)
      return i;
    var o = e.prev;
    if (!o)
      return -1 / 0;
    n = o.site;
    var s = n.x, p = n.y, _ = p - a;
    if (!_)
      return s;
    var f = s - i, c = 1 / l - 1 / _, y = f / _;
    return c ? (-y + this.sqrt(y * y - 2 * c * (f * f / (-2 * _) - p + _ / 2 + r - l / 2))) / c + i : (i + s) / 2;
  }, t.prototype.rightBreakPoint = function(e, a) {
    var n = e.next;
    if (n)
      return this.leftBreakPoint(n, a);
    var i = e.site;
    return i.y === a ? i.x : 1 / 0;
  }, t.prototype.detachBeachsection = function(e) {
    this.detachCircleEvent(e), this.beachline.removeNode(e), this.beachsectionJunkyard.push(e);
  }, t.prototype.removeBeachsection = function(e) {
    var a = e.circleEvent, n = a.x, i = a.ycenter, r = this.createVertex(n, i), l = e.prev, o = e.next, s = [e], p = Math.abs;
    this.detachBeachsection(e);
    for (var _ = l; _.circleEvent && p(n - _.circleEvent.x) < this.eps() && p(i - _.circleEvent.ycenter) < this.eps(); )
      l = _.prev, s.unshift(_), this.detachBeachsection(_), _ = l;
    s.unshift(_), this.detachCircleEvent(_);
    for (var f = o; f.circleEvent && p(n - f.circleEvent.x) < this.eps() && p(i - f.circleEvent.ycenter) < this.eps(); )
      o = f.next, s.push(f), this.detachBeachsection(f), f = o;
    s.push(f), this.detachCircleEvent(f);
    var c = s.length, y;
    for (y = 1; y < c; y++)
      f = s[y], _ = s[y - 1], this.setEdgeStartpoint(f.edge, _.site, f.site, r);
    _ = s[0], f = s[c - 1], f.edge = this.createEdge(_.site, f.site, void 0, r), this.attachCircleEvent(_), this.attachCircleEvent(f);
  }, t.prototype.addBeachsection = function(e) {
    for (var a = e.x, n = e.y, i, r, l, o, s = this.beachline.root; s; )
      if (l = this.leftBreakPoint(s, n) - a, l > this.eps())
        s = s.left;
      else if (o = a - this.rightBreakPoint(s, n), o > this.eps()) {
        if (!s.right) {
          i = s;
          break;
        }
        s = s.right;
      } else {
        l > -this.eps() ? (i = s.prev, r = s) : o > -this.eps() ? (i = s, r = s.next) : i = r = s;
        break;
      }
    var p = this.createBeachsection(e);
    if (this.beachline.insertSuccessor(i, p), !(!i && !r)) {
      if (i === r) {
        this.detachCircleEvent(i), r = this.createBeachsection(i.site), this.beachline.insertSuccessor(p, r), p.edge = r.edge = this.createEdge(i.site, p.site), this.attachCircleEvent(i), this.attachCircleEvent(r);
        return;
      }
      if (i && !r) {
        p.edge = this.createEdge(i.site, p.site);
        return;
      }
      if (i !== r) {
        this.detachCircleEvent(i), this.detachCircleEvent(r);
        var _ = i.site, f = _.x, c = _.y, y = e.x - f, u = e.y - c, N = r.site, b = N.x - f, v = N.y - c, E = 2 * (y * v - u * b), A = y * y + u * u, h = b * b + v * v, g = this.createVertex((v * A - u * h) / E + f, (y * h - b * A) / E + c);
        this.setEdgeStartpoint(r.edge, _, N, g), p.edge = this.createEdge(_, e, void 0, g), r.edge = this.createEdge(e, N, void 0, g), this.attachCircleEvent(i), this.attachCircleEvent(r);
        return;
      }
    }
  }, t.prototype.attachCircleEvent = function(e) {
    var a = e.prev, n = e.next;
    if (!(!a || !n)) {
      var i = a.site, r = e.site, l = n.site;
      if (i !== l) {
        var o = r.x, s = r.y, p = i.x - o, _ = i.y - s, f = l.x - o, c = l.y - s, y = 2 * (p * c - _ * f);
        if (!(y >= -2e-12)) {
          var u = p * p + _ * _, N = f * f + c * c, b = (c * u - _ * N) / y, v = (p * N - f * u) / y, E = v + s, A = this.circleEventJunkyard.pop();
          A || (A = new Gt.RBTreeNode()), A.arc = e, A.site = r, A.x = b + o, A.y = E + this.sqrt(b * b + v * v), A.ycenter = E, e.circleEvent = A;
          for (var h = null, g = this.circleEvents.root; g; )
            if (A.y < g.y || A.y === g.y && A.x <= g.x)
              if (g.left)
                g = g.left;
              else {
                h = g.prev;
                break;
              }
            else if (g.right)
              g = g.right;
            else {
              h = g;
              break;
            }
          this.circleEvents.insertSuccessor(h, A), h || (this.firstCircleEvent = A);
        }
      }
    }
  }, t.prototype.detachCircleEvent = function(e) {
    var a = e.circleEvent;
    a && (a.prev || (this.firstCircleEvent = a.next), this.circleEvents.removeNode(a), this.circleEventJunkyard.push(a), e.circleEvent = null);
  }, t.prototype.connectEdge = function(e, a) {
    var n = e.vb;
    if (n)
      return !0;
    var i = e.va, r = a.xl, l = a.xr, o = a.yt, s = a.yb, p = e.lSite, _ = e.rSite, f = p.x, c = p.y, y = _.x, u = _.y, N = (f + y) / 2, b = (c + u) / 2, v, E;
    if (this.cells[p.id].closeMe = !0, this.cells[_.id].closeMe = !0, u !== c && (v = (f - y) / (u - c), E = b - v * N), v === void 0) {
      if (N < r || N >= l)
        return !1;
      if (f > y) {
        if (!i || i.y < o)
          i = this.createVertex(N, o);
        else if (i.y >= s)
          return !1;
        n = this.createVertex(N, s);
      } else {
        if (!i || i.y > s)
          i = this.createVertex(N, s);
        else if (i.y < o)
          return !1;
        n = this.createVertex(N, o);
      }
    } else if (v < -1 || v > 1)
      if (f > y) {
        if (!i || i.y < o)
          i = this.createVertex((o - E) / v, o);
        else if (i.y >= s)
          return !1;
        n = this.createVertex((s - E) / v, s);
      } else {
        if (!i || i.y > s)
          i = this.createVertex((s - E) / v, s);
        else if (i.y < o)
          return !1;
        n = this.createVertex((o - E) / v, o);
      }
    else if (c < u) {
      if (!i || i.x < r)
        i = this.createVertex(r, v * r + E);
      else if (i.x >= l)
        return !1;
      n = this.createVertex(l, v * l + E);
    } else {
      if (!i || i.x > l)
        i = this.createVertex(l, v * l + E);
      else if (i.x < r)
        return !1;
      n = this.createVertex(r, v * r + E);
    }
    return e.va = i, e.vb = n, !0;
  }, t.prototype.clipEdge = function(e, a) {
    var n = e.va.x, i = e.va.y, r = e.vb.x, l = e.vb.y, o = 0, s = 1, p = r - n, _ = l - i, f = n - a.xl;
    if (p === 0 && f < 0)
      return !1;
    var c = -f / p;
    if (p < 0) {
      if (c < o)
        return !1;
      c < s && (s = c);
    } else if (p > 0) {
      if (c > s)
        return !1;
      c > o && (o = c);
    }
    if (f = a.xr - n, p === 0 && f < 0)
      return !1;
    if (c = f / p, p < 0) {
      if (c > s)
        return !1;
      c > o && (o = c);
    } else if (p > 0) {
      if (c < o)
        return !1;
      c < s && (s = c);
    }
    if (f = i - a.yt, _ === 0 && f < 0)
      return !1;
    if (c = -f / _, _ < 0) {
      if (c < o)
        return !1;
      c < s && (s = c);
    } else if (_ > 0) {
      if (c > s)
        return !1;
      c > o && (o = c);
    }
    if (f = a.yb - i, _ === 0 && f < 0)
      return !1;
    if (c = f / _, _ < 0) {
      if (c > s)
        return !1;
      c > o && (o = c);
    } else if (_ > 0) {
      if (c < o)
        return !1;
      c < s && (s = c);
    }
    return o > 0 && (e.va = this.createVertex(n + o * p, i + o * _)), s < 1 && (e.vb = this.createVertex(n + s * p, i + s * _)), (o > 0 || s < 1) && (this.cells[e.lSite.id].closeMe = !0, this.cells[e.rSite.id].closeMe = !0), !0;
  }, t.prototype.clipEdges = function(e) {
    for (var a = this.edges, n = a.length, i, r = Math.abs; n--; )
      i = a[n], (!this.connectEdge(i, e) || !this.clipEdge(i, e) || r(i.va.x - i.vb.x) < this.eps() && r(i.va.y - i.vb.y) < this.eps()) && (i.va = i.vb = null, a.splice(n, 1));
  }, t.prototype.closeCells = function(e) {
    for (var a = e.xl, n = e.xr, i = e.yt, r = e.yb, l = this.cells, o = l.length, s, p, _, f, c, y, u, N, b, v = Math.abs; o--; )
      if (s = l[o], !!s.prepareHalfedges() && s.closeMe) {
        for (_ = s.halfedges, f = _.length, p = 0; p < f; ) {
          if (y = _[p].getEndpoint(), N = _[(p + 1) % f].getStartpoint(), v(y.x - N.x) >= this.eps() || v(y.y - N.y) >= this.eps())
            switch (!0) {
              case (this.equalWithEpsilon(y.x, a) && this.lessThanWithEpsilon(y.y, r)):
                if (b = this.equalWithEpsilon(N.x, a), u = this.createVertex(a, b ? N.y : r), c = this.createBorderEdge(s.site, y, u), p++, _.splice(p, 0, this.createHalfedge(c, s.site, null)), f++, b)
                  break;
                y = u;
              case (this.equalWithEpsilon(y.y, r) && this.lessThanWithEpsilon(y.x, n)):
                if (b = this.equalWithEpsilon(N.y, r), u = this.createVertex(b ? N.x : n, r), c = this.createBorderEdge(s.site, y, u), p++, _.splice(p, 0, this.createHalfedge(c, s.site, null)), f++, b)
                  break;
                y = u;
              case (this.equalWithEpsilon(y.x, n) && this.greaterThanWithEpsilon(y.y, i)):
                if (b = this.equalWithEpsilon(N.x, n), u = this.createVertex(n, b ? N.y : i), c = this.createBorderEdge(s.site, y, u), p++, _.splice(p, 0, this.createHalfedge(c, s.site, null)), f++, b)
                  break;
                y = u;
              case (this.equalWithEpsilon(y.y, i) && this.greaterThanWithEpsilon(y.x, a)):
                if (b = this.equalWithEpsilon(N.y, i), u = this.createVertex(b ? N.x : a, i), c = this.createBorderEdge(s.site, y, u), p++, _.splice(p, 0, this.createHalfedge(c, s.site, null)), f++, b || (y = u, b = this.equalWithEpsilon(N.x, a), u = this.createVertex(a, b ? N.y : r), c = this.createBorderEdge(s.site, y, u), p++, _.splice(p, 0, this.createHalfedge(c, s.site, null)), f++, b) || (y = u, b = this.equalWithEpsilon(N.y, r), u = this.createVertex(b ? N.x : n, r), c = this.createBorderEdge(s.site, y, u), p++, _.splice(p, 0, this.createHalfedge(c, s.site, null)), f++, b) || (y = u, b = this.equalWithEpsilon(N.x, n), u = this.createVertex(n, b ? N.y : i), c = this.createBorderEdge(s.site, y, u), p++, _.splice(p, 0, this.createHalfedge(c, s.site, null)), f++, b))
                  break;
              default:
                throw "Voronoi.closeCells() > this makes no sense!";
            }
          p++;
        }
        s.closeMe = !1;
      }
  }, t;
}(), $s = yr.Voronoi = Xs;
const ep = (t) => {
  const e = new $s();
  let a = 0, n = 0, i = 0, r = 0;
  for (let o = 0; o < t.length; o++) {
    let s = t[o];
    s.x < a && (a = s.x), s.x > n && (n = s.x), s.y < i && (i = s.y), s.y > r && (r = s.y);
  }
  let l = { xl: a, xr: n, yt: i, yb: r };
  return e.compute(t, l);
};
function oi(t) {
  if (!t || t.length === 0)
    return "";
  let e = [];
  const a = t.shift();
  let n = a.getStartpoint(), i = a.getEndpoint();
  e.push(`M ${n.x} ${n.y}`), e.push(`L ${i.x} ${i.y}`);
  for (let r of t) {
    let l = r.getEndpoint();
    e.push(`L ${l.x} ${l.y}`);
  }
  return e.push("Z"), e.join(" ");
}
function tp(t, e, a, n) {
  let i = [], r = 0;
  for (let p = e; p >= 0; p--) {
    const _ = t - p * t / e, f = n / 180 * Math.PI * _;
    r += f;
  }
  const l = r / a;
  let o = 0, s = 0;
  for (let p = e; p >= 0; p--) {
    const _ = t - p * t / e, f = n / 180 * Math.PI * _;
    let c = Math.ceil(f / l);
    o + c > a && (c = a - o);
    const y = f / c, u = (n - 180) / 180 * Math.PI / 2;
    for (let N = 0; N < c; N++) {
      o++;
      const b = N * y / _ + y / _ / 2, v = -_ * Math.cos(b - u), E = -_ * Math.sin(b - u);
      i.push({ id: p, x: v, y: E, a: s, angle: b });
    }
    s++;
  }
  return i.sort((p, _) => p.angle - _.angle), i;
}
function si(t, e, a) {
  const n = t.slice();
  return n[36] = e[a], n[38] = a, n;
}
function pi(t, e, a) {
  const n = t.slice();
  return n[39] = e[a], n[38] = a, n;
}
function _i(t, e, a) {
  const n = t.slice();
  return n[39] = e[a], n;
}
function fi(t, e, a) {
  const n = t.slice();
  return n[43] = e[a], n[38] = a, n;
}
function ci(t) {
  let e, a;
  return {
    c() {
      e = L("path"), d(e, "d", a = `M ${/*r*/
      t[1] - /*i*/
      t[38] * /*r*/
      (t[1] / /*rows*/
      t[2])},0 A ${/*r*/
      t[1] - /*i*/
      t[38] * /*r*/
      (t[1] / /*rows*/
      t[2])},${/*r*/
      t[1] - /*i*/
      t[38] * /*r*/
      (t[1] / /*rows*/
      t[2])} 0 0,0 ${-/*r*/
      (t[1] - /*i*/
      t[38] * /*r*/
      (t[1] / /*rows*/
      t[2]))},0`), d(e, "fill", "transparent"), d(e, "stroke", "white"), d(e, "stroke-width", "1"), d(e, "opacity", "0.4");
    },
    m(n, i) {
      R(n, e, i);
    },
    p(n, i) {
      i[0] & /*r, rows*/
      6 && a !== (a = `M ${/*r*/
      n[1] - /*i*/
      n[38] * /*r*/
      (n[1] / /*rows*/
      n[2])},0 A ${/*r*/
      n[1] - /*i*/
      n[38] * /*r*/
      (n[1] / /*rows*/
      n[2])},${/*r*/
      n[1] - /*i*/
      n[38] * /*r*/
      (n[1] / /*rows*/
      n[2])} 0 0,0 ${-/*r*/
      (n[1] - /*i*/
      n[38] * /*r*/
      (n[1] / /*rows*/
      n[2]))},0`) && d(e, "d", a);
    },
    d(n) {
      n && O(e);
    }
  };
}
function ap(t) {
  let e, a, n, i, r, l;
  return {
    c() {
      var o, s, p, _, f;
      e = L("circle"), d(e, "data-party", a = /*point*/
      (o = t[39].data) == null ? void 0 : o.id), d(e, "cx", n = /*point*/
      t[39].x), d(e, "cy", i = /*point*/
      t[39].y), d(
        e,
        "r",
        /*dotsize*/
        t[3]
      ), d(e, "fill", r = /*point*/
      (s = t[39].data) == null ? void 0 : s.color), d(e, "opacity", l = /*current_party*/
      (p = t[0]) != null && p.id ? (
        /*point*/
        ((_ = t[39].data) == null ? void 0 : _.id) === /*current_party*/
        ((f = t[0]) == null ? void 0 : f.id) ? 1 : 0.5
      ) : 1);
    },
    m(o, s) {
      R(o, e, s);
    },
    p(o, s) {
      var p, _, f, c, y;
      s[0] & /*points*/
      4096 && a !== (a = /*point*/
      (p = o[39].data) == null ? void 0 : p.id) && d(e, "data-party", a), s[0] & /*points*/
      4096 && n !== (n = /*point*/
      o[39].x) && d(e, "cx", n), s[0] & /*points*/
      4096 && i !== (i = /*point*/
      o[39].y) && d(e, "cy", i), s[0] & /*dotsize*/
      8 && d(
        e,
        "r",
        /*dotsize*/
        o[3]
      ), s[0] & /*points*/
      4096 && r !== (r = /*point*/
      (_ = o[39].data) == null ? void 0 : _.color) && d(e, "fill", r), s[0] & /*current_party, points*/
      4097 && l !== (l = /*current_party*/
      (f = o[0]) != null && f.id ? (
        /*point*/
        ((c = o[39].data) == null ? void 0 : c.id) === /*current_party*/
        ((y = o[0]) == null ? void 0 : y.id) ? 1 : 0.5
      ) : 1) && d(e, "opacity", l);
    },
    d(o) {
      o && O(e);
    }
  };
}
function np(t) {
  let e, a, n, i, r, l, o;
  return {
    c() {
      var s, p, _, f, c;
      e = L("g"), a = L("polygon"), d(a, "transform", n = `rotate(${Math.round(
        /*point*/
        t[39].angle * 180 / Math.PI - 90
      )} 5 5)`), d(a, "points", rp), d(e, "transform", i = `
                                translate(${/*point*/
      t[39].x - 5},${/*point*/
      t[39].y - 5})
                            `), d(e, "data-party", r = /*point*/
      (s = t[39].data) == null ? void 0 : s.id), d(e, "fill", l = /*point*/
      ((p = t[39].data) == null ? void 0 : p.color) || "white"), d(e, "fill-rule", "nonzero"), d(
        e,
        "stroke",
        /*stroke*/
        t[5]
      ), d(e, "opacity", o = /*current_party*/
      (_ = t[0]) != null && _.id ? (
        /*point*/
        ((f = t[39].data) == null ? void 0 : f.id) === /*current_party*/
        ((c = t[0]) == null ? void 0 : c.id) ? 1 : 0.5
      ) : 1);
    },
    m(s, p) {
      R(s, e, p), m(e, a);
    },
    p(s, p) {
      var _, f, c, y, u;
      p[0] & /*points*/
      4096 && n !== (n = `rotate(${Math.round(
        /*point*/
        s[39].angle * 180 / Math.PI - 90
      )} 5 5)`) && d(a, "transform", n), p[0] & /*points*/
      4096 && i !== (i = `
                                translate(${/*point*/
      s[39].x - 5},${/*point*/
      s[39].y - 5})
                            `) && d(e, "transform", i), p[0] & /*points*/
      4096 && r !== (r = /*point*/
      (_ = s[39].data) == null ? void 0 : _.id) && d(e, "data-party", r), p[0] & /*points*/
      4096 && l !== (l = /*point*/
      ((f = s[39].data) == null ? void 0 : f.color) || "white") && d(e, "fill", l), p[0] & /*stroke*/
      32 && d(
        e,
        "stroke",
        /*stroke*/
        s[5]
      ), p[0] & /*current_party, points*/
      4097 && o !== (o = /*current_party*/
      (c = s[0]) != null && c.id ? (
        /*point*/
        ((y = s[39].data) == null ? void 0 : y.id) === /*current_party*/
        ((u = s[0]) == null ? void 0 : u.id) ? 1 : 0.5
      ) : 1) && d(e, "opacity", o);
    },
    d(s) {
      s && O(e);
    }
  };
}
function di(t) {
  let e;
  function a(r, l) {
    return (
      /*shape*/
      r[8] === "hexagon" ? np : ap
    );
  }
  let n = a(t), i = n(t);
  return {
    c() {
      i.c(), e = Me();
    },
    m(r, l) {
      i.m(r, l), R(r, e, l);
    },
    p(r, l) {
      n === (n = a(r)) && i ? i.p(r, l) : (i.d(1), i = n(r), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(r) {
      r && O(e), i.d(r);
    }
  };
}
function yi(t) {
  let e, a = `${/*i*/
  t[38]}`, n, i, r;
  return {
    c() {
      e = L("text"), n = B(a), d(e, "x", i = /*point*/
      t[39].x), d(e, "y", r = /*point*/
      t[39].y), d(e, "text-anchor", "middle"), d(e, "alignment-baseline", "middle"), d(e, "fill", "white"), d(e, "font-size", "8");
    },
    m(l, o) {
      R(l, e, o), m(e, n);
    },
    p(l, o) {
      o[0] & /*points*/
      4096 && i !== (i = /*point*/
      l[39].x) && d(e, "x", i), o[0] & /*points*/
      4096 && r !== (r = /*point*/
      l[39].y) && d(e, "y", r);
    },
    d(l) {
      l && O(e);
    }
  };
}
function ui(t) {
  let e, a, n, i, r, l;
  function o() {
    return (
      /*mouseover_handler*/
      t[27](
        /*cell*/
        t[36]
      )
    );
  }
  function s() {
    return (
      /*focus_handler*/
      t[28](
        /*cell*/
        t[36]
      )
    );
  }
  function p() {
    return (
      /*click_handler*/
      t[31](
        /*cell*/
        t[36]
      )
    );
  }
  function _(...f) {
    return (
      /*keypress_handler*/
      t[32](
        /*cell*/
        t[36],
        ...f
      )
    );
  }
  return {
    c() {
      e = L("path"), d(e, "class", "voronoi_path svelte-6nbde5"), d(e, "d", a = oi(
        /*cell*/
        t[36].halfedges
      ).toString()), d(e, "fill", "transparent"), d(e, "stroke", n = /*display*/
      t[11].includes("voronoi") ? "black" : "transparent"), d(e, "stroke-width", i = /*display*/
      t[11].includes("voronoi") ? 1 : 0), d(e, "role", "button"), d(
        e,
        "tabindex",
        /*i*/
        t[38]
      );
    },
    m(f, c) {
      R(f, e, c), r || (l = [
        te(e, "mouseover", o),
        te(e, "focus", s),
        te(
          e,
          "mouseout",
          /*mouseout_handler*/
          t[29]
        ),
        te(
          e,
          "blur",
          /*blur_handler*/
          t[30]
        ),
        te(e, "click", p),
        te(e, "keypress", _)
      ], r = !0);
    },
    p(f, c) {
      t = f, c[0] & /*voronoi*/
      32768 && a !== (a = oi(
        /*cell*/
        t[36].halfedges
      ).toString()) && d(e, "d", a), c[0] & /*display*/
      2048 && n !== (n = /*display*/
      t[11].includes("voronoi") ? "black" : "transparent") && d(e, "stroke", n), c[0] & /*display*/
      2048 && i !== (i = /*display*/
      t[11].includes("voronoi") ? 1 : 0) && d(e, "stroke-width", i);
    },
    d(f) {
      f && O(e), r = !1, Pe(l);
    }
  };
}
function vi(t) {
  var n;
  let e, a = (
    /*cell*/
    ((n = t[36].halfedges) == null ? void 0 : n.length) > 0 && ui(t)
  );
  return {
    c() {
      a && a.c(), e = Me();
    },
    m(i, r) {
      a && a.m(i, r), R(i, e, r);
    },
    p(i, r) {
      var l;
      /*cell*/
      ((l = i[36].halfedges) == null ? void 0 : l.length) > 0 ? a ? a.p(i, r) : (a = ui(i), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
    },
    d(i) {
      i && O(e), a && a.d(i);
    }
  };
}
function bi(t) {
  let e, a = `${/*current_party*/
  t[0].text}`, n;
  return {
    c() {
      e = L("text"), n = B(a), d(e, "x", 0), d(e, "y", 0), d(e, "text-anchor", "middle"), d(e, "alignment-baseline", "middle"), d(
        e,
        "fill",
        /*color*/
        t[4]
      ), d(
        e,
        "font-size",
        /*font_size*/
        t[6]
      );
    },
    m(i, r) {
      R(i, e, r), m(e, n);
    },
    p(i, r) {
      r[0] & /*current_party*/
      1 && a !== (a = `${/*current_party*/
      i[0].text}`) && X(n, a), r[0] & /*color*/
      16 && d(
        e,
        "fill",
        /*color*/
        i[4]
      ), r[0] & /*font_size*/
      64 && d(
        e,
        "font-size",
        /*font_size*/
        i[6]
      );
    },
    d(i) {
      i && O(e);
    }
  };
}
function ip(t) {
  let e, a, n, i, r, l, o, s, p, _, f, c, y, u, N, b, v, E, A, h = `${/*r*/
  t[1]}, 0`, g, P, U, G, x = `${/*r*/
  t[1]}, ${-/*r*/
  t[1]}`, W, M, S, z, q, w, V, J = `-${/*r*/
  t[1]}, ${-/*r*/
  t[1]}`, ne, $, be, le, T, se, re, Q, oe = `-${/*r*/
  t[1]}, 0`, Ye, Be, ee, pe, Tt, Pt, je = j(Array(
    /*rows*/
    t[2]
  )), fe = [];
  for (let C = 0; C < je.length; C += 1)
    fe[C] = ci(fi(t, je, C));
  let Je = j(
    /*points*/
    t[12]
  ), ce = [];
  for (let C = 0; C < Je.length; C += 1)
    ce[C] = di(_i(t, Je, C));
  let Qe = j(
    /*points*/
    t[12]
  ), de = [];
  for (let C = 0; C < Qe.length; C += 1)
    de[C] = yi(pi(t, Qe, C));
  let Xe = j(
    /*voronoi*/
    t[15].cells
  ), ye = [];
  for (let C = 0; C < Xe.length; C += 1)
    ye[C] = vi(si(t, Xe, C));
  let ue = (
    /*current_party*/
    t[0] && bi(t)
  );
  return {
    c() {
      var C, Y;
      e = I("main"), a = L("svg"), n = L("g");
      for (let Z = 0; Z < fe.length; Z += 1)
        fe[Z].c();
      r = L("g");
      for (let Z = 0; Z < ce.length; Z += 1)
        ce[Z].c();
      o = L("g");
      for (let Z = 0; Z < de.length; Z += 1)
        de[Z].c();
      p = L("g");
      for (let Z = 0; Z < ye.length; Z += 1)
        ye[Z].c();
      f = L("g"), ue && ue.c(), y = L("g"), u = L("g"), N = L("text"), b = B("0, 0"), v = L("circle"), E = L("g"), A = L("text"), g = B(h), P = L("circle"), U = L("g"), G = L("text"), W = B(x), z = L("circle"), w = L("g"), V = L("text"), ne = B(J), le = L("circle"), re = L("g"), Q = L("text"), Ye = B(oe), ee = L("circle"), d(n, "id", "arcs"), d(n, "transform", i = `translate(${/*r*/
      t[1] + /*left_padding*/
      t[14]}, ${/*r*/
      t[1] + /*top_padding*/
      t[13]})`), d(n, "class", "svelte-6nbde5"), H(n, "hide", !/*display*/
      t[11].includes("arcs")), d(r, "id", "points"), d(r, "transform", l = `translate(${/*r*/
      t[1] + /*left_padding*/
      t[14]}, ${/*r*/
      t[1] + /*top_padding*/
      t[13]})`), d(r, "class", "svelte-6nbde5"), H(r, "hide", !/*display*/
      t[11].includes("points")), d(o, "id", "numbers"), d(o, "transform", s = `translate(${/*r*/
      t[1] + /*left_padding*/
      t[14]}, ${/*r*/
      t[1] + /*top_padding*/
      t[13]})`), d(o, "class", "svelte-6nbde5"), H(o, "hide", !/*display*/
      t[11].includes("numbers")), d(p, "id", "voronoi"), d(p, "transform", _ = `translate(${/*r*/
      t[1] + /*left_padding*/
      t[14]}, ${/*r*/
      t[1] + /*top_padding*/
      t[13]})`), d(f, "id", "text"), d(f, "transform", c = `translate(${/*text_position*/
      ((C = t[7]) == null ? void 0 : C.x) || /*r*/
      t[1] + /*left_padding*/
      t[14]}, ${/*text_position*/
      ((Y = t[7]) == null ? void 0 : Y.y) || /*r*/
      t[1] + /*top_padding*/
      t[13] + 20})`), d(f, "class", "svelte-6nbde5"), H(f, "hide", !/*display*/
      t[11].includes("text")), d(N, "x", "0"), d(N, "y", "10"), d(N, "text-anchor", "middle"), d(N, "alignment-baseline", "middle"), d(N, "fill", "white"), d(N, "font-size", "8"), d(v, "cx", "0"), d(v, "cy", "0"), d(v, "r", "2"), d(v, "fill", "white"), d(u, "class", "reference_points"), d(
        A,
        "x",
        /*r*/
        t[1]
      ), d(A, "y", "10"), d(A, "text-anchor", "middle"), d(A, "alignment-baseline", "middle"), d(A, "fill", "white"), d(A, "font-size", "8"), d(
        P,
        "cx",
        /*r*/
        t[1]
      ), d(P, "cy", 0), d(P, "r", "2"), d(P, "fill", "white"), d(E, "class", "reference_points"), d(G, "x", M = /*r*/
      t[1] - 10), d(G, "y", S = -/*r*/
      t[1] + 10), d(G, "text-anchor", "middle"), d(G, "alignment-baseline", "middle"), d(G, "fill", "white"), d(G, "font-size", "8"), d(
        z,
        "cx",
        /*r*/
        t[1]
      ), d(z, "cy", q = -/*r*/
      t[1]), d(z, "r", "2"), d(z, "fill", "white"), d(U, "class", "reference_points"), d(V, "x", $ = -/*r*/
      t[1] + 10), d(V, "y", be = -/*r*/
      t[1] + 10), d(V, "text-anchor", "middle"), d(V, "alignment-baseline", "middle"), d(V, "fill", "white"), d(V, "font-size", "8"), d(le, "cx", T = -/*r*/
      t[1]), d(le, "cy", se = -/*r*/
      t[1]), d(le, "r", "2"), d(le, "fill", "white"), d(w, "class", "reference_points"), d(Q, "x", Be = -/*r*/
      t[1]), d(Q, "y", 10), d(Q, "text-anchor", "middle"), d(Q, "alignment-baseline", "middle"), d(Q, "fill", "white"), d(Q, "font-size", "8"), d(ee, "cx", pe = -/*r*/
      t[1]), d(ee, "cy", 0), d(ee, "r", "2"), d(ee, "fill", "white"), d(re, "class", "reference_points"), d(y, "id", "referencePoints"), d(y, "transform", Tt = `translate(${/*r*/
      t[1] + /*left_padding*/
      t[14]}, ${/*r*/
      t[1] + /*top_padding*/
      t[13]})`), d(y, "class", "svelte-6nbde5"), H(y, "hide", !/*display*/
      t[11].includes("referencePoints")), d(
        a,
        "width",
        /*display_width*/
        t[9]
      ), d(
        a,
        "height",
        /*display_height*/
        t[10]
      ), d(a, "viewBox", Pt = "0 0 " + /*svg_width*/
      t[16] + " " + /*svg_height*/
      t[17]);
    },
    m(C, Y) {
      R(C, e, Y), m(e, a), m(a, n);
      for (let Z = 0; Z < fe.length; Z += 1)
        fe[Z] && fe[Z].m(n, null);
      m(a, r);
      for (let Z = 0; Z < ce.length; Z += 1)
        ce[Z] && ce[Z].m(r, null);
      m(a, o);
      for (let Z = 0; Z < de.length; Z += 1)
        de[Z] && de[Z].m(o, null);
      m(a, p);
      for (let Z = 0; Z < ye.length; Z += 1)
        ye[Z] && ye[Z].m(p, null);
      m(a, f), ue && ue.m(f, null), m(a, y), m(y, u), m(u, N), m(N, b), m(u, v), m(y, E), m(E, A), m(A, g), m(E, P), m(y, U), m(U, G), m(G, W), m(U, z), m(y, w), m(w, V), m(V, ne), m(w, le), m(y, re), m(re, Q), m(Q, Ye), m(re, ee);
    },
    p(C, Y) {
      var Z, Ba;
      if (Y[0] & /*r, rows*/
      6) {
        je = j(Array(
          /*rows*/
          C[2]
        ));
        let D;
        for (D = 0; D < je.length; D += 1) {
          const Se = fi(C, je, D);
          fe[D] ? fe[D].p(Se, Y) : (fe[D] = ci(Se), fe[D].c(), fe[D].m(n, null));
        }
        for (; D < fe.length; D += 1)
          fe[D].d(1);
        fe.length = je.length;
      }
      if (Y[0] & /*r, left_padding, top_padding*/
      24578 && i !== (i = `translate(${/*r*/
      C[1] + /*left_padding*/
      C[14]}, ${/*r*/
      C[1] + /*top_padding*/
      C[13]})`) && d(n, "transform", i), Y[0] & /*display*/
      2048 && H(n, "hide", !/*display*/
      C[11].includes("arcs")), Y[0] & /*points, stroke, current_party, shape, dotsize*/
      4393) {
        Je = j(
          /*points*/
          C[12]
        );
        let D;
        for (D = 0; D < Je.length; D += 1) {
          const Se = _i(C, Je, D);
          ce[D] ? ce[D].p(Se, Y) : (ce[D] = di(Se), ce[D].c(), ce[D].m(r, null));
        }
        for (; D < ce.length; D += 1)
          ce[D].d(1);
        ce.length = Je.length;
      }
      if (Y[0] & /*r, left_padding, top_padding*/
      24578 && l !== (l = `translate(${/*r*/
      C[1] + /*left_padding*/
      C[14]}, ${/*r*/
      C[1] + /*top_padding*/
      C[13]})`) && d(r, "transform", l), Y[0] & /*display*/
      2048 && H(r, "hide", !/*display*/
      C[11].includes("points")), Y[0] & /*points*/
      4096) {
        Qe = j(
          /*points*/
          C[12]
        );
        let D;
        for (D = 0; D < Qe.length; D += 1) {
          const Se = pi(C, Qe, D);
          de[D] ? de[D].p(Se, Y) : (de[D] = yi(Se), de[D].c(), de[D].m(o, null));
        }
        for (; D < de.length; D += 1)
          de[D].d(1);
        de.length = Qe.length;
      }
      if (Y[0] & /*r, left_padding, top_padding*/
      24578 && s !== (s = `translate(${/*r*/
      C[1] + /*left_padding*/
      C[14]}, ${/*r*/
      C[1] + /*top_padding*/
      C[13]})`) && d(o, "transform", s), Y[0] & /*display*/
      2048 && H(o, "hide", !/*display*/
      C[11].includes("numbers")), Y[0] & /*voronoi, display, selectParty, unselectParty, clickParty*/
      1869824) {
        Xe = j(
          /*voronoi*/
          C[15].cells
        );
        let D;
        for (D = 0; D < Xe.length; D += 1) {
          const Se = si(C, Xe, D);
          ye[D] ? ye[D].p(Se, Y) : (ye[D] = vi(Se), ye[D].c(), ye[D].m(p, null));
        }
        for (; D < ye.length; D += 1)
          ye[D].d(1);
        ye.length = Xe.length;
      }
      Y[0] & /*r, left_padding, top_padding*/
      24578 && _ !== (_ = `translate(${/*r*/
      C[1] + /*left_padding*/
      C[14]}, ${/*r*/
      C[1] + /*top_padding*/
      C[13]})`) && d(p, "transform", _), /*current_party*/
      C[0] ? ue ? ue.p(C, Y) : (ue = bi(C), ue.c(), ue.m(f, null)) : ue && (ue.d(1), ue = null), Y[0] & /*text_position, r, left_padding, top_padding*/
      24706 && c !== (c = `translate(${/*text_position*/
      ((Z = C[7]) == null ? void 0 : Z.x) || /*r*/
      C[1] + /*left_padding*/
      C[14]}, ${/*text_position*/
      ((Ba = C[7]) == null ? void 0 : Ba.y) || /*r*/
      C[1] + /*top_padding*/
      C[13] + 20})`) && d(f, "transform", c), Y[0] & /*display*/
      2048 && H(f, "hide", !/*display*/
      C[11].includes("text")), Y[0] & /*r*/
      2 && h !== (h = `${/*r*/
      C[1]}, 0`) && X(g, h), Y[0] & /*r*/
      2 && d(
        A,
        "x",
        /*r*/
        C[1]
      ), Y[0] & /*r*/
      2 && d(
        P,
        "cx",
        /*r*/
        C[1]
      ), Y[0] & /*r*/
      2 && x !== (x = `${/*r*/
      C[1]}, ${-/*r*/
      C[1]}`) && X(W, x), Y[0] & /*r*/
      2 && M !== (M = /*r*/
      C[1] - 10) && d(G, "x", M), Y[0] & /*r*/
      2 && S !== (S = -/*r*/
      C[1] + 10) && d(G, "y", S), Y[0] & /*r*/
      2 && d(
        z,
        "cx",
        /*r*/
        C[1]
      ), Y[0] & /*r*/
      2 && q !== (q = -/*r*/
      C[1]) && d(z, "cy", q), Y[0] & /*r*/
      2 && J !== (J = `-${/*r*/
      C[1]}, ${-/*r*/
      C[1]}`) && X(ne, J), Y[0] & /*r*/
      2 && $ !== ($ = -/*r*/
      C[1] + 10) && d(V, "x", $), Y[0] & /*r*/
      2 && be !== (be = -/*r*/
      C[1] + 10) && d(V, "y", be), Y[0] & /*r*/
      2 && T !== (T = -/*r*/
      C[1]) && d(le, "cx", T), Y[0] & /*r*/
      2 && se !== (se = -/*r*/
      C[1]) && d(le, "cy", se), Y[0] & /*r*/
      2 && oe !== (oe = `-${/*r*/
      C[1]}, 0`) && X(Ye, oe), Y[0] & /*r*/
      2 && Be !== (Be = -/*r*/
      C[1]) && d(Q, "x", Be), Y[0] & /*r*/
      2 && pe !== (pe = -/*r*/
      C[1]) && d(ee, "cx", pe), Y[0] & /*r, left_padding, top_padding*/
      24578 && Tt !== (Tt = `translate(${/*r*/
      C[1] + /*left_padding*/
      C[14]}, ${/*r*/
      C[1] + /*top_padding*/
      C[13]})`) && d(y, "transform", Tt), Y[0] & /*display*/
      2048 && H(y, "hide", !/*display*/
      C[11].includes("referencePoints")), Y[0] & /*display_width*/
      512 && d(
        a,
        "width",
        /*display_width*/
        C[9]
      ), Y[0] & /*display_height*/
      1024 && d(
        a,
        "height",
        /*display_height*/
        C[10]
      ), Y[0] & /*svg_width, svg_height*/
      196608 && Pt !== (Pt = "0 0 " + /*svg_width*/
      C[16] + " " + /*svg_height*/
      C[17]) && d(a, "viewBox", Pt);
    },
    i: ie,
    o: ie,
    d(C) {
      C && O(e), _e(fe, C), _e(ce, C), _e(de, C), _e(ye, C), ue && ue.d();
    }
  };
}
let rp = "5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75";
function lp(t, e, a) {
  let { data: n = [] } = e, { r: i = 300 } = e, { rows: r = 12 } = e, { dotsize: l = 5 } = e, { padding: o = 10 } = e, { total_seats: s } = e, { color: p = "white" } = e, { stroke: _ = "#444444" } = e, { font_size: f = 12 } = e, { arc: c = 180 } = e, { text_position: y = null } = e, { shape: u = "circle" } = e, { display_width: N = 600 } = e, { display_height: b = 300 } = e, { display: v = ["points", "text"] } = e, { current_party: E = null } = e, A = [], h = null, g = !1, P = 0, U = 0, G = 0, x = 0, W = 0, M = 0;
  function S() {
    Array.isArray(o) ? o.length === 2 ? (a(13, P = o[0]), a(25, U = o[0]), a(14, G = o[1]), a(26, x = o[1])) : o.length === 4 && (a(13, P = o[0]), a(25, U = o[1]), a(14, G = o[2]), a(26, x = o[3])) : (a(13, P = o), a(25, U = o), a(14, G = o), a(26, x = o));
  }
  function z(T) {
    T.data && !g && a(0, E = T.data);
  }
  function q(T) {
    T.data && (E && g && E.id === T.data.id ? (a(0, E = null), g = !1) : (a(0, E = T.data), g = !0));
  }
  function w() {
    g || a(0, E = null);
  }
  const V = (T) => {
    z(T.site);
  }, J = (T) => z(T.site), ne = () => w(), $ = () => w(), be = (T) => {
    q(T.site);
  }, le = (T, se) => {
    se.key === "Enter" && q(T.site);
  };
  return t.$$set = (T) => {
    "data" in T && a(22, n = T.data), "r" in T && a(1, i = T.r), "rows" in T && a(2, r = T.rows), "dotsize" in T && a(3, l = T.dotsize), "padding" in T && a(23, o = T.padding), "total_seats" in T && a(24, s = T.total_seats), "color" in T && a(4, p = T.color), "stroke" in T && a(5, _ = T.stroke), "font_size" in T && a(6, f = T.font_size), "arc" in T && a(21, c = T.arc), "text_position" in T && a(7, y = T.text_position), "shape" in T && a(8, u = T.shape), "display_width" in T && a(9, N = T.display_width), "display_height" in T && a(10, b = T.display_height), "display" in T && a(11, v = T.display), "current_party" in T && a(0, E = T.current_party);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*arc, data, r, rows, total_seats, points, left_padding, right_padding, top_padding, bottom_padding*/
    123760646) {
      c < 10 && a(21, c = 10), c > 360 && a(21, c = 360), S(), n.sort((re, Q) => Q.count - re.count), n.reduce((re, Q) => re + Q.count, 0), a(12, A = tp(i, r, s, c));
      let T = 0;
      for (let re in n)
        for (let Q = 0; Q < n[re].count; Q++)
          a(12, A[T].data = n[re], A), T++;
      a(15, h = ep(A)), a(16, W = i * 2 + G + x);
      let se = c / 180;
      c < 180 && (se = 1), a(17, M = (i + P + U) * se);
    }
  }, [
    E,
    i,
    r,
    l,
    p,
    _,
    f,
    y,
    u,
    N,
    b,
    v,
    A,
    P,
    G,
    h,
    W,
    M,
    z,
    q,
    w,
    c,
    n,
    o,
    s,
    U,
    x,
    V,
    J,
    ne,
    $,
    be,
    le
  ];
}
class op extends Ee {
  constructor(e) {
    super(), me(
      this,
      e,
      lp,
      ip,
      Ne,
      {
        data: 22,
        r: 1,
        rows: 2,
        dotsize: 3,
        padding: 23,
        total_seats: 24,
        color: 4,
        stroke: 5,
        font_size: 6,
        arc: 21,
        text_position: 7,
        shape: 8,
        display_width: 9,
        display_height: 10,
        display: 11,
        current_party: 0
      },
      null,
      [-1, -1]
    );
  }
}
const sp = 400, pp = 80, _p = 64, fp = 51, cp = {
  National: sp,
  "Eastern Cape": 72,
  "Free State": 30,
  Gauteng: pp,
  "KwaZulu-Natal": 80,
  Limpopo: _p,
  Mpumalanga: fp,
  "North West": 38,
  "Northern Cape": 30,
  "Western Cape": 42
};
function Ni(t, e, a) {
  const n = t.slice();
  return n[25] = e[a], n;
}
function Ai(t, e, a) {
  const n = t.slice();
  return n[28] = e[a], n;
}
function hi(t) {
  let e, a, n, i, r, l, o, s, p, _, f = j(qe), c = [];
  for (let b = 0; b < f.length; b += 1)
    c[b] = mi(Ai(t, f, b));
  function y(b, v) {
    return (
      /*selected_election*/
      b[1] === "National Assembly" ? yp : dp
    );
  }
  let u = y(t), N = u(t);
  return {
    c() {
      e = I("div"), a = I("button"), a.textContent = "National Assembly", n = F(), i = I("button"), i.textContent = "Provincial Legislature", r = F(), l = I("div");
      for (let b = 0; b < c.length; b += 1)
        c[b].c();
      o = F(), s = I("div"), N.c(), d(a, "class", "electionengine-year-button svelte-1b22doy"), H(
        a,
        "active",
        /*selected_election*/
        t[1] === "National Assembly"
      ), d(i, "class", "electionengine-year-button svelte-1b22doy"), H(
        i,
        "active",
        /*selected_election*/
        t[1] === "Provincial Legislature"
      ), d(e, "class", "electionengine-years-buttons"), d(l, "class", "electionengine-years-buttons"), d(s, "class", "electionengine-years-buttons");
    },
    m(b, v) {
      R(b, e, v), m(e, a), m(e, n), m(e, i), R(b, r, v), R(b, l, v);
      for (let E = 0; E < c.length; E += 1)
        c[E] && c[E].m(l, null);
      R(b, o, v), R(b, s, v), N.m(s, null), p || (_ = [
        te(
          a,
          "click",
          /*click_handler*/
          t[18]
        ),
        te(
          i,
          "click",
          /*click_handler_1*/
          t[19]
        )
      ], p = !0);
    },
    p(b, v) {
      if (v & /*selected_election*/
      2 && H(
        a,
        "active",
        /*selected_election*/
        b[1] === "National Assembly"
      ), v & /*selected_election*/
      2 && H(
        i,
        "active",
        /*selected_election*/
        b[1] === "Provincial Legislature"
      ), v & /*selected_year, setYear*/
      32769) {
        f = j(qe);
        let E;
        for (E = 0; E < f.length; E += 1) {
          const A = Ai(b, f, E);
          c[E] ? c[E].p(A, v) : (c[E] = mi(A), c[E].c(), c[E].m(l, null));
        }
        for (; E < c.length; E += 1)
          c[E].d(1);
        c.length = f.length;
      }
      u === (u = y(b)) && N ? N.p(b, v) : (N.d(1), N = u(b), N && (N.c(), N.m(s, null)));
    },
    d(b) {
      b && (O(e), O(r), O(l), O(o), O(s)), _e(c, b), N.d(), p = !1, Pe(_);
    }
  };
}
function mi(t) {
  let e, a, n;
  function i() {
    return (
      /*click_handler_2*/
      t[20](
        /*year*/
        t[28]
      )
    );
  }
  return {
    c() {
      e = I("button"), e.textContent = `${/*year*/
      t[28]} `, d(e, "class", "electionengine-year-button svelte-1b22doy"), H(
        e,
        "active",
        /*selected_year*/
        t[0] === /*year*/
        t[28]
      );
    },
    m(r, l) {
      R(r, e, l), a || (n = te(e, "click", i), a = !0);
    },
    p(r, l) {
      t = r, l & /*selected_year*/
      1 && H(
        e,
        "active",
        /*selected_year*/
        t[0] === /*year*/
        t[28]
      );
    },
    d(r) {
      r && O(e), a = !1, n();
    }
  };
}
function dp(t) {
  let e, a = j(
    /*provinces*/
    t[13]
  ), n = [];
  for (let i = 0; i < a.length; i += 1)
    n[i] = Ei(Ni(t, a, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Me();
    },
    m(i, r) {
      for (let l = 0; l < n.length; l += 1)
        n[l] && n[l].m(i, r);
      R(i, e, r);
    },
    p(i, r) {
      if (r & /*selected_region, provinces, setRegion*/
      139268) {
        a = j(
          /*provinces*/
          i[13]
        );
        let l;
        for (l = 0; l < a.length; l += 1) {
          const o = Ni(i, a, l);
          n[l] ? n[l].p(o, r) : (n[l] = Ei(o), n[l].c(), n[l].m(e.parentNode, e));
        }
        for (; l < n.length; l += 1)
          n[l].d(1);
        n.length = a.length;
      }
    },
    d(i) {
      i && O(e), _e(n, i);
    }
  };
}
function yp(t) {
  let e, a, n;
  return {
    c() {
      e = I("button"), e.textContent = "National", d(e, "class", "electionengine-year-button svelte-1b22doy"), H(
        e,
        "active",
        /*selected_region*/
        t[2] === "National"
      );
    },
    m(i, r) {
      R(i, e, r), a || (n = te(
        e,
        "click",
        /*click_handler_3*/
        t[21]
      ), a = !0);
    },
    p(i, r) {
      r & /*selected_region*/
      4 && H(
        e,
        "active",
        /*selected_region*/
        i[2] === "National"
      );
    },
    d(i) {
      i && O(e), a = !1, n();
    }
  };
}
function Ei(t) {
  let e, a, n;
  function i() {
    return (
      /*click_handler_4*/
      t[22](
        /*province*/
        t[25]
      )
    );
  }
  return {
    c() {
      e = I("button"), e.textContent = `${/*province*/
      t[25]} `, d(e, "class", "electionengine-year-button svelte-1b22doy"), H(
        e,
        "active",
        /*selected_region*/
        t[2] === /*province*/
        t[25]
      );
    },
    m(r, l) {
      R(r, e, l), a || (n = te(e, "click", i), a = !0);
    },
    p(r, l) {
      t = r, l & /*selected_region, provinces*/
      8196 && H(
        e,
        "active",
        /*selected_region*/
        t[2] === /*province*/
        t[25]
      );
    },
    d(r) {
      r && O(e), a = !1, n();
    }
  };
}
function gi(t) {
  let e, a = (
    /*selected_region*/
    t[2] === "National" ? `General Asssembly seat allocation for ${/*selected_year*/
    t[0]}` : `${/*selected_region*/
    t[2]} Provincial Legislature seat allocation for ${/*selected_year*/
    t[0]}`
  ), n;
  return {
    c() {
      e = I("div"), n = B(a), d(e, "class", "electionengine-title svelte-1b22doy");
    },
    m(i, r) {
      R(i, e, r), m(e, n);
    },
    p(i, r) {
      r & /*selected_region, selected_year*/
      5 && a !== (a = /*selected_region*/
      i[2] === "National" ? `General Asssembly seat allocation for ${/*selected_year*/
      i[0]}` : `${/*selected_region*/
      i[2]} Provincial Legislature seat allocation for ${/*selected_year*/
      i[0]}`) && X(n, a);
    },
    d(i) {
      i && O(e);
    }
  };
}
function Ci(t) {
  let e, a;
  return {
    c() {
      e = I("div"), a = B(
        /*blurb*/
        t[6]
      ), d(e, "class", "electionengine-blurb svelte-1b22doy");
    },
    m(n, i) {
      R(n, e, i), m(e, a);
    },
    p(n, i) {
      i & /*blurb*/
      64 && X(
        a,
        /*blurb*/
        n[6]
      );
    },
    d(n) {
      n && O(e);
    }
  };
}
function Ii(t) {
  var P, U, G;
  let e, a, n, i = (
    /*current_party*/
    ((P = t[11]) == null ? void 0 : P.text) + ""
  ), r, l, o, s = (
    /*current_party*/
    ((U = t[11]) == null ? void 0 : U.count) + ""
  ), p, _, f, c, y, u, N, b, v, E = (Math.round(
    /*current_party*/
    t[11].percentage
  ) || "<1") + "", A, h, g = `6px ${/*current_party*/
  (G = t[11]) == null ? void 0 : G.color} solid`;
  return {
    c() {
      e = I("div"), a = I("div"), n = I("div"), r = B(i), l = F(), o = I("div"), p = B(s), _ = B(" seats"), f = F(), c = I("div"), y = I("div"), u = I("div"), N = I("div"), b = F(), v = I("span"), A = B(E), h = B("%"), d(n, "class", "electionengine-party-name svelte-1b22doy"), d(o, "class", "electionengine-seat-count"), d(N, "class", "electionengine-tooltip-inner svelte-1b22doy"), ae(
        N,
        "width",
        /*current_party*/
        t[11].percentage + "%"
      ), ae(
        N,
        "background",
        /*current_party*/
        t[11].color
      ), d(u, "class", "electionengine-tooltip-outer svelte-1b22doy"), d(y, "class", "electionengine-tooltip-range svelte-1b22doy"), d(c, "class", "electionengine-tooltip-range-wrapper electionengine-tooltip-tdata svelte-1b22doy"), d(a, "class", "electionengine-party-results-information svelte-1b22doy"), ae(a, "border-left", g), d(e, "class", "electionengine-party-results-information-container svelte-1b22doy");
    },
    m(x, W) {
      R(x, e, W), m(e, a), m(a, n), m(n, r), m(a, l), m(a, o), m(o, p), m(o, _), m(a, f), m(a, c), m(c, y), m(y, u), m(u, N), m(c, b), m(c, v), m(v, A), m(v, h);
    },
    p(x, W) {
      var M, S, z;
      W & /*current_party*/
      2048 && i !== (i = /*current_party*/
      ((M = x[11]) == null ? void 0 : M.text) + "") && X(r, i), W & /*current_party*/
      2048 && s !== (s = /*current_party*/
      ((S = x[11]) == null ? void 0 : S.count) + "") && X(p, s), W & /*current_party*/
      2048 && ae(
        N,
        "width",
        /*current_party*/
        x[11].percentage + "%"
      ), W & /*current_party*/
      2048 && ae(
        N,
        "background",
        /*current_party*/
        x[11].color
      ), W & /*current_party*/
      2048 && E !== (E = (Math.round(
        /*current_party*/
        x[11].percentage
      ) || "<1") + "") && X(A, E), W & /*current_party*/
      2048 && g !== (g = `6px ${/*current_party*/
      (z = x[11]) == null ? void 0 : z.color} solid`) && ae(a, "border-left", g);
    },
    d(x) {
      x && O(e);
    }
  };
}
function up(t) {
  let e, a, n, i, r, l, o, s, p, _, f = (
    /*show_buttons*/
    t[7] && hi(t)
  ), c = (
    /*show_title*/
    t[8] && gi(t)
  );
  function y(v) {
    t[23](v);
  }
  let u = {
    displayHeight: (
      /*displayHeight*/
      t[9]
    ),
    data: (
      /*data*/
      t[12]
    ),
    rows: (
      /*rows*/
      t[5]
    ),
    display: (
      /*display*/
      t[10]
    ),
    color: vp,
    font_size: bp,
    shape: Np,
    arc: (
      /*arc*/
      t[14]
    ),
    total_seats: (
      /*total_seats*/
      t[4]
    ),
    r: (
      /*r*/
      t[3]
    )
  };
  /*current_party*/
  t[11] !== void 0 && (u.current_party = /*current_party*/
  t[11]), l = new op({ props: u }), Le.push(() => Ue(l, "current_party", y));
  let N = (
    /*blurb*/
    t[6] && Ci(t)
  ), b = (
    /*current_party*/
    t[11] && Ii(t)
  );
  return {
    c() {
      e = I("div"), f && f.c(), a = F(), c && c.c(), n = F(), i = I("div"), r = I("div"), Re(l.$$.fragment), s = F(), N && N.c(), p = F(), b && b.c(), d(r, "class", "electionengine-hemicycle-container svelte-1b22doy"), d(i, "class", "election-engine-hemicycle-section svelte-1b22doy"), d(e, "class", "election-engine-hemicycle-app svelte-1b22doy");
    },
    m(v, E) {
      R(v, e, E), f && f.m(e, null), m(e, a), c && c.m(e, null), m(e, n), m(e, i), m(i, r), Ae(l, r, null), m(i, s), N && N.m(i, null), m(i, p), b && b.m(i, null), _ = !0;
    },
    p(v, [E]) {
      /*show_buttons*/
      v[7] ? f ? f.p(v, E) : (f = hi(v), f.c(), f.m(e, a)) : f && (f.d(1), f = null), /*show_title*/
      v[8] ? c ? c.p(v, E) : (c = gi(v), c.c(), c.m(e, n)) : c && (c.d(1), c = null);
      const A = {};
      E & /*displayHeight*/
      512 && (A.displayHeight = /*displayHeight*/
      v[9]), E & /*data*/
      4096 && (A.data = /*data*/
      v[12]), E & /*rows*/
      32 && (A.rows = /*rows*/
      v[5]), E & /*display*/
      1024 && (A.display = /*display*/
      v[10]), E & /*total_seats*/
      16 && (A.total_seats = /*total_seats*/
      v[4]), E & /*r*/
      8 && (A.r = /*r*/
      v[3]), !o && E & /*current_party*/
      2048 && (o = !0, A.current_party = /*current_party*/
      v[11], Ve(() => o = !1)), l.$set(A), /*blurb*/
      v[6] ? N ? N.p(v, E) : (N = Ci(v), N.c(), N.m(i, p)) : N && (N.d(1), N = null), /*current_party*/
      v[11] ? b ? b.p(v, E) : (b = Ii(v), b.c(), b.m(i, null)) : b && (b.d(1), b = null);
    },
    i(v) {
      _ || (k(l.$$.fragment, v), _ = !0);
    },
    o(v) {
      K(l.$$.fragment, v), _ = !1;
    },
    d(v) {
      v && O(e), f && f.d(), c && c.d(), he(l), N && N.d(), b && b.d();
    }
  };
}
const vp = "black", bp = "20", Np = "hexagon";
function Ap(t, e, a) {
  let n = We.filter((S) => S !== "Out of Country"), { selected_year: i = 2024 } = e, { selected_election: r = "National Assembly" } = e, { selected_region: l = "National" } = e, { show_buttons: o = !1 } = e, { show_title: s = !0 } = e, { displayHeight: p = 640 } = e, { r: _ = 300 } = e, f, { total_seats: c = 400 } = e, { rows: y = 12 } = e, { display: u = ["points"] } = e, { blurb: N = null } = e, b, v;
  dt(async () => {
    a(12, b = await g());
  });
  async function E(S) {
    S !== i && (a(0, i = S), a(12, b = await g()));
  }
  async function A(S) {
    S !== r && (a(1, r = S), a(12, b = await g()));
  }
  async function h(S) {
    S !== l && (a(2, l = S), S === "National" && a(4, c = 400), a(12, b = await g()));
  }
  async function g() {
    a(12, b = []), l === "National" && r === "Provincial Legislature" && a(2, l = "Gauteng");
    const S = await pt({
      year: i,
      election: r,
      region: "National"
    });
    if (r === "National Assembly") {
      a(6, N = "The 400 seats of the National Assembly are calculated by assigning 200 from the provincial ballot and 200 from the national list. In 2024, the provincial ballot includes independent candidates."), a(2, l = "National");
      const z = S.party_ballot_results.map((q, w) => ({
        id: q.party_id,
        text: q.party_name,
        count: q.seats,
        color: Ke(q.party_abbreviation, w),
        percentage: q.vote_perc
      }));
      return a(4, c = 400), a(5, y = 13), a(3, _ = 300), z;
    } else {
      const q = S.provincial_results.find((w) => w.province_name === l).party_ballot_results.filter((w) => w.seats > 0).map((w, V) => ({
        id: w.party_id,
        text: w.party_name,
        count: w.seats,
        color: Ke(w.party_abbreviation, V),
        percentage: w.vote_perc
      }));
      return i === 2024 ? a(4, c = cp[l]) : a(4, c = q.reduce((w, V) => w + V.count, 0)), a(6, N = `Each Provincial Legislature has a different number of seats. In ${i}, the ${l} Legislature has ${c} seats.`), a(5, y = Math.ceil(c / 15)), a(3, _ = 200), q;
    }
  }
  const P = () => A("National Assembly"), U = () => A("Provincial Legislature"), G = (S) => E(S), x = () => h("National"), W = (S) => h(S);
  function M(S) {
    f = S, a(11, f);
  }
  return t.$$set = (S) => {
    "selected_year" in S && a(0, i = S.selected_year), "selected_election" in S && a(1, r = S.selected_election), "selected_region" in S && a(2, l = S.selected_region), "show_buttons" in S && a(7, o = S.show_buttons), "show_title" in S && a(8, s = S.show_title), "displayHeight" in S && a(9, p = S.displayHeight), "r" in S && a(3, _ = S.r), "total_seats" in S && a(4, c = S.total_seats), "rows" in S && a(5, y = S.rows), "display" in S && a(10, u = S.display), "blurb" in S && a(6, N = S.blurb);
  }, [
    i,
    r,
    l,
    _,
    c,
    y,
    N,
    o,
    s,
    p,
    u,
    f,
    b,
    n,
    v,
    E,
    A,
    h,
    P,
    U,
    G,
    x,
    W,
    M
  ];
}
let hp = class extends Ee {
  constructor(e) {
    super(), me(this, e, Ap, up, Ne, {
      selected_year: 0,
      selected_election: 1,
      selected_region: 2,
      show_buttons: 7,
      show_title: 8,
      displayHeight: 9,
      r: 3,
      total_seats: 4,
      rows: 5,
      display: 10,
      blurb: 6
    });
  }
};
function Oi(t) {
  let e, a;
  return e = new hp({
    props: {
      selected_year: (
        /*selected_year*/
        t[1]
      ),
      selected_election: (
        /*selected_election*/
        t[2]
      ),
      selected_region: (
        /*selected_region*/
        t[3]
      )
    }
  }), {
    c() {
      Re(e.$$.fragment);
    },
    m(n, i) {
      Ae(e, n, i), a = !0;
    },
    p(n, i) {
      const r = {};
      i & /*selected_year*/
      2 && (r.selected_year = /*selected_year*/
      n[1]), i & /*selected_election*/
      4 && (r.selected_election = /*selected_election*/
      n[2]), i & /*selected_region*/
      8 && (r.selected_region = /*selected_region*/
      n[3]), e.$set(r);
    },
    i(n) {
      a || (k(e.$$.fragment, n), a = !0);
    },
    o(n) {
      K(e.$$.fragment, n), a = !1;
    },
    d(n) {
      he(e, n);
    }
  };
}
function Ri(t) {
  let e, a;
  return e = new ws({
    props: {
      selected_year: (
        /*selected_year*/
        t[1]
      ),
      selected_election: (
        /*selected_election*/
        t[2]
      ),
      selected_region: (
        /*selected_region*/
        t[3]
      )
    }
  }), {
    c() {
      Re(e.$$.fragment);
    },
    m(n, i) {
      Ae(e, n, i), a = !0;
    },
    p(n, i) {
      const r = {};
      i & /*selected_year*/
      2 && (r.selected_year = /*selected_year*/
      n[1]), i & /*selected_election*/
      4 && (r.selected_election = /*selected_election*/
      n[2]), i & /*selected_region*/
      8 && (r.selected_region = /*selected_region*/
      n[3]), e.$set(r);
    },
    i(n) {
      a || (k(e.$$.fragment, n), a = !0);
    },
    o(n) {
      K(e.$$.fragment, n), a = !1;
    },
    d(n) {
      he(e, n);
    }
  };
}
function Si(t) {
  let e, a;
  return e = new Ys({
    props: {
      selected_year: (
        /*selected_year*/
        t[1]
      ),
      selected_election: (
        /*selected_election*/
        t[2]
      ),
      selected_region: (
        /*selected_region*/
        t[3]
      ),
      selected_fields: (
        /*selected_fields*/
        t[4]
      )
    }
  }), {
    c() {
      Re(e.$$.fragment);
    },
    m(n, i) {
      Ae(e, n, i), a = !0;
    },
    p(n, i) {
      const r = {};
      i & /*selected_year*/
      2 && (r.selected_year = /*selected_year*/
      n[1]), i & /*selected_election*/
      4 && (r.selected_election = /*selected_election*/
      n[2]), i & /*selected_region*/
      8 && (r.selected_region = /*selected_region*/
      n[3]), i & /*selected_fields*/
      16 && (r.selected_fields = /*selected_fields*/
      n[4]), e.$set(r);
    },
    i(n) {
      a || (k(e.$$.fragment, n), a = !0);
    },
    o(n) {
      K(e.$$.fragment, n), a = !1;
    },
    d(n) {
      he(e, n);
    }
  };
}
function mp(t) {
  let e, a, n, i, r = (
    /*visualisation*/
    t[0] === "hemicycle" && Oi(t)
  ), l = (
    /*visualisation*/
    t[0] === "carto" && Ri(t)
  ), o = (
    /*visualisation*/
    t[0] === "table" && Si(t)
  );
  return {
    c() {
      r && r.c(), e = F(), l && l.c(), a = F(), o && o.c(), n = Me();
    },
    m(s, p) {
      r && r.m(s, p), R(s, e, p), l && l.m(s, p), R(s, a, p), o && o.m(s, p), R(s, n, p), i = !0;
    },
    p(s, [p]) {
      /*visualisation*/
      s[0] === "hemicycle" ? r ? (r.p(s, p), p & /*visualisation*/
      1 && k(r, 1)) : (r = Oi(s), r.c(), k(r, 1), r.m(e.parentNode, e)) : r && (Ie(), K(r, 1, 1, () => {
        r = null;
      }), Oe()), /*visualisation*/
      s[0] === "carto" ? l ? (l.p(s, p), p & /*visualisation*/
      1 && k(l, 1)) : (l = Ri(s), l.c(), k(l, 1), l.m(a.parentNode, a)) : l && (Ie(), K(l, 1, 1, () => {
        l = null;
      }), Oe()), /*visualisation*/
      s[0] === "table" ? o ? (o.p(s, p), p & /*visualisation*/
      1 && k(o, 1)) : (o = Si(s), o.c(), k(o, 1), o.m(n.parentNode, n)) : o && (Ie(), K(o, 1, 1, () => {
        o = null;
      }), Oe());
    },
    i(s) {
      i || (k(r), k(l), k(o), i = !0);
    },
    o(s) {
      K(r), K(l), K(o), i = !1;
    },
    d(s) {
      s && (O(e), O(a), O(n)), r && r.d(s), l && l.d(s), o && o.d(s);
    }
  };
}
function Ep(t, e, a) {
  let { visualisation: n = "hemicycle" } = e, { selected_year: i = 2024 } = e, { selected_election: r = "National Assembly" } = e, { selected_region: l = "Gauteng" } = e, { selected_fields: o = ["Party", "Votes", "Seats"] } = e;
  return dt(async () => {
  }), t.$$set = (s) => {
    "visualisation" in s && a(0, n = s.visualisation), "selected_year" in s && a(1, i = s.selected_year), "selected_election" in s && a(2, r = s.selected_election), "selected_region" in s && a(3, l = s.selected_region), "selected_fields" in s && a(4, o = s.selected_fields);
  }, [
    n,
    i,
    r,
    l,
    o
  ];
}
class gp extends Ee {
  constructor(e) {
    super(), me(this, e, Ep, mp, Ne, {
      visualisation: 0,
      selected_year: 1,
      selected_election: 2,
      selected_region: 3,
      selected_fields: 4
    });
  }
}
jQuery(() => {
  document.querySelectorAll(".wp-block-tenlayer-election-engine").forEach((e) => {
    var n;
    let a = {
      id: e.id,
      visualisation: jQuery(e).data("visualisation"),
      selected_year: jQuery(e).data("selected_year"),
      selected_election: jQuery(e).data("selected_election"),
      selected_region: jQuery(e).data("selected_region"),
      selected_fields: (n = jQuery(e).data("selected_fields")) == null ? void 0 : n.split(",").map((i) => i.trim())
    };
    new gp({
      target: e,
      props: a
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Rpb24tZW5naW5lLmVzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL3V0aWxzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC9lbnZpcm9ubWVudC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvbG9vcC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvZG9tLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC9zdHlsZV9tYW5hZ2VyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC9saWZlY3ljbGUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL3NjaGVkdWxlci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvaW50ZXJuYWwvdHJhbnNpdGlvbnMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL2VhY2guanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL0NvbXBvbmVudC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3NoYXJlZC92ZXJzaW9uLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvcnVudGltZS9pbnRlcm5hbC9kaXNjbG9zZS12ZXJzaW9uL2luZGV4LmpzIiwiLi4vLi4vLi4vY29tbW9uL2xvYWREYXRhLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9hc2NlbmRpbmcuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Rlc2NlbmRpbmcuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Jpc2VjdG9yLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9udW1iZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Jpc2VjdC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZXh0ZW50LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9mc3VtLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aWNrcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWVyZ2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9tYXRoLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvbm9vcC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3N0cmVhbS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NsaXAvYnVmZmVyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcG9pbnRFcXVhbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NsaXAvcmVqb2luLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9saW5lLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9yZWN0YW5nbGUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9pZGVudGl0eS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BhdGgvYXJlYS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BhdGgvYm91bmRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcGF0aC9jZW50cm9pZC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BhdGgvY29udGV4dC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BhdGgvbWVhc3VyZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BhdGgvc3RyaW5nLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcGF0aC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3RyYW5zZm9ybS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vZml0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9pZGVudGl0eS5qcyIsIi4uLy4uLy4uL2VsZWN0aW9uLWVuZ2luZS1tYXAvc3JjL2xpYi9saWJzL3NlYXRzLmpzIiwiLi4vLi4vLi4vZWxlY3Rpb24tZW5naW5lLW1hcC9zcmMvbGliL2NvbXBvbmVudHMvZ2F1dGVuZ0xpbmVQYXRoLnN2ZWx0ZSIsIi4uLy4uLy4uL2NvbW1vbi9jb2xvcnMuanMiLCIuLi8uLi8uLi9lbGVjdGlvbi1lbmdpbmUtbWFwL3NyYy9saWIvY29tcG9uZW50cy9yZXN1bHQtdmlldy9oZXhhZ29ucy5zdmVsdGUiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2Vhc2luZy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL3J1bnRpbWUvdHJhbnNpdGlvbi9pbmRleC5qcyIsIi4uLy4uLy4uL2VsZWN0aW9uLWVuZ2luZS1tYXAvc3JjL2xpYi9saWJzL3V0aWxzLmpzIiwiLi4vLi4vLi4vZWxlY3Rpb24tZW5naW5lLW1hcC9zcmMvbGliL2NvbXBvbmVudHMvdG9vbHRpcC5zdmVsdGUiLCIuLi8uLi8uLi9lbGVjdGlvbi1lbmdpbmUtbWFwL3NyYy9saWIvY29tcG9uZW50cy9yZXN1bHQtdmlldy9jYXJ0b2dyYW1SZXN1bHRTaG93LnN2ZWx0ZSIsIi4uLy4uLy4uL2VsZWN0aW9uLWVuZ2luZS1tYXAvc3JjL2xpYi9jb21wb25lbnRzL2JhY2tncm91bmRNYXAuc3ZlbHRlIiwiLi4vLi4vLi4vZWxlY3Rpb24tZW5naW5lLW1hcC9zcmMvbGliL2NvbXBvbmVudHMvbGVnZW5kLnN2ZWx0ZSIsIi4uLy4uLy4uL2VsZWN0aW9uLWVuZ2luZS1tYXAvc3JjL2xpYi9jb21wb25lbnRzL2Rhc2hib2FyZC12aWV3L25hdGlvbmFsVmlldy5zdmVsdGUiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2luaXQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2RlZmluZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvY29sb3IuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbnN0YW50LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jb2xvci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcmdiLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9udW1iZXJBcnJheS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2RhdGUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL251bWJlci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvb2JqZWN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9zdHJpbmcuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3ZhbHVlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yb3VuZC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29uc3RhbnQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL251bWJlci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29udGludW91cy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdERlY2ltYWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9leHBvbmVudC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdEdyb3VwLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0TnVtZXJhbHMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRTcGVjaWZpZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRUcmltLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0UHJlZml4QXV0by5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFJvdW5kZWQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRUeXBlcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2lkZW50aXR5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvbG9jYWxlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZGVmYXVsdExvY2FsZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL3ByZWNpc2lvbkZpeGVkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uUHJlZml4LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uUm91bmQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3RpY2tGb3JtYXQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2xpbmVhci5qcyIsIi4uLy4uLy4uL2VsZWN0aW9uLWVuZ2luZS1tYXAvc3JjL2xpYi9saWJzL21hcHMuanMiLCIuLi8uLi8uLi9lbGVjdGlvbi1lbmdpbmUtbWFwL3NyYy9saWIvY29tcG9uZW50cy9kYXNoYm9hcmQtdmlldy9wcm92aW5jaWFsVmlldy5zdmVsdGUiLCIuLi8uLi8uLi9lbGVjdGlvbi1lbmdpbmUtbWFwL3NyYy9BcHAuc3ZlbHRlIiwiLi4vLi4vLi4vZWxlY3Rpb24tZW5naW5lLXRhYmxlL3NyYy9BcHAuc3ZlbHRlIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Zvcm9ub2lqcy9yYnRyZWUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdm9yb25vaWpzL3ZlcnRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92b3Jvbm9panMvZWRnZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92b3Jvbm9panMvY2VsbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92b3Jvbm9panMvZGlhZ3JhbS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92b3Jvbm9panMvaGFsZmVkZ2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdm9yb25vaWpzL3Zvcm9ub2kuanMiLCIuLi8uLi8uLi9lbGVjdGlvbi1lbmdpbmUtaGVtaWN5Y2xlL25vZGVfbW9kdWxlcy9zdmVsdGUtaGVtaWN5Y2xlL2Rpc3QvbGlicy92b3Jvbm9pLmpzIiwiLi4vLi4vLi4vZWxlY3Rpb24tZW5naW5lLWhlbWljeWNsZS9ub2RlX21vZHVsZXMvc3ZlbHRlLWhlbWljeWNsZS9kaXN0L2xpYnMvaGVtaWN5Y2xlLmpzIiwiLi4vLi4vLi4vZWxlY3Rpb24tZW5naW5lLWhlbWljeWNsZS9ub2RlX21vZHVsZXMvc3ZlbHRlLWhlbWljeWNsZS9kaXN0L0hlbWljeWNsZS5zdmVsdGUiLCIuLi8uLi8uLi9lbGVjdGlvbi1lbmdpbmUtaGVtaWN5Y2xlL3NyYy9BcHAuc3ZlbHRlIiwiLi4vLi4vc3JjL3N2ZWx0ZS9BcHAuc3ZlbHRlIiwiLi4vLi4vc3JjL3N2ZWx0ZS9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgY29uc3QgaWRlbnRpdHkgPSAoeCkgPT4geDtcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHRlbXBsYXRlIFNcbiAqIEBwYXJhbSB7VH0gdGFyXG4gKiBAcGFyYW0ge1N9IHNyY1xuICogQHJldHVybnMge1QgJiBTfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG5cdC8vIEB0cy1pZ25vcmVcblx0Zm9yIChjb25zdCBrIGluIHNyYykgdGFyW2tdID0gc3JjW2tdO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtUICYgU30gKi8gKHRhcik7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdGhlbi9pcy1wcm9taXNlL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBNSVQgTGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vdGhlbi9pcy1wcm9taXNlL2Jsb2IvbWFzdGVyL0xJQ0VOU0Vcbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJucyB7dmFsdWUgaXMgUHJvbWlzZUxpa2U8YW55Pn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX3Byb21pc2UodmFsdWUpIHtcblx0cmV0dXJuIChcblx0XHQhIXZhbHVlICYmXG5cdFx0KHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSAmJlxuXHRcdHR5cGVvZiAoLyoqIEB0eXBlIHthbnl9ICovICh2YWx1ZSkudGhlbikgPT09ICdmdW5jdGlvbidcblx0KTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZF9sb2NhdGlvbihlbGVtZW50LCBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIpIHtcblx0ZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuXHRcdGxvYzogeyBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIgfVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuKGZuKSB7XG5cdHJldHVybiBmbigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuXHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9uW119IGZuc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5fYWxsKGZucykge1xuXHRmbnMuZm9yRWFjaChydW4pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB0aGluZ1xuICogQHJldHVybnMge3RoaW5nIGlzIEZ1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcblx0cmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhZmVfbm90X2VxdWFsKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxubGV0IHNyY191cmxfZXF1YWxfYW5jaG9yO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50X3NyY1xuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcmNfdXJsX2VxdWFsKGVsZW1lbnRfc3JjLCB1cmwpIHtcblx0aWYgKGVsZW1lbnRfc3JjID09PSB1cmwpIHJldHVybiB0cnVlO1xuXHRpZiAoIXNyY191cmxfZXF1YWxfYW5jaG9yKSB7XG5cdFx0c3JjX3VybF9lcXVhbF9hbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdH1cblx0Ly8gVGhpcyBpcyBhY3R1YWxseSBmYXN0ZXIgdGhhbiBkb2luZyBVUkwoLi4pLmhyZWZcblx0c3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZiA9IHVybDtcblx0cmV0dXJuIGVsZW1lbnRfc3JjID09PSBzcmNfdXJsX2VxdWFsX2FuY2hvci5ocmVmO1xufVxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHNyY3NldCAqL1xuZnVuY3Rpb24gc3BsaXRfc3Jjc2V0KHNyY3NldCkge1xuXHRyZXR1cm4gc3Jjc2V0LnNwbGl0KCcsJykubWFwKChzcmMpID0+IHNyYy50cmltKCkuc3BsaXQoJyAnKS5maWx0ZXIoQm9vbGVhbikpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTFNvdXJjZUVsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50fSBlbGVtZW50X3NyY3NldFxuICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsfSBzcmNzZXRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3Jjc2V0X3VybF9lcXVhbChlbGVtZW50X3NyY3NldCwgc3Jjc2V0KSB7XG5cdGNvbnN0IGVsZW1lbnRfdXJscyA9IHNwbGl0X3NyY3NldChlbGVtZW50X3NyY3NldC5zcmNzZXQpO1xuXHRjb25zdCB1cmxzID0gc3BsaXRfc3Jjc2V0KHNyY3NldCB8fCAnJyk7XG5cblx0cmV0dXJuIChcblx0XHR1cmxzLmxlbmd0aCA9PT0gZWxlbWVudF91cmxzLmxlbmd0aCAmJlxuXHRcdHVybHMuZXZlcnkoXG5cdFx0XHQoW3VybCwgd2lkdGhdLCBpKSA9PlxuXHRcdFx0XHR3aWR0aCA9PT0gZWxlbWVudF91cmxzW2ldWzFdICYmXG5cdFx0XHRcdC8vIFdlIG5lZWQgdG8gdGVzdCBib3RoIHdheXMgYmVjYXVzZSBWaXRlIHdpbGwgY3JlYXRlIGFuIGEgZnVsbCBVUkwgd2l0aFxuXHRcdFx0XHQvLyBgbmV3IFVSTChhc3NldCwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmYCBmb3IgdGhlIGNsaWVudCB3aGVuIGBiYXNlOiAnLi8nYCwgYW5kIHRoZVxuXHRcdFx0XHQvLyByZWxhdGl2ZSBVUkxzIGluc2lkZSBzcmNzZXQgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IHJlc29sdmVkIHRvIGFic29sdXRlIFVSTHMgYnlcblx0XHRcdFx0Ly8gYnJvd3NlcnMgKGluIGNvbnRyYXN0IHRvIGltZy5zcmMpLiBUaGlzIG1lYW5zIGJvdGggU1NSIGFuZCBET00gY29kZSBjb3VsZFxuXHRcdFx0XHQvLyBjb250YWluIHJlbGF0aXZlIG9yIGFic29sdXRlIFVSTHMuXG5cdFx0XHRcdChzcmNfdXJsX2VxdWFsKGVsZW1lbnRfdXJsc1tpXVswXSwgdXJsKSB8fCBzcmNfdXJsX2VxdWFsKHVybCwgZWxlbWVudF91cmxzW2ldWzBdKSlcblx0XHQpXG5cdCk7XG59XG5cbi8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbn1cblxuLyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX2VtcHR5KG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuXHRpZiAoc3RvcmUgIT0gbnVsbCAmJiB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgaXMgbm90IGEgc3RvcmUgd2l0aCBhICdzdWJzY3JpYmUnIG1ldGhvZGApO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuXHRpZiAoc3RvcmUgPT0gbnVsbCkge1xuXHRcdGZvciAoY29uc3QgY2FsbGJhY2sgb2YgY2FsbGJhY2tzKSB7XG5cdFx0XHRjYWxsYmFjayh1bmRlZmluZWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gbm9vcDtcblx0fVxuXHRjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuXHRyZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG59XG5cbi8qKlxuICogR2V0IHRoZSBjdXJyZW50IHZhbHVlIGZyb20gYSBzdG9yZSBieSBzdWJzY3JpYmluZyBhbmQgaW1tZWRpYXRlbHkgdW5zdWJzY3JpYmluZy5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUtc3RvcmUjZ2V0XG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL3N0b3JlL3B1YmxpYy5qcycpLlJlYWRhYmxlPFQ+fSBzdG9yZVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfc3RvcmVfdmFsdWUoc3RvcmUpIHtcblx0bGV0IHZhbHVlO1xuXHRzdWJzY3JpYmUoc3RvcmUsIChfKSA9PiAodmFsdWUgPSBfKSkoKTtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuXHRjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcblx0aWYgKGRlZmluaXRpb24pIHtcblx0XHRjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbik7XG5cdFx0cmV0dXJuIGRlZmluaXRpb25bMF0oc2xvdF9jdHgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuXHRyZXR1cm4gZGVmaW5pdGlvblsxXSAmJiBmbiA/IGFzc2lnbigkJHNjb3BlLmN0eC5zbGljZSgpLCBkZWZpbml0aW9uWzFdKGZuKGN0eCkpKSA6ICQkc2NvcGUuY3R4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZm4pIHtcblx0aWYgKGRlZmluaXRpb25bMl0gJiYgZm4pIHtcblx0XHRjb25zdCBsZXRzID0gZGVmaW5pdGlvblsyXShmbihkaXJ0eSkpO1xuXHRcdGlmICgkJHNjb3BlLmRpcnR5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBsZXRzO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGxldHMgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCBtZXJnZWQgPSBbXTtcblx0XHRcdGNvbnN0IGxlbiA9IE1hdGgubWF4KCQkc2NvcGUuZGlydHkubGVuZ3RoLCBsZXRzLmxlbmd0aCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG5cdFx0XHRcdG1lcmdlZFtpXSA9ICQkc2NvcGUuZGlydHlbaV0gfCBsZXRzW2ldO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1lcmdlZDtcblx0XHR9XG5cdFx0cmV0dXJuICQkc2NvcGUuZGlydHkgfCBsZXRzO1xuXHR9XG5cdHJldHVybiAkJHNjb3BlLmRpcnR5O1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX3Nsb3RfYmFzZShcblx0c2xvdCxcblx0c2xvdF9kZWZpbml0aW9uLFxuXHRjdHgsXG5cdCQkc2NvcGUsXG5cdHNsb3RfY2hhbmdlcyxcblx0Z2V0X3Nsb3RfY29udGV4dF9mblxuKSB7XG5cdGlmIChzbG90X2NoYW5nZXMpIHtcblx0XHRjb25zdCBzbG90X2NvbnRleHQgPSBnZXRfc2xvdF9jb250ZXh0KHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcblx0XHRzbG90LnAoc2xvdF9jb250ZXh0LCBzbG90X2NoYW5nZXMpO1xuXHR9XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfc2xvdChcblx0c2xvdCxcblx0c2xvdF9kZWZpbml0aW9uLFxuXHRjdHgsXG5cdCQkc2NvcGUsXG5cdGRpcnR5LFxuXHRnZXRfc2xvdF9jaGFuZ2VzX2ZuLFxuXHRnZXRfc2xvdF9jb250ZXh0X2ZuXG4pIHtcblx0Y29uc3Qgc2xvdF9jaGFuZ2VzID0gZ2V0X3Nsb3RfY2hhbmdlcyhzbG90X2RlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuKTtcblx0dXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbn1cblxuLyoqIEByZXR1cm5zIHthbnlbXSB8IC0xfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSgkJHNjb3BlKSB7XG5cdGlmICgkJHNjb3BlLmN0eC5sZW5ndGggPiAzMikge1xuXHRcdGNvbnN0IGRpcnR5ID0gW107XG5cdFx0Y29uc3QgbGVuZ3RoID0gJCRzY29wZS5jdHgubGVuZ3RoIC8gMzI7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0ZGlydHlbaV0gPSAtMTtcblx0XHR9XG5cdFx0cmV0dXJuIGRpcnR5O1xuXHR9XG5cdHJldHVybiAtMTtcbn1cblxuLyoqIEByZXR1cm5zIHt7fX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGNsdWRlX2ludGVybmFsX3Byb3BzKHByb3BzKSB7XG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xuXHRmb3IgKGNvbnN0IGsgaW4gcHJvcHMpIGlmIChrWzBdICE9PSAnJCcpIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogQHJldHVybnMge3t9fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVfcmVzdF9wcm9wcyhwcm9wcywga2V5cykge1xuXHRjb25zdCByZXN0ID0ge307XG5cdGtleXMgPSBuZXcgU2V0KGtleXMpO1xuXHRmb3IgKGNvbnN0IGsgaW4gcHJvcHMpIGlmICgha2V5cy5oYXMoaykgJiYga1swXSAhPT0gJyQnKSByZXN0W2tdID0gcHJvcHNba107XG5cdHJldHVybiByZXN0O1xufVxuXG4vKiogQHJldHVybnMge3t9fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVfc2xvdHMoc2xvdHMpIHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGZvciAoY29uc3Qga2V5IGluIHNsb3RzKSB7XG5cdFx0cmVzdWx0W2tleV0gPSB0cnVlO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBAcmV0dXJucyB7KHRoaXM6IGFueSwgLi4uYXJnczogYW55W10pID0+IHZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gb25jZShmbikge1xuXHRsZXQgcmFuID0gZmFsc2U7XG5cdHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdGlmIChyYW4pIHJldHVybjtcblx0XHRyYW4gPSB0cnVlO1xuXHRcdGZuLmNhbGwodGhpcywgLi4uYXJncyk7XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudWxsX3RvX2VtcHR5KHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldF9zdG9yZV92YWx1ZShzdG9yZSwgcmV0LCB2YWx1ZSkge1xuXHRzdG9yZS5zZXQodmFsdWUpO1xuXHRyZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgY29uc3QgaGFzX3Byb3AgPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuXHRyZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbn1cblxuLyoqIEBwYXJhbSB7bnVtYmVyIHwgc3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1tudW1iZXIsIHN0cmluZ119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdF9jc3NfdW5pdCh2YWx1ZSkge1xuXHRjb25zdCBzcGxpdCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubWF0Y2goL15cXHMqKC0/W1xcZC5dKykoW15cXHNdKilcXHMqJC8pO1xuXHRyZXR1cm4gc3BsaXQgPyBbcGFyc2VGbG9hdChzcGxpdFsxXSksIHNwbGl0WzJdIHx8ICdweCddIDogWy8qKiBAdHlwZSB7bnVtYmVyfSAqLyAodmFsdWUpLCAncHgnXTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRlbnRlZGl0YWJsZV90cnV0aHlfdmFsdWVzID0gWycnLCB0cnVlLCAxLCAndHJ1ZScsICdjb250ZW50ZWRpdGFibGUnXTtcbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGlzX2NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG4vKiogQHR5cGUgeygpID0+IG51bWJlcn0gKi9cbmV4cG9ydCBsZXQgbm93ID0gaXNfY2xpZW50ID8gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIDogKCkgPT4gRGF0ZS5ub3coKTtcblxuZXhwb3J0IGxldCByYWYgPSBpc19jbGllbnQgPyAoY2IpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgOiBub29wO1xuXG4vLyB1c2VkIGludGVybmFsbHkgZm9yIHRlc3Rpbmdcbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfbm93KGZuKSB7XG5cdG5vdyA9IGZuO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3JhZihmbikge1xuXHRyYWYgPSBmbjtcbn1cbiIsImltcG9ydCB7IHJhZiB9IGZyb20gJy4vZW52aXJvbm1lbnQuanMnO1xuXG5jb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbm93XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcnVuX3Rhc2tzKG5vdykge1xuXHR0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0aWYgKCF0YXNrLmMobm93KSkge1xuXHRcdFx0dGFza3MuZGVsZXRlKHRhc2spO1xuXHRcdFx0dGFzay5mKCk7XG5cdFx0fVxuXHR9KTtcblx0aWYgKHRhc2tzLnNpemUgIT09IDApIHJhZihydW5fdGFza3MpO1xufVxuXG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkhXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyX2xvb3BzKCkge1xuXHR0YXNrcy5jbGVhcigpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdGFzayB0aGF0IHJ1bnMgb24gZWFjaCByYWYgZnJhbWVcbiAqIHVudGlsIGl0IHJldHVybnMgYSBmYWxzeSB2YWx1ZSBvciBpcyBhYm9ydGVkXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wcml2YXRlLmpzJykuVGFza0NhbGxiYWNrfSBjYWxsYmFja1xuICogQHJldHVybnMge2ltcG9ydCgnLi9wcml2YXRlLmpzJykuVGFza31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb3AoY2FsbGJhY2spIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLlRhc2tFbnRyeX0gKi9cblx0bGV0IHRhc2s7XG5cdGlmICh0YXNrcy5zaXplID09PSAwKSByYWYocnVuX3Rhc2tzKTtcblx0cmV0dXJuIHtcblx0XHRwcm9taXNlOiBuZXcgUHJvbWlzZSgoZnVsZmlsbCkgPT4ge1xuXHRcdFx0dGFza3MuYWRkKCh0YXNrID0geyBjOiBjYWxsYmFjaywgZjogZnVsZmlsbCB9KSk7XG5cdFx0fSksXG5cdFx0YWJvcnQoKSB7XG5cdFx0XHR0YXNrcy5kZWxldGUodGFzayk7XG5cdFx0fVxuXHR9O1xufVxuIiwiaW1wb3J0IHsgY29udGVudGVkaXRhYmxlX3RydXRoeV92YWx1ZXMsIGhhc19wcm9wIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlclNpbmdsZXRvbi5qcyc7XG5cbi8vIFRyYWNrIHdoaWNoIG5vZGVzIGFyZSBjbGFpbWVkIGR1cmluZyBoeWRyYXRpb24uIFVuY2xhaW1lZCBub2RlcyBjYW4gdGhlbiBiZSByZW1vdmVkIGZyb20gdGhlIERPTVxuLy8gYXQgdGhlIGVuZCBvZiBoeWRyYXRpb24gd2l0aG91dCB0b3VjaGluZyB0aGUgcmVtYWluaW5nIG5vZGVzLlxubGV0IGlzX2h5ZHJhdGluZyA9IGZhbHNlO1xuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRfaHlkcmF0aW5nKCkge1xuXHRpc19oeWRyYXRpbmcgPSB0cnVlO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5kX2h5ZHJhdGluZygpIHtcblx0aXNfaHlkcmF0aW5nID0gZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGxvd1xuICogQHBhcmFtIHtudW1iZXJ9IGhpZ2hcbiAqIEBwYXJhbSB7KGluZGV4OiBudW1iZXIpID0+IG51bWJlcn0ga2V5XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHVwcGVyX2JvdW5kKGxvdywgaGlnaCwga2V5LCB2YWx1ZSkge1xuXHQvLyBSZXR1cm4gZmlyc3QgaW5kZXggb2YgdmFsdWUgbGFyZ2VyIHRoYW4gaW5wdXQgdmFsdWUgaW4gdGhlIHJhbmdlIFtsb3csIGhpZ2gpXG5cdHdoaWxlIChsb3cgPCBoaWdoKSB7XG5cdFx0Y29uc3QgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+PiAxKTtcblx0XHRpZiAoa2V5KG1pZCkgPD0gdmFsdWUpIHtcblx0XHRcdGxvdyA9IG1pZCArIDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpZ2ggPSBtaWQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBsb3c7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlRXh9IHRhcmdldFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGluaXRfaHlkcmF0ZSh0YXJnZXQpIHtcblx0aWYgKHRhcmdldC5oeWRyYXRlX2luaXQpIHJldHVybjtcblx0dGFyZ2V0Lmh5ZHJhdGVfaW5pdCA9IHRydWU7XG5cdC8vIFdlIGtub3cgdGhhdCBhbGwgY2hpbGRyZW4gaGF2ZSBjbGFpbV9vcmRlciB2YWx1ZXMgc2luY2UgdGhlIHVuY2xhaW1lZCBoYXZlIGJlZW4gZGV0YWNoZWQgaWYgdGFyZ2V0IGlzIG5vdCA8aGVhZD5cblxuXHRsZXQgY2hpbGRyZW4gPSAvKiogQHR5cGUge0FycmF5TGlrZTxOb2RlRXgyPn0gKi8gKHRhcmdldC5jaGlsZE5vZGVzKTtcblx0Ly8gSWYgdGFyZ2V0IGlzIDxoZWFkPiwgdGhlcmUgbWF5IGJlIGNoaWxkcmVuIHdpdGhvdXQgY2xhaW1fb3JkZXJcblx0aWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0hFQUQnKSB7XG5cdFx0Y29uc3QgbXlfY2hpbGRyZW4gPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBub2RlID0gY2hpbGRyZW5baV07XG5cdFx0XHRpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG15X2NoaWxkcmVuLnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNoaWxkcmVuID0gbXlfY2hpbGRyZW47XG5cdH1cblx0Lypcblx0ICogUmVvcmRlciBjbGFpbWVkIGNoaWxkcmVuIG9wdGltYWxseS5cblx0ICogV2UgY2FuIHJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkgYnkgZmluZGluZyB0aGUgbG9uZ2VzdCBzdWJzZXF1ZW5jZSBvZlxuXHQgKiBub2RlcyB0aGF0IGFyZSBhbHJlYWR5IGNsYWltZWQgaW4gb3JkZXIgYW5kIG9ubHkgbW92aW5nIHRoZSByZXN0LiBUaGUgbG9uZ2VzdFxuXHQgKiBzdWJzZXF1ZW5jZSBvZiBub2RlcyB0aGF0IGFyZSBjbGFpbWVkIGluIG9yZGVyIGNhbiBiZSBmb3VuZCBieVxuXHQgKiBjb21wdXRpbmcgdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiAuY2xhaW1fb3JkZXIgdmFsdWVzLlxuXHQgKlxuXHQgKiBUaGlzIGFsZ29yaXRobSBpcyBvcHRpbWFsIGluIGdlbmVyYXRpbmcgdGhlIGxlYXN0IGFtb3VudCBvZiByZW9yZGVyIG9wZXJhdGlvbnNcblx0ICogcG9zc2libGUuXG5cdCAqXG5cdCAqIFByb29mOlxuXHQgKiBXZSBrbm93IHRoYXQsIGdpdmVuIGEgc2V0IG9mIHJlb3JkZXJpbmcgb3BlcmF0aW9ucywgdGhlIG5vZGVzIHRoYXQgZG8gbm90IG1vdmVcblx0ICogYWx3YXlzIGZvcm0gYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSwgc2luY2UgdGhleSBkbyBub3QgbW92ZSBhbW9uZyBlYWNoIG90aGVyXG5cdCAqIG1lYW5pbmcgdGhhdCB0aGV5IG11c3QgYmUgYWxyZWFkeSBvcmRlcmVkIGFtb25nIGVhY2ggb3RoZXIuIFRodXMsIHRoZSBtYXhpbWFsXG5cdCAqIHNldCBvZiBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlIGZvcm0gYSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UuXG5cdCAqL1xuXHQvLyBDb21wdXRlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuXHQvLyBtOiBzdWJzZXF1ZW5jZSBsZW5ndGggaiA9PiBpbmRleCBrIG9mIHNtYWxsZXN0IHZhbHVlIHRoYXQgZW5kcyBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGxlbmd0aCBqXG5cdGNvbnN0IG0gPSBuZXcgSW50MzJBcnJheShjaGlsZHJlbi5sZW5ndGggKyAxKTtcblx0Ly8gUHJlZGVjZXNzb3IgaW5kaWNlcyArIDFcblx0Y29uc3QgcCA9IG5ldyBJbnQzMkFycmF5KGNoaWxkcmVuLmxlbmd0aCk7XG5cdG1bMF0gPSAtMTtcblx0bGV0IGxvbmdlc3QgPSAwO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IGNoaWxkcmVuW2ldLmNsYWltX29yZGVyO1xuXHRcdC8vIEZpbmQgdGhlIGxhcmdlc3Qgc3Vic2VxdWVuY2UgbGVuZ3RoIHN1Y2ggdGhhdCBpdCBlbmRzIGluIGEgdmFsdWUgbGVzcyB0aGFuIG91ciBjdXJyZW50IHZhbHVlXG5cdFx0Ly8gdXBwZXJfYm91bmQgcmV0dXJucyBmaXJzdCBncmVhdGVyIHZhbHVlLCBzbyB3ZSBzdWJ0cmFjdCBvbmVcblx0XHQvLyB3aXRoIGZhc3QgcGF0aCBmb3Igd2hlbiB3ZSBhcmUgb24gdGhlIGN1cnJlbnQgbG9uZ2VzdCBzdWJzZXF1ZW5jZVxuXHRcdGNvbnN0IHNlcV9sZW4gPVxuXHRcdFx0KGxvbmdlc3QgPiAwICYmIGNoaWxkcmVuW21bbG9uZ2VzdF1dLmNsYWltX29yZGVyIDw9IGN1cnJlbnRcblx0XHRcdFx0PyBsb25nZXN0ICsgMVxuXHRcdFx0XHQ6IHVwcGVyX2JvdW5kKDEsIGxvbmdlc3QsIChpZHgpID0+IGNoaWxkcmVuW21baWR4XV0uY2xhaW1fb3JkZXIsIGN1cnJlbnQpKSAtIDE7XG5cdFx0cFtpXSA9IG1bc2VxX2xlbl0gKyAxO1xuXHRcdGNvbnN0IG5ld19sZW4gPSBzZXFfbGVuICsgMTtcblx0XHQvLyBXZSBjYW4gZ3VhcmFudGVlIHRoYXQgY3VycmVudCBpcyB0aGUgc21hbGxlc3QgdmFsdWUuIE90aGVyd2lzZSwgd2Ugd291bGQgaGF2ZSBnZW5lcmF0ZWQgYSBsb25nZXIgc2VxdWVuY2UuXG5cdFx0bVtuZXdfbGVuXSA9IGk7XG5cdFx0bG9uZ2VzdCA9IE1hdGgubWF4KG5ld19sZW4sIGxvbmdlc3QpO1xuXHR9XG5cdC8vIFRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgKGluaXRpYWxseSByZXZlcnNlZClcblxuXHQvKipcblx0ICogQHR5cGUge05vZGVFeDJbXX1cblx0ICovXG5cdGNvbnN0IGxpcyA9IFtdO1xuXHQvLyBUaGUgcmVzdCBvZiB0aGUgbm9kZXMsIG5vZGVzIHRoYXQgd2lsbCBiZSBtb3ZlZFxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Tm9kZUV4MltdfVxuXHQgKi9cblx0Y29uc3QgdG9fbW92ZSA9IFtdO1xuXHRsZXQgbGFzdCA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cdGZvciAobGV0IGN1ciA9IG1bbG9uZ2VzdF0gKyAxOyBjdXIgIT0gMDsgY3VyID0gcFtjdXIgLSAxXSkge1xuXHRcdGxpcy5wdXNoKGNoaWxkcmVuW2N1ciAtIDFdKTtcblx0XHRmb3IgKDsgbGFzdCA+PSBjdXI7IGxhc3QtLSkge1xuXHRcdFx0dG9fbW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcblx0XHR9XG5cdFx0bGFzdC0tO1xuXHR9XG5cdGZvciAoOyBsYXN0ID49IDA7IGxhc3QtLSkge1xuXHRcdHRvX21vdmUucHVzaChjaGlsZHJlbltsYXN0XSk7XG5cdH1cblx0bGlzLnJldmVyc2UoKTtcblx0Ly8gV2Ugc29ydCB0aGUgbm9kZXMgYmVpbmcgbW92ZWQgdG8gZ3VhcmFudGVlIHRoYXQgdGhlaXIgaW5zZXJ0aW9uIG9yZGVyIG1hdGNoZXMgdGhlIGNsYWltIG9yZGVyXG5cdHRvX21vdmUuc29ydCgoYSwgYikgPT4gYS5jbGFpbV9vcmRlciAtIGIuY2xhaW1fb3JkZXIpO1xuXHQvLyBGaW5hbGx5LCB3ZSBtb3ZlIHRoZSBub2Rlc1xuXHRmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCB0b19tb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0d2hpbGUgKGogPCBsaXMubGVuZ3RoICYmIHRvX21vdmVbaV0uY2xhaW1fb3JkZXIgPj0gbGlzW2pdLmNsYWltX29yZGVyKSB7XG5cdFx0XHRqKys7XG5cdFx0fVxuXHRcdGNvbnN0IGFuY2hvciA9IGogPCBsaXMubGVuZ3RoID8gbGlzW2pdIDogbnVsbDtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHRvX21vdmVbaV0sIGFuY2hvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcblx0dGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gc3R5bGVfc2hlZXRfaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZXNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyh0YXJnZXQsIHN0eWxlX3NoZWV0X2lkLCBzdHlsZXMpIHtcblx0Y29uc3QgYXBwZW5kX3N0eWxlc190byA9IGdldF9yb290X2Zvcl9zdHlsZSh0YXJnZXQpO1xuXHRpZiAoIWFwcGVuZF9zdHlsZXNfdG8uZ2V0RWxlbWVudEJ5SWQoc3R5bGVfc2hlZXRfaWQpKSB7XG5cdFx0Y29uc3Qgc3R5bGUgPSBlbGVtZW50KCdzdHlsZScpO1xuXHRcdHN0eWxlLmlkID0gc3R5bGVfc2hlZXRfaWQ7XG5cdFx0c3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZXM7XG5cdFx0YXBwZW5kX3N0eWxlc2hlZXQoYXBwZW5kX3N0eWxlc190bywgc3R5bGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7U2hhZG93Um9vdCB8IERvY3VtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpIHtcblx0aWYgKCFub2RlKSByZXR1cm4gZG9jdW1lbnQ7XG5cdGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlID8gbm9kZS5nZXRSb290Tm9kZSgpIDogbm9kZS5vd25lckRvY3VtZW50O1xuXHRpZiAocm9vdCAmJiAvKiogQHR5cGUge1NoYWRvd1Jvb3R9ICovIChyb290KS5ob3N0KSB7XG5cdFx0cmV0dXJuIC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpO1xuXHR9XG5cdHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Q1NTU3R5bGVTaGVldH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpIHtcblx0Y29uc3Qgc3R5bGVfZWxlbWVudCA9IGVsZW1lbnQoJ3N0eWxlJyk7XG5cdC8vIEZvciB0cmFuc2l0aW9ucyB0byB3b3JrIHdpdGhvdXQgJ3N0eWxlLXNyYzogdW5zYWZlLWlubGluZScgQ29udGVudCBTZWN1cml0eSBQb2xpY3ksXG5cdC8vIHRoZXNlIGVtcHR5IHRhZ3MgbmVlZCB0byBiZSBhbGxvd2VkIHdpdGggYSBoYXNoIGFzIGEgd29ya2Fyb3VuZCB1bnRpbCB3ZSBtb3ZlIHRvIHRoZSBXZWIgQW5pbWF0aW9ucyBBUEkuXG5cdC8vIFVzaW5nIHRoZSBoYXNoIGZvciB0aGUgZW1wdHkgc3RyaW5nIChmb3IgYW4gZW1wdHkgdGFnKSB3b3JrcyBpbiBhbGwgYnJvd3NlcnMgZXhjZXB0IFNhZmFyaS5cblx0Ly8gU28gYXMgYSB3b3JrYXJvdW5kIGZvciB0aGUgd29ya2Fyb3VuZCwgd2hlbiB3ZSBhcHBlbmQgZW1wdHkgc3R5bGUgdGFncyB3ZSBzZXQgdGhlaXIgY29udGVudCB0byAvKiBlbXB0eSAqLy5cblx0Ly8gVGhlIGhhc2ggJ3NoYTI1Ni05T2xOTzBETkVlYVZ6SEw0Ulp3Q0xzQkhBOFdCUTh0b0JwLzRGNVhWMm5jPScgd2lsbCB0aGVuIHdvcmsgZXZlbiBpbiBTYWZhcmkuXG5cdHN0eWxlX2VsZW1lbnQudGV4dENvbnRlbnQgPSAnLyogZW1wdHkgKi8nO1xuXHRhcHBlbmRfc3R5bGVzaGVldChnZXRfcm9vdF9mb3Jfc3R5bGUobm9kZSksIHN0eWxlX2VsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVfZWxlbWVudC5zaGVldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1NoYWRvd1Jvb3QgfCBEb2N1bWVudH0gbm9kZVxuICogQHBhcmFtIHtIVE1MU3R5bGVFbGVtZW50fSBzdHlsZVxuICogQHJldHVybnMge0NTU1N0eWxlU2hlZXR9XG4gKi9cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXNoZWV0KG5vZGUsIHN0eWxlKSB7XG5cdGFwcGVuZCgvKiogQHR5cGUge0RvY3VtZW50fSAqLyAobm9kZSkuaGVhZCB8fCBub2RlLCBzdHlsZSk7XG5cdHJldHVybiBzdHlsZS5zaGVldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVFeH0gdGFyZ2V0XG4gKiBAcGFyYW0ge05vZGVFeH0gbm9kZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuXHRpZiAoaXNfaHlkcmF0aW5nKSB7XG5cdFx0aW5pdF9oeWRyYXRlKHRhcmdldCk7XG5cdFx0aWYgKFxuXHRcdFx0dGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0KHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsICYmIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudE5vZGUgIT09IHRhcmdldClcblx0XHQpIHtcblx0XHRcdHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmZpcnN0Q2hpbGQ7XG5cdFx0fVxuXHRcdC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG5cdFx0d2hpbGUgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsICYmIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLmNsYWltX29yZGVyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdGlmIChub2RlICE9PSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCkge1xuXHRcdFx0Ly8gV2Ugb25seSBpbnNlcnQgaWYgdGhlIG9yZGVyaW5nIG9mIHRoaXMgbm9kZSBzaG91bGQgYmUgbW9kaWZpZWQgb3IgdGhlIHBhcmVudCBub2RlIGlzIG5vdCB0YXJnZXRcblx0XHRcdGlmIChub2RlLmNsYWltX29yZGVyICE9PSB1bmRlZmluZWQgfHwgbm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQpIHtcblx0XHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gbm9kZS5uZXh0U2libGluZztcblx0XHR9XG5cdH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gW2FuY2hvcl1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG5cdHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUV4fSB0YXJnZXRcbiAqIEBwYXJhbSB7Tm9kZUV4fSBub2RlXG4gKiBAcGFyYW0ge05vZGVFeH0gW2FuY2hvcl1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuXHRpZiAoaXNfaHlkcmF0aW5nICYmICFhbmNob3IpIHtcblx0XHRhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG5cdH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuXHRpZiAobm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoaXRlcmF0aW9uc1tpXSkgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge2tleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcH0gS1xuICogQHBhcmFtIHtLfSBuYW1lXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSBLXG4gKiBAcGFyYW0ge0t9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpc1xuICogQHJldHVybnMge0hUTUxFbGVtZW50VGFnTmFtZU1hcFtLXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRfaXMobmFtZSwgaXMpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHRlbXBsYXRlIHtrZXlvZiBUfSBLXG4gKiBAcGFyYW0ge1R9IG9ialxuICogQHBhcmFtIHtLW119IGV4Y2x1ZGVcbiAqIEByZXR1cm5zIHtQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcblx0Y29uc3QgdGFyZ2V0ID0gLyoqIEB0eXBlIHtQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+fSAqLyAoe30pO1xuXHRmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG5cdFx0aWYgKFxuXHRcdFx0aGFzX3Byb3Aob2JqLCBrKSAmJlxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0ZXhjbHVkZS5pbmRleE9mKGspID09PSAtMVxuXHRcdCkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0dGFyZ2V0W2tdID0gb2JqW2tdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7a2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXB9IEtcbiAqIEBwYXJhbSB7S30gbmFtZVxuICogQHJldHVybnMge1NWR0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFcbiAqIEByZXR1cm5zIHtUZXh0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGV4dChkYXRhKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7VGV4dH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGFjZSgpIHtcblx0cmV0dXJuIHRleHQoJyAnKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7VGV4dH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eSgpIHtcblx0cmV0dXJuIHRleHQoJycpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJucyB7Q29tbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnQoY29udGVudCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChjb250ZW50KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdH0gaGFuZGxlclxuICogQHBhcmFtIHtib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBFdmVudExpc3RlbmVyT3B0aW9uc30gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuXHRyZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7KGV2ZW50OiBhbnkpID0+IGFueX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmV2ZW50X2RlZmF1bHQoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7KGV2ZW50OiBhbnkpID0+IGFueX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHsoZXZlbnQ6IGFueSkgPT4gYW55fSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3BfaW1tZWRpYXRlX3Byb3BhZ2F0aW9uKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHsoZXZlbnQ6IGFueSkgPT4gdm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxmKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcykgZm4uY2FsbCh0aGlzLCBldmVudCk7XG5cdH07XG59XG5cbi8qKlxuICogQHJldHVybnMgeyhldmVudDogYW55KSA9PiB2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRydXN0ZWQoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRpZiAoZXZlbnQuaXNUcnVzdGVkKSBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRpZiAodmFsdWUgPT0gbnVsbCkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcblx0ZWxzZSBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuLyoqXG4gKiBMaXN0IG9mIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYWx3YXlzIGJlIHNldCB0aHJvdWdoIHRoZSBhdHRyIG1ldGhvZCxcbiAqIGJlY2F1c2UgdXBkYXRpbmcgdGhlbSB0aHJvdWdoIHRoZSBwcm9wZXJ0eSBzZXR0ZXIgZG9lc24ndCB3b3JrIHJlbGlhYmx5LlxuICogSW4gdGhlIGV4YW1wbGUgb2YgYHdpZHRoYC9gaGVpZ2h0YCwgdGhlIHByb2JsZW0gaXMgdGhhdCB0aGUgc2V0dGVyIG9ubHlcbiAqIGFjY2VwdHMgbnVtZXJpYyB2YWx1ZXMsIGJ1dCB0aGUgYXR0cmlidXRlIGNhbiBhbHNvIGJlIHNldCB0byBhIHN0cmluZyBsaWtlIGA1MCVgLlxuICogSWYgdGhpcyBsaXN0IGJlY29tZXMgdG9vIGJpZywgcmV0aGluayB0aGlzIGFwcHJvYWNoLlxuICovXG5jb25zdCBhbHdheXNfc2V0X3Rocm91Z2hfc2V0X2F0dHJpYnV0ZSA9IFsnd2lkdGgnLCAnaGVpZ2h0J107XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBub2RlXG4gKiBAcGFyYW0ge3sgW3g6IHN0cmluZ106IHN0cmluZyB9fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG5vZGUuX19wcm90b19fKTtcblx0Zm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdGlmIChhdHRyaWJ1dGVzW2tleV0gPT0gbnVsbCkge1xuXHRcdFx0bm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcblx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcblx0XHRcdC8qKiBAdHlwZSB7YW55fSAqLyAobm9kZSkudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdGRlc2NyaXB0b3JzW2tleV0gJiZcblx0XHRcdGRlc2NyaXB0b3JzW2tleV0uc2V0ICYmXG5cdFx0XHRhbHdheXNfc2V0X3Rocm91Z2hfc2V0X2F0dHJpYnV0ZS5pbmRleE9mKGtleSkgPT09IC0xXG5cdFx0KSB7XG5cdFx0XHRub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gbm9kZVxuICogQHBhcmFtIHt7IFt4OiBzdHJpbmddOiBzdHJpbmcgfX0gYXR0cmlidXRlc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuXHRmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0YXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBkYXRhX21hcFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YV9tYXAobm9kZSwgZGF0YV9tYXApIHtcblx0T2JqZWN0LmtleXMoZGF0YV9tYXApLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIGtleSwgZGF0YV9tYXBba2V5XSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG5cdGNvbnN0IGxvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpOyAvLyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBleGlzdGluZyBiZWhhdmlvciB3ZSBkbyBsb3dlcmNhc2UgZmlyc3Rcblx0aWYgKGxvd2VyIGluIG5vZGUpIHtcblx0XHRub2RlW2xvd2VyXSA9IHR5cGVvZiBub2RlW2xvd2VyXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcblx0fSBlbHNlIGlmIChwcm9wIGluIG5vZGUpIHtcblx0XHRub2RlW3Byb3BdID0gdHlwZW9mIG5vZGVbcHJvcF0gPT09ICdib29sZWFuJyAmJiB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0YXR0cihub2RlLCBwcm9wLCB2YWx1ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfZHluYW1pY19lbGVtZW50X2RhdGEodGFnKSB7XG5cdHJldHVybiAvLS8udGVzdCh0YWcpID8gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGFfbWFwIDogc2V0X2F0dHJpYnV0ZXM7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0bm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfc3ZlbHRlX2RhdGFzZXQobm9kZSkge1xuXHRyZXR1cm4gbm9kZS5kYXRhc2V0LnN2ZWx0ZUg7XG59XG5cbi8qKlxuICogQHJldHVybnMge3Vua25vd25bXX0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuXHRjb25zdCB2YWx1ZSA9IG5ldyBTZXQoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChncm91cFtpXS5jaGVja2VkKSB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG5cdH1cblx0aWYgKCFjaGVja2VkKSB7XG5cdFx0dmFsdWUuZGVsZXRlKF9fdmFsdWUpO1xuXHR9XG5cdHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnRbXX0gZ3JvdXBcbiAqIEByZXR1cm5zIHt7IHAoLi4uaW5wdXRzOiBIVE1MSW5wdXRFbGVtZW50W10pOiB2b2lkOyByKCk6IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0X2JpbmRpbmdfZ3JvdXAoZ3JvdXApIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119ICovXG5cdGxldCBfaW5wdXRzO1xuXHRyZXR1cm4ge1xuXHRcdC8qIHB1c2ggKi8gcCguLi5pbnB1dHMpIHtcblx0XHRcdF9pbnB1dHMgPSBpbnB1dHM7XG5cdFx0XHRfaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBncm91cC5wdXNoKGlucHV0KSk7XG5cdFx0fSxcblx0XHQvKiByZW1vdmUgKi8gcigpIHtcblx0XHRcdF9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGdyb3VwLnNwbGljZShncm91cC5pbmRleE9mKGlucHV0KSwgMSkpO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBpbmRleGVzXG4gKiBAcmV0dXJucyB7eyB1KG5ld19pbmRleGVzOiBudW1iZXJbXSk6IHZvaWQ7IHAoLi4uaW5wdXRzOiBIVE1MSW5wdXRFbGVtZW50W10pOiB2b2lkOyByOiAoKSA9PiB2b2lkOyB9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9iaW5kaW5nX2dyb3VwX2R5bmFtaWMoZ3JvdXAsIGluZGV4ZXMpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119ICovXG5cdGxldCBfZ3JvdXAgPSBnZXRfYmluZGluZ19ncm91cChncm91cCk7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119ICovXG5cdGxldCBfaW5wdXRzO1xuXG5cdGZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwKGdyb3VwKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRncm91cCA9IGdyb3VwW2luZGV4ZXNbaV1dID0gZ3JvdXBbaW5kZXhlc1tpXV0gfHwgW107XG5cdFx0fVxuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gcHVzaCgpIHtcblx0XHRfaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBfZ3JvdXAucHVzaChpbnB1dCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiByZW1vdmUoKSB7XG5cdFx0X2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gX2dyb3VwLnNwbGljZShfZ3JvdXAuaW5kZXhPZihpbnB1dCksIDEpKTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdC8qIHVwZGF0ZSAqLyB1KG5ld19pbmRleGVzKSB7XG5cdFx0XHRpbmRleGVzID0gbmV3X2luZGV4ZXM7XG5cdFx0XHRjb25zdCBuZXdfZ3JvdXAgPSBnZXRfYmluZGluZ19ncm91cChncm91cCk7XG5cdFx0XHRpZiAobmV3X2dyb3VwICE9PSBfZ3JvdXApIHtcblx0XHRcdFx0cmVtb3ZlKCk7XG5cdFx0XHRcdF9ncm91cCA9IG5ld19ncm91cDtcblx0XHRcdFx0cHVzaCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyogcHVzaCAqLyBwKC4uLmlucHV0cykge1xuXHRcdFx0X2lucHV0cyA9IGlucHV0cztcblx0XHRcdHB1c2goKTtcblx0XHR9LFxuXHRcdC8qIHJlbW92ZSAqLyByOiByZW1vdmVcblx0fTtcbn1cblxuLyoqIEByZXR1cm5zIHtudW1iZXJ9ICovXG5leHBvcnQgZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogK3ZhbHVlO1xufVxuXG4vKiogQHJldHVybnMge2FueVtdfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVfcmFuZ2VzX3RvX2FycmF5KHJhbmdlcykge1xuXHRjb25zdCBhcnJheSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG5cdH1cblx0cmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0NoaWxkTm9kZVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG5cdGlmIChub2Rlcy5jbGFpbV9pbmZvID09PSB1bmRlZmluZWQpIHtcblx0XHRub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG5cdH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge0NoaWxkTm9kZUV4fSBSXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHBhcmFtIHsobm9kZTogQ2hpbGROb2RlRXgpID0+IG5vZGUgaXMgUn0gcHJlZGljYXRlXG4gKiBAcGFyYW0geyhub2RlOiBDaGlsZE5vZGVFeCkgPT4gQ2hpbGROb2RlRXggfCB1bmRlZmluZWR9IHByb2Nlc3Nfbm9kZVxuICogQHBhcmFtIHsoKSA9PiBSfSBjcmVhdGVfbm9kZVxuICogQHBhcmFtIHtib29sZWFufSBkb250X3VwZGF0ZV9sYXN0X2luZGV4XG4gKiBAcmV0dXJucyB7Un1cbiAqL1xuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzX25vZGUsIGNyZWF0ZV9ub2RlLCBkb250X3VwZGF0ZV9sYXN0X2luZGV4ID0gZmFsc2UpIHtcblx0Ly8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Vcblx0aW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcblx0Y29uc3QgcmVzdWx0X25vZGUgPSAoKCkgPT4ge1xuXHRcdC8vIFdlIGZpcnN0IHRyeSB0byBmaW5kIGFuIGVsZW1lbnQgYWZ0ZXIgdGhlIHByZXZpb3VzIG9uZVxuXHRcdGZvciAobGV0IGkgPSBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXg7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdFx0aWYgKHByZWRpY2F0ZShub2RlKSkge1xuXHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3Nfbm9kZShub2RlKTtcblx0XHRcdFx0aWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRub2Rlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bm9kZXNbaV0gPSByZXBsYWNlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWRvbnRfdXBkYXRlX2xhc3RfaW5kZXgpIHtcblx0XHRcdFx0XHRub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBPdGhlcndpc2UsIHdlIHRyeSB0byBmaW5kIG9uZSBiZWZvcmVcblx0XHQvLyBXZSBpdGVyYXRlIGluIHJldmVyc2Ugc28gdGhhdCB3ZSBkb24ndCBnbyB0b28gZmFyIGJhY2tcblx0XHRmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcblx0XHRcdGlmIChwcmVkaWNhdGUobm9kZSkpIHtcblx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzX25vZGUobm9kZSk7XG5cdFx0XHRcdGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0bm9kZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFkb250X3VwZGF0ZV9sYXN0X2luZGV4KSB7XG5cdFx0XHRcdFx0bm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcblx0XHRcdFx0fSBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0Ly8gU2luY2Ugd2Ugc3BsaWNlZCBiZWZvcmUgdGhlIGxhc3RfaW5kZXgsIHdlIGRlY3JlYXNlIGl0XG5cdFx0XHRcdFx0bm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIElmIHdlIGNhbid0IGZpbmQgYW55IG1hdGNoaW5nIG5vZGUsIHdlIGNyZWF0ZSBhIG5ldyBvbmVcblx0XHRyZXR1cm4gY3JlYXRlX25vZGUoKTtcblx0fSkoKTtcblx0cmVzdWx0X25vZGUuY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG5cdG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuXHRyZXR1cm4gcmVzdWx0X25vZGU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9fSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0geyhuYW1lOiBzdHJpbmcpID0+IEVsZW1lbnQgfCBTVkdFbGVtZW50fSBjcmVhdGVfZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnQgfCBTVkdFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGNyZWF0ZV9lbGVtZW50KSB7XG5cdHJldHVybiBjbGFpbV9ub2RlKFxuXHRcdG5vZGVzLFxuXHRcdC8qKiBAcmV0dXJucyB7bm9kZSBpcyBFbGVtZW50IHwgU1ZHRWxlbWVudH0gKi9cblx0XHQobm9kZSkgPT4gbm9kZS5ub2RlTmFtZSA9PT0gbmFtZSxcblx0XHQvKiogQHBhcmFtIHtFbGVtZW50fSBub2RlICovXG5cdFx0KG5vZGUpID0+IHtcblx0XHRcdGNvbnN0IHJlbW92ZSA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0Y29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSB7XG5cdFx0XHRcdFx0cmVtb3ZlLnB1c2goYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZW1vdmUuZm9yRWFjaCgodikgPT4gbm9kZS5yZW1vdmVBdHRyaWJ1dGUodikpO1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9LFxuXHRcdCgpID0+IGNyZWF0ZV9lbGVtZW50KG5hbWUpXG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDaGlsZE5vZGVBcnJheX0gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7RWxlbWVudCB8IFNWR0VsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG5cdHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGVsZW1lbnQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfX0gYXR0cmlidXRlc1xuICogQHJldHVybnMge0VsZW1lbnQgfCBTVkdFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhaW1fc3ZnX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcblx0cmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgc3ZnX2VsZW1lbnQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q2hpbGROb2RlQXJyYXl9IG5vZGVzXG4gKiBAcmV0dXJucyB7VGV4dH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcblx0cmV0dXJuIGNsYWltX25vZGUoXG5cdFx0bm9kZXMsXG5cdFx0LyoqIEByZXR1cm5zIHtub2RlIGlzIFRleHR9ICovXG5cdFx0KG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsXG5cdFx0LyoqIEBwYXJhbSB7VGV4dH0gbm9kZSAqL1xuXHRcdChub2RlKSA9PiB7XG5cdFx0XHRjb25zdCBkYXRhX3N0ciA9ICcnICsgZGF0YTtcblx0XHRcdGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhX3N0cikpIHtcblx0XHRcdFx0aWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFfc3RyLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBub2RlLnNwbGl0VGV4dChkYXRhX3N0ci5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub2RlLmRhdGEgPSBkYXRhX3N0cjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdCgpID0+IHRleHQoZGF0YSksXG5cdFx0dHJ1ZSAvLyBUZXh0IG5vZGVzIHNob3VsZCBub3QgdXBkYXRlIGxhc3QgaW5kZXggc2luY2UgaXQgaXMgbGlrZWx5IG5vdCB3b3J0aCBpdCB0byBlbGltaW5hdGUgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBhY3R1YWwgZWxlbWVudHNcblx0KTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7VGV4dH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuXHRyZXR1cm4gY2xhaW1fdGV4dChub2RlcywgJyAnKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NoaWxkTm9kZUFycmF5fSBub2Rlc1xuICogQHJldHVybnMge0NvbW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9jb21tZW50KG5vZGVzLCBkYXRhKSB7XG5cdHJldHVybiBjbGFpbV9ub2RlKFxuXHRcdG5vZGVzLFxuXHRcdC8qKiBAcmV0dXJucyB7bm9kZSBpcyBDb21tZW50fSAqL1xuXHRcdChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSA4LFxuXHRcdC8qKiBAcGFyYW0ge0NvbW1lbnR9IG5vZGUgKi9cblx0XHQobm9kZSkgPT4ge1xuXHRcdFx0bm9kZS5kYXRhID0gJycgKyBkYXRhO1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9LFxuXHRcdCgpID0+IGNvbW1lbnQoZGF0YSksXG5cdFx0dHJ1ZVxuXHQpO1xufVxuXG5mdW5jdGlvbiBnZXRfY29tbWVudF9pZHgobm9kZXMsIHRleHQsIHN0YXJ0KSB7XG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLyAmJiBub2RlLnRleHRDb250ZW50LnRyaW0oKSA9PT0gdGV4dCkge1xuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzX3N2Z1xuICogQHJldHVybnMge0h0bWxUYWdIeWRyYXRpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbV9odG1sX3RhZyhub2RlcywgaXNfc3ZnKSB7XG5cdC8vIGZpbmQgaHRtbCBvcGVuaW5nIHRhZ1xuXHRjb25zdCBzdGFydF9pbmRleCA9IGdldF9jb21tZW50X2lkeChub2RlcywgJ0hUTUxfVEFHX1NUQVJUJywgMCk7XG5cdGNvbnN0IGVuZF9pbmRleCA9IGdldF9jb21tZW50X2lkeChub2RlcywgJ0hUTUxfVEFHX0VORCcsIHN0YXJ0X2luZGV4ICsgMSk7XG5cdGlmIChzdGFydF9pbmRleCA9PT0gLTEgfHwgZW5kX2luZGV4ID09PSAtMSkge1xuXHRcdHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihpc19zdmcpO1xuXHR9XG5cblx0aW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcblx0Y29uc3QgaHRtbF90YWdfbm9kZXMgPSBub2Rlcy5zcGxpY2Uoc3RhcnRfaW5kZXgsIGVuZF9pbmRleCAtIHN0YXJ0X2luZGV4ICsgMSk7XG5cdGRldGFjaChodG1sX3RhZ19ub2Rlc1swXSk7XG5cdGRldGFjaChodG1sX3RhZ19ub2Rlc1todG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxXSk7XG5cdGNvbnN0IGNsYWltZWRfbm9kZXMgPSBodG1sX3RhZ19ub2Rlcy5zbGljZSgxLCBodG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxKTtcblx0aWYgKGNsYWltZWRfbm9kZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKGlzX3N2Zyk7XG5cdH1cblx0Zm9yIChjb25zdCBuIG9mIGNsYWltZWRfbm9kZXMpIHtcblx0XHRuLmNsYWltX29yZGVyID0gbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkO1xuXHRcdG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuXHR9XG5cdHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbihpc19zdmcsIGNsYWltZWRfbm9kZXMpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VGV4dH0gdGV4dFxuICogQHBhcmFtIHt1bmtub3dufSBkYXRhXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcblx0ZGF0YSA9ICcnICsgZGF0YTtcblx0aWYgKHRleHQuZGF0YSA9PT0gZGF0YSkgcmV0dXJuO1xuXHR0ZXh0LmRhdGEgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKGRhdGEpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VGV4dH0gdGV4dFxuICogQHBhcmFtIHt1bmtub3dufSBkYXRhXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kYXRhX2NvbnRlbnRlZGl0YWJsZSh0ZXh0LCBkYXRhKSB7XG5cdGRhdGEgPSAnJyArIGRhdGE7XG5cdGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSkgcmV0dXJuO1xuXHR0ZXh0LmRhdGEgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKGRhdGEpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VGV4dH0gdGV4dFxuICogQHBhcmFtIHt1bmtub3dufSBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cl92YWx1ZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfZGF0YV9tYXliZV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSwgYXR0cl92YWx1ZSkge1xuXHRpZiAofmNvbnRlbnRlZGl0YWJsZV90cnV0aHlfdmFsdWVzLmluZGV4T2YoYXR0cl92YWx1ZSkpIHtcblx0XHRzZXRfZGF0YV9jb250ZW50ZWRpdGFibGUodGV4dCwgZGF0YSk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0X2RhdGEodGV4dCwgZGF0YSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG5cdGlucHV0LnZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcblx0dHJ5IHtcblx0XHRpbnB1dC50eXBlID0gdHlwZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIGRvIG5vdGhpbmdcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcblx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG5cdH0gZWxzZSB7XG5cdFx0bm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdF9vcHRpb24oc2VsZWN0LCB2YWx1ZSwgbW91bnRpbmcpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXHRcdGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cdGlmICghbW91bnRpbmcgfHwgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcblx0fVxufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXHRcdG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuXHRjb25zdCBzZWxlY3RlZF9vcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcblx0cmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdF9tdWx0aXBsZV92YWx1ZShzZWxlY3QpIHtcblx0cmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCAob3B0aW9uKSA9PiBvcHRpb24uX192YWx1ZSk7XG59XG4vLyB1bmZvcnR1bmF0ZWx5IHRoaXMgY2FuJ3QgYmUgYSBjb25zdGFudCBhcyB0aGF0IHdvdWxkbid0IGJlIHRyZWUtc2hha2VhYmxlXG4vLyBzbyB3ZSBjYWNoZSB0aGUgcmVzdWx0IGluc3RlYWRcblxuLyoqXG4gKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbmxldCBjcm9zc29yaWdpbjtcblxuLyoqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcblx0aWYgKGNyb3Nzb3JpZ2luID09PSB1bmRlZmluZWQpIHtcblx0XHRjcm9zc29yaWdpbiA9IGZhbHNlO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBhcmVudCkge1xuXHRcdFx0XHR2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNyb3Nzb3JpZ2luID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gZm5cbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkX2lmcmFtZV9yZXNpemVfbGlzdGVuZXIobm9kZSwgZm4pIHtcblx0Y29uc3QgY29tcHV0ZWRfc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHRpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG5cdFx0bm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdH1cblx0Y29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG5cdGlmcmFtZS5zZXRBdHRyaWJ1dGUoXG5cdFx0J3N0eWxlJyxcblx0XHQnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyAnICtcblx0XHRcdCdvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDA7IG9wYWNpdHk6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAtMTsnXG5cdCk7XG5cdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0aWZyYW1lLnRhYkluZGV4ID0gLTE7XG5cdGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcblxuXHQvKipcblx0ICogQHR5cGUgeygpID0+IHZvaWR9XG5cdCAqL1xuXHRsZXQgdW5zdWJzY3JpYmU7XG5cdGlmIChjcm9zc29yaWdpbikge1xuXHRcdGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuXHRcdHVuc3Vic2NyaWJlID0gbGlzdGVuKFxuXHRcdFx0d2luZG93LFxuXHRcdFx0J21lc3NhZ2UnLFxuXHRcdFx0LyoqIEBwYXJhbSB7TWVzc2FnZUV2ZW50fSBldmVudCAqLyAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpIGZuKCk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcblx0XHRpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0dW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG5cdFx0XHQvLyBtYWtlIHN1cmUgYW4gaW5pdGlhbCByZXNpemUgZXZlbnQgaXMgZmlyZWQgX2FmdGVyXyB0aGUgaWZyYW1lIGlzIGxvYWRlZCAod2hpY2ggaXMgYXN5bmNocm9ub3VzKVxuXHRcdFx0Ly8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzQyMzNcblx0XHRcdGZuKCk7XG5cdFx0fTtcblx0fVxuXHRhcHBlbmQobm9kZSwgaWZyYW1lKTtcblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoY3Jvc3NvcmlnaW4pIHtcblx0XHRcdHVuc3Vic2NyaWJlKCk7XG5cdFx0fSBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuXHRcdFx0dW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cdFx0ZGV0YWNoKGlmcmFtZSk7XG5cdH07XG59XG5leHBvcnQgY29uc3QgcmVzaXplX29ic2VydmVyX2NvbnRlbnRfYm94ID0gLyogQF9fUFVSRV9fICovIG5ldyBSZXNpemVPYnNlcnZlclNpbmdsZXRvbih7XG5cdGJveDogJ2NvbnRlbnQtYm94J1xufSk7XG5leHBvcnQgY29uc3QgcmVzaXplX29ic2VydmVyX2JvcmRlcl9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKHtcblx0Ym94OiAnYm9yZGVyLWJveCdcbn0pO1xuZXhwb3J0IGNvbnN0IHJlc2l6ZV9vYnNlcnZlcl9kZXZpY2VfcGl4ZWxfY29udGVudF9ib3ggPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uKFxuXHR7IGJveDogJ2RldmljZS1waXhlbC1jb250ZW50LWJveCcgfVxuKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyU2luZ2xldG9uIH07XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuXHQvLyBUaGUgYCEhYCBpcyByZXF1aXJlZCBiZWNhdXNlIGFuIGB1bmRlZmluZWRgIGZsYWcgbWVhbnMgZmxpcHBpbmcgdGhlIGN1cnJlbnQgc3RhdGUuXG5cdGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCAhIXRvZ2dsZSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1R9IFtkZXRhaWxdXG4gKiBAcGFyYW0ge3sgYnViYmxlcz86IGJvb2xlYW4sIGNhbmNlbGFibGU/OiBib29sZWFuIH19IFtvcHRpb25zXVxuICogQHJldHVybnMge0N1c3RvbUV2ZW50PFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBidWJibGVzID0gZmFsc2UsIGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pIHtcblx0cmV0dXJuIG5ldyBDdXN0b21FdmVudCh0eXBlLCB7IGRldGFpbCwgYnViYmxlcywgY2FuY2VsYWJsZSB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHJldHVybnMge0NoaWxkTm9kZUFycmF5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG5cdHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5vZGVJZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaGVhZFxuICogQHJldHVybnMge2FueVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVhZF9zZWxlY3Rvcihub2RlSWQsIGhlYWQpIHtcblx0Y29uc3QgcmVzdWx0ID0gW107XG5cdGxldCBzdGFydGVkID0gMDtcblx0Zm9yIChjb25zdCBub2RlIG9mIGhlYWQuY2hpbGROb2Rlcykge1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLykge1xuXHRcdFx0Y29uc3QgY29tbWVudCA9IG5vZGUudGV4dENvbnRlbnQudHJpbSgpO1xuXHRcdFx0aWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9FTkRgKSB7XG5cdFx0XHRcdHN0YXJ0ZWQgLT0gMTtcblx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZSk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9TVEFSVGApIHtcblx0XHRcdFx0c3RhcnRlZCArPSAxO1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHN0YXJ0ZWQgPiAwKSB7XG5cdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbi8qKiAqL1xuZXhwb3J0IGNsYXNzIEh0bWxUYWcge1xuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQGRlZmF1bHQgZmFsc2Vcblx0ICovXG5cdGlzX3N2ZyA9IGZhbHNlO1xuXHQvKiogcGFyZW50IGZvciBjcmVhdGluZyBub2RlICovXG5cdGUgPSB1bmRlZmluZWQ7XG5cdC8qKiBodG1sIHRhZyBub2RlcyAqL1xuXHRuID0gdW5kZWZpbmVkO1xuXHQvKiogdGFyZ2V0ICovXG5cdHQgPSB1bmRlZmluZWQ7XG5cdC8qKiBhbmNob3IgKi9cblx0YSA9IHVuZGVmaW5lZDtcblx0Y29uc3RydWN0b3IoaXNfc3ZnID0gZmFsc2UpIHtcblx0XHR0aGlzLmlzX3N2ZyA9IGlzX3N2Zztcblx0XHR0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0YyhodG1sKSB7XG5cdFx0dGhpcy5oKGh0bWwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50fSB0YXJnZXRcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnR9IGFuY2hvclxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdG0oaHRtbCwgdGFyZ2V0LCBhbmNob3IgPSBudWxsKSB7XG5cdFx0aWYgKCF0aGlzLmUpIHtcblx0XHRcdGlmICh0aGlzLmlzX3N2Zylcblx0XHRcdFx0dGhpcy5lID0gc3ZnX2VsZW1lbnQoLyoqIEB0eXBlIHtrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcH0gKi8gKHRhcmdldC5ub2RlTmFtZSkpO1xuXHRcdFx0LyoqICM3MzY0ICB0YXJnZXQgZm9yIDx0ZW1wbGF0ZT4gbWF5IGJlIHByb3ZpZGVkIGFzICNkb2N1bWVudC1mcmFnbWVudCgxMSkgKi8gZWxzZVxuXHRcdFx0XHR0aGlzLmUgPSBlbGVtZW50KFxuXHRcdFx0XHRcdC8qKiBAdHlwZSB7a2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwfSAqLyAoXG5cdFx0XHRcdFx0XHR0YXJnZXQubm9kZVR5cGUgPT09IDExID8gJ1RFTVBMQVRFJyA6IHRhcmdldC5ub2RlTmFtZVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdHRoaXMudCA9XG5cdFx0XHRcdHRhcmdldC50YWdOYW1lICE9PSAnVEVNUExBVEUnXG5cdFx0XHRcdFx0PyB0YXJnZXRcblx0XHRcdFx0XHQ6IC8qKiBAdHlwZSB7SFRNTFRlbXBsYXRlRWxlbWVudH0gKi8gKHRhcmdldCkuY29udGVudDtcblx0XHRcdHRoaXMuYyhodG1sKTtcblx0XHR9XG5cdFx0dGhpcy5pKGFuY2hvcik7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRoKGh0bWwpIHtcblx0XHR0aGlzLmUuaW5uZXJIVE1MID0gaHRtbDtcblx0XHR0aGlzLm4gPSBBcnJheS5mcm9tKFxuXHRcdFx0dGhpcy5lLm5vZGVOYW1lID09PSAnVEVNUExBVEUnID8gdGhpcy5lLmNvbnRlbnQuY2hpbGROb2RlcyA6IHRoaXMuZS5jaGlsZE5vZGVzXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0aShhbmNob3IpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdHAoaHRtbCkge1xuXHRcdHRoaXMuZCgpO1xuXHRcdHRoaXMuaChodG1sKTtcblx0XHR0aGlzLmkodGhpcy5hKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZCgpIHtcblx0XHR0aGlzLm4uZm9yRWFjaChkZXRhY2gpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBIdG1sVGFnSHlkcmF0aW9uIGV4dGVuZHMgSHRtbFRhZyB7XG5cdC8qKiBAdHlwZSB7RWxlbWVudFtdfSBoeWRyYXRpb24gY2xhaW1lZCBub2RlcyAqL1xuXHRsID0gdW5kZWZpbmVkO1xuXG5cdGNvbnN0cnVjdG9yKGlzX3N2ZyA9IGZhbHNlLCBjbGFpbWVkX25vZGVzKSB7XG5cdFx0c3VwZXIoaXNfc3ZnKTtcblx0XHR0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuXHRcdHRoaXMubCA9IGNsYWltZWRfbm9kZXM7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRjKGh0bWwpIHtcblx0XHRpZiAodGhpcy5sKSB7XG5cdFx0XHR0aGlzLm4gPSB0aGlzLmw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1cGVyLmMoaHRtbCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRpKGFuY2hvcikge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpbnNlcnRfaHlkcmF0aW9uKHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7TmFtZWROb2RlTWFwfSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVfdG9fb2JqZWN0KGF0dHJpYnV0ZXMpIHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcblx0XHRyZXN1bHRbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnN0IGVzY2FwZWQgPSB7XG5cdCdcIic6ICcmcXVvdDsnLFxuXHQnJic6ICcmYW1wOycsXG5cdCc8JzogJyZsdDsnXG59O1xuXG5jb25zdCByZWdleF9hdHRyaWJ1dGVfY2hhcmFjdGVyc190b19lc2NhcGUgPSAvW1wiJjxdL2c7XG5cbi8qKlxuICogTm90ZSB0aGF0IHRoZSBhdHRyaWJ1dGUgaXRzZWxmIHNob3VsZCBiZSBzdXJyb3VuZGVkIGluIGRvdWJsZSBxdW90ZXNcbiAqIEBwYXJhbSB7YW55fSBhdHRyaWJ1dGVcbiAqL1xuZnVuY3Rpb24gZXNjYXBlX2F0dHJpYnV0ZShhdHRyaWJ1dGUpIHtcblx0cmV0dXJuIFN0cmluZyhhdHRyaWJ1dGUpLnJlcGxhY2UocmVnZXhfYXR0cmlidXRlX2NoYXJhY3RlcnNfdG9fZXNjYXBlLCAobWF0Y2gpID0+IGVzY2FwZWRbbWF0Y2hdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IGF0dHJpYnV0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeV9zcHJlYWQoYXR0cmlidXRlcykge1xuXHRsZXQgc3RyID0gJyAnO1xuXHRmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGF0dHJpYnV0ZXNba2V5XSAhPSBudWxsKSB7XG5cdFx0XHRzdHIgKz0gYCR7a2V5fT1cIiR7ZXNjYXBlX2F0dHJpYnV0ZShhdHRyaWJ1dGVzW2tleV0pfVwiIGA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzKGVsZW1lbnQpIHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cdGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKFxuXHRcdC8qKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgKi8gKG5vZGUpID0+IHtcblx0XHRcdHJlc3VsdFtub2RlLnNsb3QgfHwgJ2RlZmF1bHQnXSA9IHRydWU7XG5cdFx0fVxuXHQpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnQoY29tcG9uZW50LCBwcm9wcykge1xuXHRyZXR1cm4gbmV3IGNvbXBvbmVudChwcm9wcyk7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge05vZGUgJiB7XG4gKiBcdGNsYWltX29yZGVyPzogbnVtYmVyO1xuICogXHRoeWRyYXRlX2luaXQ/OiB0cnVlO1xuICogXHRhY3R1YWxfZW5kX2NoaWxkPzogTm9kZUV4O1xuICogXHRjaGlsZE5vZGVzOiBOb2RlTGlzdE9mPE5vZGVFeD47XG4gKiB9fSBOb2RlRXhcbiAqL1xuXG4vKiogQHR5cGVkZWYge0NoaWxkTm9kZSAmIE5vZGVFeH0gQ2hpbGROb2RlRXggKi9cblxuLyoqIEB0eXBlZGVmIHtOb2RlRXggJiB7IGNsYWltX29yZGVyOiBudW1iZXIgfX0gTm9kZUV4MiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtDaGlsZE5vZGVFeFtdICYge1xuICogXHRjbGFpbV9pbmZvPzoge1xuICogXHRcdGxhc3RfaW5kZXg6IG51bWJlcjtcbiAqIFx0XHR0b3RhbF9jbGFpbWVkOiBudW1iZXI7XG4gKiBcdH07XG4gKiB9fSBDaGlsZE5vZGVBcnJheVxuICovXG4iLCJpbXBvcnQgeyBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldCwgZGV0YWNoLCBnZXRfcm9vdF9mb3Jfc3R5bGUgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyByYWYgfSBmcm9tICcuL2Vudmlyb25tZW50LmpzJztcblxuLy8gd2UgbmVlZCB0byBzdG9yZSB0aGUgaW5mb3JtYXRpb24gZm9yIG11bHRpcGxlIGRvY3VtZW50cyBiZWNhdXNlIGEgU3ZlbHRlIGFwcGxpY2F0aW9uIGNvdWxkIGFsc28gY29udGFpbiBpZnJhbWVzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy8zNjI0XG4vKiogQHR5cGUge01hcDxEb2N1bWVudCB8IFNoYWRvd1Jvb3QsIGltcG9ydCgnLi9wcml2YXRlLmQudHMnKS5TdHlsZUluZm9ybWF0aW9uPn0gKi9cbmNvbnN0IG1hbmFnZWRfc3R5bGVzID0gbmV3IE1hcCgpO1xuXG5sZXQgYWN0aXZlID0gMDtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcblx0bGV0IGhhc2ggPSA1MzgxO1xuXHRsZXQgaSA9IHN0ci5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRyZXR1cm4gaGFzaCA+Pj4gMDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0RvY3VtZW50IHwgU2hhZG93Um9vdH0gZG9jXG4gKiBAcGFyYW0ge0VsZW1lbnQgJiBFbGVtZW50Q1NTSW5saW5lU3R5bGV9IG5vZGVcbiAqIEByZXR1cm5zIHt7IHN0eWxlc2hlZXQ6IGFueTsgcnVsZXM6IHt9OyB9fVxuICovXG5mdW5jdGlvbiBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKSB7XG5cdGNvbnN0IGluZm8gPSB7IHN0eWxlc2hlZXQ6IGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpLCBydWxlczoge30gfTtcblx0bWFuYWdlZF9zdHlsZXMuc2V0KGRvYywgaW5mbyk7XG5cdHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gbm9kZVxuICogQHBhcmFtIHtudW1iZXJ9IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICogQHBhcmFtIHsodDogbnVtYmVyKSA9PiBudW1iZXJ9IGVhc2VcbiAqIEBwYXJhbSB7KHQ6IG51bWJlciwgdTogbnVtYmVyKSA9PiBzdHJpbmd9IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gdWlkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuXHRjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG5cdGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG5cdGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuXHRcdGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG5cdFx0a2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcblx0fVxuXHRjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcblx0Y29uc3QgbmFtZSA9IGBfX3N2ZWx0ZV8ke2hhc2gocnVsZSl9XyR7dWlkfWA7XG5cdGNvbnN0IGRvYyA9IGdldF9yb290X2Zvcl9zdHlsZShub2RlKTtcblx0Y29uc3QgeyBzdHlsZXNoZWV0LCBydWxlcyB9ID0gbWFuYWdlZF9zdHlsZXMuZ2V0KGRvYykgfHwgY3JlYXRlX3N0eWxlX2luZm9ybWF0aW9uKGRvYywgbm9kZSk7XG5cdGlmICghcnVsZXNbbmFtZV0pIHtcblx0XHRydWxlc1tuYW1lXSA9IHRydWU7XG5cdFx0c3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcblx0fVxuXHRjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcblx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHtcblx0XHRhbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogJydcblx0fSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuXHRhY3RpdmUgKz0gMTtcblx0cmV0dXJuIG5hbWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcblx0Y29uc3QgcHJldmlvdXMgPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpLnNwbGl0KCcsICcpO1xuXHRjb25zdCBuZXh0ID0gcHJldmlvdXMuZmlsdGVyKFxuXHRcdG5hbWVcblx0XHRcdD8gKGFuaW0pID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuXHRcdFx0OiAoYW5pbSkgPT4gYW5pbS5pbmRleE9mKCdfX3N2ZWx0ZScpID09PSAtMSAvLyByZW1vdmUgYWxsIFN2ZWx0ZSBhbmltYXRpb25zXG5cdCk7XG5cdGNvbnN0IGRlbGV0ZWQgPSBwcmV2aW91cy5sZW5ndGggLSBuZXh0Lmxlbmd0aDtcblx0aWYgKGRlbGV0ZWQpIHtcblx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5leHQuam9pbignLCAnKTtcblx0XHRhY3RpdmUgLT0gZGVsZXRlZDtcblx0XHRpZiAoIWFjdGl2ZSkgY2xlYXJfcnVsZXMoKTtcblx0fVxufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG5cdHJhZigoKSA9PiB7XG5cdFx0aWYgKGFjdGl2ZSkgcmV0dXJuO1xuXHRcdG1hbmFnZWRfc3R5bGVzLmZvckVhY2goKGluZm8pID0+IHtcblx0XHRcdGNvbnN0IHsgb3duZXJOb2RlIH0gPSBpbmZvLnN0eWxlc2hlZXQ7XG5cdFx0XHQvLyB0aGVyZSBpcyBubyBvd25lck5vZGUgaWYgaXQgcnVucyBvbiBqc2RvbS5cblx0XHRcdGlmIChvd25lck5vZGUpIGRldGFjaChvd25lck5vZGUpO1xuXHRcdH0pO1xuXHRcdG1hbmFnZWRfc3R5bGVzLmNsZWFyKCk7XG5cdH0pO1xufVxuIiwiaW1wb3J0IHsgY3VzdG9tX2V2ZW50IH0gZnJvbSAnLi9kb20uanMnO1xuXG5leHBvcnQgbGV0IGN1cnJlbnRfY29tcG9uZW50O1xuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcblx0aWYgKCFjdXJyZW50X2NvbXBvbmVudCkgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBjYWxsZWQgb3V0c2lkZSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24nKTtcblx0cmV0dXJuIGN1cnJlbnRfY29tcG9uZW50O1xufVxuXG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyB1cGRhdGVkIGFmdGVyIGFueSBzdGF0ZSBjaGFuZ2UuXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIHJ1bnMgd2lsbCBiZSBiZWZvcmUgdGhlIGluaXRpYWwgYG9uTW91bnRgXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlI2JlZm9yZXVwZGF0ZVxuICogQHBhcmFtIHsoKSA9PiBhbnl9IGZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuXHRnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5iZWZvcmVfdXBkYXRlLnB1c2goZm4pO1xufVxuXG4vKipcbiAqIFRoZSBgb25Nb3VudGAgZnVuY3Rpb24gc2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGFzIHNvb24gYXMgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET00uXG4gKiBJdCBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIGluaXRpYWxpc2F0aW9uIChidXQgZG9lc24ndCBuZWVkIHRvIGxpdmUgKmluc2lkZSogdGhlIGNvbXBvbmVudDtcbiAqIGl0IGNhbiBiZSBjYWxsZWQgZnJvbSBhbiBleHRlcm5hbCBtb2R1bGUpLlxuICpcbiAqIElmIGEgZnVuY3Rpb24gaXMgcmV0dXJuZWQgX3N5bmNocm9ub3VzbHlfIGZyb20gYG9uTW91bnRgLCBpdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxuICpcbiAqIGBvbk1vdW50YCBkb2VzIG5vdCBydW4gaW5zaWRlIGEgW3NlcnZlci1zaWRlIGNvbXBvbmVudF0oaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc2VydmVyLXNpZGUtY29tcG9uZW50LWFwaSkuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlI29ubW91bnRcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0geygpID0+IGltcG9ydCgnLi9wcml2YXRlLmpzJykuTm90RnVuY3Rpb248VD4gfCBQcm9taXNlPGltcG9ydCgnLi9wcml2YXRlLmpzJykuTm90RnVuY3Rpb248VD4+IHwgKCgpID0+IGFueSl9IGZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcblx0Z2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gdXBkYXRlZC5cbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgcnVucyB3aWxsIGJlIGFmdGVyIHRoZSBpbml0aWFsIGBvbk1vdW50YFxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNhZnRlcnVwZGF0ZVxuICogQHBhcmFtIHsoKSA9PiBhbnl9IGZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG5cdGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cblxuLyoqXG4gKiBTY2hlZHVsZXMgYSBjYWxsYmFjayB0byBydW4gaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLlxuICpcbiAqIE91dCBvZiBgb25Nb3VudGAsIGBiZWZvcmVVcGRhdGVgLCBgYWZ0ZXJVcGRhdGVgIGFuZCBgb25EZXN0cm95YCwgdGhpcyBpcyB0aGVcbiAqIG9ubHkgb25lIHRoYXQgcnVucyBpbnNpZGUgYSBzZXJ2ZXItc2lkZSBjb21wb25lbnQuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlI29uZGVzdHJveVxuICogQHBhcmFtIHsoKSA9PiBhbnl9IGZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuXHRnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9kZXN0cm95LnB1c2goZm4pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gZXZlbnQgZGlzcGF0Y2hlciB0aGF0IGNhbiBiZSB1c2VkIHRvIGRpc3BhdGNoIFtjb21wb25lbnQgZXZlbnRzXShodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyN0ZW1wbGF0ZS1zeW50YXgtY29tcG9uZW50LWRpcmVjdGl2ZXMtb24tZXZlbnRuYW1lKS5cbiAqIEV2ZW50IGRpc3BhdGNoZXJzIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gdGFrZSB0d28gYXJndW1lbnRzOiBgbmFtZWAgYW5kIGBkZXRhaWxgLlxuICpcbiAqIENvbXBvbmVudCBldmVudHMgY3JlYXRlZCB3aXRoIGBjcmVhdGVFdmVudERpc3BhdGNoZXJgIGNyZWF0ZSBhXG4gKiBbQ3VzdG9tRXZlbnRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudCkuXG4gKiBUaGVzZSBldmVudHMgZG8gbm90IFtidWJibGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTGVhcm4vSmF2YVNjcmlwdC9CdWlsZGluZ19ibG9ja3MvRXZlbnRzI0V2ZW50X2J1YmJsaW5nX2FuZF9jYXB0dXJlKS5cbiAqIFRoZSBgZGV0YWlsYCBhcmd1bWVudCBjb3JyZXNwb25kcyB0byB0aGUgW0N1c3RvbUV2ZW50LmRldGFpbF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50L2RldGFpbClcbiAqIHByb3BlcnR5IGFuZCBjYW4gY29udGFpbiBhbnkgdHlwZSBvZiBkYXRhLlxuICpcbiAqIFRoZSBldmVudCBkaXNwYXRjaGVyIGNhbiBiZSB0eXBlZCB0byBuYXJyb3cgdGhlIGFsbG93ZWQgZXZlbnQgbmFtZXMgYW5kIHRoZSB0eXBlIG9mIHRoZSBgZGV0YWlsYCBhcmd1bWVudDpcbiAqIGBgYHRzXG4gKiBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcjx7XG4gKiAgbG9hZGVkOiBuZXZlcjsgLy8gZG9lcyBub3QgdGFrZSBhIGRldGFpbCBhcmd1bWVudFxuICogIGNoYW5nZTogc3RyaW5nOyAvLyB0YWtlcyBhIGRldGFpbCBhcmd1bWVudCBvZiB0eXBlIHN0cmluZywgd2hpY2ggaXMgcmVxdWlyZWRcbiAqICBvcHRpb25hbDogbnVtYmVyIHwgbnVsbDsgLy8gdGFrZXMgYW4gb3B0aW9uYWwgZGV0YWlsIGFyZ3VtZW50IG9mIHR5cGUgbnVtYmVyXG4gKiB9PigpO1xuICogYGBgXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlI2NyZWF0ZWV2ZW50ZGlzcGF0Y2hlclxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBbRXZlbnRNYXA9YW55XVxuICogQHJldHVybnMge2ltcG9ydCgnLi9wdWJsaWMuanMnKS5FdmVudERpc3BhdGNoZXI8RXZlbnRNYXA+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCkge1xuXHRjb25zdCBjb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcblx0cmV0dXJuICh0eXBlLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkgPT4ge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbdHlwZV07XG5cdFx0aWYgKGNhbGxiYWNrcykge1xuXHRcdFx0Ly8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuXHRcdFx0Ly8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuXHRcdFx0Y29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQoLyoqIEB0eXBlIHtzdHJpbmd9ICovICh0eXBlKSwgZGV0YWlsLCB7IGNhbmNlbGFibGUgfSk7XG5cdFx0XHRjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKChmbikgPT4ge1xuXHRcdFx0XHRmbi5jYWxsKGNvbXBvbmVudCwgZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xufVxuXG4vKipcbiAqIEFzc29jaWF0ZXMgYW4gYXJiaXRyYXJ5IGBjb250ZXh0YCBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCBjb21wb25lbnQgYW5kIHRoZSBzcGVjaWZpZWQgYGtleWBcbiAqIGFuZCByZXR1cm5zIHRoYXQgb2JqZWN0LiBUaGUgY29udGV4dCBpcyB0aGVuIGF2YWlsYWJsZSB0byBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50XG4gKiAoaW5jbHVkaW5nIHNsb3R0ZWQgY29udGVudCkgd2l0aCBgZ2V0Q29udGV4dGAuXG4gKlxuICogTGlrZSBsaWZlY3ljbGUgZnVuY3Rpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlI3NldGNvbnRleHRcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge2FueX0ga2V5XG4gKiBAcGFyYW0ge1R9IGNvbnRleHRcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29udGV4dChrZXksIGNvbnRleHQpIHtcblx0Z2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5zZXQoa2V5LCBjb250ZXh0KTtcblx0cmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjb250ZXh0IHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IHdpdGggdGhlIHNwZWNpZmllZCBga2V5YC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlI2dldGNvbnRleHRcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge2FueX0ga2V5XG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHQoa2V5KSB7XG5cdHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgd2hvbGUgY29udGV4dCBtYXAgdGhhdCBiZWxvbmdzIHRvIHRoZSBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLiBVc2VmdWwsIGZvciBleGFtcGxlLCBpZiB5b3VcbiAqIHByb2dyYW1tYXRpY2FsbHkgY3JlYXRlIGEgY29tcG9uZW50IGFuZCB3YW50IHRvIHBhc3MgdGhlIGV4aXN0aW5nIGNvbnRleHQgdG8gaXQuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlI2dldGFsbGNvbnRleHRzXG4gKiBAdGVtcGxhdGUge01hcDxhbnksIGFueT59IFtUPU1hcDxhbnksIGFueT5dXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbENvbnRleHRzKCkge1xuXHRyZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dDtcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIGdpdmVuIGBrZXlgIGhhcyBiZWVuIHNldCBpbiB0aGUgY29udGV4dCBvZiBhIHBhcmVudCBjb21wb25lbnQuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZSNoYXNjb250ZXh0XG4gKiBAcGFyYW0ge2FueX0ga2V5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbnRleHQoa2V5KSB7XG5cdHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmhhcyhrZXkpO1xufVxuXG4vLyBUT0RPIGZpZ3VyZSBvdXQgaWYgd2Ugc3RpbGwgd2FudCB0byBzdXBwb3J0XG4vLyBzaG9ydGhhbmQgZXZlbnRzLCBvciBpZiB3ZSB3YW50IHRvIGltcGxlbWVudFxuLy8gYSByZWFsIGJ1YmJsaW5nIG1lY2hhbmlzbVxuLyoqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gZXZlbnRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYnViYmxlKGNvbXBvbmVudCwgZXZlbnQpIHtcblx0Y29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcblx0aWYgKGNhbGxiYWNrcykge1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRjYWxsYmFja3Muc2xpY2UoKS5mb3JFYWNoKChmbikgPT4gZm4uY2FsbCh0aGlzLCBldmVudCkpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBydW5fYWxsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBjdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnLi9saWZlY3ljbGUuanMnO1xuXG5leHBvcnQgY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuZXhwb3J0IGNvbnN0IGludHJvcyA9IHsgZW5hYmxlZDogZmFsc2UgfTtcbmV4cG9ydCBjb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuXG5sZXQgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuXG5jb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcblxuY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IC8qIEBfX1BVUkVfXyAqLyBQcm9taXNlLnJlc29sdmUoKTtcblxubGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcblx0aWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG5cdFx0dXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG5cdFx0cmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcblx0fVxufVxuXG4vKiogQHJldHVybnMge1Byb21pc2U8dm9pZD59ICovXG5leHBvcnQgZnVuY3Rpb24gdGljaygpIHtcblx0c2NoZWR1bGVfdXBkYXRlKCk7XG5cdHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuXHRyZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gYWRkX2ZsdXNoX2NhbGxiYWNrKGZuKSB7XG5cdGZsdXNoX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cblxuLy8gZmx1c2goKSBjYWxscyBjYWxsYmFja3MgaW4gdGhpcyBvcmRlcjpcbi8vIDEuIEFsbCBiZWZvcmVVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW5cbi8vIDIuIEFsbCBiaW5kOnRoaXMgY2FsbGJhY2tzLCBpbiByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIDMuIEFsbCBhZnRlclVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlbi4gRVhDRVBUXG4vLyAgICBmb3IgYWZ0ZXJVcGRhdGVzIGNhbGxlZCBkdXJpbmcgdGhlIGluaXRpYWwgb25Nb3VudCwgd2hpY2ggYXJlIGNhbGxlZCBpblxuLy8gICAgcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyBTaW5jZSBjYWxsYmFja3MgbWlnaHQgdXBkYXRlIGNvbXBvbmVudCB2YWx1ZXMsIHdoaWNoIGNvdWxkIHRyaWdnZXIgYW5vdGhlclxuLy8gY2FsbCB0byBmbHVzaCgpLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGd1YXJkIGFnYWluc3QgdGhpczpcbi8vIDEuIER1cmluZyBiZWZvcmVVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBiZSBhZGRlZCB0byB0aGVcbi8vICAgIGRpcnR5X2NvbXBvbmVudHMgYXJyYXkgYW5kIHdpbGwgY2F1c2UgYSByZWVudHJhbnQgY2FsbCB0byBmbHVzaCgpLiBCZWNhdXNlXG4vLyAgICB0aGUgZmx1c2ggaW5kZXggaXMga2VwdCBvdXRzaWRlIHRoZSBmdW5jdGlvbiwgdGhlIHJlZW50cmFudCBjYWxsIHdpbGwgcGlja1xuLy8gICAgdXAgd2hlcmUgdGhlIGVhcmxpZXIgY2FsbCBsZWZ0IG9mZiBhbmQgZ28gdGhyb3VnaCBhbGwgZGlydHkgY29tcG9uZW50cy4gVGhlXG4vLyAgICBjdXJyZW50X2NvbXBvbmVudCB2YWx1ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgc28gdGhhdCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbFxuLy8gICAgbm90IGludGVyZmVyZSB3aXRoIHRoZSBcInBhcmVudFwiIGZsdXNoKCkgY2FsbC5cbi8vIDIuIGJpbmQ6dGhpcyBjYWxsYmFja3MgY2Fubm90IHRyaWdnZXIgbmV3IGZsdXNoKCkgY2FsbHMuXG4vLyAzLiBEdXJpbmcgYWZ0ZXJVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBOT1QgaGF2ZSB0aGVpciBhZnRlclVwZGF0ZVxuLy8gICAgY2FsbGJhY2sgY2FsbGVkIGEgc2Vjb25kIHRpbWU7IHRoZSBzZWVuX2NhbGxiYWNrcyBzZXQsIG91dHNpZGUgdGhlIGZsdXNoKClcbi8vICAgIGZ1bmN0aW9uLCBndWFyYW50ZWVzIHRoaXMgYmVoYXZpb3IuXG5jb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcblxubGV0IGZsdXNoaWR4ID0gMDsgLy8gRG8gKm5vdCogbW92ZSB0aGlzIGluc2lkZSB0aGUgZmx1c2goKSBmdW5jdGlvblxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gZmx1c2goKSB7XG5cdC8vIERvIG5vdCByZWVudGVyIGZsdXNoIHdoaWxlIGRpcnR5IGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGFzIHRoaXMgY2FuXG5cdC8vIHJlc3VsdCBpbiBhbiBpbmZpbml0ZSBsb29wLiBJbnN0ZWFkLCBsZXQgdGhlIGlubmVyIGZsdXNoIGhhbmRsZSBpdC5cblx0Ly8gUmVlbnRyYW5jeSBpcyBvayBhZnRlcndhcmRzIGZvciBiaW5kaW5ncyBldGMuXG5cdGlmIChmbHVzaGlkeCAhPT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBzYXZlZF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcblx0ZG8ge1xuXHRcdC8vIGZpcnN0LCBjYWxsIGJlZm9yZVVwZGF0ZSBmdW5jdGlvbnNcblx0XHQvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcblx0XHR0cnkge1xuXHRcdFx0d2hpbGUgKGZsdXNoaWR4IDwgZGlydHlfY29tcG9uZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG5cdFx0XHRcdGZsdXNoaWR4Kys7XG5cdFx0XHRcdHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuXHRcdFx0XHR1cGRhdGUoY29tcG9uZW50LiQkKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyByZXNldCBkaXJ0eSBzdGF0ZSB0byBub3QgZW5kIHVwIGluIGEgZGVhZGxvY2tlZCBzdGF0ZSBhbmQgdGhlbiByZXRocm93XG5cdFx0XHRkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG5cdFx0XHRmbHVzaGlkeCA9IDA7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblx0XHRzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG5cdFx0ZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuXHRcdGZsdXNoaWR4ID0gMDtcblx0XHR3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKSBiaW5kaW5nX2NhbGxiYWNrcy5wb3AoKSgpO1xuXHRcdC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuXHRcdC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2Vcblx0XHQvLyBzdWJzZXF1ZW50IHVwZGF0ZXMuLi5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcblx0XHRcdGlmICghc2Vlbl9jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuXHRcdFx0XHQvLyAuLi5zbyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGxvb3BzXG5cdFx0XHRcdHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoID0gMDtcblx0fSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuXHR3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuXHR9XG5cdHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcblx0c2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcblx0c2V0X2N1cnJlbnRfY29tcG9uZW50KHNhdmVkX2NvbXBvbmVudCk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuXHRpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcblx0XHQkJC51cGRhdGUoKTtcblx0XHRydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuXHRcdGNvbnN0IGRpcnR5ID0gJCQuZGlydHk7XG5cdFx0JCQuZGlydHkgPSBbLTFdO1xuXHRcdCQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LnAoJCQuY3R4LCBkaXJ0eSk7XG5cdFx0JCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG5cdH1cbn1cblxuLyoqXG4gKiBVc2VmdWwgZm9yIGV4YW1wbGUgdG8gZXhlY3V0ZSByZW1haW5pbmcgYGFmdGVyVXBkYXRlYCBjYWxsYmFja3MgYmVmb3JlIGV4ZWN1dGluZyBgZGVzdHJveWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9uW119IGZuc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbHVzaF9yZW5kZXJfY2FsbGJhY2tzKGZucykge1xuXHRjb25zdCBmaWx0ZXJlZCA9IFtdO1xuXHRjb25zdCB0YXJnZXRzID0gW107XG5cdHJlbmRlcl9jYWxsYmFja3MuZm9yRWFjaCgoYykgPT4gKGZucy5pbmRleE9mKGMpID09PSAtMSA/IGZpbHRlcmVkLnB1c2goYykgOiB0YXJnZXRzLnB1c2goYykpKTtcblx0dGFyZ2V0cy5mb3JFYWNoKChjKSA9PiBjKCkpO1xuXHRyZW5kZXJfY2FsbGJhY2tzID0gZmlsdGVyZWQ7XG59XG4iLCJpbXBvcnQgeyBpZGVudGl0eSBhcyBsaW5lYXIsIGlzX2Z1bmN0aW9uLCBub29wLCBydW5fYWxsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBub3cgfSBmcm9tICcuL2Vudmlyb25tZW50LmpzJztcbmltcG9ydCB7IGxvb3AgfSBmcm9tICcuL2xvb3AuanMnO1xuaW1wb3J0IHsgY3JlYXRlX3J1bGUsIGRlbGV0ZV9ydWxlIH0gZnJvbSAnLi9zdHlsZV9tYW5hZ2VyLmpzJztcbmltcG9ydCB7IGN1c3RvbV9ldmVudCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGFkZF9yZW5kZXJfY2FsbGJhY2sgfSBmcm9tICcuL3NjaGVkdWxlci5qcyc7XG5cbi8qKlxuICogQHR5cGUge1Byb21pc2U8dm9pZD4gfCBudWxsfVxuICovXG5sZXQgcHJvbWlzZTtcblxuLyoqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZnVuY3Rpb24gd2FpdCgpIHtcblx0aWYgKCFwcm9taXNlKSB7XG5cdFx0cHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdHByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRwcm9taXNlID0gbnVsbDtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7SU5UUk8gfCBPVVRSTyB8IGJvb2xlYW59IGRpcmVjdGlvblxuICogQHBhcmFtIHsnc3RhcnQnIHwgJ2VuZCd9IGtpbmRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcblx0bm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xufVxuXG5jb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcblxuLyoqXG4gKiBAdHlwZSB7T3V0cm99XG4gKi9cbmxldCBvdXRyb3M7XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuXHRvdXRyb3MgPSB7XG5cdFx0cjogMCxcblx0XHRjOiBbXSxcblx0XHRwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG5cdH07XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuXHRpZiAoIW91dHJvcy5yKSB7XG5cdFx0cnVuX2FsbChvdXRyb3MuYyk7XG5cdH1cblx0b3V0cm9zID0gb3V0cm9zLnA7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vcHJpdmF0ZS5qcycpLkZyYWdtZW50fSBibG9ja1xuICogQHBhcmFtIHswIHwgMX0gW2xvY2FsXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuXHRpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuXHRcdG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG5cdFx0YmxvY2suaShsb2NhbCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wcml2YXRlLmpzJykuRnJhZ21lbnR9IGJsb2NrXG4gKiBAcGFyYW0gezAgfCAxfSBsb2NhbFxuICogQHBhcmFtIHswIHwgMX0gW2RldGFjaF1cbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcblx0aWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcblx0XHRpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSkgcmV0dXJuO1xuXHRcdG91dHJvaW5nLmFkZChibG9jayk7XG5cdFx0b3V0cm9zLmMucHVzaCgoKSA9PiB7XG5cdFx0XHRvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGlmIChkZXRhY2gpIGJsb2NrLmQoMSk7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0YmxvY2subyhsb2NhbCk7XG5cdH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcblx0XHRjYWxsYmFjaygpO1xuXHR9XG59XG5cbi8qKlxuICogQHR5cGUge2ltcG9ydCgnLi4vdHJhbnNpdGlvbi9wdWJsaWMuanMnKS5UcmFuc2l0aW9uQ29uZmlnfVxuICovXG5jb25zdCBudWxsX3RyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwIH07XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBub2RlXG4gKiBAcGFyYW0ge1RyYW5zaXRpb25Gbn0gZm5cbiAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAqIEByZXR1cm5zIHt7IHN0YXJ0KCk6IHZvaWQ7IGludmFsaWRhdGUoKTogdm9pZDsgZW5kKCk6IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7VHJhbnNpdGlvbk9wdGlvbnN9ICovXG5cdGNvbnN0IG9wdGlvbnMgPSB7IGRpcmVjdGlvbjogJ2luJyB9O1xuXHRsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcblx0bGV0IHJ1bm5pbmcgPSBmYWxzZTtcblx0bGV0IGFuaW1hdGlvbl9uYW1lO1xuXHRsZXQgdGFzaztcblx0bGV0IHVpZCA9IDA7XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBjbGVhbnVwKCkge1xuXHRcdGlmIChhbmltYXRpb25fbmFtZSkgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBnbygpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkZWxheSA9IDAsXG5cdFx0XHRkdXJhdGlvbiA9IDMwMCxcblx0XHRcdGVhc2luZyA9IGxpbmVhcixcblx0XHRcdHRpY2sgPSBub29wLFxuXHRcdFx0Y3NzXG5cdFx0fSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG5cdFx0aWYgKGNzcykgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG5cdFx0dGljaygwLCAxKTtcblx0XHRjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcblx0XHRjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcblx0XHRpZiAodGFzaykgdGFzay5hYm9ydCgpO1xuXHRcdHJ1bm5pbmcgPSB0cnVlO1xuXHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuXHRcdHRhc2sgPSBsb29wKChub3cpID0+IHtcblx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdGlmIChub3cgPj0gZW5kX3RpbWUpIHtcblx0XHRcdFx0XHR0aWNrKDEsIDApO1xuXHRcdFx0XHRcdGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcblx0XHRcdFx0XHRjbGVhbnVwKCk7XG5cdFx0XHRcdFx0cmV0dXJuIChydW5uaW5nID0gZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuXHRcdFx0XHRcdGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuXHRcdFx0XHRcdHRpY2sodCwgMSAtIHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcnVubmluZztcblx0XHR9KTtcblx0fVxuXHRsZXQgc3RhcnRlZCA9IGZhbHNlO1xuXHRyZXR1cm4ge1xuXHRcdHN0YXJ0KCkge1xuXHRcdFx0aWYgKHN0YXJ0ZWQpIHJldHVybjtcblx0XHRcdHN0YXJ0ZWQgPSB0cnVlO1xuXHRcdFx0ZGVsZXRlX3J1bGUobm9kZSk7XG5cdFx0XHRpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuXHRcdFx0XHRjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG5cdFx0XHRcdHdhaXQoKS50aGVuKGdvKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGdvKCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlKCkge1xuXHRcdFx0c3RhcnRlZCA9IGZhbHNlO1xuXHRcdH0sXG5cdFx0ZW5kKCkge1xuXHRcdFx0aWYgKHJ1bm5pbmcpIHtcblx0XHRcdFx0Y2xlYW51cCgpO1xuXHRcdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gbm9kZVxuICogQHBhcmFtIHtUcmFuc2l0aW9uRm59IGZuXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gKiBAcmV0dXJucyB7eyBlbmQocmVzZXQ6IGFueSk6IHZvaWQ7IH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfb3V0X3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuXHQvKiogQHR5cGUge1RyYW5zaXRpb25PcHRpb25zfSAqL1xuXHRjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdvdXQnIH07XG5cdGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuXHRsZXQgcnVubmluZyA9IHRydWU7XG5cdGxldCBhbmltYXRpb25fbmFtZTtcblx0Y29uc3QgZ3JvdXAgPSBvdXRyb3M7XG5cdGdyb3VwLnIgKz0gMTtcblx0LyoqIEB0eXBlIHtib29sZWFufSAqL1xuXHRsZXQgb3JpZ2luYWxfaW5lcnRfdmFsdWU7XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBnbygpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkZWxheSA9IDAsXG5cdFx0XHRkdXJhdGlvbiA9IDMwMCxcblx0XHRcdGVhc2luZyA9IGxpbmVhcixcblx0XHRcdHRpY2sgPSBub29wLFxuXHRcdFx0Y3NzXG5cdFx0fSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG5cblx0XHRpZiAoY3NzKSBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuXG5cdFx0Y29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG5cdFx0Y29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG5cdFx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuXG5cdFx0aWYgKCdpbmVydCcgaW4gbm9kZSkge1xuXHRcdFx0b3JpZ2luYWxfaW5lcnRfdmFsdWUgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAobm9kZSkuaW5lcnQ7XG5cdFx0XHRub2RlLmluZXJ0ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRsb29wKChub3cpID0+IHtcblx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdGlmIChub3cgPj0gZW5kX3RpbWUpIHtcblx0XHRcdFx0XHR0aWNrKDAsIDEpO1xuXHRcdFx0XHRcdGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnZW5kJyk7XG5cdFx0XHRcdFx0aWYgKCEtLWdyb3VwLnIpIHtcblx0XHRcdFx0XHRcdC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG5cdFx0XHRcdFx0XHQvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcblx0XHRcdFx0XHRcdHJ1bl9hbGwoZ3JvdXAuYyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcblx0XHRcdFx0XHRjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcblx0XHRcdFx0XHR0aWNrKDEgLSB0LCB0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJ1bm5pbmc7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuXHRcdHdhaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdGNvbmZpZyA9IGNvbmZpZyhvcHRpb25zKTtcblx0XHRcdGdvKCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Z28oKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZW5kKHJlc2V0KSB7XG5cdFx0XHRpZiAocmVzZXQgJiYgJ2luZXJ0JyBpbiBub2RlKSB7XG5cdFx0XHRcdG5vZGUuaW5lcnQgPSBvcmlnaW5hbF9pbmVydF92YWx1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuXHRcdFx0XHRjb25maWcudGljaygxLCAwKTtcblx0XHRcdH1cblx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdGlmIChhbmltYXRpb25fbmFtZSkgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuXHRcdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZX0gbm9kZVxuICogQHBhcmFtIHtUcmFuc2l0aW9uRm59IGZuXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGludHJvXG4gKiBAcmV0dXJucyB7eyBydW4oYjogMCB8IDEpOiB2b2lkOyBlbmQoKTogdm9pZDsgfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcywgaW50cm8pIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtUcmFuc2l0aW9uT3B0aW9uc30gKi9cblx0Y29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnYm90aCcgfTtcblx0bGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcywgb3B0aW9ucyk7XG5cdGxldCB0ID0gaW50cm8gPyAwIDogMTtcblxuXHQvKipcblx0ICogQHR5cGUge1Byb2dyYW0gfCBudWxsfSAqL1xuXHRsZXQgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge1BlbmRpbmdQcm9ncmFtIHwgbnVsbH0gKi9cblx0bGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG5cdGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG5cblx0LyoqIEB0eXBlIHtib29sZWFufSAqL1xuXHRsZXQgb3JpZ2luYWxfaW5lcnRfdmFsdWU7XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHt2b2lkfSAqL1xuXHRmdW5jdGlvbiBjbGVhcl9hbmltYXRpb24oKSB7XG5cdFx0aWYgKGFuaW1hdGlvbl9uYW1lKSBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtQZW5kaW5nUHJvZ3JhbX0gcHJvZ3JhbVxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cblx0ICogQHJldHVybnMge1Byb2dyYW19XG5cdCAqL1xuXHRmdW5jdGlvbiBpbml0KHByb2dyYW0sIGR1cmF0aW9uKSB7XG5cdFx0Y29uc3QgZCA9IC8qKiBAdHlwZSB7UHJvZ3JhbVsnZCddfSAqLyAocHJvZ3JhbS5iIC0gdCk7XG5cdFx0ZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IHQsXG5cdFx0XHRiOiBwcm9ncmFtLmIsXG5cdFx0XHRkLFxuXHRcdFx0ZHVyYXRpb24sXG5cdFx0XHRzdGFydDogcHJvZ3JhbS5zdGFydCxcblx0XHRcdGVuZDogcHJvZ3JhbS5zdGFydCArIGR1cmF0aW9uLFxuXHRcdFx0Z3JvdXA6IHByb2dyYW0uZ3JvdXBcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7SU5UUk8gfCBPVVRST30gYlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGZ1bmN0aW9uIGdvKGIpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkZWxheSA9IDAsXG5cdFx0XHRkdXJhdGlvbiA9IDMwMCxcblx0XHRcdGVhc2luZyA9IGxpbmVhcixcblx0XHRcdHRpY2sgPSBub29wLFxuXHRcdFx0Y3NzXG5cdFx0fSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7UGVuZGluZ1Byb2dyYW19ICovXG5cdFx0Y29uc3QgcHJvZ3JhbSA9IHtcblx0XHRcdHN0YXJ0OiBub3coKSArIGRlbGF5LFxuXHRcdFx0YlxuXHRcdH07XG5cblx0XHRpZiAoIWIpIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG5cdFx0XHRwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuXHRcdFx0b3V0cm9zLnIgKz0gMTtcblx0XHR9XG5cblx0XHRpZiAoJ2luZXJ0JyBpbiBub2RlKSB7XG5cdFx0XHRpZiAoYikge1xuXHRcdFx0XHRpZiAob3JpZ2luYWxfaW5lcnRfdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdC8vIGFib3J0ZWQvcmV2ZXJzZWQgb3V0cm8g4oCUIHJlc3RvcmUgcHJldmlvdXMgaW5lcnQgdmFsdWVcblx0XHRcdFx0XHRub2RlLmluZXJ0ID0gb3JpZ2luYWxfaW5lcnRfdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9yaWdpbmFsX2luZXJ0X3ZhbHVlID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKG5vZGUpLmluZXJ0O1xuXHRcdFx0XHRub2RlLmluZXJ0ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSkge1xuXHRcdFx0cGVuZGluZ19wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuXHRcdFx0Ly8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG5cdFx0XHRpZiAoY3NzKSB7XG5cdFx0XHRcdGNsZWFyX2FuaW1hdGlvbigpO1xuXHRcdFx0XHRhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGIpIHRpY2soMCwgMSk7XG5cdFx0XHRydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcblx0XHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuXHRcdFx0bG9vcCgobm93KSA9PiB7XG5cdFx0XHRcdGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG5cdFx0XHRcdFx0cnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcblx0XHRcdFx0XHRwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuXHRcdFx0XHRcdGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcblx0XHRcdFx0XHRpZiAoY3NzKSB7XG5cdFx0XHRcdFx0XHRjbGVhcl9hbmltYXRpb24oKTtcblx0XHRcdFx0XHRcdGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUoXG5cdFx0XHRcdFx0XHRcdG5vZGUsXG5cdFx0XHRcdFx0XHRcdHQsXG5cdFx0XHRcdFx0XHRcdHJ1bm5pbmdfcHJvZ3JhbS5iLFxuXHRcdFx0XHRcdFx0XHRydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sXG5cdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdGVhc2luZyxcblx0XHRcdFx0XHRcdFx0Y29uZmlnLmNzc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuXHRcdFx0XHRcdGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuXHRcdFx0XHRcdFx0dGljaygodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iKSwgMSAtIHQpO1xuXHRcdFx0XHRcdFx0ZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdlbmQnKTtcblx0XHRcdFx0XHRcdGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHdlJ3JlIGRvbmVcblx0XHRcdFx0XHRcdFx0aWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gaW50cm8g4oCUIHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJfYW5pbWF0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gb3V0cm8g4oCUIG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yKSBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cnVubmluZ19wcm9ncmFtID0gbnVsbDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG5cdFx0XHRcdFx0XHR0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcblx0XHRcdFx0XHRcdHRpY2sodCwgMSAtIHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHtcblx0XHRydW4oYikge1xuXHRcdFx0aWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcblx0XHRcdFx0d2FpdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG9wdHMgPSB7IGRpcmVjdGlvbjogYiA/ICdpbicgOiAnb3V0JyB9O1xuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRjb25maWcgPSBjb25maWcob3B0cyk7XG5cdFx0XHRcdFx0Z28oYik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Z28oYik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlbmQoKSB7XG5cdFx0XHRjbGVhcl9hbmltYXRpb24oKTtcblx0XHRcdHJ1bm5pbmdfcHJvZ3JhbSA9IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG5cdFx0fVxuXHR9O1xufVxuXG4vKiogQHR5cGVkZWYgezF9IElOVFJPICovXG4vKiogQHR5cGVkZWYgezB9IE9VVFJPICovXG4vKiogQHR5cGVkZWYge3sgZGlyZWN0aW9uOiAnaW4nIHwgJ291dCcgfCAnYm90aCcgfX0gVHJhbnNpdGlvbk9wdGlvbnMgKi9cbi8qKiBAdHlwZWRlZiB7KG5vZGU6IEVsZW1lbnQsIHBhcmFtczogYW55LCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucykgPT4gaW1wb3J0KCcuLi90cmFuc2l0aW9uL3B1YmxpYy5qcycpLlRyYW5zaXRpb25Db25maWd9IFRyYW5zaXRpb25GbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE91dHJvXG4gKiBAcHJvcGVydHkge251bWJlcn0gclxuICogQHByb3BlcnR5IHtGdW5jdGlvbltdfSBjXG4gKiBAcHJvcGVydHkge09iamVjdH0gcFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUGVuZGluZ1Byb2dyYW1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydFxuICogQHByb3BlcnR5IHtJTlRST3xPVVRST30gYlxuICogQHByb3BlcnR5IHtPdXRyb30gW2dyb3VwXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUHJvZ3JhbVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGFcbiAqIEBwcm9wZXJ0eSB7SU5UUk98T1VUUk99IGJcbiAqIEBwcm9wZXJ0eSB7MXwtMX0gZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbmRcbiAqIEBwcm9wZXJ0eSB7T3V0cm99IFtncm91cF1cbiAqL1xuIiwiaW1wb3J0IHsgdHJhbnNpdGlvbl9pbiwgdHJhbnNpdGlvbl9vdXQgfSBmcm9tICcuL3RyYW5zaXRpb25zLmpzJztcbmltcG9ydCB7IHJ1bl9hbGwgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLy8gZ2VuZXJhbCBlYWNoIGZ1bmN0aW9uczpcblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZV9hcnJheV9saWtlKGFycmF5X2xpa2Vfb3JfaXRlcmF0b3IpIHtcblx0cmV0dXJuIGFycmF5X2xpa2Vfb3JfaXRlcmF0b3I/Lmxlbmd0aCAhPT0gdW5kZWZpbmVkXG5cdFx0PyBhcnJheV9saWtlX29yX2l0ZXJhdG9yXG5cdFx0OiBBcnJheS5mcm9tKGFycmF5X2xpa2Vfb3JfaXRlcmF0b3IpO1xufVxuXG4vLyBrZXllZCBlYWNoIGZ1bmN0aW9uczpcblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5kKDEpO1xuXHRsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG5cdHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG5cdFx0bG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuXHR9KTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpeF9hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLmYoKTtcblx0ZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5mKCk7XG5cdG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApO1xufVxuXG4vKiogQHJldHVybnMge2FueVtdfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKFxuXHRvbGRfYmxvY2tzLFxuXHRkaXJ0eSxcblx0Z2V0X2tleSxcblx0ZHluYW1pYyxcblx0Y3R4LFxuXHRsaXN0LFxuXHRsb29rdXAsXG5cdG5vZGUsXG5cdGRlc3Ryb3ksXG5cdGNyZWF0ZV9lYWNoX2Jsb2NrLFxuXHRuZXh0LFxuXHRnZXRfY29udGV4dFxuKSB7XG5cdGxldCBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG5cdGxldCBuID0gbGlzdC5sZW5ndGg7XG5cdGxldCBpID0gbztcblx0Y29uc3Qgb2xkX2luZGV4ZXMgPSB7fTtcblx0d2hpbGUgKGktLSkgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcblx0Y29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuXHRjb25zdCBuZXdfbG9va3VwID0gbmV3IE1hcCgpO1xuXHRjb25zdCBkZWx0YXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHVwZGF0ZXMgPSBbXTtcblx0aSA9IG47XG5cdHdoaWxlIChpLS0pIHtcblx0XHRjb25zdCBjaGlsZF9jdHggPSBnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpO1xuXHRcdGNvbnN0IGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcblx0XHRsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG5cdFx0aWYgKCFibG9jaykge1xuXHRcdFx0YmxvY2sgPSBjcmVhdGVfZWFjaF9ibG9jayhrZXksIGNoaWxkX2N0eCk7XG5cdFx0XHRibG9jay5jKCk7XG5cdFx0fSBlbHNlIGlmIChkeW5hbWljKSB7XG5cdFx0XHQvLyBkZWZlciB1cGRhdGVzIHVudGlsIGFsbCB0aGUgRE9NIHNodWZmbGluZyBpcyBkb25lXG5cdFx0XHR1cGRhdGVzLnB1c2goKCkgPT4gYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KSk7XG5cdFx0fVxuXHRcdG5ld19sb29rdXAuc2V0KGtleSwgKG5ld19ibG9ja3NbaV0gPSBibG9jaykpO1xuXHRcdGlmIChrZXkgaW4gb2xkX2luZGV4ZXMpIGRlbHRhcy5zZXQoa2V5LCBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSkpO1xuXHR9XG5cdGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcblx0Y29uc3QgZGlkX21vdmUgPSBuZXcgU2V0KCk7XG5cdC8qKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0ZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG5cdFx0dHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG5cdFx0YmxvY2subShub2RlLCBuZXh0KTtcblx0XHRsb29rdXAuc2V0KGJsb2NrLmtleSwgYmxvY2spO1xuXHRcdG5leHQgPSBibG9jay5maXJzdDtcblx0XHRuLS07XG5cdH1cblx0d2hpbGUgKG8gJiYgbikge1xuXHRcdGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuXHRcdGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3NbbyAtIDFdO1xuXHRcdGNvbnN0IG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuXHRcdGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuXHRcdGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuXHRcdFx0Ly8gZG8gbm90aGluZ1xuXHRcdFx0bmV4dCA9IG5ld19ibG9jay5maXJzdDtcblx0XHRcdG8tLTtcblx0XHRcdG4tLTtcblx0XHR9IGVsc2UgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfa2V5KSkge1xuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBibG9ja1xuXHRcdFx0ZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdFx0XHRvLS07XG5cdFx0fSBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG5cdFx0XHRpbnNlcnQobmV3X2Jsb2NrKTtcblx0XHR9IGVsc2UgaWYgKGRpZF9tb3ZlLmhhcyhvbGRfa2V5KSkge1xuXHRcdFx0by0tO1xuXHRcdH0gZWxzZSBpZiAoZGVsdGFzLmdldChuZXdfa2V5KSA+IGRlbHRhcy5nZXQob2xkX2tleSkpIHtcblx0XHRcdGRpZF9tb3ZlLmFkZChuZXdfa2V5KTtcblx0XHRcdGluc2VydChuZXdfYmxvY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuXHRcdFx0by0tO1xuXHRcdH1cblx0fVxuXHR3aGlsZSAoby0tKSB7XG5cdFx0Y29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcblx0XHRpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9ibG9jay5rZXkpKSBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcblx0fVxuXHR3aGlsZSAobikgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcblx0cnVuX2FsbCh1cGRhdGVzKTtcblx0cmV0dXJuIG5ld19ibG9ja3M7XG59XG5cbi8qKiBAcmV0dXJucyB7dm9pZH0gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2tleXMoY3R4LCBsaXN0LCBnZXRfY29udGV4dCwgZ2V0X2tleSkge1xuXHRjb25zdCBrZXlzID0gbmV3IE1hcCgpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBrZXkgPSBnZXRfa2V5KGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSkpO1xuXHRcdGlmIChrZXlzLmhhcyhrZXkpKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSAnJztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhbHVlID0gYHdpdGggdmFsdWUgJyR7U3RyaW5nKGtleSl9JyBgO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHQvLyBjYW4ndCBzdHJpbmdpZnlcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0YENhbm5vdCBoYXZlIGR1cGxpY2F0ZSBrZXlzIGluIGEga2V5ZWQgZWFjaDogS2V5cyBhdCBpbmRleCAke2tleXMuZ2V0KFxuXHRcdFx0XHRcdGtleVxuXHRcdFx0XHQpfSBhbmQgJHtpfSAke3ZhbHVlfWFyZSBkdXBsaWNhdGVzYFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0a2V5cy5zZXQoa2V5LCBpKTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0YWRkX3JlbmRlcl9jYWxsYmFjayxcblx0Zmx1c2gsXG5cdGZsdXNoX3JlbmRlcl9jYWxsYmFja3MsXG5cdHNjaGVkdWxlX3VwZGF0ZSxcblx0ZGlydHlfY29tcG9uZW50c1xufSBmcm9tICcuL3NjaGVkdWxlci5qcyc7XG5pbXBvcnQgeyBjdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnLi9saWZlY3ljbGUuanMnO1xuaW1wb3J0IHsgYmxhbmtfb2JqZWN0LCBpc19lbXB0eSwgaXNfZnVuY3Rpb24sIHJ1biwgcnVuX2FsbCwgbm9vcCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtcblx0Y2hpbGRyZW4sXG5cdGRldGFjaCxcblx0c3RhcnRfaHlkcmF0aW5nLFxuXHRlbmRfaHlkcmF0aW5nLFxuXHRnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzLFxuXHRpbnNlcnQsXG5cdGVsZW1lbnQsXG5cdGF0dHJcbn0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgdHJhbnNpdGlvbl9pbiB9IGZyb20gJy4vdHJhbnNpdGlvbnMuanMnO1xuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG5cdGNvbnN0IGluZGV4ID0gY29tcG9uZW50LiQkLnByb3BzW25hbWVdO1xuXHRpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbXBvbmVudC4kJC5ib3VuZFtpbmRleF0gPSBjYWxsYmFjaztcblx0XHRjYWxsYmFjayhjb21wb25lbnQuJCQuY3R4W2luZGV4XSk7XG5cdH1cbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcblx0YmxvY2sgJiYgYmxvY2suYygpO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gY2xhaW1fY29tcG9uZW50KGJsb2NrLCBwYXJlbnRfbm9kZXMpIHtcblx0YmxvY2sgJiYgYmxvY2subChwYXJlbnRfbm9kZXMpO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IpIHtcblx0Y29uc3QgeyBmcmFnbWVudCwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG5cdGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuXHQvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG5cdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuXHRcdGNvbnN0IG5ld19vbl9kZXN0cm95ID0gY29tcG9uZW50LiQkLm9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG5cdFx0Ly8gaWYgdGhlIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5XG5cdFx0Ly8gaXQgd2lsbCB1cGRhdGUgdGhlIGAkJC5vbl9kZXN0cm95YCByZWZlcmVuY2UgdG8gYG51bGxgLlxuXHRcdC8vIHRoZSBkZXN0cnVjdHVyZWQgb25fZGVzdHJveSBtYXkgc3RpbGwgcmVmZXJlbmNlIHRvIHRoZSBvbGQgYXJyYXlcblx0XHRpZiAoY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kpIHtcblx0XHRcdGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcblx0XHRcdC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcblx0XHRcdHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuXHRcdH1cblx0XHRjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcblx0fSk7XG5cdGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuXG4vKiogQHJldHVybnMge3ZvaWR9ICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcblx0Y29uc3QgJCQgPSBjb21wb25lbnQuJCQ7XG5cdGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuXHRcdGZsdXNoX3JlbmRlcl9jYWxsYmFja3MoJCQuYWZ0ZXJfdXBkYXRlKTtcblx0XHRydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuXHRcdCQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTtcblx0XHQvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG5cdFx0Ly8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuXHRcdCQkLm9uX2Rlc3Ryb3kgPSAkJC5mcmFnbWVudCA9IG51bGw7XG5cdFx0JCQuY3R4ID0gW107XG5cdH1cbn1cblxuLyoqIEByZXR1cm5zIHt2b2lkfSAqL1xuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcblx0aWYgKGNvbXBvbmVudC4kJC5kaXJ0eVswXSA9PT0gLTEpIHtcblx0XHRkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblx0XHRzY2hlZHVsZV91cGRhdGUoKTtcblx0XHRjb21wb25lbnQuJCQuZGlydHkuZmlsbCgwKTtcblx0fVxuXHRjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAxIDw8IGkgJSAzMTtcbn1cblxuLy8gVE9ETzogRG9jdW1lbnQgdGhlIG90aGVyIHBhcmFtc1xuLyoqXG4gKiBAcGFyYW0ge1N2ZWx0ZUNvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wdWJsaWMuanMnKS5Db21wb25lbnRDb25zdHJ1Y3Rvck9wdGlvbnN9IG9wdGlvbnNcbiAqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi91dGlscy5qcycpWydub3RfZXF1YWwnXX0gbm90X2VxdWFsIFVzZWQgdG8gY29tcGFyZSBwcm9wcyBhbmQgc3RhdGUgdmFsdWVzLlxuICogQHBhcmFtIHsodGFyZ2V0OiBFbGVtZW50IHwgU2hhZG93Um9vdCkgPT4gdm9pZH0gW2FwcGVuZF9zdHlsZXNdIEZ1bmN0aW9uIHRoYXQgYXBwZW5kcyBzdHlsZXMgdG8gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaXMgZmlyc3QgaW5pdGlhbGlzZWQuXG4gKiBUaGlzIHdpbGwgYmUgdGhlIGBhZGRfY3NzYCBmdW5jdGlvbiBmcm9tIHRoZSBjb21waWxlZCBjb21wb25lbnQuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KFxuXHRjb21wb25lbnQsXG5cdG9wdGlvbnMsXG5cdGluc3RhbmNlLFxuXHRjcmVhdGVfZnJhZ21lbnQsXG5cdG5vdF9lcXVhbCxcblx0cHJvcHMsXG5cdGFwcGVuZF9zdHlsZXMgPSBudWxsLFxuXHRkaXJ0eSA9IFstMV1cbikge1xuXHRjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG5cdHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9wcml2YXRlLmpzJykuVCQkfSAqL1xuXHRjb25zdCAkJCA9IChjb21wb25lbnQuJCQgPSB7XG5cdFx0ZnJhZ21lbnQ6IG51bGwsXG5cdFx0Y3R4OiBbXSxcblx0XHQvLyBzdGF0ZVxuXHRcdHByb3BzLFxuXHRcdHVwZGF0ZTogbm9vcCxcblx0XHRub3RfZXF1YWwsXG5cdFx0Ym91bmQ6IGJsYW5rX29iamVjdCgpLFxuXHRcdC8vIGxpZmVjeWNsZVxuXHRcdG9uX21vdW50OiBbXSxcblx0XHRvbl9kZXN0cm95OiBbXSxcblx0XHRvbl9kaXNjb25uZWN0OiBbXSxcblx0XHRiZWZvcmVfdXBkYXRlOiBbXSxcblx0XHRhZnRlcl91cGRhdGU6IFtdLFxuXHRcdGNvbnRleHQ6IG5ldyBNYXAob3B0aW9ucy5jb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcblx0XHQvLyBldmVyeXRoaW5nIGVsc2Vcblx0XHRjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpLFxuXHRcdGRpcnR5LFxuXHRcdHNraXBfYm91bmQ6IGZhbHNlLFxuXHRcdHJvb3Q6IG9wdGlvbnMudGFyZ2V0IHx8IHBhcmVudF9jb21wb25lbnQuJCQucm9vdFxuXHR9KTtcblx0YXBwZW5kX3N0eWxlcyAmJiBhcHBlbmRfc3R5bGVzKCQkLnJvb3QpO1xuXHRsZXQgcmVhZHkgPSBmYWxzZTtcblx0JCQuY3R4ID0gaW5zdGFuY2Vcblx0XHQ/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IHJlc3QubGVuZ3RoID8gcmVzdFswXSA6IHJldDtcblx0XHRcdFx0aWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAoJCQuY3R4W2ldID0gdmFsdWUpKSkge1xuXHRcdFx0XHRcdGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSkgJCQuYm91bmRbaV0odmFsdWUpO1xuXHRcdFx0XHRcdGlmIChyZWFkeSkgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0ICB9KVxuXHRcdDogW107XG5cdCQkLnVwZGF0ZSgpO1xuXHRyZWFkeSA9IHRydWU7XG5cdHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG5cdC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuXHQkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG5cdGlmIChvcHRpb25zLnRhcmdldCkge1xuXHRcdGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcblx0XHRcdHN0YXJ0X2h5ZHJhdGluZygpO1xuXHRcdFx0Ly8gVE9ETzogd2hhdCBpcyB0aGUgY29ycmVjdCB0eXBlIGhlcmU/XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRjb25zdCBub2RlcyA9IGNoaWxkcmVuKG9wdGlvbnMudGFyZ2V0KTtcblx0XHRcdCQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuXHRcdFx0bm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuXHRcdFx0JCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5pbnRybykgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuXHRcdG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmFuY2hvcik7XG5cdFx0ZW5kX2h5ZHJhdGluZygpO1xuXHRcdGZsdXNoKCk7XG5cdH1cblx0c2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxuXG5leHBvcnQgbGV0IFN2ZWx0ZUVsZW1lbnQ7XG5cbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcblx0U3ZlbHRlRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRcdC8qKiBUaGUgU3ZlbHRlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciAqL1xuXHRcdCQkY3Rvcjtcblx0XHQvKiogU2xvdHMgKi9cblx0XHQkJHM7XG5cdFx0LyoqIFRoZSBTdmVsdGUgY29tcG9uZW50IGluc3RhbmNlICovXG5cdFx0JCRjO1xuXHRcdC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgY3VzdG9tIGVsZW1lbnQgaXMgY29ubmVjdGVkICovXG5cdFx0JCRjbiA9IGZhbHNlO1xuXHRcdC8qKiBDb21wb25lbnQgcHJvcHMgZGF0YSAqL1xuXHRcdCQkZCA9IHt9O1xuXHRcdC8qKiBgdHJ1ZWAgaWYgY3VycmVudGx5IGluIHRoZSBwcm9jZXNzIG9mIHJlZmxlY3RpbmcgY29tcG9uZW50IHByb3BzIGJhY2sgdG8gYXR0cmlidXRlcyAqL1xuXHRcdCQkciA9IGZhbHNlO1xuXHRcdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgQ3VzdG9tRWxlbWVudFByb3BEZWZpbml0aW9uPn0gUHJvcHMgZGVmaW5pdGlvbiAobmFtZSwgcmVmbGVjdGVkLCB0eXBlIGV0YykgKi9cblx0XHQkJHBfZCA9IHt9O1xuXHRcdC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgRnVuY3Rpb25bXT59IEV2ZW50IGxpc3RlbmVycyAqL1xuXHRcdCQkbCA9IHt9O1xuXHRcdC8qKiBAdHlwZSB7TWFwPEZ1bmN0aW9uLCBGdW5jdGlvbj59IEV2ZW50IGxpc3RlbmVyIHVuc3Vic2NyaWJlIGZ1bmN0aW9ucyAqL1xuXHRcdCQkbF91ID0gbmV3IE1hcCgpO1xuXG5cdFx0Y29uc3RydWN0b3IoJCRjb21wb25lbnRDdG9yLCAkJHNsb3RzLCB1c2Vfc2hhZG93X2RvbSkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdHRoaXMuJCRjdG9yID0gJCRjb21wb25lbnRDdG9yO1xuXHRcdFx0dGhpcy4kJHMgPSAkJHNsb3RzO1xuXHRcdFx0aWYgKHVzZV9zaGFkb3dfZG9tKSB7XG5cdFx0XHRcdHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcblx0XHRcdC8vIFdlIGNhbid0IGRldGVybWluZSB1cGZyb250IGlmIHRoZSBldmVudCBpcyBhIGN1c3RvbSBldmVudCBvciBub3QsIHNvIHdlIGhhdmUgdG9cblx0XHRcdC8vIGxpc3RlbiB0byBib3RoLiBJZiBzb21lb25lIHVzZXMgYSBjdXN0b20gZXZlbnQgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGEgcmVndWxhclxuXHRcdFx0Ly8gYnJvd3NlciBldmVudCwgdGhpcyBmaXJlcyB0d2ljZSAtIHdlIGNhbid0IGF2b2lkIHRoYXQuXG5cdFx0XHR0aGlzLiQkbFt0eXBlXSA9IHRoaXMuJCRsW3R5cGVdIHx8IFtdO1xuXHRcdFx0dGhpcy4kJGxbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cdFx0XHRpZiAodGhpcy4kJGMpIHtcblx0XHRcdFx0Y29uc3QgdW5zdWIgPSB0aGlzLiQkYy4kb24odHlwZSwgbGlzdGVuZXIpO1xuXHRcdFx0XHR0aGlzLiQkbF91LnNldChsaXN0ZW5lciwgdW5zdWIpO1xuXHRcdFx0fVxuXHRcdFx0c3VwZXIuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0cmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuXHRcdFx0c3VwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG5cdFx0XHRpZiAodGhpcy4kJGMpIHtcblx0XHRcdFx0Y29uc3QgdW5zdWIgPSB0aGlzLiQkbF91LmdldChsaXN0ZW5lcik7XG5cdFx0XHRcdGlmICh1bnN1Yikge1xuXHRcdFx0XHRcdHVuc3ViKCk7XG5cdFx0XHRcdFx0dGhpcy4kJGxfdS5kZWxldGUobGlzdGVuZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0XHR0aGlzLiQkY24gPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLiQkYykge1xuXHRcdFx0XHQvLyBXZSB3YWl0IG9uZSB0aWNrIHRvIGxldCBwb3NzaWJsZSBjaGlsZCBzbG90IGVsZW1lbnRzIGJlIGNyZWF0ZWQvbW91bnRlZFxuXHRcdFx0XHRhd2FpdCBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRcdFx0aWYgKCF0aGlzLiQkY24gfHwgdGhpcy4kJGMpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0ZnVuY3Rpb24gY3JlYXRlX3Nsb3QobmFtZSkge1xuXHRcdFx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgbm9kZTtcblx0XHRcdFx0XHRcdGNvbnN0IG9iaiA9IHtcblx0XHRcdFx0XHRcdFx0YzogZnVuY3Rpb24gY3JlYXRlKCkge1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtZW50KCdzbG90Jyk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5hbWUgIT09ICdkZWZhdWx0Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0YXR0cihub2RlLCAnbmFtZScsIG5hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0XHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuXHRcdFx0XHRcdFx0XHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbYW5jaG9yXVxuXHRcdFx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRcdFx0bTogZnVuY3Rpb24gbW91bnQodGFyZ2V0LCBhbmNob3IpIHtcblx0XHRcdFx0XHRcdFx0XHRpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRkOiBmdW5jdGlvbiBkZXN0cm95KGRldGFjaGluZykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChkZXRhY2hpbmcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRldGFjaChub2RlKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgJCRzbG90cyA9IHt9O1xuXHRcdFx0XHRjb25zdCBleGlzdGluZ19zbG90cyA9IGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHModGhpcyk7XG5cdFx0XHRcdGZvciAoY29uc3QgbmFtZSBvZiB0aGlzLiQkcykge1xuXHRcdFx0XHRcdGlmIChuYW1lIGluIGV4aXN0aW5nX3Nsb3RzKSB7XG5cdFx0XHRcdFx0XHQkJHNsb3RzW25hbWVdID0gW2NyZWF0ZV9zbG90KG5hbWUpXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgdGhpcy5hdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdFx0Ly8gdGhpcy4kJGRhdGEgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoaXMuYXR0cmlidXRlc1xuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLiQkZ19wKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdFx0XHRpZiAoIShuYW1lIGluIHRoaXMuJCRkKSkge1xuXHRcdFx0XHRcdFx0dGhpcy4kJGRbbmFtZV0gPSBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUobmFtZSwgYXR0cmlidXRlLnZhbHVlLCB0aGlzLiQkcF9kLCAndG9Qcm9wJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFBvcnQgb3ZlciBwcm9wcyB0aGF0IHdlcmUgc2V0IHByb2dyYW1tYXRpY2FsbHkgYmVmb3JlIGNlIHdhcyBpbml0aWFsaXplZFxuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkcF9kKSB7XG5cdFx0XHRcdFx0aWYgKCEoa2V5IGluIHRoaXMuJCRkKSAmJiB0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy4kJGRba2V5XSA9IHRoaXNba2V5XTsgLy8gZG9uJ3QgdHJhbnNmb3JtLCB0aGVzZSB3ZXJlIHNldCB0aHJvdWdoIEphdmFTY3JpcHRcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzW2tleV07IC8vIHJlbW92ZSB0aGUgcHJvcGVydHkgdGhhdCBzaGFkb3dzIHRoZSBnZXR0ZXIvc2V0dGVyXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJCRjID0gbmV3IHRoaXMuJCRjdG9yKHtcblx0XHRcdFx0XHR0YXJnZXQ6IHRoaXMuc2hhZG93Um9vdCB8fCB0aGlzLFxuXHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHQuLi50aGlzLiQkZCxcblx0XHRcdFx0XHRcdCQkc2xvdHMsXG5cdFx0XHRcdFx0XHQkJHNjb3BlOiB7XG5cdFx0XHRcdFx0XHRcdGN0eDogW11cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFJlZmxlY3QgY29tcG9uZW50IHByb3BzIGFzIGF0dHJpYnV0ZXNcblx0XHRcdFx0Y29uc3QgcmVmbGVjdF9hdHRyaWJ1dGVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJCRyID0gdHJ1ZTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkcF9kKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiQkZFtrZXldID0gdGhpcy4kJGMuJCQuY3R4W3RoaXMuJCRjLiQkLnByb3BzW2tleV1dO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuJCRwX2Rba2V5XS5yZWZsZWN0KSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZV92YWx1ZSA9IGdldF9jdXN0b21fZWxlbWVudF92YWx1ZShcblx0XHRcdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kJGRba2V5XSxcblx0XHRcdFx0XHRcdFx0XHR0aGlzLiQkcF9kLFxuXHRcdFx0XHRcdFx0XHRcdCd0b0F0dHJpYnV0ZSdcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0aWYgKGF0dHJpYnV0ZV92YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUodGhpcy4kJHBfZFtrZXldLmF0dHJpYnV0ZSB8fCBrZXkpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKHRoaXMuJCRwX2Rba2V5XS5hdHRyaWJ1dGUgfHwga2V5LCBhdHRyaWJ1dGVfdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuJCRyID0gZmFsc2U7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuJCRjLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKHJlZmxlY3RfYXR0cmlidXRlcyk7XG5cdFx0XHRcdHJlZmxlY3RfYXR0cmlidXRlcygpOyAvLyBvbmNlIGluaXRpYWxseSBiZWNhdXNlIGFmdGVyX3VwZGF0ZSBpcyBhZGRlZCB0b28gbGF0ZSBmb3IgZmlyc3QgcmVuZGVyXG5cblx0XHRcdFx0Zm9yIChjb25zdCB0eXBlIGluIHRoaXMuJCRsKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLiQkbFt0eXBlXSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdW5zdWIgPSB0aGlzLiQkYy4kb24odHlwZSwgbGlzdGVuZXIpO1xuXHRcdFx0XHRcdFx0dGhpcy4kJGxfdS5zZXQobGlzdGVuZXIsIHVuc3ViKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kJGwgPSB7fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBXZSBkb24ndCBuZWVkIHRoaXMgd2hlbiB3b3JraW5nIHdpdGhpbiBTdmVsdGUgY29kZSwgYnV0IGZvciBjb21wYXRpYmlsaXR5IG9mIHBlb3BsZSB1c2luZyB0aGlzIG91dHNpZGUgb2YgU3ZlbHRlXG5cdFx0Ly8gYW5kIHNldHRpbmcgYXR0cmlidXRlcyB0aHJvdWdoIHNldEF0dHJpYnV0ZSBldGMsIHRoaXMgaXMgaGVscGZ1bFxuXHRcdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy4kJHIpIHJldHVybjtcblx0XHRcdGF0dHIgPSB0aGlzLiQkZ19wKGF0dHIpO1xuXHRcdFx0dGhpcy4kJGRbYXR0cl0gPSBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUoYXR0ciwgbmV3VmFsdWUsIHRoaXMuJCRwX2QsICd0b1Byb3AnKTtcblx0XHRcdHRoaXMuJCRjPy4kc2V0KHsgW2F0dHJdOiB0aGlzLiQkZFthdHRyXSB9KTtcblx0XHR9XG5cblx0XHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRcdHRoaXMuJCRjbiA9IGZhbHNlO1xuXHRcdFx0Ly8gSW4gYSBtaWNyb3Rhc2ssIGJlY2F1c2UgdGhpcyBjb3VsZCBiZSBhIG1vdmUgd2l0aGluIHRoZSBET01cblx0XHRcdFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuJCRjbiAmJiB0aGlzLiQkYykge1xuXHRcdFx0XHRcdHRoaXMuJCRjLiRkZXN0cm95KCk7XG5cdFx0XHRcdFx0dGhpcy4kJGMgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdCQkZ19wKGF0dHJpYnV0ZV9uYW1lKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRPYmplY3Qua2V5cyh0aGlzLiQkcF9kKS5maW5kKFxuXHRcdFx0XHRcdChrZXkpID0+XG5cdFx0XHRcdFx0XHR0aGlzLiQkcF9kW2tleV0uYXR0cmlidXRlID09PSBhdHRyaWJ1dGVfbmFtZSB8fFxuXHRcdFx0XHRcdFx0KCF0aGlzLiQkcF9kW2tleV0uYXR0cmlidXRlICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSBhdHRyaWJ1dGVfbmFtZSlcblx0XHRcdFx0KSB8fCBhdHRyaWJ1dGVfbmFtZVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBDdXN0b21FbGVtZW50UHJvcERlZmluaXRpb24+fSBwcm9wc19kZWZpbml0aW9uXG4gKiBAcGFyYW0geyd0b0F0dHJpYnV0ZScgfCAndG9Qcm9wJ30gW3RyYW5zZm9ybV1cbiAqL1xuZnVuY3Rpb24gZ2V0X2N1c3RvbV9lbGVtZW50X3ZhbHVlKHByb3AsIHZhbHVlLCBwcm9wc19kZWZpbml0aW9uLCB0cmFuc2Zvcm0pIHtcblx0Y29uc3QgdHlwZSA9IHByb3BzX2RlZmluaXRpb25bcHJvcF0/LnR5cGU7XG5cdHZhbHVlID0gdHlwZSA9PT0gJ0Jvb2xlYW4nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nID8gdmFsdWUgIT0gbnVsbCA6IHZhbHVlO1xuXHRpZiAoIXRyYW5zZm9ybSB8fCAhcHJvcHNfZGVmaW5pdGlvbltwcm9wXSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fSBlbHNlIGlmICh0cmFuc2Zvcm0gPT09ICd0b0F0dHJpYnV0ZScpIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdGNhc2UgJ0Jvb2xlYW4nOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPyAnJyA6IG51bGw7XG5cdFx0XHRjYXNlICdOdW1iZXInOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/IG51bGwgOiB2YWx1ZTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgJiYgSlNPTi5wYXJzZSh2YWx1ZSk7XG5cdFx0XHRjYXNlICdCb29sZWFuJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlOyAvLyBjb252ZXJzaW9uIGFscmVhZHkgaGFuZGxlZCBhYm92ZVxuXHRcdFx0Y2FzZSAnTnVtYmVyJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlICE9IG51bGwgPyArdmFsdWUgOiB2YWx1ZTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqXG4gKiBUdXJuIGEgU3ZlbHRlIGNvbXBvbmVudCBpbnRvIGEgY3VzdG9tIGVsZW1lbnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wdWJsaWMuanMnKS5Db21wb25lbnRUeXBlfSBDb21wb25lbnQgIEEgU3ZlbHRlIGNvbXBvbmVudCBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBDdXN0b21FbGVtZW50UHJvcERlZmluaXRpb24+fSBwcm9wc19kZWZpbml0aW9uICBUaGUgcHJvcHMgdG8gb2JzZXJ2ZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gc2xvdHMgIFRoZSBzbG90cyB0byBjcmVhdGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFjY2Vzc29ycyAgT3RoZXIgYWNjZXNzb3JzIGJlc2lkZXMgdGhlIG9uZXMgZm9yIHByb3BzIHRoZSBjb21wb25lbnQgaGFzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHVzZV9zaGFkb3dfZG9tICBXaGV0aGVyIHRvIHVzZSBzaGFkb3cgRE9NXG4gKiBAcGFyYW0geyhjZTogbmV3ICgpID0+IEhUTUxFbGVtZW50KSA9PiBuZXcgKCkgPT4gSFRNTEVsZW1lbnR9IFtleHRlbmRdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfY3VzdG9tX2VsZW1lbnQoXG5cdENvbXBvbmVudCxcblx0cHJvcHNfZGVmaW5pdGlvbixcblx0c2xvdHMsXG5cdGFjY2Vzc29ycyxcblx0dXNlX3NoYWRvd19kb20sXG5cdGV4dGVuZFxuKSB7XG5cdGxldCBDbGFzcyA9IGNsYXNzIGV4dGVuZHMgU3ZlbHRlRWxlbWVudCB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcihDb21wb25lbnQsIHNsb3RzLCB1c2Vfc2hhZG93X2RvbSk7XG5cdFx0XHR0aGlzLiQkcF9kID0gcHJvcHNfZGVmaW5pdGlvbjtcblx0XHR9XG5cdFx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMocHJvcHNfZGVmaW5pdGlvbikubWFwKChrZXkpID0+XG5cdFx0XHRcdChwcm9wc19kZWZpbml0aW9uW2tleV0uYXR0cmlidXRlIHx8IGtleSkudG9Mb3dlckNhc2UoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdE9iamVjdC5rZXlzKHByb3BzX2RlZmluaXRpb24pLmZvckVhY2goKHByb3ApID0+IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xhc3MucHJvdG90eXBlLCBwcm9wLCB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiQkYyAmJiBwcm9wIGluIHRoaXMuJCRjID8gdGhpcy4kJGNbcHJvcF0gOiB0aGlzLiQkZFtwcm9wXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0dmFsdWUgPSBnZXRfY3VzdG9tX2VsZW1lbnRfdmFsdWUocHJvcCwgdmFsdWUsIHByb3BzX2RlZmluaXRpb24pO1xuXHRcdFx0XHR0aGlzLiQkZFtwcm9wXSA9IHZhbHVlO1xuXHRcdFx0XHR0aGlzLiQkYz8uJHNldCh7IFtwcm9wXTogdmFsdWUgfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXHRhY2Nlc3NvcnMuZm9yRWFjaCgoYWNjZXNzb3IpID0+IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xhc3MucHJvdG90eXBlLCBhY2Nlc3Nvciwge1xuXHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kJGM/LlthY2Nlc3Nvcl07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXHRpZiAoZXh0ZW5kKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciAtIGFzc2lnbmluZyBoZXJlIGlzIGZpbmVcblx0XHRDbGFzcyA9IGV4dGVuZChDbGFzcyk7XG5cdH1cblx0Q29tcG9uZW50LmVsZW1lbnQgPSAvKiogQHR5cGUge2FueX0gKi8gKENsYXNzKTtcblx0cmV0dXJuIENsYXNzO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICpcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gW1Byb3BzPWFueV1cbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gW0V2ZW50cz1hbnldXG4gKi9cbmV4cG9ydCBjbGFzcyBTdmVsdGVDb21wb25lbnQge1xuXHQvKipcblx0ICogIyMjIFBSSVZBVEUgQVBJXG5cdCAqXG5cdCAqIERvIG5vdCB1c2UsIG1heSBjaGFuZ2UgYXQgYW55IHRpbWVcblx0ICpcblx0ICogQHR5cGUge2FueX1cblx0ICovXG5cdCQkID0gdW5kZWZpbmVkO1xuXHQvKipcblx0ICogIyMjIFBSSVZBVEUgQVBJXG5cdCAqXG5cdCAqIERvIG5vdCB1c2UsIG1heSBjaGFuZ2UgYXQgYW55IHRpbWVcblx0ICpcblx0ICogQHR5cGUge2FueX1cblx0ICovXG5cdCQkc2V0ID0gdW5kZWZpbmVkO1xuXG5cdC8qKiBAcmV0dXJucyB7dm9pZH0gKi9cblx0JGRlc3Ryb3koKSB7XG5cdFx0ZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG5cdFx0dGhpcy4kZGVzdHJveSA9IG5vb3A7XG5cdH1cblxuXHQvKipcblx0ICogQHRlbXBsYXRlIHtFeHRyYWN0PGtleW9mIEV2ZW50cywgc3RyaW5nPn0gS1xuXHQgKiBAcGFyYW0ge0t9IHR5cGVcblx0ICogQHBhcmFtIHsoKGU6IEV2ZW50c1tLXSkgPT4gdm9pZCkgfCBudWxsIHwgdW5kZWZpbmVkfSBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cblx0ICovXG5cdCRvbih0eXBlLCBjYWxsYmFjaykge1xuXHRcdGlmICghaXNfZnVuY3Rpb24oY2FsbGJhY2spKSB7XG5cdFx0XHRyZXR1cm4gbm9vcDtcblx0XHR9XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gdGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pO1xuXHRcdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0Y29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaW5kZXggIT09IC0xKSBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UGFydGlhbDxQcm9wcz59IHByb3BzXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0JHNldChwcm9wcykge1xuXHRcdGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eShwcm9wcykpIHtcblx0XHRcdHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG5cdFx0XHR0aGlzLiQkc2V0KHByb3BzKTtcblx0XHRcdHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEN1c3RvbUVsZW1lbnRQcm9wRGVmaW5pdGlvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFthdHRyaWJ1dGVdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtyZWZsZWN0XVxuICogQHByb3BlcnR5IHsnU3RyaW5nJ3wnQm9vbGVhbid8J051bWJlcid8J0FycmF5J3wnT2JqZWN0J30gW3R5cGVdXG4gKi9cbiIsIi8vIGdlbmVyYXRlZCBkdXJpbmcgcmVsZWFzZSwgZG8gbm90IG1vZGlmeVxuXG4vKipcbiAqIFRoZSBjdXJyZW50IHZlcnNpb24sIGFzIHNldCBpbiBwYWNrYWdlLmpzb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWNvbXBpbGVyI3N2ZWx0ZS12ZXJzaW9uXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgVkVSU0lPTiA9ICc0LjIuMTcnO1xuZXhwb3J0IGNvbnN0IFBVQkxJQ19WRVJTSU9OID0gJzQnO1xuIiwiaW1wb3J0IHsgUFVCTElDX1ZFUlNJT04gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdmVyc2lvbi5qcyc7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0Ly8gQHRzLWlnbm9yZVxuXHQod2luZG93Ll9fc3ZlbHRlIHx8ICh3aW5kb3cuX19zdmVsdGUgPSB7IHY6IG5ldyBTZXQoKSB9KSkudi5hZGQoUFVCTElDX1ZFUlNJT04pO1xuIiwiLy8gY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo5MDAxXCI7XG5jb25zdCBiYXNlVXJsID0gXCJodHRwczovL2llYy1hcGkucmV2ZW5naW5lLmRhaWx5bWF2ZXJpY2suY28uemFcIjtcbmltcG9ydCBuYXRpb25hbDIwMDkgZnJvbSBcIi4uLy4uL2RhdGEvYXBpLzIwMDktbmF0aW9uYWwuanNvblwiO1xuaW1wb3J0IG5hdGlvbmFsMjAxNCBmcm9tIFwiLi4vLi4vZGF0YS9hcGkvMjAxNC1uYXRpb25hbC5qc29uXCI7XG5pbXBvcnQgbmF0aW9uYWwyMDE5IGZyb20gXCIuLi8uLi9kYXRhL2FwaS8yMDE5LW5hdGlvbmFsLmpzb25cIjtcblxuLyoqXG4gKiBMb2FkcyBkYXRhIGZvciBhIHNwZWNpZmljIGVsZWN0aW9uIHllYXIsIHR5cGUsIHJlZ2lvbiwgYW5kIGVsZWN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgbG9hZGluZyB0aGUgZGF0YS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy55ZWFyPTIwMjRdIC0gVGhlIHllYXIgb2YgdGhlIGVsZWN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmVsZWN0aW9uPVwiTmF0aW9uYWwgQXNzZW1ibHlcIl0gLSBUaGUgdHlwZSBvZiBlbGVjdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5yZWdpb249XCJOYXRpb25hbFwiXSAtIFRoZSByZWdpb24gb2YgdGhlIGVsZWN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnR5cGU9XCJ2b3Rlc1wiXSAtIFRoZSB0eXBlIG9mIGRhdGEgdG8gbG9hZCAodm90ZXMgb3Igc2VhdHMpLlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgZGF0YS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKHsgeWVhciA9IDIwMjQsIGVsZWN0aW9uID0gXCJOYXRpb25hbCBBc3NlbWJseVwiLCByZWdpb24gPSBcIk5hdGlvbmFsXCIgfSkge1xuICAgIGxldCB1cmwgPSBgJHtiYXNlVXJsfS9uYXRpb25hbC8ke3llYXJ9YDtcbiAgICBpZiAoZWxlY3Rpb24gPT09IFwiTmF0aW9uYWwgQXNzZW1ibHlcIikge1xuICAgICAgICBpZiAoeWVhciA9PT0gMjAwOSkgcmV0dXJuIG5hdGlvbmFsMjAwOTtcbiAgICAgICAgaWYgKHllYXIgPT09IDIwMTQpIHJldHVybiBuYXRpb25hbDIwMTQ7XG4gICAgICAgIGlmICh5ZWFyID09PSAyMDE5KSByZXR1cm4gbmF0aW9uYWwyMDE5O1xuICAgICAgICByZXR1cm4gYXdhaXQgbG9hZCh1cmwpO1xuICAgIH1cbiAgICBpZiAocmVnaW9uID09PSBcIk5hdGlvbmFsXCIpIHtcbiAgICAgICAgdXJsID0gYCR7YmFzZVVybH0vcHJvdmluY2lhbC8ke3llYXJ9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1cmwgPSBgJHtiYXNlVXJsfS9wcm92aW5jaWFsLyR7eWVhcn0vJHtyZWdpb259YDtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IGxvYWQodXJsKTtcbn1cblxuLyoqXG4gKiBMb2FkcyBkYXRhIGZyb20gdGhlIHNwZWNpZmllZCBVUkwuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIFVSTCB0byBmZXRjaCB0aGUgZGF0YSBmcm9tLlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcGFyc2VkIEpTT04gZGF0YS5cbiAqIEB0aHJvd3Mge0Vycm9yfSAtIElmIHRoZSBkYXRhIGZhaWxzIHRvIGxvYWQgb3IgcGFyc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWQodXJsKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBkYXRhIGZyb20gJHt1cmx9YCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2UgZGF0YSBmcm9tICR7dXJsfWApO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA9PSBudWxsIHx8IGIgPT0gbnVsbCA/IE5hTiA6IGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhID09IG51bGwgfHwgYiA9PSBudWxsID8gTmFOXG4gICAgOiBiIDwgYSA/IC0xXG4gICAgOiBiID4gYSA/IDFcbiAgICA6IGIgPj0gYSA/IDBcbiAgICA6IE5hTjtcbn1cbiIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nLmpzXCI7XG5pbXBvcnQgZGVzY2VuZGluZyBmcm9tIFwiLi9kZXNjZW5kaW5nLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpc2VjdG9yKGYpIHtcbiAgbGV0IGNvbXBhcmUxLCBjb21wYXJlMiwgZGVsdGE7XG5cbiAgLy8gSWYgYW4gYWNjZXNzb3IgaXMgc3BlY2lmaWVkLCBwcm9tb3RlIGl0IHRvIGEgY29tcGFyYXRvci4gSW4gdGhpcyBjYXNlIHdlXG4gIC8vIGNhbiB0ZXN0IHdoZXRoZXIgdGhlIHNlYXJjaCB2YWx1ZSBpcyAoc2VsZi0pIGNvbXBhcmFibGUuIFdlIGNhbuKAmXQgZG8gdGhpc1xuICAvLyBmb3IgYSBjb21wYXJhdG9yIChleGNlcHQgZm9yIHNwZWNpZmljLCBrbm93biBjb21wYXJhdG9ycykgYmVjYXVzZSB3ZSBjYW7igJl0XG4gIC8vIHRlbGwgaWYgdGhlIGNvbXBhcmF0b3IgaXMgc3ltbWV0cmljLCBhbmQgYW4gYXN5bW1ldHJpYyBjb21wYXJhdG9yIGNhbuKAmXQgYmVcbiAgLy8gdXNlZCB0byB0ZXN0IHdoZXRoZXIgYSBzaW5nbGUgdmFsdWUgaXMgY29tcGFyYWJsZS5cbiAgaWYgKGYubGVuZ3RoICE9PSAyKSB7XG4gICAgY29tcGFyZTEgPSBhc2NlbmRpbmc7XG4gICAgY29tcGFyZTIgPSAoZCwgeCkgPT4gYXNjZW5kaW5nKGYoZCksIHgpO1xuICAgIGRlbHRhID0gKGQsIHgpID0+IGYoZCkgLSB4O1xuICB9IGVsc2Uge1xuICAgIGNvbXBhcmUxID0gZiA9PT0gYXNjZW5kaW5nIHx8IGYgPT09IGRlc2NlbmRpbmcgPyBmIDogemVybztcbiAgICBjb21wYXJlMiA9IGY7XG4gICAgZGVsdGEgPSBmO1xuICB9XG5cbiAgZnVuY3Rpb24gbGVmdChhLCB4LCBsbyA9IDAsIGhpID0gYS5sZW5ndGgpIHtcbiAgICBpZiAobG8gPCBoaSkge1xuICAgICAgaWYgKGNvbXBhcmUxKHgsIHgpICE9PSAwKSByZXR1cm4gaGk7XG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IG1pZCA9IChsbyArIGhpKSA+Pj4gMTtcbiAgICAgICAgaWYgKGNvbXBhcmUyKGFbbWlkXSwgeCkgPCAwKSBsbyA9IG1pZCArIDE7XG4gICAgICAgIGVsc2UgaGkgPSBtaWQ7XG4gICAgICB9IHdoaWxlIChsbyA8IGhpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvO1xuICB9XG5cbiAgZnVuY3Rpb24gcmlnaHQoYSwgeCwgbG8gPSAwLCBoaSA9IGEubGVuZ3RoKSB7XG4gICAgaWYgKGxvIDwgaGkpIHtcbiAgICAgIGlmIChjb21wYXJlMSh4LCB4KSAhPT0gMCkgcmV0dXJuIGhpO1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBtaWQgPSAobG8gKyBoaSkgPj4+IDE7XG4gICAgICAgIGlmIChjb21wYXJlMihhW21pZF0sIHgpIDw9IDApIGxvID0gbWlkICsgMTtcbiAgICAgICAgZWxzZSBoaSA9IG1pZDtcbiAgICAgIH0gd2hpbGUgKGxvIDwgaGkpO1xuICAgIH1cbiAgICByZXR1cm4gbG87XG4gIH1cblxuICBmdW5jdGlvbiBjZW50ZXIoYSwgeCwgbG8gPSAwLCBoaSA9IGEubGVuZ3RoKSB7XG4gICAgY29uc3QgaSA9IGxlZnQoYSwgeCwgbG8sIGhpIC0gMSk7XG4gICAgcmV0dXJuIGkgPiBsbyAmJiBkZWx0YShhW2kgLSAxXSwgeCkgPiAtZGVsdGEoYVtpXSwgeCkgPyBpIC0gMSA6IGk7XG4gIH1cblxuICByZXR1cm4ge2xlZnQsIGNlbnRlciwgcmlnaHR9O1xufVxuXG5mdW5jdGlvbiB6ZXJvKCkge1xuICByZXR1cm4gMDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG51bWJlcih4KSB7XG4gIHJldHVybiB4ID09PSBudWxsID8gTmFOIDogK3g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogbnVtYmVycyh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgKHZhbHVlID0gK3ZhbHVlKSA+PSB2YWx1ZSkge1xuICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbCAmJiAodmFsdWUgPSArdmFsdWUpID49IHZhbHVlKSB7XG4gICAgICAgIHlpZWxkIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcbmltcG9ydCBiaXNlY3RvciBmcm9tIFwiLi9iaXNlY3Rvci5qc1wiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXIuanNcIjtcblxuY29uc3QgYXNjZW5kaW5nQmlzZWN0ID0gYmlzZWN0b3IoYXNjZW5kaW5nKTtcbmV4cG9ydCBjb25zdCBiaXNlY3RSaWdodCA9IGFzY2VuZGluZ0Jpc2VjdC5yaWdodDtcbmV4cG9ydCBjb25zdCBiaXNlY3RMZWZ0ID0gYXNjZW5kaW5nQmlzZWN0LmxlZnQ7XG5leHBvcnQgY29uc3QgYmlzZWN0Q2VudGVyID0gYmlzZWN0b3IobnVtYmVyKS5jZW50ZXI7XG5leHBvcnQgZGVmYXVsdCBiaXNlY3RSaWdodDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4dGVudCh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1pbjtcbiAgbGV0IG1heDtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAobWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPj0gdmFsdWUpIG1pbiA9IG1heCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChtaW4gPiB2YWx1ZSkgbWluID0gdmFsdWU7XG4gICAgICAgICAgaWYgKG1heCA8IHZhbHVlKSBtYXggPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChtaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh2YWx1ZSA+PSB2YWx1ZSkgbWluID0gbWF4ID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG1pbiA+IHZhbHVlKSBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICBpZiAobWF4IDwgdmFsdWUpIG1heCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBbbWluLCBtYXhdO1xufVxuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3B5dGhvbi9jcHl0aG9uL2Jsb2IvYTc0ZWVhMjM4ZjViYWJhMTU3OTdlMmU4YjU3MGQxNTNiYzg2OTBhNy9Nb2R1bGVzL21hdGhtb2R1bGUuYyNMMTQyM1xuZXhwb3J0IGNsYXNzIEFkZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcGFydGlhbHMgPSBuZXcgRmxvYXQ2NEFycmF5KDMyKTtcbiAgICB0aGlzLl9uID0gMDtcbiAgfVxuICBhZGQoeCkge1xuICAgIGNvbnN0IHAgPSB0aGlzLl9wYXJ0aWFscztcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9uICYmIGogPCAzMjsgaisrKSB7XG4gICAgICBjb25zdCB5ID0gcFtqXSxcbiAgICAgICAgaGkgPSB4ICsgeSxcbiAgICAgICAgbG8gPSBNYXRoLmFicyh4KSA8IE1hdGguYWJzKHkpID8geCAtIChoaSAtIHkpIDogeSAtIChoaSAtIHgpO1xuICAgICAgaWYgKGxvKSBwW2krK10gPSBsbztcbiAgICAgIHggPSBoaTtcbiAgICB9XG4gICAgcFtpXSA9IHg7XG4gICAgdGhpcy5fbiA9IGkgKyAxO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHZhbHVlT2YoKSB7XG4gICAgY29uc3QgcCA9IHRoaXMuX3BhcnRpYWxzO1xuICAgIGxldCBuID0gdGhpcy5fbiwgeCwgeSwgbG8sIGhpID0gMDtcbiAgICBpZiAobiA+IDApIHtcbiAgICAgIGhpID0gcFstLW5dO1xuICAgICAgd2hpbGUgKG4gPiAwKSB7XG4gICAgICAgIHggPSBoaTtcbiAgICAgICAgeSA9IHBbLS1uXTtcbiAgICAgICAgaGkgPSB4ICsgeTtcbiAgICAgICAgbG8gPSB5IC0gKGhpIC0geCk7XG4gICAgICAgIGlmIChsbykgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAobiA+IDAgJiYgKChsbyA8IDAgJiYgcFtuIC0gMV0gPCAwKSB8fCAobG8gPiAwICYmIHBbbiAtIDFdID4gMCkpKSB7XG4gICAgICAgIHkgPSBsbyAqIDI7XG4gICAgICAgIHggPSBoaSArIHk7XG4gICAgICAgIGlmICh5ID09IHggLSBoaSkgaGkgPSB4O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZzdW0odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGNvbnN0IGFkZGVyID0gbmV3IEFkZGVyKCk7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZSkge1xuICAgICAgICBhZGRlci5hZGQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSB7XG4gICAgICAgIGFkZGVyLmFkZCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiArYWRkZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmY3Vtc3VtKHZhbHVlcywgdmFsdWVvZikge1xuICBjb25zdCBhZGRlciA9IG5ldyBBZGRlcigpO1xuICBsZXQgaW5kZXggPSAtMTtcbiAgcmV0dXJuIEZsb2F0NjRBcnJheS5mcm9tKHZhbHVlcywgdmFsdWVvZiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHYgPT4gYWRkZXIuYWRkKCt2IHx8IDApXG4gICAgICA6IHYgPT4gYWRkZXIuYWRkKCt2YWx1ZW9mKHYsICsraW5kZXgsIHZhbHVlcykgfHwgMClcbiAgKTtcbn1cbiIsImNvbnN0IGUxMCA9IE1hdGguc3FydCg1MCksXG4gICAgZTUgPSBNYXRoLnNxcnQoMTApLFxuICAgIGUyID0gTWF0aC5zcXJ0KDIpO1xuXG5mdW5jdGlvbiB0aWNrU3BlYyhzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgY29uc3Qgc3RlcCA9IChzdG9wIC0gc3RhcnQpIC8gTWF0aC5tYXgoMCwgY291bnQpLFxuICAgICAgcG93ZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nMTAoc3RlcCkpLFxuICAgICAgZXJyb3IgPSBzdGVwIC8gTWF0aC5wb3coMTAsIHBvd2VyKSxcbiAgICAgIGZhY3RvciA9IGVycm9yID49IGUxMCA/IDEwIDogZXJyb3IgPj0gZTUgPyA1IDogZXJyb3IgPj0gZTIgPyAyIDogMTtcbiAgbGV0IGkxLCBpMiwgaW5jO1xuICBpZiAocG93ZXIgPCAwKSB7XG4gICAgaW5jID0gTWF0aC5wb3coMTAsIC1wb3dlcikgLyBmYWN0b3I7XG4gICAgaTEgPSBNYXRoLnJvdW5kKHN0YXJ0ICogaW5jKTtcbiAgICBpMiA9IE1hdGgucm91bmQoc3RvcCAqIGluYyk7XG4gICAgaWYgKGkxIC8gaW5jIDwgc3RhcnQpICsraTE7XG4gICAgaWYgKGkyIC8gaW5jID4gc3RvcCkgLS1pMjtcbiAgICBpbmMgPSAtaW5jO1xuICB9IGVsc2Uge1xuICAgIGluYyA9IE1hdGgucG93KDEwLCBwb3dlcikgKiBmYWN0b3I7XG4gICAgaTEgPSBNYXRoLnJvdW5kKHN0YXJ0IC8gaW5jKTtcbiAgICBpMiA9IE1hdGgucm91bmQoc3RvcCAvIGluYyk7XG4gICAgaWYgKGkxICogaW5jIDwgc3RhcnQpICsraTE7XG4gICAgaWYgKGkyICogaW5jID4gc3RvcCkgLS1pMjtcbiAgfVxuICBpZiAoaTIgPCBpMSAmJiAwLjUgPD0gY291bnQgJiYgY291bnQgPCAyKSByZXR1cm4gdGlja1NwZWMoc3RhcnQsIHN0b3AsIGNvdW50ICogMik7XG4gIHJldHVybiBbaTEsIGkyLCBpbmNdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aWNrcyhzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgc3RvcCA9ICtzdG9wLCBzdGFydCA9ICtzdGFydCwgY291bnQgPSArY291bnQ7XG4gIGlmICghKGNvdW50ID4gMCkpIHJldHVybiBbXTtcbiAgaWYgKHN0YXJ0ID09PSBzdG9wKSByZXR1cm4gW3N0YXJ0XTtcbiAgY29uc3QgcmV2ZXJzZSA9IHN0b3AgPCBzdGFydCwgW2kxLCBpMiwgaW5jXSA9IHJldmVyc2UgPyB0aWNrU3BlYyhzdG9wLCBzdGFydCwgY291bnQpIDogdGlja1NwZWMoc3RhcnQsIHN0b3AsIGNvdW50KTtcbiAgaWYgKCEoaTIgPj0gaTEpKSByZXR1cm4gW107XG4gIGNvbnN0IG4gPSBpMiAtIGkxICsgMSwgdGlja3MgPSBuZXcgQXJyYXkobik7XG4gIGlmIChyZXZlcnNlKSB7XG4gICAgaWYgKGluYyA8IDApIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB0aWNrc1tpXSA9IChpMiAtIGkpIC8gLWluYztcbiAgICBlbHNlIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB0aWNrc1tpXSA9IChpMiAtIGkpICogaW5jO1xuICB9IGVsc2Uge1xuICAgIGlmIChpbmMgPCAwKSBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgdGlja3NbaV0gPSAoaTEgKyBpKSAvIC1pbmM7XG4gICAgZWxzZSBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgdGlja3NbaV0gPSAoaTEgKyBpKSAqIGluYztcbiAgfVxuICByZXR1cm4gdGlja3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICBzdG9wID0gK3N0b3AsIHN0YXJ0ID0gK3N0YXJ0LCBjb3VudCA9ICtjb3VudDtcbiAgcmV0dXJuIHRpY2tTcGVjKHN0YXJ0LCBzdG9wLCBjb3VudClbMl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrU3RlcChzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgc3RvcCA9ICtzdG9wLCBzdGFydCA9ICtzdGFydCwgY291bnQgPSArY291bnQ7XG4gIGNvbnN0IHJldmVyc2UgPSBzdG9wIDwgc3RhcnQsIGluYyA9IHJldmVyc2UgPyB0aWNrSW5jcmVtZW50KHN0b3AsIHN0YXJ0LCBjb3VudCkgOiB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCk7XG4gIHJldHVybiAocmV2ZXJzZSA/IC0xIDogMSkgKiAoaW5jIDwgMCA/IDEgLyAtaW5jIDogaW5jKTtcbn1cbiIsImZ1bmN0aW9uKiBmbGF0dGVuKGFycmF5cykge1xuICBmb3IgKGNvbnN0IGFycmF5IG9mIGFycmF5cykge1xuICAgIHlpZWxkKiBhcnJheTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZShhcnJheXMpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZmxhdHRlbihhcnJheXMpKTtcbn1cbiIsImV4cG9ydCB2YXIgZXBzaWxvbiA9IDFlLTY7XG5leHBvcnQgdmFyIGVwc2lsb24yID0gMWUtMTI7XG5leHBvcnQgdmFyIHBpID0gTWF0aC5QSTtcbmV4cG9ydCB2YXIgaGFsZlBpID0gcGkgLyAyO1xuZXhwb3J0IHZhciBxdWFydGVyUGkgPSBwaSAvIDQ7XG5leHBvcnQgdmFyIHRhdSA9IHBpICogMjtcblxuZXhwb3J0IHZhciBkZWdyZWVzID0gMTgwIC8gcGk7XG5leHBvcnQgdmFyIHJhZGlhbnMgPSBwaSAvIDE4MDtcblxuZXhwb3J0IHZhciBhYnMgPSBNYXRoLmFicztcbmV4cG9ydCB2YXIgYXRhbiA9IE1hdGguYXRhbjtcbmV4cG9ydCB2YXIgYXRhbjIgPSBNYXRoLmF0YW4yO1xuZXhwb3J0IHZhciBjb3MgPSBNYXRoLmNvcztcbmV4cG9ydCB2YXIgY2VpbCA9IE1hdGguY2VpbDtcbmV4cG9ydCB2YXIgZXhwID0gTWF0aC5leHA7XG5leHBvcnQgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbmV4cG9ydCB2YXIgaHlwb3QgPSBNYXRoLmh5cG90O1xuZXhwb3J0IHZhciBsb2cgPSBNYXRoLmxvZztcbmV4cG9ydCB2YXIgcG93ID0gTWF0aC5wb3c7XG5leHBvcnQgdmFyIHNpbiA9IE1hdGguc2luO1xuZXhwb3J0IHZhciBzaWduID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHggPiAwID8gMSA6IHggPCAwID8gLTEgOiAwOyB9O1xuZXhwb3J0IHZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xuZXhwb3J0IHZhciB0YW4gPSBNYXRoLnRhbjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjb3MoeCkge1xuICByZXR1cm4geCA+IDEgPyAwIDogeCA8IC0xID8gcGkgOiBNYXRoLmFjb3MoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2luKHgpIHtcbiAgcmV0dXJuIHggPiAxID8gaGFsZlBpIDogeCA8IC0xID8gLWhhbGZQaSA6IE1hdGguYXNpbih4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhdmVyc2luKHgpIHtcbiAgcmV0dXJuICh4ID0gc2luKHggLyAyKSkgKiB4O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9vcCgpIHt9XG4iLCJmdW5jdGlvbiBzdHJlYW1HZW9tZXRyeShnZW9tZXRyeSwgc3RyZWFtKSB7XG4gIGlmIChnZW9tZXRyeSAmJiBzdHJlYW1HZW9tZXRyeVR5cGUuaGFzT3duUHJvcGVydHkoZ2VvbWV0cnkudHlwZSkpIHtcbiAgICBzdHJlYW1HZW9tZXRyeVR5cGVbZ2VvbWV0cnkudHlwZV0oZ2VvbWV0cnksIHN0cmVhbSk7XG4gIH1cbn1cblxudmFyIHN0cmVhbU9iamVjdFR5cGUgPSB7XG4gIEZlYXR1cmU6IGZ1bmN0aW9uKG9iamVjdCwgc3RyZWFtKSB7XG4gICAgc3RyZWFtR2VvbWV0cnkob2JqZWN0Lmdlb21ldHJ5LCBzdHJlYW0pO1xuICB9LFxuICBGZWF0dXJlQ29sbGVjdGlvbjogZnVuY3Rpb24ob2JqZWN0LCBzdHJlYW0pIHtcbiAgICB2YXIgZmVhdHVyZXMgPSBvYmplY3QuZmVhdHVyZXMsIGkgPSAtMSwgbiA9IGZlYXR1cmVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgc3RyZWFtR2VvbWV0cnkoZmVhdHVyZXNbaV0uZ2VvbWV0cnksIHN0cmVhbSk7XG4gIH1cbn07XG5cbnZhciBzdHJlYW1HZW9tZXRyeVR5cGUgPSB7XG4gIFNwaGVyZTogZnVuY3Rpb24ob2JqZWN0LCBzdHJlYW0pIHtcbiAgICBzdHJlYW0uc3BoZXJlKCk7XG4gIH0sXG4gIFBvaW50OiBmdW5jdGlvbihvYmplY3QsIHN0cmVhbSkge1xuICAgIG9iamVjdCA9IG9iamVjdC5jb29yZGluYXRlcztcbiAgICBzdHJlYW0ucG9pbnQob2JqZWN0WzBdLCBvYmplY3RbMV0sIG9iamVjdFsyXSk7XG4gIH0sXG4gIE11bHRpUG9pbnQ6IGZ1bmN0aW9uKG9iamVjdCwgc3RyZWFtKSB7XG4gICAgdmFyIGNvb3JkaW5hdGVzID0gb2JqZWN0LmNvb3JkaW5hdGVzLCBpID0gLTEsIG4gPSBjb29yZGluYXRlcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIG9iamVjdCA9IGNvb3JkaW5hdGVzW2ldLCBzdHJlYW0ucG9pbnQob2JqZWN0WzBdLCBvYmplY3RbMV0sIG9iamVjdFsyXSk7XG4gIH0sXG4gIExpbmVTdHJpbmc6IGZ1bmN0aW9uKG9iamVjdCwgc3RyZWFtKSB7XG4gICAgc3RyZWFtTGluZShvYmplY3QuY29vcmRpbmF0ZXMsIHN0cmVhbSwgMCk7XG4gIH0sXG4gIE11bHRpTGluZVN0cmluZzogZnVuY3Rpb24ob2JqZWN0LCBzdHJlYW0pIHtcbiAgICB2YXIgY29vcmRpbmF0ZXMgPSBvYmplY3QuY29vcmRpbmF0ZXMsIGkgPSAtMSwgbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgc3RyZWFtTGluZShjb29yZGluYXRlc1tpXSwgc3RyZWFtLCAwKTtcbiAgfSxcbiAgUG9seWdvbjogZnVuY3Rpb24ob2JqZWN0LCBzdHJlYW0pIHtcbiAgICBzdHJlYW1Qb2x5Z29uKG9iamVjdC5jb29yZGluYXRlcywgc3RyZWFtKTtcbiAgfSxcbiAgTXVsdGlQb2x5Z29uOiBmdW5jdGlvbihvYmplY3QsIHN0cmVhbSkge1xuICAgIHZhciBjb29yZGluYXRlcyA9IG9iamVjdC5jb29yZGluYXRlcywgaSA9IC0xLCBuID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBzdHJlYW1Qb2x5Z29uKGNvb3JkaW5hdGVzW2ldLCBzdHJlYW0pO1xuICB9LFxuICBHZW9tZXRyeUNvbGxlY3Rpb246IGZ1bmN0aW9uKG9iamVjdCwgc3RyZWFtKSB7XG4gICAgdmFyIGdlb21ldHJpZXMgPSBvYmplY3QuZ2VvbWV0cmllcywgaSA9IC0xLCBuID0gZ2VvbWV0cmllcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIHN0cmVhbUdlb21ldHJ5KGdlb21ldHJpZXNbaV0sIHN0cmVhbSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0cmVhbUxpbmUoY29vcmRpbmF0ZXMsIHN0cmVhbSwgY2xvc2VkKSB7XG4gIHZhciBpID0gLTEsIG4gPSBjb29yZGluYXRlcy5sZW5ndGggLSBjbG9zZWQsIGNvb3JkaW5hdGU7XG4gIHN0cmVhbS5saW5lU3RhcnQoKTtcbiAgd2hpbGUgKCsraSA8IG4pIGNvb3JkaW5hdGUgPSBjb29yZGluYXRlc1tpXSwgc3RyZWFtLnBvaW50KGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0sIGNvb3JkaW5hdGVbMl0pO1xuICBzdHJlYW0ubGluZUVuZCgpO1xufVxuXG5mdW5jdGlvbiBzdHJlYW1Qb2x5Z29uKGNvb3JkaW5hdGVzLCBzdHJlYW0pIHtcbiAgdmFyIGkgPSAtMSwgbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgc3RyZWFtLnBvbHlnb25TdGFydCgpO1xuICB3aGlsZSAoKytpIDwgbikgc3RyZWFtTGluZShjb29yZGluYXRlc1tpXSwgc3RyZWFtLCAxKTtcbiAgc3RyZWFtLnBvbHlnb25FbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqZWN0LCBzdHJlYW0pIHtcbiAgaWYgKG9iamVjdCAmJiBzdHJlYW1PYmplY3RUeXBlLmhhc093blByb3BlcnR5KG9iamVjdC50eXBlKSkge1xuICAgIHN0cmVhbU9iamVjdFR5cGVbb2JqZWN0LnR5cGVdKG9iamVjdCwgc3RyZWFtKTtcbiAgfSBlbHNlIHtcbiAgICBzdHJlYW1HZW9tZXRyeShvYmplY3QsIHN0cmVhbSk7XG4gIH1cbn1cbiIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbGluZXMgPSBbXSxcbiAgICAgIGxpbmU7XG4gIHJldHVybiB7XG4gICAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHksIG0pIHtcbiAgICAgIGxpbmUucHVzaChbeCwgeSwgbV0pO1xuICAgIH0sXG4gICAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIGxpbmVzLnB1c2gobGluZSA9IFtdKTtcbiAgICB9LFxuICAgIGxpbmVFbmQ6IG5vb3AsXG4gICAgcmVqb2luOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChsaW5lcy5sZW5ndGggPiAxKSBsaW5lcy5wdXNoKGxpbmVzLnBvcCgpLmNvbmNhdChsaW5lcy5zaGlmdCgpKSk7XG4gICAgfSxcbiAgICByZXN1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGxpbmVzO1xuICAgICAgbGluZXMgPSBbXTtcbiAgICAgIGxpbmUgPSBudWxsO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQge2FicywgZXBzaWxvbn0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhYnMoYVswXSAtIGJbMF0pIDwgZXBzaWxvbiAmJiBhYnMoYVsxXSAtIGJbMV0pIDwgZXBzaWxvbjtcbn1cbiIsImltcG9ydCBwb2ludEVxdWFsIGZyb20gXCIuLi9wb2ludEVxdWFsLmpzXCI7XG5pbXBvcnQge2Vwc2lsb259IGZyb20gXCIuLi9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIEludGVyc2VjdGlvbihwb2ludCwgcG9pbnRzLCBvdGhlciwgZW50cnkpIHtcbiAgdGhpcy54ID0gcG9pbnQ7XG4gIHRoaXMueiA9IHBvaW50cztcbiAgdGhpcy5vID0gb3RoZXI7IC8vIGFub3RoZXIgaW50ZXJzZWN0aW9uXG4gIHRoaXMuZSA9IGVudHJ5OyAvLyBpcyBhbiBlbnRyeT9cbiAgdGhpcy52ID0gZmFsc2U7IC8vIHZpc2l0ZWRcbiAgdGhpcy5uID0gdGhpcy5wID0gbnVsbDsgLy8gbmV4dCAmIHByZXZpb3VzXG59XG5cbi8vIEEgZ2VuZXJhbGl6ZWQgcG9seWdvbiBjbGlwcGluZyBhbGdvcml0aG06IGdpdmVuIGEgcG9seWdvbiB0aGF0IGhhcyBiZWVuIGN1dFxuLy8gaW50byBpdHMgdmlzaWJsZSBsaW5lIHNlZ21lbnRzLCBhbmQgcmVqb2lucyB0aGUgc2VnbWVudHMgYnkgaW50ZXJwb2xhdGluZ1xuLy8gYWxvbmcgdGhlIGNsaXAgZWRnZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlZ21lbnRzLCBjb21wYXJlSW50ZXJzZWN0aW9uLCBzdGFydEluc2lkZSwgaW50ZXJwb2xhdGUsIHN0cmVhbSkge1xuICB2YXIgc3ViamVjdCA9IFtdLFxuICAgICAgY2xpcCA9IFtdLFxuICAgICAgaSxcbiAgICAgIG47XG5cbiAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbihzZWdtZW50KSB7XG4gICAgaWYgKChuID0gc2VnbWVudC5sZW5ndGggLSAxKSA8PSAwKSByZXR1cm47XG4gICAgdmFyIG4sIHAwID0gc2VnbWVudFswXSwgcDEgPSBzZWdtZW50W25dLCB4O1xuXG4gICAgaWYgKHBvaW50RXF1YWwocDAsIHAxKSkge1xuICAgICAgaWYgKCFwMFsyXSAmJiAhcDFbMl0pIHtcbiAgICAgICAgc3RyZWFtLmxpbmVTdGFydCgpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBzdHJlYW0ucG9pbnQoKHAwID0gc2VnbWVudFtpXSlbMF0sIHAwWzFdKTtcbiAgICAgICAgc3RyZWFtLmxpbmVFbmQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaGFuZGxlIGRlZ2VuZXJhdGUgY2FzZXMgYnkgbW92aW5nIHRoZSBwb2ludFxuICAgICAgcDFbMF0gKz0gMiAqIGVwc2lsb247XG4gICAgfVxuXG4gICAgc3ViamVjdC5wdXNoKHggPSBuZXcgSW50ZXJzZWN0aW9uKHAwLCBzZWdtZW50LCBudWxsLCB0cnVlKSk7XG4gICAgY2xpcC5wdXNoKHgubyA9IG5ldyBJbnRlcnNlY3Rpb24ocDAsIG51bGwsIHgsIGZhbHNlKSk7XG4gICAgc3ViamVjdC5wdXNoKHggPSBuZXcgSW50ZXJzZWN0aW9uKHAxLCBzZWdtZW50LCBudWxsLCBmYWxzZSkpO1xuICAgIGNsaXAucHVzaCh4Lm8gPSBuZXcgSW50ZXJzZWN0aW9uKHAxLCBudWxsLCB4LCB0cnVlKSk7XG4gIH0pO1xuXG4gIGlmICghc3ViamVjdC5sZW5ndGgpIHJldHVybjtcblxuICBjbGlwLnNvcnQoY29tcGFyZUludGVyc2VjdGlvbik7XG4gIGxpbmsoc3ViamVjdCk7XG4gIGxpbmsoY2xpcCk7XG5cbiAgZm9yIChpID0gMCwgbiA9IGNsaXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgY2xpcFtpXS5lID0gc3RhcnRJbnNpZGUgPSAhc3RhcnRJbnNpZGU7XG4gIH1cblxuICB2YXIgc3RhcnQgPSBzdWJqZWN0WzBdLFxuICAgICAgcG9pbnRzLFxuICAgICAgcG9pbnQ7XG5cbiAgd2hpbGUgKDEpIHtcbiAgICAvLyBGaW5kIGZpcnN0IHVudmlzaXRlZCBpbnRlcnNlY3Rpb24uXG4gICAgdmFyIGN1cnJlbnQgPSBzdGFydCxcbiAgICAgICAgaXNTdWJqZWN0ID0gdHJ1ZTtcbiAgICB3aGlsZSAoY3VycmVudC52KSBpZiAoKGN1cnJlbnQgPSBjdXJyZW50Lm4pID09PSBzdGFydCkgcmV0dXJuO1xuICAgIHBvaW50cyA9IGN1cnJlbnQuejtcbiAgICBzdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgZG8ge1xuICAgICAgY3VycmVudC52ID0gY3VycmVudC5vLnYgPSB0cnVlO1xuICAgICAgaWYgKGN1cnJlbnQuZSkge1xuICAgICAgICBpZiAoaXNTdWJqZWN0KSB7XG4gICAgICAgICAgZm9yIChpID0gMCwgbiA9IHBvaW50cy5sZW5ndGg7IGkgPCBuOyArK2kpIHN0cmVhbS5wb2ludCgocG9pbnQgPSBwb2ludHNbaV0pWzBdLCBwb2ludFsxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY3VycmVudC54LCBjdXJyZW50Lm4ueCwgMSwgc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzU3ViamVjdCkge1xuICAgICAgICAgIHBvaW50cyA9IGN1cnJlbnQucC56O1xuICAgICAgICAgIGZvciAoaSA9IHBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgc3RyZWFtLnBvaW50KChwb2ludCA9IHBvaW50c1tpXSlbMF0sIHBvaW50WzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjdXJyZW50LngsIGN1cnJlbnQucC54LCAtMSwgc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubztcbiAgICAgIHBvaW50cyA9IGN1cnJlbnQuejtcbiAgICAgIGlzU3ViamVjdCA9ICFpc1N1YmplY3Q7XG4gICAgfSB3aGlsZSAoIWN1cnJlbnQudik7XG4gICAgc3RyZWFtLmxpbmVFbmQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5rKGFycmF5KSB7XG4gIGlmICghKG4gPSBhcnJheS5sZW5ndGgpKSByZXR1cm47XG4gIHZhciBuLFxuICAgICAgaSA9IDAsXG4gICAgICBhID0gYXJyYXlbMF0sXG4gICAgICBiO1xuICB3aGlsZSAoKytpIDwgbikge1xuICAgIGEubiA9IGIgPSBhcnJheVtpXTtcbiAgICBiLnAgPSBhO1xuICAgIGEgPSBiO1xuICB9XG4gIGEubiA9IGIgPSBhcnJheVswXTtcbiAgYi5wID0gYTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICB0MCA9IDAsXG4gICAgICB0MSA9IDEsXG4gICAgICBkeCA9IGJ4IC0gYXgsXG4gICAgICBkeSA9IGJ5IC0gYXksXG4gICAgICByO1xuXG4gIHIgPSB4MCAtIGF4O1xuICBpZiAoIWR4ICYmIHIgPiAwKSByZXR1cm47XG4gIHIgLz0gZHg7XG4gIGlmIChkeCA8IDApIHtcbiAgICBpZiAociA8IHQwKSByZXR1cm47XG4gICAgaWYgKHIgPCB0MSkgdDEgPSByO1xuICB9IGVsc2UgaWYgKGR4ID4gMCkge1xuICAgIGlmIChyID4gdDEpIHJldHVybjtcbiAgICBpZiAociA+IHQwKSB0MCA9IHI7XG4gIH1cblxuICByID0geDEgLSBheDtcbiAgaWYgKCFkeCAmJiByIDwgMCkgcmV0dXJuO1xuICByIC89IGR4O1xuICBpZiAoZHggPCAwKSB7XG4gICAgaWYgKHIgPiB0MSkgcmV0dXJuO1xuICAgIGlmIChyID4gdDApIHQwID0gcjtcbiAgfSBlbHNlIGlmIChkeCA+IDApIHtcbiAgICBpZiAociA8IHQwKSByZXR1cm47XG4gICAgaWYgKHIgPCB0MSkgdDEgPSByO1xuICB9XG5cbiAgciA9IHkwIC0gYXk7XG4gIGlmICghZHkgJiYgciA+IDApIHJldHVybjtcbiAgciAvPSBkeTtcbiAgaWYgKGR5IDwgMCkge1xuICAgIGlmIChyIDwgdDApIHJldHVybjtcbiAgICBpZiAociA8IHQxKSB0MSA9IHI7XG4gIH0gZWxzZSBpZiAoZHkgPiAwKSB7XG4gICAgaWYgKHIgPiB0MSkgcmV0dXJuO1xuICAgIGlmIChyID4gdDApIHQwID0gcjtcbiAgfVxuXG4gIHIgPSB5MSAtIGF5O1xuICBpZiAoIWR5ICYmIHIgPCAwKSByZXR1cm47XG4gIHIgLz0gZHk7XG4gIGlmIChkeSA8IDApIHtcbiAgICBpZiAociA+IHQxKSByZXR1cm47XG4gICAgaWYgKHIgPiB0MCkgdDAgPSByO1xuICB9IGVsc2UgaWYgKGR5ID4gMCkge1xuICAgIGlmIChyIDwgdDApIHJldHVybjtcbiAgICBpZiAociA8IHQxKSB0MSA9IHI7XG4gIH1cblxuICBpZiAodDAgPiAwKSBhWzBdID0gYXggKyB0MCAqIGR4LCBhWzFdID0gYXkgKyB0MCAqIGR5O1xuICBpZiAodDEgPCAxKSBiWzBdID0gYXggKyB0MSAqIGR4LCBiWzFdID0gYXkgKyB0MSAqIGR5O1xuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7YWJzLCBlcHNpbG9ufSBmcm9tIFwiLi4vbWF0aC5qc1wiO1xuaW1wb3J0IGNsaXBCdWZmZXIgZnJvbSBcIi4vYnVmZmVyLmpzXCI7XG5pbXBvcnQgY2xpcExpbmUgZnJvbSBcIi4vbGluZS5qc1wiO1xuaW1wb3J0IGNsaXBSZWpvaW4gZnJvbSBcIi4vcmVqb2luLmpzXCI7XG5pbXBvcnQge21lcmdlfSBmcm9tIFwiZDMtYXJyYXlcIjtcblxudmFyIGNsaXBNYXggPSAxZTksIGNsaXBNaW4gPSAtY2xpcE1heDtcblxuLy8gVE9ETyBVc2UgZDMtcG9seWdvbuKAmXMgcG9seWdvbkNvbnRhaW5zIGhlcmUgZm9yIHRoZSByaW5nIGNoZWNrP1xuLy8gVE9ETyBFbGltaW5hdGUgZHVwbGljYXRlIGJ1ZmZlcmluZyBpbiBjbGlwQnVmZmVyIGFuZCBwb2x5Z29uLnB1c2g/XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsaXBSZWN0YW5nbGUoeDAsIHkwLCB4MSwgeTEpIHtcblxuICBmdW5jdGlvbiB2aXNpYmxlKHgsIHkpIHtcbiAgICByZXR1cm4geDAgPD0geCAmJiB4IDw9IHgxICYmIHkwIDw9IHkgJiYgeSA8PSB5MTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludGVycG9sYXRlKGZyb20sIHRvLCBkaXJlY3Rpb24sIHN0cmVhbSkge1xuICAgIHZhciBhID0gMCwgYTEgPSAwO1xuICAgIGlmIChmcm9tID09IG51bGxcbiAgICAgICAgfHwgKGEgPSBjb3JuZXIoZnJvbSwgZGlyZWN0aW9uKSkgIT09IChhMSA9IGNvcm5lcih0bywgZGlyZWN0aW9uKSlcbiAgICAgICAgfHwgY29tcGFyZVBvaW50KGZyb20sIHRvKSA8IDAgXiBkaXJlY3Rpb24gPiAwKSB7XG4gICAgICBkbyBzdHJlYW0ucG9pbnQoYSA9PT0gMCB8fCBhID09PSAzID8geDAgOiB4MSwgYSA+IDEgPyB5MSA6IHkwKTtcbiAgICAgIHdoaWxlICgoYSA9IChhICsgZGlyZWN0aW9uICsgNCkgJSA0KSAhPT0gYTEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJlYW0ucG9pbnQodG9bMF0sIHRvWzFdKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb3JuZXIocCwgZGlyZWN0aW9uKSB7XG4gICAgcmV0dXJuIGFicyhwWzBdIC0geDApIDwgZXBzaWxvbiA/IGRpcmVjdGlvbiA+IDAgPyAwIDogM1xuICAgICAgICA6IGFicyhwWzBdIC0geDEpIDwgZXBzaWxvbiA/IGRpcmVjdGlvbiA+IDAgPyAyIDogMVxuICAgICAgICA6IGFicyhwWzFdIC0geTApIDwgZXBzaWxvbiA/IGRpcmVjdGlvbiA+IDAgPyAxIDogMFxuICAgICAgICA6IGRpcmVjdGlvbiA+IDAgPyAzIDogMjsgLy8gYWJzKHBbMV0gLSB5MSkgPCBlcHNpbG9uXG4gIH1cblxuICBmdW5jdGlvbiBjb21wYXJlSW50ZXJzZWN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZVBvaW50KGEueCwgYi54KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhcmVQb2ludChhLCBiKSB7XG4gICAgdmFyIGNhID0gY29ybmVyKGEsIDEpLFxuICAgICAgICBjYiA9IGNvcm5lcihiLCAxKTtcbiAgICByZXR1cm4gY2EgIT09IGNiID8gY2EgLSBjYlxuICAgICAgICA6IGNhID09PSAwID8gYlsxXSAtIGFbMV1cbiAgICAgICAgOiBjYSA9PT0gMSA/IGFbMF0gLSBiWzBdXG4gICAgICAgIDogY2EgPT09IDIgPyBhWzFdIC0gYlsxXVxuICAgICAgICA6IGJbMF0gLSBhWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIHZhciBhY3RpdmVTdHJlYW0gPSBzdHJlYW0sXG4gICAgICAgIGJ1ZmZlclN0cmVhbSA9IGNsaXBCdWZmZXIoKSxcbiAgICAgICAgc2VnbWVudHMsXG4gICAgICAgIHBvbHlnb24sXG4gICAgICAgIHJpbmcsXG4gICAgICAgIHhfXywgeV9fLCB2X18sIC8vIGZpcnN0IHBvaW50XG4gICAgICAgIHhfLCB5Xywgdl8sIC8vIHByZXZpb3VzIHBvaW50XG4gICAgICAgIGZpcnN0LFxuICAgICAgICBjbGVhbjtcblxuICAgIHZhciBjbGlwU3RyZWFtID0ge1xuICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgbGluZVN0YXJ0OiBsaW5lU3RhcnQsXG4gICAgICBsaW5lRW5kOiBsaW5lRW5kLFxuICAgICAgcG9seWdvblN0YXJ0OiBwb2x5Z29uU3RhcnQsXG4gICAgICBwb2x5Z29uRW5kOiBwb2x5Z29uRW5kXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBvaW50KHgsIHkpIHtcbiAgICAgIGlmICh2aXNpYmxlKHgsIHkpKSBhY3RpdmVTdHJlYW0ucG9pbnQoeCwgeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9seWdvbkluc2lkZSgpIHtcbiAgICAgIHZhciB3aW5kaW5nID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSBwb2x5Z29uLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBmb3IgKHZhciByaW5nID0gcG9seWdvbltpXSwgaiA9IDEsIG0gPSByaW5nLmxlbmd0aCwgcG9pbnQgPSByaW5nWzBdLCBhMCwgYTEsIGIwID0gcG9pbnRbMF0sIGIxID0gcG9pbnRbMV07IGogPCBtOyArK2opIHtcbiAgICAgICAgICBhMCA9IGIwLCBhMSA9IGIxLCBwb2ludCA9IHJpbmdbal0sIGIwID0gcG9pbnRbMF0sIGIxID0gcG9pbnRbMV07XG4gICAgICAgICAgaWYgKGExIDw9IHkxKSB7IGlmIChiMSA+IHkxICYmIChiMCAtIGEwKSAqICh5MSAtIGExKSA+IChiMSAtIGExKSAqICh4MCAtIGEwKSkgKyt3aW5kaW5nOyB9XG4gICAgICAgICAgZWxzZSB7IGlmIChiMSA8PSB5MSAmJiAoYjAgLSBhMCkgKiAoeTEgLSBhMSkgPCAoYjEgLSBhMSkgKiAoeDAgLSBhMCkpIC0td2luZGluZzsgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3aW5kaW5nO1xuICAgIH1cblxuICAgIC8vIEJ1ZmZlciBnZW9tZXRyeSB3aXRoaW4gYSBwb2x5Z29uIGFuZCB0aGVuIGNsaXAgaXQgZW4gbWFzc2UuXG4gICAgZnVuY3Rpb24gcG9seWdvblN0YXJ0KCkge1xuICAgICAgYWN0aXZlU3RyZWFtID0gYnVmZmVyU3RyZWFtLCBzZWdtZW50cyA9IFtdLCBwb2x5Z29uID0gW10sIGNsZWFuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb2x5Z29uRW5kKCkge1xuICAgICAgdmFyIHN0YXJ0SW5zaWRlID0gcG9seWdvbkluc2lkZSgpLFxuICAgICAgICAgIGNsZWFuSW5zaWRlID0gY2xlYW4gJiYgc3RhcnRJbnNpZGUsXG4gICAgICAgICAgdmlzaWJsZSA9IChzZWdtZW50cyA9IG1lcmdlKHNlZ21lbnRzKSkubGVuZ3RoO1xuICAgICAgaWYgKGNsZWFuSW5zaWRlIHx8IHZpc2libGUpIHtcbiAgICAgICAgc3RyZWFtLnBvbHlnb25TdGFydCgpO1xuICAgICAgICBpZiAoY2xlYW5JbnNpZGUpIHtcbiAgICAgICAgICBzdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUobnVsbCwgbnVsbCwgMSwgc3RyZWFtKTtcbiAgICAgICAgICBzdHJlYW0ubGluZUVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgY2xpcFJlam9pbihzZWdtZW50cywgY29tcGFyZUludGVyc2VjdGlvbiwgc3RhcnRJbnNpZGUsIGludGVycG9sYXRlLCBzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHN0cmVhbS5wb2x5Z29uRW5kKCk7XG4gICAgICB9XG4gICAgICBhY3RpdmVTdHJlYW0gPSBzdHJlYW0sIHNlZ21lbnRzID0gcG9seWdvbiA9IHJpbmcgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmVTdGFydCgpIHtcbiAgICAgIGNsaXBTdHJlYW0ucG9pbnQgPSBsaW5lUG9pbnQ7XG4gICAgICBpZiAocG9seWdvbikgcG9seWdvbi5wdXNoKHJpbmcgPSBbXSk7XG4gICAgICBmaXJzdCA9IHRydWU7XG4gICAgICB2XyA9IGZhbHNlO1xuICAgICAgeF8gPSB5XyA9IE5hTjtcbiAgICB9XG5cbiAgICAvLyBUT0RPIHJhdGhlciB0aGFuIHNwZWNpYWwtY2FzZSBwb2x5Z29ucywgc2ltcGx5IGhhbmRsZSB0aGVtIHNlcGFyYXRlbHkuXG4gICAgLy8gSWRlYWxseSwgY29pbmNpZGVudCBpbnRlcnNlY3Rpb24gcG9pbnRzIHNob3VsZCBiZSBqaXR0ZXJlZCB0byBhdm9pZFxuICAgIC8vIGNsaXBwaW5nIGlzc3Vlcy5cbiAgICBmdW5jdGlvbiBsaW5lRW5kKCkge1xuICAgICAgaWYgKHNlZ21lbnRzKSB7XG4gICAgICAgIGxpbmVQb2ludCh4X18sIHlfXyk7XG4gICAgICAgIGlmICh2X18gJiYgdl8pIGJ1ZmZlclN0cmVhbS5yZWpvaW4oKTtcbiAgICAgICAgc2VnbWVudHMucHVzaChidWZmZXJTdHJlYW0ucmVzdWx0KCkpO1xuICAgICAgfVxuICAgICAgY2xpcFN0cmVhbS5wb2ludCA9IHBvaW50O1xuICAgICAgaWYgKHZfKSBhY3RpdmVTdHJlYW0ubGluZUVuZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmVQb2ludCh4LCB5KSB7XG4gICAgICB2YXIgdiA9IHZpc2libGUoeCwgeSk7XG4gICAgICBpZiAocG9seWdvbikgcmluZy5wdXNoKFt4LCB5XSk7XG4gICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgeF9fID0geCwgeV9fID0geSwgdl9fID0gdjtcbiAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICBhY3RpdmVTdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgICAgYWN0aXZlU3RyZWFtLnBvaW50KHgsIHkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodiAmJiB2XykgYWN0aXZlU3RyZWFtLnBvaW50KHgsIHkpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYSA9IFt4XyA9IE1hdGgubWF4KGNsaXBNaW4sIE1hdGgubWluKGNsaXBNYXgsIHhfKSksIHlfID0gTWF0aC5tYXgoY2xpcE1pbiwgTWF0aC5taW4oY2xpcE1heCwgeV8pKV0sXG4gICAgICAgICAgICAgIGIgPSBbeCA9IE1hdGgubWF4KGNsaXBNaW4sIE1hdGgubWluKGNsaXBNYXgsIHgpKSwgeSA9IE1hdGgubWF4KGNsaXBNaW4sIE1hdGgubWluKGNsaXBNYXgsIHkpKV07XG4gICAgICAgICAgaWYgKGNsaXBMaW5lKGEsIGIsIHgwLCB5MCwgeDEsIHkxKSkge1xuICAgICAgICAgICAgaWYgKCF2Xykge1xuICAgICAgICAgICAgICBhY3RpdmVTdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgICAgICAgIGFjdGl2ZVN0cmVhbS5wb2ludChhWzBdLCBhWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZVN0cmVhbS5wb2ludChiWzBdLCBiWzFdKTtcbiAgICAgICAgICAgIGlmICghdikgYWN0aXZlU3RyZWFtLmxpbmVFbmQoKTtcbiAgICAgICAgICAgIGNsZWFuID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmICh2KSB7XG4gICAgICAgICAgICBhY3RpdmVTdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgICAgICBhY3RpdmVTdHJlYW0ucG9pbnQoeCwgeSk7XG4gICAgICAgICAgICBjbGVhbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeF8gPSB4LCB5XyA9IHksIHZfID0gdjtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xpcFN0cmVhbTtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHggPT4geDtcbiIsImltcG9ydCB7QWRkZXJ9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHthYnN9IGZyb20gXCIuLi9tYXRoLmpzXCI7XG5pbXBvcnQgbm9vcCBmcm9tIFwiLi4vbm9vcC5qc1wiO1xuXG52YXIgYXJlYVN1bSA9IG5ldyBBZGRlcigpLFxuICAgIGFyZWFSaW5nU3VtID0gbmV3IEFkZGVyKCksXG4gICAgeDAwLFxuICAgIHkwMCxcbiAgICB4MCxcbiAgICB5MDtcblxudmFyIGFyZWFTdHJlYW0gPSB7XG4gIHBvaW50OiBub29wLFxuICBsaW5lU3RhcnQ6IG5vb3AsXG4gIGxpbmVFbmQ6IG5vb3AsXG4gIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgYXJlYVN0cmVhbS5saW5lU3RhcnQgPSBhcmVhUmluZ1N0YXJ0O1xuICAgIGFyZWFTdHJlYW0ubGluZUVuZCA9IGFyZWFSaW5nRW5kO1xuICB9LFxuICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICBhcmVhU3RyZWFtLmxpbmVTdGFydCA9IGFyZWFTdHJlYW0ubGluZUVuZCA9IGFyZWFTdHJlYW0ucG9pbnQgPSBub29wO1xuICAgIGFyZWFTdW0uYWRkKGFicyhhcmVhUmluZ1N1bSkpO1xuICAgIGFyZWFSaW5nU3VtID0gbmV3IEFkZGVyKCk7XG4gIH0sXG4gIHJlc3VsdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZWEgPSBhcmVhU3VtIC8gMjtcbiAgICBhcmVhU3VtID0gbmV3IEFkZGVyKCk7XG4gICAgcmV0dXJuIGFyZWE7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFyZWFSaW5nU3RhcnQoKSB7XG4gIGFyZWFTdHJlYW0ucG9pbnQgPSBhcmVhUG9pbnRGaXJzdDtcbn1cblxuZnVuY3Rpb24gYXJlYVBvaW50Rmlyc3QoeCwgeSkge1xuICBhcmVhU3RyZWFtLnBvaW50ID0gYXJlYVBvaW50O1xuICB4MDAgPSB4MCA9IHgsIHkwMCA9IHkwID0geTtcbn1cblxuZnVuY3Rpb24gYXJlYVBvaW50KHgsIHkpIHtcbiAgYXJlYVJpbmdTdW0uYWRkKHkwICogeCAtIHgwICogeSk7XG4gIHgwID0geCwgeTAgPSB5O1xufVxuXG5mdW5jdGlvbiBhcmVhUmluZ0VuZCgpIHtcbiAgYXJlYVBvaW50KHgwMCwgeTAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJlYVN0cmVhbTtcbiIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wLmpzXCI7XG5cbnZhciB4MCA9IEluZmluaXR5LFxuICAgIHkwID0geDAsXG4gICAgeDEgPSAteDAsXG4gICAgeTEgPSB4MTtcblxudmFyIGJvdW5kc1N0cmVhbSA9IHtcbiAgcG9pbnQ6IGJvdW5kc1BvaW50LFxuICBsaW5lU3RhcnQ6IG5vb3AsXG4gIGxpbmVFbmQ6IG5vb3AsXG4gIHBvbHlnb25TdGFydDogbm9vcCxcbiAgcG9seWdvbkVuZDogbm9vcCxcbiAgcmVzdWx0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYm91bmRzID0gW1t4MCwgeTBdLCBbeDEsIHkxXV07XG4gICAgeDEgPSB5MSA9IC0oeTAgPSB4MCA9IEluZmluaXR5KTtcbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59O1xuXG5mdW5jdGlvbiBib3VuZHNQb2ludCh4LCB5KSB7XG4gIGlmICh4IDwgeDApIHgwID0geDtcbiAgaWYgKHggPiB4MSkgeDEgPSB4O1xuICBpZiAoeSA8IHkwKSB5MCA9IHk7XG4gIGlmICh5ID4geTEpIHkxID0geTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYm91bmRzU3RyZWFtO1xuIiwiaW1wb3J0IHtzcXJ0fSBmcm9tIFwiLi4vbWF0aC5qc1wiO1xuXG4vLyBUT0RPIEVuZm9yY2UgcG9zaXRpdmUgYXJlYSBmb3IgZXh0ZXJpb3IsIG5lZ2F0aXZlIGFyZWEgZm9yIGludGVyaW9yP1xuXG52YXIgWDAgPSAwLFxuICAgIFkwID0gMCxcbiAgICBaMCA9IDAsXG4gICAgWDEgPSAwLFxuICAgIFkxID0gMCxcbiAgICBaMSA9IDAsXG4gICAgWDIgPSAwLFxuICAgIFkyID0gMCxcbiAgICBaMiA9IDAsXG4gICAgeDAwLFxuICAgIHkwMCxcbiAgICB4MCxcbiAgICB5MDtcblxudmFyIGNlbnRyb2lkU3RyZWFtID0ge1xuICBwb2ludDogY2VudHJvaWRQb2ludCxcbiAgbGluZVN0YXJ0OiBjZW50cm9pZExpbmVTdGFydCxcbiAgbGluZUVuZDogY2VudHJvaWRMaW5lRW5kLFxuICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNlbnRyb2lkU3RyZWFtLmxpbmVTdGFydCA9IGNlbnRyb2lkUmluZ1N0YXJ0O1xuICAgIGNlbnRyb2lkU3RyZWFtLmxpbmVFbmQgPSBjZW50cm9pZFJpbmdFbmQ7XG4gIH0sXG4gIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRQb2ludDtcbiAgICBjZW50cm9pZFN0cmVhbS5saW5lU3RhcnQgPSBjZW50cm9pZExpbmVTdGFydDtcbiAgICBjZW50cm9pZFN0cmVhbS5saW5lRW5kID0gY2VudHJvaWRMaW5lRW5kO1xuICB9LFxuICByZXN1bHQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjZW50cm9pZCA9IFoyID8gW1gyIC8gWjIsIFkyIC8gWjJdXG4gICAgICAgIDogWjEgPyBbWDEgLyBaMSwgWTEgLyBaMV1cbiAgICAgICAgOiBaMCA/IFtYMCAvIFowLCBZMCAvIFowXVxuICAgICAgICA6IFtOYU4sIE5hTl07XG4gICAgWDAgPSBZMCA9IFowID1cbiAgICBYMSA9IFkxID0gWjEgPVxuICAgIFgyID0gWTIgPSBaMiA9IDA7XG4gICAgcmV0dXJuIGNlbnRyb2lkO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjZW50cm9pZFBvaW50KHgsIHkpIHtcbiAgWDAgKz0geDtcbiAgWTAgKz0geTtcbiAgKytaMDtcbn1cblxuZnVuY3Rpb24gY2VudHJvaWRMaW5lU3RhcnQoKSB7XG4gIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRQb2ludEZpcnN0TGluZTtcbn1cblxuZnVuY3Rpb24gY2VudHJvaWRQb2ludEZpcnN0TGluZSh4LCB5KSB7XG4gIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRQb2ludExpbmU7XG4gIGNlbnRyb2lkUG9pbnQoeDAgPSB4LCB5MCA9IHkpO1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFBvaW50TGluZSh4LCB5KSB7XG4gIHZhciBkeCA9IHggLSB4MCwgZHkgPSB5IC0geTAsIHogPSBzcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgWDEgKz0geiAqICh4MCArIHgpIC8gMjtcbiAgWTEgKz0geiAqICh5MCArIHkpIC8gMjtcbiAgWjEgKz0gejtcbiAgY2VudHJvaWRQb2ludCh4MCA9IHgsIHkwID0geSk7XG59XG5cbmZ1bmN0aW9uIGNlbnRyb2lkTGluZUVuZCgpIHtcbiAgY2VudHJvaWRTdHJlYW0ucG9pbnQgPSBjZW50cm9pZFBvaW50O1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFJpbmdTdGFydCgpIHtcbiAgY2VudHJvaWRTdHJlYW0ucG9pbnQgPSBjZW50cm9pZFBvaW50Rmlyc3RSaW5nO1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFJpbmdFbmQoKSB7XG4gIGNlbnRyb2lkUG9pbnRSaW5nKHgwMCwgeTAwKTtcbn1cblxuZnVuY3Rpb24gY2VudHJvaWRQb2ludEZpcnN0UmluZyh4LCB5KSB7XG4gIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRQb2ludFJpbmc7XG4gIGNlbnRyb2lkUG9pbnQoeDAwID0geDAgPSB4LCB5MDAgPSB5MCA9IHkpO1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFBvaW50UmluZyh4LCB5KSB7XG4gIHZhciBkeCA9IHggLSB4MCxcbiAgICAgIGR5ID0geSAtIHkwLFxuICAgICAgeiA9IHNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gIFgxICs9IHogKiAoeDAgKyB4KSAvIDI7XG4gIFkxICs9IHogKiAoeTAgKyB5KSAvIDI7XG4gIFoxICs9IHo7XG5cbiAgeiA9IHkwICogeCAtIHgwICogeTtcbiAgWDIgKz0geiAqICh4MCArIHgpO1xuICBZMiArPSB6ICogKHkwICsgeSk7XG4gIFoyICs9IHogKiAzO1xuICBjZW50cm9pZFBvaW50KHgwID0geCwgeTAgPSB5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2VudHJvaWRTdHJlYW07XG4iLCJpbXBvcnQge3RhdX0gZnJvbSBcIi4uL21hdGguanNcIjtcbmltcG9ydCBub29wIGZyb20gXCIuLi9ub29wLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdGhDb250ZXh0KGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cblBhdGhDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgX3JhZGl1czogNC41LFxuICBwb2ludFJhZGl1czogZnVuY3Rpb24oXykge1xuICAgIHJldHVybiB0aGlzLl9yYWRpdXMgPSBfLCB0aGlzO1xuICB9LFxuICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgPT09IDApIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fcG9pbnQgPSBOYU47XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpO1xuICAgICAgICB0aGlzLl9wb2ludCA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8oeCArIHRoaXMuX3JhZGl1cywgeSk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuYXJjKHgsIHksIHRoaXMuX3JhZGl1cywgMCwgdGF1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXN1bHQ6IG5vb3Bcbn07XG4iLCJpbXBvcnQge0FkZGVyfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7c3FydH0gZnJvbSBcIi4uL21hdGguanNcIjtcbmltcG9ydCBub29wIGZyb20gXCIuLi9ub29wLmpzXCI7XG5cbnZhciBsZW5ndGhTdW0gPSBuZXcgQWRkZXIoKSxcbiAgICBsZW5ndGhSaW5nLFxuICAgIHgwMCxcbiAgICB5MDAsXG4gICAgeDAsXG4gICAgeTA7XG5cbnZhciBsZW5ndGhTdHJlYW0gPSB7XG4gIHBvaW50OiBub29wLFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIGxlbmd0aFN0cmVhbS5wb2ludCA9IGxlbmd0aFBvaW50Rmlyc3Q7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmIChsZW5ndGhSaW5nKSBsZW5ndGhQb2ludCh4MDAsIHkwMCk7XG4gICAgbGVuZ3RoU3RyZWFtLnBvaW50ID0gbm9vcDtcbiAgfSxcbiAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICBsZW5ndGhSaW5nID0gdHJ1ZTtcbiAgfSxcbiAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgbGVuZ3RoUmluZyA9IG51bGw7XG4gIH0sXG4gIHJlc3VsdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9ICtsZW5ndGhTdW07XG4gICAgbGVuZ3RoU3VtID0gbmV3IEFkZGVyKCk7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxufTtcblxuZnVuY3Rpb24gbGVuZ3RoUG9pbnRGaXJzdCh4LCB5KSB7XG4gIGxlbmd0aFN0cmVhbS5wb2ludCA9IGxlbmd0aFBvaW50O1xuICB4MDAgPSB4MCA9IHgsIHkwMCA9IHkwID0geTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoUG9pbnQoeCwgeSkge1xuICB4MCAtPSB4LCB5MCAtPSB5O1xuICBsZW5ndGhTdW0uYWRkKHNxcnQoeDAgKiB4MCArIHkwICogeTApKTtcbiAgeDAgPSB4LCB5MCA9IHk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxlbmd0aFN0cmVhbTtcbiIsIi8vIFNpbXBsZSBjYWNoaW5nIGZvciBjb25zdGFudC1yYWRpdXMgcG9pbnRzLlxubGV0IGNhY2hlRGlnaXRzLCBjYWNoZUFwcGVuZCwgY2FjaGVSYWRpdXMsIGNhY2hlQ2lyY2xlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoU3RyaW5nIHtcbiAgY29uc3RydWN0b3IoZGlnaXRzKSB7XG4gICAgdGhpcy5fYXBwZW5kID0gZGlnaXRzID09IG51bGwgPyBhcHBlbmQgOiBhcHBlbmRSb3VuZChkaWdpdHMpO1xuICAgIHRoaXMuX3JhZGl1cyA9IDQuNTtcbiAgICB0aGlzLl8gPSBcIlwiO1xuICB9XG4gIHBvaW50UmFkaXVzKF8pIHtcbiAgICB0aGlzLl9yYWRpdXMgPSArXztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBwb2x5Z29uU3RhcnQoKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH1cbiAgcG9seWdvbkVuZCgpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9XG4gIGxpbmVTdGFydCgpIHtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH1cbiAgbGluZUVuZCgpIHtcbiAgICBpZiAodGhpcy5fbGluZSA9PT0gMCkgdGhpcy5fICs9IFwiWlwiO1xuICAgIHRoaXMuX3BvaW50ID0gTmFOO1xuICB9XG4gIHBvaW50KHgsIHkpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgdGhpcy5fYXBwZW5kYE0ke3h9LCR7eX1gO1xuICAgICAgICB0aGlzLl9wb2ludCA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuX2FwcGVuZGBMJHt4fSwke3l9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRoaXMuX2FwcGVuZGBNJHt4fSwke3l9YDtcbiAgICAgICAgaWYgKHRoaXMuX3JhZGl1cyAhPT0gY2FjaGVSYWRpdXMgfHwgdGhpcy5fYXBwZW5kICE9PSBjYWNoZUFwcGVuZCkge1xuICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLl9yYWRpdXM7XG4gICAgICAgICAgY29uc3QgcyA9IHRoaXMuXztcbiAgICAgICAgICB0aGlzLl8gPSBcIlwiOyAvLyBzdGFzaCB0aGUgb2xkIHN0cmluZyBzbyB3ZSBjYW4gY2FjaGUgdGhlIGNpcmNsZSBwYXRoIGZyYWdtZW50XG4gICAgICAgICAgdGhpcy5fYXBwZW5kYG0wLCR7cn1hJHtyfSwke3J9IDAgMSwxIDAsJHstMiAqIHJ9YSR7cn0sJHtyfSAwIDEsMSAwLCR7MiAqIHJ9emA7XG4gICAgICAgICAgY2FjaGVSYWRpdXMgPSByO1xuICAgICAgICAgIGNhY2hlQXBwZW5kID0gdGhpcy5fYXBwZW5kO1xuICAgICAgICAgIGNhY2hlQ2lyY2xlID0gdGhpcy5fO1xuICAgICAgICAgIHRoaXMuXyA9IHM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fICs9IGNhY2hlQ2lyY2xlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVzdWx0KCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuXztcbiAgICB0aGlzLl8gPSBcIlwiO1xuICAgIHJldHVybiByZXN1bHQubGVuZ3RoID8gcmVzdWx0IDogbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmQoc3RyaW5ncykge1xuICBsZXQgaSA9IDE7XG4gIHRoaXMuXyArPSBzdHJpbmdzWzBdO1xuICBmb3IgKGNvbnN0IGogPSBzdHJpbmdzLmxlbmd0aDsgaSA8IGo7ICsraSkge1xuICAgIHRoaXMuXyArPSBhcmd1bWVudHNbaV0gKyBzdHJpbmdzW2ldO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFJvdW5kKGRpZ2l0cykge1xuICBjb25zdCBkID0gTWF0aC5mbG9vcihkaWdpdHMpO1xuICBpZiAoIShkID49IDApKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgaW52YWxpZCBkaWdpdHM6ICR7ZGlnaXRzfWApO1xuICBpZiAoZCA+IDE1KSByZXR1cm4gYXBwZW5kO1xuICBpZiAoZCAhPT0gY2FjaGVEaWdpdHMpIHtcbiAgICBjb25zdCBrID0gMTAgKiogZDtcbiAgICBjYWNoZURpZ2l0cyA9IGQ7XG4gICAgY2FjaGVBcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQoc3RyaW5ncykge1xuICAgICAgbGV0IGkgPSAxO1xuICAgICAgdGhpcy5fICs9IHN0cmluZ3NbMF07XG4gICAgICBmb3IgKGNvbnN0IGogPSBzdHJpbmdzLmxlbmd0aDsgaSA8IGo7ICsraSkge1xuICAgICAgICB0aGlzLl8gKz0gTWF0aC5yb3VuZChhcmd1bWVudHNbaV0gKiBrKSAvIGsgKyBzdHJpbmdzW2ldO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGNhY2hlQXBwZW5kO1xufVxuIiwiaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuLi9pZGVudGl0eS5qc1wiO1xuaW1wb3J0IHN0cmVhbSBmcm9tIFwiLi4vc3RyZWFtLmpzXCI7XG5pbXBvcnQgcGF0aEFyZWEgZnJvbSBcIi4vYXJlYS5qc1wiO1xuaW1wb3J0IHBhdGhCb3VuZHMgZnJvbSBcIi4vYm91bmRzLmpzXCI7XG5pbXBvcnQgcGF0aENlbnRyb2lkIGZyb20gXCIuL2NlbnRyb2lkLmpzXCI7XG5pbXBvcnQgUGF0aENvbnRleHQgZnJvbSBcIi4vY29udGV4dC5qc1wiO1xuaW1wb3J0IHBhdGhNZWFzdXJlIGZyb20gXCIuL21lYXN1cmUuanNcIjtcbmltcG9ydCBQYXRoU3RyaW5nIGZyb20gXCIuL3N0cmluZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9qZWN0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBkaWdpdHMgPSAzLFxuICAgICAgcG9pbnRSYWRpdXMgPSA0LjUsXG4gICAgICBwcm9qZWN0aW9uU3RyZWFtLFxuICAgICAgY29udGV4dFN0cmVhbTtcblxuICBmdW5jdGlvbiBwYXRoKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QpIHtcbiAgICAgIGlmICh0eXBlb2YgcG9pbnRSYWRpdXMgPT09IFwiZnVuY3Rpb25cIikgY29udGV4dFN0cmVhbS5wb2ludFJhZGl1cygrcG9pbnRSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICBzdHJlYW0ob2JqZWN0LCBwcm9qZWN0aW9uU3RyZWFtKGNvbnRleHRTdHJlYW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRTdHJlYW0ucmVzdWx0KCk7XG4gIH1cblxuICBwYXRoLmFyZWEgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBzdHJlYW0ob2JqZWN0LCBwcm9qZWN0aW9uU3RyZWFtKHBhdGhBcmVhKSk7XG4gICAgcmV0dXJuIHBhdGhBcmVhLnJlc3VsdCgpO1xuICB9O1xuXG4gIHBhdGgubWVhc3VyZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHN0cmVhbShvYmplY3QsIHByb2plY3Rpb25TdHJlYW0ocGF0aE1lYXN1cmUpKTtcbiAgICByZXR1cm4gcGF0aE1lYXN1cmUucmVzdWx0KCk7XG4gIH07XG5cbiAgcGF0aC5ib3VuZHMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBzdHJlYW0ob2JqZWN0LCBwcm9qZWN0aW9uU3RyZWFtKHBhdGhCb3VuZHMpKTtcbiAgICByZXR1cm4gcGF0aEJvdW5kcy5yZXN1bHQoKTtcbiAgfTtcblxuICBwYXRoLmNlbnRyb2lkID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgc3RyZWFtKG9iamVjdCwgcHJvamVjdGlvblN0cmVhbShwYXRoQ2VudHJvaWQpKTtcbiAgICByZXR1cm4gcGF0aENlbnRyb2lkLnJlc3VsdCgpO1xuICB9O1xuXG4gIHBhdGgucHJvamVjdGlvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBwcm9qZWN0aW9uO1xuICAgIHByb2plY3Rpb25TdHJlYW0gPSBfID09IG51bGwgPyAocHJvamVjdGlvbiA9IG51bGwsIGlkZW50aXR5KSA6IChwcm9qZWN0aW9uID0gXykuc3RyZWFtO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIHBhdGguY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBjb250ZXh0O1xuICAgIGNvbnRleHRTdHJlYW0gPSBfID09IG51bGwgPyAoY29udGV4dCA9IG51bGwsIG5ldyBQYXRoU3RyaW5nKGRpZ2l0cykpIDogbmV3IFBhdGhDb250ZXh0KGNvbnRleHQgPSBfKTtcbiAgICBpZiAodHlwZW9mIHBvaW50UmFkaXVzICE9PSBcImZ1bmN0aW9uXCIpIGNvbnRleHRTdHJlYW0ucG9pbnRSYWRpdXMocG9pbnRSYWRpdXMpO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIHBhdGgucG9pbnRSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcG9pbnRSYWRpdXM7XG4gICAgcG9pbnRSYWRpdXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IChjb250ZXh0U3RyZWFtLnBvaW50UmFkaXVzKCtfKSwgK18pO1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIHBhdGguZGlnaXRzID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRpZ2l0cztcbiAgICBpZiAoXyA9PSBudWxsKSBkaWdpdHMgPSBudWxsO1xuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZCA9IE1hdGguZmxvb3IoXyk7XG4gICAgICBpZiAoIShkID49IDApKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgaW52YWxpZCBkaWdpdHM6ICR7X31gKTtcbiAgICAgIGRpZ2l0cyA9IGQ7XG4gICAgfVxuICAgIGlmIChjb250ZXh0ID09PSBudWxsKSBjb250ZXh0U3RyZWFtID0gbmV3IFBhdGhTdHJpbmcoZGlnaXRzKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICByZXR1cm4gcGF0aC5wcm9qZWN0aW9uKHByb2plY3Rpb24pLmRpZ2l0cyhkaWdpdHMpLmNvbnRleHQoY29udGV4dCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtZXRob2RzKSB7XG4gIHJldHVybiB7XG4gICAgc3RyZWFtOiB0cmFuc2Zvcm1lcihtZXRob2RzKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZXIobWV0aG9kcykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIHMgPSBuZXcgVHJhbnNmb3JtU3RyZWFtO1xuICAgIGZvciAodmFyIGtleSBpbiBtZXRob2RzKSBzW2tleV0gPSBtZXRob2RzW2tleV07XG4gICAgcy5zdHJlYW0gPSBzdHJlYW07XG4gICAgcmV0dXJuIHM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbSgpIHt9XG5cblRyYW5zZm9ybVN0cmVhbS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUcmFuc2Zvcm1TdHJlYW0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7IHRoaXMuc3RyZWFtLnBvaW50KHgsIHkpOyB9LFxuICBzcGhlcmU6IGZ1bmN0aW9uKCkgeyB0aGlzLnN0cmVhbS5zcGhlcmUoKTsgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHsgdGhpcy5zdHJlYW0ubGluZVN0YXJ0KCk7IH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkgeyB0aGlzLnN0cmVhbS5saW5lRW5kKCk7IH0sXG4gIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7IHRoaXMuc3RyZWFtLnBvbHlnb25TdGFydCgpOyB9LFxuICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHsgdGhpcy5zdHJlYW0ucG9seWdvbkVuZCgpOyB9XG59O1xuIiwiaW1wb3J0IHtkZWZhdWx0IGFzIGdlb1N0cmVhbX0gZnJvbSBcIi4uL3N0cmVhbS5qc1wiO1xuaW1wb3J0IGJvdW5kc1N0cmVhbSBmcm9tIFwiLi4vcGF0aC9ib3VuZHMuanNcIjtcblxuZnVuY3Rpb24gZml0KHByb2plY3Rpb24sIGZpdEJvdW5kcywgb2JqZWN0KSB7XG4gIHZhciBjbGlwID0gcHJvamVjdGlvbi5jbGlwRXh0ZW50ICYmIHByb2plY3Rpb24uY2xpcEV4dGVudCgpO1xuICBwcm9qZWN0aW9uLnNjYWxlKDE1MCkudHJhbnNsYXRlKFswLCAwXSk7XG4gIGlmIChjbGlwICE9IG51bGwpIHByb2plY3Rpb24uY2xpcEV4dGVudChudWxsKTtcbiAgZ2VvU3RyZWFtKG9iamVjdCwgcHJvamVjdGlvbi5zdHJlYW0oYm91bmRzU3RyZWFtKSk7XG4gIGZpdEJvdW5kcyhib3VuZHNTdHJlYW0ucmVzdWx0KCkpO1xuICBpZiAoY2xpcCAhPSBudWxsKSBwcm9qZWN0aW9uLmNsaXBFeHRlbnQoY2xpcCk7XG4gIHJldHVybiBwcm9qZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZml0RXh0ZW50KHByb2plY3Rpb24sIGV4dGVudCwgb2JqZWN0KSB7XG4gIHJldHVybiBmaXQocHJvamVjdGlvbiwgZnVuY3Rpb24oYikge1xuICAgIHZhciB3ID0gZXh0ZW50WzFdWzBdIC0gZXh0ZW50WzBdWzBdLFxuICAgICAgICBoID0gZXh0ZW50WzFdWzFdIC0gZXh0ZW50WzBdWzFdLFxuICAgICAgICBrID0gTWF0aC5taW4odyAvIChiWzFdWzBdIC0gYlswXVswXSksIGggLyAoYlsxXVsxXSAtIGJbMF1bMV0pKSxcbiAgICAgICAgeCA9ICtleHRlbnRbMF1bMF0gKyAodyAtIGsgKiAoYlsxXVswXSArIGJbMF1bMF0pKSAvIDIsXG4gICAgICAgIHkgPSArZXh0ZW50WzBdWzFdICsgKGggLSBrICogKGJbMV1bMV0gKyBiWzBdWzFdKSkgLyAyO1xuICAgIHByb2plY3Rpb24uc2NhbGUoMTUwICogaykudHJhbnNsYXRlKFt4LCB5XSk7XG4gIH0sIG9iamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXRTaXplKHByb2plY3Rpb24sIHNpemUsIG9iamVjdCkge1xuICByZXR1cm4gZml0RXh0ZW50KHByb2plY3Rpb24sIFtbMCwgMF0sIHNpemVdLCBvYmplY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZml0V2lkdGgocHJvamVjdGlvbiwgd2lkdGgsIG9iamVjdCkge1xuICByZXR1cm4gZml0KHByb2plY3Rpb24sIGZ1bmN0aW9uKGIpIHtcbiAgICB2YXIgdyA9ICt3aWR0aCxcbiAgICAgICAgayA9IHcgLyAoYlsxXVswXSAtIGJbMF1bMF0pLFxuICAgICAgICB4ID0gKHcgLSBrICogKGJbMV1bMF0gKyBiWzBdWzBdKSkgLyAyLFxuICAgICAgICB5ID0gLWsgKiBiWzBdWzFdO1xuICAgIHByb2plY3Rpb24uc2NhbGUoMTUwICogaykudHJhbnNsYXRlKFt4LCB5XSk7XG4gIH0sIG9iamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXRIZWlnaHQocHJvamVjdGlvbiwgaGVpZ2h0LCBvYmplY3QpIHtcbiAgcmV0dXJuIGZpdChwcm9qZWN0aW9uLCBmdW5jdGlvbihiKSB7XG4gICAgdmFyIGggPSAraGVpZ2h0LFxuICAgICAgICBrID0gaCAvIChiWzFdWzFdIC0gYlswXVsxXSksXG4gICAgICAgIHggPSAtayAqIGJbMF1bMF0sXG4gICAgICAgIHkgPSAoaCAtIGsgKiAoYlsxXVsxXSArIGJbMF1bMV0pKSAvIDI7XG4gICAgcHJvamVjdGlvbi5zY2FsZSgxNTAgKiBrKS50cmFuc2xhdGUoW3gsIHldKTtcbiAgfSwgb2JqZWN0KTtcbn1cbiIsImltcG9ydCBjbGlwUmVjdGFuZ2xlIGZyb20gXCIuLi9jbGlwL3JlY3RhbmdsZS5qc1wiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuLi9pZGVudGl0eS5qc1wiO1xuaW1wb3J0IHt0cmFuc2Zvcm1lcn0gZnJvbSBcIi4uL3RyYW5zZm9ybS5qc1wiO1xuaW1wb3J0IHtmaXRFeHRlbnQsIGZpdFNpemUsIGZpdFdpZHRoLCBmaXRIZWlnaHR9IGZyb20gXCIuL2ZpdC5qc1wiO1xuaW1wb3J0IHtjb3MsIGRlZ3JlZXMsIHJhZGlhbnMsIHNpbn0gZnJvbSBcIi4uL21hdGguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBrID0gMSwgdHggPSAwLCB0eSA9IDAsIHN4ID0gMSwgc3kgPSAxLCAvLyBzY2FsZSwgdHJhbnNsYXRlIGFuZCByZWZsZWN0XG4gICAgICBhbHBoYSA9IDAsIGNhLCBzYSwgLy8gYW5nbGVcbiAgICAgIHgwID0gbnVsbCwgeTAsIHgxLCB5MSwgLy8gY2xpcCBleHRlbnRcbiAgICAgIGt4ID0gMSwga3kgPSAxLFxuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtZXIoe1xuICAgICAgICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICAgIHZhciBwID0gcHJvamVjdGlvbihbeCwgeV0pXG4gICAgICAgICAgdGhpcy5zdHJlYW0ucG9pbnQocFswXSwgcFsxXSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgcG9zdGNsaXAgPSBpZGVudGl0eSxcbiAgICAgIGNhY2hlLFxuICAgICAgY2FjaGVTdHJlYW07XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAga3ggPSBrICogc3g7XG4gICAga3kgPSBrICogc3k7XG4gICAgY2FjaGUgPSBjYWNoZVN0cmVhbSA9IG51bGw7XG4gICAgcmV0dXJuIHByb2plY3Rpb247XG4gIH1cblxuICBmdW5jdGlvbiBwcm9qZWN0aW9uIChwKSB7XG4gICAgdmFyIHggPSBwWzBdICoga3gsIHkgPSBwWzFdICoga3k7XG4gICAgaWYgKGFscGhhKSB7XG4gICAgICB2YXIgdCA9IHkgKiBjYSAtIHggKiBzYTtcbiAgICAgIHggPSB4ICogY2EgKyB5ICogc2E7XG4gICAgICB5ID0gdDtcbiAgICB9ICAgIFxuICAgIHJldHVybiBbeCArIHR4LCB5ICsgdHldO1xuICB9XG4gIHByb2plY3Rpb24uaW52ZXJ0ID0gZnVuY3Rpb24ocCkge1xuICAgIHZhciB4ID0gcFswXSAtIHR4LCB5ID0gcFsxXSAtIHR5O1xuICAgIGlmIChhbHBoYSkge1xuICAgICAgdmFyIHQgPSB5ICogY2EgKyB4ICogc2E7XG4gICAgICB4ID0geCAqIGNhIC0geSAqIHNhO1xuICAgICAgeSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBbeCAvIGt4LCB5IC8ga3ldO1xuICB9O1xuICBwcm9qZWN0aW9uLnN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIHJldHVybiBjYWNoZSAmJiBjYWNoZVN0cmVhbSA9PT0gc3RyZWFtID8gY2FjaGUgOiBjYWNoZSA9IHRyYW5zZm9ybShwb3N0Y2xpcChjYWNoZVN0cmVhbSA9IHN0cmVhbSkpO1xuICB9O1xuICBwcm9qZWN0aW9uLnBvc3RjbGlwID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBvc3RjbGlwID0gXywgeDAgPSB5MCA9IHgxID0geTEgPSBudWxsLCByZXNldCgpKSA6IHBvc3RjbGlwO1xuICB9O1xuICBwcm9qZWN0aW9uLmNsaXBFeHRlbnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocG9zdGNsaXAgPSBfID09IG51bGwgPyAoeDAgPSB5MCA9IHgxID0geTEgPSBudWxsLCBpZGVudGl0eSkgOiBjbGlwUmVjdGFuZ2xlKHgwID0gK19bMF1bMF0sIHkwID0gK19bMF1bMV0sIHgxID0gK19bMV1bMF0sIHkxID0gK19bMV1bMV0pLCByZXNldCgpKSA6IHgwID09IG51bGwgPyBudWxsIDogW1t4MCwgeTBdLCBbeDEsIHkxXV07XG4gIH07XG4gIHByb2plY3Rpb24uc2NhbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoayA9ICtfLCByZXNldCgpKSA6IGs7XG4gIH07XG4gIHByb2plY3Rpb24udHJhbnNsYXRlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHR4ID0gK19bMF0sIHR5ID0gK19bMV0sIHJlc2V0KCkpIDogW3R4LCB0eV07XG4gIH1cbiAgcHJvamVjdGlvbi5hbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYSA9IF8gJSAzNjAgKiByYWRpYW5zLCBzYSA9IHNpbihhbHBoYSksIGNhID0gY29zKGFscGhhKSwgcmVzZXQoKSkgOiBhbHBoYSAqIGRlZ3JlZXM7XG4gIH07XG4gIHByb2plY3Rpb24ucmVmbGVjdFggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3ggPSBfID8gLTEgOiAxLCByZXNldCgpKSA6IHN4IDwgMDtcbiAgfTtcbiAgcHJvamVjdGlvbi5yZWZsZWN0WSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzeSA9IF8gPyAtMSA6IDEsIHJlc2V0KCkpIDogc3kgPCAwO1xuICB9O1xuICBwcm9qZWN0aW9uLmZpdEV4dGVudCA9IGZ1bmN0aW9uKGV4dGVudCwgb2JqZWN0KSB7XG4gICAgcmV0dXJuIGZpdEV4dGVudChwcm9qZWN0aW9uLCBleHRlbnQsIG9iamVjdCk7XG4gIH07XG4gIHByb2plY3Rpb24uZml0U2l6ZSA9IGZ1bmN0aW9uKHNpemUsIG9iamVjdCkge1xuICAgIHJldHVybiBmaXRTaXplKHByb2plY3Rpb24sIHNpemUsIG9iamVjdCk7XG4gIH07XG4gIHByb2plY3Rpb24uZml0V2lkdGggPSBmdW5jdGlvbih3aWR0aCwgb2JqZWN0KSB7XG4gICAgcmV0dXJuIGZpdFdpZHRoKHByb2plY3Rpb24sIHdpZHRoLCBvYmplY3QpO1xuICB9O1xuICBwcm9qZWN0aW9uLmZpdEhlaWdodCA9IGZ1bmN0aW9uKGhlaWdodCwgb2JqZWN0KSB7XG4gICAgcmV0dXJuIGZpdEhlaWdodChwcm9qZWN0aW9uLCBoZWlnaHQsIG9iamVjdCk7XG4gIH07XG5cbiAgcmV0dXJuIHByb2plY3Rpb247XG59XG4iLCJleHBvcnQgY29uc3QgcmVnaW9uYWxTZWF0QWxsb2NhdGlvbiA9IFtcblx0eyByZWdpb246ICdFYXN0ZXJuIENhcGUnLCBzZWF0OiAyNSB9LFxuXHR7IHJlZ2lvbjogJ0ZyZWUgU3RhdGUnLCBzZWF0OiAxMSB9LFxuXHR7IHJlZ2lvbjogJ0dhdXRlbmcnLCBzZWF0OiA0OCB9LFxuXHR7IHJlZ2lvbjogJ0t3YVp1bHUtTmF0YWwnLCBzZWF0OiA0MSB9LFxuXHR7IHJlZ2lvbjogJ0xpbXBvcG8nLCBzZWF0OiAxOSB9LFxuXHR7IHJlZ2lvbjogJ01wdW1hbGFuZ2EnLCBzZWF0OiAxNSB9LFxuXHR7IHJlZ2lvbjogJ05vcnRoIFdlc3QnLCBzZWF0OiAxMyB9LFxuXHR7IHJlZ2lvbjogJ05vcnRoZXJuIENhcGUnLCBzZWF0OiA1IH0sXG5cdHsgcmVnaW9uOiAnV2VzdGVybiBDYXBlJywgc2VhdDogMjMgfVxuXTsiLCI8c3ZnIHdpZHRoPVwiMTYwXCIgaGVpZ2h0PVwiMTIwXCIgdmlld0JveD1cIjAgMCAxNzggMTQzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoXG4gICAgZD1cIk05OC4yOTk5IDEuNDk0OThMOTkuMDEzNCAxLjEwMzc4TDk4Ljc4MTggMC42ODEyMjhIOTguMjk5OVYxLjQ5NDk4Wk0xNjguOTMyIDEzOC4yNDRDMTY4LjkzMiAxNDAuNjQxIDE3MC44NzUgMTQyLjU4NCAxNzMuMjcyIDE0Mi41ODRDMTc1LjY2OSAxNDIuNTg0IDE3Ny42MTIgMTQwLjY0MSAxNzcuNjEyIDEzOC4yNDRDMTc3LjYxMiAxMzUuODQ3IDE3NS42NjkgMTMzLjkwNCAxNzMuMjcyIDEzMy45MDRDMTcwLjg3NSAxMzMuOTA0IDE2OC45MzIgMTM1Ljg0NyAxNjguOTMyIDEzOC4yNDRaTTAuMjM2MzI4IDIuMzA4NzNIOTguMjk5OVYwLjY4MTIyOEgwLjIzNjMyOFYyLjMwODczWk05Ny41ODYzIDEuODg2MThMMTcyLjU1OCAxMzguNjM1TDE3My45ODYgMTM3Ljg1M0w5OS4wMTM0IDEuMTAzNzhMOTcuNTg2MyAxLjg4NjE4WlwiXG4gICAgZmlsbD1cImJsYWNrXCJcbiAgLz5cbjwvc3ZnPlxuXG48c3R5bGU+XG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04NSUsIC0xMDUlKSBzY2FsZSgxLjE1KTtcbiAgfVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHBhcnR5Q29sb3JzLCBnZW5lcmljQ29sb3JzIH0gZnJvbSBcIkBlbGVjdGlvbi1lbmdpbmUvY29tbW9uL2NvbG9yLXNjaGVtZS5qc29uXCI7XG5cbmxldCBjb2xvcnMgPSBbXTtcbmZvciAoY29uc3QgW3BhcnR5LCBjb2xvcl0gb2YgT2JqZWN0LmVudHJpZXMocGFydHlDb2xvcnMpKSB7XG4gICAgY29sb3JzLnB1c2goeyBwYXJ0eSwgY29sb3IgfSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29sb3IgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gcGFydHkgSUQuXG4gKiBJZiB0aGUgcGFydHkgSUQgaXMgbm90IGZvdW5kIGluIHRoZSBjb2xvcnMgYXJyYXksIGEgYmFja3VwIGNvbG9yIGlzIHJldHVybmVkIGJhc2VkIG9uIHRoZSBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFydHlJRCAtIFRoZSBJRCBvZiB0aGUgcGFydHkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggdXNlZCB0byBjYWxjdWxhdGUgdGhlIGJhY2t1cCBjb2xvci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb2xvciBhc3NvY2lhdGVkIHdpdGggdGhlIHBhcnR5IElEIG9yIGEgYmFja3VwIGNvbG9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFydHlDb2xvcihwYXJ0eUlELCBpbmRleCkge1xuICAgIGNvbnN0IGNvbG9yID0gY29sb3JzLmZpbmQoKGQpID0+IHBhcnR5SUQgPT09IGQucGFydHkpO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgICByZXR1cm4gY29sb3IuY29sb3I7XG4gICAgfVxuICAgIGxldCBiYWNrdXBfY29sb3IgPSBnZW5lcmljQ29sb3JzW2luZGV4ICUgZ2VuZXJpY0NvbG9ycy5sZW5ndGhdO1xuICAgIHJldHVybiBiYWNrdXBfY29sb3I7XG59IiwiPHNjcmlwdD5cbiAgLy8gQHRzLW5vY2hlY2tcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbiAgaW1wb3J0IEdhdXRlbmdMaW5lUGF0aCBmcm9tIFwiLi4vZ2F1dGVuZ0xpbmVQYXRoLnN2ZWx0ZVwiO1xuICBpbXBvcnQgeyBwYXJ0eUNvbG9yIH0gZnJvbSBcIkBlbGVjdGlvbi1lbmdpbmUvY29tbW9uL2NvbG9yc1wiO1xuXG4gIGV4cG9ydCBsZXQgc2VhdHMgPSBbXTtcbiAgZXhwb3J0IGxldCB0b3RhbF9zZWF0cyA9IDA7XG4gIGV4cG9ydCBsZXQgY29scyA9IDg7XG4gIC8vIGV4cG9ydCBsZXQgbWFyZ2luID0gMTtcbiAgZXhwb3J0IGxldCBvZmZzZXQgPSB0cnVlO1xuICBleHBvcnQgbGV0IGdyaWQ7XG4gIGV4cG9ydCBsZXQgaGV4YWdvbl9kYXRhO1xuICBleHBvcnQgbGV0IHRvb2x0aXBEYXRhO1xuXG4gIGxldCBzZWF0c0RhdGEgPSBbXTtcbiAgbGV0IHJvd3MgPSAwO1xuXG4gICQ6IGlzR2F1dGVuZyA9IGhleGFnb25fZGF0YS5wcm92aW5jZV9pZCA9PT0gXCJHYXV0ZW5nXCIgPyB0cnVlIDogZmFsc2U7XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlUm93cygpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRvdGFsX3NlYXRzIC8gY29scyk7XG4gIH1cblxuICAkOiBjYWxjdWxhdGVTZWF0cyA9ICgpID0+IHtcbiAgICBsZXQgZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxfc2VhdHM7IGkrKykge1xuICAgICAgY29uc3QgZCA9IHtcbiAgICAgICAgaSxcbiAgICAgICAgcGFydHk6IHt9LFxuICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAgIHJvdzogTWF0aC5mbG9vcihpIC8gY29scyksXG4gICAgICAgIGNvbDogaSAlIGNvbHMsXG4gICAgICB9O1xuICAgICAgZGF0YS5wdXNoKGQpO1xuICAgIH1cbiAgICBsZXQgeCA9IDA7XG4gICAgZm9yIChsZXQgc2VhdCBvZiBzZWF0cykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWF0LnNlYXRzOyBqKyspIHtcbiAgICAgICAgZGF0YVt4XS5wYXJ0eSA9IHNlYXQ7XG4gICAgICAgIGRhdGFbeF0uY29sb3IgPSBwYXJ0eUNvbG9yKHNlYXQucGFydHlfYWJicmV2aWF0aW9uLCB4KTtcbiAgICAgICAgZGF0YVt4XS50b3RhbF9zZWF0cyA9IHRvdGFsX3NlYXRzO1xuICAgICAgICB4Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gICQ6IGluaXQgPSAoKSA9PiB7XG4gICAgcm93cyA9IGNhbGN1bGF0ZVJvd3MoKTtcbiAgICBzZWF0c0RhdGEgPSBjYWxjdWxhdGVTZWF0cygpO1xuICB9O1xuXG4gICQ6IGluaXQoKTtcbjwvc2NyaXB0PlxuXG57I2lmIGhleGFnb25fZGF0YS5wcm92aW5jZV9pZCA9PT0gXCJHYXV0ZW5nXCIgfHwgaGV4YWdvbl9kYXRhLnByb3ZpbmNlX2lkID09PSBcIkt3YVp1bHUtTmF0YWxcIn1cbiAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXByLWhlYWRcIiBjbGFzczpnYXV0ZW5nLWhlYWRpbmc9e2lzR2F1dGVuZ30+XG4gICAge2hleGFnb25fZGF0YS5wcm92aW5jZV9pZH1cbiAgPC9kaXY+XG57L2lmfVxuXG57I2lmIGlzR2F1dGVuZyAmJiAhZ3JpZH1cbiAgPEdhdXRlbmdMaW5lUGF0aCAvPlxuey9pZn1cblxuPHN2Z1xuICB2aWV3Qm94PVwiMCAwIHsxMiAqIGNvbHN9IHsxMiAqIHJvd3N9XCJcbiAgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS1zZWF0d3JhcHBlclwiXG4gIGNsYXNzOmdhdXRlbmc9e2lzR2F1dGVuZ31cbiAgd2lkdGg9XCIxNDBcIlxuICBoZWlnaHQ9XCIxMDBcIlxuICByb2xlPVwiaW1nXCJcbiAgb246bW91c2VsZWF2ZT17KCkgPT4gKHRvb2x0aXBEYXRhID0gbnVsbCl9XG4+XG4gIDx0ZXh0IGR4PVwiMTVcIiBkeT1cIi00XCIgYmFzZT57aGV4YWdvbl9kYXRhLnByb3ZpbmNlX2lkfTwvdGV4dD5cbiAgPHN2ZyB2aWV3Qm94PVwiMCAwIHsxMiAqIGNvbHN9IHsxMiAqIHJvd3N9XCI+XG4gICAgeyNlYWNoIHNlYXRzRGF0YSBhcyBzZWF0fVxuICAgICAgPGdcbiAgICAgICAgdHJhbnNmb3JtPVwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoe29mZnNldCAmJiBzZWF0LnJvdyAlIDIgPyBzZWF0LmNvbCAqIDExICsgNSA6IHNlYXQuY29sICogMTF9IHtvZmZzZXRcbiAgICAgICAgICA/IHNlYXQucm93ICogOVxuICAgICAgICAgIDogc2VhdC5yb3cgKiAxMX0pXG4gICAgICAgICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD1cIjEycHhcIlxuICAgICAgICAgIGhlaWdodD1cIjEzcHhcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTUgMTdcIlxuICAgICAgICAgIG9uOm1vdXNlb3Zlcj17KGUpID0+IHtcbiAgICAgICAgICAgIHRvb2x0aXBEYXRhID0geyAuLi5zZWF0IH07XG4gICAgICAgICAgICB0b29sdGlwRGF0YVtcInhcIl0gPSBlLng7XG4gICAgICAgICAgICB0b29sdGlwRGF0YVtcInlcIl0gPSBlLnk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbjpmb2N1c1xuICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICA+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEsIDEpXCIgZmlsbD17c2VhdC5jb2xvcn0gZmlsbC1ydWxlPVwibm9uemVyb1wiIHN0cm9rZT1cIiM0NDQ0NDRcIj5cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjUsMCAxMCwyLjc1IDEwLDguMjUgNSwxMSAwLDguMjUgMCwyLjc1XCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2c+XG4gICAgey9lYWNofVxuICA8L3N2Zz5cbjwvc3ZnPlxuXG48c3R5bGU+XG4gIHRleHQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgICBjb2xvcjogIzBjMGMwYztcbiAgfVxuXG4gIC5lbGVjdGlvbmVuZ2luZS1wci1oZWFkIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICAgIGNvbG9yOiAjMGMwYzBjO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5lbGVjdGlvbmVuZ2luZS1wci1oZWFkLmdhdXRlbmctaGVhZGluZyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC03NDAlKTtcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcbiAgfVxuXG4gIC5lbGVjdGlvbmVuZ2luZS1zZWF0d3JhcHBlci5nYXV0ZW5nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTI1JSwgLTEyNSUpO1xuICB9XG5cbiAgQG1lZGlhICh3aWR0aCA8IDYzMHB4KSB7XG4gICAgLmVsZWN0aW9uZW5naW5lLXByLWhlYWQuZ2F1dGVuZy1oZWFkaW5nIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLXNlYXR3cmFwcGVyLmdhdXRlbmcge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG4iLCIvKlxuQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbFxuRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL21hdHRkZXNsL2Vhc2VzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiovXG5leHBvcnQgeyBpZGVudGl0eSBhcyBsaW5lYXIgfSBmcm9tICcuLi9pbnRlcm5hbC9pbmRleC5qcyc7XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiYWNrSW5PdXQodCkge1xuXHRjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuXHRpZiAoKHQgKj0gMikgPCAxKSByZXR1cm4gMC41ICogKHQgKiB0ICogKChzICsgMSkgKiB0IC0gcykpO1xuXHRyZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMik7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiYWNrSW4odCkge1xuXHRjb25zdCBzID0gMS43MDE1ODtcblx0cmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcyk7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiYWNrT3V0KHQpIHtcblx0Y29uc3QgcyA9IDEuNzAxNTg7XG5cdHJldHVybiAtLXQgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxO1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYm91bmNlT3V0KHQpIHtcblx0Y29uc3QgYSA9IDQuMCAvIDExLjA7XG5cdGNvbnN0IGIgPSA4LjAgLyAxMS4wO1xuXHRjb25zdCBjID0gOS4wIC8gMTAuMDtcblx0Y29uc3QgY2EgPSA0MzU2LjAgLyAzNjEuMDtcblx0Y29uc3QgY2IgPSAzNTQ0Mi4wIC8gMTgwNS4wO1xuXHRjb25zdCBjYyA9IDE2MDYxLjAgLyAxODA1LjA7XG5cdGNvbnN0IHQyID0gdCAqIHQ7XG5cdHJldHVybiB0IDwgYVxuXHRcdD8gNy41NjI1ICogdDJcblx0XHQ6IHQgPCBiXG5cdFx0PyA5LjA3NSAqIHQyIC0gOS45ICogdCArIDMuNFxuXHRcdDogdCA8IGNcblx0XHQ/IGNhICogdDIgLSBjYiAqIHQgKyBjY1xuXHRcdDogMTAuOCAqIHQgKiB0IC0gMjAuNTIgKiB0ICsgMTAuNzI7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG5cdHJldHVybiB0IDwgMC41ID8gMC41ICogKDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0ICogMi4wKSkgOiAwLjUgKiBib3VuY2VPdXQodCAqIDIuMCAtIDEuMCkgKyAwLjU7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VJbih0KSB7XG5cdHJldHVybiAxLjAgLSBib3VuY2VPdXQoMS4wIC0gdCk7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaXJjSW5PdXQodCkge1xuXHRpZiAoKHQgKj0gMikgPCAxKSByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpO1xuXHRyZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpO1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2lyY0luKHQpIHtcblx0cmV0dXJuIDEuMCAtIE1hdGguc3FydCgxLjAgLSB0ICogdCk7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaXJjT3V0KHQpIHtcblx0cmV0dXJuIE1hdGguc3FydCgxIC0gLS10ICogdCk7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcblx0cmV0dXJuIHQgPCAwLjUgPyA0LjAgKiB0ICogdCAqIHQgOiAwLjUgKiBNYXRoLnBvdygyLjAgKiB0IC0gMi4wLCAzLjApICsgMS4wO1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3ViaWNJbih0KSB7XG5cdHJldHVybiB0ICogdCAqIHQ7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY091dCh0KSB7XG5cdGNvbnN0IGYgPSB0IC0gMS4wO1xuXHRyZXR1cm4gZiAqIGYgKiBmICsgMS4wO1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY0luT3V0KHQpIHtcblx0cmV0dXJuIHQgPCAwLjVcblx0XHQ/IDAuNSAqIE1hdGguc2luKCgoKzEzLjAgKiBNYXRoLlBJKSAvIDIpICogMi4wICogdCkgKiBNYXRoLnBvdygyLjAsIDEwLjAgKiAoMi4wICogdCAtIDEuMCkpXG5cdFx0OiAwLjUgKlxuXHRcdFx0XHRNYXRoLnNpbigoKC0xMy4wICogTWF0aC5QSSkgLyAyKSAqICgyLjAgKiB0IC0gMS4wICsgMS4wKSkgKlxuXHRcdFx0XHRNYXRoLnBvdygyLjAsIC0xMC4wICogKDIuMCAqIHQgLSAxLjApKSArXG5cdFx0XHRcdDEuMDtcbn1cblxuLyoqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUtZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gdFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWNJbih0KSB7XG5cdHJldHVybiBNYXRoLnNpbigoMTMuMCAqIHQgKiBNYXRoLlBJKSAvIDIpICogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKTtcbn1cblxuLyoqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUtZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gdFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuXHRyZXR1cm4gTWF0aC5zaW4oKC0xMy4wICogKHQgKyAxLjApICogTWF0aC5QSSkgLyAyKSAqIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KSArIDEuMDtcbn1cblxuLyoqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUtZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gdFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cG9Jbk91dCh0KSB7XG5cdHJldHVybiB0ID09PSAwLjAgfHwgdCA9PT0gMS4wXG5cdFx0PyB0XG5cdFx0OiB0IDwgMC41XG5cdFx0PyArMC41ICogTWF0aC5wb3coMi4wLCAyMC4wICogdCAtIDEwLjApXG5cdFx0OiAtMC41ICogTWF0aC5wb3coMi4wLCAxMC4wIC0gdCAqIDIwLjApICsgMS4wO1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwb0luKHQpIHtcblx0cmV0dXJuIHQgPT09IDAuMCA/IHQgOiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpO1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwb091dCh0KSB7XG5cdHJldHVybiB0ID09PSAxLjAgPyB0IDogMS4wIC0gTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpO1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVhZEluT3V0KHQpIHtcblx0dCAvPSAwLjU7XG5cdGlmICh0IDwgMSkgcmV0dXJuIDAuNSAqIHQgKiB0O1xuXHR0LS07XG5cdHJldHVybiAtMC41ICogKHQgKiAodCAtIDIpIC0gMSk7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWFkSW4odCkge1xuXHRyZXR1cm4gdCAqIHQ7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWFkT3V0KHQpIHtcblx0cmV0dXJuIC10ICogKHQgLSAyLjApO1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVhcnRJbk91dCh0KSB7XG5cdHJldHVybiB0IDwgMC41ID8gKzguMCAqIE1hdGgucG93KHQsIDQuMCkgOiAtOC4wICogTWF0aC5wb3codCAtIDEuMCwgNC4wKSArIDEuMDtcbn1cblxuLyoqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUtZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gdFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1YXJ0SW4odCkge1xuXHRyZXR1cm4gTWF0aC5wb3codCwgNC4wKTtcbn1cblxuLyoqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUtZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gdFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1YXJ0T3V0KHQpIHtcblx0cmV0dXJuIE1hdGgucG93KHQgLSAxLjAsIDMuMCkgKiAoMS4wIC0gdCkgKyAxLjA7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWludEluT3V0KHQpIHtcblx0aWYgKCh0ICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIHQgKiB0ICogdCAqIHQgKiB0O1xuXHRyZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpO1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVpbnRJbih0KSB7XG5cdHJldHVybiB0ICogdCAqIHQgKiB0ICogdDtcbn1cblxuLyoqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUtZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gdFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1aW50T3V0KHQpIHtcblx0cmV0dXJuIC0tdCAqIHQgKiB0ICogdCAqIHQgKyAxO1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2luZUluT3V0KHQpIHtcblx0cmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQpIC0gMSk7XG59XG5cbi8qKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLWVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaW5lSW4odCkge1xuXHRjb25zdCB2ID0gTWF0aC5jb3ModCAqIE1hdGguUEkgKiAwLjUpO1xuXHRpZiAoTWF0aC5hYnModikgPCAxZS0xNCkgcmV0dXJuIDE7XG5cdGVsc2UgcmV0dXJuIDEgLSB2O1xufVxuXG4vKipcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSB0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2luZU91dCh0KSB7XG5cdHJldHVybiBNYXRoLnNpbigodCAqIE1hdGguUEkpIC8gMik7XG59XG4iLCJpbXBvcnQgeyBjdWJpY091dCwgY3ViaWNJbk91dCwgbGluZWFyIH0gZnJvbSAnLi4vZWFzaW5nL2luZGV4LmpzJztcbmltcG9ydCB7IGFzc2lnbiwgc3BsaXRfY3NzX3VuaXQsIGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXguanMnO1xuXG4vKipcbiAqIEFuaW1hdGVzIGEgYGJsdXJgIGZpbHRlciBhbG9uZ3NpZGUgYW4gZWxlbWVudCdzIG9wYWNpdHkuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLXRyYW5zaXRpb24jYmx1clxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wdWJsaWMnKS5CbHVyUGFyYW1zfSBbcGFyYW1zXVxuICogQHJldHVybnMge2ltcG9ydCgnLi9wdWJsaWMnKS5UcmFuc2l0aW9uQ29uZmlnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmx1cihcblx0bm9kZSxcblx0eyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBjdWJpY0luT3V0LCBhbW91bnQgPSA1LCBvcGFjaXR5ID0gMCB9ID0ge31cbikge1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG5cdGNvbnN0IGYgPSBzdHlsZS5maWx0ZXIgPT09ICdub25lJyA/ICcnIDogc3R5bGUuZmlsdGVyO1xuXHRjb25zdCBvZCA9IHRhcmdldF9vcGFjaXR5ICogKDEgLSBvcGFjaXR5KTtcblx0Y29uc3QgW3ZhbHVlLCB1bml0XSA9IHNwbGl0X2Nzc191bml0KGFtb3VudCk7XG5cdHJldHVybiB7XG5cdFx0ZGVsYXksXG5cdFx0ZHVyYXRpb24sXG5cdFx0ZWFzaW5nLFxuXHRcdGNzczogKF90LCB1KSA9PiBgb3BhY2l0eTogJHt0YXJnZXRfb3BhY2l0eSAtIG9kICogdX07IGZpbHRlcjogJHtmfSBibHVyKCR7dSAqIHZhbHVlfSR7dW5pdH0pO2Bcblx0fTtcbn1cblxuLyoqXG4gKiBBbmltYXRlcyB0aGUgb3BhY2l0eSBvZiBhbiBlbGVtZW50IGZyb20gMCB0byB0aGUgY3VycmVudCBvcGFjaXR5IGZvciBgaW5gIHRyYW5zaXRpb25zIGFuZCBmcm9tIHRoZSBjdXJyZW50IG9wYWNpdHkgdG8gMCBmb3IgYG91dGAgdHJhbnNpdGlvbnMuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLXRyYW5zaXRpb24jZmFkZVxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wdWJsaWMnKS5GYWRlUGFyYW1zfSBbcGFyYW1zXVxuICogQHJldHVybnMge2ltcG9ydCgnLi9wdWJsaWMnKS5UcmFuc2l0aW9uQ29uZmlnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFkZShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGxpbmVhciB9ID0ge30pIHtcblx0Y29uc3QgbyA9ICtnZXRDb21wdXRlZFN0eWxlKG5vZGUpLm9wYWNpdHk7XG5cdHJldHVybiB7XG5cdFx0ZGVsYXksXG5cdFx0ZHVyYXRpb24sXG5cdFx0ZWFzaW5nLFxuXHRcdGNzczogKHQpID0+IGBvcGFjaXR5OiAke3QgKiBvfWBcblx0fTtcbn1cblxuLyoqXG4gKiBBbmltYXRlcyB0aGUgeCBhbmQgeSBwb3NpdGlvbnMgYW5kIHRoZSBvcGFjaXR5IG9mIGFuIGVsZW1lbnQuIGBpbmAgdHJhbnNpdGlvbnMgYW5pbWF0ZSBmcm9tIHRoZSBwcm92aWRlZCB2YWx1ZXMsIHBhc3NlZCBhcyBwYXJhbWV0ZXJzIHRvIHRoZSBlbGVtZW50J3MgZGVmYXVsdCB2YWx1ZXMuIGBvdXRgIHRyYW5zaXRpb25zIGFuaW1hdGUgZnJvbSB0aGUgZWxlbWVudCdzIGRlZmF1bHQgdmFsdWVzIHRvIHRoZSBwcm92aWRlZCB2YWx1ZXMuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLXRyYW5zaXRpb24jZmx5XG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL3B1YmxpYycpLkZseVBhcmFtc30gW3BhcmFtc11cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vcHVibGljJykuVHJhbnNpdGlvbkNvbmZpZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZseShcblx0bm9kZSxcblx0eyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBjdWJpY091dCwgeCA9IDAsIHkgPSAwLCBvcGFjaXR5ID0gMCB9ID0ge31cbikge1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG5cdGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG5cdGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuXHRjb25zdCBbeFZhbHVlLCB4VW5pdF0gPSBzcGxpdF9jc3NfdW5pdCh4KTtcblx0Y29uc3QgW3lWYWx1ZSwgeVVuaXRdID0gc3BsaXRfY3NzX3VuaXQoeSk7XG5cdHJldHVybiB7XG5cdFx0ZGVsYXksXG5cdFx0ZHVyYXRpb24sXG5cdFx0ZWFzaW5nLFxuXHRcdGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4VmFsdWV9JHt4VW5pdH0sICR7KDEgLSB0KSAqIHlWYWx1ZX0ke3lVbml0fSk7XG5cdFx0XHRvcGFjaXR5OiAke3RhcmdldF9vcGFjaXR5IC0gb2QgKiB1fWBcblx0fTtcbn1cblxuLyoqXG4gKiBTbGlkZXMgYW4gZWxlbWVudCBpbiBhbmQgb3V0LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS10cmFuc2l0aW9uI3NsaWRlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL3B1YmxpYycpLlNsaWRlUGFyYW1zfSBbcGFyYW1zXVxuICogQHJldHVybnMge2ltcG9ydCgnLi9wdWJsaWMnKS5UcmFuc2l0aW9uQ29uZmlnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpZGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBjdWJpY091dCwgYXhpcyA9ICd5JyB9ID0ge30pIHtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHRjb25zdCBvcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG5cdGNvbnN0IHByaW1hcnlfcHJvcGVydHkgPSBheGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cdGNvbnN0IHByaW1hcnlfcHJvcGVydHlfdmFsdWUgPSBwYXJzZUZsb2F0KHN0eWxlW3ByaW1hcnlfcHJvcGVydHldKTtcblx0Y29uc3Qgc2Vjb25kYXJ5X3Byb3BlcnRpZXMgPSBheGlzID09PSAneScgPyBbJ3RvcCcsICdib3R0b20nXSA6IFsnbGVmdCcsICdyaWdodCddO1xuXHRjb25zdCBjYXBpdGFsaXplZF9zZWNvbmRhcnlfcHJvcGVydGllcyA9IHNlY29uZGFyeV9wcm9wZXJ0aWVzLm1hcChcblx0XHQoZSkgPT4gYCR7ZVswXS50b1VwcGVyQ2FzZSgpfSR7ZS5zbGljZSgxKX1gXG5cdCk7XG5cdGNvbnN0IHBhZGRpbmdfc3RhcnRfdmFsdWUgPSBwYXJzZUZsb2F0KHN0eWxlW2BwYWRkaW5nJHtjYXBpdGFsaXplZF9zZWNvbmRhcnlfcHJvcGVydGllc1swXX1gXSk7XG5cdGNvbnN0IHBhZGRpbmdfZW5kX3ZhbHVlID0gcGFyc2VGbG9hdChzdHlsZVtgcGFkZGluZyR7Y2FwaXRhbGl6ZWRfc2Vjb25kYXJ5X3Byb3BlcnRpZXNbMV19YF0pO1xuXHRjb25zdCBtYXJnaW5fc3RhcnRfdmFsdWUgPSBwYXJzZUZsb2F0KHN0eWxlW2BtYXJnaW4ke2NhcGl0YWxpemVkX3NlY29uZGFyeV9wcm9wZXJ0aWVzWzBdfWBdKTtcblx0Y29uc3QgbWFyZ2luX2VuZF92YWx1ZSA9IHBhcnNlRmxvYXQoc3R5bGVbYG1hcmdpbiR7Y2FwaXRhbGl6ZWRfc2Vjb25kYXJ5X3Byb3BlcnRpZXNbMV19YF0pO1xuXHRjb25zdCBib3JkZXJfd2lkdGhfc3RhcnRfdmFsdWUgPSBwYXJzZUZsb2F0KFxuXHRcdHN0eWxlW2Bib3JkZXIke2NhcGl0YWxpemVkX3NlY29uZGFyeV9wcm9wZXJ0aWVzWzBdfVdpZHRoYF1cblx0KTtcblx0Y29uc3QgYm9yZGVyX3dpZHRoX2VuZF92YWx1ZSA9IHBhcnNlRmxvYXQoXG5cdFx0c3R5bGVbYGJvcmRlciR7Y2FwaXRhbGl6ZWRfc2Vjb25kYXJ5X3Byb3BlcnRpZXNbMV19V2lkdGhgXVxuXHQpO1xuXHRyZXR1cm4ge1xuXHRcdGRlbGF5LFxuXHRcdGR1cmF0aW9uLFxuXHRcdGVhc2luZyxcblx0XHRjc3M6ICh0KSA9PlxuXHRcdFx0J292ZXJmbG93OiBoaWRkZW47JyArXG5cdFx0XHRgb3BhY2l0eTogJHtNYXRoLm1pbih0ICogMjAsIDEpICogb3BhY2l0eX07YCArXG5cdFx0XHRgJHtwcmltYXJ5X3Byb3BlcnR5fTogJHt0ICogcHJpbWFyeV9wcm9wZXJ0eV92YWx1ZX1weDtgICtcblx0XHRcdGBwYWRkaW5nLSR7c2Vjb25kYXJ5X3Byb3BlcnRpZXNbMF19OiAke3QgKiBwYWRkaW5nX3N0YXJ0X3ZhbHVlfXB4O2AgK1xuXHRcdFx0YHBhZGRpbmctJHtzZWNvbmRhcnlfcHJvcGVydGllc1sxXX06ICR7dCAqIHBhZGRpbmdfZW5kX3ZhbHVlfXB4O2AgK1xuXHRcdFx0YG1hcmdpbi0ke3NlY29uZGFyeV9wcm9wZXJ0aWVzWzBdfTogJHt0ICogbWFyZ2luX3N0YXJ0X3ZhbHVlfXB4O2AgK1xuXHRcdFx0YG1hcmdpbi0ke3NlY29uZGFyeV9wcm9wZXJ0aWVzWzFdfTogJHt0ICogbWFyZ2luX2VuZF92YWx1ZX1weDtgICtcblx0XHRcdGBib3JkZXItJHtzZWNvbmRhcnlfcHJvcGVydGllc1swXX0td2lkdGg6ICR7dCAqIGJvcmRlcl93aWR0aF9zdGFydF92YWx1ZX1weDtgICtcblx0XHRcdGBib3JkZXItJHtzZWNvbmRhcnlfcHJvcGVydGllc1sxXX0td2lkdGg6ICR7dCAqIGJvcmRlcl93aWR0aF9lbmRfdmFsdWV9cHg7YFxuXHR9O1xufVxuXG4vKipcbiAqIEFuaW1hdGVzIHRoZSBvcGFjaXR5IGFuZCBzY2FsZSBvZiBhbiBlbGVtZW50LiBgaW5gIHRyYW5zaXRpb25zIGFuaW1hdGUgZnJvbSBhbiBlbGVtZW50J3MgY3VycmVudCAoZGVmYXVsdCkgdmFsdWVzIHRvIHRoZSBwcm92aWRlZCB2YWx1ZXMsIHBhc3NlZCBhcyBwYXJhbWV0ZXJzLiBgb3V0YCB0cmFuc2l0aW9ucyBhbmltYXRlIGZyb20gdGhlIHByb3ZpZGVkIHZhbHVlcyB0byBhbiBlbGVtZW50J3MgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3Mvc3ZlbHRlLXRyYW5zaXRpb24jc2NhbGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vcHVibGljJykuU2NhbGVQYXJhbXN9IFtwYXJhbXNdXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL3B1YmxpYycpLlRyYW5zaXRpb25Db25maWd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShcblx0bm9kZSxcblx0eyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBjdWJpY091dCwgc3RhcnQgPSAwLCBvcGFjaXR5ID0gMCB9ID0ge31cbikge1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG5cdGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG5cdGNvbnN0IHNkID0gMSAtIHN0YXJ0O1xuXHRjb25zdCBvZCA9IHRhcmdldF9vcGFjaXR5ICogKDEgLSBvcGFjaXR5KTtcblx0cmV0dXJuIHtcblx0XHRkZWxheSxcblx0XHRkdXJhdGlvbixcblx0XHRlYXNpbmcsXG5cdFx0Y3NzOiAoX3QsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHNjYWxlKCR7MSAtIHNkICogdX0pO1xuXHRcdFx0b3BhY2l0eTogJHt0YXJnZXRfb3BhY2l0eSAtIG9kICogdX1cblx0XHRgXG5cdH07XG59XG5cbi8qKlxuICogQW5pbWF0ZXMgdGhlIHN0cm9rZSBvZiBhbiBTVkcgZWxlbWVudCwgbGlrZSBhIHNuYWtlIGluIGEgdHViZS4gYGluYCB0cmFuc2l0aW9ucyBiZWdpbiB3aXRoIHRoZSBwYXRoIGludmlzaWJsZSBhbmQgZHJhdyB0aGUgcGF0aCB0byB0aGUgc2NyZWVuIG92ZXIgdGltZS4gYG91dGAgdHJhbnNpdGlvbnMgc3RhcnQgaW4gYSB2aXNpYmxlIHN0YXRlIGFuZCBncmFkdWFsbHkgZXJhc2UgdGhlIHBhdGguIGBkcmF3YCBvbmx5IHdvcmtzIHdpdGggZWxlbWVudHMgdGhhdCBoYXZlIGEgYGdldFRvdGFsTGVuZ3RoYCBtZXRob2QsIGxpa2UgYDxwYXRoPmAgYW5kIGA8cG9seWxpbmU+YC5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUtdHJhbnNpdGlvbiNkcmF3XG4gKiBAcGFyYW0ge1NWR0VsZW1lbnQgJiB7IGdldFRvdGFsTGVuZ3RoKCk6IG51bWJlciB9fSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9wdWJsaWMnKS5EcmF3UGFyYW1zfSBbcGFyYW1zXVxuICogQHJldHVybnMge2ltcG9ydCgnLi9wdWJsaWMnKS5UcmFuc2l0aW9uQ29uZmlnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJhdyhub2RlLCB7IGRlbGF5ID0gMCwgc3BlZWQsIGR1cmF0aW9uLCBlYXNpbmcgPSBjdWJpY0luT3V0IH0gPSB7fSkge1xuXHRsZXQgbGVuID0gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cdGlmIChzdHlsZS5zdHJva2VMaW5lY2FwICE9PSAnYnV0dCcpIHtcblx0XHRsZW4gKz0gcGFyc2VJbnQoc3R5bGUuc3Ryb2tlV2lkdGgpO1xuXHR9XG5cdGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKHNwZWVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGR1cmF0aW9uID0gODAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkdXJhdGlvbiA9IGxlbiAvIHNwZWVkO1xuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRkdXJhdGlvbiA9IGR1cmF0aW9uKGxlbik7XG5cdH1cblx0cmV0dXJuIHtcblx0XHRkZWxheSxcblx0XHRkdXJhdGlvbixcblx0XHRlYXNpbmcsXG5cdFx0Y3NzOiAoXywgdSkgPT4gYFxuXHRcdFx0c3Ryb2tlLWRhc2hhcnJheTogJHtsZW59O1xuXHRcdFx0c3Ryb2tlLWRhc2hvZmZzZXQ6ICR7dSAqIGxlbn07XG5cdFx0YFxuXHR9O1xufVxuXG4vKipcbiAqIFRoZSBgY3Jvc3NmYWRlYCBmdW5jdGlvbiBjcmVhdGVzIGEgcGFpciBvZiBbdHJhbnNpdGlvbnNdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3RlbXBsYXRlLXN5bnRheC1lbGVtZW50LWRpcmVjdGl2ZXMtdHJhbnNpdGlvbi1mbikgY2FsbGVkIGBzZW5kYCBhbmQgYHJlY2VpdmVgLiBXaGVuIGFuIGVsZW1lbnQgaXMgJ3NlbnQnLCBpdCBsb29rcyBmb3IgYSBjb3JyZXNwb25kaW5nIGVsZW1lbnQgYmVpbmcgJ3JlY2VpdmVkJywgYW5kIGdlbmVyYXRlcyBhIHRyYW5zaXRpb24gdGhhdCB0cmFuc2Zvcm1zIHRoZSBlbGVtZW50IHRvIGl0cyBjb3VudGVycGFydCdzIHBvc2l0aW9uIGFuZCBmYWRlcyBpdCBvdXQuIFdoZW4gYW4gZWxlbWVudCBpcyAncmVjZWl2ZWQnLCB0aGUgcmV2ZXJzZSBoYXBwZW5zLiBJZiB0aGVyZSBpcyBubyBjb3VudGVycGFydCwgdGhlIGBmYWxsYmFja2AgdHJhbnNpdGlvbiBpcyB1c2VkLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS10cmFuc2l0aW9uI2Nyb3NzZmFkZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vcHVibGljJykuQ3Jvc3NmYWRlUGFyYW1zICYge1xuICogXHRmYWxsYmFjaz86IChub2RlOiBFbGVtZW50LCBwYXJhbXM6IGltcG9ydCgnLi9wdWJsaWMnKS5Dcm9zc2ZhZGVQYXJhbXMsIGludHJvOiBib29sZWFuKSA9PiBpbXBvcnQoJy4vcHVibGljJykuVHJhbnNpdGlvbkNvbmZpZztcbiAqIH19IHBhcmFtc1xuICogQHJldHVybnMge1sobm9kZTogYW55LCBwYXJhbXM6IGltcG9ydCgnLi9wdWJsaWMnKS5Dcm9zc2ZhZGVQYXJhbXMgJiB7IGtleTogYW55OyB9KSA9PiAoKSA9PiBpbXBvcnQoJy4vcHVibGljJykuVHJhbnNpdGlvbkNvbmZpZywgKG5vZGU6IGFueSwgcGFyYW1zOiBpbXBvcnQoJy4vcHVibGljJykuQ3Jvc3NmYWRlUGFyYW1zICYgeyBrZXk6IGFueTsgfSkgPT4gKCkgPT4gaW1wb3J0KCcuL3B1YmxpYycpLlRyYW5zaXRpb25Db25maWddfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NmYWRlKHsgZmFsbGJhY2ssIC4uLmRlZmF1bHRzIH0pIHtcblx0LyoqIEB0eXBlIHtNYXA8YW55LCBFbGVtZW50Pn0gKi9cblx0Y29uc3QgdG9fcmVjZWl2ZSA9IG5ldyBNYXAoKTtcblx0LyoqIEB0eXBlIHtNYXA8YW55LCBFbGVtZW50Pn0gKi9cblx0Y29uc3QgdG9fc2VuZCA9IG5ldyBNYXAoKTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZnJvbV9ub2RlXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi9wdWJsaWMnKS5Dcm9zc2ZhZGVQYXJhbXN9IHBhcmFtc1xuXHQgKiBAcmV0dXJucyB7aW1wb3J0KCcuL3B1YmxpYycpLlRyYW5zaXRpb25Db25maWd9XG5cdCAqL1xuXHRmdW5jdGlvbiBjcm9zc2ZhZGUoZnJvbV9ub2RlLCBub2RlLCBwYXJhbXMpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkZWxheSA9IDAsXG5cdFx0XHRkdXJhdGlvbiA9IChkKSA9PiBNYXRoLnNxcnQoZCkgKiAzMCxcblx0XHRcdGVhc2luZyA9IGN1YmljT3V0XG5cdFx0fSA9IGFzc2lnbihhc3NpZ24oe30sIGRlZmF1bHRzKSwgcGFyYW1zKTtcblx0XHRjb25zdCBmcm9tID0gZnJvbV9ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRjb25zdCBkeCA9IGZyb20ubGVmdCAtIHRvLmxlZnQ7XG5cdFx0Y29uc3QgZHkgPSBmcm9tLnRvcCAtIHRvLnRvcDtcblx0XHRjb25zdCBkdyA9IGZyb20ud2lkdGggLyB0by53aWR0aDtcblx0XHRjb25zdCBkaCA9IGZyb20uaGVpZ2h0IC8gdG8uaGVpZ2h0O1xuXHRcdGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXHRcdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblx0XHRjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuXHRcdGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGVsYXksXG5cdFx0XHRkdXJhdGlvbjogaXNfZnVuY3Rpb24oZHVyYXRpb24pID8gZHVyYXRpb24oZCkgOiBkdXJhdGlvbixcblx0XHRcdGVhc2luZyxcblx0XHRcdGNzczogKHQsIHUpID0+IGBcblx0XHRcdFx0b3BhY2l0eTogJHt0ICogb3BhY2l0eX07XG5cdFx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuXHRcdFx0XHR0cmFuc2Zvcm06ICR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHt1ICogZHh9cHgsJHt1ICogZHl9cHgpIHNjYWxlKCR7dCArICgxIC0gdCkgKiBkd30sICR7XG5cdFx0XHRcdHQgKyAoMSAtIHQpICogZGhcblx0XHRcdH0pO1xuXHRcdFx0YFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtNYXA8YW55LCBFbGVtZW50Pn0gaXRlbXNcblx0ICogQHBhcmFtIHtNYXA8YW55LCBFbGVtZW50Pn0gY291bnRlcnBhcnRzXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaW50cm9cblx0ICogQHJldHVybnMgeyhub2RlOiBhbnksIHBhcmFtczogaW1wb3J0KCcuL3B1YmxpYycpLkNyb3NzZmFkZVBhcmFtcyAmIHsga2V5OiBhbnk7IH0pID0+ICgpID0+IGltcG9ydCgnLi9wdWJsaWMnKS5UcmFuc2l0aW9uQ29uZmlnfVxuXHQgKi9cblx0ZnVuY3Rpb24gdHJhbnNpdGlvbihpdGVtcywgY291bnRlcnBhcnRzLCBpbnRybykge1xuXHRcdHJldHVybiAobm9kZSwgcGFyYW1zKSA9PiB7XG5cdFx0XHRpdGVtcy5zZXQocGFyYW1zLmtleSwgbm9kZSk7XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRpZiAoY291bnRlcnBhcnRzLmhhcyhwYXJhbXMua2V5KSkge1xuXHRcdFx0XHRcdGNvbnN0IG90aGVyX25vZGUgPSBjb3VudGVycGFydHMuZ2V0KHBhcmFtcy5rZXkpO1xuXHRcdFx0XHRcdGNvdW50ZXJwYXJ0cy5kZWxldGUocGFyYW1zLmtleSk7XG5cdFx0XHRcdFx0cmV0dXJuIGNyb3NzZmFkZShvdGhlcl9ub2RlLCBub2RlLCBwYXJhbXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGlmIHRoZSBub2RlIGlzIGRpc2FwcGVhcmluZyBhbHRvZ2V0aGVyXG5cdFx0XHRcdC8vIChpLmUuIHdhc24ndCBjbGFpbWVkIGJ5IHRoZSBvdGhlciBsaXN0KVxuXHRcdFx0XHQvLyB0aGVuIHdlIG5lZWQgdG8gc3VwcGx5IGFuIG91dHJvXG5cdFx0XHRcdGl0ZW1zLmRlbGV0ZShwYXJhbXMua2V5KTtcblx0XHRcdFx0cmV0dXJuIGZhbGxiYWNrICYmIGZhbGxiYWNrKG5vZGUsIHBhcmFtcywgaW50cm8pO1xuXHRcdFx0fTtcblx0XHR9O1xuXHR9XG5cdHJldHVybiBbdHJhbnNpdGlvbih0b19zZW5kLCB0b19yZWNlaXZlLCBmYWxzZSksIHRyYW5zaXRpb24odG9fcmVjZWl2ZSwgdG9fc2VuZCwgdHJ1ZSldO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG51bWJlcldpdGhDb21tYXMoeCkge1xuICAgIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xufSIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZseSwgZmFkZSB9IGZyb20gXCJzdmVsdGUvdHJhbnNpdGlvblwiO1xuICBpbXBvcnQgeyBudW1iZXJXaXRoQ29tbWFzIH0gZnJvbSBcIi4uL2xpYnMvdXRpbHNcIjtcbiAgZXhwb3J0IGxldCB0b29sdGlwRGF0YTtcbiAgZXhwb3J0IGxldCBncmlkO1xuICAvLyBleHBvcnQgbGV0IHdpZHRoO1xuXG4gIGxldCB0b29sdGlwV2lkdGg7XG4gIGxldCB0b29sdGlwSGVpZ2h0O1xuICBsZXQgd2lkdGg7XG4gIGxldCBoZWlnaHQ7XG5cbiAgY29uc3QgeE51ZGdlID0gZ3JpZCA/IDUgOiA2NTtcbiAgY29uc3QgeU51ZGdlID0gZ3JpZCA/IDQ1IDogOTU7XG5cbiAgLy8gSWYgdGhlIHggcG9zaXRpb24gKyB0aGUgdG9vbHRpcCB3aWR0aCBleGNlZWRzIHRoZSBjaGFydCB3aWR0aCwgb2Zmc2V0IGJhY2t3YXJkIHRvIHByZXZlbnQgb3ZlcmZsb3dcbiAgJDogeFBvc2l0aW9uID1cbiAgICB0b29sdGlwRGF0YS54ICsgdG9vbHRpcFdpZHRoICsgeE51ZGdlID4gd2lkdGggPyB0b29sdGlwRGF0YS54IC0gdG9vbHRpcFdpZHRoIC0geE51ZGdlIDogdG9vbHRpcERhdGEueCArIHhOdWRnZTtcbiAgJDogeVBvc2l0aW9uID1cbiAgICB0b29sdGlwRGF0YS55ICsgdG9vbHRpcEhlaWdodCArIHlOdWRnZSA+IGhlaWdodCA/IHRvb2x0aXBEYXRhLnkgLSB0b29sdGlwSGVpZ2h0IC0geU51ZGdlIDogdG9vbHRpcERhdGEueSAtIHlOdWRnZTtcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOndpbmRvdyBiaW5kOmlubmVyV2lkdGg9e3dpZHRofSBiaW5kOmlubmVySGVpZ2h0PXtoZWlnaHR9IC8+XG5cbjxkaXZcbiAgaW46Zmx5PXt7IHk6IDEwLCBkdXJhdGlvbjogMjAwLCBkZWxheTogMjAwIH19XG4gIG91dDpmYWRlXG4gIGJpbmQ6Y2xpZW50V2lkdGg9e3Rvb2x0aXBXaWR0aH1cbiAgYmluZDpjbGllbnRIZWlnaHQ9e3Rvb2x0aXBIZWlnaHR9XG4gIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC13cmFwcGVyXCJcbiAgc3R5bGU9XCJib3JkZXItbGVmdC1jb2xvcjp7dG9vbHRpcERhdGEuY29sb3J9OyB0b3A6e3lQb3NpdGlvbn1weDsgbGVmdDp7eFBvc2l0aW9ufXB4XCJcbj5cbiAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRvb2x0aXAtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRvb2x0aXAtc2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRvb2x0aXAtdGhlYWRcIj5QYXJ0eTo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS10b29sdGlwLXRkYXRhXCI+e3Rvb2x0aXBEYXRhLnBhcnR5LnBhcnR5X25hbWV9PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRvb2x0aXAtc2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRvb2x0aXAtdGhlYWRcIj5QZXJjZW50YWdlIG9mIFNlYXRzIFdvbiBpbiBMaW1wb3BvPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC1yYW5nZS13cmFwcGVyIGVsZWN0aW9uZW5naW5lLXRvb2x0aXAtdGRhdGFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRvb2x0aXAtcmFuZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC1vdXRlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRvb2x0aXAtaW5uZXJcIlxuICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOnt0b29sdGlwRGF0YS5wYXJ0eS52b3RlX3BlcmN9JTsgYmFja2dyb3VuZDp7dG9vbHRpcERhdGEuY29sb3J9XCJcbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuPiB7TWF0aC5yb3VuZCh0b29sdGlwRGF0YS5wYXJ0eS52b3RlX3BlcmMpfSU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC10aGVhZFwiPlRvdGFsIE51bWJlciBvZiBTZWF0cyBXb24gaW4gTGltcG9wbzwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRvb2x0aXAtdGRhdGFcIj57dG9vbHRpcERhdGEucGFydHkuc2VhdHN9IC8ge3Rvb2x0aXBEYXRhLnRvdGFsX3NlYXRzfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS10b29sdGlwLXNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS10b29sdGlwLXRoZWFkXCI+VG90YWwgVm90ZXM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS10b29sdGlwLXRkYXRhXCI+e251bWJlcldpdGhDb21tYXModG9vbHRpcERhdGEucGFydHkudm90ZXMpfTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5lbGVjdGlvbmVuZ2luZS10b29sdGlwLXdyYXBwZXIge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmOTtcbiAgICBwYWRkaW5nOiAwLjU1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M0YzQ7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDZweDtcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIH1cblxuICAuZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICB9XG4gIC5lbGVjdGlvbmVuZ2luZS10b29sdGlwLXRoZWFkIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICM5OTk0OTQ7XG4gIH1cblxuICAuZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC10ZGF0YSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzdjNGM0O1xuICB9XG5cbiAgLmVsZWN0aW9uZW5naW5lLXRvb2x0aXAtcmFuZ2Utd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC1yYW5nZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTJweDtcbiAgfVxuXG4gIC5lbGVjdGlvbmVuZ2luZS10b29sdGlwLW91dGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgfVxuXG4gIC5lbGVjdGlvbmVuZ2luZS10b29sdGlwLWlubmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDczJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgfVxuXG4gIC5lbGVjdGlvbmVuZ2luZS10b29sdGlwLWNvbnRhaW5lciA+IGRpdjpsYXN0LWNoaWxkIC5lbGVjdGlvbmVuZ2luZS10b29sdGlwLXRkYXRhIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cbiAgLy8gaW1wb3J0IHZvdGUyMDE5IGZyb20gJyRsaWIvZGF0YS92b3Rlcy0yMDE5Lmpzb24nO1xuICBpbXBvcnQgeyByZWdpb25hbFNlYXRBbGxvY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2xpYnMvc2VhdHMuanNcIjtcblxuICBpbXBvcnQgSGV4YWdvbnMgZnJvbSBcIi4vaGV4YWdvbnMuc3ZlbHRlXCI7XG4gIGltcG9ydCBUb29sdGlwIGZyb20gXCIuLi90b29sdGlwLnN2ZWx0ZVwiO1xuXG4gIGV4cG9ydCBsZXQgcGF0aDtcbiAgZXhwb3J0IGxldCBwcm92aW5jZXM7XG4gIGV4cG9ydCBsZXQgZ3JpZDtcbiAgZXhwb3J0IGxldCBkYXRhO1xuXG4gIGxldCB0b29sdGlwRGF0YTtcbiAgbGV0IGNhcnRvZ3JhbV9kYXRhID0ge307XG5cbiAgJDogaW5pdCA9ICgpID0+IHtcbiAgICBjYXJ0b2dyYW1fZGF0YSA9IHByb3ZpbmNlcy5tYXAoKGQpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHBhdGguY2VudHJvaWQoZCk7XG4gICAgICBjb25zdCByZWdpb25fc2VhdCA9IHJlZ2lvbmFsU2VhdEFsbG9jYXRpb24uZmlsdGVyKChlKSA9PiBkLnByb3BlcnRpZXMuUFJPVklOQ0UgPT09IGUucmVnaW9uKVswXTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlX3Jlc3VsdCA9IGRhdGFcbiAgICAgICAgLmZpbHRlcigoZSkgPT4gZC5wcm9wZXJ0aWVzLlBST1ZJTkNFID09PSBlLnByb3ZpbmNlX25hbWUpWzBdXG4gICAgICAgIC5wYXJ0eV9iYWxsb3RfcmVzdWx0cy5maWx0ZXIoKHApID0+IHAuc2VhdHMgPiAwKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlX2lkID0gZC5wcm9wZXJ0aWVzLlBST1ZJTkNFO1xuICAgICAgY29uc3QgcHJvdmluY2VfdG90YWxfc2VhdHMgPSByZWdpb25fc2VhdC5zZWF0O1xuICAgICAgY29uc3QgaGVpZ2h0ID0gNTA7XG4gICAgICBjb25zdCB3aWR0aCA9IDUwO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmluY2VfaWQsXG4gICAgICAgIHByb3ZpbmNlX3RvdGFsX3NlYXRzLFxuICAgICAgICBjb29yZHMsXG4gICAgICAgIHJlZ2lvbl9zZWF0LFxuICAgICAgICBwcm92aW5jZV9yZXN1bHQsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIHg6IGNvb3Jkc1swXSxcbiAgICAgICAgeTogY29vcmRzWzFdLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICAkOiBpbml0KCk7XG48L3NjcmlwdD5cblxuPGRpdiBpZD1cImVsZWN0aW9uZW5naW5lLWNhcnRvZ3JhbVwiIGNsYXNzOmVsZWN0aW9uZW5naW5lLW1iLWdyaWQ9e2dyaWR9PlxuICB7I2VhY2ggY2FydG9ncmFtX2RhdGEgYXMgaGV4YWdvbl9kYXRhfVxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtYmxvY2tcIlxuICAgICAgY2xhc3M6ZWxlY3Rpb25lbmdpbmUtZ3JpZC1hbGlnbmNlbnRlcj17Z3JpZH1cbiAgICAgIHN0eWxlPVwibGVmdDp7aGV4YWdvbl9kYXRhLnggLSBoZXhhZ29uX2RhdGEud2lkdGggLyAyfXB4OyB0b3A6e2hleGFnb25fZGF0YS55IC0gaGV4YWdvbl9kYXRhLmhlaWdodCAvIDJ9cHg7XCJcbiAgICA+XG4gICAgICA8SGV4YWdvbnNcbiAgICAgICAgc2VhdHM9e2hleGFnb25fZGF0YS5wcm92aW5jZV9yZXN1bHR9XG4gICAgICAgIHRvdGFsX3NlYXRzPXtoZXhhZ29uX2RhdGEucHJvdmluY2VfdG90YWxfc2VhdHN9XG4gICAgICAgIHtoZXhhZ29uX2RhdGF9XG4gICAgICAgIHtncmlkfVxuICAgICAgICBiaW5kOnRvb2x0aXBEYXRhXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICB7L2VhY2h9XG48L2Rpdj5cblxueyNpZiB0b29sdGlwRGF0YX1cbiAgPFRvb2x0aXAgYmluZDp0b29sdGlwRGF0YSB7Z3JpZH0gLz5cbnsvaWZ9XG5cbjxzdHlsZT5cbiAgI2VsZWN0aW9uZW5naW5lLWNhcnRvZ3JhbSB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgI2VsZWN0aW9uZW5naW5lLWNhcnRvZ3JhbS5lbGVjdGlvbmVuZ2luZS1tYi1ncmlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICB9XG5cbiAgLmVsZWN0aW9uZW5naW5lLWJsb2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZWxlY3Rpb25lbmdpbmUtYmxvY2suZWxlY3Rpb25lbmdpbmUtZ3JpZC1hbGlnbmNlbnRlciB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgeyBnZW9JZGVudGl0eSwgZ2VvUGF0aCB9IGZyb20gXCJkMy1nZW9cIjtcbiAgaW1wb3J0IENhcnRvZ3JhbVJlc3VsdFNob3cgZnJvbSBcIi4vcmVzdWx0LXZpZXcvY2FydG9ncmFtUmVzdWx0U2hvdy5zdmVsdGVcIjtcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcblxuICBleHBvcnQgbGV0IGRhdGE7XG4gIGV4cG9ydCBsZXQgaW5uZXJXaWR0aDtcblxuICAkOiBncmlkID0gaW5uZXJXaWR0aCA8IDYzMCA/IHRydWUgOiBmYWxzZTtcblxuICBsZXQgd2lkdGggPSA2MDA7XG4gIGxldCBoZWlnaHQgPSA2MDA7XG4gIGxldCBwcm92aW5jZXM7XG4gIGxldCBnZW9fZGF0YTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRNYXAoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vaWVjLWFwaS5yZXZlbmdpbmUuZGFpbHltYXZlcmljay5jby56YS9tYXBzL3NhLXByb3ZpbmNlLnNtYWxsZXN0Lm1pbi5qc29uXCIpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICBnZW9fZGF0YSA9IGF3YWl0IGdldE1hcCgpO1xuICAgIHByb3ZpbmNlcyA9IGdlb19kYXRhLmZlYXR1cmVzO1xuICB9KTtcblxuICAvKipcbiAgICogZ2VvSWRlbnRpdHkgLSBuZXcgZ2VvZ3JhcGhpYyBwcm9qZWN0aW9uIHdpdGggYW4gaWRlbnRpdHkgdHJhbnNmb3JtYXRpb25cbiAgICogWzIwLCAyMF0gLSBNaW5pbXVtIFggYW5kIFkgY29vcmRpbmF0ZXMgZm9yIHRoZSBtYXBcbiAgICogW3dpZHRoLCBoZWlnaHRdIC0gc2V0IHRoZSBtYXAgZGltZW5zaW9uc1xuICAgKiBkYXRhIC0gRGF0YSB0byBmaXQgdGhlIGV4dGVudFxuICAgKi9cbiAgJDogcHJvamVjdGlvbiA9IGdlb0lkZW50aXR5KClcbiAgICAucmVmbGVjdFkodHJ1ZSlcbiAgICAuZml0RXh0ZW50KFxuICAgICAgW1xuICAgICAgICBbMjAsIDIwXSxcbiAgICAgICAgW3dpZHRoLCBoZWlnaHRdLFxuICAgICAgXSxcbiAgICAgIGdlb19kYXRhXG4gICAgKTtcblxuICAvLyBHZW9ncmFwaGljIHBhdGggZ2VuZXJhdG9yIGJhc2VkIG9uIHRoZSBwcm9qZWN0aW9uIGNvbmZpZ3VyZWQgYWJvdmUuXG4gICQ6IHBhdGggPSBnZW9QYXRoKHByb2plY3Rpb24pO1xuPC9zY3JpcHQ+XG5cbnsjaWYgcHJvdmluY2VzfVxuICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtc3ZnLXdyYXBwZXJcIj5cbiAgICB7I2lmICFncmlkfVxuICAgICAgPHN2ZyBjbGFzcz1cImVsZWN0aW9uZW5naW5lLW1hcC1zdmdcIiB7d2lkdGh9IHtoZWlnaHR9PlxuICAgICAgICA8IS0tIENvdW50cmllcyAtLT5cbiAgICAgICAgPGcgaWQ9XCJzYU1hcFwiPlxuICAgICAgICAgIHsjZWFjaCBwcm92aW5jZXMgYXMgcHJvdmluY2V9XG4gICAgICAgICAgICA8cGF0aCBkPXtwYXRoKHByb3ZpbmNlKX0gZmlsbD1cIiNFQ0VDRUNcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS13aWR0aD1cIjAuOTRcIiAvPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgey9pZn1cblxuICAgIDxDYXJ0b2dyYW1SZXN1bHRTaG93IHtwcm92aW5jZXN9IHtwYXRofSB7Z3JpZH0gYmluZDpkYXRhIC8+XG4gIDwvZGl2Plxuey9pZn1cblxuPHN0eWxlPlxuICAuZWxlY3Rpb25lbmdpbmUtc3ZnLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbi10b3A6IC0xLjc1cmVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMHB4LCAxMHB4KTtcbiAgfVxuXG4gIC5lbGVjdGlvbmVuZ2luZS1tYXAtc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICBAbWVkaWEgKHdpZHRoIDwgNjMwcHgpIHtcbiAgICAuZWxlY3Rpb25lbmdpbmUtc3ZnLXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG4gIC8vIEB0cy1ub2NoZWNrXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgcmV3cml0dGVuIHRvIHVzZSB0aGUgcGFydGllcyB0aGF0IGFyZSBpbiB0aGUgZGF0YVxuICBpbXBvcnQgeyBwYXJ0eUNvbG9ycywgZ2VuZXJpY0NvbG9ycyB9IGZyb20gXCJAZWxlY3Rpb24tZW5naW5lL2NvbW1vbi9jb2xvci1zY2hlbWUuanNvblwiO1xuICBpbXBvcnQgeyBwYXJ0eUNvbG9yIH0gZnJvbSBcIkBlbGVjdGlvbi1lbmdpbmUvY29tbW9uL2NvbG9yc1wiO1xuXG4gIGV4cG9ydCBsZXQgZGF0YTtcblxuICBsZXQgc29ydGVkUGFydHlTZWF0cztcblxuICBsZXQgY29sb3JzID0gW107XG4gIGZvciAoY29uc3QgW3BhcnR5LCBjb2xvcl0gb2YgT2JqZWN0LmVudHJpZXMocGFydHlDb2xvcnMpKSB7XG4gICAgY29sb3JzLnB1c2goeyBwYXJ0eSwgY29sb3IgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjdWxhdGVUb3RhbFNlYXRzKGRhdGEpIHtcbiAgICBjb25zdCBwYXJ0eVNlYXRzID0ge307XG5cbiAgICBkYXRhLmZvckVhY2goKHByb3ZpbmNlKSA9PiB7XG4gICAgICBwcm92aW5jZS5wYXJ0eV9iYWxsb3RfcmVzdWx0cy5mb3JFYWNoKChwYXJ0eSkgPT4ge1xuICAgICAgICBpZiAocGFydHlTZWF0c1twYXJ0eS5wYXJ0eV9hYmJyZXZpYXRpb25dKSB7XG4gICAgICAgICAgcGFydHlTZWF0c1twYXJ0eS5wYXJ0eV9hYmJyZXZpYXRpb25dICs9IHBhcnR5LnNlYXRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnR5U2VhdHNbcGFydHkucGFydHlfYWJicmV2aWF0aW9uXSA9IHBhcnR5LnNlYXRzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJ0eVNlYXRzO1xuICB9XG5cbiAgJDogaW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCBzZWF0cyA9IGNhbGN1bGF0ZVRvdGFsU2VhdHMoZGF0YSk7XG4gICAgc29ydGVkUGFydHlTZWF0cyA9IE9iamVjdC5rZXlzKHNlYXRzKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IHNlYXRzW2JdIC0gc2VhdHNbYV0pXG4gICAgICAubWFwKChwYXJ0eSwgaW5kZXgpID0+ICh7IG5hbWU6IHBhcnR5LCBzZWF0czogc2VhdHNbcGFydHldLCBjb2xvcjogcGFydHlDb2xvcihwYXJ0eSwgaW5kZXgpIH0pKVxuICAgICAgLmZpbHRlcigocGFydHkpID0+IHBhcnR5LnNlYXRzID4gMCk7XG5cbiAgICByZXR1cm4gc29ydGVkUGFydHlTZWF0cztcbiAgfTtcblxuICAkOiBpbml0KCk7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cImxlZ2VuZC13cmFwcGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS1sZWdlbmQtaGVhZGluZ1wiPkxlZ2VuZDogUGFydHkgQ29sb3JzPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsZWdlbmRcIj5cbiAgICB7I2VhY2ggc29ydGVkUGFydHlTZWF0cyBhcyBzZWF0fVxuICAgICAgPGRpdiBjbGFzcz1cInBhcnR5LXdyYXBwZXJcIj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxM3B4XCI+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEsIDEpXCIgZmlsbD17c2VhdC5jb2xvcn0gZmlsbC1ydWxlPVwibm9uemVyb1wiIHN0cm9rZT1cIiM0NDQ0NDRcIj5cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjUsMCAxMCwyLjc1IDEwLDguMjUgNSwxMSAwLDguMjUgMCwyLjc1XCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS1sZWdlbmQtcGFydHluYW1lXCI+e3NlYXQubmFtZX0gW3tzZWF0LnNlYXRzfV08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIHsvZWFjaH1cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICAubGVnZW5kLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHotaW5kZXg6IDk5O1xuICB9XG4gIC5sZWdlbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmMGYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgfVxuXG4gIC5wYXJ0eS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gIC5lbGVjdGlvbmVuZ2luZS1sZWdlbmQtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICB9XG5cbiAgLmVsZWN0aW9uZW5naW5lLWxlZ2VuZC1wYXJ0eW5hbWUge1xuICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cbiAgaW1wb3J0IEJhY2tncm91bmRNYXAgZnJvbSBcIi4uL2JhY2tncm91bmRNYXAuc3ZlbHRlXCI7XG4gIGltcG9ydCBMZWdlbmQgZnJvbSBcIi4uL2xlZ2VuZC5zdmVsdGVcIjtcblxuICBleHBvcnQgbGV0IGRhdGE7XG4gIGV4cG9ydCBsZXQgaW5uZXJXaWR0aDtcbjwvc2NyaXB0PlxuXG57I2lmIGRhdGF9XG4gIDxMZWdlbmQgYmluZDpkYXRhIC8+XG57L2lmfVxuXG48cD5cbiAgMjAwIFJlZ2lvbmFsIFNlYXRzLCBkaXZpZGVkIGJldHdlZW4gdGhlIHJlZ2lvbnMqIGJhc2VkIG9uIHJlZ2lzdGVyZWQgcG9wdWxhdGlvbiwgcHJpb3IgdG8gdGhlIGVsZWN0aW9ucy4gVGhlIHJlZ2lvbnNcbiAgYXJlIGNvbnRlc3RlZCBieSBwYXJ0aWVzIGFuZCBpbmRlcGVuZGVudCBjYW5kaWRhdGVzLlxuPC9wPlxuXG57I2lmIGRhdGF9XG4gIDxCYWNrZ3JvdW5kTWFwIHtpbm5lcldpZHRofSBiaW5kOmRhdGEgLz5cbnsvaWZ9XG5cbjxzdHlsZT5cbiAgQG1lZGlhICh3aWR0aCA8IDQwMHB4KSB7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG4iLCJleHBvcnQgZnVuY3Rpb24gaW5pdFJhbmdlKGRvbWFpbiwgcmFuZ2UpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiBicmVhaztcbiAgICBjYXNlIDE6IHRoaXMucmFuZ2UoZG9tYWluKTsgYnJlYWs7XG4gICAgZGVmYXVsdDogdGhpcy5yYW5nZShyYW5nZSkuZG9tYWluKGRvbWFpbik7IGJyZWFrO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEludGVycG9sYXRvcihkb21haW4sIGludGVycG9sYXRvcikge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IGJyZWFrO1xuICAgIGNhc2UgMToge1xuICAgICAgaWYgKHR5cGVvZiBkb21haW4gPT09IFwiZnVuY3Rpb25cIikgdGhpcy5pbnRlcnBvbGF0b3IoZG9tYWluKTtcbiAgICAgIGVsc2UgdGhpcy5yYW5nZShkb21haW4pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRoaXMuZG9tYWluKGRvbWFpbik7XG4gICAgICBpZiAodHlwZW9mIGludGVycG9sYXRvciA9PT0gXCJmdW5jdGlvblwiKSB0aGlzLmludGVycG9sYXRvcihpbnRlcnBvbGF0b3IpO1xuICAgICAgZWxzZSB0aGlzLnJhbmdlKGludGVycG9sYXRvcik7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb25zdHJ1Y3RvciwgZmFjdG9yeSwgcHJvdG90eXBlKSB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGZhY3RvcnkucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChwYXJlbnQsIGRlZmluaXRpb24pIHtcbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSk7XG4gIGZvciAodmFyIGtleSBpbiBkZWZpbml0aW9uKSBwcm90b3R5cGVba2V5XSA9IGRlZmluaXRpb25ba2V5XTtcbiAgcmV0dXJuIHByb3RvdHlwZTtcbn1cbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3IoKSB7fVxuXG5leHBvcnQgdmFyIGRhcmtlciA9IDAuNztcbmV4cG9ydCB2YXIgYnJpZ2h0ZXIgPSAxIC8gZGFya2VyO1xuXG52YXIgcmVJID0gXCJcXFxccyooWystXT9cXFxcZCspXFxcXHMqXCIsXG4gICAgcmVOID0gXCJcXFxccyooWystXT8oPzpcXFxcZCpcXFxcLik/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pXFxcXHMqXCIsXG4gICAgcmVQID0gXCJcXFxccyooWystXT8oPzpcXFxcZCpcXFxcLik/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pJVxcXFxzKlwiLFxuICAgIHJlSGV4ID0gL14jKFswLTlhLWZdezMsOH0pJC8sXG4gICAgcmVSZ2JJbnRlZ2VyID0gbmV3IFJlZ0V4cChgXnJnYlxcXFwoJHtyZUl9LCR7cmVJfSwke3JlSX1cXFxcKSRgKSxcbiAgICByZVJnYlBlcmNlbnQgPSBuZXcgUmVnRXhwKGBecmdiXFxcXCgke3JlUH0sJHtyZVB9LCR7cmVQfVxcXFwpJGApLFxuICAgIHJlUmdiYUludGVnZXIgPSBuZXcgUmVnRXhwKGBecmdiYVxcXFwoJHtyZUl9LCR7cmVJfSwke3JlSX0sJHtyZU59XFxcXCkkYCksXG4gICAgcmVSZ2JhUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5yZ2JhXFxcXCgke3JlUH0sJHtyZVB9LCR7cmVQfSwke3JlTn1cXFxcKSRgKSxcbiAgICByZUhzbFBlcmNlbnQgPSBuZXcgUmVnRXhwKGBeaHNsXFxcXCgke3JlTn0sJHtyZVB9LCR7cmVQfVxcXFwpJGApLFxuICAgIHJlSHNsYVBlcmNlbnQgPSBuZXcgUmVnRXhwKGBeaHNsYVxcXFwoJHtyZU59LCR7cmVQfSwke3JlUH0sJHtyZU59XFxcXCkkYCk7XG5cbnZhciBuYW1lZCA9IHtcbiAgYWxpY2VibHVlOiAweGYwZjhmZixcbiAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcbiAgYXF1YTogMHgwMGZmZmYsXG4gIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxuICBhenVyZTogMHhmMGZmZmYsXG4gIGJlaWdlOiAweGY1ZjVkYyxcbiAgYmlzcXVlOiAweGZmZTRjNCxcbiAgYmxhY2s6IDB4MDAwMDAwLFxuICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXG4gIGJsdWU6IDB4MDAwMGZmLFxuICBibHVldmlvbGV0OiAweDhhMmJlMixcbiAgYnJvd246IDB4YTUyYTJhLFxuICBidXJseXdvb2Q6IDB4ZGViODg3LFxuICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxuICBjaGFydHJldXNlOiAweDdmZmYwMCxcbiAgY2hvY29sYXRlOiAweGQyNjkxZSxcbiAgY29yYWw6IDB4ZmY3ZjUwLFxuICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXG4gIGNvcm5zaWxrOiAweGZmZjhkYyxcbiAgY3JpbXNvbjogMHhkYzE0M2MsXG4gIGN5YW46IDB4MDBmZmZmLFxuICBkYXJrYmx1ZTogMHgwMDAwOGIsXG4gIGRhcmtjeWFuOiAweDAwOGI4YixcbiAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXG4gIGRhcmtncmF5OiAweGE5YTlhOSxcbiAgZGFya2dyZWVuOiAweDAwNjQwMCxcbiAgZGFya2dyZXk6IDB4YTlhOWE5LFxuICBkYXJra2hha2k6IDB4YmRiNzZiLFxuICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXG4gIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcbiAgZGFya29yYW5nZTogMHhmZjhjMDAsXG4gIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxuICBkYXJrcmVkOiAweDhiMDAwMCxcbiAgZGFya3NhbG1vbjogMHhlOTk2N2EsXG4gIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXG4gIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxuICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZixcbiAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXG4gIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxuICBkYXJrdmlvbGV0OiAweDk0MDBkMyxcbiAgZGVlcHBpbms6IDB4ZmYxNDkzLFxuICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXG4gIGRpbWdyYXk6IDB4Njk2OTY5LFxuICBkaW1ncmV5OiAweDY5Njk2OSxcbiAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXG4gIGZpcmVicmljazogMHhiMjIyMjIsXG4gIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcbiAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxuICBmdWNoc2lhOiAweGZmMDBmZixcbiAgZ2FpbnNib3JvOiAweGRjZGNkYyxcbiAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXG4gIGdvbGQ6IDB4ZmZkNzAwLFxuICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxuICBncmF5OiAweDgwODA4MCxcbiAgZ3JlZW46IDB4MDA4MDAwLFxuICBncmVlbnllbGxvdzogMHhhZGZmMmYsXG4gIGdyZXk6IDB4ODA4MDgwLFxuICBob25leWRldzogMHhmMGZmZjAsXG4gIGhvdHBpbms6IDB4ZmY2OWI0LFxuICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxuICBpbmRpZ286IDB4NGIwMDgyLFxuICBpdm9yeTogMHhmZmZmZjAsXG4gIGtoYWtpOiAweGYwZTY4YyxcbiAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxuICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNSxcbiAgbGF3bmdyZWVuOiAweDdjZmMwMCxcbiAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcbiAgbGlnaHRibHVlOiAweGFkZDhlNixcbiAgbGlnaHRjb3JhbDogMHhmMDgwODAsXG4gIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMixcbiAgbGlnaHRncmF5OiAweGQzZDNkMyxcbiAgbGlnaHRncmVlbjogMHg5MGVlOTAsXG4gIGxpZ2h0Z3JleTogMHhkM2QzZDMsXG4gIGxpZ2h0cGluazogMHhmZmI2YzEsXG4gIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcbiAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWEsXG4gIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXG4gIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcbiAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5LFxuICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXG4gIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcbiAgbGltZTogMHgwMGZmMDAsXG4gIGxpbWVncmVlbjogMHgzMmNkMzIsXG4gIGxpbmVuOiAweGZhZjBlNixcbiAgbWFnZW50YTogMHhmZjAwZmYsXG4gIG1hcm9vbjogMHg4MDAwMDAsXG4gIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxuICBtZWRpdW1ibHVlOiAweDAwMDBjZCxcbiAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcbiAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcbiAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxLFxuICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxuICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXG4gIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2MsXG4gIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXG4gIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXG4gIG1pbnRjcmVhbTogMHhmNWZmZmEsXG4gIG1pc3R5cm9zZTogMHhmZmU0ZTEsXG4gIG1vY2Nhc2luOiAweGZmZTRiNSxcbiAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkLFxuICBuYXZ5OiAweDAwMDA4MCxcbiAgb2xkbGFjZTogMHhmZGY1ZTYsXG4gIG9saXZlOiAweDgwODAwMCxcbiAgb2xpdmVkcmFiOiAweDZiOGUyMyxcbiAgb3JhbmdlOiAweGZmYTUwMCxcbiAgb3JhbmdlcmVkOiAweGZmNDUwMCxcbiAgb3JjaGlkOiAweGRhNzBkNixcbiAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXG4gIHBhbGVncmVlbjogMHg5OGZiOTgsXG4gIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxuICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcbiAgcGFwYXlhd2hpcDogMHhmZmVmZDUsXG4gIHBlYWNocHVmZjogMHhmZmRhYjksXG4gIHBlcnU6IDB4Y2Q4NTNmLFxuICBwaW5rOiAweGZmYzBjYixcbiAgcGx1bTogMHhkZGEwZGQsXG4gIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxuICBwdXJwbGU6IDB4ODAwMDgwLFxuICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcbiAgcmVkOiAweGZmMDAwMCxcbiAgcm9zeWJyb3duOiAweGJjOGY4ZixcbiAgcm95YWxibHVlOiAweDQxNjllMSxcbiAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxuICBzYWxtb246IDB4ZmE4MDcyLFxuICBzYW5keWJyb3duOiAweGY0YTQ2MCxcbiAgc2VhZ3JlZW46IDB4MmU4YjU3LFxuICBzZWFzaGVsbDogMHhmZmY1ZWUsXG4gIHNpZW5uYTogMHhhMDUyMmQsXG4gIHNpbHZlcjogMHhjMGMwYzAsXG4gIHNreWJsdWU6IDB4ODdjZWViLFxuICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxuICBzbGF0ZWdyYXk6IDB4NzA4MDkwLFxuICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxuICBzbm93OiAweGZmZmFmYSxcbiAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmLFxuICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxuICB0YW46IDB4ZDJiNDhjLFxuICB0ZWFsOiAweDAwODA4MCxcbiAgdGhpc3RsZTogMHhkOGJmZDgsXG4gIHRvbWF0bzogMHhmZjYzNDcsXG4gIHR1cnF1b2lzZTogMHg0MGUwZDAsXG4gIHZpb2xldDogMHhlZTgyZWUsXG4gIHdoZWF0OiAweGY1ZGViMyxcbiAgd2hpdGU6IDB4ZmZmZmZmLFxuICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcbiAgeWVsbG93OiAweGZmZmYwMCxcbiAgeWVsbG93Z3JlZW46IDB4OWFjZDMyXG59O1xuXG5kZWZpbmUoQ29sb3IsIGNvbG9yLCB7XG4gIGNvcHkoY2hhbm5lbHMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgdGhpcy5jb25zdHJ1Y3RvciwgdGhpcywgY2hhbm5lbHMpO1xuICB9LFxuICBkaXNwbGF5YWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKS5kaXNwbGF5YWJsZSgpO1xuICB9LFxuICBoZXg6IGNvbG9yX2Zvcm1hdEhleCwgLy8gRGVwcmVjYXRlZCEgVXNlIGNvbG9yLmZvcm1hdEhleC5cbiAgZm9ybWF0SGV4OiBjb2xvcl9mb3JtYXRIZXgsXG4gIGZvcm1hdEhleDg6IGNvbG9yX2Zvcm1hdEhleDgsXG4gIGZvcm1hdEhzbDogY29sb3JfZm9ybWF0SHNsLFxuICBmb3JtYXRSZ2I6IGNvbG9yX2Zvcm1hdFJnYixcbiAgdG9TdHJpbmc6IGNvbG9yX2Zvcm1hdFJnYlxufSk7XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhleCgpIHtcbiAgcmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0SGV4KCk7XG59XG5cbmZ1bmN0aW9uIGNvbG9yX2Zvcm1hdEhleDgoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleDgoKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SHNsKCkge1xuICByZXR1cm4gaHNsQ29udmVydCh0aGlzKS5mb3JtYXRIc2woKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0UmdiKCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRSZ2IoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3IoZm9ybWF0KSB7XG4gIHZhciBtLCBsO1xuICBmb3JtYXQgPSAoZm9ybWF0ICsgXCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAobSA9IHJlSGV4LmV4ZWMoZm9ybWF0KSkgPyAobCA9IG1bMV0ubGVuZ3RoLCBtID0gcGFyc2VJbnQobVsxXSwgMTYpLCBsID09PSA2ID8gcmdibihtKSAvLyAjZmYwMDAwXG4gICAgICA6IGwgPT09IDMgPyBuZXcgUmdiKChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4ZjApLCAobSA+PiA0ICYgMHhmKSB8IChtICYgMHhmMCksICgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZiksIDEpIC8vICNmMDBcbiAgICAgIDogbCA9PT0gOCA/IHJnYmEobSA+PiAyNCAmIDB4ZmYsIG0gPj4gMTYgJiAweGZmLCBtID4+IDggJiAweGZmLCAobSAmIDB4ZmYpIC8gMHhmZikgLy8gI2ZmMDAwMDAwXG4gICAgICA6IGwgPT09IDQgPyByZ2JhKChtID4+IDEyICYgMHhmKSB8IChtID4+IDggJiAweGYwKSwgKG0gPj4gOCAmIDB4ZikgfCAobSA+PiA0ICYgMHhmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKCgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZikpIC8gMHhmZikgLy8gI2YwMDBcbiAgICAgIDogbnVsbCkgLy8gaW52YWxpZCBoZXhcbiAgICAgIDogKG0gPSByZVJnYkludGVnZXIuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSwgbVsyXSwgbVszXSwgMSkgLy8gcmdiKDI1NSwgMCwgMClcbiAgICAgIDogKG0gPSByZVJnYlBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgMSkgLy8gcmdiKDEwMCUsIDAlLCAwJSlcbiAgICAgIDogKG0gPSByZVJnYmFJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pIC8vIHJnYmEoMjU1LCAwLCAwLCAxKVxuICAgICAgOiAobSA9IHJlUmdiYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgbVs0XSkgLy8gcmdiKDEwMCUsIDAlLCAwJSwgMSlcbiAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgMSkgLy8gaHNsKDEyMCwgNTAlLCA1MCUpXG4gICAgICA6IChtID0gcmVIc2xhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCBtWzRdKSAvLyBoc2xhKDEyMCwgNTAlLCA1MCUsIDEpXG4gICAgICA6IG5hbWVkLmhhc093blByb3BlcnR5KGZvcm1hdCkgPyByZ2JuKG5hbWVkW2Zvcm1hdF0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICA6IGZvcm1hdCA9PT0gXCJ0cmFuc3BhcmVudFwiID8gbmV3IFJnYihOYU4sIE5hTiwgTmFOLCAwKVxuICAgICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiByZ2JuKG4pIHtcbiAgcmV0dXJuIG5ldyBSZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmLCAxKTtcbn1cblxuZnVuY3Rpb24gcmdiYShyLCBnLCBiLCBhKSB7XG4gIGlmIChhIDw9IDApIHIgPSBnID0gYiA9IE5hTjtcbiAgcmV0dXJuIG5ldyBSZ2IociwgZywgYiwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JDb252ZXJ0KG8pIHtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgUmdiO1xuICBvID0gby5yZ2IoKTtcbiAgcmV0dXJuIG5ldyBSZ2Ioby5yLCBvLmcsIG8uYiwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gcmdiQ29udmVydChyKSA6IG5ldyBSZ2IociwgZywgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5yID0gK3I7XG4gIHRoaXMuZyA9ICtnO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShSZ2IsIHJnYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNsYW1wKCkge1xuICAgIHJldHVybiBuZXcgUmdiKGNsYW1waSh0aGlzLnIpLCBjbGFtcGkodGhpcy5nKSwgY2xhbXBpKHRoaXMuYiksIGNsYW1wYSh0aGlzLm9wYWNpdHkpKTtcbiAgfSxcbiAgZGlzcGxheWFibGUoKSB7XG4gICAgcmV0dXJuICgtMC41IDw9IHRoaXMuciAmJiB0aGlzLnIgPCAyNTUuNSlcbiAgICAgICAgJiYgKC0wLjUgPD0gdGhpcy5nICYmIHRoaXMuZyA8IDI1NS41KVxuICAgICAgICAmJiAoLTAuNSA8PSB0aGlzLmIgJiYgdGhpcy5iIDwgMjU1LjUpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH0sXG4gIGhleDogcmdiX2Zvcm1hdEhleCwgLy8gRGVwcmVjYXRlZCEgVXNlIGNvbG9yLmZvcm1hdEhleC5cbiAgZm9ybWF0SGV4OiByZ2JfZm9ybWF0SGV4LFxuICBmb3JtYXRIZXg4OiByZ2JfZm9ybWF0SGV4OCxcbiAgZm9ybWF0UmdiOiByZ2JfZm9ybWF0UmdiLFxuICB0b1N0cmluZzogcmdiX2Zvcm1hdFJnYlxufSkpO1xuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4KCkge1xuICByZXR1cm4gYCMke2hleCh0aGlzLnIpfSR7aGV4KHRoaXMuZyl9JHtoZXgodGhpcy5iKX1gO1xufVxuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4OCgpIHtcbiAgcmV0dXJuIGAjJHtoZXgodGhpcy5yKX0ke2hleCh0aGlzLmcpfSR7aGV4KHRoaXMuYil9JHtoZXgoKGlzTmFOKHRoaXMub3BhY2l0eSkgPyAxIDogdGhpcy5vcGFjaXR5KSAqIDI1NSl9YDtcbn1cblxuZnVuY3Rpb24gcmdiX2Zvcm1hdFJnYigpIHtcbiAgY29uc3QgYSA9IGNsYW1wYSh0aGlzLm9wYWNpdHkpO1xuICByZXR1cm4gYCR7YSA9PT0gMSA/IFwicmdiKFwiIDogXCJyZ2JhKFwifSR7Y2xhbXBpKHRoaXMucil9LCAke2NsYW1waSh0aGlzLmcpfSwgJHtjbGFtcGkodGhpcy5iKX0ke2EgPT09IDEgPyBcIilcIiA6IGAsICR7YX0pYH1gO1xufVxuXG5mdW5jdGlvbiBjbGFtcGEob3BhY2l0eSkge1xuICByZXR1cm4gaXNOYU4ob3BhY2l0eSkgPyAxIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgb3BhY2l0eSkpO1xufVxuXG5mdW5jdGlvbiBjbGFtcGkodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgTWF0aC5yb3VuZCh2YWx1ZSkgfHwgMCkpO1xufVxuXG5mdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgdmFsdWUgPSBjbGFtcGkodmFsdWUpO1xuICByZXR1cm4gKHZhbHVlIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgdmFsdWUudG9TdHJpbmcoMTYpO1xufVxuXG5mdW5jdGlvbiBoc2xhKGgsIHMsIGwsIGEpIHtcbiAgaWYgKGEgPD0gMCkgaCA9IHMgPSBsID0gTmFOO1xuICBlbHNlIGlmIChsIDw9IDAgfHwgbCA+PSAxKSBoID0gcyA9IE5hTjtcbiAgZWxzZSBpZiAocyA8PSAwKSBoID0gTmFOO1xuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG5ldyBIc2woby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgSHNsO1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG87XG4gIG8gPSBvLnJnYigpO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgIGggPSBOYU4sXG4gICAgICBzID0gbWF4IC0gbWluLFxuICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgaWYgKHMpIHtcbiAgICBpZiAociA9PT0gbWF4KSBoID0gKGcgLSBiKSAvIHMgKyAoZyA8IGIpICogNjtcbiAgICBlbHNlIGlmIChnID09PSBtYXgpIGggPSAoYiAtIHIpIC8gcyArIDI7XG4gICAgZWxzZSBoID0gKHIgLSBnKSAvIHMgKyA0O1xuICAgIHMgLz0gbCA8IDAuNSA/IG1heCArIG1pbiA6IDIgLSBtYXggLSBtaW47XG4gICAgaCAqPSA2MDtcbiAgfSBlbHNlIHtcbiAgICBzID0gbCA+IDAgJiYgbCA8IDEgPyAwIDogaDtcbiAgfVxuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHNsKGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoc2xDb252ZXJ0KGgpIDogbmV3IEhzbChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmZ1bmN0aW9uIEhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLnMgPSArcztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoSHNsLCBoc2wsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2IoKSB7XG4gICAgdmFyIGggPSB0aGlzLmggJSAzNjAgKyAodGhpcy5oIDwgMCkgKiAzNjAsXG4gICAgICAgIHMgPSBpc05hTihoKSB8fCBpc05hTih0aGlzLnMpID8gMCA6IHRoaXMucyxcbiAgICAgICAgbCA9IHRoaXMubCxcbiAgICAgICAgbTIgPSBsICsgKGwgPCAwLjUgPyBsIDogMSAtIGwpICogcyxcbiAgICAgICAgbTEgPSAyICogbCAtIG0yO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgaHNsMnJnYihoID49IDI0MCA/IGggLSAyNDAgOiBoICsgMTIwLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoIDwgMTIwID8gaCArIDI0MCA6IGggLSAxMjAsIG0xLCBtMiksXG4gICAgICB0aGlzLm9wYWNpdHlcbiAgICApO1xuICB9LFxuICBjbGFtcCgpIHtcbiAgICByZXR1cm4gbmV3IEhzbChjbGFtcGgodGhpcy5oKSwgY2xhbXB0KHRoaXMucyksIGNsYW1wdCh0aGlzLmwpLCBjbGFtcGEodGhpcy5vcGFjaXR5KSk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiAoMCA8PSB0aGlzLnMgJiYgdGhpcy5zIDw9IDEgfHwgaXNOYU4odGhpcy5zKSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5sICYmIHRoaXMubCA8PSAxKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9LFxuICBmb3JtYXRIc2woKSB7XG4gICAgY29uc3QgYSA9IGNsYW1wYSh0aGlzLm9wYWNpdHkpO1xuICAgIHJldHVybiBgJHthID09PSAxID8gXCJoc2woXCIgOiBcImhzbGEoXCJ9JHtjbGFtcGgodGhpcy5oKX0sICR7Y2xhbXB0KHRoaXMucykgKiAxMDB9JSwgJHtjbGFtcHQodGhpcy5sKSAqIDEwMH0lJHthID09PSAxID8gXCIpXCIgOiBgLCAke2F9KWB9YDtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBjbGFtcGgodmFsdWUpIHtcbiAgdmFsdWUgPSAodmFsdWUgfHwgMCkgJSAzNjA7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyB2YWx1ZSArIDM2MCA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGFtcHQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlIHx8IDApKTtcbn1cblxuLyogRnJvbSBGdkQgMTMuMzcsIENTUyBDb2xvciBNb2R1bGUgTGV2ZWwgMyAqL1xuZnVuY3Rpb24gaHNsMnJnYihoLCBtMSwgbTIpIHtcbiAgcmV0dXJuIChoIDwgNjAgPyBtMSArIChtMiAtIG0xKSAqIGggLyA2MFxuICAgICAgOiBoIDwgMTgwID8gbTJcbiAgICAgIDogaCA8IDI0MCA/IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIGgpIC8gNjBcbiAgICAgIDogbTEpICogMjU1O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgeCA9PiAoKSA9PiB4O1xuIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmZ1bmN0aW9uIGxpbmVhcihhLCBkKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKyB0ICogZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXhwb25lbnRpYWwoYSwgYiwgeSkge1xuICByZXR1cm4gYSA9IE1hdGgucG93KGEsIHkpLCBiID0gTWF0aC5wb3coYiwgeSkgLSBhLCB5ID0gMSAvIHksIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coYSArIHQgKiBiLCB5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1ZShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQgPiAxODAgfHwgZCA8IC0xODAgPyBkIC0gMzYwICogTWF0aC5yb3VuZChkIC8gMzYwKSA6IGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1tYSh5KSB7XG4gIHJldHVybiAoeSA9ICt5KSA9PT0gMSA/IG5vZ2FtbWEgOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGIgLSBhID8gZXhwb25lbnRpYWwoYSwgYiwgeSkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9nYW1tYShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG4iLCJpbXBvcnQge3JnYiBhcyBjb2xvclJnYn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgYmFzaXMgZnJvbSBcIi4vYmFzaXMuanNcIjtcbmltcG9ydCBiYXNpc0Nsb3NlZCBmcm9tIFwiLi9iYXNpc0Nsb3NlZC5qc1wiO1xuaW1wb3J0IG5vZ2FtbWEsIHtnYW1tYX0gZnJvbSBcIi4vY29sb3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHJnYkdhbW1hKHkpIHtcbiAgdmFyIGNvbG9yID0gZ2FtbWEoeSk7XG5cbiAgZnVuY3Rpb24gcmdiKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgciA9IGNvbG9yKChzdGFydCA9IGNvbG9yUmdiKHN0YXJ0KSkuciwgKGVuZCA9IGNvbG9yUmdiKGVuZCkpLnIpLFxuICAgICAgICBnID0gY29sb3Ioc3RhcnQuZywgZW5kLmcpLFxuICAgICAgICBiID0gY29sb3Ioc3RhcnQuYiwgZW5kLmIpLFxuICAgICAgICBvcGFjaXR5ID0gbm9nYW1tYShzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LnIgPSByKHQpO1xuICAgICAgc3RhcnQuZyA9IGcodCk7XG4gICAgICBzdGFydC5iID0gYih0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG5cbiAgcmdiLmdhbW1hID0gcmdiR2FtbWE7XG5cbiAgcmV0dXJuIHJnYjtcbn0pKDEpO1xuXG5mdW5jdGlvbiByZ2JTcGxpbmUoc3BsaW5lKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICB2YXIgbiA9IGNvbG9ycy5sZW5ndGgsXG4gICAgICAgIHIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGcgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGksIGNvbG9yO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbG9yID0gY29sb3JSZ2IoY29sb3JzW2ldKTtcbiAgICAgIHJbaV0gPSBjb2xvci5yIHx8IDA7XG4gICAgICBnW2ldID0gY29sb3IuZyB8fCAwO1xuICAgICAgYltpXSA9IGNvbG9yLmIgfHwgMDtcbiAgICB9XG4gICAgciA9IHNwbGluZShyKTtcbiAgICBnID0gc3BsaW5lKGcpO1xuICAgIGIgPSBzcGxpbmUoYik7XG4gICAgY29sb3Iub3BhY2l0eSA9IDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGNvbG9yLnIgPSByKHQpO1xuICAgICAgY29sb3IuZyA9IGcodCk7XG4gICAgICBjb2xvci5iID0gYih0KTtcbiAgICAgIHJldHVybiBjb2xvciArIFwiXCI7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciByZ2JCYXNpcyA9IHJnYlNwbGluZShiYXNpcyk7XG5leHBvcnQgdmFyIHJnYkJhc2lzQ2xvc2VkID0gcmdiU3BsaW5lKGJhc2lzQ2xvc2VkKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgaWYgKCFiKSBiID0gW107XG4gIHZhciBuID0gYSA/IE1hdGgubWluKGIubGVuZ3RoLCBhLmxlbmd0aCkgOiAwLFxuICAgICAgYyA9IGIuc2xpY2UoKSxcbiAgICAgIGk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgY1tpXSA9IGFbaV0gKiAoMSAtIHQpICsgYltpXSAqIHQ7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlckFycmF5KHgpIHtcbiAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyh4KSAmJiAhKHggaW5zdGFuY2VvZiBEYXRhVmlldyk7XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWUuanNcIjtcbmltcG9ydCBudW1iZXJBcnJheSwge2lzTnVtYmVyQXJyYXl9IGZyb20gXCIuL251bWJlckFycmF5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIChpc051bWJlckFycmF5KGIpID8gbnVtYmVyQXJyYXkgOiBnZW5lcmljQXJyYXkpKGEsIGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpY0FycmF5KGEsIGIpIHtcbiAgdmFyIG5iID0gYiA/IGIubGVuZ3RoIDogMCxcbiAgICAgIG5hID0gYSA/IE1hdGgubWluKG5iLCBhLmxlbmd0aCkgOiAwLFxuICAgICAgeCA9IG5ldyBBcnJheShuYSksXG4gICAgICBjID0gbmV3IEFycmF5KG5iKSxcbiAgICAgIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IG5hOyArK2kpIHhbaV0gPSB2YWx1ZShhW2ldLCBiW2ldKTtcbiAgZm9yICg7IGkgPCBuYjsgKytpKSBjW2ldID0gYltpXTtcblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBuYTsgKytpKSBjW2ldID0geFtpXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZTtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGQuc2V0VGltZShhICogKDEgLSB0KSArIGIgKiB0KSwgZDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKiAoMSAtIHQpICsgYiAqIHQ7XG4gIH07XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgaSA9IHt9LFxuICAgICAgYyA9IHt9LFxuICAgICAgaztcblxuICBpZiAoYSA9PT0gbnVsbCB8fCB0eXBlb2YgYSAhPT0gXCJvYmplY3RcIikgYSA9IHt9O1xuICBpZiAoYiA9PT0gbnVsbCB8fCB0eXBlb2YgYiAhPT0gXCJvYmplY3RcIikgYiA9IHt9O1xuXG4gIGZvciAoayBpbiBiKSB7XG4gICAgaWYgKGsgaW4gYSkge1xuICAgICAgaVtrXSA9IHZhbHVlKGFba10sIGJba10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjW2tdID0gYltrXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoayBpbiBpKSBjW2tdID0gaVtrXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cbiIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciByZUEgPSAvWy0rXT8oPzpcXGQrXFwuP1xcZCp8XFwuP1xcZCspKD86W2VFXVstK10/XFxkKyk/L2csXG4gICAgcmVCID0gbmV3IFJlZ0V4cChyZUEuc291cmNlLCBcImdcIik7XG5cbmZ1bmN0aW9uIHplcm8oYikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGI7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uZShiKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGIodCkgKyBcIlwiO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBiaSA9IHJlQS5sYXN0SW5kZXggPSByZUIubGFzdEluZGV4ID0gMCwgLy8gc2NhbiBpbmRleCBmb3IgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYW0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYVxuICAgICAgYm0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYlxuICAgICAgYnMsIC8vIHN0cmluZyBwcmVjZWRpbmcgY3VycmVudCBudW1iZXIgaW4gYiwgaWYgYW55XG4gICAgICBpID0gLTEsIC8vIGluZGV4IGluIHNcbiAgICAgIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICBxID0gW107IC8vIG51bWJlciBpbnRlcnBvbGF0b3JzXG5cbiAgLy8gQ29lcmNlIGlucHV0cyB0byBzdHJpbmdzLlxuICBhID0gYSArIFwiXCIsIGIgPSBiICsgXCJcIjtcblxuICAvLyBJbnRlcnBvbGF0ZSBwYWlycyBvZiBudW1iZXJzIGluIGEgJiBiLlxuICB3aGlsZSAoKGFtID0gcmVBLmV4ZWMoYSkpXG4gICAgICAmJiAoYm0gPSByZUIuZXhlYyhiKSkpIHtcbiAgICBpZiAoKGJzID0gYm0uaW5kZXgpID4gYmkpIHsgLy8gYSBzdHJpbmcgcHJlY2VkZXMgdGhlIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGJzID0gYi5zbGljZShiaSwgYnMpO1xuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJzO1xuICAgIH1cbiAgICBpZiAoKGFtID0gYW1bMF0pID09PSAoYm0gPSBibVswXSkpIHsgLy8gbnVtYmVycyBpbiBhICYgYiBtYXRjaFxuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYm07IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJtO1xuICAgIH0gZWxzZSB7IC8vIGludGVycG9sYXRlIG5vbi1tYXRjaGluZyBudW1iZXJzXG4gICAgICBzWysraV0gPSBudWxsO1xuICAgICAgcS5wdXNoKHtpOiBpLCB4OiBudW1iZXIoYW0sIGJtKX0pO1xuICAgIH1cbiAgICBiaSA9IHJlQi5sYXN0SW5kZXg7XG4gIH1cblxuICAvLyBBZGQgcmVtYWlucyBvZiBiLlxuICBpZiAoYmkgPCBiLmxlbmd0aCkge1xuICAgIGJzID0gYi5zbGljZShiaSk7XG4gICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgZWxzZSBzWysraV0gPSBicztcbiAgfVxuXG4gIC8vIFNwZWNpYWwgb3B0aW1pemF0aW9uIGZvciBvbmx5IGEgc2luZ2xlIG1hdGNoLlxuICAvLyBPdGhlcndpc2UsIGludGVycG9sYXRlIGVhY2ggb2YgdGhlIG51bWJlcnMgYW5kIHJlam9pbiB0aGUgc3RyaW5nLlxuICByZXR1cm4gcy5sZW5ndGggPCAyID8gKHFbMF1cbiAgICAgID8gb25lKHFbMF0ueClcbiAgICAgIDogemVybyhiKSlcbiAgICAgIDogKGIgPSBxLmxlbmd0aCwgZnVuY3Rpb24odCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvOyBpIDwgYjsgKytpKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICAgICAgfSk7XG59XG4iLCJpbXBvcnQge2NvbG9yfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCByZ2IgZnJvbSBcIi4vcmdiLmpzXCI7XG5pbXBvcnQge2dlbmVyaWNBcnJheX0gZnJvbSBcIi4vYXJyYXkuanNcIjtcbmltcG9ydCBkYXRlIGZyb20gXCIuL2RhdGUuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQgb2JqZWN0IGZyb20gXCIuL29iamVjdC5qc1wiO1xuaW1wb3J0IHN0cmluZyBmcm9tIFwiLi9zdHJpbmcuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IG51bWJlckFycmF5LCB7aXNOdW1iZXJBcnJheX0gZnJvbSBcIi4vbnVtYmVyQXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgdCA9IHR5cGVvZiBiLCBjO1xuICByZXR1cm4gYiA9PSBudWxsIHx8IHQgPT09IFwiYm9vbGVhblwiID8gY29uc3RhbnQoYilcbiAgICAgIDogKHQgPT09IFwibnVtYmVyXCIgPyBudW1iZXJcbiAgICAgIDogdCA9PT0gXCJzdHJpbmdcIiA/ICgoYyA9IGNvbG9yKGIpKSA/IChiID0gYywgcmdiKSA6IHN0cmluZylcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gcmdiXG4gICAgICA6IGIgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZVxuICAgICAgOiBpc051bWJlckFycmF5KGIpID8gbnVtYmVyQXJyYXlcbiAgICAgIDogQXJyYXkuaXNBcnJheShiKSA/IGdlbmVyaWNBcnJheVxuICAgICAgOiB0eXBlb2YgYi52YWx1ZU9mICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGIudG9TdHJpbmcgIT09IFwiZnVuY3Rpb25cIiB8fCBpc05hTihiKSA/IG9iamVjdFxuICAgICAgOiBudW1iZXIpKGEsIGIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA9ICthLCBiID0gK2IsIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChhICogKDEgLSB0KSArIGIgKiB0KTtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnN0YW50cyh4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG51bWJlcih4KSB7XG4gIHJldHVybiAreDtcbn1cbiIsImltcG9ydCB7YmlzZWN0fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGUgYXMgaW50ZXJwb2xhdGVWYWx1ZSwgaW50ZXJwb2xhdGVOdW1iZXIsIGludGVycG9sYXRlUm91bmR9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuXG52YXIgdW5pdCA9IFswLCAxXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgcmV0dXJuIHg7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShhLCBiKSB7XG4gIHJldHVybiAoYiAtPSAoYSA9ICthKSlcbiAgICAgID8gZnVuY3Rpb24oeCkgeyByZXR1cm4gKHggLSBhKSAvIGI7IH1cbiAgICAgIDogY29uc3RhbnQoaXNOYU4oYikgPyBOYU4gOiAwLjUpO1xufVxuXG5mdW5jdGlvbiBjbGFtcGVyKGEsIGIpIHtcbiAgdmFyIHQ7XG4gIGlmIChhID4gYikgdCA9IGEsIGEgPSBiLCBiID0gdDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgubWF4KGEsIE1hdGgubWluKGIsIHgpKTsgfTtcbn1cblxuLy8gbm9ybWFsaXplKGEsIGIpKHgpIHRha2VzIGEgZG9tYWluIHZhbHVlIHggaW4gW2EsYl0gYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcGFyYW1ldGVyIHQgaW4gWzAsMV0uXG4vLyBpbnRlcnBvbGF0ZShhLCBiKSh0KSB0YWtlcyBhIHBhcmFtZXRlciB0IGluIFswLDFdIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJhbmdlIHZhbHVlIHggaW4gW2EsYl0uXG5mdW5jdGlvbiBiaW1hcChkb21haW4sIHJhbmdlLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgZDAgPSBkb21haW5bMF0sIGQxID0gZG9tYWluWzFdLCByMCA9IHJhbmdlWzBdLCByMSA9IHJhbmdlWzFdO1xuICBpZiAoZDEgPCBkMCkgZDAgPSBub3JtYWxpemUoZDEsIGQwKSwgcjAgPSBpbnRlcnBvbGF0ZShyMSwgcjApO1xuICBlbHNlIGQwID0gbm9ybWFsaXplKGQwLCBkMSksIHIwID0gaW50ZXJwb2xhdGUocjAsIHIxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHIwKGQwKHgpKTsgfTtcbn1cblxuZnVuY3Rpb24gcG9seW1hcChkb21haW4sIHJhbmdlLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgaiA9IE1hdGgubWluKGRvbWFpbi5sZW5ndGgsIHJhbmdlLmxlbmd0aCkgLSAxLFxuICAgICAgZCA9IG5ldyBBcnJheShqKSxcbiAgICAgIHIgPSBuZXcgQXJyYXkoaiksXG4gICAgICBpID0gLTE7XG5cbiAgLy8gUmV2ZXJzZSBkZXNjZW5kaW5nIGRvbWFpbnMuXG4gIGlmIChkb21haW5bal0gPCBkb21haW5bMF0pIHtcbiAgICBkb21haW4gPSBkb21haW4uc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgcmFuZ2UgPSByYW5nZS5zbGljZSgpLnJldmVyc2UoKTtcbiAgfVxuXG4gIHdoaWxlICgrK2kgPCBqKSB7XG4gICAgZFtpXSA9IG5vcm1hbGl6ZShkb21haW5baV0sIGRvbWFpbltpICsgMV0pO1xuICAgIHJbaV0gPSBpbnRlcnBvbGF0ZShyYW5nZVtpXSwgcmFuZ2VbaSArIDFdKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgdmFyIGkgPSBiaXNlY3QoZG9tYWluLCB4LCAxLCBqKSAtIDE7XG4gICAgcmV0dXJuIHJbaV0oZFtpXSh4KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXRcbiAgICAgIC5kb21haW4oc291cmNlLmRvbWFpbigpKVxuICAgICAgLnJhbmdlKHNvdXJjZS5yYW5nZSgpKVxuICAgICAgLmludGVycG9sYXRlKHNvdXJjZS5pbnRlcnBvbGF0ZSgpKVxuICAgICAgLmNsYW1wKHNvdXJjZS5jbGFtcCgpKVxuICAgICAgLnVua25vd24oc291cmNlLnVua25vd24oKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lcigpIHtcbiAgdmFyIGRvbWFpbiA9IHVuaXQsXG4gICAgICByYW5nZSA9IHVuaXQsXG4gICAgICBpbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlVmFsdWUsXG4gICAgICB0cmFuc2Zvcm0sXG4gICAgICB1bnRyYW5zZm9ybSxcbiAgICAgIHVua25vd24sXG4gICAgICBjbGFtcCA9IGlkZW50aXR5LFxuICAgICAgcGllY2V3aXNlLFxuICAgICAgb3V0cHV0LFxuICAgICAgaW5wdXQ7XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICB2YXIgbiA9IE1hdGgubWluKGRvbWFpbi5sZW5ndGgsIHJhbmdlLmxlbmd0aCk7XG4gICAgaWYgKGNsYW1wICE9PSBpZGVudGl0eSkgY2xhbXAgPSBjbGFtcGVyKGRvbWFpblswXSwgZG9tYWluW24gLSAxXSk7XG4gICAgcGllY2V3aXNlID0gbiA+IDIgPyBwb2x5bWFwIDogYmltYXA7XG4gICAgb3V0cHV0ID0gaW5wdXQgPSBudWxsO1xuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICByZXR1cm4geCA9PSBudWxsIHx8IGlzTmFOKHggPSAreCkgPyB1bmtub3duIDogKG91dHB1dCB8fCAob3V0cHV0ID0gcGllY2V3aXNlKGRvbWFpbi5tYXAodHJhbnNmb3JtKSwgcmFuZ2UsIGludGVycG9sYXRlKSkpKHRyYW5zZm9ybShjbGFtcCh4KSkpO1xuICB9XG5cbiAgc2NhbGUuaW52ZXJ0ID0gZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiBjbGFtcCh1bnRyYW5zZm9ybSgoaW5wdXQgfHwgKGlucHV0ID0gcGllY2V3aXNlKHJhbmdlLCBkb21haW4ubWFwKHRyYW5zZm9ybSksIGludGVycG9sYXRlTnVtYmVyKSkpKHkpKSk7XG4gIH07XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRvbWFpbiA9IEFycmF5LmZyb20oXywgbnVtYmVyKSwgcmVzY2FsZSgpKSA6IGRvbWFpbi5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhbmdlID0gQXJyYXkuZnJvbShfKSwgcmVzY2FsZSgpKSA6IHJhbmdlLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2VSb3VuZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gcmFuZ2UgPSBBcnJheS5mcm9tKF8pLCBpbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlUm91bmQsIHJlc2NhbGUoKTtcbiAgfTtcblxuICBzY2FsZS5jbGFtcCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjbGFtcCA9IF8gPyB0cnVlIDogaWRlbnRpdHksIHJlc2NhbGUoKSkgOiBjbGFtcCAhPT0gaWRlbnRpdHk7XG4gIH07XG5cbiAgc2NhbGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW50ZXJwb2xhdGUgPSBfLCByZXNjYWxlKCkpIDogaW50ZXJwb2xhdGU7XG4gIH07XG5cbiAgc2NhbGUudW5rbm93biA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh1bmtub3duID0gXywgc2NhbGUpIDogdW5rbm93bjtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24odCwgdSkge1xuICAgIHRyYW5zZm9ybSA9IHQsIHVudHJhbnNmb3JtID0gdTtcbiAgICByZXR1cm4gcmVzY2FsZSgpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250aW51b3VzKCkge1xuICByZXR1cm4gdHJhbnNmb3JtZXIoKShpZGVudGl0eSwgaWRlbnRpdHkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gTWF0aC5hYnMoeCA9IE1hdGgucm91bmQoeCkpID49IDFlMjFcbiAgICAgID8geC50b0xvY2FsZVN0cmluZyhcImVuXCIpLnJlcGxhY2UoLywvZywgXCJcIilcbiAgICAgIDogeC50b1N0cmluZygxMCk7XG59XG5cbi8vIENvbXB1dGVzIHRoZSBkZWNpbWFsIGNvZWZmaWNpZW50IGFuZCBleHBvbmVudCBvZiB0aGUgc3BlY2lmaWVkIG51bWJlciB4IHdpdGhcbi8vIHNpZ25pZmljYW50IGRpZ2l0cyBwLCB3aGVyZSB4IGlzIHBvc2l0aXZlIGFuZCBwIGlzIGluIFsxLCAyMV0gb3IgdW5kZWZpbmVkLlxuLy8gRm9yIGV4YW1wbGUsIGZvcm1hdERlY2ltYWxQYXJ0cygxLjIzKSByZXR1cm5zIFtcIjEyM1wiLCAwXS5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREZWNpbWFsUGFydHMoeCwgcCkge1xuICBpZiAoKGkgPSAoeCA9IHAgPyB4LnRvRXhwb25lbnRpYWwocCAtIDEpIDogeC50b0V4cG9uZW50aWFsKCkpLmluZGV4T2YoXCJlXCIpKSA8IDApIHJldHVybiBudWxsOyAvLyBOYU4sIMKxSW5maW5pdHlcbiAgdmFyIGksIGNvZWZmaWNpZW50ID0geC5zbGljZSgwLCBpKTtcblxuICAvLyBUaGUgc3RyaW5nIHJldHVybmVkIGJ5IHRvRXhwb25lbnRpYWwgZWl0aGVyIGhhcyB0aGUgZm9ybSBcXGRcXC5cXGQrZVstK11cXGQrXG4gIC8vIChlLmcuLCAxLjJlKzMpIG9yIHRoZSBmb3JtIFxcZGVbLStdXFxkKyAoZS5nLiwgMWUrMykuXG4gIHJldHVybiBbXG4gICAgY29lZmZpY2llbnQubGVuZ3RoID4gMSA/IGNvZWZmaWNpZW50WzBdICsgY29lZmZpY2llbnQuc2xpY2UoMikgOiBjb2VmZmljaWVudCxcbiAgICAreC5zbGljZShpICsgMSlcbiAgXTtcbn1cbiIsImltcG9ydCB7Zm9ybWF0RGVjaW1hbFBhcnRzfSBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHggPSBmb3JtYXREZWNpbWFsUGFydHMoTWF0aC5hYnMoeCkpLCB4ID8geFsxXSA6IE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGdyb3VwaW5nLCB0aG91c2FuZHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCB3aWR0aCkge1xuICAgIHZhciBpID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICB0ID0gW10sXG4gICAgICAgIGogPSAwLFxuICAgICAgICBnID0gZ3JvdXBpbmdbMF0sXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICB3aGlsZSAoaSA+IDAgJiYgZyA+IDApIHtcbiAgICAgIGlmIChsZW5ndGggKyBnICsgMSA+IHdpZHRoKSBnID0gTWF0aC5tYXgoMSwgd2lkdGggLSBsZW5ndGgpO1xuICAgICAgdC5wdXNoKHZhbHVlLnN1YnN0cmluZyhpIC09IGcsIGkgKyBnKSk7XG4gICAgICBpZiAoKGxlbmd0aCArPSBnICsgMSkgPiB3aWR0aCkgYnJlYWs7XG4gICAgICBnID0gZ3JvdXBpbmdbaiA9IChqICsgMSkgJSBncm91cGluZy5sZW5ndGhdO1xuICAgIH1cblxuICAgIHJldHVybiB0LnJldmVyc2UoKS5qb2luKHRob3VzYW5kcyk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihudW1lcmFscykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvWzAtOV0vZywgZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIG51bWVyYWxzWytpXTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsIi8vIFtbZmlsbF1hbGlnbl1bc2lnbl1bc3ltYm9sXVswXVt3aWR0aF1bLF1bLnByZWNpc2lvbl1bfl1bdHlwZV1cbnZhciByZSA9IC9eKD86KC4pPyhbPD49Xl0pKT8oWytcXC0oIF0pPyhbJCNdKT8oMCk/KFxcZCspPygsKT8oXFwuXFxkKyk/KH4pPyhbYS16JV0pPyQvaTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcikge1xuICBpZiAoIShtYXRjaCA9IHJlLmV4ZWMoc3BlY2lmaWVyKSkpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZm9ybWF0OiBcIiArIHNwZWNpZmllcik7XG4gIHZhciBtYXRjaDtcbiAgcmV0dXJuIG5ldyBGb3JtYXRTcGVjaWZpZXIoe1xuICAgIGZpbGw6IG1hdGNoWzFdLFxuICAgIGFsaWduOiBtYXRjaFsyXSxcbiAgICBzaWduOiBtYXRjaFszXSxcbiAgICBzeW1ib2w6IG1hdGNoWzRdLFxuICAgIHplcm86IG1hdGNoWzVdLFxuICAgIHdpZHRoOiBtYXRjaFs2XSxcbiAgICBjb21tYTogbWF0Y2hbN10sXG4gICAgcHJlY2lzaW9uOiBtYXRjaFs4XSAmJiBtYXRjaFs4XS5zbGljZSgxKSxcbiAgICB0cmltOiBtYXRjaFs5XSxcbiAgICB0eXBlOiBtYXRjaFsxMF1cbiAgfSk7XG59XG5cbmZvcm1hdFNwZWNpZmllci5wcm90b3R5cGUgPSBGb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlOyAvLyBpbnN0YW5jZW9mXG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gIHRoaXMuZmlsbCA9IHNwZWNpZmllci5maWxsID09PSB1bmRlZmluZWQgPyBcIiBcIiA6IHNwZWNpZmllci5maWxsICsgXCJcIjtcbiAgdGhpcy5hbGlnbiA9IHNwZWNpZmllci5hbGlnbiA9PT0gdW5kZWZpbmVkID8gXCI+XCIgOiBzcGVjaWZpZXIuYWxpZ24gKyBcIlwiO1xuICB0aGlzLnNpZ24gPSBzcGVjaWZpZXIuc2lnbiA9PT0gdW5kZWZpbmVkID8gXCItXCIgOiBzcGVjaWZpZXIuc2lnbiArIFwiXCI7XG4gIHRoaXMuc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHNwZWNpZmllci5zeW1ib2wgKyBcIlwiO1xuICB0aGlzLnplcm8gPSAhIXNwZWNpZmllci56ZXJvO1xuICB0aGlzLndpZHRoID0gc3BlY2lmaWVyLndpZHRoID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiArc3BlY2lmaWVyLndpZHRoO1xuICB0aGlzLmNvbW1hID0gISFzcGVjaWZpZXIuY29tbWE7XG4gIHRoaXMucHJlY2lzaW9uID0gc3BlY2lmaWVyLnByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogK3NwZWNpZmllci5wcmVjaXNpb247XG4gIHRoaXMudHJpbSA9ICEhc3BlY2lmaWVyLnRyaW07XG4gIHRoaXMudHlwZSA9IHNwZWNpZmllci50eXBlID09PSB1bmRlZmluZWQgPyBcIlwiIDogc3BlY2lmaWVyLnR5cGUgKyBcIlwiO1xufVxuXG5Gb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmZpbGxcbiAgICAgICsgdGhpcy5hbGlnblxuICAgICAgKyB0aGlzLnNpZ25cbiAgICAgICsgdGhpcy5zeW1ib2xcbiAgICAgICsgKHRoaXMuemVybyA/IFwiMFwiIDogXCJcIilcbiAgICAgICsgKHRoaXMud2lkdGggPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBNYXRoLm1heCgxLCB0aGlzLndpZHRoIHwgMCkpXG4gICAgICArICh0aGlzLmNvbW1hID8gXCIsXCIgOiBcIlwiKVxuICAgICAgKyAodGhpcy5wcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBcIi5cIiArIE1hdGgubWF4KDAsIHRoaXMucHJlY2lzaW9uIHwgMCkpXG4gICAgICArICh0aGlzLnRyaW0gPyBcIn5cIiA6IFwiXCIpXG4gICAgICArIHRoaXMudHlwZTtcbn07XG4iLCIvLyBUcmltcyBpbnNpZ25pZmljYW50IHplcm9zLCBlLmcuLCByZXBsYWNlcyAxLjIwMDBrIHdpdGggMS4yay5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpIHtcbiAgb3V0OiBmb3IgKHZhciBuID0gcy5sZW5ndGgsIGkgPSAxLCBpMCA9IC0xLCBpMTsgaSA8IG47ICsraSkge1xuICAgIHN3aXRjaCAoc1tpXSkge1xuICAgICAgY2FzZSBcIi5cIjogaTAgPSBpMSA9IGk7IGJyZWFrO1xuICAgICAgY2FzZSBcIjBcIjogaWYgKGkwID09PSAwKSBpMCA9IGk7IGkxID0gaTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBpZiAoIStzW2ldKSBicmVhayBvdXQ7IGlmIChpMCA+IDApIGkwID0gMDsgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBpMCA+IDAgPyBzLnNsaWNlKDAsIGkwKSArIHMuc2xpY2UoaTEgKyAxKSA6IHM7XG59XG4iLCJpbXBvcnQge2Zvcm1hdERlY2ltYWxQYXJ0c30gZnJvbSBcIi4vZm9ybWF0RGVjaW1hbC5qc1wiO1xuXG5leHBvcnQgdmFyIHByZWZpeEV4cG9uZW50O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCBwKSB7XG4gIHZhciBkID0gZm9ybWF0RGVjaW1hbFBhcnRzKHgsIHApO1xuICBpZiAoIWQpIHJldHVybiB4ICsgXCJcIjtcbiAgdmFyIGNvZWZmaWNpZW50ID0gZFswXSxcbiAgICAgIGV4cG9uZW50ID0gZFsxXSxcbiAgICAgIGkgPSBleHBvbmVudCAtIChwcmVmaXhFeHBvbmVudCA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50IC8gMykpKSAqIDMpICsgMSxcbiAgICAgIG4gPSBjb2VmZmljaWVudC5sZW5ndGg7XG4gIHJldHVybiBpID09PSBuID8gY29lZmZpY2llbnRcbiAgICAgIDogaSA+IG4gPyBjb2VmZmljaWVudCArIG5ldyBBcnJheShpIC0gbiArIDEpLmpvaW4oXCIwXCIpXG4gICAgICA6IGkgPiAwID8gY29lZmZpY2llbnQuc2xpY2UoMCwgaSkgKyBcIi5cIiArIGNvZWZmaWNpZW50LnNsaWNlKGkpXG4gICAgICA6IFwiMC5cIiArIG5ldyBBcnJheSgxIC0gaSkuam9pbihcIjBcIikgKyBmb3JtYXREZWNpbWFsUGFydHMoeCwgTWF0aC5tYXgoMCwgcCArIGkgLSAxKSlbMF07IC8vIGxlc3MgdGhhbiAxeSFcbn1cbiIsImltcG9ydCB7Zm9ybWF0RGVjaW1hbFBhcnRzfSBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHApIHtcbiAgdmFyIGQgPSBmb3JtYXREZWNpbWFsUGFydHMoeCwgcCk7XG4gIGlmICghZCkgcmV0dXJuIHggKyBcIlwiO1xuICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgZXhwb25lbnQgPSBkWzFdO1xuICByZXR1cm4gZXhwb25lbnQgPCAwID8gXCIwLlwiICsgbmV3IEFycmF5KC1leHBvbmVudCkuam9pbihcIjBcIikgKyBjb2VmZmljaWVudFxuICAgICAgOiBjb2VmZmljaWVudC5sZW5ndGggPiBleHBvbmVudCArIDEgPyBjb2VmZmljaWVudC5zbGljZSgwLCBleHBvbmVudCArIDEpICsgXCIuXCIgKyBjb2VmZmljaWVudC5zbGljZShleHBvbmVudCArIDEpXG4gICAgICA6IGNvZWZmaWNpZW50ICsgbmV3IEFycmF5KGV4cG9uZW50IC0gY29lZmZpY2llbnQubGVuZ3RoICsgMikuam9pbihcIjBcIik7XG59XG4iLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5pbXBvcnQgZm9ybWF0UHJlZml4QXV0byBmcm9tIFwiLi9mb3JtYXRQcmVmaXhBdXRvLmpzXCI7XG5pbXBvcnQgZm9ybWF0Um91bmRlZCBmcm9tIFwiLi9mb3JtYXRSb3VuZGVkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCIlXCI6ICh4LCBwKSA9PiAoeCAqIDEwMCkudG9GaXhlZChwKSxcbiAgXCJiXCI6ICh4KSA9PiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDIpLFxuICBcImNcIjogKHgpID0+IHggKyBcIlwiLFxuICBcImRcIjogZm9ybWF0RGVjaW1hbCxcbiAgXCJlXCI6ICh4LCBwKSA9PiB4LnRvRXhwb25lbnRpYWwocCksXG4gIFwiZlwiOiAoeCwgcCkgPT4geC50b0ZpeGVkKHApLFxuICBcImdcIjogKHgsIHApID0+IHgudG9QcmVjaXNpb24ocCksXG4gIFwib1wiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZyg4KSxcbiAgXCJwXCI6ICh4LCBwKSA9PiBmb3JtYXRSb3VuZGVkKHggKiAxMDAsIHApLFxuICBcInJcIjogZm9ybWF0Um91bmRlZCxcbiAgXCJzXCI6IGZvcm1hdFByZWZpeEF1dG8sXG4gIFwiWFwiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSxcbiAgXCJ4XCI6ICh4KSA9PiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDE2KVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcbmltcG9ydCBmb3JtYXRHcm91cCBmcm9tIFwiLi9mb3JtYXRHcm91cC5qc1wiO1xuaW1wb3J0IGZvcm1hdE51bWVyYWxzIGZyb20gXCIuL2Zvcm1hdE51bWVyYWxzLmpzXCI7XG5pbXBvcnQgZm9ybWF0U3BlY2lmaWVyIGZyb20gXCIuL2Zvcm1hdFNwZWNpZmllci5qc1wiO1xuaW1wb3J0IGZvcm1hdFRyaW0gZnJvbSBcIi4vZm9ybWF0VHJpbS5qc1wiO1xuaW1wb3J0IGZvcm1hdFR5cGVzIGZyb20gXCIuL2Zvcm1hdFR5cGVzLmpzXCI7XG5pbXBvcnQge3ByZWZpeEV4cG9uZW50fSBmcm9tIFwiLi9mb3JtYXRQcmVmaXhBdXRvLmpzXCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHkuanNcIjtcblxudmFyIG1hcCA9IEFycmF5LnByb3RvdHlwZS5tYXAsXG4gICAgcHJlZml4ZXMgPSBbXCJ5XCIsXCJ6XCIsXCJhXCIsXCJmXCIsXCJwXCIsXCJuXCIsXCLCtVwiLFwibVwiLFwiXCIsXCJrXCIsXCJNXCIsXCJHXCIsXCJUXCIsXCJQXCIsXCJFXCIsXCJaXCIsXCJZXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsb2NhbGUpIHtcbiAgdmFyIGdyb3VwID0gbG9jYWxlLmdyb3VwaW5nID09PSB1bmRlZmluZWQgfHwgbG9jYWxlLnRob3VzYW5kcyA9PT0gdW5kZWZpbmVkID8gaWRlbnRpdHkgOiBmb3JtYXRHcm91cChtYXAuY2FsbChsb2NhbGUuZ3JvdXBpbmcsIE51bWJlciksIGxvY2FsZS50aG91c2FuZHMgKyBcIlwiKSxcbiAgICAgIGN1cnJlbmN5UHJlZml4ID0gbG9jYWxlLmN1cnJlbmN5ID09PSB1bmRlZmluZWQgPyBcIlwiIDogbG9jYWxlLmN1cnJlbmN5WzBdICsgXCJcIixcbiAgICAgIGN1cnJlbmN5U3VmZml4ID0gbG9jYWxlLmN1cnJlbmN5ID09PSB1bmRlZmluZWQgPyBcIlwiIDogbG9jYWxlLmN1cnJlbmN5WzFdICsgXCJcIixcbiAgICAgIGRlY2ltYWwgPSBsb2NhbGUuZGVjaW1hbCA9PT0gdW5kZWZpbmVkID8gXCIuXCIgOiBsb2NhbGUuZGVjaW1hbCArIFwiXCIsXG4gICAgICBudW1lcmFscyA9IGxvY2FsZS5udW1lcmFscyA9PT0gdW5kZWZpbmVkID8gaWRlbnRpdHkgOiBmb3JtYXROdW1lcmFscyhtYXAuY2FsbChsb2NhbGUubnVtZXJhbHMsIFN0cmluZykpLFxuICAgICAgcGVyY2VudCA9IGxvY2FsZS5wZXJjZW50ID09PSB1bmRlZmluZWQgPyBcIiVcIiA6IGxvY2FsZS5wZXJjZW50ICsgXCJcIixcbiAgICAgIG1pbnVzID0gbG9jYWxlLm1pbnVzID09PSB1bmRlZmluZWQgPyBcIuKIklwiIDogbG9jYWxlLm1pbnVzICsgXCJcIixcbiAgICAgIG5hbiA9IGxvY2FsZS5uYW4gPT09IHVuZGVmaW5lZCA/IFwiTmFOXCIgOiBsb2NhbGUubmFuICsgXCJcIjtcblxuICBmdW5jdGlvbiBuZXdGb3JtYXQoc3BlY2lmaWVyKSB7XG4gICAgc3BlY2lmaWVyID0gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcik7XG5cbiAgICB2YXIgZmlsbCA9IHNwZWNpZmllci5maWxsLFxuICAgICAgICBhbGlnbiA9IHNwZWNpZmllci5hbGlnbixcbiAgICAgICAgc2lnbiA9IHNwZWNpZmllci5zaWduLFxuICAgICAgICBzeW1ib2wgPSBzcGVjaWZpZXIuc3ltYm9sLFxuICAgICAgICB6ZXJvID0gc3BlY2lmaWVyLnplcm8sXG4gICAgICAgIHdpZHRoID0gc3BlY2lmaWVyLndpZHRoLFxuICAgICAgICBjb21tYSA9IHNwZWNpZmllci5jb21tYSxcbiAgICAgICAgcHJlY2lzaW9uID0gc3BlY2lmaWVyLnByZWNpc2lvbixcbiAgICAgICAgdHJpbSA9IHNwZWNpZmllci50cmltLFxuICAgICAgICB0eXBlID0gc3BlY2lmaWVyLnR5cGU7XG5cbiAgICAvLyBUaGUgXCJuXCIgdHlwZSBpcyBhbiBhbGlhcyBmb3IgXCIsZ1wiLlxuICAgIGlmICh0eXBlID09PSBcIm5cIikgY29tbWEgPSB0cnVlLCB0eXBlID0gXCJnXCI7XG5cbiAgICAvLyBUaGUgXCJcIiB0eXBlLCBhbmQgYW55IGludmFsaWQgdHlwZSwgaXMgYW4gYWxpYXMgZm9yIFwiLjEyfmdcIi5cbiAgICBlbHNlIGlmICghZm9ybWF0VHlwZXNbdHlwZV0pIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkICYmIChwcmVjaXNpb24gPSAxMiksIHRyaW0gPSB0cnVlLCB0eXBlID0gXCJnXCI7XG5cbiAgICAvLyBJZiB6ZXJvIGZpbGwgaXMgc3BlY2lmaWVkLCBwYWRkaW5nIGdvZXMgYWZ0ZXIgc2lnbiBhbmQgYmVmb3JlIGRpZ2l0cy5cbiAgICBpZiAoemVybyB8fCAoZmlsbCA9PT0gXCIwXCIgJiYgYWxpZ24gPT09IFwiPVwiKSkgemVybyA9IHRydWUsIGZpbGwgPSBcIjBcIiwgYWxpZ24gPSBcIj1cIjtcblxuICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgIC8vIEZvciBTSS1wcmVmaXgsIHRoZSBzdWZmaXggaXMgbGF6aWx5IGNvbXB1dGVkLlxuICAgIHZhciBwcmVmaXggPSBzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lQcmVmaXggOiBzeW1ib2wgPT09IFwiI1wiICYmIC9bYm94WF0vLnRlc3QodHlwZSkgPyBcIjBcIiArIHR5cGUudG9Mb3dlckNhc2UoKSA6IFwiXCIsXG4gICAgICAgIHN1ZmZpeCA9IHN5bWJvbCA9PT0gXCIkXCIgPyBjdXJyZW5jeVN1ZmZpeCA6IC9bJXBdLy50ZXN0KHR5cGUpID8gcGVyY2VudCA6IFwiXCI7XG5cbiAgICAvLyBXaGF0IGZvcm1hdCBmdW5jdGlvbiBzaG91bGQgd2UgdXNlP1xuICAgIC8vIElzIHRoaXMgYW4gaW50ZWdlciB0eXBlP1xuICAgIC8vIENhbiB0aGlzIHR5cGUgZ2VuZXJhdGUgZXhwb25lbnRpYWwgbm90YXRpb24/XG4gICAgdmFyIGZvcm1hdFR5cGUgPSBmb3JtYXRUeXBlc1t0eXBlXSxcbiAgICAgICAgbWF5YmVTdWZmaXggPSAvW2RlZmdwcnMlXS8udGVzdCh0eXBlKTtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBwcmVjaXNpb24gaWYgbm90IHNwZWNpZmllZCxcbiAgICAvLyBvciBjbGFtcCB0aGUgc3BlY2lmaWVkIHByZWNpc2lvbiB0byB0aGUgc3VwcG9ydGVkIHJhbmdlLlxuICAgIC8vIEZvciBzaWduaWZpY2FudCBwcmVjaXNpb24sIGl0IG11c3QgYmUgaW4gWzEsIDIxXS5cbiAgICAvLyBGb3IgZml4ZWQgcHJlY2lzaW9uLCBpdCBtdXN0IGJlIGluIFswLCAyMF0uXG4gICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyA2XG4gICAgICAgIDogL1tncHJzXS8udGVzdCh0eXBlKSA/IE1hdGgubWF4KDEsIE1hdGgubWluKDIxLCBwcmVjaXNpb24pKVxuICAgICAgICA6IE1hdGgubWF4KDAsIE1hdGgubWluKDIwLCBwcmVjaXNpb24pKTtcblxuICAgIGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgdmFyIHZhbHVlUHJlZml4ID0gcHJlZml4LFxuICAgICAgICAgIHZhbHVlU3VmZml4ID0gc3VmZml4LFxuICAgICAgICAgIGksIG4sIGM7XG5cbiAgICAgIGlmICh0eXBlID09PSBcImNcIikge1xuICAgICAgICB2YWx1ZVN1ZmZpeCA9IGZvcm1hdFR5cGUodmFsdWUpICsgdmFsdWVTdWZmaXg7XG4gICAgICAgIHZhbHVlID0gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gK3ZhbHVlO1xuXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgc2lnbi4gLTAgaXMgbm90IGxlc3MgdGhhbiAwLCBidXQgMSAvIC0wIGlzIVxuICAgICAgICB2YXIgdmFsdWVOZWdhdGl2ZSA9IHZhbHVlIDwgMCB8fCAxIC8gdmFsdWUgPCAwO1xuXG4gICAgICAgIC8vIFBlcmZvcm0gdGhlIGluaXRpYWwgZm9ybWF0dGluZy5cbiAgICAgICAgdmFsdWUgPSBpc05hTih2YWx1ZSkgPyBuYW4gOiBmb3JtYXRUeXBlKE1hdGguYWJzKHZhbHVlKSwgcHJlY2lzaW9uKTtcblxuICAgICAgICAvLyBUcmltIGluc2lnbmlmaWNhbnQgemVyb3MuXG4gICAgICAgIGlmICh0cmltKSB2YWx1ZSA9IGZvcm1hdFRyaW0odmFsdWUpO1xuXG4gICAgICAgIC8vIElmIGEgbmVnYXRpdmUgdmFsdWUgcm91bmRzIHRvIHplcm8gYWZ0ZXIgZm9ybWF0dGluZywgYW5kIG5vIGV4cGxpY2l0IHBvc2l0aXZlIHNpZ24gaXMgcmVxdWVzdGVkLCBoaWRlIHRoZSBzaWduLlxuICAgICAgICBpZiAodmFsdWVOZWdhdGl2ZSAmJiArdmFsdWUgPT09IDAgJiYgc2lnbiAhPT0gXCIrXCIpIHZhbHVlTmVnYXRpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBDb21wdXRlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAgICAgdmFsdWVQcmVmaXggPSAodmFsdWVOZWdhdGl2ZSA/IChzaWduID09PSBcIihcIiA/IHNpZ24gOiBtaW51cykgOiBzaWduID09PSBcIi1cIiB8fCBzaWduID09PSBcIihcIiA/IFwiXCIgOiBzaWduKSArIHZhbHVlUHJlZml4O1xuICAgICAgICB2YWx1ZVN1ZmZpeCA9ICh0eXBlID09PSBcInNcIiA/IHByZWZpeGVzWzggKyBwcmVmaXhFeHBvbmVudCAvIDNdIDogXCJcIikgKyB2YWx1ZVN1ZmZpeCArICh2YWx1ZU5lZ2F0aXZlICYmIHNpZ24gPT09IFwiKFwiID8gXCIpXCIgOiBcIlwiKTtcblxuICAgICAgICAvLyBCcmVhayB0aGUgZm9ybWF0dGVkIHZhbHVlIGludG8gdGhlIGludGVnZXIg4oCcdmFsdWXigJ0gcGFydCB0aGF0IGNhbiBiZVxuICAgICAgICAvLyBncm91cGVkLCBhbmQgZnJhY3Rpb25hbCBvciBleHBvbmVudGlhbCDigJxzdWZmaXjigJ0gcGFydCB0aGF0IGlzIG5vdC5cbiAgICAgICAgaWYgKG1heWJlU3VmZml4KSB7XG4gICAgICAgICAgaSA9IC0xLCBuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgICBpZiAoYyA9IHZhbHVlLmNoYXJDb2RlQXQoaSksIDQ4ID4gYyB8fCBjID4gNTcpIHtcbiAgICAgICAgICAgICAgdmFsdWVTdWZmaXggPSAoYyA9PT0gNDYgPyBkZWNpbWFsICsgdmFsdWUuc2xpY2UoaSArIDEpIDogdmFsdWUuc2xpY2UoaSkpICsgdmFsdWVTdWZmaXg7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgZmlsbCBjaGFyYWN0ZXIgaXMgbm90IFwiMFwiLCBncm91cGluZyBpcyBhcHBsaWVkIGJlZm9yZSBwYWRkaW5nLlxuICAgICAgaWYgKGNvbW1hICYmICF6ZXJvKSB2YWx1ZSA9IGdyb3VwKHZhbHVlLCBJbmZpbml0eSk7XG5cbiAgICAgIC8vIENvbXB1dGUgdGhlIHBhZGRpbmcuXG4gICAgICB2YXIgbGVuZ3RoID0gdmFsdWVQcmVmaXgubGVuZ3RoICsgdmFsdWUubGVuZ3RoICsgdmFsdWVTdWZmaXgubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBsZW5ndGggPCB3aWR0aCA/IG5ldyBBcnJheSh3aWR0aCAtIGxlbmd0aCArIDEpLmpvaW4oZmlsbCkgOiBcIlwiO1xuXG4gICAgICAvLyBJZiB0aGUgZmlsbCBjaGFyYWN0ZXIgaXMgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYWZ0ZXIgcGFkZGluZy5cbiAgICAgIGlmIChjb21tYSAmJiB6ZXJvKSB2YWx1ZSA9IGdyb3VwKHBhZGRpbmcgKyB2YWx1ZSwgcGFkZGluZy5sZW5ndGggPyB3aWR0aCAtIHZhbHVlU3VmZml4Lmxlbmd0aCA6IEluZmluaXR5KSwgcGFkZGluZyA9IFwiXCI7XG5cbiAgICAgIC8vIFJlY29uc3RydWN0IHRoZSBmaW5hbCBvdXRwdXQgYmFzZWQgb24gdGhlIGRlc2lyZWQgYWxpZ25tZW50LlxuICAgICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlIFwiPFwiOiB2YWx1ZSA9IHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeCArIHBhZGRpbmc7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiPVwiOiB2YWx1ZSA9IHZhbHVlUHJlZml4ICsgcGFkZGluZyArIHZhbHVlICsgdmFsdWVTdWZmaXg7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiXlwiOiB2YWx1ZSA9IHBhZGRpbmcuc2xpY2UoMCwgbGVuZ3RoID0gcGFkZGluZy5sZW5ndGggPj4gMSkgKyB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXggKyBwYWRkaW5nLnNsaWNlKGxlbmd0aCk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiB2YWx1ZSA9IHBhZGRpbmcgKyB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXg7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVtZXJhbHModmFsdWUpO1xuICAgIH1cblxuICAgIGZvcm1hdC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNwZWNpZmllciArIFwiXCI7XG4gICAgfTtcblxuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRQcmVmaXgoc3BlY2lmaWVyLCB2YWx1ZSkge1xuICAgIHZhciBmID0gbmV3Rm9ybWF0KChzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSwgc3BlY2lmaWVyLnR5cGUgPSBcImZcIiwgc3BlY2lmaWVyKSksXG4gICAgICAgIGUgPSBNYXRoLm1heCgtOCwgTWF0aC5taW4oOCwgTWF0aC5mbG9vcihleHBvbmVudCh2YWx1ZSkgLyAzKSkpICogMyxcbiAgICAgICAgayA9IE1hdGgucG93KDEwLCAtZSksXG4gICAgICAgIHByZWZpeCA9IHByZWZpeGVzWzggKyBlIC8gM107XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZihrICogdmFsdWUpICsgcHJlZml4O1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvcm1hdDogbmV3Rm9ybWF0LFxuICAgIGZvcm1hdFByZWZpeDogZm9ybWF0UHJlZml4XG4gIH07XG59XG4iLCJpbXBvcnQgZm9ybWF0TG9jYWxlIGZyb20gXCIuL2xvY2FsZS5qc1wiO1xuXG52YXIgbG9jYWxlO1xuZXhwb3J0IHZhciBmb3JtYXQ7XG5leHBvcnQgdmFyIGZvcm1hdFByZWZpeDtcblxuZGVmYXVsdExvY2FsZSh7XG4gIHRob3VzYW5kczogXCIsXCIsXG4gIGdyb3VwaW5nOiBbM10sXG4gIGN1cnJlbmN5OiBbXCIkXCIsIFwiXCJdXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdExvY2FsZShkZWZpbml0aW9uKSB7XG4gIGxvY2FsZSA9IGZvcm1hdExvY2FsZShkZWZpbml0aW9uKTtcbiAgZm9ybWF0ID0gbG9jYWxlLmZvcm1hdDtcbiAgZm9ybWF0UHJlZml4ID0gbG9jYWxlLmZvcm1hdFByZWZpeDtcbiAgcmV0dXJuIGxvY2FsZTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCAtZXhwb25lbnQoTWF0aC5hYnMoc3RlcCkpKTtcbn1cbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwLCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMgLSBleHBvbmVudChNYXRoLmFicyhzdGVwKSkpO1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXAsIG1heCkge1xuICBzdGVwID0gTWF0aC5hYnMoc3RlcCksIG1heCA9IE1hdGguYWJzKG1heCkgLSBzdGVwO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgZXhwb25lbnQobWF4KSAtIGV4cG9uZW50KHN0ZXApKSArIDE7XG59XG4iLCJpbXBvcnQge3RpY2tTdGVwfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7Zm9ybWF0LCBmb3JtYXRQcmVmaXgsIGZvcm1hdFNwZWNpZmllciwgcHJlY2lzaW9uRml4ZWQsIHByZWNpc2lvblByZWZpeCwgcHJlY2lzaW9uUm91bmR9IGZyb20gXCJkMy1mb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGlja0Zvcm1hdChzdGFydCwgc3RvcCwgY291bnQsIHNwZWNpZmllcikge1xuICB2YXIgc3RlcCA9IHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCksXG4gICAgICBwcmVjaXNpb247XG4gIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIgPT0gbnVsbCA/IFwiLGZcIiA6IHNwZWNpZmllcik7XG4gIHN3aXRjaCAoc3BlY2lmaWVyLnR5cGUpIHtcbiAgICBjYXNlIFwic1wiOiB7XG4gICAgICB2YXIgdmFsdWUgPSBNYXRoLm1heChNYXRoLmFicyhzdGFydCksIE1hdGguYWJzKHN0b3ApKTtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblByZWZpeChzdGVwLCB2YWx1ZSkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uO1xuICAgICAgcmV0dXJuIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgY2FzZSBcIlwiOlxuICAgIGNhc2UgXCJlXCI6XG4gICAgY2FzZSBcImdcIjpcbiAgICBjYXNlIFwicFwiOlxuICAgIGNhc2UgXCJyXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvblJvdW5kKHN0ZXAsIE1hdGgubWF4KE1hdGguYWJzKHN0YXJ0KSwgTWF0aC5hYnMoc3RvcCkpKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb24gLSAoc3BlY2lmaWVyLnR5cGUgPT09IFwiZVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiZlwiOlxuICAgIGNhc2UgXCIlXCI6IHtcbiAgICAgIGlmIChzcGVjaWZpZXIucHJlY2lzaW9uID09IG51bGwgJiYgIWlzTmFOKHByZWNpc2lvbiA9IHByZWNpc2lvbkZpeGVkKHN0ZXApKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbiAtIChzcGVjaWZpZXIudHlwZSA9PT0gXCIlXCIpICogMjtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0KHNwZWNpZmllcik7XG59XG4iLCJpbXBvcnQge3RpY2tzLCB0aWNrSW5jcmVtZW50fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCBjb250aW51b3VzLCB7Y29weX0gZnJvbSBcIi4vY29udGludW91cy5qc1wiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCB0aWNrRm9ybWF0IGZyb20gXCIuL3RpY2tGb3JtYXQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhcmlzaChzY2FsZSkge1xuICB2YXIgZG9tYWluID0gc2NhbGUuZG9tYWluO1xuXG4gIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiB0aWNrcyhkWzBdLCBkW2QubGVuZ3RoIC0gMV0sIGNvdW50ID09IG51bGwgPyAxMCA6IGNvdW50KTtcbiAgfTtcblxuICBzY2FsZS50aWNrRm9ybWF0ID0gZnVuY3Rpb24oY291bnQsIHNwZWNpZmllcikge1xuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgcmV0dXJuIHRpY2tGb3JtYXQoZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBjb3VudCA9PSBudWxsID8gMTAgOiBjb3VudCwgc3BlY2lmaWVyKTtcbiAgfTtcblxuICBzY2FsZS5uaWNlID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICBpZiAoY291bnQgPT0gbnVsbCkgY291bnQgPSAxMDtcblxuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgdmFyIGkwID0gMDtcbiAgICB2YXIgaTEgPSBkLmxlbmd0aCAtIDE7XG4gICAgdmFyIHN0YXJ0ID0gZFtpMF07XG4gICAgdmFyIHN0b3AgPSBkW2kxXTtcbiAgICB2YXIgcHJlc3RlcDtcbiAgICB2YXIgc3RlcDtcbiAgICB2YXIgbWF4SXRlciA9IDEwO1xuXG4gICAgaWYgKHN0b3AgPCBzdGFydCkge1xuICAgICAgc3RlcCA9IHN0YXJ0LCBzdGFydCA9IHN0b3AsIHN0b3AgPSBzdGVwO1xuICAgICAgc3RlcCA9IGkwLCBpMCA9IGkxLCBpMSA9IHN0ZXA7XG4gICAgfVxuICAgIFxuICAgIHdoaWxlIChtYXhJdGVyLS0gPiAwKSB7XG4gICAgICBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICAgICAgaWYgKHN0ZXAgPT09IHByZXN0ZXApIHtcbiAgICAgICAgZFtpMF0gPSBzdGFydFxuICAgICAgICBkW2kxXSA9IHN0b3BcbiAgICAgICAgcmV0dXJuIGRvbWFpbihkKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgc3RhcnQgPSBNYXRoLmZsb29yKHN0YXJ0IC8gc3RlcCkgKiBzdGVwO1xuICAgICAgICBzdG9wID0gTWF0aC5jZWlsKHN0b3AgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPCAwKSB7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5jZWlsKHN0YXJ0ICogc3RlcCkgLyBzdGVwO1xuICAgICAgICBzdG9wID0gTWF0aC5mbG9vcihzdG9wICogc3RlcCkgLyBzdGVwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwcmVzdGVwID0gc3RlcDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5lYXIoKSB7XG4gIHZhciBzY2FsZSA9IGNvbnRpbnVvdXMoKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGxpbmVhcigpKTtcbiAgfTtcblxuICBpbml0UmFuZ2UuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG4iLCJleHBvcnQgY29uc3QgbWFwc19lbmRwb2ludCA9IFtcblx0eyByZWdpb246ICdFYXN0ZXJuIENhcGUnLCBlbmRwb2ludDogXCJlY1wiIH0sXG5cdHsgcmVnaW9uOiAnRnJlZSBTdGF0ZScsIGVuZHBvaW50OiBcImZzXCIgfSxcblx0eyByZWdpb246ICdHYXV0ZW5nJywgZW5kcG9pbnQ6IFwiZ3BcIiB9LFxuXHR7IHJlZ2lvbjogJ0t3YVp1bHUtTmF0YWwnLCBlbmRwb2ludDogXCJrem5cIiB9LFxuXHR7IHJlZ2lvbjogJ0xpbXBvcG8nLCBlbmRwb2ludDogXCJscFwiIH0sXG5cdHsgcmVnaW9uOiAnTXB1bWFsYW5nYScsIGVuZHBvaW50OiBcIm1wXCIgfSxcblx0eyByZWdpb246ICdOb3J0aCBXZXN0JywgZW5kcG9pbnQ6IFwibndcIiB9LFxuXHR7IHJlZ2lvbjogJ05vcnRoZXJuIENhcGUnLCBlbmRwb2ludDogXCJuY1wiIH0sXG5cdHsgcmVnaW9uOiAnV2VzdGVybiBDYXBlJywgZW5kcG9pbnQ6IFwid2NcIiB9XG5dOyIsIjxzY3JpcHQ+XG4gIC8vIEB0cy1ub2NoZWNrXG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cbiAgaW1wb3J0IHsgZ2VvSWRlbnRpdHksIGdlb1BhdGggfSBmcm9tIFwiZDMtZ2VvXCI7XG4gIGltcG9ydCB7IHNjYWxlTGluZWFyIH0gZnJvbSBcImQzLXNjYWxlXCI7XG4gIGltcG9ydCB7IGV4dGVudCB9IGZyb20gXCJkMy1hcnJheVwiO1xuICBpbXBvcnQgeyBoc2wsIHJnYiB9IGZyb20gXCJkMy1jb2xvclwiO1xuXG4gIGltcG9ydCB7IGxvYWREYXRhIH0gZnJvbSBcIkBlbGVjdGlvbi1lbmdpbmUvY29tbW9uL2xvYWREYXRhXCI7XG4gIGltcG9ydCB7IG1hcHNfZW5kcG9pbnQgfSBmcm9tIFwiLi4vLi4vbGlicy9tYXBzXCI7XG4gIGltcG9ydCB7IHBhcnR5Q29sb3IgfSBmcm9tIFwiQGVsZWN0aW9uLWVuZ2luZS9jb21tb24vY29sb3JzXCI7XG5cbiAgZXhwb3J0IGxldCBzZWxlY3RlZF95ZWFyID0gMjAyNDtcbiAgZXhwb3J0IGxldCBzZWxlY3RlZF9yZWdpb24gPSBcIkVhc3Rlcm4gQ2FwZVwiO1xuICBleHBvcnQgbGV0IHByb3ZpbmNlcztcblxuICBleHBvcnQgbGV0IGRhdGE7XG5cbiAgbGV0IHNlbGVjdGVkX2VsZWN0aW9uID0gXCJQcm92aW5jaWFsIExlZ2lzbGF0dXJlXCI7XG5cbiAgLy8gQVBJIGJhc2UgdXJsXG4gIGNvbnN0IGJhc2VfdXJsID0gXCJodHRwczovL2llYy1hcGkucmV2ZW5naW5lLmRhaWx5bWF2ZXJpY2suY28uemFcIjtcblxuICAvLyBzaG9ydCBjb2RlIGZvciBtYXAgdXJsIEFQSSBlbmRwb2ludCAtIHNldCB0byBlYXN0ZXJuIGNhcGVcbiAgbGV0IHByb3ZpbmNlX21hcF9jb2RlID0gXCJlY1wiO1xuXG4gIC8vIG1hcCBBUEkgdXJsIGVuZHBvaW50XG4gIGxldCBtYXBfdXJsID0gYCR7YmFzZV91cmx9L21hcHMvJHtzZWxlY3RlZF95ZWFyfS9zYS1tdW5pYy0ke3Byb3ZpbmNlX21hcF9jb2RlfS5nZW9qc29uLm1pbi5qc29uYDtcblxuICAvLyBtdW5pY2lwYWwgZ2VvZ3JhcGhpY2FsIGRhdGE7XG4gIGxldCBnZW9fZGF0YTtcblxuICAvLyBtdW5pY2lwYWwgZ2VvZ3JhcGhpY2FsIGZlYXR1cmVzIGRhdGE7XG4gIGxldCBwcm92aW5jZXNfZ2VvX2RhdGE7XG5cbiAgLy8gbWFwIHdpZHRoIGFuZCBoZWlnaHQgZGltZW5zaW9uXG4gIGxldCB3aWR0aCA9IDYwMDtcbiAgbGV0IGhlaWdodCA9IDYwMDtcblxuICAvLyBhcnJheSBvZiBwYXJ0aWVzIHdpdGggdGhlIGhpZ2hlc3Qgdm90ZXMgaW4gYWxsIG11bmljaXBhbGl0aWVzIGZyb20gYSBwcm92aW5jZVxuICBsZXQgcHJvdmluY2VzX2FycmF5O1xuICBsZXQgZ2V0VG90YWxQYXJ0eTtcbiAgbGV0IGhpZ2hQYXJ0eSA9IFtdO1xuXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIHNlbGVjdGVkX3JlZ2lvbiA9IFwiRWFzdGVybiBDYXBlXCI7XG4gICAgZ2VvX2RhdGEgPSBhd2FpdCBnZXRNYXBEYXRhKG1hcF91cmwpO1xuICAgIHByb3ZpbmNlc19nZW9fZGF0YSA9IGdlb19kYXRhLmZlYXR1cmVzO1xuICAgIGRhdGEgPSBhd2FpdCBnZXREYXRhKHNlbGVjdGVkX3llYXIsIHNlbGVjdGVkX3JlZ2lvbik7XG5cbiAgICBnZXRUb3RhbFBhcnR5ID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IG11bmljaXBhbCA9IFtdO1xuICAgICAgZm9yIChsZXQgaXRlbSBpbiBkYXRhKSB7XG4gICAgICAgIGNvbnN0IG11bmljaXBhbF9uYW1lID0geyBtdW5pY2lwYWxfY29kZTogZGF0YVtpdGVtXS5tdW5pY2lwYWxpdHlfbmFtZS5zcGxpdChcIiBcIilbMF0gfTtcbiAgICAgICAgY29uc3QgaGlnaGVzdFZvdGVQZXJjUGFydHkgPSBkYXRhW2l0ZW1dLnBhcnR5X2JhbGxvdF9yZXN1bHRzLnJlZHVjZShcbiAgICAgICAgICAobWF4LCBwYXJ0eSkgPT4gKHBhcnR5LnZvdGVfcGVyYyA+IG1heC52b3RlX3BlcmMgPyBwYXJ0eSA6IG1heCksXG4gICAgICAgICAgZGF0YVtpdGVtXS5wYXJ0eV9iYWxsb3RfcmVzdWx0c1swXVxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhoaWdoZXN0Vm90ZVBlcmNQYXJ0eSk7XG4gICAgICAgIG11bmljaXBhbC5wdXNoKE9iamVjdC5hc3NpZ24oaGlnaGVzdFZvdGVQZXJjUGFydHksIG11bmljaXBhbF9uYW1lKSk7XG4gICAgICB9XG5cbiAgICAgIGhpZ2hQYXJ0eSA9IG11bmljaXBhbDtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gcHJvdmluY2VzX2dlb19kYXRhLm1hcCgoZmVhdHVyZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGluZ1BhcnR5UmVzdWx0ID0gbXVuaWNpcGFsLmZpbmQoKHBhcnR5KSA9PiBwYXJ0eS5tdW5pY2lwYWxfY29kZSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzLk1VTklfQ09ERSk7XG4gICAgICAgIGlmIChtYXRjaGluZ1BhcnR5UmVzdWx0KSB7XG4gICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzLmhpZ2hlc3RfcGFydHlfcmVzdWx0ID0gbWF0Y2hpbmdQYXJ0eVJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmVhdHVyZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBwcm92aW5jZXNfYXJyYXkgPSBnZXRUb3RhbFBhcnR5KGRhdGEpO1xuICB9KTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRNYXBEYXRhKHVybCkge1xuICAgIGNvbnN0IGQgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIHJldHVybiBkLmpzb24oKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoeWVhciwgc2VsZWN0ZWRfcmVnaW9uKSB7XG4gICAgLy8gY29uc29sZS5sb2coeWVhciwgc2VsZWN0ZWRfZWxlY3Rpb24sIHNlbGVjdGVkX3JlZ2lvbik7XG4gICAgaWYgKHNlbGVjdGVkX3JlZ2lvbiAhPT0gXCJOYXRpb25hbFwiKSB7XG4gICAgICBjb25zdCBwcm92aW5jaWFsX3NlYXRzX3Jlc3VsdCA9IGF3YWl0IGxvYWREYXRhKHtcbiAgICAgICAgeWVhcixcbiAgICAgICAgZWxlY3Rpb246IHNlbGVjdGVkX2VsZWN0aW9uLFxuICAgICAgICByZWdpb246IHNlbGVjdGVkX3JlZ2lvbixcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcHJvdmluY2lhbF9zZWF0c19yZXN1bHQubXVuaWNpcGFsX3Jlc3VsdHM7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2V0RGF0YShwcm92aW5jZSkge1xuICAgIHNlbGVjdGVkX3JlZ2lvbiA9IHByb3ZpbmNlO1xuICAgIGRhdGEgPSBhd2FpdCBnZXREYXRhKHNlbGVjdGVkX3llYXIsIHByb3ZpbmNlKTtcbiAgICBwcm92aW5jZV9tYXBfY29kZSA9IG1hcHNfZW5kcG9pbnQuZmlsdGVyKChkKSA9PiBkLnJlZ2lvbiA9PT0gcHJvdmluY2UpWzBdLmVuZHBvaW50O1xuICAgIG1hcF91cmwgPSBgJHtiYXNlX3VybH0vbWFwcy8ke3NlbGVjdGVkX3llYXJ9L3NhLW11bmljLSR7cHJvdmluY2VfbWFwX2NvZGV9Lmdlb2pzb24ubWluLmpzb25gO1xuICAgIGdlb19kYXRhID0gYXdhaXQgZ2V0TWFwRGF0YShtYXBfdXJsKTtcbiAgICBwcm92aW5jZXNfZ2VvX2RhdGEgPSBnZW9fZGF0YS5mZWF0dXJlcztcbiAgICBwcm92aW5jZXNfYXJyYXkgPSBnZXRUb3RhbFBhcnR5KGRhdGEpO1xuICB9XG5cbiAgJDogY29sb3Jfc2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gICAgLmRvbWFpbihleHRlbnQoaGlnaFBhcnR5LCAoZCkgPT4gZC52b3RlX3BlcmMpKVxuICAgIC5yYW5nZShbNDAsIDEwMF0pO1xuXG4gICQ6IGNvbG9yRmlsbCA9IChtdW5pY2lwYWwsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaGV4ID0gcGFydHlDb2xvcihtdW5pY2lwYWwucHJvcGVydGllcy5oaWdoZXN0X3BhcnR5X3Jlc3VsdC5wYXJ0eV9hYmJyZXZpYXRpb24sIGluZGV4KTtcbiAgICBsZXQgeyByLCBnLCBiIH0gPSByZ2IoaHNsKGhleCkpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSBjb2xvcl9zY2FsZShtdW5pY2lwYWwucHJvcGVydGllcy5oaWdoZXN0X3BhcnR5X3Jlc3VsdC52b3RlX3BlcmMpIC8gMTAwO1xuICAgIC8vIGNvbnNvbGUubG9nKGxpZ2h0KTtcbiAgICByZXR1cm4gcmdiKHIsIGcsIGIsIG9wYWNpdHkpO1xuICB9O1xuXG4gICQ6IHByb2plY3Rpb24gPSBnZW9JZGVudGl0eSgpXG4gICAgLnJlZmxlY3RZKHRydWUpXG4gICAgLmZpdEV4dGVudChcbiAgICAgIFtcbiAgICAgICAgWzIwLCAyMF0sXG4gICAgICAgIFt3aWR0aCwgaGVpZ2h0XSxcbiAgICAgIF0sXG4gICAgICBnZW9fZGF0YVxuICAgICk7XG5cbiAgLy8gR2VvZ3JhcGhpYyBwYXRoIGdlbmVyYXRvciBiYXNlZCBvbiB0aGUgcHJvamVjdGlvbiBjb25maWd1cmVkIGFib3ZlLlxuICAkOiBwYXRoID0gZ2VvUGF0aChwcm9qZWN0aW9uKTtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtYnV0dG9uLXdyYXBwZXJcIj5cbiAgeyNlYWNoIHByb3ZpbmNlcyBhcyBwcm92aW5jZX1cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXllYXItYnV0dG9uXCJcbiAgICAgIGNsYXNzOnNlbGVjdGVkPXtzZWxlY3RlZF9yZWdpb24gPT09IHByb3ZpbmNlfVxuICAgICAgb246Y2xpY2s9eygpID0+IHNldERhdGEocHJvdmluY2UpfVxuICAgID5cbiAgICAgIHtwcm92aW5jZX1cbiAgICA8L2J1dHRvbj5cbiAgey9lYWNofVxuPC9kaXY+XG5cbnsjaWYgcHJvdmluY2VzX2FycmF5fVxuICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtc3ZnLXdyYXBwZXJcIj5cbiAgICA8c3ZnIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtbWFwLXN2Z1wiIHt3aWR0aH0ge2hlaWdodH0+XG4gICAgICA8IS0tIE11bmljaXBhbGl0aWVzIEdyb3VwIC0tPlxuICAgICAgPGcgaWQ9XCJzYU1hcFwiPlxuICAgICAgICB7I2VhY2ggcHJvdmluY2VzX2FycmF5IGFzIG11bmljaXBhbGl0eSwgaW5kZXh9XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGRhdGEtcGVyYz17bXVuaWNpcGFsaXR5LnByb3BlcnRpZXMuaGlnaGVzdF9wYXJ0eV9yZXN1bHQudm90ZV9wZXJjfVxuICAgICAgICAgICAgZD17cGF0aChtdW5pY2lwYWxpdHkpfVxuICAgICAgICAgICAgZmlsbD17Y29sb3JGaWxsKG11bmljaXBhbGl0eSwgaW5kZXgpfVxuICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMC45NFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgey9lYWNofVxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbns6ZWxzZX1cbiAgPHA+Y2hlY2tpbmcgb3V0PC9wPlxuey9pZn1cblxuPHN0eWxlPlxuICBidXR0b24uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cbiAgLy8gQHRzLW5vY2hlY2tcblxuICBpbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gXCJAZWxlY3Rpb24tZW5naW5lL2NvbW1vbi9sb2FkRGF0YS5qc1wiO1xuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuXG4gIGltcG9ydCBOYXRpb25hbFZpZXcgZnJvbSBcIi4vbGliL2NvbXBvbmVudHMvZGFzaGJvYXJkLXZpZXcvbmF0aW9uYWxWaWV3LnN2ZWx0ZVwiO1xuICBpbXBvcnQgUHJvdmluY2lhbFZpZXcgZnJvbSBcIi4vbGliL2NvbXBvbmVudHMvZGFzaGJvYXJkLXZpZXcvcHJvdmluY2lhbFZpZXcuc3ZlbHRlXCI7XG4gIGltcG9ydCB5ZWFycyBmcm9tIFwiQGVsZWN0aW9uLWVuZ2luZS9jb21tb24veWVhcnMuanNvblwiO1xuICBpbXBvcnQgUFJPVklOQ0VTIGZyb20gXCJAZWxlY3Rpb24tZW5naW5lL2NvbW1vbi9wcm92aW5jZXMuanNvblwiO1xuXG4gIC8vIFBhcmFtZXRlcnNcbiAgZXhwb3J0IGxldCBzZWxlY3RlZF95ZWFyID0gMjAxOTsgLy8gMjAyNCwgMjAxOSwgMjAxNFxuICBleHBvcnQgbGV0IHNlbGVjdGVkX2VsZWN0aW9uID0gXCJOYXRpb25hbCBBc3NlbWJseVwiOyAvLyBOYXRpb25hbCBBc3NlbWJseSwgUHJvdmluY2lhbCBMZWdpc2xhdHVyZVxuICBleHBvcnQgbGV0IHNlbGVjdGVkX3JlZ2lvbiA9IFwiTmF0aW9uYWxcIjsgLy8gTmF0aW9uYWwsIEdhdXRlbmcsIFdlc3Rlcm4gQ2FwZSwgZXRjLlxuICBleHBvcnQgbGV0IHNob3dfYnV0dG9ucyA9IGZhbHNlO1xuXG4gIGxldCBwcm92aW5jZXMgPSBQUk9WSU5DRVM7XG4gIGxldCBsb2FkaW5nID0gZmFsc2U7XG5cbiAgbGV0IGRhdGE7XG5cbiAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgZGF0YSA9IGF3YWl0IGdldERhdGEoc2VsZWN0ZWRfeWVhcik7XG4gICAgbG9hZGluZyA9IHRydWU7XG4gIH0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHNldFllYXIoeWVhcikge1xuICAgIGlmICh5ZWFyID09PSBzZWxlY3RlZF95ZWFyKSByZXR1cm47XG4gICAgc2VsZWN0ZWRfeWVhciA9IHllYXI7XG4gICAgZGF0YSA9IGF3YWl0IGdldERhdGEoc2VsZWN0ZWRfeWVhcik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZXRFbGVjdGlvbihlbGVjdGlvbikge1xuICAgIGlmIChlbGVjdGlvbiA9PT0gc2VsZWN0ZWRfZWxlY3Rpb24pIHJldHVybjtcbiAgICBzZWxlY3RlZF9lbGVjdGlvbiA9IGVsZWN0aW9uO1xuICAgIGlmIChlbGVjdGlvbiA9PT0gXCJQcm92aW5jaWFsIExlZ2lzbGF0dXJlXCIpIHtcbiAgICAgIHByb3ZpbmNlcyA9IFBST1ZJTkNFUy5maWx0ZXIoKHApID0+ICFbXCJOYXRpb25hbFwiLCBcIk91dCBvZiBDb3VudHJ5XCJdLmluY2x1ZGVzKHApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvdmluY2VzID0gUFJPVklOQ0VTO1xuICAgIH1cbiAgICBkYXRhID0gYXdhaXQgZ2V0RGF0YShzZWxlY3RlZF95ZWFyLCBzZWxlY3RlZF9lbGVjdGlvbiwgc2VsZWN0ZWRfcmVnaW9uKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNldFJlZ2lvbihyZWdpb24pIHtcbiAgICBpZiAocmVnaW9uID09PSBzZWxlY3RlZF9yZWdpb24pIHJldHVybjtcbiAgICBzZWxlY3RlZF9yZWdpb24gPSByZWdpb247XG4gICAgZGF0YSA9IGF3YWl0IGdldERhdGEoc2VsZWN0ZWRfeWVhciwgc2VsZWN0ZWRfZWxlY3Rpb24sIHNlbGVjdGVkX3JlZ2lvbik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKHllYXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh5ZWFyLCBzZWxlY3RlZF9lbGVjdGlvbiwgc2VsZWN0ZWRfcmVnaW9uKTtcblxuICAgIGlmIChzZWxlY3RlZF9lbGVjdGlvbiA9PT0gXCJOYXRpb25hbCBBc3NlbWJseVwiKSB7XG4gICAgICBjb25zdCBuYXRpb25hbF9zZWF0c19yZXN1bHQgPSBhd2FpdCBsb2FkRGF0YSh7XG4gICAgICAgIHllYXIsXG4gICAgICAgIHNlbGVjdGVkX3JlZ2lvbixcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmF0aW9uYWxfc2VhdHNfcmVzdWx0LnByb3ZpbmNpYWxfcmVzdWx0cztcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWRfcmVnaW9uICE9PSBcIk5hdGlvbmFsXCIpIHtcbiAgICAgIGNvbnN0IHByb3ZpbmNpYWxfc2VhdHNfcmVzdWx0ID0gYXdhaXQgbG9hZERhdGEoe1xuICAgICAgICB5ZWFyLFxuICAgICAgICBlbGVjdGlvbjogc2VsZWN0ZWRfZWxlY3Rpb24sXG4gICAgICAgIHJlZ2lvbjogc2VsZWN0ZWRfcmVnaW9uLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcm92aW5jaWFsX3NlYXRzX3Jlc3VsdC5tdW5pY2lwYWxfcmVzdWx0cztcbiAgICB9XG4gIH1cblxuICAvLyB3aW5kb3cgd2lkdGggZGVmaW5pdGlvblxuICBsZXQgaW5uZXJXaWR0aCA9IDA7XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTp3aW5kb3cgYmluZDppbm5lcldpZHRoIC8+XG5cbjxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS1tYXBzZWN0aW9uXCI+XG4gIHsjaWYgc2hvd19idXR0b25zfVxuICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS1zZWxlY3RidXR0b24td3JhcHBlclwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzczpzZWxlY3RlZD17c2VsZWN0ZWRfZWxlY3Rpb24gPT09IFwiTmF0aW9uYWwgQXNzZW1ibHlcIn1cbiAgICAgICAgb246Y2xpY2s9eygpID0+IHNldEVsZWN0aW9uKFwiTmF0aW9uYWwgQXNzZW1ibHlcIil9XG4gICAgICA+XG4gICAgICAgIE5hdGlvbmFsIEFzc2VtYmx5PC9idXR0b25cbiAgICAgID5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M6c2VsZWN0ZWQ9e3NlbGVjdGVkX2VsZWN0aW9uID09PSBcIlByb3ZpbmNpYWwgTGVnaXNsYXR1cmVcIn1cbiAgICAgICAgb246Y2xpY2s9eygpID0+IHNldEVsZWN0aW9uKFwiUHJvdmluY2lhbCBMZWdpc2xhdHVyZVwiKX1cbiAgICAgID5cbiAgICAgICAgUHJvdmluY2lhbCBMZWdpc2xhdHVyZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtc2VsZWN0YnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgIHsjZWFjaCB5ZWFycyBhcyB5ZWFyfVxuICAgICAgICA8YnV0dG9uIGNsYXNzOnNlbGVjdGVkPXtzZWxlY3RlZF95ZWFyID09PSB5ZWFyfSBvbjpjbGljaz17KCkgPT4gc2V0WWVhcih5ZWFyKX0+IHt5ZWFyfTwvYnV0dG9uPlxuICAgICAgey9lYWNofVxuICAgIDwvZGl2PlxuICB7L2lmfVxuXG4gIHsjaWYgbG9hZGluZ31cbiAgICB7I2lmIHNlbGVjdGVkX2VsZWN0aW9uID09PSBcIk5hdGlvbmFsIEFzc2VtYmx5XCJ9XG4gICAgICB7I2lmIGRhdGF9XG4gICAgICAgIDxOYXRpb25hbFZpZXcge2RhdGF9IHtpbm5lcldpZHRofSAvPlxuICAgICAgey9pZn1cbiAgICB7OmVsc2UgaWYgc2VsZWN0ZWRfZWxlY3Rpb24gPT09IFwiUHJvdmluY2lhbCBMZWdpc2xhdHVyZVwifVxuICAgICAgPFByb3ZpbmNpYWxWaWV3IHtzZWxlY3RlZF95ZWFyfSBiaW5kOnNlbGVjdGVkX3JlZ2lvbiBiaW5kOnByb3ZpbmNlcyB7ZGF0YX0gLz5cbiAgICB7L2lmfVxuICB7OmVsc2V9XG4gICAgPGRpdj4uLi5Mb2FkaW5nPC9kaXY+XG4gIHsvaWZ9XG48L2Rpdj5cblxuPHN0eWxlPlxuICAuZWxlY3Rpb25lbmdpbmUtc2VsZWN0YnV0dG9uLXdyYXBwZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxuXG4gIGJ1dHRvbi5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuICAgIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gICAgaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tIFwiQGVsZWN0aW9uLWVuZ2luZS9jb21tb24vbG9hZERhdGEuanNcIjtcbiAgICBpbXBvcnQgeyBwYXJ0eUNvbG9yIH0gZnJvbSBcIkBlbGVjdGlvbi1lbmdpbmUvY29tbW9uL2NvbG9ycy5qc1wiO1xuICAgIGltcG9ydCBZRUFSUyBmcm9tIFwiQGVsZWN0aW9uLWVuZ2luZS9jb21tb24veWVhcnMuanNvblwiO1xuICAgIGltcG9ydCBQUk9WSU5DRVMgZnJvbSBcIkBlbGVjdGlvbi1lbmdpbmUvY29tbW9uL3Byb3ZpbmNlcy5qc29uXCI7XG5cbiAgICBleHBvcnQgbGV0IHNlbGVjdGVkX3llYXIgPSAyMDE5OyAvLyAyMDI0LCAyMDE5LCAyMDE0XG4gICAgZXhwb3J0IGxldCBzZWxlY3RlZF9lbGVjdGlvbiA9IFwiTmF0aW9uYWwgQXNzZW1ibHlcIjsgLy8gTmF0aW9uYWwgQXNzZW1ibHksIFByb3ZpbmNpYWwgTGVnaXNsYXR1cmVcbiAgICBleHBvcnQgbGV0IHNlbGVjdGVkX3JlZ2lvbiA9IFwiTmF0aW9uYWxcIjsgLy8gTmF0aW9uYWwsIEdhdXRlbmcsIFdlc3Rlcm4gQ2FwZSwgZXRjLlxuICAgIGV4cG9ydCBsZXQgc2hvd19idXR0b25zID0gZmFsc2U7XG4gICAgZXhwb3J0IGxldCBzaG93X3RpdGxlID0gdHJ1ZTtcblxuICAgIGxldCBwcm92aW5jZXMgPSBQUk9WSU5DRVM7XG5cbiAgICBsZXQgZGF0YTtcblxuICAgIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBkYXRhID0gYXdhaXQgcHJvY2Vzc0RhdGEoc2VsZWN0ZWRfeWVhcik7XG4gICAgfSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZXRZZWFyKHllYXIpIHtcbiAgICAgICAgaWYgKHllYXIgPT09IHNlbGVjdGVkX3llYXIpIHJldHVybjtcbiAgICAgICAgc2VsZWN0ZWRfeWVhciA9IHllYXI7XG4gICAgICAgIGRhdGEgPSBhd2FpdCBwcm9jZXNzRGF0YShzZWxlY3RlZF95ZWFyKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZXRSZWdpb24ocmVnaW9uKSB7XG4gICAgICAgIGlmIChyZWdpb24gPT09IHNlbGVjdGVkX3JlZ2lvbikgcmV0dXJuO1xuICAgICAgICBzZWxlY3RlZF9yZWdpb24gPSByZWdpb247XG4gICAgICAgIGRhdGEgPSBhd2FpdCBwcm9jZXNzRGF0YShzZWxlY3RlZF95ZWFyKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZXRFbGVjdGlvbihlbGVjdGlvbikge1xuICAgICAgICBpZiAoZWxlY3Rpb24gPT09IHNlbGVjdGVkX2VsZWN0aW9uKSByZXR1cm47XG4gICAgICAgIHNlbGVjdGVkX2VsZWN0aW9uID0gZWxlY3Rpb247XG4gICAgICAgIGlmIChlbGVjdGlvbiA9PT0gXCJQcm92aW5jaWFsIExlZ2lzbGF0dXJlXCIpIHtcbiAgICAgICAgICAgIHByb3ZpbmNlcyA9IFBST1ZJTkNFUy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKHApID0+ICFbXCJOYXRpb25hbFwiLCBcIk91dCBvZiBDb3VudHJ5XCJdLmluY2x1ZGVzKHApXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvdmluY2VzID0gUFJPVklOQ0VTO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSBhd2FpdCBwcm9jZXNzRGF0YShzZWxlY3RlZF95ZWFyKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKHllYXIpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkX2VsZWN0aW9uID09PSBcIk5hdGlvbmFsIEFzc2VtYmx5XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZvdGVfcmVzdWx0cyA9IGF3YWl0IGxvYWREYXRhKHtcbiAgICAgICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgICAgIGVsZWN0aW9uOiBzZWxlY3RlZF9lbGVjdGlvbixcbiAgICAgICAgICAgICAgICByZWdpb246IHNlbGVjdGVkX3JlZ2lvbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkX3JlZ2lvbiAhPT0gXCJOYXRpb25hbFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdm90ZV9yZXN1bHRzLnByb3ZpbmNpYWxfcmVzdWx0cy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAocikgPT4gci5wcm92aW5jZV9uYW1lID09PSBzZWxlY3RlZF9yZWdpb25cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdm90ZV9yZXN1bHRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFtcIk5hdGlvbmFsXCIsIFwiT3V0IG9mIENvdW50cnlcIl0uaW5jbHVkZXMoc2VsZWN0ZWRfcmVnaW9uKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnR5X2JhbGxvdF9yZXN1bHRzOiBbXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgdm90ZV9yZXN1bHRzID0gYXdhaXQgbG9hZERhdGEoe1xuICAgICAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICAgICAgZWxlY3Rpb246IHNlbGVjdGVkX2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogXCJOYXRpb25hbFwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdm90ZV9yZXN1bHRzLnByb3ZpbmNpYWxfcmVzdWx0cy5maW5kKFxuICAgICAgICAgICAgICAgIChyKSA9PiByLnByb3ZpbmNlX25hbWUgPT09IHNlbGVjdGVkX3JlZ2lvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKHllYXIpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF95ZWFyID0gYXdhaXQgZ2V0RGF0YSh5ZWFyKTtcbiAgICAgICAgaWYgKHllYXIgPiBZRUFSU1swXSkge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNfeWVhciA9IGF3YWl0IGdldERhdGEoeWVhciAtIDUpO1xuICAgICAgICAgICAgZm9yIChsZXQgcGFydHkgb2YgY3VycmVudF95ZWFyLnBhcnR5X2JhbGxvdF9yZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNfcGFydHkgPSBwcmV2aW91c195ZWFyLnBhcnR5X2JhbGxvdF9yZXN1bHRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIChwKSA9PiBwLnBhcnR5X2lkID09PSBwYXJ0eS5wYXJ0eV9pZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzX3BhcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnR5LmNoYW5nZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXJ0eS52b3RlX3BlcmMgLSBwcmV2aW91c19wYXJ0eS52b3RlX3BlcmMpICogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICkgLyAxMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0eS5jaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudF95ZWFyO1xuICAgIH1cbjwvc2NyaXB0PlxuXG48ZGl2PlxuICAgIHsjaWYgc2hvd19idXR0b25zfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUteWVhcnMtYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUteWVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBzZXRFbGVjdGlvbihcIk5hdGlvbmFsIEFzc2VtYmx5XCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzOmFjdGl2ZT17c2VsZWN0ZWRfZWxlY3Rpb24gPT09IFwiTmF0aW9uYWwgQXNzZW1ibHlcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOYXRpb25hbCBBc3NlbWJseVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS15ZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IHNldEVsZWN0aW9uKFwiUHJvdmluY2lhbCBMZWdpc2xhdHVyZVwiKX1cbiAgICAgICAgICAgICAgICBjbGFzczphY3RpdmU9e3NlbGVjdGVkX2VsZWN0aW9uID09PSBcIlByb3ZpbmNpYWwgTGVnaXNsYXR1cmVcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQcm92aW5jaWFsIExlZ2lzbGF0dXJlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS15ZWFycy1idXR0b25zXCI+XG4gICAgICAgICAgICB7I2VhY2ggWUVBUlMgYXMgeWVhcn1cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUteWVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gc2V0WWVhcih5ZWFyKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6YWN0aXZlPXtzZWxlY3RlZF95ZWFyID09PSB5ZWFyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3llYXJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUteWVhcnMtYnV0dG9uc1wiPlxuICAgICAgICAgICAgeyNpZiBzZWxlY3RlZF9lbGVjdGlvbiA9PT0gXCJOYXRpb25hbCBBc3NlbWJseVwifVxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS15ZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBzZXRSZWdpb24oXCJOYXRpb25hbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6YWN0aXZlPXtzZWxlY3RlZF9yZWdpb24gPT09IFwiTmF0aW9uYWxcIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE5hdGlvbmFsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgeyNlYWNoIHByb3ZpbmNlcyBhcyBwcm92aW5jZX1cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUteWVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gc2V0UmVnaW9uKHByb3ZpbmNlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6YWN0aXZlPXtzZWxlY3RlZF9yZWdpb24gPT09IHByb3ZpbmNlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb3ZpbmNlfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2Rpdj5cbiAgICB7L2lmfVxuICAgIHsjaWYgc2hvd190aXRsZX1cbiAgICAgICAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRpdGxlXCI+XG4gICAgICAgICAgICBSZXN1bHRzIGZvclxuICAgICAgICAgICAge3NlbGVjdGVkX3llYXJ9XG4gICAgICAgICAgICB7c2VsZWN0ZWRfZWxlY3Rpb259XG4gICAgICAgICAgICB7c2VsZWN0ZWRfcmVnaW9ufSBHZW5lcmFsIEVsZWN0aW9uXG4gICAgICAgIDwvZGl2PlxuICAgIHsvaWZ9XG4gICAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRhYmxlLWNvbnRhaW5lclwiPlxuICAgICAgICA8dGFibGUgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS10YWJsZVwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0ciBzdHlsZTpib3JkZXItbGVmdD1cIjZweCAjY2NjIHNvbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXBhcnR5LWNvbHVtblwiPlBhcnR5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgeyNpZiBzZWxlY3RlZF9yZWdpb24gIT09IFwiT3V0IG9mIENvdW50cnlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXNlYXRzLWNvbHVtblwiPlNlYXRzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtdm90ZXMtY29sdW1uXCI+Vm90ZXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICB7I2lmIHNlbGVjdGVkX3llYXIgPiAyMDA5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtY2hhbmdlLWNvbHVtblwiPkNoYW5nZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyNpZiBkYXRhfVxuICAgICAgICAgICAgICAgICAgICB7I2VhY2ggZGF0YS5wYXJ0eV9iYWxsb3RfcmVzdWx0cyBhcyByb3csIGl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTpib3JkZXItbGVmdD1cIjZweCB7cGFydHlDb2xvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnBhcnR5X2FiYnJldmlhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29saWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOmJhY2tncm91bmQtY29sb3I9e2kgJSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZjFmMWYxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiNGRkZGRkZcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS1wYXJ0eS1jb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3Jvdy5wYXJ0eV9uYW1lfTwvdGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBzZWxlY3RlZF9yZWdpb24gIT09IFwiT3V0IG9mIENvdW50cnlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtc2VhdHMtY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57cm93LnNlYXRzfTwvdGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtdm90ZXMtY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIpLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy52b3Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfTwvdGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiBzZWxlY3RlZF95ZWFyID4gMjAwOX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtY2hhbmdlLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiByb3cuY2hhbmdlID4gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtbGFiZWwgZWxlY3Rpb25lbmdpbmUtY2hhbmdlLXVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICt7cm93LmNoYW5nZX0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgcm93LmNoYW5nZSA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtbGFiZWwgZWxlY3Rpb25lbmdpbmUtY2hhbmdlLW5vY2hhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgcm93LmNoYW5nZSA8IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImVsZWN0aW9uZW5naW5lLWxhYmVsIGVsZWN0aW9uZW5naW5lLWNoYW5nZS1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuY2hhbmdlfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtbGFiZWwgZWxlY3Rpb25lbmdpbmUtY2hhbmdlLW5hXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE4vQVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgICAuZWxlY3Rpb25lbmdpbmUteWVhci1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cblxuICAgIC5lbGVjdGlvbmVuZ2luZS15ZWFyLWJ1dHRvbi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLXRhYmxlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIHRhYmxlLmVsZWN0aW9uZW5naW5lLXRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgdGFibGUuZWxlY3Rpb25lbmdpbmUtdGFibGUgdGgsXG4gICAgdGFibGUuZWxlY3Rpb25lbmdpbmUtdGFibGUgdGQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuXG4gICAgdGFibGUuZWxlY3Rpb25lbmdpbmUtdGFibGUgdGgge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLXRhYmxlIHRoZWFkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICB9XG5cbiAgICAuZWxlY3Rpb25lbmdpbmUtcGFydHktY29sdW1uIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5lbGVjdGlvbmVuZ2luZS1zZWF0cy1jb2x1bW4ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgIC5lbGVjdGlvbmVuZ2luZS1jaGFuZ2UtY29sdW1uIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZWxlY3Rpb25lbmdpbmUtdm90ZXMtY29sdW1uIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAuZWxlY3Rpb25lbmdpbmUtbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLWNoYW5nZS11cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLWNoYW5nZS1kb3duIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgICB9XG5cbiAgICAuZWxlY3Rpb25lbmdpbmUtY2hhbmdlLW5vY2hhbmdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdhN2E3YTtcbiAgICB9XG5cbiAgICAuZWxlY3Rpb25lbmdpbmUtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG48L3N0eWxlPlxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUkJUcmVlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSQlRyZWUoKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGw7XG4gICAgfVxuICAgIFJCVHJlZS5wcm90b3R5cGUuaW5zZXJ0U3VjY2Vzc29yID0gZnVuY3Rpb24gKG5vZGUsIHN1Y2Nlc3Nvcikge1xuICAgICAgICB2YXIgcGFyZW50O1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgc3VjY2Vzc29yLnByZXYgPSBub2RlO1xuICAgICAgICAgICAgc3VjY2Vzc29yLm5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICBpZiAobm9kZS5uZXh0KSB7XG4gICAgICAgICAgICAgICAgbm9kZS5uZXh0LnByZXYgPSBzdWNjZXNzb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLm5leHQgPSBzdWNjZXNzb3I7XG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgICAgICAgIHdoaWxlIChub2RlLmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5sZWZ0ID0gc3VjY2Vzc29yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yaWdodCA9IHN1Y2Nlc3NvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICBub2RlID0gdGhpcy5maXJzdCh0aGlzLnJvb3QpO1xuICAgICAgICAgICAgc3VjY2Vzc29yLnByZXYgPSBudWxsO1xuICAgICAgICAgICAgc3VjY2Vzc29yLm5leHQgPSBub2RlO1xuICAgICAgICAgICAgbm9kZS5wcmV2ID0gc3VjY2Vzc29yO1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gc3VjY2Vzc29yO1xuICAgICAgICAgICAgcGFyZW50ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1Y2Nlc3Nvci5wcmV2ID0gc3VjY2Vzc29yLm5leHQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yb290ID0gc3VjY2Vzc29yO1xuICAgICAgICAgICAgcGFyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzdWNjZXNzb3IubGVmdCA9IHN1Y2Nlc3Nvci5yaWdodCA9IG51bGw7XG4gICAgICAgIHN1Y2Nlc3Nvci5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHN1Y2Nlc3Nvci5yZWQgPSB0cnVlO1xuICAgICAgICB2YXIgZ3JhbmRwYSwgdW5jbGU7XG4gICAgICAgIG5vZGUgPSBzdWNjZXNzb3I7XG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnJlZCkge1xuICAgICAgICAgICAgZ3JhbmRwYSA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAocGFyZW50ID09PSBncmFuZHBhLmxlZnQpIHtcbiAgICAgICAgICAgICAgICB1bmNsZSA9IGdyYW5kcGEucmlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKHVuY2xlICYmIHVuY2xlLnJlZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gdW5jbGUucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGdyYW5kcGEucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGdyYW5kcGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50LnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUxlZnQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGdyYW5kcGEucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVSaWdodChncmFuZHBhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bmNsZSA9IGdyYW5kcGEubGVmdDtcbiAgICAgICAgICAgICAgICBpZiAodW5jbGUgJiYgdW5jbGUucmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZWQgPSB1bmNsZS5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZ3JhbmRwYS5yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gZ3JhbmRwYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlID09PSBwYXJlbnQubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVSaWdodChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZ3JhbmRwYS5yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUxlZnQoZ3JhbmRwYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290LnJlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgUkJUcmVlLnByb3RvdHlwZS5yZW1vdmVOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUubmV4dCkge1xuICAgICAgICAgICAgbm9kZS5uZXh0LnByZXYgPSBub2RlLnByZXY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUucHJldikge1xuICAgICAgICAgICAgbm9kZS5wcmV2Lm5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5uZXh0ID0gbm9kZS5wcmV2ID0gbnVsbDtcbiAgICAgICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICB2YXIgbGVmdCA9IG5vZGUubGVmdDtcbiAgICAgICAgdmFyIHJpZ2h0ID0gbm9kZS5yaWdodDtcbiAgICAgICAgdmFyIG5leHQgPSBudWxsO1xuICAgICAgICBpZiAoIWxlZnQpIHtcbiAgICAgICAgICAgIG5leHQgPSByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghcmlnaHQpIHtcbiAgICAgICAgICAgIG5leHQgPSBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV4dCA9IHRoaXMuZmlyc3QocmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQubGVmdCA9PT0gbm9kZSkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5sZWZ0ID0gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5yaWdodCA9IG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1JlZDtcbiAgICAgICAgaWYgKGxlZnQgJiYgcmlnaHQpIHtcbiAgICAgICAgICAgIGlzUmVkID0gbmV4dC5yZWQ7XG4gICAgICAgICAgICBuZXh0LnJlZCA9IG5vZGUucmVkO1xuICAgICAgICAgICAgbmV4dC5sZWZ0ID0gbGVmdDtcbiAgICAgICAgICAgIGxlZnQucGFyZW50ID0gbmV4dDtcbiAgICAgICAgICAgIGlmIChuZXh0ICE9PSByaWdodCkge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IG5leHQucGFyZW50O1xuICAgICAgICAgICAgICAgIG5leHQucGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5leHQucmlnaHQ7XG4gICAgICAgICAgICAgICAgcGFyZW50LmxlZnQgPSBub2RlO1xuICAgICAgICAgICAgICAgIG5leHQucmlnaHQgPSByaWdodDtcbiAgICAgICAgICAgICAgICByaWdodC5wYXJlbnQgPSBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dC5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gbmV4dDtcbiAgICAgICAgICAgICAgICBub2RlID0gbmV4dC5yaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlzUmVkID0gbm9kZS5yZWQ7XG4gICAgICAgICAgICBub2RlID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5yZWQpIHtcbiAgICAgICAgICAgIG5vZGUucmVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNpYmxpbmc7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChub2RlID09PSB0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlID09PSBwYXJlbnQubGVmdCkge1xuICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnQucmlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcucmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUxlZnQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChzaWJsaW5nLmxlZnQgJiYgc2libGluZy5sZWZ0LnJlZCkgfHwgKHNpYmxpbmcucmlnaHQgJiYgc2libGluZy5yaWdodC5yZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2libGluZy5yaWdodCB8fCAhc2libGluZy5yaWdodC5yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcubGVmdC5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcucmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlUmlnaHQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50LnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcucmVkID0gcGFyZW50LnJlZDtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlZCA9IHNpYmxpbmcucmlnaHQucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5yb290O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50LmxlZnQ7XG4gICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcucmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcucmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVJpZ2h0KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBwYXJlbnQubGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChzaWJsaW5nLmxlZnQgJiYgc2libGluZy5sZWZ0LnJlZCkgfHwgKHNpYmxpbmcucmlnaHQgJiYgc2libGluZy5yaWdodC5yZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2libGluZy5sZWZ0IHx8ICFzaWJsaW5nLmxlZnQucmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLnJpZ2h0LnJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZyA9IHBhcmVudC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcucmVkID0gcGFyZW50LnJlZDtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlZCA9IHNpYmxpbmcubGVmdC5yZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVSaWdodChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5yb290O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWJsaW5nLnJlZCA9IHRydWU7XG4gICAgICAgICAgICBub2RlID0gcGFyZW50O1xuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgICAgfSB3aGlsZSAoIW5vZGUucmVkKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUucmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJCVHJlZS5wcm90b3R5cGUucm90YXRlTGVmdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBwID0gbm9kZTtcbiAgICAgICAgdmFyIHEgPSBub2RlLnJpZ2h0O1xuICAgICAgICB2YXIgcGFyZW50ID0gcC5wYXJlbnQ7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQubGVmdCA9PT0gcCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5sZWZ0ID0gcTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5yaWdodCA9IHE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBxO1xuICAgICAgICB9XG4gICAgICAgIHEucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBwLnBhcmVudCA9IHE7XG4gICAgICAgIHAucmlnaHQgPSBxLmxlZnQ7XG4gICAgICAgIGlmIChwLnJpZ2h0KSB7XG4gICAgICAgICAgICBwLnJpZ2h0LnBhcmVudCA9IHA7XG4gICAgICAgIH1cbiAgICAgICAgcS5sZWZ0ID0gcDtcbiAgICB9O1xuICAgIFJCVHJlZS5wcm90b3R5cGUucm90YXRlUmlnaHQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgcCA9IG5vZGU7XG4gICAgICAgIHZhciBxID0gbm9kZS5sZWZ0O1xuICAgICAgICB2YXIgcGFyZW50ID0gcC5wYXJlbnQ7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQubGVmdCA9PT0gcCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5sZWZ0ID0gcTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5yaWdodCA9IHE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBxO1xuICAgICAgICB9XG4gICAgICAgIHEucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBwLnBhcmVudCA9IHE7XG4gICAgICAgIHAubGVmdCA9IHEucmlnaHQ7XG4gICAgICAgIGlmIChwLmxlZnQpIHtcbiAgICAgICAgICAgIHAubGVmdC5wYXJlbnQgPSBwO1xuICAgICAgICB9XG4gICAgICAgIHEucmlnaHQgPSBwO1xuICAgIH07XG4gICAgUkJUcmVlLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHdoaWxlIChub2RlLmxlZnQpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICBSQlRyZWUucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB3aGlsZSAobm9kZS5yaWdodCkge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICByZXR1cm4gUkJUcmVlO1xufSgpKTtcbmV4cG9ydHMuUkJUcmVlID0gUkJUcmVlO1xudmFyIFJCVHJlZU5vZGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJCVHJlZU5vZGUoKSB7XG4gICAgfVxuICAgIHJldHVybiBSQlRyZWVOb2RlO1xufSgpKTtcbmV4cG9ydHMuUkJUcmVlTm9kZSA9IFJCVHJlZU5vZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYnRyZWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVmVydGV4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWZXJ0ZXgoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICByZXR1cm4gVmVydGV4O1xufSgpKTtcbmV4cG9ydHMuVmVydGV4ID0gVmVydGV4O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmVydGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEVkZ2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVkZ2UobFNpdGUsIHJTaXRlKSB7XG4gICAgICAgIHRoaXMubFNpdGUgPSBsU2l0ZTtcbiAgICAgICAgdGhpcy5yU2l0ZSA9IHJTaXRlO1xuICAgICAgICB0aGlzLnZhID0gdGhpcy52YiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBFZGdlO1xufSgpKTtcbmV4cG9ydHMuRWRnZSA9IEVkZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lZGdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENlbGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENlbGwoc2l0ZSkge1xuICAgICAgICB0aGlzLnNpdGUgPSBzaXRlO1xuICAgICAgICB0aGlzLmhhbGZlZGdlcyA9IFtdO1xuICAgICAgICB0aGlzLmNsb3NlTWUgPSBmYWxzZTtcbiAgICB9XG4gICAgQ2VsbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChzaXRlKSB7XG4gICAgICAgIHRoaXMuc2l0ZSA9IHNpdGU7XG4gICAgICAgIHRoaXMuaGFsZmVkZ2VzID0gW107XG4gICAgICAgIHRoaXMuY2xvc2VNZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIENlbGwucHJvdG90eXBlLnByZXBhcmVIYWxmZWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoYWxmZWRnZXMgPSB0aGlzLmhhbGZlZGdlcztcbiAgICAgICAgdmFyIGlIYWxmZWRnZSA9IGhhbGZlZGdlcy5sZW5ndGg7XG4gICAgICAgIHZhciBlZGdlO1xuICAgICAgICB3aGlsZSAoaUhhbGZlZGdlLS0pIHtcbiAgICAgICAgICAgIGVkZ2UgPSBoYWxmZWRnZXNbaUhhbGZlZGdlXS5lZGdlO1xuICAgICAgICAgICAgaWYgKCFlZGdlLnZiIHx8ICFlZGdlLnZhKSB7XG4gICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpSGFsZmVkZ2UsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhhbGZlZGdlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5hbmdsZSAtIGEuYW5nbGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFsZmVkZ2VzLmxlbmd0aDtcbiAgICB9O1xuICAgIENlbGwucHJvdG90eXBlLmdldE5laWdoYm9ySWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmVpZ2hib3JzID0gW107XG4gICAgICAgIHZhciBpSGFsZmVkZ2UgPSB0aGlzLmhhbGZlZGdlcy5sZW5ndGg7XG4gICAgICAgIHZhciBlZGdlO1xuICAgICAgICB3aGlsZSAoaUhhbGZlZGdlLS0pIHtcbiAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmhhbGZlZGdlc1tpSGFsZmVkZ2VdLmVkZ2U7XG4gICAgICAgICAgICBpZiAoZWRnZS5sU2l0ZSAhPT0gbnVsbCAmJiBlZGdlLmxTaXRlLmlkICE9IHRoaXMuc2l0ZS5pZCkge1xuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKGVkZ2UubFNpdGUuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWRnZS5yU2l0ZSAhPT0gbnVsbCAmJiBlZGdlLnJTaXRlLmlkICE9IHRoaXMuc2l0ZS5pZCkge1xuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKGVkZ2UuclNpdGUuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZWlnaGJvcnM7XG4gICAgfTtcbiAgICA7XG4gICAgQ2VsbC5wcm90b3R5cGUuZ2V0QmJveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhbGZlZGdlcyA9IHRoaXMuaGFsZmVkZ2VzO1xuICAgICAgICB2YXIgaUhhbGZlZGdlID0gaGFsZmVkZ2VzLmxlbmd0aDtcbiAgICAgICAgdmFyIHhtaW4gPSBJbmZpbml0eTtcbiAgICAgICAgdmFyIHltaW4gPSBJbmZpbml0eTtcbiAgICAgICAgdmFyIHhtYXggPSAtSW5maW5pdHk7XG4gICAgICAgIHZhciB5bWF4ID0gLUluZmluaXR5O1xuICAgICAgICB2YXIgdiwgdngsIHZ5O1xuICAgICAgICB3aGlsZSAoaUhhbGZlZGdlLS0pIHtcbiAgICAgICAgICAgIHYgPSBoYWxmZWRnZXNbaUhhbGZlZGdlXS5nZXRTdGFydHBvaW50KCk7XG4gICAgICAgICAgICB2eCA9IHYueDtcbiAgICAgICAgICAgIHZ5ID0gdi55O1xuICAgICAgICAgICAgaWYgKHZ4IDwgeG1pbikge1xuICAgICAgICAgICAgICAgIHhtaW4gPSB2eDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2eSA8IHltaW4pIHtcbiAgICAgICAgICAgICAgICB5bWluID0gdnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodnggPiB4bWF4KSB7XG4gICAgICAgICAgICAgICAgeG1heCA9IHZ4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZ5ID4geW1heCkge1xuICAgICAgICAgICAgICAgIHltYXggPSB2eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeG1pbixcbiAgICAgICAgICAgIHk6IHltaW4sXG4gICAgICAgICAgICB3aWR0aDogeG1heCAtIHhtaW4sXG4gICAgICAgICAgICBoZWlnaHQ6IHltYXggLSB5bWluXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBDZWxsLnByb3RvdHlwZS5wb2ludEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBoYWxmZWRnZXMgPSB0aGlzLmhhbGZlZGdlcztcbiAgICAgICAgdmFyIGlIYWxmZWRnZSA9IGhhbGZlZGdlcy5sZW5ndGg7XG4gICAgICAgIHZhciBoYWxmZWRnZTtcbiAgICAgICAgdmFyIHAwLCBwMTtcbiAgICAgICAgdmFyIHI7XG4gICAgICAgIHdoaWxlIChpSGFsZmVkZ2UtLSkge1xuICAgICAgICAgICAgaGFsZmVkZ2UgPSBoYWxmZWRnZXNbaUhhbGZlZGdlXTtcbiAgICAgICAgICAgIHAwID0gaGFsZmVkZ2UuZ2V0U3RhcnRwb2ludCgpO1xuICAgICAgICAgICAgcDEgPSBoYWxmZWRnZS5nZXRFbmRwb2ludCgpO1xuICAgICAgICAgICAgciA9ICh5IC0gcDAueSkgKiAocDEueCAtIHAwLngpIC0gKHggLSBwMC54KSAqIChwMS55IC0gcDAueSk7XG4gICAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICB9O1xuICAgIHJldHVybiBDZWxsO1xufSgpKTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jZWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpYWdyYW0gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERpYWdyYW0oc2l0ZSkge1xuICAgICAgICB0aGlzLnNpdGUgPSBzaXRlO1xuICAgIH1cbiAgICByZXR1cm4gRGlhZ3JhbTtcbn0oKSk7XG5leHBvcnRzLkRpYWdyYW0gPSBEaWFncmFtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlhZ3JhbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBIYWxmZWRnZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGFsZmVkZ2UoZWRnZSwgbFNpdGUsIHJTaXRlKSB7XG4gICAgICAgIHRoaXMuc2l0ZSA9IGxTaXRlO1xuICAgICAgICB0aGlzLmVkZ2UgPSBlZGdlO1xuICAgICAgICBpZiAoclNpdGUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLmF0YW4yKHJTaXRlLnkgLSBsU2l0ZS55LCByU2l0ZS54IC0gbFNpdGUueCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdmEgPSBlZGdlLnZhO1xuICAgICAgICAgICAgdmFyIHZiID0gZWRnZS52YjtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSBlZGdlLmxTaXRlID09PSBsU2l0ZSA/XG4gICAgICAgICAgICAgICAgTWF0aC5hdGFuMih2Yi54IC0gdmEueCwgdmEueSAtIHZiLnkpIDpcbiAgICAgICAgICAgICAgICBNYXRoLmF0YW4yKHZhLnggLSB2Yi54LCB2Yi55IC0gdmEueSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgSGFsZmVkZ2UucHJvdG90eXBlLmdldFN0YXJ0cG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkZ2UubFNpdGUgPT09IHRoaXMuc2l0ZSA/IHRoaXMuZWRnZS52YSA6IHRoaXMuZWRnZS52YjtcbiAgICB9O1xuICAgIDtcbiAgICBIYWxmZWRnZS5wcm90b3R5cGUuZ2V0RW5kcG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkZ2UubFNpdGUgPT09IHRoaXMuc2l0ZSA/IHRoaXMuZWRnZS52YiA6IHRoaXMuZWRnZS52YTtcbiAgICB9O1xuICAgIDtcbiAgICByZXR1cm4gSGFsZmVkZ2U7XG59KCkpO1xuZXhwb3J0cy5IYWxmZWRnZSA9IEhhbGZlZGdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGFsZmVkZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmJ0cmVlXzEgPSByZXF1aXJlKFwiLi9yYnRyZWVcIik7XG52YXIgdmVydGV4XzEgPSByZXF1aXJlKFwiLi92ZXJ0ZXhcIik7XG52YXIgZWRnZV8xID0gcmVxdWlyZShcIi4vZWRnZVwiKTtcbnZhciBjZWxsXzEgPSByZXF1aXJlKFwiLi9jZWxsXCIpO1xudmFyIGRpYWdyYW1fMSA9IHJlcXVpcmUoXCIuL2RpYWdyYW1cIik7XG52YXIgaGFsZmVkZ2VfMSA9IHJlcXVpcmUoXCIuL2hhbGZlZGdlXCIpO1xudmFyIFZvcm9ub2kgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZvcm9ub2koKSB7XG4gICAgICAgIHRoaXMudmVydGljZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmVkZ2VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jZWxscyA9IG51bGw7XG4gICAgICAgIHRoaXMudG9SZWN5Y2xlID0gbnVsbDtcbiAgICAgICAgdGhpcy5iZWFjaHNlY3Rpb25KdW5reWFyZCA9IFtdO1xuICAgICAgICB0aGlzLmNpcmNsZUV2ZW50SnVua3lhcmQgPSBbXTtcbiAgICAgICAgdGhpcy52ZXJ0ZXhKdW5reWFyZCA9IFtdO1xuICAgICAgICB0aGlzLmVkZ2VKdW5reWFyZCA9IFtdO1xuICAgICAgICB0aGlzLmNlbGxKdW5reWFyZCA9IFtdO1xuICAgIH1cbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKHNpdGVzLCBiYm94KSB7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIGlmICh0aGlzLnRvUmVjeWNsZSkge1xuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhKdW5reWFyZCA9IHRoaXMudmVydGV4SnVua3lhcmQuY29uY2F0KHRoaXMudG9SZWN5Y2xlLnZlcnRpY2VzKTtcbiAgICAgICAgICAgIHRoaXMuZWRnZUp1bmt5YXJkID0gdGhpcy5lZGdlSnVua3lhcmQuY29uY2F0KHRoaXMudG9SZWN5Y2xlLmVkZ2VzKTtcbiAgICAgICAgICAgIHRoaXMuY2VsbEp1bmt5YXJkID0gdGhpcy5jZWxsSnVua3lhcmQuY29uY2F0KHRoaXMudG9SZWN5Y2xlLmNlbGxzKTtcbiAgICAgICAgICAgIHRoaXMudG9SZWN5Y2xlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2l0ZUV2ZW50cyA9IHNpdGVzLnNsaWNlKDApO1xuICAgICAgICBzaXRlRXZlbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciByID0gYi55IC0gYS55O1xuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiLnggLSBhLng7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc2l0ZSA9IHNpdGVFdmVudHMucG9wKCksIHNpdGVpZCA9IDAsIHhzaXRleCwgeHNpdGV5LCBjZWxscyA9IHRoaXMuY2VsbHMsIGNpcmNsZTtcbiAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgY2lyY2xlID0gdGhpcy5maXJzdENpcmNsZUV2ZW50O1xuICAgICAgICAgICAgaWYgKHNpdGUgJiYgKCFjaXJjbGUgfHwgc2l0ZS55IDwgY2lyY2xlLnkgfHwgKHNpdGUueSA9PT0gY2lyY2xlLnkgJiYgc2l0ZS54IDwgY2lyY2xlLngpKSkge1xuICAgICAgICAgICAgICAgIGlmIChzaXRlLnggIT09IHhzaXRleCB8fCBzaXRlLnkgIT09IHhzaXRleSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsc1tzaXRlaWRdID0gdGhpcy5jcmVhdGVDZWxsKHNpdGUpO1xuICAgICAgICAgICAgICAgICAgICBzaXRlLmlkID0gc2l0ZWlkKys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQmVhY2hzZWN0aW9uKHNpdGUpO1xuICAgICAgICAgICAgICAgICAgICB4c2l0ZXkgPSBzaXRlLnk7XG4gICAgICAgICAgICAgICAgICAgIHhzaXRleCA9IHNpdGUueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2l0ZSA9IHNpdGVFdmVudHMucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaXJjbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJlYWNoc2VjdGlvbihjaXJjbGUuYXJjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xpcEVkZ2VzKGJib3gpO1xuICAgICAgICB0aGlzLmNsb3NlQ2VsbHMoYmJveCk7XG4gICAgICAgIHZhciBzdG9wVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBkaWFncmFtID0gbmV3IGRpYWdyYW1fMS5EaWFncmFtKCk7XG4gICAgICAgIGRpYWdyYW0uY2VsbHMgPSB0aGlzLmNlbGxzO1xuICAgICAgICBkaWFncmFtLmVkZ2VzID0gdGhpcy5lZGdlcztcbiAgICAgICAgZGlhZ3JhbS52ZXJ0aWNlcyA9IHRoaXMudmVydGljZXM7XG4gICAgICAgIGRpYWdyYW0uZXhlY1RpbWUgPSBzdG9wVGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBkaWFncmFtO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuc3FydCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoeCk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5lcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAxZS05O1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuaW52ZXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gMS4wIC8gdGhpcy5lcHMoKTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmVxdWFsV2l0aEVwc2lsb24gPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gdGhpcy5hYnMoYSAtIGIpIDwgdGhpcy5lcHMoKTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmdyZWF0ZXJUaGFuV2l0aEVwc2lsb24gPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gKGEgLSBiKSA+IHRoaXMuZXBzKCk7XG4gICAgfTtcbiAgICA7XG4gICAgVm9yb25vaS5wcm90b3R5cGUuZ3JlYXRlclRoYW5PckVxdWFsV2l0aEVwc2lsb24gPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gKGIgLSBhKSA8IHRoaXMuZXBzKCk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5sZXNzVGhhbldpdGhFcHNpbG9uID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIChiIC0gYSkgPiB0aGlzLmVwcygpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUubGVzc1RoYW5PckVxdWFsV2l0aEVwc2lsb24gPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gKGEgLSBiKSA8IHRoaXMuZXBzKCk7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5xdWFudGl6ZVNpdGVzID0gZnVuY3Rpb24gKHNpdGVzKSB7XG4gICAgICAgIHZhciBlcHMgPSB0aGlzLmVwcygpLCBuID0gc2l0ZXMubGVuZ3RoLCBzaXRlO1xuICAgICAgICB3aGlsZSAobi0tKSB7XG4gICAgICAgICAgICBzaXRlID0gc2l0ZXNbbl07XG4gICAgICAgICAgICBzaXRlLnggPSBNYXRoLmZsb29yKHNpdGUueCAvIGVwcykgKiBlcHM7XG4gICAgICAgICAgICBzaXRlLnkgPSBNYXRoLmZsb29yKHNpdGUueSAvIGVwcykgKiBlcHM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnJlY3ljbGUgPSBmdW5jdGlvbiAoZGlhZ3JhbSkge1xuICAgICAgICBpZiAoZGlhZ3JhbSkge1xuICAgICAgICAgICAgaWYgKGRpYWdyYW0gaW5zdGFuY2VvZiBkaWFncmFtXzEuRGlhZ3JhbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9SZWN5Y2xlID0gZGlhZ3JhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93ICdWb3Jvbm9pLnJlY3ljbGVEaWFncmFtKCkgPiBOZWVkIGEgRGlhZ3JhbSBvYmplY3QuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5iZWFjaGxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuYmVhY2hsaW5lID0gbmV3IHJidHJlZV8xLlJCVHJlZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJlYWNobGluZS5yb290KSB7XG4gICAgICAgICAgICB2YXIgYmVhY2hzZWN0aW9uID0gdGhpcy5iZWFjaGxpbmUuZmlyc3QodGhpcy5iZWFjaGxpbmUucm9vdCk7XG4gICAgICAgICAgICB3aGlsZSAoYmVhY2hzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZWFjaHNlY3Rpb25KdW5reWFyZC5wdXNoKGJlYWNoc2VjdGlvbik7XG4gICAgICAgICAgICAgICAgYmVhY2hzZWN0aW9uID0gYmVhY2hzZWN0aW9uLm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZWFjaGxpbmUucm9vdCA9IG51bGw7XG4gICAgICAgIGlmICghdGhpcy5jaXJjbGVFdmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlRXZlbnRzID0gbmV3IHJidHJlZV8xLlJCVHJlZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2lyY2xlRXZlbnRzLnJvb3QgPSB0aGlzLmZpcnN0Q2lyY2xlRXZlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XG4gICAgICAgIHRoaXMuZWRnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY3JlYXRlQ2VsbCA9IGZ1bmN0aW9uIChzaXRlKSB7XG4gICAgICAgIHZhciBjZWxsID0gdGhpcy5jZWxsSnVua3lhcmQucG9wKCk7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICBjZWxsLmluaXQoc2l0ZSk7XG4gICAgICAgICAgICByZXR1cm4gY2VsbC5pbml0KHNpdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgY2VsbF8xLkNlbGwoc2l0ZSk7XG4gICAgfTtcbiAgICA7XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY3JlYXRlSGFsZmVkZ2UgPSBmdW5jdGlvbiAoZWRnZSwgbFNpdGUsIHJTaXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgaGFsZmVkZ2VfMS5IYWxmZWRnZShlZGdlLCBsU2l0ZSwgclNpdGUpO1xuICAgIH07XG4gICAgO1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNyZWF0ZVZlcnRleCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciB2ID0gdGhpcy52ZXJ0ZXhKdW5reWFyZC5wb3AoKTtcbiAgICAgICAgaWYgKCF2KSB7XG4gICAgICAgICAgICB2ID0gbmV3IHZlcnRleF8xLlZlcnRleCh4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHYueCA9IHg7XG4gICAgICAgICAgICB2LnkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2KTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jcmVhdGVFZGdlID0gZnVuY3Rpb24gKGxTaXRlLCByU2l0ZSwgdmEsIHZiKSB7XG4gICAgICAgIGlmICh2YSA9PT0gdm9pZCAwKSB7IHZhID0gbnVsbDsgfVxuICAgICAgICBpZiAodmIgPT09IHZvaWQgMCkgeyB2YiA9IG51bGw7IH1cbiAgICAgICAgdmFyIGVkZ2UgPSB0aGlzLmVkZ2VKdW5reWFyZC5wb3AoKTtcbiAgICAgICAgaWYgKCFlZGdlKSB7XG4gICAgICAgICAgICBlZGdlID0gbmV3IGVkZ2VfMS5FZGdlKGxTaXRlLCByU2l0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlZGdlLmxTaXRlID0gbFNpdGU7XG4gICAgICAgICAgICBlZGdlLnJTaXRlID0gclNpdGU7XG4gICAgICAgICAgICBlZGdlLnZhID0gZWRnZS52YiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgICBpZiAodmEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RWRnZVN0YXJ0cG9pbnQoZWRnZSwgbFNpdGUsIHJTaXRlLCB2YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEVkZ2VFbmRwb2ludChlZGdlLCBsU2l0ZSwgclNpdGUsIHZiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNlbGxzW2xTaXRlLmlkXS5oYWxmZWRnZXMucHVzaCh0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIGxTaXRlLCByU2l0ZSkpO1xuICAgICAgICB0aGlzLmNlbGxzW3JTaXRlLmlkXS5oYWxmZWRnZXMucHVzaCh0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIHJTaXRlLCBsU2l0ZSkpO1xuICAgICAgICByZXR1cm4gZWRnZTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNyZWF0ZUJvcmRlckVkZ2UgPSBmdW5jdGlvbiAobFNpdGUsIHZhLCB2Yikge1xuICAgICAgICB2YXIgZWRnZSA9IHRoaXMuZWRnZUp1bmt5YXJkLnBvcCgpO1xuICAgICAgICBpZiAoIWVkZ2UpIHtcbiAgICAgICAgICAgIGVkZ2UgPSBuZXcgZWRnZV8xLkVkZ2UobFNpdGUsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWRnZS5sU2l0ZSA9IGxTaXRlO1xuICAgICAgICAgICAgZWRnZS5yU2l0ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWRnZS52YSA9IHZhO1xuICAgICAgICBlZGdlLnZiID0gdmI7XG4gICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgfTtcbiAgICA7XG4gICAgVm9yb25vaS5wcm90b3R5cGUuc2V0RWRnZVN0YXJ0cG9pbnQgPSBmdW5jdGlvbiAoZWRnZSwgbFNpdGUsIHJTaXRlLCB2ZXJ0ZXgpIHtcbiAgICAgICAgaWYgKCFlZGdlLnZhICYmICFlZGdlLnZiKSB7XG4gICAgICAgICAgICBlZGdlLnZhID0gdmVydGV4O1xuICAgICAgICAgICAgZWRnZS5sU2l0ZSA9IGxTaXRlO1xuICAgICAgICAgICAgZWRnZS5yU2l0ZSA9IHJTaXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVkZ2UubFNpdGUgPT09IHJTaXRlKSB7XG4gICAgICAgICAgICBlZGdlLnZiID0gdmVydGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWRnZS52YSA9IHZlcnRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuc2V0RWRnZUVuZHBvaW50ID0gZnVuY3Rpb24gKGVkZ2UsIGxTaXRlLCByU2l0ZSwgdmVydGV4KSB7XG4gICAgICAgIHRoaXMuc2V0RWRnZVN0YXJ0cG9pbnQoZWRnZSwgclNpdGUsIGxTaXRlLCB2ZXJ0ZXgpO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY3JlYXRlQmVhY2hzZWN0aW9uID0gZnVuY3Rpb24gKHNpdGUpIHtcbiAgICAgICAgdmFyIGJlYWNoc2VjdGlvbiA9IHRoaXMuYmVhY2hzZWN0aW9uSnVua3lhcmQucG9wKCk7XG4gICAgICAgIGlmICghYmVhY2hzZWN0aW9uKSB7XG4gICAgICAgICAgICBiZWFjaHNlY3Rpb24gPSBuZXcgcmJ0cmVlXzEuUkJUcmVlTm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJlYWNoc2VjdGlvbi5zaXRlID0gc2l0ZTtcbiAgICAgICAgcmV0dXJuIGJlYWNoc2VjdGlvbjtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmxlZnRCcmVha1BvaW50ID0gZnVuY3Rpb24gKGFyYywgZGlyZWN0cml4KSB7XG4gICAgICAgIHZhciBzaXRlID0gYXJjLnNpdGUsIHJmb2N4ID0gc2l0ZS54LCByZm9jeSA9IHNpdGUueSwgcGJ5MiA9IHJmb2N5IC0gZGlyZWN0cml4O1xuICAgICAgICBpZiAoIXBieTIpIHtcbiAgICAgICAgICAgIHJldHVybiByZm9jeDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbEFyYyA9IGFyYy5wcmV2O1xuICAgICAgICBpZiAoIWxBcmMpIHtcbiAgICAgICAgICAgIHJldHVybiAtSW5maW5pdHk7XG4gICAgICAgIH1cbiAgICAgICAgc2l0ZSA9IGxBcmMuc2l0ZTtcbiAgICAgICAgdmFyIGxmb2N4ID0gc2l0ZS54LCBsZm9jeSA9IHNpdGUueSwgcGxieTIgPSBsZm9jeSAtIGRpcmVjdHJpeDtcbiAgICAgICAgaWYgKCFwbGJ5Mikge1xuICAgICAgICAgICAgcmV0dXJuIGxmb2N4O1xuICAgICAgICB9XG4gICAgICAgIHZhciBobCA9IGxmb2N4IC0gcmZvY3gsIGFieTIgPSAxIC8gcGJ5MiAtIDEgLyBwbGJ5MiwgYiA9IGhsIC8gcGxieTI7XG4gICAgICAgIGlmIChhYnkyKSB7XG4gICAgICAgICAgICByZXR1cm4gKC1iICsgdGhpcy5zcXJ0KGIgKiBiIC0gMiAqIGFieTIgKiAoaGwgKiBobCAvICgtMiAqIHBsYnkyKSAtIGxmb2N5ICsgcGxieTIgLyAyICsgcmZvY3kgLSBwYnkyIC8gMikpKSAvIGFieTIgKyByZm9jeDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHJmb2N4ICsgbGZvY3gpIC8gMjtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLnJpZ2h0QnJlYWtQb2ludCA9IGZ1bmN0aW9uIChhcmMsIGRpcmVjdHJpeCkge1xuICAgICAgICB2YXIgckFyYyA9IGFyYy5uZXh0O1xuICAgICAgICBpZiAockFyYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVmdEJyZWFrUG9pbnQockFyYywgZGlyZWN0cml4KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2l0ZSA9IGFyYy5zaXRlO1xuICAgICAgICByZXR1cm4gc2l0ZS55ID09PSBkaXJlY3RyaXggPyBzaXRlLnggOiBJbmZpbml0eTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmRldGFjaEJlYWNoc2VjdGlvbiA9IGZ1bmN0aW9uIChiZWFjaHNlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kZXRhY2hDaXJjbGVFdmVudChiZWFjaHNlY3Rpb24pO1xuICAgICAgICB0aGlzLmJlYWNobGluZS5yZW1vdmVOb2RlKGJlYWNoc2VjdGlvbik7XG4gICAgICAgIHRoaXMuYmVhY2hzZWN0aW9uSnVua3lhcmQucHVzaChiZWFjaHNlY3Rpb24pO1xuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUucmVtb3ZlQmVhY2hzZWN0aW9uID0gZnVuY3Rpb24gKGJlYWNoc2VjdGlvbikge1xuICAgICAgICB2YXIgY2lyY2xlID0gYmVhY2hzZWN0aW9uLmNpcmNsZUV2ZW50LCB4ID0gY2lyY2xlLngsIHkgPSBjaXJjbGUueWNlbnRlciwgdmVydGV4ID0gdGhpcy5jcmVhdGVWZXJ0ZXgoeCwgeSksIHByZXZpb3VzID0gYmVhY2hzZWN0aW9uLnByZXYsIG5leHQgPSBiZWFjaHNlY3Rpb24ubmV4dCwgZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnMgPSBbYmVhY2hzZWN0aW9uXSwgYWJzX2ZuID0gTWF0aC5hYnM7XG4gICAgICAgIHRoaXMuZGV0YWNoQmVhY2hzZWN0aW9uKGJlYWNoc2VjdGlvbik7XG4gICAgICAgIHZhciBsQXJjID0gcHJldmlvdXM7XG4gICAgICAgIHdoaWxlIChsQXJjLmNpcmNsZUV2ZW50ICYmXG4gICAgICAgICAgICBhYnNfZm4oeCAtIGxBcmMuY2lyY2xlRXZlbnQueCkgPCB0aGlzLmVwcygpICYmXG4gICAgICAgICAgICBhYnNfZm4oeSAtIGxBcmMuY2lyY2xlRXZlbnQueWNlbnRlcikgPCB0aGlzLmVwcygpKSB7XG4gICAgICAgICAgICBwcmV2aW91cyA9IGxBcmMucHJldjtcbiAgICAgICAgICAgIGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zLnVuc2hpZnQobEFyYyk7XG4gICAgICAgICAgICB0aGlzLmRldGFjaEJlYWNoc2VjdGlvbihsQXJjKTtcbiAgICAgICAgICAgIGxBcmMgPSBwcmV2aW91cztcbiAgICAgICAgfVxuICAgICAgICBkaXNhcHBlYXJpbmdUcmFuc2l0aW9ucy51bnNoaWZ0KGxBcmMpO1xuICAgICAgICB0aGlzLmRldGFjaENpcmNsZUV2ZW50KGxBcmMpO1xuICAgICAgICB2YXIgckFyYyA9IG5leHQ7XG4gICAgICAgIHdoaWxlIChyQXJjLmNpcmNsZUV2ZW50ICYmXG4gICAgICAgICAgICBhYnNfZm4oeCAtIHJBcmMuY2lyY2xlRXZlbnQueCkgPCB0aGlzLmVwcygpICYmXG4gICAgICAgICAgICBhYnNfZm4oeSAtIHJBcmMuY2lyY2xlRXZlbnQueWNlbnRlcikgPCB0aGlzLmVwcygpKSB7XG4gICAgICAgICAgICBuZXh0ID0gckFyYy5uZXh0O1xuICAgICAgICAgICAgZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnMucHVzaChyQXJjKTtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoQmVhY2hzZWN0aW9uKHJBcmMpO1xuICAgICAgICAgICAgckFyYyA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnMucHVzaChyQXJjKTtcbiAgICAgICAgdGhpcy5kZXRhY2hDaXJjbGVFdmVudChyQXJjKTtcbiAgICAgICAgdmFyIG5BcmNzID0gZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnMubGVuZ3RoLCBpQXJjO1xuICAgICAgICBmb3IgKGlBcmMgPSAxOyBpQXJjIDwgbkFyY3M7IGlBcmMrKykge1xuICAgICAgICAgICAgckFyYyA9IGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zW2lBcmNdO1xuICAgICAgICAgICAgbEFyYyA9IGRpc2FwcGVhcmluZ1RyYW5zaXRpb25zW2lBcmMgLSAxXTtcbiAgICAgICAgICAgIHRoaXMuc2V0RWRnZVN0YXJ0cG9pbnQockFyYy5lZGdlLCBsQXJjLnNpdGUsIHJBcmMuc2l0ZSwgdmVydGV4KTtcbiAgICAgICAgfVxuICAgICAgICBsQXJjID0gZGlzYXBwZWFyaW5nVHJhbnNpdGlvbnNbMF07XG4gICAgICAgIHJBcmMgPSBkaXNhcHBlYXJpbmdUcmFuc2l0aW9uc1tuQXJjcyAtIDFdO1xuICAgICAgICByQXJjLmVkZ2UgPSB0aGlzLmNyZWF0ZUVkZ2UobEFyYy5zaXRlLCByQXJjLnNpdGUsIHVuZGVmaW5lZCwgdmVydGV4KTtcbiAgICAgICAgdGhpcy5hdHRhY2hDaXJjbGVFdmVudChsQXJjKTtcbiAgICAgICAgdGhpcy5hdHRhY2hDaXJjbGVFdmVudChyQXJjKTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmFkZEJlYWNoc2VjdGlvbiA9IGZ1bmN0aW9uIChzaXRlKSB7XG4gICAgICAgIHZhciB4ID0gc2l0ZS54LCBkaXJlY3RyaXggPSBzaXRlLnk7XG4gICAgICAgIHZhciBsQXJjLCByQXJjLCBkeGwsIGR4ciwgbm9kZSA9IHRoaXMuYmVhY2hsaW5lLnJvb3Q7XG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBkeGwgPSB0aGlzLmxlZnRCcmVha1BvaW50KG5vZGUsIGRpcmVjdHJpeCkgLSB4O1xuICAgICAgICAgICAgaWYgKGR4bCA+IHRoaXMuZXBzKCkpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZHhyID0geCAtIHRoaXMucmlnaHRCcmVha1BvaW50KG5vZGUsIGRpcmVjdHJpeCk7XG4gICAgICAgICAgICAgICAgaWYgKGR4ciA+IHRoaXMuZXBzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsQXJjID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR4bCA+IC10aGlzLmVwcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsQXJjID0gbm9kZS5wcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgckFyYyA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZHhyID4gLXRoaXMuZXBzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxBcmMgPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgckFyYyA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxBcmMgPSByQXJjID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0FyYyA9IHRoaXMuY3JlYXRlQmVhY2hzZWN0aW9uKHNpdGUpO1xuICAgICAgICB0aGlzLmJlYWNobGluZS5pbnNlcnRTdWNjZXNzb3IobEFyYywgbmV3QXJjKTtcbiAgICAgICAgaWYgKCFsQXJjICYmICFyQXJjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxBcmMgPT09IHJBcmMpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoQ2lyY2xlRXZlbnQobEFyYyk7XG4gICAgICAgICAgICByQXJjID0gdGhpcy5jcmVhdGVCZWFjaHNlY3Rpb24obEFyYy5zaXRlKTtcbiAgICAgICAgICAgIHRoaXMuYmVhY2hsaW5lLmluc2VydFN1Y2Nlc3NvcihuZXdBcmMsIHJBcmMpO1xuICAgICAgICAgICAgbmV3QXJjLmVkZ2UgPSByQXJjLmVkZ2UgPSB0aGlzLmNyZWF0ZUVkZ2UobEFyYy5zaXRlLCBuZXdBcmMuc2l0ZSk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaENpcmNsZUV2ZW50KGxBcmMpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hDaXJjbGVFdmVudChyQXJjKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobEFyYyAmJiAhckFyYykge1xuICAgICAgICAgICAgbmV3QXJjLmVkZ2UgPSB0aGlzLmNyZWF0ZUVkZ2UobEFyYy5zaXRlLCBuZXdBcmMuc2l0ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxBcmMgIT09IHJBcmMpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoQ2lyY2xlRXZlbnQobEFyYyk7XG4gICAgICAgICAgICB0aGlzLmRldGFjaENpcmNsZUV2ZW50KHJBcmMpO1xuICAgICAgICAgICAgdmFyIGxTaXRlID0gbEFyYy5zaXRlLCBheCA9IGxTaXRlLngsIGF5ID0gbFNpdGUueSwgYnggPSBzaXRlLnggLSBheCwgYnkgPSBzaXRlLnkgLSBheSwgclNpdGUgPSByQXJjLnNpdGUsIGN4ID0gclNpdGUueCAtIGF4LCBjeSA9IHJTaXRlLnkgLSBheSwgZCA9IDIgKiAoYnggKiBjeSAtIGJ5ICogY3gpLCBoYiA9IGJ4ICogYnggKyBieSAqIGJ5LCBoYyA9IGN4ICogY3ggKyBjeSAqIGN5LCB2ZXJ0ZXggPSB0aGlzLmNyZWF0ZVZlcnRleCgoY3kgKiBoYiAtIGJ5ICogaGMpIC8gZCArIGF4LCAoYnggKiBoYyAtIGN4ICogaGIpIC8gZCArIGF5KTtcbiAgICAgICAgICAgIHRoaXMuc2V0RWRnZVN0YXJ0cG9pbnQockFyYy5lZGdlLCBsU2l0ZSwgclNpdGUsIHZlcnRleCk7XG4gICAgICAgICAgICBuZXdBcmMuZWRnZSA9IHRoaXMuY3JlYXRlRWRnZShsU2l0ZSwgc2l0ZSwgdW5kZWZpbmVkLCB2ZXJ0ZXgpO1xuICAgICAgICAgICAgckFyYy5lZGdlID0gdGhpcy5jcmVhdGVFZGdlKHNpdGUsIHJTaXRlLCB1bmRlZmluZWQsIHZlcnRleCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaENpcmNsZUV2ZW50KGxBcmMpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hDaXJjbGVFdmVudChyQXJjKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuYXR0YWNoQ2lyY2xlRXZlbnQgPSBmdW5jdGlvbiAoYXJjKSB7XG4gICAgICAgIHZhciBsQXJjID0gYXJjLnByZXYsIHJBcmMgPSBhcmMubmV4dDtcbiAgICAgICAgaWYgKCFsQXJjIHx8ICFyQXJjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxTaXRlID0gbEFyYy5zaXRlLCBjU2l0ZSA9IGFyYy5zaXRlLCByU2l0ZSA9IHJBcmMuc2l0ZTtcbiAgICAgICAgaWYgKGxTaXRlID09PSByU2l0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBieCA9IGNTaXRlLngsIGJ5ID0gY1NpdGUueSwgYXggPSBsU2l0ZS54IC0gYngsIGF5ID0gbFNpdGUueSAtIGJ5LCBjeCA9IHJTaXRlLnggLSBieCwgY3kgPSByU2l0ZS55IC0gYnk7XG4gICAgICAgIHZhciBkID0gMiAqIChheCAqIGN5IC0gYXkgKiBjeCk7XG4gICAgICAgIGlmIChkID49IC0yZS0xMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYSA9IGF4ICogYXggKyBheSAqIGF5LCBoYyA9IGN4ICogY3ggKyBjeSAqIGN5LCB4ID0gKGN5ICogaGEgLSBheSAqIGhjKSAvIGQsIHkgPSAoYXggKiBoYyAtIGN4ICogaGEpIC8gZCwgeWNlbnRlciA9IHkgKyBieTtcbiAgICAgICAgdmFyIGNpcmNsZUV2ZW50ID0gdGhpcy5jaXJjbGVFdmVudEp1bmt5YXJkLnBvcCgpO1xuICAgICAgICBpZiAoIWNpcmNsZUV2ZW50KSB7XG4gICAgICAgICAgICBjaXJjbGVFdmVudCA9IG5ldyByYnRyZWVfMS5SQlRyZWVOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2lyY2xlRXZlbnQuYXJjID0gYXJjO1xuICAgICAgICBjaXJjbGVFdmVudC5zaXRlID0gY1NpdGU7XG4gICAgICAgIGNpcmNsZUV2ZW50LnggPSB4ICsgYng7XG4gICAgICAgIGNpcmNsZUV2ZW50LnkgPSB5Y2VudGVyICsgdGhpcy5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgICAgICBjaXJjbGVFdmVudC55Y2VudGVyID0geWNlbnRlcjtcbiAgICAgICAgYXJjLmNpcmNsZUV2ZW50ID0gY2lyY2xlRXZlbnQ7XG4gICAgICAgIHZhciBwcmVkZWNlc3NvciA9IG51bGwsIG5vZGUgPSB0aGlzLmNpcmNsZUV2ZW50cy5yb290O1xuICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgaWYgKGNpcmNsZUV2ZW50LnkgPCBub2RlLnkgfHwgKGNpcmNsZUV2ZW50LnkgPT09IG5vZGUueSAmJiBjaXJjbGVFdmVudC54IDw9IG5vZGUueCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmVkZWNlc3NvciA9IG5vZGUucHJldjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmVkZWNlc3NvciA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNpcmNsZUV2ZW50cy5pbnNlcnRTdWNjZXNzb3IocHJlZGVjZXNzb3IsIGNpcmNsZUV2ZW50KTtcbiAgICAgICAgaWYgKCFwcmVkZWNlc3Nvcikge1xuICAgICAgICAgICAgdGhpcy5maXJzdENpcmNsZUV2ZW50ID0gY2lyY2xlRXZlbnQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmRldGFjaENpcmNsZUV2ZW50ID0gZnVuY3Rpb24gKGFyYykge1xuICAgICAgICB2YXIgY2lyY2xlRXZlbnQgPSBhcmMuY2lyY2xlRXZlbnQ7XG4gICAgICAgIGlmIChjaXJjbGVFdmVudCkge1xuICAgICAgICAgICAgaWYgKCFjaXJjbGVFdmVudC5wcmV2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdENpcmNsZUV2ZW50ID0gY2lyY2xlRXZlbnQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2lyY2xlRXZlbnRzLnJlbW92ZU5vZGUoY2lyY2xlRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5jaXJjbGVFdmVudEp1bmt5YXJkLnB1c2goY2lyY2xlRXZlbnQpO1xuICAgICAgICAgICAgYXJjLmNpcmNsZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY29ubmVjdEVkZ2UgPSBmdW5jdGlvbiAoZWRnZSwgYmJveCkge1xuICAgICAgICB2YXIgdmIgPSBlZGdlLnZiO1xuICAgICAgICBpZiAoISF2Yikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhID0gZWRnZS52YSwgeGwgPSBiYm94LnhsLCB4ciA9IGJib3gueHIsIHl0ID0gYmJveC55dCwgeWIgPSBiYm94LnliLCBsU2l0ZSA9IGVkZ2UubFNpdGUsIHJTaXRlID0gZWRnZS5yU2l0ZSwgbHggPSBsU2l0ZS54LCBseSA9IGxTaXRlLnksIHJ4ID0gclNpdGUueCwgcnkgPSByU2l0ZS55LCBmeCA9IChseCArIHJ4KSAvIDIsIGZ5ID0gKGx5ICsgcnkpIC8gMiwgZm0sIGZiO1xuICAgICAgICB0aGlzLmNlbGxzW2xTaXRlLmlkXS5jbG9zZU1lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jZWxsc1tyU2l0ZS5pZF0uY2xvc2VNZSA9IHRydWU7XG4gICAgICAgIGlmIChyeSAhPT0gbHkpIHtcbiAgICAgICAgICAgIGZtID0gKGx4IC0gcngpIC8gKHJ5IC0gbHkpO1xuICAgICAgICAgICAgZmIgPSBmeSAtIGZtICogZng7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChmeCA8IHhsIHx8IGZ4ID49IHhyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGx4ID4gcngpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhIHx8IHZhLnkgPCB5dCkge1xuICAgICAgICAgICAgICAgICAgICB2YSA9IHRoaXMuY3JlYXRlVmVydGV4KGZ4LCB5dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhLnkgPj0geWIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KGZ4LCB5Yik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhIHx8IHZhLnkgPiB5Yikge1xuICAgICAgICAgICAgICAgICAgICB2YSA9IHRoaXMuY3JlYXRlVmVydGV4KGZ4LCB5Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhLnkgPCB5dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoZngsIHl0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbSA8IC0xIHx8IGZtID4gMSkge1xuICAgICAgICAgICAgaWYgKGx4ID4gcngpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhIHx8IHZhLnkgPCB5dCkge1xuICAgICAgICAgICAgICAgICAgICB2YSA9IHRoaXMuY3JlYXRlVmVydGV4KCh5dCAtIGZiKSAvIGZtLCB5dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhLnkgPj0geWIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KCh5YiAtIGZiKSAvIGZtLCB5Yik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhIHx8IHZhLnkgPiB5Yikge1xuICAgICAgICAgICAgICAgICAgICB2YSA9IHRoaXMuY3JlYXRlVmVydGV4KCh5YiAtIGZiKSAvIGZtLCB5Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhLnkgPCB5dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoKHl0IC0gZmIpIC8gZm0sIHl0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChseSA8IHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YSB8fCB2YS54IDwgeGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmEgPSB0aGlzLmNyZWF0ZVZlcnRleCh4bCwgZm0gKiB4bCArIGZiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmEueCA+PSB4cikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoeHIsIGZtICogeHIgKyBmYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhIHx8IHZhLnggPiB4cikge1xuICAgICAgICAgICAgICAgICAgICB2YSA9IHRoaXMuY3JlYXRlVmVydGV4KHhyLCBmbSAqIHhyICsgZmIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YS54IDwgeGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KHhsLCBmbSAqIHhsICsgZmIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVkZ2UudmEgPSB2YTtcbiAgICAgICAgZWRnZS52YiA9IHZiO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFZvcm9ub2kucHJvdG90eXBlLmNsaXBFZGdlID0gZnVuY3Rpb24gKGVkZ2UsIGJib3gpIHtcbiAgICAgICAgdmFyIGF4ID0gZWRnZS52YS54LCBheSA9IGVkZ2UudmEueSwgYnggPSBlZGdlLnZiLngsIGJ5ID0gZWRnZS52Yi55LCB0MCA9IDAsIHQxID0gMSwgZHggPSBieCAtIGF4LCBkeSA9IGJ5IC0gYXk7XG4gICAgICAgIHZhciBxID0gYXggLSBiYm94LnhsO1xuICAgICAgICBpZiAoZHggPT09IDAgJiYgcSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IC1xIC8gZHg7XG4gICAgICAgIGlmIChkeCA8IDApIHtcbiAgICAgICAgICAgIGlmIChyIDwgdDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA8IHQxKSB7XG4gICAgICAgICAgICAgICAgdDEgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR4ID4gMCkge1xuICAgICAgICAgICAgaWYgKHIgPiB0MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyID4gdDApIHtcbiAgICAgICAgICAgICAgICB0MCA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcSA9IGJib3gueHIgLSBheDtcbiAgICAgICAgaWYgKGR4ID09PSAwICYmIHEgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgciA9IHEgLyBkeDtcbiAgICAgICAgaWYgKGR4IDwgMCkge1xuICAgICAgICAgICAgaWYgKHIgPiB0MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyID4gdDApIHtcbiAgICAgICAgICAgICAgICB0MCA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHggPiAwKSB7XG4gICAgICAgICAgICBpZiAociA8IHQwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPCB0MSkge1xuICAgICAgICAgICAgICAgIHQxID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxID0gYXkgLSBiYm94Lnl0O1xuICAgICAgICBpZiAoZHkgPT09IDAgJiYgcSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByID0gLXEgLyBkeTtcbiAgICAgICAgaWYgKGR5IDwgMCkge1xuICAgICAgICAgICAgaWYgKHIgPCB0MCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyIDwgdDEpIHtcbiAgICAgICAgICAgICAgICB0MSA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHkgPiAwKSB7XG4gICAgICAgICAgICBpZiAociA+IHQxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPiB0MCkge1xuICAgICAgICAgICAgICAgIHQwID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxID0gYmJveC55YiAtIGF5O1xuICAgICAgICBpZiAoZHkgPT09IDAgJiYgcSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByID0gcSAvIGR5O1xuICAgICAgICBpZiAoZHkgPCAwKSB7XG4gICAgICAgICAgICBpZiAociA+IHQxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIgPiB0MCkge1xuICAgICAgICAgICAgICAgIHQwID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeSA+IDApIHtcbiAgICAgICAgICAgIGlmIChyIDwgdDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociA8IHQxKSB7XG4gICAgICAgICAgICAgICAgdDEgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0MCA+IDApIHtcbiAgICAgICAgICAgIGVkZ2UudmEgPSB0aGlzLmNyZWF0ZVZlcnRleChheCArIHQwICogZHgsIGF5ICsgdDAgKiBkeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQxIDwgMSkge1xuICAgICAgICAgICAgZWRnZS52YiA9IHRoaXMuY3JlYXRlVmVydGV4KGF4ICsgdDEgKiBkeCwgYXkgKyB0MSAqIGR5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodDAgPiAwIHx8IHQxIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5jZWxsc1tlZGdlLmxTaXRlLmlkXS5jbG9zZU1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbZWRnZS5yU2l0ZS5pZF0uY2xvc2VNZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBWb3Jvbm9pLnByb3RvdHlwZS5jbGlwRWRnZXMgPSBmdW5jdGlvbiAoYmJveCkge1xuICAgICAgICB2YXIgZWRnZXMgPSB0aGlzLmVkZ2VzLCBpRWRnZSA9IGVkZ2VzLmxlbmd0aCwgZWRnZSwgYWJzX2ZuID0gTWF0aC5hYnM7XG4gICAgICAgIHdoaWxlIChpRWRnZS0tKSB7XG4gICAgICAgICAgICBlZGdlID0gZWRnZXNbaUVkZ2VdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RFZGdlKGVkZ2UsIGJib3gpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMuY2xpcEVkZ2UoZWRnZSwgYmJveCkgfHxcbiAgICAgICAgICAgICAgICAoYWJzX2ZuKGVkZ2UudmEueCAtIGVkZ2UudmIueCkgPCB0aGlzLmVwcygpICYmIGFic19mbihlZGdlLnZhLnkgLSBlZGdlLnZiLnkpIDwgdGhpcy5lcHMoKSkpIHtcbiAgICAgICAgICAgICAgICBlZGdlLnZhID0gZWRnZS52YiA9IG51bGw7XG4gICAgICAgICAgICAgICAgZWRnZXMuc3BsaWNlKGlFZGdlLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVm9yb25vaS5wcm90b3R5cGUuY2xvc2VDZWxscyA9IGZ1bmN0aW9uIChiYm94KSB7XG4gICAgICAgIHZhciB4bCA9IGJib3gueGwsIHhyID0gYmJveC54ciwgeXQgPSBiYm94Lnl0LCB5YiA9IGJib3gueWIsIGNlbGxzID0gdGhpcy5jZWxscywgaUNlbGwgPSBjZWxscy5sZW5ndGgsIGNlbGwsIGlMZWZ0LCBoYWxmZWRnZXMsIG5IYWxmZWRnZXMsIGVkZ2UsIHZhLCB2YiwgdnosIGxhc3RCb3JkZXJTZWdtZW50LCBhYnNfZm4gPSBNYXRoLmFicztcbiAgICAgICAgd2hpbGUgKGlDZWxsLS0pIHtcbiAgICAgICAgICAgIGNlbGwgPSBjZWxsc1tpQ2VsbF07XG4gICAgICAgICAgICBpZiAoIWNlbGwucHJlcGFyZUhhbGZlZGdlcygpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNlbGwuY2xvc2VNZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFsZmVkZ2VzID0gY2VsbC5oYWxmZWRnZXM7XG4gICAgICAgICAgICBuSGFsZmVkZ2VzID0gaGFsZmVkZ2VzLmxlbmd0aDtcbiAgICAgICAgICAgIGlMZWZ0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpTGVmdCA8IG5IYWxmZWRnZXMpIHtcbiAgICAgICAgICAgICAgICB2YSA9IGhhbGZlZGdlc1tpTGVmdF0uZ2V0RW5kcG9pbnQoKTtcbiAgICAgICAgICAgICAgICB2eiA9IGhhbGZlZGdlc1soaUxlZnQgKyAxKSAlIG5IYWxmZWRnZXNdLmdldFN0YXJ0cG9pbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoYWJzX2ZuKHZhLnggLSB2ei54KSA+PSB0aGlzLmVwcygpIHx8IGFic19mbih2YS55IC0gdnoueSkgPj0gdGhpcy5lcHMoKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZhLngsIHhsKSAmJiB0aGlzLmxlc3NUaGFuV2l0aEVwc2lsb24odmEueSwgeWIpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXJTZWdtZW50ID0gdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZ6LngsIHhsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KHhsLCBsYXN0Qm9yZGVyU2VnbWVudCA/IHZ6LnkgOiB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSA9IHRoaXMuY3JlYXRlQm9yZGVyRWRnZShjZWxsLnNpdGUsIHZhLCB2Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxmZWRnZXMuc3BsaWNlKGlMZWZ0LCAwLCB0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIGNlbGwuc2l0ZSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5IYWxmZWRnZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJvcmRlclNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhID0gdmI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2YS55LCB5YikgJiYgdGhpcy5sZXNzVGhhbldpdGhFcHNpbG9uKHZhLngsIHhyKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyU2VnbWVudCA9IHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2ei55LCB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleChsYXN0Qm9yZGVyU2VnbWVudCA/IHZ6LnggOiB4ciwgeWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmNyZWF0ZUJvcmRlckVkZ2UoY2VsbC5zaXRlLCB2YSwgdmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpTGVmdCwgMCwgdGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBjZWxsLnNpdGUsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuSGFsZmVkZ2VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCb3JkZXJTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YSA9IHZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odmEueCwgeHIpICYmIHRoaXMuZ3JlYXRlclRoYW5XaXRoRXBzaWxvbih2YS55LCB5dCk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJvcmRlclNlZ21lbnQgPSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odnoueCwgeHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoeHIsIGxhc3RCb3JkZXJTZWdtZW50ID8gdnoueSA6IHl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlID0gdGhpcy5jcmVhdGVCb3JkZXJFZGdlKGNlbGwuc2l0ZSwgdmEsIHZiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpTGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUxlZnQsIDAsIHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgY2VsbC5zaXRlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbkhhbGZlZGdlcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Qm9yZGVyU2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmEgPSB2YjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZhLnksIHl0KSAmJiB0aGlzLmdyZWF0ZXJUaGFuV2l0aEVwc2lsb24odmEueCwgeGwpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXJTZWdtZW50ID0gdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZ6LnksIHl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KGxhc3RCb3JkZXJTZWdtZW50ID8gdnoueCA6IHhsLCB5dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSA9IHRoaXMuY3JlYXRlQm9yZGVyRWRnZShjZWxsLnNpdGUsIHZhLCB2Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxmZWRnZXMuc3BsaWNlKGlMZWZ0LCAwLCB0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIGNlbGwuc2l0ZSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5IYWxmZWRnZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJvcmRlclNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhID0gdmI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJvcmRlclNlZ21lbnQgPSB0aGlzLmVxdWFsV2l0aEVwc2lsb24odnoueCwgeGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZiID0gdGhpcy5jcmVhdGVWZXJ0ZXgoeGwsIGxhc3RCb3JkZXJTZWdtZW50ID8gdnoueSA6IHliKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlID0gdGhpcy5jcmVhdGVCb3JkZXJFZGdlKGNlbGwuc2l0ZSwgdmEsIHZiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpTGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGZlZGdlcy5zcGxpY2UoaUxlZnQsIDAsIHRoaXMuY3JlYXRlSGFsZmVkZ2UoZWRnZSwgY2VsbC5zaXRlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbkhhbGZlZGdlcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0Qm9yZGVyU2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmEgPSB2YjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyU2VnbWVudCA9IHRoaXMuZXF1YWxXaXRoRXBzaWxvbih2ei55LCB5Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmIgPSB0aGlzLmNyZWF0ZVZlcnRleChsYXN0Qm9yZGVyU2VnbWVudCA/IHZ6LnggOiB4ciwgeWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB0aGlzLmNyZWF0ZUJvcmRlckVkZ2UoY2VsbC5zaXRlLCB2YSwgdmIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlMZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsZmVkZ2VzLnNwbGljZShpTGVmdCwgMCwgdGhpcy5jcmVhdGVIYWxmZWRnZShlZGdlLCBjZWxsLnNpdGUsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuSGFsZmVkZ2VzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCb3JkZXJTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YSA9IHZiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXJTZWdtZW50ID0gdGhpcy5lcXVhbFdpdGhFcHNpbG9uKHZ6LngsIHhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YiA9IHRoaXMuY3JlYXRlVmVydGV4KHhyLCBsYXN0Qm9yZGVyU2VnbWVudCA/IHZ6LnkgOiB5dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSA9IHRoaXMuY3JlYXRlQm9yZGVyRWRnZShjZWxsLnNpdGUsIHZhLCB2Yik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaUxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxmZWRnZXMuc3BsaWNlKGlMZWZ0LCAwLCB0aGlzLmNyZWF0ZUhhbGZlZGdlKGVkZ2UsIGNlbGwuc2l0ZSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5IYWxmZWRnZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJvcmRlclNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIlZvcm9ub2kuY2xvc2VDZWxscygpID4gdGhpcyBtYWtlcyBubyBzZW5zZSFcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpTGVmdCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbC5jbG9zZU1lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBWb3Jvbm9pO1xufSgpKTtcbmV4cG9ydHMuVm9yb25vaSA9IFZvcm9ub2k7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12b3Jvbm9pLmpzLm1hcCIsImltcG9ydCAqIGFzIHBrZyBmcm9tIFwidm9yb25vaWpzXCI7XG5leHBvcnQgY29uc3QgY2FsY1Zvcm9ub2kgPSAocG9pbnRzKSA9PiB7XG4gICAgY29uc3Qgdm9yb25vaSA9IG5ldyBwa2cuVm9yb25vaSgpO1xuICAgIGxldCBtaW5feCA9IDA7XG4gICAgbGV0IG1heF94ID0gMDtcbiAgICBsZXQgbWluX3kgPSAwO1xuICAgIGxldCBtYXhfeSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgICBpZiAocG9pbnQueCA8IG1pbl94KVxuICAgICAgICAgICAgbWluX3ggPSBwb2ludC54O1xuICAgICAgICBpZiAocG9pbnQueCA+IG1heF94KVxuICAgICAgICAgICAgbWF4X3ggPSBwb2ludC54O1xuICAgICAgICBpZiAocG9pbnQueSA8IG1pbl95KVxuICAgICAgICAgICAgbWluX3kgPSBwb2ludC55O1xuICAgICAgICBpZiAocG9pbnQueSA+IG1heF95KVxuICAgICAgICAgICAgbWF4X3kgPSBwb2ludC55O1xuICAgIH1cbiAgICBsZXQgYmJveCA9IHsgeGw6IG1pbl94LCB4cjogbWF4X3gsIHl0OiBtaW5feSwgeWI6IG1heF95IH07XG4gICAgcmV0dXJuIHZvcm9ub2kuY29tcHV0ZShwb2ludHMsIGJib3gpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBzaGFwZUZyb21FZGdlcyhlZGdlcykge1xuICAgIGlmICghZWRnZXMgfHwgZWRnZXMubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgY29uc3QgZmlyc3RfZWRnZSA9IGVkZ2VzLnNoaWZ0KCk7XG4gICAgbGV0IHN0YXJ0ID0gZmlyc3RfZWRnZS5nZXRTdGFydHBvaW50KCk7XG4gICAgbGV0IGVuZCA9IGZpcnN0X2VkZ2UuZ2V0RW5kcG9pbnQoKTtcbiAgICByZXN1bHQucHVzaChgTSAke3N0YXJ0Lnh9ICR7c3RhcnQueX1gKTtcbiAgICByZXN1bHQucHVzaChgTCAke2VuZC54fSAke2VuZC55fWApO1xuICAgIGZvciAobGV0IGVkZ2Ugb2YgZWRnZXMpIHtcbiAgICAgICAgbGV0IGVuZCA9IGVkZ2UuZ2V0RW5kcG9pbnQoKTtcbiAgICAgICAgcmVzdWx0LnB1c2goYEwgJHtlbmQueH0gJHtlbmQueX1gKTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goXCJaXCIpO1xuICAgIHJldHVybiByZXN1bHQuam9pbihcIiBcIik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGVtaWN5Y2xlKHJhZGl1cywgcm93cywgcG9pbnRzLCBhbmdsZSkge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBsZXQgdG90YWxBcmNMZW5ndGggPSAwO1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgYXJjIGxlbmd0aFxuICAgIGZvciAobGV0IGkgPSByb3dzOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCByID0gcmFkaXVzIC0gaSAqIHJhZGl1cyAvIHJvd3M7XG4gICAgICAgIGNvbnN0IGFyY0xlbmd0aCA9IGFuZ2xlIC8gMTgwICogTWF0aC5QSSAqIHI7XG4gICAgICAgIHRvdGFsQXJjTGVuZ3RoICs9IGFyY0xlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgZGlzdGFuY2VCZXR3ZWVuUG9pbnRzID0gdG90YWxBcmNMZW5ndGggLyBwb2ludHM7XG4gICAgLy8gY29uc29sZS5sb2coe3RvdGFsQXJjTGVuZ3RoLCBkaXN0YW5jZUJldHdlZW5Qb2ludHN9KVxuICAgIGxldCB0b3RhbF9wb2ludHMgPSAwO1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgcG9pbnRzXG4gICAgbGV0IGEgPSAwO1xuICAgIGZvciAobGV0IGkgPSByb3dzOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCByID0gcmFkaXVzIC0gaSAqIHJhZGl1cyAvIHJvd3M7XG4gICAgICAgIGNvbnN0IGFyY0xlbmd0aCA9IGFuZ2xlIC8gMTgwICogTWF0aC5QSSAqIHI7XG4gICAgICAgIGxldCBwb2ludHNJbkFyYyA9IE1hdGguY2VpbChhcmNMZW5ndGggLyBkaXN0YW5jZUJldHdlZW5Qb2ludHMpO1xuICAgICAgICBpZiAodG90YWxfcG9pbnRzICsgcG9pbnRzSW5BcmMgPiBwb2ludHMpIHtcbiAgICAgICAgICAgIHBvaW50c0luQXJjID0gcG9pbnRzIC0gdG90YWxfcG9pbnRzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvY2FsRGlzdGFuY2VCZXR3ZWVuUG9pbnRzID0gYXJjTGVuZ3RoIC8gcG9pbnRzSW5BcmM7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IChhbmdsZSAtIDE4MCkgLyAxODAgKiBNYXRoLlBJIC8gMjtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwb2ludHNJbkFyYzsgaisrKSB7XG4gICAgICAgICAgICB0b3RhbF9wb2ludHMrKztcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKGogKiBsb2NhbERpc3RhbmNlQmV0d2VlblBvaW50cyAvIHIpICsgKGxvY2FsRGlzdGFuY2VCZXR3ZWVuUG9pbnRzIC8gciAvIDIpO1xuICAgICAgICAgICAgY29uc3QgeCA9IC1yICogTWF0aC5jb3MoYW5nbGUgLSBvZmZzZXQpO1xuICAgICAgICAgICAgY29uc3QgeSA9IC1yICogTWF0aC5zaW4oYW5nbGUgLSBvZmZzZXQpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBpZDogaSwgeCwgeSwgYSwgYW5nbGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYSsrO1xuICAgIH1cbiAgICByZXN1bHQuc29ydCgoYSwgYikgPT4gYS5hbmdsZSAtIGIuYW5nbGUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCI8c2NyaXB0PmltcG9ydCB7IGNhbGNWb3Jvbm9pLCBzaGFwZUZyb21FZGdlcyB9IGZyb20gXCIuL2xpYnMvdm9yb25vaVwiO1xuaW1wb3J0IHsgaGVtaWN5Y2xlIH0gZnJvbSBcIi4vbGlicy9oZW1pY3ljbGVcIjtcbmV4cG9ydCBsZXQgZGF0YSA9IFtdO1xuZXhwb3J0IGxldCByID0gMzAwO1xuZXhwb3J0IGxldCByb3dzID0gMTI7XG5leHBvcnQgbGV0IGRvdHNpemUgPSA1O1xuZXhwb3J0IGxldCBwYWRkaW5nID0gMTA7XG5leHBvcnQgbGV0IHRvdGFsX3NlYXRzO1xuZXhwb3J0IGxldCBjb2xvciA9IFwid2hpdGVcIjtcbmV4cG9ydCBsZXQgc3Ryb2tlID0gXCIjNDQ0NDQ0XCI7XG5leHBvcnQgbGV0IGZvbnRfc2l6ZSA9IDEyO1xuZXhwb3J0IGxldCBhcmMgPSAxODA7XG5leHBvcnQgbGV0IHRleHRfcG9zaXRpb24gPSBudWxsO1xuZXhwb3J0IGxldCBzaGFwZSA9IFwiY2lyY2xlXCI7XG5leHBvcnQgbGV0IGRpc3BsYXlfd2lkdGggPSA2MDA7XG5leHBvcnQgbGV0IGRpc3BsYXlfaGVpZ2h0ID0gMzAwO1xuZXhwb3J0IGxldCBkaXNwbGF5ID0gW1wicG9pbnRzXCIsIFwidGV4dFwiXTtcbmV4cG9ydCBsZXQgY3VycmVudF9wYXJ0eSA9IG51bGw7XG5sZXQgdG90YWxfb2NjdXBpZWRfc2VhdHMgPSAwO1xubGV0IHBvaW50cyA9IFtdO1xubGV0IHZvcm9ub2kgPSBudWxsO1xubGV0IGNsaWNrZWQgPSBmYWxzZTtcbmxldCB0b3BfcGFkZGluZyA9IDA7XG5sZXQgYm90dG9tX3BhZGRpbmcgPSAwO1xubGV0IGxlZnRfcGFkZGluZyA9IDA7XG5sZXQgcmlnaHRfcGFkZGluZyA9IDA7XG5sZXQgc3ZnX3dpZHRoID0gMDtcbmxldCBzdmdfaGVpZ2h0ID0gMDtcbmxldCBoZXhhZ29uX3NoYXBlID0gXCI1LDAgMTAsMi43NSAxMCw4LjI1IDUsMTEgMCw4LjI1IDAsMi43NVwiO1xuJDoge1xuICBpZiAoYXJjIDwgMTApXG4gICAgYXJjID0gMTA7XG4gIGlmIChhcmMgPiAzNjApXG4gICAgYXJjID0gMzYwO1xuICBjYWxjUGFkZGluZygpO1xuICBkYXRhLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcbiAgdG90YWxfb2NjdXBpZWRfc2VhdHMgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5jb3VudCwgMCk7XG4gIHBvaW50cyA9IGhlbWljeWNsZShyLCByb3dzLCB0b3RhbF9zZWF0cywgYXJjKTtcbiAgbGV0IHggPSAwO1xuICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFbaV0uY291bnQ7IGorKykge1xuICAgICAgcG9pbnRzW3hdLmRhdGEgPSBkYXRhW2ldO1xuICAgICAgeCsrO1xuICAgIH1cbiAgfVxuICB2b3Jvbm9pID0gY2FsY1Zvcm9ub2kocG9pbnRzKTtcbiAgc3ZnX3dpZHRoID0gciAqIDIgKyBsZWZ0X3BhZGRpbmcgKyByaWdodF9wYWRkaW5nO1xuICBsZXQgaGVpZ2h0X211bHRpcGxpZXIgPSBhcmMgLyAxODA7XG4gIGlmIChhcmMgPCAxODApIHtcbiAgICBoZWlnaHRfbXVsdGlwbGllciA9IDE7XG4gIH1cbiAgc3ZnX2hlaWdodCA9IChyICsgdG9wX3BhZGRpbmcgKyBib3R0b21fcGFkZGluZykgKiBoZWlnaHRfbXVsdGlwbGllcjtcbn1cbmZ1bmN0aW9uIGNhbGNQYWRkaW5nKCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYWRkaW5nKSkge1xuICAgIGlmIChwYWRkaW5nLmxlbmd0aCA9PT0gMikge1xuICAgICAgdG9wX3BhZGRpbmcgPSBwYWRkaW5nWzBdO1xuICAgICAgYm90dG9tX3BhZGRpbmcgPSBwYWRkaW5nWzBdO1xuICAgICAgbGVmdF9wYWRkaW5nID0gcGFkZGluZ1sxXTtcbiAgICAgIHJpZ2h0X3BhZGRpbmcgPSBwYWRkaW5nWzFdO1xuICAgIH0gZWxzZSBpZiAocGFkZGluZy5sZW5ndGggPT09IDQpIHtcbiAgICAgIHRvcF9wYWRkaW5nID0gcGFkZGluZ1swXTtcbiAgICAgIGJvdHRvbV9wYWRkaW5nID0gcGFkZGluZ1sxXTtcbiAgICAgIGxlZnRfcGFkZGluZyA9IHBhZGRpbmdbMl07XG4gICAgICByaWdodF9wYWRkaW5nID0gcGFkZGluZ1szXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9wX3BhZGRpbmcgPSBwYWRkaW5nO1xuICAgIGJvdHRvbV9wYWRkaW5nID0gcGFkZGluZztcbiAgICBsZWZ0X3BhZGRpbmcgPSBwYWRkaW5nO1xuICAgIHJpZ2h0X3BhZGRpbmcgPSBwYWRkaW5nO1xuICB9XG59XG5mdW5jdGlvbiBzZWxlY3RQYXJ0eShwb2ludCkge1xuICBpZiAocG9pbnQuZGF0YSAmJiAhY2xpY2tlZClcbiAgICBjdXJyZW50X3BhcnR5ID0gcG9pbnQuZGF0YTtcbn1cbmZ1bmN0aW9uIGNsaWNrUGFydHkocG9pbnQpIHtcbiAgaWYgKCFwb2ludC5kYXRhKVxuICAgIHJldHVybjtcbiAgaWYgKCFjdXJyZW50X3BhcnR5KSB7XG4gICAgY3VycmVudF9wYXJ0eSA9IHBvaW50LmRhdGE7XG4gICAgY2xpY2tlZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoY2xpY2tlZCAmJiBjdXJyZW50X3BhcnR5LmlkID09PSBwb2ludC5kYXRhLmlkKSB7XG4gICAgY3VycmVudF9wYXJ0eSA9IG51bGw7XG4gICAgY2xpY2tlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRfcGFydHkgPSBwb2ludC5kYXRhO1xuICAgIGNsaWNrZWQgPSB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiB1bnNlbGVjdFBhcnR5KCkge1xuICBpZiAoIWNsaWNrZWQpXG4gICAgY3VycmVudF9wYXJ0eSA9IG51bGw7XG59XG48L3NjcmlwdD5cbiAgICBcbiAgICA8bWFpbj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9e2Rpc3BsYXlfd2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2Rpc3BsYXlfaGVpZ2h0fVxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCB7c3ZnX3dpZHRofSB7c3ZnX2hlaWdodH1cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwiYXJjc1wiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ciArIGxlZnRfcGFkZGluZ30sICR7ciArIHRvcF9wYWRkaW5nfSlgfVxuICAgICAgICAgICAgICAgIGNsYXNzOmhpZGU9eyFkaXNwbGF5LmluY2x1ZGVzKFwiYXJjc1wiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7I2VhY2ggQXJyYXkocm93cykgYXMgXywgaX1cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEcmF3IGEgc2VtaWNpcmNsZSBmb3IgZWFjaCByb3cgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPXtgTSAke3IgLSBpICogKHIgLyByb3dzKX0sMCBBICR7ciAtIGkgKiAociAvIHJvd3MpfSwke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgLSBpICogKHIgLyByb3dzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSAwIDAsMCAkey0ociAtIGkgKiAociAvIHJvd3MpKX0sMGB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwicG9pbnRzXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyICsgbGVmdF9wYWRkaW5nfSwgJHtyICsgdG9wX3BhZGRpbmd9KWB9XG4gICAgICAgICAgICAgICAgY2xhc3M6aGlkZT17IWRpc3BsYXkuaW5jbHVkZXMoXCJwb2ludHNcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyNlYWNoIHBvaW50cyBhcyBwb2ludH1cbiAgICAgICAgICAgICAgICAgICAgeyNpZiBzaGFwZSA9PT0gXCJoZXhhZ29uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoJHtwb2ludC54IC0gNX0sJHtwb2ludC55IC0gNX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcnR5PXtwb2ludC5kYXRhPy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtwb2ludC5kYXRhPy5jb2xvciB8fCBcIndoaXRlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwibm9uemVyb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPXtzdHJva2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT17Y3VycmVudF9wYXJ0eT8uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwb2ludC5kYXRhPy5pZCA9PT0gY3VycmVudF9wYXJ0eT8uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHJvdGF0ZSgke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9pbnQuYW5nbGUgKiAxODApIC8gTWF0aC5QSSAtIDkwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IDUgNSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHM9e2hleGFnb25fc2hhcGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcG9seWdvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGFydHk9e3BvaW50LmRhdGE/LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4PXtwb2ludC54fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5PXtwb2ludC55fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI9e2RvdHNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17cG9pbnQuZGF0YT8uY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT17Y3VycmVudF9wYXJ0eT8uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwb2ludC5kYXRhPy5pZCA9PT0gY3VycmVudF9wYXJ0eT8uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwibnVtYmVyc1wiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ciArIGxlZnRfcGFkZGluZ30sICR7ciArIHRvcF9wYWRkaW5nfSlgfVxuICAgICAgICAgICAgICAgIGNsYXNzOmhpZGU9eyFkaXNwbGF5LmluY2x1ZGVzKFwibnVtYmVyc1wiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7I2VhY2ggcG9pbnRzIGFzIHBvaW50LCBpfVxuICAgICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgeD17cG9pbnQueH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHk9e3BvaW50Lnl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZT1cIjhcIj57YCR7aX1gfTwvdGV4dFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBpZD1cInZvcm9ub2lcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3IgKyBsZWZ0X3BhZGRpbmd9LCAke3IgKyB0b3BfcGFkZGluZ30pYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8IS0tIERyYXcgVm9yb25vaSAtLT5cbiAgICAgICAgICAgICAgICB7I2VhY2ggdm9yb25vaS5jZWxscyBhcyBjZWxsLCBpfVxuICAgICAgICAgICAgICAgICAgICB7I2lmIGNlbGwuaGFsZmVkZ2VzPy5sZW5ndGggPiAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInZvcm9ub2lfcGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD17c2hhcGVGcm9tRWRnZXMoY2VsbC5oYWxmZWRnZXMpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9e2Rpc3BsYXkuaW5jbHVkZXMoXCJ2b3Jvbm9pXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0cmFuc3BhcmVudFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD17ZGlzcGxheS5pbmNsdWRlcyhcInZvcm9ub2lcIikgPyAxIDogMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjptb3VzZW92ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UGFydHkoY2VsbC5zaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOmZvY3VzPXsoKSA9PiBzZWxlY3RQYXJ0eShjZWxsLnNpdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOm1vdXNlb3V0PXsoKSA9PiB1bnNlbGVjdFBhcnR5KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246Ymx1cj17KCkgPT4gdW5zZWxlY3RQYXJ0eSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrUGFydHkoY2VsbC5zaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOmtleXByZXNzPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tQYXJ0eShjZWxsLnNpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBpZD1cInRleHRcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3RleHRfcG9zaXRpb24/LnggfHwgciArIGxlZnRfcGFkZGluZ30sICR7XG4gICAgICAgICAgICAgICAgICAgIHRleHRfcG9zaXRpb24/LnkgfHwgciArIHRvcF9wYWRkaW5nICsgMjBcbiAgICAgICAgICAgICAgICB9KWB9XG4gICAgICAgICAgICAgICAgY2xhc3M6aGlkZT17IWRpc3BsYXkuaW5jbHVkZXMoXCJ0ZXh0XCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdGV4dCBkYXRhIC0tPlxuICAgICAgICAgICAgICAgIHsjaWYgY3VycmVudF9wYXJ0eX1cbiAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICB5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplPXtmb250X3NpemV9PntgJHtjdXJyZW50X3BhcnR5LnRleHR9YH08L3RleHRcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwicmVmZXJlbmNlUG9pbnRzXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtyICsgbGVmdF9wYWRkaW5nfSwgJHtyICsgdG9wX3BhZGRpbmd9KWB9XG4gICAgICAgICAgICAgICAgY2xhc3M6aGlkZT17IWRpc3BsYXkuaW5jbHVkZXMoXCJyZWZlcmVuY2VQb2ludHNcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJyZWZlcmVuY2VfcG9pbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB5PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU9XCI4XCI+MCwgMDwvdGV4dFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjJcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cInJlZmVyZW5jZV9wb2ludHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9e3J9XG4gICAgICAgICAgICAgICAgICAgICAgICB5PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50LWJhc2VsaW5lPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU9XCI4XCI+e2Ake3J9LCAkezB9YH08L3RleHRcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtyfSBjeT17MH0gcj1cIjJcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cInJlZmVyZW5jZV9wb2ludHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9e3IgLSAxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHk9ey1yICsgMTB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZT1cIjhcIj57YCR7cn0sICR7LXJ9YH08L3RleHRcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtyfSBjeT17LXJ9IHI9XCIyXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJyZWZlcmVuY2VfcG9pbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB4PXstciArIDEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgeT17LXIgKyAxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplPVwiOFwiPntgLSR7cn0sICR7LXJ9YH08L3RleHRcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXstcn0gY3k9ey1yfSByPVwiMlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwicmVmZXJlbmNlX3BvaW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgeD17LXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB5PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdubWVudC1iYXNlbGluZT1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplPVwiOFwiPntgLSR7cn0sICR7MH1gfTwvdGV4dFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9ey1yfSBjeT17MH0gcj1cIjJcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9tYWluPlxuICAgIFxuICAgIDxzdHlsZT5cbiAgICAgICAgLmhpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnZvcm9ub2lfcGF0aCB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICAiLCI8c2NyaXB0PlxuICAgIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gICAgaW1wb3J0IEhlbWljeWNsZSBmcm9tIFwic3ZlbHRlLWhlbWljeWNsZVwiO1xuXG4gICAgaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tIFwiQGVsZWN0aW9uLWVuZ2luZS9jb21tb24vbG9hZERhdGEuanNcIjtcbiAgICBpbXBvcnQgeyBwYXJ0eUNvbG9yIH0gZnJvbSBcIkBlbGVjdGlvbi1lbmdpbmUvY29tbW9uL2NvbG9ycy5qc1wiO1xuICAgIGltcG9ydCBZRUFSUyBmcm9tIFwiQGVsZWN0aW9uLWVuZ2luZS9jb21tb24veWVhcnMuanNvblwiO1xuICAgIGltcG9ydCBQUk9WSU5DRVMgZnJvbSBcIkBlbGVjdGlvbi1lbmdpbmUvY29tbW9uL3Byb3ZpbmNlcy5qc29uXCI7XG4gICAgaW1wb3J0IFNFQVRfQ09VTlRTIGZyb20gXCJAZWxlY3Rpb24tZW5naW5lL2NvbW1vbi9zZWF0X2NvdW50cy5qc29uXCI7XG5cbiAgICBsZXQgcHJvdmluY2VzID0gUFJPVklOQ0VTLmZpbHRlcigocCkgPT4gcCAhPT0gXCJPdXQgb2YgQ291bnRyeVwiKTtcblxuICAgIGltcG9ydCBcIi4vYXBwLmNzc1wiO1xuXG4gICAgZXhwb3J0IGxldCBzZWxlY3RlZF95ZWFyID0gMjAyNDsgLy8gMjAyNCwgMjAxOSwgMjAxNFxuICAgIGV4cG9ydCBsZXQgc2VsZWN0ZWRfZWxlY3Rpb24gPSBcIk5hdGlvbmFsIEFzc2VtYmx5XCI7IC8vIE5hdGlvbmFsIEFzc2VtYmx5LCBQcm92aW5jaWFsIExlZ2lzbGF0dXJlXG4gICAgZXhwb3J0IGxldCBzZWxlY3RlZF9yZWdpb24gPSBcIk5hdGlvbmFsXCI7IC8vIE5hdGlvbmFsLCBHYXV0ZW5nLCBXZXN0ZXJuIENhcGUsIGV0Yy5cbiAgICBleHBvcnQgbGV0IHNob3dfYnV0dG9ucyA9IGZhbHNlO1xuICAgIGV4cG9ydCBsZXQgc2hvd190aXRsZSA9IHRydWU7XG4gICAgZXhwb3J0IGxldCBkaXNwbGF5SGVpZ2h0ID0gNjQwO1xuICAgIGV4cG9ydCBsZXQgciA9IDMwMDtcblxuICAgIGxldCBjdXJyZW50X3BhcnR5O1xuXG4gICAgY29uc3QgY29sb3IgPSBcImJsYWNrXCI7XG4gICAgY29uc3QgZm9udF9zaXplID0gXCIyMFwiO1xuICAgIGNvbnN0IHNoYXBlID0gXCJoZXhhZ29uXCI7XG4gICAgZXhwb3J0IGxldCB0b3RhbF9zZWF0cyA9IDQwMDtcbiAgICBleHBvcnQgbGV0IHJvd3MgPSAxMjtcbiAgICBleHBvcnQgbGV0IGRpc3BsYXkgPSBbXCJwb2ludHNcIl07XG4gICAgZXhwb3J0IGxldCBibHVyYiA9IG51bGw7XG4gICAgbGV0IGRhdGEsIGFyYztcblxuICAgIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBkYXRhID0gYXdhaXQgcHJvY2Vzc0RhdGEoKTtcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldFllYXIoeWVhcikge1xuICAgICAgICBpZiAoeWVhciA9PT0gc2VsZWN0ZWRfeWVhcikgcmV0dXJuO1xuICAgICAgICBzZWxlY3RlZF95ZWFyID0geWVhcjtcbiAgICAgICAgZGF0YSA9IGF3YWl0IHByb2Nlc3NEYXRhKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0RWxlY3Rpb24oZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKGVsZWN0aW9uID09PSBzZWxlY3RlZF9lbGVjdGlvbikgcmV0dXJuO1xuICAgICAgICBzZWxlY3RlZF9lbGVjdGlvbiA9IGVsZWN0aW9uO1xuICAgICAgICBkYXRhID0gYXdhaXQgcHJvY2Vzc0RhdGEoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzZXRSZWdpb24ocmVnaW9uKSB7XG4gICAgICAgIGlmIChyZWdpb24gPT09IHNlbGVjdGVkX3JlZ2lvbikgcmV0dXJuO1xuICAgICAgICBzZWxlY3RlZF9yZWdpb24gPSByZWdpb247XG4gICAgICAgIGlmIChyZWdpb24gPT09IFwiTmF0aW9uYWxcIikgdG90YWxfc2VhdHMgPSA0MDA7XG4gICAgICAgIGRhdGEgPSBhd2FpdCBwcm9jZXNzRGF0YSgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKCkge1xuICAgICAgICBkYXRhID0gW107XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHNlbGVjdGVkX3JlZ2lvbiA9PT0gXCJOYXRpb25hbFwiICYmXG4gICAgICAgICAgICBzZWxlY3RlZF9lbGVjdGlvbiA9PT0gXCJQcm92aW5jaWFsIExlZ2lzbGF0dXJlXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzZWxlY3RlZF9yZWdpb24gPSBcIkdhdXRlbmdcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2FkZWRfZGF0YSA9IGF3YWl0IGxvYWREYXRhKHtcbiAgICAgICAgICAgIHllYXI6IHNlbGVjdGVkX3llYXIsXG4gICAgICAgICAgICBlbGVjdGlvbjogc2VsZWN0ZWRfZWxlY3Rpb24sXG4gICAgICAgICAgICByZWdpb246IFwiTmF0aW9uYWxcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzZWxlY3RlZF9lbGVjdGlvbiA9PT0gXCJOYXRpb25hbCBBc3NlbWJseVwiKSB7XG4gICAgICAgICAgICBibHVyYiA9XG4gICAgICAgICAgICAgICAgXCJUaGUgNDAwIHNlYXRzIG9mIHRoZSBOYXRpb25hbCBBc3NlbWJseSBhcmUgY2FsY3VsYXRlZCBieSBhc3NpZ25pbmcgMjAwIGZyb20gdGhlIHByb3ZpbmNpYWwgYmFsbG90IGFuZCAyMDAgZnJvbSB0aGUgbmF0aW9uYWwgbGlzdC4gSW4gMjAyNCwgdGhlIHByb3ZpbmNpYWwgYmFsbG90IGluY2x1ZGVzIGluZGVwZW5kZW50IGNhbmRpZGF0ZXMuXCI7XG4gICAgICAgICAgICBzZWxlY3RlZF9yZWdpb24gPSBcIk5hdGlvbmFsXCI7XG4gICAgICAgICAgICBjb25zdCBtYXBwZWREYXRhID0gbG9hZGVkX2RhdGEucGFydHlfYmFsbG90X3Jlc3VsdHMubWFwKFxuICAgICAgICAgICAgICAgIChwYXJ0eSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcnR5LnBhcnR5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcGFydHkucGFydHlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBwYXJ0eS5zZWF0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYXJ0eUNvbG9yKHBhcnR5LnBhcnR5X2FiYnJldmlhdGlvbiwgaSksXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiBwYXJ0eS52b3RlX3BlcmMsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsX3NlYXRzID0gNDAwO1xuICAgICAgICAgICAgcm93cyA9IDEzO1xuICAgICAgICAgICAgciA9IDMwMDtcbiAgICAgICAgICAgIHJldHVybiBtYXBwZWREYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VfZGF0YSA9IGxvYWRlZF9kYXRhLnByb3ZpbmNpYWxfcmVzdWx0cy5maW5kKFxuICAgICAgICAgICAgICAgIChwcm92aW5jZSkgPT4gcHJvdmluY2UucHJvdmluY2VfbmFtZSA9PT0gc2VsZWN0ZWRfcmVnaW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbWFwcGVkRGF0YSA9IHByb3ZpbmNlX2RhdGEucGFydHlfYmFsbG90X3Jlc3VsdHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChwYXJ0eSkgPT4gcGFydHkuc2VhdHMgPiAwKVxuICAgICAgICAgICAgICAgIC5tYXAoKHBhcnR5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcGFydHkucGFydHlfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBwYXJ0eS5wYXJ0eV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHBhcnR5LnNlYXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHBhcnR5Q29sb3IocGFydHkucGFydHlfYWJicmV2aWF0aW9uLCBpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHBhcnR5LnZvdGVfcGVyYyxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZF95ZWFyID09PSAyMDI0KSB7XG4gICAgICAgICAgICAgICAgdG90YWxfc2VhdHMgPSBTRUFUX0NPVU5UU1tzZWxlY3RlZF9yZWdpb25dO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b3RhbF9zZWF0cyA9IG1hcHBlZERhdGEucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAoYWNjLCBwYXJ0eSkgPT4gYWNjICsgcGFydHkuY291bnQsXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmx1cmIgPSBgRWFjaCBQcm92aW5jaWFsIExlZ2lzbGF0dXJlIGhhcyBhIGRpZmZlcmVudCBudW1iZXIgb2Ygc2VhdHMuIEluICR7c2VsZWN0ZWRfeWVhcn0sIHRoZSAke3NlbGVjdGVkX3JlZ2lvbn0gTGVnaXNsYXR1cmUgaGFzICR7dG90YWxfc2VhdHN9IHNlYXRzLmA7XG4gICAgICAgICAgICByb3dzID0gTWF0aC5jZWlsKHRvdGFsX3NlYXRzIC8gMTUpO1xuICAgICAgICAgICAgciA9IDIwMDtcbiAgICAgICAgICAgIHJldHVybiBtYXBwZWREYXRhO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJlbGVjdGlvbi1lbmdpbmUtaGVtaWN5Y2xlLWFwcFwiPlxuICAgIHsjaWYgc2hvd19idXR0b25zfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUteWVhcnMtYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUteWVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBzZXRFbGVjdGlvbihcIk5hdGlvbmFsIEFzc2VtYmx5XCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzOmFjdGl2ZT17c2VsZWN0ZWRfZWxlY3Rpb24gPT09IFwiTmF0aW9uYWwgQXNzZW1ibHlcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOYXRpb25hbCBBc3NlbWJseVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS15ZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IHNldEVsZWN0aW9uKFwiUHJvdmluY2lhbCBMZWdpc2xhdHVyZVwiKX1cbiAgICAgICAgICAgICAgICBjbGFzczphY3RpdmU9e3NlbGVjdGVkX2VsZWN0aW9uID09PSBcIlByb3ZpbmNpYWwgTGVnaXNsYXR1cmVcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQcm92aW5jaWFsIExlZ2lzbGF0dXJlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS15ZWFycy1idXR0b25zXCI+XG4gICAgICAgICAgICB7I2VhY2ggWUVBUlMgYXMgeWVhcn1cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUteWVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gc2V0WWVhcih5ZWFyKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6YWN0aXZlPXtzZWxlY3RlZF95ZWFyID09PSB5ZWFyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3llYXJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUteWVhcnMtYnV0dG9uc1wiPlxuICAgICAgICAgICAgeyNpZiBzZWxlY3RlZF9lbGVjdGlvbiA9PT0gXCJOYXRpb25hbCBBc3NlbWJseVwifVxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS15ZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBzZXRSZWdpb24oXCJOYXRpb25hbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6YWN0aXZlPXtzZWxlY3RlZF9yZWdpb24gPT09IFwiTmF0aW9uYWxcIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE5hdGlvbmFsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgeyNlYWNoIHByb3ZpbmNlcyBhcyBwcm92aW5jZX1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS15ZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gc2V0UmVnaW9uKHByb3ZpbmNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOmFjdGl2ZT17c2VsZWN0ZWRfcmVnaW9uID09PSBwcm92aW5jZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpbmNlfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICA8L2Rpdj5cbiAgICB7L2lmfVxuICAgIHsjaWYgc2hvd190aXRsZX1cbiAgICAgICAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRpdGxlXCI+XG4gICAgICAgICAgICB7c2VsZWN0ZWRfcmVnaW9uID09PSBcIk5hdGlvbmFsXCJcbiAgICAgICAgICAgICAgICA/IGBHZW5lcmFsIEFzc3NlbWJseSBzZWF0IGFsbG9jYXRpb24gZm9yICR7c2VsZWN0ZWRfeWVhcn1gXG4gICAgICAgICAgICAgICAgOiBgJHtzZWxlY3RlZF9yZWdpb259IFByb3ZpbmNpYWwgTGVnaXNsYXR1cmUgc2VhdCBhbGxvY2F0aW9uIGZvciAke3NlbGVjdGVkX3llYXJ9YH1cbiAgICAgICAgPC9kaXY+XG4gICAgey9pZn1cbiAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb24tZW5naW5lLWhlbWljeWNsZS1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS1oZW1pY3ljbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SGVtaWN5Y2xlXG4gICAgICAgICAgICAgICAgYmluZDpjdXJyZW50X3BhcnR5XG4gICAgICAgICAgICAgICAge2Rpc3BsYXlIZWlnaHR9XG4gICAgICAgICAgICAgICAge2RhdGF9XG4gICAgICAgICAgICAgICAge3Jvd3N9XG4gICAgICAgICAgICAgICAge2Rpc3BsYXl9XG4gICAgICAgICAgICAgICAge2NvbG9yfVxuICAgICAgICAgICAgICAgIHtmb250X3NpemV9XG4gICAgICAgICAgICAgICAge3NoYXBlfVxuICAgICAgICAgICAgICAgIHthcmN9XG4gICAgICAgICAgICAgICAge3RvdGFsX3NlYXRzfVxuICAgICAgICAgICAgICAgIHtyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsjaWYgYmx1cmJ9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtYmx1cmJcIj57Ymx1cmJ9PC9kaXY+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIHsjaWYgY3VycmVudF9wYXJ0eX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS1wYXJ0eS1yZXN1bHRzLWluZm9ybWF0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS1wYXJ0eS1yZXN1bHRzLWluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6Ym9yZGVyLWxlZnQ9XCI2cHgge2N1cnJlbnRfcGFydHk/LmNvbG9yfSBzb2xpZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtcGFydHktbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRfcGFydHk/LnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlY3Rpb25lbmdpbmUtc2VhdC1jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRfcGFydHk/LmNvdW50fSBzZWF0c1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS10b29sdGlwLXJhbmdlLXdyYXBwZXIgZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC10ZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS10b29sdGlwLXJhbmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZWN0aW9uZW5naW5lLXRvb2x0aXAtb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbGVjdGlvbmVuZ2luZS10b29sdGlwLWlubmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6e2N1cnJlbnRfcGFydHkucGVyY2VudGFnZX0lOyBiYWNrZ3JvdW5kOntjdXJyZW50X3BhcnR5LmNvbG9yfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoY3VycmVudF9wYXJ0eS5wZXJjZW50YWdlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwxXCJ9JTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2lmfVxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgICAuZWxlY3Rpb25lbmdpbmUteWVhci1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cblxuICAgIC5lbGVjdGlvbmVuZ2luZS15ZWFyLWJ1dHRvbi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZWxlY3Rpb24tZW5naW5lLWhlbWljeWNsZS1zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiB0b3A7XG4gICAgICAgIGZsZXg6IDAuNDtcbiAgICAgICAgLyogbWluLWhlaWdodDogNTAwcHg7ICovXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuZWxlY3Rpb25lbmdpbmUtaGVtaWN5Y2xlLWNvbnRhaW5lciB7XG4gICAgICAgIC8qIGhlaWdodDogMzIwcHg7ICovXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLWJsdXJiIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzJhMmEyYTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjN2M0YzQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMjBweCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIH1cblxuICAgIC5lbGVjdGlvbmVuZ2luZS1wYXJ0eS1yZXN1bHRzLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgICAgIGxlZnQ6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLXBhcnR5LXJlc3VsdHMtaW5mb3JtYXRpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLXBhcnR5LW5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC10ZGF0YSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICMyYTJhMmE7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M3YzRjNDtcbiAgICB9XG5cbiAgICAuZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC1yYW5nZS13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLXRvb2x0aXAtcmFuZ2Uge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLXRvb2x0aXAtb3V0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgfVxuXG4gICAgLmVsZWN0aW9uZW5naW5lLXRvb2x0aXAtaW5uZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA3MyU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC1jb250YWluZXJcbiAgICAgICAgPiBkaXY6bGFzdC1jaGlsZFxuICAgICAgICAuZWxlY3Rpb25lbmdpbmUtdG9vbHRpcC10ZGF0YSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cdGltcG9ydCBDYXJ0b2dyYW0gZnJvbSBcIkBlbGVjdGlvbi1lbmdpbmUvbWFwL3NyYy9BcHAuc3ZlbHRlXCI7XG5cdGltcG9ydCBUYWJsZSBmcm9tIFwiQGVsZWN0aW9uLWVuZ2luZS90YWJsZS9zcmMvQXBwLnN2ZWx0ZVwiO1xuXHRpbXBvcnQgSGVtaWN5Y2xlIGZyb20gXCJAZWxlY3Rpb24tZW5naW5lL2hlbWljeWNsZS9zcmMvQXBwLnN2ZWx0ZVwiO1xuXG5cdGV4cG9ydCBsZXQgdmlzdWFsaXNhdGlvbiA9IFwiaGVtaWN5Y2xlXCI7XG5cdGV4cG9ydCBsZXQgc2VsZWN0ZWRfeWVhciA9IDIwMjQ7XG5cdGV4cG9ydCBsZXQgc2VsZWN0ZWRfZWxlY3Rpb24gPSBcIk5hdGlvbmFsIEFzc2VtYmx5XCI7XG5cdGV4cG9ydCBsZXQgc2VsZWN0ZWRfcmVnaW9uID0gXCJHYXV0ZW5nXCI7XG5cdGV4cG9ydCBsZXQgc2VsZWN0ZWRfZmllbGRzID0gW1wiUGFydHlcIiwgXCJWb3Rlc1wiLCBcIlNlYXRzXCJdO1xuXG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXHR9KTtcbjwvc2NyaXB0PlxuXG57I2lmIHZpc3VhbGlzYXRpb24gPT09IFwiaGVtaWN5Y2xlXCJ9XG5cdDxIZW1pY3ljbGUge3NlbGVjdGVkX3llYXJ9IHtzZWxlY3RlZF9lbGVjdGlvbn0ge3NlbGVjdGVkX3JlZ2lvbn0gLz5cbnsvaWZ9XG57I2lmIHZpc3VhbGlzYXRpb24gPT09IFwiY2FydG9cIn1cblx0PENhcnRvZ3JhbSB7c2VsZWN0ZWRfeWVhcn0ge3NlbGVjdGVkX2VsZWN0aW9ufSB7c2VsZWN0ZWRfcmVnaW9ufSAvPlxuey9pZn1cbnsjaWYgdmlzdWFsaXNhdGlvbiA9PT0gXCJ0YWJsZVwifVxuXHQ8VGFibGVcblx0XHR7c2VsZWN0ZWRfeWVhcn1cblx0XHR7c2VsZWN0ZWRfZWxlY3Rpb259XG5cdFx0e3NlbGVjdGVkX3JlZ2lvbn1cblx0XHR7c2VsZWN0ZWRfZmllbGRzfVxuXHQvPlxuey9pZn1cbiIsIi8vIGltcG9ydCAnLi9hcHAuY3NzJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5zdmVsdGUnXG4vLyBHZXQgXCJpZFwiIGF0dHJpYnV0ZSBmcm9tIHRoZSBkaXYgZWxlbWVudCBpbiB0aGUgYmxvY2tcbmpRdWVyeSgoKSA9PiB7XG5cdGNvbnN0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3AtYmxvY2stdGVubGF5ZXItZWxlY3Rpb24tZW5naW5lJyk7XG5cdHRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuXHRcdGxldCBwcm9wcyA9IHtcblx0XHRcdGlkOiB0YXJnZXQuaWQsXG5cdFx0XHR2aXN1YWxpc2F0aW9uOiBqUXVlcnkodGFyZ2V0KS5kYXRhKFwidmlzdWFsaXNhdGlvblwiKSxcblx0XHRcdHNlbGVjdGVkX3llYXI6IGpRdWVyeSh0YXJnZXQpLmRhdGEoXCJzZWxlY3RlZF95ZWFyXCIpLFxuXHRcdFx0c2VsZWN0ZWRfZWxlY3Rpb246IGpRdWVyeSh0YXJnZXQpLmRhdGEoXCJzZWxlY3RlZF9lbGVjdGlvblwiKSxcblx0XHRcdHNlbGVjdGVkX3JlZ2lvbjogalF1ZXJ5KHRhcmdldCkuZGF0YShcInNlbGVjdGVkX3JlZ2lvblwiKSxcblx0XHRcdHNlbGVjdGVkX2ZpZWxkczogalF1ZXJ5KHRhcmdldCkuZGF0YShcInNlbGVjdGVkX2ZpZWxkc1wiKT8uc3BsaXQoXCIsXCIpLm1hcChzID0+IHMudHJpbSgpKSxcblx0XHR9XG5cdFx0bmV3IEFwcCh7XG5cdFx0XHR0YXJnZXQsXG5cdFx0XHRwcm9wc1xuXHRcdH0pXG5cdH0pXG59KVxuLy8gZXhwb3J0IGRlZmF1bHQgYXBwXG4iXSwibmFtZXMiOlsibm9vcCIsImlkZW50aXR5IiwieCIsInJ1biIsImZuIiwiYmxhbmtfb2JqZWN0IiwicnVuX2FsbCIsImZucyIsImlzX2Z1bmN0aW9uIiwidGhpbmciLCJzYWZlX25vdF9lcXVhbCIsImEiLCJiIiwiaXNfZW1wdHkiLCJvYmoiLCJzcGxpdF9jc3NfdW5pdCIsInZhbHVlIiwic3BsaXQiLCJpc19jbGllbnQiLCJub3ciLCJyYWYiLCJjYiIsInRhc2tzIiwicnVuX3Rhc2tzIiwidGFzayIsImxvb3AiLCJjYWxsYmFjayIsImZ1bGZpbGwiLCJhcHBlbmQiLCJ0YXJnZXQiLCJub2RlIiwiZ2V0X3Jvb3RfZm9yX3N0eWxlIiwicm9vdCIsImFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0Iiwic3R5bGVfZWxlbWVudCIsImVsZW1lbnQiLCJhcHBlbmRfc3R5bGVzaGVldCIsInN0eWxlIiwiaW5zZXJ0IiwiYW5jaG9yIiwiZGV0YWNoIiwiZGVzdHJveV9lYWNoIiwiaXRlcmF0aW9ucyIsImRldGFjaGluZyIsImkiLCJuYW1lIiwic3ZnX2VsZW1lbnQiLCJ0ZXh0IiwiZGF0YSIsInNwYWNlIiwiZW1wdHkiLCJsaXN0ZW4iLCJldmVudCIsImhhbmRsZXIiLCJvcHRpb25zIiwiYXR0ciIsImF0dHJpYnV0ZSIsImNoaWxkcmVuIiwic2V0X2RhdGEiLCJzZXRfc3R5bGUiLCJrZXkiLCJpbXBvcnRhbnQiLCJjcm9zc29yaWdpbiIsImlzX2Nyb3Nzb3JpZ2luIiwiYWRkX2lmcmFtZV9yZXNpemVfbGlzdGVuZXIiLCJpZnJhbWUiLCJ1bnN1YnNjcmliZSIsInRvZ2dsZV9jbGFzcyIsInRvZ2dsZSIsImN1c3RvbV9ldmVudCIsInR5cGUiLCJkZXRhaWwiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsIm1hbmFnZWRfc3R5bGVzIiwiYWN0aXZlIiwiaGFzaCIsInN0ciIsImNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbiIsImRvYyIsImluZm8iLCJjcmVhdGVfcnVsZSIsImR1cmF0aW9uIiwiZGVsYXkiLCJlYXNlIiwidWlkIiwic3RlcCIsImtleWZyYW1lcyIsInAiLCJ0IiwicnVsZSIsInN0eWxlc2hlZXQiLCJydWxlcyIsImFuaW1hdGlvbiIsImRlbGV0ZV9ydWxlIiwicHJldmlvdXMiLCJuZXh0IiwiYW5pbSIsImRlbGV0ZWQiLCJjbGVhcl9ydWxlcyIsIm93bmVyTm9kZSIsImN1cnJlbnRfY29tcG9uZW50Iiwic2V0X2N1cnJlbnRfY29tcG9uZW50IiwiY29tcG9uZW50IiwiZ2V0X2N1cnJlbnRfY29tcG9uZW50Iiwib25Nb3VudCIsImJ1YmJsZSIsImNhbGxiYWNrcyIsImRpcnR5X2NvbXBvbmVudHMiLCJiaW5kaW5nX2NhbGxiYWNrcyIsInJlbmRlcl9jYWxsYmFja3MiLCJmbHVzaF9jYWxsYmFja3MiLCJyZXNvbHZlZF9wcm9taXNlIiwidXBkYXRlX3NjaGVkdWxlZCIsInNjaGVkdWxlX3VwZGF0ZSIsImZsdXNoIiwiYWRkX3JlbmRlcl9jYWxsYmFjayIsImFkZF9mbHVzaF9jYWxsYmFjayIsInNlZW5fY2FsbGJhY2tzIiwiZmx1c2hpZHgiLCJzYXZlZF9jb21wb25lbnQiLCJ1cGRhdGUiLCIkJCIsImRpcnR5IiwiZmx1c2hfcmVuZGVyX2NhbGxiYWNrcyIsImZpbHRlcmVkIiwidGFyZ2V0cyIsImMiLCJwcm9taXNlIiwid2FpdCIsImRpc3BhdGNoIiwiZGlyZWN0aW9uIiwia2luZCIsIm91dHJvaW5nIiwib3V0cm9zIiwiZ3JvdXBfb3V0cm9zIiwiY2hlY2tfb3V0cm9zIiwidHJhbnNpdGlvbl9pbiIsImJsb2NrIiwibG9jYWwiLCJ0cmFuc2l0aW9uX291dCIsIm51bGxfdHJhbnNpdGlvbiIsImNyZWF0ZV9pbl90cmFuc2l0aW9uIiwicGFyYW1zIiwiY29uZmlnIiwicnVubmluZyIsImFuaW1hdGlvbl9uYW1lIiwiY2xlYW51cCIsImdvIiwiZWFzaW5nIiwibGluZWFyIiwidGljayIsImNzcyIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsInN0YXJ0ZWQiLCJjcmVhdGVfb3V0X3RyYW5zaXRpb24iLCJncm91cCIsIm9yaWdpbmFsX2luZXJ0X3ZhbHVlIiwicmVzZXQiLCJlbnN1cmVfYXJyYXlfbGlrZSIsImFycmF5X2xpa2Vfb3JfaXRlcmF0b3IiLCJiaW5kIiwiaW5kZXgiLCJjcmVhdGVfY29tcG9uZW50IiwibW91bnRfY29tcG9uZW50IiwiZnJhZ21lbnQiLCJhZnRlcl91cGRhdGUiLCJuZXdfb25fZGVzdHJveSIsImRlc3Ryb3lfY29tcG9uZW50IiwibWFrZV9kaXJ0eSIsImluaXQiLCJpbnN0YW5jZSIsImNyZWF0ZV9mcmFnbWVudCIsIm5vdF9lcXVhbCIsInByb3BzIiwiYXBwZW5kX3N0eWxlcyIsInBhcmVudF9jb21wb25lbnQiLCJyZWFkeSIsInJldCIsInJlc3QiLCJub2RlcyIsIlN2ZWx0ZUNvbXBvbmVudCIsIl9fcHVibGljRmllbGQiLCJQVUJMSUNfVkVSU0lPTiIsImJhc2VVcmwiLCJsb2FkRGF0YSIsInllYXIiLCJlbGVjdGlvbiIsInJlZ2lvbiIsInVybCIsIm5hdGlvbmFsMjAwOSIsIm5hdGlvbmFsMjAxNCIsIm5hdGlvbmFsMjAxOSIsImxvYWQiLCJyZXNwb25zZSIsImFzY2VuZGluZyIsImRlc2NlbmRpbmciLCJiaXNlY3RvciIsImYiLCJjb21wYXJlMSIsImNvbXBhcmUyIiwiZGVsdGEiLCJkIiwiemVybyIsImxlZnQiLCJsbyIsImhpIiwibWlkIiwicmlnaHQiLCJjZW50ZXIiLCJudW1iZXIiLCJhc2NlbmRpbmdCaXNlY3QiLCJiaXNlY3RSaWdodCIsImV4dGVudCIsInZhbHVlcyIsInZhbHVlb2YiLCJtaW4iLCJtYXgiLCJBZGRlciIsImoiLCJ5IiwibiIsImUxMCIsImU1IiwiZTIiLCJ0aWNrU3BlYyIsInN0YXJ0Iiwic3RvcCIsImNvdW50IiwicG93ZXIiLCJlcnJvciIsImZhY3RvciIsImkxIiwiaTIiLCJpbmMiLCJ0aWNrcyIsInJldmVyc2UiLCJ0aWNrSW5jcmVtZW50IiwidGlja1N0ZXAiLCJmbGF0dGVuIiwiYXJyYXlzIiwiYXJyYXkiLCJtZXJnZSIsImVwc2lsb24iLCJwaSIsInRhdSIsImRlZ3JlZXMiLCJyYWRpYW5zIiwiYWJzIiwiY29zIiwic2luIiwic3FydCIsInN0cmVhbUdlb21ldHJ5IiwiZ2VvbWV0cnkiLCJzdHJlYW0iLCJzdHJlYW1HZW9tZXRyeVR5cGUiLCJzdHJlYW1PYmplY3RUeXBlIiwib2JqZWN0IiwiZmVhdHVyZXMiLCJjb29yZGluYXRlcyIsInN0cmVhbUxpbmUiLCJzdHJlYW1Qb2x5Z29uIiwiZ2VvbWV0cmllcyIsImNsb3NlZCIsImNvb3JkaW5hdGUiLCJnZW9TdHJlYW0iLCJjbGlwQnVmZmVyIiwibGluZXMiLCJsaW5lIiwibSIsInJlc3VsdCIsInBvaW50RXF1YWwiLCJJbnRlcnNlY3Rpb24iLCJwb2ludCIsInBvaW50cyIsIm90aGVyIiwiZW50cnkiLCJjbGlwUmVqb2luIiwic2VnbWVudHMiLCJjb21wYXJlSW50ZXJzZWN0aW9uIiwic3RhcnRJbnNpZGUiLCJpbnRlcnBvbGF0ZSIsInN1YmplY3QiLCJjbGlwIiwic2VnbWVudCIsInAwIiwicDEiLCJsaW5rIiwiY3VycmVudCIsImlzU3ViamVjdCIsImNsaXBMaW5lIiwieDAiLCJ5MCIsIngxIiwieTEiLCJheCIsImF5IiwiYngiLCJieSIsInQwIiwidDEiLCJkeCIsImR5IiwiciIsImNsaXBNYXgiLCJjbGlwTWluIiwiY2xpcFJlY3RhbmdsZSIsInZpc2libGUiLCJmcm9tIiwidG8iLCJhMSIsImNvcm5lciIsImNvbXBhcmVQb2ludCIsImNhIiwiYWN0aXZlU3RyZWFtIiwiYnVmZmVyU3RyZWFtIiwicG9seWdvbiIsInJpbmciLCJ4X18iLCJ5X18iLCJ2X18iLCJ4XyIsInlfIiwidl8iLCJmaXJzdCIsImNsZWFuIiwiY2xpcFN0cmVhbSIsImxpbmVTdGFydCIsImxpbmVFbmQiLCJwb2x5Z29uU3RhcnQiLCJwb2x5Z29uRW5kIiwicG9seWdvbkluc2lkZSIsIndpbmRpbmciLCJhMCIsImIwIiwiYjEiLCJjbGVhbkluc2lkZSIsImxpbmVQb2ludCIsInYiLCJpZGVudGl0eSQyIiwiYXJlYVN1bSIsImFyZWFSaW5nU3VtIiwieDAwIiwieTAwIiwiYXJlYVN0cmVhbSIsImFyZWFSaW5nU3RhcnQiLCJhcmVhUmluZ0VuZCIsImFyZWEiLCJhcmVhUG9pbnRGaXJzdCIsImFyZWFQb2ludCIsImJvdW5kc1N0cmVhbSIsImJvdW5kc1BvaW50IiwiYm91bmRzIiwiWDAiLCJZMCIsIlowIiwiWDEiLCJZMSIsIloxIiwiWDIiLCJZMiIsIloyIiwiY2VudHJvaWRTdHJlYW0iLCJjZW50cm9pZFBvaW50IiwiY2VudHJvaWRMaW5lU3RhcnQiLCJjZW50cm9pZExpbmVFbmQiLCJjZW50cm9pZFJpbmdTdGFydCIsImNlbnRyb2lkUmluZ0VuZCIsImNlbnRyb2lkIiwiY2VudHJvaWRQb2ludEZpcnN0TGluZSIsImNlbnRyb2lkUG9pbnRMaW5lIiwieiIsImNlbnRyb2lkUG9pbnRGaXJzdFJpbmciLCJjZW50cm9pZFBvaW50UmluZyIsIlBhdGhDb250ZXh0IiwiY29udGV4dCIsIl8iLCJsZW5ndGhTdW0iLCJsZW5ndGhSaW5nIiwibGVuZ3RoU3RyZWFtIiwibGVuZ3RoUG9pbnRGaXJzdCIsImxlbmd0aFBvaW50IiwibGVuZ3RoIiwiY2FjaGVEaWdpdHMiLCJjYWNoZUFwcGVuZCIsImNhY2hlUmFkaXVzIiwiY2FjaGVDaXJjbGUiLCJQYXRoU3RyaW5nIiwiZGlnaXRzIiwiYXBwZW5kUm91bmQiLCJzIiwic3RyaW5ncyIsImsiLCJnZW9QYXRoIiwicHJvamVjdGlvbiIsInBvaW50UmFkaXVzIiwicHJvamVjdGlvblN0cmVhbSIsImNvbnRleHRTdHJlYW0iLCJwYXRoIiwicGF0aEFyZWEiLCJwYXRoTWVhc3VyZSIsInBhdGhCb3VuZHMiLCJwYXRoQ2VudHJvaWQiLCJ0cmFuc2Zvcm1lciIsIm1ldGhvZHMiLCJUcmFuc2Zvcm1TdHJlYW0iLCJmaXQiLCJmaXRCb3VuZHMiLCJmaXRFeHRlbnQiLCJ3IiwiaCIsImZpdFNpemUiLCJzaXplIiwiZml0V2lkdGgiLCJ3aWR0aCIsImZpdEhlaWdodCIsImhlaWdodCIsImdlb0lkZW50aXR5IiwidHgiLCJ0eSIsInN4Iiwic3kiLCJhbHBoYSIsInNhIiwia3giLCJreSIsInRyYW5zZm9ybSIsInBvc3RjbGlwIiwiY2FjaGUiLCJjYWNoZVN0cmVhbSIsInJlZ2lvbmFsU2VhdEFsbG9jYXRpb24iLCJzdmciLCJjb2xvcnMiLCJwYXJ0eSIsImNvbG9yIiwicGFydHlDb2xvcnMiLCJwYXJ0eUNvbG9yIiwicGFydHlJRCIsImdlbmVyaWNDb2xvcnMiLCJ0X3ZhbHVlIiwiY3R4IiwiZGl2IiwiZzAiLCJnMF9maWxsX3ZhbHVlIiwiZzEiLCJnMV90cmFuc2Zvcm1fdmFsdWUiLCJ0Ml92YWx1ZSIsImNyZWF0ZV9pZl9ibG9ja18xIiwiaWZfYmxvY2sxIiwiY3JlYXRlX2lmX2Jsb2NrIiwic3ZnMCIsInN2ZzBfdmlld0JveF92YWx1ZSIsInN2ZzEiLCJzdmcxX3ZpZXdCb3hfdmFsdWUiLCJ0ZXh0XzEiLCJ0MiIsInNlYXRzIiwiJCRwcm9wcyIsInRvdGFsX3NlYXRzIiwiY29scyIsIm9mZnNldCIsImdyaWQiLCJoZXhhZ29uX2RhdGEiLCJ0b29sdGlwRGF0YSIsInNlYXRzRGF0YSIsInJvd3MiLCJjYWxjdWxhdGVSb3dzIiwiZSIsIiQkaW52YWxpZGF0ZSIsInNlYXQiLCJtb3VzZWxlYXZlX2hhbmRsZXIiLCJpc0dhdXRlbmciLCJjYWxjdWxhdGVTZWF0cyIsImN1YmljT3V0IiwiZmFkZSIsIm8iLCJmbHkiLCJvcGFjaXR5IiwidGFyZ2V0X29wYWNpdHkiLCJvZCIsInhWYWx1ZSIsInhVbml0IiwieVZhbHVlIiwieVVuaXQiLCJ1IiwibnVtYmVyV2l0aENvbW1hcyIsInQ3X3ZhbHVlIiwidDE0X3ZhbHVlIiwidDE4X3ZhbHVlIiwiZGl2NCIsImRpdjE2IiwiZGl2MTUiLCJkaXYyIiwiZGl2MCIsImRpdjEiLCJkaXY4IiwiZGl2MyIsImRpdjciLCJkaXY2IiwiZGl2NSIsInNwYW4iLCJkaXYxMSIsImRpdjkiLCJkaXYxMCIsImRpdjE0IiwiZGl2MTIiLCJkaXYxMyIsInQ3IiwidDEyIiwidDEyX3ZhbHVlIiwidDE0IiwidDE4IiwidG9vbHRpcFdpZHRoIiwidG9vbHRpcEhlaWdodCIsInhOdWRnZSIsInlOdWRnZSIsInhQb3NpdGlvbiIsInlQb3NpdGlvbiIsImhleGFnb25zX2NoYW5nZXMiLCJlYWNoX2Jsb2NrcyIsInByb3ZpbmNlcyIsImNhcnRvZ3JhbV9kYXRhIiwiY29vcmRzIiwicmVnaW9uX3NlYXQiLCJwcm92aW5jZV9yZXN1bHQiLCJwcm92aW5jZV9pZCIsInByb3ZpbmNlX3RvdGFsX3NlYXRzIiwiZyIsInBhdGhfMSIsInBhdGhfMV9kX3ZhbHVlIiwiZ2V0TWFwIiwiaW5uZXJXaWR0aCIsImdlb19kYXRhIiwidDFfdmFsdWUiLCJ0M192YWx1ZSIsImdfZmlsbF92YWx1ZSIsInQzIiwiY2FsY3VsYXRlVG90YWxTZWF0cyIsInBhcnR5U2VhdHMiLCJwcm92aW5jZSIsInNvcnRlZFBhcnR5U2VhdHMiLCJpbml0UmFuZ2UiLCJkb21haW4iLCJyYW5nZSIsImRlZmluZSIsImNvbnN0cnVjdG9yIiwiZmFjdG9yeSIsInByb3RvdHlwZSIsImV4dGVuZCIsInBhcmVudCIsImRlZmluaXRpb24iLCJDb2xvciIsImRhcmtlciIsImJyaWdodGVyIiwicmVJIiwicmVOIiwicmVQIiwicmVIZXgiLCJyZVJnYkludGVnZXIiLCJyZVJnYlBlcmNlbnQiLCJyZVJnYmFJbnRlZ2VyIiwicmVSZ2JhUGVyY2VudCIsInJlSHNsUGVyY2VudCIsInJlSHNsYVBlcmNlbnQiLCJuYW1lZCIsImNoYW5uZWxzIiwiY29sb3JfZm9ybWF0SGV4IiwiY29sb3JfZm9ybWF0SGV4OCIsImNvbG9yX2Zvcm1hdEhzbCIsImNvbG9yX2Zvcm1hdFJnYiIsImhzbENvbnZlcnQiLCJmb3JtYXQiLCJsIiwicmdibiIsIlJnYiIsInJnYmEiLCJoc2xhIiwicmdiQ29udmVydCIsInJnYiIsImNsYW1waSIsImNsYW1wYSIsInJnYl9mb3JtYXRIZXgiLCJyZ2JfZm9ybWF0SGV4OCIsInJnYl9mb3JtYXRSZ2IiLCJoZXgiLCJIc2wiLCJoc2wiLCJtMiIsIm0xIiwiaHNsMnJnYiIsImNsYW1waCIsImNsYW1wdCIsImNvbnN0YW50IiwiZXhwb25lbnRpYWwiLCJnYW1tYSIsIm5vZ2FtbWEiLCJyZ2JHYW1tYSIsImVuZCIsImNvbG9yUmdiIiwibnVtYmVyQXJyYXkiLCJpc051bWJlckFycmF5IiwiZ2VuZXJpY0FycmF5IiwibmIiLCJuYSIsImRhdGUiLCJpbnRlcnBvbGF0ZU51bWJlciIsInJlQSIsInJlQiIsIm9uZSIsInN0cmluZyIsImJpIiwiYW0iLCJibSIsImJzIiwicSIsImludGVycG9sYXRlUm91bmQiLCJjb25zdGFudHMiLCJ1bml0Iiwibm9ybWFsaXplIiwiY2xhbXBlciIsImJpbWFwIiwiZDAiLCJkMSIsInIwIiwicjEiLCJwb2x5bWFwIiwiYmlzZWN0IiwiY29weSIsInNvdXJjZSIsImludGVycG9sYXRlVmFsdWUiLCJ1bnRyYW5zZm9ybSIsInVua25vd24iLCJjbGFtcCIsInBpZWNld2lzZSIsIm91dHB1dCIsImlucHV0IiwicmVzY2FsZSIsInNjYWxlIiwiY29udGludW91cyIsImZvcm1hdERlY2ltYWwiLCJmb3JtYXREZWNpbWFsUGFydHMiLCJjb2VmZmljaWVudCIsImV4cG9uZW50IiwiZm9ybWF0R3JvdXAiLCJncm91cGluZyIsInRob3VzYW5kcyIsImZvcm1hdE51bWVyYWxzIiwibnVtZXJhbHMiLCJyZSIsImZvcm1hdFNwZWNpZmllciIsInNwZWNpZmllciIsIm1hdGNoIiwiRm9ybWF0U3BlY2lmaWVyIiwiZm9ybWF0VHJpbSIsIm91dCIsImkwIiwicHJlZml4RXhwb25lbnQiLCJmb3JtYXRQcmVmaXhBdXRvIiwiZm9ybWF0Um91bmRlZCIsImZvcm1hdFR5cGVzIiwibWFwIiwicHJlZml4ZXMiLCJmb3JtYXRMb2NhbGUiLCJsb2NhbGUiLCJjdXJyZW5jeVByZWZpeCIsImN1cnJlbmN5U3VmZml4IiwiZGVjaW1hbCIsInBlcmNlbnQiLCJtaW51cyIsIm5hbiIsIm5ld0Zvcm1hdCIsImZpbGwiLCJhbGlnbiIsInNpZ24iLCJzeW1ib2wiLCJjb21tYSIsInByZWNpc2lvbiIsInRyaW0iLCJwcmVmaXgiLCJzdWZmaXgiLCJmb3JtYXRUeXBlIiwibWF5YmVTdWZmaXgiLCJ2YWx1ZVByZWZpeCIsInZhbHVlU3VmZml4IiwidmFsdWVOZWdhdGl2ZSIsInBhZGRpbmciLCJmb3JtYXRQcmVmaXgiLCJkZWZhdWx0TG9jYWxlIiwicHJlY2lzaW9uRml4ZWQiLCJwcmVjaXNpb25QcmVmaXgiLCJwcmVjaXNpb25Sb3VuZCIsInRpY2tGb3JtYXQiLCJsaW5lYXJpc2giLCJwcmVzdGVwIiwibWF4SXRlciIsIm1hcHNfZW5kcG9pbnQiLCJidXR0b24iLCJ0MF92YWx1ZSIsInBhdGhfMV9kYXRhX3BlcmNfdmFsdWUiLCJzZWxlY3RlZF9lbGVjdGlvbiIsImJhc2VfdXJsIiwiZ2V0TWFwRGF0YSIsInNlbGVjdGVkX3llYXIiLCJzZWxlY3RlZF9yZWdpb24iLCJwcm92aW5jZV9tYXBfY29kZSIsIm1hcF91cmwiLCJwcm92aW5jZXNfZ2VvX2RhdGEiLCJwcm92aW5jZXNfYXJyYXkiLCJnZXRUb3RhbFBhcnR5IiwiaGlnaFBhcnR5IiwiZ2V0RGF0YSIsIm11bmljaXBhbCIsIml0ZW0iLCJtdW5pY2lwYWxfbmFtZSIsImhpZ2hlc3RWb3RlUGVyY1BhcnR5IiwiZmVhdHVyZSIsIm1hdGNoaW5nUGFydHlSZXN1bHQiLCJzZXREYXRhIiwiY2xpY2tfaGFuZGxlciIsImNvbG9yX3NjYWxlIiwic2NhbGVMaW5lYXIiLCJjb2xvckZpbGwiLCJ5ZWFycyIsImJ1dHRvbjAiLCJidXR0b24xIiwiY3JlYXRlX2lmX2Jsb2NrXzIiLCJjcmVhdGVfaWZfYmxvY2tfNCIsInNob3dfYnV0dG9ucyIsIlBST1ZJTkNFUyIsImxvYWRpbmciLCJzZXRZZWFyIiwic2V0RWxlY3Rpb24iLCJjbGlja19oYW5kbGVyXzEiLCJjbGlja19oYW5kbGVyXzIiLCJZRUFSUyIsImlmX2Jsb2NrIiwiY3JlYXRlX2lmX2Jsb2NrXzEwIiwidGgiLCJlYWNoX3ZhbHVlIiwidGQiLCJjcmVhdGVfaWZfYmxvY2tfMyIsInN0eWxlX2JvcmRlcl9sZWZ0IiwiaWZfYmxvY2swIiwiY3JlYXRlX2lmX2Jsb2NrXzUiLCJ0ciIsInRkMCIsInRkMSIsImNyZWF0ZV9pZl9ibG9ja185IiwiY3JlYXRlX2lmX2Jsb2NrXzgiLCJpZl9ibG9jazIiLCJjcmVhdGVfaWZfYmxvY2tfNyIsImlmX2Jsb2NrMyIsImNyZWF0ZV9pZl9ibG9ja182IiwidGFibGUiLCJ0aGVhZCIsInRoMCIsInRoMSIsInRib2R5Iiwic2hvd190aXRsZSIsInByb2Nlc3NEYXRhIiwic2V0UmVnaW9uIiwidm90ZV9yZXN1bHRzIiwiY3VycmVudF95ZWFyIiwicHJldmlvdXNfeWVhciIsInByZXZpb3VzX3BhcnR5IiwiY2xpY2tfaGFuZGxlcl8zIiwiY2xpY2tfaGFuZGxlcl80IiwicmJ0cmVlIiwiUkJUcmVlIiwic3VjY2Vzc29yIiwiZ3JhbmRwYSIsInVuY2xlIiwiaXNSZWQiLCJzaWJsaW5nIiwiUkJUcmVlTm9kZSIsInZlcnRleCIsIlZlcnRleCIsImVkZ2UiLCJFZGdlIiwibFNpdGUiLCJyU2l0ZSIsImNlbGwiLCJDZWxsIiwic2l0ZSIsImhhbGZlZGdlcyIsImlIYWxmZWRnZSIsIm5laWdoYm9ycyIsInhtaW4iLCJ5bWluIiwieG1heCIsInltYXgiLCJ2eCIsInZ5IiwiaGFsZmVkZ2UiLCJkaWFncmFtIiwiRGlhZ3JhbSIsIkhhbGZlZGdlIiwidmEiLCJ2YiIsInZvcm9ub2kiLCJyYnRyZWVfMSIsInJlcXVpcmUkJDAiLCJ2ZXJ0ZXhfMSIsInJlcXVpcmUkJDEiLCJlZGdlXzEiLCJyZXF1aXJlJCQyIiwiY2VsbF8xIiwicmVxdWlyZSQkMyIsImRpYWdyYW1fMSIsInJlcXVpcmUkJDQiLCJoYWxmZWRnZV8xIiwicmVxdWlyZSQkNSIsIlZvcm9ub2kiLCJzaXRlcyIsImJib3giLCJzdGFydFRpbWUiLCJzaXRlRXZlbnRzIiwic2l0ZWlkIiwieHNpdGV4IiwieHNpdGV5IiwiY2VsbHMiLCJjaXJjbGUiLCJzdG9wVGltZSIsImVwcyIsImJlYWNoc2VjdGlvbiIsImFyYyIsImRpcmVjdHJpeCIsInJmb2N4IiwicmZvY3kiLCJwYnkyIiwibEFyYyIsImxmb2N4IiwibGZvY3kiLCJwbGJ5MiIsImhsIiwiYWJ5MiIsInJBcmMiLCJkaXNhcHBlYXJpbmdUcmFuc2l0aW9ucyIsImFic19mbiIsIm5BcmNzIiwiaUFyYyIsImR4bCIsImR4ciIsIm5ld0FyYyIsImN4IiwiY3kiLCJoYiIsImhjIiwiY1NpdGUiLCJoYSIsInljZW50ZXIiLCJjaXJjbGVFdmVudCIsInByZWRlY2Vzc29yIiwieGwiLCJ4ciIsInl0IiwieWIiLCJseCIsImx5IiwicngiLCJyeSIsImZ4IiwiZnkiLCJmbSIsImZiIiwiZWRnZXMiLCJpRWRnZSIsImlDZWxsIiwiaUxlZnQiLCJuSGFsZmVkZ2VzIiwidnoiLCJsYXN0Qm9yZGVyU2VnbWVudCIsIlZvcm9ub2lfMSIsImNhbGNWb3Jvbm9pIiwicGtnLlZvcm9ub2kiLCJtaW5feCIsIm1heF94IiwibWluX3kiLCJtYXhfeSIsInNoYXBlRnJvbUVkZ2VzIiwiZmlyc3RfZWRnZSIsImhlbWljeWNsZSIsInJhZGl1cyIsImFuZ2xlIiwidG90YWxBcmNMZW5ndGgiLCJhcmNMZW5ndGgiLCJkaXN0YW5jZUJldHdlZW5Qb2ludHMiLCJ0b3RhbF9wb2ludHMiLCJwb2ludHNJbkFyYyIsImxvY2FsRGlzdGFuY2VCZXR3ZWVuUG9pbnRzIiwicGF0aF9kX3ZhbHVlIiwiX2EiLCJfYiIsIl9jIiwiX2QiLCJfZSIsImNpcmNsZV9jeF92YWx1ZSIsImNpcmNsZV9jeV92YWx1ZSIsImNpcmNsZV9vcGFjaXR5X3ZhbHVlIiwicG9seWdvbl90cmFuc2Zvcm1fdmFsdWUiLCJoZXhhZ29uX3NoYXBlIiwiZ19vcGFjaXR5X3ZhbHVlIiwidGV4dF8xX3hfdmFsdWUiLCJ0ZXh0XzFfeV92YWx1ZSIsInBhdGhfc3Ryb2tlX3dpZHRoX3ZhbHVlIiwidDRfdmFsdWUiLCJlYWNoX3ZhbHVlXzMiLCJnMF90cmFuc2Zvcm1fdmFsdWUiLCJnMiIsImcyX3RyYW5zZm9ybV92YWx1ZSIsImczIiwiZzNfdHJhbnNmb3JtX3ZhbHVlIiwiZzQiLCJnNF90cmFuc2Zvcm1fdmFsdWUiLCJ0ZXh0MiIsInRleHQyX3hfdmFsdWUiLCJ0ZXh0Ml95X3ZhbHVlIiwidGV4dDMiLCJ0ZXh0M194X3ZhbHVlIiwidGV4dDNfeV92YWx1ZSIsImcxMCIsImcxMF90cmFuc2Zvcm1fdmFsdWUiLCJzdmdfdmlld0JveF92YWx1ZSIsIm1haW4iLCJnNSIsInRleHQwIiwiY2lyY2xlMCIsImc2IiwidGV4dDEiLCJjaXJjbGUxIiwiZzciLCJjaXJjbGUyIiwiZzgiLCJjaXJjbGUzIiwiZzkiLCJ0ZXh0NCIsImNpcmNsZTQiLCJ0NCIsImRvdHNpemUiLCJzdHJva2UiLCJmb250X3NpemUiLCJ0ZXh0X3Bvc2l0aW9uIiwic2hhcGUiLCJkaXNwbGF5X3dpZHRoIiwiZGlzcGxheV9oZWlnaHQiLCJkaXNwbGF5IiwiY3VycmVudF9wYXJ0eSIsImNsaWNrZWQiLCJ0b3BfcGFkZGluZyIsImJvdHRvbV9wYWRkaW5nIiwibGVmdF9wYWRkaW5nIiwicmlnaHRfcGFkZGluZyIsInN2Z193aWR0aCIsInN2Z19oZWlnaHQiLCJjYWxjUGFkZGluZyIsInNlbGVjdFBhcnR5IiwiY2xpY2tQYXJ0eSIsInVuc2VsZWN0UGFydHkiLCJhY2MiLCJjdXIiLCJoZWlnaHRfbXVsdGlwbGllciIsInQ2X3ZhbHVlIiwidDYiLCJkaXNwbGF5SGVpZ2h0IiwiYmx1cmIiLCJsb2FkZWRfZGF0YSIsIm1hcHBlZERhdGEiLCJTRUFUX0NPVU5UUyIsInZpc3VhbGlzYXRpb24iLCJzZWxlY3RlZF9maWVsZHMiLCJBcHAiXSwibWFwcGluZ3MiOiI7OztBQUNPLFNBQVNBLEtBQU87QUFBRTtBQUVsQixNQUFNQyxLQUFXLENBQUNDLE1BQU1BO0FBb0N4QixTQUFTQyxHQUFJQyxHQUFJO0FBQ3ZCLFNBQU9BLEVBQUU7QUFDVjtBQUVPLFNBQVNDLEtBQWU7QUFDOUIsU0FBTyx1QkFBTyxPQUFPLElBQUk7QUFDMUI7QUFNTyxTQUFTQyxHQUFRQyxHQUFLO0FBQzVCLEVBQUFBLEVBQUksUUFBUUosRUFBRztBQUNoQjtBQU1PLFNBQVNL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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YixnQkFBZ0I7QUFBQSxFQUNoQixZQUFZO0FBQUEsRUFDWixZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxzQkFBc0I7QUFBQSxFQUN0QixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixnQkFBZ0I7QUFBQSxFQUNoQixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixrQkFBa0I7QUFBQSxFQUNsQixZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixtQkFBbUI7QUFBQSxFQUNuQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixXQUFXO0FBQUEsRUFDWCxlQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixlQUFlO0FBQUEsRUFDZixLQUFLO0FBQUEsRUFDTCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUEsRUFDWCxLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEs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Ozs7Ozs7Ozs7Ozs7a0JDakpyRDJNO0FBQUE7QUFBQSxJQUFBOVMsU0FBa0IsZUFBVzZSLEdBQUE3UixDQUFBO0FBQUEsS0FHN0JRO0FBQUE7QUFBQSxJQUFBUixTQUFrQixXQUFPTyxHQUFBUCxDQUFBO0FBQUEsS0FHekJxVDtBQUFBO0FBQUEsSUFBQXJULFNBQWtCLFdBQU9TLEdBQUFULENBQUE7QUFBQTs7Ozs7Ozs7O0FBTnpCO0FBQUEsTUFBQUEsU0FBa0I7Ozs7TUFHbEJBLFNBQWtCOzs7O01BR2xCQSxTQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoQlgsTUFBQSxFQUFBLGVBQUFnaEIsSUFBZ0IsWUFBVyxJQUFBL2YsR0FDM0IsRUFBQSxlQUFBcVAsSUFBZ0IsS0FBSSxJQUFBclAsR0FDcEIsRUFBQSxtQkFBQWtQLElBQW9CLG9CQUFtQixJQUFBbFAsR0FDdkMsRUFBQSxpQkFBQXNQLElBQWtCLFVBQVMsSUFBQXRQLEdBQzNCLEVBQUEsaUJBQUFnZ0IsSUFBbUIsQ0FBQSxTQUFTLFNBQVMsT0FBTyxFQUFBLElBQUFoZ0I7QUFFdkQsU0FBQWpXLEdBQU8sWUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUixPQUFPLE1BQU07QUFFWixFQURnQixTQUFTLGlCQUFpQixvQ0FBb0MsRUFDdEUsUUFBUSxDQUFBNUUsTUFBVTtBdkdMM0IsUUFBQSsxQjtBdUdNRSxRQUFJN3NCLElBQVE7QUFBQSxNQUNYLElBQUlsSixFQUFPO0FBQUEsTUFDWCxlQUFlLE9BQU9BLENBQU0sRUFBRSxLQUFLLGVBQWU7QUFBQSxNQUNsRCxlQUFlLE9BQU9BLENBQU0sRUFBRSxLQUFLLGVBQWU7QUFBQSxNQUNsRCxtQkFBbUIsT0FBT0EsQ0FBTSxFQUFFLEtBQUssbUJBQW1CO0FBQUEsTUFDMUQsaUJBQWlCLE9BQU9BLENBQU0sRUFBRSxLQUFLLGlCQUFpQjtBQUFBLE1BQ3RELGtCQUFpQisxQixJQUFBLE9BQU8vMUIsQ0FBTSxFQUFFLEtBQUssaUJBQWlCLE1BQXJDLGdCQUFBKzFCLEVBQXdDLE1BQU0sS0FBSyxJQUFJLENBQUFyZixNQUFLQSxFQUFFLEtBQUk7QUFBQSxJQUNuRjtBQUNELFFBQUlva0IsR0FBSTtBQUFBLE1BQ1AsUUFBQTk2QjtBQUFBLE1BQ0EsT0FBQWtKO0FBQUEsSUFDSCxDQUFHO0FBQUEsRUFDSCxDQUFFO0FBQ0YsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0NSw0Niw1Myw1NCw1NSw1Niw1Nyw1OCw1OSw2MCw2MSw2Miw2Myw2NCw2NSw2Niw2Nyw2OCw2OSw3MCw3MSw3Miw3Myw3NCw3NSw3Niw3Nyw3OCw3OSw4MCw4MSw4Miw4Myw4NCw4NSw4Niw5MSw5Miw5Myw5NCw5NSw5Niw5Nyw5OCw5OSwxMDBdfQ==
