import axios from 'axios'
import { Dialog } from 'quasar'

import { getExpiresIn } from 'utils'

const API_URL = process.env.VUE_APP_API_URL

export async function login (context, payload) {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, payload)
    context.commit('setState', { token: data.access_token, expiresIn: getExpiresIn(data.expires_in) })
    return true
  } catch (error) {
    console.error(error)
    Dialog.create({
      title: 'Alert',
      message: error.message
    })
    return false
  }
}
