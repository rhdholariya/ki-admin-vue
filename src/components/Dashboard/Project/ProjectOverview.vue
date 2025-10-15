<template>
  <!-- Yearly Earning Card -->
  <b-col sm="6" md="5" lg="4" xxl="3">
    <YearlyEarningCard :chart-height="180" />
  </b-col>

  <!-- Updates Card -->
  <b-col sm="6" lg="4" xxl="3">
    <BCard class="updated-card equal-card text-center" no-body>
      <BCardBody>
        <swiper
            :modules="modules"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 4000, disableOnInteraction: false }"
            :loop="true"
            class="updates-box-slider app-arrow"
        >
          <swiper-slide
              v-for="(item, index) in updates"
              :key="index"
          >
            <div class="bg-light-primary b-r-12">
              <img
                  :src="item.img"
                  alt="update"
                  class="img-fluid d-block m-auto"
              />
            </div>
            <div class="mt-3">
              <p class="fs-5 fw-semibold txt-ellipsis-2">
                {{ item.text }}
              </p>
              <BButton variant="primary" class="mt-2">
                Start Now
              </BButton>
            </div>
          </swiper-slide>
        </swiper>
      </BCardBody>
    </BCard>
  </b-col>

  <!-- Meetings & Notes Card -->
  <b-col sm="6" lg="4" xxl="3">
    <div class="card equal-card">
      <div class="card-body">
        <ul class="nav nav-tabs tab-primary bg-primary p-1 rounded updates-tab" id="bg" role="tablist">
          <li class="nav-item" role="presentation">
            <button
                aria-controls="meetingDtaTabsPane"
                aria-selected="true"
                class="nav-link active"
                id="meetingDtaTabs"
                role="tab"
                type="button"
                @click="activeTab = 'meetings'"
                :class="{ active: activeTab === 'meetings' }"
            >
              Meetings
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
                aria-controls="NotesDataTabPane"
                aria-selected="false"
                class="nav-link"
                id="NotesDataTab"
                role="tab"
                type="button"
                @click="activeTab = 'notes'"
                :class="{ active: activeTab === 'notes' }"
            >
              Notes
            </button>
          </li>
        </ul>
        <div class="tab-content update-tab-content">
          <div
              aria-labelledby="meetingDtaTabs"
              class="tab-pane fade"
              :class="{ 'show active': activeTab === 'meetings' }"
              id="meetingDtaTabsPane"
              role="tabpanel"
              tabindex="0"
          >
            <ul class="form-selectgroup">
              <li
                  v-for="meeting in meetings"
                  :key="meeting.id"
                  class="select-item"
              >
                <input
                    class="form-check-input task-check w-25 h-25"
                    :id="`inlineCheckbox${meeting.id}`"
                    type="checkbox"
                    :checked="meeting.checked"
                    @change="handleCheckboxChange(meeting.id)"
                >
                <label class="form-check-label" :for="`inlineCheckbox${meeting.id}`">
                  <span class="d-flex align-items-center">
                    <span class="ms-3">
                      <span
                          class="fs-6 client-name txt-ellipsis-1"
                          :class="{ 'completed-task': meeting.checked }"
                      >
                        {{ meeting.name }}
                      </span>
                      <span class="d-block text-secondary">{{ meeting.description }}</span>
                    </span>
                  </span>
                </label>
              </li>
            </ul>
            <button class="btn btn-primary w-100" type="button">Show More</button>
          </div>
          <div
              aria-labelledby="NotesDataTab"
              class="tab-pane fade"
              :class="{ 'show active': activeTab === 'notes' }"
              id="NotesDataTabPane"
              role="tabpanel"
              tabindex="1"
          >
            <div class="w-100 h-250 text-center no-data mt-5">
              <img src="/images/dashboard/project/no-data.png" class="img-fluid" alt=""/>
              <h6 class="f-w-500 text-primary mt-4">No Data Found</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-col>

  <!-- Profit Overview Card -->
  <div class="col-sm-6 col-md-5 col-lg-4 col-xxl-3">
    <ProfitOverviewCard />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import {
  BCard,
  BCardBody,
  BButton,
    BCol
} from 'bootstrap-vue-next'


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import YearlyEarningCard from "@/components/Widget/YearlyEarningCard.vue";
import ProfitOverviewCard from "@/components/Widget/ProfitOverviewCard.vue";

// Data
const updates = [
  {
    img: "/images/dashboard/ecommerce-dashboard/01.png",
    text: "Update your project management system"
  },
  {
    img: "/images/dashboard/ecommerce-dashboard/01.png",
    text: "New features available in dashboard"
  } , {
    img: "/images/dashboard/ecommerce-dashboard/01.png",
    text: "New features available in dashboard"
  }
]

const activeTab = ref('meetings')

const meetings = [
  {
    id: 1,
    name: 'Mark Moen',
    description: 'Website Redesign Briefing',
    value: 'option1'
  },
  {
    id: 2,
    name: 'Johan Moen',
    description: 'CRM Integration Planning',
    value: 'option2'
  },
  {
    id: 3,
    name: 'Carlos Ramirez',
    description: 'Brand Audit Presentation',
    value: 'option2'
  },
  {
    id: 4,
    name: 'Stellar Finances',
    description: 'Performance Review',
    value: 'option2'
  }
]


const handleCheckboxChange = (meeting) => {
  console.log(`Meeting ${meeting.name} checked: ${meeting.checked}`)
}

const modules = [Autoplay, Pagination]
</script>