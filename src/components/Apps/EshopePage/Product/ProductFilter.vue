<script setup>
import { ref } from 'vue'
import {
  BAccordion,
  BAccordionItem,
  BButton,
  BFormInput,
  BFormCheckbox,

} from 'bootstrap-vue-next'
import { IconStar, IconStarFilled } from '@tabler/icons-vue'
import {
  PhCirclesThreePlus,
  PhDesktopTower,
  PhFirstAidKit,
  PhGameController,
  PhShoppingCart
} from '@phosphor-icons/vue'

const active = ref('1')

const selectedColor = ref('primary')
const checkedGenders = ref([])
const selectedSort = ref('Featured')
const selectedCategories = ref([])
const rating = ref(3)

const colorOptions = [
  { value: 'primary', className: 'bg-primary' },
  { value: 'secondary', className: 'bg-secondary' },
  { value: 'success', className: 'bg-success' },
  { value: 'danger', className: 'bg-danger' },
  { value: 'warning', className: 'bg-warning' },
  { value: 'info', className: 'bg-info' },
  { value: 'light', className: 'bg-light border' },
  { value: 'dark', className: 'bg-dark' }
]

const genderOptions = ['Men', 'Women', 'Boys', 'Girls', 'Boys & Girls']
const sortOptions = ['Featured', 'Price: High to Low', 'Price: Low to High', 'Newest', 'Ratings']

const categoryOptions = [
  { icon: PhDesktopTower, label: 'Home Appliances' },
  { icon: PhFirstAidKit, label: 'Health & Beauty' },
  { icon: PhGameController, label: 'Toys & Games' },
  { icon: PhShoppingCart, label: 'Groceries' },
  { icon: PhCirclesThreePlus, label: 'See all' }
]

const clearAll = () => {
  selectedColor.value = 'primary'
  selectedSort.value = 'Featured'
  checkedGenders.value = []
  selectedCategories.value = []
}
</script>

<template>
  <div class="p-0">
    <b-accordion v-model="active" class="app-accordion accordion-light-primary">
      <!-- Sort By -->
      <b-accordion-item value="0">
        <template #title>Sort By</template>
        <div>
          <b-form-checkbox
              v-for="option in sortOptions"
              :key="option"
              v-model="selectedSort"
              :value="option"
              type="radio"
              name="sortGroup"
              class="d-block"
          >
            {{ option }}
          </b-form-checkbox>
        </div>
      </b-accordion-item>

      <!-- Categories -->
      <b-accordion-item value="1">
        <template #title>Categories</template>
        <div>
          <b-form-checkbox
              v-for="(item, i) in categoryOptions"
              :key="i"
              v-model="selectedCategories"
              :value="item.label"
              class="d-block"
          >
            <span class="d-flex align-items-center gap-2">
              <component :is="item.icon" :size="18" />
              {{ item.label }}
            </span>
          </b-form-checkbox>
        </div>
      </b-accordion-item>

      <!-- Color -->
      <b-accordion-item value="2">
        <template #title>Color</template>
        <div class="d-flex flex-wrap gap-2">
          <b-form-checkbox
              v-for="color in colorOptions"
              :key="color.value"
              v-model="selectedColor"
              :value="color.value"
              type="radio"
              name="colorSelect"
              class="position-relative"
          >
            <template #label>
              <span
                  :class="`d-inline-block rounded-circle ${color.className}`"
                  :style="{ width: '20px', height: '20px', marginLeft: '8px' }"
              />
            </template>
          </b-form-checkbox>
        </div>
      </b-accordion-item>

      <!-- Gender -->
      <b-accordion-item value="3">
        <template #title>Gender</template>
        <div>
          <b-form-checkbox
              v-for="opt in genderOptions"
              :key="opt"
              v-model="checkedGenders"
              :value="opt"
              class="d-block"
          >
            {{ opt }}
          </b-form-checkbox>
        </div>
      </b-accordion-item>

      <!-- Customer Ratings -->
      <b-accordion-item value="4">
        <template #title>Customer Ratings</template>
        <div class="d-flex gap-1 justify-content-start">
          <IconStarFilled
              v-for="i in rating"
              :key="`filled-${i}`"
              class="text-warning"
          />
          <IconStar
              v-for="i in 5 - rating"
              :key="`empty-${i}`"
              class="text-muted"
          />
        </div>
      </b-accordion-item>

      <!-- Price Range -->
      <b-accordion-item value="5">
        <template #title>Price Range</template>
        <input
            type="range"
            min="0"
            max="1000"
            step="10"
            class="form-range mb-2"
        />
        <div class="d-flex gap-2">
          <b-form-input type="number" placeholder="Min" />
          <b-form-input type="number" placeholder="Max" />
        </div>
      </b-accordion-item>
    </b-accordion>

    <!-- Buttons -->
    <div class="text-end m-3">
      <b-button variant="outline-primary" size="sm" class="me-2" @click="clearAll">
        Clear All
      </b-button>
      <b-button variant="secondary" size="sm">
        Apply
      </b-button>
    </div>
  </div>
</template>
