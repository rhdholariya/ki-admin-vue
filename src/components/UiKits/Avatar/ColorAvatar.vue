<script setup>
import { ref } from "vue";
import { PhCode, PhUser } from "@phosphor-icons/vue";
import {BCard, BCardHeader, BCardBody, BCollapse, BCol, BButton} from "bootstrap-vue-next";


// Avatar data
const avatars = [
    { colorClass: "primary", component: PhUser, text: null, raw: "<PhUser />" },
    { colorClass: "secondary", component: PhUser, text: null, raw: "<PhUser />" },
    { colorClass: "success", component: PhUser, text: null, raw: "<PhUser />" },
    { colorClass: "info", component: PhUser, text: null, raw: "<PhUser />" },
    { colorClass: "warning", component: null, text: "P", raw: "P" },
    { colorClass: "danger", component: null, text: "AD", raw: "AD" },
];

// Collapse toggle state
const open = ref(false);

</script>

<template>
    <b-col md="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Colors</h5>
                    <b-button @click="open = !open" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </b-button>
                </div>
                <p class="text-muted">
                    Use color <code>bg-*</code> to change the background theme color of avatar.
                </p>
            </b-card-header>

            <b-card-body>
                <div class="d-flex gap-3 flex-wrap">
          <span
              v-for="(avatar, index) in avatars"
              :key="index"
              class="d-flex align-items-center justify-content-center rounded-circle w-45 h-45"
              :class="'bg-' + avatar.colorClass + ' text-white'"

          >
            <component
                v-if="avatar.component"
                :is="avatar.component"
                size="18"
                weight="fill"
            />
            <span v-else>{{ avatar.text }}</span>
          </span>
                </div>
            </b-card-body>

            <b-collapse v-model="open" class="mt-3">
        <pre class="language-html">
<code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Colors&lt;/h5&gt;
    &lt;p class="text-muted"&gt;
      Use color &lt;code&gt;bg-*&lt;/code&gt; to change the background theme color of avatar.
    &lt;/p&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
    &lt;div class="d-flex gap-3 flex-wrap"&gt;
{{
        avatars
            .map(
                (a) =>
                    `      &lt;span class="bg-${a.colorClass} text-white w-45 h-45 rounded-circle d-flex align-items-center justify-content-center" &gt;${a.text || a.raw}&lt;/span&gt;`
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
</template>

