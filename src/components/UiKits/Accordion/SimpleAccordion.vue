<script setup>
import { ref, watch, nextTick } from "vue";
import {
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BAccordion,
  BAccordionItem,
  BCollapse,
} from "bootstrap-vue-next";
import { PhCode } from "@phosphor-icons/vue";


// Accordion data
const accordionItems = [
  {
    id: "1",
    htmlId: "1",
    title: "Accordion Item #1",
    content:
      "<b> This is the first item's accordion body</b>. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code> .accordion-body </code>, though the transition does limit overflow.",
  },
  {
    id: "2",
    htmlId: "2",
    title: "Accordion Item #2",
    content:
      " <b> This is thesecond item's accordion body</b>. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code> .accordion-body </code>, though the transition does limit overflow."},
  {
    id: "3",
    htmlId: "3",
    title: "Accordion Item #3",
    content:
      "<b> This is the third item's accordion body</b>. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code> .accordion-body </code>, though the transition does limit overflow.",
  },
];

// states
const active = ref("1");
const openCode = ref(false);

// prism setup
const setupPrism = (openRef) => {
  watch(openRef, async (val) => {
    if (val) {
      await nextTick();
      Prism.highlightAll();
    }
  });
};
[openCode].forEach(setupPrism);
</script>

<template>
  <b-col md="6">
    <b-card no-body>
      <!-- Header -->
      <b-card-header >
          <div class="code-header d-flex justify-content-between align-items-center">
        <h5>Simple Accordion</h5>
        <a href="javascript:void(0)" @click="openCode = !openCode">
          <PhCode size="30" weight="bold" class="source" />
        </a>
          </div>
      </b-card-header>

      <!-- Accordion -->
      <b-card-body>
        <b-accordion v-model="active" class="app-accordion accordion-secondary">
          <b-accordion-item
            v-for="({ id, title, content }) in accordionItems"
            :key="id"
            :title="title"
            :id="id"
          >
            <!-- render HTML -->
            <div v-html="content"></div>
          </b-accordion-item>
        </b-accordion>
      </b-card-body>

      <!-- Prism Code Preview -->
      <b-collapse v-model="openCode">
        <pre class="language-html" tabindex="0">
          <code
            class="language-html"
            v-text="`  &lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Simple Accordion&lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
    &lt;b-accordion v-model=&quot;active&quot; class=&quot;app-accordion accordion-secondary&quot;&gt;

${accordionItems
  .map(
    (item) => `  &lt;b-accordion-item title=&quot;${item.title}&quot; id=&quot;${item.id}&quot;&gt;
    &lt;div&gt;${item.content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')}&lt;/div&gt;
  &lt;/b-accordion-item&gt;`
  )
  .join('\n')}
&lt;/b-accordion&gt;
&lt;/b-card-body&gt;
&lt;/b-card&gt;`"

          ></code>

        </pre>
      </b-collapse>
    </b-card>
  </b-col>
</template>
