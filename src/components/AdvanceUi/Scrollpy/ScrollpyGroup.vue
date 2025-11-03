<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue-next";

const activeItem = ref("list-item-1");
const contentRef = ref(null);

const sectionIds = ["list-item-1", "list-item-2", "list-item-3", "list-item-4"];

const handleScroll = () => {
  if (!contentRef.value) return;
  const scrollPosition = contentRef.value.scrollTop + 100;
  let currentSection = sectionIds[0];

  sectionIds.forEach((id) => {
    const section = contentRef.value.querySelector(`#${id}`);
    if (section && scrollPosition >= section.offsetTop) {
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
      top: element.offsetTop - 100,
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
      <b-card>
        <b-card-header>
          <h5>Scrollspy with list-group</h5>
        </b-card-header>
        <b-card-body>
          <b-list-group id="list-example">
            <b-list-group-item
                v-for="id in sectionIds"
                :key="id"
                action
                class="nav-pill-primary"
                :class="{ active: activeItem === id }"
                @click.prevent="handleNavClick(id)"
            >
              {{ id.replace("list-item-", "Item ") }}
            </b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-card>
    </div>

    <!-- Right Content -->
    <div class="col-sm-8">
      <b-card>
        <b-card-body>
          <div
              ref="contentRef"
              class="scrollspy-example overflow-y-scroll"
              style="height: 215px"
              tabindex="0"
          >
            <h5 id="list-item-1" class="fw-semibold mb-2 text-dark">Item 1</h5>
            <p class="text-secondary mb-4">
              A digital artisan, skilled in crafting captivating online experiences...
            </p>

            <h5 id="list-item-2" class="fw-semibold mb-2 text-dark">Item 2</h5>
            <p class="text-secondary mb-4">
              Picture a modern-day Leonardo da Vinci, armed with pixels and code...
            </p>

            <h5 id="list-item-3" class="fw-semibold mb-2 text-dark">Item 3</h5>
            <p class="text-secondary mb-4">
              In the realm of the digital world, the web designer reigns supreme...
            </p>

            <h5 id="list-item-4" class="fw-semibold mb-2 text-dark">Item 4</h5>
            <p class="text-secondary mb-0">
              A digital artisan, skilled in the art of crafting captivating online experiences...
            </p>
          </div>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>


