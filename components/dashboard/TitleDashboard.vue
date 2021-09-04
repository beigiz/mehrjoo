<template>
    <div class="navTitleBtn">
        <p class="navTitleBtn__title" >{{title}}</p>
        <img class="navTitleBtn__icon" :src="path">
    </div>
</template>


<script>
export default {
    props: {
        title: {
            type: String,
        },
        path: {
            type: String,
        },
    },
}
</script>