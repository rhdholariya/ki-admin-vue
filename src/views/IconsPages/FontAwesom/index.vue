<script setup>
import {ref, computed} from "vue";
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
} from "bootstrap-vue-next";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhShapes} from "@phosphor-icons/vue";
import {IconSearch} from "@tabler/icons-vue";

library.add(fas, far, fab);

const ICON_CONFIG = {
    downloadSize: "50",
    color: "#15264b",
    iconSize: "2xl",
};

const createIconListFromPack = (iconPack, packName) => {
    return Object.keys(iconPack).map((iconName) => ({
        id: `${packName}-${iconName}`,
        originalName: iconName,
        pack: packName,
        iconObject: iconPack[iconName],
        displayName: iconName.replace(/^fa/, "").replace(/([A-Z])/g, " $1").trim(),
    }));
};

const searchValue = ref("");

const allIconPacks = [
    {icons: fas, name: "fas"},
    {icons: far, name: "far"},
    {icons: fab, name: "fab"},
];

const iconListWithPack = allIconPacks.flatMap(({icons, name}) =>
    createIconListFromPack(icons, name)
);

const filteredIconList = computed(() => {
    const searchTerm = searchValue.value.toLowerCase().trim();

    if (!searchTerm) {
        return iconListWithPack;
    }

    return iconListWithPack.filter(
        (icon) =>
            icon.originalName.toLowerCase().includes(searchTerm) ||
            icon.displayName.toLowerCase().includes(searchTerm)
    );
});

const copyIcon = async (iconName, iconPack) => {
    try {
        const iconCode = `<FontAwesomeIcon :icon="['${iconPack}', '${iconName}']" size="${ICON_CONFIG.downloadSize}" color="${ICON_CONFIG.color}" />`;

        await navigator.clipboard.writeText(iconCode);

        Toastify({
            text: "Copied to the clipboard successfully",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "rgba(var(--success),1)",
            },
        }).showToast();
    } catch (error) {
        console.error("Failed to copy icon to clipboard:", error);
        Toastify({
            text: "Failed to copy to clipboard",
            duration: 3000,
            style: {
                background: "rgba(var(--danger),1)",
            },
        }).showToast();
    }
};

const breadcrumbItems = computed(() => ({
    title: "Fontawesome",
    items: [
        {label: " Icons ", icon: PhShapes},
        {label: "Fontawesome", active: true},
    ],
}));
</script>

<template>
    <AppLayout>
        <b-container fluid>
            <main>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>

                <b-row>
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <b-row>
                                    <b-col md="4">
                                        <div
                                            class="search-bar app-form app-icon-form position-relative"
                                        >
                                            <input
                                                type="search"
                                                class="form-control"
                                                placeholder="Type to search"
                                                v-model="searchValue"
                                            />
                                            <IconSearch size="18" class=""/>
                                        </div>
                                    </b-col>
                                    <div class="col-md-8 text-end pt-2"/>
                                </b-row>
                            </b-card-header>

                            <b-card-body
                                class="d-flex justify-content-between align-items-center"
                            >
                                <ul class="icon-list space-top-icon">
                                    <li
                                        v-for="icon in filteredIconList"
                                        :key="icon.id"
                                        class="icon-box"
                                        @click="copyIcon(icon.originalName, icon.pack)"
                                    >
                                        <FontAwesomeIcon
                                            class="fontawesome-icons"
                                            size="2xl"
                                            :icon="icon.iconObject"
                                        />
                                        <div class="icon-box-codes d-flex flex-column">
                                            <strong class="text-capitalize">
                                                {{ icon.displayName }}
                                            </strong>
                                            <code>{{ icon.originalName }} ({{ icon.pack }})</code>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </main>
        </b-container>
    </AppLayout>
</template>
