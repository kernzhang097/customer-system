<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用户列表</span>
    </div>
    <div class="text item">
      <el-table :data="userlist" stripe style="width: 100%">
        <el-table-column prop="username" label="账号" width="180"></el-table-column>
        <el-table-column prop="realname" label="姓名" width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.row.id)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'Userlist',
  data () {
    return {
      userlist: []
    }
  },
  methods: {
    handleEdit: function (id) {
      console.log('修改' + id)
    },
    handleDel: function (id) {
      api.post('/api/delUser', {id})
        .then(res => {
          this.$message({
            message: '删除成功,请刷新页面',
            type: 'success'
          })
        })
        .catch(error => error)
    },
    getUserlist: function () {
      api.get('/api/getUsers')
        .then(res => {
          this.userlist = res.data
        })
        .catch(error => error)
    }
  },
  created () {
    this.getUserlist()
  }
}
</script>

<style lang="stylus" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before, .clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
