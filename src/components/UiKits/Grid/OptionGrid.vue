<script setup>
import {
    BCard,
    BCardBody,
    BCol,
    BRow,
} from "bootstrap-vue-next";
const breakpoints = [
    {name: "Extra small", icon: "<", value: "576px"},
    {name: "Small", icon: "≥", value: "576px"},
    {name: "Medium", icon: "≥", value: "768px"},
    {name: "Large", icon: "≥", value: "992px"},
    {name: "Extra large", icon: "≥", value: "1200px"},
    {name: "Extra extra large", icon: "≥", value: "1400px"},
];
const rows = [
    {
        title: "Grid behavior",
        values: ["Horizontal at all times", "Collapsed to start, horizontal above breakpoints"],
        colspan: [1, 5]
    },
    {title: "Max container width", values: ["None (auto)", "540px", "720px", "960px", "1140px", "1320px"]},
    {
        title: "Class prefix",
        values: [".col-", ".col-sm-", ".col-md-", ".col-lg-", ".col-xl-", ".col-xxl-"],
        class: "text-danger"
    },
    {title: "# of columns", values: ["12"], colspan: [6]},
    {title: "Gutter width", values: ["1.5rem (.75rem on left and right)"], colspan: [6]},
    {title: "Nestable", values: ["Yes"], colspan: [6]},
    {title: "Offsets", values: ["Yes"], colspan: [6]},
    {title: "Column ordering", values: ["Yes"], colspan: [6]},
];

</script>

<template>

    <!-- First Card: Grid Options Table -->
    <b-col lg="12">
        <b-card no-body>
            <template #header>
                <h5>Grid Options</h5>
                <p class="mt-1 f-m-light">
                    Bootstrap grid system allow all six breakpoints, and any breakpoints you can customize.
                </p>
            </template>

            <b-card-body>
                <div class="table-responsive">
                    <table class="table table-secondary">
                        <thead class="grids">
                        <tr>
                            <th></th>
                            <th v-for="(bp, i) in breakpoints" :key="i" class="app-grid">
                                {{ bp.name }}<br/>
                                <small>
                                    <i :class="['fa-solid', bp.icon === '<' ? 'fa-less-than' : 'fa-greater-than-equal']"></i>
                                    {{ bp.value }}
                                </small>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="grids">
                        <tr v-for="(row, rIndex) in rows" :key="rIndex" :class="rIndex % 2 === 0 ? 'app-grid-box' : ''">
                            <th class="text-nowrap fw-600" scope="row">{{ row.title }}</th>
                            <template v-for="(val, vIndex) in row.values" :key="vIndex">
                                <td :colspan="row.colspan ? row.colspan[vIndex] || 1 : 1" :class="row.class">
                                    <div v-if="row.class" :class="row.class">{{ val }}</div>
                                    <span v-else>{{ val }}</span>
                                </td>
                            </template>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </b-card-body>
        </b-card>
    </b-col>

</template>
