<template>
  <div class="container-fluid">
    <h1 class="text-center">Home Page</h1>
    <b-container >
      <b-row>
        <b-col cols="8">
          <b-row fluid="lg">
            <div
              class="col-sm-1 col-md-2 col-lg-4"
              v-for="blog in availableBlogs"
              :key="blog.id"
            >
              <div class="card">
                <b-img
                  :src="`http://127.0.0.1:8000/${blog.file_path}`"
                  fluid-grow
                  alt="Fluid-grow image"
                ></b-img>
                <br>
                <b-card-text class="text-center">
                  <nuxt-link :to="`/category/${blog.get_category.name.replaceAll(' ','-')}/`"><b>{{blog.get_category.name.charAt(0).toUpperCase() + blog.get_category.name.substring(1)}}</b></nuxt-link>
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
        <b-col cols="4">
          <h3>Latest</h3>
          <b-list-group>
            <b-list-group-item :to="`/blogs/${latest.title_slug}`" v-for="latest in responce.Latest" :key='latest.id'>{{latest.title.charAt(0).toUpperCase()+latest.title.substring(1)}}</b-list-group-item>
          </b-list-group>
          <br/>
          <h3>Archivments</h3>
          <b-list-group>
            <b-list-group-item :to="`${archive.year}/${archive.month}/`" v-for="archive in responce.Archives" :key='archive.id'>{{monthNames[archive.month]}} {{archive.year}}</b-list-group-item>
          </b-list-group>
          <br/>
          <h3>Category</h3>
          <b-list-group>
            <b-list-group-item :to="`/category/${category.name.replaceAll(' ','-')}/`" v-for="category in responce.Category" :key='category.id'>{{category.name}}</b-list-group-item>
          </b-list-group>
          <SideBar/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import SideBar from './common/sidebar';
export default {
  components:{
    SideBar
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
  },
  methods: {
    fetchBlogs() {
      this.availableBlogs = this.$axios
        .$get(`http://127.0.0.1:8000/api/blogs?page=${this.currentPage}`)
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
            (this.availableBlogsCount = this.responce.BlogInfo.length)
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

<style>
.blog_content {
  padding: 10px;
}
</style>
