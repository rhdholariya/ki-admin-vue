<script setup>
import { BCard, BCardHeader, BCardBody, BCol, BRow, BListGroup, BListGroupItem } from "bootstrap-vue-next";
import { PhEnvelopeSimple } from "@phosphor-icons/vue";
import { usersList, variantList } from '@/data/uikit/lists/listPageData';


</script>

<template>
    <b-row>
        <!-- Variants -->
        <b-col lg="6">
            <b-card no-body>
                <b-card-header><h5>Variants</h5></b-card-header>
                <b-card-body>
                    <b-list-group>
                        <b-list-group-item
                            v-for="(item, index) in variantList"
                            :key="index"
                            :class="item.className"
                        >
                            {{ item.text }}
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Custom Content -->
        <b-col lg="6">
            <b-card no-body>
                <b-card-header><h5>Custom Content</h5></b-card-header>
                <b-card-body>
                    <b-list-group class="list-group list-content">
                        <b-list-group-item
                            v-for="(user, index) in usersList"
                            :key="user.id"
                            class="list-group-item list-group-item-action flex-wrap position-relative"
                            :class="{ active: index === 0 }"
                        >
                            <!-- Avatar and Status -->
                            <div class="position-absolute">
                <span class="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                  <img :src="user.avatar" :alt="user.name" class="img-fluid b-r-50" />

                  <span v-if="user.status === 'online'" class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>

                  <span v-if="user.status === 'unread'" class="position-absolute top-0 end-0 d-flex-center bg-warning border-light rounded-circle text-center h-20 w-20 f-s-10 start-30">
                    {{ user.unreadCount }}
                  </span>

                  <span v-if="user.status === 'new-message'" class="position-absolute top-0 d-flex-center bg-danger border border-light rounded-circle text-center h-20 w-20 start-30">
                    <PhEnvelopeSimple size="14" />
                  </span>
                </span>
                            </div>

                            <!-- User Info -->
                            <div class="mg-s-60">
                                <h6 class="mb-0 txt-ellipsis-1">{{ user.name }}</h6>
                                <p class="mb-0 text-secondary">{{ user.email }}</p>
                                <div class="mt-2">
                                    <p class="mb-0">{{ user.message }}</p>
                                </div>
                            </div>

                            <!-- Time -->
                            <div class="flex-shrink-0 text-end w-100">
                                <small>{{ user.time }}</small>
                            </div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
