<script setup>
import {ref} from "vue";
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
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BInputGroup,
  BInputGroupText,
  BFormCheckbox,
} from "bootstrap-vue-next";
import {PhStack} from "@phosphor-icons/vue";
import {IconEdit, IconEye, IconTrash} from "@tabler/icons-vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {orders} from "@/data/app/EshopPage/Order/OrderPage.js";
import AppLayout from "@/views/AppLayout.vue";

// Reactive state
const showModal = ref(false);
const editOrder = ref(null);
const ordersList = ref([...orders]);

// Open modal for editing
const handleShow = (order) => {
  editOrder.value = {...order}; // shallow copy
  showModal.value = true;
};

// Close modal
const handleClose = () => {
  showModal.value = false;
  editOrder.value = null;
};

// Save edited order
const handleSave = () => {
  if (!editOrder.value) return;

  ordersList.value = ordersList.value.map((order) =>
      order.idNum === editOrder.value.idNum ? {...editOrder.value} : order
  );

  handleClose();
};

// Delete order
const handleDelete = (orderId) => {
  ordersList.value = ordersList.value.filter((order) => order.idNum !== orderId);
};

// Badge color based on status
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

// Breadcrumb data
const breadcrumbItems = {
  title: "Orders List",
  items: [
    {label: "Apps", icon: PhStack},
    {label: "E-shop"},
    {label: "Orders List", active: true},
  ],
};
</script>

<template>
  <app-layout>
    <main>
      <b-container fluid>
        <breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-row>
          <b-col>
            <b-card no-body>
              <b-card-body class="p-0">
                <div class="order-list-datatable app-scroll table-responsive">
                  <b-table
                      hover
                      :items="ordersList"
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
                      class="table-bottom-border table-striped table-hover align-middle mb-0"
                  >
                    <!-- Select All -->
                    <template #head(checkbox)>
                      <b-form-checkbox/>
                    </template>

                    <template #cell(checkbox)>
                      <b-form-checkbox/>
                    </template>

                    <!-- Customer -->
                    <template #cell(customer)="data">
                      <div class="d-flex align-items-center gap-2">
                        <div class="rounded-circle overflow-hidden" style="width: 30px; height: 30px;">
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

                    <!-- Status badge -->
                    <template #cell(status)="data">
                      <b-badge :variant="getBadgeVariant(data.item.status)">
                        {{ data.item.status }}
                      </b-badge>
                    </template>

                    <!-- Actions -->
                    <template #cell(actions)="data">
                      <div class="d-flex gap-2">
                        <b-button
                            variant="outline-primary"
                            size="sm"
                            class="p-0 w-30 h-30 rounded-circle d-flex align-items-center justify-content-center"
                            :to="{ path: '/apps/e-shop/orders-details' }"
                        >
                          <icon-eye size="16"/>
                        </b-button>
                        <b-button
                            variant="outline-success"
                            size="sm"
                            class="p-0 w-30 h-30 rounded-circle d-flex align-items-center justify-content-center"
                            @click="handleShow(data.item)"
                        >
                          <icon-edit size="16"/>
                        </b-button>
                        <b-button
                            variant="outline-danger"
                            size="sm"
                            class="p-0 w-30 h-30 rounded-circle d-flex align-items-center justify-content-center"
                            @click="handleDelete(data.item.idNum)"
                        >
                          <icon-trash size="16"/>
                        </b-button>
                      </div>
                    </template>
                  </b-table>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <!-- Edit Order Modal -->
        <b-modal v-model="showModal" hide-footer backdrop="static" title="Edit Order">
          <b-form v-if="editOrder">
            <b-form-group label="Customer" class="mb-3">
              <b-form-input v-model="editOrder.customer.name" placeholder="Customer Name"/>
            </b-form-group>

            <b-form-group label="Product" class="mb-3">
              <b-form-input v-model="editOrder.product" placeholder="Product Name"/>
            </b-form-group>

            <b-form-group label="Order Date" class="mb-3">
              <b-form-input type="datetime-local" v-model="editOrder.orderDate"/>
            </b-form-group>

            <b-form-group label="Payment Method" class="mb-3">
              <b-form-select v-model="editOrder.paymentMethod">
                <option value="">Select Payment Method</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Visa">Visa</option>
                <option value="Paypal">Paypal</option>
              </b-form-select>
            </b-form-group>

            <b-form-group label="Amount" class="mb-3">
              <b-input-group>
                <b-input-group-text>$</b-input-group-text>
                <b-form-input v-model="editOrder.amount" placeholder="Enter Amount"/>
              </b-input-group>
            </b-form-group>
          </b-form>

          <template #footer>
            <b-button variant="secondary" @click="handleClose">Close</b-button>
            <b-button variant="primary" @click="handleSave">Save</b-button>
          </template>
        </b-modal>
      </b-container>
    </main>
  </app-layout>
</template>
