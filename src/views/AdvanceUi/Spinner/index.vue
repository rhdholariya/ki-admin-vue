<script setup>
import {ref} from 'vue';
import AppLayout from "@/views/AppLayout.vue";
import {PhBriefcase} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {BContainer, BRow, BCol, BCard, BCardBody} from 'bootstrap-vue-next';


const totalLoaders = ref(40);
// Breadcrumb data
const breadcrumbItems = {
  title: "Spinner",
  items: [
    {label: " Advance UI ", icon: PhBriefcase},
    {label: "Spinner", active: true},
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
          <b-col xs="12">
            <b-card no-body>
              <b-card-body>
                <div class="loader-container">
                  <div
                      class="loader-main"
                      v-for="i in totalLoaders"
                      :key="i"
                  >
                    <div class="loader_box">
                      <div :class="`loader_${i}`"></div>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>