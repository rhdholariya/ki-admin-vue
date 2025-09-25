<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BNav,
  BNavItem,
  BContainer,
  BRow,
  BCol,
} from "bootstrap-vue-next";

const activeItem = ref("item-1");
const contentRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const contentElement = contentRef.value;
  if (!contentElement) return;

  const sectionIds = [
    "item-1",
    "item-1-1",
    "item-1-2",
    "item-2",
    "item-3",
    "item-3-1",
    "item-3-2",
  ];

  const handleScroll = () => {
    const scrollPosition = contentElement.scrollTop + 100; // offset
    let currentSection = "item-1";

    for (const sectionId of sectionIds) {
      const section = document.getElementById(sectionId);
      if (!section) continue;

      const sectionOffset = section.offsetTop;
      if (scrollPosition >= sectionOffset) {
        currentSection = sectionId;
      }
    }

    activeItem.value = currentSection;
  };

  contentElement.addEventListener("scroll", handleScroll);

  onBeforeUnmount(() => {
    contentElement.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <b-container fluid>
    <b-row>
      <!-- Sidebar Nav -->
      <b-col sm="4">
        <b-card no-body>
          <b-card-header>
            <h5>Scrollpy with nested nav</h5>
          </b-card-header>
          <b-card-body>
            <div
                id="navbar-example3"
                class="h-100 flex-column align-items-stretch pe-4 scrollpy-nested-nav"
            >
              <b-nav pills class="flex-column">
                <b-nav-item
                    href="#item-1"
                    :class="['nav-pill-primary', activeItem === 'item-1' ? 'active' : '']"
                >
                  Item 1
                </b-nav-item>

                <b-nav class="flex-column">
                  <b-nav-item
                      href="#item-1-1"
                      :class="[
                      'ms-3 my-1 nav-pill-primary',
                      activeItem === 'item-1-1' ? 'active' : ''
                    ]"
                  >
                    Item 1.1
                  </b-nav-item>
                  <b-nav-item
                      href="#item-1-2"
                      :class="[
                      'ms-3 my-1 nav-pill-primary',
                      activeItem === 'item-1-2' ? 'active' : ''
                    ]"
                  >
                    Item 1.2
                  </b-nav-item>
                </b-nav>

                <b-nav-item
                    href="#item-2"
                    :class="['nav-pill-primary', activeItem === 'item-2' ? 'active' : '']"
                >
                  Item 2
                </b-nav-item>

                <b-nav-item
                    href="#item-3"
                    :class="['nav-pill-primary', activeItem === 'item-3' ? 'active' : '']"
                >
                  Item 3
                </b-nav-item>

                <b-nav class="flex-column">
                  <b-nav-item
                      href="#item-3-1"
                      :class="[
                      'ms-3 my-1 nav-pill-primary',
                      activeItem === 'item-3-1' ? 'active' : ''
                    ]"
                  >
                    Item 3.1
                  </b-nav-item>
                  <b-nav-item
                      href="#item-3-2"
                      :class="[
                      'ms-3 my-1 nav-pill-primary',
                      activeItem === 'item-3-2' ? 'active' : ''
                    ]"
                  >
                    Item 3.2
                  </b-nav-item>
                </b-nav>
              </b-nav>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Scroll Content -->
      <b-col sm="8">
        <b-card>
          <b-card-body>
            <div
                ref="contentRef"
                class="scrollspy-example-2 h-350 overflow-y-scroll app-scroll"
                tabindex="0"
            >
              <div id="item-1">
                <h5 class="f-w-500 mb-2 text-dark">Item 1</h5>
                <p class="f-s-15 text-secondary mg-b-14">
                  A web designer is a skilled professional who specializes in
                  creating visually appealing and functional websites. ...
                </p>
              </div>

              <div id="item-1-1">
                <h5 class="f-w-500 mb-2 text-dark">Item 1.1</h5>
                <p class="f-s-15 text-secondary mg-b-14">
                  The role of a web designer goes beyond just creating visually
                  appealing websites. ...
                </p>
              </div>

              <div id="item-1-2">
                <h5 class="f-w-500 mb-2 text-dark">Item 1.2</h5>
                <p class="f-s-15 text-secondary mg-b-14">
                  It is a long-established fact that a reader will be distracted
                  by the readable content of a page ...
                </p>
              </div>

              <div id="item-2">
                <h5 class="f-w-500 mb-2 text-dark">Item 2</h5>
                <p class="f-s-15 text-secondary mg-b-14">
                  In addition to design skills, a web designer also needs to
                  have a solid understanding of coding languages ...
                </p>
              </div>

              <div id="item-3">
                <h5 class="f-w-500 mb-2 text-dark">Item 3</h5>
                <p class="f-s-15 text-secondary mg-b-14">
                  A web designer is a creative professional who specializes in
                  designing and creating visually appealing websites ...
                </p>
              </div>

              <div id="item-3-1">
                <h5 class="f-w-500 mb-2 text-dark">Item 3.1</h5>
                <p class="f-s-15 text-secondary mg-b-14">
                  The role of a web designer goes beyond just creating a visually
                  appealing website ...
                </p>
              </div>

              <div id="item-3-2">
                <h5 class="f-w-500 mb-2 text-dark">Item 3.2</h5>
                <p class="f-s-15 text-secondary mg-b-14">
                  In addition to their design skills, a web designer also needs
                  to have a good understanding of coding languages ...
                </p>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
