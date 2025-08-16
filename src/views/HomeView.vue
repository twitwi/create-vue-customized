<script setup lang="ts">
import EditLocalStorageConfig from '@/components/EditLocalStorageConfig.vue';
import { yjs } from '@/main';
import { useLocalStore, useMainStore } from '@/stores/persist'
const local = useLocalStore()
const main = useMainStore()

// tools that could go in an advanced config view

function prompt(act: CallableFunction, what = "Are you sure?") {
  if (confirm(what)) {
    act()
  }
}
function deleteLocalYdoc() {
  yjs.idb?.clearData()
  location.reload()
}
</script>

<template>
  <main>
    Hello {{ local.userName }}, {{ main.data.count }}
    <hr />
    <input v-model="local.userName" />
    <button @click="main.data.count++">+</button>
    <hr />
    Actually useful, edit server address:<br />
    <EditLocalStorageConfig mode="details" />
    <hr />
    Use at your own risks:<br />
    <button @click="prompt(deleteLocalYdoc)">Delete local yjs data (and reload)</button>
  </main>
</template>
