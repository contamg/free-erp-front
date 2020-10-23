<template>
  <div class="q-pa-md">

    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
      novalidate
    >
      <h2 class="text-h2">Login</h2>
      <q-input
        filled
        type="email"
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
import { mapActions, mapGetters } from 'vuex'
import { normalizeErrors } from '@/utils'

import validateMixin from '@/mixins/validation'

export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions('auth', ['login', 'clearErrors']),
    async onSubmit () {
      await this.login({
        email: this.email,
        password: this.password
      })
      if (this.errors) {
        let message = ''
        if (typeof this.errors === 'object') {
          message = normalizeErrors(this.errors)
        } else {
          message = this.errors
        }

        this.$q.dialog({
          title: 'Error',
          message: message,
          html: true
        })

        this.clearErrors()
      } else {
        this.$router.replace('/')
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['errors'])
  },
  mixins: [validateMixin]
}
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 40rem;
}
</style>
