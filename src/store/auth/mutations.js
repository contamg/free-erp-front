export function setState (state, payload) {
  state.token = payload.token
  state.expiresIn = payload.expiresIn
}
