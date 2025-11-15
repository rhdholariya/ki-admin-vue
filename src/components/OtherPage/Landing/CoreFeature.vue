<script setup>
import { computed } from 'vue';
import {
    BContainer,
    BRow,
    BCol,
    BBadge
} from 'bootstrap-vue-next';
import { PhSquaresFour } from '@phosphor-icons/vue';


const generateFeatureLogos = (start, count) => {
    return Array.from({ length: count }, (_, i) => {
        const number = String(start + i).padStart(2, "0");
        return `/images/landing/logo/${number}.png`;
    });
};

const featureLogosGroup1 = generateFeatureLogos(1, 10);
const featureLogosGroup2 = generateFeatureLogos(11, 10);


const featureLogoGroups = computed(() => [featureLogosGroup1, featureLogosGroup2]);
</script>
<template>
    <section class="features-section" id="Features">
      <b-container fluid>
        <div class="features-section-content section-lg-space-x">
          <b-row>
            <b-col xl="8" offset-xl="2">
              <div class="landing-title landing-title-light text-md-center">
                <b-badge class="title-badge mb-3" variant="light-primary">
                  <PhSquaresFour
                      :size="18"
                      weight="fill"
                      class="align-text-bottom me-2"
                  />
                  features
                </b-badge>
                <h2>
                  Core <span class="highlight-title">features</span>
                </h2>
                <p>
                  Admin features, developers can easily customize the
                  appearance and behavior of their applications, ensuring a
                  consistent and visually appealing experience across
                  different devices and screen sizes.
                </p>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="12">
              <ul
                  v-for="(group, groupIdx) in featureLogoGroups"
                  :key="groupIdx"
                  class="features-box-list"
              >
                <li
                    v-for="(src, i) in group"
                    :key="i"
                    class="d-flex-center"
                >
                  <img
                      :src="src"
                      :alt="`features-icon-${i + 1 + groupIdx * 10}`"
                      class="img-fluid"
                  />
                </li>
              </ul>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>

</template>



