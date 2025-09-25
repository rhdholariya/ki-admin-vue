<script setup>
import { onMounted } from "vue";
import Sortable from "sortablejs";

import { BCol, BCard, BCardBody, BCardHeader } from "bootstrap-vue-next";

const gridItems = Array.from({ length: 18 }, (_, i) => `Grid-${i + 1}`);

onMounted(() => {
  const gridList = document.getElementById("gridList");
  if (gridList) {
    new Sortable(gridList, {
      swap: true,
      swapClass: "highlight",
      animation: 150,
    });
  }
});
</script>

<template>
  <BCol xxl="6">
    <BCard class="equal-card" no-body>
      <BCardHeader>
        <h5>Draggable Grid</h5>
      </BCardHeader>
      <BCardBody>
        <ul class="grid-box-list" id="gridList">
          <li v-for="(item, index) in gridItems" :key="index">
            <div class="grid-box">
              <h6>{{ item }}</h6>
            </div>
          </li>
        </ul>
      </BCardBody>
    </BCard>
  </BCol>
</template>


