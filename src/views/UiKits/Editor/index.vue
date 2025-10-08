<script setup>
import {  BContainer} from 'bootstrap-vue-next';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import AppLayout from '@/views/AppLayout.vue';
import TextEditor from '@/components/UiKits/Editor/TextEditor.vue';
import {PhBriefcase} from "@phosphor-icons/vue";



// Breadcrumb
const breadcrumbItems = {
    title: 'Editor',
    items: [
        { label: 'Ui-kits', icon: PhBriefcase },
        { label: 'Editor', active: true },
    ],
};


</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
            <Breadcrumb :breadcrumb="breadcrumbItems" />
                 <TextEditor />
            </b-container>
        </main>
    </AppLayout>
</template>
