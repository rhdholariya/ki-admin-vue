<template>
  <AppLayout>
    <main>
      <div class="container-fluid">
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        
        <b-row class="row m-1">
          <!-- Left Sidebar -->
          <b-col lg="4" xxl="3">
            <b-card no-body>
              <b-card-header>
                <h5>Settings</h5>
              </b-card-header>
              <b-card-body class="flex-column vertical-tab setting-tab">
                <b-nav tabs class="app-tabs-primary nav nav-tabs">
                  <b-nav-item
                    v-for="tab in settingsTabs"
                    :key="tab.eventKey"
                    :active="activeTab === tab.eventKey"
                    @click="activeTab = tab.eventKey"
                  >
                    <component :is="tab.icon" weight="bold" size="20" class="me-2" />
                    {{ tab.title }}
                  </b-nav-item>

                  <b-nav-item @click="handleDeleteClick">
                    <PhTrash weight="bold" size="20" class="me-2" />
                    Delete
                  </b-nav-item>
                </b-nav>
              </b-card-body>
            </b-card>

            <!-- Time Spent Card -->
            <b-card class="mb-4" no-body>
              <b-card-header>
                <h5>Time Spent</h5>
              </b-card-header>
              <b-card-body>
                <TimeSpent />
              </b-card-body>
            </b-card>

            <!-- Used Space Card -->
            <b-card class="mb-4" no-body>
              <b-card-body>
                <b-card class="hover-effect card-light-primary mt-4">
                  <b-card-body>
                    <h5>Used Space</h5>
                    <p class="mt-2 text-secondary fs-6">
                      Your team has used 80% of your available space. Need more?
                    </p>
                    <b-progress
                      :value="78.5"
                      max="100"
                      variant="primary"
                      striped
                      class="w-100 mt-3 mb-3"
                    >
                      <b-progress-bar :value="78.5" variant="primary">
                        78.5%
                      </b-progress-bar>
                    </b-progress>
                    <div>
                      <a href="#" class="me-3 text-secondary">Dismiss</a>
                      <a href="#" class="text-decoration-underline">Upgrade plan</a>
                    </div>
                  </b-card-body>
                </b-card>
                
                <div class="my-3 border-top"></div>
                
                <!-- User Profile Section -->
                <div class="d-flex align-items-center">
                  <span class="h-45 w-45 d-flex justify-content-center align-items-center bg-warning rounded-circle position-relative">
                    <b-img
                      src="/images/avatar/09.png"
                      alt="avatar"
                      class="img-fluid rounded-circle w-45"
                    />
                    <span class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                  </span>
                  <div class="flex-grow-1 ps-2">
                    <div class="fw-bold fs-6">Ninfa Monaldo</div>
                    <div class="text-secondary fs-6">Web Developer</div>
                  </div>
                  <div>
                    <router-link to="/apps/profile-page/profile">
                      <ArrowSquareOut weight="bold" size="24" class="fs-4" />
                    </router-link>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Main Content Area -->
          <b-col lg="8" xxl="9">
            <!-- Tab Content -->
            <div class="tab-content">
              <div v-if="activeTab === '1'" class="tab-pane active">
                <SettingProfile />
              </div>
              <div v-if="activeTab === '2'" class="tab-pane active">
                <ActivityTimeline />
              </div>
              <div v-if="activeTab === '3'" class="tab-pane active">
                <SecurityCard />
              </div>
              <div v-if="activeTab === '4'" class="tab-pane active">
                <PrivacyCard />
              </div>
              <div v-if="activeTab === '5'" class="tab-pane active">
                <NotificationSettings />
              </div>
              <div v-if="activeTab === '6'" class="tab-pane active">
                <Subscription />
              </div>
              <div v-if="activeTab === '7'" class="tab-pane active">
                <Connection />
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </main>
  </AppLayout>
</template>

<script setup>
import {ref,  computed} from "vue";
import {
  BCard,
  BCardBody,
  BCardHeader,
  BCol,
  BImg,
  BNav,
  BNavItem,
  BProgress,
  BProgressBar,
  BRow,
} from "bootstrap-vue-next";

import AppLayout from "@/views/AppLayout.vue";
import ActivityTimeline from "@/components/Apps/Setting/ActivityTimeline.vue";
import Connection from "@/components/Apps/Setting/Connection.vue";
import NotificationSettings from "@/components/Apps/Setting/NotificationSettings.vue";
import PrivacyCard from "@/components/Apps/Setting/PrivacyCard.vue";
import SecurityCard from "@/components/Apps/Setting/SecurityCard.vue";
import SettingProfile from "@/components/Apps/Setting/SettingProfile.vue";
import Subscription from "@/components/Apps/Setting/Subscription.vue";
import TimeSpent from "@/components/Apps/Setting/TimeSpent.vue";

import {
  PhBellSimple,
  PhGraph,
  PhLockOpen,
  PhNotification,
  PhAlarm,
  PhShieldCheck,
  PhTrash,
  PhUserCircleGear, PhStack,
} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";


const activeTab = ref("1");


const settingsTabs = ref([
  {
    eventKey: "1",
    title: "Profile",
    icon: PhUserCircleGear,
  },
  {
    eventKey: "2",
    title: "Activity",
    icon: PhAlarm,
  },
  {
    eventKey: "3",
    title: "Security",
    icon: PhShieldCheck,
  },
  {
    eventKey: "4",
    title: "Privacy",
    icon: PhLockOpen,
  },
  {
    eventKey: "5",
    title: "Notification",
    icon: PhNotification,
  },
  {
    eventKey: "6",
    title: "Subscription",
    icon: PhBellSimple,
  },
  {
    eventKey: "7",
    title: "Connection",
    icon: PhGraph,
  },
]);


const handleDeleteClick = async () => {
  console.log("Delete tab clicked");

  try {
    const { default: Swal } = await import("sweetalert2");
    console.log("Swal loaded:", Swal);

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  } catch (error) {
    console.error("Error loading SweetAlert2:", error);
  }
};


const breadcrumbItems = computed(() => ({
  title: "Setting",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Profile"},
    { label: "Setting" , active: true }
  ],
}));
</script>

