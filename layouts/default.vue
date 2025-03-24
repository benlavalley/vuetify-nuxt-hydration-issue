<script lang="ts" setup>
import { version } from 'vuetify';
</script>
<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row class="w-75 mx-auto ga-3 justify-center align-center pb-4">            
            <h3 class="">Vuetify {{version}} - Hydration Error Example</h3>
            <h4 class="">Select a link below, refresh the page, and look at the console for hydration mismatch errors.</h4>
            <h5 class="">If icons are in SVG mode and if any icon is present in a parent template and ordered BEFORE rendering of the component with the input, the hydration error occurs.</h5>
            <div class="w-100 text-center"><Icon name="mdi:globe" /> </div>
            <h5 class="">Remove the icon above and note the hydration errors will go away.</h5>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center align-center ga-3">
        <v-card variant="tonal" class="text-center">
          <v-card-text>
            <NuxtLink to="/works">Working</NuxtLink>
            <div>No useFetch</div>
          </v-card-text>
        </v-card>
        <v-card variant="tonal" class="text-center">
          <v-card-text>
            <NuxtLink to="/broken">Not Working</NuxtLink>
            <div>useFetch present with Vuetify input</div>
          </v-card-text>
        </v-card>
        <v-card variant="tonal" class="text-center">
          <v-card-text>
            <NuxtLink to="/brokenNoVuetify">Not Working</NuxtLink>
            <div>useFetch present - raw input</div>
          </v-card-text>
        </v-card>
      </v-row>
      <v-row>
        <v-col cols="12">
          <slot />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
