
<template>
    <RouterView />
</template>

<script setup>

import { onMounted } from "vue";


onMounted(() => {
  const head = document.head;

  // Load Tabler Icons Webfont (for ::before / ::after CSS icons)
  const tablerLink = document.createElement("link");
  tablerLink.rel = "stylesheet";
  tablerLink.type = "text/css";
  tablerLink.href = "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css";
  head.appendChild(tablerLink);

  // Load Phosphor Icons Webfont (for ::before / ::after CSS icons)
  const weights = ["regular", "thin", "light", "bold", "fill", "duotone"];
  weights.forEach((weight) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = `https://unpkg.com/@phosphor-icons/web@2.0.3/src/${weight}/style.css`;
    head.appendChild(link);
  });
});
import 'bootstrap/dist/css/bootstrap.min.css';
</script>
