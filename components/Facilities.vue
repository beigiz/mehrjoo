<template>
  <section class="facilities">
    <div class="facilities__wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill-opacity="1"
          d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,106.7C480,107,549,117,617,149.3C685.7,181,754,235,823,234.7C891.4,235,960,181,1029,181.3C1097.1,181,1166,235,1234,229.3C1302.9,224,1371,160,1406,128L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </svg>
    </div>
    <h3 class="facilities__title section-title" id="facilities-title">
      امکانات کارخانه
    </h3>
    <hr class="title-hr" />
    <div class="facilities__body">
      <FacilityCard
        v-for="facility in facilities_part1"
        :key="facility.id"
        :facility="facility"
      >
      </FacilityCard>
    </div>
       <div class="facilities__body">
      <FacilityCard
        v-for="facility in facilities_part2"
        :key="facility.id"
        :facility="facility"
      >
      </FacilityCard>
    </div>
  </section>
</template>

<script>
import FacilityCard from "~/components/FacilityCard.vue";


export default {
  data() {
    return {
      facilities_part1: [
        {
          id: 1,
          title: "کمد اختصاصی",
          icon: "",
          background: ""
        },
        {
          id: 2,
          title: "میزکار اختصاصی",
          icon: "",
          background: ""
        },
        {
          id: 3,
          title: "اتاق بازی",
          icon: "uil-table-tennis",
          background: ""
        },
        {
          id: 4,
          title: "کافه رستوران",
          icon: "uil-coffee",
          background: ""
        },
        {
          id: 5,
          title: "فیلم های آموزشی",
          icon: "uil-play-circle",
          background: ""
        },
        {
          id: 6,
          title: "بانک پروژه",
          icon: "uil-books",
          background: ""
        },
        {
          id: 7,
          title: "کدپستی اختصاصی",
          icon: "uil-mailbox",
          background: ""
        },
       
      ],
      facilities_part2: [
         {
          id: 8,
          title: "خط تلفن اختصاصی",
          icon: "uil-phone",
          background: ""
        },
        
        {
          id: 9,
          title: "اتاق جلسات",
          icon: "",
          background: ""
        },
        {
          id: 15,
          title: "کارگاه های آموزشی",
          icon: "uil-presentation-line",
          background: ""
        },
        {
          id: 11,
          title: "اینترنت وای فای",
          icon: "uil-wifi",
          background: ""
        },
        {
          id: 10,
          title: "دورهمی و رویداد های کارآفرینی",
          icon: "uil-rocket",
          background: ""
        },
        {
          id: 12,
          title: "بهره مندی از مشاوره ",
          icon: "",
          background: ""
        },
        {
          id: 13,
          title: "دسترسی آسان به حمل و نقل عمومی",
          icon: "uil-metro",
          background: ""
        }
      ]
    };
  },
  components: {
    FacilityCard
  }
};
</script>
