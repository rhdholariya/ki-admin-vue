<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BNavItemDropdown,
  BDropdownItem,
  BDropdownDivider,
} from "bootstrap-vue-next";

const activeId = ref("");
const scrollContainer = ref<HTMLElement>();

onMounted(() => {
  // Wait for DOM to be fully rendered
  setTimeout(() => {
    scrollContainer.value = document.querySelector('.app-scroll') as HTMLElement;

    if (scrollContainer.value) {
      const handleScroll = () => {
        const sections = document.querySelectorAll('[id^="scrollspyHeading"]');
        const scrollPos = scrollContainer.value?.scrollTop || 0;

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

          if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            activeId.value = section.id;
          }
        });
      };

      scrollContainer.value.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      onBeforeUnmount(() => {
        scrollContainer.value?.removeEventListener('scroll', handleScroll);
      });
    }
  }, 100);
});
</script>

<template>
  <b-container fluid class="mt-3">
    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <h5>Scrollspy in Navbar</h5>
          </b-card-header>
          <b-card-body>
            <!-- Navbar -->
            <div
                id="navbar-example3"
                class="navbar navbar-expand-lg scrollpy-navbar bg-body-tertiary"
            >
              <b-container fluid>
                <b-navbar-brand href="#">
                  <img src="/images/logo/1.png" class="w-150" alt="logo" />
                </b-navbar-brand>
                <b-navbar-toggle target="navbarSupportedContent" />
                <b-collapse id="navbarSupportedContent" is-nav>
                  <b-navbar-nav class="ms-auto nav-pills">
                    <b-nav-item
                        href="#scrollspyHeading1"
                        :class="['nav-pill-primary', activeId === 'scrollspyHeading1' ? 'active' : '']"
                    >
                      First
                    </b-nav-item>
                    <b-nav-item
                        href="#scrollspyHeading2"
                        :class="['nav-pill-primary', activeId === 'scrollspyHeading2' ? 'active' : '']"
                    >
                      Second
                    </b-nav-item>
                    <b-nav-item-dropdown
                        text="Dropdown"
                        :class="['nav-pill-primary',
                        activeId === 'scrollspyHeading3' ||
                        activeId === 'scrollspyHeading4' ||
                        activeId === 'scrollspyHeading5' ? 'active' : '']"
                    >
                      <b-dropdown-item href="#scrollspyHeading3">
                        Third
                      </b-dropdown-item>
                      <b-dropdown-item href="#scrollspyHeading4">
                        Fourth
                      </b-dropdown-item>
                      <b-dropdown-divider />
                      <b-dropdown-item href="#scrollspyHeading5">
                        Fifth
                      </b-dropdown-item>
                    </b-nav-item-dropdown>
                  </b-navbar-nav>
                </b-collapse>
              </b-container>
            </div>

            <!-- Content -->
            <div ref="scrollContainer" class="p-3 rounded-2 h-250 overflow-y-auto app-scroll">
              <h5 id="scrollspyHeading1" class="f-w-500 mb-2 text-dark">
                First paragraph
              </h5>
              <p class="f-s-15 text-secondary mb-3">
                Platea platea, sapien rutrum duis adipiscing, dictumst...
              </p>

              <h5 id="scrollspyHeading2" class="f-w-500 mb-2 text-dark">
                Second paragraph
              </h5>
              <p class="f-s-15 text-secondary mb-3">
                Lectus torquent sapien placerat bibendum, convallis cras...
              </p>

              <h5 id="scrollspyHeading3" class="f-w-500 mb-2 text-dark">
                Third paragraph
              </h5>
              <p class="f-s-15 text-secondary mb-3">
                Ligula platea at eleifend vivamus nibh porta auctor ornare...
              </p>

              <h5 id="scrollspyHeading4" class="f-w-500 mb-2 text-dark">
                Fourth paragraph
              </h5>
              <p class="f-s-15 text-secondary mb-3">
                Diam condimentum etiam. In adipiscing dis aliquet nam...
              </p>

              <h5 id="scrollspyHeading5" class="f-w-500 mb-2 text-dark">
                Fifth paragraph
              </h5>
              <p class="f-s-15 text-secondary">
                Hymenaeos tincidunt donec vivamus suspendisse condimentum...
              </p>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

