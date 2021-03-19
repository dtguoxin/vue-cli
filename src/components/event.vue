<template>
    <div>
        <h1>{{msg2}}</h1>

        <button @click="handleEvent">点击这里修改</button>
    </div>
</template>
<script>
export default {
    props:{
        msg2:{
            type:String
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        handleEvent(){
            this.$emit("handleChange","这里是子组件向父组件传递数据");
        }
    }
}
</script>