<script setup>
import {
  BCard,
  BCardBody,
  BBadge,
  BTable,
  BLink,
} from 'bootstrap-vue-next'
import {ref} from "vue";
import {notifications, statCards, timelineItems} from "@/data/dashboard/ecommerce/EcommerceCardsData.js";
const tableFields = [
  { key: 'description', label: '' },
  { key: 'amount', label: '' }
]

const tableItems = ref([
  {
    description: 'Sub Total :',
    amount: '$359.96',
    _rowVariant: 'total-price',
    _cellClasses: { description: 'fw-bold', amount: 'text-end fw-bold' }
  },
  {
    description: 'Discount:',
    amount: '-$53.00',
    textClass: 'text-success'
  },
  {
    description: 'Estimated Tax (12.5%) :',
    amount: '$44.99',
    textClass: 'text-danger'
  },
  {
    description: 'Total (USD) :',
    amount: '$415.96',
    _rowVariant: 'total-price',
    _cellClasses: { description: 'fw-bold', amount: 'text-end fw-bold' }
  }
])
</script>


<template>
    <div class="col-lg-5 col-xxl-3 eshop-cards-container">
      <div class="row">
        <div
            v-for="card in statCards"
            :key="card.id"
            class="col-6 col-md-3 col-lg-6"
        >
          <b-card no-body>
          <span
              :class="`bg-${card.bgColor} h-50 w-50 d-flex-center rounded-circle m-auto eshop-icon-box`"
          >
            <component :is="card.icon" :size="24" weight="duotone" />
          </span>
            <b-card-body class="eshop-cards">
              <span class="ripple-effect"></span>
              <div class="overflow-hidden">
                <h3 :class="`text-${card.textColor} mb-0`">
                  {{ card.value }}
                </h3>
                <p class="mg-b-35 f-w-600 text-dark-800 txt-ellipsis-1">
                  {{ card.title }}
                </p>
                <b-badge :bg="card.badgeBg">{{ card.badgeText }}</b-badge>
              </div>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>

    <div class="col-lg-7 col-xxl-6">
      <b-card class="mb-3" no-body>
        <b-card-body>
          <div class="row align-items-center">
            <div class="col-sm-6 position-relative">
              <div class="location-container">
                <div class="glass-effect-box position-absolute bottom-0">
                  <div class="d-flex align-items-center flex-wrap">
                    <div class="w-65 h-65 overflow-hidden position-absolute top-0 start-0 d-flex-center">
                      <img
                          alt="image"
                          class="img-fluid"
                          src="/images/dashboard/ecommerce-dashboard/order1.gif"
                      />
                    </div>
                    <div class="flex-grow-1 ps-5">
                      <p class="fw-medium mb-0">OrderId</p>
                      <h6 class="text-primary mb-0 txt-ellipsis-1">
                        r72qU2892
                      </h6>
                    </div>
                    <b-badge bg="primary" class="f-s-10 ms-2">
                      • On The Way
                    </b-badge>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 cart-side-card mt-3 mt-sm-0">
              <div class="mb-2">
                <h6 class="text-dark mb-0 txt-ellipsis-1">
                  Delivery Date : 20 Feb 2025
                </h6>
              </div>
              <b-table
                  class="cart-side-table mb-0"
                  :items="tableItems"
                  :fields="tableFields"
              >
                <template #cell(amount)="data">
                  <span :class="data.item.textClass">{{ data.value }}</span>
                </template>
              </b-table>
              <p class="f-w-500 mb-0 txt-ellipsis-1">
                Support:
                <BLink
                    href="http://localhost:3000/apps/e-shop/orders-details"
                    class="link-primary text-d-underline"
                >
                  https://support.aicom.com/order?r72qU2892
                </BLink>
              </p>
            </div>
          </div>
        </b-card-body>
      </b-card>


      <b-card no-body>
        <b-card-body>
          <ul class="app-side-timeline shipping-timeline">
            <li
                v-for="item in timelineItems"
                :key="item.id"
                :class="`side-timeline-section w-100 right-side ${
              item.isCompleted ? 'complete-step' : ''
            }`"
            >
              <div class="side-timeline-icon">
              <span
                  :class="`${
                  item.isCompleted
                    ? 'bg-primary text-white'
                    : item.iconBg || 'bg-light-secondary'
                } ${
                  item.iconTextColor || 'text-dark-400'
                } h-35 w-35 d-flex-center b-r-50`"
              >
                <component :is="item.icon" :size="18" weight="fill" />
              </span>
              </div>
              <div class="timeline-content p-0">
                <div>
                  <h6 class="f-s-15 mb-2 txt-ellipsis-1">
                    {{ item.title }}
                  </h6>
                  <p class="mb-0 text-dark-800 f-w-400">
                    {{ item.date }}
                    <span class="text-primary f-w-500">{{ item.time }}</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </b-card-body>
      </b-card>
    </div>

    <div class="col-sm-7 col-lg-4 col-xxl-3">
      <ul class="notifications-list box-list mb-4">
        <li
            v-for="notification in notifications"
            :key="notification.id"
            :class="`d-flex align-items-center ${
          notification.type === 'header'
            ? 'justify-content-between gap-3 b-s-4-primary'
            : ''
        }`"
        >
          <template v-if="notification.type === 'header'">
            <div>
              <h6 class="txt-ellipsis-1 mb-0">
                {{ notification.title }}
              </h6>
              <p class="text-secondary mb-0">
                {{ notification.subtitle }}
              </p>
            </div>
            <div class="h-45 w-45 d-flex-center rounded-circle flex-shrink-0 bg-light-primary position-relative">
              <component :is="notification.icon" :size="20" />
              <span class="position-absolute translate-middle badge rounded-pill bg-danger badge-notification">
              {{ notification.badgeCount }}
            </span>
            </div>
          </template>
          <template v-else>
            <div
                :class="`h-45 w-45 d-flex-center b-r-12 overflow-hidden flex-shrink-0 ${notification.avatarBg}`"
            >
              <template v-if="notification.avatarText">
                {{ notification.avatarText }}
              </template>
              <img
                  v-else
                  alt="order"
                  class="img-fluid"
                  :src="notification.avatarImage"
              />
            </div>
            <div class="ms-3">
              <p class="mb-0 f-w-500 f-s-16 txt-ellipsis-1">
                {{ notification.message }}
              </p>
              <p class="mb-0 text-secondary">{{ notification.time }}</p>
            </div>
          </template>
        </li>
      </ul>
    </div>

</template>

