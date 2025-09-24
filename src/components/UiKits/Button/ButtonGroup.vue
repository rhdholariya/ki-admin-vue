<script setup>
import {ref, onMounted} from "vue";
import {
    BCard,
    BCol,
    BRow,
    BButton,
    BButtonGroup,
    BCollapse,
    BDropdown,
    BDropdownItem,
    BCardBody,
    BFormCheckboxGroup,
    BFormRadioGroup, BCardHeader
} from "bootstrap-vue-next";
import {PhCode} from "@phosphor-icons/vue";


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

// Variants list
const nestedVariants = [
    {label: "secondary", variant: "secondary"},
    {label: "secondary", variant: "outline-secondary"},
    {label: "secondary", variant: "light-secondary"},
];
//

// checkbox options
const radioItems = [
    {value: "radio1", text: "Radio 1"},
    {value: "radio2", text: "Radio 2"},
    {value: "radio3", text: "Radio 3"},
];


// checkbox options
const checkboxItems = [
    {value: "check1", text: "Checkbox 1"},
    {value: "check2", text: "Checkbox 2"},
    {value: "check3", text: "Checkbox 3"},
];

const verticalButtonGroups = ref([
    {
        type: "radio",
        name: "vbtn-radio",
        ariaLabel: "Vertical radio toggle button group",
        buttons: [
            { id: "vbtn-radio1", label: "Radio 1", checked: true },
            { id: "vbtn-radio2", label: "Radio 2" },
            { id: "vbtn-radio3", label: "Radio 3" },
        ],
    },
    {
        type: "buttons",
        ariaLabel: "Vertical button group",
        buttons: [
            { label: "Button", class: "btn btn-secondary" },
            { label: "Button", class: "btn btn-secondary" },
            { label: "Dropdown", class: "btn btn-secondary", dropdown: true, dropdownItems: ["Dropdown link", "Dropdown link"] },
        ],
    },
    {
        type: "buttons",
        ariaLabel: "Vertical button group",
        buttons: [
            { label: "Button", class: "btn btn-outline-secondary" },
            { label: "Button", class: "btn btn-outline-secondary" },
            { label: "Dropdown", class: "btn btn-outline-secondary", dropdown: true, dropdownItems: ["Dropdown link", "Dropdown link"] },
        ],
    },
    {
        type: "buttons",
        ariaLabel: "Vertical button group",
        buttons: [
            { label: "Button", class: "btn btn-light-secondary" },
            { label: "Button", class: "btn btn-light-secondary" },
            { label: "Dropdown", class: "btn btn-light-secondary", dropdown: true, dropdownItems: ["Dropdown link", "Dropdown link"] },
        ],
    },
]);




// collapse toggles
const openGroup = ref(false);
const openGroup2 = ref(false);
const openNesting = ref(false);
const openToggle = ref(false);
const openVertical = ref(false);

// radio selection state
const selectedRadio = ref("radio1");


</script>

<template>
    <b-row>
        <!-- Button Group Variants -->
        <b-col lg="6" class="mb-4">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Button Group</h5>
                        <b-button @click="openGroup = !openGroup" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
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
{{
                    `&lt;b-row&gt;
${buttonGroupData.map(group =>
                        `  &lt;b-col cols="12" class="mb-3"&gt;
    &lt;b-button-group&gt;
${group.links.map((link, idx) =>
                            `      &lt;b-button variant="${group.className}"${group.active && idx === 0 ? " active" : ""}&gt;${link}&lt;/b-button&gt;`
                        ).join("\n")}
    &lt;/b-button-group&gt;
  &lt;/b-col&gt;`
                    ).join("\n")}
&lt;/b-row&gt;`
                }}
</code></pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Sizes -->
        <b-col lg="6" class="mb-4">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Sizes</h5>
                        <b-button @click="openGroup2 = !openGroup2" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
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
{{
                    `&lt;b-row&gt;
${sizes.map(size =>
                        `  &lt;b-col cols="12" class="mb-3"&gt;
    &lt;div class="btn-group ${size.sizeClass}" role="group" aria-label="${size.ariaLabel}"&gt;
      &lt;b-button variant="${size.btnClass}"&gt;Left&lt;/b-button&gt;
      &lt;b-button variant="${size.btnClass}"&gt;Middle&lt;/b-button&gt;
      &lt;b-button variant="${size.btnClass}"&gt;Right&lt;/b-button&gt;
    &lt;/div&gt;
  &lt;/b-col&gt;`
                    ).join("\n")}
&lt;/b-row&gt;`
                }}
</code></pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Nesting -->
        <b-col lg="6" class="mb-4">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Nesting</h5>
                        <b-button @click="openNesting = !openNesting" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
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
{{
                    `&lt;b-row&gt;
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
&lt;/b-row&gt;`
                }}
</code></pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Checkbox and Radio -->
        <b-col lg="6" class="mb-4">
            <b-card no-body>
                <!-- header -->
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Checkbox Radio</h5>
                        <b-button @click="openToggle = !openToggle" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>

                <b-card-body>
                    <b-row class="btn-responsive">
                        <!-- Checkbox Toggle Buttons -->
                        <b-col cols="12" class="mb-3">
                            <b-form-checkbox-group
                                v-model="selectedChecks"
                                :options="checkboxItems"
                                buttons
                                button-variant="outline-secondary"
                                class="d-flex"
                            />
                        </b-col>

                        <!-- Radio Toggle Buttons -->
                        <b-col cols="12" class="mb-3">
                            <b-form-radio-group
                                v-model="selectedRadio"
                                :options="radioItems"
                                buttons
                                button-variant="outline-secondary"
                                class="d-flex"
                            />
                        </b-col>

                        <!-- Toolbar with Button Groups -->
                        <b-col cols="12" class="mb-3">
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <b-button-group class="me-2" aria-label="First group">
                                    <b-button variant="secondary">1</b-button>
                                    <b-button variant="secondary">2</b-button>
                                    <b-button variant="secondary">3</b-button>
                                    <b-button variant="secondary">4</b-button>
                                </b-button-group>
                                <b-button-group aria-label="Third group">
                                    <b-button variant="secondary">8</b-button>
                                </b-button-group>
                            </div>
                        </b-col>
                    </b-row>

                    <!--  Prism Preview -->
                    <b-collapse v-model="openToggle" class="mt-3">
          <pre class="language-html"><code>
&lt;b-form-checkbox-group buttons button-variant="outline-secondary"&gt;
  &lt;b-form-checkbox value="check1"&gt;Checkbox 1&lt;/b-form-checkbox&gt;
  &lt;b-form-checkbox value="check2"&gt;Checkbox 2&lt;/b-form-checkbox&gt;
  &lt;b-form-checkbox value="check3"&gt;Checkbox 3&lt;/b-form-checkbox&gt;
&lt;/b-form-checkbox-group&gt;

&lt;b-form-radio-group v-model="selectedRadio" buttons button-variant="outline-secondary"&gt;
  &lt;b-form-radio value="radio1"&gt;Radio 1&lt;/b-form-radio&gt;
  &lt;b-form-radio value="radio2"&gt;Radio 2&lt;/b-form-radio&gt;
  &lt;b-form-radio value="radio3"&gt;Radio 3&lt;/b-form-radio&gt;
&lt;/b-form-radio-group&gt;

              &lt;b-button-group class="me-2" aria-label="First group"&gt;
              &lt;b-button variant="secondary"&gt;1&lt;/b-button&gt;
              &lt;b-button variant="secondary"&gt;2&lt;/b-button&gt;
              &lt;b-button variant="secondary"&gt;3&lt;/b-button&gt;
              &lt;b-button variant="secondary"&gt;4&lt;/b-button&gt;
              &lt;/b-button-group&gt;
              &lt;b-button-group aria-label="Third group"&gt;
              &lt;b-button variant="secondary"&gt;8&lt;/b-button&gt;
              &lt;/b-button-group&gt;
</code></pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Vertical -->
        <b-row>
            <b-col cols="12">
                <b-card no-body>
                    <template #header>
                        <div class="code-header d-flex justify-content-between align-items-center">
                            <h5>Button Vertical</h5>
                            <b-button @click="openVertical = !openVertical" class="p-0 border-0">
                                <PhCode size="30" weight="bold" class="source"/>
                            </b-button>
                        </div>
                    </template>
                    <b-card-body>
                        <b-row class="btn-responsive">
                            <b-col auto class="m-2" v-for="(group, gIndex) in verticalButtonGroups" :key="gIndex">
                                <div class="btn-group-vertical" role="group" :aria-label="group.ariaLabel">
                                    <!-- Radio Buttons -->
                                    <template v-if="group.type === 'radio'">
                                        <div v-for="(btn, index) in group.buttons" :key="index">
                                            <input type="radio" class="btn-check" :id="btn.id" :name="group.name" :checked="btn.checked" />
                                            <label class="btn btn-outline-secondary" :for="btn.id">{{ btn.label }}</label>
                                        </div>
                                    </template>

                                    <!-- Normal Buttons & Dropdown -->
                                    <template v-else>
                                        <div v-for="(btn, index) in group.buttons" :key="index">

                                            <button v-if="!btn.dropdown" type="button" :class="btn.class">{{ btn.label }}</button>
                                            <b-dropdown v-else :variant="btn.class"  :text="btn.label" :split="false" class="btn-group">
                                                <b-dropdown-item v-for="(item, i) in btn.dropdownItems" :key="i">{{ item }}</b-dropdown-item>
                                            </b-dropdown>

                                        </div>
                                    </template>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>

                    <!-- PrismJS Code Preview -->
                    <b-collapse v-model="openVertical" class="mt-3">
          <pre class="language-html">
<code>{{ prismCode }}</code>
          </pre>
                    </b-collapse>
                </b-card>
            </b-col>
        </b-row>
    </b-row>
</template>
