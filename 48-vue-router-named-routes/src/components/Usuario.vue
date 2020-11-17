<template>
	<section>
		<h1>El id es: {{ $route.params.id }}</h1>
		<h2>Jon Snow</h2>
		<h5>jon@snow.got</h5>
		<!-- <router-link :to="'/equipo/' + $route.params.id + '/bio'">Bio</router-link> -->
		<!-- <router-link :to="'/equipo/' + $route.params.id + '/fotos'">Fotos</router-link> -->
		<router-link :to="{ name: 'bio' }">Bio</router-link>
		<router-link :to="{ name: 'fotos' }">Fotos</router-link>
		<router-view></router-view>
	</section>
</template>