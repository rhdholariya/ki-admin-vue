<script setup>
import CustomDataTable from '@/components/DataTable/CustomDataTable.vue'
import { ticketsData } from '@/data/DablePage/DataTable/ticketData.js'

const columns = [
    {
        key: 'agent',
        header: 'AGENT'
    },
    {
        key: 'department',
        header: 'DEPARTMENT'
    },
    {
        key: 'id',
        header: 'ID',
        render: (_, ticket) => `<span class='f-w-500'>${ticket.id}</span>`
    },
    {
        key: 'title',
        header: 'TITLE',
        render: (_, ticket) => `<p>${ticket.title}</p>`
    },
    {
        key: 'activity',
        header: 'ACTIVITY',
        render: (_, ticket) =>
            `<span class='text-${ticket.activity === 'No reply yet' ? 'danger' : 'success'} f-w-500'>
         ${ticket.activity}
       </span>`
    },
    {
        key: 'date',
        header: 'DATE'
    },
    {
        key: 'priority',
        header: 'PRIORITY',
        render: (_, ticket) =>
            `<span class='badge bg-transparent ${ticket.priorityClass}'>
         ${ticket.priority}
       </span>`
    }
]

// optional footer (same as columns)
const footerColumns = [
    { key: 'agent', header: 'AGENT' },
    { key: 'department', header: 'DEPARTMENT' },
    { key: 'id', header: 'ID' },
    { key: 'title', header: 'TITLE' },
    { key: 'activity', header: 'ACTIVITY' },
    { key: 'date', header: 'DATE' },
    { key: 'priority', header: 'PRIORITY' }
]
</script>

<template>
    <CustomDataTable
        title="Ticket Detail"
        :show-description="false"
        :columns="columns"
        :data="ticketsData"
        row-key="id"
        :show-actions="false"
        :show-footer="true"
        :footer-columns="footerColumns"
        table-class-name="w-100 align-middle mb-0"
        card-class-name=""
    />
</template>
