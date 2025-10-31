<script setup>
import { ref, watch } from 'vue'
import {
  BCard,
  BCardHeader,
  BCardBody,
  BRow,
  BCol,
  BButton,
  BFormInput,
  BInputGroup,
  BDropdown,
  BDropdownItem,
  BDropdownHeader,
  BDropdownDivider
} from 'bootstrap-vue-next'

// Props
const props = defineProps({
  title: String,
  counts: { type: Array, default: () => [] },
  colors: { type: Array, default: () => [] },
  variant: { type: String, default: 'button' },
  withDropdown: Boolean,
  dropdownOpen: Boolean,
  toggleDropdown: Function,
})

// Emits
const emit = defineEmits(['update:counts'])

// Local reactive copy (avoid mutating props directly)
const localCounts = ref([...props.counts])

// Watch for prop updates (keep synced)
watch(
    () => props.counts,
    (newCounts) => {
      localCounts.value = Array.isArray(newCounts) ? [...newCounts] : []
    },
    { deep: true }
)

// Update handler
const handleUpdate = (index, delta) => {
  const newValue = (Number(localCounts.value[index]) || 0) + delta
  localCounts.value.splice(index, 1, newValue)
  emit('update:counts', [...localCounts.value])
}
</script>

<template>
  <b-card class="equal-card" no-body>
    <b-card-header>
      <h5>{{ title }}</h5>
    </b-card-header>

    <b-card-body>
      <b-row>
        <b-col v-for="(count, i) in localCounts" :key="i" class="mt-2">
          <!-- Button variant -->
          <b-input-group v-if="variant === 'button'" class="simplespin">
            <b-button
                :variant="colors[i]"
                class="circle-btn decrement"
                @click="handleUpdate(i, -1)"
            >-</b-button>

            <b-form-input
                v-model="localCounts[i]"
                class="app-small-touchspin count p-2"
                readonly
            />

            <b-button
                :variant="colors[i]"
                class="circle-btn increment"
                @click="handleUpdate(i, 1)"
            >+</b-button>
          </b-input-group>

          <!-- Anchor variant -->
          <div v-else-if="variant === 'anchor'" class="simplespin input-group">
            <a
                @click="handleUpdate(i, -1)"
                class="circle-btn decrement cursor-pointer"
            >-</a>

            <b-form-input
                type="text"
                v-model="localCounts[i]"
                readonly
                class="form-control app-small-touchspin count"
            />

            <a
                @click="handleUpdate(i, 1)"
                class="circle-btn increment cursor-pointer"
            >+</a>
          </div>

          <!-- Custom variant -->
          <div
              v-else-if="variant === 'custom'"
              class="custom-touchspin d-flex align-items-center"
          >
            <button
                type="button"
                @click="handleUpdate(i, -1)"
                :class="`touchspin-circle-btn btn-${colors[i]} text-white decrement`"
            >-</button>

            <b-form-input
                type="text"
                v-model="localCounts[i]"
                readonly
                class="form-control app-small-touchspin count mx-2 text-center"
            />

            <button
                type="button"
                @click="handleUpdate(i, 1)"
                :class="`touchspin-circle-btn btn-${colors[i]} text-white increment`"
            >+</button>
          </div>

          <!-- Round variant -->
          <div v-else-if="variant === 'round'" class="simplerounded d-flex">
            <button
                :class="`btn btn-${colors[i]} btn-left decrement`"
                @click="handleUpdate(i, -1)"
            >-</button>

            <b-form-input
                type="text"
                v-model="localCounts[i]"
                readonly
                class="app-touchspin border-0 count text-center"
            />

            <button
                :class="`btn btn-${colors[i]} btn-right increment`"
                @click="handleUpdate(i, 1)"
            >+</button>
          </div>

          <!-- Round-alt variant -->
          <div v-else-if="variant === 'round-alt'" class="simplerounded d-flex">
            <button
                :class="`btn btn-${colors[i]} round decrement`"
                @click="handleUpdate(i, -1)"
            >-</button>

            <b-form-input
                type="text"
                v-model="localCounts[i]"
                readonly
                class="app-touchspin border-0 count text-center"
            />

            <button
                :class="`btn btn-${colors[i]} round increment`"
                @click="handleUpdate(i, 1)"
            >+</button>
          </div>

          <!-- Default & Horizontal -->
          <div
              v-else-if="['default', 'horizontal'].includes(variant)"
              class="d-flex"
          >
            <b-button
                :variant="colors[i]"
                class="b-r-0 decrement"
                @click="handleUpdate(i, -1)"
            >-</b-button>

            <b-form-input
                type="text"
                v-model="localCounts[i]"
                readonly
                class="form-control app-touchspin count"
            />

            <b-button
                :variant="colors[i]"
                class="b-r-0 increment"
                @click="handleUpdate(i, 1)"
            >+</b-button>
          </div>

          <!-- With Dropdown -->
          <div v-else-if="variant === 'with-dropdown'" class="d-flex touchspin-with-dropdown">
            <b-button
                :variant="colors[i]"
                class="b-r-0 decrement"
                @click="handleUpdate(i, -1)"
            >-</b-button>

            <span class="input-group-text text-light-secondary text-dark b-r-0">Pre</span>

            <b-form-input
                type="text"
                v-model="localCounts[i]"
                readonly
                class="form-control app-touchspin count"
            />

            <span class="input-group-text text-light-secondary text-dark b-r-0">Post</span>

            <b-button
                variant="secondary"
                class="b-r-0 increment"
                @click="handleUpdate(i, 1)"
            >+</b-button>

            <b-dropdown v-if="withDropdown" :show="props.dropdownOpen" @toggle="props.toggleDropdown">
              <template #button-content>Dropdown</template>
              <b-dropdown-header>Actions</b-dropdown-header>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item>Separated link</b-dropdown-item>
            </b-dropdown>
          </div>

          <!-- Prefix-Postfix -->
          <div v-else-if="variant === 'prefix-postfix'" class="d-flex touchspin-with-PostPre">
            <b-button
                :class="`btn-${colors[i]} b-r-0 decrement`"
                @click="handleUpdate(i, -1)"
            >-</b-button>

            <span class="input-group-text b-r-0">#</span>

            <b-form-input
                type="text"
                v-model="localCounts[i]"
                readonly
                class="form-control app-touchspin count"
            />

            <span class="input-group-text b-r-0">%</span>

            <b-button
                class="btn-secondary b-r-0 increment"
                @click="handleUpdate(i, 1)"
            >+</b-button>
          </div>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>
