<template>
  <div>
    <section class="demos-section section-lg-space-x" id="Demo">
      <div class="container">
        <BRow>
          <div class="col-xl-8">
            <div class="landing-title">
              <BBadge class="title-badge mb-3" variant="light-primary">
                <PhCards
                    :size="18"
                    weight="fill"
                    class="me-2 align-text-bottom"
                />
                Pages
              </BBadge>
              <h2>
                150 <span class="highlight-title"> pages</span>
              </h2>
              <p class="mb-0">
                All pages created with unlimited features that will reduce the
                cost, efforts and your time.
              </p>
            </div>
          </div>
        </BRow>

        <BTabs v-model="activeTab" class="mt-3">
          <BRow>
            <BCol xl="3">
              <div class="demos-tab-section">
                <BNav pills vertical class="app-tabs-dark nav-tabs" id="v-bg">

                  <BNavItem :active="activeTab === 'dashboard'">
                    <BNavLink  @click.prevent="activeTab = 'dashboard'">
                      <PhHouse :size="36" class="pe-2 ps-1" /> Dashboard
                    </BNavLink>
                  </BNavItem>

                  <BNavItem :active="activeTab === 'apps'">
                    <BNavLink  @click.prevent="activeTab = 'apps'">
                      <PhStack :size="36" class="pe-2 ps-1" /> Apps
                    </BNavLink>
                  </BNavItem>

                  <BNavItem :active="activeTab === 'ui'">
                    <BNavLink  @click.prevent="activeTab = 'ui'">
                      <PhBriefcase :size="36" class="pe-2 ps-1" /> UI Kits
                    </BNavLink>
                  </BNavItem>

                  <BNavItem :active="activeTab === 'advanceUi'">
                    <BNavLink  @click.prevent="activeTab = 'advanceUi'">
                      <PhBriefcaseMetal :size="36" class="pe-2 ps-1" /> Advance UI
                    </BNavLink>
                  </BNavItem>

                  <BNavItem :active="activeTab === 'icons'">
                    <BNavLink  @click.prevent="activeTab = 'icons'">
                      <PhShapes :size="36" class="pe-2 ps-1" /> Icons
                    </BNavLink>
                  </BNavItem>

                  <BNavItem :active="activeTab === 'table'">
                    <BNavLink  @click.prevent="activeTab = 'table'">
                      <PhTable :size="36" class="pe-2 ps-1" /> Tables
                    </BNavLink>
                  </BNavItem>

                  <BNavItem :active="activeTab === 'forms'">
                    <BNavLink  @click.prevent="activeTab = 'forms'">
                      <PhCardholder :size="36" class="pe-2 ps-1" /> Forms
                    </BNavLink>
                  </BNavItem>

                  <BNavItem :active="activeTab === 'readyTouse'">
                    <BNavLink  @click.prevent="activeTab = 'readyTouse'">
                      <PhHandHeart :size="36" class="pe-2 ps-1" /> Ready To Use
                    </BNavLink>
                  </BNavItem>

                  <BNavItem :active="activeTab === 'auth'">
                    <BNavLink  @click.prevent="activeTab = 'auth'">
                      <PhNotebook :size="36" class="pe-2 ps-1" /> Auth Pages
                    </BNavLink>
                  </BNavItem>

                  <BNavItem :active="activeTab === 'error'">
                    <BNavLink  @click.prevent="activeTab = 'error'">
                      <PhWarningOctagon :size="36" class="pe-2 ps-1" /> Error Pages
                    </BNavLink>
                  </BNavItem>

                </BNav>
              </div>
            </BCol>
            <BCol xl="9">
              <div class="mt-3 pe-sm-5 pe-0">
                <!-- Dashboard tab -->
                <BTabPane v-if="activeTab === 'dashboard'">
                  <BRow class="g-4">
                    <BCol sm="6" v-for="(item, index) in tabData.dashboard" :key="index">
                      <BCard class="demo-card">
                        <BCardBody>
                          <img
                              alt="demo-img"
                              class="img-fluid b-r-8"
                              :src="`/images/landing/${item.img}`"
                          />
                          <div class="demo-box">
                            <h6 class="m-0 f-w-500 f-s-18">
                              {{ item.title }}
                            </h6>
                            <BButton
                                target="_blank"
                                variant="primary"
                                class="icon-btn b-r-22"
                            >
                              <PhCaretRight weight="bold" />
                            </BButton>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BTabPane>

                <!-- Apps tab -->
                <BTabPane v-if="activeTab === 'apps'">
                  <BRow class="g-4">
                    <BCol md="6" v-for="(item, index) in tabData.apps" :key="index">
                      <BCard class="demo-card">
                        <BCardBody>
                          <img
                              alt="demo-img"
                              class="img-fluid b-r-8"
                              :src="`/images/landing/${item.img}`"
                          />
                          <div class="demo-box">
                            <h6 class="m-0 f-w-500 f-s-18">
                              {{ item.title }}
                            </h6>
                            <BButton

                                target="_blank"
                                variant="primary"
                                class="icon-btn b-r-22"
                            >
                              <PhCaretRight weight="bold" />
                            </BButton>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BTabPane>

                <!-- UI Kits tab -->
                <BTabPane v-if="activeTab === 'ui'">
                  <BRow class="g-4">
                    <BCol md="6" v-for="(item, index) in tabData.ui" :key="index">
                      <BCard class="demo-card">
                        <BCardBody>
                          <img
                              alt="demo-img"
                              class="img-fluid b-r-8"
                              :src="`/images/landing/${item.img}`"
                          />
                          <div class="demo-box">
                            <h6 class="m-0 f-w-500 f-s-18">
                              {{ item.title }}
                            </h6>
                            <BButton
                                target="_blank"
                                variant="primary"
                                class="icon-btn b-r-22"
                            >
                              <PhCaretRight weight="bold" />
                            </BButton>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BTabPane>

                <!-- Advance UI tab -->
                <BTabPane v-if="activeTab === 'advanceUi'">
                  <BRow class="g-4">
                    <BCol md="6" v-for="(item, index) in tabData.advanceUi" :key="index">
                      <BCard class="demo-card">
                        <BCardBody>
                          <img
                              alt="demo-img"
                              class="img-fluid b-r-8"
                              :src="`/images/landing/${item.img}`"
                          />
                          <div class="demo-box">
                            <h6 class="m-0 f-w-500 f-s-18">
                              {{ item.title }}
                            </h6>
                            <BButton
                                target="_blank"
                                variant="primary"
                                class="icon-btn b-r-22"
                            >
                              <PhCaretRight weight="bold" />
                            </BButton>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BTabPane>

                <!-- Icons tab -->
                <BTabPane v-if="activeTab === 'icons'">
                  <BRow class="g-4">
                    <BCol md="6" v-for="(item, index) in tabData.icons" :key="index">
                      <BCard class="demo-card">
                        <BCardBody>
                          <img
                              alt="demo-img"
                              class="img-fluid b-r-8"
                              :src="`/images/landing/${item.img}`"
                          />
                          <div class="demo-box">
                            <h6 class="m-0 f-w-500 f-s-18">
                              {{ item.title }}
                            </h6>
                            <BButton
                                :href="item.link"
                                target="_blank"
                                variant="primary"
                                class="icon-btn b-r-22"
                            >
                              <PhCaretRight weight="bold" />
                            </BButton>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BTabPane>

                <!-- Table tab -->
                <BTabPane v-if="activeTab === 'table'">
                  <BRow class="g-4">
                    <BCol md="6" v-for="(item, index) in tabData.table" :key="index">
                      <BCard class="demo-card">
                        <BCardBody>
                          <img
                              alt="demo-img"
                              class="img-fluid b-r-8"
                              :src="`/images/landing/${item.img}`"
                          />
                          <div class="demo-box">
                            <h6 class="m-0 f-w-500 f-s-18">
                              {{ item.title }}
                            </h6>
                            <BButton
                                :href="item.link"
                                target="_blank"
                                variant="primary"
                                class="icon-btn b-r-22"
                            >
                              <PhCaretRight weight="bold" />
                            </BButton>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BTabPane>

                <!-- Forms tab -->
                <BTabPane v-if="activeTab === 'forms'">
                  <BRow class="g-4">
                    <BCol md="6" v-for="(item, index) in tabData.forms" :key="index">
                      <BCard class="demo-card">
                        <BCardBody>
                          <img
                              alt="demo-img"
                              class="img-fluid b-r-8"
                              :src="`/images/landing/${item.img}`"
                          />
                          <div class="demo-box">
                            <h6 class="m-0 f-w-500 f-s-18">
                              {{ item.title }}
                            </h6>
                            <BButton
                                :href="item.link"
                                target="_blank"
                                :variant="item.title === 'Dual Listbox' ? 'danger' : 'primary'"
                                class="icon-btn b-r-22"
                            >
                              <PhCaretRight weight="bold" />
                            </BButton>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BTabPane>

                <!-- Ready To Use tab -->
                <BTabPane v-if="activeTab === 'readyTouse'">
                  <BRow class="g-4">
                    <BCol md="6" v-for="(item, index) in tabData.readyTouse" :key="index">
                      <BCard class="demo-card">
                        <BCardBody>
                          <img
                              alt="demo-img"
                              class="img-fluid b-r-8"
                              :src="`/images/landing/${item.img}`"
                          />
                          <div class="demo-box">
                            <h6 class="m-0 f-w-500 f-s-18">
                              {{ item.title }}
                            </h6>
                            <BButton
                                :href="item.link"
                                target="_blank"
                                variant="primary"
                                class="icon-btn b-r-22"
                            >
                              <PhCaretRight weight="bold" />
                            </BButton>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BTabPane>

                <!-- Auth Pages tab -->
                <BTabPane v-if="activeTab === 'auth'">
                  <BRow class="g-4">
                    <BCol md="6" v-for="(item, index) in tabData.auth" :key="index">
                      <BCard class="demo-card">
                        <BCardBody>
                          <img
                              alt="demo-img"
                              class="img-fluid b-r-8"
                              :src="`/images/landing/${item.img}`"
                          />
                          <div class="demo-box">
                            <h6 class="m-0 f-w-500 f-s-18">
                              {{ item.title }}
                            </h6>
                            <BButton
                                :href="item.link"
                                target="_blank"
                                variant="primary"
                                class="icon-btn b-r-22"
                            >
                              <PhCaretRight weight="bold" />
                            </BButton>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BTabPane>

                <!-- Error Pages tab -->
                <BTabPane v-if="activeTab === 'error'">
                  <BRow class="g-4">
                    <BCol md="6" v-for="(item, index) in tabData.error" :key="index">
                      <BCard class="demo-card">
                        <BCardBody>
                          <img
                              alt="demo-img"
                              class="img-fluid b-r-8"
                              :src="`/images/landing/${item.img}`"
                          />
                          <div class="demo-box">
                            <h6 class="m-0 f-w-500 f-s-18">
                              {{ item.title }}
                            </h6>
                            <BButton
                                :href="item.link"
                                target="_blank"
                                variant="primary"
                                class="icon-btn b-r-22"
                            >
                              <PhCaretRight weight="bold" />
                            </BButton>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BTabPane>
              </div>
            </BCol>
          </BRow>
        </BTabs>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  BBadge,
  BButton,
  BCard,
  BCardBody,
  BCol,
  BNav,
  BNavItem,
  BRow,
  BTabs,
} from 'bootstrap-vue-next'

import {
  PhHandHeart,
  PhShapes,
  PhTable
} from '@phosphor-icons/vue'
import {
  PhBriefcase,
  PhBriefcaseMetal,
  PhCardholder,
  PhCards,
  PhCaretRight,
  PhHouse,
  PhNotebook,
  PhStack,
  PhWarningOctagon,
} from '@phosphor-icons/vue'

const activeTab = ref('dashboard')

const tabData = {
  dashboard: [
    {
      title: "Ecommerce",
      img: "ecommerce-dashboard.jpg",
      link: "/dashboard/ecommerce",
    },
    {
      title: "Project",
      img: "project-dashboard.jpg",
      link: "/dashboard/project",
    },
  ],
  apps: [
    { title: "Calendar", img: "calender.jpg", link: "/apps/calendar" },
    {
      title: "Profile",
      img: "profile.jpg",
      link: "/apps/profile-page/profile",
    },
    { title: "Team", img: "team.jpg", link: "/apps/team" },
    { title: "Chat", img: "chat.jpg", link: "/apps/chat" },
    { title: "Email", img: "email.jpg", link: "/apps/email-page/email" },
    { title: "Ecommerce", img: "ecommerce.jpg", link: "/apps/e-shop/product" },
    { title: "Todo", img: "to-do.jpg", link: "/apps/todo" },
    {
      title: "File manager",
      img: "file-manager.jpg",
      link: "/apps/file-manager",
    },
    { title: "Blog", img: "blog.jpg", link: "/apps/blog-page/blog" },
  ],
  ui: [
    { title: "Alert", img: "alert.jpg", link: "/ui-kits/alert" },
    { title: "Badges", img: "badges.jpg", link: "/ui-kits/badges" },
    { title: "Buttons", img: "button.jpg", link: "/ui-kits/buttons" },
    { title: "Dropdown", img: "dropdown.jpg", link: "/ui-kits/dropdown" },
    { title: "Avtar", img: "avatar.jpg", link: "/ui-kits/avatar" },
    { title: "Accordions", img: "accordions.jpg", link: "/ui-kits/accordions" },
    { title: "Progress", img: "progress.jpg", link: "/ui-kits/progress" },
    {
      title: "Notifications",
      img: "notification.jpg",
      link: "/ui-kits/notifications",
    },
  ],
  advanceUi: [
    { title: "Modals", img: "modal.jpg", link: "/advance-ui/modals" },
    {
      title: "Sweetalert",
      img: "sweet-alert.jpg",
      link: "/advance-ui/sweat-alert",
    },
    { title: "Animation", img: "animation.jpg", link: "/advance-ui/animation" },
    {
      title: "Video embaded",
      img: "video-embaded.jpg",
      link: "/advance-ui/video-embed",
    },
    { title: "Tour", img: "tour.jpg", link: "/advance-ui/tour" },
    { title: "Slider", img: "slider.jpg", link: "/advance-ui/slider" },
    { title: "Rating", img: "rating.jpg", link: "/advance-ui/rating" },
    {
      title: "Count Down",
      img: "count-down.jpg",
      link: "/advance-ui/count-down",
    },
  ],
  icons: [
    {
      title: "Fontawesome Icons",
      img: "fontawesome.jpg",
      link: "/icons/font-awesome",
    },
    { title: "Flag Icons", img: "flag.jpg", link: "/icons/flag" },
    {
      title: "Animated Icons",
      img: "animated-icon.jpg",
      link: "/icons/animated",
    },
    {
      title: "Whether Icons",
      img: "weather-icon.jpg",
      link: "/icons/weather",
    },
  ],
  table: [
    { title: "Basic Table", img: "basic-table.jpg", link: "/table/basictable" },
    { title: "Data Table", img: "data-table.jpg", link: "/table/data-table" },
    { title: "List Js", img: "list-js.jpg", link: "/table/list-js" },
    {
      title: "Advance Table",
      img: "advance-table.jpg",
      link: "/table/advance-table",
    },
  ],
  forms: [
    {
      title: "Basic input",
      img: "base-input.jpg",
      link: "/forms-elements/base-input",
    },
    {
      title: "Form Validation",
      img: "form-validation.jpg",
      link: "/forms-elements/form-validation",
    },
    {
      title: "Checkbox & Radio",
      img: "checkbox.jpg",
      link: "/forms-elements/checkbox-radio",
    },
    {
      title: "Input Mask",
      img: "input-mask.jpg",
      link: "/forms-elements/input-masks",
    },
    {
      title: "Floating Labels",
      img: "floating-label.jpg",
      link: "/forms-elements/floating-labels",
    },
    { title: "Select", img: "select.jpg", link: "/forms-elements/select2" },
    {
      title: "Range Slider",
      img: "range-slider.jpg",
      link: "/forms-elements/range-slider",
    },
    {
      title: "Clipboard",
      img: "clip-board.jpg",
      link: "/forms-elements/clipboard",
    },
    {
      title: "File Upload",
      img: "file-upload.jpg",
      link: "/forms-elements/file-upload",
    },
    {
      title: "Dual Listbox",
      img: "duel-list-box.jpg",
      link: "/forms-elements/dual-list-boxes",
    },
    {
      title: "Default Forms",
      img: "default-form.jpg",
      link: "/forms-elements/default-forms",
    },
  ],
  readyTouse: [
    {
      title: "Form Wizards",
      img: "form-wizard.jpg",
      link: "/ready-to-use/form-wizards",
    },
    {
      title: "Form Wizards 1",
      img: "form-wizard-1.jpg",
      link: "/ready-to-use/form-wizard-1",
    },
    {
      title: "Form Wizards 2",
      img: "form-wizard-2.jpg",
      link: "/ready-to-use/form-wizard-2",
    },
    {
      title: "Ready To Use Form",
      img: "ready-to-use-form.jpg",
      link: "/ready-to-use/ready-to-use-form",
    },
    {
      title: "Ready To Use table",
      img: "ready-to-use-table.jpg",
      link: "/ready-to-use/ready-to-use-tables",
    },
  ],
  auth: [
    { title: "Sign In", img: "auth-1.jpg", link: "/auth-pages/sign-in" },
    {
      title: "Sign In With Bg image",
      img: "auth-2.jpg",
      link: "/auth-pages/sign-in-with-bg-image",
    },
    { title: "Sign-up", img: "auth-3.jpg", link: "/auth-pages/sign-up" },
    {
      title: "Sign Up With Bgimage",
      img: "auth-4.jpg",
      link: "/auth-pages/sign-up-with-bg-image",
    },
    {
      title: "Password Create",
      img: "auth-5.jpg",
      link: "/auth-pages/password-create",
    },
    {
      title: "Password reset",
      img: "auth-6.jpg",
      link: "/auth-pages/password-reset",
    },
    {
      title: "Lock Screen",
      img: "auth-7.jpg",
      link: "/auth-pages/lock-screen",
    },
    {
      title: "Tow Step Verification",
      img: "auth-8.jpg",
      link: "/auth-pages/two-step-verification",
    },
  ],
  error: [
    {
      title: "Bad Request",
      img: "error-400.jpg",
      link: "/error-pages/bad-request",
    },
    {
      title: "Forbidden",
      img: "error-403.jpg",
      link: "/error-pages/forbidden",
    },
    {
      title: "Not Found",
      img: "error-404.jpg",
      link: "/error-pages/not-found",
    },
    {
      title: "Internal Server",
      img: "error-500.jpg",
      link: "/error-pages/internal-server",
    },
    {
      title: "Service Unavailable",
      img: "error-503.jpg",
      link: "/error-pages/service-unavailable",
    },
  ],
}
</script>