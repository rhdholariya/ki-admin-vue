<script setup>
import { ref, h } from "vue";
import CustomDataTable from "@/components/Table/DataTable/CustomDataTable.vue";
import { currenciesData } from "@/data/tablePage/DataTable/buttonsDatatable.js";
import { PhCaretDoubleUp, PhCaretDoubleDown } from "@phosphor-icons/vue";

const tableData = ref([...currenciesData]);

const columns = [
    { key: "code", label: "Currency Code" },
    { key: "name", label: "Currency" },
    { key: "totalAmount", label: "Price" },
    { key: "availableAmount", label: "High" },
    { key: "availableBalance", label: "Low" },
    {
        key: "percentageChange",
        label: "Percentage Change",
        render: (percentageChange) => {
            const isPositive = percentageChange >= 0;
            const icon = isPositive
                ? h(PhCaretDoubleUp, { size: 18, class: "text-success" })
                : h(PhCaretDoubleDown, { size: 18, class: "text-danger" });
            const colorClass = isPositive ? "text-success" : "text-danger";

            // Flex container to vertically align icon and number
            return h(
                "div",
                { class: "d-flex align-items-center gap-1 justify-content-end" },
                [
                    icon,
                    h("span", { class: `fw-bold ${colorClass}` }, `${percentageChange}%`),
                ]
            );
        },
    },
];
</script>

<template>
    <div class="col-12 mt-4">
        <CustomDataTable
            title="Buttons Example"
            description="The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the base framework upon which plug-ins can be built."
            row-key="name"
            :columns="columns"
            :data="tableData"
            :show-actions="false"
            :show-length-menu="false"
            table-class-name="w-100 align-middle mb-0"
            :wrapper-class="'app-scroll table-responsive app-datatable-default cursor-pointer default-data-table'"
            :page-length="10"
        />
    </div>
</template>
