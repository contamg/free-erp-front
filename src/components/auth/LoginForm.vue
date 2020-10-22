<template>
  <div class="q-pa-md">

    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model.trim="email"
        label="Your Email *"
        hint="Example: joe@mail.com"
        lazy-rules
        :rules="[ val => isValidEmailAddress(val) || 'Please type a valid email address']"
      />

      <q-input
        filled
        type="password"
        v-model.trim="password"
        label="Your password *"
        lazy-rules
        :rules="[ val => val.length > 5 || 'Please type at least 6 characters' ]"
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

export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    isValidEmailAddress (val) {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(val).toLowerCase())
    },
    async onSubmit () {
      if (await this.login({
        email: this.email,
        password: this.password
      })) {
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 40rem;
}
</style>
