<template>
  <div class="login">
    <el-card class="login-card">
      <div class="login-title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <el-form>
        <el-form-item>
          <el-input v-model="input" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width: 260px" v-model="input" placeholder="请输入验证码"></el-input>
          <el-button style="float: right; width: 120px" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>请认真阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-from-item>
          <el-button style="width: 100%" type="primary">登录</el-button>
        </el-from-item>
      </el-form>
    </el-card>
  </div>
</template>

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
