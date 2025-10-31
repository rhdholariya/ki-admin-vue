<script setup>
import {ref, computed} from 'vue'
import {
    BContainer,
    BRow,
    BCard,
    BCol,
    BCardHeader,
    BCardBody,
    BListGroup,
    BListGroupItem,
    BFormInput,
    BButton
} from 'bootstrap-vue-next'
import AppLayout from "@/views/AppLayout.vue"
import {options, options2} from "@/data/formelements/DuelListBox/DuelListBox.js"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhCardholder} from "@phosphor-icons/vue";

const selected1 = ref([])
const selected2 = ref([])
const selected3 = ref([])
const selected4 = ref([])

const availableFilter1 = ref('')
const selectedFilter1 = ref('')
const availableFilter2 = ref('')
const selectedFilter2 = ref('')
const availableFilter3 = ref('')
const selectedFilter3 = ref('')
const availableFilter4 = ref('')
const selectedFilter4 = ref('')

const canFilter = true

const lang = {
    availableHeader: 'Available options',
    selectedHeader: 'Selected options'
}

const icons = {
    moveAllToSelected: 'Add All',
    moveToSelected: 'Add',
    moveToAvailable: 'Remove',
    moveAllToAvailable: 'Remove All'
}

const filteredAvailable1 = computed(() => {
    return options.filter(opt =>
        opt.label.toLowerCase().includes(availableFilter1.value.toLowerCase()) &&
        !selected1.value.includes(opt.value)
    )
})

const filteredSelected1 = computed(() => {
    return options.filter(opt =>
        selected1.value.includes(opt.value) &&
        opt.label.toLowerCase().includes(selectedFilter1.value.toLowerCase())
    )
})

const filteredAvailable2 = computed(() => {
    return options.filter(opt =>
        opt.label.toLowerCase().includes(availableFilter2.value.toLowerCase()) &&
        !selected2.value.includes(opt.value)
    )
})

const filteredSelected2 = computed(() => {
    return options.filter(opt =>
        selected2.value.includes(opt.value) &&
        opt.label.toLowerCase().includes(selectedFilter2.value.toLowerCase())
    )
})

const filteredAvailable3 = computed(() => {
    return options.filter(opt =>
        opt.label.toLowerCase().includes(availableFilter3.value.toLowerCase()) &&
        !selected3.value.includes(opt.value)
    )
})

const filteredSelected3 = computed(() => {
    return options.filter(opt =>
        selected3.value.includes(opt.value) &&
        opt.label.toLowerCase().includes(selectedFilter3.value.toLowerCase())
    )
})

const filteredAvailable4 = computed(() => {
    return options2.filter(opt =>
        opt.label.toLowerCase().includes(availableFilter4.value.toLowerCase()) &&
        !selected4.value.includes(opt.value)
    )
})

const filteredSelected4 = computed(() => {
    return options2.filter(opt =>
        selected4.value.includes(opt.value) &&
        opt.label.toLowerCase().includes(selectedFilter4.value.toLowerCase())
    )
})

const selectedElementsDisplay = computed(() => {
    const labels = selected2.value.map(val => {
        const option = options.find(opt => opt.value === val)
        return option ? option.label : val
    })
    return labels.length > 0 ? labels.join(', ') : 'Nothing yet'
})

const addToSelected = (value, listIndex) => {
    if (!value) return

    const selected = getSelectedArray(listIndex)
    if (!selected.value.includes(value)) {
        selected.value.push(value)
    }
}

const removeFromSelected = (value, listIndex) => {
    if (!value) return

    const selected = getSelectedArray(listIndex)
    const index = selected.value.indexOf(value)
    if (index > -1) {
        selected.value.splice(index, 1)
    }
}

const addAllToSelected = (listIndex) => {
    const selected = getSelectedArray(listIndex)
    const available = getAvailableOptions(listIndex)
    selected.value = [...selected.value, ...available.value.map(opt => opt.value)]
}

const removeAllFromSelected = (listIndex) => {
    const selected = getSelectedArray(listIndex)
    selected.value = []
}

const addFirstToSelected = (listIndex) => {
    const firstAvailable = getFirstAvailable(listIndex)
    if (firstAvailable) {
        addToSelected(firstAvailable, listIndex)
    }
}

const removeFirstFromSelected = (listIndex) => {
    const firstSelected = getFirstSelected(listIndex)
    if (firstSelected) {
        removeFromSelected(firstSelected, listIndex)
    }
}

const getFirstAvailable = (listIndex) => {
    const available = getAvailableOptions(listIndex)
    return available.value.length > 0 ? available.value[0].value : null
}

const getFirstSelected = (listIndex) => {
    const selected = getSelectedArray(listIndex)
    return selected.value.length > 0 ? selected.value[0] : null
}

const isSelected = (value, listIndex) => {
    const selected = getSelectedArray(listIndex)
    return selected.value.includes(value)
}

const moveUp = (listIndex) => {
    const selected = getSelectedArray(listIndex)
    if (selected.value.length > 0) {
        const currentIndex = 0;
        if (currentIndex > 0) {
            const temp = selected.value[currentIndex]
            selected.value[currentIndex] = selected.value[currentIndex - 1]
            selected.value[currentIndex - 1] = temp
        }
    }
}

const moveDown = (listIndex) => {
    const selected = getSelectedArray(listIndex)
    if (selected.value.length > 0) {
        const currentIndex = 0; // You can enhance this to track current selection
        if (currentIndex < selected.value.length - 1) {
            const temp = selected.value[currentIndex]
            selected.value[currentIndex] = selected.value[currentIndex + 1]
            selected.value[currentIndex + 1] = temp
        }
    }
}

const getSelectedArray = (listIndex) => {
    switch (listIndex) {
        case 1:
            return selected1
        case 2:
            return selected2
        case 3:
            return selected3
        case 4:
            return selected4
        default:
            return selected1
    }
}

const getAvailableOptions = (listIndex) => {
    switch (listIndex) {
        case 1:
            return filteredAvailable1
        case 2:
            return filteredAvailable2
        case 3:
            return filteredAvailable3
        case 4:
            return filteredAvailable4
        default:
            return filteredAvailable1
    }
}

const breadcrumbItems = {
    title: "Dual Listboxes",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Dual Listboxes", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>
                    <b-col xxl="6" class="mb-4">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header">
                                    <h5>Select by class</h5>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <div class="w-100">
                                    <div
                                        class="d-flex flex-md-row flex-column align-items-center flex-wrap gap-2 gap-md-3 dual-listbox">
                                        <div class="listbox-section">
                                            <h6>{{ lang.availableHeader }}</h6>
                                            <b-form-input
                                                v-if="canFilter"
                                                v-model="availableFilter1"
                                                placeholder="Filter available options..."
                                                class="mb-2"
                                            />
                                            <b-list-group class="listbox-group">
                                                <b-list-group-item
                                                    v-for="option in filteredAvailable1"
                                                    :key="option.value"
                                                    @click="addToSelected(option.value, 1)"
                                                    class="listbox-item"
                                                    :class="{ 'active': isSelected(option.value, 1) }"
                                                >
                                                    {{ option.label }}
                                                </b-list-group-item>
                                            </b-list-group>
                                        </div>

                                        <div
                                            class="d-flex flex-column justify-content-center flex-md-column gap-1 gap-md-2 order-2 order-md-0 ">
                                            <b-button @click="addAllToSelected(1)" size="sm" variant="primary">
                                                {{ icons.moveAllToSelected }}
                                            </b-button>
                                            <b-button @click="addFirstToSelected(1)" size="sm" variant="primary">
                                                {{ icons.moveToSelected }}
                                            </b-button>
                                            <b-button @click="removeFirstFromSelected(1)" size="sm" variant="primary">
                                                {{ icons.moveToAvailable }}
                                            </b-button>
                                            <b-button @click="removeAllFromSelected(1)" size="sm" variant="primary">
                                                {{ icons.moveAllToAvailable }}
                                            </b-button>
                                        </div>

                                        <div class="listbox-section">
                                            <h6>{{ lang.selectedHeader }}</h6>
                                            <b-form-input
                                                v-if="canFilter"
                                                v-model="selectedFilter1"
                                                placeholder="Filter selected options..."
                                                class="mb-2"
                                            />
                                            <b-list-group class="listbox-group">
                                                <b-list-group-item
                                                    v-for="option in filteredSelected1"
                                                    :key="option.value"
                                                    @click="removeFromSelected(option.value, 1)"
                                                    class="listbox-item"
                                                    :class="{ 'active': isSelected(option.value, 1) }"
                                                >
                                                    {{ option.label }}
                                                </b-list-group-item>
                                            </b-list-group>
                                        </div>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col xxl="6" class="mb-4">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Add options and add eventListeners</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="selected-element d-flex flex-wrap mb-3 f-w-600">
                                    <label class="me-2">Selected element:</label>
                                    <ul class="changed-element text-primary mb-0">
                                        <li>{{ selectedElementsDisplay }}</li>
                                    </ul>
                                </div>
                                <div class="w-100">
                                    <div
                                        class="d-flex flex-md-row flex-column align-items-center flex-wrap gap-2 gap-md-3 dual-listbox">
                                        <div class="listbox-section">
                                            <h6>Available options</h6>
                                            <b-form-input
                                                v-model="availableFilter2"
                                                placeholder="Filter available options..."
                                                class="mb-2"
                                            />
                                            <b-list-group class="listbox-group">
                                                <b-list-group-item
                                                    v-for="option in filteredAvailable2"
                                                    :key="option.value"
                                                    @click="addToSelected(option.value, 2)"
                                                    class="listbox-item"
                                                    :class="{ 'active': isSelected(option.value, 2) }"
                                                >
                                                    {{ option.label }}
                                                </b-list-group-item>
                                            </b-list-group>
                                        </div>

                                        <div
                                            class="d-flex flex-column justify-content-center flex-md-column gap-1 gap-md-2 order-2 order-md-0 ">
                                            <b-button @click="addAllToSelected(2)" size="sm" variant="primary">>>
                                            </b-button>
                                            <b-button @click="addFirstToSelected(2)" size="sm" variant="primary">>
                                            </b-button>
                                            <b-button @click="removeFirstFromSelected(2)" size="sm" variant="primary">
                                                <
                                            </b-button>
                                            <b-button @click="removeAllFromSelected(2)" size="sm" variant="primary"><<
                                            </b-button>
                                        </div>

                                        <div class="listbox-section">
                                            <h6>Selected options</h6>
                                            <b-form-input
                                                v-model="selectedFilter2"
                                                placeholder="Filter selected options..."
                                                class="mb-2"
                                            />
                                            <b-list-group class="listbox-group">
                                                <b-list-group-item
                                                    v-for="option in filteredSelected2"
                                                    :key="option.value"
                                                    @click="removeFromSelected(option.value, 2)"
                                                    class="listbox-item"
                                                    :class="{ 'active': isSelected(option.value, 2) }"
                                                >
                                                    {{ option.label }}
                                                </b-list-group-item>
                                            </b-list-group>
                                        </div>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col xxl="6" class="mb-4">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Remove all the buttons from being rendered.</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="w-100 custom-dual-listbox">
                                    <div
                                        class="d-flex flex-md-row flex-column align-items-center flex-wrap gap-2 gap-md-3 dual-listbox">
                                        <div class="listbox-section">
                                            <h6>Available options</h6>
                                            <b-form-input
                                                v-model="availableFilter3"
                                                placeholder="Filter available options..."
                                                class="mb-2"
                                            />
                                            <b-list-group class="listbox-group">
                                                <b-list-group-item
                                                    v-for="option in filteredAvailable3"
                                                    :key="option.value"
                                                    @click="addToSelected(option.value, 3)"
                                                    class="listbox-item"
                                                    :class="{ 'active': isSelected(option.value, 3) }"
                                                >
                                                    {{ option.label }}
                                                </b-list-group-item>
                                            </b-list-group>
                                        </div>

                                        <div class="listbox-section">
                                            <h6>Selected options</h6>
                                            <b-form-input
                                                v-model="selectedFilter3"
                                                placeholder="Filter selected options..."
                                                class="mb-2"
                                            />
                                            <b-list-group class="listbox-group">
                                                <b-list-group-item
                                                    v-for="option in filteredSelected3"
                                                    :key="option.value"
                                                    @click="removeFromSelected(option.value, 3)"
                                                    class="listbox-item"
                                                    :class="{ 'active': isSelected(option.value, 3) }"
                                                >
                                                    {{ option.label }}
                                                </b-list-group-item>
                                            </b-list-group>
                                        </div>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col xxl="6" class="mb-4">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Show the sort buttons</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="w-100">
                                    <div
                                        class="d-flex flex-md-row flex-column align-items-center flex-wrap gap-2 gap-md-3 dual-listbox">
                                        <div class="listbox-section">
                                            <h6>Available options</h6>
                                            <b-form-input
                                                v-model="availableFilter4"
                                                placeholder="Filter available options..."
                                                class="mb-2"
                                            />
                                            <b-list-group class="listbox-group">
                                                <b-list-group-item
                                                    v-for="option in filteredAvailable4"
                                                    :key="option.value"
                                                    @click="addToSelected(option.value, 4)"
                                                    class="listbox-item"
                                                    :class="{ 'active': isSelected(option.value, 4) }"
                                                >
                                                    {{ option.label }}
                                                </b-list-group-item>
                                            </b-list-group>
                                        </div>

                                        <div
                                            class="d-flex flex-column justify-content-center flex-md-column gap-1 gap-md-2 order-2 order-md-0 ">
                                            <b-button @click="addAllToSelected(4)" size="sm" variant="primary">Add All
                                            </b-button>
                                            <b-button @click="addFirstToSelected(4)" size="sm" variant="primary">Add
                                            </b-button>
                                            <b-button @click="removeFirstFromSelected(4)" size="sm" variant="primary">
                                                Remove
                                            </b-button>
                                            <b-button @click="removeAllFromSelected(4)" size="sm" variant="primary">
                                                Remove All
                                            </b-button>
                                            <b-button @click="moveUp(4)" size="sm" variant="primary">↑</b-button>
                                            <b-button @click="moveDown(4)" size="sm" variant="primary">↓</b-button>

                                        </div>

                                        <div class="listbox-section">
                                            <h6>Selected options</h6>
                                            <b-form-input
                                                v-model="selectedFilter4"
                                                placeholder="Filter selected options..."
                                                class="mb-2"
                                            />
                                            <b-list-group class="listbox-group">
                                                <b-list-group-item
                                                    v-for="option in filteredSelected4"
                                                    :key="option.value"
                                                    @click="removeFromSelected(option.value, 4)"
                                                    class="listbox-item"
                                                    :class="{ 'active': isSelected(option.value, 4) }"
                                                >
                                                    {{ option.label }}
                                                </b-list-group-item>
                                            </b-list-group>
                                        </div>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>


