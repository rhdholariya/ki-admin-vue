<script setup>
import { ref, onMounted } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import {BCard, BCardBody, BCardHeader, BCol, BRow} from "bootstrap-vue-next";

// State
const isMounted = ref(false)
const isDisable = ref(false)
const selectedDark = ref([])
const selectedOptions = ref([])

// Options data
const colourOptions = [
    { value: 'orange', label: 'Orange' },
    { value: 'purple', label: 'Purple' },
    { value: 'white', label: 'White' }
]

const selectOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'WD', label: 'Coming' },
    { value: 'AF', label: 'Hanry Die' },
    { value: 'TU', label: 'John Doe' }
]

const options = [
    { value: 'AL', label: 'Alabama' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'WD', label: 'Coming' },
    { value: 'AF', label: 'Hanry Die' },
    { value: 'TU', label: 'John Doe' }
]

// Methods
const handleChange = (selected) => {
    if (selected && selected.length <= 3) {
        selectedOptions.value = selected
    }
}

// Mounted
onMounted(() => {
    isMounted.value = true
    selectedDark.value = selectOptions.filter((opt) => ['AL', 'WY'].includes(opt.value))
})
</script>

<template>
    <div v-if="!isMounted">Loading...</div>
    <b-row v-else>
        <b-row>
            <b-col xl="12">
                <b-card no-body>
                    <b-card-header>
                        <h5>Advanced Select2 Examples</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-row class=" app-form">
                            <!-- Basic -->
                            <b-col md="6" xl="4" class="mt-4">
                                <label class="form-label">Basic</label>
                                <v-select
                                    :options="selectOptions"
                                    placeholder="Select an option"
                                    class=""
                                />
                            </b-col>

                            <!-- Multiple -->
                            <b-col md="6" xl="4" class="mt-4">
                                <label class="form-label">Multiple</label>
                                <v-select
                                    multiple
                                    :options="colourOptions"
                                    :model-value="[colourOptions[0], colourOptions[1]]"
                                    placeholder="Select options"
                                    class="select-1"
                                />
                            </b-col>

                            <!-- Disabled -->
                            <b-col md="6" xl="4" class="mt-4">
                                <label class="form-label">Disabled</label>
                                <v-select
                                    multiple
                                    :options="selectOptions"
                                    :model-value="selectedDark"
                                    disabled
                                    class="w-100"
                                />
                            </b-col>

                            <!-- Icon Options -->
                            <b-col md="6" xl="4" class="mt-4">
                                <label class="form-label">Icon Options</label>
                                <v-select
                                    :options="[
                    { value: 'ti-brand-html5', label: 'HTML5' },
                    { value: 'ti-brand-codepen', label: 'Codepen' }
                  ]"
                                    :model-value="{ value: 'ti-brand-html5', label: 'HTML5' }"
                                    placeholder="Select icon"
                                    class="select2-icon"
                                />
                            </b-col>

                            <!-- Limit Selections -->
                            <b-col md="6" xl="4" >
                                <div class="mt-4">
                                    <label class="form-label">Limit The Number Of Selections (max 3)</label>
                                    <v-select
                                        multiple
                                        :options="options"
                                        :model-value="selectedOptions"
                                        @update:model-value="handleChange"
                                        placeholder="Select up to 3 options"
                                        class="select-basic-multiple-four w-100"
                                    />
                                </div>
                            </b-col>

                            <!-- RTL Support -->
                            <b-col md="6" xl="4" class="mt-4">
                                <label class="form-label">RTL Support</label>
                                <v-select
                                    multiple
                                    :options="selectOptions"
                                    class="w-100"
                                    dir="rtl"
                                />
                            </b-col>

                            <!-- Disable Results -->
                            <b-col md="6" xl="4" class="mt-4">
                                <label class="form-label">Disable Results</label>
                                <v-select
                                    multiple
                                    :options="[
                    { value: 'AL', label: 'Alabama' },
                    {
                      value: 'WY',
                      label: 'Wyoming (disabled)',
                      disabled: true
                    },
                    { value: 'WD', label: 'Coming' }
                  ]"
                                    placeholder="Select..."
                                    class="w-100"
                                />
                            </b-col>

                            <!-- Flags -->
                            <b-col md="6" xl="4" class="mt-4">
                                <label class="form-label">Flags</label>
                                <v-select
                                    multiple
                                    :options="[
                    { value: '🇮🇳', label: 'India' },
                    { value: '🇦🇼', label: 'Aruba' }
                  ]"
                                    class="w-100"
                                >
                                    <template #option="option">
                                        <div class="d-flex gap-3 align-items-center">
                                            <span>{{ option.value }}</span> {{ option.label }}
                                        </div>
                                    </template>
                                </v-select>
                            </b-col>

                            <!-- Enable / Disable -->
                            <b-col md="6" xl="4" class="mt-4">
                                <label class="form-label">Enable / Disable</label>
                                <v-select
                                    :disabled="isDisable"
                                    :options="selectOptions"
                                    :model-value="selectOptions[0]"
                                    class="w-100"
                                />
                                <div class="text-end mt-2">
                                    <button
                                        class="btn btn-primary me-2"
                                        @click="isDisable = false"
                                    >
                                        Enable
                                    </button>
                                    <button
                                        class="btn btn-secondary"
                                        @click="isDisable = true"
                                    >
                                        Disable
                                    </button>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-row>
</template>