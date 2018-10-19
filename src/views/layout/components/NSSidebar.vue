<template>
  <div class="ns-sidebar">
    <el-menu :default-active="$route.path" :router="true" class="el-menu-ns" background-color="#fff" text-color="#BDBDBD" active-text-color="#01C9C5">
      <router-link v-for="item in linkList" :key="item.to" :to="item.to">
        <el-menu-item :index="item.to">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </router-link>
    </el-menu>
    <div class="current-company">当前版本 : {{currentVersion}}</div>
  </div>
</template>

<script>
export default {
  name: 'NSSidebar',
  data () {
    return {
      currentVersion: '0.0.1',
      linkList: [
        {
          to: '/graph/mx-workflow',
          icon: 'el-icon-menu',
          title: 'mxWorkflow'
        },
        {
          to: '/graph/hello-world',
          icon: 'el-icon-menu',
          title: 'Hello World'
        }
      ]
    }
  },
  created () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.ns-sidebar {
  position: relative;
  height: 100%;
}
.el-menu-ns {
  border-right: none;
  .el-menu-item {
    padding: 0 30px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid rgba(220, 220, 220, 0.5);
    &.is-active {
      z-index: 2;
      box-shadow: 3px 2px 4px 0 rgba(208, 208, 208, 0.5);
      &:after {
        content: '';
        display: block;
        width: 5px;
        height: 100%;
        background-color: #01c9c5;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    &:hover {
      background-color: rgba(1, 201, 197, 0.05) !important;
    }
  }
}
.current-company {
  width: 100%;
  text-align: center;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #bdbdbd;
  letter-spacing: 0;
  line-height: 14px;
  position: absolute;
  left: 0;
  bottom: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

