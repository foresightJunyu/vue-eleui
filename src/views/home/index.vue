<template>
  <div>
    <el-container>
<!--      左侧导航-->
      <el-aside width="200px">
        <NavMenu/>
      </el-aside>
<!--      右侧主体-->
      <el-container>
<!--        头部-->
        <el-header>Header
          <el-button type="primary" style="float: right" @click="goBack()">退出</el-button>
        </el-header>
<!--        主体-->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script lang="js">
import NavMenu from './navMenu.vue'

export default {
  data() {
    return {}
  },
  components: {
    NavMenu
  },
  methods: {
    goBack() {
      this.$router.push('/login')
    }
  }
}

</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
