<script setup>
const props = defineProps({
  breadcrumb: {
    type: Object,
    required: true,
    default: () => ({ title: "", items: [] })
  }
});
</script>

<template>
  <div class="row m-1">
    <div class="col-12">
      <!-- Page Title -->
      <h4 class="main-title">{{ breadcrumb.title }}</h4>

      <!-- Breadcrumbs -->
      <ul class="app-line-breadcrumbs mb-3">
        <li
            v-for="(item, index) in breadcrumb.items"
            :key="index"

        >
          <!-- If not active, render as link -->
          <a
              v-if="!item.active"
              class="f-s-14 f-w-500"
              :href="item.href || '#'"
          >
         <span class="flex items-center gap-1 f-w-500">
              <!-- Render Phosphor Icon if passed -->
              <component
                  v-if="item.icon"
                  :is="item.icon"
                  size="16"
                  weight="duotone"
              />
              {{ item.label }}
            </span>
          </a>

          <!-- If active, render as plain text -->
          <a
              v-else
              class="f-s-14 f-w-500 text-primary"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
