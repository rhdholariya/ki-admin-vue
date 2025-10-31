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
  BFormRadio,
  BButton,
  BImg
} from "bootstrap-vue-next";

const selectedPayment = ref("card");

const cardData = ref({
  name: "",
  number: "",
  expiry: "",
  cvc: "",
});

const handleCardInputChange = (field, value) => {
  cardData.value[field] = value;
};

const handleCardSubmit = (e) => {
  e.preventDefault();
  alert("Payment submitted successfully!");
};
</script>

<template>
  <div>
    <b-row>
      <!-- Credit / Debit Card -->
      <b-col md="12">
        <b-card class="shadow-none mb-3">
          <b-card-body class="select-content">
            <b-form-radio
                name="payment"
                id="creditCard"
                v-model="selectedPayment"
                value="card"
                class="mb-3 fs-6 tab-heading"
            >
              Credit / Debit Card
            </b-form-radio>

            <b-form
                v-if="selectedPayment === 'card'"
                class="app-form"
                @submit="handleCardSubmit"
            >
              <b-row>
                <b-col md="12">
                  <b-form-group label="Cardholder Name" class="mb-3">
                    <b-form-input
                        type="text"
                        placeholder="Olaf"
                        :value="cardData.name"
                        @input="(e) => handleCardInputChange('name', e.target.value)"
                        required
                    />
                  </b-form-group>
                </b-col>
                <b-col md="12">
                  <b-form-group label="Card Number" class="mb-3">
                    <b-form-input
                        type="text"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        :value="cardData.number"
                        @input="(e) => handleCardInputChange('number', e.target.value)"
                        required
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Expiration Date" class="mb-3">
                    <b-form-input
                        type="text"
                        placeholder="MM/YY"
                        :value="cardData.expiry"
                        @input="(e) => handleCardInputChange('expiry', e.target.value)"
                        required
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="CVC Code" class="mb-3">
                    <b-form-input
                        type="text"
                        placeholder="xxx"
                        :value="cardData.cvc"
                        @input="(e) => handleCardInputChange('cvc', e.target.value)"
                        required
                    />
                  </b-form-group>
                </b-col>
                <b-col md="12" class="text-end">
                  <b-button type="submit" variant="primary">
                    Submit
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Visa Card -->
      <b-col md="6">
        <b-card class="shadow-none mb-3">
          <b-card-body class="select-content">
            <b-form-radio
                name="payment"
                id="visaCard"
                v-model="selectedPayment"
                value="visa"
            >
              <div class="d-flex align-items-center">
                <b-img
                    src="/images/checkbox-radio/logo1.png"
                    width="30"
                    height="30"
                    alt="Visa"
                    class="me-2"
                />
                <div>
                  <div class="fs-6 tab-heading">Visa Card</div>
                  <p class="text-secondary mb-0">Select Visa</p>
                </div>
              </div>
            </b-form-radio>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- PayPal -->
      <b-col md="6">
        <b-card class="shadow-none mb-3">
          <b-card-body class="select-content">
            <b-form-radio
                name="payment"
                id="paypal"
                v-model="selectedPayment"
                value="paypal"
            >
              <div class="d-flex align-items-center">
                <b-img
                    src="/images/checkbox-radio/logo3.png"
                    width="30"
                    height="30"
                    alt="PayPal"
                    class="me-2"
                />
                <div>
                  <div class="fs-6 tab-heading">Paypal</div>
                  <p class="text-secondary mb-0">Select PayPal</p>
                </div>
              </div>
            </b-form-radio>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- UPI -->
      <b-col md="12">
        <b-card class="shadow-none mb-3">
          <b-card-body class="select-content">
            <b-form-radio
                name="payment"
                id="upi"
                v-model="selectedPayment"
                value="upi"
            >
              <div class="fs-6 tab-heading">Other UPI Apps</div>
              <p class="text-secondary mb-0">
                Select Other UPI Apps for payment
              </p>
            </b-form-radio>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Cash on Delivery -->
      <b-col md="12">
        <b-card class="shadow-none mb-3">
          <b-card-body class="select-content">
            <b-form-radio
                name="payment"
                id="cod"
                v-model="selectedPayment"
                value="cod"
            >
              <div class="fs-6 tab-heading">
                Cash on Delivery/Pay on Delivery
              </div>
              <p class="text-secondary mb-0">
                Cash, UPI and Cards accepted.
              </p>
            </b-form-radio>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

