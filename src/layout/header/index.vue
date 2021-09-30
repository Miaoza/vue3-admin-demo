<template>
  <el-header class="main-header">
    <div class="logo-wrap">
      <img src="@/assets/logo.png" />
    </div>
    <div class="operate-wrap">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar
            size="small"
            icon="el-icon-user-solid"
            :src="user.avatarUrl"
          >
          </el-avatar>
          {{ user.username || '游客'
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="INFO">修改信息</el-dropdown-item>
            <el-dropdown-item command="PASSWORD">修改密码</el-dropdown-item>
            <el-dropdown-item command="LOGOUT" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <Tabs />
  </el-header>
</template>

<script lang="ts" src="./header.ts"></script>

<style lang="scss" scoped>
.main-header {
  border: 1px solid $boder-color;
  box-shadow: 0 1px 24px #ddd;
  background: #fff;
  display: flex;
  align-items: center;
  position: relative;

  .logo-wrap {
    width: 50px;
    height: 50px;
    img {
      width: 50px;
      vertical-align: middle;
    }
  }

  .operate-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .el-dropdown {
      .el-avatar {
        vertical-align: middle;
      }
      .el-dropdown-link {
        cursor: pointer;
      }
    }
  }
}
</style>
