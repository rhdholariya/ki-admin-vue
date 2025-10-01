<template>
  <b-card no-body>
    <b-card-header>
      <h5>Subscription</h5>
    </b-card-header>
    <b-card-body>
      <div class="subscription-plan">
        <b-row>
          <b-col xl="6">
            <div class="plan-choose">
              <h6 class="mb-0">Choose plan</h6>
              <div>
                <b-button variant="primary" class="me-2">
                  Quarterly
                </b-button>
                <b-button variant="secondary">Yearly</b-button>
              </div>
            </div>

            <div
              v-for="plan in plans"
              :key="plan.id"
              class="form-selectgroup mt-4"
            >
              <div class="select-item">
                <b-form-radio
                  :id="plan.id"
                  v-model="selectedPlan"
                  :value="plan.id"
                  name="planoption"
                  class="form-check-primary w-20 h-20"
                />
                <label :for="plan.id" class="form-check-label">
                  <span class="d-flex align-items-center">
                    <span>
                      <span class="fs-6 mb-0">{{ plan.label }}</span>
                      <span class="d-block text-secondary mb-0">
                        {{ plan.subLabel }}
                      </span>
                    </span>
                  </span>
                </label>
                <div class="select-item-2 ms-2">
                  <h6 class="fs-6 mb-0">{{ plan.price }}</h6>
                  <p class="text-secondary mb-0">{{ plan.users }}</p>
                </div>
              </div>

              <ul v-if="plan.features" class="features-list mx-4">
                <li
                  v-for="(feature, i) in plan.features"
                  :key="i"
                  class="f-s-16 text-secondary"
                >
                  <PhCheckCircle
                    weight="bold"
                    :size="16"
                    class="me-2 text-success"
                  />
                  {{ feature }}
                </li>
              </ul>

              <div v-if="plan.features" class="app-divider-v py-3 mb-4"></div>

              <div
                v-if="plan.hasTeamOption"
                class="team-accounts mb-4 d-flex align-items-center"
              >
                <div class="privacy-content">
                  <span class="mb-0 f-s-16 f-w-500">
                    Team Accounts
                  </span>
                  <span class="text-secondary f-s-14 mb-0 d-block">
                    Starting at 5 users in the team plan, you can
                    increase.
                  </span>
                </div>
                <div class="simplespin ms-3 d-flex align-items-center">
                  <b-button
                    variant="light-primary"
                    class="circle-btn icon-btn decrement"
                    @click="handleDecrement"
                  >
                    -
                  </b-button>
                  <b-form-input
                    type="text"
                    class="app-small-touchspin count p-3"
                    v-model="teamCount"
                    readonly
                  />
                  <b-button
                    variant="light-primary"
                    class="circle-btn icon-btn increment"
                    @click="handleIncrement"
                  >
                    +
                  </b-button>
                </div>
              </div>
            </div>
          </b-col>

          <b-col xl="6" class="mt-xxl-0 mt-5">
            <div class="plan-choose">
              <h6 class="mb-0">Payment plan</h6>
              <div>
                <b-button variant="primary" class="me-2">
                  Credit card
                </b-button>
                <b-button variant="secondary">PayPal</b-button>
              </div>
            </div>

            <!-- Payment Methods -->
            <div
              v-for="method in paymentMethods"
              :key="method.id"
              class="form-selectgroup mt-4"
            >
              <div class="select-item">
                <b-form-radio
                  :id="method.id"
                  :value="method.value"
                  name="paymentoption"
                  :checked="method.defaultChecked"
                  class="form-check-primary w-20 h-20"
                />
                <label :for="method.id" class="form-check-label">
                  <span class="d-flex align-items-center">
                    <span>
                      <span class="f-s-16 mb-0 f-w-500">
                        {{ method.label }}
                      </span>
                      <span class="d-block text-secondary f-s-16 mb-0">
                        {{ method.subLabel }}
                      </span>
                    </span>
                  </span>
                </label>
                <div class="ms-2">
                  <b-img :src="method.img" :alt="method.alt" />
                </div>
              </div>
            </div>

            <b-button variant="success" class="w-100 mt-4">
              + Add New Card
            </b-button>

            <!-- Discount Code Area -->
            <div class="form-selectgroup p-3 mt-4">
              <h6 class="mb-2">Discount code</h6>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  placeholder="20FGJKYSD"
                  class="b-r-left"
                />
                <b-button variant="secondary" class="b-r-right">
                  Apply
                </b-button>
              </b-input-group>

              <p class="text-success f-s-16 mb-0">
                30% discount code applied
              </p>

              <div class="team-accounts mt-3 p-0 d-flex justify-content-between align-items-center">
                <div class="privacy-content">
                  <span class="mb-0 f-s-16 f-w-500">Team Plan</span>
                  <span class="text-secondary f-s-14 mb-0 d-block">
                    5 Users Quarterly
                  </span>
                </div>
                <h4>$789.0</h4>
              </div>

              <div class="app-divider-v py-3" />

              <div class="plan-choose d-flex justify-content-between">
                <h6 class="mb-0">Payment plan</h6>
                <h5 class="text-success f-s-18">-$57.90</h5>
              </div>

              <div class="app-divider-v py-3" />

              <div class="team-accounts mt-3 mb-4 p-0 d-flex justify-content-between">
                <div class="privacy-content">
                  <span class="mb-0 f-s-16 f-w-500">Total</span>
                  <span class="text-secondary f-s-14 mb-0 d-block">
                    Next payment will charge 10th of January 2030
                  </span>
                </div>
                <h6>$789.0</h6>
              </div>

              <b-button variant="success" class="w-100">
                PAY NOW
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BRow,
  BCol,
  BButton,
  BFormRadio,
  BFormInput,
  BInputGroup,
  BImg,
} from "bootstrap-vue-next";

// Import icons
import { PhCheckCircle } from "@phosphor-icons/vue";

// Reactive state
const teamCount = ref(25);
const selectedPlan = ref("planOption1");

// Plans data
const plans = ref([
  {
    id: "planOption2",
    label: "Mark Moen",
    subLabel: "UI/UX Designer",
    price: "$69.44",
    users: "1 users/quarterly",
  },
  {
    id: "planOption1",
    label: "Mark Moen",
    subLabel: "UI/UX Designer",
    price: "$69.44",
    users: "1 users/quarterly",
    features: [
      "40 downloads per day.",
      "Access to all products or bundles.",
      "Early access to new/beta release features.",
    ],
    hasTeamOption: true,
  },
  {
    id: "planOption3",
    label: "Business Pro",
    subLabel: "for big teams",
    price: "$250.44",
    users: "31 users/quarterly",
  },
]);

// Payment methods data
const paymentMethods = ref([
  {
    id: "paymentCheckbox1",
    value: "paymentoption1",
    label: "**** 4426",
    subLabel: "Visa card",
    img: "/images/setting-app/visa-icon.png",
    alt: "Visa",
    defaultChecked: false,
  },
  {
    id: "paymentCheckbox2",
    value: "paymentoption2",
    label: "**** 6790",
    subLabel: "Master card",
    img: "/images/setting-app/master-icon.png",
    alt: "MasterCard",
    defaultChecked: true,
  },
]);

// Methods
const handleIncrement = () => {
  teamCount.value += 1;
};

const handleDecrement = () => {
  if (teamCount.value > 1) {
    teamCount.value -= 1;
  }
};
</script>


