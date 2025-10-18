<template>
  <div>
    <section class="dark-section">
      <b-container fluid>
        <div class="dark-section-content section-lg-space-x">
          <b-row>
            <b-col xl="8" offset-xl="2" class="z-1">
              <div class="landing-title landing-title-light text-md-center">
                <b-badge class="title-badge mb-3" variant="light-primary">
                  <PhSquaresFour
                      :size="14"
                      class="align-text-bottom me-1"
                      weight="fill"
                  />
                  Dark Layout
                </b-badge>
                <h2>
                  Discover Our
                  <span class="highlight-title"> Dark Layout</span>
                </h2>
                <p class="text-light">
                  Embrace the elegance of the dark layout, where simplicity
                  meets sophistication. <br />
                  Navigate effortlessly through your admin tasks with style.
                </p>
                <b-button
                    variant="white"
                    size="lg"
                    class="mt-3 px-4 py-2"
                    id="darkDemoBtn"
                    @click="handleDarkModeClick"
                >
                  Check Now <IconChevronsRight :size="20" class="ms-2" />
                </b-button>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script setup>
import {
  BContainer,
  BRow,
  BCol,
  BBadge,
  BButton
} from 'bootstrap-vue-next';
import { PhSquaresFour } from '@phosphor-icons/vue';
import { IconChevronsRight } from '@tabler/icons-vue';

const handleDarkModeClick = () => {
  // Set dark mode in localStorage
  localStorage.setItem("theme-mode", "dark");

  // Redirect to dashboard
  window.location.href = "/dashboard/ecommerce";
};
</script>

