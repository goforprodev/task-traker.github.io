<template>
    <div>
    <div v-for="task in tasks" :key="task.id">
        <Task :task="task" @delete-task = "$emit('delete-task',task.id)" @set-reminder = "$emit('set-reminder',task.id)"/>
    </div>
    </div>
</template>

<script>
    import Task from "@/components/Task";
    export default {
        name: "Tasks",
        components: {Task},
        props:{
            tasks:Array
        }
    }
</script>

<style scoped>

</style>