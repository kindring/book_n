<template functional>
    <a-sub-menu :key="props.subMenuArr.id" :title="props.subMenuArr.menuName">
 
        <template v-for="(subMenuItem, subMenuKey) in props.subMenuArr.subMenu">
 
            <template v-if="subMenuItem.subMenu && subMenuItem.subMenu.length > 0">
                <!--  vue组件自己调用自己  -->
                <sub-Menu :key="keyVal+'_'+subMenuKey" :subMenuArr="subMenuItem" :keyVal="keyVal+'_'+subMenuKey"></sub-Menu>
            </template>
 
            <template v-else>
                <a-menu-item :key="subMenuItem.url">
                    <a :href="subMenuItem.url">{{subMenuItem.menuName}}</a>
                </a-menu-item>
            </template>
 
 
        </template>
    </a-sub-menu>
</template>
 
<script>
    export default {
        name: 'SubMenu',
        components: {},
        props: {
            subMenuArr: {},
            keyVal:''
        }
    }
</script>
 
<style scoped>
 
</style>
