<script setup>
import { PhCardholder} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import BasicFileUpload from "@/components/FormsElements/FileUpload/BasicFileUpload.vue";
import {BCol, BContainer, BRow} from "bootstrap-vue-next";
import FilepondUploader from "@/components/FormsElements/FileUpload/FilepondUploader.vue";
import CircleUploader from "@/components/FormsElements/FileUpload/CircleUploader.vue";
import SolidFileUpload from "@/components/FormsElements/FileUpload/SolidFileUpload.vue";
import LightFileUpload from "@/components/FormsElements/FileUpload/LightFileUpload.vue";

const breadcrumbItems = {
    title: "File Upload",
    items: [
        {label: "Forms elements ", icon: PhCardholder},
        {label: "File Upload", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>
                    <b-col cols="12">
                        <BasicFileUpload/>
                    </b-col>
                    <b-col xl="8">
                        <FilepondUploader/>
                    </b-col>
                    <b-col xl="4">
                        <CircleUploader/>
                    </b-col>
                    <b-col cols="12">
                        <SolidFileUpload/>
                    </b-col>
                    <b-col cols="12">
                        <LightFileUpload/>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
