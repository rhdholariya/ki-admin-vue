<script setup>
import { ref } from 'vue'
import { BCollapse, BDropdown, BDropdownItem, BNavItem } from 'bootstrap-vue-next'

// Collapse states
const dashboardOpen = ref(false)
const appsOpen = ref(false)
const uiKitsOpen = ref(false)
const advanceUIOpen = ref(false)
const iconsOpen = ref(false)
const mapsOpen = ref(false)
const chartOpen = ref(false)
const tableOpen = ref(false)
const formsOpen = ref(false)
const readyToUseOpen = ref(false)
const authPagesOpen = ref(false)
const errorPagesOpen = ref(false)
const otherPagesOpen = ref(false)
const levelOpen = ref(false)
const level2Open = ref(false)

const notificationsEnabled = ref(false)
</script>

<template>
  <nav>
    <div class="app-logo">
      <a class="logo d-inline-block" href="index.html">
        <img alt="#" src="/images/logo/1.png" />
      </a>

      <span class="bg-light-primary toggle-semi-nav d-flex-center">
        <i class="ti ti-chevron-right"></i>
      </span>

      <div class="d-flex align-items-center nav-profile p-3">
        <span class="h-45 w-45 d-flex-center b-r-10 position-relative bg-danger m-auto">
          <img alt="avatar" class="img-fluid b-r-10" src="/images/avatar/woman.jpg" />
          <span class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
        </span>
        <div class="flex-grow-1 ps-2">
          <h6 class="text-primary mb-0">Ninfa Monaldo</h6>
          <p class="text-muted f-s-12 mb-0">Web Developer</p>
        </div>

        <b-dropdown variant="link" toggle-class="text-dark">
          <template #button-content>
            <i class="ti ti-settings fs-5"></i>
          </template>
          <b-dropdown-item href="./profile.html" target="_blank">
            <i class="ph-duotone ph-user-circle pe-1 f-s-20"></i> Profile Details
          </b-dropdown-item>
          <b-dropdown-item href="./setting.html" target="_blank">
            <i class="ph-duotone ph-gear pe-1 f-s-20"></i> Settings
          </b-dropdown-item>
          <b-dropdown-item>
            <div class="d-flex align-items-center justify-content-between">
              <p class="mb-0">Incognito</p>
              <input class="form-check-input form-check-primary" type="checkbox" v-model="notificationsEnabled" />
            </div>
          </b-dropdown-item>
          <b-dropdown-item href="./sign_up.html" target="_blank">
            <i class="ph-bold ph-plus pe-1 f-s-20"></i> Add Account
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item href="./sign_in.html" target="_blank" class="text-danger">
            <i class="ph-duotone ph-sign-out pe-1 f-s-20"></i> Log Out
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <div class="app-nav" id="app-simple-bar">
      <ul class="main-nav p-0 mt-2">
        <li class="menu-title"><span>Dashboard</span></li>

        <li>
          <a href="#" @click.prevent="dashboardOpen = !dashboardOpen">
            <svg stroke="currentColor" stroke-width="1.5"><use xlink:href="../assets/svg/_sprite.svg#home" /></svg>
            Dashboard
            <span class="badge bg-danger ms-2">New</span>
          </a>
          <b-collapse v-model="dashboardOpen">
            <ul>
              <li><b-nav-item href="index.html">Ecommerce</b-nav-item></li>
              <li><b-nav-item href="project_dashboard.html">Project</b-nav-item></li>
            </ul>
          </b-collapse>
        </li>

        <li>
          <a href="#" @click.prevent="appsOpen = !appsOpen">
            <svg stroke="currentColor" stroke-width="1.5"><use xlink:href="../assets/svg/_sprite.svg#stack" /></svg>
            Apps
          </a>
          <b-collapse v-model="appsOpen">
            <ul>
              <li><b-nav-item href="calendar.html">Calendar</b-nav-item></li>
              <!-- Nested example -->
              <li>
                <a href="#" @click.prevent="uiKitsOpen = !uiKitsOpen">Profile</a>
                <b-collapse v-model="uiKitsOpen">
                  <ul>
                    <li><b-nav-item href="profile.html">Profile</b-nav-item></li>
                    <li><b-nav-item href="setting.html">Setting</b-nav-item></li>
                  </ul>
                </b-collapse>
              </li>
            </ul>
          </b-collapse>
        </li>

        <!-- Add other menus similarly -->

      </ul>
    </div>

    <div class="menu-navs">
      <span class="menu-previous"><i class="ti ti-chevron-left"></i></span>
      <span class="menu-next"><i class="ti ti-chevron-right"></i></span>
    </div>
  </nav>
</template>
