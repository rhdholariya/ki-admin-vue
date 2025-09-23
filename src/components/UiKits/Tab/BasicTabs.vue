<!--<script setup>-->
<!--import {ref, watch, nextTick} from "vue";-->
<!--import {-->
<!--    BCard,-->
<!--    BCardHeader,-->
<!--    BCardBody,-->
<!--    BCol,-->
<!--    BTabs,-->
<!--    BTab,-->
<!--    BCollapse,-->
<!--} from "bootstrap-vue-next";-->
<!--import { PhCode } from "@phosphor-icons/vue";-->

<!--const activeTab = ref("html");-->
<!--const open = ref(false);-->
<!--const openOutline = ref(false);-->
<!--// Prism setup function for multiple collapses-->
<!--[open, openOutline,].forEach((state) => {-->
<!--    watch(state, async (val) => {-->
<!--        if (val) {-->
<!--            await nextTick();-->
<!--            Prism.highlightAll();-->
<!--        }-->
<!--    });-->
<!--});-->

<!--// Tabs data-->
<!--const tabs = [-->
<!--    {-->
<!--        key: "html",-->
<!--        label: "HTML",-->
<!--        content: [-->
<!--            "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.",-->
<!--            "It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",-->
<!--        ],-->
<!--    },-->
<!--    {-->
<!--        key: "css",-->
<!--        label: "CSS",-->
<!--        content: [-->
<!--            "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",-->
<!--            "CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",-->
<!--        ],-->
<!--    },-->
<!--    {-->
<!--        key: "php",-->
<!--        label: "PHP",-->
<!--        content: [-->
<!--            "PHP is a popular general-purpose scripting language that is especially suited to web development.",-->
<!--            "It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group.",-->
<!--        ],-->
<!--    },-->
<!--];-->

<!--const tabsOutline = [-->
<!--    {-->
<!--        key: "connect",-->
<!--        label: "Connect",-->
<!--        content: [-->
<!--            "This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.",-->
<!--        ],-->
<!--    },-->
<!--    {-->
<!--        key: "discover",-->
<!--        label: "Discover",-->
<!--        content: [-->
<!--            "This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.",-->
<!--        ],-->
<!--    },-->
<!--    {-->
<!--        key: "order",-->
<!--        label: "Orders",-->
<!--        content: [-->
<!--            "This field is a rich HTML field with a content editor like others used in Sitefinity. It accepts images, video, tables, text, etc. Street art polaroid microdosing la croix taxidermy. Jean shorts kinfolk distillery lumbersexual pinterest XOXO semiotics.",-->
<!--        ],-->
<!--    },-->
<!--];-->

<!--</script>-->

<!--<template>-->
<!--    <b-col lg="6">-->
<!--        <b-card no-body>-->
<!--            &lt;!&ndash; Card Header &ndash;&gt;-->
<!--            <b-card-header>-->
<!--                <div class="code-header d-flex justify-content-between align-items-center">-->
<!--                <h5 class="mb-0">Basic Tabs</h5>-->
<!--                <a role="button" href="javascript:void(0)" @click="open = !open">-->
<!--                    <PhCode size="30" weight="bold" class="source" />-->
<!--                </a>-->
<!--                </div>-->
<!--            </b-card-header>-->

<!--            &lt;!&ndash; Card Body &ndash;&gt;-->
<!--            <b-card-body>-->
<!--                &lt;!&ndash; BootstrapVueNext Tabs &ndash;&gt;-->
<!--                <b-tabs v-model="activeTab" nav-class="app-tabs-primary">-->
<!--                    <b-tab-->
<!--                        v-for="tab in tabs"-->
<!--                        :key="tab.key"-->
<!--                        :title="tab.label"-->
<!--                        :active="tab.key === activeTab"-->
<!--                    >-->
<!--                        <p-->
<!--                            v-for="(line, index) in tab.content"-->
<!--                            :key="index"-->
<!--                            class="f-s-15"-->
<!--                        >-->
<!--                            {{ line }}-->
<!--                        </p>-->
<!--                    </b-tab>-->
<!--                </b-tabs>-->
<!--            </b-card-body>-->

<!--            &lt;!&ndash; Code Preview &ndash;&gt;-->
<!--            <b-collapse v-model="open">-->
<!--        <pre class="language-html mb-0 mt-3">-->
<!--<code class="language-html">-->
<!--    &lt;b-card no-body&gt;-->
<!--  &lt;b-card-header&gt;-->
<!--    &lt;h5&gt;Basic Tabs&lt;/h5&gt;-->
<!--  &lt;/b-card-header&gt;-->
<!--  &lt;b-card-body&gt;-->
<!--    &lt;div class="d-flex gap-3 flex-wrap"&gt;-->
<!--{{ `-->
<!--&ltb-tabs v-model="activeTab" nav-class="app-tabs-primary"&gt;-->
<!--${tabs-->
<!--  .map(-->
<!--    (tab) => `  &ltb-tab title="${tab.label}"&gt;-->
<!--${tab.content.map((line) => `    &ltp class="f-s-15"&gt;${line}&lt/p&gt;`).join("\n")}-->
<!--  &lt/b-tab&gt;`-->
<!--  )-->
<!--  .join("\n")}-->
<!--&lt;/b-tabs&gt;` }}-->
<!--    &lt;/div&gt;-->
<!--  &lt;/b-card-body&gt;-->
<!--&lt;/b-card&gt;-->
<!--</code>-->
<!--        </pre>-->
<!--            </b-collapse>-->
<!--        </b-card>-->
<!--    </b-col>-->
<!--    <b-col lg="6">-->
<!--        <b-card no-body>-->
<!--            &lt;!&ndash; Card Header &ndash;&gt;-->
<!--            <b-card-header>-->
<!--                <div class="code-header d-flex justify-content-between align-items-center">-->
<!--                    <h5 class="mb-0">Basic Tabs</h5>-->
<!--                    <a role="button" href="javascript:void(0)" @click="openOutline = !openOutline">-->
<!--                        <PhCode size="30" weight="bold" class="source" />-->
<!--                    </a>-->
<!--                </div>-->
<!--            </b-card-header>-->

<!--            &lt;!&ndash; Card Body &ndash;&gt;-->
<!--            <b-card-body>-->
<!--                &lt;!&ndash; BootstrapVueNext Tabs &ndash;&gt;-->
<!--                <b-tabs v-model="activeTab" nav-class="tab-outline-primary">-->
<!--                    <b-tab-->
<!--                        v-for="tab in tabsOutline"-->
<!--                        :key="tab.key"-->
<!--                        :title="tab.label"-->
<!--                        :active="tab.key === activeTab"-->
<!--                    >-->
<!--                        <p-->
<!--                            v-for="(line, index) in tab.content"-->
<!--                            :key="index"-->
<!--                            class="f-s-15"-->
<!--                        >-->
<!--                            {{ line }}-->
<!--                        </p>-->
<!--                    </b-tab>-->
<!--                </b-tabs>-->
<!--            </b-card-body>-->

<!--            &lt;!&ndash; Code Preview &ndash;&gt;-->
<!--            <b-collapse v-model="openOutline">-->
<!--        <pre class="language-html mb-0 mt-3">-->
<!--<code class="language-html">-->
<!--    &lt;b-card no-body&gt;-->
<!--  &lt;b-card-header&gt;-->
<!--    &lt;h5&gt;Basic Tabs&lt;/h5&gt;-->
<!--  &lt;/b-card-header&gt;-->
<!--  &lt;b-card-body&gt;-->
<!--    &lt;div class="d-flex gap-3 flex-wrap"&gt;-->
<!--{{ `-->
<!--&ltb-tabs v-model="activeTab" nav-class="tab-outline-primary"&gt;-->
<!--${tabs-->
<!--    .map(-->
<!--        (tab) => `  &ltb-tab title="${tab.label}"&gt;-->
<!--${tab.content.map((line) => `    &ltp class="f-s-15"&gt;${line}&lt/p&gt;`).join("\n")}-->
<!--  &lt/b-tab&gt;`-->
<!--    )-->
<!--    .join("\n")}-->
<!--&lt;/b-tabs&gt;` }}-->
<!--    &lt;/div&gt;-->
<!--  &lt;/b-card-body&gt;-->
<!--&lt;/b-card&gt;-->
<!--</code>-->
<!--        </pre>-->
<!--            </b-collapse>-->
<!--        </b-card>-->
<!--    </b-col>-->
<!--</template>-->
