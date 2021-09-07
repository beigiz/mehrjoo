<template>
  <div>
    <header>
      <h3 class="section-title" id="partners-title">شرکا</h3>
    </header>
    <hr class="title-hr" />
    <a-row>
      <a-col >
    <a-row type="flex" class="partners-container">
      <a-col
        class="partners-container__partner"
        v-for="p in partners"
        :key="p.id"
        :md="{ span: 4, offset: (p.id == 1) ? 2 : 0 }"
        :xs="{ span: 10, offset: (p.id == 6) ? 7 : 2 }"
      >
        <img
          :class="{ 'active-img': p.id == activeId }"
          :src="p.src"
          :alt="p.name"
        />
      </a-col>
    </a-row>
    </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeId: null,
      partners: [
        {
          id: 1,
          name: "کارخانجات مخابراتی ایران",
          // src: require("~/assets/images/partners/mokhaberat.png"),
        },
        {
          id: 2,
          name: "استانداری فارس",
          // src: require("~/assets/images/partners/ostandari.jpg"),
        },
        {
          id: 3,
          name: "معاونت علمی و فناوری ریاست جمهوری",
          // src: require("~/assets/images/partners/riasat.jpg"),
        },
        {
          id: 4,
          name: "گروه سرمایه گذاری عطار",
          // src: require("~/assets/images/partners/logo Attar - ok.png"),
        },
        // {
        //   id: 5,
        //   name: "کارخانه نوآوری شیراز",
        //   src: require("~/assets/images/partners/Karkhane-Noavari-Shiraz-logo-ok02.png")
        // },
        {
          id: 6,
          name: "وزارت ارتباطات و فناوری اطلاعات",
          // src: require("~/assets/images/partners/Fars-2.jpg"),
        },
      ],
    };
  },
  mounted() {
    function getRandomIntInclusive(min, max, prevNum) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let newNum = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      if (prevNum == newNum) getRandomIntInclusive(1, 5, prevNum);
      else return newNum;
    }

    setInterval(() => {
      this.activeId = getRandomIntInclusive(1, 5, this.activeId);
    }, 3000);
  },
};
</script>

<style scoped></style>
