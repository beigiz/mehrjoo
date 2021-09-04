<template>
  <div>
    <header>
      <h3 class="news__title section-title">اخبار و رویدادها</h3>
    </header>
    <hr class="title-hr" />
    <div class="news">
      <div class="news__card" v-for="art in articles" :key="art.id">
        <news-card‌ :article="art" />
      </div>
    </div>
  </div>
</template>

<script>
import newsCard from "~/components/LandingPage/newsCard.vue";
export default {
  components: {
    "news-card‌": newsCard
  },
  data() {
    return {
      articles: [
      ],
      categories: []
    };
  },
  methods: {
    async getCategories() {
      try {
        this.categories = await this.$blogApi.get("/blog/?rest_route=/wp/v2/categories/");
        this.categories = this.categories.data
        console.log('categories', this.categories);
        this.getPosts();
      } catch (err) {
        console.log("err", err);
      }
    },
    async getPosts() {
      try {
        let articles = await this.$blogApi.get(
          "/blog/?rest_route=/wp/v2/posts/&_embed",
          {
            params: {page: 1, per_page: 3, }
          }
        )
        console.log("news", articles);
        articles.data.forEach(art => {
          let actualCategories = this.categories.find(
            c => c.id == art.categories[0]
          );
          art.category = actualCategories.name;
          art.title = art.title.rendered
          art.img = art._embedded['wp:featuredmedia'][0].source_url
          this.articles.push(art);
        });
        console.log('final articles', this.articles);
        this.$store.commit('setArticles', this.articles)
      } catch (err) {
        console.log("err", err);
      }
    }
  },

  mounted() {
    this.getCategories();
  }
};
</script>

<style scoped>
</style>