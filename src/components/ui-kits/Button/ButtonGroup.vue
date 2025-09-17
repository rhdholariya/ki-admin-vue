<script setup>
import { ref, onMounted } from "vue";
import {
    BCard,
    BCol,
    BRow,
    BButton,
    BButtonGroup,
    BCollapse,
    BDropdown,
    BDropdownItem, BCardBody,
} from "bootstrap-vue-next";
import { PhCode } from "@phosphor-icons/vue";


// Data for groups
const buttonGroupData = [
    {
        className: "secondary",
        active: true,
        links: ["Active link", "Link", "Link"],
    },
    {
        className: "outline-secondary",
        active: false,
        links: ["Active link", "Link", "Link"],
    },
    {
        className: "light-secondary",
        active: true,
        links: ["Active link", "Link", "Link"],
    },
];

const sizes = [
    {
        sizeClass: "btn-group-lg",
        ariaLabel: "Large button group",
        btnClass: "outline-primary",
    },
    {
        sizeClass: "",
        ariaLabel: "Default button group",
        btnClass: "outline-secondary",
    },
    {
        sizeClass: "btn-group-sm",
        ariaLabel: "Small button group",
        btnClass: "outline-success",
    },
];



// Variants list (aap apne design ke hisaab se customize kar sakte ho)
const nestedVariants = [
    { label: "secondary", variant: "secondary" },
    { label: "secondary", variant: "outline-secondary" },
    { label: "secondary", variant: "light-secondary" },
];

const checkboxItems = [
    { id: "btncheck1", label: "Checkbox 1" },
    { id: "btncheck2", label: "Checkbox 2" },
    { id: "btncheck3", label: "Checkbox 3" },
];

const radioItems = [
    { id: "btnradio1", label: "Radio 1" },
    { id: "btnradio2", label: "Radio 2" },
    { id: "btnradio3", label: "Radio 3" },
];

const verticalGroups = [
    {
        className: "secondary",
        buttons: ["Button", "Button", "Button"],
    },
    {
        className: "outline-secondary",
        buttons: ["Button", "Button", "Button"],
    },
    {
        className: "light-secondary",
        buttons: ["Button", "Button", "Button"],
    },
];

const radioVerticals = [
    { id: "vbtn-radio1", label: "Radio 1" },
    { id: "vbtn-radio2", label: "Radio 2" },
    { id: "vbtn-radio3", label: "Radio 3" },
];

// collapse toggles
const openGroup = ref(false);
const openGroup2 = ref(false);
const openNesting = ref(false);
const openToggle = ref(false);
const openVertical = ref(false);

onMounted(() => {
    Prism.highlightAll();
});
</script>

<template>
    <b-row>
        <!-- Button Group Variants -->
        <b-col lg="6" class="mb-4">
            <b-card no-body>
                <template #header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Button Group</h5>
                        <a href="javascript:void(0)" @click="openGroup = !openGroup">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                    </div>
                </template>
                    <b-card-body>
                <b-row>
                    <b-col
                        v-for="(group, idx) in buttonGroupData"
                        :key="idx"
                        cols="12"
                        class="mb-3"
                    >
                        <b-button-group>
                            <b-button
                                v-for="(link, linkIdx) in group.links"
                                :key="linkIdx"
                                :variant="group.className"
                                :active="group.active && linkIdx === 0"
                            >
                                {{ link }}
                            </b-button>
                        </b-button-group>
                    </b-col>
                </b-row>

                <b-collapse v-model="openGroup" class="mt-3">
          <pre class="language-html"><code>
              &lt;b-card no-body&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Button Group&lt;/h5&gt;
  &lt;/template&gt;
              &lt;b-card no-body&gt;
{{ `&lt;b-row&gt;
${buttonGroupData.map(group =>
  `  &lt;b-col cols="12" class="mb-3"&gt;
    &ltb-button-group&gt
${group.links.map((link, idx) =>
  `       &lt;b-button variant="${group.className}"${group.active && idx===0 ? " active" : ""}>${link}&lt;/b-button&gt;`
).join("\n")}
    &lt;/b-button-group&gt;
   &lt;/b-col&gt;`
).join("\n")}
&lt;/
&lt;/b-card-body&gt;b-row&gt;` }}
  &lt;/b-card&gt;
</code></pre>
                </b-collapse>
                        </b-card-body>
            </b-card>

        </b-col>

        <!-- Sizes -->
        <b-col lg="6" class="mb-4">
            <b-card no-body>
                <template #header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Sizes</h5>
                        <a href="javascript:void(0)" @click="openGroup2 = !openGroup2">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                    </div>
                </template>
                  <b-card-body>
                <b-row>
                    <b-col v-for="(size, idx) in sizes" :key="idx" cols="12" class="mb-3">
                        <div
                            :class="['btn-group', size.sizeClass]"
                            role="group"
                            :aria-label="size.ariaLabel"
                        >
                            <b-button
                                v-for="(label, i) in ['Left','Middle','Right']"
                                :key="i"
                                :variant="size.btnClass"
                            >
                                {{ label }}
                            </b-button>
                        </div>
                    </b-col>
                </b-row>

                <b-collapse v-model="openGroup2" class="mt-3">
          <pre class="language-html"><code>
               &lt;b-card no-body&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Sizes&lt;/h5&gt;
  &lt;/template&gt;
              &lt;b-card no-body&gt;
{{ `&lt;b-row>
${sizes.map(size =>
  `  &lt;b-col cols="12" class="mb-3"&gt;
    &lt;div class="btn-group ${size.sizeClass}" role="group" aria-label="${size.ariaLabel}"&gt;
      &lt;b-button variant="${size.btnClass}">Left&lt;/b-button&gt;
      &lt;b-button variant="${size.btnClass}">Middle&lt;/b-button&gt;
      &lt;b-button variant="${size.btnClass}">Right&lt;/b-button&gt;
    &lt;/div&gt;
  &lt;/b-col&gt;`
).join("\n")}
&lt;/b-row&gt;` }}
              &lt;/b-card-body&gt;
               &lt;/b-card&gt;
</code></pre>
                </b-collapse>
                </b-card-body>
            </b-card>

        </b-col>

        <!-- Nesting -->
        <b-col lg="6" class="mb-4">
            <b-card no-body>
                <template #header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Nesting</h5>
                        <a href="javascript:void(0)" @click="openNesting = !openNesting">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                    </div>
                </template>
                  <b-card-body>
                <!-- UI with loop -->
                <b-row>
                    <b-col
                        v-for="(item, idx) in nestedVariants"
                        :key="idx"
                        cols="12"
                        class="mb-3"
                    >
                        <b-button-group>
                            <b-button :variant="item.variant">1</b-button>
                            <b-button :variant="item.variant">2</b-button>
                            <b-dropdown right text="Dropdown" :variant="item.variant">
                                <b-dropdown-item href="#">Dropdown link</b-dropdown-item>
                                <b-dropdown-item href="#">Dropdown link</b-dropdown-item>
                            </b-dropdown>
                        </b-button-group>
                    </b-col>
                </b-row>

                <!-- Prism block with loop -->
                <b-collapse v-model="openNesting" class="mt-3">
        <pre class="language-html"><code>
{{ `&lt;b-row&gt;
${nestedVariants
            .map(
                (item) => `  &lt;b-col cols="12" class="mb-3"&gt;
    &lt;b-button-group&gt;
      &lt;b-button variant="${item.variant}"&gt;1&lt;/b-button&gt;
      &lt;b-button variant="${item.variant}"&gt;2&lt;/b-button&gt;
      &lt;b-dropdown right text="Dropdown" variant="${item.variant}"&gt;
        &lt;b-dropdown-item href="#"&gt;Dropdown link&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href="#"&gt;Dropdown link&lt;/b-dropdown-item&gt;
      &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;
  &lt;/b-col&gt;`
            )
            .join("\n")}
&lt;/b-row&gt;` }}
</code></pre>
                </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Checkbox and Radio -->
        <b-col lg="6" class="mb-4">
            <b-card no-body>
                <template #header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Checkbox & Radio</h5>
                        <a role="button" @click="openToggle = !openToggle">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                    </div>
                </template>
                  <b-card-body>
                <b-card-body>
                    <!-- Checkbox Group -->
                    <div class="mb-3">
                        <b-form-checkbox-group
                            class="mb-2 d-flex gap-2"
                            :options="checkboxItems.map(item => ({
              value: item.id,
              text: item.label
            }))"
                            buttons
                            button-variant="outline-secondary"
                        />
                    </div>

                    <!-- Radio Group -->
                    <div class="mb-3">
                        <b-form-radio-group
                            v-model="selectedRadio"
                            class="d-flex gap-2"
                            :options="radioItems.map(item => ({
              value: item.id,
              text: item.label
            }))"
                            buttons
                            :button-variant="val => (selectedRadio === val ? 'secondary' : 'outline-secondary')"
                        />
                    </div>

                    <!-- Button Toolbar -->
                    <div class="btn-toolbar">
                        <b-button-group class="me-2">
                            <b-button v-for="num in [1,2,3,4]" :key="num" variant="secondary">{{ num }}</b-button>
                        </b-button-group>
                        <b-button-group>
                            <b-button variant="secondary">8</b-button>
                        </b-button-group>
                    </div>

                    <!-- Prism Preview -->
                    <b-collapse v-model="openToggle" class="mt-3">
          <pre class="language-html">
<code>
{`<b-form-checkbox-group buttons button-variant="outline-secondary">
  <b-form-checkbox value="check1">Checkbox 1</b-form-checkbox>
  <b-form-checkbox value="check2">Checkbox 2</b-form-checkbox>
  <b-form-checkbox value="check3">Checkbox 3</b-form-checkbox>
</b-form-checkbox-group>

<b-form-radio-group v-model="selectedRadio" buttons>
  <b-form-radio value="radio1" button-variant="secondary">Radio 1</b-form-radio>
  <b-form-radio value="radio2" button-variant="outline-secondary">Radio 2</b-form-radio>
  <b-form-radio value="radio3" button-variant="outline-secondary">Radio 3</b-form-radio>
</b-form-radio-group>`}
</code>
          </pre>
                    </b-collapse>
                    </b-card-body>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Vertical -->
        <b-col lg="6" class="mb-4">
            <b-card no-body>
                <template #header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Vertical Groups</h5>
                        <a href="javascript:void(0)" @click="openVertical = !openVertical">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                    </div>
                </template>
                  <b-card-body>
                <b-row>
                    <b-col
                        v-for="(group, idx) in verticalGroups"
                        :key="idx"
                        cols="12"
                        class="mb-3"
                    >
                        <b-button-group vertical>
                            <b-button
                                v-for="(btn, i) in group.buttons"
                                :key="i"
                                :variant="group.className"
                            >
                                {{ btn }}
                            </b-button>
                        </b-button-group>
                    </b-col>
                </b-row>

                <div class="mt-3">
                    <b-button-group vertical>
                        <input
                            v-for="item in radioVerticals"
                            :key="item.id"
                            type="radio"
                            class="btn-check"
                            name="vbtn-radio"
                            :id="item.id"
                            autocomplete="off"
                        />
                        <label
                            v-for="item in radioVerticals"
                            :key="item.id + '-lbl'"
                            class="btn btn-outline-danger"
                            :for="item.id"
                        >
                            {{ item.label }}
                        </label>
                    </b-button-group>
                </div>

                <b-collapse v-model="openVertical" class="mt-3">
          <pre class="language-html"><code>
{{ `<b-button-group vertical>
  <b-button variant="secondary">Button</b-button>
  <b-button variant="secondary">Button</b-button>
</b-button-group>` }}
</code></pre>
                </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
