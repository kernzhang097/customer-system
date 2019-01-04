<template>
  <el-container style="border: 1px solid #eee">
    <slidebar></slidebar>
    <el-container direction="vertical">
      <headerbar></headerbar>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
import Slidebar from './components/slidebar/Slidebar'
import Headerbar from './components/header/Headerbar'
export default {
  name: 'Index',
  components: {
    Slidebar,
    Headerbar
  }
}
</script>

<style lang="stylus" scoped>
  .el-container
    height: 100%
</style>
