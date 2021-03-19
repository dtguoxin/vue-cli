<template>
    <div class="box1">
        <ul class="list">
            <li v-for="item in list" :key="item.id" :class="[{active:item == cur}]" @click="cur = item">{{item.title}}</li>
        </ul>

        <div class="container">
            <div class="con" v-if="cur">{{cur.con}}</div>
            <div class="con" v-else>这里是个空的还未选择</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tab-posts',
    data(){
        return {
            list:[
                {id:1,title:"Cat Ipsum",con:"1111111111111111"},
                {id:2,title:"Hipster Ipsum",con:"22222222222222"},
                {id:3,title:"Cupcake Ipsum",con:"3333333333333333"}
            ],
            cur:""
        }
    },
    activated(){
        console.log('+++++');
    },
    deactivated(){
        console.log('00000000')
    }
}
</script>
<style scoped>
.box1{
    width: 500px;
    padding: 20px;
    border:1px solid #ccc;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0 auto;
}
.list{
    list-style: none;
    cursor: pointer;
}
.list,.container{
    width: 200px;
}
li.active{
    background: #ccc;
}
</style>