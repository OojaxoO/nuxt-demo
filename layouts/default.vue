<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo">
                        <NuxtLink to="/e">
                            <img height="30px" width="20px" src="~/assets/learn.png"/>
                        </NuxtLink>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            <NuxtLink to="/">
                                Item 1
                            </NuxtLink>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            <NuxtLink to="/a">
                                Item 2
                            </NuxtLink>
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            <NuxtLink to="/b">
                                Item 3
                            </NuxtLink>
                        </MenuItem>
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
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 60px 0', background: '#fff', minHeight: '500px'}">
                <nuxt />
            </Content>
            <Footer class="layout-footer-center">2020-2020 &copy; jax.chen</Footer>
        </Layout>
    </div>
</template>

<script>
    export default {
        methods: {
            logout () {
                this.$auth.logout()
            }
        }    
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        margin: 0 auto;
        /* background: #f5f7f9; */
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .layout /deep/ .ivu-layout-header {
        background: #f5f7f9;
        padding: 0px 60px;
        height: 64px;
        line-height: 64px;
    }
</style>