import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

export default {
  async getAccounts (context, payload) {
    context.dispatch('shouldUpdate')
    if (!context.getters.shouldUpdate) return

    try {
      const { data } = await axios.get(`${API_URL}/accounts`, {
        headers: { Authorization: `Bearer ${context.rootGetters['auth/token']}` }
      })
      context.commit('setAccounts', data)
      context.commit('setFetchTimestamp')
    } catch (error) {
      context.commit('setErrors', error.response.data.error)
    }
  },
  shouldUpdate (context) {
    if (context.state.lastFetch) {
      const currentTime = new Date().getTime()
      const result = (currentTime - context.state.lastFetch) / 1000 > 60
      context.commit('setShouldUpdate', result)
    }
  }
}
