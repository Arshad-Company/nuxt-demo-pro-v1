exports.ids = [9,7,8];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Xiteb Blog',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [// https://go.nuxtjs.dev/tailwindcss
  '@nuxtjs/tailwindcss'],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [// https://go.nuxtjs.dev/axios
  '@nuxtjs/axios', // https://go.nuxtjs.dev/pwa
  '@nuxtjs/pwa', // https://go.nuxtjs.dev/content
  '@nuxt/content'],
  //auth handle
  auth: {
    stratagies: {
      local: {
        endponits: {
          login: {
            url: '/login',
            method: 'POST'
          },
          logout: {
            url: '/logout',
            method: 'POST'
          },
          user: {
            url: '/api/user',
            method: 'get',
            propertyName: false
          }
        },
        tokenRequired: false,
        tokenType: false
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    apiBaseURL: 'https://xiteb.net/projects/xiteb-blog-test/public',
    credentials: true
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
});

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/common/sidebar.vue?vue&type=template&id=5f024308&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h3>Latest</h3> "),_c('b-list-group',_vm._l((_vm.responce.Latest),function(latest){return _c('b-list-group-item',{key:latest.id,attrs:{"to":("/blogs/" + (latest.title_slug))}},[_vm._v(_vm._s(latest.title.charAt(0).toUpperCase() + latest.title.substring(1)))])}),1),_vm._ssrNode(" <br> <h3>Archivments</h3> "),_c('b-list-group',_vm._l((_vm.responce.Archives),function(archive){return _c('b-list-group-item',{key:archive.id,attrs:{"to":("/" + (archive.year) + "/" + (archive.month) + "/")}},[_vm._v(_vm._s(_vm.monthNames[archive.month])+" "+_vm._s(archive.year))])}),1),_vm._ssrNode(" <br> <h3>Category</h3> "),_c('b-list-group',_vm._l((_vm.responce.Category),function(category){return _c('b-list-group-item',{key:category.id,attrs:{"to":("/category/" + (category.name.replaceAll(' ', '-')) + "/")}},[_vm._v(_vm._s(category.name))])}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/common/sidebar.vue?vue&type=template&id=5f024308&

// EXTERNAL MODULE: ./nuxt.config.js
var nuxt_config = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/common/sidebar.vue?vue&type=script&lang=js&
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

/* harmony default export */ var sidebarvue_type_script_lang_js_ = ({
  layout: 'front/layoutview',

  data() {
    return {
      responce: {
        Category: {},
        Latest: {},
        Archives: {}
      },
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "Octomber", "November", "December"]
    };
  },

  async fetch(context) {},

  //On page-load
  created() {
    this.fetchBlogs();
  },

  filters: {
    striphtml(string) {
      return string.substring(0, 350);
    }

  },
  methods: {
    fetchBlogs() {
      this.availableBlogs = this.$axios.$get(`${nuxt_config["a" /* default */].axios.apiBaseURL}/api/blogs?page=${this.currentPage}`).then(res => (this.responce.Category = res[3], this.responce.Latest = res[2], this.responce.Archives = res[1])); // this.displayNextButton();
    }

  }
});
// CONCATENATED MODULE: ./pages/common/sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_sidebarvue_type_script_lang_js_ = (sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/common/sidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "495cb2b3"
  
)

/* harmony default export */ var sidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brand-line.0f34ee5.png";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0e76a98a", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/HB-award.8fe35a3.png";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/HB-award_block1.8fe35a3.png";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slim-nasco.33a00d8.png";

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/people-awards.fc9988f.png";

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecarusal_vue_vue_type_style_index_0_id_d43a15d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecarusal_vue_vue_type_style_index_0_id_d43a15d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecarusal_vue_vue_type_style_index_0_id_d43a15d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecarusal_vue_vue_type_style_index_0_id_d43a15d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecarusal_vue_vue_type_style_index_0_id_d43a15d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".coloue_select[data-v-d43a15d2]{\n  color:#fff\n}\n.slider_image_size_adjust[data-v-d43a15d2]{\n  height:400px\n}\n.carusalSlider[data-v-d43a15d2]{\n  background-image:url(https://xiteb.net/projects/xiteb-blog-test/public/blog/assets/images/NEWBG.jpg);\n  background-repeat:round;\n  background-size:auto\n}\n@media screen and (max-width:574px){\n.coloue_select[data-v-d43a15d2]{\n    color:#ff0\n}\n.slider_image_size_adjust[data-v-d43a15d2]{\n    height:750px\n}\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2250cfda", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/common/homecarusal.vue?vue&type=template&id=d43a15d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-carousel',{staticClass:"carusalSlider",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{"id":"carousel-1","interval":4000,"controls":"","no-hover-pause":false,"indicators":"","img-width":"1024"},on:{"sliding-start":_vm.onSlideStart,"sliding-end":_vm.onSlideEnd},model:{value:(_vm.slide),callback:function ($$v) {_vm.slide=$$v},expression:"slide"}},[_c('b-carousel-slide',{staticClass:"slider_image_size_adjust",attrs:{"img-src":""}},[_c('b-row',[_c('b-col',{attrs:{"sm":"6","md":"4","lg":"6"}},[_c('img',{staticStyle:{"height":"300px"},attrs:{"src":__webpack_require__(44),"alt":"First slide"}}),_vm._v(" "),_c('div',{staticClass:"carousel-caption d-none d-md-block"})]),_vm._v(" "),_c('b-col',{staticStyle:{"margin":"auto","margin-left":"-8%"},attrs:{"sm":"6","md":"8","lg":"6"}},[_c('h3',{staticClass:"text-left coloue_select"},[_vm._v("SLT ZERO ONE AWARDS 2017")]),_vm._v(" "),_c('p',{staticStyle:{"background":"#00000045","border-radius":"10px","color":"white","padding":"0px 10px","text-align":"left"}},[_vm._v(" Xiteb Pvt Ltd was recently awarded the 'Best Website/Microsite' Award in the Information Technology Sector at the prestigious 'SLT Zero One Awards 2017' The W3C web standards, state of the art advanced web designing techniques & unique/genuine coding used by Xiteb have been evaluated by an eminent judging panel comprised of local and international experts while emphasizing the distinctiveness of the one of a kind effects used along with \"Brand Cylinder\" and \"Moving Map\" concepts. ")])])],1)],1),_vm._v(" "),_c('b-carousel-slide',{staticClass:"slider_image_size_adjust",attrs:{"img-height":"","img-src":""}},[_c('b-row',[_c('b-col',{attrs:{"sm":"6","md":"4","lg":"6"}},[_c('img',{staticStyle:{"height":"300px"},attrs:{"src":__webpack_require__(45),"alt":"First slide"}}),_vm._v(" "),_c('div',{staticClass:"carousel-caption d-none d-md-block"})]),_vm._v(" "),_c('b-col',{staticStyle:{"margin":"auto","margin-left":"-8%"},attrs:{"sm":"6","md":"8","lg":"6"}},[_c('h3',{staticClass:"text-left coloue_select"},[_vm._v("SLT ZERO ONE AWARDS 2018")]),_vm._v(" "),_c('a',{staticStyle:{"color":"white"},attrs:{"href":"http://hodabass.lk/"}},[_c('p',{staticStyle:{"background":"#00000045","border-radius":"10px","color":"white","padding":"5px 15px","text-align":"left"}},[_vm._v("www.hodabass.lk was awarded Gold for the ‘Best Community Empowerment Programme’ in Professional Services sector at SLT ZERO ONE Awards for Digital Excellence 2018.\n                      Solution by Xiteb (Pvt) Ltd.")])])])],1)],1),_vm._v(" "),_c('b-carousel-slide',{staticClass:"slider_image_size_adjust",attrs:{"img-height":"","img-src":""}},[_c('b-row',[_c('b-col',{attrs:{"sm":"6","md":"4","lg":"6"}},[_c('img',{staticStyle:{"height":"300px"},attrs:{"src":__webpack_require__(46),"alt":"First slide"}}),_vm._v(" "),_c('div',{staticClass:"carousel-caption d-none d-md-block"})]),_vm._v(" "),_c('b-col',{staticStyle:{"margin":"auto","margin-left":"-8%"},attrs:{"sm":"6","md":"8","lg":"6"}},[_c('h3',{staticClass:"text-left coloue_select"},[_vm._v("SLIM NASCO 2012")]),_vm._v(" "),_c('p',{staticStyle:{"background":"#00000045","border-radius":"10px","color":"white","padding":"0px 10px","text-align":"left"}},[_vm._v("Xitebl was the official Web & Digital Media Partner for SLIM NASCO (National Sales Congress) 2012 which is the only national level awards to recognize the achievements of the sales professionals in Sri Lanka. SLIM NASCO managed to have many young marketers to the event via online promotions during this time was a remarkable achievement.")])])],1)],1),_vm._v(" "),_c('b-carousel-slide',{staticClass:"slider_image_size_adjust",attrs:{"img-height":"","img-src":""}},[_c('b-row',[_c('b-col',{attrs:{"sm":"6","md":"4","lg":"6"}},[_c('img',{staticStyle:{"height":"300px"},attrs:{"src":__webpack_require__(42),"alt":"First slide"}}),_vm._v(" "),_c('div',{staticClass:"carousel-caption d-none d-md-block"})]),_vm._v(" "),_c('b-col',{staticStyle:{"margin":"auto","margin-left":"-8%"},attrs:{"sm":"6","md":"8","lg":"6"}},[_c('h3',{staticClass:"text-left coloue_select"},[_vm._v("SLIM BRAND EXCELLENCE 2012")]),_vm._v(" "),_c('p',{staticStyle:{"background":"#00000045","border-radius":"10px","color":"white","padding":"0px 10px","text-align":"left"}},[_vm._v(" Xiteb was the official Web & Digital Media Partner' for SLIM Brand Excellence 2012 which is a celebration of brand excellence at national level and rewards the efforts of Brand Marketers. Team Xiteb® managed to provide a mind-blowing design to match the cowboy theme of the event.")])])],1)],1),_vm._v(" "),_c('b-carousel-slide',{staticClass:"slider_image_size_adjust",attrs:{"img-height":"","img-src":""}},[_c('b-row',[_c('b-col',{attrs:{"sm":"6","md":"4","lg":"6"}},[_c('img',{staticStyle:{"height":"300px"},attrs:{"src":__webpack_require__(42),"alt":"First slide"}}),_vm._v(" "),_c('div',{staticClass:"carousel-caption d-none d-md-block"})]),_vm._v(" "),_c('b-col',{staticStyle:{"margin":"auto","margin-left":"-8%"},attrs:{"sm":"6","md":"8","lg":"6"}},[_c('h3',{staticClass:"text-left coloue_select"},[_vm._v("SLIM BRAND EXCELLENCE 2014")]),_vm._v(" "),_c('p',{staticStyle:{"background":"#00000045","border-radius":"10px","color":"white","padding":"0px 10px","text-align":"left"}},[_vm._v(" Xiteb was the official Web & Digital Media Partner for SLIM Brand Excellence 2014 which is a celebration of brand excellence at national level and rewards the efforts of Brand Marketers. Team Xiteb managed to provide a mind-blowing design to match theme of the event. ")])])],1)],1),_vm._v(" "),_c('b-carousel-slide',{staticClass:"slider_image_size_adjust",attrs:{"img-height":"","img-src":""}},[_c('b-row',[_c('b-col',{attrs:{"sm":"6","md":"4","lg":"6"}},[_c('img',{staticStyle:{"height":"300px"},attrs:{"src":__webpack_require__(47),"alt":"First slide"}}),_vm._v(" "),_c('div',{staticClass:"carousel-caption d-none d-md-block"})]),_vm._v(" "),_c('b-col',{staticStyle:{"margin":"auto","margin-left":"-8%"},attrs:{"sm":"6","md":"8","lg":"6"}},[_c('h3',{staticClass:"text-left coloue_select"},[_vm._v("PEOPLE'S AWARDS 2012")]),_vm._v(" "),_c('p',{staticStyle:{"background":"#00000045","border-radius":"10px","color":"white","padding":"0px 10px","text-align":"left"}},[_vm._v("Xiteb was the official Web & Digital Media Partner' for SLIM Nielson People's Awards 2012. The SLIM - Nielsen People's Award is an initiative of the Sri Lanka Institute of Marketing and the Nielsen Company Lanka ( Pvt) Ltd. In 2006.")])])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/common/homecarusal.vue?vue&type=template&id=d43a15d2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/common/homecarusal.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var homecarusalvue_type_script_lang_js_ = ({
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },

    onSlideEnd(slide) {
      this.sliding = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/common/homecarusal.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_homecarusalvue_type_script_lang_js_ = (homecarusalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/common/homecarusal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_homecarusalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d43a15d2",
  "f2273b96"
  
)

/* harmony default export */ var homecarusal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_026640e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_026640e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_026640e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_026640e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_026640e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blog_content[data-v-026640e8]{\n  padding:10px;\n  text-align:justify\n}\n.bodyStyle[data-v-026640e8],body[data-v-026640e8]{\n  font-family:\"Barlow Semi Condensed\",sans-serif\n}\n.bodyStyle[data-v-026640e8]{\n  padding:0\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=026640e8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid bodyStyle"},[_c('HomeCarusal'),_vm._ssrNode(" <h1 class=\"text-center\" data-v-026640e8>Home Page</h1> "),(_vm.loadingProp.loading)?_vm._ssrNode("<div class=\"container\" data-v-026640e8>","</div>",[_c('b-row',_vm._l(([0,0,0,0,0,0]),function(count){return _c('b-col',{key:count,attrs:{"cols":"4"}},[_c('content-placeholders',[_c('content-placeholders-heading',{attrs:{"img":true}}),_vm._v(" "),_c('content-placeholders-text',{attrs:{"lines":3}})],1)],1)}),1)],1):_c('b-container',[_c('b-row',[_c('b-col',{attrs:{"sm":"12","md":"12","lg":"8"}},[_c('b-row',{attrs:{"fluid":"lg"}},_vm._l((_vm.availableBlogs),function(blog){return _c('div',{key:blog.id,staticClass:"col-sm-12 col-md-6 col-lg-4"},[_c('div',{staticClass:"card"},[_c('b-img',{attrs:{"src":(_vm.defaultUrl + "/" + (blog.file_path)),"fluid-grow":"","alt":"Fluid-grow image"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('b-card-text',[_c('div',{staticClass:"blog_content text-center"},[_c('nuxt-link',{attrs:{"to":("/category/" + (blog.get_category.name.replaceAll(' ','-')) + "/")}},[_c('b',[_vm._v(_vm._s(blog.get_category.name.charAt(0).toUpperCase() + blog.get_category.name.substring(1)))])])],1),_vm._v(" "),_c('p',{staticStyle:{"padding":"10px"}},[_c('b',[_vm._v(_vm._s(_vm._f("substringTitle")(blog.title)))])]),_vm._v(" "),_c('p',{staticClass:"blog_content",domProps:{"innerHTML":_vm._s(blog.content)}})]),_vm._v(" "),_c('b-button',{attrs:{"to":("/blogs/" + (blog.title_slug)),"squared":"","variant":"success"}},[_vm._v("Read More")])],1),_vm._v(" "),_c('br')])}),0),_vm._v(" "),_c('div',[_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.nextPageAvailable == 1),expression:"nextPageAvailable == 1"}],on:{"click":_vm.nextPage}},[_vm._v("Next")]),_vm._v(" "),_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.prevPageAvailable == 1),expression:"prevPageAvailable == 1"}],on:{"click":_vm.prevPage}},[_vm._v("Prev")])],1)],1),_vm._v(" "),_c('b-col',{attrs:{"sm":"12","md":"12","lg":"4"}},[_c('SideBar')],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=026640e8&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: ./nuxt.config.js
var nuxt_config = __webpack_require__(40);

// EXTERNAL MODULE: ./pages/common/homecarusal.vue + 4 modules
var homecarusal = __webpack_require__(56);

// EXTERNAL MODULE: ./pages/common/sidebar.vue + 4 modules
var sidebar = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    SideBar: sidebar["default"],
    HomeCarusal: homecarusal["default"]
  },
  props: {
    Homecarusalloading: {
      type: Boolean,
      default: true
    }
  },
  layout: 'front/layoutview',

  data() {
    return {
      defaultUrl: nuxt_config["a" /* default */].axios.apiBaseURL,
      loadingProp: {
        loading: true
      },
      currentPage: 1,
      nextPageAvailable: 1,
      prevPageAvailable: 0,
      availableBlogsCount: 0,
      availableBlogs: {},
      allResponceInfo: {},
      paginationLinks: {},
      pages: {
        perPage: '',
        totalBlogs: '',
        loadedBlogs: ''
      },
      responce: {
        BlogInfo: {},
        Category: {},
        Latest: {},
        Archives: {}
      },
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "Octomber", "November", "December"]
    };
  },

  async fetch(context) {},

  //On page-load
  created() {
    this.fetchBlogs();
  },

  filters: {
    striphtml(string) {
      return string.substring(0, 350);
    },

    substringTitle: function (title) {
      let titleText = title;

      if (titleText.length > 40) {
        return titleText.charAt(0).toUpperCase() + titleText.substring(1, 40) + '...';
      } else {
        return titleText.charAt(0).toUpperCase() + titleText.substring(1);
      }
    }
  },
  methods: {
    fetchBlogs() {
      this.availableBlogs = this.$axios.$get(`${nuxt_config["a" /* default */].axios.apiBaseURL}/api/blogs?page=${this.currentPage}`).then(res => (this.responce.BlogInfo = res[0], this.responce.Category = res[3], this.responce.Latest = res[2], this.responce.Archives = res[1], this.pages.perPage = this.responce.BlogInfo.per_page, this.pages.totalBlogs = this.responce.BlogInfo.total, this.pages.loadedBlogs = this.responce.BlogInfo.to, this.availableBlogs = this.responce.BlogInfo.data, this.paginationLinks = this.responce.BlogInfo.links, this.availableBlogsCount = this.responce.BlogInfo.length, this.loadingProp.loading = false)); // this.displayNextButton();
    },

    nextPage() {
      this.currentPage = this.currentPage + 1;

      if (this.currentPage == 1) {
        this.prevPageAvailable = 0;
      } else {
        this.prevPageAvailable = 1;
      }

      this.fetchBlogs();
      this.displayNextButton();
    },

    prevPage() {
      this.currentPage = this.currentPage - 1;

      if (this.currentPage == 1) {
        this.prevPageAvailable = 0;
        this.nextPageAvailable = 1;
      } else {
        this.prevPageAvailable = 1;
      }

      this.fetchBlogs();
    },

    displayNextButton() {
      var blogInfo = this.pages;
      let totalBlogs = blogInfo.totalBlogs;
      let loadedBlogs = blogInfo.loadedBlogs;
      let perPageLoad = blogInfo.perPage; // console.log();

      let pendingBlogs = totalBlogs - loadedBlogs;

      if (pendingBlogs <= perPageLoad) {
        this.nextPageAvailable = 0;
        console.log(`valiue is ${this.pages.loadedBlogs}`);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "026640e8",
  "7e764d8c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map