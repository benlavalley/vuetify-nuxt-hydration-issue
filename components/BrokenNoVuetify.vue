<script lang="ts" setup>
const { data: desserts, status } = await useFetch('/api/get');
const id = useId();
</script>

<template>
  <v-card title="Hydration Errors on Refresh - Raw Input">
    <v-card-text>
      <input :id="id" />
      <label :for="id"> Test Label </label>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn prepend-icon="i-mdi-refresh" @click="reloadNuxtApp();">Refresh</v-btn>
    </v-card-actions>
  </v-card>
</template>