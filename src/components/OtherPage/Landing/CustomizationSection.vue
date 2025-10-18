<template>
  <section class="options-section section-lg-space-x" id="Customization">
    <b-container>
      <b-row>
        <b-col xl="8" offset-xl="2">
          <div class="landing-title text-md-center">
            <b-badge class="title-badge mb-3" variant="light-primary">
              <IconSettings :size="14" class="align-text-bottom me-1" />
              Customization
            </b-badge>
            <h2>
              <span class="highlight-title">Customization</span> and
              preview
            </h2>
            <p>
              Allow users to personalize settings or design elements in
              real-time, providing an instant preview of the changes before
              finalizing, ensuring a seamless and tailored experience.
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col lg="7">
          <b-card class="sidebar-option-card">
            <b-card-body>
              <div class="text-center">
                <h2 class="mb-5 fw-semibold">
                  Sidebar Customization Made Simple
                </h2>
                <img
                    src="/images/landing/sidebar.png"
                    alt="Sidebar Customization"
                    class="img-fluid"
                />
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="5">
          <b-card class="equal-card color-hint-card">
            <b-card-body>
              <h3 class="text-primary text-center">
                Perfect Your Style with Color Variants!
              </h3>
              <img
                  src="/images/landing/coour-theme.png"
                  alt="Color Variants"
                  class="img-fluid"
              />
              <div class="text-center mt-3">
                <b-button
                    href="https://themeforest.net/user/la-themes"
                    target="_blank"
                    variant="primary"
                >
                  Buy Now
                </b-button>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4">
          <b-card class="layout-option-card">
            <b-card-body class="text-center">
              <h3 class="text-dark mb-3">
                One-Click and change your
                <span class="text-primary"> Layout.</span>
              </h3>
              <img
                  src="/images/landing/layout.png"
                  alt="Layout Options"
                  class="img-fluid"
              />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4">
          <b-card class="equal-card layout-option-card">
            <b-card-body>
              <div class="text-center">
                <img
                    src="/images/landing/typography.png"
                    alt="Typography"
                    class="img-fluid"
                />
              </div>
              <div class="p-3 text-center">
                <h4 class="text-primary fw-semibold">
                  Verified Our Typography
                </h4>
                <p class="f-s-16 text-dark mt-2">
                  Experience perfectly crafted fonts that enhance your design!
                </p>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4">
          <b-card class="equal-card speed-performance-card">
            <b-card-body>
              <div class="speed-rocket">
                <img
                    src="/images/landing/speed-bg.png"
                    alt="Speed Background"
                    class="w-200"
                />
              </div>
              <div class="w-100 position-relative">
                <div class="performance-content text-center">
                  <h5>
                    <span>A</span> Grade
                  </h5>
                  <div class="my-3">
                    <h1 class="text-success fw-bold">97%</h1>
                  </div>
                  <p class="text-dark fw-medium txt-ellipsis-1">
                    page loading speed
                  </p>
                </div>
                <div class="speedometer-img">
                  <img
                      src="/images/landing/speed-bg-2.png"
                      alt="Speedometer"
                  />
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup>
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BBadge,
  BButton
} from 'bootstrap-vue-next';
import { IconSettings } from '@tabler/icons-vue';
</script>

