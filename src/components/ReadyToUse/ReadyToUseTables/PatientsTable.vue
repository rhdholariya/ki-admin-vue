<script setup>
import CustomDataTable from '@/components/DataTable/CustomDataTable.vue';
import { patientsData } from '@/data/DablePage/DataTable/patientsData.js';

const columns = [
    {
        key: 'name',
        header: 'Name',
        render: (_data, patient) => {
            if (patient.avatar) {
                return `
                  <div class="d-flex align-items-center">
                    <div class="h-30 w-30 d-flex-center b-r-50 overflow-hidden text-bg-dark">
                      <img src="${patient.avatar}" alt="${patient.name}" class="img-fluid"/>
                    </div>
                    <p class="mb-0 ps-2">${patient.name}</p>
                  </div>
                `;
            } else {
                return `
                  <div class="d-flex align-items-center">
                    <span class="bg-${patient.statusColor} h-30 w-30 d-flex-center b-r-50">${patient.initials}</span>
                    <p class="mb-0 ps-2">${patient.name}</p>
                  </div>
                `;
            }
        },
    },
    { key: 'address', header: 'Address' },
    { key: 'patientId', header: 'Patient ID', className: 'font-weight-bold' },
    {
        key: 'contact',
        header: 'Number',
        render: (_data, patient) =>
            `<span class="text-success">${patient.contact}</span>`,
    },
    { key: 'age', header: 'Age' },
    { key: 'lastVisit', header: 'Last Visit' , className: 'font-weight-bold' },
    {
        key: 'status',
        header: 'Status',
        render: (_data, patient) =>
            `<span class="badge text-outline-${patient.statusColor}">${patient.status}</span>`,
    },
];

const footerColumns = [
    { key: 'name', header: 'Name' },
    { key: 'address', header: 'Address' },
    { key: 'patientId', header: 'Patient ID' },
    { key: 'contact', header: 'Number' },
    { key: 'age', header: 'Age' },
    { key: 'lastVisit', header: 'Last Visit' },
    { key: 'status', header: 'Status' }
];
</script>

<template>
    <CustomDataTable
        :show-description="false"
        title="Patients List"
        :columns="columns"
        :data="patientsData"
        row-key="id"
        card-class-name=""
        table-class-name="w-100 align-middle mb-0"
        :show-actions="false"
        :showFooter=true
        :footerColumns="footerColumns"
    />
</template>
