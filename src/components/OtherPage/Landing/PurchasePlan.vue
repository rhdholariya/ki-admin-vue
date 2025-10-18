<template>
  <section class="plans-section" id="Pricing">
    <BContainer>
      <div class="card-section-content section-lg-space-x">
        <BRow>
          <BCol xl="8">
            <div class="landing-title">
              <BBadge class="title-badge mb-3" variant="light-primary">
                <PhCards
                    :size="14"
                    class="align-text-bottom me-1"
                    weight="fill"
                />
                Cards
              </BBadge>
              <h2>
                Purchase <span class="highlight-title">Plans</span>
              </h2>
              <p>
                Include information on how users can navigate your platform,
                select a plan, and complete the transaction.
              </p>
            </div>
          </BCol>
        </BRow>

        <BRow class="justify-content-center">
          <!-- Left Card - Basic Plan -->
          <BCol md="7" xl="8">
            <BCard class="pricing-cards equal-card mb-0">
              <BCardBody>
                <BRow class="align-items-center">
                  <BCol lg="5" xl="6">
                    <img
                        alt="img"
                        class="w-120"
                        src="/images/landing/wallet.png"
                    />
                    <div>
                      <BBadge variant="primary" class="f-s-16 mt-3">
                        Basic Plans
                      </BBadge>
                      <h1 class="text-primary fw-bold mt-3">$14.00</h1>
                      <p class="text-secondary fw-medium f-s-16">
                        Essential features at the best value. Get started
                        today with our budget-friendly pricing!
                      </p>
                    </div>
                  </BCol>
                  <BCol lg="7" xl="6">
                    <div class="pricing-details">
                      <div class="price-title">
                        <h3 class="text-dark fw-semibold">Basic Plans</h3>
                        <ul class="pricing-list-menu">
                          <li
                              v-for="(item, idx) in pricingFeatures"
                              :key="idx"
                              class="pricing-listitem"
                          >
                            <IconCheck
                                :size="16"
                                class="text-success me-2"
                            />
                            {{ item }}
                          </li>
                        </ul>
                        <div class="text-center price-btn">
                          <BButton
                              size="lg"
                              variant="primary"
                              href="https://themeforest.net/user/la-themes"
                              target="_blank"
                          >
                            Buy Plans
                          </BButton>
                        </div>
                      </div>
                    </div>
                  </BCol>
                </BRow>
              </BCardBody>
            </BCard>
          </BCol>

          <!-- Right Card - Business Plan -->
          <BCol md="5" xl="4">
            <BCard class="pricing-cards active mb-0">
              <BCardBody class="p-0">
                <div class="pricing-details">
                  <div class="price-title">
                    <p class="text-white-600">Business Plans</p>
                    <h2>$499.00</h2>
                    <ul class="pricing-list-menu">
                      <li
                          v-for="(item, idx) in pricingFeatures"
                          :key="idx"
                          class="pricing-listitem text-white-800"
                      >
                        <IconCheck :size="16" class="text-white me-2" />
                        {{ item }}
                      </li>
                    </ul>
                    <div class="text-center price-btn">
                      <BButton
                          size="lg"
                          variant="light-white"
                          href="https://themeforest.net/user/la-themes"
                          target="_blank"
                      >
                        Buy Plans
                      </BButton>
                    </div>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </div>
    </BContainer>
  </section>
</template>

<script setup>
import {
  BBadge,
  BButton,
  BCard,
  BCardBody,
  BCol,
  BContainer,
  BRow
} from 'bootstrap-vue-next';

import { IconCheck } from '@tabler/icons-vue';
import { PhCards } from '@phosphor-icons/vue';

const pricingFeatures = [
  "6 Month support",
  "Single end product use",
  "Future upgrades included",
  "Free for use in end products",
];
</script>