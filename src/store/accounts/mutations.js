export default {
  setAccounts (state, payload) {
    state.accounts = payload
  },
  setErrors (state, payload) {
    state.errors = payload
  },
  setFetchTimestamp (state) {
    state.lastFetch = new Date().getTime()
  },
  setShouldUpdate (state, payload) {
    state.shouldUpdate = payload
  }
}
