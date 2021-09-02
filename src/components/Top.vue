<template>
    <header>
        <h1>{{title}}</h1>
        <div v-show="this.homePage">
        <Button :title="showAddTask ? 'Close' : 'Add Task '" :color = "showAddTask ? 'red':'green'" @add-task = "$emit('add-task')"/>
        </div>
    </header>
</template>

<script>
    import Button from "@/components/Button";
    export  default {
        name:'Top',
        props:['title','showAddTask'],
        components : {
            Button
        },
        computed:{
            homePage(){
                if(this.$route.path == '/' ){
                    return true
                }else{
                    return false
                }
            }
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>