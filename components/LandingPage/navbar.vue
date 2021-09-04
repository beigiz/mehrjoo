<template>
  <div>
    <a-icon
      @click="sidebarActive = !sidebarActive"
      class="menu-icon"
      :class="{ 'menu-close': sidebarActive }"
      :type="!sidebarActive ? 'menu' : 'close-circle'"
      :style="{ fontSize: '24px', color: sidebarActive ? 'red' : '#fff' }"
    />
    <a-menu mode="horizontal" class="landing-navbar navbar-desktop">
      <a-menu-item key="home">  <nuxt-link to="/">صفحه نخست</nuxt-link></a-menu-item>
      <a-menu-item key="events">رویداد‌ها</a-menu-item>
      <a-menu-item key="reservation">
        <nuxt-link to="/auth">رزرواسیون</nuxt-link>
      </a-menu-item>
      <a-menu-item key="spacesPage">
        <nuxt-link to="/spaces">معرفی فضاها</nuxt-link>
      </a-menu-item>
      <a-sub-menu popupClassName="submenu-rtl">
        <span slot="title" dir="rtl" class="submenu-title-wrapper"
          >کافه رسانه</span
        >

        <!-- <a-menu-item key="setting:1">گالری</a-menu-item>
        <a-menu-item key="setting:2">اخبار</a-menu-item> -->

        <a-menu-item key="setting:3"
          ><a href="http://shirazsuf.ir/blog">بلاگ</a></a-menu-item
        >
      </a-sub-menu>
      <!-- <a-menu-item key="alipay">
        <a href="https://antdv.com"  rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </a-menu-item>-->
    </a-menu>

    <a-menu
      class="navbar-mobile"
      :class="{ 'navbar-mobile--active': sidebarActive }"
      style="width: 256px"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      :mode="mode"
      :theme="theme"
    >
      <a-menu-item key="1">صفحه نخست</a-menu-item>
      <a-menu-item key="2">رویداد‌ها</a-menu-item>
      <a-menu-item key="6">رزرواسیون</a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title">
          <span>کافه رسانه</span>
        </span>
        <a-menu-item key="3">گالری</a-menu-item>
        <a-menu-item key="4">اخبار</a-menu-item>
        <a-menu-item key="5">بلاگ</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: "inline",
      theme: "light",
      sidebarActive: false,
    };
  },
  mounted() {},
  methods: {
    changeMode(checked) {
      this.mode = checked ? "vertical" : "inline";
    },
    changeTheme(checked) {
      this.theme = checked ? "dark" : "light";
    },
  },
};
</script>
