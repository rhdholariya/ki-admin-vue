<script setup>

import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
} from "bootstrap-vue-next";

import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhCardholder } from "@phosphor-icons/vue";

// Breadcrumb
const breadcrumbItems = {
    title: "Range Slider",
    items: [
        { label: "Forms elements", icon: PhCardholder },
        { label: "Range slider", active: true },
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems" />
            <b-container fluid>
                <BRow>
                    <!-- Bootstrap Range Sliders -->
                    <BCol md="12" xl="6">
                        <BCard>
                            <BCardHeader><h5>Bootstrap Range Sliders</h5></BCardHeader>
                            <BCardBody>
                                <BRow>

                                </BRow>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </b-container>
        </main>
    </AppLayout>
</template>