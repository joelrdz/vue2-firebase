<template>
<div id="app">
	<h1>Vue Router - Nested routes</h1>
	<router-link to="/" exact active-class="activo" tag="li">
		<a>Home</a>
	</router-link>
	<router-link to="/equipo" active-class="activo" tag="li" >
		<a>Equipo</a>
	</router-link>
	<router-link to="/equipo/jon" active-class="activo" tag="li" >
		<a>Equipo Jon Snow</a>
	</router-link>
	<hr>
	<router-view></router-view>
</div>
</template>

<script>
export default {
	name: 'App',
	components: {}
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

.activo a {
	color: red;
}
</style>
