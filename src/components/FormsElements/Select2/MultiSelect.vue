<script setup>
import { ref, watch } from 'vue'


const props = defineProps({
    label: { type: String, required: true },
    id: { type: String, required: true },
    wrapperClassName: { type: String, default: '' },
    modelValue: { type: Array, default: () => [] },
    options: { type: Array, default: () => [] },
    placeholder: { type: String, default: 'Select...' },
})

const emit = defineEmits(['update:modelValue'])
const internalValue = ref(props.modelValue)

watch(internalValue, (val) => {
    emit('update:modelValue', val)
})
watch(() => props.modelValue, (val) => {
    internalValue.value = val
})
</script>
<template>
    <div :class="wrapperClassName">
        <label :for="id" class="form-label">{{ label }}</label>
        <v-select
            :id="id"
            v-model="internalValue"
            :options="options"
            multiple
            class="select-1"
            :class="['custom-select']"
            :menu-should-block-scroll="true"
            :placeholder="placeholder"
        />
    </div>
</template>
