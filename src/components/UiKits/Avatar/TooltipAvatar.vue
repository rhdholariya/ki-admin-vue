<script setup>
import {ref, computed} from "vue";
import {BCard, BCardHeader, BCardBody, BCol, BCollapse} from "bootstrap-vue-next";
import {PhCode, PhUser} from "@phosphor-icons/vue";


// State
const openAvtar = ref(false);

// Data
const avatarGroups = [
    {
        tooltipAvatars: [
            {id: "Tooltip1", src: "/images/avatar/4.png", tooltip: "Hello from Tooltip 1!", bg: "primary"},
            {id: "Tooltip2", src: "/images/avatar/5.png", tooltip: "Hello from Tooltip 2!", bg: "success"},
            {id: "Tooltip3", src: "/images/avatar/6.png", tooltip: "Hello from Tooltip 3!", bg: "danger"}
        ]
    },
    {
        tooltipIcons: [
            {id: "Tooltip4", icon: PhUser, tooltip: "Hello from Tooltip 4!", bg: "primary"},
            {id: "Tooltip5", icon: PhUser, tooltip: "Hello from Tooltip 5!", bg: "secondary"},
            {id: "Tooltip6", icon: PhUser, tooltip: "Hello from Tooltip 6!", bg: "success"}
        ]
    },
    {
        tooltipText: [
            {id: "Tooltip7", text: "A", tooltip: "Hello from Tooltip 7!", bg: "danger"},
            {id: "Tooltip8", text: "CD", tooltip: "Hello from Tooltip 8!", bg: "dark"},
            {id: "Tooltip9", text: "XYZ", tooltip: "Hello from Tooltip 9!", bg: "warning"},
            {id: "Tooltip10", text: "2+", tooltip: "2 more", bg: "secondary", size: "30"}
        ]
    }
];


// Generate Prism HTML code
const prismCode = computed(() => ""); // placeholder to remove syntax error
</script>

<template>
    <b-col md="7">
        <b-card no-body>
            <!-- Header -->
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-1">Group with Tooltip</h5>
                    <b-button @click="openAvtar = !openAvtar" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
                <p class="text-muted mb-0">User group with tooltip</p>
            </b-card-header>

            <!-- Body -->
            <b-card-body>
                <div class="d-flex gap-3 flex-wrap">
                    <ul
                        v-for="(group, groupIndex) in avatarGroups"
                        :key="groupIndex"
                        class="avatar-group d-flex gap-2"
                    >
                        <!-- Avatar Images -->
                        <li
                            v-for="a in group.tooltipAvatars || []"
                            :key="a.id"
                            class="rounded-circle overflow-hidden d-flex justify-content-center align-items-center w-45 h-45"
                            :class="`bg-${a.bg}`"
                            v-b-tooltip.hover.top="a.tooltip"
                        >
                            <img :src="a.src" :alt="`Avatar for ${a.tooltip}`" class="img-fluid"/>
                        </li>

                        <!-- Avatar Icons -->
                        <li
                            v-for="a in group.tooltipIcons || []"
                            :key="a.id"
                            class="rounded-circle d-flex justify-content-center align-items-center text-white w-45 h-45"
                            :class="`bg-${a.bg}`"
                            v-b-tooltip.hover.top="a.tooltip"
                        >
                            <component :is="a.icon" size="18" weight="fill"/>
                        </li>

                        <!-- Avatar Text -->
                        <li
                            v-for="a in group.tooltipText || []"
                            :key="a.id"
                            class="rounded-circle d-flex justify-content-center align-items-center text-white"
                            :class="`bg-${a.bg}`"
                            :style="{
                width: (a.size || 45) + 'px',
                height: (a.size || 45) + 'px',
                fontSize: '12px'
              }"
                            v-b-tooltip.hover.top="a.tooltip"
                        >
                            {{ a.text }}
                        </li>
                    </ul>
                </div>
            </b-card-body>

            <!-- Prism Code -->
            <b-collapse v-model="openAvtar">
                <pre class="language-html mb-0"><code class="language-html">
                                   &lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Group with Tooltip&lt;/h5&gt;
    &lt;p class="text-muted"&gt;
      User group with tooltip
    &lt;/p&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
    &lt;div class="d-flex gap-3 flex-wrap"&gt;
                    {{
                        avatarGroups
                            .map((group) => {
                                let items = [];

                                if (group.tooltipAvatars) {
                                    items.push(
                                        group.tooltipAvatars
                                            .map(
                                                (a) => `
  &lt;li class="rounded-circle bg-${a.bg} overflow-hidden d-flex justify-content-center align-items-center w-45 h-45 f-s-12" &gt;
    &lt;img src="${a.src}" alt="Avatar for ${a.tooltip}" class="img-fluid"/&gt;
  &lt;/li&gt;`
                                            )
                                            .join("")
                                    );
                                }

                                if (group.tooltipIcons) {
                                    items.push(
                                        group.tooltipIcons
                                            .map(
                                                (a) => `
  &lt;li class="rounded-circle bg-${a.bg} text-white d-flex justify-content-center align-items-center h-45 w-45 f-s-12"&gt;
    &lt;PhUser size="18" weight="fill" /&gt;
  &lt;/li&gt;`
                                            )
                                            .join("")
                                    );
                                }

                                if (group.tooltipText) {
                                    items.push(
                                        group.tooltipText
                                            .map(
                                                (a) => `
  &lt;li class="rounded-circle bg-${a.bg} text-white d-flex justify-content-center align-items-center w-45 h-45 f-s-12"&gt;
    ${a.text}
  &lt;/li&gt;`
                                            )
                                            .join("")
                                    );
                                }

                                return `&lt;ul class="avatar-group d-flex gap-2"&gt;
${items.join("\n")}
&lt;/ul&gt;`;
                            })
                            .join("\n\n")
                }}  &lt;/div&gt;
  &lt;/b-card-body&gt;
&lt;/b-card&gt;</code></pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
