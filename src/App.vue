<template>
  <v-app>
    <v-container>
      <v-row justify="center" align="start" dense>
        <v-card>
          <v-img width="auto" src="./assets/ejemplo.jpg" />
          <v-card-title class="title">{{Titulo}}</v-card-title>
        </v-card>
      </v-row>
    </v-container>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  mounted() {},

  data: () => ({
    Titulo:'Foro de Ejemplo',
    goTo(name) {
      if (this.$route.name != name) this.$router.push({ name: name });
    },
  }),
};
</script>
