<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardBody,
  BContainer,
  BRow,
  BCol,
  BTable,
  BBadge,
  BButton,
  BImg,
  BTabs,
  BTab,
  BFormCheckbox
} from "bootstrap-vue-next";
import { PhStack } from "@phosphor-icons/vue";
import {
  IconArrowBack,
  IconEdit,
  IconEye,
  IconSortDescending2,
  IconSquareRoundedX,
  IconTrash,
  IconTruckDelivery,
  IconTruckLoading
} from "@tabler/icons-vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {orders} from "@/data/app/EshopPage/Order/OrderPage.js";
import AppLayout from "@/views/AppLayout.vue";

const activeTab = ref("all-orders");



// Filter orders based on status
const allOrders = orders;
const deliveredOrders = orders.filter(order => order.status === "DELIVERED");
const pickupOrders = orders.filter(order => order.status === "PICKUPS");
const returnOrders = orders.filter(order => order.status === "RETURNS");
const cancelledOrders = orders.filter(order => order.status === "CANCELLED");

const getBadgeVariant = (status) => {
  switch (status) {
    case "CANCELLED":
      return "danger";
    case "DELIVERED":
      return "success";
    case "INPROGRESS":
      return "warning";
    case "PICKUPS":
      return "info";
    case "RETURNS":
      return "secondary";
    default:
      return "light";
  }
};

const breadcrumbItems = {
  title: "Orders",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "E-shop" },
    { label: "Orders", active: true },
  ],
};
</script>

<template>
  <AppLayout>
    <main>
  <BContainer fluid>
    <Breadcrumb :breadcrumb="breadcrumbItems" />

    <BRow>
      <BCol xs="12">
        <BCard no-body>
          <BCardBody class="p-0">
            <BTabs v-model="activeTab" class="order-tabs-container app-tabs-primary order-tabs">
              <BTab title="All Orders" title-item-class="order-tab-item" active >
                <template #title>
                  <div class="d-flex align-items-center gap-1">
                    <IconSortDescending2 size="18" /> All Orders
                  </div>
                </template>
                <div class="order-list-table table-responsive app-scroll">
                  <BTable
                      hover
                      :items="allOrders"
                      :fields="[
                      { key: 'checkbox', label: '' },
                      { key: 'id', label: 'Order Id' },
                      { key: 'customer', label: 'Customer' },
                      { key: 'product', label: 'Product' },
                      { key: 'status', label: 'Status' },
                      { key: 'orderDate', label: 'Order Date' },
                      { key: 'paymentMethod', label: 'Payment Method' },
                      { key: 'amount', label: 'Amount' },
                      { key: 'actions', label: 'Actions' }
                    ]"
                      class="table-bottom-border table-striped align-middle mb-0"
                  >
                    <template #head(checkbox)>
                      <BFormCheckbox />
                    </template>

                    <template #cell(checkbox)>
                      <BFormCheckbox />
                    </template>

                    <template #cell(customer)="data">
                      <div class="d-flex align-items-center gap-2">
                        <div class="rounded-circle overflow-hidden" style="width: 25px; height: 25px">
                          <BImg
                              :src="data.item.customer.avatar"
                              :alt="data.item.customer.name"
                              rounded="circle"
                              fluid
                              class="w-100 h-100"
                          />
                        </div>
                        <span>{{ data.item.customer.name }}</span>
                      </div>
                    </template>

                    <template #cell(status)="data">
                    <BBadge :variant="getBadgeVariant(data.item.status)">
  {{ data.item.status }}
</BBadge>
                    </template>

                    <template #cell(actions)>
                      <div class="d-flex gap-2">
                        <BButton
                            variant="outline-primary"
                            size="sm"
                            class="rounded-circle d-flex-center p-0 w-30 h-30"
                            :to="{ path: '/apps/e-shop/orders-details' }"
                        >
                          <IconEye size="14" />
                        </BButton>
                        <BButton
                            variant="outline-success"
                            size="sm"
                            class="rounded-circle p-0 w-30 h-30"
                        >
                          <IconEdit size="14" />
                        </BButton>
                        <BButton
                            variant="outline-danger"
                            size="sm"
                            class="rounded-circle p-0 w-30 h-30"
                        >
                          <IconTrash size="14" />
                        </BButton>
                      </div>
                    </template>
                  </BTable>
                </div>
              </BTab>

              <BTab title="Delivered" title-item-class="order-tab-item">
                <template #title>
                  <div class="d-flex align-items-center gap-1">
                    <IconTruckDelivery size="18" /> Delivered
                  </div>
                </template>
                <div class="order-list-table table-responsive app-scroll">
                  <BTable
                      hover
                      :items="deliveredOrders"
                      :fields="[
                      { key: 'checkbox', label: '' },
                      { key: 'id', label: 'Order Id' },
                      { key: 'customer', label: 'Customer' },
                      { key: 'product', label: 'Product' },
                      { key: 'status', label: 'Status' },
                      { key: 'orderDate', label: 'Order Date' },
                      { key: 'paymentMethod', label: 'Payment Method' },
                      { key: 'amount', label: 'Amount' },
                      { key: 'actions', label: 'Actions' }
                    ]"
                      class="table-bottom-border table-striped align-middle mb-0"
                  >
                    <template #head(checkbox)>
                      <BFormCheckbox />
                    </template>

                    <template #cell(checkbox)>
                      <BFormCheckbox />
                    </template>

                    <template #cell(customer)="data">
                      <div class="d-flex align-items-center gap-2">
                        <div class="rounded-circle overflow-hidden" style="width: 25px; height: 25px">
                          <BImg
                              :src="data.item.customer.avatar"
                              :alt="data.item.customer.name"
                              rounded="circle"
                              fluid
                              class="w-100 h-100"
                          />
                        </div>
                        <span>{{ data.item.customer.name }}</span>
                      </div>
                    </template>

                    <template #cell(status)="data">
                    <BBadge :variant="getBadgeVariant(data.item.status)">
  {{ data.item.status }}
</BBadge>
                    </template>

                    <template #cell(actions)>
                      <div class="d-flex gap-2">
                        <BButton
                            variant="outline-primary"
                            size="sm"
                            class="rounded-circle d-flex-center p-0 w-30 h-30"
                            :to="{ path: '/apps/e-shop/orders-details' }"
                        >
                          <IconEye size="14" />
                        </BButton>
                        <BButton
                            variant="outline-success"
                            size="sm"
                            class="rounded-circle p-0 w-30 h-30"
                        >
                          <IconEdit size="14" />
                        </BButton>
                        <BButton
                            variant="outline-danger"
                            size="sm"
                            class="rounded-circle p-0 w-30 h-30"
                        >
                          <IconTrash size="14" />
                        </BButton>
                      </div>
                    </template>
                  </BTable>
                </div>
              </BTab>

              <BTab title="Pickups" title-item-class="order-tab-item">
                <template #title>
                  <div class="d-flex align-items-center gap-1">
                    <IconTruckLoading size="18" /> Pickups
                  </div>
                </template>
                <div class="order-list-table table-responsive app-scroll">
                  <BTable
                      hover
                      :items="pickupOrders"
                      :fields="[
                      { key: 'checkbox', label: '' },
                      { key: 'id', label: 'Order Id' },
                      { key: 'customer', label: 'Customer' },
                      { key: 'product', label: 'Product' },
                      { key: 'status', label: 'Status' },
                      { key: 'orderDate', label: 'Order Date' },
                      { key: 'paymentMethod', label: 'Payment Method' },
                      { key: 'amount', label: 'Amount' },
                      { key: 'actions', label: 'Actions' }
                    ]"
                      class="table-bottom-border table-striped align-middle mb-0"
                  >
                    <template #head(checkbox)>
                      <BFormCheckbox />
                    </template>

                    <template #cell(checkbox)>
                      <BFormCheckbox />
                    </template>

                    <template #cell(customer)="data">
                      <div class="d-flex align-items-center gap-2">
                        <div class="rounded-circle overflow-hidden" style="width: 25px; height: 25px">
                          <BImg
                              :src="data.item.customer.avatar"
                              :alt="data.item.customer.name"
                              rounded="circle"
                              fluid
                              class="w-100 h-100"
                          />
                        </div>
                        <span>{{ data.item.customer.name }}</span>
                      </div>
                    </template>

                    <template #cell(status)="data">
                    <BBadge :variant="getBadgeVariant(data.item.status)">
  {{ data.item.status }}
</BBadge>
                    </template>

                    <template #cell(actions)>
                      <div class="d-flex gap-2">
                        <BButton
                            variant="outline-primary"
                            size="sm"
                            class="rounded-circle d-flex-center p-0 w-30 h-30"
                            :to="{ path: '/apps/e-shop/orders-details' }"
                        >
                          <IconEye size="14" />
                        </BButton>
                        <BButton
                            variant="outline-success"
                            size="sm"
                            class="rounded-circle p-0 w-30 h-30"
                        >
                          <IconEdit size="14" />
                        </BButton>
                        <BButton
                            variant="outline-danger"
                            size="sm"
                            class="rounded-circle p-0 w-30 h-30"
                        >
                          <IconTrash size="14" />
                        </BButton>
                      </div>
                    </template>
                  </BTable>
                </div>
              </BTab>

              <BTab title="Returns" title-item-class="order-tab-item">
                <template #title>
                  <div class="d-flex align-items-center gap-1">
                    <IconArrowBack size="18" /> Returns
                  </div>
                </template>
                <div class="order-list-table table-responsive app-scroll">
                  <BTable
                      hover
                      :items="returnOrders"
                      :fields="[
                      { key: 'checkbox', label: '' },
                      { key: 'id', label: 'Order Id' },
                      { key: 'customer', label: 'Customer' },
                      { key: 'product', label: 'Product' },
                      { key: 'status', label: 'Status' },
                      { key: 'orderDate', label: 'Order Date' },
                      { key: 'paymentMethod', label: 'Payment Method' },
                      { key: 'amount', label: 'Amount' },
                      { key: 'actions', label: 'Actions' }
                    ]"
                      class="table-bottom-border table-striped align-middle mb-0"
                  >
                    <template #head(checkbox)>
                      <BFormCheckbox />
                    </template>

                    <template #cell(checkbox)>
                      <BFormCheckbox />
                    </template>

                    <template #cell(customer)="data">
                      <div class="d-flex align-items-center gap-2">
                        <div class="rounded-circle overflow-hidden" style="width: 25px; height: 25px">
                          <BImg
                              :src="data.item.customer.avatar"
                              :alt="data.item.customer.name"
                              rounded="circle"
                              fluid
                              class="w-100 h-100"
                          />
                        </div>
                        <span>{{ data.item.customer.name }}</span>
                      </div>
                    </template>

                    <template #cell(status)="data">
                    <BBadge :variant="getBadgeVariant(data.item.status)">
  {{ data.item.status }}
</BBadge>
                    </template>

                    <template #cell(actions)>
                      <div class="d-flex gap-2">
                        <BButton
                            variant="outline-primary"
                            size="sm"
                            class="rounded-circle d-flex-center p-0 w-30 h-30"
                            :to="{ path: '/apps/e-shop/orders-details' }"
                        >
                          <IconEye size="14" />
                        </BButton>
                        <BButton
                            variant="outline-success"
                            size="sm"
                            class="rounded-circle p-0 w-30 h-30"
                        >
                          <IconEdit size="14" />
                        </BButton>
                        <BButton
                            variant="outline-danger"
                            size="sm"
                            class="rounded-circle p-0 w-30 h-30"
                        >
                          <IconTrash size="14" />
                        </BButton>
                      </div>
                    </template>
                  </BTable>
                </div>
              </BTab>

              <BTab title="Cancelled" title-item-class="order-tab-item">
                <template #title>
                  <div class="d-flex align-items-center gap-1">
                    <IconSquareRoundedX size="18" /> Cancelled
                  </div>
                </template>
                <div class="order-list-table table-responsive app-scroll">
                  <BTable
                      hover
                      :items="cancelledOrders"
                      :fields="[
                      { key: 'checkbox', label: '' },
                      { key: 'id', label: 'Order Id' },
                      { key: 'customer', label: 'Customer' },
                      { key: 'product', label: 'Product' },
                      { key: 'status', label: 'Status' },
                      { key: 'orderDate', label: 'Order Date' },
                      { key: 'paymentMethod', label: 'Payment Method' },
                      { key: 'amount', label: 'Amount' },
                      { key: 'actions', label: 'Actions' }
                    ]"
                      class="table-bottom-border table-striped align-middle mb-0"
                  >
                    <template #head(checkbox)>
                      <BFormCheckbox />
                    </template>

                    <template #cell(checkbox)>
                      <BFormCheckbox />
                    </template>

                    <template #cell(customer)="data">
                      <div class="d-flex align-items-center gap-2">
                        <div class="rounded-circle overflow-hidden" style="width: 25px; height: 25px">
                          <BImg
                              :src="data.item.customer.avatar"
                              :alt="data.item.customer.name"
                              rounded="circle"
                              fluid
                              class="w-100 h-100"
                          />
                        </div>
                        <span>{{ data.item.customer.name }}</span>
                      </div>
                    </template>

                    <template #cell(status)="data">
                    <BBadge :variant="getBadgeVariant(data.item.status)">
  {{ data.item.status }}
</BBadge>
                    </template>

                    <template #cell(actions)>
                      <div class="d-flex gap-2">
                        <BButton
                            variant="outline-primary"
                            size="sm"
                            class="rounded-circle d-flex-center p-0 w-30 h-30"
                            :to="{ path: '/apps/e-shop/orders-details' }"
                        >
                          <IconEye size="14" />
                        </BButton>
                        <BButton
                            variant="outline-success"
                            size="sm"
                            class="rounded-circle p-0 w-30 h-30"
                        >
                          <IconEdit size="14" />
                        </BButton>
                        <BButton
                            variant="outline-danger"
                            size="sm"
                            class="rounded-circle p-0 w-30 h-30"
                        >
                          <IconTrash size="14" />
                        </BButton>
                      </div>
                    </template>
                  </BTable>
                </div>
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
    </main>
  </AppLayout>
</template>

