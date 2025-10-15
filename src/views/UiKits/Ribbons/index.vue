<script setup>
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
} from "bootstrap-vue-next";
import { PhBriefcase, PhGift } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

// Breadcrumb data
const breadcrumbItems = {
    title: "Ribbons",
    items: [
        { label: "Ui-kits", icon: PhBriefcase },
        { label: "Ribbons", active: true },
    ],
};

// Box components
const BoxPrimary = { template: '<div class="ribbonbox ribbon-primary">Box</div>' };
const BoxDanger = { template: '<div class="ribbonbox ribbon-danger">Box</div>' };
const BoxInfo = { template: '<div class="ribbonbox ribbon-info">Box</div>' };

// === Basic Ribbon Data ===
const ribbonData = [
    { bgColor: "bg-primary-500", ribbonClass: "ribbon-left ribbon-primary", text: "Ribbon" },
    { bgColor: "bg-light-500", ribbonClass: "cross-shadow-ribbon cross-left ribbon-light", text: "Cross" },
    { bgColor: "bg-success-500", ribbonClass: "ribbon-shape shape-left ribbon-success", text: "Shape" },
    { bgColor: "bg-danger-500", ribbonClass: "arrow-ribbon arrow-left ribbon-danger", text: "Arrow" },
    { bgColor: "bg-info-500", ribbonClass: "ribbon-side side-left ribbon-info", text: "Side" },
    { bgColor: "bg-light-500", ribbonClass: "ribbon-top top-left ribbon-light p-0", text: PhGift },
    { bgColor: "bg-dark-500", ribbonClass: "circle-ribbon p-2 circle-left ribbon-dark", text: "50%" },
    { bgColor: "bg-info-500", ribbonClass: "ribbon-file file-left ribbon-info", text: "25%" },
    { bgColor: "bg-primary-500", ribbonClass: "box-ribbon box-left", text: BoxPrimary },
];

// === Ribbon With Position Data ===
const ribbonDataPosition = [
    { bgColor: "bg-primary-300", ribbonClass: "ribbon-right ribbon-primary", text: "Ribbon" },
    { bgColor: "bg-secondary-500", ribbonClass: "ribbon-left-bottom ribbon-secondary", text: "Ribbon" },
    { bgColor: "bg-success-500", ribbonClass: "ribbon-right-bottom ribbon-success", text: "Ribbon" },
    { bgColor: "bg-danger-500", ribbonClass: "ribbon-shape shape-right ribbon-danger", text: "Shape" },
    { bgColor: "bg-info-500", ribbonClass: "ribbon-shape shape-left-bottom ribbon-info", text: "Shape" },
    { bgColor: "bg-light-500", ribbonClass: "ribbon-shape shape-right-bottom ribbon-light", text: "Shape" },
    { bgColor: "bg-dark-500", ribbonClass: "arrow-ribbon arrow-right ribbon-dark", text: "Arrow" },
    { bgColor: "bg-info-500", ribbonClass: "arrow-ribbon arrow-left-bottom ribbon-info", text: "Arrow" },
    { bgColor: "bg-primary-500", ribbonClass: "arrow-ribbon arrow-right-bottom ribbon-primary", text: "Arrow" },
    { bgColor: "bg-secondary-500", ribbonClass: "ribbon-top p-0 top-right ribbon-secondary", text: PhGift },
    { bgColor: "bg-success-500", ribbonClass: "ribbon-top p-0 top-left-bottom ribbon-success", text: PhGift },
    { bgColor: "bg-danger-500", ribbonClass: "ribbon-top p-0 top-right-bottom ribbon-danger", text: PhGift },
    { bgColor: "bg-info-500", ribbonClass: "circle-ribbon p-2 circle-right ribbon-info", text: "50%" },
    { bgColor: "bg-light-500", ribbonClass: "circle-ribbon p-2 circle-left-bottom ribbon-light", text: "50%" },
    { bgColor: "bg-dark-500", ribbonClass: "circle-ribbon p-2 circle-right-bottom ribbon-dark", text: "50%" },
    { bgColor: "bg-info-500", ribbonClass: "file-right ribbon-info", text: "25%" },
    { bgColor: "bg-primary-500", ribbonClass: "file-left-bottom ribbon-primary", text: "25%" },
    { bgColor: "bg-secondary-500", ribbonClass: "file-right-bottom ribbon-secondary", text: "25%" },
    { bgColor: "bg-danger-500", ribbonClass: "box-ribbon box-left-bottom", text: BoxDanger },
    { bgColor: "bg-info-500", ribbonClass: "box-ribbon box-right-bottom", text: BoxInfo },
    { bgColor: "bg-primary-500", ribbonClass: "box-ribbon box-left", text: BoxPrimary },
    { bgColor: "bg-light-500", ribbonClass: "ribbon-side side-right ribbon-light", text: "Side" },
    { bgColor: "bg-dark-500", ribbonClass: "ribbon-side side-left-bottom ribbon-dark", text: "Side" },
];
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems" />

            <b-container fluid>
                <b-row>
                    <!-- Basic Ribbon -->
                    <b-col cols="12">
                        <b-card>
                            <b-card-header><h5>Basic Ribbon</h5></b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col
                                        v-for="(ribbon, index) in ribbonData"
                                        :key="index"
                                        xl="2" lg="3" md="4"
                                        class="mb-3"
                                    >
                                        <div :class="['h-150', ribbon.bgColor, ribbon.ribbonClass.includes('file') ? 'ribbon-file' : 'ribbon-box']">
                                            <div :class="['ribbon', ribbon.ribbonClass]">
                                                <template v-if="typeof ribbon.text === 'string'">{{ ribbon.text }}</template>
                                                <component v-else :is="ribbon.text" />
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Ribbon With Position -->
                    <b-col cols="12">
                        <b-card>
                            <b-card-header><h5>Ribbon With Position</h5></b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col
                                        v-for="(ribbon, index) in ribbonDataPosition"
                                        :key="index"
                                        xl="2" lg="3" md="4"
                                        class="mb-3"
                                    >
                                        <div :class="['h-150', ribbon.bgColor, ribbon.ribbonClass.includes('file') ? 'ribbon-file' : 'ribbon-box']">
                                            <div :class="['ribbon', ribbon.ribbonClass]">
                                                <template v-if="typeof ribbon.text === 'string'">{{ ribbon.text }}</template>
                                                <component v-else :is="ribbon.text" />
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
