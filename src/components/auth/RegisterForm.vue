<template>
  <div class="q-pa-md">

    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
    >
      <h2 class="text-h2">Register</h2>

      <q-input
        filled
        v-model.trim="name"
        label="Your Name *"
        lazy-rules
        :rules="[ val => val.length || 'Please type your name']"
      />

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
        :rules="[ val => val && val.length > 5 || 'Please type at least 6 characters' ]"
      />

      <q-input
        filled
        type="password"
        v-model.trim="cPassword"
        label="Confirm your password *"
        lazy-rules
        :rules="[
          val => val && val.length > 5 || 'Please type at least 6 characters',
          val => val && val === password || 'The confirmation password doesn\'t match'
        ]"
      />

      <div>
        <q-btn label="Register" type="submit" color="primary"/>
        <q-btn label="Login Instead?" to="login" color="secondary" flat class="q-ml-sm" />
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
      name: null,
      email: null,
      password: null,
      cPassword: null
    }
  },
  methods: {
    ...mapActions('auth', ['register', 'clearErrors']),
    async onSubmit () {
      await this.register({
        name: this.name,
        email: this.email,
        password: this.password,
        'c-password': this.cPassword
      })
      if (this.errors) {
        const message = normalizeErrors(this.errors)

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
