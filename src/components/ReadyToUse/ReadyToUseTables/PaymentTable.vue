<script setup>
import CustomDataTable from '@/components/DataTable/CustomDataTable.vue'
import { paymentData } from '@/data/DablePage/DataTable/paymentData.js'

const columns = [
    {
        key: 'name',
        header: 'Name',
        render: (_, payment) => `<p class="mb-0">${payment.name}</p>`
    },
    {
        key: 'billNo',
        header: 'Bill No'
    },
    {
        key: 'tax',
        header: 'Tax'
    },
    {
        key: 'charges',
        header: 'Charges'
    },
    {
        key: 'discount',
        header: 'Discount',
        render: (_, payment) => `<span class="f-w-500 text-success">${payment.discount}</span>`
    },
    {
        key: 'billDate',
        header: 'Bill Date'
    },
    {
        key: 'total',
        header: 'Total'
    }
]

// Footer columns (for table footer)
const footerColumns = [
    { key: 'name', header: 'Name' },
    { key: 'billNo', header: 'Bill No' },
    { key: 'tax', header: 'Tax' },
    { key: 'charges', header: 'Charges' },
    { key: 'discount', header: 'Discount' },
    { key: 'billDate', header: 'Bill Date' },
    { key: 'total', header: 'Total' }
]
</script>

<template>
    <CustomDataTable
        title="Payment Details"
        :show-description="false"
        :columns="columns"
        :data="paymentData"
        row-key="name"
        :show-actions="false"
        :show-footer="true"
        :footer-columns="footerColumns"
        table-class-name="w-100 align-middle mb-0"
        card-class-name=""
    />
</template>
