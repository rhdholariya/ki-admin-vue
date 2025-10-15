<script setup>
import {ref, reactive} from 'vue'
import {
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BContainer,
    BFormCheckbox,
    BFormRadio,
    BRow
} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhCardholder} from "@phosphor-icons/vue";
import PaymentMethods from "@/components/FormsElements/CheckboxRadio/PaymentMethods.vue";

import {
    checkboxData,
    checkboxImageOptions,
    platforms,
    radioData,
    radioImageOptions,
    radioPlatforms,
    toggleData
} from '@/data/FormElements/Checkbox/checkboxData'


const selectedRadios = reactive({
    'radio-group': '',
    'radio-group1': '',
    'radio-group2': ''
})

const selectedCheckboxes = reactive({
    'checkbox-group': [],
    'checkbox-group1': [],
    'checkbox-group2': []
})


const selectedPlatforms = reactive({
    instagram: false,
    twitter: false,
    facebook: false,
    snapchat: false
})

const selectedOption = ref('instagram')
const selectedImage = ref('1')
const selectedImages = reactive({
    1: true,
    2: false,
    3: false
})

const handleImageCheckboxChange = (value) => {
    selectedImages[value] = !selectedImages[value]
}

// Helper function for button variants
const getButtonVariant = (className) => {
    if (className.includes('btn-outline-primary')) return 'outline-primary'
    if (className.includes('btn-outline-secondary')) return 'outline-secondary'
    if (className.includes('btn-outline-success')) return 'outline-success'
    if (className.includes('btn-outline-danger')) return 'outline-danger'
    if (className.includes('btn-outline-warning')) return 'outline-warning'
    if (className.includes('btn-outline-info')) return 'outline-info'
    if (className.includes('btn-primary')) return 'primary'
    if (className.includes('btn-secondary')) return 'secondary'
    if (className.includes('btn-success')) return 'success'
    if (className.includes('btn-danger')) return 'danger'
    return 'outline-primary'
}

// Breadcrumb data
const breadcrumbItems = {
    title: "Checkbox & Radio",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Checkbox & Radio", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <b-row>
                    <b-col md="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Custom Radio</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-flex flex-column gap-2">
                                    <b-form-radio
                                        name="flexRadioDefault"
                                        value="default"
                                        class="d-flex align-items-center gap-1"
                                    >
                                        Default
                                    </b-form-radio>

                                    <b-form-radio
                                        name="flexRadioDisabled"
                                        value="disabled"
                                        disabled
                                        class="d-flex align-items-center gap-1"
                                    >
                                        Disabled
                                    </b-form-radio>

                                    <b-form-radio
                                        name="flexRadioDefault"
                                        value="checked"
                                        :checked="true"
                                        class="d-flex align-items-center gap-1"
                                    >
                                        Checked
                                    </b-form-radio>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Custom Checkbox</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-flex flex-column gap-2">
                                    <b-form-checkbox
                                        :checked="true"
                                        class="d-flex align-items-center gap-1"
                                    >
                                        checkbox
                                    </b-form-checkbox>

                                    <b-form-checkbox
                                        :indeterminate="true"
                                        class="d-flex align-items-center gap-1"
                                    >
                                        indeterminate checkbox
                                    </b-form-checkbox>

                                    <b-form-checkbox
                                        disabled
                                        class="d-flex align-items-center gap-1"
                                    >
                                        Disabled checkbox
                                    </b-form-checkbox>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Radio with States</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col
                                        v-for="(group, idx) in radioData"
                                        :key="idx"
                                        md="6"
                                        xl="4"
                                    >
                                        <div class="check-container">
                                            <label
                                                v-for="radio in group.radios"
                                                :key="radio.id"
                                                class="check-box d-flex align-items-center mb-2"
                                            >
                                                <input
                                                    type="radio"
                                                    :name="group.name"
                                                    :value="radio.id"
                                                    v-model="selectedRadios[group.name]"
                                                    class="d-none"
                                                />
                                                <span :class="`radiomark ${radio.colorClass} ms-2`"></span>
                                                <span :class="radio.textClass">{{ radio.label }}</span>
                                            </label>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Checkbox with States</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col
                                        v-for="(group, idx) in checkboxData"
                                        :key="idx"
                                        md="6"
                                        xl="4"
                                    >
                                        <div class="check-container">
                                            <label
                                                v-for="checkbox in group.checkboxes"
                                                :key="checkbox.id"
                                                class="check-box d-flex align-items-center mb-2"
                                            >
                                                <input
                                                    type="checkbox"
                                                    :name="group.name"
                                                    :value="checkbox.id"
                                                    v-model="selectedCheckboxes[group.name]"
                                                    class="d-none"
                                                />
                                                <span :class="`checkmark ${checkbox.colorClass} ms-2`"></span>
                                                <span :class="checkbox.textClass">{{ checkbox.label }}</span>
                                            </label>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col cols="12">
                        <b-row>
                            <b-col
                                v-for="(group, idx) in toggleData"
                                :key="idx"
                                md="6"
                                xl="4"
                            >
                                <b-card class="equal-card" no-body>
                                    <b-card-header>
                                        <h5>{{
                                                group.type === 'radio' ? 'Radio Toggle Buttons' : 'Checkbox Toggle Buttons'
                                            }}</h5>
                                    </b-card-header>
                                    <b-card-body>
                                        <div class="d-flex flex-wrap gap-2">
                                            <template v-if="group.type === 'radio'">
                                                <b-form-radio
                                                    v-for="option in group.options"
                                                    :key="option.id"
                                                    :name="group.name"
                                                    :value="option.id"
                                                    v-model="selectedRadios[group.name]"
                                                    :disabled="option.disabled"
                                                    button
                                                    :button-variant="getButtonVariant(option.className)"
                                                >
                                                    {{ option.label }}
                                                </b-form-radio>
                                            </template>
                                            <template v-else>
                                                <b-form-checkbox
                                                    v-for="option in group.options"
                                                    :key="option.id"
                                                    :name="group.name"
                                                    v-model="selectedCheckboxes[option.id]"
                                                    :disabled="option.disabled"
                                                    button
                                                    :button-variant="getButtonVariant(option.className)"
                                                >
                                                    {{ option.label }}
                                                </b-form-checkbox>
                                            </template>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>
                    </b-col>


                    <b-col md="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Select group Checkbox With Icons</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="form-selectgroup">
                                    <div class="d-flex gap-2 flex-wrap">
                                        <label
                                            v-for="platform in platforms"
                                            :key="platform.key"
                                            class="d-flex align-items-center select-items"
                                        >
                                            <input
                                                type="checkbox"
                                                :checked="selectedPlatforms[platform.key]"
                                                @change="selectedPlatforms[platform.key] = !selectedPlatforms[platform.key]"
                                                class="me-2 select-input"
                                            />
                                            <span class="select-box">
                                                <span class="selectitem">
                                                    <component
                                                        v-if="platform.icon"
                                                        :is="platform.icon"
                                                        :size="18"
                                                        class="me-1"
                                                    />
                                                    <span v-else class="me-1">{{ platform.label.charAt(0) }}</span>
                                                    {{ platform.label }}
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col md="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Select group Radio With Icons</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="form-selectgroup">
                                    <div class="d-flex gap-2 flex-wrap">
                                        <label
                                            v-for="platform in radioPlatforms"
                                            :key="platform.value"
                                            class="d-flex align-items-center select-items"
                                        >
                                            <input
                                                type="radio"
                                                name="select-options"
                                                :value="platform.value"
                                                v-model="selectedOption"
                                                class="me-2 select-input"
                                            />
                                            <span class="select-box">
                                                <span class="selectitem">
                                                    <component
                                                        v-if="platform.icon"
                                                        :is="platform.icon"
                                                        :size="18"
                                                        class="me-1"
                                                    />
                                                    <span v-else class="me-1">{{ platform.label.charAt(0) }}</span>
                                                    {{ platform.label }}
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col md="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Images With Radio</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col
                                        v-for="item in radioImageOptions"
                                        :key="item.value"
                                        sm="6"
                                        xl="4"
                                    >
                                        <label class="form-checkimage d-block position-relative">
                                            <input
                                                type="radio"
                                                name="radioimage"
                                                :value="item.value"
                                                v-model="selectedImage"
                                                :disabled="item.disabled"
                                                class="checkimage-input position-absolute"
                                                style="opacity: 0;"
                                            />
                                            <span class="check-box radiobox d-block">
                                                <img
                                                    :src="item.src"
                                                    class="checkbox-image w-100"
                                                    :alt="item.alt"
                                                    :class="{ 'opacity-50': item.disabled }"
                                                />
                                            </span>
                                        </label>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Images with checkbox</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col
                                        v-for="item in checkboxImageOptions"
                                        :key="item.value"
                                        md="6"
                                        xl="4"
                                    >
                                        <label class="form-checkimage d-block position-relative">
                                            <input
                                                type="checkbox"
                                                :checked="selectedImages[item.value]"
                                                @change="handleImageCheckboxChange(item.value)"
                                                :disabled="item.disabled"
                                                class="checkimage-input position-absolute"
                                                style="opacity: 0;"
                                            />
                                            <span class="check-box d-block">
                                                <img
                                                    :src="item.src"
                                                    class="checkbox-image w-100"
                                                    :alt="item.alt"
                                                    :class="{ 'opacity-50': item.disabled }"
                                                />
                                            </span>
                                        </label>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <PaymentMethods/>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>