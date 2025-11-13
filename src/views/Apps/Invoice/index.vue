<script setup>
import { ref, reactive, computed, nextTick } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BTable,
  BButton,
} from "bootstrap-vue-next";
import { IconPrinter, IconSend, IconArrowBarToDown } from "@tabler/icons-vue";
import { PhStack } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

const breadcrumbItems = computed(() => ({
  title: "Invoice",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Invoice", active: true },
  ],
}));


const invoiceItems = ref([
  {
    no: 1,
    item: "H & M Round Neck",
    desc: "Men's Graphic Tees & Printed T-shirts",
    qty: 2,
    cost: 400,
    total: 800,
  },
  {
    no: 2,
    item: "Mast & Harbour",
    desc: "Men Full Sleeve Solid Hooded Sweatshirt",
    qty: 1,
    cost: 600,
    total: 600,
  },
  {
    no: 3,
    item: "Adidas",
    desc: "Jauntza M Running Shoes For Men (Blue)",
    qty: 5,
    cost: 500,
    total: 2500,
  },
  {
    no: 4,
    item: "Stylist Jackets",
    desc: "Sky modern jacket for kid",
    qty: 1,
    cost: 200,
    total: 200,
  },
]);


const totals = reactive({
  subTotal: 4100,
  tax: 100,
  shipping: 500,
  total: 4700,
});


const tableFields = [
  {key: "no", label: "No"},
  {key: "item", label: "Item"},
  {key: "desc", label: "Description"},
  {key: "qty", label: "Quantity"},
  {key: "cost", label: "Unit Cost"},
  {key: "total", label: "Total"},
];


const handlePrint = async () => {
  await nextTick();
  window.print();
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <div class="container-lg">
          <b-row>
            <b-col cols="12">
              <b-card>
                <b-card-body>
                  <b-row class="align-items-center mb-4">
                    <b-col md="6">
                      <img
                          src="/images/logo/1.png"
                          class="w-200 mb-2"
                          alt="logo"
                      />
                      <address>
                        35 O'Connor, Ottawa Ontario <br/>
                        K1P 5M4 ,Canada <br/>
                        theme@gmail.com
                      </address>
                      (613) 233-1222
                    </b-col>
                    <b-col md="6" class="text-end">
                      <h3 class="text-primary">INVOICE</h3>
                      <p>Invoice <strong>#800123</strong></p>
                      <p>Invoice Date <strong>Apr 18, 2024</strong></p>
                      <p>Invoice Due <strong>July 18, 2024</strong></p>
                    </b-col>
                  </b-row>

                  <b-row class="mb-4">
                    <b-col md="4">
                      <h6 class="fw-semibold">Bill From</h6>
                      <p>Mark McKenzie</p>
                      <address>
                        35 O'Connor, Ottawa Ontario <br/>
                        K1P 5M4 ,Canada <br/>
                        theme@gmail.com
                      </address>
                      (613) 233-1222
                    </b-col>
                    <b-col md="4">
                      <h6 class="fw-semibold">Bill To</h6>
                      <p>Fleta Walsh</p>
                      <address>
                        255 E Flamingo Rd, Las Vegas, <br/>
                        North Carolina, US-89169 <br/>
                        theme@gmail.com
                      </address>
                      (702) 893-8933
                    </b-col>
                    <b-col md="4" class="text-end">
                      <h6 class="fw-semibold">Payment Method</h6>
                      <p>Bank : Bank of Us</p>
                      <p>Card Holder : Fleta Walsh</p>
                      <p>Card Number : xxx xxxx xxxx 8652</p>
                      <p>Payment Method: Debit card</p>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <b-table
                          :items="invoiceItems"
                          :fields="tableFields"
                          bordered
                          striped
                          responsive
                          class="table-lg table-bottom-border invoice-table w-100"
                      >
                        <template #cell(item)="data">
                          <span class="fw-semibold">{{ data.value }}</span>
                        </template>
                        <template #cell(desc)="data">
                          <span class="text-secondary">{{ data.value }}</span>
                        </template>
                        <template #cell(cost)="data">
                          ${{ data.value }}
                        </template>
                        <template #cell(total)="data">
                          ${{ data.value }}
                        </template>
                      </b-table>
                    </b-col>

                    <b-col md="12" class="mt-3 mt-md-0">
                      <table
                          class="table table-borderless mb-0 d-flex justify-content-end"
                      >
                        <tbody>
                        <tr>
                          <td><h6 class="mb-0">Sub Total</h6></td>
                          <td class="text-end">${{ totals.subTotal }}</td>
                        </tr>
                        <tr>
                          <td><h6 class="mb-0">Tax</h6></td>
                          <td class="text-end">${{ totals.tax }}</td>
                        </tr>
                        <tr>
                          <td><h6 class="mb-0">Shipping Charge</h6></td>
                          <td class="text-end">${{ totals.shipping }}</td>
                        </tr>
                        <tr class="border-top">
                          <th class="border-0">Total</th>
                          <th class="text-end border-0">${{ totals.total }}</th>
                        </tr>
                        </tbody>
                      </table>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>

              <div class="invoice-footer float-end mb-3">
                <b-button variant="primary" class="m-1 rounded" @click="handlePrint">
                  <IconPrinter :size="15"/>
                  Print
                </b-button>
                <b-button variant="secondary" class="m-1 rounded">
                  <IconSend :size="15"/>
                  Send Invoice
                </b-button>
                <b-button variant="success" class="m-1 rounded">
                  <IconArrowBarToDown :size="15"/>
                  Download
                </b-button>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </main>
  </AppLayout>
</template>

