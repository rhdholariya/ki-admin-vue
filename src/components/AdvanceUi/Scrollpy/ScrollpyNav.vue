<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
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
  BDropdownDivider
} from "bootstrap-vue-next"

const activeId = ref("")
/** @type {import('vue').Ref<HTMLElement|null>} */
const scrollContainer = ref(null)

onMounted(() => {
  const container = scrollContainer.value

  if (container) {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id^="scrollspyHeading"]')
      const scrollPos = container.scrollTop

      sections.forEach(section => {
        const sectionEl = section
        const sectionTop = sectionEl.offsetTop - 100
        const sectionBottom = sectionTop + sectionEl.offsetHeight

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          activeId.value = sectionEl.id
        }
      })
    }

    container.addEventListener("scroll", handleScroll)
    handleScroll()

    onBeforeUnmount(() => {
      container.removeEventListener("scroll", handleScroll)
    })
  }
})
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
                        :class="[
                        'nav-pill-primary',
                        activeId === 'scrollspyHeading3' ||
                        activeId === 'scrollspyHeading4' ||
                        activeId === 'scrollspyHeading5'
                          ? 'active'
                          : ''
                      ]"
                    >
                      <b-dropdown-item href="#scrollspyHeading3">Third</b-dropdown-item>
                      <b-dropdown-item href="#scrollspyHeading4">Fourth</b-dropdown-item>
                      <b-dropdown-divider />
                      <b-dropdown-item href="#scrollspyHeading5">Fifth</b-dropdown-item>
                    </b-nav-item-dropdown>
                  </b-navbar-nav>
                </b-collapse>
              </b-container>
            </div>

            <!-- Scrollable Content -->
            <div ref="scrollContainer" class="p-3 rounded-2 h-250 overflow-y-auto app-scroll">
              <h5 id="scrollspyHeading1" class="f-w-500 mb-2 text-dark">First paragraph</h5>
              <p class="f-s-15 text-secondary mb-3">
                Platea platea, sapien rutrum duis adipiscing, dictumst gravida mollis sapien...
              </p>

              <h5 id="scrollspyHeading2" class="f-w-500 mb-2 text-dark">Second paragraph</h5>
              <p class="f-s-15 text-secondary mb-3">
                Lectus torquent sapien placerat bibendum, convallis cras habitasse egestas...
              </p>

              <h5 id="scrollspyHeading3" class="f-w-500 mb-2 text-dark">Third paragraph</h5>
              <p class="f-s-15 text-secondary mb-3">
                Ligula platea at eleifend vivamus nibh porta auctor ornare proin...
              </p>

              <h5 id="scrollspyHeading4" class="f-w-500 mb-2 text-dark">Fourth paragraph</h5>
              <p class="f-s-15 text-secondary mb-3">
                Diam condimentum etiam. In adipiscing dis aliquet nam tempus...
              </p>

              <h5 id="scrollspyHeading5" class="f-w-500 mb-2 text-dark">Fifth paragraph</h5>
              <p class="f-s-15 text-secondary">
                Hymenaeos tincidunt donec vivamus suspendisse condimentum feugiat...
              </p>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
