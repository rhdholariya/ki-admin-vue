<script setup>
import {ref} from "vue";
import {
    BCol,
    BCard,
    BCardBody,
    BCollapse,
    BDropdown,
    BDropdownItem,
    BDropdownDivider, BButton, BCardHeader,
} from "bootstrap-vue-next";
import {PhCode} from "@phosphor-icons/vue";
const variants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
];

const dropdownOptions = [
    {label: "Action", value: "action"},
    {label: "Another action", value: "another-action"},
    {label: "Something else here", value: "something-else"},
    {label: "divider", value: "divider"},
    {label: "Separated link", value: "separated-link"},
];
const open = ref(false);
const openLight = ref(false);

</script>

<template>
    <b-col lg="12">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5 class="txt-ellipsis">Dropdown Outline Variants</h5>
                    <b-button @click="open = !open" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
            </b-card-header>

            <b-card-body class="d-flex flex-wrap">
                <b-dropdown
                    v-for="variant in variants"
                    :key="variant"
                    split
                    :variant="`outline-${variant}`"
                    :split-variant="`outline-${variant}`"
                    :text="variant.charAt(0).toUpperCase() + variant.slice(1)"
                    class="m-2"
                >
                    <template v-for="(option, i) in dropdownOptions" :key="i">
                        <b-dropdown-divider v-if="option.value === 'divider'"/>
                        <b-dropdown-item v-else href="#">
                            {{ option.label }}
                        </b-dropdown-item>
                    </template>
                </b-dropdown>
            </b-card-body>

            <b-collapse v-model="open">
        <pre class="mt-3 language-html">
<code v-prism>

&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Dropdown Outline Variants&lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
        {{variants
    .map(
        (v) => `&lt;b-dropdown
    split
    variant="outline-${v}"
    split-variant="outline-${v}"
    text="${v.charAt(0).toUpperCase() + v.slice(1)}"
    class="m-2"&gt;
  &lt;b-dropdown-item href="/ui-kits/dropdown"&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href="/ui-kits/dropdown"&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href="/ui-kits/dropdown"&gt;Something else here&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider /&gt;
  &lt;b-dropdown-item href="/ui-kits/dropdown"&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;`
    )
    .join('\n')}}
  &lt;/b-card-body&gt;
&lt;/b-card&gt;

</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>
    <b-col lg="12">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5 class="txt-ellipsis">Dropdown Light Variants</h5>
                    <b-button @click="openLight = !openLight" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body class="d-flex flex-wrap">
                <b-dropdown
                    v-for="variant in variants"
                    :key="variant"
                    split
                    :variant="`light-${variant}`"
                    :split-variant="`light-${variant}`"
                    :text="variant.charAt(0).toUpperCase() + variant.slice(1)"
                    class="m-2"
                >
                    <template v-for="(option, i) in dropdownOptions" :key="i">
                        <b-dropdown-divider v-if="option.value === 'divider'"/>
                        <b-dropdown-item v-else href="#">
                            {{ option.label }}
                        </b-dropdown-item>
                    </template>
                </b-dropdown>
            </b-card-body>

            <b-collapse v-model="openLight">
        <pre class="mt-3 language-html">
<code v-prism>

&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Dropdown Light Variants&lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
        {{variants
    .map(
        (v) => `&lt;b-dropdown
    split
    variant="outline-${v}"
    split-variant="outline-${v}"
    text="${v.charAt(0).toUpperCase() + v.slice(1)}"
    class="m-2"&gt;
  &lt;b-dropdown-item href="/ui-kits/dropdown"&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href="/ui-kits/dropdown"&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href="/ui-kits/dropdown"&gt;Something else here&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider /&gt;
  &lt;b-dropdown-item href="/ui-kits/dropdown"&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;`
    )
    .join('\n')}}
  &lt;/b-card-body&gt;
&lt;/b-card&gt;`

</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>

</template>
