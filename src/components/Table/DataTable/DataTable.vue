<script setup>
import {ref} from "vue";
import CustomDataTable from "@/components/Table/DataTable/CustomDataTable.vue";
import {users} from "@/data/tablePage/DataTable/defaultDatatable.js";
import {BButton, BModal} from "bootstrap-vue-next";


const tableData = ref([...users]);

const getPositionBadgeClass = (position) => {
    const positionLower = position.toLowerCase();

    if (positionLower.includes("executive")) {
        return "bg-light-danger text-danger";
    } else if (positionLower.includes("director")) {
        return "bg-light-warning text-warning";
    } else if (positionLower.includes("engineer") || positionLower.includes("developer")) {
        return "bg-light-info text-info";
    } else if (positionLower.includes("specialist")) {
        return "bg-light-primary text-primary";
    } else if (positionLower.includes("assistant") || positionLower.includes("associate")) {
        return "bg-light-success text-success";
    } else if (positionLower.includes("manager") || positionLower.includes("lead")) {
        return "bg-light-info text-info";
    } else {
        return "bg-light-primary text-primary";
    }
};

const columns = [
    {key: "name", label: "Name"},
    {
        key: "position",
        label: "Position",
        render: (position) => {
            return `<span class="badge ${getPositionBadgeClass(position)}">${position}</span>`;
        },
    },
    {key: "location", label: "Office"},
    {key: "age", label: "Age"},
    {key: "salary", label: "Start Date"},
    {key: "totalSalary", label: "Salary"},
];


const showDeleteModal = ref(false);
const itemToDelete = ref(null);


const handleEdit = (item) => {
    console.log("Edit:", item);
};

const handleDelete = (item) => {
    console.log("Delete:", item);
    itemToDelete.value = item;
    showDeleteModal.value = true;
};

const confirmDelete = () => {
    if (itemToDelete.value) {
        const index = tableData.value.findIndex((u) => u.name === itemToDelete.value.name);
        if (index !== -1) {
            // Use setTimeout to ensure DOM updates are complete
            setTimeout(() => {
                tableData.value.splice(index, 1);
            }, 10);
        }
        showDeleteModal.value = false;
        itemToDelete.value = null;
    }
};

const handleView = (item) => {
    alert(`View Details:\nName: ${item.name}\nPosition: ${item.position}\nOffice: ${item.location}`);
};
</script>

<template>
    <div class="col-12 ">
        <CustomDataTable
            title="Default Datatable"
            description="DataTables has most features enabled by default..."
            :columns="columns"
            :data="tableData"
            row-key="name"
            show-actions
            :show-individual-buttons="true"
            :on-edit="handleEdit"
            :on-delete="handleDelete"
            :on-view="handleView"
            table-class-name="w-100 align-middle mb-0"
            :page-length="10"
            :show-length-menu="true"
            :key="tableData.length"
        />
    </div>


    <b-modal
        v-model="showDeleteModal"
        centered
        hide-header
        content-class="border-0"
        body-class="text-center p-4"
    >
        <img alt="" class="img-fluid mb-3" src="/images/icons/delete-icon.png"/>
        <div class="text-center">
            <h4 class="text-danger fw-semibold mb-2">Are You Sure?</h4>
            <p class="text-secondary fs-6">You won't be able to revert this!</p>
        </div>

        <template #footer>
            <div class="text-center mt-4">
                <b-button variant="secondary" class="me-2" @click="showDeleteModal = false">Close</b-button>
                <b-button variant="primary" @click="confirmDelete">Yes, Delete it</b-button>
            </div>
        </template>
    </b-modal>
</template>
