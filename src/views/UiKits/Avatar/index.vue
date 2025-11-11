<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import ColorAvatar from "@/components/UiKits/Avatar/ColorAvatar.vue";
import ImagesAvatar from "@/components/UiKits/Avatar/ImagesAvatar.vue";
import LightAvatar from "@/components/UiKits/Avatar/LightAvatar.vue";
import OutlineAvatar from "@/components/UiKits/Avatar/OutlineAvatar.vue";
import RadiusAvatar from "@/components/UiKits/Avatar/RadiusAvatar.vue";
import TooltipAvatar from "@/components/UiKits/Avatar/TooltipAvatar.vue";

const breadcrumbItems = {
    title: "Avatar",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Avatar", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>

                <b-row >
                   <ColorAvatar />
                    <LightAvatar />
                    <RadiusAvatar />
                    <OutlineAvatar/>
                    <ImagesAvatar/>
                    <TooltipAvatar />
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
