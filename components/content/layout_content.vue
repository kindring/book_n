<template>
  <div class="w-full ">
    <page-com v-for="item in comArray" :key="item.sign" :title="item.title" :arrays="item.comArr" :moreSign="item.sign">
      <notData></notData>
    </page-com>
  </div>
</template>

<script>
import pageCom from '../pageCom.vue'
export default {
  components: { pageCom },
  name: 'IndexContent',
  data(){
    return {
      comArray:[
        {
          title:'前端',
          sign: 'web',
          moreUrl: '/page/web',
          comArr: [
                {
                    id: '1',
                    title:'用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值',
                    url:''
                },
                {
                    id: '2',
                    title:'前端进阶之必会的JavaScript技巧总结',
                    url:''
                },
                {
                    id: '3',
                    title:'从0到1实现Web端H.265播放器：视频解码篇',
                    url:''
                },
                {
                    id: '4',
                    title:'Nuxt的路由(普通路由、动态路由、参数校验)和路由动画',
                    url:''
                },
                {
                    id: '5',
                    title:'从0到1实现Web端H.265播放器：视频解码篇',
                    url:''
                },
            ]
        },
        {
          title:'后端',
          sign: 'backend',
          moreUrl: '/page/bg',
          comArr: [
                {
                    id: '1',
                    title:'Java 并发高频面试题：聊聊你对 AQS 的理解？',
                    url:''
                },
                {
                    id: '2',
                    title:'Golang 函数 vs 方法 （译文） | Go主题月',
                    url:''
                },
                {
                    id: '3',
                    title:'3.3 Go语言从入门到精通：包管理工具之Govendor | Go主题月',
                    url:''
                },
                {
                    id: '4',
                    title:'理解 .NET Core中的Channel篇之一——通道入门',
                    url:''
                },
                {
                    id: '5',
                    title:'从0到1实现Web端H.265播放器：视频解码篇',
                    url:''
                },
            ]
        },
        {
          title:'数据库',
          sign: 'database',
          moreUrl: '/page/bg',
          comArr: [
                {
                    id: '1',
                    title:'Java 并发高频面试题：聊聊你对 AQS 的理解？',
                    url:''
                },
                {
                    id: '2',
                    title:'Golang 函数 vs 方法 （译文） | Go主题月',
                    url:''
                },
                {
                    id: '3',
                    title:'3.3 Go语言从入门到精通：包管理工具之Govendor | Go主题月',
                    url:''
                },
                {
                    id: '4',
                    title:'理解 .NET Core中的Channel篇之一——通道入门',
                    url:''
                },
                {
                    id: '5',
                    title:'从0到1实现Web端H.265播放器：视频解码篇',
                    url:''
                },
            ]
        },
        {
          title:'其他',
          sign: 'rests',
          moreUrl: '/page/bg',
          comArr: [
                {
                    id: '1',
                    title:'Java 并发高频面试题：聊聊你对 AQS 的理解？',
                    url:''
                },
                {
                    id: '2',
                    title:'Golang 函数 vs 方法 （译文） | Go主题月',
                    url:''
                },
                {
                    id: '3',
                    title:'3.3 Go语言从入门到精通：包管理工具之Govendor | Go主题月',
                    url:''
                },
                {
                    id: '4',
                    title:'理解 .NET Core中的Channel篇之一——通道入门',
                    url:''
                },
                {
                    id: '5',
                    title:'从0到1实现Web端H.265播放器：视频解码篇',
                    url:''
                },
            ]
        }
      ],
    }
  }
}
</script>

<style>

</style>