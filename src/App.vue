<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  async beforeCreate () {
    await this.$store.dispatch('auth/loadToken')
  }
}
</script>
