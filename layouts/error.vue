<template>
  <div>
    <b-jumbotron class="text-center" bg-variant="danger" style="height:75vh" text-variant="white" border-variant="dark">
    <h1>{{ error.statusCode }}</h1> <br><hr> <h1>{{ error.message }}  <br>  </h1>
    <nuxt-link class="text-white" to="/">Go Home</nuxt-link>&emsp;
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  layout: 'layout-error',
  data() {
    return {
      errorMessage: 'Page',
    }
  },
  meta: [],
  layout: 'layout-error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
