import { QSpinnerFacebook } from 'quasar'

export default {
  methods: {
    showLoading () {
      this.$q.loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: 'yellow',
        spinnerSize: 140,
        backgroundColor: 'blue',
        message: 'Some important process is in progress. Hang on...',
        messageColor: 'black'
      })
    },
    hideLoading () {
      this.$q.loading.hide()
    }
  }
}
