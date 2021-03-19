<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg:""
    }
  },
  created(){
    this.$EventBus.$on("aaa",(msg) => {
      console.log(1111);
      this.msg = msg;
    })
  },
  beforeDestroy(){
    console.log("beforeDestroy");
    this.$EventBus.$off("aaa",{});
  }
}
</script>
