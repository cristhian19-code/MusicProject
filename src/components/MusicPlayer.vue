<template>
	<v-card tile max-width>
	    <v-progress-linear
	      :value="contador*3.4"
	      :max="maximo"
	      class="my-0"
	      height="4"
	    ></v-progress-linear>
    	<v-list>
	      	<v-list-item>
		        <v-list-item-content>
		          <v-list-item-title>{{reproductor.name}}</v-list-item-title>
		          <v-list-item-subtitle>{{reproductor.title}}</v-list-item-subtitle>
		        </v-list-item-content>

		        <v-spacer></v-spacer>

		        <v-list-item-icon>
		          <v-btn icon>
		            <v-icon>mdi-rewind</v-icon>
		          </v-btn>
		        </v-list-item-icon>

		        <v-list-item-icon v-if="reproducir" :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }" v-on:click="Click">
		          <v-btn icon>
		            <v-icon>mdi-pause</v-icon>
		          </v-btn>
		        </v-list-item-icon>

		        <v-list-item-icon v-else :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }" v-on:click="Click">
		          <v-btn icon>
		            <v-icon>mdi-play</v-icon>
		          </v-btn>
		        </v-list-item-icon>

		        <v-list-item-icon
		          class="ml-0"
		          :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
	        	>
	          	<v-btn icon>
	            	<v-icon>mdi-fast-forward</v-icon>
	          	</v-btn>
	        	</v-list-item-icon>
		    </v-list-item>
	    </v-list>
	 </v-card>
</template>

<script>
export default {

  name: 'MusicPlayer',
  props:['reproductor'],
  data() {
    return {
    	music: new Audio(this.reproductor.preview),
    	controlador: 1,
		reproducir: false,
		maximo: 30,
    	contador:0,
    	avance : null
    };
  },
  watch:{
  	reproductor:function(val){
  		if(!val.activador){
  			this.music.pause()
  			this.reproducir = false
  		}
  	}
  },
  methods:{
  	Click: function(){
  		if(this.controlador %2 !=0){
  			this.music.play();
  			//almacenando el indentificador del setInterval
  			this.avance = setInterval(()=>{
				  this.contador++;

				  if(this.contador > 30){
					this.music.pause();
		  			this.reproducir = false
					clearInterval(this.avance)
					this.controlador++;
					this.contador = 0;
				  }

  			},1000);
  			//cambiando el estado para mostrar el boton reproducir
  			this.reproducir = true
  		}else{
  			this.music.pause();
  			//pausando el setInteval
  			clearInterval(this.avance)
  			//cambiando el estado para mostrar el boton pausar
  			this.reproducir = false
  		}
		  this.controlador++;
  	}
  },
};

</script>
