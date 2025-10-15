<script setup>
import { PhBriefcase } from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody
} from "bootstrap-vue-next";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

// Breadcrumb
const breadcrumbItems = {
    title: "Shadow",
    items: [
        { label: "Ui Kits", icon: PhBriefcase },
        { label: "Shadow", active: true }
    ]
};

// Box shadow 1–24
const boxShadows = Array.from({ length: 24 }, (_, i) => i + 1);

// Themed shadows
const themedShadows = [
    { name: "Primary", className: "box-shadow-primary" },
    { name: "Secondary", className: "box-shadow-secondary" },
    { name: "Success", className: "box-shadow-success" },
    { name: "Danger", className: "box-shadow-danger" },
    { name: "Warning", className: "box-shadow-warning text-dark" },
    { name: "Info", className: "box-shadow-info" },
    { name: "Light", className: "box-shadow-light text-dark" },
    { name: "Dark", className: "box-shadow-dark" }
];

// Copy handler
const handleCopy = (className) => {
    navigator.clipboard.writeText(className);
    Toastify({
        text: "Class name copied to the clipboard successfully",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: { background: "rgba(var(--bs-success-rgb),1)" }
    }).showToast();
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems" />

            <b-container fluid>
                <b-row>
                    <!-- Box Shadow -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Box Shadow</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-container fluid>
                                    <b-row>
                                        <b-col
                                            v-for="num in boxShadows"
                                            :key="num"
                                            sm="4"
                                            lg="3"
                                            xxl="2"
                                            class="mb-4"
                                        >
                                            <div
                                                :class="`box-shadow-box box-shadow-${num} f-s-15`"
                                                @click="handleCopy(`box-shadow-${num}`)"
                                                style="cursor: pointer;"
                                            >
                                                Box-shadow-{{ num }}
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Themed Shadows -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Box Colour Shadow</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-container fluid>
                                    <b-row>
                                        <b-col
                                            v-for="shadow in themedShadows"
                                            :key="shadow.name"
                                            sm="3"
                                            lg="2"
                                            class="mb-4"
                                        >
                                            <div
                                                class="box-shadow-box box-shadow-25"
                                                :class="shadow.className"
                                                @click="handleCopy(shadow.className)"
                                                style="cursor: pointer;"
                                            >
                                                {{ shadow.name }}
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
