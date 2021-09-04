<template>
  <div class="send-request">
    <h3 class="send-request__title section-title">فرم درخواست</h3>
    <p class="send-request__description">
      شرکت ها و صندوق های سرمایه گذاری وتیم‌های استارتاپی و ... پس از طی کردن
      فرآیند عضویت و استقرار در کارخانه ، مشمول بخشی از مزایای عضویت در کارخانه
      نوآوری شیراز شده و از حمایت‌های مربوطه بهره‌مند خواهند شد.با تکمیل فرم زیر
      درخواست خود را با ما به اشتراک گذارید
    </p>
    <div class="send-request__form">
      <div class="send-request__form__button">
        <a-button
          type="primary"
          shape="circle"
          size="large"
          @click.native="sendRequest"
        >
          <a-icon type="left" size="large" />
        </a-button>
      </div>
      <a-form>
        <a-row :gutter="[12, 12]">
          <a-col :span="12">
          <a-input
            placeholder="نام و نام خانوادگی"
            allow-clear
            size="large"
            v-model="form.full_name"
            required
          />
          </a-col>
          <a-col :span="12">
          <a-input
            type="tel"
            pattern="/^(\+98|0)?9\d{9}$/"
            placeholder="شماره تماس"
            allow-clear
            size="large"
            v-model="form.phone_number"
            required
          />
          </a-col>
          <a-col :span="24">
          <a-textarea
            placeholder="درخواست شما..."
            :auto-size="{ minRows: 4, maxRows: 4 }"
            allow-clear
            size="large"
            v-model="form.text"
            required
          />
          </a-col>
        </a-row>
       
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "send-request",
  data() {
    return {
      form: {
        full_name: "",
        phone_number: "",
        text: ""
      }
    };
  },
  methods: {
    sendRequest() {
      this.$store.dispatch("sendRequest", this.form);
    }
  }
};
</script>
