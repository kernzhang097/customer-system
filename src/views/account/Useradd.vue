<template>
  <el-container direction="vertical">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加用户</span>
      </div>
      <el-form :model="newUser" status-icon :rules="rules" ref="newUser" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="newUser.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="newUser.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input type="text" v-model="newUser.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="newUser.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model="newUser.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('newUser')">提交</el-button>
          <el-button @click="resetForm('newUser')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-container>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'Useradd',
  data () {
    return {
      newUser: {
        username: '',
        password: '',
        name: '',
        age: '',
        email: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号名称', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        age: [
          { type: 'number', message: '年龄必须为数字值' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          let _this = this
          api.post('/api/addUser', {
            username: _this.newUser.username,
            password: _this.newUser.password,
            name: _this.newUser.name,
            age: _this.newUser.age,
            email: _this.newUser.email
          })
            .then(res => {
              console.log(res.data)
            })
            .catch(error => error)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-card
    height: 100%
  .el-form
    width: 70%
    padding: 30px 30px 0 0
    margin: 0 auto
</style>
