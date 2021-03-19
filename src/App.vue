<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <event :msg2="msg2" @handleChange="change"/>

    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/send">Send</router-link> | 
      <router-link to="/keep-alive">keep-alive</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import event from './components/event.vue'

export default {
  name: 'App',
  data(){
    return {
      msg2:"事件通信方式"
    }
  },
  components: {
    HelloWorld,
    event
  },
  methods:{
    change(data){
      this.msg2 = data;
    }
  },
  mounted(){
    console.log('parent1',this.$parent);
    console.log('child1',this.$children);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
