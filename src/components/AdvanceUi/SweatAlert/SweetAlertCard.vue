<!-- SweetAlertCard.vue -->
<script setup>
import { BCard, BCardBody, BButton } from 'bootstrap-vue-next'
</script>

<template>
  <b-card class="equal-card" no-body>
    <template #header>
      <h5>{{ title }}</h5>
      <p class="mb-0 text-secondary">
        if you want to keep this sweet alert then you can keep it using
        <span class="text-danger">{{ description }}</span>
      </p>
    </template>
    <b-card-body>
      <b-button :variant="color" class="btn-md" @click="onClick">
        Click Now
      </b-button>
    </b-card-body>
  </b-card>
</template>
