<template>
  <div class="prueba-data">
    <h1>{{ msg }}</h1>
    <h2>{{ person.name }} {{ person.lastName }}</h2>
    <h3>FE Developed with {{ person.frontend }}</h3>
  </div>
</template>

<script>
export default {
  name: "PruebaDos",
  props: {
    msg: String,
  },
  data() {
    return {
      person: {
        id: 13801637,
        name: "Hector Jose",
        lastName: "Vurchio Hurtado",
        frontend: "Vuejs",
      },
    };
  },
};
</script>

<style scoped></style>
