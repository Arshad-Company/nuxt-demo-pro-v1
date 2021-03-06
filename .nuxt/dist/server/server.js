module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/logo","2":"pages/_year/_month","3":"pages/about/index","4":"pages/blogs/_post","5":"pages/blogs/index","6":"pages/category/_category","7":"pages/common/homecarusal","8":"pages/common/sidebar","9":"pages/index","10":"pages/index backup","11":"pages/user/_id/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("property-information");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("53f61d5f", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1239d49d", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e61b4e3.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("fe1e6cd4", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-sanitize");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-content-placeholders");

/***/ }),
/* 20 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"xiteb_blog\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"xiteb_blog\"},{\"hid\":\"description\",\"name\":\"description\",\"content\":\"## Build Setup\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"xiteb_blog\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"xiteb_blog\"},{\"hid\":\"og:description\",\"name\":\"og:description\",\"property\":\"og:description\",\"content\":\"## Build Setup\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/_nuxt/icons/icon_64x64.5f6a36.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/_nuxt/icons/icon_512x512.5f6a36.png\",\"sizes\":\"512x512\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.d662c460.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
module.exports = __webpack_require__(38);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("54b08540", content, true)

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.1.2 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.border{\n  border-width:1px;\n}\n\n.table{\n  display:table;\n}\n\n.my-4{\n  margin-top:1rem;\n  margin-bottom:1rem;\n}\n\n*{\n  --tw-shadow:0 0 #0000;\n}\n\n*{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.text-left{\n  text-align:left;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("0d8b0c4d", content, true)

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "code[class*=language-],pre[class*=language-]{\n  color:#000;\n  background:none;\n  text-shadow:0 1px #fff;\n  font-family:Consolas,Monaco,\"Andale Mono\",\"Ubuntu Mono\",monospace;\n  font-size:1em;\n  text-align:left;\n  white-space:pre;\n  word-spacing:normal;\n  word-break:normal;\n  word-wrap:normal;\n  line-height:1.5;\n  -moz-tab-size:4;\n  -o-tab-size:4;\n  tab-size:4;\n  -webkit-hyphens:none;\n  -ms-hyphens:none;\n  hyphens:none\n}\n\ncode[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\ncode[class*=language-]::-moz-selection, code[class*=language-] ::-moz-selection, pre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\ncode[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\n@media print{\n  code[class*=language-],pre[class*=language-]{\n    text-shadow:none\n  }\n}\n\npre[class*=language-]{\n  padding:1em;\n  margin:.5em 0;\n  overflow:auto\n}\n\n:not(pre)>code[class*=language-],pre[class*=language-]{\n  background:#f5f2f0\n}\n\n:not(pre)>code[class*=language-]{\n  padding:.1em;\n  border-radius:.3em;\n  white-space:normal\n}\n\n.token.cdata,.token.comment,.token.doctype,.token.prolog{\n  color:#708090\n}\n\n.token.punctuation{\n  color:#999\n}\n\n.token.namespace{\n  opacity:.7\n}\n\n.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{\n  color:#905\n}\n\n.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{\n  color:#690\n}\n\n.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{\n  color:#9a6e3a;\n  background:hsla(0,0%,100%,.5)\n}\n\n.token.atrule,.token.attr-value,.token.keyword{\n  color:#07a\n}\n\n.token.class-name,.token.function{\n  color:#dd4a68\n}\n\n.token.important,.token.regex,.token.variable{\n  color:#e90\n}\n\n.token.bold,.token.important{\n  font-weight:700\n}\n\n.token.italic{\n  font-style:italic\n}\n\n.token.entity{\n  cursor:help\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{\n  font-family:\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\n  font-size:16px;\n  word-spacing:1px;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box\n}\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}\n.button--green{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #3b8070;\n  color:#3b8070;\n  text-decoration:none;\n  padding:10px 30px\n}\n.button--green:hover{\n  color:#fff;\n  background-color:#3b8070\n}\n.button--grey{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #35495e;\n  color:#35495e;\n  text-decoration:none;\n  padding:10px 30px;\n  margin-left:15px\n}\n.button--grey:hover{\n  color:#fff;\n  background-color:#35495e\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("9f5401de", content, true)

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Bootstrap v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n\n:root{\n  --blue:#007bff;\n  --indigo:#6610f2;\n  --purple:#6f42c1;\n  --pink:#e83e8c;\n  --red:#dc3545;\n  --orange:#fd7e14;\n  --yellow:#ffc107;\n  --green:#28a745;\n  --teal:#20c997;\n  --cyan:#17a2b8;\n  --white:#fff;\n  --gray:#6c757d;\n  --gray-dark:#343a40;\n  --primary:#007bff;\n  --secondary:#6c757d;\n  --success:#28a745;\n  --info:#17a2b8;\n  --warning:#ffc107;\n  --danger:#dc3545;\n  --light:#f8f9fa;\n  --dark:#343a40;\n  --breakpoint-xs:0;\n  --breakpoint-sm:576px;\n  --breakpoint-md:768px;\n  --breakpoint-lg:992px;\n  --breakpoint-xl:1200px;\n  --font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n  --font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace\n}\n\n*,:after,:before{\n  box-sizing:border-box\n}\n\nhtml{\n  font-family:sans-serif;\n  line-height:1.15;\n  -webkit-text-size-adjust:100%;\n  -webkit-tap-highlight-color:rgba(0,0,0,0)\n}\n\narticle,aside,figcaption,figure,footer,header,hgroup,main,nav,section{\n  display:block\n}\n\nbody{\n  margin:0;\n  font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n  font-size:1rem;\n  font-weight:400;\n  line-height:1.5;\n  color:#212529;\n  text-align:left;\n  background-color:#fff\n}\n\n[tabindex=\"-1\"]:focus:not(:focus-visible){\n  outline:0!important\n}\n\nhr{\n  box-sizing:content-box;\n  height:0;\n  overflow:visible\n}\n\nh1,h2,h3,h4,h5,h6{\n  margin-top:0;\n  margin-bottom:.5rem\n}\n\np{\n  margin-top:0;\n  margin-bottom:1rem\n}\n\nabbr[data-original-title],abbr[title]{\n  text-decoration:underline;\n  -webkit-text-decoration:underline dotted;\n  text-decoration:underline dotted;\n  cursor:help;\n  border-bottom:0;\n  -webkit-text-decoration-skip-ink:none;\n  text-decoration-skip-ink:none\n}\n\naddress{\n  font-style:normal;\n  line-height:inherit\n}\n\naddress,dl,ol,ul{\n  margin-bottom:1rem\n}\n\ndl,ol,ul{\n  margin-top:0\n}\n\nol ol,ol ul,ul ol,ul ul{\n  margin-bottom:0\n}\n\ndt{\n  font-weight:700\n}\n\ndd{\n  margin-bottom:.5rem;\n  margin-left:0\n}\n\nblockquote{\n  margin:0 0 1rem\n}\n\nb,strong{\n  font-weight:bolder\n}\n\nsmall{\n  font-size:80%\n}\n\nsub,sup{\n  position:relative;\n  font-size:75%;\n  line-height:0;\n  vertical-align:baseline\n}\n\nsub{\n  bottom:-.25em\n}\n\nsup{\n  top:-.5em\n}\n\na{\n  color:#007bff;\n  text-decoration:none;\n  background-color:transparent\n}\n\na:hover{\n  color:#0056b3;\n  text-decoration:underline\n}\n\na:not([href]):not([class]),a:not([href]):not([class]):hover{\n  color:inherit;\n  text-decoration:none\n}\n\ncode,kbd,pre,samp{\n  font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;\n  font-size:1em\n}\n\npre{\n  margin-top:0;\n  margin-bottom:1rem;\n  overflow:auto;\n  -ms-overflow-style:scrollbar\n}\n\nfigure{\n  margin:0 0 1rem\n}\n\nimg{\n  border-style:none\n}\n\nimg,svg{\n  vertical-align:middle\n}\n\nsvg{\n  overflow:hidden\n}\n\ntable{\n  border-collapse:collapse\n}\n\ncaption{\n  padding-top:.75rem;\n  padding-bottom:.75rem;\n  color:#6c757d;\n  text-align:left;\n  caption-side:bottom\n}\n\nth{\n  text-align:inherit;\n  text-align:-webkit-match-parent\n}\n\nlabel{\n  display:inline-block;\n  margin-bottom:.5rem\n}\n\nbutton{\n  border-radius:0\n}\n\nbutton:focus:not(:focus-visible){\n  outline:0\n}\n\nbutton,input,optgroup,select,textarea{\n  margin:0;\n  font-family:inherit;\n  font-size:inherit;\n  line-height:inherit\n}\n\nbutton,input{\n  overflow:visible\n}\n\nbutton,select{\n  text-transform:none\n}\n\n[role=button]{\n  cursor:pointer\n}\n\nselect{\n  word-wrap:normal\n}\n\n[type=button],[type=reset],[type=submit],button{\n  -webkit-appearance:button\n}\n\n[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){\n  cursor:pointer\n}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{\n  padding:0;\n  border-style:none\n}\n\ninput[type=checkbox],input[type=radio]{\n  box-sizing:border-box;\n  padding:0\n}\n\ntextarea{\n  overflow:auto;\n  resize:vertical\n}\n\nfieldset{\n  min-width:0;\n  padding:0;\n  margin:0;\n  border:0\n}\n\nlegend{\n  display:block;\n  width:100%;\n  max-width:100%;\n  padding:0;\n  margin-bottom:.5rem;\n  font-size:1.5rem;\n  line-height:inherit;\n  color:inherit;\n  white-space:normal\n}\n\nprogress{\n  vertical-align:baseline\n}\n\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{\n  height:auto\n}\n\n[type=search]{\n  outline-offset:-2px;\n  -webkit-appearance:none\n}\n\n[type=search]::-webkit-search-decoration{\n  -webkit-appearance:none\n}\n\n::-webkit-file-upload-button{\n  font:inherit;\n  -webkit-appearance:button\n}\n\noutput{\n  display:inline-block\n}\n\nsummary{\n  display:list-item;\n  cursor:pointer\n}\n\ntemplate{\n  display:none\n}\n\n[hidden]{\n  display:none!important\n}\n\n.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{\n  margin-bottom:.5rem;\n  font-weight:500;\n  line-height:1.2\n}\n\n.h1,h1{\n  font-size:2.5rem\n}\n\n.h2,h2{\n  font-size:2rem\n}\n\n.h3,h3{\n  font-size:1.75rem\n}\n\n.h4,h4{\n  font-size:1.5rem\n}\n\n.h5,h5{\n  font-size:1.25rem\n}\n\n.h6,h6{\n  font-size:1rem\n}\n\n.lead{\n  font-size:1.25rem;\n  font-weight:300\n}\n\n.display-1{\n  font-size:6rem\n}\n\n.display-1,.display-2{\n  font-weight:300;\n  line-height:1.2\n}\n\n.display-2{\n  font-size:5.5rem\n}\n\n.display-3{\n  font-size:4.5rem\n}\n\n.display-3,.display-4{\n  font-weight:300;\n  line-height:1.2\n}\n\n.display-4{\n  font-size:3.5rem\n}\n\nhr{\n  margin-top:1rem;\n  margin-bottom:1rem;\n  border:0;\n  border-top:1px solid rgba(0,0,0,.1)\n}\n\n.small,small{\n  font-size:80%;\n  font-weight:400\n}\n\n.mark,mark{\n  padding:.2em;\n  background-color:#fcf8e3\n}\n\n.list-inline,.list-unstyled{\n  padding-left:0;\n  list-style:none\n}\n\n.list-inline-item{\n  display:inline-block\n}\n\n.list-inline-item:not(:last-child){\n  margin-right:.5rem\n}\n\n.initialism{\n  font-size:90%;\n  text-transform:uppercase\n}\n\n.blockquote{\n  margin-bottom:1rem;\n  font-size:1.25rem\n}\n\n.blockquote-footer{\n  display:block;\n  font-size:80%;\n  color:#6c757d\n}\n\n.blockquote-footer:before{\n  content:\"\\2014\\00A0\"\n}\n\n.img-fluid,.img-thumbnail{\n  max-width:100%;\n  height:auto\n}\n\n.img-thumbnail{\n  padding:.25rem;\n  background-color:#fff;\n  border:1px solid #dee2e6;\n  border-radius:.25rem\n}\n\n.figure{\n  display:inline-block\n}\n\n.figure-img{\n  margin-bottom:.5rem;\n  line-height:1\n}\n\n.figure-caption{\n  font-size:90%;\n  color:#6c757d\n}\n\ncode{\n  font-size:87.5%;\n  color:#e83e8c;\n  word-wrap:break-word\n}\n\na>code{\n  color:inherit\n}\n\nkbd{\n  padding:.2rem .4rem;\n  font-size:87.5%;\n  color:#fff;\n  background-color:#212529;\n  border-radius:.2rem\n}\n\nkbd kbd{\n  padding:0;\n  font-size:100%;\n  font-weight:700\n}\n\npre{\n  display:block;\n  font-size:87.5%;\n  color:#212529\n}\n\npre code{\n  font-size:inherit;\n  color:inherit;\n  word-break:normal\n}\n\n.pre-scrollable{\n  max-height:340px;\n  overflow-y:scroll\n}\n\n.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{\n  width:100%;\n  padding-right:15px;\n  padding-left:15px;\n  margin-right:auto;\n  margin-left:auto\n}\n\n@media (min-width:576px){\n  .container,.container-sm{\n    max-width:540px\n  }\n}\n\n@media (min-width:768px){\n  .container,.container-md,.container-sm{\n    max-width:720px\n  }\n}\n\n@media (min-width:992px){\n  .container,.container-lg,.container-md,.container-sm{\n    max-width:960px\n  }\n}\n\n@media (min-width:1200px){\n  .container,.container-lg,.container-md,.container-sm,.container-xl{\n    max-width:1140px\n  }\n}\n\n.row{\n  display:flex;\n  flex-wrap:wrap;\n  margin-right:-15px;\n  margin-left:-15px\n}\n\n.no-gutters{\n  margin-right:0;\n  margin-left:0\n}\n\n.no-gutters>.col,.no-gutters>[class*=col-]{\n  padding-right:0;\n  padding-left:0\n}\n\n.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{\n  position:relative;\n  width:100%;\n  padding-right:15px;\n  padding-left:15px\n}\n\n.col{\n  flex-basis:0;\n  flex-grow:1;\n  max-width:100%\n}\n\n.row-cols-1>*{\n  flex:0 0 100%;\n  max-width:100%\n}\n\n.row-cols-2>*{\n  flex:0 0 50%;\n  max-width:50%\n}\n\n.row-cols-3>*{\n  flex:0 0 33.333333%;\n  max-width:33.333333%\n}\n\n.row-cols-4>*{\n  flex:0 0 25%;\n  max-width:25%\n}\n\n.row-cols-5>*{\n  flex:0 0 20%;\n  max-width:20%\n}\n\n.row-cols-6>*{\n  flex:0 0 16.666667%;\n  max-width:16.666667%\n}\n\n.col-auto{\n  flex:0 0 auto;\n  width:auto;\n  max-width:100%\n}\n\n.col-1{\n  flex:0 0 8.333333%;\n  max-width:8.333333%\n}\n\n.col-2{\n  flex:0 0 16.666667%;\n  max-width:16.666667%\n}\n\n.col-3{\n  flex:0 0 25%;\n  max-width:25%\n}\n\n.col-4{\n  flex:0 0 33.333333%;\n  max-width:33.333333%\n}\n\n.col-5{\n  flex:0 0 41.666667%;\n  max-width:41.666667%\n}\n\n.col-6{\n  flex:0 0 50%;\n  max-width:50%\n}\n\n.col-7{\n  flex:0 0 58.333333%;\n  max-width:58.333333%\n}\n\n.col-8{\n  flex:0 0 66.666667%;\n  max-width:66.666667%\n}\n\n.col-9{\n  flex:0 0 75%;\n  max-width:75%\n}\n\n.col-10{\n  flex:0 0 83.333333%;\n  max-width:83.333333%\n}\n\n.col-11{\n  flex:0 0 91.666667%;\n  max-width:91.666667%\n}\n\n.col-12{\n  flex:0 0 100%;\n  max-width:100%\n}\n\n.order-first{\n  order:-1\n}\n\n.order-last{\n  order:13\n}\n\n.order-0{\n  order:0\n}\n\n.order-1{\n  order:1\n}\n\n.order-2{\n  order:2\n}\n\n.order-3{\n  order:3\n}\n\n.order-4{\n  order:4\n}\n\n.order-5{\n  order:5\n}\n\n.order-6{\n  order:6\n}\n\n.order-7{\n  order:7\n}\n\n.order-8{\n  order:8\n}\n\n.order-9{\n  order:9\n}\n\n.order-10{\n  order:10\n}\n\n.order-11{\n  order:11\n}\n\n.order-12{\n  order:12\n}\n\n.offset-1{\n  margin-left:8.333333%\n}\n\n.offset-2{\n  margin-left:16.666667%\n}\n\n.offset-3{\n  margin-left:25%\n}\n\n.offset-4{\n  margin-left:33.333333%\n}\n\n.offset-5{\n  margin-left:41.666667%\n}\n\n.offset-6{\n  margin-left:50%\n}\n\n.offset-7{\n  margin-left:58.333333%\n}\n\n.offset-8{\n  margin-left:66.666667%\n}\n\n.offset-9{\n  margin-left:75%\n}\n\n.offset-10{\n  margin-left:83.333333%\n}\n\n.offset-11{\n  margin-left:91.666667%\n}\n\n@media (min-width:576px){\n  .col-sm{\n    flex-basis:0;\n    flex-grow:1;\n    max-width:100%\n  }\n\n  .row-cols-sm-1>*{\n    flex:0 0 100%;\n    max-width:100%\n  }\n\n  .row-cols-sm-2>*{\n    flex:0 0 50%;\n    max-width:50%\n  }\n\n  .row-cols-sm-3>*{\n    flex:0 0 33.333333%;\n    max-width:33.333333%\n  }\n\n  .row-cols-sm-4>*{\n    flex:0 0 25%;\n    max-width:25%\n  }\n\n  .row-cols-sm-5>*{\n    flex:0 0 20%;\n    max-width:20%\n  }\n\n  .row-cols-sm-6>*{\n    flex:0 0 16.666667%;\n    max-width:16.666667%\n  }\n\n  .col-sm-auto{\n    flex:0 0 auto;\n    width:auto;\n    max-width:100%\n  }\n\n  .col-sm-1{\n    flex:0 0 8.333333%;\n    max-width:8.333333%\n  }\n\n  .col-sm-2{\n    flex:0 0 16.666667%;\n    max-width:16.666667%\n  }\n\n  .col-sm-3{\n    flex:0 0 25%;\n    max-width:25%\n  }\n\n  .col-sm-4{\n    flex:0 0 33.333333%;\n    max-width:33.333333%\n  }\n\n  .col-sm-5{\n    flex:0 0 41.666667%;\n    max-width:41.666667%\n  }\n\n  .col-sm-6{\n    flex:0 0 50%;\n    max-width:50%\n  }\n\n  .col-sm-7{\n    flex:0 0 58.333333%;\n    max-width:58.333333%\n  }\n\n  .col-sm-8{\n    flex:0 0 66.666667%;\n    max-width:66.666667%\n  }\n\n  .col-sm-9{\n    flex:0 0 75%;\n    max-width:75%\n  }\n\n  .col-sm-10{\n    flex:0 0 83.333333%;\n    max-width:83.333333%\n  }\n\n  .col-sm-11{\n    flex:0 0 91.666667%;\n    max-width:91.666667%\n  }\n\n  .col-sm-12{\n    flex:0 0 100%;\n    max-width:100%\n  }\n\n  .order-sm-first{\n    order:-1\n  }\n\n  .order-sm-last{\n    order:13\n  }\n\n  .order-sm-0{\n    order:0\n  }\n\n  .order-sm-1{\n    order:1\n  }\n\n  .order-sm-2{\n    order:2\n  }\n\n  .order-sm-3{\n    order:3\n  }\n\n  .order-sm-4{\n    order:4\n  }\n\n  .order-sm-5{\n    order:5\n  }\n\n  .order-sm-6{\n    order:6\n  }\n\n  .order-sm-7{\n    order:7\n  }\n\n  .order-sm-8{\n    order:8\n  }\n\n  .order-sm-9{\n    order:9\n  }\n\n  .order-sm-10{\n    order:10\n  }\n\n  .order-sm-11{\n    order:11\n  }\n\n  .order-sm-12{\n    order:12\n  }\n\n  .offset-sm-0{\n    margin-left:0\n  }\n\n  .offset-sm-1{\n    margin-left:8.333333%\n  }\n\n  .offset-sm-2{\n    margin-left:16.666667%\n  }\n\n  .offset-sm-3{\n    margin-left:25%\n  }\n\n  .offset-sm-4{\n    margin-left:33.333333%\n  }\n\n  .offset-sm-5{\n    margin-left:41.666667%\n  }\n\n  .offset-sm-6{\n    margin-left:50%\n  }\n\n  .offset-sm-7{\n    margin-left:58.333333%\n  }\n\n  .offset-sm-8{\n    margin-left:66.666667%\n  }\n\n  .offset-sm-9{\n    margin-left:75%\n  }\n\n  .offset-sm-10{\n    margin-left:83.333333%\n  }\n\n  .offset-sm-11{\n    margin-left:91.666667%\n  }\n}\n\n@media (min-width:768px){\n  .col-md{\n    flex-basis:0;\n    flex-grow:1;\n    max-width:100%\n  }\n\n  .row-cols-md-1>*{\n    flex:0 0 100%;\n    max-width:100%\n  }\n\n  .row-cols-md-2>*{\n    flex:0 0 50%;\n    max-width:50%\n  }\n\n  .row-cols-md-3>*{\n    flex:0 0 33.333333%;\n    max-width:33.333333%\n  }\n\n  .row-cols-md-4>*{\n    flex:0 0 25%;\n    max-width:25%\n  }\n\n  .row-cols-md-5>*{\n    flex:0 0 20%;\n    max-width:20%\n  }\n\n  .row-cols-md-6>*{\n    flex:0 0 16.666667%;\n    max-width:16.666667%\n  }\n\n  .col-md-auto{\n    flex:0 0 auto;\n    width:auto;\n    max-width:100%\n  }\n\n  .col-md-1{\n    flex:0 0 8.333333%;\n    max-width:8.333333%\n  }\n\n  .col-md-2{\n    flex:0 0 16.666667%;\n    max-width:16.666667%\n  }\n\n  .col-md-3{\n    flex:0 0 25%;\n    max-width:25%\n  }\n\n  .col-md-4{\n    flex:0 0 33.333333%;\n    max-width:33.333333%\n  }\n\n  .col-md-5{\n    flex:0 0 41.666667%;\n    max-width:41.666667%\n  }\n\n  .col-md-6{\n    flex:0 0 50%;\n    max-width:50%\n  }\n\n  .col-md-7{\n    flex:0 0 58.333333%;\n    max-width:58.333333%\n  }\n\n  .col-md-8{\n    flex:0 0 66.666667%;\n    max-width:66.666667%\n  }\n\n  .col-md-9{\n    flex:0 0 75%;\n    max-width:75%\n  }\n\n  .col-md-10{\n    flex:0 0 83.333333%;\n    max-width:83.333333%\n  }\n\n  .col-md-11{\n    flex:0 0 91.666667%;\n    max-width:91.666667%\n  }\n\n  .col-md-12{\n    flex:0 0 100%;\n    max-width:100%\n  }\n\n  .order-md-first{\n    order:-1\n  }\n\n  .order-md-last{\n    order:13\n  }\n\n  .order-md-0{\n    order:0\n  }\n\n  .order-md-1{\n    order:1\n  }\n\n  .order-md-2{\n    order:2\n  }\n\n  .order-md-3{\n    order:3\n  }\n\n  .order-md-4{\n    order:4\n  }\n\n  .order-md-5{\n    order:5\n  }\n\n  .order-md-6{\n    order:6\n  }\n\n  .order-md-7{\n    order:7\n  }\n\n  .order-md-8{\n    order:8\n  }\n\n  .order-md-9{\n    order:9\n  }\n\n  .order-md-10{\n    order:10\n  }\n\n  .order-md-11{\n    order:11\n  }\n\n  .order-md-12{\n    order:12\n  }\n\n  .offset-md-0{\n    margin-left:0\n  }\n\n  .offset-md-1{\n    margin-left:8.333333%\n  }\n\n  .offset-md-2{\n    margin-left:16.666667%\n  }\n\n  .offset-md-3{\n    margin-left:25%\n  }\n\n  .offset-md-4{\n    margin-left:33.333333%\n  }\n\n  .offset-md-5{\n    margin-left:41.666667%\n  }\n\n  .offset-md-6{\n    margin-left:50%\n  }\n\n  .offset-md-7{\n    margin-left:58.333333%\n  }\n\n  .offset-md-8{\n    margin-left:66.666667%\n  }\n\n  .offset-md-9{\n    margin-left:75%\n  }\n\n  .offset-md-10{\n    margin-left:83.333333%\n  }\n\n  .offset-md-11{\n    margin-left:91.666667%\n  }\n}\n\n@media (min-width:992px){\n  .col-lg{\n    flex-basis:0;\n    flex-grow:1;\n    max-width:100%\n  }\n\n  .row-cols-lg-1>*{\n    flex:0 0 100%;\n    max-width:100%\n  }\n\n  .row-cols-lg-2>*{\n    flex:0 0 50%;\n    max-width:50%\n  }\n\n  .row-cols-lg-3>*{\n    flex:0 0 33.333333%;\n    max-width:33.333333%\n  }\n\n  .row-cols-lg-4>*{\n    flex:0 0 25%;\n    max-width:25%\n  }\n\n  .row-cols-lg-5>*{\n    flex:0 0 20%;\n    max-width:20%\n  }\n\n  .row-cols-lg-6>*{\n    flex:0 0 16.666667%;\n    max-width:16.666667%\n  }\n\n  .col-lg-auto{\n    flex:0 0 auto;\n    width:auto;\n    max-width:100%\n  }\n\n  .col-lg-1{\n    flex:0 0 8.333333%;\n    max-width:8.333333%\n  }\n\n  .col-lg-2{\n    flex:0 0 16.666667%;\n    max-width:16.666667%\n  }\n\n  .col-lg-3{\n    flex:0 0 25%;\n    max-width:25%\n  }\n\n  .col-lg-4{\n    flex:0 0 33.333333%;\n    max-width:33.333333%\n  }\n\n  .col-lg-5{\n    flex:0 0 41.666667%;\n    max-width:41.666667%\n  }\n\n  .col-lg-6{\n    flex:0 0 50%;\n    max-width:50%\n  }\n\n  .col-lg-7{\n    flex:0 0 58.333333%;\n    max-width:58.333333%\n  }\n\n  .col-lg-8{\n    flex:0 0 66.666667%;\n    max-width:66.666667%\n  }\n\n  .col-lg-9{\n    flex:0 0 75%;\n    max-width:75%\n  }\n\n  .col-lg-10{\n    flex:0 0 83.333333%;\n    max-width:83.333333%\n  }\n\n  .col-lg-11{\n    flex:0 0 91.666667%;\n    max-width:91.666667%\n  }\n\n  .col-lg-12{\n    flex:0 0 100%;\n    max-width:100%\n  }\n\n  .order-lg-first{\n    order:-1\n  }\n\n  .order-lg-last{\n    order:13\n  }\n\n  .order-lg-0{\n    order:0\n  }\n\n  .order-lg-1{\n    order:1\n  }\n\n  .order-lg-2{\n    order:2\n  }\n\n  .order-lg-3{\n    order:3\n  }\n\n  .order-lg-4{\n    order:4\n  }\n\n  .order-lg-5{\n    order:5\n  }\n\n  .order-lg-6{\n    order:6\n  }\n\n  .order-lg-7{\n    order:7\n  }\n\n  .order-lg-8{\n    order:8\n  }\n\n  .order-lg-9{\n    order:9\n  }\n\n  .order-lg-10{\n    order:10\n  }\n\n  .order-lg-11{\n    order:11\n  }\n\n  .order-lg-12{\n    order:12\n  }\n\n  .offset-lg-0{\n    margin-left:0\n  }\n\n  .offset-lg-1{\n    margin-left:8.333333%\n  }\n\n  .offset-lg-2{\n    margin-left:16.666667%\n  }\n\n  .offset-lg-3{\n    margin-left:25%\n  }\n\n  .offset-lg-4{\n    margin-left:33.333333%\n  }\n\n  .offset-lg-5{\n    margin-left:41.666667%\n  }\n\n  .offset-lg-6{\n    margin-left:50%\n  }\n\n  .offset-lg-7{\n    margin-left:58.333333%\n  }\n\n  .offset-lg-8{\n    margin-left:66.666667%\n  }\n\n  .offset-lg-9{\n    margin-left:75%\n  }\n\n  .offset-lg-10{\n    margin-left:83.333333%\n  }\n\n  .offset-lg-11{\n    margin-left:91.666667%\n  }\n}\n\n@media (min-width:1200px){\n  .col-xl{\n    flex-basis:0;\n    flex-grow:1;\n    max-width:100%\n  }\n\n  .row-cols-xl-1>*{\n    flex:0 0 100%;\n    max-width:100%\n  }\n\n  .row-cols-xl-2>*{\n    flex:0 0 50%;\n    max-width:50%\n  }\n\n  .row-cols-xl-3>*{\n    flex:0 0 33.333333%;\n    max-width:33.333333%\n  }\n\n  .row-cols-xl-4>*{\n    flex:0 0 25%;\n    max-width:25%\n  }\n\n  .row-cols-xl-5>*{\n    flex:0 0 20%;\n    max-width:20%\n  }\n\n  .row-cols-xl-6>*{\n    flex:0 0 16.666667%;\n    max-width:16.666667%\n  }\n\n  .col-xl-auto{\n    flex:0 0 auto;\n    width:auto;\n    max-width:100%\n  }\n\n  .col-xl-1{\n    flex:0 0 8.333333%;\n    max-width:8.333333%\n  }\n\n  .col-xl-2{\n    flex:0 0 16.666667%;\n    max-width:16.666667%\n  }\n\n  .col-xl-3{\n    flex:0 0 25%;\n    max-width:25%\n  }\n\n  .col-xl-4{\n    flex:0 0 33.333333%;\n    max-width:33.333333%\n  }\n\n  .col-xl-5{\n    flex:0 0 41.666667%;\n    max-width:41.666667%\n  }\n\n  .col-xl-6{\n    flex:0 0 50%;\n    max-width:50%\n  }\n\n  .col-xl-7{\n    flex:0 0 58.333333%;\n    max-width:58.333333%\n  }\n\n  .col-xl-8{\n    flex:0 0 66.666667%;\n    max-width:66.666667%\n  }\n\n  .col-xl-9{\n    flex:0 0 75%;\n    max-width:75%\n  }\n\n  .col-xl-10{\n    flex:0 0 83.333333%;\n    max-width:83.333333%\n  }\n\n  .col-xl-11{\n    flex:0 0 91.666667%;\n    max-width:91.666667%\n  }\n\n  .col-xl-12{\n    flex:0 0 100%;\n    max-width:100%\n  }\n\n  .order-xl-first{\n    order:-1\n  }\n\n  .order-xl-last{\n    order:13\n  }\n\n  .order-xl-0{\n    order:0\n  }\n\n  .order-xl-1{\n    order:1\n  }\n\n  .order-xl-2{\n    order:2\n  }\n\n  .order-xl-3{\n    order:3\n  }\n\n  .order-xl-4{\n    order:4\n  }\n\n  .order-xl-5{\n    order:5\n  }\n\n  .order-xl-6{\n    order:6\n  }\n\n  .order-xl-7{\n    order:7\n  }\n\n  .order-xl-8{\n    order:8\n  }\n\n  .order-xl-9{\n    order:9\n  }\n\n  .order-xl-10{\n    order:10\n  }\n\n  .order-xl-11{\n    order:11\n  }\n\n  .order-xl-12{\n    order:12\n  }\n\n  .offset-xl-0{\n    margin-left:0\n  }\n\n  .offset-xl-1{\n    margin-left:8.333333%\n  }\n\n  .offset-xl-2{\n    margin-left:16.666667%\n  }\n\n  .offset-xl-3{\n    margin-left:25%\n  }\n\n  .offset-xl-4{\n    margin-left:33.333333%\n  }\n\n  .offset-xl-5{\n    margin-left:41.666667%\n  }\n\n  .offset-xl-6{\n    margin-left:50%\n  }\n\n  .offset-xl-7{\n    margin-left:58.333333%\n  }\n\n  .offset-xl-8{\n    margin-left:66.666667%\n  }\n\n  .offset-xl-9{\n    margin-left:75%\n  }\n\n  .offset-xl-10{\n    margin-left:83.333333%\n  }\n\n  .offset-xl-11{\n    margin-left:91.666667%\n  }\n}\n\n.table{\n  width:100%;\n  margin-bottom:1rem;\n  color:#212529\n}\n\n.table td,.table th{\n  padding:.75rem;\n  vertical-align:top;\n  border-top:1px solid #dee2e6\n}\n\n.table thead th{\n  vertical-align:bottom;\n  border-bottom:2px solid #dee2e6\n}\n\n.table tbody+tbody{\n  border-top:2px solid #dee2e6\n}\n\n.table-sm td,.table-sm th{\n  padding:.3rem\n}\n\n.table-bordered,.table-bordered td,.table-bordered th{\n  border:1px solid #dee2e6\n}\n\n.table-bordered thead td,.table-bordered thead th{\n  border-bottom-width:2px\n}\n\n.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{\n  border:0\n}\n\n.table-striped tbody tr:nth-of-type(odd){\n  background-color:rgba(0,0,0,.05)\n}\n\n.table-hover tbody tr:hover{\n  color:#212529;\n  background-color:rgba(0,0,0,.075)\n}\n\n.table-primary,.table-primary>td,.table-primary>th{\n  background-color:#b8daff\n}\n\n.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{\n  border-color:#7abaff\n}\n\n.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{\n  background-color:#9fcdff\n}\n\n.table-secondary,.table-secondary>td,.table-secondary>th{\n  background-color:#d6d8db\n}\n\n.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{\n  border-color:#b3b7bb\n}\n\n.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{\n  background-color:#c8cbcf\n}\n\n.table-success,.table-success>td,.table-success>th{\n  background-color:#c3e6cb\n}\n\n.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{\n  border-color:#8fd19e\n}\n\n.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{\n  background-color:#b1dfbb\n}\n\n.table-info,.table-info>td,.table-info>th{\n  background-color:#bee5eb\n}\n\n.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{\n  border-color:#86cfda\n}\n\n.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{\n  background-color:#abdde5\n}\n\n.table-warning,.table-warning>td,.table-warning>th{\n  background-color:#ffeeba\n}\n\n.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{\n  border-color:#ffdf7e\n}\n\n.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{\n  background-color:#ffe8a1\n}\n\n.table-danger,.table-danger>td,.table-danger>th{\n  background-color:#f5c6cb\n}\n\n.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{\n  border-color:#ed969e\n}\n\n.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{\n  background-color:#f1b0b7\n}\n\n.table-light,.table-light>td,.table-light>th{\n  background-color:#fdfdfe\n}\n\n.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{\n  border-color:#fbfcfc\n}\n\n.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{\n  background-color:#ececf6\n}\n\n.table-dark,.table-dark>td,.table-dark>th{\n  background-color:#c6c8ca\n}\n\n.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{\n  border-color:#95999c\n}\n\n.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{\n  background-color:#b9bbbe\n}\n\n.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{\n  background-color:rgba(0,0,0,.075)\n}\n\n.table .thead-dark th{\n  color:#fff;\n  background-color:#343a40;\n  border-color:#454d55\n}\n\n.table .thead-light th{\n  color:#495057;\n  background-color:#e9ecef;\n  border-color:#dee2e6\n}\n\n.table-dark{\n  color:#fff;\n  background-color:#343a40\n}\n\n.table-dark td,.table-dark th,.table-dark thead th{\n  border-color:#454d55\n}\n\n.table-dark.table-bordered{\n  border:0\n}\n\n.table-dark.table-striped tbody tr:nth-of-type(odd){\n  background-color:hsla(0,0%,100%,.05)\n}\n\n.table-dark.table-hover tbody tr:hover{\n  color:#fff;\n  background-color:hsla(0,0%,100%,.075)\n}\n\n@media (max-width:575.98px){\n  .table-responsive-sm{\n    display:block;\n    width:100%;\n    overflow-x:auto;\n    -webkit-overflow-scrolling:touch\n  }\n\n  .table-responsive-sm>.table-bordered{\n    border:0\n  }\n}\n\n@media (max-width:767.98px){\n  .table-responsive-md{\n    display:block;\n    width:100%;\n    overflow-x:auto;\n    -webkit-overflow-scrolling:touch\n  }\n\n  .table-responsive-md>.table-bordered{\n    border:0\n  }\n}\n\n@media (max-width:991.98px){\n  .table-responsive-lg{\n    display:block;\n    width:100%;\n    overflow-x:auto;\n    -webkit-overflow-scrolling:touch\n  }\n\n  .table-responsive-lg>.table-bordered{\n    border:0\n  }\n}\n\n@media (max-width:1199.98px){\n  .table-responsive-xl{\n    display:block;\n    width:100%;\n    overflow-x:auto;\n    -webkit-overflow-scrolling:touch\n  }\n\n  .table-responsive-xl>.table-bordered{\n    border:0\n  }\n}\n\n.table-responsive{\n  display:block;\n  width:100%;\n  overflow-x:auto;\n  -webkit-overflow-scrolling:touch\n}\n\n.table-responsive>.table-bordered{\n  border:0\n}\n\n.form-control{\n  display:block;\n  width:100%;\n  height:calc(1.5em + .75rem + 2px);\n  padding:.375rem .75rem;\n  font-size:1rem;\n  font-weight:400;\n  line-height:1.5;\n  color:#495057;\n  background-color:#fff;\n  background-clip:padding-box;\n  border:1px solid #ced4da;\n  border-radius:.25rem;\n  transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out\n}\n\n@media (prefers-reduced-motion:reduce){\n  .form-control{\n    transition:none\n  }\n}\n\n.form-control::-ms-expand{\n  background-color:transparent;\n  border:0\n}\n\n.form-control:-moz-focusring{\n  color:transparent;\n  text-shadow:0 0 0 #495057\n}\n\n.form-control:focus{\n  color:#495057;\n  background-color:#fff;\n  border-color:#80bdff;\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.form-control::-moz-placeholder{\n  color:#6c757d;\n  opacity:1\n}\n\n.form-control:-ms-input-placeholder{\n  color:#6c757d;\n  opacity:1\n}\n\n.form-control::placeholder{\n  color:#6c757d;\n  opacity:1\n}\n\n.form-control:disabled,.form-control[readonly]{\n  background-color:#e9ecef;\n  opacity:1\n}\n\ninput[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{\n  -webkit-appearance:none;\n  -moz-appearance:none;\n  appearance:none\n}\n\nselect.form-control:focus::-ms-value{\n  color:#495057;\n  background-color:#fff\n}\n\n.form-control-file,.form-control-range{\n  display:block;\n  width:100%\n}\n\n.col-form-label{\n  padding-top:calc(.375rem + 1px);\n  padding-bottom:calc(.375rem + 1px);\n  margin-bottom:0;\n  font-size:inherit;\n  line-height:1.5\n}\n\n.col-form-label-lg{\n  padding-top:calc(.5rem + 1px);\n  padding-bottom:calc(.5rem + 1px);\n  font-size:1.25rem;\n  line-height:1.5\n}\n\n.col-form-label-sm{\n  padding-top:calc(.25rem + 1px);\n  padding-bottom:calc(.25rem + 1px);\n  font-size:.875rem;\n  line-height:1.5\n}\n\n.form-control-plaintext{\n  display:block;\n  width:100%;\n  padding:.375rem 0;\n  margin-bottom:0;\n  font-size:1rem;\n  line-height:1.5;\n  color:#212529;\n  background-color:transparent;\n  border:solid transparent;\n  border-width:1px 0\n}\n\n.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{\n  padding-right:0;\n  padding-left:0\n}\n\n.form-control-sm{\n  height:calc(1.5em + .5rem + 2px);\n  padding:.25rem .5rem;\n  font-size:.875rem;\n  line-height:1.5;\n  border-radius:.2rem\n}\n\n.form-control-lg{\n  height:calc(1.5em + 1rem + 2px);\n  padding:.5rem 1rem;\n  font-size:1.25rem;\n  line-height:1.5;\n  border-radius:.3rem\n}\n\nselect.form-control[multiple],select.form-control[size],textarea.form-control{\n  height:auto\n}\n\n.form-group{\n  margin-bottom:1rem\n}\n\n.form-text{\n  display:block;\n  margin-top:.25rem\n}\n\n.form-row{\n  display:flex;\n  flex-wrap:wrap;\n  margin-right:-5px;\n  margin-left:-5px\n}\n\n.form-row>.col,.form-row>[class*=col-]{\n  padding-right:5px;\n  padding-left:5px\n}\n\n.form-check{\n  position:relative;\n  display:block;\n  padding-left:1.25rem\n}\n\n.form-check-input{\n  position:absolute;\n  margin-top:.3rem;\n  margin-left:-1.25rem\n}\n\n.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{\n  color:#6c757d\n}\n\n.form-check-label{\n  margin-bottom:0\n}\n\n.form-check-inline{\n  display:inline-flex;\n  align-items:center;\n  padding-left:0;\n  margin-right:.75rem\n}\n\n.form-check-inline .form-check-input{\n  position:static;\n  margin-top:0;\n  margin-right:.3125rem;\n  margin-left:0\n}\n\n.valid-feedback{\n  display:none;\n  width:100%;\n  margin-top:.25rem;\n  font-size:80%;\n  color:#28a745\n}\n\n.valid-tooltip{\n  position:absolute;\n  top:100%;\n  left:0;\n  z-index:5;\n  display:none;\n  max-width:100%;\n  padding:.25rem .5rem;\n  margin-top:.1rem;\n  font-size:.875rem;\n  line-height:1.5;\n  color:#fff;\n  background-color:rgba(40,167,69,.9);\n  border-radius:.25rem\n}\n\n.form-row>.col>.valid-tooltip,.form-row>[class*=col-]>.valid-tooltip{\n  left:5px\n}\n\n.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{\n  display:block\n}\n\n.form-control.is-valid,.was-validated .form-control:valid{\n  border-color:#28a745;\n  padding-right:calc(1.5em + .75rem);\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");\n  background-repeat:no-repeat;\n  background-position:right calc(.375em + .1875rem) center;\n  background-size:calc(.75em + .375rem) calc(.75em + .375rem)\n}\n\n.form-control.is-valid:focus,.was-validated .form-control:valid:focus{\n  border-color:#28a745;\n  box-shadow:0 0 0 .2rem rgba(40,167,69,.25)\n}\n\n.was-validated textarea.form-control:valid,textarea.form-control.is-valid{\n  padding-right:calc(1.5em + .75rem);\n  background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)\n}\n\n.custom-select.is-valid,.was-validated .custom-select:valid{\n  border-color:#28a745;\n  padding-right:calc(.75em + 2.3125rem);\n  background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat\n}\n\n.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{\n  border-color:#28a745;\n  box-shadow:0 0 0 .2rem rgba(40,167,69,.25)\n}\n\n.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{\n  color:#28a745\n}\n\n.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{\n  display:block\n}\n\n.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{\n  color:#28a745\n}\n\n.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{\n  border-color:#28a745\n}\n\n.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{\n  border-color:#34ce57;\n  background-color:#34ce57\n}\n\n.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{\n  box-shadow:0 0 0 .2rem rgba(40,167,69,.25)\n}\n\n.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:valid~.custom-file-label{\n  border-color:#28a745\n}\n\n.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{\n  border-color:#28a745;\n  box-shadow:0 0 0 .2rem rgba(40,167,69,.25)\n}\n\n.invalid-feedback{\n  display:none;\n  width:100%;\n  margin-top:.25rem;\n  font-size:80%;\n  color:#dc3545\n}\n\n.invalid-tooltip{\n  position:absolute;\n  top:100%;\n  left:0;\n  z-index:5;\n  display:none;\n  max-width:100%;\n  padding:.25rem .5rem;\n  margin-top:.1rem;\n  font-size:.875rem;\n  line-height:1.5;\n  color:#fff;\n  background-color:rgba(220,53,69,.9);\n  border-radius:.25rem\n}\n\n.form-row>.col>.invalid-tooltip,.form-row>[class*=col-]>.invalid-tooltip{\n  left:5px\n}\n\n.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{\n  display:block\n}\n\n.form-control.is-invalid,.was-validated .form-control:invalid{\n  border-color:#dc3545;\n  padding-right:calc(1.5em + .75rem);\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");\n  background-repeat:no-repeat;\n  background-position:right calc(.375em + .1875rem) center;\n  background-size:calc(.75em + .375rem) calc(.75em + .375rem)\n}\n\n.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{\n  border-color:#dc3545;\n  box-shadow:0 0 0 .2rem rgba(220,53,69,.25)\n}\n\n.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{\n  padding-right:calc(1.5em + .75rem);\n  background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)\n}\n\n.custom-select.is-invalid,.was-validated .custom-select:invalid{\n  border-color:#dc3545;\n  padding-right:calc(.75em + 2.3125rem);\n  background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat\n}\n\n.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{\n  border-color:#dc3545;\n  box-shadow:0 0 0 .2rem rgba(220,53,69,.25)\n}\n\n.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{\n  color:#dc3545\n}\n\n.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{\n  display:block\n}\n\n.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{\n  color:#dc3545\n}\n\n.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{\n  border-color:#dc3545\n}\n\n.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{\n  border-color:#e4606d;\n  background-color:#e4606d\n}\n\n.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{\n  box-shadow:0 0 0 .2rem rgba(220,53,69,.25)\n}\n\n.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:invalid~.custom-file-label{\n  border-color:#dc3545\n}\n\n.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{\n  border-color:#dc3545;\n  box-shadow:0 0 0 .2rem rgba(220,53,69,.25)\n}\n\n.form-inline{\n  display:flex;\n  flex-flow:row wrap;\n  align-items:center\n}\n\n.form-inline .form-check{\n  width:100%\n}\n\n@media (min-width:576px){\n  .form-inline label{\n    -ms-flex-align:center;\n    justify-content:center\n  }\n\n  .form-inline .form-group,.form-inline label{\n    display:flex;\n    align-items:center;\n    margin-bottom:0\n  }\n\n  .form-inline .form-group{\n    flex:0 0 auto;\n    flex-flow:row wrap;\n    -ms-flex-align:center\n  }\n\n  .form-inline .form-control{\n    display:inline-block;\n    width:auto;\n    vertical-align:middle\n  }\n\n  .form-inline .form-control-plaintext{\n    display:inline-block\n  }\n\n  .form-inline .custom-select,.form-inline .input-group{\n    width:auto\n  }\n\n  .form-inline .form-check{\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    width:auto;\n    padding-left:0\n  }\n\n  .form-inline .form-check-input{\n    position:relative;\n    flex-shrink:0;\n    margin-top:0;\n    margin-right:.25rem;\n    margin-left:0\n  }\n\n  .form-inline .custom-control{\n    align-items:center;\n    justify-content:center\n  }\n\n  .form-inline .custom-control-label{\n    margin-bottom:0\n  }\n}\n\n.btn{\n  display:inline-block;\n  font-weight:400;\n  color:#212529;\n  text-align:center;\n  vertical-align:middle;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  background-color:transparent;\n  border:1px solid transparent;\n  padding:.375rem .75rem;\n  font-size:1rem;\n  line-height:1.5;\n  border-radius:.25rem;\n  transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out\n}\n\n@media (prefers-reduced-motion:reduce){\n  .btn{\n    transition:none\n  }\n}\n\n.btn:hover{\n  color:#212529;\n  text-decoration:none\n}\n\n.btn.focus,.btn:focus{\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.btn.disabled,.btn:disabled{\n  opacity:.65\n}\n\n.btn:not(:disabled):not(.disabled){\n  cursor:pointer\n}\n\na.btn.disabled,fieldset:disabled a.btn{\n  pointer-events:none\n}\n\n.btn-primary{\n  color:#fff;\n  background-color:#007bff;\n  border-color:#007bff\n}\n\n.btn-primary.focus,.btn-primary:focus,.btn-primary:hover{\n  color:#fff;\n  background-color:#0069d9;\n  border-color:#0062cc\n}\n\n.btn-primary.focus,.btn-primary:focus{\n  box-shadow:0 0 0 .2rem rgba(38,143,255,.5)\n}\n\n.btn-primary.disabled,.btn-primary:disabled{\n  color:#fff;\n  background-color:#007bff;\n  border-color:#007bff\n}\n\n.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{\n  color:#fff;\n  background-color:#0062cc;\n  border-color:#005cbf\n}\n\n.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(38,143,255,.5)\n}\n\n.btn-secondary{\n  color:#fff;\n  background-color:#6c757d;\n  border-color:#6c757d\n}\n\n.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:hover{\n  color:#fff;\n  background-color:#5a6268;\n  border-color:#545b62\n}\n\n.btn-secondary.focus,.btn-secondary:focus{\n  box-shadow:0 0 0 .2rem rgba(130,138,145,.5)\n}\n\n.btn-secondary.disabled,.btn-secondary:disabled{\n  color:#fff;\n  background-color:#6c757d;\n  border-color:#6c757d\n}\n\n.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{\n  color:#fff;\n  background-color:#545b62;\n  border-color:#4e555b\n}\n\n.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(130,138,145,.5)\n}\n\n.btn-success{\n  color:#fff;\n  background-color:#28a745;\n  border-color:#28a745\n}\n\n.btn-success.focus,.btn-success:focus,.btn-success:hover{\n  color:#fff;\n  background-color:#218838;\n  border-color:#1e7e34\n}\n\n.btn-success.focus,.btn-success:focus{\n  box-shadow:0 0 0 .2rem rgba(72,180,97,.5)\n}\n\n.btn-success.disabled,.btn-success:disabled{\n  color:#fff;\n  background-color:#28a745;\n  border-color:#28a745\n}\n\n.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{\n  color:#fff;\n  background-color:#1e7e34;\n  border-color:#1c7430\n}\n\n.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(72,180,97,.5)\n}\n\n.btn-info{\n  color:#fff;\n  background-color:#17a2b8;\n  border-color:#17a2b8\n}\n\n.btn-info.focus,.btn-info:focus,.btn-info:hover{\n  color:#fff;\n  background-color:#138496;\n  border-color:#117a8b\n}\n\n.btn-info.focus,.btn-info:focus{\n  box-shadow:0 0 0 .2rem rgba(58,176,195,.5)\n}\n\n.btn-info.disabled,.btn-info:disabled{\n  color:#fff;\n  background-color:#17a2b8;\n  border-color:#17a2b8\n}\n\n.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{\n  color:#fff;\n  background-color:#117a8b;\n  border-color:#10707f\n}\n\n.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(58,176,195,.5)\n}\n\n.btn-warning{\n  color:#212529;\n  background-color:#ffc107;\n  border-color:#ffc107\n}\n\n.btn-warning.focus,.btn-warning:focus,.btn-warning:hover{\n  color:#212529;\n  background-color:#e0a800;\n  border-color:#d39e00\n}\n\n.btn-warning.focus,.btn-warning:focus{\n  box-shadow:0 0 0 .2rem rgba(222,170,12,.5)\n}\n\n.btn-warning.disabled,.btn-warning:disabled{\n  color:#212529;\n  background-color:#ffc107;\n  border-color:#ffc107\n}\n\n.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{\n  color:#212529;\n  background-color:#d39e00;\n  border-color:#c69500\n}\n\n.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(222,170,12,.5)\n}\n\n.btn-danger{\n  color:#fff;\n  background-color:#dc3545;\n  border-color:#dc3545\n}\n\n.btn-danger.focus,.btn-danger:focus,.btn-danger:hover{\n  color:#fff;\n  background-color:#c82333;\n  border-color:#bd2130\n}\n\n.btn-danger.focus,.btn-danger:focus{\n  box-shadow:0 0 0 .2rem rgba(225,83,97,.5)\n}\n\n.btn-danger.disabled,.btn-danger:disabled{\n  color:#fff;\n  background-color:#dc3545;\n  border-color:#dc3545\n}\n\n.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{\n  color:#fff;\n  background-color:#bd2130;\n  border-color:#b21f2d\n}\n\n.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(225,83,97,.5)\n}\n\n.btn-light{\n  color:#212529;\n  background-color:#f8f9fa;\n  border-color:#f8f9fa\n}\n\n.btn-light.focus,.btn-light:focus,.btn-light:hover{\n  color:#212529;\n  background-color:#e2e6ea;\n  border-color:#dae0e5\n}\n\n.btn-light.focus,.btn-light:focus{\n  box-shadow:0 0 0 .2rem rgba(216,217,219,.5)\n}\n\n.btn-light.disabled,.btn-light:disabled{\n  color:#212529;\n  background-color:#f8f9fa;\n  border-color:#f8f9fa\n}\n\n.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{\n  color:#212529;\n  background-color:#dae0e5;\n  border-color:#d3d9df\n}\n\n.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(216,217,219,.5)\n}\n\n.btn-dark{\n  color:#fff;\n  background-color:#343a40;\n  border-color:#343a40\n}\n\n.btn-dark.focus,.btn-dark:focus,.btn-dark:hover{\n  color:#fff;\n  background-color:#23272b;\n  border-color:#1d2124\n}\n\n.btn-dark.focus,.btn-dark:focus{\n  box-shadow:0 0 0 .2rem rgba(82,88,93,.5)\n}\n\n.btn-dark.disabled,.btn-dark:disabled{\n  color:#fff;\n  background-color:#343a40;\n  border-color:#343a40\n}\n\n.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{\n  color:#fff;\n  background-color:#1d2124;\n  border-color:#171a1d\n}\n\n.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(82,88,93,.5)\n}\n\n.btn-outline-primary{\n  color:#007bff;\n  border-color:#007bff\n}\n\n.btn-outline-primary:hover{\n  color:#fff;\n  background-color:#007bff;\n  border-color:#007bff\n}\n\n.btn-outline-primary.focus,.btn-outline-primary:focus{\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.5)\n}\n\n.btn-outline-primary.disabled,.btn-outline-primary:disabled{\n  color:#007bff;\n  background-color:transparent\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{\n  color:#fff;\n  background-color:#007bff;\n  border-color:#007bff\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.5)\n}\n\n.btn-outline-secondary{\n  color:#6c757d;\n  border-color:#6c757d\n}\n\n.btn-outline-secondary:hover{\n  color:#fff;\n  background-color:#6c757d;\n  border-color:#6c757d\n}\n\n.btn-outline-secondary.focus,.btn-outline-secondary:focus{\n  box-shadow:0 0 0 .2rem rgba(108,117,125,.5)\n}\n\n.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{\n  color:#6c757d;\n  background-color:transparent\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{\n  color:#fff;\n  background-color:#6c757d;\n  border-color:#6c757d\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(108,117,125,.5)\n}\n\n.btn-outline-success{\n  color:#28a745;\n  border-color:#28a745\n}\n\n.btn-outline-success:hover{\n  color:#fff;\n  background-color:#28a745;\n  border-color:#28a745\n}\n\n.btn-outline-success.focus,.btn-outline-success:focus{\n  box-shadow:0 0 0 .2rem rgba(40,167,69,.5)\n}\n\n.btn-outline-success.disabled,.btn-outline-success:disabled{\n  color:#28a745;\n  background-color:transparent\n}\n\n.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{\n  color:#fff;\n  background-color:#28a745;\n  border-color:#28a745\n}\n\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(40,167,69,.5)\n}\n\n.btn-outline-info{\n  color:#17a2b8;\n  border-color:#17a2b8\n}\n\n.btn-outline-info:hover{\n  color:#fff;\n  background-color:#17a2b8;\n  border-color:#17a2b8\n}\n\n.btn-outline-info.focus,.btn-outline-info:focus{\n  box-shadow:0 0 0 .2rem rgba(23,162,184,.5)\n}\n\n.btn-outline-info.disabled,.btn-outline-info:disabled{\n  color:#17a2b8;\n  background-color:transparent\n}\n\n.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{\n  color:#fff;\n  background-color:#17a2b8;\n  border-color:#17a2b8\n}\n\n.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(23,162,184,.5)\n}\n\n.btn-outline-warning{\n  color:#ffc107;\n  border-color:#ffc107\n}\n\n.btn-outline-warning:hover{\n  color:#212529;\n  background-color:#ffc107;\n  border-color:#ffc107\n}\n\n.btn-outline-warning.focus,.btn-outline-warning:focus{\n  box-shadow:0 0 0 .2rem rgba(255,193,7,.5)\n}\n\n.btn-outline-warning.disabled,.btn-outline-warning:disabled{\n  color:#ffc107;\n  background-color:transparent\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{\n  color:#212529;\n  background-color:#ffc107;\n  border-color:#ffc107\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(255,193,7,.5)\n}\n\n.btn-outline-danger{\n  color:#dc3545;\n  border-color:#dc3545\n}\n\n.btn-outline-danger:hover{\n  color:#fff;\n  background-color:#dc3545;\n  border-color:#dc3545\n}\n\n.btn-outline-danger.focus,.btn-outline-danger:focus{\n  box-shadow:0 0 0 .2rem rgba(220,53,69,.5)\n}\n\n.btn-outline-danger.disabled,.btn-outline-danger:disabled{\n  color:#dc3545;\n  background-color:transparent\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{\n  color:#fff;\n  background-color:#dc3545;\n  border-color:#dc3545\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(220,53,69,.5)\n}\n\n.btn-outline-light{\n  color:#f8f9fa;\n  border-color:#f8f9fa\n}\n\n.btn-outline-light:hover{\n  color:#212529;\n  background-color:#f8f9fa;\n  border-color:#f8f9fa\n}\n\n.btn-outline-light.focus,.btn-outline-light:focus{\n  box-shadow:0 0 0 .2rem rgba(248,249,250,.5)\n}\n\n.btn-outline-light.disabled,.btn-outline-light:disabled{\n  color:#f8f9fa;\n  background-color:transparent\n}\n\n.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{\n  color:#212529;\n  background-color:#f8f9fa;\n  border-color:#f8f9fa\n}\n\n.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(248,249,250,.5)\n}\n\n.btn-outline-dark{\n  color:#343a40;\n  border-color:#343a40\n}\n\n.btn-outline-dark:hover{\n  color:#fff;\n  background-color:#343a40;\n  border-color:#343a40\n}\n\n.btn-outline-dark.focus,.btn-outline-dark:focus{\n  box-shadow:0 0 0 .2rem rgba(52,58,64,.5)\n}\n\n.btn-outline-dark.disabled,.btn-outline-dark:disabled{\n  color:#343a40;\n  background-color:transparent\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{\n  color:#fff;\n  background-color:#343a40;\n  border-color:#343a40\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{\n  box-shadow:0 0 0 .2rem rgba(52,58,64,.5)\n}\n\n.btn-link{\n  font-weight:400;\n  color:#007bff;\n  text-decoration:none\n}\n\n.btn-link:hover{\n  color:#0056b3\n}\n\n.btn-link.focus,.btn-link:focus,.btn-link:hover{\n  text-decoration:underline\n}\n\n.btn-link.disabled,.btn-link:disabled{\n  color:#6c757d;\n  pointer-events:none\n}\n\n.btn-group-lg>.btn,.btn-lg{\n  padding:.5rem 1rem;\n  font-size:1.25rem;\n  line-height:1.5;\n  border-radius:.3rem\n}\n\n.btn-group-sm>.btn,.btn-sm{\n  padding:.25rem .5rem;\n  font-size:.875rem;\n  line-height:1.5;\n  border-radius:.2rem\n}\n\n.btn-block{\n  display:block;\n  width:100%\n}\n\n.btn-block+.btn-block{\n  margin-top:.5rem\n}\n\ninput[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{\n  width:100%\n}\n\n.fade{\n  transition:opacity .15s linear\n}\n\n@media (prefers-reduced-motion:reduce){\n  .fade{\n    transition:none\n  }\n}\n\n.fade:not(.show){\n  opacity:0\n}\n\n.collapse:not(.show){\n  display:none\n}\n\n.collapsing{\n  position:relative;\n  height:0;\n  overflow:hidden;\n  transition:height .35s ease\n}\n\n@media (prefers-reduced-motion:reduce){\n  .collapsing{\n    transition:none\n  }\n}\n\n.dropdown,.dropleft,.dropright,.dropup{\n  position:relative\n}\n\n.dropdown-toggle{\n  white-space:nowrap\n}\n\n.dropdown-toggle:after{\n  display:inline-block;\n  margin-left:.255em;\n  vertical-align:.255em;\n  content:\"\";\n  border-top:.3em solid;\n  border-right:.3em solid transparent;\n  border-bottom:0;\n  border-left:.3em solid transparent\n}\n\n.dropdown-toggle:empty:after{\n  margin-left:0\n}\n\n.dropdown-menu{\n  position:absolute;\n  top:100%;\n  left:0;\n  z-index:1000;\n  display:none;\n  float:left;\n  min-width:10rem;\n  padding:.5rem 0;\n  margin:.125rem 0 0;\n  font-size:1rem;\n  color:#212529;\n  text-align:left;\n  list-style:none;\n  background-color:#fff;\n  background-clip:padding-box;\n  border:1px solid rgba(0,0,0,.15);\n  border-radius:.25rem\n}\n\n.dropdown-menu-left{\n  right:auto;\n  left:0\n}\n\n.dropdown-menu-right{\n  right:0;\n  left:auto\n}\n\n@media (min-width:576px){\n  .dropdown-menu-sm-left{\n    right:auto;\n    left:0\n  }\n\n  .dropdown-menu-sm-right{\n    right:0;\n    left:auto\n  }\n}\n\n@media (min-width:768px){\n  .dropdown-menu-md-left{\n    right:auto;\n    left:0\n  }\n\n  .dropdown-menu-md-right{\n    right:0;\n    left:auto\n  }\n}\n\n@media (min-width:992px){\n  .dropdown-menu-lg-left{\n    right:auto;\n    left:0\n  }\n\n  .dropdown-menu-lg-right{\n    right:0;\n    left:auto\n  }\n}\n\n@media (min-width:1200px){\n  .dropdown-menu-xl-left{\n    right:auto;\n    left:0\n  }\n\n  .dropdown-menu-xl-right{\n    right:0;\n    left:auto\n  }\n}\n\n.dropup .dropdown-menu{\n  top:auto;\n  bottom:100%;\n  margin-top:0;\n  margin-bottom:.125rem\n}\n\n.dropup .dropdown-toggle:after{\n  display:inline-block;\n  margin-left:.255em;\n  vertical-align:.255em;\n  content:\"\";\n  border-top:0;\n  border-right:.3em solid transparent;\n  border-bottom:.3em solid;\n  border-left:.3em solid transparent\n}\n\n.dropup .dropdown-toggle:empty:after{\n  margin-left:0\n}\n\n.dropright .dropdown-menu{\n  top:0;\n  right:auto;\n  left:100%;\n  margin-top:0;\n  margin-left:.125rem\n}\n\n.dropright .dropdown-toggle:after{\n  display:inline-block;\n  margin-left:.255em;\n  vertical-align:.255em;\n  content:\"\";\n  border-top:.3em solid transparent;\n  border-right:0;\n  border-bottom:.3em solid transparent;\n  border-left:.3em solid\n}\n\n.dropright .dropdown-toggle:empty:after{\n  margin-left:0\n}\n\n.dropright .dropdown-toggle:after{\n  vertical-align:0\n}\n\n.dropleft .dropdown-menu{\n  top:0;\n  right:100%;\n  left:auto;\n  margin-top:0;\n  margin-right:.125rem\n}\n\n.dropleft .dropdown-toggle:after{\n  display:inline-block;\n  margin-left:.255em;\n  vertical-align:.255em;\n  content:\"\";\n  display:none\n}\n\n.dropleft .dropdown-toggle:before{\n  display:inline-block;\n  margin-right:.255em;\n  vertical-align:.255em;\n  content:\"\";\n  border-top:.3em solid transparent;\n  border-right:.3em solid;\n  border-bottom:.3em solid transparent\n}\n\n.dropleft .dropdown-toggle:empty:after{\n  margin-left:0\n}\n\n.dropleft .dropdown-toggle:before{\n  vertical-align:0\n}\n\n.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{\n  right:auto;\n  bottom:auto\n}\n\n.dropdown-divider{\n  height:0;\n  margin:.5rem 0;\n  overflow:hidden;\n  border-top:1px solid #e9ecef\n}\n\n.dropdown-item{\n  display:block;\n  width:100%;\n  padding:.25rem 1.5rem;\n  clear:both;\n  font-weight:400;\n  color:#212529;\n  text-align:inherit;\n  white-space:nowrap;\n  background-color:transparent;\n  border:0\n}\n\n.dropdown-item:focus,.dropdown-item:hover{\n  color:#16181b;\n  text-decoration:none;\n  background-color:#e9ecef\n}\n\n.dropdown-item.active,.dropdown-item:active{\n  color:#fff;\n  text-decoration:none;\n  background-color:#007bff\n}\n\n.dropdown-item.disabled,.dropdown-item:disabled{\n  color:#adb5bd;\n  pointer-events:none;\n  background-color:transparent\n}\n\n.dropdown-menu.show{\n  display:block\n}\n\n.dropdown-header{\n  display:block;\n  padding:.5rem 1.5rem;\n  margin-bottom:0;\n  font-size:.875rem;\n  color:#6c757d;\n  white-space:nowrap\n}\n\n.dropdown-item-text{\n  display:block;\n  padding:.25rem 1.5rem;\n  color:#212529\n}\n\n.btn-group,.btn-group-vertical{\n  position:relative;\n  display:inline-flex;\n  vertical-align:middle\n}\n\n.btn-group-vertical>.btn,.btn-group>.btn{\n  position:relative;\n  flex:1 1 auto\n}\n\n.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{\n  z-index:1\n}\n\n.btn-toolbar{\n  display:flex;\n  flex-wrap:wrap;\n  justify-content:flex-start\n}\n\n.btn-toolbar .input-group{\n  width:auto\n}\n\n.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){\n  margin-left:-1px\n}\n\n.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){\n  border-top-right-radius:0;\n  border-bottom-right-radius:0\n}\n\n.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){\n  border-top-left-radius:0;\n  border-bottom-left-radius:0\n}\n\n.dropdown-toggle-split{\n  padding-right:.5625rem;\n  padding-left:.5625rem\n}\n\n.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{\n  margin-left:0\n}\n\n.dropleft .dropdown-toggle-split:before{\n  margin-right:0\n}\n\n.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{\n  padding-right:.375rem;\n  padding-left:.375rem\n}\n\n.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{\n  padding-right:.75rem;\n  padding-left:.75rem\n}\n\n.btn-group-vertical{\n  flex-direction:column;\n  align-items:flex-start;\n  justify-content:center\n}\n\n.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{\n  width:100%\n}\n\n.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){\n  margin-top:-1px\n}\n\n.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){\n  border-bottom-right-radius:0;\n  border-bottom-left-radius:0\n}\n\n.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){\n  border-top-left-radius:0;\n  border-top-right-radius:0\n}\n\n.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{\n  margin-bottom:0\n}\n\n.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{\n  position:absolute;\n  clip:rect(0,0,0,0);\n  pointer-events:none\n}\n\n.input-group{\n  position:relative;\n  display:flex;\n  flex-wrap:wrap;\n  align-items:stretch;\n  width:100%\n}\n\n.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{\n  position:relative;\n  flex:1 1 auto;\n  width:1%;\n  min-width:0;\n  margin-bottom:0\n}\n\n.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{\n  margin-left:-1px\n}\n\n.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{\n  z-index:3\n}\n\n.input-group>.custom-file .custom-file-input:focus{\n  z-index:4\n}\n\n.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){\n  border-top-left-radius:0;\n  border-bottom-left-radius:0\n}\n\n.input-group>.custom-file{\n  display:flex;\n  align-items:center\n}\n\n.input-group>.custom-file:not(:first-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label{\n  border-top-left-radius:0;\n  border-bottom-left-radius:0\n}\n\n.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label:after,.input-group.has-validation>.custom-select:nth-last-child(n+3),.input-group.has-validation>.form-control:nth-last-child(n+3),.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label:after,.input-group:not(.has-validation)>.custom-select:not(:last-child),.input-group:not(.has-validation)>.form-control:not(:last-child){\n  border-top-right-radius:0;\n  border-bottom-right-radius:0\n}\n\n.input-group-append,.input-group-prepend{\n  display:flex\n}\n\n.input-group-append .btn,.input-group-prepend .btn{\n  position:relative;\n  z-index:2\n}\n\n.input-group-append .btn:focus,.input-group-prepend .btn:focus{\n  z-index:3\n}\n\n.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{\n  margin-left:-1px\n}\n\n.input-group-prepend{\n  margin-right:-1px\n}\n\n.input-group-append{\n  margin-left:-1px\n}\n\n.input-group-text{\n  display:flex;\n  align-items:center;\n  padding:.375rem .75rem;\n  margin-bottom:0;\n  font-size:1rem;\n  font-weight:400;\n  line-height:1.5;\n  color:#495057;\n  text-align:center;\n  white-space:nowrap;\n  background-color:#e9ecef;\n  border:1px solid #ced4da;\n  border-radius:.25rem\n}\n\n.input-group-text input[type=checkbox],.input-group-text input[type=radio]{\n  margin-top:0\n}\n\n.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){\n  height:calc(1.5em + 1rem + 2px)\n}\n\n.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{\n  padding:.5rem 1rem;\n  font-size:1.25rem;\n  line-height:1.5;\n  border-radius:.3rem\n}\n\n.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){\n  height:calc(1.5em + .5rem + 2px)\n}\n\n.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{\n  padding:.25rem .5rem;\n  font-size:.875rem;\n  line-height:1.5;\n  border-radius:.2rem\n}\n\n.input-group-lg>.custom-select,.input-group-sm>.custom-select{\n  padding-right:1.75rem\n}\n\n.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.btn,.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.input-group-text,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.btn,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{\n  border-top-right-radius:0;\n  border-bottom-right-radius:0\n}\n\n.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{\n  border-top-left-radius:0;\n  border-bottom-left-radius:0\n}\n\n.custom-control{\n  position:relative;\n  z-index:1;\n  display:block;\n  min-height:1.5rem;\n  padding-left:1.5rem;\n  -webkit-print-color-adjust:exact;\n  color-adjust:exact\n}\n\n.custom-control-inline{\n  display:inline-flex;\n  margin-right:1rem\n}\n\n.custom-control-input{\n  position:absolute;\n  left:0;\n  z-index:-1;\n  width:1rem;\n  height:1.25rem;\n  opacity:0\n}\n\n.custom-control-input:checked~.custom-control-label:before{\n  color:#fff;\n  border-color:#007bff;\n  background-color:#007bff\n}\n\n.custom-control-input:focus~.custom-control-label:before{\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.custom-control-input:focus:not(:checked)~.custom-control-label:before{\n  border-color:#80bdff\n}\n\n.custom-control-input:not(:disabled):active~.custom-control-label:before{\n  color:#fff;\n  background-color:#b3d7ff;\n  border-color:#b3d7ff\n}\n\n.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{\n  color:#6c757d\n}\n\n.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before{\n  background-color:#e9ecef\n}\n\n.custom-control-label{\n  position:relative;\n  margin-bottom:0;\n  vertical-align:top\n}\n\n.custom-control-label:before{\n  pointer-events:none;\n  background-color:#fff;\n  border:1px solid #adb5bd\n}\n\n.custom-control-label:after,.custom-control-label:before{\n  position:absolute;\n  top:.25rem;\n  left:-1.5rem;\n  display:block;\n  width:1rem;\n  height:1rem;\n  content:\"\"\n}\n\n.custom-control-label:after{\n  background:50%/50% 50% no-repeat\n}\n\n.custom-checkbox .custom-control-label:before{\n  border-radius:.25rem\n}\n\n.custom-checkbox .custom-control-input:checked~.custom-control-label:after{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E\")\n}\n\n.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{\n  border-color:#007bff;\n  background-color:#007bff\n}\n\n.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")\n}\n\n.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{\n  background-color:rgba(0,123,255,.5)\n}\n\n.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{\n  background-color:rgba(0,123,255,.5)\n}\n\n.custom-radio .custom-control-label:before{\n  border-radius:50%\n}\n\n.custom-radio .custom-control-input:checked~.custom-control-label:after{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")\n}\n\n.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{\n  background-color:rgba(0,123,255,.5)\n}\n\n.custom-switch{\n  padding-left:2.25rem\n}\n\n.custom-switch .custom-control-label:before{\n  left:-2.25rem;\n  width:1.75rem;\n  pointer-events:all;\n  border-radius:.5rem\n}\n\n.custom-switch .custom-control-label:after{\n  top:calc(.25rem + 2px);\n  left:calc(-2.25rem + 2px);\n  width:calc(1rem - 4px);\n  height:calc(1rem - 4px);\n  background-color:#adb5bd;\n  border-radius:.5rem;\n  transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out\n}\n\n@media (prefers-reduced-motion:reduce){\n  .custom-switch .custom-control-label:after{\n    transition:none\n  }\n}\n\n.custom-switch .custom-control-input:checked~.custom-control-label:after{\n  background-color:#fff;\n  transform:translateX(.75rem)\n}\n\n.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before{\n  background-color:rgba(0,123,255,.5)\n}\n\n.custom-select{\n  display:inline-block;\n  width:100%;\n  height:calc(1.5em + .75rem + 2px);\n  padding:.375rem 1.75rem .375rem .75rem;\n  font-size:1rem;\n  font-weight:400;\n  line-height:1.5;\n  color:#495057;\n  vertical-align:middle;\n  background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat;\n  border:1px solid #ced4da;\n  border-radius:.25rem;\n  -webkit-appearance:none;\n  -moz-appearance:none;\n  appearance:none\n}\n\n.custom-select:focus{\n  border-color:#80bdff;\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.custom-select:focus::-ms-value{\n  color:#495057;\n  background-color:#fff\n}\n\n.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){\n  height:auto;\n  padding-right:.75rem;\n  background-image:none\n}\n\n.custom-select:disabled{\n  color:#6c757d;\n  background-color:#e9ecef\n}\n\n.custom-select::-ms-expand{\n  display:none\n}\n\n.custom-select:-moz-focusring{\n  color:transparent;\n  text-shadow:0 0 0 #495057\n}\n\n.custom-select-sm{\n  height:calc(1.5em + .5rem + 2px);\n  padding-top:.25rem;\n  padding-bottom:.25rem;\n  padding-left:.5rem;\n  font-size:.875rem\n}\n\n.custom-select-lg{\n  height:calc(1.5em + 1rem + 2px);\n  padding-top:.5rem;\n  padding-bottom:.5rem;\n  padding-left:1rem;\n  font-size:1.25rem\n}\n\n.custom-file{\n  display:inline-block;\n  margin-bottom:0\n}\n\n.custom-file,.custom-file-input{\n  position:relative;\n  width:100%;\n  height:calc(1.5em + .75rem + 2px)\n}\n\n.custom-file-input{\n  z-index:2;\n  margin:0;\n  overflow:hidden;\n  opacity:0\n}\n\n.custom-file-input:focus~.custom-file-label{\n  border-color:#80bdff;\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{\n  background-color:#e9ecef\n}\n\n.custom-file-input:lang(en)~.custom-file-label:after{\n  content:\"Browse\"\n}\n\n.custom-file-input~.custom-file-label[data-browse]:after{\n  content:attr(data-browse)\n}\n\n.custom-file-label{\n  left:0;\n  z-index:1;\n  height:calc(1.5em + .75rem + 2px);\n  overflow:hidden;\n  font-weight:400;\n  background-color:#fff;\n  border:1px solid #ced4da;\n  border-radius:.25rem\n}\n\n.custom-file-label,.custom-file-label:after{\n  position:absolute;\n  top:0;\n  right:0;\n  padding:.375rem .75rem;\n  line-height:1.5;\n  color:#495057\n}\n\n.custom-file-label:after{\n  bottom:0;\n  z-index:3;\n  display:block;\n  height:calc(1.5em + .75rem);\n  content:\"Browse\";\n  background-color:#e9ecef;\n  border-left:inherit;\n  border-radius:0 .25rem .25rem 0\n}\n\n.custom-range{\n  width:100%;\n  height:1.4rem;\n  padding:0;\n  background-color:transparent;\n  -webkit-appearance:none;\n  -moz-appearance:none;\n  appearance:none\n}\n\n.custom-range:focus{\n  outline:0\n}\n\n.custom-range:focus::-webkit-slider-thumb{\n  box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.custom-range:focus::-moz-range-thumb{\n  box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.custom-range:focus::-ms-thumb{\n  box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.custom-range::-moz-focus-outer{\n  border:0\n}\n\n.custom-range::-webkit-slider-thumb{\n  width:1rem;\n  height:1rem;\n  margin-top:-.25rem;\n  background-color:#007bff;\n  border:0;\n  border-radius:1rem;\n  -webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  -webkit-appearance:none;\n  appearance:none\n}\n\n@media (prefers-reduced-motion:reduce){\n  .custom-range::-webkit-slider-thumb{\n    -webkit-transition:none;\n    transition:none\n  }\n}\n\n.custom-range::-webkit-slider-thumb:active{\n  background-color:#b3d7ff\n}\n\n.custom-range::-webkit-slider-runnable-track{\n  width:100%;\n  height:.5rem;\n  color:transparent;\n  cursor:pointer;\n  background-color:#dee2e6;\n  border-color:transparent;\n  border-radius:1rem\n}\n\n.custom-range::-moz-range-thumb{\n  width:1rem;\n  height:1rem;\n  background-color:#007bff;\n  border:0;\n  border-radius:1rem;\n  -moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  -moz-appearance:none;\n  appearance:none\n}\n\n@media (prefers-reduced-motion:reduce){\n  .custom-range::-moz-range-thumb{\n    -moz-transition:none;\n    transition:none\n  }\n}\n\n.custom-range::-moz-range-thumb:active{\n  background-color:#b3d7ff\n}\n\n.custom-range::-moz-range-track{\n  width:100%;\n  height:.5rem;\n  color:transparent;\n  cursor:pointer;\n  background-color:#dee2e6;\n  border-color:transparent;\n  border-radius:1rem\n}\n\n.custom-range::-ms-thumb{\n  width:1rem;\n  height:1rem;\n  margin-top:0;\n  margin-right:.2rem;\n  margin-left:.2rem;\n  background-color:#007bff;\n  border:0;\n  border-radius:1rem;\n  -ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n  appearance:none\n}\n\n@media (prefers-reduced-motion:reduce){\n  .custom-range::-ms-thumb{\n    -ms-transition:none;\n    transition:none\n  }\n}\n\n.custom-range::-ms-thumb:active{\n  background-color:#b3d7ff\n}\n\n.custom-range::-ms-track{\n  width:100%;\n  height:.5rem;\n  color:transparent;\n  cursor:pointer;\n  background-color:transparent;\n  border-color:transparent;\n  border-width:.5rem\n}\n\n.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{\n  background-color:#dee2e6;\n  border-radius:1rem\n}\n\n.custom-range::-ms-fill-upper{\n  margin-right:15px\n}\n\n.custom-range:disabled::-webkit-slider-thumb{\n  background-color:#adb5bd\n}\n\n.custom-range:disabled::-webkit-slider-runnable-track{\n  cursor:default\n}\n\n.custom-range:disabled::-moz-range-thumb{\n  background-color:#adb5bd\n}\n\n.custom-range:disabled::-moz-range-track{\n  cursor:default\n}\n\n.custom-range:disabled::-ms-thumb{\n  background-color:#adb5bd\n}\n\n.custom-control-label:before,.custom-file-label,.custom-select{\n  transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out\n}\n\n@media (prefers-reduced-motion:reduce){\n  .custom-control-label:before,.custom-file-label,.custom-select{\n    transition:none\n  }\n}\n\n.nav{\n  display:flex;\n  flex-wrap:wrap;\n  padding-left:0;\n  margin-bottom:0;\n  list-style:none\n}\n\n.nav-link{\n  display:block;\n  padding:.5rem 1rem\n}\n\n.nav-link:focus,.nav-link:hover{\n  text-decoration:none\n}\n\n.nav-link.disabled{\n  color:#6c757d;\n  pointer-events:none;\n  cursor:default\n}\n\n.nav-tabs{\n  border-bottom:1px solid #dee2e6\n}\n\n.nav-tabs .nav-link{\n  margin-bottom:-1px;\n  border:1px solid transparent;\n  border-top-left-radius:.25rem;\n  border-top-right-radius:.25rem\n}\n\n.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{\n  border-color:#e9ecef #e9ecef #dee2e6\n}\n\n.nav-tabs .nav-link.disabled{\n  color:#6c757d;\n  background-color:transparent;\n  border-color:transparent\n}\n\n.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{\n  color:#495057;\n  background-color:#fff;\n  border-color:#dee2e6 #dee2e6 #fff\n}\n\n.nav-tabs .dropdown-menu{\n  margin-top:-1px;\n  border-top-left-radius:0;\n  border-top-right-radius:0\n}\n\n.nav-pills .nav-link{\n  border-radius:.25rem\n}\n\n.nav-pills .nav-link.active,.nav-pills .show>.nav-link{\n  color:#fff;\n  background-color:#007bff\n}\n\n.nav-fill .nav-item,.nav-fill>.nav-link{\n  flex:1 1 auto;\n  text-align:center\n}\n\n.nav-justified .nav-item,.nav-justified>.nav-link{\n  flex-basis:0;\n  flex-grow:1;\n  text-align:center\n}\n\n.tab-content>.tab-pane{\n  display:none\n}\n\n.tab-content>.active{\n  display:block\n}\n\n.navbar{\n  position:relative;\n  padding:.5rem 1rem\n}\n\n.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{\n  display:flex;\n  flex-wrap:wrap;\n  align-items:center;\n  justify-content:space-between\n}\n\n.navbar-brand{\n  display:inline-block;\n  padding-top:.3125rem;\n  padding-bottom:.3125rem;\n  margin-right:1rem;\n  font-size:1.25rem;\n  line-height:inherit;\n  white-space:nowrap\n}\n\n.navbar-brand:focus,.navbar-brand:hover{\n  text-decoration:none\n}\n\n.navbar-nav{\n  display:flex;\n  flex-direction:column;\n  padding-left:0;\n  margin-bottom:0;\n  list-style:none\n}\n\n.navbar-nav .nav-link{\n  padding-right:0;\n  padding-left:0\n}\n\n.navbar-nav .dropdown-menu{\n  position:static;\n  float:none\n}\n\n.navbar-text{\n  display:inline-block;\n  padding-top:.5rem;\n  padding-bottom:.5rem\n}\n\n.navbar-collapse{\n  flex-basis:100%;\n  flex-grow:1;\n  align-items:center\n}\n\n.navbar-toggler{\n  padding:.25rem .75rem;\n  font-size:1.25rem;\n  line-height:1;\n  background-color:transparent;\n  border:1px solid transparent;\n  border-radius:.25rem\n}\n\n.navbar-toggler:focus,.navbar-toggler:hover{\n  text-decoration:none\n}\n\n.navbar-toggler-icon{\n  display:inline-block;\n  width:1.5em;\n  height:1.5em;\n  vertical-align:middle;\n  content:\"\";\n  background:50%/100% 100% no-repeat\n}\n\n.navbar-nav-scroll{\n  max-height:75vh;\n  overflow-y:auto\n}\n\n@media (max-width:575.98px){\n  .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{\n    padding-right:0;\n    padding-left:0\n  }\n}\n\n@media (min-width:576px){\n  .navbar-expand-sm{\n    flex-flow:row nowrap;\n    justify-content:flex-start\n  }\n\n  .navbar-expand-sm .navbar-nav{\n    flex-direction:row\n  }\n\n  .navbar-expand-sm .navbar-nav .dropdown-menu{\n    position:absolute\n  }\n\n  .navbar-expand-sm .navbar-nav .nav-link{\n    padding-right:.5rem;\n    padding-left:.5rem\n  }\n\n  .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{\n    flex-wrap:nowrap\n  }\n\n  .navbar-expand-sm .navbar-nav-scroll{\n    overflow:visible\n  }\n\n  .navbar-expand-sm .navbar-collapse{\n    display:flex!important;\n    flex-basis:auto\n  }\n\n  .navbar-expand-sm .navbar-toggler{\n    display:none\n  }\n}\n\n@media (max-width:767.98px){\n  .navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{\n    padding-right:0;\n    padding-left:0\n  }\n}\n\n@media (min-width:768px){\n  .navbar-expand-md{\n    flex-flow:row nowrap;\n    justify-content:flex-start\n  }\n\n  .navbar-expand-md .navbar-nav{\n    flex-direction:row\n  }\n\n  .navbar-expand-md .navbar-nav .dropdown-menu{\n    position:absolute\n  }\n\n  .navbar-expand-md .navbar-nav .nav-link{\n    padding-right:.5rem;\n    padding-left:.5rem\n  }\n\n  .navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{\n    flex-wrap:nowrap\n  }\n\n  .navbar-expand-md .navbar-nav-scroll{\n    overflow:visible\n  }\n\n  .navbar-expand-md .navbar-collapse{\n    display:flex!important;\n    flex-basis:auto\n  }\n\n  .navbar-expand-md .navbar-toggler{\n    display:none\n  }\n}\n\n@media (max-width:991.98px){\n  .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{\n    padding-right:0;\n    padding-left:0\n  }\n}\n\n@media (min-width:992px){\n  .navbar-expand-lg{\n    flex-flow:row nowrap;\n    justify-content:flex-start\n  }\n\n  .navbar-expand-lg .navbar-nav{\n    flex-direction:row\n  }\n\n  .navbar-expand-lg .navbar-nav .dropdown-menu{\n    position:absolute\n  }\n\n  .navbar-expand-lg .navbar-nav .nav-link{\n    padding-right:.5rem;\n    padding-left:.5rem\n  }\n\n  .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{\n    flex-wrap:nowrap\n  }\n\n  .navbar-expand-lg .navbar-nav-scroll{\n    overflow:visible\n  }\n\n  .navbar-expand-lg .navbar-collapse{\n    display:flex!important;\n    flex-basis:auto\n  }\n\n  .navbar-expand-lg .navbar-toggler{\n    display:none\n  }\n}\n\n@media (max-width:1199.98px){\n  .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{\n    padding-right:0;\n    padding-left:0\n  }\n}\n\n@media (min-width:1200px){\n  .navbar-expand-xl{\n    flex-flow:row nowrap;\n    justify-content:flex-start\n  }\n\n  .navbar-expand-xl .navbar-nav{\n    flex-direction:row\n  }\n\n  .navbar-expand-xl .navbar-nav .dropdown-menu{\n    position:absolute\n  }\n\n  .navbar-expand-xl .navbar-nav .nav-link{\n    padding-right:.5rem;\n    padding-left:.5rem\n  }\n\n  .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{\n    flex-wrap:nowrap\n  }\n\n  .navbar-expand-xl .navbar-nav-scroll{\n    overflow:visible\n  }\n\n  .navbar-expand-xl .navbar-collapse{\n    display:flex!important;\n    flex-basis:auto\n  }\n\n  .navbar-expand-xl .navbar-toggler{\n    display:none\n  }\n}\n\n.navbar-expand{\n  flex-flow:row nowrap;\n  justify-content:flex-start\n}\n\n.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{\n  padding-right:0;\n  padding-left:0\n}\n\n.navbar-expand .navbar-nav{\n  flex-direction:row\n}\n\n.navbar-expand .navbar-nav .dropdown-menu{\n  position:absolute\n}\n\n.navbar-expand .navbar-nav .nav-link{\n  padding-right:.5rem;\n  padding-left:.5rem\n}\n\n.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{\n  flex-wrap:nowrap\n}\n\n.navbar-expand .navbar-nav-scroll{\n  overflow:visible\n}\n\n.navbar-expand .navbar-collapse{\n  display:flex!important;\n  flex-basis:auto\n}\n\n.navbar-expand .navbar-toggler{\n  display:none\n}\n\n.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{\n  color:rgba(0,0,0,.9)\n}\n\n.navbar-light .navbar-nav .nav-link{\n  color:rgba(0,0,0,.5)\n}\n\n.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{\n  color:rgba(0,0,0,.7)\n}\n\n.navbar-light .navbar-nav .nav-link.disabled{\n  color:rgba(0,0,0,.3)\n}\n\n.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{\n  color:rgba(0,0,0,.9)\n}\n\n.navbar-light .navbar-toggler{\n  color:rgba(0,0,0,.5);\n  border-color:rgba(0,0,0,.1)\n}\n\n.navbar-light .navbar-toggler-icon{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")\n}\n\n.navbar-light .navbar-text{\n  color:rgba(0,0,0,.5)\n}\n\n.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{\n  color:rgba(0,0,0,.9)\n}\n\n.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{\n  color:#fff\n}\n\n.navbar-dark .navbar-nav .nav-link{\n  color:hsla(0,0%,100%,.5)\n}\n\n.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{\n  color:hsla(0,0%,100%,.75)\n}\n\n.navbar-dark .navbar-nav .nav-link.disabled{\n  color:hsla(0,0%,100%,.25)\n}\n\n.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{\n  color:#fff\n}\n\n.navbar-dark .navbar-toggler{\n  color:hsla(0,0%,100%,.5);\n  border-color:hsla(0,0%,100%,.1)\n}\n\n.navbar-dark .navbar-toggler-icon{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")\n}\n\n.navbar-dark .navbar-text{\n  color:hsla(0,0%,100%,.5)\n}\n\n.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{\n  color:#fff\n}\n\n.card{\n  position:relative;\n  display:flex;\n  flex-direction:column;\n  min-width:0;\n  word-wrap:break-word;\n  background-color:#fff;\n  background-clip:border-box;\n  border:1px solid rgba(0,0,0,.125);\n  border-radius:.25rem\n}\n\n.card>hr{\n  margin-right:0;\n  margin-left:0\n}\n\n.card>.list-group{\n  border-top:inherit;\n  border-bottom:inherit\n}\n\n.card>.list-group:first-child{\n  border-top-width:0;\n  border-top-left-radius:calc(.25rem - 1px);\n  border-top-right-radius:calc(.25rem - 1px)\n}\n\n.card>.list-group:last-child{\n  border-bottom-width:0;\n  border-bottom-right-radius:calc(.25rem - 1px);\n  border-bottom-left-radius:calc(.25rem - 1px)\n}\n\n.card>.card-header+.list-group,.card>.list-group+.card-footer{\n  border-top:0\n}\n\n.card-body{\n  flex:1 1 auto;\n  min-height:1px;\n  padding:1.25rem\n}\n\n.card-title{\n  margin-bottom:.75rem\n}\n\n.card-subtitle{\n  margin-top:-.375rem\n}\n\n.card-subtitle,.card-text:last-child{\n  margin-bottom:0\n}\n\n.card-link:hover{\n  text-decoration:none\n}\n\n.card-link+.card-link{\n  margin-left:1.25rem\n}\n\n.card-header{\n  padding:.75rem 1.25rem;\n  margin-bottom:0;\n  background-color:rgba(0,0,0,.03);\n  border-bottom:1px solid rgba(0,0,0,.125)\n}\n\n.card-header:first-child{\n  border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0\n}\n\n.card-footer{\n  padding:.75rem 1.25rem;\n  background-color:rgba(0,0,0,.03);\n  border-top:1px solid rgba(0,0,0,.125)\n}\n\n.card-footer:last-child{\n  border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)\n}\n\n.card-header-tabs{\n  margin-bottom:-.75rem;\n  border-bottom:0\n}\n\n.card-header-pills,.card-header-tabs{\n  margin-right:-.625rem;\n  margin-left:-.625rem\n}\n\n.card-img-overlay{\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  padding:1.25rem;\n  border-radius:calc(.25rem - 1px)\n}\n\n.card-img,.card-img-bottom,.card-img-top{\n  flex-shrink:0;\n  width:100%\n}\n\n.card-img,.card-img-top{\n  border-top-left-radius:calc(.25rem - 1px);\n  border-top-right-radius:calc(.25rem - 1px)\n}\n\n.card-img,.card-img-bottom{\n  border-bottom-right-radius:calc(.25rem - 1px);\n  border-bottom-left-radius:calc(.25rem - 1px)\n}\n\n.card-deck .card{\n  margin-bottom:15px\n}\n\n@media (min-width:576px){\n  .card-deck{\n    display:flex;\n    flex-flow:row wrap;\n    margin-right:-15px;\n    margin-left:-15px\n  }\n\n  .card-deck .card{\n    flex:1 0 0%;\n    margin-right:15px;\n    margin-bottom:0;\n    margin-left:15px\n  }\n}\n\n.card-group>.card{\n  margin-bottom:15px\n}\n\n@media (min-width:576px){\n  .card-group{\n    display:flex;\n    flex-flow:row wrap\n  }\n\n  .card-group>.card{\n    flex:1 0 0%;\n    margin-bottom:0\n  }\n\n  .card-group>.card+.card{\n    margin-left:0;\n    border-left:0\n  }\n\n  .card-group>.card:not(:last-child){\n    border-top-right-radius:0;\n    border-bottom-right-radius:0\n  }\n\n  .card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{\n    border-top-right-radius:0\n  }\n\n  .card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{\n    border-bottom-right-radius:0\n  }\n\n  .card-group>.card:not(:first-child){\n    border-top-left-radius:0;\n    border-bottom-left-radius:0\n  }\n\n  .card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{\n    border-top-left-radius:0\n  }\n\n  .card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{\n    border-bottom-left-radius:0\n  }\n}\n\n.card-columns .card{\n  margin-bottom:.75rem\n}\n\n@media (min-width:576px){\n  .card-columns{\n    -moz-column-count:3;\n    column-count:3;\n    -moz-column-gap:1.25rem;\n    column-gap:1.25rem;\n    orphans:1;\n    widows:1\n  }\n\n  .card-columns .card{\n    display:inline-block;\n    width:100%\n  }\n}\n\n.accordion{\n  overflow-anchor:none\n}\n\n.accordion>.card{\n  overflow:hidden\n}\n\n.accordion>.card:not(:last-of-type){\n  border-bottom:0;\n  border-bottom-right-radius:0;\n  border-bottom-left-radius:0\n}\n\n.accordion>.card:not(:first-of-type){\n  border-top-left-radius:0;\n  border-top-right-radius:0\n}\n\n.accordion>.card>.card-header{\n  border-radius:0;\n  margin-bottom:-1px\n}\n\n.breadcrumb{\n  display:flex;\n  flex-wrap:wrap;\n  padding:.75rem 1rem;\n  margin-bottom:1rem;\n  list-style:none;\n  background-color:#e9ecef;\n  border-radius:.25rem\n}\n\n.breadcrumb-item+.breadcrumb-item{\n  padding-left:.5rem\n}\n\n.breadcrumb-item+.breadcrumb-item:before{\n  float:left;\n  padding-right:.5rem;\n  color:#6c757d;\n  content:\"/\"\n}\n\n.breadcrumb-item+.breadcrumb-item:hover:before{\n  text-decoration:underline;\n  text-decoration:none\n}\n\n.breadcrumb-item.active{\n  color:#6c757d\n}\n\n.pagination{\n  display:flex;\n  padding-left:0;\n  list-style:none;\n  border-radius:.25rem\n}\n\n.page-link{\n  position:relative;\n  display:block;\n  padding:.5rem .75rem;\n  margin-left:-1px;\n  line-height:1.25;\n  color:#007bff;\n  background-color:#fff;\n  border:1px solid #dee2e6\n}\n\n.page-link:hover{\n  z-index:2;\n  color:#0056b3;\n  text-decoration:none;\n  background-color:#e9ecef;\n  border-color:#dee2e6\n}\n\n.page-link:focus{\n  z-index:3;\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.page-item:first-child .page-link{\n  margin-left:0;\n  border-top-left-radius:.25rem;\n  border-bottom-left-radius:.25rem\n}\n\n.page-item:last-child .page-link{\n  border-top-right-radius:.25rem;\n  border-bottom-right-radius:.25rem\n}\n\n.page-item.active .page-link{\n  z-index:3;\n  color:#fff;\n  background-color:#007bff;\n  border-color:#007bff\n}\n\n.page-item.disabled .page-link{\n  color:#6c757d;\n  pointer-events:none;\n  cursor:auto;\n  background-color:#fff;\n  border-color:#dee2e6\n}\n\n.pagination-lg .page-link{\n  padding:.75rem 1.5rem;\n  font-size:1.25rem;\n  line-height:1.5\n}\n\n.pagination-lg .page-item:first-child .page-link{\n  border-top-left-radius:.3rem;\n  border-bottom-left-radius:.3rem\n}\n\n.pagination-lg .page-item:last-child .page-link{\n  border-top-right-radius:.3rem;\n  border-bottom-right-radius:.3rem\n}\n\n.pagination-sm .page-link{\n  padding:.25rem .5rem;\n  font-size:.875rem;\n  line-height:1.5\n}\n\n.pagination-sm .page-item:first-child .page-link{\n  border-top-left-radius:.2rem;\n  border-bottom-left-radius:.2rem\n}\n\n.pagination-sm .page-item:last-child .page-link{\n  border-top-right-radius:.2rem;\n  border-bottom-right-radius:.2rem\n}\n\n.badge{\n  display:inline-block;\n  padding:.25em .4em;\n  font-size:75%;\n  font-weight:700;\n  line-height:1;\n  text-align:center;\n  white-space:nowrap;\n  vertical-align:baseline;\n  border-radius:.25rem;\n  transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out\n}\n\n@media (prefers-reduced-motion:reduce){\n  .badge{\n    transition:none\n  }\n}\n\na.badge:focus,a.badge:hover{\n  text-decoration:none\n}\n\n.badge:empty{\n  display:none\n}\n\n.btn .badge{\n  position:relative;\n  top:-1px\n}\n\n.badge-pill{\n  padding-right:.6em;\n  padding-left:.6em;\n  border-radius:10rem\n}\n\n.badge-primary{\n  color:#fff;\n  background-color:#007bff\n}\n\na.badge-primary:focus,a.badge-primary:hover{\n  color:#fff;\n  background-color:#0062cc\n}\n\na.badge-primary.focus,a.badge-primary:focus{\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.5)\n}\n\n.badge-secondary{\n  color:#fff;\n  background-color:#6c757d\n}\n\na.badge-secondary:focus,a.badge-secondary:hover{\n  color:#fff;\n  background-color:#545b62\n}\n\na.badge-secondary.focus,a.badge-secondary:focus{\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(108,117,125,.5)\n}\n\n.badge-success{\n  color:#fff;\n  background-color:#28a745\n}\n\na.badge-success:focus,a.badge-success:hover{\n  color:#fff;\n  background-color:#1e7e34\n}\n\na.badge-success.focus,a.badge-success:focus{\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(40,167,69,.5)\n}\n\n.badge-info{\n  color:#fff;\n  background-color:#17a2b8\n}\n\na.badge-info:focus,a.badge-info:hover{\n  color:#fff;\n  background-color:#117a8b\n}\n\na.badge-info.focus,a.badge-info:focus{\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(23,162,184,.5)\n}\n\n.badge-warning{\n  color:#212529;\n  background-color:#ffc107\n}\n\na.badge-warning:focus,a.badge-warning:hover{\n  color:#212529;\n  background-color:#d39e00\n}\n\na.badge-warning.focus,a.badge-warning:focus{\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(255,193,7,.5)\n}\n\n.badge-danger{\n  color:#fff;\n  background-color:#dc3545\n}\n\na.badge-danger:focus,a.badge-danger:hover{\n  color:#fff;\n  background-color:#bd2130\n}\n\na.badge-danger.focus,a.badge-danger:focus{\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(220,53,69,.5)\n}\n\n.badge-light{\n  color:#212529;\n  background-color:#f8f9fa\n}\n\na.badge-light:focus,a.badge-light:hover{\n  color:#212529;\n  background-color:#dae0e5\n}\n\na.badge-light.focus,a.badge-light:focus{\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(248,249,250,.5)\n}\n\n.badge-dark{\n  color:#fff;\n  background-color:#343a40\n}\n\na.badge-dark:focus,a.badge-dark:hover{\n  color:#fff;\n  background-color:#1d2124\n}\n\na.badge-dark.focus,a.badge-dark:focus{\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(52,58,64,.5)\n}\n\n.jumbotron{\n  padding:2rem 1rem;\n  margin-bottom:2rem;\n  background-color:#e9ecef;\n  border-radius:.3rem\n}\n\n@media (min-width:576px){\n  .jumbotron{\n    padding:4rem 2rem\n  }\n}\n\n.jumbotron-fluid{\n  padding-right:0;\n  padding-left:0;\n  border-radius:0\n}\n\n.alert{\n  position:relative;\n  padding:.75rem 1.25rem;\n  margin-bottom:1rem;\n  border:1px solid transparent;\n  border-radius:.25rem\n}\n\n.alert-heading{\n  color:inherit\n}\n\n.alert-link{\n  font-weight:700\n}\n\n.alert-dismissible{\n  padding-right:4rem\n}\n\n.alert-dismissible .close{\n  position:absolute;\n  top:0;\n  right:0;\n  z-index:2;\n  padding:.75rem 1.25rem;\n  color:inherit\n}\n\n.alert-primary{\n  color:#004085;\n  background-color:#cce5ff;\n  border-color:#b8daff\n}\n\n.alert-primary hr{\n  border-top-color:#9fcdff\n}\n\n.alert-primary .alert-link{\n  color:#002752\n}\n\n.alert-secondary{\n  color:#383d41;\n  background-color:#e2e3e5;\n  border-color:#d6d8db\n}\n\n.alert-secondary hr{\n  border-top-color:#c8cbcf\n}\n\n.alert-secondary .alert-link{\n  color:#202326\n}\n\n.alert-success{\n  color:#155724;\n  background-color:#d4edda;\n  border-color:#c3e6cb\n}\n\n.alert-success hr{\n  border-top-color:#b1dfbb\n}\n\n.alert-success .alert-link{\n  color:#0b2e13\n}\n\n.alert-info{\n  color:#0c5460;\n  background-color:#d1ecf1;\n  border-color:#bee5eb\n}\n\n.alert-info hr{\n  border-top-color:#abdde5\n}\n\n.alert-info .alert-link{\n  color:#062c33\n}\n\n.alert-warning{\n  color:#856404;\n  background-color:#fff3cd;\n  border-color:#ffeeba\n}\n\n.alert-warning hr{\n  border-top-color:#ffe8a1\n}\n\n.alert-warning .alert-link{\n  color:#533f03\n}\n\n.alert-danger{\n  color:#721c24;\n  background-color:#f8d7da;\n  border-color:#f5c6cb\n}\n\n.alert-danger hr{\n  border-top-color:#f1b0b7\n}\n\n.alert-danger .alert-link{\n  color:#491217\n}\n\n.alert-light{\n  color:#818182;\n  background-color:#fefefe;\n  border-color:#fdfdfe\n}\n\n.alert-light hr{\n  border-top-color:#ececf6\n}\n\n.alert-light .alert-link{\n  color:#686868\n}\n\n.alert-dark{\n  color:#1b1e21;\n  background-color:#d6d8d9;\n  border-color:#c6c8ca\n}\n\n.alert-dark hr{\n  border-top-color:#b9bbbe\n}\n\n.alert-dark .alert-link{\n  color:#040505\n}\n\n@-webkit-keyframes progress-bar-stripes{\n  0%{\n    background-position:1rem 0\n  }\n\n  to{\n    background-position:0 0\n  }\n}\n\n@keyframes progress-bar-stripes{\n  0%{\n    background-position:1rem 0\n  }\n\n  to{\n    background-position:0 0\n  }\n}\n\n.progress{\n  height:1rem;\n  line-height:0;\n  font-size:.75rem;\n  background-color:#e9ecef;\n  border-radius:.25rem\n}\n\n.progress,.progress-bar{\n  display:flex;\n  overflow:hidden\n}\n\n.progress-bar{\n  flex-direction:column;\n  justify-content:center;\n  color:#fff;\n  text-align:center;\n  white-space:nowrap;\n  background-color:#007bff;\n  transition:width .6s ease\n}\n\n@media (prefers-reduced-motion:reduce){\n  .progress-bar{\n    transition:none\n  }\n}\n\n.progress-bar-striped{\n  background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);\n  background-size:1rem 1rem\n}\n\n.progress-bar-animated{\n  -webkit-animation:progress-bar-stripes 1s linear infinite;\n  animation:progress-bar-stripes 1s linear infinite\n}\n\n@media (prefers-reduced-motion:reduce){\n  .progress-bar-animated{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n.media{\n  display:flex;\n  align-items:flex-start\n}\n\n.media-body{\n  flex:1\n}\n\n.list-group{\n  display:flex;\n  flex-direction:column;\n  padding-left:0;\n  margin-bottom:0;\n  border-radius:.25rem\n}\n\n.list-group-item-action{\n  width:100%;\n  color:#495057;\n  text-align:inherit\n}\n\n.list-group-item-action:focus,.list-group-item-action:hover{\n  z-index:1;\n  color:#495057;\n  text-decoration:none;\n  background-color:#f8f9fa\n}\n\n.list-group-item-action:active{\n  color:#212529;\n  background-color:#e9ecef\n}\n\n.list-group-item{\n  position:relative;\n  display:block;\n  padding:.75rem 1.25rem;\n  background-color:#fff;\n  border:1px solid rgba(0,0,0,.125)\n}\n\n.list-group-item:first-child{\n  border-top-left-radius:inherit;\n  border-top-right-radius:inherit\n}\n\n.list-group-item:last-child{\n  border-bottom-right-radius:inherit;\n  border-bottom-left-radius:inherit\n}\n\n.list-group-item.disabled,.list-group-item:disabled{\n  color:#6c757d;\n  pointer-events:none;\n  background-color:#fff\n}\n\n.list-group-item.active{\n  z-index:2;\n  color:#fff;\n  background-color:#007bff;\n  border-color:#007bff\n}\n\n.list-group-item+.list-group-item{\n  border-top-width:0\n}\n\n.list-group-item+.list-group-item.active{\n  margin-top:-1px;\n  border-top-width:1px\n}\n\n.list-group-horizontal{\n  flex-direction:row\n}\n\n.list-group-horizontal>.list-group-item:first-child{\n  border-bottom-left-radius:.25rem;\n  border-top-right-radius:0\n}\n\n.list-group-horizontal>.list-group-item:last-child{\n  border-top-right-radius:.25rem;\n  border-bottom-left-radius:0\n}\n\n.list-group-horizontal>.list-group-item.active{\n  margin-top:0\n}\n\n.list-group-horizontal>.list-group-item+.list-group-item{\n  border-top-width:1px;\n  border-left-width:0\n}\n\n.list-group-horizontal>.list-group-item+.list-group-item.active{\n  margin-left:-1px;\n  border-left-width:1px\n}\n\n@media (min-width:576px){\n  .list-group-horizontal-sm{\n    flex-direction:row\n  }\n\n  .list-group-horizontal-sm>.list-group-item:first-child{\n    border-bottom-left-radius:.25rem;\n    border-top-right-radius:0\n  }\n\n  .list-group-horizontal-sm>.list-group-item:last-child{\n    border-top-right-radius:.25rem;\n    border-bottom-left-radius:0\n  }\n\n  .list-group-horizontal-sm>.list-group-item.active{\n    margin-top:0\n  }\n\n  .list-group-horizontal-sm>.list-group-item+.list-group-item{\n    border-top-width:1px;\n    border-left-width:0\n  }\n\n  .list-group-horizontal-sm>.list-group-item+.list-group-item.active{\n    margin-left:-1px;\n    border-left-width:1px\n  }\n}\n\n@media (min-width:768px){\n  .list-group-horizontal-md{\n    flex-direction:row\n  }\n\n  .list-group-horizontal-md>.list-group-item:first-child{\n    border-bottom-left-radius:.25rem;\n    border-top-right-radius:0\n  }\n\n  .list-group-horizontal-md>.list-group-item:last-child{\n    border-top-right-radius:.25rem;\n    border-bottom-left-radius:0\n  }\n\n  .list-group-horizontal-md>.list-group-item.active{\n    margin-top:0\n  }\n\n  .list-group-horizontal-md>.list-group-item+.list-group-item{\n    border-top-width:1px;\n    border-left-width:0\n  }\n\n  .list-group-horizontal-md>.list-group-item+.list-group-item.active{\n    margin-left:-1px;\n    border-left-width:1px\n  }\n}\n\n@media (min-width:992px){\n  .list-group-horizontal-lg{\n    flex-direction:row\n  }\n\n  .list-group-horizontal-lg>.list-group-item:first-child{\n    border-bottom-left-radius:.25rem;\n    border-top-right-radius:0\n  }\n\n  .list-group-horizontal-lg>.list-group-item:last-child{\n    border-top-right-radius:.25rem;\n    border-bottom-left-radius:0\n  }\n\n  .list-group-horizontal-lg>.list-group-item.active{\n    margin-top:0\n  }\n\n  .list-group-horizontal-lg>.list-group-item+.list-group-item{\n    border-top-width:1px;\n    border-left-width:0\n  }\n\n  .list-group-horizontal-lg>.list-group-item+.list-group-item.active{\n    margin-left:-1px;\n    border-left-width:1px\n  }\n}\n\n@media (min-width:1200px){\n  .list-group-horizontal-xl{\n    flex-direction:row\n  }\n\n  .list-group-horizontal-xl>.list-group-item:first-child{\n    border-bottom-left-radius:.25rem;\n    border-top-right-radius:0\n  }\n\n  .list-group-horizontal-xl>.list-group-item:last-child{\n    border-top-right-radius:.25rem;\n    border-bottom-left-radius:0\n  }\n\n  .list-group-horizontal-xl>.list-group-item.active{\n    margin-top:0\n  }\n\n  .list-group-horizontal-xl>.list-group-item+.list-group-item{\n    border-top-width:1px;\n    border-left-width:0\n  }\n\n  .list-group-horizontal-xl>.list-group-item+.list-group-item.active{\n    margin-left:-1px;\n    border-left-width:1px\n  }\n}\n\n.list-group-flush{\n  border-radius:0\n}\n\n.list-group-flush>.list-group-item{\n  border-width:0 0 1px\n}\n\n.list-group-flush>.list-group-item:last-child{\n  border-bottom-width:0\n}\n\n.list-group-item-primary{\n  color:#004085;\n  background-color:#b8daff\n}\n\n.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{\n  color:#004085;\n  background-color:#9fcdff\n}\n\n.list-group-item-primary.list-group-item-action.active{\n  color:#fff;\n  background-color:#004085;\n  border-color:#004085\n}\n\n.list-group-item-secondary{\n  color:#383d41;\n  background-color:#d6d8db\n}\n\n.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{\n  color:#383d41;\n  background-color:#c8cbcf\n}\n\n.list-group-item-secondary.list-group-item-action.active{\n  color:#fff;\n  background-color:#383d41;\n  border-color:#383d41\n}\n\n.list-group-item-success{\n  color:#155724;\n  background-color:#c3e6cb\n}\n\n.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{\n  color:#155724;\n  background-color:#b1dfbb\n}\n\n.list-group-item-success.list-group-item-action.active{\n  color:#fff;\n  background-color:#155724;\n  border-color:#155724\n}\n\n.list-group-item-info{\n  color:#0c5460;\n  background-color:#bee5eb\n}\n\n.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{\n  color:#0c5460;\n  background-color:#abdde5\n}\n\n.list-group-item-info.list-group-item-action.active{\n  color:#fff;\n  background-color:#0c5460;\n  border-color:#0c5460\n}\n\n.list-group-item-warning{\n  color:#856404;\n  background-color:#ffeeba\n}\n\n.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{\n  color:#856404;\n  background-color:#ffe8a1\n}\n\n.list-group-item-warning.list-group-item-action.active{\n  color:#fff;\n  background-color:#856404;\n  border-color:#856404\n}\n\n.list-group-item-danger{\n  color:#721c24;\n  background-color:#f5c6cb\n}\n\n.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{\n  color:#721c24;\n  background-color:#f1b0b7\n}\n\n.list-group-item-danger.list-group-item-action.active{\n  color:#fff;\n  background-color:#721c24;\n  border-color:#721c24\n}\n\n.list-group-item-light{\n  color:#818182;\n  background-color:#fdfdfe\n}\n\n.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{\n  color:#818182;\n  background-color:#ececf6\n}\n\n.list-group-item-light.list-group-item-action.active{\n  color:#fff;\n  background-color:#818182;\n  border-color:#818182\n}\n\n.list-group-item-dark{\n  color:#1b1e21;\n  background-color:#c6c8ca\n}\n\n.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{\n  color:#1b1e21;\n  background-color:#b9bbbe\n}\n\n.list-group-item-dark.list-group-item-action.active{\n  color:#fff;\n  background-color:#1b1e21;\n  border-color:#1b1e21\n}\n\n.close{\n  float:right;\n  font-size:1.5rem;\n  font-weight:700;\n  line-height:1;\n  color:#000;\n  text-shadow:0 1px 0 #fff;\n  opacity:.5\n}\n\n.close:hover{\n  color:#000;\n  text-decoration:none\n}\n\n.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{\n  opacity:.75\n}\n\nbutton.close{\n  padding:0;\n  background-color:transparent;\n  border:0\n}\n\na.close.disabled{\n  pointer-events:none\n}\n\n.toast{\n  flex-basis:350px;\n  max-width:350px;\n  font-size:.875rem;\n  background-color:hsla(0,0%,100%,.85);\n  background-clip:padding-box;\n  border:1px solid rgba(0,0,0,.1);\n  box-shadow:0 .25rem .75rem rgba(0,0,0,.1);\n  opacity:0;\n  border-radius:.25rem\n}\n\n.toast:not(:last-child){\n  margin-bottom:.75rem\n}\n\n.toast.showing{\n  opacity:1\n}\n\n.toast.show{\n  display:block;\n  opacity:1\n}\n\n.toast.hide{\n  display:none\n}\n\n.toast-header{\n  display:flex;\n  align-items:center;\n  padding:.25rem .75rem;\n  color:#6c757d;\n  background-color:hsla(0,0%,100%,.85);\n  background-clip:padding-box;\n  border-bottom:1px solid rgba(0,0,0,.05);\n  border-top-left-radius:calc(.25rem - 1px);\n  border-top-right-radius:calc(.25rem - 1px)\n}\n\n.toast-body{\n  padding:.75rem\n}\n\n.modal-open{\n  overflow:hidden\n}\n\n.modal-open .modal{\n  overflow-x:hidden;\n  overflow-y:auto\n}\n\n.modal{\n  position:fixed;\n  top:0;\n  left:0;\n  z-index:1050;\n  display:none;\n  width:100%;\n  height:100%;\n  overflow:hidden;\n  outline:0\n}\n\n.modal-dialog{\n  position:relative;\n  width:auto;\n  margin:.5rem;\n  pointer-events:none\n}\n\n.modal.fade .modal-dialog{\n  transition:transform .3s ease-out;\n  transform:translateY(-50px)\n}\n\n@media (prefers-reduced-motion:reduce){\n  .modal.fade .modal-dialog{\n    transition:none\n  }\n}\n\n.modal.show .modal-dialog{\n  transform:none\n}\n\n.modal.modal-static .modal-dialog{\n  transform:scale(1.02)\n}\n\n.modal-dialog-scrollable{\n  display:flex;\n  max-height:calc(100% - 1rem)\n}\n\n.modal-dialog-scrollable .modal-content{\n  max-height:calc(100vh - 1rem);\n  overflow:hidden\n}\n\n.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{\n  flex-shrink:0\n}\n\n.modal-dialog-scrollable .modal-body{\n  overflow-y:auto\n}\n\n.modal-dialog-centered{\n  display:flex;\n  align-items:center;\n  min-height:calc(100% - 1rem)\n}\n\n.modal-dialog-centered:before{\n  display:block;\n  height:calc(100vh - 1rem);\n  height:-webkit-min-content;\n  height:-moz-min-content;\n  height:min-content;\n  content:\"\"\n}\n\n.modal-dialog-centered.modal-dialog-scrollable{\n  flex-direction:column;\n  justify-content:center;\n  height:100%\n}\n\n.modal-dialog-centered.modal-dialog-scrollable .modal-content{\n  max-height:none\n}\n\n.modal-dialog-centered.modal-dialog-scrollable:before{\n  content:none\n}\n\n.modal-content{\n  position:relative;\n  display:flex;\n  flex-direction:column;\n  width:100%;\n  pointer-events:auto;\n  background-color:#fff;\n  background-clip:padding-box;\n  border:1px solid rgba(0,0,0,.2);\n  border-radius:.3rem;\n  outline:0\n}\n\n.modal-backdrop{\n  position:fixed;\n  top:0;\n  left:0;\n  z-index:1040;\n  width:100vw;\n  height:100vh;\n  background-color:#000\n}\n\n.modal-backdrop.fade{\n  opacity:0\n}\n\n.modal-backdrop.show{\n  opacity:.5\n}\n\n.modal-header{\n  display:flex;\n  align-items:flex-start;\n  justify-content:space-between;\n  padding:1rem;\n  border-bottom:1px solid #dee2e6;\n  border-top-left-radius:calc(.3rem - 1px);\n  border-top-right-radius:calc(.3rem - 1px)\n}\n\n.modal-header .close{\n  padding:1rem;\n  margin:-1rem -1rem -1rem auto\n}\n\n.modal-title{\n  margin-bottom:0;\n  line-height:1.5\n}\n\n.modal-body{\n  position:relative;\n  flex:1 1 auto;\n  padding:1rem\n}\n\n.modal-footer{\n  display:flex;\n  flex-wrap:wrap;\n  align-items:center;\n  justify-content:flex-end;\n  padding:.75rem;\n  border-top:1px solid #dee2e6;\n  border-bottom-right-radius:calc(.3rem - 1px);\n  border-bottom-left-radius:calc(.3rem - 1px)\n}\n\n.modal-footer>*{\n  margin:.25rem\n}\n\n.modal-scrollbar-measure{\n  position:absolute;\n  top:-9999px;\n  width:50px;\n  height:50px;\n  overflow:scroll\n}\n\n@media (min-width:576px){\n  .modal-dialog{\n    max-width:500px;\n    margin:1.75rem auto\n  }\n\n  .modal-dialog-scrollable{\n    max-height:calc(100% - 3.5rem)\n  }\n\n  .modal-dialog-scrollable .modal-content{\n    max-height:calc(100vh - 3.5rem)\n  }\n\n  .modal-dialog-centered{\n    min-height:calc(100% - 3.5rem)\n  }\n\n  .modal-dialog-centered:before{\n    height:calc(100vh - 3.5rem);\n    height:-webkit-min-content;\n    height:-moz-min-content;\n    height:min-content\n  }\n\n  .modal-sm{\n    max-width:300px\n  }\n}\n\n@media (min-width:992px){\n  .modal-lg,.modal-xl{\n    max-width:800px\n  }\n}\n\n@media (min-width:1200px){\n  .modal-xl{\n    max-width:1140px\n  }\n}\n\n.tooltip{\n  position:absolute;\n  z-index:1070;\n  display:block;\n  margin:0;\n  font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n  font-style:normal;\n  font-weight:400;\n  line-height:1.5;\n  text-align:left;\n  text-align:start;\n  text-decoration:none;\n  text-shadow:none;\n  text-transform:none;\n  letter-spacing:normal;\n  word-break:normal;\n  word-spacing:normal;\n  white-space:normal;\n  line-break:auto;\n  font-size:.875rem;\n  word-wrap:break-word;\n  opacity:0\n}\n\n.tooltip.show{\n  opacity:.9\n}\n\n.tooltip .arrow{\n  position:absolute;\n  display:block;\n  width:.8rem;\n  height:.4rem\n}\n\n.tooltip .arrow:before{\n  position:absolute;\n  content:\"\";\n  border-color:transparent;\n  border-style:solid\n}\n\n.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{\n  padding:.4rem 0\n}\n\n.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{\n  bottom:0\n}\n\n.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{\n  top:0;\n  border-width:.4rem .4rem 0;\n  border-top-color:#000\n}\n\n.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{\n  padding:0 .4rem\n}\n\n.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{\n  left:0;\n  width:.4rem;\n  height:.8rem\n}\n\n.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{\n  right:0;\n  border-width:.4rem .4rem .4rem 0;\n  border-right-color:#000\n}\n\n.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{\n  padding:.4rem 0\n}\n\n.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{\n  top:0\n}\n\n.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{\n  bottom:0;\n  border-width:0 .4rem .4rem;\n  border-bottom-color:#000\n}\n\n.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{\n  padding:0 .4rem\n}\n\n.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{\n  right:0;\n  width:.4rem;\n  height:.8rem\n}\n\n.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{\n  left:0;\n  border-width:.4rem 0 .4rem .4rem;\n  border-left-color:#000\n}\n\n.tooltip-inner{\n  max-width:200px;\n  padding:.25rem .5rem;\n  color:#fff;\n  text-align:center;\n  background-color:#000;\n  border-radius:.25rem\n}\n\n.popover{\n  top:0;\n  left:0;\n  z-index:1060;\n  max-width:276px;\n  font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n  font-style:normal;\n  font-weight:400;\n  line-height:1.5;\n  text-align:left;\n  text-align:start;\n  text-decoration:none;\n  text-shadow:none;\n  text-transform:none;\n  letter-spacing:normal;\n  word-break:normal;\n  word-spacing:normal;\n  white-space:normal;\n  line-break:auto;\n  font-size:.875rem;\n  word-wrap:break-word;\n  background-color:#fff;\n  background-clip:padding-box;\n  border:1px solid rgba(0,0,0,.2);\n  border-radius:.3rem\n}\n\n.popover,.popover .arrow{\n  position:absolute;\n  display:block\n}\n\n.popover .arrow{\n  width:1rem;\n  height:.5rem;\n  margin:0 .3rem\n}\n\n.popover .arrow:after,.popover .arrow:before{\n  position:absolute;\n  display:block;\n  content:\"\";\n  border-color:transparent;\n  border-style:solid\n}\n\n.bs-popover-auto[x-placement^=top],.bs-popover-top{\n  margin-bottom:.5rem\n}\n\n.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{\n  bottom:calc(-.5rem - 1px)\n}\n\n.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before{\n  bottom:0;\n  border-width:.5rem .5rem 0;\n  border-top-color:rgba(0,0,0,.25)\n}\n\n.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after{\n  bottom:1px;\n  border-width:.5rem .5rem 0;\n  border-top-color:#fff\n}\n\n.bs-popover-auto[x-placement^=right],.bs-popover-right{\n  margin-left:.5rem\n}\n\n.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{\n  left:calc(-.5rem - 1px);\n  width:.5rem;\n  height:1rem;\n  margin:.3rem 0\n}\n\n.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before{\n  left:0;\n  border-width:.5rem .5rem .5rem 0;\n  border-right-color:rgba(0,0,0,.25)\n}\n\n.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after{\n  left:1px;\n  border-width:.5rem .5rem .5rem 0;\n  border-right-color:#fff\n}\n\n.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{\n  margin-top:.5rem\n}\n\n.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{\n  top:calc(-.5rem - 1px)\n}\n\n.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before{\n  top:0;\n  border-width:0 .5rem .5rem;\n  border-bottom-color:rgba(0,0,0,.25)\n}\n\n.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after{\n  top:1px;\n  border-width:0 .5rem .5rem;\n  border-bottom-color:#fff\n}\n\n.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{\n  position:absolute;\n  top:0;\n  left:50%;\n  display:block;\n  width:1rem;\n  margin-left:-.5rem;\n  content:\"\";\n  border-bottom:1px solid #f7f7f7\n}\n\n.bs-popover-auto[x-placement^=left],.bs-popover-left{\n  margin-right:.5rem\n}\n\n.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{\n  right:calc(-.5rem - 1px);\n  width:.5rem;\n  height:1rem;\n  margin:.3rem 0\n}\n\n.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before{\n  right:0;\n  border-width:.5rem 0 .5rem .5rem;\n  border-left-color:rgba(0,0,0,.25)\n}\n\n.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after{\n  right:1px;\n  border-width:.5rem 0 .5rem .5rem;\n  border-left-color:#fff\n}\n\n.popover-header{\n  padding:.5rem .75rem;\n  margin-bottom:0;\n  font-size:1rem;\n  background-color:#f7f7f7;\n  border-bottom:1px solid #ebebeb;\n  border-top-left-radius:calc(.3rem - 1px);\n  border-top-right-radius:calc(.3rem - 1px)\n}\n\n.popover-header:empty{\n  display:none\n}\n\n.popover-body{\n  padding:.5rem .75rem;\n  color:#212529\n}\n\n.carousel{\n  position:relative\n}\n\n.carousel.pointer-event{\n  touch-action:pan-y\n}\n\n.carousel-inner{\n  position:relative;\n  width:100%;\n  overflow:hidden\n}\n\n.carousel-inner:after{\n  display:block;\n  clear:both;\n  content:\"\"\n}\n\n.carousel-item{\n  position:relative;\n  display:none;\n  float:left;\n  width:100%;\n  margin-right:-100%;\n  -webkit-backface-visibility:hidden;\n  backface-visibility:hidden;\n  transition:transform .6s ease-in-out\n}\n\n@media (prefers-reduced-motion:reduce){\n  .carousel-item{\n    transition:none\n  }\n}\n\n.carousel-item-next,.carousel-item-prev,.carousel-item.active{\n  display:block\n}\n\n.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){\n  transform:translateX(100%)\n}\n\n.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){\n  transform:translateX(-100%)\n}\n\n.carousel-fade .carousel-item{\n  opacity:0;\n  transition-property:opacity;\n  transform:none\n}\n\n.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{\n  z-index:1;\n  opacity:1\n}\n\n.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{\n  z-index:0;\n  opacity:0;\n  transition:opacity 0s .6s\n}\n\n@media (prefers-reduced-motion:reduce){\n  .carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{\n    transition:none\n  }\n}\n\n.carousel-control-next,.carousel-control-prev{\n  position:absolute;\n  top:0;\n  bottom:0;\n  z-index:1;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:15%;\n  color:#fff;\n  text-align:center;\n  opacity:.5;\n  transition:opacity .15s ease\n}\n\n@media (prefers-reduced-motion:reduce){\n  .carousel-control-next,.carousel-control-prev{\n    transition:none\n  }\n}\n\n.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{\n  color:#fff;\n  text-decoration:none;\n  outline:0;\n  opacity:.9\n}\n\n.carousel-control-prev{\n  left:0\n}\n\n.carousel-control-next{\n  right:0\n}\n\n.carousel-control-next-icon,.carousel-control-prev-icon{\n  display:inline-block;\n  width:20px;\n  height:20px;\n  background:50%/100% 100% no-repeat\n}\n\n.carousel-control-prev-icon{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3E%3C/svg%3E\")\n}\n\n.carousel-control-next-icon{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3E%3C/svg%3E\")\n}\n\n.carousel-indicators{\n  position:absolute;\n  right:0;\n  bottom:0;\n  left:0;\n  z-index:15;\n  display:flex;\n  justify-content:center;\n  padding-left:0;\n  margin-right:15%;\n  margin-left:15%;\n  list-style:none\n}\n\n.carousel-indicators li{\n  box-sizing:content-box;\n  flex:0 1 auto;\n  width:30px;\n  height:3px;\n  margin-right:3px;\n  margin-left:3px;\n  text-indent:-999px;\n  cursor:pointer;\n  background-color:#fff;\n  background-clip:padding-box;\n  border-top:10px solid transparent;\n  border-bottom:10px solid transparent;\n  opacity:.5;\n  transition:opacity .6s ease\n}\n\n@media (prefers-reduced-motion:reduce){\n  .carousel-indicators li{\n    transition:none\n  }\n}\n\n.carousel-indicators .active{\n  opacity:1\n}\n\n.carousel-caption{\n  position:absolute;\n  right:15%;\n  bottom:20px;\n  left:15%;\n  z-index:10;\n  padding-top:20px;\n  padding-bottom:20px;\n  color:#fff;\n  text-align:center\n}\n\n@-webkit-keyframes spinner-border{\n  to{\n    transform:rotate(1turn)\n  }\n}\n\n@keyframes spinner-border{\n  to{\n    transform:rotate(1turn)\n  }\n}\n\n.spinner-border{\n  display:inline-block;\n  width:2rem;\n  height:2rem;\n  vertical-align:text-bottom;\n  border:.25em solid;\n  border-right:.25em solid transparent;\n  border-radius:50%;\n  -webkit-animation:spinner-border .75s linear infinite;\n  animation:spinner-border .75s linear infinite\n}\n\n.spinner-border-sm{\n  width:1rem;\n  height:1rem;\n  border-width:.2em\n}\n\n@-webkit-keyframes spinner-grow{\n  0%{\n    transform:scale(0)\n  }\n\n  50%{\n    opacity:1;\n    transform:none\n  }\n}\n\n@keyframes spinner-grow{\n  0%{\n    transform:scale(0)\n  }\n\n  50%{\n    opacity:1;\n    transform:none\n  }\n}\n\n.spinner-grow{\n  display:inline-block;\n  width:2rem;\n  height:2rem;\n  vertical-align:text-bottom;\n  background-color:currentColor;\n  border-radius:50%;\n  opacity:0;\n  -webkit-animation:spinner-grow .75s linear infinite;\n  animation:spinner-grow .75s linear infinite\n}\n\n.spinner-grow-sm{\n  width:1rem;\n  height:1rem\n}\n\n@media (prefers-reduced-motion:reduce){\n  .spinner-border,.spinner-grow{\n    -webkit-animation-duration:1.5s;\n    animation-duration:1.5s\n  }\n}\n\n.align-baseline{\n  vertical-align:baseline!important\n}\n\n.align-top{\n  vertical-align:top!important\n}\n\n.align-middle{\n  vertical-align:middle!important\n}\n\n.align-bottom{\n  vertical-align:bottom!important\n}\n\n.align-text-bottom{\n  vertical-align:text-bottom!important\n}\n\n.align-text-top{\n  vertical-align:text-top!important\n}\n\n.bg-primary{\n  background-color:#007bff!important\n}\n\na.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{\n  background-color:#0062cc!important\n}\n\n.bg-secondary{\n  background-color:#6c757d!important\n}\n\na.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{\n  background-color:#545b62!important\n}\n\n.bg-success{\n  background-color:#28a745!important\n}\n\na.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{\n  background-color:#1e7e34!important\n}\n\n.bg-info{\n  background-color:#17a2b8!important\n}\n\na.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{\n  background-color:#117a8b!important\n}\n\n.bg-warning{\n  background-color:#ffc107!important\n}\n\na.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{\n  background-color:#d39e00!important\n}\n\n.bg-danger{\n  background-color:#dc3545!important\n}\n\na.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{\n  background-color:#bd2130!important\n}\n\n.bg-light{\n  background-color:#f8f9fa!important\n}\n\na.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{\n  background-color:#dae0e5!important\n}\n\n.bg-dark{\n  background-color:#343a40!important\n}\n\na.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{\n  background-color:#1d2124!important\n}\n\n.bg-white{\n  background-color:#fff!important\n}\n\n.bg-transparent{\n  background-color:transparent!important\n}\n\n.border{\n  border:1px solid #dee2e6!important\n}\n\n.border-top{\n  border-top:1px solid #dee2e6!important\n}\n\n.border-right{\n  border-right:1px solid #dee2e6!important\n}\n\n.border-bottom{\n  border-bottom:1px solid #dee2e6!important\n}\n\n.border-left{\n  border-left:1px solid #dee2e6!important\n}\n\n.border-0{\n  border:0!important\n}\n\n.border-top-0{\n  border-top:0!important\n}\n\n.border-right-0{\n  border-right:0!important\n}\n\n.border-bottom-0{\n  border-bottom:0!important\n}\n\n.border-left-0{\n  border-left:0!important\n}\n\n.border-primary{\n  border-color:#007bff!important\n}\n\n.border-secondary{\n  border-color:#6c757d!important\n}\n\n.border-success{\n  border-color:#28a745!important\n}\n\n.border-info{\n  border-color:#17a2b8!important\n}\n\n.border-warning{\n  border-color:#ffc107!important\n}\n\n.border-danger{\n  border-color:#dc3545!important\n}\n\n.border-light{\n  border-color:#f8f9fa!important\n}\n\n.border-dark{\n  border-color:#343a40!important\n}\n\n.border-white{\n  border-color:#fff!important\n}\n\n.rounded-sm{\n  border-radius:.2rem!important\n}\n\n.rounded{\n  border-radius:.25rem!important\n}\n\n.rounded-top{\n  border-top-left-radius:.25rem!important\n}\n\n.rounded-right,.rounded-top{\n  border-top-right-radius:.25rem!important\n}\n\n.rounded-bottom,.rounded-right{\n  border-bottom-right-radius:.25rem!important\n}\n\n.rounded-bottom,.rounded-left{\n  border-bottom-left-radius:.25rem!important\n}\n\n.rounded-left{\n  border-top-left-radius:.25rem!important\n}\n\n.rounded-lg{\n  border-radius:.3rem!important\n}\n\n.rounded-circle{\n  border-radius:50%!important\n}\n\n.rounded-pill{\n  border-radius:50rem!important\n}\n\n.rounded-0{\n  border-radius:0!important\n}\n\n.clearfix:after{\n  display:block;\n  clear:both;\n  content:\"\"\n}\n\n.d-none{\n  display:none!important\n}\n\n.d-inline{\n  display:inline!important\n}\n\n.d-inline-block{\n  display:inline-block!important\n}\n\n.d-block{\n  display:block!important\n}\n\n.d-table{\n  display:table!important\n}\n\n.d-table-row{\n  display:table-row!important\n}\n\n.d-table-cell{\n  display:table-cell!important\n}\n\n.d-flex{\n  display:flex!important\n}\n\n.d-inline-flex{\n  display:inline-flex!important\n}\n\n@media (min-width:576px){\n  .d-sm-none{\n    display:none!important\n  }\n\n  .d-sm-inline{\n    display:inline!important\n  }\n\n  .d-sm-inline-block{\n    display:inline-block!important\n  }\n\n  .d-sm-block{\n    display:block!important\n  }\n\n  .d-sm-table{\n    display:table!important\n  }\n\n  .d-sm-table-row{\n    display:table-row!important\n  }\n\n  .d-sm-table-cell{\n    display:table-cell!important\n  }\n\n  .d-sm-flex{\n    display:flex!important\n  }\n\n  .d-sm-inline-flex{\n    display:inline-flex!important\n  }\n}\n\n@media (min-width:768px){\n  .d-md-none{\n    display:none!important\n  }\n\n  .d-md-inline{\n    display:inline!important\n  }\n\n  .d-md-inline-block{\n    display:inline-block!important\n  }\n\n  .d-md-block{\n    display:block!important\n  }\n\n  .d-md-table{\n    display:table!important\n  }\n\n  .d-md-table-row{\n    display:table-row!important\n  }\n\n  .d-md-table-cell{\n    display:table-cell!important\n  }\n\n  .d-md-flex{\n    display:flex!important\n  }\n\n  .d-md-inline-flex{\n    display:inline-flex!important\n  }\n}\n\n@media (min-width:992px){\n  .d-lg-none{\n    display:none!important\n  }\n\n  .d-lg-inline{\n    display:inline!important\n  }\n\n  .d-lg-inline-block{\n    display:inline-block!important\n  }\n\n  .d-lg-block{\n    display:block!important\n  }\n\n  .d-lg-table{\n    display:table!important\n  }\n\n  .d-lg-table-row{\n    display:table-row!important\n  }\n\n  .d-lg-table-cell{\n    display:table-cell!important\n  }\n\n  .d-lg-flex{\n    display:flex!important\n  }\n\n  .d-lg-inline-flex{\n    display:inline-flex!important\n  }\n}\n\n@media (min-width:1200px){\n  .d-xl-none{\n    display:none!important\n  }\n\n  .d-xl-inline{\n    display:inline!important\n  }\n\n  .d-xl-inline-block{\n    display:inline-block!important\n  }\n\n  .d-xl-block{\n    display:block!important\n  }\n\n  .d-xl-table{\n    display:table!important\n  }\n\n  .d-xl-table-row{\n    display:table-row!important\n  }\n\n  .d-xl-table-cell{\n    display:table-cell!important\n  }\n\n  .d-xl-flex{\n    display:flex!important\n  }\n\n  .d-xl-inline-flex{\n    display:inline-flex!important\n  }\n}\n\n@media print{\n  .d-print-none{\n    display:none!important\n  }\n\n  .d-print-inline{\n    display:inline!important\n  }\n\n  .d-print-inline-block{\n    display:inline-block!important\n  }\n\n  .d-print-block{\n    display:block!important\n  }\n\n  .d-print-table{\n    display:table!important\n  }\n\n  .d-print-table-row{\n    display:table-row!important\n  }\n\n  .d-print-table-cell{\n    display:table-cell!important\n  }\n\n  .d-print-flex{\n    display:flex!important\n  }\n\n  .d-print-inline-flex{\n    display:inline-flex!important\n  }\n}\n\n.embed-responsive{\n  position:relative;\n  display:block;\n  width:100%;\n  padding:0;\n  overflow:hidden\n}\n\n.embed-responsive:before{\n  display:block;\n  content:\"\"\n}\n\n.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  width:100%;\n  height:100%;\n  border:0\n}\n\n.embed-responsive-21by9:before{\n  padding-top:42.857143%\n}\n\n.embed-responsive-16by9:before{\n  padding-top:56.25%\n}\n\n.embed-responsive-4by3:before{\n  padding-top:75%\n}\n\n.embed-responsive-1by1:before{\n  padding-top:100%\n}\n\n.flex-row{\n  flex-direction:row!important\n}\n\n.flex-column{\n  flex-direction:column!important\n}\n\n.flex-row-reverse{\n  flex-direction:row-reverse!important\n}\n\n.flex-column-reverse{\n  flex-direction:column-reverse!important\n}\n\n.flex-wrap{\n  flex-wrap:wrap!important\n}\n\n.flex-nowrap{\n  flex-wrap:nowrap!important\n}\n\n.flex-wrap-reverse{\n  flex-wrap:wrap-reverse!important\n}\n\n.flex-fill{\n  flex:1 1 auto!important\n}\n\n.flex-grow-0{\n  flex-grow:0!important\n}\n\n.flex-grow-1{\n  flex-grow:1!important\n}\n\n.flex-shrink-0{\n  flex-shrink:0!important\n}\n\n.flex-shrink-1{\n  flex-shrink:1!important\n}\n\n.justify-content-start{\n  justify-content:flex-start!important\n}\n\n.justify-content-end{\n  justify-content:flex-end!important\n}\n\n.justify-content-center{\n  justify-content:center!important\n}\n\n.justify-content-between{\n  justify-content:space-between!important\n}\n\n.justify-content-around{\n  justify-content:space-around!important\n}\n\n.align-items-start{\n  align-items:flex-start!important\n}\n\n.align-items-end{\n  align-items:flex-end!important\n}\n\n.align-items-center{\n  align-items:center!important\n}\n\n.align-items-baseline{\n  align-items:baseline!important\n}\n\n.align-items-stretch{\n  align-items:stretch!important\n}\n\n.align-content-start{\n  align-content:flex-start!important\n}\n\n.align-content-end{\n  align-content:flex-end!important\n}\n\n.align-content-center{\n  align-content:center!important\n}\n\n.align-content-between{\n  align-content:space-between!important\n}\n\n.align-content-around{\n  align-content:space-around!important\n}\n\n.align-content-stretch{\n  align-content:stretch!important\n}\n\n.align-self-auto{\n  align-self:auto!important\n}\n\n.align-self-start{\n  align-self:flex-start!important\n}\n\n.align-self-end{\n  align-self:flex-end!important\n}\n\n.align-self-center{\n  align-self:center!important\n}\n\n.align-self-baseline{\n  align-self:baseline!important\n}\n\n.align-self-stretch{\n  align-self:stretch!important\n}\n\n@media (min-width:576px){\n  .flex-sm-row{\n    flex-direction:row!important\n  }\n\n  .flex-sm-column{\n    flex-direction:column!important\n  }\n\n  .flex-sm-row-reverse{\n    flex-direction:row-reverse!important\n  }\n\n  .flex-sm-column-reverse{\n    flex-direction:column-reverse!important\n  }\n\n  .flex-sm-wrap{\n    flex-wrap:wrap!important\n  }\n\n  .flex-sm-nowrap{\n    flex-wrap:nowrap!important\n  }\n\n  .flex-sm-wrap-reverse{\n    flex-wrap:wrap-reverse!important\n  }\n\n  .flex-sm-fill{\n    flex:1 1 auto!important\n  }\n\n  .flex-sm-grow-0{\n    flex-grow:0!important\n  }\n\n  .flex-sm-grow-1{\n    flex-grow:1!important\n  }\n\n  .flex-sm-shrink-0{\n    flex-shrink:0!important\n  }\n\n  .flex-sm-shrink-1{\n    flex-shrink:1!important\n  }\n\n  .justify-content-sm-start{\n    justify-content:flex-start!important\n  }\n\n  .justify-content-sm-end{\n    justify-content:flex-end!important\n  }\n\n  .justify-content-sm-center{\n    justify-content:center!important\n  }\n\n  .justify-content-sm-between{\n    justify-content:space-between!important\n  }\n\n  .justify-content-sm-around{\n    justify-content:space-around!important\n  }\n\n  .align-items-sm-start{\n    align-items:flex-start!important\n  }\n\n  .align-items-sm-end{\n    align-items:flex-end!important\n  }\n\n  .align-items-sm-center{\n    align-items:center!important\n  }\n\n  .align-items-sm-baseline{\n    align-items:baseline!important\n  }\n\n  .align-items-sm-stretch{\n    align-items:stretch!important\n  }\n\n  .align-content-sm-start{\n    align-content:flex-start!important\n  }\n\n  .align-content-sm-end{\n    align-content:flex-end!important\n  }\n\n  .align-content-sm-center{\n    align-content:center!important\n  }\n\n  .align-content-sm-between{\n    align-content:space-between!important\n  }\n\n  .align-content-sm-around{\n    align-content:space-around!important\n  }\n\n  .align-content-sm-stretch{\n    align-content:stretch!important\n  }\n\n  .align-self-sm-auto{\n    align-self:auto!important\n  }\n\n  .align-self-sm-start{\n    align-self:flex-start!important\n  }\n\n  .align-self-sm-end{\n    align-self:flex-end!important\n  }\n\n  .align-self-sm-center{\n    align-self:center!important\n  }\n\n  .align-self-sm-baseline{\n    align-self:baseline!important\n  }\n\n  .align-self-sm-stretch{\n    align-self:stretch!important\n  }\n}\n\n@media (min-width:768px){\n  .flex-md-row{\n    flex-direction:row!important\n  }\n\n  .flex-md-column{\n    flex-direction:column!important\n  }\n\n  .flex-md-row-reverse{\n    flex-direction:row-reverse!important\n  }\n\n  .flex-md-column-reverse{\n    flex-direction:column-reverse!important\n  }\n\n  .flex-md-wrap{\n    flex-wrap:wrap!important\n  }\n\n  .flex-md-nowrap{\n    flex-wrap:nowrap!important\n  }\n\n  .flex-md-wrap-reverse{\n    flex-wrap:wrap-reverse!important\n  }\n\n  .flex-md-fill{\n    flex:1 1 auto!important\n  }\n\n  .flex-md-grow-0{\n    flex-grow:0!important\n  }\n\n  .flex-md-grow-1{\n    flex-grow:1!important\n  }\n\n  .flex-md-shrink-0{\n    flex-shrink:0!important\n  }\n\n  .flex-md-shrink-1{\n    flex-shrink:1!important\n  }\n\n  .justify-content-md-start{\n    justify-content:flex-start!important\n  }\n\n  .justify-content-md-end{\n    justify-content:flex-end!important\n  }\n\n  .justify-content-md-center{\n    justify-content:center!important\n  }\n\n  .justify-content-md-between{\n    justify-content:space-between!important\n  }\n\n  .justify-content-md-around{\n    justify-content:space-around!important\n  }\n\n  .align-items-md-start{\n    align-items:flex-start!important\n  }\n\n  .align-items-md-end{\n    align-items:flex-end!important\n  }\n\n  .align-items-md-center{\n    align-items:center!important\n  }\n\n  .align-items-md-baseline{\n    align-items:baseline!important\n  }\n\n  .align-items-md-stretch{\n    align-items:stretch!important\n  }\n\n  .align-content-md-start{\n    align-content:flex-start!important\n  }\n\n  .align-content-md-end{\n    align-content:flex-end!important\n  }\n\n  .align-content-md-center{\n    align-content:center!important\n  }\n\n  .align-content-md-between{\n    align-content:space-between!important\n  }\n\n  .align-content-md-around{\n    align-content:space-around!important\n  }\n\n  .align-content-md-stretch{\n    align-content:stretch!important\n  }\n\n  .align-self-md-auto{\n    align-self:auto!important\n  }\n\n  .align-self-md-start{\n    align-self:flex-start!important\n  }\n\n  .align-self-md-end{\n    align-self:flex-end!important\n  }\n\n  .align-self-md-center{\n    align-self:center!important\n  }\n\n  .align-self-md-baseline{\n    align-self:baseline!important\n  }\n\n  .align-self-md-stretch{\n    align-self:stretch!important\n  }\n}\n\n@media (min-width:992px){\n  .flex-lg-row{\n    flex-direction:row!important\n  }\n\n  .flex-lg-column{\n    flex-direction:column!important\n  }\n\n  .flex-lg-row-reverse{\n    flex-direction:row-reverse!important\n  }\n\n  .flex-lg-column-reverse{\n    flex-direction:column-reverse!important\n  }\n\n  .flex-lg-wrap{\n    flex-wrap:wrap!important\n  }\n\n  .flex-lg-nowrap{\n    flex-wrap:nowrap!important\n  }\n\n  .flex-lg-wrap-reverse{\n    flex-wrap:wrap-reverse!important\n  }\n\n  .flex-lg-fill{\n    flex:1 1 auto!important\n  }\n\n  .flex-lg-grow-0{\n    flex-grow:0!important\n  }\n\n  .flex-lg-grow-1{\n    flex-grow:1!important\n  }\n\n  .flex-lg-shrink-0{\n    flex-shrink:0!important\n  }\n\n  .flex-lg-shrink-1{\n    flex-shrink:1!important\n  }\n\n  .justify-content-lg-start{\n    justify-content:flex-start!important\n  }\n\n  .justify-content-lg-end{\n    justify-content:flex-end!important\n  }\n\n  .justify-content-lg-center{\n    justify-content:center!important\n  }\n\n  .justify-content-lg-between{\n    justify-content:space-between!important\n  }\n\n  .justify-content-lg-around{\n    justify-content:space-around!important\n  }\n\n  .align-items-lg-start{\n    align-items:flex-start!important\n  }\n\n  .align-items-lg-end{\n    align-items:flex-end!important\n  }\n\n  .align-items-lg-center{\n    align-items:center!important\n  }\n\n  .align-items-lg-baseline{\n    align-items:baseline!important\n  }\n\n  .align-items-lg-stretch{\n    align-items:stretch!important\n  }\n\n  .align-content-lg-start{\n    align-content:flex-start!important\n  }\n\n  .align-content-lg-end{\n    align-content:flex-end!important\n  }\n\n  .align-content-lg-center{\n    align-content:center!important\n  }\n\n  .align-content-lg-between{\n    align-content:space-between!important\n  }\n\n  .align-content-lg-around{\n    align-content:space-around!important\n  }\n\n  .align-content-lg-stretch{\n    align-content:stretch!important\n  }\n\n  .align-self-lg-auto{\n    align-self:auto!important\n  }\n\n  .align-self-lg-start{\n    align-self:flex-start!important\n  }\n\n  .align-self-lg-end{\n    align-self:flex-end!important\n  }\n\n  .align-self-lg-center{\n    align-self:center!important\n  }\n\n  .align-self-lg-baseline{\n    align-self:baseline!important\n  }\n\n  .align-self-lg-stretch{\n    align-self:stretch!important\n  }\n}\n\n@media (min-width:1200px){\n  .flex-xl-row{\n    flex-direction:row!important\n  }\n\n  .flex-xl-column{\n    flex-direction:column!important\n  }\n\n  .flex-xl-row-reverse{\n    flex-direction:row-reverse!important\n  }\n\n  .flex-xl-column-reverse{\n    flex-direction:column-reverse!important\n  }\n\n  .flex-xl-wrap{\n    flex-wrap:wrap!important\n  }\n\n  .flex-xl-nowrap{\n    flex-wrap:nowrap!important\n  }\n\n  .flex-xl-wrap-reverse{\n    flex-wrap:wrap-reverse!important\n  }\n\n  .flex-xl-fill{\n    flex:1 1 auto!important\n  }\n\n  .flex-xl-grow-0{\n    flex-grow:0!important\n  }\n\n  .flex-xl-grow-1{\n    flex-grow:1!important\n  }\n\n  .flex-xl-shrink-0{\n    flex-shrink:0!important\n  }\n\n  .flex-xl-shrink-1{\n    flex-shrink:1!important\n  }\n\n  .justify-content-xl-start{\n    justify-content:flex-start!important\n  }\n\n  .justify-content-xl-end{\n    justify-content:flex-end!important\n  }\n\n  .justify-content-xl-center{\n    justify-content:center!important\n  }\n\n  .justify-content-xl-between{\n    justify-content:space-between!important\n  }\n\n  .justify-content-xl-around{\n    justify-content:space-around!important\n  }\n\n  .align-items-xl-start{\n    align-items:flex-start!important\n  }\n\n  .align-items-xl-end{\n    align-items:flex-end!important\n  }\n\n  .align-items-xl-center{\n    align-items:center!important\n  }\n\n  .align-items-xl-baseline{\n    align-items:baseline!important\n  }\n\n  .align-items-xl-stretch{\n    align-items:stretch!important\n  }\n\n  .align-content-xl-start{\n    align-content:flex-start!important\n  }\n\n  .align-content-xl-end{\n    align-content:flex-end!important\n  }\n\n  .align-content-xl-center{\n    align-content:center!important\n  }\n\n  .align-content-xl-between{\n    align-content:space-between!important\n  }\n\n  .align-content-xl-around{\n    align-content:space-around!important\n  }\n\n  .align-content-xl-stretch{\n    align-content:stretch!important\n  }\n\n  .align-self-xl-auto{\n    align-self:auto!important\n  }\n\n  .align-self-xl-start{\n    align-self:flex-start!important\n  }\n\n  .align-self-xl-end{\n    align-self:flex-end!important\n  }\n\n  .align-self-xl-center{\n    align-self:center!important\n  }\n\n  .align-self-xl-baseline{\n    align-self:baseline!important\n  }\n\n  .align-self-xl-stretch{\n    align-self:stretch!important\n  }\n}\n\n.float-left{\n  float:left!important\n}\n\n.float-right{\n  float:right!important\n}\n\n.float-none{\n  float:none!important\n}\n\n@media (min-width:576px){\n  .float-sm-left{\n    float:left!important\n  }\n\n  .float-sm-right{\n    float:right!important\n  }\n\n  .float-sm-none{\n    float:none!important\n  }\n}\n\n@media (min-width:768px){\n  .float-md-left{\n    float:left!important\n  }\n\n  .float-md-right{\n    float:right!important\n  }\n\n  .float-md-none{\n    float:none!important\n  }\n}\n\n@media (min-width:992px){\n  .float-lg-left{\n    float:left!important\n  }\n\n  .float-lg-right{\n    float:right!important\n  }\n\n  .float-lg-none{\n    float:none!important\n  }\n}\n\n@media (min-width:1200px){\n  .float-xl-left{\n    float:left!important\n  }\n\n  .float-xl-right{\n    float:right!important\n  }\n\n  .float-xl-none{\n    float:none!important\n  }\n}\n\n.user-select-all{\n  -webkit-user-select:all!important;\n  -moz-user-select:all!important;\n  user-select:all!important\n}\n\n.user-select-auto{\n  -webkit-user-select:auto!important;\n  -moz-user-select:auto!important;\n  -ms-user-select:auto!important;\n  user-select:auto!important\n}\n\n.user-select-none{\n  -webkit-user-select:none!important;\n  -moz-user-select:none!important;\n  -ms-user-select:none!important;\n  user-select:none!important\n}\n\n.overflow-auto{\n  overflow:auto!important\n}\n\n.overflow-hidden{\n  overflow:hidden!important\n}\n\n.position-static{\n  position:static!important\n}\n\n.position-relative{\n  position:relative!important\n}\n\n.position-absolute{\n  position:absolute!important\n}\n\n.position-fixed{\n  position:fixed!important\n}\n\n.position-sticky{\n  position:sticky!important\n}\n\n.fixed-top{\n  top:0\n}\n\n.fixed-bottom,.fixed-top{\n  position:fixed;\n  right:0;\n  left:0;\n  z-index:1030\n}\n\n.fixed-bottom{\n  bottom:0\n}\n\n@supports (position:sticky){\n  .sticky-top{\n    position:sticky;\n    top:0;\n    z-index:1020\n  }\n}\n\n.sr-only{\n  position:absolute;\n  width:1px;\n  height:1px;\n  padding:0;\n  margin:-1px;\n  overflow:hidden;\n  clip:rect(0,0,0,0);\n  white-space:nowrap;\n  border:0\n}\n\n.sr-only-focusable:active,.sr-only-focusable:focus{\n  position:static;\n  width:auto;\n  height:auto;\n  overflow:visible;\n  clip:auto;\n  white-space:normal\n}\n\n.shadow-sm{\n  box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important\n}\n\n.shadow{\n  box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important\n}\n\n.shadow-lg{\n  box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important\n}\n\n.shadow-none{\n  box-shadow:none!important\n}\n\n.w-25{\n  width:25%!important\n}\n\n.w-50{\n  width:50%!important\n}\n\n.w-75{\n  width:75%!important\n}\n\n.w-100{\n  width:100%!important\n}\n\n.w-auto{\n  width:auto!important\n}\n\n.h-25{\n  height:25%!important\n}\n\n.h-50{\n  height:50%!important\n}\n\n.h-75{\n  height:75%!important\n}\n\n.h-100{\n  height:100%!important\n}\n\n.h-auto{\n  height:auto!important\n}\n\n.mw-100{\n  max-width:100%!important\n}\n\n.mh-100{\n  max-height:100%!important\n}\n\n.min-vw-100{\n  min-width:100vw!important\n}\n\n.min-vh-100{\n  min-height:100vh!important\n}\n\n.vw-100{\n  width:100vw!important\n}\n\n.vh-100{\n  height:100vh!important\n}\n\n.m-0{\n  margin:0!important\n}\n\n.mt-0,.my-0{\n  margin-top:0!important\n}\n\n.mr-0,.mx-0{\n  margin-right:0!important\n}\n\n.mb-0,.my-0{\n  margin-bottom:0!important\n}\n\n.ml-0,.mx-0{\n  margin-left:0!important\n}\n\n.m-1{\n  margin:.25rem!important\n}\n\n.mt-1,.my-1{\n  margin-top:.25rem!important\n}\n\n.mr-1,.mx-1{\n  margin-right:.25rem!important\n}\n\n.mb-1,.my-1{\n  margin-bottom:.25rem!important\n}\n\n.ml-1,.mx-1{\n  margin-left:.25rem!important\n}\n\n.m-2{\n  margin:.5rem!important\n}\n\n.mt-2,.my-2{\n  margin-top:.5rem!important\n}\n\n.mr-2,.mx-2{\n  margin-right:.5rem!important\n}\n\n.mb-2,.my-2{\n  margin-bottom:.5rem!important\n}\n\n.ml-2,.mx-2{\n  margin-left:.5rem!important\n}\n\n.m-3{\n  margin:1rem!important\n}\n\n.mt-3,.my-3{\n  margin-top:1rem!important\n}\n\n.mr-3,.mx-3{\n  margin-right:1rem!important\n}\n\n.mb-3,.my-3{\n  margin-bottom:1rem!important\n}\n\n.ml-3,.mx-3{\n  margin-left:1rem!important\n}\n\n.m-4{\n  margin:1.5rem!important\n}\n\n.mt-4,.my-4{\n  margin-top:1.5rem!important\n}\n\n.mr-4,.mx-4{\n  margin-right:1.5rem!important\n}\n\n.mb-4,.my-4{\n  margin-bottom:1.5rem!important\n}\n\n.ml-4,.mx-4{\n  margin-left:1.5rem!important\n}\n\n.m-5{\n  margin:3rem!important\n}\n\n.mt-5,.my-5{\n  margin-top:3rem!important\n}\n\n.mr-5,.mx-5{\n  margin-right:3rem!important\n}\n\n.mb-5,.my-5{\n  margin-bottom:3rem!important\n}\n\n.ml-5,.mx-5{\n  margin-left:3rem!important\n}\n\n.p-0{\n  padding:0!important\n}\n\n.pt-0,.py-0{\n  padding-top:0!important\n}\n\n.pr-0,.px-0{\n  padding-right:0!important\n}\n\n.pb-0,.py-0{\n  padding-bottom:0!important\n}\n\n.pl-0,.px-0{\n  padding-left:0!important\n}\n\n.p-1{\n  padding:.25rem!important\n}\n\n.pt-1,.py-1{\n  padding-top:.25rem!important\n}\n\n.pr-1,.px-1{\n  padding-right:.25rem!important\n}\n\n.pb-1,.py-1{\n  padding-bottom:.25rem!important\n}\n\n.pl-1,.px-1{\n  padding-left:.25rem!important\n}\n\n.p-2{\n  padding:.5rem!important\n}\n\n.pt-2,.py-2{\n  padding-top:.5rem!important\n}\n\n.pr-2,.px-2{\n  padding-right:.5rem!important\n}\n\n.pb-2,.py-2{\n  padding-bottom:.5rem!important\n}\n\n.pl-2,.px-2{\n  padding-left:.5rem!important\n}\n\n.p-3{\n  padding:1rem!important\n}\n\n.pt-3,.py-3{\n  padding-top:1rem!important\n}\n\n.pr-3,.px-3{\n  padding-right:1rem!important\n}\n\n.pb-3,.py-3{\n  padding-bottom:1rem!important\n}\n\n.pl-3,.px-3{\n  padding-left:1rem!important\n}\n\n.p-4{\n  padding:1.5rem!important\n}\n\n.pt-4,.py-4{\n  padding-top:1.5rem!important\n}\n\n.pr-4,.px-4{\n  padding-right:1.5rem!important\n}\n\n.pb-4,.py-4{\n  padding-bottom:1.5rem!important\n}\n\n.pl-4,.px-4{\n  padding-left:1.5rem!important\n}\n\n.p-5{\n  padding:3rem!important\n}\n\n.pt-5,.py-5{\n  padding-top:3rem!important\n}\n\n.pr-5,.px-5{\n  padding-right:3rem!important\n}\n\n.pb-5,.py-5{\n  padding-bottom:3rem!important\n}\n\n.pl-5,.px-5{\n  padding-left:3rem!important\n}\n\n.m-n1{\n  margin:-.25rem!important\n}\n\n.mt-n1,.my-n1{\n  margin-top:-.25rem!important\n}\n\n.mr-n1,.mx-n1{\n  margin-right:-.25rem!important\n}\n\n.mb-n1,.my-n1{\n  margin-bottom:-.25rem!important\n}\n\n.ml-n1,.mx-n1{\n  margin-left:-.25rem!important\n}\n\n.m-n2{\n  margin:-.5rem!important\n}\n\n.mt-n2,.my-n2{\n  margin-top:-.5rem!important\n}\n\n.mr-n2,.mx-n2{\n  margin-right:-.5rem!important\n}\n\n.mb-n2,.my-n2{\n  margin-bottom:-.5rem!important\n}\n\n.ml-n2,.mx-n2{\n  margin-left:-.5rem!important\n}\n\n.m-n3{\n  margin:-1rem!important\n}\n\n.mt-n3,.my-n3{\n  margin-top:-1rem!important\n}\n\n.mr-n3,.mx-n3{\n  margin-right:-1rem!important\n}\n\n.mb-n3,.my-n3{\n  margin-bottom:-1rem!important\n}\n\n.ml-n3,.mx-n3{\n  margin-left:-1rem!important\n}\n\n.m-n4{\n  margin:-1.5rem!important\n}\n\n.mt-n4,.my-n4{\n  margin-top:-1.5rem!important\n}\n\n.mr-n4,.mx-n4{\n  margin-right:-1.5rem!important\n}\n\n.mb-n4,.my-n4{\n  margin-bottom:-1.5rem!important\n}\n\n.ml-n4,.mx-n4{\n  margin-left:-1.5rem!important\n}\n\n.m-n5{\n  margin:-3rem!important\n}\n\n.mt-n5,.my-n5{\n  margin-top:-3rem!important\n}\n\n.mr-n5,.mx-n5{\n  margin-right:-3rem!important\n}\n\n.mb-n5,.my-n5{\n  margin-bottom:-3rem!important\n}\n\n.ml-n5,.mx-n5{\n  margin-left:-3rem!important\n}\n\n.m-auto{\n  margin:auto!important\n}\n\n.mt-auto,.my-auto{\n  margin-top:auto!important\n}\n\n.mr-auto,.mx-auto{\n  margin-right:auto!important\n}\n\n.mb-auto,.my-auto{\n  margin-bottom:auto!important\n}\n\n.ml-auto,.mx-auto{\n  margin-left:auto!important\n}\n\n@media (min-width:576px){\n  .m-sm-0{\n    margin:0!important\n  }\n\n  .mt-sm-0,.my-sm-0{\n    margin-top:0!important\n  }\n\n  .mr-sm-0,.mx-sm-0{\n    margin-right:0!important\n  }\n\n  .mb-sm-0,.my-sm-0{\n    margin-bottom:0!important\n  }\n\n  .ml-sm-0,.mx-sm-0{\n    margin-left:0!important\n  }\n\n  .m-sm-1{\n    margin:.25rem!important\n  }\n\n  .mt-sm-1,.my-sm-1{\n    margin-top:.25rem!important\n  }\n\n  .mr-sm-1,.mx-sm-1{\n    margin-right:.25rem!important\n  }\n\n  .mb-sm-1,.my-sm-1{\n    margin-bottom:.25rem!important\n  }\n\n  .ml-sm-1,.mx-sm-1{\n    margin-left:.25rem!important\n  }\n\n  .m-sm-2{\n    margin:.5rem!important\n  }\n\n  .mt-sm-2,.my-sm-2{\n    margin-top:.5rem!important\n  }\n\n  .mr-sm-2,.mx-sm-2{\n    margin-right:.5rem!important\n  }\n\n  .mb-sm-2,.my-sm-2{\n    margin-bottom:.5rem!important\n  }\n\n  .ml-sm-2,.mx-sm-2{\n    margin-left:.5rem!important\n  }\n\n  .m-sm-3{\n    margin:1rem!important\n  }\n\n  .mt-sm-3,.my-sm-3{\n    margin-top:1rem!important\n  }\n\n  .mr-sm-3,.mx-sm-3{\n    margin-right:1rem!important\n  }\n\n  .mb-sm-3,.my-sm-3{\n    margin-bottom:1rem!important\n  }\n\n  .ml-sm-3,.mx-sm-3{\n    margin-left:1rem!important\n  }\n\n  .m-sm-4{\n    margin:1.5rem!important\n  }\n\n  .mt-sm-4,.my-sm-4{\n    margin-top:1.5rem!important\n  }\n\n  .mr-sm-4,.mx-sm-4{\n    margin-right:1.5rem!important\n  }\n\n  .mb-sm-4,.my-sm-4{\n    margin-bottom:1.5rem!important\n  }\n\n  .ml-sm-4,.mx-sm-4{\n    margin-left:1.5rem!important\n  }\n\n  .m-sm-5{\n    margin:3rem!important\n  }\n\n  .mt-sm-5,.my-sm-5{\n    margin-top:3rem!important\n  }\n\n  .mr-sm-5,.mx-sm-5{\n    margin-right:3rem!important\n  }\n\n  .mb-sm-5,.my-sm-5{\n    margin-bottom:3rem!important\n  }\n\n  .ml-sm-5,.mx-sm-5{\n    margin-left:3rem!important\n  }\n\n  .p-sm-0{\n    padding:0!important\n  }\n\n  .pt-sm-0,.py-sm-0{\n    padding-top:0!important\n  }\n\n  .pr-sm-0,.px-sm-0{\n    padding-right:0!important\n  }\n\n  .pb-sm-0,.py-sm-0{\n    padding-bottom:0!important\n  }\n\n  .pl-sm-0,.px-sm-0{\n    padding-left:0!important\n  }\n\n  .p-sm-1{\n    padding:.25rem!important\n  }\n\n  .pt-sm-1,.py-sm-1{\n    padding-top:.25rem!important\n  }\n\n  .pr-sm-1,.px-sm-1{\n    padding-right:.25rem!important\n  }\n\n  .pb-sm-1,.py-sm-1{\n    padding-bottom:.25rem!important\n  }\n\n  .pl-sm-1,.px-sm-1{\n    padding-left:.25rem!important\n  }\n\n  .p-sm-2{\n    padding:.5rem!important\n  }\n\n  .pt-sm-2,.py-sm-2{\n    padding-top:.5rem!important\n  }\n\n  .pr-sm-2,.px-sm-2{\n    padding-right:.5rem!important\n  }\n\n  .pb-sm-2,.py-sm-2{\n    padding-bottom:.5rem!important\n  }\n\n  .pl-sm-2,.px-sm-2{\n    padding-left:.5rem!important\n  }\n\n  .p-sm-3{\n    padding:1rem!important\n  }\n\n  .pt-sm-3,.py-sm-3{\n    padding-top:1rem!important\n  }\n\n  .pr-sm-3,.px-sm-3{\n    padding-right:1rem!important\n  }\n\n  .pb-sm-3,.py-sm-3{\n    padding-bottom:1rem!important\n  }\n\n  .pl-sm-3,.px-sm-3{\n    padding-left:1rem!important\n  }\n\n  .p-sm-4{\n    padding:1.5rem!important\n  }\n\n  .pt-sm-4,.py-sm-4{\n    padding-top:1.5rem!important\n  }\n\n  .pr-sm-4,.px-sm-4{\n    padding-right:1.5rem!important\n  }\n\n  .pb-sm-4,.py-sm-4{\n    padding-bottom:1.5rem!important\n  }\n\n  .pl-sm-4,.px-sm-4{\n    padding-left:1.5rem!important\n  }\n\n  .p-sm-5{\n    padding:3rem!important\n  }\n\n  .pt-sm-5,.py-sm-5{\n    padding-top:3rem!important\n  }\n\n  .pr-sm-5,.px-sm-5{\n    padding-right:3rem!important\n  }\n\n  .pb-sm-5,.py-sm-5{\n    padding-bottom:3rem!important\n  }\n\n  .pl-sm-5,.px-sm-5{\n    padding-left:3rem!important\n  }\n\n  .m-sm-n1{\n    margin:-.25rem!important\n  }\n\n  .mt-sm-n1,.my-sm-n1{\n    margin-top:-.25rem!important\n  }\n\n  .mr-sm-n1,.mx-sm-n1{\n    margin-right:-.25rem!important\n  }\n\n  .mb-sm-n1,.my-sm-n1{\n    margin-bottom:-.25rem!important\n  }\n\n  .ml-sm-n1,.mx-sm-n1{\n    margin-left:-.25rem!important\n  }\n\n  .m-sm-n2{\n    margin:-.5rem!important\n  }\n\n  .mt-sm-n2,.my-sm-n2{\n    margin-top:-.5rem!important\n  }\n\n  .mr-sm-n2,.mx-sm-n2{\n    margin-right:-.5rem!important\n  }\n\n  .mb-sm-n2,.my-sm-n2{\n    margin-bottom:-.5rem!important\n  }\n\n  .ml-sm-n2,.mx-sm-n2{\n    margin-left:-.5rem!important\n  }\n\n  .m-sm-n3{\n    margin:-1rem!important\n  }\n\n  .mt-sm-n3,.my-sm-n3{\n    margin-top:-1rem!important\n  }\n\n  .mr-sm-n3,.mx-sm-n3{\n    margin-right:-1rem!important\n  }\n\n  .mb-sm-n3,.my-sm-n3{\n    margin-bottom:-1rem!important\n  }\n\n  .ml-sm-n3,.mx-sm-n3{\n    margin-left:-1rem!important\n  }\n\n  .m-sm-n4{\n    margin:-1.5rem!important\n  }\n\n  .mt-sm-n4,.my-sm-n4{\n    margin-top:-1.5rem!important\n  }\n\n  .mr-sm-n4,.mx-sm-n4{\n    margin-right:-1.5rem!important\n  }\n\n  .mb-sm-n4,.my-sm-n4{\n    margin-bottom:-1.5rem!important\n  }\n\n  .ml-sm-n4,.mx-sm-n4{\n    margin-left:-1.5rem!important\n  }\n\n  .m-sm-n5{\n    margin:-3rem!important\n  }\n\n  .mt-sm-n5,.my-sm-n5{\n    margin-top:-3rem!important\n  }\n\n  .mr-sm-n5,.mx-sm-n5{\n    margin-right:-3rem!important\n  }\n\n  .mb-sm-n5,.my-sm-n5{\n    margin-bottom:-3rem!important\n  }\n\n  .ml-sm-n5,.mx-sm-n5{\n    margin-left:-3rem!important\n  }\n\n  .m-sm-auto{\n    margin:auto!important\n  }\n\n  .mt-sm-auto,.my-sm-auto{\n    margin-top:auto!important\n  }\n\n  .mr-sm-auto,.mx-sm-auto{\n    margin-right:auto!important\n  }\n\n  .mb-sm-auto,.my-sm-auto{\n    margin-bottom:auto!important\n  }\n\n  .ml-sm-auto,.mx-sm-auto{\n    margin-left:auto!important\n  }\n}\n\n@media (min-width:768px){\n  .m-md-0{\n    margin:0!important\n  }\n\n  .mt-md-0,.my-md-0{\n    margin-top:0!important\n  }\n\n  .mr-md-0,.mx-md-0{\n    margin-right:0!important\n  }\n\n  .mb-md-0,.my-md-0{\n    margin-bottom:0!important\n  }\n\n  .ml-md-0,.mx-md-0{\n    margin-left:0!important\n  }\n\n  .m-md-1{\n    margin:.25rem!important\n  }\n\n  .mt-md-1,.my-md-1{\n    margin-top:.25rem!important\n  }\n\n  .mr-md-1,.mx-md-1{\n    margin-right:.25rem!important\n  }\n\n  .mb-md-1,.my-md-1{\n    margin-bottom:.25rem!important\n  }\n\n  .ml-md-1,.mx-md-1{\n    margin-left:.25rem!important\n  }\n\n  .m-md-2{\n    margin:.5rem!important\n  }\n\n  .mt-md-2,.my-md-2{\n    margin-top:.5rem!important\n  }\n\n  .mr-md-2,.mx-md-2{\n    margin-right:.5rem!important\n  }\n\n  .mb-md-2,.my-md-2{\n    margin-bottom:.5rem!important\n  }\n\n  .ml-md-2,.mx-md-2{\n    margin-left:.5rem!important\n  }\n\n  .m-md-3{\n    margin:1rem!important\n  }\n\n  .mt-md-3,.my-md-3{\n    margin-top:1rem!important\n  }\n\n  .mr-md-3,.mx-md-3{\n    margin-right:1rem!important\n  }\n\n  .mb-md-3,.my-md-3{\n    margin-bottom:1rem!important\n  }\n\n  .ml-md-3,.mx-md-3{\n    margin-left:1rem!important\n  }\n\n  .m-md-4{\n    margin:1.5rem!important\n  }\n\n  .mt-md-4,.my-md-4{\n    margin-top:1.5rem!important\n  }\n\n  .mr-md-4,.mx-md-4{\n    margin-right:1.5rem!important\n  }\n\n  .mb-md-4,.my-md-4{\n    margin-bottom:1.5rem!important\n  }\n\n  .ml-md-4,.mx-md-4{\n    margin-left:1.5rem!important\n  }\n\n  .m-md-5{\n    margin:3rem!important\n  }\n\n  .mt-md-5,.my-md-5{\n    margin-top:3rem!important\n  }\n\n  .mr-md-5,.mx-md-5{\n    margin-right:3rem!important\n  }\n\n  .mb-md-5,.my-md-5{\n    margin-bottom:3rem!important\n  }\n\n  .ml-md-5,.mx-md-5{\n    margin-left:3rem!important\n  }\n\n  .p-md-0{\n    padding:0!important\n  }\n\n  .pt-md-0,.py-md-0{\n    padding-top:0!important\n  }\n\n  .pr-md-0,.px-md-0{\n    padding-right:0!important\n  }\n\n  .pb-md-0,.py-md-0{\n    padding-bottom:0!important\n  }\n\n  .pl-md-0,.px-md-0{\n    padding-left:0!important\n  }\n\n  .p-md-1{\n    padding:.25rem!important\n  }\n\n  .pt-md-1,.py-md-1{\n    padding-top:.25rem!important\n  }\n\n  .pr-md-1,.px-md-1{\n    padding-right:.25rem!important\n  }\n\n  .pb-md-1,.py-md-1{\n    padding-bottom:.25rem!important\n  }\n\n  .pl-md-1,.px-md-1{\n    padding-left:.25rem!important\n  }\n\n  .p-md-2{\n    padding:.5rem!important\n  }\n\n  .pt-md-2,.py-md-2{\n    padding-top:.5rem!important\n  }\n\n  .pr-md-2,.px-md-2{\n    padding-right:.5rem!important\n  }\n\n  .pb-md-2,.py-md-2{\n    padding-bottom:.5rem!important\n  }\n\n  .pl-md-2,.px-md-2{\n    padding-left:.5rem!important\n  }\n\n  .p-md-3{\n    padding:1rem!important\n  }\n\n  .pt-md-3,.py-md-3{\n    padding-top:1rem!important\n  }\n\n  .pr-md-3,.px-md-3{\n    padding-right:1rem!important\n  }\n\n  .pb-md-3,.py-md-3{\n    padding-bottom:1rem!important\n  }\n\n  .pl-md-3,.px-md-3{\n    padding-left:1rem!important\n  }\n\n  .p-md-4{\n    padding:1.5rem!important\n  }\n\n  .pt-md-4,.py-md-4{\n    padding-top:1.5rem!important\n  }\n\n  .pr-md-4,.px-md-4{\n    padding-right:1.5rem!important\n  }\n\n  .pb-md-4,.py-md-4{\n    padding-bottom:1.5rem!important\n  }\n\n  .pl-md-4,.px-md-4{\n    padding-left:1.5rem!important\n  }\n\n  .p-md-5{\n    padding:3rem!important\n  }\n\n  .pt-md-5,.py-md-5{\n    padding-top:3rem!important\n  }\n\n  .pr-md-5,.px-md-5{\n    padding-right:3rem!important\n  }\n\n  .pb-md-5,.py-md-5{\n    padding-bottom:3rem!important\n  }\n\n  .pl-md-5,.px-md-5{\n    padding-left:3rem!important\n  }\n\n  .m-md-n1{\n    margin:-.25rem!important\n  }\n\n  .mt-md-n1,.my-md-n1{\n    margin-top:-.25rem!important\n  }\n\n  .mr-md-n1,.mx-md-n1{\n    margin-right:-.25rem!important\n  }\n\n  .mb-md-n1,.my-md-n1{\n    margin-bottom:-.25rem!important\n  }\n\n  .ml-md-n1,.mx-md-n1{\n    margin-left:-.25rem!important\n  }\n\n  .m-md-n2{\n    margin:-.5rem!important\n  }\n\n  .mt-md-n2,.my-md-n2{\n    margin-top:-.5rem!important\n  }\n\n  .mr-md-n2,.mx-md-n2{\n    margin-right:-.5rem!important\n  }\n\n  .mb-md-n2,.my-md-n2{\n    margin-bottom:-.5rem!important\n  }\n\n  .ml-md-n2,.mx-md-n2{\n    margin-left:-.5rem!important\n  }\n\n  .m-md-n3{\n    margin:-1rem!important\n  }\n\n  .mt-md-n3,.my-md-n3{\n    margin-top:-1rem!important\n  }\n\n  .mr-md-n3,.mx-md-n3{\n    margin-right:-1rem!important\n  }\n\n  .mb-md-n3,.my-md-n3{\n    margin-bottom:-1rem!important\n  }\n\n  .ml-md-n3,.mx-md-n3{\n    margin-left:-1rem!important\n  }\n\n  .m-md-n4{\n    margin:-1.5rem!important\n  }\n\n  .mt-md-n4,.my-md-n4{\n    margin-top:-1.5rem!important\n  }\n\n  .mr-md-n4,.mx-md-n4{\n    margin-right:-1.5rem!important\n  }\n\n  .mb-md-n4,.my-md-n4{\n    margin-bottom:-1.5rem!important\n  }\n\n  .ml-md-n4,.mx-md-n4{\n    margin-left:-1.5rem!important\n  }\n\n  .m-md-n5{\n    margin:-3rem!important\n  }\n\n  .mt-md-n5,.my-md-n5{\n    margin-top:-3rem!important\n  }\n\n  .mr-md-n5,.mx-md-n5{\n    margin-right:-3rem!important\n  }\n\n  .mb-md-n5,.my-md-n5{\n    margin-bottom:-3rem!important\n  }\n\n  .ml-md-n5,.mx-md-n5{\n    margin-left:-3rem!important\n  }\n\n  .m-md-auto{\n    margin:auto!important\n  }\n\n  .mt-md-auto,.my-md-auto{\n    margin-top:auto!important\n  }\n\n  .mr-md-auto,.mx-md-auto{\n    margin-right:auto!important\n  }\n\n  .mb-md-auto,.my-md-auto{\n    margin-bottom:auto!important\n  }\n\n  .ml-md-auto,.mx-md-auto{\n    margin-left:auto!important\n  }\n}\n\n@media (min-width:992px){\n  .m-lg-0{\n    margin:0!important\n  }\n\n  .mt-lg-0,.my-lg-0{\n    margin-top:0!important\n  }\n\n  .mr-lg-0,.mx-lg-0{\n    margin-right:0!important\n  }\n\n  .mb-lg-0,.my-lg-0{\n    margin-bottom:0!important\n  }\n\n  .ml-lg-0,.mx-lg-0{\n    margin-left:0!important\n  }\n\n  .m-lg-1{\n    margin:.25rem!important\n  }\n\n  .mt-lg-1,.my-lg-1{\n    margin-top:.25rem!important\n  }\n\n  .mr-lg-1,.mx-lg-1{\n    margin-right:.25rem!important\n  }\n\n  .mb-lg-1,.my-lg-1{\n    margin-bottom:.25rem!important\n  }\n\n  .ml-lg-1,.mx-lg-1{\n    margin-left:.25rem!important\n  }\n\n  .m-lg-2{\n    margin:.5rem!important\n  }\n\n  .mt-lg-2,.my-lg-2{\n    margin-top:.5rem!important\n  }\n\n  .mr-lg-2,.mx-lg-2{\n    margin-right:.5rem!important\n  }\n\n  .mb-lg-2,.my-lg-2{\n    margin-bottom:.5rem!important\n  }\n\n  .ml-lg-2,.mx-lg-2{\n    margin-left:.5rem!important\n  }\n\n  .m-lg-3{\n    margin:1rem!important\n  }\n\n  .mt-lg-3,.my-lg-3{\n    margin-top:1rem!important\n  }\n\n  .mr-lg-3,.mx-lg-3{\n    margin-right:1rem!important\n  }\n\n  .mb-lg-3,.my-lg-3{\n    margin-bottom:1rem!important\n  }\n\n  .ml-lg-3,.mx-lg-3{\n    margin-left:1rem!important\n  }\n\n  .m-lg-4{\n    margin:1.5rem!important\n  }\n\n  .mt-lg-4,.my-lg-4{\n    margin-top:1.5rem!important\n  }\n\n  .mr-lg-4,.mx-lg-4{\n    margin-right:1.5rem!important\n  }\n\n  .mb-lg-4,.my-lg-4{\n    margin-bottom:1.5rem!important\n  }\n\n  .ml-lg-4,.mx-lg-4{\n    margin-left:1.5rem!important\n  }\n\n  .m-lg-5{\n    margin:3rem!important\n  }\n\n  .mt-lg-5,.my-lg-5{\n    margin-top:3rem!important\n  }\n\n  .mr-lg-5,.mx-lg-5{\n    margin-right:3rem!important\n  }\n\n  .mb-lg-5,.my-lg-5{\n    margin-bottom:3rem!important\n  }\n\n  .ml-lg-5,.mx-lg-5{\n    margin-left:3rem!important\n  }\n\n  .p-lg-0{\n    padding:0!important\n  }\n\n  .pt-lg-0,.py-lg-0{\n    padding-top:0!important\n  }\n\n  .pr-lg-0,.px-lg-0{\n    padding-right:0!important\n  }\n\n  .pb-lg-0,.py-lg-0{\n    padding-bottom:0!important\n  }\n\n  .pl-lg-0,.px-lg-0{\n    padding-left:0!important\n  }\n\n  .p-lg-1{\n    padding:.25rem!important\n  }\n\n  .pt-lg-1,.py-lg-1{\n    padding-top:.25rem!important\n  }\n\n  .pr-lg-1,.px-lg-1{\n    padding-right:.25rem!important\n  }\n\n  .pb-lg-1,.py-lg-1{\n    padding-bottom:.25rem!important\n  }\n\n  .pl-lg-1,.px-lg-1{\n    padding-left:.25rem!important\n  }\n\n  .p-lg-2{\n    padding:.5rem!important\n  }\n\n  .pt-lg-2,.py-lg-2{\n    padding-top:.5rem!important\n  }\n\n  .pr-lg-2,.px-lg-2{\n    padding-right:.5rem!important\n  }\n\n  .pb-lg-2,.py-lg-2{\n    padding-bottom:.5rem!important\n  }\n\n  .pl-lg-2,.px-lg-2{\n    padding-left:.5rem!important\n  }\n\n  .p-lg-3{\n    padding:1rem!important\n  }\n\n  .pt-lg-3,.py-lg-3{\n    padding-top:1rem!important\n  }\n\n  .pr-lg-3,.px-lg-3{\n    padding-right:1rem!important\n  }\n\n  .pb-lg-3,.py-lg-3{\n    padding-bottom:1rem!important\n  }\n\n  .pl-lg-3,.px-lg-3{\n    padding-left:1rem!important\n  }\n\n  .p-lg-4{\n    padding:1.5rem!important\n  }\n\n  .pt-lg-4,.py-lg-4{\n    padding-top:1.5rem!important\n  }\n\n  .pr-lg-4,.px-lg-4{\n    padding-right:1.5rem!important\n  }\n\n  .pb-lg-4,.py-lg-4{\n    padding-bottom:1.5rem!important\n  }\n\n  .pl-lg-4,.px-lg-4{\n    padding-left:1.5rem!important\n  }\n\n  .p-lg-5{\n    padding:3rem!important\n  }\n\n  .pt-lg-5,.py-lg-5{\n    padding-top:3rem!important\n  }\n\n  .pr-lg-5,.px-lg-5{\n    padding-right:3rem!important\n  }\n\n  .pb-lg-5,.py-lg-5{\n    padding-bottom:3rem!important\n  }\n\n  .pl-lg-5,.px-lg-5{\n    padding-left:3rem!important\n  }\n\n  .m-lg-n1{\n    margin:-.25rem!important\n  }\n\n  .mt-lg-n1,.my-lg-n1{\n    margin-top:-.25rem!important\n  }\n\n  .mr-lg-n1,.mx-lg-n1{\n    margin-right:-.25rem!important\n  }\n\n  .mb-lg-n1,.my-lg-n1{\n    margin-bottom:-.25rem!important\n  }\n\n  .ml-lg-n1,.mx-lg-n1{\n    margin-left:-.25rem!important\n  }\n\n  .m-lg-n2{\n    margin:-.5rem!important\n  }\n\n  .mt-lg-n2,.my-lg-n2{\n    margin-top:-.5rem!important\n  }\n\n  .mr-lg-n2,.mx-lg-n2{\n    margin-right:-.5rem!important\n  }\n\n  .mb-lg-n2,.my-lg-n2{\n    margin-bottom:-.5rem!important\n  }\n\n  .ml-lg-n2,.mx-lg-n2{\n    margin-left:-.5rem!important\n  }\n\n  .m-lg-n3{\n    margin:-1rem!important\n  }\n\n  .mt-lg-n3,.my-lg-n3{\n    margin-top:-1rem!important\n  }\n\n  .mr-lg-n3,.mx-lg-n3{\n    margin-right:-1rem!important\n  }\n\n  .mb-lg-n3,.my-lg-n3{\n    margin-bottom:-1rem!important\n  }\n\n  .ml-lg-n3,.mx-lg-n3{\n    margin-left:-1rem!important\n  }\n\n  .m-lg-n4{\n    margin:-1.5rem!important\n  }\n\n  .mt-lg-n4,.my-lg-n4{\n    margin-top:-1.5rem!important\n  }\n\n  .mr-lg-n4,.mx-lg-n4{\n    margin-right:-1.5rem!important\n  }\n\n  .mb-lg-n4,.my-lg-n4{\n    margin-bottom:-1.5rem!important\n  }\n\n  .ml-lg-n4,.mx-lg-n4{\n    margin-left:-1.5rem!important\n  }\n\n  .m-lg-n5{\n    margin:-3rem!important\n  }\n\n  .mt-lg-n5,.my-lg-n5{\n    margin-top:-3rem!important\n  }\n\n  .mr-lg-n5,.mx-lg-n5{\n    margin-right:-3rem!important\n  }\n\n  .mb-lg-n5,.my-lg-n5{\n    margin-bottom:-3rem!important\n  }\n\n  .ml-lg-n5,.mx-lg-n5{\n    margin-left:-3rem!important\n  }\n\n  .m-lg-auto{\n    margin:auto!important\n  }\n\n  .mt-lg-auto,.my-lg-auto{\n    margin-top:auto!important\n  }\n\n  .mr-lg-auto,.mx-lg-auto{\n    margin-right:auto!important\n  }\n\n  .mb-lg-auto,.my-lg-auto{\n    margin-bottom:auto!important\n  }\n\n  .ml-lg-auto,.mx-lg-auto{\n    margin-left:auto!important\n  }\n}\n\n@media (min-width:1200px){\n  .m-xl-0{\n    margin:0!important\n  }\n\n  .mt-xl-0,.my-xl-0{\n    margin-top:0!important\n  }\n\n  .mr-xl-0,.mx-xl-0{\n    margin-right:0!important\n  }\n\n  .mb-xl-0,.my-xl-0{\n    margin-bottom:0!important\n  }\n\n  .ml-xl-0,.mx-xl-0{\n    margin-left:0!important\n  }\n\n  .m-xl-1{\n    margin:.25rem!important\n  }\n\n  .mt-xl-1,.my-xl-1{\n    margin-top:.25rem!important\n  }\n\n  .mr-xl-1,.mx-xl-1{\n    margin-right:.25rem!important\n  }\n\n  .mb-xl-1,.my-xl-1{\n    margin-bottom:.25rem!important\n  }\n\n  .ml-xl-1,.mx-xl-1{\n    margin-left:.25rem!important\n  }\n\n  .m-xl-2{\n    margin:.5rem!important\n  }\n\n  .mt-xl-2,.my-xl-2{\n    margin-top:.5rem!important\n  }\n\n  .mr-xl-2,.mx-xl-2{\n    margin-right:.5rem!important\n  }\n\n  .mb-xl-2,.my-xl-2{\n    margin-bottom:.5rem!important\n  }\n\n  .ml-xl-2,.mx-xl-2{\n    margin-left:.5rem!important\n  }\n\n  .m-xl-3{\n    margin:1rem!important\n  }\n\n  .mt-xl-3,.my-xl-3{\n    margin-top:1rem!important\n  }\n\n  .mr-xl-3,.mx-xl-3{\n    margin-right:1rem!important\n  }\n\n  .mb-xl-3,.my-xl-3{\n    margin-bottom:1rem!important\n  }\n\n  .ml-xl-3,.mx-xl-3{\n    margin-left:1rem!important\n  }\n\n  .m-xl-4{\n    margin:1.5rem!important\n  }\n\n  .mt-xl-4,.my-xl-4{\n    margin-top:1.5rem!important\n  }\n\n  .mr-xl-4,.mx-xl-4{\n    margin-right:1.5rem!important\n  }\n\n  .mb-xl-4,.my-xl-4{\n    margin-bottom:1.5rem!important\n  }\n\n  .ml-xl-4,.mx-xl-4{\n    margin-left:1.5rem!important\n  }\n\n  .m-xl-5{\n    margin:3rem!important\n  }\n\n  .mt-xl-5,.my-xl-5{\n    margin-top:3rem!important\n  }\n\n  .mr-xl-5,.mx-xl-5{\n    margin-right:3rem!important\n  }\n\n  .mb-xl-5,.my-xl-5{\n    margin-bottom:3rem!important\n  }\n\n  .ml-xl-5,.mx-xl-5{\n    margin-left:3rem!important\n  }\n\n  .p-xl-0{\n    padding:0!important\n  }\n\n  .pt-xl-0,.py-xl-0{\n    padding-top:0!important\n  }\n\n  .pr-xl-0,.px-xl-0{\n    padding-right:0!important\n  }\n\n  .pb-xl-0,.py-xl-0{\n    padding-bottom:0!important\n  }\n\n  .pl-xl-0,.px-xl-0{\n    padding-left:0!important\n  }\n\n  .p-xl-1{\n    padding:.25rem!important\n  }\n\n  .pt-xl-1,.py-xl-1{\n    padding-top:.25rem!important\n  }\n\n  .pr-xl-1,.px-xl-1{\n    padding-right:.25rem!important\n  }\n\n  .pb-xl-1,.py-xl-1{\n    padding-bottom:.25rem!important\n  }\n\n  .pl-xl-1,.px-xl-1{\n    padding-left:.25rem!important\n  }\n\n  .p-xl-2{\n    padding:.5rem!important\n  }\n\n  .pt-xl-2,.py-xl-2{\n    padding-top:.5rem!important\n  }\n\n  .pr-xl-2,.px-xl-2{\n    padding-right:.5rem!important\n  }\n\n  .pb-xl-2,.py-xl-2{\n    padding-bottom:.5rem!important\n  }\n\n  .pl-xl-2,.px-xl-2{\n    padding-left:.5rem!important\n  }\n\n  .p-xl-3{\n    padding:1rem!important\n  }\n\n  .pt-xl-3,.py-xl-3{\n    padding-top:1rem!important\n  }\n\n  .pr-xl-3,.px-xl-3{\n    padding-right:1rem!important\n  }\n\n  .pb-xl-3,.py-xl-3{\n    padding-bottom:1rem!important\n  }\n\n  .pl-xl-3,.px-xl-3{\n    padding-left:1rem!important\n  }\n\n  .p-xl-4{\n    padding:1.5rem!important\n  }\n\n  .pt-xl-4,.py-xl-4{\n    padding-top:1.5rem!important\n  }\n\n  .pr-xl-4,.px-xl-4{\n    padding-right:1.5rem!important\n  }\n\n  .pb-xl-4,.py-xl-4{\n    padding-bottom:1.5rem!important\n  }\n\n  .pl-xl-4,.px-xl-4{\n    padding-left:1.5rem!important\n  }\n\n  .p-xl-5{\n    padding:3rem!important\n  }\n\n  .pt-xl-5,.py-xl-5{\n    padding-top:3rem!important\n  }\n\n  .pr-xl-5,.px-xl-5{\n    padding-right:3rem!important\n  }\n\n  .pb-xl-5,.py-xl-5{\n    padding-bottom:3rem!important\n  }\n\n  .pl-xl-5,.px-xl-5{\n    padding-left:3rem!important\n  }\n\n  .m-xl-n1{\n    margin:-.25rem!important\n  }\n\n  .mt-xl-n1,.my-xl-n1{\n    margin-top:-.25rem!important\n  }\n\n  .mr-xl-n1,.mx-xl-n1{\n    margin-right:-.25rem!important\n  }\n\n  .mb-xl-n1,.my-xl-n1{\n    margin-bottom:-.25rem!important\n  }\n\n  .ml-xl-n1,.mx-xl-n1{\n    margin-left:-.25rem!important\n  }\n\n  .m-xl-n2{\n    margin:-.5rem!important\n  }\n\n  .mt-xl-n2,.my-xl-n2{\n    margin-top:-.5rem!important\n  }\n\n  .mr-xl-n2,.mx-xl-n2{\n    margin-right:-.5rem!important\n  }\n\n  .mb-xl-n2,.my-xl-n2{\n    margin-bottom:-.5rem!important\n  }\n\n  .ml-xl-n2,.mx-xl-n2{\n    margin-left:-.5rem!important\n  }\n\n  .m-xl-n3{\n    margin:-1rem!important\n  }\n\n  .mt-xl-n3,.my-xl-n3{\n    margin-top:-1rem!important\n  }\n\n  .mr-xl-n3,.mx-xl-n3{\n    margin-right:-1rem!important\n  }\n\n  .mb-xl-n3,.my-xl-n3{\n    margin-bottom:-1rem!important\n  }\n\n  .ml-xl-n3,.mx-xl-n3{\n    margin-left:-1rem!important\n  }\n\n  .m-xl-n4{\n    margin:-1.5rem!important\n  }\n\n  .mt-xl-n4,.my-xl-n4{\n    margin-top:-1.5rem!important\n  }\n\n  .mr-xl-n4,.mx-xl-n4{\n    margin-right:-1.5rem!important\n  }\n\n  .mb-xl-n4,.my-xl-n4{\n    margin-bottom:-1.5rem!important\n  }\n\n  .ml-xl-n4,.mx-xl-n4{\n    margin-left:-1.5rem!important\n  }\n\n  .m-xl-n5{\n    margin:-3rem!important\n  }\n\n  .mt-xl-n5,.my-xl-n5{\n    margin-top:-3rem!important\n  }\n\n  .mr-xl-n5,.mx-xl-n5{\n    margin-right:-3rem!important\n  }\n\n  .mb-xl-n5,.my-xl-n5{\n    margin-bottom:-3rem!important\n  }\n\n  .ml-xl-n5,.mx-xl-n5{\n    margin-left:-3rem!important\n  }\n\n  .m-xl-auto{\n    margin:auto!important\n  }\n\n  .mt-xl-auto,.my-xl-auto{\n    margin-top:auto!important\n  }\n\n  .mr-xl-auto,.mx-xl-auto{\n    margin-right:auto!important\n  }\n\n  .mb-xl-auto,.my-xl-auto{\n    margin-bottom:auto!important\n  }\n\n  .ml-xl-auto,.mx-xl-auto{\n    margin-left:auto!important\n  }\n}\n\n.stretched-link:after{\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  z-index:1;\n  pointer-events:auto;\n  content:\"\";\n  background-color:transparent\n}\n\n.text-monospace{\n  font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important\n}\n\n.text-justify{\n  text-align:justify!important\n}\n\n.text-wrap{\n  white-space:normal!important\n}\n\n.text-nowrap{\n  white-space:nowrap!important\n}\n\n.text-truncate{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap\n}\n\n.text-left{\n  text-align:left!important\n}\n\n.text-right{\n  text-align:right!important\n}\n\n.text-center{\n  text-align:center!important\n}\n\n@media (min-width:576px){\n  .text-sm-left{\n    text-align:left!important\n  }\n\n  .text-sm-right{\n    text-align:right!important\n  }\n\n  .text-sm-center{\n    text-align:center!important\n  }\n}\n\n@media (min-width:768px){\n  .text-md-left{\n    text-align:left!important\n  }\n\n  .text-md-right{\n    text-align:right!important\n  }\n\n  .text-md-center{\n    text-align:center!important\n  }\n}\n\n@media (min-width:992px){\n  .text-lg-left{\n    text-align:left!important\n  }\n\n  .text-lg-right{\n    text-align:right!important\n  }\n\n  .text-lg-center{\n    text-align:center!important\n  }\n}\n\n@media (min-width:1200px){\n  .text-xl-left{\n    text-align:left!important\n  }\n\n  .text-xl-right{\n    text-align:right!important\n  }\n\n  .text-xl-center{\n    text-align:center!important\n  }\n}\n\n.text-lowercase{\n  text-transform:lowercase!important\n}\n\n.text-uppercase{\n  text-transform:uppercase!important\n}\n\n.text-capitalize{\n  text-transform:capitalize!important\n}\n\n.font-weight-light{\n  font-weight:300!important\n}\n\n.font-weight-lighter{\n  font-weight:lighter!important\n}\n\n.font-weight-normal{\n  font-weight:400!important\n}\n\n.font-weight-bold{\n  font-weight:700!important\n}\n\n.font-weight-bolder{\n  font-weight:bolder!important\n}\n\n.font-italic{\n  font-style:italic!important\n}\n\n.text-white{\n  color:#fff!important\n}\n\n.text-primary{\n  color:#007bff!important\n}\n\na.text-primary:focus,a.text-primary:hover{\n  color:#0056b3!important\n}\n\n.text-secondary{\n  color:#6c757d!important\n}\n\na.text-secondary:focus,a.text-secondary:hover{\n  color:#494f54!important\n}\n\n.text-success{\n  color:#28a745!important\n}\n\na.text-success:focus,a.text-success:hover{\n  color:#19692c!important\n}\n\n.text-info{\n  color:#17a2b8!important\n}\n\na.text-info:focus,a.text-info:hover{\n  color:#0f6674!important\n}\n\n.text-warning{\n  color:#ffc107!important\n}\n\na.text-warning:focus,a.text-warning:hover{\n  color:#ba8b00!important\n}\n\n.text-danger{\n  color:#dc3545!important\n}\n\na.text-danger:focus,a.text-danger:hover{\n  color:#a71d2a!important\n}\n\n.text-light{\n  color:#f8f9fa!important\n}\n\na.text-light:focus,a.text-light:hover{\n  color:#cbd3da!important\n}\n\n.text-dark{\n  color:#343a40!important\n}\n\na.text-dark:focus,a.text-dark:hover{\n  color:#121416!important\n}\n\n.text-body{\n  color:#212529!important\n}\n\n.text-muted{\n  color:#6c757d!important\n}\n\n.text-black-50{\n  color:rgba(0,0,0,.5)!important\n}\n\n.text-white-50{\n  color:hsla(0,0%,100%,.5)!important\n}\n\n.text-hide{\n  font:0/0 a;\n  color:transparent;\n  text-shadow:none;\n  background-color:transparent;\n  border:0\n}\n\n.text-decoration-none{\n  text-decoration:none!important\n}\n\n.text-break{\n  word-break:break-word!important;\n  word-wrap:break-word!important\n}\n\n.text-reset{\n  color:inherit!important\n}\n\n.visible{\n  visibility:visible!important\n}\n\n.invisible{\n  visibility:hidden!important\n}\n\n@media print{\n  *,:after,:before{\n    text-shadow:none!important;\n    box-shadow:none!important\n  }\n\n  a:not(.btn){\n    text-decoration:underline\n  }\n\n  abbr[title]:after{\n    content:\" (\" attr(title) \")\"\n  }\n\n  pre{\n    white-space:pre-wrap!important\n  }\n\n  blockquote,pre{\n    border:1px solid #adb5bd;\n    page-break-inside:avoid\n  }\n\n  thead{\n    display:table-header-group\n  }\n\n  img,tr{\n    page-break-inside:avoid\n  }\n\n  h2,h3,p{\n    orphans:3;\n    widows:3\n  }\n\n  h2,h3{\n    page-break-after:avoid\n  }\n\n  @page{\n    size:a3\n  }\n\n  .container,body{\n    min-width:992px!important\n  }\n\n  .navbar{\n    display:none\n  }\n\n  .badge{\n    border:1px solid #000\n  }\n\n  .table{\n    border-collapse:collapse!important\n  }\n\n  .table td,.table th{\n    background-color:#fff!important\n  }\n\n  .table-bordered td,.table-bordered th{\n    border:1px solid #dee2e6!important\n  }\n\n  .table-dark{\n    color:inherit\n  }\n\n  .table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{\n    border-color:#dee2e6\n  }\n\n  .table .thead-dark th{\n    color:inherit;\n    border-color:#dee2e6\n  }\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("5e4614b8", content, true)

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n\n/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.org)\n */\n\n.bv-no-focus-ring:focus{\n  outline:none\n}\n\n@media (max-width:575.98px){\n  .bv-d-xs-down-none{\n    display:none!important\n  }\n}\n\n@media (max-width:767.98px){\n  .bv-d-sm-down-none{\n    display:none!important\n  }\n}\n\n@media (max-width:991.98px){\n  .bv-d-md-down-none{\n    display:none!important\n  }\n}\n\n@media (max-width:1199.98px){\n  .bv-d-lg-down-none{\n    display:none!important\n  }\n}\n\n.bv-d-xl-down-none{\n  display:none!important\n}\n\n.form-control.focus{\n  color:#495057;\n  background-color:#fff;\n  border-color:#80bdff;\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.form-control.focus.is-valid{\n  border-color:#28a745;\n  box-shadow:0 0 0 .2rem rgba(40,167,69,.25)\n}\n\n.form-control.focus.is-invalid{\n  border-color:#dc3545;\n  box-shadow:0 0 0 .2rem rgba(220,53,69,.25)\n}\n\n.b-avatar{\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  vertical-align:middle;\n  flex-shrink:0;\n  width:2.5rem;\n  height:2.5rem;\n  font-size:inherit;\n  font-weight:400;\n  line-height:1;\n  max-width:100%;\n  max-height:auto;\n  text-align:center;\n  overflow:visible;\n  position:relative;\n  transition:color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out\n}\n\n.b-avatar:focus{\n  outline:0\n}\n\n.b-avatar.btn,.b-avatar[href]{\n  padding:0;\n  border:0\n}\n\n.b-avatar.btn .b-avatar-img img,.b-avatar[href] .b-avatar-img img{\n  transition:transform .15s ease-in-out\n}\n\n.b-avatar.btn:not(:disabled):not(.disabled),.b-avatar[href]:not(:disabled):not(.disabled){\n  cursor:pointer\n}\n\n.b-avatar.btn:not(:disabled):not(.disabled):hover .b-avatar-img img,.b-avatar[href]:not(:disabled):not(.disabled):hover .b-avatar-img img{\n  transform:scale(1.15)\n}\n\n.b-avatar.disabled,.b-avatar:disabled,.b-avatar[disabled]{\n  opacity:.65;\n  pointer-events:none\n}\n\n.b-avatar .b-avatar-custom,.b-avatar .b-avatar-img,.b-avatar .b-avatar-text{\n  border-radius:inherit;\n  width:100%;\n  height:100%;\n  overflow:hidden;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  -webkit-mask-image:radial-gradient(#fff,#000);\n  mask-image:radial-gradient(#fff,#000)\n}\n\n.b-avatar .b-avatar-text{\n  text-transform:uppercase;\n  white-space:nowrap\n}\n\n.b-avatar[href]{\n  text-decoration:none\n}\n\n.b-avatar>.b-icon{\n  width:60%;\n  height:auto;\n  max-width:100%\n}\n\n.b-avatar .b-avatar-img img{\n  width:100%;\n  height:100%;\n  max-height:auto;\n  border-radius:inherit;\n  -o-object-fit:cover;\n  object-fit:cover\n}\n\n.b-avatar .b-avatar-badge{\n  position:absolute;\n  min-height:1.5em;\n  min-width:1.5em;\n  padding:.25em;\n  line-height:1;\n  border-radius:10em;\n  font-size:70%;\n  font-weight:700;\n  z-index:1\n}\n\n.b-avatar-sm{\n  width:1.5rem;\n  height:1.5rem\n}\n\n.b-avatar-sm .b-avatar-text{\n  font-size:.6rem\n}\n\n.b-avatar-sm .b-avatar-badge{\n  font-size:.42rem\n}\n\n.b-avatar-lg{\n  width:3.5rem;\n  height:3.5rem\n}\n\n.b-avatar-lg .b-avatar-text{\n  font-size:1.4rem\n}\n\n.b-avatar-lg .b-avatar-badge{\n  font-size:.98rem\n}\n\n.b-avatar-group .b-avatar-group-inner{\n  display:flex;\n  flex-wrap:wrap\n}\n\n.b-avatar-group .b-avatar{\n  border:1px solid #dee2e6\n}\n\n.b-avatar-group .btn.b-avatar:hover:not(.disabled):not(disabled),.b-avatar-group a.b-avatar:hover:not(.disabled):not(disabled){\n  z-index:1\n}\n\n.b-calendar{\n  display:inline-flex\n}\n\n.b-calendar .b-calendar-inner{\n  min-width:250px\n}\n\n.b-calendar .b-calendar-header,.b-calendar .b-calendar-nav{\n  margin-bottom:.25rem\n}\n\n.b-calendar .b-calendar-nav .btn{\n  padding:.25rem\n}\n\n.b-calendar output{\n  padding:.25rem;\n  font-size:80%\n}\n\n.b-calendar output.readonly{\n  background-color:#e9ecef;\n  opacity:1\n}\n\n.b-calendar .b-calendar-footer{\n  margin-top:.5rem\n}\n\n.b-calendar .b-calendar-grid{\n  padding:0;\n  margin:0;\n  overflow:hidden\n}\n\n.b-calendar .b-calendar-grid .row{\n  flex-wrap:nowrap\n}\n\n.b-calendar .b-calendar-grid-caption{\n  padding:.25rem\n}\n\n.b-calendar .b-calendar-grid-body .col[data-date] .btn{\n  width:32px;\n  height:32px;\n  font-size:14px;\n  line-height:1;\n  margin:3px auto;\n  padding:9px 0\n}\n\n.b-calendar .btn.disabled,.b-calendar .btn:disabled,.b-calendar .btn[aria-disabled=true]{\n  cursor:default;\n  pointer-events:none\n}\n\n.card-img-left{\n  border-top-left-radius:calc(.25rem - 1px);\n  border-bottom-left-radius:calc(.25rem - 1px)\n}\n\n.card-img-right{\n  border-top-right-radius:calc(.25rem - 1px);\n  border-bottom-right-radius:calc(.25rem - 1px)\n}\n\n.dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret:before,.dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret:after{\n  display:none!important\n}\n\n.dropdown .dropdown-menu:focus{\n  outline:none\n}\n\n.b-dropdown-form{\n  display:inline-block;\n  padding:.25rem 1.5rem;\n  width:100%;\n  clear:both;\n  font-weight:400\n}\n\n.b-dropdown-form:focus{\n  outline:1px dotted!important;\n  outline:5px auto -webkit-focus-ring-color!important\n}\n\n.b-dropdown-form.disabled,.b-dropdown-form:disabled{\n  outline:0!important;\n  color:#6c757d;\n  pointer-events:none\n}\n\n.b-dropdown-text{\n  display:inline-block;\n  padding:.25rem 1.5rem;\n  margin-bottom:0;\n  width:100%;\n  clear:both;\n  font-weight:lighter\n}\n\n.custom-checkbox.b-custom-control-lg,.input-group-lg .custom-checkbox{\n  font-size:1.25rem;\n  line-height:1.5;\n  padding-left:1.875rem\n}\n\n.custom-checkbox.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-checkbox .custom-control-label:before{\n  top:.3125rem;\n  left:-1.875rem;\n  width:1.25rem;\n  height:1.25rem;\n  border-radius:.3rem\n}\n\n.custom-checkbox.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-checkbox .custom-control-label:after{\n  top:.3125rem;\n  left:-1.875rem;\n  width:1.25rem;\n  height:1.25rem;\n  background-size:50% 50%\n}\n\n.custom-checkbox.b-custom-control-sm,.input-group-sm .custom-checkbox{\n  font-size:.875rem;\n  line-height:1.5;\n  padding-left:1.3125rem\n}\n\n.custom-checkbox.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-checkbox .custom-control-label:before{\n  top:.21875rem;\n  left:-1.3125rem;\n  width:.875rem;\n  height:.875rem;\n  border-radius:.2rem\n}\n\n.custom-checkbox.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-checkbox .custom-control-label:after{\n  top:.21875rem;\n  left:-1.3125rem;\n  width:.875rem;\n  height:.875rem;\n  background-size:50% 50%\n}\n\n.custom-switch.b-custom-control-lg,.input-group-lg .custom-switch{\n  padding-left:2.8125rem\n}\n\n.custom-switch.b-custom-control-lg .custom-control-label,.input-group-lg .custom-switch .custom-control-label{\n  font-size:1.25rem;\n  line-height:1.5\n}\n\n.custom-switch.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-switch .custom-control-label:before{\n  top:.3125rem;\n  height:1.25rem;\n  left:-2.8125rem;\n  width:2.1875rem;\n  border-radius:.625rem\n}\n\n.custom-switch.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-switch .custom-control-label:after{\n  top:calc(.3125rem + 2px);\n  left:calc(-2.8125rem + 2px);\n  width:calc(1.25rem - 4px);\n  height:calc(1.25rem - 4px);\n  border-radius:.625rem;\n  background-size:50% 50%\n}\n\n.custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label:after,.input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label:after{\n  transform:translateX(.9375rem)\n}\n\n.custom-switch.b-custom-control-sm,.input-group-sm .custom-switch{\n  padding-left:1.96875rem\n}\n\n.custom-switch.b-custom-control-sm .custom-control-label,.input-group-sm .custom-switch .custom-control-label{\n  font-size:.875rem;\n  line-height:1.5\n}\n\n.custom-switch.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-switch .custom-control-label:before{\n  top:.21875rem;\n  left:-1.96875rem;\n  width:1.53125rem;\n  height:.875rem;\n  border-radius:.4375rem\n}\n\n.custom-switch.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-switch .custom-control-label:after{\n  top:calc(.21875rem + 2px);\n  left:calc(-1.96875rem + 2px);\n  width:calc(.875rem - 4px);\n  height:calc(.875rem - 4px);\n  border-radius:.4375rem;\n  background-size:50% 50%\n}\n\n.custom-switch.b-custom-control-sm .custom-control-input:checked~.custom-control-label:after,.input-group-sm .custom-switch .custom-control-input:checked~.custom-control-label:after{\n  transform:translateX(.65625rem)\n}\n\n.input-group>.input-group-append:last-child>.btn-group:not(:last-child):not(.dropdown-toggle)>.btn,.input-group>.input-group-append:not(:last-child)>.btn-group>.btn,.input-group>.input-group-prepend>.btn-group>.btn{\n  border-top-right-radius:0;\n  border-bottom-right-radius:0\n}\n\n.input-group>.input-group-append>.btn-group>.btn,.input-group>.input-group-prepend:first-child>.btn-group:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.btn-group>.btn{\n  border-top-left-radius:0;\n  border-bottom-left-radius:0\n}\n\n.b-form-btn-label-control.form-control{\n  display:flex;\n  align-items:stretch;\n  height:auto;\n  padding:0;\n  background-image:none\n}\n\n.input-group .b-form-btn-label-control.form-control{\n  padding:0\n}\n\n.b-form-btn-label-control.form-control[dir=rtl],[dir=rtl] .b-form-btn-label-control.form-control{\n  flex-direction:row-reverse\n}\n\n.b-form-btn-label-control.form-control[dir=rtl]>label,[dir=rtl] .b-form-btn-label-control.form-control>label{\n  text-align:right\n}\n\n.b-form-btn-label-control.form-control>.btn{\n  line-height:1;\n  font-size:inherit;\n  box-shadow:none!important;\n  border:0\n}\n\n.b-form-btn-label-control.form-control>.btn:disabled{\n  pointer-events:none\n}\n\n.b-form-btn-label-control.form-control.is-valid>.btn{\n  color:#28a745\n}\n\n.b-form-btn-label-control.form-control.is-invalid>.btn{\n  color:#dc3545\n}\n\n.b-form-btn-label-control.form-control>.dropdown-menu{\n  padding:.5rem\n}\n\n.b-form-btn-label-control.form-control>.form-control{\n  height:auto;\n  min-height:calc(1.5em + .75rem);\n  padding-left:.25rem;\n  margin:0;\n  border:0;\n  outline:0;\n  background:transparent;\n  word-break:break-word;\n  font-size:inherit;\n  white-space:normal;\n  cursor:pointer\n}\n\n.b-form-btn-label-control.form-control>.form-control.form-control-sm{\n  min-height:calc(1.5em + .5rem)\n}\n\n.b-form-btn-label-control.form-control>.form-control.form-control-lg{\n  min-height:calc(1.5em + 1rem)\n}\n\n.input-group.input-group-sm .b-form-btn-label-control.form-control>.form-control{\n  min-height:calc(1.5em + .5rem);\n  padding-top:.25rem;\n  padding-bottom:.25rem\n}\n\n.input-group.input-group-lg .b-form-btn-label-control.form-control>.form-control{\n  min-height:calc(1.5em + 1rem);\n  padding-top:.5rem;\n  padding-bottom:.5rem\n}\n\n.b-form-btn-label-control.form-control[aria-disabled=true],.b-form-btn-label-control.form-control[aria-readonly=true]{\n  background-color:#e9ecef;\n  opacity:1\n}\n\n.b-form-btn-label-control.form-control[aria-disabled=true]{\n  pointer-events:none\n}\n\n.b-form-btn-label-control.form-control[aria-disabled=true]>label{\n  cursor:default\n}\n\n.b-form-btn-label-control.btn-group>.dropdown-menu{\n  padding:.5rem\n}\n\n.custom-file-label{\n  white-space:nowrap;\n  overflow-x:hidden\n}\n\n.b-custom-control-lg.custom-file,.b-custom-control-lg .custom-file-input,.b-custom-control-lg .custom-file-label,.input-group-lg.custom-file,.input-group-lg .custom-file-input,.input-group-lg .custom-file-label{\n  font-size:1.25rem;\n  height:calc(1.5em + 1rem + 2px)\n}\n\n.b-custom-control-lg .custom-file-label,.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label,.input-group-lg .custom-file-label:after{\n  padding:.5rem 1rem;\n  line-height:1.5\n}\n\n.b-custom-control-lg .custom-file-label,.input-group-lg .custom-file-label{\n  border-radius:.3rem\n}\n\n.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label:after{\n  font-size:inherit;\n  height:calc(1.5em + 1rem);\n  border-radius:0 .3rem .3rem 0\n}\n\n.b-custom-control-sm.custom-file,.b-custom-control-sm .custom-file-input,.b-custom-control-sm .custom-file-label,.input-group-sm.custom-file,.input-group-sm .custom-file-input,.input-group-sm .custom-file-label{\n  font-size:.875rem;\n  height:calc(1.5em + .5rem + 2px)\n}\n\n.b-custom-control-sm .custom-file-label,.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label,.input-group-sm .custom-file-label:after{\n  padding:.25rem .5rem;\n  line-height:1.5\n}\n\n.b-custom-control-sm .custom-file-label,.input-group-sm .custom-file-label{\n  border-radius:.2rem\n}\n\n.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label:after{\n  font-size:inherit;\n  height:calc(1.5em + .5rem);\n  border-radius:0 .2rem .2rem 0\n}\n\n.form-control.is-invalid,.form-control.is-valid,.was-validated .form-control:invalid,.was-validated .form-control:valid{\n  background-position:right calc(.375em + .1875rem) center\n}\n\ninput[type=color].form-control{\n  height:calc(1.5em + .75rem + 2px);\n  padding:.125rem .25rem\n}\n\n.input-group-sm input[type=color].form-control,input[type=color].form-control.form-control-sm{\n  height:calc(1.5em + .5rem + 2px);\n  padding:.125rem .25rem\n}\n\n.input-group-lg input[type=color].form-control,input[type=color].form-control.form-control-lg{\n  height:calc(1.5em + 1rem + 2px);\n  padding:.125rem .25rem\n}\n\ninput[type=color].form-control:disabled{\n  background-color:#adb5bd;\n  opacity:.65\n}\n\n.input-group>.custom-range{\n  position:relative;\n  flex:1 1 auto;\n  width:1%;\n  margin-bottom:0\n}\n\n.input-group>.custom-file+.custom-range,.input-group>.custom-range+.custom-file,.input-group>.custom-range+.custom-range,.input-group>.custom-range+.custom-select,.input-group>.custom-range+.form-control,.input-group>.custom-range+.form-control-plaintext,.input-group>.custom-select+.custom-range,.input-group>.form-control+.custom-range,.input-group>.form-control-plaintext+.custom-range{\n  margin-left:-1px\n}\n\n.input-group>.custom-range:focus{\n  z-index:3\n}\n\n.input-group>.custom-range:not(:last-child){\n  border-top-right-radius:0;\n  border-bottom-right-radius:0\n}\n\n.input-group>.custom-range:not(:first-child){\n  border-top-left-radius:0;\n  border-bottom-left-radius:0\n}\n\n.input-group>.custom-range{\n  padding:0 .75rem;\n  background-color:#fff;\n  background-clip:padding-box;\n  border:1px solid #ced4da;\n  height:calc(1.5em + .75rem + 2px);\n  border-radius:.25rem;\n  transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out\n}\n\n@media (prefers-reduced-motion:reduce){\n  .input-group>.custom-range{\n    transition:none\n  }\n}\n\n.input-group>.custom-range:focus{\n  color:#495057;\n  background-color:#fff;\n  border-color:#80bdff;\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.input-group>.custom-range:disabled,.input-group>.custom-range[readonly]{\n  background-color:#e9ecef\n}\n\n.input-group-lg>.custom-range{\n  height:calc(1.5em + 1rem + 2px);\n  padding:0 1rem;\n  border-radius:.3rem\n}\n\n.input-group-sm>.custom-range{\n  height:calc(1.5em + .5rem + 2px);\n  padding:0 .5rem;\n  border-radius:.2rem\n}\n\n.input-group .custom-range.is-valid,.was-validated .input-group .custom-range:valid{\n  border-color:#28a745\n}\n\n.input-group .custom-range.is-valid:focus,.was-validated .input-group .custom-range:valid:focus{\n  border-color:#28a745;\n  box-shadow:0 0 0 .2rem rgba(40,167,69,.25)\n}\n\n.custom-range.is-valid:focus::-webkit-slider-thumb,.was-validated .custom-range:valid:focus::-webkit-slider-thumb{\n  box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac\n}\n\n.custom-range.is-valid:focus::-moz-range-thumb,.was-validated .custom-range:valid:focus::-moz-range-thumb{\n  box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac\n}\n\n.custom-range.is-valid:focus::-ms-thumb,.was-validated .custom-range:valid:focus::-ms-thumb{\n  box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac\n}\n\n.custom-range.is-valid::-webkit-slider-thumb,.was-validated .custom-range:valid::-webkit-slider-thumb{\n  background-color:#28a745;\n  background-image:none\n}\n\n.custom-range.is-valid::-webkit-slider-thumb:active,.was-validated .custom-range:valid::-webkit-slider-thumb:active{\n  background-color:#9be7ac;\n  background-image:none\n}\n\n.custom-range.is-valid::-webkit-slider-runnable-track,.was-validated .custom-range:valid::-webkit-slider-runnable-track{\n  background-color:rgba(40,167,69,.35)\n}\n\n.custom-range.is-valid::-moz-range-thumb,.was-validated .custom-range:valid::-moz-range-thumb{\n  background-color:#28a745;\n  background-image:none\n}\n\n.custom-range.is-valid::-moz-range-thumb:active,.was-validated .custom-range:valid::-moz-range-thumb:active{\n  background-color:#9be7ac;\n  background-image:none\n}\n\n.custom-range.is-valid::-moz-range-track,.was-validated .custom-range:valid::-moz-range-track{\n  background:rgba(40,167,69,.35)\n}\n\n.custom-range.is-valid~.valid-feedback,.custom-range.is-valid~.valid-tooltip,.was-validated .custom-range:valid~.valid-feedback,.was-validated .custom-range:valid~.valid-tooltip{\n  display:block\n}\n\n.custom-range.is-valid::-ms-thumb,.was-validated .custom-range:valid::-ms-thumb{\n  background-color:#28a745;\n  background-image:none\n}\n\n.custom-range.is-valid::-ms-thumb:active,.was-validated .custom-range:valid::-ms-thumb:active{\n  background-color:#9be7ac;\n  background-image:none\n}\n\n.custom-range.is-valid::-ms-track-lower,.custom-range.is-valid::-ms-track-upper,.was-validated .custom-range:valid::-ms-track-lower,.was-validated .custom-range:valid::-ms-track-upper{\n  background:rgba(40,167,69,.35)\n}\n\n.input-group .custom-range.is-invalid,.was-validated .input-group .custom-range:invalid{\n  border-color:#dc3545\n}\n\n.input-group .custom-range.is-invalid:focus,.was-validated .input-group .custom-range:invalid:focus{\n  border-color:#dc3545;\n  box-shadow:0 0 0 .2rem rgba(220,53,69,.25)\n}\n\n.custom-range.is-invalid:focus::-webkit-slider-thumb,.was-validated .custom-range:invalid:focus::-webkit-slider-thumb{\n  box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1\n}\n\n.custom-range.is-invalid:focus::-moz-range-thumb,.was-validated .custom-range:invalid:focus::-moz-range-thumb{\n  box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1\n}\n\n.custom-range.is-invalid:focus::-ms-thumb,.was-validated .custom-range:invalid:focus::-ms-thumb{\n  box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1\n}\n\n.custom-range.is-invalid::-webkit-slider-thumb,.was-validated .custom-range:invalid::-webkit-slider-thumb{\n  background-color:#dc3545;\n  background-image:none\n}\n\n.custom-range.is-invalid::-webkit-slider-thumb:active,.was-validated .custom-range:invalid::-webkit-slider-thumb:active{\n  background-color:#f6cdd1;\n  background-image:none\n}\n\n.custom-range.is-invalid::-webkit-slider-runnable-track,.was-validated .custom-range:invalid::-webkit-slider-runnable-track{\n  background-color:rgba(220,53,69,.35)\n}\n\n.custom-range.is-invalid::-moz-range-thumb,.was-validated .custom-range:invalid::-moz-range-thumb{\n  background-color:#dc3545;\n  background-image:none\n}\n\n.custom-range.is-invalid::-moz-range-thumb:active,.was-validated .custom-range:invalid::-moz-range-thumb:active{\n  background-color:#f6cdd1;\n  background-image:none\n}\n\n.custom-range.is-invalid::-moz-range-track,.was-validated .custom-range:invalid::-moz-range-track{\n  background:rgba(220,53,69,.35)\n}\n\n.custom-range.is-invalid~.invalid-feedback,.custom-range.is-invalid~.invalid-tooltip,.was-validated .custom-range:invalid~.invalid-feedback,.was-validated .custom-range:invalid~.invalid-tooltip{\n  display:block\n}\n\n.custom-range.is-invalid::-ms-thumb,.was-validated .custom-range:invalid::-ms-thumb{\n  background-color:#dc3545;\n  background-image:none\n}\n\n.custom-range.is-invalid::-ms-thumb:active,.was-validated .custom-range:invalid::-ms-thumb:active{\n  background-color:#f6cdd1;\n  background-image:none\n}\n\n.custom-range.is-invalid::-ms-track-lower,.custom-range.is-invalid::-ms-track-upper,.was-validated .custom-range:invalid::-ms-track-lower,.was-validated .custom-range:invalid::-ms-track-upper{\n  background:rgba(220,53,69,.35)\n}\n\n.custom-radio.b-custom-control-lg,.input-group-lg .custom-radio{\n  font-size:1.25rem;\n  line-height:1.5;\n  padding-left:1.875rem\n}\n\n.custom-radio.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-radio .custom-control-label:before{\n  top:.3125rem;\n  left:-1.875rem;\n  width:1.25rem;\n  height:1.25rem;\n  border-radius:50%\n}\n\n.custom-radio.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-radio .custom-control-label:after{\n  top:.3125rem;\n  left:-1.875rem;\n  width:1.25rem;\n  height:1.25rem;\n  background:no-repeat 50%/50% 50%\n}\n\n.custom-radio.b-custom-control-sm,.input-group-sm .custom-radio{\n  font-size:.875rem;\n  line-height:1.5;\n  padding-left:1.3125rem\n}\n\n.custom-radio.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-radio .custom-control-label:before{\n  top:.21875rem;\n  left:-1.3125rem;\n  width:.875rem;\n  height:.875rem;\n  border-radius:50%\n}\n\n.custom-radio.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-radio .custom-control-label:after{\n  top:.21875rem;\n  left:-1.3125rem;\n  width:.875rem;\n  height:.875rem;\n  background:no-repeat 50%/50% 50%\n}\n\n.b-rating{\n  text-align:center\n}\n\n.b-rating.d-inline-flex{\n  width:auto\n}\n\n.b-rating .b-rating-star,.b-rating .b-rating-value{\n  padding:0 .25em\n}\n\n.b-rating .b-rating-value{\n  min-width:2.5em\n}\n\n.b-rating .b-rating-star{\n  display:inline-flex;\n  justify-content:center;\n  outline:0\n}\n\n.b-rating .b-rating-star .b-rating-icon{\n  display:inline-flex;\n  transition:all .15s ease-in-out\n}\n\n.b-rating.disabled,.b-rating:disabled{\n  background-color:#e9ecef;\n  color:#6c757d\n}\n\n.b-rating:not(.disabled):not(.readonly) .b-rating-star{\n  cursor:pointer\n}\n\n.b-rating:not(.disabled):not(.readonly) .b-rating-star:hover .b-rating-icon,.b-rating:not(.disabled):not(.readonly):focus:not(:hover) .b-rating-star.focused .b-rating-icon{\n  transform:scale(1.5)\n}\n\n.b-rating[dir=rtl] .b-rating-star-half{\n  transform:scaleX(-1)\n}\n\n.b-form-spinbutton{\n  text-align:center;\n  overflow:hidden;\n  background-image:none;\n  padding:0\n}\n\n.b-form-spinbutton[dir=rtl]:not(.flex-column),[dir=rtl] .b-form-spinbutton:not(.flex-column){\n  flex-direction:row-reverse\n}\n\n.b-form-spinbutton output{\n  font-size:inherit;\n  outline:0;\n  border:0;\n  background-color:transparent;\n  width:auto;\n  margin:0;\n  padding:0 .25rem\n}\n\n.b-form-spinbutton output>bdi,.b-form-spinbutton output>div{\n  display:block;\n  min-width:2.25em;\n  height:1.5em\n}\n\n.b-form-spinbutton.flex-column{\n  height:auto;\n  width:auto\n}\n\n.b-form-spinbutton.flex-column output{\n  margin:0 .25rem;\n  padding:.25rem 0\n}\n\n.b-form-spinbutton:not(.d-inline-flex):not(.flex-column){\n  output-width:100%\n}\n\n.b-form-spinbutton.d-inline-flex:not(.flex-column){\n  width:auto\n}\n\n.b-form-spinbutton .btn{\n  line-height:1;\n  box-shadow:none!important\n}\n\n.b-form-spinbutton .btn:disabled{\n  pointer-events:none\n}\n\n.b-form-spinbutton .btn:hover:not(:disabled)>div>.b-icon{\n  transform:scale(1.25)\n}\n\n.b-form-spinbutton.disabled,.b-form-spinbutton.readonly{\n  background-color:#e9ecef\n}\n\n.b-form-spinbutton.disabled{\n  pointer-events:none\n}\n\n.b-form-tags .b-form-tags-list{\n  margin-top:-.25rem\n}\n\n.b-form-tags .b-form-tags-list .b-form-tag,.b-form-tags .b-form-tags-list .b-from-tags-field{\n  margin-top:.25rem\n}\n\n.b-form-tags.focus{\n  color:#495057;\n  background-color:#fff;\n  border-color:#80bdff;\n  outline:0;\n  box-shadow:0 0 0 .2rem rgba(0,123,255,.25)\n}\n\n.b-form-tags.focus.is-valid{\n  border-color:#28a745;\n  box-shadow:0 0 0 .2rem rgba(40,167,69,.25)\n}\n\n.b-form-tags.focus.is-invalid{\n  border-color:#dc3545;\n  box-shadow:0 0 0 .2rem rgba(220,53,69,.25)\n}\n\n.b-form-tags.disabled{\n  background-color:#e9ecef\n}\n\n.b-form-tag{\n  font-size:75%;\n  font-weight:400;\n  line-height:1.5;\n  margin-right:.25rem\n}\n\n.b-form-tag.disabled{\n  opacity:.75\n}\n\n.b-form-tag>button.b-form-tag-remove{\n  color:inherit;\n  font-size:125%;\n  line-height:1;\n  float:none;\n  margin-left:.25rem\n}\n\n.form-control-lg .b-form-tag,.form-control-sm .b-form-tag{\n  line-height:1.5\n}\n\n.media-aside{\n  display:flex;\n  margin-right:1rem\n}\n\n.media-aside-right{\n  margin-right:0;\n  margin-left:1rem\n}\n\n.modal-backdrop{\n  opacity:.5\n}\n\n.b-pagination-pills .page-item .page-link{\n  border-radius:50rem!important;\n  margin-left:.25rem;\n  line-height:1\n}\n\n.b-pagination-pills .page-item:first-child .page-link{\n  margin-left:0\n}\n\n.popover.b-popover{\n  display:block;\n  opacity:1;\n  outline:0\n}\n\n.popover.b-popover.fade:not(.show){\n  opacity:0\n}\n\n.popover.b-popover.show{\n  opacity:1\n}\n\n.b-popover-primary.popover{\n  background-color:#cce5ff;\n  border-color:#b8daff\n}\n\n.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-primary.bs-popover-top>.arrow:before{\n  border-top-color:#b8daff\n}\n\n.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-primary.bs-popover-top>.arrow:after{\n  border-top-color:#cce5ff\n}\n\n.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-primary.bs-popover-right>.arrow:before{\n  border-right-color:#b8daff\n}\n\n.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-primary.bs-popover-right>.arrow:after{\n  border-right-color:#cce5ff\n}\n\n.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-primary.bs-popover-bottom>.arrow:before{\n  border-bottom-color:#b8daff\n}\n\n.b-popover-primary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-primary.bs-popover-bottom .popover-header:before,.b-popover-primary.bs-popover-bottom>.arrow:after{\n  border-bottom-color:#bdddff\n}\n\n.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-primary.bs-popover-left>.arrow:before{\n  border-left-color:#b8daff\n}\n\n.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-primary.bs-popover-left>.arrow:after{\n  border-left-color:#cce5ff\n}\n\n.b-popover-primary .popover-header{\n  color:#212529;\n  background-color:#bdddff;\n  border-bottom-color:#a3d0ff\n}\n\n.b-popover-primary .popover-body{\n  color:#004085\n}\n\n.b-popover-secondary.popover{\n  background-color:#e2e3e5;\n  border-color:#d6d8db\n}\n\n.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-secondary.bs-popover-top>.arrow:before{\n  border-top-color:#d6d8db\n}\n\n.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-secondary.bs-popover-top>.arrow:after{\n  border-top-color:#e2e3e5\n}\n\n.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-secondary.bs-popover-right>.arrow:before{\n  border-right-color:#d6d8db\n}\n\n.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-secondary.bs-popover-right>.arrow:after{\n  border-right-color:#e2e3e5\n}\n\n.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-secondary.bs-popover-bottom>.arrow:before{\n  border-bottom-color:#d6d8db\n}\n\n.b-popover-secondary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-secondary.bs-popover-bottom .popover-header:before,.b-popover-secondary.bs-popover-bottom>.arrow:after{\n  border-bottom-color:#dadbde\n}\n\n.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-secondary.bs-popover-left>.arrow:before{\n  border-left-color:#d6d8db\n}\n\n.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-secondary.bs-popover-left>.arrow:after{\n  border-left-color:#e2e3e5\n}\n\n.b-popover-secondary .popover-header{\n  color:#212529;\n  background-color:#dadbde;\n  border-bottom-color:#ccced2\n}\n\n.b-popover-secondary .popover-body{\n  color:#383d41\n}\n\n.b-popover-success.popover{\n  background-color:#d4edda;\n  border-color:#c3e6cb\n}\n\n.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-success.bs-popover-top>.arrow:before{\n  border-top-color:#c3e6cb\n}\n\n.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-success.bs-popover-top>.arrow:after{\n  border-top-color:#d4edda\n}\n\n.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-success.bs-popover-right>.arrow:before{\n  border-right-color:#c3e6cb\n}\n\n.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-success.bs-popover-right>.arrow:after{\n  border-right-color:#d4edda\n}\n\n.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-success.bs-popover-bottom>.arrow:before{\n  border-bottom-color:#c3e6cb\n}\n\n.b-popover-success.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-success.bs-popover-bottom .popover-header:before,.b-popover-success.bs-popover-bottom>.arrow:after{\n  border-bottom-color:#c9e8d1\n}\n\n.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-success.bs-popover-left>.arrow:before{\n  border-left-color:#c3e6cb\n}\n\n.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-success.bs-popover-left>.arrow:after{\n  border-left-color:#d4edda\n}\n\n.b-popover-success .popover-header{\n  color:#212529;\n  background-color:#c9e8d1;\n  border-bottom-color:#b7e1c1\n}\n\n.b-popover-success .popover-body{\n  color:#155724\n}\n\n.b-popover-info.popover{\n  background-color:#d1ecf1;\n  border-color:#bee5eb\n}\n\n.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-info.bs-popover-top>.arrow:before{\n  border-top-color:#bee5eb\n}\n\n.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-info.bs-popover-top>.arrow:after{\n  border-top-color:#d1ecf1\n}\n\n.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-info.bs-popover-right>.arrow:before{\n  border-right-color:#bee5eb\n}\n\n.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-info.bs-popover-right>.arrow:after{\n  border-right-color:#d1ecf1\n}\n\n.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-info.bs-popover-bottom>.arrow:before{\n  border-bottom-color:#bee5eb\n}\n\n.b-popover-info.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-info.bs-popover-bottom .popover-header:before,.b-popover-info.bs-popover-bottom>.arrow:after{\n  border-bottom-color:#c5e7ed\n}\n\n.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-info.bs-popover-left>.arrow:before{\n  border-left-color:#bee5eb\n}\n\n.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-info.bs-popover-left>.arrow:after{\n  border-left-color:#d1ecf1\n}\n\n.b-popover-info .popover-header{\n  color:#212529;\n  background-color:#c5e7ed;\n  border-bottom-color:#b2dfe7\n}\n\n.b-popover-info .popover-body{\n  color:#0c5460\n}\n\n.b-popover-warning.popover{\n  background-color:#fff3cd;\n  border-color:#ffeeba\n}\n\n.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-warning.bs-popover-top>.arrow:before{\n  border-top-color:#ffeeba\n}\n\n.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-warning.bs-popover-top>.arrow:after{\n  border-top-color:#fff3cd\n}\n\n.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-warning.bs-popover-right>.arrow:before{\n  border-right-color:#ffeeba\n}\n\n.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-warning.bs-popover-right>.arrow:after{\n  border-right-color:#fff3cd\n}\n\n.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-warning.bs-popover-bottom>.arrow:before{\n  border-bottom-color:#ffeeba\n}\n\n.b-popover-warning.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-warning.bs-popover-bottom .popover-header:before,.b-popover-warning.bs-popover-bottom>.arrow:after{\n  border-bottom-color:#ffefbe\n}\n\n.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-warning.bs-popover-left>.arrow:before{\n  border-left-color:#ffeeba\n}\n\n.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-warning.bs-popover-left>.arrow:after{\n  border-left-color:#fff3cd\n}\n\n.b-popover-warning .popover-header{\n  color:#212529;\n  background-color:#ffefbe;\n  border-bottom-color:#ffe9a4\n}\n\n.b-popover-warning .popover-body{\n  color:#856404\n}\n\n.b-popover-danger.popover{\n  background-color:#f8d7da;\n  border-color:#f5c6cb\n}\n\n.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-danger.bs-popover-top>.arrow:before{\n  border-top-color:#f5c6cb\n}\n\n.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-danger.bs-popover-top>.arrow:after{\n  border-top-color:#f8d7da\n}\n\n.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-danger.bs-popover-right>.arrow:before{\n  border-right-color:#f5c6cb\n}\n\n.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-danger.bs-popover-right>.arrow:after{\n  border-right-color:#f8d7da\n}\n\n.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-danger.bs-popover-bottom>.arrow:before{\n  border-bottom-color:#f5c6cb\n}\n\n.b-popover-danger.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-danger.bs-popover-bottom .popover-header:before,.b-popover-danger.bs-popover-bottom>.arrow:after{\n  border-bottom-color:#f6cace\n}\n\n.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-danger.bs-popover-left>.arrow:before{\n  border-left-color:#f5c6cb\n}\n\n.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-danger.bs-popover-left>.arrow:after{\n  border-left-color:#f8d7da\n}\n\n.b-popover-danger .popover-header{\n  color:#212529;\n  background-color:#f6cace;\n  border-bottom-color:#f2b4ba\n}\n\n.b-popover-danger .popover-body{\n  color:#721c24\n}\n\n.b-popover-light.popover{\n  background-color:#fefefe;\n  border-color:#fdfdfe\n}\n\n.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-light.bs-popover-top>.arrow:before{\n  border-top-color:#fdfdfe\n}\n\n.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-light.bs-popover-top>.arrow:after{\n  border-top-color:#fefefe\n}\n\n.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-light.bs-popover-right>.arrow:before{\n  border-right-color:#fdfdfe\n}\n\n.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-light.bs-popover-right>.arrow:after{\n  border-right-color:#fefefe\n}\n\n.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-light.bs-popover-bottom>.arrow:before{\n  border-bottom-color:#fdfdfe\n}\n\n.b-popover-light.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-light.bs-popover-bottom .popover-header:before,.b-popover-light.bs-popover-bottom>.arrow:after{\n  border-bottom-color:#f6f6f6\n}\n\n.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-light.bs-popover-left>.arrow:before{\n  border-left-color:#fdfdfe\n}\n\n.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-light.bs-popover-left>.arrow:after{\n  border-left-color:#fefefe\n}\n\n.b-popover-light .popover-header{\n  color:#212529;\n  background-color:#f6f6f6;\n  border-bottom-color:#eaeaea\n}\n\n.b-popover-light .popover-body{\n  color:#818182\n}\n\n.b-popover-dark.popover{\n  background-color:#d6d8d9;\n  border-color:#c6c8ca\n}\n\n.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-dark.bs-popover-top>.arrow:before{\n  border-top-color:#c6c8ca\n}\n\n.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-dark.bs-popover-top>.arrow:after{\n  border-top-color:#d6d8d9\n}\n\n.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-dark.bs-popover-right>.arrow:before{\n  border-right-color:#c6c8ca\n}\n\n.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-dark.bs-popover-right>.arrow:after{\n  border-right-color:#d6d8d9\n}\n\n.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-dark.bs-popover-bottom>.arrow:before{\n  border-bottom-color:#c6c8ca\n}\n\n.b-popover-dark.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-dark.bs-popover-bottom .popover-header:before,.b-popover-dark.bs-popover-bottom>.arrow:after{\n  border-bottom-color:#ced0d2\n}\n\n.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-dark.bs-popover-left>.arrow:before{\n  border-left-color:#c6c8ca\n}\n\n.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-dark.bs-popover-left>.arrow:after{\n  border-left-color:#d6d8d9\n}\n\n.b-popover-dark .popover-header{\n  color:#212529;\n  background-color:#ced0d2;\n  border-bottom-color:#c1c4c5\n}\n\n.b-popover-dark .popover-body{\n  color:#1b1e21\n}\n\n.b-sidebar-outer{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:0;\n  overflow:visible;\n  z-index:1035\n}\n\n.b-sidebar-backdrop{\n  left:0;\n  z-index:-1;\n  width:100vw;\n  opacity:.6\n}\n\n.b-sidebar,.b-sidebar-backdrop{\n  position:fixed;\n  top:0;\n  height:100vh\n}\n\n.b-sidebar{\n  display:flex;\n  flex-direction:column;\n  width:320px;\n  max-width:100%;\n  max-height:100%;\n  margin:0;\n  outline:0;\n  transform:translateX(0)\n}\n\n.b-sidebar.slide{\n  transition:transform .3s ease-in-out\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-sidebar.slide{\n    transition:none\n  }\n}\n\n.b-sidebar:not(.b-sidebar-right){\n  left:0;\n  right:auto\n}\n\n.b-sidebar:not(.b-sidebar-right).slide:not(.show){\n  transform:translateX(-100%)\n}\n\n.b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close{\n  margin-left:auto\n}\n\n.b-sidebar.b-sidebar-right{\n  left:auto;\n  right:0\n}\n\n.b-sidebar.b-sidebar-right.slide:not(.show){\n  transform:translateX(100%)\n}\n\n.b-sidebar.b-sidebar-right>.b-sidebar-header .close{\n  margin-right:auto\n}\n\n.b-sidebar>.b-sidebar-header{\n  font-size:1.5rem;\n  padding:.5rem 1rem;\n  display:flex;\n  flex-direction:row;\n  flex-grow:0;\n  align-items:center\n}\n\n[dir=rtl] .b-sidebar>.b-sidebar-header{\n  flex-direction:row-reverse\n}\n\n.b-sidebar>.b-sidebar-header .close{\n  float:none;\n  font-size:1.5rem\n}\n\n.b-sidebar>.b-sidebar-body{\n  flex-grow:1;\n  height:100%;\n  overflow-y:auto\n}\n\n.b-sidebar>.b-sidebar-footer{\n  flex-grow:0\n}\n\n.b-skeleton-wrapper{\n  cursor:wait\n}\n\n.b-skeleton{\n  position:relative;\n  overflow:hidden;\n  background-color:rgba(0,0,0,.12);\n  cursor:wait;\n  -webkit-mask-image:radial-gradient(#fff,#000);\n  mask-image:radial-gradient(#fff,#000)\n}\n\n.b-skeleton:before{\n  content:\"??\"\n}\n\n.b-skeleton-text{\n  height:1rem;\n  margin-bottom:.25rem;\n  border-radius:.25rem\n}\n\n.b-skeleton-button{\n  width:75px;\n  padding:.375rem .75rem;\n  font-size:1rem;\n  line-height:1.5;\n  border-radius:.25rem\n}\n\n.b-skeleton-avatar{\n  width:2.5em;\n  height:2.5em;\n  border-radius:50%\n}\n\n.b-skeleton-input{\n  height:calc(1.5em + .75rem + 2px);\n  padding:.375rem .75rem;\n  line-height:1.5;\n  border:1px solid #ced4da;\n  border-radius:.25rem\n}\n\n.b-skeleton-icon-wrapper svg{\n  color:rgba(0,0,0,.12)\n}\n\n.b-skeleton-img{\n  height:100%;\n  width:100%\n}\n\n.b-skeleton-animate-wave:after{\n  content:\"\";\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  z-index:0;\n  background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.4),transparent);\n  -webkit-animation:b-skeleton-animate-wave 1.75s linear infinite;\n  animation:b-skeleton-animate-wave 1.75s linear infinite\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-skeleton-animate-wave:after{\n    background:none;\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n@-webkit-keyframes b-skeleton-animate-wave{\n  0%{\n    transform:translateX(-100%)\n  }\n\n  to{\n    transform:translateX(100%)\n  }\n}\n\n@keyframes b-skeleton-animate-wave{\n  0%{\n    transform:translateX(-100%)\n  }\n\n  to{\n    transform:translateX(100%)\n  }\n}\n\n.b-skeleton-animate-fade{\n  -webkit-animation:b-skeleton-animate-fade .875s ease-in-out infinite alternate;\n  animation:b-skeleton-animate-fade .875s ease-in-out infinite alternate\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-skeleton-animate-fade{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n@-webkit-keyframes b-skeleton-animate-fade{\n  0%{\n    opacity:1\n  }\n\n  to{\n    opacity:.4\n  }\n}\n\n@keyframes b-skeleton-animate-fade{\n  0%{\n    opacity:1\n  }\n\n  to{\n    opacity:.4\n  }\n}\n\n.b-skeleton-animate-throb{\n  -webkit-animation:b-skeleton-animate-throb .875s ease-in infinite alternate;\n  animation:b-skeleton-animate-throb .875s ease-in infinite alternate\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-skeleton-animate-throb{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n@-webkit-keyframes b-skeleton-animate-throb{\n  0%{\n    transform:scale(1)\n  }\n\n  to{\n    transform:scale(.975)\n  }\n}\n\n@keyframes b-skeleton-animate-throb{\n  0%{\n    transform:scale(1)\n  }\n\n  to{\n    transform:scale(.975)\n  }\n}\n\n.table.b-table.b-table-fixed{\n  table-layout:fixed\n}\n\n.table.b-table.b-table-no-border-collapse{\n  border-collapse:separate;\n  border-spacing:0\n}\n\n.table.b-table[aria-busy=true]{\n  opacity:.55\n}\n\n.table.b-table>tbody>tr.b-table-details>td{\n  border-top:none!important\n}\n\n.table.b-table>caption{\n  caption-side:bottom\n}\n\n.table.b-table.b-table-caption-top>caption{\n  caption-side:top!important\n}\n\n.table.b-table>tbody>.table-active,.table.b-table>tbody>.table-active>td,.table.b-table>tbody>.table-active>th{\n  background-color:rgba(0,0,0,.075)\n}\n\n.table.b-table.table-hover>tbody>tr.table-active:hover td,.table.b-table.table-hover>tbody>tr.table-active:hover th{\n  color:#212529;\n  background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));\n  background-repeat:no-repeat\n}\n\n.table.b-table>tbody>.bg-active,.table.b-table>tbody>.bg-active>td,.table.b-table>tbody>.bg-active>th{\n  background-color:hsla(0,0%,100%,.075)!important\n}\n\n.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover td,.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover th{\n  color:#fff;\n  background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));\n  background-repeat:no-repeat\n}\n\n.b-table-sticky-header,.table-responsive,[class*=table-responsive-]{\n  margin-bottom:1rem\n}\n\n.b-table-sticky-header>.table,.table-responsive>.table,[class*=table-responsive-]>.table{\n  margin-bottom:0\n}\n\n.b-table-sticky-header{\n  overflow-y:auto;\n  max-height:300px\n}\n\n@media print{\n  .b-table-sticky-header{\n    overflow-y:visible!important;\n    max-height:none!important\n  }\n}\n\n@supports (position:sticky){\n  .b-table-sticky-header>.table.b-table>thead>tr>th{\n    position:sticky;\n    top:0;\n    z-index:2\n  }\n\n  .b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{\n    position:sticky;\n    left:0\n  }\n\n  .b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{\n    z-index:5\n  }\n\n  .b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column{\n    z-index:2\n  }\n\n  .table.b-table>tbody>tr>.table-b-table-default,.table.b-table>tfoot>tr>.table-b-table-default,.table.b-table>thead>tr>.table-b-table-default{\n    color:#212529;\n    background-color:#fff\n  }\n\n  .table.b-table.table-dark>tbody>tr>.bg-b-table-default,.table.b-table.table-dark>tfoot>tr>.bg-b-table-default,.table.b-table.table-dark>thead>tr>.bg-b-table-default{\n    color:#fff;\n    background-color:#343a40\n  }\n\n  .table.b-table.table-striped>tbody>tr:nth-of-type(odd)>.table-b-table-default{\n    background-image:linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05));\n    background-repeat:no-repeat\n  }\n\n  .table.b-table.table-striped.table-dark>tbody>tr:nth-of-type(odd)>.bg-b-table-default{\n    background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,.05));\n    background-repeat:no-repeat\n  }\n\n  .table.b-table.table-hover>tbody>tr:hover>.table-b-table-default{\n    color:#212529;\n    background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));\n    background-repeat:no-repeat\n  }\n\n  .table.b-table.table-hover.table-dark>tbody>tr:hover>.bg-b-table-default{\n    color:#fff;\n    background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));\n    background-repeat:no-repeat\n  }\n}\n\n.table.b-table>tfoot>tr>[aria-sort],.table.b-table>thead>tr>[aria-sort]{\n  cursor:pointer;\n  background-image:none;\n  background-repeat:no-repeat;\n  background-size:.65em 1em\n}\n\n.table.b-table>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){\n  background-position:right .375rem center;\n  padding-right:calc(.75rem + .65em)\n}\n\n.table.b-table>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table>thead>tr>[aria-sort].b-table-sort-icon-left{\n  background-position:left .375rem center;\n  padding-left:calc(.75rem + .65em)\n}\n\n.table.b-table>tfoot>tr>[aria-sort=none],.table.b-table>thead>tr>[aria-sort=none]{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")\n}\n\n.table.b-table>tfoot>tr>[aria-sort=ascending],.table.b-table>thead>tr>[aria-sort=ascending]{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")\n}\n\n.table.b-table>tfoot>tr>[aria-sort=descending],.table.b-table>thead>tr>[aria-sort=descending]{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")\n}\n\n.table.b-table.table-dark>tfoot>tr>[aria-sort=none],.table.b-table.table-dark>thead>tr>[aria-sort=none],.table.b-table>.thead-dark>tr>[aria-sort=none]{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")\n}\n\n.table.b-table.table-dark>tfoot>tr>[aria-sort=ascending],.table.b-table.table-dark>thead>tr>[aria-sort=ascending],.table.b-table>.thead-dark>tr>[aria-sort=ascending]{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")\n}\n\n.table.b-table.table-dark>tfoot>tr>[aria-sort=descending],.table.b-table.table-dark>thead>tr>[aria-sort=descending],.table.b-table>.thead-dark>tr>[aria-sort=descending]{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")\n}\n\n.table.b-table>tfoot>tr>.table-dark[aria-sort=none],.table.b-table>thead>tr>.table-dark[aria-sort=none]{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")\n}\n\n.table.b-table>tfoot>tr>.table-dark[aria-sort=ascending],.table.b-table>thead>tr>.table-dark[aria-sort=ascending]{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")\n}\n\n.table.b-table>tfoot>tr>.table-dark[aria-sort=descending],.table.b-table>thead>tr>.table-dark[aria-sort=descending]{\n  background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")\n}\n\n.table.b-table.table-sm>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table.table-sm>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){\n  background-position:right .15rem center;\n  padding-right:calc(.3rem + .65em)\n}\n\n.table.b-table.table-sm>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table.table-sm>thead>tr>[aria-sort].b-table-sort-icon-left{\n  background-position:left .15rem center;\n  padding-left:calc(.3rem + .65em)\n}\n\n.table.b-table.b-table-selectable:not(.b-table-selectable-no-click)>tbody>tr{\n  cursor:pointer\n}\n\n.table.b-table.b-table-selectable:not(.b-table-selectable-no-click).b-table-selecting.b-table-select-range>tbody>tr{\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n\n@media (max-width:575.98px){\n  .table.b-table.b-table-stacked-sm{\n    display:block;\n    width:100%\n  }\n\n  .table.b-table.b-table-stacked-sm>caption,.table.b-table.b-table-stacked-sm>tbody,.table.b-table.b-table-stacked-sm>tbody>tr,.table.b-table.b-table-stacked-sm>tbody>tr>td,.table.b-table.b-table-stacked-sm>tbody>tr>th{\n    display:block\n  }\n\n  .table.b-table.b-table-stacked-sm>tfoot,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-sm>thead,.table.b-table.b-table-stacked-sm>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>thead>tr.b-table-top-row{\n    display:none\n  }\n\n  .table.b-table.b-table-stacked-sm>caption{\n    caption-side:top!important\n  }\n\n  .table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:before{\n    content:attr(data-label);\n    width:40%;\n    float:left;\n    text-align:right;\n    overflow-wrap:break-word;\n    font-weight:700;\n    font-style:normal;\n    padding:0 .5rem 0 0;\n    margin:0\n  }\n\n  .table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:after{\n    display:block;\n    clear:both;\n    content:\"\"\n  }\n\n  .table.b-table.b-table-stacked-sm>tbody>tr>[data-label]>div{\n    display:inline-block;\n    width:60%;\n    padding:0 0 0 .5rem;\n    margin:0\n  }\n\n  .table.b-table.b-table-stacked-sm>tbody>tr.bottom-row,.table.b-table.b-table-stacked-sm>tbody>tr.top-row{\n    display:none\n  }\n\n  .table.b-table.b-table-stacked-sm>tbody>tr>:first-child,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+th{\n    border-top-width:3px\n  }\n}\n\n@media (max-width:767.98px){\n  .table.b-table.b-table-stacked-md{\n    display:block;\n    width:100%\n  }\n\n  .table.b-table.b-table-stacked-md>caption,.table.b-table.b-table-stacked-md>tbody,.table.b-table.b-table-stacked-md>tbody>tr,.table.b-table.b-table-stacked-md>tbody>tr>td,.table.b-table.b-table-stacked-md>tbody>tr>th{\n    display:block\n  }\n\n  .table.b-table.b-table-stacked-md>tfoot,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-md>thead,.table.b-table.b-table-stacked-md>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>thead>tr.b-table-top-row{\n    display:none\n  }\n\n  .table.b-table.b-table-stacked-md>caption{\n    caption-side:top!important\n  }\n\n  .table.b-table.b-table-stacked-md>tbody>tr>[data-label]:before{\n    content:attr(data-label);\n    width:40%;\n    float:left;\n    text-align:right;\n    overflow-wrap:break-word;\n    font-weight:700;\n    font-style:normal;\n    padding:0 .5rem 0 0;\n    margin:0\n  }\n\n  .table.b-table.b-table-stacked-md>tbody>tr>[data-label]:after{\n    display:block;\n    clear:both;\n    content:\"\"\n  }\n\n  .table.b-table.b-table-stacked-md>tbody>tr>[data-label]>div{\n    display:inline-block;\n    width:60%;\n    padding:0 0 0 .5rem;\n    margin:0\n  }\n\n  .table.b-table.b-table-stacked-md>tbody>tr.bottom-row,.table.b-table.b-table-stacked-md>tbody>tr.top-row{\n    display:none\n  }\n\n  .table.b-table.b-table-stacked-md>tbody>tr>:first-child,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+th{\n    border-top-width:3px\n  }\n}\n\n@media (max-width:991.98px){\n  .table.b-table.b-table-stacked-lg{\n    display:block;\n    width:100%\n  }\n\n  .table.b-table.b-table-stacked-lg>caption,.table.b-table.b-table-stacked-lg>tbody,.table.b-table.b-table-stacked-lg>tbody>tr,.table.b-table.b-table-stacked-lg>tbody>tr>td,.table.b-table.b-table-stacked-lg>tbody>tr>th{\n    display:block\n  }\n\n  .table.b-table.b-table-stacked-lg>tfoot,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-lg>thead,.table.b-table.b-table-stacked-lg>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>thead>tr.b-table-top-row{\n    display:none\n  }\n\n  .table.b-table.b-table-stacked-lg>caption{\n    caption-side:top!important\n  }\n\n  .table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:before{\n    content:attr(data-label);\n    width:40%;\n    float:left;\n    text-align:right;\n    overflow-wrap:break-word;\n    font-weight:700;\n    font-style:normal;\n    padding:0 .5rem 0 0;\n    margin:0\n  }\n\n  .table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:after{\n    display:block;\n    clear:both;\n    content:\"\"\n  }\n\n  .table.b-table.b-table-stacked-lg>tbody>tr>[data-label]>div{\n    display:inline-block;\n    width:60%;\n    padding:0 0 0 .5rem;\n    margin:0\n  }\n\n  .table.b-table.b-table-stacked-lg>tbody>tr.bottom-row,.table.b-table.b-table-stacked-lg>tbody>tr.top-row{\n    display:none\n  }\n\n  .table.b-table.b-table-stacked-lg>tbody>tr>:first-child,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+th{\n    border-top-width:3px\n  }\n}\n\n@media (max-width:1199.98px){\n  .table.b-table.b-table-stacked-xl{\n    display:block;\n    width:100%\n  }\n\n  .table.b-table.b-table-stacked-xl>caption,.table.b-table.b-table-stacked-xl>tbody,.table.b-table.b-table-stacked-xl>tbody>tr,.table.b-table.b-table-stacked-xl>tbody>tr>td,.table.b-table.b-table-stacked-xl>tbody>tr>th{\n    display:block\n  }\n\n  .table.b-table.b-table-stacked-xl>tfoot,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-xl>thead,.table.b-table.b-table-stacked-xl>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>thead>tr.b-table-top-row{\n    display:none\n  }\n\n  .table.b-table.b-table-stacked-xl>caption{\n    caption-side:top!important\n  }\n\n  .table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:before{\n    content:attr(data-label);\n    width:40%;\n    float:left;\n    text-align:right;\n    overflow-wrap:break-word;\n    font-weight:700;\n    font-style:normal;\n    padding:0 .5rem 0 0;\n    margin:0\n  }\n\n  .table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:after{\n    display:block;\n    clear:both;\n    content:\"\"\n  }\n\n  .table.b-table.b-table-stacked-xl>tbody>tr>[data-label]>div{\n    display:inline-block;\n    width:60%;\n    padding:0 0 0 .5rem;\n    margin:0\n  }\n\n  .table.b-table.b-table-stacked-xl>tbody>tr.bottom-row,.table.b-table.b-table-stacked-xl>tbody>tr.top-row{\n    display:none\n  }\n\n  .table.b-table.b-table-stacked-xl>tbody>tr>:first-child,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+th{\n    border-top-width:3px\n  }\n}\n\n.table.b-table.b-table-stacked{\n  display:block;\n  width:100%\n}\n\n.table.b-table.b-table-stacked>caption,.table.b-table.b-table-stacked>tbody,.table.b-table.b-table-stacked>tbody>tr,.table.b-table.b-table-stacked>tbody>tr>td,.table.b-table.b-table-stacked>tbody>tr>th{\n  display:block\n}\n\n.table.b-table.b-table-stacked>tfoot,.table.b-table.b-table-stacked>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked>thead,.table.b-table.b-table-stacked>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked>thead>tr.b-table-top-row{\n  display:none\n}\n\n.table.b-table.b-table-stacked>caption{\n  caption-side:top!important\n}\n\n.table.b-table.b-table-stacked>tbody>tr>[data-label]:before{\n  content:attr(data-label);\n  width:40%;\n  float:left;\n  text-align:right;\n  overflow-wrap:break-word;\n  font-weight:700;\n  font-style:normal;\n  padding:0 .5rem 0 0;\n  margin:0\n}\n\n.table.b-table.b-table-stacked>tbody>tr>[data-label]:after{\n  display:block;\n  clear:both;\n  content:\"\"\n}\n\n.table.b-table.b-table-stacked>tbody>tr>[data-label]>div{\n  display:inline-block;\n  width:60%;\n  padding:0 0 0 .5rem;\n  margin:0\n}\n\n.table.b-table.b-table-stacked>tbody>tr.bottom-row,.table.b-table.b-table-stacked>tbody>tr.top-row{\n  display:none\n}\n\n.table.b-table.b-table-stacked>tbody>tr>:first-child,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+th{\n  border-top-width:3px\n}\n\n.b-time{\n  min-width:150px\n}\n\n.b-time[aria-disabled=true] output,.b-time[aria-readonly=true] output,.b-time output.disabled{\n  background-color:#e9ecef;\n  opacity:1\n}\n\n.b-time[aria-disabled=true] output{\n  pointer-events:none\n}\n\n[dir=rtl] .b-time>.d-flex:not(.flex-column){\n  flex-direction:row-reverse\n}\n\n.b-time .b-time-header{\n  margin-bottom:.5rem\n}\n\n.b-time .b-time-header output{\n  padding:.25rem;\n  font-size:80%\n}\n\n.b-time .b-time-footer{\n  margin-top:.5rem\n}\n\n.b-time .b-time-ampm{\n  margin-left:.5rem\n}\n\n.b-toast{\n  display:block;\n  position:relative;\n  max-width:350px;\n  -webkit-backface-visibility:hidden;\n  backface-visibility:hidden;\n  background-clip:padding-box;\n  z-index:1;\n  border-radius:.25rem\n}\n\n.b-toast .toast{\n  background-color:hsla(0,0%,100%,.85)\n}\n\n.b-toast:not(:last-child){\n  margin-bottom:.75rem\n}\n\n.b-toast.b-toast-solid .toast{\n  background-color:#fff\n}\n\n.b-toast .toast{\n  opacity:1\n}\n\n.b-toast .toast.fade:not(.show){\n  opacity:0\n}\n\n.b-toast .toast .toast-body{\n  display:block\n}\n\n.b-toast-primary .toast{\n  background-color:rgba(230,242,255,.85);\n  border-color:rgba(184,218,255,.85);\n  color:#004085\n}\n\n.b-toast-primary .toast .toast-header{\n  color:#004085;\n  background-color:rgba(204,229,255,.85);\n  border-bottom-color:rgba(184,218,255,.85)\n}\n\n.b-toast-primary.b-toast-solid .toast{\n  background-color:#e6f2ff\n}\n\n.b-toast-secondary .toast{\n  background-color:rgba(239,240,241,.85);\n  border-color:rgba(214,216,219,.85);\n  color:#383d41\n}\n\n.b-toast-secondary .toast .toast-header{\n  color:#383d41;\n  background-color:rgba(226,227,229,.85);\n  border-bottom-color:rgba(214,216,219,.85)\n}\n\n.b-toast-secondary.b-toast-solid .toast{\n  background-color:#eff0f1\n}\n\n.b-toast-success .toast{\n  background-color:rgba(230,245,233,.85);\n  border-color:rgba(195,230,203,.85);\n  color:#155724\n}\n\n.b-toast-success .toast .toast-header{\n  color:#155724;\n  background-color:rgba(212,237,218,.85);\n  border-bottom-color:rgba(195,230,203,.85)\n}\n\n.b-toast-success.b-toast-solid .toast{\n  background-color:#e6f5e9\n}\n\n.b-toast-info .toast{\n  background-color:rgba(229,244,247,.85);\n  border-color:rgba(190,229,235,.85);\n  color:#0c5460\n}\n\n.b-toast-info .toast .toast-header{\n  color:#0c5460;\n  background-color:rgba(209,236,241,.85);\n  border-bottom-color:rgba(190,229,235,.85)\n}\n\n.b-toast-info.b-toast-solid .toast{\n  background-color:#e5f4f7\n}\n\n.b-toast-warning .toast{\n  background-color:rgba(255,249,231,.85);\n  border-color:rgba(255,238,186,.85);\n  color:#856404\n}\n\n.b-toast-warning .toast .toast-header{\n  color:#856404;\n  background-color:rgba(255,243,205,.85);\n  border-bottom-color:rgba(255,238,186,.85)\n}\n\n.b-toast-warning.b-toast-solid .toast{\n  background-color:#fff9e7\n}\n\n.b-toast-danger .toast{\n  background-color:rgba(252,237,238,.85);\n  border-color:rgba(245,198,203,.85);\n  color:#721c24\n}\n\n.b-toast-danger .toast .toast-header{\n  color:#721c24;\n  background-color:rgba(248,215,218,.85);\n  border-bottom-color:rgba(245,198,203,.85)\n}\n\n.b-toast-danger.b-toast-solid .toast{\n  background-color:#fcedee\n}\n\n.b-toast-light .toast{\n  background-color:hsla(0,0%,100%,.85);\n  border-color:rgba(253,253,254,.85);\n  color:#818182\n}\n\n.b-toast-light .toast .toast-header{\n  color:#818182;\n  background-color:hsla(0,0%,99.6%,.85);\n  border-bottom-color:rgba(253,253,254,.85)\n}\n\n.b-toast-light.b-toast-solid .toast{\n  background-color:#fff\n}\n\n.b-toast-dark .toast{\n  background-color:rgba(227,229,229,.85);\n  border-color:rgba(198,200,202,.85);\n  color:#1b1e21\n}\n\n.b-toast-dark .toast .toast-header{\n  color:#1b1e21;\n  background-color:rgba(214,216,217,.85);\n  border-bottom-color:rgba(198,200,202,.85)\n}\n\n.b-toast-dark.b-toast-solid .toast{\n  background-color:#e3e5e5\n}\n\n.b-toaster{\n  z-index:1100\n}\n\n.b-toaster .b-toaster-slot{\n  position:relative;\n  display:block\n}\n\n.b-toaster .b-toaster-slot:empty{\n  display:none!important\n}\n\n.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right,.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{\n  position:fixed;\n  left:.5rem;\n  right:.5rem;\n  margin:0;\n  padding:0;\n  height:0;\n  overflow:visible\n}\n\n.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{\n  position:absolute;\n  max-width:350px;\n  width:100%;\n  left:0;\n  right:0;\n  padding:0;\n  margin:0\n}\n\n.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-bottom-full .b-toaster-slot .toast,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-top-full .b-toaster-slot .toast{\n  width:100%;\n  max-width:100%\n}\n\n.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{\n  top:0\n}\n\n.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{\n  top:.5rem\n}\n\n.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right{\n  bottom:0\n}\n\n.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot{\n  bottom:.5rem\n}\n\n.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{\n  margin-left:auto\n}\n\n.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot{\n  margin-right:auto\n}\n\n.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-move,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-move{\n  transition:transform .175s\n}\n\n.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade{\n  transition-delay:.175s\n}\n\n.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active{\n  position:absolute;\n  transition-delay:.175s\n}\n\n.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade{\n  transition-delay:0s\n}\n\n.tooltip.b-tooltip{\n  display:block;\n  opacity:.9;\n  outline:0\n}\n\n.tooltip.b-tooltip.fade:not(.show){\n  opacity:0\n}\n\n.tooltip.b-tooltip.show{\n  opacity:.9\n}\n\n.tooltip.b-tooltip.noninteractive{\n  pointer-events:none\n}\n\n.tooltip.b-tooltip .arrow{\n  margin:0 .25rem\n}\n\n.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.bs-tooltip-left .arrow,.tooltip.b-tooltip.bs-tooltip-right .arrow{\n  margin:.25rem 0\n}\n\n.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-top .arrow:before{\n  border-top-color:#007bff\n}\n\n.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-right .arrow:before{\n  border-right-color:#007bff\n}\n\n.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow:before{\n  border-bottom-color:#007bff\n}\n\n.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-left .arrow:before{\n  border-left-color:#007bff\n}\n\n.tooltip.b-tooltip-primary .tooltip-inner{\n  color:#fff;\n  background-color:#007bff\n}\n\n.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-top .arrow:before{\n  border-top-color:#6c757d\n}\n\n.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-right .arrow:before{\n  border-right-color:#6c757d\n}\n\n.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow:before{\n  border-bottom-color:#6c757d\n}\n\n.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-left .arrow:before{\n  border-left-color:#6c757d\n}\n\n.tooltip.b-tooltip-secondary .tooltip-inner{\n  color:#fff;\n  background-color:#6c757d\n}\n\n.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-top .arrow:before{\n  border-top-color:#28a745\n}\n\n.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-right .arrow:before{\n  border-right-color:#28a745\n}\n\n.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-bottom .arrow:before{\n  border-bottom-color:#28a745\n}\n\n.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-left .arrow:before{\n  border-left-color:#28a745\n}\n\n.tooltip.b-tooltip-success .tooltip-inner{\n  color:#fff;\n  background-color:#28a745\n}\n\n.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-top .arrow:before{\n  border-top-color:#17a2b8\n}\n\n.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-right .arrow:before{\n  border-right-color:#17a2b8\n}\n\n.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-bottom .arrow:before{\n  border-bottom-color:#17a2b8\n}\n\n.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-left .arrow:before{\n  border-left-color:#17a2b8\n}\n\n.tooltip.b-tooltip-info .tooltip-inner{\n  color:#fff;\n  background-color:#17a2b8\n}\n\n.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-top .arrow:before{\n  border-top-color:#ffc107\n}\n\n.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-right .arrow:before{\n  border-right-color:#ffc107\n}\n\n.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow:before{\n  border-bottom-color:#ffc107\n}\n\n.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-left .arrow:before{\n  border-left-color:#ffc107\n}\n\n.tooltip.b-tooltip-warning .tooltip-inner{\n  color:#212529;\n  background-color:#ffc107\n}\n\n.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-top .arrow:before{\n  border-top-color:#dc3545\n}\n\n.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-right .arrow:before{\n  border-right-color:#dc3545\n}\n\n.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow:before{\n  border-bottom-color:#dc3545\n}\n\n.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-left .arrow:before{\n  border-left-color:#dc3545\n}\n\n.tooltip.b-tooltip-danger .tooltip-inner{\n  color:#fff;\n  background-color:#dc3545\n}\n\n.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-top .arrow:before{\n  border-top-color:#f8f9fa\n}\n\n.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-right .arrow:before{\n  border-right-color:#f8f9fa\n}\n\n.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-bottom .arrow:before{\n  border-bottom-color:#f8f9fa\n}\n\n.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-left .arrow:before{\n  border-left-color:#f8f9fa\n}\n\n.tooltip.b-tooltip-light .tooltip-inner{\n  color:#212529;\n  background-color:#f8f9fa\n}\n\n.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-top .arrow:before{\n  border-top-color:#343a40\n}\n\n.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-right .arrow:before{\n  border-right-color:#343a40\n}\n\n.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow:before{\n  border-bottom-color:#343a40\n}\n\n.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-left .arrow:before{\n  border-left-color:#343a40\n}\n\n.tooltip.b-tooltip-dark .tooltip-inner{\n  color:#fff;\n  background-color:#343a40\n}\n\n.b-icon.bi{\n  display:inline-block;\n  overflow:visible;\n  vertical-align:-.15em\n}\n\n.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{\n  transform-origin:center;\n  -webkit-animation:b-icon-animation-cylon .75s ease-in-out infinite alternate;\n  animation:b-icon-animation-cylon .75s ease-in-out infinite alternate\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{\n  transform-origin:center;\n  -webkit-animation:b-icon-animation-cylon-vertical .75s ease-in-out infinite alternate;\n  animation:b-icon-animation-cylon-vertical .75s ease-in-out infinite alternate\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{\n  transform-origin:center;\n  -webkit-animation:b-icon-animation-fade .75s ease-in-out infinite alternate;\n  animation:b-icon-animation-fade .75s ease-in-out infinite alternate\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{\n  transform-origin:center;\n  -webkit-animation:b-icon-animation-spin 2s linear infinite normal;\n  animation:b-icon-animation-spin 2s linear infinite normal\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{\n  transform-origin:center;\n  animation:b-icon-animation-spin 2s linear infinite reverse\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{\n  transform-origin:center;\n  -webkit-animation:b-icon-animation-spin 1s steps(8) infinite normal;\n  animation:b-icon-animation-spin 1s steps(8) infinite normal\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{\n  transform-origin:center;\n  animation:b-icon-animation-spin 1s steps(8) infinite reverse\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{\n  transform-origin:center;\n  -webkit-animation:b-icon-animation-throb .75s ease-in-out infinite alternate;\n  animation:b-icon-animation-throb .75s ease-in-out infinite alternate\n}\n\n@media (prefers-reduced-motion:reduce){\n  .b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{\n    -webkit-animation:none;\n    animation:none\n  }\n}\n\n@-webkit-keyframes b-icon-animation-cylon{\n  0%{\n    transform:translateX(-25%)\n  }\n\n  to{\n    transform:translateX(25%)\n  }\n}\n\n@keyframes b-icon-animation-cylon{\n  0%{\n    transform:translateX(-25%)\n  }\n\n  to{\n    transform:translateX(25%)\n  }\n}\n\n@-webkit-keyframes b-icon-animation-cylon-vertical{\n  0%{\n    transform:translateY(25%)\n  }\n\n  to{\n    transform:translateY(-25%)\n  }\n}\n\n@keyframes b-icon-animation-cylon-vertical{\n  0%{\n    transform:translateY(25%)\n  }\n\n  to{\n    transform:translateY(-25%)\n  }\n}\n\n@-webkit-keyframes b-icon-animation-fade{\n  0%{\n    opacity:.1\n  }\n\n  to{\n    opacity:1\n  }\n}\n\n@keyframes b-icon-animation-fade{\n  0%{\n    opacity:.1\n  }\n\n  to{\n    opacity:1\n  }\n}\n\n@-webkit-keyframes b-icon-animation-spin{\n  0%{\n    transform:rotate(0deg)\n  }\n\n  to{\n    transform:rotate(359deg)\n  }\n}\n\n@keyframes b-icon-animation-spin{\n  0%{\n    transform:rotate(0deg)\n  }\n\n  to{\n    transform:rotate(359deg)\n  }\n}\n\n@-webkit-keyframes b-icon-animation-throb{\n  0%{\n    opacity:.5;\n    transform:scale(.5)\n  }\n\n  to{\n    opacity:1;\n    transform:scale(1)\n  }\n}\n\n@keyframes b-icon-animation-throb{\n  0%{\n    opacity:.5;\n    transform:scale(.5)\n  }\n\n  to{\n    opacity:1;\n    transform:scale(1)\n  }\n}\n\n.btn .b-icon.bi,.dropdown-item .b-icon.bi,.dropdown-toggle .b-icon.bi,.input-group-text .b-icon.bi,.nav-link .b-icon.bi{\n  font-size:125%;\n  vertical-align:text-bottom\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layoutview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layoutview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layoutview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layoutview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layoutview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{\n  font-family:\"Barlow Semi Condensed\",sans-serif\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(16);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(17);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(7);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(6);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _1362870f = () => interopDefault(__webpack_require__.e(/* import() | pages/about/index */ 3).then(__webpack_require__.bind(null, 70)));

const _64aa8b0b = () => interopDefault(__webpack_require__.e(/* import() | pages/blogs/index */ 5).then(__webpack_require__.bind(null, 69)));

const _20bfbd3a = () => interopDefault(__webpack_require__.e(/* import() | pages/index backup */ 10).then(__webpack_require__.bind(null, 71)));

const _708ba6d9 = () => interopDefault(__webpack_require__.e(/* import() | pages/common/homecarusal */ 7).then(__webpack_require__.bind(null, 56)));

const _7a7fe957 = () => interopDefault(__webpack_require__.e(/* import() | pages/common/sidebar */ 8).then(__webpack_require__.bind(null, 41)));

const _715ed590 = () => interopDefault(__webpack_require__.e(/* import() | pages/blogs/_post */ 4).then(__webpack_require__.bind(null, 72)));

const _09250fb6 = () => interopDefault(__webpack_require__.e(/* import() | pages/category/_category */ 6).then(__webpack_require__.bind(null, 73)));

const _e3e399e6 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_id/index */ 11).then(__webpack_require__.bind(null, 76)));

const _589bbcd8 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 9).then(__webpack_require__.bind(null, 74)));

const _26a8fea3 = () => interopDefault(__webpack_require__.e(/* import() | pages/_year/_month */ 2).then(__webpack_require__.bind(null, 75)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _1362870f,
    name: "about"
  }, {
    path: "/blogs",
    component: _64aa8b0b,
    name: "blogs"
  }, {
    path: "/index%20backup",
    component: _20bfbd3a,
    name: "index backup"
  }, {
    path: "/common/homecarusal",
    component: _708ba6d9,
    name: "common-homecarusal"
  }, {
    path: "/common/sidebar",
    component: _7a7fe957,
    name: "common-sidebar"
  }, {
    path: "/blogs/:post",
    component: _715ed590,
    name: "blogs-post"
  }, {
    path: "/category/:category?",
    component: _09250fb6,
    name: "category-category"
  }, {
    path: "/user/:id",
    component: _e3e399e6,
    name: "user-id"
  }, {
    path: "/",
    component: _589bbcd8,
    name: "index"
  }, {
    path: "/:year/:month?",
    component: _26a8fea3,
    name: "year-month"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=0e7c8832&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-jumbotron',{staticClass:"text-center",staticStyle:{"height":"75vh"},attrs:{"bg-variant":"danger","text-variant":"white","border-variant":"dark"}},[_c('h1',[_vm._v(_vm._s(_vm.error.statusCode))]),_vm._v(" "),_c('br'),_c('hr'),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.error.message)+"  "),_c('br')]),_vm._v(" "),_c('nuxt-link',{staticClass:"text-white",attrs:{"to":"/"}},[_vm._v("Go Home")]),_vm._v("???\n  ")],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=0e7c8832&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  layout: 'layout-error',

  data() {
    return {
      errorMessage: 'Page'
    };
  },

  meta: [],
  layout: 'layout-error',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6c923416"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "03ee13cd"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
var tailwind = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism.css
var prism = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=97e65fba&
var defaultvue_type_template_id_97e65fba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nuxt')],1)}
var defaultvue_type_template_id_97e65fba_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=97e65fba&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_97e65fba_render,
  defaultvue_type_template_id_97e65fba_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "bc99b724"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error/layout-error.vue?vue&type=template&id=f44084d8&
var layout_errorvue_type_template_id_f44084d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-jumbotron',{attrs:{"bg-variant":"info","text-variant":"white","border-variant":"dark"}},[_c('h1',[_vm._v("Error")]),_vm._v(" "),_c('nuxt')],1)],1)}
var layout_errorvue_type_template_id_f44084d8_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error/layout-error.vue?vue&type=template&id=f44084d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error/layout-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var layout_errorvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/error/layout-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var error_layout_errorvue_type_script_lang_js_ = (layout_errorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/error/layout-error.vue





/* normalize component */

var layout_error_component = Object(componentNormalizer["a" /* default */])(
  error_layout_errorvue_type_script_lang_js_,
  layout_errorvue_type_template_id_f44084d8_render,
  layout_errorvue_type_template_id_f44084d8_staticRenderFns,
  false,
  null,
  null,
  "76c765dc"
  
)

/* harmony default export */ var layout_error = (layout_error_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error/not-found-error.vue?vue&type=template&id=58b7c030&
var not_found_errorvue_type_template_id_58b7c030_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-jumbotron',{attrs:{"bg-variant":"info","text-variant":"white","border-variant":"dark"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_vm._v("BootstrapVue")]},proxy:true},{key:"lead",fn:function(){return [_vm._v("\n      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\n      featured content or information.\n    ")]},proxy:true}])},[_vm._v(" "),_vm._v(" "),_c('hr',{staticClass:"my-4"}),_vm._v(" "),_c('p',[_vm._v("\n      It uses utility classes for typography and spacing to space content out within the larger\n      container.\n    ")])])],1)}
var not_found_errorvue_type_template_id_58b7c030_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error/not-found-error.vue?vue&type=template&id=58b7c030&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error/not-found-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var not_found_errorvue_type_script_lang_js_ = ({
  data() {
    return {
      error: 'Page'
    };
  },

  layout: 'error/layout-error',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./layouts/error/not-found-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var error_not_found_errorvue_type_script_lang_js_ = (not_found_errorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/error/not-found-error.vue





/* normalize component */

var not_found_error_component = Object(componentNormalizer["a" /* default */])(
  error_not_found_errorvue_type_script_lang_js_,
  not_found_errorvue_type_template_id_58b7c030_render,
  not_found_errorvue_type_template_id_58b7c030_staticRenderFns,
  false,
  null,
  null,
  "15276ec8"
  
)

/* harmony default export */ var not_found_error = (not_found_error_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/front/layoutview.vue?vue&type=template&id=14b5643c&
var layoutviewvue_type_template_id_14b5643c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-navbar',{attrs:{"toggleable":"lg","type":"primary","variant":"info"}},[_c('b-navbar-brand',{staticClass:"text-white",attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(13),"width":"200"}})]),_vm._v(" "),_c('nuxt-link',{staticClass:"text-white",attrs:{"to":"/"}},[_vm._v("Home")]),_vm._v("???\r\n  ")],1),_vm._ssrNode(" "),_c('nuxt'),_vm._ssrNode(" <br><br><br><br>")],2)}
var layoutviewvue_type_template_id_14b5643c_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/front/layoutview.vue?vue&type=template&id=14b5643c&

// EXTERNAL MODULE: external "vue-sanitize"
var external_vue_sanitize_ = __webpack_require__(18);
var external_vue_sanitize_default = /*#__PURE__*/__webpack_require__.n(external_vue_sanitize_);

// EXTERNAL MODULE: external "vue-content-placeholders"
var external_vue_content_placeholders_ = __webpack_require__(19);
var external_vue_content_placeholders_default = /*#__PURE__*/__webpack_require__.n(external_vue_content_placeholders_);

// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/front/layoutview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//






external_vue_default.a.use(external_vue_sanitize_default.a); // Make BootstrapVue available throughout your project

external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"]); // Optionally install the BootstrapVue icon components plugin

external_vue_default.a.use(external_bootstrap_vue_["IconsPlugin"]);
external_vue_default.a.use(external_vue_content_placeholders_default.a);
/* harmony default export */ var layoutviewvue_type_script_lang_js_ = ({
  loading: {
    color: 'blue',
    height: '5px'
  },

  data() {
    return {
      isOpen: false
    };
  },

  head() {
    return {
      link: [{
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&display=swap"
      }, {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100&family=Roboto:wght@400&display=swap"
      }]
    };
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }

  }
});
// CONCATENATED MODULE: ./layouts/front/layoutview.vue?vue&type=script&lang=js&
 /* harmony default export */ var front_layoutviewvue_type_script_lang_js_ = (layoutviewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/front/layoutview.vue



function layoutview_injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var layoutview_component = Object(componentNormalizer["a" /* default */])(
  front_layoutviewvue_type_script_lang_js_,
  layoutviewvue_type_template_id_14b5643c_render,
  layoutviewvue_type_template_id_14b5643c_staticRenderFns,
  false,
  layoutview_injectStyles,
  null,
  "703b8185"
  
)

/* harmony default export */ var layoutview = (layoutview_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/layout-error.vue?vue&type=template&id=02d1e4d0&
var layout_errorvue_type_template_id_02d1e4d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-navbar',{attrs:{"toggleable":"lg","type":"primary","variant":"info"}},[_c('b-navbar-brand',{staticClass:"text-white",attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(13),"width":"200"}})]),_vm._v(" "),_c('nuxt-link',{staticClass:"text-white",attrs:{"to":"/"}},[_vm._v("Home")]),_vm._v("???\n  ")],1),_vm._ssrNode(" <br><br> "),_c('nuxt')],2)}
var layout_errorvue_type_template_id_02d1e4d0_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/layout-error.vue?vue&type=template&id=02d1e4d0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/layout-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_layouts_layout_errorvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/layout-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_layout_errorvue_type_script_lang_js_ = (lib_vue_loader_options_layouts_layout_errorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/layout-error.vue





/* normalize component */

var layouts_layout_error_component = Object(componentNormalizer["a" /* default */])(
  layouts_layout_errorvue_type_script_lang_js_,
  layout_errorvue_type_template_id_02d1e4d0_render,
  layout_errorvue_type_template_id_02d1e4d0_staticRenderFns,
  false,
  null,
  null,
  "a2695a70"
  
)

/* harmony default export */ var layouts_layout_error = (layouts_layout_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js












const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_error/layout-error": sanitizeComponent(layout_error),
  "_error/not-found-error": sanitizeComponent(not_found_error),
  "_front/layoutview": sanitizeComponent(layoutview),
  "_layout-error": sanitizeComponent(layouts_layout_error)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/utils.js
// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  Logo: () => __webpack_require__.e(/* import() | components/logo */ 1).then(__webpack_require__.bind(null, 77)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(15);

// EXTERNAL MODULE: external "property-information"
var external_property_information_ = __webpack_require__(10);
var external_property_information_default = /*#__PURE__*/__webpack_require__.n(external_property_information_);

// CONCATENATED MODULE: ./.nuxt/content/nuxt-content.js

const rootKeys = ['class-name', 'class', 'style'];
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ['select', 'textarea', 'input'];

function evalInContext(code, context) {
  return new Function("with(this) { return (" + code + ") }").call(context);
}

function propsToData(node, doc) {
  const {
    tag,
    props
  } = node;
  return Object.keys(props).reduce(function (data, key) {
    const k = key.replace(/.*:/, '');
    let obj = rootKeys.includes(k) ? data : data.attrs;
    const value = props[key];
    const {
      attribute
    } = external_property_information_default.a.find(external_property_information_default.a.html, key);
    const native = nativeInputs.includes(tag);

    if (rxModel.test(key) && value in doc && !native) {
      const mods = key.replace(rxModel, '').split('.').filter(d => d).reduce((d, k) => (d[k] = true, d), {}); // As of yet we don't resolve custom v-model field/event names from components

      const field = 'value';
      const event = mods.lazy ? 'change' : 'input';
      const processor = mods.number ? d => +d : mods.trim ? d => d.trim() : d => d;
      obj[field] = evalInContext(value, doc);
      data.on = data.on || {};

      data.on[event] = e => doc[value] = processor(e);
    } else if (key === 'v-bind') {
      const val = value in doc ? doc[value] : evalInContext(value, doc);
      obj = Object.assign(obj, val);
    } else if (rxOn.test(key)) {
      key = key.replace(rxOn, '');
      data.on = data.on || {};
      data.on[key] = evalInContext(value, doc);
    } else if (rxBind.test(key)) {
      key = key.replace(rxBind, '');
      obj[key] = value in doc ? doc[value] : evalInContext(value, doc);
    } else if (Array.isArray(value)) {
      obj[attribute] = value.join(' ');
    } else {
      obj[attribute] = value;
    }

    return data;
  }, {
    attrs: {}
  });
}
/**
 * Create the scoped slots from `node` template children. Templates for default
 * slots are processed as regular children in `processNode`.
 */


function slotsToData(node, h, doc) {
  const data = {};
  const children = node.children || [];
  children.forEach(child => {
    // Regular children and default templates are processed inside `processNode`.
    if (!isTemplate(child) || isDefaultTemplate(child)) {
      return;
    } // Non-default templates are converted into slots.


    data.scopedSlots = data.scopedSlots || {};
    const template = child;
    const name = getSlotName(template);
    const vDomTree = template.content.map(tmplNode => processNode(tmplNode, h, doc));

    data.scopedSlots[name] = function () {
      return vDomTree;
    };
  });
  return data;
}

function processNode(node, h, doc) {
  /**
   * Return raw value as it is
   */
  if (node.type === 'text') {
    return node.value;
  }

  const slotData = slotsToData(node || {}, h, doc);
  const propData = propsToData(node || {}, doc);
  const data = Object.assign({}, slotData, propData);
  /**
   * Process child nodes, flat-mapping templates pointing to default slots.
   */

  const children = [];

  for (const child of node.children) {
    // Template nodes pointing to non-default slots are processed inside `slotsToData`.
    if (isTemplate(child) && !isDefaultTemplate(child)) {
      continue;
    }

    const processQueue = isDefaultTemplate(child) ? child.content : [child];
    children.push(...processQueue.map(node => processNode(node, h, doc)));
  }

  return h(node.tag, data, children);
}

const DEFAULT_SLOT = 'default';

function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}

function isTemplate(node) {
  return node.tag === 'template';
}

function getSlotName(node) {
  let name = '';

  for (const propName of Object.keys(node.props)) {
    if (!propName.startsWith('#') && !propName.startsWith('v-slot:')) {
      continue;
    }

    name = propName.split(/[:#]/, 2)[1];
    break;
  }

  return name || DEFAULT_SLOT;
}

/* harmony default export */ var nuxt_content = ({
  name: 'NuxtContent',
  functional: true,
  props: {
    document: {
      required: true
    }
  },

  render(h, {
    data,
    props
  }) {
    const {
      document
    } = props;
    const {
      body
    } = document || {};

    if (!body || !body.children || !Array.isArray(body.children)) {
      return;
    }

    let classes = [];

    if (Array.isArray(data.class)) {
      classes = data.class;
    } else if (typeof data.class === 'object') {
      const keys = Object.keys(data.class);
      classes = keys.filter(key => data.class[key]);
    } else {
      classes = [data.class];
    }

    data.class = classes.concat('nuxt-content');
    data.props = Object.assign({ ...body.props
    }, data.props);
    return h('div', data, body.children.map(child => processNode(child, h, document)));
  }

});
// CONCATENATED MODULE: ./.nuxt/content/plugin.server.js


external_vue_default.a.component(nuxt_content.name, nuxt_content);
/* harmony default export */ var plugin_server = ((ctx, inject) => {
  const $content = ctx.ssrContext.$content;
  inject('content', $content);
  ctx.$content = $content;
});
// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(20);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icon.plugin.js
/* harmony default export */ var icon_plugin = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.5f6a36.png",
    "120x120": "/_nuxt/icons/icon_120x120.5f6a36.png",
    "144x144": "/_nuxt/icons/icon_144x144.5f6a36.png",
    "152x152": "/_nuxt/icons/icon_152x152.5f6a36.png",
    "192x192": "/_nuxt/icons/icon_192x192.5f6a36.png",
    "384x384": "/_nuxt/icons/icon_384x384.5f6a36.png",
    "512x512": "/_nuxt/icons/icon_512x512.5f6a36.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.5f6a36.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.5f6a36.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.5f6a36.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.5f6a36.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.5f6a36.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.5f6a36.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.5f6a36.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.5f6a36.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.5f6a36.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.5f6a36.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(21);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupCredentialsInterceptor(axios);
  setupProgress(axios);
  return axios;
};

const setupCredentialsInterceptor = axios => {
  // Send credentials only to relative and API Backend requests
  axios.onRequest(config => {
    if (config.withCredentials === undefined) {
      if (!/^https?:\/\//i.test(config.url) || config.url.indexOf(config.baseURL) === 0) {
        config.withCredentials = true;
      }
    }
  });
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\content\\plugin.client.js (mode: 'client')

 // Source: .\\content\\plugin.server.js (mode: 'server')

 // Source: .\\workbox.js (mode: 'client')

 // Source: .\\pwa\\meta.plugin.js (mode: 'all')

 // Source: .\\pwa\\icon.plugin.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Xiteb Blog",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if ( true && typeof plugin_server === 'function') {
    await plugin_server(app.context, inject);
  }

  if (false) {}

  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  }

  if (typeof icon_plugin === 'function') {
    await icon_plugin(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    router.push(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.string.replace-all.js");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map