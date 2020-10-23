import axios from 'axios'
import Dialog, { LocalStorage } from 'quasar'

import { getExpiresIn } from '@/utils'

const API_URL = process.env.VUE_APP_API_URL

export default {
  async login (context, payload) {
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, payload)
      context.dispatch('setToken', { token: data.access_token, expiresIn: getExpiresIn(data.expires_in) })
    } catch (error) {
      context.commit('setErrors', error.response.data.error)
    }
  },
  async register (context, payload) {
    try {
      const { data } = await axios.post(`${API_URL}/auth/register`, payload)
      context.dispatch('setToken', { token: data.access_token, expiresIn: getExpiresIn(data.expires_in) })
    } catch (error) {
      context.commit('setErrors', error.response.data.error)
    }
  },
  async logout (context) {
    try {
      await axios.post(`${API_URL}/auth/logout`, null, {
        headers: { Authorization: `Bearer ${context.getters.token}` }
      })
      LocalStorage.remove('auth')
      context.commit('setState', { token: null, expiresIn: null })
    } catch (error) {
      Dialog.create({
        title: 'Error',
        message: error
      })
    }
  },
  verifyLogin (context) {
    const auth = LocalStorage.getItem('auth')
    if (auth) {
      context.commit('setState', auth)
    }
  },
  setToken (context, payload) {
    LocalStorage.set('auth', payload)
    context.commit('setState', payload)
  },
  clearErrors (context) {
    context.commit('setErrors', null)
  }
}
