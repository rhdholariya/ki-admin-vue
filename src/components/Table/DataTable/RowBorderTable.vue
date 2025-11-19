<script setup>
import {ref} from "vue";
import CustomDataTable from "@/components/Table/DataTable/CustomDataTable.vue";
import {users} from "@/data/tablePage/DataTable/defaultDatatable.js";
import {BButton, BModal} from "bootstrap-vue-next";

const getAvatar = (name) => {
    const hash = name
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const randomNum = (hash % 16) + 1;
    const fileName = [7, 8, 9].includes(randomNum)
        ? `0${randomNum}`
        : `${randomNum}`;
    return `/images/avatar/${fileName}.png`;
};

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
    {
        key: "name",
        label: "Name",
        render: (name) => {
            const avatar = getAvatar(name);
            return `
        <div class="d-flex align-items-center">
          <img src="${avatar}" alt="User Avatar" class="rounded-circle me-2" width="32" height="32" />
          <span>${name}</span>
        </div>
      `;
        },
    },
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
  emit("edit-item", item);
};
const emit = defineEmits(["edit-item", "delete-item", "view-item"]);

const handleDelete = (item) => {
    itemToDelete.value = item;
    showDeleteModal.value = true;
};

const confirmDelete = () => {
    if (itemToDelete.value) {
        tableData.value = tableData.value.filter(item => item.name !== itemToDelete.value.name);

        showDeleteModal.value = false;
        itemToDelete.value = null;
    }
};

</script>

<template>
    <div class="col-12 mt-4">
        <CustomDataTable
            :key="`datatable-${tableData.length}`"
            title="Row Border Bottom Example"
            description="DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: new DataTable();"
            :columns="columns"
            :data="tableData"
            row-key="name"
            show-actions
            :show-individual-buttons="true"
            :on-edit="handleEdit"
            :on-delete="handleDelete"
            table-class-name="w-100 align-middle mb-0 table-border-bottom"
            :page-length="10"
            :wrapper-class="'app-scroll table-responsive app-datatable-default cursor-pointer default-data-table'"
            :show-length-menu="true"
        />
    </div>

    <b-modal
        v-model="showDeleteModal"
        centered
        hide-header
        content-class="border-0"
        body-class="text-center p-4"
        @hidden="itemToDelete = null"
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