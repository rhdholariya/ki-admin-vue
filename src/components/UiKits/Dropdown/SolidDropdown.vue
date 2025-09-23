<script setup>
import {ref, onMounted, watch, nextTick} from "vue";
import {
    BCard,
    BCardBody,
    BCollapse,
    BDropdown,
    BDropdownItem,
    BDropdownDivider, BCol,
} from "bootstrap-vue-next";
import { PhCode } from "@phosphor-icons/vue";




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
    { label: "Action", value: "action" },
    { label: "Another action", value: "another-action" },
    { label: "Something else here", value: "something-else" },
    { label: "divider", value: "divider" },
    { label: "Separated link", value: "separated-link" },
];

const open = ref(false);
[open, open].forEach((state) => {
    watch(state, async (val) => {
        if (val) {
            await nextTick();
            Prism.highlightAll();
        }
    });
});
</script>

<template>
    <b-col lg="12">
        <b-card no-body>
            <template #header>
                <div class="code-header d-flex justify-content-between">
                    <h5 class="txt-ellipsis">Dropdown Color Variants</h5>
                    <a role="button" @click="open = !open">
                        <PhCode size="30" weight="bold" class="source" />
                    </a>
                </div>
            </template>

            <b-card-body class="d-flex flex-wrap gap-2">
                <b-dropdown
                    v-for="variant in variants"
                    :key="variant"
                    :variant="variant"
                    :text="variant.charAt(0).toUpperCase() + variant.slice(1)"
                    class="me-2"
                >
                    <template v-for="(option, i) in dropdownOptions" :key="i">
                        <b-dropdown-divider v-if="option.value === 'divider'" />
                        <b-dropdown-item v-else href="#">
                            {{ option.label }}
                        </b-dropdown-item>
                    </template>
                </b-dropdown>
            </b-card-body>

            <b-collapse v-model="open">
    <pre class="mt-3 language-html">
      <code class="language-html">
{{
              `&lt;b-card no-body&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Dropdown Color Variants&lt;/h5&gt;
  &lt;/template&gt;
  &lt;b-card-body&gt;
${variants
  .map(
    (variant) => `    &lt;b-dropdown text="${variant.charAt(0).toUpperCase() + variant.slice(1)}" variant="${variant}"&gt;
      &lt;b-dropdown-item href="#"&gt;Action&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item href="#"&gt;Another action&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item href="#"&gt;Something else here&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-divider /&gt;
      &lt;b-dropdown-item href="#"&gt;Separated link&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;`
  )
  .join("\n")}
  &lt;/b-card-body&gt;
&lt;/b-card&gt;`
}}
      </code>
    </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
