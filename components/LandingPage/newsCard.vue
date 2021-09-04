<template>
  <div>
    <a :href="article.link" target="_blank" rel="noopener noreferrer">
    <main class="news-single">
      <div class="news-single__card">
        <div class="module">
          <div class="thumbnail">
            <img
              :src="article.img"
            />
            <div class="date">
              <div>{{article.date | moment('jD')}}</div>
              <div>{{month}}</div>
            </div>
          </div>
          <div class="content">
            <div class="category">{{article.category}}</div>
            <h1 v-html="article.title" class="title">{{article.title}}</h1>
            <!-- <h2 class="sub-title">The city that never sleeps.</h2> -->
            <div v-html="article.description"
              class="description"> {{article.description}} </div>
            <!-- <div class="meta">
                <span class="timestamp">
                  <i class="fa fa-clock-o"></i> 6 mins ago
                </span>
                <span class="comments">
                  <i class="fa fa-comments"></i>
                  <a href="#">39 comments</a>
                </span>
            </div>-->
          </div>
        </div>
      </div>
    </main>
    </a>
  </div>
</template>

<script>
var moment = require('moment-jalaali')
moment.loadPersian({dialect: 'persian-modern'})
export default {
  props: {
    article: {
      type: Object,
      default: () => {
        return {
          date: {}
        }
      }
    },
  },
  computed: {
    month() {
      return moment(this.article.date).format('jMMMM') 
    },
 
  },
};
</script>

<style scoped>
</style>