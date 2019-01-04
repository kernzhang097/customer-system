<template>
  <el-aside width="200px" style="background-color: #545c64">
    <h1>用户管理系统</h1>
    <el-menu :default-openeds="['1']" router background-color="#545c64" text-color="#fff">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>账号管理
        </template>
          <el-menu-item index="userlist">账户列表</el-menu-item>
          <el-menu-item index="useradd">添加用户</el-menu-item>
          <el-menu-item index="passedit">密码修改</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>导航二
        </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>导航三
        </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'Slidebar'
}
</script>

<style lang="stylus" scoped>
  .el-container
    height: 100%
    .el-aside
      background-color: #545c64
      h1
        font-size: 20px
        color: #fff
        text-align: center
        padding: 20px 0
        background: #2a2a2a
      .el-menu
        border-right: none
</style>
