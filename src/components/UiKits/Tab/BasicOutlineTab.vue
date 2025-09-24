<script setup>
import { ref } from "vue";
import { BCol, BCard, BCardHeader, BCardBody, BTabs, BTab, BCollapse, BButton } from "bootstrap-vue-next";
import { PhCode } from "@phosphor-icons/vue";

// Convert tab content to arrays instead of HTML strings
const tabs = [
    {
        label: "HTML",
        content: [
            "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
            "It can be helped by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
        ],
    },
    {
        label: "CSS",
        content: [
            "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
            "CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
        ],
    },
    {
        label: "PHP",
        content: [
            "PHP is a popular general-purpose scripting language especially suited to web development.",
            "It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group."
        ],
    },
];

// Collapse state
const openBasic = ref(false);
const openOutline = ref(false);
</script>

<template>
    <b-col lg="6">
        <b-card no-body>
            <!-- Header -->
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Basic Tabs</h5>
                    <b-button @click="openBasic = !openBasic" class="p-0 border-0">
                        <PhCode size="30" class="source" weight="bold"/>
                    </b-button>
                </div>
            </b-card-header>

            <!-- Tabs -->
            <b-tabs pills card class="app-tabs-primary">
                <b-tab
                    v-for="(tab, i) in tabs"
                    :key="i"
                    :title="tab.label"
                    :active="i === 0"
                    title-class="bg-primary text-white"
                >

                    <p v-for="(line, j) in tab.content" :key="j" class="mb-0">{{ line }}</p>
                </b-tab>
            </b-tabs>

            <!-- Prism Code Collapse -->
            <b-collapse v-model="openBasic">
        <pre class="language-html" tabindex="0">
          <code>{{ `
&lt;b-tabs pills card class='app-tabs-primary'&gt;
${tabs
              .map(
                  (t, i) => `  &lt;b-tab title=&quot;${t.label}&quot; title-class=&quot;bg-primary text-white&quot;${i === 0 ? ' active' : ''}&gt;
${t.content.map(line => `    &lt;p&gt;${line}&lt;/p&gt;`).join('\n')}
  &lt;/b-tab&gt;`
  )
  .join('\n')}
&lt;/b-tabs&gt;` }}</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>

    <b-col lg="6">
        <b-card no-body>
            <!-- Header -->
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Outline Tabs</h5>
                    <b-button @click="openOutline = !openOutline" class="p-0 border-0">
                        <PhCode size="30" class="source" weight="bold"/>
                    </b-button>
                </div>
            </b-card-header>

            <!-- Tabs -->
            <b-tabs pills card class="tab-outline-primary">
                <b-tab
                    v-for="(tab, i) in tabs"
                    :key="i"
                    :title="tab.label"
                    :active="i === 0"
                    title-class="outline-primary text-white"
                >
                    <!-- Render content declaratively instead of v-html -->
                    <p v-for="(line, j) in tab.content" :key="j" class="mb-0">{{ line }}</p>
                </b-tab>
            </b-tabs>

            <!-- Prism Code Collapse -->
            <b-collapse v-model="openOutline">
        <pre class="language-html" tabindex="0">
          <code>{{ `
&lt;b-tabs pills card class='tab-outline-primary'&gt;
${tabs
              .map(
                  (t, i) => `  &lt;b-tab title=&quot;${t.label}&quot; title-class=&quot;outline-primary text-white&quot;${i === 0 ? ' active' : ''}&gt;
${t.content.map(line => `    &lt;p&gt;${line}&lt;/p&gt;`).join('\n')}
  &lt;/b-tab&gt;`
  )
  .join('\n')}
&lt;/b-tabs&gt;` }}</code>
        </pre>
            </b-collapse>
        </b-card>


    </b-col>
</template>
