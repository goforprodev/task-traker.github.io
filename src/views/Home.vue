<template>
    <div>
        <div v-show="showAddTask">
            <AddTask @add-task = "newAdd" />
        </div>
        <Tasks :tasks = "tasks" @delete-task = "deleteTask" @set-reminder = "setReminder"/>
    </div>
</template>

<script>
    import AddTask from "../components/AddTask";
    import Tasks from "../components/Tasks";

    export default {
        name: "Home",
        components:{
            AddTask,
            Tasks
        },
        props:{
            showAddTask:Boolean
        },
        data(){
            return{
                tasks:[],
            }
        },
        methods: {
            async newAdd(newTask) {
                const res = await fetch('api/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(newTask)
                })
                const data = await res.json()
                this.tasks.push(data)
            },
            async deleteTask(id) {
                if (confirm("Are you sure")) {
                    const res = await fetch(`api/tasks/${id}`, {
                        method: 'DELETE'
                    })
                    res.status === 200 ? (this.tasks = this.tasks.filter(task => task.id !== id))
                        : alert('Error deleting tasks')

                }
            },
            async setReminder(id) {
                const taskToToggle = await this.fetchTask(id)
                const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
                const res = await fetch(`api/tasks/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(updTask)
                })

                const data = await res.json()
                this.tasks = this.tasks.map(task => task.id === id ? {...task, reminder: data.reminder}
                    : task)
            },
            async fetchTasks(){
                    const res = await fetch('api/tasks')

                    const data = await res.json()
                    return data
                },
            async fetchTask(id){
                    const res = await fetch(`api/tasks/${id}`)

                    const data = await res.json()
                    return data
                },
            },

//  lifecycle method created
        async created() {
                this.tasks = await this.fetchTasks()
            }
    }
</script>

<style scoped>

</style>