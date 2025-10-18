<script setup>

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
</script>
<template>
 <div class="bg-white landing-page">
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