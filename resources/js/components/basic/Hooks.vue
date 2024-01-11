<template>
    <div>
        <h1 ref="myref" class="text-red-500">welcome to hooks</h1>
        <h2>my name is {{ name }}</h2>
    </div>
</template>


<script>
export default {                 //  <--- this is the local memory of this hooks vue template
    data() {
        return {
                name: 'herold'
        } 
    },
        
    
    // this are the hooks
    beforeCreate() {
        console.log(this.name) // call all initial data but cannot access local memory 
                                // return undefine
    },
    created() {         //  <-- mostly use in fetching server data
        console.log(`all data is available but not html my name value`, this.name, `is available`)
        console.log(this.$refs.myref)  // <--this return undefine cannot access html dom
    },
    mounted() {
        console.log(this.$refs.myref) 
    },

    
    
}
</script>