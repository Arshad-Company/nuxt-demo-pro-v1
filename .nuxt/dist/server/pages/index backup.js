exports.ids = [10,8];
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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0da50bdc", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_backup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_backup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_backup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_backup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_backup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blog_content{\n  padding:10px\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index backup.vue?vue&type=template&id=478a58bc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_vm._ssrNode("<h1 class=\"text-center\">Home Page</h1> "),_c('b-container',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('b-row',{attrs:{"fluid":"lg"}},_vm._l((_vm.availableBlogs),function(blog){return _c('div',{key:blog.id,staticClass:"col-sm-1 col-md-2 col-lg-4"},[_c('div',{staticClass:"card"},[_c('b-img',{attrs:{"src":("http://127.0.0.1:8000/" + (blog.file_path)),"fluid-grow":"","alt":"Fluid-grow image"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('b-card-text',{staticClass:"text-center"},[_c('nuxt-link',{attrs:{"to":("/category/" + (blog.get_category.name.replaceAll(' ','-')) + "/")}},[_c('b',[_vm._v(_vm._s(blog.get_category.name.charAt(0).toUpperCase() + blog.get_category.name.substring(1)))])]),_vm._v(" "),_c('p',{staticClass:"blog_content",domProps:{"innerHTML":_vm._s(blog.content)}})],1),_vm._v(" "),_c('b-button',{attrs:{"to":("/blogs/" + (blog.title_slug)),"squared":"","variant":"success"}},[_vm._v("Read More")])],1),_vm._v(" "),_c('br')])}),0),_vm._v(" "),_c('div',[_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.nextPageAvailable == 1),expression:"nextPageAvailable == 1"}],on:{"click":_vm.nextPage}},[_vm._v("Next")]),_vm._v(" "),_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.prevPageAvailable == 1),expression:"prevPageAvailable == 1"}],on:{"click":_vm.prevPage}},[_vm._v("Prev")])],1)],1),_vm._v(" "),_c('b-col',{attrs:{"cols":"4"}},[_c('h3',[_vm._v("Latest")]),_vm._v(" "),_c('b-list-group',_vm._l((_vm.responce.Latest),function(latest){return _c('b-list-group-item',{key:latest.id,attrs:{"to":("/blogs/" + (latest.title_slug))}},[_vm._v(_vm._s(latest.title.charAt(0).toUpperCase()+latest.title.substring(1)))])}),1),_vm._v(" "),_c('br'),_vm._v(" "),_c('h3',[_vm._v("Archivments")]),_vm._v(" "),_c('b-list-group',_vm._l((_vm.responce.Archives),function(archive){return _c('b-list-group-item',{key:archive.id,attrs:{"to":((archive.year) + "/" + (archive.month) + "/")}},[_vm._v(_vm._s(_vm.monthNames[archive.month])+" "+_vm._s(archive.year))])}),1),_vm._v(" "),_c('br'),_vm._v(" "),_c('h3',[_vm._v("Category")]),_vm._v(" "),_c('b-list-group',_vm._l((_vm.responce.Category),function(category){return _c('b-list-group-item',{key:category.id,attrs:{"to":("/category/" + (category.name.replaceAll(' ','-')) + "/")}},[_vm._v(_vm._s(category.name))])}),1),_vm._v(" "),_c('SideBar')],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index backup.vue?vue&type=template&id=478a58bc&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: ./pages/common/sidebar.vue + 4 modules
var sidebar = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index backup.vue?vue&type=script&lang=js&
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


/* harmony default export */ var index_backupvue_type_script_lang_js_ = ({
  components: {
    SideBar: sidebar["default"]
  },
  layout: 'front/layoutview',

  data() {
    return {
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
    }

  },
  methods: {
    fetchBlogs() {
      this.availableBlogs = this.$axios.$get(`http://127.0.0.1:8000/api/blogs?page=${this.currentPage}`).then(res => (this.responce.BlogInfo = res[0], this.responce.Category = res[3], this.responce.Latest = res[2], this.responce.Archives = res[1], this.pages.perPage = this.responce.BlogInfo.per_page, this.pages.totalBlogs = this.responce.BlogInfo.total, this.pages.loadedBlogs = this.responce.BlogInfo.to, this.availableBlogs = this.responce.BlogInfo.data, this.paginationLinks = this.responce.BlogInfo.links, this.availableBlogsCount = this.responce.BlogInfo.length)); // this.displayNextButton();
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
// CONCATENATED MODULE: ./pages/index backup.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_index_backupvue_type_script_lang_js_ = (index_backupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index backup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_index_backupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4d924e98"
  
)

/* harmony default export */ var index_backup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index backup.js.map