<script setup>
import {ref} from "vue";
import {BCard, BRow, BCol, BCollapse, BBadge, BCardBody, BButton , BCardHeader} from "bootstrap-vue-next";
import {PhCode, PhDownloadSimple} from "@phosphor-icons/vue";
const badgeColors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
const outlineBadgeColors = ["primary", "secondary", "success", "danger", "warning", "info", "dark"];
const lightBadgeColors = [
    {color: "primary", icon: PhDownloadSimple},
    {color: "secondary", icon: null},
    {color: "success", icon: null},
    {color: "danger", icon: null},
    {color: "warning", icon: null},
    {color: "info", icon: null},
    {color: "dark", icon: null},
];
const radiusBadgeData = [
    {color: "primary", radius: "0"},
    {color: "secondary", radius: "6"},
    {color: "success", radius: "8"},
    {color: "danger", radius: "10"},
];
// Collapse states
const open = ref(false);
const openOutline = ref(false);
const openLight = ref(false);
const openRadius = ref(false);


</script>

<template>
    <b-row>
        <!-- Basic Badges -->
        <b-col sm="12" xl="6">
            <b-card no-body>
                <b-card-header>

                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Basic Badges</h5>
                        <b-button @click="open = !open" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-badge v-for="color in badgeColors" :key="color" :variant="color">
                            {{ color.charAt(0).toUpperCase() + color.slice(1) }}
                        </b-badge>
                    </div>

                    <b-collapse v-model="open" class="mt-3">
  <pre class="language-html" tabindex="0">
    <code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Basic Badges&lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
    &lt;div class="d-flex flex-wrap gap-2"&gt;
{{badgeColors
        .map(
            (c) => `      &lt;b-badge variant="${c}"&gt;${c.charAt(0).toUpperCase() + c.slice(1)}&lt;/b-badge&gt;`
        )
        .join('\n')}}
    &lt;/div&gt;
  &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>
  </pre>
                    </b-collapse>

                </b-card-body>
            </b-card>
        </b-col>

        <!-- Outline Badges -->
        <b-col sm="12" xl="6">
            <b-card no-body>
                <b-card-header>

                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Outline Badges</h5>
                        <b-button @click="openOutline = !openOutline" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-badge
                            v-for="color in outlineBadgeColors"
                            :key="color"
                            :variant="`badge text-outline-${color}`"
                        >
                            {{ color.charAt(0).toUpperCase() + color.slice(1) }}
                        </b-badge>
                    </div>
                </b-card-body>
                <b-collapse v-model="openOutline" class="mt-3">
          <pre class="language-html">
<code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Outline Badges&lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-2"&gt;
{{
        outlineBadgeColors
            .map(
                (c) =>
                    `    &lt;b-badge variant="badge text-outline-${c}"&gt;${c.charAt(0).toUpperCase() + c.slice(1)}&lt;/b-badge&gt;`
            )
            .join("\n")
    }}
  &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code>
          </pre>
                </b-collapse>
            </b-card>

        </b-col>

        <!-- Light Badges -->
        <b-col sm="12" xl="6">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Light Badges</h5>
                        <b-button @click="openLight = !openLight" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-badge
                            v-for="{ color, icon } in lightBadgeColors"
                            :key="color"
                            :variant="`badge text-light-${color}`"
                        >
                            <component v-if="icon" :is="icon" size="12" class="me-1"/>
                            {{ color.charAt(0).toUpperCase() + color.slice(1) }}
                        </b-badge>
                    </div>

                    <b-collapse v-model="openLight" class="mt-3">
          <pre class="language-html">
<code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Light Badges&lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-2"&gt;
{{
        lightBadgeColors
            .map(({color, icon}) => {
                const label = color.charAt(0).toUpperCase() + color.slice(1);
                const iconPart = icon ? "&lt;PhDownloadSimple size='12' /&gt; " : "";
                return `    &lt;b-badge variant="badge text-light-${color}"&gt;${iconPart}${label}&lt;/b-badge&gt;`;
            })
            .join("\n")
    }}
  &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code>
          </pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Radius Badges -->
        <b-col sm="12" xl="6">
            <b-card no-body>
                <b-card-header>

                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Radius option on Badges</h5>
                        <b-button @click="openRadius = !openRadius" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-badge
                            v-for="{ color, radius } in radiusBadgeData"
                            :key="color"
                            :variant="color"
                            :class="`b-r-${radius}`"
                        >
                            {{ color.charAt(0).toUpperCase() + color.slice(1) }}
                        </b-badge>
                    </div>

                    <b-collapse v-model="openRadius" class="mt-3">
          <pre class="language-html">
<code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Radius option on Badges&lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-2"&gt;
{{
        radiusBadgeData
            .map(
                ({color, radius}) =>
                    `    &lt;b-badge variant="${color}" class="b-r-${radius}"&gt;${color.charAt(0).toUpperCase() + color.slice(1)}&lt;/b-badge&gt;`
            )
            .join("\n")
    }}
  &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code>
          </pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
