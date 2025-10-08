<script setup>
import { ref } from 'vue';
import {
    BCard, BCardHeader, BCardBody, BRow, BTable, BBadge, BButton,
    BFormInput, BModal, BForm, BFormCheckbox, BFormGroup,
    BFormRadio, BFormSelect, BAlert, BAccordion, BAccordionItem, BCol, BTableSimple
} from 'bootstrap-vue-next';
import {
    PhShoppingCart, PhBook, PhCurrencyDollar, PhCheckSquare,
    PhListChecks, PhPlus, PhInfo, PhStar, PhStarHalf,
} from '@phosphor-icons/vue';

// Reactive data
const currentTab = ref('tabs1');
const modalOpen = ref(false);
const selectedAddress = ref('home');
const selectedDelivery = ref('economy');
const selectedPayment = ref('card');
const selectedPreference = ref(null);
const showAlert = ref(true);
const giftWrapVisible = ref(true);

const tabs = ref([
    { id: 'tabs1', label: 'Cart', icon: PhShoppingCart, step: 'Step 1' },
    { id: 'tabs2', label: 'Address', icon: PhBook, step: 'Step 2' },
    { id: 'tabs3', label: 'Payment', icon: PhCurrencyDollar, step: 'Step 3' },
    { id: 'tabs4', label: 'Offers', icon: PhCheckSquare, step: 'Step 4' },
    { id: 'tabs5', label: 'Review', icon: PhListChecks, step: 'Step 5' },
    { id: 'tabs6', label: 'Completed', icon: PhListChecks, step: 'Step 6' }
]);

const cartItems = ref([
    {
        id: 1,
        image: '/images/ecommerce/23.jpg',
        title: 'Sky & stylist - jacket',
        size: 'medium',
        color: 'Sky',
        items: 2,
        price: 500,
        rating: 3
    },
    {
        id: 2,
        image: '/images/ecommerce/25.jpg',
        title: 'Trendy & stylist shoes - Shoes',
        size: 'large',
        color: 'Light',
        items: 2,
        price: 850,
        rating: 4
    },
    {
        id: 3,
        image: '/images/ecommerce/13.jpg',
        title: 'Designer golden watch - Watch',
        size: 'large',
        color: 'Light',
        items: 1,
        price: 350,
        rating: 4
    }
]);

const offers = ref([
    {
        title: 'Offer 1',
        description: '12% off on Visa card EMI Transactions,up to $800 on orders of $1500'
    },
    {
        title: 'Offer 2',
        description: 'Additional INR 250 Discount on OneCard Credit Card 9 month..'
    },
    {
        title: 'Offer 3',
        description: 'Get extra 20% off (price inclusive of cashback/coupon)'
    }
]);

const preferenceOptions = ref([
    {
        id: 'select1',
        title: 'Select 1',
        description: 'Call Help Center for any substitutes'
    },
    {
        id: 'select2',
        title: 'Select 2',
        description: 'Let us pick your substitutes'
    },
    {
        id: 'select3',
        title: 'Select 3',
        description: 'I do not need any substitutes'
    }
]);

// Methods
const setCurrentTab = (tabId) => {
    currentTab.value = tabId;
};

const toggleModal = () => {
    modalOpen.value = !modalOpen.value;
};

const handlePaymentSelect = (method) => {
    selectedPayment.value = method;
};
</script>

<template>
    <b-card no-body>
        <b-card-header>
            <h5>Checkout Wizard</h5>
        </b-card-header>
        <b-card-body>
            <b-row>
                <b-col md="12" xl="3" class="mb-3">
                    <div class="checkout-tab">
                        <div
                            v-for="tab in tabs"
                            :key="tab.id"
                            :class="['tabs', { 'current-checkout-tab': currentTab === tab.id }]"
                            @click="setCurrentTab(tab.id)"
                        >
                            <div class="d-flex align-items-center">
                                <div class="steps ms-2">
                                    <component :is="tab.icon" />
                                </div>
                                <div class="ps-3">
                                    <h5>{{ tab.label }}</h5>
                                    <span>{{ tab.step }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>

                <b-col lg="8" xl="6">
                    <div class="tab-contentlist">
                        <!-- Cart Tab -->
                        <b-row v-if="currentTab === 'tabs1'">
                            <b-col cols="12">
                                <div v-for="item in cartItems" :key="item.id" class="cart-box">
                                    <div class="bg-light-secondary rounded overflow-hidden">
                                        <a href="#">
                                            <img :src="item.image" alt="" class="w-80" />
                                        </a>
                                    </div>
                                    <div class="flex-grow-1 px-3">
                                        <h6>{{ item.title }}</h6>
                                        <p><span>Size</span>: {{ item.size }}</p>
                                        <p><span>Color</span>: {{ item.color }}</p>
                                        <p><span>Items</span>: {{ item.items }}</p>
                                    </div>
                                    <div class="cart-price-box text-right">
                                        <a href="#">
                                            <i class="ti ti-x text-secondary"></i>
                                        </a>
                                        <h5>${{ item.price }}</h5>
                                        <div class="mb-3">
                                            <component
                                                v-for="index in 5"
                                                :key="index"
                                                :is="index <= item.rating ? PhStar : PhStar"
                                                class="me-1"
                                                :size="15"
                                                :weight="index <= item.rating ? 'fill' : 'regular'"
                                                :class="{ 'text-warning': index <= item.rating }"
                                            />
                                        </div>
                                        <div class="link">
                                            <a href="#">Move to Favorites</a>
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>

                        <!-- Address Tab -->
                        <b-row v-if="currentTab === 'tabs2'">
                            <b-col md="12">
                                <h5 class="tab-heading mb-3">Your Address</h5>
                            </b-col>

                            <!-- Home Address -->
                            <b-col md="6">
                                <b-card class="shadow-none" no-body>
                                    <b-card-body class="address-content">
                                        <b-form-group class="d-flex">
                                            <b-form-radio
                                                v-model="selectedAddress"
                                                value="home"
                                                name="address"
                                            />
                                            <span class="fs-6 tab-heading ms-2">Home Address</span>
                                        </b-form-group>
                                        <p class="text-muted">
                                            260 Zulma Stravenue, Wisozkton, KY 44193-0738<br />
                                            collins@stroman.net
                                        </p>
                                        <p>+1 828-726-3669</p>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- Office Address -->
                            <b-col md="6">
                                <b-card class="shadow-none">
                                    <b-card-body class="address-content">
                                        <b-form-group class="d-flex">
                                            <b-form-radio
                                                v-model="selectedAddress"
                                                value="office"
                                                name="address"
                                            />
                                            <span class="fs-6 tab-heading ms-2">Office Address</span>
                                        </b-form-group>
                                        <p class="text-muted">
                                            90897 Franecki Haven, West Maximo, KY 40770-5993<br />
                                            bjast@hotmail.com
                                        </p>
                                        <p>+1 863-422-2979</p>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- Add New Address -->
                            <b-col md="6">
                                <b-card class="shadow-none">
                                    <b-card-body class="added-content">
                                        <a role="button" class="link-primary" @click="toggleModal">
                                            <PhPlus size="16" /> Add A New Address
                                        </a>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- Add Address Modal -->
                            <b-modal v-model="modalOpen" title="Add New Address" hide-footer>
                                <b-form class="app-form">
                                    <b-row form>
                                        <b-col md="12">
                                            <b-form-group label="Address">
                                                <b-form-input
                                                    type="text"
                                                    id="address1"
                                                    placeholder="Enter address"
                                                />
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="12">
                                            <b-form-group label="Address 2">
                                                <b-form-input
                                                    type="text"
                                                    id="address2"
                                                    placeholder="Enter additional address info"
                                                />
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="6">
                                            <b-form-group label="City">
                                                <b-form-input
                                                    type="text"
                                                    id="city"
                                                    placeholder="Enter city"
                                                />
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group label="State">
                                                <b-form-select id="state">
                                                    <option>Choose...</option>
                                                    <option>NY</option>
                                                    <option>CA</option>
                                                </b-form-select>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="2">
                                            <b-form-group label="Zip">
                                                <b-form-input
                                                    type="text"
                                                    id="zip"
                                                    placeholder="Enter zip code"
                                                />
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-form>
                                <div class="mt-3 text-end">
                                    <b-button variant="secondary" @click="toggleModal" class="me-2">
                                        Close
                                    </b-button>
                                    <b-button variant="primary">Add</b-button>
                                </div>
                            </b-modal>

                            <!-- Delivery Method -->
                            <b-col md="12">
                                <h5 class="fs-6 tab-heading mb-3">Delivery Method</h5>
                            </b-col>

                            <b-col md="6">
                                <b-card class="shadow-none">
                                    <b-card-body class="select-content">
                                        <b-form-group class="d-flex">
                                            <b-form-radio
                                                v-model="selectedDelivery"
                                                value="economy"
                                                name="delivery"
                                            />
                                            <span class="ms-2">
                                                <span class="fs-6 tab-heading">Economy Shipping - FREE</span>
                                                <span class="d-block text-secondary">5 to 10 business days</span>
                                            </span>
                                        </b-form-group>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <b-col md="6">
                                <b-card class="shadow-none">
                                    <b-card-body class="select-content">
                                        <b-form-group class="d-flex">
                                            <b-form-radio
                                                v-model="selectedDelivery"
                                                value="priority"
                                                name="delivery"
                                            />
                                            <span class="ms-2">
                                                <span class="fs-6 tab-heading">Priority overnight -$18.50</span>
                                                <span class="d-block text-secondary">Based on chosen delivery date</span>
                                            </span>
                                        </b-form-group>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- Alert -->
                            <b-col md="12" v-if="showAlert">
                                <div class="alert alert-border-info">
                                    <p>
                                        <PhInfo size="16" class="me-1 text-info" />
                                        Expected delivery data is not guaranteed, if you are
                                        ordering for an event we suggest allowing 1 extra days.
                                    </p>
                                    <div class="text-end">
                                        <a href="#" class="link-primary text-d-underline">Don't allow</a>
                                        <a href="#" class="link-primary text-d-underline ms-2">Allow</a>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>

                        <!-- Payment Tab -->
                        <b-row v-if="currentTab === 'tabs3'">
                            <!-- Credit/Debit Card -->
                            <b-col md="12">
                                <b-card class="shadow-none">
                                    <b-card-body class="select-content">
                                        <b-form-group class="mb-3 d-flex">
                                            <b-form-radio
                                                v-model="selectedPayment"
                                                value="card"
                                                name="payment"
                                            />
                                            <span class="fs-6 tab-heading ms-2">Credit / Debit Card</span>
                                        </b-form-group>

                                        <b-form v-if="selectedPayment === 'card'" class="app-form">
                                            <b-row>
                                                <b-col md="12" class="mb-3">
                                                    <b-form-group label="Cardholder Name">
                                                        <b-form-input
                                                            type="text"
                                                            id="cardName"
                                                            placeholder="Olaf"
                                                            required
                                                        />
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="12" class="mb-3">
                                                    <b-form-group label="Card Number">
                                                        <b-form-input
                                                            type="text"
                                                            id="cardNumber"
                                                            placeholder="xxxx-xxxx-xxxx-xxxx"
                                                            required
                                                        />
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6" class="mb-3">
                                                    <b-form-group label="Expiration Date">
                                                        <b-form-input
                                                            type="text"
                                                            id="expirationDate"
                                                            placeholder="MM/YY"
                                                            required
                                                        />
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="6" class="mb-3">
                                                    <b-form-group label="CVC code">
                                                        <b-form-input
                                                            type="text"
                                                            id="cvc"
                                                            placeholder="xxx"
                                                            required
                                                        />
                                                    </b-form-group>
                                                </b-col>
                                                <b-col md="12" class="text-end">
                                                    <b-button variant="primary">Submit</b-button>
                                                </b-col>
                                            </b-row>
                                        </b-form>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- Visa Card -->
                            <b-col md="6">
                                <b-card class="shadow-none" no-body>
                                    <b-card-body class="select-content">
                                        <b-form-group class="position-relative d-flex">
                                            <b-form-radio
                                                v-model="selectedPayment"
                                                value="visa"
                                                name="payment"
                                            />
                                            <span class="d-flex align-items-center ms-2">
                                                <img
                                                    src="/images/checkbox-radio/logo1.png"
                                                    class="w-30 h-30"
                                                    alt="Visa"
                                                />
                                                <span class="ms-2">
                                                    <span class="fs-6 tab-heading">Visa Card</span>
                                                    <span class="d-block text-secondary">Select Visa</span>
                                                </span>
                                            </span>
                                        </b-form-group>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- PayPal -->
                            <b-col md="6">
                                <b-card class="shadow-none" no-body>
                                    <b-card-body class="select-content">
                                        <b-form-group class="position-relative d-flex">
                                            <b-form-radio
                                                v-model="selectedPayment"
                                                value="paypal"
                                                name="payment"
                                            />
                                            <span class="d-flex align-items-center ms-2">
                                                <img
                                                    src="/images/checkbox-radio/logo3.png"
                                                    class="w-30 h-30"
                                                    alt="PayPal"
                                                />
                                                <span class="ms-2">
                                                    <span class="fs-6 tab-heading">Paypal</span>
                                                    <span class="d-block text-secondary">Select PayPal</span>
                                                </span>
                                            </span>
                                        </b-form-group>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- UPI Apps -->
                            <b-col md="12">
                                <b-card class="shadow-none" no-body>
                                    <b-card-body class="select-content">
                                        <b-form-group class="position-relative d-flex">
                                            <b-form-radio
                                                v-model="selectedPayment"
                                                value="upi"
                                                name="payment"
                                            />
                                            <span class="d-flex align-items-center">
                                                <span class="ms-2">
                                                    <span class="fs-6 tab-heading">Other UPI Apps</span>
                                                    <span class="d-block text-secondary">Select Other UPI Apps for payment</span>
                                                </span>
                                            </span>
                                        </b-form-group>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- Cash on Delivery -->
                            <b-col md="12">
                                <b-card class="shadow-none" no-body>
                                    <b-card-body class="select-content">
                                        <b-form-group class="position-relative d-flex">
                                            <b-form-radio
                                                v-model="selectedPayment"
                                                value="cod"
                                                name="payment"
                                            />
                                            <span class="d-flex align-items-center">
                                                <span class="ms-2">
                                                    <span class="fs-6 tab-heading">Cash on Delivery/Pay on Delivery</span>
                                                    <span class="d-block text-secondary">Cash,UPI and Cards accepted.</span>
                                                </span>
                                            </span>
                                        </b-form-group>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>

                        <!-- Offers Tab -->
                        <b-row v-if="currentTab === 'tabs4'" class="offer-content-box">
                            <!-- Bank Offers -->
                            <b-col md="6" xxl="4">
                                <b-card no-body>
                                    <b-card-body>
                                        <h6>Bank Offers</h6>
                                        <p>Upto $480 discount on credit card.</p>
                                        <div class="text-end">
                                            <b-button variant="link" class="text-d-underline link-primary">
                                                More Offers
                                            </b-button>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- Partner Offers -->
                            <b-col md="6" xxl="4">
                                <b-card no-body>
                                    <b-card-body>
                                        <div class="circle-ribbon circle-right ribbon-primary w-35 h-35">%</div>
                                        <h6>Partner Offers</h6>
                                        <p>Get GST invoice and save up to 15% on...</p>
                                        <div class="text-end">
                                            <b-button variant="link" class="text-d-underline link-primary">
                                                More Offers
                                            </b-button>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- Other Offers -->
                            <b-col md="6" xxl="4">
                                <b-card no-body>
                                    <b-card-body>
                                        <h6>Other Offers</h6>
                                        <p>Buy 2 Bags, save up to 5% to 10%.</p>
                                        <div class="text-end">
                                            <b-button variant="link" class="text-d-underline link-primary">
                                                More Offers
                                            </b-button>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>

                            <!-- Offer List -->
                            <b-col md="12">
                                <ul class="list-group b-r-0 list-contact-box offer-list-group mb-3">
                                    <li v-for="(offer, index) in offers" :key="index" class="list-group-item">
                                        <div class="d-flex align-items-center">
                                            <b-form-radio :id="`offerCheck${index}`" />
                                            <div class="text-truncate ms-2">
                                                <h6 class="mb-0">{{ offer.title }}</h6>
                                                <p class="text-secondary mb-0">
                                                    {{ offer.description }} -
                                                    <a href="#" class="link-secondary text-d-underline">See Details</a>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-col>

                            <!-- Gift Wrap Alert -->
                            <b-col md="12" v-if="giftWrapVisible">
                                <b-alert variant="success" show class="alert-light-border-success d-flex align-items-center justify-content-between">
                                    <p class="mb-0">
                                        <i class="ti ti-gift f-s-18 me-2"></i>Gift wrap
                                        and personalized message on card, Only for $10.50 USD
                                    </p>
                                    <i class="ti ti-x" data-bs-dismiss="alert"></i>
                                </b-alert>
                            </b-col>
                        </b-row>

                        <!-- Review Tab -->
                        <b-row v-if="currentTab === 'tabs5'">
                            <b-col cols="6" sm="2" class="mb-3">
                                <b-card class="bg-light-dark b-r-10">
                                    <img
                                        src="/images/ecommerce/23.jpg"
                                        alt="product-img"
                                        class="img-fluid bg-light-dark b-r-10"
                                    />
                                </b-card>
                            </b-col>
                            <b-col cols="6" sm="2" class="mb-3">
                                <b-card class="bg-light-dark b-r-10" no-body>
                                    <img
                                        src="/images/ecommerce/25.jpg"
                                        alt="product-img"
                                        class="img-fluid bg-light-dark b-r-10"
                                    />
                                </b-card>
                            </b-col>
                            <b-col cols="6" sm="2" class="mb-3 mt-sm-0">
                                <b-card class="bg-light-dark b-r-10">
                                    <img
                                        src="/images/ecommerce/13.jpg"
                                        alt="product-img"
                                        class="img-fluid bg-light-dark b-r-10"
                                    />
                                </b-card>
                            </b-col>

                            <b-col md="12">
                                <div class="mb-3">
                                    <h6 class="tab-heading mb-0">Estimated Delivery Date: 27 Dec 2024</h6>
                                    <p class="text-secondary">Items dispatched by MQ Store</p>
                                </div>
                            </b-col>

                            <b-col cols="12">
                                <div>
                                    <h6 class="tab-heading">Product details</h6>
                                    <b-accordion flush id="nestingExample" class="app-accordion accordion-secondary app-accordion-plus">
                                        <b-accordion-item title="Tom & Jerry Printed T-Shirt" visible>
                                            <p><span class="text-secondary f-w-500">size</span> : medium</p>
                                            <p><span class="text-secondary f-w-500">color</span> : Green</p>
                                            <p><span class="text-secondary f-w-500">Items</span> : 2</p>
                                            <p><span class="text-secondary f-w-500">Rating</span> : 3+ </p>
                                        </b-accordion-item>

                                        <b-accordion-item title="Swatch Watch Irony">
                                            <p><span class="text-secondary f-w-500">color</span> : Dark</p>
                                            <p><span class="text-secondary f-w-500">Items</span> : 2</p>
                                            <p><span class="text-secondary f-w-500">Rating</span> : 4+ </p>
                                        </b-accordion-item>

                                        <b-accordion-item title="Nike Air Max 1">
                                            <p><span class="text-secondary f-w-500">size</span> : large</p>
                                            <p><span class="text-secondary f-w-500">color</span> : White</p>
                                            <p><span class="text-secondary f-w-500">Items</span> : 1</p>
                                            <p><span class="text-secondary f-w-500">Rating</span> : 5+ </p>
                                        </b-accordion-item>
                                    </b-accordion>
                                </div>
                            </b-col>
                        </b-row>

                        <!-- Completed Tab -->
                        <b-row v-if="currentTab === 'tabs6'">
                            <b-col cols="12">
                                <div class="text-center">
                                    <div class="mb-3">
                                        <img src="/images/form/done.gif" alt="" />
                                    </div>
                                    <h5 class="text-success"> Your Order #7AD6728 Placed, Thank you!</h5>
                                    <p>Confirmation will be sent to Your Email</p>
                                </div>
                                <div class="app-divider-v dashed"></div>
                            </b-col>
                            <b-col cols="12">
                                <b-row class="mb-3">
                                    <b-col md="12">
                                        <h6 class="tab-heading">
                                            In the unlikely case of items being unavailable,
                                            what would you prefer?
                                        </h6>
                                    </b-col>

                                    <!-- Preference Options -->
                                    <b-col v-for="option in preferenceOptions" :key="option.id" md="6" xl="4" class="mt-4">
                                        <b-card class="shadow-none" no-body>
                                            <b-card-body class="address-content">
                                                <b-form-group class="d-flex">
                                                    <b-form-radio :value="option.id" v-model="selectedPreference" name="preference" />
                                                    <span class="fs-6 tab-heading ms-2">{{ option.title }}</span>
                                                </b-form-group>
                                                <p class="mb-0">{{ option.description }}</p>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>

                <!-- Order Summary -->
                <b-col lg="4" xl="3">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Order Details</h5>
                        </b-card-header>
                        <b-card-body>
                            <div class="pricing-details">
                                <div class="mb-3">
                                    <b-form-input
                                        type="text"
                                        placeholder="Enter promo code / Gift Certificate"
                                        class="promo rounded-0"
                                    />
                                </div>
                                <b-table-simple class="mb-0">
                                    <thead>
                                    <tr>
                                        <th scope="col" class="fw-bold">Subtotal</th>
                                        <th scope="col" class="text-end fw-bold">$2,550</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Estimated Tax</td>
                                        <td class="text-end">$5.00</td>
                                    </tr>
                                    <tr>
                                        <td>Estimated Shipping &amp; Handling</td>
                                        <td class="text-end">$10.00</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Charges</td>
                                        <td class="text-end">-</td>
                                    </tr>
                                    <tr>
                                        <td class="border-0">Coupon Discount</td>
                                        <td class="border-0 text-end">
                                            <b-badge variant="success">Apply</b-badge>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <thead>
                                    <tr>
                                        <th scope="col" class="fw-bold">Total</th>
                                        <th scope="col" class="text-end fw-bold">$2000</th>
                                    </tr>
                                    </thead>
                                </b-table-simple>
                                <b-button variant="primary" class="w-100 mt-3" id="next">Buy Order</b-button>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>