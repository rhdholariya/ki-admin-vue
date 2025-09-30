<script setup>
import { BContainer, BRow, BCol, BCardBody, BLink } from 'bootstrap-vue-next';
import { PhHouse } from "@phosphor-icons/vue";
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
                            src="/images/background/error-403.png"
                        />

                        <p class="text-secondary fw-medium mb-4">
                            403 Forbidden response status code indicates that the server understands the request
                            but refuses to authorize it.
                        </p>

                        <!-- Back Button styled link -->
                        <b-link
                            to="/dashboard/ecommerce"
                            class="btn btn-primary btn-lg d-inline-flex align-items-center gap-2"
                        >
                            <PhHouse :size="20" weight="bold" />
                            Back To Home
                        </b-link>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
