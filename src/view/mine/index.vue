<template>
    <h1>{{name}}-->{{id}}</h1>
</template>
<script>
export default {
    name:'mine',
    created() {
        console.log(this.$route.params);
        this.id = this.$route.params.id;
        this.name = this.$route.params.name;
    },
    data() {
        return {
            id:'',
            name:''
        }
    },
}
</script>
<style>

</style>

