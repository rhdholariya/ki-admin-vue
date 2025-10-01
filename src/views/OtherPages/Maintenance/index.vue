<script setup>
import {BContainer} from "bootstrap-vue-next";
import {PhHouse} from "@phosphor-icons/vue";
import {RouterLink} from 'vue-router';
</script>
<template>
    <div class="bg-light-primary maintenance py-5">
        <b-container fluid>
            <div class="overlay-maintenance-card text-center">
                <img
                    alt="Maintenance Image"
                    class="img-fluid"
                    src="/images/pages/OBJECTS.png"
                />
                <h1 class="text-dark fw-semibold mt-4">
                    We are <br/>
                    under Maintenance
                </h1>
                <p class="text-secondary">
                    Someone has kidnapped our site. We are negotiating ransom and will resolve this issue in
                    24/7 hours
                </p>

                <RouterLink
                    to="/dashboard/ecommerce"
                    class="btn btn-lg btn-danger mt-3 rounded-pill d-inline-flex align-items-center justify-content-center gap-1"
                >
                    <PhHouse size="18"/>
                    Back To Home
                </RouterLink>
            </div>
        </b-container>
    </div>
</template>