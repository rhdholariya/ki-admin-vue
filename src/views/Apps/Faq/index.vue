<script setup>
import { ref, computed } from "vue";
import {
  BAccordion,
  BAccordionItem,
  BContainer
} from "bootstrap-vue-next";

import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";

import { IconHelpCircle, IconSearch } from "@tabler/icons-vue";
import { PhStack } from "@phosphor-icons/vue";

import { faqSections } from "@/data/app/Faq/FaqData.js";

// ✅ Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Faq",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Faq", active: true },
  ],
}));

// ✅ Return first item eventKey for each section (open by default)
const getDefaultActiveKey = (section) => {
  // if any item has defaultActive flag, open that
  const activeItem = section.items.find((item) => item.defaultActive);
  if (activeItem) return activeItem.eventKey;

  // otherwise, open the first accordion item by default
  return section.items.length > 0 ? section.items[0].eventKey : null;
};

// ✅ Render content (HTML or string)
const renderContent = (content) => {
  if (typeof content === "string") return content;
  return content;
};
</script>

<template>
  <AppLayout>
    <main>
      <BContainer fluid>
        <!-- Breadcrumb -->
        <Breadcrumb :breadcrumb="breadcrumbItems" />

        <!-- Header -->
        <div class="faq-header text-center my-4">
          <img src="/images/logo/3.png" alt="Logo" />
          <h2 class="text-dark fw-bold">How Can We Help?</h2>
          <form class="app-form search-div mt-3">
            <div class="input-group b-r-search">
              <span class="input-group-text bg-primary text-white border-0">
                <IconSearch :size="18" />
              </span>
              <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
              />
            </div>
          </form>
        </div>

        <!-- FAQ Sections -->
        <div class="row faq-accordion">
          <div v-for="section in faqSections" :key="section.id">
            <div class="faq-heading mb-3">
              <h3>
                <IconHelpCircle :size="25" class="pe-2" />
                {{ section.title }}
              </h3>
            </div>

            <div class="col-lg-8 offset-lg-2 mb-3">
              <BAccordion
                  class="app-accordion accordion-primary"
                  :model-value="getDefaultActiveKey(section)"
              >
                <BAccordionItem
                    v-for="item in section.items"
                    :key="item.eventKey"
                    :value="item.eventKey"
                >
                  <template #title>
                    <span>
                      <IconHelpCircle :size="25" class="pe-2" />
                      {{ item.title }}
                    </span>
                  </template>

                  <div v-if="typeof item.content === 'string'">
                    {{ item.content }}
                  </div>
                  <div v-else v-html="renderContent(item.content)"></div>
                </BAccordionItem>
              </BAccordion>
            </div>
          </div>
        </div>
      </BContainer>
    </main>
  </AppLayout>
</template>