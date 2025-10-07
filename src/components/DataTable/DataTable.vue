<script setup>
import {
    BCard, BCardBody, BCardHeader,
    BTable
} from "bootstrap-vue-next";
import { computed } from "vue";

const props = defineProps({
    columns: {
        type: Array,
        required: true,
    },
    data: {
        type: Array,
        required: true,
    },
    className: {
        type: String,
        default: "",
    },
    header: {
        type: String,
        default: "",
    },
    footer: {
        type: String,
        default: "",
    },
});

const tableFields = computed(() =>
    props.columns.map((col) => ({
        key: col.data,
        label: col.title,
        class: col.className || "",
    }))
);
</script>

<template>
    <div :class="['table-responsive', className]">
        <b-card>
            <!-- Optional Header -->
            <b-cardheader v-if="header" class="datatable-header">
                <h5 class="mb-0">{{ header }}</h5>
            </b-cardheader>

            <b-card-body class="p-0">
                <b-table
                    :items="data"
                    :fields="tableFields"
                    striped
                    hover
                    responsive
                    class="align-middle mb-0"
                >
                    <!-- Dynamic Cell Rendering -->
                    <template
                        v-for="column in columns"
                        :key="column.data"
                        #[`cell(${column.data})`]="{ item }"
                    >
            <span v-if="column.render">
              {{ column.render(item[column.data], 'display', item) }}
            </span>
                        <span v-else>
              {{ item[column.data] }}
            </span>
                    </template>

                    <!-- Optional Footer -->
                    <template v-if="footer" #foot()>
                        <tr>
                            <th
                                v-for="(column, index) in columns"
                                :key="'footer-' + index"
                                :class="column.className"
                            >
                                {{ column.title }}
                            </th>
                        </tr>
                    </template>
                </b-table>
            </b-card-body>

            <b-card-header v-if="footer" class="datatable-footer">
                <h6 class="mb-0">{{ footer }}</h6>
            </b-card-header>
        </b-card>
    </div>
</template>
