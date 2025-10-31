<script setup>
import {ref} from "vue";
import {BCard, BCol, BRow, BCollapse, BButton, BBadge, BCardBody, BCardHeader} from "bootstrap-vue-next";
import {PhCode, PhBellRinging} from "@phosphor-icons/vue";
// Badge + Button data
const badgeWithButtonData = [
    {label: "Notifications", color: "light-primary", badge: "4", badgeColor: "primary"},
    {
        label: "Disable",
        color: "light-secondary",
        badgeHtml: `<span class="">
  <span class="visually-hidden">Disable</span>
</span>`,
    },
    {label: "Unread", color: "light-danger", icon: "bell-ringing", badgeColor: "danger", extraClass: "f-s-16 pe-3"},
    {label: "Inbox", color: "outline-warning", badge: "99+", badgeColor: "warning"},
    {label: "50% Off", color: "light-info", badge: "New", badgeColor: "info", extraClass: "f-s-14 pe-3"},
    {
        label: "1 missed call",
        color: "light-dark",
        badgeHtml: `<span class="position-absolute top-0 start-100 translate-middle p-2 bg-dark border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower">
  <span class="visually-hidden">Busy</span>
</span>`,
    },
];

// Heading badges
const headingData = [
    {level: "h1", label: "Heading", badge: "New"},
    {level: "h2", label: "Heading", badge: "New"},
    {level: "h3", label: "Heading", badge: "New"},
    {level: "h4", label: "Heading", badge: "New"},
    {level: "h5", label: "Heading", badge: "New"},
    {level: "h6", label: "Heading", badge: "New"},
];

// Icon map
const iconMap = {"bell-ringing": PhBellRinging};

// Collapse states
const openButton = ref(false);
const openHead = ref(false);

</script>

<template>
    <b-row>
        <!-- -------- Badge with Button -------- -->
        <b-col xl="12">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Badges with Button</h5>
                        <b-button @click="openButton = !openButton" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-3">
                        <b-button
                            v-for="(item, idx) in badgeWithButtonData"
                            :key="idx"
                            :variant="item.color"
                            class="position-relative"
                            :class="item.extraClass || ''"
                        >
                            {{ item.label }}
                            <span v-if="item.badgeHtml" v-html="item.badgeHtml"></span>
                            <b-badge
                                v-else
                                :class="[
                'position-absolute top-0 start-100 translate-middle',
                item.icon
                  ? `w-25 h-25 bg-${item.badgeColor} border border-light rounded-circle`
                  : 'rounded-pill'
              ]" :variant="item.icon ? undefined : item.badgeColor"
                            >
                                <component v-if="item.icon" :is="iconMap[item.icon]"/>
                                <template v-else>{{ item.badge }}</template>
                            </b-badge>
                        </b-button>
                    </div>

                    <!-- Prism preview using v-for in template -->
                    <b-collapse v-model="openButton" class="mt-3">
<pre class="language-html"><code>
    &lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Icon's Badges&lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
&lt;div class="d-flex flex-wrap gap-3"&gt;
{{
        badgeWithButtonData
            .map(
                ({label, color, badge, badgeColor, badgeHtml, icon, extraClass}) =>
                    `  &lt;b-button variant="${color}" class="position-relative${extraClass ? ` ${extraClass}` : ''}"&gt;
    ${label}
    ${icon ? `&lt;-badge class="position-absolute top-0 start-100 translate-middle w-25 h-25 bg-${badgeColor} border border-light rounded-circle">&lt;PhBellRinging /&gt;&lt;/b-badge&gt;`
                        : badge ? `&lt;-badge class="position-absolute top-0 start-100 translate-middle rounded-pill bg-${badgeColor}">${badge}&lt;/b-badge&gt;`
                            : badgeHtml?.trim() || ''}
  &lt;/b-button&gt;`
            )
            .join("\n")
    }}
  &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code></pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- -------- Heading Badges -------- -->
        <b-col xl="12">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Heading Badges</h5>
                        <b-button @click="openHead = !openHead" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-column gap-2">
                        <component
                            v-for="(item, idx) in headingData"
                            :key="idx"
                            :is="item.level"
                            class="mb-3"
                        >
                            {{ item.label }}
                            <b-badge variant="secondary">{{ item.badge }}</b-badge>
                        </component>
                    </div>

                    <!-- Prism preview using v-for in template -->
                    <b-collapse v-model="openHead" class="mt-3">
<pre class="language-html"><code>
    &lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Icon's Badges&lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
&lt;div class="d-flex flex-column gap-2"&gt;
{{
        headingData
            .map(
                ({level, label, badge}) =>
                    `  &lt;${level}&gt;${label} &lt;b-badge variant="secondary"&gt;${badge}&lt;/b-badge&gt;&lt;/${level}&gt;`
            )
            .join("\n")
    }}
  &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code></pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
