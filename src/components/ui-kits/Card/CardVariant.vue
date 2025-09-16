<script setup>
import {BCard, BCol, BRow} from "bootstrap-vue-next";
import {
    PhAlarm,
    PhBug,
    PhBriefcase,
    PhMedal
} from "@phosphor-icons/vue";

const cardData = [
    {
        id: "icon-card-1",
        className: "hover-effect card-primary",
        icon: PhAlarm,
        heading: "Card With icon",
        content:
            "With supporting text below lead-in to additional content below as a natural.",
    },
    {
        id: "icon-card-2",
        className: "hover-effect card-secondary",
        icon: PhBug,
        heading: "Card With icon",
        content:
            "With supporting text below lead-in to additional content below as a natural.",
    },
    {
        id: "icon-card-3",
        className: "hover-effect card-light-primary",
        icon: PhBriefcase,
        heading: "Card With icon",
        content:
            "With supporting text below lead-in to additional content below as a natural.",
    },
    {
        id: "icon-card-4",
        className: "hover-effect card-light-secondary",
        icon: PhMedal,
        heading: "Card With icon",
        content:
            "With supporting text below lead-in to additional content below as a natural.",
    },
    {
        id: "border-card-1",
        className: "hover-effect border-primary border-top border-4",
        heading: "Card With Top border",
        content:
            "With supporting text below lead-in to additional content below as a natural.",
    },
    {
        id: "border-card-2",
        className: "hover-effect border-secondary border-bottom border-4",
        heading: "Card With Bottom border",
        content:
            "With supporting text below lead-in to additional content below as a natural.",
        headingAfterText: true,
    },
    {
        id: "border-card-3",
        className: "hover-effect border-success border-start border-4",
        heading: "Card With left border",
        content:
            "With supporting text below lead-in to additional content below as a natural.",
        headingAfterText: true,
    },
    {
        id: "border-card-4",
        className: "hover-effect border-danger border-end border-4",
        heading: "Card With right border",
        content:
            "With supporting text below lead-in to additional content below as a natural.",
        headingAfterText: true,
    },
];
</script>

<template>

    <b-col
        v-for="({ id, className, icon: Icon, heading, content, headingAfterText }) in cardData"
        :key="id"
        md="6"
        xl="3"
    >
        <b-card :class="className">
            <component
                v-if="Icon"
                :is="Icon"
                size="50"
                class="icon-bg text-light"
            />
            <h6 v-if="!headingAfterText">{{ heading }}</h6>
            <p>{{ content }}</p>
            <h6 v-if="headingAfterText" class="mb-0 mt-2">{{ heading }}</h6>
        </b-card>
    </b-col>
</template>
