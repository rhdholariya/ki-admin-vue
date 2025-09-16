<script setup>
import { ref } from "vue";
import {
    BCard,
    BCol,
    BNav,
    BNavItem,
    BRow,
    BCardTitle,
    BCardText,
    BCardImg,
} from "bootstrap-vue-next";

import {
    PhClockCounterClockwise,
    PhDisc,
    PhKeyboard,
    PhStar,
    PhUserCircle,
} from "@phosphor-icons/vue";

const firstTabData = [
    {
        id: "description",
        label: "Description",
        icon: PhUserCircle,
        content: `
      <p>
        The idea is to use <code>:target</code> pseudo class to show tabs, use anchors with fragment identifiers to switch between them.
      </p>
    `,
    },
    {
        id: "howitworks",
        label: "How It Works",
        icon: PhKeyboard,
        content: `
      <ol>
        <li>Show only the last tab.</li>
        <li>If <code>:target</code> matches a tab, show it and hide all following siblings.</li>
        <li>Matches a tab, show it and hide all following siblings.</li>
      </ol>
    `,
    },
    {
        id: "drawbacks",
        label: "Drawbacks",
        icon: PhDisc,
        content: `
      <p>
        The idea is to use <code>:target</code> pseudo class to show tabs, use anchors with fragment identifiers to switch between them.
      </p>
    `,
    },
];

const secondTabData = [
    {
        id: "features",
        label: "Features",
        icon: PhDisc,
        content: `
      <p>
        The idea is to use <code>:target</code> pseudo class to show tabs, use anchors with fragment identifiers to switch between them.
      </p>
    `,
    },
    {
        id: "history",
        label: "History",
        icon: PhClockCounterClockwise,
        content: `
      <ol>
        <li>Show only the last tab.</li>
        <li>If <code>:target</code> matches a tab, show it and hide all following siblings.</li>
        <li>Matches a tab, show it and hide all following siblings.</li>
      </ol>
    `,
    },
    {
        id: "reviews",
        label: "Reviews",
        icon: PhStar,
        content: `
      <p>
        The idea is to use <code>:target</code> pseudo class to show tabs, use anchors with fragment identifiers to switch between them.
      </p>
    `,
    },
];

// Reactive active tab states
const activeFirst = ref(firstTabData[0].id);
const activeSecond = ref(secondTabData[0].id);
</script>

<template>
    <b-row>
        <!-- First Tab Card -->
        <b-col xl="6">
            <b-card class="hover-effect equal-card tab-card">
                <!-- Tab Header -->
                <template #header>
                    <b-nav tabs class="tab-light-primary">
                        <b-nav-item
                            v-for="{ id, label, icon: Icon } in firstTabData"
                            :key="id"
                            :active="activeFirst === id"
                            @click="activeFirst = id"
                        >
                            <component :is="Icon" size="16" class="me-1" />
                            {{ label }}
                        </b-nav-item>
                    </b-nav>
                </template>

                <!-- Tab Content -->
                <div class="pt-3">
                    <div
                        v-for="{ id, content } in firstTabData"
                        :key="id"
                        v-show="activeFirst === id"
                    >
                        <div v-html="content" />
                    </div>
                </div>
            </b-card>
        </b-col>

        <!-- Middle Card -->
        <b-col xl="6">
            <b-card class="mb-3 hover-effect">
                <b-row>
                    <b-col md="6" xl="8">
                        <b-card-title tag="h5">Card Title</b-card-title>
                        <b-card-text>
                            This is a wider card with supporting text with supporting little bit longer below
                            as a natural lead-in to additional content. This content is a little bit longer.
                        </b-card-text>
                        <b-card-text>
                            <small class="text-body-secondary">Last updated 3 min&#39;s ago</small>
                        </b-card-text>
                    </b-col>
                    <b-col md="6" xl="4">
                        <b-card-img
                            src="/images/blog-app/09.jpg"
                            class="img-fluid object-cover"
                            alt="..."
                        />
                    </b-col>
                </b-row>
            </b-card>
        </b-col>

        <!-- Second Tab Card -->
        <b-col xl="6">
            <b-card class="hover-effect equal-card tab-card">
                <!-- Tab Header -->
                <template #header>
                    <b-nav tabs class="tab-primary bg-primary p-1">
                        <b-nav-item
                            v-for="{ id, label, icon: Icon } in secondTabData"
                            :key="id"
                            :active="activeSecond === id"
                            @click="activeSecond = id"
                        >
                            <component :is="Icon" size="16" class="me-1" />
                            {{ label }}
                        </b-nav-item>
                    </b-nav>
                </template>

                <!-- Tab Content -->
                <div class="pt-3">
                    <div
                        v-for="{ id, content } in secondTabData"
                        :key="id"
                        v-show="activeSecond === id"
                    >
                        <div v-html="content" />
                    </div>
                </div>
            </b-card>
        </b-col>
    </b-row>
</template>
