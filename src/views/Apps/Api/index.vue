<script setup>
import {ref, computed} from 'vue';

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
  BCol
} from 'bootstrap-vue-next';
import AppLayout from "@/views/AppLayout.vue";
import CustomDataTable from "@/components/DataTable/CustomDataTable.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";


const chartData = [19.0, 20, 19.8, 19, 19.67, 19.45, 20.99, 30.45, 19.45, 19.09, 19.8, 19.6, 20, 20.89, 21.4, 19.09, 20.8, 23.78, 25.0, 20, 19.65, 25, 24.89, 23, 19.0, 19.56, 20.36, 22.90, 24.90, 19.78];

const showSuccess = ref(true);
const showError = ref(true);
const showTotal = ref(true);

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


const chartOptions = ref({
  chart: {
    type: 'area',
    height: 350,
    offsetY: 0,
    offsetX: 0,
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800
    }
  },
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(13, 202, 240, 0.4)',
          opacity: 1,
        },
        {
          offset: 50,
          color: 'rgba(13, 202, 240, 0.4)',
          opacity: 1,
        },
        {
          offset: 100,
          color: 'rgba(13, 202, 240, 0.1)',
          opacity: 1,
        },
      ]
    }
  },
  legend: {
    show: false,
  },
  colors: ['rgba(var(--info))'],
  xaxis: {
    tooltip: {
      enabled: false,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: Array.from({length: 30}, (_, i) => `Day ${i + 1}`)
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(1);
      }
    }
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
      fontFamily: '"Outfit", sans-serif',
    },
  },
  responsive: [{
    breakpoint: 1660,
    options: {
      chart: {
        height: 365
      }
    }
  }]
});


// Import images with unique names to avoid conflicts
const apiAvatar1 = '/images/avatar/1.png';
const apiAvatar2 = '/images/avatar/2.png';
const apiAvatar3 = '/images/avatar/3.png';
const apiAvatar4 = '/images/avatar/4.png';
const apiAvatar6 = '/images/avatar/6.png';
const apiAvatar7 = '/images/avatar/07.png';
const apiAvatar8 = '/images/avatar/08.png';
const apiAvatar10 = '/images/avatar/10.png';
const apiAvatar11 = '/images/avatar/11.png';
const apiAvatar14 = '/images/avatar/14.png';


const showApiModal = ref(false);
const showApiKeyContent = ref(false);
const apiKeyName = ref('');
const generatedApiKey = ref('');

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


const dismissAlert = () => {
  console.log('Alert dismissed');
};


const apiKeysData = ref([
  {
    id: 1,
    name: 'Gavin Cortez',
    avatar: apiAvatar1,
    avatarBgClass: 'text-bg-primary',
    parentName: 'Patty OFurniture',
    apiKey: '12e8d619-5ab4-41db-b574-eb727f82d836',
    date: '1 jan 2024',
    email: 'cristipola@gmailod.com'
  },
  {
    id: 2,
    name: 'Martena Mccray',
    avatar: apiAvatar14,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Olive Yew',
    apiKey: 'b589bd39-afa6-4dc2-a0e6-ee286d429689',
    date: '8 jan 2024',
    email: 'jiji4fast@trumvia.online'
  },
  {
    id: 3,
    name: 'Gavin Joyce',
    avatar: apiAvatar10,
    avatarBgClass: 'text-bg-info',
    parentName: 'Maureen Biologist',
    apiKey: 'cab763c0-ea2c-4077-bb6c-a0c736d36f44',
    date: '14 jan 2024',
    email: 'athos17@dsadsadsadas.online'
  },
  {
    id: 4,
    name: 'Gloria Little',
    avatar: apiAvatar2,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Maureen Biologist',
    apiKey: '0ae33477-28bb-4dfb-aaa5-1f0f19f19572',
    date: '25 jan 2024',
    email: 'tomasz@guthriedigitalmedia.com'
  },
  {
    id: 5,
    name: 'Jena Gaines',
    avatar: apiAvatar8,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Maureen Biologist',
    apiKey: 'd4f825d4-e76b-4e66-bf2e-66ee69a70263',
    date: '16 jan 2024',
    email: 'kamenskkz@saxophonexltd.com'
  },
  {
    id: 6,
    name: 'Jenette Caldwell',
    avatar: apiAvatar11,
    avatarBgClass: 'text-bg-dark',
    parentName: '6Del Phineum',
    apiKey: '3fefa4e0-e0f1-4167-8d36-18b753623c11',
    date: '20 jan 2024',
    email: 'amybeez@hamedahmed.cloud'
  },
  {
    id: 7,
    name: 'Jennifer Acosta',
    avatar: apiAvatar4,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Percy Kewshun',
    apiKey: '0c2b3bd4-5582-494e-b972-8bb1045bb235',
    date: '7 June 2024',
    email: 'carling@crysalbyrd.info'
  },
  {
    id: 8,
    name: 'Jennifer Chang',
    avatar: apiAvatar2,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Roy L. Commishun',
    apiKey: 'ea651456-9063-4445-b852-9212ec8e93ed',
    date: '7 June 2024',
    email: 'bigeminies@hamedahmed.cloud'
  },
  {
    id: 9,
    name: 'Michael Silva',
    avatar: apiAvatar3,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Roy L. Commishun',
    apiKey: 'c12aa92d-eaa6-4322-9b1b-bbbd1ba98e45',
    date: '14 June 2024',
    email: 'stepanbykov@onlinecmail.com'
  },
  {
    id: 10,
    name: 'Michelle House',
    avatar: apiAvatar4,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Roy L. Commishun',
    apiKey: '34c35f2c-e542-48b7-86ae-ee654f988241',
    date: '4 July 2024',
    email: 'ali1987j@onlinecmail.com'
  },
  {
    id: 11,
    name: 'Olivia Liang',
    avatar: apiAvatar10,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Bridget Theriveaquai',
    apiKey: 'ecde376e-fe22-4ff9-b675-7ca0b6957dfb',
    date: '19 Aug 2024',
    email: 'tjnyny@sjuanita.com'
  },
  {
    id: 12,
    name: 'Quinn Flynn',
    avatar: apiAvatar6,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Bridget Theriveaquai',
    apiKey: 'd234febf-c046-459c-9623-3fbb128bdcf4',
    date: '12 Sep 2024',
    email: 'kostyaastonmartin@sjuanita.com'
  },
  {
    id: 13,
    name: 'Prescott Bartlett',
    avatar: apiAvatar14,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Frank N. Stein',
    apiKey: '589d8184-7efe-4509-aab4-6b91e89f734c',
    date: '15 jan 2024',
    email: 'nadezhdashirshova@cwrotzxks.com'
  },
  {
    id: 14,
    name: 'Suki Burks',
    avatar: apiAvatar2,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Frank N. Stein',
    apiKey: '4cc1d9b9-6aea-4dad-81c3-11cce8dd43c1',
    date: '2 Sep 2024',
    email: 'peter709@sellxuclone.com'
  },
  {
    id: 15,
    name: 'Tatyana Fitzpatrick',
    avatar: apiAvatar8,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Laura Norda',
    apiKey: '7a4fcd62-b085-450b-9ecc-eedfaa5d141f',
    date: '19 July 2024',
    email: 'gregorylisa17@boranora.com'
  },
  {
    id: 16,
    name: 'Yuri Berry',
    avatar: apiAvatar7,
    avatarBgClass: 'text-bg-dark',
    parentName: 'Mal Nurrisht',
    apiKey: '04095ed9-cf5f-4233-b554-9bcc25d81c0b',
    date: '11 July 2024',
    email: 'todd29@sjuanita.com'
  }
]);


const apiKeysColumns = ref([
  {
    key: 'checkbox',
    header: '',
    className: '',
    render: (value, item) => `
      <div class="checkbox-wrapper">
        <label class="check-box m-0">
          <input type="checkbox" class="ticket-checkbox" data-id="${item.id}">
          <span class="checkmark outline-secondary"></span>
        </label>
      </div>
    `
  },
  {
    key: 'name',
    header: 'Name',
    className: '',
    render: (value, item) => `
      <div class="d-flex align-items-center">
        <div class="h-30 w-30 d-flex-center b-r-50 overflow-hidden ${item.avatarBgClass} me-2">
          <img alt="" class="img-fluid" src="${item.avatar}" onerror="this.src='/images/avatar/1.png'">
        </div>
        ${item.name}
      </div>
    `
  },
  {
    key: 'parentName',
    header: 'Parent Name',
    className: ''
  },
  {
    key: 'apiKey',
    header: 'API Key',
    className: '',
    render: (value) => `
      <span class="text-truncate d-inline-block" style="max-width: 200px;" title="${value}">
        ${value}
      </span>
    `
  },
  {
    key: 'date',
    header: 'Date',
    className: ''
  },
  {
    key: 'email',
    header: 'Email',
    className: ''
  }
]);


const handleEdit = (item) => {
  console.log('Edit API Key:', item);
  alert(`Edit API Key: ${item.name}`);
};

const handleDelete = (item) => {
  console.log('Delete API Key:', item);
  if (confirm(`Are you sure you want to delete API key for ${item.name}?`)) {
    const index = apiKeysData.value.findIndex(apiKey => apiKey.id === item.id);
    if (index !== -1) {
      apiKeysData.value.splice(index, 1);
    }
  }
};

const handleView = (item) => {
  console.log('View API Key:', item);
  alert(`View API Key Details:\nName: ${item.name}\nAPI Key: ${item.apiKey}\nEmail: ${item.email}`);
};
// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Api ",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Api ", active: true },
  ],
}));
</script>


<template>
  <AppLayout>
    <main>
      <Breadcrumb :breadcrumb="breadcrumbItems" />
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
                  <apexchart
                      type="area"
                      height="350"
                      :options="chartOptions"
                      :series="filteredSeries"
                  ></apexchart>
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="6" >
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
                        <span class="position-absolute top-0 start-2 p-1 bg-danger border border-light rounded-circle"></span>
                        <img alt="" class="img-fluid b-r-50 overflow-hidden" :src="apiAvatar4">
                      </li>
                      <li
                          class="h-45 w-45 d-flex-center b-r-50 text-bg-success b-2-light position-relative"
                          v-b-tooltip.hover title="Sabrina Torres"
                      >
                        <span class="position-absolute top-0 start-2 p-1 bg-success border border-light rounded-circle"></span>
                        <img alt="" class="img-fluid b-r-50 overflow-hidden" :src="apiAvatar1">
                      </li>
                      <li
                          class="h-45 w-45 d-flex-center b-r-50 text-bg-warning b-2-light position-relative"
                          v-b-tooltip.hover title="Sabrina Torres"
                      >
                        <span class="position-absolute top-0 start-2 p-1 bg-warning border border-light rounded-circle"></span>
                        <img alt="" class="img-fluid b-r-50 overflow-hidden" :src="apiAvatar2">
                      </li>
                      <li
                          class="h-45 w-45 d-flex-center b-r-50 text-bg-info b-2-light position-relative"
                          v-b-tooltip.hover title="Sabrina Torres"
                      >
                        <span class="position-absolute top-0 start-2 p-1 bg-info border border-light rounded-circle"></span>
                        <img alt="" class="img-fluid b-r-50 overflow-hidden" :src="apiAvatar3">
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
              <b-col sm="6" >
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
              <b-col xl="12" >
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
            >
              <b-form>
                <b-form-group label="API Key name" label-for="username">
                  <b-form-input
                      id="username"
                      v-model="apiKeyName"
                      placeholder="Enter Your API"
                      type="text"
                  />
                </b-form-group>

                <b-form-group
                    v-if="showApiKeyContent"
                    label="API Key"
                    label-for="keygenValue"
                >
                  <b-form-input
                      id="keygenValue"
                      v-model="generatedApiKey"
                      placeholder="Your API key will appear here"
                      readonly
                      type="text"
                  />
                </b-form-group>
              </b-form>

              <template #footer>
                <div class="w-100">
                  <b-button variant="light-secondary" @click="showApiModal = false" class="me-2">
                    Close
                  </b-button>
                  <b-button variant="light-primary" @click="generateApiKey">
                    Add
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
                :show-actions="true"
                :on-edit="handleEdit"
                :on-delete="handleDelete"
                :on-view="handleView"
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
    </main>
  </AppLayout>
</template>



