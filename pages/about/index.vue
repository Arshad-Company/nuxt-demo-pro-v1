<template>
  <div>
  <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pageHeading : 'About Us',
      title: "This is about us page"
    }
  },
  layout: 'front/layoutview',
  head: {
    title: 'About Us',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
}
</script>
