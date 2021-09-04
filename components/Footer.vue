<template>
  <div class="footer">
    <div class="footer__contact">
      <h3 class="footer__contact__title footer__title">اطلاعات تماس</h3>
      <h3 class="footer__contact__title footer__subtitle">
        آدرس کارخانه نوآوری شیراز :
      </h3>
      <p class="footer__contact__text footer__text">
        شیراز - بلوار مدرس – جنب دانشگاه علمی کاربردی - داخل کارخانجات مخابراتی
        ایران ( ITMC )
      </p>
      <h3 class="footer__contact__title footer__subtitle">شماره تماس :</h3>
      <p class="footer__contact__text footer__text">071-37266696</p>
      <h3 class="footer__contact__title footer__subtitle">ایمیل :</h3>
      <p class="footer__contact__text footer__text">info@shirazsuf.com</p>
      <h3 class="footer__contact__title footer__subtitle">ساعات کاری :</h3>
      <p class="footer__contact__text footer__text">
        شنبه – پنج شنبه 7:30 الی 24
      </p>
      <div class="footer__contact__social">
        <a-icon
          type="instagram"
          @click.native="href('https://www.instagram.com/shirazsuf/')"
        />
        <a-icon type="youtube" @click.native="href('https://www.aparat.com/shirazsuf/')" />
        <a-icon type="linkedin" @click.native="href('https://www.linkedin.com/company/shiraz-startup-factory/')" />
        <a-icon type="twitter" />
      </div>
    </div>
    <div class="footer__events">
      <h3 class="footer__events__title footer__title">آخرین اخبار و رویدادها</h3>
      <a v-for="article in articles" :key="article.id" :href="article.link" target="_blank">
        <div class="footer__events__event">
          <a-icon type="file" />
          <div  v-html="article.title" class="footer__events__event__text">
          {{article.title}}
          </div>
        </div>
      </a>

    </div>
    <!-- <div class="footer__news">
      <h3 class="footer__news__title footer__title">آخرین اخبار</h3>
      <div class="footer__events__event">
        <a-icon type="global" />
        <div class="footer__events__event__text">
          بازدید مدیران شرکت توزیع نیروی برق استان فارس از کارخانه نوآوری شیراز
        </div>
      </div>
      <div class="footer__events__event">
        <a-icon type="global" />
        <div class="footer__events__event__text">
          بازدید استاندار فارس از کارخانه نوآوری شیراز
        </div>
      </div>
      <div class="footer__events__event">
        <a-icon type="global" />
        <div class="footer__events__event__text">
          بازدید معاونت علمی و فناوری ریاست جمهوری از کارخانه نوآوری شیراز
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    href(address) {
      window.location.href = address;
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles 
    },
  },
};
</script>
