<template>
  <div class="sm:w-full md:w-4/5 xl:w-3/5 lg:w-3/5 mx-auto mt-4 rounded-sm shadow-sm bg-white py-4 px-2 ">
        <div class="title w-full leading-none h-10 text-3xl">
           
            <nuxt-link :to="'/sort/'+moreSign"> {{title}}</nuxt-link>
        </div>
        <div class="rows w-full p-0">
            <div class="row w-full mx-auto my-2 border-gray-800 border-t border-b border-solid rounded-md p-2 hover:bg-gray-300 hover:border-orange-600" v-for="(item,i) in arrays" :key="item.id" >
                <a :href="item.url">
                    <div class="w-full h-10 text-xl leading-loose border-b border-gray-500 border-dashed flex justify-between">
                        <div class="w-3/4 truncate overflow-ellipsis overflow-hidden ...">
                            {{item.title}}
                        </div>
                    </div>
                </a>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'pageCom',
    props:{
        title:'',
        moreSign:'',
        arrays:[]
    },
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>