<!--<script setup>-->
<!--import {-->
<!--    PhArrowUp,-->
<!--    PhArrowRight,-->
<!--    PhArrowLeft,-->
<!--    PhArrowDown-->
<!--} from "@phosphor-icons/vue";-->

<!--// Dropdown configurations-->
<!--const dropdowns = [-->

<!--    {-->
<!--        label: "Split dropup",-->
<!--        variant: "secondary",-->
<!--        direction: "up",-->
<!--        split: true,-->
<!--        icon: PhArrowUp-->
<!--    },-->

<!--    {-->
<!--        label: "Split dropend",-->
<!--        variant: "danger",-->
<!--        direction: "end",-->
<!--        split: true,-->
<!--        icon: PhArrowRight-->
<!--    },-->
<!--    {-->
<!--        label: "Dropstart",-->
<!--        variant: "warning",-->
<!--        direction: "start",-->
<!--        split: false,-->
<!--        icon: PhArrowLeft-->
<!--    },-->
<!--    {-->
<!--        label: "Split dropstart",-->
<!--        variant: "info",-->
<!--        direction: "start",-->
<!--        split: true,-->
<!--        icon: PhArrowLeft-->
<!--    },-->

<!--    {-->
<!--        label: "Split dropup",-->
<!--        variant: "dark",-->
<!--        direction: "up",-->
<!--        split: true,-->
<!--        icon: PhArrowDown-->
<!--    },-->
<!--];-->

<!--// Dropdown items-->
<!--const dropdownItems = [-->
<!--    { label: "Action" },-->
<!--    { label: "Another action" },-->
<!--    { label: "Something else here" },-->
<!--    { divider: true },-->
<!--    { label: "Separated link" }-->
<!--];-->
<!--</script>-->

<!--<template>-->
<!--    <div class="card">-->
<!--        <div class="card-header code-header">-->
<!--            <h5>Dropup Variation</h5>-->
<!--        </div>-->
<!--        <div class="card-body d-flex flex-wrap gap-2">-->
<!--            <div-->
<!--                v-for="(dd, index) in dropdowns"-->
<!--                :key="index"-->
<!--                :class="['btn-group', dd.split ? 'btn-rtl' : '', 'dropdown-light', `drop${dd.direction}`]"-->
<!--            >-->
<!--                &lt;!&ndash; Normal dropdown button &ndash;&gt;-->
<!--                <button-->
<!--                    v-if="!dd.split"-->
<!--                    :class="['btn', `btn-light-${dd.variant}`, 'dropdown-toggle']"-->
<!--                    type="button"-->
<!--                    data-bs-toggle="dropdown"-->
<!--                    aria-expanded="false"-->
<!--                >-->
<!--                    {{ dd.label }}-->
<!--                    <component :is="dd.icon" size="16" class="ms-1" />-->
<!--                </button>-->

<!--                &lt;!&ndash; Split dropdown button &ndash;&gt;-->
<!--                <template v-else>-->
<!--                    <button :class="['btn', `btn-light-${dd.variant}`]" type="button">-->
<!--                        {{ dd.label }}-->
<!--                    </button>-->
<!--                    <button-->
<!--                        :class="['btn', `btn-light-${dd.variant}`, 'dropdown-toggle', 'dropdown-toggle-split']"-->
<!--                        type="button"-->
<!--                        data-bs-toggle="dropdown"-->
<!--                        aria-expanded="false"-->
<!--                    >-->
<!--                        <span class="visually-hidden">Toggle Dropdown</span>-->
<!--                        <component :is="dd.icon" size="16" />-->
<!--                    </button>-->
<!--                </template>-->

<!--                &lt;!&ndash; Dropdown menu &ndash;&gt;-->
<!--                <ul class="dropdown-menu">-->
<!--                    <template v-for="(item, iIndex) in dropdownItems" :key="iIndex">-->
<!--                        <li v-if="item.divider"><hr class="dropdown-divider" /></li>-->
<!--                        <li v-else>-->
<!--                            <a class="dropdown-item" href="#">{{ item.label }}</a>-->
<!--                        </li>-->
<!--                    </template>-->
<!--                </ul>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->
