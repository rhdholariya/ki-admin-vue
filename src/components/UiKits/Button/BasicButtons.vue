<script setup>
import {ref} from 'vue';
import {BButton, BCollapse, BRow, BCol, BCard, BCardBody, BCardHeader} from 'bootstrap-vue-next';
import {
    PhCode,
    PhDownload,
    PhWarning,
    PhFacebookLogo,
    PhTwitterLogo,
    PhPinterestLogo,
    PhLinkedinLogo,
    PhRedditLogo
} from '@phosphor-icons/vue';


// Collapse states
const openBasic = ref(false);
const openOutline = ref(false);
const openLight = ref(false);
const openIconButton = ref(false);
const openIconSocial = ref(false);

// Data
const buttonVariants = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'];
const outlineVariants = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'];

const lightButtonColors = [
    {type: 'primary', text: 'Primary'},
    {type: 'secondary', text: 'Secondary'},
    {type: 'success', text: 'Success'},
    {type: 'danger', text: 'Danger'},
    {type: 'warning', text: 'Warning'},
    {type: 'info', text: 'Info'},
    {type: 'light', text: 'Light'},
    {type: 'dark', text: 'Dark'},
];

const iconButtonVariants = [
    {
        variant: 'primary',
        buttons: [
            {text: 'Primary', icon: PhDownload, iconPosition: 'start'},
            {text: 'Secondary', icon: PhWarning, iconPosition: 'end'},
        ],
    },
    {
        variant: 'outline-primary',
        buttons: [
            {text: 'Primary', icon: PhDownload, iconPosition: 'start'},
            {text: 'Secondary', icon: PhWarning, iconPosition: 'end'},
        ],
    },
    {
        variant: 'light-primary',
        buttons: [
            {text: 'Primary', icon: PhDownload, iconPosition: 'start'},
            {text: 'Secondary', icon: PhWarning, iconPosition: 'end'},
        ],
    },
];

const iconSocialButtons = [
    {
        variant: 'primary',
        buttons: [
            {text: 'Facebook', icon: PhFacebookLogo, className: 'btn-facebook text-white'},
            {text: 'Twitter', icon: PhTwitterLogo, className: 'btn-twitter text-white'},
        ],
    },
    {
        variant: 'outline-primary',
        buttons: [
            {text: 'Pinterest', icon: PhPinterestLogo, className: 'btn-outline-pinterest'},
            {text: 'Linkedin', icon: PhLinkedinLogo, className: 'btn-outline-linkedin'},
        ],
    },
    {
        variant: 'light-primary',
        buttons: [
            {text: 'Reddit', icon: PhRedditLogo, className: 'btn-light-reddit'},
            {text: 'Twitter', icon: PhTwitterLogo, className: 'btn-light-twitter'},
        ],
    },
];

</script>

<template>
    <b-row class="g-3">
        <!-- Basic Buttons -->
        <b-col xl="12">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Basic Buttons</h5>
                        <b-button @click="openBasic = !openBasic" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-button v-for="v in buttonVariants" :key="v" :variant="v">
                            {{ v.charAt(0).toUpperCase() + v.slice(1) }}
                        </b-button>
                    </div>

                    <b-collapse v-model="openBasic" class="mt-3">
          <pre class="language-html"><code>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Basic Buttons&lt;/h5&gt;
  &lt;/b-card-header&gt;
              &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-3"&gt;
{{
                  buttonVariants.map(v => `  &lt;b-button variant="${v}"&gt;${v.charAt(0).toUpperCase() + v.slice(1)}&lt;/b-button&gt;`).join('\n')
              }}
  &lt;/div&gt;

              &lt;/b-card-body&gt;
&lt;/b-card&gt;
          </code></pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Outline Buttons -->
        <b-col xl="12">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Outline Buttons</h5>
                        <b-button @click="openOutline = !openOutline" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-button v-for="v in outlineVariants" :key="v" :variant="`outline-${v}`">
                            {{ v.charAt(0).toUpperCase() + v.slice(1) }}
                        </b-button>
                    </div>

                    <b-collapse v-model="openOutline" class="mt-3">
          <pre class="language-html"><code>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Outline Buttons&lt;/h5&gt;
  &lt;/b-card-header&gt;
              &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-3"&gt;
{{
                  outlineVariants.map(v => `  &lt;b-button variant="outline-${v}"&gt;${v.charAt(0).toUpperCase() + v.slice(1)}&lt;/b-button&gt;`).join('\n')
              }}
  &lt;/div&gt;
              &lt;/b-card-body&gt;
&lt;/b-card&gt;
          </code></pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Light Buttons -->
        <b-col xl="12">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Light Buttons</h5>
                        <b-button @click="openLight = !openLight" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <b-button
                            v-for="btn in lightButtonColors"
                            :key="btn.type"
                            :variant="`light-${btn.type}`"
                        >
                            {{ btn.text }}
                        </b-button>
                    </div>

                    <b-collapse v-model="openLight" class="mt-3">
          <pre class="language-html"><code>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Light Buttons&lt;/h5&gt;
  &lt;/b-card-header&gt;
              &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-3"&gt;
{{
                  lightButtonColors.map(btn => `  &lt;b-button variant="light-${btn.type}"&gt;${btn.text}&lt;/b-button&gt;`).join('\n')
              }}
  &lt;/div&gt;
              &lt;/b-card-body&gt;
&lt;/b-card&gt;
          </code></pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Icon Buttons -->
        <b-col xl="12">
            <b-card no-body>
                <template #header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Icon Buttons</h5>
                        <b-button @click="openIconButton = !openIconButton" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </template>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <div v-for="(group, idx) in iconButtonVariants" :key="idx" class="d-flex gap-2">
                            <b-button
                                v-for="(btn, i) in group.buttons"
                                :key="i"
                                :variant="i===0 ? group.variant : group.variant.replace('primary','secondary')"
                                class="d-inline-flex align-items-center gap-1"
                            >
                                <component :is="btn.icon" size="16" v-if="btn.iconPosition==='start'"/>
                                <span>{{ btn.text }}</span>
                                <component :is="btn.icon" size="16" v-if="btn.iconPosition==='end'"/>
                            </b-button>
                        </div>
                    </div>

                    <b-collapse v-model="openIconButton" class="mt-3">
  <pre class="language-html"><code>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Icon Buttons&lt;/h5&gt;
  &lt;/b-card-header&gt;
      &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-3"&gt;
{{
          iconButtonVariants.map(group =>
              group.buttons.map((btn, i) => {
                  const variant = i === 0 ? group.variant : group.variant.replace('primary', 'secondary');
                  const iconTag = '&lt;' + btn.icon.name + ' size="16" /&gt;';
                  return `  &lt;b-button variant="${variant}" class="d-inline-flex align-items-center gap-1"&gt;${btn.iconPosition === 'start' ? iconTag + ' ' : ''}${btn.text}${btn.iconPosition === 'end' ? ' ' + iconTag : ''}&lt;/b-button&gt;`;
              }).join('\n')
          ).join('\n')
      }}
  &lt;/div&gt;
      &lt;/b-card-body&gt;
&lt;/b-card&gt;
  </code></pre>
                    </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Social Buttons -->
        <b-col xl="12">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Social Buttons</h5>
                        <b-button @click="openIconSocial = !openIconSocial" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <div class="d-flex flex-wrap gap-2">
                        <div v-for="(group, idx) in iconSocialButtons" :key="idx" class="d-flex gap-2">
                            <b-button
                                v-for="btn in group.buttons"
                                :key="btn.text"
                                :variant="group.variant"
                                :class="`d-inline-flex align-items-center gap-1 rounded-pill ${btn.className}`"
                            >
                                <component :is="btn.icon" size="18"/>
                                <span>{{ btn.text }}</span>
                            </b-button>
                        </div>
                    </div>

                    <b-collapse v-model="openIconSocial" class="mt-3">
  <pre class="language-html"><code>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Social Buttons&lt;/h5&gt;
  &lt;/b-card-header&gt;
      &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-2"&gt;
{{
          iconSocialButtons.map(group =>
              group.buttons.map(btn => {
                  const iconTag = '&lt;' + btn.icon.name + ' size="18" /&gt;';
                  return `  &lt;b-button variant="${group.variant}" class="d-inline-flex align-items-center gap-1 rounded-pill ${btn.className}"&gt;${iconTag} ${btn.text}&lt;/b-button&gt;`;
              }).join('\n')
          ).join('\n')
      }}
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
