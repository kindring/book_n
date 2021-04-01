<template>
  <div class="w-full">
    <a-layout>

      <!-- 头部布局 -->
      <a-affix >
        <a-layout-header style="height:35px;line-height:35px;color:#fff">
          <header-1>
            .

          </header-1>
        </a-layout-header>
      </a-affix>

      <!-- 内容布局 -->
      <a-layout-content>
        <IndexContent>
          
        </IndexContent>
      </a-layout-content>

      <!-- 底部布局 -->
      <a-layout-footer class="p-0">
        <default-footer></default-footer>
      </a-layout-footer>

    
    </a-layout>
  </div>
</template>

<script>



import header1 from '../components/header/header1.vue'
import IndexContent from '../components/content/layout_content.vue'
import DefaultFooter from '../components/footer/defaultFooter.vue'
export default {
  components: { 
    header1,
    IndexContent,
    DefaultFooter, },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.container {
}
.layout-content{

}
.breadcrumb{
  width: auto;
  height: 35px;
  line-height: 35px;
  background-color: #fff;
  padding: 0 15px;
}
</style>
