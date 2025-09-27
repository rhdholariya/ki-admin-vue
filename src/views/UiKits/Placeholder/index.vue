<script setup>
import {PhBriefcase} from "@phosphor-icons/vue";
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BButton,
    BPlaceholder,
} from "bootstrap-vue-next";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";

// Breadcrumb
const breadcrumbItems = {
    title: "Shadow",
    items: [
        {label: "Ui Kits", icon: PhBriefcase},
        {label: "Shadow", active: true}
    ]
};

// === Card Data
const cards1 = [
    {
        id: 1,
        img: "/images/placeholder/placeholder-3.jpg",
        title: "Card title",
        text: "Some quick example text to build on the card title and make up content.",
        placeholder: true,
    },
    {
        id: 2,
        img: "/images/placeholder/placholder-1.jpg",
        title: "Card title",
        text: "Some quick example text to build on the card title the card's content.",
    },
    {id: 3, img: "/images/placeholder/placholder-2.jpg", skeleton: true},
    {
        id: 4,
        img: "/images/placeholder/placeholder-4.jpg",
        skeleton: true,
        colored: true,
    },
];

// === Placeholder Variants
const placeholderVariants = [
    "",
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-info",
    "bg-light",
    "bg-dark",
];

// === Placeholder Sizes
const placeholderSizes = ["placeholder-lg", "", "placeholder-sm", "placeholder-xs"];
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
            <b-container fluid>
                <b-row class="list-item">
                    <!-- Card Placeholder -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Card Placeholder</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="card-placeholder">
                                    <b-row>
                                        <b-col
                                            v-for="({ id, img, title, text, placeholder, skeleton, colored }) in cards1"
                                            :key="id"
                                            sm="6"
                                            xxl="3"
                                        >
                                            <b-card class="equal-card -light" :aria-hidden="skeleton">
                                                <div :class="placeholder ? 'placeholder-glow' : ''">
                                                    <img
                                                        :src="img"
                                                        class="card-img-top"
                                                        :class="placeholder ? 'placeholder' : ''"
                                                        alt="..."
                                                    />
                                                </div>
                                                <b-card-body>
                                                    <template v-if="skeleton">
                                                        <b-placeholder class="placeholder-glow w-50"/>
                                                        <p class="placeholder-glow">
                                                            <b-placeholder
                                                                v-for="(col, i) in [7, 4, 4, 6, 8]"
                                                                :key="i"
                                                                tag="span"
                                                                :class="`placeholder col-${col} ${colored ? 'bg-secondary' : ''}`"
                                                            />
                                                        </p>
                                                        <div class="d-flex gap-2">
                                                            <b-button disabled class="w-50 bg-secondary b-secondary">
                                                                <b-placeholder class="w-100"/>
                                                            </b-button>
                                                            <b-button
                                                                disabled
                                                                :class="`w-50 ${colored ? 'bg-primary b-primary' : 'invisible'}`"
                                                            >
                                                                <b-placeholder class="w-100"/>
                                                            </b-button>
                                                        </div>
                                                    </template>
                                                    <template v-else>
                                                        <h5 class="card-title">{{ title }}</h5>
                                                        <p class="card-text">{{ text }}</p>
                                                        <b-button variant="primary">Go somewhere</b-button>
                                                    </template>
                                                </b-card-body>
                                            </b-card>
                                        </b-col>
                                    </b-row>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Width Example -->
                    <b-col xl="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Width</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-flex flex-column gap-3">
                                    <b-placeholder class="col-6"/>
                                    <b-placeholder class="w-75"/>
                                    <b-placeholder style="width:25%"/>
                                </div>
                            </b-card-body>
                        </b-card>

                        <!-- Animation -->
                        <b-card no-body>
                            <b-card-header>
                                <h5>Animation</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-flex flex-column gap-4">
                                    <p class="placeholder-glow">
                                        <b-placeholder class="col-12"/>
                                    </p>
                                    <p class="placeholder-wave">
                                        <b-placeholder class="col-12"/>
                                    </p>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Color Variants -->
                    <b-col xl="6">
                        <b-card class="equal-card" no-body>
                            <b-card-header>
                                <h5>Color Variant</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-flex flex-column">
                                    <p
                                        v-for="(variant, index) in placeholderVariants"
                                        :key="index"
                                        class="placeholder-glow"
                                    >
                                        <b-placeholder :class="`col-12 ${variant}`"/>
                                    </p>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Sizing -->
                    <b-col cols="12">
                        <b-card class="equal-card" no-body>
                            <b-card-header>
                                <h5>Sizing</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-flex flex-column gap-3">
                                    <b-placeholder
                                        v-for="(size, index) in placeholderSizes"
                                        :key="index"
                                        :class="`col-12 ${size}`"
                                    />
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
