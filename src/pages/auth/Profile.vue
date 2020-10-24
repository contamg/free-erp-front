<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" v-if="user">
      <q-card-section>
        <div class="text-h6">{{ user.name }}</div>
        <div class="text-subtitle2">{{ user.email }}</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import spinnerMixin from '@/mixins/spinner'

export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  computed: {
    ...mapGetters('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['fetchUser']),
    async loadProfile () {
      this.showLoading()
      await this.fetchUser()
      this.hideLoading()
    }
  },
  mounted () {
    this.loadProfile()
  },
  mixins: [spinnerMixin]
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
