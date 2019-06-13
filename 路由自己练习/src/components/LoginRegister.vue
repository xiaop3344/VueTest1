<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true" class="loginReginster">登陆/注册</el-button>

    <el-dialog :visible.sync="dialogFormVisible" class="">
      <div id="changeLoginOrRegister">
        <el-tabs type="border-card">
          <el-tab-pane label="注册" >
            <div class="inputform">
              <el-form :model="form">
                <el-form-item label="用户名:" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" clearable class="inputclass"></el-input>
                </el-form-item>
                <el-form-item label="密码:" :label-width="formLabelWidth">
                  <el-input placeholder="请输入密码" v-model="input" show-password class="inputclass"></el-input>
                </el-form-item>
                <el-form-item label="确认密码:" :label-width="formLabelWidth">
                  <el-input placeholder="请再次输入密码" v-model="input" show-password class="inputclass"></el-input>
                </el-form-item>
              </el-form>
              
            </div>
            <div>
                 <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
          </el-tab-pane>
          <el-tab-pane label="登陆">
            <div class="inputform">
              <el-form :model="form">
                <el-form-item label="用户名:" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" clearable class="inputclass"></el-input>
                </el-form-item>
                <el-form-item label="密码:" :label-width="formLabelWidth">
                  <el-input placeholder="请输入密码" v-model="input" show-password class="inputclass"></el-input>
                </el-form-item>
              </el-form>
              
            </div>
            <div>
                 <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form> -->
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div> -->

    </el-dialog>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        input: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>

<style>
  .inputform{
    padding-left: 70px;
  }
  .loginReginster {
    font-size: 18px;
  }

  .el-dialog__header {
    padding: 10px;

  }

  #changeLoginOrRegister {
    padding-bottom: 20px;
    text-align: center;
  }

  .el-tabs__nav-scroll {
    text-align: center;
  }

  .is-top {
    text-align: center;
  }

  .el-tabs__nav {
    float: none;
  }

  .inputclass {
    width: 200px;
    float: left;
  }
  .dialog-footer{
    text-align: center;
  }
</style>