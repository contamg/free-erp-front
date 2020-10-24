<template>
  <q-page class="flex flex-center">
   <div class="q-pa-md">
      <q-table
        v-if="accounts && accounts.length"
        title="Accounts"
        :data="accounts"
        :columns="columns"
        row-key="id"
        :pagination.sync="pagination"
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import spinnerMixin from '@/mixins/spinner'

export default {
  data () {
    return {
      pagination: {
        rowsPerPage: 15
      },
      columns: [
        { name: 'id', required: true, label: 'Id', align: 'left', field: row => row.id, format: val => `${val}`, sortable: true },
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'account_type', align: 'center', label: 'Account Type', field: row => row.account_type.name, sortable: true },
        { name: 'code', label: 'Code', field: row => row.code, sortable: true },
        { name: 'balance', label: 'Balance', field: row => row.balance / 100, sortable: true },
        { name: 'created_at', label: 'Created', field: row => row.created_at, sortable: true },
        { name: 'updated_at', label: 'Updated', field: row => row.updated_at, sortable: true }
      ]
    }
  },
  methods: {
    ...mapActions('accounts', ['getAccounts']),
    async loadAccounts () {
      this.showLoading()
      await this.getAccounts()
      this.hideLoading()
    }
  },
  computed: {
    ...mapGetters('accounts', ['accounts'])
  },
  mounted () {
    this.loadAccounts()
  },
  mixins: [spinnerMixin]
}
</script>

<style lang="scss" scoped>
</style>
