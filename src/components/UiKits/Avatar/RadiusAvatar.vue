<script setup>
import { ref, watch, nextTick } from "vue";
import {
    BCard,
    BCardBody,
    BCardHeader,
    BCol,
    BCollapse,
} from "bootstrap-vue-next";
import { PhCode, PhUser } from "@phosphor-icons/vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const openAvtar2 = ref(false);

const radiusAvatarColors = [
    { radius: 0, colorClass: "light-primary" },
    { radius: 6, colorClass: "light-secondary" },
    { radius: 10, colorClass: "light-success" },
    { radius: 14, colorClass: "light-info" },
    { radius: 20, colorClass: "light-warning" },
    { radius: 30, colorClass: "light-danger" },
];


// Watch collapse open → Prism highlight
watch(openAvtar2, async (val) => {
    if (val) {
        await nextTick();
        Prism.highlightAll();
    }
});
</script>

<template>
    <b-col md="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex align-items-center justify-content-between">
                    <h5>Radius</h5>
                    <a @click="openAvtar2 = !openAvtar2">
                        <PhCode size="30" weight="bold" class="source" />
                    </a>
                </div>
                <p class="text-muted">Radius avatar text in soft color example</p>
            </b-card-header>

            <b-card-body>
                <div class="d-flex gap-3 flex-wrap">
          <span
              v-for="(avatar, index) in radiusAvatarColors"
              :key="index"
              :class="`text-${avatar.colorClass} h-45 w-45 d-flex-center b-r-${avatar.radius}`"
          >
            <PhUser size="18" weight="fill" />
          </span>
                </div>
            </b-card-body>

            <b-collapse v-model="openAvtar2">
        <pre class="mt-3 language-html">
          <code class="language-html">
                &lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Radius&lt;/h5&gt;
    &lt;p class="text-muted"&gt;
      Radius avatar text in soft color example
    &lt;/p&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
    &lt;div class="d-flex gap-3 flex-wrap"&gt;
              {{radiusAvatarColors
              .map(
                  (avatar) => `      &lt;span class="text-${avatar.colorClass} h-45 w-45 d-flex-center b-r-${avatar.radius}"&gt;
        &lt;PhUser size="18" weight="fill"/&gt;
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

