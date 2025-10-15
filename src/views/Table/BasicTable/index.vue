<script setup>
import {
    BCard,
    BCardBody,
    BCardHeader,
    BCol,
    BContainer,
    BRow,
    BTable,
} from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import { PhTable } from "@phosphor-icons/vue";
import {
    simpleTableData,
    tableData,
    nestedDataSet,
    nestedData,
    TwoWaTableData,
    headersDatas,
    rowsDatas,
} from "@/data/tablePage/BasicTable/BasicTableData.js";

// Fields for b-table
const hoverFields = ['id', 'name', 'position', 'office', 'status', 'salary', 'contact'];
const smallFields = ['id', 'name', 'position', 'office', 'age', 'salary'];
const largeFields = ['id', 'name', 'position', 'office', 'status', 'salary'];

// Define table fields
const tableFields = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name' },
    { key: 'position', label: 'Position' },
    { key: 'office', label: 'Office' },
    { key: 'age', label: 'Age' },
    { key: 'salary', label: 'Salary' },
];

const breadcrumbItems = {
    title: "Basic Table",
    items: [
        { label: "Table", icon: PhTable },
        { label: "Basic Table", active: true },
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems" />

            <b-container fluid>
                <b-row>
                    <!-- Simple Table -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Simple Table</h5>
                                <p>
                                    Using <code>&lt;b-table&gt;</code> with
                                    <code>#cell()</code> scoped slots.
                                </p>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <div class="table-responsive">
                                    <b-table
                                        :items="simpleTableData"
                                        :fields="[
                                        { key: 'id', label: 'Id' },
                                        { key: 'name', label: 'Name' },
                                        { key: 'position', label: 'Position' },
                                        { key: 'office', label: 'Office' },
                                        { key: 'status', label: 'Status' },
                                        { key: 'salary', label: 'Salary' },
                                        { key: 'contact', label: 'Contact' }
                                    ]"
                                        hover
                                        responsive
                                        class="align-middle mb-0"
                                    >
                                        <!-- Custom Name cell -->
                                        <template #cell(name)="data">
                                            <div class="d-flex align-items-center">
                                                <div
                                                    :class="`w-30 h-30 rounded-circle overflow-hidden d-flex justify-content-center align-items-center bg-${data.item.badgeColor} me-2`"
                                                >
                                                    <img
                                                        :src="data.item.avatar"
                                                        :alt="data.item.name"
                                                        class="img-fluid"
                                                    />
                                                </div>
                                                <span class="fw-semibold">{{ data.item.name }}</span>
                                            </div>
                                        </template>

                                        <!-- Custom Status cell (outline badge) -->
                                        <template #cell(status)="data">
                                        <span
                                            :class="`badge border border-${data.item.badgeColor} text-${data.item.badgeColor}`"
                                        >
                                            {{ data.item.status }}
                                        </span>
                                        </template>

                                        <!-- Custom Salary cell -->
                                        <template #cell(salary)="data">
                                            <span class="text-success fw-semibold">{{ data.item.salary }}</span>
                                        </template>
                                    </b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Dark Table -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Dark Table</h5>
                                <p>
                                    Using <code>.table-dark</code> with
                                    <code>&lt;b-table&gt;</code>.
                                </p>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <b-table
                                    :items="tableData"
                                    :fields="[
                                    { key: 'id', label: 'Id' },
                                    { key: 'name', label: 'Name' },
                                    { key: 'position', label: 'Position' },
                                    { key: 'office', label: 'Office' },
                                    { key: 'age', label: 'Age' },
                                    { key: 'salary', label: 'Salary' }
                                ]"
                                    dark
                                    hover
                                    responsive
                                    class="table-hover table-variants-striped-dark align-middle mb-0"
                                />
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Bordered + Striped -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Bordered Tables With Striped</h5>
                                <p>
                                    Add <code>.table-bordered</code> and
                                    <code>.table-striped</code> for striped bordered tables.
                                </p>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <b-table
                                    :items="tableData"
                                    :fields="[
                                    { key: 'id', label: 'Id' },
                                    { key: 'name', label: 'Name' },
                                    { key: 'position', label: 'Position' },
                                    { key: 'office', label: 'Office' },
                                    { key: 'status', label: 'Status' },
                                    { key: 'salary', label: 'Salary' }
                                ]"
                                    striped
                                    bordered
                                    hover
                                    responsive
                                    class="align-middle mb-0"
                                >
                                    <template #cell(name)="data">
                                        <div class="d-flex align-items-center">
                                            <div
                                                :class="`w-30 h-30 rounded-circle overflow-hidden me-2 text-bg-${data.item.badgeColor}`"
                                            >
                                                <img
                                                    :src="data.item.avatar"
                                                    :alt="data.item.name"
                                                    class="img-fluid"
                                                />
                                            </div>
                                            <span>{{ data.item.name }}</span>
                                        </div>
                                    </template>

                                    <template #cell(status)="data">
                                    <span
                                        :class="`badge border border-${data.item.badgeColor} text-${data.item.badgeColor}`"
                                    >
                                        {{ data.item.status }}
                                    </span>
                                    </template>
                                </b-table>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Table Without Borders -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Tables Without Borders</h5>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <b-table
                                    :items="tableData"
                                    :fields="[
                                    { key: 'id', label: 'Id' },
                                    { key: 'name', label: 'Name' },
                                    { key: 'position', label: 'Position' },
                                    { key: 'office', label: 'Office' },
                                    { key: 'age', label: 'Age' },
                                    { key: 'salary', label: 'Salary' }
                                ]"
                                    borderless
                                    striped
                                    hover
                                    responsive
                                    class="align-middle mb-0"
                                >
                                    <template #cell(name)="data">
                                        <span class="text-dark fw-semibold">{{ data.item.name }}</span>
                                    </template>

                                    <template #cell(position)="data">
                                    <span
                                        :class="`badge border border-${data.item.badgeColor} text-${data.item.badgeColor}`"
                                    >
                                        {{ data.item.status }}
                                    </span>
                                    </template>

                                    <template #cell(salary)="data">
                                        <span class="text-success fw-semibold">{{ data.item.salary }}</span>
                                    </template>
                                </b-table>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Hoverable Table -->
                    <b-col cols="12">
                        <b-card no-body>
                            <template #header>
                                <h5>Hoverable Table</h5>
                                <p>Add <code>.table-hover</code> class to the table tag.</p>
                            </template>
                            <b-card-body class="p-0">
                                <div class="table-responsive">
                                    <b-table :items="tableData" :fields="hoverFields" bordered hover responsive class="mb-0">
                                        <template #cell(name)="data">
                                            <div class="d-flex align-items-center">
                                                <div
                                                    class="h-30 w-30 d-flex-center b-r-50 overflow-hidden me-2"
                                                    :class="'text-bg-' + data.item.badgeColor"
                                                >
                                                    <img :src="data.item.avatar" class="img-fluid w-100"/>
                                                </div>
                                                <p class="mb-0 fw-500">{{ data.item.name }}</p>
                                            </div>
                                        </template>
                                        <template #cell(status)="data">
                                        <span
                                            :class="`badge border border-${data.item.badgeColor} text-${data.item.badgeColor}`"
                                        >
                                            {{ data.item.status }}
                                        </span>
                                        </template>
                                        <template #cell(salary)="data">
                                            <span class="text-success fw-500">{{ data.item.salary }}</span>
                                        </template>
                                    </b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Table Variants with Row Classes -->
                    <b-col cols="12">
                        <b-card>
                            <b-card-header>
                                <h5>Table Variants</h5>
                                <p>
                                    Using the Color Variants table need to add
                                    <code>.table-Variants</code> class to table tag
                                </p>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <div class="table-responsive">
                                    <b-table
                                        :items="tableData"
                                        :fields="tableFields"
                                        hover
                                        responsive
                                        class="table-Variants align-middle mb-0 table-primary"
                                        head-class="fw-bold"
                                    >
                                        <template #cell(name)="data">
                                            <div class="fw-semibold text-primary">{{ data.item.name }}</div>
                                        </template>

                                        <template #cell(salary)="data">
                                            <span class="text-success fw-bold">{{ data.item.salary }}</span>
                                        </template>

                                        <template #row="rowData">
                                            <tr :class="`table-${rowData.item.variant}`">
                                                <td>{{ rowData.item.id }}</td>
                                                <td>
                                                    <div class="fw-semibold text-primary">{{ rowData.item.name }}</div>
                                                </td>
                                                <td>{{ rowData.item.position }}</td>
                                                <td>{{ rowData.item.office }}</td>
                                                <td>{{ rowData.item.age }}</td>
                                                <td><span class="text-success fw-bold">{{ rowData.item.salary }}</span></td>
                                            </tr>
                                        </template>
                                    </b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Small Table -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Small Table</h5>
                                <p>Using the small table need to add <code> .table-sm </code> class to table tag</p>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <div class="table-responsive mb-0">
                                    <b-table :items="tableData" :fields="smallFields" small striped hover responsive></b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Large Table -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Large Table</h5>
                                <p>Using the large table need to add <code> .table-lg </code> class to table tag</p>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <div class="table-responsive">
                                    <b-table :items="tableData" :fields="largeFields" large striped hover responsive></b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Two Way Table -->
                    <b-col xl="4">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Two Way Table</h5>
                                <p>Use <code>.text-end</code> to right align last column.</p>
                            </b-card-header>
                            <b-card-body>
                                <b-table
                                    :items="TwoWaTableData"
                                    :fields="[
                                    { key: 'name', label: 'Name' },
                                    { key: 'salary', label: 'Salary', class: 'text-end' }
                                ]"
                                    small
                                    responsive
                                />
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Always Responsive -->
                    <b-col xl="8">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Always Responsive</h5>
                                <p>
                                    Add responsive classes like
                                    <code>.table-responsive-md</code> for scrollable tables.
                                </p>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <b-table
                                    :items="rowsDatas"
                                    :fields="headersDatas.map(h => ({ key: h, label: h }))"
                                    responsive
                                />
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
