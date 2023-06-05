import {
  S as ae,
  i as ie,
  s as oe,
  e as h,
  t as I,
  c as k,
  a as y,
  g as P,
  d as c,
  b as $,
  f as b,
  H as m,
  N as pe,
  h as R,
  I as g,
  O as _e,
  P as ve,
  j as X,
  m as Z,
  o as x,
  x as H,
  u as L,
  v as ee,
  Q as me,
  A as de,
  l as Y,
  R as re,
  T as be,
  k as w,
  n as E,
  r as he,
  w as ke,
  M as ye,
  U as $e,
} from "../chunks/vendor-437948e4.js";
import { H as Ie } from "../chunks/HeroLayout-753e706e.js";
function Pe(o) {
  let e,
    s = (o[1] ? "\u2713 Copied" : "Copy") + "",
    l,
    t = (o[0] ? " " : "") + "",
    i,
    n,
    _,
    p;
  return {
    c() {
      (e = h("button")), (l = I(s)), (i = I(t)), (n = I(o[0])), this.h();
    },
    l(f) {
      e = k(f, "BUTTON", { type: !0, class: !0 });
      var u = y(e);
      (l = P(u, s)), (i = P(u, t)), (n = P(u, o[0])), u.forEach(c), this.h();
    },
    h() {
      $(e, "type", "button"),
        $(e, "class", "button button--secondary button--small");
    },
    m(f, u) {
      b(f, e, u),
        m(e, l),
        m(e, i),
        m(e, n),
        _ || ((p = pe(e, "click", o[2])), (_ = !0));
    },
    p(f, [u]) {
      u & 2 && s !== (s = (f[1] ? "\u2713 Copied" : "Copy") + "") && R(l, s),
        u & 1 && t !== (t = (f[0] ? " " : "") + "") && R(i, t),
        u & 1 && R(n, f[0]);
    },
    i: g,
    o: g,
    d(f) {
      f && c(e), (_ = !1), p();
    },
  };
}
function ge(o, e, s) {
  let { value: l = "" } = e,
    { postfix: t = "" } = e,
    i = !1,
    n = null;
  const _ = () => {
    _e(l),
      s(1, (i = !0)),
      n && clearTimeout(n),
      (n = setTimeout(() => {
        i && s(1, (i = !1));
      }, 1050));
  };
  return (
    (o.$$set = (p) => {
      "value" in p && s(3, (l = p.value)),
        "postfix" in p && s(0, (t = p.postfix));
    }),
    [t, i, _, l]
  );
}
class ne extends ae {
  constructor(e) {
    super();
    ie(this, e, ge, Pe, oe, { value: 3, postfix: 0 });
  }
}
const we = () => {
  const o = ve("__svelte__");
  return {
    page: { subscribe: o.page.subscribe },
    navigating: { subscribe: o.navigating.subscribe },
    get preloading() {
      return (
        console.error(
          "stores.preloading is deprecated; use stores.navigating instead"
        ),
        { subscribe: o.navigating.subscribe }
      );
    },
    session: o.session,
  };
};
function fe(o) {
  let e, s;
  return {
    c() {
      (e = h("div")),
        (s = I("\u{1F614} The PIN you entered is invalid.")),
        this.h();
    },
    l(l) {
      e = k(l, "DIV", { class: !0 });
      var t = y(e);
      (s = P(t, "\u{1F614} The PIN you entered is invalid.")),
        t.forEach(c),
        this.h();
    },
    h() {
      $(e, "class", "invalid-pin svelte-1tb2i87");
    },
    m(l, t) {
      b(l, e, t), m(e, s);
    },
    d(l) {
      l && c(e);
    },
  };
}
function ue(o) {
  let e,
    s,
    l,
    t = {
      ctx: o,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Ce,
      then: Ne,
      catch: Ee,
      blocks: [, , ,],
    };
  return (
    re((s = o[2]), t),
    {
      c() {
        (e = Y()), t.block.c();
      },
      l(i) {
        (e = Y()), t.block.l(i);
      },
      m(i, n) {
        b(i, e, n),
          t.block.m(i, (t.anchor = n)),
          (t.mount = () => e.parentNode),
          (t.anchor = e),
          (l = !0);
      },
      p(i, n) {
        (o = i),
          (t.ctx = o),
          (n & 4 && s !== (s = o[2]) && re(s, t)) || be(t, o, n);
      },
      i(i) {
        l || (H(t.block), (l = !0));
      },
      o(i) {
        for (let n = 0; n < 3; n += 1) {
          const _ = t.blocks[n];
          L(_);
        }
        l = !1;
      },
      d(i) {
        i && c(e), t.block.d(i), (t.token = null), (t = null);
      },
    }
  );
}
function Ee(o) {
  return { c: g, l: g, m: g, p: g, i: g, o: g, d: g };
}
function Ne(o) {
  let e,
    s,
    l,
    t,
    i,
    n,
    _,
    p,
    f,
    u,
    a,
    v,
    O,
    B,
    Q,
    C,
    U,
    z,
    T,
    F,
    j,
    q,
    J,
    K,
    N,
    W,
    G,
    S;
  return (
    (_ = new ne({ props: { value: o[1], postfix: "PIN" } })),
    (T = new ne({
      props: { value: "" + (o[3] + "/play/" + o[1]), postfix: "link" },
    })),
    {
      c() {
        (e = h("div")),
          (s = I("Your PIN:")),
          (l = w()),
          (t = h("div")),
          (i = I(o[1])),
          (n = w()),
          X(_.$$.fragment),
          (p = w()),
          (f = h("hr")),
          (u = w()),
          (a = h("div")),
          (v = h("div")),
          (O = h("p")),
          (B = I("Share this link for others to join:")),
          (Q = w()),
          (C = h("input")),
          (z = w()),
          X(T.$$.fragment),
          (F = w()),
          (j = h("div")),
          (q = h("p")),
          (J = I("Or start playing:")),
          (K = w()),
          (N = h("a")),
          (W = I("Play now")),
          this.h();
      },
      l(r) {
        e = k(r, "DIV", {});
        var d = y(e);
        (s = P(d, "Your PIN:")),
          d.forEach(c),
          (l = E(r)),
          (t = k(r, "DIV", { class: !0 }));
        var A = y(t);
        (i = P(A, o[1])),
          A.forEach(c),
          (n = E(r)),
          Z(_.$$.fragment, r),
          (p = E(r)),
          (f = k(r, "HR", { class: !0 })),
          (u = E(r)),
          (a = k(r, "DIV", { class: !0 }));
        var D = y(a);
        v = k(D, "DIV", { class: !0 });
        var V = y(v);
        O = k(V, "P", {});
        var te = y(O);
        (B = P(te, "Share this link for others to join:")),
          te.forEach(c),
          (Q = E(V)),
          (C = k(V, "INPUT", { type: !0, class: !0 })),
          (z = E(V)),
          Z(T.$$.fragment, V),
          V.forEach(c),
          (F = E(D)),
          (j = k(D, "DIV", { class: !0 }));
        var M = y(j);
        q = k(M, "P", {});
        var le = y(q);
        (J = P(le, "Or start playing:")),
          le.forEach(c),
          (K = E(M)),
          (N = k(M, "A", { class: !0, style: !0, href: !0 }));
        var se = y(N);
        (W = P(se, "Play now")),
          se.forEach(c),
          M.forEach(c),
          D.forEach(c),
          this.h();
      },
      h() {
        $(t, "class", "pin svelte-1tb2i87"),
          $(f, "class", "short svelte-1tb2i87"),
          $(C, "type", "text"),
          $(C, "class", "link-input svelte-1tb2i87"),
          (C.value = U = "" + (o[3] + "/play/" + o[1])),
          $(v, "class", "left flow svelte-1tb2i87"),
          $(N, "class", "button"),
          ye(N, "display", "block"),
          $(N, "href", (G = "/play/" + o[1])),
          $(j, "class", "right svelte-1tb2i87"),
          $(a, "class", "flex svelte-1tb2i87");
      },
      m(r, d) {
        b(r, e, d),
          m(e, s),
          b(r, l, d),
          b(r, t, d),
          m(t, i),
          b(r, n, d),
          x(_, r, d),
          b(r, p, d),
          b(r, f, d),
          b(r, u, d),
          b(r, a, d),
          m(a, v),
          m(v, O),
          m(O, B),
          m(v, Q),
          m(v, C),
          m(v, z),
          x(T, v, null),
          m(a, F),
          m(a, j),
          m(j, q),
          m(q, J),
          m(j, K),
          m(j, N),
          m(N, W),
          (S = !0);
      },
      p(r, d) {
        (!S || d & 2) && R(i, r[1]);
        const A = {};
        d & 2 && (A.value = r[1]),
          _.$set(A),
          (!S ||
            (d & 10 &&
              U !== (U = "" + (r[3] + "/play/" + r[1])) &&
              C.value !== U)) &&
            (C.value = U);
        const D = {};
        d & 10 && (D.value = "" + (r[3] + "/play/" + r[1])),
          T.$set(D),
          (!S || (d & 2 && G !== (G = "/play/" + r[1]))) && $(N, "href", G);
      },
      i(r) {
        S || (H(_.$$.fragment, r), H(T.$$.fragment, r), (S = !0));
      },
      o(r) {
        L(_.$$.fragment, r), L(T.$$.fragment, r), (S = !1);
      },
      d(r) {
        r && c(e),
          r && c(l),
          r && c(t),
          r && c(n),
          ee(_, r),
          r && c(p),
          r && c(f),
          r && c(u),
          r && c(a),
          ee(T);
      },
    }
  );
}
function Ce(o) {
  let e, s;
  return {
    c() {
      (e = h("p")), (s = I("Loading..."));
    },
    l(l) {
      e = k(l, "P", {});
      var t = y(e);
      (s = P(t, "Loading...")), t.forEach(c);
    },
    m(l, t) {
      b(l, e, t), m(e, s);
    },
    p: g,
    i: g,
    o: g,
    d(l) {
      l && c(e);
    },
  };
}
function ce(o) {
  let e, s, l, t;
  return {
    c() {
      (e = h("p")),
        (s = I("or ")),
        (l = h("a")),
        (t = I("join with a different PIN")),
        this.h();
    },
    l(i) {
      e = k(i, "P", {});
      var n = y(e);
      (s = P(n, "or ")), (l = k(n, "A", { href: !0 }));
      var _ = y(l);
      (t = P(_, "join with a different PIN")),
        _.forEach(c),
        n.forEach(c),
        this.h();
    },
    h() {
      $(l, "href", "/join");
    },
    m(i, n) {
      b(i, e, n), m(e, s), m(e, l), m(l, t);
    },
    d(i) {
      i && c(e);
    },
  };
}
function Te(o) {
  let e,
    s,
    l,
    t,
    i,
    n,
    _,
    p = o[0] && fe(),
    f = o[2] && ue(o),
    u = o[0] && ce();
  return {
    c() {
      p && p.c(),
        (e = w()),
        (s = h("h1")),
        (l = I("Start a new Game")),
        (t = w()),
        f && f.c(),
        (i = w()),
        u && u.c(),
        (n = Y());
    },
    l(a) {
      p && p.l(a), (e = E(a)), (s = k(a, "H1", {}));
      var v = y(s);
      (l = P(v, "Start a new Game")),
        v.forEach(c),
        (t = E(a)),
        f && f.l(a),
        (i = E(a)),
        u && u.l(a),
        (n = Y());
    },
    m(a, v) {
      p && p.m(a, v),
        b(a, e, v),
        b(a, s, v),
        m(s, l),
        b(a, t, v),
        f && f.m(a, v),
        b(a, i, v),
        u && u.m(a, v),
        b(a, n, v),
        (_ = !0);
    },
    p(a, v) {
      a[0]
        ? p || ((p = fe()), p.c(), p.m(e.parentNode, e))
        : p && (p.d(1), (p = null)),
        a[2]
          ? f
            ? (f.p(a, v), v & 4 && H(f, 1))
            : ((f = ue(a)), f.c(), H(f, 1), f.m(i.parentNode, i))
          : f &&
            (he(),
            L(f, 1, 1, () => {
              f = null;
            }),
            ke()),
        a[0]
          ? u || ((u = ce()), u.c(), u.m(n.parentNode, n))
          : u && (u.d(1), (u = null));
    },
    i(a) {
      _ || (H(f), (_ = !0));
    },
    o(a) {
      L(f), (_ = !1);
    },
    d(a) {
      p && p.d(a),
        a && c(e),
        a && c(s),
        a && c(t),
        f && f.d(a),
        a && c(i),
        u && u.d(a),
        a && c(n);
    },
  };
}
function je(o) {
  let e, s;
  return (
    (e = new Ie({
      props: {
        align: "center",
        $$slots: { default: [Te] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        X(e.$$.fragment);
      },
      l(l) {
        Z(e.$$.fragment, l);
      },
      m(l, t) {
        x(e, l, t), (s = !0);
      },
      p(l, [t]) {
        const i = {};
        t & 527 && (i.$$scope = { dirty: t, ctx: l }), e.$set(i);
      },
      i(l) {
        s || (H(e.$$.fragment, l), (s = !0));
      },
      o(l) {
        L(e.$$.fragment, l), (s = !1);
      },
      d(l) {
        ee(e, l);
      },
    }
  );
}
const Ve = !0;
function Se(o, e, s) {
  let l,
    { page: t } = we();
  me(o, t, (a) => s(7, (l = a)));
  let i = !1,
    n = null,
    _ = null,
    p,
    f = async () => {
      try {
        (_ = await $e.post("/api/createGame")), s(1, (n = _.data[0].code));
      } catch (a) {
        console.error(a);
      }
    };
  l.query && (i = l.query.get("invalidpin") != null);
  let u = "";
  return (
    (u = document.location.origin),
    de(() => {
      s(2, (p = f()));
    }),
    [i, n, p, u, t]
  );
}
class Le extends ae {
  constructor(e) {
    super();
    ie(this, e, Se, je, oe, {});
  }
}
export { Le as default, Ve as prerender };
