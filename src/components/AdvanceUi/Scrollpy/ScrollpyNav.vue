<script setup>
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
  BDropdownDivider
} from "bootstrap-vue-next";

const activeId = ref("");
const scrollContainer = ref(null);
const sectionRefs = ref({});

const sectionList = [
  { id: "scrollspyHeading1", title: "First paragraph" },
  { id: "scrollspyHeading2", title: "Second paragraph" },
  { id: "scrollspyHeading3", title: "Third paragraph" },
  { id: "scrollspyHeading4", title: "Fourth paragraph" },
  { id: "scrollspyHeading5", title: "Fifth paragraph" },
];

const setSectionRef = (el, id) => {
  if (el) {
    sectionRefs.value[id] = el;
  }
};

onMounted(() => {
  const container = scrollContainer.value;
  if (!container) return;

  const handleScroll = () => {
    const scrollPos = container.scrollTop;

    for (const item of sectionList) {
      const section = sectionRefs.value[item.id];
      if (!section) continue;

      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        activeId.value = section.id;
      }
    }
  };

  container.addEventListener("scroll", handleScroll);
  handleScroll();

  onBeforeUnmount(() => {
    container.removeEventListener("scroll", handleScroll);
  });
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
            <div class="navbar navbar-expand-lg scrollpy-navbar bg-body-tertiary">
              <b-container fluid>
                <b-navbar-brand href="#">
                  <img src="/images/logo/1.png" class="w-150" alt="logo"/>
                </b-navbar-brand>
                <b-navbar-toggle target="navbarSupportedContent"/>
                <b-collapse id="navbarSupportedContent" is-nav>
                  <b-navbar-nav class="ms-auto nav-pills">
                    <b-nav-item
                        v-for="item in sectionList.slice(0, 2)"
                        :key="item.id"
                        :href="'#' + item.id"
                        :class="['nav-pill-primary', activeId === item.id ? 'active' : '']"
                    >
                      {{ item.title.split(' ')[0] }}
                    </b-nav-item>

                    <b-nav-item-dropdown
                        text="Dropdown"
                        :class="[
                        'nav-pill-primary',
                        ['scrollspyHeading3', 'scrollspyHeading4', 'scrollspyHeading5'].includes(activeId)
                          ? 'active'
                          : ''
                      ]"
                    >
                      <b-dropdown-item href="#scrollspyHeading3">Third</b-dropdown-item>
                      <b-dropdown-item href="#scrollspyHeading4">Fourth</b-dropdown-item>
                      <b-dropdown-divider/>
                      <b-dropdown-item href="#scrollspyHeading5">Fifth</b-dropdown-item>
                    </b-nav-item-dropdown>
                  </b-navbar-nav>
                </b-collapse>
              </b-container>
            </div>

            <!-- Scrollable Content -->
            <div ref="scrollContainer" class="p-3 rounded-2 h-250 overflow-y-auto app-scroll">
              <div v-for="item in sectionList" :key="item.id">
                <h5
                    :id="item.id"
                    :ref="(el) => setSectionRef(el, item.id)"
                    class="f-w-500 mb-2 text-dark"
                >
                  {{ item.title }}
                </h5>
                <p class="f-s-15 text-secondary mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
                </p>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>