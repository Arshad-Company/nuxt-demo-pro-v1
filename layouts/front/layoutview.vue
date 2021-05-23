<template>
<div>
  <b-navbar toggleable="lg" type="primary" variant="info">
    <b-navbar-brand class="text-white" to="/" >
      <img src="~/assets/front/images/logo.png" width="200"/>
    </b-navbar-brand>
    <nuxt-link class="text-white" to="/">Home</nuxt-link>&emsp;
  </b-navbar>
<nuxt/>
<br><br><br><br>
</div>
</template>

<script>
import Vue from 'vue'
import VueSanitize from "vue-sanitize";
import VueContentPlaceholders from 'vue-content-placeholders'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueSanitize);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueContentPlaceholders);

export default {
  loading: {
    color: 'blue',
    height: '5px'
  },
  data() {
    return {
      isOpen: false,
    }
  },
  head(){
    return{
      link:[
        {
        rel:"stylesheet",  
        href:"https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&display=swap"
        },
        {
        rel:"stylesheet",  
        href:"https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@100&family=Roboto:wght@400&display=swap"
        }
      ]
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style >
body{
  font-family: 'Barlow Semi Condensed', sans-serif;
}
</style>
