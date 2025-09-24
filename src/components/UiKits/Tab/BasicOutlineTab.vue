<script setup>
import { ref, watch } from "vue";
import { BCol, BCard, BCardHeader, BCardBody, BTabs, BTab, BCollapse } from "bootstrap-vue-next";
import { PhCode } from "@phosphor-icons/vue";


const tabs = [
  {
    label: "HTML",
    content: `
<p class="mb-0">Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.</p>
<p class="mb-0">It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
`,
  },
  {
    label: "CSS",
    content: `
<p class="mb-0">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
<p class="mb-0">CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
`,
  },
  {
    label: "PHP",
    content: `
<p class="mb-0">PHP is a popular general-purpose scripting language that is especially suited to web development.</p>
<p class="mb-0">It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group.</p>
`,
  },
];

// Collapse state
const openBasic = ref(false);
const openOutline = ref(false);

// Watch collapses and highlight code **when opened**
watch(openBasic, (val) => {
  if (val) Prism.highlightAll();
});
watch(openOutline, (val) => {
  if (val) Prism.highlightAll();
});


</script>

<template>
  <b-col lg="6">
    <b-card no-body>
      <!-- Header -->
      <b-card-header >
          <div class="code-header d-flex justify-content-between align-items-center">
        <h5>Basic Tabs</h5>
        <a href="javascript:void(0)" @click="openBasic = !openBasic">
          <PhCode size="30" class="source" weight="bold"/>
        </a>
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
            <div v-html="tab.content"></div>
          </b-tab>
        </b-tabs>

        <!-- Prism Code Collapse -->
        <b-collapse v-model="openBasic">
          <pre class="language-html" tabindex="0">
<code class="language-html" v-text="`<b-tabs pills card class='app-tabs-primary'>
${tabs
  .map(
    (t, i) => `  <b-tab title=&quot;${t.label}&quot; title-class=&quot;bg-primary text-white&quot;${i === 0 ? ' active' : ''}>
    ${t.content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
  </b-tab>`
  )
  .join('\n')}
</b-tabs>`"></code>
          </pre>
        </b-collapse>
        
     </b-card>
    
  </b-col>
   <b-col lg="6">
  <b-card no-body>
    <!-- Header -->
    <b-card-header >
        <div class="code-header d-flex justify-content-between align-items-center">
      <h5>Outline Tabs</h5>
      <a href="javascript:void(0)" @click="openOutline = !openOutline">
        <PhCode size="30" class="source" weight="bold"/>
      </a>
        </div>
    </b-card-header>

    <!-- Tabs -->
    <b-tabs pills card class="tab-outline-primary ">
      <b-tab
        v-for="(tab, i) in tabs"
        :key="i"
        :title="tab.label"
        :active="i === 0"
        title-class="outline-primary text-white" 
      >
        <div v-html="tab.content"></div>
      </b-tab>
    </b-tabs>

    <!-- Prism Code Collapse -->
    <b-collapse v-model="openOutline">
      <pre class="language-html" tabindex="0">
<code class="language-html" v-text="`<b-tabs pills card class=tab-outline-primary>
${tabs
  .map(
    (t, i) => `  <b-tab title=&quot;${t.label}&quot; title-class=&quot;outline-primary text-white&quot;${i === 0 ? ' active' : ''}>
    ${t.content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
  </b-tab>`
  )
  .join('\n')}
</b-tabs>`"></code>
      </pre>
    </b-collapse>
  </b-card>

  

</b-col>
</template>
