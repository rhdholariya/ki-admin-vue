<script setup>
import { onMounted, nextTick } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody
} from "bootstrap-vue-next";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhBriefcase } from "@phosphor-icons/vue";

onMounted(async () => {
  await nextTick();
  Prism.highlightAll();
});

// Breadcrumb data
const breadcrumbItems = {
  title: "Prismjs",
  items: [
    { label: "Advance UI", icon: PhBriefcase },
    { label: "Prismjs", active: true },
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />

        <b-row>
          <!-- Left Column -->
          <b-col xxl="6" xl="6" lg="12">
            <b-row>
              <!-- HTML Example -->
              <b-col cols="12">
                <b-card no-body>
                  <b-card-header>
                    <h5>Dual Listboxes - HTML</h5>
                  </b-card-header>
                  <b-card-body>
                    <pre><code class="language-html" v-pre>
&lt;div class="container-fluid"&gt;
  &lt;b-row&gt;
    &lt;b-col md="6"&gt;
      &lt;b-card&gt;
        &lt;b-card-header
          class="code-header"
          data-bs-toggle="collapse"
          href="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          as="div"
        &gt;
          &lt;h5 class="mb-0 d-inline"&gt;Select by class&lt;/h5&gt;
          &lt;i class="float-end"&gt;[icon here]&lt;/i&gt;
        &lt;/b-card-header&gt;
        &lt;b-card-body&gt;
          &lt;select class="select1 form-control" multiple&gt;
            &lt;option value="1"&gt;One&lt;/option&gt;
            &lt;option value="2"&gt;Two&lt;/option&gt;
            &lt;option value="3"&gt;Three&lt;/option&gt;
          &lt;/select&gt;
        &lt;/b-card-body&gt;
      &lt;/b-card&gt;
    &lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/div&gt;
                    </code></pre>
                  </b-card-body>
                </b-card>
              </b-col>

              <!-- CSS Example -->
              <b-col cols="12">
                <b-card no-body>
                  <b-card-header>
                    <h5>Dual Listboxes - CSS</h5>
                  </b-card-header>
                  <b-card-body>
                    <pre><code class="language-css">
{`.dual-listbox .dual-listbox__button {
  border-radius: 5px;
  background-color: rgba(var(--primary), 0.9);
  padding: 7px 12px;
}
.dual-listbox .dual-listbox__button:hover {
  background-color: rgba(var(--primary), 1);
  transition: all 0.3s ease;
}
.dual-listbox .dual-listbox__item.dual-listbox__item--selected {
  background-color: rgba(var(--primary), 0.1);
  color: rgba(var(--primary), 1);
}`}
                    </code></pre>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-col>

          <!-- Right Column -->
          <b-col xxl="6" xl="6" lg="12">
            <b-row>
              <!-- SCSS Example -->
              <b-col cols="12">
                <b-card no-body>
                  <b-card-header>
                    <h5>Dual Listboxes - SCSS</h5>
                  </b-card-header>
                  <b-card-body>
                    <pre class="h-390"><code class="language-css">
{`.dual-listbox {
  width: 100%;
  .dual-listbox__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: unset;
  }
  .dual-listbox__search {
    color: rgba(var(--secondary), 1);
    padding: 0.4rem 0.75rem;
    border: 1px solid var(--border_color);
    border-radius: 0.3rem;
    &:focus {
      color: rgba(var(--dark), 1);
      box-shadow: 0 0 0 0.25rem rgba(var(--primary), 0.3);
      border: 1px solid rgba(var(--primary), 1);
      outline: none;
    }
  }
  .dual-listbox__title {
    font-weight: 600;
    color: rgba(var(--dark), 0.60);
    padding: 0.6rem 1rem;
    border-radius: 0.3rem 0.3rem 0 0;
    border-color: rgba(var(--dark), 0.20);
  }
  .dual-listbox__available, .dual-listbox__selected {
    border-radius: 0 0 0.3rem 0.3rem;
    border: 1px solid rgba(var(--dark), 0.20);
  }
}`}
                    </code></pre>
                  </b-card-body>
                </b-card>
              </b-col>

              <!-- JS Example -->
              <b-col cols="12">
                <b-card no-body>
                  <b-card-header>
                    <h5>Dual Listboxes - JavaScript</h5>
                  </b-card-header>
                  <b-card-body>
  <pre><code class="language-javascript" v-pre>
&lt;script&gt;
  var dlb4 = new DualListbox(".select4", {
    showSortButtons: true,
  });
  var sources = document.querySelectorAll(".source");
  for (var i = 0; i &lt; sources.length; i++) {
    var source = sources[i];
    source.addEventListener("click", function(event) {
      var code = document.querySelector("." + event.currentTarget.dataset.source);
      code.classList.toggle("open");
    });
  }
&lt;/script&gt;
  </code></pre>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>
