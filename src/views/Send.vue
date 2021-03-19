<template>
    <div>
        <h1>这里是想别的页面发送信息</h1>

        <button @click="sendMsg">点击按钮发送</button>
    </div>
</template>
<script>
export default {
    methods:{
        sendMsg(){
            this.$EventBus.$emit("aaa","想你发送一条信息");
        }
    }
}
</script>