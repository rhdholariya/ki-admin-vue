<script setup>
import {nextTick, ref, watch ,} from "vue";
import {
    BCard,
    BCardBody,
    BDropdown,
    BDropdownItem,
    BCol,
    BDropdownDivider,
    BCollapse,
    BForm,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BButton,
} from "bootstrap-vue-next";
import {PhCode} from "@phosphor-icons/vue";

// Collapse controls
const openBasic = ref(false);
const openPreview = ref(false);
// Prism setup function for multiple collapses
const setupPrism = (openRef) => {
    watch(openRef, async (val) => {
        if (val) {
            await nextTick();
            Prism.highlightAll();
        }
    });
};
// Initialize Prism for both collapses
setupPrism(openBasic);
setupPrism(openPreview);
// Dropdown state
const dropdownOpen1 = ref(false);
const dropdownOpen2 = ref(false);
// Dropdown options
const dropdownOptions = [
    {label: "Action", value: "action"},
    {label: "Another action", value: "another-action"},
    {label: "Something else here", value: "something-else"},
];
// Map-based dropdowns
const dropdowns = [
    {
        type: "success",
        title: "Header",
        header: "Welcome Jessie!",
        items: [
            {label: "Action"},
            {label: "Another action"},
            {label: "Something else here"},
            {label: "Separated link", isDivider: true},
        ],
        customContent: null,
    },
    {
        type: "danger",
        title: "Text",
        header: null,
        items: [],
        customContent: `
      <div class="p-3">
        <p>Some example text that's free-flowing within the dropdown menu.</p>
        <p class="mb-0">And this is more example text.</p>
      </div>
    `,
    },
    {
        type: "warning",
        title: "Forms",
        header: null,
        items: [],
        customContent: "form", // special flag to use Vue 3 form
    },
];
// Form data
const formData = ref({
    email: "",
    password: "",
    remember: false,
});
// Form submit handler
const handleSubmit = () => {
    alert(`Email: ${formData.value.email}\nPassword: ${formData.value.password}\nRemember: ${formData.value.remember}`);
};
</script>
<template>
    <b-col lg="12">
        <!-- Single Button & Link Dropdown Card -->
        <b-card no-body>
            <template #header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Single Button and Link Dropdown</h5>
                    <a href="javascript:void(0)" @click="openBasic = !openBasic">
                        <PhCode size="30" weight="bold" class="source"/>
                    </a>
                </div>
            </template>
            <b-card-body class="d-flex flex-wrap gap-2">
                <b-dropdown v-model="dropdownOpen1" variant="primary" text="Dropdown button">
                    <b-dropdown-item
                        v-for="(option, index) in dropdownOptions"
                        :key="index"
                        href="#"
                    >
                        {{ option.label }}
                    </b-dropdown-item>
                </b-dropdown>
                <b-dropdown v-model="dropdownOpen2" variant="secondary" text="Dropdown link">
                    <b-dropdown-item
                        v-for="(option, index) in dropdownOptions"
                        :key="index"
                        href="#"
                    >
                        {{ option.label }}
                    </b-dropdown-item>
                </b-dropdown>
            </b-card-body>
        </b-card>
        <!-- Collapse for code preview -->
        <b-collapse v-model="openBasic" class="mt-3">
      <pre>
<code class="language-html">
&lt;b-card&gt;
  &lt;b-card-body class="d-flex flex-wrap gap-2"&gt;
    &lt;b-dropdown variant="primary" text="Dropdown button"&gt;
      &lt;b-dropdown-item href="#"&gt;Action&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item href="#"&gt;Another action&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item href="#"&gt;Something else here&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
    &lt;b-dropdown variant="secondary" text="Dropdown link"&gt;
      &lt;b-dropdown-item href="#"&gt;Action&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item href="#"&gt;Another action&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item href="#"&gt;Something else here&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
  &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code>
      </pre>
        </b-collapse>
        <!-- Dropdown Map Card -->
        <b-col cols="12" class="mt-4">
            <b-card no-body>
                <template #header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Dropdown Variations</h5>
                        <a href="javascript:void(0)" @click="openPreview = !openPreview">
                            <PhCode size="30" weight="bold" class="source"/>
                        </a>
                    </div>
                </template>
                <b-card-body class="d-flex flex-wrap gap-2">
                    <b-dropdown
                        v-for="(dropdown, idx) in dropdowns"
                        :key="idx"
                        class="btn-rtl"
                        :variant="dropdown.type"
                        :text="dropdown.title"
                        toggle-class="d-flex align-items-center"
                        menu-class="dropdown-menu-md"
                    >
                        <!-- Header -->
                        <template v-if="dropdown.header">
                            <div class="dropdown-header noti-title">
                                <h5 class="text-muted text-truncate mn-0">{{ dropdown.header }}</h5>
                            </div>
                        </template>
                        <!-- Items -->
                        <template v-for="(item, i) in dropdown.items" :key="i">
                            <BDropdownDivider v-if="item.isDivider"/>
                            <BDropdownItem v-else>{{ item.label }}</BDropdownItem>
                        </template>
                        <!-- Custom text -->
                        <div v-if="dropdown.customContent && dropdown.customContent !== 'form'"
                             v-html="dropdown.customContent"></div>
                        <!-- Vue 3 Form -->
                        <b-form v-if="dropdown.customContent === 'form'" class="p-3" @submit.prevent="handleSubmit">
                            <b-form-group label="Email address" label-for="exampleDropdownFormEmail" class="mb-2">
                                <b-form-input id="exampleDropdownFormEmail" v-model="formData.email" type="email"
                                              placeholder="email@example.com"/>
                            </b-form-group>
                            <b-form-group label="Password" label-for="exampleDropdownFormPassword" class="mb-2">
                                <b-form-input id="exampleDropdownFormPassword" v-model="formData.password"
                                              type="password" placeholder="Password"/>
                            </b-form-group>
                            <b-form-checkbox id="rememberdropdownCheck" v-model="formData.remember" class="mb-2">
                                Remember me
                            </b-form-checkbox>
                            <b-button type="submit" variant="primary">Sign in</b-button>
                        </b-form>
                    </b-dropdown>
                </b-card-body>
                <!-- Prism preview -->
                <b-collapse v-model="openPreview" class="mt-3">
          <pre class="language-html">
<code>
&lt;b-card no-body&gt;
  &lt;b-card-body class="d-flex flex-wrap gap-2"&gt;
    &lt;b-dropdown variant="success" text="Header"&gt;
      &lt;div class="dropdown-header noti-title"&gt;
        &lt;h5 class="text-muted text-truncate mn-0"&gt;Welcome Jessie!&lt;/h5&gt;
      &lt;/div&gt;
      &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
      &lt;b-dropdown-divider /&gt;
    &lt;/b-dropdown&gt;
    &lt;b-dropdown variant="danger" text="Text"&gt;
      &lt;div class="p-3"&gt;
        &lt;p&gt;Some example text that's free-flowing within the dropdown menu.&lt;/p&gt;
        &lt;p class="mb-0"&gt;And this is more example text.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/b-dropdown&gt;
    &lt;b-dropdown variant="warning" text="Forms"&gt;
      &lt;b-form class="p-3"&gt;
        &lt;b-form-group label="Email address"&gt;
          &lt;b-form-input type="email" placeholder="email@example.com" /&gt;
        &lt;/b-form-group&gt;
        &lt;b-form-group label="Password"&gt;
          &lt;b-form-input type="password" placeholder="Password" /&gt;
        &lt;/b-form-group&gt;
        &lt;b-form-checkbox&gt;Remember me&lt;/b-form-checkbox&gt;
        &lt;b-button type="submit" variant="primary"&gt;Sign in&lt;/b-button&gt;
      &lt;/b-form&gt;
    &lt;/b-dropdown&gt;
  &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code>
          </pre>
                </b-collapse>
            </b-card>
        </b-col>
    </b-col>
</template>