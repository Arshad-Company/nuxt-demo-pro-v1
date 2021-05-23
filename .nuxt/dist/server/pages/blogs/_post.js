exports.ids = [4,8];
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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4c10fcdf", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_post_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bodyStyle,body{\n  font-family:\"Barlow Semi Condensed\",sans-serif\n}\n.bodyStyle{\n  padding:30px 0 0\n}\n.replySection{\n  margin:5px 0 5px 20px\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/_post.vue?vue&type=template&id=0e9a211d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bodyStyle container"},[(_vm.loadingProp.loading)?_vm._ssrNode("<div class=\"container\">","</div>",[_c('b-row',_vm._l(([0,0,0,0,0,0]),function(count){return _c('b-col',{key:count,attrs:{"cols":"12"}},[_c('content-placeholders',[_c('content-placeholders-heading',{attrs:{"img":true}}),_vm._v(" "),_c('content-placeholders-text',{attrs:{"lines":15}})],1)],1)}),1)],1):(_vm.error.parametersError == 1)?_c('b-container',[_c('b-row',[_c('b-col',{attrs:{"sm":"12","md":"12","lg":"8"}},[_c('b-jumbotron',[_c('b-card-header',{attrs:{"header-bg-variant":"danger","header-text-variant":"white"}},[_c('h3',[_c('b',[_vm._v("Sorry!")])]),_vm._v(" We could not identify your Blog.\n          ")])],1)],1),_vm._v(" "),_c('b-col',{attrs:{"sm":"12","md":"12","lg":"4"}},[_c('Sidebar')],1)],1)],1):(_vm.error.parametersError == 0)?_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-sm-12 col-md-12 col-lg-8\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.blogContent.title))+"</h1> <p>Published by <b>Blogger</b></p> <hr> <br><br> <p>"+(_vm._s(_vm.bodyContent))+"</p> "),_c('b-col',[_c('p',[_vm._v("Share : ")]),_vm._v(" "),_c('a',{attrs:{"href":("https://www.facebook.com/sharer.php?u=" + (this.baseUrl) + "/blogs/" + (this.blogContent.title_slug)),"target":"_blank"}},[_c('b-icon-facebook')],1),_vm._v(" \n      "),_c('a',{attrs:{"href":("https://twitter.com/intent/tweet?url=" + (this.baseUrl) + "/blogs/" + (this.blogContent.title_slug)),"target":"_blank"}},[_c('b-icon-twitter')],1),_vm._v(" \n      "),_c('a',{attrs:{"href":("whatsapp://send?text=" + (this.baseUrl) + "/blogs/" + (this.blogContent.title_slug)),"target":"_blank"}},[_c('b-icon-watch')],1),_vm._v(" \n      "),_c('a',{attrs:{"href":("https://www.linkedin.com/shareArticle?url=" + (this.baseUrl) + "/blogs/" + (this.blogContent.title_slug)),"target":"_blank"}},[_c('b-icon-linkedin')],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<br> "),_c('b-row',_vm._l((this.blogContent.approved_comments),function(comment){return _c('b-col',{key:comment,attrs:{"cols":"12"}},[_c('b-card',{attrs:{"border-variant":"success","header":"Comment"}},[_c('b-card-body',[_c('p',[_vm._v("From : "+_vm._s(comment.name))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(comment.comment))])])],1),_vm._v(" "),_vm._l((_vm.comments.reply),function(reply){return _c('div',{key:reply.id,staticClass:"replySection",attrs:{"border-variant":"primary","header-bg-variant":"transparent","header":"Reply"}},[(reply.comment_id==comment.id)?_c('div',[_c('b-card',{staticClass:"replySection",attrs:{"border-variant":"primary","header-bg-variant":"transparent","header":"Reply"}},[_c('p',[_vm._v(_vm._s(reply.reply))])])],1):_vm._e()])})],2)}),1),_vm._ssrNode(" <br> <h4>Comment</h4> <hr> "),_c('b-alert',{directives:[{name:"show",rawName:"v-show",value:(this.comment.postResponse.showMessage == 1),expression:"this.comment.postResponse.showMessage == 1"}],attrs:{"show":"","variant":("" + (this.comment.postResponse.statusVariant)),"dismissible":""}},[_c('b',[_vm._v(_vm._s(this.comment.postResponse.message))])]),_vm._ssrNode(" <br> "),_vm._ssrNode("<form>","</form>",[_c('b-row',[_c('b-col',{attrs:{"cols":"6"}},[_c('label',[_vm._v("Name")]),_vm._v(" "),_c('b-form-input',{staticClass:"form-control",attrs:{"placeholder":"Name :","state":_vm.comment.state.name,"aria-describedby":"input-live-feedback"},on:{"keyup":function($event){return _vm.checkThisFieldEmpty('name')}},model:{value:(_vm.comment.name),callback:function ($$v) {_vm.$set(_vm.comment, "name", $$v)},expression:"comment.name"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-live-feedback"}},[_vm._v(" \n            "+_vm._s(this.comment.state.errorMessage.name)+"\n          ")])],1),_vm._v(" "),_c('b-col',{attrs:{"cols":"6"}},[_c('label',[_vm._v("E-Mail")]),_vm._v(" "),_c('b-form-input',{staticClass:"form-control",attrs:{"state":_vm.comment.state.email,"aria-describedby":"input-live-feedback-email","placeholder":"E-Mail :"},on:{"keyup":function($event){return _vm.checkThisFieldEmpty('email')}},model:{value:(_vm.comment.email),callback:function ($$v) {_vm.$set(_vm.comment, "email", $$v)},expression:"comment.email"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-live-feedback-email"}},[_vm._v("\n            "+_vm._s(this.comment.state.errorMessage.email)+"\n          ")])],1),_vm._v(" "),_c('b-col',{attrs:{"cols":"12"}},[_c('br'),_vm._v(" "),_c('label',[_vm._v("Comment")]),_vm._v(" "),_c('b-form-textarea',{staticClass:"form-control",attrs:{"rows":"5","state":_vm.comment.state.comment,"aria-describedby":"input-live-feedback-comment","placeholder":"Comment"},on:{"keyup":function($event){return _vm.checkThisFieldEmpty('comment')}},model:{value:(_vm.comment.comment),callback:function ($$v) {_vm.$set(_vm.comment, "comment", $$v)},expression:"comment.comment"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"input-live-feedback-comment"}},[_vm._v("\n            "+_vm._s(this.comment.state.errorMessage.comment)+"  \n          ")])],1),_vm._v(" "),_c('b-col',{attrs:{"cols":"12"}},[_c('br'),_vm._v(" "),_c('b-button',{attrs:{"variant":"success"},on:{"click":function($event){return _vm.sendComment()}}},[_vm._v("Send your comment")])],1)],1)],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-sm-12 col-md-12 col-lg-4\">","</div>",[_c('Sidebar')],1)],2):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blogs/_post.vue?vue&type=template&id=0e9a211d&

// EXTERNAL MODULE: external "core-js/modules/esnext.string.replace-all.js"
var esnext_string_replace_all_js_ = __webpack_require__(39);

// EXTERNAL MODULE: ./nuxt.config.js
var nuxt_config = __webpack_require__(40);

// EXTERNAL MODULE: ./pages/common/sidebar.vue + 4 modules
var sidebar = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/_post.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _postvue_type_script_lang_js_ = ({
  components: {
    Sidebar: sidebar["default"]
  },
  loading: true,
  layout: 'front/layoutview',

  head() {
    let metaHead = this.blogContent;
    return {
      title: `${nuxt_config["a" /* default */].head.title} - ${this.blogContent.title}`,
      meta: [{
        hid: `description`,
        name: 'description',
        content: `${metaHead.blog_description}`
      }, {
        hid: `og:image`,
        name: 'og:image',
        content: `${nuxt_config["a" /* default */].axios.apiBaseURL}/${metaHead.file_path}`
      }, {
        hid: `og:title`,
        name: 'og:title',
        content: `${metaHead.title}`
      }, {
        hid: `og:description`,
        name: 'og:description',
        content: `${metaHead.blog_description}`
      }]
    };
  },

  props: {
    author: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      loadingProp: {
        loading: true
      },
      comment: {
        name: '',
        email: '',
        comment: '',
        postResponse: {
          message: '',
          statusVariant: '',
          showMessage: 0
        },
        state: {
          name: 'asd',
          email: 'asd',
          comment: 'asd',
          errorMessage: {
            name: 'Name is required',
            email: 'Email is required',
            comment: 'Comment too short'
          }
        }
      },
      blogContent: '',
      comments: {
        reply: ''
      },
      error: {
        parametersError: 0
      },
      bodyContent: '',
      postUrlSlug: '',
      siteTitle: '...',
      baseUrl: nuxt_config["a" /* default */].axios.apiBaseURL
    };
  },

  created() {
    this.postUrlSlug = this.$route.params.post;
    this.fetchBlogInfo();
    this.siteTitle = this.blogContent.title;
  },

  mounted() {
    console.log("");
  },

  methods: {
    fetchBlogInfo() {
      this.$axios.$get(`${nuxt_config["a" /* default */].axios.apiBaseURL}/api/blogs/search`, {
        params: {
          title: this.postUrlSlug
        }
      }).then(res => (this.blogContent = res, this.comments.reply = res.replies, this.loadingProp.loading = false, this.error.parametersError = 0, this.setBlogImagePath())).catch(ress => this.loadingProp.loading = false, this.error.parametersError = 1);
    },

    checkThisFieldEmpty: function (field) {
      let getFieldName = field;

      if (getFieldName == "name") {
        this.comment.name.length < 1 ? this.comment.state.name = false : this.comment.state.name = true;
      }

      if (getFieldName == "email") {
        this.comment.email.length < 10 ? this.comment.state.email = false : this.comment.state.email = true;
      }

      if (getFieldName == "comment") {
        this.comment.comment.length < 10 ? this.comment.state.comment = false : this.comment.state.comment = true;
      }
    },
    sendComment: function () {
      if (this.comment.state.comment && this.comment.state.email && this.comment.state.name) {
        this.$axios.$post(`${nuxt_config["a" /* default */].axios.apiBaseURL}/api/blogs/comment/create`, {
          id: this.blogContent.id,
          user_name: this.comment.name,
          user_mail: this.comment.email,
          user_comment: this.comment.comment
        }).then(res => (this.comment.postResponse.message = res.message, this.comment.postResponse.statusVariant = res.varient, this.comment.postResponse.showMessage = 1)).catch(asd => this.displayErrorMessage(asd.response.data.errors));
      } else {
        this.comment.postResponse.showMessage = 0, alert('Please fill error fields');
      }
    },
    displayErrorMessage: function ($errors) {
      this.comment.postResponse.showMessage = 0;
      let errors = $errors;

      if (errors.user_comment != undefined) {
        this.comment.state.comment = false;
        this.comment.state.errorMessage.comment = errors.user_comment[0];
      }

      if (errors.user_name != undefined) {
        this.comment.state.name = false;
        this.comment.state.errorMessage.name = errors.user_name[0];
      }

      if (errors.user_mail != undefined) {
        this.comment.state.email = false;
        this.comment.state.errorMessage.email = errors.user_mail[0];
      }
    },

    setBlogImagePath() {
      console.log("consoles");
      this.bodyContent = this.blogContent.content.replaceAll('/blogcontentfile', 'https://xiteb.net/projects/xiteb-blog-test/public/blogcontentfile');
    }

  }
});
// CONCATENATED MODULE: ./pages/blogs/_post.vue?vue&type=script&lang=js&
 /* harmony default export */ var blogs_postvue_type_script_lang_js_ = (_postvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blogs/_post.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blogs_postvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5156db48"
  
)

/* harmony default export */ var _post = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_post.js.map