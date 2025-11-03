<script setup>
import { ref } from "vue";
import {BCard, BCardHeader, BCardBody, BCollapse, BCol, BButton} from "bootstrap-vue-next";
import { PhCode, PhUser } from "@phosphor-icons/vue";

// Light avatar colors
const lightAvatarColors = [
    { colorClass: "light-primary" },
    { colorClass: "light-secondary" },
    { colorClass: "light-success" },
    { colorClass: "light-info" },
    { colorClass: "light-warning" },
    { colorClass: "light-danger" },
];

// Collapse toggle
const openAvtar4 = ref(false);

</script>

<template>
    <b-col md="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Light Background</h5>
                    <b-button @click="openAvtar4 = !openAvtar4" class="p-0 border-0">
                        <ph-code size="30" weight="bold" class="source" />
                    </b-button>
                </div>
                <p class="text-muted mb-0">
                    For light style use <code>text-light-*</code> class.
                </p>
            </b-card-header>

            <b-card-body>
                <div class="d-flex gap-3 flex-wrap">
          <span
              v-for="(avatar, i) in lightAvatarColors"
              :key="i"
              class="h-45 w-45 d-flex-center b-r-50"
              :class="'text-' + avatar.colorClass"
          >
            <ph-user size="18" weight="fill" />
          </span>
                </div>
            </b-card-body>

            <b-collapse v-model="openAvtar4">
        <pre class="mt-3 language-html">
<code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Light Background&lt;/h5&gt;
    &lt;p class="text-muted"&gt;
      For light style use &lt;code&gt;text-light-* &lt;/code&gt; class.
    &lt;/p&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
    &lt;div class="d-flex gap-3 flex-wrap"&gt;
{{ lightAvatarColors.map(a =>
    '      &lt;span class="text-' + a.colorClass + ' h-45 w-45 d-flex-center b-r-50"&gt;&lt;ph-user size="18" weight="fill" /&gt;&lt;/i&gt;&lt;/span&gt;'
).join('\n') }}
    &lt;/div&gt;
  &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code>
        </pre>
            </b-collapse>
        </b-card>

    </b-col>
</template>
