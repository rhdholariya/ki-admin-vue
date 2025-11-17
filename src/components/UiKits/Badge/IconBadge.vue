<script setup>
import { ref} from "vue";
import {BCard, BCol, BRow, BCollapse, BButton, BCardBody, BCardHeader} from "bootstrap-vue-next";
import {
    PhCode,
    PhShoppingCart,
    PhDotsThreeOutline,
    PhMegaphoneSimple,
    PhEnvelopeSimple,
    PhMoon,
} from "@phosphor-icons/vue";




const badgePositionData = [
    { label: "Offline", bgColor: "danger", positionClass: "top-0 start-0" },
    { label: "Busy", bgColor: "warning", positionClass: "top-0 start-100" },
    { label: "Online", bgColor: "success", positionClass: "top-100 start-0" },
    { label: "Disable", bgColor: "secondary", positionClass: "top-100 start-100" },
];


const badgeIconData = [
    { icon: PhShoppingCart, color: "primary", type: "<PhShoppingCart size='22' />" },
    { icon: PhDotsThreeOutline, color: "secondary", type: "<PhDotsThreeOutline size='22' />" },
    { icon: PhMegaphoneSimple, color: "success", type: "<PhMegaphoneSimple size='22' />" },
    { icon: PhEnvelopeSimple, color: "danger", type: "<PhEnvelopeSimple size='22' />" },
    { icon: PhMoon, color: "dark", type: "<PhMoon size='22' weight='fill' />" },
];


const openPosition = ref(false);
const openIcon = ref(false);

</script>

<template>
    <b-row>
        <!-- Badge Position -->
        <b-col sm="12" xl="6">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Badges Position</h5>
                        <b-button @click="openPosition = !openPosition" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source" />
                        </b-button>
                    </div>
                </b-card-header>
                 <b-card-body>
                <div class="d-flex flex-wrap gap-3">
                    <b-button
                        v-for="{ label, bgColor, positionClass } in badgePositionData"
                        :key="label"
                        :variant="`outline-${bgColor}`"
                        class="position-relative"
                    >
                        {{ label }}
                        <span
                            :class="`position-absolute ${positionClass} translate-middle p-1 bg-${bgColor} border border-light rounded-circle`"
                        >
              <span class="visually-hidden">{{ label }}</span>
            </span>
                    </b-button>
                </div>

                <b-collapse v-model="openPosition" class="mt-3">
<pre class="language-html"><code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Badges Position&lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-3"&gt;
{{ badgePositionData
    .map(
        ({ label, bgColor, positionClass }) =>
            `    &lt;b-button variant="outline-${bgColor}" class="position-relative"&gt;
      ${label}
      &lt;span class="position-absolute ${positionClass} translate-middle p-1 bg-${bgColor} border border-light rounded-circle"&gt;
        &lt;span class="visually-hidden"&gt;${label}&lt;/span&gt;
      &lt;/span&gt;
    &lt;/b-button&gt;`
    )
    .join("\n") }}
  &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code></pre>
                </b-collapse>
                 </b-card-body>
            </b-card>
        </b-col>

        <!-- Icon Badges -->
        <b-col sm="12" xl="6">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Icon's Badges</h5>
                        <b-button @click="openIcon = !openIcon" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source" />
                        </b-button>
                    </div>
                </b-card-header>
                   <b-card-body>
                <div class="d-flex flex-wrap gap-3">
                    <a
                        v-for="{ icon, color } in badgeIconData"
                        :key="color"
                        href="javascript:void(0)"
                        :class="`position-relative bg-light-${color} p-2 rounded`"
                    >
                        <component :is="icon" size="22" />
                        <span
                            :class="`position-absolute top-0 start-100 translate-middle p-1 bg-${color} rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast`"
                        ></span>
                    </a>
                </div>

                <b-collapse v-model="openIcon" class="mt-3">
<pre class="language-html"><code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Icon's Badges&lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-3"&gt;
{{ badgeIconData
    .map(
        ({ type, color }) =>
            `    &lt;a href="javascript:void(0)" class="position-relative bg-light-${color} p-2 rounded"&gt;
      ${type}
      &lt;span class="position-absolute top-0 start-100 translate-middle p-1 bg-${color} rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"&gt;&lt;/span&gt;
    &lt;/a&gt;`
    )
    .join("\n") }}
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
