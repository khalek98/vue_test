<script setup>
import TestPage from "@/components/TestPage.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <TestPage headers="What?" />
    <div class="transition"></div>
  </div>
</template>