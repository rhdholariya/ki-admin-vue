<script setup>
import { ref } from "vue";
import { BCard, BCardHeader, BCardBody, BCol, BRow , BListGroupItem , BListGroup } from "bootstrap-vue-next";
import { PhArrowSquareRight, PhLinkBreak } from "@phosphor-icons/vue";

// --- Lists Data ---
const defaultList = ["An item", "A second item", "A third item" , "A fourth item" , "And a fifth one"];
const activeList = [
    { id: 1, text: "An active item" },
    { id: 2, text: "A second item" },
    { id: 3, text: "A third item" },
    { id: 4, text: "A fourth item" },
    { id: 4, text: "And a fifth one" },

];
const linkList = [
    { id: 1, text: "The current link item", href: "#", active: true, disabled: false },
    { id: 2, text: "A second link item", href: "#", active: false, disabled: false },
    { id: 3, text: "A third link item", href: "#", active: false, disabled: true },
    { id: 4, text: "A fourth link item", href: "#", active: false, disabled: true },
    { id: 4, text: "A disabled link item", href: "#", active: false, disabled: true },

];
const buttonList = [
    { id: 1, text: "The current button", active: true, disabled: false },
    { id: 2, text: "A second button item", active: false, disabled: false },
    { id: 3, text: "A third button item", active: false, disabled: true },
    { id: 4, text: "A fourth button item", active: false, disabled: true },
    { id: 5, text: "A disabled button item", active: false, disabled: false },

];
const numberedList = [
    { id: 1, text: "Numbered Item 1", color: "primary", count: 5 },
    { id: 2, text: "Numbered Item 2", color: "secondary", count: 2 },
    { id: 2, text: "Numbered Item 3", color: "success", count: 4 },
];
const horizontalList = [
    { id: 1, items: ["An item", "A second item", "A third item"], className: "" },
    { id: 2, items: ["An item", "A second item" , "A third item"], className: "b-r-1 b-1-secondary bg-white " },
    { id: 3, items: ["An item", "A second item" , "A third item"], className: "b-1-success bg-white" },
    { id: 4, items: ["An item", "A second item" , "A third item"], className: "b-1-danger bg-white" },

];

// --- Active state ---
const activeIndex = ref(0);
const toggleActive = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
const handleLinkClick = (item) => {
  emit("edit-item", item);
};

const emit = defineEmits(["edit-item", "delete-item", "view-item"]);

</script>

<template>
    <b-row>
        <!-- Default Lists -->
        <b-col md="6" xl="4">
            <b-card no-body>
                <b-card-header>
                    <h5>Default Lists</h5>
                </b-card-header>
                <b-card-body>
                    <b-list-group class=" b-r-10 ">
                        <b-list-group-item v-for="(item, idx) in defaultList" :key="idx" >
                            {{ item }}
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Active Items -->
        <b-col md="6" xl="4">
            <b-card no-body>
                <b-card-header>
                    <h5>Active Items</h5>
                </b-card-header>
                <b-card-body>
                    <b-list-group class=" list-items-active b-r-10 ">
                        <b-list-group-item
                            v-for="(item, idx) in activeList"
                            :key="item.id"
                            class="list-group-item "
                            :class="{ active: activeIndex === idx }"
                            @click="toggleActive(idx)"
                            style="cursor: pointer"
                        >
                            {{ item.text }}
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Links -->
        <b-col md="6" xl="4">
            <b-card no-body>
                <b-card-header>
                    <h5>Links</h5>
                </b-card-header>
                <b-card-body>
                    <b-list-group flush class="list-link b-r-10 border">
                        <b-list-group-item v-for="link in linkList" :key="link.id" class="p-0">
                            <a
                                href="javascript:void(0)"
                            class="list-group-item border-0"
                            :class="{ active: link.active, disabled: link.disabled }"
                            @click="!link.disabled && handleLinkClick(link)"
                            >
                            <PhLinkBreak size="16" class="me-2" />
                            {{ link.text }}
                            </a>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Buttons -->
        <b-col md="6" xl="4">
            <b-card no-body>
                <b-card-header class="code-header">
                    <h5>Buttons</h5>
                </b-card-header>
                <b-card-body >
                    <b-list-group flush  class=" list-button b-r-10 border">
                        <b-list-group-item
                            v-for="btn in buttonList"
                            :key="btn.id"
                            class="d-flex align-items-center list-group-item-action"
                            :class="{ active: btn.active }"
                            :disabled="btn.disabled"
                            tag="button"
                        >
                            <PhArrowSquareRight size="16" class="me-2" />
                            {{ btn.text }}
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Numbered -->
        <b-col md="6" xl="4">
            <b-card no-body>
                <b-card-header class="code-header">
                    <h5>Numbered</h5>
                </b-card-header>
                <b-card-body>
                    <b-list-group  class=" list-group-numbered p-1">
                        <b-list-group-item
                            v-for="item in numberedList"
                            :key="item.id"
                            class="d-flex justify-content-between align-items-start"
                            :class="`text-${item.color}`"
                        >
                            <div class="ms-2 w-100">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div class="fw-bold me-1">Subheading</div>
                                    <span class="badge rounded-pill" :class="`text-light-${item.color}`">
                    {{ item.count }}
                  </span>
                                </div>
                                {{ item.text }}
                            </div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Horizontal -->
        <b-col md="6" xl="4">
            <b-card no-body>
                <b-card-header class="code-header">
                    <h5>Horizontal</h5>
                </b-card-header>
                <b-card-body class="list-horizontal d-flex flex-column align-items-center gap-2">
                    <b-list-group
                        v-for="group in horizontalList"
                        :key="group.id"
                        class=" list-group-horizontal"
                    >
                        <b-list-group-item
                            v-for="(item, idx) in group.items"
                            :key="idx"
                            class="b-1-primary bg-light-primary"
                            :class="group.className"
                        >
                            {{ item }}
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
