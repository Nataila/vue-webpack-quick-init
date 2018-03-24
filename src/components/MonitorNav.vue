<template lang="pug">
header.header
  .container
    h1
      <router-link to="/">海神矿机</router-link>
    ul.nav
      li.nav-item
        <router-link to="/">矿机</router-link>
      li.nav-item
        <router-link to="/spare">备件库</router-link>
      li.nav-item
        <router-link to="/record">操作记录</router-link>
</template>
<script>
export default {

}
</script>
<style lang="sass" scoped>
.header {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #eaeefb;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 60px;
  z-index: 100;
  position: relative;
  h1 {
    margin: 0;
    float: left;
    font-size: 24px;
    font-weight: 400;
    a {
      color: #409eff;
      text-decoration: none;
      display: block;
    }
  }
  ul.nav {
    float: left;
    height: 100%;
    line-height: 60px;
    background: transparent;
    padding: 0;
    margin: 0;
    .nav-item {
      margin: 0;
      float: left;
      font-size: 16px;
      list-style: none;
      position: relative;
      a {
        text-decoration: none;
        color: #888;
        display: block;
        padding: 0 22px;
      }
    }
  }
}
</style>
