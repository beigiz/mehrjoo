<template>
    <div style="cursor: pointer;" class="homeBtn" v-on:click="goToHome">
        <!-- <p class="homeBtn__title">خانه</p> -->
        <img class="homeBtn__icon" src="~assets/images/home.svg">
    </div>
</template>

<script>
export default {
    methods: {
        goToHome: function(){
            this.$emit('goToHome');
        }
    }
}
</script>