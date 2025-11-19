<script setup>
import { ref } from 'vue';
import CustomDataTable from '@/components/Table/DataTable/CustomDataTable.vue';
import { callbackTableData } from '@/data/tablePage/DataTable/callbackDatatable.js';


const columns = ref([
    { key: 'name', header: 'Name' },
    { key: 'position', header: 'Position' },
    { key: 'location', header: 'Office' },
    { key: 'age', header: 'Age' },
    { key: 'salary', header: 'Start date' },
    { key: 'totalSalary', header: 'Salary' },
]);


const data = ref([...callbackTableData]);
</script>

<template>
    <CustomDataTable
        title="Row Created Callback Example"
        :columns="columns"
        :data="data"
        row-key="name"
        description="The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the base framework upon which plug-ins can be built."
        :show-actions="false"
        :show-length-menu="true"
        :wrapper-class="'app-scroll table-responsive app-datatable-default cursor-pointer row-callback-datatable'"
        table-class-name="w-100 align-middle mb-0"
    />
</template>
