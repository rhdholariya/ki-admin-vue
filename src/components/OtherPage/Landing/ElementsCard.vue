<template>
  <div>
    <section class="element-section section-lg-space-x" id="Elements">
      <BContainer>
        <BRow>
          <BCol xl="8">
            <div class="landing-title">
              <BBadge class="title-badge mb-3" variant="light-primary">
                <PhBriefcase
                    weight="fill"
                    :size="14"
                    class="align-text-bottom me-1"
                />
                UI Elements
              </BBadge>
              <h2>
                Elements <span class="highlight-title">Of Ki-Admin</span>
              </h2>
              <p>
                Offer a responsive and user-friendly interface, streamlining
                the design and development of web applications by providing a
                robust set of pre-built components and templates.
              </p>
            </div>
          </BCol>
        </BRow>

        <BRow class="gx-sm-5 gy-sm-4 g-2">
          <BCol sm="6" lg="4" v-for="(element, index) in uiElements" :key="index">
            <BCard class="card-primary" no-body>
              <BCardBody>
                <div class="element-card">
                  <div class="element-card-img">
                    <img src="/images/landing/card-image.png" alt="" />
                  </div>
                  <div class="element-content">
                    <span class="btn btn-white icon-btn flex-shrink-0 w-45 h-45 b-r-8">
                      <component
                          :is="element.icon"
                          v-bind="element.iconProps"
                      />
                    </span>
                    <h3 class="mt-3 mb-0">{{ element.title }}</h3>
                  </div>
                  <div>
                    <p class="f-s-16 txt-ellipsis-2 text-white-800 mb-3">
                      {{ element.desc }}
                    </p>
                    <BButton
                        :href="element.href"
                        target="_blank"
                        variant="light-white"
                        class="link-btn"
                    >
                      View {{ element.title }}
                      <PhCaretRight class="ms-2 f-s-16" weight="bold" />
                    </BButton>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </BContainer>
    </section>
  </div>
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

import {
  PhBriefcase,
  PhCaretDown,
  PhCaretRight,
  PhCookingPot,
  PhCreditCard,
  PhListBullets,
  PhRadioButton,
  PhWarningCircle,
} from '@phosphor-icons/vue';

const uiElements = [
  {
    title: "Buttons",
    icon: PhRadioButton,
    iconProps: {size: 18, color: "#212529", weight: "bold"},
    desc: "Apply Custom button styles to forms, dialogs, and various elements, featuring support for multiple sizes and states.",
    href: "/ui-kits/buttons",
  },
  {
    title: "Cards",
    icon: PhCreditCard,
    iconProps: {size: 18, color: "#212529", weight: "bold"},
    desc: "Create stylish cards with Admin Element for organized content presentation and a sleek user interface.",
    href: "/ui-kits/cards",
  },
  {
    title: "List",
    icon: PhListBullets,
    iconProps: {size: 18, color: "#212529", weight: "bold"},
    desc: "Easily design lists with Admin Element intuitive elements for structured content display, enhancing user",
    href: "/ui-kits/lists",
  },
  {
    title: "Alerts",
    icon: PhWarningCircle,
    iconProps: {size: 18, color: "#212529", weight: "bold"},
    desc: "Create alerts using Admin Elements intuitive elements to effectively communicate messages.",
    href: "/ui-kits/alert",
  },
  {
    title: "Accordions",
    icon: PhCookingPot,
    iconProps: {size: 18, color: "#212529", weight: "bold"},
    desc: "Create collapsible accordion in Admin for organized content presentation, optimizing user interaction.",
    href: "/ui-kits/accordions",
  },
  {
    title: "Dropdown",
    icon: PhCaretDown,
    iconProps: {size: 18, color: "#212529", weight: "bold"},
    desc: "Create dropdown using Admin Elements for enhanced user interaction and intuitive navigation.",
    href: "/ui-kits/dropdown",
  },
];
</script>