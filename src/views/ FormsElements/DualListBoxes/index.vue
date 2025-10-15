<script setup>
import { ref } from "vue";
import { BRow, BContainer, BCol, BCard, BCardHeader, BCardBody, BTable } from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import { PhCardholder } from "@phosphor-icons/vue";
import DualListBox from "vue-dual-listbox";
import "vue-dual-listbox/src/style/style.css"

import {
    allOptions,
    options,
    options2,
    publicFunctions,
} from '@/data/formelements/DuelListBox/DuelListBox.js'

// Breadcrumb data
const breadcrumbItems = {
    title: "Dual List Boxes",
    items: [
        { label: "Forms elements", icon: PhCardholder },
        { label: "Dual List Boxes", active: true },
    ],
};

// Reactive data
const selected = ref([])
const selected1 = ref([])
const selected2 = ref([])
const selected3 = ref([])

// Methods
const setSelected = (value) => {
    selected.value = value
}

const setSelected1 = (value) => {
    selected1.value = value
}

const setSelected2 = (value) => {
    selected2.value = value
}

const setSelected3 = (value) => {
    selected3.value = value
}
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems" />

            <BContainer fluid>
                <BRow>
                    <BCol xxl="6">
                        <BCard>
                            <BCardHeader class="code-header">
                                <h5>Select by class</h5>
                            </BCardHeader>
                            <BCardBody>
                                <DualListBox
                                    :options="options"
                                    :selected="selected"
                                    @change="setSelected"
                                    show-header-labels
                                    can-filter
                                    :lang="{
                    availableHeader: 'Available options',
                    selectedHeader: 'Selected options',
                  }"
                                    :icons="{
                    moveAllToSelected: 'Add All',
                    moveToSelected: 'Add',
                    moveToAvailable: 'Remove',
                    moveAllToAvailable: 'Remove All',
                  }"
                                />
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xxl="6">
                        <BCard>
                            <BCardHeader class="code-header">
                                <h5> Add options and add eventListeners </h5>
                            </BCardHeader>
                            <BCardBody>
                                <div class="selected-element d-flex mb-2 f-w-600">
                                    <label>Selected element :&nbsp;</label>
                                    <ul class="changed-element text-primary">
                                        <li> Nothing yet</li>
                                    </ul>
                                </div>
                                <DualListBox
                                    :options="options"
                                    :selected="selected1"
                                    @change="setSelected1"
                                    show-header-labels
                                    can-filter
                                    :lang="{
                    availableHeader: 'Available options',
                    selectedHeader: 'Selected options',
                  }"
                                    :icons="{
                    moveToSelected: '>',
                    moveToAvailable: '<',
                    moveAllToSelected: '>>',
                    moveAllToAvailable: '<<',
                  }"
                                />
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xxl="6">
                        <BCard>
                            <BCardHeader class="code-header">
                                <h5>Select by class</h5>
                            </BCardHeader>
                            <BCardBody>
                                <DualListBox
                                    :options="options"
                                    :selected="selected2"
                                    @change="setSelected2"
                                    can-filter
                                    show-header-labels
                                    :lang="{
                    availableHeader: 'Available options',
                    selectedHeader: 'Selected options',
                  }"
                                    class="custom-dual-listbox"
                                />
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xxl="6">
                        <BCard>
                            <BCardHeader class="code-header">
                                <h5>Show the sort buttons</h5>
                            </BCardHeader>
                            <BCardBody>
                                <DualListBox
                                    :options="options2"
                                    :selected="selected3"
                                    @change="setSelected3"
                                    show-header-labels
                                    can-filter
                                    show-order-buttons
                                    :lang="{
                    availableHeader: 'Available options',
                    selectedHeader: 'Selected options',
                  }"
                                    :icons="{
                    moveAllToSelected: 'Add All',
                    moveToSelected: 'Add',
                    moveToAvailable: 'Remove',
                    moveAllToAvailable: 'Remove All',
                  }"
                                />
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol md="12">
                        <BCard>
                            <BCardHeader>
                                <h5>All options</h5>
                            </BCardHeader>
                            <BCardBody>
                                <div class="table-responsive">
                                    <BTable class="table-bottom-border table-hover mb-0">
                                        <thead>
                                        <tr>
                                            <th>Option</th>
                                            <th>Default</th>
                                            <th>Excepted values</th>
                                            <th>Explanation</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="[opt, def, type, exp] in allOptions" :key="opt">
                                            <th>{{ opt }}</th>
                                            <td>
                                                <code>{{ def }}</code>
                                            </td>
                                            <td>
                                                <code>{{ type }}</code>
                                            </td>
                                            <td>{{ exp }}</td>
                                        </tr>
                                        </tbody>
                                    </BTable>
                                </div>
                            </BCardBody>
                        </BCard>

                        <BCard class="mt-4">
                            <BCardHeader>
                                <h5>Public functions</h5>
                            </BCardHeader>
                            <BCardBody>
                                <div class="table-responsive">
                                    <BTable class="table-bottom-border table-hover mb-0">
                                        <thead>
                                        <tr>
                                            <th>Function name</th>
                                            <th>Arguments</th>
                                            <th>Explanation</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="[name, args, desc] in publicFunctions" :key="name">
                                            <th>{{ name }}</th>
                                            <td>{{ args }}</td>
                                            <td>{{ desc }}</td>
                                        </tr>
                                        </tbody>
                                    </BTable>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BContainer>
        </main>
    </AppLayout>
</template>