import{S as x,i as z,s as D,j as G,m as K,o as L,x as R,u as V,v as W,A as Q,e as y,t as N,c as $,a as g,g as I,d as f,f as b,H as m,k as j,n as H,b as v,M as Z,V as X,N as q,W as ee,X as te,U as oe,Y as re}from"../chunks/vendor-437948e4.js";import{H as ae}from"../chunks/HeroLayout-753e706e.js";import{N as ne}from"../chunks/NotSupported-1f4edb56.js";import{r as se}from"../chunks/singletons-12a22614.js";const le=se,ue=ie;async function ie(l,t){return le.goto(l,t,[])}function Y(l){let t,a;return{c(){t=y("p"),a=N("Sorry, this PIN is not valid.")},l(o){t=$(o,"P",{});var r=g(t);a=I(r,"Sorry, this PIN is not valid."),r.forEach(f)},m(o,r){b(o,t,r),m(t,a)},d(o){o&&f(t)}}}function fe(l){let t,a,o,r,u,c,n,P,d,E,h,p,_,O,J,M,k,T,w,U,A;r=new ne({});let s=l[2]===!1&&Y();return{c(){t=y("h1"),a=N("Join a Game"),o=j(),G(r.$$.fragment),u=j(),c=y("form"),n=y("input"),P=j(),d=y("button"),E=N("OK"),h=j(),s&&s.c(),p=j(),_=y("p"),O=N("If you don't have a game PIN yet,"),J=y("br"),M=N(`go ahead and
    `),k=y("a"),T=N("create one!"),this.h()},l(e){t=$(e,"H1",{});var i=g(t);a=I(i,"Join a Game"),i.forEach(f),o=H(e),K(r.$$.fragment,e),u=H(e),c=$(e,"FORM",{});var C=g(c);n=$(C,"INPUT",{type:!0,autocomplete:!0,autocorrect:!0,placeholder:!0}),P=H(C),d=$(C,"BUTTON",{type:!0,class:!0});var B=g(d);E=I(B,"OK"),B.forEach(f),C.forEach(f),h=H(e),s&&s.l(e),p=H(e),_=$(e,"P",{style:!0});var S=g(_);O=I(S,"If you don't have a game PIN yet,"),J=$(S,"BR",{}),M=I(S,`go ahead and
    `),k=$(S,"A",{href:!0});var F=g(k);T=I(F,"create one!"),F.forEach(f),S.forEach(f),this.h()},h(){v(n,"type","text"),v(n,"autocomplete","off"),v(n,"autocorrect","off"),n.required=!0,v(n,"placeholder","123456"),v(d,"type","submit"),v(d,"class","button"),v(k,"href","/create"),Z(_,"margin-top","3rem")},m(e,i){b(e,t,i),m(t,a),b(e,o,i),L(r,e,i),b(e,u,i),b(e,c,i),m(c,n),X(n,l[0]),l[6](n),m(c,P),m(c,d),m(d,E),b(e,h,i),s&&s.m(e,i),b(e,p,i),b(e,_,i),m(_,O),m(_,J),m(_,M),m(_,k),m(k,T),w=!0,U||(A=[q(n,"keydown",l[4]),q(n,"input",l[5]),q(c,"submit",ee(l[3]))],U=!0)},p(e,i){i&1&&n.value!==e[0]&&X(n,e[0]),e[2]===!1?s||(s=Y(),s.c(),s.m(p.parentNode,p)):s&&(s.d(1),s=null)},i(e){w||(R(r.$$.fragment,e),w=!0)},o(e){V(r.$$.fragment,e),w=!1},d(e){e&&f(t),e&&f(o),W(r,e),e&&f(u),e&&f(c),l[6](null),e&&f(h),s&&s.d(e),e&&f(p),e&&f(_),U=!1,te(A)}}}function pe(l){let t,a;return t=new ae({props:{align:"center",$$slots:{default:[fe]},$$scope:{ctx:l}}}),{c(){G(t.$$.fragment)},l(o){K(t.$$.fragment,o)},m(o,r){L(t,o,r),a=!0},p(o,[r]){const u={};r&263&&(u.$$scope={dirty:r,ctx:o}),t.$set(u)},i(o){a||(R(t.$$.fragment,o),a=!0)},o(o){V(t.$$.fragment,o),a=!1},d(o){W(t,o)}}}const ye=!0;function ce(l,t,a){let o="",r=null,u=null,c=()=>{a(2,u=P(o))},n=()=>{a(2,u=!0)},P=async h=>{try{loading=!0,a(2,u=null);const p=await oe.post("/api/checkCode",{pin:h});a(2,u=p.data.success),u&&p.data.pin&&ue(`play/${p.data.pin}`),loading=!1}catch(p){console.error(p)}};Q(()=>{r.focus()});function d(){o=this.value,a(0,o)}function E(h){re[h?"unshift":"push"](()=>{r=h,a(1,r)})}return[o,r,u,c,n,d,E]}class $e extends x{constructor(t){super();z(this,t,ce,pe,D,{})}}export{$e as default,ye as prerender};
