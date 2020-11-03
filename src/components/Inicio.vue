<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        v-for="item in secciones"
        v-bind:key="item.nombre"
      >
        <v-toolbar :color="item.color" dark>
          <v-toolbar-title>{{ item.nombre }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card>
          <v-card-text v-for="data in item.data" v-bind:key="data.nombre">
            <v-row>
              <v-col cols="12" sm="10">
                <a class="black--text text--lighten-1" :href="item.url">{{
                  data.nombre
                }}</a>
                <p>{{ item.descripcion }}</p>
              </v-col>
              <v-col cols="12" sm="2">
                <v-card elevation="1">
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="4">
                        <v-img width="50px" :src="data.lastPostUserAvatar" />
                      </v-col>
                      <v-col cols="12" sm="8">
                        <a>{{data.lastPostUserName}}</a>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    secciones: [
      {
        nombre: "Seccion 1",
        color: "secondary",
        descripcion: "Hola este es una pequeña desripcion",
        data: [
          {
            nombre: "cosas 1",
            descripcion: "Esta cosa es la cosa",
            url: "",
            lastPostName: "El Jona",
            lastPostUserName: "El Jona",
            lastPostUserAvatar: "https://fotos.subefotos.com/1871862d87bb8037d953317fb4497189o.png",
          },
          {
            nombre: "cosas 2",
            descripcion: "Esta cosa es la cosa",
            url: "",
            lastPostName: "",
            lastPostUserName: "El Jona",
            lastPostUserAvatar: "https://fotos.subefotos.com/1871862d87bb8037d953317fb4497189o.png",
          },
        ],
      },
      {
        nombre: "Seccion 2",
        color: "primary",
        descripcion: "Hola este es una pequeña desripcion",
        data: [
          {
            nombre: "cosas 3",
            descripcion: "Esta cosa es la cosa",
            url: "",
            lastPostName: "",
            lastPostUserName: "El Choro Gustavo",
            lastPostUserAvatar: "https://fotos.subefotos.com/1871862d87bb8037d953317fb4497189o.png",
          },
          {
            nombre: "cosas 4",
            descripcion: "Esta cosa es la cosa",
            url: "",
            lastPostName: "",
            lastPostUserName: "El Gustavo",
            lastPostUserAvatar: "https://fotos.subefotos.com/1871862d87bb8037d953317fb4497189o.png",
          },
        ],
      },
    ],
  }),
};
</script>
