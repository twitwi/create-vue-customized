<script setup lang="ts">
import EditLocalStorageConfig from '@/components/EditLocalStorageConfig.vue';
import { useSimpleStore } from '@/stores/persist'
const simple = useSimpleStore()
</script>

<template>
  <main>
    Hello {{ simple.userName }}
    <hr />
    <input v-model="simple.userName" />
    <input v-model="simple.userName" />
    <hr />
    (the two approaches will update only on refresh)
    (the one below is more to edit non-pinia values)
    <hr />
    <EditLocalStorageConfig />
    <EditLocalStorageConfig />
  </main>
</template>
