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

// Selected payment option
const selectedPayment = ref("card");

// Card form data
const cardData = ref({
  name: "",
  number: "",
  expiry: "",
  cvc: "",
});

// Handle form submit
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

            <!-- Card Payment Form -->
            <b-form
                v-if="selectedPayment === 'card'"
                class="app-form"
                @submit="handleCardSubmit"
            >
              <b-row>
                <b-col md="12">
                  <b-form-group label="Cardholder Name" class="mb-3">
                    <b-form-input
                        v-model="cardData.name"
                        type="text"
                        placeholder="Olaf"
                        required
                    />
                  </b-form-group>
                </b-col>

                <b-col md="12">
                  <b-form-group label="Card Number" class="mb-3">
                    <b-form-input
                        v-model="cardData.number"
                        type="text"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        required
                    />
                  </b-form-group>
                </b-col>

                <b-col md="6">
                  <b-form-group label="Expiration Date" class="mb-3">
                    <b-form-input
                        v-model="cardData.expiry"
                        type="text"
                        placeholder="MM/YY"
                        required
                    />
                  </b-form-group>
                </b-col>

                <b-col md="6">
                  <b-form-group label="CVC Code" class="mb-3">
                    <b-form-input
                        v-model="cardData.cvc"
                        type="text"
                        placeholder="xxx"
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

            <div v-if="selectedPayment === 'visa'" class="mt-2 text-muted">
              You selected <strong>Visa</strong> as your payment option.
            </div>
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
                  <div class="fs-6 tab-heading">PayPal</div>
                  <p class="text-secondary mb-0">Select PayPal</p>
                </div>
              </div>
            </b-form-radio>

            <div v-if="selectedPayment === 'paypal'" class="mt-2 text-muted">
              You selected <strong>PayPal</strong> for secure online payment.
            </div>
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

            <div v-if="selectedPayment === 'upi'" class="mt-2 text-muted">
              You selected <strong>UPI</strong> — use any supported app to pay.
            </div>
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
                Cash on Delivery / Pay on Delivery
              </div>
              <p class="text-secondary mb-0">
                Cash, UPI, and Cards accepted.
              </p>
            </b-form-radio>

            <div v-if="selectedPayment === 'cod'" class="mt-2 text-muted">
              You selected <strong>Cash on Delivery</strong> — pay when your
              order arrives.
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
