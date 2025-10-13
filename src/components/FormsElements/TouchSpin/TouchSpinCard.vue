<script setup>
import { BCard, BCardHeader, BCardBody, BRow, BCol, BButton, BFormInput, BInputGroup, BDropdown, BDropdownItem, BDropdownHeader, BDropdownDivider } from 'bootstrap-vue-next';

defineProps({
    title: String,
    counts: Array,
    colors: Array,
    variant: { type: String, default: 'button' },
    withDropdown: Boolean,
    dropdownOpen: Boolean,
    toggleDropdown: Function,
    updateCount: Function
});
</script>
<template>
    <b-card class="equal-card" no-body>
        <b-card-header>
            <h5>{{ title }}</h5>
        </b-card-header>
        <b-card-body>
            <b-row>
                <b-col
                    v-for="(count, i) in counts"
                    :key="i"
                    class="mt-2"
                >

                    <b-input-group v-if="variant === 'button'" class="simplespin">
                        <b-button
                            :variant="colors[i]"
                            class="circle-btn decrement"
                            @click="updateCount(i, -1)"
                        >
                            -
                        </b-button>
                        <b-form-input
                            v-model="counts[i]"
                            class="app-small-touchspin count p-2"
                            readonly
                        />
                        <b-button
                            :variant="colors[i]"
                            class="circle-btn increment"
                            @click="updateCount(i, 1)"
                        >
                            +
                        </b-button>
                    </b-input-group>


                    <div v-else-if="variant === 'anchor'" class="simplespin input-group">
                        <a
                            @click="updateCount(i, -1)"
                            class="circle-btn decrement cursor-pointer"
                        >-</a>
                        <b-form-input
                            type="text"
                            v-model="counts[i]"
                            readonly
                            class="form-control app-small-touchspin count"
                        />
                        <a
                            @click="updateCount(i, 1)"
                            class="circle-btn increment cursor-pointer"
                        >+</a>
                    </div>


                    <div
                        v-else-if="variant === 'custom'"
                        class="custom-touchspin d-flex align-items-center"
                    >
                        <button
                            type="button"
                            @click="updateCount(i, -1)"
                            :class="`touchspin-circle-btn btn-${colors[i]} text-white decrement`"
                        >-</button>
                        <b-form-input
                            type="text"
                            v-model="counts[i]"
                            readonly
                            class="form-control app-small-touchspin count mx-2 text-center"
                        />
                        <button
                            type="button"
                            @click="updateCount(i, 1)"
                            :class="`touchspin-circle-btn btn-${colors[i]} text-white increment`"
                        >+</button>
                    </div>


                    <div
                        v-else-if="variant === 'round'"
                        class="simplerounded d-flex"
                    >
                        <button
                            :class="`btn btn-${colors[i]} btn-left decrement`"
                            @click="updateCount(i, -1)"
                        >-</button>
                        <b-form-input
                            type="text"
                            v-model="counts[i]"
                            readonly
                            class="app-touchspin border-0 count text-center"
                        />
                        <button
                            :class="`btn btn-${colors[i]} btn-right increment`"
                            @click="updateCount(i, 1)"
                        >+</button>
                    </div>


                    <div
                        v-else-if="variant === 'round-alt'"
                        class="simplerounded d-flex"
                    >
                        <button
                            :class="`btn btn-${colors[i]} round decrement`"
                            @click="updateCount(i, -1)"
                        >-</button>
                        <b-form-input
                            type="text"
                            v-model="counts[i]"
                            readonly
                            class="app-touchspin border-0 count text-center"
                        />
                        <button
                            :class="`btn btn-${colors[i]} round increment`"
                            @click="updateCount(i, 1)"
                        >+</button>
                    </div>

                    <div
                        v-else-if="['default','horizontal'].includes(variant)"
                        class="d-flex"
                    >
                        <b-button
                            :variant="colors[i]"
                            :class="`btn-${colors[i]} b-r-0 decrement`"
                            @click="updateCount(i, -1)"
                        >-</b-button>
                        <b-form-input
                            type="text"
                            v-model="counts[i]"
                            readonly
                            class="form-control app-touchspin count"
                        />
                        <b-button
                            :variant="colors[i]"
                            :class="`btn-${colors[i]} b-r-0 increment`"
                            @click="updateCount(i, 1)"
                        >+</b-button>
                    </div>


                    <div v-else-if="variant === 'with-dropdown'" class="d-flex touchspin-with-dropdown">
                        <b-button
                            :variant="colors[i]"
                            class="b-r-0 decrement"
                            @click="updateCount(i, -1)"
                        >-</b-button>

                        <span class="input-group-text tochspin-pre-class text-light-secondary text-dark b-r-0">Pre</span>

                        <b-form-input
                            type="text"
                            v-model="counts[i]"
                            readonly
                            class="form-control app-touchspin count"
                        />

                        <span class="input-group-text tochspin-pre-class text-light-secondary text-dark b-r-0">Post</span>

                        <b-button
                            variant="secondary"
                            class="b-r-0 increment"
                            @click="updateCount(i, 1)"
                        >+</b-button>

                        <b-dropdown
                            v-if="withDropdown"
                            :show="dropdownOpen"
                            @toggle="toggleDropdown"
                        >
                            <template #button-content>Dropdown</template>
                            <b-dropdown-header>Actions</b-dropdown-header>
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                            <b-dropdown-divider />
                            <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </div>

                    <div v-else-if="variant === 'prefix-postfix'" class="d-flex touchspin-with-PostPre">
                        <b-button
                            :class="`btn-${colors[i]} b-r-0 decrement`"
                            @click="updateCount(i, -1)"
                        >-</b-button>
                        <span class="input-group-text b-r-0">#</span>
                        <b-form-input
                            type="text"
                            v-model="counts[i]"
                            readonly
                            class="form-control app-touchspin count"
                        />
                        <span class="input-group-text b-r-0">%</span>
                        <b-button
                            class="btn-secondary b-r-0 increment"
                            @click="updateCount(i, 1)"
                        >+</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>


