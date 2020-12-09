<template>
  <div class="container">
    <a-layout>

      <!-- 头部布局 -->
      <a-affix >
        <a-layout-header style="height:35px;line-height:35px;color:#fff">
          <header-1>

            <template>
              <a-breadcrumb class="breadcrumb">
                <a-breadcrumb-item href="">
                  <a-icon type="home" />
                </a-breadcrumb-item>
                <a-breadcrumb-item href="">
                  <a-icon type="user" />
                  <span>Application List</span>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  Application
                </a-breadcrumb-item>
              </a-breadcrumb>
            </template>

          </header-1>
        </a-layout-header>
      </a-affix>

      <!-- 内容布局 -->
      <a-layout-content>
        <IndexContent>
          
        </IndexContent>
      </a-layout-content>

      <!-- 底部布局 -->
      <a-layout-footer>Footer</a-layout-footer>

    
    </a-layout>
  </div>
</template>

<script>



import header1 from '../components/header/header1.vue'
import IndexContent from '../components/content/layout_content.vue'
export default {
  components: { 
    header1,
    IndexContent },

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
