<template>
	<v-layout :wrap="true" class="mt-5">
		<CardMusic v-for="(music,index) in response" :key="index" v-bind:music="music"/>
	</v-layout>
</template>

<script>
import CardMusic from '../components/CardMusic'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components:{
  	CardMusic
  },
  computed:{
  	...mapState(['response'])
  }
};
</script>
