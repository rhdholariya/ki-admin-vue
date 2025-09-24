<script setup>
import { ref } from "vue";
import { BCol, BRow, BCard, BCardHeader, BCardBody, BTabs, BTab } from "bootstrap-vue-next";

// ---- Avatar Tabs Data ----
const avatarTabItems = [
    {
        id: "home",
        label: "Guthry",
        position: "Sales Manager",
        avatarSrc: "/images/avatar/5.png",
        content: [
            {
                type: "text",
                value:
                    "The idea is to use :target pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them."
            }
        ]
    },
    {
        id: "profile",
        label: "Olive Yew",
        position: "Account Manager",
        avatarSrc: "/images/avatar/1.png",
        content: [
            {
                type: "list",
                items: [
                    "Show only the last tab.",
                    "If :target matches a tab, show it and hide all following siblings.",
                    "Matches a tab, show it and hide all following siblings."
                ]
            }
        ]
    },
    {
        id: "contact",
        label: "Lily",
        position: "Manager",
        avatarSrc: "/images/avatar/14.png",
        content: [
            {
                type: "text",
                value:
                    "The idea is to use :target pseudoclass to show tabs, use anchors with fragment identifiers to switch between them."
            }
        ]
    }
];

// ---- Flag Tabs Data (using flag-icons CSS classes) ----
const flagTabItems = [
    {
        id: "home",
        label: "USA",
        flagClass: "fi fi-us",
        content: [
            {
                type: "text",
                value:
                    "The idea is to use :target pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them."
            }
        ]
    },
    {
        id: "profile",
        label: "GBR",
        flagClass: "fi fi-gb",
        content: [
            {
                type: "list",
                items: [
                    "Show only the last tab.",
                    "If :target matches a tab, show it and hide all following siblings."
                ]
            }
        ]
    },
    {
        id: "contact",
        label: "DEU",
        flagClass: "fi fi-de",
        content: [
            {
                type: "text",
                value:
                    "The idea is to use :target pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them."
            }
        ]
    },
    {
        id: "about",
        label: "LBR",
        flagClass: "fi fi-lr",
        content: [
            {
                type: "list",
                items: [
                    "Show only the last tab.",
                    "If :target matches a tab, show it and hide all following siblings."
                ]
            }
        ]
    }
];

const activeAvatarTab = ref(avatarTabItems[0].id);
const activeFlagTab = ref(flagTabItems[0].id);
</script>

<template>
    <b-row>
        <!-- Avatar Tabs -->
        <b-col lg="6">
            <b-card>
                <b-card-header>
                    <h5>Avatar-based Tabs</h5>
                </b-card-header>
                <b-card-body>
                    <b-tabs v-model="activeAvatarTab" nav-class="nav nav-tabs tab-light-secondary gap-2">
                        <b-tab v-for="tab in avatarTabItems" :key="tab.id" :active="tab.id === activeAvatarTab">
                            <template #title>
                                <div class="d-flex align-items-center gap-2">
                  <span class="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                    <img :src="tab.avatarSrc" class="img-fluid" />
                  </span>
                                    <div>
                                        <div class="text-body f-s-16 f-w-600 text-dark">{{ tab.label }}</div>
                                        <div class="f-s-14">{{ tab.position }}</div>
                                    </div>
                                </div>
                            </template>

                            <!-- Render content without v-html -->
                            <div v-for="(item, i) in tab.content" :key="i" class="mt-2">
                                <p v-if="item.type === 'text'" class="mb-0">{{ item.value }}</p>
                                <ol v-else-if="item.type === 'list'">
                                    <li v-for="(li, index) in item.items" :key="index">{{ li }}</li>
                                </ol>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Flag Tabs -->
        <b-col lg="6">
            <b-card>
                <b-card-header>
                    <h5>Flag-based Tabs</h5>
                </b-card-header>
                <b-card-body>
                    <b-tabs v-model="activeFlagTab" nav-class="nav nav-tabs tab-light-secondary gap-2">
                        <b-tab v-for="tab in flagTabItems" :key="tab.id" :active="tab.id === activeFlagTab">
                            <template #title>
                                <div class="d-flex align-items-center gap-2">
                                    <i :class="tab.flagClass" style="font-size: 20px"></i>
                                    <span>{{ tab.label }}</span>
                                </div>
                            </template>

                            <!-- Render content without v-html -->
                            <div v-for="(item, i) in tab.content" :key="i" class="mt-2">
                                <p v-if="item.type === 'text'" class="mb-0">{{ item.value }}</p>
                                <ol v-else-if="item.type === 'list'">
                                    <li v-for="(li, index) in item.items" :key="index">{{ li }}</li>
                                </ol>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
