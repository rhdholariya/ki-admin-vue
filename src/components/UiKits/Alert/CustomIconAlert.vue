<script setup>
import {BAlert, BButton, BCard, BCardBody, BCardHeader, BCol, BCollapse} from "bootstrap-vue-next";
import { ref, h} from "vue";
import {
    PhCode,
    PhInfo,
    PhShoppingCartSimple,
    PhWarning,
} from "@phosphor-icons/vue";

const open = ref(false);


const alerts = ref([
    {
        type: "basic",
        color: "primary",
        image: "/images/icons/cookie-.png",
        message:
            "We have Cookies! We use it to ensure you get the best experience on our website and service",
        buttons: [{type: "button", class: "btn-close", label: ""}],
        show: true,
    },
    {
        type: "label",
        color: "success",
        icon: h(PhShoppingCartSimple, {size: 16}),
        message: "Your order is delayed",
        buttons: [{type: "button", class: "btn btn-sm btn-success mg-s-30", label: "Accept"}],
        show: true,
    },
    {
        type: "border",
        color: "warning",
        icon: h(PhInfo, {size: 16, class: "me-2 text-info"}),
        title: "New Version is now available",
        message:
            "With this new Version you have access to more customization features and file export options.",
        buttons: [
            {type: "link", href: "#", class: "link-primary text-d-underline", label: "Don't allow"},
            {type: "link", href: "#", class: "link-primary text-d-underline ms-2", label: "Allow"},
        ],
        show: true,
    },
    {
        type: "custom",
        color: "warning",
        icon: h(PhWarning, {size: 25, weight: "fill", class: "align-middle text-warning"}),
        title: "Under maintenance",
        message:
            "Our team is currently checking some errors in this area. We don't recommend changing any of your settings until the next update.",
        buttons: [{type: "link", href: "#", class: "btn btn-warning", label: "Get more info"}],
        show: true,
    },
]);

</script>
<template>
    <b-col lg="6">
        <b-card no-body>

            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Custom Alerts With Dismissing</h5>
                    <b-button @click="open = !open" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>

                <div v-for="(alert, index) in alerts" :key="index">
                    <!-- Basic Alert -->
                    <b-alert v-if="alert.type === 'basic' && alert.show" :variant="alert.color" show dismissible>
                        <div class="d-flex justify-content-between align-items-center">
                            <b-img :src="alert.image" class="w-35 h-35 me-2"/>
                            <p class="mb-0">{{ alert.message }}</p>
                        </div>
                    </b-alert>
                    <!-- Label Alert -->
                    <b-alert
                        v-else-if="alert.type === 'label' && alert.show"
                        :class="['alert-label', `alert-label-${alert.color}`]"
                        show
                    >
                        <div class="d-flex justify-content-between align-items-center w-100">
                            <p class="mb-0 d-flex justify-between align-items-center gap-5">
              <span :class="['label-icon', `label-icon-${alert.color}`]">
                <component :is="alert.icon"/>
              </span>
                                {{ alert.message }}
                                <button
                                    v-for="(btn, i) in alert.buttons"
                                    :key="i"
                                    :class="btn.class "
                                    @click="dismissAlert(index)"
                                >
                                    {{ btn.label }}
                                </button>
                            </p>
                        </div>
                    </b-alert>

                    <b-alert v-else-if="alert.type === 'border' && alert.show" :variant="`border-${alert.color}`" show>
                        <h6>
                            <component :is="alert.icon" class="me-2"/>
                            {{ alert.title }}
                        </h6>
                        <p>{{ alert.message }}</p>
                        <div class="text-end">
                            <a
                                v-for="(btn, i) in alert.buttons"
                                :key="i"
                                :href="btn.href"
                                :class="btn.class"
                                @click.prevent="dismissAlert(index)"
                            >{{ btn.label }}</a
                            >
                        </div>
                    </b-alert>

                    <div v-else-if="alert.type === 'custom' && alert.show" :variant="alert.color"
                         class="custom-alert p-0">
                        <div class="alert-header">
                            <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                                @click="dismissAlert(index)"
                            />
                        </div>
                        <div class="alert-body">
                            <h3 class="mb-0 text-center mb-3">
                                <component :is="alert.icon"/>
                                {{ alert.title }}
                            </h3>
                            <p class="mb-3">{{ alert.message }}</p>
                            <div class="text-end">
                                <a
                                    v-for="(btn, i) in alert.buttons"
                                    :key="i"
                                    :href="btn.href"
                                    :class="btn.class"
                                    @click.prevent="dismissAlert(index)"
                                >{{ btn.label }}</a
                                >
                            </div>
                        </div>
                    </div>
                </div>


            <b-collapse v-model="open" class="mt-3">
        <pre class="language-html" tabindex="0">
<code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Custom Alerts With Dismissing&lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
  &lt;!-- Basic Alert Example --&gt;
  &lt;b-alert variant="primary" show dismissible&gt;
    &lt;div class="d-flex justify-content-between align-items-center"&gt;
      &lt;img src="/images/icons/cookie-.png" class="w-35 h-35 me-2" /&gt;
      &lt;p class="mb-0"&gt;We have Cookies! We use it to ensure you get the best experience on our website and service&lt;/p&gt;
    &lt;/div&gt;
  &lt;/b-alert&gt;
  &lt;!-- Label Alert Example --&gt;
  &lt;b-alert class="alert-label alert-label-success" show&gt;
    &lt;div class="d-flex justify-content-between align-items-center w-100"&gt;
      &lt;p class="mb-0 d-flex justify-between align-items-center gap-5"&gt;
        &lt;span class="label-icon label-icon-success"&gt;
          &lt;PhShoppingCartSimple size="16" /&gt;
        &lt;/span&gt;
        Your order is delayed
        &lt;button class="btn btn-sm btn-success ms-4"&gt;Accept&lt;/button&gt;
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/b-alert&gt;
  &lt;!-- Border Alert Example --&gt;
  &lt;b-alert variant="border-warning" show&gt;
    &lt;h6&gt;
      &lt;PhInfo size="16" class="me-2 text-info" /&gt;
      New Version is now available
    &lt;/h6&gt;
    &lt;p&gt;With this new Version you have access to more customization features and file export options.&lt;/p&gt;
    &lt;div class="text-end"&gt;
      &lt;a href="#" class="link-primary text-d-underline"&gt;Don't allow&lt;/a&gt;
      &lt;a href="#" class="link-primary text-d-underline ms-2"&gt;Allow&lt;/a&gt;
    &lt;/div&gt;
  &lt;/b-alert&gt;
  &lt;!-- Custom Alert Example --&gt;
  &lt;div class="custom-alert p-0" variant="warning"&gt;
    &lt;div class="alert-header"&gt;
      &lt;button type="button" class="btn-close" aria-label="Close"&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="alert-body"&gt;
      &lt;h3 class="mb-0 text-center mb-3"&gt;
        &lt;PhWarning size="25" weight="fill" class="align-middle text-warning" /&gt;
        Under maintenance
      &lt;/h3&gt;
      &lt;p class="mb-3"&gt;Our team is currently checking some errors in this area. We don't recommend changing any of your settings until the next update.&lt;/p&gt;
      &lt;div class="text-end"&gt;
        &lt;a href="#" class="btn btn-warning"&gt;Get more info&lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
     &lt;b-card-body&gt;
&lt;/b-card&gt;
</code>
        </pre>
            </b-collapse>
            </b-card-body>
        </b-card>
    </b-col>
</template>