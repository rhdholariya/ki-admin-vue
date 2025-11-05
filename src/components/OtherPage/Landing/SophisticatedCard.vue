<script setup>
import { BBadge, BCol, BContainer, BRow } from "bootstrap-vue-next";
import * as PhIcons from "@phosphor-icons/vue";
import {PhCardsThree} from "@phosphor-icons/vue";

const cardDetails = [
    { icon: "PhCreditCard", text: "200+ Cards Collection" },
    { icon: "PhDiamondsFour", text: "Basic Components Included" },
    { icon: "PhGear", text: "Customization and Personalization" },
    { icon: "PhDeviceTablet", text: "Responsive Card Design" },
    { icon: "PhGearFine", text: "Advanced Functionality" },
    { icon: "PhPalette", text: "Styleguide Included" },
];
</script>
<template>
  <div>
    <section class="card-section" id="Cards">
      <b-container fluid>
        <div class="card-section-content section-lg-space-x">
          <b-row class="align-items-center mb-5">
            <b-col xl="8" class="offset-xl-2 text-md-center">
              <div class="landing-title">
                <b-badge class="title-badge mb-3" variant="light-primary">
                  <PhCardsThree
                      :size="14"
                      class="align-text-bottom me-1"
                      weight="fill"
                  />
                  Cards
                </b-badge>
                <h2>
                  Sophisticated
                  <span class="highlight-title px-3">Cards</span>
                </h2>
                <p>
                  Cards offer enhanced design flexibility and interactive
                  capabilities, incorporating dynamic elements like animations,
                  real-time updates, or embedded multimedia to provide a richer
                  and more engaging user experience in a concise card format.
                </p>
              </div>
            </b-col>
          </b-row>

          <b-row class="align-items-center">
            <b-col xl="7" class="text-center position-relative">
              <img
                  src="/images/landing/cards-img.png"
                  alt="cards-img"
                  class="img-fluid cards-img"
              />
            </b-col>

            <b-col xl="5">
              <ul class="card-details-list px-sm-4 px-0 list-unstyled">
                <li
                    v-for="(item, index) in cardDetails"
                    :key="index"
                    class="d-flex align-items-center gap-3 mb-3"
                >
                  <span
                      class="bg-light-primary h-45 w-45 d-flex-center b-r-10 b-1-primary flex-shrink-0"
                  >
                    <!-- Dynamically render the correct Phosphor icon -->
                    <component :is="PhIcons[item.icon]" weight="fill" />
                  </span>
                  {{ item.text }}
                </li>
              </ul>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </div>
</template>


