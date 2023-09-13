<template>
  <div>
    <el-button type="primary" plain @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$router.push('/HomeScaffold')
    }
  }
}
</script>

<style>
</style>
