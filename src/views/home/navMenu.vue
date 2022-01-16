<template>
  <div>
    <el-aside width="200px">
<!--      v-on default-active 后，再加一个 exact 精确的，就能在当前路由页面，刷新后还是当前路由-->
      <el-menu :default-active="$route.path" exact class="el-menu-vertical-demo" router>
        <navItem v-for="v in item" :key="v.url" :item="v" :base-path="v.url" />
      </el-menu>
    </el-aside>

  </div>

</template>

<script lang="js">
import navItem from "@/views/home/navItem";
export default {
  data() {
    return {
      item: [
        {name: '首页', url: '/index'},
        {name: '数据管理', url: '/stats'},
        {name: '信息管理', url: '/wms',
          child: [
            {name: '列表管理', url: '/wms/list'}
          ],
        },
        {name: '用户管理', url: '/user',
          child: [
            {name: '用户统计', url: '/user/stats'},
            {name: '角色统计', url: '/user/role'}
          ],
        }
      ]
    }
  },
  components: {navItem}
}

</script>

<style scoped>

</style>
