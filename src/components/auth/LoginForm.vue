<template>
  <div class="q-pa-md">

    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
    >
      <h2 class="text-h2">Login</h2>
      <q-input
        filled
        v-model.trim="email"
        label="Your Email *"
        hint="Example: joe@mail.com"
        lazy-rules
        :rules="[ val => val && isValidEmailAddress(val) || 'Please type a valid email address']"
      />

      <q-input
        filled
        type="password"
        v-model.trim="password"
        label="Your password *"
        lazy-rules
        :rules="[ val => val && val.length > 5 || 'Please type at least 6 characters' ]"
      />

      <div>
        <q-btn label="Login" type="submit" color="primary"/>
        <q-btn label="SignUp Instead?" to="register" color="secondary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

import validateMixin from '@/mixins/validation'

export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async onSubmit () {
      if (await this.login({
        email: this.email,
        password: this.password
      })) {
        this.$router.replace('/')
      }
    }
  },
  mixins: [validateMixin]
}
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 40rem;
}
</style>
