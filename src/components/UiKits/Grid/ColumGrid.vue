<script setup>
import {ref} from "vue";
import {BCard, BCardBody, BCardHeader, BCol, BRow} from "bootstrap-vue-next";

const gridSections = ref([
    {
        title: "Grid For Column",
        colSize: "xs=12",
        rows: [[6, 6], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12]].map((pair) =>
            pair.map((val) => ({className: `col-md-${val}`, text: `col-md-${val}`}))
        ),
    },
    {
        title: "Equal-width",
        colSize: "lg=6",
        rows: [
            [1, 2].map(() => ({className: "col-6", text: "col-md-6"})),
            [1, 2, 3].map(() => ({className: "col-4", text: "col-md-4"})),
        ],
    },
    {
        title: "Setting one column width",
        colSize: "lg=6",
        rows: [
            [
                {className: "col", text: "col-md-3"},
                {className: "col-6", text: "col-md-6 (wider)"},
                {className: "col", text: "col-md-3"},
            ],
            [
                {className: "col", text: "col"},
                {className: "col-5", text: "col-md-5 (wider)"},
                {className: "col", text: "col"},
            ],
        ],
    },
    {
        title: "Variable width content",
        colSize: "lg=6",
        rows: [
            [
                {className: "col col-lg-4", text: "col-lg-4"},
                {className: "col-md-auto", text: "col-md-auto"},
                {className: "col col-lg-4", text: "col-lg-4"},
            ],
            [
                {className: "col", text: "col"},
                {className: "col-md-auto", text: "col-md-auto"},
                {className: "col col-lg-2", text: "col-lg-2"},
            ],
        ],
    },
    {
        title: "All Breakpoints",
        colSize: "lg=6",
        rows: [
            [1, 2, 3, 4].map(() => ({className: "col", text: "col"})),
            [
                {className: "col-8", text: "col"},
                {className: "col-4", text: "col-4"},
            ],
        ],
    },
]);



const getRowClass = (title, rowIndex) => {
    if (['Equal-width', 'Setting one column width', 'Variable width content', 'All Breakpoints'].includes(title)) {
        return `d-flex ${rowIndex > 0 ? 'mt-3' : ''}`;
    }
    return `flex-wrap ${rowIndex > 0 ? 'mt-3' : ''}`;
};
</script>

<template>
    <div>
        <!-- Grid For Column - Full width -->
        <b-row>
            <b-col
                v-for="section in gridSections.filter(s => s.title === 'Grid For Column')"
                :key="section.title"
                xs="12"
            >
                <b-card no-body>
                    <b-card-header>
                        <h5 class="card-title m-1">{{ section.title }}</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-row
                            v-for="(row, rowIndex) in section.rows"
                            :key="rowIndex"
                            :class="getRowClass(section.title, rowIndex)"
                        >
                            <div v-for="(col, colIndex) in row" :key="colIndex" :class="col.className">
                                <div class="text-center p-2 bg-light-secondary b-r-5 ">
                                    {{ col.text }}
                                </div>
                            </div>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <!-- Equal-width + Setting one column width -->
        <b-row>
            <b-col
                v-for="section in gridSections.filter(s => s.title === 'Equal-width' || s.title === 'Setting one column width')"
                :key="section.title"
                lg="6"
            >
                <b-card no-body>
                    <b-card-header>
                        <h5 class="card-title m-1">{{ section.title }}</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-row
                            v-for="(row, rowIndex) in section.rows"
                            :key="rowIndex"
                            class="d-flex"
                        >
                            <div v-for="(col, colIndex) in row" :key="colIndex" :class="col.className">
                                <div class="text-center p-2 bg-light-secondary b-r-5 mb-2">
                                    {{ col.text }}
                                </div>
                            </div>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <!-- Variable width content + All Breakpoints -->
        <b-row>
            <b-col
                v-for="section in gridSections.filter(s => s.title === 'Variable width content' || s.title === 'All Breakpoints')"
                :key="section.title"
                lg="6"
            >
                <b-card no-body>
                    <b-card-header>
                        <h5 class="card-title m-1">{{ section.title }}</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-row
                            v-for="(row, rowIndex) in section.rows"
                            :key="rowIndex"
                            class="d-flex"
                        >
                            <div v-for="(col, colIndex) in row" :key="colIndex" :class="col.className">
                                <div class="text-center p-2 bg-light-secondary b-r-5 mb-2">
                                    {{ col.text }}
                                </div>
                            </div>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>


