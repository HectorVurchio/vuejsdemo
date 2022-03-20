<template>
  <div class="prueba-data">
    <h1>{{ msg }}</h1>
    <h4>{{ person.id }}</h4>
    <span>{{ person.name }} on {{ person.lastName }}</span>
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
        ciizesnship: "Venezuelan",
      },
    };
  },
};
</script>

<style scoped></style>
