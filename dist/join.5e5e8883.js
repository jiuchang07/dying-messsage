// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fDCsn":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "646723a15e5e8883";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aet5z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "start", ()=>Gt);
var _vendor437948E4Js = require("./chunks/vendor-437948e4.js");
var _preloadHelperEc9Aa979Js = require("./chunks/preload-helper-ec9aa979.js");
var _singletons12A22614Js = require("./chunks/singletons-12a22614.js");
var nt = Object.defineProperty, at = Object.defineProperties;
var ot = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty, Y = Object.prototype.propertyIsEnumerable;
var X = (r, t, e)=>t in r ? nt(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e, E = (r, t)=>{
    for(var e in t || (t = {}))W.call(t, e) && X(r, e, t[e]);
    if (C) for (var e of C(t))Y.call(t, e) && X(r, e, t[e]);
    return r;
}, F = (r, t)=>at(r, ot(t));
var H = (r, t)=>{
    var e = {};
    for(var s in r)W.call(r, s) && t.indexOf(s) < 0 && (e[s] = r[s]);
    if (r != null && C) for (var s of C(r))t.indexOf(s) < 0 && Y.call(r, s) && (e[s] = r[s]);
    return e;
};
function Q(r) {
    let t, e, s;
    const i = [
        r[2] || {}
    ];
    var a = r[0][1];
    function n(o) {
        let l = {
            $$slots: {
                default: [
                    kt
                ]
            },
            $$scope: {
                ctx: o
            }
        };
        for(let c = 0; c < i.length; c += 1)l = (0, _vendor437948E4Js.B)(l, i[c]);
        return {
            props: l
        };
    }
    return a && (t = new a(n(r))), {
        c () {
            t && (0, _vendor437948E4Js.j)(t.$$.fragment), e = (0, _vendor437948E4Js.l)();
        },
        l (o) {
            t && (0, _vendor437948E4Js.m)(t.$$.fragment, o), e = (0, _vendor437948E4Js.l)();
        },
        m (o, l) {
            t && (0, _vendor437948E4Js.o)(t, o, l), (0, _vendor437948E4Js.f)(o, e, l), s = !0;
        },
        p (o, l) {
            const c = l & 4 ? (0, _vendor437948E4Js.p)(i, [
                (0, _vendor437948E4Js.q)(o[2] || {})
            ]) : {};
            if (l & 521 && (c.$$scope = {
                dirty: l,
                ctx: o
            }), a !== (a = o[0][1])) {
                if (t) {
                    (0, _vendor437948E4Js.r)();
                    const u = t;
                    (0, _vendor437948E4Js.u)(u.$$.fragment, 1, 0, ()=>{
                        (0, _vendor437948E4Js.v)(u, 1);
                    }), (0, _vendor437948E4Js.w)();
                }
                a ? (t = new a(n(o)), (0, _vendor437948E4Js.j)(t.$$.fragment), (0, _vendor437948E4Js.x)(t.$$.fragment, 1), (0, _vendor437948E4Js.o)(t, e.parentNode, e)) : t = null;
            } else a && t.$set(c);
        },
        i (o) {
            s || (t && (0, _vendor437948E4Js.x)(t.$$.fragment, o), s = !0);
        },
        o (o) {
            t && (0, _vendor437948E4Js.u)(t.$$.fragment, o), s = !1;
        },
        d (o) {
            o && (0, _vendor437948E4Js.d)(e), t && (0, _vendor437948E4Js.v)(t, o);
        }
    };
}
function Z(r) {
    let t, e, s;
    const i = [
        r[3] || {}
    ];
    var a = r[0][2];
    function n(o) {
        let l = {};
        for(let c = 0; c < i.length; c += 1)l = (0, _vendor437948E4Js.B)(l, i[c]);
        return {
            props: l
        };
    }
    return a && (t = new a(n())), {
        c () {
            t && (0, _vendor437948E4Js.j)(t.$$.fragment), e = (0, _vendor437948E4Js.l)();
        },
        l (o) {
            t && (0, _vendor437948E4Js.m)(t.$$.fragment, o), e = (0, _vendor437948E4Js.l)();
        },
        m (o, l) {
            t && (0, _vendor437948E4Js.o)(t, o, l), (0, _vendor437948E4Js.f)(o, e, l), s = !0;
        },
        p (o, l) {
            const c = l & 8 ? (0, _vendor437948E4Js.p)(i, [
                (0, _vendor437948E4Js.q)(o[3] || {})
            ]) : {};
            if (a !== (a = o[0][2])) {
                if (t) {
                    (0, _vendor437948E4Js.r)();
                    const u = t;
                    (0, _vendor437948E4Js.u)(u.$$.fragment, 1, 0, ()=>{
                        (0, _vendor437948E4Js.v)(u, 1);
                    }), (0, _vendor437948E4Js.w)();
                }
                a ? (t = new a(n()), (0, _vendor437948E4Js.j)(t.$$.fragment), (0, _vendor437948E4Js.x)(t.$$.fragment, 1), (0, _vendor437948E4Js.o)(t, e.parentNode, e)) : t = null;
            } else a && t.$set(c);
        },
        i (o) {
            s || (t && (0, _vendor437948E4Js.x)(t.$$.fragment, o), s = !0);
        },
        o (o) {
            t && (0, _vendor437948E4Js.u)(t.$$.fragment, o), s = !1;
        },
        d (o) {
            o && (0, _vendor437948E4Js.d)(e), t && (0, _vendor437948E4Js.v)(t, o);
        }
    };
}
function kt(r) {
    let t, e, s = r[0][2] && Z(r);
    return {
        c () {
            s && s.c(), t = (0, _vendor437948E4Js.l)();
        },
        l (i) {
            s && s.l(i), t = (0, _vendor437948E4Js.l)();
        },
        m (i, a) {
            s && s.m(i, a), (0, _vendor437948E4Js.f)(i, t, a), e = !0;
        },
        p (i, a) {
            i[0][2] ? s ? (s.p(i, a), a & 1 && (0, _vendor437948E4Js.x)(s, 1)) : (s = Z(i), s.c(), (0, _vendor437948E4Js.x)(s, 1), s.m(t.parentNode, t)) : s && ((0, _vendor437948E4Js.r)(), (0, _vendor437948E4Js.u)(s, 1, 1, ()=>{
                s = null;
            }), (0, _vendor437948E4Js.w)());
        },
        i (i) {
            e || ((0, _vendor437948E4Js.x)(s), e = !0);
        },
        o (i) {
            (0, _vendor437948E4Js.u)(s), e = !1;
        },
        d (i) {
            s && s.d(i), i && (0, _vendor437948E4Js.d)(t);
        }
    };
}
function Rt(r) {
    let t, e, s = r[0][1] && Q(r);
    return {
        c () {
            s && s.c(), t = (0, _vendor437948E4Js.l)();
        },
        l (i) {
            s && s.l(i), t = (0, _vendor437948E4Js.l)();
        },
        m (i, a) {
            s && s.m(i, a), (0, _vendor437948E4Js.f)(i, t, a), e = !0;
        },
        p (i, a) {
            i[0][1] ? s ? (s.p(i, a), a & 1 && (0, _vendor437948E4Js.x)(s, 1)) : (s = Q(i), s.c(), (0, _vendor437948E4Js.x)(s, 1), s.m(t.parentNode, t)) : s && ((0, _vendor437948E4Js.r)(), (0, _vendor437948E4Js.u)(s, 1, 1, ()=>{
                s = null;
            }), (0, _vendor437948E4Js.w)());
        },
        i (i) {
            e || ((0, _vendor437948E4Js.x)(s), e = !0);
        },
        o (i) {
            (0, _vendor437948E4Js.u)(s), e = !1;
        },
        d (i) {
            s && s.d(i), i && (0, _vendor437948E4Js.d)(t);
        }
    };
}
function x(r) {
    let t, e = r[5] && tt(r);
    return {
        c () {
            t = (0, _vendor437948E4Js.e)("div"), e && e.c(), this.h();
        },
        l (s) {
            t = (0, _vendor437948E4Js.c)(s, "DIV", {
                id: !0,
                "aria-live": !0,
                "aria-atomic": !0,
                class: !0
            });
            var i = (0, _vendor437948E4Js.a)(t);
            e && e.l(i), i.forEach((0, _vendor437948E4Js.d)), this.h();
        },
        h () {
            (0, _vendor437948E4Js.b)(t, "id", "svelte-announcer"), (0, _vendor437948E4Js.b)(t, "aria-live", "assertive"), (0, _vendor437948E4Js.b)(t, "aria-atomic", "true"), (0, _vendor437948E4Js.b)(t, "class", "svelte-1j55zn5");
        },
        m (s, i) {
            (0, _vendor437948E4Js.f)(s, t, i), e && e.m(t, null);
        },
        p (s, i) {
            s[5] ? e ? e.p(s, i) : (e = tt(s), e.c(), e.m(t, null)) : e && (e.d(1), e = null);
        },
        d (s) {
            s && (0, _vendor437948E4Js.d)(t), e && e.d();
        }
    };
}
function tt(r) {
    let t;
    return {
        c () {
            t = (0, _vendor437948E4Js.t)(r[6]);
        },
        l (e) {
            t = (0, _vendor437948E4Js.g)(e, r[6]);
        },
        m (e, s) {
            (0, _vendor437948E4Js.f)(e, t, s);
        },
        p (e, s) {
            s & 64 && (0, _vendor437948E4Js.h)(t, e[6]);
        },
        d (e) {
            e && (0, _vendor437948E4Js.d)(t);
        }
    };
}
function $t(r) {
    let t, e, s, i;
    const a = [
        r[1] || {}
    ];
    var n = r[0][0];
    function o(c) {
        let u = {
            $$slots: {
                default: [
                    Rt
                ]
            },
            $$scope: {
                ctx: c
            }
        };
        for(let f = 0; f < a.length; f += 1)u = (0, _vendor437948E4Js.B)(u, a[f]);
        return {
            props: u
        };
    }
    n && (t = new n(o(r)));
    let l = r[4] && x(r);
    return {
        c () {
            t && (0, _vendor437948E4Js.j)(t.$$.fragment), e = (0, _vendor437948E4Js.k)(), l && l.c(), s = (0, _vendor437948E4Js.l)();
        },
        l (c) {
            t && (0, _vendor437948E4Js.m)(t.$$.fragment, c), e = (0, _vendor437948E4Js.n)(c), l && l.l(c), s = (0, _vendor437948E4Js.l)();
        },
        m (c, u) {
            t && (0, _vendor437948E4Js.o)(t, c, u), (0, _vendor437948E4Js.f)(c, e, u), l && l.m(c, u), (0, _vendor437948E4Js.f)(c, s, u), i = !0;
        },
        p (c, [u]) {
            const f = u & 2 ? (0, _vendor437948E4Js.p)(a, [
                (0, _vendor437948E4Js.q)(c[1] || {})
            ]) : {};
            if (u & 525 && (f.$$scope = {
                dirty: u,
                ctx: c
            }), n !== (n = c[0][0])) {
                if (t) {
                    (0, _vendor437948E4Js.r)();
                    const h = t;
                    (0, _vendor437948E4Js.u)(h.$$.fragment, 1, 0, ()=>{
                        (0, _vendor437948E4Js.v)(h, 1);
                    }), (0, _vendor437948E4Js.w)();
                }
                n ? (t = new n(o(c)), (0, _vendor437948E4Js.j)(t.$$.fragment), (0, _vendor437948E4Js.x)(t.$$.fragment, 1), (0, _vendor437948E4Js.o)(t, e.parentNode, e)) : t = null;
            } else n && t.$set(f);
            c[4] ? l ? l.p(c, u) : (l = x(c), l.c(), l.m(s.parentNode, s)) : l && (l.d(1), l = null);
        },
        i (c) {
            i || (t && (0, _vendor437948E4Js.x)(t.$$.fragment, c), i = !0);
        },
        o (c) {
            t && (0, _vendor437948E4Js.u)(t.$$.fragment, c), i = !1;
        },
        d (c) {
            t && (0, _vendor437948E4Js.v)(t, c), c && (0, _vendor437948E4Js.d)(e), l && l.d(c), c && (0, _vendor437948E4Js.d)(s);
        }
    };
}
function Lt(r, t, e) {
    let { stores: s  } = t, { page: i  } = t, { components: a  } = t, { props_0: n = null  } = t, { props_1: o = null  } = t, { props_2: l = null  } = t;
    (0, _vendor437948E4Js.y)("__svelte__", s), (0, _vendor437948E4Js.z)(s.page.notify);
    let c = !1, u = !1, f = null;
    return (0, _vendor437948E4Js.A)(()=>{
        const h = s.page.subscribe(()=>{
            c && (e(5, u = !0), e(6, f = document.title || "untitled page"));
        });
        return e(4, c = !0), h;
    }), r.$$set = (h)=>{
        "stores" in h && e(7, s = h.stores), "page" in h && e(8, i = h.page), "components" in h && e(0, a = h.components), "props_0" in h && e(1, n = h.props_0), "props_1" in h && e(2, o = h.props_1), "props_2" in h && e(3, l = h.props_2);
    }, r.$$.update = ()=>{
        r.$$.dirty & 384 && s.page.set(i);
    }, [
        a,
        n,
        o,
        l,
        c,
        u,
        f,
        s,
        i
    ];
}
class St extends (0, _vendor437948E4Js.S) {
    constructor(t){
        super();
        (0, _vendor437948E4Js.i)(this, t, Lt, $t, (0, _vendor437948E4Js.s), {
            stores: 7,
            page: 8,
            components: 0,
            props_0: 1,
            props_1: 2,
            props_2: 3
        });
    }
}
const _ = [
    ()=>(0, _preloadHelperEc9Aa979Js._)(()=>require("5124fb0306ef3777"), [
            "pages/__layout.svelte-74dc8aaa.js",
            "assets/pages/__layout.svelte-c8d5603a.css",
            "chunks/vendor-437948e4.js"
        ]),
    ()=>(0, _preloadHelperEc9Aa979Js._)(()=>require("46f3073790d47f2"), [
            "error.svelte-08cedea3.js",
            "chunks/vendor-437948e4.js"
        ]),
    ()=>(0, _preloadHelperEc9Aa979Js._)(()=>require("5d16afb07a822e57"), [
            "pages/index.svelte-e88ed098.js",
            "assets/pages/index.svelte-c372ac19.css",
            "chunks/vendor-437948e4.js",
            "chunks/HeroLayout-753e706e.js",
            "assets/HeroLayout-1dd73454.css",
            "chunks/NotSupported-1f4edb56.js",
            "assets/NotSupported-29f84da2.css"
        ]),
    // () =>
    //   $(
    //     () => import("./pages/create.svelte-8500cf00.js"),
    //     [
    //       "pages/create.svelte-8500cf00.js",
    //       "assets/pages/create.svelte-efd9609b.css",
    //       "chunks/vendor-437948e4.js",
    //       "chunks/HeroLayout-753e706e.js",
    //       "assets/HeroLayout-1dd73454.css",
    //     ]
    //   ),
    // () =>
    //   $(
    //     () => import("./pages/legal.svelte-d1220ee5.js"),
    //     [
    //       "pages/legal.svelte-d1220ee5.js",
    //       "chunks/vendor-437948e4.js",
    //       "chunks/HeroLayout-753e706e.js",
    //       "assets/HeroLayout-1dd73454.css",
    //     ]
    //   ),
    ()=>(0, _preloadHelperEc9Aa979Js._)(()=>require("bccf57e1b3e1c83a"), [
            "pages/join.svelte-c7b1e652.js",
            "chunks/vendor-437948e4.js",
            "chunks/HeroLayout-753e706e.js",
            "assets/HeroLayout-1dd73454.css",
            "chunks/NotSupported-1f4edb56.js",
            "assets/NotSupported-29f84da2.css",
            "chunks/singletons-12a22614.js"
        ])
], qt = decodeURIComponent, Ut = [
    [
        /^\/$/,
        [
            _[0],
            _[2]
        ],
        [
            _[1]
        ]
    ],
    [
        /^\/create\/?$/,
        [
            _[0],
            _[3]
        ],
        [
            _[1]
        ]
    ],
    [
        /^\/legal\/?$/,
        [
            _[0],
            _[4]
        ],
        [
            _[1]
        ]
    ],
    [
        /^\/join\/?$/,
        [
            _[0],
            _[5]
        ],
        [
            _[1]
        ]
    ],
    [
        /^\/play\/([^/]+?)\/?$/,
        [
            _[0],
            _[6]
        ],
        [
            _[1]
        ],
        (r)=>({
                code: qt(r[1])
            })
    ],
    [
        /^\/api\/createGame\/?$/
    ],
    [
        /^\/api\/checkCode\/?$/
    ]
], jt = [
    _[0](),
    _[1]()
];
function At(r) {
    let t = r.baseURI;
    if (!t) {
        const e = r.getElementsByTagName("base");
        t = e.length ? e[0].href : r.URL;
    }
    return t;
}
let et = "";
function Tt(r) {
    et = r.base, r.assets;
}
function M() {
    return {
        x: pageXOffset,
        y: pageYOffset
    };
}
function st(r) {
    for(; r && r.nodeName.toUpperCase() !== "A";)r = r.parentNode;
    return r;
}
function rt(r) {
    return r instanceof SVGAElement ? new URL(r.href.baseVal, document.baseURI) : new URL(r.href);
}
class It {
    constructor({ base: t , routes: e , trailing_slash: s , renderer: i  }){
        this.base = t, this.routes = e, this.trailing_slash = s, this.renderer = i, i.router = this, this.enabled = !0, document.body.setAttribute("tabindex", "-1"), history.replaceState(history.state || {}, "", location.href);
    }
    init_listeners() {
        "scrollRestoration" in history && (history.scrollRestoration = "manual"), addEventListener("beforeunload", ()=>{
            history.scrollRestoration = "auto";
        }), addEventListener("load", ()=>{
            history.scrollRestoration = "manual";
        });
        let t;
        addEventListener("scroll", ()=>{
            clearTimeout(t), t = setTimeout(()=>{
                const a = F(E({}, history.state || {}), {
                    "sveltekit:scroll": M()
                });
                history.replaceState(a, document.title, window.location.href);
            }, 50);
        });
        const e = (a)=>{
            const n = st(a.target);
            n && n.href && n.hasAttribute("sveltekit:prefetch") && this.prefetch(rt(n));
        };
        let s;
        const i = (a)=>{
            clearTimeout(s), s = setTimeout(()=>{
                e(a);
            }, 20);
        };
        addEventListener("touchstart", e), addEventListener("mousemove", i), addEventListener("click", (a)=>{
            if (!this.enabled || a.button || a.which !== 1 || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey || a.defaultPrevented) return;
            const n = st(a.target);
            if (!n || !n.href) return;
            const o = rt(n);
            if (o.toString() === location.href) {
                location.hash || a.preventDefault();
                return;
            }
            const l = (n.getAttribute("rel") || "").split(/\s+/);
            if (n.hasAttribute("download") || l && l.includes("external") || (n instanceof SVGAElement ? n.target.baseVal : n.target) || !this.owns(o)) return;
            const c = n.hasAttribute("sveltekit:noscroll");
            history.pushState({}, "", o.href), this._navigate(o, c ? M() : null, !1, [], o.hash), a.preventDefault();
        }), addEventListener("popstate", (a)=>{
            if (a.state && this.enabled) {
                const n = new URL(location.href);
                this._navigate(n, a.state["sveltekit:scroll"], !1, []);
            }
        });
    }
    owns(t) {
        return t.origin === location.origin && t.pathname.startsWith(this.base);
    }
    parse(t) {
        if (this.owns(t)) {
            const e = t.pathname.slice(this.base.length) || "/", s = decodeURI(e), i = this.routes.filter(([o])=>o.test(s)), a = new URLSearchParams(t.search);
            return {
                id: `${e}?${a}`,
                routes: i,
                path: e,
                decoded_path: s,
                query: a
            };
        }
    }
    async goto(t, { noscroll: e = !1 , replaceState: s = !1 , keepfocus: i = !1 , state: a = {}  } = {}, n) {
        const o = new URL(t, At(document));
        return this.enabled && this.owns(o) ? (history[s ? "replaceState" : "pushState"](a, "", t), this._navigate(o, e ? M() : null, i, n, o.hash)) : (location.href = o.href, new Promise(()=>{}));
    }
    enable() {
        this.enabled = !0;
    }
    disable() {
        this.enabled = !1;
    }
    async prefetch(t) {
        const e = this.parse(t);
        if (!e) throw new Error("Attempted to prefetch a URL that does not belong to this app");
        return this.renderer.load(e);
    }
    async _navigate(t, e, s, i, a) {
        const n = this.parse(t);
        if (!n) throw new Error("Attempted to navigate to a URL that does not belong to this app");
        if (n.path !== "/") {
            const o = n.path.endsWith("/");
            (o && this.trailing_slash === "never" || !o && this.trailing_slash === "always" && !(n.path.split("/").pop() || "").includes(".")) && (n.path = o ? n.path.slice(0, -1) : n.path + "/", history.replaceState({}, "", `${this.base}${n.path}${location.search}`));
        }
        this.renderer.notify({
            path: n.path,
            query: n.query
        }), await this.renderer.update(n, i, !1, {
            hash: a,
            scroll: e,
            keepfocus: s
        });
    }
}
function it(r) {
    return r instanceof Error || r && r.name && r.message ? r : new Error(JSON.stringify(r));
}
function Pt(r) {
    let t = 5381, e = r.length;
    if (typeof r == "string") for(; e;)t = t * 33 ^ r.charCodeAt(--e);
    else for(; e;)t = t * 33 ^ r[--e];
    return (t >>> 0).toString(36);
}
function Ot(r) {
    const t = r.status && r.status >= 400 && r.status <= 599 && !r.redirect;
    if (r.error || t) {
        const e = r.status;
        if (!r.error && t) return {
            status: e || 500,
            error: new Error()
        };
        const s = typeof r.error == "string" ? new Error(r.error) : r.error;
        return s instanceof Error ? !e || e < 400 || e > 599 ? (console.warn('"error" returned from load() without a valid status code — defaulting to 500'), {
            status: 500,
            error: s
        }) : {
            status: e,
            error: s
        } : {
            status: 500,
            error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)
        };
    }
    if (r.redirect) {
        if (!r.status || Math.floor(r.status / 100) !== 3) return {
            status: 500,
            error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
        };
        if (typeof r.redirect != "string") return {
            status: 500,
            error: new Error('"redirect" property returned from load() must be a string')
        };
    }
    if (r.context) throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
    return r;
}
function Vt(r) {
    const t = (0, _vendor437948E4Js.C)(r);
    let e = !0;
    function s() {
        e = !0, t.update((n)=>n);
    }
    function i(n) {
        e = !1, t.set(n);
    }
    function a(n) {
        let o;
        return t.subscribe((l)=>{
            (o === void 0 || e && l !== o) && n(o = l);
        });
    }
    return {
        notify: s,
        set: i,
        subscribe: a
    };
}
function Ct(r, t) {
    let s = `script[data-type="svelte-data"][data-url="${typeof r == "string" ? r : r.url}"]`;
    t && typeof t.body == "string" && (s += `[data-body="${Pt(t.body)}"]`);
    const i = document.querySelector(s);
    if (i && i.textContent) {
        const a = JSON.parse(i.textContent), { body: n  } = a, o = H(a, [
            "body"
        ]);
        return Promise.resolve(new Response(n, o));
    }
    return fetch(r, t);
}
class Nt {
    constructor({ Root: t , fallback: e , target: s , session: i , host: a  }){
        this.Root = t, this.fallback = e, this.host = a, this.router, this.target = s, this.started = !1, this.session_id = 1, this.invalid = new Set(), this.invalidating = null, this.current = {
            page: null,
            session_id: 0,
            branch: []
        }, this.cache = new Map(), this.loading = {
            id: null,
            promise: null
        }, this.stores = {
            page: Vt({}),
            navigating: (0, _vendor437948E4Js.C)(null),
            session: (0, _vendor437948E4Js.C)(i)
        }, this.$session = null, this.root = null;
        let n = !1;
        this.stores.session.subscribe(async (o)=>{
            if (this.$session = o, !n || !this.router) return;
            this.session_id += 1;
            const l = this.router.parse(new URL(location.href));
            l && this.update(l, [], !0);
        }), n = !0;
    }
    async start({ status: t , error: e , nodes: s , page: i  }) {
        const a = [];
        let n = {}, o, l;
        try {
            for(let c = 0; c < s.length; c += 1){
                const u = c === s.length - 1, f = await this._load_node({
                    module: await s[c],
                    page: i,
                    stuff: n,
                    status: u ? t : void 0,
                    error: u ? e : void 0
                });
                if (a.push(f), f && f.loaded) {
                    if (f.loaded.error) {
                        if (e) throw f.loaded.error;
                        l = {
                            status: f.loaded.status,
                            error: f.loaded.error,
                            path: i.path,
                            query: i.query
                        };
                    } else f.loaded.stuff && (n = E(E({}, n), f.loaded.stuff));
                }
            }
            o = l ? await this._load_error(l) : await this._get_navigation_result_from_branch({
                page: i,
                branch: a
            });
        } catch (c) {
            if (e) throw c;
            o = await this._load_error({
                status: 500,
                error: it(c),
                path: i.path,
                query: i.query
            });
        }
        if (o.redirect) {
            location.href = new URL(o.redirect, location.href).href;
            return;
        }
        this._init(o);
    }
    notify({ path: t , query: e  }) {
        dispatchEvent(new CustomEvent("sveltekit:navigation-start")), this.started && this.stores.navigating.set({
            from: {
                path: this.current.page.path,
                query: this.current.page.query
            },
            to: {
                path: t,
                query: e
            }
        });
    }
    async update(t, e, s, i) {
        const a = this.token = {};
        let n = await this._get_navigation_result(t, s);
        if (a !== this.token) return;
        if (this.invalid.clear(), n.redirect) {
            if (e.length > 10 || e.includes(t.path)) n = await this._load_error({
                status: 500,
                error: new Error("Redirect loop"),
                path: t.path,
                query: t.query
            });
            else {
                this.router ? this.router.goto(n.redirect, {
                    replaceState: !0
                }, [
                    ...e,
                    t.path
                ]) : location.href = new URL(n.redirect, location.href).href;
                return;
            }
        }
        if (n.reload ? location.reload() : this.started ? (this.current = n.state, this.root.$set(n.props), this.stores.navigating.set(null)) : this._init(n), i) {
            const { hash: l , scroll: c , keepfocus: u  } = i;
            u || document.body.focus();
            const f = l && document.getElementById(l.slice(1));
            c ? scrollTo(c.x, c.y) : f ? f.scrollIntoView() : scrollTo(0, 0);
        }
        if (await 0, dispatchEvent(new CustomEvent("sveltekit:navigation-end")), this.loading.promise = null, this.loading.id = null, !this.router) return;
        const o = n.state.branch[n.state.branch.length - 1];
        o && o.module.router === !1 ? this.router.disable() : this.router.enable();
    }
    load(t) {
        return this.loading.promise = this._get_navigation_result(t, !1), this.loading.id = t.id, this.loading.promise;
    }
    invalidate(t) {
        return this.invalid.add(t), this.invalidating || (this.invalidating = Promise.resolve().then(function() {
            return require("bccf57e1b3e1c83a");
        }).then(async (res)=>{
            const e = this.router && this.router.parse(new URL(location.href));
            e && await this.update(e, [], !0), this.invalidating = null;
        })), this.invalidating;
    }
    _init(t) {
        this.current = t.state;
        const e = document.querySelector("style[data-svelte]");
        e && e.remove(), this.root = new this.Root({
            target: this.target,
            props: E({
                stores: this.stores
            }, t.props),
            hydrate: !0
        }), this.started = !0;
    }
    async _get_navigation_result(t, e) {
        if (this.loading.id === t.id && this.loading.promise) return this.loading.promise;
        for(let s = 0; s < t.routes.length; s += 1){
            const i = t.routes[s];
            if (i.length === 1) return {
                reload: !0,
                props: {},
                state: this.current
            };
            let a = s + 1;
            for(; a < t.routes.length;){
                const o = t.routes[a];
                if (o[0].toString() === i[0].toString()) o.length !== 1 && o[1].forEach((l)=>l()), a += 1;
                else break;
            }
            const n = await this._load({
                route: i,
                info: t
            }, e);
            if (n) return n;
        }
        return await this._load_error({
            status: 404,
            error: new Error(`Not found: ${t.path}`),
            path: t.path,
            query: t.query
        });
    }
    async _get_navigation_result_from_branch({ page: t , branch: e  }) {
        const s = e.filter(Boolean), i = s.find((l)=>l.loaded && l.loaded.redirect), a = {
            redirect: i && i.loaded ? i.loaded.redirect : void 0,
            state: {
                page: t,
                branch: e,
                session_id: this.session_id
            },
            props: {
                components: s.map((l)=>l.module.default)
            }
        };
        for(let l = 0; l < s.length; l += 1){
            const c = s[l].loaded;
            a.props[`props_${l}`] = c ? await c.props : null;
        }
        (!this.current.page || t.path !== this.current.page.path || t.query.toString() !== this.current.page.query.toString()) && (a.props.page = t);
        const n = s[s.length - 1], o = n.loaded && n.loaded.maxage;
        if (o) {
            const l = `${t.path}?${t.query}`;
            let c = !1;
            const u = ()=>{
                this.cache.get(l) === a && this.cache.delete(l), h(), clearTimeout(f);
            }, f = setTimeout(u, o * 1e3), h = this.stores.session.subscribe(()=>{
                c && u();
            });
            c = !0, this.cache.set(l, a);
        }
        return a;
    }
    async _load_node({ status: t , error: e , module: s , page: i , stuff: a  }) {
        const n = {
            module: s,
            uses: {
                params: new Set(),
                path: !1,
                query: !1,
                session: !1,
                stuff: !1,
                dependencies: []
            },
            loaded: null,
            stuff: a
        }, o = {};
        for(const c in i.params)Object.defineProperty(o, c, {
            get () {
                return n.uses.params.add(c), i.params[c];
            },
            enumerable: !0
        });
        const l = this.$session;
        if (s.load) {
            const { started: c  } = this, u = {
                page: {
                    host: i.host,
                    params: o,
                    get path () {
                        return n.uses.path = !0, i.path;
                    },
                    get query () {
                        return n.uses.query = !0, i.query;
                    }
                },
                get session () {
                    return n.uses.session = !0, l;
                },
                get stuff () {
                    return n.uses.stuff = !0, E({}, a);
                },
                fetch (h, L) {
                    const R = typeof h == "string" ? h : h.url, { href: A  } = new URL(R, new URL(i.path, document.baseURI));
                    return n.uses.dependencies.push(A), c ? fetch(h, L) : Ct(h, L);
                }
            };
            e && (u.status = t, u.error = e);
            const f = await s.load.call(null, u);
            if (!f) return;
            n.loaded = Ot(f), n.loaded.stuff && (n.stuff = n.loaded.stuff);
        }
        return n;
    }
    async _load({ route: t , info: { path: e , decoded_path: s , query: i  }  }, a) {
        const n = `${s}?${i}`;
        if (!a) {
            const d = this.cache.get(n);
            if (d) return d;
        }
        const [o, l, c, u] = t, f = u ? u(o.exec(s)) : {}, h = this.current.page && {
            path: e !== this.current.page.path,
            params: Object.keys(f).filter((d)=>this.current.page.params[d] !== f[d]),
            query: i.toString() !== this.current.page.query.toString(),
            session: this.session_id !== this.current.session_id
        }, L = {
            host: this.host,
            path: e,
            query: i,
            params: f
        };
        let R = [], A = {}, J = !1, O = 200, T;
        l.forEach((d)=>d());
        t: for(let d = 0; d < l.length; d += 1){
            let p;
            try {
                if (!l[d]) continue;
                const w = await l[d](), m = this.current.branch[d];
                if (!m || w !== m.module || h.path && m.uses.path || h.params.some((S)=>m.uses.params.has(S)) || h.query && m.uses.query || h.session && m.uses.session || m.uses.dependencies.some((S)=>this.invalid.has(S)) || J && m.uses.stuff) {
                    p = await this._load_node({
                        module: w,
                        page: L,
                        stuff: A
                    });
                    const S = d === l.length - 1;
                    if (p && p.loaded) {
                        if (p.loaded.error && (O = p.loaded.status, T = p.loaded.error), p.loaded.redirect) return {
                            redirect: p.loaded.redirect,
                            props: {},
                            state: this.current
                        };
                        p.loaded.stuff && (J = !0);
                    } else if (S && w.load) return;
                } else p = m;
            } catch (w) {
                O = 500, T = it(w);
            }
            if (T) {
                for(; d--;)if (c[d]) {
                    let w, m, V = d;
                    for(; !(m = R[V]);)V -= 1;
                    try {
                        if (w = await this._load_node({
                            status: O,
                            error: T,
                            module: await c[d](),
                            page: L,
                            stuff: m.stuff
                        }), w && w.loaded && w.loaded.error) continue;
                        R = R.slice(0, V + 1).concat(w);
                        break t;
                    } catch (S) {
                        continue;
                    }
                }
                return await this._load_error({
                    status: O,
                    error: T,
                    path: e,
                    query: i
                });
            } else p && p.loaded && p.loaded.stuff && (A = E(E({}, A), p.loaded.stuff)), R.push(p);
        }
        return await this._get_navigation_result_from_branch({
            page: L,
            branch: R
        });
    }
    async _load_error({ status: t , error: e , path: s , query: i  }) {
        const a = {
            host: this.host,
            path: s,
            query: i,
            params: {}
        }, n = await this._load_node({
            module: await this.fallback[0],
            page: a,
            stuff: {}
        }), o = [
            n,
            await this._load_node({
                status: t,
                error: e,
                module: await this.fallback[1],
                page: a,
                stuff: n && n.loaded && n.loaded.stuff || {}
            })
        ];
        return await this._get_navigation_result_from_branch({
            page: a,
            branch: o
        });
    }
}
async function Gt({ paths: r , target: t , session: e , host: s , route: i , spa: a , trailing_slash: n , hydrate: o  }) {
    const l = new Nt({
        Root: St,
        fallback: jt,
        target: t,
        session: e,
        host: s
    }), c = i ? new It({
        base: r.base,
        routes: Ut,
        trailing_slash: n,
        renderer: l
    }) : null;
    (0, _singletons12A22614Js.i)(c), Tt(r), o && await l.start(o), c && (a && c.goto(location.href, {
        replaceState: !0
    }, []), c.init_listeners()), dispatchEvent(new CustomEvent("sveltekit:start"));
}

},{"./chunks/vendor-437948e4.js":"by6Re","./chunks/preload-helper-ec9aa979.js":"7xqHH","./chunks/singletons-12a22614.js":"86sAf","5124fb0306ef3777":"bYC3X","46f3073790d47f2":"7diyH","5d16afb07a822e57":"h0Bdy","bccf57e1b3e1c83a":"ftHw2","@parcel/transformer-js/src/esmodule-helpers.js":"8Nc3O"}],"7xqHH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", ()=>f);
const a = "modulepreload", i = {}, u = "/_app/", f = function(s, n) {
    return !n || n.length === 0 ? s() : Promise.all(n.map((e)=>{
        if (e = `${u}${e}`, e in i) return;
        i[e] = !0;
        const r = e.endsWith(".css"), o = r ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${e}"]${o}`)) return;
        const t = document.createElement("link");
        if (t.rel = r ? "stylesheet" : a, r || (t.as = "script", t.crossOrigin = ""), t.href = e, document.head.appendChild(t), r) return new Promise((c, l)=>{
            t.addEventListener("load", c), t.addEventListener("error", l);
        });
    })).then(()=>s());
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8Nc3O"}],"bYC3X":[function(require,module,exports) {
module.exports = Promise.all([
    require("a57e49a162ecbfad")(require("39f0c37fec951785").getBundleURL("8CrpR") + "__layout.svelte-74dc8aaa.1fab6184.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("a57e49a162ecbfad")(require("39f0c37fec951785").getBundleURL("8CrpR") + "__layout.svelte-74dc8aaa.da034aa6.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("8kl8A"));

},{"a57e49a162ecbfad":"22rRL","39f0c37fec951785":"1aQ9r"}],"22rRL":[function(require,module,exports) {
"use strict";
var cacheLoader = require("fcb96dfa23782c0d");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"fcb96dfa23782c0d":"6pQ7O"}],"6pQ7O":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"1aQ9r":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"7diyH":[function(require,module,exports) {
module.exports = Promise.all([
    require("d6ccf33330f488d9")(require("558147f0cbe31beb").getBundleURL("8CrpR") + "__layout.svelte-74dc8aaa.1fab6184.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("d6ccf33330f488d9")(require("558147f0cbe31beb").getBundleURL("8CrpR") + "error.svelte-08cedea3.248f77e1.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("dswEB"));

},{"d6ccf33330f488d9":"22rRL","558147f0cbe31beb":"1aQ9r"}],"h0Bdy":[function(require,module,exports) {
module.exports = Promise.all([
    require("49bd745cb33d4513")(require("65e1a0e529f5799c").getBundleURL("8CrpR") + "__layout.svelte-74dc8aaa.1fab6184.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("49bd745cb33d4513")(require("65e1a0e529f5799c").getBundleURL("8CrpR") + "index.svelte-e88ed098.5b41b1e2.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("ebvpM"));

},{"49bd745cb33d4513":"22rRL","65e1a0e529f5799c":"1aQ9r"}],"ftHw2":[function(require,module,exports) {
module.exports = Promise.all([
    require("3229ecc1f66229af")(require("111bd7b61de767e2").getBundleURL("8CrpR") + "__layout.svelte-74dc8aaa.1fab6184.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("3229ecc1f66229af")(require("111bd7b61de767e2").getBundleURL("8CrpR") + "join.svelte-c7b1e652.86309621.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("7uaIS"));

},{"3229ecc1f66229af":"22rRL","111bd7b61de767e2":"1aQ9r"}]},["fDCsn"], null, "parcelRequire2bed")

//# sourceMappingURL=join.5e5e8883.js.map
