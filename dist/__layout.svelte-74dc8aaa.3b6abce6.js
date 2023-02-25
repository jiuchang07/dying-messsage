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
})({"e0f9k":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "929c3b6d3b6abce6";
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

},{}],"by6Re":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>Qn);
parcelHelpers.export(exports, "A", ()=>hi);
parcelHelpers.export(exports, "B", ()=>$t);
parcelHelpers.export(exports, "C", ()=>Ti);
parcelHelpers.export(exports, "D", ()=>zn);
parcelHelpers.export(exports, "E", ()=>Wn);
parcelHelpers.export(exports, "F", ()=>Xn);
parcelHelpers.export(exports, "G", ()=>Jn);
parcelHelpers.export(exports, "H", ()=>It);
parcelHelpers.export(exports, "I", ()=>C);
parcelHelpers.export(exports, "J", ()=>li);
parcelHelpers.export(exports, "K", ()=>qn);
parcelHelpers.export(exports, "L", ()=>ui);
parcelHelpers.export(exports, "M", ()=>ci);
parcelHelpers.export(exports, "N", ()=>ei);
parcelHelpers.export(exports, "O", ()=>Oi);
parcelHelpers.export(exports, "P", ()=>mi);
parcelHelpers.export(exports, "Q", ()=>Gn);
parcelHelpers.export(exports, "R", ()=>vi);
parcelHelpers.export(exports, "S", ()=>xi);
parcelHelpers.export(exports, "T", ()=>gi);
parcelHelpers.export(exports, "U", ()=>ji);
parcelHelpers.export(exports, "V", ()=>ai);
parcelHelpers.export(exports, "W", ()=>ti);
parcelHelpers.export(exports, "X", ()=>M);
parcelHelpers.export(exports, "Y", ()=>Ze);
parcelHelpers.export(exports, "Z", ()=>Ri);
parcelHelpers.export(exports, "_", ()=>Kn);
parcelHelpers.export(exports, "a", ()=>Nt);
parcelHelpers.export(exports, "a0", ()=>Dt);
parcelHelpers.export(exports, "a1", ()=>ii);
parcelHelpers.export(exports, "a2", ()=>fi);
parcelHelpers.export(exports, "a3", ()=>bi);
parcelHelpers.export(exports, "a4", ()=>K);
parcelHelpers.export(exports, "a5", ()=>_i);
parcelHelpers.export(exports, "a6", ()=>yi);
parcelHelpers.export(exports, "a7", ()=>Ci);
parcelHelpers.export(exports, "a8", ()=>Ai);
parcelHelpers.export(exports, "a9", ()=>Qt);
parcelHelpers.export(exports, "aa", ()=>Zt);
parcelHelpers.export(exports, "b", ()=>ri);
parcelHelpers.export(exports, "c", ()=>ni);
parcelHelpers.export(exports, "d", ()=>Ut);
parcelHelpers.export(exports, "e", ()=>We);
parcelHelpers.export(exports, "f", ()=>Yn);
parcelHelpers.export(exports, "g", ()=>Lt);
parcelHelpers.export(exports, "h", ()=>oi);
parcelHelpers.export(exports, "i", ()=>Ei);
parcelHelpers.export(exports, "j", ()=>Si);
parcelHelpers.export(exports, "k", ()=>Zn);
parcelHelpers.export(exports, "l", ()=>Vn);
parcelHelpers.export(exports, "m", ()=>ki);
parcelHelpers.export(exports, "n", ()=>si);
parcelHelpers.export(exports, "o", ()=>Xt);
parcelHelpers.export(exports, "p", ()=>wi);
parcelHelpers.export(exports, "q", ()=>$i);
parcelHelpers.export(exports, "r", ()=>zt);
parcelHelpers.export(exports, "s", ()=>kt);
parcelHelpers.export(exports, "t", ()=>$e);
parcelHelpers.export(exports, "u", ()=>Wt);
parcelHelpers.export(exports, "v", ()=>Kt);
parcelHelpers.export(exports, "w", ()=>Jt);
parcelHelpers.export(exports, "x", ()=>tt);
parcelHelpers.export(exports, "y", ()=>pi);
parcelHelpers.export(exports, "z", ()=>di);
var global = arguments[3];
function C() {}
const Be = (r)=>r;
function $t(r, e) {
    for(const t in e)r[t] = e[t];
    return r;
}
function St(r) {
    return r && typeof r == "object" && typeof r.then == "function";
}
function Le(r) {
    return r();
}
function Me() {
    return Object.create(null);
}
function M(r) {
    r.forEach(Le);
}
function be(r) {
    return typeof r == "function";
}
function kt(r, e) {
    return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
let se;
function qn(r, e) {
    return se || (se = document.createElement("a")), se.href = e, r === se.href;
}
function Et(r) {
    return Object.keys(r).length === 0;
}
function xt(r, ...e) {
    if (r == null) return C;
    const t = r.subscribe(...e);
    return t.unsubscribe ? ()=>t.unsubscribe() : t;
}
function Gn(r, e, t) {
    r.$$.on_destroy.push(xt(e, t));
}
function zn(r, e, t, n) {
    if (r) {
        const i = He(r, e, t, n);
        return r[0](i);
    }
}
function He(r, e, t, n) {
    return r[1] && n ? $t(t.ctx.slice(), r[1](n(e))) : t.ctx;
}
function Jn(r, e, t, n) {
    if (r[2] && n) {
        const i = r[2](n(t));
        if (e.dirty === void 0) return i;
        if (typeof i == "object") {
            const s = [], o = Math.max(e.dirty.length, i.length);
            for(let a = 0; a < o; a += 1)s[a] = e.dirty[a] | i[a];
            return s;
        }
        return e.dirty | i;
    }
    return e.dirty;
}
function Wn(r, e, t, n, i, s) {
    if (i) {
        const o = He(e, t, n, s);
        r.p(o, i);
    }
}
function Xn(r) {
    if (r.ctx.length > 32) {
        const e = [], t = r.ctx.length / 32;
        for(let n = 0; n < t; n++)e[n] = -1;
        return e;
    }
    return -1;
}
function Kn(r) {
    return r == null ? "" : r;
}
const Fe = typeof window != "undefined";
let qe = Fe ? ()=>window.performance.now() : ()=>Date.now(), we = Fe ? (r)=>requestAnimationFrame(r) : C;
const H = new Set;
function Ge(r) {
    H.forEach((e)=>{
        e.c(r) || (H.delete(e), e.f());
    }), H.size !== 0 && we(Ge);
}
function ze(r) {
    let e;
    return H.size === 0 && we(Ge), {
        promise: new Promise((t)=>{
            H.add(e = {
                c: r,
                f: t
            });
        }),
        abort () {
            H.delete(e);
        }
    };
}
let oe = !1;
function Tt() {
    oe = !0;
}
function jt() {
    oe = !1;
}
function Ot(r, e, t, n) {
    for(; r < e;){
        const i = r + (e - r >> 1);
        t(i) <= n ? r = i + 1 : e = i;
    }
    return r;
}
function Rt(r) {
    if (r.hydrate_init) return;
    r.hydrate_init = !0;
    let e = r.childNodes;
    if (r.nodeName === "HEAD") {
        const u = [];
        for(let c = 0; c < e.length; c++){
            const h = e[c];
            h.claim_order !== void 0 && u.push(h);
        }
        e = u;
    }
    const t = new Int32Array(e.length + 1), n = new Int32Array(e.length);
    t[0] = -1;
    let i = 0;
    for(let u = 0; u < e.length; u++){
        const c = e[u].claim_order, h = (i > 0 && e[t[i]].claim_order <= c ? i + 1 : Ot(1, i, (_)=>e[t[_]].claim_order, c)) - 1;
        n[u] = t[h] + 1;
        const d = h + 1;
        t[d] = u, i = Math.max(d, i);
    }
    const s = [], o = [];
    let a = e.length - 1;
    for(let u = t[i] + 1; u != 0; u = n[u - 1]){
        for(s.push(e[u - 1]); a >= u; a--)o.push(e[a]);
        a--;
    }
    for(; a >= 0; a--)o.push(e[a]);
    s.reverse(), o.sort((u, c)=>u.claim_order - c.claim_order);
    for(let u = 0, c = 0; u < o.length; u++){
        for(; c < s.length && o[u].claim_order >= s[c].claim_order;)c++;
        const h = c < s.length ? s[c] : null;
        r.insertBefore(o[u], h);
    }
}
function Ct(r, e) {
    r.appendChild(e);
}
function Je(r) {
    if (!r) return document;
    const e = r.getRootNode ? r.getRootNode() : r.ownerDocument;
    return e && e.host ? e : r.ownerDocument;
}
function At(r) {
    const e = We("style");
    return Pt(Je(r), e), e;
}
function Pt(r, e) {
    Ct(r.head || r, e);
}
function It(r, e) {
    if (oe) {
        for(Rt(r), (r.actual_end_child === void 0 || r.actual_end_child !== null && r.actual_end_child.parentElement !== r) && (r.actual_end_child = r.firstChild); r.actual_end_child !== null && r.actual_end_child.claim_order === void 0;)r.actual_end_child = r.actual_end_child.nextSibling;
        e !== r.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== r) && r.insertBefore(e, r.actual_end_child) : r.actual_end_child = e.nextSibling;
    } else (e.parentNode !== r || e.nextSibling !== null) && r.appendChild(e);
}
function Yn(r, e, t) {
    oe && !t ? It(r, e) : (e.parentNode !== r || e.nextSibling != t) && r.insertBefore(e, t || null);
}
function Ut(r) {
    r.parentNode.removeChild(r);
}
function Qn(r, e) {
    for(let t = 0; t < r.length; t += 1)r[t] && r[t].d(e);
}
function We(r) {
    return document.createElement(r);
}
function Dt(r) {
    return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function $e(r) {
    return document.createTextNode(r);
}
function Zn() {
    return $e(" ");
}
function Vn() {
    return $e("");
}
function ei(r, e, t, n) {
    return r.addEventListener(e, t, n), ()=>r.removeEventListener(e, t, n);
}
function ti(r) {
    return function(e) {
        return e.preventDefault(), r.call(this, e);
    };
}
function ri(r, e, t) {
    t == null ? r.removeAttribute(e) : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function Nt(r) {
    return Array.from(r.childNodes);
}
function Bt(r) {
    r.claim_info === void 0 && (r.claim_info = {
        last_index: 0,
        total_claimed: 0
    });
}
function Xe(r, e, t, n, i = !1) {
    Bt(r);
    const s = (()=>{
        for(let o = r.claim_info.last_index; o < r.length; o++){
            const a = r[o];
            if (e(a)) {
                const u = t(a);
                return u === void 0 ? r.splice(o, 1) : r[o] = u, i || (r.claim_info.last_index = o), a;
            }
        }
        for(let o = r.claim_info.last_index - 1; o >= 0; o--){
            const a = r[o];
            if (e(a)) {
                const u = t(a);
                return u === void 0 ? r.splice(o, 1) : r[o] = u, i ? u === void 0 && r.claim_info.last_index-- : r.claim_info.last_index = o, a;
            }
        }
        return n();
    })();
    return s.claim_order = r.claim_info.total_claimed, r.claim_info.total_claimed += 1, s;
}
function Ke(r, e, t, n) {
    return Xe(r, (i)=>i.nodeName === e, (i)=>{
        const s = [];
        for(let o = 0; o < i.attributes.length; o++){
            const a = i.attributes[o];
            t[a.name] || s.push(a.name);
        }
        s.forEach((o)=>i.removeAttribute(o));
    }, ()=>n(e));
}
function ni(r, e, t) {
    return Ke(r, e, t, We);
}
function ii(r, e, t) {
    return Ke(r, e, t, Dt);
}
function Lt(r, e) {
    return Xe(r, (t)=>t.nodeType === 3, (t)=>{
        const n = "" + e;
        if (t.data.startsWith(n)) {
            if (t.data.length !== n.length) return t.splitText(n.length);
        } else t.data = n;
    }, ()=>$e(e), !0);
}
function si(r) {
    return Lt(r, " ");
}
function oi(r, e) {
    e = "" + e, r.wholeText !== e && (r.data = e);
}
function ai(r, e) {
    r.value = e == null ? "" : e;
}
function ci(r, e, t, n) {
    r.style.setProperty(e, t, n ? "important" : "");
}
function ui(r, e, t) {
    r.classList[t ? "add" : "remove"](e);
}
function Ye(r, e, t = !1) {
    const n = document.createEvent("CustomEvent");
    return n.initCustomEvent(r, t, !1, e), n;
}
function li(r, e = document.body) {
    return Array.from(e.querySelectorAll(r));
}
const Se = new Set;
let ae = 0;
function Mt(r) {
    let e = 5381, t = r.length;
    for(; t--;)e = (e << 5) - e ^ r.charCodeAt(t);
    return e >>> 0;
}
function Qe(r, e, t, n, i, s, o, a = 0) {
    const u = 16.666 / n;
    let c = `{
`;
    for(let $ = 0; $ <= 1; $ += u){
        const R = e + (t - e) * s($);
        c += $ * 100 + `%{${o(R, 1 - R)}}
`;
    }
    const h = c + `100% {${o(t, 1 - t)}}
}`, d = `__svelte_${Mt(h)}_${a}`, _ = Je(r);
    Se.add(_);
    const g = _.__svelte_stylesheet || (_.__svelte_stylesheet = At(r).sheet), p = _.__svelte_rules || (_.__svelte_rules = {});
    p[d] || (p[d] = !0, g.insertRule(`@keyframes ${d} ${h}`, g.cssRules.length));
    const b = r.style.animation || "";
    return r.style.animation = `${b ? `${b}, ` : ""}${d} ${n}ms linear ${i}ms 1 both`, ae += 1, d;
}
function ke(r, e) {
    const t = (r.style.animation || "").split(", "), n = t.filter(e ? (s)=>s.indexOf(e) < 0 : (s)=>s.indexOf("__svelte") === -1), i = t.length - n.length;
    i && (r.style.animation = n.join(", "), ae -= i, ae || Ht());
}
function Ht() {
    we(()=>{
        ae || (Se.forEach((r)=>{
            const e = r.__svelte_stylesheet;
            let t = e.cssRules.length;
            for(; t--;)e.deleteRule(t);
            r.__svelte_rules = {};
        }), Se.clear());
    });
}
let ce;
function A(r) {
    ce = r;
}
function F() {
    if (!ce) throw new Error("Function called outside component initialization");
    return ce;
}
function hi(r) {
    F().$$.on_mount.push(r);
}
function di(r) {
    F().$$.after_update.push(r);
}
function fi() {
    const r = F();
    return (e, t)=>{
        const n = r.$$.callbacks[e];
        if (n) {
            const i = Ye(e, t);
            n.slice().forEach((s)=>{
                s.call(r, i);
            });
        }
    };
}
function pi(r, e) {
    F().$$.context.set(r, e);
}
function mi(r) {
    return F().$$.context.get(r);
}
const X = [], Ze = [], ue = [], Ve = [], Ft = Promise.resolve();
let Ee = !1;
function qt() {
    Ee || (Ee = !0, Ft.then(je));
}
function K(r) {
    ue.push(r);
}
let xe = !1;
const Te = new Set;
function je() {
    if (!xe) {
        xe = !0;
        do {
            for(let r = 0; r < X.length; r += 1){
                const e = X[r];
                A(e), Gt(e.$$);
            }
            for(A(null), X.length = 0; Ze.length;)Ze.pop()();
            for(let r = 0; r < ue.length; r += 1){
                const e = ue[r];
                Te.has(e) || (Te.add(e), e());
            }
            ue.length = 0;
        }while (X.length);
        for(; Ve.length;)Ve.pop()();
        Ee = !1, xe = !1, Te.clear();
    }
}
function Gt(r) {
    if (r.fragment !== null) {
        r.update(), M(r.before_update);
        const e = r.dirty;
        r.dirty = [
            -1
        ], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(K);
    }
}
let Y;
function et() {
    return Y || (Y = Promise.resolve(), Y.then(()=>{
        Y = null;
    })), Y;
}
function le(r, e, t) {
    r.dispatchEvent(Ye(`${e ? "intro" : "outro"}${t}`));
}
const he = new Set;
let P;
function zt() {
    P = {
        r: 0,
        c: [],
        p: P
    };
}
function Jt() {
    P.r || M(P.c), P = P.p;
}
function tt(r, e) {
    r && r.i && (he.delete(r), r.i(e));
}
function Wt(r, e, t, n) {
    if (r && r.o) {
        if (he.has(r)) return;
        he.add(r), P.c.push(()=>{
            he.delete(r), n && (t && r.d(1), n());
        }), r.o(e);
    }
}
const rt = {
    duration: 0
};
function _i(r, e, t) {
    let n = e(r, t), i = !1, s, o, a = 0;
    function u() {
        s && ke(r, s);
    }
    function c() {
        const { delay: d = 0 , duration: _ = 300 , easing: g = Be , tick: p = C , css: b  } = n || rt;
        b && (s = Qe(r, 0, 1, _, d, g, b, a++)), p(0, 1);
        const $ = qe() + d, R = $ + _;
        o && o.abort(), i = !0, K(()=>le(r, !0, "start")), o = ze((J)=>{
            if (i) {
                if (J >= R) return p(1, 0), le(r, !0, "end"), u(), i = !1;
                if (J >= $) {
                    const ne = g((J - $) / _);
                    p(ne, 1 - ne);
                }
            }
            return i;
        });
    }
    let h = !1;
    return {
        start () {
            h || (h = !0, ke(r), be(n) ? (n = n(), et().then(c)) : c());
        },
        invalidate () {
            h = !1;
        },
        end () {
            i && (u(), i = !1);
        }
    };
}
function yi(r, e, t) {
    let n = e(r, t), i = !0, s;
    const o = P;
    o.r += 1;
    function a() {
        const { delay: u = 0 , duration: c = 300 , easing: h = Be , tick: d = C , css: _  } = n || rt;
        _ && (s = Qe(r, 1, 0, c, u, h, _));
        const g = qe() + u, p = g + c;
        K(()=>le(r, !1, "start")), ze((b)=>{
            if (i) {
                if (b >= p) return d(0, 1), le(r, !1, "end"), --o.r || M(o.c), !1;
                if (b >= g) {
                    const $ = h((b - g) / c);
                    d(1 - $, $);
                }
            }
            return i;
        });
    }
    return be(n) ? et().then(()=>{
        n = n(), a();
    }) : a(), {
        end (u) {
            u && n.tick && n.tick(1, 0), i && (s && ke(r, s), i = !1);
        }
    };
}
function vi(r, e) {
    const t = e.token = {};
    function n(i, s, o, a) {
        if (e.token !== t) return;
        e.resolved = a;
        let u = e.ctx;
        o !== void 0 && (u = u.slice(), u[o] = a);
        const c = i && (e.current = i)(u);
        let h = !1;
        e.block && (e.blocks ? e.blocks.forEach((d, _)=>{
            _ !== s && d && (zt(), Wt(d, 1, 1, ()=>{
                e.blocks[_] === d && (e.blocks[_] = null);
            }), Jt());
        }) : e.block.d(1), c.c(), tt(c, 1), c.m(e.mount(), e.anchor), h = !0), e.block = c, e.blocks && (e.blocks[s] = c), h && je();
    }
    if (St(r)) {
        const i = F();
        if (r.then((s)=>{
            A(i), n(e.then, 1, e.value, s), A(null);
        }, (s)=>{
            if (A(i), n(e.catch, 2, e.error, s), A(null), !e.hasCatch) throw s;
        }), e.current !== e.pending) return n(e.pending, 0), !0;
    } else {
        if (e.current !== e.then) return n(e.then, 1, e.value, r), !0;
        e.resolved = r;
    }
}
function gi(r, e, t) {
    const n = e.slice(), { resolved: i  } = r;
    r.current === r.then && (n[r.value] = i), r.current === r.catch && (n[r.error] = i), r.block.p(n, t);
}
const bi = typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : global;
function wi(r, e) {
    const t = {}, n = {}, i = {
        $$scope: 1
    };
    let s = r.length;
    for(; s--;){
        const o = r[s], a = e[s];
        if (a) {
            for(const u in o)u in a || (n[u] = 1);
            for(const u in a)i[u] || (t[u] = a[u], i[u] = 1);
            r[s] = a;
        } else for(const u in o)i[u] = 1;
    }
    for(const o in n)o in t || (t[o] = void 0);
    return t;
}
function $i(r) {
    return typeof r == "object" && r !== null ? r : {};
}
function Si(r) {
    r && r.c();
}
function ki(r, e) {
    r && r.l(e);
}
function Xt(r, e, t, n) {
    const { fragment: i , on_mount: s , on_destroy: o , after_update: a  } = r.$$;
    i && i.m(e, t), n || K(()=>{
        const u = s.map(Le).filter(be);
        o ? o.push(...u) : M(u), r.$$.on_mount = [];
    }), a.forEach(K);
}
function Kt(r, e) {
    const t = r.$$;
    t.fragment !== null && (M(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Yt(r, e) {
    r.$$.dirty[0] === -1 && (X.push(r), qt(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ei(r, e, t, n, i, s, o, a = [
    -1
]) {
    const u = ce;
    A(r);
    const c = r.$$ = {
        fragment: null,
        ctx: null,
        props: s,
        update: C,
        not_equal: i,
        bound: Me(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (u ? u.$$.context : [])),
        callbacks: Me(),
        dirty: a,
        skip_bound: !1,
        root: e.target || u.$$.root
    };
    o && o(c.root);
    let h = !1;
    if (c.ctx = t ? t(r, e.props || {}, (d, _, ...g)=>{
        const p = g.length ? g[0] : _;
        return c.ctx && i(c.ctx[d], c.ctx[d] = p) && (!c.skip_bound && c.bound[d] && c.bound[d](p), h && Yt(r, d)), _;
    }) : [], c.update(), h = !0, M(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
        if (e.hydrate) {
            Tt();
            const d = Nt(e.target);
            c.fragment && c.fragment.l(d), d.forEach(Ut);
        } else c.fragment && c.fragment.c();
        e.intro && tt(r.$$.fragment), Xt(r, e.target, e.anchor, e.customElement), jt(), je();
    }
    A(u);
}
class xi {
    $destroy() {
        Kt(this, 1), this.$destroy = C;
    }
    $on(e, t) {
        const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return n.push(t), ()=>{
            const i = n.indexOf(t);
            i !== -1 && n.splice(i, 1);
        };
    }
    $set(e) {
        this.$$set && !Et(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
    }
}
const q = [];
function Ti(r, e = C) {
    let t;
    const n = new Set;
    function i(a) {
        if (kt(r, a) && (r = a, t)) {
            const u = !q.length;
            for (const c of n)c[1](), q.push(c, r);
            if (u) {
                for(let c = 0; c < q.length; c += 2)q[c][0](q[c + 1]);
                q.length = 0;
            }
        }
    }
    function s(a) {
        i(a(r));
    }
    function o(a, u = C) {
        const c = [
            a,
            u
        ];
        return n.add(c), n.size === 1 && (t = e(i) || C), a(r), ()=>{
            n.delete(c), n.size === 0 && (t(), t = null);
        };
    }
    return {
        set: i,
        update: s,
        subscribe: o
    };
}
var ji = function r(e) {
    function t(i, s, o) {
        var a, u = {};
        if (Array.isArray(i)) return i.concat(s);
        for(a in i)u[o ? a.toLowerCase() : a] = i[a];
        for(a in s){
            var c = o ? a.toLowerCase() : a, h = s[a];
            u[c] = c in u && typeof h == "object" ? t(u[c], h, c === "headers") : h;
        }
        return u;
    }
    function n(i, s, o, a) {
        typeof i != "string" && (i = (s = i).url);
        var u = {
            config: s
        }, c = t(e, s), h = {}, d = a || c.data;
        (c.transformRequest || []).map(function(p) {
            d = p(d, c.headers) || d;
        }), d && typeof d == "object" && typeof d.append != "function" && (d = JSON.stringify(d), h["content-type"] = "application/json");
        var _ = typeof document != "undefined" && document.cookie.match(RegExp("(^|; )" + c.xsrfCookieName + "=([^;]*)"));
        if (_ && (h[c.xsrfHeaderName] = _[2]), c.auth && (h.authorization = c.auth), c.baseURL && (i = i.replace(/^(?!.*\/\/)\/?(.*)$/, c.baseURL + "/$1")), c.params) {
            var g = ~i.indexOf("?") ? "&" : "?";
            i += g + (c.paramsSerializer ? c.paramsSerializer(c.params) : new URLSearchParams(c.params));
        }
        return (c.fetch || fetch)(i, {
            method: o || c.method,
            body: d,
            headers: t(c.headers, h, !0),
            credentials: c.withCredentials ? "include" : "same-origin"
        }).then(function(p) {
            for(var b in p)typeof p[b] != "function" && (u[b] = p[b]);
            var $ = c.validateStatus ? c.validateStatus(p.status) : p.ok;
            return c.responseType == "stream" ? (u.data = p.body, u) : p[c.responseType || "text"]().then(function(R) {
                u.data = R, u.data = JSON.parse(R);
            }).catch(Object).then(function() {
                return $ ? u : Promise.reject(u);
            });
        });
    }
    return e = e || {}, n.request = n, n.get = function(i, s) {
        return n(i, s, "get");
    }, n.delete = function(i, s) {
        return n(i, s, "delete");
    }, n.head = function(i, s) {
        return n(i, s, "head");
    }, n.options = function(i, s) {
        return n(i, s, "options");
    }, n.post = function(i, s, o) {
        return n(i, o, "post", s);
    }, n.put = function(i, s, o) {
        return n(i, o, "put", s);
    }, n.patch = function(i, s, o) {
        return n(i, o, "patch", s);
    }, n.all = Promise.all.bind(Promise), n.spread = function(i) {
        return function(s) {
            return i.apply(this, s);
        };
    }, n.CancelToken = typeof AbortController == "function" ? AbortController : Object, n.defaults = e, n.create = r, n;
}(), Qt = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function Zt(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Vt = function() {
    var r = document.getSelection();
    if (!r.rangeCount) return function() {};
    for(var e = document.activeElement, t = [], n = 0; n < r.rangeCount; n++)t.push(r.getRangeAt(n));
    switch(e.tagName.toUpperCase()){
        case "INPUT":
        case "TEXTAREA":
            e.blur();
            break;
        default:
            e = null;
            break;
    }
    return r.removeAllRanges(), function() {
        r.type === "Caret" && r.removeAllRanges(), r.rangeCount || t.forEach(function(i) {
            r.addRange(i);
        }), e && e.focus();
    };
}, er = Vt, nt = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
}, tr = "Copy to clipboard: #{key}, Enter";
function rr(r) {
    var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return r.replace(/#{\s*key\s*}/g, e);
}
function nr(r, e) {
    var t, n, i, s, o, a, u = !1;
    e || (e = {}), t = e.debug || !1;
    try {
        i = er(), s = document.createRange(), o = document.getSelection(), a = document.createElement("span"), a.textContent = r, a.style.all = "unset", a.style.position = "fixed", a.style.top = 0, a.style.clip = "rect(0, 0, 0, 0)", a.style.whiteSpace = "pre", a.style.webkitUserSelect = "text", a.style.MozUserSelect = "text", a.style.msUserSelect = "text", a.style.userSelect = "text", a.addEventListener("copy", function(h) {
            if (h.stopPropagation(), e.format) {
                if (h.preventDefault(), typeof h.clipboardData == "undefined") {
                    t && console.warn("unable to use e.clipboardData"), t && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                    var d = nt[e.format] || nt.default;
                    window.clipboardData.setData(d, r);
                } else h.clipboardData.clearData(), h.clipboardData.setData(e.format, r);
            }
            e.onCopy && (h.preventDefault(), e.onCopy(h.clipboardData));
        }), document.body.appendChild(a), s.selectNodeContents(a), o.addRange(s);
        var c = document.execCommand("copy");
        if (!c) throw new Error("copy command was unsuccessful");
        u = !0;
    } catch (h) {
        t && console.error("unable to copy using execCommand: ", h), t && console.warn("trying IE specific stuff");
        try {
            window.clipboardData.setData(e.format || "text", r), e.onCopy && e.onCopy(window.clipboardData), u = !0;
        } catch (d) {
            t && console.error("unable to copy using clipboardData: ", d), t && console.error("falling back to prompt"), n = rr("message" in e ? e.message : tr), window.prompt(n, r);
        }
    } finally{
        o && (typeof o.removeRange == "function" ? o.removeRange(s) : o.removeAllRanges()), a && document.body.removeChild(a), i();
    }
    return u;
}
var Oi = nr;
const ir = "1.23.1", it = {
    "X-Client-Info": `supabase-js/${ir}`
};
function sr(r) {
    return r.replace(/\/$/, "");
}
var Oe = {
    exports: {}
};
(function(r, e) {
    var t = typeof self != "undefined" ? self : Qt, n = function() {
        function s() {
            this.fetch = !1, this.DOMException = t.DOMException;
        }
        return s.prototype = t, new s;
    }();
    (function(s) {
        (function(o) {
            var a = {
                searchParams: "URLSearchParams" in s,
                iterable: "Symbol" in s && "iterator" in Symbol,
                blob: "FileReader" in s && "Blob" in s && function() {
                    try {
                        return new Blob, !0;
                    } catch (l) {
                        return !1;
                    }
                }(),
                formData: "FormData" in s,
                arrayBuffer: "ArrayBuffer" in s
            };
            function u(l) {
                return l && DataView.prototype.isPrototypeOf(l);
            }
            if (a.arrayBuffer) var c = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]"
            ], h = ArrayBuffer.isView || function(l) {
                return l && c.indexOf(Object.prototype.toString.call(l)) > -1;
            };
            function d(l) {
                if (typeof l != "string" && (l = String(l)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(l)) throw new TypeError("Invalid character in header field name");
                return l.toLowerCase();
            }
            function _(l) {
                return typeof l != "string" && (l = String(l)), l;
            }
            function g(l) {
                var f = {
                    next: function() {
                        var m = l.shift();
                        return {
                            done: m === void 0,
                            value: m
                        };
                    }
                };
                return a.iterable && (f[Symbol.iterator] = function() {
                    return f;
                }), f;
            }
            function p(l) {
                this.map = {}, l instanceof p ? l.forEach(function(f, m) {
                    this.append(m, f);
                }, this) : Array.isArray(l) ? l.forEach(function(f) {
                    this.append(f[0], f[1]);
                }, this) : l && Object.getOwnPropertyNames(l).forEach(function(f) {
                    this.append(f, l[f]);
                }, this);
            }
            p.prototype.append = function(l, f) {
                l = d(l), f = _(f);
                var m = this.map[l];
                this.map[l] = m ? m + ", " + f : f;
            }, p.prototype.delete = function(l) {
                delete this.map[d(l)];
            }, p.prototype.get = function(l) {
                return l = d(l), this.has(l) ? this.map[l] : null;
            }, p.prototype.has = function(l) {
                return this.map.hasOwnProperty(d(l));
            }, p.prototype.set = function(l, f) {
                this.map[d(l)] = _(f);
            }, p.prototype.forEach = function(l, f) {
                for(var m in this.map)this.map.hasOwnProperty(m) && l.call(f, this.map[m], m, this);
            }, p.prototype.keys = function() {
                var l = [];
                return this.forEach(function(f, m) {
                    l.push(m);
                }), g(l);
            }, p.prototype.values = function() {
                var l = [];
                return this.forEach(function(f) {
                    l.push(f);
                }), g(l);
            }, p.prototype.entries = function() {
                var l = [];
                return this.forEach(function(f, m) {
                    l.push([
                        m,
                        f
                    ]);
                }), g(l);
            }, a.iterable && (p.prototype[Symbol.iterator] = p.prototype.entries);
            function b(l) {
                if (l.bodyUsed) return Promise.reject(new TypeError("Already read"));
                l.bodyUsed = !0;
            }
            function $(l) {
                return new Promise(function(f, m) {
                    l.onload = function() {
                        f(l.result);
                    }, l.onerror = function() {
                        m(l.error);
                    };
                });
            }
            function R(l) {
                var f = new FileReader, m = $(f);
                return f.readAsArrayBuffer(l), m;
            }
            function J(l) {
                var f = new FileReader, m = $(f);
                return f.readAsText(l), m;
            }
            function ne(l) {
                for(var f = new Uint8Array(l), m = new Array(f.length), S = 0; S < f.length; S++)m[S] = String.fromCharCode(f[S]);
                return m.join("");
            }
            function De(l) {
                if (l.slice) return l.slice(0);
                var f = new Uint8Array(l.byteLength);
                return f.set(new Uint8Array(l)), f.buffer;
            }
            function Ne() {
                return this.bodyUsed = !1, this._initBody = function(l) {
                    this._bodyInit = l, l ? typeof l == "string" ? this._bodyText = l : a.blob && Blob.prototype.isPrototypeOf(l) ? this._bodyBlob = l : a.formData && FormData.prototype.isPrototypeOf(l) ? this._bodyFormData = l : a.searchParams && URLSearchParams.prototype.isPrototypeOf(l) ? this._bodyText = l.toString() : a.arrayBuffer && a.blob && u(l) ? (this._bodyArrayBuffer = De(l.buffer), this._bodyInit = new Blob([
                        this._bodyArrayBuffer
                    ])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(l) || h(l)) ? this._bodyArrayBuffer = De(l) : this._bodyText = l = Object.prototype.toString.call(l) : this._bodyText = "", this.headers.get("content-type") || (typeof l == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(l) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                }, a.blob && (this.blob = function() {
                    var l = b(this);
                    if (l) return l;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                        this._bodyArrayBuffer
                    ]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([
                        this._bodyText
                    ]));
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? b(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(R);
                }), this.text = function() {
                    var l = b(this);
                    if (l) return l;
                    if (this._bodyBlob) return J(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(ne(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText);
                }, a.formData && (this.formData = function() {
                    return this.text().then(gt);
                }), this.json = function() {
                    return this.text().then(JSON.parse);
                }, this;
            }
            var yt = [
                "DELETE",
                "GET",
                "HEAD",
                "OPTIONS",
                "POST",
                "PUT"
            ];
            function vt(l) {
                var f = l.toUpperCase();
                return yt.indexOf(f) > -1 ? f : l;
            }
            function N(l, f) {
                f = f || {};
                var m = f.body;
                if (l instanceof N) {
                    if (l.bodyUsed) throw new TypeError("Already read");
                    this.url = l.url, this.credentials = l.credentials, f.headers || (this.headers = new p(l.headers)), this.method = l.method, this.mode = l.mode, this.signal = l.signal, !m && l._bodyInit != null && (m = l._bodyInit, l.bodyUsed = !0);
                } else this.url = String(l);
                if (this.credentials = f.credentials || this.credentials || "same-origin", (f.headers || !this.headers) && (this.headers = new p(f.headers)), this.method = vt(f.method || this.method || "GET"), this.mode = f.mode || this.mode || null, this.signal = f.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && m) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(m);
            }
            N.prototype.clone = function() {
                return new N(this, {
                    body: this._bodyInit
                });
            };
            function gt(l) {
                var f = new FormData;
                return l.trim().split("&").forEach(function(m) {
                    if (m) {
                        var S = m.split("="), w = S.shift().replace(/\+/g, " "), y = S.join("=").replace(/\+/g, " ");
                        f.append(decodeURIComponent(w), decodeURIComponent(y));
                    }
                }), f;
            }
            function bt(l) {
                var f = new p, m = l.replace(/\r?\n[\t ]+/g, " ");
                return m.split(/\r?\n/).forEach(function(S) {
                    var w = S.split(":"), y = w.shift().trim();
                    if (y) {
                        var ie = w.join(":").trim();
                        f.append(y, ie);
                    }
                }), f;
            }
            Ne.call(N.prototype);
            function j(l, f) {
                f || (f = {}), this.type = "default", this.status = f.status === void 0 ? 200 : f.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in f ? f.statusText : "OK", this.headers = new p(f.headers), this.url = f.url || "", this._initBody(l);
            }
            Ne.call(j.prototype), j.prototype.clone = function() {
                return new j(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new p(this.headers),
                    url: this.url
                });
            }, j.error = function() {
                var l = new j(null, {
                    status: 0,
                    statusText: ""
                });
                return l.type = "error", l;
            };
            var wt = [
                301,
                302,
                303,
                307,
                308
            ];
            j.redirect = function(l, f) {
                if (wt.indexOf(f) === -1) throw new RangeError("Invalid status code");
                return new j(null, {
                    status: f,
                    headers: {
                        location: l
                    }
                });
            }, o.DOMException = s.DOMException;
            try {
                new o.DOMException;
            } catch (l) {
                o.DOMException = function(f, m) {
                    this.message = f, this.name = m;
                    var S = Error(f);
                    this.stack = S.stack;
                }, o.DOMException.prototype = Object.create(Error.prototype), o.DOMException.prototype.constructor = o.DOMException;
            }
            function ve(l, f) {
                return new Promise(function(m, S) {
                    var w = new N(l, f);
                    if (w.signal && w.signal.aborted) return S(new o.DOMException("Aborted", "AbortError"));
                    var y = new XMLHttpRequest;
                    function ie() {
                        y.abort();
                    }
                    y.onload = function() {
                        var W = {
                            status: y.status,
                            statusText: y.statusText,
                            headers: bt(y.getAllResponseHeaders() || "")
                        };
                        W.url = "responseURL" in y ? y.responseURL : W.headers.get("X-Request-URL");
                        var ge = "response" in y ? y.response : y.responseText;
                        m(new j(ge, W));
                    }, y.onerror = function() {
                        S(new TypeError("Network request failed"));
                    }, y.ontimeout = function() {
                        S(new TypeError("Network request failed"));
                    }, y.onabort = function() {
                        S(new o.DOMException("Aborted", "AbortError"));
                    }, y.open(w.method, w.url, !0), w.credentials === "include" ? y.withCredentials = !0 : w.credentials === "omit" && (y.withCredentials = !1), "responseType" in y && a.blob && (y.responseType = "blob"), w.headers.forEach(function(W, ge) {
                        y.setRequestHeader(ge, W);
                    }), w.signal && (w.signal.addEventListener("abort", ie), y.onreadystatechange = function() {
                        y.readyState === 4 && w.signal.removeEventListener("abort", ie);
                    }), y.send(typeof w._bodyInit == "undefined" ? null : w._bodyInit);
                });
            }
            return ve.polyfill = !0, s.fetch || (s.fetch = ve, s.Headers = p, s.Request = N, s.Response = j), o.Headers = p, o.Request = N, o.Response = j, o.fetch = ve, Object.defineProperty(o, "__esModule", {
                value: !0
            }), o;
        })({});
    })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
    var i = n;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, r.exports = e;
})(Oe, Oe.exports);
var de = Zt(Oe.exports), Q = function(r, e, t, n) {
    function i(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s);
        });
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(h) {
            try {
                c(n.next(h));
            } catch (d) {
                o(d);
            }
        }
        function u(h) {
            try {
                c(n.throw(h));
            } catch (d) {
                o(d);
            }
        }
        function c(h) {
            h.done ? s(h.value) : i(h.value).then(a, u);
        }
        c((n = n.apply(r, e || [])).next());
    });
};
const or = (r)=>r.msg || r.message || r.error_description || r.error || JSON.stringify(r), ar = (r, e)=>{
    if (typeof r.json != "function") return e(r);
    r.json().then((t)=>e({
            message: or(t),
            status: (r == null ? void 0 : r.status) || 500
        }));
}, cr = (r, e, t)=>{
    const n = {
        method: r,
        headers: (e == null ? void 0 : e.headers) || {}
    };
    return r === "GET" || (n.headers = Object.assign({
        "Content-Type": "text/plain;charset=UTF-8"
    }, e == null ? void 0 : e.headers), n.body = JSON.stringify(t)), n;
};
function fe(r, e, t, n) {
    return Q(this, void 0, void 0, function*() {
        return new Promise((i, s)=>{
            de(e, cr(r, t, n)).then((o)=>{
                if (!o.ok) throw o;
                return (t == null ? void 0 : t.noResolveJson) ? i : o.json();
            }).then((o)=>i(o)).catch((o)=>ar(o, s));
        });
    });
}
function ur(r, e) {
    return Q(this, void 0, void 0, function*() {
        return fe("GET", r, e);
    });
}
function T(r, e, t) {
    return Q(this, void 0, void 0, function*() {
        return fe("POST", r, t, e);
    });
}
function lr(r, e, t) {
    return Q(this, void 0, void 0, function*() {
        return fe("PUT", r, t, e);
    });
}
function hr(r, e, t) {
    return Q(this, void 0, void 0, function*() {
        return fe("DELETE", r, t, e);
    });
}
const dr = "1.18.0", fr = "http://localhost:9999", pr = {
    "X-Client-Info": `gotrue-js/${dr}`
}, pe = "supabase.auth.token", mr = {
    name: "sb:token",
    lifetime: 28800,
    domain: "",
    path: "/",
    sameSite: "lax"
};
function _r(r, e, t) {
    const n = t || {}, i = encodeURIComponent, s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    if (typeof i != "function") throw new TypeError("option encode is invalid");
    if (!s.test(r)) throw new TypeError("argument name is invalid");
    const o = i(e);
    if (o && !s.test(o)) throw new TypeError("argument val is invalid");
    let a = r + "=" + o;
    if (n.maxAge != null) {
        const u = n.maxAge - 0;
        if (isNaN(u) || !isFinite(u)) throw new TypeError("option maxAge is invalid");
        a += "; Max-Age=" + Math.floor(u);
    }
    if (n.domain) {
        if (!s.test(n.domain)) throw new TypeError("option domain is invalid");
        a += "; Domain=" + n.domain;
    }
    if (n.path) {
        if (!s.test(n.path)) throw new TypeError("option path is invalid");
        a += "; Path=" + n.path;
    }
    if (n.expires) {
        if (typeof n.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
        a += "; Expires=" + n.expires.toUTCString();
    }
    if (n.httpOnly && (a += "; HttpOnly"), n.secure && (a += "; Secure"), n.sameSite) switch(typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite){
        case "lax":
            a += "; SameSite=Lax";
            break;
        case "strict":
            a += "; SameSite=Strict";
            break;
        case "none":
            a += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid");
    }
    return a;
}
function yr(r) {
    if (!r || !r.headers || !r.headers.host) throw new Error('The "host" request header is not available');
    const e = r.headers.host.indexOf(":") > -1 && r.headers.host.split(":")[0] || r.headers.host;
    return !([
        "localhost",
        "127.0.0.1"
    ].indexOf(e) > -1 || e.endsWith(".local"));
}
function vr(r, e) {
    var t, n, i;
    return _r(r.name, r.value, {
        maxAge: r.maxAge,
        expires: new Date(Date.now() + r.maxAge * 1e3),
        httpOnly: !0,
        secure: e,
        path: (t = r.path) !== null && t !== void 0 ? t : "/",
        domain: (n = r.domain) !== null && n !== void 0 ? n : "",
        sameSite: (i = r.sameSite) !== null && i !== void 0 ? i : "lax"
    });
}
function gr(r, e, t) {
    const n = t.map((s)=>vr(s, yr(r))), i = e.getHeader("Set-Cookie");
    i && (i instanceof Array ? Array.prototype.push.apply(n, i) : typeof i == "string" && n.push(i)), e.setHeader("Set-Cookie", n);
}
function st(r, e, t) {
    gr(r, e, [
        t
    ]);
}
function br(r, e, t) {
    st(r, e, {
        name: t,
        value: "",
        maxAge: -1
    });
}
function Z(r) {
    return Math.round(Date.now() / 1e3) + r;
}
function wr() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
        var e = Math.random() * 16 | 0, t = r == "x" ? e : e & 3 | 8;
        return t.toString(16);
    });
}
const B = ()=>typeof window != "undefined";
function I(r, e) {
    e || (e = window.location.href), r = r.replace(/[\[\]]/g, "\\$&");
    var t = new RegExp("[?&#]" + r + "(=([^&#]*)|&|#|$)"), n = t.exec(e);
    return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null;
}
var k = function(r, e, t, n) {
    function i(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s);
        });
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(h) {
            try {
                c(n.next(h));
            } catch (d) {
                o(d);
            }
        }
        function u(h) {
            try {
                c(n.throw(h));
            } catch (d) {
                o(d);
            }
        }
        function c(h) {
            h.done ? s(h.value) : i(h.value).then(a, u);
        }
        c((n = n.apply(r, e || [])).next());
    });
};
class $r {
    constructor({ url: e = "" , headers: t = {} , cookieOptions: n  }){
        this.url = e, this.headers = t, this.cookieOptions = Object.assign(Object.assign({}, mr), n);
    }
    signUpWithEmail(e, t, n = {}) {
        return k(this, void 0, void 0, function*() {
            try {
                let i = Object.assign({}, this.headers), s = "";
                n.redirectTo && (s = "?redirect_to=" + encodeURIComponent(n.redirectTo));
                const o = yield T(`${this.url}/signup${s}`, {
                    email: e,
                    password: t,
                    data: n.data
                }, {
                    headers: i
                });
                let a = Object.assign({}, o);
                return a.expires_in && (a.expires_at = Z(o.expires_in)), {
                    data: a,
                    error: null
                };
            } catch (i) {
                return {
                    data: null,
                    error: i
                };
            }
        });
    }
    signInWithEmail(e, t, n = {}) {
        return k(this, void 0, void 0, function*() {
            try {
                let i = Object.assign({}, this.headers), s = "?grant_type=password";
                n.redirectTo && (s += "&redirect_to=" + encodeURIComponent(n.redirectTo));
                const o = yield T(`${this.url}/token${s}`, {
                    email: e,
                    password: t
                }, {
                    headers: i
                });
                let a = Object.assign({}, o);
                return a.expires_in && (a.expires_at = Z(o.expires_in)), {
                    data: a,
                    error: null
                };
            } catch (i) {
                return {
                    data: null,
                    error: i
                };
            }
        });
    }
    signUpWithPhone(e, t, n = {}) {
        return k(this, void 0, void 0, function*() {
            try {
                let i = Object.assign({}, this.headers);
                const s = yield T(`${this.url}/signup`, {
                    phone: e,
                    password: t,
                    data: n.data
                }, {
                    headers: i
                });
                let o = Object.assign({}, s);
                return o.expires_in && (o.expires_at = Z(s.expires_in)), {
                    data: o,
                    error: null
                };
            } catch (i) {
                return {
                    data: null,
                    error: i
                };
            }
        });
    }
    signInWithPhone(e, t) {
        return k(this, void 0, void 0, function*() {
            try {
                let n = Object.assign({}, this.headers), i = "?grant_type=password";
                const s = yield T(`${this.url}/token${i}`, {
                    phone: e,
                    password: t
                }, {
                    headers: n
                });
                let o = Object.assign({}, s);
                return o.expires_in && (o.expires_at = Z(s.expires_in)), {
                    data: o,
                    error: null
                };
            } catch (n) {
                return {
                    data: null,
                    error: n
                };
            }
        });
    }
    sendMagicLinkEmail(e, t = {}) {
        return k(this, void 0, void 0, function*() {
            try {
                let n = Object.assign({}, this.headers), i = "";
                return t.redirectTo && (i += "?redirect_to=" + encodeURIComponent(t.redirectTo)), {
                    data: yield T(`${this.url}/magiclink${i}`, {
                        email: e
                    }, {
                        headers: n
                    }),
                    error: null
                };
            } catch (n) {
                return {
                    data: null,
                    error: n
                };
            }
        });
    }
    sendMobileOTP(e) {
        return k(this, void 0, void 0, function*() {
            try {
                let t = Object.assign({}, this.headers);
                return {
                    data: yield T(`${this.url}/otp`, {
                        phone: e
                    }, {
                        headers: t
                    }),
                    error: null
                };
            } catch (t) {
                return {
                    data: null,
                    error: t
                };
            }
        });
    }
    verifyMobileOTP(e, t, n = {}) {
        return k(this, void 0, void 0, function*() {
            try {
                let i = Object.assign({}, this.headers);
                return {
                    data: yield T(`${this.url}/verify`, {
                        phone: e,
                        token: t,
                        type: "sms",
                        redirect_to: n.redirectTo
                    }, {
                        headers: i
                    }),
                    error: null
                };
            } catch (i) {
                return {
                    data: null,
                    error: i
                };
            }
        });
    }
    inviteUserByEmail(e, t = {}) {
        return k(this, void 0, void 0, function*() {
            try {
                let n = Object.assign({}, this.headers), i = "";
                return t.redirectTo && (i += "?redirect_to=" + encodeURIComponent(t.redirectTo)), {
                    data: yield T(`${this.url}/invite${i}`, {
                        email: e,
                        data: t.data
                    }, {
                        headers: n
                    }),
                    error: null
                };
            } catch (n) {
                return {
                    data: null,
                    error: n
                };
            }
        });
    }
    resetPasswordForEmail(e, t = {}) {
        return k(this, void 0, void 0, function*() {
            try {
                let n = Object.assign({}, this.headers), i = "";
                return t.redirectTo && (i += "?redirect_to=" + encodeURIComponent(t.redirectTo)), {
                    data: yield T(`${this.url}/recover${i}`, {
                        email: e
                    }, {
                        headers: n
                    }),
                    error: null
                };
            } catch (n) {
                return {
                    data: null,
                    error: n
                };
            }
        });
    }
    _createRequestHeaders(e) {
        const t = Object.assign({}, this.headers);
        return t.Authorization = `Bearer ${e}`, t;
    }
    signOut(e) {
        return k(this, void 0, void 0, function*() {
            try {
                return yield T(`${this.url}/logout`, {}, {
                    headers: this._createRequestHeaders(e),
                    noResolveJson: !0
                }), {
                    error: null
                };
            } catch (t) {
                return {
                    error: t
                };
            }
        });
    }
    getUrlForProvider(e, t) {
        let n = [
            `provider=${encodeURIComponent(e)}`
        ];
        return (t == null ? void 0 : t.redirectTo) && n.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`), (t == null ? void 0 : t.scopes) && n.push(`scopes=${encodeURIComponent(t.scopes)}`), `${this.url}/authorize?${n.join("&")}`;
    }
    getUser(e) {
        return k(this, void 0, void 0, function*() {
            try {
                const t = yield ur(`${this.url}/user`, {
                    headers: this._createRequestHeaders(e)
                });
                return {
                    user: t,
                    data: t,
                    error: null
                };
            } catch (t) {
                return {
                    user: null,
                    data: null,
                    error: t
                };
            }
        });
    }
    updateUser(e, t) {
        return k(this, void 0, void 0, function*() {
            try {
                const n = yield lr(`${this.url}/user`, t, {
                    headers: this._createRequestHeaders(e)
                });
                return {
                    user: n,
                    data: n,
                    error: null
                };
            } catch (n) {
                return {
                    user: null,
                    data: null,
                    error: n
                };
            }
        });
    }
    deleteUser(e, t) {
        return k(this, void 0, void 0, function*() {
            try {
                const n = yield hr(`${this.url}/admin/users/${e}`, {}, {
                    headers: this._createRequestHeaders(t)
                });
                return {
                    user: n,
                    data: n,
                    error: null
                };
            } catch (n) {
                return {
                    user: null,
                    data: null,
                    error: n
                };
            }
        });
    }
    refreshAccessToken(e) {
        return k(this, void 0, void 0, function*() {
            try {
                const t = yield T(`${this.url}/token?grant_type=refresh_token`, {
                    refresh_token: e
                }, {
                    headers: this.headers
                });
                let n = Object.assign({}, t);
                return n.expires_in && (n.expires_at = Z(t.expires_in)), {
                    data: n,
                    error: null
                };
            } catch (t) {
                return {
                    data: null,
                    error: t
                };
            }
        });
    }
    setAuthCookie(e, t) {
        e.method !== "POST" && (t.setHeader("Allow", "POST"), t.status(405).end("Method Not Allowed"));
        const { event: n , session: i  } = e.body;
        if (!n) throw new Error("Auth event missing!");
        if (n === "SIGNED_IN") {
            if (!i) throw new Error("Auth session missing!");
            st(e, t, {
                name: this.cookieOptions.name,
                value: i.access_token,
                domain: this.cookieOptions.domain,
                maxAge: this.cookieOptions.lifetime,
                path: this.cookieOptions.path,
                sameSite: this.cookieOptions.sameSite
            });
        }
        n === "SIGNED_OUT" && br(e, t, this.cookieOptions.name), t.status(200).json({});
    }
    getUserByCookie(e) {
        return k(this, void 0, void 0, function*() {
            try {
                if (!e.cookies) throw new Error("Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!");
                if (!e.cookies[this.cookieOptions.name]) throw new Error("No cookie found!");
                const t = e.cookies[this.cookieOptions.name], { user: n , error: i  } = yield this.getUser(t);
                if (i) throw i;
                return {
                    user: n,
                    data: n,
                    error: null
                };
            } catch (t) {
                return {
                    user: null,
                    data: null,
                    error: t
                };
            }
        });
    }
    generateLink(e, t, n = {}) {
        return k(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield T(`${this.url}/admin/generate_link`, {
                        type: e,
                        email: t,
                        password: n.password,
                        data: n.data,
                        redirect_to: n.redirectTo
                    }, {
                        headers: this.headers
                    }),
                    error: null
                };
            } catch (i) {
                return {
                    data: null,
                    error: i
                };
            }
        });
    }
}
function Sr() {
    if (typeof globalThis != "object") try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function() {
                return this;
            },
            configurable: !0
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch (r) {
        typeof self != "undefined" && (self.globalThis = self);
    }
}
var x = function(r, e, t, n) {
    function i(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s);
        });
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(h) {
            try {
                c(n.next(h));
            } catch (d) {
                o(d);
            }
        }
        function u(h) {
            try {
                c(n.throw(h));
            } catch (d) {
                o(d);
            }
        }
        function c(h) {
            h.done ? s(h.value) : i(h.value).then(a, u);
        }
        c((n = n.apply(r, e || [])).next());
    });
};
Sr();
const kr = {
    url: fr,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: pr
};
class Er {
    constructor(e){
        this.stateChangeEmitters = new Map;
        const t = Object.assign(Object.assign({}, kr), e);
        this.currentUser = null, this.currentSession = null, this.autoRefreshToken = t.autoRefreshToken, this.persistSession = t.persistSession, this.localStorage = t.localStorage || globalThis.localStorage, this.api = new $r({
            url: t.url,
            headers: t.headers,
            cookieOptions: t.cookieOptions
        }), this._recoverSession(), this._recoverAndRefresh();
        try {
            t.detectSessionInUrl && B() && !!I("access_token") && this.getSessionFromUrl({
                storeSession: !0
            });
        } catch (n) {
            console.log("Error getting session from URL.");
        }
    }
    signUp({ email: e , password: t , phone: n  }, i = {}) {
        return x(this, void 0, void 0, function*() {
            try {
                this._removeSession();
                const { data: s , error: o  } = n && t ? yield this.api.signUpWithPhone(n, t, {
                    data: i.data
                }) : yield this.api.signUpWithEmail(e, t, {
                    redirectTo: i.redirectTo,
                    data: i.data
                });
                if (o) throw o;
                if (!s) throw "An error occurred on sign up.";
                let a = null, u = null;
                return s.access_token && (a = s, u = a.user, this._saveSession(a), this._notifyAllSubscribers("SIGNED_IN")), s.id && (u = s), {
                    data: s,
                    user: u,
                    session: a,
                    error: null
                };
            } catch (s) {
                return {
                    data: null,
                    user: null,
                    session: null,
                    error: s
                };
            }
        });
    }
    signIn({ email: e , phone: t , password: n , refreshToken: i , provider: s  }, o = {}) {
        return x(this, void 0, void 0, function*() {
            try {
                if (this._removeSession(), e && !n) {
                    const { error: a  } = yield this.api.sendMagicLinkEmail(e, {
                        redirectTo: o.redirectTo
                    });
                    return {
                        data: null,
                        user: null,
                        session: null,
                        error: a
                    };
                }
                if (e && n) return this._handleEmailSignIn(e, n, {
                    redirectTo: o.redirectTo
                });
                if (t && !n) {
                    const { error: a  } = yield this.api.sendMobileOTP(t);
                    return {
                        data: null,
                        user: null,
                        session: null,
                        error: a
                    };
                }
                if (t && n) return this._handlePhoneSignIn(t, n);
                if (i) {
                    const { error: a  } = yield this._callRefreshToken(i);
                    if (a) throw a;
                    return {
                        data: this.currentSession,
                        user: this.currentUser,
                        session: this.currentSession,
                        error: null
                    };
                }
                if (s) return this._handleProviderSignIn(s, {
                    redirectTo: o.redirectTo,
                    scopes: o.scopes
                });
                throw new Error("You must provide either an email, phone number or a third-party provider.");
            } catch (a) {
                return {
                    data: null,
                    user: null,
                    session: null,
                    error: a
                };
            }
        });
    }
    verifyOTP({ phone: e , token: t  }, n = {}) {
        return x(this, void 0, void 0, function*() {
            try {
                this._removeSession();
                const { data: i , error: s  } = yield this.api.verifyMobileOTP(e, t, n);
                if (s) throw s;
                if (!i) throw "An error occurred on token verification.";
                let o = null, a = null;
                return i.access_token && (o = i, a = o.user, this._saveSession(o), this._notifyAllSubscribers("SIGNED_IN")), i.id && (a = i), {
                    data: i,
                    user: a,
                    session: o,
                    error: null
                };
            } catch (i) {
                return {
                    data: null,
                    user: null,
                    session: null,
                    error: i
                };
            }
        });
    }
    user() {
        return this.currentUser;
    }
    session() {
        return this.currentSession;
    }
    refreshSession() {
        var e;
        return x(this, void 0, void 0, function*() {
            try {
                if (!((e = this.currentSession) === null || e === void 0 ? void 0 : e.access_token)) throw new Error("Not logged in.");
                const { error: t  } = yield this._callRefreshToken();
                if (t) throw t;
                return {
                    data: this.currentSession,
                    user: this.currentUser,
                    error: null
                };
            } catch (t) {
                return {
                    data: null,
                    user: null,
                    error: t
                };
            }
        });
    }
    update(e) {
        var t;
        return x(this, void 0, void 0, function*() {
            try {
                if (!((t = this.currentSession) === null || t === void 0 ? void 0 : t.access_token)) throw new Error("Not logged in.");
                const { user: n , error: i  } = yield this.api.updateUser(this.currentSession.access_token, e);
                if (i) throw i;
                if (!n) throw Error("Invalid user data.");
                const s = Object.assign(Object.assign({}, this.currentSession), {
                    user: n
                });
                return this._saveSession(s), this._notifyAllSubscribers("USER_UPDATED"), {
                    data: n,
                    user: n,
                    error: null
                };
            } catch (n) {
                return {
                    data: null,
                    user: null,
                    error: n
                };
            }
        });
    }
    setSession(e) {
        return x(this, void 0, void 0, function*() {
            try {
                if (!e) throw new Error("No current session.");
                const { data: t , error: n  } = yield this.api.refreshAccessToken(e);
                return n ? {
                    session: null,
                    error: n
                } : t ? (this._saveSession(t), this._notifyAllSubscribers("SIGNED_IN"), {
                    session: t,
                    error: null
                }) : {
                    session: null,
                    error: {
                        name: "Invalid refresh_token",
                        message: "JWT token provided is Invalid"
                    }
                };
            } catch (t) {
                return {
                    error: t,
                    session: null
                };
            }
        });
    }
    setAuth(e) {
        return this.currentSession = Object.assign(Object.assign({}, this.currentSession), {
            access_token: e,
            token_type: "bearer",
            user: null
        }), this.currentSession;
    }
    getSessionFromUrl(e) {
        return x(this, void 0, void 0, function*() {
            try {
                if (!B()) throw new Error("No browser detected.");
                const t = I("error_description");
                if (t) throw new Error(t);
                const n = I("provider_token"), i = I("access_token");
                if (!i) throw new Error("No access_token detected.");
                const s = I("expires_in");
                if (!s) throw new Error("No expires_in detected.");
                const o = I("refresh_token");
                if (!o) throw new Error("No refresh_token detected.");
                const a = I("token_type");
                if (!a) throw new Error("No token_type detected.");
                const c = Math.round(Date.now() / 1e3) + parseInt(s), { user: h , error: d  } = yield this.api.getUser(i);
                if (d) throw d;
                const _ = {
                    provider_token: n,
                    access_token: i,
                    expires_in: parseInt(s),
                    expires_at: c,
                    refresh_token: o,
                    token_type: a,
                    user: h
                };
                return (e == null ? void 0 : e.storeSession) && (this._saveSession(_), this._notifyAllSubscribers("SIGNED_IN"), I("type") === "recovery" && this._notifyAllSubscribers("PASSWORD_RECOVERY")), window.location.hash = "", {
                    data: _,
                    error: null
                };
            } catch (t) {
                return {
                    data: null,
                    error: t
                };
            }
        });
    }
    signOut() {
        var e;
        return x(this, void 0, void 0, function*() {
            const t = (e = this.currentSession) === null || e === void 0 ? void 0 : e.access_token;
            if (this._removeSession(), this._notifyAllSubscribers("SIGNED_OUT"), t) {
                const { error: n  } = yield this.api.signOut(t);
                if (n) return {
                    error: n
                };
            }
            return {
                error: null
            };
        });
    }
    onAuthStateChange(e) {
        try {
            const t = wr(), n = this, i = {
                id: t,
                callback: e,
                unsubscribe: ()=>{
                    n.stateChangeEmitters.delete(t);
                }
            };
            return this.stateChangeEmitters.set(t, i), {
                data: i,
                error: null
            };
        } catch (t) {
            return {
                data: null,
                error: t
            };
        }
    }
    _handleEmailSignIn(e, t, n = {}) {
        var i, s;
        return x(this, void 0, void 0, function*() {
            try {
                const { data: o , error: a  } = yield this.api.signInWithEmail(e, t, {
                    redirectTo: n.redirectTo
                });
                return a || !o ? {
                    data: null,
                    user: null,
                    session: null,
                    error: a
                } : ((((i = o == null ? void 0 : o.user) === null || i === void 0 ? void 0 : i.confirmed_at) || ((s = o == null ? void 0 : o.user) === null || s === void 0 ? void 0 : s.email_confirmed_at)) && (this._saveSession(o), this._notifyAllSubscribers("SIGNED_IN")), {
                    data: o,
                    user: o.user,
                    session: o,
                    error: null
                });
            } catch (o) {
                return {
                    data: null,
                    user: null,
                    session: null,
                    error: o
                };
            }
        });
    }
    _handlePhoneSignIn(e, t) {
        var n;
        return x(this, void 0, void 0, function*() {
            try {
                const { data: i , error: s  } = yield this.api.signInWithPhone(e, t);
                return s || !i ? {
                    data: null,
                    user: null,
                    session: null,
                    error: s
                } : (((n = i == null ? void 0 : i.user) === null || n === void 0 ? void 0 : n.phone_confirmed_at) && (this._saveSession(i), this._notifyAllSubscribers("SIGNED_IN")), {
                    data: i,
                    user: i.user,
                    session: i,
                    error: null
                });
            } catch (i) {
                return {
                    data: null,
                    user: null,
                    session: null,
                    error: i
                };
            }
        });
    }
    _handleProviderSignIn(e, t = {}) {
        const n = this.api.getUrlForProvider(e, {
            redirectTo: t.redirectTo,
            scopes: t.scopes
        });
        try {
            return B() && (window.location.href = n), {
                provider: e,
                url: n,
                data: null,
                session: null,
                user: null,
                error: null
            };
        } catch (i) {
            return n ? {
                provider: e,
                url: n,
                data: null,
                session: null,
                user: null,
                error: null
            } : {
                data: null,
                user: null,
                session: null,
                error: i
            };
        }
    }
    _recoverSession() {
        var e;
        try {
            const t = B() && ((e = this.localStorage) === null || e === void 0 ? void 0 : e.getItem(pe));
            if (!t || typeof t != "string") return null;
            const n = JSON.parse(t), { currentSession: i , expiresAt: s  } = n, o = Math.round(Date.now() / 1e3);
            s >= o && (i == null ? void 0 : i.user) && (this._saveSession(i), this._notifyAllSubscribers("SIGNED_IN"));
        } catch (t) {
            console.log("error", t);
        }
    }
    _recoverAndRefresh() {
        return x(this, void 0, void 0, function*() {
            try {
                const e = B() && (yield this.localStorage.getItem(pe));
                if (!e) return null;
                const t = JSON.parse(e), { currentSession: n , expiresAt: i  } = t, s = Math.round(Date.now() / 1e3);
                if (i < s) {
                    if (this.autoRefreshToken && n.refresh_token) {
                        const { error: o  } = yield this._callRefreshToken(n.refresh_token);
                        o && (console.log(o.message), yield this._removeSession());
                    } else this._removeSession();
                } else !n || !n.user ? (console.log("Current session is missing data."), this._removeSession()) : (this._saveSession(n), this._notifyAllSubscribers("SIGNED_IN"));
            } catch (e) {
                return console.error(e), null;
            }
        });
    }
    _callRefreshToken(e) {
        var t;
        return e === void 0 && (e = (t = this.currentSession) === null || t === void 0 ? void 0 : t.refresh_token), x(this, void 0, void 0, function*() {
            try {
                if (!e) throw new Error("No current session.");
                const { data: n , error: i  } = yield this.api.refreshAccessToken(e);
                if (i) throw i;
                if (!n) throw Error("Invalid session data.");
                return this._saveSession(n), this._notifyAllSubscribers("SIGNED_IN"), {
                    data: n,
                    error: null
                };
            } catch (n) {
                return {
                    data: null,
                    error: n
                };
            }
        });
    }
    _notifyAllSubscribers(e) {
        this.stateChangeEmitters.forEach((t)=>t.callback(e, this.currentSession));
    }
    _saveSession(e) {
        this.currentSession = e, this.currentUser = e.user;
        const t = e.expires_at;
        if (t) {
            const n = Math.round(Date.now() / 1e3), i = t - n, s = i > 60 ? 60 : .5;
            this._startAutoRefreshToken((i - s) * 1e3);
        }
        this.persistSession && e.expires_at && this._persistSession(this.currentSession);
    }
    _persistSession(e) {
        const t = {
            currentSession: e,
            expiresAt: e.expires_at
        };
        B() && this.localStorage.setItem(pe, JSON.stringify(t));
    }
    _removeSession() {
        return x(this, void 0, void 0, function*() {
            this.currentSession = null, this.currentUser = null, this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer), B() && (yield this.localStorage.removeItem(pe));
        });
    }
    _startAutoRefreshToken(e) {
        this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer), !(e <= 0 || !this.autoRefreshToken) && (this.refreshTokenTimer = setTimeout(()=>this._callRefreshToken(), e), typeof this.refreshTokenTimer.unref == "function" && this.refreshTokenTimer.unref());
    }
}
class xr extends Er {
    constructor(e){
        super(e);
    }
}
var Tr = function(r, e, t, n) {
    function i(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s);
        });
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(h) {
            try {
                c(n.next(h));
            } catch (d) {
                o(d);
            }
        }
        function u(h) {
            try {
                c(n.throw(h));
            } catch (d) {
                o(d);
            }
        }
        function c(h) {
            h.done ? s(h.value) : i(h.value).then(a, u);
        }
        c((n = n.apply(r, e || [])).next());
    });
};
class Re {
    constructor(e){
        Object.assign(this, e);
    }
    throwOnError() {
        return this.shouldThrowOnError = !0, this;
    }
    then(e, t) {
        return typeof this.schema == "undefined" || ([
            "GET",
            "HEAD"
        ].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json"), de(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body)
        }).then((n)=>Tr(this, void 0, void 0, function*() {
                var i, s, o;
                let a = null, u = null, c = null;
                if (n.ok) {
                    const d = (i = this.headers.Prefer) === null || i === void 0 ? void 0 : i.split(",").includes("return=minimal");
                    if (this.method !== "HEAD" && !d) {
                        const p = yield n.text();
                        p && (this.headers.Accept === "text/csv" ? u = p : u = JSON.parse(p));
                    }
                    const _ = (s = this.headers.Prefer) === null || s === void 0 ? void 0 : s.match(/count=(exact|planned|estimated)/), g = (o = n.headers.get("content-range")) === null || o === void 0 ? void 0 : o.split("/");
                    _ && g && g.length > 1 && (c = parseInt(g[1]));
                } else if (a = yield n.json(), a && this.shouldThrowOnError) throw a;
                return {
                    error: a,
                    data: u,
                    count: c,
                    status: n.status,
                    statusText: n.statusText,
                    body: u
                };
            })).then(e, t);
    }
}
class Ce extends Re {
    select(e = "*") {
        let t = !1;
        const n = e.split("").map((i)=>/\s/.test(i) && !t ? "" : (i === '"' && (t = !t), i)).join("");
        return this.url.searchParams.set("select", n), this;
    }
    order(e, { ascending: t = !0 , nullsFirst: n = !1 , foreignTable: i  } = {}) {
        const s = typeof i == "undefined" ? "order" : `${i}.order`, o = this.url.searchParams.get(s);
        return this.url.searchParams.set(s, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}.${n ? "nullsfirst" : "nullslast"}`), this;
    }
    limit(e, { foreignTable: t  } = {}) {
        const n = typeof t == "undefined" ? "limit" : `${t}.limit`;
        return this.url.searchParams.set(n, `${e}`), this;
    }
    range(e, t, { foreignTable: n  } = {}) {
        const i = typeof n == "undefined" ? "offset" : `${n}.offset`, s = typeof n == "undefined" ? "limit" : `${n}.limit`;
        return this.url.searchParams.set(i, `${e}`), this.url.searchParams.set(s, `${t - e + 1}`), this;
    }
    single() {
        return this.headers.Accept = "application/vnd.pgrst.object+json", this;
    }
    maybeSingle() {
        this.headers.Accept = "application/vnd.pgrst.object+json";
        const e = new Ce(this);
        return e.then = (t, n)=>this.then((i)=>{
                var s, o;
                return ((o = (s = i.error) === null || s === void 0 ? void 0 : s.details) === null || o === void 0 ? void 0 : o.includes("Results contain 0 rows")) ? t({
                    error: null,
                    data: null,
                    count: i.count,
                    status: 200,
                    statusText: "OK",
                    body: null
                }) : t(i);
            }, n), e;
    }
    csv() {
        return this.headers.Accept = "text/csv", this;
    }
}
class G extends Ce {
    constructor(){
        super(...arguments);
        this.cs = this.contains, this.cd = this.containedBy, this.sl = this.rangeLt, this.sr = this.rangeGt, this.nxl = this.rangeGte, this.nxr = this.rangeLte, this.adj = this.rangeAdjacent, this.ov = this.overlaps;
    }
    not(e, t, n) {
        return this.url.searchParams.append(`${e}`, `not.${t}.${n}`), this;
    }
    or(e, { foreignTable: t  } = {}) {
        const n = typeof t == "undefined" ? "or" : `${t}.or`;
        return this.url.searchParams.append(n, `(${e})`), this;
    }
    eq(e, t) {
        return this.url.searchParams.append(`${e}`, `eq.${t}`), this;
    }
    neq(e, t) {
        return this.url.searchParams.append(`${e}`, `neq.${t}`), this;
    }
    gt(e, t) {
        return this.url.searchParams.append(`${e}`, `gt.${t}`), this;
    }
    gte(e, t) {
        return this.url.searchParams.append(`${e}`, `gte.${t}`), this;
    }
    lt(e, t) {
        return this.url.searchParams.append(`${e}`, `lt.${t}`), this;
    }
    lte(e, t) {
        return this.url.searchParams.append(`${e}`, `lte.${t}`), this;
    }
    like(e, t) {
        return this.url.searchParams.append(`${e}`, `like.${t}`), this;
    }
    ilike(e, t) {
        return this.url.searchParams.append(`${e}`, `ilike.${t}`), this;
    }
    is(e, t) {
        return this.url.searchParams.append(`${e}`, `is.${t}`), this;
    }
    in(e, t) {
        const n = t.map((i)=>typeof i == "string" && new RegExp("[,()]").test(i) ? `"${i}"` : `${i}`).join(",");
        return this.url.searchParams.append(`${e}`, `in.(${n})`), this;
    }
    contains(e, t) {
        return typeof t == "string" ? this.url.searchParams.append(`${e}`, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(`${e}`, `cs.{${t.join(",")}}`) : this.url.searchParams.append(`${e}`, `cs.${JSON.stringify(t)}`), this;
    }
    containedBy(e, t) {
        return typeof t == "string" ? this.url.searchParams.append(`${e}`, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(`${e}`, `cd.{${t.join(",")}}`) : this.url.searchParams.append(`${e}`, `cd.${JSON.stringify(t)}`), this;
    }
    rangeLt(e, t) {
        return this.url.searchParams.append(`${e}`, `sl.${t}`), this;
    }
    rangeGt(e, t) {
        return this.url.searchParams.append(`${e}`, `sr.${t}`), this;
    }
    rangeGte(e, t) {
        return this.url.searchParams.append(`${e}`, `nxl.${t}`), this;
    }
    rangeLte(e, t) {
        return this.url.searchParams.append(`${e}`, `nxr.${t}`), this;
    }
    rangeAdjacent(e, t) {
        return this.url.searchParams.append(`${e}`, `adj.${t}`), this;
    }
    overlaps(e, t) {
        return typeof t == "string" ? this.url.searchParams.append(`${e}`, `ov.${t}`) : this.url.searchParams.append(`${e}`, `ov.{${t.join(",")}}`), this;
    }
    textSearch(e, t, { config: n , type: i = null  } = {}) {
        let s = "";
        i === "plain" ? s = "pl" : i === "phrase" ? s = "ph" : i === "websearch" && (s = "w");
        const o = n === void 0 ? "" : `(${n})`;
        return this.url.searchParams.append(`${e}`, `${s}fts${o}.${t}`), this;
    }
    fts(e, t, { config: n  } = {}) {
        const i = typeof n == "undefined" ? "" : `(${n})`;
        return this.url.searchParams.append(`${e}`, `fts${i}.${t}`), this;
    }
    plfts(e, t, { config: n  } = {}) {
        const i = typeof n == "undefined" ? "" : `(${n})`;
        return this.url.searchParams.append(`${e}`, `plfts${i}.${t}`), this;
    }
    phfts(e, t, { config: n  } = {}) {
        const i = typeof n == "undefined" ? "" : `(${n})`;
        return this.url.searchParams.append(`${e}`, `phfts${i}.${t}`), this;
    }
    wfts(e, t, { config: n  } = {}) {
        const i = typeof n == "undefined" ? "" : `(${n})`;
        return this.url.searchParams.append(`${e}`, `wfts${i}.${t}`), this;
    }
    filter(e, t, n) {
        return this.url.searchParams.append(`${e}`, `${t}.${n}`), this;
    }
    match(e) {
        return Object.keys(e).forEach((t)=>{
            this.url.searchParams.append(`${t}`, `eq.${e[t]}`);
        }), this;
    }
}
class ot extends Re {
    constructor(e, { headers: t = {} , schema: n  } = {}){
        super({});
        this.url = new URL(e), this.headers = Object.assign({}, t), this.schema = n;
    }
    select(e = "*", { head: t = !1 , count: n = null  } = {}) {
        this.method = "GET";
        let i = !1;
        const s = e.split("").map((o)=>/\s/.test(o) && !i ? "" : (o === '"' && (i = !i), o)).join("");
        return this.url.searchParams.set("select", s), n && (this.headers.Prefer = `count=${n}`), t && (this.method = "HEAD"), new G(this);
    }
    insert(e, { upsert: t = !1 , onConflict: n , returning: i = "representation" , count: s = null  } = {}) {
        this.method = "POST";
        const o = [
            `return=${i}`
        ];
        if (t && o.push("resolution=merge-duplicates"), t && n !== void 0 && this.url.searchParams.set("on_conflict", n), this.body = e, s && o.push(`count=${s}`), this.headers.Prefer = o.join(","), Array.isArray(e)) {
            const a = e.reduce((u, c)=>u.concat(Object.keys(c)), []);
            if (a.length > 0) {
                const u = [
                    ...new Set(a)
                ].map((c)=>`"${c}"`);
                this.url.searchParams.set("columns", u.join(","));
            }
        }
        return new G(this);
    }
    upsert(e, { onConflict: t , returning: n = "representation" , count: i = null , ignoreDuplicates: s = !1  } = {}) {
        this.method = "POST";
        const o = [
            `resolution=${s ? "ignore" : "merge"}-duplicates`,
            `return=${n}`
        ];
        return t !== void 0 && this.url.searchParams.set("on_conflict", t), this.body = e, i && o.push(`count=${i}`), this.headers.Prefer = o.join(","), new G(this);
    }
    update(e, { returning: t = "representation" , count: n = null  } = {}) {
        this.method = "PATCH";
        const i = [
            `return=${t}`
        ];
        return this.body = e, n && i.push(`count=${n}`), this.headers.Prefer = i.join(","), new G(this);
    }
    delete({ returning: e = "representation" , count: t = null  } = {}) {
        this.method = "DELETE";
        const n = [
            `return=${e}`
        ];
        return t && n.push(`count=${t}`), this.headers.Prefer = n.join(","), new G(this);
    }
}
class jr extends Re {
    constructor(e, { headers: t = {} , schema: n  } = {}){
        super({});
        this.url = new URL(e), this.headers = Object.assign({}, t), this.schema = n;
    }
    rpc(e, { count: t = null  } = {}) {
        return this.method = "POST", this.body = e, t && (this.headers.Prefer !== void 0 ? this.headers.Prefer += `,count=${t}` : this.headers.Prefer = `count=${t}`), new G(this);
    }
}
const Or = "0.33.3", Rr = {
    "X-Client-Info": `postgrest-js/${Or}`
};
class Cr {
    constructor(e, { headers: t = {} , schema: n  } = {}){
        this.url = e, this.headers = Object.assign(Object.assign({}, Rr), t), this.schema = n;
    }
    auth(e) {
        return this.headers.Authorization = `Bearer ${e}`, this;
    }
    from(e) {
        const t = `${this.url}/${e}`;
        return new ot(t, {
            headers: this.headers,
            schema: this.schema
        });
    }
    rpc(e, t, { count: n = null  } = {}) {
        const i = `${this.url}/rpc/${e}`;
        return new jr(i, {
            headers: this.headers,
            schema: this.schema
        }).rpc(t, {
            count: n
        });
    }
}
var v;
(function(r) {
    r.abstime = "abstime", r.bool = "bool", r.date = "date", r.daterange = "daterange", r.float4 = "float4", r.float8 = "float8", r.int2 = "int2", r.int4 = "int4", r.int4range = "int4range", r.int8 = "int8", r.int8range = "int8range", r.json = "json", r.jsonb = "jsonb", r.money = "money", r.numeric = "numeric", r.oid = "oid", r.reltime = "reltime", r.time = "time", r.timestamp = "timestamp", r.timestamptz = "timestamptz", r.timetz = "timetz", r.tsrange = "tsrange", r.tstzrange = "tstzrange";
})(v || (v = {}));
const at = (r, e, t = {})=>{
    let n = {}, i = typeof t.skipTypes != "undefined" ? t.skipTypes : [];
    return Object.entries(e).map(([s, o])=>{
        n[s] = Ar(s, r, e, i);
    }), n;
}, Ar = (r, e, t, n)=>{
    let i = e.find((s)=>s.name == r);
    return !i || n.includes(i.type) ? U(t[r]) : ct(i.type, t[r]);
}, ct = (r, e)=>{
    try {
        if (e === null) return null;
        if (r.charAt(0) === "_") {
            let t = r.slice(1, r.length);
            return Ir(e, t);
        }
        switch(r){
            case v.abstime:
                return U(e);
            case v.bool:
                return Pr(e);
            case v.date:
                return U(e);
            case v.daterange:
                return Ae(e);
            case v.float4:
                return me(e);
            case v.float8:
                return me(e);
            case v.int2:
                return _e(e);
            case v.int4:
                return _e(e);
            case v.int4range:
                return ut(e);
            case v.int8:
                return _e(e);
            case v.int8range:
                return ut(e);
            case v.json:
                return lt(e);
            case v.jsonb:
                return lt(e);
            case v.money:
                return me(e);
            case v.numeric:
                return me(e);
            case v.oid:
                return _e(e);
            case v.reltime:
                return U(e);
            case v.time:
                return U(e);
            case v.timestamp:
                return Ur(e);
            case v.timestamptz:
                return U(e);
            case v.timetz:
                return U(e);
            case v.tsrange:
                return Ae(e);
            case v.tstzrange:
                return Ae(e);
            default:
                return U(e);
        }
    } catch (t) {
        return console.log(`Could not convert cell of type ${r} and value ${e}`), console.log(`This is the error: ${t}`), e;
    }
}, U = (r)=>r, Pr = (r)=>{
    switch(r){
        case "t":
            return !0;
        case "f":
            return !1;
        default:
            return null;
    }
}, Ae = (r)=>{
    let e = JSON.parse(r);
    return [
        new Date(e[0]),
        new Date(e[1])
    ];
}, me = (r)=>parseFloat(r), _e = (r)=>parseInt(r), ut = (r)=>{
    let e = JSON.parse(r);
    return [
        parseInt(e[0]),
        parseInt(e[1])
    ];
}, lt = (r)=>JSON.parse(r), Ir = (r, e)=>{
    let t = r.slice(1, r.length - 1);
    return (t.length > 0 ? t.split(",") : []).map((s)=>ct(e, s));
}, Ur = (r)=>r.replace(" ", "T"), Dr = "1.1.3", Nr = {
    "X-Client-Info": `realtime-js/${Dr}`
}, Br = "1.0.0", ht = 1e4, Lr = 1e3;
var V;
(function(r) {
    r[r.connecting = 0] = "connecting", r[r.open = 1] = "open", r[r.closing = 2] = "closing", r[r.closed = 3] = "closed";
})(V || (V = {}));
var E;
(function(r) {
    r.closed = "closed", r.errored = "errored", r.joined = "joined", r.joining = "joining", r.leaving = "leaving";
})(E || (E = {}));
var O;
(function(r) {
    r.close = "phx_close", r.error = "phx_error", r.join = "phx_join", r.reply = "phx_reply", r.leave = "phx_leave";
})(O || (O = {}));
var Pe;
(function(r) {
    r.websocket = "websocket";
})(Pe || (Pe = {}));
class dt {
    constructor(e, t){
        this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t;
    }
    reset() {
        this.tries = 0, clearTimeout(this.timer);
    }
    scheduleTimeout() {
        clearTimeout(this.timer), this.timer = setTimeout(()=>{
            this.tries = this.tries + 1, this.callback();
        }, this.timerCalc(this.tries + 1));
    }
}
class Ie {
    constructor(e, t, n = {}, i = ht){
        this.channel = e, this.event = t, this.payload = n, this.timeout = i, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
    }
    resend(e) {
        this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref
        }));
    }
    receive(e, t) {
        var n;
        return this._hasReceived(e) && t((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response), this.recHooks.push({
            status: e,
            callback: t
        }), this;
    }
    startTimeout() {
        this.timeoutTimer || (this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (e)=>{
            this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = e, this._matchReceive(e);
        }), this.timeoutTimer = setTimeout(()=>{
            this.trigger("timeout", {});
        }, this.timeout));
    }
    trigger(e, t) {
        this.refEvent && this.channel.trigger(this.refEvent, {
            status: e,
            response: t
        });
    }
    destroy() {
        this._cancelRefEvent(), this._cancelTimeout();
    }
    _cancelRefEvent() {
        !this.refEvent || this.channel.off(this.refEvent);
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
    }
    _matchReceive({ status: e , response: t  }) {
        this.recHooks.filter((n)=>n.status === e).forEach((n)=>n.callback(t));
    }
    _hasReceived(e) {
        return this.receivedResp && this.receivedResp.status === e;
    }
}
class Mr {
    constructor(e, t = {}, n){
        this.topic = e, this.params = t, this.socket = n, this.bindings = [], this.state = E.closed, this.joinedOnce = !1, this.pushBuffer = [], this.timeout = this.socket.timeout, this.joinPush = new Ie(this, O.join, this.params, this.timeout), this.rejoinTimer = new dt(()=>this.rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", ()=>{
            this.state = E.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((i)=>i.send()), this.pushBuffer = [];
        }), this.onClose(()=>{
            this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`), this.state = E.closed, this.socket.remove(this);
        }), this.onError((i)=>{
            this.isLeaving() || this.isClosed() || (this.socket.log("channel", `error ${this.topic}`, i), this.state = E.errored, this.rejoinTimer.scheduleTimeout());
        }), this.joinPush.receive("timeout", ()=>{
            !this.isJoining() || (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = E.errored, this.rejoinTimer.scheduleTimeout());
        }), this.on(O.reply, (i, s)=>{
            this.trigger(this.replyEventName(s), i);
        });
    }
    rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this.rejoin();
    }
    subscribe(e = this.timeout) {
        if (this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
        return this.joinedOnce = !0, this.rejoin(e), this.joinPush;
    }
    onClose(e) {
        this.on(O.close, e);
    }
    onError(e) {
        this.on(O.error, (t)=>e(t));
    }
    on(e, t) {
        this.bindings.push({
            event: e,
            callback: t
        });
    }
    off(e) {
        this.bindings = this.bindings.filter((t)=>t.event !== e);
    }
    canPush() {
        return this.socket.isConnected() && this.isJoined();
    }
    push(e, t, n = this.timeout) {
        if (!this.joinedOnce) throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let i = new Ie(this, e, t, n);
        return this.canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i;
    }
    unsubscribe(e = this.timeout) {
        this.state = E.leaving;
        let t = ()=>{
            this.socket.log("channel", `leave ${this.topic}`), this.trigger(O.close, "leave", this.joinRef());
        };
        this.joinPush.destroy();
        let n = new Ie(this, O.leave, {}, e);
        return n.receive("ok", ()=>t()).receive("timeout", ()=>t()), n.send(), this.canPush() || n.trigger("ok", {}), n;
    }
    onMessage(e, t, n) {
        return t;
    }
    isMember(e) {
        return this.topic === e;
    }
    joinRef() {
        return this.joinPush.ref;
    }
    sendJoin(e) {
        this.state = E.joining, this.joinPush.resend(e);
    }
    rejoin(e = this.timeout) {
        this.isLeaving() || this.sendJoin(e);
    }
    trigger(e, t, n) {
        let { close: i , error: s , leave: o , join: a  } = O;
        if (n && [
            i,
            s,
            o,
            a
        ].indexOf(e) >= 0 && n !== this.joinRef()) return;
        let c = this.onMessage(e, t, n);
        if (t && !c) throw "channel onMessage callbacks must return the payload, modified or unmodified";
        this.bindings.filter((h)=>h.event === "*" ? e === (t == null ? void 0 : t.type) : h.event === e).map((h)=>h.callback(c, n));
    }
    replyEventName(e) {
        return `chan_reply_${e}`;
    }
    isClosed() {
        return this.state === E.closed;
    }
    isErrored() {
        return this.state === E.errored;
    }
    isJoined() {
        return this.state === E.joined;
    }
    isJoining() {
        return this.state === E.joining;
    }
    isLeaving() {
        return this.state === E.leaving;
    }
}
var ft = function() {
    if (typeof self == "object" && self) return self;
    if (typeof window == "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
}, Hr = function() {
    if (this) return this;
    if (typeof globalThis == "object" && globalThis) return globalThis;
    try {
        Object.defineProperty(Object.prototype, "__global__", {
            get: function() {
                return this;
            },
            configurable: !0
        });
    } catch (r) {
        return ft();
    }
    try {
        return __global__ || ft();
    } finally{
        delete Object.prototype.__global__;
    }
}();
const Fr = [
    [
        "websocket@1.0.34",
        "/opt/build/repo/client"
    ]
], qr = "websocket@1.0.34", Gr = "websocket@1.0.34", zr = !1, Jr = "sha512-PRDso2sGwF6kM75QykIesBijKSVceR6jL2G8NGYyq2XrItNC2P5/qL5XeR056GhA+Ly7JMFvJb9I312mJfmqnQ==", Wr = "/websocket", Xr = {}, Kr = {
    type: "version",
    registry: !0,
    raw: "websocket@1.0.34",
    name: "websocket",
    escapedName: "websocket",
    rawSpec: "1.0.34",
    saveSpec: null,
    fetchSpec: "1.0.34"
}, Yr = [
    "/@supabase/realtime-js"
], Qr = "https://registry.npmjs.org/websocket/-/websocket-1.0.34.tgz", Zr = "1.0.34", Vr = "/opt/build/repo/client", en = {
    name: "Brian McKelvey",
    email: "theturtle32@gmail.com",
    url: "https://github.com/theturtle32"
}, tn = "lib/browser.js", rn = {
    url: "https://github.com/theturtle32/WebSocket-Node/issues"
}, nn = {
    verbose: !1
}, sn = [
    {
        name: "I\xf1aki Baz Castillo",
        email: "ibc@aliax.net",
        url: "http://dev.sipdoc.net"
    }
], on = {
    bufferutil: "^4.0.1",
    debug: "^2.2.0",
    "es5-ext": "^0.10.50",
    "typedarray-to-buffer": "^3.1.5",
    "utf-8-validate": "^5.0.2",
    yaeti: "^0.0.6"
}, an = "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.", cn = {
    "buffer-equal": "^1.0.0",
    gulp: "^4.0.2",
    "gulp-jshint": "^2.0.4",
    jshint: "^2.0.0",
    "jshint-stylish": "^2.2.1",
    tape: "^4.9.1"
}, un = {
    lib: "./lib"
}, ln = {
    node: ">=4.0.0"
}, hn = "https://github.com/theturtle32/WebSocket-Node", dn = [
    "websocket",
    "websockets",
    "socket",
    "networking",
    "comet",
    "push",
    "RFC-6455",
    "realtime",
    "server",
    "client"
], fn = "Apache-2.0", pn = "index", mn = "websocket", _n = {
    type: "git",
    url: "git+https://github.com/theturtle32/WebSocket-Node.git"
}, yn = {
    gulp: "gulp",
    test: "tape test/unit/*.js"
}, vn = "1.0.34";
var gn = {
    _args: Fr,
    _from: qr,
    _id: Gr,
    _inBundle: zr,
    _integrity: Jr,
    _location: Wr,
    _phantomChildren: Xr,
    _requested: Kr,
    _requiredBy: Yr,
    _resolved: Qr,
    _spec: Zr,
    _where: Vr,
    author: en,
    browser: tn,
    bugs: rn,
    config: nn,
    contributors: sn,
    dependencies: on,
    description: an,
    devDependencies: cn,
    directories: un,
    engines: ln,
    homepage: hn,
    keywords: dn,
    license: fn,
    main: pn,
    name: mn,
    repository: _n,
    scripts: yn,
    version: vn
}, bn = gn.version, L;
if (typeof globalThis == "object") L = globalThis;
else try {
    L = Hr;
} catch (r) {} finally{
    if (!L && typeof window != "undefined" && (L = window), !L) throw new Error("Could not determine global this");
}
var ee = L.WebSocket || L.MozWebSocket, wn = bn;
function pt(r, e) {
    var t;
    return e ? t = new ee(r, e) : t = new ee(r), t;
}
ee && [
    "CONNECTING",
    "OPEN",
    "CLOSING",
    "CLOSED"
].forEach(function(r) {
    Object.defineProperty(pt, r, {
        get: function() {
            return ee[r];
        }
    });
});
var $n = {
    w3cwebsocket: ee ? pt : null,
    version: wn
};
class Sn {
    constructor(){
        this.HEADER_LENGTH = 1;
    }
    decode(e, t) {
        return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : t(typeof e == "string" ? JSON.parse(e) : {});
    }
    _binaryDecode(e) {
        const t = new DataView(e), n = new TextDecoder;
        return this._decodeBroadcast(e, t, n);
    }
    _decodeBroadcast(e, t, n) {
        const i = t.getUint8(1), s = t.getUint8(2);
        let o = this.HEADER_LENGTH + 2;
        const a = n.decode(e.slice(o, o + i));
        o = o + i;
        const u = n.decode(e.slice(o, o + s));
        o = o + s;
        const c = JSON.parse(n.decode(e.slice(o, e.byteLength)));
        return {
            ref: null,
            topic: a,
            event: u,
            payload: c
        };
    }
}
var kn = function(r, e, t, n) {
    function i(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s);
        });
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(h) {
            try {
                c(n.next(h));
            } catch (d) {
                o(d);
            }
        }
        function u(h) {
            try {
                c(n.throw(h));
            } catch (d) {
                o(d);
            }
        }
        function c(h) {
            h.done ? s(h.value) : i(h.value).then(a, u);
        }
        c((n = n.apply(r, e || [])).next());
    });
};
const En = ()=>{};
class xn {
    constructor(e, t){
        this.channels = [], this.endPoint = "", this.headers = Nr, this.params = {}, this.timeout = ht, this.transport = $n.w3cwebsocket, this.heartbeatIntervalMs = 3e4, this.longpollerTimeout = 2e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = En, this.conn = null, this.sendBuffer = [], this.serializer = new Sn, this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        }, this.endPoint = `${e}/${Pe.websocket}`, (t == null ? void 0 : t.params) && (this.params = t.params), (t == null ? void 0 : t.headers) && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)), (t == null ? void 0 : t.timeout) && (this.timeout = t.timeout), (t == null ? void 0 : t.logger) && (this.logger = t.logger), (t == null ? void 0 : t.transport) && (this.transport = t.transport), (t == null ? void 0 : t.heartbeatIntervalMs) && (this.heartbeatIntervalMs = t.heartbeatIntervalMs), (t == null ? void 0 : t.longpollerTimeout) && (this.longpollerTimeout = t.longpollerTimeout), this.reconnectAfterMs = (t == null ? void 0 : t.reconnectAfterMs) ? t.reconnectAfterMs : (n)=>[
                1e3,
                2e3,
                5e3,
                1e4
            ][n - 1] || 1e4, this.encode = (t == null ? void 0 : t.encode) ? t.encode : (n, i)=>i(JSON.stringify(n)), this.decode = (t == null ? void 0 : t.decode) ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new dt(()=>kn(this, void 0, void 0, function*() {
                yield this.disconnect(), this.connect();
            }), this.reconnectAfterMs);
    }
    connect() {
        this.conn || (this.conn = new this.transport(this.endPointURL(), [], null, this.headers), this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = ()=>this._onConnOpen(), this.conn.onerror = (e)=>this._onConnError(e), this.conn.onmessage = (e)=>this.onConnMessage(e), this.conn.onclose = (e)=>this._onConnClose(e)));
    }
    disconnect(e, t) {
        return new Promise((n, i)=>{
            try {
                this.conn && (this.conn.onclose = function() {}, e ? this.conn.close(e, t || "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset()), n({
                    error: null,
                    data: !0
                });
            } catch (s) {
                n({
                    error: s,
                    data: !1
                });
            }
        });
    }
    log(e, t, n) {
        this.logger(e, t, n);
    }
    onOpen(e) {
        this.stateChangeCallbacks.open.push(e);
    }
    onClose(e) {
        this.stateChangeCallbacks.close.push(e);
    }
    onError(e) {
        this.stateChangeCallbacks.error.push(e);
    }
    onMessage(e) {
        this.stateChangeCallbacks.message.push(e);
    }
    connectionState() {
        switch(this.conn && this.conn.readyState){
            case V.connecting:
                return "connecting";
            case V.open:
                return "open";
            case V.closing:
                return "closing";
            default:
                return "closed";
        }
    }
    isConnected() {
        return this.connectionState() === "open";
    }
    remove(e) {
        this.channels = this.channels.filter((t)=>t.joinRef() !== e.joinRef());
    }
    channel(e, t = {}) {
        let n = new Mr(e, t, this);
        return this.channels.push(n), n;
    }
    push(e) {
        let { topic: t , event: n , payload: i , ref: s  } = e, o = ()=>{
            this.encode(e, (a)=>{
                var u;
                (u = this.conn) === null || u === void 0 || u.send(a);
            });
        };
        this.log("push", `${t} ${n} (${s})`, i), this.isConnected() ? o() : this.sendBuffer.push(o);
    }
    onConnMessage(e) {
        this.decode(e.data, (t)=>{
            let { topic: n , event: i , payload: s , ref: o  } = t;
            o && o === this.pendingHeartbeatRef ? this.pendingHeartbeatRef = null : i === (s == null ? void 0 : s.type) && this._resetHeartbeat(), this.log("receive", `${s.status || ""} ${n} ${i} ${o && "(" + o + ")" || ""}`, s), this.channels.filter((a)=>a.isMember(n)).forEach((a)=>a.trigger(i, s, o)), this.stateChangeCallbacks.message.forEach((a)=>a(t));
        });
    }
    endPointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: Br
        }));
    }
    makeRef() {
        let e = this.ref + 1;
        return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
    }
    _onConnOpen() {
        this.log("transport", `connected to ${this.endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer.reset(), this._resetHeartbeat(), this.stateChangeCallbacks.open.forEach((e)=>e());
    }
    _onConnClose(e) {
        this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((t)=>t(e));
    }
    _onConnError(e) {
        this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((t)=>t(e));
    }
    _triggerChanError() {
        this.channels.forEach((e)=>e.trigger(O.error));
    }
    _appendParams(e, t) {
        if (Object.keys(t).length === 0) return e;
        const n = e.match(/\?/) ? "&" : "?", i = new URLSearchParams(t);
        return `${e}${n}${i}`;
    }
    _flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e)=>e()), this.sendBuffer = []);
    }
    _resetHeartbeat() {
        this.pendingHeartbeatRef = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(()=>this._sendHeartbeat(), this.heartbeatIntervalMs);
    }
    _sendHeartbeat() {
        var e;
        if (!!this.isConnected()) {
            if (this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (e = this.conn) === null || e === void 0 || e.close(Lr, "hearbeat timeout");
                return;
            }
            this.pendingHeartbeatRef = this.makeRef(), this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
            });
        }
    }
}
class Tn {
    constructor(e, t, n, i){
        const s = {}, o = i === "*" ? `realtime:${n}` : `realtime:${n}:${i}`, a = t.Authorization.split(" ")[1];
        a && (s.user_token = a), this.subscription = e.channel(o, s);
    }
    getPayloadRecords(e) {
        const t = {
            new: {},
            old: {}
        };
        return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = at(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = at(e.columns, e.old_record)), t;
    }
    on(e, t) {
        return this.subscription.on(e, (n)=>{
            let i = {
                schema: n.schema,
                table: n.table,
                commit_timestamp: n.commit_timestamp,
                eventType: n.type,
                new: {},
                old: {}
            };
            i = Object.assign(Object.assign({}, i), this.getPayloadRecords(n)), t(i);
        }), this;
    }
    subscribe(e = ()=>{}) {
        return this.subscription.onError((t)=>e("SUBSCRIPTION_ERROR", t)), this.subscription.onClose(()=>e("CLOSED")), this.subscription.subscribe().receive("ok", ()=>e("SUBSCRIBED")).receive("error", (t)=>e("SUBSCRIPTION_ERROR", t)).receive("timeout", ()=>e("RETRYING_AFTER_TIMEOUT")), this.subscription;
    }
}
class jn extends ot {
    constructor(e, { headers: t = {} , schema: n , realtime: i , table: s  }){
        super(e, {
            headers: t,
            schema: n
        });
        this._subscription = new Tn(i, t, n, s), this._realtime = i;
    }
    on(e, t) {
        return this._realtime.isConnected() || this._realtime.connect(), this._subscription.on(e, t);
    }
}
var te = function(r, e, t, n) {
    function i(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s);
        });
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(h) {
            try {
                c(n.next(h));
            } catch (d) {
                o(d);
            }
        }
        function u(h) {
            try {
                c(n.throw(h));
            } catch (d) {
                o(d);
            }
        }
        function c(h) {
            h.done ? s(h.value) : i(h.value).then(a, u);
        }
        c((n = n.apply(r, e || [])).next());
    });
};
const On = (r)=>r.msg || r.message || r.error_description || r.error || JSON.stringify(r), Rn = (r, e)=>{
    if (typeof r.json != "function") return e(r);
    r.json().then((t)=>e({
            message: On(t),
            status: (r == null ? void 0 : r.status) || 500
        }));
}, Cn = (r, e, t, n)=>{
    const i = {
        method: r,
        headers: (e == null ? void 0 : e.headers) || {}
    };
    return r === "GET" ? i : (i.headers = Object.assign({
        "Content-Type": "application/json"
    }, e == null ? void 0 : e.headers), i.body = JSON.stringify(n), Object.assign(Object.assign({}, i), t));
};
function ye(r, e, t, n, i) {
    return te(this, void 0, void 0, function*() {
        return new Promise((s, o)=>{
            de(e, Cn(r, t, n, i)).then((a)=>{
                if (!a.ok) throw a;
                return (t == null ? void 0 : t.noResolveJson) ? s(a) : a.json();
            }).then((a)=>s(a)).catch((a)=>Rn(a, o));
        });
    });
}
function Ue(r, e, t) {
    return te(this, void 0, void 0, function*() {
        return ye("GET", r, e, t);
    });
}
function re(r, e, t, n) {
    return te(this, void 0, void 0, function*() {
        return ye("POST", r, t, n, e);
    });
}
function An(r, e, t, n) {
    return te(this, void 0, void 0, function*() {
        return ye("PUT", r, t, n, e);
    });
}
function mt(r, e, t, n) {
    return te(this, void 0, void 0, function*() {
        return ye("DELETE", r, t, n, e);
    });
}
const Pn = "0.0.0", In = {
    "X-Client-Info": `storage-js/${Pn}`
};
var z = function(r, e, t, n) {
    function i(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s);
        });
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(h) {
            try {
                c(n.next(h));
            } catch (d) {
                o(d);
            }
        }
        function u(h) {
            try {
                c(n.throw(h));
            } catch (d) {
                o(d);
            }
        }
        function c(h) {
            h.done ? s(h.value) : i(h.value).then(a, u);
        }
        c((n = n.apply(r, e || [])).next());
    });
};
class Un {
    constructor(e, t = {}){
        this.url = e, this.headers = Object.assign(Object.assign({}, In), t);
    }
    listBuckets() {
        return z(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Ue(`${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                };
            } catch (e) {
                return {
                    data: null,
                    error: e
                };
            }
        });
    }
    getBucket(e) {
        return z(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Ue(`${this.url}/bucket/${e}`, {
                        headers: this.headers
                    }),
                    error: null
                };
            } catch (t) {
                return {
                    data: null,
                    error: t
                };
            }
        });
    }
    createBucket(e, t = {
        public: !1
    }) {
        return z(this, void 0, void 0, function*() {
            try {
                return {
                    data: (yield re(`${this.url}/bucket`, {
                        id: e,
                        name: e,
                        public: t.public
                    }, {
                        headers: this.headers
                    })).name,
                    error: null
                };
            } catch (n) {
                return {
                    data: null,
                    error: n
                };
            }
        });
    }
    updateBucket(e, t) {
        return z(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield An(`${this.url}/bucket/${e}`, {
                        id: e,
                        name: e,
                        public: t.public
                    }, {
                        headers: this.headers
                    }),
                    error: null
                };
            } catch (n) {
                return {
                    data: null,
                    error: n
                };
            }
        });
    }
    emptyBucket(e) {
        return z(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield re(`${this.url}/bucket/${e}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                };
            } catch (t) {
                return {
                    data: null,
                    error: t
                };
            }
        });
    }
    deleteBucket(e) {
        return z(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield mt(`${this.url}/bucket/${e}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                };
            } catch (t) {
                return {
                    data: null,
                    error: t
                };
            }
        });
    }
}
var D = function(r, e, t, n) {
    function i(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s);
        });
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(h) {
            try {
                c(n.next(h));
            } catch (d) {
                o(d);
            }
        }
        function u(h) {
            try {
                c(n.throw(h));
            } catch (d) {
                o(d);
            }
        }
        function c(h) {
            h.done ? s(h.value) : i(h.value).then(a, u);
        }
        c((n = n.apply(r, e || [])).next());
    });
};
const Dn = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}, Nn = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
class Bn {
    constructor(e, t = {}, n){
        this.url = e, this.headers = t, this.bucketId = n;
    }
    uploadOrUpdate(e, t, n, i) {
        return D(this, void 0, void 0, function*() {
            try {
                let s;
                const o = Object.assign(Object.assign({}, Nn), i), a = Object.assign(Object.assign({}, this.headers), e === "POST" && {
                    "x-upsert": String(o.upsert)
                });
                typeof Blob != "undefined" && n instanceof Blob ? (s = new FormData, s.append("cacheControl", o.cacheControl), s.append("", n)) : typeof FormData != "undefined" && n instanceof FormData ? (s = n, s.append("cacheControl", o.cacheControl)) : (s = n, a["cache-control"] = `max-age=${o.cacheControl}`, a["content-type"] = o.contentType);
                const u = this._getFinalPath(t), c = yield de(`${this.url}/object/${u}`, {
                    method: e,
                    body: s,
                    headers: a
                });
                if (c.ok) return {
                    data: {
                        Key: u
                    },
                    error: null
                };
                {
                    const h = yield c.json();
                    return {
                        data: null,
                        error: h
                    };
                }
            } catch (s) {
                return {
                    data: null,
                    error: s
                };
            }
        });
    }
    upload(e, t, n) {
        return D(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", e, t, n);
        });
    }
    update(e, t, n) {
        return D(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", e, t, n);
        });
    }
    move(e, t) {
        return D(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield re(`${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: e,
                        destinationKey: t
                    }, {
                        headers: this.headers
                    }),
                    error: null
                };
            } catch (n) {
                return {
                    data: null,
                    error: n
                };
            }
        });
    }
    createSignedUrl(e, t) {
        return D(this, void 0, void 0, function*() {
            try {
                const n = this._getFinalPath(e);
                let i = yield re(`${this.url}/object/sign/${n}`, {
                    expiresIn: t
                }, {
                    headers: this.headers
                });
                const s = `${this.url}${i.signedURL}`;
                return i = {
                    signedURL: s
                }, {
                    data: i,
                    error: null,
                    signedURL: s
                };
            } catch (n) {
                return {
                    data: null,
                    error: n,
                    signedURL: null
                };
            }
        });
    }
    download(e) {
        return D(this, void 0, void 0, function*() {
            try {
                const t = this._getFinalPath(e);
                return {
                    data: yield (yield Ue(`${this.url}/object/${t}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                };
            } catch (t) {
                return {
                    data: null,
                    error: t
                };
            }
        });
    }
    getPublicUrl(e) {
        try {
            const t = this._getFinalPath(e), n = `${this.url}/object/public/${t}`;
            return {
                data: {
                    publicURL: n
                },
                error: null,
                publicURL: n
            };
        } catch (t) {
            return {
                data: null,
                error: t,
                publicURL: null
            };
        }
    }
    remove(e) {
        return D(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield mt(`${this.url}/object/${this.bucketId}`, {
                        prefixes: e
                    }, {
                        headers: this.headers
                    }),
                    error: null
                };
            } catch (t) {
                return {
                    data: null,
                    error: t
                };
            }
        });
    }
    list(e, t, n) {
        return D(this, void 0, void 0, function*() {
            try {
                const i = Object.assign(Object.assign(Object.assign({}, Dn), t), {
                    prefix: e || ""
                });
                return {
                    data: yield re(`${this.url}/object/list/${this.bucketId}`, i, {
                        headers: this.headers
                    }, n),
                    error: null
                };
            } catch (i) {
                return {
                    data: null,
                    error: i
                };
            }
        });
    }
    _getFinalPath(e) {
        return `${this.bucketId}/${e}`;
    }
}
class Ln extends Un {
    constructor(e, t = {}){
        super(e, t);
    }
    from(e) {
        return new Bn(this.url, this.headers, e);
    }
}
var _t = function(r, e, t, n) {
    function i(s) {
        return s instanceof t ? s : new t(function(o) {
            o(s);
        });
    }
    return new (t || (t = Promise))(function(s, o) {
        function a(h) {
            try {
                c(n.next(h));
            } catch (d) {
                o(d);
            }
        }
        function u(h) {
            try {
                c(n.throw(h));
            } catch (d) {
                o(d);
            }
        }
        function c(h) {
            h.done ? s(h.value) : i(h.value).then(a, u);
        }
        c((n = n.apply(r, e || [])).next());
    });
};
const Mn = {
    schema: "public",
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: it
};
class Hn {
    constructor(e, t, n){
        if (this.supabaseUrl = e, this.supabaseKey = t, !e) throw new Error("supabaseUrl is required.");
        if (!t) throw new Error("supabaseKey is required.");
        e = sr(e);
        const i = Object.assign(Object.assign({}, Mn), n);
        this.restUrl = `${e}/rest/v1`, this.realtimeUrl = `${e}/realtime/v1`.replace("http", "ws"), this.authUrl = `${e}/auth/v1`, this.storageUrl = `${e}/storage/v1`, this.schema = i.schema, this.auth = this._initSupabaseAuthClient(i), this.realtime = this._initRealtimeClient(i.realtime);
    }
    get storage() {
        return new Ln(this.storageUrl, this._getAuthHeaders());
    }
    from(e) {
        const t = `${this.restUrl}/${e}`;
        return new jn(t, {
            headers: this._getAuthHeaders(),
            schema: this.schema,
            realtime: this.realtime,
            table: e
        });
    }
    rpc(e, t, { count: n = null  } = {}) {
        return this._initPostgRESTClient().rpc(e, t, {
            count: n
        });
    }
    removeSubscription(e) {
        return new Promise((t)=>_t(this, void 0, void 0, function*() {
                try {
                    yield this._closeSubscription(e);
                    const n = this.getSubscriptions().length;
                    if (!n) {
                        const { error: i  } = yield this.realtime.disconnect();
                        if (i) return t({
                            error: i
                        });
                    }
                    return t({
                        error: null,
                        data: {
                            openSubscriptions: n
                        }
                    });
                } catch (n) {
                    return t({
                        error: n
                    });
                }
            }));
    }
    _closeSubscription(e) {
        return _t(this, void 0, void 0, function*() {
            e.isClosed() || (yield this._closeChannel(e));
        });
    }
    getSubscriptions() {
        return this.realtime.channels;
    }
    _initSupabaseAuthClient({ autoRefreshToken: e , persistSession: t , detectSessionInUrl: n , localStorage: i , headers: s  }) {
        const o = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new xr({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, s), o),
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: n,
            localStorage: i
        });
    }
    _initRealtimeClient(e) {
        return new xn(this.realtimeUrl, Object.assign(Object.assign({}, e), {
            params: Object.assign(Object.assign({}, e == null ? void 0 : e.params), {
                apikey: this.supabaseKey
            })
        }));
    }
    _initPostgRESTClient() {
        return new Cr(this.restUrl, {
            headers: this._getAuthHeaders(),
            schema: this.schema
        });
    }
    _getAuthHeaders() {
        var e, t;
        const n = it, i = (t = (e = this.auth.session()) === null || e === void 0 ? void 0 : e.access_token) !== null && t !== void 0 ? t : this.supabaseKey;
        return n.apikey = this.supabaseKey, n.Authorization = `Bearer ${i}`, n;
    }
    _closeChannel(e) {
        return new Promise((t, n)=>{
            e.unsubscribe().receive("ok", ()=>(this.realtime.remove(e), t(!0))).receive("error", (i)=>n(i));
        });
    }
}
const Ri = (r, e, t)=>new Hn(r, e, t);
function Fn(r) {
    const e = r - 1;
    return e * e * e + 1;
}
function Ci(r) {
    return r < .5 ? 8 * Math.pow(r, 4) : -8 * Math.pow(r - 1, 4) + 1;
}
function Ai(r, { delay: e = 0 , duration: t = 400 , easing: n = Fn , x: i = 0 , y: s = 0 , opacity: o = 0  } = {}) {
    const a = getComputedStyle(r), u = +a.opacity, c = a.transform === "none" ? "" : a.transform, h = u * (1 - o);
    return {
        delay: e,
        duration: t,
        easing: n,
        css: (d, _)=>`
			transform: ${c} translate(${(1 - d) * i}px, ${(1 - d) * s}px);
			opacity: ${u - h * _}`
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8Nc3O"}]},["e0f9k"], null, "parcelRequire2bed")

//# sourceMappingURL=__layout.svelte-74dc8aaa.3b6abce6.js.map
