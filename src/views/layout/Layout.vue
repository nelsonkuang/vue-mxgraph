<template>
  <el-container class="app-wrapper">
    <el-header height="70px;"><app-header></app-header></el-header>
    <el-container>
      <el-aside width="260px"><sidebar></sidebar></el-aside>
      <el-main><app-main></app-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import { AppHeader, Sidebar, AppMain } from './components'

export default {
  name: 'layout',
  components: {
    AppHeader,
    Sidebar,
    AppMain
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import 'src/styles/mixin.scss';
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: #01c9c5;
  height: 70px;
}
.el-aside {
  background-color: #fff;
}
</style>
