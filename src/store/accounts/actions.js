import axios from 'axios'

// import { getExpiresIn } from '@/utils'

const API_URL = process.env.VUE_APP_API_URL

export default {
  async getAccounts (context, payload) {
    try {
      const { data } = await axios.get(`${API_URL}/accounts`, {
        headers: { Authorization: `Bearer ${context.rootGetters['auth/token']}` }
      })
      context.commit('setAccounts', data)
    } catch (error) {
      context.commit('setErrors', error.response.data.error)
    }
  }
}
