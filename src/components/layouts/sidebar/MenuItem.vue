<script setup>
import { ref, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import SvgIcon from "@/components/layouts/sidebar/SvgIcon.vue";

const props = defineProps({
  title: String,
  iconClass: String,
  type: String,
  path: String,
  badgeCount: [String, Number],
  links: Array,
  name: String,
  collapseId: String
});

const route = useRoute();

// main dropdown state
const isOpen = ref(false);

// nested dropdown states
const subOpen = ref([]);
if (props.links && props.links.length) {
  subOpen.value = props.links.map(() => false);
}

// functions
const toggleCollapse = () => {
  isOpen.value = !isOpen.value;
};

const toggleSubCollapse = (index) => {
  subOpen.value[index] = !subOpen.value[index];
};

const isActive = (linkPath) => linkPath === route.path;

const badgeClasses = computed(() => {
  if (props.collapseId === "advance-ui") return "rounded-pill bg-warning";
  if (props.badgeCount === "new") return "bg-danger";
  return "text-primary-dark bg-primary";
});
</script>



<template>
  <template v-if="type === 'dropdown'">
    <li v-if="title" class="menu-title">
      <span>{{ title }}</span>
    </li>
    <li>
      <a href="#" @click.prevent="toggleCollapse"
         :aria-expanded="isOpen.toString()"
         :aria-controls="collapseId" role="button">
        <SvgIcon :iconId="iconClass" />
        {{ name }}
        <span v-if="badgeCount" :class="badgeClasses" class="badge badge-notification ms-2">
          {{ badgeCount }}
        </span>
      </a>

      <ul v-show="isOpen" :id="collapseId" class="collapse show">
        <template v-for="(link, index) in links" :key="index">
          <li v-if="link.children" class="another-level">
            <a href="#" @click.prevent="toggleSubCollapse(index)"
               :aria-expanded="subOpen[index].toString()"
               :aria-controls="link.collapseId"
               role="button">
              {{ link.name }}
            </a>
            <ul v-show="subOpen[index]" :id="link.collapseId" class="collapse show">
              <li v-for="(child, uIndex) in link.children" :key="uIndex"
                  :class="{ active: isActive(child.path) }">
                <RouterLink :to="child.path">{{ child.name }}</RouterLink>
              </li>
            </ul>
          </li>
          <li v-else :class="{ active: isActive(link.path) }">
            <RouterLink :to="link.path">{{ link.name }}</RouterLink>
          </li>
        </template>
      </ul>
    </li>
  </template>

  <template v-else>
    <li :class="['no-sub', isActive(path) ? 'active' : '']">
      <RouterLink :to="path || ''">
        <SvgIcon :iconId="iconClass" />
        {{ name }}
      </RouterLink>
    </li>
  </template>
</template>


