<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick, computed, h } from "vue";
import { BCard, BCardBody, BCardHeader, BTable, BDropdown, BDropdownItem, BButton } from "bootstrap-vue-next";
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import { IconTrash, IconEdit } from '@tabler/icons-vue';

const props = defineProps({
  rowKey: { type: String, default: "id" },
  title: { type: String, default: "Default Datatable" },
  description: { type: [String, Object], default: "DataTables has most features enabled by default" },
  showTitle: { type: Boolean, default: true },
  showDescription: { type: Boolean, default: true },
  columns: { type: Array, required: true },
  data: { type: Array, required: true },
  showActions: { type: Boolean, default: true },
  showIndividualButtons: {type: Boolean, default: false},
  onEdit: {type: Function},
  onDelete: {type: Function},
  onView: {type: Function},
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
const tableRef = ref(null);
let dataTableInstance = null;

const tableFields = computed(() => {
  const fields = props.columns.map(column => ({
    key: column.key,
    label: column.header || column.label,
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

const tableItems = computed(() => {
  return props.data.map(item => {
    const tableItem = {...item};

    if (props.showActions) {
      tableItem.actions = item;
    }

    return tableItem;
  });
});

const renderContent = (renderFn, value, item) => {
  if (typeof renderFn !== 'function') return value;

  const result = renderFn(value, item);

  if (typeof result === 'string') {
    return h('div', {innerHTML: result});
  }

  return result;
};

const initDataTable = async () => {
  if (typeof window === "undefined" || !tableRef.value) return;

  try {
    const DataTableModule = await import("datatables.net-dt");
    const DataTable = DataTableModule.default || DataTableModule;

    if (dataTableInstance) {
      dataTableInstance.destroy();
      dataTableInstance = null;
    }

    await nextTick();

    let tableWrapper = tableRef.value?.$el;

    let tableElement =
        tableWrapper?.tagName === "TABLE"
            ? tableWrapper
            : tableWrapper?.getElementsByTagName("table")[0];

    if (tableElement && !tableElement.classList.contains("dataTable")) {
      dataTableInstance = new DataTable(tableElement, {
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
        deferRender: false,
      });
    }
  } catch (error) {
    console.error("Error initializing DataTable:", error);
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
    <BCard :class="cardClassName" no-body>
      <BCardHeader v-if="showTitle || showDescription">
        <h5 v-if="showTitle">{{ title }}</h5>
        <p v-if="showDescription && description">{{ description }}</p>
      </BCardHeader>

      <BCardBody class="p-0">
        <div ref="tableWrapperRef" class="app-scroll table-responsive app-datatable-default cursor-pointer">
          <BTable
              ref="tableRef"
              :items="tableItems"
              :fields="tableFields"
              :class="tableClassName"
              responsive
              show-empty
              hover
              striped
          >
            <template v-for="column in columns" :key="column.key" #[`cell(${column.key})`]="data">
              <component :is="() => renderContent(column.render, data.value, data.item)"/>
            </template>

            <template #cell(actions)="data">
              <div class="d-flex align-items-center gap-2">
                <!-- Individual Buttons Style -->
                <template v-if="showIndividualButtons">

                  <!-- Edit Button -->
                  <BButton
                      v-if="onEdit"
                      variant="outline-success"
                      size="sm"
                      class="icon-btn rounded-2 btn btn-success"
                      @click="onEdit(data.value)"
                      title="Edit"
                  >
                    <IconEdit size="18"/>
                  </BButton>

                  <!-- Delete Button -->
                  <BButton
                      v-if="onDelete"
                      variant="outline-danger"
                      size="sm"
                      class="icon-btn rounded-2 btn btn-danger"
                      @click="onDelete(data.value)"
                      title="Delete"
                  >
                    <IconTrash size="18"/>
                  </BButton>
                </template>

                <!-- Dropdown Style -->
                <template v-else>
                  <BDropdown
                      variant="link"
                      toggle-class="text-decoration-none p-0 dropdown-toggle-no-caret"
                      no-caret
                      right
                      class="action-dropdown"
                  >
                    <template #button-content>
                      <i class="ti ti-dots-vertical"></i>
                    </template>

                    <!-- View in dropdown -->
                    <BDropdownItem v-if="onView" @click="onView(data.value)">
                      <i class="ti ti-eye text-primary me-2"></i> View
                    </BDropdownItem>

                    <!-- Edit in dropdown -->
                    <BDropdownItem v-if="onEdit" @click="onEdit(data.value)">
                      <i class="ti ti-edit text-success me-2"></i> Edit
                    </BDropdownItem>

                    <!-- Delete in dropdown -->
                    <BDropdownItem v-if="onDelete" @click="onDelete(data.value)">
                      <i class="ti ti-trash text-danger me-2"></i> Delete
                    </BDropdownItem>
                  </BDropdown>
                </template>
              </div>
            </template>

            <template #empty>
              <div class="text-center my-4">
                <span>No records found</span>
              </div>
            </template>

            <template #foot v-if="showFooter">
              <tr>
                <th
                    v-for="column in footerColumns.length ? footerColumns : columns"
                    :key="`footer-${column.key}`"
                    :class="column.className"
                >
                  {{ column.header || column.label }}
                </th>
                <th v-if="showActions">Action</th>
              </tr>
              <tr v-for="(item, index) in footerData" :key="`footer-row-${index}`">
                <td
                    v-for="column in footerColumns.length ? footerColumns : columns"
                    :key="`footer-${column.key}-${index}`"
                >
                  <component :is="() => renderContent(column.render, item[column.key], item)"/>
                </td>
                <td v-if="showActions"></td>
              </tr>
            </template>
          </BTable>
        </div>
      </BCardBody>
    </BCard>
  </div>
</template>