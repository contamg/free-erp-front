export default {
  token (state) {
    return state.token
  },
  expiresIn (state) {
    return state.token
  },
  errors (state) {
    return state.errors
  },
  isLoggedIn (state) {
    return !!state.token
  }
}
