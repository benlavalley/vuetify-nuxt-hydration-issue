// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-23',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@nuxt/icon'],
  icon: {
		mode: 'svg',
	}
});
