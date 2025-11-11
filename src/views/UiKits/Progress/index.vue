<script setup>
import {ref} from "vue";
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BBadge,
    BCardBody,
    BCardFooter,
    BProgress,
    BProgressBar,
    BCollapse,
    BButton,
} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhBriefcase, PhCode, PhTrash, PhX} from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";

const breadcrumbItems = {
    title: "Progress",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Progress", active: true},
    ],
};

const progressData = [
    {color: "primary", value: 12.5},
    {color: "secondary", value: 25},
    {color: "success", value: 37.5},
    {color: "danger", value: 50},
    {color: "warning", value: 62.5},
    {color: "info", value: 75},
    {color: "light", value: 82.5},
    {color: "dark", value: 95},
];

const progressBars = [
    {class: 'bg-light-primary', value: 12.5, color: 'bg-light-primary'},
    {class: 'bg-light-secondary', value: 25, color: 'bg-light-secondary'},
    {class: 'bg-light-success', value: 37.5, color: 'bg-light-success'},
    {class: 'bg-light-danger', value: 50, color: 'bg-light-danger'},
    {class: 'bg-light-warning', value: 62.5, color: 'bg-light-warning'},
    {class: 'bg-light-info', value: 75, color: 'bg-light-info'},
    {class: 'bg-light-light', value: 82.5, color: 'bg-light-light'},
    {class: 'bg-light-dark', value: 95, color: 'bg-light-dark'},
];

const progressItems = [
    {
        value: 100,
        color: "primary",
        text: "Loading data...",
        icon: "spinner",
        bgColor: "light-primary",
    },
    {
        value: 75,
        color: "secondary",
        text: "75% Processing",
        bgColor: "light-secondary",
    },
    {
        value: 52,
        color: "success",
        text: "52% Updating..",
        badge: "1 Min",
        bgColor: "light-success",
    },
    {
        value: 15,
        color: "danger",
        text: "Deleting data (85% remain)",
        icon: "trash",
        badge: "1 Min left",
        bgColor: "light-danger",
    },
];

const openProgress = ref(false);
const openProgress2 = ref(false);
const openProgress3 = ref(false);
const openProgress4 = ref(false);
const openProgress5 = ref(false);
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>
                    <b-col md="6">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between align-items-center">
                                    <h5 class="mb-0">Progress Bars Basic</h5>
                                    <b-button @click="openProgress = !openProgress" class="p-0 border-0">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </b-button>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-flex flex-column gap-3">
                                    <b-progress
                                        v-for="(bar, i) in progressData"
                                        :key="i"
                                        :value="bar.value"
                                        :variant="bar.color"
                                        :label="`${bar.value}%`"
                                        class="w-100"
                                        :show-progress="false"
                                    />
                                </div>
                            </b-card-body>
                            <b-collapse v-model="openProgress">
                                <b-card-footer>
                                    <pre class="language-html mt-3">
                                        <code v-prism>
&lt;div class="d-flex flex-column gap-3"&gt;
{{
                                                progressData.map(bar => `  &lt;b-progress
    :value="${bar.value}"
    variant="${bar.color}"
    label="${bar.value}%"
    class="w-100"
    :show-progress="false"
  /&gt;`).join('\n\n')
                                            }}
&lt;/div&gt;
                                        </code>
                                    </pre>
                                </b-card-footer>
                            </b-collapse>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between align-items-center">
                                    <h5 class="mb-0">Progress Bars Light With Text</h5>
                                    <b-button @click="openProgress2 = !openProgress2" class="p-0 border-0">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </b-button>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-flex gap-3 flex-wrap">
                                    <b-progress
                                        v-for="(bar, index) in progressBars"
                                        :key="index"
                                        class="w-100"
                                        :value="bar.value"
                                        max="100"
                                    >
                                        <b-progress-bar :value="bar.value" :class="bar.class">
                                            {{ bar.value }}%
                                        </b-progress-bar>
                                    </b-progress>
                                </div>
                            </b-card-body>
                            <b-collapse v-model="openProgress2">
                                <b-card-footer>
                                    <pre class="language-html mt-3">
                                        <code v-prism>
&lt;div class="d-flex gap-3 flex-wrap"&gt;
{{
                                                progressBars.map(bar => `  &lt;b-progress class="w-100" :value="${bar.value}" max="100"&gt;
    &lt;b-progress-bar :value="${bar.value}" class="${bar.class}"&gt;
      ${bar.value}%
    &lt;/b-progress-bar&gt;
  &lt;/b-progress&gt;`).join('\n\n')
                                            }}
&lt;/div&gt;
                                        </code>
                                    </pre>
                                </b-card-footer>
                            </b-collapse>
                        </b-card>
                    </b-col>

                    <b-col md="6" class="mt-3">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between align-items-center">
                                    <h5 class="mb-0">Striped Progress With Animation</h5>
                                    <b-button @click="openProgress3 = !openProgress3" class="p-0 border-0">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </b-button>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-flex flex-column gap-3">
                                    <b-progress
                                        v-for="(bar, i) in progressData"
                                        :key="i"
                                        :value="bar.value"
                                        :variant="bar.color"
                                        striped
                                        animated
                                        :label="`${bar.value}%`"
                                        class="w-100"
                                    />
                                </div>
                            </b-card-body>
                            <b-collapse v-model="openProgress3">
                                <b-card-footer>
                                    <pre class="language-html mt-3">
                                        <code v-prism>
&lt;div class="d-flex flex-column gap-3"&gt;
{{
                                                progressData.map(bar => `  &lt;b-progress
    :value="${bar.value}"
    variant="${bar.color}"
    striped
    animated
    label="${bar.value}%"
    class="w-100"
  /&gt;`).join('\n\n')
                                            }}
&lt;/div&gt;
                                        </code>
                                    </pre>
                                </b-card-footer>
                            </b-collapse>
                        </b-card>
                    </b-col>

                    <b-col md="6" class="mt-3">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between align-items-center">
                                    <h5>Progress Sizes</h5>
                                    <b-button @click="openProgress4 = !openProgress4" class="p-0 border-0">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </b-button>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-flex flex-column gap-3">

                                        <b-progress
                                            :value="20"
                                            variant="primary"
                                            class="w-100 h-5"
                                        />
                                       <b-progress
                                            :value="30"
                                            variant="secondary"
                                            class="w-100 h-10"
                                        />
                                      <b-progress
                                            :value="40"
                                            variant="danger"
                                            class="w-100 h-12"
                                        />
                                        <b-progress
                                            :value="50"
                                            variant="success"
                                            class="w-100 h-12"
                                        />
                                        <b-progress
                                            :value="60"
                                            variant="info"
                                            class="w-100 h-15"
                                        />
                                        <b-progress
                                            :value="70"
                                            variant="danger"
                                            class="w-100 h-20"
                                        />
                                         <b-progress
                                            :value="80"
                                            variant="warning"
                                            class="w-100 h-25"
                                        />
                                </div>
                            </b-card-body>
                            <b-collapse v-model="openProgress4">
                                <b-card-footer>
                <pre class="language-html mt-3">
                    <code v-prism>
                 &lt;div class="d-flex flex-column gap-3"&gt;
                        &lt;b-progress :value="20" variant="primary" class="w-100 h-5" /&gt;
                        &lt;b-progress :value="30" variant="secondary" class="w-100 h-10" /&gt;
                        &lt;b-progress :value="40" variant="sucess" class="w-100 h-12"/&gt;
                        &lt;b-progress :value="50" variant="info" class="w-100 h-12"/&gt;
                        &lt;b-progress :value="60" variant="dander" class="w-100 h-15"/&gt;
                        &lt;b-progress :value="70" variant="warning" class="w-100 h-20"/&gt;
                        &lt;b-progress :value="80" variant="danger" class="w-100 h-25"/&gt;
                        &lt;/div&gt;
                    </code>
                </pre>
                                </b-card-footer>
                            </b-collapse>
                        </b-card>
                    </b-col>


                    <b-col xs="12" class="mt-3">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between align-items-center">
                                    <h5>The Real Time Example</h5>
                                    <b-button @click="openProgress5 = !openProgress5" class="p-0 border-0">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </b-button>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col md="6" v-for="(item, i) in progressItems" :key="i" class="mb-3">
                                        <div :class="`p-3 rounded bg-${item.bgColor}`">
                                            <div class="d-flex justify-content-between align-items-center mb-2">
                                                <div class="d-flex align-items-center">
                                                    <template v-if="item.icon === 'spinner'">
                                                        <div class="spinner-border spinner-border-sm me-2 ms-2"></div>
                                                    </template>
                                                    <template v-if="item.icon === 'close'">
                                                        <PhX size="18" class="me-2 ms-2"/>
                                                    </template>
                                                    <template v-if="item.icon === 'trash'">
                                                        <PhTrash size="18" class="me-2 ms-2"/>
                                                    </template>
                                                    <span>{{ item.text }}</span>
                                                </div>
                                                <BBadge v-if="item.badge" :bg="item.color" class="ms-2">
                                                    {{ item.badge }}
                                                </BBadge>
                                            </div>
                                            <b-progress
                                                :value="item.value"
                                                :variant="item.color"
                                                class="h-5"
                                                :label="`${item.value}%`"
                                                style="font-size: 0.75rem"
                                            />
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                            <b-collapse v-model="openProgress5">
                                <b-card-footer>
                                    <pre class="language-html mt-3">
                                        <code v-prism>
&lt;b-row&gt;
{{
                                                progressItems.map(item => `  &lt;b-col md="6" class="mb-3"&gt;
    &lt;div class="p-3 rounded bg-${item.bgColor}"&gt;
      &lt;div class="d-flex justify-content-between align-items-center mb-2"&gt;
        &lt;div class="d-flex align-items-center"&gt;
          ${item.icon === 'spinner' ? '&lt;div class="spinner-border spinner-border-sm me-2 ms-2"&gt;&lt;/div&gt;' : ''}
          ${item.icon === 'trash' ? '&lt;PhTrash size="18" class="me-2 ms-2" /&gt;' : ''}
          &lt;span&gt;${item.text}&lt;/span&gt;
        &lt;/div&gt;
        ${item.badge ? `&lt;BBadge bg="${item.color}" class="ms-2"&gt;${item.badge}&lt;/BBadge&gt;` : ''}
      &lt;/div&gt;
      &lt;b-progress
        :value="${item.value}"
        variant="${item.color}"
        class="h-5"
        label="${item.value}%"
        style="font-size: 0.75rem"
      /&gt;
    &lt;/div&gt;
  &lt;/b-col&gt;`).join('\n\n')
                                            }}
&lt;/b-row&gt;
                                        </code>
                                    </pre>
                                </b-card-footer>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>