<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardBody,
  BRow,
  BCol,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormRadio,
  BButton,
  BModal,
  BAlert,
} from "bootstrap-vue-next";
import { IconInfoCircle, IconPlus } from "@tabler/icons-vue";

const modalOpen = ref(false);
const selectedAddress = ref("home");
const selectedDelivery = ref("economy");
const showAlert = ref(true);

const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
};
</script>

<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h5 class="mb-3">Your Address</h5>
      </b-col>

      <b-col md="6" xl="4">
        <b-card class="shadow-none" no-body>
          <b-card-body>
            <b-form-group class="mb-2">
              <b-form-radio
                  name="address"
                  id="homeAddress"
                  v-model="selectedAddress"
                  value="home"
              >
                Home Address
              </b-form-radio>
            </b-form-group>
            <p class="text-muted mb-1">260 Zulma Stravenue, Wisozkton, KY 44193-0738</p>
            <p class="text-muted mb-1">collins@stroman.net</p>
            <p class="mb-0">+1 828-726-3669</p>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col md="6" xl="4">
        <b-card class="shadow-none" no-body>
          <b-card-body>
            <b-form-group class="mb-2">
              <b-form-radio
                  name="address"
                  id="officeAddress"
                  v-model="selectedAddress"
                  value="office"
              >
                Office Address
              </b-form-radio>
            </b-form-group>
            <p class="text-muted mb-1">90897 Franecki Haven, West Maximo, KY 40770-5993</p>
            <p class="text-muted mb-1">bjast@hotmail.com</p>
            <p class="mb-0">+1 863-422-2979</p>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col md="6" xl="4">
        <b-card class="shadow-none" no-body>
          <b-card-body class="text-center">
            <b-button variant="link" class="p-0" @click="toggleModal">
              <IconPlus size="18" class="me-1" />
              Add A New Address
            </b-button>
          </b-card-body>
        </b-card>
      </b-col>

      <b-modal v-model="modalOpen" title="Add New Address">
        <b-form class="app-form">
          <b-row>
            <b-col cols="12">
              <b-form-group label="Address" class="mb-2">
                <b-form-input placeholder="Enter address" />
              </b-form-group>
            </b-col>

            <b-col cols="12">
              <b-form-group label="Address 2"  class="mb-2">
                <b-form-input placeholder="Additional info" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="City"  class="mb-2">
                <b-form-input placeholder="Enter city" />
              </b-form-group>
            </b-col>

            <b-col md="4">
              <b-form-group label="State"  class="mb-2">
                <b-form-select>
                  <option>Choose...</option>
                  <option>NY</option>
                  <option>CA</option>
                </b-form-select>
              </b-form-group>
            </b-col>

            <b-col md="2">
              <b-form-group label="Zip">
                <b-form-input placeholder="Zip code" />
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>

        <template #footer>
          <b-button variant="secondary" @click="toggleModal">Close</b-button>
          <b-button variant="primary">Add</b-button>
        </template>
      </b-modal>

      <b-col cols="12">
        <h5 class="mb-3">Delivery Method</h5>
      </b-col>

      <b-col md="6">
        <b-card class="shadow-none" no-body>
          <b-card-body>
            <b-form-radio
                name="delivery"
                id="economyShipping"
                v-model="selectedDelivery"
                value="economy"
            >
              <span class="d-block">Economy Shipping - FREE</span>
              <small class="text-muted">5 to 10 business days</small>
            </b-form-radio>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card class="shadow-none" no-body>
          <b-card-body>
            <b-form-radio
                name="delivery"
                id="priorityShipping"
                v-model="selectedDelivery"
                value="priority"
            >
              <span class="d-block">Priority Overnight - $18.50</span>
              <small class="text-muted">Based on chosen delivery date</small>
            </b-form-radio>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col cols="12" v-if="showAlert">
        <b-alert
            variant="info"
            dismissible
            @dismissed="showAlert = false"
            show
        >
          <p class="d-flex align-items-center mb-2">
            <IconInfoCircle size="18" class="me-2" />
            Expected delivery <strong>date</strong> is not guaranteed.
            If you're ordering for an event, allow 1 extra day.
          </p>
          <div class="text-end">
            <b-button variant="link" class="p-0 me-2" @click="showAlert = false">
              Don't allow
            </b-button>
            <b-button variant="link" class="p-0">Allow</b-button>
          </div>
        </b-alert>
      </b-col>
    </b-row>
  </div>
</template>
