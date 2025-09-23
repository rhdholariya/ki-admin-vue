<script setup>
import {ref, nextTick, watch , computed} from "vue";
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
} from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhBriefcase, PhCode, PhTrash, PhX} from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";





const breadcrumbItems = {
    title: "Progress",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Progress", active: true},
    ],
};
// ----- Progress Data -----
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
    { class: 'bg-light-primary', value: 12.5 , color:'bg-light-primary',},
    { class: 'bg-light-secondary', value: 25 , color:'bg-light-secondary'},
    { class: 'bg-light-success', value: 37.5 , color:'bg-light-success',},
    { class: 'bg-light-danger', value: 50 , color:'bg-light-danger'},
    { class: 'bg-light-warning', value: 62.5 , color:'bg-light-warning'},
    { class: 'bg-light-info', value: 75 , color:'bg-light-info'},
    { class: 'bg-light-light', value: 82.5 , color:'bg-light-light'},
    { class: 'bg-light-dark', value: 95 , color:'bg-light-dark'},
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

// ----- Collapsible States -----
const openProgress = ref(false);
const openProgress2 = ref(false);
const openProgress3 = ref(false);
const openProgress4 = ref(false);
const openProgress5 = ref(false);

// Prism watcher
[openProgress, openProgress2, openProgress3, openProgress4, openProgress5].forEach(
    (state) =>
        watch(state, async (val) => {
            if (val) {
                await nextTick();
                Prism.highlightAll();
            }
        })
);


</script>

<template>
    <AppLayout>
        <main>
    <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
            <!-- Basic Progress Bars -->
            <b-col md="6">
                <b-card no-body>
                    <b-card-header >
                        <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Progress Bars Basic</h5>
                        <a href="javascript:void(0)" @click="openProgress = !openProgress">
                            <phCode size="30" weight="bold" class="source"/>
                        </a>
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
              <pre class="language-html"><code class="language-html">
                  &lt;b-card no-body&gt;
                  &lt;b-card-header&gt;
    &lt;h5&gt;Progress Bars Basic &lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
{{
                      progressData
                          .map(
                              (bar) =>
                          `
       &lt;b-progress class="w-100" :value="${bar.value}" variant="${bar.color}" label="${bar.value}%"/&gt;`
  )
  .join("\n") }}
                  &lt;/b-card-body&gt;
                  &lt;/b-card&gt;
              </code></pre>
                        </b-card-footer>
                    </b-collapse>

                </b-card>
            </b-col>

            <!-- Light Progress Bars -->
            <b-col md="6">
                <b-card no-body>
                    <b-card-header>
                        <div class="code-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Progress Bars Light With Text</h5>
                            <a href="javascript:void(0)" @click="openProgress2 = !openProgress2">
                                <phCode size="30" weight="bold" class="source" />
                            </a>
                        </div>
                    </b-card-header>

                    <b-CardBody>
                        <div class="d-flex gap-3 flex-wrap">
                            <b-Progress
                                v-for="(bar, index) in progressBars"
                                :key="index"
                                class="w-100"
                                :value="bar.value"
                                max="100"
                            >
                                <b-Progress-Bar :value="bar.value" :class="bar.class">
                                    {{ bar.value }}%
                                </b-Progress-Bar>
                            </b-Progress>
                        </div>
                    </b-CardBody>



                    <b-collapse v-model="openProgress2">
                        <b-card-footer>
          <pre class="language-html"><code class="language-html">
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Progress Bars Light With Text&lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
{{  progressBars
              .map(
                  (bar) =>
              `&lt;b-progress class="w-100" value="${bar.value}" max="100"&gt;
  &lt;b-progress-bar value="${bar.value}" class="${bar.class}">${bar.value}%&lt;/b-progress-bar&gt;
&lt;/b-progress&gt;`
    )
    .join('\n')

              }}
  &lt;/b-card-body&gt;
&lt;/b-card&gt;
          </code></pre>
                        </b-card-footer>
                    </b-collapse>
                </b-card>
            </b-col>

            <!-- Striped + Animated -->
            <b-col md="6" class="mt-3">
                <b-card no-body>
                    <b-card-header>
                        <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Striped Progress With Animation</h5>
                        <a href="javascript:void(0)" @click="openProgress3 = !openProgress3">
                            <phCode size="30" weight="bold" class="source"/>
                        </a>
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
              <pre class="language-html"><code class="language-html">
                  &lt;b-card no-body&gt;
                  &lt;b-card-header&gt;
    &lt;h5&gt;Striped Progress With Animation &lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
{{
                      progressData
                          .map(
                              (bar) =>
                          `
                 &lt;b-progress value="${bar.value}" variant="${bar.color}" striped animated label="${bar.value}%"/&gt;`
  )
  .join("\n") }}
                   &lt;/b-card-body&gt;
                  &lt;/b-card&gt;
              </code></pre>
                        </b-card-footer>
                    </b-collapse>
                </b-card>
            </b-col>

            <!-- Progress Sizes -->
            <b-col md="6" class="mt-3">
                <b-card no-body>
                    <b-card-header>
                        <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Progress Sizes</h5>
                        <a href="javascript:void(0)" @click="openProgress4 = !openProgress4">
                            <phCode size="30" weight="bold" class="source"/>
                        </a>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="d-flex flex-column gap-3">
                            <b-progress
                                v-for="(bar, index) in progressData"
                                :key="index"
                                :value="bar.value"
                                :variant="bar.color"
                                :label="`${bar.value}%`"
                                :class="`h-${index + 5}`"
                            />
                        </div>
                    </b-card-body>
                    <b-collapse v-model="openProgress4">
                        <b-card-footer>
              <pre class="language-html"><code class="language-html">
                  &lt;b-card no-body&gt;
                  &lt;b-card-header&gt;
    &lt;h5&gt;Progress Sizes &lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
{{
                      progressData
                          .map(
                              (bar, index) =>
                                  `&lt;b-progress :value="${bar.value}" variant="${bar.color}" :label="${bar.value}%" class="h-${index + 5}"/&gt;`
                          )
                          .join("\n")
                  }}
                   &lt;/b-card-body&gt;
                  &lt;/b-card&gt;
              </code></pre>
                        </b-card-footer>
                    </b-collapse>
                </b-card>
            </b-col>

            <!-- Real Time Example -->
            <b-col xs="12" class="mt-3">
                <b-card no-body>
                    <b-card-header>
                        <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>The Real Time Example</h5>
                        <a href="javascript:void(0)" @click="openProgress5 = !openProgress5">
                            <phCode size="30" weight="bold" class="source"/>
                        </a>
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
                                                <phX size="18" class="me-2 ms-2"/>
                                            </template>
                                            <template v-if="item.icon === 'trash'">
                                                <phTrash size="18" class="me-2 ms-2"/>
                                            </template>
                                            <span>{{ item.text }}</span>
                                        </div>
                                        <b-badge v-if="item.badge" :bg="item.color" class="ms-2">{{
                                                item.badge
                                            }}
                                        </b-badge>
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

                        <b-collapse v-model="openProgress5">
                            <div class="mt-4">
                <pre class="language-html"><code class="language-html">
                     &lt;b-card no-body&gt;
                  &lt;b-card-header&gt;
    &lt;h5&gt;The Real Time Example &lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
{{
                        progressItems
                            .map(
                                (item) =>
                            `
                    &lt;b-progress :value="${item.value}" variant="${item.color}" :label="${item.value}%" class="h-5"/&gt;`
  )
  .join("\n") }}
                    &lt;/b-card-body&gt;
                  &lt;/b-card&gt;
                </code></pre>
                            </div>
                        </b-collapse>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
        </main>
    </AppLayout>
</template>
