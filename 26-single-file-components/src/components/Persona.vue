<template>
<div>
	<template v-if="persona">
		<h1 v-text="datosPersona.nombre"></h1>
		<h2 v-text="datosPersona.email"></h2>
		<img :src="datosPersona.foto">
	</template>
	<span v-else>Cargando persona...</span>
</div>
</template>

<script>
import axios from 'axios';
export default {
	mounted() {
		axios.get('https://randomuser.me/api/')
			.then((response) => {
				this.persona = response.data.results[0];
			})
	},
	data() {
		return {
			persona: null,
		}
	},
	computed: {
		datosPersona() {
			return {
				nombre: `${this.persona.name.first} ${this.persona.name.last}`,
				foto: this.persona.picture.large,
				email: this.persona.email,
			}
		}
	}
}
</script>

<style></style>