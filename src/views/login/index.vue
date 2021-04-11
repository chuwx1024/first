<template>
  <div class="login">
    <el-card class="login-card">
      <div class="login-title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <el-form  :model="LoginForm" :rules="Loginrules" ref="LoginForm">
        <el-form-item prop="mobile">
          <el-input v-model="LoginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item  prop="code">
          <el-input style="width: 260px" v-model="LoginForm.code" placeholder="请输入验证码"></el-input>
          <el-button style="float: right; width: 120px" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="LoginForm.checked">请认真阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item >
          <el-button style="width: 100%" type="primary" @click='Login("LoginForm")'>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      LoginForm: {
        mobile: '13911111111',
        code: '246810',
        checked: true
      },
      Loginrules: {
        mobile: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入数字', trigger: 'blur' }
        ],
        checked: [{
          validator: function (rule, value, callback) {
            if (value) {
              callback()
            } else {
              callback(new Error('请先确认'))
            }
          }
        }]
      }
    }
  },
  methods: {
    Login () {
      var key = { token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU' }
      this.$refs.LoginForm.validate((formdata) => {
        if (formdata) {
          console.log(this.LoginForm)
          this.$axios({
            url: '/authorizations',
            data: this.LoginForm,
            method: 'post'
          }).then(result => {
            // window.localStorage.setItem('user-token', result.data.data.token)
            window.localStorage.setItem('user-token', JSON.stringify(key.token))
            this.$router.push('/')
          }).catch(() => {
            // 假数据
            window.localStorage.setItem('user-token', JSON.stringify(key.token))
            this.$message({
              message: '不是你的错,接口不让用了',
              type: 'warning'
            })
            this.$router.push('/')
          })
        } else {
          console.log('登录失败')
          return false
        }
      })
    }

  }
}

</script>

<style scoped lang="less">
.login {
  background: url("../../assets/img/login_bg.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
.login-card {
    width: 446px;
    height: 340px;
    // position: absolute;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%);
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // margin: auto;
    .login-title {
      text-align: center;
      height: 50px;
      img {
        width: 160px;
      }
    }
  }
}

</style>
