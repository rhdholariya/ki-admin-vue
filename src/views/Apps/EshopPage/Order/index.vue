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
import { orders } from "@/data/app/EshopPage/Order/OrderPage.js";
import AppLayout from "@/views/AppLayout.vue";

const activeTab = ref("all-orders");

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
    { label: "Orders", active: true }
  ]
};
</script>

<template>
  <app-layout>
    <main>
      <b-container fluid>
        <breadcrumb :breadcrumb="breadcrumbItems" />
        <b-row>
          <b-col xs="12">
            <b-card no-body>
              <b-card-body class="p-0">
                <b-tabs
                    v-model="activeTab"
                    class="order-tabs-container app-tabs-primary order-tabs"
                >
                  <!-- All Orders -->
                  <b-tab title="All Orders" title-item-class="order-tab-item" active>
                    <template #title>
                      <div class="d-flex align-items-center gap-1">
                        <icon-sort-descending2 size="18" /> All Orders
                      </div>
                    </template>

                    <div class="order-list-table table-responsive app-scroll">
                      <b-table
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
                          <b-form-checkbox />
                        </template>

                        <template #cell(checkbox)>
                          <b-form-checkbox />
                        </template>

                        <template #cell(customer)="data">
                          <div class="d-flex align-items-center gap-2">
                            <div
                                class="rounded-circle overflow-hidden"
                                style="width: 25px; height: 25px"
                            >
                              <b-img
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
                          <b-badge :variant="getBadgeVariant(data.item.status)">
                            {{ data.item.status }}
                          </b-badge>
                        </template>

                        <template #cell(actions)>
                          <div class="d-flex gap-2">
                            <b-button
                                variant="outline-primary"
                                size="sm"
                                class="rounded-circle d-flex-center p-0 w-30 h-30"
                                :to="{ path: '/apps/e-shop/orders-details' }"
                            >
                              <icon-eye size="14" />
                            </b-button>
                            <b-button
                                variant="outline-success"
                                size="sm"
                                class="rounded-circle p-0 w-30 h-30"
                            >
                              <icon-edit size="14" />
                            </b-button>
                            <b-button
                                variant="outline-danger"
                                size="sm"
                                class="rounded-circle p-0 w-30 h-30"
                            >
                              <icon-trash size="14" />
                            </b-button>
                          </div>
                        </template>
                      </b-table>
                    </div>
                  </b-tab>

                  <!-- Delivered -->
                  <b-tab title="Delivered" title-item-class="order-tab-item">
                    <template #title>
                      <div class="d-flex align-items-center gap-1">
                        <icon-truck-delivery size="18" /> Delivered
                      </div>
                    </template>

                    <div class="order-list-table table-responsive app-scroll">
                      <b-table
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
                          <b-form-checkbox />
                        </template>

                        <template #cell(checkbox)>
                          <b-form-checkbox />
                        </template>

                        <template #cell(customer)="data">
                          <div class="d-flex align-items-center gap-2">
                            <div
                                class="rounded-circle overflow-hidden"
                                style="width: 25px; height: 25px"
                            >
                              <b-img
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
                          <b-badge :variant="getBadgeVariant(data.item.status)">
                            {{ data.item.status }}
                          </b-badge>
                        </template>

                        <template #cell(actions)>
                          <div class="d-flex gap-2">
                            <b-button
                                variant="outline-primary"
                                size="sm"
                                class="rounded-circle d-flex-center p-0 w-30 h-30"
                                :to="{ path: '/apps/e-shop/orders-details' }"
                            >
                              <icon-eye size="14" />
                            </b-button>
                            <b-button
                                variant="outline-success"
                                size="sm"
                                class="rounded-circle p-0 w-30 h-30"
                            >
                              <icon-edit size="14" />
                            </b-button>
                            <b-button
                                variant="outline-danger"
                                size="sm"
                                class="rounded-circle p-0 w-30 h-30"
                            >
                              <icon-trash size="14" />
                            </b-button>
                          </div>
                        </template>
                      </b-table>
                    </div>
                  </b-tab>

                  <!-- Pickups -->
                  <b-tab title="Pickups" title-item-class="order-tab-item">
                    <template #title>
                      <div class="d-flex align-items-center gap-1">
                        <icon-truck-loading size="18" /> Pickups
                      </div>
                    </template>

                    <div class="order-list-table table-responsive app-scroll">
                      <b-table
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
                          <b-form-checkbox />
                        </template>

                        <template #cell(checkbox)>
                          <b-form-checkbox />
                        </template>

                        <template #cell(customer)="data">
                          <div class="d-flex align-items-center gap-2">
                            <div
                                class="rounded-circle overflow-hidden"
                                style="width: 25px; height: 25px"
                            >
                              <b-img
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
                          <b-badge :variant="getBadgeVariant(data.item.status)">
                            {{ data.item.status }}
                          </b-badge>
                        </template>

                        <template #cell(actions)>
                          <div class="d-flex gap-2">
                            <b-button
                                variant="outline-primary"
                                size="sm"
                                class="rounded-circle d-flex-center p-0 w-30 h-30"
                                :to="{ path: '/apps/e-shop/orders-details' }"
                            >
                              <icon-eye size="14" />
                            </b-button>
                            <b-button
                                variant="outline-success"
                                size="sm"
                                class="rounded-circle p-0 w-30 h-30"
                            >
                              <icon-edit size="14" />
                            </b-button>
                            <b-button
                                variant="outline-danger"
                                size="sm"
                                class="rounded-circle p-0 w-30 h-30"
                            >
                              <icon-trash size="14" />
                            </b-button>
                          </div>
                        </template>
                      </b-table>
                    </div>
                  </b-tab>

                  <!-- Returns -->
                  <b-tab title="Returns" title-item-class="order-tab-item">
                    <template #title>
                      <div class="d-flex align-items-center gap-1">
                        <icon-arrow-back size="18" /> Returns
                      </div>
                    </template>

                    <div class="order-list-table table-responsive app-scroll">
                      <b-table
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
                          <b-form-checkbox />
                        </template>

                        <template #cell(checkbox)>
                          <b-form-checkbox />
                        </template>

                        <template #cell(customer)="data">
                          <div class="d-flex align-items-center gap-2">
                            <div
                                class="rounded-circle overflow-hidden"
                                style="width: 25px; height: 25px"
                            >
                              <b-img
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
                          <b-badge :variant="getBadgeVariant(data.item.status)">
                            {{ data.item.status }}
                          </b-badge>
                        </template>

                        <template #cell(actions)>
                          <div class="d-flex gap-2">
                            <b-button
                                variant="outline-primary"
                                size="sm"
                                class="rounded-circle d-flex-center p-0 w-30 h-30"
                                :to="{ path: '/apps/e-shop/orders-details' }"
                            >
                              <icon-eye size="14" />
                            </b-button>
                            <b-button
                                variant="outline-success"
                                size="sm"
                                class="rounded-circle p-0 w-30 h-30"
                            >
                              <icon-edit size="14" />
                            </b-button>
                            <b-button
                                variant="outline-danger"
                                size="sm"
                                class="rounded-circle p-0 w-30 h-30"
                            >
                              <icon-trash size="14" />
                            </b-button>
                          </div>
                        </template>
                      </b-table>
                    </div>
                  </b-tab>

                  <!-- Cancelled -->
                  <b-tab title="Cancelled" title-item-class="order-tab-item">
                    <template #title>
                      <div class="d-flex align-items-center gap-1">
                        <icon-square-rounded-x size="18" /> Cancelled
                      </div>
                    </template>

                    <div class="order-list-table table-responsive app-scroll">
                      <b-table
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
                          <b-form-checkbox />
                        </template>

                        <template #cell(checkbox)>
                          <b-form-checkbox />
                        </template>

                        <template #cell(customer)="data">
                          <div class="d-flex align-items-center gap-2">
                            <div
                                class="rounded-circle overflow-hidden"
                                style="width: 25px; height: 25px"
                            >
                              <b-img
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
                          <b-badge :variant="getBadgeVariant(data.item.status)">
                            {{ data.item.status }}
                          </b-badge>
                        </template>

                        <template #cell(actions)>
                          <div class="d-flex gap-2">
                            <b-button
                                variant="outline-primary"
                                size="sm"
                                class="rounded-circle d-flex-center p-0 w-30 h-30"
                                :to="{ path: '/apps/e-shop/orders-details' }"
                            >
                              <icon-eye size="14" />
                            </b-button>
                            <b-button
                                variant="outline-success"
                                size="sm"
                                class="rounded-circle p-0 w-30 h-30"
                            >
                              <icon-edit size="14" />
                            </b-button>
                            <b-button
                                variant="outline-danger"
                                size="sm"
                                class="rounded-circle p-0 w-30 h-30"
                            >
                              <icon-trash size="14" />
                            </b-button>
                          </div>
                        </template>
                      </b-table>
                    </div>
                  </b-tab>
                </b-tabs>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </app-layout>
</template>
