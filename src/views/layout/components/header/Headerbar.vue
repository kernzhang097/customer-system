<template>
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>{{username}}</span>
  </el-header>
</template>

<script>
export default {
  name: 'Headerbar',
  computed: {
    username () {
      return this.$store.state.userInfo.username
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-header
    background-color: #B3C0D1
    color: #333
    line-height: 60px
</style>
