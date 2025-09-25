<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";
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
  let currentSection = "list-item-1";

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

const handleNavClick = (id) => {
  activeItem.value = id;
  const element = document.getElementById(id);
  if (element && contentRef.value) {
    contentRef.value.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
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
                :href="'#' + id"
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
              class="scrollspy-example h-215 overflow-y-scroll app-scroll"
              tabindex="0"
          >
            <h5 id="list-item-1" class="f-w-500 mb-2 text-dark">Item 1</h5>
            <p class="f-s-15 text-secondary mg-b-14">
              A digital artisan, skilled in the art of crafting captivating
              online experiences, is what one would refer to as a web designer...
            </p>

            <h5 id="list-item-2" class="f-w-500 mb-2 text-dark">Item 2</h5>
            <p class="f-s-15 text-secondary mg-b-14">
              Picture a modern-day Leonardo da Vinci, armed with a palette
              of pixels and a canvas of code, and you have the essence of
              a web designer...
            </p>

            <h5 id="list-item-3" class="f-w-500 mb-2 text-dark">Item 3</h5>
            <p class="f-s-15 text-secondary mg-b-14">
              In the realm of the digital realm, the web designer reigns supreme
              as the virtuoso of the online universe...
            </p>

            <h5 id="list-item-4" class="f-w-500 mb-2 text-dark">Item 4</h5>
            <p class="f-s-15 text-secondary mg-b-14">
              A digital artisan, skilled in the art of crafting captivating
              online experiences, is what one would refer to as a web designer...
            </p>
          </div>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
