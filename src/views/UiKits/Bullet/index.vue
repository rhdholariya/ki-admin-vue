<script setup>
import {ref, watch, nextTick} from 'vue'
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BCollapse
} from "bootstrap-vue-next"
import {
    PhStarFour,
    PhCaretRight,
    PhArrowFatLineRight,
    PhArrowBendDownRight,
    PhPlus,
    PhCode,
} from '@phosphor-icons/vue'
import {PhBriefcase} from "@phosphor-icons/vue"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue"
import AppLayout from "@/views/AppLayout.vue"

// === Bullet Variants
const bulletVariants = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
]

// === Open states for all 12 bullet types
const openStates = Array.from({length: 12}, () => ref(false))

// === PrismJS dynamic highlight
watch(
    openStates,
    async () => {
        if (openStates.some(s => s.value)) {
            const Prism = await import('prismjs')
            nextTick(() => Prism.highlightAll())
        }
    },
    {deep: true}
)


// === Breadcrumb data
const breadcrumbItems = {
    title: "Bullet",
    items: [
        {label: "Ui Kits", icon: PhBriefcase},
        {label: "Bullet", active: true},
    ]
}
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row class="list-item bullet-item g-3">

                    <!-- Diamond Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between">
                                    <h5>Diamond Bullet</h5>
                                    <a @click="openStates[0].value = !openStates[0].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant"
                                        :class="`diamond diamond-bullet-${variant}`">
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[0].value">
                <pre class="language-html">
<code>
{{
        '&lt;ul&gt;\n' + bulletVariants.map(v =>
            `  &lt;li&gt;&lt;PhDiamond size="16" weight="fill" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`).join('\n') + '\n&lt;/ul&gt;'
    }}
</code>
</pre>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Heart Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between">
                                    <h5>Heart Bullet</h5>
                                    <a @click="openStates[1].value = !openStates[1].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant"
                                        :class="`heart heart-bullet-${variant}`">
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[1].value">
               <pre class="language-html">
                   <code>
{{
                           '&lt;ul&gt;\n' + bulletVariants.map(v =>
                               `  &lt;li&gt;&lt;PhHeart size="16" weight="fill" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`).join('\n') + '\n&lt;/ul&gt;'
                       }}
</code>
        </pre>

                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Star Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between">
                                    <h5>Star Bullet</h5>
                                    <a @click="openStates[2].value = !openStates[2].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant" class="bullet-list-box">
                                        <PhStarFour size="16" weight="fill" :class="`text-${variant} me-2`"/>
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[2].value">
        <pre class="language-html"><code>
{{
                '&lt;ul&gt;\n' + bulletVariants
                    .map(v => `  &lt;li&gt;&lt;PhStarFour weight="bold" size="16" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`)
                    .join('\n') + '\n&lt;/ul&gt;'
            }}
        </code></pre>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Right Arrow Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between">
                                    <h5>Right Arrow Bullet</h5>
                                    <a @click="openStates[3].value = !openStates[3].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant"
                                        class="bullet-list-box right-arrow">
                                        <PhArrowFatLineRight size="16" weight="fill" :class="`text-${variant} me-2`"/>
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[3].value">
                <pre class="language-html"><code>
{{
                        '&lt;ul&gt;\n' + bulletVariants
                            .map(v => `  &lt;li&gt;&lt;PhArrowFatLineRight weight="fill" size="16" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`)
                            .join('\n') + '\n&lt;/ul&gt;'
                    }}
        </code></pre>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Corner Arrow Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between">
                                    <h5>Corner Arrow Bullet</h5>
                                    <a @click="openStates[4].value = !openStates[4].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant"
                                        class="bullet-list-box corner-arrow">
                                        <PhArrowBendDownRight size="16" weight="fill" :class="`text-${variant} me-2`"/>
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[4].value">
                  <pre class="language-html"><code>
{{
                          '&lt;ul&gt;\n' + bulletVariants
                              .map(v => `  &lt;li&gt;&lt;PhArrowBendDownRight weight="fill" size="16" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`)
                              .join('\n') + '\n&lt;/ul&gt;'
                      }}
        </code></pre>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Line Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class=" code-header d-flex justify-content-between">
                                    <h5>Line Bullet</h5>
                                    <a @click="openStates[5].value = !openStates[5].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant"
                                        :class="`line line-bullet-${variant}`">
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[5].value">
        <pre class="language-html"><code>
{{
                '&lt;ul&gt;\n' + bulletVariants
                    .map(v => `  &lt;li&gt;&lt;PhArrowFatLineRight size="16" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`)
                    .join('\n') + '\n&lt;/ul&gt;'
            }}
        </code></pre>
                                </b-collapse>
                            </b-card-body>

                        </b-card>
                    </b-col>

                    <!-- Arrow Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class="code-header d-flex justify-content-between">
                                    <h5>Arrow Bullet</h5>
                                    <a @click="openStates[6].value = !openStates[6].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant" class="bullet-list-box">
                                        <PhCaretRight size="16" weight="bold" :class="`text-${variant} me-2`"/>
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[6].value">
        <pre class="language-html"><code>
{{
                '&lt;ul&gt;\n' + bulletVariants
                    .map(v => `  &lt;li&gt;&lt;PhCaretRight weight="fill" size="16" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`)
                    .join('\n') + '\n&lt;/ul&gt;'
            }}
        </code></pre>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Circle Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class=" code-header d-flex justify-content-between">
                                    <h5>Circle Bullet</h5>
                                    <a @click="openStates[7].value = !openStates[7].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant"
                                        :class="`circle circle-bullet-${variant}`">
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[7].value">
        <pre class="language-html"><code>
{{
                '&lt;ul&gt;\n' + bulletVariants
                    .map(v => `  &lt;li&gt;&lt;PhCircle weight="fill" size="16" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`)
                    .join('\n') + '\n&lt;/ul&gt;'
            }}
        </code></pre>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Triangle Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class=" code-header d-flex justify-content-between">
                                    <h5>Triangle Bullet</h5>
                                    <a @click="openStates[8].value = !openStates[8].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant"
                                        :class="`triangle triangle-bullet-${variant}`">
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[8].value">
        <pre class="language-html"><code>
{{
                '&lt;ul&gt;\n' + bulletVariants
                    .map(v => `  &lt;li&gt;&lt;PhTriangle weight="fill" size="16" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`)
                    .join('\n') + '\n&lt;/ul&gt;'
            }}
        </code></pre>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Square Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class=" code-header d-flex justify-content-between">
                                    <h5>Square Bullet</h5>
                                    <a @click="openStates[9].value = !openStates[9].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant"
                                        :class="`square square-bullet-${variant}`">
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[9].value">
        <pre class="language-html"><code>
{{
                '&lt;ul&gt;\n' + bulletVariants
                    .map(v => `  &lt;li&gt;&lt;PhSquare size="16" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`)
                    .join('\n') + '\n&lt;/ul&gt;'
            }}
        </code></pre>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Plus Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class=" code-header d-flex justify-content-between">
                                    <h5>Plus Bullet</h5>
                                    <a @click="openStates[10].value = !openStates[10].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant" class="bullet-list-box">
                                        <PhPlus size="16" weight="bold" :class="`text-${variant} me-2`"/>
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[10].value">
        <pre class="language-html"><code>
{{
                '&lt;ul&gt;\n' + bulletVariants
                    .map(v => `  &lt;li&gt;&lt;PhPlus weight="fill" size="16" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`)
                    .join('\n') + '\n&lt;/ul&gt;'
            }}
        </code></pre>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Burst Bullet -->
                    <b-col sm="6" lg="4" xxl="3">
                        <b-card no-body>
                            <b-card-header>
                                <div class=" code-header d-flex justify-content-between">
                                    <h5>Burst Bullet</h5>
                                    <a @click="openStates[11].value = !openStates[11].value">
                                        <PhCode size="30" weight="bold" class="source"/>
                                    </a>
                                </div>
                            </b-card-header>
                            <b-card-body>
                                <ul>
                                    <li v-for="variant in bulletVariants" :key="variant"
                                        :class="`burst burst-bullet-${variant}`">
                                        {{ variant }} Bullet
                                    </li>
                                </ul>
                                <b-collapse v-model="openStates[11].value">
  <pre class="language-html"><code>
{{
          '&lt;ul&gt;\n' + bulletVariants
              .map(v => `  &lt;li&gt;&lt;PhSparkle size="16" weight="fill" class="text-${v} me-2"/&gt; ${v} Bullet&lt;/li&gt;`)
              .join('\n') + '\n&lt;/ul&gt;'
      }}
  </code></pre>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
