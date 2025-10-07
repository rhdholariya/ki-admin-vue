<script setup>
import {BRow, BContainer, BCol} from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhHandHeart} from "@phosphor-icons/vue";
import NumberWizard from "@/components/ReadyToUse/FormWizards/NumberWizard.vue";
import IconWizards from "@/components/ReadyToUse/FormWizards/IconWizards.vue";
import VerticalNumberWizard from "@/components/ReadyToUse/FormWizards/VerticalNumberWizard.vue";
import VerticalIconWizards from "@/components/ReadyToUse/FormWizards/VerticalIconWizards.vue";


// Breadcrumb data
const breadcrumbItems = {
    title: "form wizards",
    items: [
        {label: "Ready To Use", icon: PhHandHeart},
        {label: "form wizards", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <b-row>
                    <b-col lg="6" cols="12">
                     <NumberWizard />
                    </b-col>
                    <b-col lg="6" cols="12">
                        <IconWizards />
                    </b-col>
                    <b-col lg="6" cols="12">
                        <VerticalNumberWizard />
                    </b-col>
                    <b-col lg="6" cols="12">
                        <VerticalIconWizards />
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
