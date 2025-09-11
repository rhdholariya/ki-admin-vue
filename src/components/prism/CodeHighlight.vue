<script setup lang="ts">
import { onMounted, watch, ref, nextTick } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const props = defineProps<{
  code: string;
  language?: string;
}>();

const codeRef = ref<HTMLElement | null>(null);

const highlight = async () => {
  await nextTick();
  if (codeRef.value) {

    codeRef.value.textContent = props.code.trim();
    Prism.highlightElement(codeRef.value);
  }
};

onMounted(highlight);
watch(() => props.code, highlight);
</script>

<template>
  <pre class="rounded p-2">
    <code
        ref="codeRef"
        :class="`language-${props.language || 'html'}`"
    ></code>
  </pre>
</template>

<style scoped>
pre {
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.5;
}
</style>
