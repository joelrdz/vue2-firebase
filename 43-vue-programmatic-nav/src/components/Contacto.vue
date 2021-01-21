<template>
  <section>
    <h2>Contacto</h2>
    <button @click="backHome()">Volver a home</button>
  </section>
</template>

<script>
export default {
  created() {
    setTimeout(() => this.$router.push('/'), 2000);
  },
  methods: {
    backHome() {
      this.$router.push('/', ()=> console.log('Ruta cambiada')); // Home
    }
  }
}
</script>