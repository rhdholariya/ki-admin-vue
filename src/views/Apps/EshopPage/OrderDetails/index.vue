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
import {
  IconEdit,
  IconTrash,
  IconStarFilled
} from "@tabler/icons-vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { ordersCardData, cardData, orderTimelineData } from "@/data/app/EshopPage/OrderDetails/OrderDetailData.js";
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
    { label: "Apps", icon: PhStack },
    { label: "E-shop" },
    { label: "Orders Details", active: true },
  ],
};
</script>

<template>
  <AppLayout>
    <main>
  <BContainer fluid>
    <Breadcrumb :breadcrumb="breadcrumbItems" />

    <BRow class="order-details">
      <BCol xxl="9">
        <BRow>
          <BCol lg="4" v-for="(card, cardIndex) in cardData" :key="`card-${cardIndex}`">
            <BCard class="order-details-card" no-body>
              <BCardHeader>
                <h5 :class="cardIndex === 0 ? 'text-nowrap' : ''">
                  {{ card.title }}
                </h5>
              </BCardHeader>
              <BCardBody>
                <div
                    v-for="(item, itemIndex) in card.items"
                    :key="`item-${cardIndex}-${itemIndex}`"
                    :class="`d-flex justify-content-between align-items-center ${itemIndex > 0 ? 'mt-3' : ''}`"
                >
                  <h6 class="d-flex align-items-center text-dark gap-2">
                    <span class="h-40 w-40 d-flex-center b-r-50 text-light-primary">
                      <component :is="item.icon" size="18" />
                    </span>
                    {{ item.label }}
                  </h6>
                  <div class="text-end">
                    <p>{{ item.value }}</p>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>

        <BCard no-body>
          <BCardHeader>
            <h5>Order : #ACD1100897</h5>
          </BCardHeader>
          <BCardBody class="p-0">
            <div class="orders-details-datatable app-scroll table-responsive">
              <BTable
                  class="table-bottom-border table-striped text-center align-middle mb-0"
                  :items="orders"
                  :fields="[
                  { key: 'product', label: 'Product Details', class: 'text-start' },
                  { key: 'status', label: 'Status' },
                  { key: 'price', label: 'Price' },
                  { key: 'orderDate', label: 'Order Date' },
                  { key: 'quantity', label: 'Quantity' },
                  { key: 'rating', label: 'Rating' },
                  { key: 'actions', label: 'Action' }
                ]"
              >
                <template #cell(product)="data">
                  <div class="d-flex align-items-center gap-2">
                    <BImg
                        :src="data.item.productImage"
                        alt="product-img"
                        class="b-r-10"
                        style="height: 50px; border-radius: 10px"
                    />
                    <div class="text-start">
                      <h6 class="f-s-16 mb-0">
                        {{ data.item.productName }}
                      </h6>
                      <p class="text-muted f-s-13 m-0">
                        Color: <span class="text-secondary">{{ data.item.color }}</span>
                      </p>
                      <p class="text-muted f-s-13 m-0">
                        Size: <span class="text-secondary">{{ data.item.size }}</span>
                      </p>
                    </div>
                  </div>
                </template>

                <template #cell(status)="data">
                  <BBadge :variant="getBadgeVariant(data.item.status)">
                    {{ data.item.status }}
                  </BBadge>
                </template>

                <template #cell(price)="data">
                  <span class="f-w-500 text-success">{{ data.item.price }}</span>
                </template>

                <template #cell(orderDate)="data">
                  <span class="f-w-500 f-s-14">{{ data.item.orderDate }}</span>
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
                  <BButton
                      variant="outline-success"
                      class="icon-btn b-r-4 me-2 rounded"
                  >
                    <IconEdit size="18" />
                  </BButton>
                  <BButton
                      variant="outline-danger"
                      class="icon-btn b-r-4 rounded"
                      @click="handleDelete(data.item.id)"
                  >
                    <IconTrash size="18" />
                  </BButton>
                </template>
              </BTable>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="3">
        <BCard class="equal-card" no-body>
          <BCardHeader>
            <h5>Order Status</h5>
          </BCardHeader>
          <BCardBody>
            <ul class="app-timeline-box">
              <li
                  v-for="(item, index) in orderTimelineData"
                  :key="`timeline-${index}`"
                  class="timeline-section"
              >
                <div class="timeline-icon">
                  <span :class="`${item.iconClass} h-35 w-35 d-flex-center b-r-50`">
                    <component :is="item.icon" size="18" />
                  </span>
                </div>
                <div :class="`timeline-content ${item.contentClass}`">
                  <div class="d-flex justify-content-between align-items-center timeline-flex">
                    <h6 :class="`mt-2 ${item.titleClass}`">
                      {{ item.title }}
                    </h6>
                    <BBadge
                        v-if="item.timeBadge"
                        :variant="item.timeClass.replace('text-bg-', '')"
                        class="ms-2"
                    >
                      {{ item.time }}
                    </BBadge>
                    <span v-else :class="item.timeClass">{{ item.time }}</span>
                  </div>
                  <p v-if="item.description" class="mt-2 text-dark">
                    {{ item.description }}
                  </p>
                  <p class="text-secondary">{{ item.date }}</p>
                  <div v-if="item.badges.length > 0" class="mt-2">
                    <BBadge
                        v-for="(badge, badgeIndex) in item.badges"
                        :key="`badge-${index}-${badgeIndex}`"
                        variant="primary"
                        class="me-2 bg-primary-900"
                    >
                      {{ badge }}
                    </BBadge>
                  </div>
                </div>
              </li>
            </ul>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
    </main>
  </AppLayout>
</template>

