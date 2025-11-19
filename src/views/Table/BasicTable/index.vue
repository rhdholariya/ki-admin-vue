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
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhTable} from "@phosphor-icons/vue";
import {
    simpleTableData,
    tableData,
    nestedDataSet,
    nestedData,
    TwoWaTableData,
    headersDatas,
    rowsDatas,
} from "@/data/tablePage/BasicTable/BasicTableData.js";


const hoverFields = ['id', 'name', 'position', 'office', 'status', 'salary', 'contact'];
const smallFields = ['id', 'name', 'position', 'office', 'age', 'salary'];
const largeFields = ['id', 'name', 'position', 'office', 'status', 'salary'];
const nestedFields = ['id', 'first', 'last', 'handle'];
const nestedInnerFields = ['header', 'first', 'last'];


const rowVariants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
];


const tableFields = [
    {key: 'id', label: 'Id'},
    {key: 'name', label: 'Name'},
    {key: 'position', label: 'Position'},
    {key: 'office', label: 'Office'},
    {key: 'age', label: 'Age'},
    {key: 'salary', label: 'Salary'},
];


const breadcrumbItems = {
    title: "Basic Table",
    items: [
        {label: "Table", icon: PhTable},
        {label: "Basic Table", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row class="table-section">
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


                                        <template #cell(status)="data">
                                            <span
                                                :class="`badge bg-${data.item.badgeColor}`"
                                            >
                                                {{ data.item.status }}
                                            </span>
                                        </template>


                                        <template #cell(salary)="data">
                                            <span class="text-success fw-semibold">{{ data.item.salary }}</span>
                                        </template>
                                    </b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Dark Table</h5>
                                <p>
                                    Using <code>.table-dark</code> with <code>&lt;b-table&gt;</code>.
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
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Bordered Tables With Striped</h5>
                                <p>
                                    Add <code>.table-bordered</code> and <code>.table-striped</code>.
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
                                                <img :src="data.item.avatar" class="img-fluid" :alt="data.item.name"/>
                                            </div>
                                            <span>{{ data.item.name }}</span>
                                        </div>
                                    </template>
                                    <template #cell(status)="data">
                                        <span :class="`badge text-light-${data.item.badgeColor}`">
                                            {{ data.item.status }}
                                        </span>
                                    </template>
                                </b-table>
                            </b-card-body>
                        </b-card>
                    </b-col>
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
                                        <span :class="`badge text-light-${data.item.badgeColor}`">{{
                                                data.item.status
                                            }}</span>
                                    </template>
                                    <template #cell(salary)="data">
                                        <span class="text-success fw-semibold">{{ data.item.salary }}</span>
                                    </template>
                                </b-table>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col cols="12">
                        <b-card no-body>
                            <template #header>
                                <h5>Hoverable Table</h5>
                                <p>Add <code>.table-hover</code> class to the table tag.</p>
                            </template>
                            <b-card-body class="p-0">
                                <div class="table-responsive">
                                    <b-table
                                        :items="tableData"
                                        :fields="hoverFields"
                                        hover
                                        responsive
                                        class="table-bottom-border align-middle mb-0 table table-hover"
                                    >
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
                                            <span :class="`badge text-light-${data.item.badgeColor}`">{{
                                                    data.item.status
                                                }}</span>
                                        </template>
                                        <template #cell(salary)="data">
                                            <span class="text-success fw-500">{{ data.item.salary }}</span>
                                        </template>
                                    </b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Table Variants</h5>
                                <p>
                                    Each row uses different Bootstrap color variants automatically.
                                </p>
                            </b-card-header>

                            <b-card-body class="p-0">
                                <div class="table-responsive">
                                    <b-table
                                        :items="tableData"
                                        :fields="tableFields"
                                        hover
                                        responsive
                                        class="align-middle mb-0"
                                        head-class="fw-bold"
                                        :tbody-tr-class="(item, index) => `table-${rowVariants[index % rowVariants.length]}`"
                                    >
                                        <template #cell(name)="data">
                                            <div class="fw-semibold">{{ data.item.name }}</div>
                                        </template>
                                        <template #cell(salary)="data">
                                            <span class="fw-bold">{{ data.item.salary }}</span>
                                        </template>
                                    </b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col cols="12">
                        <b-card>
                            <template #header>
                                <h5>Nesting Table</h5>
                                <p>Border styles, active styles, and table variants are not inherited by nested
                                    tables.</p>
                            </template>
                            <b-card-body class="p-0">
                                <div class="table-responsive">
                                    <b-table :items="nestedDataSet" :fields="nestedFields" bordered striped responsive>
                                        <template #cell(handle)="data">
                                            <div>
                                                <span>{{ data.item.handle }}</span>
                                                <b-table
                                                    v-if="data.item.id === 1"
                                                    :items="nestedData"
                                                    :fields="nestedInnerFields"
                                                    small
                                                    responsive
                                                ></b-table>
                                            </div>
                                        </template>
                                    </b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Small Table</h5>
                                <p>Using <code>.table-sm</code> class for compact table.</p>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <div class="table-responsive mb-0">
                                    <b-table :items="tableData" :fields="smallFields" small striped hover
                                             responsive></b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Large Table</h5>
                                <p>Using <code>.table-lg</code> class for larger table.</p>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <div class="table-responsive">
                                    <b-table :items="tableData" :fields="largeFields" large striped hover
                                             responsive></b-table>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
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
                    <b-col xl="8">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Always Responsive</h5>
                                <p>Add responsive classes like <code>.table-responsive-md</code> for scrollable tables.
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
