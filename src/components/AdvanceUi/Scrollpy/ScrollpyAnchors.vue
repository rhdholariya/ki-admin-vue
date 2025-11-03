<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { BCard, BCardHeader, BCardBody } from "bootstrap-vue-next";

const activeItem = ref("simple-list-item-1");
const contentRef = ref(null);

const sectionIds = [
  "simple-list-item-1",
  "simple-list-item-2",
  "simple-list-item-3",
  "simple-list-item-4",
  "simple-list-item-5",
];

const handleScroll = () => {
  if (!contentRef.value) return;

  const scrollPosition = contentRef.value.scrollTop;
  let currentSection = sectionIds[0];

  sectionIds.forEach((id) => {
    const section = contentRef.value.querySelector(`#${id}`);
    if (section && scrollPosition >= section.offsetTop - 20) {
      currentSection = id;
    }
  });

  activeItem.value = currentSection;
};

const handleNavClick = async (id) => {
  activeItem.value = id;
  await nextTick(); // ensure elements exist
  const element = contentRef.value?.querySelector(`#${id}`);
  if (element && contentRef.value) {
    contentRef.value.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

onMounted(async () => {
  await nextTick();
  if (contentRef.value) {
    contentRef.value.addEventListener("scroll", handleScroll);
  }
});

onBeforeUnmount(() => {
  if (contentRef.value) {
    contentRef.value.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <div class="row">
    <!-- Left Navigation -->
    <div class="col-sm-4">
      <b-card no-body>
        <b-card-header>
          <h5>Simple anchors</h5>
        </b-card-header>
        <b-card-body>
          <div class="d-flex flex-column gap-2 text-center">
            <a
                v-for="(id, index) in sectionIds"
                :key="id"
                href="#"
                class="p-1 rounded border"
                :class="{ active: activeItem === id }"
                @click.prevent="handleNavClick(id)"
            >
              Item {{ index + 1 }}
            </a>
          </div>
        </b-card-body>
      </b-card>
    </div>

    <!-- Right Content -->
    <div class="col-sm-8">
      <b-card>
        <b-card-body>
          <div
              ref="contentRef"
              class="scrollspy-example h-245 overflow-y-scroll app-scroll"
              tabindex="0"
          >
            <div v-for="(id, index) in sectionIds" :key="id">
              <h5 :id="id" class="f-w-500 mb-2 text-dark">Item {{ index + 1 }}</h5>
              <p class="f-s-15 text-secondary mg-b-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Content for {{ id }} goes here.
              </p>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

