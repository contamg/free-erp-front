<template>
  <div class="q-pa-md">

    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
    >
      <p>Register</p>
      <q-input
        filled
        v-model="email"
        label="Your Email *"
        hint="Example: joe@mail.com"
        lazy-rules
        :rules="[ val => isValidEmailAddress(val) || 'Please type a valid email address']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
        lazy-rules
        :rules="[ val => val.length > 6 || 'Please type at least 6 characters' ]"
      />

      <div>
        <q-btn label="Login" type="submit" color="primary"/>
        <q-btn label="SignUp Instead?" to="register" color="secondary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 40rem;
}
</style>
