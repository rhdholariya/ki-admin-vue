<script setup>
import {ref, onMounted} from "vue";
import {
    BCard,
    BCardBody,
    BCollapse,
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
} from "bootstrap-vue-next";
import {PhCode} from "@phosphor-icons/vue";


const open = ref(false);

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

onMounted(() => {
    Prism.highlightAll();
});
</script>

<template>
    <div class="col-12">
        <b-card no-body>
            <!-- Header -->
            <template #header>
                <div class="code-header d-flex justify-content-between">
                    <h5 class="txt-ellipsis">Split Dropdown No Padding</h5>
                    <a role="button" @click="open = !open">
                        <PhCode size="30" weight="bold" class="source"/>
                    </a>
                </div>
            </template>

            <!-- UI Example -->
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

            <!-- PrismJS Code Example -->
            <b-collapse v-model="open">
        <pre class="mt-3 language-html">
<code class="language-html">

{{`&lt;b-card no-body&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Split Dropdown No Padding&lt;/h5&gt;
  &lt;/template&gt;
  &lt;b-card-body&gt;
        ${variants
            .map(
                (v) => `&lt;b-dropdown
    split
    variant="outline-${v}"
    split-variant="outline-${v}"
    text="${v.charAt(0).toUpperCase() + v.slice(1)}"
    class="m-2"&gt;
  &lt;b-dropdown-item href="#"&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href="#"&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href="#"&gt;Something else here&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider /&gt;
  &lt;b-dropdown-item href="#"&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;`
            )
            .join('\n')}
  &lt;/b-card-body&gt;
&lt;/b-card&gt;`
    }}
</code>
        </pre>
            </b-collapse>
        </b-card>
    </div>
</template>
