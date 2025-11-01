<script setup>
import { ref, computed } from 'vue'
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BInputGroup,
  BInputGroupText,
  BButton,
  BModal,
  BFormCheckbox
} from 'bootstrap-vue-next'

import { IconPlus } from '@tabler/icons-vue'
import UploadProduct from '@/components/Apps/EshopePage/AddProduct/UploadProduct.vue'
import TextEditor from '@/components/UiKits/Editor/TextEditor.vue'
import VueSelect from 'vue3-select'
import 'vue3-select/dist/vue3-select.css'
import AppLayout from '@/views/AppLayout.vue'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue'
import { PhStack } from '@phosphor-icons/vue'

// reactive data
const options = ['Option 1', 'Option 2', 'Option 3']
const selectedOption = ref(null)
const showModal = ref(false)
const productTags = ref(null)

// tag options
const tagOptions = [
  { value: 'Cl', label: 'Clothing' },
  { value: 'SH', label: 'Shoes' },
  { value: 'TO', label: 'Toys' },
  { value: 'IT', label: 'Internet Of Things' },
  { value: 'BS', label: 'Books & Stationaries' },
  { value: 'AS', label: 'Art Supplies' }
]

// breadcrumb data
const breadcrumbItems = computed(() => ({
  title: 'Add Product',
  items: [
    { label: 'Apps', icon: PhStack },
    { label: 'E-shop' },
    { label: 'Add Product', active: true }
  ]
}))
</script>

<template>
  <app-layout>
    <main>
      <b-container fluid>
        <breadcrumb :breadcrumb="breadcrumbItems" />

        <b-row>
          <!-- Left Column -->
          <b-col lg="8" xxl="9">
            <b-card no-body>
              <b-card-body>
                <div class="app-product-section">
                  <!-- General Information -->
                  <div class="main-title mb-3">
                    <h6>General Information</h6>
                  </div>

                  <b-form class="app-form">
                    <b-form-group class="mb-3">
                      <label class="form-label">Product Title</label>
                      <b-form-input placeholder="Enter product title" />
                    </b-form-group>

                    <b-form-group class="mb-3">
                      <label class="form-label">Brand Name</label>
                      <b-form-input placeholder="Enter brand name" />
                    </b-form-group>

                    <b-form-group class="mb-3">
                      <label class="form-label">Product Description</label>
                      <text-editor />
                    </b-form-group>
                  </b-form>

                  <div class="app-divider-v dashed my-4" />

                  <!-- Category -->
                  <div class="main-title mb-3">
                    <h6>Category</h6>
                  </div>

                  <b-form class="app-form">
                    <b-row>
                      <b-col md="6">
                        <b-form-group class="mb-3">
                          <label class="form-label">Product Category</label>
                          <vue-select v-model="selectedOption" :options="options" placeholder="Select category" />
                        </b-form-group>
                      </b-col>

                      <b-col md="6">
                        <b-form-group class="mb-3">
                          <label class="form-label">Product Tags</label>
                          <vue-select
                              v-model="productTags"
                              :options="tagOptions"
                              placeholder="Select tags"
                              clearable
                              multiple
                          />
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>

                  <div class="app-divider-v dashed my-4" />

                  <!-- Inventory -->
                  <div class="main-title mb-3">
                    <h6>Inventory</h6>
                  </div>

                  <b-form class="app-form">
                    <b-row>
                      <b-col md="3">
                        <b-form-group class="mb-3">
                          <label class="form-label">SKU (Optional)</label>
                          <b-form-input placeholder="Enter SKU" />
                        </b-form-group>
                      </b-col>

                      <b-col md="6">
                        <b-form-group class="mb-3">
                          <label class="form-label">Barcode</label>
                          <b-form-input placeholder="Enter barcode" />
                        </b-form-group>
                      </b-col>

                      <b-col md="3">
                        <b-form-group class="mb-3">
                          <label class="form-label">Quantity</label>
                          <b-form-input placeholder="Enter quantity" />
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>

                  <div class="app-divider-v dashed my-4" />

                  <!-- Shipping -->
                  <div class="main-title mb-3">
                    <h6>Shipping</h6>
                  </div>

                  <b-form class="app-form">
                    <b-row>
                      <b-col md="6">
                        <b-form-group class="mb-3">
                          <label class="form-label">Weight</label>
                          <b-form-input placeholder="Enter weight" />
                          <small class="text-muted">
                            Package Size (The package you use to ship your product)
                          </small>
                        </b-form-group>
                      </b-col>

                      <b-col md="6">
                        <b-form-group class="mb-3">
                          <label class="form-label">Shipping Days</label>
                          <b-form-input placeholder="Enter shipping days" />
                        </b-form-group>
                      </b-col>

                      <b-col md="4">
                        <b-form-group class="mb-3">
                          <label class="form-label">Length</label>
                          <b-form-input placeholder="Enter length" />
                        </b-form-group>
                      </b-col>

                      <b-col md="4">
                        <b-form-group class="mb-3">
                          <label class="form-label">Breadth</label>
                          <b-form-input placeholder="Enter breadth" />
                        </b-form-group>
                      </b-col>

                      <b-col md="4">
                        <b-form-group class="mb-3">
                          <label class="form-label">Width</label>
                          <b-form-input placeholder="Enter width" />
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <!-- Buttons -->
                    <div class="mt-4 text-end">
                      <b-button variant="outline-secondary" class="me-2">Discard</b-button>
                      <b-button variant="primary">Add Product</b-button>
                    </div>
                  </b-form>
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Right Column -->
          <b-col lg="4" xxl="3">
            <b-card no-body>
              <b-card-body>
                <div class="app-product-section">
                  <!-- Product Media -->
                  <div class="main-title">
                    <h6>Product Media</h6>
                  </div>

                  <upload-product />

                  <div class="app-divider-v dashed" />

                  <!-- Pricing -->
                  <div class="main-title">
                    <h6>Pricing</h6>
                  </div>

                  <b-form class="app-form">
                    <b-form-group class="mb-3">
                      <label class="form-label">Price</label>
                      <b-input-group>
                        <b-input-group-text>$</b-input-group-text>
                        <b-form-input placeholder="Enter price" />
                      </b-input-group>
                    </b-form-group>

                    <b-form-group class="mb-3">
                      <label class="form-label">Compare at price</label>
                      <b-input-group>
                        <b-input-group-text>$</b-input-group-text>
                        <b-form-input placeholder="Enter compare price" />
                      </b-input-group>
                    </b-form-group>

                    <b-form-group class="mb-3">
                      <label class="form-label">Discount (%)</label>
                      <b-form-input placeholder="Enter discount" />
                    </b-form-group>

                    <b-form-group class="mb-3">
                      <label class="form-label">Discount Type</label>
                      <b-form-input placeholder="Enter discount type" />
                    </b-form-group>
                  </b-form>

                  <div class="app-divider-v dashed" />

                  <!-- Product Variants -->
                  <div class="main-title">
                    <h6>Product Variants</h6>
                  </div>

                  <div class="variants-box">
                    <a href="#" class="text-primary" @click.prevent="showModal = true">
                      <icon-plus size="18" /> Add Variants
                    </a>
                  </div>

                  <b-modal v-model="showModal" title="Add Variant" centered>
                    <b-form>
                      <b-form-group class="mb-3">
                        <label>Variant Type</label>
                        <b-form-select>
                          <option disabled selected>Select Option</option>
                          <option value="1">Size</option>
                          <option value="2">Weight</option>
                          <option value="3">Color</option>
                        </b-form-select>
                      </b-form-group>

                      <b-form-group class="mb-3">
                        <label>Product Height</label>
                        <b-form-input type="number" placeholder="Enter height" />
                      </b-form-group>
                    </b-form>

                    <template #footer>
                      <b-button variant="secondary" @click="showModal = false">Close</b-button>
                      <b-button variant="primary" @click="showModal = false">Add Variants</b-button>
                    </template>
                  </b-modal>

                  <div class="app-divider-v dashed" />

                  <!-- Visibility -->
                  <div class="main-title">
                    <h6>Visibility</h6>
                  </div>

                  <b-form class="mt-2">
                    <b-form-checkbox value="published">Published</b-form-checkbox>
                    <b-form-checkbox value="schedule">Schedule</b-form-checkbox>
                    <b-form-checkbox value="hidden">Hidden</b-form-checkbox>
                  </b-form>

                  <b-form class="mt-4 app-form">
                    <b-form-group class="mb-3">
                      <label>Publish Date</label>
                      <b-form-input type="text" placeholder="Select date" />
                      <small class="text-muted">
                        The category will not be visible until the specified date.
                      </small>
                    </b-form-group>
                  </b-form>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </app-layout>
</template>
