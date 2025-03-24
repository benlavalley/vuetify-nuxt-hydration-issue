<script lang="ts" setup>

</script>

<template>
  <v-card title="No Hydration Errors">
    <v-card-text>
      <v-text-field label="Label"></v-text-field>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn prepend-icon="i-mdi-refresh" @click="reloadNuxtApp();">Refresh</v-btn>
      </v-card-actions>
  </v-card>
</template>