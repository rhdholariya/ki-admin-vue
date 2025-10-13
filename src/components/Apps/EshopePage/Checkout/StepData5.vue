<script setup>
import {
  BCard,
  BCardBody,
  BRow,
  BCol,
  BFormRadio,
  BImg
} from "bootstrap-vue-next";

const options = [
  { id: "option1", label: "Call Help Center for any substitutes" },
  { id: "option2", label: "Let us pick your substitutes" },
  { id: "option3", label: "I do not need any substitutes" }
];
</script>

<template>
  <div>
    <b-row>
      <b-col cols="12">
        <div class="text-center">
          <div class="mb-3">
            <b-img src="/images/form/done.gif" alt="form" fluid />
          </div>
          <h5 class="text-success">
            Your Order #7AD6728 Placed, Thank you!
          </h5>
          <p>Confirmation will be sent to Your Email</p>
        </div>
        <hr />
      </b-col>

      <b-col cols="12">
        <b-row class="mb-3">
          <b-col md="12">
            <h6>
              In the unlikely case of items being unavailable, what would you
              prefer?
            </h6>
          </b-col>

          <b-col
              v-for="option in options"
              :key="option.id"
              md="6"
              xl="4"
              class="mt-3"
          >
            <b-card class="shadow-none equal-card">
              <b-card-body class="address-content">
                <b-form-radio
                    name="preference"
                    :id="option.id"
                    :value="option.id"
                    class="text-secondary fs-6 f-w-500"
                >
                  {{ option.label }}
                </b-form-radio>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
