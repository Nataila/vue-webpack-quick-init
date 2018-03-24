<template lang="pug">
.rout
  <monitor-nav></monitor-nav>
  <router-view style="margin-top: 20px"></router-view>
</template>
<script>
import MonitorNav from './components/MonitorNav.vue';
export default {
  data() {
    return {
      name: 'xxxx'
    }
  },
  components: {MonitorNav}
}
</script>
<style scoped lang="sass">
div {
  color: blue;
  font-size: 24px;
}
</style>
