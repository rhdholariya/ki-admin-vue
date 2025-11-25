<script setup>
import { ref, computed, nextTick } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import {
  BCard,
  BCardHeader,
  BCardBody,
  BButton,
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  BAlert,
  BLink,
  BContainer,
  BRow,
  BCol,
  BFormCheckbox, BImg
} from 'bootstrap-vue-next'

import AppLayout from '@/views/AppLayout.vue'
import CustomDataTable from '@/components/Table/DataTable/CustomDataTable.vue'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue'
import { PhStack } from '@phosphor-icons/vue'

import {
  apiAvatars,
  apiKeysData as initialApiKeysData,
  apiKeysColumns,
  chartData,
  chartOptions as initialChartOptions
} from '@/data/app/Api/ApiData.js'

const showSuccess = ref(true)
const showError = ref(true)
const showTotal = ref(true)

const apiKeysData = ref([...initialApiKeysData])
const selectedItems = ref(new Set())

const showApiModal = ref(false)
const showApiKeyContent = ref(false)
const apiKeyName = ref('')
const generatedApiKey = ref('')

const showDeleteModal = ref(false)
const itemToDelete = ref(null)

const showViewModal = ref(false)
const selectedApiKey = ref(null)

const showInfoAlert = ref(true)

const filteredSeries = computed(() => {
  const series = []
  if (showSuccess.value) {
    series.push({ name: 'Success', data: chartData, color: '#0dcaf0' })
  }
  if (showError.value) {
    series.push({ name: 'Error', data: chartData.map(v => v * 0.1), color: '#dc3545' })
  }
  if (showTotal.value) {
    series.push({ name: 'Total', data: chartData.map(v => v * 1.1), color: '#0d6efd' })
  }
  return series
})

const chartOptions = ref({ ...initialChartOptions })

const handleCheckboxChange = ({ checked, item }) => {
  if (checked) selectedItems.value.add(item.id)
  else selectedItems.value.delete(item.id)
}

const generateApiKey = () => {
  if (!apiKeyName.value.trim()) return
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let key = 'api_'
  for (let i = 0; i < 32; i++) key += chars.charAt(Math.floor(Math.random() * chars.length))
  generatedApiKey.value = key
  showApiKeyContent.value = true
}

const addApiKey = async () => {
  if (!apiKeyName.value.trim() || !generatedApiKey.value) return

  const newApiKey = {
    id: Date.now(),
    name: apiKeyName.value,
    avatar: apiAvatars.avatar1,
    avatarBgClass: 'text-bg-primary',
    parentName: 'Self Created',
    apiKey: generatedApiKey.value,
    date: new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }),
    email: `${apiKeyName.value.toLowerCase().replace(/\s+/g, '')}@example.com`
  }

  showApiModal.value = false
  await nextTick()
  apiKeysData.value = [newApiKey, ...apiKeysData.value]
  resetApiForm()
}

const resetApiForm = () => {
  apiKeyName.value = ''
  generatedApiKey.value = ''
  showApiKeyContent.value = false
}

const dismissAlert = () => (showInfoAlert.value = false)

const handleDelete = item => {
  itemToDelete.value = item
  showDeleteModal.value = true
}

const confirmDelete = async () => {
  if (itemToDelete.value) {
    const index = apiKeysData.value.findIndex(apiKey => apiKey.id === itemToDelete.value.id)
    if (index !== -1) apiKeysData.value.splice(index, 1)
    showDeleteModal.value = false
    await nextTick()
    itemToDelete.value = null
  }
}

const handleView = item => {
  selectedApiKey.value = item
  showViewModal.value = true
}
const handleEdit = item => console.log('Edit:', item)

const breadcrumbItems = computed(() => ({
  title: 'Api',
  items: [
    { label: 'Apps', icon: PhStack },
    { label: 'Api', active: true }
  ]
}))
</script>

<template>
  <AppLayout>
    <main>
      <Breadcrumb :breadcrumb="breadcrumbItems" />
      <b-container fluid>
        <b-row>
          <b-col lg="6">
            <b-card no-body>
              <b-card-header><h5>API request</h5></b-card-header>
              <b-card-body>
                <div class="api-chart d-flex gap-3 justify-content-end">
                  <b-form-checkbox v-model="showSuccess" switch>22k successfully</b-form-checkbox>
                  <b-form-checkbox v-model="showError" switch>2 error</b-form-checkbox>
                  <b-form-checkbox v-model="showTotal" switch>123 Total request</b-form-checkbox>
                </div>
                <VueApexCharts type="area" height="350" :options="chartOptions" :series="filteredSeries" />
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="6">
            <b-row>
              <b-col sm="6">
                <b-card class="api-eshop-card" no-body>
                  <b-card-body>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6>Total Users</h6>
                      <div class="dropdown bg-light-primary h-40 w-40 d-flex-center b-r-15">
                        <i class="ph ph-user-circle-gear f-s-20"></i>
                      </div>
                    </div>
                    <h3>2564k</h3>
                    <p class="text-success mt-3 f-s-16 f-w-500 mb-0">
                      <i class="ph-bold ph-arrow-up-right text-success f-s-20"></i>92.9%
                      <span class="text-secondary f-s-16 f-w-200">users income</span>
                    </p>
                  </b-card-body>
                </b-card>
              </b-col>

              <b-col sm="6">
                <b-card class="api-eshop-card" no-body>
                  <b-card-body>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6>Members</h6>
                      <div class="dropdown bg-light-success h-40 w-40 d-flex-center b-r-15">
                        <i class="ph ph-users-three f-s-20"></i>
                      </div>
                    </div>
                    <h3>1210k</h3>
                    <p class="text-success mt-3 f-s-16 f-w-500 mb-0">
                      <i class="ph-bold ph-arrow-up-right text-success f-s-20"></i>15.5%
                      <span class="text-secondary f-s-16 f-w-200">members income</span>
                    </p>
                  </b-card-body>
                </b-card>
              </b-col>

              <b-col sm="6">
                <b-card class="api-eshop-card" no-body>
                  <b-card-body>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6>Active Now</h6>
                      <div class="dropdown bg-light-danger h-40 w-40 d-flex-center b-r-15">
                        <i class="ph ph-check-circle f-s-20"></i>
                      </div>
                    </div>
                    <h3>416k</h3>
                    <ul class="avatar-group justify-content-start">
                      <li
                          v-for="(avatar, index) in [apiAvatars.avatar4, apiAvatars.avatar1, apiAvatars.avatar2, apiAvatars.avatar3]"
                          :key="index"
                          class="h-45 w-45 d-flex-center b-r-50 position-relative"
                          :class="avatar.bg"
                      >
                        <b-img :src="avatar.img" class="img-fluid b-r-50 overflow-hidden" />
                      </li>

                      <li class="text-bg-primary h-35 w-35 d-flex-center b-r-50">5+</li>
                    </ul>
                  </b-card-body>
                </b-card>
              </b-col>

              <b-col sm="6">
                <b-card class="api-eshop-card" no-body>
                  <b-card-body>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6>Developer</h6>
                      <div class="dropdown bg-light-warning h-40 w-40 d-flex-center b-r-15">
                        <i class="ph ph-file-arrow-down f-s-20"></i>
                      </div>
                    </div>
                    <h3 class="mb-3">64</h3>
                    <b-button variant="primary" @click="showApiModal = true">Create API</b-button>
                  </b-card-body>
                </b-card>
              </b-col>

              <b-col xl="12">
                <b-alert v-model="showInfoAlert" variant="info" class="alert-border-info bg-white" dismissible>
                  <h6>
                    <i class="ti ti-info-circle f-s-18 me-2 text-info"></i>
                    Review API Token
                  </h6>
                  <p class="text-secondary">
                    Here is your new api token. This is the only time the token will ever be displayed, so be sure not
                    to lose it!
                  </p>
                  <div class="text-end">
                    <BLink href="#" class="link-primary text-d-underline" @click="dismissAlert">Don't allow</BLink>
                    <BLink href="#" class="link-primary text-d-underline ms-2">Allow</BLink>
                  </div>
                </b-alert>
              </b-col>
            </b-row>

            <b-modal
                v-model="showApiModal"
                title="Create API"
                header-class="bg-primary"
                title-class="text-white"
                centered
                @hidden="resetApiForm"
            >
              <b-form class="app-form">
                <b-form-group label="API Key name" label-for="apiName">
                  <b-form-input id="apiName" v-model="apiKeyName" placeholder="Enter Your API Key Name" />
                </b-form-group>

                <b-form-group v-if="showApiKeyContent" label="Generated API Key" label-for="keyValue">
                  <b-form-input id="keyValue" v-model="generatedApiKey" readonly />
                  <small class="text-muted">Copy this key now - it won't be shown again!</small>
                </b-form-group>
              </b-form>

              <template #footer>
                <div class="d-flex justify-content-end gap-2">
                  <b-button
                      v-if="!showApiKeyContent"
                      variant="light-primary"
                      :disabled="!apiKeyName.trim()"
                      @click="generateApiKey"
                  >
                    Generate Key
                  </b-button>
                  <b-button v-else variant="success" @click="addApiKey">Add API Key</b-button>
                  <b-button variant="light-secondary" @click="showApiModal = false">Close</b-button>
                </div>
              </template>
            </b-modal>
          </b-col>

          <div class="col-12 mt-4">
            <CustomDataTable
                class="w-100 display apikey-data-table table-bottom-border dataTable no-footer"
                title="API Keys"
                :key="apiKeysData.length"
                :columns="apiKeysColumns"
                :data="apiKeysData"
                :on-edit="handleEdit"
                :on-delete="handleDelete"
                :on-view="handleView"
                @checkbox-change="handleCheckboxChange"
                row-key="id"
                :page-length="10"
                :show-length-menu="true"
            />
          </div>
        </b-row>
      </b-container>

      <b-modal v-model="showViewModal" title="API Key Details" centered>
        <p><strong>Name:</strong> {{ selectedApiKey?.name }}</p>
        <p><strong>API Key:</strong> {{ selectedApiKey?.apiKey }}</p>
        <p><strong>Email:</strong> {{ selectedApiKey?.email }}</p>
      </b-modal>

      <b-modal
          v-model="showDeleteModal"
          centered
          hide-header
          content-class="border-0 api-delet-modal"
          body-class="text-center p-4"
      >
        <img alt="" class="img-fluid mb-3" src="/images/icons/delete-icon.png" />
        <div class="text-center">
          <h4 class="text-danger f-w-600 mb-2">Are You Sure?</h4>
          <p class="text-secondary f-s-16">You won't be able to revert this!</p>
        </div>
        <template #footer>
          <div class="text-center mt-4">
            <b-button variant="secondary" class="me-2" @click="showDeleteModal = false">Close</b-button>
            <b-button variant="primary" @click="confirmDelete">Yes, Delete it</b-button>
          </div>
        </template>
      </b-modal>
    </main>
  </AppLayout>
</template>
