<script setup>
import { BCard, BCardBody, BCardHeader } from "bootstrap-vue-next";
import {
  IconBrandGithub,
  IconBriefcase,
  IconCake,
  IconDeviceLaptop,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-vue";

const aboutItems = [
  { icon: IconBriefcase, label: "Work passion", value: "IT Section" },
  { icon: IconMail, label: "Email", value: "Ninfa@gmail.com" },
  { icon: IconPhone, label: "Contact", value: "0364 4559103" },
  { icon: IconCake, label: "Birth of Date", value: "24 Oct" },
  { icon: IconMapPin, label: "Location", value: "Via Partenope, 117" },
  { icon: IconDeviceLaptop, label: "Website", value: "Ninfa_devWWW.com" },
  { icon: IconBrandGithub, label: "Github", value: "Ninfa_dev" },
];
</script>

<template>
  <b-card id="about-me" no-body>
    <b-card-header>
      <h5>About Me</h5>
    </b-card-header>
    <b-card-body>
      <p class="text-muted f-s-13">
        Hello! I am, Ninfa Monaldo. Devoted web designer with over five years
        of experience and a strong understanding of Adobe Creative Suite,
        HTML5, CSS3 and Java. Excited to bring my exceptional front-end
        development abilities to the retail industry.
      </p>

      <div class="about-list">
        <div v-for="(item, idx) in aboutItems" :key="idx" class="d-flex justify-content-between align-items-center my-2">
          <span class="fw-semibold d-flex align-items-center gap-2">
            <component :is="item.icon" size="18" /> {{ item.label }}
          </span>
          <span class="f-s-13 text-secondary">{{ item.value }}</span>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>




