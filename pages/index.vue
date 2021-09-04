<template>
  <div class="index">
    <h1>this is home</h1>
    <footer id="footer" class="index__footer-container">
      <Footer />
    </footer>
  </div>
</template>

<script>
// import comment from "~/components/LandingPage/comment.vue";
import Footer from "~/components/Footer.vue";
// import customNavbar from "~/components/LandingPage/navbar.vue";
import posed from "vue-pose";

export default {
  data: () => ({}),
  mounted() {

  },
  components: {
    Footer,
  }
};
</script>
