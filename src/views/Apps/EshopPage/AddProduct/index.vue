<script setup>
import {computed, ref} from 'vue'
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


} from 'bootstrap-vue-next'

import { IconPlus } from '@tabler/icons-vue'

import UploadProduct from '@/components/Apps/EshopePage/AddProduct/UploadProduct.vue'
import TextEditor from '@/components/UiKits/Editor/TextEditor.vue'

import VueSelect from 'vue3-select'
import 'vue3-select/dist/vue3-select.css'
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";

const options = ['Option 1', 'Option 2', 'Option 3']
const selectedOption = ref(null)

const showModal = ref(false)



const tagOptions = [
  { value: 'Cl', label: 'Clothing' },
  { value: 'SH', label: 'Shoes' },
  { value: 'TO', label: 'Toys' },
  { value: 'IT', label: 'Internet Of Things' },
  { value: 'BS', label: 'Books & Stationaries' },
  { value: 'AS', label: 'Art Supplies' }
]

const productTags = ref(null)

const breadcrumbItems = computed(() => ({
  title: "Add Product",
  items: [
    { label: "Apps", icon: PhStack },
    { label: " E-shop"},
    { label: " Add Product" , active: true }
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
  <BContainer fluid>
    <Breadcrumb :breadcrumb="breadcrumbItems"/>
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
                  <label for="productTitle" class="form-label">Product Title</label>
                  <b-form-input id="productTitle" type="text" />
                </b-form-group>
                <b-form-group class="mb-3">
                  <label for="brandName" class="form-label">Brand Name</label>
                  <b-form-input id="brandName" type="text" />
                </b-form-group>
                <b-form-group class="mb-3">
                  <label class="form-label">Product Description</label>
                  <TextEditor />
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
                      <VueSelect v-model="selectedOption" :options="options" />
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group class="mb-3">
                      <label class="form-label">Product Tags</label>
                      <VueSelect
                          v-model="productTags"
                          :options="tagOptions"
                          placeholder="Select tags"
                          clearable
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
                      <BFormInput type="text" />
                    </b-form-group>
                  </b-col>
                  <BCol md="6">
                    <BFormGroup class="mb-3">
                      <label class="form-label">Barcode</label>
                      <BFormInput type="text" />
                    </BFormGroup>
                  </BCol>
                  <BCol md="3">
                    <BFormGroup class="mb-3">
                      <label class="form-label">Quantity</label>
                      <BFormInput type="text" />
                    </BFormGroup>
                  </BCol>
                </b-row>
              </b-form>

              <div class="app-divider-v dashed my-4" />

              <!-- Shipping -->
              <div class="main-title mb-3">
                <h6>Shipping</h6>
              </div>
              <BForm class="app-form">
                <BRow>
                  <BCol md="6">
                    <BFormGroup class="mb-3">
                      <label class="form-label">Weight</label>
                      <BFormInput type="text" />
                      <small class="text-muted">
                        Package Size (The package you use to ship your product)
                      </small>
                    </BFormGroup>
                  </BCol>
                  <BCol md="6">
                    <BFormGroup class="mb-3">
                      <label class="form-label">Shipping Days</label>
                      <BFormInput type="text" />
                    </BFormGroup>
                  </BCol>
                  <BCol md="4">
                    <BFormGroup class="mb-3">
                      <label class="form-label">Length</label>
                      <BFormInput type="text" />
                    </BFormGroup>
                  </BCol>
                  <BCol md="4">
                    <BFormGroup class="mb-3">
                      <label class="form-label">Breadth</label>
                      <BFormInput type="text" />
                    </BFormGroup>
                  </BCol>
                  <BCol md="4">
                    <BFormGroup class="mb-3">
                      <label class="form-label">Width</label>
                      <BFormInput type="text" />
                    </BFormGroup>
                  </BCol>
                </BRow>

                <!-- Buttons -->
                <div class="mt-4 text-end">
                  <BButton variant="outline-secondary" class="me-2">
                    Discard
                  </BButton>
                  <BButton variant="primary">Add Product</BButton>
                </div>
              </BForm>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Right Column -->
      <BCol lg="4" xxl="3">
        <BCard no-body>
          <BCardBody>
            <div class="app-product-section">
              <!-- Product Media -->
              <div class="main-title">
                <h6>Product Media</h6>
              </div>
              <UploadProduct />

              <div class="app-divider-v dashed" />

              <!-- Pricing -->
              <div class="main-title">
                <h6>Pricing</h6>
              </div>
              <BForm class="app-form">
                <BFormGroup class="mb-3">
                  <label class="form-label">Price</label>
                  <BInputGroup>
                    <BInputGroupText>$</BInputGroupText>
                    <BFormInput />
                  </BInputGroup>
                </BFormGroup>
                <BFormGroup class="mb-3">
                  <label class="form-label">Compare at price</label>
                  <BInputGroup>
                    <BInputGroupText>$</BInputGroupText>
                    <BFormInput />
                  </BInputGroup>
                </BFormGroup>
                <BFormGroup class="mb-3">
                  <label class="form-label">Discount(%)</label>
                  <BFormInput type="text" />
                </BFormGroup>
                <BFormGroup class="mb-3">
                  <label class="form-label">Discount Type</label>
                  <BFormInput type="text" />
                </BFormGroup>
              </BForm>

              <div class="app-divider-v dashed" />

              <!-- Product Variants -->
              <div class="main-title">
                <h6>Product Variants</h6>
              </div>
              <div class="variants-box">
                <a href="#" class="text-primary" @click.prevent="showModal = true">
                  <IconPlus size="18" /> Add Variants
                </a>
              </div>

              <BModal v-model="showModal" title="Add Variant" centered>
                <BForm>
                  <BFormGroup class="mb-3">
                    <label>Variant Type</label>
                    <BFormSelect>
                      <option>select Option</option>
                      <option value="1">Size</option>
                      <option value="2">Weight</option>
                      <option value="3">Color</option>
                    </BFormSelect>
                  </BFormGroup>
                  <BFormGroup class="mb-3">
                    <label>Product Height</label>
                    <BFormInput type="number" placeholder="Enter Number" />
                  </BFormGroup>
                </BForm>
                <template #footer>
                  <BButton variant="secondary" @click="showModal = false">Close</BButton>
                  <BButton variant="primary" @click="showModal = false">Add Variants</BButton>
                </template>
              </BModal>

              <div class="app-divider-v dashed" />

              <!-- Visibility -->
              <div class="main-title">
                <h6>Visibility</h6>
              </div>
              <BForm class="mt-2">
                <BFormCheck label="Published" name="visibility" value="published" class="mt-2" />
                <BFormCheck label="Schedule" name="visibility" value="schedule" class="mt-2" />
                <BFormCheck label="Hidden" name="visibility" value="hidden" class="mt-2" />
              </BForm>

              <BForm class="mt-4">
                <BFormGroup class="mb-3">
                  <label>Publish Date</label>
                  <BFormInput type="text" />
                  <small class="text-muted">
                    The category will not be visible until the specified date.
                  </small>
                </BFormGroup>
              </BForm>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </b-row>
  </BContainer>
    </main>
  </AppLayout>
</template>