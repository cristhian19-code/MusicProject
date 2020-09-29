<template>
  <v-card
    class="mx-auto my-3"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="music.album.cover_big"
    >
      <v-card-title>{{music.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Artista: {{music.artist.name}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Duration: {{music.duration}}</div>

      <div>Album: {{music.album.title}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        :href="music.artist.link"
      >
        Share
      </v-btn>
      <v-bottom-sheet inset v-model="activador">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="orange"
            text
            v-bind="attrs"
            v-on="on"
          >
            Listen Preview
          </v-btn>
        </template>
        <MusicPlayer v-bind:reproductor="{name: music.artist.name, title: music.title, preview: music.preview,activador}"/>
      </v-bottom-sheet>
    </v-card-actions>
  </v-card>
</template>

<script>
import MusicPlayer from './MusicPlayer'

export default {
  name: 'CardMusic',
  props:['music'],
  components:{
    MusicPlayer
  },
  data() {
    return {
      activador: false
    };
  },
};
</script>