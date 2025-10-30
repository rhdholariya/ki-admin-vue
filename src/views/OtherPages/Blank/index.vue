<script setup>
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BCardFooter, BButton } from "bootstrap-vue-next";
import AppLayout from "@/views/AppLayout.vue";
import {PhNotepad} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";

const breadcrumbItems = {
    title: "Blank",
    items: [
        { label: "Other Pages", icon: PhNotepad },
        { label: "Blank", active: true },
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-container fluid>
            <b-row>
                <b-col cols="12">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Default Card</h5>
                        </b-card-header>
                        <b-card-body>
                            <h6>Where does it come from ?</h6>
                            <p class="text-secondary">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                                a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                                passage, and going through the cites of the word in classical literature,
                                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                                ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
                            </p>
                        </b-card-body>
                        <b-card-footer class="d-flex justify-content-between align-items-center">
                            <span class="text-secondary pt-2">1 days ago</span>
                            <b-button variant="primary">Read More</b-button>
                        </b-card-footer>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
        </main>
    </AppLayout>
</template>
