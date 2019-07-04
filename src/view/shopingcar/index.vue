<template>
<div>
    <ul>
        <!-- <router-link v-for="(item,index) in goods" :key="index"
        :to="'/mine/'+item.goodsId+'/'+item.goodsName"
        > -->
        <router-link v-for="(item,index) in goods" :key="index"
        :to='{name:"mine",params:{id:item.goodsId,name:item.goodsName}}'
        >
        <p>{{item.goodsName}}</p>
        </router-link>
    </ul>
</div>
</template>
<script>
export default {
     data(){
        return {
            goods:[
                {
                    goodsId:1,
                    goodsName:"商品1"
                },
                 {
                    goodsId:2,
                    goodsName:"商品2"
                },
                 {
                    goodsId:3,
                    goodsName:"商品3"
                },
                 {
                    goodsId:4,
                    goodsName:"商品4"
                },
            ]
        }
    },
}
</script>
<style>

</style>

