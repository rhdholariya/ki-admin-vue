<script setup>
import {ref, watch, nextTick} from "vue";
import {
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BAccordion,
    BAccordionItem,
    BCollapse,
} from "bootstrap-vue-next";
import {PhCode} from "@phosphor-icons/vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

// ----- Outline Accordion Data -----
const outlineAccordionItems = [
    {
        id: "1",
        title: "Accordion Item #1",
        content: `<b>This is the first item's accordion body.</b> It is shown by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These
    classes control the overall appearance, as well as the showing and hiding via CSS
    transitions. You can modify any of this with custom CSS or overriding our default variables.
    It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
    though the transition does limit overflow.`,
    },
    {
        id: "2",
        title: "Accordion Item #2",
        content: `<b>This is the second item's accordion body. </b> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These
    classes control the overall appearance, as well as the showing and hiding via CSS
    transitions.`,
    },
    {
        id: "3",
        title: "Accordion Item #3",
        content: `<b>This is the third item's accordion body.</b> It is hidden by default, until the
    collapse plugin adds the appropriate classes. Any HTML can go within the <code>.accordion-body</code>.`,
    },
];

// ----- Light Accordion Data -----
const lightAccordionItems = [
    {
        id: "1",
        title: "Accordion Item #1",
        content: `Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-light</code> class.
    This is the first item's accordion body.`,
    },
    {
        id: "2",
        title: "Accordion Item #2",
        content: `Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-light</code> class.
    This is the second item's accordion body.`,
    },
    {
        id: "3",
        title: "Accordion Item #3",
        content: `Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-light</code> class.
    This is the third item's accordion body.`,
    },
];

// ----- States -----
const activeOutline = ref("1");
const activeLight = ref("1");
const activeFlush = ref("flush-1");

// Prism toggle states
const openOutline = ref(false);
const openLight = ref(false);
const openFlush = ref(false);

// Prism watcher
[openOutline, openLight, openFlush].forEach((state) => {
    watch(state, async (val) => {
        if (val) {
            await nextTick();
            Prism.highlightAll();
        }
    });
});
</script>

<template>
    <!-- Outline Accordion -->
    <b-col lg="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Outline Accordion</h5>
                    <a href="javascript:void(0)" @click="openOutline = !openOutline">
                        <PhCode size="30" class="source"/>
                    </a>
                </div>
            </b-card-header>
            <b-card-body>
                <b-accordion v-model="activeOutline" class="app-accordion accordion-outline-secondary">
                    <b-accordion-item
                        v-for="({ id, title, content }) in outlineAccordionItems"
                        :key="id"
                        :id="id"
                        :title="title"
                    >
                        <div v-html="content"></div>
                    </b-accordion-item>
                </b-accordion>
            </b-card-body>
            <b-collapse v-model="openOutline">
        <pre class="language-html"><code class="language-html"
                                         v-text="`
     &lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Outline Accordion&lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
     &lt;b-accordion v-model=&quot;activeOutline&quot; class=&quot;app-accordion accordion-outline-secondary&quot;&gt;
${outlineAccordionItems
  .map(
    (item) => `  &lt;b-accordion-item id=&quot;${item.id}&quot; title=&quot;${item.title}&quot;&gt;
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
        ></code></pre>
            </b-collapse>
        </b-card>
    </b-col>

    <!-- Light Accordion -->
    <b-col lg="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Light Accordion</h5>
                    <a href="javascript:void(0)" @click="openLight = !openLight">
                        <PhCode size="30" weight="bold" class="source"/>
                    </a>
                </div>
            </b-card-header>
            <b-card-body>
                <b-accordion v-model="activeLight" class="app-accordion accordion-light-secondary">
                    <b-accordion-item
                        v-for="({ id, title, content }) in lightAccordionItems"
                        :key="id"
                        :id="id"
                        :title="title"
                    >
                        <div v-html="content"></div>
                    </b-accordion-item>
                </b-accordion>
            </b-card-body>
            <b-collapse v-model="openLight">
        <pre class="language-html"><code class="language-html"
                                         v-text="`
                       &lt;b-card no-body&gt;
                    &lt;b-card-header&gt;
                    &lt;h5&gt;Light Accordion&lt;/h5&gt;
                    &lt;/b-card-header&gt;
                      &lt;b-card-body&gt;
                            &lt;b-accordion v-model=&quot;activeLight&quot; class=&quot;app-accordion accordion-light-secondary&quot;&gt;
${lightAccordionItems
  .map(
    (item) => `  &lt;b-accordion-item id=&quot;${item.id}&quot; title=&quot;${item.title}&quot;&gt;
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
        ></code></pre>
            </b-collapse>
        </b-card>
    </b-col>

    <!-- Flush Accordion -->
    <b-col lg="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Flush Accordion (No Border)</h5>
                    <a href="javascript:void(0)" @click="openFlush = !openFlush">
                        <PhCode size="30" weight="bold" class="source"/>
                    </a>
                </div>
            </b-card-header>
            <b-card-body>
                <b-accordion v-model="activeFlush" class="accordion-flush app-accordion accordion-secondary">
                    <b-accordion-item
                        v-for="num in [1,2,3]"
                        :key="num"
                        :id="`flush-${num}`"
                        :title="`Accordion Item #${num}`"
                    >
                        <div>
                            Placeholder content for this accordion, which is intended to demonstrate the
                            <code>.accordion-flush</code> class. This is the {{ num }}'s accordion body.
                        </div>
                    </b-accordion-item>
                </b-accordion>
            </b-card-body>

            <b-collapse v-model="openFlush">
        <pre class="language-html"><code class="language-html"
                                         v-text="`
                      &lt;b-card no-body&gt;
                    &lt;b-card-header&gt;
                    &lt;h5&gt;Flush Accordion (No Border)&lt;/h5&gt;
                    &lt;/b-card-header&gt;
                      &lt;b-card-body&gt;
                                         &lt;b-accordion v-model=&quot;activeFlush&quot; class=&quot;accordion-flush app-accordion accordion-secondary&quot;&gt;
${[1,2,3].map(num =>
`  &lt;b-accordion-item id=&quot;flush-${num}&quot; title=&quot;Accordion Item #${num}&quot;&gt;
    &lt;div&gt;
      Placeholder content for this accordion, which is intended to demonstrate the &lt;code&gt;.accordion-flush&lt;/code&gt; class.
      This is the ${num}'s accordion body.
    &lt;/div&gt;
  &lt;/b-accordion-item&gt;`
).join('\n')}
&lt;/b-accordion&gt;
&lt;/b-card-body&gt;
&lt;/b-card&gt;`"
        ></code></pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
