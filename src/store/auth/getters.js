export default {
  token (state) {
    return state.token
  },
  expiresIn (state) {
    return state.expiresIn
  },
  errors (state) {
    return state.errors
  },
  isLoggedIn (state) {
    return !!state.token
  }
}
