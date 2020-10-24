<template>
  <div>
    <q-btn-dropdown
        split
        :disable-dropdown="!isLoggedIn"
        class="glossy"
        color="primary"
        :label="textDropdown"
        :icon="iconDropdown"
        :to="dropdownLink"
      >
        <q-list>
          <q-item clickable v-close-popup class="bg-primary text-white" @click="logout">
            <q-item-section avatar>
              <q-avatar icon="exit_to_app" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-uppercase">Logout</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
    textDropdown () {
      return this.isLoggedIn ? 'Profile' : 'Login'
    },
    iconDropdown () {
      return this.isLoggedIn ? 'account_circle' : 'login'
    },
    dropdownLink () {
      return this.isLoggedIn ? '/profile' : '/login'
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')
      this.$router.replace('/', () => {})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
