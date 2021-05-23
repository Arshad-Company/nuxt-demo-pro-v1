<template>
  <div class="container-fluid bodyStyle">
    <HomeCarusal></HomeCarusal>
    <h1 class="text-center">Home Page</h1>
    <div class="container" v-if="loadingProp.loading">
      <b-row>
        <b-col v-for="count in [0,0,0,0,0,0]" :key="count" cols="4">
            <content-placeholders >
              <content-placeholders-heading :img="true" />
              <content-placeholders-text :lines="3" />
            </content-placeholders>
        </b-col>
      </b-row>
    </div>
    <b-container v-else>
      <b-row>
        <b-col sm="12" md="12" lg="8">
          <b-row fluid="lg">
            <div
              class="col-sm-12 col-md-6 col-lg-4"
              v-for="blog in availableBlogs"
              :key="blog.id"
            >
              <div class="card">
                <b-img
                  :src="`${defaultUrl}/${blog.file_path}`"
                  fluid-grow
                  alt="Fluid-grow image"
                ></b-img>
                <br>
                <b-card-text >
                  <div class="blog_content text-center">
                  <nuxt-link  :to="`/category/${blog.get_category.name.replaceAll(' ','-')}/`"><b>{{blog.get_category.name.charAt(0).toUpperCase() + blog.get_category.name.substring(1)}}</b></nuxt-link>
                  </div>
                  <p style="padding:10px"><b>{{blog.title | substringTitle }}</b></p>
                  <p class="blog_content" v-html="blog.content"></p>
                </b-card-text>
                <b-button :to="`/blogs/${blog.title_slug}`" squared variant="success">Read More</b-button>
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
          <SideBar/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import ConfigFile from '../nuxt.config'
import HomeCarusal from './common/homecarusal'
import SideBar from './common/sidebar';
export default {
  
  components:{
    SideBar,
    HomeCarusal
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
      defaultUrl:ConfigFile.axios.apiBaseURL,
      loadingProp:{
        loading:true
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
        loadedBlogs: '',
      },
      responce: {
        BlogInfo: {},
        Category: {},
        Latest: {},
        Archives: {},
      },
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
        .$get(`${ConfigFile.axios.apiBaseURL}/api/blogs?page=${this.currentPage}`)
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
            this.loadingProp.loading = false
          )
        )
      // this.displayNextButton();
    },
    nextPage() {
      this.currentPage = this.currentPage + 1
      if (this.currentPage == 1) {
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
        console.log(`valiue is ${this.pages.loadedBlogs}`)
      }
    },
  },
}
</script>

<style scoped>
.blog_content {
  padding: 10px;
  text-align: justify;
}
body{
  font-family: 'Barlow Semi Condensed', sans-serif;
}
.bodyStyle{
  font-family: 'Barlow Semi Condensed', sans-serif;
  padding: 0px 0px 0px 0px;
}
</style>
