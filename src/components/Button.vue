<template>
    <button :style="{background:color}" class="btn" @click="$emit('add-task')">{{title}}</button>
</template>

<script>
    export default {
        name: "Button",
        props:['title','color']
        //     {
        //     title : String,
        //     color : String
        // }
    }
</script>

<style scoped>

</style>