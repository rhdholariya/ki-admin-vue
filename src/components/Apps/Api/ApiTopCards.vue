<script setup>

import { ref } from 'vue'

import {
  BRow,
  BCol,
  BCard,
  BCardBody,
    BCardHeader,
    BFormCheckbox,
    BButton,
    BAlert,
    BModal,
    BFormInput,
    BForm,
    BFormGroup``
} from "bootstrap-vue-next";
// Fixed apiCardsData with proper icon classes
const apiCardsData = [
  {
    title: "Total Users",
    value: "2564k",
    percentage: "92.9%",
    subtitle: "users income",
    bgColor: "bg-light-primary",
    icon: "ph ph-user-circle-gear", // Fixed icon class
  },
  {
    title: "Members",
    value: "1210k",
    percentage: "15.5%",
    subtitle: "members income",
    bgColor: "bg-light-success",
    icon: "ph ph-user-circle-gear", // Fixed icon class
  },
  {
    title: "Active Now",
    value: "416k",
    bgColor: "bg-light-danger",
    icon: "ph ph-check-circle", // Fixed icon class
    avatars: [
      { src: "/images/avatar/4.png", bgColor: "text-bg-danger" },
      { src: "/images/avatar/1.png", bgColor: "text-bg-success" },
      { src: "/images/avatar/2.png", bgColor: "text-bg-primary" },
      { src: "/images/avatar/3.png", bgColor: "text-bg-warning" },
    ],
  },
  {
    title: "Developer",
    value: "64",
    bgColor: "bg-light-warning",
    icon: "ph ph-check-circle", // Fixed icon class
    showButton: true,
  },
]

// Mock ApiRequestData since it wasn't provided
const ApiRequestData = {
  series: [
    {
      name: "API Requests",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ],
  chart: {
    height: 350,
    type: 'area'
  },
  // Add other chart options as needed
}

export default {
  name: 'ApiTopCards',
  props: {
    apiKeyList: {
      type: Array,
      required: true
    }
  },
  emits: ['update:apiKeyList'],
  setup(props, { emit }) {
    const showModal = ref(false)
    const isKeyGenerated = ref(false)
    const apiName = ref('')
    const apiKey = ref('')

    const handleGenerateKey = () => {
      const key = `api_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`
      apiKey.value = key
      isKeyGenerated.value = true
    }

    const handleAddApi = () => {
      const newApi = {
        id: props.apiKeyList.length + 1,
        name: apiName.value,
        parentName: 'Olive Yew',
        key: apiKey.value,
        date: new Date().toLocaleDateString('en-GB'),
        email: 'noreply@example.com',
        avatar: '/images/avatar/1.png',
        bg: 'text-bg-primary'
      }

      emit('update:apiKeyList', [...props.apiKeyList, newApi])

      showModal.value = false
      apiName.value = ''
      apiKey.value = ''
      isKeyGenerated.value = false
    }

    return {
      showModal,
      isKeyGenerated,
      apiName,
      apiKey,
      apiCardsData,
      apiRequestData: ApiRequestData,
      handleGenerateKey,
      handleAddApi
    }
  }
}

</script>



<template>
  <div>
    <b-col lg="6">
      <b-card>
        <b-card-header>
          <h5>API request</h5>
        </b-card-header>
        <b-card-body>
          <div class="api-chart d-flex gap-3 justify-content-end">
            <b-form-checkbox id="apiCheckbox" class="mb-0">
              22k successfully
            </b-form-checkbox>
            <b-form-checkbox id="apiCheckbox1" class="mb-0">
              2 error
            </b-form-checkbox>
            <b-form-checkbox id="apiCheckbox2" class="mb-0">
              123 Total request
            </b-form-checkbox>
          </div>

          <div class="mt-4">
            <div id="apikey"></div>
            <apexchart
                :options="apiRequestData"
                :series="apiRequestData.series"
                type="area"
                height="350"
            />
          </div>
        </b-card-body>
      </b-card>
    </b-col>

    <b-col lg="6">
      <b-row>
        <b-col
            sm="6"
            v-for="(card, idx) in apiCardsData"
            :key="idx"
        >
          <div class="card api-eshop-card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <h6>{{ card.title }}</h6>
                <div
                    :class="`dropdown ${card.bgColor} h-40 w-40 d-flex-center b-r-15`"
                >
                  <i :class="card.icon"></i>
                </div>
              </div>
              <h3 :class="{ 'mb-3': card.showButton }">
                {{ card.value }}
              </h3>

              <p
                  v-if="card.percentage"
                  class="text-success mt-3 f-s-16 f-w-500 mb-0"
              >
                <i class="ph-bold ph-arrow-up-right text-success f-s-20"></i>
                {{ card.percentage }}
                <span class="text-secondary f-s-16 f-w-200">
                  {{ card.subtitle }}
                </span>
              </p>

              <ul
                  v-if="card.avatars"
                  class="avatar-group justify-content-start"
              >
                <li
                    v-for="(avatar, i) in card.avatars"
                    :key="i"
                    :class="`h-45 w-45 d-flex-center b-r-50 ${avatar.bgColor || 'text-bg-secondary'} b-2-light position-relative`"
                >
                  <span class="position-absolute top-0 start-2 p-1 bg-danger border border-light rounded-circle"></span>
                  <img
                      :src="avatar.src"
                      alt=""
                      class="img-fluid b-r-50 overflow-hidden"
                  />
                </li>
                <li
                    class="text-bg-primary h-35 w-35 d-flex-center b-r-50"
                    v-b-tooltip="'5 More'"
                >
                  5+
                </li>
              </ul>

              <b-button
                  v-if="card.showButton"
                  variant="primary"
                  @click="showModal = true"
              >
                Create API
              </b-button>
            </div>
          </div>
        </b-col>

        <b-col xl="12">
          <b-alert variant="info" class="alert-border-info bg-white">
            <h6>
              <i class="ti ti-info-circle f-s-18 me-2 text-info"></i>
              Review API Token
            </h6>
            <p class="text-secondary">
              Here is your new API token. This is the only time the token will
              ever be displayed, so be sure not to lose it!
            </p>
            <div class="text-end">
              <a
                  href="#"
                  class="link-primary text-d-underline"
                  data-bs-dismiss="alert"
              >
                Don't allow
              </a>
              <a href="#" class="link-primary text-d-underline ms-2">
                Allow
              </a>
            </div>
          </b-alert>
        </b-col>
      </b-row>

      <b-modal
          v-model="showModal"
          title="Create API"
          hide-footer
          backdrop="static"
      >
        <b-form class="app-form">
          <b-form-group label="API Key Name" label-for="apiName">
            <b-form-input
                id="apiName"
                type="text"
                placeholder="Enter API Key Name"
                v-model="apiName"
            />
          </b-form-group>

          <b-form-group
              v-if="isKeyGenerated"
              label="Generated API Key"
              label-for="generatedApiKey"
          >
            <b-form-input
                id="generatedApiKey"
                type="text"
                v-model="apiKey"
                readonly
            />
          </b-form-group>
        </b-form>

        <template #modal-footer>
          <b-button
              v-if="!isKeyGenerated"
              variant="primary"
              @click="handleGenerateKey"
          >
            Generate Key
          </b-button>
          <b-button
              v-else
              variant="success"
              @click="handleAddApi"
          >
            Add API
          </b-button>
          <b-button variant="secondary" @click="showModal = false">
            Close
          </b-button>
        </template>
      </b-modal>
    </b-col>
  </div>
</template>

