<script setup>
import { ref } from "vue";
import {BCard, BCardBody, BCardHeader, BCol, BRow} from "bootstrap-vue-next";

const sections = ref([
    {
        title: "Stacked To Horizontal",
        rows: [
            [
                { className: "col-sm-8", content: "col-sm-8" },
                { className: "col-sm-4", content: "col-sm-4" },
            ],
            Array(3).fill({ className: "col-sm", content: "col-sm" }),
        ],
    },
    {
        title: "Mix And Match",
        rows: [
            [
                { className: "col-sm-8", content: "col-sm-8" },
                { className: "col-6 col-md-4", content: "col-6 col-md-4" },
            ],
            Array(3).fill({ className: "col-6 col-md-4", content: "col-6 col-md-4" }),
            [
                { className: "col-6", content: "col-6" },
                { className: "col-6", content: "col-6" },
            ],
        ],
    },
    { title: "Nesting", rows: [] },
    {
        title: "Horizontal alignment",
        rows: [
            Array(2).fill({ className: "col-4", content: "One of two columns" }),
            Array(2).fill({ className: "col-4", content: "One of two columns" }),
            Array(2).fill({ className: "col-4", content: "One of two columns" }),
        ],
    },
    { title: "Vertical alignment", rows: [] },
    {
        title: "Offset classes",
        rows: [
            [
                { className: "col-md-4", content: ".col-md-4" },
                { className: "col-md-4 offset-md-4", content: ".col-md-4 .offset-md-4" },
            ],
            [
                { className: "col-md-3 offset-md-3", content: ".col-md-3 .offset-md-3" },
                { className: "col-md-3 offset-md-3", content: ".col-md-3 .offset-md-3" },
            ],
            [{ className: "col-md-6 offset-md-3", content: ".col-md-6 .offset-md-3" }],
        ],
    },
    {
        title: "Margin Utilities",
        rows: [
            [
                { className: "col-md-4", content: ".col-md-4" },
                { className: "col-md-4 ms-auto", content: ".col-md-4 .ms-auto" },
            ],
            [
                { className: "col-md-3 ms-md-auto", content: ".col-md-3 .ms-md-auto" },
                { className: "col-md-3 ms-md-auto", content: ".col-md-3 .ms-md-auto" },
            ],
            [
                { className: "col-auto me-auto", content: ".col-auto .me-auto" },
                { className: "col-auto", content: ".col-auto" },
            ],
        ],
    },
]);
</script>
<template>
    <div>
        <b-col xs="12" v-for="(section, sIdx) in sections" :key="sIdx" class="">
            <b-card no-body>
                <!-- Card Header using template slot -->
                <b-card-header>
                    <h5 class="card-title">{{ section.title }}</h5>
                </b-card-header>

                <b-card-body>
                    <!-- Normal rows -->
                    <b-row
                        v-for="(row, rIdx) in section.rows"
                        :key="rIdx"
                        :class="section.title.includes('alignment') ? `justify-content-${['start','center','end'][rIdx] || 'start'} p-2` : 'mt-2 p-2'"
                    >
                        <div v-for="(col, cIdx) in row" :key="cIdx" :class="col.className">
                            <div class="text-center p-2 bg-light-secondary b-r-5 ">
                                {{ col.content }}
                            </div>
                        </div>
                    </b-row>

                    <!-- Nested section -->
                    <b-row v-if="section.title === 'Nesting'" class="text-center">
                        <div class="col-sm-3">
                            <div class="text-center p-2 bg-light-secondary b-r-5 mb-2">
                                Level 1: .col-sm-3
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <b-row>
                                <div class="col-8 col-sm-6">
                                    <div class="text-center p-2 bg-light-secondary b-r-5 ">
                                        Level 2: .col-8 .col-sm-6
                                    </div>
                                </div>
                                <div class="col-4 col-sm-6">
                                    <div class="text-center p-2 bg-light-secondary b-r-5 ">
                                        Level 2: .col-4 .col-sm-6
                                    </div>
                                </div>
                            </b-row>
                        </div>
                    </b-row>

                    <!-- Vertical alignment -->
                    <b-row v-if="section.title === 'Vertical alignment'" class="align-items-start">
                        <div v-for="(align, i) in ['start', 'center', 'end']" :key="i" class="col" :class="`align-self-${align}`">
                            <div v-for="j in 2" :key="j" class="text-center p-2 bg-light-secondary b-r-5 mb-3">
                                One of three columns
                            </div>
                        </div>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>
    </div>
</template>


