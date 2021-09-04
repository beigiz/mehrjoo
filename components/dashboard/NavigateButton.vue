<template>

    <div :class="navClass" style="cursor: pointer;" @click="emitClick">
        <p class="navBtn__title" >{{title}}</p>
        <img class="navBtn__icon" :src="selectPath">
    </div>
</template>

<script>
export default {
    data() {
        return{
            
        }
    },
    props: {
        title: {
            type: String,
        },
        path: {
            type: String,
        },
        pathSelected: {
            type: String,
        },
        red: {
            type: Boolean,
        },
        selected: {
            type: Boolean,
        },
        default: {
            type: Boolean,
        }

    },
    methods: {
        emitClick: function(){
            this.$emit('clicked');
        },
    },
    computed: {
        navClass(){
            return {
                isRed: this.red,
                isSelected: this.selected,
                navBtn: true
                
            }
        },
        selectPath(){
            if (this.selected){
                return this.pathSelected
            }
            else{
                return this.path
            }
        },
    },
}
</script>