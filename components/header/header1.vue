<template>
  <div class="header">
    <slot></slot>
    <a-menu 
      theme="light"
      mode="horizontal" 
      class="a_menu"
    >

      <a-sub-menu :key="key" v-for="(item, key) in menuList">
          <span slot="title">
            <a-icon :type="item.icon" />
            <span>{{item.menuName}}</span>
          </span>

          <template v-for="(subMenuItem, subMenuKey) in item.subMenu">

              <!--子导航栏-->
              <template v-if="subMenuItem.subMenu && subMenuItem.subMenu.length > 0">
                  <SubMenu :subMenuArr="subMenuItem" :key="subMenuKey" :keyVal="subMenuKey"></SubMenu>
              </template>
              <template v-else>
                  <!--导航栏-->
                  <a-menu-item :key="subMenuItem.url">
                    <a :href="subMenuItem.url">{{subMenuItem.menuName}}</a>
                  </a-menu-item>
              </template>

          </template>

      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['mail'],
      menuList:[
        {
          menuName:'首页',
          icon:'home',
          url:'/',
        },
        {
          menuName:'前端',
          icon:'barcode',
          url:'/index',
        },
        {
          menuName:'后端',
          icon:'cloud-server',
          url:'/index',
        },
        {
          menuName:'其他',
          icon:'ellipsis',
          url:'/index',
        },
        {
          menuName:'登录',
          icon:'user',
          url:'/login',
        }
      ]
    };
  },
}
</script>

<style scoped>
  .header{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .header > .a_menu{
    height: 100%;
    line-height: 35px;
  }
  .header > .a_menu > .a_item{
    height: 100%;
  }
</style>