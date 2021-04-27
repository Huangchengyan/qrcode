<template>
  <div class="father">
    <div>
      <span
        style="
          text-align: center;
          font-size: 25px;
          font-weight: 500;
          font-family: Hiragino Sans GB;
          color: green;
          display: flex;
          margin-left: 10px
        ">添加账户</span>
      <span style="font-size: 12px; margin-left:10px; color: rgba(0, 0, 0, 0.4)"
        >请在下方输入您的信息</span>
    </div>
    <el-form
      :rules="rules"
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
      hide-required-asterisk>
      <el-form-item label="设备序列号">
        <el-input
          v-model="formLabelAlign.name">
          </el-input>
      </el-form-item>
            <el-form-item label="账号">
        <el-input
          v-model="formLabelAlign.region"
          placeholder="请输入账号">
          </el-input>
      </el-form-item>
            <el-form-item label="密码">
        <el-input
          v-model="formLabelAlign.region"
          placeholder="请输入密码">
          </el-input>
      </el-form-item>
      <el-form-item label="公司名称">
        <el-input
          v-model="formLabelAlign.region"
          placeholder="请输入公司名称">
          </el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input
          v-model="formLabelAlign.type"
          placeholder="请输入电话">
          </el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input
          v-model="formLabelAlign.type"
          placeholder="请输入姓名">
          </el-input>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      round
      class="children"
      style="background-color: green"
      >确定并激活</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'top',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      rules: {
        name: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  methods: {}
}
</script>
<style>
.el-form-item {
  width: 200;
  margin-bottom: 0px;
}
.icon-user {
  width: 20px;
  height: 20px;
  top: 6px;
  left: 0;
}
.father {
  position: relative;
  background-color:#fff;
}
.children {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 30px;
}
.el-form-item__label {
  font-size: 15px;
  font-weight: 600;
  margin-left:10px;
}
.el-input__inner{
  padding: 0 5px;
}
</style>
