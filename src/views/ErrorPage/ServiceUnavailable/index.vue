<script setup>
import { BContainer, BRow, BCol, BCardBody } from 'bootstrap-vue-next';
import { PhHouse } from "@phosphor-icons/vue";
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="error-container py-5">
        <b-container>
            <b-row class="justify-content-center">
                <b-col lg="8">
                    <!-- Card Body -->
                    <b-card-body class="text-center">
                        <img
                            alt="503 Service Unavailable"
                            class="img-fluid mb-4"
                            src="/images/background/error-503.png"
                        />

                        <p class="text-secondary fw-medium mb-4">
                            503 status code (Service Unavailable) typically indicates a performance
                            issue on the origin server.
                        </p>

                        <!-- Back Button styled link -->
                        <RouterLink
                            to="/dashboard/ecommerce"
                            class="btn btn-primary btn-lg d-inline-flex align-items-center gap-2"
                        >
                            <PhHouse :size="20" weight="bold" />
                            Back To Home
                        </RouterLink>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
