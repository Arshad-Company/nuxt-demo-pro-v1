exports.ids = [8];
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

/***/ })

};;
//# sourceMappingURL=sidebar.js.map