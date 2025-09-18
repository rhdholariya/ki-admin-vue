<script setup>
import { ref } from 'vue';
import { BCol, BCard, BCardHeader, BCardBody, BRow } from 'bootstrap-vue-next';

const items = ref([
  {
    title: 'By adding classes',
    description: `Add the class <code>animate__animated</code> to an element, along with any of the animation names (forget the <code>animate__</code> prefix!):`,
    code: `<h5 class="animate__animated animate__bounce">An animated element</h5>`,
    codeDescription: [
      'Utility Classes:',
      'Animate.css provides the following delays:',
      'animate__delay-2s, animate__delay-3s, animate__delay-4s, animate__delay-5s',
      'Slow, slower, fast, and Faster classes:',
      'animate__slow, animate__slower, animate__fast, animate__faster',
      'Repeating classes:',
      'animate__repeat-1, animate__repeat-2, animate__repeat-3, animate__infinite'
    ]
  },
  {
    title: 'Using @keyframes',
    description: `Even though the library provides you a few helper classes like the <code>animated</code> class to get you up and running quickly, you can directly use the provided animations <code>keyframes</code>.`,
    code: `.my-element {
  display: inline-block;
  margin: 0 0.5rem;
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}`,
    codeDescription: []
  },
  {
    title: 'CSS Custom Properties (CSS Variables)',
    description: `Animate.css uses custom properties (also known as CSS variables) to define the animation's duration, delay, and iterations.`,
    code: `/* This only changes this particular animation duration */
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}
/* This changes all the animations globally */
:root {
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
}`,
    codeDescription: []
  }
]);
</script>



<template>
  <b-col xs="12">
    <b-card>
      <b-card-header>
        <h5>How to use</h5>
      </b-card-header>
      <b-card-body>
        <b-row>
          <b-col xs="12">
            <ol class="list-group list-group-numbered">
              <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(item, index) in items" :key="index">
                <div class="ms-2 me-auto">
                  <h6>{{ item.title }}</h6>
                  <p v-html="item.description"></p>
                  <div v-if="item.code" class="ms-4">
                    <p v-for="(line, idx) in item.codeDescription" :key="idx">{{ line }}</p>
                    <code>{{ item.code }}</code>
                  </div>
                </div>
              </li>
            </ol>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-col>
</template>


