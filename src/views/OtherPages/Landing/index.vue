<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

import BannerSection from "@/components/OtherPage/Landing/BannerSection.vue";
import TabPages from "@/components/OtherPage/Landing/TabPages.vue";
import CoreFeature from "@/components/OtherPage/Landing/CoreFeature.vue";
import Inquired from "@/components/OtherPage/Landing/Inquired.vue";
import SophisticatedCard from "@/components/OtherPage/Landing/SophisticatedCard.vue";
import ElementsCard from "@/components/OtherPage/Landing/ElementsCard.vue";
import DarkMode from "@/components/OtherPage/Landing/DarkMode.vue";
import PurchasePlan from "@/components/OtherPage/Landing/PurchasePlan.vue";
import CustomizationSection from "@/components/OtherPage/Landing/CustomizationSection.vue";
import FooterSection from "@/components/OtherPage/Landing/FooterSection.vue";

const wasDarkMode = ref(false);
let observer = null;

const forceRemoveDark = () => {
  document.body.classList.remove("dark");
  document.documentElement.classList.remove("dark");
};

onMounted(() => {
  wasDarkMode.value = document.body.classList.contains("dark");

  forceRemoveDark();

  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        if (document.body.classList.contains("dark")) {
          forceRemoveDark();
        }
      }
    });
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"]
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }

  if (wasDarkMode.value) {
    document.body.classList.add("dark");
  }
});
</script>

<template>
  <div class="landing-page bg-white">
    <div class="app-wrapper flex-column">
      <BannerSection />
      <TabPages />
      <CoreFeature />
      <Inquired />
      <SophisticatedCard />
      <ElementsCard />
      <DarkMode />
      <PurchasePlan />
      <CustomizationSection />
      <FooterSection />
    </div>
  </div>
</template>
