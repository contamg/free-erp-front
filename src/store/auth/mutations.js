export default {
  setState (state, payload) {
    state.token = payload.token
    state.expiresIn = payload.expiresIn
  },
  setErrors (state, payload) {
    state.errors = payload
  }
}
