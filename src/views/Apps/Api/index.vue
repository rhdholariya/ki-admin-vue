<script setup>
import {ref, computed} from 'vue';
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

} from 'bootstrap-vue-next';
import AppLayout from "@/views/AppLayout.vue";
import CustomDataTable from "@/components/Table/DataTable/CustomDataTable.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";


import {
  apiAvatars,
  apiKeysData as initialApiKeysData,
  apiKeysColumns,
  chartData,
  chartOptions as initialChartOptions
} from '@/data/app/Api/ApiData.js';


const showSuccess = ref(true);
const showError = ref(true);
const showTotal = ref(true);

const apiKeysData = ref([...initialApiKeysData]);
const selectedItems = ref(new Set()); // For checkbox selection


const showApiModal = ref(false);
const showApiKeyContent = ref(false);
const apiKeyName = ref('');
const generatedApiKey = ref('');


const showDeleteModal = ref(false);
const itemToDelete = ref(null);


const filteredSeries = computed(() => {
  const series = [];

  if (showSuccess.value) {
    series.push({
      name: 'Success',
      data: chartData,
      color: '#0dcaf0'
    });
  }

  if (showError.value) {
    series.push({
      name: 'Error',
      data: chartData.map(val => val * 0.1),
      color: '#dc3545'
    });
  }

  if (showTotal.value) {
    series.push({
      name: 'Total',
      data: chartData.map(val => val * 1.1),
      color: '#0d6efd'
    });
  }

  return series;
});

const chartOptions = ref({ ...initialChartOptions });

// Handle checkbox changes from CustomDataTable
const handleCheckboxChange = ({ checked, item }) => {
  if (checked) {
    selectedItems.value.add(item.id);
  } else {
    selectedItems.value.delete(item.id);
  }
  console.log('Selected items:', Array.from(selectedItems.value));
};

// Generate API Key
const generateApiKey = () => {
  if (!apiKeyName.value.trim()) {
    alert('Please enter an API key name');
    return;
  }

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = 'api_';
  for (let i = 0; i < 32; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  generatedApiKey.value = key;
  showApiKeyContent.value = true;
};

// Add API Key to DataTable
const addApiKey = () => {
  if (!apiKeyName.value.trim() || !generatedApiKey.value) {
    alert('Please generate an API key first');
    return;
  }

  // Create new API key object
  const newApiKey = {
    id: Date.now(),
    name: apiKeyName.value,
    avatar: apiAvatars.avatar1,
    avatarBgClass: 'text-bg-primary',
    parentName: 'Self Created',
    apiKey: generatedApiKey.value,
    date: new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}),
    email: `${apiKeyName.value.toLowerCase().replace(/\s+/g, '')}@example.com`
  };


  apiKeysData.value.unshift(newApiKey);


  resetApiForm();
  showApiModal.value = false;
};


const resetApiForm = () => {
  apiKeyName.value = '';
  generatedApiKey.value = '';
  showApiKeyContent.value = false;
};

const dismissAlert = () => {
  console.log('Alert dismissed');
};


const handleEdit = (item) => {
  console.log('Edit API Key:', item);
};

const handleDelete = (item) => {
  console.log('Delete API Key:', item);
  itemToDelete.value = item;
  showDeleteModal.value = true;
};

const confirmDelete = () => {
  if (itemToDelete.value) {
    const index = apiKeysData.value.findIndex(apiKey => apiKey.id === itemToDelete.value.id);
    if (index !== -1) {
      apiKeysData.value.splice(index, 1);
    }
    showDeleteModal.value = false;
    itemToDelete.value = null;
  }
};

const handleView = (item) => {
  console.log('View API Key:', item);
  alert(`View API Key Details:\nName: ${item.name}\nAPI Key: ${item.apiKey}\nEmail: ${item.email}`);
};


const breadcrumbItems = computed(() => ({
  title: "Api ",
  items: [
    {label: "Apps", icon: PhStack},
    {label: "Api ", active: true},
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-container fluid>
        <b-row>
          <b-col lg="6">
            <b-card no-body>
              <b-card-header>
                <h5>API request</h5>
              </b-card-header>
              <b-card-body>
                <div class="api-chart d-flex gap-3 justify-content-end">
                  <div class="form-check ps-0">
                    <input
                        class="form-check-input form-check-info mg-2 w-20 h-20"
                        id="apiCheckbox"
                        type="checkbox"
                        v-model="showSuccess"
                    >
                    <label class="form-check-label ms-2" for="apiCheckbox">
                      22k successfully
                    </label>
                  </div>
                  <div class="form-check ps-0">
                    <input
                        class="form-check-input form-check-info mg-2 w-20 h-20"
                        id="apiCheckbox1"
                        type="checkbox"
                        v-model="showError"
                    >
                    <label class="form-check-label ms-2" for="apiCheckbox1">
                      2 error
                    </label>
                  </div>
                  <div class="form-check ps-0">
                    <input
                        class="form-check-input form-check-info mg-2 w-20 h-20"
                        id="apiCheckbox2"
                        type="checkbox"
                        v-model="showTotal"
                    >
                    <label class="form-check-label ms-2" for="apiCheckbox2">
                      123 Total request
                    </label>
                  </div>
                </div>
                <div>
                  <VueApexCharts
                      type="area"
                      height="350"
                      :options="chartOptions"
                      :series="filteredSeries"
                  ></VueApexCharts>
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="6">
            <b-row>
              <!-- Total Users Card -->
              <b-col sm="6">
                <b-card class="api-eshop-card" no-body>
                  <BCardBody>
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
                  </BCardBody>
                </b-card>
              </b-col>

              <!-- Members Card -->
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

              <!-- Active Now Card -->
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
                          class="h-45 w-45 d-flex-center b-r-50 text-bg-danger b-2-light position-relative"
                          v-b-tooltip.hover title="Sabrina Torres"
                      >
                        <span
                            class="position-absolute top-0 start-2 p-1 bg-danger border border-light rounded-circle"></span>
                        <img alt="" class="img-fluid b-r-50 overflow-hidden" :src="apiAvatars.avatar4">
                      </li>
                      <li
                          class="h-45 w-45 d-flex-center b-r-50 text-bg-success b-2-light position-relative"
                          v-b-tooltip.hover title="Sabrina Torres"
                      >
                        <span
                            class="position-absolute top-0 start-2 p-1 bg-success border border-light rounded-circle"></span>
                        <img alt="" class="img-fluid b-r-50 overflow-hidden" :src="apiAvatars.avatar1">
                      </li>
                      <li
                          class="h-45 w-45 d-flex-center b-r-50 text-bg-warning b-2-light position-relative"
                          v-b-tooltip.hover title="Sabrina Torres"
                      >
                        <span
                            class="position-absolute top-0 start-2 p-1 bg-warning border border-light rounded-circle"></span>
                        <img alt="" class="img-fluid b-r-50 overflow-hidden" :src="apiAvatars.avatar2">
                      </li>
                      <li
                          class="h-45 w-45 d-flex-center b-r-50 text-bg-info b-2-light position-relative"
                          v-b-tooltip.hover title="Sabrina Torres"
                      >
                        <span
                            class="position-absolute top-0 start-2 p-1 bg-info border border-light rounded-circle"></span>
                        <img alt="" class="img-fluid b-r-50 overflow-hidden" :src="apiAvatars.avatar3">
                      </li>
                      <li
                          class="text-bg-primary h-35 w-35 d-flex-center b-r-50"
                          v-b-tooltip.hover title="5 More"
                      >
                        5+
                      </li>
                    </ul>
                  </b-card-body>
                </b-card>
              </b-col>

              <!-- Developer Card -->
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
                    <BButton variant="primary" @click="showApiModal = true">
                      Create API
                    </BButton>
                  </b-card-body>
                </b-card>
              </b-col>

              <!-- Alert Component -->
              <b-col xl="12">
                <b-alert variant="info" class="alert-border-info bg-white" show>
                  <h6>
                    <i class="ti ti-info-circle f-s-18 me-2 text-info"></i>
                    Review API Token
                  </h6>
                  <p class="text-secondary">
                    Here is your new api token.This is the only time the token will ever be
                    displayed, so be sure not to lose it!
                  </p>
                  <div class="text-end">
                    <BLink href="#" class="link-primary text-d-underline" @click="dismissAlert">Don't allow</BLink>
                    <BLink href="#" class="link-primary text-d-underline ms-2">Allow</BLink>
                  </div>
                </b-alert>
              </b-col>
            </b-row>

            <!-- Create API Modal -->
            <b-modal
                v-model="showApiModal"
                title="Create API"
                title-class="text-white"
                header-class="bg-primary"
                hide-footer
                centered
                @hidden="resetApiForm"
            >
              <b-form class="app-form">
                <b-form-group label="API Key name" label-for="username">
                  <b-form-input
                      id="username"
                      v-model="apiKeyName"
                      placeholder="Enter Your API Key Name"
                      type="text"
                      class="mb-3"
                  />
                </b-form-group>

                <b-form-group
                    v-if="showApiKeyContent"
                    label="Generated API Key"
                    label-for="keygenValue"
                >
                  <b-form-input
                      id="keygenValue"
                      v-model="generatedApiKey"
                      placeholder="Your API key will appear here"
                      readonly
                      type="text"
                  />
                  <small class="text-muted">Copy this key now - it won't be shown again!</small>
                </b-form-group>
              </b-form>

              <template #footer>
                <div>
                  <b-button
                      v-if="!showApiKeyContent"
                      variant="light-primary"
                      @click="generateApiKey"
                      :disabled="!apiKeyName.trim()"
                  >
                    Generate Key
                  </b-button>
                  <b-button
                      v-else
                      variant="success"
                      @click="addApiKey"
                  >
                    Add API Key
                  </b-button>
                </div>
                <div>
                  <b-button variant="light-secondary" @click="showApiModal = false">
                    Close
                  </b-button>
                </div>
              </template>
            </b-modal>
          </b-col>

          <!-- API Keys DataTable -->
          <div class="col-12 mt-4">
            <CustomDataTable
                title="API Keys"
                description=""
                :columns="apiKeysColumns"
                :data="apiKeysData"
                :show-individual-buttons="true"
                :on-edit="handleEdit"
                :on-delete="handleDelete"
                :on-view="handleView"
                @checkbox-change="handleCheckboxChange"
                row-key="id"
                class-name="api-keys-datatable"
                card-class-name="card"
                table-class-name="w-100 display apikey-data-table table-bottom-border align-middle mb-0"
                :page-length="10"
                :show-length-menu="true"
            />
          </div>

        </b-row>
      </b-container>

      <!-- Delete Confirmation Modal -->
      <b-modal
          v-model="showDeleteModal"
          centered
          hide-header
          content-class="border-0"
          body-class="text-center p-4"
      >
        <img alt="" class="img-fluid mb-3" src="/images/icons/delete-icon.png">
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