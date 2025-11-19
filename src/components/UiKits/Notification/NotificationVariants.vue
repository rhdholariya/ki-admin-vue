<script setup>
import { BCard, BCardHeader, BCardBody, BCol, BRow, BButton } from "bootstrap-vue-next";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const NotificationPositions = [
    { label: "Top", value: "top", variant: "light-primary", bgColor: "rgba(var(--primary),1)" },
    { label: "Left", value: "left", variant: "light-success", bgColor: "rgba(var(--success),1)" },
    { label: "Right", value: "right", variant: "light-info", bgColor: "rgba(var(--info),1)" },
    { label: "Bottom", value: "bottom", variant: "light-warning", bgColor: "rgba(var(--warning),1)" },
    { label: "Center", value: "center", variant: "light-secondary", bgColor: "rgba(var(--secondary),1)" },
];

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

const showToast = (message, background = "rgba(0,0,0,0.8)", position = "top") => {
    Toastify({
        text: message,
        duration: 3000,
        gravity: position === "top" || position === "bottom" ? position : "top",
        position: position === "left" || position === "right" ? position : "center",
        style: { background },
    }).showToast();
};
</script>

<template>

        <b-col cols="12" class="mb-3">
            <b-card no-body>
                <b-card-header class="code-header">
                    <h5>Position Notification</h5>
                    <p>It is very easy to customize and used in website applications.</p>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-button
                            v-for="pos in NotificationPositions"
                            :key="pos.value"
                            :variant="pos.variant"
                            @click="showToast('Welcome Back! This is a Toast Notification', pos.bgColor, pos.value)"
                        >
                            {{ pos.label }}
                        </b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col cols="12">
            <b-card no-body>
                <b-card-header class="code-header">
                    <h5>Color Notification</h5>
                    <p>It is very easy to customize and used in website applications.</p>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-button
                            v-for="toast in notificationsVariantsData"
                            :key="toast.id"
                            :variant="toast.ButtonColor"
                            @click="showToast(toast.message, `rgba(var(--${toast.type}),1)`, 'top')"
                        >
                            {{ toast.type.charAt(0).toUpperCase() + toast.type.slice(1) }}
                        </b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>

</template>
