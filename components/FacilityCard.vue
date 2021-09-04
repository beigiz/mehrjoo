<template>
  <div class="facility" :id="'facility-' + facility.id">
    <div class="facility__card">
      <div class="facility__card__icon">
        <img :src="facility.background" alt="" />
        <i class="uil" :class="facility.icon"></i>
      </div>
      <div class="facility__card__title">
        <h2>{{ facility.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import posed from "vue-pose";

export default {
  props: {
    facility: {
      type: Object,
      required: true
    }
  },
  // components: {
  //   FacilityCard: posed.div({
  //     hoverable: true,
  //     init: {
  //       x: 0,
  //       y: 0,
  //       boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  //     },
  //     hover: {
  //       x: 0,
  //       y: -2,
  //       boxShadow: "0px 5px 10px rgba(0,0,0,0.1)"
  //     }
  //   })
  // }
};
</script>
