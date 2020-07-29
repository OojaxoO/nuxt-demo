<template>
  <div class="layout">
    <Layout>
      <Sider style="min-height: 98vh; width: 10vw" hide-trigger>
        <div class="layout-logo">
          <NuxtLink to="/">
            <Row>
              <Col span="4" align="right">
                <img style="height: 4vh; vertical-align: middle;" src="~/assets/logo.png" />
              </Col>
              <Col span="20">
                <div class="layout-logo-font">测试测试测试</div>
              </Col>
            </Row>
            <!-- <img height="30px" width="20px" src="~/assets/learn.png"/> -->
          </NuxtLink>
        </div>
        <sideMenu />
      </Sider>
      <Layout style="min-height: 98vh">
        <Header>
          <Menu class="layout-nav" mode="horizontal" theme="light" active-name="1">
            <Row>
              <Col offset="22" span="2" style="text-align: center">
                <MenuItem v-if="$auth.loggedIn" name="4">
                  <Dropdown>
                    <Avatar style="background-color: #87d068" icon="ios-person" />
                    <DropdownMenu slot="list">
                      <DropdownItem divided>
                        <h5>{{ $auth.user.username }}</h5>
                      </DropdownItem>
                      <DropdownItem divided>
                        <a @click.prevent="logout">退出登录</a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </MenuItem>
              </Col>
            </Row>
          </Menu>
        </Header>
        <Content class="content">
          <nuxt />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import sideMenu from "./components/sideMenu.vue";
import Logo from "~/components/Logo.vue";

export default {
  name: "menu",
  components: { sideMenu, Logo },
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  /* border-radius: 4px; */
  overflow: hidden;
  min-height: 100vh;
}
.layout-logo {
  height: 10vh;
  background-color: #24a4ff;
  border-radius: 3px;
  padding-top: 3vh;
  padding-left: 2vw;
}
.layout-logo-font {
  color: aliceblue;
  font-size: 3vh;
}
.layout-nav {
  height: 10vh;
  width: 87vw;
  text-align: center;
}
.layout-footer-center {
  text-align: center;
}
.layout /deep/ .ivu-layout-header {
  background: #f5f7f9;
  height: 10vh;
  line-height: 10vh;
  padding: 0;
}
.content {
  margin: 2vh 1vw;
  background: #fff;
}
</style>