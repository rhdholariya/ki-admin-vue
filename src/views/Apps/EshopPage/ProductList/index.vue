<script setup>
import {ref, computed, h} from "vue";
import CustomDataTable from "@/components/Table/DataTable/CustomDataTable.vue";
import {productlist} from "@/data/app/EshopPage/ProductList/Productlist.js";
import {PhStack} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {IconEdit, IconTrash} from "@tabler/icons-vue";
import { BContainer} from "bootstrap-vue-next";

const products = ref([...productlist]);
const selectedItems = ref([]);


const handleDelete = (id) => {
  products.value = products.value.filter((p) => p.id !== id);
  selectedItems.value = selectedItems.value.filter((itemId) => itemId !== id);
};


const toggleItemSelection = (id) => {
  if (selectedItems.value.includes(id)) {
    selectedItems.value = selectedItems.value.filter((itemId) => itemId !== id);
  } else {
    selectedItems.value = [...selectedItems.value, id];
  }
};


const toggleSelectAll = (checked) => {
  if (checked) {
    selectedItems.value = products.value.map(p => p.id);
  } else {
    selectedItems.value = [];
  }
};


const categoryColorMap = {
  Purse: "info",
  Watch: "success",
  Bag: "warning",
  Clothing: "danger",
};


const columns = [
  {
    key: "checkbox",
    header: "Select",
    render: (value, product) => {
      return h("input", {
        type: "checkbox",
        class: "form-check-input mt-0",
        checked: selectedItems.value.includes(product.id),
        onChange: () => toggleItemSelection(product.id)
      });
    },
    className: "text-center no-export"
  },
  {
    key: "product",
    header: "Product",
    render: (value, product) => {
      return h("div", {class: "d-flex align-items-center"}, [
        h("div", {class: "me-2 w-35 h-35"}, [
          h("img", {
            src: product.image,
            alt: product.name,
            class: "img-fluid rounded object-fit-cover w-100 h-100"
          })
        ]),
        h("span", {class: "fw-medium"}, product.name)
      ]);
    },
  },
  {
    key: "price",
    header: "Price",
    render: (value, product) => {
      return h("span", {class: 'text-success fw-semibold'}, product.price);
    },
  },
  {key: "stock", header: "Stock"},
  {
    key: "category",
    header: "Category",
    render: (value, product) => {
      return h("span", {
        class: `badge bg-${categoryColorMap[product.category] || "secondary"}`
      }, product.category);
    },
  },
  {key: "seller", header: "Seller"},
  {key: "published", header: "Published", className: "fw-semibold"},
  {
    key: "action",
    header: "Action",
    render: (value, product) => {
      return h("div", {class: "d-flex gap-3"}, [
        h(
            "button",
            {
              class: "btn btn-outline-success btn-sm rounded-circle d-flex-center p-0 w-30 h-30",
              onClick: () => console.log('Edit product:', product.id)
            },
            [h(IconEdit, {size: 16})]
        ),
        h(
            "button",
            {
              class: "btn btn-outline-danger btn-sm rounded-circle d-flex-center p-0 w-30 h-30",
              onClick: () => handleDelete(product.id)
            },
            [h(IconTrash, {size: 16})]
        ),
      ]);
    },
  },
];

const footerColumns = [
  {key: "product", header: "Product"},
  {key: "price", header: "Price"},
  {key: "stock", header: "Stock"},
  {key: "category", header: "Category"},
  {key: "seller", header: "Seller"},
  {key: "published", header: "Published"},
  {key: "action", header: "Action"},
];

// 🟢 Breadcrumb items
const breadcrumbItems = computed(() => ({
  title: "Product List",
  items: [
    {label: "Apps", icon: PhStack},
    {label: "E-shop"},
    {label: "Product List", active: true},
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <CustomDataTable
            :show-description="false"
            title="Product List"
            :columns="columns"
            :data="products"
            row-key="id"
            :show-actions="false"
            :showFooter="true"
            :footerColumns="footerColumns"
            card-class-name=""
            table-class-name="w-100 align-middle mb-0"
            :select-all="selectedItems.length === products.length && products.length > 0"
            :indeterminate="selectedItems.length > 0 && selectedItems.length < products.length"
            @select-all-change="toggleSelectAll"
        />
      </b-container>
    </main>
  </AppLayout>
</template>

