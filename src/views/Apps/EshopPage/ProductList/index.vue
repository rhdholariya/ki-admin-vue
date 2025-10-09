<script setup>
import { ref, computed, h } from "vue";
import CustomDataTable from "@/components/DataTable/CustomDataTable.vue";
import { productlist } from "@/data/app/EshopPage/ProductList/Productlist.js";
import { PhStack } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { IconEdit, IconTrash } from "@tabler/icons-vue";
import AppLayout from "@/views/AppLayout.vue";

// reactive data
const products = ref([...productlist]);

// delete handler
const handleDelete = (id) => {
  products.value = products.value.filter((p) => p.id !== id);
};

// category color map
const categoryColorMap = {
  Purse: "info",
  Watch: "success",
  Bag: "warning",
  Clothing: "danger",
};

// columns for CustomDataTable
const columns = [
  {
    key: "product",
    header: "Product",
    render: (_data, product) =>
        `
      <div class="d-flex align-items-center">
        <div class="me-2 w-35 h-35">
          <img src="${product.image}" alt="${product.name}" class="img-fluid rounded object-fit-cover w-100 h-100"/>
        </div>
        <span class="fw-medium">${product.name}</span>
      </div>
    `,
  },
  {
    key: "price",
    header: "Price",
    render: (_data, product) =>
        `<span class='text-success fw-semibold'>${product.price}</span>`,
  },
  { key: "stock", header: "Stock" },
  {
    key: "category",
    header: "Category",
    render: (_data, product) =>
        `<span class="badge bg-${
            categoryColorMap[product.category] || "secondary"
        }">${product.category}</span>`,
  },
  { key: "seller", header: "Seller" },
  {
    key: "published",
    header: "Published",
    className: "fw-semibold",
  },
  {
    key: "action",
    header: "Action",
    // We’ll return a VNode via `h()` instead of HTML string
    render: (_data, product) =>
        h("div", {class: "d-flex gap-3"}, [
          h(
              "button",
              {
                class:
                    "btn btn-outline-success btn-sm rounded-circle d-flex-center p-0 w-30 h-30",
              },
              [h(IconEdit)]
          ),
          h(
              "button",
              {
                class:
                    "btn btn-outline-danger btn-sm rounded-circle d-flex-center p-0 w-30 h-30",
                onClick: () => handleDelete(product.id),
              },
              [h(IconTrash)]
          ),
        ]),
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

const breadcrumbItems = computed(() => ({
  title: "Product Details",
  items: [
    {label: "Apps", icon: PhStack},
    {label: "E-shop"},
    {label: "Product Details", active: true},
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
  <BContainer fluid>
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
    />
  </BContainer>
    </main>
  </AppLayout>
</template>
