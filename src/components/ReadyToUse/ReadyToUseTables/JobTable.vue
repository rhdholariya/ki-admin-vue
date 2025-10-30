<script setup>
import { BDropdown, BDropdownItem } from 'bootstrap-vue-next'
import CustomDataTable from '@/components/Table/DataTable/CustomDataTable.vue'
import { paymentData } from '@/data/tablePage/DataTable/jobData.js'


const columns = [
    {
        key: 'avatar',
        header: '',
        render: (_, item) => `
      <div class="h-30 w-30 d-flex-center b-r-50 overflow-hidden text-bg-dark">
        ${
            item.avatar
                ? `<img src="${item.avatar}" alt="${item.name}" class="img-fluid" />`
                : `<span>${item.initials || item.name.charAt(0)}</span>`
        }
      </div>
    `,
        className: 'no-export'
    },
    {
        key: 'name',
        header: 'NAME'
    },
    {
        key: 'course',
        header: 'COURSE'
    },
    {
        key: 'experience',
        header: 'EXPERIENCE'
    },
    {
        key: 'rate',
        header: 'RATE'
    },
    {
        key: 'address',
        header: 'ADDRESS'
    },
    {
        key: 'review',
        header: 'REVIEW',
        render: (_, item) => {
            const stars = Array.from({ length: 5 })
                .map((_, idx) => {
                    const filled = idx < item.review
                    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="${
                        filled ? 'gold' : 'none'
                    }" stroke="${filled ? 'gold' : 'lightgray'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
                 </svg>`
                })
                .join('')
            return `<div>${stars}</div>`
        }
    }
]

</script>

<template>
    <CustomDataTable
        title="Job Resumes"
        :show-description="false"
        :columns="columns"
        :data="paymentData"
        row-key="name"
        table-class-name="w-100 align-middle mb-0"
        card-class-name=""
        :show-actions="false"
    >

        <template #cell(actions)="row">
            <b-dropdown variant="white" no-caret class="shadow-none border-0 icon-btn p-0">
                <template #button-content>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <circle cx="12" cy="5" r="1.5" />
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="12" cy="19" r="1.5" />
                    </svg>
                </template>

                <b-dropdown-item href="#">
                    <svg
                        class="me-2"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path
                            d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                        />
                    </svg>
                    Edit
                </b-dropdown-item>

                <b-dropdown-item href="#">
                    <svg
                        class="me-2"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M3 6h18" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <path d="M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                    </svg>
                    Delete
                </b-dropdown-item>
            </b-dropdown>
        </template>
    </CustomDataTable>
</template>
