<template>
  <div class="login">
    <p>饿了练手</p>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script lang="js">
import axios from '@/api/index'

export default {
  data() {
    return {
      ruleForm: {
        name: 'admin',
        password: 'admin'
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名称', trigger: 'blur'},
          {min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入用户密码', trigger: 'blur'},
          {min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    submitForm(ruleForm) {
      let {name, password} = this.ruleForm
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          axios({
            method: 'post',
            url: 'get_login',
            data: {user: name, password: password}
          }).then(res => {
            console.log(res)
            let {code, msg} = res.data
            if (code === 200) {
              this.$message.success('登录成功')
              this.$router.push('/home') // 页面跳转
            } else {
              alert(msg)
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          alert('error submit!!');
          return false;
        }
      })
    },
  }
}


</script>

<style scoped>

</style>

