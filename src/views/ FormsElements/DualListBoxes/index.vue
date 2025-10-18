<template>
  <AppLayout>
    <main>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-container fluid>
        <b-row>
          <div class="col-xxl-6">
            <b-card>
              <template #header>
                <h5>Select by class</h5>
              </template>
              <b-card-body>
                <div class="dual-listbox-container">
                  <div class="dual-listbox">
                    <div class="listbox-section">
                      <h6>{{ lang.availableHeader }}</h6>
                      <b-form-input
                          v-if="canFilter"
                          v-model="availableFilter1"
                          placeholder="Filter available options..."
                          class="mb-2"
                      />
                      <b-list-group class="listbox-group">
                        <b-list-group-item
                            v-for="option in filteredAvailable1"
                            :key="option.value"
                            @click="addToSelected(option.value, 1)"
                            class="listbox-item"
                            :class="{ 'active': isSelected(option.value, 1) }"
                        >
                          {{ option.label }}
                        </b-list-group-item>
                      </b-list-group>
                    </div>

                    <div class="listbox-buttons">
                      <b-button @click="addAllToSelected(1)" size="sm" class="mb-2" variant="primary">
                        {{ icons.moveAllToSelected }}
                      </b-button>
                      <b-button @click="addToSelected(getFirstAvailable(1), 1)" size="sm" class="mb-2" variant="primary">
                        {{ icons.moveToSelected }}
                      </b-button>
                      <b-button @click="removeFromSelected(getFirstSelected(1), 1)" size="sm" class="mb-2" variant="primary">
                        {{ icons.moveToAvailable }}
                      </b-button>
                      <b-button @click="removeAllFromSelected(1)" size="sm" variant="primary">
                        {{ icons.moveAllToAvailable }}
                      </b-button>
                    </div>

                    <div class="listbox-section">
                      <h6>{{ lang.selectedHeader }}</h6>
                      <b-form-input
                          v-if="canFilter"
                          v-model="selectedFilter1"
                          placeholder="Filter selected options..."
                          class="mb-2"
                      />
                      <b-list-group class="listbox-group">
                        <b-list-group-item
                            v-for="option in filteredSelected1"
                            :key="option.value"
                            @click="removeFromSelected(option.value, 1)"
                            class="listbox-item"
                            :class="{ 'active': isSelected(option.value, 1) }"
                        >
                          {{ option.label }}
                        </b-list-group-item>
                      </b-list-group>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </div>

          <div class="col-xxl-6">
            <b-card>
              <template #header>
                <h5>Add options and add eventListeners</h5>
              </template>
              <b-card-body>
                <div class="selected-element d-flex mb-2 f-w-600">
                  <label>Selected element :&nbsp;</label>
                  <ul class="changed-element text-primary">
                    <li>{{ selectedElements1.length > 0 ? selectedElements1.join(', ') : 'Nothing yet' }}</li>
                  </ul>
                </div>
                <div class="dual-listbox-container">
                  <div class="dual-listbox">
                    <div class="listbox-section">
                      <h6>Available options</h6>
                      <b-form-input
                          v-model="availableFilter2"
                          placeholder="Filter available options..."
                          class="mb-2"
                      />
                      <b-list-group class="listbox-group">
                        <b-list-group-item
                            v-for="option in filteredAvailable2"
                            :key="option.value"
                            @click="addToSelected(option.value, 2)"
                            class="listbox-item"
                        >
                          {{ option.label }}
                        </b-list-group-item>
                      </b-list-group>
                    </div>

                    <div class="listbox-buttons">
                      <b-button @click="addAllToSelected(2)" size="sm" class="mb-2" variant="primary">>></b-button>
                      <b-button @click="addToSelected(getFirstAvailable(2), 2)" size="sm" class="mb-2" variant="primary">></b-button>
                      <b-button @click="removeFromSelected(getFirstSelected(2), 2)" size="sm" class="mb-2" variant="primary"><</b-button>
                      <b-button @click="removeAllFromSelected(2)" size="sm" variant="primary"><<</b-button>
                    </div>

                    <div class="listbox-section">
                      <h6>Selected options</h6>
                      <b-form-input
                          v-model="selectedFilter2"
                          placeholder="Filter selected options..."
                          class="mb-2"
                      />
                      <b-list-group class="listbox-group">
                        <b-list-group-item
                            v-for="option in filteredSelected2"
                            :key="option.value"
                            @click="removeFromSelected(option.value, 2)"
                            class="listbox-item"
                        >
                          {{ option.label }}
                        </b-list-group-item>
                      </b-list-group>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </div>

          <div class="col-xxl-6">
            <b-card>
              <template #header>
                <h5>Select by class</h5>
              </template>
              <b-card-body>
                <div class="dual-listbox-container custom-dual-listbox">
                  <div class="dual-listbox">
                    <div class="listbox-section">
                      <h6>Available options</h6>
                      <b-form-input
                          v-model="availableFilter3"
                          placeholder="Filter available options..."
                          class="mb-2"
                      />
                      <b-list-group class="listbox-group">
                        <b-list-group-item
                            v-for="option in filteredAvailable3"
                            :key="option.value"
                            @click="addToSelected(option.value, 3)"
                            class="listbox-item"
                        >
                          {{ option.label }}
                        </b-list-group-item>
                      </b-list-group>
                    </div>

                    <div class="listbox-buttons">
                      <b-button @click="addAllToSelected(3)" size="sm" class="mb-2" variant="primary">Add All</b-button>
                      <b-button @click="addToSelected(getFirstAvailable(3), 3)" size="sm" class="mb-2" variant="primary">Add</b-button>
                      <b-button @click="removeFromSelected(getFirstSelected(3), 3)" size="sm" class="mb-2" variant="primary">Remove</b-button>
                      <b-button @click="removeAllFromSelected(3)" size="sm" variant="primary">Remove All</b-button>
                    </div>

                    <div class="listbox-section">
                      <h6>Selected options</h6>
                      <b-form-input
                          v-model="selectedFilter3"
                          placeholder="Filter selected options..."
                          class="mb-2"
                      />
                      <b-list-group class="listbox-group">
                        <b-list-group-item
                            v-for="option in filteredSelected3"
                            :key="option.value"
                            @click="removeFromSelected(option.value, 3)"
                            class="listbox-item"
                        >
                          {{ option.label }}
                        </b-list-group-item>
                      </b-list-group>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </div>

          <div class="col-xxl-6">
            <b-card>
              <template #header>
                <h5>Show the sort buttons</h5>
              </template>
              <b-card-body>
                <div class="dual-listbox-container">
                  <div class="dual-listbox">
                    <div class="listbox-section">
                      <h6>Available options</h6>
                      <b-form-input
                          v-model="availableFilter4"
                          placeholder="Filter available options..."
                          class="mb-2"
                      />
                      <b-list-group class="listbox-group">
                        <b-list-group-item
                            v-for="option in filteredAvailable4"
                            :key="option.value"
                            @click="addToSelected(option.value, 4)"
                            class="listbox-item"
                        >
                          {{ option.label }}
                        </b-list-group-item>
                      </b-list-group>
                    </div>

                    <div class="listbox-buttons">
                      <b-button @click="addAllToSelected(4)" size="sm" class="mb-2" variant="primary">Add All</b-button>
                      <b-button @click="addToSelected(getFirstAvailable(4), 4)" size="sm" class="mb-2" variant="primary">Add</b-button>
                      <b-button @click="removeFromSelected(getFirstSelected(4), 4)" size="sm" class="mb-2" variant="primary">Remove</b-button>
                      <b-button @click="removeAllFromSelected(4)" size="sm" variant="primary">Remove All</b-button>
                      <div class="sort-buttons mt-2">
                        <b-button @click="moveUp(4)" size="sm" class="mb-1" variant="primary">↑</b-button>
                        <b-button @click="moveDown(4)" size="sm" variant="primary">↓</b-button>
                      </div>
                    </div>

                    <div class="listbox-section">
                      <h6>Selected options</h6>
                      <b-form-input
                          v-model="selectedFilter4"
                          placeholder="Filter selected options..."
                          class="mb-2"
                      />
                      <b-list-group class="listbox-group">
                        <b-list-group-item
                            v-for="option in filteredSelected4"
                            :key="option.value"
                            @click="removeFromSelected(option.value, 4)"
                            class="listbox-item"
                        >
                          {{ option.label }}
                        </b-list-group-item>
                      </b-list-group>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </div>

        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  BContainer,
  BRow,
  BCard,
  BCardBody,
  BTable,
  BListGroup,
  BListGroupItem,
  BFormInput,
  BButton
} from 'bootstrap-vue-next'
import AppLayout from "@/views/AppLayout.vue"
import {
  options,
  options2,
  allOptions,
  publicFunctions
} from "@/data/formelements/DuelListBox/DuelListBox.js"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhCardholder} from "@phosphor-icons/vue";

// State for each dual listbox
const selected1 = ref([])
const selected2 = ref([])
const selected3 = ref([])
const selected4 = ref([])

// Filters for each listbox
const availableFilter1 = ref('')
const selectedFilter1 = ref('')
const availableFilter2 = ref('')
const selectedFilter2 = ref('')
const availableFilter3 = ref('')
const selectedFilter3 = ref('')
const availableFilter4 = ref('')
const selectedFilter4 = ref('')

const canFilter = true

const lang = {
  availableHeader: 'Available options',
  selectedHeader: 'Selected options'
}

const icons = {
  moveAllToSelected: 'Add All',
  moveToSelected: 'Add',
  moveToAvailable: 'Remove',
  moveAllToAvailable: 'Remove All'
}

// Computed properties for filtered options
const filteredAvailable1 = computed(() => {
  return options.filter(opt =>
      opt.label.toLowerCase().includes(availableFilter1.value.toLowerCase()) &&
      !selected1.value.includes(opt.value)
  )
})

const filteredSelected1 = computed(() => {
  return options.filter(opt =>
      selected1.value.includes(opt.value) &&
      opt.label.toLowerCase().includes(selectedFilter1.value.toLowerCase())
  )
})

const filteredAvailable2 = computed(() => {
  return options.filter(opt =>
      opt.label.toLowerCase().includes(availableFilter2.value.toLowerCase()) &&
      !selected2.value.includes(opt.value)
  )
})

const filteredSelected2 = computed(() => {
  return options.filter(opt =>
      selected2.value.includes(opt.value) &&
      opt.label.toLowerCase().includes(selectedFilter2.value.toLowerCase())
  )
})

const filteredAvailable3 = computed(() => {
  return options.filter(opt =>
      opt.label.toLowerCase().includes(availableFilter3.value.toLowerCase()) &&
      !selected3.value.includes(opt.value)
  )
})

const filteredSelected3 = computed(() => {
  return options.filter(opt =>
      selected3.value.includes(opt.value) &&
      opt.label.toLowerCase().includes(selectedFilter3.value.toLowerCase())
  )
})

const filteredAvailable4 = computed(() => {
  return options2.filter(opt =>
      opt.label.toLowerCase().includes(availableFilter4.value.toLowerCase()) &&
      !selected4.value.includes(opt.value)
  )
})

const filteredSelected4 = computed(() => {
  return options2.filter(opt =>
      selected4.value.includes(opt.value) &&
      opt.label.toLowerCase().includes(selectedFilter4.value.toLowerCase())
  )
})

const selectedElements1 = computed(() => {
  return selected2.value.map(val => {
    const option = options.find(opt => opt.value === val)
    return option ? option.label : val
  })
})

// Table fields
const optionFields = [
  { key: 'option', label: 'Option' },
  { key: 'default', label: 'Default' },
  { key: 'type', label: 'Excepted values' },
  { key: 'explanation', label: 'Explanation' }
]

const functionFields = [
  { key: 'name', label: 'Function name' },
  { key: 'args', label: 'Arguments' },
  { key: 'desc', label: 'Explanation' }
]

// Methods
const addToSelected = (value, listIndex) => {
  if (!value) return

  const selected = getSelectedArray(listIndex)
  if (!selected.value.includes(value)) {
    selected.value.push(value)
  }
}

const removeFromSelected = (value, listIndex) => {
  if (!value) return

  const selected = getSelectedArray(listIndex)
  const index = selected.value.indexOf(value)
  if (index > -1) {
    selected.value.splice(index, 1)
  }
}

const addAllToSelected = (listIndex) => {
  const selected = getSelectedArray(listIndex)
  const available = getAvailableOptions(listIndex)
  selected.value = [...selected.value, ...available.value.map(opt => opt.value)]
}

const removeAllFromSelected = (listIndex) => {
  const selected = getSelectedArray(listIndex)
  selected.value = []
}

const getFirstAvailable = (listIndex) => {
  const available = getAvailableOptions(listIndex)
  return available.value.length > 0 ? available.value[0].value : null
}

const getFirstSelected = (listIndex) => {
  const selected = getSelectedArray(listIndex)
  return selected.value.length > 0 ? selected.value[0] : null
}

const isSelected = (value, listIndex) => {
  const selected = getSelectedArray(listIndex)
  return selected.value.includes(value)
}

const moveUp = (listIndex) => {
  const selected = getSelectedArray(listIndex)
  // Implementation for move up logic
  if (selected.value.length > 0) {
    // Simple implementation - you can enhance this
    console.log('Move up for list', listIndex)
  }
}

const moveDown = (listIndex) => {
  const selected = getSelectedArray(listIndex)
  // Implementation for move down logic
  if (selected.value.length > 0) {
    // Simple implementation - you can enhance this
    console.log('Move down for list', listIndex)
  }
}

const getSelectedArray = (listIndex) => {
  switch (listIndex) {
    case 1:
      return selected1
    case 2:
      return selected2
    case 3:
      return selected3
    case 4:
      return selected4
    default:
      return selected1
  }
}

const getAvailableOptions = (listIndex) => {
  switch (listIndex) {
    case 1:
      return filteredAvailable1
    case 2:
      return filteredAvailable2
    case 3:
      return filteredAvailable3
    case 4:
      return filteredAvailable4
    default:
      return filteredAvailable1
  }
}

onMounted(() => {
  // Prism.highlightAll() - Remove if not needed or ensure Prism is imported
})

// Breadcrumb data
const breadcrumbItems = {
  title: "Dual Listboxes",
  items: [
    {label: "Form element", icon: PhCardholder},
    {label: "Dual Listboxes", active: true},
  ],
};
</script>

<style scoped>
.dual-listbox-container {
  width: 100%;
}

.dual-listbox {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.listbox-section {
  flex: 1;
  min-width: 0;
}

.listbox-section h6 {
  margin-bottom: 10px;
  font-weight: 600;
}

.listbox-group {
  height: 200px;
  overflow-y: auto;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
}

.listbox-item {
  cursor: pointer;
  padding: 8px 12px;
  border: none;
  border-bottom: 1px solid #f8f9fa;
}

.listbox-item:hover {
  background-color: #f8f9fa;
}

.listbox-item.active {
  border-bottom: 1px solid rgba(var(--secondary), 1);
  color:rgba(var(--dark), 1);
}

.listbox-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
}

.listbox-buttons .btn {
  min-width: 80px;
}

.sort-buttons {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.code-header {
  background-color: #f8f9fa;
  padding: 1rem;
  margin: -1rem -1rem 0 -1rem;
  border-bottom: 1px solid #dee2e6;
}

.custom-dual-listbox {
  /* Add your custom styles here */
}

.table-bottom-border {
  border-bottom: 1px solid #dee2e6;
}

.selected-element {
  align-items: center;
}

.changed-element {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>