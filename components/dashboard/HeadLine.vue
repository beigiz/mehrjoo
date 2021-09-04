<template>
    <div class="head">
        <div class="head__line"></div>
        <h1 class="head__title">{{title}}</h1>
        <div class="head__line"></div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    }
}
</script>