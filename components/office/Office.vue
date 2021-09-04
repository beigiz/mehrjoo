<template>
  <div class="office">
    <div class="office__content">
      <div class="office__content__title">
        {{space.title}}
      </div>
      <div class="office__content__description">
        <div class="office__content__description__info">
          {{space.desc}}
        </div>
        <div class="office__content__description__img">
          <img :src="space.officeImage" alt="" class="office__content__description__img__src">
        </div>
      </div>
    </div>
    <div v-if="hasCollapse" class="office__rooms">
      <a-collapse v-model="activeKey">
        <a-collapse-panel header="اتاق‌ها">
          <div v-for="room in space.rooms" :key="room.id">
              <a-descriptions>
                <a-descriptions-item label="اتاق‌">
                  {{room.name}}
                </a-descriptions-item>
                <a-descriptions-item label="متراژ">
                  {{room.area}}
                </a-descriptions-item>
              </a-descriptions>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    space: {
      type: Object,
    },
    hasCollapse: {
      type: Boolean,
    }
    
  },
}
</script>