<script setup>
import { computed } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
} from "bootstrap-vue-next";

import {
  IconBooks,
  IconClipboardData,
  IconDatabaseExport,
  IconFileFilled,
  IconHome,
  IconInfoCircle,
  IconTableExport,
  IconUsers,
} from "@tabler/icons-vue";

const breadcrumbSets = [
  {
    className: "breadcrumb bg-light-secondary p-2",
    items: [
      {
        label: "Home",
        href: "#",
        icon: IconHome,
      },
      {
        label: "Library",
        icon: IconBooks,
        active: true,
      },
    ],
  },
  {
    className: "breadcrumb bg-light-secondary p-2",
    items: [{ label: "Home", href: "#" }, { label: "Library", active: true }],
  },
  {
    className: "breadcrumb flex-wrap bg-light-secondary p-2",
    items: [
      { label: "Home", href: "#", icon: IconHome },
      { label: "Library", href: "#", icon: IconBooks },
      { label: "File", icon: IconFileFilled, active: true },
    ],
  },
  {
    className: "breadcrumb bg-light-secondary p-2 bootstrap-breadcrumb divider",
    items: [{ label: "Home", href: "#" }, { label: "Library", active: true }],
  },
  {
    className:
        "breadcrumb bg-light-secondary p-2 mb-0 bootstrap-breadcrumb divider1",
    items: [
      { label: "Home", href: "#", icon: IconHome },
      { label: "Library", icon: IconBooks, active: true },
    ],
  },
];
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhShapes} from "@phosphor-icons/vue";
const textList = ["page1", "page2", "page3", "page4"];
const iconList = [IconHome, IconBooks, IconFileFilled, IconDatabaseExport];
const simplePages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];
const breadcrumbItems1 = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];
const breadcrumbTexts = ["Home", "Gallery", "Library", "Web", "Data"];
const breadcrumbIcons = [
  IconHome,
  IconBooks,
  IconFileFilled,
  IconDatabaseExport,
  IconClipboardData,
];
const breadcrumbIconsOnly = [
  IconHome,
  IconBooks,
  IconFileFilled,
  IconDatabaseExport,
  IconClipboardData,
];
const iconSteps = [IconUsers, IconInfoCircle, IconTableExport];
const shapeSteps = [
  { label: "Cart" },
  { label: "Billing" },
  { label: "Shipping" },
  { label: "Payment" },
];
const stepNumbers = ["1", "2", "3"];
const pages = [1, 2, 3];
// Component data
const breadcrumbItems = computed(() => ({
  title: "Misc",
  items: [
    {label: " Misc ", icon: PhShapes},
    {label: "Misc", active: true},
  ],
}));
</script>
<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
          <b-col lg="5">
            <b-card no-body>
              <b-card-header><h5>Breadcrumbs</h5></b-card-header>
              <b-card-body class="app-breadcrumb">
                <div v-for="(set, index) in breadcrumbSets" :key="index">
                  <ol :class="set.className">
                    <li
                        v-for="(item, i) in set.items"
                        :key="i"
                        :class="['breadcrumb-item', { active: item.active }]"
                        :aria-current="item.active ? 'page' : null"
                    >
                      <a v-if="item.href" :href="item.href" class="d-flex align-content-center">
                        <component v-if="item.icon" :is="item.icon" size="18" class="me-1" />
                        {{ item.label }}
                      </a>
                      <template v-else>
                        <component v-if="item.icon" :is="item.icon" size="18" class="me-1" />
                        {{ item.label }}
                      </template>
                    </li>
                  </ol>
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="7">
            <b-card class="equal-card" no-body>
              <b-card-header><h5>Custom Breadcrumbs</h5></b-card-header>
              <b-card-body>
                <ul class="line-breadcrumbs">
                  <li v-for="(text, index) in textList" :key="index">
                    <a :class="{ active: index < 2 }" href="#">{{ text }}</a>
                  </li>
                </ul>

                <div class="mt-4">
                  <ul class="breadcrumbs">
                    <li v-for="(text, index) in textList" :key="index">
                      <a :class="{ active: index < 2 }" href="#">
                        <component :is="iconList[index]" size="16" /> {{ text }}
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="mt-4">
                  <ul class="circle-breadcrumbs breadcrumbs-primary">
                    <li
                        v-for="(icon, index) in iconList"
                        :key="index"
                        :class="{ active: index === 0 }"
                    >
                      <a href="#"><component :is="icon" size="16" /></a>
                    </li>
                  </ul>
                </div>

                <div class="mt-4">
                  <ul class="simple-breadcrumbs">
                    <li
                        v-for="(page, index) in simplePages"
                        :key="index"
                        :class="{ active: index === 0 }"
                    >
                      <a href="#">{{ page }}</a>
                    </li>
                  </ul>
                </div>

                <div class="mt-4">
                  <ul class="simple-shape-breadcrumbs">
                    <li
                        v-for="(page, index) in simplePages"
                        :key="index"
                        :class="{ active: index < 2 }"
                    >
                      <a href="#">{{ page }}</a>
                    </li>
                  </ul>
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col xl="6">
            <b-card class="equal-card" no-body>
              <b-card-header><h5>Custom Breadcrumb</h5></b-card-header>
              <b-card-body>
                <ul class="shape-breadcrumbs mb-3">
                  <li
                      v-for="(item, index) in breadcrumbItems1"
                      :key="index"
                      :class="{ active: index < 2 }"
                  >
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>

                <ul class="shape-breadcrumbs">
                  <li
                      v-for="(item, index) in breadcrumbItems1"
                      :key="index"
                      :class="{ active: index < 3 }"
                  >
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col xl="6">
            <b-card class="equal-card" no-body>
              <b-card-header><h5>Rounded Breadcrumb</h5></b-card-header>
              <b-card-body>
                <ul class="rounded-breadcrumbs mb-3">
                  <li
                      v-for="(text, index) in breadcrumbTexts"
                      :key="index"
                      :class="{ active: index === 4 }"
                  >
                    <template v-if="index !== 4">
                      <a href="#">{{ text }}</a>
                    </template>
                    <template v-else>{{ text }}</template>
                  </li>
                </ul>

                <ul class="rounded-breadcrumbs mb-3">
                  <li
                      v-for="(text, index) in breadcrumbTexts"
                      :key="index"
                      :class="{ active: index === 4 }"
                  >
                    <template v-if="index !== 4">
                      <a href="#">
                        <component :is="breadcrumbIcons[index]" size="18" class="mg-e-4 f-s-18" />
                        {{ text }}
                      </a>
                    </template>
                    <template v-else>
                      <component :is="breadcrumbIcons[index]" size="18" class="mg-e-4 f-s-18" />
                      {{ text }}
                    </template>
                  </li>
                </ul>

                <ul class="rounded-breadcrumbs">
                  <li
                      v-for="(icon, index) in breadcrumbIconsOnly"
                      :key="index"
                      :class="{ active: index === 4 }"
                  >
                    <template v-if="index !== 4">
                      <a href="#"><component :is="icon" size="22" /></a>
                    </template>
                    <template v-else><component :is="icon" size="22" /></template>
                  </li>
                </ul>
              </b-card-body>
            </b-card>
          </b-col>


          <b-col xl="6">
            <b-card no-body>
              <b-card-header><h5>Steps</h5></b-card-header>
              <b-card-body>
                <div class="form-wizard">
                  <div class="form-wizard-header">
                    <ul class="form-wizard-steps">
                      <li
                          v-for="(step, index) in stepNumbers"
                          :key="index"
                          :class="{ active: index === 0 }"
                      >
                        <span class="wizard-steps">{{ step }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="form-wizard">
                  <div class="form-wizard-header">
                    <ul class="form-wizard-steps">
                      <li
                          v-for="(icon, index) in iconSteps"
                          :key="index"
                          :class="{ active: index === 0 }"
                      >
                    <span class="wizard-steps circle-steps">
                      <component :is="icon" />
                    </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <ul class="shape-step mb-3">
                  <li
                      v-for="(step, index) in shapeSteps"
                      :key="index"
                      :class="{ active: index < 2 }"
                  >
                    <a href="#">{{ step.label }}</a>
                  </li>
                </ul>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col xl="6">
            <b-card class="equal-card" no-body>
              <b-card-header><h5>Pagination</h5></b-card-header>
              <b-card-body>
                <div class="app-pagination-link">
                  <ul class="pagination app-pagination">
                    <li class="page-item"><a class="page-link">Previous</a></li>
                    <li
                        v-for="page in pages"
                        :key="'nav1-' + page"
                        class="page-item"
                    >
                      <a class="page-link">{{ page }}</a>
                    </li>
                    <li class="page-item"><a class="page-link">Next</a></li>
                  </ul>
                </div>

                <div class="mt-3">
                  <ul class="pagination app-pagination">
                    <li class="page-item"><a class="page-link">&laquo;</a></li>
                    <li v-for="page in pages" :key="'nav2-' + page" class="page-item">
                      <a class="page-link">{{ page }}</a>
                    </li>
                    <li class="page-item"><a class="page-link">&raquo;</a></li>
                  </ul>
                </div>

                <div class="mt-3">
                  <ul class="pagination app-pagination">
                    <li class="page-item disabled"><a class="page-link">Previous</a></li>
                    <li
                        v-for="page in pages"
                        :key="'nav3-' + page"
                        :class="['page-item', { active: page === 2 }]"
                    >
                      <a class="page-link">{{ page }}</a>
                    </li>
                    <li class="page-item"><a class="page-link">Next</a></li>
                  </ul>
                </div>

                <div class="mt-3">
                  <ul class="pagination pagination-lg justify-content-end app-pagination">
                    <li class="page-item disabled"><a class="page-link">«</a></li>
                    <li
                        v-for="page in pages"
                        :key="'nav4-' + page"
                        :class="[
                    'page-item',
                    { active: page === 2, 'd-none d-sm-block': page === 3 },
                  ]"
                    >
                      <a class="page-link">{{ page }}</a>
                    </li>
                    <li class="page-item"><a class="page-link">»</a></li>
                  </ul>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>

</template>