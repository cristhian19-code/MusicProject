<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    > 
      <v-text-field
          v-model="search"
          class="mt-11 mb-3"
          label="Buscar"
          @keyup.enter="Search(search)"
      >
      </v-text-field>
      <v-icon>mdi-magnify</v-icon>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'App',

  data: () => ({
    search:'',
  }),
  methods:{
    ...mapActions(['Search'])
  }
};
</script>
