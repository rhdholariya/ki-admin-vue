<script setup>
import {ref, onMounted, onBeforeUnmount, watch, nextTick, computed} from "vue";
import {BCard, BCardBody, BCardHeader, BButton, BTable} from "bootstrap-vue-next";
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

const props = defineProps({
    rowKey: {type: String, default: "id"},
    title: {type: String, default: "Default Datatable"},
    description: {type: [String, Object], default: "DataTables has most features enabled by default"},
    showTitle: {type: Boolean, default: true},
    showDescription: {type: Boolean, default: true},
    columns: {type: Array, required: true},
    data: {type: Array, required: true},
    showActions: {type: Boolean, default: true},
    onEdit: {type: Function},
    onDelete: {type: Function},
    className: {type: String, default: ""},
    cardClassName: {type: String, default: ""},
    tableClassName: {type: String, default: "table table-striped table-hover w-100 align-middle mb-0"},
    pageLength: {type: Number, default: 10},
    showLengthMenu: {type: Boolean, default: true},
    showFooter: {type: Boolean, default: false},
    footerData: {type: Array, default: () => []},
    footerColumns: {type: Array, default: () => []},
});

const tableWrapperRef = ref(null);
let dataTableInstance = null;

// Transform columns for b-table
const tableFields = computed(() => {
    const fields = props.columns.map(column => ({
        key: column.key,
        label: column.header,
        class: column.className,
        sortable: false,
    }));

    if (props.showActions) {
        fields.push({
            key: 'actions',
            label: 'Action',
            class: 'text-nowrap',
            sortable: false
        });
    }

    return fields;
});

// Transform data for b-table with actions
const tableItems = computed(() => {
    return props.data.map(item => {
        const tableItem = {...item};

        if (props.showActions) {
            tableItem.actions = item;
        }

        return tableItem;
    });
});

const initDataTable = async () => {
    if (typeof window === 'undefined' || !tableWrapperRef.value) return;

    const DataTableModule = await import('datatables.net-dt');
    const DataTable = DataTableModule.default || DataTableModule;

    if (dataTableInstance) {
        dataTableInstance.destroy();
        dataTableInstance = null;
    }

    await nextTick();

    const actualTable = tableWrapperRef.value.querySelector('table');
    if (actualTable && !dataTableInstance) {
        dataTableInstance = new DataTable(actualTable, {
            pagingType: "full_numbers",
            pageLength: props.pageLength,
            dom: props.showLengthMenu
                ? `<"dt-layout-top"<"dt-layout-row"<"dt-layout-cell dt-layout-start"l><"dt-layout-cell dt-layout-end"f>>>
                   <"dt-layout-middle"tr>
                   <"dt-layout-bottom"<"dt-layout-row"<"dt-layout-cell dt-layout-start"i><"dt-layout-cell dt-layout-end"p>>>`
                : `<"dt-layout-top"<"dt-layout-row"<"dt-layout-cell dt-layout-end"f>>>
                   <"dt-layout-middle"tr>
                   <"dt-layout-bottom"<"dt-layout-row"<"dt-layout-cell dt-layout-start"i><"dt-layout-cell dt-layout-end"p>>>`,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search...",
                lengthMenu: "Show _MENU_ entries",
                info: "Showing _START_ to _END_ of _TOTAL_ entries",
                infoEmpty: "Showing 0 to 0 of 0 entries",
                infoFiltered: "(filtered from _MAX_ total entries)",
            },
            order: [],
            autoWidth: false,
            deferRender: false
        });
    }
};

onMounted(() => {
    setTimeout(() => initDataTable(), 100);
});

onBeforeUnmount(() => {
    if (dataTableInstance) {
        dataTableInstance.destroy();
        dataTableInstance = null;
    }
});

watch([() => props.data, () => props.pageLength, () => props.showLengthMenu], () => {
    setTimeout(() => initDataTable(), 100);
});
</script>

<template>
    <div :class="className">
        <b-card :class="cardClassName" no-body>
            <b-card-header v-if="showTitle || showDescription">
                <h5 v-if="showTitle">{{ title }}</h5>
                <p v-if="showDescription && description">{{ description }}</p>
            </b-card-header>

            <b-card-body class="p-0">
                <div ref="tableWrapperRef" class="app-scroll table-responsive app-datatable-default cursor-pointer">
                    <b-table
                        :items="tableItems"
                        :fields="tableFields"
                        :class="tableClassName"
                        responsive
                        show-empty
                        hover
                        striped
                    >
                        <template v-for="column in columns" :key="column.key" #[`cell(${column.key})`]="data">
                            <span v-if="column.render" v-html="column.render(data.value, data.item)"></span>
                            <span v-else>{{ data.value }}</span>
                        </template>

                        <template #cell(actions)="data">
                            <b-button
                                v-if="onEdit"
                                size="sm"
                                variant="success"
                                class="me-2 p-1"
                                @click="onEdit(data.value)"
                            >
                                <i class="bi bi-pencil-fill"></i>
                            </b-button>
                            <b-button
                                v-if="onDelete"
                                size="sm"
                                variant="danger"
                                class="p-1"
                                @click="onDelete(data.value)"
                            >
                                <i class="bi bi-trash-fill"></i>
                            </b-button>
                        </template>

                        <template #empty>
                            <div class="text-center my-4">
                                <span>No records found</span>
                            </div>
                        </template>
                        {{ showFooter }} ===============
                        <template #foot v-if="showFooter">
                            <tr>
                                <th
                                    v-for="column in footerColumns.length ? footerColumns : columns"
                                    :key="`footer-${column.key}`"
                                    :class="column.className"
                                >
                                    <span v-html="column.header"></span>
                                </th>
                                <th v-if="showActions">Action</th>
                            </tr>
                            <tr v-for="(item, index) in footerData" :key="`footer-row-${index}`">
                                <td
                                    v-for="column in footerColumns.length ? footerColumns : columns"
                                    :key="`footer-${column.key}-${index}`"
                                >
                                    <span v-if="column.render" v-html="column.render(item[column.key], item)"></span>
                                    <span v-else>{{ item[column.key] }}</span>
                                </td>
                                <td v-if="showActions"></td>
                            </tr>
                        </template>
                    </b-table>
                </div>
            </b-card-body>
        </b-card>
    </div>
</template>