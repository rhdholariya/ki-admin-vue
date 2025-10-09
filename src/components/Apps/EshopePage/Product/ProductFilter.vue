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

const active = ref("1");

const selectedColor = ref('primary')
const checkedGenders = ref([])
const selectedSort = ref('Featured')
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

const setSelectedColor = color => (selectedColor.value = color)
const setSelectedSort = option => (selectedSort.value = option)
</script>

<template>
  <div class="p-0">
    <BAccordion v-model="active" class=" app-accordion accordion-light-primary">
      <!-- Sort By -->
      <BAccordionItem value="0" >
        <template #title>Sort By</template>
        <div>
          <BFormCheckbox
              v-for="option in sortOptions"
              :key="option"
              type="radio"
              name="sortGroup"
              :id="`sort-${option}`"
              :checked="selectedSort === option"
              @change="setSelectedSort(option)"
              class="d-block"
          >
            {{ option }}
          </BFormCheckbox>
        </div>
      </BAccordionItem>

      <!-- Categories -->
      <BAccordionItem value="1">
        <template #title>Categories</template>
        <div>
          <BFormCheckbox
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
          </BFormCheckbox>
        </div>
      </BAccordionItem>

      <!-- Color -->
      <BAccordionItem value="2">
        <template #title>Color</template>
        <div class="d-flex flex-wrap gap-2">
          <BFormCheckbox
              v-for="color in colorOptions"
              :key="color.value"
              type="radio"
              name="colorSelect"
              :id="`color-${color.value}`"
              :checked="selectedColor === color.value"
              @change="setSelectedColor(color.value)"
              class="position-relative"
          >
            <template #label>
              <span
                  :class="`d-inline-block rounded-circle ${color.className}`"
                  :style="{ width: '20px', height: '20px', marginLeft: '8px' }"
              />
            </template>
          </BFormCheckbox>
        </div>
      </BAccordionItem>

      <!-- Gender -->
      <BAccordionItem value="3">
        <template #title>Gender</template>
        <div>
          <BFormCheckbox
              v-for="opt in genderOptions"
              :key="opt"
              v-model="checkedGenders"
              :value="opt"
              :id="`gender-${opt}`"
              class="d-block"
          >
            {{ opt }}
          </BFormCheckbox>
        </div>
      </BAccordionItem>

      <!-- Customer Ratings -->
      <BAccordionItem value="4">
        <template #title>Customer Ratings</template>
        <div class="d-flex gap-1 justify-content-start">
          <IconStarFilled
              v-for="i in rating"
              :key="`filled-${i}`"
              class="text-warning"
          />
          <IconStar
              v-for="i in (5 - rating)"
              :key="`empty-${i}`"
              class="text-muted"
          />
        </div>
      </BAccordionItem>

      <!-- Price Range -->
      <BAccordionItem value="5">
        <template #title>Price Range</template>
        <BFormRange class="mb-2" />
        <div class="d-flex gap-2">
          <BFormInput type="number" placeholder="Min" />
          <BFormInput type="number" placeholder="Max" />
        </div>
      </BAccordionItem>
    </BAccordion>

    <!-- Buttons -->
    <div class="text-end m-3">
      <BButton variant="outline-primary" size="sm" class="me-2">
        Clear All
      </BButton>
      <BButton variant="secondary" size="sm">
        Apply
      </BButton>
    </div>
  </div>
</template>