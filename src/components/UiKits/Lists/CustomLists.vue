<script setup>
import { ref } from "vue";
import { BCard, BCardHeader, BCardBody, BCol, BRow, BListGroup, BListGroupItem } from "bootstrap-vue-next";
import { PhStar, PhEnvelope} from "@phosphor-icons/vue";
import { contactsData, contactsList, peopleList } from '@/data/uikit/lists/listPageData';

const starredContacts = ref([]);

const toggleStar = (id) => {
    starredContacts.value.includes(id)
        ? starredContacts.value = starredContacts.value.filter(cid => cid !== id)
        : starredContacts.value.push(id);
};
</script>

<template>

        <b-col md="6" xl="4">
            <b-card no-body>
                <b-card-header><h5>Contacts</h5></b-card-header>
                <b-card-body>
                    <b-list-group class="list-contact-box b-r-0">
                        <b-list-group-item v-for="contact in contactsList" :key="contact.id">
                            <div class="d-flex">
                                <div class="me-3 d-flex align-items-center">
                                    <input class="form-check-input me-3" type="checkbox" :checked="contact.checked" />
                                    <div class="w-40 d-flex-center b-r-50 position-relative">
                                        <img :src="contact.avatar" :alt="contact.name" class="w-40 h-40 object-fit-cover img-fluid b-r-50" />
                                        <span :class="['position-absolute top-0 end-0 p-1 border rounded-circle', contact.status === 'online' ? 'bg-success' : 'bg-secondary']"></span>
                                    </div>
                                </div>
                                <div class="text-truncate me-1">
                                    <h6 class="mb-0">{{ contact.name }}</h6>
                                    <div class="text-secondary">{{ contact.message }}</div>
                                </div>
                            </div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col md="6" xl="4">
            <b-card class="equal-card" no-body>
                <b-card-header><h5>People</h5></b-card-header>
                <b-card-body>
                    <b-list-group class=" list-group-flush app-scroll overflow-auto list-people">
                        <div v-for="(peoples, key) in peopleList" :key="key">
                            <div class="list-group-header sticky-top bg-white p-l-10 f-w-500 f-s-16">{{ key }}</div>
                            <b-list-group-item v-for="data in peoples" :key="data.id">
                                <b-row >
                                    <b-col class="col-auto">
                                        <div :class="`h-40 w-40 d-flex-center b-r-10 overflow-hidden ms-2 ${data.bgColor}`">
                                            <img :src="data.image" :alt="data.name" class="img-fluid" />
                                        </div>
                                    </b-col>

                                    <b-col class=" text-truncate p-0 me-1" >
                                        <div class="text-dark f-w-600 d-block">{{ data.name }}</div>
                                        <div class="text-secondary text-truncate">{{ data.description }}</div>
                                    </b-col>
                                    <b-col xs="1" class="icon">
                                        <PhEnvelope size="22" class="text-primary text-end" />
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </div>
                    </b-list-group>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col md="6" xl="4">
            <b-card class="overflow-hidden" no-body>
                <b-card-header><h5>Contacts List</h5></b-card-header>
                <b-card-body class="bg-light-light">
                    <b-row class="contact-list">
                        <b-col md="6" v-for="contact in contactsData" :key="contact.id">
                            <div class="contact-listbox mb-3" @click="toggleStar(contact.id)">
                                <div class="text-center">
                                    <img :src="contact.image" :alt="contact.name" :class="`w-40 h-40 object-fit-cover img-fluid ${contact.bgClass} b-1-secondary b-r-50`" />
                                </div>
                                <div class="contact-stared">
                                    <PhStar size="15" :class="starredContacts.includes(contact.id) ? 'text-warning me-1' : 'text-secondary me-1'" />
                                </div>
                                <h6 class="mb-0 mt-2">{{ contact.name }}</h6>
                                <p>{{ contact.phone }}</p>
                                <p>{{ contact.location }}</p>
                            </div>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>

</template>
