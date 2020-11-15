<template>
	<div>
		<persona></persona>
		<persona></persona>
		<persona></persona>
	</div>
</template>

<script>
import persona from './components/Persona'

export default {
	components: { persona },
	data() {
		return {}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
