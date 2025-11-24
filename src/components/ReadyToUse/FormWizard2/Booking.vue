<script setup>
import {ref} from 'vue'
import {
    BCard,
    BCardHeader,
    BCardBody,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormRadio,
    BAccordion,
    BAccordionItem
} from 'bootstrap-vue-next'
import {
    PhGearSix,
    PhCalendarBlank,
    PhNotebook,
    PhCheckSquare,
    PhBuilding,
    PhCalendar,
    PhClock,
    PhMapPin
} from '@phosphor-icons/vue'

const activeTab = ref('tabs-1')


const steps = [
    {id: 'tabs-1', title: 'Service', subtitle: 'Step 1', icon: PhGearSix},
    {id: 'tabs-2', title: 'Date & Time', subtitle: 'Step 2', icon: PhCalendarBlank},
    {id: 'tabs-3', title: 'Booking Summary', subtitle: 'Step 3', icon: PhNotebook},
    {id: 'tabs-4', title: 'Completed', subtitle: 'Step 4', icon: PhCheckSquare}
]


const toggleTab = (tab) => {
    activeTab.value = tab
}


const activeAccordion = ref(['0'])
</script>

<template>
    <b-card no-body>
        <b-card-header>
            <h5>Booking Wizard</h5>
        </b-card-header>
        <b-card-body>
            <b-row>
                <b-col lg="4" class="mb-3">
                    <div class="vertical-tabs">
                        <div
                            v-for="(step, index) in steps"
                            :key="step.id"
                            :class="['tab', { 'current-tab': activeTab === step.id }]"
                            @click="toggleTab(step.id)"
                        >
                            <div class="d-flex">
                                <div class="step ms-2">
                                    <component :is="step.icon" :size="20"/>
                                </div>
                                <div class="ps-3">
                                    <h5>{{ step.title }}</h5>
                                    <span class="text-secondary">Step {{ index + 1 }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>

                <!-- Right Tab Content -->
                <b-col lg="8">
                    <div class="tab-contents-list">
                        <!-- Service Tab -->
                        <div v-if="activeTab === 'tabs-1'">
                            <b-form class="app-form">
                                <b-row>
                                    <b-col md="6">
                                        <b-form-group label="Company Name" class="mb-3">
                                            <b-form-input type="text"/>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group label="Service" class="mb-3">
                                            <b-form-input type="text"/>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="12">
                                        <b-form-group label="Company Address" class="mb-3">
                                            <BFormTextarea rows="2"/>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group label="Additional Persons" class="mb-3">
                                            <b-form-input type="number" :value="2"/>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group label="Email" class="mb-3">
                                            <b-form-input plaintext readonly value="email@gmail.com"/>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </div>


                        <div v-if="activeTab === 'tabs-2'">
                            <b-form class="app-form">
                                <b-row>
                                    <b-col md="6" xl="4">
                                        <b-card class="shadow-none">
                                            <b-card-body>
                                                <b-form-radio name="radio-group1"/>
                                                <div class="text-center">
                                                    <img src="/images/form/19.png" alt="Location 1"
                                                         style="width: 60px; height: 60px;"/>
                                                    <h6 class="tab-heading mt-2">Location 1</h6>
                                                    <p class="text-muted mb-0">
                                                        A Global Positioning System, or GPS, satellites orbiting Earth.
                                                    </p>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col md="6" xl="4">
                                        <b-card class="shadow-none">
                                            <b-card-body>
                                                <b-form-radio name="radio-group1"/>
                                                <div class="text-center">
                                                    <img src="/images/form/20.png" alt="Location 2"
                                                         style="width: 60px; height: 60px;"/>
                                                    <h6 class="tab-heading mt-2">Location 2</h6>
                                                    <p class="text-muted mb-0">
                                                        Traditionally, those are the three important factors in buying.
                                                    </p>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col md="6">
                                        <b-form-group label="Date" class="mb-3">
                                            <b-form-input type="datetime-local"/>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group label="Time" class="mb-3">
                                            <b-form-input type="text" placeholder="10:00" readonly/>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </div>

                        <!-- Booking Summary Tab -->
                        <div v-if="activeTab === 'tabs-3'">
                            <b-accordion v-model="activeAccordion"
                                         class="accordion app-accordion accordion-light-primary">
                                <b-accordion-item title="Company Details" :event-key="'0'">
                                    <p class="fw-bold">
                                        <PhBuilding class="me-2"/>
                                        AR info
                                    </p>
                                    <address>
                                        120 Silver Point , <br/> Myriam Estate South Carolina, <br/> India
                                    </address>
                                    <p>Zip: 456730</p>
                                    <p>Service : Application</p>
                                    <p>Email : ar12@gmail.com</p>
                                    <p>+91 6926578398</p>
                                </b-accordion-item>

                                <b-accordion-item title="Meeting time Details" :event-key="'1'">
                                    <p>
                                        <PhCalendar class="me-2"/>
                                        2024-10-1
                                    </p>
                                    <p>
                                        <PhClock class="me-2"/>
                                        10:00 am
                                    </p>
                                    <p>
                                        <PhMapPin class="me-2"/>
                                        Location 1-(office)
                                    </p>
                                </b-accordion-item>
                            </b-accordion>
                        </div>

                        <div v-if="activeTab === 'tabs-4'">
                            <div class="text-center">
                                <img src="/images/form/done.png" alt="Completed" style="width: 80px; height: 80px;"/>
                                <h6 class="mt-3">Thank You!</h6>
                                <p class="text-muted">Your booking is completed.</p>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>
