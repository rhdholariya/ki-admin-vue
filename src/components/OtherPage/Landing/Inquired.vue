<script setup>
import {
    BAccordion,
    BAccordionItem,
    BBadge,
    BCard,
    BCardBody,
    BCol,
    BContainer,
    BRow
} from 'bootstrap-vue-next';

import { PhArrowUpRight, PhSealQuestion, PhHeadphones } from '@phosphor-icons/vue';

const faqItems = [
    {
        id: "faq1",
        question: "What is the role of an admin?",
        answer: "Admins are responsible for managing and overseeing the smooth operation of a system, platform, or organization.",
    },
    {
        id: "faq2",
        question: "How do I add or remove users?",
        answer: 'Depending on the system, user management can usually be done through the admin dashboard. Look for the "User Management" or "Admin Settings" section, where you can add or remove users and assign roles.',
    },
    {
        id: "faq3",
        question: "What security measures should I implement?",
        answer: "Admins should prioritize security by enforcing strong password policies, implementing two-factor authentication, regularly updating software, and monitoring system logs for any suspicious activities.",
    },
    {
        id: "faq4",
        question: "How can I troubleshoot common issues?",
        answer: "Document and follow a systematic approach to troubleshooting. Check error logs, consult documentation, and involve relevant stakeholders if needed.",
    },
    {
        id: "faq5",
        question: "How do I handle user access permissions?",
        answer: "Website design projects can vary depending on their scale and complexity—making it hard to generalize about project timelines. Ideally, a typical website design project should take between 6 and 12 weeks.",
    },
];
</script>
<template>
    <section class="faq-section section-lg-space-x" id="faq">
      <b-container>
        <b-row>
          <b-col xl="8">
            <div class="landing-title">
              <b-badge class="title-badge mb-3" variant="light-primary">
                <PhSealQuestion
                    :size="16"
                    class="align-text-bottom me-1"
                    weight="fill"
                />
                FAQ
              </b-badge>
              <h2>
                Inquired <span class="highlight-title">Queries</span>
              </h2>
              <p>
                After reading the instructions, I had a few inquired queries
                about the process and decided to reach out to customer support
                for clarification.
              </p>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="4">
            <b-row class="g-3">
              <b-col lg="12" sm="6">
                <b-card class="card-primary" no-body>
                  <b-card-body class="bg-card-box">
                    <div class="bg-card-img mb-3">
                      <img
                          src="/images/landing/card-image.png"
                          alt="Card Visual"
                      />
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h2 class="m-0">Digitize Your Documents</h2>
                      <a
                          class="btn btn-white icon-btn flex-shrink-0 w-45 h-45 rounded-circle"
                          href="https://phpstack-1384472-5121645.cloudwaysapps.com/document/vue/ki-admin/index.html"
                          target="_blank"
                          rel="noopener"
                      >
                        <PhArrowUpRight
                            :size="18"
                            color="dark"
                            weight="bold"
                        />
                      </a>
                    </div>
                    <p class="f-s-18">Efficiently Arranged and Current</p>
                  </b-card-body>
                </b-card>
              </b-col>

              <b-col lg="12" sm="6">
                <b-card>
                  <b-card-body class="bg-card-box">
                    <div class="mb-3">
                      <div class="bg-light-primary h-60 w-60 d-flex-center b-r-6 mb-3">
                        <PhHeadphones :size="28" weight="bold" />
                      </div>
                      <h3 class="text-primary">Dedicated Support</h3>
                      <p class="f-s-18">
                        Require assistance? Send us a ticket. We're here to
                        help!
                      </p>
                    </div>
                    <a
                        class="btn btn-primary"
                        href="mailto:teqlathemes@gmail.com"
                        target="_blank"
                        rel="noopener"
                    >
                      Get Support
                    </a>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-col>

          <b-col lg="7" class="offset-lg-1">
            <div class="landing-accordion">
              <b-accordion
                  :model-value="'faq1'"
                  class="app-accordion accordion-flush accordion-light-dark app-accordion-plus"
              >
                <b-accordion-item
                    v-for="{ id, question, answer } in faqItems"
                    :key="id"
                    :value="id"
                >
                  <template #title>
                    <PhSealQuestion
                        :size="18"
                        weight="fill"
                        class="me-2 align-text-bottom"
                    />
                    {{ question }}
                  </template>
                  <p v-html="answer"></p>
                </b-accordion-item>
              </b-accordion>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

</template>

