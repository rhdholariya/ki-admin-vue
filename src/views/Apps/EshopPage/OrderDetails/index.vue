<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardBody,
  BCardHeader,
  BContainer,
  BRow,
  BCol,
  BTable,
  BBadge,
  BButton,
  BImg
} from "bootstrap-vue-next";
import { PhStack } from "@phosphor-icons/vue";
import {IconEdit, IconTrash, IconStarFilled} from "@tabler/icons-vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {
  ordersCardData,
  cardData,
  orderTimelineData
} from "@/data/app/EshopPage/OrderDetails/OrderDetailData.js";
import AppLayout from "@/views/AppLayout.vue";

const orders = ref([...ordersCardData]);

const handleDelete = (id) => {
  orders.value = orders.value.filter((order) => order.id !== id);
};

const getBadgeVariant = (status) => {
  switch (status) {
    case "CANCELLED":
      return "danger";
    case "DELIVERED":
      return "success";
    case "PICKUPS":
      return "info";
    case "RETURNS":
      return "secondary";
    default:
      return "light";
  }
};

const breadcrumbItems = {
  title: "Orders Details",
  items: [
    {label: "Apps", icon: PhStack},
    {label: "E-shop"},
    {label: "Orders Details", active: true}
  ]
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-row class="order-details">
          <b-col xxl="9">
            <b-row>
              <b-col
                  lg="4"
                  v-for="(card, cardIndex) in cardData"
                  :key="`card-${cardIndex}`"
              >
                <b-card class="order-details-card" no-body>
                  <b-card-header>
                    <h5 :class="cardIndex === 0 ? 'text-nowrap' : ''">
                      {{ card.title }}
                    </h5>
                  </b-card-header>
                  <b-card-body>
                    <div
                        v-for="(item, itemIndex) in card.items"
                        :key="`item-${cardIndex}-${itemIndex}`"
                        :class="[
                        'd-flex justify-content-between align-items-center',
                        itemIndex > 0 ? 'mt-3' : ''
                      ]"
                    >
                      <h6 class="d-flex align-items-center text-dark gap-2">
                        <span
                            class="h-40 w-40 d-flex-center b-r-50 text-light-primary"
                        >
                          <component :is="item.icon" size="18"/>
                        </span>
                        {{ item.label }}
                      </h6>
                      <div class="text-end">
                        <p>{{ item.value }}</p>
                      </div>
                    </div>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>

            <b-card no-body>
              <b-card-header>
                <h5>Order : #ACD1100897</h5>
              </b-card-header>
              <b-card-body class="p-0">
                <div class="orders-details-datatable app-scroll table-responsive">
                  <b-table
                      class="table-bottom-border table-striped text-center align-middle mb-0"
                      :items="orders"
                      :fields="[
                      { key: 'product', label: 'Product Details', class: 'text-start' },
                      { key: 'status', label: 'Status' },
                       { key: 'orderDate', label: 'Order Date' },
                      { key: 'price', label: 'Price' },
                      { key: 'quantity', label: 'Quantity' },
                      { key: 'rating', label: 'Rating' },
                      { key: 'actions', label: 'Action' }
                    ]"
                  >

                    <template #cell(product)="data">
                      <div class="d-flex align-items-center gap-2">
                        <b-img
                            :src="data.item.productImage"
                            alt="product-img"
                            class="b-r-10 h-50 w-auto rounded object-fit-cover"
                        />
                        <div class="text-start">
                          <h6 class="f-s-16 mb-0">
                            {{ data.item.productName }}
                          </h6>
                          <p class="text-muted f-s-13 m-0">
                            Color:
                            <span class="text-secondary">{{ data.item.color }}</span>
                          </p>
                          <p class="text-muted f-s-13 m-0">
                            Size:
                            <span class="text-secondary">{{ data.item.size }}</span>
                          </p>
                        </div>
                      </div>
                    </template>

                    <template #cell(status)="data">
                      <b-badge :variant="getBadgeVariant(data.item.status)">
                        {{ data.item.status }}
                      </b-badge>
                    </template>
                    <template #cell(orderDate)="data">
                      <span class="f-w-500 f-s-14">{{ data.item.orderDate }}</span>
                    </template>
                    <template #cell(price)="data">
                      <span class="f-w-500 text-success">{{ data.item.price }}</span>
                    </template>



                    <template #cell(rating)="data">
                      <div>
                        <IconStarFilled
                            v-for="i in 5"
                            :key="i"
                            size="16"
                            :class="i <= data.item.rating ? 'text-warning' : 'text-secondary'"
                        />
                      </div>
                    </template>

                    <template #cell(actions)="data">
                      <b-button
                          variant="outline-success"
                          class="icon-btn b-r-4 me-2 rounded"
                      >
                        <IconEdit size="18"/>
                      </b-button>
                      <b-button
                          variant="outline-danger"
                          class="icon-btn b-r-4 rounded"
                          @click="handleDelete(data.item.id)"
                      >
                        <IconTrash size="18"/>
                      </b-button>
                    </template>
                  </b-table>
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col xxl="3">
            <b-card class="equal-card" no-body>
              <b-card-header>
                <h5>Order Status</h5>
              </b-card-header>
              <b-card-body>
                <ul class="app-timeline-box">
                  <li
                      v-for="(item, index) in orderTimelineData"
                      :key="`timeline-${index}`"
                      class="timeline-section"
                  >
                    <div class="timeline-icon">
                      <span
                          :class="`${item.iconClass} h-35 w-35 d-flex-center b-r-50`"
                      >
                        <component :is="item.icon" size="18"/>
                      </span>
                    </div>
                    <div :class="`timeline-content ${item.contentClass}`">
                      <div
                          class="d-flex justify-content-between align-items-center timeline-flex"
                      >
                        <h6 :class="`mt-2 ${item.titleClass}`">
                          {{ item.title }}
                        </h6>
                        <b-badge
                            v-if="item.timeBadge"
                            :variant="item.timeClass.replace('text-bg-', '')"
                            class="ms-2"
                        >
                          {{ item.time }}
                        </b-badge>
                        <span v-else :class="item.timeClass">{{ item.time }}</span>
                      </div>
                      <p v-if="item.description" class="mt-2 text-dark">
                        {{ item.description }}
                      </p>
                      <p class="text-secondary">{{ item.date }}</p>
                      <div v-if="item.badges.length > 0" class="mt-2">
                        <b-badge
                            v-for="(badge, badgeIndex) in item.badges"
                            :key="`badge-${index}-${badgeIndex}`"
                            variant="primary"
                            class="me-2 bg-primary-900"
                        >
                          {{ badge }}
                        </b-badge>
                      </div>
                    </div>
                  </li>
                </ul>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>
