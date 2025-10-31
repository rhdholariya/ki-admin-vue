<script setup>
import { ref, watch, nextTick } from "vue";
import Prism from "prismjs"
import "prismjs/themes/prism.css"
import {
    BButton,
    BCard,
    BCardBody,
    BCardHeader,
    BCol,
    BCollapse,
} from "bootstrap-vue-next";
import { PhCode, PhUser } from "@phosphor-icons/vue";

const openAvtar3 = ref(false);

const outlineAvatarColors = [
    { colorClass: "primary", icon: PhUser, isIcon: true },
    { colorClass: "secondary", icon: PhUser, isIcon: true },
    { colorClass: "success", icon: PhUser, isIcon: true },
    { colorClass: "info", icon: PhUser, isIcon: true },
    { colorClass: "warning", icon: "AR", isIcon: false },
    { colorClass: "danger", icon: "TE", isIcon: false },
];

// Watch collapse open → Prism highlight
watch(openAvtar3, async (val) => {
    if (val) {
        await nextTick();
        Prism.highlightAll();
    }
});
</script>
<template>
    <b-col md="6">
        <b-card class="equal-card" no-body>
            <b-card-header>
                <div class="code-header d-flex align-items-center justify-content-between">
                    <h5>Outline</h5>
                    <b-button @click="openAvtar3 = !openAvtar3" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </b-button>
                </div>
                <p class="text-muted">
                    For outline style use <code>text-outline-*</code> class.
                </p>
            </b-card-header>

            <b-card-body>
                <div class="d-flex gap-3 flex-wrap">
          <span
              v-for="(avatar, index) in outlineAvatarColors"
              :key="index"
              :class="`text-outline-${avatar.colorClass} h-45 w-45 d-flex-center b-r-50`"
          >
            <component
                v-if="avatar.isIcon"
                :is="avatar.icon"
                size="18"
                weight="fill"
            />
            <span v-else>{{ avatar.icon }}</span>
          </span>
                </div>
            </b-card-body>

            <b-collapse v-model="openAvtar3">
        <pre class="mt-3 language-html">
          <code class="language-html" >
              &lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Colors&lt;/h5&gt;
    &lt;p class="text-muted"&gt;
      For outline style use &lt;code&gt;text-outline-*&lt;/code&gt; class.
    &lt;/p&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
    &lt;div class="d-flex gap-3 flex-wrap"&gt;
              {{outlineAvatarColors
              .map((avatar) =>
                  avatar.isIcon
                      ? `      &lt;span class="text-outline-${avatar.colorClass} h-45 w-45 d-flex-center b-r-50"&gt;
       &lt;PhUser size="18" weight="fill" /&gt;
      &lt;/span&gt;`
            : `      &lt;span class="text-outline-${avatar.colorClass} h-45 w-45 d-flex-center b-r-50"&gt;
        ${avatar.icon}
      &lt;/span&gt;`
    )
    .join("\n")}}
              &lt;/div&gt;
  &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>


