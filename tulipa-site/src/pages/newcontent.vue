<template>
  <v-app>
    <AppNavbar />
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title>
                Welcome to My Static Website
              </v-card-title>
              <v-card-text>
                <p>
                  This is a simple static website built with Vuetify and Vue.js.
                </p>
                <v-divider></v-divider>
                <p>
                  You can add more content here, such as images, links, or other Vuetify components.
                </p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" href="https://vuetifyjs.com/" target="_blank">
                  Learn More About Vuetify
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// No script needed for static content
</script>
