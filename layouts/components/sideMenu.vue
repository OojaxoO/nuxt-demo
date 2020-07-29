<template>
    <Menu width="auto" theme="dark" active-name="测试1">
        <Submenu accordion v-for="menu of menus" :name="menu.name" :key="menu.name" :to="menu.path">
            <template slot="title">
                <Icon :type="menu.icon" />
                <span>{{ menu.name }}</span>
            </template>
            <div v-if="menu.children && menu.children.length">
                <MenuItem v-for="item of menu.children" :name="item.name" :key="item.name" :to="item.path">
                    <Icon :type="menu.icon" />
                    {{ item.name }}
                </MenuItem>
            </div>
        </Submenu>
    </Menu>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'sideMenu',
    computed: mapGetters({
        menus: 'menu/get'
    }),
}
</script>

<style scoped lang="less">

.side-menu-wrapper{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .menu-collapsed{
    padding-top: 10px;
    a.drop-menu-a{
      display: inline-block;
      padding: 6px 15px;
      width: 100%;
      text-align: center;
      color: #495060;
      //color: #348EED;
    }
    .ivu-dropdown{
      width: 100%;
      .ivu-dropdown-rel button{
        width: 100%;
      }
    }
    .menu-title{
      margin-left: 6px;
    }
    .ivu-select-dropdown{
      width: 160px;
      margin-left: 4px;
    }
  }
}
</style>