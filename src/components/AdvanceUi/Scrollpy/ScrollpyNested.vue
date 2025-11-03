<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue"
import {
  BCard,
  BCardHeader,
  BCardBody,
  BNav,
  BNavItem,
  BContainer,
  BRow,
  BCol
} from "bootstrap-vue-next"

const activeItem = ref("item-1")
const contentRef = ref(null)
const sectionRefs = ref([])

// reactive scroll handler
const handleScroll = () => {
  const content = contentRef.value
  if (!content || !sectionRefs.value.length) return

  const scrollTop = content.scrollTop + 100 // offset
  let current = sectionRefs.value[0].id

  for (const section of sectionRefs.value) {
    if (scrollTop >= section.offsetTop) {
      current = section.id
    }
  }
  activeItem.value = current
}

onMounted(async () => {
  await nextTick()
  // collect all sections dynamically
  sectionRefs.value = Array.from(contentRef.value.querySelectorAll("[id^='item-']"))
  contentRef.value.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  if (contentRef.value) {
    contentRef.value.removeEventListener("scroll", handleScroll)
  }
})
</script>

<template>
  <b-container fluid>
    <b-row>
      <!-- Sidebar Nav -->
      <b-col sm="4">
        <b-card no-body>
          <b-card-header>
            <h5>Scrollspy with nested nav</h5>
          </b-card-header>
          <b-card-body>
            <div class="h-100 flex-column align-items-stretch pe-4 scrollpy-nested-nav">
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
                <p class="f-s-15 text-secondary">
                  A web designer is a skilled professional who specializes in
                  creating visually appealing and functional websites.
                </p>
              </div>

              <div id="item-1-1">
                <h5 class="f-w-500 mb-2 text-dark">Item 1.1</h5>
                <p class="f-s-15 text-secondary">
                  The role of a web designer goes beyond just creating visually
                  appealing websites.
                </p>
              </div>

              <div id="item-1-2">
                <h5 class="f-w-500 mb-2 text-dark">Item 1.2</h5>
                <p class="f-s-15 text-secondary">
                  It is a long-established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
              </div>

              <div id="item-2">
                <h5 class="f-w-500 mb-2 text-dark">Item 2</h5>
                <p class="f-s-15 text-secondary">
                  In addition to design skills, a web designer also needs to
                  have a solid understanding of coding languages.
                </p>
              </div>

              <div id="item-3">
                <h5 class="f-w-500 mb-2 text-dark">Item 3</h5>
                <p class="f-s-15 text-secondary">
                  A web designer is a creative professional who specializes in
                  designing and creating visually appealing websites.
                </p>
              </div>

              <div id="item-3-1">
                <h5 class="f-w-500 mb-2 text-dark">Item 3.1</h5>
                <p class="f-s-15 text-secondary">
                  The role of a web designer goes beyond just creating a visually
                  appealing website.
                </p>
              </div>

              <div id="item-3-2">
                <h5 class="f-w-500 mb-2 text-dark">Item 3.2</h5>
                <p class="f-s-15 text-secondary">
                  In addition to their design skills, a web designer also needs
                  to have a good understanding of coding languages.
                </p>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
