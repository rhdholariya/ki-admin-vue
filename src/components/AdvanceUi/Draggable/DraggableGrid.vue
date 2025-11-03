<script setup>
import { ref, onMounted } from "vue";
import Sortable from "sortablejs";
import { BCol, BCard, BCardBody, BCardHeader } from "bootstrap-vue-next";

// Template ref for Sortable container
const gridListRef = ref(null);

// Reactive data
const gridItems = ref(Array.from({ length: 18 }, (_, i) => `Grid-${i + 1}`));

onMounted(() => {
  if (gridListRef.value) {
    new Sortable(gridListRef.value, {
      animation: 150,
      swap: true,
      swapClass: "highlight",
      onEnd: (evt) => {
        // Optional: reorder items reactively
        const movedItem = gridItems.value.splice(evt.oldIndex, 1)[0];
        gridItems.value.splice(evt.newIndex, 0, movedItem);
      },
    });
  }
});
</script>

<template>
  <b-col xxl="6">
    <b-card class="equal-card" no-body>
      <b-card-header>
        <h5>Draggable Grid</h5>
      </b-card-header>
      <b-card-body>
        <ul class="grid-box-list" ref="gridListRef">
          <li v-for="(item, index) in gridItems" :key="index">
            <div class="grid-box">
              <h6>{{ item }}</h6>
            </div>
          </li>
        </ul>
      </b-card-body>
    </b-card>
  </b-col>
</template>
