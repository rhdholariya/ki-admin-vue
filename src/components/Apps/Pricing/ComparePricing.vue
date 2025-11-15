<script setup>
import {
    BContainer,
    BTable
} from 'bootstrap-vue-next'
import {PhCheckCircle, PhXCircle} from '@phosphor-icons/vue'

const plans = [
    {name: "Free", features: ["check", "x", "check", "x", "x", "x"]},
    {name: "Pro", features: ["check", "check", "check", "check", "check", "x"]},
    {name: "Enterprise", features: ["check", "check", "check", "check", "check", "check"]},
]

const featureList = [
    "Public",
    "Private",
    "Permissions",
    "Sharing",
    "Unlimited members",
    "Extra security",
]

const tableFields = [
    {key: 'feature', label: '', thClass: 'text-start fw-semibold', tdClass: 'text-start'},
    ...plans.map(plan => ({
        key: plan.name.toLowerCase(),
        label: plan.name,
        thClass: 'text-center',
        tdClass: 'text-center'
    }))
]

const tableItems = featureList.map((feature, fIndex) => {
    const item = {feature}
    plans.forEach(plan => {
        item[plan.name.toLowerCase()] = plan.features[fIndex]
    })
    return item
})
</script>

<template>
    <b-container fluid class="pricing-table">
        <b-table
            :items="tableItems"
            :fields="tableFields"
            responsive
            borderless
            striped
            class="table-bottom-border table-striped align-middle mb-0"
            thead-class="text-center"
        >
            <template #cell(feature)="data">
                <span class="fw-semibold">{{ data.value }}</span>
            </template>

            <template
                v-for="plan in plans"
                :key="plan.name"
                #[`cell(${plan.name.toLowerCase()})`]="data"
            >
                <PhCheckCircle
                    v-if="data.value === 'check'"
                    size="20"
                    weight="duotone"
                    class="text-success"
                />
                <PhXCircle
                    v-else
                    size="20"
                    weight="duotone"
                    class="text-danger"
                />
            </template>
        </b-table>
    </b-container>
</template>
