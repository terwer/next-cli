<template>
  <div class="app-view">
    <!-- Router View -->
    <div id="nav" v-if="!error">
        <router-link to="/">Home</router-link>
        <router-view/>
    </div>
    <!-- Error Page -->
    <error-page v-else/>
  </div>
</template>

<script>
import ErrorPage from "./components/ErrorPage.vue";

export default {
  components: {
    ErrorPage
  },
  computed: {
    error() {
      return this.$store.state.errorHandler.error;
    }
  }
};
</script>
