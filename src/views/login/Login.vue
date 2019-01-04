<template>
  <div class="login">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <h1>登录管理平台</h1>
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'Login',
  data () {
    return {
      // 登录表单的数据
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号名称', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this
          api.post('/api/checklogin', {
            username: _this.loginForm.username,
            password: _this.loginForm.password
          })
            .then(res => {
              if (res.data.length) {
                // console.log('接收后端响应登录请求的数据', res.data)
                // 把当前登录用户数据存入state
                _this.$store.commit('loginState', res.data[0])
                _this.$message({
                  message: '登录成功',
                  type: 'success'
                })
                _this.$router.push('/index')
              } else {
                _this.$message.error('登录失败，请检查用户名或密码是否有误')
              }
            })
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
  .login
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    .el-form
      padding: 20px
      width: 400px
      border: 1px solid #ccc
      border-radius: 4px
      h1
        margin-bottom: 20px
        font-size: 24px
        color: #0080ff
        text-align: center
</style>
