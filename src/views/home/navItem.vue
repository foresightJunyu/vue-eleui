<template>
  <div>

<!--        无子集的目录-->
        <el-menu-item :index="basePath" v-if="!item.child">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>

<!--        有子集的目录-->
        <el-submenu :index="basePath" v-else>
          <template slot="title"><i class="el-icon-s-cooperation"></i>{{ item.name }}</template>
          <navItem v-for="sub in item.child" :key="sub.url" :item="sub" :base-path="sub.url" />
        </el-submenu>
  </div>

</template>

<script lang="js">
export default {
  name: 'navItem',
  data() {
    return {}
  },
  props: ['item', 'basePath'],
  methods: {}
}

</script>

<style scoped>

</style>
