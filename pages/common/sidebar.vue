<template>
  <div>
    <h3>Latest</h3>
    <b-list-group>
      <b-list-group-item
        :to="`/blogs/${latest.title_slug}`"
        v-for="latest in responce.Latest"
        :key="latest.id"
        >{{
          latest.title.charAt(0).toUpperCase() + latest.title.substring(1)
        }}</b-list-group-item
      >
    </b-list-group>
    <br />
    <h3>Archivments</h3>
    <b-list-group>
      <b-list-group-item
        :to="`/${archive.year}/${archive.month}/`"
        v-for="archive in responce.Archives"
        :key="archive.id"
        >{{ monthNames[archive.month] }} {{ archive.year }}</b-list-group-item
      >
    </b-list-group>
    <br />
    <h3>Category</h3>
    <b-list-group>
      <b-list-group-item
        :to="`/category/${category.name.replaceAll(' ', '-')}/`"
        v-for="category in responce.Category"
        :key="category.id"
        >{{ category.name }}</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
import ConfigFile from '../../nuxt.config'
export default {
  
  layout: 'front/layoutview',
  data() {
    return {
      responce: {
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
        .$get(`${ConfigFile.axios.apiBaseURL}/api/blogs?page=${this.currentPage}`)
        .then(
          (res) => (
            (this.responce.Category = res[3]),
            (this.responce.Latest = res[2]),
            (this.responce.Archives = res[1])
          )
        )
      // this.displayNextButton();
    },
  },
}
</script>

