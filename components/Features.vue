<template>
  <section class="features">
    <div class="features__top" id="feature-top">
      <div class="features__top__left feature rellax" data-rellax-speed="-2">
        <img
          class="feature__image features__top__left__image"
          src="~/assets/images/feature.jpg"
          alt="feature-1"
        />
        <div class="feature__detail features__top__left__detail">
          <h3 class="feature__detail__title">باشگاه دانش‌آموزی</h3>
          <p class="feature__detail__description">
            باشگاه دانش آموزی کارخانه نوآوری شیراز همگام با نگاه ویژه خود به
            دانشگاه نسل سوم که دانشگاهی با نگرش کار آفرینی است سعی بر تقویت زیر
            ساخت های این نظام با نگرش پژوهش و کار آفرینی از دوران دانش آموزی
            دارد
          </p>
        </div>
      </div>
      <div class="features__top__right feature rellax" data-rellax-speed="2">
        <img
          class="feature__image features__top__right__image"
          src="~/assets/images/feature.jpg"
          alt="feature-2"
        />
        <div class="feature__detail features__top__right__detail">
          <h3 class="feature__detail__title">باشگاه سرمایه‌گذاری</h3>
          <p class="feature__detail__description">
            باشگاه سرمایه گذاری کارخانه نوآوری شیراز متشکل از گروهی از افراد و
            سرمایه گذارانی است که سیاستی مبتنی بر سرمایه گذاری بر روی افراد و
            طرح های برگزیده اتخاذ کرده و معمولا گردهمایی این باشگاه ها به صورت
            دوره ای برای تصمیم گیری و سرمایه گذاری برگزار میگردد
          </p>
        </div>
      </div>
    </div>
    <div class="features__bottom">
      <div class="features__bottom__left feature rellax" data-rellax-speed="-2">
        <img
          class="feature__image features__bottom__left__image"
          src="~/assets/images/feature.jpg"
          alt="feature-3"
        />
        <div class="feature__detail features__bottom__left__detail">
          <h3 class="feature__detail__title">مدرسه کسب و کار</h3>
          <p class="feature__detail__description">
            مدرسه کسب و کار کارخانه نوآوری شیراز با هدف کمک به توسعه و ارتقا
            دانش فنی افراد فارغ التحصیل صاحبان کسب و کار مبتنی بر فناوری های
            نوین تاسیس و راه اندازی شده است. که متشکل از مدارس متعدد با آموزشهای
            تخصصی و حرفه ای, جهت ورود به بازار کار ,توسعه و ارتقا مهارت فنی در
            حوزه های مختلف می باشد
          </p>
        </div>
      </div>
      <div class="features__bottom__right feature rellax" data-rellax-speed="2">
        <img
          class="feature__image features__bottom__right__image"
          src="~/assets/images/feature.jpg"
          alt="feature-4"
        />
        <div class="feature__detail features__bottom__right__detail">
          <h3 class="feature__detail__title">نوآوری باز</h3>
          <p class="feature__detail__description">
            کارخانه نوآوری شیراز اعتقاد دارد که ایده‌های داخلی می‌توانند برای
            تولید ارزش از طریق مسیر‌های خارجی و جدا از جریان داخلی کسب‌و‌کار
            شرکت, به بازار عرضه و از طریق شرکت یا خارج از آن تجاری سازی شوند. در
            این راستا کارخانه نوآوری شیراز با داشتن بخشی با عنوان نوآوری باز
            فرصتی ایجاد کرده است تا افراد بتوانند با بهره گیری از آن گامی در جهت
            توسعه کسب و کار خود بردارند.
          </p>
        </div>
      </div>
    </div>
    <div class="features__wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill-opacity="1"
          d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,165.3C672,160,768,192,864,181.3C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import posed from "vue-pose";
import Rellax from "rellax";

export default {
  components: {},
  data() {
    return {
      seen: false
    };
  },
  methods: {
    animation(target, translatex, translatey) {
      this.$anime({
        targets: target,
        translateX: translatex,
        translateY: translatey,
        duration: 200,
        easing: "easeInOutQuad"
      });
    }
  },
  mounted() {
    var rellax = new Rellax(".rellax");
    let featureTopLeftDetail = document.getElementsByClassName(
      "features__top__left__detail"
    )[0];
    let featureTopRighttDetail = document.getElementsByClassName(
      "features__top__right__detail"
    )[0];
    let featureBottomLeftDetail = document.getElementsByClassName(
      "features__bottom__left__detail"
    )[0];
    let featureBottomRighttDetail = document.getElementsByClassName(
      "features__bottom__right__detail"
    )[0];

    let duration = 200;

    featureTopLeftDetail.addEventListener("mouseenter", () => {
      this.$anime({
        targets: featureTopLeftDetail,
        translateX: [0, 20],
        translateY: [0, 20],
        duration,
        opacity: [0.9, 1],
        easing: "easeInOutQuad"
      });
    });
    featureTopLeftDetail.addEventListener("mouseleave", () => {
      this.$anime({
        targets: featureTopLeftDetail,
        translateX: [20, 0],
        translateY: [20, 0],
        duration,
        opacity: [1, 0.9],
        easing: "easeInOutQuad"
      });
    });
    featureTopRighttDetail.addEventListener("mouseenter", () => {
      this.$anime({
        targets: featureTopRighttDetail,
        translateX: [0, -20],
        translateY: [0, 20],
        duration,
        opacity: [0.9, 1],
        easing: "easeInOutQuad"
      });
    });
    featureTopRighttDetail.addEventListener("mouseleave", () => {
      this.$anime({
        targets: featureTopRighttDetail,
        translateX: [-20, 0],
        translateY: [20, 0],
        duration,
        opacity: [1, 0.9],
        easing: "easeInOutQuad"
      });
    });
    featureBottomLeftDetail.addEventListener("mouseenter", () => {
      this.$anime({
        targets: featureBottomLeftDetail,
        translateX: [0, 20],
        translateY: [0, -20],
        duration,
        opacity: [0.9, 1],
        easing: "easeInOutQuad"
      });
    });
    featureBottomLeftDetail.addEventListener("mouseleave", () => {
      this.$anime({
        targets: featureBottomLeftDetail,
        translateX: [20, 0],
        translateY: [-20, 0],
        duration,
        opacity: [1, 0.9],
        easing: "easeInOutQuad"
      });
    });
    featureBottomRighttDetail.addEventListener("mouseenter", () => {
      this.$anime({
        targets: featureBottomRighttDetail,
        translateX: [0, -20],
        translateY: [0, -20],
        duration,
        opacity: [0.9, 1],
        easing: "easeInOutQuad"
      });
    });
    featureBottomRighttDetail.addEventListener("mouseleave", () => {
      this.$anime({
        targets: featureBottomRighttDetail,
        translateX: [-20, 0],
        translateY: [-20, 0],
        duration,
        opacity: [1, 0.9],
        easing: "easeInOutQuad"
      });
    });

    window.addEventListener("scroll", () => {
      if (scrollY > innerHeight * 0.5 && !this.seen) {
        this.seen = false;
      }
    });
  }
};
</script>
