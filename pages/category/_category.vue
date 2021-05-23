<template>
  <div class="container-fluid bodyStyle">
    <h1 class="text-center">{{ this.categoryRenderName }}</h1>
    <b-container v-if="loadingProp.loading">
      <b-row>
        <b-col v-for="count in [0, 0, 0, 0, 0, 0]" :key="count" cols="4">
          <content-placeholders>
            <content-placeholders-heading :img="true" />
            <content-placeholders-text :lines="3" />
          </content-placeholders>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-else-if="error.parametersError == 1">
      <b-row>
        <b-col sm="12" md="12" lg="8">
          <b-jumbotron>
            <b-card-header
              header-bg-variant="danger"
              header-text-variant="white"
            >
              <h3><b>Sorry!</b></h3>
              We could not identify your category.
            </b-card-header>
          </b-jumbotron>
        </b-col>
        <b-col sm="12" md="12" lg="4">
          <Sidebar />
        </b-col>
      </b-row>
    </b-container>
    <b-container v-else-if="error.parameterError == 0">
      <b-row>
        <b-col sm="12" md="12" lg="8">
          <b-row fluid="lg">
            <div
              class="col-sm-12 col-md-6 col-lg-4"
              v-for="blog in availableBlogs"
              :key="blog"
            >
              <div class="card">
                <b-img
                  :src="`${defaultUrl}/${blog.file_path}`"
                  fluid-grow
                  alt="Fluid-grow image"
                ></b-img>
                <b-card-text>
                  <p style="padding: 10px">
                    <b>{{ blog.title | substringTitle }}</b>
                  </p>
                  <p class="blog_content" v-html="blog.content"></p>
                  <br />
                </b-card-text>
                <b-button
                  squared
                  variant="success"
                  :to="`/blogs/${blog.title_slug}`"
                  >Rade more</b-button
                >
              </div>
              <br />
            </div>
          </b-row>
          <div>
            <b-button v-show="nextPageAvailable == 1" @click="nextPage"
              >Next</b-button
            >
            <b-button v-show="prevPageAvailable == 1" @click="prevPage"
              >Prev</b-button
            >
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="4">
          <Sidebar />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Sidebar from '../common/sidebar'
import ConfigFile from '../../nuxt.config'
export default {
  components:{
    Sidebar
  },
  layout: 'front/layoutview',
  data() {
    return {
      defaultUrl:ConfigFile.axios.apiBaseURL,
      loadingProp:{
        loading:true
      },
      currentPage: 1,
      error:{
        parameterError:0
      },
      nextPageAvailable: 1,
      prevPageAvailable: 0,
      availableBlogsCount: 0,
      availableBlogs: {},
      allResponceInfo: {},
      paginationLinks: {},
      pages: {
        perPage: '',
        totalBlogs: '',
        loadedBlogs: '',
      },
      responce: {
        BlogInfo: {},
        Category: {},
        Latest: {},
        Archives: {},
      },
      categoryRenderName : '',
      monthNames:[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Auguest",
        "September",
        "Octomber",
        "November",
        "December",
      ]
    }
  },
  async fetch(context) {},
  //On page-load
  created() {
    this.categoryRenderName = this.$route.params.category;
    // console.log(this.categoryRenderName);
    this.fetchBlogs()
  },
  filters: {
    striphtml(string) {
      return string.substring(0, 350)
    },
    substringTitle:function(title){
      let titleText = title;
      if(titleText.length > 40){
        return titleText.charAt(0).toUpperCase()+titleText.substring(1,40)+'...';
      }else{
        return titleText.charAt(0).toUpperCase()+titleText.substring(1);
      }
    }
  },
  methods: {
    fetchBlogs() {
      this.availableBlogs = this.$axios
        .$get(`${ConfigFile.axios.apiBaseURL}/api/category?page=${this.currentPage}`,{params:{categoryName:this.categoryRenderName}})
        .then(
          (res) => (
            (this.responce.BlogInfo = res[0]),
            (this.responce.Category = res[3]),
            (this.responce.Latest = res[2]),
            (this.responce.Archives = res[1]),
            (this.pages.perPage = this.responce.BlogInfo.per_page),
            (this.pages.totalBlogs = this.responce.BlogInfo.total),
            (this.pages.loadedBlogs = this.responce.BlogInfo.to),
            (this.availableBlogs = this.responce.BlogInfo.data),
            (this.paginationLinks = this.responce.BlogInfo.links),
            (this.availableBlogsCount = this.responce.BlogInfo.length),
            (this.loadingProp.loading = false),
            (this.error.parameterError = 0),
            (this.nextPageAvailable = (this.pages.loadedBlogs == 12) ? 1 : 0 )
          )
        ).catch( (res) => {
         if(res.response.status > 399){
            this.loadingProp.loading = false;
            this.error.parameterError = 1;
         }
        }
        )
      // this.displayNextButton();
    },
    nextPage() {
      this.currentPage = this.currentPage + 1
      if (this.currentPage == 1) {
        if(this.pages.loadedBlogs == 12){
            this.nextPageAvailable = 1
        }
        this.prevPageAvailable = 0
      } else {
        this.prevPageAvailable = 1
      }

      this.fetchBlogs()
      this.displayNextButton()
    },
    prevPage() {
      this.currentPage = this.currentPage - 1
      if (this.currentPage == 1) {
        this.prevPageAvailable = 0
        this.nextPageAvailable = 1
      } else {
        this.prevPageAvailable = 1
      }
      this.fetchBlogs()
    },
    displayNextButton() {
      var blogInfo = this.pages
      let totalBlogs = blogInfo.totalBlogs
      let loadedBlogs = blogInfo.loadedBlogs
      let perPageLoad = blogInfo.perPage
      // console.log();
      let pendingBlogs = totalBlogs - loadedBlogs
      if (pendingBlogs <= perPageLoad) {
        this.nextPageAvailable = 0
      }
    },
  },
}
</script>

<style>
.blog_content {
  padding: 10px;
}
body {
  font-family: 'Barlow Semi Condensed', sans-serif;
}
.bodyStyle {
  font-family: 'Barlow Semi Condensed', sans-serif;
  padding: 50px 0px 0px 0px;
}
</style>
