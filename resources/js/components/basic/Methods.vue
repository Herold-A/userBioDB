<template>
    <div>
        <h1>welcome form methods.vue</h1>
        <h1 class="counter">counter: {{ like }} </h1>
        <button @click="updateLike(1)">Increase</button>
        <button @click="updateLike(-1)">decrease</button>
        <br><br><br>
        <div v-for="(data, i) in datas" :key="i" v-if="datas.length">
            <h1 class="test">{{ data.dataName }} </h1>
            <p> {{ data.dataType }}</p>
        </div>

<br><br><br>    
        <div>
            <p v-if="show">show this if show is true</p>
            <p v-if="!show">show this if show is false</p>
            <button @click="changeBoolean">change this boolean</button>
        </div>



    </div>



</template>



<script>
export default {    
    data() {
        return {
            like: 0,
            datas: [],
            show: false
        }
    },

    methods: {
        updateLike(num) {
            this.like += num
        },
        changeBoolean() {
            this.show = !this.show
        }
        
    },

    created() {
        this.like = 99

        let testData = [{dataName: 'test data name 1', 'dataType' : 'string1', id: '1'},
                        {dataName: 'test data name 2', 'dataType' : 'string2', id: '2'},
                        {dataName: 'test data name 3', 'dataType' : 'string3', id: '3'},
                        {dataName: 'test data name 4', 'dataType' : 'string4', id: '4'}]

         this.datas = testData            
    }
   
} 
</script>