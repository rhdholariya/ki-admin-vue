<script setup>
import { BCard, BCardBody, BButton } from 'bootstrap-vue-next'
</script>

<template>
  <b-card class="overflow-hidden" no-body>
    <b-card-body class="p-0">
      <div class="meeting-call-box bg-gradient-mode">
        <img
            alt="img"
            class="img-fluid position-relative z-1"
            src="/images/dashboard/project/meeting-avtar.png"
        />
        <img
            alt="img"
            class="img-fluid bg-vector-img"
            src="/images/dashboard/project/bg-round.png"
        />
        <img
            alt="img"
            class="img-fluid bg-vector-img1"
            src="/images/dashboard/project/bg-round2.png"
        />

        <div class="meeting-details-box d-flex align-items-center">
          <div class="h-40 w-40 d-flex-center b-r-50 overflow-hidden bg-dark flex-shrink-0">
            <img
                alt="image"
                class="img-fluid"
                src="/images/avatar/2.png"
            />
          </div>
          <div class="flex-grow-1 ps-2 text-start">
            <div class="fw-medium txt-ellipsis-1">Bette Hagenes</div>
            <div class="text-muted f-s-12 txt-ellipsis-1">
              Web Developer
            </div>
          </div>
          <b-button variant="success" size="sm">
            Join
          </b-button>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

