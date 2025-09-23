<script setup>
import { ref } from "vue";
import {
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BRow,
    BButton,
    BToast,
} from "bootstrap-vue-next";

// Toast positions
const NotificationPositions = [
    { label: "Top", value: "top", variant: "light-primary" },
    { label: "Left", value: "left", variant: "light-success" },
    { label: "Right", value: "right", variant: "light-info" },
    { label: "Bottom", value: "bottom", variant: "light-warning" },
    { label: "Center", value: "center", variant: "light-secondary" },
];

// Toast variants
const notificationsVariantsData = [
    { id: 1, type: "primary", message: "This is a Primary toast message.", ButtonColor: "light-primary" },
    { id: 2, type: "secondary", message: "This is a Secondary toast message.", ButtonColor: "light-secondary" },
    { id: 3, type: "success", message: "This is a Success toast message.", ButtonColor: "light-success" },
    { id: 4, type: "danger", message: "This is a Danger toast message.", ButtonColor: "light-danger" },
    { id: 5, type: "warning", message: "This is a Warning toast message.", ButtonColor: "light-warning" },
    { id: 6, type: "info", message: "This is an Info toast message.", ButtonColor: "light-info" },
    { id: 7, type: "light", message: "This is a Light toast message.", ButtonColor: "light-light" },
    { id: 8, type: "dark", message: "This is a Dark toast message.", ButtonColor: "light-dark" },
];

// State: array of visible toast IDs/keys
const visibleToasts = ref([]);

// Show toast
const handleShowToast = (key) => {
    if (!visibleToasts.value.includes(key)) {
        visibleToasts.value.push(key);
        setTimeout(() => handleCloseToast(key), 3000);
    }
};

// Close toast
const handleCloseToast = (key) => {
    visibleToasts.value = visibleToasts.value.filter((toastId) => toastId !== key);
};
</script>

<template>
    <b-row>
        <!-- Position Notification Card -->
        <b-col xs="12">
            <b-card>
                <b-card-header class="code-header">
                    <h5>Position Notification</h5>
                    <p>It is Very Easy to Customize, and it is used in website applications.</p>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-button
                            v-for="pos in NotificationPositions"
                            :key="pos.value"
                            :variant="pos.variant"
                            @click="handleShowToast(pos.value)"
                        >
                            {{ pos.label }}
                        </b-button>
                    </div>

                    <!-- Toasts for position -->
                    <div class="toast-container position-fixed top-0 end-0 p-3">
                        <template v-for="pos in NotificationPositions" :key="pos.value">
                            <b-toast
                                v-if="visibleToasts.includes(pos.value)"
                                static
                                no-auto-hide
                                solid
                            >
                                <template #header>
                                    {{ pos.label }}
                                    <button
                                        type="button"
                                        class="btn-close ms-auto"
                                        @click="handleCloseToast(pos.value)"
                                        aria-label="Close"
                                    ></button>
                                </template>
                                <div class="toast-body">
                                    Welcome Back! This is a Toast Notification
                                </div>
                            </b-toast>
                        </template>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Color Notification Card -->
        <b-col xs="12" class="mt-3">
            <b-card>
                <b-card-header class="code-header">
                    <h5>Color Notification</h5>
                    <p>It is Very Easy to Customize, and it uses in website application.</p>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-button
                            v-for="toast in notificationsVariantsData"
                            :key="toast.id"
                            :variant="toast.ButtonColor"
                            @click="handleShowToast(toast.id)"
                        >
                            {{ toast.type.charAt(0).toUpperCase() + toast.type.slice(1) }}
                        </b-button>
                    </div>

                    <!-- Toasts for colors -->
                    <div class="toast-container position-fixed top-0 end-0 p-3">
                        <template v-for="toast in notificationsVariantsData" :key="toast.id">
                            <b-toast
                                v-if="visibleToasts.includes(toast.id)"
                                :variant="toast.type"
                                static
                                no-auto-hide
                                solid
                            >
                                <template #header>
                                    {{ toast.type.charAt(0).toUpperCase() + toast.type.slice(1) }}
                                    <button
                                        type="button"
                                        class="btn-close ms-auto"
                                        @click="handleCloseToast(toast.id)"
                                        aria-label="Close"
                                    ></button>
                                </template>
                                <div class="toast-body">
                                    {{ toast.message }}
                                </div>
                            </b-toast>
                        </template>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
