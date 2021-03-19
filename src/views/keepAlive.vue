<template>
    <div>
        <button v-for="(tab,index) in tabs" :key="index" :class="[{active:tab == curTab}]"
        @click="change(tab)">{{tab}}</button>
        <keep-alive>
            <component :is="currentTabComponent"/>
        </keep-alive>
        
    </div>
</template>
<script>
import tabArchive from "../components/tab-archive"
import tabPosts from "../components/tab-posts"
export default {
    data(){
        return {
            tabs: ["Posts", "Archive"],
            curTab:"Posts"
        }
    },
    components:{
        tabArchive,
        tabPosts
    },
    methods:{
        change(tab){
            this.curTab = tab;
        }
    },
    computed:{
        currentTabComponent(){
            return "tab-"+this.curTab.toLowerCase();
        }
    }
}
</script>
<style scoped>
.box{
    width: 300px;
    padding:20px;
    border: 1px solid #000;
    margin:0 auto;
}
button.active{
    background: #ccc;
}
</style>